# Vue Footer Component Styling

> Learn how to customize the Vue Footer component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue footers use local CSS variables on `.footer` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-footer-min-height: #{$footer-min-height};
--cui-footer-padding-x: #{$footer-padding-x};
--cui-footer-padding-y: #{$footer-padding-y};
--cui-footer-color: #{$footer-color};
--cui-footer-bg: #{$footer-bg};
--cui-footer-border-color: #{$footer-border-color};
--cui-footer-border: #{$footer-border-width} solid var(--cui-footer-border-color);
```

#### How to use CSS variables

```vue
<template>
  <CFooter :style="vars">...</CFooter>
</template>

<script setup>
const vars = {
  '--cui-footer-color': '#333',
  '--cui-footer-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$footer-min-height:    3rem !default;
$footer-padding-y:     $spacer * .5 !default;
$footer-padding-x:     $spacer !default;
$footer-bg:            var(--cui-tertiary-bg) !default;
$footer-color:         var(--cui-body-color) !default;
$footer-border-width:  var(--cui-border-width) !default;
$footer-border-color:  var(--cui-border-color) !default;
```
