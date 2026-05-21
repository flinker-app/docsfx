---
title: IFC Viewer add-in for Excel
description: View and analyze IFC BIM models directly in Microsoft Excel with synchronized selection and Microsoft 365 workflow support.
keywords: IFC Viewer Add-in for Excel, Microsoft Excel IFC, BIM in Excel, IFC add-in, IFC model analysis, Excel BIM workflow, Microsoft 365 BIM
canonical_url: https://docs.flinker.app/docs/ifc-viewer-for-microsoft-excel.html
---

# IFC Viewer add-in for Excel

<video width="100%" height="auto" autoplay>
  <source src="/_media/excel-ifc-viewer-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Use the IFC Viewer add-in to view BIM models in Excel. Load and inspect IFC data next to workbook tables, then use Excel and Microsoft 365 workflows for analysis and reporting.

## Why choose the IFC Viewer add-in for Excel?

| Feature | IFC Viewer Add-in for Excel | Standard IFC Viewer |
| ------- |:------------------:|:------------------:|
| No extra software/login | ✓ | ✗ |
| Privacy: User controls data storage | ✓ | ✗ |
| Link model to external data (cost, schedule) | ✓ | ✗ |
| Create 3D views with custom charts and KPIs | ✓ | ✗ |
| Integrate with Microsoft 365 (Lists, Excel, SharePoint) | ✓ | ✗ |
| Add custom workflows to your data | ✓ | ✗ |
| AI-ready data architecture | ✓ | ✗ |

## Key features

- **Direct IFC Viewing**  
  View BIM models in Excel without opening a separate BIM authoring tool.

- **Interactive Selection Sync**  
  Synchronize selections between the IFC viewer and Excel worksheets.

- **Advanced Highlighting**  
  Highlight BIM elements directly in Excel based on your viewer selection.

- **Excel Data Integration**  
  Export BIM data to Excel worksheets for analysis and reporting.

- **Excel-first interface**  
  Review model data in an interface familiar to Excel users.

## Permissions

The Flinker IFC Viewer Add-in for Microsoft Excel is a task pane add-in that enables users to view and analyze IFC files directly within Excel.

### Required permissions

The add-in requires the following permission:

- **ReadWriteDocument**  
  The add-in requests the `ReadWriteDocument` permission.  
  This allows the add-in to read from and write to the currently open Excel document.

  > [!NOTE]
  > The add-in does *not* have access to any other files, drives, or external storage locations.  
  > Access is strictly limited to the Excel document in which the add-in is installed.

### App domains

The add-in communicates only with the following domains:

- `https://excel.flinker.app`
- `https://flinker.app`

No other external servers or cloud services are contacted.

### Data security and privacy

- No data from your Excel document is transmitted to external parties, except as technically required for the add-in to function (for example, loading add-in components from the Flinker CDN).
- For full details on privacy and security, see [Architecture and Privacy Overview](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).

### Summary

- **Full read and write access only to the currently opened Excel document**
- **No communication with third-party servers outside of Flinker**
- **Privacy-first processing model**


> [!div class="nextstepaction"]
> [Get the App](https://appsource.microsoft.com/en-us/product/office/WA200008867?src=docs&mktcmpid=ifc_excel)
