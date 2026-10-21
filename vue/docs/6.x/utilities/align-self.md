# Vue Align self Utilities

> Override the container’s cross-axis alignment for a single item.

## Align self

Use `align-self` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from the same options as `align-items`: `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

```vue
<div class="align-self-start">Aligned flex item</div>
<div class="align-self-end">Aligned flex item</div>
<div class="align-self-center">Aligned flex item</div>
<div class="align-self-baseline">Aligned flex item</div>
<div class="align-self-stretch">Aligned flex item</div>
```

Responsive variations also exist for `align-self`.

- `.align-self-start`
- `.align-self-end`
- `.align-self-center`
- `.align-self-baseline`
- `.align-self-stretch`
- `.align-self-sm-start`
- `.align-self-sm-end`
- `.align-self-sm-center`
- `.align-self-sm-baseline`
- `.align-self-sm-stretch`
- `.align-self-md-start`
- `.align-self-md-end`
- `.align-self-md-center`
- `.align-self-md-baseline`
- `.align-self-md-stretch`
- `.align-self-lg-start`
- `.align-self-lg-end`
- `.align-self-lg-center`
- `.align-self-lg-baseline`
- `.align-self-lg-stretch`
- `.align-self-xl-start`
- `.align-self-xl-end`
- `.align-self-xl-center`
- `.align-self-xl-baseline`
- `.align-self-xl-stretch`
- `.align-self-2xl-start`
- `.align-self-2xl-end`
- `.align-self-2xl-center`
- `.align-self-2xl-baseline`
- `.align-self-2xl-stretch`

## Customizing

### Sass variables

Align self utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"align-self": (
  responsive: true,
  property: align-self,
  values: (
    auto: auto,
    start: flex-start,
    end: flex-end,
    center: center,
    baseline: baseline,
    stretch: stretch,
  )
),
// The inline-axis counterparts of the three above, which only grid can act
// on — flex has no `justify-items` and ignores `justify-self`.
```
