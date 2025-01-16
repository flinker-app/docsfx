---
title: IFC Microsoft Power BI Integration
description: Learn how to integrate IFC data into Microsoft Power BI for real-time project collaboration and data analytics.
keywords: IFC, BIM, Excel, Power BI, IFC properties, IFCBeam, IFCColumn, IFCSlab, IFCWall, building information modeling, data synchronization, construction analytics
canonical_url: https://docs.flinker.app/docs/ifc-power-bi.html
---

# How to Integrate IFC Properties with Excel and Power BI for BIM Analytics

![In Power BI: Create visuals to analyze IFC file](/_media/in-powerbi-app-create-visuals-to-analyze-ifc-files-banner.png)


## Introduction

In this step-by-step guide, you will learn how to query IFC categories, sync their properties to Excel, and then bring that data into Power BI to create interactive visualizations.

### Prerequisites
- IFC file with properties already generated.
- Access to an online Excel file location (e.g., OneDrive or SharePoint).
- Power BI account or Power BI Desktop installed.
- Organizational login credentials to Power BI.


## Step-by-Step Process

### 1. Query IFC Categories
Start by querying the relevant IFC categories (such as IFCBeam, IFCColumn, IFCSlab, IFCWall) from your BIM environment. Make sure you have exported these categories to Excel or can sync them directly.

![Query IFC categories (IFCBeam, IFCColumn, IFCSlab, IFCWall) and click Sync to Excel](/_media/query-ifc-categories-ifcbeam-ifccolumn-ifcslab-ifcwall-and-click-sync-to-excel.png)


### 2. Click the Link to the Excel File and Open File Location
Access the Excel file containing the queried IFC properties by clicking the provided link. Open the folder where the Excel file containing your IFC properties was generated or updated.

![Click link to open Excel file with the queried properties and go to file location](/_media/click-link-to-open-excel-file-with-the-queried-properties-and-go-to-file-location.png)


### 3. Select the Excel File and Copy the Direct Link
In your SharePoint Online, select the Excel file and copy its direct link. This link will be used to connect Power BI to your IFC data source.

![Select Excel file with properties and copy direct link in details pane](/_media/select-excel-file-with-properties-and-copy-direct-link-in-details-pane.png)


### 4. Open Power BI and Start a New Report
Open your web browser and navigate to the Power BI web app. Sign in with your organizational credentials. From the main Power BI workspace, start by creating a new report.

### 5. Click "New Report" and Choose Excel as the Data Source
Within Power BI, click on **New Report** and select **Excel** as your data source to begin connecting your IFC properties from the Excel file.

![In Power BI: Click New Report and select Excel as the data source](/_media/in-powerbi-app-click-new-report-and-select-excel-as-datasource.png)


### 6. Paste the Excel Link into Power BI
When prompted, paste the direct link to the IFC properties Excel file you previously copied. Sign in with your organizational account if required.

![In Power BI: Paste direct Excel file link and select your organizational account to sign in](/_media/in-powerbi-app-paste-direct-excel-file-link-and-select-orgaccount-to-signin.png)


### 7. Choose Your IFC Data
Select the appropriate table (e.g., IFCProperties) that contains the IFC data you need and click **Create** to load it into Power BI.

![In Power BI: Choose data (IFCProperties) and click on Create](/_media/in-powerbi-app-choose-data-ifcproperties-and-click-on-create.png)


### 8. Confirm Your Data Is Loaded
Verify that your IFC properties data is now loaded into the Power BI report. You should see all the relevant fields and columns ready for analysis and visualization.

![In Power BI: IFCProperties data is loaded and visuals can be created](/_media/in-powerbi-app-ifcproperties-data-is-loaded-and-visuals-can-be-created.png)


### 9. Create BIM Data Visualizations in Power BI

After loading your IFC-based fields (e.g., `Attributes.Class`, `Volume_in_m3`, `PropertySets.Materials_and_Finishes.Structural_Material`) into Power BI, create visuals to analyze construction elements and materials:

- **Horizontal Bar Chart (Volume by IFC Class):**  
  1. Select the **Bar Chart** visual.
  2. Add `Attributes.Class` to the Axis, and `Volume_in_m3` to Values (summed).
  3. Compare volumes of IFC classes (IFCBEAM, IFCSLAB, IFCWALLSTANDARDCASE) at a glance.

- **Donut Chart (Material Composition):**  
  1. Choose the **Donut Chart** visual.
  2. Place `PropertySets.Materials_and_Finishes.Structural_Material` in the Legend and `Volume_in_m3` in Values.
  3. View the percentage split of materials (Concrete, Steel, Masonry) instantly.

- **Matrix Table (Hierarchical Quantity Takeoff):**  
  1. Insert a **Matrix** visual.
  2. Add `Attributes.Class` to Rows, `PropertySets.Materials_and_Finishes.Structural_Material` beneath it for hierarchy, and `Volume_in_m3` to Values.
  3. Drill down to detail-level quantities for each element-class and material combination.

These visuals turn raw IFC data into actionable insights, aiding in material planning, cost estimation, and overall BIM-based project decision-making.



![In Power BI: Create visuals to analyze IFC file](/_media/in-powerbi-app-create-visuals-to-analyze-ifc-file.png)
