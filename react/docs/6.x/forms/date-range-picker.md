# React Date Range Picker Component

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

Explore basic usage of the Date Range Picker through sample code snippets that demonstrate its core functionality.

### Days

Select date ranges by day, from a basic picker to one with projected footer actions.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDaysExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6}>
        <CDateRangePicker
          label="Date range"
          locale="en-US"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          defaultEndDate="2022/08/17"
          label="Date range"
          locale="en-US"
          defaultStartDate="2022/08/03"
        />
      </CCol>
    </CRow>
  )
}
```

#### With footer

The `footer` prop projects your own content below the calendars. Pass a node, or a function receiving the picker's context — `setRange`, `clear`, `reset`, `close`, `isDateSelectable`, `startDate`, `endDate` and `disabled` — so a projected button acts on the picker and reads its state. While a footer is present the panel stays open after the second date, because the footer's actions are what closes it.

Any descendant can reach the same context with the `useDateRangePicker()` hook.

```html
import React from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerDaysWithFooterExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6}>
        <CDateRangePicker
          footer={({ clear, close }) => (
            <>
              <CButton
                className="me-auto"
                theme="primary"
                onClick={clear}
                size="sm"
                variant="ghost"
              >
                Clear
              </CButton>
              <CButton theme="primary" onClick={close} size="sm">
                OK
              </CButton>
            </>
          )}
          locale="en-US"
        />
      </CCol>
      <CCol sm={6}>
        <CDateRangePicker
          defaultEndDate="2022/08/17"
          footer={({ close, reset }) => (
            <>
              <CButton
                className="me-auto"
                theme="primary"
                onClick={reset}
                size="sm"
                variant="ghost"
              >
                Reset
              </CButton>
              <CButton theme="primary" onClick={close} size="sm">
                OK
              </CButton>
            </>
          )}
          locale="en-US"
          defaultStartDate="2022/08/03"
        />
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
      <CCol className="mb-4 mb-sm-0" sm={6}>
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
          defaultStartDate="2025W07"
          defaultEndDate="2025W12"
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
      <CCol className="mb-4 mb-sm-0" sm={6}>
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
          defaultStartDate="2022-08"
          defaultEndDate="2023-05"
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
      <CCol className="mb-4 mb-sm-0" sm={6}>
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
          defaultStartDate="2025Q3"
          defaultEndDate="2026Q2"
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
      <CCol className="mb-4 mb-sm-0" sm={6}>
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
          defaultStartDate="2022"
          defaultEndDate="2028"
          onStartDateChange={(date) => console.log(date)}
          onEndDateChange={(date) => console.log(date)}
        />{' '}
      </CCol>
    </CRow>
  )
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

A native reset of the form returns an uncontrolled picker to the range it started with and drops the state a submit set; a controlled end (`startDate`, `endDate`) asks for the date it started with through its callback and shows the date your page gives until the page takes it.

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label">Reporting period</span>
      <CDateRangePicker endName="periodEnd" locale="en-US" startName="periodStart" />
      <CFormText>Both dates are included in the report.</CFormText>
    </CFormField>
  )
}
```

## Floating labels

Set `floatingLabels` and each field carries its own floating label, floating independently — the label text also becomes that field's accessible name. No wrapper markup is needed, and the mask placeholders stay hidden while the label rests inside the field.

```html
import React from 'react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerFloatingLabelExample = () => (
  <CDateRangePicker floatingLabels={['Check-in', 'Check-out']} locale="en-US" />
)
```

Set `floatingLabelAlways` to keep both labels [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating) with the masks showing.

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerSizingExample = () => {
  return (
    <>
      <CRow className="mb-4">
        <CCol lg={6}>
          <CDateRangePicker locale="en-US" size="lg" />
        </CCol>
      </CRow>
      <CRow className="mb-4">
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

Add the `readOnly` boolean attribute to prevent modification of the fields' values. The calendar still opens, so the range can be read but not typed over.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerReadonlyExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker readOnly locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Disabled dates

Our React Date Range Picker component features the ability to disable specific dates, such as weekends or holidays, by using the `disabledDates` prop. This prop takes an array and uses custom logic to determine which dates should be disabled.

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

## Validation

The picker shows its validation state on the frame and on the sections of both fields, which the message after the picker describes, the way [`<CForm>`](../validation/) does for a native field. Each field keeps its value in a `<textarea>` laid invisibly over it, so a `required` end that is empty, incomplete or holds a rejected date blocks the submit, as in the [date range input](../date-range-input/#validation). The picker also sets the state itself: a date the limits reject marks the range invalid, and so does an end before the start, for as long as it stands.

```html
import React, { useState } from 'react'
import { CButton, CCol, CDateRangePicker, CForm } from '@coreui/react-pro'

