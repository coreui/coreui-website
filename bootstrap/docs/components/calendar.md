# Bootstrap 5 Calendar

> The Bootstrap Calendar Component is a versatile, customizable tool for creating responsive calendars in Bootstrap, supporting day, month, and year selection, and global locales.

## Example

Explore the Bootstrap 5 Calendar component's basic usage through sample code snippets demonstrating its core functionality.

### Days

Select specific days using the Bootstrap Calendar component. The example below shows basic usage.

```html
<div class="d-flex justify-content-center">
  <div
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-start-date="2024/02/13"
    data-coreui-toggle="calendar"
  ></div>
</div>
```

### Weeks

Set the `data-coreui-selection-type` to `week` to enable selection of entire week. You can also use `data-coreui-show-week-number="true"` to show week numbers.

```html
<div class="d-flex justify-content-center">
  <div
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-selection-type="week"
    data-coreui-show-week-number="true"
    data-coreui-start-date="2024W15"
    data-coreui-toggle="calendar"
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
    data-coreui-toggle="calendar"
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
    data-coreui-toggle="calendar"
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
    data-coreui-toggle="calendar"
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
    data-coreui-toggle="calendar"
  ></div>
</div>
```

## Range selection

Enable range selection by adding `data-coreui-range="true"` to allow users to pick a start and end date. This example demonstrates how to configure the Bootstrap 5 Calendar component to handle date ranges.

```html
<div class="d-flex justify-content-center">
  <div 
    class="border rounded"
    data-coreui-locale="en-US"
    data-coreui-calendars="2"
    data-coreui-range="true"
    data-coreui-start-date="2022/08/23"
    data-coreui-end-date="2022/09/08"
    data-coreui-toggle="calendar"
  ></div>
</div>
```

## Disabled dates

The Bootstrap Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the `disabledDates` option. It accepts:

- A single `Date` or an array of `Date` objects.
- A function or an array of functions that take a `Date` object as an argument and return a boolean indicating whether the date should be disabled.
- A mixed array of `Date` objects and functions.

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

## Non-english locale

The CoreUI Bootstrap Calendar allows users to display dates in non-English locales, making it suitable for international applications.

### Auto

By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-toggle="calendar"></div>
</div>
```

### Chinese

Here is an example of the Bootstrap Calendar component with Chinese locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="zh-CN" data-coreui-toggle="calendar"></div>
</div>
```

### Japanese

Below is an example of the Calendar component with Japanese locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="ja" data-coreui-toggle="calendar"></div>
</div>
```

### Korean

Here is an example of the Calendar component with Korean locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="ko" data-coreui-toggle="calendar"></div>
</div>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

Example of the Calendar component with RTL support, using the Hebrew locale.

```html
<div class="d-flex justify-content-center" dir="rtl">
  <div class="border rounded" data-coreui-locale="he-IL" data-coreui-toggle="calendar"></div>
</div>
```

### Persian

Example of the Bootstrap Calendar component with Persian locale settings.

```html
<div class="d-flex justify-content-center">
  <div class="border rounded" data-coreui-locale="fa-IR" data-coreui-toggle="calendar"></div>
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
   - `isSelected` - Whether the cell is selected
   - For `renderDayCell` only:
     - `isInCurrentMonth` - Whether the day belongs to the current month
     - `isToday` - Whether the day is today

The render functions should return an HTML string that will be displayed inside the cell. The returned HTML is automatically sanitized to prevent XSS attacks.

### Format options

In addition to custom rendering, you can control the display format of calendar elements using format options:

- `dayFormat` - Controls how day numbers are displayed (`'numeric'` or `'2-digit'`)
- `monthFormat` - Controls how month names are displayed (`'long'`, `'narrow'`, `'short'`, `'numeric'`, or `'2-digit'`)
- `yearFormat` - Controls how year numbers are displayed (`'numeric'` or `'2-digit'`)
- `weekdayFormat` - Controls how weekday names are displayed (number for character length, or `'long'`, `'narrow'`, `'short'`)

