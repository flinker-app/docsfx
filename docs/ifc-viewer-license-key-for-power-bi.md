---
title: Add an Enterprise license key to IFC Viewer Visual for Power BI
description: Learn how to add a Flinker Enterprise tenant license key to the IFC Viewer Visual for Power BI.
keywords: Power BI, IFC Viewer, Enterprise license key, tenant license, activation, Flinker
canonical_url: https://docs.flinker.app/docs/ifc-viewer-license-key-for-power-bi.html
---

# Add an Enterprise license key to IFC Viewer Visual for Power BI

Use this procedure if your organization has selected Enterprise in the [Power BI IFC Viewer pricing and plans](https://flinker.app/products/power-bi-ifc-viewer/#pricing-title) and received a tenant license key from Flinker. Entering your license key enables enhanced capabilities within your Power BI reports.

## Get your Enterprise license key

Get the Enterprise license key from your organization's administrator. Administrators can [retrieve the key from the billing portal](ifc-viewer-installation-for-power-bi.md#get-the-enterprise-license-key).

> [!NOTE]
> License keys are bound to your subscription. Contact Flinker support again if you need to move the key to another tenant or if it should be revoked.

## Enter the license key in Power BI Desktop

1. Open the report in Power BI Desktop and select the **IFC Viewer** visual.
2. In the **Visualizations** pane, switch to **Format visual**.
3. Expand **License** > **Activation** and paste the key into **License key**.
4. The visual reloads and activates the Enterprise tenant license.

![Enter the license key in the Format visual pane](/_media/set-license-key-in-power-bi-visual.png)

> [!NOTE]
> Enter the Enterprise license key for every new IFC Viewer visual that you add to a report.

## Publish to the Power BI service

- Publish or update the report after entering the key. The activation travels with the report.
- If the key changes later, open the report in Desktop, update the key, and republish so that the service receives the new activation.
