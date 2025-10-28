---
title: Color IFC Elements in the Power BI Viewer
description: Learn how to highlight IFC model elements with conditional formatting rules inside the Power BI IFC Viewer visual.
keywords: IFC, Power BI, conditional formatting, color rules, BIM visualization
canonical_url: https://docs.flinker.app/docs/ifc-viewer-color-rules-for-power-bi.html
---

# Color IFC Elements in the Power BI Viewer

Conditional formatting lets you highlight model elements directly inside the **IFC Viewer visual** so that stakeholders can instantly see phases, disciplines, or QA findings.

## Apply color rules

Power BI supports two conditional-formatting modes for the IFC Viewer visual. Pick the one that matches how you want to manage colors.

### Option 1: Format style = Rules

1. Select the IFC Viewer visual on your report canvas.
2. Open the **Format visual** pane and expand **Element colors**.
3. Under **Color rules**, set **Format style** to **Rules**.
4. Choose the field that should define your segmentation under **What field should we base this on?**
   - Example: `Element Type` for discipline-based coloring.
5. Add rules for the values you want to highlight and assign the desired colors manually.
6. Select **OK** to apply the formatting.

![Conditional formatting using manual color rules](/_media/color-conditional-formatting-in-power-bi-visual.png)

### Option 2: Format style = Field value

Use this mode when the color should come from the dataset (for example, a lookup table that stores brand colors or QA status palettes).

1. Create or extend a table (for example, `Colors`) that stores a color code per classification. Accepted values hex codes (e.g., `#D13438`).
2. Select the IFC Viewer visual on your report canvas.
3. Open **Format visual** > **Element colors** > **Color rules** and set **Format style** to **Field value**.
4. Pick the column that holds the color code under **What field should we base this on?** (for example, `Colors[Color]`).
5. Confirm with **OK**. The visual now reads the hex or color name from your dataset and applies it directly to each element.

![Conditional formatting using a color field](/_media/color-conditional-formatting-with-field-value-in-power-bi-visual.png)

> [!TIP]
> Field-value formatting keeps palettes consistent across visuals. Reuse the same color table for other charts and slicers so that statuses or disciplines always appear with the same color.