---
title: IFC Viewer in SharePoint FAQ
description: Fix a SharePoint viewer that stopped working or a Flinker SharePoint IFC Viewer that no longer loads.
summary: Troubleshoot an IFC Viewer in SharePoint that stopped working, configure trusted script sources, install manual updates, and review hosting and data processing.
slug: faq-for-ifc-viewer-in-sharepoint
canonical_url: https://docs.flinker.app/docs/faq-for-ifc-viewer-in-sharepoint.html
lang: en
robots: index,follow
keywords:
  - SharePoint Online
  - SPFx
  - web part
  - Microsoft 365 CDN
  - Azure CDN
  - metadata
  - tenant ID
  - anonymized analytics
  - IFC
  - BCF
  - privacy
  - data protection
  - troubleshooting
  - SharePoint viewer stopped working
  - SharePoint IFC viewer Flinker stopped working
  - SharePoint viewer gray screen
  - trusted script sources
  - Content Security Policy
  - CSP
  - upgrade
  - update
tags:
  - sharepoint
  - spfx
  - ifc
  - viewer
  - faq
  - privacy
  - metadata
  - troubleshooting
  - upgrade
og:
  title: IFC Viewer in SharePoint FAQ
  description: SPFx hosting in M365 CDN, Azure CDN viewer module, and minimal metadata - no IFC/BCF content sent.
twitter:
  card: summary
audience: users, admins, it
product: sharepoint-online
feature: ifc-viewer
ms.date: 2026-07-24
---
# IFC Viewer in SharePoint FAQ

> [!IMPORTANT]
> Microsoft began enforcing Content Security Policy (CSP) in SharePoint Online on March 1, 2026. A SharePoint administrator must add `https://viewer.flinker.app/` to the tenant's trusted script sources. This requirement applies to new and existing IFC Viewer installations.

## Data processing

### Which usage and metadata does the SharePoint IFC web part process?

The SharePoint IFC web part processes the Azure backend metadata described in the architecture and data protection documentation (for example, tenant ID and anonymized usage information). No IFC or BCF content is sent to Flinker.


### Where are the SPFx assets of the IFC Viewer for SharePoint hosted?

The SPFx assets of the IFC Viewer for SharePoint are hosted in the Microsoft 365 CDN of your tenant. At runtime, the viewer module is additionally loaded from a Flinker Azure CDN, as documented in the architecture and data protection section.

### Can I view multiple IFC models at the same time?

Yes! You can load multiple models in the IFC Viewer for SharePoint by adding multiple IFC files from your SharePoint library.

- See here how to add multiple files in the IFC SharePoint viewer: [Click here](https://docs.flinker.app/docs/load-multiple-ifc-bcf-files-in-sharepoint-ifc-viewer.html).

### Can I create a persistent federated model view for a SharePoint page?

Yes. An IFC Viewer for SharePoint web part configured with all relevant models acts as the persistent federated view  -  every user who opens the SharePoint page sees all models loaded automatically without re-selecting them.

For projects with many discipline models (for example, 30–35 separate IFC files), the folder link approach is recommended:

1. Store all discipline IFC files in one SharePoint document library folder.
2. Add the IFC Viewer web part to a SharePoint page.
3. Open the web part settings and paste the **direct folder path** of that folder.
4. Save and publish the page.

All models in the folder load automatically for every user who visits the page and has access to the folder. New IFC files added to the folder are picked up on the next page load without changing the web part configuration.

To share the federated view, share the SharePoint page URL. Anyone with read permission for the page and the folder will see the same model set.

> [!NOTE]
> There is no separate "Save as federated view" action. The web part configuration on the SharePoint page is the persistent, shareable federated view. Files opened locally via the **Open IFC** button are visible only to the person who opened them and are not retained on page reload.

- How to configure a folder: [Load multiple IFC/BCF files – Step 3 (folder alternative)](https://docs.flinker.app/docs/load-multiple-ifc-bcf-files-in-sharepoint-ifc-viewer.html#alternative-load-all-ifc-files-from-a-folder)

### Can I open a local IFC file from my desktop in the IFC Viewer for SharePoint, and how does that differ from loading a file from SharePoint?

Yes  -  the IFC Viewer web part can open an IFC file directly from your local desktop. The file is loaded and processed entirely in your browser (client-side); nothing is uploaded to SharePoint or any external server. Only the user who opened it can see the model; it is not visible to other users visiting the same SharePoint page.

The shared use case works differently: you store the IFC file in a SharePoint document library and configure its URL  -  or a folder URL  -  as the source in the web part settings. Every user with permission to access the SharePoint page and the file then sees the same model. Any updates saved to the file in SharePoint are reflected in the viewer automatically. When a folder is configured as the source, the viewer loads all IFC files in that folder and picks up changes to any of those files without manual reconfiguration. This is the standard setup for a shared BIM coordination model in a Teams project channel or a SharePoint project site (SharePoint CDE).

- Set up a shared model in SharePoint: [Load multiple IFC/BCF files – Step 2](https://docs.flinker.app/docs/load-multiple-ifc-bcf-files-in-sharepoint-ifc-viewer.html#step-2-paste-ifc-file-urls)

### Can you set which users can see the IFC model in SharePoint?

Yes. You can determine which users or user groups can see the 3D or IFC model by using SharePoint permissions (for the page and the IFC file) and Microsoft security groups. If you need additional protection workflows, you can also use ISO 19650 to restrict access and define who can edit the model.

## Troubleshooting

### Why has the SharePoint viewer stopped working or started showing a gray screen?

If the SharePoint viewer stopped working and now shows a gray or dark screen, SharePoint is most likely blocking the external viewer library because its domain is missing from trusted script sources. This issue can affect an existing installation even if the viewer worked before SharePoint began enforcing CSP.

Ask a SharePoint administrator to complete these steps:

1. Open the SharePoint admin center.
2. Go to **Advanced** > **Trusted script sources**.
3. Add `https://viewer.flinker.app/`, including the trailing slash.
4. Save the change.
5. Upgrade the IFC Viewer app to the latest version.
6. Return to the document library and refresh the page with `Ctrl+F5`.

For detailed instructions, see [Add the viewer library to trusted script sources](viewer-app-installation-with-admin-approval.md#3-add-the-viewer-library-to-trusted-script-sources) and [Upgrade IFC Viewer to the latest version](upgrade-sharepoint-ifc-viewer-app.md).

Microsoft explains this SharePoint security control in [Support for Content Security Policy in SharePoint Online](https://learn.microsoft.com/sharepoint/dev/spfx/content-securty-policy-trusted-script-sources).

If the viewer still does not load, open the browser developer tools and check the **Console** and **Network** tabs. Send Flinker support a screenshot of the CSP error or failed request.

> [!IMPORTANT]
> A SharePoint IT administrator must update the IFC Viewer app manually and regularly. Flinker cannot deploy these app updates to your tenant. Check for an update at least once or twice per year and whenever Flinker announces a required update.

## Updates

### How often do I need to update the IFC Viewer for SharePoint, and how?

Update the IFC Viewer for SharePoint at least 1–2 times per year. Unlike other Flinker Microsoft 365 solutions, the IFC Viewer for SharePoint is an SPFx app that Flinker cannot update automatically  -  you must pull the update manually via the App Catalog.

Follow the step-by-step instructions: [Upgrade IFC Viewer to the latest version](https://docs.flinker.app/docs/upgrade-sharepoint-ifc-viewer-app.html).

> [!TIP]
> Each upgrade delivers the latest features, security patches, and performance improvements. Only a SharePoint administrator can perform the upgrade.
