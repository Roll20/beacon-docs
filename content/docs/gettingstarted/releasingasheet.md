---
title: "Releasing a Sheet"
description: "This page cover how to release a test sheet and get approved to push it live for everyone on Roll20."
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
A release-ready sheet is a character sheet, that is ready to be published to the community or select users on the Roll20 Tabletop or Roll20 Characters. This sheet includes all the necessary code, assets, and metadata packaged together to be easily deployed and tested on the Roll20 platform.

When you're ready to test and share a sheet on Roll20, you'd want to do it in such a way that others who might need it won't have to set it up with a local dev environment.

That's what the steps below help you achieve. In this guide, you can make your sheet available in the Roll20 Tabletop and Roll20 Characters.

## Steps to Release a Test Sheet

The following steps will aid you while releasing your sheet:

1. **Create a Build Command**:

    You must have a build command that will produce the minified production-ready code. You can find more information in our [Quickstart Package JSON](https://wiki.roll20.net/Sheet.json). The build command must be able to create these exact files:

    - `sheet.js`
    - `sheet.css`
    - `host.css` (optional) - This is the styling for any sheet rolls made to the chat.
    - Add a local folder that contains fonts and images used in the sheet (optional).

2. **Add a `sheet.json` file**:

    Add a `sheet.json` file to your sheet folder to ensure the metadata for your sheet is up-to-date. You can find more information about the sheet.json options on the [Roll20 Wiki](https://github.com/Roll20/roll20-beacon-sheets/blob/main/sheets/quickstart-example-sheet/package.json) as well as on the [Quickstart sheet](https://github.com/Roll20/roll20-beacon-sheets/blob/main/sheets/quickstart-example-sheet/sheet.json). 

3. **Create a Pull Request in the Beacon Community Sheet Repo**:

    In the [Beacon Community Sheet Repo](https://github.com/Roll20/roll20-beacon-sheets/tree/main), create a pull request that must include the [submission checklist](https://github.com/Roll20/roll20-beacon-sheets/blob/main/.github/PULL_REQUEST_TEMPLATE.md) listed for reference below.
    
{{< callout context="note" >}}
# Pull Request Submission Checklist

## Required Submission Criteria

If you fail to meet all these criteria, your PR will be rejected.

- [ ] The pull request title clearly contains the name of the sheet I am editing.
- [ ] The pull request title clearly states the type of change I am submitting (New Sheet/New Feature/Bugfix/etc.).
- [ ] The pull request makes changes to files in only one sub-folder.

Pull Request Title Example: Feature/<SHEET_NAME>

## Creating A New Sheet Details

If you are submitting a new sheet to the repository, please fill in any empty spaces indicated by `< >`.

- The name of this game is: `<   >`  
  - _(i.e. Dungeons & Dragons 5th Edition, The Dresden Files RPG)_
- The publisher of this game is: `<   >` 
  - _(i.e. Wizards of the Coast, Evil Hat)_
- The name of this game system/family is: `<   >` 
  - _(i.e. Dungeons & Dragons, FATE)_

Please check any that apply:

- [ ] I have authorization from the game's publisher to make this an official sheet on Roll20 with their name attached.
- [ ] This game is not a traditionally published game, but a copy of the game rules can be purchased/downloaded/found at: <   >
- [ ] This sheet is for an unofficial fan game, modification to an existing game, or a homebrew system.

# Changes / Description (optional)

Provide any notes relevant to this pull request here. This can include a description of the code changes, references to related pull requests, etc.

## More Help

Additional information for the beacon sdk can be found at the
[Beacon SDK Documentation Site](https://roll20.github.io/beacon-docs/docs/guides/introduction/).

You can also post additional questions using the
[Beacon Community GitHub Issues Tab](https://github.com/Roll20/roll20-beacon-sheets/issues).

{{< /callout >}}
    
In the pull request comments, make sure to list the Roll20 account id of the Roll20 users you'd like to have access to the sheet.

{{< callout context="note" >}}
We can always grant more people access to the sheet after it is released. However, you can inform us in our [Official Community Sheet Development Channels on Discord](https://discord.com/invite/RollThru).
{{< /callout >}}

4. **Approval and Access**:

    After you create a pull request, our team will approve it and add your sheet to the sheet selection in Roll20 Tabletop and Roll20 Characters. We will then give only your Roll20 user and any others you've listed in the pull request comments access to the sheet in Roll20. This sheet will then be available for you and others with access to test it.

## Releasing a Final Version

After you have released a test version of your sheet, you can follow the same steps as [releasing a test version](#steps-to-release-a-test-sheet) to make your sheet available to everyone. This time, the pull request comments state that it is a final release version.

Once you have created the pull request, our team will review the sheet functionality, code, and metadata for consistency, best practices, and overall system security. We reserve the right to reject any sheet that does not meet our terms of use or conflicts with our partnerships.