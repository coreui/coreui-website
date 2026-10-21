# Vue Overflow Utilities

> Use these shorthand utilities for quickly configuring how content overflows an element.

Adjust the `overflow` property on the fly with four default values and classes. These classes are not responsive by default.

```vue
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```

## Overflow on one axis

The same four values are generated per axis as `.overflow-x-*` and `.overflow-y-*`, which set `overflow-x` and `overflow-y` on their own. Use them when only one direction should scroll or clip.

```vue
<div class="overflow-x-auto">...</div>
<div class="overflow-x-hidden">...</div>
<div class="overflow-x-visible">...</div>
<div class="overflow-x-scroll">...</div>

<div class="overflow-y-auto">...</div>
<div class="overflow-y-hidden">...</div>
<div class="overflow-y-visible">...</div>
<div class="overflow-y-scroll">...</div>
```

Using Sass variables, you may customize the overflow utilities by changing the `$overflows` variable in `_utilities.scss`.

## Customizing

### Utilities API

Overflow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"overflow": (
  property: overflow,
  values: auto hidden visible scroll,
),
"overflow-x": (
  property: overflow-x,
  values: auto hidden visible scroll,
),
"overflow-y": (
  property: overflow-y,
  values: auto hidden visible scroll,
),
```
