---
title: Real World Map
description: Learn how to place geolocated IFC models on a real-world 3D map, what IFC location data is required, and what to expect when model coordinates are incomplete.
keywords: real world map, IFC geolocation, IFC map, BIM GIS, IFC site coordinates, IFC map conversion, Google 3D tiles, Flinker
canonical_url: https://docs.flinker.app/docs/real_worldMap.html
---

# Real World Map

The **Real World Map** feature places your IFC model on top of a real-world 3D map using the location data already stored in the IFC file.

This makes it easier to:

- verify that a project is positioned correctly
- compare the model against its surrounding context
- understand how the building relates to nearby roads, buildings, and landscape

![Real World Map example](/_media/real-world-map-placeholder.png)


## How It Works

When a model contains usable geolocation, the viewer can show it in its real-world context on the map.

In most cases, this happens automatically when the IFC file includes valid georeferencing data and location information.

## Supported IFC Location Data

The feature supports the most common IFC geolocation methods.

### IFC4 Models

For IFC4-based files, the viewer can use coordinate reference system (CRS) information stored in the IFC model.

This is the preferred option for accurate real-world placement.

### IFC2X3 Models

For IFC2X3 files, the viewer can use location values stored in `IfcSite`, such as:

- reference latitude
- reference longitude
- reference elevation


## Coordinate System Support

The viewer can convert supported projected coordinate systems into map coordinates for display on the real-world map.

Current support includes:

- `EPSG:28992`
- `EPSG:8395`
- `EPSG:27700`

If the IFC file contains another EPSG code, placement may still work when the coordinate system can be resolved successfully.

## What You Need in the IFC File

For reliable placement, your IFC model should include at least one of these:

- valid IFC4 map conversion / CRS data
- valid `IfcSite` latitude and longitude
- usable elevation information

The more complete the geolocation data is, the more accurate the result will be.

## Terrain Placement

The model is displayed so it sits naturally within the real-world map view.

This helps the model align more naturally with:

- ground level
- surrounding buildings
- local site context

If elevation data is available in the IFC file, the vertical position can be more accurate.


## Best Results

For the best placement quality:

- export IFC files with georeferencing enabled
- include CRS or `IfcSite` location data
- include elevation if available
- verify that the source model uses the correct project coordinate system

## Known Limitations

- Placement quality depends on the geolocation quality stored in the IFC file.
- Some coordinate systems may not be supported if the EPSG reference is missing or unclear.

## Troubleshooting

### Model appears in the wrong location

Check whether the IFC file contains:

- the correct latitude and longitude
- the correct CRS or EPSG reference
- the intended project base point / survey point settings from the authoring tool

### Model does not appear on the map

Possible reasons:

- the IFC file does not contain usable geolocation data
- the coordinate system could not be resolved


## Related Features

- [IFC Viewer](ifc-viewer.md)
- [IFC Filters](ifc-filters.md)
