---
title: BCF selection
description: Creates a BCF topic that selects doors, windows, and walls in the viewer.
---

# BCF selection

This sample loads the NBU Medical Clinic architecture model, creates a BCF topic containing selected door, window, and wall GUIDs with the SDK-exposed ThatOpen BCF managers, loads the generated `.bcf`, and opens the topic with `viewer.select(topicGuid)`.

BCF 3.0 `Selection` lists the components that should be selected or highlighted when displaying a viewpoint. BCF is intended for selecting a small set of components; if the selected component list grows beyond 1000 components, the user should reduce the selection before encoding the viewpoint. See the [BCF 3.0 selection documentation](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#selection) for the XML property names and optimization rule.

# [Preview](#tab/bcf-selection-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-selection.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-selection-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-selection.html)]

---
