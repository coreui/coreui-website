# Vue Icon Component

> Vue icons library is a great resource for Vue developers, who can use its customizable SVG icons in their applications. It offers an extensive library of icons to choose from, which can be easily inserted into projects with just a few lines of code. Not only that, but users are also able to customize the appearance of these icons by setting various props on them. This provides developers with an efficient and flexible way to integrate useful graphical elements into their web pages without doing any extra work.

## Installation

To start using CoreUI Vue Icons in your project, you need to install it as a dependency. Follow the instructions below based on your package manager of choice:

### Npm

```bash
// CoreUI Icons library
npm install @coreui/icons

// CIcon component
npm install @coreui/icons-vue 
```

### Yarn

```bash
yarn add @coreui/icons
yarn add @coreui/icons-vue
```

## Usage

Import vue.js icons using one of these two options:

### Single Vue.js icon

To use a single Vue.js icon, import the `<CIcon>` component and the desired icon(s) from the `@coreui/icons` library. Then, include the `<CIcon>` component in your code and specify the icon prop with the imported icon variable. Additionally, you can set the desired size for the icon using the `size` prop.

```html
<template>
  <CIcon :icon="icon.cilList" size="xl" />
  <CIcon :icon="icon.cilShieldAlt" size="xl" />
</template>

<script setup>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
</script>
```

### All icons

To use all icons available in the CoreUI Vue.js Icons package, import the CIcon component and the entire `@coreui/icons` library using the `* as` syntax. Then, reference the desired icon within the `icon` prop.

```vue
<template>
  <CIcon :icon="icon.cilList" size="xxl"/>
</template>
```

### Icons object

This way you import your needed Vue.js icons once and pass them to $root object on 'icons' key

```js
// main.js / main.ts
import { CIcon } from '@coreui/icons-vue';
import {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar
} from '@coreui/icons'

const icons = {
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBan,
  cilBasket,
  cilBell,
  cilCalculator,
  cilCalendar
}

const app = createApp(App)
...
app.provide('icons', icons)
app.component('CIcon', CIcon)
...
app.mount('#app')

```

Later anywhere in the app:

```vue
<CIcon icon="cilArrowBottom" size="xxl"/>
<CIcon icon="cil-arrow-bottom" size="xxl"/>
```

You can pass the name of the icon both in camelCase and kebab-case

### Color

The CoreUI Vue Icon component offers versatile color customization options, empowering you to personalize the icons in multiple ways. You can effortlessly modify the colors by utilizing either class names or CSS variables, providing flexibility and ease in creating visually stunning and cohesive icon designs.

#### Utility classes

With some [color utility classes](https://coreui.io/bootstrap/docs/utilities/colors/), you may use color to convey message.

```html
<template>
  <CIcon :icon="icon.cilList" size="xl" />
  <CIcon :icon="icon.cilList" class="text-primary" size="xl" />
  <CIcon :icon="icon.cilList" class="text-secondary" size="xl" />
  <CIcon :icon="icon.cilList" class="text-success" size="xl" />
  <CIcon :icon="icon.cilList" class="text-danger" size="xl" />
  <CIcon :icon="icon.cilList" class="text-warning" size="xl" />
  <CIcon :icon="icon.cilList" class="text-info" size="xl" />
</template>

<script setup>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
</script>
```

#### CSS Variables

CoreUI Vue Icons leverage local CSS variables, such as `--ci-primary-color` and `--ci-secondary-color` (for Duotone icons), to facilitate real-time customization. This allows developers to easily customize the icons by providing their own custom CSS variables.

```html
<template>
  <CIcon :icon="icon.cilList" size="xl" :style="{ '--ci-primary-color': 'red' }" />
  <CIcon :icon="icon.cilList" size="xl" :style="{ '--ci-primary-color': 'green' }" />
</template>

<script setup>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
</script>
```

### Sizing

Set heights of Vue icons using size property like `size="lg"` and `size="sm"`.

```html
<template>
  <CIcon :icon="icon.cilList" size="sm" />
  <CIcon :icon="icon.cilList" />
  <CIcon :icon="icon.cilList" size="lg" />
  <CIcon :icon="icon.cilList" size="xl" />
  <CIcon :icon="icon.cilList" size="xxl" />
  <CIcon :icon="icon.cilList" size="3xl" />
</template>

<script setup>
import { CIcon } from '@coreui/icons-vue'
import * as icon from '@coreui/icons'
</script>
```

### Custom SVG Icons

The `<CIconSvg`> component allows you to add custom SVG icons to your application. In case you want to use custom SVG icons, this component provides the flexibility to include bespoke SVG graphics that align with your design requirements.

```html
<template>
  <CIconSvg size="4xl">
    <svg
      viewBox="0 0 102 116"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="#3C4B64" fillRule="nonzero">
          <path
            id="Shape"
            d="M96,25.091 L57,2.5743 C53.2871871,0.430706461 48.7128129,0.430706461 45,2.5743 L6,25.091 C2.292246,27.239646 0.00690676667,31.1979678 0,35.4833 L0,80.5167 C0.00688629146,84.8020377 2.29223099,88.760369 6,90.909 L45,113.4256 C48.7127742,115.569338 53.2872258,115.569338 57,113.4256 L96,90.909 C99.707769,88.760369 101.993114,84.8020377 102,80.5167 L102,35.4833 C101.993093,31.1979678 99.707754,27.239646 96,25.091 Z M94,80.5167 C94,81.9457261 93.2375729,83.266187 92,83.9807 L53,106.4974 C51.7623957,107.211931 50.2376043,107.211931 49,106.4974 L10,83.9807 C8.76242713,83.266187 8,81.9457261 8,80.5167 L8,35.4833 C8,34.0542382 8.76239619,32.7337309 10,32.0192 L49,9.5025 C50.2376043,8.78796882 51.7623957,8.78796882 53,9.5025 L92,32.0192 C93.2376038,32.7337309 94,34.0542382 94,35.4833 L94,80.5167 Z"
          />
          <path
            id="Path"
            d="M74.0216,71.0379 L71.1556,71.0379 C70.4827717,71.0379163 69.8208181,71.2076524 69.231,71.5314 L51.95,81.0167 L32,69.4981 L32,46.5206 L51.95,35.002 L69.2394,44.457 C69.8278903,44.7788245 70.4878603,44.9474965 71.1586,44.9475 L74.0218,44.9475 C75.1263695,44.9475 76.0218,44.0520695 76.0218,42.9475 L76.0218,40.2357 C76.0218,39.5046907 75.6230914,38.8318844 74.9818,38.481 L55.793,27.9854 C53.3404536,26.651551 50.3714915,26.6856213 47.9502,28.0754 L28,39.5929 C25.5282949,41.025705 24.0048155,43.6646378 24,46.5216 L24,69.4976 C24,72.3557593 25.5247614,74.9968204 28,76.4259 L47.95,87.9444 C50.3719491,89.3331078 53.3408366,89.3663802 55.7933,88.0323 L74.9833,77.5012 C75.623333,77.1499602 76.021125,76.4778764 76.0211,75.7478 L76.0211,73.0378 C76.0210448,71.9334648 75.1259352,71.0381761 74.0216,71.0379 L74.0216,71.0379 Z"
          />
        </g>
      </g>
    </svg>
  </CIconSvg>
</template>

<script setup>
import { CIconSvg } from '@coreui/icons-vue'
</script>
```

## Available icons

CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app.
