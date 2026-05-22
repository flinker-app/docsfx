---
title: BIM Collaboration Format (BCF)
description: Learn how BIM Collaboration Format (BCF) supports model-based issue coordination and how Flinker IFC Viewer brings BCF workflows into Microsoft 365.
keywords: BCF, BIM Collaboration Format, buildingSMART, openBIM, issue coordination, IFC Viewer, SharePoint, Microsoft Teams, Microsoft Lists
canonical_url: https://docs.flinker.app/docs/ifc-bcf.html
---

# BIM Collaboration Format (BCF)

BIM Collaboration Format (BCF) is a buildingSMART openBIM standard for exchanging model-based issues between project teams and software tools.

Use BCF when you need to keep coordination issues connected to the model context, including viewpoints, selected elements, visibility state, comments, status, and issue metadata.

## What BCF contains

A BCF file can include issue topics, comments, snapshots, viewpoints, camera positions, selected components, hidden components, clipping planes, labels, priorities, due dates, and related metadata.

BCF does not replace the IFC model. It works with the model by storing the issue context that tells reviewers where to look and what needs attention.

## File example

A BCF file is a package that contains XML topic data and related viewpoint files. A shortened topic entry can look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Markup>
  <Topic Guid="8f1b8f28-4f4f-4db8-8a3f-0c77e4b61f13" TopicType="Issue" TopicStatus="Open">
    <Title>Check duct clearance</Title>
    <Priority>High</Priority>
    <AssignedTo>coordination@example.com</AssignedTo>
  </Topic>
  <Comment Guid="9a3c7f61-1b2d-44b0-9a0e-7d3c6b4a5102">
    <Date>2026-05-22T09:00:00Z</Date>
    <Comment>Review clearance above the corridor ceiling.</Comment>
  </Comment>
  <Viewpoints>
    <ViewPoint Guid="7c2e0b2f-8c63-4c6a-9f1d-1f06e2a14f38" Viewpoint="viewpoint.bcfv" Snapshot="snapshot.png" />
  </Viewpoints>
</Markup>
```

## Supported versions and references

Flinker IFC Viewer supports BCF 2.1 and BCF 3.0 coordination workflows. The viewer can load BCF topics from `.bcfzip` and `.bcf` files, and can import Navisworks XML clash reports so they can be reviewed as BCF topics. For the standard overview, see buildingSMART [BIM Collaboration Format](https://technical.buildingsmart.org/standards/bcf/).

| Version | Support |
|---|---|
| BCF 2.1 | Supported for common topic, comment, viewpoint, component selection, visibility, snapshot, and clipping workflows. |
| BCF 3.0 | Supported for current BCF issue coordination workflows, including saved viewpoints and visual context. |
| Navisworks XML clash reports | Supported for import and conversion into BCF topics. |

For implementation details, use the buildingSMART [BCF-XML specification](https://github.com/buildingSMART/BCF-XML) and [BCF 3.0 documentation](https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation).

## Coordinate BCF issues with Flinker IFC Viewer

Flinker IFC Viewer lets project teams load, create, review, update, and save BCF topics as part of the model review workflow.

Use the viewer to:

- Open BCF topics together with IFC models.
- Create model-based issues from the current camera view.
- Save selected elements, hidden elements, clipping planes, and snapshots.
- Restore exact issue viewpoints during review.
- Import Navisworks XML clash reports and convert clash results into BCF topics.
- Keep issue coordination in SharePoint, Microsoft Teams, Microsoft Lists, Power BI, or custom apps built with the SDK.

> [!NOTE]
> **Privacy first**
> IFC and BCF files are processed in the viewer. When used with SharePoint or Microsoft Teams, files remain in your Microsoft 365 tenant.

## Issue coordination at scale

BCF helps teams standardize model issue management across projects, disciplines, and review tools. It gives project teams a portable issue format while Microsoft 365 provides the document storage, permissions, collaboration, reporting, and governance layer.

For governed project workflows, use BCF to:

- Track model issues without locking teams into one authoring tool.
- Share the same issue context across consultants, owners, contractors, and reviewers.
- Store BCF files beside IFC models in SharePoint document libraries.
- Sync issue metadata with Microsoft Lists while keeping visual BCF data in the BCF file.
- Report issue status, priority, type, and due dates in Power BI.
- Reuse saved viewpoints and filter states across review sessions.

## Microsoft 365 and app integration

You can use BCF workflows across Microsoft 365 and custom app scenarios.

| Environment | Use case |
|---|---|
| SharePoint | Store IFC and BCF files together and review model issues from document libraries or pages. |
| Microsoft Teams | Load project models and BCF topics in channel workflows. |
| Microsoft Lists | Track BCF issue metadata with project lists, ownership, status, and due dates. |
| Power BI | Report BCF issue status together with model, schedule, cost, or project data. |
| SDK | Embed BCF loading, topic creation, viewpoints, and issue workflows in custom web applications. |

## Related articles

- [BCF viewpoints and view states](bcf-viewpoints.md)
- [Load and save BCF files in Microsoft Teams](update-bcf-files-in-microsoft-teams.md)
- [Connect BCF issues to Microsoft Lists](save-bcf-to-sharepoint-lists.md)
- [Microsoft Lists and BCF integration](ifc-lists.md)
- [Import Navisworks clash reports and BCF files](bcf-navisworks.md)
