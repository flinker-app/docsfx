---
title: Set up IFC MCP
description: Install and configure IFC MCP in Claude Desktop, VS Code Copilot, Codex in VS Code, Claude Code, or another MCP client.
keywords: set up IFC MCP, install IFC MCP, Claude Desktop MCP, VS Code MCP, Codex MCP, Claude Code MCP, npx ifc-mcp
canonical_url: https://docs.flinker.app/docs/ifc-mcp-setup.html
---

# Set up IFC MCP

IFC MCP runs as a local MCP server from npm. You do not need a separate desktop installer.

## Prerequisites

Install Node.js 18.20 or newer from the [official Node.js download page](https://nodejs.org/en/download). Choose the LTS version for your operating system.

After installing Node.js, reopen the app where you want to use IFC MCP. `npx` is included with Node.js and is used to start the MCP server.

You can check your installation from a terminal:

```bash
node --version
npx --version
```

## Install command

Most MCP clients start IFC MCP with this command:

```bash
npx -y ifc-mcp
```

The MCP transport is `stdio`. The server package name is `ifc-mcp`.

## Claude Desktop

Add IFC MCP to the Claude Desktop local MCP server configuration.

1. Open Claude Desktop.
2. Open `Settings`.
3. Open the developer settings.
4. Select `Edit Config` if the button is available.
5. Add the following server entry.
6. Save the file.
7. Fully quit and reopen Claude Desktop.

```json
{
  "mcpServers": {
    "ifc-mcp": {
      "command": "npx",
      "args": ["-y", "ifc-mcp"]
    }
  }
}
```

If the config file already contains JSON, add only the `ifc-mcp` entry inside the existing `mcpServers` object.

| Operating system | Claude Desktop config file |
|---|---|
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |

For more detail, see Claude's [local MCP server guide](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop).

## VS Code Copilot

You can install IFC MCP in VS Code with the install link or by adding a project config file.

> [!div class="nextstepaction"]
> [Install IFC MCP in VS Code](https://vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522IFC%2520MCP%2522%252C%2522type%2522%253A%2522stdio%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522-y%2522%252C%2522ifc-mcp%2522%255D%257D)

To configure a project manually, create or edit `.vscode/mcp.json`:

```json
{
  "servers": {
    "IFC MCP": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "ifc-mcp"]
    }
  }
}
```

Reload VS Code after saving the file. Open Chat and use the tools or configure-tools button to confirm that IFC MCP is available.

For more detail, see the [VS Code MCP server documentation](https://code.visualstudio.com/docs/agent-customization/mcp-servers).

## Codex in VS Code

Add IFC MCP from the Codex settings UI or from the terminal.

1. Open VS Code.
2. Open the Codex panel.
3. Open Codex settings.
4. Select `MCP servers`.
5. Add a server named `ifc-mcp`.
6. Set the command to `npx`.
7. Set the arguments to `-y ifc-mcp`.
8. Save the server.
9. Reload VS Code or start a new Codex session.

You can also add the server from a terminal:

```powershell
codex mcp add ifc-mcp -- npx -y ifc-mcp
```

For more detail, see the [Codex MCP documentation](https://developers.openai.com/codex/mcp).

## Claude Code in VS Code

For a project-level setup, create or edit `.mcp.json` in the project root:

```json
{
  "mcpServers": {
    "ifc-mcp": {
      "command": "npx",
      "args": ["-y", "ifc-mcp"]
    }
  }
}
```

Reopen Claude Code in VS Code, type `/mcp`, and approve the project server if Claude asks.

For a user-level setup, run:

```powershell
claude mcp add --transport stdio ifc-mcp --scope user -- npx -y ifc-mcp
```

For more detail, see the [Claude Code VS Code documentation](https://code.claude.com/docs/en/vs-code) and the [Claude Code MCP documentation](https://code.claude.com/docs/en/mcp).

## Other MCP clients

Use this server entry for MCP clients that support local `stdio` servers:

```json
{
  "mcpServers": {
    "ifc-mcp": {
      "command": "npx",
      "args": ["-y", "ifc-mcp"]
    }
  }
}
```

Restart the MCP client after saving the config.

For protocol background, see the [Model Context Protocol documentation](https://modelcontextprotocol.io/docs/getting-started/intro).

## Verify the setup

Start a new chat in your MCP client and check that these tools are available:

| Tool | Purpose |
|---|---|
| `run-python` | Run IfcOpenShell Python for IFC inspection, reporting, validation, exports, and IFC creation. |
| `open-ifc-viewer` | Open or show the local IFC viewer. |
| `show-ifc-file` | Load an IFC file or generated IFC download into the open viewer. |
| `set-bcf-view` | Apply a BCF or BCFZIP viewpoint file in the open viewer. |
| `clear-ifc-viewer` | Remove loaded models and BCF state from the viewer. |

## Troubleshooting

### `node` or `npx` is not found

Install Node.js LTS, then fully close and reopen the MCP client. Some desktop apps need a restart before they see updated environment variables.

### IFC MCP does not appear in the client

Check that the JSON is valid, the server entry is inside the correct object, and the client has been restarted. In clients with per-chat tool permissions, start a new chat and enable the IFC MCP tools.

### The viewer does not open

IFC MCP returns a local viewer URL such as `http://127.0.0.1:8765`. If your MCP client cannot open links automatically, copy the returned URL into a browser.

If port `8765` is already in use, close the process that uses it and try again.

### Python cannot open a Windows, macOS, or Linux host path

Pyodide cannot access host file system paths directly. The assistant must pass the local IFC path in the `file_path` tool argument and use the preloaded `model` variable inside Python. Ask the assistant to use the IFC MCP `run-python` file upload path instead of calling `ifcopenshell.open("C:\\...")` directly.

### A generated download link expired

Generated files are temporary local links. Run the prompt again to recreate the output file.

### Applying a BCF viewpoint fails

Load an IFC file in the viewer before applying a BCF viewpoint. Use `open-ifc-viewer`, then `show-ifc-file`, then `set-bcf-view`.
