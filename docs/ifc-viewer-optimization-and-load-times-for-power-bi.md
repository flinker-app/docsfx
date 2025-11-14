---
title: Loading and Optimisation of IFC Data in Power BI
description: Learn what happens during IFC optimisation and refresh in Power BI, how long it typically takes for small and large projects, and how to optimise performance and schedule background refreshes.
keywords: IFC, Power BI, IFC query, optimisation, load times, refresh, scheduled refresh, performance, BIM, ACC comparison
canonical_url: https://docs.flinker.app/docs/ifc-loading-and-optimisation-in-power-bi.html
---


# Loading and Optimisation with the IFC Data in Power BI

This page explains what happens when you load IFC data into Power BI and how to optimise the process.

## Step 1 – IFC Optimisation & Data Refresh (IFC query)

**Goal:** Turn raw IFC files into efficient Power BI tables.

This step happens when you **refresh** the dataset (or load it for the very first time). Power BI executes the IFC query and the IFC service does the heavy work.

During optimisation and refresh, the IFC query:

* Reads all IFC files from your selected data source.
* Converts the full IFC model — including geometry and all properties — into a simplified, optimised table structure that Power BI can load efficiently.

This is computationally expensive, but it only needs to be done **once per model (or when the model changes)**. That’s why you experience a longer wait on the first refresh or after bigger updates to your IFC files.

* Runs when you first point a query at a source with IFC models or trigger a refresh.
* Can take **several minutes to tens of minutes** depending on number and size of models.
* This is normal – the IFC query and the IFC service are doing the heavy lifting once.

### How many models can I load, and how long does it take?

The IFC query itself can handle many **IFC files** in one run, but in practice the main limit is **Power BI**:

* Dataset/model size and workspace capacity
* Available memory and CPU on the machine or capacity that runs the refresh

As a rough orientation:

* **Smaller projects** (a few IFCs, <1 GB total): first refresh usually completes in a **few minutes** or tens of minutes.
* **Larger projects** (dozens of IFCs, several GB total): first refresh can take **up to hours**, depending on size and Power BI capacity.

For reliable performance:

* Keep datasets within what your Power BI capacity can handle comfortably.
* Split very large projects into multiple datasets (per project, phase, building, or discipline) instead of putting *everything into one model*.
* Check that:

  * Power BI has internet access
  * Your data source is reachable
  * Your machine has sufficient RAM/CPU

## Step 2 – Report Opening & Visualising the Data

**Goal:** Open the report and work with the already-loaded IFC tables.

Once the data has been refreshed and optimised into Power BI tables:

* Power BI opens the report using the prepared dataset.
* Measures, visuals, and relationships work on this optimised model.
* No IFC files are read again while you simply navigate and analyse.

Result: after the heavy optimisation/refresh step, your report behaves like a typical Power BI model, with:

* **Changing report pages** does *not* reload the entire IFC dataset.
* Quick filter and slicer interactions, no re-parsing of IFC files on every click.

Opening the report or switching pages **does not** run a new refresh. A refresh only happens when you explicitly trigger it in Power BI Desktop or via scheduled refresh in the Power BI Service.

## Advantages vs. Autodesk / Cloud-only approaches

Compared to workflows where optimisation happens entirely in a third-party cloud (e.g. Autodesk Construction Cloud), the Flinker IFC query has several benefits:

* **Data stays in your environment**

  * Power BI runs in your **tenant**.
  * No separate project setup or data migration to an external cloud.

* **Full control over refresh**

  * You decide when optimisation/refresh happens (e.g. nightly, weekly).
  * Use **Power BI Service scheduled refresh** to run heavy work in the background.

* **Transparent scaling**

  * You can distribute models across multiple datasets/reports.
  * You can scale hardware and Power BI capacity as your projects grow.

* **Reusable, efficient Semantic Model**

  * IFC data can be stored as a Fabric Semantic Model.
  * Even if the model has 20+ tables and tens of millions of rows, each report only queries the data needed for its visuals (e.g. door counts, area by zone, selected buildings) – the full dataset is never pulled into the PBIX.


## Power BI Service: Background Jobs & Scheduling

For best user experience, run heavy optimisation and loading **in the background** using Power BI Service:

* Publish your PBIX to Power BI Service.
* Configure **scheduled refresh** (e.g. nightly or early morning).
* Let the IFC optimisation + loading run outside working hours.
* During the day, users open the report and interact with a **pre-loaded** dataset.

### Semantic Model in Power BI Service

When you publish a Power BI Desktop report to the Power BI Service, the data model inside the PBIX automatically becomes a **Semantic Model**. This is a centralized, reusable model that stores your tables, relationships, measures, and security rules – including any data coming from **IFC/BIM**.

**Key advantages of using a Semantic Model (especially for IFC):**

* **Single source of truth**
  All reports connect to the same curated model, so KPIs and calculations are always consistent.
  For example, the *“Count of doors”* measure is defined once in the Semantic Model – every report that shows door counts (per building, per floor, per project) uses exactly the same logic.

* **Reuse across multiple reports**
  You import and map the IFC data once, then reuse it across many reports and dashboards.
  Imagine a Semantic Model with 20 tables and 50 million IFC rows: one report might focus on *door counts*, another on *area by zone*, another on *asset quantities per contractor* – all using the same model, with no extra imports.

* **Better governance & security**
  Row-level security and permissions (e.g. per project, building, region, or company) are defined once in the Semantic Model and automatically apply to every connected report.

* **Performance & scalability**
  The model is optimized in the service (VertiPaq / Direct Lake / DirectQuery), and Power BI only retrieves the data needed for the visuals. Power BI does **not** load million IFC rows into the PBIX. It only pulls the filters you applied (project, floor, phase, etc.).

* **Easier maintenance**
  New measures or attributes are added once to the Semantic Model and are instantly available to all reports.
  For example, if you create a new measure *“Net area per floor”* or bring in a new IFC property like fire rating, you don’t need to touch every PBIX – all connected reports can start using it immediately.

* **IFC-specific benefit**
  IFC-derived tables and properties become part of this shared model, so you can easily join BIM data with cost, schedule, maintenance, or sensor data.

## Best Practices for Good Performance

* **Start small**
  Begin with a subset of models to validate the setup and performance.

* **Avoid extreme multitasking**
  Close unused PBIX files and heavy browser sessions during the first optimisation run.

* **Use logical model groups**
  Split very large projects into multiple datasets (by phase, building, discipline).

* **Use scheduled refresh**
  Let Power BI Service handle the heavy work outside of peak hours.
