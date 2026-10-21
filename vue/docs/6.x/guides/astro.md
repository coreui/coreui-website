# CoreUI + Vue + Astro

> Learn how to use CoreUI for Vue.js components as Vue islands in an Astro project.

This guide walks you through adding CoreUI for Vue.js to an Astro project, where CoreUI components run as Vue islands.

## Create a project

Scaffold a new Astro project with the official command, then add the Vue integration — it installs Vue and wires up the renderer for you.

```sh
npm create astro@latest my-app
cd my-app
npx astro add vue
```

## Install CoreUI

Install the Vue components together with the CSS library that styles them.

```bash tab={"label":"CoreUI"}
npm install @coreui/vue @coreui/coreui
```

```bash tab={"label":"CoreUI PRO"}
npm install @coreui/vue-pro @coreui/coreui-pro
```

## Import styles

Import the stylesheet in your layout's frontmatter — for example `src/layouts/Layout.astro` — so every page using the layout loads it.

```astro tab={"label":"CoreUI"}
---
import '@coreui/coreui/dist/css/coreui.min.css'
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My App</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

```astro tab={"label":"CoreUI PRO"}
---
import '@coreui/coreui-pro/dist/css/coreui.min.css'
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My App</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

## Use components

Create a Vue component, for example `src/components/HelloCoreUI.vue`.

```vue tab={"label":"CoreUI"}
<template>
  <CButton theme="primary">Primary button</CButton>
</template>

<script setup lang="ts">
import { CButton } from '@coreui/vue'
</script>
```

```vue tab={"label":"CoreUI PRO"}
<template>
  <CButton theme="primary">Primary button</CButton>
</template>

<script setup lang="ts">
import { CButton } from '@coreui/vue-pro'
</script>
```

Then render it in an Astro page — for example `src/pages/index.astro` — with a client directive so it hydrates in the browser.

```astro
---
import Layout from '../layouts/Layout.astro'
import HelloCoreUI from '../components/HelloCoreUI.vue'
---

<Layout>
  <HelloCoreUI client:load />
</Layout>
```

Start the development server and open the URL it prints to see the button rendered with CoreUI's styles.

```sh
npm run dev
```

> Astro renders components as static HTML unless you add a client directive. Interactive CoreUI components — dropdowns, modals, tooltips — need client:load (or another hydration directive) to work; use client:only="vue" to skip server rendering entirely.
