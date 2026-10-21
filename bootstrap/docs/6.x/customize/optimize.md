# Optimize

> Keep your projects lean, responsive, and maintainable so you can deliver the best experience and focus on more important jobs.

## Lean Sass imports

When using Sass in your asset pipeline, make sure you optimize CoreUI for Bootstrap by only forwarding the components you need. Your largest optimizations will likely come from the `Layout & Components` section of our `coreui.scss`.

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

The v5 spellings this stack does not carry are their own entrypoint — add
`@use "coreui-legacy";` after it while your markup still needs them, and drop
that line once it does not. See [v5 compatibility CSS](https://coreui.io/bootstrap/docs/getting-started/install/#v5-compatibility-css).

If you're not using a component, comment it out or delete it entirely. For example, if you're not using the carousel, remove that `@forward` to save some file size in your compiled CSS. Keep in mind there are some dependencies between our Sass modules that may make it more difficult to omit a file.

## Lean JavaScript

CoreUI for Bootstrap's JavaScript includes every component in our primary dist files (`coreui.js` and `coreui.min.js`), and even our primary dependency (Floating UI) with our bundle files (`coreui.bundle.js` and `coreui.bundle.min.js`). While you're customizing via Sass, be sure to remove related JavaScript.

For instance, assuming you're using your own JavaScript bundler like Webpack, Parcel, or Vite, you'd only import the JavaScript you plan on using. In the example below, we show how to just include our modal JavaScript:

```js
// Import just what we need

// import '@coreui/coreui/js/dist/alert';
// import '@coreui/coreui/js/dist/button';
// import '@coreui/coreui/js/dist/carousel';
// import '@coreui/coreui/js/dist/collapse';
// import '@coreui/coreui/js/dist/dropdown';
import '@coreui/coreui/js/dist/modal';
// import '@coreui/coreui/js/dist/popover';
// import '@coreui/coreui/js/dist/scrollspy';
// import '@coreui/coreui/js/dist/tab';
// import '@coreui/coreui/js/dist/toast';
// import '@coreui/coreui/js/dist/tooltip';
```

This way, you're not including any JavaScript you don't intend to use for components like buttons, carousels, and tooltips. If you're importing dropdowns, tooltips or popovers, be sure to list the `@floating-ui/dom` dependency in your `package.json` file.

> ### Default Exports
> 
> Files in `@coreui/coreui/js/dist` use the **default export**, so if you want to use one of them you have to do the following:
> 
> ```js
> import Modal from '@coreui/coreui/js/dist/modal'
> 
> const modal = new Modal(document.getElementById('myModal'))
> ```

## Autoprefixer .browserslistrc

CoreUI for Bootstrap depends on Autoprefixer to automatically add browser prefixes to certain CSS properties. Prefixes are dictated by our `.browserslistrc` file, found in the root of the CoreUI for Bootstrap repo. Customizing this list of browsers and recompiling the Sass will automatically remove some CSS from your compiled CSS, if there are vendor prefixes unique to that browser or version.

## Unused CSS

[PurgeCSS](https://github.com/FullHuman/purgecss) reads your markup, finds the class names actually in use, and strips the rest. On a project that uses a handful of components that removes most of the stylesheet.

Install it as a dev dependency:

```sh
npm install --save-dev purgecss
```

Add a `purgecss.config.js` at the project root:

```js
// purgecss.config.js
export default {
  // Where your class names appear
  content: ['./**/*.html', './**/*.js'],
  // The compiled CSS to shrink, plus any of your own
  css: ['./css/coreui.css'],
  output: './css/coreui.purged.css',
  safelist: {
    // States our JavaScript toggles, which never appear in your markup
    standard: ['show', 'hide', 'hiding', 'fade', 'active', 'selected', 'collapsing', 'disabled', 'readonly', 'indeterminate', 'complete', 'paused'],
    // Families whose markup the components build themselves
    greedy: [/^combobox/, /^list-box/, /^date-/, /^time-/, /^password-/, /^rating/, /^dialog/, /^modal/, /^carousel/, /^stepper/, /^form-/, /^is-/]
  }
}
```

Run it as a build step and serve the purged file:

```sh
npx purgecss --config purgecss.config.js
```

> **Test every interactive component after purging.** Our JavaScript toggles **115** class names at run time and builds whole subtrees — the options list of a Combobox, a Date Picker's calendar, a Stepper's panes — none of which exist in your HTML for PurgeCSS to find. The `safelist` above covers the families we ship; extend it with any classes your own scripts add.

Unlike upstream's setup, no custom `defaultExtractor` is needed here: our responsive classes are infixed (`.d-md-none`), so no class name contains a `:` or `/` that the default extractor would split on.

The community has written deeper walkthroughs:

- [Remove unused CSS styles from Bootstrap using PurgeCSS](https://medium.com/dwarves-foundation/remove-unused-css-styles-from-bootstrap-using-purgecss-88395a2c5772)
- [Automatically remove unused CSS from Bootstrap or other frameworks](https://lukelowrey.com/automatically-removeunused-css-from-bootstrap-or-other-frameworks/)
- [CSS-Tricks: How do you remove unused CSS from a site?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/)

## Minify and gzip

Whenever possible, be sure to compress all the code you serve to your visitors. If you're using Bootstrap dist files, try to stick to the minified versions (indicated by the `.min.css` and `.min.js` extensions). If you're building Bootstrap from the source with your own build system, be sure to implement your own minifiers for HTML, CSS, and JS.

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

Sites served over HTTPS should also access all stylesheets, scripts, and other assets over HTTPS connections. Otherwise, you'll be sending users [mixed active content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content), leading to potential vulnerabilities where a site can be compromised by altering a dependency. This can lead to security issues and in-browser warnings displayed to users. Whether you're getting Bootstrap from a CDN or serving it yourself, ensure that you only access it over HTTPS connections.
