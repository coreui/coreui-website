# Introduction

> CoreUI for Vue.js is UI Component library written in TypeScript, and ready for your next Vue.js project. Learn how to include CoreUI for Vue.js in your project.

## Installation

### Npm

```bash tab={"label":"CoreUI"}
npm install @coreui/vue @coreui/coreui
```

```bash tab={"label":"CoreUI PRO"}
npm install @coreui/vue-pro @coreui/coreui-pro
```

### Yarn

```bash tab={"label":"CoreUI"}
yarn add @coreui/vue @coreui/coreui
```

```bash tab={"label":"CoreUI PRO"}
yarn add @coreui/vue-pro @coreui/coreui-pro
```

## Using components

```js tab={"label":"CoreUI"}
import { CAlert } from '@coreui/vue';
```

```js tab={"label":"CoreUI PRO"}
import { CAlert } from '@coreui/vue-pro';
```

## Stylesheets

Vue components are styled using the `@coreui/coreui` or `@coreui/coreui-pro` CSS library, but you can also use them with the bootstrap CSS library. That is possible because the `@coreui/coreui` library is compatible with Bootstrap, it just extends its functionalities. The only exceptions are custom CoreUI and CoreUI PRO components, which don't exist in the Bootstrap ecosystem.

### CoreUI and CoreUI PRO CSS files

###### Basic usage

```js tab={"label":"CoreUI"}
import '@coreui/coreui/dist/css/coreui.min.css'
```

```js tab={"label":"CoreUI PRO"}
import '@coreui/coreui-pro/dist/css/coreui.min.css'
```

### Bootstrap CSS files

###### Installation

```bash
npm install bootstrap
```

###### Basic usage

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Important globals

CoreUI for Vue.js employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### Responsive meta tag

CoreUI is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to the `<head>` of your host `index.html`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, the `@coreui/coreui` stylesheet includes [Reboot](https://coreui.io/vue/docs/content/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Guiding principles

Beyond what CoreUI does, here's *why* we do it — the rules we build components against:

- Components should be responsive and mobile-first
- Components should be built with a base class and extended via modifier classes
- Component states should obey a common `z-index` scale
- Prefer an HTML and CSS implementation over JavaScript
- Use utilities over custom styles
- Avoid enforcing strict HTML requirements (immediate children selectors)

These rules cannot always be followed to the letter, but we strive to follow them as much as possible.

### Responsive

Our styles are mobile-first — we add styles as the viewport grows rather than overriding them as it shrinks. Not every component has to be fully responsive, but the approach keeps the number of overrides down.

Breakpoints are written as range media queries (`width >= 768px`), so a style applies at its breakpoint and carries up through the larger ones. A `.d-none` applies from zero width upwards; `.d-md-none` applies from the medium breakpoint up.

### Classes

Aside from [Reboot](https://coreui.io/vue/docs/content/reboot/), we use classes as selectors. Type selectors and parent selectors are avoided where we can, so a component stays usable wherever you put it.

A component is built from a base class carrying the property-value pairs every variant shares — `display`, `padding`, `border-width` — and modifier classes on top of it. A button is `.btn` for the shared geometry, `.btn-solid` or `.btn-subtle` for the fill, and a `.theme-*` class for the color: `.btn.btn-solid.theme-primary`.

### z-index scales

Two `z-index` scales run through the library: one for elements inside a component, one for overlay components.

Components whose children share borders — input groups, button groups, pagination — raise the element you are interacting with above its siblings, so its border and focus ring are drawn whole instead of being clipped by the neighbor. The scale runs `1` for `:hover`, `2` for `.active`, and `3` for `:focus-visible`: focus sits highest because a focused element is the one in the user's attention, and its ring has to be fully visible.

Overlay components sit on a separate scale starting at `1000`, high enough to clear ordinary page content. Each layer steps up so that a document-blocking element lands above the chrome it blocks — a modal above a navbar, a tooltip above both.

Learn more on the [`z-index` layout page](https://coreui.io/vue/docs/layout/z-index/).

### HTML and CSS over JS

Where a behavior can be expressed in HTML and CSS, we prefer that over JavaScript — it is more accessible to people of all experience levels and faster in the browser. In Vue that shows up as components which stay declarative: state you can hand them as props, and behavior the browser already provides rather than a script re-implementing it.

Our styles build on fundamental browser behavior. You can put `.btn` on nearly any element, but we use `<button>` and `<a>` for the semantics and keyboard handling the browser already gives them. Form validation works the same way: styles ride the `:user-invalid` pseudo-class behind a `data-coreui-validate` attribute, so the browser decides when feedback appears — after the user works a control or tries to submit — instead of a script toggling a class.

### Utilities

Utility classes — single, immutable property-value pairings like `.d-block` for `display: block` — keep repeated declarations out of component CSS. They speed up authoring and cut the amount of custom CSS a project needs. We reach for them before writing a new rule.

### Code conventions

[Code Guide](https://codeguide.co/) documents how we write HTML and CSS — formatting, defaults, property order. [Stylelint](https://stylelint.io/) enforces it.

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://coreui.io/blog/).
- Ask questions and explore [our GitHub Discussions](https://github.com/coreui/coreui/discussions).
- Discuss, ask questions, and more on [the community Discord](https://discord.gg/TsFcCgkG).

You can also follow [@core_ui on X (Twitter)](https://x.com/core_ui).
