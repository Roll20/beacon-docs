# Dispatch

The `initRelay` function returns a promise that resolves with a `Dispatch` object. This object can be used to interact with the relay system.

`Dispatch` provides methods for sending commands from the character sheet back to the host. Except when specified, all of these methods below will return a promise.

## `update`

The `update` method sends character changes to the host page (VTT) to persist in the data store (Firebase).

The partial character passed in here must contain the `characterId` and can contain any combination of the `attributes`, `bio`, and `gmNotes` properties.

```javascript
dispatch.update({
 options: { overwrite?: boolean },
 character: Partial<Character>
}): Promise<void>
```

When updating a character’s attributes, only include those attributes that have changed.

## `updateCharacter`

Like `update`, `updateCharacter` sends character changes to the host page (VTT) to persist in the data store (Firebase).

However, this function takes a full set of character attributes as the `character` argument and automatically computes the diff with existing character attributes so that only changed attributes are sent to the data store.

```javascript
dispatch.updateCharacter({
 character: Partial<Character>
}): Promise<void>
```

## `updateSharedSettings`

Updates sheet settings that are shared across all people in the game. Returns a promise that can be awaited.

```javascript
dispatch.updateSharedSettings({
 update: { settings: { [key: string]: any } }
}): Promise<void>
```

## `roll`

The `roll` method takes one or more `rolls` in the form of an object, where the keys are unique roll names and the values are roll strings.

```javascript
dispatch.roll({
 rolls: { [rollName: string]: string } // Ex. {attack: '1d20+4', damage: `3d6+2`}
  messageId?: string
}): Promise<{messageId: string, results: RollResults }>
```

The `messageId` property can be provided to attach the roll to an existing chat message. If the `messageId` property is omitted, the roll will be associated with a new chat message, and a new `messageId` will be returned with the roll results.

The function returns a promise that resolves with an object containing the `messageId` and the `RollResult`. The roll result is returned in the same format as in the legacy computed roll system.

For more information on data types, see the Types page.

## `post`

This function posts a message to chat, either creating a new message or overwriting an existing one. It requires a `characterId` and message content, a string containing either plain text or HTML to be posted.

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

The function also accepts an options object. Currently, only `whisper` and `secret` are supported. The only valid value for `whisper` is `gm`, which will send the message as a whisper to the GM.

The `secret` option is ignored unless `whisper` is also set; toggling to true will cause the message to not be visible to the controlling player.

Like `roll`, `messageId` can be provided to update an existing chat message, but if omitted, the function will generate a new `messageId` and post a new chat message. The function returns the `messageId`.

## `query`

