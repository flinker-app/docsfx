---
title: Install 3D IFC Viewer for Power BI
description: Clear, step-by-step guide for installing and managing the IFC Viewer in Power BI.
keywords: Power BI, IFC Viewer, Installation, 3D, BIM, Visual
canonical_url: https://docs.flinker.app/docs/ifc-viewer-installation-for-power-bi.html
---

# Install 3D IFC Viewer for Power BI

## 1. Install IFC Viewer from Microsoft AppSource
1. Go to the [IFC Viewer AppSource page](https://appsource.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer).
2. Flollow the **Steps to Use the IFC Viewer in Power BI**.

## 2. Enable Custom Visual Imports (Admins Only)

Only required if your organization currently restricts importing custom visuals. If custom visuals are already allowed, you can skip this step entirely.

1. Sign in as an administrator at [Power BI Admin Portal](https://app.powerbi.com/admin-portal).
2. Under the **Tenant settings**, enable importing custom visuals from AppSource or file.
3. After enabling, users will be able to directly install custom visuals, including the IFC Viewer.

![Allow Custom Visuals](/_media/allow-visuals-created-using-the-power-bi-sdk.png)


## 3. Add IFC Viewer to Organizational Visuals (Admins Only)
Optional step. Use only if you want to centrally deploy IFC Viewer so all users in your organization automatically have access without individual installations.

1. Sign in as an administrator at [Power BI Admin Portal](https://app.powerbi.com/admin-portal).
2. Select **Admin portal** from the left menu.
3. Click **Organizational visuals**.
4. Choose **From AppSource**, search for **IFC Viewer**, and click **Add**.

![Organizational Visuals Screenshot](/_media/add-ifc-viewer-to-organizational-visuals.png)


## 4. Licensing Information

Licensing for the Power BI IFC Viewer Visual is free in Desktop and Publish to Web, but a license is needed for Power BI Online.


| Environment                          | Power BI Visual Licence required?     |
| ------------------------------------ | --------------------------- | ------------------------------------------------ |
| **Power BI Desktop**                 | **No** – always free                             |
| **Power BI Online**                   | **Yes** (blocked until user has a licence)      |
| **Publish to Web**                   | **No** – always free for anonymous viewers |


For detailed information on licensing for Power BI visuals, please refer to the [Power BI Visuals Licensing FAQ](https://learn.microsoft.com/en-us/power-bi/developer/visuals/licensing-faq). This resource provides answers to common questions regarding licensing, distribution, and usage of custom visuals in Power BI.


