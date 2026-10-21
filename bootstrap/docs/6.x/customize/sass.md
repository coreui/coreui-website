# Sass

> Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and customize your project.

Utilize our source Sass files to take advantage of variables, maps, mixins, and more.

## File structure

Whenever possible, avoid modifying CoreUI for Bootstrap's core files. For Sass, that means creating your own stylesheet that imports CoreUI for Bootstrap so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a file structure that looks like this:

```text
your-project/
├── scss
│   └── custom.scss
└── node_modules/
    └── @coreui/coreui
        ├── js
        └── scss
```

If you've downloaded our source files and aren't using a package manager, you'll want to manually create something similar to that structure, keeping CoreUI's source files separate from your own.

```text
your-project/
├── scss
│   └── custom.scss
└── @coreui/coreui/
    ├── js
    └── scss
```

## Importing

In your `custom.scss`, you'll load CoreUI's source Sass files with `@use`. You have two options: include all of CoreUI, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.

> v6 is @use only. The *.import.scss files that let @import reach our modules are gone, so an @import of anything in scss/ no longer resolves. @import is deprecated in Dart Sass and is removed in 3.0.0 — read the migration guide if you are still on it.

```scss
// Custom.scss
// Option A: Include all of CoreUI

@use "@coreui/coreui/scss/coreui";

// Then add additional custom code here
```

```scss
// Custom.scss
// Option B: Include parts of CoreUI

// 1. Include root first (configuration, colors, theme tokens, and CSS layers)
@use "@coreui/coreui/scss/root";

// 2. Optionally include any other parts as needed
@use "@coreui/coreui/scss/utilities";
@use "@coreui/coreui/scss/content/reboot";
@use "@coreui/coreui/scss/content/type";
@use "@coreui/coreui/scss/content/images";
@use "@coreui/coreui/scss/layout/containers";
@use "@coreui/coreui/scss/layout/grid";
@use "@coreui/coreui/scss/helpers";

// 3. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@use "@coreui/coreui/scss/utilities/api";

// 4. Add additional custom code here
```

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of CoreUI for Bootstrap under the `// Optional` section as needed. We suggest using the full stack from our `coreui.scss` file as your starting point.