These format options use the JavaScript `Intl.DateTimeFormat` API and respect the `locale` setting.

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
        <div>${date.toLocaleDateString('en-US', { day: '2-digit' })}</div>
        <div class="${meta.isSelected ? 'text-reset' : `text-body-tertiary${meta.isInCurrentMonth ? '' : ' opacity-75'}`}" style="font-size: 0.75rem;">${price ? `$${price}` : '-'}</div>
      </div>`
    },
    renderMonthCell(date, meta) {
      const priceRange = getMonthPriceRange(date.getFullYear(), date.getMonth())

      return `<div class="py-1">
        <div>${date.toLocaleDateString('en-US', { month: 'short' })}</div>
        <div class="${meta.isSelected ? 'text-reset' : 'text-body-tertiary'}" style="font-size: 0.75rem;">${priceRange ? `$${priceRange.min}-$${priceRange.max}` : '-'}</div>
      </div>`
    },
    renderYearCell(date, meta) {
      const priceRange = getYearPriceRange(date.getFullYear())

      return `<div class="py-1">
        <div>${date.getFullYear()}</div>
        <div class="${meta.isSelected ? 'text-reset' : 'text-body-tertiary'}" style="font-size: 0.75rem;">${priceRange ? `$${priceRange.min}-$${priceRange.max}` : '-'}</div>
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

## Usage

### Via data attributes

Add `data-coreui-toggle="calendar"` to a `div` element.

