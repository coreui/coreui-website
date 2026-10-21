# Vue Date Range Input Component Styling

> Learn how to customize the Vue Date Range Input component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

### CSS variables

The two ends are date inputs, so they carry the `form-date-time` tokens, and the frame around them carries the [form control group](https://coreui.io/vue/docs/forms/form-control-group/) ones. The range adds no tokens of its own.

```scss
// Redeclaring a --cui-control-* token here would shadow `.form-control`
// on the same element, and with it the validation states.
$form-date-time-tokens: () !default;
$form-date-time-tokens: defaults(
  (
    --cui-form-date-time-placeholder-color: var(--cui-fg-3),
    --cui-form-date-time-section-border-radius: .25rem,
    --cui-form-date-time-section-focus-bg: var(--cui-primary-bg-subtle),
  ),
  $form-date-time-tokens
);
```
