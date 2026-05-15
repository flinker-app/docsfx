---
title: IT Admin Quickstart
description: Deploy all Flinker IFC apps across your Microsoft 365 tenant in the right order.
---

# IT Admin Quickstart

This page covers everything a Microsoft 365 administrator needs to deploy Flinker IFC apps tenant-wide. Follow the steps in order: SharePoint first, then Teams, then Power BI.

## Step 1 - SharePoint: IFC Viewer App

**Who:** SharePoint Administrator  
**AppSource:** [IFC Viewer for SharePoint (WA200006238)](https://appsource.microsoft.com/en-us/product/office/WA200006238)

1. Open your App Catalog: `https://yourdomain.sharepoint.com/sites/appcatalog/_layouts/15/appStore.aspx` (replace `yourdomain` with your tenant domain)
2. Search for **IFC Viewer** and click **Get it now**.
3. Choose deployment scope:
   - **Enable and Add** activates the app and adds it automatically to all existing and new sites.
   - **Only Enable** activates the app; site owners must add it manually per site.

**Trusted Script Sources (required):**  
In SharePoint Admin Center, go to Policies, then App permissions, then Trusted Script Sources, and add `https://viewer.flinker.app`.

## Step 2 - SharePoint: IFC File Handler (Azure AD Consent)

**Who:** Azure AD / Microsoft 365 Global Administrator or Application Administrator

This step enables users to open IFC files directly by clicking filenames in SharePoint or OneDrive, with no separate action required per user.

The File Handler is independent of the SPFx app. It creates one entry in Azure AD under Enterprise Applications with the name **IFC Viewer**. The SPFx app from Step 1 does not create an Azure AD entry as it runs in the SharePoint sandbox.

[**Grant admin consent for the IFC File Handler**](https://login.microsoftonline.com/organizations/v2.0/adminconsent?client_id=c8f57ea5-d1b6-41a7-a2c2-d10e99d97a97&redirect_uri=https%3A%2F%2Fteamsifcviewer.flinker.app%2Fauth-end.html&scope=https://graph.microsoft.com/Files.Read.All%20https://graph.microsoft.com/offline_access%20openid%20profile&state=12345abc)

Permissions requested:

| Permission | Type | Reason |
|---|---|---|
| `Files.Read.All` | Delegated | Read IFC files from SharePoint/OneDrive on behalf of the signed-in user |
| `User.Read` | Delegated | Sign the user in and read basic profile for authentication |

After consent, verify the entry under Azure Active Directory, Enterprise Applications, IFC Viewer. Allow 24 to 48 hours for the file handler to propagate in SharePoint.

## Step 3 - Teams: Org-Wide Deployment

**Who:** Teams Administrator  
**AppSource:** [Open IFC Viewer for Teams (WA200007412)](https://appsource.microsoft.com/en-us/product/office/WA200007412)

The app is certified by Microsoft before publication in the Teams App Store. No additional Azure AD consent is required beyond Step 2.

**Option A - App Setup Policy (recommended for org-wide rollout):**

1. Go to Teams Admin Center, then Teams apps, then Setup policies.
2. Create or edit a policy and add **Open IFC Viewer** to the installed apps list.
3. Assign the policy to all users or specific security groups.

**Option B - Team Templates (for new teams only):**  
Add the IFC Viewer as a pre-configured channel tab in your Team Templates. New teams created from the template will include the tab automatically.

Existing teams and project-specific SharePoint file links inside each IFC Viewer tab must be configured separately, either manually by team owners or via Microsoft Graph automation.

## Step 4 - Power BI: Organisational Visual

**Who:** Fabric Administrator / Power BI Administrator  
**AppSource:** [IFC Viewer for Power BI](https://marketplace.microsoft.com/en-us/product/power-bi-visuals/flinkergmbh1644589155747.ifc-viewer)

1. Go to Fabric Admin Portal, then Organisational visuals.
2. Click Add, then From AppSource.
3. Search for **IFC Viewer** and click Add.
4. Enable **Enable for Visualization Pane** so the visual appears automatically in all users' visualization panel without individual installation.

A license is required for sharing reports in Power BI Service. Power BI Desktop use is free. See [pricing](https://flinker.app/products/power-bi-ifc-viewer/) for tenant-wide licensing options.

## Network and Firewall

| App | Domain | Purpose |
|---|---|---|
| SharePoint IFC Viewer (SPFx) | `https://viewer.flinker.app` | Trusted Script Source, add in SharePoint Admin Center |
| Teams IFC Viewer | `https://teamsifcviewer.flinker.app` | Covered by Teams app configuration |
| Power BI Visual | `https://viewer.flinker.app` | IFC rendering engine |
| Power BI Visual | `https://api.flinker.app` | Licensing and backend API |
| Power BI Visual | `https://billing.stripe.com` | License activation |
| Power BI Visual | `https://marketplace.microsoft.com` | License verification via AppSource |
| Power BI Visual | `https://unpkg.com` | JavaScript dependencies |
| Power BI Visual | `https://docs.flinker.app` | In-visual help links |
| Power BI Visual | `https://api.simplesvg.com` | UI icons |
| Power BI Visual | `https://api.iconify.design` | UI icons |
| Power BI Visual | `https://forms.office.com` | Feedback forms (Microsoft) |

## Azure AD: What Gets Installed Where

| Component | Installation type | Azure AD entry |
|---|---|---|
| IFC Viewer (SharePoint SPFx) | App Catalog package (.sppkg) | None, runs in SharePoint sandbox |
| IFC File Handler | Admin consent via URL | Enterprise Application: IFC Viewer |
| Teams App | Teams App Store | No separate Azure AD entry |
| Power BI Visual | Organisational visuals | No Azure AD entry |

## Data and Compliance

All IFC files, project data, and BIM models are processed client-side in the browser and remain within your Microsoft 365 tenant. No project data is sent to Flinker.

Flinker receives only the tenant ID for authentication and licensing, and anonymised usage analytics with no personal data and no file content.

For full data flow documentation see [Architecture and Data Protection](./ifc-viewer-architecture-and-data-protection.html). For the Data Processing Agreement see [flinker.app/legal/dpa](https://flinker.app/legal/dpa).

## Questions

[Book a technical onboarding call](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/) or email [support@flinker.app](mailto:support@flinker.app).
