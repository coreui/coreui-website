# Optimize

> Keep your projects lean, responsive, and maintainable so you can deliver the best experience and focus on more important jobs.

## Lean Sass imports

When using Sass in your asset pipeline, make sure you optimize CoreUI by only forwarding the components you need. Your largest optimizations will likely come from the `Layout & Components` section of our `coreui.scss`.

```scss
@forward "banner";

// Configuration
@forward "config";
@forward "colors";
@forward "theme";
@forward "utilities";
@forward "functions";
@forward "mixins";

@forward "root";

// Subdir imports
@forward "content";
@forward "layout";
@forward "forms";
@forward "buttons";

// Components
@forward "accordion";
@forward "alert";
@forward "autocomplete";
@forward "avatar";
@forward "badge";
@forward "breadcrumb";
@forward "calendar";
@forward "callout";
@forward "card";
@forward "carousel";
@forward "chip";
@forward "chip-set";
@forward "combobox";
@forward "date-picker";
@forward "dialog";
@forward "drawer";
@forward "dropdown";
@forward "header";
@forward "icon";
@forward "list-box";
@forward "list-group";
@forward "menu";
@forward "modal";
@forward "nav";
@forward "navbar";
@forward "offcanvas";
@forward "pagination";
@forward "placeholder";
@forward "popover";
@forward "popup";
@forward "progress";
@forward "range-slider";
@forward "rating";
@forward "sidebar";
@forward "spinner";
@forward "stepper";
@forward "time-picker";
@forward "toasts";
@forward "toaster";
@forward "tooltip";
@forward "transfer";
@forward "transitions";

// Helpers
@forward "helpers";

// Utilities
@forward "utilities/api";
```

If you're not using a component, comment it out or delete it entirely. For example, if you're not using the carousel, remove that `@forward` to save some file size in your compiled CSS. Keep in mind there are some dependencies between our Sass modules that may make it more difficult to omit a file.

## Lean JavaScript

CoreUI for Vue ships as an ES module package, so your bundler — Webpack, Rollup, or Vite — tree-shakes it for you: only the components you actually import end up in your bundle.

```js
import { CModal } from '@coreui/vue-pro'
```

This way, you're not including any JavaScript you don't intend to use for components like buttons, carousels, and tooltips. Import from the package rather than from deep paths — named imports like the one above are what the bundler can analyze and prune.

If you're using components positioned with Floating UI (dropdowns, tooltips, popovers), the `@floating-ui/dom` dependency comes with the package — there is nothing extra to include, and nothing to remove when you don't use them beyond the components themselves.

## Per-component stylesheets

The CSS follows the JavaScript. Every CoreUI for Vue PRO component imports the stylesheet it renders into, so a page built from three components ships three small files instead of the whole 77 kB bundle:

```js
import { CButton } from '@coreui/vue-pro'
// pulls in @coreui/coreui-pro/css/components/buttons.css
```

That leaves one import for you to make, once, in your application's entry point — the base layer every component builds on (design tokens, the color palette, and Reboot):

```js
import '@coreui/coreui-pro/css/base.css'
```

A few things worth knowing about how this behaves:

- **Nothing is duplicated.** A stylesheet imported by ten components is placed once, where the bundler first meets it.
- **A component pulls in what it renders, not just what it is named after.** `CDatePicker` renders a calendar, a popup and form-control markup, so it brings those stylesheets too.
- **The order is handled for you.** Each file opens with the `@layer` declaration, which makes the order between layers irrelevant; inside one layer the later file still wins, so components emit their stylesheets in the library's own order. You do not need to sort your imports.
- **Utilities are not split.** They are generated from maps rather than per component — import `@coreui/coreui-pro/css/coreui-utilities.css` when you use them. Helpers are not split either, except the ones a component adds from JavaScript: `.visually-hidden` comes along with the components that render it.

Bundler support is the ordinary "a package imports CSS" case:

| Tool | What is needed |
| --- | --- |
| Vite, webpack, Parcel, Rspack | Nothing — CSS imports from `node_modules` work out of the box. |
| Nuxt | Nothing. |
| Vitest | Nothing — CSS is stubbed by default. |
| Jest | Map the stylesheets to a stub: `moduleNameMapper: { '\\.css$': 'identity-obj-proxy' }`. |

## Bringing your own CSS

If you compile the Sass yourself, ship `coreui.css` whole, or replace our styles entirely, import the components from the `/unstyled` entry point. It is the same library built from the same source, with the stylesheet imports removed:

```js
import { CButton } from '@coreui/vue-pro/unstyled'
```

## Autoprefixer .browserslistrc

CoreUI depends on Autoprefixer to automatically add browser prefixes to certain CSS properties. Prefixes are dictated by our `.browserslistrc` file, found in the root of the CoreUI repo. Customizing this list of browsers and recompiling the Sass will automatically remove some CSS from your compiled CSS, if there are vendor prefixes unique to that browser or version.

## Unused CSS

_Help wanted with this section, please consider opening a PR. Thanks!_

While we don't have a prebuilt example for using [PurgeCSS](https://github.com/FullHuman/purgecss) with CoreUI, there are some helpful articles and walkthroughs that the community has written. Here are some options:

- [https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772](https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772)
- [https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/](https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/)

Lastly, this [CSS Tricks article on unused CSS](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) shows how to use PurgeCSS and other similar tools.

## Minify and gzip

Whenever possible, be sure to compress all the code you serve to your visitors. Your bundler's production build minifies your JavaScript and CSS already — make sure CoreUI's stylesheet goes through that pipeline rather than being copied in unprocessed, and serve the output with gzip or Brotli compression enabled on your server or CDN.

## Non-blocking files

While minifying and using compression might seem like enough, making your files non-blocking ones is also a big step in making your site well-optimized and fast enough.

If you are using a [Lighthouse](https://developers.google.com/web/tools/lighthouse/) plugin in Google Chrome, you may have stumbled over FCP. [The First Contentful Paint](https://web.dev/fcp/) metric measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.

You can improve FCP by deferring non-critical JavaScript or CSS. What does that mean? Simply, JavaScript or stylesheets that don't need to be present on the first paint of your page should be marked with `async` or `defer` attributes.

This ensures that the less important resources are loaded later and not blocking the first paint. On the other hand, critical resources can be included as inline scripts or styles.

If you want to learn more about this, there are already a lot of great articles about it:

- [https://web.dev/render-blocking-resources/](https://web.dev/render-blocking-resources/)
- [https://web.dev/defer-non-critical-css/](https://web.dev/defer-non-critical-css/)

## Always use HTTPS

Your website should only be available over HTTPS connections in production. HTTPS improves the security, privacy, and availability of all sites, and [there is no such thing as non-sensitive web traffic](https://https.cio.gov/everything/). The steps to configure your website to be served exclusively over HTTPS vary widely depending on your architecture and web hosting provider, and thus are beyond the scope of these docs.

Sites served over HTTPS should also access all stylesheets, scripts, and other assets over HTTPS connections. Otherwise, you'll be sending users [mixed active content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), leading to potential vulnerabilities where a site can be compromised by altering a dependency. This can lead to security issues and in-browser warnings displayed to users. Whether you're getting CoreUI from a CDN or serving it yourself, ensure that you only access it over HTTPS connections.
