---
title: Importing Navisworks Clash Reports and BCF Files for Seamless BIM Collaboration
description: Learn how to import Navisworks clash reports (XML) and BCF files into our platform for seamless BIM collaboration, issue tracking, and integration with SharePoint and Teams.
keywords: Navisworks, BCF, BIM, Collaboration, SharePoint, Teams, Integration, Clash Reports, XML Import
canonical_url: https://docs.flinker.app/docs/bcf-navisworks.html
---

# Importing Your Clash Reports from Navisworks

We are excited to introduce our new unified Import feature, designed to streamline the process of importing both **Navisworks clash reports (XML)** into our platform. With a single, intuitive button, you can now effortlessly bring your project data into our system, enhancing your workflow and productivity.

## Step-by-Step Import Guide

Follow these simple steps to export your clash reports from Navisworks and import them into our platform:

### 1. Exporting XML Clash Reports from Navisworks

Before importing your clash reports, you need to export them from Navisworks in XML format. Follow these steps:

1. **Open Your Navisworks Project**: Launch Navisworks and open the project containing the clash detection results you wish to export.

2. **Navigate to Clash Detective**: Go to the **"Clash Detective"** tool within Navisworks. This tool is essential for managing and reviewing clash detections.

3. **Select the Report Tab**: In the Clash Detective panel, select the **"Report"** tab.

4. **Export the Clashes**:
   - Choose the **"XML"** format from the available export options.
   - Click **"Write Report"** to complete the export process.

### 2. Locate the Import Button

Navigate to the **BCF Topics Panel** in the application interface. Here, you will find the new **Import** button alongside other action buttons like **Save Topics** and **Download**.

![BCF Topics Panel](/_media/viewer-import-navisworks-xml-clash-results-as-bcf.png)

### 3. Select Your File

Click on the **Import** button to open the file selection dialog. You can choose to import either an XML clash report.

- **For Clash Reports**: Select your Navisworks clash report file with the `.xml` extension.

### 4. Processing Your File

Once you've selected your file, the application will automatically detect the file type and process it accordingly:

- **XML Files**: The system will parse the clash report and convert each clash result into a corresponding BCF topic.

### 5. Viewing Imported Topics

After a successful import, your newly added topics will appear in the **Topics List** within the BCF Topics Panel. You can now view, edit, and manage these topics just like any other entries.

- **For Clash Reports**: Each clash is converted into a detailed BCF topic, complete with descriptions, statuses, and viewpoints based on clash points.

## Exporting and Syncing Imported Data

Our platform not only allows you to import data but also provides options to export and synchronize your imported clash reports and BCF topics with other tools for enhanced collaboration and management.

### Export as BCF

After importing your Navisworks XML clash reports, you can export the converted BCF topics for use in other BIM applications or for sharing with your team. To export:

1. **Navigate to the BCF Topics Panel**.
2. **Select the Topics** you wish to export or choose to export all topics.
3. **Click on the "Export BCF" Button**. The system will generate a `.bcf` file containing your selected topics.

This functionality ensures that your clash reports are portable and can be integrated into various BIM workflows seamlessly.

### Sync with Microsoft Lists

Enhance your collaboration by syncing your imported clash reports with **Microsoft Lists**. This integration allows you to manage and track issues within SharePoint and Teams, leveraging the robust features of Microsoft 365 for communication and task management.

To sync with Microsoft Lists:

1. **Ensure Microsoft Lists Integration is Enabled**
2. **Import your XML Clash Report** as described in the [Step-by-Step Import Guide](#step-by-step-import-guide).
3. **Navigate to the Sync Option** within the BCF Topics Panel.
4. **Select "Save BCF"**. The system will automatically synchronize your imported topics with your designated Microsoft List.
5. **Manage and Collaborate** on your issues directly within SharePoint and Teams, utilizing features like notifications, assignments, and comments.

This seamless synchronization bridges the gap between BIM collaboration and Microsoft's productivity tools, fostering an integrated project management environment.

