---
title: "Dispatch"
description: ""
summary: ""
date: 2024-01-00T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 160
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

The dispatch is returned by the `initRelay` and provides methods for sending commands from the character sheet back to the host. Except when specified every method below will return a promise.

#### update
```javascript
dispatch.update({
  options: { overwrite?: boolean }
  character: Partial<Character>
}): Promise<void>
``` 
The `update` method sends character changes to the host (Roll20 Tabletop or Roll20 Characters) to be persisted. 

The partial character passed in here must contain the character's id, and can contain any combination of the attributes, bio, and gmNotes properties. When updating a character’s attributes, only include those attributes that have changed.

#### updateCharacter
```javascript
dispatch.updateCharacter({
  character: Partial<Character>
}): Promise<void>
``` 
Like the `update` method, `updateCharacter` sends character changes to the host page (Roll20 Tabletop or Roll20 Characters) to be persisted. 

However, this method takes a full set of character attributes as the character argument, and automatically computes the diff with existing character attributes, so that only changed attributes are sent to the data store.

#### roll
```javascript
dispatch.roll({
  rolls: { [rollName: string]: string } // Ex. {attack: '1d20+4', damage: `3d6+2`}
  messageId?: string
}): Promise<{messageId: string, results: RollResults }>
``` 
The `roll` method takes one or more rolls in the form of an object, where the keys are unique roll names and the values are roll strings. messageId can be provided to attach the roll to an existing chat message, either overriding it or appending to it in the chat log. 

If messageId is omitted, the roll will be associated with a new chat message and a new messageId for that message will be returned with the roll results. 

The method returns a promise that resolves with an object containing the messageId and the RollResult (see Types). The roll result is returned in the same format as in the non-beacon dice rolls computed roll system.

#### post
```javascript
dispatch.post({
  characterId: string,
  messageId?: string,
  content: string,
  options?: {
    whisper?: 'gm',
    secret?: boolean,
  }
}): Promise<string>
``` 
`post` posts a message to chat, either creating a new message or overwriting an existing one. It requires a character id and message content, a string containing either plain text or HTML to be posted. 

The method also accepts an options object. Currently, only whisper and secret are supported, the only valid value for whisper is gm, which will send the message as a whisper to the gm. 

The secret option is ignored unless whisper is also set, toggling to true will cause the message to not be visible to the controlling player. 

Like roll, messageId can be provided to update an existing chat message, but if omitted the method will generate a new messageId and post a new chat message.  The method returns the messageId.

