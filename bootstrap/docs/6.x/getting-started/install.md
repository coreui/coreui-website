# Install

> Install CoreUI for Bootstrap with a package manager, pull it from the CDN, or download the compiled or source files — and see exactly what each option contains.

## Package managers

Pull CoreUI's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, CoreUI for Bootstrap will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install CoreUI for Bootstrap in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/@coreui/coreui):

```sh tab={"label":"CoreUI"}
npm install @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
npm install @coreui/coreui-pro
```

After installing, head to [our npm guide](https://coreui.io/bootstrap/docs/guides/npm/) for a full setup guide.

Using `import * as coreui from '@coreui/coreui'` will load all of CoreUI's plugins onto a `coreui` object. Named imports from the package root load the same modules, because every plugin registers its data API when it loads:

```js
import { Tooltip, Toast, Popover } from '@coreui/coreui'
```

To bundle only the plugins you use, import them from the `/js/dist/*.js` files under the package's top-level directory, as shown in [Lean JavaScript](https://coreui.io/bootstrap/docs/customize/optimize/#lean-javascript). The package root loads those same files, so mixing both kinds of import does not load a plugin twice.

CoreUI's `package.json` contains some additional metadata under the following keys:

- `sass` - path to CoreUI's main [Sass](https://sass-lang.com/) source file
- `style` - path to CoreUI's non-minified CSS that's been precompiled using the default settings (no customization)

Additionally, CoreUI ships a `.browserslistrc` file at the package root, which defines browser targets for tools like Browserslist and Autoprefixer. See [Browsers & devices](https://coreui.io/bootstrap/docs/getting-started/browsers-devices/) for the full support policy.

### pnpm

Install CoreUI for Bootstrap in your Node.js powered apps with [pnpm](https://pnpm.io/):

```sh tab={"label":"CoreUI"}
pnpm add @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
pnpm add @coreui/coreui-pro
```

### yarn

Install CoreUI in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/@coreui/coreui):

```sh tab={"label":"CoreUI"}
yarn add @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
yarn add @coreui/coreui-pro
```

Yarn 2+ (aka Yarn Berry) doesn't support the `node_modules` directory by default, so a Sass build that resolves our source files needs some adjustments:

```sh
yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
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
composer require coreui/coreui:5.9.0
```

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver cached version of CoreUI's compiled CSS and JS to your project.

```html
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-9DZ6o3pJWcTwBR8W196XizUEf2kNMD35tkeyWqOB0yzml+nZrEe/13PMCpAIrT4r" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.bundle.min.js" integrity="sha384-FTek6QoTuxz6Bb078pS0kYQ0qH2LZVB5LWwZl8944mluH+TCk0q3OP4PqA+dHJRl" crossorigin="anonymous"></script>
```

If you're using our compiled JavaScript and prefer to include Floating UI separately, add its two files (core, then dom) before our JS, via a CDN preferably.

```html
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js" integrity="sha384-HNCdK6HYLs4EKIDg2Ml3NdfNMVD/LcFbGXnagRABpWmpJjiEuhrtSIckScRnqDOD" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js" integrity="sha384-h02fHnOrZRtL8NvKyMkr2vfTxUr0lTnQdZexzrbPfME4nd74qGfOZ97tbiroJo1Y" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.min.js" integrity="sha384-gf1tanjsJUdqpGpiHABhWprM/7/k8itp69MQWhJGblqf0/0EhOcPA5GPZZE83Br9" crossorigin="anonymous"></script>
```

**If you use CoreUI PRO please use following links**

```html
<link href="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/css/coreui.min.css" rel="stylesheet" integrity="sha384-t6XvzdaSKwWiXlIt37TCu6mfRbZKMmw0dOV7/9md0KPAzPqAaIB9vEGG61vovfPd" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.bundle.min.js" integrity="sha384-Lfg2VpFc1rTjT2KnFUnfPVR7QsBPjRnTTQbSeGCIgEETQgxoBJTPipJFB3rQ+OqC" crossorigin="anonymous"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/core@1.8.0/dist/floating-ui.core.umd.min.js" integrity="sha384-HNCdK6HYLs4EKIDg2Ml3NdfNMVD/LcFbGXnagRABpWmpJjiEuhrtSIckScRnqDOD" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/dist/floating-ui.dom.umd.min.js" integrity="sha384-h02fHnOrZRtL8NvKyMkr2vfTxUr0lTnQdZexzrbPfME4nd74qGfOZ97tbiroJo1Y" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.min.js" integrity="sha384-BQStKoRKknw5iuD+FsEleDFrdJImta4fZsjRE0/MrkSBr4z2RskRs35SRXUP0BJ+" crossorigin="anonymous"></script>
```

### Using ES modules

Our ES module build imports Floating UI by its bare specifier, so a `<script type="module">` needs an import map to resolve it:

```html
<script type="importmap">
{
  "imports": {
    "@floating-ui/dom": "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/+esm"
  }
}
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@coreui/coreui@5.9.0/dist/js/coreui.esm.min.js" integrity="sha384-cCVKOjLm5MUL2D56ALmwdmVzR6wAAlGaMrM/6B5LVTJOKeylVmfGdUCHzO5r0uEF" crossorigin="anonymous"></script>
```

**If you use CoreUI PRO please use following links**

```html
<script type="importmap">
{
  "imports": {
    "@floating-ui/dom": "https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.8.0/+esm"
  }
}
</script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@coreui/coreui-pro@6.0.0-alpha.0/dist/js/coreui.esm.min.js" integrity="sha384-hbV6Ml0BQ0HSZ+kvTgl8IkNOSzlB0+23b2QAODrtZ3lhIUr7Hbaj9EnQYPeyD+hl" crossorigin="anonymous"></script>
```

An import map has to be declared before the first module script that relies on it, and only one is applied per document.

### Using CDNs

When using CDN links, be sure to use the `integrity` attribute to verify the correct files and versions. These hashes are unique to each file and version of CoreUI, so when you update to a new version, be sure the `integrity` attribute is also updated.

We also include a `crossorigin="anonymous"` attribute to prevent [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) errors.

### Alternative CDNs

We recommend [jsDelivr](https://www.jsdelivr.com/) and use it ourselves in our documentation. However, in some cases—like in some specific countries or environments—you may need to use other CDN providers like [cdnjs](https://cdnjs.com/) or [unpkg](https://unpkg.com/).

You'll find the same files on these CDN providers, albeit with different URLs.

> **Security warning** — If the SRI hashes differ for a given file, you shouldn't use the files from that CDN, because it means that the file was modified by someone else.

Note that you should compare same length hashes, e.g. `sha384` with `sha384`, otherwise it's expected for them to be different.
As such, you can use an online tool like [SRI Hash Generator](https://www.srihash.org/) to make sure that the hashes are the same for a given file.
Alternatively, assuming you have OpenSSL installed, you can achieve the same from the CLI, for example:

```sh
openssl dgst -sha384 -binary coreui.min.js | openssl base64 -A
```

## Download

### Compiled CSS and JS

Download ready-to-use compiled code for **CoreUI for Bootstrap v5.9.0** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison](#css-files))
- Compiled and minified JavaScript plugins (see [JS files comparison](#js-files))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Floating UI.

<a href="https://github.com/coreui/coreui/releases/download/v5.9.0/coreui-5.9.0-dist.zip" class="btn-solid theme-primary">Download</a>

### Source files

Compile CoreUI for Bootstrap with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- [Dart Sass](https://sass-lang.com/dart-sass) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools](https://coreui.io/bootstrap/docs/guides/build-tools/#tooling-setup), they are included for developing CoreUI for Bootstrap and its docs, but they're likely unsuitable for your own purposes.

<a href="https://github.com/coreui/coreui/archive/v5.9.0.zip" class="btn-solid theme-primary">Download source</a>

## What's included

Once downloaded, unzip the compressed folder and you'll see something like this:

```text
coreui/
├── css/
│   ├── base.css
│   ├── base.css.map
│   ├── base.min.css
│   ├── base.min.css.map
│   ├── components/
│   │   ├── accordion.css
│   │   ├── … one stylesheet per component …
│   │   ├── classes.json
│   │   └── manifest.json
│   ├── coreui-grid.css
│   ├── coreui-grid.css.map
│   ├── coreui-grid.min.css
│   ├── coreui-grid.min.css.map
│   ├── coreui-legacy.css
│   ├── coreui-legacy.css.map
│   ├── coreui-legacy.min.css
│   ├── coreui-legacy.min.css.map
│   ├── coreui-reboot.css
│   ├── coreui-reboot.css.map
│   ├── coreui-reboot.min.css
│   ├── coreui-reboot.min.css.map
│   ├── coreui-utilities.css
│   ├── coreui-utilities.css.map
│   ├── coreui-utilities.min.css
│   ├── coreui-utilities.min.css.map
│   ├── coreui.css
│   ├── coreui.css.map
│   ├── coreui.min.css
│   └── coreui.min.css.map
└── js/
    ├── coreui.bundle.js
    ├── coreui.bundle.js.map
    ├── coreui.bundle.min.js
    ├── coreui.bundle.min.js.map
    ├── coreui.esm.js
    ├── coreui.esm.js.map
    ├── coreui.esm.min.js
    ├── coreui.esm.min.js.map
    ├── coreui.js
    ├── coreui.js.map
    ├── coreui.min.js
    └── coreui.min.js.map
```

This is the most basic form of CoreUI: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`coreui.*`), as well as compiled and minified CSS and JS (`coreui.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`coreui.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`coreui.bundle.js` and minified `coreui.bundle.min.js`) include [Floating UI](https://floating-ui.com/).

### CSS files

CoreUI for Bootstrap includes a handful of options for including some or all of our compiled CSS.

<table class="table">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui.min.css</code></div>
      </th>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-grid.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-grid.min.css</code></div>
      </th>
      <td><a class="link-secondary" href="/layout/grid/">Only grid system</a></td>
      <td class="fg-2">&mdash;</td>
      <td class="fg-2">&mdash;</td>
      <td><a class="link-secondary" href="/utilities/flex/">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-utilities.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-utilities.min.css</code></div>
      </th>
      <td class="fg-2">&mdash;</td>
      <td class="fg-2">&mdash;</td>
      <td class="fg-2">&mdash;</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-reboot.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-reboot.min.css</code></div>
      </th>
      <td class="fg-2">&mdash;</td>
      <td><a class="link-secondary" href="/content/reboot/">Only Reboot</a></td>
      <td class="fg-2">&mdash;</td>
      <td class="fg-2">&mdash;</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui-legacy.css</code></div>
        <div><code class="fw-normal text-nowrap">coreui-legacy.min.css</code></div>
      </th>
      <td class="fg-2">&mdash;</td>
      <td class="fg-2">&mdash;</td>
      <td><a class="link-secondary" href="#v5-compatibility-css">Only the v5 spellings</a></td>
      <td class="fg-2">&mdash;</td>
    </tr>
  </tbody>
</table>

### v5 compatibility CSS

`coreui.css` carries the v6 class API only. The v5 spellings that v6 deprecated
ship in `coreui-legacy.css`, which you load after it:

```html
<link href="css/coreui.min.css" rel="stylesheet">
<link href="css/coreui-legacy.min.css" rel="stylesheet">
```

It is 3.4&nbsp;kB gzip and covers:

- the responsive dropdown alignment classes `.dropdown-menu{-sm|-md|-lg|-xl|-2xl}{-start|-end}`, replaced by a responsive `data-coreui-placement`
- the colour modifiers `.alert-{color}`, `.btn-{color}`, `.btn-outline-{color}`,
  `.btn-subtle-{color}`, `.btn-ghost-{color}`, `.callout-{color}`,
  `.chip-{color}` and `.list-group-item-{color}` — each an alias of the matching
  [`.theme-{color}`](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) class;
- the form check markup `.form-check`, `.form-check-input`, `.form-check-label`,
  `.form-check-inline`, `.form-switch` and `.form-switch-lg` / `-xl` — aliases of
  [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/), [`.check`](https://coreui.io/bootstrap/docs/forms/checkbox/),
  [`.radio`](https://coreui.io/bootstrap/docs/forms/radio/) and [`.switch`](https://coreui.io/bootstrap/docs/forms/switch/);
- `.btn-check` on the input, with a sibling `<label class="btn">`, which v6
  spells as `.btn-check` on the label.

Everything in it is removed in v7, so treat the sheet as a migration budget: drop
it once your markup uses the v6 spellings. It also loads on its own alongside
`base.css` and the per-component files, last in the order.

### Per-component CSS files

`coreui.css` is one file for the whole library. When a page uses a handful of
components, `base.css` plus one stylesheet per component ships far less CSS:
a card, a button group and an input group come to about 3.5&nbsp;kB gzip on top
of a 6.4&nbsp;kB base, against 71.4&nbsp;kB for the full bundle.

The split follows the Sass partials, so a component and its parts share one file
(`card.css` covers `.card`, `.card-header` and `.card-body`; `buttons.css`
covers the button and the button group), while a component that stands on its
own gets its own file — the close button, the loading button and the search
button are separate from `buttons.css`.

`base.css` carries the design tokens on `:root`, [Reboot](https://coreui.io/bootstrap/docs/content/reboot/) and
the `.theme-*` classes. Every component stylesheet reads those tokens, Reboot
sets the element defaults components build on, and the theme classes are how a
component is coloured — `<button class="btn-solid theme-primary">` is grey
without them. So `base.css` always comes first; a component file on its own has
nothing to resolve its tokens against.

The rest of the [helpers](https://coreui.io/bootstrap/docs/helpers/) and all
[utilities](https://coreui.io/bootstrap/docs/utilities/api/) ship in `coreui-utilities.css`, not per component:
they are written on your markup, not on a component's. The one exception is
`.visually-hidden`, which the calendar's JavaScript renders, so it has its own
file that `calendar` requires.

Each file in `css/components/` opens with the same cascade layer order, so
component stylesheets can be interleaved with `coreui-utilities.css` or with
your own layers in any order:

```css
@layer colors, config, root, reboot, layout, content, forms, components, custom, helpers, utilities;
```

Within one layer the last rule still wins, so load the files in the order
`css/components/manifest.json` gives — the same order `coreui.css` uses. Each
entry names its stylesheet, its position in that order, and the components it
needs alongside it:

```json
{
  "card": { "file": "components/card.css", "order": 36, "requires": [] },
  "date-picker": {
    "file": "components/date-picker.css",
    "order": 41,
    "requires": ["calendar", "forms/floating-labels", "forms/form-control", "forms/form-control-group", "forms/form-date-time", "helpers/visually-hidden", "popup"]
  }
}
```

`requires` is the full closure, so nothing else has to be resolved: load the
listed files and the component's own, and the component renders exactly as it
does from the full bundle. The list covers markup the JavaScript renders as
well as the Sass a component builds on — the date picker draws a calendar
inside a form control group, which is why it asks for both, and the calendar
brings `helpers/visually-hidden` with it.

`css/components/classes.json` maps a class name to the entry that owns it, so
you can go from the markup you write to the files you need — look up each class,
then load those entries together with their `requires`:

```json
{
  "card-body": "card",
  "fade": "transitions",
  "input-group": "forms/input-group"
}
```

A class belongs to the stylesheet that declares it as a rule of its own; a class
no stylesheet declares that way goes to the single stylesheet that styles it —
`.tab-pane` is only ever styled under `.tab-content`, `.number-input` only ever
as the context of the field inside it. Classes several stylesheets style are
absent, which is what keeps the states out: `.show`, `.active` and `.disabled`
belong to the component they sit on, not to a file of their own. `.theme-*` is
absent too — it lives in `base.css`, which you load anyway.

A page that uses a card, a button group and an input group loads:

```html
<link href="css/base.css" rel="stylesheet">
<link href="css/components/forms/form-control.css" rel="stylesheet">
<link href="css/components/forms/input-group.css" rel="stylesheet">
<link href="css/components/buttons.css" rel="stylesheet">
<link href="css/components/card.css" rel="stylesheet">
```

From npm the same files are reachable as
`@coreui/coreui-pro/css/base.css` and
`@coreui/coreui-pro/css/components/card.css`, minified twins included.

`coreui.css` is unchanged and remains the recommended drop-in for pages that do
not build their CSS.

### JS files

Similarly, we have options for including some or all of our compiled JavaScript.

<table class="table">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Floating UI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui.bundle.js</code></div>
        <div><code class="fw-normal text-nowrap">coreui.bundle.min.js</code></div>
      </th>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">coreui.js</code></div>
        <div><code class="fw-normal text-nowrap">coreui.min.js</code></div>
      </th>
      <td class="fg-2">&mdash;</td>
    </tr>
  </tbody>
</table>

### Source code

The CoreUI for Bootstrap source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
coreui/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └──content/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for packages, license information, and development.

## For AI tools & LLMs

Working with an LLM or an agentic coding tool? Our documentation ships in machine-readable formats — a curated [/llms.txt](https://coreui.io/bootstrap/docs/ai-tools/llms-txt/) index, a full-text variant for direct ingestion, and an [MCP server](https://coreui.io/bootstrap/docs/ai-tools/mcp/) that serves the docs over Model Context Protocol. See [AI Tools](https://coreui.io/bootstrap/docs/ai-tools/llms-txt/) for setup.
