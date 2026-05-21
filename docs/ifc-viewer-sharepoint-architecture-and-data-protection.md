---
title: IFC Viewer for SharePoint architecture and data protection
description: Architecture, data flows, permissions, and data protection for the IFC Viewer SPFx web part in SharePoint Online. Explains tenant-bound storage, security, and technical metadata handling for IT and compliance.
summary: "How the IFC Viewer SPFx web part works in SharePoint: tenant-only storage, client-side rendering, supported hosts, permissions, and GDPR-aligned metadata processing."
slug: ifc-viewer-sharepoint-architecture-and-data-protection
canonical_url: https://docs.flinker.app/docs/ifc-viewer-sharepoint-architecture-and-data-protection.html
lang: en
robots: index,follow
keywords:
  - SharePoint Online
  - SPFx
  - web part
  - Microsoft 365 CDN
  - Entra ID
  - Azure AD
  - Teams tab
  - supportedHosts
  - permissions
  - tenant
  - metadata
  - analytics
  - Azure CDN
  - TLS
  - GDPR
tags:
  - sharepoint
  - spfx
  - ifc
  - viewer
  - architecture
  - security
  - compliance
  - gdpr
  - m365-cdn
  - entra-id
og:
  title: IFC Viewer for SharePoint architecture and data protection
  description: Tenant-only storage, client-side rendering, and GDPR-aligned metadata for the IFC Viewer SPFx web part.
twitter:
  card: summary_large_image
audience: it-admins, security, compliance, architects
product: sharepoint-online
feature: ifc-viewer
ms.date: 2025-12-05
---

# IFC Viewer for SharePoint architecture and data protection

_Last updated: December 2025_

The **Flinker IFC Viewer for SharePoint** is implemented as a **SharePoint Framework (SPFx) web part** and (optionally) as a Teams tab host. It is operated entirely within the customer’s Microsoft 365 tenant and is designed so that all IFC and project data remain in the tenant at all times.

This page provides an app-specific view for IT security teams.

## Product-specific privacy highlights

