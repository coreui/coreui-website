# Bootstrap 6 Calendar

> The Bootstrap Calendar Component is a versatile, customizable tool for creating responsive calendars in Bootstrap, supporting day, month, and year selection, and global locales.

## Example

Explore the Bootstrap 6 Calendar component's basic usage through sample code snippets demonstrating its core functionality.

A calendar renders unadorned — it has no background, border, or padding of its own, so it takes the surface of whatever contains it. The examples below add `.border` and `.rounded` for that reason; a [card](https://coreui.io/bootstrap/docs/components/card/) works just as well.

### Days

Select specific days using the Bootstrap Calendar component. The example below shows basic usage.

```html
<div class="d-flex justify-content-center">
  <div
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-start-date="2024/02/13"
    data-coreui-calendar
  ></div>
</div>
```

### Weeks

Set the `data-coreui-selection-type` to `week` to enable selection of entire week. You can also use `data-coreui-show-week-number="true"` to show week numbers.

Weeks are ISO 8601 weeks, which run from Monday to Sunday, and week selection treats them the way month selection treats months. When `firstDayOfWeek` starts the rows on another day, each row spans two weeks and stands for the one that holds most of its days: with Sunday first, the row from August 30 to September 5, 2026 is week 36, picks `2026W36` and gives its Monday, August 31. A week given as `startDate` or `endDate`, as a string or as any date inside it, selects that row, and the calendar opens on a page that shows it. `minDate` and `maxDate` count by whole weeks, so their weeks stay selectable, and `disabledDates` disables a week only when it disables every day of it.

```html
<div class="d-flex justify-content-center">
  <div
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-selection-type="week"
    data-coreui-show-week-number="true"
    data-coreui-start-date="2024W15"
    data-coreui-calendar
  ></div>
</div>
```

### Months

Set the `data-coreui-selection-type` to `month` to enable selection of entire months.

```html
<div class="d-flex justify-content-center">
  <div 
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-selection-type="month"
    data-coreui-start-date="2024-2"
    data-coreui-calendar
  ></div>
</div>
```

### Quarters

Set the `data-coreui-selection-type` property to `quarter` to enable quarters range selection.

```html
<div class="d-flex justify-content-center">
  <div
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-selection-type="quarter"
    data-coreui-start-date="2024Q1"
    data-coreui-calendar
  ></div>
</div>
```

### Years

Set the `data-coreui-selection-type` to `year` to enable years range selection.

```html
<div class="d-flex justify-content-center">
  <div 
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-selection-type="year"
    data-coreui-start-date="2024"
    data-coreui-calendar
  ></div>
</div>
```

## Multiple calendar panels

Display multiple calendar panels side by side by setting the `data-coreui-calendars` attribute. This can be useful for selecting ranges or comparing dates across different months.

```html
<div class="d-flex justify-content-center">
  <div 
    class="border rounded"
    data-coreui-calendars="2"
    data-coreui-locale="en-US"
    data-coreui-calendar
  ></div>
</div>
```

## Range selection

Enable range selection by adding `data-coreui-range="true"` to allow users to pick a start and end date. This example demonstrates how to configure the Bootstrap 6 Calendar component to handle date ranges.

```html
<div class="d-flex justify-content-center">
  <div 
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-calendars="2"
    data-coreui-range="true"
    data-coreui-start-date="2022/08/23"
    data-coreui-end-date="2022/09/08"
    data-coreui-calendar
  ></div>
</div>
```

## Theme variants

Colour the selection with a [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the calendar: the selected day, the range tint, the range-hover outline and the date hover in the header all follow it.

```html
<div class="d-flex justify-content-center">
  <div
    class="border rounded theme-success"
    data-coreui-locale="en-US"
    data-coreui-start-date="2024/02/13"
    data-coreui-end-date="2024/02/20"
    data-coreui-range="true"
    data-coreui-calendar
  ></div>
</div>
```

## Disabled dates

The Bootstrap Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the `disabledDates` option. It accepts:

- A single `Date` or an array of `Date` objects.
- A function or an array of functions that take a `Date` object as an argument and return a boolean indicating whether the date should be disabled.
- A mixed array of `Date` objects and functions.

In month, quarter and year selection a period can be picked unless it lies wholly before `minDate` or after `maxDate`, or `disabledDates` covers every day of it that the limits leave, and a range of periods is cleared only when it spans a period that `disabledDates` covers wholly.

Without a `calendarDate`, `startDate` or `endDate`, the calendar opens on today, or on the `minDate` or `maxDate` that today falls outside of, and that date takes the focus even when it cannot be picked.

To disable certain dates, you can provide them in an array. For date ranges, use nested arrays, where each inner array indicates a start date and an end date for that range:

```html
<div class="d-flex justify-content-center">
  <div id="myCalendarDisabledDates" class="border rounded"></div>
</div>
```

```js
const myCalendarDisabledDates = document.getElementById('myCalendarDisabledDates')

const optionsCalendarDisabledDates = {
  calendarDate: new Date(2022, 2, 1),
  calendars: 2,
  disabledDates: [
    [new Date(2022, 2, 4), new Date(2022, 2, 7)],
    new Date(2022, 2, 16),
    new Date(2022, 3, 16),
    [new Date(2022, 4, 2), new Date(2022, 4, 8)]
  ],
  locale: 'en-US',
  maxDate: new Date(2022, 5, 0),
  minDate: new Date(2022, 1, 1)
}

new coreui.Calendar(myCalendarDisabledDates, optionsCalendarDisabledDates)
```

### Disabling weekends

To disable weekends, provide a function for the `disabledDates` option. Here's the method:

```html
<div class="d-flex justify-content-center">
  <div id="myCalendarDisabledDates2" class="border rounded"></div>
</div>
```

```js
const myCalendarDisabledDates2 = document.getElementById('myCalendarDisabledDates2')

const optionsCalendarDisabledDates2 = {
  calendars: 2,
  disabledDates(date) {
    const day = date.getDay()
    return day === 0 || day === 6
  },
  locale: 'en-US'
}

new coreui.Calendar(myCalendarDisabledDates2, optionsCalendarDisabledDates2)
```

In the example above:

- `disableWeekends` is a function that checks if a date falls on a Saturday (`6`) or a Sunday (`0`).
- The `disabledDates` option utilizes the `disableWeekends` function to disable all weekends in the calendar.

### Combining functions and specific dates

You can also combine specific dates and functions in the `disabledDates` array. For instance:

```html
<div class="d-flex justify-content-center">
  <div id="myCalendarDisabledDates3" class="border rounded"></div>
</div>
```

```js
const myCalendarDisabledDates3 = document.getElementById('myCalendarDisabledDates3')

const disableWeekends = date => {
  const day = date.getDay()
  return day === 0 || day === 6
}

const specificDates = [
  new Date(2024, 10, 25),
  new Date(2024, 11, 4),
  new Date(2024, 11, 12)
]

const optionsCalendarDisabledDates3 = {
  calendarDate: new Date(2024, 10, 1),
  calendars: 2,
  disabledDates: [disableWeekends, ...specificDates],
  locale: 'en-US'
}

new coreui.Calendar(myCalendarDisabledDates3, optionsCalendarDisabledDates3)
```

In this example:

- `disableWeekends` disables weekends as before.
- `specificDates` is an array of specific dates to disable.
- The `disabledDates` option combines both, allowing you to disable weekends and specific dates simultaneously.

## Locale

The CoreUI Bootstrap Calendar allows users to display dates in non-English locales, making it suitable for international applications.

The navigation writes the month and the year in the order the locale does: the year first where the locale writes it first, as in Japanese, Chinese, Korean, Hungarian or Lithuanian, the month first as in English or Polish.

### Auto

By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-calendar></div>
</div>
```

### Chinese

Here is an example of the Bootstrap Calendar component with Chinese locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="zh-CN" data-coreui-calendar></div>
</div>
```

### Japanese

Below is an example of the Calendar component with Japanese locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="ja" data-coreui-calendar></div>
</div>
```

### Korean

Here is an example of the Calendar component with Korean locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="ko" data-coreui-calendar></div>
</div>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

Example of the Calendar component with RTL support, using the Hebrew locale.

```html
<div class="d-flex justify-content-center" dir="rtl">
  <div class="border rounded" data-coreui-locale="he-IL" data-coreui-calendar></div>
</div>
```

### Persian

Example of the Bootstrap Calendar component with Persian locale settings. The calendar is Gregorian, so with a locale whose own calendar has different months, like Persian, it shows the Gregorian months, days and years in that locale's language and digits.

```html
<div class="d-flex justify-content-center" dir="rtl">
  <div class="border rounded" data-coreui-locale="fa-IR" data-coreui-calendar></div>
</div>
```

## Custom cell rendering

The Calendar component provides powerful customization options through render functions that allow you to completely control how calendar cells are displayed. These render functions are particularly useful when you need to add custom content, styling, or data to calendar cells.

### Render functions

The component supports four render functions, one for each view type:

- `renderDayCell(date, meta)` - Customize day cells in the days view
- `renderMonthCell(date, meta)` - Customize month cells in the months view
- `renderQuarterCell(date, meta)` - Customize quarter cells in the quarters view
- `renderYearCell(date, meta)` - Customize year cells in the years view

Each render function receives two parameters:

1. `date` - A JavaScript Date object representing the cell's date
2. `meta` - An object containing cell state information:
   - `isDisabled` - Whether the cell is disabled
   - `isInRange` - Whether the cell is within a selected range (range selection only)
   - `isSelected` - Whether the cell is selected; in a range only its start and end are, while `isInRange` covers them and every cell between
   - `label` - The cell's full name (`Wednesday, August 12, 2026`, `August 2026`, `Q3 2026`, `2026`)
   - For `renderDayCell` only:
     - `isInCurrentMonth` - Whether the day belongs to the current month
     - `isToday` - Whether the day is today, in its own month (the copy of today among an adjacent month's days is not)
     - In day selection, a day among an adjacent month's days carries the range like the month's own days when `selectAdjacentDays` is on; without it the day only fills the grid, the range is not drawn on it and `isInRange` is `false`
     - In day selection without `selectAdjacentDays`, a day among an adjacent month's days only fills the grid, so `isDisabled` is `true` and `isSelected` is `false` for it
     - In week selection, `isDisabled`, `isInRange` and `isSelected` describe the week row the day sits in, since the row is what the calendar picks and draws; `isInCurrentMonth` and `isToday` still describe the day

The render functions should return an HTML string that will be displayed inside the cell. The returned HTML is automatically sanitized to prevent XSS attacks. When a click or a key picks a date, the calendar calls the render function again for every cell, so content drawn from `meta` follows the new selection.

A cell drawn by a render function gets no `aria-label` from the calendar, so its content is what a screen reader reads. Put `meta.label` in it, for example in a `visually-hidden` span next to the short visible text marked `aria-hidden="true"`, as the pricing example below does.

### Format options

In addition to custom rendering, you can control the display format of calendar elements using format options:

- `dayFormat` - Controls how day numbers are displayed (`'numeric'` or `'2-digit'`)
- `monthFormat` - Controls how month names are displayed (`'long'`, `'narrow'`, `'short'`, `'numeric'`, or `'2-digit'`)
- `yearFormat` - Controls how the year cells of the years view are displayed (`'numeric'` or `'2-digit'`)
- `weekdayFormat` - Controls how weekday names are displayed (number for character length, or `'long'`, `'narrow'`, `'short'`)

These format options use the JavaScript `Intl.DateTimeFormat` API and respect the `locale` setting. They apply to the cells of the grid, not to the navigation above it, which writes months and years in full.

### Security considerations

For security reasons, all HTML returned by render functions is automatically sanitized using the built-in sanitizer. You can:

- Disable sanitization by setting `sanitize: false` (not recommended)
- Customize allowed HTML tags and attributes using the `allowList` option
- Provide your own sanitization function using the `sanitizeFn` option

Note that `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied via data attributes for security reasons.

### Pricing calendar with custom cells

This example demonstrates advanced usage of custom cell rendering to display pricing data across different calendar views. It uses `renderDayCell` to show daily prices, `renderMonthCell` to display monthly price ranges, and `renderYearCell` to show annual price ranges. The data is fetched from an external API and cached for performance.

```html
<div class="d-flex justify-content-center">
  <div id="myCalendarCustomizeCells" class="border rounded"></div>
</div>
```

```js
const myCalendarCustomizeCells = document.getElementById('myCalendarCustomizeCells')

// Pricing data caches
const pricingData = {} // For day prices
const monthRangeData = {} // For month min/max ranges
const yearRangeData = {} // For year min/max ranges

// Fetch pricing data for a specific date range and view
const fetchPricingData = async (startDate, endDate, view = 'days', limit = 400) => {
  const startDateStr = startDate.toISOString().split('T')[0]
  const endDateStr = endDate.toISOString().split('T')[0]

  try {
    const response = await fetch(`https://apitest.coreui.io/demos/daily-rates.php?start_date=${startDateStr}&end_date=${endDateStr}&view=${view}&limit=${limit}`)
    const data = await response.json()

    // API now returns object with date keys, merge directly into appropriate cache
    switch (view) {
      case 'days': {
        Object.assign(pricingData, data)
        break
      }

      case 'months': {
        Object.assign(monthRangeData, data)
        break
      }

      case 'years': {
        Object.assign(yearRangeData, data)
        break
      }

      default: {
        break
      }
    }
  } catch (error) {
    console.error('Error fetching pricing data:', error)
  }
}

