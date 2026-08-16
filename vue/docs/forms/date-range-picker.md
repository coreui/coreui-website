# Vue Date Range Picker Component

> The Vue Date Range Picker component by CoreUI is a versatile tool for selecting date ranges. It is designed for compatibility across various browsers and devices, making it a reliable choice for diverse applications.

## Example

Explore basic usage of the Vue Date Range Picker through sample code snippets that demonstrate its core functionality.

### Days

Select date ranges by day with examples including basic usage, as well as variants featuring time pickers and footers for enhanced functionality.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        start-date="2022/08/03"
        end-date="2022/08/17"
        label="Date range"
        locale="en-US"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

#### vModel

By default, `<CDateRangePicker>` returns `start-date` and `end-date` as a `Date` objects. If no date is selected, `<CDateRangePicker>` returns `null`.

```html
<template>
  <div class="row mb-3">
    <div class="col-lg-6">
      <CDateRangePicker
        v-model:start-date="vStartDate"
        v-model:end-date="vEndDate"
        label="Date range"
        locale="en-US"
      />
    </div>
  </div>
  <div>
    {{ vStartDate && vStartDate.toLocaleDateString([], options) }} -
    {{ vEndDate && vEndDate.toLocaleDateString([], options) }}
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
import { ref } from 'vue'
const vStartDate = ref(new Date(2022, 2, 1))
const vEndDate = ref(new Date(2022, 2, 7))
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
}
</script>
```

#### With timepicker

Our Vue DateRangePicker component not only supports date selection but also includes a time picker feature for selecting a specific time of day. Enable the Vue TimePicker by passing a `timepicker` prop to the `` component.

```html
<template>
  <div class="row">
    <div class="col-lg-7 mb-3">
      <CDateRangePicker locale="en-US" timepicker />
    </div>
    <div class="col-lg-7">
      <CDateRangePicker
        start-date="2022/08/03 02:34:17 AM"
        end-date="2022/09/17 11:29:41 PM"
        locale="en-US"
        timepicker
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

#### With footer

Here's an example with an additional footer. The footer is useful for displaying extra information or actions related to the selected date, such as "Today" or "Clear" buttons. The footer component is fully customizable and can be styled to match the rest of the application.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker footer locale="en-US" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker start-date="2022/08/03" end-date="2022/08/17" footer locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Weeks

To enable week selection, set the `selectionType` property to `week` and pass the `showWeekNumber` prop to display week numbers.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="week" show-week-number />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        start-date="2025W07"
        end-date="2025W12"
        label="Date range"
        locale="en-US"
        selection-type="week"
        show-week-number
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Months

Set the `selectionType` property to `month` to enable months range selection.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="month" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        label="Date range"
        locale="en-US"
        selection-type="month"
        start-date="2022-08"
        end-date="2023-05"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Quarters

Set the `selectionType` property to `quarter` to enable quarter range selection.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="quarter" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        label="Date range"
        locale="en-US"
        selection-type="quarter"
        start-date="2025Q3"
        end-date="2026Q2"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Years

Set the `selectionType` property to `year` to enable years range selection.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker label="Date range" locale="en-US" selection-type="year" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        label="Date range"
        locale="en-US"
        selection-type="year"
        start-date="2022"
        end-date="2028"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
<template>
  <div class="row mb-4">
    <div class="col-lg-6">
      <CDateRangePicker locale="en-US" size="lg" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker disabled locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Readonly

Add the `inputReadOnly` boolean attribute to prevent modification of the input's value.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker input-read-only locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Preview date on hover

By default, the date range picker shows a live preview in the input fields when hovering over calendar dates. To disable this feature, set `previewDateOnHover` to `false`.

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker label="With preview (default)" locale="en-US" />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker label="Without preview" locale="en-US" :preview-date-on-hover="false" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Disabled dates

Our Vue Date Range Picker component features the ability to disable specific dates, such as weekends or holidays, by using the `disabledDate` prop. This prop takes an array and uses custom logic to determine which dates should be disabled.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker
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
import { CDateRangePicker } from '@coreui/vue-pro'
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
      <CDateRangePicker :disabled-dates="disableWeekends" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}
</script>
```

## Custom ranges

In order to configure custom date ranges in the Date Range component, you must use the `ranges` prop to define a set of predefined ranges. These ranges can include predefined options such as "Today", "Yesterday", "Last 7 Days", etc.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker :ranges="customRanges" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
const customRanges = {
  Today: [new Date(), new Date()],
  Yesterday: [
    new Date(new Date().setDate(new Date().getDate() - 1)),
    new Date(new Date().setDate(new Date().getDate() - 1)),
  ],
  'Last 7 Days': [new Date(new Date().setDate(new Date().getDate() - 6)), new Date(new Date())],
  'Last 30 Days': [new Date(new Date().setDate(new Date().getDate() - 29)), new Date(new Date())],
  'This Month': [
    new Date(new Date().setDate(1)),
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  ],
  'Last Month': [
    new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
    new Date(new Date().getFullYear(), new Date().getMonth(), 0),
  ],
}
</script>
```

## Non-english locale

CoreUI's Vue Date Range Picker enables the display of dates and times in non-English locales, making it essential for international users and multilingual support.

### Auto

By default, the DateRangePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can pass the desired language code as a prop to the DateRangePicker component. This feature enables the creation of more inclusive and accessible applications that cater to a diverse audience.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Chinese

Here is an example of a simple Vue Date Range Picker with Chinese localization.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="zh-CN" :placeholder="['入住日期', '退房日期']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Japanese

Below is an example of a basic Vue Date Range Picker with Japanese locales.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="ja" :placeholder="['日付を選択', '終了日']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Korean

Here's a simple example of a Date Range Picker with Korean locales.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangePicker locale="ko" :placeholder="['날짜 선택', '종료일']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-5">
      <CDateRangePicker :placeholder="['בחר תאריך', 'תאריך סיום']" locale="he-IL" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

### Persian

```html
<template>
  <div class="row" dir="rtl">
    <div class="col-lg-5">
      <CDateRangePicker locale="fa-IR" :placeholder="['تاریخ شروع', 'تاریخ پایان']" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
