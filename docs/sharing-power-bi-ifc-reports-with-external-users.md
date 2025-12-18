---
title: Share Power BI IFC Reports with External Users (Secure Options)
description: Learn secure, supported ways to share Power BI reports that use the Flinker IFC Viewer for Power BI with external stakeholders—covering Entra B2B guest access, SharePoint/Teams embedding, Power BI Embedded, and when Publish to web is appropriate.
slug: sharing-power-bi-ifc-reports-with-external-users
summary: Secure sharing models for Power BI IFC reports: Entra B2B guests, SharePoint/Teams embedding, Power BI Embedded (app-owns-data), and Publish to web for demo-only.
keywords:
  - Power BI
  - IFC
  - BIM
  - Flinker IFC Viewer
  - external sharing
  - guest users
  - Microsoft Entra ID
  - Azure AD
  - SharePoint Online
  - Microsoft Teams
  - Power BI Embedded
  - Fabric capacity
  - governance
  - licensing
tags:
  - power-bi
  - ifc
  - bim
  - sharing
  - security
  - embedded
canonical_url: https://flinker.app/docs/sharing-power-bi-ifc-reports-with-external-users
og:
  title: Share Power BI IFC Reports with External Users (Secure Options)
  description: Secure options for sharing Power BI reports with IFC models using the Flinker IFC Viewer—B2B guests, SharePoint/Teams, Embedded, and demo-only Publish to web.
  type: article
twitter:
  card: summary
  title: Share Power BI IFC Reports with External Users (Secure Options)
  description: Secure sharing models for Power BI IFC reports: B2B guests, SharePoint/Teams, Embedded, and demo-only Publish to web.
ms.date: 2025-12-04
author: Flinker Team
---


# Sharing Power BI IFC reports with external users

This article summarizes the supported ways to share Power BI reports that use the **Flinker IFC Viewer for Power BI** with external viewers (clients, partners, contractors).

All options rely on standard **Power BI** and **Microsoft Entra ID (Azure AD)** security. The Flinker BIM Apps for Microsoft 365 never bypass these mechanisms, and all project data remains in your Microsoft 365 tenant.

## Scope and constraints

Typical requirements:

- Share interactive IFC-based reports with external stakeholders
- Enforce strong access control per project/client
- Avoid anonymous “public links” for confidential data
- Stay compliant with Microsoft licensing and governance

Security constraint:

- **Do not** use *Publish to web* for confidential model or project data. It creates an unauthenticated, public endpoint.  
  See [Publish to web from Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web).

## Background: standard sharing options in Power BI Service

Power BI Service provides several ways to share reports (see the official overview in Microsoft Learn): See [Collaborate and share Power BI reports and dashboards](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards) for the full Microsoft overview.


1. **Direct share (Share button)**
   - Publish the report to a workspace.
   - Use **Share** and enter email addresses (including external B2B guests).
   - Recipients sign in to Power BI and view the report in the browser.
   - Requirements:
     - Sender: Power BI Pro or PPU
     - Recipients: Pro/PPU, or workspace on Premium/Fabric capacity.

2. **Workspaces and Apps**
   - Reports live in a workspace.
   - You build an **App** on top of that workspace and assign it to users or groups.
   - Good for distributing many reports in a clean package.
   - Works for external guests when B2B sharing is enabled.

3. **Embed in SharePoint Online**
   - Use **File → Embed report → SharePoint Online** to get an embed URL.
   - Add the **Power BI web part** in SharePoint and paste the URL.
   - The report respects permissions and RLS; users must sign in.

4. **Embed in Microsoft Teams**
   - Similar to SharePoint: add the report as a tab in a Team/channel.
   - Only signed-in users with permissions can see the content.

5. **Publish to web (public embedding)**
   - Creates a public link or iframe that anyone can open without a login.
   - Only suitable for non-confidential, public data (marketing, demo, open data).

6. **Power BI Embedded / secure embed**
   - Use a Fabric/Premium/Embedded capacity and embed reports into your own web app or portal.
   - Authentication is handled by your application; Power BI is the rendering backend.
   - End users do not need individual Power BI licenses; you pay by capacity.


## Option 1 (default): Microsoft Entra B2B guest sharing

External viewers are added as **guest users** to your tenant and consume reports directly in Power BI.

Core pattern:

1. Publish reports with the Flinker IFC Viewer to a workspace.
2. Invite external users as **Microsoft Entra B2B guests**.
3. Share either:
   - the report, or  
   - an **App** based on that workspace.
4. Guests sign in with their Microsoft or corporate account.

