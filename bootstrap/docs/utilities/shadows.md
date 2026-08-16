# Bootstrap 5 Shadows

> Add or remove shadows to elements with box-shadow utilities.

## Examples

While shadows on components are disabled by default in CoreUI for Bootstrap and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

```html
<div class="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
<div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
```

## Sass

### Variables

```scss
$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;
$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;
$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;
```

### Utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"shadow": (
  property: box-shadow,
  class: shadow,
  values: (
    null: var(--cui-box-shadow),
    sm: var(--cui-box-shadow-sm),
    lg: var(--cui-box-shadow-lg),
    none: none,
  )
),
```
