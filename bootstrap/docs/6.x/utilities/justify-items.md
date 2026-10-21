# Bootstrap 6 Justify Items

> Set the inline-axis alignment for every item in a grid container, or override it for one.

## Justify items

`.justify-items-{start|end|center|stretch}` sets the inline-axis alignment for every item in the container.

```html
<div class="d-grid grid-cols-3 justify-items-center gap-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

## Justify self

`.justify-self-{start|end|center}` overrides that alignment for one item.

```html
<div class="d-grid grid-cols-3 justify-items-start gap-3">
  <div>1</div>
  <div class="justify-self-end">Pushed to the end</div>
  <div>3</div>
</div>
```

## Customizing

### Utilities API

Justify items utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/bootstrap/docs/utilities/api/#using-the-api)

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
