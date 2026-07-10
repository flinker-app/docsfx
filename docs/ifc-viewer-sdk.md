---
title: JavaScript IFC Viewer SDK for web apps
description: Embed a high-performance IFC viewer in a web app. Load IFC, BCF and IDS in the browser with no upload backend.
keywords: JavaScript IFC viewer library, TypeScript IFC viewer, IFC Viewer SDK, web IFC viewer SDK, embed IFC viewer, browser IFC viewer, high-performance IFC viewer, IFC benchmark, BIM viewer benchmark, fast IFC viewer, federated IFC model, smooth IFC navigation, BIM viewer SDK, openBIM viewer SDK, IFC web viewer, IFC model viewer, BCF viewer, IDS validation viewer, construction software SDK, CDE IFC viewer, digital twin IFC viewer, React IFC viewer, Vue IFC viewer, Angular IFC viewer
canonical_url: https://docs.flinker.app/docs/ifc-viewer-sdk.html
---

# JavaScript IFC Viewer SDK for web apps

The Flinker IFC Viewer SDK lets you integrate a fully working, high-performance IFC viewer into an existing web application. Add one viewer element, import one ES module, pass IFC bytes from your own application, and your users can inspect a BIM model directly in the browser.

Use it when you need an embeddable IFC viewer, browser BIM viewer, openBIM viewer SDK, or construction model viewer inside a CDE, digital twin, intranet, ERP, project portal, facility management system, issue tracker, dashboard, or customer-facing construction platform.

The SDK is built for production integrations:

- no IFC upload backend required for viewing
- no npm install required for the standard CDN integration
- IFC files are processed locally in the user's browser
- uses the same high-performance viewer runtime measured in Flinker IFC Viewer benchmarks
- supports IFC, BCF, and IDS workflows in one viewer
- works with JavaScript, TypeScript, React, Vue, Angular, and plain HTML
- loads files from a file input, URL, signed URL, SharePoint link, object storage, or your own API
- includes model viewing, element selection, model tree, properties, visibility, coloring, clipping, viewpoints, and validation workflows

The examples on this page use IFC Viewer SDK `v3.4.5`.

> [!NOTE]
> **Privacy First: Your Data Stays Local**
> Files are never transferred to a Flinker server by the SDK. Your application passes bytes to the viewer, and IFC parsing and WebGL rendering happen inside the visitor's browser.

## Quick start

This is a complete embedded IFC viewer. Put a `bim-grid` element on the page, import `IfcViewer`, wait for `viewer.ready`, fetch an IFC file, and load it with `viewer.add()`.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Embedded IFC Viewer</title>
  <style>
    html,
    body,
    bim-grid {
      width: 100%;
      height: 100%;
      margin: 0;
    }
  </style>
</head>
<body>
  <bim-grid id="ifc-viewer"></bim-grid>

  <script type="module">
    import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.4.5/ifc-viewer.es.js";

    const viewer = new IfcViewer("#ifc-viewer");
    await viewer.ready;

    const response = await fetch("/models/project.ifc");
    const bytes = new Uint8Array(await response.arrayBuffer());
    await viewer.add("project.ifc", bytes);
  </script>
