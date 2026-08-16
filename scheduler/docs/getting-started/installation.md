# Scheduler Installation

> Install CoreUI Scheduler with npm and load its stylesheet and script.

## npm

```sh
npm install @coreui/scheduler
```

The package ships UMD and ESM builds plus a compiled stylesheet:

```js
import { Scheduler } from '@coreui/scheduler'
import '@coreui/scheduler/dist/css/scheduler.css'
```

## Script tag

The UMD build registers the component on the `coreui` global — the same
namespace as `@coreui/coreui`:

```html
<link rel="stylesheet" href="node_modules/@coreui/scheduler/dist/css/scheduler.css" />
<script src="node_modules/@coreui/scheduler/dist/js/scheduler.js"></script>
<script>
  new coreui.Scheduler(document.getElementById('scheduler'), { events: [] })
</script>
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
