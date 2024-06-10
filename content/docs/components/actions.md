---
title: "Actions"
description: ""
summary: ""
date: 2024-05-07T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 900
toc: true
sidebar:
  collapsed: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

Actions are a collection of methods that can be executed from the VTT. These actions are used for any rolls that may need to be triggered outside of the sheet itself, such as from a macro or a chat button. Generally, most or all of a sheet’s rolls should be defined as actions.

```javascript
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

The `method` receives a `props` object containing the following properties:

- `dispatch`: A `Dispatch` object.
- `character`: The data of the character performing the action. Currently, the action will not receive the character’s bio or GM notes, regardless of whether the player has access to those fields.
- `messageId` (optional): A unique ID for an existing chat message. It's included in actions triggered from chat buttons to provide context for the original roll.
- `rolls` (optional): Included when action is triggered from a chat button. Contains the roll results of the original roll.

> These functions can also receive an unlimited number of additional arguments. This is because these actions can be triggered by plain text via a macro. However, all additional arguments must be strings. Additionally, these functions can be synchronous or asynchronous and do not return a value.