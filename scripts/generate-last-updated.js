const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, ".docfx");
const outputFile = path.join(outputDir, "last-updated.json");
const excludedDirectories = new Set([
  ".docfx",
  ".git",
  ".github",
  "_backup",
  "_site",
  "my-template",
  "node_modules",
]);
const excludedFiles = new Set(["README.md"]);
const contentExtensions = new Set([".md", ".yml", ".yaml"]);

function today() {
  return new Date().toISOString().slice(0, 10);
}

function runGit(args) {
  const result = spawnSync("git", args, {
    cwd: root,
    encoding: "utf8",
    windowsHide: true,
  });

  return result.status === 0 ? result.stdout.trim() : "";
}

function isChanged(relPath) {
  return runGit(["status", "--porcelain", "--", relPath]) !== "";
}

function lastCommittedDate(relPath) {
  return runGit(["log", "-1", "--format=%cs", "--", relPath]);
}

function fileDate(relPath, absPath) {
  if (isChanged(relPath)) {
    return today();
  }

  const committedDate = lastCommittedDate(relPath);
  if (committedDate) {
    return committedDate;
  }

  return fs.statSync(absPath).mtime.toISOString().slice(0, 10);
}

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!excludedDirectories.has(entry.name)) {
        walk(path.join(dir, entry.name), files);
      }
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const absPath = path.join(dir, entry.name);
    const relPath = path.relative(root, absPath).replace(/\\/g, "/");
    const ext = path.extname(entry.name).toLowerCase();

    if (contentExtensions.has(ext) && !excludedFiles.has(relPath)) {
      files.push({ absPath, relPath });
    }
  }
}

function generate() {
  const files = [];
  walk(root, files);

  files.sort((a, b) => a.relPath.localeCompare(b.relPath));

  const metadata = {
    lastUpdated: {},
    lastUpdatedText: {},
  };

  for (const file of files) {
    const date = fileDate(file.relPath, file.absPath);
    metadata.lastUpdated[file.relPath] = date;
    metadata.lastUpdatedText[file.relPath] = `Last updated on ${date}`;
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(metadata, null, 2) + "\n");
  console.log(`[last-updated] wrote ${files.length} entries to ${path.relative(root, outputFile)}`);
}

if (require.main === module) {
  generate();
}

module.exports = generate;
