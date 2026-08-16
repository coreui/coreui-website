# Vue Alert Component Styling

> Learn how to customize the Vue Alert component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue alerts use local CSS variables on `.alert` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-alert-bg: transparent;
--cui-alert-padding-x: #{$alert-padding-x};
--cui-alert-padding-y: #{$alert-padding-y};
--cui-alert-margin-bottom: #{$alert-margin-bottom};
--cui-alert-color: inherit;
--cui-alert-border-color: transparent;
--cui-alert-border: #{$alert-border-width} solid var(--cui-alert-border-color);
--cui-alert-border-radius: #{$alert-border-radius};
--cui-alert-link-color: inherit;
```

#### How to use CSS variables

```vue
<template>
  <CAlert :style="vars">...</CAlert>
</template>

<script setup>
const vars = {
  '--cui-alert-color': '#333',
  '--cui-alert-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$alert-padding-y:               $spacer !default;
$alert-padding-x:               $spacer !default;
$alert-margin-bottom:           1rem !default;
$alert-border-radius:           var(--cui-border-radius) !default;
$alert-link-font-weight:        $font-weight-bold !default;
$alert-border-width:            var(--cui-border-width) !default;
$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side
```
