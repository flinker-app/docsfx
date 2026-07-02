---
uid: power-bi-filter-multiple-ifc-files
title: Load and filter multiple IFC files in Power BI
description: Filter the IFC Viewer Visual by file name or file path so a report can load only the IFC files that match the active report context, such as project, discipline, phase, building, or file selection.
keywords: IFC, Power BI, project filter, file filter, IFC Viewer Visual, IfcChunk, Filename, Filepath, GlobalId, multiple IFC files
canonical_url: https://docs.flinker.app/docs/ifc-viewer-filter-multiple-ifc-files-power-bi.html
---

# Load and filter multiple IFC files in Power BI

Use this setup when one Power BI report loads several IFC files and the IFC Viewer Visual should show only the files that match the current report filter.

The filter can come from a file slicer, project selection, discipline, building, phase, URL filter, or another report table.

Initial IFC model loading is file based. The visual needs matching rows from the `IFC` table that contain `IfcChunk`. Those rows are filtered by `Filepath` or `Filename`.

![Screenshot of IFC table fields used to filter IFC files in Power BI](/_media/power-bi-ifc-fields-file-filtering.png)

## Filter by file name or file path

Keep a file reference in the report data and connect it to the generated `IFC` table. The file reference can be part of a project table, file table, schedule table, or another table that already controls filtering in the report.

Use the IFC file name or the full file path as the file reference.

| File reference | Use it when |
| --- | --- |
| `Filename` | File names are unique across the report. |
| `Filepath` | Different folders can contain IFC files with the same name. |

When a user selects a project, discipline, phase, building, or file, Power BI filters the matching `Filename` or `Filepath` values. The viewer then receives the matching `IfcChunk` rows and loads the corresponding IFC file or files.

For project-based workflows, connect each project to its IFC file names or file paths. The project selection then filters those file references, and the viewer loads the related IFC models.

## Configure the viewer visual

Bind the visual to the standard IFC query fields:

| Viewer field | Power BI column |
| --- | --- |
| `IFC Chunks` | `IFC[IfcChunk]` |
| `IDs` | `IFC[GlobalId]` or `IFC[GlobalIdCaseSensitive]` |

Keep `Filepath` and `Filename` in the `IFC` table even if you do not place them in the visual. Power BI uses one of these columns to filter the rows that contain the IFC file data.

No special viewer setting is required for this scenario. The important configuration is the file reference that filters the generated `IFC` table.

## Set up file-based filtering

1. Load all required IFC files into the report with the standard Flinker Power Query setup.
2. Confirm that the `IFC` table contains `IfcChunk`, `Filepath`, `Filename`, and `GlobalId`.
3. Add the matching IFC `Filename` or `Filepath` value to the data that controls filtering.
4. Connect that file reference to `IFC[Filename]` or `IFC[Filepath]` through your existing model.
5. Use your existing slicer, URL filter, or report interaction.
6. Test by selecting a project, file, or other filter value and checking that the viewer loads the expected IFC file or files.

## Answers to common questions

### Why does the viewer fail to load the IFC file when the report is already filtered

The report filter is applied before the visual renders. If that filter removes all `IfcChunk` rows from the `IFC` table, the viewer has no file data to load and shows `No IFC files found`.

### Does the viewer require IFC files to be loaded before the report filter is applied

No. The IFC data must already be available in the Power BI dataset after refresh, but the report can open with filters already active. The active filter must filter the `IFC` table by `Filepath` or `Filename` so the matching `IfcChunk` rows remain visible.

### What setup supports initial IFC loading under an active filter

Use the existing Power BI model, and make sure the active report filter reaches the generated `IFC` table through file references. Those references must match `IFC[Filename]` or `IFC[Filepath]`. Do not use `GlobalId` as the file-loading key.
