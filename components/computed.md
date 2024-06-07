# Computed

Sheet authors define computed properties that are accessed by the host. These computed properties can be used as attributes in macros and are available to assign as values to token bars - if the `tokenBarValue` property is set to true.

```javascript
computed: {
 [name: string]: {
 tokenBarValue?: boolean,
 description?: string,
    get: (
      props: {
 character: Character
 },
      ...args: string[]
 ) => ComputedResult,
 set?: (
      props: {
 character: Character,
 dispatch: Dispatch
 },
      ...args: string[]
 ) => void | Promise<void>
 }
}
```

Computed properties are passed into the `initRelay` function in an object where the keys are the names of the properties, and the value should be an object containing the following:

- `get` (required): It receives character data along with any number of string parameters and should return the computed value.
- `tokenBarValue` (optional): A boolean indicating whether this property should be available for use in token bars.
- `description` (optional): A text value indicating what this computed summary property represents.
- `set` (optional): This method receives character data and a dispatch, along with string arguments. This method does not need to return a value.


::: tip

- Setting `tokenBarValue` to true will make the property available to use as a value for token bars. To work correctly, the `get` function must not rely on any additional arguments and must return either a simple value (a string or number) or an object:

 ```JSON
  { current: number | string, max: number | string }
 ```

- If the `set` function is omitted, the value will not be editable from the token itself. If defined, `set` methods will receive one string argument, which is whatever the user types into the input for modifying the bar.
:::
