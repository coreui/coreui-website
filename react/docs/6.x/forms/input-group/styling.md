# React Input Group Component Styling

> Learn how to customize the React Input Group component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The addon declares its own tokens on `.input-group-text`, so a single addon can be repainted or resized without a modifier class. The first six are the [`--cui-control-*`](https://coreui.io/react/docs/forms/input/styling/#css-variables) frame tokens, copied onto the addon so it lines up with the control next to it; `.input-group-{size}` re-points all of them but the border width, on the addon and on the `.form-control` or `.form-select` next to it. `.input-group` itself declares none — it is a layout wrapper, and a token set on it reaches neither the addon nor the control, because each declares its own.

```scss
$input-group-tokens: () !default;
$input-group-tokens: defaults(
  (
    --cui-control-padding-y: var(--cui-btn-input-padding-y),
    --cui-control-padding-x: var(--cui-btn-input-padding-x),
    --cui-control-font-size: var(--cui-btn-input-font-size),
    --cui-control-line-height: var(--cui-btn-input-line-height),
    --cui-control-border-width: var(--cui-btn-input-border-width),
    --cui-control-border-radius: var(--cui-btn-input-border-radius),
    --cui-input-group-addon-font-weight: var(--cui-btn-input-font-weight),
    --cui-input-group-addon-color: var(--cui-btn-input-fg),
    --cui-input-group-addon-bg: var(--cui-bg-2),
    --cui-input-group-addon-border-color: var(--cui-btn-input-border-color),
  ),
  $input-group-tokens
);
```

```jsx
<CInputGroupText style={{ '--cui-input-group-addon-bg': 'var(--cui-bg-1)' }}>@</CInputGroupText>
```

### Sass maps

Each entry is one `.input-group-{size}` class, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$input-group-sizes: defaults(
  ("sm", "lg"),
  $input-group-sizes
);
```
