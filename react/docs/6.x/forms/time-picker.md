# React Time Picker Component

> React Time Picker is a customizable and user-friendly tool for selecting times in forms. It supports various locales, sizes, and states to enhance the user experience.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

To create a basic React Time Picker, use:

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={4}>
        <CTimePicker label="Time" locale="en-US" />
      </CCol>
      <CCol sm={6} lg={4}>
        <CTimePicker label="Time" locale="en-US" defaultTime="02:17:35 PM" />
      </CCol>
    </CRow>
  )
}
```

### With footer

The `footer` prop projects your own content below the time selection. Pass a node, or a function receiving the picker's context — `setTime`, `now`, `clear`, `reset`, `close`, `isTimeSelectable`, `time` and `disabled` — so a projected button acts on the picker and reads its state. That is also how a "Now" button disables itself when the current time falls outside `minDate` or `maxDate`; the example checks when the panel renders and again on click, so a time that crosses a limit while the panel is open is not written.

Any descendant can reach the same context with the `useTimePicker()` hook.

```html
import React from 'react'
import { CButton, CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerWithFooterExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CTimePicker
          footer={({ clear, close, isTimeSelectable, now }) => (
            <>
              <CButton
                className="me-auto"
                theme="danger"
                disabled={!isTimeSelectable(new Date())}
                onClick={() => isTimeSelectable(new Date()) && now()}
                size="sm"
                variant="ghost"
              >
                Now
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
          maxDate="17:00"
          minDate="09:00"
        />
      </CCol>
    </CRow>
  )
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

A native reset of the form returns an uncontrolled picker to the time it started with and drops the state a submit set; a controlled one (`time` with `onTimeChange`) asks for the time it started with through `onTimeChange` and shows the time your page gives until the page takes it.

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label">Meeting time</span>
      <CTimePicker locale="en-US" name="meetingTime" />
      <CFormText>Local time, in your own time zone.</CFormText>
    </CFormField>
  )
}
```

## Floating labels

Set `floatingLabel` and the component wraps its input in `.form-floating` and renders the label itself — the text also becomes the field's accessible name. No wrapper markup is needed, and the mask placeholders stay hidden while the label rests inside the field.

```html
import React from 'react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerFloatingLabelExample = () => (
  <CTimePicker floatingLabel="Meeting time" locale="en-US" />
)
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

Set heights using `size` property like `size="lg"` and `size="sm"`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerSizingExample = () => {
  return (
    <>
      <CRow className="mb-4">
        <CCol lg={5}>
          <CTimePicker locale="en-US" size="lg" />
        </CCol>
      </CRow>
      <CRow className="mb-4">
        <CCol lg={4}>
          <CTimePicker locale="en-US" />
        </CCol>
      </CRow>
      <CRow>
        <CCol lg={3}>
          <CTimePicker locale="en-US" size="sm" />
        </CCol>
      </CRow>
    </>
  )
}
```

## Theme variants

A [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the picker colours the selected cell of every roll.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerThemeVariantsExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CTimePicker
          className="theme-success"
          label="Time"
          locale="en-US"
          defaultTime="02:30:00 PM"
        />
      </CCol>
    </CRow>
  )
}
```

## Disabled

Add the `disabled` boolean attribute on an input to give it a grayed out appearance and remove pointer events.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerDisabledExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker disabled locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Readonly

Add the `readOnly` boolean attribute to prevent modification of the field's value. The time selection still opens, so the value can be read but not typed over.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerReadonlyExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker readOnly locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Min and max times

