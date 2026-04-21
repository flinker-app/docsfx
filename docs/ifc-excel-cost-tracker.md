---
uid: ifc-excel-cost-tracker
title: IFC Excel Cost Tracker
description: Learn how to use the IFC Excel Cost Tracker workbook — which fields are filled automatically, which fields require manual input, how quantity fallback logic works, and how to troubleshoot common issues.
keywords: IFC Excel Cost Tracker, IFC cost control, Excel IFC Viewer, cost tracking, BIM cost control, quantity fallback, Power Query IFC
canonical_url: https://docs.flinker.app/docs/ifc-excel-cost-tracker.html
---

# IFC Excel Cost Tracker

Use this guide to work with the **IFC Excel Cost Tracker** workbook as a practical cost-control environment linked to IFC model geometry. The workbook is designed to combine:

- model-based element data
- IFC geometry in the workbook
- linked 3D review through the IFC Viewer task pane
- manual commercial inputs such as rates, actual cost, progress, and status
- ready-to-use summaries, KPIs, and PivotTables

The goal is to give project teams a single workflow for reviewing model elements and tracking **budgeted vs. actual cost** with better visibility and traceability.

---

## Download the workbook

Download the ready-to-use template and point it to your own IFC file:

- [Download IFC Cost Tracking workbook](../_media/IFC_CostTracking.xlsx)

---

## Recommended setup

For most projects, the recommended setup is:

- keep the IFC loading workflow based on **Power Query**
- keep the workbook data structure unchanged
- keep IFC geometry in the **IfcChunk** column
- keep valid **GlobalId / GUID** values for element linking
- use the workbook as the main working surface for tables, filters, formulas, reports, and PivotTables
- use the IFC Viewer task pane for linked 3D review

### Best option for speed and stability

For the fastest and most reliable refresh experience in a trusted company environment:

- set data source privacy levels to **Organizational** for both the current workbook source and the SharePoint / web / file source used for the IFC file
- enable **Ignore the Privacy Levels and potentially improve performance** in Power Query for this workbook
- keep helper queries as **Connection Only** where applicable
- load only the final user-facing cost table to the worksheet

> **Note:** Use this setup only for internal, trusted company workflows. Do not apply it for untrusted or highly sensitive mixed-source scenarios without reviewing data governance requirements first.

---

## Workbook structure

The workbook is split conceptually into two parts:

1. **Automatic model data** loaded through Power Query
2. **Manual and formula-based commercial fields** maintained by the end user in Excel

### Automatically filled fields

These fields come from the IFC / Power Query workflow and should be treated as system-generated. Do not edit them manually:

| Field | Source |
| :--- | :--- |
| `GlobalId` | IFC attribute |
| `Entity` | IFC class name |
| `PredefinedType` | IFC attribute |
| `Name` | IFC attribute |
| `Building Storey` | Spatial containment hierarchy |
| `Room Name` | Space containment |
| `Cost Category` | IFC Classes reference table |
| `Trade` | IFC Classes reference table |
| `Description` | IFC attribute or name fallback |
| `Notes` | IFC Classes reference table |
| `Used Property Set` | Resolved by quantity fallback chain |
| `Used Property` | Resolved by quantity fallback chain |
| `Model_Quantity` | Resolved by quantity fallback chain |
| `Unit` | IFC Classes reference table |
| `IfcChunk` | Compressed IFC geometry for the viewer |

### Manually filled fields

These fields are intended for user input and project controls updates:

| Field | Description |
| :--- | :--- |
| `Quantity Manual Input` | Optional override — use only when you intentionally want to replace the model quantity |
| `Unit Rate` | Cost per unit (e.g. €/m², €/m³, €/nr) |
| `Actual Cost` | Real spend recorded against the element |
| `% Complete` | Progress as a decimal (0.0 to 1.0) |
| `Status` | Current element status (e.g. Completed, In Progress, Not Started) |

### Formula / calculated fields

These fields are driven by ready-to-use template formulas and should not be typed manually:

| Field | Formula |
| :--- | :--- |
| `Budgeted Cost` | `=[@[Model_Quantity]] * [@[Unit Rate]]` |
| `Variance` | `=[@[Budgeted Cost]] - [@[Actual Cost]]` |
| `% Var` | `=IFERROR([@Variance] / [@[Budgeted Cost]], "-")` |

> **Best practice:** rely on `Model_Quantity` by default. Use `Quantity Manual Input` only when a controlled override is required.

---

## Quantity fallback logic

The workbook automatically resolves the best available quantity for each IFC element using a **7-step fallback chain** followed by a count-unit default. The chain runs in order and stops at the first successful match.

The fallback logic uses the **IFC Classes reference table** (built into the workbook) to know which property sets and property names to look for — first using standard IFC quantity sets, then software-specific property sets, then keyword-based search.

