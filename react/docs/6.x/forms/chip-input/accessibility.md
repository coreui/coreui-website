# React Chip Input Component Accessibility

> Detailed overview of the accessibility and keyboard support features implemented in the CoreUI React Chip Input component.

## Accessible React Chip Input

Chip inputs are commonly used for tags, labels, recipients, and tokenized multi-value entry. When used in forms, they should remain keyboard accessible, clearly labeled, and understandable to assistive technologies. This guide explains how CoreUI React Chip Input supports accessible usage patterns.

### Semantic Structure

- **Inline text input**: `CChipInput` renders a real text input for entering new values, which keeps typing, focus, and screen reader behavior predictable.

- **Chip list pattern**: Existing values are rendered as chips before the inline input, making the field readable as a tokenized sequence of values.

- **Form compatibility**: When `name` is provided, a hidden input is rendered so chip values can participate in traditional form submission.

### ARIA Attributes

CoreUI React Chip Input supports accessible labeling and chip state communication:

- **External labels**: Associate the input with a `<label>` using `id` and `htmlFor` for clear screen reader context.

- **Chip selection state**: Selectable chips expose `aria-selected` through the underlying `CChip` component.

- **Remove buttons**: Each remove button is named with `ariaRemoveLabel` and the chip's value, `Remove <value>` by default. Put `{label}` where the value goes, or pass a function of the value for another word order.

- **Announcements**: Adding and removing chips is announced through [`announce()`](https://coreui.io/react/docs/getting-started/accessibility/#announcing-messages) in the live region of the page, or of the modal dialog around the field, one message per update: the values the field did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`. Customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` props. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.

- **Disabled and readonly states**: Disabled and readonly states are reflected so assistive technologies can identify interaction constraints.

### Focus Management

- **Input-first workflow**: Users can type directly into the inline input without extra setup.

- **Chip navigation**: When the input is empty, keyboard navigation can move focus to chips for selection or removal.

- **Selectable chips**: Focusable chips can be traversed with arrow keys once focus enters the chip list.

### Visual Indicators

- **Visible focus states**: The input and focusable chips provide visible focus styles for keyboard users.

- **Selected chips**: Active chips are visually differentiated when `selectable` is enabled.

- **Disabled and readonly styling**: Reduced emphasis communicates when the field or chips are not editable.

### Keyboard Support

The React Chip Input component supports keyboard interaction for both the input and the rendered chips:

| Key | Function |
| --- | --- |
| <kbd>Enter</kbd> | Create a chip from the current input value. |
| <kbd>,</kbd> or separator key | Create a chip from the current input value when a separator is configured. |
| <kbd>Backspace</kbd> or <kbd>Delete</kbd> | When the input is empty, move focus to the last chip. When a removable chip is focused, remove it. |
| <kbd>Left Arrow</kbd> | When the caret is at the start of the input, move focus to the last chip. When a chip is focused, move to the previous chip. |
| <kbd>Right Arrow</kbd> | When a chip is focused, move to the next chip. |
| <kbd>Space</kbd> or <kbd>Enter</kbd> on a chip | Toggle selected state when `selectable` is enabled. |
| <kbd>Home</kbd> | Move focus to the first focusable chip. |
| <kbd>End</kbd> | Move focus to the last focusable chip. |
| <kbd>Shift</kbd> + <kbd>Left Arrow</kbd> / <kbd>Right Arrow</kbd> | Move focus and add the chip it lands on to the selection (`selectable`, `selectionMode="multiple"`). |
| <kbd>Shift</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | Extend the selection to the first or last chip (`selectable`, `selectionMode="multiple"`). |
| <kbd>Ctrl</kbd> / <kbd>Cmd</kbd> + <kbd>A</kbd> | Select every chip (`selectable`, `selectionMode="multiple"`). |
| <kbd>Escape</kbd> | Clear the current input value and blur the input. |
