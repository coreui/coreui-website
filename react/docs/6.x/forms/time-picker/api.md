# React Time Picker Component API

> Explore the API reference for the React Time Picker component and discover how to effectively utilize its props for customization.

## CTimePicker

```jsx
import { CTimePicker } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCleanerLabel` | `string` | `Clear time` | Sets the accessible label (`aria-label`) of the button that clears the value. |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaLabel` | `string` | - | Sets the accessible label of the time selection itself, the group its parts sit in. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaPickerLabel` | `string` | `Toggle time selection` | Sets the accessible label (`aria-label`) of the button that opens the time selection. |
| `ariaPopupLabel` | `string` | `Time selection` | Sets the accessible label (`aria-label`) of the time selection panel, which opens as a `role="dialog"`. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaSelectHoursLabel` | `string` | - | Sets the accessible label of the hours column. |
| `ariaSelectMeridiemLabel` | `string` | - | Sets the accessible label of the AM/PM column. |
| `ariaSelectMinutesLabel` | `string` | - | Sets the accessible label of the minutes column. |
| `ariaSelectSecondsLabel` | `string` | - | Sets the accessible label of the seconds column. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `className` | `string` | - | Adds a custom class name to the React Time Picker. |
| `cleaner` | `boolean` | `true` | Renders the button that clears the value. |
| `cleanerIcon` | `ReactNode` | - | The artwork of the cleaner button. Defaults to a cross drawn on `currentColor`. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | The element the time selection is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled time selection — read once on mount. |
| `defaultTime` | `string \| Date \| null` | - | The initial time for the uncontrolled mode. Ignored when `time` is set. |
| `disabled` | `boolean` | `false` | Toggles the disabled state. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `floatingLabel` | `string` | - | Renders a floating label inside the field — the component wraps its input in `.form-floating` and the text also becomes the field's accessible name. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `footer` | `ReactNode \| ((context: CTimePickerContextValue) => ReactNode)` | - | The content of the panel's footer. Either a node, or a function receiving the picker's context — `setTime`, `now`, `clear`, `reset`, `close`, `isTimeSelectable`, `time` and `disabled`. |
| `format` | `string \| ((locale: string) => DateSection[])` | - | The mask layout. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `hours` | `number[] \| ((hour: number) => boolean)` | - | Narrows the hours to a list, or to the ones a predicate accepts. Hours are 0 to 23 in every locale; on a 12-hour clock an hour that only one day period allows sets that period when picked. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `locale` | `string` | `navigator.language` | The locale the parts are formatted in. It also decides the 12 or 24-hour split. |
| `maxDate` | `string \| Date \| null` | - | The latest time the user can pick: a time string such as `'17:00'`, or a `Date` of which only the time of day counts. The panel disables the times after it, a time picked in the panel moves back to it, and the field rejects a later time. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | `string \| Date \| null` | - | The earliest time the user can pick: a time string such as `'09:30'`, or a `Date` of which only the time of day counts. The panel disables the times before it, a time picked in the panel moves up to it, and the field rejects an earlier time. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `minutes` | `boolean \| number[] \| ((minute: number) => boolean)` | `true` | Renders the minutes part, optionally narrowed the way `hours` is. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `name` | `string` | - | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `onError` | `((error: DateInputError) => void)` | - | Callback fired when the validation state changes; receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty. When one change moves both the value and the validation state, it fires after the change callback, so a value set from it replaces the one just reported. |
| `onHide` | `(() => void)` | - | Callback fired when the time is hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the time is shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the time selection requests an open-state change — a dismiss gesture (Escape, a click outside) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the time selection stays as it is. |
| `onTimeChange` | `((time: Date \| null, formattedTime?: string \| undefined) => void)` | - | Callback fired once when the value changes, whether from the field, the panel or the context methods; receives the `Date` the field holds, anchored to 1970-01-01 and cut to the units the field shows, or `null` while the field is empty or incomplete, and the formatted value. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the time, or the form is reset, while `validationState` (or the deprecated `invalid`/`valid`) is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `pickerIcon` | `ReactNode` | `true` | The artwork of the button that opens the time selection. Defaults to a clock drawn on `currentColor`. |
| `portal` | `boolean` | `true` | Renders the time selection through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean \| number[] \| ((second: number) => boolean)` | `true` | Renders the seconds part, optionally narrowed the way `hours` is. |
| `show` | `boolean` | - | Control the open state. When set, the time selection renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `size` | `"sm" \| "lg"` | - | Sizes the control, the way `.form-control-sm` and `.form-control-lg` size a form control. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `time` | `string \| Date \| null` | - | The controlled time — a `Date` or a time string like `'14:30'`. Pair it with `onTimeChange`; for the uncontrolled mode use `defaultTime` instead. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` on every section and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. A field of a date range whose end is before its start draws no other state. The user's next change of the value asks to drop it through `onValidationStateChange`. |
| `visible` | `boolean` | - | Controls the visibility of the time selection. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |
