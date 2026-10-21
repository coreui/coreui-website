# React Colors Utilities

> Convey meaning through `color` with a handful of color utility classes. Includes support for styling links with hover states, too.

## Colors

Colorize text with color utilities. To colorize a link, give it a [theme class](https://coreui.io/react/docs/customize/theme/) instead — Reboot resolves a link's colour from the theme, and the theme slot carries a hover tone with it. See [link utilities](https://coreui.io/react/docs/utilities/link/).

```html
<p className="fg-${c.name}">.fg-${c.name}</p>
<p className="fg-emphasis-${c.name}">.fg-emphasis-${c.name}</p>
<p className="fg-body">.fg-body</p>

<p className="fg-black bg-white">.fg-black</p>
<p className="fg-white bg-black">.fg-white</p>
```

> **Deprecation:** the v5 spellings — `.text-{color}`, `.text-{color}-emphasis`, `.text-body`, `.text-black`, `.text-white`, `.text-reset`, `.text-body-secondary` and `.text-body-tertiary` — still ship and render the same, but are removed in v7. Write `.fg-{color}`, `.fg-emphasis-{color}`, `.fg-body`, `.fg-black`, `.fg-white`, `.fg-reset`, `.fg-2` and `.fg-3`. `.text-muted`, `.text-black-50` and `.text-white-50` are gone, as in Bootstrap 6: write `.fg-2`, `.fg-black.fg-50` and `.fg-white.fg-50`.

> ##### Conveying meaning to assistive technologies
> 
> Relying on color to convey meaning creates a visual cue that assistive technologies, like screen readers, cannot perceive. It's essential that any information represented by color is either apparent from the content itself (e.g., the visible text) or supplemented by alternative methods, such as extra text using the `.visually-hidden` class.

## Foreground ladder

The neutral text hierarchy is a ladder, mirroring the [surface ladder](https://coreui.io/react/docs/utilities/background/#surface-ladder): `.fg-body` is the body text color and the numbers step away from it — `.fg-1` barely, `.fg-4` down to a watermark. The `.fg-{percentage}` opacity utilities compose with all of them.

```html
<p className="fg-body">.fg-body</p>
<p className="fg-1">.fg-1</p>
<p className="fg-2">.fg-2</p>
<p className="fg-3">.fg-3</p>
<p className="fg-4">.fg-4</p>
```

`.fg-2` and `.fg-3` are deprecated names for `.fg-2` and `.fg-3` — they render identically and go away in v7.

## Opacity

Every `.fg-*` utility writes its colour into `--cui-fg` and reads it back, so a companion `.fg-{percentage}` class can mix that colour with `transparent` through `color-mix()`, in the browser, without recompiling Sass.

```css
.fg-primary {
  --cui-fg: var(--cui-primary-fg);
  color: var(--cui-fg);
}

.fg-50 {
  color: color-mix(in oklch, var(--cui-fg) 50%, transparent);
}
```

Override `--cui-fg` to repaint the utility with another colour; the opacity class keeps working, because it reads whatever the token holds.

```html
<div className="fg-primary">This is default primary text</div>
<div className="fg-primary fg-90">This is 90% opacity primary text</div>
<div className="fg-primary fg-80">This is 80% opacity primary text</div>
<div className="fg-primary fg-70">This is 70% opacity primary text</div>
<div className="fg-primary fg-60">This is 60% opacity primary text</div>
<div className="fg-primary fg-50">This is 50% opacity primary text</div>
<div className="fg-primary fg-40">This is 40% opacity primary text</div>
<div className="fg-primary fg-30">This is 30% opacity primary text</div>
<div className="fg-primary fg-20">This is 20% opacity primary text</div>
<div className="fg-primary fg-10">This is 10% opacity primary text</div>
```

`.text-opacity-{25|50|75|100}` are the deprecated v5 names of the same knob and are removed in v7.

## Contrast colors

`.fg-contrast-{color}` sets `--cui-fg` to the theme colour's `contrast` slot — the text colour that reads on the solid colour — so a label on a `.bg-{color}` surface picks the right ink without naming it.

```html
<p className="bg-${c.name} fg-contrast-${c.name} p-3">.fg-contrast-${c.name}</p>
```

These compose with the opacity utilities too.

```html
<p className="bg-primary fg-contrast-primary fg-100 p-3">.fg-contrast-primary .fg-100</p>
<p className="bg-primary fg-contrast-primary fg-70 p-3">.fg-contrast-primary .fg-70</p>
<p className="bg-primary fg-contrast-primary fg-40 p-3">.fg-contrast-primary .fg-40</p>
```

## Reset color

Reset a text or link's color with `.fg-reset`, so that it inherits the color from its parent.

```html
<p className="fg-2">
  Secondary body text with a <a href="#" className="fg-reset">reset link</a>.
</p>
```

## Specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` or more semantic element with the desired class.

## Customizing

In addition to the following Sass functionality, consider reading about our included [CSS custom properties](https://coreui.io/react/docs/customize/css-variables/) (aka CSS variables) for colors and more.

Do you need a gradient in your custom CSS? Just add `background-image: var(--cui-gradient);`.

### Sass variables

Most `color` utilities are generated by our theme colors, reassigned from our generic color palette variables.

```scss
$primary: oklch(52.945% 0.19103 278.34) !default;
$success: oklch(55.1% 0.173 145) !default;
$info:    oklch(57.4% 0.196 256) !default;
$warning: oklch(84% 0.172 85) !default;
$danger:  oklch(58.7% 0.237 23.81) !default;
$gray:    oklch(60% 0.03948 265.02) !default;
```

### Sass maps

The foreground ladder is one map: each key is one `.fg-{key}` utility and the `--cui-fg-{key}` token behind it, in light and dark mode:

```scss
$theme-fgs: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$theme-fgs: defaults(
  (
    "body":        light-dark(var(--cui-gray-900), var(--cui-gray-050)),
    "1":           light-dark(var(--cui-gray-800), var(--cui-gray-200)),
    "2":           light-dark(var(--cui-gray-700), var(--cui-gray-300)),
    "3":           light-dark(var(--cui-gray-600), var(--cui-gray-500)),
    "4":           light-dark(var(--cui-gray-500), var(--cui-gray-600)),
    "bg":          var(--cui-bg-body),
    "white":       var(--cui-white),
    "black":       var(--cui-black),
    "inherit":     inherit,
  ),
  $theme-fgs
);
```

Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.

```scss
$theme-colors: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$theme-colors: defaults(
  (
    "primary": (
      "base":          var(--cui-primary-500),
      "fg":            light-dark(var(--cui-primary-600), var(--cui-primary-400)),
      "fg-emphasis":   light-dark(var(--cui-primary-800), var(--cui-primary-200)),
      "bg":            var(--cui-primary-500),
      "bg-subtle":     light-dark(var(--cui-primary-100), var(--cui-primary-900)),
      "bg-muted":      light-dark(var(--cui-primary-200), var(--cui-primary-800)),
      "border":        light-dark(var(--cui-primary-300), var(--cui-primary-600)),
      "focus-ring":    color-mix(in oklch, var(--cui-primary-base) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      var(--cui-white),
    ),
    "secondary": (
      "base":          var(--cui-gray-200),
      "fg":            light-dark(var(--cui-gray-600), var(--cui-gray-400)),
      "fg-emphasis":   light-dark(var(--cui-gray-800), var(--cui-gray-200)),
      "bg":            light-dark(var(--cui-gray-100), var(--cui-gray-600)),
      "bg-subtle":     light-dark(var(--cui-gray-025), var(--cui-gray-800)),
      "bg-muted":      light-dark(var(--cui-gray-050), var(--cui-gray-700)),
      "border":        light-dark(var(--cui-gray-300), var(--cui-gray-600)),
      "focus-ring":    color-mix(in oklch, light-dark(var(--cui-gray-500), var(--cui-gray-300)) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      light-dark(var(--cui-gray-900), var(--cui-white)),
    ),
    "success": (
      "base":          var(--cui-success-500),
      "fg":            light-dark(var(--cui-success-600), var(--cui-success-400)),
      "fg-emphasis":   light-dark(var(--cui-success-800), var(--cui-success-200)),
      "bg":            var(--cui-success-500),
      "bg-subtle":     light-dark(var(--cui-success-100), var(--cui-success-900)),
      "bg-muted":      light-dark(var(--cui-success-200), var(--cui-success-800)),
      "border":        light-dark(var(--cui-success-300), var(--cui-success-600)),
      "focus-ring":    color-mix(in oklch, var(--cui-success-base) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      var(--cui-white),
    ),
    "info": (
      "base":          var(--cui-info-500),
      "fg":            light-dark(var(--cui-info-700), var(--cui-info-300)),
      "fg-emphasis":   light-dark(var(--cui-info-800), var(--cui-info-200)),
      "bg":            var(--cui-info-500),
      "bg-subtle":     light-dark(var(--cui-info-100), var(--cui-info-900)),
      "bg-muted":      light-dark(var(--cui-info-200), var(--cui-info-800)),
      "border":        light-dark(var(--cui-info-300), var(--cui-info-600)),
      "focus-ring":    color-mix(in oklch, var(--cui-info-base) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      var(--cui-white),
    ),
    "warning": (
      "base":          var(--cui-warning-500),
      "fg":            light-dark(var(--cui-warning-700), var(--cui-warning-300)),
      "fg-emphasis":   light-dark(var(--cui-warning-800), var(--cui-warning-200)),
      "bg":            var(--cui-warning-500),
      "bg-subtle":     light-dark(var(--cui-warning-100), var(--cui-warning-900)),
      "bg-muted":      light-dark(var(--cui-warning-200), var(--cui-warning-800)),
      "border":        light-dark(var(--cui-warning-300), var(--cui-warning-600)),
      "focus-ring":    color-mix(in oklch, var(--cui-warning-base) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      var(--cui-black),
    ),
    "danger": (
      "base":          var(--cui-danger-500),
      "fg":            light-dark(var(--cui-danger-600), var(--cui-danger-400)),
      "fg-emphasis":   light-dark(var(--cui-danger-800), var(--cui-danger-200)),
      "bg":            var(--cui-danger-500),
      "bg-subtle":     light-dark(var(--cui-danger-100), var(--cui-danger-900)),
      "bg-muted":      light-dark(var(--cui-danger-200), var(--cui-danger-800)),
      "border":        light-dark(var(--cui-danger-300), var(--cui-danger-600)),
      "focus-ring":    color-mix(in oklch, var(--cui-danger-base) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      var(--cui-white),
    ),
    "inverse": (
      "base":          var(--cui-gray-900),
      "fg":            light-dark(var(--cui-gray-900), var(--cui-gray-200)),
      "fg-emphasis":   light-dark(var(--cui-black), var(--cui-white)),
      "bg":            light-dark(var(--cui-gray-900), var(--cui-gray-100)),
      "bg-subtle":     light-dark(var(--cui-gray-100), var(--cui-gray-900)),
      "bg-muted":      light-dark(var(--cui-gray-200), var(--cui-gray-700)),
      "border":        light-dark(var(--cui-gray-400), var(--cui-gray-600)),
      "focus-ring":    color-mix(in oklch, light-dark(var(--cui-gray-900), var(--cui-gray-100)) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":      light-dark(var(--cui-white), var(--cui-gray-900)),
    ),
  ),
  $theme-colors
);
```

Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.**

```scss
$grays: () !default;

// stylelint-disable-next-line scss/dollar-variable-default
$grays: defaults(
  (
    "025": gray("025"),
    "050": gray("050"),
    "100": gray("100"),
    "200": gray("200"),
    "300": gray("300"),
    "400": gray("400"),
    "500": gray("500"),
    "600": gray("600"),
    "700": gray("700"),
    "800": gray("800"),
    "900": gray("900"),
    "950": gray("950"),
    "975": gray("975")
  ),
  $grays
);
```

Color opacities are applied through a map consumed by the utilities API, which mixes each color with `transparent` at the requested amount:

```scss
$utilities-text-colors: map.merge(
  theme-color-refs("fg"),
  (
    "black": var(--cui-black),
    "white": var(--cui-white),
    "body": var(--cui-fg-body)
  )
) !default;

$utilities-text-emphasis-colors: theme-color-refs("fg-emphasis", "-emphasis") !default;
```

### Utilities API

Color utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.](https://coreui.io/react/docs/utilities/api/#using-the-api)

```scss
"fg": (
  property: (
    --cui-fg: null,
    color: var(--cui-fg),
  ),
  class: fg,
  values: map.merge(
    map.merge(theme-color-refs("fg"), theme-token-refs($theme-fgs, "fg")),
    (reset: inherit)
  )
),
"fg-emphasis": (
  property: (
    --cui-fg: null,
    color: var(--cui-fg),
  ),
  class: fg-emphasis,
  values: theme-color-refs("fg-emphasis")
),
"fg-contrast": (
  property: (
    --cui-fg: null,
    color: var(--cui-fg),
  ),
  class: fg-contrast,
  values: theme-color-refs("contrast")
),
"fg-opacity": (
  class: fg,
  property: color,
  values: theme-opacity-values(--cui-fg)
),
// deprecated
"text-color": (
  property: (
    --cui-fg: null,
    color: var(--cui-fg),
  ),
  class: text,
  values: map.merge(
    map.merge($utilities-text-colors, $utilities-text-emphasis-colors),
    (
      "body-secondary": var(--cui-fg-2),
      "body-tertiary": var(--cui-fg-3),
      "body-emphasis": var(--cui-emphasis-color),
      "reset": inherit
    )
  )
),
// deprecated
"text-opacity": (
  class: text-opacity,
  property: color,
  values: theme-opacity-values(--cui-fg, null, (25: .25, 50: .5, 75: .75, 100: 1))
),
```
