---
title: BCF clipping planes
description: Creates a BCF topic with a clipping plane and opens the clipped view in the viewer.
---

# BCF clipping planes

These samples load the NBU Medical Clinic architecture model, create BCF viewpoints with `viewer.components`, `viewer.OBC`, and `viewer.THREE`, add model-derived clipping planes, load the generated `.bcf`, and open the clipped viewpoints.

BCF 3.0 `ClippingPlanes` define a subsection of the building model that belongs to the topic. Each clipping plane has a `Location` and a `Direction`; the direction vector points toward the invisible half-space that is clipped away. BCF clipping planes must use the same model coordinate system as the loaded IFC file, so these examples derive clipping planes from the loaded model bounds before exporting the topic. See the [BCF 3.0 ClippingPlanes documentation](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#clippingplanes) for the XML property names.

## Upper-level floor plan

This example uses a horizontal clipping plane and a top orthographic camera to create a floor-plan view.

# [Preview](#tab/bcf-clipping-floor-plan-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-clipping.html" width="100%" height="720px" style="border:none;"></iframe>

# [Code](#tab/bcf-clipping-floor-plan-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-clipping.html)]

---

## East side section

This example uses a vertical clipping plane and a side orthographic camera to create a building section view.

# [Preview](#tab/bcf-clipping-section-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-clipping-section.html" width="100%" height="720px" style="border:none;"></iframe>

# [Code](#tab/bcf-clipping-section-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-clipping-section.html)]

---

## Central section box

This example uses six clipping planes to create a bounded section box around the middle of the model.

# [Preview](#tab/bcf-clipping-section-box-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-clipping-section-box.html" width="100%" height="720px" style="border:none;"></iframe>

# [Code](#tab/bcf-clipping-section-box-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-clipping-section-box.html)]

---
