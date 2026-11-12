---
title: "Computed"
description: ""
summary: ""
date: 2024-04-07T16:12:37+02:00
lastmod: 2023-09-07T16:12:37+02:00
draft: false
weight: 130
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

Sheet authors define computed properties that are accessed by the Roll20 Tabletop or Roll20 Characters. These computed properties can be used as attributes in macros and are available to assign as values to token bars - if the `tokenBarValue` property is set to true.

```typescript
initRelay({
  //...other methods
  computed: {
    [name: string]: {
      tokenBarValue?: boolean
      description?: string
      cacheable?: boolean
      get: (
        props: {
          character: Character
        },
        ...args: string[]
      ) => string | number | JSONValue
      set?: (
        props: {
          character: Character
          dispatch: Dispatch
        },
        ...args: string[]
      ) => void | Promise<void>
    }
  },
}): Promise<Dispatch>
```

Computed properties are passed into the `initRelay` function in an object where the keys are the names of the properties, and the value should be an object containing the following:

- `get` (required): It receives character data along with any number of string parameters and should return the computed value.
- `tokenBarValue` (optional): A boolean indicating whether this property should be available for use in token bars.
- `description` (optional): A text value indicating what this computed summary property represents.
- `cacheable` (optional): A boolean indicating whether or not this computed property is able to be cached for faster look-up speeds.
- `set` (optional): This method receives character data and a dispatch, along with string arguments. This method does not need to return a value.


{{< callout context="tip" title="" >}}

- Setting `tokenBarValue` to true will make the property available to use as a value for token bars. To work correctly, the `get` function must not rely on any additional arguments and must return either a simple value (a string or number) or an object:

 ```JSON
  { current: number | string, max: number | string }
 ```

- If the `set` function is omitted, the value will not be editable from the token itself. If defined, `set` methods will receive one string argument, which is whatever the user types into the input for modifying the bar.
{{< /callout >}}

## Computed Cacheability
When a computed property does not specify whether or not it is cacheable, Beacon does it's best to predict if it is cacheable or not using the following methods:
- The computed's name starts with `repeating_`: not cacheable.
- The `get` method of the computed configuration requires 2 or more arguments: not cacheable. (Note: `get(dispatch, ...args) {}` is detected as cacheable with this check).

If a computed name violates either of the following requirements, it will not be cached regardless of what the sheet's configuration specifies due to storage limitations of the cache.
- The name must be less than or equal to 768 bytes
- The name must not contain any of these characters: `[`, `]`, `.`, `#`, `$`, `/`.

When an attribute is requested from Beacon, in any location (API Script, Token Bar Attribute, Chat Message, other sheet, etc.), the cache will be checked first for any matching attribute, and return the cached result without ever calling your `get` method. If the cache doesn't include the attribute, then the `get` method will be called, and the value will be stored in the cache if it's cacheable.
