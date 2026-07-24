---
title: Upgrade IFC Viewer to the latest version
description: Learn how to upgrade your IFC Viewer to the latest version to enjoy enhanced features, security improvements, and performance boosts.
keywords: IFC Viewer, upgrade, SharePoint, App Store, App Catalog, latest version
canonical_url: https://docs.flinker.app/docs/upgrade-sharepoint-ifc-viewer-app.html
---

# Upgrade IFC Viewer to the latest version

> [!IMPORTANT]
> Before you validate the upgrade, confirm that `https://viewer.flinker.app/` is listed under **SharePoint admin center** > **Advanced** > **Trusted script sources**. SharePoint Online CSP can block the viewer library if this entry is missing. This requirement also applies to existing installations.

> [!TIP]
> **Why Upgrade Your IFC Viewer?**
> - **Enhanced Features**: Gain access to the latest functionalities that improve your workflow.
> - **Security Improvements**: Protect your data with the newest security patches and updates.
> - **Performance Boosts**: Experience faster and more reliable app performance.
>
> **Admin Permissions Required**: Only SharePoint administrators can perform the app upgrade.

## Upgrade IFC Viewer from the App Catalog

Alternatively, administrators can upgrade the IFC Viewer directly from the SharePoint App Catalog. This method is particularly useful for managing apps across multiple sites.

1. **Access the App Catalog**:
   
   Navigate to your SharePoint App Catalog site. The URL typically follows this pattern:
   
   ```
   https://yourdomain.sharepoint.com/sites/appcatalog/AppCatalog/Forms/AllItems.aspx
   ```
   
   Replace `yourdomain` with your specific domain.

2. **Select the IFC Viewer**:
   
   In the App Catalog, select the **IFC Viewer** you wish to upgrade.

3. **Upgrade to the Latest Version**:
   
   - Click on **Upgrade Store App**.
   - Confirm any prompts to replace the existing app.

   ![Upgrade IFC Viewer from App Catalog](/_media/sharepoint-appcatalog-upgrade-store-app.png)

4. **Confirm the Upgrade**:
   
   After uploading, ensure that the app's version number reflects the latest update. This confirms that the upgrade was successful.

5. Return to the SharePoint document library and refresh the page with `Ctrl+F5`.

If the viewer shows a gray or dark screen without loading the IFC model, see [Why has the SharePoint viewer stopped working or started showing a gray screen?](faq-for-ifc-viewer-in-sharepoint.md#why-has-the-sharepoint-viewer-stopped-working-or-started-showing-a-gray-screen).
