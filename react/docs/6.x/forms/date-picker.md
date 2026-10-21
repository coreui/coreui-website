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
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Date Picker" locale="en-US" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker defaultDate="2022/2/16" label="Date Picker" locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

#### With footer

The `footer` prop projects your own content below the calendar. Pass a node, or a function receiving the picker's context — `setDate`, `today`, `clear`, `reset`, `close`, `isDateSelectable`, `date` and `disabled` — so a projected button acts on the picker and reads its state. That is also how a "Today" button disables itself when today falls outside `minDate`, `maxDate` or `disabledDates`; the example checks when the panel renders and again on click, so a date that crosses a limit while the panel is open is not written.

Any descendant can reach the same context with the `useDatePicker()` hook.

```html
import React from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerDaysWithFooterExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker
          footer={({ clear, close, isDateSelectable, today }) => (
            <>
              <CButton
                className="me-auto"
                theme="danger"
                disabled={!isDateSelectable(new Date())}
                onClick={() => isDateSelectable(new Date()) && today()}
                size="sm"
                variant="ghost"
              >
                Today
              </CButton>
              <CButton theme="primary" onClick={clear} size="sm" variant="ghost">
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
      <CCol sm={6} lg={5}>
        <CDatePicker
          defaultDate="2022/2/16"
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
        />
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
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Week Picker" locale="en-US" selectionType="week" showWeekNumber />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker
          defaultDate="2025W07"
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
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Month Picker" locale="en-US" selectionType="month" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker
          label="Month Picker"
          locale="en-US"
          selectionType="month"
          defaultDate="2022-08"
        />
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
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Quarter Picker" locale="en-US" selectionType="quarter" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker
          defaultDate="2025Q1"
          label="Quarter Picker"
          locale="en-US"
          selectionType="quarter"
        />
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
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Year Picker" locale="en-US" selectionType="year" />{' '}
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker
          label="Year Picker"
          locale="en-US"
          selectionType="year"
          defaultDate="2022"
        />{' '}
      </CCol>
    </CRow>
  )
}
```

## With time

Set `timepicker` to add the time half. The field switches to a date and time mask, the panel grows a row of time selects under the calendar, and picking a day no longer closes the panel — the two halves own different parts of one value, so the interaction is not over until the user says so. While no time is picked, or the field holds a time a list does not offer, each select stands on a `--` placeholder, so every enabled option, the first allowed one included, sets the time.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerTimeExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDatePicker label="Appointment" locale="en-US" timepicker />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDatePicker
          defaultDate="2026/07/14 14:30:00"
          label="Appointment"
          locale="en-US"
          timepicker
        />
      </CCol>
    </CRow>
  )
}
```

`minDate` and `maxDate` can carry a time of day. Their day stays selectable in the calendar and the time selects disable the hours, minutes and seconds before `minDate` or after `maxDate` on that day. A time the panel sets beyond a limit, such as the current time when the day of `minDate` is picked, moves to the limit; a typed time beyond it marks the field invalid. Until a date is picked, the time selects work on today moved into the limits. A limit without a time of day covers its whole day.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerTimeLimitsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDatePicker
          label="Appointment"
          locale="en-US"
          maxDate={new Date(2026, 9, 30, 17)}
          minDate={new Date(2026, 9, 15, 9, 30)}
          timepicker
        />
      </CCol>
    </CRow>
  )
}
```

`seconds`, `minutes` and `hours` narrow what the time half offers, and are ignored without `timepicker`. Hours are 0 to 23 in every locale; on a 12-hour clock an hour that only one period allows sets that period.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

