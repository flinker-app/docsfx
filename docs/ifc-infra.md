---
title: Infrastructure Integration
description: Learn how the Infra feature in Flinker enhances alignment navigation, station visualization, and clipping tools for IFC 4.3 infrastructure models.
keywords: Infra, IFC 4.3, Infrastructure, Alignment, Station, Clipping, Navigation, BIM, Roads, Bridges, Flinker
canonical_url: https://docs.flinker.app/docs/ifc-infra.html
---

# Infrastructure Integration

The **Infrastructure Integration** feature in **Flinker** brings powerful tools for visualizing and interacting with **IFC 4.3 infrastructure models**.  
It focuses on **alignments**, **station navigation**, and **clipping planes**, helping users explore and analyze roads, bridges, and rail models with engineering precision.

With Infra, you can load IFC models containing _IfcAlignment_ entities, navigate along the route, view cross-sections, and inspect data interactively — all inside your browser.

![Infra Alignment Navigation](/_media/ifc-infra.png)
_Example of alignment navigation with station visualization and clipping section in Flinker._

## What is Infra?

**Infra** is a specialized viewer module that enhances the visualization and analysis of **IFC 4.3 infrastructure entities**, primarily focusing on:

- _IfcAlignment_ and _IfcAlignmentSegment_ elements
- Station navigation (chainage or KP)
- Cross-section clipping
- Station labels and coordinate mapping

It provides engineers with smooth camera navigation along the alignment path and real-time clipping tools to inspect geometry at any chainage point.

## Why Use Infra?

**Precision**  
Move the camera along exact chainage positions (e.g., 0+060, 0+140) and visualize model sections at any station.

**Clarity**  
Display or hide alignment paths and station markers for simplified infrastructure inspection.

**Control**  
Enable dynamic clipping to generate cross-sectional views for detailed analysis or coordination.

## Benefits of Infra Integration

- **IFC 4.3 Alignment Support**:  
  Load and visualize _IfcAlignment_ entities directly within the web viewer.

- **Interactive Station Navigation**:  
  Move smoothly between stations using a chainage (KP) slider.

- **Dynamic Clipping and Cross Sections**:  
  Create cross-sectional clipping planes perpendicular to the alignment for structural inspection.

- **Multi-Alignment Handling**:  
  Work with multiple road or rail alignments simultaneously in one model.

- **Visual Feedback**:  
  Real-time station highlighting and tagging directly in the 3D view.

## How to Use Infra in Flinker

Follow these steps to work with the **Infra** feature inside Flinker:

1. **Load Your IFC 4.3 Model**  
   Open your IFC 4.3 file containing _IfcAlignment_ entities in the viewer.

2. **Open the Infra Panel**  
   In the left sidebar, locate and expand the **Infra** section to access alignment controls.

3. **Show or Hide Alignments**  
   Use the **Show Alignments** / **Hide Alignments** buttons to toggle visibility of alignment curves.

4. **Select an Alignment**  
   Choose your desired alignment (e.g., `Alignment_0`) from the dropdown menu.

5. **Navigate to KP (Station)**  
   Use the **Move to KP** slider to move along the alignment path.  
   Each KP (kilometer point) corresponds to a real-world station (e.g., 0+060, 0+220, 1+120).  
   As you move, you’ll see real-time updates in the 3D view with station markers.

6. **Toggle Station Labels & Clipping Section**
   - Enable **Show Stations** to display KP markers.
   - Enable **Clipping Section** to generate a cross-section view at the current KP.

## Automatic Detection and Station Control

The Infra system automatically detects all _IfcAlignment_ elements within the model and computes their station points for navigation.  
Users can dynamically move through these points, inspect geometry transitions, and clip the model at any station for quick sectioning or visualization.

## Practical Examples

- **Road Design Review**:  
  Navigate along a highway alignment and examine bridge and tunnel entries at each station.

- **Bridge Cross-Section Analysis**:  
  Use clipping to inspect the superstructure or substructure geometry at specific chainages.

- **Rail Alignment Inspection**:  
  Switch between multiple rail alignments and visualize elevation transitions interactively.

## How to Get Started

See how **_Flinker_** brings **Infra-based alignment navigation** into your infrastructure workflows.

> [!div class="nextstepaction"]  
> [Book a Meeting Now](https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/)

We’ll show you how to manage alignments, stations, and cross-sections interactively — directly in your IFC 4.3 infrastructure models.
