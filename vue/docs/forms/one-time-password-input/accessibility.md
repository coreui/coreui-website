# Vue One-Time Password Input Component Accessibility

> Detailed overview of the accessibility features implemented in CoreUI Vue One-Time Password Input, ensuring compliance with WAI-ARIA guidelines.

## Accessibility

The one-time password input component is designed with accessibility in mind and follows WCAG guidelines for form inputs.

- **ARIA Labels**: Each input field automatically receives descriptive `aria-label` attributes
- **Role Attribute**: The container has `role="group"` to indicate related form controls
- **Keyboard Navigation**: Full keyboard support with arrow keys, tab, and backspace
- **Screen Reader Support**: Clear announcements when values change or validation occurs
- **Focus Management**: Automatic focus handling for seamless navigation
- **Autofill**: only the first field advertises `autocomplete="one-time-code"`, so SMS autofill and password managers target a single field; a code delivered that way is spread across the slots automatically, exactly like a paste

### Customizing accessibility

You can customize the aria-label generation function to provide more specific descriptions:

```vue
<COneTimePassword
  :aria-label="(index, total) => `Enter digit ${index + 1} of your ${total}-digit verification code`"
>
  <COneTimePasswordInput />
  <COneTimePasswordInput />
  <COneTimePasswordInput />
  <COneTimePasswordInput />
</COneTimePassword>
```

### Keyboard support

The one-time password input component provides comprehensive keyboard navigation support:

| Key | Action |
| --- | --- |
| <kbd>Arrow Right</kbd> | Move focus to next input field |
| <kbd>Arrow Left</kbd> | Move focus to previous input field |
| <kbd>Backspace</kbd> | Delete current character and move to previous field (if empty) |
| <kbd>Tab</kbd> | Move to next focusable element (respects linear mode) |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move to previous focusable element |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste clipboard content and auto-fill fields |
