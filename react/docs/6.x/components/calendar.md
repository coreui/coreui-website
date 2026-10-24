# React Calendar Component

> The React Calendar Component is a versatile, customizable tool for creating responsive calendars in React, supporting day, month, and year selection, and global locales.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

Explore the React Calendar component's basic usage through sample code snippets demonstrating its core functionality.

A calendar renders unadorned — it has no background, border, or padding of its own, so it takes the surface of whatever contains it. The examples below add `border` and `rounded` for that reason; a [card](https://coreui.io/react/docs/components/card/) works just as well.

### Days

Select specific days using the React Calendar component. The example below shows basic usage.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarDaysExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" locale="en-US" startDate="2024/02/13" />
    </div>
  )
}
```

### Weeks

Set the `selectionType` to `week` to enable selection of entire week. You can also add `showWeekNumber` to show week numbers.

Weeks are ISO 8601 weeks, which run from Monday to Sunday, and week selection treats them the way month selection treats months. When `firstDayOfWeek` starts the rows on another day, each row spans two weeks and stands for the one that holds most of its days: with Sunday first, the row from August 30 to September 5, 2026 is week 36, picks `2026W36` and gives its Monday, August 31. A week given as `startDate` or `endDate`, as a string or as any date inside it, selects that row, and the calendar opens on a page that shows it. `minDate` and `maxDate` count by whole weeks, so their weeks stay selectable, and `disabledDates` disables a week only when it disables every day of it.

CalendarWeeksExample

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarWeeksExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        className="border rounded"
        locale="en-US"
        selectionType="week"
        showWeekNumber
        startDate="2024W15"
        onStartDateChange={(date) => console.log(date)}
      />
    </div>
  )
}
```

### Months

Set the `selectionType` property to `month` to enable selection of entire months.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarMonthsExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        className="border rounded"
        locale="en-US"
        selectionType="month"
        startDate="2024-2"
      />
    </div>
  )
}
```

### Quarters

Set the `selectionType` property to `quarter` to enable quarters range selection.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarQuartersExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        className="border rounded"
        locale="en-US"
        selectionType="quarter"
        startDate="2024Q1"
        onStartDateChange={(date) => console.log(date)}
      />
    </div>
  )
}
```

### Years

Set the `selectionType` property to `year` to enable years range selection.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarYearsExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" locale="en-US" selectionType="year" startDate="2024" />
    </div>
  )
}
```

## Multiple calendar panels

Display multiple calendar panels side by side by setting the `calendars` property. This can be useful for selecting ranges or comparing dates across different months.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarMultipleCalendarPanelsExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar calendars={2} className="border rounded" locale="en-US" />
    </div>
  )
}
```

## Range selection

Enable range selection to allow users to pick a start and end date. This example shows how to configure the React Calendar component to handle date ranges.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarRangeSelectionExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        calendars={2}
        className="border rounded"
        locale="en-US"
        range
        startDate="2022/08/23"
        endDate="2022/09/08"
      />
    </div>
  )
}
```

## Theme variants

Color the selection with a [`.theme-*` class](https://coreui.io/react/docs/customize/components/#theme-variants) on the calendar: the selected day, the range tint, the range-hover outline and the date hover in the header all follow it.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarThemeVariantsExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        className="border rounded theme-success"
        locale="en-US"
        range
        startDate="2024/02/13"
        endDate="2024/02/20"
      />
    </div>
  )
}
```

## Disabled dates

The React Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the `disabledDates` prop. It accepts:

- A single `Date` or an array of `Date` objects.
- A function or an array of functions that take a `Date` object as an argument and return a boolean indicating whether the date should be disabled.
- A mixed array of `Date` objects and functions.

In month, quarter and year selection a period can be picked unless it lies wholly before `minDate` or after `maxDate`, or `disabledDates` covers every day of it that the limits leave, and a range of periods is cleared only when it spans a period that `disabledDates` covers wholly.

Without a `calendarDate`, `startDate` or `endDate`, the calendar opens on today, or on the `minDate` or `maxDate` that today falls outside of, and that date takes the focus even when it cannot be picked.

