---
uid: ifc-bcf-dashboard
title: IFC & BCF Issue Tracker Dashboard (Power BI)
description: A Power BI report template that combines IFC model viewing with BCF issue tracking. Load your .bcfzip file to review topics, comments, and linked model elements in a single interactive dashboard. Supports BCF 2.0, 2.1, and 3.0.
keywords: BCF Power BI, IFC BCF dashboard, BIM issue tracker, bcfzip, Power Query BCF, clash detection, BIM Collaboration Format, issue tracking, BCF 3.0, BCF 2.1
canonical_url: https://docs.flinker.app/docs/IFC_BCF.html
---

# IFC & BCF Issue Tracker Dashboard

<iframe title="IFC-BCF" style="width: 100%; aspect-ratio: 16 / 9;" src="https://app.powerbi.com/view?r=eyJrIjoiZGFhYzdiZjAtNGQ0Mi00NjQ3LWFjY2ItZWQ1ZTg2MjNhNjg3IiwidCI6IjQ0YjY0MGYzLTQ5YjAtNDMwNC05Yzk4LWM2MWQwYmMwZGMwMiJ9" frameborder="0" allowFullScreen="true"></iframe>

## Overview

The **IFC & BCF Issue Tracker Dashboard** lets you load a `.bcfzip` file alongside one or more IFC models into a single Power BI report. It shows all BCF topics in a filterable table, breaks down their distribution by type and status, and displays the full comment thread for any selected topic. The IFC Viewer on the right shows the linked 3D model.

The report reads `.bcfzip` files entirely within Power BI using Power Query. No external tools, plugins, or scripts are needed.

## What You Can Do

- Browse all BCF topics with their type, status, priority, author, and due date
- Filter by title, status, priority, type, creator, assigned user, or how old a topic is
- See at a glance how many topics are open, closed, or overdue using the three KPI cards
- View a stacked bar chart showing topic counts per type, color-coded by status
- Click any topic row to see the full comment thread with authors and timestamps
- View the linked IFC model directly next to the issue list
- Track overdue topics automatically — no manual tagging needed

## How to Load Your Files

### Parameters

The report uses four text parameters. Open them in Power BI under **Home → Transform Data → Home → Manage Parameters**.

| Parameter | What to enter |
| :--- | :--- |
| `BCFZIP_Path` | Full path to your `.bcfzip` or `.bcf` file |
| `IFC_FilePath1` | Full path to the primary IFC file |
| `IFC_FilePath2` | Full path to a second IFC file (optional) |
| `IFC_FilePath3` | Full path to a third IFC file (optional) |

Both local paths and SharePoint URLs work:

```
C:\BIM\Coordination_Issues.bcfzip
```
```
https://company.sharepoint.com/sites/BIM/Documents/Issues.bcfzip
```

Click **Close & Apply** after entering the paths to load the data.

> **Note:** If your BCF file references only one IFC file, delete the unused `IFC_FilePath2` and `IFC_FilePath3` parameters (right-click → Delete in Power Query Editor) to avoid refresh errors.

### Where BCF Files Come From

BCF files are exported from BIM coordination tools such as BIMcollab, Solibri, Navisworks, Tekla BIMsight, and Revit. The standard export is a `.bcfzip` archive (or `.bcf` in newer tools). Load it as-is with no preparation.

## Dashboard Layout

### KPI Cards

Three cards at the top summarize topic health at a glance:

| Card | Color | What it counts |
| :--- | :--- | :--- |
| **Open / Active Topics** | Amber | Topics that are not resolved and are not past their due date |
| **Closed / Resolved Topics** | Green | Topics marked as completed (Closed, Resolved, Done, etc.) |
| **Overdue Topics** | Red | Open topics whose due date has passed |

The status logic is universal — it works regardless of which BIM tool created the BCF file. Any status that does not indicate completion (such as Open, Active, Review, or In Progress) is treated as open. Any status that indicates completion (such as Closed, Resolved, Done, Fixed, or Void) is counted as closed.

### Filters

The filter panel lets you narrow topics by:

- Topic Title
- Topic Priority
- Topic Status
- Topic Type
- Topics Age Bucket
- Creation Author
- Assigned To

All filters interact with each other and update every visual on the page at once.

### Type Distribution Chart

A stacked horizontal bar chart shows how many topics exist per type (for example Clash, Coordination, Issue, or Request). Each bar is split by status color — amber for open, green for closed, red for overdue. The chart adapts automatically to whatever types are present in your BCF file; no manual configuration is needed.

### Topic Comments Panel

Clicking a row in the topic table shows a detail panel in the lower right. It displays:

- The topic title, status badge (with color), type, author, and creation date
- The assigned user and due date (highlighted in red if overdue)
- The topic description
- The full comment thread sorted by date, with each comment author and timestamp

When no topic is selected, the panel shows: *"Please select a Topic to show its comments"*.

### IFC Viewer

The 3D model viewer in the upper right loads the IFC file linked to the BCF. If your BCF references multiple IFC files, each one is loaded through its own parameter. The viewer is interactive — you can orbit, zoom, and inspect model elements.

## BCF Version Compatibility

This report supports all three major BCF versions with no configuration required:

| Version | File extension | Source tools |
| :--- | :--- | :--- |
| **BCF 2.0** | `.bcfzip` | Navisworks, Tekla BIMsight, older Solibri |
| **BCF 2.1** | `.bcfzip` or `.bcf` | BIMcollab, Solibri, Revit, ArchiCAD |
| **BCF 3.0** | `.bcf` | BIMcollab Nexus, newer Solibri, Trimble Connect |

The parser detects the version automatically and adapts its reading logic. You do not need to select or configure a version.

## Troubleshooting

| Issue | Solution |
| :--- | :--- |
| No topics appear after refresh | Verify that `BCFZIP_Path` points to a valid `.bcfzip` or `.bcf` file and that Power BI can access the path |
| Comment panel shows nothing when clicking a row | Install the **HTML Content** visual (by Daniel Marsh-Patrick) from the Power BI AppSource marketplace |
| Open / Active Topics shows (Blank) | Expected — your BCF file has no topics that are open and within their due date |
| Closed / Resolved Topics shows (Blank) | Expected — no topics in the file have a closed status |
| Overdue Topics shows (Blank) | Expected — no open topics have a past due date, or no topics have a due date at all |
| Components table is empty | Not all topics include viewpoint component data; this is normal and depends on the exporting tool |
| IFC model does not load | Check the `IFC_FilePath` values and make sure the file is accessible from Power BI |
| Refresh error mentioning an unused parameter | Delete any `IFC_FilePath` parameters that are not pointing to a file |
| Topics showing unexpected statuses | Status values are defined per-project in each BCF file. The report accepts any status string — no manual mapping is needed |
