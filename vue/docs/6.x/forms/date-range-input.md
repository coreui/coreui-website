# Vue Date Range Input Component

> Create a Vue start and end date field in one frame. Both ends use the section-based mask of the date input, and the range is validated as a whole.

## Example

_Added in 6.0.0._

The Vue Date Range Input component is two [date input](../date-input/) fields and a separator in one frame, held together by the range it owns: both ends share the mask and the limits, and an end before the start marks the whole field invalid.

Pass `start-date` and `end-date` one-way and they seed the fields, which keep managing themselves from there; bind them with `v-model:start-date` / `v-model:end-date` and the fields follow your state; the `start-date-change` / `end-date-change` events alone only report what the fields do. A native reset of the form puts back the date each end started with, and a bound end only asks for it.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateRangeInput label="Stay" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput end-date="2026-07-20" label="Stay" locale="en-US" start-date="2026-07-14" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

## Date and time

Set `type="datetime"` and both ends carry the time. The hour cycle follows the locale, and `seconds` adds a seconds section to each field. The range compares its two ends by instant, so an end earlier in the day than the start on the same date marks the field invalid.

```html
<template>
  <div class="row">
    <div class="col-lg-7">
      <CDateRangeInput
        end-name="shift-end"
        label="Shift"
        locale="en-US"
        start-name="shift-start"
        type="datetime"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CFormField>
        <CFormLabel id="dateRangeInputStayLabel">Stay</CFormLabel>
        <CDateRangeInput
          aria-labelledby="dateRangeInputStayLabel"
          end-name="stayEnd"
          locale="en-US"
          start-name="stayStart"
        />
        <CFormText>Check-out has to be on or after check-in.</CFormText>
      </CFormField>
    </div>
  </div>
</template>

<script setup>
import { CFormField, CFormLabel, CFormText } from '@coreui/vue'
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

## Formats

Set an explicit mask for both ends with the `format` property. The parser is the [date input's](../date-input/#formats), so dayjs/moment tokens (`DD`, `MM`, `YYYY`) and date-fns/Unicode tokens (`dd`, `MM`, `yyyy`) both work, and any other character becomes a literal separator.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateRangeInput format="dd.MM.yyyy" label="dd.MM.yyyy" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput format="YYYY-MM-DD" label="YYYY-MM-DD" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

A mask that leaves out sections works here too — a month-and-year range reports the first day of each month:

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangeInput format="MM.yyyy" label="Reporting period" locale="en-US" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

For picking a whole range on a calendar, use the [date range picker](../date-range-picker/).

## Month names

Use the `MMM` or `MMMM` tokens for text month sections in both ends; typing letters matches a month by prefix. Pass all twelve names through the `month-names` property to override the locale-derived, date-context grammatical form.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateRangeInput format="DD MMMM YYYY" label="DD MMMM YYYY" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput
        format="DD MMMM YYYY"
        label="Standalone Polish month names"
        locale="pl-PL"
        :month-names="monthNames"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'

const monthNames = [
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
]
</script>
```

## Locale

Without an explicit format, both masks follow the locale set via the `locale` property.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateRangeInput label="en-US" locale="en-US" />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput label="ja-JP" locale="ja-JP" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

## Min and max dates

`min-date` and `max-date` constrain both ends. A completed date outside the range gets the `.is-invalid` class on its own field and that end reports `null` until the value is corrected.

```html
<template>
  <div class="row">
    <div class="col-lg-5">
      <CDateRangeInput
        format="dd.MM.yyyy"
        label="Dates in July 2026"
        locale="en-US"
        :max-date="maxDate"
        :min-date="minDate"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'

const minDate = new Date(2026, 6, 1)
const maxDate = new Date(2026, 6, 31)
</script>
```

## Disabled dates

Beyond a simple range, the `disabled-dates` property excludes specific dates from both ends — single `Date`s, `[start, end]` ranges, or a matcher function.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateRangeInput
        :disabled-dates="disabledDates"
        format="dd.MM.yyyy"
        label="Stay"
        locale="en-US"
        :max-date="maxDate"
        :min-date="minDate"
        :start-date="startDate"
      />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput
        :disabled-dates="disableWeekends"
        format="dd.MM.yyyy"
        label="Business days"
        locale="en-US"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'