The `query` function takes an `options` object and uses it to display a `SweetAlert` prompt to the user.

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
 isConfirmed: boolean,
 isDenied: boolean,
 isDismissed: boolean,
 value: string | number,
 dismiss: string,
 },
 errors: [string]
}>
```

It returns the results of the query as a `SweetAlertResult`, along with any errors encountered. The options work exactly as described in the [SweetAlert2 documentation](https://sweetalert.js.org/docs/).

However, not all options are allowed. Here is a list of the allowed options:

| Allowed Options             | Description                                                |
|-----------------------------|------------------------------------------------------------|
| ariaLabel                   | Custom aria-label for the input field.                     |
| background                  | Background color for the modal.                            |
| cancelButtonAriaLabel       | Custom aria-label for the cancel button.                   |
| cancelButtonColor           | Background color for the cancel button.                    |
| cancelButtonText            | Text for the cancel button.                                |
| closeButtonAriaLabel        | Custom aria-label for the close button.                    |
| confirmButtonAriaLabel      | Custom aria-label for the confirm button.                  |
| confirmButtonColor          | Background color for the confirm button.                   |
| confirmButtonText           | Text for the confirm button.                               |
| currentProgressStep         | Current progress step index.                               |
| denyButtonAriaLabel         | Custom aria-label for the deny button.                     |
| denyButtonColor             | Background color for the deny button.                      |
| denyButtonText              | Text for the deny button.                                  |
| grow                        | Grow animation for the modal ('row', 'column', 'fullscreen').|
| iconColor                   | Color of the modal icon.                                   |
| imageAlt                    | Alternate text for the image.                              |
| imageHeight                 | Height of the image.                                       |
| imageUrl                    | URL of the image to display.                               |
| imageWidth                  | Width of the image.                                        |
| input                       | Input field type ('text', 'email', 'password', etc.).      |
| inputAttributes             | Custom attributes for the input field.                     |
| inputAutoTrim               | Automatically trim the input value.                        |
| inputLabel                  | Label for the input field.                                 |
| inputOptions                | Options for select inputs.                                 |
| inputPlaceholder            | Placeholder for the input field.                           |
| inputValue                  | Initial value for the input field.                         |
| padding                     | Modal window padding.                                      |
| position                    | Position of the modal ('top', 'center', 'bottom').         |
| progressSteps               | Progress steps, useful for multi-step forms.               |
| progressStepsDistance       | Distance between progress steps.                           |
| returnInputValueOnDeny      | Return input value when denied.                            |
| reverseButtons              | Reverse the order of buttons.                              |
| showCancelButton            | Show the cancel button.                                    |
| showCloseButton             | Show the close button.                                     |
| showConfirmButton           | Show the confirm button.                                   |
| showDenyButton              | Show the deny button.                                      |
| text                        | Text content for the modal.                                |
| timer                       | Auto close timer for the modal.                            |
| timerProgressBar            | Show a progress bar for the timer.                         |
| titleText                   | Title for the modal.                                       |
| validationMessage           | Message for input validation.                              |
| width                       | Width of the modal.                                        |

## `perform`

The `perform` method executes the specified action on behalf of the character (designated by `characterId`), passing in `args` to the action method. This method can perform actions on behalf of any character, even a character for which the sheet does not have data.

```javascript
dispatch.perform({
 characterId: string,
 action: string,
 args: string[],
}): Promise<void>;
```

## `getComputed`

The `getComputed` function is used to retrieve the value of a computed property.

```javascript
dispatch.getComputed({
 characterId: string,
 property: string,
 args: string[],
}): Promise<string | number | object>;
```

It takes the following arguments:

- `characterId`: The ID of the character whose computed property you want to get.
- `property`: The name of the computed property to retrieve.
- `args`: An array of string arguments that may be required by the computed property.

This method returns a promise that resolves with the computed value, which can be a string, number, or object.

## `setComputed`

The `setComputed` function is used to set the value of a computed property.

```javascript
dispatch.setComputed({
 characterId: string,
 property: string,
 args: string[],
}): Promise<string | number | object>;
```

It takes the following arguments:

- `characterId`: The ID of the character whose computed property you want to set.
- `property`: The name of the computed property to set.
- `args`: An array of string arguments that may be required by the computed property.

This method returns a promise that resolves with the new computed value, which can be a string, number, or object.

## `compendiumRequest`

`compendiumRequest` executes an AJAX request to the compendium service’s graphQL endpoint. It takes in a graphQL query string written according to the Compendium service’s schema. The query string does not need to include the ruleSystem shortName as this is set automatically according to the campaign override or `sheet.json` value in the VTT.

```javascript
dispatch.compendiumRequest({ 
 query: string
}): Promise<{
 data: Object
 errors: Array<Error>
 extensions: Record<string, any>
}>;
```

## `debouncedCompendiumRequest`

`debouncedCompendiumRequest` works just like the `compendiumRequest` method, with the exception that calls to this function are automatically debounced (at 100ms) and grouped into a single request to the compendium service.

```javascript
dispatch.debouncedCompendiumRequest({ 
 query: string
}): Promise<{
 data: Object
}>;
```

**NOTE**: This function will only return the requested data; it does not return errors or extensions.

## `getTokens`

`getTokens` requires a character ID string and returns information about tokens on the user’s current page. The return value contains two arrays of tokens.

```javascript
dispatch.getTokens({
 characterId: string
}): Promise<{
 selected: Token[],
 tokens: Token[]
}>;
```

The `tokens` array contains all tokens on the current page representing the character whose ID was provided to the function. The `selected` array contains any tokens that are currently selected, regardless of which character they represent.

The returned token objects contain all of the token attributes available to the API. You can find the documentation [here](https://roll20.net).

## `addToTracker`

The `addToTracker` method adds or updates a single item in the turn tracker. Passing in a `tokenId` will add the specified token to the tracker, while passing in `custom` with a name and an optional image URL (`img`) will add a custom item, not connected to any character or token.

```javascript
dispatch.addToTracker({
 tokenId?: string,
 custom?: {
 name: string,
 img?: string
 },
 formula?: string,
 value: string | number
}): Promise<void>;
```

A round calculation string can be added via the optional `formula` parameter. `value` is the initiative number for the item.

## `addActionsToHost`

The `addActionsToHost` method adds a specific action (macro) to an area of the VTT UI, either the macrobar or the token action bar. Either `sheetAction` or `action` can be passed in, but not both simultaneously.

```javascript
dispatch.addActionsToHost({
 sheetAction?: {
 characterId: string,
 action: string,
 args?: string[]
 },
 action?: string,
 locations?: ['macroBar'] | ['tokenActionBar'] | ['macroBar', 'tokenActionBar'],
 actionId?: string,
 name: string,
 requestId?: string
}): void;
```

The `sheetAction` arg should be passed in when the action is designated to a character. The `action` arg should be passed when the action is more generic.

## `getActions`

`getActions` retrieves a specific character’s actions (macros).

```javascript
dispatch.getActions({
 args: {
 characterId?: string
 }
}): Promise<{
 actions?: {} | { [id: string]: ActionFromHost }
}>;
```

## `setContainerSize`

This method updates the size of the container which holds the sheet shared settings. It also returns a promise that can be awaited.

```javascript
dispatch.setContainerSize({
 args: { 
 width?: number,
 height?: number 
 }
}): Promise<void>;
```

This can be used in conjunction with something like the `ResizeSensor` event listener from [npm: css-element-queries](https://www.npmjs.com/package/css-element-queries) to resize the container on the host automatically.

## `updateTokensByCharacter`

The `updateTokensByCharacter` method updates a particular character’s default token as well as all existing tokens representing that character.

```javascript
dispatch.updateTokensByCharacter({
 args: { 
 characterId: string,
 token: Partial<Token>
 }
}): Promise<void>;
```

This method returns a promise that can be awaited.

## `updateTokensByIds`

The `updateTokensByIds` method updates a single or several tokens. It also returns a promise that can be awaited.

```javascript
dispatch.updateTokensByIds({
 args: { 
 tokenIds: array of ids as strings,
 token: Partial<Token>
 }
}): Promise<void>;
```

## `autoLinkText`

`autoLinkText` goes through the text to find handout names between square brackets and converts them into links with the handoutID.

```javascript
dispatch.autoLinkText({
 args: { 
 text: string
 }
}): Promise<string>;
```

For example, in a game with a handout named Dragon, passing in the text "this is a [Dragon]" to the `autoLinkText` method returns something similar to:

```html
"this is a `<a href="https://journal.roll20.net/8je02j0kd02k">Dragon</a>`"
```

## `openDialogFromLink`

`openDialogFromLink` opens the supplied `urlString` through the VTT.

```javascript
dispatch.openDialogFromLink({
 args: { 
 urlString: string
 }
}): void;
```

**NOTE**:

- If the URL is for a **handout**, the corresponding handout will be opened in the campaign. This will also check if the user opening the link has access to the handout.
- If the URL is for a **compendium**, it will open a pop-up to the compendium page. It will also check to ensure the user has access to view the page.
- If the URL is for an **external** page, a confirmation pop-up will display to warn the user that the link is for an external site, and a new tab will open in their main window if confirmed.