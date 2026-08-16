# Bootstrap 5 Overflow

> Use these shorthand utilities for quickly configuring how content overflows an element.

Adjust the `overflow` property on the fly with four default values and classes. These classes are not responsive by default.

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```

Using Sass variables, you may customize the overflow utilities by changing the `$overflows` variable in `_variables.scss`.

## Sass

### Utilities API

Overflow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

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
