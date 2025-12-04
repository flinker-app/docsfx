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

All options rely on standard **Power BI** and **Microsoft Entra ID (Azure AD)** security. Flinker BIM Apps for Microsoft 365 never bypasses these mechanisms, and all project data remains in your Microsoft 365 tenant.

## Scope and constraints

Typical requirements:

- Share interactive IFC-based reports with external stakeholders
- Enforce strong access control per project/client
- Avoid anonymous “public links” for confidential data
- Stay compliant with Microsoft licensing and governance

Security constraint:

- **Do not** use *Publish to web* for confidential model or project data. It creates an unauthenticated, public endpoint.  
  See [Publish to web from Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-publish-to-web).



## Option 1 (default): Microsoft Entra B2B guest sharing

External viewers are invited as **guest users** into your tenant and consume reports directly in Power BI.

Core pattern:

1. Publish reports with the Flinker IFC Viewer to a workspace.
2. Invite external users as **Entra B2B guests**.
3. Share either:
   - the report, or  
   - an **App** based on that workspace.
4. Guests sign in with their Microsoft or corporate account.

Reference:  
[Distribute Power BI content to external guest users with Microsoft Entra B2B](https://learn.microsoft.com/en-us/fabric/enterprise/powerbi/service-admin-entra-b2b).

**Licensing (high level)**

- Publisher: **Power BI Pro** or **Premium Per User (PPU)**.
- Guests:  
  - Use their own Pro/PPU license (BYOL), or  
  - When the report’s workspace is in a **Power BI Premium** or **Fabric** capacity, guests can view content **without a paid Pro/PPU license** (a free Fabric/Power BI license and a Power BI account are still required, and access must follow the B2B licensing rules for external users).


- Guests:
  - Use their own Pro/PPU license (BYOL), or
  - View without license when workspace is in **Premium / Fabric capacity** (per capacity licensing).

This is the recommended default for use cases when companies want to share their work with clients, contractors, partners etc. with a finite number of named external users per client.



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

For broader guidance on distribution patterns, see  
[Power BI implementation planning: Content distribution and sharing](https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-content-distribution-sharing).


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

