---
title: "Example Patterns Sheet"
description: "This sheet uses all of the patterns as an example of how to use them. Feel free to start using this sheet or copy and paste into your own project as needed."
summary: ""
date: 2024-03-07T16:13:18+02:00
lastmod: 2024-09-07T16:13:18+02:00
draft: false
weight: 40
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< callout context="tip" title="Join the Closed Beta" icon="outline/rocket" >}}
The Beacon SDK is currently in closed Beta. Please complete the [form](https://forms.gle/XXnj1SbfmYnUq8Hu9) to sign up for the closed beta.

Join to get access to the Beacon SDK, the community sheet repo for Beacon sheet, the community sheet developers in discord, and the new sheet developer Roll20 permissions.
{{< /callout >}}

## Prerequisites

To set this sheet up properly, make sure that you have the following:

- Vue framework & Routing
- Multiple Data Stores
- Complex Roll Templates
- Rich Sheet Actions
- TypeScript
- Vite
- SCSS
- Ability to run Unit & End-to-End Tests

{{< callout context="note" >}}
To download the community quick start sheet, refer to these repositories:
- [Community Sheet Repo](https://github.com/Roll20/roll20-beacon-sheets)

- [Quick Start Sheet](https://github.com/Roll20/roll20-beacon-sheets/tree/main/sheets/quickstart-example-sheet)

{{< /callout >}}

_**Figure 1**: Advanced sheet_

This sheet uses the same steps listed in the . Immediately after implementing those three steps, you'll add the following step:

- **Run a CI check**: This will run several checks to ensure your code is as optimal as possible, including formatting, linting, type checking, unit tests, and end-to-end tests.

```bash
npm run ci-check
```

You can think of this command as a sanity check you can leverage when pushing a big release for your sheet!

## Useful Commands

The following set of commands can come in handy when working with this sheet:

- For Hot reloading and building CSS files, use the following command:

```bash
npm run watch-scss
```

- For linting, use the following command:

```bash
npm run lint
```

- For formatting with Prettier, use the following command:

```bash
npm run format
```

- For type checking with TypeScript, use the following command:

```bash
npm run type-check
```

- For running unit tests with Vitest, use the following command:

```bash
npm run test:unit
```

- To open up and develop local end-to-end tests with Cypress, use the following command:

```bash
npm run test:e2e:open:local
```

- For running local end-to-end tests with Cypress, use the following command:

```bash
npm run test:e2e:local
```

- To run CDN-hosted end-to-end tests with Cypress, use the following command:

```bash
npm run test:e2e
```