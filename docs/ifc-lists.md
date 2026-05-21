---
title: Microsoft Lists and BCF Integration
description: Connect BCF issues with Microsoft Lists to track BIM tasks across teams while preserving full BCF context.
keywords: Microsoft Lists BCF, BIM issue tracking, IFC Lists integration, Teams BIM workflow, Flinker BCF sync
canonical_url: https://docs.flinker.app/docs/ifc-lists.html
---

# Microsoft Lists and BCF integration

Use Microsoft Lists to track BCF topics as structured project issues in Microsoft 365. The integration maps BCF topic data to list columns so teams can review, assign, filter, and update issues from SharePoint or Teams.

### Key benefits

**Cross-team tracking**  
Track project issues across teams and projects in one Microsoft List.

**All tasks in one view**  
Use Microsoft Lists to manage BCF issues with related project work, such as:
- Site visits
- Approvals
- Internal tasks

**Search and filter**  
Find issues and tasks by:
- Title
- Status
- Assigned person
- Due date

## How to set up Microsoft Lists sync for your BCF topics

### 1. Create your Microsoft List

To sync BCF topics, the Microsoft List must include the following **required columns and types**:
* **Guid** *(Text)*
* **Title** *(Text)*


**Optional columns** (add as needed):

* **Description** *(Multiline Text)*
* **Status** *(Choice)*
* **AssignedTo** *(Choice)*
* **TopicType** *(Choice)*
* **Priority** *(Choice)*
* **Stage** *(Choice)*
* **DueDate** *(Date)*
* **CreationDate** *(Date)*
* **CreationAuthor** *(Text)*
* **ModifiedDate** *(Date)*
* **ModifiedAuthor** *(Text)*

If a column is present, the integration will map and update it.

### 2. Insert the Microsoft List URL

- Copy and paste the **Microsoft List URL** (List names with special characters are not supported) into your IFC Viewer for Microsoft Teams app tab settings.
- Copy and paste the **BCF URL** in the settings to ensure all topic data is also saved as a BCF file. You can use an existing BCF file, or you can create a sample BCF file.


![Connect SharePoint List](/_media/connect-sharepoint-list-to-teams-ifc-viewer.png)

### 3. Save to Microsoft List 

When you click the **Save to SharePoint/Teams** button, loaded topics are automatically saved to your Microsoft List.

### 4. Choose a view

Use Microsoft Lists views to review issues in the format that matches your workflow.

- **List view** - Use for sorting and scanning issues.
  ![List Items View](/_media/bcftopics-as-listitems-in-micrsoftlists.png)  

- **Kanban board view** - Move issues across categories such as **To do**, **In progress**, and **Done**.
  ![Kanban Board View](/_media/bcftopics-as-canbanboard-in-micrsoftlists.png)  

- **Calendar view** - Review due dates and milestones.
  ![Calendar View](/_media/bcftopics-as-calendarview-in-micrsoftlists.png)

## What the integration provides

**Reduced manual work**  
BCF topics sync to Microsoft Lists instead of being recreated manually.

**Microsoft 365 workflow**  
Use SharePoint, Teams, and Microsoft Lists for issue tracking.

**Team collaboration**  
Assign users, add comments, and track updates in the list.

**Keep everyone aligned**  
Teams work from the same issue list and BCF data.

## Real-world example

For example, a BIM coordinator identifies a clash between a pipe and a beam.

1. The clash is saved as a BCF topic.
2. The topic is added to the Microsoft List.
3. A team member is assigned to the issue.
4. The team comments, updates status, and tracks resolution in Microsoft Lists.

## Request a demo

> [!div class="nextstepaction"]
> [Book a meeting](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

## FAQs

### Can Navisworks XML clash reports be synced with Microsoft Lists?

Yes. The XML clash report is converted into BCF topics, and those topics can be synchronized with Microsoft Lists.

### Are details from the Navisworks XML transferred to Microsoft Lists?

Yes. Imported topic details are transferred to the mapped list columns. Screenshots and related topic information can be viewed from the Microsoft Lists item when configured.
