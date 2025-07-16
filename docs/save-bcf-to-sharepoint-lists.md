# Save BCF Issues to a Microsoft SharePoint List

Managing BIM issues is now as easy as managing a to-do list. Flinker turns BIM issues into **clear, actionable tasks inside Microsoft Lists**. No more messy spreadsheets or forgotten tasks, just smooth and organized collaboration.

## How to set up Microsoft SharePoint List sync for your BCF issues

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

- Copy and paste the **Microsoft List URL** (List names with special characters are not supported) into your SharePoint IFC Viewer Webpart settings.
- Copy and paste the **BCF URL** in the SharePoint IFC Viewer Webpart settings to ensure all topic data is also saved as a BCF file. You can use an existing BCF file, or you can create a sample BCF file.

### 3. Save to Microsoft List 

When you click the **Save to SharePoint/Teams** button, loaded topics are automatically saved to your Microsoft List.