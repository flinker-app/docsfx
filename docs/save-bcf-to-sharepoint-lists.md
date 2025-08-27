---
title: Connect BCF to Microsoft List
description: Sync BCF issues with Microsoft Lists in SharePoint/Teams while preserving full BCF data in your BCF file.
keywords: BCF, Microsoft List, Microsoft Lists, SharePoint, Teams, BIM, IFC, issue tracking, integration, Flinker
canonical_url: https://docs.flinker.app/docs/save-bcf-to-sharepoint-lists.html
---

# Connect BCF to Microsoft List

Our SharePoint IFC Viewer webpart can read and write BCF topics from both a **BCF file** and a **Microsoft SharePoint List**. This lets you manage issue metadata in Microsoft Lists while still keeping the full BCF detail (like viewpoints) in a BCF file.

## What it does

* **On open (load behavior)**

  * If a **BCF URL** is set in the web part settings, topics are loaded from the BCF file.
  * If a **Microsoft List URL** is set, topics are **also** loaded from the SharePoint List.
  * If both are set, the web part loads topics from **both** sources.

* **On save (write behavior)**

  * When you click **Save to SharePoint/Teams** in the SharePoint IFC Viewer webpart, topics are saved **to the Microsoft List** (for metadata) **and** **to the BCF file** (for full BCF content).

* **What’s stored where**

  * **Microsoft List**: issue metadata only (see mapped fields below).
    *Not stored in the List:* Viewpoints, snapshots, camera/clipping, component selections, and similar visual BCF properties.
  * **BCF file**: the **full** BCF topic including viewpoints, clipping, and other visual/geometry details.

## How to connect the Microsoft List to your BCF issues

### 1. Create your Microsoft List

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

* Paste the **Microsoft List URL** (List names with special characters are not supported) into the SharePoint IFC Viewer web part settings.
* Paste the **BCF URL** so all topic data is also saved as a BCF file. You can use an existing BCF or a sample BCF.

### 3. Save to Microsoft List (and BCF)

Click **Save to SharePoint/Teams** in the SharePoint IFC Viewer webpart.
The web part writes topic metadata to the **Microsoft List** and writes the full topic (including viewpoints/clipping) to the **BCF file**.

## FAQ

### If metadata is changed directly in Microsoft Lists, when/how does the Viewer show it (immediately on reload, polling, or only after Save action)?

Changes made directly in Microsoft Lists appear in the Viewer after you reload the web part or page. Automatic polling is not supported; refresh is required to see updates.

### If I edit directly in Microsoft Lists, does this update the BCF automatically, or only after Save in the Viewer?

Editing in Microsoft Lists does **not** update the BCF file automatically. The BCF file is updated only when you use the Save action in the Viewer.

### Is syncing bidirectional (List ↔ Viewer ↔ BCF) or effectively one-way (Viewer → List/BCF)?

Using the Viewer and the MS List, it will behave like two-way sync. 
- Edit in the Viewer → the List updates.
- Edit in the List → the Viewer shows it when it refreshes/opens.

### Can customers add custom fields/columns beyond the listed ones and have them mapped automatically?

Only the listed fields are mapped automatically. Custom fields are not mapped unless specifically supported in future updates.

### What happens if saving fails - does the Viewer show an error, retry, or log?

If saving fails, the Viewer displays an error message. Automatic retry is not supported, but errors are logged for troubleshooting.

### Are there performance or size constraints (e.g. maximum number of issues per List)?

The Viewer can save up to 5,000 items to a Microsoft List. For best performance, we recommend keeping your list well below this limit. Larger lists may result in slower loading, filtering, or saving.
