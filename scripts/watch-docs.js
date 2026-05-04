const browserSync = require("browser-sync").create();
const chokidar = require("chokidar");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const siteDir = path.join(root, "_site");
const port = Number(process.env.PORT || 8080);
const debounceMs = Number(process.env.WATCH_DEBOUNCE_MS || 300);

const watchGlobs = [
  "docs/**/*.{md,yml,yaml,json}",
  "_media/**/*",
  "my-template/**/*",
  "*.md",
  "*.yml",
  "*.yaml",
  "docfx.json",
  "docfx.local.json",
  "favicon.ico",
  "robots.txt",
  "llms.txt",
  "llms-full.txt",
];

const ignored = [
  "**/_site/**",
  "**/node_modules/**",
  "**/.git/**",
  "**/_backup/**",
  "**/*.log",
  "**/*.tmp",
];

let buildProcess = null;
let buildRunning = false;
let rebuildRequested = false;
let debounceTimer = null;
let buildNumber = 0;
let shuttingDown = false;

function timestamp() {
  return new Date().toLocaleTimeString();
}

function log(message) {
  console.log(`[watch ${timestamp()}] ${message}`);
}

function relativePath(filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

function startServer() {
  fs.mkdirSync(siteDir, { recursive: true });

  browserSync.init({
    server: siteDir,
    port,
    open: false,
    notify: false,
    ghostMode: false,
    ui: false,
    logPrefix: "docs",
    logLevel: "info",
    files: false,
  });
}

function scheduleBuild(reason) {
  if (shuttingDown) {
    return;
  }

  if (buildRunning) {
    rebuildRequested = true;
    log(`queued rebuild after ${reason}`);
    return;
  }

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    runBuild(reason);
  }, debounceMs);
}

function runBuild(reason) {
  if (buildRunning || shuttingDown) {
    rebuildRequested = true;
    return;
  }

  buildRunning = true;
  rebuildRequested = false;
  buildNumber += 1;

  const currentBuild = buildNumber;
  const started = Date.now();
  const docfxCommand = process.platform === "win32" ? "docfx.exe" : "docfx";

  log(`build #${currentBuild} started (${reason})`);

  buildProcess = spawn(docfxCommand, ["build"], {
    cwd: root,
    stdio: "inherit",
    shell: false,
  });

  buildProcess.on("error", (error) => {
    buildRunning = false;
    buildProcess = null;
    log(`build #${currentBuild} could not start: ${error.message}`);
    if (rebuildRequested) {
      scheduleBuild("queued changes");
    }
  });

  buildProcess.on("exit", (code, signal) => {
    const seconds = ((Date.now() - started) / 1000).toFixed(1);
    const shouldRebuild = rebuildRequested;

    buildRunning = false;
    buildProcess = null;

    if (signal) {
      log(`build #${currentBuild} stopped by ${signal} after ${seconds}s`);
    } else if (code === 0) {
      log(`build #${currentBuild} finished in ${seconds}s`);
      if (!shouldRebuild) {
        browserSync.reload();
      }
    } else {
      log(`build #${currentBuild} failed with exit code ${code} after ${seconds}s`);
    }

    if (shouldRebuild) {
      scheduleBuild("queued changes");
    }
  });
}

function startWatcher() {
  const watcher = chokidar.watch(watchGlobs, {
    cwd: root,
    ignored,
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 150,
      pollInterval: 50,
    },
  });

  watcher.on("ready", () => {
    log("watching docs, media, templates, and DocFX config");
    scheduleBuild("startup");
  });

  watcher.on("all", (event, filePath) => {
    scheduleBuild(`${event} ${relativePath(filePath)}`);
  });

  return watcher;
}

function shutdown(watcher) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  clearTimeout(debounceTimer);
  log("shutting down");

  if (buildProcess) {
    buildProcess.kill();
  }

  Promise.resolve(watcher.close())
    .catch(() => undefined)
    .finally(() => {
      browserSync.exit();
      process.exit(0);
    });
}

startServer();
const watcher = startWatcher();

process.once("SIGINT", () => shutdown(watcher));
process.once("SIGTERM", () => shutdown(watcher));
