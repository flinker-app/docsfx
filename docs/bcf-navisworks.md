---
title: Import Navisworks clash reports and BCF files
description: Learn how to import Navisworks clash reports (XML) and BCF files, convert clash results into BCF topics, and sync issues with SharePoint and Teams.
keywords: Navisworks, BCF, BIM, Collaboration, SharePoint, Teams, Integration, Clash Reports, XML Import
canonical_url: https://docs.flinker.app/docs/bcf-navisworks.html
---

# Import Navisworks clash reports

Use the Import feature to convert **Navisworks clash reports (XML)** into BCF topics. After import, manage the topics in the BCF Topics panel and optionally sync them with Microsoft Lists.

## Import workflow

Export the clash report from Navisworks, then import the XML file into the viewer.

### 1. Export XML clash reports from Navisworks

Before you import clash results, export them from Navisworks in XML format.

1. Open the Navisworks project that contains the clash detection results.
2. Open **Clash Detective**.
3. Select the **Report** tab.
4. In the export options, select **XML**.
5. Select **Write Report**.

### 2. Open the import action

Open the **BCF Topics** panel. Select **Import** next to the other topic actions, such as **Save topics** and **Download**.

![BCF Topics Panel](/_media/viewer-import-navisworks-xml-clash-results-as-bcf.png)

### 3. Select the XML file

Select the Navisworks clash report file with the `.xml` extension.

### 4. Process the file

The viewer detects the XML file and converts each clash result into a BCF topic.

### 5. Review imported topics

After the import completes, the new topics appear in the **Topics** list. Review, edit, and manage them like other BCF topics.

Each clash becomes a BCF topic with metadata, status information, and a viewpoint based on the clash point.

## Export and sync imported data

After import, export the converted topics as BCF or sync them with Microsoft Lists for issue tracking in SharePoint and Teams.

### Export as BCF

Export converted topics when you need to use them in another BIM application or share them with a project team.

1. Open the **BCF Topics** panel.
2. Select the topics to export, or select all topics.
3. Select **Export BCF**.

The viewer generates a `.bcf` file that contains the selected topics.

### Sync with Microsoft Lists

Sync imported topics with **Microsoft Lists** to track issues in SharePoint and Teams.

To sync with Microsoft Lists:

1. Confirm that Microsoft Lists integration is enabled.
2. Import the XML clash report.
3. Open the sync action in the **BCF Topics** panel.
4. Select **Save BCF**.
5. Manage the synchronized issues in SharePoint or Teams.

The synchronized list can use Microsoft 365 features such as assignments, comments, views, and notifications.

## FAQ

### What happens when imported issues already exist?

BCF topics with matching IDs are updated. Topics with new IDs are added as new issues.
