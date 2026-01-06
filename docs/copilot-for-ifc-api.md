---
title: Copilot for IFC API
description: Generate Python workflows from natural-language prompts for IFC models. Run them client-side with the Copilot for IFC runtime library.
keywords: Copilot for IFC API, IFC, BIM, AI, Python, browser runtime, Pyodide, IfcOpenShell
canonical_url: https://docs.flinker.app/docs/copilot-for-ifc-api.html
---

# Copilot for IFC API

Use the Copilot for IFC API to turn a user prompt into a Python workflow that can analyze (and optionally edit) IFC models.

To keep IFC files client-side, execute the generated Python locally using our **browser runtime library (JavaScript)** (see "Browser runtime library" below).

> [!IMPORTANT]
> **Access by request:** you'll need API access enabled for your organization. Endpoints, payloads, and model names may evolve during the preview.

## Typical integration flow

1. Your UI collects a prompt (and optionally IFC file names/metadata).
2. Your backend calls the Copilot for IFC API and receives a generated Python workflow.
3. Your web client runs the Python workflow locally using the runtime library (IFC stays client-side).
4. Your UI renders outputs (tables, charts, downloads) and optionally offers the workflow source for audit/reuse.

## What you can build with the API

- **Schedules and exports:** room lists, door schedules, quantity takeoffs, CSV outputs
- **Model QA:** missing properties, out-of-range dimensions, compliance checks
- **Insights:** charts and dashboards directly from IFC data
- **Model edits (controlled):** write quantities/properties into a new IFC copy and return it as a download

## Security and privacy model

- IFC files can stay on the client (browser memory / local session) when executed with the runtime library.
- Only user text (and optional metadata you choose to send) needs to be submitted for AI workflow generation.
- This split supports enterprise requirements around data sovereignty and confidential project data.

## Browser runtime library

The browser runtime library is an **embeddable JavaScript library** for web apps (React/Next.js or plain JavaScript). It runs Copilot-generated Python workflows locally in the browser (typically in a Web Worker) and returns the outputs to your UI.

- **Inputs:** generated Python workflow + IFC file(s)
- **Outputs:** structured JSON results, chart payloads, and downloadable files (CSV, images, IFC, etc.)


> [!div class="nextstepaction"]
> [Request API access](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)
