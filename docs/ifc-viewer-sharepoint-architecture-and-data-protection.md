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

<figure class="architecture-diagram" role="img" aria-labelledby="sharepoint-diagram-title sharepoint-diagram-desc">
  <svg viewBox="0 0 760 860" xmlns="http://www.w3.org/2000/svg">
    <title id="sharepoint-diagram-title">IFC Viewer for SharePoint architecture</title>
    <desc id="sharepoint-diagram-desc">Diagram showing SharePoint tenant storage, client-side IFC processing in the browser, and separate Flinker Azure services that receive static asset requests and technical metadata only.</desc>
    <defs>
      <marker id="sharepointArrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
        <path class="diagram-arrowhead" d="M2,2 L10,6 L2,10 Z" />
      </marker>
    </defs>
    <rect class="diagram-bg" x="0" y="0" width="760" height="860" rx="8" />
    <rect class="diagram-panel diagram-panel-tenant" x="45" y="36" width="670" height="590" rx="8" />
    <text class="diagram-title" x="380" y="70" text-anchor="middle">Customer Microsoft 365 tenant and user browser</text>
    <rect class="diagram-note diagram-note-safe" x="100" y="92" width="560" height="40" rx="20" />
    <text class="diagram-note-text" x="380" y="117" text-anchor="middle">IFC files, model geometry, properties, and project documents stay inside this boundary.</text>
    <rect class="diagram-node diagram-node-actor" x="250" y="160" width="260" height="64" rx="6" />
    <text class="diagram-label" x="380" y="188" text-anchor="middle">User browser</text>
    <text class="diagram-small" x="380" y="209" text-anchor="middle">opens SharePoint page</text>
    <rect class="diagram-panel diagram-panel-client" x="150" y="260" width="460" height="132" rx="8" />
    <text class="diagram-title" x="380" y="293" text-anchor="middle">Client-side IFC processing</text>
    <rect class="diagram-node diagram-node-client" x="246" y="316" width="268" height="58" rx="6" />
    <text class="diagram-label" x="380" y="340" text-anchor="middle">IFC Viewer SPFx web part</text>
    <text class="diagram-small" x="380" y="362" text-anchor="middle">parses and renders IFC locally</text>
    <path class="diagram-arrow" d="M380 224 V260" marker-end="url(#sharepointArrow)" />
    <rect class="diagram-edge-bg" x="420" y="230" width="104" height="22" rx="11" />
    <text class="diagram-edge-label" x="472" y="246" text-anchor="middle">loads web part</text>
    <rect class="diagram-node diagram-node-tenant" x="92" y="444" width="238" height="72" rx="6" />
    <text class="diagram-label" x="211" y="473" text-anchor="middle">M365 CDN in tenant</text>
    <text class="diagram-small" x="211" y="496" text-anchor="middle">SPFx bundle and assets</text>
    <rect class="diagram-node diagram-node-tenant" x="430" y="444" width="238" height="72" rx="6" />
    <text class="diagram-label" x="549" y="473" text-anchor="middle">SharePoint libraries</text>
    <text class="diagram-small" x="549" y="496" text-anchor="middle">tenant IFC document storage</text>
    <rect class="diagram-node diagram-node-tenant" x="250" y="544" width="260" height="58" rx="6" />
    <text class="diagram-label" x="380" y="568" text-anchor="middle">Microsoft Entra ID</text>
    <text class="diagram-small" x="380" y="590" text-anchor="middle">authentication and permissions</text>
    <path class="diagram-arrow" d="M294 392 V418 H211 V444" marker-end="url(#sharepointArrow)" />
    <rect class="diagram-edge-bg" x="118" y="404" width="118" height="22" rx="11" />
    <text class="diagram-edge-label" x="177" y="420" text-anchor="middle">loads SPFx assets</text>
    <path class="diagram-arrow" d="M466 392 V418 H549 V444" marker-end="url(#sharepointArrow)" />
    <rect class="diagram-edge-bg" x="530" y="404" width="112" height="22" rx="11" />
    <text class="diagram-edge-label" x="586" y="420" text-anchor="middle">reads IFC files</text>
    <path class="diagram-arrow" d="M380 392 V544" marker-end="url(#sharepointArrow)" />
    <rect class="diagram-edge-bg" x="331" y="470" width="98" height="22" rx="11" />
    <text class="diagram-edge-label" x="380" y="486" text-anchor="middle">uses identity</text>
    <rect class="diagram-panel diagram-panel-flinker" x="94" y="684" width="572" height="112" rx="8" />
    <text class="diagram-title" x="380" y="716" text-anchor="middle">Flinker Azure EU outside project-data boundary</text>
    <rect class="diagram-node diagram-node-flinker" x="135" y="744" width="220" height="38" rx="6" />
    <text class="diagram-label" x="245" y="768" text-anchor="middle">Viewer module Azure CDN</text>
    <rect class="diagram-node diagram-node-flinker" x="405" y="744" width="220" height="38" rx="6" />
    <text class="diagram-label" x="515" y="768" text-anchor="middle">Backend metadata only</text>
    <path class="diagram-arrow" d="M260 392 V430 H70 V763 H135" marker-end="url(#sharepointArrow)" />
    <rect class="diagram-edge-bg" x="76" y="646" width="136" height="22" rx="11" />
    <text class="diagram-edge-label" x="144" y="662" text-anchor="middle">loads viewer code</text>
    <path class="diagram-arrow diagram-arrow-muted" d="M500 392 V430 H690 V763 H625" marker-end="url(#sharepointArrow)" />
    <rect class="diagram-edge-bg" x="548" y="646" width="174" height="22" rx="11" />
    <text class="diagram-edge-label" x="635" y="662" text-anchor="middle">technical metadata only</text>
    <rect class="diagram-note" x="60" y="812" width="640" height="30" rx="15" />
    <text class="diagram-note-text" x="380" y="832" text-anchor="middle">No IFC content, SharePoint documents, or project data are sent to Flinker for model processing.</text>
  </svg>
</figure>


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

