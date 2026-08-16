import{$t as Uv,Br as kw,Fi as v,Nt as Rs,T as D_,kt as RM,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import{Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var h=class l{constructor(){this.headService=v(y);this.name=`Installation`;this.title=`CoreUI Angular Template Installation`;this.description=`Learn how to use CoreUI Angular Admin Dashboard Templates including npm scripts to build templates, compile source code, run tests, and more.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(o){return new(o||l)}}static{this.ɵcmp=D_({type:l,selectors:[[`docs-installation`]],decls:14,vars:2,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[1,`table-responsive`,`api-table`]],template:function(o,s){o&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  ## Tooling setup

  CoreUI Angular Admin Templates uses [npm scripts](https://docs.npmjs.com/misc/scripts/) for its build system. Our
  \`package.json\` includes convenient methods for working with the framework, including compiling code, running tests,
  and more.

  To use our build system and run CoreUI admin template locally, you'll need the following:

  - \`Node.js\` with \`npm\` package manager,
  - Angular CLI,
  - a copy of CoreUI Angular Admin Template source files.

  Follow these steps and you should be ready to rock:

  1. [Download and install Node.js](https://nodejs.org/), which we use to run scripts and manage our dependencies.
  1. [Install the Angular CLI](https://angular.io/guide/setup-local#install-the-angular-cli), to perform a variety of
  ongoing development tasks such as testing, bundling, and deployment.
  3. [Download CoreUI Angular Admin Template](https://coreui.io/product/free-angular-admin-template/) or [Download CoreUI PRO Angular Admin Template](https://coreui.io/download/).
  4. **Install dependencies** - navigate to the root template directory and run \`npm install\` to pull local dependencies listed in \`package.json\`.

  When completed, you'll be able to run the various commands provided from the command line.

  ## Using npm scripts

  Our \`package.json\` includes numerous tasks for developing the project.

  Run \`npm run\` to see all the npm scripts in your terminal.

  **Primary tasks include:**

`),gd(),Rs(7,`markdown`),RM(8,`

  `),Rs(9,`div`,2),RM(10,`

    | Task | Description |
    | --- | --- |
    | \`npm start\` | Compiles CSS and JavaScript and starts a local dev server at [http://localhost:4200/](http://localhost:4200/) |
    | \`npm run build\` | Compiles CoreUI Angular application into \`dist/\` directory |
    | \`npm test\` | Runs tests locally |

  `),gd(),RM(11,`

`),gd(),Rs(12,`markdown`),RM(13,`

## Local template
Here's how to get it started:

1. Run through the tooling setup above to install all dependencies.
2. From the root template directory, run \`npm start\` in the command line.
3. Open [\`http://localhost:4200\`](http://localhost:4200) in your browser, and... voil\xE0!

## Troubleshooting

  Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local).
  In some cases it may require removing the whole \`node_modules/\` subdirectory.
  Then, run \`npm install\` again.

`),gd()),o&2&&(kw(),Uv(s.title),kw(2),Uv(s.description))},dependencies:[f,nr],encapsulation:2})}};export{h as InstallationComponent};