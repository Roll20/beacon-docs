---
title: "FAQ"
description: ""
summary: ""
date: 2024-01-07T16:04:48+02:00
lastmod: 2024-02-07T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

{{< details "**Q1: What are actions in the context of the VTT?**" >}}

Actions are methods executed from the VTT, often used for rolls triggered from macros or chat buttons. They are defined in the sheet's configuration and can interact with character data.
{{< /details >}}

{{< details "**Q2: How are computed properties used in the VTT?**" >}}

Computed properties are defined attributes accessible by the host, usable in macros, and assignable to token bars. They can represent derived values or complex calculations based on character data.
{{< /details >}}



{{< details "**Q3: What is the dispatch function used for?**" >}}

The dispatch function provides methods for sending commands from the character sheet back to the host, including updating character data, performing actions, and interacting with the VTT interface.
{{< /details >}}



{{< details "**Q4: What are roll buttons, and how do they work?**" >}}

Roll buttons are HTML elements with specific attributes that execute designated sheet actions when clicked. They can pass arguments to the action method and are commonly used for triggering rolls from the character sheet.
{{< /details >}}



{{< details "**Q5: How are legacy macro attributes handled in the VTT?**" >}}

Legacy macro attributes can be mapped to the new sheet structure using the convertLegacyMacroAttributes function. Sheet developers can define how to handle legacy attribute values to ensure compatibility with existing macros.
{{< /details >}}


{{< details "**Q6: What is the purpose of the query function?**" >}}

The query function displays a SweetAlert prompt to users and returns the results along with any errors. It is commonly used for interactive prompts or confirmations within the VTT interface.
{{< /details >}}


{{< details "**Q7: How are tokens managed in the VTT?**" >}}

Tokens represent characters or objects on the virtual tabletop. Functions like getTokens, updateTokensByCharacter, and addToTracker are used to retrieve token information, update token data, and manage tokens in the turn tracker.
{{< /details >}}


{{< details "**Q8: What is the role of the convertLegacyMacroAttributesArgs type?**" >}}

The convertLegacyMacroAttributesArgs type defines the arguments used for handling legacy macro attributes. It includes the attribute name, character ID, and character data needed for mapping legacy attributes to the new sheet structure.
{{< /details >}}