// Get min/max prices for a specific month from cached API data
const getMonthPriceRange = (year, month) => {
  // Format: YYYY-MM-01
  const monthKey = `${year}-${String(month + 1).padStart(2, '0')}-01`
  return monthRangeData[monthKey] || null
}

// Get min/max prices for a specific year from cached API data
const getYearPriceRange = year => {
  // Format: YYYY-01-01
  const yearKey = `${year}-01-01`
  return yearRangeData[yearKey] || null
}

// Helper to get date range based on view
const getDateRangeForView = (date, view) => {
  switch (view) {
    case 'days': {
      return {
        startDate: new Date(date.getFullYear(), date.getMonth(), 1),
        endDate: new Date(date.getFullYear(), date.getMonth() + 2, 0)
      }
    }

    case 'months': {
      return {
        startDate: new Date(date.getFullYear(), 0, 1),
        endDate: new Date(date.getFullYear(), 11, 31)
      }
    }

    case 'years': {
      const startYear = Math.floor(date.getFullYear() / 12) * 12
      return {
        startDate: new Date(startYear, 0, 1),
        endDate: new Date(startYear + 11, 11, 31)
      }
    }

    default: {
      return null
    }
  }
}

const myDefaultAllowList = coreui.Calendar.Default.allowList
myDefaultAllowList.div.push('style')

