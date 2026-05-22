# AGENTS.md

## Documentation style

- Write docs in the Microsoft Learn style: task-focused, concise, friendly, and technically precise.
- Use simple sentences, everyday words, and consistent terms such as "project", "IFC model", and "BCF issue".
- Put the most important information first and keep paragraphs short.
- Use sentence case for titles and headings. Do not end headings with punctuation.
- Use one `# H1` per file, immediately after YAML metadata when metadata exists.
- Use normal Markdown headings. Do not use bold text as a heading.
- Check spelling, grammar, punctuation, and product names before finishing.
- Do not use emojis, em dashes, or long inline divider lines such as horizontal rules.
- Do not use internal project code names in public documentation.

## Markdown rules

- Use `inline code` for API names, settings, file names, commands, and literal values.
- Use fenced code blocks with a language identifier, such as `csharp`, `bash`, `json`, or `yaml`.
- Keep code examples short and focused on the task.
- Use ordered lists only for numbered procedures. Use unordered lists only for facts or choices.
- Keep lists one level deep. Do not nest bullets or numbered lists.
- Split long lists into small `###` sections instead of creating nested lists.
- Start list items with the sentence itself. Do not add bold labels at the start of each item.
- Do not break up procedure steps with commentary or side notes.
- Use DocFX alerts sparingly, with no more than one or two per article: `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!CAUTION]`, or `[!WARNING]`.
- Prefer `xref:` links for pages that have UIDs, and use descriptive link text for normal links.
- Use shared includes for repeated warnings, introductions, or procedures: `[!include[title](../includes/file.md)]`.

## Screenshots and images

- Use screenshots only when they save words or make a UI step clearer.
- Capture the relevant product UI only. Crop out unrelated browser chrome, desktop background, and empty space.
- Do not show tenant names, email addresses, secrets, tokens, customer data, or unfinished UI.
- Use PNG for screenshots. Use SVG only for diagrams or simple vector assets.
- Store image files in `/_media` and use lowercase file names with hyphens.
- Add meaningful alt text for every informative image. Do not use the file name as alt text.
- Start screenshot alt text with "Screenshot of" and describe the purpose, not every UI detail.
- Include important text from an image in the article text or in the alt text when readers need it.
- Do not paste large screenshots of code. Use text code blocks instead.
- Do not add decorative frames, manual borders, emojis, or callout-heavy markup to screenshots.
