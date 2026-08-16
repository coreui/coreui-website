# Vue Calendar Component API

> Explore the API reference for the Vue Calendar component and discover how to effectively utilize its props for customization.

## CCalendar

```jsx
import { CCalendar } from '@coreui/vue-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaNavNextMonthLabel` | `string` | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the calendar. This label is read by screen readers to describe the action associated with the button. |
| `ariaNavNextYearLabel` | `string` | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the calendar. This label is intended for screen readers to help users understand the button's functionality. |
| `ariaNavPrevMonthLabel` | `string` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. |
| `ariaNavPrevYearLabel` | `string` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. |
| `calendarDate` | - | - | Default date of the component |
| `calendars` | `number` | `1` | The number of calendars that render on desktop devices. |
| `dayFormat` | `func\|string` | `'numeric'` | Set the format of days. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | - | Specify the list of dates that cannot be selected. |
| `endDate` | - | - | Initial selected to date (range). |
| `firstDayOfWeek` | `number` | `1` | Sets the day of start week. - 0 - Sunday, - 1 - Monday, - 2 - Tuesday, - 3 - Wednesday, - 4 - Thursday, - 5 - Friday, - 6 - Saturday, |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `maxDate` | - | - | Max selectable date. |
| `minDate` | - | - | Min selectable date. |
| `monthFormat` | `string` | `'short'` | Sets the format for month names. |
| `navigation` | `boolean` | `true` | Show arrows navigation. |
| `navYearFirst` | `boolean` | - | Reorder year-month navigation, and render year first. |
| `range` | `boolean` | - | Allow range selection. |
| `selectAdjacementDays` | `boolean` | - | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacementDays` option is set to true. |
| `selectEndDate` | `boolean` | - | Toggle select mode between start and end date. |
| `selectionType` | `SelectionTypes` | `'day'` | Specify the type of date selection as day, week, month, quarter, or year. |
| `showAdjacementDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | - | Set whether to display week numbers in the calendar. |
| `startDate` | - | - | Initial selected date. |
| `weekdayFormat` | `func\|number\|string` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | `string` | - | Label displayed over week numbers in the calendar. |
| `yearFormat` | `string` | `'numeric'` | Sets the format for years. |

### Events

| Name | Description |
| --- | --- |
| `date-hover` | Callback fired when the user hovers over the calendar cell. |
| `calendar-date-change` | Callback fired when the calendar date changed. |
| `start-date-change` | Callback fired when the start date changed. |
| `end-date-change` | Callback fired when the end date changed. |
| `select-end-change` | Callback fired when the range selection switches between picking the start and the end date. |
