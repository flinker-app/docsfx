# Sharing SharePoint folders with many external users

This guide shows you how to share dedicated SharePoint folders with many external users. We’ll cover two approaches:
1. Using SharePoint groups
2. Using security groups (via Office 365 Admin Center)

For each method, we explain the setup process, along with the advantages and disadvantages.

---

## Overview

When you have multiple external groups and need to give each group access to its own folder within a SharePoint site, you want a process that:
- Provides clear and correct folder access links to users.
- Is easy to manage.
- Balances security and administrative control.

SharePoint groups and security groups both allow you to manage permissions, but they differ in scope, management, and integration. For general information about external sharing in SharePoint, see [External or guest sharing in OneDrive, SharePoint, and Lists](https://support.microsoft.com/en-us/office/external-or-guest-sharing-in-onedrive-sharepoint-and-lists-7aa070b8-d094-4921-9dd9-86392f2a79e7#ID0EBF=Work_or_school_account).

---

## Method 1: Using SharePoint groups

### Create and configure groups
1. Create a separate SharePoint group for each set of external users in your SharePoint site.
2. Use descriptive names like `ExternalGroupA`, `ExternalGroupB`.
3. Create a dedicated folder in your document library for each external group.
4. Grant each SharePoint group access to its designated folder.

![Screenshot showing how to share a folder with a SharePoint group](/_media/share-external-folder-with-sharepoint-group.png)

### Add users and communicate access
1. Add external users to their appropriate SharePoint group.
2. Users will receive an invitation email with a link to the site root.
3. All members of the group will be notified when new content is shared.
4. Send a follow-up email with the direct sharing link to the specific folder.
5. Include clear instructions for accessing the folder in your communication.

### When to use SharePoint groups

Use SharePoint groups when you:
- Need site owners and non-admin users to manage group membership directly.
- Work within a single SharePoint site or site collection.
- Want a simple setup process without IT involvement.
- Have a smaller number of external users to manage.
- Don't need integration with other Office 365 services.

---

## Method 2: Using security groups (via Office 365 Admin Center)

### Create and configure groups
1. Work with IT to create security groups in Office 365 Admin Center. For detailed instructions, see [Create, edit, or delete a security group](https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-edit-or-delete-a-security-group).
2. Use descriptive names like `ExtSecurityGroupA`, `ExtSecurityGroupB`.
3. Create a dedicated folder in your document library for each external group.
4. Grant each security group access to its designated folder.

![Screenshot showing how to share a folder with a mail-enabled security group](/_media/share-external-folder-with-mail-enabled-security-group.png)

### Add users as guests
1. Add external users as guest accounts to their corresponding Office 365 security groups.
2. Users will receive an invitation email with a link to the site root.
3. All members of the security group will be notified when new content is shared.
4. The security group permissions will allow access when users have the correct link.

### Share folder access
1. Generate direct sharing links for each folder.
2. Send custom notifications with the correct folder links.
3. Consider using Power Automate to automate the communication process.

### When to use security groups

Use security groups when you:
- Need to manage access across multiple SharePoint sites.
- Want centralized management through Azure AD.
- Have a large number of external users to manage.
- Require detailed auditing and reporting capabilities.
- Need integration with other Office 365 services.
- Have IT support available for group management.
- Want to automate user management processes.

---

## Best practices & recommendations

- Preconfigure folder permissions:  
  Set the folder permissions before adding users to ensure that the correct access is in place when they log in.
  
- Use direct sharing links:  
  Regardless of the group type, generate a direct sharing link for each folder and include it in your communications with external users.

- Automate notifications:  
  Consider using Microsoft Power Automate to send custom emails that include the direct folder link. This reduces confusion from the default invitation email.

- Clear communication:  
  Always include instructions in your welcome or follow-up emails so that users know which link to use and where to find the specific folder.

- Evaluate your environment:  
  Choose SharePoint groups if your scope is limited to a single site and ease-of-use for non-admins is a priority. Choose security groups for broader, more scalable management across multiple sites and services.

---

## Conclusion

Both methods have their merits:

- SharePoint groups are easier to manage directly from the site for non-admin users, but they’re limited in scope and require extra communication to direct users to the right folder.
- Security groups offer centralized management, scalability, and better integration with external users, though they typically require more administrative overhead.

Select the method that best fits your organization’s needs, or consider a hybrid approach where you use security groups for complex scenarios and SharePoint groups for simpler, site-specific cases.
