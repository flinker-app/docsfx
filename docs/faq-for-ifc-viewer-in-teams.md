---
title: FAQs for IFC Viewer in Microsoft Teams
description: Answers to setup, files, permissions, and data protection questions for the IFC Viewer app in Microsoft Teams.
summary: Frequently asked questions on installing the IFC Viewer tab, linking IFC and BCF files, default views, Teams deep links, permissions, privacy, telemetry, and client-side parsing in Teams.
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
  - deep links
  - default view
  - topic GUID
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
og:
  title: FAQs for IFC Viewer in Microsoft Teams
  description: Setup, files, permissions, and privacy details for the IFC Viewer in Teams.
twitter:
  card: summary
audience: users, admins
product: microsoft-teams
feature: ifc-viewer
ms.date: 2026-03-26
---

# FAQs - IFC Viewer - Teams


## Setup and Installation

### How can I open an IFC file inside Microsoft Teams?

Microsoft Teams does not support IFC files by default, so you need to install Flinker's IFC Viewer app from the Microsoft Teams App Store. Here's an easy guide to set it up: [IFC Viewer in Microsoft Teams - Quick Guide](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html).

### Can the IFC Viewer also be added as a tab in Microsoft Teams?

Absolutely! We have developed the Microsoft Teams app **"Open IFC Viewer"** so you can add the IFC Viewer as a tab in Microsoft Teams with just one click. However, adding apps in Microsoft Teams must be allowed by your organization. If your company does not yet allow adding apps from the Microsoft Teams App Store, please contact your IT administrators.

### How can I embed the IFC Viewer in Microsoft Teams if my organization does not allow adding apps from the App Store?

You can insert the IFC Viewer as a URL in Teams. Add a new tab in Microsoft Teams and enter the URL `http://viewer.flinker.app`. Done!

### What advantages do I have when I use the official Microsoft Teams app instead of embedding the IFC Viewer as a URL in a Microsoft Teams tab?

When you embed the IFC Viewer as a URL in a Microsoft Teams tab, you can only load local files, and only you can view these files. However, with the official Open IFC Viewer app for Microsoft Teams, you can load files directly from SharePoint and Teams, and all users in the group can access the models.

A major advantage of the Open IFC Viewer app is that you can store any IFC files, such as an overall coordination model, which is then permanently embedded as a tab in Microsoft Teams. All project participants in Microsoft Teams or on the connected SharePoint page see all changes in the IFC model automatically and in real time with the Open IFC Viewer app. This way, everyone is always up to date, and costly mistakes and confusion are avoided.

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

### Can I open a local IFC file from my desktop, and how does that differ from loading a file from SharePoint?

Yes — the IFC Viewer can open an IFC file directly from your local desktop. The file is loaded and processed entirely in your browser (client-side); nothing is uploaded to SharePoint or any external server. Only you can see that model. Other members of the channel or chat cannot see it, and the file is not retained when the tab is closed or reopened.

The shared use case works differently: you store the IFC file in SharePoint or Teams and configure its URL — or a folder URL — in the tab settings. Every channel member with the appropriate SharePoint permissions then sees the same model. Any file updates saved to SharePoint are reflected in the viewer automatically. When a folder is configured as the source, the viewer loads all IFC files in that folder and picks up changes to any of those files without manual reconfiguration. This is the standard setup for a shared coordination model in a Teams project channel or a SharePoint project site (SharePoint CDE).

