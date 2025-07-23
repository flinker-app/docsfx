---
title: IFC Viewer for Microsoft Excel
description: IFC Viewer for Microsoft Excel
keywords: IFC Viewer, Microsoft Excel
canonical_url: https://docs.flinker.app/docs/ifc-viewer-for-microsoft-excel.html
---

# IFC Viewer for Microsoft Excel

<video width="100%" height="auto" autoplay>
  <source src="/_media/excel-ifc-viewer-demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Bring your BIM models directly into Excel with the IFC Viewer add-in, no extra installations or logins required. Easily load, view, and interact with IFC data alongside your tables, then leverage Excel’s powerful workflows and integration with Microsoft 365 services.

## Why choose the IFC Viewer for Excel?

| Feature | Excel IFC Viewer | Standard IFC Viewer |
| ------- |:------------------:|:------------------:|
| No extra software/login |✅|❌|
| Privacy: User controls data storage |✅|❌|
| Link model to external data (cost, schedule) |✅|❌|
| Create 3D views with custom charts & KPIs |✅|❌|
| Integrate with Microsoft 365 (Lists, Excel, SharePoint) |✅|❌|
| Add custom workflows to your data |✅|❌|
| AI-ready data architecture |✅|❌|

## Key Features

- **Direct IFC Viewing**  
  Visualize BIM models within Excel, eliminating the need for external software.

- **Interactive Selection Sync**  
  Instantly synchronize selections between the IFC viewer and Excel worksheets.

- **Advanced Highlighting**  
  Highlight BIM elements directly in Excel based on your viewer selection.

- **Excel Data Integration**  
  Easily export BIM data to Excel sheets, enabling robust data management and analysis.

- **User-Friendly Interface**  
  Simple and intuitive interface makes BIM accessible for Excel users of all skill levels.

## Permissions

The Flinker IFC Viewer Add-in for Microsoft Excel is a task pane add-in that enables users to view and analyze IFC files directly within Excel.

### Required Permissions

The add-in requires the following permission:

- **ReadWriteDocument**  
  The add-in requests the `ReadWriteDocument` permission.  
  This allows the add-in to read from and write to the currently open Excel document.

  > **Note:**  
  > The add-in does *not* have access to any other files, drives, or external storage locations.  
  > Access is strictly limited to the Excel document in which the add-in is installed.

### App Domains

The add-in communicates only with the following domains:

- `https://excel.flinker.app`
- `https://flinker.app`

No other external servers or cloud services are contacted.

### Data Security and Privacy

- No data from your Excel document is transmitted to external parties, except as technically required for the add-in to function (for example, loading add-in components from the Flinker CDN).
- For full details on privacy and security, please refer to our [Architecture and Privacy Overview](https://docs.flinker.app/docs/ifc-viewer-architecture-and-data-protection.html).

### Summary

- **Full (read & write) access only to the currently opened Excel document**
- **No communication with third-party servers outside of Flinker**
- **Highest standards for data privacy and security**


> [!div class="nextstepaction"]
> [Get the App](https://appsource.microsoft.com/en-us/product/office/WA200008867?src=docs&mktcmpid=ifc_excel)