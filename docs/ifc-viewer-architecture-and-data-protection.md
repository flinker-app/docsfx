---
title: IFC Viewer architecture and data protection
description: Understand the architecture and privacy model of Flinker IFC Viewer apps for SharePoint, Teams, Power BI, and Excel in Microsoft 365.
keywords: IFC Viewer security, data protection, Microsoft 365 BIM, SharePoint Teams Power BI Excel, privacy architecture
canonical_url: https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html
---

# Architecture and data protection

The Flinker IFC Viewer apps for Microsoft 365 integrate with SharePoint, Teams, Power BI, and Excel. IFC files are processed in the browser or within the Microsoft 365 service context used by the app. Flinker receives only the limited technical metadata required for authentication, licensing, support, and anonymized usage analytics.

## Privacy model

The architecture is designed so that:

- IFC model files remain in the storage location selected by the customer, such as SharePoint, Teams, OneDrive, Power BI, or the local browser session.
- Flinker does not host IFC model files, project documents, drawings, or report datasets.
- File content is not sent to the Flinker Azure backend for model processing.
- Technical metadata may be transmitted to Flinker as described in [Transmission of technical metadata](#transmission-of-technical-metadata).

This model supports organizations that require tenant-controlled storage, Microsoft 365 governance, and clear separation between project data and app telemetry.

> [!IMPORTANT]
> Review the product-specific architecture pages for the exact data flow of each app. The SharePoint, Teams, Power BI, and Excel integrations use different Microsoft 365 hosts and permission models.

## Integration and operating model

- The Flinker IFC Viewer apps run entirely within your organization's Microsoft 365 environment (SharePoint, Teams, Power BI, or Excel).
- Installation and all access take place under your IT governance and security settings.

<figure class="architecture-diagram" role="img" aria-labelledby="architecture-diagram-title architecture-diagram-desc">
  <svg viewBox="0 0 760 950" xmlns="http://www.w3.org/2000/svg">
    <title id="architecture-diagram-title">Flinker IFC Viewer architecture for Microsoft 365</title>
    <desc id="architecture-diagram-desc">Diagram showing a Microsoft 365 user opening a tenant-hosted app, client-side IFC processing, tenant-controlled storage, Microsoft Entra ID, and Flinker services that receive only static asset requests and technical metadata.</desc>
    <defs>
      <marker id="architectureArrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
        <path class="diagram-arrowhead" d="M2,2 L10,6 L2,10 Z" />
      </marker>
    </defs>
    <rect class="diagram-bg" x="0" y="0" width="760" height="950" rx="8" />
    <rect class="diagram-node diagram-node-actor" x="250" y="24" width="260" height="78" rx="6" />
    <text class="diagram-label" x="380" y="55" text-anchor="middle">Microsoft 365 user</text>
    <text class="diagram-small" x="380" y="78" text-anchor="middle">Browser, Teams, SharePoint, Power BI, Excel</text>
    <path class="diagram-arrow" d="M380 102 V145" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="412" y="113" width="90" height="22" rx="11" />
    <text class="diagram-edge-label" x="457" y="129" text-anchor="middle">opens app</text>
    <rect class="diagram-panel diagram-panel-tenant" x="60" y="146" width="640" height="330" rx="8" />
    <text class="diagram-title" x="380" y="180" text-anchor="middle">Customer Microsoft 365 tenant</text>
    <rect class="diagram-node diagram-node-tenant" x="250" y="206" width="260" height="84" rx="6" />
    <text class="diagram-label" x="380" y="237" text-anchor="middle">Microsoft 365 host</text>
    <text class="diagram-small" x="380" y="261" text-anchor="middle">Teams tab, SharePoint web part,</text>
    <text class="diagram-small" x="380" y="281" text-anchor="middle">Power BI visual, or Excel add-in</text>
    <rect class="diagram-node diagram-node-tenant" x="96" y="350" width="240" height="80" rx="6" />
    <text class="diagram-label" x="216" y="381" text-anchor="middle">Microsoft Entra ID</text>
    <text class="diagram-small" x="216" y="405" text-anchor="middle">Authentication, permissions,</text>
    <text class="diagram-small" x="216" y="425" text-anchor="middle">and tenant policies</text>
    <rect class="diagram-node diagram-node-tenant" x="424" y="350" width="240" height="80" rx="6" />
    <text class="diagram-label" x="544" y="381" text-anchor="middle">Tenant-controlled storage</text>
    <text class="diagram-small" x="544" y="405" text-anchor="middle">SharePoint, Teams files,</text>
    <text class="diagram-small" x="544" y="425" text-anchor="middle">OneDrive, Power BI</text>
    <path class="diagram-arrow" d="M320 290 V322 H216 V350" marker-end="url(#architectureArrow)" />
    <path class="diagram-arrow" d="M440 290 V322 H544 V350" marker-end="url(#architectureArrow)" />
    <path class="diagram-arrow" d="M380 290 V540" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="260" y="488" width="94" height="22" rx="11" />
    <text class="diagram-edge-label" x="307" y="504" text-anchor="middle">runs viewer</text>
    <path class="diagram-arrow" d="M544 430 V500 H462 V540" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="560" y="506" width="118" height="22" rx="11" />
    <text class="diagram-edge-label" x="619" y="522" text-anchor="middle">reads IFC files</text>
    <rect class="diagram-panel diagram-panel-client" x="120" y="540" width="520" height="155" rx="8" />
    <text class="diagram-title" x="380" y="574" text-anchor="middle">Client-side model processing</text>
    <rect class="diagram-node diagram-node-client" x="250" y="610" width="260" height="76" rx="6" />
    <text class="diagram-label" x="380" y="640" text-anchor="middle">Flinker IFC Viewer</text>
    <text class="diagram-small" x="380" y="662" text-anchor="middle">IFC parsing, model inspection,</text>
    <text class="diagram-small" x="380" y="681" text-anchor="middle">and 3D rendering</text>
    <path class="diagram-arrow" d="M336 686 V730 H265 V790" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="128" y="702" width="112" height="22" rx="11" />
    <text class="diagram-edge-label" x="184" y="718" text-anchor="middle">loads assets</text>
    <path class="diagram-arrow diagram-arrow-muted" d="M424 686 V730 H495 V790" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="506" y="702" width="174" height="22" rx="11" />
    <text class="diagram-edge-label" x="593" y="718" text-anchor="middle">technical metadata only</text>
    <rect class="diagram-panel diagram-panel-flinker" x="120" y="760" width="520" height="130" rx="8" />
    <text class="diagram-title" x="380" y="794" text-anchor="middle">Flinker Azure EU</text>
    <rect class="diagram-node diagram-node-flinker" x="165" y="820" width="200" height="48" rx="6" />
    <text class="diagram-label" x="265" y="850" text-anchor="middle">Azure CDN static assets</text>
    <rect class="diagram-node diagram-node-flinker" x="395" y="820" width="200" height="48" rx="6" />
    <text class="diagram-label" x="495" y="850" text-anchor="middle">Backend metadata only</text>
    <rect class="diagram-note" x="60" y="910" width="640" height="34" rx="17" />
    <text class="diagram-note-text" x="380" y="932" text-anchor="middle">No IFC geometry, project documents, or report datasets are sent to Flinker for model processing.</text>
  </svg>
</figure>

IFC files and project documents remain in the customer's Microsoft 365 storage or local browser session. The Flinker backend receives only the technical metadata required to operate and support the app.

## Processing and protection of sensitive data

- IFC files, BIM data, drawings, 3D models, project documents, and other project information are stored in the Microsoft 365 locations configured by the customer.
- IFC content such as geometry, property sets, component data, annotations, and project documents is not transmitted to the Flinker backend for processing.
- Access to project data is governed by the customer's Microsoft 365 permissions, tenant policies, and identity configuration.
- Flinker does not provide a separate project-data repository for these apps.


## Technical and organizational measures

- The apps use only Microsoft 365 standard mechanisms and services, as configured in your environment:
    - **Authentication** via Azure Active Directory (AAD)
    - **Roles and permissions** are managed by your existing Microsoft 365 security policies
    - **SPFx web parts** operate in the browser. No local installation, no additional endpoints
    - **All data transmissions are encrypted (TLS/HTTPS)**
    - **Microsoft datacenters** are located in the EU (for EU customers)


## Transmission of technical metadata

To ensure secure authentication and enable anonymous usage analytics, the following **technical metadata** may be transmitted to the Flinker Azure Backend:

- **Tenant ID** (for unique identification of your tenant)
- **(Optional) User email address** (only if required for login/support)
- **Anonymized usage and analytics data** (such as feature usage frequency. Never any IFC content or project data)

Project data, IFC file contents, and project documents are not transmitted to the Flinker backend as part of model processing.

- All transmitted metadata is pseudonymized and encrypted.
- Access is restricted to authorized Flinker GmbH personnel (located in Germany/EU).
- All processing complies with GDPR, and if required, is governed by a Data Processing Agreement (DPA).

_No technical or usage metadata includes any content, geometry, or business data from your files or projects._


## Component and data flows

- **User:** Accesses the app via Microsoft Teams, SharePoint, Power BI, or Excel.
- **IFC Viewer App:** Installed and operated directly in your Microsoft 365 tenant.
- **Microsoft 365 Services:** Handles authentication, authorization, and storage (e.g., SharePoint, Teams, OneDrive, Lists, Azure AD).
- **Flinker Azure Cloud:** Receives only technical metadata for authentication and anonymized analytics, as described above.
- **Azure CDN (Content Delivery Network):** Delivers viewer assets (such as JavaScript). No project/user data is exchanged via the CDN.
- **Project data storage:** Project data, IFC files, and documents remain in the storage locations configured by the customer.


## Microsoft compliance

- Flinker apps are reviewed by Microsoft before publication in AppSource, Teams, or the SharePoint Store.
- The architecture meets Microsoft 365 and Teams Store security and privacy requirements.
- Flinker regularly updates its apps to align with evolving best practices and security standards.


## Summary

- Project data remains under the customer's Microsoft 365 governance and storage configuration.
- Personal data transmitted to Flinker is limited to technical requirements, such as tenant ID and optional user email address, and can be governed by a DPA where required.
- Technical metadata is protected through encryption, access controls, and internal operational policies.
- Flinker does not host IFC model files, project documents, or Power BI report datasets for these apps.


## IT and compliance audits

Flinker can provide additional technical documentation, a complete list of transmitted metadata, or support compliance and security reviews on request.


Contact:  
Flinker GmbH  
support@flinker.app  
[www.flinker.app](https://www.flinker.app)



*Last updated: July 2025*
