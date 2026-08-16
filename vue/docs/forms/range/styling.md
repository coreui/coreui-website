# Vue Range Component Styling

> Learn how to customize the Vue Range component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### SASS variables

```scss
$form-range-track-width:          100% !default;
$form-range-track-height:         .5rem !default;
$form-range-track-cursor:         pointer !default;
$form-range-track-bg:             var(--cui-secondary-bg) !default;
$form-range-track-border-radius:  1rem !default;
$form-range-track-box-shadow:     var(--cui-box-shadow-inset) !default;

$form-range-thumb-width:                   1rem !default;
$form-range-thumb-height:                  $form-range-thumb-width !default;
$form-range-thumb-bg:                      $component-active-bg !default;
$form-range-thumb-border:                  0 !default;
$form-range-thumb-border-radius:           1rem !default;
$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;
$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;
$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge
$form-range-thumb-active-bg:               tint-color($primary, 70%) !default;
$form-range-thumb-disabled-bg:             var(--cui-secondary-color) !default;
$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
```
