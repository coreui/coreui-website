# Vue Drawer Component Styling

> Learn how to customize the Vue Drawer component with CSS variables and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue Drawer supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$drawer-tokens: defaults(
  (
    --cui-drawer-inset: var(--cui-spacer),
    --cui-drawer-zindex: var(--cui-z-drawer),
    --cui-drawer-width: 400px,
    --cui-drawer-height: 30vh,
    --cui-drawer-sheet-width: 760px,
    --cui-drawer-padding-x: var(--cui-spacer),
    --cui-drawer-padding-y: var(--cui-spacer),
    --cui-drawer-color: var(--cui-fg-body),
    --cui-drawer-bg: var(--cui-bg-body),
    --cui-drawer-border-width: var(--cui-border-width),
    --cui-drawer-border-color: var(--cui-border-color-translucent),
    --cui-drawer-border-radius: var(--cui-radius-7),
    --cui-drawer-box-shadow: var(--cui-box-shadow-lg),
    --cui-drawer-transition-property: #{"transform, visibility"},
    --cui-drawer-transition-duration: .3s,
    --cui-drawer-transition-timing: var(--cui-transition-timing-overlay),
    --cui-drawer-title-line-height: var(--cui-body-line-height),
    --cui-drawer-body-gap: var(--cui-drawer-padding-y),
    --cui-drawer-footer-gap: .5rem,
    --cui-backdrop-color: var(--cui-bg-body),
    --cui-backdrop-opacity: 25%,
    --cui-drawer-backdrop-bg: color-mix(in oklch, var(--cui-backdrop-color) var(--cui-backdrop-opacity), transparent),
    --cui-drawer-backdrop-blur: var(--cui-backdrop-blur),
    --cui-drawer-scale-transform: scale(1.02),
  ),
  $drawer-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CDrawer placement="end" :style="customVars" />
</template>

<script setup>
const customVars = {
  '--cui-drawer-width': '28rem',
  '--cui-drawer-inset': '1rem',
}
</script>
```