To disable certain dates, you can provide them in an array. For date ranges, use nested arrays, where each inner array indicates a start date and an end date for that range:

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarDisabledDatesExample = () => {
  const calendarDate = new Date(2022, 2, 1)
  const disabledDates = [
    [new Date(2022, 2, 4), new Date(2022, 2, 7)],
    new Date(2022, 1, 1),
    new Date(2022, 2, 1),
    new Date(2022, 2, 16),
    new Date(2022, 3, 16),
    [new Date(2022, 4, 2), new Date(2022, 4, 8)],
    [new Date(2022, 5, 1), new Date(2022, 6, 31)],
  ]
  const maxDate = new Date(2022, 12, 0)
  const minDate = new Date(2022, 1, 1)

  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        calendarDate={calendarDate}
        calendars={2}
        className="border rounded"
        disabledDates={disabledDates}
        locale="en-US"
        maxDate={maxDate}
        minDate={minDate}
        range
      />
    </div>
  )
}
```

### Disabling weekends

You can disable weekends by passing a function to the `disabledDates` prop. Here's how to do it:

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

const disableWeekends = (date: Date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}

export const CalendarDisablingWeekendsExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        calendars={2}
        className="border rounded"
        disabledDates={disableWeekends}
        locale="en-US"
        range
      />
    </div>
  )
}
```

In the example above:

- `disableWeekends` is a function that checks if a date falls on a Saturday (`6`) or a Sunday (`0`).
- The `disabledDates` prop is set to the `disableWeekends` function, which ensures that all weekends are disabled in the calendar.

This prop takes an array and applies custom logic to determine which dates should be disabled.

### Combining functions and specific dates

You can also combine specific dates and functions in the `disabledDates` array. For instance:

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

const disableWeekends = (date: Date) => {
  const day = date.getDay()
  return day === 0 || day === 6
}

export const CalendarCombiningFunctionsAndSpecificDatesExample = () => {
  const specificDates = [new Date(2024, 10, 25), new Date(2024, 11, 4), new Date(2024, 11, 12)] // Specific disabled dates

  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        calendarDate={new Date(2024, 10, 1)}
        calendars={2}
        className="border rounded"
        disabledDates={[disableWeekends, ...specificDates]}
        locale="en-US"
        range
      />
    </div>
  )
}
```

In this example:

- `disableWeekends` disables weekends as before.
- `specificDates` is an array of specific dates to disable.
- The `disabledDates` prop combines both, allowing you to disable weekends and specific dates simultaneously.

## Locale

The CoreUI React Calendar allows users to display dates in non-English locales, making it suitable for international applications.

The navigation writes the month and the year in the order the locale does: the year first where the locale writes it first, as in Japanese, Chinese, Korean, Hungarian or Lithuanian, the month first as in English or Polish.

### Auto

By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and React reports a hydration mismatch when the two differ.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarAutoLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" />
    </div>
  )
}
```

### Chinese

Here is an example of the React Calendar component with Chinese locale settings.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarChineseLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" locale="zh-CN" />
    </div>
  )
}
```

### Japanese

Below is an example of the Calendar component with Japanese locale settings.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarJapaneseLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" locale="ja" />
    </div>
  )
}
```

### Korean

Here is an example of the Calendar component with Korean locale settings.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarKoreanLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center">
      <CCalendar className="border rounded" locale="ko" />
    </div>
  )
}
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

Example of the Calendar component with RTL support, using the Hebrew locale.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarHebrewLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center" dir="rtl">
      <CCalendar className="border rounded" locale="he-IL" />
    </div>
  )
}
```

### Persian

Example of the React Calendar component with Persian locale settings. The calendar is Gregorian, so with a locale whose own calendar has different months, like Persian, it shows the Gregorian months, days and years in that locale's language and digits.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarPersianLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center" dir="rtl">
      <CCalendar className="border rounded" locale="fa-IR" />
    </div>
  )
}
```

## Custom cell rendering

The React Calendar component provides powerful customization options through render props that allow you to completely control how calendar cells are displayed. These render functions are particularly useful when you need to add custom content, styling, or data to calendar cells.

