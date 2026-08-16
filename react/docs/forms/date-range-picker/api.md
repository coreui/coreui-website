# React Date Range Picker Component API

> Explore the API reference for the React Date Range Picker component and discover how to effectively utilize its props for customization.

## CDateRangePicker

```jsx
import { CDateRangePicker } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaNavNextMonthLabel` | `string` | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the React Calendar component. This label is read by screen readers to describe the action associated with the button. Customize for a more accessible calendar experience. |
| `ariaNavNextYearLabel` | `string` | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the React Calendar component. Screen readers utilize this label to inform users of the button's functionality, aiding in a more inclusive application. |
| `ariaNavPrevMonthLabel` | `string` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the React Calendar component. This label is announced by screen readers, ensuring clarity around the button's purpose. |
| `ariaNavPrevYearLabel` | `string` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the React Calendar component. Use it to enhance the experience for screen readers and further accessibility. |
| `calendarDate` | `string \| Date \| null` | `startDate \|\| endDate \|\| null` | Defines the initial date or reference date for the React Calendar component. This date can be either a Date object or a string that can be converted into a valid date. |
| `calendars` | `number` | `2` | The number of calendars that render on desktop devices. |
| `cancelButton` | `ReactNode` | `Cancel` | Toggle visibility or set the content of cancel button. |
| `cancelButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `primary` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `cancelButtonSize` | `"sm" \| "lg"` | `sm` | Size the cancel button small or large. |
| `cancelButtonVariant` | `"outline" \| "ghost"` | `ghost` | Set the cancel button variant to an outlined button or a ghost button. |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `cleaner` | `boolean` | `true` | Toggle visibility or set the content of the cleaner button. |
| `closeOnSelect` | `boolean` | `true` | If true the dropdown will be immediately closed after submitting the full date. |
| `confirmButton` | `ReactNode` | `OK` | Toggle visibility or set the content of confirm button. |
| `confirmButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `primary` | Sets the color context of the confirm button to one of CoreUI’s themed colors. |
| `confirmButtonSize` | `"sm" \| "lg"` | `sm` | Size the confirm button small or large. |
| `confirmButtonVariant` | `"outline" \| "ghost"` | - | Set the confirm button variant to an outlined button or a ghost button. |
| `container` | `Element \| "dropdown" \| "inline" \| DocumentFragment \| (() => Element \| DocumentFragment \| null) \| null` | - | Set container type for the component, or the element the dropdown is rendered into. - `'dropdown'` - the component is rendered as a dropdown (default), - `'inline'` - the component is rendered inline, without a dropdown, - an HTML element, or a function that returns a single element - the dropdown is rendered inside that element instead of `document.body`. Implies `portal`. **[Added in v5.28.0]** |
| `dayFormat` | `"numeric" \| "2-digit" \| ((date: Date) => string \| number)` | `'numeric'` | Sets the format for days. Accepts either a built-in format ('numeric' or '2-digit') or a custom function to return any desired string or number for the day. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | - | Specifies one or more dates that cannot be selected by the user. This is useful for disabling weekends, holidays, or any dates that you need to restrict within your React Calendar component. |
| `dropdownClassNames` | `string` | - | A string of all className you want applied to the dropdown menu. |
| `endDate` | `string \| Date \| null` | - | Defines the initially selected ending date (applicable when using range selection). Accepts both Date objects and valid date strings. |
| `feedback` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackInvalid` | `ReactNode` | - | Provide valuable, actionable feedback. |
| `feedbackValid` | `ReactNode` | - | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`. |
| `firstDayOfWeek` | `number` | `1` | Sets the first day of the week. This can be adjusted for different locales or preferences: - `0` = Sunday - `1` = Monday - `2` = Tuesday - `3` = Wednesday - `4` = Thursday - `5` = Friday - `6` = Saturday |
| `floatingClassName` | `string` | - | A string of all className you want applied to the floating label wrapper. |
| `footer` | `boolean` | - | Toggle visibility of footer element. |
| `footerContent` | `ReactNode` | - | Add custom elements to the footer. |
| `id` | `string \| [string, string]` | - | The id attribute for the input elements. It can be a single string for both the start and end dates. If a single string is used, the postfix "-start-date" and "-end-date" will be automatically added to make the IDs unique. Alternatively, you can use an array of two strings for start and end dates separately. **[Deprecated since v5.3.0]** If the property is a type of string, the name attributes for input elements are generated based on this property until you define name prop ex.: - `{id}-start-date` - `{id}-end-date` |
| `indicator` | `ReactNode` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | `((date: Date) => string)` | - | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | `((date: string \| Date) => Date)` | - | Custom function to parse the input value into a valid Date object. |
| `inputOnChangeDelay` | `number` | `750` | Defines the delay (in milliseconds) for the input field's onChange event. |
| `inputReadOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `invalid` | `boolean` | - | Set component validation state to invalid. |
| `label` | `ReactNode` | - | Add a caption for a component. |
| `locale` | `string` | `default` | Indicates the locale for the React Calendar component. If not explicitly provided, it inherits the locale settings from the browser. |
| `maxDate` | `string \| Date \| null` | - | The maximum date that can be selected. Any date beyond this value will be disabled within the calendar. This is often used to restrict future selections. |
| `minDate` | `string \| Date \| null` | - | The minimum date that can be selected. Any date before this value will be disabled in the calendar. Useful for preventing selection of past dates or creating limited booking windows. |
| `monthFormat` | `"numeric" \| "2-digit" \| "long" \| "narrow" \| "short"` | `'short'` | Sets the format for month names. Accepts built-in formats ('long', 'narrow', 'short', 'numeric', '2-digit'). |
| `name` | `string \| [string, string]` | - | The name attribute for the input elements. It can be a single string for both the start and end dates. If a single string is used, the postfix "-start-date" and "-end-date" will be automatically added to make the names unique. Alternatively, you can use an array of two strings for start and end dates separately. Example for single string: 'date-input' Result: 'date-input-start-date', 'date-input-end-date' Example for array: ['start-date-input', 'end-date-input'] Result: 'start-date-input', 'end-date-input' |
| `navigation` | `boolean` | - | Toggles display of arrow-based navigation (previous/next controls) in the React Calendar component. If set to `false`, you can build custom navigation or handle the navigation programmatically. |
| `navNextDoubleIcon` | `ReactNode` | - | Customizes the icon for navigating multiple steps forward (double jump), e.g., skipping multiple months or years at once. Ideal for quick navigation through large date ranges. |
| `navNextIcon` | `ReactNode` | - | Customizes the icon for navigating to the next view (month, year, etc.) depending on the current view. Accepts any valid `ReactNode`, enabling you to display text, images, or icons. |
| `navPrevDoubleIcon` | `ReactNode` | - | Customizes the icon for a double jump backward (e.g., jumping multiple months or years at once). This feature simplifies larger date range navigation within your React Calendar component. |
| `navPrevIcon` | `ReactNode` | - | Customizes the icon for navigating to the previous view in the calendar. Accepts any valid ReactNode to provide flexible styling or theming. |
| `navYearFirst` | `boolean` | `false` | Reorders the year and month navigation, rendering the year selector first. This offers a different layout for users, particularly useful if you want to prioritize quick year changes. |
| `onDateHover` | `((date: string \| Date \| null) => void)` | - | Callback fired when the user hovers over a calendar cell. The argument is the date of the cell that the user is currently hovering. |
| `onEndDateChange` | `((date: string \| Date \| null, formatedDate?: string \| undefined) => void)` | - | Callback triggered when the end date of the selection changes. Handy for synchronizing the selected date range with external states or components. |
| `onHide` | `(() => void)` | - | Callback fired when the component requests to be hidden. |
| `onSelectEndChange` | `((value: boolean) => void)` | - | Callback fired when toggling between selecting the start date and the end date in range selection mode. Receives a boolean indicating if the user is currently selecting the end date. |
| `onShow` | `(() => void)` | - | Callback fired when the component requests to be shown. |
| `onStartDateChange` | `((date: string \| Date \| null, formatedDate?: string \| undefined) => void)` | - | Callback triggered when the start date of the selection changes. Useful for updating other parts of your application or performing side effects based on the newly chosen start date. |
| `onViewChanged` | `((view: string) => void)` | - | Callback fired when the calendar's view changes between days, months, or years. For instance, moving from day view to month view or from month view to year view. |
| `placeholder` | `string \| string[]` | `['Start date', 'End date']` | Specifies short hints that are visible in start date and end date inputs. |
| `portal` | `boolean` | `true` | Generates dropdown menu using createPortal. |
| `previewDateOnHover` | `boolean` | `true` | Enable live preview of dates in input fields when hovering over calendar cells. |
| `ranges` | `object` | - | Predefined date ranges the user can select from. |
| `rangesButtonsColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `secondary` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `rangesButtonsSize` | `"sm" \| "lg"` | - | Size the ranges button small or large. |
| `rangesButtonsVariant` | `"outline" \| "ghost"` | `ghost` | Set the ranges button variant to an outlined button or a ghost button. |
| `renderDayCell` | `((date: Date, meta: { isDisabled: boolean; isInCurrentMonth: boolean; isInRange: boolean; isSelected: boolean; isToday: boolean; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual day cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles, add tooltips, or include additional content in each day cell. |
| `renderMonthCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual month cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each month cell. |
| `renderQuarterCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual quarter cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each quarter cell. |
| `renderYearCell` | `((date: Date, meta: { isDisabled: boolean; isInRange: boolean; isSelected: boolean; }) => ReactNode)` | - | A function that allows you to customize the rendering of individual year cells within the calendar. This function receives the date and metadata (like selection and disabled status) as arguments, enabling you to apply custom styles or include additional content in each year cell. |
| `required` | `boolean` | - | When present, it specifies that date must be filled out before submitting the form. |
| `selectAdjacementDays` | `boolean` | `false` | Sets whether days from adjacent months (shown at the start/end of the current view) are selectable. This only applies if `showAdjacementDays` is set to `true`. |
| `selectEndDate` | `boolean` | - | Indicates if the user's current selection is targeting the end date in range selection mode. Primarily used for controlled components where you need to manage which date (start or end) is currently active. |
| `selectionType` | `SelectionTypes` | `day` | Specifies the selection type for the React Calendar component. Supports: - `day`: Regular day selection (default) - `week`: Select an entire week - `month`: Select an entire month - `year`: Select an entire year |
| `separator` | `ReactNode` | `true` | Default icon or character character that separates two dates. |
| `showAdjacementDays` | `boolean` | `true` | Controls whether the calendar should display dates from previous or next months (non-selectable if `selectAdjacementDays` is `false`). This can make the calendar visually continuous. |
| `showWeekNumber` | `boolean` | `false` | Toggles the display of week numbers (ISO 8601) in the calendar's left column. Particularly beneficial for applications where users need to see the week index for scheduling or reporting. |
| `size` | `"sm" \| "lg"` | - | Size the component small or large. |
| `startDate` | `string \| Date \| null` | - | Defines the initially selected starting date. This date can be a Date object or a string convertible into a valid date. Useful when you want to show a pre-selected date. |
| `text` | `ReactNode` | - | Add helper text to the component. |
| `timepicker` | `boolean` | - | Provide an additional time selection by adding select boxes to choose times. |
| `todayButton` | `ReactNode` | `Today` | Toggle visibility or set the content of today button. |
| `todayButtonColor` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'dark' \| 'light' \| string` | `primary` | Sets the color context of the today button to one of CoreUI’s themed colors. |
| `todayButtonSize` | `"sm" \| "lg"` | `sm` | Size the today button small or large. |
| `todayButtonVariant` | `"outline" \| "ghost"` | - | Set the today button variant to an outlined button or a ghost button. |
| `toggler` | `ReactNode` | - | The content of toggler. |
| `tooltipFeedback` | `boolean` | - | Display validation feedback in a styled tooltip. |
| `valid` | `boolean` | - | Set component validation state to valid. |
| `visible` | `boolean` | - | Toggle the visibility of dropdown menu component. |
| `weekdayFormat` | `number \| "long" \| "narrow" \| "short" \| ((date: Date) => string \| number)` | `2` | Sets the format or length of the weekday names displayed in the calendar header. You can use numeric values like 2 (two-letter abbreviations) or built-in string formats like `'long'`, `'narrow'`, and `'short'`, or provide a custom function to fully control how weekdays are displayed. |
| `weekNumbersLabel` | `string` | - | Defines the label that appears above the week numbers column. For example, you might label it `'WK'` or `'Week #'`. |
| `yearFormat` | `"numeric" \| "2-digit"` | `'numeric'` | Sets the format for years. Accepts built-in formats ('numeric' or '2-digit'). |
