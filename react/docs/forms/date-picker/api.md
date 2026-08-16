# React Date Picker Component API

> Explore the API reference for the React Date Picker component and discover how to effectively utilize its props for customization.

## CDatePicker

```jsx
import { CDatePicker } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaNavNextMonthLabel` | `string \| undefined` | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the React Calendar component. This label is read by screen readers to describe the action associated with the button. Customize for a more accessible calendar experience. |
| `ariaNavNextYearLabel` | `string \| undefined` | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the React Calendar component. Screen readers utilize this label to inform users of the button's functionality, aiding in a more inclusive application. |
| `ariaNavPrevMonthLabel` | `string \| undefined` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the React Calendar component. This label is announced by screen readers, ensuring clarity around the button's purpose. |
| `ariaNavPrevYearLabel` | `string \| undefined` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the React Calendar component. Use it to enhance the experience for screen readers and further accessibility. |
| `calendarDate` | `string \| Date \| null \| undefined` | - | Defines the initial date or reference date for the React Calendar component. This date can be either a Date object or a string that can be converted into a valid date. |
| `cancelButton` | `ReactNode` | `'Cancel'` | Toggle visibility or set the content of cancel button. |
| `cancelButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `'primary'` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `cancelButtonSize` | `"sm" \| "lg" \| undefined` | `'sm'` | Size the cancel button small or large. |
| `cancelButtonVariant` | `"outline" \| "ghost" \| undefined` | `'ghost'` | Set the cancel button variant to an outlined button or a ghost button. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `cleaner` | `boolean \| undefined` | - | Toggle visibility or set the content of the cleaner button. |
| `closeOnSelect` | `boolean \| undefined` | - | If true the dropdown will be immediately closed after submitting the full date. |
| `confirmButton` | `ReactNode` | `'OK'` | Toggle visibility or set the content of confirm button. |
| `confirmButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `'primary'` | Sets the color context of the confirm button to one of CoreUI’s themed colors. |
| `confirmButtonSize` | `"sm" \| "lg" \| undefined` | `'sm'` | Size the confirm button small or large. |
| `confirmButtonVariant` | `"outline" \| "ghost" \| undefined` | - | Set the confirm button variant to an outlined button or a ghost button. |
| `container` | `Element \| "dropdown" \| "inline" \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null \| undefined` | - | Set container type for the component, or the element the dropdown is rendered into. - `'dropdown'` - the component is rendered as a dropdown (default), - `'inline'` - the component is rendered inline, without a dropdown, - an HTML element, or a function that returns a single element - the dropdown is rendered inside that element instead of `document.body`. Implies `portal`. **[Added in v5.28.0]** |
| `date` | `string \| Date \| null \| undefined` | - | Initial selected date. |
| `dayFormat` | `"numeric" \| "2-digit" \| ((date: Date) => string \| number) \| undefined` | `'numeric'` | Sets the format for days. Accepts either a built-in format ('numeric' or '2-digit') or a custom function to return any desired string or number for the day. |
| `disabled` | `boolean \| undefined` | - | Toggle the disabled state for the component. |
| `disabledDates` | `DisabledDate \| DisabledDate[] \| undefined` | - | Specifies one or more dates that cannot be selected by the user. This is useful for disabling weekends, holidays, or any dates that you need to restrict within your React Calendar component. |
| `dropdownClassNames` | `string \| undefined` | - | A string of all className you want applied to the dropdown menu. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `firstDayOfWeek` | `number \| undefined` | `1` | Sets the first day of the week. This can be adjusted for different locales or preferences: - `0` = Sunday - `1` = Monday - `2` = Tuesday - `3` = Wednesday - `4` = Thursday - `5` = Friday - `6` = Saturday |
| `floatingClassName` | `string \| undefined` | - | A string of all className you want applied to the floating label wrapper. |
| `footer` | `boolean \| undefined` | - | Toggle visibility of footer element. |
| `footerContent` | `ReactNode` | - | Add custom elements to the footer. |
| `id` | `string \| undefined` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. **[Deprecated since v5.3.0]** The name attributes for input element is generated based on this property until you define name prop ex.: - `{id}-date` |
| `indicator` | `ReactNode` | - | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | `((date: Date) => string) \| undefined` | - | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | `((date: string \| Date) => Date) \| undefined` | - | Custom function to parse the input value into a valid Date object. |
| `inputOnChangeDelay` | `number \| undefined` | - | Defines the delay (in milliseconds) for the input field's onChange event. |
| `inputReadOnly` | `boolean \| undefined` | - | Toggle the readonly state for the component. |
| `invalid` | `boolean \| undefined` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `locale` | `string \| undefined` | `'default'` | Indicates the locale for the React Calendar component. If not explicitly provided, it inherits the locale settings from the browser. |
| `maxDate` | `string \| Date \| null \| undefined` | - | The maximum date that can be selected. Any date beyond this value will be disabled within the calendar. This is often used to restrict future selections. |
| `minDate` | `string \| Date \| null \| undefined` | - | The minimum date that can be selected. Any date before this value will be disabled in the calendar. Useful for preventing selection of past dates or creating limited booking windows. |
| `monthFormat` | `"numeric" \| "2-digit" \| "long" \| "narrow" \| "short" \| undefined` | `'short'` | Sets the format for month names. Accepts built-in formats ('long', 'narrow', 'short', 'numeric', '2-digit'). |
| `name` | `string \| undefined` | - | The name attribute for the input element. |
| `navigation` | `boolean \| undefined` | - | Toggles display of arrow-based navigation (previous/next controls) in the React Calendar component. If set to `false`, you can build custom navigation or handle the navigation programmatically. |
| `navNextDoubleIcon` | `ReactNode` | - | Customizes the icon for navigating multiple steps forward (double jump), e.g., skipping multiple months or years at once. Ideal for quick navigation through large date ranges. |
| `navNextIcon` | `ReactNode` | - | Customizes the icon for navigating to the next view (month, year, etc.) depending on the current view. Accepts any valid `ReactNode`, enabling you to display text, images, or icons. |
| `navPrevDoubleIcon` | `ReactNode` | - | Customizes the icon for a double jump backward (e.g., jumping multiple months or years at once). This feature simplifies larger date range navigation within your React Calendar component. |
| `navPrevIcon` | `ReactNode` | - | Customizes the icon for navigating to the previous view in the calendar. Accepts any valid ReactNode to provide flexible styling or theming. |
| `navYearFirst` | `boolean \| undefined` | `false` | Reorders the year and month navigation, rendering the year selector first. This offers a different layout for users, particularly useful if you want to prioritize quick year changes. |
| `onDateChange` | `((date: string \| Date \| null, formatedDate?: string \| undefined) => void) \| undefined` | - | Callback fired when the date changed. |
| `onDateHover` | `((date: string \| Date \| null) => void) \| undefined` | - | Callback fired when the user hovers over a calendar cell. The argument is the date of the cell that the user is currently hovering. |
| `onHide` | `(() => void) \| undefined` | - | Callback fired when the component requests to be hidden. |
| `onSelectEndChange` | `((value: boolean) => void) \| undefined` | - | Callback fired when toggling between selecting the start date and the end date in range selection mode. Receives a boolean indicating if the user is currently selecting the end date. |
| `onShow` | `(() => void) \| undefined` | - | Callback fired when the component requests to be shown. |
| `onViewChanged` | `((view: string) => void) \| undefined` | - | Callback fired when the calendar's view changes between days, months, or years. For instance, moving from day view to month view or from month view to year view. |
| `placeholder` | `string \| string[] \| undefined` | `Select date` | Specifies short hints that are visible in start date and end date inputs. |
| `portal` | `boolean \| undefined` | - | Generates dropdown menu using createPortal. |
| `previewDateOnHover` | `boolean \| undefined` | - | Enable live preview of dates in input fields when hovering over calendar cells. |
| `rangesButtonsColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | - | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `rangesButtonsSize` | `"sm" \| "lg" \| undefined` | - | Size the ranges button small or large. |
| `rangesButtonsVariant` | `"outline" \| "ghost" \| undefined` | - | Set the ranges button variant to an outlined button or a ghost button. |
| `renderDayCell` | `((date: Date, meta: { isDisabled: boolean; isInCurrentMonth: boolean; isInRange: boolean; isSelected: boolean; isToday: boolean; }) => ReactNode) \| undefined` | - | A function that allows you to customize the rendering of individual day cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles, add tooltips, or include additional content in each day cell. |
| `renderMonthCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; }) => ReactNode) \| undefined` | - | A function that allows you to customize the rendering of individual month cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each month cell. |
| `renderQuarterCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; }) => ReactNode) \| undefined` | - | A function that allows you to customize the rendering of individual quarter cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each quarter cell. |
| `renderYearCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; }) => ReactNode) \| undefined` | - | A function that allows you to customize the rendering of individual year cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each year cell. |
| `required` | `boolean \| undefined` | - | When present, it specifies that date must be filled out before submitting the form. |
| `selectAdjacementDays` | `boolean \| undefined` | `false` | Sets whether days from adjacent months (shown at the start/end of the current view) are selectable. This only applies if `showAdjacementDays` is set to `true`. |
| `selectionType` | `SelectionTypes \| undefined` | `'day'` | Specifies the selection type for the React Calendar component. Supports: - `day`: Regular day selection (default) - `week`: Select an entire week - `month`: Select an entire month - `year`: Select an entire year |
| `separator` | `ReactNode` | - | Default icon or character character that separates two dates. |
| `showAdjacementDays` | `boolean \| undefined` | `true` | Controls whether the calendar should display dates from previous or next months (non-selectable if `selectAdjacementDays` is `false`). This can make the calendar visually continuous. |
| `showWeekNumber` | `boolean \| undefined` | `false` | Toggles the display of week numbers (ISO 8601) in the calendar's left column. Particularly beneficial for applications where users need to see the week index for scheduling or reporting. |
| `size` | `"sm" \| "lg" \| undefined` | - | Size the component small or large. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `timepicker` | `boolean \| undefined` | - | Provide an additional time selection by adding select boxes to choose times. |
| `todayButton` | `ReactNode` | `'Today'` | Toggle visibility or set the content of today button. |
| `todayButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `'primary'` | Sets the color context of the today button to one of CoreUI’s themed colors. |
| `todayButtonSize` | `"sm" \| "lg" \| undefined` | `'sm'` | Size the today button small or large. |
| `todayButtonVariant` | `"outline" \| "ghost" \| undefined` | - | Set the today button variant to an outlined button or a ghost button. |
| `toggler` | `ReactNode` | - | The content of toggler. |
| `tooltipFeedback` | `boolean \| undefined` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean \| undefined` | - | Set component validation state to valid. |
| `visible` | `boolean \| undefined` | - | Toggle the visibility of dropdown menu component. |
| `weekdayFormat` | `number \| "long" \| "narrow" \| "short" \| ((date: Date) => string \| number) \| undefined` | `2` | Sets the format or length of the weekday names displayed in the calendar header. You can use numeric values like 2 (two-letter abbreviations) or built-in string formats like `'long'`, `'narrow'`, and `'short'`, or provide a custom function to fully control how weekdays are displayed. |
| `weekNumbersLabel` | `string \| undefined` | - | Defines the label that appears above the week numbers column. For example, you might label it `'WK'` or `'Week #'`. |
| `yearFormat` | `"numeric" \| "2-digit" \| undefined` | `'numeric'` | Sets the format for years. Accepts built-in formats ('numeric' or '2-digit'). |