Constrain the times the user can pick with `minDate` and `maxDate`, given as time strings like `'09:30'` or as dates, of which only the time of day counts. The panel disables the hours that hold no allowed time and, once an hour is chosen, the minutes and seconds outside the range, and a time picked in the panel that crosses a limit moves to it. A time typed in the field outside the range gets the `.is-invalid` class, `onTimeChange` reports `null` and the picker submits no time until the value is corrected. A `maxDate` at midnight covers the whole day; any other `maxDate` before the `minDate` leaves no time to pick.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerMinMaxExample = () => {
  return (
    <CRow>
      <CCol lg={4}>
        <CTimePicker
          label="Opening hours (09:30–17:00)"
          locale="en-GB"
          maxDate="17:00"
          minDate="09:30"
          seconds={false}
        />
      </CCol>
    </CRow>
  )
}
```

## Validation

The picker takes its validation state [the way the date picker does](../date-picker/#validation): `validationState` gives `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, with `invalid` and `valid` as deprecated aliases that ask to be dropped the same way, though only `validationState` can be cleared by the setter you pass. When the user changes the time, with a time picked in the panel, the cleaner, a footer button that changes the time through the context, or typing in the field, or the form is reset, the picker calls `onValidationStateChange(undefined)` before `onTimeChange`, while a change your code makes through `time` asks nothing. While the given state is `'invalid'`, the sections of the field carry `aria-invalid="true"`, are described by the message after the picker, and the picker blocks the submit with its text, or `Invalid value.` when there is none.

```html
import React, { useState } from 'react'
import { CButton, CCol, CForm, CTimePicker } from '@coreui/react-pro'

export const TimePickerValidationExample = () => {
  const [roomState, setRoomState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <CCol lg={4}>
        <CTimePicker
          feedbackInvalid="Please provide a meeting time."
          label="Meeting time (required)"
          locale="en-US"
          name="meeting"
          required
        />
      </CCol>
      <CCol lg={4}>
        <CTimePicker
          defaultTime="12:30:00"
          feedback="The room is taken at this time."
          label="Room booking"
          locale="en-US"
          name="room"
          onValidationStateChange={setRoomState}
          validationState={roomState}
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

## Custom formats

### Disable minutes and seconds

Customize React Time Picker to display only hours, or hours and minutes by disabling minutes/seconds.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerDisableMinutesAndSecondsExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={4}>
        <CTimePicker label="Only hours and minutes" locale="en-US" seconds={false} />
      </CCol>
      <CCol sm={6} lg={4}>
        <CTimePicker label="Only hours" locale="en-US" minutes={false} seconds={false} />
      </CCol>
    </CRow>
  )
}
```

### Custom hours, minutes and seconds

Tailor the React Time Picker to your needs by specifying custom values for hours, minutes, and seconds. Use arrays to define selectable options or functions for dynamic filtering. Hours are 0 to 23 in every locale. On a 12-hour clock the column still lists 1 to 12 next to AM/PM: picking an hour that only one period allows sets that period, and the period the picked hour does not allow is disabled, so the example below offers 8 AM to 4 PM, minutes in quarters and seconds under 20.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerCustomHoursMinutesAndSecondsExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker
          locale="en-US"
          hours={[8, 9, 10, 11, 12, 13, 14, 15, 16]}
          minutes={[0, 15, 30, 45]}
          seconds={(s) => s < 20}
        />
      </CCol>
    </CRow>
  )
}
```

## Locale

Tailor the React Time Picker to match different locales, offering an inclusive user experience across diverse languages. Automatically adapt or set specific locales to meet your application's needs.

The locale decides whether the field and the time columns use a 12-hour or a 24-hour clock, and names the day periods in its own words, 오전 and 오후 in Korean. A `format` pins the clock in every locale, `'HH:mm'` for 24 hours and `'hh:mm a'` for 12.

### Auto

Our Time Picker component automatically detects and adapts to the user's locale, ensuring a localized experience without explicit configuration.

With server-side rendering, pass `locale` explicitly: by default the server writes the text in its own locale and the browser in the reader's, and React reports a hydration mismatch when the two differ.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleAutoExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker />
      </CCol>
    </CRow>
  )
}
```

### Chinese

Specify the locale to Chinese (`zh-CN`) for users in China, enhancing usability with a familiar format and language.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleChineseExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker label="入住日期" locale="zh-CN" />
      </CCol>
    </CRow>
  )
}
```

### Japanese

Set the Time Picker's locale to Japanese (`ja`) to cater to Japanese users, presenting date and time in a localized format.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleJapaneseExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker label="日付を選択" locale="ja" />
      </CCol>
    </CRow>
  )
}
```

