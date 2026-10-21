# Vue Table Component Styling

> Learn how to customize the Vue Table component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

```scss
$table-striped-order:         odd !default;
$table-striped-columns-order: even !default;
```

## Sass loops

```scss
// Which theme colours get a .table-* variant. The values come from the theme
// tokens now, so this is a list of names rather than a map of shifted colours.
$table-variants: map.keys($theme-colors) !default;
```
