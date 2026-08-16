# React Calendar Component

> The React Calendar Component is a versatile, customizable tool for creating responsive calendars in React, supporting day, month, and year selection, and global locales.

## Example

Explore the React Calendar component's basic usage through sample code snippets demonstrating its core functionality.

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

## Disabled dates

The React Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the `disabledDates` prop. It accepts:

- A single `Date` or an array of `Date` objects.
- A function or an array of functions that take a `Date` object as an argument and return a boolean indicating whether the date should be disabled.
- A mixed array of `Date` objects and functions.

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

### Auto

By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

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

Example of the React Calendar component with Persian locale settings.

```html
import React from 'react'
import { CCalendar } from '@coreui/react-pro'

export const CalendarPersianLocaleExample = () => {
  return (
    <div className="d-flex justify-content-center">
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
   - `isSelected` - Whether the cell is selected
   - For `renderDayCell` only:
     - `isInCurrentMonth` - Whether the day belongs to the current month
     - `isToday` - Whether the day is today

The render functions should return a React node (JSX) that will be displayed inside the cell.

### Format options

In addition to custom rendering, you can control the display format of calendar elements using format props:

- `dayFormat` - Controls how day numbers are displayed (`'numeric'` or `'2-digit'`)
- `monthFormat` - Controls how month names are displayed (`'long'`, `'narrow'`, `'short'`, `'numeric'`, or `'2-digit'`)
- `yearFormat` - Controls how year numbers are displayed (`'numeric'` or `'2-digit'`)
- `weekdayFormat` - Controls how weekday names are displayed (number for character length, or `'long'`, `'narrow'`, `'short'`)

These format options use the JavaScript `Intl.DateTimeFormat` API and respect the `locale` prop.

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
  price,
  isSelected,
  isInCurrentMonth,
  view,
}: {
  date: ReactNode
  price: ReactNode
  isSelected: boolean
  isInCurrentMonth?: boolean
  view?: View
}) => (
  <div className="py-1">
    <div>{date}</div>
    <div
      className={
        isSelected
          ? 'text-reset'
          : view === 'days' && !isInCurrentMonth
            ? 'text-body-tertiary opacity-75'
            : 'text-body-tertiary'
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

  const onViewChanged = useCallback(
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
              date={date.toLocaleDateString('en-US', { day: '2-digit' })}
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
              price={range ? `$${range.min}-$${range.max}` : '-'}
              isSelected={!!meta?.isSelected}
            />
          )
        }}
        onCalendarDateChange={onCalendarDateChange}
        onViewChanged={onViewChanged}
      />
    </div>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCalendar /&gt;](./api/#ccalendar)
