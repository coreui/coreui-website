# Vue Multi Select Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Multi Select, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The Vue Multi Select component is designed with accessibility in mind, implementing WAI-ARIA standards to ensure compatibility with screen readers and assistive technologies.

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