```html
<div data-coreui-toggle="calendar"></div>
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
| `ariaNavPrevMonthLabel` | string | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. |
| `ariaNavPrevYearLabel` | string | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. |
| `calendarDate` | date, number, string, null | `null` | Default date of the component. |
| `calendars` | number | `2` | The number of calendars that render on desktop devices. |
| `dayFormat` | `'numeric'`, `'2-digit'` | `'numeric'` | Sets the format for days. Accepts a built-in format (`'numeric'` or `'2-digit'`) |
| `disabledDates` | array, function, null | `null` | Specify the list of dates that cannot be selected. |
| `endDate` | date, number, string, null | `null` | Initial selected to date (range). |
| `firstDayOfWeek` | number | `1` | <p>Sets the day of start week.</p>  <ul><li>`0` - Sunday</li><li>`1` - Monday</li><li>`2` - Tuesday</li><li>`3` - Wednesday</li><li>`4` - Thursday</li><li>`5` - Friday</li><li>`6` - Saturday</li></ul> |
| `locale` | string | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `maxDate` | date, number, string, null | `null` | Max selectable date. |
| `minDate` | date, number, string, null | `null` | Min selectable date. |
| `monthFormat` | `'long'`, `'narrow'`, `'short'`, `'numeric'`, `'2-digit'` | `'short'` | Sets the format for month names. Accepts built-in formats (`'long'`, `'narrow'`, `'short'`, `'numeric'`, `'2-digit'`). |
| `range` | boolean | `false` | Allow range selection |
| `renderDayCell` | function, null | `null` | Custom function to render day cells. Receives `date` and `meta` object (with `isDisabled`, `isInCurrentMonth`, `isInRange`, `isSelected`, `isToday`) as parameters and should return HTML string. |
| `renderMonthCell` | function, null | `null` | Custom function to render month cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`) as parameters and should return HTML string. |
| `renderQuarterCell` | function, null | `null` | Custom function to render quarter cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`) as parameters and should return HTML string. |
| `renderYearCell` | function, null | `null` | Custom function to render year cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`) as parameters and should return HTML string. |
| `sanitize` | boolean | `true` | Enable or disable the sanitization. If activated `renderDayCell`, `renderMonthCell`, `renderQuarterCell`, and `renderYearCell` options will be sanitized. |
| `sanitizeFn` | null, function | `null` | Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `selectAdjacementDays` | boolean | `false` | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacementDays` option is set to true. |
| `selectionType` | `'day'`, `'week'`, `'month'`, `'quarter'`, `'year'` | `day` | Specify the type of date selection as day, week, month, quarter, or year. |
| `showAdjacementDays` | boolean | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | boolean | `false` | Set whether to display week numbers in the calendar. |
| `startDate` | date, number, string, null | `null` | Initial selected date. |
| `weekdayFormat` | number, `'long'`, `'narrow'`, `'short'` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | string | `null` | Label displayed over week numbers in the calendar. |
| `yearFormat` | `'numeric'`, `'2-digit'` | `'numeric'` | Sets the format for years. Accepts built-in formats (`'numeric'` or `'2-digit'`) |

### Methods

| Method | Description |
| --- | --- |
| `update` | Updates the configuration of the calendar. |
| `dispose` | Destroys a component. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the calendar instance associated to a DOM element, you can use it like this: `coreui.Calendar.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a calendar instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.Calendar.getOrCreateInstance(element)` |

### Events

| Method | Description | Event detail |
| --- | --- | --- |
| `calendarDateChange.coreui.calendar` | Fired when the calendar date changes. | `{ date: Date, view: 'days' \| 'months' \| 'quarters' \| 'years' }` |
| `calendarViewChange.coreui.calendar` | Fired when the calendar view changes. | `{ view: 'days' \| 'months' \| 'quarters' \| 'years', source: 'cellClick' \| 'navigation' }` |
| `calendarMouseleave.coreui.calendar` | Fired when the cursor leaves the calendar. | — |
| `cellHover.coreui.calendar` | Fired when the user hovers over a calendar cell. | `{ date: Date \| null }` |
| `endDateChange.coreui.calendar` | Fired when the end date changes. | `{ date: Date \| null }` |
| `selectEndChange.coreui.calendar` | Fired when the selection mode changes. | `{ value: boolean }` |
| `startDateChange.coreui.calendar` | Fired when the start date changes. | `{ date: Date \| null }` |

```js
const myCalendar = document.getElementById('myCalendar')
myCalendar.addEventListener('endDateChange.coreui.calendar', date => {
  // do something...
})
```

## Customizing

### CSS variables

Calendar use local CSS variables on `.calendar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-calendar-table-margin: #{$calendar-table-margin};
--cui-calendar-table-cell-size: #{$calendar-table-cell-size};
--cui-calendar-nav-padding: #{$calendar-nav-padding};
--cui-calendar-nav-border-color: #{$calendar-nav-border-color};
--cui-calendar-nav-border: #{$calendar-nav-border-width} solid var(--cui-calendar-nav-border-color);
--cui-calendar-nav-btn-padding-x: #{$calendar-nav-btn-padding-x};
--cui-calendar-nav-btn-padding-y: #{$calendar-nav-btn-padding-y};
@include rfs($calendar-nav-btn-font-size, --cui-calendar-nav-btn-font-size);
--cui-calendar-nav-btn-bg: #{$calendar-nav-btn-bg};
--cui-calendar-nav-btn-border-width: #{$calendar-nav-btn-border-width};
--cui-calendar-nav-btn-border-color: #{$calendar-nav-btn-border-color};
--cui-calendar-nav-btn-border-radius: #{$calendar-nav-btn-border-radius};
--cui-calendar-nav-btn-hover-bg: #{$calendar-nav-btn-hover-bg};
--cui-calendar-nav-btn-hover-border-color: #{$calendar-nav-btn-hover-border-color};
--cui-calendar-nav-btn-focus-border-color: #{$calendar-nav-btn-focus-border-color};
--cui-calendar-nav-btn-focus-box-shadow: #{$calendar-nav-btn-focus-box-shadow};
--cui-calendar-nav-date-font-weight: #{$calendar-nav-date-font-weight};
--cui-calendar-nav-date-color: #{$calendar-nav-date-color};
--cui-calendar-nav-date-hover-color: #{$calendar-nav-date-hover-color};
--cui-calendar-nav-icon-width: #{$calendar-nav-icon-width};
--cui-calendar-nav-icon-height: #{$calendar-nav-icon-height};
--cui-calendar-nav-icon-double-next: #{escape-svg($calendar-nav-icon-double-next)};
--cui-calendar-nav-icon-double-prev: #{escape-svg($calendar-nav-icon-double-prev)};
--cui-calendar-nav-icon-next: #{escape-svg($calendar-nav-icon-next)};
--cui-calendar-nav-icon-prev: #{escape-svg($calendar-nav-icon-prev)};
--cui-calendar-nav-icon-color: #{$calendar-nav-icon-color};
--cui-calendar-nav-icon-hover-color: #{$calendar-nav-icon-hover-color};
--cui-calendar-cell-header-inner-font-weight: #{$calendar-cell-header-inner-font-weight};
--cui-calendar-cell-header-inner-color: #{$calendar-cell-header-inner-color};
--cui-calendar-cell-week-number-font-weight: #{$calendar-cell-week-number-font-weight};
--cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
--cui-calendar-cell-hover-color: #{$calendar-cell-hover-color};
--cui-calendar-cell-hover-bg: #{$calendar-cell-hover-bg};
--cui-calendar-cell-focus-box-shadow: #{$calendar-cell-focus-box-shadow};
--cui-calendar-cell-disabled-color: #{$calendar-cell-disabled-color};
--cui-calendar-cell-selected-color: #{$calendar-cell-selected-color};
--cui-calendar-cell-selected-bg: #{$calendar-cell-selected-bg};
--cui-calendar-cell-range-bg: #{$calendar-cell-range-bg};
--cui-calendar-cell-range-hover-bg: #{$calendar-cell-range-hover-bg};
--cui-calendar-cell-range-hover-border-color: #{$calendar-cell-range-hover-border-color};
--cui-calendar-cell-today-color: #{$calendar-cell-today-color};
--cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
```

### SASS variables

```scss
$calendar-table-margin:                      .5rem !default;
$calendar-table-cell-size:                   2.75rem !default;

