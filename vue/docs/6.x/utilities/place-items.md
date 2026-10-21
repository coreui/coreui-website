# Vue Place items Utilities

> Set both grid axes at once — the shorthand for align-items and justify-items.

## Place items

`.place-items-{start|end|center|stretch}` sets both axes at once — it is the shorthand for `align-items` and `justify-items` together.

```html
<div class="d-grid grid-cols-3 place-items-center gap-3" style="height: 120px">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Customizing

### Sass variables

Place items utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"justify-items": (
  responsive: true,
  property: justify-items,
  values: (
    start: start,
    end: end,
    center: center,
    stretch: stretch,
  )
),
"justify-self": (
  responsive: true,
  property: justify-self,
  values: (
    start: start,
    end: end,
    center: center,
  )
),
"place-items": (
  responsive: true,
  property: place-items,
  values: (
    start: start,
    end: end,
    center: center,
    stretch: stretch,
  )
),
```
