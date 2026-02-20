---
uid: ifc-map-dashboard
title: IFC to GIS Portfolio Map Dashboard (Power BI)
description: Build a Power BI IFC-to-GIS portfolio dashboard. Load multiple IFC files, extract trusted geolocation metadata, apply fallback logic, and map projects.
keywords: IFC to GIS, Power BI IFC dashboard, BIM portfolio map, IFC geolocation, IfcMapConversion, IfcSite, Azure Maps, multi-file IFC
canonical_url: https://docs.flinker.app/docs/IFC_Map.html
---

# IFC GIS & Portfolio Map Dashboard

<iframe title="ifcviewer_GIS-Map" style="width: 100%; aspect-ratio: 16 / 9;" src="https://app.powerbi.com/view?r=eyJrIjoiMTkxOWU4ZDktZDQyZi00OWUyLTliZDItMWU0ZjMxMDA4YWIwIiwidCI6IjQ0YjY0MGYzLTQ5YjAtNDMwNC05Yzk4LWM2MWQwYmMwZGMwMiJ9" frameborder="0" allowFullScreen="true"></iframe>

## Executive Overview
The **IFC GIS Dashboard** is a specialized solution designed to manage and visualize portfolios of construction projects. Using multiple files in the same query, this dashboard extracts geospatial metadata and project attributes embedded deep within IFC files to create a unified, map-based portfolio view.

It solves a critical industry challenge: **Unstructured Data**. IFC files often vary in quality and schema compliance. This tool employs an engineering-first extraction engine to normalize data across different authoring tools (Revit, ArchiCAD, Tekla, VectorWorks, DDS-CAD) without requiring manual data entry.

## Data Extraction Logic
The dashboard does not rely on simple property sets (Psets). Instead, it parses the raw STEP physical file structure to retrieve "Trusted Data" from the native IFC Schema hierarchy:

1.  **Project Context:** Extracts `IfcProject` attributes (Name, Phase, Context).
2.  **Site & Location:** Extracts `IfcSite` for geospatial coordinates and elevation.
3.  **Building Topology:** Extracts `IfcBuilding` and `IfcBuildingStorey` to understand vertical scale.
4.  **Address Data:** Parses `IfcPostalAddress` for city and country information.
5.  **Authoring Info:** Extracts `IfcApplication`, `IfcPerson`, and `IfcOrganization` for file provenance.

### Universal Pattern Matching
The extraction engine handles variations in IFC file formatting from different authoring tools:

| Authoring Tool | IFC Format Pattern | Status |
| :--- | :--- | :--- |
| Revit | `#123=IFCPROJECT('guid',...` | ✅ Supported |
| ArchiCAD | `#123 = IFCPROJECT ('guid',...` | ✅ Supported |
| DDS-CAD | `#123= IFCPROJECT('guid',...` | ✅ Supported |
| VectorWorks | `#123=IFCPROJECT('guid',...` | ✅ Supported |

## Ideal IFC Specifications
For optimal performance and automatic georeferencing, input IFC files should adhere to the following standards:

* **Schema:** IFC4, IFC2x3, or IFC2x2.
* **Geolocation (Priority 1):** For IFC4, the file should contain the `IfcMapConversion` entity with True North and Scale settings.
* **Geolocation (Priority 2):** For IFC2x3/IFC2x2, the `IfcSite` entity should contain `RefLatitude` and `RefLongitude` attributes.
* **Hierarchy:** The model should strictly follow the `IfcProject -> IfcSite -> IfcBuilding` containment tree.

> **Note:** If explicit coordinates are missing, the dashboard will attempt to use the Project Address (City, Country) for approximate location via Azure Maps geocoding.

## Automated Fallback Logic
Real-world IFC files frequently lack standard metadata. To ensure no project is left behind, the extraction query implements a **Cascading Fallback Logic**. It prioritizes high-fidelity data sources and automatically "falls back" to secondary options if the primary data is missing (`$`, `null`, or invalid).

