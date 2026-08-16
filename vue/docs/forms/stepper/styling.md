# Vue Stepper Component Styling

> Learn how to customize the Vue Stepper component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue Stepper supports CSS variables for easy customization. These variables are set via SASS but allow direct overrides in your stylesheets or inline styles.

```scss
--cui-stepper-steps-gap: #{$stepper-steps-gap};
--cui-stepper-step-gap: #{$stepper-step-gap};
--cui-stepper-step-button-width: #{$stepper-step-button-width};
--cui-stepper-step-button-color: #{$stepper-step-button-color};
--cui-stepper-step-button-active-color: #{$stepper-step-button-active-color};
--cui-stepper-step-button-complete-color: #{$stepper-step-button-complete-color};
--cui-stepper-step-button-disabled-color: #{$stepper-step-button-disabled-color};
--cui-stepper-step-indicator-width: #{$stepper-step-indicator-width};
--cui-stepper-step-indicator-height: #{$stepper-step-indicator-height};
--cui-stepper-step-indicator-bg: #{$stepper-step-indicator-bg};
--cui-stepper-step-indicator-color: #{$stepper-step-indicator-color};
--cui-stepper-step-indicator-border-width: #{$stepper-step-indicator-border-width};
--cui-stepper-step-indicator-border-color: #{$stepper-step-indicator-border-color};
--cui-stepper-step-indicator-transition: #{$stepper-step-indicator-transition};
--cui-stepper-step-indicator-active-color: #{$stepper-step-indicator-active-color};
--cui-stepper-step-indicator-active-bg: #{$stepper-step-indicator-active-bg};
--cui-stepper-step-indicator-active-border-color: #{$stepper-step-indicator-active-border-color};
--cui-stepper-step-indicator-complete-color: #{$stepper-step-indicator-complete-color};
--cui-stepper-step-indicator-complete-bg: #{$stepper-step-indicator-complete-bg};
--cui-stepper-step-indicator-complete-border-color: #{$stepper-step-indicator-complete-border-color};
--cui-stepper-step-indicator-disabled-color: #{$stepper-step-indicator-disabled-color};
--cui-stepper-step-indicator-disabled-bg: #{$stepper-step-indicator-disabled-bg};
--cui-stepper-step-indicator-disabled-border-color: #{$stepper-step-indicator-disabled-border-color};
--cui-stepper-step-indicator-focus-box-shadow: #{$stepper-step-indicator-focus-box-shadow};
--cui-stepper-step-indicator-icon: #{$stepper-step-indicator-icon};
--cui-stepper-step-indicator-icon-color: #{$stepper-step-indicator-icon-color};
--cui-stepper-step-indicator-icon-size: #{$stepper-step-indicator-icon-size};
--cui-stepper-step-connector-height: #{$stepper-step-connector-height};
--cui-stepper-step-connector-gap: #{$stepper-step-connector-gap};
--cui-stepper-step-connector-bg: #{$stepper-step-connector-bg};
--cui-stepper-step-connector-complete-bg: #{$stepper-step-connector-complete-bg};
--cui-stepper-step-connector-transition: #{$stepper-step-connector-transition};
--cui-stepper-step-content-transition: #{$stepper-step-content-transition};
```

#### How to use CSS variables

```vue
<template>
  <CStepper :style="vars">...</CStepper>
</template>

<script setup>
const vars = {
  '--cui-stepper-step-button-color': '#333',
  '--cui-stepper-step-indicator-bg': '#f8f9fa',
}
</script>
```

### SASS variables

`$input-*` are shared across most of our form controls (and not buttons).

```scss
$stepper-steps-gap:                             .5rem !default;
$stepper-step-gap:                              .5rem !default;
$stepper-step-button-width:                     8rem !default;
$stepper-step-button-color:                     var(--cui-secondary-color) !default;
$stepper-step-button-active-color:              var(--cui-secondary-color) !default;
$stepper-step-button-complete-color:            var(--cui-secondary-color) !default;
$stepper-step-button-disabled-color:            var(--cui-secondary-color) !default;
$stepper-step-indicator-width:                  2rem !default;
$stepper-step-indicator-height:                 2rem !default;
$stepper-step-indicator-color:                  var(--cui-secondary) !default;
$stepper-step-indicator-bg:                     transparent !default;
$stepper-step-indicator-border-width:           var(--cui-border-width) !default;
$stepper-step-indicator-border-color:           var(--cui-border-color) !default;
$stepper-step-indicator-transition:             color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;
$stepper-step-indicator-active-color:           var(--cui-primary) !default;
$stepper-step-indicator-active-bg:              rgba(var(--cui-primary-rgb), .05) !default;
$stepper-step-indicator-active-border-color:    var(--cui-primary) !default;
$stepper-step-indicator-complete-color:         var(--cui-white) !default;
$stepper-step-indicator-complete-bg:            var(--cui-primary) !default;
$stepper-step-indicator-complete-border-color:  var(--cui-primary) !default;
$stepper-step-indicator-disabled-color:         var(--cui-secondary) !default;
$stepper-step-indicator-disabled-bg:            transparent !default;
$stepper-step-indicator-disabled-border-color:  var(--cui-border-color) !default;
$stepper-step-indicator-focus-box-shadow:       $focus-ring-box-shadow !default;
$stepper-step-indicator-icon:                   url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpolygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/%3E%3C/svg%3E") !default;
$stepper-step-indicator-icon-color:             var(--cui-white) !default;
$stepper-step-indicator-icon-size:              1rem !default;

$stepper-step-connector-height:                 .125rem !default;
$stepper-step-connector-gap:                    1rem !default;
$stepper-step-connector-bg:                     var(--cui-secondary-bg) !default;
$stepper-step-connector-complete-bg:            var(--cui-primary) !default;
$stepper-step-connector-transition:             background-color .15s ease-in-out !default;

$stepper-step-content-transition:               height .3s ease-in-out !default;
```
