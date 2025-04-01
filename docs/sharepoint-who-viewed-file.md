---
title: How to See Who Viewed Files in SharePoint
description: Learn how to track who accessed files in SharePoint using built-in file activity, site usage reports, Microsoft Purview audit logs, or custom tracking with Power Automate.
keywords: SharePoint, File Activity, Microsoft 365, Purview, Audit Logs, Power Automate, Compliance, Document Tracking, View History, Flinker
canonical_url: https://docs.flinker.app/docs/sharepoint-view-tracking.html
---

# 📘 How to See Who Viewed Files in SharePoint

### Track document access across your SharePoint and Teams environments

Knowing who has viewed or accessed files helps you stay compliant, improve collaboration, and ensure accountability. SharePoint offers several built-in tools—plus deeper integrations with Microsoft 365—to give you visibility into file activity.

## Check File Activity in the Document Library

For quick visibility on recent interactions:

1. Go to your **SharePoint document library**
2. Hover over the file and click **“...” (More options)**
3. Select **Details**
4. On the right panel, you’ll see:
   - Who **opened**, **viewed**, or **edited** the file
   - The **time and date** of each action

> [!TIP]  
> This panel only shows **recent** actions and doesn’t include the full view history.

> [!NOTE]  
> This feature currently works **only for Office file types** (Word, Excel, PowerPoint).  
> **PDFs, images, ZIP files, CAD models, and other formats are not supported**—you won’t see a “View” count for these files.

### ✅ What to do instead for PDFs and other file types

If you want to track access to **all file types**, including PDFs:

- Use **Microsoft Purview Audit Logs** (see section below)  
- Or set up a custom log using **Power Automate**

These methods give you full transparency across **any file format**, not just Office documents.

## Why “View” Information Might Be Missing

Even for `.docx` files, the **“1 View”** indicator might not appear in the details pane. Here are the most common reasons:

### 🔒 Missing Admin Settings or Permissions

| Reason | What to check |
|--------|---------------|
| Microsoft Graph or Delve is disabled | Go to **admin.microsoft.com > Org Settings > Microsoft Graph / Delve** and ensure Graph and activity insights are enabled |
| The site setting “Let viewers see who viewed files” is disabled | See instructions below to enable it |
| The user is not a licensed Microsoft 365 internal user | Guests and anonymous users are not counted |
| The file hasn’t been opened by others yet | A file needs to be opened (not just created) to register a view |
| You are using Classic View or a legacy library | Works only in the modern SharePoint experience |

## 🔧 How to Enable “Let viewers see who viewed files”

> This setting controls whether SharePoint displays the **“View count”** and **recent viewers** in the details pane.

### Step-by-step:

1. Go to [**SharePoint Admin Center**](https://admin.microsoft.com)  
2. Navigate to **Sites > Active sites**
3. Select the affected site (e.g. project or team site)
4. In the site panel, open the tab **Settings**
5. Scroll down to find:  
   > **Let viewers see who viewed files**  
   Turn this setting **ON**  
6. Click **Save**

> [!NOTE]  
> If the option is not visible, it’s likely because **Microsoft Graph or Delve is turned off tenant-wide**. You need to enable them first (see next section).

## ✅ Ensure Microsoft Graph & Delve Are Enabled

To show viewer info, your Microsoft 365 tenant must allow **activity-based insights** from Microsoft Graph.

1. Go to [**Microsoft 365 Admin Center**](https://admin.microsoft.com)
2. Navigate to **Settings > Org settings > Microsoft Graph or Delve**
3. Ensure the following are enabled:
   - ✅ “**Delve is On**”
   - ✅ “**Show documents in Delve and other Graph-powered experiences**”
   - ✅ “**Let users see file activity**” or similar privacy settings

> These settings must be changed by a **Global Admin**.

## 🧪 Advanced: Enable with PowerShell (for admins)

If you want to enable viewer info programmatically:

```powershell
Set-SPOSite -Identity https://yourtenant.sharepoint.com/sites/yoursite -EnableForUserViewing $true
```

To check if it's already enabled:

```powershell
Get-SPOSite -Identity https://yourtenant.sharepoint.com/sites/yoursite | Select *view*
```

Requires: SharePoint Online Management Shell and appropriate permissions.

## Use Site Usage Reports for Trends

To understand how your SharePoint content is used at a higher level:

1. Navigate to your **SharePoint site**
2. Click the **⚙️ gear icon** > **Site contents**
3. Open **Site usage**
4. You’ll get insights into:
   - **Page and file views**
   - **Popular content**
   - **Traffic patterns over time**

> [!NOTE]  
> These reports are **aggregated** and do **not** include individual usernames.

## Access Audit Logs via Microsoft Purview

Need to know exactly *who* opened or viewed a file—even if it's a PDF, image, or CAD model?  
With **Microsoft Purview Audit Logs**, you can search activity across your SharePoint and Teams environment in just a few clicks.

> [!IMPORTANT]  
> This requires **Microsoft 365 E5** or **Purview Audit (Standard)**. You also need to have **audit logging enabled** (usually on by default for E5 tenants).

### ⚡ Quick Workflow: How to Check Who Viewed a File

1. Go to [**Microsoft Purview Compliance Center**](https://compliance.microsoft.com/)
2. In the left menu, select **Audit**
3. Click **Search** (or **Start recording user and admin activity**, if prompted)
4. Under **Activities**, search for:
   - `Viewed file`
   - `Accessed file`
   - `Downloaded file` (if relevant)
5. Under **File, folder or site**, paste part of the file path or name (e.g. `Document2.pdf`)
6. Set your **Time range** (e.g. Last 7 days)
7. (Optional) Add specific users under **Users**
8. Click **Search**

You’ll now see:
- Who accessed the file
- When and how (viewed, downloaded, etc.)
- The device and IP address (if needed)

> [!TIP]  
> You can export the results as a `.csv` file and even automate reporting if needed.

### 🧩 Use Case Example

Want to check if external partners have opened a shared PDF?

Just search by file name and set a date range. You’ll instantly know if, when, and by whom it was accessed—**even if the file type is not an Office document**.

> [!NOTE]  
> If you don’t see the Audit menu, contact your IT admin to ensure you have the correct role (e.g. **Compliance Management** or **Audit Reader**).

## Build Custom Logs with Power Automate

Want a lightweight, no-code solution?

- Use **Power Automate** to log every file open or edit in a SharePoint List
- Or create a **Read Confirmation Flow**, where users confirm when they’ve accessed a file

This gives you full control—without requiring premium Microsoft 365 plans.

> [!NOTE]  
> This method is flexible but not automatic for views. For PDF tracking, you may need to trigger flows based on file downloads or specific user interactions.

## 📋 Summary

| Method                      | Supports All File Types | Shows Who Viewed | License Required      | Best For                      |
|----------------------------|--------------------------|------------------|------------------------|-------------------------------|
| File Details Pane          | ❌ Office only           | Limited          | No                     | Quick checks for docx/xlsx    |
| Site Usage Reports         | ✅                       | No               | No                     | General usage trends          |
| Microsoft Purview Logs     | ✅                       | ✅ Yes           | Microsoft 365 E5       | Full audit trail              |
| Power Automate Logging     | ✅ (customizable)        | ✅ Yes (custom)  | No (basic flows)       | Custom tracking               |

### 💬 Need Help?

> [!div class="nextstepaction"]
> [Talk to us](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)