$calendar-nav-padding:                       .5rem !default;
$calendar-nav-border-width:                  1px !default;
$calendar-nav-border-color:                  var(--cui-border-color) !default;

$calendar-nav-btn-padding-y:                 .25rem !default;
$calendar-nav-btn-padding-x:                 .5rem !default;
$calendar-nav-btn-font-size:                 $font-size-sm !default;
$calendar-nav-btn-bg:                        transparent !default;
$calendar-nav-btn-border-width:              1px !default;
$calendar-nav-btn-border-color:              transparent !default;
$calendar-nav-btn-border-radius:             $border-radius !default;

$calendar-nav-btn-hover-bg:                  transparent !default;
$calendar-nav-btn-hover-border-color:        transparent !default;

$calendar-nav-btn-focus-border-color:        transparent !default;
$calendar-nav-btn-focus-box-shadow:          $focus-ring-box-shadow !default;

$calendar-nav-date-font-weight:              600 !default;
$calendar-nav-date-color:                    var(--cui-body-color) !default;
$calendar-nav-date-hover-color:              var(--cui-primary) !default;

$calendar-nav-icon-width:                    1rem !default;
$calendar-nav-icon-height:                   1rem !default;
$calendar-nav-icon-color:                    var(--cui-tertiary-color) !default;
$calendar-nav-icon-hover-color:              var(--cui-body-color) !default;

$calendar-nav-icon-double-next:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'></polygon><polygon fill='#000' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'></polygon></svg>") !default;
$calendar-nav-icon-double-prev:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'></polygon><polygon fill='#000' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'></polygon></svg>") !default;
$calendar-nav-icon-next:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'></polygon></svg>") !default;
$calendar-nav-icon-prev:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'></polygon></svg>") !default;

$calendar-cell-header-inner-font-weight:     600 !default;
$calendar-cell-header-inner-color:           var(--cui-secondary-color) !default;

$calendar-cell-hover-color:                  var(--cui-body-color) !default;
$calendar-cell-hover-bg:                     var(--cui-tertiary-bg) !default;
$calendar-cell-disabled-color:               var(--cui-tertiary-color) !default;

$calendar-cell-focus-box-shadow:             $focus-ring-box-shadow !default;

$calendar-cell-selected-color:               $white !default;
$calendar-cell-selected-bg:                  var(--cui-primary) !default;

$calendar-cell-range-bg:                     rgba(var(--cui-primary-rgb), .125) !default;
$calendar-cell-range-hover-bg:               rgba(var(--cui-primary-rgb), .25) !default;
$calendar-cell-range-hover-border-color:     var(--cui-primary) !default;

$calendar-cell-today-color:                  var(--cui-danger) !default;

$calendar-cell-week-number-font-weight:      600 !default;
$calendar-cell-week-number-color:            var(--cui-secondary-color) !default;
```
