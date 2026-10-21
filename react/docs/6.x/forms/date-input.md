# React Date Input Component

> Create React date fields with a section-based input mask. Users type the day, month, and year in separate sections with automatic navigation and validation — like the native date input, but with full control over the format.

## Example

_Added in 5.27.0._

The React Date Input component renders a masked date field. The mask is split into day, month, and year sections — click or focus a section and type, use arrow keys to adjust values, and the caret moves to the next section automatically.

By default, the section order and separators are derived from the user's locale, so `12/31/2026` in `en-US` becomes `31.12.2026` in `de-DE` without any configuration.

The component follows the standard React controlled/uncontrolled pattern: use `defaultDate` for an uncontrolled field, or pair `date` with `onDateChange` for a controlled one — a committed change the parent doesn't accept is reverted, and `date` is compared by timestamp, so an inline `new Date(...)` re-created on every render doesn't disturb typing. A native reset of the form asks a controlled field for the `date` it started with through `onDateChange`.

A field holds what its format shows. The time of day of a `date` given to a field without a time is not kept: the first change the user makes reaches `onDateChange` at midnight, and a format with a time set later shows 00:00. Use `type="datetime"` or a format with a time when the time matters.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDateInput label="Delivery date" locale="en-US" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput defaultDate="2022-08-17" label="Delivery date" locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

## Date and time

Set `type="datetime"` and the field carries the time as well. The hour cycle follows the locale, so a 12-hour locale gets an AM/PM section and a 24-hour one does not. Everything else on this page applies unchanged: the same typing, the same arrow keys, the same `onDateChange`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputDateTimeExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDateInput label="Appointment" locale="en-US" type="datetime" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput
          defaultDate="2026-07-14 14:30"
          label="Appointment"
          locale="en-US"
          type="datetime"
        />
      </CCol>
    </CRow>
  )
}
```

Add `seconds` for a seconds section:

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputSecondsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateInput label="Timestamp" seconds type="datetime" />
      </CCol>
    </CRow>
  )
}
```

`type="time"` keeps only the time sections. That is the field [`<CTimeInput>`](https://coreui.io/react/docs/forms/time-input/) renders, with `time` and `onTimeChange` in place of `date` and `onDateChange`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputTimeExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateInput label="Opening hour" type="time" />
      </CCol>
    </CRow>
  )
}
```

A `format` overrides the type, because it names the sections itself. [`<CDateRangeInput>`](https://coreui.io/react/docs/forms/date-range-input/) takes both props too, so a range with time is the same two props on the range component.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
import React from 'react'
import { CFormField, CFormText } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputFormFieldExample = () => {
  return (
    <CFormField>
      <span className="form-label">Delivery date</span>
      <CDateInput locale="en-US" name="deliveryDate" />
      <CFormText>We deliver on working days only.</CFormText>
    </CFormField>
  )
}
```

## Formats

Set an explicit format with the `format` property. The parser accepts both dayjs/moment-style tokens (`DD`, `MM`, `YYYY`, `YY`) and date-fns/Unicode-style tokens (`dd`, `MM`, `yyyy`, `yy`), so you can reuse the format strings from the date library you already use. Any other character becomes a literal separator.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputFormatsExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-lg-0" lg={4}>
        <CDateInput format="dd.MM.yyyy" label="dd.MM.yyyy" />
      </CCol>
      <CCol className="mb-4 mb-lg-0" lg={4}>
        <CDateInput format="YYYY-MM-DD" label="YYYY-MM-DD" />
      </CCol>
      <CCol lg={4}>
        <CDateInput format="MM/DD/YY" label="MM/DD/YY" />
      </CCol>
    </CRow>
  )
}
```

Two-digit year sections expand with smart century assignment — values up to 50 years in the future resolve to the current century, older ones to the previous century.

The format doesn't have to include every section — a month-and-year mask works like the native `month` input and reports the first day of the month:

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputPartialMasksExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDateInput format="MM.yyyy" label="MM.yyyy" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput format="MMMM yyyy" label="MMMM yyyy" locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

For picking whole weeks, use the [date picker](../date-picker/) with `selectionType="week"` — a masked week-number field has no native or MUI equivalent and isn't supported.

## Month names

Use the `MMM` or `MMMM` tokens for text month sections with localized short or full month names. Type letters to match a month by prefix — `m` selects <strong>M</strong>arch, continuing with `may` switches to <strong>May</strong> — and the caret moves on as soon as the prefix is unambiguous. Digits and arrow keys keep working too.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputMonthNamesExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDateInput format="DD MMMM YYYY" label="DD MMMM YYYY" locale="en-US" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput format="MMM D, YYYY" label="MMM D, YYYY" locale="en-US" />
      </CCol>
    </CRow>
  )
}
```