### Render props

The component supports four render props, one for each view type:

- `renderDayCell={(date, meta) => ReactNode}` - Customize day cells in the days view
- `renderMonthCell={(date, meta) => ReactNode}` - Customize month cells in the months view
- `renderQuarterCell={(date, meta) => ReactNode}` - Customize quarter cells in the quarters view
- `renderYearCell={(date, meta) => ReactNode}` - Customize year cells in the years view

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

The render functions should return a React node (JSX) that will be displayed inside the cell.

A cell drawn by a render function gets no `aria-label` from the calendar, so its content is what a screen reader reads. Put `meta.label` in it, for example in a `visually-hidden` span next to the short visible text marked `aria-hidden="true"`, as the pricing example below does.

### Format options

In addition to custom rendering, you can control the display format of calendar elements using format props:

- `dayFormat` - Controls how day numbers are displayed (`'numeric'` or `'2-digit'`)
- `monthFormat` - Controls how month names are displayed (`'long'`, `'narrow'`, `'short'`, `'numeric'`, or `'2-digit'`)
- `yearFormat` - Controls how the year cells of the years view are displayed (`'numeric'` or `'2-digit'`)
- `weekdayFormat` - Controls how weekday names are displayed (number for character length, or `'long'`, `'narrow'`, `'short'`)

These format options use the JavaScript `Intl.DateTimeFormat` API and respect the `locale` prop. They apply to the cells of the grid, not to the navigation above it, which writes months and years in full.

### Pricing calendar with custom cells

This example demonstrates advanced usage of custom cell rendering to display pricing data across different calendar views. It uses `renderDayCell` to show daily prices, `renderMonthCell` to display monthly price ranges, and `renderYearCell` to show annual price ranges. The data is fetched from an external API and cached for performance.

