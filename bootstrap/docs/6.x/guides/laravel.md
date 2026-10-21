# CoreUI & Laravel

> The official guide for how to include and bundle CoreUI’s CSS and JavaScript in your Laravel project.

## Setup

1. **Create a new Laravel project.** Start by creating a new Laravel project:

   ```sh
   composer create-project laravel/laravel example-app
   ```

   After installation, enter the project directory:

   ```sh
   cd example-app
   ```

2. **Install CoreUI.** Now we can install CoreUI. We’ll also install Floating UI since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don’t plan on using those components, you can omit Floating UI here.

   ```sh
   npm i --save @coreui/coreui @floating-ui/dom
   ```

   **For PRO users**

   ```sh
   npm i --save @coreui/coreui-pro @floating-ui/dom
   ```

3. **Install Sass.** In addition to CoreUI, we need Sass to properly import and bundle CoreUI’s CSS.

   ```sh
   npm i --save-dev sass
   ```

4. **Remove Tailwind CSS.** A fresh Laravel project ships with Tailwind CSS; CoreUI replaces it.

   ```sh
   npm remove tailwindcss @tailwindcss/vite
   ```

Now that we have all the necessary dependencies installed and set up, we can get to work creating the project files and importing CoreUI.

## Project structure

We’ve already created the `example-app` folder and installed all dependencies. Now we’ll also create our `app.scss` file. Run the following from `example-app`, or manually create the folder and file structure shown below.

```sh
mkdir resources/sass
touch resources/sass/app.scss
```

You can also remove the `app.css` file, because we don't need it — it only carried the Tailwind setup we just uninstalled.

```sh
rm resources/css/app.css
rmdir resources/css
```

When you're done, your complete project should look like this:

```text
example-app/
├── app/
├── bootstrap/
├── config/
├── database/
├── node_modules/
├── public/
├── resources/
│   ├── js/
│   │   ├── app.js
│   │   └── bootstrap.js
│   ├── sass/
│   │   └── app.scss
│   └── views/
│       └── welcome.blade.php
├── routes/
├── storage/
├── tests/
├── vendor/
├── ...
├── composer.json
├── composer.lock
├── package-lock.json
├── package.json
├── ...
└── vite.config.js
```

## Configure Vite

With dependencies installed and our project folder ready for us to start coding, we can now configure Vite.

1. **Open `vite.config.js` in your editor.** Since it’s not blank, we’ll need to make some changes: point the input at our `app.scss` file instead of `app.css`, and drop the Tailwind plugin we uninstalled.

   ```diff
   import { defineConfig } from 'vite';
   import laravel from 'laravel-vite-plugin';
   -import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
       plugins: [
           laravel({
   -            input: ['resources/css/app.css', 'resources/js/app.js'],
   +            input: ['resources/sass/app.scss', 'resources/js/app.js'],
               refresh: true,
           }),
   -        tailwindcss(),
       ],
       server: {
           watch: {
               ignored: ['**/storage/framework/views/**'],
           },
       },
   });
   ```

2. **Next, we modify `resources/views/welcome.blade.php`.** The welcome view already loads Vite assets in its `<head>` — update the stylesheet path to our SCSS file:

   ```diff
   -    @vite(['resources/css/app.css', 'resources/js/app.js'])
   +    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
   ```

   The `@vite` directive sits inside an `@if` that falls back to inline styles until the first build — after `npm run build` (or with the dev server running) your bundled CSS and JS take over. The default welcome page is styled with Tailwind classes, so it will render unstyled once CoreUI replaces it; that's expected — it's the canvas for your own markup.

## Import CoreUI

1. **Now, let’s import CoreUI’s CSS.** Add the following to `resources/sass/app.scss` to import all of CoreUI’s source Sass.

   ```scss
   // Use all of CoreUI's CSS
   @use "@coreui/coreui/scss/coreui";
   ```

   **For PRO users**

   ```scss
   // Use all of CoreUI PRO's CSS
   @use "@coreui/coreui-pro/scss/coreui";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs](https://coreui.io/bootstrap/docs/customize/sass/#importing) for details.*

2. **Next we import CoreUI’s JavaScript**. Add the following to `resources/js/bootstrap.js` to import all of CoreUI’s JS. Floating UI will be imported automatically through CoreUI.

   ```js
   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui'

   window.coreui = coreui
   ```

   **For PRO users**

   ```js
   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui-pro'

   window.coreui = coreui
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:

   ```js
   import { Tooltip, Toast, Popover } from '@coreui/coreui'
   ```

   *[Read our JavaScript docs](https://coreui.io/bootstrap/docs/getting-started/javascript/) for more information on how to use CoreUI's plugins.*

## Build and Run Laravel App

1. **Build the CSS and JS files.** From the `example-app` folder in your terminal, run:

   ```sh
   npm run build
   ```

2. **And finally, we can start our Laravel App.** From the `example-app` folder in your terminal, run:

   ```sh
   php artisan serve
   ```

   During development, run `composer run dev` instead — it starts the PHP server and the Vite dev server together, so changes to your Sass and JS rebuild on save.

3. **And you’re done!** 🎉 Your app is running at `http://localhost:8000` with CoreUI’s source Sass and JS fully loaded. Now you can start adding any CoreUI components you want to use.