const startDate = new Date(2026, 6, 10)
const minDate = new Date(2026, 6, 1)
const maxDate = new Date(2026, 6, 31)
const disabledDates = [[new Date(2026, 6, 4), new Date(2026, 6, 7)], new Date(2026, 6, 16)]
const disableWeekends = (date) => date.getDay() === 0 || date.getDay() === 6
</script>
```

## Custom formats

The built-in token parser covers dayjs, moment, date-fns, and luxon format strings, so you can reuse the format string from the date library you already work with — the library itself isn't required to render or edit the masks. Pair it with `input-date-parse` when you want that library to also parse text pasted into either end, here with `date-fns`:

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangeInput
        :end-date="endDate"
        format="MMMM DD, YYYY"
        :input-date-parse="inputDateParse"
        label="date-fns format"
        locale="en-US"
        :start-date="startDate"
      />
    </div>
  </div>
</template>

<script setup>
import { parse } from 'date-fns'
import { CDateRangeInput } from '@coreui/vue-pro'

const startDate = new Date(2026, 6, 14)
const endDate = new Date(2026, 6, 20)
const inputDateParse = (value) => parse(value, 'MMMM dd, yyyy', new Date())
</script>
```

## Validation

The frame shows the state of the range and each field shows its own, the way [`<CForm>`](../validation/) does for a native field. Each end keeps its value in a `<textarea>` laid invisibly over its field, which takes part in native constraint validation: a `required` end that is empty, incomplete or holds a rejected date blocks the submit, and the browser, or `<CForm>`, puts focus on its first empty section.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput
        :end-date="endBeforeStart"
        end-name="check-out"
        feedback-invalid="Check-out has to be on or after check-in."
        format="dd.MM.yyyy"
        label="Out of order"
        locale="en-US"
        :start-date="start"
        start-name="check-in"
      />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput
        v-model:validation-state="stayState"
        :end-date="end"
        end-name="to"
        feedback="Those dates are already booked."
        format="dd.MM.yyyy"
        label="Stay"
        locale="en-US"
        :start-date="start"
        start-name="from"
      />
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CDateRangeInput, CForm } from '@coreui/vue-pro'

const start = new Date(2026, 6, 20)
const end = new Date(2026, 6, 21)
const endBeforeStart = new Date(2026, 6, 14)
const stayState = ref('invalid')
</script>
```

The state comes from these places, in this order:

- The order: an end before the start is a state of the range, not of either date, and only dates the limits accept take part in it, so `.is-invalid` lands on the frame and both fields stay editable. Every section of both fields carries `aria-invalid="true"` until the order is fixed, and neither field is drawn valid meanwhile, whatever else is set.
- The limits: a completed date outside `min-date`/`max-date`/`disabled-dates` makes its own field invalid, which the frame picks up, and that field's value field submits no date until it is corrected. A date before year 1 counts as before `min-date` even without that prop; when the field loses the focus, its year becomes 1.
- `validation-state`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, a verdict on the whole range that lands on the frame and on both ends.
- A validation that reports a field (a submit, `checkValidity()` or `reportValidity()`, which `<CForm>` and the [stepper](../stepper/) call as well), and in a form with the `validate` property of `<CForm>` the `:user-invalid` state of each value field, with `validate="valid"` also its `:user-valid` state, as for the [date input](../date-input/#validation).

A state you give is a verdict on the range it was given for. When the user changes either end, or the form is reset, the component emits `update:validationState` with `undefined` before it reports the change; bind the state with `v-model:validation-state` to drop it from both ends and the frame, as the second range above does. A change your code makes through `start-date` or `end-date` emits nothing. While the given state is `'invalid'`, both ends block the submit with the text of the message after the frame, or `Invalid value.` when there is none, unless the range is disabled or read-only. A native form reset returns both ends to the dates they started with; a `reset` listener that calls `preventDefault()` cancels the whole reset. An end bound with `v-model:start-date`/`v-model:end-date` only asks for the date it started with and keeps the value your page gives it until the page takes it; an end that only reports through its change event goes back to that date itself.

While an end is invalid, an `.invalid-feedback` or `.invalid-tooltip` you render after the range describes each of its sections.

### Blocking the submit

A `required` end that is empty, incomplete or rejected by the limits blocks the submit by itself. An end before the start does not, since both ends hold dates the browser accepts, and neither does an optional end that is empty, incomplete or rejected, which submits no date. Check the dates before you send them; the `start-date-change` and `end-date-change` events report `null` for an end that is empty, incomplete or rejected, so one condition covers both:

```vue
<script setup lang="ts">
import { ref } from 'vue'

const start = ref<Date | null>(null)
const end = ref<Date | null>(null)

