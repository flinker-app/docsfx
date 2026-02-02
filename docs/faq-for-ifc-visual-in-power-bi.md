---
title: FAQs for IFC Visual in Power BI
description: Answers to licensing, sharing, and embedding questions for the IFC Visual custom visual in Microsoft Power BI.
summary: Comprehensive FAQs covering licensing, report sharing, embedding, and usage details for the IFC Visual in Power BI.
slug: faq-for-ifc-visual-in-power-bi
canonical_url: https://docs.flinker.app/docs/faq-for-ifc-visual-in-power-bi.html
lang: en
robots: index,follow
keywords:
	- IFC Visual
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

# FAQs - IFC Visual - Power BI

## IFC Viewer basics

### What file formats does the IFC Viewer support?

The IFC Viewer supports **IFC2X3** and **IFC4** formats, ensuring compatibility with most BIM applications.

### Can I combine multiple data sources in one dashboard?
Yes, Power BI allows you to connect and visualize data from IFC models alongside schedules, costs, sensors, and more.

### Is coding required to use the IFC Viewer Visual in Power BI?
No coding is needed. The integration is designed for business users and BIM professionals.

### Can I add the IFC Viewer Visual to existing Power BI reports?
Yes, you can add the IFC Viewer Visual to any existing Power BI report by inserting it as a visual from the marketplace and connecting it to your model data.

### Can I use this app with SharePoint or Microsoft Teams?

Yes! The app allows you to **export and sync IFC data** with SharePoint, Teams, and Excel for seamless collaboration.

### How does filtering work in the IFC Viewer?

You can apply **custom filters** to isolate IFC elements based on type, attributes, or categories. Clicking on a filtered element will highlight the corresponding component in the 3D model.

### Do I need additional software to use IFC Viewer in Power BI?

No, the IFC Viewer runs **entirely within Power BI** and does not require additional software installations.

### How does the app handle large-scale IFC models?

The IFC Viewer is **optimized for performance**, ensuring smooth interaction and visualization, even with **complex, large-scale models**.

### What does self-hosted Microsoft app mean?

The IFC Power BI app uses your own SharePoint as the only server. Your Microsoft 365 hosts the app without external connections. You have chosen a very secure software setup.

## Licensing

In this article, we will explain how licensing for the IFC Power BI Visual works. While licensing and all circumstances surrounding it can easily get complicated and overlapping, we will try to provide answers to the questions you may have.

### How does the IFC Power BI Visual license work?
Your subscription will automatically renew at the end of each renewal period. If you decide to cancel your subscription, contact our customer support team at least 30 days prior to the renewal date. You can review the full Terms & Conditions [here](https://flinker.app/terms/).

### What does the IFC Power BI Visual license include?
It includes access to Pro, Business, Enterprise or the Embed Plan and all the future product updates.

### Marketplace says “Not available in selected billing region” — why?
This is usually fixed by **reloading the page after selecting your billing country** in Microsoft Marketplace. Also ensure the Marketplace **Billing region** and **Language** match (as in the screenshot, e.g., *Norway* + *Bokmål – Norge*). If the problem persists, contact sales@flinker.app.

![Microsoft Marketplace billing country and language](/_media/pbi-ifc-visual-problem-billing-country-not-available.png)

### I made the license purchase in Microsoft Store, but I can’t find a license key in the email
Single-user licenses purchased directly via Microsoft AppSource do not come with a license key email. These licenses are managed entirely in your own Microsoft 365 tenant. Go to **admin.microsoft.com** → **Billing** → **Licenses**, find **IFC Visual**, and assign it to the user. This is the same place where other Microsoft licenses are managed. All actions are on the customer side; Flinker cannot access or manage your Microsoft 365 licenses.

### I have already purchased the Power BI subscription. Do I still have to purchase the IFC Visual Power BI license to use the visuals?
Yes. The IFC Visual Power BI licensing model is not tied to Microsoft’s subscription-based plans in any way. We are a plug-in solution in the 3D and data visualization field of the Power BI tool. In order to successfully use our custom visuals when creating your Power BI reports, you need to buy an IFC Visual Power BI license as well. As such, IFC Visual Power BI visuals aren’t covered by a Power BI Premium subscription, which has no relation to the usage of the IFC Visual Power BI licenses. Although Power BI Premium capacity enables the sharing of data with anyone, this is not the case with the sharing of IFC reports that use the IFC Visual for Power BI custom visual. An IFC Visual Power BI license is also necessary when viewing (consuming) reports via the Power BI service.



## Sharing reports

### I want to embed my Power BI reports into an app. Can I use IFC Visual Power BI visuals with Power BI Embedded?
In short—yes, you can.  
In addition to the per-user pricing, our embedded pricing solution is very similar to the one you are used to from Microsoft—depending on the node (A1, A2, A3, etc.) you are using within the company. Companies or ISVs who use Microsoft Power BI Embedded (A1–A6 SKUs) can include IFC Visual for Power BI reports and dashboards into their application or service.  
Please contact our sales team at sales@flinker.app to get a quote.

### I want to share my reports from Power BI Desktop with clients, can i use the default "Share" Button from the Power BI App and select view only?
You can do so an share the report by generating a link via the default Share feature in the Power BI App. However, the persons you share the report with will see all the data tables of the report but not the 3D visual as this would require a licence. However, the people you would share the report with via the default "Share" button would be able to download your full pbi fill including all the data.

### I want to share our reports in emails, social media, and websites. Can I do that with reports that use the IFC Visual for Power BI, using the Power BI Publish to web option?
We support you when publishing your reports if those are meant for general public use and we won’t charge you any additional cost. If you are using this option for in-company dashboards, reports, and analysis meant for internal use, then you are required to have a license.

### Can I share a Power BI report via a simple password-protected link?
No. Power BI supports only:
- Secure, signed-in access (Microsoft Entra ID/Azure AD) with permissions/RLS, or
- Fully public access via “Publish to web” (no sign-in).

Use instead:
- Entra B2B guests: Share the report or an App. Publisher needs Pro/PPU; guests need Pro/PPU or can view via Premium/Fabric capacity.
- SharePoint/Teams: Embed the report; same sign-in and permissions as Power BI.
- Power BI Embedded: Your own portal for many externals; capacity-based licensing.
- Publish to web: Public demos only, never confidential data.

Note: A custom password page in front of a public link is not real security.
See also: [Sharing Power BI IFC reports with external users](sharing-power-bi-ifc-reports-with-external-users.md).

