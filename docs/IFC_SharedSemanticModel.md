---
uid: IFC_SharedSemanticModel
title: IFC Cloud Semantic Model (Power BI)
description: Publish your own IFC semantic model in Power BI Service to automate IFC model parsing in the cloud, schedule refresh against SharePoint sources, and reuse the model across multiple Power BI reports.
keywords: Power BI semantic model, IFC semantic model, SharePoint IFC, automate IFC parsing, cloud refresh Power BI, Power BI parameters, shared dataset, thin report, BIM Power BI
canonical_url: https://docs.flinker.app/docs/IFC_SharedSemanticModel.html
---

# IFC Cloud Semantic Model

## What is it?

The **IFC Cloud Semantic Model** is a reusable Power BI dataset pattern that loads IFC files directly from SharePoint, parses them in the cloud, and exposes the result as a shared model that any number of Power BI reports can connect to.

You publish the template into your own Power BI Service workspace, point its parameters at your SharePoint locations, and let Power BI Service handle refresh on a schedule. The IFC parsing is fully automated in the cloud — you no longer need to open Power BI Desktop and click **Refresh** every time the IFC model changes.

For an end-to-end usage example of the IFC multi-file loading pattern this model is built on, see [IFC Multi-File Loading & Coloring Sample (Power BI)](IFC_Multi_File_Loading.md).

## Why use a cloud semantic model?

Compared to running IFC parsing manually inside a single `.pbix` on your Desktop, the cloud semantic model gives you:

- **Automated IFC parsing in the cloud** — Power BI Service refreshes the model on a schedule (daily, hourly, or on-demand). No Desktop session required, no manual refresh clicks.
- **Single source of truth** — one place to maintain the IFC loading logic, relationships, and measures.
- **Reusability across reports** — multiple thin reports (executive overview, QA dashboard, cost dashboard, etc.) all connect live to the same model.
- **Smaller, faster reports** — thin reports contain only visuals, no embedded data, so they open faster and are easier to maintain.
- **Consistent measures** — KPIs and DAX calculations are defined once and behave identically across every report built on the model.

## Prerequisites

| Requirement | Notes |
|---|---|
| **Power BI Pro license** (or PPU / Premium capacity) | Required to publish and consume shared semantic models |
| A **Power BI workspace** you can publish to | A standard workspace in your own organization is fine |
| An **IFC source on SharePoint** | Either direct file URLs or a folder URL containing `.ifc` files |
| The **Flinker IFC `.pbix` template** | Available on the [Flinker IFC Viewer page on Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer?src=docs&mktcmpid=ifc_power_pi) |
| **Power BI Desktop** installed | Used once for the initial setup; not needed afterwards |

## How to set up your own cloud semantic model

This is a one-time setup. After it is complete, refresh runs automatically in the cloud and you only return to Desktop if you want to change the model logic itself.

### Step 1 — Download the PBIX template

Download the Flinker IFC `.pbix` template from the [Flinker IFC Viewer page on Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer?src=docs&mktcmpid=ifc_power_pi), then open it in **Power BI Desktop**.

### Step 2 — Configure the parameters in Desktop

In Power BI Desktop, click **Home → Transform data → Edit parameters**.

In the **Edit Parameters** dialog:

1. Paste your SharePoint URLs into `FilePath`, `FilePath2`, and `FilePath3` (or as many as your scenario needs).
2. Set `Subfolders` to `true` if a folder-style parameter should scan subfolders, otherwise leave it `false`.
3. Click **OK**.
4. Click **Home → Refresh** to confirm the parameters resolve correctly against your SharePoint.

> **Tip:** Use the **direct file URL** for individual `.ifc` files, or a **folder URL** if the parameter is meant to scan a whole folder. The account that owns the published model later must have read access to these locations.

### Step 3 — Publish to your Power BI Service workspace

In Power BI Desktop, click **Home → Publish → Select a destination → [Your workspace] → Select**.

After the upload finishes, the model appears in the workspace as a **semantic model**, alongside the report on top of it.

### Step 4 — Configure data source credentials

This step enables cloud refresh. Without it, scheduled refresh will fail.

In Power BI Service, navigate to **Workspaces → [Your workspace] → [Your semantic model] → ⋯ (More options) → Settings → Data source credentials → Edit credentials**.

For each listed data source (typically SharePoint):

1. Set **Authentication method** to **OAuth2**.
2. Set **Privacy level** to **Organizational**.
3. Click **Sign in** and authenticate with an account that has read access to the IFC files.

### Step 5 — Set up scheduled refresh (the cloud automation)

This is the step that automates IFC parsing in the cloud. Once configured, Power BI Service parses your IFC files on its own — no Desktop session, no manual clicks.

In the same **Settings** panel for the semantic model, scroll down to **Scheduled refresh**:

1. Toggle **Keep your data up to date** to **On**.
2. Set the **Refresh frequency** (Daily or Weekly on Pro; up to 48× daily on Premium).
3. Choose the correct **Time zone** and add one or more **Time** slots that match how often your IFC files change.
4. Add at least one address under **Send refresh failure notifications to** so failed refreshes do not go unnoticed.
5. Click **Apply**.

