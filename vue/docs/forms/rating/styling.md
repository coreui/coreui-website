# Vue Rating Component Styling

> Learn how to customize the Vue Rating component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue ratings use local CSS variables on `.rating` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-rating-gap: #{$rating-gap};
--cui-rating-transition: #{$rating-transition};
--cui-rating-item-height: #{$rating-item-height};
--cui-rating-item-color: #{$rating-item-color};
--cui-rating-item-scale-transform: #{$rating-item-scale-transform};
--cui-rating-item-active-color: #{$rating-item-active-color};
--cui-rating-item-icon: #{escape-svg($rating-item-icon)};
```

#### How to use CSS variables

```vue
<template>
  <CRating :style="vars">...</CRating>
</template>

<script setup>
const vars = {
  '--cui-rating-item-color': '#333',
  '--cui-rating-item-active-color': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$rating-gap:                   .0625rem !default;
$rating-transition:            color .15s ease-out, transform .15s ease-out !default;
$rating-item-height-sm:        1rem !default;
$rating-item-height:           1.25rem !default;
$rating-item-height-lg:        1.5rem !default;
$rating-item-color:            var(--cui-tertiary-color) !default;
$rating-item-scale-transform:  scale(1.2) !default;
$rating-item-active-color:     var(--cui-warning) !default;
$rating-item-icon:             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='currentColor' d='M470.935,194.043,333.8,171.757,270.227,48.22a16,16,0,0,0-28.454,0L178.2,171.757,41.065,194.043A16,16,0,0,0,32.273,221.1l97.845,98.636L108.936,457.051a16,16,0,0,0,23.02,16.724L256,411.2l124.044,62.576a16,16,0,0,0,23.02-16.724L381.882,319.74,479.727,221.1A16,16,0,0,0,470.935,194.043Z'%3E%3C/path%3E%3C/svg%3E") !default;
```
