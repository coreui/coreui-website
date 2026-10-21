# React Display property Utilities

> Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.

## How it works

Change the value of the [`display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) with our responsive display utility classes. We purposely support only a subset of all possible values for `display`. Classes can be combined for various effects as you need.

## Notation

Display utility classes that apply to all [breakpoints](https://coreui.io/react/docs/layout/breakpoints/), from `xs` to `2xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0;` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

As such, the classes are named using the format:

- `.d-{value}` for `xs`
- `.d-{breakpoint}-{value}` for `sm`, `md`, `lg`, `xl`, and `2xl`.

Where *value* is one of:

- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `inline-grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`
- `contents`
- `flow-root`

The display values can be altered by changing the `$displays` variable and recompiling the SCSS.

The media queries affect screen widths with the given breakpoint *or larger*. For example, `.d-lg-none` sets `display: none;` on `lg`, `xl`, and `2xl` screens.

## Examples

```html
<div className="d-inline p-3 text-bg-primary">d-inline</div>
<div className="d-inline p-3 text-bg-inverse">d-inline</div>
```

```html
<span className="d-block p-3 text-bg-primary">d-block</span>
<span className="d-block p-3 text-bg-inverse">d-block</span>
```

## Hiding elements

For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.

To hide elements simply use the `.d-none` class or one of the `.d-{sm,md,lg,xl,2xl}-none` classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one `.d-*-none` class with a `.d-*-*` class, for example `.d-none .d-md-block .d-xl-none` will hide the element for all screen sizes except on medium and large devices.

| Screen size | Class |
| --- | --- |
| Hidden on all | `.d-none` |
| Hidden only on xs | `.d-none .d-sm-block` |
| Hidden only on sm | `.d-sm-none .d-md-block` |
| Hidden only on md | `.d-md-none .d-lg-block` |
| Hidden only on lg | `.d-lg-none .d-xl-block` |
| Hidden only on xl | `.d-xl-none .d-2xl-block` |
| Hidden only on 2xl | `.d-2xl-none` |
| Visible on all | `.d-block` |
| Visible only on xs | `.d-block .d-sm-none` |
| Visible only on sm | `.d-none .d-sm-block .d-md-none` |
| Visible only on md | `.d-none .d-md-block .d-lg-none` |
| Visible only on lg | `.d-none .d-lg-block .d-xl-none` |
| Visible only on xl | `.d-none .d-xl-block .d-2xl-none` |
| Visible only on 2xl | `.d-none .d-2xl-block` |

```html
<div className="d-lg-none">hide on lg and wider screens</div>
<div className="d-none d-lg-block">hide on screens smaller than lg</div>
```

## Display in print

Change the `display` value of elements when printing with our print display utility classes. Includes support for the same `display` values as our responsive `.d-*` utilities.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-grid`
- `.d-print-inline-grid`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

The print and display classes can be combined.

```html
<div className="d-print-none">Screen Only (Hide on print only)</div>
<div className="d-none d-print-block">Print Only (Hide on screen only)</div>
<div className="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
```

## Customizing

### Utilities API

Display utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"display": (
  responsive: true,
  print: true,
  property: display,
  class: d,
  values: inline inline-block block grid inline-grid table table-row table-cell flex inline-flex contents flow-root none
),
```