Partials live in the directory named after the cascade layer they emit into, so
`scss/content/`, `scss/layout/`, `scss/forms/` and `scss/buttons/` hold what used
to sit at the root. The [migration guide](https://coreui.io/bootstrap/docs/migration/v6/) maps every old path to
its new one.

The library's configuration is split across four modules, each loadable on its
own: `scss/config` holds the global settings — options, spacing, breakpoints,
borders, shadows, typography, z-index; `scss/colors` the palette and the grays;
`scss/theme` the theme colours, the `$theme-colors` map and the runtime colour
scale; and `scss/root` emits every token on `:root`.

## Compiling

In order to use your custom Sass code as CSS in the browser, you need a Sass compiler. Sass ships as a CLI package, but you can also compile it with other build tools like [Gulp](https://gulpjs.com/) or [Webpack](https://webpack.js.org/), or with a GUI applications. Some IDEs also have Sass compilers built in or as downloadable extensions.

We like to use the CLI to compile our Sass, but you can use whichever method you prefer. From the command line, run the following:

```shell
# Install Sass globally
npm install -g sass

# Watch your custom Sass for changes and compile it to CSS
sass --watch ./scss/custom.scss ./css/custom.css
```

## Including

Once your CSS is compiled, you can include it in your HTML files. Inside your `index.html` you'll want to include your compiled CSS file. Be sure to update the path to your compiled CSS file if you've changed it.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Custom CoreUI for Bootstrap</title>
    <link href="/css/custom.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

## Variable defaults

Every Sass variable in CoreUI for Bootstrap includes the `!default` flag allowing you to override the variable's default value in your own Sass without modifying CoreUI for Bootstrap's source code. Copy and paste variables as needed, modify their values, and remove the `!default` flag. If a variable has already been assigned, then it won't be re-assigned by the default values in Bootstrap.

The global settings live in `scss/_config.scss`, the palette in `scss/_colors.scss`, the theme colours in `scss/_theme.scss`, and each component's variables at the top of its own partial. Some variables are set to `null`, these variables don't output the property unless they are overridden in your configuration.

Variable overrides must come after our functions are imported, but before the rest of the imports.

Here's an example that changes the `background-color` and `color` for the `<body>` when importing and compiling CoreUI for Bootstrap via npm:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $theme-bgs: ("body": #000),
  $theme-fgs: ("body": #111)
)
```

Repeat as necessary for any variable in CoreUI, including the global options below.

## Token defaults

Every CSS custom property the library emits is built from a Sass map you can override the same way: `$color-tokens` holds the palette, `$root-tokens` everything else declared on `:root`, and each component keeps its surface in `$<component>-tokens`. Hand the map your overrides through `with ()` — you only include the keys you want to change, and a `null` value removes the token from the output entirely:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $root-tokens: (
    --cui-radius-5: .25rem,
    --cui-spacer: 1.5rem,
  ),
  $alert-tokens: (
    --cui-alert-padding-x: 2rem,
    --cui-alert-margin-bottom: null,
  )
);
```

The two levels coexist: classic variable overrides like `$alert-padding-y: 2rem` keep working, because the token map's defaults are built from those same variables — the map override just wins when both target one token. And because the output is a CSS custom property, the third level needs no compiler at all: set `--cui-alert-padding-x` on any selector at run time. [Architecture](https://coreui.io/bootstrap/docs/customize/architecture/#component-tokens) walks through when each level is the right one.

## Maps and loops

CoreUI for Bootstrap includes a handful of Sass maps, key value pairs that make it easier to generate families of related CSS. We use Sass maps for our colors, grid breakpoints, and more. Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

Some of our Sass maps are merged into empty ones by default. This is done to allow easy expansion of a given Sass map, but comes at the cost of making _removing_ items from a map slightly more difficult.

### Modify map

Each theme color's base value is a standalone variable. To modify an existing color in our `$theme-colors` map, add the following to your custom Sass file:

```scss
$primary: #0074d9;
$danger: #ff4136;
```

The variable feeds the palette, whose `500` stop the entry in CoreUI for Bootstrap's `$theme-colors` map points its `base` at, and the rest of the entry — the subtle backgrounds, borders and emphasis text — reads the runtime scale mixed from that stop, so overriding the one variable retints the whole family:

```scss
$theme-colors: (
  "primary": (
    "base": var(--cui-primary-500),
    // …the remaining slots read the primary scale
  ),
  "danger": (
    "base": var(--cui-danger-500),
    // …
  ),
);
```

### Add to map

Add new colors to `$theme-colors`, or any other map, through `with ()`: `defaults()` merges your entries on top of the built-ins, so you pass only what you add. A theme colour entry is a map of slots that read one hue of the palette: add the hue to `$colors`, point `base` and `bg` at its `500` stop, and the remaining slots at the 025–975 scale the library mixes from it at runtime, the same way the built-in colours do.

```scss
@use "@coreui/coreui/scss/coreui" with (
  $colors: (
    "custom-color": #900,
  ),
  $theme-colors: (
    "custom-color": (
      "base":        var(--cui-custom-color-500),
      "fg":          light-dark(var(--cui-custom-color-600), var(--cui-custom-color-400)),
      "fg-emphasis": light-dark(var(--cui-custom-color-800), var(--cui-custom-color-200)),
      "bg":          var(--cui-custom-color-500),
      "bg-subtle":   light-dark(var(--cui-custom-color-100), var(--cui-custom-color-900)),
      "bg-muted":    light-dark(var(--cui-custom-color-200), var(--cui-custom-color-800)),
      "border":      light-dark(var(--cui-custom-color-300), var(--cui-custom-color-600)),
      "focus-ring":  color-mix(in oklch, var(--cui-custom-color-500) calc(var(--cui-focus-ring-opacity) * 100%), transparent),
      "contrast":    var(--cui-white),
    ),
  )
);
```

The merge is one level deep: to change one slot of a built-in colour, pass that colour's whole sub-map.

### Remove from map

To remove colors from `$theme-colors`, or any other map, set the key to `null` — `defaults()` drops it from the output, and the derived `$theme-colors-*` families follow, because they are read from the merged map:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $theme-colors: (
    "info": null,
  )
);
```

### Size maps

Components with size modifiers declare them in a `$<component>-sizes` map, written as a plain list — `defaults()` turns it into a map where every key is `true`:

```scss
$pagination-sizes: defaults(
  ("sm", "lg"),
  $pagination-sizes
);
```

A loop then emits one modifier class per key:

```scss
@each $size, $_ in $pagination-sizes {
  .pagination-#{$size} {
    --cui-pagination-min-height: var(--cui-btn-input-#{$size}-min-height);
    --cui-pagination-padding-y: var(--cui-btn-input-#{$size}-padding-y);
    --cui-pagination-padding-x: var(--cui-btn-input-#{$size}-padding-x);
    --cui-pagination-font-size: var(--cui-btn-input-#{$size}-font-size);
    --cui-pagination-border-radius: var(--cui-btn-input-#{$size}-border-radius);
  }
}
```

Removing a size you don't ship is one `null`:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $pagination-sizes: ("sm": null)
);
```

Adding a key generates the class, but the class is only as good as the tokens it reads — here `--cui-btn-input-<size>-*` — so a new size also needs those tokens declared. Removing is the everyday operation; adding is a design-system extension.

### Variant maps

Style variants follow the same pattern in `$<component>-variants`: each entry names a variant and maps CSS properties to [theme slots](https://coreui.io/bootstrap/docs/customize/theme/):

```scss
$alert-variants: defaults(
  (
    "solid": (
      "color": "contrast",
      "bg": "bg",
      "border-color": "bg"
    )
  ),
  $alert-variants
);
```

The loop turns every entry into a `.{component}-{variant}` class that re-points the component's tokens at the slots:

```scss
@each $variant, $properties in $alert-variants {
  .alert-#{$variant} {
    @each $property, $value in $properties {
      @if $value == "transparent" {
        --cui-alert-#{$property}: transparent;
      } @else {
        --cui-alert-#{$property}: var(--cui-theme-#{$value});
      }
    }

    --cui-hr-border-color: var(--cui-theme-border, currentcolor);

    @each $property, $value in $properties {
      @if $property == "bg" {
        background-color: var(--cui-alert-bg);
      } @else {
        #{$property}: var(--cui-alert-#{$property});
      }
    }
  }
}
```

Add your own variant by merging an entry — the value side names a `--cui-theme-*` slot, so the variant follows every theme color automatically:

```scss
@use "@coreui/coreui/scss/coreui" with (
  $alert-variants: (
    "outline": (
      "color": "fg",
      "bg": "transparent",
      "border-color": "border"
    )
  )
);
```

Button variants use a richer, nested shape (`base` / `hover` / `active` states per variant) — see the `btn-variants` block in `scss/mixins/_button.scss` for the reference.

## Required keys

CoreUI for Bootstrap assumes the presence of some specific keys within Sass maps as we used and extend these ourselves. As you customize the included maps, you may encounter errors where a specific Sass map's key is being used.

For example, we use the `primary`, `success`, and `danger` keys from `$theme-colors` for links, buttons, and form states. Replacing the values of these keys should present no issues, but removing them may cause Sass compilation issues. In these instances, you'll need to modify the Sass code that makes use of those values.

## Functions

### Defaults

`defaults()` is the merge behind every overridable map on this page — token maps, size maps, variant maps. It layers your overrides on top of the library's defaults, drops every key whose value is `null` (a `null` variable interpolated into a map arrives as an empty string and is dropped the same way), and accepts a plain list as the defaults (each item becomes a key set to `true`, which is how the size maps are written):

```scss
// Merge overrides on top of defaults, stripping null and empty entries.
// Null values let users remove map keys via @use ... with().
// Accepts a list as $defaults (converted to a map with `true` values).
@function defaults($defaults, $overrides) {
  @if meta.type-of($defaults) == "list" {
    $map: ();
    @each $key in $defaults {
      $map: map.merge($map, ($key: true));
    }
    $defaults: $map;
  }
  $merged: map.merge($defaults, $overrides);
  @each $key, $value in $merged {
    @if $value == null or $value == "" {
      $merged: map.remove($merged, $key);
    }
  }
  @return $merged;
}
```

That one function is why `with ()` overrides are always partial — you pass only what changes — and why `null` is the removal syntax everywhere.

### Colors

Next to the [Sass maps](https://coreui.io/bootstrap/docs/customize/color/#color-sass-maps) we have, theme colors can also be used as standalone variables, like `$primary`.

```scss
.custom-element {
  color: $gray-100;
  background-color: $gray-900;
}
```

You can lighten or darken colors with CoreUI for Bootstrap's `tint-color()` and `shade-color()` functions. These functions will mix colors with black or white, unlike Sass' native `lighten()` and `darken()` functions which will change the lightness by a fixed amount, which often doesn't lead to the desired effect.

```scss
// Tint a color: mix a color with white
@function tint-color($color, $weight) {
  @return color.mix(white, $color, $weight, rgb);
}

// Shade a color: mix a color with black
@function shade-color($color, $weight) {
  @return color.mix(black, $color, $weight, rgb);
}

// Shade the color if the weight is positive, else tint it
@function shift-color($color, $weight) {
  @if $weight > 0 {
    @return shade-color($color, $weight);
  } @else {
    @return tint-color($color, -$weight);
  }
}
```

In practice, you'd call the function and pass in the color and weight parameters.

```scss
@use "@coreui/coreui/scss/functions/color" as *;

.custom-element {
  color: tint-color($primary, 10%);
}

.custom-element-2 {
  color: shade-color($danger, 30%);
}

.custom-element-3 {
  color: shift-color($success, 40%);
  background-color: shift-color($success, -60%);
}
```

### Color contrast

In order to meet the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG/) contrast requirements, authors **must** provide a minimum [text color contrast of 4.5:1](https://www.w3.org/TR/WCAG/#contrast-minimum) and a minimum [non-text color contrast of 3:1](https://www.w3.org/TR/WCAG/#non-text-contrast), with very few exceptions.

An additional function we include in CoreUI for Bootstrap is the color contrast function, `color-contrast`. It utilizes the [WCAG 2.0 algorithm](https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests) for calculating contrast thresholds based on [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance) in a `sRGB` colorspace to automatically return a light (`#fff`), dark (`#212529`) or black (`#000`) contrast color based on the specified base color. This function is especially useful for mixins or loops where you're generating multiple classes.

```scss
@function color-contrast($background, $color-contrast-dark: $color-contrast-dark, $color-contrast-light: $color-contrast-light, $min-contrast-ratio: $min-contrast-ratio) {
  $foregrounds: $color-contrast-light, $color-contrast-dark, #fff, #000;
  $max-ratio: 0;
  $max-ratio-color: null;

  @each $color in $foregrounds {
    $contrast-ratio: contrast-ratio($background, $color);
    @if $contrast-ratio >= $min-contrast-ratio {
      @return $color;
    } @else if $contrast-ratio > $max-ratio {
      $max-ratio: $contrast-ratio;
      $max-ratio-color: $color;
    }
  }

  @warn "Found no color leading to #{$min-contrast-ratio}:1 contrast ratio against #{$background}...";

  @return $max-ratio-color;
}
```

For example, to generate color swatches from our `$theme-colors` map:

```scss
@use "@coreui/coreui/scss/functions/color-contrast" as *;

@each $color, $value in $theme-colors {
  .swatch-#{$color} {
    color: color-contrast($value);
  }
}
```

It can also be used for one-off contrast needs:

```scss
@use "@coreui/coreui/scss/functions/color-contrast" as *;

.custom-element {
  color: color-contrast(#000); // returns `color: #fff`
}
```

You can also specify a base color with our color map functions:

```scss
@use "@coreui/coreui/scss/functions/color-contrast" as *;

.custom-element {
  color: color-contrast($gray-900); // returns `color: #fff`
}
```

### Escape SVG

We use the `escape-svg` function to escape the `<`, `>` and `#` characters for SVG background images. When using the `escape-svg` function, data URIs must be quoted.

### Map helpers

The theme system keeps its definitions nested — one entry per color, holding every slot. `map-get-nested()` flattens that for consumers that want a single family across all colors:

```scss
@function map-get-nested($map, $key) {
  $result: ();
  @each $name, $values in $map {
    @if meta.type-of($values) == "map" and map.has-key($values, $key) {
      $result: map.merge($result, ($name: map.get($values, $key)));
    }
  }
  @return $result;
}
```

```scss
@use "@coreui/coreui/scss/functions/maps" as *;
@use "@coreui/coreui/scss/theme" as *;

$subtle-backgrounds: map-get-nested($theme-colors, "bg-subtle");
// => ("primary": …, "secondary": …, "success": …, …)
```

Entries without the key are skipped, so a color that drops a slot drops out of the family rather than landing in it as `null`. For the `:root` token behind a slot rather than a copy of its value, reach for `theme-color-refs()` instead — that is what the utilities read.

`scss/functions/maps` also carries `map-get-multiple()` (pick several keys) and `map-merge-multiple()` (merge several maps).

## Mixins

Our `scss/mixins/` directory has a ton of mixins that power parts of CoreUI for Bootstrap and can also be used across your own project.

Two of the mixins you are most likely to reach for are documented elsewhere, next to the systems they belong to: `tokens()`, which turns a token map into custom properties on a class, in [Architecture](https://coreui.io/bootstrap/docs/customize/architecture/#component-tokens), and the theme class generator in [Theme](https://coreui.io/bootstrap/docs/customize/theme/#theme-classes).

### Color schemes

A shorthand mixin for the `prefers-color-scheme` media query is available with support for `light`, `dark`, and custom color schemes.

```scss
@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}
```

```scss
@use "@coreui/coreui/scss/mixins/color-scheme" as *;

.custom-element {
  @include color-scheme(light) {
    // Insert light mode styles here
  }

  @include color-scheme(dark) {
    // Insert dark mode styles here
  }
}
```

### Mask icons

An icon carried as a `background-image` paints the colour baked into the SVG, so it cannot follow a theme. `mask-icon()` renders the shape through a CSS mask instead, which paints it with the element's `background-color` — so the icon takes whatever token that property reads.

```scss
@mixin mask-icon($icon: null, $size: contain, $position: center) {
  @if $icon != null {
    mask-image: $icon;
  }
  mask-repeat: no-repeat;
  @if $position != null {
    mask-position: $position;
  }
  @if $size != null {
    mask-size: $size;
  }
}
```

```scss
@use "@coreui/coreui/scss/mixins/mask-icon" as *;

.my-toggle {
  @include mask-icon(url("data:image/svg+xml,…"));
  background-color: var(--cui-theme-fg, var(--cui-fg-2));
}
```

Pass `null` for the icon when the shape is applied conditionally — per state, or per direction — and set `mask-image` in the branch that needs it.