export const DateRangePickerValidationExample = () => {
  const [stayState, setStayState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <CCol lg={7}>
        <CDateRangePicker
          defaultEndDate="2026-08-17"
          defaultStartDate="2026-08-10"
          endName="to"
          feedback="Those dates are already booked."
          locale="en-US"
          onValidationStateChange={setStayState}
          startName="from"
          validationState={stayState}
        />
      </CCol>
      <CCol xs={12}>
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </CCol>
    </CForm>
  )
}
```

`validationState` gives a state of the range: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, with `invalid` and `valid` as deprecated aliases that ask to be dropped the same way, though only `validationState` can be cleared by the setter you pass. `feedbackInvalid` or `feedbackValid` is the message shown while that state holds, describing both fields, and `tooltipFeedback` shows it as a tooltip instead. A given state is a verdict on the range it was given for. When the user changes the range, with a day picked in the calendar, the cleaner, a preset or a footer button that changes it through the context, or typing in a field, or the form is reset, the picker calls `onValidationStateChange(undefined)` before it reports the change; pass your state setter there to drop the state, as the example does. An action that leaves the range as it is asks nothing, and neither does a change your code makes through `startDate` and `endDate`. While the given state is `'invalid'`, both ends block the submit with the text of the message after the picker, or `Invalid value.` when there is none.

### Blocking the submit

A `required` end that is empty, incomplete or rejected by the limits blocks the submit by itself. An end before the start does not, since both ends hold dates the browser accepts, and neither does an optional end that is empty, incomplete or rejected, which submits no date. Check the dates before you send them; `onStartDateChange` and `onEndDateChange` report `null` for an end that is empty, incomplete or rejected, so one condition covers both:

```tsx
const [start, setStart] = useState<Date | null>(null)
const [end, setEnd] = useState<Date | null>(null)

return (
  <CForm
    onSubmit={(event) => {
      if (!start || !end || end < start) {
        event.preventDefault()
      }
    }}
  >
    <CDateRangePicker onEndDateChange={setEnd} onStartDateChange={setStart} />
    <CButton type="submit">Book</CButton>
  </CForm>
)
```

## Custom ranges

The `ranges` prop projects content beside the calendars — that is where range presets live. Pass a node, or a function receiving the picker's context; a preset button calls `setRange` with its own two dates.

```html
import React from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomRangesExample = () => {
  const today = new Date()
  const daysAgo = (days: number) => new Date(new Date().setDate(today.getDate() - days))

  const presets: [string, [Date, Date]][] = [
    ['Today', [today, today]],
    ['Yesterday', [daysAgo(1), daysAgo(1)]],
    ['Last 7 days', [daysAgo(6), today]],
    ['Last 30 days', [daysAgo(29), today]],
    ['This month', [new Date(today.getFullYear(), today.getMonth(), 1), today]],
    [
      'Last month',
      [
        new Date(today.getFullYear(), today.getMonth() - 1, 1),
        new Date(today.getFullYear(), today.getMonth(), 0),
      ],
    ],
  ]

  return (
    <CRow>
      <CCol sm={5}>
        <CDateRangePicker
          ranges={({ setRange }) =>
            presets.map(([label, [start, end]]) => (
              <CButton
                theme="primary"
                key={label}
                onClick={() => setRange(start, end)}
                size="sm"
                variant="ghost"
              >
                {label}
              </CButton>
            ))
          }
        />
      </CCol>
    </CRow>
  )
}
```

## Locale

CoreUI's React Date Range Picker enables the display of dates and times in non-English locales, making it essential for international users and multilingual support.

### Auto

By default, the DateRangePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can pass the desired language code as a prop to the DateRangePicker component. This feature enables the creation of more inclusive and accessible applications that cater to a diverse audience.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and React reports a hydration mismatch when the two differ.

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
        <CDateRangePicker locale="zh-CN" />
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
        <CDateRangePicker locale="ja" />
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
        <CDateRangePicker locale="ko" />
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
        <CDateRangePicker locale="he-IL" />
      </CCol>
    </CRow>
  )
}
```

### Persian

The date range picker is Gregorian: with a locale whose own calendar has different months, like Persian, its calendar shows the Gregorian months in that locale's language and digits, and its fields hold Gregorian numbers.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerLocalePersianExample = () => {
  return (
    <CRow dir="rtl">
      <CCol lg={5}>
        <CDateRangePicker locale="fa-IR" />
      </CCol>
    </CRow>
  )
}
```

## Custom formats

The `format` property is a mask: it spells out the sections both fields render. Tokens are `dd` for the day, `ww` for the ISO week, `MM` (`MMM`, `MMMM` for names) for the month, `QQQ` for the quarter, `yyyy` for the year, and text in single quotes is a literal, even when it contains token letters — `'Week' ww, yyyy` renders `Week 29, 2026`. Without it the fields follow the locale's own date format.

`inputDateParse` still applies to pasted text, turning a custom string into a `Date`.

```html
import React from 'react'
import { parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2022/08/24"
          format="MMMM dd, yyyy"
          inputDateParse={(date: string) => parse(date, 'MMMM dd, yyyy', new Date())}
          label="Date range"
          locale="en-US"
          defaultStartDate="2022/08/17"
        />
      </CCol>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2022/08/24"
          format="yyyy MMMM dd"
          inputDateParse={(date: string) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })}
          label="Selector de rango de fechas"
          locale="es-ES"
          defaultStartDate="2022/08/17"
        />
      </CCol>
    </CRow>
  )
}
```

### Weeks

Setting `selectionType` to `'week'` narrows both fields to the locale's week presentation. Override it with a mask of your own: `yyyy-'W'ww` for the ISO form, or a localized label. The `showWeekNumber` property adds the week numbers to the calendars.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsWeeksExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2022W12"
          format="yyyy-'W'ww"
          label="Date range"
          locale="en-US"
          selectionType="week"
          showWeekNumber
          defaultStartDate="2022W10"
        />
      </CCol>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2022W12"
          format="'Semana' ww, yyyy"
          label="Selector de rango de fechas"
          locale="es-ES"
          selectionType="week"
          showWeekNumber
          defaultStartDate="2022W10"
        />
      </CCol>
    </CRow>
  )
}
```

