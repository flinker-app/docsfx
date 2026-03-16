---
title: FAQs for IFC Viewer in SharePoint
description: Answers on SPFx hosting, CDN assets, metadata processing, and privacy for the IFC Viewer WebPart in SharePoint Online.
summary: Frequently asked questions covering SPFx deployment, Microsoft 365 CDN hosting, Azure CDN viewer module, and minimal technical metadata (tenant ID, anonymised usage) without sending IFC/BCF contents.
slug: faq-for-ifc-viewer-in-sharepoint
canonical_url: https://docs.flinker.app/docs/faq-for-ifc-viewer-in-sharepoint.html
lang: en
robots: index,follow
keywords:
  - SharePoint Online
  - SPFx
  - WebPart
  - Microsoft 365 CDN
  - Azure CDN
  - metadata
  - tenant ID
  - anonymised analytics
  - IFC
  - BCF
  - privacy
  - data protection
tags:
  - sharepoint
  - spfx
  - ifc
  - viewer
  - faq
  - privacy
  - metadata
og:
  title: FAQs for IFC Viewer in SharePoint
  description: SPFx hosting in M365 CDN, Azure CDN viewer module, and minimal metadata—no IFC/BCF content sent.
twitter:
  card: summary
audience: users, admins, it
product: sharepoint-online
feature: ifc-viewer
ms.date: 2025-12-05
---
# FAQs - IFC Viewer - SharePoint

## Data processing

### Which usage and metadata does the SharePoint IFC WebPart process?

The SharePoint IFC WebPart processes the Azure backend metadata described in the Architecture & Data Protection documentation (for example, tenant ID and anonymised usage information). No IFC or BCF content is sent to Flinker.


### Where are the SPFx assets of the SharePoint IFC Viewer hosted?

The SPFx assets of the SharePoint IFC Viewer are hosted in the Microsoft 365 CDN of your tenant. At runtime, the viewer module is additionally loaded from a Flinker Azure CDN, as documented in the Architecture & Data Protection section.

### Can I view multiple IFC models at the same time?

Yes! You can load multiple models in the SharePoint IFC Viewer by adding multiple IFC files from your SharePoint library.

- See here how to add multiple files in the IFC SharePoint viewer: [Click here](https://docs.flinker.app/docs/load-multiple-ifc-bcf-files-in-sharepoint-ifc-viewer.html).

### Can you set which users can see the IFC model in SharePoint?

Yes. You can determine which users or user groups can see the 3D or IFC model by using SharePoint permissions (for the page and the IFC file) and Microsoft security groups. If you need additional protection workflows, you can also use the Protect app to restrict access and define who can edit the model.
