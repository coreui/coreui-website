# Vue Date Picker Component

> The Vue Date Picker Component is an essential tool for any Vue-based application that requires date selection functionality.

## About

This component, provided by CoreUI for Vue.js, offers a user-friendly interface and various customization options to ensure an excellent user experience.

With its responsive design and support for all modern browsers, the Vue Date Picker Component can be easily integrated into any application. The component comes with an array of styling options, including color, size, and shape, that can be easily adjusted to fit the application's design.

The Vue Date Picker Component is also fully customizable, allowing developers to tailor the component to their specific needs. With its set of APIs, developers can control the default value, visibility, and date range of the component.

One of the standout features of the Vue Date Picker Component is its accessibility. CoreUI has ensured that the component is fully compliant with the Web Content Accessibility Guidelines (WCAG), making it accessible to all users. The component supports keyboard navigation and screen readers, ensuring that users with disabilities can also benefit from its functionality.

## Example

Below is an example of a basic Vue DatePicker.

### Days

Basic examples demonstrating how to pick dates using the Vue Date Picker Component.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker label="Date" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022/2/16" label="Date" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

#### vModel

By default, `<CDatPicker>` returns `date` as a `Date` object. If no date is selected, `<CDatPicker>` returns `null`.

```html
<template>
  <div class="row mb-3">
    <div class="col-lg-6">
      <CDatePicker v-model:date="vDate" label="Date" locale="en-US" />
    </div>
  </div>
  <div>{{ vDate && vDate.toLocaleDateString([], options) }}</div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vDate = ref(new Date(2022, 2, 1))
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}
</script>
```

#### With timepicker

In addition to supporting date selection, our Vue DatePicker component also includes a TimePicker feature that allows users to select a specific time of day. Vue TimePicker can be enabled by passing a `timepicker` prop to the `` component

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker locale="en-US" timepicker />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2023/03/15 02:22:13 PM" locale="en-US" timepicker />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

#### With footer

Here is an example with the additional footer. The footer can be useful for displaying additional information or actions related to the selected date, such as "Today" or "Clear" buttons. The footer component is fully customizable and can be styled to match the rest of the application.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker footer locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022/2/16" footer locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Weeks

Illustration of week selection using the Vue Date Picker, including week number display.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker label="Week Picker" locale="en-US" selection-type="week" show-week-number />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker
        date="2025W07"
        label="Week Picker"
        locale="en-US"
        selection-type="week"
        show-week-number
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Months

Selecting whole months with the Vue Date Picker Component.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker label="Month Picker" locale="en-US" selection-type="month" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022-08" label="Month Picker" locale="en-US" selection-type="month" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Quarters

Selecting quarters using the Vue Date Picker.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker label="Quarter Picker" locale="en-US" selection-type="quarter" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2025Q1" label="Quarter Picker" locale="en-US" selection-type="quarter" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Years

Picking years using the Vue Date Picker.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-3 mb-sm-0">
      <CDatePicker label="Year Picker" locale="en-US" selection-type="year" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDatePicker date="2022" label="Year Picker" locale="en-US" selection-type="year" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <div class="row mb-4">
    <div class="col-lg-6">
      <CDatePicker locale="en-US" size="lg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker disabled locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Readonly

Add the `inputReadOnly` boolean attribute to prevent modification of the input's value.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker input-read-only locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Preview date on hover

By default, the date picker shows a live preview in the input field when hovering over calendar dates. To disable this feature, set `previewDateOnHover` to `false`.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDatePicker label="With preview (default)" locale="en-US" />
    </div>
    <div class="col-sm-6">
      <CDatePicker label="Without preview" locale="en-US" :preview-date-on-hover="false" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Disabled dates

CoreUI Vue DatePicker component includes a feature that allows you to disable certain dates, such as weekends or holidays. This can be accomplished by passing an array to `disabledDate` prop to the component, which determines which dates should be disabled based on custom logic.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
        :calendar-date="calendarDate"
        :disabled-dates="disabledDates"
        locale="en-US"
        :max-date="maxDate"
        :min-date="minDate"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
const calendarDate = new Date(2022, 2, 1)
const disabledDates = [
  [new Date(2022, 2, 4), new Date(2022, 2, 7)],
  new Date(2022, 2, 16),
  new Date(2022, 3, 16),
  [new Date(2022, 4, 2), new Date(2022, 4, 8)],
]
const maxDate = new Date(2022, 5, 0)
const minDate = new Date(2022, 1, 1)
</script>
```

### Disabling weekends

You can disable weekends by passing a function to the `disabledDates` prop. Here's how to do it:

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDatePicker :disabled-dates="disableWeekends" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}
</script>
```

## Non-english locale

CoreUI Vue Date Picker allows users to display dates and times in a non-English locale. This is useful for applications that have international users or need to support multiple languages. 

### Auto

By default, the DatePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can simply pass the desired language code as a prop to the DatePicker component. This feature enables to create more inclusive and accessible applications that cater to a diverse audience.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Chinese

Below is an example of a basic Vue Date Picker with Chinese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker placeholder="入住日期" locale="zh-CN" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Japanese

Below is an example of a basic Vue Date Picker with Japanese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker placeholder="日付を選択" locale="ja" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Korean

Below is an example of a basic Vue Date Picker with Korean locales.

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker placeholder="날짜 선택" locale="ko" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CDatePicker placeholder="בחר תאריך" locale="he-IL" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

