# Open IFC Viewer for Teams – Architecture & Data Protection

_Last updated: July 2025_

> [!Note]
> **This page describes the specific architecture and data protection measures for the Open IFC Viewer for Microsoft Teams.**  
> For a general overview of Flinker’s tenant-only philosophy and company-wide privacy standards, please see  
> [General Architecture & Data Protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).



## Product-Specific Privacy Highlights

- All IFC files, project data, and documents remain 100% within your Microsoft 365 tenant.
- No project or BIM data is ever sent to Flinker or any third party.
- Viewer code is delivered via Azure CDN (static assets only); no customer data is transferred via the CDN.
- No mailbox data, Teams messages, or personal information are accessed or processed.
- No external APIs, no data export, no integration with non-Microsoft services.



## Architecture & Data Flows

- The Open IFC Viewer for Teams app runs entirely in your organization's Microsoft 365 tenant.
- All processing, storage, and authentication are handled by your own Microsoft 365 infrastructure.
- Only technical metadata (Tenant ID, optional anonymized analytics) may be sent to Flinker’s Azure backend, as described in the [General Architecture & Data Protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).
- Project files, IFC models, and business data never leave your tenant.

_Visual overview:_

![Open IFC Viewer for Teams – Architecture Diagram](/_media/ifc-viewer-architecture-customer-tenant-flinker-app.png)



## Microsoft Compliance & Security

- The app is certified and reviewed by Microsoft before publication in AppSource and Teams Store.
- All security and privacy measures follow Microsoft’s own guidelines for Teams apps and tenant-only integrations.
- For more on Flinker’s continuous security and compliance updates, see  
  [General Architecture & Data Protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).



## More Information / Contact

For technical documentation, a list of transmitted metadata, or to schedule a compliance call:

Flinker GmbH  
support@flinker.app  
[www.flinker.app](https://www.flinker.app)



_For all company-wide privacy and data protection details, visit our  
[General Architecture & Data Protection](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html) page._

