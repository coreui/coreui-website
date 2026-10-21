# Theme

> The theme is a set of semantically named colors, each carrying a full family of slots, used to style components, utilities, and more. It is configurable via Sass or CSS and responds to color modes.

## How it works

Theme colors are defined in the `$theme-colors` map in `scss/_theme.scss`. Each entry is a **map of slots** — one semantic name carries the solid color, its contrast color, the readable foregrounds, the subtle and muted backgrounds, the border, and the focus ring, for both light and dark mode via `light-dark()`.

From this one map the library generates:

- a `--cui-{color}-{slot}` custom property per slot on `:root`,
- a `-base` token per color that points at the palette stop it reads (`--cui-primary-base` → `--cui-primary-500`), so the palette's 025–975 runtime scale is the color's scale,
- a [`.theme-{color}` class](#theme-classes) per entry,
- the color variants of themeable components and the `.text-*`, `.bg-*`, and `.border-*` utilities.

## Theme colors

| Theme color | Default value | Description |
| --- | --- | --- |
| `primary` | `oklch(52.945% 0.19103 278.34)` | Main brand color for primary actions |
| `secondary` | `var(--cui-gray-200)` | Less prominent actions and states |
| `success` | `oklch(61.237% 0.17298 146.95)` | Positive actions and successful states |
| `info` | `oklch(67.55% 0.17646 252.26)` | Informational messages and neutral states |
| `warning` | `oklch(80.791% 0.16473 78.5)` | Cautionary messages and states |
| `danger` | `oklch(63.864% 0.18175 23.81)` | Destructive actions and error states |
| `inverse` | `var(--cui-gray-900)` | Surfaces that flip against the page, e.g. a dark bar on a light page |

The five chromatic colors are entries of the [palette](https://coreui.io/vue/docs/customize/color/#all-colors) under the same name: `base` and `bg` read `--cui-primary-500`, and the rest of the slots read that scale. Override `$primary`, or the `--cui-primary-500` token at run time, and the whole family retints. `secondary` and `inverse` read gray stops: their `base` is one stop, and their `bg` flips between the schemes.

## Color slots

Every entry defines the same slots, emitted as `--cui-{color}-{slot}` on `:root`:

| Slot | Emitted token | Description |
| --- | --- | --- |
| `base` | `--cui-primary-base` | The color itself, e.g. a solid button background. There is no bare `--cui-primary`: the slot is the token, and every utility and component reads it |
| `fg` | `--cui-primary-fg` | The color readable as text, one step lighter than the emphasis |
| `fg-emphasis` | `--cui-primary-fg-emphasis` | High-contrast foreground text |
| `bg` | `--cui-primary-bg` | The action-background slot: what checked, active and filled states read; the same stop as `base` for the hues, a `light-dark()` pair for `secondary` and `inverse` |
| `bg-subtle` | `--cui-primary-bg-subtle` | Subtle background tint for low-emphasis surfaces |
| `bg-muted` | `--cui-primary-bg-muted` | Muted background, between subtle and solid |
| `border` | `--cui-primary-border` | Border color |
| `focus-ring` | `--cui-primary-focus-ring` | The hue the color's focus ring mixes from |
| `contrast` | `--cui-primary-contrast` | Text and icons sitting on the solid base |

The slot values are `light-dark()` pairs of stops from the runtime scale, so a theme color reads correctly in both color modes without a second set of definitions:

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

### Pairings

The slots are not interchangeable — each foreground is tuned against a particular background, so a legible combination is one of these:

- `contrast` on `bg` — text and icons on the solid color
- `fg` on `bg-subtle` — the everyday tinted panel
- `fg-emphasis` on `bg-muted` — the heavier panel, where the foreground has to work harder
- `border` with either `bg-subtle` or `bg-muted`

```html
<div class="theme-primary vstack gap-4">
  <div class="p-4 rounded-3" style="color: var(--cui-theme-contrast); background: var(--cui-theme-bg);">
    contrast on bg
  </div>
  <div class="p-4 rounded-3" style="color: var(--cui-theme-fg); background: var(--cui-theme-bg-subtle); border: 1px solid var(--cui-theme-border);">
    fg on bg-subtle
  </div>
  <div class="p-4 rounded-3" style="color: var(--cui-theme-fg-emphasis); background: var(--cui-theme-bg-muted); border: 1px solid var(--cui-theme-border);">
    fg-emphasis on bg-muted
  </div>
</div>
```

Reading a foreground against a background it was not paired with is where contrast falls apart: `fg` sits close to `bg-muted`, and `contrast` is built for the solid `bg` alone — on any tinted surface it disappears.

## The runtime scale

Every palette color gets a 025–975 scale of `color-mix()` tokens, mixed at runtime from its `500` stop. Override `--cui-primary-500` (or `$primary`) and the whole family — subtle backgrounds, borders, emphasis text — follows, in both color schemes:

```scss
$color-mix-space: oklch !default;
$tint-color:      var(--cui-white) !default;
$shade-color:     var(--cui-black) !default;
```

```scss
$color-tints: () !default;

// stylelint-disable-next-line scss/dollar-variable-default
$color-tints: defaults(
  (
    "025": 94%,
    "050": 90%,
    "100": 80%,
    "200": 60%,
    "300": 40%,
    "400": 20%
  ),
  $color-tints
);

$color-shades: () !default;

// stylelint-disable-next-line scss/dollar-variable-default
$color-shades: defaults(
  (
    "600": 16%,
    "700": 32%,
    "800": 48%,
    "900": 64%,
    "950": 70%,
    "975": 76%
  ),
  $color-shades
);
```

```css
:root {
  --cui-primary-500: #6f42c1; /* the scale, the slots and every component follow */
}
```

## Theme classes

A `.theme-{color}` class is generated for every key of `$theme-colors`. It sets the generic `--cui-theme-*` tokens that themeable components read — see [the theme variants section](https://coreui.io/vue/docs/customize/components/#theme-variants) for the token table and how components consume them. Every themeable Vue component renders the class through its `theme` prop, e.g. `<CBadge theme="danger">`.

```scss
@mixin generate-theme-classes() {
  @each $state in map.keys($theme-colors) {
    .theme-#{$state} {
      @include theme-tokens($state);
    }
  }

  @include generate-theme-reset();
}
```

Because the tokens are ordinary custom properties, they inherit: put a `.theme-*` class on a container and every themeable component inside follows it. Components read the slots on the property and fall back to their own tokens, so under a theme class the theme wins over a component token set on the element; a variant class such as `.btn-solid` or `.alert-solid` maps its tokens to the slots, so there the component token is still the override point. To recolor one themed element, set the slot itself (`--cui-theme-bg-subtle`, `--cui-theme-bg`, …).

```html
<div class="theme-primary d-flex gap-3 align-items-center">
  <CBadge>Regional</CBadge>
  <CBadge theme="danger">Local override</CBadge>
</div>
```

## Adding a theme color

A new theme color is a hue in `$colors` and one entry in the map. The hue gets its runtime scale, and the entry points the slots at it; the library generates the tokens and the `.theme-*` class:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $theme-colors: (
    "brand": (
      "base":        var(--cui-brand-500),
      "fg":          light-dark(var(--cui-brand-600), var(--cui-brand-400)),
      "fg-emphasis": light-dark(var(--cui-brand-800), var(--cui-brand-200)),
      "bg":          var(--cui-brand-500),
      "bg-subtle":   light-dark(var(--cui-brand-100), var(--cui-brand-900)),
      "bg-muted":    light-dark(var(--cui-brand-200), var(--cui-brand-800)),
      "border":      light-dark(var(--cui-brand-300), var(--cui-brand-600)),
      "focus-ring":  color-mix(in oklch, var(--cui-brand-500) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":    var(--cui-white),
    ),
  )
);
```

Each theme color is a nested map and the merge is one level deep: pass the whole sub-map to change a built-in color, and set a color to `null` to remove it.

For a runtime-only brand — no Sass compilation — set the generic tokens on a container instead, as shown in [the theme variants section](https://coreui.io/vue/docs/customize/components/#theme-variants).

## Theme utilities

Four style utilities pair a themed surface with its matching text color — compose them with any `.theme-{color}` class to color arbitrary markup the same way the components do. The full reference, with every pairing per color, lives on [the theme utilities page](https://coreui.io/vue/docs/utilities/theme/):

```scss
// Theme style utilities — pair with .theme-{color} to apply coordinated
// background and text colors
"theme-contrast": (
  property: (
    "background-color": var(--cui-theme-bg),
    "color": var(--cui-theme-contrast)
  ),
  class: theme-contrast,
  values: (null: null)
),
"theme-subtle": (
  property: (
    "background-color": var(--cui-theme-bg-subtle),
    "color": var(--cui-theme-fg)
  ),
  class: theme-subtle,
  values: (null: null)
),
"theme-muted": (
  property: (
    "background-color": var(--cui-theme-bg-muted),
    "color": var(--cui-theme-fg-emphasis)
  ),
  class: theme-muted,
  values: (null: null)
),
"theme-border": (
  property: border,
  class: theme-border,
  values: (null: var(--cui-border-width) solid var(--cui-theme-border))
),
```

```html
<div class="theme-success d-flex flex-column gap-3">
  <div class="theme-contrast p-3 rounded">Solid surface with contrast text</div>
  <div class="theme-subtle p-3 rounded">Subtle surface with readable text</div>
  <div class="theme-muted p-3 rounded">Muted surface with emphasis text</div>
  <div class="theme-border p-3 rounded">Themed border</div>
</div>
```

## Customizing

### CSS variables

Each theme class carries its own interaction shades, computed from the color in the browser, so a component asking for "this color, one step darker" reads a token instead of recomputing it. How far a shade travels is set on `:root`, which makes the strength of every hover and active state one override, on the page or on a subtree.

```scss
--cui-theme-hover-lightness: .85,
--cui-theme-hover-chroma: 1.1,
--cui-theme-active-lightness: .8,
--cui-theme-active-chroma: 1.15,
```

### Sass maps

The slots of a theme color are the contract between its `.theme-*` class and the components reading it: every slot of the entry becomes a `--cui-theme-{slot}` token on the class, and `.theme-reset` clears the union of them. Add a slot to an entry and its class gains that token.

A color that is already dark brightens instead of darkening, which no single multiplier handles. `$theme-state-colors` is the escape hatch: name a theme color and give its `hover` and `active` values outright, and the multipliers above are skipped for it.

```scss
$theme-state-colors: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$theme-state-colors: defaults(
  (
    "secondary": (
      "hover":  light-dark(var(--cui-gray-200), var(--cui-gray-700)),
      "active": light-dark(var(--cui-gray-300), var(--cui-gray-800))
    ),
    "inverse": (
      "hover":  light-dark(var(--cui-gray-800), var(--cui-gray-200)),
      "active": light-dark(var(--cui-gray-700), var(--cui-gray-300))
    )
  ),
  $theme-state-colors
);
```