| Step | Strategy | Source |
| :---: | :--- | :--- |
| 1 | IFC Standard Quantity Set | `Quantity set name` + `Main quantity` from the IFC Classes table |
| 2 | Revit property set | `Revit Pset` + `Revit Property` |
| 3 | OBD property set | `OBD Pset` + `OBD Property` |
| 4 | ArchiCAD property set | `ArchiCAD Pset` + `ArchiCAD Property` |
| 5 | Keyword search | `Fallback word1` — matches any numeric property whose name contains this keyword |
| 6 | Keyword search | `Fallback word2` |
| 7 | Keyword search | `Fallback word3` |
| 8 | Count-unit default | If unit is `ea`, `nr`, `item`, `count`, or `pcs` and no quantity was found — defaults to **1 per element** |
| — | Not found | If no step succeeds — `Model_Quantity` = null, `Used Property Set` = "Not Found" |

The `Used Property Set` and `Used Property` columns in the loaded table always show which step was used for each element, so you can audit the resolution result.

### Download the fallback reference table

The IFC Classes reference table defines the fallback chain for all 99 supported IFC classes. You can inspect or extend it:

- [Download IFC Classes Fallback Reference](../_media/CostTracker_Fallback.xlsx)

---

## Typical workflow

### 1. Open the workbook
Open the workbook in **Excel Desktop**.

### 2. Update the IFC file path when needed
If you want to load a different IFC file, update the path in the dedicated file path cell (B2) then go to Data menu and hit refresh all.

See the walkthrough video:

<video controls style="width: 100%; max-width: 720px; border-radius: 6px; margin: 12px 0;">
  <source src="/_media/IFC_CostTracker_addNewFile.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

This video shows where to paste or update the IFC file path and how to refresh the workbook afterward.

### 3. Refresh the workbook
After changing the IFC file path or after receiving an updated IFC model:

- use **Data > Refresh All**
- wait until Power Query refresh finishes
- if needed, reopen or refresh the IFC Viewer task pane

### 4. Review model elements
Use the linked workflow to review element position, geometry, model quantity, storey and room breakdown, and category and trade grouping.

### 5. Add commercial updates
Fill or update the manual fields as needed: Unit Rate, Actual Cost, % Complete, Status, and Quantity Manual Input if required.

### 6. Use the summaries and PivotTables
The workbook supports review by budgeted vs. actual cost, variance, completion status, and summaries by storey, room, category, trade, or other dimensions.

See the overview video:

<video controls style="width: 100%; max-width: 720px; border-radius: 6px; margin: 12px 0;">
  <source src="/_media/IFC_CostTracker_Overview.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## How selection sync works

Selection sync is based on valid IFC identifiers — **GlobalId / GUID**.

### Excel to viewer
The current sync behavior supports:

- the **first Excel table on the active worksheet**
- supported **PivotTables** on the active worksheet that are connected to workbook source data containing IFC GUID values

### Viewer to Excel
This works best when the IFC identifier column is named `GUID` or `GlobalId`.

---

## Best practices

- do not edit or reformat the IFC ID values
- do not remove the `IfcChunk` data
- keep one clear IFC ID column (`GlobalId` / `GUID`)
- avoid changing the source table structure unless you know exactly what depends on it
- use filters carefully — only **visible rows** take part in Excel-to-viewer sync
- keep PivotTables connected to workbook data that still contains the IFC ID source column
- save the workbook after major refreshes or updates

---

## Troubleshooting

### The model does not load
Check the following:

- the workbook was refreshed successfully
- `IfcChunk` data is still present in the workbook
- the IFC file path points to a valid and accessible file
- the add-in was reopened or refreshed after query refresh

### Changing the IFC file path does not update the model
Check the following:

- the new path was updated in the correct cell
- **Refresh All** was run after changing the path
- the file path cell is treated as plain text and not converted to an Excel hyperlink
- the IFC Viewer was reopened after refresh


### Selection sync does not work
Check the following:

- IFC IDs in Excel match the currently loaded IFC model
- the ID values were not changed by formulas or formatting
- the table you want to sync from is the **first table on the active worksheet**
- the ID column is named `GUID` or `GlobalId`

### PivotTables do not show updated results
Check the following:

- the source query was refreshed first using **Refresh All**
- the PivotTable is connected to the correct workbook table or range
- the workbook formulas and summary logic were not broken by structural edits

If needed, review the overview video:

- [IFC_CostTracker_Overview.mp4](/_media/IFC_CostTracker_Overview.mp4)

### The workbook becomes slow
For better performance:

- keep privacy levels as **Organizational** for trusted internal sources
- keep **Ignore the Privacy Levels** enabled for this workbook when appropriate
- avoid loading unnecessary helper queries to worksheets
- refresh only after the IFC path is correct
- avoid unnecessary edits to the source table structure

---

## What is filled automatically vs. manually — quick summary

### Automatic
- IFC element IDs and metadata
- model quantities
- category and trade suggestions
- IFC geometry chunks
- viewer-linked model context

### Manual
- quantity override when needed
- unit rate
- actual cost
- completion percentage
- status

### Calculated by the template
- budgeted cost
- variance
- percentage variance
- PivotTables, summaries, and KPI views
