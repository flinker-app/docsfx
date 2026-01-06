---
title: Copilot for IFC
description: Copilot for IFC helps you explore, analyze, and even edit IFC models using plain-language prompts, directly in your browser.
keywords: Copilot for IFC, IFC, BIM, AI, IfcOpenShell, Python, charts, CSV, edit IFC
canonical_url: https://docs.flinker.app/docs/copilot-for-ifc.html
---

# Copilot for IFC

Copilot for IFC is your AI assistant for BIM models. Ask questions in everyday language and get **tables, charts, and downloadable results**, without learning complex BIM tooling.

> [!div class="nextstepaction"]
> [Open Copilot for IFC](https://copilot.flinker.app/)

> [!NOTE]
> **Privacy first:** your IFC files stay in your browser. Only the text you type is sent for AI processing.

## Who it is for

Copilot for IFC is designed for anyone who needs answers from IFC models, especially **architects**, **engineers**, **project managers**, and **BIM/VDC teams**.

## What you can do with it

Use Copilot for IFC to:

- **Find and list elements** (e.g., all doors, windows, spaces, slabs) and filter by property values.
- **Extract schedules** (room lists, door schedules, quantity takeoffs) as downloadable files (for example CSV).
- **Validate and QA models** (missing properties, out-of-range dimensions, incomplete quantity sets).
- **Create visual insights** (interactive charts and plots for quick checks and reporting).
- **Highlight results in the viewer** (for example, colorize all windows or non-compliant elements).
- **Generate new IFC files** (for example, extract a subset like spaces only, or write updated quantities/properties back to a copy).

## Why it is powerful

Most BIM tools require specialist knowledge and many manual steps. Copilot for IFC removes that friction:

- **You describe the goal, it creates the workflow**: the assistant turns your request into a repeatable analysis.
- **Results are reusable**: outputs can be downloaded and shared (including the generated Python workflow when available).
- **It works where your team already works**: a browser is enough; no heavy desktop installation.
- **It respects data boundaries**: the model stays local; you remain in control of your files.

## Getting started (web)

1. Open `https://copilot.flinker.app/`
2. Upload one or more IFC files using the attachment button.
3. Type what you want to achieve (for example "Give me a room schedule as CSV").
4. Review the result (tables, charts, downloads, viewer highlights) and refine your prompt if needed.

## Prompt examples (copy & paste)

Try these prompts to see what's possible:

- "Get all the windows and colorize them in the viewer."
- "Give me all the properties of the rooms as a CSV file."
- "Run an overall analysis of the model. Create professional, interactive charts."
- "Collect all IfcDoor widths (from Qto_DoorBaseQuantities or Pset_DoorCommon). Plot a histogram and show how many doors are out of range."
- "Extract the rooms and save them as a new IFC file, then load the new file in the viewer."
- "Edit the model and apply realistic colors based on element class, properties and dimensions. Don't modify geometry."
- "Collect every IfcSpace, group by storey, and plot a distribution of areas per storey."
- "If Qto_SpaceBaseQuantities are missing, compute areas/volumes from geometry and write them into Qto sets."
- "Create a 2D projection of the first window you find and add the key dimensions."

## What's supported

Copilot for IFC is optimized for IFC exploration, analysis, and controlled edits.

**Supported**

- Common IFC versions (for example IFC2x3 and IFC4)
- Property + quantity extraction (Psets and Qto sets)
- Charts, plots, and quick model analytics
- Exporting results (for example CSV, images, and generated IFC files)
- Editing *copies* of IFC files (for example adding quantities or updating properties)

## Copilot for IFC Pro (GPT-5 Pro)

Copilot for IFC Pro is built for demanding workflows and enterprise-grade needs:

- Access to **GPT-5 Pro models** for better reasoning on complex, multi-step tasks
- Better results on large models, advanced analysis, and IFC editing workflows
- Priority support options for teams

Upgrade instantly:

> [!div class="nextstepaction"]
> [Get Pro](https://buy.stripe.com/dRm9AS1Ue8he8sAfzhcZa00)

## FAQs

**Do you upload my IFC model to the cloud?**  
No. Copilot for IFC processes IFC files locally in your browser. Only the text you type is sent for AI processing.

**Can I use this without BIM or programming knowledge?**  
Yes. Start with simple questions ("list all rooms") and iterate. You can stay entirely in natural language.

**Which IFC versions are supported?**  
Copilot for IFC supports common IFC versions (for example IFC2x3 and IFC4). Results depend on the quality and structure of the source IFC.

**Can Copilot edit an IFC file?**  
It can generate updated IFC files (for example writing missing quantities or updating properties in a copy). Always review exported models before using them in production workflows.

**Is this a replacement for authoring tools?**  
No. Copilot for IFC is optimized for exploration, analysis, reporting, and controlled edits, not full geometry authoring.
