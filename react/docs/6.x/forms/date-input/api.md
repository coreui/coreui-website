# React Date Input Component API

> Explore the API reference for the React Date Input component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CDateInput

```jsx
import { CDateInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `autoFocus` | `boolean` | - | Focus the first section right after mounting, like the native `autofocus` attribute. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `date` | `string \| Date \| null` | - | The controlled date — a `Date` or a date string like `'2026-07-14'`, one with a time part like `'2026-07-14 14:30'` on `type="datetime"`, or a time string like `'14:30'` on `type="time"`. Pair it with `onDateChange`; for the uncontrolled mode use `defaultDate` instead. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `defaultDate` | `string \| Date \| null` | - | The initial date for the uncontrolled mode. Ignored when `date` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | - | Specify the list of dates that cannot be selected. It can be a single `Date`, an `[start, end]` range, a matcher function, or an array of these. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `floatingLabel` | `ReactNode` | - | Provide a floating label for the component — the text rests inside the field and floats once it has focus or a value. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `format` | `string \| ((locale: string) => DateSection[])` | - | The mask layout. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `inputDateParse` | `((value: string) => Date \| null)` | - | Custom function to parse text pasted into the field into a `Date` object, e.g. with an external date library. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `locale` | `string` | `default` | Sets the default locale for the component. If not set, it is inherited from the browser. |
| `maxDate` | `string \| Date \| null` | - | Max selectable date. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | `string \| Date \| null` | - | Min selectable date. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `monthNames` | `string[]` | - | Twelve custom month names for text month sections (`MMM`/`MMMM`), overriding the locale-derived, date-context grammatical form. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `name` | `string` | - | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `onDateChange` | `((date: Date \| null, formattedDate?: string \| undefined) => void)` | - | Callback fired when the date changes; receives the `Date` (or `null` while incomplete or invalid) and the formatted value. |
| `onError` | `((error: DateInputError) => void)` | - | Callback fired when the validation state changes; receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty. When one change moves both the value and the validation state, it fires after the change callback, so a value set from it replaces the one just reported. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the value, or the form is reset, while `validationState` is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean` | `false` | Include a seconds section in the locale-derived time layout. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `'date' \| 'datetime' \| 'time'` | `date` | Which sections the locale-derived layout carries. A `format` names the sections itself and overrides this. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` on every section and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. A field of a date range whose end is before its start draws no other state. The user's next change of the value asks to drop it through `onValidationStateChange`. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |
