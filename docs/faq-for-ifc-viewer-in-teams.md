---
title: FAQs for IFC Viewer in Microsoft Teams
description: Answers to setup, files, permissions, and data protection questions for the IFC Viewer app in Microsoft Teams.
summary: Frequently asked questions on installing the IFC Viewer tab, linking IFC files, permissions, privacy, telemetry, and client-side parsing in Teams.
slug: faq-for-ifc-viewer-in-teams
canonical_url: https://docs.flinker.app/docs/faq-for-ifc-viewer-in-teams.html
lang: en
robots: index,follow
keywords:
	- IFC Viewer
	- Microsoft Teams
	- tab app
	- setup
	- SharePoint
	- OneDrive
	- file links
	- permissions
	- data protection
	- telemetry
	- client-side parsing
	- BCF
tags:
	- teams
	- ifc
	- viewer
	- faq
	- setup
	- permissions
	- privacy
og:title: FAQs for IFC Viewer in Microsoft Teams
og:description: Setup, files, permissions, and privacy details for the IFC Viewer in Teams.
twitter:card: summary
audience: users, admins
product: microsoft-teams
feature: ifc-viewer
ms.date: 2025-12-05
---

# FAQs - IFC Viewer - Teams


## Setup and Installation

### How can I open an IFC file inside Microsoft Teams?

Microsoft Teams does not support IFC files by default, so you need to install Flinker’s IFC Viewer app from the Microsoft Teams App Store. Here's an easy guide to set it up: [IFC Viewer in Microsoft Teams - Quick Guide](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html).

### Is it necessary to choose which chat or team I should set up the IFC Viewer?

Yes, you must choose a chat or team because the IFC Viewer works inside Microsoft Teams conversations or project channels. It must be linked to at least one chat/team to function.

### Can I link it to multiple chats and teams?

Yes! You can add the IFC Viewer tab to multiple teams and chats.

## Files and Links

### Where do I get the IFC file link?

You can get the file link from SharePoint or Teams by:

- Going to SharePoint/Teams Files Tab.
- Right-clicking the IFC file and selecting ‘Copy link.’
- Pasting it into the IFC Viewer setup screen.

### What if my file is stored on OneDrive or an external drive?

- If it's on OneDrive, you need to copy the SharePoint link from OneDrive.
- If it's on an external drive, you need to upload it to SharePoint or Teams first.

### Will everyone in my selected chats or teams also see every file I uploaded?

Only files that are linked to the IFC viewer Tab are also visible to other team members. If the user opens a file using "Open IFC" button, the file will visible to you only and it is temporary. This temporary file will not automatically show whenever the tab is reopened. Also, if you want to restrict certain people from viewing the file, you must adjust file permissions in SharePoint or use the Protect App.

### Can I remove or change the files that are automatically opening whenenever the tab is opened?

Yes! You can remove or replace files in IFC Viewer at any time.

### Can I set some files to open automatically but not others?

No, all files added in the Teams tab settings dialog are loaded automatically. You can, however, remove files later if you don’t want them to open by default.

### What happens if I forget to upload files during setup?

No worries! You can upload additional IFC files later in the Teams tab settings dialog. No need to redo the setup process.

## Permissions and Security

### Which permissions need to be granted with the setup?

You need to grant read permissions for the IFC Viewer to access your SharePoint and Teams IFC files. If you can't grant these permissions, you can still load local files from your desktop. In this case, only you will see the IFC models. Other team members can also load local IFC models without granting permissions. To set up a global or master model in a Teams tab, permissions are required to load SharePoint IFC files from your Microsoft 365 tenant.

### Can IFC Viewer edit or delete my files, or is it just viewing them?

It only reads your files to display or view the model. It does not edit or delete files.

### Why do you need to grant permissions?

The IFC Viewer needs permission to read IFC and BCF files stored in your company's SharePoint. This allows the viewer to load your data directly. No external data processing or uploads occur; everything stays within your Microsoft 365 tenant.

### Does the IFC Viewer store my files somewhere?

No. Your data stays within your Microsoft 365 tenant and SharePoint, serving as the app's backend. There is no external data processing or uploads, ensuring maximum data security for your company.

### Is my data secure when using the IFC Viewer?

Yes, your data remains secure within your Microsoft 365 tenant. The IFC Viewer does not upload or process data externally. All data stays within your company's SharePoint and Microsoft 365 environment, ensuring maximum data security and compliance with your organization's policies.

## Tab Management and Visibility

### Can I control who can modify the auto-loading files?

In Microsoft Teams, not everyone has access to modify tab settings. Typically, only team owners - and sometimes IT administrators - have the permissions needed to change or configure a tab’s settings. Regular team members usually have limited control, which helps ensure that key configurations remain consistent across the team.

### Why do I have to keep uploading my files whenever the tab is opened?

* If you set the file links in the Teams tab settings dialog, they will always load automatically when the IFC Viewer tab is opened. You can remove or replace auto-loading files later in the Teams tab settings dialog.
* If you didn’t set auto-loading, you must manually open files each time.

### Does everyone see whenever I open a file or which part I am viewing at?

No. Opening an IFC file is private - other users in Teams do not get a notification when you open a file inside IFC Viewer. Everyone sees their own individual view. The model does not sync in real-time unless using an external screen-sharing tool.

## Data and Processing

### Does the Teams IFC Viewer send any telemetry or IFC data to Flinker?

No. The Teams IFC Viewer does not send any IFC or BCF content to Flinker. Only minimal technical metadata is processed, as described in the Architecture & Data Protection documentation.

### Is IFC parsing performed entirely in the browser?

Yes. The Teams IFC Viewer parses and processes IFC files entirely client-side in the browser. No IFC model data is sent to Flinker services. For more details, see the Architecture & Data Protection documentation.
