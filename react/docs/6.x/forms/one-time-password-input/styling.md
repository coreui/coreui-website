# React One Time Password Input Component CSS Customization

> Learn how to customize the appearance of React One Time Password Input components using CSS classes and CSS variables.

### CSS Classes

The One Time Password Input components use the following CSS classes:

- `.form-otp` - Applied to the wrapper container
- `.form-otp-sm` - Small size variant
- `.form-otp-lg` - Large size variant
- `.form-otp-control` - Applied to individual input elements

### CSS variables

Each cell is an input, so it carries the shared `--cui-control-*` tokens on `.form-otp-control` itself. Override them on a single OTP input to restyle just that one; to restyle every text control at once, set the `--cui-btn-input-*` frame on `:root` instead.

```scss
$form-otp-control-tokens: () !default;
$form-otp-control-tokens: defaults(
  (
    --cui-control-padding-x: 0,
    --cui-form-otp-control-width: 2rem,
  ),
  $form-otp-control-tokens
);
```

```scss
$form-otp-tokens: () !default;
$form-otp-tokens: defaults(
  (
    --cui-form-otp-gap: .125rem,
  ),
  $form-otp-tokens
);
```

### Sass maps

Each size is one entry, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$form-otp-sizes: defaults(
  (
    "sm": (
      width:         1.5rem,
      padding-y:     var(--cui-btn-input-sm-padding-y),
      padding-x:     0,
      font-size:     var(--cui-btn-input-sm-font-size),
      border-radius: var(--cui-btn-input-sm-border-radius),
    ),
    "lg": (
      width:         2.5rem,
      padding-y:     var(--cui-btn-input-lg-padding-y),
      padding-x:     0,
      font-size:     var(--cui-btn-input-lg-font-size),
      border-radius: var(--cui-btn-input-lg-border-radius),
    ),
  ),
  $form-otp-sizes
);
```
