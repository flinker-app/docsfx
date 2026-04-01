# IFC-IDS Compliance Dashboard

<iframe title="IFC-IDS_Attribue-Property-material_Check" style="width: 100%; aspect-ratio: 16 / 9;" src="https://app.powerbi.com/view?r=eyJrIjoiODdjODEyNTktNzZiMC00YzFlLTkzYzYtNTAxZDU0Njk4MTQ2IiwidCI6IjQ0YjY0MGYzLTQ5YjAtNDMwNC05Yzk4LWM2MWQwYmMwZGMwMiJ9" frameborder="0" allowFullScreen="true"></iframe>

---

## What this dashboard does

The dashboard reads an IFC file and an IDS file, then checks every applicable IFC element against every requirement defined in the IDS. Results are shown as **Pass**, **Fail**, or **Not Checked** at the element level, with explanations for every failure.

You can filter results by specification, facet type, element type, and result status — and see which exact elements failed and why.

---

## What you need

| Item | Description |
|---|---|
| **IFC file** | Hosted on SharePoint, OneDrive, or a public URL |
| **IDS file** | A valid `.ids` XML file (IDS 1.0 schema) |
| **Power BI Desktop** | With the Flinker IFC Viewer visual installed |

---

## How to use it

**1. Set the file locations**

Open Power BI Desktop → Transform Data → Parameters. Set:
- `FileLocation` — URL or path to your `.ifc` file
- `IDS_FilePath` — URL or path to your `.ids` file

**2. Refresh the data**

Click **Refresh** in Power BI Desktop. The dashboard will parse both files and run all checks automatically.

**3. Read the results**

The top KPI cards show the overall pass rate and a breakdown of Pass / Fail / Not Checked counts. Use the slicers to drill into a specific specification, facet type, or element type.

**4. Inspect failures**

Select any row in the Specifications table on the left to open the **Specification Detail panel**. It shows:
- Status badge (Good / Warning / Critical / Not Checked)
- Pass rate with progress bar
- Every failed element with the exact reason for failure
- For value checks: what value was found vs. what was expected

---

## What gets checked

### Facet types

| Facet | Checked | What it verifies |
|---|---|---|
| **Attribute** | ✅ Pass / Fail | IFC attribute present and not empty (e.g. Name, Description, ObjectType, Tag, PredefinedType) |
| **Property** | ✅ Pass / Fail | Property exists in the correct Pset with a value (e.g. `Pset_DoorCommon.FireRating`) |
| **Material** | ✅ Pass / Fail | At least one material is assigned to the element |

### Value checks

When the IDS requirement specifies an expected value, the dashboard goes beyond presence-only checking:

| Check type | Example in IDS | Result |
|---|---|---|
| **Exact match** | `FireRating = E60` | Fail if actual value ≠ E60 |
| **Numeric range** | `ThermalTransmittance ≥ 0.5 and ≤ 2.0` | Fail if value is outside the range |
| **Presence only** | No value specified | Pass if the attribute / property / material exists |

The **Actual Value** column always shows what was found in the IFC, whether the check passed or failed.

### Applicability (which elements are checked)

The dashboard applies each specification to the elements that match its **Entity** filter. Matching uses prefix logic, so `IFCWALL` in the IDS will match both `IFCWALL` and `IFCWALLSTANDARDCASE` in the IFC model — consistent with the IDS standard.

---

## Failure types

Every failed check is classified into one of three types, visible in the **Fail Type** column:

| Fail Type | Meaning |
|---|---|
| **Missing** | The attribute, property, or material does not exist on the element |
| **Wrong Value** | The value exists but does not match the expected value |
| **Out of Range** | The numeric value exists but falls outside the allowed min/max range |

---

## Known limitations

The following IDS features are **not yet supported**. Checks that require these features will show as **Not Checked** (grey).

### Applicability — what can be used to select elements

The dashboard currently filters elements by **Entity type only**.

| Applicability condition | Support |
|---|---|
| Entity (e.g. `IFCWALL`) | ✅ Supported |
| PredefinedType (e.g. `IFCPILE.POURED`) | ❌ Not supported — all elements of that entity are checked, regardless of type |
| Attribute with value in applicability | ❌ Not supported |
| Property / Pset in applicability | ❌ Not supported |
| Classification in applicability | ❌ Not supported |
| Relation-based applicability | ❌ Not supported |

> **Example:** An IDS rule that says "check only piles with PredefinedType = POURED" will be applied to **all** piles in the model, not just the poured ones.

### Requirements — what can be validated

| Requirement facet | Support |
|---|---|
| Attribute | ✅ Supported |
| Property (Pset) | ✅ Supported |
| Material | ✅ Supported |
| Classification | ❌ Not supported → Not Checked |
| IfcType / TypeObject | ❌ Not supported → Not Checked |
| Relation | ❌ Not supported → Not Checked |
| Part-of / Aggregation | ❌ Not supported → Not Checked |

### Other limitations

- **Single file only** — the dashboard checks one IFC file at a time. Multi-file validation is not supported.
- **Material check is presence-only** — the dashboard confirms that a material is assigned, but does not validate material name or layer composition against an expected value (unless the IDS specifies an exact value in the `<value>` element).
- **IFC 2x3 and IFC 4** — both are supported. IFC 4.3 files will load but schema-specific entity names may not all be recognized.
- **Large files** — performance depends on file size and the number of specifications. Files above ~150 MB may refresh slowly.

---

## Result values explained

| Result | Colour | Meaning |
|---|---|---|
| **Pass** | 🟢 Green | The element satisfies the requirement |
| **Fail** | 🔴 Red | The element does not satisfy the requirement |
| **Not Checked** | ⚪ Grey | The requirement uses a facet type that is not yet supported (see limitations above) |

The overall **Pass Rate** is calculated as `Pass / (Pass + Fail)`. Not Checked rows are excluded from the rate so they do not inflate or deflate the score.

---

## Some points to note

**Why does a specification show N/A instead of a pass rate?**

The specification uses a facet type (Classification, Type, or Relation) that is not currently supported. All elements return Not Checked, so there is no Pass/Fail ratio to display.

**Why are there fewer elements in the compliance table than in my IFC model?**

Only elements with valid geometry (placement + representation) are loaded from the IFC file. Non-geometric objects such as type definitions, relationships, and annotation objects are excluded.

**Can I use this with an IDS file that has multiple specifications?**

Yes. Every specification in the IDS file is parsed and checked independently. The Specifications table shows one row per specification with its own pass rate.

**The pass rate looks wrong — some elements appear multiple times.**

Each row in the compliance table represents one element × one requirement. If a specification has three requirements, a single element will produce three rows. This is by design — it allows you to see exactly which requirement each element passes or fails.
