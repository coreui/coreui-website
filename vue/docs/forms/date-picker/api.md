# Vue Date Picker Component API

> Explore the API reference for the Vue Date Picker component and discover how to effectively utilize its props for customization.

## CDatePicker

```jsx
import { CDatePicker } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaNavNextMonthLabel` | `string` | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the calendar. This label is read by screen readers to describe the action associated with the button. |
| `ariaNavNextYearLabel` | `string` | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the calendar. This label is intended for screen readers to help users understand the button's functionality. |
| `ariaNavPrevMonthLabel` | `string` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. |
| `ariaNavPrevYearLabel` | `string` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. |
| `calendarDate` | `date\|string` | - | Default date of the component |
| `cancelButton` | `boolean\|string` | `'Cancel'` | Toggle visibility or set the content of cancel button. |
| `cancelButtonColor` | `string` | `'primary'` | Sets the color context of the cancel button to one of CoreUI’s themed colors. |
| `cancelButtonSize` | `string` | `'sm'` | Size the cancel button small or large. |
| `cancelButtonVariant` | `string` | `'ghost'` | Set the cancel button variant to an outlined button or a ghost button. |
| `cleaner` | `boolean` | `true` | Toggle visibility of the cleaner button. |
| `confirmButton` | `boolean\|string` | `'OK'` | Toggle visibility or set the content of confirm button. |
| `confirmButtonColor` | `string` | `'primary'` | Sets the color context of the confirm button to one of CoreUI’s themed colors. |
| `confirmButtonSize` | `string` | `'sm'` | Size the confirm button small or large. |
| `confirmButtonVariant` | `string` | - | Set the confirm button variant to an outlined button or a ghost button. |
| `container` | `'dropdown' \| 'inline' \| string \| HTMLElement \| (() => HTMLElement) \| null` | `'dropdown'` | Set container type for the component, or the element the calendar dropdown is rendered into. - `'dropdown'` - the calendar is rendered as a dropdown (default), - `'inline'` - the calendar is rendered inline, without a dropdown, - an HTML element, a CSS selector, or a function that returns a single element - the calendar is rendered inside that element. Implies `teleport`. |
| `date` | `date\|string` | - | Initial selected date. |
| `dayFormat` | `func\|string` | `'numeric'` | Set the format of day name. |
| `disabled` | `boolean` | - | Toggle the disabled state for the component. |
| `disabledDates` | - | - | Specify the list of dates that cannot be selected. |
| `firstDayOfWeek` | `number` | `1` | Sets the day of start week. - 0 - Sunday, - 1 - Monday, - 2 - Tuesday, - 3 - Wednesday, - 4 - Thursday, - 5 - Friday, - 6 - Saturday, |
| `footer` | `boolean` | - | Toggle visibility of footer element or set the content of footer. |
| `format` | `string` | - | Set date format. We use date-fns to format dates. Visit https://date-fns.org/v2.28.0/docs/format to check accepted patterns. |
| `id` | `string` | - | The id global attribute defines an identifier (ID) that must be unique in the whole document. **[Deprecated since v5.3.0]** The name attributes for input element is generated based on this property until you define name prop ex.: - \{id\}-date |
| `indicator` | `boolean` | `true` | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | `func` | - | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | `func` | - | Custom function to parse the input value into a valid Date object. |
| `inputOnChangeDelay` | `number` | `750` | Defines the delay (in milliseconds) for the input field's onChange event. |
| `inputReadOnly` | `boolean` | - | Toggle the readonly state for the component. |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `maxDate` | `date\|string` | - | Max selectable date. |
| `minDate` | `date\|string` | - | Min selectable date. |
| `monthFormat` | `string` | `'short'` | Sets the format for month names. |
| `name` | `string` | - | The name attribute for the input element. |
| `navigation` | `boolean` | `true` | Show arrows navigation. |
| `navYearFirst` | `boolean` | - | Reorder year-month navigation, and render year first. |
| `placeholder` | `string` | `'Select date'` | Specifies a short hint that is visible in the input. |
| `previewDateOnHover` | `boolean` | `true` | Enable live preview of dates in input fields when hovering over calendar cells. |
| `selectAdjacementDays` | `boolean` | - | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacementDays` option is set to true. |
| `selectionType` | `string` | `'day'` | Specify the type of date selection as day, week, month, quarter, or year. |
| `showAdjacementDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | - | Set whether to display week numbers in the calendar. |
| `size` | `string` | - | Size the component small or large. |
| `teleport` | `boolean` | `false` | Generates dropdown menu using Teleport. |
| `timepicker` | `boolean` | - | Provide an additional time selection by adding select boxes to choose times. |
| `weekdayFormat` | `func\|number\|string` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | `string` | - | Label displayed over week numbers in the calendar. |
| `yearFormat` | `string` | `'numeric'` | Sets the format for years. |

### Events

| Name | Description |
| --- | --- |
| `date-change` | Callback fired when the date changed. |
| `update:date` | Callback fired when the date changed. |
