# Angular Components Library

> CoreUI for Angular is a UI Component library written in TypeScript, and ready for your next Angular project. Learn how to include CoreUI Angular Components in your project.

## Installation

#### Prerequisites
Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js
Angular 22 requires `Node.js` LTS version `^22.22.3`, `^24.15.0` or `^26.0.0`.

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

###### Angular CLI

The Angular CLI is a command-line interface tool that allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.

Install the Angular CLI globally using a terminal/console window.

```bash
npm install -g @angular/cli
```

See also: <a href="https://angular.dev/tools/cli/setup-local" target="_blank">Angular setup</a>

#### Angular CLI

**CoreUI v5.7 for Angular 22** supports `ng add` to install all required dependencies for your Angular project.

```bash
ng add @coreui/angular
```

#### Npm

Your other option is to use `npm install` directly.

```bash
npm install @coreui/angular @coreui/coreui @coreui/icons-angular
```

## Using components

```ts
import { AlertModule } from '@coreui/angular';

@NgModule({
  imports: [AlertModule,]
  })
export class AppModule(){}
```

## Standalone components

Starting from version `4.4.x` CoreUI Angular components are marked as `standalone: true`.

## Animations

Following CoreUI Angular components use `@angular/animations` module for animations.

<div class="api-table" style="width: 30%">

| Component      | retired from |
|----------------|--------------|
| SidebarNav     | 
| ~~Alert~~      | `5.7.15`
| ~~Carousel~~   | `5.7.15`
| ~~Collapse~~    | `5.7.15`
| ~~Loading Button~~ | `5.7.15`
| ~~Modal~~      | `5.7.15`
| ~~Offcanvas~~  | `5.7.15`
| ~~Toast~~      | `5.7.4` |

</div>

To make it work, you have to import `BrowserAnimationsModule` or `provideAnimationsAsync`

- with NgModules:

```ts
// app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
...

@NgModule({
  imports: [
  BrowserAnimationsModule,
  ...
  ```

- with Standalone Components:

```ts
// main.ts
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimationsAsync(),
    ...
  ]
})
```

## Providers

To ensure that the Sidebar and Dropdown functions correctly, you might need to import the required providers. Depending on the configuration of your project, this should be done in either `app.module`, `app.config`, or `app.routes`.

```ts
...
importProvidersFrom(SidebarModule, DropdownModule)
...
```

## Stylesheets

Angular components are styled using `@coreui/coreui` CSS library, but you can use them also with bootstrap CSS library.
That is possible because `@coreui/coreui` library is compatible with bootstrap, it just extends its functionalities. The
only exception is custom CoreUI components, which don't exist in the Bootstrap ecosystem.

### CoreUI CSS files

###### Installation

```bash
npm install @coreui/coreui
```

###### Basic usage

```scss
@import "@coreui/coreui/scss/coreui";
```

See also: <a href="https://coreui.io/bootstrap/docs/customize/sass/" target="_blank">Customize CoreUI CSS</a>

### Bootstrap CSS files

###### Installation (optional)

```bash
npm install bootstrap
```

###### Basic usage

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```
