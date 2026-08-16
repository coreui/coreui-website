# Vue Scheduler Installation

> Install CoreUI Scheduler for Vue with npm and load its stylesheet.

## npm

```sh
npm install @coreui/vue-scheduler @coreui/scheduler
```

`@coreui/vue-scheduler` ships the component; the stylesheet ships from the
vanilla `@coreui/scheduler` package so every framework edition shares one
CSS:

```ts
import { CScheduler } from '@coreui/vue-scheduler'
import '@coreui/scheduler/dist/css/scheduler.css'
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
