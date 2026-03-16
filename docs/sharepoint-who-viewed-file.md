---
title: How to See Who Viewed Files in SharePoint
description: Learn how to see who viewed a file in SharePoint using SharePoint Viewers for quick checks and Microsoft Purview Audit for compliance-grade tracking.
keywords: SharePoint, Viewers, File Activity, Microsoft 365, Purview, Audit Logs, Document Tracking, View History, Flinker
canonical_url: https://docs.flinker.app/docs/sharepoint-who-viewed-file.html
---

# How to See Who Viewed Files in SharePoint

### Track document access in SharePoint and Teams

If you need a quick answer, use **SharePoint Viewers** on the file card.

If you need audit evidence for compliance or investigations, use **Microsoft Purview Audit**.

For permission governance (who can access content), see [Protect app features](~/docs/share-features.md).

Microsoft provides two primary options:

- **SharePoint Viewers** on the file card (user-facing)
- **Microsoft Purview Audit** (admin/compliance-grade auditing)

You can also use **file activity in a document library** for recent changes.

## Option 1: Enable and Use SharePoint Viewers

Microsoft’s official feature is called **SharePoint Viewers**. After activation, users can see viewers and view counts on the file card.

### Enable SharePoint Viewers (site owner)

1. Open your SharePoint site.
2. Select **Settings** (top-right) > **Site information**.
3. Select **View all site settings**.
4. Under **Site Actions**, select **Manage site features**.
5. Find **SharePoint Viewers** and select **Activate**.

If you don’t see **Site information**, you don’t have permission to manage this setting.

### See who viewed a file/page

1. Go to the document or pages library.
2. Point to a file/page to open the **file card**.
3. Check **Viewers and Views** (names/photos and totals).

Microsoft states that when this feature is enabled, historical viewer data can appear, including views collected while the feature was previously off.

The file card is only visible to people who already have access to the file, and content in the card is personalized to the viewer.

## Option 2: Check File Activity in the Document Library

Use this for quick, recent activity directly in a library.

1. Open the document library.
2. Select **Open the details pane**.
3. Select **More details** at the bottom of the pane to open **Activity**.
4. Review the latest file/library activities.

Microsoft documents this activity as recent changes such as created/edited/deleted and says activity is available for the last **60 days**.

## Option 3: Use Site Usage for Trends

Site usage reports are useful for trends (for example, popular content, unique viewers, and total visits), not for detailed compliance investigations. Microsoft notes individual names are shown in the library hover card when SharePoint Viewers is enabled, not on the Site Usage page.

## Option 4: Use Microsoft Purview Audit for Full Auditing

For exact forensic/compliance tracking (who, when, IP, operation), use **Microsoft Purview Audit**.

### Official Prerequisites

- You need the **Audit Logs** or **View-Only Audit Logs** role.
- Audit log search is on by default for Microsoft 365/Office 365 enterprise organizations.
- Retention depends on licensing:
  - **Audit (Standard):** typically 180 days
  - **E5 / Audit Premium-related licensing:** up to 1 year by default for key workloads (including SharePoint)

### How to search SharePoint file access events

1. Open the [Microsoft Purview portal](https://purview.microsoft.com/).
2. Open **Audit**.
3. Configure search criteria:
   - Date/time range (UTC)
   - **Activities**
   - **Users** (optional)
   - **File, folder, or site** (file name/path/URL)
   - **Workloads** (include SharePoint)
4. Run search and inspect results for user, activity, IP, and item details.

Recommended search approach for larger environments:

- Start with a narrow UTC date range and one site path.
- Use **File, folder, or site** with a full or partial URL/path.
- Add **Users** only if needed after the first result set.
- Use export after filtering to keep reports focused.

Microsoft notes audit records for core services are typically available within 60–90 minutes, but this isn't guaranteed.

In Purview Audit search UI, the maximum date range per search is 180 days.

## Optional: Custom Logging with Power Automate

Power Automate can capture and store events based on available triggers/actions, but it is not a replacement for Purview audit in compliance scenarios.

## Troubleshooting: Why Viewer Data May Be Missing

If names or counts don’t appear as expected:

1. **Confirm SharePoint Viewers is activated** on the site feature page.
2. **Wait a few minutes** after activation before testing.
3. **Validate permissions**: users without access won’t see file card insights.
4. **Check where you’re looking**: individual names appear in the library hover card, not Site Usage.
5. **For audit searches**, allow for ingestion delay (commonly 60–90 minutes) and verify role assignments.

## Known Limits

- Site Usage is aggregate analytics and does not show per-viewer identity on the Site Usage page.
- Site Usage can exclude the most recent 60 minutes of activity.
- Purview audit record availability is not guaranteed at an exact time.
- If a third-party tool renders PDFs from SPO libraries, those views may not be recorded in file view statistics or reflected in audit log file view stats.

## FAQ

### Why don’t I see viewer names on a file?

Check whether **SharePoint Viewers** is activated for the site, then wait a few minutes and test again from the library hover card.

### Do PDF views always appear in SharePoint usage or audit data?

Not always. Microsoft notes that if a third-party tool renders PDFs from SharePoint Online libraries, those views may not be recorded in file view statistics and may not be reflected in audit log file view stats.

### What do I need to search who accessed a file in Purview?

You need the **Audit Logs** or **View-Only Audit Logs** role and enough retention coverage for your selected date range.

### Which option should I use first?

Use **SharePoint Viewers** for a quick check. Use **Microsoft Purview Audit** when you need traceable audit evidence.

## Next Steps

- [Protect app features](~/docs/share-features.md)
- [Protect app installation](~/docs/installation.md)

## Microsoft Official References

Last verified: 2026-02-20

- [Allow people to see who views their files or pages](https://support.microsoft.com/en-us/office/allow-people-to-see-who-views-their-files-or-pages-ee26dde0-c30e-4eca-b1c3-38922c450967)
- [See file insights before you open a file](https://support.microsoft.com/en-us/office/see-file-insights-before-you-open-a-file-87a23bbc-a516-42e2-a7b6-0ecb8259e026)
- [File activity in a document library](https://support.microsoft.com/en-us/office/file-activity-in-a-document-library-6105ecda-1dd0-4f6f-9542-102bf5c0ffe0)
- [View usage data for your SharePoint site](https://support.microsoft.com/en-us/office/view-usage-data-for-your-sharepoint-site-2fa8ddc2-c4b3-4268-8d26-a772dc55779e)
- [Search the audit log (Microsoft Purview)](https://learn.microsoft.com/en-us/purview/audit-search)

### Need Help?

[Talk to us](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)
