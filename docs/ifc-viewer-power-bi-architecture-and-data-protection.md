---
title: IFC Viewer Visual for Power BI architecture and data protection
description: Review data processing, external domains, permissions, and security controls for the IFC Viewer Visual for Power BI.
keywords: Power BI, IFC Viewer, architecture, data protection, security, permissions, external domains
canonical_url: https://docs.flinker.app/docs/ifc-viewer-power-bi-architecture-and-data-protection.html
ms.date: 2026-07-20
---

# IFC Viewer Visual for Power BI architecture and data protection

The IFC Viewer Visual is designed to keep IFC model content and report data within Power BI. Existing Power BI permissions continue to control access, while administrators retain control over external connections, browser storage, and exports.

## Keep project data within Power BI

- The visual processes IFC model content and report data within the Power BI client session.
- IFC geometry, properties, and Power BI report datasets are not sent to Flinker for model processing.
- Your Power BI workspace, semantic model, and source permissions continue to control access to reports and data.
- HTTPS protects connections to external services.

Flinker may receive limited technical metadata required for licensing, support, and anonymized usage analytics. This metadata can include the tenant ID and, when required, the user's email address. It does not include IFC content, model geometry, project documents, or Power BI dataset values. For details, see [Architecture and data protection](ifc-viewer-architecture-and-data-protection.md#transmission-of-technical-metadata).

## Use controlled external connections

The visual uses a defined set of external domains for viewer resources, licensing, help, and optional feedback. If your organization filters browser traffic, review these domains:

| Domain | Purpose |
|---|---|
| `viewer.flinker.app` | Loads the Flinker viewer core and static assets. |
| `api.flinker.app` | Provides Flinker API and licensing services. |
| `docs.flinker.app` | Opens product documentation and help. |
| `unpkg.com` | Loads public JavaScript and CDN resources. |
| `api.simplesvg.com` | Loads interface icons. |
| `api.iconify.design` | Loads interface icons. |
| `forms.office.com` | Opens optional feedback forms and surveys. |

Static resource requests do not include IFC model content or Power BI dataset values. This separation allows the visual to load its interface and services without transferring project data for model processing.

## Retain administrator control

| Capability | Use |
|---|---|
| External service access | Loads viewer assets, API services, icons, documentation, and optional feedback forms. |
| Browser local storage | Stores visual settings or temporary data in the user's browser. |
| Content export | Allows users to export supported content, such as images or SVG files, when downloads from custom visuals are enabled. |

Administrators manage browser local storage and custom visual downloads under **Tenant settings** > **Power BI visuals** in the Fabric admin portal. These controls let you align the visual with your organization's security and data-export policies.

## Security benefits

- IFC model content and report datasets remain under your Power BI and Microsoft 365 governance controls.
- Flinker does not host IFC model files, project documents, or Power BI report datasets.
- Existing Power BI workspace and source permissions determine who can access each report and its data.
- External connections use HTTPS and have specific, documented purposes.
- Fabric tenant settings provide central control over browser storage and supported exports.
