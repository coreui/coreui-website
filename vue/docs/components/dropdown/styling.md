# Vue Dropdown Component Styling

> Learn how to customize the Vue Dropdown component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### CSS variables

Vue dropdowns use local CSS variables on `.dropdown` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-dropdown-zindex: #{$zindex-dropdown};
--cui-dropdown-min-width: #{$dropdown-min-width};
--cui-dropdown-padding-x: #{$dropdown-padding-x};
--cui-dropdown-padding-y: #{$dropdown-padding-y};
--cui-dropdown-spacer: #{$dropdown-spacer};
@include rfs($dropdown-font-size, --cui-dropdown-font-size);
--cui-dropdown-color: #{$dropdown-color};
--cui-dropdown-bg: #{$dropdown-bg};
--cui-dropdown-border-color: #{$dropdown-border-color};
--cui-dropdown-border-radius: #{$dropdown-border-radius};
--cui-dropdown-border-width: #{$dropdown-border-width};
--cui-dropdown-inner-border-radius: #{$dropdown-inner-border-radius};
--cui-dropdown-divider-bg: #{$dropdown-divider-bg};
--cui-dropdown-divider-margin-y: #{$dropdown-divider-margin-y};
--cui-dropdown-box-shadow: #{$dropdown-box-shadow};
--cui-dropdown-link-color: #{$dropdown-link-color};
--cui-dropdown-link-hover-color: #{$dropdown-link-hover-color};
--cui-dropdown-link-hover-bg: #{$dropdown-link-hover-bg};
--cui-dropdown-link-active-color: #{$dropdown-link-active-color};
--cui-dropdown-link-active-bg: #{$dropdown-link-active-bg};
--cui-dropdown-link-disabled-color: #{$dropdown-link-disabled-color};
--cui-dropdown-item-padding-x: #{$dropdown-item-padding-x};
--cui-dropdown-item-padding-y: #{$dropdown-item-padding-y};
--cui-dropdown-header-color: #{$dropdown-header-color};
--cui-dropdown-header-padding-x: #{$dropdown-header-padding-x};
--cui-dropdown-header-padding-y: #{$dropdown-header-padding-y};
```

Customization through CSS variables can be seen on the `.dropdown-menu-dark` class where we override specific values without adding duplicate CSS selectors.

```scss
--cui-dropdown-color: #{$dropdown-dark-color};
--cui-dropdown-bg: #{$dropdown-dark-bg};
--cui-dropdown-border-color: #{$dropdown-dark-border-color};
--cui-dropdown-box-shadow: #{$dropdown-dark-box-shadow};
--cui-dropdown-link-color: #{$dropdown-dark-link-color};
--cui-dropdown-link-hover-color: #{$dropdown-dark-link-hover-color};
--cui-dropdown-divider-bg: #{$dropdown-dark-divider-bg};
--cui-dropdown-link-hover-bg: #{$dropdown-dark-link-hover-bg};
--cui-dropdown-link-active-color: #{$dropdown-dark-link-active-color};
--cui-dropdown-link-active-bg: #{$dropdown-dark-link-active-bg};
--cui-dropdown-link-disabled-color: #{$dropdown-dark-link-disabled-color};
--cui-dropdown-header-color: #{$dropdown-dark-header-color};
```

#### How to use CSS variables

```vue
<template>
  <CDropdown :style="vars">...</CDropdown>
</template>

<script setup>
const vars = {
  '--cui-dropdown-color': '#333',
  '--cui-dropdown-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$dropdown-min-width:                10rem !default;
$dropdown-padding-x:                0 !default;
$dropdown-padding-y:                .5rem !default;
$dropdown-spacer:                   .125rem !default;
$dropdown-font-size:                $font-size-base !default;
$dropdown-color:                    var(--cui-body-color) !default;
$dropdown-bg:                       var(--cui-body-bg) !default;
$dropdown-border-color:             var(--cui-border-color-translucent) !default;
$dropdown-border-radius:            var(--cui-border-radius) !default;
$dropdown-border-width:             var(--cui-border-width) !default;
$dropdown-inner-border-radius:      calc(#{$dropdown-border-radius} - #{$dropdown-border-width}) !default; // stylelint-disable-line function-disallowed-list
$dropdown-divider-bg:               $dropdown-border-color !default;
$dropdown-divider-margin-y:         $spacer * .5 !default;
$dropdown-box-shadow:               var(--cui-box-shadow) !default;

$dropdown-link-color:               var(--cui-body-color) !default;
$dropdown-link-hover-color:         $dropdown-link-color !default;
$dropdown-link-hover-bg:            var(--cui-tertiary-bg) !default;

$dropdown-link-active-color:        $component-active-color !default;
$dropdown-link-active-bg:           $component-active-bg !default;

$dropdown-link-disabled-color:      var(--cui-tertiary-color) !default;

$dropdown-item-padding-y:           $spacer * .25 !default;
$dropdown-item-padding-x:           $spacer !default;

$dropdown-header-color:             $gray-600 !default;
$dropdown-header-padding-x:         $dropdown-item-padding-x !default;
$dropdown-header-padding-y:         $dropdown-padding-y !default;
// fusv-disable
$dropdown-header-padding:           $dropdown-header-padding-y $dropdown-header-padding-x !default; // Deprecated in v4.2.6
// fusv-enable
```

Variables for the dark dropdown:

```scss
$dropdown-dark-color:               $gray-300 !default;
$dropdown-dark-bg:                  $gray-800 !default;
$dropdown-dark-border-color:        $dropdown-border-color !default;
$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;
$dropdown-dark-box-shadow:          null !default;
$dropdown-dark-link-color:          $dropdown-dark-color !default;
$dropdown-dark-link-hover-color:    $white !default;
$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;
$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;
$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;
$dropdown-dark-link-disabled-color: $gray-500 !default;
$dropdown-dark-header-color:        $gray-500 !default;
```

Variables for the CSS-based carets that indicate a dropdown's interactivity:

```scss
$caret-width:                 .3em !default;
$caret-vertical-align:        $caret-width * .85 !default;
$caret-spacing:               $caret-width * .85 !default;
```
