# React Date Picker Component

> The React Date Picker Component is an essential tool for any React-based application that requires date selection functionality.

## About

This component, provided by CoreUI for React.js, offers a user-friendly interface and various customization options to ensure an excellent user experience.

With its responsive design and support for all modern browsers, the React Date Picker Component can be easily integrated into any application. The component comes with an array of styling options, including color, size, and shape, that can be easily adjusted to fit the application's design.

The React Date Picker Component is also fully customizable, allowing developers to tailor the component to their specific needs. With its set of APIs, developers can control the default value, visibility, and date range of the component.

One of the standout features of the React Date Picker Component is its accessibility. CoreUI has ensured that the component is fully compliant with the Web Content Accessibility Guidelines (WCAG), making it accessible to all users. The component supports keyboard navigation and screen readers, ensuring that users with disabilities can also benefit from its functionality.

## Example

Below is an example of a basic React DatePicker.

### Days

Basic examples demonstrating how to pick dates using the React Date Picker Component.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerDaysExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Date Picker" locale="en-US" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker date="2022/2/16" label="Date Picker" locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

#### With timepicker

In addition to supporting date selection, our React DatePicker component also includes a TimePicker feature that allows users to select a specific time of day. React TimePicker can be enabled by passing a `timepicker` prop to the `` component

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerDaysWithTimePickerExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker locale="en-US" timepicker />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker date="2023/03/15 02:22:13 PM" locale="en-US" timepicker />
      </CCol>
    </CRow>
  )
}
```

#### With footer

Here is an example with the additional footer. The footer can be useful for displaying additional information or actions related to the selected date, such as "Today" or "Clear" buttons. The footer component is fully customizable and can be styled to match the rest of the application.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerDaysWithFooterExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker footer locale="en-US" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker date="2022/2/16" footer locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

### Weeks

Illustration of week selection using the React Date Picker, including week number display.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerWeeksExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Week Picker" locale="en-US" selectionType="week" showWeekNumber />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker
          date="2025W07"
          label="Week Picker"
          locale="en-US"
          selectionType="week"
          showWeekNumber
        />
      </CCol>
    </CRow>
  )
}
```

### Months

Selecting whole months with the React Date Picker Component.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerMonthsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Month Picker" locale="en-US" selectionType="month" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker label="Month Picker" locale="en-US" selectionType="month" date="2022-08" />
      </CCol>
    </CRow>
  )
}
```

### Quarters

Selecting quarters using the React Date Picker.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerQuartersExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Quarter Picker" locale="en-US" selectionType="quarter" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker date="2025Q1" label="Quarter Picker" locale="en-US" selectionType="quarter" />
      </CCol>
    </CRow>
  )
}
```

### Years

