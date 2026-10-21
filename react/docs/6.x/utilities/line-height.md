# React Line height Utilities

> Change the line height of text with our line-height utilities.

## Line height

Change the line height with `.lh-*` utilities. `.lh-sm`, `.lh-md` and `.lh-lg` read the `--cui-line-height-*` stops of the type scale; `.lh-1` is unitless `1`. `.lh-base` is the deprecated v5 name of `.lh-md` and is removed in v7.

```html
<p className="lh-1">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p className="lh-sm">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p className="lh-md">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
<p className="lh-lg">This is a long paragraph written to show how the line-height of an element is affected by our utilities. Classes are applied to the element itself or sometimes the parent element. These classes can be customized as needed with our utility API.</p>
```

A `.text-*` stop already carries the line height that belongs to its size — see [font size](https://coreui.io/react/docs/utilities/font-size/). Reach for `.lh-*` when you need to override that pairing.

## Customizing

### Sass variables

Line height utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"line-height": (
  property: line-height,
  class: lh,
  values: (
    1: 1,
    sm: var(--cui-line-height-sm),
    md: var(--cui-line-height-md),
    lg: var(--cui-line-height-lg),
    base: var(--cui-body-line-height), // deprecated
  )
),
```
