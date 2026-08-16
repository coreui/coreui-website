# Bootstrap 5 Opacity

> Control the opacity of elements.

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where `1` is not transparent at all, `.5` is 50% visible, and `0` is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.

```html
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
<div class="opacity-0">...</div>
```

### Utilities API

Opacity utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

```scss
"opacity": (
  property: opacity,
  values: (
    0: 0,
    25: .25,
    50: .5,
    75: .75,
    100: 1,
  )
),
```
