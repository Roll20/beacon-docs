---
title: "Beginner Beacon Sheet"
description: "This is a quick start sheet example. This sheet will guide you through getting started with the Beacon Sheet."
summary: ""
date: 2024-04-07T16:13:18+02:00
lastmod: 2024-05-07T16:13:18+02:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Prerequisites

To set this sheet up properly, make sure that you have the following tools installed:

- Vue.js
- Vite
- SCSS


_**Figure 1**: Quickstart sheet_

Use the following steps to get started:

1. **Install the Beacon SDK**: Run the following command.

```bash
npm i @roll20-official/beacon-sdk
```

2. **Install dependencies**: Install the dependencies for the project.

```bash
npm install
```

3. **Start the Vite server**: After installing the project's dependencies, you'll need to start the Vite server. There are two ways to do this:

a. **Offline Development**: This method will run the Vite server with the default port and environment set to development.

```bash
npm run dev
```

Once this code executes successfully, you can access the Vite server at `http://localhost:5173`.

This method is useful when you do not have access to the Roll20 website or would like to work on parts of your project that do not depend on a connection to the Roll20 Tabletop or Roll20 Characters, such as working on styling, mocking up the environment, building Vue components, testing functionality, etc. 


{{< callout context="tip" >}}
In development mode, you cannot save or access existing character data or use the Beacon SDK functions that depend on Roll20 Tabletop or Roll20 Characters functionality, such as dice rolling and token manipulation.
{{< /callout >}}

b. **Sandbox Development**: This method will run the Vite server with the port set to `7620` and the environment set to staging mode.

```bash
npm run sandbox
```

This command will build the SCSS files and then run the Vite server. This will set the server up for connecting to a Roll20 Tabletop custom sheet sandbox as well as through the sandbox in Roll20 Characters.

To test your changes in the Roll20 Tabletop custom sheet sandbox, you will need to add the following to the `sheet.json` editor in the game settings:

```json
{
       "advanced": true,
       "advancedPort": 7620
}
```

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