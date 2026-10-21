# React Border color Utilities

> Change the border color of an element with utilities built on our theme colors, and fade it with the opacity utilities.

## Color

Change the border color using utilities built on our theme colors.

```html
<span className="border border-${c.name}"></span>
  <span className="border border-subtle-${c.name}"></span>

<span className="border border-black"></span>
  <span className="border border-white"></span>
```

## Neutral

Four weights sit between the page and a themed border, for lines that separate content without naming a color. `.border-emphasized` is the strongest, the default `--cui-border-color` sits in the middle, and `.border-subtle` is the faintest.

```html
<span className="border border-emphasized"></span>
<span className="border"></span>
<span className="border border-muted"></span>
<span className="border border-subtle"></span>
```

Each is a `light-dark()` pair, so the ladder keeps its order in both color schemes rather than fading out in one of them.

## Sides

Using utilities you can change the border on one side only, or you can change all borders to make them different colors.

```html
<span className="border-top border-top-primary"></span>
<span className="border-end border-end-primary"></span>
<span className="border-bottom border-bottom-primary"></span>
<span className="border-start border-start-primary"></span>
<span className="border-start border-start-primary border-end border-end-danger"></span>
<span className="border-top border-top-primary border-end border-end-danger border-bottom border-bottom-success"></span>
<span className="border border-top-primary border-end-danger border-bottom-success border-start-info"></span>
```

## Recoloring a component

The same utilities repaint the border a component ships with:

```html
<div className="mb-5">
  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
  <CFormInput type="email" className="border-success" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>

<div className="h4 pb-3 mb-5 fg-danger border-bottom border-danger">
  Dangerous heading
</div>

<div className="p-4 bg-info bg-10 border border-info border-start-0 rounded-end">
  Changing border color and width
</div>
```

## Opacity

Every `.border-{color}` utility writes its colour into `--cui-border` and reads it back, so a companion `.border-{percentage}` class can mix that colour with `transparent` through `color-mix()`, in the browser, without recompiling Sass.

```css
.border-success {
  --cui-border: var(--cui-success-bg);
  border-color: var(--cui-border);
}

.border-50 {
  border-color: color-mix(in oklch, var(--cui-border) 50%, transparent);
}
```

Override `--cui-border` to repaint the utility with another colour; the opacity class keeps working, because it reads whatever the token holds.

```html
<div className="border border-success p-3 mb-3">This is default success border</div>
<div className="border border-success p-3 mb-3 border-70">This is 70% opacity success border</div>
<div className="border border-success p-3 mb-3 border-50">This is 50% opacity success border</div>
<div className="border border-success p-3 mb-3 border-30">This is 30% opacity success border</div>
<div className="border border-success p-3 border-10">This is 10% opacity success border</div>
```

`.border-opacity-{10|25|50|75|100}` and `.border-{color}-subtle` are the deprecated v5 spellings of `.border-{percentage}` and `.border-subtle-{color}`; they still render and are removed in v7.

## Customizing

### Sass variables

Border color utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"border-color": (
  property: (
    --cui-border: null,
    border-color: var(--cui-border),
  ),
  class: border,
  values: $utilities-border-colors
),
"border-top-color": (
  property: border-top-color,
  class: border-top,
  values: map.merge(theme-color-refs("bg"), ("white": var(--cui-white)))
),
"border-end-color": (
  property: border-inline-end-color,
  class: border-end,
  values: map.merge(theme-color-refs("bg"), ("white": var(--cui-white)))
),
"border-bottom-color": (
  property: border-bottom-color,
  class: border-bottom,
  values: map.merge(theme-color-refs("bg"), ("white": var(--cui-white)))
),
"border-start-color": (
  property: border-inline-start-color,
  class: border-start,
  values: map.merge(theme-color-refs("bg"), ("white": var(--cui-white)))
),
```

```scss
"border-color-subtle": (
  property: (
    --cui-border: null,
    border-color: var(--cui-border),
  ),
  class: border-subtle,
  values: theme-color-refs("border")
),
"border-opacity": (
  class: border,
  property: border-color,
  values: theme-opacity-values(--cui-border)
),
// deprecated
"border-color-subtle-legacy": (
  property: (
    --cui-border: null,
    border-color: var(--cui-border),
  ),
  class: border,
  values: $utilities-border-subtle
),
// deprecated
"border-opacity-legacy": (
  class: border-opacity,
  property: border-color,
  values: theme-opacity-values(--cui-border, null, (10: .1, 25: .25, 50: .5, 75: .75, 100: 1))
),
```
