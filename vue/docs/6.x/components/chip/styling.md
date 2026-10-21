# Vue Chip Component Styling

> Learn how to customize the Vue Chip component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue chips use local CSS variables on `.chip` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$chip-tokens: defaults(
  (
    --cui-chip-height: 1.75rem,
    --cui-chip-padding-x: .625rem,
    --cui-chip-gap: .3125rem,
    --cui-chip-font-size: .875rem,
    --cui-chip-font-weight: var(--cui-font-weight-normal),
    --cui-chip-border-radius: var(--cui-radius-pill),
    --cui-chip-img-size: 1.25rem,
    --cui-chip-img-border-radius: 50%,
    --cui-chip-icon-size: 1rem,
    --cui-chip-remove-size: 1rem,
    --cui-chip-remove-opacity: .65,
    --cui-chip-remove-hover-opacity: 1,
    --cui-chip-disabled-opacity: .65,
    --cui-chip-active-opacity: .9,
    --cui-chip-transition: #{background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, color .15s ease-in-out},
    --cui-chip-color: var(--cui-fg-body),
    --cui-chip-bg: var(--cui-bg-2),
    --cui-chip-border-width: var(--cui-border-width),
    --cui-chip-border-color: transparent,
    --cui-chip-active-color: var(--cui-primary-contrast),
    --cui-chip-active-bg: var(--cui-primary-base),
    --cui-chip-active-border-color: transparent,
    --cui-chip-hover-color: var(--cui-fg-body),
    --cui-chip-hover-bg: var(--cui-bg-3),
    --cui-chip-hover-border-color: transparent,
  ),
  $chip-tokens
);
```

### How to use CSS variables

```vue
<template>
  <CChip :style="vars">...</CChip>
</template>

<script setup>
const vars = {
  '--cui-chip-color': '#333',
  '--cui-chip-bg': '#f8f9fa',
}
</script>
```

## Sass loops

_Deprecated in 6.0.0._

The loop that generates the deprecated color classes, pointing each one at the matching theme color. They ship in the opt-in `coreui-legacy.css`, so a build that leaves that stylesheet out drops them.

```scss
// The variant sets the theme tokens and lets the base .chip tokens read
// them, the way the alert and table variants do.
@each $state in map.keys($theme-colors) {
  .chip-#{$state} {
    @include theme-tokens($state);
  }
}
```
