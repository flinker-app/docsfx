---
title: 3D IFC Viewer Usage for Power BI
description: Step-by-step guide to use the IFC Viewer in Power BI.
keywords: Power BI, IFC Viewer, Installation, 3D, BIM, Visual
canonical_url: https://docs.flinker.app/docs/ifc-viewer-installation-for-power-bi.html
---

# Using the 3D IFC Viewer with Power BI

You can use the 3D IFC Viewer in Power BI either by quickly starting with the ready-made sample report from AppSource, or by manually integrating the visual and required functions into your own existing or blank report for greater flexibility.

## Option 1: Quick start with the sample report

### 1. Download sample report and edit parameters in Power BI Desktop

Download the [sample Power BI report](https://appsource.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer?src=docs&mktcmpid=ifc_power_pi) from AppSource. Open it in your [Power BI Desktop](https://www.microsoft.com/de-de/download/details.aspx?id=58494) application and navigate to **Edit Parameters** under the **Home** tab.

![Power BI Desktop - Edit Parameters](/_media/power-bi-desktop-app-edit-parameters.png)

> [!NOTE]
> The **Edit Parameters** option is only enabled if the IFC loading query is included in your report; If **Edit Parameters** it is greyed out, [copy the IFC loading query from the sample report](#1-copy-the-ifc-loading-query-from-the-sample-report).

### 2. Paste the IFC file path into parameters

Paste the copied IFC file path into the respective parameter field in Power BI. Confirm your changes by clicking **OK**.

![Edit Parameters and Paste File Link](/_media/power-bi-desktop-app-edit-parameters-and-paste-file-link.png)


The following file paths are supported:

- **Local file path**: To use a local IFC file, first copy its file path. In Windows, open File Explorer and navigate to your IFC file. Right-click the file, and select **Copy as path**. This copies the full file path (e.g., `C:\Users\YourName\Documents\example.ifc`) to your clipboard.

  > [!NOTE]
  > Make sure there are no quotation marks (`"`) at the start or end of the file path you paste. If you see any, delete them before proceeding.

- **SharePoint file path**: You can use a direct SharePoint IFC file link by authenticating with your Microsoft organization account. To use a SharePoint file, locate your IFC file in SharePoint, click on the file, and select **Details** from the menu. Under the **Details** pane, find the **Path** section and copy the plain file path (not the sharing link). This direct path is required for the IFC Viewer to access the file correctly.
  
  > [!NOTE]
  > Be sure to use the correct SharePoint file path. Shared links will not work.
  
  ![Copy Direct Link of SharePoint IFC File](/_media/copy-direct-link-of-sharepoint-ifc-file.png)

- **Public cloud file link**: Alternatively, anonymous or public file links from sources such as GitHub, Autodesk, Trimble, or Google Drive are also supported.


### 3. Apply changes

After editing the parameters, apply the changes in Power BI by selecting **Apply Changes** from the prompt or toolbar.

![Apply Changes in Power BI Desktop](/_media/power-bi-desktop-app-apply-changes.png)


#### Sign in with your organization account (only for SharePoint file links)

If you are using a SharePoint file, Power BI may prompt you to sign in with your Microsoft organization account to access the file. Sign in to your Microsoft organization account to securely access SharePoint files. Follow the on-screen prompts to provide your corporate credentials.

![Sign In with Your Organization Account](/_media/powerbi-signin-with-your-org-account-and-access-web-content.png)

### 4. Confirm loaded properties and model

Sometimes, you may need to refresh the visual by removing and adding it again. To do this, right-click on the visual and select **Remove**. Then, add the visual back to your report.

![Remove and Add Visual in Power BI Desktop](/_media/power-bi-desktop-app-remove-and-add-visual.png)

Once applied, ensure that the properties and IFC model are loaded correctly within your Power BI project.

![Loaded Properties and IFC Model](/_media/power-bi-desktop-app-loaded-properties-and-model.png)

You are now ready to visualize your IFC model directly in Power BI using the IFC Viewer.

## Option 2: Integrate into an existing or blank Power BI report

If you already have an empty Power BI report or an existing report and want to integrate our IFC Viewer visual, follow these additional steps.

### 1. Copy the IFC loading query from the sample report

1. Open the sample report ([download from AppSource](https://appsource.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer?src=docs&mktcmpid=ifc_power_pi)) in Power BI Desktop.
2. Go to **Transform Data**.
3. Locate the query used to load IFC files (usually named `IFC` or similar).
4. Right-click the query and select **Copy**.

![Copy Power BI Query to Load IFC Files](/_media/copy-power-bi-query-to-load-ifc-files.png)

### 2. Paste the query into your own report

5. Open your own report, go to **Transform Data**, right-click in the Queries pane, and select **Paste**.
6. Adjust the [file location parameter](/docs/ifc-viewer-usage-for-power-bi.html#2-paste-the-ifc-file-path-into-parameters) to connect your model.
7. Click **Close & Apply** to save the changes and load the data into your report.

### 3. Add the IFC Viewer Visual from AppSource

1. In Power BI Desktop, go to the Visualizations pane and click on **Get more visuals (… )** to search the IFC Viewer visual in the Appstore and add the IFC Viewer visual to your report.
2. Once added, find the IFC Viewer icon in the Visualizations pane and click it to add the visual to your report canvas.
### 3. Bind the required fields to the IFC Viewer visual

- Drag and drop the `IFC Chunks` field from your `IFC` query table to the **IFC Chunks** data field of the IFC Viewer visual. This field contains the binary or text data representing the IFC model and is essential for rendering the 3D model in the viewer.

- Drag and drop the `GUIDS` field from your `IFC` query table to the **IDs** data field of the IFC Viewer visual. This field contains the unique identifiers for each element in the IFC model and is used to link the IFC data to other tables or visuals in your report.

> [!NOTE]
> In the IFC Viewer Visual you can show or hide individual building elements (such as walls, floors, doors, windows, columns, beams, stairs etc.) by their unique GlobalId (GUID) e.g. `3zE3wwXjt4f9f19eugD1Q0`. Other IFC objects (property sets, materials, etc.) may also have GUIDs, but they don’t map one-to-one to a visible element in your scene.

![Bind IFC Query Fields to Power BI Visual's Data Fields](/_media/bind-ifc-query-fields-to-power-bi-visuals-data-fields.png)

### 4. Optional: Link IFC Data to your existing data

1. In the **Model** view, select your existing data table.
2. Click **Manage Relationships** > **New**.
3. Configure a relationship between your table’s **GUID** column and the `IFC` query’s **GUID** field.
4. Click **OK** and ensure the relationship is active.

![Link IFC Visual Data to Existing Data](/_media/link-ifc-visual-data-to-existing-data.png)

You have now successfully integrated the 3D IFC Viewer into an existing or blank Power BI report. The IFC files will be loaded via the M functions and linked to your dataset by GUID, enabling seamless 3D visualization.

