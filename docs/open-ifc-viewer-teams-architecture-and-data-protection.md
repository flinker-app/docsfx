---
title: IFC Viewer for Microsoft Teams architecture and data protection
description: Architecture, data flows, permissions, and data protection for the IFC Viewer for Microsoft Teams app. Explains tenant-bound storage, security, and metadata handling for IT and compliance.
summary: "How the IFC Viewer for Microsoft Teams tab app works in Microsoft Teams: tenant-only storage in SharePoint/OneDrive, client-side rendering, permissions, and GDPR-aligned metadata processing."
slug: open-ifc-viewer-teams-architecture-and-data-protection
canonical_url: https://docs.flinker.app/docs/open-ifc-viewer-teams-architecture-and-data-protection.html
lang: en
robots: index,follow
keywords:
  - Microsoft Teams
  - IFC Viewer for Microsoft Teams
  - architecture
  - data protection
  - security
  - GDPR
  - SharePoint Online
  - OneDrive
  - Entra ID
  - Azure AD
  - AppSource
  - Teams tab
  - configurableTabs
  - permissions
  - tenant
  - metadata
  - analytics
  - Azure CDN
  - TLS
tags:
  - teams
  - ifc
  - viewer
  - architecture
  - security
  - compliance
  - gdpr
  - sharepoint
  - onedrive
  - entra-id
og:
  title: IFC Viewer for Microsoft Teams architecture and data protection
  description: Tenant-only storage, client-side rendering, and GDPR-aligned metadata for IFC Viewer for Microsoft Teams.
twitter:
  card: summary_large_image
audience: it-admins, security, compliance, architects
product: microsoft-teams
feature: open-ifc-viewer
ms.date: 2025-12-05
---

# IFC Viewer for Microsoft Teams architecture and data protection

_Last updated: December 2025_

The **IFC Viewer for Microsoft Teams** is a tab app that runs inside the customer’s Microsoft 365 tenant. It is designed so that all IFC and project data remain under the control of the customer’s tenant at all times.

This page describes the architecture, data flows, and data protection measures for IT security and compliance teams.

## Product-specific privacy highlights