A native reset of the form returns an uncontrolled picker to the date it started with and drops the state a submit set; a controlled one (`date` with `onDateChange`) asks for the date it started with through `onDateChange` and shows the date your page gives until the page takes it.

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label">Delivery date</span>
      <CDatePicker locale="en-US" name="deliveryDate" />
      <CFormText>We deliver on working days only.</CFormText>
    </CFormField>
  )
}
```

## Cleaner and picker button

The field ends with two buttons: one clears the value, the other opens the calendar. `cleanerIcon` and `pickerIcon` swap their artwork for your own node, `cleaner={false}` leaves the cleaner out, and `pickerIcon={false}` leaves out the button that opens the calendar. Without that button the popup has no pointer opener and nothing reports the expanded state, though the field keeps the keyboard openers listed under [Keyboard support](#keyboard-support).

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCalendarCheck, cilXCircle } from '@coreui/icons'

export const DatePickerButtonsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDatePicker
          cleanerIcon={<CIcon icon={cilXCircle} />}
          defaultDate="2022/08/17"
          locale="en-US"
          pickerIcon={<CIcon icon={cilCalendarCheck} />}
        />
      </CCol>
      <CCol lg={5}>
        <CDatePicker cleaner={false} defaultDate="2022/08/17" locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Floating labels

Set `floatingLabel` and the component wraps its input in `.form-floating` and renders the label itself — the text also becomes the field's accessible name. No wrapper markup is needed, and the mask placeholders stay hidden while the label rests inside the field.

```html
import React from 'react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerFloatingLabelExample = () => (
  <CDatePicker floatingLabel="Delivery date" locale="en-US" />
)
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerSizingExample = () => {
  return (
    <>
      <CRow className="mb-4">
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

Add the `readOnly` boolean attribute to prevent modification of the field's value. The calendar still opens, so the value can be read but not typed over.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerReadonlyExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker readOnly locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Disabled dates

CoreUI React DatePicker component includes a feature that allows you to disable certain dates, such as weekends or holidays. This can be accomplished by passing an array to `disabledDate` prop to the component, which determines which dates should be disabled based on custom logic.

In week, month, quarter and year selection the calendar and the field judge the whole period: it is refused only when it lies wholly before `minDate` or after `maxDate`, or `disabledDates` covers every day of it that the limits leave. In week selection the limits count as whole weeks, so for a week that is all seven days.

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

## Validation

The picker shows its validation state on the frame and on the sections of its field, which the message after the picker describes, the way [`<CForm>`](../validation/) does for a native field. The field keeps its value in a `<textarea>` laid invisibly over it, so a `required` picker that is empty, incomplete or holds a rejected date blocks the submit, as the [date input](../date-input/#validation) does. The picker also sets the state itself: a date the limits reject marks it invalid, for as long as it stands.

```html
import React, { useState } from 'react'
import { CButton, CCol, CDatePicker, CForm } from '@coreui/react-pro'

export const DatePickerValidationExample = () => {
  const [deliveryState, setDeliveryState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <CCol lg={5}>
        <CDatePicker
          feedbackInvalid="Please provide a start date."
          label="Start date (required)"
          locale="en-US"
          name="start"
          required
        />
      </CCol>
      <CCol lg={5}>
        <CDatePicker
          defaultDate="2026-07-14"
          feedback="We have no delivery slots left on this date."
          label="Delivery date"
          locale="en-US"
          name="delivery"
          onValidationStateChange={setDeliveryState}
          validationState={deliveryState}
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

`validationState` gives a state: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, with `invalid` and `valid` as deprecated aliases that ask to be dropped the same way, though only `validationState` can be cleared by the setter you pass. A given state is a verdict on the date it was given for. When the user changes the date, with a day picked in the calendar, a time picked with `timepicker`, the cleaner, a footer button that changes the date through the context, or typing in the field, or the form is reset, the picker calls `onValidationStateChange(undefined)` before `onDateChange`; pass your state setter there to drop the state, as the second picker above does. An action that leaves the date as it is asks nothing, and neither does a change your code makes through `date`. While the given state is `'invalid'`, the picker blocks the submit with the text of the message after it, or `Invalid value.` when there is none.

## Locale

CoreUI React Date Picker allows users to display dates and times in a non-English locale. This is useful for applications that have international users or need to support multiple languages. 

### Auto

By default, the DatePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can simply pass the desired language code as a prop to the DatePicker component. This feature enables to create more inclusive and accessible applications that cater to a diverse audience.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and React reports a hydration mismatch when the two differ.

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
        <CDatePicker label="入住日期" locale="zh-CN" />
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
        <CDatePicker label="日付を選択" locale="ja" />
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
        <CDatePicker label="날짜 선택" locale="ko" />
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
        <CDatePicker label="בחר תאריך" locale="he-IL" />
      </CCol>
    </CRow>
  )
}
```

### Persian

The date picker is Gregorian: with a locale whose own calendar has different months, like Persian, its calendar shows the Gregorian months in that locale's language and digits, and its field holds Gregorian numbers.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerLocalePersianExample = () => {
  return (
    <CRow dir="rtl">
      <CCol lg={4}>
        <CDatePicker label="تاریخ شروع" locale="fa-IR" />
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

The `format` property is a mask: it spells out the sections the field renders. Tokens are `dd` for the day, `ww` for the ISO week, `MM` (`MMM`, `MMMM` for names) for the month, `QQQ` for the quarter, `yyyy` for the year, and text in single quotes is a literal, even when it contains token letters — `'Week' ww, yyyy` renders `Week 29, 2026`. Without it the field follows the locale's own date format.

`inputDateParse` still applies to pasted text, turning a custom string into a `Date`.

```html
import React from 'react'
import { parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022/08/17"
          format="MMMM dd, yyyy"
          label="Date picker"
          locale="en-US"
          inputDateParse={(date: string) => parse(date, 'MMMM dd, yyyy', new Date())}
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022/08/17"
          format="yyyy MMMM dd"
          label="Selector de fechas"
          locale="es-ES"
          inputDateParse={(date: string) => parse(date, 'yyyy MMMM dd', new Date(), { locale: es })}
        />
      </CCol>
    </CRow>
  )
}
```

### Weeks

Setting `selectionType` to `'week'` narrows the field to the locale's week presentation — `Week 29, 2026`. Override it with a mask of your own: `yyyy-'W'ww` for the ISO form, or a localized label. The `showWeekNumber` property adds the week numbers to the calendar.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsWeeksExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022W10"
          format="yyyy-'W'ww"
          label="Date picker"
          locale="en-US"
          selectionType="week"
          showWeekNumber
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022W10"
          format="'Semana' ww, yyyy"
          label="Selector de fechas"
          locale="es-ES"
          selectionType="week"
          showWeekNumber
        />
      </CCol>
    </CRow>
  )
}
```

### Months

Setting `selectionType` to `'month'` narrows the field to `MM/yyyy`. Give `format` a mask of your own — `MMM yyyy` renders the month name instead of its number.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsMonthsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022-08"
          format="MMM yyyy"
          label="Date picker"
          locale="en-US"
          selectionType="month"
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022-08"
          format="MMM yyyy"
          label="Selector de fechas"
          locale="es-ES"
          selectionType="month"
        />
      </CCol>
    </CRow>
  )
}
```

### Years

Setting `selectionType` to `'year'` narrows the field to `yyyy`. A mask of `yy` renders the two-digit form.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerCustomFormatsYearsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022"
          format="yy"
          label="Date picker"
          locale="en-US"
          selectionType="year"
        />
      </CCol>
      <CCol lg={4}>
        <CDatePicker
          defaultDate="2022"
          format="yy"
          label="Selector de fechas"
          locale="es-ES"
          selectionType="year"
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
<CDatePicker defaultShow />
```

### Controlled

Pass `show` and the calendar renders what you pass — dismiss gestures only call `onShowChange`, so feed the change back, or nothing closes. Here a checkbox pins the calendar open, and a dismiss gesture unchecks it.

```html
import React, { useState } from 'react'
import { CCheckbox, CCol, CFormField, CRow } from '@coreui/react'
import { CDatePicker } from '@coreui/react-pro'

export const DatePickerControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CFormField className="mb-4">
        <CCheckbox
          checked={show}
          id="datePickerControlledShow"
          label="Keep the calendar open"
          onChange={(event) => setShow(event.target.checked)}
        />
      </CFormField>
      <CRow>
        <CCol sm={6} lg={5}>
          <CDatePicker label="Date Picker" locale="en-US" onShowChange={setShow} show={show} />
        </CCol>
      </CRow>
    </>
  )
}
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the picker like the checkbox above.

