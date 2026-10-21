# Color

> CoreUI for React is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.

## Colors

_Added in 5.0.0._

The palette below covers two different jobs. `secondary` and `tertiary` text and background colors describe **surfaces** — the page, its dividers, its disabled states. The `{color}-bg-subtle`, `{color}-border`, and `{color}-fg-emphasis` sets are **tinted variants of the theme colors**, so that a single theme color can carry a background, a border, and a readable text tone that all shift together between color modes.

All of them are declared globally on `:root` and are available through Sass and CSS variables (but not through our color maps or utility classes).

Each family is generated, not hand-listed: one base token per color, and the `100`–`900` steps mixed from it with `color-mix()`. The mix names the base token rather than its value, so **overriding `--cui-primary` retints its whole scale in the browser** — no rebuild, both color schemes at once. [Notes on Sass](#notes-on-sass) covers the stops and the mixing space, and [Architecture](https://coreui.io/react/docs/customize/architecture/) shows where this sits relative to the theme and component tokens.

To fade any of these colors, mix it toward `transparent` rather than reaching for a channel triplet — `color-mix(in srgb, var(--cui-bg-4) 50%, transparent)`.

**Heads up!** The surface colors and the theme colors overlap in name without overlapping in purpose: `--cui-secondary-color` is body text at a lighter weight, while `--cui-secondary` is the theme color that `.btn-secondary` and friends are built from. The same split applies to `light` and `dark`.

<table class="table table-swatches">
  <thead>
    <tr>
      <th style="width: 340px;">Description</th>
      <th style="width: 200px;" class="ps-0">Swatch</th>
      <th>Variables</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        **Body —** Default foreground (color) and background, including components.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2" style="background-color: var(--cui-body-color);">&nbsp;</div>
      </td>
      <td>
        `--cui-body-color`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2 border" style="background-color: var(--cui-body-bg);">&nbsp;</div>
      </td>
      <td>
        `--cui-body-bg`
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        **Secondary —** Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2" style="background-color: var(--cui-secondary-color);">&nbsp;</div>
      </td>
      <td>
        `--cui-secondary-color`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2 border" style="background-color: var(--cui-bg-4);">&nbsp;</div>
      </td>
      <td>
        `--cui-bg-4`
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        **Tertiary —** Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2" style="background-color: var(--cui-tertiary-color);">&nbsp;</div>
      </td>
      <td>
        `--cui-tertiary-color`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2 border" style="background-color: var(--cui-tertiary-bg);">&nbsp;</div>
      </td>
      <td>
        `--cui-tertiary-bg`
      </td>
    </tr>
    <tr>
      <td>
        **Emphasis —** For higher contrast text. Not applicable for backgrounds.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2" style="background-color: var(--cui-emphasis-color);">&nbsp;</div>
      </td>
      <td>
        `--cui-emphasis-color`
      </td>
    </tr>
    <tr>
      <td>
        **Border —** For component borders, dividers, and rules. Use `--cui-border-color-translucent` to blend with backgrounds with an `rgba()` value.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2" style="background-color: var(--cui-border-color);">&nbsp;</div>
      </td>
      <td>
        `--cui-border-color`
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        **Primary —** Main theme color, used for hyperlinks, focus styles, and component and form active states.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2 bg-primary">&nbsp;</div>
      </td>
      <td>
        `--cui-primary`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="background-color: var(--cui-primary-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        `--cui-primary-bg-subtle`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="border: 5px var(--cui-primary-border) solid">&nbsp;</div>
      </td>
      <td>
        `--cui-primary-border`
      </td>
    </tr>
    <tr>
      <td>
        <div class="py-4 fw-bold h5" style="color: var(--cui-primary-fg-emphasis)">Text</div>
      </td>
      <td>
        `--cui-primary-fg-emphasis`
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        **Success —** Theme color used for positive or successful actions and information.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2 bg-success">&nbsp;</div>
      </td>
      <td>
        `--cui-success`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="background-color: var(--cui-success-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        `--cui-success-bg-subtle`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="border: 5px var(--cui-success-border) solid">&nbsp;</div>
      </td>
      <td>
        `--cui-success-border`
      </td>
    </tr>
    <tr>
      <td>
        <div class="py-4 fw-bold h5" style="color: var(--cui-success-fg-emphasis)">Text</div>
      </td>
      <td>
        `--cui-success-fg-emphasis`
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        **Danger —** Theme color used for errors and dangerous actions.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2 bg-danger">&nbsp;</div>
      </td>
      <td>
        `--cui-danger`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="background-color: var(--cui-danger-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        `--cui-danger-bg-subtle`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="border: 5px var(--cui-danger-border) solid">&nbsp;</div>
      </td>
      <td>
        `--cui-danger-border`
      </td>
    </tr>
    <tr>
      <td>
        <div class="py-4 fw-bold h5" style="color: var(--cui-danger-fg-emphasis)">Text</div>
      </td>
      <td>
        `--cui-danger-fg-emphasis`
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        **Warning —** Theme color used for non-destructive warning messages.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2 bg-warning">&nbsp;</div>
      </td>
      <td>
        `--cui-warning`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="background-color: var(--cui-warning-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        `--cui-warning-bg-subtle`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="border: 5px var(--cui-warning-border) solid">&nbsp;</div>
      </td>
      <td>
        `--cui-warning-border`
      </td>
    </tr>
    <tr>
      <td>
        <div class="py-4 fw-bold h5" style="color: var(--cui-warning-fg-emphasis)">Text</div>
      </td>
      <td>
        `--cui-warning-fg-emphasis`
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        **Info —** Theme color used for neutral and informative content.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2 bg-info">&nbsp;</div>
      </td>
      <td>
        `--cui-info`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="background-color: var(--cui-info-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        `--cui-info-bg-subtle`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="border: 5px var(--cui-info-border) solid">&nbsp;</div>
      </td>
      <td>
        `--cui-info-border`
      </td>
    </tr>
    <tr>
      <td>
        <div class="py-4 fw-bold h5" style="color: var(--cui-info-fg-emphasis)">Text</div>
      </td>
      <td>
        `--cui-info-fg-emphasis`
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        **Inverse —** Theme color that flips with the color scheme, for surfaces meant to stand against the page.
      </td>
      <td class="ps-0">
        <div class="p-4 rounded-2 bg-inverse">&nbsp;</div>
      </td>
      <td>
        `--cui-inverse`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="background-color: var(--cui-inverse-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        `--cui-inverse-bg-subtle`
      </td>
    </tr>
    <tr>
      <td>
        <div class="p-4 rounded-2" style="border: 5px var(--cui-inverse-border) solid">&nbsp;</div>
      </td>
      <td>
        `--cui-inverse-border`
      </td>
    </tr>
    <tr>
      <td>
        <div class="py-4 fw-bold h5" style="color: var(--cui-inverse-fg-emphasis)">Text</div>
      </td>
      <td>
        `--cui-inverse-fg-emphasis`
      </td>
    </tr>
  </tbody>
</table>

### Using the colors

These colors are accessible via CSS variables and utility classes—like `--cui-primary-bg-subtle` and `.bg-subtle-primary`—allowing you to compose your own CSS rules with the variables, or to quickly apply styles via classes. The utilities are built with the color's associated CSS variables, and since we customize those CSS variables for dark mode, they are also adaptive to color mode by default.

```html
<div className="p-4 fg-emphasis-primary bg-subtle-primary border border-subtle-primary rounded-3">
  Example element with utilities
</div>
```

## Theme colors

We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in CoreUI's `scss/_theme.scss` file.

<div class="row">
  {getData('theme-colors').map((c) => (
    <div class="col-md-4">
      <div class={`p-4 mb-4 text-bg-${c.name} rounded-3`}>{c.title}</div>
    </div>
  ))}
</div>

All these colors are available as a Sass map, `$theme-colors`.

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

Check out [our Sass maps and loops docs](https://coreui.io/react/docs/customize/sass/#maps-and-loops) for how to modify these colors.

## From colors to theme

The `--cui-{color}-{stop}` tokens are the palette: one scale per theme color and the neutral ramp. On their own they style nothing — the **theme layer** reads them, where each color picks up semantic slots and every theme-aware component follows. The pipeline, end to end:

1. **`$colors`** (`scss/_colors.scss`) defines the base hues, and each one gets a 100–900 scale of `color-mix()` tokens on `:root` — `--cui-primary-300` and friends, mixed in the browser from the color's own token.
2. **`$theme-colors`** (`scss/_theme.scss`) maps each semantic name to a family of slots (`base`, `bg`, `contrast`, `fg`, `fg-emphasis`, `bg-subtle`, `bg-muted`, `border`, `focus-ring`). `base` and `bg` point at one stop of a hue — `primary` reads `var(--cui-primary-500)` — and the other slots read that hue's scale through `light-dark()`, so every slot adapts to the color mode.
3. The slots are emitted as **`--cui-{name}-{slot}`** tokens — `--cui-primary-bg-subtle` — the ones the table at the top of this page shows.
4. **`.theme-{name}`** classes remap them onto generic **`--cui-theme-{slot}`** tokens that components read — so one class restyles any theme-aware component, and overriding `--cui-primary-500` alone retints the whole family.

The theme layer — the slots, the runtime scale, the classes — is documented in full on [Theme](https://coreui.io/react/docs/customize/theme/), and the mechanics of the slot indirection on [Architecture](https://coreui.io/react/docs/customize/architecture/#theme-slots). The rest of this page stays on the base color layer.

## All colors

The palette is the five chromatic theme colors and the neutral ramp, available as Sass variables and a Sass map in `scss/_colors.scss`. Each gets a 025–975 scale of tokens; the [theme layer](#theme-colors) reads them, and the utilities read the theme layer, so there is no separate set of hue classes to keep in step.

Be sure to monitor contrast ratios as you customize colors. As shown below, we've added three contrast ratios to each of the main colors—one for the swatch's current colors, one for against white, and one for against black.

<div class="row font-monospace">
  {getData('colors').map((color) => {
    if (color.name !== 'white' && color.name !== 'gray' && color.name !== 'gray-dark') {
      return (
        <div class="col-md-4 mb-4">
          <div class={`p-4 mb-3 position-relative swatch-${color.name}`}>
            <strong class="d-block">${color.name}</strong>
            {color.hex}
          </div>
          {getSequence(100, 900, 100).map((value) => (
            <div class={`p-4 docs-${color.name}-${value}`}>${color.name}-{value}</div>
          ))}
        </div>
      )
    }
  })}

  <div class="col-md-4 mb-4">
    <div class="p-4 mb-3 position-relative swatch-gray-500">
      <strong class="d-block">$gray-500</strong>
      #aab3c5
    </div>
    {getData('grays').map((gray) => (
      <div class={`p-4 docs-gray-${gray.name}`}>$gray-{gray.name}</div>
    ))}
  </div>

  <div class="col-md-4 mb-4">
    <div class="p-4 mb-3 docs-black fg-white">
      <strong class="d-block">$black</strong>
      #000
    </div>
    <div class="p-4 mb-3 docs-white border">
      <strong class="d-block">$white</strong>
      #fff
    </div>
  </div>
</div>

### Notes on Sass

The tints and shades are not Sass variables any more. Every palette color gets
a 025–975 scale of `color-mix()` custom properties on `:root`, mixed in the
browser from its `500` stop — override `--cui-primary-500` and the whole family
follows, in both color schemes. See
[the theme colors page](https://coreui.io/react/docs/customize/theme/).

`tint-color()` and `shade-color()` still exist in `scss/functions/_color.scss` for
Sass-side blending. They use `mix()`, which is not the same as `lighten()` and
`darken()`: the former blends the color with white or black, the latter only
adjusts its lightness value.

## Color Sass maps

CoreUI's source Sass files include three maps to help you quickly and easily loop over a list of colors and their values.

- `$colors` lists all our available base (`500`) colors
- `$theme-colors` lists all semantically named theme colors (shown below)
- `$grays` lists all tints and shades of gray

Within `scss/_colors.scss`, you'll find CoreUI's color variables and Sass map. Here's an example of the `$colors` Sass map:

```scss
$colors: () !default;

// stylelint-disable-next-line scss/dollar-variable-default
$colors: defaults(
  (
    "primary":    $primary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "gray":       $gray
  ),
  $colors
);
```

Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not _every_ component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map.

### Example

Here's how you can use these in your Sass:

```scss
@use "@coreui/coreui/scss/colors" as *;

.alpha { color: $purple; }
.beta {
  color: $warning;
  background-color: $gray-900;
}
```

The numbered shades — `$yellow-300`, `$indigo-900` and the rest — are gone in v6.
Each theme color gets its 100–900 scale as `color-mix()` tokens on `:root`
instead, so read `var(--cui-primary-300)` where you used to write
`$blue-300`. See [the theme colors page](https://coreui.io/react/docs/customize/theme/).

[Color](https://coreui.io/react/docs/utilities/colors/) and [background](https://coreui.io/react/docs/utilities/background/) utility classes are also available for setting `color` and `background-color` using the `500` color values.

## Generating utilities

_Added in 4.1.0._

We don't ship `color` and `background-color` utilities for every color in the
palette, but you can generate them with the [utility API](https://coreui.io/react/docs/utilities/api/).

1. Load the color maps and the utilities module in a partial.
2. Use our `map-merge-multiple()` function to merge several maps into one.
3. Merge that map into the `values` of any utility group.

Here's an example that generates text color utilities for every palette color and
every theme color's emphasis tone (e.g., `.text-purple`, `.fg-success`).

```scss
// _my-colors.scss
@use "sass:map";
@use "@coreui/coreui/scss/functions/maps" as *;
@use "@coreui/coreui/scss/colors" as *;
@use "@coreui/coreui/scss/theme" as *;
@use "@coreui/coreui/scss/utilities" as *;

$all-colors: map-merge-multiple($colors, map-get-nested($theme-colors, "fg-emphasis"));

$utilities: map.merge(
  $utilities,
  (
    "color": map.merge(
      map.get($utilities, "color"),
      (
        values: map.merge(
          map.get(map.get($utilities, "color"), "values"),
          $all-colors,
        ),
      ),
    ),
  )
);
```

Load the partial before the library, so the merged map is in place when the
utilities API runs:

```scss
// my-coreui.scss
@use "my-colors";
@use "@coreui/coreui/scss/coreui";
```

This will generate new `.text-{color}-{level}` utilities for every color and level. You can do the same for any other utility and property as well.
