# React Date Range Picker Component

## Example

Explore basic usage of the Date Range Picker through sample code snippets that demonstrate its core functionality.

### Days

Select date ranges by day with examples including basic usage, as well as variants featuring time pickers and footers for enhanced functionality.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDaysExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          endDate="2022/08/17"
          label="Date range"
          locale="en-US"
          startDate="2022/08/03"
        />
      </CCol>
    </CRow>
  )
}
```

#### With timepicker

Our React DateRangePicker component not only supports date selection but also includes a time picker feature for selecting a specific time of day. Enable the React TimePicker by passing a `timepicker` prop to the `` component.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDaysWithTimePickerExample = () => {
  return (
    <CRow>
      <CCol className="mb-3" sm={7}>
        <CDateRangePicker locale="en-US" timepicker />
      </CCol>
      <CCol sm={7}>
        <CDateRangePicker
          startDate="2022/08/03 02:34:17 AM"
          endDate="2022/09/17 11:29:41 PM"
          locale="en-US"
          timepicker
        />
      </CCol>
    </CRow>
  )
}
```

#### With footer

Here's an example with an additional footer. The footer is useful for displaying extra information or actions related to the selected date, such as "Today" or "Clear" buttons. The footer component is fully customizable and can be styled to match the rest of the application.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDaysWithFooterExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6}>
        <CDateRangePicker footer locale="en-US" />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker startDate="2022/08/03" endDate="2022/08/17" footer locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

### Weeks

To enable week selection, set the `selectionType` property to `week` and pass the `showWeekNumber` prop to display week numbers.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerWeeksExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          selectionType="week"
          showWeekNumber
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          startDate="2025W07"
          endDate="2025W12"
          label="Date range"
          locale="en-US"
          selectionType="week"
          showWeekNumber
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
    </CRow>
  )
}
```

### Months

Set the `selectionType` property to `month` to enable months range selection.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerMonthsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          selectionType="month"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          selectionType="month"
          startDate="2022-08"
          endDate="2023-05"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
    </CRow>
  )
}
```

### Quarters

Set the `selectionType` property to `quarter` to enable quarters range selection.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerQuartersExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          selectionType="quarter"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          startDate="2025Q3"
          endDate="2026Q2"
          label="Date range"
          locale="en-US"
          selectionType="quarter"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
    </CRow>
  )
}
```

### Years

Set the `selectionType` property to `year` to enable years range selection.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerYearsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          selectionType="year"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />{' '}
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          selectionType="year"
          startDate="2022"
          endDate="2028"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />{' '}
      </CCol>
    </CRow>
  )
}
```

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerSizingExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CCol lg={6}>
          <CDateRangePicker locale="en-US" size="lg" />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CCol lg={5}>
          <CDateRangePicker locale="en-US" />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={4}>
          <CDateRangePicker locale="en-US" size="sm" />
        </CCol>
      </CRow>
    </>
  )
}
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDisabledExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker disabled locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Readonly

Add the `inputReadOnly` boolean attribute to prevent modification of the input's value.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerReadonlyExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker inputReadOnly locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Preview date on hover

By default, the date range picker shows a live preview in the input fields when hovering over calendar dates. To disable this feature, set `previewDateOnHover={false}`.

```html
import React from 'react'
import { CCol, CFormLabel, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerPreviewDateOnHoverExample = () => {
  return (
    <CRow>
      <CCol sm={6} className="mb-3 mb-sm-0">
        <CFormLabel>With preview (default)</CFormLabel>
        <CDateRangePicker locale="en-US" />
      </CCol>
      <CCol sm={6}>
        <CFormLabel>Without preview</CFormLabel>
        <CDateRangePicker locale="en-US" previewDateOnHover={false} />
      </CCol>
    </CRow>
  )
}
```

## Disabled dates

