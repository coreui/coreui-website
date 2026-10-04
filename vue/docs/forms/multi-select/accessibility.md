# Vue Multi Select Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Multi Select, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The Vue Multi Select component is designed with accessibility in mind, implementing WAI-ARIA standards to ensure compatibility with screen readers and assistive technologies.

### Naming the control

The component renders its own combobox and keeps a hidden `<select>` for form submission, which is also what native `required` validation focuses and anchors to. Name the combobox with the `label` prop, with `aria-label` or `aria-labelledby` on `CMultiSelect`, or with a `<label for>` pointing at the component's `id`.

With `search` enabled the field the user tabs to is the search input, not the combobox, and it keeps a name of its own because what it holds is a filter rather than the value. That name is `ariaSearchLabel`, `Search options` by default. Set it per control on a page with more than one multi select, or every one of them announces the same thing:

```vue
<CMultiSelect id="frameworks" aria-search-label="Search frameworks" :options="options" search />
```

```vue
<label for="frameworks">Frameworks</label>
<CMultiSelect id="frameworks" :options="options" />
```

### ARIA Attributes

The component automatically includes the following ARIA attributes:

- **`role="combobox"`** on the main container to identify it as a combobox control
- **`aria-haspopup="listbox"`** indicates that the control has an associated listbox popup
- **`aria-expanded`** reflects the current state of the dropdown (true when open, false when closed)
- **`aria-owns`** establishes ownership relationship between the input and dropdown when teleport is enabled
- **`role="listbox"`** on the dropdown container to identify it as a list of options
- **`aria-labelledby`** connects the dropdown to the component's label
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
| <kbd>Backspace/Delete</kbd> | Remove last selected item (when search is empty) |

### Screen Reader Support

- All interactive elements have appropriate accessible names
- Selection changes are announced to screen readers
- Loading states are properly communicated
- Option groups are properly labeled and associated

### Customizable Labels

You can customize the accessible labels for better user experience:

```vue
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
