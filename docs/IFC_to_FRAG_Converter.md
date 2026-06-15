---
uid: IFC_to_FRAG_Converter
title: IFC to FRAG Converter (Microsoft Fabric Notebook)
description: Convert IFC files into optimized .frag binaries with a Microsoft Fabric notebook, then load them into the Power BI IFC Viewer for faster rendering of large models.
keywords: IFC to FRAG, FRAG converter, Microsoft Fabric notebook, BIM optimization, Power BI IFC viewer, Fragments, That Open Fragments, large IFC performance
canonical_url: https://docs.flinker.app/docs/IFC_to_FRAG_Converter.html
---

# IFC to FRAG Converter

## Executive Overview

The IFC to FRAG Converter is a Microsoft Fabric notebook that turns large IFC models into compact, geometry-optimized `.frag` files. The notebook is designed to run inside any Fabric workspace and produces a binary file that the Power BI IFC Viewer can render dramatically faster than the original IFC, especially for models above 100 MB.

This document covers both how to deploy the notebook (either by importing the ready-made file or by recreating it from scratch) and how to consume the generated `.frag` inside the existing Power BI IFC Viewer template.

## Why Convert to `.frag`?

The `.frag` format (from the open-source [That Open Fragments](https://github.com/ThatOpen/engine_fragment) library) is a compact, geometry-centric binary built on FlatBuffers and zlib compression. Compared to a plain `.ifc` source the same model becomes substantially smaller and faster to load in the viewer.

| Aspect | `.ifc` source | `.frag` source |
| :--- | :--- | :--- |
| **File size**  | Reference (1x)             | Typically **10x to 30x smaller** |
| **Viewer load time** | Reference (1x)       | **Significantly faster** for large models |
| **Geometry**   | Full BREP / SweptSolid     | Pre-tessellated meshes, render-ready |
| **Attributes** | Full IFC property semantics | Identity only (Entity, GlobalId, ExpressId) |
| **Filtering in Power BI** | All slicers populated | Slicers on Entity, GlobalId, and ExpressId only |

Use `.frag` whenever the model is primarily consumed visually (3D viewing, navigation, GUID-based highlighting, BCF integration). Stick with `.ifc` when the dashboard relies on attribute-driven slicers such as `Name`, `Building Storey`, `Room Name`, or `PredefinedType`. Those columns are not preserved by the current converter (see [Limitations](#limitations)).

## Prerequisites

Before starting you will need:

1. A Microsoft Fabric workspace with notebook execution available.
2. Power BI Desktop to open the report template and configure the file path.
3. The converter wheel `ifc_to_frag-0.1.0-py3-none-any.whl`.
4. The ready-made notebook file `IFC-Frag_ConvertorNotebook.ipynb` (when using Method 1).
5. The Power BI template `IFC_Frag_Parser.pbix`.

> **Built-in resources size limits:** A single file uploaded to a notebook's Built-in resources is capped at **100 MB**, with **500 MB** total. For IFC files larger than 100 MB, store the source inside a Lakehouse `Files/` folder instead.

## Method 1: Import the Ready-Made Notebook

The fastest way to get the converter running is to import the provided `.ipynb` file directly into your Fabric workspace.

### Step 1: Upload the notebook file

In your Fabric workspace, open the **Import status** panel and click **Upload**. Select the `IFC-Frag_ConvertorNotebook.ipynb` file from your local drive. Once uploaded, the notebook appears in your workspace items list. *Figure 1* below illustrates the sequence: click **Upload** (arrow 1), pick the `.ipynb` file (arrow 2), and confirm it appears in the workspace items list (arrow 3).

![Upload the .ipynb file and confirm it appears in the workspace](../_media/Import_a_Notebook1.png)

*Figure 1: Notebook upload workflow.*

If the Import status panel is not visible, open it from the workspace toolbar via **Import**, then **Notebook**, then **From this computer**, as shown in *Figure 2*.

![Import a notebook from the workspace toolbar](../_media/Import_a_Notebook2.png)

*Figure 2: Workspace toolbar Import menu navigation.*

### Step 2: Upload the wheel and your IFC file to Built-in resources

Open the imported notebook and switch to the **Resources** tab on the left. Under **Built-in**, click the **...** menu and choose **Upload files**. Upload:

* `ifc_to_frag-0.1.0-py3-none-any.whl` (the converter package, required once per notebook).
* Your IFC source file (for example `NBU_MedicalClinic_Arch-Optimized.ifc`).

Then edit the `IFC_FILE_NAME` parameter in the second code cell so it matches the name of the IFC file you just uploaded.

![Upload the wheel and IFC file, and update IFC_FILE_NAME](../_media/Import_a_Notebook3.png)

*Figure 3: Built-in resources panel (left) and the IFC_FILE_NAME parameter (right). Both the converter wheel and the IFC source must be present in `./builtin/` before running the notebook.*

### Step 3: Run the notebook

Click **Run all**. The notebook installs dependencies, converts the IFC, validates the output, and prints both `ConversionStats` and `FragSummary`. The generated `.frag` file appears next to the source IFC inside `./builtin/`, with the same base name and a `.frag` extension.

## Method 2: Create a New Notebook From Scratch

If you would rather build the notebook manually (for example to embed the conversion inside an existing pipeline), follow these steps.

### Step 1: Create the notebook

In your Fabric workspace, click **New item**, then **Notebook**. Name it whatever fits your workspace conventions.

### Step 2: Upload the wheel

In the **Resources** panel, under **Built-in**, upload `ifc_to_frag-0.1.0-py3-none-any.whl` and your IFC source file as shown in *Figure 3* above.

### Step 3: Add the install cell

Paste the following into the first code cell:

```python
%pip install "flatbuffers>=25.12.0" "ifcopenshell>=0.8.4" "numpy>=2.2.0"
%pip install "./builtin/ifc_to_frag-0.1.0-py3-none-any.whl"
```

### Step 4: Add the conversion cell

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

### Step 5: Run the notebook

Click **Run all**. Successful execution prints conversion statistics, a validation summary, and the final file size. The generated `.frag` lands inside `./builtin/`.

## Using the `.frag` in the Power BI IFC Viewer

The Power BI IFC Viewer template supports `.frag` files via the same `Filepath` parameter used for `.ifc` files. No visual configuration changes are required.

1. Open the Power BI template `IFC_Frag_Parser.pbix` in Power BI Desktop.
2. Follow the standard parameter-setting workflow described in [Build reports with the IFC Viewer](https://docs.flinker.app/docs/ifc-viewer-usage-for-power-bi.html). The only difference is that you paste the full path of a `.frag` file (instead of a `.ifc`) into the `Filepath` parameter.
3. Click **Refresh**. The IFC Viewer visual loads and renders the model.

Loading a `.frag` and an `.ifc` together in the same report is fully supported. The parsers produce identical column schemas, so the resulting model table mixes both sources cleanly.

> **Tip on multi-file loading:** the `Filepath`, `Filepath2`, and `Filepath3` parameters can each point to either a `.ifc` or a `.frag`. The report also supports passing a folder path; in that case every `.ifc` and `.frag` inside the folder is loaded automatically.


## Performance

For typical architectural models the conversion delivers a substantial reduction in both file size and viewer load time:

* **File size.** `.frag` files are usually **10x to 30x smaller** than the source `.ifc`. A 300 MB IFC commonly produces a `.frag` between 10 MB and 30 MB depending on geometry density.
* **Viewer load time.** Rendering a `.frag` in the Power BI IFC Viewer is several times faster than rendering the equivalent `.ifc`, with the largest gains observed on models above 100 MB. The visual receives geometry that has already been tessellated, so it skips the heaviest step of the IFC pipeline on every refresh.
* **Visual quality.** Identical to the source IFC, because the geometry is pre-tessellated once during conversion rather than re-tessellated by the visual on every load.

The performance gain grows with model size, so the larger the source IFC, the more compelling the case for converting to `.frag`.