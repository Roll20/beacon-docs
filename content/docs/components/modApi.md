---
title: "Mod API Integration"
description: ""
summary: ""
date: 2024-09-16T16:12:37+02:00
lastmod: 2024-09-16T16:12:37+02:00
draft: false
weight: 100
toc: true
sidebar:
  collapsed: true
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

Character sheets created in Beacon are able to expose actions and computed values to Mod (API) Scripts. To do so, you must submit an additional Javascript file, `worker.js`.

Mod (API) Scripts are a powerful tool that can potentially allow any player in a game to interact directly with game data. For security reasons, these scripts run on cloud-based virtual machines. In order to allow scripts to interact with a character sheet, a version of that sheet's code needs to also be running on the same virtual machine. This is where `worker.js` comes in.

Because this script will be running on a virtual machine rather than your browser, it has a few requirements:
  - It should _only_ include the call to `initRelay`, and the code for actions, computed values, and handler methods. It is recommended that the code for initializing the relay be exported from a separate file that both `sheet.js` and `worker.js` can use. Read more about initializing the relay [here](/docs/components/InitRelay)
  - Dom elements like `document` and `window` do not exist on the virtual machine, so trying to access properties of these objects (as in `window.location` or `window.addEventListener()`) will crash the script. Note that some NPM packages, such as `vue-router`, try to access the on initialization, so just including them may cause an error. If you want to save and access variables from `window`, consider instead saving them as properties on `globalThis`, which is available in both browser and virtual machine.
  - The compiled .js file should not use `import` (including `import.meta`, etc.) or `export`.
