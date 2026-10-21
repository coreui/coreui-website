# React Date Range Input Component API

> Explore the API reference for the React Date Range Input component and discover how to effectively utilize its props for customization.

## CDateRangeInput

```jsx
import { CDateRangeInput } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaEndLabel` | `string` | `End date` | The accessible name of the end field, used when it has no floating label. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaStartLabel` | `string` | `Start date` | The accessible name of the start field, used when it has no floating label. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `autoFocus` | `boolean` | - | Focus the first section of the start date right after mounting. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `defaultEndDate` | `string \| Date \| null` | - | The initial end date for the uncontrolled mode. Ignored when `endDate` is set. |
| `defaultStartDate` | `string \| Date \| null` | - | The initial start date for the uncontrolled mode. Ignored when `startDate` is set. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | - | Specify the list of dates that cannot be selected. It can be a single `Date`, an `[start, end]` range, a matcher function, or an array of these. |
| `endDate` | `string \| Date \| null` | - | The controlled end date. Pair it with `onEndDateChange`; for the uncontrolled mode use `defaultEndDate` instead. |
| `endFloatingLabel` | `string` | - | The floating label of the end field. The text is also that field's accessible name. |
| `endName` | `string` | - | Name of the value input carrying the end date. Without it the end date is not submitted with the form. |
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
| `onEndDateChange` | `((date: Date \| null) => void)` | - | Callback fired when the end date changes; receives the `Date`, or `null` while that end is incomplete or invalid. |
| `onStartDateChange` | `((date: Date \| null) => void)` | - | Callback fired when the start date changes; receives the `Date`, or `null` while that end is incomplete or invalid. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes either end, or the form is reset, while `validationState` is set. A given state is a verdict on the range it was given for; clear it here to let the browser's own validation show again. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean` | - | Include a seconds section in the locale-derived time layout. |
| `separator` | `ReactNode` | - | The node rendered between the two fields. It is hidden from assistive technology. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large - both ends follow. |
| `startDate` | `string \| Date \| null` | - | The controlled start date. Pair it with `onStartDateChange`; for the uncontrolled mode use `defaultStartDate` instead. |
| `startFloatingLabel` | `string` | - | The floating label of the start field. The text is also that field's accessible name. |
| `startName` | `string` | - | Name of the value input carrying the start date. Without it the start date is not submitted with the form. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `type` | `'date' \| 'datetime'` | `date` | Which sections the locale-derived layout carries on both ends. A `format` names the sections itself and overrides this. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class on the frame; `'invalid'` also sets `aria-invalid` on the sections of both ends and blocks the submit. An end before the start and an end the limits reject mark the frame invalid on their own. The user's next change of either end asks to drop it through `onValidationStateChange`. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |
