---
title: IFC Filters
description: Learn how the IFC Filters feature in Flinker enables advanced filtering, comparison, and color-coded visualization of IFC elements using models, attributes, classes, storeys, and property sets.
keywords: IFC Filters, IFC Properties, Property Sets, Pset, BIM Search, IFC Viewer, Filtering, Query, Flinker, Color Filters, BIM Analysis
canonical_url: https://docs.flinker.app/docs/ifc-filters.html
---

# IFC Filters

The **IFC Filters** feature in **Flinker** allows users to create, combine, and toggle multiple filters to quickly locate, isolate, and visually compare IFC elements based on  
**models, attributes, classes, storeys, and property set values**.

Each filter represents a logical query and can be displayed using a **distinct color**, enabling clear visual analysis and comparison directly inside the 3D viewer.

![IFC Filters Panel](/_media/filters.png)
_Filters panel showing multiple active filters with color-coded visualization in the 3D view._

## What is IFC Filters?

**IFC Filters** is an advanced filtering and visualization tool designed to query IFC models using:

- IFC models
- IFC classes (e.g. `IfcDoor`, `IfcBeam`)
- Building storeys
- Property sets (Psets)
- Property values (text, boolean, numeric)

Unlike basic search, IFC Filters allow you to **add multiple filters at the same time**, assign **unique colors**, and **toggle them on or off** to create different analytical views of the same model.

All filter results are reflected instantly in the 3D view.

## Why Use IFC Filters?

**Multi-filter analysis**  
Apply several filters simultaneously to understand how different element groups relate to each other.

**Visual comparison**  
Each filter is color-coded, making it easy to compare systems, storeys, or property-based classifications.

**Toggle and focus**  
Enable or disable filters individually to focus on specific datasets without losing context.

**Data-driven insight**  
Analyze models based on IFC properties and attributes rather than geometry alone.

## Filter Capabilities

### Text Search

Use the **Text search** field to match:

- **Element GlobalId (GUID)**
- **IFC attribute values** such as _Name_, _Tag_, or _ObjectType_
- **Property-set values**

This is useful for quick lookups when the exact property set is unknown, for example searching by element name, tag, or a full identifier like:  
`Basic Wall:Wall-Ext_102Bwk-75Ins-100LBlk-12P:285459`

### Models Filtering

The **Model filter** lets you limit results to specific IFC models when multiple models are loaded.

You can:

- Select **one model** to filter elements only from that model
- Select **multiple models** to include elements from all selected models

Model filtering is **combined (intersected)** with other active filters:

- **IFC Class**
- **Storey**
- **Property Sets (Psets)** and values
- **Text search**

Only elements that satisfy **all selected criteria** are returned.  
This ensures precise filtering across federated models without mixing unrelated elements.

### Class Filtering (Optional)

Limit a filter to a specific IFC class, such as:

- `IfcDoor`
- `IfcWindow`
- `IfcWall`
- `IfcSlab`
- `IfcBeam`

This helps reduce noise and improves performance when working with large models.

### Storey Filtering (Optional)

Restrict filters to a specific building storey to analyze elements floor by floor or validate correct element placement.

### Property Set Filtering

Filter elements using **Property Sets (Psets)** and their values.

You can filter by:

- **Pset name only**  
  Example:  
  `Pset_DoorCommon:IsExternal`  
  → Matches all elements that contain this property, regardless of its value.

- **Pset name and value**
  - **Pset Name**: `Pset_DoorCommon:IsExternal`
  - **Pset Value**: `true`  
    → Matches only elements where the property value equals `true`.

This enables precise queries based on BIM data rather than geometry alone.

## Visual Feedback in the Viewer

When filters are applied:

- Each filter highlights matching elements using its **assigned color**
- Multiple filters can be active and visible at the same time
- Non-matching elements are faded or visually de-emphasized
- Filters can be toggled on or off instantly

This allows users to create clear visual sets and compare different data groups directly within the model.

## Practical Use Cases

- **BIM Data Validation**  
  Verify that required properties (e.g. fire rating, external/internal flags) are correctly assigned.

- **Design Review**  
  Visually separate systems such as doors, windows, or structural elements.

- **Model Auditing**  
  Detect missing or inconsistent property values across storeys or classes.

- **Facility Management Preparation**  
  Identify assets based on operational properties before handover.

## Reset and Refinement

Use the **Reset** button to clear all filters and restore the full model view.  
You can iteratively refine your analysis by combining, toggling, and adjusting multiple filters.

## How to Get Started

Explore how **_Flinker_** helps you search, compare, and analyze IFC models efficiently.

> [!div class="nextstepaction"]  
> [Book a Meeting Now](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

We’ll show you how to use IFC Filters to gain full control over your BIM data — directly in your browser.
