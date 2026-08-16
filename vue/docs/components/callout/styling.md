# Vue Callout Component Styling

> Learn how to customize the Vue Callout component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue callouts use local CSS variables on `.callout` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-callout-padding-x: #{$callout-padding-x};
--cui-callout-padding-y: #{$callout-padding-y};
--cui-callout-margin-x: #{$callout-margin-x};
--cui-callout-margin-y: #{$callout-margin-y};
--cui-callout-border-width: #{$callout-border-width};
--cui-callout-border-color: #{$callout-border-color};
--cui-callout-border-left-width: #{$callout-border-left-width};
--cui-callout-border-radius: #{$callout-border-radius};
```

#### How to use CSS variables

```vue
<template>
  <CCallout :style="vars">...</CCallout>
</template>

<script setup>
const vars = {
  '--cui-callout-border-color': '#333',
  '--cui-callout-padding-x': '1rem',
}
</script>
```

### SASS variables

```scss
$callout-padding-y:                 $spacer !default;
$callout-padding-x:                 $spacer !default;
$callout-margin-y:                  $spacer !default;
$callout-margin-x:                  0 !default;
$callout-border-radius:             var(--cui-border-radius) !default;
$callout-border-width:              var(--cui-border-width) !default;
$callout-border-color:              var(--cui-border-color) !default;
$callout-border-left-width:         calc(#{$callout-border-width} * 4) !default; // stylelint-disable-line function-disallowed-list

$callout-variants: (
  "primary":    $primary,
  "secondary":  $secondary,
  "success":    $success,
  "danger":     $danger,
  "warning":    $warning,
  "info":       $info,
  "light":      $light,
  "dark":       $dark
) !default;
```
