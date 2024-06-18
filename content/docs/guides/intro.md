---
title: "Introduction"
description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."
summary: ""
date: 2024-05-07T16:04:48+02:00
lastmod: 2024-01-07T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## What is the Beacon SDK?

The Beacon SDK (software development kit) is a toolset used to create digital character sheets on Roll20 for Roll20 Tabletop and Roll20 Characters.
 
Whether you're an experience developer, or just starting out, the Beacon SDK provides a framework to create dynamic, responsive, and fully integrated character sheet experiences.

The Beacon SDK also introduces a new way to develop characters sheets for Roll20. Beacon SDK allows you to connect your local development environment to sandboxes in Roll20 Characters and Roll20 Tabletop, giving you real-time updates as you develop.

## Key Features

- **Character Sheets**: Design and implement a web app character sheet with dynamic attributes and real-time updates.
- **Local Development**: Work where you are most comfortable and get real-time updates in sandboxes in Roll20.
- **Testing Sheets**: Release a testing sheet and give others special access to it before you push it live for everyone.
- **Roll Mechanics**: Integrate complex roll formulas and display roll results directly within the Roll20 Tabletop and Roll20 Characters.
- **Legacy Support**: Convert and integrate legacy macros and roll templates with the new Beacon architecture.
- **Customization**: Define custom actions, computed attributes and handle specific roll templates tailored to your game's needs.

## Components Overview

The Beacon SDK is composed of several key components:

- **Actions**: Define and manage custom actions that can be triggered within the VTT.
- **Handlers**: Event handlers that process and respond to various VTT events and messages.
- **Computed Attributes**: Define dynamically computed attributes based on other attributes.
- **Macro Attributes**: Convert and manage legacy macro attributes for compatibility with the Beacon SDK.
- **Rolls**: Implement advanced roll mechanics and display results dynamically within the VTT.

For a comprehensive overview of these components, view the components section.

## Getting Started

To get started with the Beacon SDK, you must initialize the relay, set up your character sheets, and define the necessary actions, handlers, and computed attributes.

This documentation provides detailed guides and example sheets to help you through each step of the process.

By leveraging the Beacon SDK, you can create rich, interactive, fully integrated VTT experiences that enhance gameplay and streamline game management.

Whether adapting existing character sheets or building new ones from scratch, the Beacon SDK offers the tools and flexibility to bring your digital character sheet to life.
