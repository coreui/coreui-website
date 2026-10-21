# Vue Password Strength Component Styling

> Learn how to customize the Vue Password Strength component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

Vue Password Strength supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$password-strength-tokens: () !default;
$password-strength-tokens: defaults(
  (
    --cui-password-strength-gap: .5rem,
    --cui-password-strength-meter-gap: .25rem,
    --cui-password-strength-segment-height: .25rem,
    --cui-password-strength-segment-bg: var(--cui-bg-2),
    --cui-password-strength-segment-border-radius: var(--cui-radius-pill),
    --cui-password-strength-font-size: var(--cui-font-size-sm),
    --cui-password-strength-text-font-weight: 600,
    --cui-password-strength-warning-color: var(--cui-fg-2),
    --cui-password-strength-suggestions-color: var(--cui-fg-3),
    --cui-password-strength-busy-opacity: .65,
    --cui-password-strength-color: var(--cui-fg-3),
  ),
  $password-strength-tokens
);
```

### Sass maps

Each level pairs a colour with the score it represents; add or override an entry to retint a level:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$password-strength-levels: defaults(
  (
    "0": var(--cui-danger-base),
    "1": var(--cui-danger-base),
    "2": var(--cui-warning-base),
    "3": var(--cui-info-base),
    "4": var(--cui-success-base),
  ),
  $password-strength-levels
);
```

### Sass loops

```scss
@each $level, $color in $password-strength-levels {
  &[data-coreui-strength="#{$level}"] {
    --cui-password-strength-color: #{$color};
  }
}
```
