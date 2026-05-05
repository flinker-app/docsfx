---
title: IFC Viewer SDK
description: Add an openBIM layer to any construction software in minutes with the Flinker IFC Viewer SDK. Load IFC models, BCF topics, and IDS validation data directly in the browser.
keywords: IFC Viewer SDK, JavaScript, embed IFC viewer, IFC web component, BCF, IDS, openBIM, open BIM, CDN
canonical_url: https://docs.flinker.app/docs/ifc-viewer-sdk.html
---

# IFC Viewer SDK

Add a fully-featured IFC viewer to your web application with a few lines of JavaScript. The SDK runs entirely in the browser with no server, no upload, and no backend required.

The SDK is built for software teams that want to add an openBIM layer to construction tools without building the viewer workflow from scratch. It puts open standards first: IFC for model data, BCF for views and issue context, and IDS for validation.

The examples show the main idea: BCF is not only an issue file. A topic can carry the view a user is looking at, including selected elements, colors, visibility, clipping planes, and camera position. That makes the viewer state portable between applications that understand openBIM standards.

> [!NOTE]
> **Privacy First: Your Data Stays Local**
> Files are never transferred to any server. All parsing and rendering happens inside the visitor's browser.

## Quick Start

The SDK is distributed as an ES module on Flinker's CDN, no npm install required. Add it to your page, create a viewer, and load your first IFC model with a few lines of JavaScript.

From there, the same viewer can open BCF topics, create new BCF topics from the current view, and show IDS validation results next to the model.

```js
import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.2.0/ifc-viewer.es.js";

const viewer = new IfcViewer("#ifc-viewer");
await viewer.ready;

const bytes = new Uint8Array(await (await fetch("model.ifc")).arrayBuffer());
await viewer.add("model.ifc", bytes);
```

To pin a specific version, replace `v3.2.0` with the desired release tag.

## Examples

The examples collection contains short, copy-friendly pages for common openBIM workflows. Start with loading one or more IFC models, then move into BCF topics for issue views, selections, coloring, visibility, and clipping planes. The IDS example shows how validation data can be displayed in the same viewer experience.

> [!div class="nextstepaction"]
> [Open examples](ifc-viewer-sdk-examples.yml)

## API Reference

Constructor, method, and runtime property details are available on the dedicated API page. Use it when connecting the viewer to your own interface, project files, issue workflow, or validation view.

> [!div class="nextstepaction"]
> [Open the API reference](ifc-viewer-sdk-api.md)

## Browser Support

The SDK uses WebGL 2 and ES modules. It runs in all modern browsers (Chrome, Edge, Firefox, Safari 16+). No polyfills are required.

Because files are handled locally in the browser, the viewer can be added to existing web applications without a separate upload or processing service.
