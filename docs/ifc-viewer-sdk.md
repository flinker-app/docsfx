---
title: IFC Viewer SDK
description: Embed a fully-featured IFC viewer into any web page with the Flinker IFC Viewer SDK. Load IFC, FRAG, and BCF files directly in the browser with a few lines of JavaScript.
keywords: IFC Viewer SDK, JavaScript, embed IFC viewer, IFC web component, BCF, open BIM, CDN
canonical_url: https://docs.flinker.app/docs/ifc-viewer-sdk.html
---

# IFC Viewer SDK

> [!WARNING]
> The IFC Viewer SDK is currently in preview. The API may change between releases. Pin a specific version in your CDN URL to avoid breaking changes.

Embed a fully-featured IFC viewer into any web page with a few lines of JavaScript. The SDK runs entirely in the browser with no server, no upload, and no backend required.

> [!NOTE]
> **Privacy First: Your Data Stays Local**
> Files are never transferred to any server. All parsing and rendering happens inside the visitor's browser.

## Quick Start

### Load multiple files

This sample loads two `.frag` files (the architectural shell and the structural frame of a school building) into a single viewer instance. Both models are fetched from a URL and passed to `viewer.add()` in sequence. Use the model tree in the toolbar to toggle visibility per model.

# [Preview](#tab/multi-preview)

<iframe src="/_media/ifc-viewer-sdk-demo-multi.html" width="100%" height="400px" style="border:none;"></iframe>

# [Code](#tab/multi-code)

[!code-html[](../_media/ifc-viewer-sdk-demo-multi.html)]

---

### Load IFC + BCF

This sample loads a structural IFC model and a BCF file containing review topics into the same viewer. The IFC is loaded first, then the BCF is added via the same `viewer.add()` call. Once loaded, open the BCF panel from the toolbar to browse topics. Clicking a topic moves the camera to that viewpoint.

# [Preview](#tab/bcf-preview)

<iframe src="/_media/ifc-viewer-sdk-demo-bcf.html" width="100%" height="400px" style="border:none;"></iframe>

# [Code](#tab/bcf-code)

[!code-html[](../_media/ifc-viewer-sdk-demo-bcf.html)]

---

## Installation

The SDK is distributed as an ES module on Flinker's CDN, no npm install required.

```js
import { IfcViewer } from "https://cdn.flinker.app/ifc-viewer/v3.1.0/ifc-viewer.es.js";
```

To pin a specific version, replace `v3.1.0` with the desired release tag.

## API Reference

### `new IfcViewer(target?)`

Creates and mounts the viewer.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `target` | `string \| HTMLElement` | `"#ifc-viewer"` | CSS selector or element where the viewer is mounted |

```js
// Using a CSS selector (default)
const viewer = new IfcViewer("#ifc-viewer");

// Using a DOM element directly
const el = document.getElementById("my-container");
const viewer = new IfcViewer(el);
```

### `viewer.ready`

`Promise<void>` that resolves once the viewer is fully initialised. Always `await` this before calling any other method.

```js
const viewer = new IfcViewer("#ifc-viewer");
await viewer.ready;
// Safe to call other methods now
```

### `viewer.add(name, bytes)`

Loads a model or BCF file into the viewer.

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | Original filename including extension (used to detect file type) |
| `bytes` | `Uint8Array` | Raw file contents |

Supported extensions: `.ifc`, `.frag`, `.bcf`, `.bcfzip`

```js
// Load from a file input
const file = fileInput.files[0];
const bytes = new Uint8Array(await file.arrayBuffer());
await viewer.add(file.name, bytes);

// Load from a URL
const response = await fetch("/models/building.ifc");
const buffer = await response.arrayBuffer();
await viewer.add("building.ifc", new Uint8Array(buffer));
```

### `viewer.select(topicId)`

Moves the camera to the viewpoint defined by a BCF topic.

| Parameter | Type | Description |
|---|---|---|
| `topicId` | `string` | GUID of the BCF topic |

```js
await viewer.select("3b4e2f1a-9c8d-4e5f-b6a7-2c3d4e5f6a7b");
```

### `viewer.clear()`

Unloads all models and BCF data and resets the viewer to a clean state.

```js
await viewer.clear();
```

### `viewer.getLoadedModels()`

Returns the names of all currently loaded models.

```js
const models = viewer.getLoadedModels();
console.log(models); // ["building.ifc", "structure.ifc"]
```

## Browser Support

The SDK uses WebGL 2 and ES modules. It runs in all modern browsers (Chrome, Edge, Firefox, Safari 16+). No polyfills are required.

> [!div class="nextstepaction"]
> [Try the free online IFC Viewer](https://viewer.flinker.app/)
