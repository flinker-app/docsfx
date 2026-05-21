---
title: Admin deployment overview
description: Overview for administrators planning Flinker IFC Viewer deployments across SharePoint Online, OneDrive for work or school, Microsoft Teams, and Microsoft Power BI.
---

# Admin deployment overview

Use this overview to identify each Flinker IFC Viewer component, the product experience it supports, the responsible administrator role, the approval path, and the full installation guide.

## Before you deploy

Complete these checks before approving the app for production use:

- Confirm the Microsoft 365 workspace where IFC files and project documents will remain.
- Review [Architecture and data protection](./ifc-viewer-architecture-and-data-protection.md) with IT security, compliance, or procurement stakeholders.
- Identify the administrator role required for each app surface.
- Test with representative IFC files, permission groups, and external-sharing settings in a controlled pilot.
- Document the owner for ongoing app updates, support requests, and release-note review.

## Deployment components

The components are independent from each other. Install only the components required for your rollout.

| Component | Product experience | Admin deployment |
|---|---|---|
| IFC Viewer for SharePoint Online | Embed IFC model viewing in SharePoint Online pages and document libraries. | SharePoint Administrator installs the SPFx package in the SharePoint App Catalog, configures the trusted script source, and approves the app through the SharePoint App Catalog or Microsoft AppSource. [Installation guide](./viewer-app-installation-with-admin-approval.md) |
| IFC File Handler for SharePoint Online and OneDrive for work or school | Open IFC files from SharePoint Online or OneDrive for work or school by clicking the file name. | Global Administrator or Application Administrator grants Microsoft Entra ID admin consent for the required file access permissions. [Installation guide](./ifc-file-handler-for-sharepoint.md) |
| IFC Viewer for Microsoft Teams | Embed IFC and BCF model viewing in Microsoft Teams channels and group chats. | Teams Administrator approves and deploys the Teams app with an app setup policy or team template. Global Administrator or Application Administrator grants Microsoft Entra ID admin consent for the required file access permissions. [Installation guide](./setting-up-the-ifc-viewer-in-microsoft-teams.md) |
| IFC Viewer Visual for Power BI | Display IFC models inside Microsoft Power BI reports with a custom visual. | Fabric Administrator or Power BI Administrator adds the visual as an organizational visual, or allows installation through tenant settings in the Microsoft Fabric Admin Portal or Power BI tenant settings. [Installation guide](./ifc-viewer-installation-for-power-bi.md) |

## Data protection

IFC files, project data, and BIM models remain in the Microsoft tenant, workspace, or source system configured by the customer. Model viewing and processing run in the browser or in the Microsoft 365 service context used by the app. No IFC file content, model geometry, project documents, or Power BI report datasets are sent to Flinker for model processing.

Flinker receives only the tenant ID for authentication and licensing, plus anonymized usage analytics with no personal data and no file content.

For full data flow documentation see [Architecture and Data Protection](./ifc-viewer-architecture-and-data-protection.md). For the Data Processing Agreement see [flinker.app/legal/dpa](https://flinker.app/legal/dpa).
