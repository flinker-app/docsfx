---
title: BCF visibility
description: Creates BCF topics that hide or show components with DefaultVisibility, exceptions, and view setup hints.
---

# BCF visibility

This sample loads the NBU Medical Clinic architecture model, creates BCF topics with `viewer.components` and `viewer.OBC`, and opens each topic to apply a different BCF visibility state.

BCF 3.0 visibility is based on `DefaultVisibility` and `Exceptions`: when `DefaultVisibility` is `true`, exceptions are hidden; when `DefaultVisibility` is `false`, exceptions are shown. In the SDK state used below, the same values are written as `default_visibility`, `exceptions`, and `view_setup_hints`. See the [BCF 3.0 visibility documentation](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#visibility) for the XML property names.

## Hide doors and windows

If the list of hidden components is smaller than the list of visible components, keep the model visible by default and put only the hidden components in `exceptions`. In this sample, all doors and windows are hidden, while the rest of the model stays visible.

# [Preview](#tab/bcf-visibility-hide-doors-windows-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-visibility-hide-doors-windows.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-visibility-hide-doors-windows-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-visibility-hide-doors-windows.html)]

---

In BCF XML this corresponds to `DefaultVisibility="true"`. The exception components are the doors and windows to hide.

## Show doors and windows only

A common coordination topic isolates a repeated element category for focused review. Hide the model by default and put the doors and windows in `exceptions`. In this sample, only doors and windows are shown; every other component is hidden.

# [Preview](#tab/bcf-visibility-show-doors-windows-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-visibility-show-doors-windows.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-visibility-show-doors-windows-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-visibility-show-doors-windows.html)]

---

In BCF XML this corresponds to `DefaultVisibility="false"`. The exception components are the doors and windows to show.

## Hide spaces, boundaries, and openings

A typical BCF use case keeps `DefaultVisibility=true` for normal model elements, but hides spaces, space boundaries, and openings through `ViewSetupHints`. In this sample, regular model geometry stays visible, while spaces, openings, and space boundaries are hidden.

# [Preview](#tab/bcf-visibility-hide-spaces-boundaries-openings-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-visibility-hide-spaces-boundaries-openings.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-visibility-hide-spaces-boundaries-openings-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-visibility-hide-spaces-boundaries-openings.html)]

---

The flags are explicit here so the viewpoint intent is clear, even though BCF 3.0 defines these flags as `false` by default.

## Show spaces only

To show spaces only, hide regular model components by default and allow spaces through the visibility state. In this sample, space components are shown, while all non-space components, openings, and space boundaries stay hidden.

# [Preview](#tab/bcf-visibility-show-spaces-only-preview)

<iframe src="/_media/ifc-viewer-sdk-example-bcf-visibility-show-spaces-only.html" width="100%" height="520px" style="border:none;"></iframe>

# [Code](#tab/bcf-visibility-show-spaces-only-code)

[!code-html[](../_media/ifc-viewer-sdk-example-bcf-visibility-show-spaces-only.html)]

---

For a full model this means all non-space components remain hidden, while the space components listed in `exceptions` are visible.
