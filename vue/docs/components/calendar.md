# Vue Calendar Component

> The Vue Calendar Component is a versatile, customizable tool for creating responsive calendars in Vue, supporting day, month, and year selection, and global locales.

## Example

Explore the Vue Calendar component's basic usage through sample code snippets demonstrating its core functionality.

### Days

Select specific days using the Vue Calendar component. The example below shows basic usage.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="en-US" start-date="2024/02/13" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Weeks

Set the `selectionType` to `week` to enable selection of entire week. You can also add `showWeekNumber` to show week numbers.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar
      class="border rounded"
      locale="en-US"
      selection-type="week"
      show-week-number
      start-date="2024W15"
    />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Months

Set the `selectionType` property to `month` to enable selection of entire months.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="en-US" selection-type="month" start-date="2024-2" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Quarters

Set the `selectionType` property to `quarter` to enable quarter selection.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="en-US" selection-type="quarter" start-date="2024Q1" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Years

Set the `selectionType` property to `year` to enable years range selection.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="en-US" selection-type="year" start-date="2024" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

## Multiple calendar panels

Display multiple calendar panels side by side by setting the `calendars` property. This can be useful for selecting ranges or comparing dates across different months.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar :calendars="2" class="border rounded" locale="en-US" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

## Range selection

Enable range selection to allow users to pick a start and end date. This example shows how to configure the Vue Calendar component to handle date ranges.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar
      :calendars="2"
      class="border rounded"
      end-date="2022/09/08"
      locale="en-US"
      range
      start-date="2022/08/23"
    />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

## Disabled dates

The Vue Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the `disabledDates` prop. It accepts:

- A single `Date` or an array of `Date` objects.
- A function or an array of functions that take a `Date` object as an argument and return a boolean indicating whether the date should be disabled.
- A mixed array of `Date` objects and functions.

To disable certain dates, you can provide them in an array. For date ranges, use nested arrays, where each inner array indicates a start date and an end date for that range:

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar
      :calendar-date="calendarDate"
      :calendars="2"
      class="border rounded"
      :disabled-dates="disabledDates"
      locale="en-US"
      :max-date="maxDate"
      :min-date="minDate"
      range
    />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'

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
  <div class="d-flex justify-content-center">
    <CCalendar
      :calendars="2"
      class="border rounded"
      :disabled-dates="disableWeekends"
      locale="en-US"
      range
    />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'

const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6
}
</script>
```

In the example above:

- `disableWeekends` is a function that checks if a date falls on a Saturday (`6`) or a Sunday (`0`).
- The `disabledDates` prop is set to the `disableWeekends` function, which ensures that all weekends are disabled in the calendar.

This prop takes an array and applies custom logic to determine which dates should be disabled.

### Combining functions and specific dates

You can also combine specific dates and functions in the `disabledDates` array. For instance:

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar
      :calendar-date="new Date(2024, 10, 1)"
      :calendars="2"
      class="border rounded"
      :disabled-dates="[disableWeekends, ...specificDates]"
      locale="en-US"
      range
    />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'

const disableWeekends = (date) => {
  const day = date.getDay()
  return day === 0 || day === 6
}

const specificDates = [new Date(2024, 10, 25), new Date(2024, 11, 4), new Date(2024, 11, 12)]
</script>
```

In this example:

- `disableWeekends` disables weekends as before.
- `specificDates` is an array of specific dates to disable.
- The `disabledDates` prop combines both, allowing you to disable weekends and specific dates simultaneously.

## Non-english locale

The CoreUI Vue Calendar allows users to display dates in non-English locales, making it suitable for international applications.

### Auto

By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Chinese

Here is an example of the Vue Calendar component with Chinese locale settings.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="zh-CN" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Japanese

Below is an example of the Calendar component with Japanese locale settings.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="ja" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Korean

Here is an example of the Calendar component with Korean locale settings.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="ko" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

Example of the Calendar component with RTL support, using the Hebrew locale.

```html
<template>
  <div class="d-flex justify-content-center" dir="rtl">
    <CCalendar class="border rounded" locale="he-IL" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

### Persian

Example of the Vue Calendar component with Persian locale settings.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar class="border rounded" locale="fa-IR" />
  </div>
</template>

<script setup>
import { CCalendar } from '@coreui/vue-pro'
</script>
```

## Custom cell rendering

The Vue Calendar component lets you customize calendar cells with scoped slots, so you can render extra content, badges, pricing, or custom formatting directly inside each cell.

### Scoped slots

The component supports four scoped slots, one for each calendar view:

- `#dayCell` - Customize day cells in the days view
- `#monthCell` - Customize month cells in the months view
- `#quarterCell` - Customize quarter cells in the quarters view
- `#yearCell` - Customize year cells in the years view

Each slot receives a slot props object with the current cell state:

- `date` - a JavaScript `Date` object representing the cell date
- `isDisabled` - whether the cell is disabled
- `isInRange` - whether the cell is inside the selected range
- `isSelected` - whether the cell is selected

The `#dayCell` slot also receives:

- `isInCurrentMonth` - whether the day belongs to the currently displayed month
- `isToday` - whether the day is today

Example:

```vue
<CCalendar>
  <template #dayCell="{ date, isSelected, isToday }">
    <div :class="{ 'fw-semibold': isSelected }">
      {{ date.getDate() }}
      <small v-if="isToday">Today</small>
    </div>
  </template>
</CCalendar>
```

