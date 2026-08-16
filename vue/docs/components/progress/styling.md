# Vue Progress Component Styling

> Learn how to customize the Vue Progress component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue cards use local CSS variables on `.card` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-progress-height: #{$progress-height};
@include rfs($progress-font-size, --cui-progress-font-size);
--cui-progress-bg: #{$progress-bg};
--cui-progress-border-radius: #{$progress-border-radius};
--cui-progress-box-shadow: #{$progress-box-shadow};
--cui-progress-bar-color: #{$progress-bar-color};
--cui-progress-bar-bg: #{$progress-bar-bg};
--cui-progress-bar-transition: #{$progress-bar-transition};
```

#### How to use CSS variables

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

### SASS variables

```scss
$progress-height:                   1rem !default;
$progress-font-size:                $font-size-base * .75 !default;
$progress-bg:                       var(--cui-secondary-bg) !default;
$progress-border-radius:            var(--cui-border-radius) !default;
$progress-box-shadow:               var(--cui-box-shadow-inset) !default;
$progress-bar-color:                $white !default;
$progress-bar-bg:                   var(--cui-primary) !default;
$progress-bar-animation-timing:     1s linear infinite !default;
$progress-bar-transition:           width .6s ease !default;

// TODO: clean-up ???
$progress-group-margin-bottom:         $spacer !default;
$progress-group-header-margin-bottom:  $spacer * .25 !default;
```
