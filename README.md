# Docs

## Markdown reference and styling
- [Learn Markdown reference](https://learn.microsoft.com/en-us/contribute/content/markdown-reference)
- [Text formatting guidelines](https://learn.microsoft.com/en-us/contribute/content/text-formatting-guidelines)
- [Use links in documentation](https://learn.microsoft.com/en-us/contribute/content/how-to-write-links)

## Local development

> Prerequisites
> - Familiarity with the command line
> - Install [.NET SDK](https://dotnet.microsoft.com/en-us/download) 8.0 or higher
> - Install [Node.js](https://nodejs.org/) v20 or higher (Optional: It's required when using [Create PDF Files](https://filzrev.github.io/docfx/docs/pdf.html))

Make sure you have [.NET SDK](https://dotnet.microsoft.com/en-us/download) installed, then open a terminal and enter the following command to install the latest docfx:

```bash
dotnet tool update -g docfx
```

### Live reload (recommended)
1. Install dependencies (one-time): `npm install`
2. Build once to create `_site`: `npm run build`
3. Start watch + live reload: `npm run watch`

This runs `docfx build` on Markdown/YAML changes and serves `_site` at http://localhost:8080 with BrowserSync auto-reloading the page.

### Manual DocFX serve
If you prefer the CLI only:
````
docfx docfx.json --serve
````
This hosts the last build on http://localhost:8080; rerun `docfx docfx.json` after edits to regenerate `_site`.

### Local and faster builds

By using `docfx.local.json` for local development, you can avoid the PDF generation process and speed up the build time.

This command walks you through creating a new docfx project under the current working directory. To build the docset, run:

```
docfx docfx.local.json --serve
```
To preview your local changes, save changes then run this command in a new terminal to rebuild the website:
```
docfx docfx.local.json
```