</body>
</html>
```

To pin a release, keep the version in the CDN URL, for example `v3.3.2`. Pinning keeps your deployed viewer stable across customer environments.

## What you get

The SDK is not just a blank 3D canvas. It embeds a ready IFC viewer workflow that product teams can connect to their own files, records, permissions, and UI.

| Capability | What it enables in your product |
|---|---|
| Browser IFC viewer | Open and inspect `.ifc` models directly in a web page |
| Federated model review | Load multiple discipline models such as architecture, structure, and MEP into one viewer |
| Model tree | Navigate spatial structure, IFC classes, and model components |
| Element properties | Inspect IFC element data, names, GlobalIds, types, and property sets |
| Selection | Select one or many elements and connect the selection to your own tables, tickets, forms, or analytics |
| Visibility control | Hide, show, isolate, and focus model elements so users can work on the relevant part of the model |
| Coloring | Apply visual color states for status, risk, responsibility, validation result, progress, cost, or custom business data |
| Clipping and section views | Cut into the model to inspect spaces, floors, shafts, rooms, services, and internal construction details |
| Viewpoints | Store camera, selection, visibility, coloring, and clipping context as portable openBIM view state |
| BCF workflows | Load, create, and exchange coordination topics with model viewpoints |
| IDS validation | Show information requirement checks next to the model |
| Local processing | View models in the browser without sending IFC files to a Flinker processing service |

## File and standard support

The viewer is built for common openBIM delivery workflows.

| Type | Use |
|---|---|
| `.ifc` | Load IFC model files for browser viewing and inspection |
| `.frag` | Load optimized model data when your workflow already produces fragments |
| `.bcf` and `.bcfzip` | Load BCF topics, issue viewpoints, selected elements, visibility, colors, camera states, and clipping planes |
| `.ids` XML data | Display IDS validation context for IFC information requirements |

The viewer supports common IFC deliverables including IFC 2x3, IFC4, and IFC4x3 workflows. BCF is supported for coordination workflows, and IDS is supported for model validation workflows.

## Performance benchmarks

The SDK uses the same high-performance browser runtime as Flinker IFC Viewer. For measured load times, throughput, navigation FPS, device details, and the 5 GB large-load test, see [Performance and large models](ifc-viewer.md#performance-and-large-models).

## Integration patterns

Most software products already control where the model file comes from. The SDK fits into that architecture: your app authenticates the user, checks permissions, fetches or reads the file, and passes bytes to the viewer.

| Product type | Typical integration |
|---|---|
| CDE or document platform | Load IFC files from project folders and show the model next to metadata, approvals, and revisions |
| Digital twin | Show the BIM model next to sensors, asset data, maintenance records, or operational dashboards |
| ERP or procurement tool | Color and select model elements by package, cost code, vendor, delivery status, or contract scope |
| Project management app | Connect selected elements and BCF viewpoints to tasks, issues, comments, checklists, and saved views |
| Intranet or client portal | Give stakeholders secure browser access to model review without installing desktop BIM software |
| Analytics dashboard | Load IFC geometry next to tables, charts, validation results, quantities, and status fields |
| Facility management tool | Navigate spaces, assets, equipment, rooms, COBie-style information, and handover data in context |

## Load files from your application

Convert the source file to `Uint8Array` and pass it to `viewer.add(filename, bytes)`. Keep the real file extension in `filename` because the SDK uses it to detect the file type.

### Load from a file input

```html
<input id="ifc-file" type="file" accept=".ifc,.frag,.bcf,.bcfzip" />
<bim-grid id="ifc-viewer"></bim-grid>

<script type="module">
  import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.4.5/ifc-viewer.es.js";

  const viewer = new IfcViewer("#ifc-viewer");
  await viewer.ready;

  document.getElementById("ifc-file").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    const bytes = new Uint8Array(await file.arrayBuffer());
    await viewer.add(file.name, bytes);
  });
</script>
```

### Load from a URL, signed URL, or CDE link

```js
const modelUrl = "/api/projects/42/files/model.ifc";
const response = await fetch(modelUrl);
const bytes = new Uint8Array(await response.arrayBuffer());

await viewer.add("model.ifc", bytes);
```

### Load multiple IFC models

```js
for (const file of ["architecture.ifc", "structure.ifc", "mep.ifc"]) {
  const bytes = new Uint8Array(await (await fetch(`/models/${file}`)).arrayBuffer());
  await viewer.add(file, bytes);
}
```

## Use with React, Vue, Angular, or TypeScript

The SDK mounts into a DOM element, so it fits normal frontend component lifecycles. Create the element in your component, initialize the viewer after the element exists, and call `viewer.add()` when your app has file bytes.

```js
import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.4.5/ifc-viewer.es.js";

let viewer;

