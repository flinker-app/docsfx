---
title: DXF floor plan overlays
description: Learn how to load a DXF floor plan, assign it to a building level, calibrate it against the IFC model, and review the aligned overlay in 3D.
keywords: DXF overlay, DXF floor plan, IFC DXF, 2D drawing overlay, floor plan calibration, clipping planes, BCF, measurements, maps
canonical_url: https://docs.flinker.app/docs/DXF_Load.html
---

# DXF floor plan overlays

The **DXF floor plan overlay** feature lets you place a 2D DXF drawing directly on top of the IFC model floor view.

After calibration, the DXF stays aligned to the selected level so you can review the floor plan together with the model geometry.

This makes it easier to:

- compare consultant drawings with the IFC model
- review a floor plan in 2D and 3D at the same time
- navigate to a story and clip the model to that level
- create BCF viewpoints with the drawing visible in context
- measure and inspect model areas while the DXF remains visible
- review the model in map context together with the aligned drawing workflow

![Screenshot of a DXF floor plan shown in the viewer floor plan review mode](/_media/dxf-plan-view.png)

## What the DXF overlay supports

The DXF workflow lets you:

- load one DXF file or a folder with DXF drawings
- assign a drawing to a building level
- calibrate the drawing with two points in the DXF and the same two points in the 3D model
- show or hide the aligned DXF overlay while reviewing the IFC model
- use the aligned floor plan together with clipping planes, BCF, measurements, and map-based review workflows

## How it works

The DXF overlay is aligned to the IFC model by matching two reference points from the drawing with two matching points in the model.

After calibration, the viewer keeps the drawing attached to the selected level. When you open that level in floor plan view, the drawing and model stay in the same review context.

## Workflow overview

### Step 1  -  Open a DXF file

Open the file menu and select **Open DXF File**.

![Screenshot of the open file menu with the Open DXF File action](/_media/dxf-open-file.png)

### Step 2  -  Open the floor plan view

After the file is loaded, open the floor plan view and choose the level you want to review.

The viewer clips the model to that level so the DXF drawing and the IFC model can be reviewed together.

![Screenshot of a DXF floor plan displayed in the viewer floor plan view](/_media/dxf-plan-view.png)

### Step 3  -  Pick two points in the DXF drawing

Select **Calibrate** and pick two clear reference points in the DXF drawing.

Good examples include:

- wall corners
- grid intersections
- shaft corners
- column centers
- stair corners

![Screenshot of DXF calibration with two points selected in the drawing](/_media/dxf-calibrate-drawing-points.png)

### Step 4  -  Pick the same two points in the IFC model

In the 3D model, click the same two locations used in the DXF drawing.

This allows the viewer to align the drawing with the IFC geometry.

![Screenshot of model calibration with the matching points selected in the IFC model](/_media/dxf-calibrate-model-points.png)

### Step 5  -  Review the aligned DXF overlay

After calibration, show the overlay and review the aligned DXF directly on top of the clipped model level.

![Screenshot of a calibrated DXF overlay shown together with the clipped 3D IFC model](/_media/dxf-overlay-3d-clipping.png)

## IFC Viewer - Load and align a DXF floor plan 

1. Open the IFC model in the viewer.
2. Open the floor plan or overlay tools from the left toolbar.
3. Select **Load Document File** for a single drawing or **Load Document Folder** when you want to load multiple DXF files.
4. Select the DXF file you want to use.
5. Choose the level that matches the drawing.
6. Select **Calibrate**.
7. Pick two clear reference points in the DXF drawing.
8. Pick the same two points in the 3D model.
9. Turn on the overlay to review the aligned result.


## Use DXF with clipping planes

You can use manual clipping planes together with the DXF overlay.

This helps when you need to:

- cut through the model while keeping the 2D plan visible
- isolate part of the level for coordination review
- inspect the relation between the floor plan and nearby model elements

If you create a clipping-based review view, keep the DXF visible so the section result and the plan can be checked together.

![Screenshot of the DXF overlay used together with a clipped 3D model view](/_media/dxf-overlay-3d-clipping.png)

## Use DXF with BCF viewpoints

Use DXF with BCF viewpoints to capture coordination issues while the aligned drawing is visible in the same review context.

## Use DXF with measurements

Use DXF with measurements to check model dimensions against the drawing while the overlay stays visible. For measurement tools, see [Measure and export manual measurements](ifc-measurements.md).

## Use DXF with maps

Use DXF with maps when you want to review the aligned drawing together with the model in real-world location context.

For map placement details, see [IFC georeferencing and maps](real_worldMap.md).

![Screenshot of a DXF drawing reviewed in map context](/_media/dxf-overlay-map.png)

## Best results

For the best alignment result:

- use the correct level before you calibrate
- choose two points that are far apart
- pick points that are visible and unambiguous in both the DXF and the model
- verify the overlay before starting BCF, clipping, or measurement work

## Troubleshooting

### The DXF does not align correctly

Check whether:

- the drawing was assigned to the correct level
- the same two points were picked in both views
- the selected points are far enough apart
- the drawing matches the IFC export you are reviewing

### The overlay appears on the wrong floor

Check whether the drawing was assigned to the correct storey during setup.

### The drawing is hard to compare with the model

Open the matching floor from the level list so the viewer clips the model to that story before you review the overlay.

## Related articles

- [IFC Viewer](ifc-viewer.md)
- [2D drawing overlays (PDF)](PDF-2d.md)
- [Measure and export manual measurements](ifc-measurements.md)
- [Save filters and viewpoints with BCF](bcf-viewpoints.md)
- [IFC georeferencing and maps](real_worldMap.md)