Month names default to the grammatical form used inside a full date — e.g. Polish shows the genitive `14 lipca 2026`, not the standalone `lipiec`. To use a different form (or your own localization), pass all twelve names through the `monthNames` property; they are used for display, letter matching, and paste alike.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputMonthNamesCustomExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateInput
          format="DD MMMM YYYY"
          label="Standalone Polish month names"
          locale="pl-PL"
          monthNames={[
            'styczeń',
            'luty',
            'marzec',
            'kwiecień',
            'maj',
            'czerwiec',
            'lipiec',
            'sierpień',
            'wrzesień',
            'październik',
            'listopad',
            'grudzień',
          ]}
        />
      </CCol>
    </CRow>
  )
}
```

## Locale

Without an explicit format, the mask follows the locale set via the `locale` property.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputLocalesExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-lg-0" lg={4}>
        <CDateInput label="en-US" locale="en-US" />
      </CCol>
      <CCol className="mb-4 mb-lg-0" lg={4}>
        <CDateInput label="pl-PL" locale="pl-PL" yearPlaceholder="RRRR" />
      </CCol>
      <CCol lg={4}>
        <CDateInput label="ja-JP" locale="ja-JP" />
      </CCol>
    </CRow>
  )
}
```

## Min and max dates

Constrain the selectable range with `minDate` and `maxDate`. A completed date outside the range gets the `.is-invalid` class and the component reports `null` until the value is corrected. A date field compares the limits by the day. A field with a time compares them to the smallest unit it shows, and there a `maxDate` without a time of day covers its whole day.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputMinMaxExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateInput
          format="dd.MM.yyyy"
          label="Date in July 2026"
          maxDate="2026-07-31"
          minDate="2026-07-01"
        />
      </CCol>
    </CRow>
  )
}
```

## Disabled dates

Beyond a simple range, the `disabledDates` property excludes specific dates — single `Date`s, `[start, end]` ranges, or a matcher function. Unlike in the [date picker](../date-picker/#disabled-dates), there is no calendar to gray out: a completed date that hits a disabled entry gets the `.is-invalid` class and the component reports `null` until the value is corrected.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputDisabledDatesExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDateInput
          defaultDate={new Date(2026, 6, 10)}
          disabledDates={[[new Date(2026, 6, 4), new Date(2026, 6, 7)], new Date(2026, 6, 16)]}
          format="dd.MM.yyyy"
          label="Delivery date"
          maxDate={new Date(2026, 6, 31)}
          minDate={new Date(2026, 6, 1)}
        />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput
          disabledDates={(date: Date) => date.getDay() === 0 || date.getDay() === 6}
          format="dd.MM.yyyy"
          label="Business day"
        />
      </CCol>
    </CRow>
  )
}
```

## Custom formats

The built-in token parser covers dayjs, moment, date-fns, and luxon format strings for date masks, so you can reuse the format string from the date library you already work with — the library itself isn't required to render or edit the mask. Pair it with `inputDateParse` when you want that library to also parse text pasted into the field, here with `date-fns`:

```html
import React from 'react'
import { parse } from 'date-fns'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputCustomFormatsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateInput
          defaultDate={new Date(2022, 8, 3)}
          format="MMMM DD, YYYY"
          inputDateParse={(value) => parse(value, 'MMMM dd, yyyy', new Date())}
          label="date-fns format"
          locale="en-US"
        />
      </CCol>
    </CRow>
  )
}
```

## Validation