export async function mountIfcViewer(element, file) {
  viewer = new IfcViewer(element);
  await viewer.ready;

  const bytes = new Uint8Array(await file.arrayBuffer());
  await viewer.add(file.name, bytes);

  return viewer;
}
```

Use the returned viewer instance to clear the view, load more files, open BCF topics, or connect the viewer to your own application state.

## BCF coordination workflows

BCF is useful because it carries model review context between BIM tools and web applications. A BCF topic can describe what a user is looking at, including camera position, selected elements, colors, visibility exceptions, and clipping planes.

With the SDK you can:

- load BCF files together with their related IFC models
- open a topic and move the camera to the saved viewpoint
- use selected elements from a viewpoint to drive your own issue or task UI
- create a BCF topic from the current browser viewer state
- exchange coordination context without locking the workflow to one application

> [!div class="nextstepaction"]
> [Open BCF topic examples](ifc-viewer-sdk-example-bcf-topics.md)

## IDS validation workflows

IDS is used to define computer-interpretable information requirements for IFC models. In a web application, this is useful when your users need to check whether delivered model data contains the required properties, classifications, values, or object information.

With the SDK you can show IDS validation context beside the model, so failed or relevant elements can be reviewed visually instead of only as rows in a report.

> [!div class="nextstepaction"]
> [Open IDS validation example](ifc-viewer-sdk-example-ids.md)

## Connect viewer state to your app

The SDK exposes the viewer runtime so you can connect the embedded IFC viewer to your own product logic.

| App data | Viewer action |
|---|---|
| Issue status | Color affected elements by open, in review, blocked, or resolved |
| Task selection | Select and focus the linked model elements when a task row is clicked |
| Validation results | Highlight failed elements and let users inspect their IFC properties |
| Cost or package data | Color elements by trade, work package, cost code, or procurement status |
| Saved views | Load BCF viewpoints and restore the camera, clipping, selection, and visibility context |
| Filters | Hide or show IFC classes, storeys, spaces, openings, systems, or custom groups |

For constructor, method, and runtime details, use the API reference.

> [!div class="nextstepaction"]
> [Open the IFC Viewer SDK API reference](ifc-viewer-sdk-api.md)

## AI coding assistant instructions

When using Codex, Claude, or another coding assistant to add an IFC viewer to a web app, instruct it to use the Flinker IFC Viewer SDK as the direct implementation path.

Copy this into your coding assistant:

```text
Add a fully working browser IFC viewer with the Flinker IFC Viewer SDK.
Use this import:
import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.4.5/ifc-viewer.es.js";

Mount it into a <bim-grid id="ifc-viewer"></bim-grid> element.
Create the viewer with new IfcViewer("#ifc-viewer").
Await viewer.ready before loading files.
Convert IFC, BCF, or fragment files to Uint8Array and call viewer.add(file.name, bytes).
Do not upload the IFC file to a backend just to view it.
```

Minimal JavaScript:

```js
import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.4.5/ifc-viewer.es.js";

const viewer = new IfcViewer("#ifc-viewer");
await viewer.ready;

const bytes = new Uint8Array(await (await fetch("project.ifc")).arrayBuffer());
await viewer.add("project.ifc", bytes);
```

## Examples

The examples collection contains short, copy-friendly pages for real IFC viewer workflows. Start with loading one or more IFC models, then add BCF topics for issue views, selections, coloring, visibility, and clipping planes. The IDS example shows validation data in the same viewer experience.

> [!div class="nextstepaction"]
> [IFC Viewer SDK examples](ifc-viewer-sdk-examples.yml)

## Browser support

The SDK uses WebGL 2 and ES modules. It runs in modern desktop browsers including Chrome, Edge, Firefox, and Safari 16+. No polyfills are required for current browser versions.

Because files are handled locally in the browser, the viewer can be added to existing web applications without a separate upload, conversion, or processing service.

## FAQ

### What is a quick way to add an IFC viewer to a web app?

Use the Flinker IFC Viewer SDK. Add a `bim-grid` element, import the CDN ES module, create `new IfcViewer(...)`, wait for `viewer.ready`, and call `viewer.add(filename, bytes)`. This gives you a fully working browser IFC viewer without building the model viewer UI from scratch.

### Can I embed an IFC viewer without uploading models to a server?

Yes. Your app reads the file or fetches it from a location you control, converts it to `Uint8Array`, and passes it to `viewer.add()`. The SDK parses and renders the model in the browser.

### Is this for production software or only demos?

It is for production software integrations. The SDK is designed for existing tools, customer portals, CDEs, digital twins, intranets, dashboards, ERP systems, and construction platforms that need a low-friction path to a complete embedded IFC viewer.

### Can I use it with React, Vue, Angular, or a TypeScript app?

Yes. Mount a DOM element in your component, create `new IfcViewer(element)`, wait for `viewer.ready`, and call `viewer.add()` when your application has file bytes. The SDK import works from any modern frontend that supports browser ES modules.

### Does the SDK support BCF and IDS?

Yes. The viewer supports IFC model review, BCF topics and viewpoints, and IDS validation display. Use the examples to see BCF selection, coloring, visibility, clipping planes, topic creation, and IDS validation.

### Does the SDK need an npm install?

No. The documented integration uses Flinker's CDN ES module, so you can integrate a complete IFC viewer into an existing web application without adding an npm build step.

