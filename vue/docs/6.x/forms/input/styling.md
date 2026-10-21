# Vue Form input Component Styling

> Learn how to customize the Vue Form input component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

`.form-control` and `.form-select` declare the `--cui-control-*` tokens on themselves, and so does every field built on them: the [form control group](https://coreui.io/vue/docs/forms/form-control-group/styling/#css-variables) and every component that renders one — Autocomplete, Chip Input, Multi Select, the pickers, the password and number inputs — and the cells of the OTP input. Set a token on the field to restyle that field; a value set on an ancestor or on `:root` stops there. `class` and `style` on `<CFormInput>` land on the `<input>` itself. To restyle the frame of every field at once, change the [`--cui-btn-input-*` tokens](https://coreui.io/vue/docs/forms/overview/#css-variables) it points to; buttons share their sizes, so they move too. The placeholder, disabled background and file button colours point at the palette instead and are set per field. The `sm` and `lg` sizes, `.form-control-sm` and `.form-control-lg`, are themselves token overrides.

The checkbox, radio and switch are not fields: the few `--cui-control-*` tokens they share sit on `:root` and are listed with the [checkbox](https://coreui.io/vue/docs/forms/checkbox/styling/#shared-variables).

```scss
$form-control-tokens: () !default;
$form-control-tokens: defaults(
  (
    --cui-control-min-height: var(--cui-btn-input-min-height),
    --cui-control-padding-y: var(--cui-btn-input-padding-y),
    --cui-control-padding-x: var(--cui-btn-input-padding-x),
    --cui-control-font-size: var(--cui-btn-input-font-size),
    --cui-control-font-weight: var(--cui-btn-input-font-weight),
    --cui-control-line-height: var(--cui-btn-input-line-height),
    --cui-control-fg: var(--cui-btn-input-fg),
    --cui-control-bg: var(--cui-btn-input-bg),
    --cui-control-border-width: var(--cui-btn-input-border-width),
    --cui-control-border-color: var(--cui-btn-input-border-color),
    --cui-control-border-radius: var(--cui-btn-input-border-radius),
    --cui-control-box-shadow: var(--cui-btn-input-box-shadow),
    --cui-control-transition-property: var(--cui-btn-input-transition-property),
    --cui-control-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-control-placeholder-color: var(--cui-fg-3),
    --cui-control-focus-color: var(--cui-btn-input-focus-color),
    --cui-control-focus-bg: var(--cui-btn-input-focus-bg),
    --cui-control-focus-border-color: var(--cui-btn-input-focus-border-color),
    --cui-control-disabled-color: var(--cui-control-fg),
    --cui-control-disabled-bg: var(--cui-bg-2),
    --cui-control-disabled-border-color: var(--cui-control-border-color),
    --cui-control-action-color: var(--cui-btn-input-fg),
    --cui-control-action-bg: var(--cui-bg-1),
    --cui-control-action-hover-bg: var(--cui-bg-2),
    --cui-control-action-transition-property: var(--cui-btn-input-action-transition-property),
    --cui-control-action-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-action-transition-timing: var(--cui-btn-input-transition-timing),
  ),
  $form-control-tokens
);
```

Two tokens are declared by the class that uses them rather than on every control: `--cui-control-plaintext-color` on `.form-control-plaintext`, and `--cui-control-color-width` on `.form-control-color`.

`.form-label` and `.col-form-label` carry the `--cui-label-*` tokens. Set them on a single label to restyle just that one, or on an ancestor to cover a whole form. The size classes are themselves token overrides: `.col-form-label-lg` sets `--cui-label-padding-y` and `--cui-label-font-size`.

```scss
$form-label-tokens: defaults(
  (
    --cui-label-margin-bottom: .5rem,
    --cui-label-font-size: null,
    --cui-label-font-style: null,
    --cui-label-font-weight: var(--cui-font-weight-medium),
    --cui-label-color: var(--cui-fg-body),
  ),
  $form-label-tokens
);
```

`.form-text` carries the `--cui-form-text-*` tokens.

```scss
$form-text-tokens: defaults(
  (
    --cui-form-text-margin-top: .25rem,
    --cui-form-text-font-size: var(--cui-small-font-size),
    --cui-form-text-font-style: null,
    --cui-form-text-font-weight: null,
    --cui-form-text-color: var(--cui-fg-2),
  ),
  $form-text-tokens
);
```

### Sass maps

Each entry generates one `.form-control-{size}` and `.form-select-{size}` class, pointing the control at the matching `--cui-btn-input-{size}-*` values. Add a key to define a size, or set one to `null` to drop it:

```scss
$form-control-sizes: defaults(
  ("sm", "lg"),
  $form-control-sizes
);
```
