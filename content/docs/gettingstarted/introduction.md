---
title: "Introduction"
description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
summary: ""
date: 2024-05-07T16:04:48+02:00
lastmod: 2024-01-07T16:04:48+02:00
draft: false
weight: 10
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---
{{< callout context="caution" title="This project is currently in closed beta. " icon="outline/alert-triangle"  >}}
Please complete the [form](https://forms.gle/XXnj1SbfmYnUq8Hu9) to request access to the closed beta.

For more info about the release of the closed beta, refer to this [document](
https://docs.google.com/document/d/1lVXp2TKb5gof-6hXvjWgQ7Zo09LZlorBoyjv5un8IeU/edit?usp=sharing)

{{< /callout >}}

The Beacon SDK is a toolset designed to enhance and streamline the development of virtual tabletop (VTT) character sheets and other interactive elements.
 
Whether you're a game master (GM), a developer, or a player, the Beacon SDK provides a framework to create dynamic, responsive, and fully integrated Roll20 Tabletop experiences.

## What is the Beacon SDK?

The Beacon SDK is a specialized software development kit for virtual tabletops.

It facilitates creating and managing interactive character sheets, roll templates, macros, and other Roll20 Tabletop functionalities.

The SDK ensures easy communication between the Roll20 Tabletop platform and the character sheets, allowing real-time updates and interactions.

## Key Features

- **Character Sheets**: Design and implement detailed character sheets with dynamic attributes and real-time updates.
- **Roll Mechanics**: Integrate complex roll formulas and display roll results directly within the Roll20 Tabletop.
- **Macros**: Create and manage macros for automated actions and roll calculations.
- **Event Handling**: Utilize a comprehensive set of handlers to manage various events and interactions within the Roll20 Tabletop.
- **Legacy Support**: Convert and integrate legacy macros and roll templates with the new Beacon architecture.
- **Customization**: Define custom actions computed properties and handle specific roll templates tailored to your game's needs.

## Components Overview

The Beacon SDK is composed of several key components:

- **Actions**: Define and manage custom actions that can be triggered within the Roll20 Tabletop.
- **Handlers**: Event handlers that process and respond to various Roll20 Tabletop events and messages.
- **Computed Properties**: Define dynamically computed properties based on other attributes.
- **Macro Attributes**: Convert and manage legacy macro attributes for compatibility with the Beacon SDK.
- **Rolls**: Implement advanced roll mechanics and display results dynamically within the Roll20 Tabletop.

For a comprehensive overview of these components, view the components section.

## Getting Started

To get started with the Beacon SDK, you must initialize the relay, set up your character sheets, and define the necessary actions, handlers, and computed properties.

This documentation provides detailed guides and examples to help you through each step of the process.

By leveraging the Beacon SDK, you can create rich, interactive, fully integrated Roll20 Tabletop experiences that enhance gameplay and streamline game management.

Whether adapting existing character sheets or building new ones from scratch, the Beacon SDK offers the tools and flexibility to bring your virtual tabletop to life.