// Initialize calendar with data
const initCalendar = async () => {
  const initialDate = new Date(2025, 0, 1)
  const dateRange = getDateRangeForView(initialDate, 'days')

  // Fetch initial data
  await fetchPricingData(dateRange.startDate, dateRange.endDate, 'days')

  const calendar = new coreui.Calendar(myCalendarCustomizeCells, {
    calendars: 2,
    calendarDate: initialDate,
    locale: 'en-US',
    minDate: new Date(2022, 0, 1),
    maxDate: new Date(2025, 11, 31),
    range: true,
    renderDayCell(date, meta) {
      const dateKey = date.toISOString().split('T')[0]
      const price = pricingData[dateKey]

      return `<div class="py-1">
        <div aria-hidden="true">${date.toLocaleDateString('en-US', { day: 'numeric' })}</div>
        <span class="visually-hidden">${meta.label}</span>
        <div class="${meta.isSelected ? 'fg-reset' : `fg-3${meta.isInCurrentMonth ? '' : ' opacity-75'}`}" style="font-size: 0.75rem;">${price ? `$${price}` : '-'}</div>
      </div>`
    },
    renderMonthCell(date, meta) {
      const priceRange = getMonthPriceRange(date.getFullYear(), date.getMonth())

      return `<div class="py-1">
        <div aria-hidden="true">${date.toLocaleDateString('en-US', { month: 'short' })}</div>
        <span class="visually-hidden">${meta.label}</span>
        <div class="${meta.isSelected ? 'fg-reset' : 'fg-3'}" style="font-size: 0.75rem;">${priceRange ? `$${priceRange.min}-$${priceRange.max}` : '-'}</div>
      </div>`
    },
    renderYearCell(date, meta) {
      const priceRange = getYearPriceRange(date.getFullYear())

      return `<div class="py-1">
        <div aria-hidden="true">${date.getFullYear()}</div>
        <span class="visually-hidden">${meta.label}</span>
        <div class="${meta.isSelected ? 'fg-reset' : 'fg-3'}" style="font-size: 0.75rem;">${priceRange ? `$${priceRange.min}-$${priceRange.max}` : '-'}</div>
      </div>`
    }
  })

  // Fetch data when date or view changes
  const handleDataUpdate = (date, view) => {
    const dateRange = getDateRangeForView(date, view)
    if (dateRange) {
      fetchPricingData(dateRange.startDate, dateRange.endDate, view).then(() => {
        calendar.refresh()
      })
    }
  }

  // Listen for calendar date changes
  myCalendarCustomizeCells.addEventListener('calendarDateChange.coreui.calendar', event => {
    handleDataUpdate(event.date, event.view || 'days')
  })

  // Listen for calendar view changes
  myCalendarCustomizeCells.addEventListener('calendarViewChange.coreui.calendar', event => {
    if (event.source !== 'cellClick') {
      handleDataUpdate(calendar._calendarDate || initialDate, event.view)
    }
  })
}

