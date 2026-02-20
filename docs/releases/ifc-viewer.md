---
title: Base IFC Viewer Release Notes
description: Release history for the base Flinker IFC Viewer, covering model loading, BCF, UI, and performance enhancements.
keywords: IFC Viewer release notes, base viewer changelog, Flinker IFC updates
canonical_url: https://docs.flinker.app/docs/releases/ifc-viewer.html
---

 ### 3.1.0 (3.1.0) - 2025-11-26

* Improving the eye-icon button for model visibility and adding toolbar badges
* Added IFC loading worker support for specific domains.
* Enabled loading multiple local IFC files simultaneously.
* Ensured BCF data is cleared when closing.
* Improved handling of multiple models.
* Added SharePoint Single Sign-On.
* Added support for loading multiple files from a download URL.
* Improved selection behavior when using clipping planes.
* Improved clipping performance.
* Added IFC color event handling.
* Added support for loading BCF data from download URLs.
* Added optional white background mode.
* Extended IFC worker improvements.
* Enhanced search functionality and further improved overall search.
* Corrected background color handling.
* Added support for edge rendering.
* Updated UI using Tailwind.
* Added an IDs report.
* Introduced infrastructure improvements.
* Fixed a context menu bug.
* Added further search improvements.
* Fixed fullscreen mode.
* Added transparency features and updated ThatOpen libraries.
* Corrected model disposal behavior.
* Fixed the “new topics” dialog bug.
* Fixed an iOS-specific bug.
* Fixed the storey filter.
* Corrected SharePoint connector sign-in issues.
* Fixed duplicate selection behavior.
* Fixed the topic panel.

---

### 3.0.0 (3.0.0) - 2025-07-28

* Update to high performance fragments
* Support loading .frag files, added sample
* Added zoom on double click
* Improved visibility performance
* Support BCF coloring
* Support snapshots for BCF
* Added BCF topics filename column
* Added orthogonal BCF sample
* Correctly fit camera when multiple models are loaded
* Updated UI
* Added filehandler with redirect


---

### 2.2.0 (2.2.0) - 2025-04-25

* Moved BCF Topics List UI below model viewer
* Fixed loading of BFC file without adding new viewpoints
* Add viewpoint on BCF topic creation
* Possibility to load multiple BCF files and select file to save, repositioned add BCF topic button
* Added create BCF topic function to mouse right click
* Added fullscreen support for iframe
* Apply colors on topic selection
* Add current visibility and selection to newly created BCF topics
* Higher resolution
* Save visible clipping planes whe new BCF topic is created
* Added ratings

---

### 2.1.7 (2.1.7) - 2025-03-20

* Fixed context menu loading for SharePoint list view, properties in table are now selectable
* Fixed loading floor plans (model does not turn black anymore)
* Selection information shows correct color in dark mode
* Fixed search across loaded models

---

### 2.1.5 (2.1.5) - 2025-03-07

* Search and filter with ai generated IDS files by ifc classes and properties (property sets, property names and property values)
* Open IDS files from computer to set filter

---

### 2.1.4 (2.1.4) - 2025-03-04

* New UI to toggle left panel
* Possibility to use the mesarement and clipper at the same time
* Move clipping, measurements and plans to left navigation
* Moved toolbar to contextmenu and added viewcube

---

