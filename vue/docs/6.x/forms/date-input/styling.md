# Vue Date Input Component Styling

> Learn how to customize the Vue Date Input component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

The date, time, and date-time inputs share one set of styles under the `form-date-time` name. The field is a [`.form-control`](https://coreui.io/vue/docs/forms/input/styling/#css-variables), so its frame comes from the `--cui-control-*` tokens; the ones below style the sections inside it. Both sets sit on the field, where `class` and `style` on `<CDateInput>` land, and can be set on a single element.

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
