# Vue Range Slider Component Styling

> Learn how to customize the Vue Range Slider component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue Range Sliders use local CSS variables on `.range-slider` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-range-slider-track-width: #{$range-slider-track-width};
--cui-range-slider-track-height: #{$range-slider-track-height};
--cui-range-slider-track-cursor: #{$range-slider-track-cursor};
--cui-range-slider-track-bg: #{$range-slider-track-bg};
--cui-range-slider-track-border-radius: #{$range-slider-track-border-radius};
--cui-range-slider-track-box-shadow: #{$range-slider-track-box-shadow};
--cui-range-slider-track-in-range-bg: #{$range-slider-track-in-range-bg};
--cui-range-slider-disabled-track-in-range-bg: #{$range-slider-disabled-track-in-range-bg};

--cui-range-slider-label-padding-y: #{$range-slider-label-padding-y};
--cui-range-slider-label-padding-x: #{$range-slider-label-padding-x};
--cui-range-slider-label-font-size: #{$range-slider-label-font-size};
--cui-range-slider-label-color: #{$range-slider-label-color};

--cui-range-slider-thumb-width: #{$range-slider-thumb-width};
--cui-range-slider-thumb-height: #{$range-slider-thumb-height};
--cui-range-slider-thumb-bg: #{$range-slider-thumb-bg};
--cui-range-slider-thumb-border: #{$range-slider-thumb-border};
--cui-range-slider-thumb-border-radius: #{$range-slider-thumb-border-radius};
--cui-range-slider-thumb-box-shadow: #{$range-slider-thumb-box-shadow};
--cui-range-slider-thumb-focus-box-shadow: #{$range-slider-thumb-focus-box-shadow};
--cui-range-slider-thumb-active-bg: #{$range-slider-thumb-active-bg};
--cui-range-slider-thumb-disabled-bg: #{$range-slider-thumb-disabled-bg};
--cui-range-slider-thumb-transition: #{$range-slider-thumb-transition};

--cui-range-slider-tooltip-zindex: #{$zindex-tooltip};
--cui-range-slider-tooltip-max-width: #{$range-slider-tooltip-max-width};
--cui-range-slider-tooltip-padding-y: #{$range-slider-tooltip-padding-y};
--cui-range-slider-tooltip-padding-x: #{$range-slider-tooltip-padding-x};
--cui-range-slider-tooltip-margin-end: #{$range-slider-tooltip-margin-end};
--cui-range-slider-tooltip-margin-bottom: #{$range-slider-tooltip-margin-bottom};
--cui-range-slider-tooltip-font-size: #{$range-slider-tooltip-font-size};
--cui-range-slider-tooltip-color: #{$range-slider-tooltip-color};
--cui-range-slider-tooltip-bg: #{$range-slider-tooltip-bg};
--cui-range-slider-tooltip-border-radius: #{$range-slider-tooltip-border-radius};
--cui-range-slider-tooltip-box-shadow: #{$range-slider-tooltip-box-shadow};
--cui-range-slider-tooltip-transition: #{$range-slider-tooltip-transition};

--cui-range-slider-tooltip-arrow-width: #{$range-slider-tooltip-arrow-width};
--cui-range-slider-tooltip-arrow-height: #{$range-slider-tooltip-arrow-height};
```

```scss
--cui-range-slider-vertical-track-width: #{$range-slider-vertical-track-width};
--cui-range-slider-vertical-track-height: #{$range-slider-vertical-track-height};
```

#### How to use CSS variables

```vue
<template>
  <CRangeSlider :style="vars">...</CRangeSlider>
</template>

<script setup>
const vars = {
  '--cui-range-slider-label-color': '#333',
  '--cui-range-slider-track-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$range-slider-track-width:                 100% !default;
$range-slider-track-height:                .5rem !default;
$range-slider-track-cursor:                pointer !default;
$range-slider-track-bg:                    var(--cui-secondary-bg) !default;
$range-slider-track-border-radius:         1rem !default;
$range-slider-track-box-shadow:            var(--cui-box-shadow-inset) !default;

$range-slider-track-in-range-bg:           rgba(var(--cui-primary-rgb), .5) !default;
$range-slider-disabled-track-in-range-bg:  rgba(var(--cui-secondary-rgb), .375) !default;

$range-slider-label-padding-y:             0 !default;
$range-slider-label-padding-x:             0 !default;
$range-slider-label-font-size:             $font-size-sm !default;
$range-slider-label-color:                 var(--cui-body-color) !default;

$range-slider-thumb-width:                 1rem !default;
$range-slider-thumb-height:                $range-slider-thumb-width !default;
$range-slider-thumb-bg:                    $component-active-bg !default;
$range-slider-thumb-border:                0 !default;
$range-slider-thumb-border-radius:         1rem !default;
$range-slider-thumb-box-shadow:            0 .1rem .25rem rgba($black, .1) !default;
$range-slider-thumb-focus-box-shadow:      0 0 0 1px $body-bg, $input-focus-box-shadow !default;
$range-slider-thumb-active-bg:             tint-color($primary, 70%) !default;
$range-slider-thumb-disabled-bg:           rgba(var(--cui-secondary-rgb), 1) !default;
$range-slider-thumb-transition:            background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$range-slider-tooltip-max-width:           200px !default;
$range-slider-tooltip-padding-y:           $spacer * .25 !default;
$range-slider-tooltip-padding-x:           $spacer * .5 !default;
$range-slider-tooltip-margin-end:          .25rem !default;
$range-slider-tooltip-margin-bottom:       .25rem !default;
$range-slider-tooltip-font-size:           $font-size-sm !default;
$range-slider-tooltip-color:               var(--cui-body-color) !default;
$range-slider-tooltip-bg:                  var(--cui-secondary-bg) !default;
$range-slider-tooltip-border-radius:       var(--cui-border-radius) !default;
$range-slider-tooltip-box-shadow:          var(--cui-box-shadow) !default;
$range-slider-tooltip-transition:          visibility .15s, opacity .15s ease !default;

$range-slider-tooltip-arrow-width:         .8rem !default;
$range-slider-tooltip-arrow-height:        .4rem !default;

$range-slider-vertical-track-width:        .5rem !default;
$range-slider-vertical-track-height:       10rem !default;
```