#### query
```javascript
dispatch.query(options: Swal2Options): {
  isConfirmed: boolean,
  isDenied: boolean,
  isDismissed: boolean,
  value?: string | number,
  dismiss?: "cancel" | "backdrop" | "close" | "esc" | "timer",
  errors?: string[],
}: Promise<{
  results: {
    isConfirmed: boolean
    isDenied: boolean
    isDismissed: boolean
    value: string | number
    dismiss: string
  },
  errors: [string]
}>
```
The `query` method takes an options object and uses them to display a [SweetAlert2](https://sweetalert2.github.io/) prompt to the user. It returns the results of the query as a `SweetAlertResult`, along with any errors encountered. The options work exactly as described in the documentation for [SweetAlert2](https://sweetalert2.github.io/), however not all options are allowed. Here is a list of the allowed options:

`titleText, text, iconColor, input, width, padding, background, position, grow, timer, timerProgressBar, showConfirmButton, showDenyButton, showCancelButton, ariaLabel, confirmButtonText, denyButtonText, cancelButtonText, confirmButtonAriaLabel, confirmButtonColor, cancelButtonAriaLabel, cancelButtonColor, denyButtonAriaLabel, denyButtonColor, reverseButtons, showCloseButton, closeButtonAriaLabel, returnInputValueOnDeny, imageUrl, imageWidth, imageHeight, imageAlt, inputLabel, inputPlaceholder, inputValue, inputOptions, inputPlaceholder, inputAutoTrim, inputAttributes, validationMessage, progressSteps, currentProgressStep, progressStepsDistance.`

#### Perform
```javascript
dispatch.perform({
  characterId: string,
  action: string,
  args: string[],
}): Promise<void>;
```
`perform` executes the specified action on behalf of the character (designated by the character id), passing in args to the action method. This method can perform actions on behalf of any character, even a character that the sheet does not have data for.

#### getComputed
```javascript
dispatch.getComputed({
  characterId: string,
  property: string,
  args: string[]
}): Promise<string | number | object>
```
see `setComputed` below

#### setComputed
```javascript
dispatch.setComputed({
  characterId: string,
  property: string,
  args: string[]
}): Promise<string | number | object>
```
`getComputed` and `setComputed` are both nearly identical in how they are called, taking a character id and a property with the name of the computed property you wish to get or set, and an array of string args. Both methods return a promise that resolves with the computed value.

#### compendiumRequest
```javascript
dispatch.compendiumRequest({ 
  query: string
}): Promise<{
  data: Object
  errors: Array<Error>
  extensions: Record<string, any>
}>
```
`compendiumRequest` executes an AJAX request to the compendium service’s graphQL endpoint. It takes in a graphQL query string written according to the Compendium service’s schema. The query string does not need to include the ruleSystem shortName as this is set automatically according to the campaign override or sheet.json value in the Roll20 Tabletop.

#### debouncedCompendiumRequest
```javascript
dispatch.debouncedCompendiumRequest({ 
  query: string
}): Promise<{
  data: Object
}>
```
Like `compendiumRequest`, except that calls to this method are automatically debounced (at 100ms) and grouped together into a single request to the compendium service. Note that this method will only return the requested data, it does not return errors or extensions.

#### getTokens
```javascript
dispatch.getTokens({
  characterId: string
}): Promise<{
  selected: Token[],
  tokens: Token[]
}>: Promise<{
  selected: Token[]
  tokens: Token[]
}>
```
`getTokens` requires a character id string and returns information about tokens on the user’s current page. The return value contains two arrays of tokens. The tokens array contains all tokens on the current page that represent the character whose id was provided to the method. The selected array contains any tokens that are currently selected, regardless of which character they represent. The returned token objects contain all of the token attributes available to the API, you can find documentation here and here.

#### addToTracker
```javascript
dispatch.addToTracker({
  tokenId?: string,
  custom?: {
    name: string
    img?: string
  }
  formula?: string
  value: string | number
}): Promise<void>
```
`addToTracker` adds or updates a single item in the turn tracker. Passing in a tokenId will add the specified token to the tracker, while passing in custom with a name and an optional image url (img) will add a custom item, not connected to any character or token. A round calculation string can be added via the optional formula parameter. value is the initiative number for the item.

#### addMacrosToHost
```javascript
dispatch.addMacrosToHost({
  macro: {
    id?: string
    name?: string
    characterId?: string
    commandString?: string
    args?: string[]
    locations?: ['macroBar'] | ['tokenActionBar'] | ['macroBar', 'tokenActionBar']
  }
  requestId?: string
}): void
```
`addMacrosToHost` previously `addActionsToHost`, adds a specific macro command to an area of the Roll20 Tabletop UI; either the macrobar or the token action bar. 

Most things can be omitted like the `id` however atleast a `name` and `commmandString` are required when registering a new macro command, while it won't appear in the macroBar or tokenActionBar unless a location is pased in, it will appear in the Collections panel in the VTT. 

Passing in a `characterId` will assign the macro as a character macro, displaying it in the `Advanced Tools -> Characters Macros` tab for a character sheet. Note: The Characters Macros tab is only available in Jumpgate games.

Passing in a `location` will add it either to the player's macroBar, the character's tokenActionBar or both. Omitting a location will remove it from the respective location or all locations. To update the location in this way, just the `id` of the macro is required to be passed in, note that removing a location or all locations will not delete the Macro and it will still be found in either the Collections panel or the Characters Macro tab.

[See Actions page for examples on the usuage of `addMacrosToHost`](/beacon-docs/docs/components/actions)

#### getCharacterMacros
```javascript
dispatch.getCharacterMacros({
  args: {
     characterId: string
  }
}): Promise<{
  macros?: {} | { [id: string]: {
    characterId: string,
    name: string,
    commandString: string,
    onTokenBar: boolean,
    onMacroBar: boolean
  } }
}>
```
`getCharacterMacros` gets a specific character’s macros. The `ids` returned from this list can be used in conjuction with `addMacrosToHost` update their locations. In jumpgate games, character macros can also be found in the `Advanced Tools -> Characters Macros` tab.

#### setContainerSize
```javascript
dispatch.setContainerSize({
  args: { 
    width?: number
    height?: number 
  }
}): Promise<void>
```
`setContainerSize` updates the size of the container which holds the sheet shared settings. Returns a promise that can be awaited. This can be used in conjunction with something like the ResizeSensor event listener from npm: css-element-queries to automatically resize the container on the host.

#### updateTokensByCharacter
```javascript
dispatch.updateTokensByCharacter({
  args: { 
    characterId: string
    token: Partial<Token>
  }
}): Promise<void>
```
`updateTokensByCharacter` updates a particular character’s default token as well as all existing tokens representing that character. Returns a promise that can be awaited.

#### updateTokensByIds
```javascript
dispatch.updateTokensByIds({
  args: { 
      tokenIds: array of ids as strings
      token: Partial<Token>
  }
}): Promise<void>
```
`updateTokensByIds` updates a single or several tokens. Returns a promise that can be awaited.

#### autoLinkText
```javascript
dispatch.autoLinkText({
  args: { 
      text: string
  }
}): Promise<string>
```
`autoLinkText` goes through the text to find handout names between square brackets and converts them into links with the handoutID. For example in a game with a handout named `Dragon`, passing in the text string of `this is a [Dragon]` to autoLinkText returns something similar to this is a `<a href="https://journal.roll20.net/8je02j0kd02k">Dragon</a>`.  

#### openDialogFromLink
```javascript
dispatch.openDialogFromLink({
  args: { 
      urlString: string
  }
}): void
```
`openDialogFromLink` opens the supplied urlString through the Roll20 Tabletop. 
 - If the url is for a handout, it will open the corresponding handout in the campaign. This will also check if the user opening the link has access to the handout.  
 - If the url is for a compendium, it will open a pop up to the compendium page, it will also check to ensure the user has access to view the page.
 - If the url is for an external page, a confirmation pop up will display to warn the user that the link is for an external site and open a new tab in their main window if confirmed.