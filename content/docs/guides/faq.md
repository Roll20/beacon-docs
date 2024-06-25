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

{{< details "**Q: How is Beacon better than the old way of building sheets (known as Custom Sheets)?**" >}}

It depends on your web development skill level. There are a number of benefits to the Beacon SDK if you know how to build web applications. If you don't know how to set up your own local environment, than the Beacon SDK might now be the first place you should start. [Learn more about sheet development using the custom sheet](https://help.roll20.net/hc/en-us/articles/360037773413-Intro-to-Sheet-Development).

If you have the skill to take advantage of the Beacon SDK, there are a number of improvements that will make it much easier to build characters sheets.

First, the Beacon SDK allows you to develop locally and preview your changes automatically in the Roll20 Tabletop and Roll20 Character sandboxes. This means that you don't have to keep uploading your HTML and CSS into the custom sheet to see your changes.

Next, it allows you to develop your character sheet with all the power of JavaScript frameworks and modern web development libraries. In our example sheets, we use Vue.js, but you are free to use whatever you are most comfortable with. Also, you could use something like [Cypress](https://www.cypress.io/) to create automated testing. That's what we use in our Beacon sheets.

Lastly, the Beacon SDK makes it much easier for a web developer who knows JSON and Javascript to access character data and manage attributes on the character. If you're familiar with the custom sheet, you no longer have to deal with sheet workers to get the data you need for a character. Also, the Beacon SDK introduces nested and computed attributes that make complex data models for your character sheet easier to create and maintain.
{{< /details >}}

{{< details "**Q: I'm not really a web developer, should I use Beacon or the custom sheet to make a my own character sheet?**" >}}

That is up to you and your comfort level. If you're looking to learn more about web development, building a character sheet with the Beacon SDK is a great way to level up your skills. What you learn during this process can be taken with you into any other web development project you work on in the future.

If setting up your own development environment is too intimidating for you, than it might be easier for you to start with the [custom sheet](https://help.roll20.net/hc/en-us/articles/360037773413-Intro-to-Sheet-Development) and to go from there.
{{< /details >}}

{{< details "**Q: I'm interested in using Beacon, but I don't know the basics of setting up a local environment. Where can I go to learn more about web development?**" >}}

You can start learning how to build a local development environment by reading or watching the following tutorials. Note: these are not tutorials that we've produced, but we have found them helpful in getting started with web development.

- [https://learn.microsoft.com/en-us/windows/dev-environment/javascript/vue-on-wsl](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/vue-on-wsl)
- [https://www.youtube.com/watch?v=WPqXP_kLzpo](https://www.youtube.com/watch?v=WPqXP_kLzpo)
{{< /details >}}


{{< details "**Q: Now that Roll20 has acquired Demiplane, will you continue to support character sheets built on Beacon?**" >}}

The recent acquisition of Demiplane brings exciting new opportunities for character sheets and compendiums on Roll20. At the same time, we are fully committed to supporting the Beacon SDK and character sheets that are built in our new advanced sheets ecosystem on Roll20. In fact, we believe that the Beacon SDK will be a key component of our future plans for Demiplane integration. In addition, our new D&D 2024 sheet is built on top of the Beacon SDK, and we will continue to utilize it to build first-class experiences on Roll20.

In short, you can rest assured that the Beacon SDK is an important tool in our toolbox moving forward.
{{< /details >}}


{{< details "**Q: What are actions in the context of Beacon?**" >}}

Actions are methods executed in the chat log of Roll20 Tabletop or Roll20 Characters, often used for rolls triggered from macros or chat buttons. They are defined in the sheet's configuration and can interact with character data.
{{< /details >}}


{{< details "**Q: How are computed properties used in Roll20?**" >}}

Computed properties are attributes which are accessible by users of your character sheet. They are usable in macros to create custom rolls or common actions for each character. Computed properties can represent derived values or complex calculations based on character data.
{{< /details >}}


{{< details "**Q: What is the dispatch function used for?**" >}}

The dispatch function provides methods for sending commands from the character sheet back to Roll20, including updating character data, performing actions, and interacting with the interface.
{{< /details >}}



{{< details "**Q: What are roll buttons, and how do they work?**" >}}

Roll buttons are HTML elements with specific attributes that execute designated sheet actions when clicked. They can pass arguments to the action method and are commonly used for triggering rolls from the character sheet.
{{< /details >}}



{{< details "**Q: How are legacy attributes handled in Beacon?**" >}}

Beacon gives you the ability to transition your legacy attributes to new attributes you create in Beacon. This means that when a user updates their sheet to the new Beacon sheet, their legacy attribute can be mapped to Beacon attributes using the `convertLegacyMacroAttributes` function. Sheet developers can define how to handle legacy attribute values to ensure compatibility with existing macros.
{{< /details >}}


{{< details "**Q: What is the purpose of the query function?**" >}}

The query function displays a [`SweetAlert2`](https://sweetalert2.github.io/) prompt to users and returns the results along with any errors. It is commonly used for interactive prompts or confirmations within the VTT interface.
{{< /details >}}


{{< details "**Q: How are tokens managed in the VTT?**" >}}

Tokens represent characters or objects on Roll20 Tabletop (VTT). Functions like getTokens, updateTokensByCharacter, and addToTracker are used to retrieve token information, update token data, and manage tokens in the turn tracker.
{{< /details >}}


{{< details "**Q: What is the role of the convertLegacyMacroAttributesArgs type?**" >}}

The `convertLegacyMacroAttributesArgs` type defines the arguments used for handling legacy macro attributes. It includes the attribute name, character ID, and character data needed for mapping legacy attributes to the new sheet structure.
{{< /details >}}




