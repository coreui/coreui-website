# React Date Picker Component API

> Explore the API reference for the React Date Picker component and discover how to effectively utilize its props for customization.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CDatePicker

```jsx
import { CDatePicker } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaCleanerLabel` | `string` | `Clear date` | Sets the accessible label (`aria-label`) of the button that clears the value. |
| `ariaDayLabel` | `string` | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | `string` | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | `string` | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | `string` | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | `string` | `'Month'` | The `aria-label` of the month section. |
| `ariaNavNextMonthLabel` | `string` | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the React Calendar component. This label is read by screen readers to describe the action associated with the button. Customize for a more accessible calendar experience. |
| `ariaNavNextYearLabel` | `string` | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the React Calendar component. Screen readers utilize this label to inform users of the button's functionality, aiding in a more inclusive application. |
| `ariaNavNextYearsLabel` | `string` | `'Next 12 years'` | Sets the accessible label (`aria-label`) of the button that turns the years view to the next page of years. |
| `ariaNavPrevMonthLabel` | `string` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the React Calendar component. This label is announced by screen readers, ensuring clarity around the button's purpose. |
| `ariaNavPrevYearLabel` | `string` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the React Calendar component. Use it to enhance the experience for screen readers and further accessibility. |
| `ariaNavPrevYearsLabel` | `string` | `'Previous 12 years'` | Sets the accessible label (`aria-label`) of the button that turns the years view to the previous page of years. |
| `ariaNothingToPickLabel` | `string` | `'Nothing on this page can be picked'` | Sets the description (`aria-describedby`) of a grid in which nothing can be picked, such as a page wholly outside `minDate` / `maxDate` or one that `disabledDates` covers, also announced when the calendar turns to such a page. An empty string leaves the grid without a description. |
| `ariaPickerLabel` | `string` | `Toggle calendar` | Sets the accessible label (`aria-label`) of the button that opens the calendar, followed by the date the picker holds. |
| `ariaPopupLabel` | `string` | `Calendar` | Sets the accessible label (`aria-label`) of the calendar panel, which opens as a `role="dialog"`. |
| `ariaQuarterLabel` | `string` | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | `string` | `'Second'` | The `aria-label` of the second section. |
| `ariaSelectedDateAnnouncement` | `string` | `'Selected date: {date}'` | Sets the message announced when a click or Enter / Space picks a date in a panel that stays open, with `timepicker` or without the toggle. A pick that closes the panel names the toggle with the date instead. `{date}` is replaced by the full name of what was picked, such as `Wednesday, August 12, 2026`. An empty string announces nothing. |
| `ariaSelectHoursLabel` | `string` | - | Sets the accessible label of the hours column. |
| `ariaSelectMeridiemLabel` | `string` | - | Sets the accessible label of the AM/PM column. |
| `ariaSelectMinutesLabel` | `string` | - | Sets the accessible label of the minutes column. |
| `ariaSelectSecondsLabel` | `string` | - | Sets the accessible label of the seconds column. |
| `ariaWeekLabel` | `string` | `'Week'` | The `aria-label` of the week section. |
| `ariaWeekNumberLabel` | `((weekNumber: number) => string \| undefined)` | - | Names each week number for screen readers: a function that takes the week number and returns its name. Without it the name is the locale's word for week and the number, such as `Week 36`. Keep the number in the name, so a voice-control user can say what they see. |
| `ariaYearLabel` | `string` | `'Year'` | The `aria-label` of the year section. |
| `calendarDate` | `string \| Date \| null` | - | Defines the initial date or reference date for the calendar. This date can be either a Date object or a string that can be converted into a valid date. Without it, the calendar opens on the picker's date. |
| `className` | `string` | - | Adds a custom class name to the React Date Picker. |
| `cleaner` | `boolean` | `true` | Renders the button that clears the value. |
| `cleanerIcon` | `ReactNode` | - | The artwork of the cleaner button. Defaults to a cross drawn on `currentColor`. |
| `container` | `Element \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | The element the calendar is rendered into instead of `document.body`. Implies `portal`. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `date` | `string \| Date \| null` | - | The controlled date — a `Date` or a date string like `'2026-07-14'`. Pair it with `onDateChange`; for the uncontrolled mode use `defaultDate` instead. |
| `dayFormat` | `"numeric" \| "2-digit" \| ((date: Date) => string \| number)` | `'numeric'` | Sets the format for days. Accepts either a built-in format ('numeric' or '2-digit') or a custom function to return any desired string or number for the day. |
| `dayPlaceholder` | `string` | - | Replaces the `DD` the day section shows while it is empty. |
| `defaultDate` | `string \| Date \| null` | - | The initial date for the uncontrolled mode. Ignored when `date` is set. |
| `defaultShow` | `boolean` | - | The initial open state of an uncontrolled calendar — read once on mount. |
| `disabled` | `boolean` | `false` | Toggles the disabled state. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | - | Specifies one or more dates that cannot be selected by the user. This is useful for disabling weekends, holidays, or any dates that you need to restrict within your React Calendar component. In week, month, quarter and year selection a period is disabled when every day of it is. |
| `feedback` | `ReactNode` | - | Feedback for the current `validationState` — rendered only while the state is set, and styled after it. For the client-side mode, where the browser owns the state, use `feedbackValid` and `feedbackInvalid` instead. |
| `feedbackInvalid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is invalid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `feedbackValid` | `ReactNode` | - | Feedback the stylesheet reveals while the control is valid — always rendered, so it works with client-side validation, where the browser decides the state. |
| `firstDayOfWeek` | `number` | `1` | Sets the first day of the week. This can be adjusted for different locales or preferences: - `0` = Sunday - `1` = Monday - `2` = Tuesday - `3` = Wednesday - `4` = Thursday - `5` = Friday - `6` = Saturday |
| `floatingLabel` | `string` | - | Renders a floating label inside the field — the component wraps its input in `.form-floating` and the text also becomes the field's accessible name. |
| `floatingLabelAlways` | `boolean` | - | Keeps the floating label floated and the placeholder visible while the field is empty. |
| `footer` | `ReactNode \| ((context: CDatePickerContextValue) => ReactNode)` | - | The content of the calendar's footer. Either a node, or a function receiving the picker's context — `setDate`, `today`, `clear`, `reset`, `close`, `isDateSelectable`, `date` and `disabled` — so a projected button can act on the picker and read its state. |
| `format` | `string \| ((locale: string) => DateSection[])` | - | The mask layout. A string is parsed as dayjs/moment or date-fns/luxon format tokens, a function receives the locale and returns the section layout, and `undefined` derives the layout from the locale. |
| `hourPlaceholder` | `string` | - | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `hours` | `number[] \| ((hour: number) => boolean)` | - | Narrows the hours to a list, or to the ones a predicate accepts. Hours are 0 to 23 in every locale; on a 12-hour clock an hour that only one day period allows sets that period when picked. |
| `inputDateParse` | `((value: string) => Date \| null)` | - | Custom function to parse text pasted into the field into a `Date` object, e.g. with an external date library. |
| `invalid` | `boolean` | - | Mark the control invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `locale` | `string` | `navigator.language` | Indicates the locale for the React Calendar component. If not explicitly provided, it inherits the locale settings from the browser. |
| `maxDate` | `string \| Date \| null` | - | The maximum date that can be selected. The days after its day are disabled within the calendar, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. This is often used to restrict future selections. |
| `meridiemPlaceholder` | `string` | - | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | `string \| Date \| null` | - | The minimum date that can be selected. The days before its day are disabled in the calendar, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. Useful for preventing selection of past dates or creating limited booking windows. |
| `minutePlaceholder` | `string` | - | Replaces the `mm` the minute section shows while it is empty. |
| `minutes` | `boolean \| number[] \| ((minute: number) => boolean)` | `true` | Renders the minutes part, optionally narrowed the way `hours` is. |
| `monthFormat` | `"numeric" \| "2-digit" \| "long" \| "narrow" \| "short"` | `'short'` | Sets the format for month names. Accepts built-in formats ('long', 'narrow', 'short', 'numeric', '2-digit'). |
| `monthNames` | `string[]` | - | Twelve custom month names for text month sections (`MMM`/`MMMM`), overriding the locale-derived, date-context grammatical form. |
| `monthPlaceholder` | `string` | - | Replaces the `MM` the month section shows while it is empty. |
| `name` | `string` | - | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `navNextDoubleIcon` | `ReactNode` | - | Customizes the icon for navigating multiple steps forward (double jump), e.g., skipping multiple months or years at once. Ideal for quick navigation through large date ranges. In right-to-left it shows on the double previous button. |
| `navNextIcon` | `ReactNode` | - | Customizes the icon for navigating to the next view (month, year, etc.) depending on the current view. Accepts any valid `ReactNode`, enabling you to display text, images, or icons. In right-to-left it shows on the previous button. |
| `navPrevDoubleIcon` | `ReactNode` | - | Customizes the icon for a double jump backward (e.g., jumping multiple months or years at once). This feature simplifies larger date range navigation within your React Calendar component. In right-to-left it shows on the double next button. |
| `navPrevIcon` | `ReactNode` | - | Customizes the icon for navigating to the previous view in the calendar. Accepts any valid ReactNode to provide flexible styling or theming. In right-to-left it shows on the next button. |
| `onCalendarDateChange` | `((date: string \| Date, view: "days" \| "months" \| "quarters" \| "years") => void)` | - | Callback fired when the calendar's reference date (i.e., the date indicating which month/year is currently displayed) changes. Receives the new `Date \| string` as an argument for further handling. |
| `onDateChange` | `((date: Date \| null, formattedDate?: string \| undefined) => void)` | - | Callback fired once when the value changes, whether from the field, the calendar or the context methods; receives the `Date` the field holds (or `null` while the field is empty, incomplete or out of range) and the formatted value. |
| `onError` | `((error: DateInputError) => void)` | - | Callback fired when the validation state changes; receives `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty. When one change moves both the value and the validation state, it fires after the change callback, so a value set from it replaces the one just reported. |
| `onHide` | `(() => void)` | - | Callback fired when the calendar is hidden. |
| `onShow` | `(() => void)` | - | Callback fired when the calendar is shown. |
| `onShowChange` | `((show: boolean) => void)` | - | Callback fired when the calendar requests an open-state change — a dismiss gesture (Escape, a click outside) or, in uncontrolled mode, any internal toggle. In controlled mode update `show` yourself, or the calendar stays as it is. |
| `onValidationStateChange` | `((validationState: ValidationState \| undefined) => void)` | - | Callback fired with `undefined` when the user changes the date, or the form is reset, while `validationState` (or the deprecated `invalid`/`valid`) is set. A given state is a verdict on the value it was given for; clear it here to let the browser's own validation show again. |
| `onViewChange` | `((view: string) => void)` | - | Callback fired when the view changes, and with the view `selectionType` starts in each time the calendar mounts or `selectionType` changes. |
| `onViewChanged` | `((view: string) => void)` | - | Callback fired when the calendar's view changes between days, months, or years. For instance, moving from day view to month view or from month view to year view. |
| `pickerIcon` | `ReactNode` | `true` | The artwork of the button that opens the calendar. Defaults to a calendar drawn on `currentColor`. |
| `portal` | `boolean` | `true` | Renders the calendar through a portal: into the open `<dialog>` the field sits in, otherwise into `document.body`. |
| `quarterPlaceholder` | `string` | - | Replaces the `Q` the quarter section shows while it is empty. |
| `readOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `renderDayCell` | `((date: Date, meta: { isDisabled: boolean; isInCurrentMonth: boolean; isInRange: boolean; isSelected: boolean; isToday: boolean; label: string; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual day cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles, add tooltips, or include additional content in each day cell. The metadata carries the cell's full name as `label`, for example for visually hidden text next to a short label. |
| `renderMonthCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; label: string; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual month cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each month cell. The metadata carries the cell's full name as `label`, for example for visually hidden text next to a short label. |
| `renderQuarterCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; label: string; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual quarter cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each quarter cell. The metadata carries the cell's full name as `label`, for example for visually hidden text next to a short label. |
| `renderYearCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; label: string; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual year cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each year cell. The metadata carries the cell's full name as `label`, for example for visually hidden text next to a short label. |
| `required` | `boolean` | - | When present, it specifies that the field must be filled out before submitting the form. |
| `secondPlaceholder` | `string` | - | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | `boolean \| number[] \| ((second: number) => boolean)` | `true` | Renders the seconds part, optionally narrowed the way `hours` is. |
| `selectAdjacentDays` | `boolean` | `false` | Sets whether days from adjacent months (shown at the start/end of the current view) are selectable. This only applies if `showAdjacentDays` is set to `true`. A picked day of an adjacent month keeps the month on screen and shows as selected with an outline on a subtle background instead of the solid fill. |
| `selectionType` | `SelectionTypes` | `day` | Specifies the selection type for the React Calendar component. Supports: - `day`: Regular day selection (default) - `week`: Select an entire week - `month`: Select an entire month - `quarter`: Select an entire quarter - `year`: Select an entire year |
| `show` | `boolean` | - | Control the open state. When set, the calendar renders what `show` says and dismiss gestures only call `onShowChange` — nothing closes until the parent flips the prop. |
| `showAdjacentDays` | `boolean` | `true` | Controls whether the calendar should display dates from previous or next months (non-selectable if `selectAdjacentDays` is `false`). This can make the calendar visually continuous. |
| `showWeekNumber` | `boolean` | `false` | Toggles the display of week numbers (ISO 8601) in the calendar's left column. Particularly beneficial for applications where users need to see the week index for scheduling or reporting. |
| `size` | `"sm" \| "lg"` | - | Sizes the control, the way `.form-control-sm` and `.form-control-lg` size a form control. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `timepicker` | `boolean` | `false` | Add a time half to the panel: a row of hour, minute and second selects under the calendar, and a date and time mask in the field. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Mark the control valid. |
| `validationState` | `'valid' \| 'invalid' \| string` | - | The validation state, rendered as the `is-{state}` class; `'invalid'` also sets `aria-invalid` on every section and blocks the submit. Any custom state declared in the `$form-validation-states` Sass map is accepted. A field of a date range whose end is before its start draws no other state. The user's next change of the value asks to drop it through `onValidationStateChange`. |
| `visible` | `boolean` | - | Controls the visibility of the calendar. |
| `weekdayFormat` | `number \| "long" \| "narrow" \| "short" \| ((date: Date) => string \| number)` | `2` | Sets the format or length of the weekday names displayed in the calendar header. You can use numeric values like 2 (two-letter abbreviations) or built-in string formats like `'long'`, `'narrow'`, and `'short'`, or provide a custom function to fully control how weekdays are displayed. |
| `weekNumbersLabel` | `string` | - | Defines the label that appears above the week numbers column. For example, you might label it `'WK'` or `'Week #'`. Without it the column is named for screen readers with the locale's word for week. |
| `weekPlaceholder` | `string` | - | Replaces the `WW` the week section shows while it is empty. |
| `yearFormat` | `"numeric" \| "2-digit"` | `'numeric'` | Sets how the year cells of the years view write the year: `'numeric'` (2026) or `'2-digit'` (26). The navigation always writes the full year. |
| `yearPlaceholder` | `string` | - | Replaces the `YYYY` the year section shows while it is empty. |