### Months

Setting `selectionType` to `'month'` narrows both fields to `MM/yyyy`. Give `format` a mask of your own — `MMM yyyy` renders the month name instead of its number.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsMonthsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2022-10"
          format="MMM yyyy"
          label="Date range"
          locale="en-US"
          selectionType="month"
          defaultStartDate="2022-08"
        />
      </CCol>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2022-10"
          format="MMM yyyy"
          label="Selector de rango de fechas"
          locale="es-ES"
          selectionType="month"
          defaultStartDate="2022-08"
        />
      </CCol>
    </CRow>
  )
}
```

### Years

Setting `selectionType` to `'year'` narrows both fields to `yyyy`. A mask of `yy` renders the two-digit form.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerCustomFormatsYearsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2024"
          format="yy"
          label="Date range"
          locale="en-US"
          selectionType="year"
          defaultStartDate="2022"
        />
      </CCol>
      <CCol lg={5}>
        <CDateRangePicker
          defaultEndDate="2024"
          format="yy"
          label="Selector de rango de fechas"
          locale="es-ES"
          selectionType="year"
          defaultStartDate="2022"
        />
      </CCol>
    </CRow>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The calendar works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open state |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the picker, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the calendar requests an open-state change — a dismiss gesture (Escape, a click outside) or, in uncontrolled mode, any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Every example above is uncontrolled — the picker manages its own calendar. `defaultShow` seeds it open on mount.

```jsx
<CDateRangePicker defaultShow />
```

### Controlled

Pass `show` and the calendar renders what you pass — dismiss gestures only call `onShowChange`, so feed the change back, or nothing closes. Here a checkbox pins the calendar open, and a dismiss gesture unchecks it.

```html
import React, { useState } from 'react'
import { CCheckbox, CCol, CFormField, CRow } from '@coreui/react'
import { CDateRangePicker } from '@coreui/react-pro'

export const DateRangePickerControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CFormField className="mb-4">
        <CCheckbox
          checked={show}
          id="dateRangePickerControlledShow"
          label="Keep the calendar open"
          onChange={(event) => setShow(event.target.checked)}
        />
      </CFormField>
      <CRow>
        <CCol sm={8} lg={6}>
          <CDateRangePicker label="Date range" locale="en-US" onShowChange={setShow} show={show} />
        </CCol>
      </CRow>
    </>
  )
}
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the picker like the checkbox above.

## Accessibility

Both fields are groups of spinbutton sections, so their own arrow keys belong to the value and the popup opens on the native control's dropdown keys instead. Each field is named by its floating label, or by `ariaStartLabel` and `ariaEndLabel` ("Start date" and "End date" by default), so a screen reader tells the two apart. They sit inside one `role="group"` named by `label`, and clicking that label moves focus to the first empty section of the start date. Each is described by an `aria-describedby` you pass to the picker, then by `text` and the feedback that matches its state.

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the element that opened it, the toggle or the field, when it closes.

The toggle's name ends with the range the picker holds, written by the locale (`Toggle calendar, Thursday, August 20 – Sunday, August 23, 2026`), so a screen reader reads the picked range when the popup closes and focus goes back to the toggle. A live message would be lost at that moment, so the calendar does not announce the pick of the end that closes the popup. A pick that leaves the popup open, such as a new start that keeps the end or any pick with a `footer`, is announced through `ariaSelectedRangeAnnouncement`, and so is every pick without a toggle (`pickerIcon={false}`).

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the popup and move focus into it |
| <kbd>Escape</kbd> | Close the popup and return focus to the field or the toggle that opened it |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open panel; the field is outside the dialog and stays out of the cycle |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused value |

Inside the grid, navigation follows the [calendar keyboard model](https://coreui.io/react/docs/components/calendar/#keyboard-support): arrows move by day and week, <kbd>Home</kbd> / <kbd>End</kbd> move to the first and last day of the week inside `minDate` / `maxDate` (the first and last week of the month with `selectionType="week"`), and <kbd>Page Down</kbd> / <kbd>Page Up</kbd> (with <kbd>Shift</kbd> for years) move between months and years. A date that cannot be picked takes the focus like any other, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDateRangePicker /&gt;](./api/#cdaterangepicker)
