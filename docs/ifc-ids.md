---
title: IDs Integration
description: Learn about the IFC IDS (Information Delivery Specification) integration for data validation and model compliance in SharePoint and Teams.
keywords: IDS, IFC, BIM, Validation, SharePoint, Teams, Integration
canonical_url: https://docs.flinker.app/docs/ifc-ids.html
---

# IDS Integration

Integrate the **IFC Information Delivery Specification (IDS)** into your SharePoint and Teams workflows to ensure model compliance, data consistency, and delivery standards across all stakeholders.

## What is IDS?

**Information Delivery Specification (IDS)** is a **buildingSMART standard** for defining information requirements in a computer-interpretable form.  
It allows for **automatic compliance checking** of IFC models, which increases quality control and improves data fidelity.  
IDS also supports **efficient data delivery** by setting clear expectations and providing precise guidelines on what needs to be exchanged.

With IDS, users can specify how **objects, classifications, materials, properties**, and even **values** should be delivered in an IFC model.

- Enables automatic model validation
- Increases consistency and quality control
- Standardizes how data is exchanged and verified

## Why Use IDS?

**Clarity**  
IDS helps you automate data exchanges thanks to its clear and strict structure and well-defined requirements.

**Confidence**  
Enhance interoperability by controlling the quality and reliability of data with IDS.

**Consistency**  
Ensure all project data adheres to the same specification through the IDS standard.

## Benefits of IDS Integration

- **Automated Data Validation**:  
  Check IFC models against defined IDS rules directly within Microsoft 365 environments.

- **Quality Assurance in BIM Data**:  
  Verify that every model meets required specifications before submission or sharing.

- **Centralized Model Management**:  
  Manage IDS templates, validation reports, and compliance statuses in SharePoint and Teams without switching platforms.

## How to Use IDS in Flinker

Follow these steps to validate your IFC models using the IDS feature inside **Flinker**:

1. **Load Your IFC Model**  
   Start by uploading or opening your IFC file within the viewer.

2. **Open the IDS Panel**  
   In the Flinker interface, locate and open the **IDS Panel** to access the validation tools.

3. **Load an IDS File**  
   Click on the **“Open IDS File”** button to select and load your IDS specification file.

4. **Review Specifications**  
   Once the IDS file is loaded, you can view all **information requirements** defined within it — including passing and failing elements.

5. **Inspect Validation Results and Report**  
   Select a specific specification to see the corresponding elements in the model:
   - **Passing elements** are highlighted in **green**.
   - **Failing elements** are highlighted in **red**.  
     At the same time, you can view a **detailed validation report** summarizing all passed and failed elements, providing full transparency and actionable insights for improving model quality.

![IDS Validation Results](/_media/ifc-ids.png)
_Example of IDS validation results highlighting passing (green) and failing (red) elements with a summary report._

## Automatic Detection and Validation Rules

IDS integration supports automated validation for:

- **Required Properties and Attributes**
- **Classification Codes**
- **Element Types and Geometry Checks**

When an IFC model is uploaded or shared, it’s automatically validated against the connected IDS rules, producing clear, actionable compliance reports.

## Practical Examples

- **Property Validation**: Ensure that all _IfcWall_ elements include the required “FireRating” or “LoadBearing” attributes before coordination or review.
- **Classification Checks**: Automatically detect elements missing Uniclass or OmniClass codes.
- **Model Delivery Compliance**: Confirm that all models follow the same data standards across multiple consultants or project phases.

This improves data quality, minimizes rework, and guarantees that everyone delivers information aligned with the project’s data requirements.

## How to Get Started

See how **_Flinker_** brings **IDS-based validation** directly into your Microsoft 365 ecosystem.

> [!div class="nextstepaction"]  
> [Book a Meeting Now](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

We’ll show you how to define IDS templates, validate IFC models, and maintain consistent data quality across your entire project workflow.
