# CoreUI & Vite

> The official guide for how to include and bundle CoreUI's CSS and JavaScript in your project using Vite.

## What is Vite?

[Vite](https://vite.dev/) is a modern frontend build tool built for speed: an unbundled dev server that starts instantly, and a production build on Rollup.

## Setup

We're building a Vite project with CoreUI from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.

1. **Create a project folder and set up npm.** We'll create the `my-project` folder and initialize npm with the `-y` argument to avoid it asking us all the interactive questions.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

2. **Install Vite.** Unlike our Webpack guide, there’s only a single build tool dependency here. We use `--save-dev` to signal that this dependency is only for development use and not for production.

   ```sh
   npm i --save-dev vite
   ```

3. **Install CoreUI.** Now we can install CoreUI. We'll also install Floating UI since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Floating UI here.

   ```sh
   npm i --save @coreui/coreui @floating-ui/dom
   ```

   **For PRO users**

   ```sh
   npm i --save @coreui/coreui-pro @floating-ui/dom
   ```

4. **Install additional dependency.** In addition to Vite and CoreUI, we need another dependency (Sass) to properly import and bundle CoreUI's CSS.

   ```sh
   npm i --save-dev sass
   ```

Now that we have all the necessary dependencies installed and set up, we can get to work creating the project files and importing CoreUI.

## Project structure

We've already created the `my-project` folder and initialized npm. Now we'll also create our `src` folder, stylesheet, and JavaScript file to round out the project structure. Run the following from `my-project`, or manually create the folder and file structure shown below.

```sh
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

When you're done, your complete project should look like this:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│   |   └── styles.scss
|   └── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```

At this point, everything is in the right place, but Vite won't work because we haven't filled in our `vite.config.js` yet.

## Configure Vite

With dependencies installed and our project folder ready for us to start coding, we can now configure Vite and run our project locally.

1. **Open `vite.config.js` in your editor.** Since it's blank, we'll need to add some boilerplate config to it so we can start our server. This is the whole config the guide needs: it tells Vite where to look for our project's JavaScript and which port the development server should use. `root` is resolved relative to the config file, so there is nothing to import.

   ```js
   export default {
     root: 'src',
     server: {
       port: 8080
     }
   }
   ```

2. **Next we fill in `src/index.html`.** This is the HTML page Vite will load in the browser to utilize the bundled CSS and JS we'll add to it in later steps.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>CoreUI w/ Vite</title>
     </head>
     <body>
       <div class="container py-5 px-4 mx-auto">
         <h1>Hello, CoreUI and Vite!</h1>
         <button class="btn-solid theme-primary">Primary button</button>
       </div>
       
     </body>
   </html>
   ```

   We're including a little bit of CoreUI styling here with the `div class="container"` and `<button>` so that we see when CoreUI's CSS is loaded by Vite.

3. **Now we need an npm script to run Vite.** Open `package.json` and add the `start` script shown below (you should already have the test script). We'll use this script to start our local Vite dev server.

   ```json
   {
     // ...
     "scripts": {
       "start": "vite",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     // ...
   }
   ```

4. **And finally, we can start Vite.** From the `my-project` folder in your terminal, run that newly added npm script:

   ```sh
   npm start
   ```

In the next and final section to this guide, we’ll import all of CoreUI’s CSS and JavaScript.

## Import CoreUI

1. **Now, let's import CoreUI's CSS.** Add the following to `src/scss/styles.scss` to import all of CoreUI's source Sass. Vite resolves the package name through `node_modules`, so no alias and no configuration are needed — `vite.config.js` stays exactly as you left it in the previous section.

   ```scss
   // Use all of CoreUI's CSS
   @use "@coreui/coreui/scss/coreui";
   ```

   PRO users import the PRO package instead. Import **one** of the two — importing both emits the whole stylesheet twice.

   ```scss
   @use "@coreui/coreui-pro/scss/coreui";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs](https://coreui.io/bootstrap/docs/customize/sass/#importing) for details.*

2. **Next we load the CSS and import CoreUI's JavaScript.** Add the following to `src/js/main.js` to load the CSS and import all of CoreUI's JS. Floating UI will be imported automatically through CoreUI.

   ```js
   // Import our custom CSS
   import '../scss/styles.scss'

   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui'
   ```

   PRO users import the PRO package instead. Again, pick one — two `import * as coreui` statements in the same file bind the same name twice and the file will not parse.

   ```js
   import * as coreui from '@coreui/coreui-pro'
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:

   ```js
   import Alert from '@coreui/coreui/js/dist/alert'

   // or, specify which plugins you need:
   import { Tooltip, Toast, Popover } from '@coreui/coreui'
   ```

   *[Read our JavaScript docs](https://coreui.io/bootstrap/docs/getting-started/javascript/) for more information on how to use CoreUI's plugins.*

3. **And you're done! 🎉** With CoreUI's source Sass and JS fully loaded and running at `http://localhost:8080`, you can start adding any CoreUI components you want to use.
