# Vue Badge Component Styling

> Learn how to customize the Vue Badge component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue badges use local CSS variables on `.badge` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-badge-padding-x: #{$badge-padding-x};
--cui-badge-padding-y: #{$badge-padding-y};
@include rfs($badge-font-size, --cui-badge-font-size);
--cui-badge-font-weight: #{$badge-font-weight};
--cui-badge-color: #{$badge-color};
--cui-badge-border-radius: #{$badge-border-radius};
```

#### How to use CSS variables

```vue
<template>
  <CBadge :style="vars">...</CBadge>
</template>

<script setup>
const vars = {
  '--cui-badge-color': '#333',
  '--cui-badge-padding-x': '1rem',
}
</script>
```

### SASS variables

```scss
$badge-font-size:                   .75em !default;
$badge-font-weight:                 $font-weight-bold !default;
$badge-color:                       $white !default;
$badge-padding-y:                   .35em !default;
$badge-padding-x:                   .65em !default;
$badge-border-radius:               var(--cui-border-radius) !default;

$badge-font-size-sm:                .65em !default;
$badge-padding-y-sm:                .3em !default;
$badge-padding-x-sm:                .5em !default;
```