### Korean

Configure the locale to Korean (`ko`) for a tailored experience in Korea, offering date and time selection in the local language.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleKoreanExample = () => {
  return (
    <CRow>
      <CCol sm={6} lg={4}>
        <CTimePicker label="날짜 선택" locale="ko" />
      </CCol>
    </CRow>
  )
}
```

This approach ensures that our React TimePicker component is versatile and adaptable, providing a seamless and intuitive interface for users worldwide.

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

Optimize the Time Picker for Hebrew-speaking users with RTL layout. Set the locale to Hebrew (`he-IL`) and apply RTL direction to align with Hebrew script.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocaleHebrewExample = () => {
  return (
    <CRow dir="rtl">
      <CCol sm={6} lg={4}>
        <CTimePicker label="בחר תאריך" locale="he-IL" />
      </CCol>
    </CRow>
  )
}
```

### Persian

Adapt the Time Picker for Persian-speaking audiences by enabling RTL layout. Customize the locale to Persian (`fa-IR`) and utilize RTL directionality for seamless integration.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerLocalePersianExample = () => {
  return (
    <CRow dir="rtl">
      <CCol sm={6} lg={4}>
        <CTimePicker label="تاریخ شروع" locale="fa-IR" />
      </CCol>
    </CRow>
  )
}
```

## Controlled and uncontrolled

_Added in 6.0.0._

The popup works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open state |
| --- | --- | --- |
| Uncontrolled | `defaultShow` | the picker, from that starting point |
| Controlled | `show` | your component |

`onShowChange` fires in **both** modes whenever the popup requests an open-state change — a dismiss gesture (Escape, a click outside) or, in uncontrolled mode, any internal toggle — so you can watch the state without taking it over. The deprecated `visible` prop keeps its old behavior and is ignored when `defaultShow` or `show` is set.

### Uncontrolled

Every example above is uncontrolled — the picker manages its own popup. `defaultShow` seeds it open on mount.

```jsx
<CTimePicker defaultShow />
```

### Controlled

Pass `show` and the popup renders what you pass — dismiss gestures only call `onShowChange`, so feed the change back, or nothing closes. Here a checkbox pins the popup open, and a dismiss gesture unchecks it.

```html
import React, { useState } from 'react'
import { CCheckbox, CCol, CFormField, CRow } from '@coreui/react'
import { CTimePicker } from '@coreui/react-pro'

export const TimePickerControlledExample = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <CFormField className="mb-4">
        <CCheckbox
          checked={show}
          id="timePickerControlledShow"
          label="Keep the popup open"
          onChange={(event) => setShow(event.target.checked)}
        />
      </CFormField>
      <CRow>
        <CCol sm={6} lg={4}>
          <CTimePicker label="Time" locale="en-US" onShowChange={setShow} show={show} />
        </CCol>
      </CRow>
    </>
  )
}
```

Use it when the open state belongs to something else — a route, a tour step, or a control outside the picker like the checkbox above.

## Accessibility

The field is a group of spinbutton sections, so its own arrow keys belong to the value and the popup opens on the native control's dropdown keys instead. The field takes its name from an `aria-labelledby` or `aria-label` you pass to the picker, otherwise from `floatingLabel` or, without one, from `label`, and it is described by an `aria-describedby` you pass to the picker, then by `text` and the feedback that matches its state. Clicking the label that names the field moves focus to its first empty section.

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the field when it closes.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the popup and move focus into it |
| <kbd>Escape</kbd> | Close the popup and return focus to the field |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open panel; the field is outside the dialog and stays out of the cycle |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused value |

The roll is one composite: each column is a listbox, a roving tabindex keeps a single stop for the whole body, and the arrows do the rest: <kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> walk the column, <kbd>Home</kbd> / <kbd>End</kbd> jump to its ends, and <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> move between columns — mirrored under RTL. While the field is empty no option is selected, and the tab stop and each column start on their first option the limits allow. Selecting a value hands focus to the next column, so a time is set in one pass.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTimePicker /&gt;](./api/#ctimepicker)
