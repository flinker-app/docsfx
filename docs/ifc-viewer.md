---
title: Industry Foundation Classes (IFC)
description: Learn what Industry Foundation Classes (IFC) are, why IFC is important for openBIM workflows, and how to inspect IFC models with the Flinker IFC Viewer.
keywords: IFC, Industry Foundation Classes, openBIM, buildingSMART, ISO 16739, IFC viewer, BIM data, 3D models, SharePoint, Microsoft Teams
canonical_url: https://docs.flinker.app/docs/ifc-viewer.html
---

# Industry Foundation Classes (IFC)

Industry Foundation Classes (IFC) is an openBIM data standard for exchanging building and infrastructure models between software tools.

Use IFC when you need to review model geometry, inspect object properties, coordinate issues, validate project data, or keep model information usable outside the original authoring application.

## IFC in brief

- **Open standard**: Vendor-neutral model exchange for architecture, engineering, construction, and facility workflows.
- **Geometry and data**: IFC can include 3D elements, spatial structure, properties, quantities, materials, classifications, and georeferencing.
- **Review quality depends on export quality**: Reliable IFC exports include the model content and metadata required for the review task.

## Inspect IFC models with Flinker IFC Viewer

Flinker IFC Viewer lets you open IFC and 3D model files in the browser so project teams can inspect model geometry and data without moving files to a separate BIM platform.

> [!NOTE]
> **Privacy first**
> Files are processed in the browser. When used with SharePoint or Microsoft Teams, files remain in your Microsoft 365 tenant.

<iframe src="https://viewer.flinker.app/" width="100%" height="500px"></iframe>

> [!div class="nextstepaction"]
> [Access the Online IFC Viewer](https://viewer.flinker.app/)

## Viewer capabilities

- **Model inspection**: Review geometry, spatial structure, object properties, and GlobalIds.
- **Property-based queries**: Filter IFC elements by class, storey, property set, and attribute values.
- **Large-model support**: Load and review large IFC files in the browser.
- **BCF workflows**: Use BCF viewpoints and view states for model-based issue coordination.
- **IDS workflows**: Review IFC model data against information delivery requirements.
- **Georeferencing**: Place supported IFC models on maps using available coordinate data.
- **Microsoft 365 integration**: View models from SharePoint pages, document libraries, Microsoft Teams tabs, Excel, and Power BI.

## Common IFC model review questions

These questions cover general IFC model review behavior. For platform-specific questions, use the Microsoft 365 app FAQ pages:

- [IFC Viewer in Microsoft Teams FAQ](faq-for-ifc-viewer-in-teams.md)
- [IFC Viewer in SharePoint FAQ](faq-for-ifc-viewer-in-sharepoint.md)
- [IFC Viewer Visual for Power BI FAQ](faq-for-ifc-visual-in-power-bi.md)

### Why can an IFC model take a long time to open?

IFC models can contain geometry, object relationships, property sets, quantities, classifications, materials, spatial structure, and georeferencing data. Large or highly detailed exports may therefore need more time to parse and display in the browser.

If a model opens slowly, check:

1. **IFC export scope** - Export the model content required for review instead of unnecessary authoring detail.
2. **Model size and structure** - Large geometry, repeated complex objects, and excessive property data can increase load time.
3. **Device resources** - Browser-based model review depends on available memory, CPU, and graphics resources.
4. **Network connection** - Opening files from cloud storage can be delayed by slow or unstable connectivity.

For better openBIM exchange, keep stable `GlobalId` values, include the required property sets and quantities, and validate model data against the project information requirements where possible.

### Can I open Autodesk Revit or Navisworks files directly?

No. Revit and Navisworks files are proprietary application formats, not buildingSMART openBIM exchange standards.

For openBIM workflows, export model data to **Industry Foundation Classes (IFC)** and exchange issue context with **BIM Collaboration Format (BCF)**. The viewer supports IFC-based model review and BCF-based issue coordination; proprietary authoring or coordination files must be exported or converted before use.

### How do I use clipping and measurement together?

Create the section view first, then switch to measurement.

1. Open the **Clip** tools.
2. Select **Activate Clipping**.
3. Double-click a model surface to create a clipping plane.
4. Adjust the plane position and orientation.
5. Switch to the **Measure** tools.
6. Select the measurement type and pick points in the clipped view.

![Activate clipping tool and make a section cut](/_media/activate-clipping-tool-and-make-a-clip.png)

![Choose a measurement tool and measure in the clipped model view](/_media/choose-a-measurement-tool-and-measure.png)

Switching from clipping to measurement prevents accidental clipping-plane changes while you measure the section view.
