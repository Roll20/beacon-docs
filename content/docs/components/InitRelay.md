---
title: "InitRelay"
description: ""
summary: ""
date: 2024-06-07T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 100
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

The Beacon SDK is composed of various methods and components that allow developers to create dynamic and interactive character sheets for virtual tabletop (VTT) games. `initRelay` is the main method that initializes the Beacon SDK communication channel with the host (Either the Roll20 tabletop or in Roll20 Characters). It should be initialized as soon as the sheet loads, as its `onInit` handler will be the earliest we can get access to that character's data.

```typescript
initRelay({
    handlers: {
        onInit,
        onChange,
        onSettingsChange,
        onSharedSettingsChange,
        onTranslationsRequest,
        onDragOver,
        onDropOver,
    },
    actions: {},
    computed: {},
    convertLegacyMacroAttributes,
    handleLegacyRollTemplates
}): Promise<Dispatch>
``` 
These components are crucial for handling actions, computations, macros, and rolls. This overview provides a high-level summary of each section, helping you understand their roles and how they integrate within the SDK.


{{< card-grid >}}
{{< link-card
  title="Actions"
  description=" Actions define specific operations that can be performed by characters within the Roll20 Tabletop. These operations can range from simple tasks like rolling a dice to more complex interactions such as casting spells or activating abilities."
  href="/beacon-docs/docs/components/actions/"
  target="_blank"
>}}
{{< link-card
  title="Handlers"
  description="Handlers are event listeners that manage communication between the Roll20 Tabletop and the character sheet. They respond to various events, such as changes in character attributes or settings, and trigger appropriate actions or updates."
  href="/beacon-docs/docs/components/handlers/"
  target="_blank"
>}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card
  title="Computed"
  description=" Computed properties are dynamic values derived from other character attributes. They allow for the creation of complex, calculated attributes that automatically update when their dependencies change."
  href="/beacon-docs/docs/components/computed/"
  target="_blank"
>}}
{{< link-card
  title="Custom Sheet Macro Attributes"
  description="Macro attributes handle the conversion of older Custom Sheet macro attributes to the new format used in the Beacon SDK. This ensures compatibility with older character sheets and macros, allowing for a smooth transition to the new system."
  href="/beacon-docs/docs/components/custom-sheet-macro-attributes/"
  target="_blank"
>}}
{{< /card-grid >}}

{{< card-grid >}}
{{< link-card
  title="Rolls"
  description="The Rolls component allows for advanced dice-rolling mechanics within the Roll20 Tabletop. It supports both simple and complex rolls, providing flexibility in how roll results are displayed and computed."
  href="/beacon-docs/docs/components/rolls/"
  target="_blank"
>}}

{{< link-card
  title="Dispatch"
  description="The dispatch object provides methods for sending commands from the character sheet back to the host. Except when specified every method returns a promise."
  href="/beacon-docs/docs/components/dispatch/"
  target="_blank"
>}}
{{< /card-grid >}}