---
title: "Actions"
description: ""
summary: ""
date: 2024-05-07T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 120
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

```typescript
initRelay({
  //...other methods
    actions: {},
}): Promise<Dispatch>
```

Actions are a collection of methods that can be executed from the Roll20 Tabletop or Roll20 Characters. These actions are used for any rolls that may need to be triggered outside of the sheet itself, such as from a macro or a chat button. Generally, most or all of a sheet’s rolls should be defined as actions.

```typescript
actions: {
  [name: string]: {
    method: (props: {
      dispatch: Dispatch,
      character: Character,
      messageId?: string,
      rolls?: RollResults 
    }, ...args: string[]): void | Promise<void>
  }
}
```

Actions are passed into the  `initRelay` function in an object, where the keys are the unique names of the actions, and the values are objects containing a `method` property (additional metadata fields may be added to this object in the future).

The action's `method` receives a `props` object from the host containing the following properties:

- `dispatch`: A `Dispatch` object.
- `character`: The data of the character performing the action. Currently, the action will not receive the character’s bio or GM notes, regardless of whether the player has access to those fields.
- `messageId` (optional): A unique ID for an existing chat message. It's included in actions triggered from chat buttons to provide context for the original roll.
- `rolls` (optional): Included when action is triggered from a chat button. Contains the roll results of the original roll.

These methods can also receive an unlimited number of additional arguments. This is because these actions can be triggered by plain text via a macro. However, all additional arguments must be strings. Additionally, these methods can be synchronous or asynchronous and do not return a value.

### addMacrosToHost
`addMacrosToHost` can be used to add the actions defined in initRelay above to either the macro bar or the token action bar. An example of this would be adding pre-defined actions to the token action bar for NPC characters or removing macros when types of 

###### Example:
Assuming we have an action called "targeted_strength_check" that compares the npc character's strength vs a targeted token. We can add it to the token's action bar as well as the Character Macros tab with the following:

```javascript
dispatch.addMacrosToHost({
  macro: {
    id: 'npc_strength_check1',
    name: npc_strength_check,
    characterId: '20kdk1-k3j',
    commandString?: `@{20kdk1-k3j|targeted_strength_check}`,
    locations: ['tokenActionBar']
  }
})
```

![targeted_strength_check](images/addMacroToHost_npc_example.png)

In a similar way we can remove it from the token action bar using `addMacrosToHost`, if for example our NPC changes and we want to reflect that in it's token actions by running the following:

```javascript
dispatch.addMacrosToHost({
  macro: {
    id: 'npc_strength_check1',
  }
})
```

The above will remove the `npc_strength_check1` action from the token bar but will still leave it in the Character Macros page:
 ![targeted_strength_check](images/addMacroToHost_npc_example02.png)