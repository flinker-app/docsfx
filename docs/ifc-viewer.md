---
title: Industry Foundation Classes (IFC)
description: Learn how IFC supports openBIM model exchange and how Flinker IFC Viewer handles large and multi-model IFC review workflows.
keywords: IFC, Industry Foundation Classes, openBIM, buildingSMART, ISO 16739, IFC viewer, BIM data, 3D models, SharePoint, Microsoft Teams
canonical_url: https://docs.flinker.app/docs/ifc-viewer.html
---

# Industry Foundation Classes (IFC)

Industry Foundation Classes (IFC) is an openBIM standard for exchanging building and infrastructure models between software tools.

Use IFC when you need to review model geometry, inspect object data, coordinate issues, validate delivery requirements, or keep model information usable outside the original authoring application.

## What IFC contains

An IFC file can include model geometry, spatial structure, object properties, quantities, materials, classifications, and georeferencing data. The quality of the review depends on the quality of the export. Reliable IFC exports include the model content and metadata required for the review task.

## File example

An IFC file is commonly exchanged as STEP text. A shortened example can look like this:

```text
ISO-10303-21;
HEADER;
FILE_DESCRIPTION(('ViewDefinition [CoordinationView]'),'2;1');
FILE_SCHEMA(('IFC4'));
ENDSEC;
DATA;
#10=IFCPROJECT('0JqL9x8rP2R8N3bK7s5wQ1',$,'Sample project',$,$,$,$,$,$);
#42=IFCWALL('2hF6q9aQj8ZP1rL5mV3dT2',$,'External wall',$,$,$,$,$,$);
#84=IFCPROPERTYSINGLEVALUE('FireRating',$,IFCLABEL('EI60'),$);
ENDSEC;
END-ISO-10303-21;
```

## Supported versions and references

Flinker IFC Viewer supports common IFC deliverables, including IFC2x3, IFC4, and IFC4x3 workflows. Version-specific behavior depends on the exported geometry, schema content, and model data quality. For the official schema history, see the buildingSMART [IFC schema specifications](https://technical.buildingsmart.org/standards/ifc/ifc-schema-specifications/).

| Version | Support |
|---|---|
| IFC2x3 | Supported for common building model review, properties, quantities, and georeferencing data where available. |
| IFC4 | Supported for model review, properties, quantities, CRS data, and map conversion workflows. |
| IFC4x3 | Supported for infrastructure and alignment workflows where the model contains supported geometry and schema data. |

For the standard overview, see buildingSMART [Industry Foundation Classes](https://www.buildingsmart.org/standards/bsi-standards/industry-foundation-classes/). For infrastructure schema details, see the buildingSMART [IFC4.3 specification](https://standards.buildingsmart.org/IFC/RELEASE/IFC4_3/HTML/).

## Review IFC models with Flinker IFC Viewer

Flinker IFC Viewer lets project teams open IFC and supported 3D model files without moving files to a separate BIM platform.

Use the viewer to:

- Open IFC models in the browser or desktop app.
- Review large project models and federated discipline models.
- Inspect geometry, model hierarchy, object properties, and GlobalIds.
- Filter model elements by class, storey, property set, or attribute value.
- Coordinate model issues with BCF viewpoints and view states.
- Review information delivery requirements with IDS workflows.
- Place supported IFC models on maps by using available coordinate data.

> [!NOTE]
> **Privacy first**
> Files are processed in the browser. When used with SharePoint or Microsoft Teams, files remain in your Microsoft 365 tenant.

> [!div class="nextstepaction"]
> [Access the Online IFC Viewer](https://viewer.flinker.app/)

> [!div class="nextstepaction"]
> [Get the Open IFC Viewer desktop app](https://apps.microsoft.com/detail/9ndxqrvvrq0j?hl=de-DE&gl=DE)

## Large and multi-model loading

Flinker IFC Viewer supports loading IFC datasets up to multiple GB in supported environments. It is built for high-performance review of large single models and multi-model projects that combine architecture, structure, MEP, site, and infrastructure files.

Performance depends on file size, geometry complexity, export quality, device memory, graphics hardware, browser, and network speed.

For best results:

- Export the model content required for review.
- Avoid unnecessary authoring detail, temporary objects, and unused geometry.
- Split very large projects by discipline, building, level, or review scope when that matches the coordination workflow.
- Use local files, SharePoint files, or network locations with reliable throughput.
- Test representative project files before a broad rollout.

## Microsoft 365 and app integration

You can use IFC Viewer across Microsoft 365 and custom app workflows.

| Environment | Use case |
|---|---|
| Online viewer | Open IFC files quickly for browser-based model review. |
| Desktop app | Review large local files and multi-GB IFC datasets. |
| SharePoint | View models from document libraries and SharePoint pages. |
| Microsoft Teams | Review shared project models in channel workflows. |
| Power BI and Excel | Connect model geometry with reporting, schedule, cost, and spreadsheet analysis. |
| SDK | Embed IFC, BCF, and IDS review workflows in custom web applications. |

## Frequently asked IFC model review questions

These questions cover general IFC model review behavior. For platform-specific questions, use the Microsoft 365 app FAQ pages:

- [IFC Viewer in Microsoft Teams FAQ](faq-for-ifc-viewer-in-teams.md)
- [IFC Viewer in SharePoint FAQ](faq-for-ifc-viewer-in-sharepoint.md)
- [IFC Viewer Visual for Power BI FAQ](faq-for-ifc-visual-in-power-bi.md)

### Why can an IFC model take a long time to open?

IFC models can contain geometry, object relationships, property sets, quantities, classifications, materials, spatial structure, and georeferencing data. Large or highly detailed exports can need more time to parse, optimize, and display.

If a model opens slowly, check:

| Area | What to check |
|---|---|
| IFC export scope | Export the model content required for review instead of unnecessary authoring detail. |
| Model size and structure | Large geometry, repeated complex objects, and excessive property data can increase load time. |
| Device resources | Browser-based model review depends on available memory, CPU, and graphics resources. |
| Network connection | Opening files from cloud storage can be delayed by slow or unstable connectivity. |

For better openBIM exchange, keep stable `GlobalId` values, include the required property sets and quantities, and validate model data against project information requirements where possible.

### Can I open Autodesk Revit or Navisworks files directly?

No. Revit and Navisworks files are proprietary application formats, not buildingSMART openBIM exchange standards.

For openBIM workflows, export model data to **Industry Foundation Classes (IFC)** and exchange issue context with **BIM Collaboration Format (BCF)**. The viewer supports IFC-based model review and BCF-based issue coordination; proprietary authoring or coordination files must be exported or converted before use.
