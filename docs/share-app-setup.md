---
title: Protect for SharePoint permission setup
description: Guide for administrators who use Protect for SharePoint to configure SharePoint and Microsoft Teams permissions from a permission template.
keywords: Protect for SharePoint, SharePoint, Microsoft Teams, permissions, setup, guide
canonical_url: https://docs.flinker.app/docs/share-app-setup.html
---

# Protect for SharePoint permission setup

This guide helps administrators configure SharePoint and Microsoft Teams permissions from a permission template. The template is typically an Excel matrix that lists user groups, folder structure, and the required access level for each group.

## Table of contents

1. [Prerequisites](#prerequisites)
2. [Preparation](#preparation)
3. [Tips](#tips)
4. [Set permissions](#set-permissions)
5. [Frequently asked questions](#frequently-asked-questions)
6. [Contact and support](#contact-and-support)

## Prerequisites

### 1.1 Create a SharePoint page

Create a new SharePoint page or use an existing SharePoint page in your organization.

### 1.2 Install Protect for SharePoint on a SharePoint page

Install Protect for SharePoint from [Microsoft AppSource](https://appsource.microsoft.com/de-de/product/office/WA200007197?tab=Overview).

![Screenshot](/_media/MSFT-AppSource-Share-App.png)


## Preparation

### 2.1 Create the folder structure

Create the required folders in the selected SharePoint site:

![Screenshot](/_media/folder-structure.png)

Add folders by selecting **New folder**:

![Screenshot](/_media/create-new-folders.png)

If the SharePoint site is synced with OneDrive, you can also create the folder structure in File Explorer or Finder:

![Screenshot](/_media/sync-with-local-onedrive.png)


### 2.2 Create SharePoint permission groups

Create permission groups on SharePoint.
Open Protect for SharePoint from any folder:

![Screenshot](/_media/open-share-app.png)

Select the **Home** icon in the upper-left corner:

![Screenshot](/_media/click-on-home-in-share-app.png)

Select the group icon:

![Screenshot](/_media/click-on-group-icon-in-share-app.png)

Select **New** to create SharePoint user groups:

![Screenshot](/_media/click-on-new-sharepoint-group.png)

> [!NOTE]
> If you also use Microsoft security groups, you can give SharePoint groups matching names to simplify administration.

## Tips

### 3.1 Create permission groups as security groups

For recurring project teams, create Microsoft security groups and reuse them across SharePoint groups. This reduces duplicate user management across projects.

Create permission groups as security groups.
Go to Microsoft admin > active teams and groups > security groups:

![Screenshot](/_media/add-new-security-groups.png)


### 3.2 Add security groups to SharePoint groups

Invite security groups to your SharePoint groups by selecting the SharePoint group name. Do not select the edit button.

![Screenshot](/_media/click-on-sharepoint-groups-to-add-security-groups.png)

Select **Add members**:

![Screenshot](/_media/add-new-members-to-sharepoint-group.png)

Search for the Microsoft security group and press Enter:

![Screenshot](/_media/invite-security-groups.png)

The security group is now linked to the SharePoint group.

## Set permissions

### 4.1 Download the template file

To download the template file, select the download icon in the upper-right corner of Protect for SharePoint:

![Screenshot](/_media/download-permissions-template.png)

### 4.2 Set permissions in Excel

Set permissions or permission levels in Excel. 
The list of created permission groups can be found when you click on the key icon in Protect for SharePoint:

![Screenshot](/_media/set-authority-levels.png)

Copy the authorization levels into the Excel cells in the template file. Match the values exactly to avoid import errors.

![Screenshot](/_media/select-authority-levels.png)


### 4.3 Upload the template file

Upload the template file to Protect for SharePoint, review the preview and save it.

![Screenshot](/_media/upload-the-permission-template.png)

The permissions are now applied.

## Frequently asked questions

### Question 1: Can I use the template file for other SharePoint pages?

Yes. Use the template file to duplicate folder structures and access rights for other SharePoint sites.

### Question 2: Do I have to create Microsoft security groups?

No. You can use SharePoint groups only. Microsoft security groups are useful when the same user groups are reused across multiple projects or sites.

## Contact and support

For support, contact Flinker:

- **Email:** [support@flinker.app](mailto:support@flinker.app)
- **Phone:** [+491606469866](tel:+491606469866)

