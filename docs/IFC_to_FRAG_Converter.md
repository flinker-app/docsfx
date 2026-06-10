---
uid: IFC_to_FRAG_Converter
title: IFC to FRAG Converter (Microsoft Fabric Notebook)
description: Convert IFC files into optimized .frag binaries with a Microsoft Fabric notebook, then load them into the Power BI IFC Viewer for faster rendering of large models.
keywords: IFC to FRAG, FRAG converter, Microsoft Fabric notebook, BIM optimization, Power BI IFC viewer, Fragments, That Open Fragments, large IFC performance
canonical_url: https://docs.flinker.app/docs/IFC_to_FRAG_Converter.html
---

# IFC to FRAG Converter

## Executive Overview

The **IFC to FRAG Converter** is a Microsoft Fabric notebook that turns large IFC models into compact, geometry-optimized **`.frag`** files. The notebook is designed to run inside any Fabric workspace and produces a binary file that the **Power BI IFC Viewer** can render dramatically faster than the original IFC, especially for models above 100 MB.

This document covers both how to deploy the notebook (either by importing the ready-made file or by recreating it from scratch) and how to consume the generated `.frag` inside the existing Power BI IFC Viewer template.

---

## Why Convert to `.frag`?

The `.frag` format (from the open-source [That Open Fragments](https://github.com/ThatOpen/engine_fragment) library) is a compact, geometry-centric binary built on FlatBuffers + zlib compression. Compared to a plain `.ifc` source the same model becomes substantially smaller and faster to load in the viewer.

| Aspect | `.ifc` source | `.frag` source |
| :--- | :--- | :--- |
| **File size**  | Reference (1×)             | Typically **10×–30× smaller** |
| **Viewer load time** | Reference (1×)       | **Significantly faster** for large models |
| **Geometry**   | Full BREP / SweptSolid     | Pre-tessellated meshes, render-ready |
| **Attributes** | Full IFC property semantics | Identity only (Entity, GlobalId, ExpressId) |
| **Filtering in Power BI** | All slicers populated | Slicers on Entity / GlobalId / ExpressId only |

Use `.frag` whenever the model is primarily consumed visually (3D viewing, navigation, GUID-based highlighting, BCF integration). Stick with `.ifc` when the dashboard relies on attribute-driven slicers such as `Name`, `Building Storey`, `Room Name`, or `PredefinedType` — those columns are not preserved by the current converter (see [Limitations](#limitations)).

---

## Prerequisites

Before starting you will need:

1. A **Microsoft Fabric** workspace with notebook execution available.
2. **Power BI Desktop** to open the report template and configure the file path.
3. The converter wheel: [`ifc_to_frag-0.1.0-py3-none-any.whl`](../_media/ifc_to_frag-0.1.0-py3-none-any.whl).
4. (Optional) The ready-made notebook file: [`IFC-Frag_ConvertorNotebook.7z`](../_media/IFC-Frag_ConvertorNotebook.7z).
5. (Optional) The Power BI template: [`IFC_Frag_Parser.pbix`](../_media/IFC_Frag_Parser.pbix).

> **Built-in resources size limits:** A single file uploaded to a notebook's Built-in resources is capped at **100 MB**, with **500 MB** total. For IFC files larger than 100 MB, store the source inside a Lakehouse `Files/` folder instead.

---

## Method 1 — Import the Ready-Made Notebook

The fastest way to get the converter running is to import the provided `.ipynb` file directly into your Fabric workspace.

### Step 1 — Open the Import dialog

In your Fabric workspace, click **Import** at the top of the workspace, then **Notebook**, then **From this computer**.

![Import a notebook from the workspace toolbar](../_media/Import_a_Notebook2.png)

*Figure 1: Workspace → Import → Notebook → From this computer.*

### Step 2 — Upload the notebook file

In the **Import status** panel, click **Upload** and select the [`IFC-Frag_ConvertorNotebook.ipynb`](../_media/IFC-Frag_ConvertorNotebook.ipynb) file from your downloads. Once uploaded, the notebook appears in the workspace as **IFC-Frag_ConvertorNotebook**.

![Upload the .ipynb file and confirm it appears in the workspace](../_media/Import_a_Notebook1.png)

*Figure 2: Uploading the notebook file. After the upload completes, the new notebook becomes visible in the workspace items list.*

### Step 3 — Upload the wheel and your IFC file to Built-in resources

Open the imported notebook and switch to the **Resources** tab on the left. Under **Built-in**, click the **…** menu and choose **Upload files**. Upload:

* `ifc_to_frag-0.1.0-py3-none-any.whl` (the converter package — required once per notebook)
* Your IFC source file (for example `NBU_MedicalClinic_Arch-Optimized.ifc`)

Then edit the `IFC_FILE_NAME` parameter in the second code cell so it matches the name of the IFC file you just uploaded.

![Upload the wheel and IFC file, and update IFC_FILE_NAME](../_media/Import_a_Notebook3.png)

*Figure 3: Built-in resources panel (left) and the IFC_FILE_NAME parameter (right). Both the converter wheel and the IFC source must be present in `./builtin/` before running the notebook.*

### Step 4 — Run the notebook

Click **Run all**. The notebook installs dependencies, converts the IFC, validates the output, and prints both `ConversionStats` and `FragSummary`. The generated `.frag` file appears next to the source IFC inside `./builtin/`, with the same base name and a `.frag` extension.

---

## Method 2 — Create a New Notebook From Scratch

If you would rather build the notebook manually (for example to embed the conversion inside an existing pipeline), follow these steps.

### Step 1 — Create the notebook

In your Fabric workspace, click **New item** → **Notebook**. Name it whatever fits your workspace conventions.

### Step 2 — Upload the wheel

In the **Resources** panel, under **Built-in**, upload `ifc_to_frag-0.1.0-py3-none-any.whl` and your IFC source file as shown in *Figure 3* above.

### Step 3 — Add the install cell

Paste the following into the first code cell:

```python
%pip install "flatbuffers>=25.12.0" "ifcopenshell>=0.8.4" "numpy>=2.2.0"
%pip install "./builtin/ifc_to_frag-0.1.0-py3-none-any.whl"
```

### Step 4 — Add the conversion cell

Paste the following into the second code cell, then update `IFC_FILE_NAME` to match your uploaded IFC:

```python
from pathlib import Path
from ifc_to_frag import convert_ifc_to_frag, validate_frag

# === Change this only ===
IFC_FILE_NAME = "YourModel.ifc"
THREADS = 4
# ========================

source_ifc  = Path("./builtin") / IFC_FILE_NAME
output_frag = source_ifc.with_suffix(".frag")

if not source_ifc.exists():
    raise FileNotFoundError(f"IFC file not found: {source_ifc}")

stats = convert_ifc_to_frag(source_ifc, output_frag, threads=THREADS)
summary = validate_frag(output_frag)

print("=== ConversionStats ===")
print(stats)
print("\n=== FragSummary ===")
print(summary)
print(f"\nOutput: {output_frag}")
print(f"Size:   {output_frag.stat().st_size / (1024*1024):.2f} MB")
```

### Step 5 — Run the notebook

Click **Run all**. Successful execution prints conversion statistics, a validation summary, and the final file size. The generated `.frag` lands inside `./builtin/`.

---

## What's Inside the Generated `.frag`

The output is a **FlatBuffers** binary (identifier `"0001"` from the That Open Fragments schema) compressed with **zlib level 3**. The converter `v0.1.0` populates three vectors per element:

| Vector | Content | Maps to (Power BI) |
| :--- | :--- | :--- |
| `LocalIds`  | The IFC ExpressId of each retained element       | `ExpressId` |
| `Categories` | The IFC entity type (e.g. `IfcWall`, `IfcDoor`) | `Entity`    |
| `Guids`     | The IFC GlobalId (22-character base64)            | `GlobalId`  |

In addition, the file carries the **pre-tessellated geometry** (meshes, shells, samples) needed for fast rendering. Textual attributes (`Name`, `Description`, `ObjectType`, `LongName`, `Tag`, dimensions, room/storey associations, etc.) are **not** stored by `v0.1.0`.

The `FragSummary` printed by the notebook lists the populated counts so you can confirm the conversion succeeded:

```
=== FragSummary ===
local_ids=3258 categories=14 guids=3258 representations=... shells=... samples=...
```

---

## Using the `.frag` in the Power BI IFC Viewer

The Power BI IFC Viewer template supports `.frag` files via the same `Filepath` parameter used for `.ifc` files. No visual configuration changes are required.

1. Download the template: [`IFC_Frag_Parser.pbix`](../_media/IFC_Frag_Parser.pbix).
2. Open it in **Power BI Desktop**.
3. Follow the standard parameter-setting workflow described in **[Build reports with the IFC Viewer](https://docs.flinker.app/docs/ifc-viewer-usage-for-power-bi.html)**. The only difference is that you paste the full path of a `.frag` file (instead of a `.ifc`) into the `Filepath` parameter.
4. Click **Refresh**. The IFC Viewer visual loads and renders the model.

Loading a `.frag` and an `.ifc` together in the same report is fully supported — the parsers produce identical column schemas, so the resulting model table mixes both sources cleanly.

> **Tip — multi-file loading:** the `Filepath`, `Filepath2`, and `Filepath3` parameters can each point to either a `.ifc` or a `.frag`. The report also supports passing a folder path; in that case every `.ifc` and `.frag` inside the folder is loaded automatically.

---

## Limitations

The following limitations apply when the data source is a `.frag` (rather than `.ifc`):

* **No textual attribute slicers.** Filters on `Name`, `Description`, `ObjectType`, `LongName`, `Tag`, `PredefinedType`, `CompositionType`, and `InteriorOrExteriorSpace` will be empty for rows that originate from a `.frag`. Slicers on `Entity`, `GlobalId`, and `ExpressId` work normally.
* **No spatial structure.** `Building Storey` and `Room Name` require IFC relationship traversal and are therefore null for `.frag` rows.
* **No dimensional attributes.** `OverallHeight` and `OverallWidth` (Door / Window) are null.
* **Element counts can differ from the same model loaded as IFC.** The Power Query `parseIFC` step filters elements by `HasGeometry`; the converter only emits elements it could tessellate. Both views are internally consistent but the totals may not be identical.

If your dashboard depends on any of the missing columns above, keep using the `.ifc` source for that report. If your dashboard is primarily visual, switching to `.frag` typically yields the largest single performance win available without changing the visual.

---

## Try It With a Large Model

The performance benefit of `.frag` grows with model size. To see the difference clearly, run the notebook on a large public IFC and load the resulting `.frag` into the template.

**Recommended public test model — `NVW_DCR_LOD300_ARC.ifc` (~288 MB)**

* Source: [Duraark research dataset — NVW_DCR_LOD300 (`NVW_DCR-LOD_ifc.zip`, ~143 MB compressed)](https://tib.eu/data/duraark/BuildingData/01_IFC/NVW_DCR-LOD_ifc.zip)
* Indexed in: [BIMData / 40-BIM-models reference list](https://github.com/bimdata/BIMData-Research-and-Development/blob/master/pages/IFC_FILES.md)

Other large public alternatives from the same index:

* `NBU_MedicalClinic_MEP.ifc` (~207 MB) — inside [`NBU_MedicalClinic_ifc.zip`](https://tib.eu/data/duraark/BuildingData/01_IFC/NBU_MedicalClinic_ifc.zip)
* `LTU_AHouse_HEAT.ifc` (~181 MB) — inside [`LTU_A-House_2014-09-25_ifc.zip`](https://tib.eu/data/duraark/BuildingData/03_IFC_E57/LTU_A-House_2014-09-25_ifc.zip)
* `Holter_Tower_10.ifc` (~178 MB) — direct download from [Dropbox](https://www.dropbox.com/s/ybocflzyt33ilg5/Holter_Tower_10.ifc?dl=0)

After conversion, compare the original IFC's load time in the Power BI template against the generated `.frag` and you should see a clear difference.

---

## Downloads

* Converter wheel: [`ifc_to_frag-0.1.0-py3-none-any.whl`](../_media/ifc_to_frag-0.1.0-py3-none-any.whl)
* Ready-made notebook: [`IFC-Frag_ConvertorNotebook.7z`](../_media/IFC-Frag_ConvertorNotebook.7z)
* Power BI template: [`IFC_Frag_Parser.pbix`](../_media/IFC_Frag_Parser.pbix)
