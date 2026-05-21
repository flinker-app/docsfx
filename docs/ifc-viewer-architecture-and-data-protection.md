---
title: IFC Viewer architecture and data protection
description: Understand the architecture and privacy model of Flinker IFC Viewer solutions for SharePoint, Teams, Power BI, and Excel in Microsoft 365.
keywords: IFC Viewer security, data protection, Microsoft 365 BIM, SharePoint Teams Power BI Excel, privacy architecture
canonical_url: https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html
---

# Architecture and data protection

The Flinker IFC Viewer solutions for Microsoft 365 integrate with SharePoint, Teams, Power BI, and Excel. IFC files are processed in the browser or within the Microsoft 365 service context used by the solution. Flinker receives only the limited technical metadata required for authentication, licensing, support, and anonymized usage analytics.

## Privacy model

The architecture is designed so that:

- IFC model files remain in the storage location selected by the customer, such as SharePoint, Teams, OneDrive, Power BI, or the local browser session.
- Flinker does not host IFC model files, project documents, drawings, or report datasets.
- File content is not sent to the Flinker Azure backend for model processing.
- Technical metadata may be transmitted to Flinker as described in [Transmission of technical metadata](#transmission-of-technical-metadata).

This model supports organizations that require tenant-controlled storage, Microsoft 365 governance, and clear separation between project data and solution telemetry.

> [!IMPORTANT]
> Review the product-specific architecture pages for the exact data flow of each solution. The SharePoint, Teams, Power BI, and Excel integrations use different Microsoft 365 hosts and permission models.

## Integration and operating model

- The Flinker IFC Viewer solutions run within your organization's Microsoft 365 environment (SharePoint, Teams, Power BI, or Excel).
- Installation and all access take place under your IT governance and security settings.

<figure class="architecture-diagram" role="img" aria-labelledby="architecture-diagram-title architecture-diagram-desc">
  <svg viewBox="0 0 760 880" xmlns="http://www.w3.org/2000/svg">
    <title id="architecture-diagram-title">Flinker IFC Viewer architecture for Microsoft 365</title>
    <desc id="architecture-diagram-desc">Diagram showing that IFC and project data stay in the customer's Microsoft 365 tenant and client browser, while Flinker receives only static asset requests and limited technical metadata.</desc>
    <defs>
      <marker id="architectureArrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
        <path class="diagram-arrowhead" d="M2,2 L10,6 L2,10 Z" />
      </marker>
    </defs>
    <rect class="diagram-bg" x="0" y="0" width="760" height="880" rx="8" />
    <rect class="diagram-node diagram-node-actor" x="248" y="24" width="264" height="70" rx="6" />
    <text class="diagram-label" x="380" y="53" text-anchor="middle">Microsoft 365 user</text>
    <text class="diagram-small" x="380" y="75" text-anchor="middle">Browser, Teams, SharePoint, Power BI, Excel</text>
    <path class="diagram-arrow" d="M380 94 V132" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="420" y="104" width="96" height="22" rx="11" />
    <text class="diagram-edge-label" x="468" y="120" text-anchor="middle">opens solution</text>
    <rect class="diagram-panel diagram-panel-tenant" x="45" y="132" width="670" height="550" rx="8" />
    <text class="diagram-title" x="380" y="166" text-anchor="middle">Customer Microsoft 365 tenant and user client</text>
    <rect class="diagram-note diagram-note-safe" x="112" y="188" width="536" height="40" rx="20" />
    <text class="diagram-note-text" x="380" y="213" text-anchor="middle">IFC files, geometry, properties, documents, and report data stay inside this boundary.</text>
    <rect class="diagram-node diagram-node-tenant" x="250" y="256" width="260" height="84" rx="6" />
    <text class="diagram-label" x="380" y="286" text-anchor="middle">Microsoft 365 host</text>
    <text class="diagram-small" x="380" y="310" text-anchor="middle">Teams tab, SharePoint web part,</text>
    <text class="diagram-small" x="380" y="330" text-anchor="middle">Power BI visual, or Excel add-in</text>
    <rect class="diagram-node diagram-node-tenant" x="92" y="394" width="238" height="82" rx="6" />
    <text class="diagram-label" x="211" y="425" text-anchor="middle">Microsoft Entra ID</text>
    <text class="diagram-small" x="211" y="449" text-anchor="middle">Authentication, permissions,</text>
    <text class="diagram-small" x="211" y="469" text-anchor="middle">and tenant policies</text>
    <rect class="diagram-node diagram-node-tenant" x="430" y="394" width="238" height="82" rx="6" />
    <text class="diagram-label" x="549" y="425" text-anchor="middle">Tenant-controlled storage</text>
    <text class="diagram-small" x="549" y="449" text-anchor="middle">SharePoint, Teams files,</text>
    <text class="diagram-small" x="549" y="469" text-anchor="middle">OneDrive, Power BI</text>
    <path class="diagram-arrow" d="M318 340 V366 H211 V394" marker-end="url(#architectureArrow)" />
    <path class="diagram-arrow" d="M442 340 V366 H549 V394" marker-end="url(#architectureArrow)" />
    <rect class="diagram-panel diagram-panel-client" x="150" y="522" width="460" height="118" rx="8" />
    <text class="diagram-title" x="380" y="555" text-anchor="middle">Client-side model processing in browser</text>
    <rect class="diagram-node diagram-node-client" x="252" y="578" width="256" height="46" rx="6" />
    <text class="diagram-label" x="380" y="607" text-anchor="middle">Flinker IFC Viewer renders locally</text>
    <path class="diagram-arrow" d="M380 340 V522" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="334" y="440" width="92" height="22" rx="11" />
    <text class="diagram-edge-label" x="380" y="456" text-anchor="middle">runs viewer</text>
    <path class="diagram-arrow" d="M549 476 V502 H478 V578" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="536" y="498" width="112" height="22" rx="11" />
    <text class="diagram-edge-label" x="592" y="514" text-anchor="middle">reads IFC files</text>
    <rect class="diagram-panel diagram-panel-flinker" x="94" y="724" width="572" height="110" rx="8" />
    <text class="diagram-title" x="380" y="756" text-anchor="middle">Flinker Azure EU outside project-data boundary</text>
    <rect class="diagram-node diagram-node-flinker" x="135" y="784" width="220" height="36" rx="6" />
    <text class="diagram-label" x="245" y="807" text-anchor="middle">Azure CDN static assets</text>
    <rect class="diagram-node diagram-node-flinker" x="405" y="784" width="220" height="36" rx="6" />
    <text class="diagram-label" x="515" y="807" text-anchor="middle">Backend metadata only</text>
    <path class="diagram-arrow" d="M316 640 V696 H112 V802 H135" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="120" y="686" width="112" height="22" rx="11" />
    <text class="diagram-edge-label" x="176" y="702" text-anchor="middle">loads assets</text>
    <path class="diagram-arrow diagram-arrow-muted" d="M444 640 V696 H648 V802 H625" marker-end="url(#architectureArrow)" />
    <rect class="diagram-edge-bg" x="506" y="686" width="174" height="22" rx="11" />
    <text class="diagram-edge-label" x="593" y="702" text-anchor="middle">technical metadata only</text>
    <rect class="diagram-note" x="60" y="846" width="640" height="28" rx="14" />
    <text class="diagram-note-text" x="380" y="865" text-anchor="middle">No IFC geometry, project documents, or report datasets are sent to Flinker for model processing.</text>
  </svg>
</figure>

IFC files and project documents remain in the customer's Microsoft 365 storage or local browser session. The Flinker backend receives only the technical metadata required to operate and support the solution.

## Processing and protection of sensitive data

- IFC files, BIM data, drawings, 3D models, project documents, and other project information are stored in the Microsoft 365 locations configured by the customer.
- IFC content such as geometry, property sets, component data, annotations, and project documents is not transmitted to the Flinker backend for processing.
- Access to project data is governed by the customer's Microsoft 365 permissions, tenant policies, and identity configuration.
- Flinker does not provide a separate project-data repository for these solutions.


## Technical and organizational measures

- The solutions use Microsoft 365 standard mechanisms and services, as configured in your environment:
    - **Authentication** through Microsoft Entra ID.
    - **Roles and permissions** managed by your existing Microsoft 365 security policies.
    - **SPFx web parts** that operate in the browser without local installation.
    - **Encrypted transport** through TLS/HTTPS.
    - **EU Microsoft datacenters** for EU tenants, according to the customer's Microsoft 365 configuration.


## Transmission of technical metadata

To ensure secure authentication and enable anonymous usage analytics, the following **technical metadata** may be transmitted to the Flinker Azure Backend:

- **Tenant ID** (for unique identification of your tenant)
- **(Optional) User email address** (only if required for login or support)
- **Anonymized usage and analytics data** (such as feature usage frequency. Never any IFC content or project data)

Project data, IFC file contents, and project documents are not transmitted to the Flinker backend as part of model processing.

- All transmitted metadata is pseudonymized and encrypted.
- Access is restricted to authorized Flinker GmbH personnel (located in Germany/EU).
- All processing complies with GDPR, and if required, is governed by a Data Processing Agreement (DPA).

_No technical or usage metadata includes any content, geometry, or business data from your files or projects._


## Component and data flows

- **User:** Accesses the solution via Microsoft Teams, SharePoint, Power BI, or Excel.
- **IFC Viewer solution:** Installed and operated directly in your Microsoft 365 tenant.
- **Microsoft 365 Services:** Handles authentication, authorization, and storage (e.g., SharePoint, Teams, OneDrive, Lists, Azure AD).
- **Flinker Azure Cloud:** Receives only technical metadata for authentication and anonymized analytics, as described above.
- **Azure CDN (Content Delivery Network):** Delivers viewer assets (such as JavaScript). No project/user data is exchanged via the CDN.
- **Project data storage:** Project data, IFC files, and documents remain in the storage locations configured by the customer.


## Microsoft compliance

- Flinker solutions are reviewed by Microsoft before publication in AppSource, Teams, or the SharePoint Store.
- The architecture meets Microsoft 365 and Teams Store security and privacy requirements.
- Flinker regularly updates its solutions to align with evolving best practices and security standards.


## Summary

- Project data remains under the customer's Microsoft 365 governance and storage configuration.
- Personal data transmitted to Flinker is limited to technical requirements, such as tenant ID and optional user email address, and can be governed by a DPA where required.
- Technical metadata is protected through encryption, access controls, and internal operational policies.
- Flinker does not host IFC model files, project documents, or Power BI report datasets for these solutions.


*Last updated: May 2026*