From this point on, Power BI Service handles IFC parsing for you on the schedule you set.

> If you see a yellow warning that scheduled refresh is not supported, see the troubleshooting section below.

### Step 6 — Build thin reports on top of the model

You and anyone with **Build** permission on the model can now create reports that live entirely on top of this single model.

**From Power BI Service:** click **Workspace → + New → Report → Pick a published semantic model → [Your IFC semantic model] → Create**.

**From Power BI Desktop:** click **Home → Get data → Power BI semantic models → [Your IFC semantic model] → Connect**.

The connection is **live** — no data is downloaded into the `.pbix`. Build the visuals and click **Home → Publish** to publish the thin report to a workspace.

## Updating IFC sources later

After the initial setup, parameter updates are the most common ongoing task. You can do them directly in Power BI Service — no Desktop required.

### Option A — Edit parameters directly in Service (recommended)

In Power BI Service, navigate to **Workspaces → [Your workspace] → [Your semantic model] → ⋯ (More options) → Settings**.

1. If you are not the current owner of the model, click **Take over** at the top of the settings panel. (If you published the model yourself and no one has taken it over since, you are already the owner and this button will not appear.)
2. Expand **Parameters**.
3. Edit the values for `FilePath`, `FilePath2`, `FilePath3`, or `Subfolders`.
4. Click **Apply**.
5. Go back to the model page and click **Refresh now** (the circular arrow icon) to apply the change immediately, or wait for the next scheduled refresh to pick it up.

> **Take over** transfers ownership of the same model to your account — it does not create a copy. Subsequent refreshes will use your credentials, and any further changes are attributed to you.

### Option B — Re-publish from Desktop

If you need to change something deeper than parameters (relationships, measures, or the M code itself), open the original `.pbix` in Desktop, make the change, and click **Home → Publish → [Your workspace] → Replace**.

## Important notes

- **All reports share the same data.** Every thin report connected to this model sees exactly what the last refresh produced. Use Row-Level Security (RLS) if different audiences need different views.
- **Parameter changes are not live.** After editing parameters, click **Refresh now** if you need the change to appear immediately. Connected reports will then reflect the new data.
- **Take over transfers ownership of the same model — it does not create a copy.** To get an independent copy, publish the `.pbix` again under a different name or to a different workspace.
- **Credentials are tied to the owner.** When ownership changes (Take over or re-publish), the new owner needs to re-authenticate the data sources.
- **External access is per-tenant.** This model lives in your own tenant. Customers, partners, or other organizations who want their own cloud-refreshed IFC model should follow this same setup inside their own tenant.

## Troubleshooting

| Symptom | Likely Cause | What to do |
|---|---|---|
| Publish fails from Desktop | Selected workspace is read-only or you lack permissions | Pick a workspace where you have **Member** or **Contributor** role |
| Scheduled refresh fails with a credentials error | Data source credentials were never set, or have expired | Click **Settings → Data source credentials → Edit credentials** and sign in to each source again |
| Refresh fails with "file not found" or 404 | A `FilePath` parameter points to a SharePoint location the owner cannot read | Open the URL in a browser while signed in as the model owner; correct the parameter and refresh |
| Yellow banner: *"You can't schedule refresh for this semantic model…"* | The IFC parsing query uses `Web.Contents` patterns that Power BI cannot fully introspect for scheduled refresh | Use **Refresh now** for manual refreshes. If you need scheduled refresh, ensure the data source is recognized as a single source (avoid mixing dynamic URLs); on Premium capacity you can also enable enhanced refresh via XMLA |
| **Take over** button is disabled or not visible | You lack **Build** permission on the model, or **Member/Contributor** on the workspace | Ask the workspace admin to grant the required roles |
| Parameter changes do not appear in connected reports | The model has not been refreshed since the change | Open the model page and click **Refresh now**; verify success in **Settings → Refresh history** |
| Newly created report shows no data | The thin report is connected to the wrong model, or the model has never been refreshed | Verify the connection in the report's data source settings; trigger a refresh on the model |
| Refresh is much slower than the Desktop refresh | The cloud is reading IFC files over the network rather than from local disk | This is expected for cloud refresh. Reduce file count, split very large IFC models, or schedule refresh during off-hours |
| Visuals break after a parameter change | The new IFC files have a different structure (missing property sets, different classifications) | Verify the new IFC files match the schema expected by the model, or republish a Desktop version that handles both |

## Related

- [IFC Multi-File Loading & Coloring Sample (Power BI)](IFC_Multi_File_Loading.md)
- [Flinker IFC Viewer on Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer?src=docs&mktcmpid=ifc_power_pi)
- [Live sample semantic model on Power BI Service](https://app.powerbi.com/onelake/details/db7b4b0b-8ec6-4f90-925e-113e4aa1c4ee/dataset/e0ccf3e9-b859-493c-aa72-5f8531654a86/overview?experience=power-bi)

