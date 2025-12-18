---
title: IFC Search
description: Learn how the IFC Search feature in Flinker enables advanced filtering and querying of IFC elements using attributes, classes, storeys, and property sets.
keywords: IFC Search, IFC Properties, Property Sets, Pset, BIM Search, IFC Viewer, Filtering, Query, Flinker
canonical_url: https://docs.flinker.app/docs/ifc-search.html
---

# IFC Search

The **IFC Search** feature in **Flinker** allows users to quickly locate and isolate IFC elements based on  
**attributes, classes, storeys, and property set values**.

It provides a powerful, flexible querying interface that helps BIM users analyze models, validate data, and focus on specific elements — directly inside the web viewer.

![IFC Search Panel](/_media/ifc-search.png)
_Search panel with property-set filtering and real-time highlighting in the 3D view._

## What is IFC Search?

**IFC Search** is an advanced filtering tool designed to query IFC models using:

- IFC classes (e.g. `IfcDoor`, `IfcWall`)
- Building storeys
- Property sets (Psets)
- Property values (text, boolean, numeric)

Search results are immediately reflected in the 3D view, allowing users to visually inspect matching elements.

## Why Use IFC Search?

**Speed**  
Find specific elements instantly without manually navigating the model.

**Accuracy**  
Filter elements using exact IFC property definitions and values.

**Clarity**  
Highlight or isolate search results while fading out unrelated geometry.

## Search Capabilities

### Text Search

Use the **Text search** field to match:

- **Element GlobalId (GUID)**
- **Attribute values** (e.g. _Name_, _Tag_, _ObjectType_)
- **Property values**

This is useful for quick lookups when the exact property set is unknown, such as searching by element name, tag, or a full identifier like  
`Basic Wall:Wall-Ext_102Bwk-75Ins-100LBlk-12P:285459`.

### Class Filtering (Optional)

Limit the search to a specific IFC class, such as:

- `IfcDoor`
- `IfcWindow`
- `IfcWall`
- `IfcSlab`

This helps reduce noise and improves search performance on large models.

### Storey Filtering (Optional)

Restrict results to a specific building storey, making it easy to analyze elements floor by floor.

### Property Set Filtering

Search using **Property Sets (Psets)** and their values.

You can search by:

- **Pset name only**  
  Example: `Pset_DoorCommon::IsExternal`  
  → Matches all elements that contain this property, regardless of its value.

- **Pset name and value**
  - **Pset Name**: `Pset_DoorCommon::IsExternal`
  - **Pset Value**: `true`  
     → Matches only elements where the property value equals `true`.
    This allows precise queries based on BIM data rather than geometry alone.

## Visual Feedback in the Viewer

When a search is executed:

- Matching elements are highlighted
- Non-matching elements are faded or hidden
- Results count is displayed at the top of the panel
- The camera remains fully interactive

This makes it easy to visually verify data correctness and model consistency.

## Practical Use Cases

- **BIM Data Validation**  
  Verify that required properties (e.g. fire rating, external/internal flags) are correctly assigned.

- **Design Review**  
  Isolate specific systems such as doors, windows, or MEP elements for inspection.

- **Model Auditing**  
  Detect missing or inconsistent property values across storeys or classes.

- **Facility Management Preparation**  
  Identify assets based on operational properties before handover.

## Reset and Refinement

Use the **Reset** button to clear all filters and restore the full model view.  
You can iteratively refine your search by combining multiple filters for more accurate results.

## How to Get Started

Explore how **_Flinker_** helps you search, validate, and analyze IFC models efficiently.

> [!div class="nextstepaction"]  
> [Book a Meeting Now](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

We’ll show you how to use IFC Search to gain full control over your BIM data — directly in your browser.
