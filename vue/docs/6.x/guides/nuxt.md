# CoreUI + Vue + Nuxt

> Learn how to use CoreUI for Vue.js components in your Nuxt project.

This guide walks you through adding CoreUI for Vue.js to a Nuxt project.

## Create a project

Scaffold a new Nuxt application with the official command and answer the prompts.

```sh
npm create nuxt@latest my-app
cd my-app
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

Add the stylesheet to `nuxt.config.ts` so it loads for every route.

```ts tab={"label":"CoreUI"}
export default defineNuxtConfig({
  css: ['@coreui/coreui/dist/css/coreui.min.css'],
})
```

```ts tab={"label":"CoreUI PRO"}
export default defineNuxtConfig({
  css: ['@coreui/coreui-pro/dist/css/coreui.min.css'],
})
```

## Use components

Render your first CoreUI component in `app/app.vue`.

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

Start the development server and open `http://localhost:3000` to see the button rendered with CoreUI's styles.

```sh
npm run dev
```

> The components render on the server as they are: every read of window or document is guarded, and the ids they generate come from Vue's useId(), which produces the same value on both sides of hydration. Reach for &lt;ClientOnly&gt; when your own code around them needs the DOM, not for the components themselves.
