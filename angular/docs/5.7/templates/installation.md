# CoreUI Angular Template Installation

> Learn how to use CoreUI Angular Admin Dashboard Templates including npm scripts to build templates, compile source code, run tests, and more.

## Tooling setup

CoreUI Angular Admin Templates uses [npm scripts](https://docs.npmjs.com/misc/scripts/) for its build system. Our
`package.json` includes convenient methods for working with the framework, including compiling code, running tests,
and more.

To use our build system and run CoreUI admin template locally, you'll need the following:

- `Node.js` with `npm` package manager,
- Angular CLI,
- a copy of CoreUI Angular Admin Template source files.

Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/), which we use to run scripts and manage our dependencies.
1. [Install the Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli), to perform a variety of
ongoing development tasks such as testing, bundling, and deployment.
3. [Download CoreUI Angular Admin Template](https://coreui.io/product/free-angular-admin-template/) or [Download CoreUI PRO Angular Admin Template](https://coreui.io/download/).
4. **Install dependencies** - navigate to the root template directory and run `npm install` to pull local dependencies listed in `package.json`.

When completed, you'll be able to run the various commands provided from the command line.

## Using npm scripts

Our `package.json` includes numerous tasks for developing the project.

Run `npm run` to see all the npm scripts in your terminal.

**Primary tasks include:**

| Task | Description |
| --- | --- |
| `npm start` | Compiles CSS and JavaScript and starts a local dev server at [http://localhost:4200/](http://localhost:4200/) |
| `npm run build` | Compiles CoreUI Angular application into `dist/` directory |
| `npm test` | Runs tests locally |

## Local template
Here's how to get it started:

1. Run through the tooling setup above to install all dependencies.
2. From the root template directory, run `npm start` in the command line.
3. Open [`http://localhost:4200`](http://localhost:4200) in your browser, and... voilà!

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local).
In some cases it may require removing the whole `node_modules/` subdirectory.
Then, run `npm install` again.
