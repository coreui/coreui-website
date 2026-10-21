# Vue Checkbox Component Styling

> Learn how to customize the Vue Checkbox component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

Vue Checkbox reads its own custom properties, so restyling it does not touch radios or switches. Set them on the control itself — an ancestor cannot override a token the element declares for itself.

```scss
$check-tokens: defaults(
  (
    --cui-check-size: var(--cui-control-size),
    --cui-check-bg: var(--cui-btn-input-bg),
    --cui-check-border: var(--cui-border-width) solid var(--cui-border-color),
    --cui-check-border-radius: .25em,
    --cui-check-mark-color: var(--cui-primary-contrast),
    --cui-check-mark-checked: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>"))},
    --cui-check-mark-indeterminate: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>"))},
    --cui-check-checked-bg: var(--cui-control-checked-bg),
    --cui-check-checked-border-color: var(--cui-control-checked-border-color),
    --cui-check-indeterminate-bg: var(--cui-control-indeterminate-bg),
    --cui-check-indeterminate-border-color: var(--cui-control-indeterminate-border-color),
    --cui-check-disabled-opacity: var(--cui-control-disabled-opacity),
    --cui-check-margin-top: calc((var(--cui-body-line-height) * 1em - var(--cui-check-size)) * .5),
    --cui-check-active-filter: var(--cui-control-active-filter),
    --cui-check-label-disabled-opacity: var(--cui-control-label-disabled-opacity),
  ),
  $check-tokens
);
```

#### How to use CSS variables

```vue
<CCheckbox :style="{ '--cui-check-size': '1.25em', '--cui-check-checked-bg': '#198754' }" />
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

Each entry is one size class, and the same map drives both `.check-{size}` and `.radio-{size}` — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$check-sizes: defaults(
  (
    sm: (size: .875rem, margin-top: .21875rem, font-size: var(--cui-font-size-sm)),
    lg: (size: 1.25rem, margin-top: .3125rem, font-size: var(--cui-font-size-lg))
  ),
  $check-sizes
);
```