Picking years using the React Date Picker.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerYearsExample = () => {
  return (
    <CRow>
      <CCol className="mb-3 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Year Picker" locale="en-US" selectionType="year" />{' '}
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker label="Year Picker" locale="en-US" selectionType="year" date="2022" />{' '}
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
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerSizingExample = () => {
  return (
    <>
      <CRow className="mb-3">
        <CCol lg={5}>
          <CDatePicker locale="en-US" size="lg" />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={4}>
          <CDatePicker locale="en-US" size="sm" />
        </CCol>
      </CRow>
    </>
  )
}
```

## Disabled

Add the `disabled` boolean attribute on the React Date Picker to give it a grayed out appearance and remove pointer events.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerDisabledExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker disabled locale="en-US" />
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
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerReadonlyExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker inputReadOnly locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Preview date on hover

By default, the date picker shows a live preview in the input field when hovering over calendar dates. To disable this feature, set `previewDateOnHover={false}`.

```html
import React from 'react'
import { CCol, CFormLabel, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerPreviewDateOnHoverExample = () => {
  return (
    <CRow>
      <CCol sm={6} className="mb-3 mb-sm-0">
        <CFormLabel>With preview (default)</CFormLabel>
        <CDatePicker locale="en-US" />
      </CCol>
      <CCol sm={6}>
        <CFormLabel>Without preview</CFormLabel>
        <CDatePicker locale="en-US" previewDateOnHover={false} />
      </CCol>
    </CRow>
  )
}
```

## Disabled dates

CoreUI React DatePicker component includes a feature that allows you to disable certain dates, such as weekends or holidays. This can be accomplished by passing an array to `disabledDate` prop to the component, which determines which dates should be disabled based on custom logic.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerDisabledDatesExample = () => {
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
        <CDatePicker
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
import { CDatePicker } from '@coreui/react-pro'

const disableWeekends = (date: Date) => {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sundays (0) and Saturdays (6)
}

export const DatePickerDisablingWeekendsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker disabledDates={disableWeekends} locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Locale

CoreUI React Date Picker allows users to display dates and times in a non-English locale. This is useful for applications that have international users or need to support multiple languages. 

### Auto

By default, the DatePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can simply pass the desired language code as a prop to the DatePicker component. This feature enables to create more inclusive and accessible applications that cater to a diverse audience.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocaleAutoExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker />
      </CCol>
    </CRow>
  )
}
```

### Chinese

Below is an example of a basic React Date Picker with Chinese locales.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocaleChineseExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker placeholder="入住日期" locale="zh-CN" />
      </CCol>
    </CRow>
  )
}
```

### Japanese

Below is an example of a basic React Date Picker with Japanese locales.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocaleJapaneseExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker placeholder="日付を選択" locale="ja" />
      </CCol>
    </CRow>
  )
}
```

### Korean

Below is an example of a basic React Date Picker with Korean locales.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocaleKoreanExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker placeholder="날짜 선택" locale="ko" />
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
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocaleHebrewExample = () => {
  return (
    <CRow dir="rtl">
      <CCol lg={4}>
        <CDatePicker placeholder="בחר תאריך" locale="he-IL" />
      </CCol>
    </CRow>
  )
}
```

### Persian

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocalePersianExample = () => {
  return (
    <CRow dir="rtl">
      <CCol lg={4}>
        <CDatePicker placeholder="تاریخ شروع" locale="fa-IR" />
      </CCol>
    </CRow>
  )
}
```

## Custom container

_Added in 5.28.0._

By default the calendar is rendered in `document.body`. Pass an HTML element, or a function that returns one, to the `container` property to render it somewhere else — for example inside a scrollable panel or a modal, so that it scrolls together with the rest of the content.

```html
import React, { useState } from 'react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomContainerExample = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  return (
    <div ref={setContainer}>
      <CDatePicker container={container} locale="en-US" />
    </div>
  )
}
```

To render the calendar in place, right after the input group, set `portal` to `false` instead.

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
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          date="2022/08/17"
          label="Date picker"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'MMMM dd, yyyy', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'MMMM dd, yyyy')}
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          date="2022/08/17"
          label="Selector de fechas"
          locale="es-ES"
          placeholder="Seleccionar fecha"
          inputDateParse={(date: string) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })}
          inputDateFormat={(date) => format(new Date(date), 'yyyy MMMM dd', { locale: es })}
        />
      </CCol>
    </CRow>
  )
}
```

### With timepicker

If you need to display custom date and time formats, use the `timepicker` property along with `inputDateParse` and `inputDateFormat`. This allows users to select a date with a specified time format, such as `'MMM dd, yyyy h:mm:ss a'`.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsWithTimePickerExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDatePicker
          date="2022/08/03 02:34:17 AM"
          label="Date picker"
          locale="en-US"
          timepicker
          inputDateParse={(date: string) => parse(date, 'MMM dd, yyyy h:mm:ss a', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'MMM dd, yyyy h:mm:ss a')}
        />
      </CCol>
      <CCol lg={5}>
        <CDatePicker
          date="2022/08/03 02:34:17 AM"
          label="Selector de fechas"
          locale="es-ES"
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

If you want to show weeks in a custom format, set the `selectionType` to `'week'`. This configuration allows you to use `inputDateParse` and `inputDateFormat` to present and parse week-based date strings, like `'Io RRRR'`. Additionally, the `showWeekNumber` property can be used to display week numbers in your preferred format.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsWeeksExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          date="2022W10"
          label="Date picker"
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
      <CCol lg={4}>
        <CDatePicker
          date="2022W10"
          label="Selector de fechas"
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

If your application requires month selection in a specific format, set the `selectionType` property to `'month'`. Using `inputDateFormat` and `inputDateParse`, you can customize the display of months, such as using the format `'MMM yyyy'`.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsMonthsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          date="2022-08"
          label="Date range"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'MMM yyyy', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'MMM yyyy')}
          selectionType="month"
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          date="2022-08"
          label="Selector de fechas"
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

If you need to work with custom year formats, set the `selectionType` to `'year'`. This enables you to use `inputDateFormat` and `inputDateParse` to format years in a manner that suits your application's requirements, like `'yy'`.

```html
import React from 'react'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsYearsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          date="2022"
          label="Date range"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'yy', new Date())}
          inputDateFormat={(date) => format(new Date(date), 'yy')}
          selectionType="year"
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          date="2022"
          label="Selector de fechas"
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

- [&lt;CDatePicker /&gt;](./api/#cdatepicker)
