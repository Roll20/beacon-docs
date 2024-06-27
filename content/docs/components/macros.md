---
title: "Handling Legacy methods"
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

When utilizing Macroswithin the Roll20 Tabletop or Roll20 Characters (both refered to as host throughout this page), there are instances where a legacy macro might need to be employed for a Beacon sheet.

This scenario commonly arises when transitioning from an existing legacy sheet to a Beacon sheet. During such transitions, it's possible that the attributes or roll templates called from the legacy macro may not align with the structure of attributes or the lack of roll templates in the Beacon Sheet.

## convertLegacyMacroAttributes

The `convertLegacyMacroAttributes` method allows us to determine the mapping strategy for legacy attributes to the new Beacon Sheet.

```typescript
initRelay({
  convertLegacyMacroAttributes: (messages:  {
    attribute: string,
    characterId: string,
    character: Character
  }) => {}: any,
}): Promise<Dispatch>
``` 

This method is defined during the initial SDK initialization process and is invoked by the host when it attempts to parse a macro and encounters a failure in locating an attribute's value during an macro's execution.

{{< callout context="tip" >}}
Advanced sheet actions typically will first search through the defined computed properties before resorting to the `convertLegacyMacroAttributes` method as a fallback.
{{< /callout >}}

The method's purpose is to return a value that will be substituted in the macro. However, it grants us the autonomy to devise the preferred approach for handling legacy attribute values.

## handleLegacyRollTemplates

Since Beacon sheets no longer require or use roll templates as previously needed in older custom sheets, there will be times where a legacy macro might make include a reference to a legacy roll template. We can use the `handleLegacyRollTemplates` to determine how to handle these cases.

```typescript
initRelay({
  handleLegacyRollTemplates: (message: { 
    templateName: string, // name of the template that triggered this method
    properties: Record<string, any>, // a list of the values and formulas for rolls and macro in the template
    // along with values for other properties in the template
    dispatch: Dispatch, 
    playerid: string ,
    originalInput: string // the original text input for the entire roll template string
  }) => {}: any,
}): Promise<Dispatch>
``` 

{{< callout context="tip" >}}
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
{{< /callout >}}