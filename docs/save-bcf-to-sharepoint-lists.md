---
title: Connect BCF issues to Microsoft Lists
description: Sync BCF issue metadata with Microsoft Lists in SharePoint and Teams while preserving full BCF data, including viewpoints, in your BCF file.
keywords: BCF Microsoft Lists, SharePoint BCF integration, Teams BCF issues, BIM issue tracking, IFC BCF workflow, BCF sync, Microsoft Lists BIM
canonical_url: https://docs.flinker.app/docs/save-bcf-to-sharepoint-lists.html
---

# Connect BCF issues to Microsoft Lists

Our IFC Viewer for SharePoint web part can read and write BCF topics from both a **BCF file** and a **Microsoft Lists list**. This lets you manage issue metadata in Microsoft Lists while still keeping the full BCF detail (like viewpoints) in a BCF file.

## What it does

* **On open (load behavior)**

  * If a **BCF URL** is set in the web part settings, topics are loaded from the BCF file.
  * If a **Microsoft Lists URL** is set, topics are **also** loaded from Microsoft Lists.
  * If both are set, the web part loads topics from **both** sources.

* **On save (write behavior)**

  * When you click **Save to SharePoint/Teams** in the IFC Viewer for SharePoint web part, topics are saved **to Microsoft Lists** (for metadata) **and** **to the BCF file** (for full BCF content).

* **What’s stored where**

  * **Microsoft Lists**: issue metadata only (see mapped fields below).
    *Not stored in Microsoft Lists:* Viewpoints, snapshots, camera/clipping, component selections, and similar visual BCF properties.
  * **BCF file**: the **full** BCF topic including viewpoints, clipping, and other visual/geometry details.

## Connect Microsoft Lists to BCF issues

### 1. Create a Microsoft Lists list

Include these **required columns** and types:

* **Guid** *(Text)*
* **Title** *(Text)*

**Optional columns** (add as needed; if present, they’ll be mapped and updated):

* **Description** *(Multiline Text)*
* **Status** *(Choice)*
* **AssignedTo** *(Choice)*
* **TopicType** *(Choice)*
* **Priority** *(Choice)*
* **Stage** *(Choice)*
* **DueDate** *(Date)*
* **CreationDate** *(Date)*
* **CreationAuthor** *(Text)*
* **ModifiedDate** *(Date)*
* **ModifiedAuthor** *(Text)*

### 2. Insert the URLs in the web part settings

* Paste the **Microsoft Lists URL** (list names with special characters are not supported) into the IFC Viewer for SharePoint web part settings.
* Paste the **BCF URL** so all topic data is also saved as a BCF file. You can use an existing BCF or a sample BCF.

### 3. Save to Microsoft Lists and BCF

Click **Save to SharePoint/Teams** in the IFC Viewer for SharePoint web part.
The web part writes topic metadata to **Microsoft Lists** and writes the full topic (including viewpoints/clipping) to the **BCF file**.

## FAQ

### If metadata changes directly in Microsoft Lists, when does the viewer show it?

Changes made directly in Microsoft Lists appear in the viewer after you reload the web part or page. Automatic polling is not supported; refresh is required to see updates.

### If I edit directly in Microsoft Lists, does this update the BCF automatically?

Editing in Microsoft Lists does **not** update the BCF file automatically. The BCF file is updated only when you use the save action in the viewer.

### Is syncing bidirectional?

Using the viewer and Microsoft Lists behaves like two-way sync.
- Edit in the viewer -> Microsoft Lists updates.
- Edit in Microsoft Lists -> the viewer shows it when it refreshes or opens.

### Can customers add custom fields/columns beyond the listed ones and have them mapped automatically?

Only the listed fields are mapped automatically. Custom fields are not mapped unless specifically supported in future updates.

### What happens if saving fails?

If saving fails, the viewer displays an error message. Automatic retry is not supported, but errors are logged for troubleshooting.

### Are there performance or size constraints?

The viewer can save up to 5,000 items to Microsoft Lists. For best performance, we recommend keeping your list well below this limit. Larger lists may result in slower loading, filtering, or saving.