The field shows its validation state on the element and on its sections, and links the message that follows it, the way [`<CForm>`](../validation/) does for a native field. It keeps its value in a `<textarea>` laid invisibly over the field, which takes part in native constraint validation: a `required` field that is empty, incomplete or holds a rejected date blocks the submit, and the browser, or `<CForm>`, puts focus on its first empty section, the browser with its own message over the field. A field that is not required does not block, and submits no date while it rejects one.

```html
import React, { useState } from 'react'
import { CButton, CCol, CDateInput, CForm } from '@coreui/react-pro'

export const DateInputValidationExample = () => {
  const [pickupState, setPickupState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <CCol sm={6} lg={5}>
        <CDateInput
          feedbackInvalid="Please provide a delivery date."
          format="dd.MM.yyyy"
          label="Delivery date (required)"
          name="delivery"
          required
        />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput
          defaultDate="2026-07-20"
          feedback="We have no pickup slots left on this date."
          format="dd.MM.yyyy"
          label="Pickup date"
          name="pickup"
          onValidationStateChange={setPickupState}
          validationState={pickupState}
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

The state comes from four places, in this order:

- The limits: a completed date outside `minDate`/`maxDate`/`disabledDates` makes the field invalid until it is corrected, whatever else is set, whether the user typed it or the field got it through its value, and again when the limits change. Until then the value field submits no date, also in a read-only field. A date before year 1 counts as before `minDate` even without that prop; when the field loses the focus, its year becomes 1.
- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, for example after a server has checked the date.
- A validation that reports the field invalid: a submit, `checkValidity()` or `reportValidity()`, which `<CForm>` and the [stepper](../stepper/) call as well. From then on the field shows it invalid whenever its date is invalid, until a native reset of the form.
- In a form with the `validate` property of `<CForm>` (the `data-coreui-validate` attribute), the `:user-invalid` and `:user-valid` states of the value field, the same states the stylesheet reads on a native field. A field becomes `.is-valid` only when the form opts into success styling with `validate="valid"`.

A state you give is a verdict on the date it was given for. When the user changes the date, with a typed digit or letter, an arrow, <kbd>Backspace</kbd> or <kbd>Delete</kbd>, a paste or a cut, or the form is reset, the component calls `onValidationStateChange(undefined)` before `onDateChange`; pass your state setter there to drop the state, as the second field above does. A key that leaves the field as it is asks nothing, and neither does a change your code makes through `date`. While the given state is `'invalid'`, the field blocks the submit like any invalid field, with the text of the linked message, or `Invalid value.` when there is none; a custom validity you set on the value field yourself stays as it is, and a disabled or read-only field does not block. An `aria-invalid` you pass is not read as a state. A native form reset returns the field to the date it started with; a `reset` listener that calls `preventDefault()` cancels the whole reset. A controlled field (`date` with `onDateChange`) keeps the value your page gives it, like a controlled `<input>`.

While the field is invalid, its `feedbackInvalid` text and an `.invalid-feedback` or `.invalid-tooltip` you render after the field yourself describe every section, so a screen reader reads the error with the field. A message rendered later, while the field stays invalid, is picked up when the field next renders, as it does when a parent of the field renders the message in reply to `onError`.

To react to validation transitions programmatically, use the `onError` callback: it receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty.

## Floating labels

Use the `floatingLabel` property. When the field is empty and not focused, the mask placeholders are hidden so the label can rest inside the field; focusing the field floats the label and reveals the mask.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputFloatingLabelsExample = () => {
  return (
    <CRow>
      <CCol lg={5}>
        <CDateInput floatingLabel="Delivery date" format="dd.MM.yyyy" id="floatingDateInput" />
      </CCol>
    </CRow>
  )
}
```

