# Install

> Install CoreUI for Vue.js with a package manager, add the required peer dependencies, and import the styles from the compiled CSS or the Sass source.

## Package managers

Pull CoreUI for Vue's **source files** into nearly any project with some of the most popular package managers. The Vue components are styled by the `@coreui/coreui` or `@coreui/coreui-pro` CSS library, so install it alongside the component package. If you compile the styles from the Sass source instead of using the compiled CSS, you will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install CoreUI for Vue in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/@coreui/vue):

```sh tab={"label":"CoreUI"}
npm install @coreui/vue @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
npm install @coreui/vue-pro @coreui/coreui-pro
```

The component packages declare `vue` (version 3.5 or newer) as a peer dependency — your project provides it, and npm will warn if it is missing:

```sh
npm install vue
```

The `@coreui/coreui` and `@coreui/coreui-pro` packages contain some additional metadata under the following keys in `package.json`:

- `sass` - path to CoreUI's main [Sass](https://sass-lang.com/) source file
- `style` - path to CoreUI's non-minified CSS that's been precompiled using the default settings (no customization)

### pnpm

Install CoreUI for Vue in your Node.js powered apps with [pnpm](https://pnpm.io/):

```sh tab={"label":"CoreUI"}
pnpm add @coreui/vue @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
pnpm add @coreui/vue-pro @coreui/coreui-pro
```

### yarn

Install CoreUI for Vue in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/@coreui/vue):

```sh tab={"label":"CoreUI"}
yarn add @coreui/vue @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
yarn add @coreui/vue-pro @coreui/coreui-pro
```

Yarn 2+ (aka Yarn Berry) doesn't support the `node_modules` directory by default, so compiling our Sass source needs some adjustments:

```sh
yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
```

### Bun

Install CoreUI for Vue in your Bun or Node.js powered apps with [the Bun CLI](https://bun.sh/):

```sh tab={"label":"CoreUI"}
bun add @coreui/vue @coreui/coreui
```

```sh tab={"label":"CoreUI PRO"}
bun add @coreui/vue-pro @coreui/coreui-pro
```

## Using components

```js tab={"label":"CoreUI"}
import { CAlert } from '@coreui/vue';
```

```js tab={"label":"CoreUI PRO"}
import { CAlert } from '@coreui/vue-pro';
```

## Stylesheets

Import the compiled CSS once, in your application's entry point:

```js tab={"label":"CoreUI"}
import '@coreui/coreui/dist/css/coreui.min.css'
```

```js tab={"label":"CoreUI PRO"}
import '@coreui/coreui-pro/css/base.css'
```

CoreUI for Vue PRO components import the stylesheet they render into, so the one import you make yourself is the base layer — tokens, palette and Reboot. See [per-component stylesheets](https://coreui.io/vue/docs/customize/optimize/#per-component-stylesheets) for what that means for your bundle, and for the `/unstyled` entry point if you'd rather ship `coreui.css` whole.

Or compile the styles from the Sass source to [customize](https://coreui.io/vue/docs/customize/sass/) variables, maps, and mixins along the way:

```scss tab={"label":"CoreUI"}
@use "@coreui/coreui/scss/coreui";
```

```scss tab={"label":"CoreUI PRO"}
@use "@coreui/coreui-pro/scss/coreui";
```

## Other delivery channels

CDN links, Composer, and downloadable compiled or source archives apply to the vanilla library — see [the CoreUI for Bootstrap install page](https://coreui.io/bootstrap/docs/getting-started/install/) if you need them.

## For AI tools & LLMs

Working with an LLM or an agentic coding tool? Our documentation ships in machine-readable formats — a curated [/llms.txt](https://coreui.io/vue/docs/ai-tools/llms-txt/) index, a full-text variant for direct ingestion, and an [MCP server](https://coreui.io/vue/docs/ai-tools/mcp/) that serves the docs over Model Context Protocol. See [AI Tools](https://coreui.io/vue/docs/ai-tools/llms-txt/) for setup.
