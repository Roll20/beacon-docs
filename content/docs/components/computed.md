---
title: "Computed"
description: ""
summary: ""
date: 2024-04-07T16:12:37+02:00
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

Sheet authors define computed properties that are accessed by the Roll20 Tabletop or Roll20 Characters. These computed properties can be used as attributes in macros and are available to assign as values to token bars - if the `tokenBarValue` property is set to true.

```typescript
initRelay({
  //...other methods
  computed: {
    [name: string]: {
      tokenBarValue?: boolean
      description?: string
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
- `set` (optional): This method receives character data and a dispatch, along with string arguments. This method does not need to return a value.


{{< callout context="tip" title="" >}}

- Setting `tokenBarValue` to true will make the property available to use as a value for token bars. To work correctly, the `get` function must not rely on any additional arguments and must return either a simple value (a string or number) or an object:

 ```JSON
  { current: number | string, max: number | string }
 ```

- If the `set` function is omitted, the value will not be editable from the token itself. If defined, `set` methods will receive one string argument, which is whatever the user types into the input for modifying the bar.
{{< /callout >}}

