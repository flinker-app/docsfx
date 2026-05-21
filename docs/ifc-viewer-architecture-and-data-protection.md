---
title: IFC Viewer Architecture and Data Protection
description: Understand the architecture and privacy model of Flinker IFC Viewer apps for SharePoint, Teams, Power BI, and Excel in Microsoft 365.
keywords: IFC Viewer security, data protection, Microsoft 365 BIM, SharePoint Teams Power BI Excel, privacy architecture
canonical_url: https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html
---

# Architecture and Data Protection

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

## Integration and Operating Model

- The Flinker IFC Viewer apps run entirely within your organization's Microsoft 365 environment (SharePoint, Teams, Power BI, or Excel).
- Installation and all access take place under your IT governance and security settings.

![IFC Viewer for Microsoft 365 by Flinker](/_media/ifc-viewer-architecture-customer-tenant-flinker-app.png)
IFC files and project documents remain in the customer's Microsoft 365 storage or local browser session. The Flinker backend receives only the technical metadata required to operate and support the app.

## Processing and Protection of Sensitive Data

- IFC files, BIM data, drawings, 3D models, project documents, and other project information are stored in the Microsoft 365 locations configured by the customer.
- IFC content such as geometry, property sets, component data, annotations, and project documents is not transmitted to the Flinker backend for processing.
- Access to project data is governed by the customer's Microsoft 365 permissions, tenant policies, and identity configuration.
- Flinker does not provide a separate project-data repository for these apps.


## Technical and Organizational Measures (TOM)

- The apps use only Microsoft 365 standard mechanisms and services, as configured in your environment:
    - **Authentication** via Azure Active Directory (AAD)
    - **Roles and permissions** are managed by your existing Microsoft 365 security policies
    - **SPFx web parts** operate in the browser. No local installation, no additional endpoints
    - **All data transmissions are encrypted (TLS/HTTPS)**
    - **Microsoft datacenters** are located in the EU (for EU customers)


## Transmission of Technical Metadata

To ensure secure authentication and enable anonymous usage analytics, the following **technical metadata** may be transmitted to the Flinker Azure Backend:

- **Tenant ID** (for unique identification of your tenant)
- **(Optional) User email address** (only if required for login/support)
- **Anonymized usage and analytics data** (such as feature usage frequency. Never any IFC content or project data)

Project data, IFC file contents, and project documents are not transmitted to the Flinker backend as part of model processing.

- All transmitted metadata is pseudonymized and encrypted.
- Access is restricted to authorized Flinker GmbH personnel (located in Germany/EU).
- All processing complies with GDPR, and if required, is governed by a Data Processing Agreement (DPA).

_No technical or usage metadata includes any content, geometry, or business data from your files or projects._


## Component and Data Flows

- **User:** Accesses the app via Microsoft Teams, SharePoint, Power BI, or Excel.
- **IFC Viewer App:** Installed and operated directly in your Microsoft 365 tenant.
- **Microsoft 365 Services:** Handles authentication, authorization, and storage (e.g., SharePoint, Teams, OneDrive, Lists, Azure AD).
- **Flinker Azure Cloud:** Receives only technical metadata for authentication and anonymized analytics, as described above.
- **Azure CDN (Content Delivery Network):** Delivers viewer assets (such as JavaScript). No project/user data is exchanged via the CDN.
- **Project data storage:** Project data, IFC files, and documents remain in the storage locations configured by the customer.


## Microsoft Compliance

- Flinker apps are reviewed by Microsoft before publication in AppSource, Teams, or the SharePoint Store.
- The architecture meets Microsoft 365 and Teams Store security and privacy requirements.
- Flinker regularly updates its apps to align with evolving best practices and security standards.


## Summary

- Project data remains under the customer's Microsoft 365 governance and storage configuration.
- Personal data transmitted to Flinker is limited to technical requirements, such as tenant ID and optional user email address, and can be governed by a DPA where required.
- Technical metadata is protected through encryption, access controls, and internal operational policies.
- Flinker does not host IFC model files, project documents, or Power BI report datasets for these apps.


## For IT & Compliance Audits

Flinker can provide additional technical documentation, a complete list of transmitted metadata, or support compliance and security reviews on request.


Contact:  
Flinker GmbH  
support@flinker.app  
[www.flinker.app](https://www.flinker.app)



*Last updated: July 2025*
