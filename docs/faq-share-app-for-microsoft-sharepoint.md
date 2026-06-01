---
title: ISO 19650 FAQ
description: Frequently asked questions about ISO 19650, including setup, features, and permissions management.
keywords: ISO 19650, Microsoft SharePoint, virtual data rooms, cross company collaboration, IT security, Microsoft Teams, permissions management
canonical_url: https://docs.flinker.app/docs/faq-share-app-for-microsoft-sharepoint.html
---

# ISO 19650 FAQ

ISO 19650 helps administrators manage access to SharePoint and Microsoft Teams content. Use it to create controlled project spaces, external collaboration areas, and virtual data rooms in Microsoft 365.

## Add ISO 19650 to SharePoint

Add ISO 19650 from [Microsoft AppSource](https://appsource.microsoft.com/en-us/product/office/WA200007197?src=docs&mktcmpid=docs_installation). You must be a SharePoint administrator to complete the setup.

If you are not a SharePoint administrator, send the administrator this setup guide: [Setup for admins](https://docs.flinker.app/docs/installation.html).

## After you request the app

Your SharePoint administrator receives the app request in Microsoft 365. Many organizations review these requests manually, so the app might not appear immediately after you submit the request.

Contact your SharePoint administrator if the request is still pending. The administrator must approve and deploy the app before you can use it on a site.

## IT security reviews

Send your IT security team the relevant setup, architecture, and data protection documentation.

## Find ISO 19650 after setup

ISO 19650 appears in the SharePoint command bar after it is installed on a site. Look for **Manage permissions** in the document library.

![Search for IFC Viewer and Click Add](/_media/sharepoint-document-library-view-share-add-on.png)

If the button does not appear, select a folder first:

![Search for IFC Viewer and Click Add](/_media/sharepoint-document-library-view-select-folder.png)

## View available features

For a feature overview and plan comparison, see [ISO 19650 features](share-features.md).

## Manage SharePoint and Teams content

Use ISO 19650 to manage access to content stored in SharePoint, OneDrive, and Microsoft Teams. This includes files, folders, links, pages, and embedded content that are stored or referenced through SharePoint.

Because Teams files are stored in SharePoint, the same permission model applies to content used in Teams channels. ISO 19650 also supports external collaboration scenarios where users from other organizations need controlled access.

## Use ISO 19650 with IFC files

If your project uses IFC files in SharePoint or Teams, combine ISO 19650 with IFC Viewer for SharePoint or IFC Viewer for Microsoft Teams. The viewer shows the current IFC model from the document library, while ISO 19650 controls who can access the underlying file or folder.

## Manage access to Teams tab content

ISO 19650 can manage access to content that is displayed in Microsoft Teams tabs when that content is stored or controlled through Microsoft 365 or SharePoint. For example, you can restrict access to a document, folder, list, URL, or embedded application for specific user groups.

For third-party applications embedded in Teams tabs, review the access-control scenario before deployment.

## Hide Teams tabs

ISO 19650 does not currently hide or show the Teams tab itself for specific users. It controls access to the content behind the tab.

## Manage Microsoft Planner tasks

ISO 19650 does not currently manage Microsoft Planner task permissions. Microsoft Planner does not expose the same granular access model for individual task items that SharePoint lists provide.

For task scenarios that require granular permissions, use Microsoft Lists or Microsoft Project. Microsoft Lists works well with ISO 19650 because tasks are stored as list items and can use SharePoint permissions.

## Manage access to websites

Use ISO 19650 to manage access to websites or web applications that are embedded in Microsoft Teams or SharePoint when access is controlled through Microsoft 365, SharePoint, or a supported URL-based configuration.

