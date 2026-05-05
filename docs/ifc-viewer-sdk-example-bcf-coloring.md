---
title: BCF coloring
description: Creates a BCF topic with transparent ARGB component color groups and applies the colors in the viewer.
---

# BCF coloring

This sample loads the NBU Medical Clinic architecture model, creates a BCF topic with `viewer.components` and `viewer.OBC`, stores color groups for walls, slabs, openings, and spaces, loads the generated `.bcf`, and opens the topic to apply the saved colors.

BCF 3.0 `Coloring` groups components by color. The color is written as 6 or 8 hexadecimal digits without `#`; when 8 digits are used, the first two digits are the alpha channel. This example uses transparent ARGB colors such as `80E11D48`, where `80` makes the colored components partially transparent. See the [BCF 3.0 coloring documentation](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#coloring) for the XML property names and optimization rule.

# [Preview](#tab/bcf-coloring-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-coloring.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-coloring-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-coloring.html)]

---
