# Docs

## Markdown reference and styling
- [Learn Markdown reference](https://learn.microsoft.com/en-us/contribute/content/markdown-reference)
- [Text formatting guidelines](https://learn.microsoft.com/en-us/contribute/content/text-formatting-guidelines)
- [Use links in documentation](https://learn.microsoft.com/en-us/contribute/content/how-to-write-links)

## Local development
To build the docset, run:

````
docfx docfx.json --serve
````
Now you can preview the website on http://localhost:8080.

To preview your local changes, save changes then run this command in a new terminal to rebuild the website:
```
docfx docfx.json
```

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
