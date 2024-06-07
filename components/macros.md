# Handling Legacy Macro Attributes

When utilizing Macros within the VTT, there are instances where a legacy macro might need to be employed for a Beacon sheet.

This scenario commonly arises when transitioning from an existing legacy sheet to a Beacon sheet. During such transitions, it's possible that the attributes called from the legacy macro may not align with the structure of attributes in the Beacon Sheet.

The `convertLegacyMacroAttributes` function serves as a pivotal tool, empowering Sheet Developers to determine the mapping strategy for legacy attributes to the new Beacon Sheet.

## `convertLegacyMacroAttributes`

This function is defined during the initial SDK initialization process and is invoked by the host when it encounters a failure in locating an attribute's value.

```typescript
convertLegacyMacroAttributes: (messages: convertLegacyMacroAttributesArgs) => {}: any
```

Advanced sheet macros typically first search through the defined computed properties before resorting to the `convertLegacyMacroAttributes` function.

The function's purpose is to return a value that will be substituted in the macro. However, it grants Sheet Developers the autonomy to devise their preferred approach for handling legacy attribute values.