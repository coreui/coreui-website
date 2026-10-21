# Vue Toast Component Styling

> Learn how to customize the Vue Toast component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue toasts use local CSS variables on `.toast` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$toast-tokens: defaults(
  (
    --cui-toast-zindex: var(--cui-z-toast),
    --cui-toast-padding-x: .75rem,
    --cui-toast-padding-y: .5rem,
    --cui-toast-spacing: #{$container-padding-x},
    --cui-toast-max-width: #{350px},
    --cui-toast-color: var(--cui-fg-body),
    --cui-toast-bg: #{$toast-background-color},
    --cui-toast-border-width: var(--cui-border-width),
    --cui-toast-border-color: #{$toast-border-color},
    --cui-toast-border-radius: var(--cui-radius-7),
    --cui-toast-box-shadow: var(--cui-box-shadow),
    --cui-toast-header-color: var(--cui-fg-3),
    --cui-toast-header-bg: #{$toast-background-color},
    --cui-toast-header-border-color: #{$toast-border-color},
    --cui-toast-font-size: .875rem,
    --cui-toast-slide: .5rem,
    --cui-toast-transition-property: #{"opacity, translate, display"},
    --cui-toast-transition-duration: #{.3s},
    --cui-toast-transition-timing: #{ease-out},
  ),
  $toast-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CToast :style="vars">...</CToast>
</template>

<script setup>
const vars = {
  '--cui-toast-color': '#333',
  '--cui-toast-bg': '#f8f9fa',
}
</script>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$toast-background-color:            var(--cui-bg-body) !default;
$toast-border-color:                var(--cui-border-color-translucent) !default;
```
