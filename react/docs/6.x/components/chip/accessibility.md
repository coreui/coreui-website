# React Chip Component Accessibility

> Detailed overview of the accessibility and keyboard support features implemented in the CoreUI React Chip component.

## Accessible React Chip

Chips are commonly used for tags, labels, filters, and compact selection controls. When chips are interactive, they should remain keyboard accessible and expose clear state to assistive technologies. This guide explains how CoreUI React Chip supports accessible usage patterns.

### Semantic Structure

- **Native interactive elements**: Chips can be rendered as native interactive elements such as `<button>` using the `as` prop, which keeps behavior predictable for keyboard and assistive technology users.

- **Meaningful structure**: Non-interactive chips remain simple text-like UI elements, while interactive chips use stateful classes and attributes to reflect their behavior.

### ARIA Attributes

CoreUI React Chip applies accessibility attributes to reflect state:

- **`aria-selected`**: Added for selectable chips and synchronized with the selected state.

- **`aria-disabled`**: Applied when the chip is disabled so assistive technologies can identify non-interactive items.

- **Remove button label**: The remove button is named with `ariaRemoveLabel` and the chip's text, `Remove <text>` by default. A string places the text at `{label}`, or appends it when there is no `{label}`; a function receives the text and returns the whole name.

### Focus Management

- **Automatic focusability**: Chips become focusable when `selectable` or `removable` is enabled.

- **Keyboard navigation**: Focus can move between chips in the same container using arrow keys, with `Home` and `End` support for jumping to the first or last chip.

- **Remove flow**: When a removable chip is removed with the keyboard, focus moves to a nearby chip when available.

### Visual Indicators

- **Visible focus styles**: Focusable chips display a visible focus state for keyboard users.

- **Selected and active states**: Selectable chips visually reflect their current state, helping users understand which chips are active.

- **Disabled state**: Disabled chips use reduced emphasis to communicate that they are not interactive.

### Keyboard Support

The React Chip component supports keyboard interaction when chips are `selectable` and/or `removable`:

| Key | Function |
| --- | --- |
| <kbd>Tab</kbd> | Moves focus to the next focusable element. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus to the previous focusable element. |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | Toggles the selected state of the focused chip when `selectable` is enabled. |
| <kbd>Backspace</kbd> or <kbd>Delete</kbd> | Triggers chip removal when `removable` is enabled. |
| <kbd>Left Arrow</kbd> | Moves focus to the previous focusable chip in the same container. |
| <kbd>Right Arrow</kbd> | Moves focus to the next focusable chip in the same container. |
| <kbd>Home</kbd> | Moves focus to the first focusable chip in the container. |
| <kbd>End</kbd> | Moves focus to the last focusable chip in the container. |
