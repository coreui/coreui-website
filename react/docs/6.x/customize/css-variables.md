# CSS variables

> Use CoreUI's CSS custom properties for fast and forward-looking design and development.

CoreUI declares several hundred [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS — on `:root` for global values, and on each component's base class for the rest. They give you the theme colors, spacing, typography and component internals as live values you can read in your browser's inspector and override without recompiling Sass.

**All our custom properties are prefixed with `cui-`** to avoid conflicts with third party CSS.

## Root variables

These are declared on `:root, :host`, so they resolve anywhere CoreUI's CSS is loaded. They live in our `_root.scss` file and ship in every compiled bundle. Most of them pick their light and dark value in a single declaration through the CSS [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) function, so one declaration covers both color modes.

`:host` is there so the tokens also land when our CSS is loaded inside a shadow root — `:root` matches the document, never a shadow tree, so without it every global token would be unset in a web component.

```scss
--cui-body-font-family: meta.inspect(var(--cui-font-sans-serif)),
--cui-body-font-size: 1rem,
--cui-body-font-weight: var(--cui-font-weight-normal),
--cui-body-line-height: 1.5,
```

### Dark mode

Because `light-dark()` resolves both modes above, only one value still needs a dark-mode declaration of its own — a shadow reads as depth against the surface behind it, and a dark surface swallows the same alpha, so its strength rises rather than its color changing.

```scss
--cui-shadow-strength: 2.4;
--cui-backdrop-opacity: 65%;
```

## Component variables

Every component declares its own variables on its base class. This keeps our compiled CSS smaller, stops styles leaking into nested instances such as tables inside tables, and lets you restyle a component from your own CSS with no Sass compilation.

A variable resolves where it is **declared**, so override it on the element that carries the base class — setting `--cui-alert-bg` on a wrapper around the alert will not reach it.

Whenever possible, we'll assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `cui-` (note the trailing dash).

## Examples

CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables.

```css
body {
  font: 1rem/1.5 var(--cui-font-sans-serif);
}
a {
  color: var(--cui-primary-500);
}
```

## Using a custom font

The default is a native font stack, which needs no download and matches the host OS. To use a web font instead, load it and point the two font tokens at it — no Sass compilation involved.

Add the font to your document head, before CoreUI's CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
```

Then override the tokens, in a `<style>` tag or your own stylesheet:

```css
:root {
  --cui-font-sans-serif: "Inter", system-ui, sans-serif;
  --cui-font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Keep the generic families at the end of each stack: they are what renders while the web font loads, and what renders if it fails.

`--cui-body-font-family` reads `--cui-font-sans-serif`, so setting the stack covers the body and everything inheriting from it. Set `--cui-body-font-family` directly only when you want the body to differ from the rest.

The same works from Sass if you compile your own build — set `$font-family-sans-serif` and `$font-family-monospace` before importing CoreUI.

## Focus variables

CoreUI provides custom `:focus` styles using a combination of Sass and CSS variables that can be optionally added to specific components and elements. We do not yet globally override all `:focus` styles.

In our Sass, we set default values that can be customized before compiling.

Those variables are then reassigned to `:root` level CSS variables that can be customized in real-time, including with options for `x` and `y` offsets (which default to their fallback value of `0`).

```scss
--cui-focus-ring-width: .25rem,
--cui-focus-ring-opacity: .25,
--cui-focus-ring-offset: 0,
--cui-focus-ring-color: var(--cui-primary-focus-ring),
--cui-focus-ring: var(--cui-focus-ring-width) solid var(--cui-focus-ring-color),
```

## Overlay easing

The components that float above the page — dialog, drawer, menu and the popup the field components open — read one easing curve from `:root` instead of carrying their own.

```scss
--cui-transition-timing-overlay: cubic-bezier(.22, 1, .36, 1),
```

Set it once and all four follow:

```css
:root {
  --cui-transition-timing-overlay: linear;
}
```

Each component still exposes its own `--cui-{component}-transition-timing`, so a single overlay can opt out without touching the others.

## Grid breakpoints

While we include our grid breakpoints as CSS variables (except for `xs`), be aware that **CSS variables do not work in media queries**. This is by design in the CSS spec for variables, but may change in coming years with support for `env()` variables. Check out [this Stack Overflow answer](https://stackoverflow.com/a/47212942) for some helpful links. In the meantime, you can use these variables in other CSS situations, as well as in your JavaScript.
