---
title: Setting Up the IFC Viewer in Microsoft Teams
description: Step-by-step guide to set up the IFC Viewer in Microsoft Teams for enhanced collaboration and data privacy.
keywords: IFC Viewer, Microsoft Teams, 3D models, collaboration, data privacy
canonical_url: https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html
---

# Setting Up the IFC Viewer in Microsoft Teams

Follow these steps to set up the IFC Viewer in your Microsoft Teams environment.

> [!Note]
> - **Privacy First: Your Data Stays With You!** We do not upload your files anywhere. All processing is client-side, ensuring full privacy and security. For more details, see [Microsoft App Compliance](https://learn.microsoft.com/en-us/microsoft-365-app-certification/teams/flinker-gmbh-open-ifc-viewer?pivots=general).

## Setup

It just takes 2 minutes.

### Step 1: Get the IFC Viewer App
Option 1: Vist the [Teams App Store link](https://teams.microsoft.com/l/app/828163ae-0b22-445f-85c6-5768b56dfa4e?source=app-details-dialog)

Option 2: Open Microsoft Teams, go to the Apps section, and search for "IFC Viewer." Click on "Add" to start the setup.

![Search for IFC Viewer and Click Add](/_media/teams-apps-search-for-ifc-viewer-and-click-add.png)

### Step 2: Add IFC Viewer to Your Team
Select the team where you want to add the IFC Viewer and click "Set up a tab" or "Add to a Team".

![Add to Team](/_media/teams-apps-add-to-team.png)

### Step 3: Set Up the Tab
Choose the specific team and channel where you want to set up the IFC Viewer tab, then click "Set up."
You can also add the tab to multiple teams and chats.   


![Select Team and Setup Tab](/_media/teams-apps-ifc-viewer-select-team-and-setup-tab.png)

After setting up the tab, the settings window will automatically appear. To load models automatically whenever the tab is opened you can add the SharePoint and Teams .ifc file links now or return to this window later to add them as needed. Click "Save" to add the tab.

![Tab Settings to Connect with Your Files](/_media/teams-apps-ifc-viewer-tab-settings-paste-ifc-file-links-and-save.png)

### Step 4: Connect with Your Files
Click "Connect" to grant permissions for the IFC Viewer to access your files. This step must be completed to give the app access to the files.

![Connect and Grant Permissions to Read Your Files](/_media/teams-apps-ifc-viewer-click-connect-and-grant-permissions-to-read-your-files.png)


> [!Note]
> **Why Do You Need to Grant File Read Permissions?**
> 
> The **IFC Viewer** requires permission to read the IFC files stored in your **SharePoint** and **Teams**. This is essential for the app to retrieve and display the files directly from these platforms, allowing you to view them without any manual downloads or transfers.
> 
> **Your files are not transferred externally**. The app operates **within the SharePoint and Teams environment**, ensuring that all data remains securely within your organization's ecosystem.
> 
> If you see a message saying that _"This app requires your admin’s approval,"_ it simply means that your organization's security settings require admin approval before third-party apps can access your files. In this case, you will need to contact your IT admin for approval.

### Step 5: Copy Links of IFC Files
Go to the Files tab and copy the links of the IFC files you want to view in the IFC Viewer. 
- If the link is on OneDrive, you need to copy the SharePoint link from OneDrive. If it's on an external drive, you need to upload it to SharePoint or Teams first. 

![Copy Links of IFC Files](/_media/teams-apps-ifc-viewer-in-files-tab-copy-links-of-ifc-files.png)

### Step 6: Configure Tab Settings
Return to the tab settings.

![Return to the tab settings](/_media/teams-apps-ifc-viewer-tab-settings-to-connect-with-your-files.png)

Paste the copied IFC file links, and save the settings. Pasting IFC file links from SharePoint or Teams ensures that these files will load automatically whenever the tab is opened.

![Paste IFC File Links and Save](/_media/teams-apps-ifc-viewer-tab-settings-paste-ifc-file-links-and-save.png)

### Done! IFC Files Load Automatically
IFC files will load automatically according to the settings whenever you open the tab.
You can restrict upload permissions by adjusting SharePoint settings or using the Protect App. 

![IFC Files from Settings Load Automatically](/_media/teams-apps-ifc-viewer-ifc-files-from-settings-load-automatically.png)

That's it! You've successfully set up the IFC Viewer in your Microsoft Teams environment.

## FAQ's - *IFC Viewer - Teams*

<details>
<summary>How can I open an IFC file inside Microsoft Teams?</summary>

> Microsoft Teams does not support IFC files by default, so you need to install Flinker’s IFC Viewer app from the Microsoft Teams App Store. Here's an easy guide to set it up: [IFC Viewer in Microsoft Teams - Quick Guide](https://docs.flinker.app/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html).
    
</details>
<details>
<summary>
Is it necessary to choose which chat or team I should set up the IFC Viewer?</summary>

> Yes, you must choose a chat or team because the IFC Viewer works inside Microsoft Teams conversations or project channels. It must be linked to at least one chat/team to function. 
</details>  
<details>
<summary>  
Can I link it to multiple chats and teams?</summary>

> Yes! You can add the IFC Viewer tab to multiple teams and chats.   
</details>  
<details>
<summary>Where do I get the IFC file link?</summary>
   
> You can get the file link from SharePoint or Teams by:
> * Going to SharePoint/Teams Files Tab.
> * Right-clicking the IFC file and selecting ‘Copy link.’
> * Pasting it into the IFC Viewer setup screen.
</details>  
<details>
<summary>What if my file is stored on OneDrive or an external drive?</summary>

> - If it's on OneDrive, you need to copy the SharePoint link from OneDrive. 
> - If it's on an external drive, you need to upload it to SharePoint or Teams first.   

</details>  
<details>
<summary>Will everyone in my selected chats or teams also see every file I uploaded?</summary>
    
> Only files that are linked to the IFC viewer Tab are also visible to other team members. If the user opens a file using "Open IFC" button, the file will visible to you only and it is temporary. This temporary file will not automatically show whenever the tab is reopened. 
> Also, if you want to restrict certain people from viewing the file, you must adjust file permissions in SharePoint or use the Protect App.
</details>  
<details>
<summary>Can I remove or change the files that are automatically opening whenenever the tab is opened?</summary>

> Yes! You can remove or replace files in IFC Viewer at any time.
</details>  
<details>
<summary>Can I set some files to open automatically but not others?</summary>

> No, all files added in the initial setup are loaded automatically. You can, however, remove files later if you don’t want them to open by default.
</details>  
<details>
<summary>What happens if I forget to upload files during setup?</summary>

> No worries! You can upload additional IFC files later inside the Models category. No need to redo the setup process.
</details>  
<details>
<summary>Which permissions need to be granted with the setup?</summary>

> You need to grant read permissions for the IFC Viewer to access your SharePoint and Teams IFC files. If you can't grant these permissions, you can still load local files from your desktop. In this case, only you will see the IFC models. Other team members can also load local IFC models without granting permissions. To set up a global or master model in a Teams tab, permissions are required to load SharePoint IFC files from your Microsoft 365 tenant.
</details>  
<details>
<summary>Can IFC Viewer edit or delete my files, or is it just viewing them?</summary>

> It only reads your files to display or view the model. It does not edit or delete files.

</details>  
<details>
<summary>Why do you need to grant permissions?</summary>

> The IFC Viewer needs permission to read IFC and BCF files stored in your company's SharePoint. This allows the viewer to load your data directly. No external data processing or uploads occur; everything stays within your Microsoft 365 tenant.
</details>

<details>
<summary>Does the IFC Viewer store my files somewhere?</summary>

> No. Your data stays within your Microsoft 365 tenant and SharePoint, serving as the app's backend. There is no external data processing or uploads, ensuring maximum data security for your company.
</details>  

<details>
<summary>Is my data secure when using the IFC Viewer?</summary>

> Yes, your data remains secure within your Microsoft 365 tenant. The IFC Viewer does not upload or process data externally. All data stays within your company's SharePoint and Microsoft 365 environment, ensuring maximum data security and compliance with your organization's policies.
</details>  

<details>
<summary>Can anyone in my team upload files, or only me?</summary>

> By default, anyone in the Teams chat can upload files. You can restrict upload permissions by adjusting SharePoint settings or using the Protect App. 
</details>  

<details>
<summary>Can I control who can upload files?</summary>

> Yes! You can use Microsoft security groups or SharePoint permissions to decide who can upload files.
</details>  

<details>
<summary>Why do I have to keep uploading my files whenever the tab is opened?</summary>

> * If you upload files during the initial setup, they will always load automatically when the IFC Viewer tab is opened. You can remove or replace auto-loading files later in the Models category.
> * If you didn’t set auto-loading, you must manually open files each time.   
</details>  

<details>
<summary>Does everyone see whenever I open a file or which part I am viewing at?</summary>

> No. Opening an IFC file is private—other users in Teams do not get a notification when you open a file inside IFC Viewer.
> Everyone sees their own individual view. The model does not sync in real-time unless using an external screen-sharing tool.   
</details> 

## Contact

If you'd like to learn more about how this integration can benefit your workflow, our team is ready to discuss the possibilities with you.

> [!div class="nextstepaction"]
> [**Book a Meeting Now**](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

We look forward to exploring how an IFC Microsoft Viewer and it's integrations can enhance your organization's efficiency.
