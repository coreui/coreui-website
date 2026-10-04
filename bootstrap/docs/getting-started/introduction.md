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

Looking to quickly add CoreUI for Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? [Head to the downloads page](https://coreui.io/bootstrap/docs/getting-started/download/).

CoreUI was created as an extension to Bootstrap, allowing it to be used both as a standalone library and as a replacement for the currently utilized Bootstrap in your project.

### CSS

Copy-paste the stylesheet `<link />` into your `<head>` before all other stylesheets to load our CSS.

```html tab={"label":"CoreUI"}
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-hLBsN3gpx96kCbLUCbANpmr8cdCNM1sH85tJfeZT61uxTNIvelafstACefvdVnuP" crossorigin="anonymous">
```

```html tab={"label":"CoreUI PRO"}
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-HBCTPA3TqegUjGCqXTp741JKM40zyaGZcYCmKBqJfdaknVQPJWvYMWjxsq46P38k" crossorigin="anonymous">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

#### Bundle

Include every CoreUI for Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `coreui.bundle.js` and `coreui.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers. For more information about what's included in CoreUI, please see our [contents](https://coreui.io/bootstrap/docs/getting-started/contents/#precompiled-coreui) section.

```html tab={"label":"CoreUI"}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/coreui.bundle.min.js" integrity="sha384-yW+X2pqDqevsUW8M2p1APhb8cm2i5jneCZe2pkEvKVATzd6517WyXz6ElE46++OE" crossorigin="anonymous"></script>
```

```html tab={"label":"CoreUI PRO"}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/js/coreui.bundle.min.js" integrity="sha384-5hu9foPcAlow/eiZ5NDY2jD4R9w766eeHU29VOx859ImVuMDx1DgwwivbfMb8PCO" crossorigin="anonymous"></script>
```

#### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then our JavaScript plugins.

```html tab={"label":"CoreUI"}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/coreui.min.js" integrity="sha384-nOgOcmr6AaR5Orx9+zgs9tbEI1xyppug0IOWcpUnVqYrFDDXvIQTvl3iubQE4AhR" crossorigin="anonymous"></script>
```

```html tab={"label":"CoreUI PRO"}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/js/coreui.min.js" integrity="sha384-xygTPk2jN3u94FNsU+GEqUy5ekAh5LRyXMe5XObsREIvDK9NV0fGQ2oMxZS+smMO" crossorigin="anonymous"></script>
```

#### Modules

If you use `<script type="module">`, please refer to our [using CoreUI for Bootstrap as a module](https://coreui.io/bootstrap/docs/getting-started/javascript/#using-coreui-as-a-module) section.

#### Components

Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you're at all unsure about the general page structure, keep reading for an example page template.

<details>
<summary class="text-primary mb-3">Show components requiring JavaScript</summary>

- Accordions for extending our Collapse plugin
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse plugin to implement responsive behavior
- Offcanvases for displaying, positioning, and scroll behavior
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Scrollspy for scroll behavior and navigation updates

</details>

## Bootstrap Replacement

_Added in 5.0.0._

If you're currently using Bootstrap in your project or want to maintain full compatibility with Bootstrap, check out how you can add CoreUI for Bootstrap to your project. CoreUI enhances Bootstrap projects by adding advanced components and features, offering a smooth upgrade with minimal adjustments. It retains Bootstrap's familiar structure while introducing new possibilities for UI development.

### CSS

Copy-paste the stylesheet `<link />` into your `<head>` before all other stylesheets to load our CSS.

```html tab={"label":"CoreUI"}
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/css/themes/bootstrap/bootstrap.min.css" rel="stylesheet" integrity="sha384-fvLySNDGU1YHS+mRj38K6qAAWWRa+xhhitIGWNrUfyUIXC6wbthT7nrCtnYBuhpp" crossorigin="anonymous">
```

```html tab={"label":"CoreUI PRO"}
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/css/themes/bootstrap/bootstrap.min.css" rel="stylesheet" integrity="sha384-F8GXenXzPlADInYzJMbrdo3zkgpkVWx7Kgsv2wsLGJ9FlJDquHN+TpgGd7rUPssk" crossorigin="anonymous">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

#### Bundle

Include every CoreUI for Bootstrap JavaScript plugin and dependency with one of our two bundles. Both `bootstrap.bundle.js` and `bootstrap.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers.

```html tab={"label":"CoreUI"}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-Dj3chlOpTreSEcJrQ3tzbCBEy4hu3IpxZ7Yo4GSQ3Lh74uT9FdNQIvwlNJZLmPH/" crossorigin="anonymous"></script>
```

```html tab={"label":"CoreUI PRO"}
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-6DFPoP47CNYwOK6U0KBggsv+kHrxJm0UsWWKJpZF71472Qm18qhaLS2ZO3KE6X7k" crossorigin="anonymous"></script>
```

#### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then our JavaScript plugins.

```html tab={"label":"CoreUI"}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/bootstrap.min.js" integrity="sha384-RuZjm3iU5R5YfbJ2bCnUFADA4i8VUTxBpZWd8XbNw5xIrwhvfDlOAQIuusOYNCsr" crossorigin="anonymous"></script>
```

```html tab={"label":"CoreUI PRO"}
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/js/bootstrap.min.js" integrity="sha384-KJLugqZyuKFgGem7XWnZCA77hEO3cj+p3anhxFS3buLy7cgSj2gnCS/4KHxwtnDg" crossorigin="anonymous"></script>
```

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
    <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-hLBsN3gpx96kCbLUCbANpmr8cdCNM1sH85tJfeZT61uxTNIvelafstACefvdVnuP" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- CoreUI for Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/coreui.bundle.min.js" integrity="sha384-yW+X2pqDqevsUW8M2p1APhb8cm2i5jneCZe2pkEvKVATzd6517WyXz6ElE46++OE" crossorigin="anonymous"></script>
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
    <link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-HBCTPA3TqegUjGCqXTp741JKM40zyaGZcYCmKBqJfdaknVQPJWvYMWjxsq46P38k" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- CoreUI PRO for Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.28.0/dist/js/coreui.bundle.min.js" integrity="sha384-5hu9foPcAlow/eiZ5NDY2jD4R9w766eeHU29VOx859ImVuMDx1DgwwivbfMb8PCO" crossorigin="anonymous"></script>
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

## Community

Stay up to date on the development of CoreUI and reach out to the community with these helpful resources.

- Read and subscribe to [The Official CoreUI Blog](https://coreui.io/blog/).
- Ask questions and explore [our GitHub Discussions]the official Community).
- Discuss, ask questions, and more on [the community Discord](https://discord.gg/TsFcCgkG).

You can also follow [@core_ui on X (Twitter)](https://x.com/core_ui).