```html
import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { CCalendar } from '@coreui/react-pro'

type View = 'days' | 'months' | 'years'

interface PriceRange {
  min: number
  max: number
}

const toISODate = (date: Date) => date.toISOString().slice(0, 10)

const monthKey = (year: number, monthIndex: number) =>
  `${year}-${String(monthIndex + 1).padStart(2, '0')}-01`

const yearKey = (year: number) => `${year}-01-01`

const getDateRangeForView = (date: Date, view: View) => {
  const y = date.getFullYear()
  const m = date.getMonth()

  switch (view) {
    case 'days': {
      return { startDate: new Date(y, m, 1), endDate: new Date(y, m + 2, 0) }
    }
    case 'months': {
      return { startDate: new Date(y, 0, 1), endDate: new Date(y, 11, 31) }
    }
    case 'years': {
      const startYear = Math.floor(y / 12) * 12
      return { startDate: new Date(startYear, 0, 1), endDate: new Date(startYear + 11, 11, 31) }
    }
  }
}

const Cell = ({
  date,
  label,
  price,
  isSelected,
  isInCurrentMonth,
  view,
}: {
  date: ReactNode
  label: string
  price: ReactNode
  isSelected: boolean
  isInCurrentMonth?: boolean
  view?: View
}) => (
  <div className="py-1">
    <div aria-hidden="true">{date}</div>
    <span className="visually-hidden">{label}</span>
    <div
      className={
        isSelected ? 'fg-reset' : view === 'days' && !isInCurrentMonth ? 'fg-3 opacity-75' : 'fg-3'
      }
      style={{ fontSize: '0.75rem' }}
    >
      {price}
    </div>
  </div>
)

export const CalendarPricingWithCustomCellsExample = () => {
  const [calendarDate, setCalendarDate] = useState(() => new Date(2025, 0, 1))

  const [dayPrices, setDayPrices] = useState<Record<string, number>>({})
  const [monthRanges, setMonthRanges] = useState<Record<string, PriceRange>>({})
  const [yearRanges, setYearRanges] = useState<Record<string, PriceRange>>({})

  // request de-dupe
  const fetchedKeysRef = useRef(new Set<string>())
  const inFlightRef = useRef(new Set<string>())

  const fetchPricingData = useCallback(
    async (startDate: Date, endDate: Date, view: View, limit = 400) => {
      const start = toISODate(startDate)
      const end = toISODate(endDate)
      const requestKey = `${view}:${start}:${end}:${limit}`

      if (fetchedKeysRef.current.has(requestKey) || inFlightRef.current.has(requestKey)) {
        return
      }

      inFlightRef.current.add(requestKey)

      try {
        const res = await fetch(
          `https://apitest.coreui.io/demos/daily-rates.php?start_date=${start}&end_date=${end}&view=${view}&limit=${limit}`
        )
        const data = await res.json()

        fetchedKeysRef.current.add(requestKey)

        switch (view) {
          case 'days': {
            setDayPrices((prev) => ({ ...prev, ...data }))
            break
          }

          case 'months': {
            setMonthRanges((prev) => ({ ...prev, ...data }))
            break
          }

          default: {
            setYearRanges((prev) => ({ ...prev, ...data }))
            break
          }
        }
      } catch (error) {
        console.error('Error fetching pricing data:', error)
      } finally {
        inFlightRef.current.delete(requestKey)
      }
    },
    []
  )

  const requestFor = useCallback(
    (date: Date, view: View) => {
      const { startDate, endDate } = getDateRangeForView(date, view)
      fetchPricingData(startDate, endDate, view)
    },
    [fetchPricingData]
  )

  useEffect(() => {
    requestFor(calendarDate, 'days')
  }, [calendarDate, requestFor])

  const onCalendarDateChange = useCallback(
    (date: Date, view: View) => {
      setCalendarDate(date)
      requestFor(date, view ?? 'days')
    },
    [requestFor]
  )

  const onViewChange = useCallback(
    (view: View) => {
      requestFor(calendarDate, view)
    },
    [calendarDate, requestFor]
  )

  return (
    <div className="d-flex justify-content-center">
      <CCalendar
        calendarDate={calendarDate}
        calendars={2}
        className="border rounded"
        locale="en-US"
        minDate={new Date(2022, 0, 1)}
        maxDate={new Date(2025, 11, 31)}
        range={true}
        renderDayCell={(date: Date, meta: any) => {
          const price = dayPrices[toISODate(date)]
          return (
            <Cell
              date={date.toLocaleDateString('en-US', { day: 'numeric' })}
              label={meta.label}
              price={price ? `$${price}` : '-'}
              isSelected={!!meta?.isSelected}
              isInCurrentMonth={!!meta?.isInCurrentMonth}
              view="days"
            />
          )
        }}
        renderMonthCell={(date: Date, meta: any) => {
          const range = monthRanges[monthKey(date.getFullYear(), date.getMonth())]
          return (
            <Cell
              date={date.toLocaleDateString('en-US', { month: 'short' })}
              label={meta.label}
              price={range ? `$${range.min}-$${range.max}` : '-'}
              isSelected={!!meta?.isSelected}
            />
          )
        }}
        renderYearCell={(date: Date, meta: any) => {
          const range = yearRanges[yearKey(date.getFullYear())]
          return (
            <Cell
              date={date.getFullYear()}
              label={meta.label}
              price={range ? `$${range.min}-$${range.max}` : '-'}
              isSelected={!!meta?.isSelected}
            />
          )
        }}
        onCalendarDateChange={onCalendarDateChange}
        onViewChange={onViewChange}
      />
    </div>
  )
}
```

## Accessibility

Keyboard navigation in the grid follows the [date picker dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/). The table is a `grid` of `gridcell` cells, which is what lets a cell report itself as selected: selected cells carry `aria-selected` (in week selection, the row), today carries `aria-current="date"`, a cell that cannot be picked carries `aria-disabled="true"` (a day outside `minDate` / `maxDate`, before year 1 or in `disabledDates`, a day among an adjacent month's days without `selectAdjacentDays`, and in week selection the row rather than its days), every day cell announces its full date with the weekday (`Wednesday, August 12, 2026`), and month, quarter and year cells are named by their text. With `range`, the grid of the view that picks the range is `aria-multiselectable`, and every day, week row or period between the two ends that can be picked carries `aria-selected` as well, so the ones in between are announced as selected; the months and years views of a day range only navigate, so there only the ends carry it. A cell drawn by a render function is named by its content; see [Render props](#render-props). In week selection the row that takes focus is named by the days it spans (`August 10 – 16, 2026`), after its week number when week numbers are shown (`Week 33, August 10 – 16, 2026`). Each grid is a composite with a single tab stop: <kbd>Tab</kbd> enters it once and leaves it, the keys below move inside it, and `tabindex="0"` sits on the selected date (in a range, an end the grid shows), else on the cell closest to the date the grid opens on, else wherever focus went last. Every cell that reaches into the days from the day of `minDate` to the day of `maxDate` can take the focus, times of day aside, also one that cannot be picked: the keys stop on it instead of skipping it, a screen reader announces it as unavailable, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there. Cells wholly outside those days, and in day selection the days of an adjacent month without `selectAdjacentDays`, carry no `tabindex`; a month, quarter or year counts as inside while any of its days is, and a week row while any day of the week it stands for is. When no panel has a cell that can take the focus, as when the calendar is given a page that lies wholly outside the limits, every grid itself takes the tab stop, also in markup rendered on the server, and the arrows move to the limit they point toward; a panel wholly outside the limits beside one that reaches into them has no tab stop of its own. A grid in which nothing can be picked, such as a page wholly outside the limits or one that `disabledDates` covers, points `aria-describedby` at a hidden element holding `ariaNothingToPickLabel` (`'Nothing on this page can be picked'`). The navigation buttons stay enabled at the limits: a page outside them can be shown, and it says so. Selectable cells and week rows are marked with `data-coreui-selectable`, which is the hook to use in your own CSS or scripts.

The month and year between the navigation arrows name the page the calendar shows, followed by a visually hidden `ariaNothingToPickLabel` when nothing on it can be picked. Turning a page is announced through [`announce()`](https://coreui.io/react/docs/accessibility/screen-readers/#announcing-messages) in the polite live region of the page, or of the modal dialog around the calendar, such as the panel of a date picker: one message per panel that turned, naming the page, followed by `ariaNothingToPickLabel` when nothing on that page can be picked (`September 2026, Nothing on this page can be picked`). A day or a week row that holds focus already names its month and year, so a key that moves from it to another page names no page, and announces `ariaNothingToPickLabel` alone when nothing on the new page can be picked; another panel left with nothing to pick, by a turn or by a pick, is announced with its name. A month, quarter or year names only itself, so the page is announced from it as from a button. Nothing is announced while the calendar is hidden, and a newer turn cancels the messages of the previous one. In the years view the page is the range of years it shows, the same text as the grid's label. A pick is announced the same way, because focus stays on the cell and a screen reader does not read its `aria-selected` turning on: as `ariaSelectedDateAnnouncement` with the full name of what was picked (`Selected date: Wednesday, August 12, 2026`), and with `range` as `ariaSelectedRangeAnnouncement` whenever both ends are set after a pick, or as a date when they fall on the same day. The first pick of a range announces nothing. A date picker turns both messages off for the pick that closes its panel and names its toggle with the picked date instead, because a message added while focus goes back to the toggle is dropped by VoiceOver in Safari; a newer pick cancels a message that was not read yet. Activating the month or year button while it has focus opens the months or years view and moves focus to the month or year that panel showed, also when it cannot be picked, or to the panel's tab stop when it lies outside `minDate` / `maxDate`; holding <kbd>Enter</kbd> does not go on to pick it. In the years view the year button goes back to the view that picks the date; while it has focus, focus moves to the day, week, month or quarter that holds the start of the month the panel shows there, or to the panel's tab stop when that lies outside `minDate` / `maxDate`. The button is disabled when the years view is the one that picks (`selectionType="year"`). Picking a month or year in those views, with a click or with <kbd>Enter</kbd> / <kbd>Space</kbd>, opens the next view on that period, unless nothing in it can be picked, and moves focus to the first date of that panel inside `minDate` / `maxDate`, also when that date cannot be picked; when the panel lies wholly outside the limits, focus goes to the calendar's tab stop.

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
