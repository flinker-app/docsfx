# Architecture and Data Protection Overview

The Flinker IFC Viewer Apps for Microsoft 365 (SharePoint, Teams, Power BI, Excel) are fully integrated into your Microsoft 365 environment and operate exclusively within your own tenant.

> [!IMPORTANT]
> **Enterprise-Grade Security:**  
> Thanks to this architecture, the Flinker IFC Viewer App is especially suitable for large enterprises and organizations with highly sensitive data and extremely strict security or compliance requirements.  
> No data leaves your Microsoft 365 tenant—making it an ideal choice for corporations, public sector institutions, or any company with rigorous IT governance and data protection standards.


## Integration and Operating Model

- The Flinker IFC Viewer apps run entirely within your organization's Microsoft 365 environment (SharePoint, Teams, Power BI, or Excel).
- Installation and all access take place under your IT governance and security settings.

![IFC Viewer for Microsoft 365 by Flinker](_media/ifc-viewer-architecture-customer-tenant-flinker-app.png.png)


## Processing and Protection of Sensitive Data

- **All processing of IFC model data, BIM models, plans, drawings, 3D models, project documents, and other sensitive information takes place 100% within your Microsoft 365 tenant.**
- **No contents of these files** (such as geometries, property sets, component data, technical specifications, visualizations, annotations, plans, revisions, room books, work statuses, calculations, or any associated project documentation) are ever transmitted outside your tenant, stored on external servers, or processed outside Microsoft 365.
- **Full data sovereignty always remains with the customer.**



## Technical and Organizational Measures (TOM)

- The apps use only Microsoft 365 standard mechanisms and services, as configured in your environment:
    - **Authentication** via Azure Active Directory (AAD)
    - **Roles and permissions** are managed by your existing Microsoft 365 security policies
    - **SPFx Webparts** operate in the browser—no local installation, no additional endpoints
    - **All data transmissions are encrypted (TLS/HTTPS)**
    - **Microsoft datacenters** are located in the EU (for EU customers)



## Transmission of Technical Metadata

To ensure secure authentication and enable anonymous usage analytics, the following **technical metadata** may be transmitted to the Flinker Azure Backend:

- **Tenant ID** (for unique identification of your tenant)
- **(Optional) User email address** (only if required for login/support)
- **Anonymized usage and analytics data** (such as feature usage frequency—never any IFC content or project data)

**No project data, IFC file contents, or documentation are ever transmitted to Flinker.**

- All transmitted metadata is pseudonymized and encrypted.
- Access is restricted to authorized Flinker GmbH personnel (located in Germany/EU).
- All processing complies with GDPR, and if required, is governed by a Data Processing Agreement (DPA).



## Component Overview and Data Flows

- **User:** Accesses the app via Microsoft Teams, SharePoint, Power BI, or Excel.
- **IFC Viewer App:** Installed and operated directly in your Microsoft 365 tenant.
- **Microsoft 365 Services:** Handles authentication, authorization, and storage (e.g., SharePoint, Teams, OneDrive, Lists, Azure AD).
- **Flinker Azure Cloud:** Receives only technical metadata for authentication and anonymized analytics, as described above.
- **Azure CDN (Content Delivery Network):** Delivers viewer assets (such as JavaScript). No project/user data is exchanged via the CDN.
- **No external systems:** Project data, IFC files, documents, and other sensitive information **never leave your Microsoft 365 tenant**.



## Summary

The Flinker IFC Viewer apps comply with the highest standards for data privacy and IT security.  
**All professional data remains fully under your control and within the infrastructure of your Microsoft 365 tenant.**  
Any transmission of personal data to Flinker is strictly limited to technical requirements (e.g., Tenant ID) and can be governed by a DPA if necessary.  
Pseudonymization, encryption, and strictly limited access ensure maximum security.

For further technical details, a complete list of transmitted metadata, or questions regarding privacy and technical-organizational measures (TOM), please contact Flinker.


*Last updated: July 2025*
