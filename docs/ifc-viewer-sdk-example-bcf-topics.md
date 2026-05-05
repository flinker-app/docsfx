---
title: Load and create BCF topics
description: Loads an existing BCF file and creates a new BCF topic in the viewer.
---

# Load and create BCF topics

This page shows two viewer samples. The first sample loads one NBU Medical Clinic IFC model, loads an existing `.bcf` file, and opens one BCF topic. The second sample creates a BCF topic with a viewpoint using the ThatOpen managers exposed by the SDK, loads the generated `.bcf` bytes, and opens the created topic.

Load the IFC model before loading the BCF file, so topic viewpoints and component state can resolve against the model. Call `viewer.select(topicGuid)` only after the `.bcf` bytes have been added. When you generate BCF data yourself, export the BCF bytes and pass them to `viewer.add()` with a `.bcf` filename.

## Load an existing BCF file

This sample loads the NBU Medical Clinic architecture IFC model, adds an existing `.bcf` file, and opens one coordination topic. The selected topic GUID comes from the BCF file; in an app, this value usually comes from the imported topic list.

# [Preview](#tab/bcf-topics-load-existing-preview)

<iframe src="/_media/ifc-viewer-sdk-example-load-existing-bcf.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-topics-load-existing-code)

[!code-html[](../_media/ifc-viewer-sdk-example-load-existing-bcf.html)]

---

## Create a BCF topic

This sample loads the NBU Medical Clinic architecture IFC model, creates a BCF topic in the browser with `viewer.components` and `viewer.OBC`, adds the generated `.bcf` bytes to the viewer, and opens the created topic.

# [Preview](#tab/bcf-topics-create-preview)

<iframe src="/_media/ifc-viewer-sdk-example-create-bcf-topic.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-topics-create-code)

[!code-html[](../_media/ifc-viewer-sdk-example-create-bcf-topic.html)]

---
