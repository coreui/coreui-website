# React Align items Utilities

> Align items along the cross axis, in both flexbox and grid containers.

## Align items

Use `align-items` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if `flex-direction: column`). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

```jsx
<div className="d-flex align-items-start">...</div>
<div className="d-flex align-items-end">...</div>
<div className="d-flex align-items-center">...</div>
<div className="d-flex align-items-baseline">...</div>
<div className="d-flex align-items-stretch">...</div>
```

Responsive variations also exist for `align-items`.

- `.align-items-start`
- `.align-items-end`
- `.align-items-center`
- `.align-items-baseline`
- `.align-items-stretch`
- `.align-items-sm-start`
- `.align-items-sm-end`
- `.align-items-sm-center`
- `.align-items-sm-baseline`
- `.align-items-sm-stretch`
- `.align-items-md-start`
- `.align-items-md-end`
- `.align-items-md-center`
- `.align-items-md-baseline`
- `.align-items-md-stretch`
- `.align-items-lg-start`
- `.align-items-lg-end`
- `.align-items-lg-center`
- `.align-items-lg-baseline`
- `.align-items-lg-stretch`
- `.align-items-xl-start`
- `.align-items-xl-end`
- `.align-items-xl-center`
- `.align-items-xl-baseline`
- `.align-items-xl-stretch`
- `.align-items-2xl-start`
- `.align-items-2xl-end`
- `.align-items-2xl-center`
- `.align-items-2xl-baseline`
- `.align-items-2xl-stretch`

## Customizing

### Sass variables

Align items utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"align-items": (
  responsive: true,
  property: align-items,
  values: (
    start: flex-start,
    end: flex-end,
    center: center,
    baseline: baseline,
    stretch: stretch,
  )
),
```
