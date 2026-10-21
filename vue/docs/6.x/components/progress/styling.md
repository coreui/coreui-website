# Vue Progress Component Styling

> Learn how to customize the Vue Progress component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue cards use local CSS variables on `.card` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$progress-tokens: defaults(
  (
    --cui-progress-height: 1rem,
    --cui-progress-font-size: var(--cui-font-size-sm),
    --cui-progress-bg: var(--cui-bg-2),
    --cui-progress-border-radius: var(--cui-radius-5),
    --cui-progress-box-shadow: var(--cui-box-shadow-inset),
    --cui-progress-bar-color: var(--cui-primary-contrast),
    --cui-progress-bar-bg: var(--cui-primary-bg),
    --cui-progress-bar-bg-image: none,
    --cui-progress-bar-stripes: linear-gradient(45deg, var(--cui-progress-bar-stripe-color) 25%, transparent 25%, transparent 50%, var(--cui-progress-bar-stripe-color) 50%, var(--cui-progress-bar-stripe-color) 75%, transparent 75%, transparent),
    --cui-progress-bar-stripe-color: color-mix(in oklch, var(--cui-white) 15%, transparent),
    --cui-progress-bar-transition: width .6s ease,
    --cui-progress-bar-animation: progress-bar-stripes 1s linear infinite,
  ),
  $progress-tokens
);
```

`segmented` adds the segment geometry:

```scss
$progress-segmented-tokens: defaults(
  (
    --cui-progress-segment-gap: .25rem,
    --cui-progress-segment-min-width: .25rem,
    --cui-progress-segment-border-radius: var(--cui-radius-2),
  ),
  $progress-segmented-tokens
);

// Unset by default: the plugin then packs as many segments as fit above the minimum width
@if $progress-segments != null {
  $progress-segmented-tokens: map.set($progress-segmented-tokens, --cui-progress-segments, $progress-segments);
}
```

### How to use CSS variables

```vue
<template>
  <CProgress :style="vars">...</CProgress>
</template>

<script setup>
const vars = {
  '--cui-progress-bar-color': '#333',
  '--cui-progress-bg': '#f8f9fa',
}
</script>
```

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$progress-segments:                    null !default;

$progress-contrast-track-opacity:      20% !default;
```
