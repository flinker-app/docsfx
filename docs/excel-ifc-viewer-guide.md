---
title: Use the IFC Viewer in Excel
description: Learn how to load IFC geometry into Excel, sync selections with the IFC Viewer, and prepare your workbook for reliable linking.
keywords: IFC Excel add-in, Excel IFC Viewer guide, GlobalId sync, ifcChunk, BIM in Excel
canonical_url: https://docs.flinker.app/docs/excel-ifc-viewer-guide.html
---

# Use the IFC Viewer in Excel

Use this guide to load IFC geometry into Excel, open the model in the IFC Viewer task pane, and keep worksheet selections linked with the 3D model. The workflow is designed for Excel-based review, reporting, and coordination, without moving model data into a separate desktop tool.

## Overview

The Excel IFC Viewer works best when the workbook already contains IFC geometry and element identifiers. In that setup, Excel becomes the working surface for tables, filters, formulas, and reports, while the task pane provides the linked 3D view of the same model data.

- Load IFC geometry into Excel by using the Power Query from the Power BI sample report.
- Open the IFC Viewer add-in to load the model from the workbook.
- Select rows in Excel to select matching elements in the viewer.
- Select elements in the viewer to highlight matching rows in Excel.

## Before you start

For most projects, the recommended setup is to use the existing **Power Query from the Power BI sample report**. This creates a workbook structure that the add-in can read consistently and makes the overall workflow easier to maintain.

Get the query here: [Copy the IFC loading query from the sample report](ifc-viewer-usage-for-power-bi.md#1-copy-the-ifc-loading-query-from-the-sample-report)

The Power Query approach is recommended because it:

- keeps geometry data (`IFC Chunks`) and IFC IDs in a consistent structure
- makes refresh easier when the IFC file changes
- makes the workbook easier to reuse and share

Before you open the add-in, make sure the workbook contains the data needed by the viewer and by the Excel linking workflow:

- geometry data in `IFC Chunks`
- IFC element IDs with valid IFC GUID values
- an Excel table for the model data, if possible

> [!NOTE]
> Loading from a local IFC file path can also work, but the Power Query workflow is the preferred setup for repeatable Excel-based workflows.

## Load IFC geometry in Excel

Once the query is in place, the loading process is straightforward. The goal is to make sure the workbook contains the current geometry data before the add-in starts.

### Paste the copied Power Query into Excel

After you copy the IFC loading query from the Power BI sample report, add it to your Excel workbook by using Power Query in Excel Desktop.

1. Open the workbook in Excel Desktop.
2. Go to the **Data** tab.
3. Open Power Query by choosing **Get Data** and then starting the **Power Query Editor**.
4. Create a **Blank Query**.
5. In Power Query Editor, open **Advanced Editor**.
6. Replace the existing content with the copied IFC loading query.
7. Select **Done** to save the query.
8. Select **Close & Load** to load the query results into the workbook.

After the query is loaded, Excel creates the table structure that the IFC Viewer add-in can use for geometry loading and selection linking.

1. Refresh the query so the workbook contains the latest `IFC Chunks` and IFC IDs.
2. Save the workbook if needed.
3. Start the **IFC Viewer** add-in from the ribbon.
4. Wait for the add-in to load the model from the workbook.

When the add-in opens, it reads the workbook content and initializes the viewer from that data:

- it reads IFC geometry from the workbook
- it loads the model automatically if `IFC Chunks` are present
- it loads updated geometry after you refresh the query and reopen or refresh the add-in

## How selection sync works

Selection sync is based on IFC GUID values. This is what allows worksheet data and 3D elements to stay connected while you review the model in Excel.

### Excel to viewer

Use Excel to drive the 3D selection when you want to review items from a filtered list, a calculation sheet, or a report table.

Select rows or cells in Excel that contain valid IFC GUID values.

- Only visible cells are used. Filtered-out rows are ignored.
- The column name does not need to be `GUID` or `GlobalId`.
- Excel to viewer sync works from the selected visible cell values, not from a required column name.

### Viewer to Excel

Use the viewer to drive Excel when you want to inspect which row or record belongs to a selected model element.

Select an element in the 3D viewer.

- Excel highlights matching row values in the active worksheet.
- This works best when the IFC ID column is named `GUID` or `GlobalId`.

## Prepare the workbook

Workbook preparation has a direct effect on how reliable the linking feels in day-to-day use. A clear and consistent table structure reduces sync issues and makes the workbook easier to share with other users.

Use these rules for the most reliable result:

1. Keep one clear column with valid IFC GUID values.
2. Naming that column `GUID` or `GlobalId` is recommended, but not required.
3. Do not change the GUID values with formatting or formulas.
4. Keep the geometry data (`IFC Chunks`) from the Power Query output.
5. If you use filters, remember that only visible rows take part in Excel to viewer sync.

## Export data from the viewer to Excel

The viewer can export data back into Excel as new sheets or tables. This is useful when you want to continue working with viewer output by using standard Excel features such as formulas, pivots, formatting, and charts.

When you run an export:

1. The add-in creates new worksheet(s) in the workbook.
2. The exported data is inserted as Excel sheets/tables.
3. You can continue working with formulas, pivots, and reports in Excel.

## Limitations

The current workflow focuses on loading IFC data into Excel and using Excel as the working environment around the model. It does not provide direct write-back from edited worksheet values to the original IFC file.

- Loading IFC data into Excel is supported.
- Exporting viewer data into Excel is supported.
- Writing edited worksheet values back into the IFC file is not supported in this flow.

## Troubleshooting

If loading or sync does not work as expected, start by checking the workbook content before looking for viewer issues. In most cases, the cause is missing geometry data, mismatched GUID values, or a workbook structure that no longer matches the expected query output.

### The model does not load

- Refresh the Power Query and save the workbook.
- Check that `IFC Chunks` are still present in the workbook.
- Close and reopen the add-in.
- Check that sign-in and network access are working.

### Selection sync does not work

- Check that the IFC GUID values in Excel match the loaded IFC model.
- Check that the GUID values were not changed by formulas or formatting.
- Check that you are selecting visible rows or cells.
- If viewer to Excel highlighting is inconsistent, rename the ID column to `GUID` or `GlobalId`.
