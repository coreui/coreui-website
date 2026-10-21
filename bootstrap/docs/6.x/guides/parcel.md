# CoreUI & Parcel

> The official guide for how to include and bundle CoreUI's CSS and JavaScript in your project using Parcel.

## What is Parcel?

[Parcel](https://parceljs.org/) is a web application bundler with a zero-configuration setup out of the box. It offers what the more advanced bundlers do while staying easy to start with.

## Setup

We're building a Parcel project with CoreUI from scratch, so there are some prerequisites and upfront steps before we can really get started. This guide requires you to have Node.js installed and some familiarity with the terminal.

1. **Create a project folder and set up npm.** We'll create the `my-project` folder and initialize npm with the `-y` argument to avoid it asking us all the interactive questions.

   ```sh
   mkdir my-project && cd my-project
   npm init -y
   ```

   Delete the `"main": "index.js"` line from that fresh `package.json`. Parcel reads `main` as a library build target, and with it present the build stops before it starts (*Target "main" declares an output file path of "index.js" which does not match the compiled bundle type "html"*).

2. **Install Parcel.** Unlike our Webpack guide, there's only a single build tool dependency here. Parcel will automatically install language transformers (like Sass) as it detects them. We use `--save-dev` to signal that this dependency is only for development use and not for production.

   ```sh
   npm i --save-dev parcel
   ```

3. **Install CoreUI.** Now we can install CoreUI. We'll also install Floating UI since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Floating UI here.

   ```sh
   npm i --save @coreui/coreui @floating-ui/dom
   ```

   **For PRO users**

   ```sh
   npm i --save @coreui/coreui-pro @floating-ui/dom
   ```

Now that we have all the necessary dependencies installed, we can get to work creating the project files and importing CoreUI.

## Project structure

We've already created the `my-project` folder and initialized npm. Now we'll also create our `src` folder, stylesheet, and JavaScript file to round out the project structure. Run the following from `my-project`, or manually create the folder and file structure shown below.

```sh
mkdir {src,src/js,src/scss}
touch .sassrc src/index.html src/js/main.js src/scss/styles.scss
```

When you're done, your complete project should look like this:

```text
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   └── styles.scss
│   └── index.html
├── .sassrc
├── package-lock.json
└── package.json
```

At this point, everything is in the right place, but Parcel needs an HTML page and npm script to start our server.

## Configure Parcel

With dependencies installed and our project folder ready for us to start coding, we can now configure Parcel and run our project locally. Parcel itself requires no configuration file by design, but we do need an npm script and an HTML file to start our server.

1. **Fill in the `src/index.html` file.** Parcel needs a page to render, so we use our `index.html` page to set up some basic HTML, including our CSS and JavaScript files.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>CoreUI w/ Parcel</title>
       <link rel="stylesheet" href="scss/styles.scss">
       
     </head>
     <body>
       <div class="container py-5 px-4 mx-auto">
         <h1>Hello, CoreUI and Parcel!</h1>
         <button class="btn-solid theme-primary">Primary button</button>
       </div>
     </body>
   </html>
   ```

   We're including a little bit of CoreUI styling here with the `div class="container"` and `<button>` so that we see when CoreUI's CSS is loaded by Parcel.

   Parcel will automatically detect we're using Sass and install the [Sass Parcel plugin](https://parceljs.org/languages/sass/) to support it. However, if you wish, you can also manually run `npm i --save-dev @parcel/transformer-sass`.

2. **Add the Parcel npm scripts.** Open the `package.json` and add the following `start` script to the `scripts` object. We'll use this script to start our Parcel development server and render the HTML file we created after it's compiled into the `dist` directory.

   ```json
   {
      // ...
      "scripts": {
        "start": "parcel serve src/index.html --public-url / --dist-dir dist",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      // ...
   }
   ```

3. **And finally, we can start Parcel.** From the `my-project` folder in your terminal, run that newly added npm script:

   ```sh
   npm start
   ```

In the next and final section to this guide, we'll import all of CoreUI's CSS and JavaScript.

## Import CoreUI

Importing CoreUI into Parcel takes one line of Sass config and two imports, one into our `styles.scss` and one into our `main.js`.

1. **Point the Sass transformer at `node_modules`.** Unlike Vite and Webpack, Parcel's Sass transformer resolves imports relative to the file only — a package path finds nothing on its own, whether or not you prefix it with `~`. Create a `.sassrc` next to `package.json` so package paths resolve:

   ```json
   {
     "includePaths": ["node_modules"]
   }
   ```

2. **Import CoreUI's CSS.** Add the following to `src/scss/styles.scss` to import all of CoreUI's source Sass.

   ```scss
   // Use all of CoreUI's CSS
   @use "@coreui/coreui/scss/coreui";
   ```

   PRO users import the PRO package instead. Import **one** of the two — importing both emits the whole stylesheet twice.

   ```scss
   @use "@coreui/coreui-pro/scss/coreui";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs](https://coreui.io/bootstrap/docs/customize/sass/#importing) for details.*

3. **Import CoreUI's JS.** Add the following to `src/js/main.js` to import all of CoreUI's JS. Floating UI will be imported automatically through CoreUI.

   ```js
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

4. **And you're done! 🎉** With CoreUI's source Sass and JS fully loaded and running at `http://localhost:1234`, you can start adding any CoreUI components you want to use.
