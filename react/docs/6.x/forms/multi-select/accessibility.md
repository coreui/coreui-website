# React Multi Select Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI React Multi Select, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The React Multi Select component is designed with accessibility in mind, implementing WAI-ARIA standards to ensure compatibility with screen readers and assistive technologies.

### ARIA Attributes

The component automatically includes the following ARIA attributes:

- **`role="combobox"`** on the main container to identify it as a combobox control
- **`aria-haspopup="dialog"`** indicates that the control opens a dialog holding the list of options
- **`aria-expanded`** reflects the current state of the dropdown (true when open, false when closed)
- **`aria-controls`** points the control at the dropdown dialog and the search input at the listbox while the dropdown is open
- **`role="listbox"`** on the list of options inside the dropdown
- **`aria-labelledby`** names the control and the dropdown after the label: `label`, `floatingLabel`, or a `<label>` pointing at the component's `id`, read when the component mounts or its `id` changes; an `aria-labelledby` or `aria-label` given to the component takes precedence. A `<label>` wrapping the component is left out, because its text would take in the control's own content and selection. The search box keeps a name of its own, `ariaSearchLabel`
- **`aria-required`** on the focused control, the search box when `search` is on, when `required` is set or an `aria-required` is given to the component
- **`aria-hidden="true"`** on the native `<select>` that carries the value into the form, so assistive technology meets only the combobox
- **Focus that reaches the native `<select>`**, from the browser's validation or from the label, goes on to the control (the search box when `search` is on), which carries `aria-invalid` and the `feedbackInvalid` description. A change of selection fires `input` and `change` on the select, as a native list does
- **`aria-multiselectable`** indicates whether multiple selections are allowed
- **`role="option"`** on each selectable option
- **`aria-selected`** on options to indicate their selection state

### Keyboard Navigation

The component supports full keyboard navigation:

| Key | Action |
| --- | --- |
| <kbd>Tab</kbd> | Navigate to/from the component |
| <kbd>Enter/Space</kbd> | Open dropdown or select focused option |
| <kbd>Arrow Up/Down</kbd> | Navigate through options |
| <kbd>Home</kbd> | Focus the first option |
| <kbd>End</kbd> | Focus the last option |
| <kbd>Escape</kbd> | Close the dropdown |
| <kbd>Backspace/Delete</kbd> | In the empty search box, focus the last chip; on a chip, remove it and move the focus to the next chip, else the previous one, else the search box, or the field when there is none. Entering the chips closes an open panel. A single select and the `counter` and `text` selections remove the last selected item at once |
| <kbd>Arrow Left/Arrow Right</kbd> | From the start of the search box, focus the last chip; between the chips, move the focus; past the last chip, return to the search box (mirrored in right-to-left) |

### Screen Reader Support

- All interactive elements have appropriate accessible names
- Selection changes are announced to screen readers
- Loading states are properly communicated
- Option groups are properly labeled and associated

### Customizable Labels

You can customize the accessible labels for better user experience:

```jsx
<CMultiSelect
  :options="options"
  aria-cleaner-label="Remove all selected items"
  aria-indicator-label="Open options menu"
/>
```

### Best Practices

- Always provide a meaningful `label` prop for the component
- Use descriptive option labels that make sense when read by screen readers
- Consider the `placeholder` text as it may be announced by some screen readers
- Test with actual screen readers to ensure the experience meets your users' needs
