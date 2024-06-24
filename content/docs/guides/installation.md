---
title: "Installing Beacon"
description: "This guide will help you set up the Beacon SDK in your javascript application."
summary: ""
date: 2024-04-07T16:04:48+02:00
lastmod: 2024-02-07T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This installation guide is designed for sheet developers that want to start creating a sheet from scratch or already have an existing project they wish to start from. To get started quickly with a boilerplate, you can download and start editing the [Quick Start Example Sheet](https://github.com/Roll20/roll20-beacon-sheets/tree/main/sheets/quickstart-example-sheet) which already has the Beacon SDK installed in a [Vue.js](https://vuejs.org/guide/introduction.html) project. 

## Prerequisites

Before you can install the Beacon SDK, you'll need to have the following completed. 
- A local development environment with a code editor.
- Node.js installed on your machine. If you don't have Node.js installed, use the following steps in the [official Node.js documentation](https://nodejs.org/en/download/package-manager).
- A project with a javascript framework. We suggest [Vue.js](https://vuejs.org/guide/introduction.html) but you can choose whichever you are more comfortable with.

{{< callout context="note" >}}
These steps use the npm package manager but you are free to use any package manager you prefer. 
{{< /callout >}}

The following steps will guide you in installing the Beacon SDK in your application:


## Step 1: Add the package to your `package.json`.

  Under the `dependencies` object key of your `package.json`, add a new string key called `@roll20/beacon-sdk` with the version you want to install from our version history.

  **For example**:

    ```json
    {
      "@roll20/beacon-sdk": "0.0.0"
    }
    ```

    For more information about installing packages, refer to the [NPM documentation](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file).

## Step 2: Run `npm install`.

    Open a terminal in the root of your application’s folder and run the following command:

    ```bash
    npm install
    ```

    For more information about NPM commands, refer to the [NPM install documentation](https://docs.npmjs.com/cli/v6/commands/npm-install).

## Import the necessary package contents in your application.

    The package exports various utilities you can use in your application. For example, you will need to utilize the `initRelay` function from the package.

    Here's an import statement for that function:

    ```javascript
    import { initRelay } from '@roll20/beacon-sdk';
    ```

    <!-- We need to add a link to learn more about the InitRelay -->

    For more information about imports, refer to the [JavaScript import documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).
