---
title: "Changelog"
description: ""
summary: ""
date: 2024-01-07T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 999
toc: true
sidebar:
  collapsed: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

### **Release** v0.0.10 
**Date**: 2024-07-01
- Closed Beta Released. [Sign up to get access to Beacon SDK and Roll20 Sandboxes](https://docs.google.com/forms/d/e/1FAIpQLScwIAc38NhSTYBtZH04pkDj9O7APwysdgsRnVssFNhsoONOUw/viewform?usp=sf_link)

### **Release** v0.0.12
**Date**: 2024-07-17
- Better error handling for macros

### **Releases** v0.0.13 - v0.0.16
**Date**: 2024-09-12
- MOD API Implementation and fixes
- Beacon Macros bug fixes

### **Releases** v0.0.17 - v0.0.18
**Date**: 2024-09-16
- Various Bug Fixes

### **Release** v0.0.19
**Date**: 2024-09-17
- Various Bug Fixes

### **Release** v0.0.20
**Date**: 2024-09-19
- Various Bug Fixes

### **Release** v0.0.21
**Date**: 2024-09-20
- Various Bug Fixes

### **Release** v0.0.23
**Date**: 2024-10-31
- Various Bug Fixes

### **Release** v0.0.24
**Date**: 2024-11-25
- Discord related bug fixes

### **Releases** v0.0.25 - v0.0.26
**Date**: 2024-12-09
- Demiplane related bug fixes

### **Release** v0.0.27
**Date:**: 2025-04-14
- Dispatch method parseRollTemplate method update
	- passing through more dice roll details (crits, fumbles), raw results\
- handleLegacyMacro method now includes the Dispatch object
- computed properties now includes the Dispatch object
- Beacon Macro updates and fixes
- Various Bug Fixes

### **Release** v0.0.28
**Date**: 2025-04-16
- Fix whisper roll targeting bug

### **Releases** v0.0.30 - v0.0.31
**Date**: 2025-05-05
- Various Bug Fixes
- Implemented opening links in external windows for Roll20 Characters

### **Release** v0.0.37
**Date**: 2025-06-04
- Renamed Dispatch methods: getActions and addActionsToHost to getCharacterMacros and addMacrosTohost
- Type updates
- Updated Beacon Macros to include macro names
- Various Bug Fixes

### **Release** v0.1.0
**Date**: 2025-07-23
- Rename dispatch methods: convertLegacyMacroAttributes and handleLegacyRollTemplatesArgs methods to handleFallbackAttributes and handleFallbackRollTemplates
- Initial Relay settings now includes GDPR acceptance boolean
- Added new method writeToClipboard to allow copying sheet text

### **Releases** v0.1.2 - v0.1.9
**Dates**: 2025-08-13 - 2025-10-1
- Added sheetType, description, customMeta1, customMeta2, customMeta3 fields to main character object set by sheet authors
- Initial Relay settings now includes player subscription level
- Added new methods to Dispatch: postRaw and parseMessage
- Updated message results to include a message id
- Various Dispatch methods bug fixes
- Demiplane sheets support related updates
- Beacon Macro support updates

### **Release** v0.1.10
**Date**: 2025-10-09
- Resolved bug with handleFallbackActions

### **Release** v0.1.13
**Date**: 2025-11-14
- Resolve bug with handleFallbackAttributes

### **Release** v0.1.14
**Date**: 2025-11-19
- Initial Relay settings now return a user's role