- Set up a shared model in a Teams tab: [Step 3 – Set up the tab](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html#step-3-set-up-the-tab)
- Set up a shared model in SharePoint: [Load multiple IFC/BCF files – Step 2](https://docs.flinker.app/docs/load-multiple-ifc-bcf-files-in-sharepoint-ifc-viewer.html#step-2-paste-ifc-file-urls)

### Will everyone in my selected chats or teams also see every file I uploaded?

Only files that are linked to the IFC viewer Tab are also visible to other team members. If the user opens a file using "Open IFC" button, the file will visible to you only and it is temporary. This temporary file will not automatically show whenever the tab is reopened. Also, if you want to restrict certain people from viewing the file, you must adjust file permissions in SharePoint or use the Protect App.

### Can I remove or change the files that are automatically opening whenever the tab is opened?

Yes! You can remove or replace files in IFC Viewer at any time.

### Can I set some files to open automatically but not others?

No, all files added in the Teams tab settings dialog are loaded automatically. You can, however, remove files later if you don’t want them to open by default.

### What happens if I forget to upload files during setup?

No worries! You can upload additional IFC files later in the Teams tab settings dialog. No need to redo the setup process.

### Can I view multiple IFC models at the same time?

Yes. You can load multiple IFC models in the Teams IFC Viewer by adding multiple IFC file links in the tab setup, or by adding a folder link that contains multiple IFC and BCF files.

- Setup guide (add multiple files in the tab): [Click here](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html#step-3-set-up-the-tab).

### How do I load only specific IFC files, not all files in a folder?

The IFC Viewer loads all IFC files found in the folder path you configure in the tab settings.
To load only specific files, specify a deeper subfolder path — the folder where exactly
the files you want are located, rather than a parent folder.

### Can I have multiple IFC Viewer tabs with different folders configured?

Yes. You can add as many IFC Viewer tabs as you like within a Microsoft Teams channel,
each configured with a different folder path. This allows different teams or projects
to have their own dedicated viewer tab showing only the relevant models.

### Can I create a persistent federated model view for a project with many discipline models?

Yes. A Teams IFC Viewer tab configured with all relevant models acts as the persistent federated view — no re-selection is needed when the tab is reopened.

For projects with many discipline models (for example, 30–35 separate IFC files), the folder link approach is recommended:

1. Store all discipline IFC files in one SharePoint folder.
2. Add a new IFC Viewer tab to the Teams channel.
3. In the tab settings, paste the **direct folder path** of that SharePoint folder (not a sharing link).
4. Save the tab.

Every team member who opens the tab sees all models loaded automatically. Any new IFC file added to the folder is picked up the next time the tab is opened, without reconfiguring the tab.

To share the federated view with colleagues, right-click the tab and select **Copy link to tab**. Anyone with the required SharePoint permissions for the folder will see the same model set.

> [!NOTE]
> There is no separate "Save as federated view" action. The tab configuration itself is the persistent, shareable federated view. Colleagues who open locally loaded files via the **Open IFC** button see those files only for themselves; those files are not part of the shared tab configuration.

- How to load a folder: [Setting up the IFC Viewer in Teams – Step 5](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html#step-5-copy-links-of-ifcbcf-files-or-folders)

### Can I set a specific BCF issue or clash to open by default in a Teams tab?

Yes. Open the Teams tab settings and paste the topic GUID into **Set your default view (optional)**. After you save the tab, the viewer opens that BCF topic automatically each time the tab is opened.

- Setup guide: [Set up IFC Viewer in Teams](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html)

### Can I share a link to a specific BCF topic in Teams?

Yes. Select the BCF topic in the Teams IFC Viewer and click the **Share** button in the upper-right corner. The generated Teams deep link opens the same tab with that topic selected, so the saved BCF issue context is shown again for the recipient.

- BCF guide: [Load, share, and save BCF files in Microsoft Teams](https://docs.flinker.app/docs/update-bcf-files-in-microsoft-teams.html)

## Permissions and Security

### Which permissions need to be granted with the setup?

You need to grant read permissions so the IFC Viewer can access IFC and BCF files stored in SharePoint or Teams. If you cannot grant these permissions, you can still load local files from your desktop, but only you will see them. If you want to save BCF files back to SharePoint or sync BCF topics to Microsoft Lists, the app will also request write permissions at that point.

### Can IFC Viewer edit or delete my files, or is it just viewing them?

By default it reads your files to display the model and BCF data. It only writes when you explicitly use save features such as **Save to Teams/SharePoint** for BCF files or Microsoft Lists synchronization, and those actions require additional write permissions. It does not delete files automatically.

### Why do you need to grant permissions?

The IFC Viewer needs permission to read IFC and BCF files stored in your company's SharePoint and Teams so it can load them directly into the tab. If you use save features for BCF files or Microsoft Lists integration, the app also needs write permissions for those actions.

For authentication purposes, the user's **email address and Microsoft tenant ID** are transmitted to Flinker. No IFC/BCF file content or other personal data is shared externally. All file processing happens client-side within your Microsoft 365 tenant.

### Does the IFC Viewer store my files somewhere?

No. Your data stays within your Microsoft 365 tenant and SharePoint, serving as the app's backend. There is no external data processing or uploads, ensuring maximum data security for your company.

### Is my data secure when using the IFC Viewer?

Yes. Your IFC and BCF files are never uploaded or processed outside your Microsoft 365 tenant — all file processing happens client-side in the browser within your organization's SharePoint and Teams environment.

For authentication purposes, the user's **email address and Microsoft tenant ID** are transmitted to Flinker. No other personal data or file content is shared. This is consistent with the [Microsoft App Compliance certification](https://learn.microsoft.com/en-us/microsoft-365-app-certification/teams/flinker-gmbh-open-ifc-viewer) for Open IFC Viewer.

### Can you set which users can see the IFC model in Teams or SharePoint?

Yes, you can determine which users or user groups can see the 3D or IFC model in Teams or SharePoint. To do this, you can use Microsoft security groups, SharePoint groups, or the Protect app. For example, you can restrict access to the IFC model for certain users or groups who are not working on the model or do not need data from it. Additionally, you can set which user groups are allowed to edit the model.

### What specific Microsoft Graph permissions does the IFC Viewer request, and what is their scope?

When you click "Connect", the IFC Viewer requests the following permissions via Microsoft Graph:

| Permission | Type | Purpose |
|---|---|---|
| `Files.Read.All` | Delegated | Read IFC/BCF files from SharePoint and Teams on behalf of the signed-in user |
| `User.Read` | Delegated | Sign in and read the user's basic profile |

Both are **delegated permissions** — the app only acts on behalf of the signed-in user, never autonomously or in the background.

For authentication purposes, the user's **email address and Microsoft tenant ID** are transmitted to Flinker. No IFC/BCF file content or other personal data is shared.

If your organization requires admin approval, your IT admin can grant consent directly using this link:
[Grant Admin Consent](https://login.microsoftonline.com/organizations/v2.0/adminconsent?client_id=c8f57ea5-d1b6-41a7-a2c2-d10e99d97a97&redirect_uri=https%3A%2F%2Fteamsifcviewer.flinker.app%2Fauth-end.html&scope=https://graph.microsoft.com/Files.Read.All%20https://graph.microsoft.com/offline_access%20openid%20profile&state=12345abc)

You can also review the full Microsoft App Compliance certification:
[Microsoft App Compliance – Open IFC Viewer](https://learn.microsoft.com/en-us/microsoft-365-app-certification/teams/flinker-gmbh-open-ifc-viewer)

### Are `Files.Read.All` and `User.Read` the only Microsoft Graph permissions requested for the initial setup?

Yes. `Files.Read.All` is used to read IFC/BCF files from SharePoint/Teams on behalf of the signed-in user, and `User.Read` is used for sign-in and basic profile access. We do not require any additional Microsoft Graph permissions for this setup. If additional Graph permissions were ever needed in the future, those would indeed require separate consent/approval.

### Which write permissions are requested, and when?

Write permissions are only requested when you explicitly use save features — they are not part of the initial setup. The following write permissions may be requested depending on the features you use:

| Permission | Type | Triggered by |
|---|---|---|
| `Files.ReadWrite.All` | Delegated | Saving BCF files back to SharePoint or Teams |
| `Sites.ReadWrite.All` | Delegated | Microsoft Lists synchronization for BCF topics |

The app never writes to your files without an explicit save action initiated by the user.

## Tab Management and Visibility

### Can I control who can modify the auto-loading files?

In Microsoft Teams, not everyone has access to modify tab settings. Typically, only team owners - and sometimes IT administrators - have the permissions needed to change or configure a tab’s settings. Regular team members usually have limited control, which helps ensure that key configurations remain consistent across the team.

### Why do I have to keep uploading my files whenever the tab is opened?

* If you set the file links in the Teams tab settings dialog, they will always load automatically when the IFC Viewer tab is opened. You can remove or replace auto-loading files later in the Teams tab settings dialog.
* If you didn’t set auto-loading, you must manually open files each time.### Why does the IFC Viewer reload every time I switch tabs?

This is standard browser behaviour in Microsoft Teams. Two workarounds:

1. **Pop out the tab** — click the pop-out icon to open the viewer in a separate window.
   The model stays loaded as long as the window is open.
2. **Save a BCF view** — save your current view as a BCF file and store it in SharePoint.
   Configure it as the default view in the tab settings. The viewer will reload that
   view automatically each time the tab is opened.

- Setup guide: [Configure Tab Setting – Step 6](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html#step-6-configure-tab-setting)

### Does everyone see whenever I open a file or which part I am viewing at?

No. Opening an IFC file is private - other users in Teams do not get a notification when you open a file inside IFC Viewer. Everyone sees their own individual view. The model does not sync in real-time unless using an external screen-sharing tool.

## Data and Processing

### Does the Teams IFC Viewer send any telemetry or IFC data to Flinker?

No. The Teams IFC Viewer does not send any IFC or BCF content to Flinker. Only minimal technical metadata is processed, as described in the Architecture & Data Protection documentation.

### Is IFC parsing performed entirely in the browser?

Yes. The Teams IFC Viewer parses and processes IFC files entirely client-side in the browser. No IFC model data is sent to Flinker services. For more details, see the Architecture & Data Protection documentation.

## Filters

### Are there built-in standard filter presets in the viewer?

No. The IFC Viewer does not ship with pre-defined filter presets. Filters are created by the user based on the properties available in the loaded IFC model.

The recommended approach is to create your own standard filters once and save them as a **BCF file**. Because filter state is stored inside the BCF file as part of the open BCF standard, you can load that file in any Teams channel or project to restore the full filter configuration instantly — without manual recreation. Store the BCF file in a shared SharePoint location to make it available across all projects that use the same filter setup.

- See [IFC Filters – Reusing filters across projects](ifc-filters.md#reusing-filters-across-projects) for step-by-step instructions.
