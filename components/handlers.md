# Handlers

Handler functions allow the sheet to respond to messages from the host. The `handlers` argument requires the following methods:

## `onInit`

The `onInit` function provides the initial set of data to the sheet.

```javascript
onInit(e: {
 character: Character,
 settings: {
 colorTheme: string,
 language: string,
 gm: boolean,
 owned: boolean,
 settingsSheet: boolean,
 headless: boolean,
 sandbox: boolean,
 campaignId: number,
 environment: string,
 currentUserId: string,
 singleSheet: boolean
 },
 sharedSettings: {},
 compendiumDropData: {
 pageName: string,
 categoryName: string,
 expansion: number
 }
}, dispatch: Dispatch): void;
```

The event object contains the following:

- `character`: The primary character for this sheet.
- `settings`: Campaign and character-specific settings.
- `sharedSettings`: Data shared between all characters in this campaign.
- `compendiumDropData`: Populated when the character sheet is created from a compendium entry such as a creature or NPC.

**Note**: This function may be called multiple times during development in the sheet sandbox as part of hot reloads.

## `onChange`

`onChange` is called whenever a character’s data is changed on the host’s end. The event object contains a partial character with only the character’s ID and the changed data. This could be the character’s bio, GM notes, or attributes (only the changed attributes).

```javascript
onChange(e: {
 character: Partial<Character>
}, dispatch: Dispatch): void;
```

## `onSettingsChange`

`onSettingsChange` is called when either the VTT’s color theme is changed, or when the current player’s ownership of the primary character changes.

```javascript
onSettingsChange(e: {
 colorTheme: string,
 owned: boolean
}, dispatch: Dispatch): void;
```

## `onSharedSettingsChange`

`onSharedSettingsChange` is called when someone changes a shared setting in the VTT.

```javascript
onSharedSettingsChange({ settings: { [key: string]: any } }): void;
```

## `onTranslationsRequest`

`onTranslationsRequest` is called before the relay is fully initialized and returns the translation JSON data corresponding to the two-letter language argument.

```javascript
onTranslationsRequest(language: string): { [key: string]: string };
```

## `onDragOver` (optional)

`onDragOver` is called when a compendium item from the compendium tab is dragged over the iframe window containing the character sheet.

Coordinates of the drag are provided via top and left values, and basic compendium data is passed so that a subsequent compendium request can be made via the provided dispatch. If the item is moved outside of the iframe, `dragData` and `coordinates` are null.

```javascript
onDragOver(e: {
 coordinates: { top: number, left: number },
 dragData: { 
 pageName: string,
 categoryName: string,
 expansionId: number
 } | null
}, dispatch: Dispatch): void
```

## `onDropOver` (optional)

`onDropOver` is called when a compendium item from the compendium tab is dropped over the iframe window containing the character sheet.

Coordinates of the drop are provided via top and left values, and basic compendium data is passed so that a subsequent compendium request can be made via the provided dispatch.

```javascript
onDropOver(e: {
 coordinates: { top: number, left: number },
 dropData: { 
 pageName: string,
 categoryName: string,
 expansionId: number
 }
}, dispatch: Dispatch): void
```