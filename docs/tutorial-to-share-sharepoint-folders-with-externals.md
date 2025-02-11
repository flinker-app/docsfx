# Sharing a specific SharePoint folder with many external users

This guide shows you how to share a dedicated SharePoint folder with external users. We’ll cover two approaches:

1. Use **SharePoint groups** when you:
- Need site owners and non-admin users to manage group membership directly.
- Don’t need to integrate the groups with other Office 365 services.

1. Use **security groups** when you:
- Want group management through Microsoft 365 Admin Center and Azure AD.
- Need to integrate the groups with other Microsoft 365 services.

## Method 1: Using SharePoint groups

### 1. Create and configure groups

1. **Create a SharePoint group for each set of external users** in your SharePoint site.
2. **Create a dedicated folder** in your document library for each external group.
3. **Grant each SharePoint group access** to its designated folder.

### 2. Add users and share access link

1. **Add external users** to their appropriate SharePoint group.  
   > When external users are added, they typically receive an invitation email that includes a link to the site’s root—not directly to the intended folder.
2. **Reshare the “Only people with existing access” link** to provide a direct link to the folder:  

   1. **Select the folder** you want to share and click **Share**.
    ![Select folder and click on share](/_media/select-folder-and-click-on-share.png)
   2. In the **Send Link** window, **click “Link Settings”** to modify the link type.
    ![In share folder click on link settings](/_media/in-share-folder-click-on-link-settings.png)
   3. Choose **“People with existing access”** (this ensures only those already granted permissions in the group can access).
    ![Share external folder link that works only for people with existing access](/_media/share-external-folder-only-people-with-existing-access.png)
   4. Enter the group you want to notify and Click **Send** (or **Copy link**, then manually email it to your external users).
    ![Screenshot showing how to share a folder with a SharePoint group](/_media/share-external-folder-with-sharepoint-group.png)
   5. The external users will get an email containing a URL that takes them directly to the specific folder.


## Method 2: Using security groups (via Microsoft 365 Admin Center)

### 1. Create and configure groups

1. **Work with IT** to create security groups in Microsoft 365 Admin Center.  
   For detailed instructions, see [Create, edit, or delete a security group](https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-edit-or-delete-a-security-group).
2. **Create a dedicated folder** in your document library for each external group.
3. **Grant each security group access** to its designated folder.

### 2. Add users and share access link

1. **Add external users as guest accounts** to their corresponding Microsoft 365 security group.
2. **Reshare the “Only people with existing access” link** to the specific folder to notify the users directly:

   1. **Select the folder** you want to share and click **Share**.
    ![Select folder and click on share](/_media/select-folder-and-click-on-share.png)
   2. In the **Send Link** window, **click “Link Settings”** to modify the link type.
    ![In share folder click on link settings](/_media/in-share-folder-click-on-link-settings.png)
   3. Choose **“People with existing access”** (this ensures only those already granted permissions in the group can access).
    ![Share external folder link that works only for people with existing access](/_media/share-external-folder-only-people-with-existing-access.png)
   4. Enter the group you want to notify and Click **Send** (or **Copy link**, then manually email it to your external users).
    ![Screenshot showing how to share a folder with a mail-enabled security group](/_media/share-external-folder-with-mail-enabled-security-group.png)
   5. The external users will get an email containing a URL that takes them directly to the specific folder.


## Experience for the Recipient

### 1. Open the Shared Link

1. The recipient receives an email or link shared by the Microsoft environment owner.
2. Click on the **Open** or **Open in browser** link provided.
![Folder invitation email](/_media/invited-you-to-view-a-folder-email.png)
3. If prompted, enter the **email address** that the file or folder was shared with (your non-Microsoft email address).
![Enter your non-Microsoft email](/_media/to-open-the-shared-link-enter-your-non-microsoft-account-email.png)

### 2. Check Your Email for a Verification Code

1. After entering your non-Microsoft email address, you will receive an email containing a **verification code**.
![Email with the code to verify non-Microsoft account](/_media/email-with-code-to-verify-your-non-microsoft-account-to-access-shared-folder.png)

### 3. Enter the Verification Code

1. Copy the **verification code** from the email.
2. Return to the browser tab or window where you were prompted to verify.
3. Paste or type the code into the provided field.
![Enter the code to access the secure link](/_media/to-open-secure-link-enter-code-from-non-microsoft-account-email.png)

### 4. Access the Shared File or Folder

- Once the code is verified, your non-Microsoft account is granted secure access to the shared content.
- You will now see the **file** or **folder** you were invited to view, edit, or collaborate on (depending on the permissions set by the owner).
![User with non-Microsoft account now has access](/_media/user-with-non-microsoft-account-will-be-granted-access-to-the-shared-file-or-folder.png)


## Managing shared folders with the Protect app

Our custom [Protect app](share-features.html) is designed to simplify the administration of external sharing by providing a centralized dashboard. Once you’ve assigned permissions to multiple users and groups across various folders, our app lets you view and manage these permissions all in one place, streamlining your permission management process:

- **Centralized Overview:** Get a complete view of permissions across multiple folders and groups.
- **Real-Time Management:** Quickly update or revoke permissions with immediate effect across your SharePoint site.
- **Bulk Operations:** Apply changes to multiple folders or groups simultaneously, saving time when managing large numbers of users.
- **Audit and Reporting:** Track permission changes with built-in audit logs to help maintain compliance and security.

By integrating the Protect app into your workflow, you can significantly reduce the effort required to manage external sharing. This tool is particularly beneficial when handling multiple external users and groups, ensuring that permissions are consistent, up-to-date, and easy to manage from a single location.

---

For general information about external sharing in SharePoint, see [External or guest sharing in OneDrive, SharePoint, and Lists](https://support.microsoft.com/en-us/office/external-or-guest-sharing-in-onedrive-sharepoint-and-lists-7aa070b8-d094-4921-9dd9-86392f2a79e7#ID0EBF=Work_or_school_account).