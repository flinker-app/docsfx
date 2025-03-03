# docsfx


This command walks you through creating a new docfx project under the current working directory. To build the docset, run:

docfx docfx.json --serve
Now you can preview the website on http://localhost:8080.

To preview your local changes, save changes then run this command in a new terminal to rebuild the website:

docfx docfx.json


## Local and faster builds

By using `docfx.local.json` for local development, you can avoid the PDF generation process and speed up the build time.

This command walks you through creating a new docfx project under the current working directory. To build the docset, run:

```sh
docfx docfx.local.json --serve

To preview your local changes, save changes then run this command in a new terminal to rebuild the website:

docfx docfx.local.json