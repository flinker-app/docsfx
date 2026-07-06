---
title: Load complete IFC data with the Power BI data extension
description: Install the extended IFC data connector for Power BI to load attributes, property sets, quantities, materials, and classifications from IFC models.
keywords: IFC, Power BI, data extension, MEZ, property sets, quantity sets, BIM data
canonical_url: https://docs.flinker.app/docs/ifc-viewer-data-extension-for-power-bi.html
---

# Load complete IFC data with the Power BI data extension

The standard IFC Viewer sample query is optimized to load geometry and core element fields for the visual. Install the IFC connector (`.mez`) when you also need IFC metadata for reporting, QA checks, quantity takeoff, materials, classifications, cost data, or schedule joins.

<video controls style="width: 100%; max-width: 720px; border-radius: 6px; margin: 12px 0;">
  <source src="/_media/Pbi_FolderPath_loading.mp4" type="video/mp4">
</video>

## Advantages

### Reporting advantages

- Load many IFC models from one folder instead of adding each file path manually.
- Include nested project folders by setting `Subfolders` to `TRUE`.
- Build reports from IFC properties, quantities, materials, classifications, and building metadata.
- Use the same loaded data for filters, slicers, color rules, QA checks, quantity takeoff, cost reports, and schedule joins.
- Keep reports lighter when needed by setting `Fullproperties` to `FALSE`.

### Advantages of the .mez connector

- Give report authors a Power BI connector in **Get Data** instead of asking them to maintain long Power Query code.
- Help teams use the same IFC loading logic across reports and workstations.
- Deploy and update one `.mez` connector package for Power BI Desktop users.
- Keep license access in the connector sign-in flow instead of adding connector-specific setup steps to every report.

## What you get with the connector

The connector adds two capabilities to the AppSource sample report: folder loading and complete IFC data for reporting in Power BI.

### Folder and subfolder loading

- Use a folder path in `Filepath` to load all `.ifc` files from a SharePoint or local folder.
- Set `Subfolders` to `TRUE` to include `.ifc` files from nested folders.
- Use `Filepath2` and `Filepath3` for additional direct IFC file paths.

### Complete IFC data for reporting

Set `Fullproperties` to `TRUE` to load detailed IFC data into the `IFC` table. The connector adds these reporting fields when the data exists in the IFC model:

- Element data includes `Name`, `Description`, `ObjectType`, `PredefinedType`, `Tag`, `LongName`, `Type Name`, `Entity`, `Building Storey`, and `Building Name`.
- Element dimensions and placement data includes `ObjectPlacement`, `Representation`, `CompositionType`, `InteriorOrExteriorSpace`, `OverallWidth`, and `OverallHeight`.
- Property set data includes `Property Set Name`, `Property Name`, and `Property Value`.
- Quantity data includes `Quantity Set Name`, `Quantity Name`, and `Quantity Value`.
- Material data includes `Material Layer Set Name`, `Material Name`, `Material Layer`, and `Material Thickness`.
- Classification data includes `Classification Name` and `Classification Identification`.

Use this data for Power BI tables, slicers, filters, color rules, QA checks, quantity takeoff, cost reports, and schedule joins. Keep `Fullproperties` set to `FALSE` when you only need the standard viewer data or when the connector is not installed.

## How to use

### Install the connector (.mez)

1. Download the latest IFC connector package (`.mez`).
2. Copy the file to `%USERPROFILE%\Documents\Power BI Desktop\Custom Connectors`. Create the `Custom Connectors` folder if it does not exist yet.
3. Start Power BI Desktop and open **File** > **Options and settings** > **Options**.
4. Under **Security**, scroll to **Data extensions** and choose **(Not recommended) Allow any extension to load**.
5. Confirm the warning, close the dialog, and restart Power BI Desktop so the connector is loaded.

> [!NOTE]
> Microsoft documents the custom connector process in the [Power BI data connector extensibility guide](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-connector-extensibility#custom-connectors). Follow those prerequisites if your organization enforces additional security policies.

### Connect and sign in

1. Restart Power BI Desktop to ensure the connector is loaded.
2. Go to **Home** > **Get Data** > **More** in Power BI Desktop.
3. Search for "IFC" in the Get Data dialog.
4. Select **IFC** from the results, then select **Connect**.
5. In the **IFC file connector** dialog, go to **Feed Key**, paste your license key into **Account key**, and select **Connect**.

   ![Screenshot of IFC connector license key sign-in dialog](/_media/insert-power-bi-ifc-connector-key.png)

6. When prompted, enter the IFC file URL, SharePoint folder path, or local folder path you want to load. The connector supports single `.ifc` files and folders that contain `.ifc` files.
7. If accessing SharePoint content, sign in with your Microsoft 365 organizational account when prompted.
8. Choose **Transform Data** to modify the query or **Load** to import directly.

After loading, you can reference the connector columns directly in visuals, build relationships to master data tables, or create calculated tables for specialized reporting.

> [!TIP]
> The connector returns one row for each extracted item. The same `GlobalId` can appear on multiple rows when an element has several properties, quantities, materials, or classifications. Use grouping or summarizing in Power Query or DAX when you need one row per element for charts or slicers.

### Load folders and subfolders

In the current AppSource sample report, direct IFC file paths work in `Filepath`, `Filepath2`, and `Filepath3` without the connector. Folder loading and subfolder loading require the IFC connector (`.mez`) and Pro features. The `Subfolders` parameter works after the connector is installed.

1. In Power BI Desktop, open **Home** > **Edit parameters**.
2. Paste a folder path into `Filepath`.
3. Leave `Subfolders` set to `FALSE` to load only IFC files directly in that folder.
4. Set `Subfolders` to `TRUE` to also load IFC files from nested folders.
5. Select **OK**, then apply the changes.

Use `Filepath2` and `Filepath3` for additional direct IFC file paths. For folder loading, use `Filepath`.

### Enable complete IFC data

The AppSource sample report includes the `Fullproperties` parameter. Use this parameter to control whether the report loads the standard viewer data or the complete IFC metadata.

1. Install the IFC connector (`.mez`).
2. Open **Home** > **Edit parameters**.
3. Set `Fullproperties` to `TRUE`.
4. Select **OK**, then apply the changes.

Keep `Fullproperties` set to `FALSE` when you only need the standard viewer data or when the connector is not installed.