initCalendar()
```

## Accessibility

Keyboard navigation in the grid follows the [date picker dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/). The table is a `grid` of `gridcell` cells, which is what lets a cell report itself as selected: selected cells carry `aria-selected` (in week selection, the row), today carries `aria-current="date"`, a cell that cannot be picked carries `aria-disabled="true"` (a day outside `minDate` / `maxDate`, before year 1 or in `disabledDates`, a day among an adjacent month's days without `selectAdjacentDays`, and in week selection the row rather than its days), every day cell announces its full date with the weekday (`Wednesday, August 12, 2026`), and month, quarter and year cells are named by their text. With `range`, the grid of the view that picks the range is `aria-multiselectable`, and every day, week row or period between the two ends that can be picked carries `aria-selected` as well, so the ones in between are announced as selected; the months and years views of a day range only navigate, so there only the ends carry it. A cell drawn by a render function is named by its content; see [Render functions](#render-functions). In week selection the row that takes focus is named by the days it spans (`August 10 – 16, 2026`), after its week number when week numbers are shown (`Week 33, August 10 – 16, 2026`). Each grid is a composite with a single tab stop: <kbd>Tab</kbd> enters it once and leaves it, the keys below move inside it, and `tabindex="0"` sits on the selected date (in a range, an end the grid shows), else on the cell closest to the date the grid opens on, else wherever focus went last. Every cell that reaches into the days from the day of `minDate` to the day of `maxDate` can take the focus, times of day aside, also one that cannot be picked: the keys stop on it instead of skipping it, a screen reader announces it as unavailable, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there. Cells wholly outside those days, and in day selection the days of an adjacent month without `selectAdjacentDays`, carry no `tabindex`; a month, quarter or year counts as inside while any of its days is, and a week row while any day of the week it stands for is. Selectable cells and week rows are marked with `data-coreui-selectable`, which is the hook to use in your own CSS or scripts. The months, quarters, and years views answer to the same keys, with arrows moving by cell and row and <kbd>Home</kbd> / <kbd>End</kbd> to the first / last cell of the row, and no jump ever lands outside `minDate` / `maxDate` or before year 1 — focus stops on the last date inside them. A month, quarter or year counts as inside while any of its days is, and a week row while any day of the week it stands for is. When no panel has a cell that can take the focus, as when the calendar is given a page that lies wholly outside the limits, every grid itself takes the tab stop and the arrows move to the limit they point toward; a panel wholly outside the limits beside one that reaches into them has no tab stop of its own. A grid in which nothing can be picked, such as a page wholly outside the limits or one that `disabledDates` covers, points `aria-describedby` at a hidden element holding `ariaNothingToPickLabel` (`'Nothing on this page can be picked'`). The navigation buttons stay enabled at the limits: a page outside them can be shown, and it says so.

The month and year between the navigation arrows name the page the calendar shows, followed by a visually hidden `ariaNothingToPickLabel` when nothing on it can be picked. Turning a page is announced through [`announce()`](https://coreui.io/bootstrap/docs/getting-started/accessibility/#announcing-messages) in the polite live region of the page, or of the modal dialog around the calendar, such as the panel of a date picker: one message per panel that turned, naming the page, followed by `ariaNothingToPickLabel` when nothing on that page can be picked (`September 2026, Nothing on this page can be picked`). A day or a week row that holds focus already names its month and year, so a key that moves from it to another page names no page, and announces `ariaNothingToPickLabel` alone when nothing on the new page can be picked; another panel left with nothing to pick, by a turn or by a pick, is announced with its name. A month, quarter or year names only itself, so the page is announced from it as from a button. Nothing is announced while the calendar is hidden, and a newer turn cancels the messages of the previous one. In the years view the page is the range of years it shows, the same text as the grid's label. A pick is announced the same way, because focus stays on the cell and a screen reader does not read its `aria-selected` turning on: as `ariaSelectedDateAnnouncement` with the full name of what was picked (`Selected date: Wednesday, August 12, 2026`), and with `range` as `ariaSelectedRangeAnnouncement` whenever both ends are set after a pick, or as a date when they fall on the same day. The first pick of a range announces nothing. A date picker turns both messages off for the pick that closes its panel and names its toggle with the picked date instead, because a message added while focus goes back to the toggle is dropped by VoiceOver in Safari; a newer pick cancels a message that was not read yet. Activating the month or year button while it has focus opens the months or years view and moves focus to the month or year that panel showed, also when it cannot be picked, or to the panel's tab stop when it lies outside `minDate` / `maxDate`; holding <kbd>Enter</kbd> does not go on to pick it. In the years view the year button goes back to the view that picks the date; while it has focus, focus moves to the day, week, month or quarter that holds the start of the month the panel shows there, or to the panel's tab stop when that lies outside `minDate` / `maxDate`. The button is disabled when the years view is the one that picks (`selectionType: 'year'`). Picking a month or year in those views, with a click or with <kbd>Enter</kbd> / <kbd>Space</kbd>, opens the next view on that period, unless nothing in it can be picked, and moves focus to the first date of that panel inside `minDate` / `maxDate`, also when that date cannot be picked; when the panel lies wholly outside the limits, focus goes to the calendar's tab stop.

With `showWeekNumber`, each week number is a row header named with the locale's word for week and the number (`Week 36`, `Tydzień 36`), and the column header is that word, read by screen readers only unless `weekNumbersLabel` sets a visible one. In week selection the focused row's name starts with the same name, `Week 36, August 31 – September 6, 2026`. To name the week numbers yourself, give `ariaWeekNumberLabel` a function that takes the week number and returns its name (returning nothing keeps the default); keep the number in it, so a voice-control user can say what they see. The default puts the word before the number in every locale, so for a locale that writes it the other way round, such as `第36週`, pass the function.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous day; crossing the edge of the grid moves to the adjacent month |
| <kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> | Move focus to the same day of the next / previous week |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last day of the week inside `minDate` / `maxDate`, into the previous / next month when the week starts or ends there |
| <kbd>Page Down</kbd> / <kbd>Page Up</kbd> | Move focus to the same day of the next / previous month, keeping the day number when the target month is long enough; a series of presses keeps the day it started from, so January 31 goes to February 28 and then March 31, also across a stop at `minDate` / `maxDate`; any other key or a click starts a new series; in the months and quarters views move by year, in the years view by the twelve years of a page |
| <kbd>Shift</kbd> + <kbd>Page Down</kbd> / <kbd>Shift</kbd> + <kbd>Page Up</kbd> | Move focus to the same day of the next / previous year, keeping the day of a series the same way; the other views turn as they do without Shift |
| <kbd>Tab</kbd> | Leave the grid; the calendar is one stop, so Tab never walks the dates |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused date; nothing happens on a date that cannot be picked |

With `data-coreui-selection-type="week"` the row is what gets picked, so it is the tab stop and the arrows move between rows; <kbd>Home</kbd> and <kbd>End</kbd> move to the first and last week of the month.

A key from the table pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> is neither handled nor cancelled by the grid: focus stays where it is and the key stays free for the browser and assistive technology.

## Usage

### Via data attributes

Add `data-coreui-calendar` to a `div` element.

```html
<div data-coreui-calendar></div>
```

### Via JavaScript

Call the calendar via JavaScript:

```html
<div class="calendar"></div>
```

```js
const calendarElementList = Array.prototype.slice.call(document.querySelectorAll('.calendar'))
const calendarList = calendarElementList.map(calendarEl => {
  return new coreui.Calendar(calendarEl)
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

> Note that for security reasons the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied using data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) | Object which contains allowed attributes and tags. |
| `ariaNavNextMonthLabel` | string | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the calendar. This label is read by screen readers to describe the action associated with the button. |
| `ariaNavNextYearLabel` | string | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the calendar. This label is intended for screen readers to help users understand the button's functionality. |
| `ariaNavNextYearsLabel` | string | `'Next 12 years'` | The accessible label of the button that turns the years view to the next page of years. |
| `ariaNavPrevMonthLabel` | string | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. |
| `ariaNavPrevYearLabel` | string | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. |
| `ariaNavPrevYearsLabel` | string | `'Previous 12 years'` | The accessible label of the button that turns the years view to the previous page of years. |
| `ariaNothingToPickLabel` | string, null | `'Nothing on this page can be picked'` | The description of a grid in which nothing can be picked, such as a page wholly outside `minDate` / `maxDate` or one that `disabledDates` covers, also announced when the calendar turns to such a page. An empty string or `null` leaves the grid without a description. |
| `ariaSelectedDateAnnouncement` | string, null | `'Selected date: {date}'` | The message announced when a click or <kbd>Enter</kbd> / <kbd>Space</kbd> picks a date, and with `range` when both ends fall on the same day. `{date}` is replaced by the full name of what was picked: `Wednesday, August 12, 2026`, `August 10 – 16, 2026` (`Week 33, August 10 – 16, 2026` with `showWeekNumber`), `August 2026`, `Q3 2026` or `2026`. An empty string or `null` announces nothing. |
| `ariaSelectedRangeAnnouncement` | string, null | `'Selected range: {start} to {end}'` | The message announced with `range` when a pick leaves both ends set. `{start}` and `{end}` are replaced by the full names of its ends, written as for `ariaSelectedDateAnnouncement`. An empty string or `null` announces nothing. |
| `ariaWeekNumberLabel` | function, null | `null` | Names each week number for screen readers: a function that takes the week number and returns its name. Without it the name is the locale's word for week and the number, such as `Week 36`. Set it in JavaScript; a data attribute cannot hold a function. |
| `calendarDate` | date, number, string, null | `null` | Default date of the component. |
| `calendars` | number | `1` | The number of calendars that render on desktop devices. |
| `dayFormat` | `'numeric'`, `'2-digit'` | `'numeric'` | Sets the format for days. Accepts a built-in format (`'numeric'` or `'2-digit'`) |
| `disabledDates` | array, function, null | `null` | Specify the list of dates that cannot be selected. In week, month, quarter and year selection a period is disabled when every day of it is. |
| `endDate` | date, number, string, null | `null` | Initial selected to date (range). |
| `firstDayOfWeek` | number | `1` | <p>Sets the day of start week.</p>  <ul><li>`0` - Sunday</li><li>`1` - Monday</li><li>`2` - Tuesday</li><li>`3` - Wednesday</li><li>`4` - Thursday</li><li>`5` - Friday</li><li>`6` - Saturday</li></ul> |
| `locale` | string | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `maxDate` | date, number, string, null | `null` | Max selectable date. The days after its day are disabled, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. |
| `minDate` | date, number, string, null | `null` | Min selectable date. The days before its day are disabled, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. |
| `monthFormat` | `'long'`, `'narrow'`, `'short'`, `'numeric'`, `'2-digit'` | `'short'` | Sets the format for month names. Accepts built-in formats (`'long'`, `'narrow'`, `'short'`, `'numeric'`, `'2-digit'`). |
| `navNextDoubleIcon` | string | double chevron SVG | Inline SVG of the button that turns the calendar forward by a year, or by a page of years in the years view (sanitized). In right-to-left it shows on the backward button. |
| `navNextIcon` | string | chevron SVG | Inline SVG of the button that turns the calendar forward by a month (sanitized). In right-to-left it shows on the backward button. |
| `navPrevDoubleIcon` | string | double chevron SVG | Inline SVG of the button that turns the calendar back by a year, or by a page of years in the years view (sanitized). In right-to-left it shows on the forward button. |
| `navPrevIcon` | string | chevron SVG | Inline SVG of the button that turns the calendar back by a month (sanitized). In right-to-left it shows on the forward button. |
| `range` | boolean | `false` | Allow range selection |
| `renderDayCell` | function, null | `null` | Custom function to render day cells. Receives `date` and `meta` object (with `isDisabled`, `isInCurrentMonth`, `isInRange`, `isSelected`, `isToday`, `label`) as parameters and should return HTML string. |
| `renderMonthCell` | function, null | `null` | Custom function to render month cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`, `label`) as parameters and should return HTML string. |
| `renderQuarterCell` | function, null | `null` | Custom function to render quarter cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`, `label`) as parameters and should return HTML string. |
| `renderYearCell` | function, null | `null` | Custom function to render year cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`, `label`) as parameters and should return HTML string. |
| `sanitize` | boolean | `true` | Enable or disable the sanitization. If activated `navNextDoubleIcon`, `navNextIcon`, `navPrevDoubleIcon`, `navPrevIcon`, `renderDayCell`, `renderMonthCell`, `renderQuarterCell`, and `renderYearCell` options will be sanitized. |
| `sanitizeFn` | null, function | `null` | Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `selectAdjacentDays` | boolean | `false` | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to true. A picked day of an adjacent month keeps the month on screen and shows as selected with an outline on a subtle background instead of the solid fill. |
| `selectEndDate` | boolean | `false` | With `range`, makes the next pick set the end date instead of the start date. Picking the start date turns it on and picking the end date turns it off; each change fires `selectEndChange`. |
| `selectionType` | `'day'`, `'week'`, `'month'`, `'quarter'`, `'year'` | `day` | Specify the type of date selection as day, week, month, quarter, or year. |
| `showAdjacentDays` | boolean | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | boolean | `false` | Set whether to display week numbers in the calendar. |
| `startDate` | date, number, string, null | `null` | Initial selected date. |
| `weekdayFormat` | number, `'long'`, `'narrow'`, `'short'` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | string, null | `null` | Label displayed over week numbers in the calendar. Without it the column is named for screen readers with the locale's word for week. |
| `yearFormat` | `'numeric'`, `'2-digit'` | `'numeric'` | Sets how the year cells of the years view write the year: `'numeric'` (2026) or `'2-digit'` (26). The navigation always writes the full year. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys a component. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the calendar instance associated to a DOM element, you can use it like this: `coreui.Calendar.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a calendar instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Calendar.getOrCreateInstance(element)` |
| `refresh` | Renders the calendar again with its current configuration, for example once the data a `renderDayCell` callback reads has loaded. Focus inside the calendar returns to the same date or button, or to the calendar's focusable date when that one is gone. |
| `setCalendarDate(date)` | Shows the month, quarter or year of the given date. |
| `setEndDate(date)` | Sets the end of the selected range and renders the calendar again. |
| `setRange(start, end)` | With `range`, sets both ends and renders the calendar once, without a moment where one end is new and the other old. |
| `setSelectEndDate(value)` | With `range`, makes the next pick set the end date (`true`) or the start date (`false`), as the `selectEndDate` option does. It fires no `selectEndChange`. |
| `setStartDate(date)` | Sets the selected date, or the start of the range, and renders the calendar again. The setters fire no change event and throw the option's `TypeError` for another type. |

### Events

| Event | Description | Event detail |
| --- | --- | --- |
| `calendarDateChange.coreui.calendar` | Fired when the calendar date changes. | `{ date: Date, view: 'days' \| 'months' \| 'quarters' \| 'years' }` |
| `calendarMouseleave.coreui.calendar` | Fired when the cursor leaves the calendar. | — |
| `calendarViewChange.coreui.calendar` | Fired when the calendar view changes. | `{ view: 'days' \| 'months' \| 'quarters' \| 'years', source: 'cellClick' \| 'navigation' }` |
| `endDateChange.coreui.calendar` | Fired when the end is picked, picked again or cleared. `date` is formatted per `selectionType`, `dateObject` is the `Date`. | `{ date: Date \| string \| null, dateObject: Date \| null }` |
| `selectEndChange.coreui.calendar` | Fired when the selection mode changes. | `{ value: boolean }` |
| `startDateChange.coreui.calendar` | Fired when the start is picked, picked again or cleared. `date` is formatted per `selectionType`, `dateObject` is the `Date`. | `{ date: Date \| string \| null, dateObject: Date \| null }` |

```js
const myCalendar = document.getElementById('myCalendar')
myCalendar.addEventListener('endDateChange.coreui.calendar', date => {
  // do something...
})
```

## Customizing

Each panel is a `.calendar` element carrying its position in `data-coreui-calendar-index`, counted from `0`, and the content of every cell names the view it belongs to: `.calendar-cell-inner.day`, `.month`, `.quarter` or `.year`. The navigation buttons carry the class of their action: `.btn-double-prev`, `.btn-prev`, `.btn-month`, `.btn-year`, `.btn-next` and `.btn-double-next`. The vanilla, React and Vue calendars carry the same hooks, so a stylesheet written against one fits the others.

### CSS variables

Calendar use local CSS variables on `.calendar` for enhanced real-time customization.

```scss
$calendar-tokens: defaults(
  (
    --cui-calendar-table-margin: .5rem,
    --cui-calendar-table-cell-size: 2.75rem,
    --cui-calendar-nav-padding-y: .5rem,
    --cui-calendar-nav-padding-x: .5rem,
    --cui-calendar-nav-border-color: var(--cui-border-color),
    --cui-calendar-nav-border: var(--cui-border-width) solid var(--cui-calendar-nav-border-color),
    --cui-calendar-nav-btn-padding-x: .5rem,
    --cui-calendar-nav-btn-padding-y: .25rem,
    --cui-calendar-nav-btn-font-size: var(--cui-font-size-sm),
    --cui-calendar-nav-btn-bg: transparent,
    --cui-calendar-nav-btn-border-width: 1px,
    --cui-calendar-nav-btn-border-color: transparent,
    --cui-calendar-nav-btn-border-radius: var(--cui-radius-4),
    --cui-calendar-nav-btn-hover-bg: transparent,
    --cui-calendar-nav-btn-hover-border-color: transparent,
    --cui-calendar-nav-btn-focus-border-color: transparent,
    --cui-calendar-nav-date-font-weight: 600,
    --cui-calendar-nav-date-color: var(--cui-fg-body),
    --cui-calendar-nav-date-hover-color: var(--cui-primary-base),
    --cui-calendar-nav-icon-width: 1rem,
    --cui-calendar-nav-icon-height: 1rem,
    --cui-calendar-nav-icon-color: var(--cui-fg-3),
    --cui-calendar-nav-icon-hover-color: var(--cui-fg-body),
    --cui-calendar-cell-header-inner-font-weight: 600,
    --cui-calendar-cell-header-inner-color: var(--cui-fg-3),
    --cui-calendar-cell-week-number-font-weight: 600,
    --cui-calendar-cell-week-number-color: var(--cui-fg-2),
    --cui-calendar-cell-border-radius: var(--cui-radius-4),
    --cui-calendar-cell-hover-color: var(--cui-fg-body),
    --cui-calendar-cell-hover-bg: var(--cui-bg-2),
    --cui-calendar-cell-disabled-color: var(--cui-fg-4),
    --cui-calendar-cell-selected-color: var(--cui-primary-contrast),
    --cui-calendar-cell-selected-bg: var(--cui-primary-base),
    --cui-calendar-cell-selected-hover-color: var(--cui-calendar-cell-selected-color),
    --cui-calendar-cell-selected-hover-bg: oklch(from var(--cui-calendar-cell-selected-bg) calc(l * var(--cui-theme-hover-lightness)) calc(c * var(--cui-theme-hover-chroma)) h),
    --cui-calendar-cell-selected-adjacent-color: var(--cui-primary-fg-emphasis),
    --cui-calendar-cell-selected-adjacent-bg: var(--cui-primary-bg-subtle),
    --cui-calendar-cell-selected-adjacent-hover-color: var(--cui-calendar-cell-selected-adjacent-color),
    --cui-calendar-cell-selected-adjacent-hover-bg: var(--cui-primary-bg-muted),
    --cui-calendar-cell-range-bg: var(--cui-primary-bg-subtle),
    --cui-calendar-cell-range-hover-border-color: var(--cui-primary-base),
    --cui-calendar-cell-today-color: var(--cui-danger-base),
  ),
  $calendar-tokens
);
```
