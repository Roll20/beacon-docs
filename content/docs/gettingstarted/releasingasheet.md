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
There are two ways you can publish a Beacon sheet. 
1. You can publish a testing verison of the sheet privately and give specific Roll20 users access to it on Roll20 Characters and Roll20 Tabletop, or
2. You can submit a request to publish your sheet publicly for all users on Roll20 Characters and Roll20 Tabletop to have access.

When publishing a sheet, you will need to includes all the necessary code, assets, and metadata packaged together to be easily deployed and tested on the Roll20 platform. When a sheet is published, either publicly or privately for testing purposes, the sheet will run on Roll20 and will no longer require a local development environment to use it.

## Releasing a Test Sheet

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

    The name of the pull request should... 
      - [ ] Contain the **short name** of the sheet being submitted, and
      - [ ] State the **type of change** being submitted (New/Update/Bugfix/etc.).
    _Pull Request Title Example: Sheet/<TYPE_OF_CHANGE>/<SHEET_SHORT_NAME>_

    If this is the first time you are submitting this sheet to the repository, please make sure to have the following information ready.

    - The full name of the game associated with the sheet (i.e. Dungeons & Dragons 5th Edition, The Dresden Files RPG).
    - The name of this game system/family associated with the shee (i.e. Dungeons & Dragons, FATE).
    - The publisher of the game associated with the sheet (i.e. Wizards of the Coast, Evil Hat).

    The information that is provided here will be used to help users find the sheet in Roll20 Tabletop and Roll20 Characters. Please make sure that all names that you provide read exactly how you'd like them to be displayed. To see example of how this information will show up, create a new game on Roll20. The name and the publisher will show up in the dropdown menu and as the title of the sheet that is selected.

{{< callout context="danger" >}}
  Pull requests that contain changes to files outside the sheet sub-folder on which you're working will be rejected.
{{< /callout >}}

4. **Give Specific Roll20 Users Access**:

    Before your testing sheet is finally approved, you want choose to give specific Roll20 Users access to the testing sheet. This will allow only those users to see the sheet in Roll20 Tabletop and Roll20 Characters. These users will be able to use it just like the final users will when the sheet is public. You can give access to friends, group members, or even clients and publishers you're working with.

    To give access to one ore more specific user's, fill out the [Beacon Sheet Access Form](https://docs.google.com/forms/d/e/1FAIpQLSdaVl_RSMdZ5Rv_Q1gIK2wtNIHd6CibhOZGdQWo833k-z9Jdg/viewform?usp=sf_link). You will need the email associated with the Roll20 Account that will have access to the sheet for each person you'd like to give access.

{{< callout context="tip" >}}
We can always grant more people access to the sheet after it is released. Resubmit the [Beacon Sheet Access Form](https://docs.google.com/forms/d/e/1FAIpQLSdaVl_RSMdZ5Rv_Q1gIK2wtNIHd6CibhOZGdQWo833k-z9Jdg/viewform?usp=sf_link) to the new people for which you'd like to give access.
{{< /callout >}}
    
5. **Wait for Approval and Access**:

    After you create a pull request, our team will approve it and add your sheet to the sheet selection in Roll20 Tabletop and Roll20 Characters. We will then give only your Roll20 user and any others you've listed in the pull request comments access to the sheet in Roll20. This sheet will then be available for you and others with access to test it.

{{< callout context="note" >}}
## Submission Checklist
- [ ] The Pull Request title contains the **short name** of the sheet being submitted.
- [ ] The Pull Request title states the **type of change** being submitted (New/Update/Bugfix/etc.).
- [ ] I have authorization from the game's publisher to make this an official sheet on Roll20 with their name attached.
- [ ] This game is not a traditionally published game, but a copy of the game rules can be purchased/downloaded/found at: <   >
- [ ] This sheet is for an unofficial fan game, modification to an existing game, or a homebrew system.

## New Sheet Checklist
If you are submitting a new sheet to the repository, please fill in any empty spaces indicated by `< >`.

- The full name of the game associated with the sheet is: `<   >`  
  - _(i.e. Dungeons & Dragons 5th Edition, The Dresden Files RPG)_
- The name of this game system/family associated with the sheet is: `<   >` 
  - _(i.e. Dungeons & Dragons, FATE)_
- The publisher of the game associated with the sheet is: `<   >` 
  - _(i.e. Wizards of the Coast, Evil Hat)_

The information that is provided here will be used to help users find the sheet in Roll20 Tabletop and Roll20 Characters. Please make sure that all names that you provide read exactly how you'd like them to be displayed. To see example of where this information will show up, create a new game on Roll20. The Name and the publisher will show up in the dropdown menu and as the title of the sheet that is selected.

Please check any that apply:

# Changes / Description (optional)

Provide any notes relevant to this pull request here. This can include a description of the code changes, references to related pull requests, etc.

## More Help

Additional information for the beacon sdk can be found at the
[Beacon SDK Documentation Site](https://roll20.github.io/beacon-docs/docs/gettingstarted/introduction/).
You can also post additional questions using the
[Beacon Community GitHub Issues Tab](https://github.com/Roll20/roll20-beacon-sheets/issues).

{{< /callout >}}

## Releasing a Final Version

After you have released a test version of your sheet, you can follow the same steps as [releasing a test version](#steps-to-release-a-test-sheet) to make your sheet available to everyone. This time, the pull request comments state that it is a final release version.

Once you have created the pull request, our team will review the sheet functionality, code, and metadata for consistency, best practices, and overall system security. We reserve the right to reject any sheet that does not meet our terms of use or conflicts with our partnerships.