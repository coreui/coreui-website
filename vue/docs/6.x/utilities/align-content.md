# Vue Align content Utilities

> Distribute the space between and around rows of a wrapped flex container.

## Align content

Use `align-content` utilities on flexbox containers to align flex items *together* on the cross axis. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. To demonstrate these utilities, we've enforced `flex-wrap: wrap` and increased the number of flex items.

**Heads up!** This property has no effect on single rows of flex items.

```vue
<div class="d-flex align-content-start flex-wrap">
  ...
</div>
```

```vue
<div class="d-flex align-content-end flex-wrap">...</div>
```

```vue
<div class="d-flex align-content-center flex-wrap">...</div>
```

```vue
<div class="d-flex align-content-between flex-wrap">...</div>
```

```vue
<div class="d-flex align-content-around flex-wrap">...</div>
```

```vue
<div class="d-flex align-content-stretch flex-wrap">...</div>
```

Responsive variations also exist for `align-content`.

- `.align-content-start`
- `.align-content-end`
- `.align-content-center`
- `.align-content-around`
- `.align-content-stretch`
- `.align-content-sm-start`
- `.align-content-sm-end`
- `.align-content-sm-center`
- `.align-content-sm-around`
- `.align-content-sm-stretch`
- `.align-content-md-start`
- `.align-content-md-end`
- `.align-content-md-center`
- `.align-content-md-around`
- `.align-content-md-stretch`
- `.align-content-lg-start`
- `.align-content-lg-end`
- `.align-content-lg-center`
- `.align-content-lg-around`
- `.align-content-lg-stretch`
- `.align-content-xl-start`
- `.align-content-xl-end`
- `.align-content-xl-center`
- `.align-content-xl-around`
- `.align-content-xl-stretch`
- `.align-content-2xl-start`
- `.align-content-2xl-end`
- `.align-content-2xl-center`
- `.align-content-2xl-around`
- `.align-content-2xl-stretch`

## Customizing

### Sass variables

Align content utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/vue/docs/utilities/api/#using-the-api)

```scss
"align-content": (
  responsive: true,
  property: align-content,
  values: (
    start: flex-start,
    end: flex-end,
    center: center,
    between: space-between,
    around: space-around,
    stretch: stretch,
  )
),
```
