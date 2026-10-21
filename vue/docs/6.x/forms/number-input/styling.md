# Vue Number Input Component Styling

> Learn how to customize the Vue Number Input component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The frame, the buttons and their sizing are the group's, and read the shared `--cui-control-*` properties. Set them on the `.form-control-group` the component renders around the input: `class` on `<CNumberInput>` lands there, but `style` lands on the `<input>` and does not reach the frame:

```scss
$form-control-group-tokens: () !default;
$form-control-group-tokens: defaults(
  (
    --cui-control-group-gap: .5rem,
    --cui-control-group-icon-size: 1rem,
    --cui-control-group-icon-color: var(--cui-fg-3),
    --cui-control-group-text-color: var(--cui-fg-3),
    --cui-control-group-action-size: 1.5rem,
    --cui-control-group-action-color: var(--cui-fg-3),
    --cui-control-group-action-hover-color: var(--cui-fg-body),
    --cui-control-group-action-bg: transparent,
    --cui-control-group-action-hover-bg: var(--cui-bg-1),
    --cui-control-group-action-border-radius: var(--cui-btn-input-sm-border-radius),
    --cui-control-group-action-transition-property: #{var(--cui-btn-input-action-transition-property), transform},
    --cui-control-group-action-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-group-action-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-control-group-disabled-opacity: var(--cui-btn-input-disabled-opacity),
  ),
  $form-control-group-tokens
);
```

### Sass maps

The group takes its own icon and action sizes per size class, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$form-control-group-sizes: defaults(
  (
    "sm": (icon-size: .875rem, action-size: 1.25rem),
    "lg": (icon-size: 1.25rem, action-size: 1.75rem),
  ),
  $form-control-group-sizes
);
```
