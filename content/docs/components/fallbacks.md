---
title: "Fallbacks"
description: ""
summary: ""
date: 2024-01-00T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 180
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

When utilizing Macros, Roll Templates, or Actions within the Roll20 Tabletop or Roll20 Characters (both refered to as host throughout this page), there are instances where a older Custom Sheet macros might need to be employed for a Beacon sheet. 

This scenario commonly arises when transitioning from an existing older Custom Sheet to a Beacon sheet. During such transitions, it's possible that the attributes called from the older Custom Sheet macros, roll templates or actions may not align with the structure of attributes in the Beacon Sheet.

## handleFallbackAttributes

{{< callout context="danger" icon="outline/alert-square" >}}
  In older Beacon SDK versions, this function was previously named `convertLegacyMacroAttributes`.
{{< /callout >}}

The `handleFallbackAttributes` method allows us to determine the mapping strategy for older Custom Sheet attributes to the new Beacon Sheet.

```typescript
initRelay({
  handleFallbackAttributes: (messages:  {
    attribute: string,
    characterId: string,
    character: Character
  }) => {}: string | number | null,
}): Promise<Dispatch>
``` 


This method is defined during the initial SDK initialization process and is invoked by the host when it attempts to parse a macro and encounters a failure in locating an attribute's value during an macro's execution.

Beacon Sheet actions will typically search through the defined computed properties before resorting to the `handleFallbackAttributes` method.

Returning a `null` value from this method will display the following error message to the user: `Unable to find attribute with the name ${attribute}`

The method's purpose is to return a value that will be substituted in the macro. However, it grants us the autonomy to devise the preferred approach for handling older Custom Sheet attribute values. 

## handleFallbackRollTemplates

{{< callout context="danger" icon="outline/alert-square" >}}
  In older Beacon SDK versions, this function was previously named `handleLegacyRollTemplates`.
{{< /callout >}}

Since Beacon sheets no longer require or use roll templates as previously defined in older custom sheets, there will be times where an older Custom Sheet roll template might need to be handled by a Beacon Sheet.

This scenario commonly arises when transitioning from an existing older Custom Sheet to a Beacon sheet. During such transitions, it's possible that an older Custom Sheet roll template might need to be called or handled.

We can use the `handleFallbackRollTemplates` to determine how to handle these cases.

```typescript
initRelay({
  handleFallbackRollTemplates: (message: { 
    templateName: string, // name of the template that triggered this method
    properties: Record<string, any>, // a list of the values and formulas for rolls and macro in the template
    // along with values for other properties in the template
    dispatch: Dispatch, 
    playerid: string ,
    originalInput: string // the original text input for the entire roll template string
  }) => {}: any,
}): Promise<Dispatch>
``` 

The properites object will also include a plainText key for roll template arguments not inside the curly brace syntax. 

```typescript
{
  //... other arguments
  properties: {
    attack: { value: 12, formula: '1d20' },
    damage: { value: 5, formula: '2d6' },
    foo: { value: 'bar' },
    name: {
      formula: "@{Helga|name}"
      value: "Helga"
    },
    plainText: ['apicallback', 'apple=red'],
    something: { 
      value: "I went to get tacos"
    },
    ............
  }
}
```