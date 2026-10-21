# Vue Dialog Component Styling

> Learn how to customize the Vue Dialog component with CSS variables and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue Dialog supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$dialog-tokens: defaults(
  (
    --cui-dialog-zindex: var(--cui-z-dialog),
    --cui-dialog-padding-y: var(--cui-spacer),
    --cui-dialog-padding-x: var(--cui-spacer),
    --cui-dialog-width: 500px,
    --cui-dialog-margin: 1.75rem,
    --cui-dialog-color: var(--cui-fg-body),
    --cui-dialog-bg: var(--cui-bg-body),
    --cui-dialog-border-color: var(--cui-border-color-translucent),
    --cui-dialog-border-width: var(--cui-border-width),
    --cui-dialog-border-radius: var(--cui-radius-7),
    --cui-dialog-box-shadow: var(--cui-box-shadow-lg),
    --cui-dialog-transition-property: #{"opacity, transform, visibility"},
    --cui-dialog-transition-duration: .3s,
    --cui-dialog-transition-timing: var(--cui-transition-timing-overlay),
    --cui-dialog-backdrop-bg: color-mix(in oklch, var(--cui-backdrop-color) var(--cui-backdrop-opacity), transparent),
    --cui-dialog-backdrop-blur: var(--cui-backdrop-blur),
    --cui-dialog-header-padding-y: var(--cui-spacer),
    --cui-dialog-header-padding-x: var(--cui-spacer),
    --cui-dialog-header-border-color: var(--cui-border-color-translucent),
    --cui-dialog-header-border-width: var(--cui-border-width),
    --cui-dialog-title-line-height: var(--cui-body-line-height),
    --cui-dialog-footer-padding-y: var(--cui-spacer),
    --cui-dialog-footer-padding-x: var(--cui-spacer),
    --cui-dialog-footer-border-color: var(--cui-border-color-translucent),
    --cui-dialog-footer-border-width: var(--cui-border-width),
    --cui-dialog-footer-gap: .5rem,
    --cui-dialog-slide-distance: 3rem,
    --cui-dialog-scale-transform: scale(1.02),
  ),
  $dialog-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CDialog :style="customVars" />
</template>

<script setup>
const customVars = {
  '--cui-dialog-bg': '#f8f9fa',
  '--cui-dialog-border-radius': '1rem',
}
</script>
```

The three optional sizes come from a map, so a size the map does not name is one entry rather than a new rule.

```scss
$dialog-sizes: () !default;
$dialog-sizes: defaults(
  (
    sm: 280px,
    lg: 800px,
    xl: 1140px,
  ),
  $dialog-sizes
);
```