### Format options

You can combine custom cell slots with format props to control the default text produced by the calendar:

- `dayFormat` - controls day number formatting: `'numeric'` or `'2-digit'`
- `monthFormat` - controls month formatting: `'long'`, `'narrow'`, `'short'`, `'numeric'`, or `'2-digit'`
- `yearFormat` - controls year formatting: `'numeric'` or `'2-digit'`
- `weekdayFormat` - controls weekday formatting: number for character length, or `'long'`, `'narrow'`, `'short'`

These props use the JavaScript `Intl.DateTimeFormat` API and respect the current `locale`.

### Pricing calendar with custom cells

This example demonstrates a more advanced custom cell rendering setup. It uses scoped slots to display daily prices in the days view, monthly price ranges in the months view, and yearly ranges in the years view. The pricing data is fetched from an external API and cached to avoid duplicate requests.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar
      :calendar-date="calendarDate"
      :calendars="2"
      class="border rounded"
      locale="en-US"
      :max-date="new Date(2025, 11, 31)"
      :min-date="new Date(2022, 0, 1)"
      range
      @calendar-date-change="handleCalendarDateChange"
    >
      <template #dayCell="{ date, isInCurrentMonth, isSelected }">
        <div class="py-1">
          <div>{{ date.toLocaleDateString('en-US', { day: '2-digit' }) }}</div>
          <small
            :class="
              isSelected
                ? 'text-reset'
                : !isInCurrentMonth
                  ? 'text-body-tertiary opacity-75'
                  : 'text-body-tertiary'
            "
            style="font-size: 0.75rem"
          >
            {{ dayPrices[toISODate(date)] ? `$${dayPrices[toISODate(date)]}` : '-' }}
          </small>
        </div>
      </template>
      <template #monthCell="{ date, isSelected }">
        <div class="py-1">
          <div>{{ date.toLocaleDateString('en-US', { month: 'short' }) }}</div>
          <small
            :class="isSelected ? 'text-reset' : 'text-body-tertiary'"
            style="font-size: 0.75rem"
          >
            {{
              monthRanges[monthKey(date.getFullYear(), date.getMonth())]
                ? `$${monthRanges[monthKey(date.getFullYear(), date.getMonth())].min}-$${monthRanges[monthKey(date.getFullYear(), date.getMonth())].max}`
                : '-'
            }}
          </small>
        </div>
      </template>
      <template #yearCell="{ date, isSelected }">
        <div class="py-1">
          <div>{{ date.getFullYear() }}</div>
          <small
            :class="isSelected ? 'text-reset' : 'text-body-tertiary'"
            style="font-size: 0.75rem"
          >
            {{
              yearRanges[yearKey(date.getFullYear())]
                ? `$${yearRanges[yearKey(date.getFullYear())].min}-$${yearRanges[yearKey(date.getFullYear())].max}`
                : '-'
            }}
          </small>
        </div>
      </template>
    </CCalendar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CCalendar } from '@coreui/vue-pro'

const calendarDate = ref(new Date(2025, 0, 1))

const dayPrices = ref({})
const monthRanges = ref({})
const yearRanges = ref({})

const fetchedKeys = new Set()
const inFlightKeys = new Set()

const toISODate = (date) => date.toISOString().slice(0, 10)

const monthKey = (year, monthIndex) => `${year}-${String(monthIndex + 1).padStart(2, '0')}-01`

const yearKey = (year) => `${year}-01-01`

const getDateRangeForView = (date, view) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  switch (view) {
    case 'months':
      return { startDate: new Date(year, 0, 1), endDate: new Date(year, 11, 31) }
    case 'years': {
      const startYear = Math.floor(year / 12) * 12
      return { startDate: new Date(startYear, 0, 1), endDate: new Date(startYear + 11, 11, 31) }
    }
    case 'days':
    default:
      return { startDate: new Date(year, month, 1), endDate: new Date(year, month + 2, 0) }
  }
}

const fetchPricingData = async (startDate, endDate, view, limit = 400) => {
  const start = toISODate(startDate)
  const end = toISODate(endDate)
  const requestKey = `${view}:${start}:${end}:${limit}`

  if (fetchedKeys.has(requestKey) || inFlightKeys.has(requestKey)) {
    return
  }

  inFlightKeys.add(requestKey)

  try {
    const response = await fetch(
      `https://apitest.coreui.io/demos/daily-rates.php?start_date=${start}&end_date=${end}&view=${view}&limit=${limit}`
    )
    const data = await response.json()

    fetchedKeys.add(requestKey)

    if (view === 'days') {
      dayPrices.value = { ...dayPrices.value, ...data }
      return
    }

    if (view === 'months') {
      monthRanges.value = { ...monthRanges.value, ...data }
      return
    }

    yearRanges.value = { ...yearRanges.value, ...data }
  } catch (error) {
    console.error('Error fetching pricing data:', error)
  } finally {
    inFlightKeys.delete(requestKey)
  }
}

const requestFor = async (date, view) => {
  const { startDate, endDate } = getDateRangeForView(date, view)
  await fetchPricingData(startDate, endDate, view)
}

const handleCalendarDateChange = async (date, view = 'days') => {
  calendarDate.value = date
  await requestFor(date, view)
}

onMounted(async () => {
  await requestFor(calendarDate.value, 'days')
})
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCalendar /&gt;](./api/#ccalendar)
