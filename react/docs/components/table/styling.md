# React Table Component Styling

> Learn how to customize the React Table component with CSS classes, variables, and SASS for flexible styling and seamless integration into your design.

### SASS variables

```scss
$table-cell-padding-y:        .5rem !default;
$table-cell-padding-x:        .5rem !default;
$table-cell-padding-y-sm:     .25rem !default;
$table-cell-padding-x-sm:     .25rem !default;

$table-cell-vertical-align:   top !default;

$table-color:                 var(--cui-emphasis-color) !default;
$table-bg:                    var(--cui-body-bg) !default;
$table-accent-bg:             transparent !default;

$table-th-font-weight:        null !default;

$table-striped-color:         $table-color !default;
$table-striped-bg-factor:     .05 !default;
$table-striped-bg:            rgba(var(--cui-emphasis-color-rgb), $table-striped-bg-factor) !default;

$table-active-color:          $table-color !default;
$table-active-bg-factor:      .1 !default;
$table-active-bg:             rgba(var(--cui-emphasis-color-rgb), $table-active-bg-factor) !default;

$table-hover-color:           $table-color !default;
$table-hover-bg-factor:       .075 !default;
$table-hover-bg:              rgba(var(--cui-emphasis-color-rgb), $table-hover-bg-factor) !default;

$table-border-factor:         .2 !default;
$table-border-width:          var(--cui-border-width) !default;
$table-border-color:          var(--cui-border-color) !default;

$table-striped-order:         odd !default;
$table-striped-columns-order: even !default;

$table-group-separator-color: currentcolor !default;

$table-caption-color:         var(--cui-secondary-color) !default;

$table-bg-scale:              -80% !default;
```

### SASS loops

```scss
$table-variants: (
  "primary":    shift-color($primary, $table-bg-scale),
  "secondary":  shift-color($secondary, $table-bg-scale),
  "success":    shift-color($success, $table-bg-scale),
  "info":       shift-color($info, $table-bg-scale),
  "warning":    shift-color($warning, $table-bg-scale),
  "danger":     shift-color($danger, $table-bg-scale),
  "light":      $light,
  "dark":       $dark,
) !default;
```
