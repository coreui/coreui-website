# Angular Scheduler Installation

> Install CoreUI Scheduler for Angular with npm and load its stylesheet.

## npm

```sh
npm install @coreui/angular-scheduler @coreui/scheduler
```

`@coreui/angular-scheduler` ships the standalone `SchedulerComponent`; the
stylesheet ships from the vanilla `@coreui/scheduler` package so every
framework edition shares one CSS. Import the component and add the stylesheet
to your `angular.json` styles (or `styles.scss`) — or let
[`ng add`](#ng-add) do both for you:

```ts
import { SchedulerComponent } from '@coreui/angular-scheduler'
```

```scss
@import "@coreui/scheduler/dist/css/scheduler.css";
```

## ng add

If you want Angular to wire the package into your app automatically, use:

```sh
ng add @coreui/angular-scheduler
```

That schematic installs the scheduler packages, adds the matching CoreUI
stylesheet dependency when neither `@coreui/coreui` nor `@coreui/coreui-pro` is
present, and updates your Angular workspace so the scheduler stylesheet is
loaded in `angular.json` for the selected project.

The `SchedulerComponent` is standalone — import it straight into your
component:

```ts
import { SchedulerComponent } from '@coreui/angular-scheduler'

@Component({
  imports: [SchedulerComponent],
  // ...
})
```

## Sass

Prefer building from source? The stylesheet is a standard Sass module with
every token exposed as a `!default` variable:

```scss
@use "@coreui/scheduler/scss/scheduler" with (
  $scheduler-max-height: 50rem
);
```

## Base styles

The Scheduler is self-contained: it resolves its colors through CoreUI
semantic CSS variables when `@coreui/coreui` or `@coreui/coreui-pro` is
present, and falls back to built-in defaults when it is not. Light and dark
mode follow the `data-coreui-theme` attribute automatically.
