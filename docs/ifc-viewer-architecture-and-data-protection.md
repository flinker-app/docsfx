# Architecture and Data Protection

The Flinker IFC Viewer Apps for Microsoft 365 (SharePoint, Teams, Power BI, Excel) are fully integrated into your Microsoft 365 environment and operate exclusively within your own tenant.

## Key Privacy Advantage

**Flinker’s privacy-first architecture guarantees:**
- No project, BIM, or user data is ever transferred to, accessed by, or stored with Flinker GmbH or any third party.
- All sensitive data and document processing remains 100% within your own Microsoft 365 tenant.

This sets Flinker's Microsoft BIM Apps for Microsft 365 apart from many SaaS competitors and fully meets even the strictest requirements of enterprise IT, the public sector, and highly regulated industries.


> [!IMPORTANT]
> **Why Choose Flinker Microsoft BIM Apps? Enterprise-Grade Security:**  
> Thanks to this architecture, the Flinker IFC Viewer App is especially suitable for large enterprises and organizations with highly sensitive data and extremely strict security or compliance requirements.  
> No data leaves your Microsoft 365 tenant. This makes it an ideal choice for corporations, public sector institutions, or any company with rigorous IT governance and data protection standards.


## Integration and Operating Model

- The Flinker IFC Viewer apps run entirely within your organization's Microsoft 365 environment (SharePoint, Teams, Power BI, or Excel).
- Installation and all access take place under your IT governance and security settings.

![IFC Viewer for Microsoft 365 by Flinker](/_media/ifc-viewer-architecture-customer-tenant-flinker-app.png)
No IFC files, model data, or user content is ever transmitted to Flinker or any third party. All processing and storage stays within your Microsoft 365 tenant.

## Processing and Protection of Sensitive Data

- All processing of IFC model data, BIM models, drawings, 3D models, project documents, and other sensitive information is performed **100% within your Microsoft 365 tenant**.
- No contents of these files (geometries, property sets, component data, visualizations, plans, annotations, calculations, project documents, etc.) are **ever** transmitted outside your tenant, stored on external servers, or processed outside Microsoft 365.
- **Full data sovereignty always remains with you, the customer.**
- Flinker GmbH or any third party can **never** access, view, or store your model or project data—by design.


## Technical and Organizational Measures (TOM)

- The apps use only Microsoft 365 standard mechanisms and services, as configured in your environment:
    - **Authentication** via Azure Active Directory (AAD)
    - **Roles and permissions** are managed by your existing Microsoft 365 security policies
    - **SPFx Webparts** operate in the browser. No local installation, no additional endpoints
    - **All data transmissions are encrypted (TLS/HTTPS)**
    - **Microsoft datacenters** are located in the EU (for EU customers)


## Transmission of Technical Metadata

To ensure secure authentication and enable anonymous usage analytics, the following **technical metadata** may be transmitted to the Flinker Azure Backend:

- **Tenant ID** (for unique identification of your tenant)
- **(Optional) User email address** (only if required for login/support)
- **Anonymized usage and analytics data** (such as feature usage frequency. Never any IFC content or project data)

**No project data, IFC file contents, or documentation are ever transmitted to Flinker.**

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
- **No external systems:** Project data, IFC files, documents, and other sensitive information **never leave your Microsoft 365 tenant**.


## Microsoft Compliance

- All Flinker apps are reviewed and certified by Microsoft prior to publication in AppSource, Teams, or SharePoint Store.
- The architecture meets Microsoft 365 and Teams Store security and privacy requirements.
- Flinker regularly updates its apps to align with evolving best practices and security standards.


## Summary

- **All professional data remains fully under your control and within the infrastructure of your Microsoft 365 tenant.**
- Any transmission of personal data to Flinker is strictly limited to technical requirements (e.g., Tenant ID) and, if necessary, is governed by a DPA.
- Pseudonymization, encryption, and strictly limited access ensure maximum security.
- Flinker cannot access, export, or store your business data — by app design.


## For IT & Compliance Audits

We are happy to provide further technical documentation, a complete list of transmitted metadata, or join compliance and security calls with your IT team on request.


Contact:  
Flinker GmbH  
support@flinker.app  
[www.flinker.app](https://www.flinker.app)



*Last updated: July 2025*