Our React Date Range Picker component features the ability to disable specific dates, such as weekends or holidays, by using the `disabledDate` prop. This prop takes an array and uses custom logic to determine which dates should be disabled.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDisabledDatesExample = () => {
  const calendarDate = new Date(2022, 2, 1)
  const disabledDates = [
    [new Date(2022, 2, 4), new Date(2022, 2, 7)],
    new Date(2022, 2, 16),
    new Date(2022, 3, 16),
    [new Date(2022, 4, 2), new Date(2022, 4, 8)],
  ]
  const maxDate = new Date(2022, 5, 0)
  const minDate = new Date(2022, 1, 1)

  return (
    <CRow>
      <CCol lg={4}>
        <CDateRangePicker
          calendarDate={calendarDate}
          disabledDates={disabledDates}
          locale="en-US"
          maxDate={maxDate}
          minDate={minDate}
        />
      </CCol>
    </CRow>
  )
}
```

### Disabling weekends

You can disable weekends by passing a function to the `disabledDates` prop. Here's how to do it:

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

const disableWeekends = (date: Date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}

export const DateRangePickerDisablingWeekendsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker disabledDates={disableWeekends} locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Custom ranges

In order to configure custom date ranges in the Date Range component, you must use the `ranges` prop to define a set of predefined ranges. These ranges can include predefined options such as "Today", "Yesterday", "Last 7 Days", etc.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomRangesExample = () => {
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

  return (
    <CRow>
      <CCol sm={5}>
        <CDateRangePicker ranges={customRanges} />
      </CCol>
    </CRow>
  )
}
```

## Locale

CoreUI's React Date Range Picker enables the display of dates and times in non-English locales, making it essential for international users and multilingual support.

### Auto

By default, the DateRangePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can pass the desired language code as a prop to the DateRangePicker component. This feature enables the creation of more inclusive and accessible applications that cater to a diverse audience.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocaleAutoExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker />
      </CCol>
    </CRow>
  )
}
```

### Chinese

Here is an example of a simple React Date Range Picker with Chinese localization.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocaleChineseExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker locale="zh-CN" placeholder={['入住日期', '退房日期']} />
      </CCol>
    </CRow>
  )
}
```

### Japanese

Below is an example of a basic React Date Range Picker with Japanese locales.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocaleJapaneseExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker locale="ja" placeholder={['日付を選択', '終了日']} />
      </CCol>
    </CRow>
  )
}
```

### Korean

Here's a simple example of a Date Range Picker with Korean locales.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocaleKoreanExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker locale="ko" placeholder={['날짜 선택', '종료일']} />
      </CCol>
    </CRow>
  )
}
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocaleHebrewExample = () => {
  return (
    <CRow dir="rtl">
      <CCol lg={5}>
        <CDateRangePicker placeholder={['בחר תאריך', 'תאריך סיום']} locale="he-IL" />
      </CCol>
    </CRow>
  )
}
```

### Persian

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocalePersianExample = () => {
  return (
    <CRow dir="rtl">
      <CCol lg={5}>
        <CDateRangePicker locale="fa-IR" placeholder={['تاریخ شروع', 'تاریخ پایان']} />
      </CCol>
    </CRow>
  )
}
```

## Custom formats

> Heads up! As of v5.0.0, the `format` property is removed in ``. Instead, utilize the `inputDateFormat` to format dates into custom strings and `inputDateParse` to parse custom strings into Date objects.

The provided code demonstrates how to use the `inputDateFormat` and `inputDateParse` properties. In this example, the `format` and `parse` functions from `date-fns` are employed to tailor the date presentation and interpretation.

```jsx
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
```

The `inputDateFormat` property formats the date into a custom string, while the `inputDateParse` property parses a custom string into a Date object. The code showcases the date range in different formats based on locale, such as 'MMMM dd, yyyy' and 'yyyy MMMM dd', and accommodates different locales, like 'en-US' and 'es-ES'.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" lg={6}>
        <CDateRangePicker
          startDate="2022/08/03"
          endDate="2022/08/17"
          label="Date range"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'MMMM dd, yyyy', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'MMMM dd, yyyy')}
        />
      </CCol>
      <CCol lg={6}>
        <CDateRangePicker
          startDate="2022/08/03"
          endDate="2022/08/17"
          label="Rango de fechas"
          locale="es-ES"
          placeholder={['Fecha de inicio', 'Fecha de fin']}
          inputDateParse={(date: string) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })}
          inputDateFormat={(date) => format(new Date(date), 'yyyy MMMM dd', { locale: es })}
        />
      </CCol>
    </CRow>
  )
}
```

### With timepicker