### Persian

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-4">
      <CDatePicker placeholder="تاریخ شروع" locale="fa-IR" />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
</script>
```

## Custom container

_Added in 5.21.0._

By default the calendar is rendered in `document.body`. Pass an HTML element, a CSS selector, or a function that returns an element to the `container` property to render it somewhere else — for example inside a scrollable panel or a modal, so that it scrolls together with the rest of the content.

```html
<template>
  <div ref="containerRef">
    <CDatePicker :container="containerRef" locale="en-US" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CDatePicker } from '@coreui/vue-pro'

const containerRef = ref(null)
</script>
```

## Custom formats

> Heads up! As of v5.0.0, the format property is removed in &lt;CDatePicker&gt;. Instead, utilize the inputDateFormat to format dates into custom strings and inputDateParse to parse custom strings into Date objects.

The provided code demonstrates how to use the `inputDateFormat` and `inputDateParse` properties. In this example, the `format` and `parse` functions from `date-fns` are employed to tailor the date presentation and interpretation. 

```js
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
```

```html
<template>
  <div class="row">
    <div class="col-lg-4">
      <CDatePicker
        date="2022/08/17"
        label="Date picker"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'MMMM dd, yyyy', new Date())"
        :input-date-format="(date) => format(new Date(date), 'MMMM dd, yyyy')"
      />
    </div>
    <div class="col-lg-4">
      <CDatePicker
        date="2022/08/17"
        label="Selector de fechas"
        locale="es-ES"
        placeholder="Seleccionar fecha"
        :input-date-parse="(date) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })"
        :input-date-format="(date) => format(new Date(date), 'yyyy MMMM dd', { locale: es })"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### With timepicker

If you need to display custom date and time formats, use the `timepicker` property along with `inputDateParse` and `inputDateFormat`. This allows users to select a date with a specified time format, such as `'MMM dd, yyyy h:mm:ss a'`.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDatePicker
        date="2022/08/03 02:34:17 AM"
        label="Date picker"
        locale="en-US"
        timepicker
        :input-date-parse="(date) => parse(date, 'MMM dd, yyyy h:mm:ss a', new Date())"
        :input-date-format="(date) => format(new Date(date), 'MMM dd, yyyy h:mm:ss a')"
      />
    </div>
    <div class="col-lg-5">
      <CDatePicker
        date="2022/08/03 02:34:17 AM"
        label="Selector de fechas"
        locale="es-ES"
        placeholder="Seleccionar fecha"
        timepicker
        :input-date-parse="
          (date) => parse(date, 'yyyy MMM dd h:mm:ss a', new Date(), { locale: es })
        "
        :input-date-format="
          (date) => format(new Date(date), 'yyyy MMM dd h:mm:ss a', { locale: es })
        "
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Weeks

If you want to show weeks in a custom format, set the `selectionType` to `'week'`. This configuration allows you to use `inputDateParse` and `inputDateFormat` to present and parse week-based date strings, like `'Io RRRR'`. Additionally, the `showWeekNumber` property can be used to display week numbers in your preferred format.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDatePicker
        date="2022W10"
        label="Date picker"
        locale="en-US"
        :input-date-parse="
          (date) =>
            parse(date, 'Io RRRR', new Date(), {
              useAdditionalWeekYearTokens: true,
            })
        "
        :input-date-format="(date) => format(new Date(date), 'Io RRRR')"
        selection-type="week"
        show-week-number
      />
    </div>
    <div class="col-lg-6">
      <CDatePicker
        date="2022W10"
        label="Selector de fechas"
        locale="es-ES"
        :input-date-parse="
          (date) =>
            parse(date, 'Io RRRR', new Date(), {
              locale: es,
              useAdditionalWeekYearTokens: true,
            })
        "
        :input-date-format="(date) => format(new Date(date), 'Io RRRR', { locale: es })"
        selection-type="week"
        show-week-number
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Months

If your application requires month selection in a specific format, set the `selectionType` property to `'month'`. Using `inputDateFormat` and `inputDateParse`, you can customize the display of months, such as using the format `'MMM yyyy'`.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDatePicker
        date="2022-08"
        label="Date range"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'MMM yyyy', new Date())"
        :input-date-format="(date) => format(new Date(date), 'MMM yyyy')"
        selection-type="month"
      />
    </div>
    <div class="col-lg-6">
      <CDatePicker
        date="2022-08"
        label="Selector de fechas"
        locale="es-ES"
        :input-date-parse="(date) => parse(date, 'MMM yyyy', new Date(), { locale: es })"
        :input-date-format="(date) => format(new Date(date), 'MMM yyyy', { locale: es })"
        selection-type="month"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Years

If you need to work with custom year formats, set the `selectionType` to `'year'`. This enables you to use `inputDateFormat` and `inputDateParse` to format years in a manner that suits your application's requirements, like `'yy'`.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDatePicker
        date="2022"
        label="Date range"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'yy', new Date())"
        :input-date-format="(date) => format(new Date(date), 'yy')"
        selection-type="year"
      />
    </div>
    <div class="col-lg-6">
      <CDatePicker
        date="2022"
        label="Selector de fechas"
        locale="es-ES"
        :input-date-parse="(date) => parse(date, 'yy', new Date(), { locale: es })"
        :input-date-format="(date) => format(new Date(date), 'yy', { locale: es })"
        selection-type="year"
      />
    </div>
  </div>
</template>

<script setup>
import { CDatePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDatePicker /&gt;](./api/#cdatepicker)
