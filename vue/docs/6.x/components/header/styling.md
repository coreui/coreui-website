# Vue Header Component Styling

> Learn how to customize the Vue Header component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$header-tokens: defaults(
  (
    --cui-header-padding-x: var(--cui-spacer-3),
    --cui-header-padding-y: var(--cui-spacer-3),
    --cui-header-bg: var(--cui-bg-body),
    --cui-header-color: color-mix(in oklch, var(--cui-emphasis-color) 65%, transparent),
    --cui-header-border-color: var(--cui-border-color),
    --cui-header-border: var(--cui-border-width) solid var(--cui-header-border-color),
    --cui-header-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 80%, transparent),
    --cui-header-disabled-color: color-mix(in oklch, var(--cui-emphasis-color) 30%, transparent),
    --cui-header-active-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-header-transition: box-shadow .15s ease-in-out,
    --cui-header-brand-padding-y: calc((#{$nav-link-height} - calc(#{$header-brand-font-size} * var(--cui-body-line-height))) * .5),
    --cui-header-brand-color: var(--cui-fg-body),
    --cui-header-brand-hover-color: var(--cui-fg-1),
    --cui-header-brand-margin-end: 1rem,
    --cui-header-toggler-font-size: var(--cui-font-size-lg),
    --cui-header-toggler-padding-x: .75rem,
    --cui-header-toggler-padding-y: .25rem,
    --cui-header-toggler-bg: transparent,
    --cui-header-toggler-color: color-mix(in oklch, var(--cui-emphasis-color) 65%, transparent),
    --cui-header-toggler-border-radius: var(--cui-radius-4),
    --cui-header-toggler-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-header-toggler-icon-bg: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>"))},
    --cui-header-nav-link-padding-x: .5rem,
    --cui-header-nav-link-padding-y: .5rem,
    --cui-header-divider-border-color: var(--cui-border-color),
    --cui-header-divider-border: var(--cui-border-width) solid var(--cui-header-divider-border-color),
  ),
  $header-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CHeader :style="vars">...</CHeader>
</template>

<script setup>
const vars = {
  '--cui-header-color': '#333',
  '--cui-header-bg': '#f8f9fa',
}
</script>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$header-brand-font-size:        var(--cui-font-size-lg) !default;

// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link
```
