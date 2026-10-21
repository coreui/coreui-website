# Vue Tooltip Component Styling

> Learn how to customize the Vue Tooltip component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue toltips use local CSS variables on `.tooltip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$tooltip-tokens: defaults(
  (
    --cui-tooltip-zindex: var(--cui-z-tooltip),
    --cui-tooltip-max-width: 200px,
    --cui-tooltip-padding-x: calc(var(--cui-spacer) * .75),
    --cui-tooltip-padding-y: calc(var(--cui-spacer) * .375),
    --cui-tooltip-font-size: var(--cui-font-size-sm),
    --cui-tooltip-color: #{$tooltip-color},
    --cui-tooltip-bg: var(--cui-fg-body),
    --cui-tooltip-border-radius: var(--cui-radius-5),
    --cui-tooltip-opacity: .95,
    --cui-tooltip-arrow-width: .8rem,
    --cui-tooltip-arrow-height: .4rem,
    --cui-tooltip-transition-property: opacity,
    --cui-tooltip-transition-duration: .15s,
    --cui-tooltip-transition-timing: linear,
  ),
  $tooltip-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CTooltip :style="vars">...</CTooltip>
</template>

<script setup>
const vars = {
  '--cui-tooltip-color': '#333',
  '--cui-tooltip-bg': '#f8f9fa',
}
</script>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$tooltip-color:                     var(--cui-bg-body) !default;
```
