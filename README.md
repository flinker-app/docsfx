# Docs

Welcome to the public documentation repository for Flinker openBIM workflows in Microsoft 365.

Use this repository to improve docs for IFC model review, BCF issue coordination, Power BI reporting, SharePoint permissions, Microsoft Teams workflows, Excel analysis, and SDK integration.

[Read the docs](https://docs.flinker.app/) | [Open an issue](https://github.com/flinker-app/docs/issues/new) | [View open issues](https://github.com/flinker-app/docs/issues) | [Review releases](docs/releases.md)

## Contribute

The easiest way to contribute is to [open an issue](https://github.com/flinker-app/docs/issues/new).

Open an issue when:

- A step is missing, unclear, or out of date.
- A screenshot does not match the current product.
- You found a typo, broken link, or confusing term.
- You expected a guide for a task but could not find one.
- You have a real project workflow that should be documented.

Small reports are useful. If you can, include the page link, what you tried, what was confusing, and a screenshot if it helps.

Do not share customer data, tenant names, email addresses, license keys, secrets, private IFC models, or confidential screenshots in public issues.

You can also open a pull request for small fixes, clearer steps, better screenshots, or short examples from real IFC, BCF, IDS, SharePoint, Teams, Power BI, or Excel workflows.

## Edit and preview the docs

Use this path when you want to edit the docs directly:

1. Fork the repository.
2. Edit Markdown files in `docs/` or the landing page in `index.md`.
3. Add screenshots or other article assets to `_media/`.
4. Keep navigation updates in `docs/toc.yml`.
5. Open a pull request and describe the change.

Write in a task-focused style. Keep paragraphs short, use clear headings, and place the most important information first.

You only need a local preview for larger edits or navigation changes. Install [.NET SDK 8.0 or later](https://dotnet.microsoft.com/download), [Node.js 20 or later](https://nodejs.org/), and DocFX:

```bash
dotnet tool update -g docfx
```

Then run:

```bash
npm install
npm run build
npm run watch
```

The preview runs at `http://localhost:8080`.

## Documentation style

Follow the Microsoft Learn style where possible:

- Use simple, direct sentences.
- Use sentence case for headings.
- Use `inline code` for file names, commands, settings, and literal values.
- Use fenced code blocks with a language name.
- Keep procedures focused on one task.
- Use meaningful alt text for screenshots.

Helpful references:

- [Microsoft Learn Markdown reference](https://learn.microsoft.com/contribute/content/markdown-reference)
- [Text formatting guidelines](https://learn.microsoft.com/contribute/content/text-formatting-guidelines)
- [How to write links](https://learn.microsoft.com/contribute/content/how-to-write-links)
