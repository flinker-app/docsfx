---
title: Define custom permissions for SharePoint groups and folders
description: Configure custom SharePoint permissions for groups, libraries, lists, and folders using the ISO 19650 workflow.
keywords: SharePoint custom permissions, group permissions, folder permissions, ISO 19650, Microsoft 365 access control
canonical_url: https://docs.flinker.app/docs/permissions-for-sharepoint-groups-and-folders.html
---

# Define custom permissions for groups and folders

Use ISO 19650 to configure custom permissions for SharePoint libraries, lists, and folders.

## Prerequisites

Before you begin, make sure that:

- You have site owner or administrator permissions for the SharePoint site.
- The required SharePoint groups, Microsoft Entra security groups, or user accounts already exist.
- You have identified the libraries, lists, and folders that require custom permissions.

## Create and edit custom permissions

1. Open the target folder or document library in SharePoint.
2. Select **Manage permissions** to open ISO 19650.
3. Select **Add** to assign permissions to existing SharePoint groups or users.
4. Review the inheritance change for the selected folder or library.
5. Use **Edit** or **Delete** to update or remove existing permissions.

> [!NOTE]
> Breaking permission inheritance increases administration effort. Use custom permissions only where the project access model requires them.

## Permission management recommendations

- Assign the minimum access required for each role.
- Grant access to groups instead of individual users where possible.
- Keep inheritance breaks limited and documented.
- Review permissions regularly as project membership changes.

## Use the permissions template

Use the permissions template to duplicate a permission structure across SharePoint sites or project areas.

### Download the template file

In ISO 19650, select the download icon in the upper-right corner.
![Screenshot](/_media/download-permissions-template.png)

### Set permissions in Excel

Set the required permission levels in Excel. To view available permission groups, select the key icon in ISO 19650.
![Screenshot](/_media/set-authority-levels.png)

Copy the permission level names into the corresponding Excel cells. Match the values exactly to avoid import errors.
![Screenshot](/_media/select-authority-levels.png)

### Upload the template file

Upload the template file to ISO 19650, review the preview, and save the changes.
![Screenshot](/_media/upload-the-permission-template.png)

The permissions from the template are applied to the selected SharePoint content.