Set `floatingLabelAlways` to keep the label [always floating](https://coreui.io/react/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

The field renders as a `.form-control`, so the standard sizing works — set the `size` property to `lg` or `sm`.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputSizingExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-lg-0" lg={4}>
        <CDateInput format="dd.MM.yyyy" label="Large" size="lg" />
      </CCol>
      <CCol className="mb-4 mb-lg-0" lg={4}>
        <CDateInput format="dd.MM.yyyy" label="Default" />
      </CCol>
      <CCol lg={4}>
        <CDateInput format="dd.MM.yyyy" label="Small" size="sm" />
      </CCol>
    </CRow>
  )
}
```

## Disabled and readonly

Set the `disabled` property to disable the field, or `readOnly` to make it focusable but non-editable.

```html
import React from 'react'
import { CCol, CRow } from '@coreui/react'
import { CDateInput } from '@coreui/react-pro'

export const DateInputDisabledReadonlyExample = () => {
  return (
    <CRow>
      <CCol className="mb-4 mb-sm-0" sm={6} lg={5}>
        <CDateInput defaultDate="2026-07-14" disabled format="dd.MM.yyyy" label="Disabled" />
      </CCol>
      <CCol sm={6} lg={5}>
        <CDateInput defaultDate="2026-07-14" format="dd.MM.yyyy" label="Readonly" readOnly />
      </CCol>
    </CRow>
  )
}
```

## Accessibility

The date input implements the [spinbutton pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) per section, mirroring the internal structure of the native date input:

- **Role attributes**: the container has `role="group"`, every section is a `role="spinbutton"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` (month sections announce the localized month name).
- **Roving tabindex**: the whole field is a single tab stop; arrow keys move between sections.
- **Labels**: `label` and `floatingLabel` name the group through `aria-labelledby`, and an `aria-labelledby` or `aria-label` you pass wins over both; without an `aria-label`, or with an empty one, the group also carries `aria-label="Date input"` (`Date and time input` with `type="datetime"`, `Time input` with `type="time"`), the name it is announced by when nothing else names it. Sections receive `aria-label`s (`Day`, `Month`, `Year`), each replaceable on its own — `ariaDayLabel`, `ariaMonthLabel`, `ariaYearLabel` — for localization.
- **Label click**: clicking the `label`, a `<label>` or `.form-label` an `aria-labelledby` you pass points at, or a `<label htmlFor>` pointing at the field's `id` moves focus to the first empty section, as clicking the label of an input focuses it.
- **Validity**: while the field is invalid (a date outside `minDate` / `maxDate` or in `disabledDates`, typed, pasted or given as the value, a date before year 1, `validationState="invalid"`, or a `required` field a validation has reported and that is still empty), every section carries `aria-invalid="true"`; the group, which takes no focus, carries none, and an `aria-invalid` you set on the field is not read. A disabled or read-only field is never reported as missing. With `required`, every section carries `aria-required="true"`.
- **Description**: the field is described by the `aria-describedby` you set, then its `text`, then the feedback that matches its state; that description reaches the first section, and every section while the field is invalid, together with an error message you render after the field, so the error is read wherever the focus sits.
- **Mobile input**: sections use `inputmode="numeric"`, so touch devices show the numeric keyboard.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>0</kbd>–<kbd>9</kbd> | Type into the focused section; the caret advances when the section is complete |
| <kbd>A</kbd>–<kbd>Z</kbd> | In text month sections, match a month name by prefix; the caret advances when the prefix is unambiguous |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Increment / decrement the focused section, wrapping day and month around their bounds; an empty year starts at the current year |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous section; in a right-to-left layout the two keys swap |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last section |
| <kbd>Backspace</kbd> | Clear the focused section; move to the previous section when already empty |
| <kbd>Delete</kbd> | Clear the focused section |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> / <kbd>Cmd</kbd> + <kbd>A</kbd> | Select the whole value; <kbd>Backspace</kbd> then clears all sections, typing restarts from the first section |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>C</kbd> | Copy the selection — the whole formatted value after <kbd>Ctrl</kbd> + <kbd>A</kbd> |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste a date and fill all sections |

Apart from the shortcuts in the table, a key pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> changes nothing in the field and is not cancelled: arrows, <kbd>Home</kbd> and <kbd>End</kbd> move no focus and change no section, and a digit or letter is not entered. The key stays free for the browser, assistive technology and the picker around the field, where <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> opens the calendar. A character that <kbd>AltGr</kbd> or <kbd>Option</kbd> composes is still entered.
