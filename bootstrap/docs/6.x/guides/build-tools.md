# Build tools

> Learn how to use CoreUI for Bootstrap included npm scripts to build our documentation, compile source code, run tests, and more.

## Tooling setup

CoreUI for Bootstrap uses [npm scripts](https://docs.npmjs.com/misc/scripts/) for its build system. Our [package.json](https://github.com/coreui/coreui/blob/v5.9.0/package.json) includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use our build system and run our documentation locally, you'll need a copy of CoreUI's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/en/download/), which we use to manage our dependencies.
2. Either [download CoreUI's sources](https://github.com/coreui/coreui/archive/v5.9.0.zip) or fork [CoreUI's repository](https://github.com/coreui/coreui).
3. Navigate to the root `/coreui` directory and run `npm install` to install our local dependencies listed in [package.json](https://github.com/coreui/coreui/blob/v5.9.0/package.json).

When completed, you'll be able to run the various commands provided from the command line.

## Using npm scripts

Our [package.json](https://github.com/coreui/coreui/blob/v5.9.0/package.json) includes numerous tasks for developing the project. Run `npm run` to see all the npm scripts in your terminal. **Primary tasks include:**

| Task | Description |
| --- | --- |
| `npm start` | Compiles CSS and JavaScript, builds the documentation, and starts a local server. |
| `npm run dist` | Creates the `dist/` directory with compiled files. Uses [Sass](https://sass-lang.com/), [Autoprefixer](https://github.com/postcss/autoprefixer), and [terser](https://github.com/terser/terser). |
| `npm test` | Runs tests locally after running `npm run dist` |
| `npm run docs-serve` | Builds and runs the documentation locally. |

## Sass

CoreUI uses [Dart Sass](https://sass-lang.com/dart-sass) for compiling our Sass source files into CSS files (included in our build process), and we recommend you do the same if you're compiling Sass using your own asset pipeline. We previously used Node Sass for CoreUI v4, but LibSass and packages built on top of it, including Node Sass, are now [deprecated](https://sass-lang.com/blog/libsass-is-deprecated).

Dart Sass uses a rounding precision of 10 and for efficiency reasons does not allow adjustment of this value. We don't lower this precision during further processing of our generated CSS, such as during minification, but if you chose to do so we recommend maintaining a precision of at least 6 to prevent issues with browser rounding.

## Autoprefixer

CoreUI for Bootstrap uses [Autoprefixer](https://github.com/postcss/autoprefixer) (included in our build process) to automatically add vendor prefixes to some CSS properties at build time, so we write each declaration once instead of maintaining prefixed copies of it.

We maintain the list of browsers supported through Autoprefixer in a separate file within our GitHub repository. See [.browserslistrc](https://github.com/coreui/coreui/blob/v5.9.0/.browserslistrc) for details.

## JavaScript

Our JavaScript source is TypeScript and lives in `js/src/`. We bundle it with [Rolldown](https://rolldown.rs/), then minify the output with [terser](https://github.com/terser/terser). Rolldown strips the types and lowers the syntax itself, so there is no Babel step.

Rolldown does not read `.browserslistrc`, so [build/browser-targets.mjs](https://github.com/coreui/coreui/blob/v5.9.0/build/browser-targets.mjs) resolves that file at build time and converts it into the target list the bundler expects. Both pipelines therefore honor one browser list — change `.browserslistrc` and the CSS prefixes and the JS syntax level move together.

We ship our own type declarations, emitted by `npm run js-emit-types`, so no `@types/` package is needed. The bundler configuration is in [build/rolldown.config.mjs](https://github.com/coreui/coreui/blob/v5.9.0/build/rolldown.config.mjs).

## Local documentation

Our documentation is built with [Astro](https://astro.build/), a modern static site generator that compiles our Markdown/MDX content, renders the live component examples, and serves everything with hot reloading. Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install all dependencies.
2. From the root `/coreui` directory, run `npm run docs-serve` in the command line.
3. Open `http://localhost:9001/` in your browser, and voilà.

Learn more about using Astro by reading its [documentation](https://docs.astro.build/).

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.
