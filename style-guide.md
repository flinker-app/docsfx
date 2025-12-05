# Flinker DocFX Markdown Style Guide

**Goal:** Use the same Markdown patterns as Microsoft Docs/Learn where DocFX supports them. Keep docs short, scannable, and developer‑friendly.

---

## 1. Headings

- One `# H1` per file, first content line after YAML.
- Use sentence case, no punctuation at the end.

Example heading structure:

# Working with IFC models
## Overview
### Limitations

---

## 2. Text & inline code

- Short paragraphs (max ~3 lines).
- Use `inline code` for API names, settings, and commands.

Example inline code: Use `Flinker.Bcf.SyncService` to sync BCF issues.

---

## 3. Links & xrefs

Link examples:
- See [BCF sync](~/articles/bcf-sync.md).
- See [Sync service](xref:Flinker.Bcf.SyncService).
- `<xref:Flinker.Bcf.SyncService>`

- Prefer `xref:` links for anything that has a UID.

---

## 4. Lists

List examples:
- Supports IFC, BCF, Excel.
- Runs inside the Microsoft 365 tenant.

1. Open the project.
2. Select the IFC model.
3. Start the sync.

---

## 5. Code blocks

- Always specify the language.
- Keep examples minimal and focused.

```csharp
public void RunSync(string projectId)
{
    // TODO: add logging
}
```

```bash
dotnet tool install flinker.cli
flinker sync --project 123
```

---

## 6. Alerts (Note, Tip, Important, Caution, Warning)

Use alerts sparingly (max 1–2 per article).

Alert examples:
> [!NOTE]
> This feature requires Microsoft 365.

> [!TIP]
> Start in a test tenant before production rollout.

> [!WARNING]
> Deleting a project also deletes all related BCF issues.

---

## 7. Images

- Use PNG/SVG where possible.
- Filenames: lowercase with hyphens.
- Always provide meaningful alt text.

Image example:
![BCF issue list in Teams](../images/bcf-issues-teams.png)

---

## 8. Includes (shared snippets)

- Use for shared warnings, intro text, etc.
- DocFX uses lower-case `include`:

Include example:
[!include[bcf-warning](../includes/bcf-warning.md)]

> Note: Microsoft Learn uses `INCLUDE` in upper case, but the idea is the same.

---

## 9. Style Do & Don't

**Do**

- Use short, direct sentences.
- Prefer small examples over long explanations.
- Use consistent terms (e.g. "project", "IFC model", "BCF issue").

**Don't**

- Don’t paste large screenshots of code.
- Don’t duplicate content across pages; use includes.
- Don’t use internal project code names in public docs.

## 10. Sample FAQs

# Teams IFC Viewer – FAQ

## Privacy & data

### Does the Teams IFC Viewer send any telemetry or IFC data to Flinker?

No. The Teams IFC Viewer does **not** send any IFC or BCF content to Flinker.  
Only minimal technical metadata is processed, as described in the *Architecture & Data Protection* documentation.