const onSubmit = (event: Event) => {
  if (!start.value || !end.value || end.value < start.value) {
    event.preventDefault()
  }
}
</script>

<template>
  <CForm @submit="onSubmit">
    <CDateRangeInput @end-date-change="end = $event" @start-date-change="start = $event" />
    <CButton type="submit">Book</CButton>
  </CForm>
</template>
```

## Floating labels

Each end can carry its own [floating label](https://coreui.io/vue/docs/forms/floating-labels/) through `start-floating-label` and `end-floating-label`; the text is also that end's accessible name.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangeInput
        end-floating-label="Check-out"
        locale="en-US"
        start-floating-label="Check-in"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

Set `floatingLabelAlways` to keep both labels [always floating](https://coreui.io/vue/docs/forms/floating-labels/#always-floating) with the masks showing.

## Separator

The `separator` slot replaces the arrow between the two ends with a word, an icon of your own, or anything else you render. It is hidden from assistive technology either way. Left out, the default arrow renders and flips for right-to-left.

```html
<template>
  <div class="row">
    <div class="col-lg-6">
      <CDateRangeInput label="Stay" locale="en-US">
        <template #separator>
          <span class="fg-2">to</span>
        </template>
      </CDateRangeInput>
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

## Sizing

The frame is a `.form-control-group`, so the standard sizing works — set the `size` property to `lg` or `sm` and both ends follow.

```html
<template>
  <div class="row">
    <div class="col-lg-6 mb-4">
      <CDateRangeInput label="Large" locale="en-US" size="lg" />
    </div>
    <div class="col-lg-6">
      <CDateRangeInput label="Small" locale="en-US" size="sm" />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'
</script>
```

## Disabled and readonly

Set the `disabled` property to disable both ends, or `read-only` to make them focusable but non-editable.

```html
<template>
  <div class="row">
    <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
      <CDateRangeInput
        disabled
        :end-date="endDate"
        format="dd.MM.yyyy"
        label="Disabled"
        locale="en-US"
        :start-date="startDate"
      />
    </div>
    <div class="col-sm-6 col-lg-5">
      <CDateRangeInput
        :end-date="endDate"
        format="dd.MM.yyyy"
        label="Readonly"
        locale="en-US"
        read-only
        :start-date="startDate"
      />
    </div>
  </div>
</template>

<script setup>
import { CDateRangeInput } from '@coreui/vue-pro'

const startDate = new Date(2026, 6, 14)
const endDate = new Date(2026, 6, 20)
</script>
```

## Accessibility

Each end is a [date input](../date-input/#accessibility) with the spinbutton pattern per section, so the range is two labelled groups rather than one opaque control:

- **Role attributes**: each end has `role="group"`, every section is a `role="spinbutton"` with its value attributes.
- **Names**: `label` names the pair, because the frame around both ends is a `role="group"` pointing at it; the start and end are named separately — `aria-start-label` and `aria-end-label` by default, or the floating label text when one is set. Each end is described by an `aria-describedby` you pass, then by `text` and the feedback that matches the state of the range.
- **Label click**: clicking the label that names the pair moves focus to the first empty section of the start date, as clicking the label of an input focuses it.
- **Separator**: hidden from assistive technology, whatever you render into it.
- **Roving tabindex**: each end is a single tab stop; <kbd>Tab</kbd> moves from the start to the end.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>0</kbd>–<kbd>9</kbd> | Type into the focused section; the caret advances when the section is complete |
| <kbd>A</kbd>–<kbd>Z</kbd> | In text month sections, match a month name by prefix |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Increment / decrement the focused section |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous section, crossing the separator from the last section of the start date into the end date and back; in a right-to-left layout the two keys swap |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last section of the focused end |
| <kbd>Backspace</kbd> | Clear the focused section; move to the previous section when already empty |
| <kbd>Delete</kbd> | Clear the focused section |
| <kbd>Tab</kbd> | Move from the start date to the end date |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> / <kbd>Cmd</kbd> + <kbd>A</kbd> | Select the whole value of the focused end |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste a date into the focused end |

Apart from the shortcuts in the table, a key pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> changes nothing in the field and is not cancelled: arrows, <kbd>Home</kbd> and <kbd>End</kbd> move no focus and change no section, and a digit or letter is not entered. The key stays free for the browser, assistive technology and the picker around the field, where <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> opens the calendar. A character that <kbd>AltGr</kbd> or <kbd>Option</kbd> composes is still entered.