</script>
```

## Custom formats

> Heads up! As of v5.0.0, the format property is removed in &lt;CDateRangePicker&gt;. Instead, utilize the inputDateFormat to format dates into custom strings and inputDateParse to parse custom strings into Date objects.

The provided code demonstrates how to use the `inputDateFormat` and `inputDateParse` properties. In this example, the `format` and `parse` functions from `date-fns` are employed to tailor the date presentation and interpretation. 

```js
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
```

```html
<template>
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <CDateRangePicker
        start-date="2022/08/03"
        end-date="2022/08/17"
        label="Date range"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'MMMM dd, yyyy', new Date())"
        :input-date-format="(date) => format(new Date(date), 'MMMM dd, yyyy')"
      />
    </div>
    <div class="col-sm-6">
      <CDateRangePicker
        start-date="2022/08/03"
        end-date="2022/08/17"
        label="Rango de fechas"
        locale="es-ES"
        :placeholder="['Fecha de inicio', 'Fecha de fin']"
        :input-date-parse="(date) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })"
        :input-date-format="(date) => format(new Date(date), 'yyyy MMMM dd', { locale: es })"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### With timepicker

If you need to display custom date and time formats, use the `timepicker` property along with `inputDateParse` and `inputDateFormat`. This example shows how you can customize both the date and time formats, allowing users to select a range with time specified, such as `'MMM dd, yyyy h:mm:ss a'`.

```html
<template>
  <div class="row">
    <div class="col-lg-8 mb-3">
      <CDateRangePicker
        start-date="2022/08/03 02:34:17 AM"
        end-date="2022/09/17 11:29:41 PM"
        label="Date range"
        locale="en-US"
        timepicker
        :input-date-parse="(date) => parse(date, 'MMM dd, yyyy h:mm:ss a', new Date())"
        :input-date-format="(date) => format(new Date(date), 'MMM dd, yyyy h:mm:ss a')"
      />
    </div>
    <div class="col-lg-8">
      <CDateRangePicker
        start-date="2022/08/03 02:34:17 AM"
        end-date="2022/09/17 11:29:41 PM"
        label="Rango de fechas"
        locale="es-ES"
        :placeholder="['Fecha de inicio', 'Fecha de fin']"
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
import { CDateRangePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Weeks

If you want to show weeks in a custom format, set the `selectionType` to `'week'`. This example demonstrates how to use `inputDateParse` and `inputDateFormat` to present and parse week-based date strings, like `'Io RRRR'`. Including the `showWeekNumber` property allows you to display week numbers, which can be formatted according to your needs.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangePicker
        start-date="2022W10"
        end-date="2022W13"
        label="Date range"
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
      <CDateRangePicker
        start-date="2022W10"
        end-date="2022W13"
        label="Rango de fechas"
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
import { CDateRangePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Months

If your application requires month selection in a specific format, use the `selectionType` set to `'month'`. This example shows how to customize the month display using `inputDateFormat` and how to parse month strings with `inputDateParse`, allowing for formats such as `'MMM yyyy'`.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangePicker
        start-date="2022-08"
        end-date="2023-04"
        label="Date range"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'MMM yyyy', new Date())"
        :input-date-format="(date) => format(new Date(date), 'MMM yyyy')"
        selection-type="month"
      />
    </div>
    <div class="col-lg-6">
      <CDateRangePicker
        start-date="2022-08"
        end-date="2023-04"
        label="Rango de fechas"
        locale="es-ES"
        :input-date-parse="(date) => parse(date, 'MMM yyyy', new Date(), { locale: es })"
        :input-date-format="(date) => format(new Date(date), 'MMM yyyy', { locale: es })"
        selection-type="month"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

### Years

If you need to format years in a custom way, use the `selectionType` set to `'year'`. This example provides guidance on using `inputDateFormat` and `inputDateParse` to work with custom year formats like `'yy'`.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangePicker
        start-date="2022"
        end-date="2024"
        label="Date range"
        locale="en-US"
        :input-date-parse="(date) => parse(date, 'yy', new Date())"
        :input-date-format="(date) => format(new Date(date), 'yy')"
        selection-type="year"
      />
    </div>
    <div class="col-lg-6">
      <CDateRangePicker
        start-date="2022"
        end-date="2024"
        label="Rango de fechas"
        locale="es-ES"
        :input-date-parse="(date) => parse(date, 'yy', new Date(), { locale: es })"
        :input-date-format="(date) => format(new Date(date), 'yy', { locale: es })"
        selection-type="year"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangePicker } from '@coreui/vue-pro'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDateRangePicker /&gt;](./api/#cdaterangepicker)
