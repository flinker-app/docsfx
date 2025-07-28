---
title: Install the IFC Viewer File‑Handler for SharePoint
description: How to install the IFC Viewer File‑Handler application using Azure AD’s “organizations” endpoint.  
keywords: IFC Viewer File‑Handler, Flinker, Azure AD, Admin Consent, Tenant‑wide, organizations endpoint  
canonical_url: https://docs.flinker.app/docs/install-ifc-file-handler-for-sharepoint.html
---

# Install the IFC Viewer File‑Handler for SharePoint

To enable your users to open IFC files directly by **clicking on filenames in SharePoint or OneDrive** a tenant administrator must grant consent for the IFC Viewer File‑Handler.

## 1. Admin approval

[Click here to grant permissions](https://login.microsoftonline.com/organizations/v2.0/adminconsent?client_id=997921e1-58c4-4cf4-909a-f38059b7e314&redirect_uri=https%3A%2F%2Fviewer.flinker.app&scope=https://graph.microsoft.com/Files.Read.All%20https://graph.microsoft.com/offline_access%20openid%20profile&state=12345abc)
for the IFC Viewer file handler. When an Azure AD admin visits that URL and signs in, they’ll see a prompt listing the IFC Viewer File‑Handler’s required permissions. Once they click **Accept**, Azure AD will redirect back to our application.

The IFC Viewer will request these scopes:

- **Files.Read.All**  
  Read files on behalf of the signed-in user.  
  _Type: Delegated permission_

- **User.Read**  
  Sign you in and allow the app to read your basic profile.  
  _Type: Delegated permission_

> [!Note]
> The **IFC Viewer** requires permission to read the IFC files stored in your **SharePoint**. This is essential for the app to retrieve and display the files directly from these platforms, allowing you to view them without any manual downloads or transfers. **Your files are not transferred to external servers**



## 2. Verify Admin Consent

After granting consent, confirm that the permissions are active:

1. In the Azure Portal, go to **Enterprise applications** → **IFC Viewer** → **Permissions**.
2. You should see a "Admin consent" next to each permission (`Files.Read.All`, etc.).

## 3. After Consent

> [!Note]
> Changes to the file handler take 24-48 hours to appear. See [Refresh file handler cache](https://learn.microsoft.com/en-us/onedrive/developer/file-handlers/reset-cache) for information about how to force the cache to be cleared for development purposes.

Users can now open IFC files from SharePoint/OneDrive by clicking on them without extra prompts.
