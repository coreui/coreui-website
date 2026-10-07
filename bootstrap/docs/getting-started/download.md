# Download

> Download CoreUI for Bootstrap to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.

## Compiled CSS and JS

Download ready-to-use compiled code for **CoreUI for Bootstrap v5.8.0** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison](https://coreui.io/bootstrap/docs/getting-started/contents/#css-files))
- Compiled and minified JavaScript plugins (see [JS files comparison](https://coreui.io/bootstrap/docs/getting-started/contents/#js-files))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

<a href="https://github.com/coreui/coreui/releases/download/v5.8.0/coreui-5.8.0-dist.zip" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Download</a>

## Source files

Compile CoreUI for Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools](https://coreui.io/bootstrap/docs/getting-started/build-tools/#tooling-setup), they are included for developing CoreUI for Bootstrap and its docs, but they're likely unsuitable for your own purposes.

<a href="https://github.com/coreui/coreui/archive/v5.8.0.zip" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver cached version of CoreUI's compiled CSS and JS to your project.

```html
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-hLBsN3gpx96kCbLUCbANpmr8cdCNM1sH85tJfeZT61uxTNIvelafstACefvdVnuP" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/coreui.bundle.min.js" integrity="sha384-yW+X2pqDqevsUW8M2p1APhb8cm2i5jneCZe2pkEvKVATzd6517WyXz6ElE46++OE" crossorigin="anonymous"></script>
```

If you're using our compiled JavaScript and prefer to include Popper separately, add Popper before our JS, via a CDN preferably.

```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.1/dist/js/coreui.min.js" integrity="sha384-nOgOcmr6AaR5Orx9+zgs9tbEI1xyppug0IOWcpUnVqYrFDDXvIQTvl3iubQE4AhR" crossorigin="anonymous"></script>
```

**If you use CoreUI PRO please use following links**

```html
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.29.1/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-UP+4FO2HYEW4ZGry1P/mvAVY8EZAXMn8YViV33OnRhhKta/OXf6RoeXwNONwtmYz" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.29.1/dist/js/coreui.bundle.min.js" integrity="sha384-FpAeYtCNjf3C16gHs0Fdq06FUiBkQ9E6nvMr/VG1O5bhx9AvaA8njeB8BHWa5REO" crossorigin="anonymous"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@5.29.1/dist/js/coreui.min.js" integrity="sha384-H29ZNBJ1tKSNNtJeDjAbc/FfS9tuvy6S+9LYLFfvQNnRDtsKrZQP2tJs4V3/rDAk" crossorigin="anonymous"></script>
```

## Package managers

Pull in CoreUI's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, CoreUI for Bootstrap will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install CoreUI for Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/@coreui/coreui):

```sh tab={"label":"CoreUI"}
npm install @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
npm install @coreui/coreui-pro
```

`const coreui = require('@coreui/coreui')` or `import coreui from '@coreui/coreui'` will load all of CoreUI's plugins onto a `coreui` object.
The `coreui` module itself exports all of our plugins. You can manually load CoreUI's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

CoreUI's `package.json` contains some additional metadata under the following keys:

- `sass` - path to CoreUI's main [Sass](https://sass-lang.com/) source file
- `style` - path to CoreUI's non-minified CSS that's been precompiled using the default settings (no customization)

### yarn

Install CoreUI in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/@coreui/coreui):

```sh tab={"label":"CoreUI"}
yarn add @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
yarn add @coreui/coreui-pro
```

### Bun

Install CoreUI in your Bun or Node.js powered apps with [the Bun CLI](https://bun.sh/):

```sh tab={"label":"CoreUI"}
bun add @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
bun add @coreui/coreui-pro
```

### Composer

You can also install and manage CoreUI's Sass and JavaScript using [Composer](https://getcomposer.org/):

```sh
composer require coreui/coreui:5.8.0
```
