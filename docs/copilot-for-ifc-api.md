---
title: Copilot for IFC API
description: Generate Python workflows from natural-language prompts for IFC models. Run them client-side with the Copilot for IFC runtime library.
keywords: Copilot for IFC API, IFC, BIM, AI, Python, browser runtime, Pyodide, IfcOpenShell
canonical_url: https://docs.flinker.app/docs/copilot-for-ifc-api.html
---

# Copilot for IFC API

<iframe src="https://calm-river-02db51810-364.centralus.2.azurestaticapps.net/examples/copilot.html" width="100%" height="500px" frameborder="0" allowfullscreen></iframe>


Use the Copilot for IFC API to turn a user prompt into a Python workflow that can analyze (and optionally edit) IFC models.

> [!IMPORTANT]
> **Access by request:** you'll need API access enabled for your organization. Endpoints, payloads, and model names may evolve during the preview.

## Typical integration flow

1. Your UI collects a prompt (and optionally IFC file names/metadata).
2. Your backend calls the Copilot for IFC API and receives a generated Python workflow. Keep the key server-side.
   ```js
   // e.g., in an API route /api/copilot
   export default async function handler(req, res) {
     const { prompt } = req.body;
     const apiRes = await fetch("<COPILOT_API_ENDPOINT>" + process.env.COPILOT_API_KEY, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ messages: [{ role: "user", content: prompt }] })
     });
     const text = await apiRes.text();
     if (!apiRes.ok) return res.status(apiRes.status).send(text);
     res.status(200).send(text); // forward Python workflow only
   }
   ```
3. Your web client runs the Python workflow using the runtime library (IFC stays client-side).
   ```js
   import { createCopilotRuntime } from "<COPILOT_RUNTIME_LIB_URL>";

   const IFC_URL = "<PUBLIC_IFC_URL>";  // or bytes from file upload
   const WORKFLOW_API = "/api/copilot"; // your server route above

   const runtime = createCopilotRuntime();
   await runtime.ready;

   const ifcBytes = new Uint8Array(await (await fetch(IFC_URL)).arrayBuffer());
   await runtime.setIfcFile({ name: "Sample.ifc", bytes: ifcBytes });

   async function runPrompt(promptText) {
     const workflow = await fetch(WORKFLOW_API, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ prompt: promptText })
     }).then(r => r.text());

     const result = await runtime.runMessage(workflow);
     return {
       log: result.log,
       markdown: result.markdown,
       text: result.resultText
     };
   }

   // Example:
   // const { markdown, text } = await runPrompt("How many walls are in Sample.ifc?");
   // Render markdown/text to your UI.
   ```
4. Your UI renders outputs and optionally offers the workflow source for audit/reuse (use `result.markdown`, `result.resultText`, and `result.log` from the snippet above).

## Security and privacy model

- IFC files can stay on the client (browser memory / local session) when executed with the runtime library.
- Only user text (and optional metadata you choose to send) needs to be submitted for AI workflow generation.
- This split supports enterprise requirements around data sovereignty and confidential project data.


> [!div class="nextstepaction"]
> [Request API access](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)
