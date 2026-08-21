# CoreUI Angular Template Content

> Discover what's included in CoreUI Angular Admin Template, including our precompiled and source code flavors.

## Project structure

CoreUI follows [Angular application project file structure](https://angular.io/guide/file-structure#application-source-files).

Once downloaded, unzip the compressed folder and you'll see something like this:

```
coreui-angular-admin-template      # project root
├── node_modules/                  # installed* npm packages
├── src/                           # source code
│   ├── app/                       # main app directory
|   │   ├── layout/                # layout containers
|   |   │   └── default-layout/    # default layout container
|   |   |       └── _nav.js        # sidebar navigation config
|   │   ├── icons/                 # icon set for the app
|   │   ├── views/                 # view components of application
|   │   |   ├── dashboard/         # dashboard component
|   │   |   └── ...                # additional view components
|   │   ├── app.component.ts       # root component of application
|   │   ├── app.routing.ts         # app routes
|   │   └── app.config.ts          # app config
│   ├── assets/                    # images, icons, etc.
│   ├── components/                # components for demo build only
│   ├── environments/              # build configuration options
│   ├── scss/                      # CoreUI scss styles for the project
│   ├── main.ts                    # entry point of application
│   ├── declarations.d.ts          # additional typings
│   ├── test.ts                    # entry point for your unit tests
│   └── index.html                 # the main html template
│
├── .browserslistrc                # target browsers config
├── .editorconfig                  # code editors config
├── karma.conf.js                  # Karma config
├── tsconfig.json                  # TypeScript config
├── angular.json                   # Angular CLI config
├── README.md
└── package.json                   # npm package dependencies config

```
