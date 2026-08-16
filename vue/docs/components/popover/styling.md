# Vue Popover Component Styling

> Learn how to customize the Vue Popover component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue popovers use local CSS variables on `.popover` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-popover-zindex: #{$zindex-popover};
--cui-popover-max-width: #{$popover-max-width};
@include rfs($popover-font-size, --cui-popover-font-size);
--cui-popover-bg: #{$popover-bg};
--cui-popover-border-width: #{$popover-border-width};
--cui-popover-border-color: #{$popover-border-color};
--cui-popover-border-radius: #{$popover-border-radius};
--cui-popover-inner-border-radius: #{$popover-inner-border-radius};
--cui-popover-box-shadow: #{$popover-box-shadow};
--cui-popover-header-padding-x: #{$popover-header-padding-x};
--cui-popover-header-padding-y: #{$popover-header-padding-y};
@include rfs($popover-header-font-size, --cui-popover-header-font-size);
--cui-popover-header-color: #{$popover-header-color};
--cui-popover-header-bg: #{$popover-header-bg};
--cui-popover-body-padding-x: #{$popover-body-padding-x};
--cui-popover-body-padding-y: #{$popover-body-padding-y};
--cui-popover-body-color: #{$popover-body-color};
--cui-popover-arrow-width: #{$popover-arrow-width};
--cui-popover-arrow-height: #{$popover-arrow-height};
--cui-popover-arrow-border: var(--cui-popover-border-color);
```

#### How to use CSS variables

```vue
<template>
  <CPopover :style="vars">...</CPopover>
</template>

<script setup>
const vars = {
  '--cui-popover-border-color': '#333',
  '--cui-popover-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$popover-font-size:                 $font-size-sm !default;
$popover-bg:                        var(--cui-body-bg) !default;
$popover-max-width:                 276px !default;
$popover-border-width:              var(--cui-border-width) !default;
$popover-border-color:              var(--cui-border-color-translucent) !default;
$popover-border-radius:             var(--cui-border-radius-lg) !default;
$popover-inner-border-radius:       calc(#{$popover-border-radius} - #{$popover-border-width}) !default; // stylelint-disable-line function-disallowed-list
$popover-box-shadow:                var(--cui-box-shadow) !default;

$popover-header-font-size:          $font-size-base !default;
$popover-header-bg:                 var(--cui-secondary-bg) !default;
$popover-header-color:              $headings-color !default;
$popover-header-padding-y:          .5rem !default;
$popover-header-padding-x:          $spacer !default;

$popover-body-color:                var(--cui-body-color) !default;
$popover-body-padding-y:            $spacer !default;
$popover-body-padding-x:            $spacer !default;

$popover-arrow-width:               1rem !default;
$popover-arrow-height:              .5rem !default;
```
