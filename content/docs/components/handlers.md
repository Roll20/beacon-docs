---
title: "Handlers"
description: ""
summary: ""
date: 2024-03-07T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 140
toc: true
sidebar:
  collapsed: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
Handler methods allow the sheet to respond to data passed from the Roll20 Tabletop or Roll20 Characters (both refered to as host throughout this page) to the sheet. It is the main agrument that must be passed into `initRelay` or the sheet will never fully load.

```typescript
initRelay({
    handlers: {
        onInit,
        onChange,
        onSettingsChange,
        onSharedSettingsChange,
        onTranslationsRequest,
        onDragOver, // optional
        onDropOver, // optional
    }
    //...other methods
}): Promise<Dispatch>
```

## onInit

The `onInit` method receives the initial data from the host. 

This will be the first time we have access to character data, sheet settings, as well as compendium data if this character is made as a result of a compendium drag and drop on the host.

```typescript
onInit(event: {
  character: Character, // Initial Data of the primary character for this sheet.
  settings: { // Campaign and character specific settings
    colorTheme: string, // 'dark' or 'light'
    language: string, // two-letter language code, i.e. 'en'
    gm: boolean, // whether or not the current player has gm permissions
    owned: boolean, // whether or not the current player controls the primary character
    settingsSheet: boolean, // whether or not this sheet is the settings sheet
    headless: boolean, // whether or not it should be displayed, set by the host
    sandbox: boolean,
    campaignId: number, // The id of the current campaign
    environment: string, // VTT, CHARACTERS, DISCORD
    currentUserId: string, // user id of user opening the sheet
    singleSheet: boolean
  },
  sharedSettings: {}, // Data shared between all characters in this campaign
  compendiumDropData: { //  Populated when the character sheet is created from a compendium entry such as a creature or NPC.
    pageName: string,
    categoryName: string,
    expansion: number,
  },
}, dispatch: Dispatch): void;
```

{{< callout context="note" >}}
 This function may be called multiple times during development in the sheet sandbox as part of hot reloads.
{{< /callout >}}


## onChange

`onChange` is called whenever a character’s data is changed on the host’s end. The event object contains a partial character with only the character’s ID and the changed data. This could be the character’s bio, GM notes, or attributes (only the changed attributes).

```typescript
onChange(e: {
  character: Partial<Character>
}, dispatch: Dispatch): void;
```

## onSettingsChange

`onSettingsChange` is called when either the host’s color theme is changed, or when the current player’s ownership of the primary character changes.

```typescript
onSettingsChange(e: {
 colorTheme: string,
 owned: boolean
}, dispatch: Dispatch): void;
```

## onSharedSettingsChange

`onSharedSettingsChange` is called when someone changes a shared setting in the host.

```typescript
onSharedSettingsChange({ settings: { [key: string]: any } }): void;
```

## onTranslationsRequest

`onTranslationsRequest` is called before the relay is fully initialized and returns the translation JSON data corresponding to the two-letter language argument.

```typescript
onTranslationsRequest(language: string): { [key: string]: string };
```

## onDragOver (optional)

`onDragOver` is called when a compendium item from the compendium tab is dragged over the iframe window containing the character sheet.

Coordinates of the drag are provided via top and left values, and basic compendium data is passed so that a subsequent compendium request can be made via the provided dispatch. If the item is moved outside of the iframe, `dragData` and `coordinates` are null.

```typescript
onDragOver(e: {
  coordinates: { top: number, left: number },
  dragData: { 
    pageName: string
    categoryName: string
    expansionId: number
  } | null,
}, dispatch: Dispatch) => void
```

## onDropOver (optional)

`onDropOver` is called when a compendium item from the compendium tab is dropped over the iframe window containing the character sheet.

Coordinates of the drop are provided via top and left values, and basic compendium data is passed so that a subsequent compendium request can be made via the provided dispatch.

```typescript
onDropOver(e: {
  coordinates: { top: number, left: number },
  dropData: { 
    pageName: string
    categoryName: string
    expansionId: number
  }
}, dispatch: Dispatch) => void
```