If you need to display custom date and time formats, use the `timepicker` property along with `inputDateParse` and `inputDateFormat`. This example shows how you can customize both the date and time formats, allowing users to select a range with time specified, such as `'MMM dd, yyyy h:mm:ss a'`.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsWithTimePickerExample = () => {
  return (
    <CRow>
      <CCol className="mb-3" lg={8}>
        <CDateRangePicker
          startDate="2022/08/03 02:34:17 AM"
          endDate="2022/09/17 11:29:41 PM"
          label="Date range"
          locale="en-US"
          timepicker
          inputDateParse={(date: string) => parse(date, 'MMM dd, yyyy h:mm:ss a', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'MMM dd, yyyy h:mm:ss a')}
        />
      </CCol>
      <CCol lg={8}>
        <CDateRangePicker
          startDate="2022/08/03 02:34:17 AM"
          endDate="2022/09/17 11:29:41 PM"
          label="Rango de fechas"
          locale="es-ES"
          placeholder={['Fecha de inicio', 'Fecha de fin']}
          timepicker
          inputDateParse={(date: string) =>
            parse(date, 'yyyy MMM dd h:mm:ss a', new Date(), { locale: es })
          }
          inputDateFormat={(date) =>
            format(new Date(date), 'yyyy MMM dd h:mm:ss a', { locale: es })
          }
        />
      </CCol>
    </CRow>
  )
}
```

### Weeks

If you want to show weeks in a custom format, set the `selectionType` to `'week'`. This example demonstrates how to use `inputDateParse` and `inputDateFormat` to present and parse week-based date strings, like `'Io RRRR'`. Including the `showWeekNumber` property allows you to display week numbers, which can be formatted according to your needs.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsWeeksExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" lg={6}>
        <CDateRangePicker
          startDate="2022W10"
          endDate="2022W13"
          label="Date range"
          locale="en-US"
          inputDateParse={(date: string) =>
            parse(date, 'Io RRRR', new Date(), {
              useAdditionalWeekYearTokens: true,
              weekStartsOn: 1,
            })
          }
          inputDateFormat={(date) => format(new Date(date), 'Io RRRR', { weekStartsOn: 1 })}
          selectionType="week"
          showWeekNumber
        />
      </CCol>
      <CCol lg={6}>
        <CDateRangePicker
          startDate="2022W10"
          endDate="2022W13"
          label="Rango de fechas"
          locale="es-ES"
          inputDateParse={(date: string) =>
            parse(date, 'Io RRRR', new Date(), {
              locale: es,
              useAdditionalWeekYearTokens: true,
            })
          }
          inputDateFormat={(date) => format(new Date(date), 'Io RRRR', { locale: es })}
          selectionType="week"
          showWeekNumber
        />
      </CCol>
    </CRow>
  )
}
```

### Months

If your application requires month selection in a specific format, use the `selectionType` set to `'month'`. This example shows how to customize the month display using `inputDateFormat` and how to parse month strings with `inputDateParse`, allowing for formats such as `'MMM yyyy'`.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsMonthsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" lg={6}>
        <CDateRangePicker
          startDate="2022-08"
          endDate="2023-04"
          label="Date range"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'MMM yyyy', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'MMM yyyy')}
          selectionType="month"
        />
      </CCol>
      <CCol lg={6}>
        <CDateRangePicker
          startDate="2022-08"
          endDate="2023-04"
          label="Rango de fechas"
          locale="es-ES"
          inputDateParse={(date: string) => parse(date, 'MMM yyyy', new Date(), { locale: es })}
          inputDateFormat={(date) => format(new Date(date), 'MMM yyyy', { locale: es })}
          selectionType="month"
        />
      </CCol>
    </CRow>
  )
}
```

### Years

If you need to format years in a custom way, use the `selectionType` set to `'year'`. This example provides guidance on using `inputDateFormat` and `inputDateParse` to work with custom year formats like `'yy'`.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsYearsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" lg={6}>
        <CDateRangePicker
          startDate="2022"
          endDate="2024"
          label="Date range"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'yy', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'yy')}
          selectionType="year"
        />
      </CCol>
      <CCol lg={6}>
        <CDateRangePicker
          startDate="2022"
          endDate="2024"
          label="Rango de fechas"
          locale="es-ES"
          inputDateParse={(date: string) => parse(date, 'yy', new Date(), { locale: es })}
          inputDateFormat={(date) => format(new Date(date), 'yy', { locale: es })}
          selectionType="year"
        />
      </CCol>
    </CRow>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDateRangePicker /&gt;](./api/#cdaterangepicker)
