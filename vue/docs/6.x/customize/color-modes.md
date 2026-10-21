# Color modes

> CoreUI for Vue supports color modes, or themes. Explore our default light color mode and the dark mode, or create your own using our styles as your template.

## Dark mode

**CoreUI for Vue supports color modes, starting with dark mode!** You can implement your own color mode toggler (see below for an example using the `useColorModes` composable) and apply the different color modes as you see fit. We support a light mode (default) and dark mode. Color modes can be toggled globally on the `<html>` element, or on specific components and elements, thanks to the `data-coreui-theme` attribute.

Alternatively, you can also switch to a media query implementation thanks to our color mode mixin—see [the usage section for details](#building-with-sass). Heads up though—this eliminates your ability to change themes on a per-component basis as shown below.

## Example

For example, to change the color mode of a dropdown menu, add `data-coreui-theme="light"` or `data-coreui-theme="dark"` to the parent `.dropdown`. Now, no matter the global color mode, these dropdowns will display with the specified theme value.

```html
<div class="dropdown" data-coreui-theme="light">
  <button class="btn btn-solid theme-secondary dropdown-toggle" type="button" aria-expanded="false">
    Default dropdown
  </button>
  <ul class="dropdown-menu d-block position-static">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

<div class="dropdown" data-coreui-theme="dark">
  <button class="btn btn-solid theme-secondary dropdown-toggle" type="button" aria-expanded="false">
    Dark dropdown
  </button>
  <ul class="dropdown-menu d-block position-static">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## How it works

- As shown above, color mode styles are controlled by the `data-coreui-theme` attribute. This attribute can be applied to the `<html>` element, or to any other element or CoreUI for Vue component. If applied to the `<html>` element, it will apply to everything. If applied to a component or element, it will be scoped to that specific component or element.

- For each color mode you wish to support, you'll need to add new overrides for the shared global CSS variables. We do this already in our `_root.scss` stylesheet for dark mode, with light mode being the default values. In writing color mode specific styles, use the mixin:

  ```scss
  // Color mode variables in _root.scss
  @include color-mode(dark) {
    // CSS variable overrides here...
  }
  ```

- Almost every global color is declared once, as a native [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) pair, so there is no second set of dark declarations to keep in sync. The `data-coreui-theme="dark"` selector only has to declare `color-scheme: dark` and every pair — plus the native form widgets — follows. The exceptions are values `light-dark()` cannot hold: the colors baked into embedded SVGs (the select chevron, the switch knob) and filters keep their own dark rule.

  Note that `light-dark()` is the *mechanism*, not the switch. `:root` declares `color-scheme: light` outright rather than `light dark`, so a pair resolves to its light value until something sets `color-scheme: dark` — which, in practice, means the `data-coreui-theme` attribute. The operating system preference does not reach the pairs on its own; see [Building with Sass](#building-with-sass) for the media-query build if that is what you want.

## Usage

### Enable dark mode

Enable the built in dark color mode across your entire project by adding the `data-coreui-theme="dark"` attribute to the `<html>` element. This will apply the dark color mode to all components and elements, other than those with a specific `data-coreui-theme` attribute applied. In a typical Vue app that attribute lives in your `index.html`:

```html
<!doctype html>
<html lang="en" data-coreui-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CoreUI for Vue demo</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

To let visitors switch modes at run time, use the [`useColorModes` composable](#javascript) instead of hard-coding the attribute.

### Building with Sass

Our dark mode option is available to use for all users of CoreUI for Vue, but it's controlled via data attributes instead of media queries and does not automatically toggle your project's color mode. You can disable our dark mode entirely via Sass by changing `$enable-dark-mode` to `false`.

We use a custom Sass mixin, `color-mode()`, to help you control _how_ color modes are applied. By default, we use a `data` attribute approach, allowing you to create more user-friendly experiences where your visitors can choose to have an automatic dark mode or control their preference. This is also an easy and scalable way to add different themes and more custom color modes beyond light and dark.

In case you want to use media queries and only make color modes automatic, you can change the mixin's default type via Sass variable. Consider the following snippet and its compiled CSS output.

```scss
$color-mode-type: data;

@include color-mode(dark) {
  .element {
    color: var(--cui-primary-fg-emphasis);
    background-color: var(--cui-primary-bg-subtle);
  }
}
```

Outputs to:

```css
[data-coreui-theme=dark] .element {
  color: var(--cui-primary-fg-emphasis);
  background-color: var(--cui-primary-bg-subtle);
}
```

And when setting to `media-query`:

```scss
$color-mode-type: media-query;

@include color-mode(dark) {
  .element {
    color: var(--cui-primary-fg-emphasis);
    background-color: var(--cui-primary-bg-subtle);
  }
}
```

Outputs to:

```css
@media (prefers-color-scheme: dark) {
  .element {
    color: var(--cui-primary-fg-emphasis);
    background-color: var(--cui-primary-bg-subtle);
  }
}
```

## Custom color modes

While the primary use case for color modes is light and dark mode, custom color modes are also possible. Create your own `data-coreui-theme` selector with a custom value as the name of your color mode, then modify our Sass and CSS variables as needed. Set `color-scheme` on your selector as well, so the `light-dark()` pairs and the native widgets pick the right side.

For example, you can create a "blue theme" with the selector `data-coreui-theme="blue"`. In your custom Sass or CSS file, add the new selector and override any global or component CSS variables as needed. If you're using Sass, you can also use Sass's functions within your CSS variable overrides.

```scss
[data-coreui-theme="blue"] {
  --cui-body-color: var(--cui-white);
  --cui-body-color-rgb: #{to-rgb(#fff)};
  --cui-body-bg: #{$cd-blue-500};
  --cui-body-bg-rgb: #{to-rgb($cd-blue-500)};
  --cui-tertiary-bg: #{$cd-blue-600};

  .dropdown-menu {
    --cui-dropdown-bg: #{color.mix($cd-blue-500, $cd-blue-600, 50%, rgb)};
    --cui-dropdown-link-active-bg: #{$cd-blue-700};
  }

  .btn-secondary {
    --cui-btn-bg: #{$cd-btn-secondary-bg};
    --cui-btn-border-color: #{rgba(#fff, .25)};
    --cui-btn-hover-bg: #{color.scale($cd-btn-secondary-bg, $lightness: -8%)}; // stylelint-disable-line scss/at-function-named-arguments
    --cui-btn-hover-border-color: #{rgba(#fff, .25)};
    --cui-btn-active-bg: #{color.scale($cd-btn-secondary-bg, $lightness: -16%)}; // stylelint-disable-line scss/at-function-named-arguments
    --cui-btn-active-border-color: #{rgba(#fff, .5)};
    --cui-btn-focus-border-color: #{rgba(#fff, .5)};
    --cui-btn-focus-box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .2);
  }
}
```

```html
<div data-coreui-theme="blue">
  ...
</div>
```

## JavaScript

To allow visitors or users to toggle color modes, you'll need a control that sets the `data-coreui-theme` attribute on the root element, `<html>`. In CoreUI for Vue that job is done by the `useColorModes` composable: it initially defers to the user's current system color mode, persists an explicit choice in `localStorage`, and applies the attribute for you.

The composable takes the `localStorage` key as its only argument and returns three things: `colorMode`, a ref holding the current value; `setColorMode`, which stores the choice and sets the attribute (pass `'light'`, `'dark'`, or `'auto'` to follow the system preference); and `isColorModeSet`, which tells you whether the visitor has made an explicit choice yet. Call `setColorMode` as early as possible — before your first paint — to reduce potential screen flickering while your app loads.

```vue
<script setup>
import { CButton, CButtonGroup, useColorModes } from '@coreui/vue-pro'

const { colorMode, setColorMode } = useColorModes('coreui-vue-color-scheme')
</script>

<template>
  <CButtonGroup aria-label="Toggle theme">
    <CButton :active="colorMode === 'light'" @click="setColorMode('light')">
      Light
    </CButton>
    <CButton :active="colorMode === 'dark'" @click="setColorMode('dark')">
      Dark
    </CButton>
    <CButton :active="colorMode === 'auto'" @click="setColorMode('auto')">
      Auto
    </CButton>
  </CButtonGroup>
</template>
```

While no stored choice exists, the composable resolves to the system preference and keeps following it when it changes. Note that if you decide to use media queries for your color modes, the composable is unnecessary — the browser applies the preference on its own.

## Adding theme colors

A theme color is a hue in `$colors` and one entry in the `$theme-colors` map — a map of slots covering both color modes, described on [the Theme page](https://coreui.io/vue/docs/customize/theme/). Merge both and the library generates everything else: the 025–975 runtime scale of the hue, the `--cui-custom-color-*` slot tokens that read it, and the `.theme-custom-color` class.

> Heads up! Reach our Sass with @use. The *.import.scss files that let @import resolve our modules are gone, so the snippet below will not compile behind an @import.

```scss
@use "@coreui/coreui/scss/coreui" with (
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

The slots are `light-dark()` pairs of the runtime scale, so both color modes are covered by the one entry — there is no second, dark set of maps to fill in.

## Customizing

### CSS variables

Global colors are declared once as `light-dark()` pairs, so the color mode selector — which defaults to `data-coreui-theme` but [can be configured](#building-with-sass) to use a `prefers-color-scheme` media query — only declares the scheme:

```scss
--cui-shadow-strength: 2.4;
--cui-backdrop-opacity: 65%;
```

Do the same in your own color modes: declare `color-scheme` and override only the tokens whose value is genuinely mode-specific.

### Sass variables

_Deprecated in 6.0.0._

Sass variables set these defaults at build time and are removed in v7. The CSS variables above reach the same values without recompiling, and can be set on a single element.

Each theme color gets a 100–900 scale of `color-mix()` tokens in `:root`, mixed at runtime from the color's own token. The subtle backgrounds, borders and emphasis text are `light-dark()` pairs of those stops, so overriding `$primary` (or the `--cui-primary-500` token at runtime) retints the whole family in both color modes. These set what the scale mixes towards, and in which color space:

```scss
$color-mix-space: oklch !default;
$tint-color:      var(--cui-white) !default;
$shade-color:     var(--cui-black) !default;
```

The one value that cannot be a `light-dark()` pair is a color baked into an SVG, because a data URI cannot read a custom property. The select chevron is the only one left: it carries `--cui-control-select-bg-img` and `--cui-control-select-bg-img-dark` side by side on the control, and dark mode switches which one the `background-image` reads. Both are translucent black and white, so the chevron tints itself against whatever the field sits on.

### Sass maps

The two maps are the stops of that scale: each entry is one step number and how far it mixes towards the tint or the shade color. Add an entry and every theme color gains that stop; set one to `null` to drop it everywhere at once.

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

### Sass mixins

Styles for dark mode, and any custom color modes you create, can be scoped appropriately to the `data-coreui-theme` attribute selector or media query with the customizable `color-mode()` mixin. See the [Sass usage section](#building-with-sass) for more details.

```scss
@mixin color-mode($mode: light, $root: false) {
  @if $color-mode-type == "media-query" {
    @if $root == true {
      @media (prefers-color-scheme: $mode) {
        :root,
        :host {
          @content;
        }
      }
    } @else {
      @media (prefers-color-scheme: $mode) {
        @content;
      }
    }
  } @else {
    [data#{$data-infix}theme="#{$mode}"] {
      @content;
    }
  }
}
```
