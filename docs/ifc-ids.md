---
title: IDS integration
description: Learn how to validate IFC model data with Information Delivery Specification (IDS) rules in SharePoint and Teams workflows.
keywords: IDS, IFC, BIM, Validation, SharePoint, Teams, Integration
canonical_url: https://docs.flinker.app/docs/ifc-ids.html
---

# IDS integration

Use Information Delivery Specification (IDS) validation to check IFC model data against defined information requirements in SharePoint and Teams workflows.

## What is IDS?

**Information Delivery Specification (IDS)** is a buildingSMART standard for defining information requirements in a computer-interpretable form. IDS files can be used to check whether IFC model data includes the required objects, classifications, attributes, properties, and values.

IDS supports structured model validation by defining what information must be delivered and how it should be represented in the IFC model.

- Enables automatic model validation
- Supports consistent information delivery requirements
- Helps teams identify missing or invalid model data

## IDS validation capabilities

- Check IFC models against defined IDS rules directly in Microsoft 365 workflows.
- Review passing and failing elements in the model viewer.
- Store IDS files, validation reports, and related model files in SharePoint or Teams.

## Validate a model with IDS

Follow these steps to validate an IFC model with an IDS file:

1. **Load Your IFC Model**  
   Open the IFC file in the viewer.

2. **Open the IDS Panel**  
   Open the **IDS** panel.

3. **Load an IDS File**  
   Select **Open IDS File**, and then choose the IDS specification file.

4. **Review Specifications**  
   Review the information requirements defined in the IDS file.

5. **Inspect Validation Results and Report**  
   Select a specific specification to see the corresponding elements in the model:
   - Passing elements are highlighted in green.
   - Failing elements are highlighted in red.
   - The validation report summarizes passed and failed elements for review.

![IDS Validation Results](/_media/ifc-ids.png)

## Automatic detection and validation rules

IDS integration supports automated validation for:

- required properties and attributes
- classification codes
- element types and geometry checks

When an IDS file is connected to the model, the viewer checks the model data against the selected rules and reports the validation result.

## Practical examples

- **Property validation**: Check whether _IfcWall_ elements include required attributes such as `FireRating` or `LoadBearing`.
- **Classification checks**: Identify elements that are missing required classification codes.
- **Model delivery checks**: Verify whether models follow project-specific data standards across consultants or project phases.

Use validation results to identify missing information before coordination, submission, or handover.
