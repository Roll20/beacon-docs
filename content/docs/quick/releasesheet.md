---
title: "Release Sheet"
description: "Releasing a Test Sheet."
summary: ""
date: 2024-02-07T16:13:18+02:00
lastmod: 2024-09-07T16:13:18+02:00
draft: false
weight: 910
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

When you're ready to test and share a sheet on Roll20, you'd want to do it in such a way that others who might need it won't have to set it up with a local dev environment.

That's what the steps below help you achieve. In this guide, you can make your sheet available in the Roll20 Tabletop and Characters.

## Steps to Release a Test Sheet

The following steps will aid you while releasing your sheet:

1. **Create a Build Command**:

    You must have a build command that will produce the minified production-ready code. You can find an example in our [Quickstart Package JSON](link to this). The build command must be able to create these exact files:

    - `sheet.js`
    - `sheet.css`
    - `host.css` (optional)
    - Add a local folder that contains fonts and images used in the sheet (optional).

2. **Add a `sheet.json` file**:

    Add a `sheet.json` file to your sheet folder to ensure the metadata for your sheet is up-to-date. For this, you can also find an example in our [Quickstart Package JSON](link to this). You can learn more about the `sheet.json` file, its use, and how to update it in our [official documentation](link to this).

3. **Create a Pull Request in the Community Sheet Repo**:

    In the Community Sheet Repo, create a pull request that must include the submission checklist from [our previous process](link to this). In the pull request comments, make sure to list the email addresses of the Roll20 users you'd like to have access to the sheet.

    **NOTE**: We can always grant more people access to the sheet after it is released. However, you can inform us in our [Official Community Sheet Development Channels on Discord](https://discord.com/invite/RollThru).

4. **Approval and Access**:

    After you create a pull request, our team will approve it and add your sheet to the sheet selection in Roll20 Tabletop and Characters. We will then give only your Roll20 user and any others you've listed in the pull request comments access to the sheet in Roll20. This sheet will then be available for you and others with access to test it.

## Releasing a Final Version

After you have released a test version of your sheet, you can follow the same steps as [releasing a test version](#steps-to-release-a-test-sheet) to make your sheet available to everyone. This time, the pull request comments state that it is a final release version.

Once you have created the pull request, our team will review the sheet functionality, code, and metadata for consistency, best practices, and overall system security. We reserve the right to reject any sheet that does not meet our terms of use or conflicts with our partnerships.