# Vue Chip Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Chip, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The Vue Chip component follows WAI-ARIA patterns for interactive widgets, ensuring the chip component is fully usable with keyboards and assistive technologies.

- Chips become focusable when `selectable` or `removable` is enabled.
- A standalone selectable chip is exposed as a toggle button (`role="button"`) with `aria-pressed` kept in sync with `.active`. Inside a selectable [Chip Set](https://coreui.io/vue/docs/components/chip-set/) the set exposes a listbox and each chip becomes a `role="option"` with `aria-selected` instead.
- `aria-disabled="true"` is applied to disabled chips that carry a role; a role-less chip conveys the state through the `disabled` class and its removed interactivity.
- Each `.chip-remove` button is named with `ariaRemoveLabel` and the chip's text, `Remove <text>` by default, so every remove button in a set has its own name. A string places the text at `{label}`, or appends it when there is no `{label}`; a function receives the text and returns the whole name.
- Use descriptive `aria-label` attributes on chip containers when the chip component group has a meaningful role (e.g., "Applied filters").
