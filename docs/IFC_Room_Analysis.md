---
uid: ifc-space-analytics
title: IFC Space Analytics & Occupancy Dashboard
---

# IFC Space Analytics & Occupancy Dashboard

<iframe title="IFC Space Analytics" style="width: 100%; aspect-ratio: 16 / 9;" src="https://app.powerbi.com/reportEmbed?reportId=39247cb4-5338-457b-bd45-65c2edf38d12&autoAuth=true&ctid=44b640f3-49b0-4304-9c98-c61d0bc0dc02" frameborder="0" allowFullScreen="true"></iframe>

Explore the dashboard above. You can filter by Level, Room Usage, or select individual elements in the 3D viewer to see their specific properties.

## Overview
The **IFC Space Analytics Dashboard** is a powerful Power BI template designed to bridge the gap between BIM (Building Information Modeling) data and Facility Management operations. By directly ingesting `.ifc` files, this report transforms raw geometry and property data into actionable insights regarding space usage, occupancy distribution, and volumetric analysis.

This tool is essential for **BIM Managers**, **Facility Managers**, and **Owner Operators** looking to visualize their asset performance without needing complex BIM authoring software.

---

## Report Structure: Overview vs. Detail

To provide both high-level insights and granular engineering data, the dashboard is split into two distinct views:

### 1. Space Overview (Executive View)
Designed for stakeholders who need quick answers. This page features:
* **Interactive 3D Viewer:** A large, central visualization color-coded by Room Function.
* **Gauge Chart:** An instant visual indicator showing the total **Number of Rooms** in the filtered selection.
* **Usage Summary List:** A color-coded table displaying room types (e.g., Office, Corridor) alongside their count and total area, replacing complex engineering grids.

### 2. Quantity Takeoff (Detailed View)
Designed for engineers and estimators. Accessible via the **"Show Extended Room Details"** navigation button, this page includes:
* **Detailed Matrix:** A comprehensive table listing every room with its specific properties (Perimeter, Height, Volume).
* **Advanced Filtering:** Granular control to filter data by Level, Usage, or Name.
* **Raw Property Data:** Access to technical IFC parameters for validation.

---

## Key Features

* **Automated Usage Detection:** A smart algorithm that identifies room functions regardless of the naming convention used in the source file (Revit, ArchiCAD, etc.).
* **Data-Driven 3D Visualization:** A fully interactive 3D viewer that color-codes spaces based on their function dynamically.
* **Consistency Across Visuals:** The color palette used in the 3D model is automatically synchronized with all charts and tables in the report.
* **Performance Optimized:** Built on a high-performance Power Query ETL process designed to handle large IFC datasets efficiently.

## Technical Logic: The "Priority Matrix"

One of the biggest challenges in IFC data is inconsistent naming. Some files use `Occupancy`, others use `Category`, and some stick to standard IFC properties.

To solve this, this dashboard utilizes a **DAX Priority Matrix**. It scans the model for space usage data in the following hierarchical order:

| Level | Data Source | Property Scanned | Description |
| :--- | :--- | :--- | :--- |
| **1. Standard** | **IFC Standard** | `Pset_SpaceCommon` / `OccupancyType` | The most reliable, standard-compliant method. |
| **2. Software** | **Authoring Tool** | `Category Description` | Checks for software-specific categories often exported by default. |
| **3. Convention** | **Direct Naming** | `SpaceUsage`, `Usage` | Looks for explicit, user-defined parameters commonly used in FM. |
| **4. Inference** | **Fuzzy Matching** | *Keywords search* | Scans all properties for text containing "Usage" or "Occupancy". |
| **5. Fallback** | **Default** | *Unassigned* | If no data is found, it is flagged for the BIM Manager to review. |

> **Note:** This logic ensures that 99% of spaces get a meaningful label without manual mapping.

## Dynamic Coloring System

Gone are the days of manually setting colors for every room type. This dashboard features an **Algorithmic Coloring Engine**:

1. **Auto-Generation:** It calculates a unique color based on the text value of the Room Usage.
2. **Consistency:** "Kitchen" will always appear in the same specific color, and "Office" in another, ensuring consistent reporting across different projects.
3. **Scalability:** The system supports an infinite number of room types. Even if a new function like "Laboratory" appears, it automatically gets a distinct color.

## Prerequisites for IFC Files

To get the best results when loading your own data, ensure your IFC file meets these criteria:

* **Entity Requirement:** The file **must** contain `IfcSpace` entities. Files containing only geometry (meshes) without space definitions will not show room data.
* **Containment:** Spaces should be correctly associated with `IfcBuildingStorey` levels.