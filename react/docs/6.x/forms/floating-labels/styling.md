# React Floating Labels Component Styling

> Learn how to customize the React Floating Labels component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

### CSS variables

`.form-floating` carries the tokens, so a single field can be retuned without recompiling. Anything nested inside it follows them, including the date and time inputs, which drive their own float on `:focus-within` instead of `:placeholder-shown`.

```scss
$form-floating-tokens: () !default;
$form-floating-tokens: defaults(
  (
    --cui-form-floating-height: calc(3.5rem + var(--cui-btn-input-border-width) * 2),
    --cui-form-floating-line-height: 1.25,
    --cui-form-floating-padding-x: var(--cui-btn-input-padding-x),
    --cui-form-floating-padding-y: 1rem,
    --cui-form-floating-input-padding-t: 1.625rem,
    --cui-form-floating-input-padding-b: .625rem,
    --cui-form-floating-label-height: 1.5em,
    --cui-form-floating-label-opacity: .65,
    --cui-form-floating-label-transform: scale(.85) translateY(-.5rem) translateX(.15rem),
    --cui-form-floating-label-disabled-color: var(--cui-fg-3),
    // The label is a sibling of the control, so it cannot inherit its background.
    --cui-form-floating-label-bg: var(--cui-btn-input-bg),
    --cui-form-floating-label-disabled-bg: var(--cui-bg-2),
    --cui-form-floating-label-border-radius: var(--cui-btn-input-border-radius),
    --cui-form-floating-transition-property: #{"opacity, transform"},
    --cui-form-floating-transition-duration: .1s,
    --cui-form-floating-transition-timing: ease-in-out,
  ),
  $form-floating-tokens
);
```
