---
title: Load Complete IFC Attributes with the Power BI Data Extension
description: Install the extended IFC data connector for Power BI to load attributes, property sets, and quantity sets from your models.
keywords: IFC, Power BI, data extension, MEZ, property sets, quantity sets, BIM data
canonical_url: https://docs.flinker.app/docs/ifc-viewer-data-extension-for-power-bi.html
---

# Load Complete IFC Data with the Power BI Data Extension

The standard IFC Viewer sample query focuses on geometry and a few properties. To load the full metadata footprint of your model (attributes, property sets, quantity sets, classifications, and materials), choose one of the following options. Both are valid; pick what fits your environment best.

- Option 1 (recommended for big models): **Use the IFC API** via a parameter in your report.
- Option 2: **Install the IFC connector (.mez)** and use it directly in Power BI Desktop.

## Extended query

With either option enabled, the `IFC` table exposes a richer set of BIM metadata:

- Attribute-level columns (`Attribute Name`, `Attribute Value`, `Classification Name`, `Classification Value`) let you classify and color the model using standard systems or review states.
- Property-set columns (`Property Set Name`, `Property Name`, `Property Value`) surface detailed BIM properties for compliance dashboards, QA checks, or maintenance workflows.
- Quantity columns (`Quantity Name`, `Quantity Set Name`, `Quantity Value`) enable conditional formatting or calculations based on numeric ranges - for example, highlight elements by area or volume brackets.
- Material and layering columns (`Material Layer Set Name`, `Material Name`, `Material Thickness`, `LineData`) capture construction context that you can join to cost or scheduling tables.
- Keep `GUID` and `IFC Chunks` connected to the viewer visual, and use relationships or lookup tables when you model attributes separately for reporting.

## Option 1: Use the IFC API (recommended for big models)

When enabled, our IFC API pre-processes and converts IFC into a compact, Power BI-friendly shape before the data reaches your report. This is designed for very large models and premium capacities.

- Optimized conversion for Power Query tables and relationships.
- Faster refresh and smaller in-memory footprint.
- Enables loading models up to 10 GB into a Power BI report.

### Activate in Parameters

1. In Power BI Desktop, open your report and go to **Home** > **Edit Parameters**. The Power BI report is available from your Flinker support team.
2. Set the parameter **Use IFC API** to `TRUE`, then click **OK**.

![Edit Parameters and enable IFC API](/_media/edit-parameters-and-use-ifc-api-in-power-bi.png)

### Sign in (Access Web content)

After enabling the API, Power BI may prompt for credentials to access the IFC API endpoint.

1. In the **Access Web content** dialog, select **Anonymous**.
2. Click **Connect** to continue.

![Access Web content sign-in for IFC API](/_media/sign-in-for-api-for-access-web-content-in-power-bi.png)

After connecting, ensure the IFC API endpoint privacy level is set to "Organizational":
 
1. Set the **Privacy level** to **Organizational**, then click **Save**.

![Set privacy level to Organizational](/_media/privacy-levels-for-api-for-access-web-content-in-power-bi.png)

### Apply changes and refresh data

After configuring the parameters and privacy settings:

1. Click **Apply Changes** if Power BI does not start loading automatically.

> [!NOTE]
> The initial load can take several minutes (or longer for very large models) while the IFC API processes and optimizes the model for Power BI. Once the API has finished processing and the optimized data is stored in the report, subsequent opens or refreshes load much faster.


### When to choose IFC API

- You work with large, complex IFCs and hit memory or refresh limits.
- You want faster refreshes for scheduled or incremental loads.

## Option 2: IFC Connector (.mez)

### Install the connector (.mez)

1. Download the latest IFC connector package (`.mez`). The file is available from your Flinker support team.
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
4. Select **IFC Viewer (Extended)** from the results and click **Connect**.
5. When prompted, enter the IFC file URL or SharePoint folder path you want to load. The connector supports single files and folders.
6. If accessing SharePoint content, sign in with your Microsoft 365 organizational account when prompted.
7. Choose **Transform Data** to modify the query or **Load** to import directly.

After loading, the **IFC** table includes additional columns for:

- **Element context**: building, storey, element names, predefined type, ExpressID, filenames, sizes.
- **Attributes and classifications**: attribute names/values and classification systems applied to the element.
- **Property sets**: property set names with their corresponding property names and values.
- **Quantities**: take-off data such as area, volume, and count per element.
- **Materials**: layer sets, material names, and thickness values.

You can reference these columns directly in visuals, build relationships to master data tables (for example, cost libraries or QA registers), or create calculated tables for specialized reporting.

> [!TIP]
> When multiple attributes exist for the same element, duplicate rows appear (one per attribute/property/quantity). Use grouping or summarizing in Power Query/DAX when you need a pivoted structure for charts or slicers.

### When to choose the MEZ connector

- Your organization prefers local connectors and restricts external web endpoints.
- You need offline development or environments with limited outbound access.

