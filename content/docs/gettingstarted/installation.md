---
title: "Installing Beacon"
description: "This guide will help you set up the Beacon SDK in your javascript application."
summary: ""
date: 2024-04-07T16:04:48+02:00
lastmod: 2024-02-07T16:04:48+02:00
draft: false
weight: 20
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

This installation guide is designed for sheet developers with experience in web development, that want to start creating a character sheet from scratch or already have an existing project they wish to add Beacon to. 

{{< callout context="tip" >}}
To get started quickly with a boilerplate, you can download and start editing the [Quick Start Example Sheet](https://github.com/Roll20/roll20-beacon-sheets/tree/main/sheets/quickstart-example-sheet) which already has the Beacon SDK installed, along with several recommanded patterns implemented in a [Vue.js](https://vuejs.org/guide/introduction.html) project. 
{{< /callout >}}

## Prerequisites

Before you can install the Beacon SDK, you'll need to have the following:
- A local web development environment with a code editor.
- Node.js installed on your machine. If you don't have Node.js installed, use the following steps in the [official Node.js documentation](https://nodejs.org/en/download/package-manager).
- A javascript project, we recommand [Vue.js](https://vuejs.org/guide/introduction.html) but you can choose whichever you are more comfortable with.

{{< callout context="note" >}}
These steps use npm but you are free to use any package manager and framework you prefer. 
{{< /callout >}}

The following steps will guide you in installing the Beacon SDK in your application:


## Step 1: Add the package to your project

[You can find the latest version of the package on the NPM registry.](https://www.npmjs.com/package/@roll20-official/beacon-sdk)

In your project's directory, run the following:

```javascript
  npm i @roll20-official/beacon-sdk
```

This will install the Beacon SDK package to your project's `package.json` file.

## Step 2: Use the Beacon package in your project

The Beacon package exports various utilities you can use in your application. The main one that needs to be setup to enable the connection between Beacon SDK and Roll20 is `initRelay`. 

Ideally you would want to call this when your sheet is initalizing, and it is the function where you will define sheet actions, computed values, and how the sheet will response to or send character data changes.  [visit the initRelay page for a more detailed breakdown.](/docs/components/initrelay/)

Add the following to your project: 
```javascript
import { initRelay } from '@roll20/beacon-sdk';

const dispatch = initRelay({
    handlers: {
        onInit: ({ character } ) => { console.log('sheet character', character) },
        onChange: () => {},
        onSettingsChange: () => {},
        onSharedSettingsChange: () => {},
        onTranslationsRequest: () => {},
        onDragOver: () => {}
    },
    // Refer to our advanced example sheet on how to setup actions and computed properties.
    actions: {},
    computed: {}
})
```

`initRelay` returns a dispatch function that allows you to call methods or send changes from the sheet to Roll20. Check out the page on [dispatch](/docs/components/dispatch/) to learn more about the different methods.

## Step 3: Settings up the Roll20 tabletop sandbox

On the Roll20 website visit the [custom sheet sandbox](https://app.roll20.net/sheetsandbox) and create a new sandbox, we'll use this sandbox to develop our sheet but we must set it up to listen to our local project's web server.

After creating a new sandbox, we'll be taken to the sandbox details page, here you will find a collapseable section called `Sheet.json Editor`, opening this we can add the settings we need to connect to our project:

```javascript
{
	"advanced": true,
	"advancedPort": 7620 // or the port of your webserver
}
```

After adding these changes make sure to click  `Save Changes` at the bottom of the page. After which you can click `Launch Game` on the page to go into the game and start testing your sheet.

![Character sheet and dev tools open showing character data results](images/installation-end-results.png)