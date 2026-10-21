# React Chip Set Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI React Chip Set, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

- The chip set manages roving focus, so the arrow keys move focus between chips rather than relying on the browser's default tab order.
- Add a descriptive `aria-label` to the chip set when the group has a meaningful role (e.g., "Applied filters").
- A selectable set is exposed as a horizontal `role="listbox"` (with `aria-multiselectable` in multiple mode) and each chip becomes a `role="option"` with `aria-selected`; a non-selectable set is a `role="group"`. See the [Chip](https://coreui.io/react/docs/components/chip/) accessibility notes.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/react/docs/getting-started/accessibility/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` props. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.
