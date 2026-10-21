# Introduction

> CoreUI is the fastest way to build a modern dashboard for any platforms, browser, or device. A complete UI Kit that allows you to quickly build eye-catching, high-quality, high-performance responsive applications.

## CoreUI vs Bootstrap

CoreUI is fully compatible with Bootstrap, but it’s more than just a theme or UI extension — it’s a professionally developed and maintained system that addresses many of the limitations developers face with Bootstrap alone.

**Key differences between CoreUI and Bootstrap:**

* ✅ **Framework-native versions** – CoreUI offers official libraries for [React.js](https://coreui.io/react/), [Vue.js](https://coreui.io/vue/), and [Angular](https://coreui.io/angular/), while Bootstrap depends on third-party community plugins for framework integration.
* 👨‍💻 **Full-time maintained project** – CoreUI is not a community-only initiative. It’s developed by a dedicated, full-time team focused on long-term evolution and support.
* 📦 **More built-in components** – CoreUI includes many components not present in Bootstrap by default, such as range sliders, multi-selects, and step-based form wizards.
* 🛠️ **Sass Modules support today** – CoreUI already supports Sass Modules out of the box, a feature that Bootstrap plans to introduce in version 6.
* 🌍 **Modern RTL/LTR support** – CoreUI uses CSS logical properties to provide seamless RTL and LTR layout support for multilingual and internationalized apps.
* 🔒 **Long-Term Support (LTS)** – While Bootstrap 3 & 4 LTS is now a paid service via [HeroDevs](https://www.herodevs.com/support/nes-bootstrap?utm_source=Bootstrap_site&utm_medium=Banner&utm_campaign=v3and4_eol), CoreUI continues to offer long-term support without additional cost.

Whether you're starting a new project or migrating from Bootstrap, CoreUI gives you a powerful upgrade path with more features, framework bindings, and peace of mind for long-term maintainability.

## Quick start

Looking to quickly add CoreUI for Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? [Head to the install page](https://coreui.io/bootstrap/docs/getting-started/install/).

CoreUI was created as an extension to Bootstrap, allowing it to be used both as a standalone library and as a replacement for the currently utilized Bootstrap in your project.

### CSS

Copy-paste the stylesheet `<link />` into your `<head>` before all other stylesheets to load our CSS.

```html tab={"label":"CoreUI"}
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-9DZ6o3pJWcTwBR8W196XizUEf2kNMD35tkeyWqOB0yzml+nZrEe/13PMCpAIrT4r" crossorigin="anonymous">
```

```html tab={"label":"CoreUI PRO"}
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-F+g1XwaEoDdMLXEPnahfRloRsSoftl2vWK4JeoGKKifs3GH9R3Ng2lRb3pq55HTS" crossorigin="anonymous">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Floating UI](https://floating-ui.com/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

#### Bundle

Include every CoreUI for Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `coreui.bundle.js` and `coreui.bundle.min.js` include [Floating UI](https://floating-ui.com/) for our tooltips and popovers. For more information about what's included in CoreUI, please see our [what's included](https://coreui.io/bootstrap/docs/getting-started/install/#whats-included) section.

```html tab={"label":"CoreUI"}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.bundle.min.js" integrity="sha384-FTek6QoTuxz6Bb078pS0kYQ0qH2LZVB5LWwZl8944mluH+TCk0q3OP4PqA+dHJRl" crossorigin="anonymous"></script>
```

```html tab={"label":"CoreUI PRO"}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.bundle.min.js" integrity="sha384-5EIITWrYmdJ/lLrIJ/CAkKMbEDQmQ2tbtKex02fTpIPGDke4Gk/2ypdWo43vOvfj" crossorigin="anonymous"></script>
```

#### Separate

If you decide to go with the separate scripts solution, Floating UI must come first (if you're using tooltips, popovers, or dropdowns) — its two files in this order — and then our JavaScript plugins.

```html tab={"label":"CoreUI"}
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js" integrity="sha384-HNCdK6HYLs4EKIDg2Ml3NdfNMVD/LcFbGXnagRABpWmpJjiEuhrtSIckScRnqDOD" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js" integrity="sha384-h02fHnOrZRtL8NvKyMkr2vfTxUr0lTnQdZexzrbPfME4nd74qGfOZ97tbiroJo1Y" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.min.js" integrity="sha384-gf1tanjsJUdqpGpiHABhWprM/7/k8itp69MQWhJGblqf0/0EhOcPA5GPZZE83Br9" crossorigin="anonymous"></script>
```

```html tab={"label":"CoreUI PRO"}
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js" integrity="sha384-HNCdK6HYLs4EKIDg2Ml3NdfNMVD/LcFbGXnagRABpWmpJjiEuhrtSIckScRnqDOD" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js" integrity="sha384-h02fHnOrZRtL8NvKyMkr2vfTxUr0lTnQdZexzrbPfME4nd74qGfOZ97tbiroJo1Y" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.min.js" integrity="sha384-kUpSKa20uGjMrb8XIUCECbcTGyZ7WO4FUM9/Dad7olwxxV6JFZqNSNCwAb7OzSYc" crossorigin="anonymous"></script>
```

#### Modules

If you use `<script type="module">`, please refer to our [using CoreUI for Bootstrap as a module](https://coreui.io/bootstrap/docs/getting-started/javascript/#using-coreui-for-bootstrap-as-a-module) section.

#### Components

Curious which components explicitly require our JavaScript and Floating UI? See the [JS components list](https://coreui.io/bootstrap/docs/getting-started/javascript/#js-components) on the JavaScript page. If you're at all unsure about the general page structure, keep reading for an example page template.

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```html tab={"label":"CoreUI"}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI for Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-9DZ6o3pJWcTwBR8W196XizUEf2kNMD35tkeyWqOB0yzml+nZrEe/13PMCpAIrT4r" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- CoreUI for Bootstrap Bundle with Floating UI -->
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.bundle.min.js" integrity="sha384-FTek6QoTuxz6Bb078pS0kYQ0qH2LZVB5LWwZl8944mluH+TCk0q3OP4PqA+dHJRl" crossorigin="anonymous"></script>
  </body>
</html>
```

```html tab={"label":"CoreUI PRO"}
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CoreUI PRO for Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-F+g1XwaEoDdMLXEPnahfRloRsSoftl2vWK4JeoGKKifs3GH9R3Ng2lRb3pq55HTS" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- CoreUI PRO for Bootstrap Bundle with Floating UI -->
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.bundle.min.js" integrity="sha384-5EIITWrYmdJ/lLrIJ/CAkKMbEDQmQ2tbtKex02fTpIPGDke4Gk/2ypdWo43vOvfj" crossorigin="anonymous"></script>
  </body>
</html>
```

For next steps, visit the [Layout docs](https://coreui.io/bootstrap/docs/layout/grid/) to start laying out your site's content and components.

## Important globals

CoreUI for Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

CoreUI for Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

CoreUI for Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the [starter template](#starter-template).

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

For improved cross-browser rendering, we use [Reboot](https://coreui.io/bootstrap/docs/content/reboot/) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

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

Aside from [Reboot](https://coreui.io/bootstrap/docs/content/reboot/), we use classes as selectors. Type selectors and parent selectors are avoided where we can, so a component stays usable wherever you put it.

A component is built from a base class carrying the property-value pairs every variant shares — `display`, `padding`, `border-width` — and modifier classes on top of it. A button is `.btn` for the shared geometry, `.btn-solid` or `.btn-subtle` for the fill, and a `.theme-*` class for the color: `.btn.btn-solid.theme-primary`.

### z-index scales

Two `z-index` scales run through the library: one for elements inside a component, one for overlay components.

Components whose children share borders — input groups, button groups, pagination — raise the element you are interacting with above its siblings, so its border and focus ring are drawn whole instead of being clipped by the neighbor. The scale runs `1` for `:hover`, `2` for `.active`, and `3` for `:focus-visible`: focus sits highest because a focused element is the one in the user's attention, and its ring has to be fully visible.

Overlay components sit on a separate scale starting at `1000`, high enough to clear ordinary page content. Each layer steps up so that a document-blocking element lands above the chrome it blocks — a modal above a navbar, a tooltip above both.

Learn more on the [`z-index` layout page](https://coreui.io/bootstrap/docs/layout/z-index/).

### HTML and CSS over JS

Where a behavior can be expressed in HTML and CSS, we prefer that over JavaScript — it is more accessible to people of all experience levels and faster in the browser. It is also why our first-class JavaScript API is `data-coreui-*` attributes: they let you write HTML instead of wiring up JavaScript. Read more in [our JavaScript overview](https://coreui.io/bootstrap/docs/getting-started/javascript/#data-attributes).

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
