# Rolls

The VTT (Virtual Tabletop) has several new features that enhance the way rolls are handled and displayed. These features include attributes and elements that allow for dynamic roll results and interactivity within the VTT environment.

## data-rollname

The `data-rollname` attribute tells the VTT that this HTML element is displaying the result of a roll.

```html
<span data-rollname="attack"></span>
```

The VTT will both add the Quantum Roll signature tooltip to the element and replace the contents of the element with the result from the roll.

This is the preferred method for displaying roll results wherever possible, that is, sending the whole roll formula to the roll server and allowing the VTT to display the result.

## data-computed

Tagging an element with both a `data-rollname` and a `data-computed="true"` tells the VTT that this element is associated with a roll, but the results of that roll were computed by the author, as opposed to the roll server computing the result.

```html
<span data-rollname="complex" data-computed="true">25</span>
```

The VTT will add the Quantum Roll signature tooltip, but the content of the element will not be modified. Generally, this should only be used when the roll server does not support a particular dice mechanic.

## Roll Buttons

Roll buttons are interactive elements that trigger sheet actions, such as damage rolls, when clicked. These buttons use the `data-sheet-action` attribute to specify the action to be executed.

```html
<button data-sheet-action="damage" data-args="arg1:arg2">Click Me</button>
```

Additional arguments can be provided using the `data-args` attribute, and the character, `messageId`, and original rolls will be included automatically.