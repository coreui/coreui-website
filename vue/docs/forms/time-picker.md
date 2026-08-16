# Vue Time Picker Component

> Vue Time Picker is a customizable and user-friendly tool for selecting times in forms. It supports various locales, sizes, and states to enhance the user experience.

## Example

To create a basic Vue Time Picker, use:

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CTimePicker label="Time" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimePicker label="Time" locale="en-US" time="02:17:35 PM" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### vModel

By default, `<CTimePicker>` returns `time` as a `Date.prototype.toLocaleTimeString()`. If no date is selected, `<CTimePicker>` returns `null`.

```html
<template>
  <div class="row mb-3">
    <div class="col-lg-6">
      <CTimePicker v-model:time="vTime" label="Time" locale="en-US" />
    </div>
  </div>
  <div>{{ vTime }}</div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vTime = ref('02:17:35 PM')
</script>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <div class="row">
    <div class="col-lg-4 mb-3">
      <CTimePicker locale="en-US" size="lg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3">
      <CTimePicker locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker disabled locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Readonly

Add the `inputReadOnly` boolean attribute to prevent modification of the input's value.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker input-read-only locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Custom formats

### Disable minutes and seconds

Customize Vue Time Picker to display only hours, or hours and minutes by disabling minutes/seconds.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CTimePicker label="Only hours and minutes" locale="en-US" :seconds="false" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CTimePicker label="Only hours" locale="en-US" :minutes="false" :seconds="false" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Custom hours, minutes and seconds

Tailor the Vue Time Picker to your needs by specifying custom values for hours, minutes, and seconds. Use arrays to define selectable options or functions for dynamic filtering. The example below demonstrates setting specific hour options, minute intervals, and a condition for seconds only to include values less than 20.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5">
      <CTimePicker
        locale="en-US"
        :hours="[1, 3, 5, 7]"
        :minutes="[0, 15, 30, 45]"
        :seconds="(s) => s < 20"
      />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

In this configuration, the Vue TimePicker restricts hours to a predefined set, minutes to quarter intervals, and seconds to values under 20, offering a high degree of customization for precise time selection scenarios.

## Non-english locale

Tailor the Vue Time Picker to match different locales, offering an inclusive user experience across diverse languages. Automatically adapt or set specific locales to meet your application's needs.

### Auto

Our Time Picker component automatically detects and adapts to the user's locale, ensuring a localized experience without explicit configuration.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Chinese

Specify the locale to Chinese (`zh-CN`) for users in China, enhancing usability with a familiar format and language.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker placeholder="入住日期" locale="zh-CN" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Japanese

Set the Time Picker's locale to Japanese (`ja`) to cater to Japanese users, presenting date and time in a localized format.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker placeholder="日付を選択" locale="ja" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Korean

Configure the locale to Korean (`ko`) for a tailored experience in Korea, offering date and time selection in the local language.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CTimePicker placeholder="날짜 선택" locale="ko" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CTimePicker placeholder="בחר תאריך" locale="he-IL" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

### Persian

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CTimePicker placeholder="تاریخ شروع" locale="fa-IR" />
    </div>
  </div>
</template>

<script setup>
import { CTimePicker } from '@coreui/vue-pro'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTimePicker /&gt;](./api/#ctimepicker)
