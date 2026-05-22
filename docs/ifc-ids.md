---
title: Information Delivery Specification (IDS)
description: Learn how Information Delivery Specification (IDS) supports structured IFC validation and how Flinker IFC Viewer brings IDS workflows into Microsoft 365.
keywords: IDS, Information Delivery Specification, buildingSMART, openBIM, IFC validation, IFC Viewer, SharePoint, Microsoft Teams, Power BI
canonical_url: https://docs.flinker.app/docs/ifc-ids.html
---

# Information Delivery Specification (IDS)

Information Delivery Specification (IDS) is a buildingSMART openBIM standard for defining model information requirements in a machine-readable format.

Use IDS when you need to check whether IFC model data contains the required objects, classifications, attributes, properties, and values for a project milestone, exchange requirement, tender, approval, or handover.

## What IDS contains

An IDS file describes the information that must be present in an IFC model. It can define requirements for element types, classifications, attributes, property sets, property names, property values, and other model data rules.

IDS does not replace project information requirements. It makes those requirements testable so teams can validate model data consistently before coordination, submission, or handover.

## File example

An IDS file is XML. A shortened IDS 1.0 requirement can look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ids:ids xmlns:ids="http://standards.buildingsmart.org/IDS">
  <ids:info>
    <ids:title>Door fire rating requirement</ids:title>
  </ids:info>
  <ids:specifications>
    <ids:specification name="Doors require FireRating" ifcVersion="IFC4">
      <ids:applicability>
        <ids:entity>
          <ids:name>
            <ids:simpleValue>IFCDOOR</ids:simpleValue>
          </ids:name>
        </ids:entity>
      </ids:applicability>
      <ids:requirements>
        <ids:property dataType="IFCLABEL">
          <ids:propertySet>
            <ids:simpleValue>Pset_DoorCommon</ids:simpleValue>
          </ids:propertySet>
          <ids:name>
            <ids:simpleValue>FireRating</ids:simpleValue>
          </ids:name>
        </ids:property>
      </ids:requirements>
    </ids:specification>
  </ids:specifications>
</ids:ids>
```

## Supported versions and references

Flinker IFC Viewer supports IDS 1.0 validation workflows for IFC model data. Earlier IDS draft files should be updated or validated against IDS 1.0 before they are used in controlled project workflows. For the standard overview, see buildingSMART [Information Delivery Specification](https://www.buildingsmart.org/standards/bsi-standards/information-delivery-specification-ids/).

| Version | Support |
|---|---|
| IDS 1.0 | Supported for checking IFC model data against machine-readable information requirements. |
| Earlier IDS drafts | Not recommended for controlled project workflows. Convert or validate them against IDS 1.0 where possible. |

For implementation details, use the [IDS 1.0 final standard release](https://github.com/buildingSMART/IDS/releases/tag/v1.0.0) and the buildingSMART [IDS GitHub repository](https://github.com/buildingSMART/IDS).

## Validate IFC models with Flinker IFC Viewer

Flinker IFC Viewer lets project teams load IDS files and validate IFC model data in the model review workflow.

Use the viewer to:

- Open an IFC model and an IDS specification together.
- Review the information requirements in the IDS file.
- Check model elements against required classifications, attributes, properties, and values.
- Highlight passing and failing elements in the model viewer.
- Use validation results to identify missing or invalid model data.
- Keep IDS files, IFC models, and validation outputs in Microsoft 365 project locations.

![Screenshot of IDS validation results in the IFC Viewer](/_media/ifc-ids.png)

## Information validation at scale

IDS helps owners, contractors, BIM managers, and information managers move from manual model checks to repeatable validation workflows. It supports consistent information delivery across disciplines, project phases, and suppliers.

For governed project workflows, use IDS to:

- Validate project information requirements before model exchange.
- Reduce manual checking of object properties and classification data.
- Compare delivery quality across consultants and project phases.
- Identify missing data before coordination, approval, or handover.
- Store requirements and validation evidence with project files in Microsoft 365.
- Connect validation outcomes with reporting and governance workflows.

## Microsoft 365 and app integration

You can use IDS validation across Microsoft 365 and custom app scenarios.

| Environment | Use case |
|---|---|
| SharePoint | Store IFC and IDS files with project documentation and review validation results with controlled permissions. |
| Microsoft Teams | Review validation issues with project teams in channel workflows. |
| Power BI | Report IDS compliance across models, disciplines, milestones, or projects. |
| SDK | Embed IDS loading and validation workflows in custom web applications. |

## Related articles

- [Industry Foundation Classes (IFC)](ifc-viewer.md)
- [IFC model queries and property sets](ifc-filters.md)
- [IFC-IDS compliance dashboard](IFC_IDS_Compliance.md)