- IFC files, BIM data, and project documents remain in the customer's Microsoft 365 tenant.
- Flinker does not receive or store IFC model content, plans, drawings, or other project documents.
- The SPFx bundle is stored in the customer’s M365 CDN; the viewer module is loaded from Flinker’s Azure CDN as static code only, without customer data.
- The web part does not access mailbox items or Teams chat messages.
- No external non-Microsoft business systems or APIs are used; only Microsoft 365 services (SharePoint, optional Teams, Entra ID).
- Only strictly limited technical metadata (tenant ID, optional e-mail address, anonymized usage metrics) are sent to the Flinker Azure backend, as described in [section 4](#4-transmission-of-technical-metadata-to-flinker).

## 1. Integration and operating model

- The app is deployed as an SPFx solution into the customer’s **SharePoint Online** environment.
- Users add the **“IFC Viewer” web part** to SharePoint pages in sites where IFC files are stored.
- The SPFx bundle itself is stored in the **Microsoft 365 CDN** of the customer’s tenant; at runtime, an additional viewer module is loaded from Flinker’s Azure CDN.
- The same component can also host a **Teams tab** (`supportedHosts: ["SharePointWebPart", "TeamsTab"]`), but this document focuses on the SharePoint use case.

All installation and access remain under the security and governance controls of the customer’s Microsoft 365 tenant.



## 2. Components and data flows

**Components**

- **User / Browser**
  - Accesses a SharePoint page containing the IFC Viewer web part.
- **SharePoint Online (customer tenant)**
  - Stores the IFC model files in document libraries.
  - Hosts the SPFx solution and web part configuration.
- **Microsoft Entra ID (Azure AD)**
  - Authenticates users and enforces permissions.
- **IFC Viewer SPFx web part**
  - Runs client-side in the browser and renders the IFC model on the SharePoint page.
- **Flinker Azure CDN**
  - Delivers the viewer module and static assets (JavaScript, rendering libraries).
- **Flinker Azure Backend**
  - Receives strictly limited technical metadata (see section 4); no IFC content or project documents.

**Data flows**

1. The user opens a SharePoint page; SharePoint loads the **IFC Viewer web part** and associated SPFx assets from the **M365 CDN** in the customer’s tenant.
2. The web part loads the viewer module from the **Flinker Azure CDN**. Only static program code is delivered; no IFC data is sent to Flinker via the CDN.
3. Using the user’s SharePoint permissions, the web part reads IFC files directly from the relevant document library in the customer’s tenant.
4. The IFC model is parsed and visualized **entirely in the user’s browser**; no model content is transmitted to Flinker.
5. Separately from the IFC contents, the web part may send **technical metadata** (Tenant ID, optional e-mail, anonymized usage metrics) to the Flinker Azure backend (see section 4).


### Architecture diagram

Diagram summarizing tenant-resident components and client-side data flows for the IFC Viewer SPFx web part and its Azure CDN module.

```mermaid
flowchart LR
  subgraph Tenant
    BrowserUser[User Browser]
    SharePointPage[SharePoint page with IFC Viewer SPFx web part]
    SharePointLib[SharePoint Online IFC document libraries]
    M365CDN[M365 CDN in customer tenant SPFx bundle]
    EntraID[Microsoft Entra ID Azure AD]
  end

  subgraph Flinker
    ViewerModule[Viewer module Azure CDN]
    Backend[Azure backend Technical metadata tenant ID optional email usage]
  end

  BrowserUser -->|opens SharePoint page| SharePointPage
  SharePointPage -->|loads SPFx assets| M365CDN
  SharePointPage -->|authentication and tokens| EntraID
  SharePointPage -->|reads IFC files with user permissions| SharePointLib
  SharePointPage -->|loads viewer module| ViewerModule
  SharePointPage -.->|sends technical metadata only no IFC content| Backend
```


## 3. Processing and protection of sensitive data

- **All IFC and business data remain in the Microsoft 365 tenant of the customer**
  - IFC models, BIM data, drawings, plans, and all related project documents are stored and processed only in SharePoint Online.
  - No contents of these files (geometries, property sets, component data, annotations, versions, etc.) are transferred outside Microsoft 365 or stored on external servers.
- **No external system for project data**
  - The app is designed so that no external service can access or retrieve project documents from SharePoint.
- **Execution as SPFx web part**
  - The viewer runs as a client-side web part in the browser, with **no local installation** and **no additional custom script** permissions (requiresCustomScript = false).
- **Secure transmission**
  - All communication uses TLS/HTTPS.  
  - Underlying Microsoft datacenters for EU tenants are located in the EU.

The complete data sovereignty over IFC and project data always remains with the customer.



## 4. Transmission of technical metadata to Flinker

Consistent with the general IFC Viewer architecture, only a minimal set of **technical metadata** is transmitted from the SPFx web part to the Flinker Azure backend to support secure operation and anonymized usage analytics.

**Transmitted metadata**

- Tenant ID (for unique tenant identification)
- (Optional) User e-mail address (only if required for login/support)
- Anonymized usage and analytics data, e.g.:
  - function usage counters,
  - non-content related performance metrics.

**Not transmitted**

- No IFC file contents or subsets (geometry, properties, component structures, etc.).
- No SharePoint documents or list items.
- No project-specific business data.

All metadata is pseudonymized and encrypted; access on Flinker side is restricted to selected authorized staff in the EU and is processed in accordance with GDPR and, where required, on the basis of a Data Processing Agreement.



## 5. SPFx manifest and supported hosts

The SPFx manifest defines the component as:

- `"componentType": "WebPart"` with alias `"SharePointViewerWebPart"`.  
- `"supportedHosts": ["SharePointWebPart", "TeamsTab"]` – meaning the same component can be used both on SharePoint pages and as a tab in Teams.
- `"requiresCustomScript": false` – no arbitrary script injection and no additional scripting permissions are required.

This aligns with Microsoft’s SPFx security model and ensures that standard tenant governance mechanisms (Entra ID, SharePoint permissions, Conditional Access, etc.) remain fully effective.



## 6. Summary for IT and compliance

- The IFC Viewer for SharePoint is an SPFx web part operating entirely within the customer’s Microsoft 365 tenant.
- All IFC and project data are processed and stored exclusively in SharePoint Online; no business data is transferred to Flinker or third parties.
- The web part loads viewer code from Flinker’s Azure CDN, but no IFC content is exchanged with this CDN.
- Only limited technical metadata (Tenant ID, optional e-mail, anonymized usage metrics) is transmitted to the Flinker Azure backend.
- All processing follows GDPR and can be covered by a Data Processing Agreement (AVV) where required.

## 7. Microsoft compliance and security

- The app is certified and reviewed by Microsoft before publication in AppSource.
- All security and privacy measures follow Microsoft’s own guidelines for SharePoint solutions and tenant-only integrations.
- For more on Flinker’s continuous security and compliance updates, see  
  [General architecture and data protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).

_For all company-wide privacy and data protection details, visit our  
[General architecture and data protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html) page._

