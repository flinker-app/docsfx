---
title: IFC Viewer SDK API Reference
description: API reference for the Flinker IFC Viewer SDK, including constructor options, methods, and exposed runtime properties.
keywords: IFC Viewer SDK API, JavaScript API, IfcViewer, IFC viewer reference, BCF API
canonical_url: https://docs.flinker.app/docs/ifc-viewer-sdk-api.html
---

# IFC Viewer SDK API Reference

## `new IfcViewer(target?)`

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

## `viewer.ready`

`Promise<void>` that resolves once the viewer is fully initialized. Always `await` this before calling any other method.

```js
const viewer = new IfcViewer("#ifc-viewer");
await viewer.ready;
// Safe to call other methods now
```

## `viewer.add(name, bytes)`

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

## `viewer.select(topicId)`

Moves the camera to the viewpoint defined by a BCF topic.

| Parameter | Type | Description |
|---|---|---|
| `topicId` | `string` | GUID of the BCF topic |

```js
await viewer.select("3b4e2f1a-9c8d-4e5f-b6a7-2c3d4e5f6a7b");
```

## `viewer.clear()`

Unloads all models and BCF data and resets the viewer to a clean state.

```js
await viewer.clear();
```

## `viewer.getLoadedModels()`

Returns the names of all currently loaded models.

```js
const models = viewer.getLoadedModels();
console.log(models); // ["building.ifc", "structure.ifc"]
```

## ThatOpen access

The SDK exposes the underlying ThatOpen runtime for examples that need to create BCF state, read loaded model bounds, or use ThatOpen tools. Use these properties from the viewer instance instead of importing ThatOpen packages separately.

```js
const topics = viewer.components.get(viewer.OBC.BCFTopics);
const viewpoints = viewer.components.get(viewer.OBC.Viewpoints);
```

| Property | Description |
|---|---|
| `viewer.components` | The active ThatOpen `Components` instance |
| `viewer.world` | The active viewer world |
| `viewer.fragments` | The active fragments manager |
| `viewer.OBC` | The `@thatopen/components` namespace |
| `viewer.OBF` | The `@thatopen/components-front` namespace |
| `viewer.THREE` | The `three` namespace used by the viewer |
| `viewer.BUI` | The `@thatopen/ui` namespace |
| `viewer.CUI` | The `@thatopen/ui-obc` namespace |
