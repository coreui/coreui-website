# Vue Calendar Component

> The Vue Calendar Component is a versatile, customizable tool for creating responsive calendars in Vue, supporting day, month, and year selection, and global locales.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=vue&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

Explore the Vue Calendar component's basic usage through sample code snippets demonstrating its core functionality.

A calendar renders unadorned — it has no background, border, or padding of its own, so it takes the surface of whatever contains it. The examples below add `border` and `rounded` for that reason; a [card](https://coreui.io/vue/docs/components/card/) works just as well.

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

Weeks are ISO 8601 weeks, which run from Monday to Sunday, and week selection treats them the way month selection treats months. When `firstDayOfWeek` starts the rows on another day, each row spans two weeks and stands for the one that holds most of its days: with Sunday first, the row from August 30 to September 5, 2026 is week 36, picks `2026W36` and gives its Monday, August 31. A week given as `startDate` or `endDate`, as a string or as any date inside it, selects that row, and the calendar opens on a page that shows it. `minDate` and `maxDate` count by whole weeks, so their weeks stay selectable, and `disabledDates` disables a week only when it disables every day of it.

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

## Theme variants

Colour the selection with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the calendar: the selected day, the range tint, the range-hover outline and the date hover in the header all follow it.

```html
<template>
  <div class="d-flex justify-content-center">
    <CCalendar
      class="border rounded theme-success"
      end-date="2024/02/20"
      locale="en-US"
      range
      start-date="2024/02/13"
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

In month, quarter and year selection a period can be picked unless it lies wholly before `minDate` or after `maxDate`, or `disabledDates` covers every day of it that the limits leave, and a range of periods is cleared only when it spans a period that `disabledDates` covers wholly.

Without a `calendarDate`, `startDate` or `endDate`, the calendar opens on today, or on the `minDate` or `maxDate` that today falls outside of, and that date takes the focus even when it cannot be picked.

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

## Locale

The CoreUI Vue Calendar allows users to display dates in non-English locales, making it suitable for international applications.

The navigation writes the month and the year in the order the locale does: the year first where the locale writes it first, as in Japanese, Chinese, Korean, Hungarian or Lithuanian, the month first as in English or Polish.

### Auto

By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and Vue reports a hydration mismatch when the two differ.

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

Example of the Vue Calendar component with Persian locale settings. The calendar is Gregorian, so with a locale whose own calendar has different months, like Persian, it shows the Gregorian months, days and years in that locale's language and digits.

```html
<template>
  <div class="d-flex justify-content-center" dir="rtl">
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
- `isSelected` - whether the cell is selected; in a range only its start and end are, while `isInRange` covers them and every cell between
- `label` - the cell's full name (`Wednesday, August 12, 2026`, `August 2026`, `Q3 2026`, `2026`)

The `#dayCell` slot also receives:

- `isInCurrentMonth` - whether the day belongs to the currently displayed month
- `isToday` - whether the day is today, in its own month (the copy of today among an adjacent month's days is not)
- in day selection, a day among an adjacent month's days carries the range like the month's own days when `selectAdjacentDays` is on; without it the day only fills the grid, the range is not drawn on it and `isInRange` is `false`
- in day selection without `selectAdjacentDays`, a day among an adjacent month's days only fills the grid, so `isDisabled` is `true` and `isSelected` is `false` for it
- in week selection, `isDisabled`, `isInRange` and `isSelected` describe the week row the day sits in, since the row is what the calendar picks and draws; `isInCurrentMonth` and `isToday` still describe the day

Example:

```vue
<CCalendar>
  <template #dayCell="{ date, isSelected, isToday, label }">
    <div :class="{ 'fw-semibold': isSelected }">
      <span aria-hidden="true">{{ date.getDate() }}</span>
      <span class="visually-hidden">{{ label }}</span>
      <small v-if="isToday">Today</small>
    </div>
  </template>
</CCalendar>
```

A cell drawn by a slot gets no `aria-label` from the calendar, so its content is what a screen reader reads. Put `label` in it, for example in a `visually-hidden` span next to the short visible text marked `aria-hidden="true"`, as the pricing example below does.

### Navigation icon slots

Four more slots replace the navigation buttons' artwork, each called with no arguments: `#navPrevIcon` / `#navNextIcon` for the single-step buttons, `#navPrevDoubleIcon` / `#navNextDoubleIcon` for the double-step ones.

### Format options

You can combine custom cell slots with format props to control the default text produced by the calendar:

- `dayFormat` - controls day number formatting: `'numeric'` or `'2-digit'`
- `monthFormat` - controls month formatting: `'long'`, `'narrow'`, `'short'`, `'numeric'`, or `'2-digit'`
- `yearFormat` - controls the year cells of the years view: `'numeric'` or `'2-digit'`
- `weekdayFormat` - controls weekday formatting: number for character length, or `'long'`, `'narrow'`, `'short'`

These props use the JavaScript `Intl.DateTimeFormat` API and respect the current `locale`. They apply to the cells of the grid, not to the navigation above it, which writes months and years in full.

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
      <template #dayCell="{ date, isInCurrentMonth, isSelected, label }">
        <div class="py-1">
          <div aria-hidden="true">{{ date.toLocaleDateString('en-US', { day: 'numeric' }) }}</div>
          <span class="visually-hidden">{{ label }}</span>
          <small
            :class="isSelected ? 'fg-reset' : !isInCurrentMonth ? 'fg-3 opacity-75' : 'fg-3'"
            style="font-size: 0.75rem"
          >
            {{ dayPrices[toISODate(date)] ? `$${dayPrices[toISODate(date)]}` : '-' }}
          </small>
        </div>
      </template>
      <template #monthCell="{ date, isSelected, label }">
        <div class="py-1">
          <div aria-hidden="true">{{ date.toLocaleDateString('en-US', { month: 'short' }) }}</div>
          <span class="visually-hidden">{{ label }}</span>
          <small :class="isSelected ? 'fg-reset' : 'fg-3'" style="font-size: 0.75rem">
            {{
              monthRanges[monthKey(date.getFullYear(), date.getMonth())]
                ? `$${monthRanges[monthKey(date.getFullYear(), date.getMonth())].min}-$${monthRanges[monthKey(date.getFullYear(), date.getMonth())].max}`
                : '-'
            }}
          </small>
        </div>
      </template>
      <template #yearCell="{ date, isSelected, label }">
        <div class="py-1">
          <div aria-hidden="true">{{ date.getFullYear() }}</div>
          <span class="visually-hidden">{{ label }}</span>
          <small :class="isSelected ? 'fg-reset' : 'fg-3'" style="font-size: 0.75rem">
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

## Accessibility

Keyboard navigation in the grid follows the [date picker dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/). The table is a `grid` of `gridcell` cells, which is what lets a cell report itself as selected: selected cells carry `aria-selected` (in week selection, the row), today carries `aria-current="date"`, a cell that cannot be picked carries `aria-disabled="true"` (a day outside `minDate` / `maxDate`, before year 1 or in `disabledDates`, a day among an adjacent month's days without `selectAdjacentDays`, and in week selection the row rather than its days), every day cell announces its full date with the weekday (`Wednesday, August 12, 2026`), and month, quarter and year cells are named by their text. With `range`, the grid of the view that picks the range is `aria-multiselectable`, and every day, week row or period between the two ends that can be picked carries `aria-selected` as well, so the ones in between are announced as selected; the months and years views of a day range only navigate, so there only the ends carry it. A cell drawn by a slot is named by its content; see [Scoped slots](#scoped-slots). In week selection the row that takes focus is named by the days it spans (`August 10 – 16, 2026`), after its week number when week numbers are shown (`Week 33, August 10 – 16, 2026`). Each grid is a composite with a single tab stop: <kbd>Tab</kbd> enters it once and leaves it, the keys below move inside it, and `tabindex="0"` sits on the selected date (in a range, an end the grid shows), else on the cell closest to the date the grid opens on, else wherever focus went last. Every cell that reaches into the days from the day of `minDate` to the day of `maxDate` can take the focus, times of day aside, also one that cannot be picked: the keys stop on it instead of skipping it, a screen reader announces it as unavailable, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there. Cells wholly outside those days, and in day selection the days of an adjacent month without `selectAdjacentDays`, carry no `tabindex`; a month, quarter or year counts as inside while any of its days is, and a week row while any day of the week it stands for is. When no panel has a cell that can take the focus, as when the calendar is given a page that lies wholly outside the limits, every grid itself takes the tab stop, also in markup rendered on the server, and the arrows move to the limit they point toward; a panel wholly outside the limits beside one that reaches into them has no tab stop of its own. A grid in which nothing can be picked, such as a page wholly outside the limits or one that `disabledDates` covers, points `aria-describedby` at a hidden element holding `ariaNothingToPickLabel` (`'Nothing on this page can be picked'`). The navigation buttons stay enabled at the limits: a page outside them can be shown, and it says so. Selectable cells and week rows are marked with `data-coreui-selectable`, which is the hook to use in your own CSS or scripts.

The month and year between the navigation arrows name the page the calendar shows, followed by a visually hidden `ariaNothingToPickLabel` when nothing on it can be picked. Turning a page is announced through [`announce()`](https://coreui.io/vue/docs/accessibility/screen-readers/#announcing-messages) in the polite live region of the page, or of the modal dialog around the calendar, such as the panel of a date picker: one message per panel that turned, naming the page, followed by `ariaNothingToPickLabel` when nothing on that page can be picked (`September 2026, Nothing on this page can be picked`). A day or a week row that holds focus already names its month and year, so a key that moves from it to another page names no page, and announces `ariaNothingToPickLabel` alone when nothing on the new page can be picked; another panel left with nothing to pick, by a turn or by a pick, is announced with its name. A month, quarter or year names only itself, so the page is announced from it as from a button. Nothing is announced while the calendar is hidden, and a newer turn cancels the messages of the previous one. In the years view the page is the range of years it shows, the same text as the grid's label. A pick is announced the same way, because focus stays on the cell and a screen reader does not read its `aria-selected` turning on: as `ariaSelectedDateAnnouncement` with the full name of what was picked (`Selected date: Wednesday, August 12, 2026`), and with `range` as `ariaSelectedRangeAnnouncement` whenever both ends are set after a pick, or as a date when they fall on the same day. The first pick of a range announces nothing. A date picker turns both messages off for the pick that closes its panel and names its toggle with the picked date instead, because a message added while focus goes back to the toggle is dropped by VoiceOver in Safari; a newer pick cancels a message that was not read yet. Activating the month or year button while it has focus opens the months or years view and moves focus to the month or year that panel showed, also when it cannot be picked, or to the panel's tab stop when it lies outside `minDate` / `maxDate`; holding <kbd>Enter</kbd> does not go on to pick it. In the years view the year button goes back to the view that picks the date; while it has focus, focus moves to the day, week, month or quarter that holds the start of the month the panel shows there, or to the panel's tab stop when that lies outside `minDate` / `maxDate`. The button is disabled when the years view is the one that picks (`selectionType="year"`). Picking a month or year in those views, with a click or with <kbd>Enter</kbd> / <kbd>Space</kbd>, opens the next view on that period, unless nothing in it can be picked, and moves focus to the first date of that panel inside `minDate` / `maxDate`, also when that date cannot be picked; when the panel lies wholly outside the limits, focus goes to the calendar's tab stop.

With `showWeekNumber`, each week number is a row header named with the locale's word for week and the number (`Week 36`, `Tydzień 36`), and the column header is that word, read by screen readers only unless `weekNumbersLabel` sets a visible one. In week selection the focused row's name starts with the same name, `Week 36, August 31 – September 6, 2026`. To name the week numbers yourself, give `ariaWeekNumberLabel` a function that takes the week number and returns its name (returning nothing keeps the default); keep the number in it, so a voice-control user can say what they see. The default puts the word before the number in every locale, so for a locale that writes it the other way round, such as `第36週`, pass the function.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous day; crossing the edge of the grid moves to the adjacent month |
| <kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> | Move focus to the same day of the next / previous week |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last day of the week inside `minDate` / `maxDate`, into the previous / next month when the week starts or ends there |
| <kbd>Page Down</kbd> / <kbd>Page Up</kbd> | Move focus to the same day of the next / previous month, keeping the day number when the target month is long enough; a series of presses keeps the day it started from, so January 31 goes to February 28 and then March 31, also across a stop at `minDate` / `maxDate`; any other key or a click starts a new series |
| <kbd>Shift</kbd> + <kbd>Page Down</kbd> / <kbd>Shift</kbd> + <kbd>Page Up</kbd> | Move focus to the same day of the next / previous year, keeping the day of a series the same way; the other views turn as they do without Shift |
| <kbd>Tab</kbd> | Leave the grid; the calendar is one stop, so Tab never walks the dates |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused date; nothing happens on a date that cannot be picked |

The months, quarters, and years views answer to the same keys, with arrows moving by cell and row, <kbd>Home</kbd> / <kbd>End</kbd> moving to the first / last cell of the row, and <kbd>Page Down</kbd> / <kbd>Page Up</kbd> moving by year (by the twelve years of a page in the years view). A jump never lands outside `minDate` / `maxDate`: focus stops on the limit, also when that date cannot be picked.

With `selectionType="week"` the row is what gets picked, so it is the tab stop and the arrows move between rows; <kbd>Home</kbd> and <kbd>End</kbd> move to the first and last week of the month.

A key from the table pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> is neither handled nor cancelled by the grid: focus stays where it is and the key stays free for the browser and assistive technology.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCalendar /&gt;](./api/#ccalendar)
