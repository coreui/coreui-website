# Vue Checkbox Component Styling

> Learn how to customize the Vue Checkbox component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### SASS variables

```scss
$form-check-input-width:                  1em !default;
$form-check-min-height:                   $font-size-base * $line-height-base !default;
$form-check-padding-start:                $form-check-input-width + .5em !default;
$form-check-margin-bottom:                .125rem !default;
$form-check-label-color:                  null !default;
$form-check-label-cursor:                 null !default;
$form-check-transition:                   null !default;

$form-check-input-active-filter:          brightness(90%) !default;

$form-check-input-bg:                     $input-bg !default;
$form-check-input-border:                 var(--cui-border-width) solid var(--cui-border-color) !default;
$form-check-input-border-radius:          .25em !default;
$form-check-radio-border-radius:          50% !default;
$form-check-input-focus-border:           $input-focus-border-color !default;
$form-check-input-focus-box-shadow:       $focus-ring-box-shadow !default;

$form-check-input-checked-color:          $component-active-color !default;
$form-check-input-checked-bg-color:       $component-active-bg !default;
$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;
$form-check-input-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/></svg>") !default;
$form-check-radio-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>") !default;

$form-check-input-indeterminate-color:          $component-active-color !default;
$form-check-input-indeterminate-bg-color:       $component-active-bg !default;
$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;
$form-check-input-indeterminate-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>") !default;

$form-check-input-disabled-opacity:        .5 !default;
$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;
$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;

$form-check-inline-margin-end:    1rem !default;
```
