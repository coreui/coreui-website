# React Shadows Utilities

> Add or remove shadows to elements with box-shadow utilities.

## Examples

While shadows on components are disabled by default in CoreUI for React and can be enabled via `$enable-shadows`, you can also quickly add or remove a shadow with our `box-shadow` utility classes. Includes support for `.shadow-none` and three default sizes (which have associated variables to match).

```html
<div className="shadow-none p-4 mb-6 bg-4 rounded">No shadow</div>
<div className="shadow-xs p-4 mb-6 bg-body rounded">Extra small shadow</div>
<div className="shadow-sm p-4 mb-6 bg-body rounded">Small shadow</div>
<div className="shadow p-4 mb-6 bg-body rounded">Regular shadow</div>
<div className="shadow-lg p-4 mb-6 bg-body rounded">Larger shadow</div>
<div className="shadow-xl p-4 mb-6 bg-body rounded">Extra large shadow</div>
```

## Color

_Added in 6.0.0._

A shadow does not have to be grey. Add a `.shadow-{color}` class next to the size class to tint it — the size class supplies the geometry, the colour class supplies the hue.

```html
<div className="d-flex flex-wrap gap-5">
  <div className="shadow shadow-primary p-4 bg-body rounded">Primary</div>
  <div className="shadow shadow-success p-4 bg-body rounded">Success</div>
  <div className="shadow shadow-danger p-4 bg-body rounded">Danger</div>
  <div className="shadow shadow-current p-4 bg-body rounded fg-info">Current color</div>
</div>
```

The tint does not reach nested shadows: an element inside a `.shadow-primary` box draws its own shadow in the default colour, so a tinted card does not silently recolour everything inside it.

```html
<div className="shadow shadow-primary p-6 bg-body rounded">
  <div className="shadow p-4 bg-body rounded">Untinted, inside a tinted parent</div>
</div>
```

## Opacity

_Added in 6.0.0._

`.shadow-opacity-{10…100}`, in steps of ten, scales the shadow without touching its colour or geometry, which is the usual way to soften a shadow on a busy surface. `.shadow-opacity-25` and `-75` are deprecated v5 steps, removed in v7.

```html
<div className="d-flex flex-wrap gap-5">
  <div className="shadow shadow-opacity-30 p-4 bg-body rounded">30%</div>
  <div className="shadow shadow-opacity-50 p-4 bg-body rounded">50%</div>
  <div className="shadow shadow-opacity-70 p-4 bg-body rounded">70%</div>
  <div className="shadow shadow-opacity-100 p-4 bg-body rounded">100%</div>
</div>
```

## Customizing

### CSS variables

_Added in 6.0.0._

Every shadow computes its alpha as `base × strength × opacity`, so three separate things can be changed at runtime without rewriting the shadow:

| Variable | Scope | What it does |
| --- | --- | --- |
| `--cui-shadow-color` | inherits from `:root` | The colour every shadow is mixed from. |
| `--cui-shadow-strength` | inherits from `:root` | Multiplies every shadow's alpha. Dark mode raises it, because the same alpha reads as weaker against a dark surface. |
| `--cui-shadow-tint` | set by `.shadow-{color}`, does not inherit | Overrides the colour for one element. |
| `--cui-shadow-opacity` | set by `.shadow-opacity-*`, does not inherit | Scales one element's shadow. |

Setting `--cui-shadow-color` on the page changes every shadow at once, including the ones components draw:

```css
:root {
  --cui-shadow-color: #1b4b91;
}
```

```scss
@each $key, $value in $shadows {
  // stylelint-disable-next-line scss/at-function-named-arguments
  $name: if(sass($key == null): --cui-box-shadow; else: --cui-box-shadow-#{$key});
  $root-token-defaults: map.set($root-token-defaults, $name, $value);
}
```

### Sass variables

```scss
$shadows: (
  null: #{(
    "0 .125rem .25rem -.0625rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(4% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 .375rem .75rem -.125rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(5% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 .75rem 1.5rem -.25rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(6% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)"
  )},
  xs: 0 .0625rem .125rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(4% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent),
  sm: #{(
    "0 .0625rem .125rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(4% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 .125rem .375rem -.0625rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(5% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)"
  )},
  lg: #{(
    "0 .125rem .375rem -.0625rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(5% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 .375rem 1rem -.1875rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(6% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 .75rem 2rem -.375rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(7% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 1.5rem 3.5rem -.75rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(8% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)"
  )},
  xl: #{(
    "0 .1875rem .5rem -.0625rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(5% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 .5rem 1.25rem -.1875rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(6% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 1rem 2.5rem -.375rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(7% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)",
    "0 2rem 5rem -.75rem color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(9% * var(--cui-shadow-strength) * var(--cui-shadow-opacity, 1)), transparent)"
  )},
  inset: inset 0 1px 2px light-dark(color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(8% * var(--cui-shadow-opacity, 1)), transparent), color-mix(in oklch, var(--cui-shadow-tint, var(--cui-shadow-color)) calc(26% * var(--cui-shadow-opacity, 1)), transparent)),
) !default;
```

### Utilities API

Shadow utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"shadow": (
  property: box-shadow,
  class: shadow,
  // The literal expressions from $shadows, not var(--cui-box-shadow*).
  // A token resolves where it is declared — on :root — so going through one
  // would freeze the tint and the opacity there and leave .shadow-primary
  // and .shadow-opacity-* with nothing to change.
  // `inset` stays out: it is a component's inner shadow, not a utility.
  values: map.merge(map.remove($shadows, inset), (none: none))
),
```

```scss
"shadow-color": (
  property: (--cui-shadow-tint: null),
  class: shadow,
  values: map.merge(
    theme-color-refs("bg"),
    (
      "current": currentcolor,
      "black": var(--cui-black),
      "white": var(--cui-white),
    )
  )
),
```

```scss
"shadow-opacity": (
  property: (--cui-shadow-opacity: null),
  class: shadow-opacity,
  values: map.merge(
    $util-opacity,
    (
      25: .25, // deprecated
      75: .75, // deprecated
    )
  )
),
```
