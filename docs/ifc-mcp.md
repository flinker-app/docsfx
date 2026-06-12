---
title: IFC MCP
description: Use IFC MCP to connect AI assistants to local IFC and BCF workflows with IfcOpenShell Python, Pyodide, and a local IFC viewer.
keywords: IFC MCP, MCP server, Model Context Protocol, IFC, BIM, BCF, IfcOpenShell, Pyodide, AI assistant
canonical_url: https://docs.flinker.app/docs/ifc-mcp.html
---

# IFC MCP

IFC MCP is a local Model Context Protocol server for IFC and BCF workflows. It lets an AI assistant inspect BIM models, create reports, generate new IFC files, open a local IFC viewer, and apply BCF viewpoints from natural-language prompts.

Use IFC MCP when you want to work with local `.ifc`, `.ifcxml`, `.ifczip`, `.bcf`, or `.bcfzip` files from an MCP client such as Claude Desktop, VS Code Copilot, Codex in VS Code, Claude Code, or another MCP-compatible assistant.

> [!div class="nextstepaction"]
> [Set up IFC MCP](ifc-mcp-setup.md)

## How IFC MCP works

IFC MCP runs on your machine and communicates with your AI client over standard input and output.

1. The AI client starts IFC MCP when a chat needs IFC tools.
2. IFC MCP receives tool calls from the AI client.
3. For IFC data tasks, the server uploads the selected local IFC file into a local Pyodide runtime.
4. The generated Python uses IfcOpenShell and common Python libraries to inspect, validate, report on, or create IFC data.
5. Structured results return to the chat, and generated files are exposed as temporary local download links.
6. Viewer requests open a local browser viewer at a `127.0.0.1` address.

The AI assistant does not browse your file system by itself. It can only use the local files that you reference in the conversation and that the MCP client permits the server to read.

## What you can do

IFC MCP is built for openBIM review, QA, reporting, and assistant-driven automation.

| Task | Example |
|---|---|
| Summarize a model | Count walls, doors, windows, spaces, systems, property sets, and quantities. |
| Check model quality | Find missing names, classifications, values, or suspicious property data. |
| Create reports | Export room schedules, element lists, property tables, validation summaries, or CSV files. |
| Validate IFC data | Run IfcOpenShell validation and return issues in a structured result. |
| Generate IFC files | Create a new IFC file or write an edited copy into the generated output folder. |
| Review models visually | Open a local IFC viewer and load one or more IFC files. |
| Apply BCF viewpoints | Load a `.bcf` or `.bcfzip` viewpoint into the open viewer. |

## Supported file types

| File type | Use |
|---|---|
| `.ifc` | Inspect, validate, report on, create, and view IFC STEP files. |
| `.ifcxml` | Inspect or view IFC XML files where supported by the runtime. |
| `.ifczip` | Inspect or view zipped IFC files where supported by the runtime. |
| `.bcf` | Apply BCF viewpoint state to the local viewer. |
| `.bcfzip` | Apply BCF topic and viewpoint packages to the local viewer. |

Generated reports, BCF files, and IFC files are returned as temporary local download links. If your AI client does not open the link automatically, open the returned `http://127.0.0.1:...` URL in your browser.

## When to use IFC MCP

Use IFC MCP for assistant workflows that need local files, local execution, and integration with your existing MCP client.

| Scenario | Recommended path |
|---|---|
| You want to ask an AI assistant questions about local IFC files from Claude, Codex, or VS Code. | Use IFC MCP. |
| You want a browser-based assistant where IFC files stay in the browser session. | Use [Copilot for IFC](copilot-for-ifc.md). |
| You want to embed IFC viewing in your own web app. | Use the [IFC Viewer SDK](ifc-viewer-sdk.md). |
| You want SharePoint, Teams, Power BI, or Excel user workflows. | Use the Microsoft 365 product guides in this documentation. |

## Privacy and security

IFC MCP runs locally. The IFC file is read from your machine, uploaded into the local Pyodide runtime, and processed with local IFC tooling. The local viewer is served from `127.0.0.1` and is not published to the public internet.

Your AI client may still send your chat prompt, generated code, summaries, and returned results to the model provider configured in that client. Review your AI client policy before using sensitive project data.

Use IFC MCP only with files and project folders that you trust. Incorrect model data can produce incorrect reports, validation results, or generated IFC files.

## Next steps

- [Set up IFC MCP](ifc-mcp-setup.md)
- [Learn about BCF viewpoints and view states](bcf-viewpoints.md)
