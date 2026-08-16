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

## Which stylesheet

The Scheduler's toolbar and edit dialog are built from CoreUI's own `.btn`,
`.form-control` and `.form-select`, so the controls match the rest of your
application instead of approximating it. Pick the stylesheet that matches your
page:

| File | Load it when |
| --- | --- |
| `scheduler.css` | `@coreui/coreui` or `@coreui/coreui-pro` is already on the page. |
| `scheduler.standalone.css` | It is not. Adds ~1.7 kB gzip. |

`scheduler.standalone.css` carries the slice of CoreUI the markup relies on —
`.btn` with the `ghost`, `primary` and `outline` variants, and the form
controls — mirroring CoreUI 6. Those rules are scoped to `.scheduler` and
emitted into a `scheduler-base` cascade layer, so they never restyle the rest
of your page.

## Base styles

The Scheduler resolves its colors through CoreUI semantic CSS variables when
the library is present, and falls back to built-in defaults when it is not.
Light and dark mode follow the `data-coreui-theme` attribute automatically.
