# Vue Close Button Component Styling

> Learn how to customize the Vue Close Button component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

Vue Close Button supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$close-tokens: defaults(
  (
    --cui-btn-close-icon-size: 1em,
    --cui-btn-close-padding-y: .25em,
    --cui-btn-close-padding-x: .25em,
    --cui-btn-close-color: inherit,
    --cui-btn-close-icon: #{ escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='black'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/></svg>")) },
    --cui-btn-close-opacity: .5,
    --cui-btn-close-hover-opacity: .75,
    --cui-btn-close-focus-opacity: 1,
    --cui-btn-close-disabled-opacity: .25,
  ),
  $close-tokens
);
```

Point `--cui-btn-close-icon` at any SVG to replace the glyph. The mask uses its shape only, so whatever color the file carries is ignored.

### How to use CSS variables

```vue
<template>
  <CCloseButton :style="vars" />
</template>

<script setup>
const vars = {
  '--cui-btn-close-color': '#333',
  '--cui-btn-close-opacity': '.75',
}
</script>
```
