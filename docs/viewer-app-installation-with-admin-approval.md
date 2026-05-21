---
title: IFC Viewer installation with admin approval
description: Step-by-step guide for installing the IFC Viewer in SharePoint with admin approval.
keywords: IFC Viewer, SharePoint, Installation, Admin Approval, App Catalog, AppSource
canonical_url: https://docs.flinker.app/docs/viewer-app-installation-with-admin-approval.html
---

# Install the IFC Viewer app for SharePoint

This article describes how a SharePoint administrator can approve, install, and validate the IFC Viewer app for SharePoint.

> [!Note]
> - IFC files are processed client-side. The app does not upload IFC files to Flinker.
> - A SharePoint administrator must approve or install the app before users can add it to a site.

## 1. Add IFC Viewer from the App Catalog or AppSource

Add the IFC Viewer through Microsoft AppSource or from your SharePoint App Catalog.

### Option 1: From AppSource

1. Open the [IFC Viewer listing on AppSource](https://appsource.microsoft.com/en-us/product/office/WA200006238?src=docs&mktcmpid=docs_installation).
2. Select **Get it now** and follow the Microsoft 365 installation flow.

### Option 2: From the App Catalog

1. Open your App Catalog site: `https://yourdomain.sharepoint.com/sites/appcatalog/_layouts/15/appStore.aspx/appDetail/WA200006238`. Replace `yourdomain` with your SharePoint domain.

## 2. Add the IFC Viewer

1. Select **Add to Apps site**.

![Add App from App Catalog](/_media/sharepoint-app-catalog-ifcviewer-add-app-to-site.png)

2. Choose one of the available deployment options:
    - Select **Enable and Add** to approve the app and add it to sites automatically.
    - Select **Only Enable** to approve the app without adding it automatically.

### If you selected Only Enable

1. Open the SharePoint site where the app should be available.
2. Go to **My apps**.
3. Select **IFC Viewer**.
4. Select **Add**.

![Add IFC Viewer from My Apps](/_media/sharepoint-site-myapps-ifc.viewer-add.png)

## 3. Add the viewer library to trusted script sources

Add the viewer domain to trusted script sources in the SharePoint admin center so that the IFC Viewer web part can load its viewer library.

1. Open the SharePoint admin center.
2. Go to **Advanced** > **Trusted script sources**.
3. Add `https://viewer.flinker.app/`.
4. Save the change.

![Add viewer library to trusted script sources](/_media/add-viewer-library-to-trusted-script-sources.png)

If this setting is missing, users may see script loading or content security policy errors, and the viewer may not open.

## 4. Validate the installation

1. Navigate to the document library where your IFC files are stored.
2. Select the IFC file you want to open.

![Select IFC File](/_media/sharepoint-document-library-select-ifc-file.png)

3. Open the IFC file with the IFC Viewer.

![View IFC File](/_media/sharepoint-document-library-view-ifc-file.png)

The IFC Viewer app is installed and available for use in SharePoint.


## Permissions and Deployment

The Flinker IFC Viewer for SharePoint is provided as a SharePoint Framework (SPFx) solution. The app is deployed through SharePoint and uses the permissions and governance settings configured in your Microsoft 365 tenant.

### Key Points

- **SPFx Solution**  
  The IFC Viewer is deployed as a SharePoint Framework (SPFx) client-side solution package (`.sppkg` file).  
  This means:
  - The app runs within your SharePoint tenant.
  - All assets and code are managed within your Microsoft 365 environment.

- **Permissions**  
  - The IFC Viewer only requires the permissions necessary to run as an SPFx web part and extension within your tenant.
  - No additional API permissions (such as Graph API or external data access) are required unless you explicitly configure advanced integrations.
  - The app uses the permissions and roles defined in your SharePoint and Microsoft 365 security policies.

- **Assets and Features**  
  - The app includes the deployment of client-side assets (JavaScript, CSS, images) as part of the solution.
  - Features include the registration of custom actions and SPFx web parts for IFC model viewing directly in SharePoint.

- **Developer Information**  
  - **Publisher:** Flinker GmbH  
  - [Privacy Policy](https://www.flinker.app/data-protection)  
  - [Terms of Use](https://www.flinker.app/terms)

### Security and Privacy

- IFC files are processed client-side.
- The app does not upload IFC files to Flinker.
- Access to SharePoint content is governed by your Microsoft 365 tenant permissions and policies.

For further details on privacy, data flows, and technical security measures, see the [Architecture and Data Protection Overview](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).



*Last updated: July 2025*
