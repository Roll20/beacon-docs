---
title: "Releasing a Sheet"
description: "This page cover how to release a test sheet and get approved to push it live for everyone on Roll20."
summary: ""
date: 2024-02-07T16:13:18+02:00
lastmod: 2024-09-07T16:13:18+02:00
draft: false
weight: 50
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

There are two ways you can publish a Beacon sheet. 
1. You can publish a testing verison of the sheet privately and give specific Roll20 users access to it on Roll20 Characters and Roll20 Tabletop, or
2. You can submit a request to publish your sheet publicly for all users on Roll20 Characters and Roll20 Tabletop to have access.

When publishing a sheet, you will need to includes all the necessary code, assets, and metadata packaged together to be easily deployed and tested on the Roll20 platform. When a sheet is published, either publicly or privately for testing purposes, the sheet will run on Roll20 and will no longer require a local development environment to use it.

## Who can release a sheet?

We allow anyone to create and release a sheet on Roll20 provided the sheet meets our code of conduct, does not infringe on our intellectual property or the intellectual property of our partners, and does not violate copyright laws. Before submitting a sheet to be released either as a test sheet in private or a publicly released sheet, please ensure that atleast one of these conditions are met.

- [ ] I have authorization from the game's publisher to make this an official sheet on Roll20 with their name attached.
- [ ] This sheet is for an unofficial fan game and it does not contain any copyright material.
- [ ] This sheet is a modification to an existing game with an open license that allows me to make a sheet for the game. 
- [ ] This sheet is a homebrew game system that I created myself.

## Releasing a Test Sheet

The following steps will aid you while releasing your sheet. These steps assume this is your first time releasing your sheet for testing, but you will likely multiple times. Each time, follow these steps, making sure that everything is up-to-date with each release. 

### Step 1: Create a build command.

You must have a build command that will produce the minified production-ready code for the sheet. The build command must be able to create these exact files:

- `sheet.js`
- `sheet.css`
- `host.css` (optional) - _Used for sheet rolls made to chat (roll templates)._
- an Image Folder (optional) - _Used to contain fonts and images used in the sheet._

We will use this build command to get these sheet files to use for your sheet. Make sure to test these files locally first before moving to Step 3.