Reference:  
[Distribute Power BI content to external guest users with Microsoft Entra B2B](https://learn.microsoft.com/en-us/fabric/enterprise/powerbi/service-admin-entra-b2b).

### Minimal B2B flow

1. Power BI admin enables external/B2B sharing (“Invite external users to your organization” in the Power BI admin portal).
2. Create a workspace and publish your IFC reports.
3. Configure RLS if you serve multiple clients from one workspace.
4. Invite client users as Microsoft Entra B2B guests (planned invite or ad-hoc invite).
5. Share the report or App with those guests; they receive an email and sign in to view the report.

### Simple external sharing with the Share button

For most projects, you can share reports with external clients directly from the **Share** dialog:

1. Publish the report to a workspace (Pro/PPU or Premium/Fabric capacity).
2. In the report, select **Share → Specific people**.
3. Enter the client’s email address (corporate or Microsoft account) and select **Send**.
4. The client receives an email, accepts the invitation, signs in, and can open the report link.

**Important technical details**

- Standard secure external sharing in Power BI (using the Share/App dialogs) uses **Microsoft Entra B2B** under the hood. 
- When you share to an external email, Power BI sends a Microsoft Entra B2B invitation and creates a guest user account in your tenant when the invitation is sent. After the user accepts (redeems) the invitation, the guest account moves out of "pending acceptance" and can sign in to access the shared content (assuming external sharing and invitations are allowed). [Learn](https://learn.microsoft.com/en-us/entra/external-id/user-properties)
- You do **not** need to pre-create guest accounts manually in Entra ID. 
- Clients must always sign in (no password-only link); anonymous access is only possible with *Publish to web*, which must not be used for confidential IFC or project data. 

**Licensing (high level)**

- Publisher: **Power BI Pro** or **Premium Per User (PPU)** is required to invite and share with guests.
- Guests:
  - Can use their own Power BI Pro or Premium Per User (PPU) license from their home tenant (“bring your own license”, BYOL) when both tenants are in the same Microsoft Azure cloud. In cross-cloud B2B scenarios, BYOL isn’t supported and the provider tenant must assign a Power BI Pro or PPU license to the guest. [Learn](https://learn.microsoft.com/en-us/entra/external-id/faq)
  - When the workspace is in a Power BI Premium per capacity (P) workspace or in a Fabric capacity with an F64 (or larger) SKU, guests can view the content without a paid Pro or Premium Per User (PPU) license, as long as they have a Microsoft Fabric/Power BI Free license and at least the Viewer role on the workspace. On Fabric capacities smaller than F64, guests (like internal users) still need a Pro, PPU, or trial license to view Power BI content outside their own My workspace.

This is the recommended default for scenarios where companies want to share reports with clients, contractors, or partners and have a finite number of named external users per client.


## Option 2: SharePoint / Teams portal with embedded reports

Reports are embedded into a SharePoint site or Teams channel; access is still governed by Entra ID.

Pattern:

- Use the **Power BI web part** in SharePoint Online or a **Power BI tab** in Teams.
- Add external users as guests to the SharePoint site or Team.
- Permissions on the report align with workspace and RLS settings.

Reference:  
[Embed a report web part in SharePoint Online](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-embed-report-spo).

Use this when you already operate project portals on SharePoint/Teams and want a portal-like experience for mixed internal/external audiences.



## Option 3: Power BI Embedded (app-owns-data) – custom client portal

Reports are surfaced through a **custom web application** (client portal). End users authenticate only against your app; Power BI is used as a backend.

Pattern:

1. Build a web app (e.g. “Client Portal”) with its own identity store and access model.
2. The app authenticates to Power BI using a **service principal**.
3. The backend issues **embed tokens** for specific reports/datasets.
4. The front end renders the report with the Flinker IFC Viewer via `<iframe>` or a client library.

References:

- [Power BI embedded analytics overview](https://learn.microsoft.com/en-us/power-bi/developer/embedded/embedded-analytics-power-bi)  
- [Embed Power BI content in your application for your customers](https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-sample-for-customers)

Characteristics:

- Best UX for large numbers of external viewers and white-label portals.
- Requires engineering effort and **capacity-based licensing** (Power BI Embedded / Fabric capacity).
- No individual Power BI licenses for end viewers.



## Option 4: Publish to web (demo and public data only)

*Publish to web* exposes a report via a public, unauthenticated URL or iframe.

Reference:  
[Publish to web from Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web).

Use only for:

- Public demo content,
- Marketing examples,
- Training reports with synthetic or anonymized data.

Never use this option for real client projects, IFC models, or any confidential building data.



## Option selection summary

| Scenario                                                 | Recommended option                          |
|----------------------------------------------------------|---------------------------------------------|
| Named external users per client (e.g. typical service providers)     | **Entra B2B guest sharing (report/App)**    |
| Existing SharePoint/Teams project portal                 | **SharePoint/Teams embedding + B2B guests** |
| Branded SaaS-style client portal for many clients/users  | **Power BI Embedded (app-owns-data)**       |
| Public sample or marketing report                        | **Publish to web (demo only)**              |

In all secure options (B2B, SharePoint/Teams, Embedded), the **Flinker IFC Viewer** runs entirely inside your Power BI environment and your Microsoft 365 tenant. Flinker does not host or store your reports or IFC models.


## Next steps

- Decide which sharing model matches your client base and licensing strategy.
- Ensure your Power BI admin has enabled external sharing where required. See  
  [Distribute Power BI content to external guest users with Microsoft Entra B2B](https://learn.microsoft.com/en-us/fabric/enterprise/powerbi/service-admin-entra-b2b).
- For broader planning around distribution, see  
  [Power BI implementation planning: Content distribution and sharing](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-distribution-sharing).

For architecture guidance specific to your organization or for help designing a client portal around the Flinker IFC Viewer, please contact the Flinker team.

### Need Help?

> [!div class="nextstepaction"]
> [Talk to us](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

