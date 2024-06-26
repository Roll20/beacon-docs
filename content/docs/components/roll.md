---
title: "Rolls"
description: ""
summary: ""
date: 2024-01-07T16:12:37+02:00
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
The Roll20 Tabletop and Roll20 Characters (both refered to as host throughout the rest of this page) have several new features that enhance the way rolls are handled and displayed. These features include attributes and elements that allow for dynamic roll results and interactivity within the host.
[Vist the Roll20 help center to learn more about Roll20's Dice Rolling system](https://help.roll20.net/hc/en-us/articles/360037773133-Dice-Reference)

The most command way to trigger a dice roll is through the dispatch object returned from the `initRelay`, but it could also be called from [actions](/docs/components/actions):
```typescript
dispatch.roll({
  rolls: { [rollName: string]: string } // Ex. {attack: '1d20+4', damage: `3d6+2`}
  messageId?: string
}): Promise<{messageId: string, results: RollResults }>
```

The `roll` method takes one or more rolls in the form of an object, where the keys are unique roll names and the values are roll strings.

`messageId` can be provided to attach the roll to an existing chat message, either overriding it or appending to it in the chat log. 
If `messageId` is omitted, the roll will be associated with a new chat message and a new `messageId` for that message will be returned with the roll results.
The method returns a promise that resolves with an object containing the `messageId` and the [RollResults](#rolls-results-format). The roll result is returned in the same format as in the non-beacon dice rolls computed roll system.

{{< callout context="tip" >}}
The dispatch roll method and the actions roll section do not post to the chat, instead they will return a promise which will resolve to the roll results and the message id.
{{< /callout >}}

## Posting A Roll to the Chat

The roll method does not send or post any data to the chat on it's own. We instead have to use  [dispatch's post](/docs/components/dispatch/#post) method to send our roll results along with any other content to the chat.

```typescript
dispatch.post({
    characterId:  '-O0KZhMTxLkn2HArFj8f',
    content: `I rolled a ${diceRoll.results.attack.results.result} to hit and did ${diceRoll.results.damage.results.result} damage!`,
  })
```

## Additional Roll Posting Options

## data-rollname

The `data-rollname` attribute tells the host that this HTML element is displaying the result of a roll.

```html
<span data-rollname="attack"></span>
```

The host will both add the Quantum Roll signature element and replace the contents of the element with the result from the roll.

This is the preferred method for displaying roll results wherever possible, that is, sending the whole roll formula to the roll server and allowing the host to display the result.

## data-computed

Tagging an element with both a `data-rollname` and a `data-computed="true"` tells the host that this element is associated with a roll, but the results of that roll were computed by the author, as opposed to the roll server computing the result.

```html
<span data-rollname="complex" data-computed="true">25</span>
```

The host will add the Quantum Roll signature tooltip, but the content of the element will not be modified. Generally, this should only be used when the roll server does not support a particular dice mechanic.

### Roll Buttons

Roll buttons are interactive elements that trigger sheet actions, such as damage rolls, when clicked. These buttons use the `data-sheet-action` attribute to specify the action to be executed.

```html
<button data-sheet-action="damage" data-args="arg1:arg2">Click Me</button>
```

Additional arguments can be provided using the `data-args` attribute, and the character, `messageId`, and original rolls will be included automatically.

## Rolls Results Format
```typescript
type RollResults = {
  [name: string]: {
    expression: string        //The original expression (i.e. 1d20+3d6)
    rollName: string          //The name of the roll
    results: {                //The results of the roll(s)
      expression: string
      dice?: number[]         //
      result: number          //The final result of the roll
      rolls?: {               //Detailed results of each part of the roll (i.e. 3d6)
        sides: number         //The type of die for this part of the roll (i.e. 6)
        dice: number          //The number of dice (i.e. 3)
        results: number[]     //The result of each die (i.e. [4, 2, 5])
      }[]
    }
  }
}
```