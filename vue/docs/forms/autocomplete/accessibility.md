# Vue Autocomplete Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue Autocomplete, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The Vue Autocomplete component includes several accessibility features:

- **ARIA attributes**: Proper `role`, `aria-expanded`, `aria-haspopup`, and `aria-autocomplete` attributes
- **Screen reader support**: Descriptive labels and announcements for state changes
- **Keyboard navigation**: Full keyboard support with arrow keys, Enter, Escape, and Tab
- **Focus management**: Proper focus handling and visual focus indicators
- **Semantic markup**: Uses appropriate HTML elements and structure

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| <kbd>Arrow Down</kbd> | Navigate to the next option or open dropdown |
| <kbd>Arrow Up</kbd> | Navigate to the previous option |
| <kbd>Home</kbd> | Focus the first option |
| <kbd>End</kbd> | Focus the last option |
| <kbd>Enter</kbd> | Select the highlighted option |
| <kbd>Escape</kbd> | Close the dropdown and clear focus |
| <kbd>Tab</kbd> | Accept hint completion (when hints are enabled) |
| <kbd>Backspace/Delete</kbd> | Clear input and trigger search |
