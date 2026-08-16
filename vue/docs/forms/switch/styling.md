# Vue Switch Component Styling

> Learn how to customize the Vue Switch component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### SASS variables

```scss
$form-switch-color:               rgba($black, .25) !default;
$form-switch-width:               2em !default;
$form-switch-padding-start:       $form-switch-width + .5em !default;
$form-switch-bg-image:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>") !default;
$form-switch-border-radius:       $form-switch-width !default;
$form-switch-transition:          background-position .15s ease-in-out !default;

$form-switch-focus-color:         $input-focus-border-color !default;
$form-switch-focus-bg-image:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>") !default;

$form-switch-checked-color:       $component-active-color !default;
$form-switch-checked-bg-image:    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>") !default;
$form-switch-checked-bg-position: right center !default;

$form-switch-widths: (
  lg: (
    width: 2.5em,
    height: 1.25em
  ),
  xl: (
    width: 3em,
    height: 1.5em
  )
) !default;
```
