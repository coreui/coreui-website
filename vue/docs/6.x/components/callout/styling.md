# Vue Callout Component Styling

> Learn how to customize the Vue Callout component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue callouts use local CSS variables on `.callout` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$callout-tokens: defaults(
  (
    --cui-callout-padding-x: var(--cui-spacer),
    --cui-callout-padding-y: var(--cui-spacer),
    --cui-callout-margin-x: 0,
    --cui-callout-margin-y: var(--cui-spacer),
    --cui-callout-border-width: var(--cui-border-width),
    --cui-callout-border-color: var(--cui-border-color),
    --cui-callout-border-left-width: calc(var(--cui-border-width) * 4),
    --cui-callout-border-left-color: var(--cui-callout-border-color),
    --cui-callout-border-radius: var(--cui-radius-5),
  ),
  $callout-tokens
);
```

### How to use CSS variables

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

## Sass loops

_Deprecated in 6.0.0._

The loop that creates the deprecated `.callout-{color}` classes, pointing each one at the matching theme color. They ship in the opt-in `coreui-legacy.css`, so a build that leaves that stylesheet out drops them.

```scss
@each $state in map.keys($theme-colors) {
  .callout-#{$state} {
    @include theme-tokens($state);
  }
}
```
