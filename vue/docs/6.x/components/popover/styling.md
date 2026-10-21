# Vue Popover Component Styling

> Learn how to customize the Vue Popover component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue popovers use local CSS variables on `.popover` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$popover-tokens: defaults(
  (
    --cui-popover-zindex: var(--cui-z-popover),
    --cui-popover-max-width: 276px,
    --cui-popover-font-size: var(--cui-font-size-sm),
    --cui-popover-bg: var(--cui-bg-body),
    --cui-popover-border-width: var(--cui-border-width),
    --cui-popover-border-color: var(--cui-border-color-translucent),
    --cui-popover-border-radius: var(--cui-radius-7),
    --cui-popover-inner-border-radius: calc(var(--cui-popover-border-radius) - var(--cui-popover-border-width)),
    --cui-popover-box-shadow: var(--cui-box-shadow),
    --cui-popover-header-padding-x: var(--cui-spacer),
    --cui-popover-header-padding-y: .5rem,
    --cui-popover-header-font-size: var(--cui-body-font-size),
    --cui-popover-header-color: var(--cui-heading-color),
    --cui-popover-header-bg: var(--cui-bg-1),
    --cui-popover-body-padding-x: var(--cui-spacer),
    --cui-popover-body-padding-y: var(--cui-spacer),
    --cui-popover-body-color: var(--cui-fg-body),
    --cui-popover-arrow-width: 1rem,
    --cui-popover-arrow-height: .5rem,
    --cui-popover-arrow-border: var(--cui-popover-border-color),
    --cui-popover-transition-property: opacity,
    --cui-popover-transition-duration: .15s,
    --cui-popover-transition-timing: linear,
  ),
  $popover-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CPopover :style="vars">...</CPopover>
</template>

<script setup>
const vars = {
  '--cui-popover-border-color': '#333',
  '--cui-popover-bg': '#f8f9fa',
}
</script>
```
