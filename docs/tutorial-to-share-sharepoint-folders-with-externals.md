# Sharing a specific SharePoint folder with external users

This guide shows you how to share a dedicated SharePoint folder with external users using groups.

## Create Groups and Add External Users
We’ll cover two approaches:
  
### Option 1: Using SharePoint groups

1. **Create a SharePoint group for each set of external users** in your SharePoint site.
2. **Grant each SharePoint group access** to its designated folder.
3. **Add external users** to their appropriate SharePoint group.  
When external users are added, they typically receive an invitation email that includes a link to the site’s root—not directly to the intended folder.
> [!NOTE]
> Use **SharePoint groups** when you:
> - Need site owners and non-admin users to manage group membership directly.
> - Don’t need to integrate the groups with other Office 365 services.

### Option 2: Using security groups (via Microsoft 365 Admin Center)

1. **Work with IT** to create security groups in Microsoft 365 Admin Center.  
   For detailed instructions, see [Create, edit, or delete a security group](https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-edit-or-delete-a-security-group).
2. **Grant each security group access** to its designated folder.
3. **Add external users as guest accounts** to their corresponding Microsoft 365 security group.
> [!NOTE]
> Use **security groups** when you:
> - Want group management through Microsoft 365 Admin Center and Azure AD.
> - Need to integrate the groups with other Microsoft 365 services.

## Share the Access Link

Regardless of whether you used SharePoint groups or Microsoft 365 security groups, the next step is to share a direct link to the folder. This ensures external users can quickly access the correct location.

1. **Select the folder** you want to share and click **Share**.
   
   <img src="/_media/select-folder-and-click-on-share.png" alt="Select folder and click on share" style="max-width:350px;" />

2. In the **Send Link** window, **click “Link Settings”** to modify the link type.
   
   <img src="/_media/in-share-folder-click-on-link-settings.png" alt="In share folder click on link settings" style="max-width:350px;" />

3. Choose **“People with existing access”** (this ensures only those already granted permissions in the group can access).
   
   <img src="/_media/share-external-folder-only-people-with-existing-access.png" alt="Share external folder link that works only for people with existing access" style="max-width:350px;" />

4. Enter the group (SharePoint group or security group) you want to notify and Click **Send** (or **Copy link**, then manually email it to your external users).
   
   <img src="/_media/share-external-folder-with-sharepoint-group.png" alt="Screenshot showing how to share a folder with a SharePoint group" style="max-width:350px;" />

5. The external users will get an email containing a URL that takes them directly to the specific folder.

## Experience for the Recipient
When an external user receives a direct link, here’s what they can expect:

### Open the Shared Link

1. The recipient receives an email or link shared by the Microsoft environment owner.
2. Click on the **Open** or **Open in browser** link provided.
   
   <img src="/_media/invited-you-to-view-a-folder-email.png" alt="Folder invitation email" style="max-width:350px;" />

### Option 1: Recipient has a Microsoft account
1. When someone who has a Microsoft account wants to access the content, Microsoft asks them to **sign in** to their account.
   
   <img src="/_media/sign-in-filed-for-microsoft-organisation-accounts.png" alt="Enter your non-Microsoft email" style="max-width:350px;" />
2. And **requests permission** to view their name, email address, and photo to verify their identity.
   
   <img src="/_media/microsoft-requests-permission-fir-sign-in.png" alt="Enter your non-Microsoft email" style="max-width:350px;" />

### Option 2: Recipient doesn't have a Microsoft account
Non-Microsoft accounts can access the resources via a temporary passcode:

1. If prompted, enter the **email address** that the file or folder was shared with (your non-Microsoft email address).
   
   <img src="/_media/to-open-the-shared-link-enter-your-non-microsoft-account-email.png" alt="Enter your non-Microsoft email" style="max-width:350px;" />

2. After entering your non-Microsoft email address, you will receive an email containing a **verification code**.
   
   <img src="/_media/email-with-code-to-verify-your-non-microsoft-account-to-access-shared-folder.png" alt="Email with the code to verify non-Microsoft account" style="max-width:350px;" />

3. Copy the **verification code** from the email. Return to the browser tab or window where you were prompted to verify. Paste or type the code into the provided field.
   
   <img src="/_media/to-open-secure-link-enter-code-from-non-microsoft-account-email.png" alt="Enter the code to access the secure link" style="max-width:350px;" />

1. Once the code is verified, your non-Microsoft account is granted secure access to the shared content. You will now see the **file** or **folder** you were invited to view, edit, or collaborate on (depending on the permissions set by the owner).
   
   <img src="/_media/user-with-non-microsoft-account-will-be-granted-access-to-the-shared-file-or-folder.png" alt="User with non-Microsoft account now has access" style="max-width:350px;" />

## Managing shared folders with the Protect app
Our custom [Protect app](~/docs/share-features.md) is designed to simplify the administration of external sharing by providing a centralized dashboard. Once you’ve assigned permissions to multiple users and groups across various folders, our app lets you view and manage these permissions all in one place, streamlining your permission management process:

- **Centralized Overview:** Get a complete view of permissions across multiple folders and groups.
- **Real-Time Management:** Quickly update or revoke permissions with immediate effect across your SharePoint site.
- **Bulk Operations:** Apply changes to multiple folders or groups simultaneously, saving time when managing large numbers of users.
- **Audit and Reporting:** Track permission changes with built-in audit logs to help maintain compliance and security.

By integrating the Protect app into your workflow, you can significantly reduce the effort required to manage external sharing. This tool is particularly beneficial when handling multiple external users and groups, ensuring that permissions are consistent, up-to-date, and easy to manage from a single location.