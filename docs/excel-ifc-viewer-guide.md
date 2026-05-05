---
title: Use the IFC Viewer in Excel
description: Learn how to load IFC geometry into Excel, sync selections with the IFC Viewer, and prepare your workbook for reliable linking.
keywords: IFC Excel add-in, Excel IFC Viewer guide, GlobalId sync, ifcChunk, BIM in Excel
canonical_url: https://docs.flinker.app/docs/excel-ifc-viewer-guide.html
---

# Use the IFC Viewer in Excel

Use this guide to load IFC geometry into Excel, open the model in the IFC Viewer task pane, and keep worksheet selections linked with the 3D model. The Excel IFC Viewer works best when the workbook already contains IFC geometry and element identifiers, so Excel becomes the working surface for tables, filters, formulas, reports, and connected PivotTables while the task pane provides the linked 3D view.

## Load IFC geometry in Excel

For most projects, the recommended setup is to use the existing **Power Query from the Power BI sample report**. This creates a workbook structure that the add-in can read consistently and makes the overall workflow easier to maintain.

Get the query here: [Copy the IFC loading query from the sample report](ifc-viewer-usage-for-power-bi.md#1-copy-the-ifc-loading-query-from-the-sample-report)

The Power Query approach is recommended because it:

- keeps geometry data (`IFC Chunks`) and IFC IDs in a consistent structure
- makes refresh easier when the IFC file changes
- makes the workbook easier to reuse and share

Before you open the add-in, make sure the workbook contains the data needed by the viewer and by the Excel linking workflow:

- geometry data in `IFC Chunks`
- IFC element IDs with valid IFC GUID values
- an Excel table for the model data on the worksheet you want to sync from

> [!NOTE]
> Loading from a local IFC file path can also work, but the Power Query workflow is the preferred setup for repeatable Excel-based workflows.

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

Use Excel to drive the 3D selection when you want to review items from a filtered list, a report table, or a PivotTable summary.

The current selection-sync code does not scan arbitrary worksheet cells. It supports these Excel structures:

- the first Excel table on the active worksheet
- PivotTables on the active worksheet that are connected to an Excel Table or cell range in the same workbook containing IFC GUID values

Selections outside those structures are not used for Excel-to-viewer sync.

#### Excel tables

For standard worksheet selection sync, the add-in reads the first table on the active worksheet and intersects your row selection with that table body.

Select rows inside that table to send the matching IFC elements to the viewer.

![Selecting a row in Excel highlights the matching element in the IFC Viewer](/_media/clicking-a-row-with-ifc-element-globalid-selects-the-element-in-the-excel-ifc-viewer.png)

- Only visible rows in that table are used. Filtered-out rows are ignored.
- The add-in scans the visible values in the selected table rows and picks the IFC GUIDs it finds there.

#### Connected PivotTables

PivotTable selections are supported when the PivotTable is connected to an Excel Table or cell range in the same workbook.

Select a row label or a value cell in the PivotTable to send the matching IFC elements to the viewer.

![Selecting a pivot table category highlights matching elements in the IFC Viewer](/_media/selecting-a-pivot-table-category-highlights-matching-elements-in-the-excel-ifc-viewer.png)

- The add-in resolves the selected PivotTable entry back to the underlying source rows and collects their IFC GUID values.
- This works best when the PivotTable source still contains a `GUID` or `GlobalId` column with valid IFC GUID values.
- PivotTable sync is intended for PivotTables based on an Excel Table or cell range in the same workbook.

### Viewer to Excel

Use the viewer to drive Excel when you want to inspect which row or record belongs to a selected model element.

Select an element in the 3D viewer.

- Excel highlights matching row values in the active worksheet.
- This works best when the IFC ID column is named `GUID` or `GlobalId`.

## Prepare the workbook

Workbook preparation has a direct effect on how reliable the linking feels in day-to-day use. A clear and consistent table structure reduces sync issues and makes the workbook easier to share with other users.

Use these rules for the most reliable result:

1. Keep one clear column with valid IFC GUID values.
2. Do not change the GUID values with formatting or formulas.
3. Keep the geometry data (`IFC Chunks`) from the Power Query output.
4. Keep the source data in an Excel table on any worksheet where you want standard row-based selection sync.
5. If you use filters, remember that only visible table rows take part in Excel to viewer sync.
6. If you build a PivotTable, keep it connected to an Excel Table or cell range in the same workbook that still contains the IFC GUID source column.

## Export data from the viewer to Excel

The viewer can export data back into Excel as new sheets or tables. This is useful when you want to continue working with viewer output by using standard Excel features such as formulas, pivots, formatting, and charts.

Use the export action in the viewer to send IFC property data into Excel:

![Export IFC properties from the Excel IFC Viewer](/_media/right-click-select-and-click-save-to-excel-for-exporting-ifc-properties-with-excel-ifc-viewer.png)

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
- Check that you are selecting rows inside the worksheet table or inside a supported PivotTable.
- Check that the worksheet table you want to sync from is the first table on that worksheet.
- If the issue is only with a PivotTable, check that it is based on an Excel Table or cell range in the same workbook and that the source data still contains IFC GUID values.
- If viewer to Excel highlighting is inconsistent, rename the ID column to `GUID` or `GlobalId`.