Build commands will vary depending on the build tools you use. This can vary from framework to framework. For the quickstart and example sheet, we use [Vite](https://vitejs.dev/). Here is a [video](https://www.youtube.com/watch?v=VAeRhmpcWEQ) that can help you get started.

### Step 2: Add a `sheet.json` file to your project.

The `sheet.json` file holds the metadata about your sheet. We use this information to display the sheet modal in Roll20 Characters and we should it to the user when they are creating a game on Roll20 Tabletop.

Add a `sheet.json` file to your sheet folder. Each time you release your sheet, make sure this information is up-to-date.
    
```
{
  "advanced": true,
  "authors": "CSC",
  "roll20userid": "",
  "preview": "",
  "compendium": "",
  "useroptions": [],
  "instructions": "Example Beacon Community Sheet",
  "legacy": false,
  "tags": ""
}

```
This example comes from the `sheet.json` for the [Quickstart sheet](https://github.com/Roll20/roll20-beacon-sheets/blob/main/sheets/quickstart-example-sheet/sheet.json).
    
Use this table to better understand your options as you setup your own `sheet.json` file.

| Key             | Format and Options | Description | Required? |
| --------------- | --- | --- | --- |
| `advanced`      | `true` | This indicated the type of sheet this is. `true` is required for Beacon Sheets. Leave this one as `true`. | Yes |
| `legacy`        | `false` | This indicated the type of CSS sanitization you would like to use. `false` is required for Beacon Sheets. Leave this one as `false`. | Yes |
| `authors`       | `"Author name,author name"` | Add the name of each Author in a comma separated list. | Yes |
| `roll20userid`  | `"[userID],[userID]"` | Add the user ID (found in the address bar when you view your profile) of each Roll20 account for the contributors on this sheet. This will give each user a "Sheet Author" badge on their Roll20 Profile. This does not have to be the same account used to develop the sheet | No |
| `preview`       | `URL` or filename | Accepts the URL or relative path of an image used to show off the sheet. This should be a screenshot of your sheet. | Yes |
| `instructions`  | `"text"` | Text used in Roll20 Characters to describe the sheet. You can put information for your users here. If you have nothing to say, make sure the field is in the `sheet.json` but it is blank. | Yes |
| `compendium`    | `"compendium_shortname"` | Add the compendium shortname for the compendium that you want to use for your sheet. | No |
| `requestedSize` | `widthxheight` | Put a default value used to open the character sheet in Roll20 Tabletop. If you leave it out, Roll20 Tabletop will use the default size. | No |
| `useroptions`   | an array of options | This is an array of options from the [Default Sheet Settings](https://help.roll20.net/hc/en-us/articles/360041542554-Default-Sheet-Settings). | No |
| `tags`          | `"Free Basic Rules,Auto-Calculations,Automated Dice,Mobile-Friendly,Alpha,Ready To Play Characters"` | These tags are used in Roll20 Character to indicate to the user the features that are available on this sheet. Adding a tag here does not activate the feature itself. | No |
| `printable`     | `true` or `false` | Add if the sheet have been updated to be print-friendly. This will activate the print button on the character sheet. | No |
| `patreon`       | `URL` | Place the URL for a Patreon campaign here, and it will appear under your sheet's description. | No |
| `tipee`         | `URL` | Place the URL for a Tipeee here, and it will appear under your sheet's description | No |
    
You can find more information about the sheet.json used for custom sheets on the [Roll20 Wiki](https://github.com/Roll20/roll20-beacon-sheets/blob/main/sheets/quickstart-example-sheet/package.json). 

### Step 3: Create a pull request in the Beacon Community Sheet repo.

In the [Beacon Community Sheet Repo](https://github.com/Roll20/roll20-beacon-sheets/tree/main), create a pull request that must include the [submission checklist](https://github.com/Roll20/roll20-beacon-sheets/blob/main/.github/PULL_REQUEST_TEMPLATE.md) listed for reference below.

The name of the pull request should... 
  - [ ] Contain the **short name** of the sheet being submitted, and
  - [ ] State the **type of change** being submitted (New/Update/Bugfix/etc.).
_Pull Request Title Example: Sheet/<TYPE_OF_CHANGE>/<SHEET_SHORT_NAME>_

If this is the first time you are submitting this sheet to the repository, please make sure to have the following information ready.

- The full name of the game associated with the sheet (i.e. Dungeons & Dragons 5th Edition, The Dresden Files RPG).
- The name of the game system/family associated with the sheet (i.e. Dungeons & Dragons, FATE).
- The publisher of the game associated with the sheet (i.e. Wizards of the Coast, Evil Hat).
- The a URL address of where the game rules can be purchased/downloaded/found.

The information that is provided here will be used to help users find the sheet in Roll20 Tabletop and Roll20 Characters. Please make sure that all names that you provide read exactly how you'd like them to be displayed. To see an example of how this information will show up, create a new game on Roll20. The name and the publisher will show up in the dropdown menu and as the title of the sheet that is selected.

{{< callout context="danger" >}}
  Pull requests that contain changes to files outside the sheet sub-folder on which you're working will be rejected.
{{< /callout >}}

### Step 4: Give specific Roll20 users access.

Before your testing sheet is finally approved, you want choose to give specific Roll20 Users access to the testing sheet. This will allow only those users to see the sheet in Roll20 Tabletop and Roll20 Characters. These users will be able to use it just like the final users will when the sheet is public. You can give access to friends, group members, or even clients and publishers you're working with.

To give access to one ore more specific user's, fill out the [Beacon Sheet Access Form](https://docs.google.com/forms/d/e/1FAIpQLSdaVl_RSMdZ5Rv_Q1gIK2wtNIHd6CibhOZGdQWo833k-z9Jdg/viewform?usp=sf_link). You will need the email associated with the Roll20 Account that will have access to the sheet for each person you'd like to give access.

{{< callout context="tip" >}}
We can always grant more people access to the sheet after it is released. Resubmit the [Beacon Sheet Access Form](https://docs.google.com/forms/d/e/1FAIpQLSdaVl_RSMdZ5Rv_Q1gIK2wtNIHd6CibhOZGdQWo833k-z9Jdg/viewform?usp=sf_link) to the new people for which you'd like to give access.
{{< /callout >}}
    
### Step 5: Wait for approval and access.

After you create a pull request, our team will approve it and add your sheet to the sheet selection in Roll20 Tabletop and Roll20 Characters. We will then give only your Roll20 user and any others you've listed in the pull request comments access to the sheet in Roll20. This sheet will then be available for you and others with access to test it.

{{< callout context="note" >}}
## Submission Checklist
- [ ] The pull request title contains the **short name** of the sheet being submitted.
- [ ] The pull request title states the **type of change** being submitted (New/Update/Bugfix/etc.).
- [ ] There is a build command for the sheet.
- [ ] I have updated the `sheet.json` file.
- [ ] This sheet meets Roll20's [Code of Conduct](https://help.roll20.net/hc/en-us/articles/360037254334-Community-Code-of-Conduct).
- [ ] This sheet does not violate the intellectual property of Roll20 or their partners.
- [ ] This sheet does not violate copyright laws.
{{< /callout >}}

## Releasing a Final Version

After you have released a test version of your sheet, you can follow the same steps as [releasing a test version](#Releasing a Test Sheet) to make your sheet available to everyone. This time, make sure to check the box for "For Public Release" in the pull request instead of updating the user access list. 

Once you have created the pull request, our team will review the sheet functionality, code, and metadata for consistency, best practices, and overall system security. We will also follow up with any publishing partners to confirm the release of a sheet using their game system. We reserve the right to reject any sheet that does not meet our code of conduct or conflicts with our partnerships.