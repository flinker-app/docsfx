---
title: FAQs for IFC Viewer Visual for Power BI
description: Answers to licensing, sharing, and embedding questions for the IFC Viewer Visual for Power BI.
summary: Comprehensive FAQs covering licensing, report sharing, embedding, and usage details for the IFC Viewer Visual for Power BI.
slug: faq-for-ifc-visual-in-power-bi
canonical_url: https://docs.flinker.app/docs/faq-for-ifc-visual-in-power-bi.html
lang: en
robots: index,follow
keywords:
  - IFC Viewer Visual for Power BI
  - Power BI
  - custom visual
  - licensing
  - sharing reports
  - embedding
  - Publish to web
  - Azure AD
  - Entra ID
  - B2B guests
  - Premium capacity
  - Power BI Embedded
tags:
  - power-bi
  - ifc
  - visual
  - licensing
  - sharing
  - embedding
audience: users, admins, isv
product: power-bi
feature: ifc-visual
ms.date: 2025-12-04
---

# FAQ for IFC Viewer Visual for Power BI

## IFC Viewer basics

### What file formats does the IFC Viewer support?

The IFC Viewer supports **IFC2X3** and **IFC4** files.

### Can I combine multiple data sources in one dashboard?

Yes. Use Power BI to combine IFC model data with schedules, cost data, sensor data, and other business data.

### Is coding required to use the IFC Viewer Visual for Power BI?

No. Add the visual to a report, connect the required fields, and configure the visual settings.

### Can I add the IFC Viewer Visual to existing Power BI reports?

Yes. Insert the IFC Viewer Visual from the marketplace, then connect it to the IFC model data in your report.

### Can I use this app with SharePoint or Microsoft Teams?

Yes. Use the IFC Viewer Visual together with SharePoint, Microsoft Teams, and Excel workflows when your report data is stored or shared through Microsoft 365.

### How does filtering work in the IFC Viewer?

Apply filters to isolate IFC elements by type, attribute, category, or other report fields. Selecting a filtered element highlights the corresponding component in the 3D model.

### Do I need additional software to use IFC Viewer in Power BI?

No. The IFC Viewer runs inside Power BI and does not require a separate desktop application.

### How does the app handle large-scale IFC models?

The IFC Viewer is optimized for large models. Performance depends on model size, geometry complexity, browser resources, and report design.

### What does self-hosted Microsoft app mean?

The IFC Power BI app uses your Microsoft 365 tenant for storage and access control. IFC files remain in your SharePoint or Teams environment, and Flinker does not host your model files.

## Licensing

This section explains the common licensing scenarios for IFC Viewer Visual for Power BI.

### How does the IFC Viewer Visual for Power BI license work?

Subscriptions renew automatically at the end of each renewal period. To cancel, contact customer support at least 30 days before the renewal date. For details, see the [Terms and conditions](https://flinker.app/terms/).

### What does the IFC Viewer Visual for Power BI license include?

The license includes access to the plan you purchased, such as Pro, Business, Enterprise, or Embed. Product updates are included while the subscription is active.

### Marketplace says “Not available in selected billing region", why?

This message usually appears when the Microsoft Marketplace billing region and language do not match. Select the correct billing country, check that the language matches the selected region, and reload the page. If the message still appears, contact [sales@flinker.app](mailto:sales@flinker.app).

![Microsoft Marketplace billing country and language](/_media/pbi-ifc-visual-problem-billing-country-not-available.png)

### Can’t find the license key email after purchase?

Single-user licenses purchased through Microsoft AppSource do not include a license key email. Microsoft 365 manages these licenses in your tenant.

Go to **admin.microsoft.com** > **Billing** > **Licenses**, find **IFC Viewer Visual for Power BI**, and assign the license to the user. Flinker cannot access or manage licenses in your Microsoft 365 tenant.

### How do I buy a monthly “Publish to web” license?

Buy a single-user Business license from [Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/flinkergmbh1644589155747.ifc-viewer?tab=PlansAndPrice), or buy a Business tenant license from [Flinker](https://flinker.app/products/power-bi-ifc-viewer/).

### Do I need an IFC Viewer Visual for Power BI license if I already have Power BI?

Yes. Power BI licenses and IFC Viewer Visual for Power BI licenses are separate. A Power BI Pro, Premium Per User, Premium capacity, or Fabric capacity license does not include the IFC Viewer Visual for Power BI license.

Users who view reports that include the IFC Viewer Visual for Power BI also need the appropriate IFC Viewer Visual for Power BI license, unless your organization uses an embedding or tenant licensing option that covers the scenario.

## Sharing reports

### I want to embed my Power BI reports into an app. Can I use the IFC Viewer Visual for Power BI with Power BI Embedded?

Yes. Organizations and ISVs that use Power BI Embedded (A1-A6 SKUs) can include reports that use the IFC Viewer Visual for Power BI in their application or portal. Embedded licensing is separate from per-user licensing. Contact [sales@flinker.app](mailto:sales@flinker.app) for a quote.

### Can I use the default Power BI Share button for client reports?

Use the default Power BI **Share** feature only when the recipients are allowed to access the full report dataset according to your organization's data-sharing policy.

Recipients might be able to access report data even if they cannot view the IFC Viewer Visual for Power BI. For client sharing, review the report permissions, export settings, tenant settings, and licensing model before sending the link.

### I want to share our reports in emails, social media, and websites. Can I do that with reports that use the IFC Viewer Visual for Power BI, using the Power BI Publish to web option?

Use **Publish to web** only for public reports that do not contain confidential or customer-specific data. Internal dashboards, client reports, and private analyses require a license and a secure sharing method.

### Can I share a Power BI report via a simple password-protected link?

No. Power BI supports only:

- Secure, signed-in access with Microsoft Entra ID and Power BI permissions.
- Public access through **Publish to web**, which does not require sign-in.

Use one of these options instead:

- **Entra B2B guests**: Share the report or app with external users. Publishers need Pro or Premium Per User. Guests need Pro or Premium Per User unless the report is backed by Premium or Fabric capacity.
- **SharePoint or Teams**: Embed the report while keeping the same sign-in and permissions model as Power BI.
- **Power BI Embedded**: Use your own portal and capacity-based licensing for external audiences.
- **Publish to web**: Use only for public demos and non-confidential data.

> [!IMPORTANT]
> A custom password page in front of a public link is not a secure access-control model.

See also: [Sharing Power BI IFC reports with external users](sharing-power-bi-ifc-reports-with-external-users.md).

