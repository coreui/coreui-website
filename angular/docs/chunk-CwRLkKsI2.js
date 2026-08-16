import{Br as kw,Fi as v,Nt as Rs,T as D_,Ut as Td,kt as RM,pt as No,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import{Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as f$1}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var h=`## Installation

---

#### Prerequisites
Before you begin, make sure your development environment includes \`Node.js\xAE\` and an \`npm\` package manager.

###### Node.js
Angular 22 requires \`Node.js\` LTS version \`^22.22.3\`, \`^24.15.0\` or \`^26.0.0\`.

- To check your version, run \`node -v\` in a terminal/console window.
- To get \`Node.js\`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI

The Angular CLI is a command-line interface tool that allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.

Install the Angular CLI globally using a terminal/console window.
<div class="highlight language-bash">
  <code class="language-bash">
  npm install -g @angular/cli
  </code>
</div>


See also: <a href="https://angular.dev/tools/cli/setup-local" target="_blank">Angular setup</a>

---

#### Angular CLI


CoreUI v5.7 for Angular 22 supports \`ng add\` to install all required dependencies for your Angular project.

<pre class="highlight language-bash">
<code class="language-bash">
ng add @coreui/angular
</code>
</pre>

---

#### Npm

Your other option is to use \`npm install\` directly.

\`\`\`bash
npm install @coreui/angular @coreui/coreui @coreui/icons-angular
\`\`\`

---

## Using components

\`\`\`ts
import { AlertModule } from '@coreui/angular';

@NgModule({
  imports: [AlertModule,]
})
export class AppModule(){}
\`\`\`

---

## Standalone components

Starting from version \`4.4.x\` CoreUI Angular components are marked as \`standalone: true\`.

---

## Animations

Following CoreUI Angular components use \`@angular/animations\` module for animations.

<div class="api-table" style="width: 30%">

| Component      |
|----------------|
| Alert          |
| Carousel       |
| Collapse       |
| Loading Button |
| Modal          |
| Offcanvas      |
| SidebarNav     |
| Toast          |

</div>

---

To make it work, you have to import \`BrowserAnimationsModule\` or \`provideAnimationsAsync\`

- with NgModules:

  \`\`\`ts
  // app.module.ts
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  ...
  
  @NgModule({
    imports: [
      BrowserAnimationsModule,
      ...
  \`\`\`

- with Standalone Components:

  \`\`\`ts
  // main.ts
  import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
  ...

  bootstrapApplication(AppComponent, {
    providers: [
      provideAnimationsAsync(),
      ...
  \`\`\`
---

## Providers

To ensure that the Sidebar and Dropdown functions correctly, you might need to import the required providers. Depending on the configuration of your project, this should be done in either \`app.module\`, \`app.config\`, or \`app.routes\`.

\`\`\`ts 
...
importProvidersFrom(SidebarModule, DropdownModule)
...
\`\`\`

## Stylesheets

Angular components are styled using \`@coreui/coreui\` CSS library, but you can use them also with bootstrap CSS library.
That is possible because \`@coreui/coreui\` library is compatible with bootstrap, it just extends its functionalities. The
only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem.

### CoreUI CSS files

###### Installation

\`\`\`bash
npm install @coreui/coreui
\`\`\`

###### Basic usage

\`\`\`scss
@import "@coreui/coreui/scss/coreui";
\`\`\`

See also: <a href="https://coreui.io/bootstrap/docs/customize/sass/" target="_blank">Customize CoreUI CSS</a>

--- 

### Bootstrap CSS files 

###### Installation (optional)

\`\`\`bash
npm install bootstrap
\`\`\`

###### Basic usage

\`\`\`js
import 'bootstrap/dist/css/bootstrap.min.css'
\`\`\`
`;var f=class a{constructor(){this.content=h;this.elementRef=v(No);this.headService=v(y);this.name=`Components Library`;this.title=`Angular Components Library`;this.description=`CoreUI for Angular is a UI Component library written in TypeScript, and ready for your next Angular project. Learn how to include CoreUI Angular Components in your project.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description,pro:!1})}onLoad(){this.stripContent(),this.setHeadings()}setHeadings(){let o=[];this.elementRef.nativeElement.querySelectorAll(`h2`).forEach(i=>o.push(i)),this.headings=o}stripContent(){this.elementRef.nativeElement.querySelector(`markdown`).querySelectorAll(`markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents`).forEach(o=>o.remove())}onError(o){console.log(o)}static{this.ɵfac=function(i){return new(i||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-introduction`]],decls:59,vars:1,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[`href`,`https://angular.dev/tools/cli/setup-local`,`target`,`_blank`],[1,`api-table`,2,`width`,`30%`],[`href`,`https://coreui.io/bootstrap/docs/customize/sass/`,`target`,`_blank`]],template:function(i,S){i&1&&(Rs(0,`h1`,0),RM(1,`Get Started`),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`)(5,`hr`),Rs(6,`markdown`),RM(7,`
  ## Installation

  ---

  #### Prerequisites
  Before you begin, make sure your development environment includes \`Node.js\xAE\` and an \`npm\` package manager.

  ###### Node.js
  Angular 22 requires \`Node.js\` LTS version \`^22.22.3\`, \`^24.15.0\` or \`^26.0.0\`.

  - To check your version, run \`node -v\` in a terminal/console window.
  - To get \`Node.js\`, go to [nodejs.org](https://nodejs.org/).

  ###### Angular CLI

  The Angular CLI is a command-line interface tool that allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.

  Install the Angular CLI globally using a terminal/console window.
`),gd(),Rs(8,`pre`,2),RM(9,"```bash\nnpm install -g @angular/cli\n```\n"),gd(),Rs(10,`markdown`),RM(11,`

  See also: `),Rs(12,`a`,3),RM(13,`Angular setup`),gd(),RM(14,`

  ---

  #### Angular CLI


  **CoreUI v5.7 for Angular 22** supports \`ng add\` to install all required dependencies for your Angular project.
`),gd(),Rs(15,`pre`,2),RM(16,"  ```bash\n  ng add @coreui/angular\n  ```\n"),gd(),Rs(17,`markdown`),RM(18,`
  ---

  #### Npm

  Your other option is to use \`npm install\` directly.
`),gd(),Rs(19,`pre`,2),RM(20,"  ```bash\n  npm install @coreui/angular @coreui/coreui @coreui/icons-angular\n  ```\n"),gd(),Rs(21,`markdown`),RM(22,`
  ---

  ## Using components
`),gd(),Rs(23,`pre`,2),RM(24,`  \`\`\`ts
  import { AlertModule } from '@coreui/angular';

  @NgModule({
    imports: [AlertModule,]
    })
  export class AppModule(){}
  \`\`\`
`),gd(),Rs(25,`markdown`),RM(26,`
  ---

  ## Standalone components

  Starting from version \`4.4.x\` CoreUI Angular components are marked as \`standalone: true\`.

  ---

  ## Animations

  Following CoreUI Angular components use \`@angular/animations\` module for animations.

  `),Rs(27,`div`,4),RM(28,"\n\n    | Component      | retired from |\n    |----------------|--------------|\n    | SidebarNav     |\n    | ~~Alert~~          | `5.7.15`\n    | ~~Carousel~~       | `5.7.15`\n    | ~~Collapse~~       | `5.7.15`\n    | ~~Loading Button~~ | `5.7.15`\n    | ~~Modal~~          | `5.7.15`\n    | ~~Offcanvas~~      | `5.7.15`\n    | ~~Toast~~      | `5.7.4` |\n\n  "),gd(),RM(29,`

  ---

  To make it work, you have to import \`BrowserAnimationsModule\` or \`provideAnimationsAsync\`

  - with NgModules:
`),gd(),Rs(30,`pre`,2),RM(31,`  \`\`\`ts
  // app.module.ts
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  ...

  @NgModule({
    imports: [
    BrowserAnimationsModule,
    ...
    \`\`\`
`),gd(),Rs(32,`markdown`),RM(33,`
- with Standalone Components:
`),gd(),Rs(34,`pre`,2),RM(35,`  \`\`\`ts
  // main.ts
  import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

  bootstrapApplication(AppComponent, {
    providers: [
      provideAnimationsAsync(),
      ...
    ]
  })
  \`\`\`
`),gd(),Rs(36,`markdown`),RM(37,`
---

## Providers

To ensure that the Sidebar and Dropdown functions correctly, you might need to import the required providers. Depending on the configuration of your project, this should be done in either \`app.module\`, \`app.config\`, or \`app.routes\`.
`),gd(),Rs(38,`pre`,2),RM(39,"```ts\n...\nimportProvidersFrom(SidebarModule, DropdownModule)\n...\n```\n"),gd(),Rs(40,`markdown`),RM(41,`

## Stylesheets

Angular components are styled using \`@coreui/coreui\` CSS library, but you can use them also with bootstrap CSS library.
  That is possible because \`@coreui/coreui\` library is compatible with bootstrap, it just extends its functionalities. The
  only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem.

  ### CoreUI CSS files

  ###### Installation
`),gd(),Rs(42,`pre`,2),RM(43,"```bash\nnpm install @coreui/coreui\n```\n"),gd(),Rs(44,`markdown`),RM(45,`

  ###### Basic usage
`),gd(),Rs(46,`pre`,2),RM(47,'```scss\n@import "@coreui/coreui/scss/coreui";\n```\n'),gd(),Rs(48,`markdown`),RM(49,`
  See also: `),Rs(50,`a`,5),RM(51,`Customize CoreUI CSS`),gd(),RM(52,`

  ---

  ### Bootstrap CSS files

  ###### Installation (optional)
`),gd(),Rs(53,`pre`,2),RM(54,"```bash\nnpm install bootstrap\n```\n"),gd(),Rs(55,`markdown`),RM(56,`
  ###### Basic usage
`),gd(),Rs(57,`pre`,2),RM(58,"```js\nimport 'bootstrap/dist/css/bootstrap.min.css'\n```\n"),gd()),i&2&&(kw(3),Td(` `,S.description,`
`))},dependencies:[nr,f$1],styles:[`[_nghost-%COMP%]{display:block}`]})}};export{f as IntroductionComponent};