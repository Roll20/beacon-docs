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