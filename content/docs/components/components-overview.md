---
title: "Overview"
description: ""
summary: ""
date: 2024-06-07T16:12:37+02:00
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


The Beacon SDK is composed of various components that allow developers to create dynamic and interactive character sheets for virtual tabletop (VTT) games.

These components are crucial for handling actions, computations, macros, and rolls. This overview provides a high-level summary of each section, helping you understand their roles and how they integrate within the SDK.


{{< card-grid >}}
{{< link-card
  title="Actions"
  description=" Actions define specific operations that can be performed by characters within the VTT. These operations can range from simple tasks like rolling a dice to more complex interactions such as casting spells or activating abilities."
  href="/docs/components/actions/"
  target="_blank"
>}}
{{< link-card
  title="Handlers"
  description="Handlers are event listeners that manage communication between the VTT and the character sheet. They respond to various events, such as changes in character attributes or settings, and trigger appropriate actions or updates."
  href="/docs/components/handlers/"
  target="_blank"
>}}

{{< /card-grid >}}




{{< card-grid >}}
{{< link-card
  title="Computed"
  description=" Computed properties are dynamic values derived from other character attributes. They allow for the creation of complex, calculated attributes that automatically update when their dependencies change."
  href="/docs/components/computed/"
  target="_blank"
>}}
{{< link-card
  title="Macro Attributes"
  description="Macro attributes handle the conversion of legacy macro attributes to the new format used in the Beacon SDK. This ensures compatibility with older character sheets and macros, allowing for a smooth transition to the new system."
  href="/docs/components/handling-legacy-macro-attributes/"
  target="_blank"
>}}

{{< /card-grid >}}


{{< link-card
  title="Rolls"
  description="The Rolls component allows for advanced dice-rolling mechanics within the VTT. It supports both simple and complex rolls, providing flexibility in how roll results are displayed and computed."
  href="/docs/components/rolls/"
  target="_blank"
>}}

