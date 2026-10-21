# CoreUI & Django

> The official guide for how to include and bundle CoreUI’s CSS and JavaScript in your Django project.

Django renders HTML on the server, which is exactly the environment our data attributes and plugins are built for — no framework wrapper is involved. All this guide really configures is the asset pipeline.

If you only want the compiled files, you don't need Node.js at all: put `coreui.min.css` and `coreui.bundle.min.js` (see [Install](https://coreui.io/bootstrap/docs/getting-started/install/)) in a `static/` folder and link them with `{% static %}`. The rest of this guide sets up the **source** pipeline — your own Sass entry point compiled by Vite — using [django-vite](https://github.com/MrBin99/django-vite).

## Setup

1. **Create a new Django project.** Start in a fresh virtual environment and install Django together with django-vite:

   ```sh
   python -m venv .venv
   source .venv/bin/activate
   pip install django django-vite
   django-admin startproject example_project
   cd example_project
   ```

2. **Initialize npm.** Django doesn't ship a `package.json`, so we create one:

   ```sh
   npm init -y
   ```

3. **Install CoreUI.** Now we can install CoreUI. We'll also install Floating UI since our dropdowns, popovers, and tooltips depend on it for their positioning. If you don't plan on using those components, you can omit Floating UI here.

   ```sh
   npm i --save @coreui/coreui @floating-ui/dom
   ```

   **For PRO users**

   ```sh
   npm i --save @coreui/coreui-pro @floating-ui/dom
   ```

4. **Install the build dependencies.** In addition to CoreUI, we need Vite and Sass to properly import and bundle CoreUI's CSS.

   ```sh
   npm i --save-dev vite sass
   ```

Now that we have all the necessary dependencies installed and set up, we can get to work creating the project files and importing CoreUI.

## Project structure

We've already created the `example_project` folder. Now we'll create our asset sources, a template, and the Vite config. Run the following from `example_project`, or manually create the folder and file structure shown below.

```sh
mkdir -p assets/js assets/scss templates
touch assets/js/app.js assets/scss/app.scss templates/index.html vite.config.js
```

When you're done, your complete project should look like this:

```text
example_project/
├── assets/
│   ├── js/
│   │   └── app.js
│   └── scss/
│       └── app.scss
├── example_project/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── node_modules/
├── templates/
│   └── index.html
├── manage.py
├── package-lock.json
├── package.json
└── vite.config.js
```

## Configure Vite and Django

1. **Open `vite.config.js` in your editor.** Since it's blank, we'll need to add some boilerplate config. `base` matches Django's `STATIC_URL`, and the manifest is what django-vite reads to turn an entry point into script and stylesheet tags after a build.

   ```js
   export default {
     base: '/static/',
     build: {
       manifest: 'manifest.json',
       outDir: 'assets/dist',
       rollupOptions: {
         input: ['assets/js/app.js'],
       },
     },
   }
   ```

2. **Next we configure Django.** In `example_project/settings.py`, register django-vite, tell it where the manifest lands, and add the template and static folders:

   ```python
   INSTALLED_APPS = [
       # ...
       'django_vite',
   ]

   TEMPLATES = [
       {
           # ...
           'DIRS': [BASE_DIR / 'templates'],
           # ...
       },
   ]

   DJANGO_VITE = {
       'default': {
           'dev_mode': DEBUG,
           'manifest_path': BASE_DIR / 'assets' / 'dist' / 'manifest.json',
       }
   }

   STATICFILES_DIRS = [BASE_DIR / 'assets' / 'dist']
   ```

   With `dev_mode` following `DEBUG`, templates load assets straight from the Vite dev server while you develop, and from the built manifest in production.

3. **Now we need a page to render.** Fill in `templates/index.html` — the two template tags do all the work: `{% vite_hmr_client %}` connects hot reloading in dev mode, and `{% vite_asset %}` emits the script and stylesheet tags for our entry point.

   ```html
   {% load django_vite %}
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>CoreUI w/ Django</title>
       {% vite_hmr_client %}
       {% vite_asset 'assets/js/app.js' %}
     </head>
     <body>
       <div class="container py-5 px-4 mx-auto">
         <h1>Hello, CoreUI and Django!</h1>
         <button class="btn-solid theme-primary">Primary button</button>
       </div>
     </body>
   </html>
   ```

   We're including a little bit of CoreUI styling here with the `div class="container"` and `<button>` so that we see when CoreUI's CSS is loaded.

4. **And route it.** In `example_project/urls.py`:

   ```python
   from django.contrib import admin
   from django.urls import path
   from django.views.generic import TemplateView

   urlpatterns = [
       path('admin/', admin.site.urls),
       path('', TemplateView.as_view(template_name='index.html')),
   ]
   ```

5. **Finally, add the npm scripts.** Open `package.json` and add the `dev` and `build` scripts shown below:

   ```json
   {
     // ...
     "scripts": {
       "dev": "vite",
       "build": "vite build"
     },
     // ...
   }
   ```

## Import CoreUI

1. **Now, let's import CoreUI's CSS.** Add the following to `assets/scss/app.scss` to import all of CoreUI's source Sass. Vite resolves the package name through `node_modules`, so no alias and no configuration are needed.

   ```scss
   // Use all of CoreUI's CSS
   @use "@coreui/coreui/scss/coreui";
   ```

   PRO users import the PRO package instead. Import **one** of the two — importing both emits the whole stylesheet twice.

   ```scss
   @use "@coreui/coreui-pro/scss/coreui";
   ```

   *You can also import our stylesheets individually if you want. [Read our Sass import docs](https://coreui.io/bootstrap/docs/customize/sass/#importing) for details.*

2. **Next we load the CSS and import CoreUI's JavaScript.** Add the following to `assets/js/app.js`. Floating UI will be imported automatically through CoreUI.

   ```js
   // Import our custom CSS
   import '../scss/app.scss'

   // Import all of CoreUI's JS
   import * as coreui from '@coreui/coreui'

   window.coreui = coreui
   ```

   PRO users import the PRO package instead. Again, pick one — two `import * as coreui` statements in the same file bind the same name twice and the file will not parse.

   ```js
   import * as coreui from '@coreui/coreui-pro'
   ```

   You can also import JavaScript plugins individually as needed to keep bundle sizes down:

   ```js
   import { Tooltip, Toast, Popover } from '@coreui/coreui'
   ```

   *[Read our JavaScript docs](https://coreui.io/bootstrap/docs/getting-started/javascript/) for more information on how to use CoreUI's plugins.*

## Build and Run Django App

1. **During development, run both servers.** From `example_project`, start the Vite dev server in one terminal and Django in another — the template tags pick assets up from Vite with hot reloading:

   ```sh
   npm run dev
   ```

   ```sh
   python manage.py runserver
   ```

2. **For a production build**, bundle the assets and let Django's static pipeline take over — django-vite switches to the manifest as soon as `dev_mode` is off:

   ```sh
   npm run build
   python manage.py collectstatic
   ```

3. **And you're done!** 🎉 Your app is running at `http://localhost:8000` with CoreUI's source Sass and JS fully loaded. Now you can start adding any CoreUI components you want to use.
