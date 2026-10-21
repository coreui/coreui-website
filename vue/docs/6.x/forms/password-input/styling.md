# Vue Password Input Component Styling

> Learn how to customize the Vue Password Input component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The frame — padding, colours, border and the size of the toggle button, including the icon inside it — is the group's, and it reads the shared `--cui-control-*` properties. Set them on the `.form-control-group` the component renders around the input to restyle one field: `class` on `<CPasswordInput>` lands there, but `style` lands on the `<input>` and does not reach the frame. The group declares them itself, so a value on `:root` stops there — to restyle every field at once, change the shared [`--cui-btn-input-*` frame](https://coreui.io/vue/docs/forms/overview/#css-variables). The focus ring is the library's own, coloured by `--cui-focus-ring-color` or the theme:

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
