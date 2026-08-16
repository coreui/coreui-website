# Vue List group Component Styling

> Learn how to customize the Vue List group component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue list groups use local CSS variables on `.list-group` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-list-group-color: #{$list-group-color};
--cui-list-group-bg: #{$list-group-bg};
--cui-list-group-border-color: #{$list-group-border-color};
--cui-list-group-border-width: #{$list-group-border-width};
--cui-list-group-border-radius: #{$list-group-border-radius};
--cui-list-group-item-padding-x: #{$list-group-item-padding-x};
--cui-list-group-item-padding-y: #{$list-group-item-padding-y};
--cui-list-group-action-color: #{$list-group-action-color};
--cui-list-group-action-hover-color: #{$list-group-action-hover-color};
--cui-list-group-action-hover-bg: #{$list-group-hover-bg};
--cui-list-group-action-active-color: #{$list-group-action-active-color};
--cui-list-group-action-active-bg: #{$list-group-action-active-bg};
--cui-list-group-disabled-color: #{$list-group-disabled-color};
--cui-list-group-disabled-bg: #{$list-group-disabled-bg};
--cui-list-group-active-color: #{$list-group-active-color};
--cui-list-group-active-bg: #{$list-group-active-bg};
--cui-list-group-active-border-color: #{$list-group-active-border-color};
```

#### How to use CSS variables

```vue
<template>
  <CListGroup :style="vars">...</CListGroup>
</template>

<script setup>
const vars = {
  '--cui-list-group-color': '#333',
  '--cui-list-group-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$list-group-color:                  var(--cui-body-color) !default;
$list-group-bg:                     var(--cui-body-bg) !default;
$list-group-border-color:           var(--cui-border-color) !default;
$list-group-border-width:           var(--cui-border-width) !default;
$list-group-border-radius:          var(--cui-border-radius) !default;

$list-group-item-padding-y:         $spacer * .5 !default;
$list-group-item-padding-x:         $spacer !default;
// fusv-disable
$list-group-item-bg-scale:          -80% !default; // Deprecated in v5.0.0
$list-group-item-color-scale:       40% !default; // Deprecated in v5.0.0
// fusv-enable

$list-group-hover-bg:               var(--cui-tertiary-bg) !default;
$list-group-active-color:           $component-active-color !default;
$list-group-active-bg:              $component-active-bg !default;
$list-group-active-border-color:    $list-group-active-bg !default;

$list-group-disabled-color:         var(--cui-secondary-color) !default;
$list-group-disabled-bg:            $list-group-bg !default;

$list-group-action-color:           var(--cui-secondary-color) !default;
$list-group-action-hover-color:     var(--cui-emphasis-color) !default;

$list-group-action-active-color:    var(--cui-body-color) !default;
$list-group-action-active-bg:       var(--cui-secondary-bg) !default;
```
