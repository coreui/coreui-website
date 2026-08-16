# Vue Chip Input Component Styling

> Learn how to customize the Vue Chip Input component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue Chips inputs use local CSS variables on `.chip-input` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-chip-input-min-height: #{$chip-input-min-height};
--cui-chip-input-padding-y: #{$chip-input-padding-y};
--cui-chip-input-padding-x: #{$chip-input-padding-x};
--cui-chip-input-font-size: #{$chip-input-font-size};
--cui-chip-input-bg: #{$chip-input-bg};
--cui-chip-input-color: #{$chip-input-color};
--cui-chip-input-border-width: #{$chip-input-border-width};
--cui-chip-input-border-color: #{$chip-input-border-color};
--cui-chip-input-border-radius: #{$chip-input-border-radius};
--cui-chip-input-gap: #{$chip-input-gap};
--cui-chip-input-transition: #{$chip-input-transition};
```

#### How to use CSS variables

```vue
<template>
  <CChipInput :style="vars">...</CChipInput>
</template>

<script setup>
const vars = {
  '--cui-chip-input-color': '#333',
  '--cui-chip-input-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$chip-input-min-height:        $input-height !default;
$chip-input-padding-y:         .25rem !default;
$chip-input-padding-x:         .75rem !default;
$chip-input-font-size:         $input-font-size !default;
$chip-input-bg:                var(--cui-body-bg) !default;
$chip-input-color:             var(--cui-body-color) !default;
$chip-input-border-width:      var(--cui-border-width) !default;
$chip-input-border-color:      var(--cui-border-color) !default;
$chip-input-border-radius:     var(--cui-border-radius) !default;
$chip-input-gap:               .375rem !default;
$chip-input-transition:        $input-transition !default;

$chip-input-min-height-sm:     $input-height-sm !default;
$chip-input-padding-y-sm:      .125rem !default;
$chip-input-padding-x-sm:      .5rem !default;
$chip-input-font-size-sm:      $input-font-size-sm !default;
$chip-input-border-radius-sm:  var(--cui-border-radius-sm) !default;
$chip-input-gap-sm:            .125rem !default;

$chip-input-min-height-lg:     $input-height-lg !default;
$chip-input-padding-y-lg:      .375rem !default;
$chip-input-padding-x-lg:      1rem !default;
$chip-input-font-size-lg:      $input-font-size-lg !default;
$chip-input-border-radius-lg:  var(--cui-border-radius-lg) !default;
$chip-input-gap-lg:            .5rem !default;
```
