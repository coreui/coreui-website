# CSS variables

> Use CoreUI for Bootstrap's CSS custom properties for fast and forward-looking design and development.

CoreUI for Bootstrap declares several hundred [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) in its compiled CSS — on `:root` for global values, and on each component's base class for the rest. They give you the theme colors, spacing, typography and component internals as live values you can read in your browser's inspector and override without recompiling Sass.

**All our custom properties are prefixed with `cui-`** to avoid conflicts with third party CSS.

## Root variables

Here are the variables we include (note that the `:root, :host` selector is required) that can be accessed anywhere CoreUI for Bootstrap's CSS is loaded. They're located in our `_root.scss` file and included in our compiled dist files. Most of them pick their light and dark value in a single declaration through the CSS [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) function, so one declaration covers both [color modes](https://coreui.io/bootstrap/docs/customize/color-modes/).

`:host` is there so the tokens also land when our CSS is loaded inside a shadow root — `:root` matches the document, never a shadow tree, so without it every global token would be unset in a web component.

### Dark mode

Because `light-dark()` resolves both modes above, only one value still needs a dark-mode declaration of its own — a shadow reads as depth against the surface behind it, and a dark surface swallows the same alpha, so its strength rises rather than its color changing.

```scss
--cui-shadow-strength: 2.4;
--cui-backdrop-opacity: 65%;
```

## Component variables

We use custom properties as local variables for components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow restyling and extending of CoreUI components after Sass compilation.

Every component declares its complete styling surface as custom properties on its base class, so you can override any of them in your own CSS without recompiling Sass:

```css
.alert {
  --cui-alert-padding-x: 1.5rem;
  --cui-alert-padding-y: 1rem;
  --cui-alert-border-radius: var(--cui-radius-5);
}
```

Have a look at our table documentation for some [insight into how we're using CSS variables](https://coreui.io/bootstrap/docs/content/tables/#how-do-the-variants-and-accented-tables-work). Our [navbars also use CSS variables](https://coreui.io/bootstrap/docs/components/navbar/#css-variables), and we use them across our grids — primarily for gutters and the [opt-in CSS grid](https://coreui.io/bootstrap/docs/layout/css-grid/).

We assign CSS variables at the base component level (e.g., `.navbar` for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates.

A variable resolves where it is **declared**, so override it on the element that carries the base class — setting `--cui-navbar-padding-y` on a wrapper around the navbar will not reach it.

## Prefix

Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the `--` that's required on every CSS variable.

Customize the prefix via the `$prefix` Sass variable. By default, it's set to `cui-` (note the trailing dash).

The `data-*` attributes you write in your markup — `data-coreui-theme`, `data-coreui-target` — carry a second knob, `$data-infix` (`-coreui-` by default), so a build can rename them: set to `-bs-`, it reads `data-bs-theme`. Attributes the JavaScript sets on elements while it runs (`data-coreui-popper`, `data-coreui-placement`, `data-coreui-validate`) are always `data-coreui-*` and do not follow it.

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

## Focus variables

_Added in 4.3.0._

CoreUI provides custom `:focus` styles using a combination of Sass and CSS variables that can be optionally added to specific components and elements. We do not yet globally override all `:focus` styles.

The defaults are declared on `:root` and can be customized in real-time, including options for `x` and `y` offsets, which default to their fallback value of `0`.

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
