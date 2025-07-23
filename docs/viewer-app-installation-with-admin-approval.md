---
title: IFC Viewer Installation with Admin Approval
description: Step-by-step guide for installing the IFC Viewer in SharePoint with admin approval.
keywords: IFC Viewer, SharePoint, Installation, Admin Approval, App Catalog, AppSource
canonical_url: https://docs.flinker.app/docs/viewer-app-installation-with-admin-approval.html
---

# IFC Viewer Installation

This guide provides detailed steps for installing the IFC Viewer.

> [!Note]
> - **Privacy First: Your Data Stays With You!** We do not upload your files anywhere. All processing is client-side, ensuring full privacy and security.
> - **App must be installed by a SharePoint administrator!**

## 1. Add IFC Viewer from the App Catalog or AppSource

You can add the IFC Viewer to your site directly through the App Catalog or AppSource link.

### Option 1: From AppSource

1. Visit the [AppSource link](https://appsource.microsoft.com/en-us/product/office/WA200006238?src=docs&mktcmpid=docs_installation).
2. Click on "Get it now" to proceed with adding the IFC Viewer to your environment.

### Option 2: From the App Catalog

1. Go to your App Catalog site: `https://yourdomain.sharepoint.com/sites/appcatalog/_layouts/15/appStore.aspx/appDetail/WA200006238`. Replace `yourdomain` with your specific domain.

## 2. Add the IFC Viewer

1.  Click on "Add to Apps site" to start the installation process.

![Add App from App Catalog](/_media/sharepoint-app-catalog-ifcviewer-add-app-to-site.png)

2. Now you have two options:
    - Click "Enable and Add" to both approve and add the app to all sites automatically.
    - Click "Only Enable" to enable the app without adding it automatically.

### If You Clicked "Only Enable"

1. The admin or site owner needs to manually add the app to a specifc site.
2. Go to the site where you want to add the app.
3. Navigate to "My apps" and select "IFC Viewer".
4. Click on "Add" to add the IFC Viewer to the site.

![Add IFC Viewer from My Apps](/_media/sharepoint-site-myapps-ifc.viewer-add.png)

## 3. Use IFC Viewer to Open an IFC File

1. Navigate to the document library where your IFC files are stored.
2. Select the IFC file you want to open.

![Select IFC File](/_media/sharepoint-document-library-select-ifc-file.png)

3. Click on the IFC file to view it using the IFC Viewer.

![View IFC File](/_media/sharepoint-document-library-view-ifc-file.png)

Congratulations! You have successfully installed and started using the IFC Viewer app in SharePoint.


## Permissions and Deployment

The Flinker IFC Viewer for SharePoint is provided as a SharePoint Framework (SPFx) solution.  
This allows seamless integration directly into your SharePoint Online environment and ensures strict adherence to your tenant’s security and compliance standards.

### Key Points

- **SPFx Solution**  
  The IFC Viewer is deployed as a SharePoint Framework (SPFx) client-side solution package (`.sppkg` file).  
  This means:
  - The app runs entirely within your SharePoint tenant—no external processing of your data.
  - All assets and code are managed within your Microsoft 365 environment.

- **Permissions**  
  - The IFC Viewer only requires the permissions necessary to run as an SPFx web part and extension within your tenant.
  - No additional API permissions (such as Graph API or external data access) are required unless you explicitly configure advanced integrations.
  - The app uses the permissions and roles defined in your SharePoint and Microsoft 365 security policies.

- **Assets and Features**  
  - The app includes the deployment of client-side assets (JavaScript, CSS, images) as part of the solution.
  - Features include the registration of custom actions and SPFx web parts for easy access to IFC model viewing directly in SharePoint.

- **Developer Information**  
  - **Publisher:** Flinker GmbH  
  - [Privacy Policy](https://www.flinker.app/data-protection)  
  - [Terms of Use](https://www.flinker.app/terms)

### Security and Privacy

- The IFC Viewer for SharePoint **does not transmit your SharePoint or IFC data to any external server**.
- All data processing remains within your Microsoft 365 tenant.
- The app is suitable for use in highly regulated or security-sensitive environments.

For further details on privacy, data flows, and technical security measures, see the [Architecture and Data Protection Overview](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).



*Last updated: July 2025*
