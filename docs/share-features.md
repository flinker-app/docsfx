---
title: ISO 19650
description: Overview of ISO 19650 features for SharePoint permissions, access reporting, data protection, and external collaboration.
keywords: Permissions app, SharePoint, data protection, user permissions, access control, Microsoft AppSource, SPFx, multi file sharing
canonical_url: https://docs.flinker.app/docs/share-features.html
---

# ISO 19650

ISO 19650 helps administrators and workspace owners manage SharePoint and Teams permissions, external sharing, and access reporting from one place.

- **Microsoft 365 deployment:** Add ISO 19650 from Microsoft AppSource to selected SharePoint sites or to all sites in the organization.
- **Tenant-based data handling:** The app runs as a SharePoint Framework (SPFx) app in your Microsoft 365 tenant. Permission operations are handled through SharePoint.
- **Permission governance:** Assign access to internal users, external guests, and user groups for files, folders, lists, links, and embedded content.
- **Access reporting:** Review shared folders and permission assignments across a SharePoint site.
- **Multi-file sharing:** Use MultiShare to send multiple file links to multiple recipients in one workflow.

## ISO 19650 vs. standard SharePoint

| Feature | Why it matters | ISO 19650 (Enterprise) | ISO 19650 (Free) | Standard SharePoint |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------|-------------------------|-------------------------|
| **User permissions** | Assign access to specific users and groups. | ✓ | ✓ | ✓ |
| **Folder access** | Manage access at folder level for project workspaces. | ✓ | ✓ | ✓ |
| **Custom groups** | Use groups for repeatable authorization levels. | ✓ | ✓ | ✓ |
| **Custom authorizations** | Define who can view, edit, or share content. | ✓ | ✓ | ✓ |
| **External organizations** | Grant external access through approved SharePoint sharing flows. | ✓ | ✓ | ✓ |
| **Embedded content access** | Manage access to embedded external content where supported. | ✓ | ✓ | ✓ |
| **Access report** | Review and oversee access rights across SharePoint sites and Teams. | ✓ | ✓ | ✗ |
| **Bulk editing** | Change access settings across multiple folders. | ✓ | ✗ | ✗ |
| **Quick editing** | Adjust groups, authorization levels, folders, websites, and Microsoft Lists from one workflow. | ✓ | ✗ | ✗ |
| **Permission templates** | Create Excel-based permission templates for repeatable SharePoint and Teams setup. | ✓ | ✗ | ✗ |
| **MultiShare** | Share multiple files with multiple recipients and notify them in one workflow. | ✓ | ✗ | ✗ |

### Default sharing features in standard SharePoint

Standard SharePoint includes several sharing options for collaboration and access management:

1. **Share with specific people:**
   - **Feature:** Invite specific individuals by entering their email addresses.
   - **Permissions:** You can assign view or edit permissions.
   - **Use case:** Share sensitive documents with a limited audience.

2. **Share with anyone with the link:**
   - **Feature:** Generate a shareable link that anyone with the link can use.
   - **Permissions:** Options to allow editing or view-only access, and set expiration dates.
   - **Use case:** Share non-sensitive information with a broad audience.

3. **Share within your organization:**
   - **Feature:** Share with anyone in your organization without external email addresses.
   - **Permissions:** View or edit permissions can be set.
   - **Use case:** Internal collaboration where external access is not required.

4. **Share with people in your organization:**
   - **Feature:** Share with selected people in the organization.
   - **Permissions:** Control access levels for the selected users.
   - **Use case:** Internal sharing with more explicit access control.

ISO 19650 adds access reporting, bulk permission updates, and template-based permission management for more controlled SharePoint collaboration.

## Users and benefits

ISO 19650 is used by project management, workspace administration, IT security, and governance teams. It helps organizations manage SharePoint sites, control access permissions, improve collaboration, and support internal data governance policies.

### Project and workspace managers
- **Project managers**: Manage project collaboration and document sharing.
- **Workspace managers**: Administer multiple workspaces with custom access controls.

### BIM and design platform managers
- **BIM managers and coordinators**: Control BIM data sharing and permissions.
- **Admins for design and construction platforms**: Manage access across connected project environments.[^1]

### Automation and workflow administrators
- **Process and automation managers**: Use permission settings to support workflow automation and process management.

### Cloud and virtual environment administration
- **SharePoint and Teams admins**: Manage access for SharePoint sites and Teams.
- **Virtual data room admins**: Manage controlled external collaboration spaces.
- **Online drive admins**: Centralize file access management.
- **Microsoft 365 and Azure admins**: Manage user permissions with existing Microsoft services.

### IT security, compliance, and governance
- **IT security admins**: Protect sensitive information and manage user access.
- **IT compliance managers**: Support compliance with internal policies and external requirements.
- **IT governance managers**: Oversee access policies and permission processes.

[^1] Examples include Autodesk Construction Cloud, Bentley ProjectWise, Oracle Aconex, Trimble Connect, Procore, Asite, Allplan, Bluebeam, Viewpoint, Kahua, Dalux, and Thinkproject.
