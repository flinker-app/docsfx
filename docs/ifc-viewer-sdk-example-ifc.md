---
title: Display IFC models
description: Loads multiple IFC models into the viewer from URLs.
---

# Display IFC models

This sample creates a viewer, fetches two NBU Medical Clinic IFC discipline models, converts each file to `Uint8Array`, and loads them with `viewer.add()`. Wait for `viewer.ready` before adding files, and keep the real filename extensions because the SDK uses the names to detect the file type.

# [Preview](#tab/ifc-preview)

<iframe src="/_media/ifc-viewer-sdk-example-ifc.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/ifc-code)

[!code-html[](../_media/ifc-viewer-sdk-example-ifc.html)]

---