- IFC files, BIM data, and project documents remain in the customer's Microsoft 365 tenant.
- Flinker does not receive or store IFC model content, plans, drawings, or other project documents.
- Viewer code is delivered from Flinker (web endpoint / Azure CDN) as static assets only; no customer data is transferred via these endpoints.
- The app does not read or send Teams messages and does not access mailbox items.
- No external non-Microsoft business systems or APIs are used; only Microsoft 365 services (Teams, SharePoint, OneDrive, Entra ID).
- Only strictly limited technical metadata (tenant ID, optional e-mail address, anonymized usage metrics) are sent to the Flinker Azure backend, as described in [section 4](#4-transmission-of-technical-metadata-to-flinker).



## 1. Integration and operating model

- The app is installed from **Microsoft AppSource / Teams Store** into the customer’s **Microsoft 365 tenant**.
- Users add the app as a **Teams tab** in a team or group chat.
- IFC model files are stored in the customer’s existing **SharePoint Online / OneDrive** locations.
- The viewer runs in the user’s browser inside the Teams client and accesses only those IFC files to which the signed-in user already has permissions.

No separate Flinker tenant is created. All access and governance are controlled entirely by the customer’s Microsoft 365 environment.



## 2. Components and data flows

**Main components**

- **User / Teams Client**  
  - Microsoft Teams desktop, web, or mobile client.
- **Teams Tab “IFC Viewer for Microsoft Teams”**  
  - Configurable tab defined in the app manifest (`configurableTabs`).  
  - Loads the viewer UI as a web application inside Teams.
- **SharePoint Online / OneDrive (customer tenant)**  
  - Stores the IFC model files in document libraries.
- **Microsoft Entra ID (Azure AD)**  
  - Handles authentication and authorization.
- **Flinker Azure Cloud**  
  - Provides:
    - a web endpoint to deliver the **viewer frontend** (HTML/JavaScript/CSS),
    - a **backend service** that receives strictly limited technical metadata (see section 4).
- **Azure CDN (Flinker)**  
  - Delivers static viewer assets (JavaScript/3D libraries). No IFC or project data is transmitted via the CDN.

**Data flows (high-level)**

1. The user opens a Teams channel or chat and selects the **IFC Viewer for Microsoft Teams** tab.
2. Teams loads the tab configuration and requests the viewer page from Flinker (domain listed as `teamsifcviewer.flinker.app` in the manifest).
3. The viewer frontend (JavaScript) runs in the browser and, using the user’s existing Microsoft 365 identity, reads the configured IFC files from **SharePoint Online / OneDrive** in the same tenant.
4. The IFC model is parsed and rendered **entirely client-side in the browser** – no IFC content is sent to Flinker servers.
5. Independently of the IFC file contents, the app may send **technical metadata** to the Flinker Azure backend (see section 4).

The app is designed so that IFC files and project documents are read from the customer's Microsoft 365 storage and are not sent to the Flinker backend for model processing.



### Architecture diagram

Overview of the components in the customer tenant and how the tab loads and renders IFC models.

<figure class="architecture-diagram" role="img" aria-labelledby="teams-diagram-title teams-diagram-desc">
  <svg viewBox="0 0 760 850" xmlns="http://www.w3.org/2000/svg">
    <title id="teams-diagram-title">IFC Viewer for Microsoft Teams architecture</title>
    <desc id="teams-diagram-desc">Diagram showing the Teams tab running in the user's client, tenant-controlled SharePoint or OneDrive storage, Microsoft Entra ID, and separate Flinker services that receive only static asset requests and limited technical metadata.</desc>
    <defs>
      <marker id="teamsArrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
        <path class="diagram-arrowhead" d="M2,2 L10,6 L2,10 Z" />
      </marker>
    </defs>
    <rect class="diagram-bg" x="0" y="0" width="760" height="850" rx="8" />
    <rect class="diagram-panel diagram-panel-tenant" x="45" y="36" width="670" height="580" rx="8" />
    <text class="diagram-title" x="380" y="70" text-anchor="middle">Customer Microsoft 365 tenant and Teams client</text>
    <rect class="diagram-note diagram-note-safe" x="100" y="92" width="560" height="40" rx="20" />
    <text class="diagram-note-text" x="380" y="117" text-anchor="middle">IFC files, model content, project documents, and Teams data stay inside this boundary.</text>
    <rect class="diagram-node diagram-node-actor" x="250" y="156" width="260" height="64" rx="6" />
    <text class="diagram-label" x="380" y="184" text-anchor="middle">User in Microsoft Teams</text>
    <text class="diagram-small" x="380" y="205" text-anchor="middle">desktop, web, or mobile client</text>
    <rect class="diagram-panel diagram-panel-client" x="150" y="254" width="460" height="132" rx="8" />
    <text class="diagram-title" x="380" y="287" text-anchor="middle">Client-side IFC processing</text>
    <rect class="diagram-node diagram-node-client" x="246" y="310" width="268" height="58" rx="6" />
    <text class="diagram-label" x="380" y="334" text-anchor="middle">Teams tab IFC Viewer</text>
    <text class="diagram-small" x="380" y="356" text-anchor="middle">parses and renders IFC locally</text>
    <path class="diagram-arrow" d="M380 220 V254" marker-end="url(#teamsArrow)" />
    <rect class="diagram-edge-bg" x="416" y="226" width="118" height="22" rx="11" />
    <text class="diagram-edge-label" x="475" y="242" text-anchor="middle">opens Teams tab</text>
    <rect class="diagram-node diagram-node-tenant" x="92" y="438" width="238" height="72" rx="6" />
    <text class="diagram-label" x="211" y="466" text-anchor="middle">Teams tenant host</text>
    <text class="diagram-small" x="211" y="489" text-anchor="middle">tab app and configuration</text>
    <rect class="diagram-node diagram-node-tenant" x="430" y="438" width="238" height="72" rx="6" />
    <text class="diagram-label" x="549" y="466" text-anchor="middle">SharePoint / OneDrive</text>
    <text class="diagram-small" x="549" y="489" text-anchor="middle">tenant IFC document storage</text>
    <rect class="diagram-node diagram-node-tenant" x="250" y="538" width="260" height="58" rx="6" />
    <text class="diagram-label" x="380" y="562" text-anchor="middle">Microsoft Entra ID</text>
    <text class="diagram-small" x="380" y="584" text-anchor="middle">SSO, tokens, and permissions</text>
    <path class="diagram-arrow" d="M294 386 V412 H211 V438" marker-end="url(#teamsArrow)" />
    <rect class="diagram-edge-bg" x="116" y="398" width="120" height="22" rx="11" />
    <text class="diagram-edge-label" x="176" y="414" text-anchor="middle">uses Teams host</text>
    <path class="diagram-arrow" d="M466 386 V412 H549 V438" marker-end="url(#teamsArrow)" />
    <rect class="diagram-edge-bg" x="530" y="398" width="112" height="22" rx="11" />
    <text class="diagram-edge-label" x="586" y="414" text-anchor="middle">reads IFC files</text>
    <path class="diagram-arrow" d="M380 386 V538" marker-end="url(#teamsArrow)" />
    <rect class="diagram-edge-bg" x="332" y="464" width="96" height="22" rx="11" />
    <text class="diagram-edge-label" x="380" y="480" text-anchor="middle">uses SSO</text>
    <rect class="diagram-panel diagram-panel-flinker" x="94" y="674" width="572" height="110" rx="8" />
    <text class="diagram-title" x="380" y="706" text-anchor="middle">Flinker Azure EU outside project-data boundary</text>
    <rect class="diagram-node diagram-node-flinker" x="135" y="734" width="220" height="36" rx="6" />
    <text class="diagram-label" x="245" y="757" text-anchor="middle">Viewer frontend assets</text>
    <rect class="diagram-node diagram-node-flinker" x="405" y="734" width="220" height="36" rx="6" />
    <text class="diagram-label" x="515" y="757" text-anchor="middle">Backend metadata only</text>
    <path class="diagram-arrow" d="M260 386 V430 H70 V752 H135" marker-end="url(#teamsArrow)" />
    <rect class="diagram-edge-bg" x="72" y="636" width="142" height="22" rx="11" />
    <text class="diagram-edge-label" x="143" y="652" text-anchor="middle">loads tab content</text>
    <path class="diagram-arrow diagram-arrow-muted" d="M500 386 V430 H690 V752 H625" marker-end="url(#teamsArrow)" />
    <rect class="diagram-edge-bg" x="548" y="636" width="174" height="22" rx="11" />
    <text class="diagram-edge-label" x="635" y="652" text-anchor="middle">technical metadata only</text>
    <rect class="diagram-note" x="60" y="804" width="640" height="30" rx="15" />
    <text class="diagram-note-text" x="380" y="824" text-anchor="middle">No IFC content, project documents, Teams messages, or mailbox data are sent to Flinker.</text>
  </svg>
</figure>


## 3. Processing and protection of sensitive data

The IFC Viewer for Microsoft Teams is built with a privacy-first design:

- **IFC and project content stays in the customer’s tenant**
  - IFC models, BIM data, plans, drawings, and all related project documents are stored and processed only in **SharePoint Online / OneDrive** within the tenant.
  - Flinker cannot access, download, or store these files. No geometries, property sets, or domain-specific project data are transmitted to Flinker.
- **Viewer execution in the browser**
  - IFC parsing and visualization are executed in the user’s browser as part of the Teams tab.
  - No local installation on the client machine is required.
- **No external systems for business data**
  - Only standard Microsoft 365 services (Teams, SharePoint, OneDrive, Entra ID) are used.  
  - There is no external SaaS database for project data; the app is designed so that no external system can access stored project documents.

All transmissions inside Microsoft 365 and between client and Flinker endpoints are protected using TLS/HTTPS.



## 4. Transmission of technical metadata to Flinker

To support secure operation and anonymous usage analytics, the solution may transmit **technical metadata only** to the Flinker Azure backend. This applies also to the Teams solution and is aligned with the general IFC Viewer documentation.

**Types of metadata**

- **Tenant ID** (GUID)  
  - Used to uniquely identify the Microsoft 365 tenant and manage licensing.
- **(Optional) User e-mail address**  
  - Only if required for login, support, or license assignment.
- **Anonymized usage and analytics data**, for example:
  - feature usage counters,
  - non-content related performance metrics.

**Not transmitted**

- No IFC file contents or subsets of model data (geometries, properties, components, etc.).
- No project documents, plans, drawings, or BIM attributes.
- No Teams chat messages or mailbox contents.

All transmitted metadata is pseudonymized where possible, encrypted in transit and at rest, and accessible only to a small group of authorized Flinker staff in the EU. Processing is performed in line with GDPR and, where applicable, under a Data Processing Agreement (DPA).



## 5. App manifest, permissions, and domains

The Teams app manifest defines:

- **Configurable tab**
  - `configurableTabs` with `scopes: ["team", "groupchat"]` – the app is used exclusively as a tab in Teams.
- **Permissions**
  - `"identity"` – used for sign-in and SSO with Microsoft 365.
  - `"messageTeamMembers"` – permission declared in the manifest. The IFC Viewer for Microsoft Teams does **not** use this permission to read or send Teams messages and does not access mailbox items; it is technically limited to rendering IFC models in the tab UI.

- **Valid domain**
  - `teamsifcviewer.flinker.app` – the only external domain used by the app for loading viewer resources.

The generic permission texts shown in AppSource (“can send data over the internet”, “can access personal information in the active message”) are Microsoft standard texts and do **not** reflect actual access to Teams messages or project content in this app.



## 6. Summary for IT and compliance

- IFC and project data remain in the customer’s Microsoft 365 tenant.
- The Teams app runs as a tab and accesses only IFC files in SharePoint/OneDrive using the user’s existing permissions.
- Flinker does **not** receive or store any IFC model contents or project documents.
- Only strictly limited technical metadata (Tenant ID, optional e-mail, anonymized usage metrics) is transmitted to Flinker’s Azure backend.
- The app has been reviewed and approved by Microsoft as part of the AppSource / Teams Store submission process.

## 7. Microsoft compliance and security

- The app is certified and reviewed by Microsoft before publication in AppSource and Teams Store.
- All security and privacy measures follow Microsoft’s own guidelines for Teams solutions and tenant-only integrations.
- For more on Flinker’s continuous security and compliance updates, see  
  [General architecture and data protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).

_For all company-wide privacy and data protection details, visit our  
[General architecture and data protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html) page._

