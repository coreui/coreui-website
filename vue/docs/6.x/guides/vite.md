# CoreUI + Vue + Vite

> Learn how to use CoreUI for Vue.js components in a Vue project built with Vite.

This guide walks you through adding CoreUI for Vue.js to a Vue application scaffolded with Vite.

## Create a project

Scaffold a new Vue application with Vite's official command. Use the `vue-ts` template for TypeScript, or `vue` for plain JavaScript.

```sh
npm create vite@latest my-app -- --template vue-ts
cd my-app
npm install
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

Update `src/main.ts` so the stylesheet loads before your app mounts — the import replaces the template's `style.css`.

```ts tab={"label":"CoreUI"}
import { createApp } from 'vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import App from './App.vue'

createApp(App).mount('#app')
```

```ts tab={"label":"CoreUI PRO"}
import { createApp } from 'vue'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import App from './App.vue'

createApp(App).mount('#app')
```

## Use components

Render your first CoreUI component in `src/App.vue`.

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

Start the development server and open the URL Vite prints (by default `http://localhost:5173`) to see the button rendered with CoreUI's styles.

```sh
npm run dev
```
