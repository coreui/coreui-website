# CoreUI + Vue + Vue Router

> Learn how to use CoreUI for Vue.js components in a routed Vue project scaffolded with create-vue.

This guide walks you through adding CoreUI for Vue.js to an application built with Vue Router.

## Create a project

Scaffold a new Vue application with the official command and answer `Yes` when it asks about Vue Router.

```sh
npm create vue@latest my-app
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

Update `src/main.ts` so the stylesheet loads for every route — add the import next to the template's `assets/main.css`.

```ts tab={"label":"CoreUI"}
import { createApp } from 'vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

```ts tab={"label":"CoreUI PRO"}
import { createApp } from 'vue'
import '@coreui/coreui-pro/dist/css/coreui.min.css'
import './assets/main.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

## Use components

Render your first CoreUI component in a route view, for example `src/views/HomeView.vue`.

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

Start the development server and open the URL it prints to see the button rendered with CoreUI's styles.

```sh
npm run dev
```
