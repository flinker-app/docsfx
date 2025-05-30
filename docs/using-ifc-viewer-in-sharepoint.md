---
title: Using IFC Viewer in SharePoint
description: Learn how to use the IFC Viewer app in SharePoint to view IFC files and add it as a web part on your site's homepage.
keywords: IFC Viewer, SharePoint, web part, document library, view IFC files
canonical_url: https://docs.flinker.app/docs/using-ifc-viewer-in-sharepoint.html
---

# Using IFC Viewer in SharePoint

Once you have successfully installed the IFC Viewer app in SharePoint, follow these steps to use it for viewing IFC files and integrating it as a web part on your site's homepage.

## Option 1: Use IFC Viewer to Open an IFC File

1. **Navigate to the Document Library:**
   - Go to the document library where your IFC files are stored.
   - Click on the IFC file you want to open.
   - Select the new "View" command

   ![Select IFC File](/_media/sharepoint-document-library-select-ifc-file.png)

2. **View the IFC File:**
   - The file will automatically open using the IFC Viewer.
   ![View IFC File](/_media/sharepoint-document-library-view-ifc-file.png)

## Option 2: Add IFC Viewer as a Web Part on the SharePoint Homepage

<video controls width="100%" height="auto">
   <source src="/_media/setup-ifc-viewer-webpart-with-ifc-and-bcf.mp4" type="video/mp4">
   Your browser does not support the video tag.
</video>


1. **Edit the SharePoint Homepage:**
   - Navigate to the homepage of your SharePoint site.
   - Click on the "Edit" button to modify the page.

   ![Edit Home Page](/_media/sharepoint-site-edit-home-page.png)

2. **Add the IFC Viewer Web Part:**
   - Click on the "+" icon to add a new web part.
   - Search for "IFC Viewer" and select it from the list.

   ![Add IFC Viewer Web Part](/_media/sharepoint-site-edit-home-page-add-ifc-viewer-webpart.png)

3. **Configure the IFC Viewer Web Part:**
   - Once the web part is added, click on it to edit.
   - Paste the link to the IFC file you want to display.
   - After configuring the link, click "Republish" to save the changes.

   ![Edit and Paste Link](/_media/sharepoint-site-edit-home-page-edit-ifc-viewer-webpart-and-paste-link-and-republish.png)

   > [!NOTE]
   > Download sample [IFC file](https://github.com/buildingSMART/BCF-XML/blob/release_3_0/Test%20Cases/IFCs/Architectural.ifc) and [BCF file](https://github.com/buildingSMART/BCF-XML/blob/release_3_0/Test%20Cases/v3.0/Visualization/Component%20selection/component%20selection.bcf) from buildingSMART and upload the files your SharePoint site

1. **View the Published Page:**
   - After republishing, the IFC Viewer web part will be visible on the homepage, displaying the linked IFC file.

   ![Published Home Page with IFC Viewer Web Part](/_media/sharepoint-site-published-home-page-with-ifc-viewer-webpart.png)

By following these steps, you can easily view IFC files directly within your SharePoint site and enhance the functionality of your homepage with the IFC Viewer web part.
