---
title: Deploy IFC Viewer Visual for Power BI across your organization
description: Learn how a Fabric administrator deploys IFC Viewer through organizational visuals or allows users to add it from AppSource.
keywords: Power BI, IFC Viewer, organizational visuals, AppSource visuals, organization-wide deployment, Fabric administrator
canonical_url: https://docs.flinker.app/docs/ifc-viewer-installation-for-power-bi.html
---

# Deploy IFC Viewer Visual for Power BI across your organization

Choose how users in your organization get the IFC Viewer Visual. You can deploy it centrally through organizational visuals or allow users to add it themselves from AppSource.

> [!IMPORTANT]
> A Fabric administrator deploys the visual. For Enterprise licensing, report creators must [add the license key to the report](ifc-viewer-license-key-for-power-bi.md).

## Option 1: Add IFC Viewer to organizational visuals

Use this option to approve the visual centrally and make it available in the Visualizations pane for everyone in your organization.

1. Sign in to the [Fabric admin portal](https://app.fabric.microsoft.com/admin-portal).
2. Select **Organizational visuals**.
3. Select **Add visual** > **From AppSource**.
4. Search for **Open IFC Viewer**.
5. Confirm that the publisher is **Flinker GmbH**, and then select **Add**.
6. Select the added visual, and then select **Enable for Visualization Pane**.
7. Allow time for the change to reach users. Ask users who already have Power BI Desktop open to restart it.

![Screenshot of adding the IFC Viewer from AppSource to organizational visuals](/_media/add-ifc-viewer-to-organizational-visuals.png)

<a id="2-enable-custom-visual-imports"></a>

## Option 2: Allow users to add IFC Viewer from AppSource

Use this option if your organization wants to use IFC Viewer without adding it to organizational visuals.

1. Sign in to the [Fabric admin portal](https://app.fabric.microsoft.com/admin-portal).
2. Select **Tenant settings** > **Power BI visuals**.
3. Expand **Allow visuals created using the Power BI SDK**.
4. Select **Enabled**.
5. Choose the entire organization or the security groups that should be allowed to add AppSource visuals.
6. Select **Apply**.

![Screenshot of allowing visuals created with the Power BI SDK](/_media/allow-visuals-created-using-the-power-bi-sdk.png)

The tenant setting applies to the Power BI service. If your organization controls custom visuals in Power BI Desktop through Group Policy, allow them for the intended users there as well.

Users can then [add IFC Viewer from AppSource](ifc-viewer-usage-for-power-bi.md#if-your-organization-has-not-deployed-the-visual).

## Get the Enterprise license key

Authorized administrators can view the Enterprise license key in the [Flinker billing portal](https://billing.stripe.com/p/login/dRm9AS1Ue8he8sAfzhcZa00). Share the key with report creators through your organization's approved internal channel.

## Verify the deployment

1. Sign in to Power BI Desktop with a user account from your organization.
2. For option 1, confirm that the IFC Viewer icon appears in the Visualizations pane.
3. For option 2, confirm that the user can find **Open IFC Viewer** under **Get more visuals** > **AppSource visuals**.
4. Add the visual to a test report and confirm that the IFC model loads.

For report configuration, see [Use the 3D IFC Viewer with Power BI](ifc-viewer-usage-for-power-bi.md). For the security review, see [Power BI architecture and data protection](ifc-viewer-power-bi-architecture-and-data-protection.md).