| Entity Attribute | Priority 1 (Primary Source) | Priority 2 (Secondary Source) | Priority 3 (Last Resort) |
| :--- | :--- | :--- | :--- |
| **Project Name** | `LongName` (Index 5) | `Description` (Index 3) | `FileName` (Cleaned) |
| **Site Name** | `LongName` (Index 7) | `Name` (Index 2) | "Default Site" |
| **Building Name** | `LongName` (Index 7) | `Name` (Index 2) | `Project Name` |
| **Geolocation** | `IFCMAPCONVERSION` (IFC4) | `IFCSITE` RefLat/RefLon | `Address_Town` + `Country` |
| **Address (City)** | `Town` (Index 6) | `Region` (Index 7) | "Not Defined" |

* **GUID Protection:** The system includes a strict validation layer that detects and rejects "False Descriptions" (e.g., if a GUID is accidentally written into a Name field), ensuring clean readable text in the report.

## Location Status Indicators
The dashboard provides visual feedback on the quality of location data for each project:

| Icon | Status | Description |
| :--- | :--- | :--- |
| ● | **Precise** | Project has valid coordinates from IFC file |
| ◐ | **City-Based** | No coordinates, but city name available for geocoding |
| ⚠️ | **Unknown** | No location data available in IFC file |

Projects with "Unknown" status will not appear on the map but remain visible in the project list with a warning indicator.

## Project Color System
Each project is automatically assigned a unique color based on its GUID hash. This ensures:

* **Consistency:** Same project always gets the same color across refreshes
* **Distinction:** 20 unique colors prevent visual confusion
* **No Manual Input:** Colors are generated algorithmically

The color palette includes professional tones suitable for executive presentations.

## Multi-File Loading Strategy
The dashboard is architected to handle multiple IFC files simultaneously through a single connection parameter.

### How to Load Multiple Projects
You do not need to create separate queries for each file. Use the **Semicolon Delimiter (`;`)** method to pass a list of file paths.

**Example String:**
```text
C:\Projects\Tower_Block_A.ifc; C:\Projects\Hospital_Zone_B.ifc; C:\Projects\Stadium_Roof.ifc
```

### Supported File Sources
| Source | Example Path |
| :--- | :--- |
| Local File System | `C:\Projects\Building_A.ifc` |
| Network Share | `\\Server\BIM\Tower.ifc` |
| SharePoint/OneDrive | `https://company.sharepoint.com/.../file.ifc` |

## Dashboard Components

### Project List Panel
Displays all loaded projects with:
- Active Projects count
- Location Legend (● Precise, ◐ City, ⚠️ Unknown)
- Color-coded project cards with location status icons

### Map Visual
Interactive Azure Map showing:
- Project locations with color-coded markers
- Automatic clustering for nearby projects
- Zoom and pan controls

### Project Information Panel
Detailed view when a project is selected:
- Project Information (Name, GUID, Phase, Type)
- Site Information (with warning if no coordinates)
- Building Information (Storeys count and names)
- File Information (Author, Application, IFC Version)
- Address Information

## Troubleshooting

### Projects Not Appearing on Map
| Symptom | Cause | Solution |
| :--- | :--- | :--- |
| ⚠️ Warning icon | IFC file has no coordinates or address | Re-export IFC with geolocation enabled |
| No marker on map | Coordinates = 0,0 or missing | Check `IfcSite` RefLatitude/RefLongitude in source file |
| Wrong location | Coordinates in wrong CRS | Verify source uses WGS84 or has proper `IfcMapConversion` |

### Data Quality Issues
| Issue | Resolution |
| :--- | :--- |
| "Default Project" name | Original IFC has no Project Name - edit in authoring tool |
| "Unknown" author | `IfcPerson` not populated in source file |
| Missing storeys | `IfcBuildingStorey` entities not properly linked |

## Performance & Best Practices

### Understanding Refresh Times
The query reads IFC files line-by-line to extract metadata from multiple entity types (`IfcProject`, `IfcSite`, `IfcBuildingStorey`, `IfcPostalAddress`). Refresh times depend on:

- **File Size:** Larger files = longer refresh
- **Number of Files:** More files = longer total refresh
- **Machine Specs:** RAM and CPU affect processing speed

### Recommendations

| Factor | Recommendation |
| :--- | :--- |
| **File Size** | Keep individual files under **150-200 MB** for optimal refresh speed |
| **Number of Files** | Start with **15-25 files** per query; add more based on your machine's performance |
| **RAM** | Minimum **16 GB RAM** recommended for multi-file loading |
| **Refresh Location** | For large portfolios, consider scheduled refresh on Power BI Service (cloud) |