## Accessibility

The field is a group of spinbutton sections, so its own arrow keys belong to the value and the popup opens on the native control's dropdown keys instead. The field takes its name from an `aria-labelledby` or `aria-label` you pass to the picker, otherwise from `floatingLabel` or, without one, from `label`, and it is described by an `aria-describedby` you pass to the picker, then by `text` and the feedback that matches its state. Clicking the label that names the field moves focus to its first empty section. Focus enters the calendar on the selected date, else on today or on the `minDate` / `maxDate` today falls outside of, also when that date cannot be picked: it is announced as unavailable and the arrows move on from it. In week selection it enters on the row of that week.

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the element that opened it, the toggle or the field, when it closes.

The toggle's name ends with the date the picker holds, written in full (`Toggle calendar, Friday, August 14, 2026`, with the time after it with `timepicker`), so a screen reader reads the picked date when the popup closes and focus goes back to the toggle. A live message would be lost at that moment, so the calendar does not announce a pick that closes the popup onto that toggle. With `timepicker` the popup stays open, and the calendar announces the pick through `ariaSelectedDateAnnouncement`; it does the same without a toggle (`pickerIcon={false}`).

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the popup and move focus into it |
| <kbd>Escape</kbd> | Close the popup and return focus to the field or the toggle that opened it |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open panel; the field is outside the dialog and stays out of the cycle |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused value |

Inside the grid, navigation follows the [calendar keyboard model](https://coreui.io/react/docs/components/calendar/#keyboard-support): arrows move by day and week, <kbd>Home</kbd> / <kbd>End</kbd> move to the first and last day of the week inside `minDate` / `maxDate` (the first and last week of the month with `selectionType="week"`), and <kbd>Page Down</kbd> / <kbd>Page Up</kbd> (with <kbd>Shift</kbd> for years) move between months and years. A date that cannot be picked takes the focus like any other, and <kbd>Enter</kbd> and <kbd>Space</kbd> do nothing there. A key pressed there with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> is neither handled nor cancelled, so it stays free for the browser and assistive technology.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CDatePicker /&gt;](./api/#cdatepicker)
