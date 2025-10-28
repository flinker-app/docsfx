---
title: Load Complete IFC Attributes with the Power BI Data Extension
description: Install the extended IFC data connector for Power BI to load attributes, property sets, and quantity sets from your models.
keywords: IFC, Power BI, data extension, MEZ, property sets, quantity sets, BIM data
canonical_url: https://docs.flinker.app/docs/ifc-viewer-data-extension-for-power-bi.html
---

# Load Complete IFC Properties with the Power BI Data Extension

The standard IFC Viewer sample query focuses on geometry and a property sets. Install the **extended data connector** (`.mez`) when you want Power BI to pull the full metadata footprint of your model - attributes, property sets, quantity sets, classifications, and materials. The connector enriches the primary `IFC` table.

## Extended query

Once you install the extended connector described in this article, the same `IFC` table exposes a much richer set of BIM metadata.

- Attribute-level columns (`Attribute Name`, `Attribute Value`, `Classification Name`, `Classification Value`) let you classify and color the model using standard systems or review states.
- Property-set columns (`Property Set Name`, `Property Name`, `Property Value`) surface detailed BIM properties for compliance dashboards, QA checks, or maintenance workflows.
- Quantity columns (`Quantity Name`, `Quantity Set Name`, `Quantity Value`) enable conditional formatting or calculations based on numeric ranges - for example, highlight elements by area or volume brackets.
- Material and layering columns (`Material Layer Set Name`, `Material Name`, `Material Thickness`, `LineData`) capture construction context that you can join to cost or scheduling tables.
- Keep `GUID` and `IFC Chunks` connected to the viewer visual, and use relationships or lookup tables when you model attributes separately for reporting.

## Install the IFC connector (.mez)

1. Download the latest IFC connector package (`.mez`). The file is available from your Flinker support team.
2. Copy the file to `%USERPROFILE%\Documents\Power BI Desktop\Custom Connectors`. Create the `Custom Connectors` folder if it does not exist yet.
3. Start Power BI Desktop and open **File** > **Options and settings** > **Options**.
4. Under **Security**, scroll to **Data extensions** and choose **(Not recommended) Allow any extension to load**.
5. Confirm the warning, close the dialog, and restart Power BI Desktop so the connector is loaded.

> [!NOTE]
> Microsoft documents the custom connector process in the [Power BI data connector extensibility guide](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-connector-extensibility#custom-connectors). Follow those prerequisites if your organization enforces additional security policies.

## Configure the extended query

1. Restart Power BI Desktop to ensure the connector is loaded.
2. Go to **Home** > **Get Data** > **More** in Power BI Desktop.
3. Search for "IFC" in the Get Data dialog.
3. Select **IFC Viewer (Extended)** from the results and click **Connect**.
4. When prompted, enter the IFC file URL or SharePoint folder path you want to load. The connector supports single files and folders.
5. If accessing SharePoint content, sign in with your Microsoft 365 organizational account when prompted.
6. Choose **Transform Data** to modify the query or **Load** to import directly.

After loading, the **IFC** table includes additional columns for:

- **Element context** – building, storey, element names, predefined type, ExpressID, filenames, sizes.
- **Attributes and classifications** – attribute names/values and classification systems applied to the element.
- **Property sets** – property set names with their corresponding property names and values.
- **Quantities** – take-off data such as area, volume, and count per element.
- **Materials** – layer sets, material names, and thickness values.

You can reference these columns directly in visuals, build relationships to master data tables (for example, cost libraries or QA registers), or create calculated tables for specialized reporting.

> [!TIP]
> When multiple attributes exist for the same element, duplicate rows appear (one per attribute/property/quantity). Use grouping or summarizing in Power Query/DAX when you need a pivoted structure for charts or slicers.



