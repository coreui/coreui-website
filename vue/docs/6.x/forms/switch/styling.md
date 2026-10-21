# Vue Switch Component Styling

> Learn how to customize the Vue Switch component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

Vue Switch reads its own custom properties, so restyling it does not touch checkboxes or radios. Set them on the control itself — an ancestor cannot override a token the element declares for itself.

```scss
$switch-tokens: defaults(
  (
    --cui-switch-width: calc(var(--cui-switch-height) * 1.75),
    --cui-switch-height: 1.25rem,
    --cui-switch-border-radius: var(--cui-radius-pill),
    --cui-switch-transition-duration: var(--cui-control-transition-duration),
    --cui-switch-transition-timing: var(--cui-control-transition-timing),
    --cui-switch-bg: var(--cui-bg-3),
    --cui-switch-box-shadow: inset 0 1px 2px color-mix(in oklch, var(--cui-black) 5%, transparent),
    --cui-switch-border-width: var(--cui-border-width),
    --cui-switch-border-color: var(--cui-border-color),
    --cui-switch-padding: .0625rem,
    --cui-switch-thumb-bg: var(--cui-white),
    --cui-switch-thumb-size: calc(var(--cui-switch-height) - var(--cui-switch-padding) * 2 - var(--cui-switch-border-width) * 2),
    --cui-switch-thumb-shadow: 0 1px 2px color-mix(in oklch, var(--cui-black) 10%, transparent),
    --cui-switch-checked-bg: var(--cui-control-checked-bg),
    --cui-switch-checked-border-color: var(--cui-control-checked-border-color),
    --cui-switch-checked-thumb-bg: var(--cui-primary-contrast),
    --cui-switch-disabled-bg: var(--cui-control-disabled-bg),
    --cui-switch-disabled-thumb-bg: var(--cui-fg-3),
    --cui-switch-disabled-opacity: var(--cui-control-disabled-opacity),
    --cui-switch-margin-top: calc((var(--cui-body-line-height) * 1em - var(--cui-switch-height)) * .5),
    --cui-switch-active-filter: var(--cui-control-active-filter),
    --cui-switch-label-disabled-opacity: var(--cui-control-label-disabled-opacity),
  ),
  $switch-tokens
);
```

#### How to use CSS variables

```vue
<CSwitch :style="{ '--cui-switch-width': '2.5em', '--cui-switch-checked-bg': '#198754' }" />
```

### Shared variables

The checkbox, the radio and the switch share their size and their focus, active and disabled states. Those live on `:root` as `--cui-control-*`, so one declaration retunes all three at runtime:

```scss
--cui-control-size: 1em,
--cui-control-checked-bg: var(--cui-primary-base),
--cui-control-checked-border-color: var(--cui-primary-base),
--cui-control-indeterminate-bg: var(--cui-primary-base),
--cui-control-indeterminate-border-color: var(--cui-primary-base),
--cui-control-active-filter: brightness(90%),
--cui-control-focus-border-color: var(--cui-btn-input-focus-border-color),
--cui-control-disabled-bg: var(--cui-bg-3),
--cui-control-disabled-opacity: .5,
--cui-control-label-disabled-opacity: .5,
--cui-control-transition-duration: .15s,
--cui-control-transition-timing: cubic-bezier(.34, 1.56, .64, 1),
```

### Sass maps

Each entry is one `.switch-{size}` class with its own height and font size, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$switch-sizes: defaults(
  (
    sm: (height: 1rem,    font-size: var(--cui-font-size-sm)),
    lg: (height: 1.5rem,  font-size: var(--cui-font-size-lg)),
    xl: (height: 1.75rem, font-size: var(--cui-font-size-lg))
  ),
  $switch-sizes
);
```

The second map lists which of those sizes also answer to the deprecated `.form-switch-{size}` spelling. It holds names only — the heights come from the map above — so a size you add is reachable under the current spelling without appearing here:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$form-switch-sizes: defaults(
  ("lg", "xl"),
  $form-switch-sizes
);
```
