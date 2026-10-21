# Vue Radio Component Styling

> Learn how to customize the Vue Radio component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

Vue Radio reads its own custom properties, so restyling it does not touch checkboxes or switches. Set them on the control itself — an ancestor cannot override a token the element declares for itself.

```scss
$radio-tokens: defaults(
  (
    --cui-radio-size: var(--cui-control-size),
    --cui-radio-bg: var(--cui-btn-input-bg),
    --cui-radio-border: var(--cui-border-width) solid var(--cui-border-color),
    --cui-radio-border-radius: 50%,
    --cui-radio-checked-bg: var(--cui-control-checked-bg),
    --cui-radio-checked-border-color: var(--cui-control-checked-border-color),
    --cui-radio-mark-color: var(--cui-primary-contrast),
    --cui-radio-mark: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='black'/></svg>"))},
    --cui-radio-disabled-opacity: var(--cui-control-disabled-opacity),
    --cui-radio-margin-top: calc((var(--cui-body-line-height) * 1em - var(--cui-radio-size)) * .5),
    --cui-radio-active-filter: var(--cui-control-active-filter),
    --cui-radio-label-disabled-opacity: var(--cui-control-label-disabled-opacity),
  ),
  $radio-tokens
);
```

#### How to use CSS variables

```vue
<CRadio :style="{ '--cui-radio-size': '1.25em', '--cui-radio-checked-bg': '#198754' }" />
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
