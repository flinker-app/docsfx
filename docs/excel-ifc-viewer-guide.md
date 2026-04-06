---
title: Excel IFC Viewer guide
description: Guide for loading IFC geometry into Excel, syncing selections with the IFC Viewer, and preparing Excel and IFC data so linking works reliably.
keywords: IFC Excel add-in, Excel IFC Viewer guide, GlobalId sync, ifcChunk, BIM in Excel
canonical_url: https://docs.flinker.app/docs/excel-ifc-viewer-guide.html
---

# Excel IFC Viewer guide

This guide shows the clearest way to load IFC geometry into Excel and keep the worksheet linked with the 3D viewer.

## How IFC loading works

### Recommended workflow

Use the existing **Power Query from the Power BI sample report**.

Get it here: [Copy the IFC loading query from the sample report](http://localhost:8080/docs/ifc-viewer-usage-for-power-bi.html#1-copy-the-ifc-loading-query-from-the-sample-report)

This is the recommended approach because it:

- keeps the model geometry (`IFC Chunks`) and element IDs in a consistent structure
- makes refresh easier when the IFC file changes
- makes the workbook easier to reuse and share

### Other loading option

Loading an IFC from a local file path also works.

Use local loading if you only need a quick local test. Use the Power Query workflow if you want a repeatable setup inside the workbook.

### Before you open the add-in

Make sure your workbook contains:

- geometry data in `IFC Chunks`
- IFC element IDs with valid IFC GUID values
- an Excel table for the model data, if possible

Then open the workbook in Excel and start the **IFC Viewer** add-in from the ribbon.

### What happens when the add-in opens

- The add-in reads IFC geometry from the workbook.
- If `IFC Chunks` are present, the model loads automatically.
- If the source IFC changes, refresh the Power Query and reopen or refresh the add-in.

## How selection sync works

### Excel to viewer

- Select rows or cells in Excel that contain valid IFC GUID values.
- The values must be visible cells. Filtered-out rows are ignored.
- The column name does **not** need to be `GUID` or `GlobalId`.

This is the important rule: Excel to viewer sync works from the selected visible cell values, not from a required column name.

### Viewer to Excel

- Select an element in the 3D viewer.
- Excel highlights matching row values in the active worksheet.
- This works best when the IFC ID column is named `GUID` or `GlobalId`.

## How to prepare the Excel sheet

Use these rules for the most reliable result:

1. Keep one clear column with valid IFC GUID values.
2. Naming that column `GUID` or `GlobalId` is recommended, but not required.
3. Do not change the GUID values with formatting or formulas.
4. Keep the geometry data (`IFC Chunks`) from the Power Query output.
5. If you use filters, remember that only visible rows take part in Excel to viewer sync.

## Export from viewer to Excel

The viewer can export data back into Excel.

When you run an export:

1. The add-in creates new worksheet(s) in the workbook.
2. The exported data is inserted as Excel sheets/tables.
3. You can continue working with formulas, pivots, and reports in Excel.

## What is not supported here

This workflow does not write edited Excel values back into the original `.ifc` file.

- Loading IFC data into Excel is supported.
- Exporting viewer data into Excel is supported.
- Writing edited worksheet values back into the IFC file is not supported in this flow.

## Troubleshooting

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
