# Vue Chip Input Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Chip Input, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The Vue Chip Input component follows WAI-ARIA patterns to ensure the chip input is fully usable with keyboards and assistive technologies.

- Associate a `<label>` with the ghost input for screen readers.
- Chips are focusable and keyboard navigable.
- Each remove button the component creates is named with `ariaRemoveLabel` and the chip's value, `Remove <value>` by default. Put `{label}` where the value goes, or pass a function of the value for another word order.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/vue/docs/accessibility/screen-readers/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` props. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.
- The container is a generic element, so `disabled` and `readOnly` are carried by the inner input rather than stamped on it.
- Use a descriptive `aria-label` or `<label>` on the chip input container to communicate its purpose (e.g., "Add skills" or "Recipients").
