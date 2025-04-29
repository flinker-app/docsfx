---
title: Grant guest users access to individual SharePoint apps
description: Tutorial to grant external guest users minimal, read-only access to individual apps in the SharePoint app.
keywords: SharePoint, SPFx, SharePoint app, Guest Users, Permissions, External Access
canonical_url: https://docs.flinker.app/docs/guest-access-sharepoint-app.html
---

# Grant guest users access to individual apps in SharePoint

This guide describes how to give guest users minimal, read-only access to individual apps within the SharePoint app, enabling external users to access necessary SPFx components.

## Step 1: Temporarily enable the 'Everyone' claim

You need to temporarily enable the *Everyone* claim, including permissions for both internal and external users. 

> [!NOTE]
> Enabling the *Everyone* claim is a standard SharePoint configuration step that allows you to assign permissions to all users, including guests, for a limited time. This does not expose sensitive data by itself, but simply makes it easier to grant access to specific resources. Be sure to disable the claim again after sharing the app to maintain security best practices.

Open PowerShell and connect to your SharePoint tenant:

```powershell
Connect-PnPOnline -Url https://yourtenantname.sharepoint.com -UseWebLogin
Set-PnPTenant -ShowEveryoneClaim $true
```

Replace `yourtenantname` with your SharePoint tenant name.

## Step 2: Navigate to the specific app

- Go to your SharePoint App Catalog:
```
https://yourtenantname.sharepoint.com/sites/appcatalog/AppCatalog/Forms/AllItems.aspx
```

Replace `yourtenantname` with your SharePoint tenant name.

## Step 3: Share the app

- Locate the specific app file you wish to share.
- Click the **ellipsis (...)** next to the app file.
- Select **Share**.
- Enter **Everyone** in the users/groups box.
- Set permissions to **Read**.
- Uncheck **Send an email invitation**
- Click **Share** to confirm.

![Share app](/_media/share-app-with-guest-users-in-app-catalog.png)

## Step 4: Disable the 'Everyone' claim

After granting permissions, disable the previously enabled *Everyone* claim:

```powershell
Connect-PnPOnline -Url https://yourtenantname.sharepoint.com -UseWebLogin
Set-PnPTenant -ShowEveryoneClaim $false
```

## Verification

Ensure guest users can now access SPFx components within sites they have access to, such as modern search web parts or other custom solutions.

> [!NOTE]
> If your guest users have tried to access the sites prior to completing this setup, they might not immediately see any change. Clearing the browser cache may be required to ensure that the assets are reloaded properly.

