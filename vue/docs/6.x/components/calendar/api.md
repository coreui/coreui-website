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
| `ariaNavNextYearsLabel` | `string` | `'Next 12 years'` | Sets the accessible label (`aria-label`) of the button that turns the years view to the next page of years. |
| `ariaNavPrevMonthLabel` | `string` | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. |
| `ariaNavPrevYearLabel` | `string` | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. |
| `ariaNavPrevYearsLabel` | `string` | `'Previous 12 years'` | Sets the accessible label (`aria-label`) of the button that turns the years view to the previous page of years. |
| `ariaNothingToPickLabel` | `string` | `'Nothing on this page can be picked'` | Sets the description (`aria-describedby`) of a grid in which nothing can be picked, such as a page wholly outside `minDate` / `maxDate` or one that `disabledDates` covers, also announced when the calendar turns to such a page. An empty string leaves the grid without a description. |
| `ariaSelectedDateAnnouncement` | `string` | `'Selected date: {date}'` | Sets the message announced when a click or Enter / Space picks a date, and with `range` when both ends fall on the same day. `{date}` is replaced by the full name of what was picked, such as `Wednesday, August 12, 2026` or `August 10 – 16, 2026`. An empty string announces nothing. |
| `ariaSelectedRangeAnnouncement` | `string` | `'Selected range: {start} to {end}'` | Sets the message announced with `range` when a pick leaves both ends set. `{start}` and `{end}` are replaced by the full names of its ends. An empty string announces nothing. |
| `ariaWeekNumberLabel` | `(weekNumber: number) => string \| undefined` | - | Names each week number for screen readers: a function that takes the week number and returns its name. Without it the name is the locale's word for week and the number, such as `Week 36`. Keep the number in the name, so a voice-control user can say what they see. |
| `calendarDate` | - | - | Default date of the component |
| `calendars` | `number` | `1` | The number of calendars that render on desktop devices. |
| `dayFormat` | `func\|string` | `'numeric'` | Set the format of days. |
| `disabledDates` | `DisabledDate \| DisabledDate[]` | - | Specify the list of dates that cannot be selected. In week, month, quarter and year selection a period is disabled when every day of it is. |
| `endDate` | - | - | Initial selected to date (range). |
| `firstDayOfWeek` | `number` | `1` | Sets the day of start week. - 0 - Sunday, - 1 - Monday, - 2 - Tuesday, - 3 - Wednesday, - 4 - Thursday, - 5 - Friday, - 6 - Saturday, |
| `locale` | `string` | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `maxDate` | - | - | Max selectable date. The days after its day are disabled, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. |
| `minDate` | - | - | Min selectable date. The days before its day are disabled, and a time of day it carries leaves its own day selectable. In week selection its whole week stays selectable. |
| `monthFormat` | `string` | `'short'` | Sets the format for month names. |
| `range` | `boolean` | - | Allow range selection. |
| `selectAdjacentDays` | `boolean` | - | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to true. A picked day of an adjacent month keeps the month on screen and shows as selected with an outline on a subtle background instead of the solid fill. |
| `selectEndDate` | `boolean` | - | Toggle select mode between start and end date. |
| `selectionType` | `SelectionTypes` | `'day'` | Specify the type of date selection as day, week, month, quarter, or year. |
| `showAdjacentDays` | `boolean` | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | `boolean` | - | Set whether to display week numbers in the calendar. |
| `startDate` | - | - | Initial selected date. |
| `weekdayFormat` | `func\|number\|string` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | `string` | - | Label displayed over week numbers in the calendar. Without it the column is named for screen readers with the locale's word for week. |
| `yearFormat` | `string` | `'numeric'` | Sets how the year cells of the years view write the year: `'numeric'` (2026) or `'2-digit'` (26). The navigation always writes the full year. |

### Events

| Name | Description |
| --- | --- |
| `calendar-date-change` | Callback fired when the calendar date changed. |
| `start-date-change` | Callback fired when the start date changed. |
| `end-date-change` | Callback fired when the end date changed. |
| `select-end-change` | Callback fired when the range selection switches between picking the start and the end date. |
| `view-change` | Callback fired when the view changes between days, months, quarters or years, and with the starting view each time the calendar mounts. |