### Performance Tips
1. **Test incrementally:** Start with 5 files, then add more to gauge performance
2. **Use metadata-only IFC exports:** If available, export IFC files with geometry excluded for faster parsing
3. **Schedule refresh:** For large portfolios, use Power BI Service scheduled refresh during off-hours
4. **Split large portfolios:** If refresh exceeds 30 minutes, consider splitting into multiple reports by region or project phase

> **Note:** Actual performance varies based on file complexity, machine specifications, and network speed (for SharePoint/network files). Test with your specific files to establish baseline refresh times.

## Technical Specifications

### Supported IFC Versions
- IFC4 (fully supported)
- IFC2x3 (fully supported)
- IFC2x2 (legacy support)

### Coordinate Systems
- WGS84 (standard for web maps)
- Automatic conversion from DMS (Degrees, Minutes, Seconds) to Decimal Degrees

### Extracted Entities
| Entity | Data Extracted |
| :--- | :--- |
| `IfcProject` | Name, Number, Description, Phase, Type |
| `IfcSite` | Name, GUID, RefLatitude, RefLongitude, Elevation |
| `IfcBuilding` | Name, GUID, Description |
| `IfcBuildingStorey` | Names (concatenated), Count |
| `IfcPostalAddress` | Town, Region, PostalCode, Country |
| `IfcApplication` | Name, Version |
| `IfcPerson` | Author Name |
| `IfcOrganization` | Organization Name |

## How to add your files and Set Up the files Parameter in Power BI

### Step 1: Open Power Query Editor
1. Open your Power BI file
2. Go to **Home** → **Transform Data**
3. This opens the Power Query Editor

### Step 2: Create the Parameter
1. In Power Query Editor, go to **Home** → **Manage Parameters** → **New Parameter**
2. Configure the parameter as follows:

| Setting | Value |
| :--- | :--- |
| **Name** | `IFC_File_Paths` |
| **Description** | Enter IFC file paths separated by semicolon (;) |
| **Required** | ✅ Checked |
| **Type** | Text |
| **Suggested Values** | Any value |
| **Current Value** | *(Your file paths here)* |

3. Click **OK** to create the parameter

### Step 3: Enter Your File Paths
In the **Current Value** field, enter your IFC file paths separated by semicolons:

```text
C:\BIM\Project_A.ifc; C:\BIM\Project_B.ifc; C:\BIM\Project_C.ifc
```

**Important Rules:**
- Use semicolon (`;`) as separator between files
- Spaces before/after semicolon are OK (will be trimmed automatically)
- Each path must be a complete file path with `.ifc` extension
- Supports local paths, network paths, and URLs

### Step 4: Edit Parameter Value (After Setup)
To change the files later:
1. Go to **Home** → **Transform Data** (Power Query Editor)
2. In the left panel, find **Parameters**
3. Click on `IFC_File_Paths`
4. Edit the **Current Value** field
5. Click **Close & Apply**

### Parameter Examples

**Local Files:**
```text
C:\Projects\Building_A.ifc; C:\Projects\Building_B.ifc
```

**Network Share:**
```text
\\Server\BIM\Tower.ifc; \\Server\BIM\Hospital.ifc
```

**SharePoint/OneDrive:**
```text
https://company.sharepoint.com/sites/BIM/Documents/Project1.ifc; https://company.sharepoint.com/sites/BIM/Documents/Project2.ifc
```

**Mixed Sources:**
```text
C:\Local\Building.ifc; \\Network\Shared\Tower.ifc; https://sharepoint.com/.../Hospital.ifc
```

### Visual Guide

```
┌─────────────────────────────────────────────────────────────────┐
│  Power Query Editor                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐                                            │
│  │ Queries         │    ┌─────────────────────────────────────┐ │
│  │                 │    │ Parameter: IFC_File_Paths           │ │
│  │ 📁 Parameters   │    │                                     │ │
│  │   └─ IFC_File.. │◄───│ Current Value:                      │ │
│  │                 │    │ ┌─────────────────────────────────┐ │ │
│  │ 📁 Queries      │    │ │ C:\BIM\A.ifc; C:\BIM\B.ifc     │ │ │
│  │   └─ IFC_Map    │    │ └─────────────────────────────────┘ │ │
│  └─────────────────┘    └─────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```
