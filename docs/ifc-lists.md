---
title: Microsoft Lists and BCF Integration
description: Connect BCF issues with Microsoft Lists to track BIM tasks across teams while preserving full BCF context.
keywords: Microsoft Lists BCF, BIM issue tracking, IFC Lists integration, Teams BIM workflow, Flinker BCF sync
canonical_url: https://docs.flinker.app/docs/ifc-lists.html
---

# Microsoft Lists and BCF integration

## Track BIM issues like a pro!

Managing BIM issues is now as *easy* as managing a to-do list.
***Flinker*** turns BIM issues *(like BCF topics)* into **clear, actionable tasks inside Microsoft Lists**. No more messy spreadsheets or forgotten tasks, just smooth and organized collaboration.

### Key benefits

**Cross-team tracking**  
Stay on top of project issues across multiple teams and projects - all in *one place*.

**All tasks in one view**  
Use Microsoft Lists to manage BCF issues + other tasks, like:
- ✅ Site visits
- ✅ Approvals
- ✅ Internal to-dos

**Easy to search & filter**  
Quickly *find* any issue or task by:
- ✅ Title
- ✅ Status
- ✅ Assigned person
- ✅ Due date

## How to set up Microsoft Lists sync for your BCF topics

### 1. Create your Microsoft List

To ensure seamless integration, your Microsoft List must include the following **required columns and types**:
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

- Copy and paste the **Microsoft List URL** (List names with special characters are not supported) into your Teams IFC Viewer app tab settings.
- Copy and paste the **BCF URL** in the settings to ensure all topic data is also saved as a BCF file. You can use an existing BCF file, or you can create a sample BCF file.


![Connect SharePoint List](/_media/connect-sharepoint-list-to-teams-ifc-viewer.png)

### 3. Save to Microsoft List 

When you click the **Save to SharePoint/Teams** button, loaded topics are automatically saved to your Microsoft List.

### 4. Choose your favorite view

With Microsoft Lists, you enjoy a full suite of powerful features including versatile display options - you can easily switch between multiple views or even create custom views to perfectly match your workflow needs.

- **List view** - Clean and simple. Great for sorting and scanning quickly.
  ![List Items View](/_media/bcftopics-as-listitems-in-micrsoftlists.png)  

- **Kanban board view** - Drag and drop issues across categories like “To Do,” “In Progress,” and “Done.”
  ![Kanban Board View](/_media/bcftopics-as-canbanboard-in-micrsoftlists.png)  

- **Calendar view** - See all your deadlines and milestones at a glance. Perfect for project managers.
  ![Calendar View](/_media/bcftopics-as-calendarview-in-micrsoftlists.png)

## What you’ll love about this integration

**No more manual work**  
BCF topics are synced automatically into Microsoft Lists, saving time and avoiding mistakes.

**Use Microsoft 365 tools you already know**  
No new apps to learn! Just your SharePoint and Teams + a superpowered list.

**Real-time team collaboration**  
Comment on issues, assign teammates, and get updates. All from one central spot.

**Keep everyone aligned**  
Everyone sees the same up-to-date information. No confusion, no version mess-ups.

## Real-world example

Let’s say your BIM model has a clash issue between a pipe and a beam.
- Here’s what happens with ***Flinker***:
1. The clash is saved as a BCF topic 
2. It’s automatically added to your Microsoft List 
3. You assign it to your colleague 
4. Your team can comment, update, and track it in real time 

**Boom**. Clash fixed, team happy, project on track.

## Want a demo?

> [!div class="nextstepaction"]
> [Book a meeting with us](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/) and we’ll show you how BCF + Microsoft Lists can simplify your project workflows.

## FAQs

A secure and privacy-first IFC viewer with a deep Microsoft List integration that will revolutionize your IFC project management and IFC data processing in Microsoft 365.

1. **Can Autodesk Navisworks export XML conflict lists be automatically integrated into Microsoft Lists?**  
    Yes, absolutely. The XML is converted into a complete BCF file, which is then pushed into Microsoft Lists.

2. **Are all the details from the Navisworks XML transferred to Microsoft Lists, including photos?**  
    Yes, including the photos. The photos can also be viewed directly in the Microsoft Lists ticket.
