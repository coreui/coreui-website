# CoreUI & npm

> The official guide for how to build a starter project with CoreUI’s CSS and JavaScript using just npm — no bundler required.

## What is npm?

[npm](https://www.npmjs.com/) is the default package manager for Node.js. In this guide, we use npm to install CoreUI and its dependencies, then compile Sass to CSS using command-line tools — no bundler required. If you'd rather have a bundler manage the assets, see our [Vite](https://coreui.io/bootstrap/docs/guides/vite/), [Webpack](https://coreui.io/bootstrap/docs/guides/webpack/) or [Parcel](https://coreui.io/bootstrap/docs/guides/parcel/) guides.

## Setup

We're building a npm project with CoreUI from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.

1. **Create a project folder and set up npm.** We'll create the `my-project` folder and initialize npm with the `-y` argument to avoid it asking us all the interactive questions.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Install CoreUI.** Now we can install CoreUI. We'll also install Floating UI since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Floating UI here.

   ```sh
   npm i --save @coreui/coreui @floating-ui/dom
   ```

   **For PRO users**

   ```sh
   npm i --save @coreui/coreui-pro @floating-ui/dom
   ```

3. **Install additional dependencies.** In addition to CoreUI, we need a few more dependencies to compile and post-process our CSS. Sass compiles our source `.scss` files into CSS, and Autoprefixer and PostCSS handle browser compatibility. We install the `postcss-cli` package so we can run PostCSS from the command line.

   ```sh
   npm i --save-dev autoprefixer postcss postcss-cli sass
   ```

4. **Install local development tools.** Lastly, to make life a little easier, we recommend some dev tools for running a local server with automatic rebuilds. We use `nodemon` to watch files for changes, `npm-run-all` to run multiple npm scripts at a time, `sirv-cli` to run a local server, and `stylelint` to keep your Sass consistent with the style CoreUI is written in.

   ```sh
   npm i --save-dev nodemon npm-run-all sirv-cli stylelint stylelint-config-twbs-bootstrap
   ```

Now that we have all the necessary dependencies installed, we can get to work creating the project files and importing CoreUI.

## Project structure

We've already created the `my-project` folder and initialized npm. Now we'll also create our `scss` folder, stylesheet, and configuration files to round out the project structure. Run the following from `my-project`, or manually create the folder and file structure shown below.

```sh
mkdir {css,scss}
touch index.html scss/styles.scss postcss.config.js stylelint.config.mjs
```

When you're done, your project should look like this:

```text
my-project/
├── css/
├── scss/
│   └── styles.scss
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
└── stylelint.config.mjs
```

At this point, everything is in the right place, but we'll need to configure our files and add some npm scripts to compile the CSS.

## Configure npm

With dependencies installed and our project folder ready for us to start coding, we can now configure our npm scripts and run our project locally.

1. **Open `postcss.config.js` in your editor.** We need to configure Autoprefixer to run after Sass compilation for browser compatibility.

   ```js
   const autoprefixer = require('autoprefixer')

   module.exports = {
     plugins: [
       autoprefixer
     ]
   }
   ```

2. **Tell Autoprefixer which browsers to support.** Without this, Autoprefixer falls back to its own defaults, which track newer browsers than [the ones CoreUI supports](https://coreui.io/bootstrap/docs/getting-started/browsers-devices/) — and quietly skips prefixes the floor still needs, such as `-webkit-backdrop-filter` for Safari below 18. Add a `browserslist` entry to `package.json` mirroring our floors:

   ```json
   {
     // ...
     "browserslist": [
       "Chrome >= 123",
       "Edge >= 123",
       "Firefox >= 130",
       "Safari >= 17.5",
       "iOS >= 17.5"
     ],
     // ...
   }
   ```

3. **Fill in the `index.html` file.** We need an HTML page to render our project. This page links to the compiled CSS file and includes CoreUI's pre-built JavaScript bundle. Since this setup doesn't use a JavaScript bundler, we load the bundle — which already contains Floating UI — directly via a `
     </body>
   </html>
   ```

   We're including a little bit of CoreUI styling here with the `div class="container"` and `<button>` so that we see when CoreUI's CSS is loaded by our npm scripts.

   *[Read our JavaScript docs](https://coreui.io/bootstrap/docs/getting-started/javascript/) for more information on how to use CoreUI's plugins.*

4. **Add npm scripts to `package.json`.** Open `package.json` and add the following scripts. We use `sass` to compile our Sass (with `--load-path=node_modules` so it can resolve CoreUI), `postcss-cli` to apply Autoprefixer, `nodemon` to watch for changes, `npm-run-all` to run scripts in sequence or in parallel, `sirv-cli` to serve our project, and `stylelint` to lint our Sass.

   ```json
   {
     // ...
     "scripts": {
       "css-compile": "sass --load-path=node_modules --style expanded --source-map --embed-sources scss:css",
       "css-prefix": "postcss --config postcss.config.js --replace \"css/*.css\" \"!css/*.min.css\"",
       "build": "npm-run-all --sequential css-compile css-prefix",
       "watch": "nodemon --watch scss/ --ext scss --exec \"npm run build\"",
       "serve": "sirv --port 8080 --dev .",
       "start": "npm-run-all build --parallel watch serve",
       "lint": "stylelint \"scss/**/*.scss\""
     },
     // ...
   }
   ```

5. **Configure `stylelint.config.mjs`.** `stylelint-config-twbs-bootstrap` is the shared config CoreUI's own stylesheets are linted with, so your Sass follows the same rules as the source you are extending.

   ```js
   /** @type {import('stylelint').Config} */
   export default {
     extends: 'stylelint-config-twbs-bootstrap',
   }
   ```

6. **And finally, we can start the npm scripts.** From the `my-project` folder in your terminal, run that newly added npm script:

   ```sh
   npm start
   ```

In the next and final section to this guide, we'll import all of CoreUI's CSS.

## Import CoreUI

Importing CoreUI into our project requires adding a Sass import to our `scss/styles.scss` file.

1. **Import CoreUI's CSS.** Add the following to `scss/styles.scss` to import all of CoreUI's source Sass. We use the `@use` rule, which is the modern Sass module system.

   ```scss
   // Use all of CoreUI's CSS
   @use "@coreui/coreui/scss/coreui";
   ```

   PRO users import the PRO package instead. Import **one** of the two — importing both emits the whole stylesheet twice.

   ```scss
   @use "@coreui/coreui-pro/scss/coreui";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs](https://coreui.io/bootstrap/docs/customize/sass/#importing) for details.*

2. **Optionally, customize CoreUI's Sass tokens.** Since CoreUI uses Sass modules, you can override default values using the `with ()` syntax. You only need to include the keys you want to change — CoreUI merges your overrides with its defaults.

   ```scss
   @use "@coreui/coreui/scss/coreui" with (
     $root-tokens: (
       --cui-radius-5: .25rem,
       --cui-spacer: 1.5rem,
     ),
     $alert-tokens: (
       --cui-alert-padding-x: 2rem,
       --cui-alert-border-radius: 1rem,
     )
   );
   ```

   *Read [Sass](https://coreui.io/bootstrap/docs/customize/sass/#variable-defaults) for how overrides merge with defaults, and [Architecture](https://coreui.io/bootstrap/docs/customize/architecture/#component-tokens) for all the levels an override can live at.*

3. **And you're done! 🎉** With CoreUI's source Sass fully loaded and compiled at `http://localhost:8080`, you can start adding any CoreUI components you want to use.
