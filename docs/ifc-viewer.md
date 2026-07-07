---
title: Industry Foundation Classes (IFC)
description: Learn how IFC supports openBIM model exchange and how Flinker IFC Viewer handles high-performance, large, and federated IFC review workflows.
keywords: IFC, Industry Foundation Classes, openBIM, buildingSMART, ISO 16739, IFC viewer, high-performance IFC viewer, IFC benchmark, BIM viewer benchmark, fast IFC viewer, federated IFC model, smooth IFC navigation, BIM data, 3D models, SharePoint, Microsoft Teams
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

## Performance and large models

Flinker IFC Viewer is built for high-performance browser review of large single IFC models and federated model sets. The benchmark below uses measured load time, throughput, navigation FPS, and device details instead of broad performance claims.

Performance still depends on file size, geometry complexity, export quality, device memory, graphics hardware, browser, and network speed.

### Browser benchmark

The benchmark used a mixed IFC model set with building, MEP, and infrastructure files. It measures how quickly Flinker IFC Viewer made the models visible in the browser and how smooth navigation stayed after loading.

| Benchmark result | Number | What it means |
|---|---:|---|
| Benchmark date | July 3, 2026 | |
| IFC files loaded | 15/15 | |
| Total IFC size | 1.43 GB | |
| Total load time | 45.2 s | |
| Average throughput | 31.55 MB/s | Across the full 1.43 GB benchmark, the viewer made about 31.55 MB of IFC data visible per second. |
| Navigation | 59.7 fps | Orbiting and zooming stayed smooth during the benchmark. |
| Viewer version | `ifc-viewer@3.4.0` | |
| Test device | Windows 11 laptop, Intel Core i7-11370H, 4 cores, 8 threads, 16 GB RAM, Intel Iris Xe graphics | The test used office laptop hardware, not specialist BIM workstation hardware. Newer laptops, more RAM, or dedicated graphics should usually improve large-project loading and navigation. |

The benchmark used the following IFC files. Entities are model objects counted during the load, such as walls, slabs, ducts, fittings, bridge parts, and road objects. `MB/s` shows how much IFC file data became visible per second. Higher is faster.

| Type | Size | Entities | Load time | MB/s |
|---|---:|---:|---:|---:|
| Building, architecture | 0.61 MB | 80 | 3.05 s | 0.20 |
| Building, MEP | 0.02 MB | 8 | 0.51 s | 0.04 |
| Building sample | 43.22 MB | 5,647 | 1.98 s | 21.85 |
| Medical clinic, architecture | 12.60 MB | 3,258 | 1.12 s | 11.29 |
| Medical clinic, construction | 18.48 MB | 1,085 | 1.28 s | 14.40 |
| Medical clinic, electrical | 11.41 MB | 2,384 | 0.88 s | 12.92 |
| Medical clinic, HVAC | 26.10 MB | 3,967 | 1.29 s | 20.16 |
| Infrastructure, viaduct | 31.46 MB | 6,546 | 1.55 s | 20.30 |
| Infrastructure, road | 153.43 MB | 412 | 5.03 s | 30.51 |
| Infrastructure, bridge | 1.26 MB | 7 | 0.55 s | 2.31 |
| Medical clinic, MEP | 197.73 MB | 16,538 | 4.81 s | 41.10 |
| Building, architecture | 79.30 MB | 6,479 | 4.36 s | 18.17 |
| Building, architecture | 144.09 MB | 6,436 | 4.12 s | 35.00 |
| Building, architecture | 326.78 MB | 16,755 | 6.31 s | 51.75 |
| Building, IFC4x3 | 379.38 MB | 20,306 | 8.35 s | 45.43 |

The larger files in this benchmark reached the highest throughput.

### Limitations

The benchmark device listed above loaded about 5 GB of IFC files together and kept navigation smooth after loading. This result was measured on office laptop hardware, not specialist BIM workstation hardware. More powerful devices and well-exported models can support larger combined IFC datasets.

### What affects loading and navigation

Large IFC files can still behave differently from one project to another. These points explain why loading time and navigation can change.

| Factor | What it affects | What it means in practice |
|---|---|---|
| File size | Initial loading | A larger IFC file takes longer to read. If the file is stored in SharePoint, Teams, OneDrive, or another cloud location, the file must first download through the network. |
| Geometry complexity | Loading and navigation | Models with many curved objects, detailed MEP parts, railings, facade elements, or high-detail manufacturer objects need more work before they are visible. |
| Export quality | Loading reliability and performance | Clean IFC exports load faster. Unused objects, duplicate geometry, temporary construction objects, and overly detailed exports can slow down review. |
| Device memory | Large and multi-model loading | More memory helps when opening large single models or several discipline models together. If memory is low, the browser may slow down or stop the load. |
| Graphics hardware | Navigation smoothness | Better graphics hardware helps when orbiting, zooming, clipping, coloring, or viewing many visible objects at once. Built-in laptop graphics can work well, but very detailed projects benefit from stronger hardware. |
| Browser | Loading and rendering | Modern browsers such as Edge and Chrome usually give the best WebGL performance. Browser extensions, old browser versions, or restricted enterprise settings can affect performance. |
| Network speed | Cloud file opening | Network speed matters mainly before the viewer starts processing the file. Local files open without cloud download time. Cloud files can be delayed by slow Wi-Fi, VPN, tenant throttling, or large file downloads. |

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
