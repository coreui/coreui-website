# Angular Calendar Component

> The Angular Calendar Component is a versatile, customizable tool for creating responsive calendars in Angular, supporting day, month, and year selection, with global locales.

## Example

Explore the Angular Calendar basic usage through sample code snippets demonstrating its core functionality.

### Days

Select specific days using the Angular Calendar component. The example below shows basic usage.

### Weeks

Set the `selectionType` to `week` to enable selection of entire week. You can also add `showWeekNumber` to show week numbers.

### Months

Set the `selectionType` property to `month` to enable selection of entire months.

### Years

Set the `selectionType` property to `year` to enable years range selection.

## Multiple calendar panels

Display multiple calendar panels side by side by setting the `calendars` property. This can be useful for selecting ranges or comparing dates across different months.

## Range selection

Enable `range` selection to allow users to pick a start and end date. This example shows how to configure the Angular Calendar component to handle date ranges.

## Disabled dates

The Calendar component includes functionality to disable specific dates, such as weekends or holidays, using the `disabledDates` prop. This prop takes an array of dates to determine which dates should be disabled.
Other useful props include `minDate` and `maxDate` to set the minimum and maximum selectable dates. The `dateFilter` prop can be used to apply custom logic to determine which dates are selectable.

## Non-english locale

The CoreUI Angular Calendar allows users to display dates in non-English locales, making it suitable for international applications.

### Auto
By default, the Calendar component uses the browser's default locale. However, you can easily configure it to use a different locale supported by the JavaScript Internationalization API. This feature helps create inclusive and accessible applications for a diverse audience.

### Chinese

Here is an example of the Angular Calendar component with Chinese locale settings.

### Japanese

Below is an example of the Angular Calendar component with Japanese locale settings.

### Korean

Here is an example of the Angular Calendar component with Korean locale settings.

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew
Example of the Angular Calendar component with RTL support, using the Hebrew locale.

### Persian
Example of the Angular Calendar component with Persian locale settings.

## Customizing

### CSS variables

The Angular Calendar uses local CSS variables on `.calendar` for real-time customization. Values for these CSS variables are set via Sass, but they can also be overridden directly in the component for dynamic styling.

```scss
--cui-calendar-table-margin: #{$calendar-table-margin};
--cui-calendar-table-cell-size: #{$calendar-table-cell-size};
--cui-calendar-nav-padding: #{$calendar-nav-padding};
--cui-calendar-nav-border-color: #{$calendar-nav-border-color};
--cui-calendar-nav-border: #{$calendar-nav-border-width} solid var(--cui-calendar-nav-border-color);
--cui-calendar-nav-date-color: #{$calendar-nav-date-color};
--cui-calendar-nav-date-hover-color: #{$calendar-nav-date-hover-color};
--cui-calendar-nav-icon-width: #{$calendar-nav-icon-width};
--cui-calendar-nav-icon-height: #{$calendar-nav-icon-height};
--cui-calendar-nav-icon-double-next: #{escape-svg($calendar-nav-icon-double-next)};
--cui-calendar-nav-icon-double-prev: #{escape-svg($calendar-nav-icon-double-prev)};
--cui-calendar-nav-icon-next: #{escape-svg($calendar-nav-icon-next)};
--cui-calendar-nav-icon-prev: #{escape-svg($calendar-nav-icon-prev)};
--cui-calendar-nav-icon-color: #{$calendar-nav-icon-color};
--cui-calendar-nav-icon-hover-color: #{$calendar-nav-icon-hover-color};
--cui-calendar-cell-header-inner-color: #{$calendar-cell-header-inner-color};
--cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
--cui-calendar-cell-hover-color: #{$calendar-cell-hover-color};
--cui-calendar-cell-hover-bg: #{$calendar-cell-hover-bg};
--cui-calendar-cell-focus-box-shadow: #{$calendar-cell-focus-box-shadow};
--cui-calendar-cell-disabled-color: #{$calendar-cell-disabled-color};
--cui-calendar-cell-selected-color: #{$calendar-cell-selected-color};
--cui-calendar-cell-selected-bg: #{$calendar-cell-selected-bg};
--cui-calendar-cell-range-bg: #{$calendar-cell-range-bg};
--cui-calendar-cell-range-hover-bg: #{$calendar-cell-range-hover-bg};
--cui-calendar-cell-range-hover-border-color: #{$calendar-cell-range-hover-border-color};
--cui-calendar-cell-today-color: #{$calendar-cell-today-color};
--cui-calendar-cell-week-number-color: #{$calendar-cell-week-number-color};
```

#### How to use CSS variables

```ts
const vars = {
'--my-css-var': 10,
'--my-another-css-var': "red"
}
```

```html
<c-calendar [ngStyle]="vars" />
```

### SASS variables

```scss
$calendar-table-margin:                      .5rem !default;
$calendar-table-cell-size:                   2.75rem !default;

$calendar-nav-padding:                       .5rem !default;
$calendar-nav-border-width:                  1px !default;
$calendar-nav-border-color:                  var(--cui-border-color) !default;
$calendar-nav-date-color:                    var(--cui-body-color) !default;
$calendar-nav-date-hover-color:              var(--cui-primary) !default;
$calendar-nav-icon-width:                    1rem !default;
$calendar-nav-icon-height:                   1rem !default;
$calendar-nav-icon-color:                    var(--cui-tertiary-color) !default;
$calendar-nav-icon-hover-color:              var(--cui-body-color) !default;

$calendar-nav-icon-double-next:              url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'>&lt;polygon fill='#000' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'>&lt;/polygon>&lt;polygon fill='#000' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'>&lt;/polygon>&lt;/svg>") !default;
$calendar-nav-icon-double-prev:              url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'>&lt;polygon fill='#000' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'>&lt;/polygon>&lt;polygon fill='#000' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'>&lt;/polygon>&lt;/svg>") !default;
$calendar-nav-icon-next:                     url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'>&lt;polygon fill='#000' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'>&lt;/polygon>&lt;/svg>") !default;
$calendar-nav-icon-prev:                     url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'>&lt;polygon fill='#000' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'>&lt;/polygon>&lt;/svg>") !default;

$calendar-cell-header-inner-color:           var(--cui-secondary-color) !default;
$calendar-cell-week-number-color:            var(--cui-secondary-color) !default;

$calendar-cell-hover-color:                  var(--cui-body-color) !default;
$calendar-cell-hover-bg:                     var(--cui-tertiary-bg) !default;
$calendar-cell-disabled-color:               var(--cui-tertiary-color) !default;

$calendar-cell-focus-box-shadow:             $focus-ring-box-shadow !default;

$calendar-cell-selected-color:               $white !default;
$calendar-cell-selected-bg:                  var(--cui-primary) !default;

$calendar-cell-range-bg:                     rgba(var(--cui-primary-rgb), .125) !default;
$calendar-cell-range-hover-bg:               rgba(var(--cui-primary-rgb), .25) !default;
$calendar-cell-range-hover-border-color:     var(--cui-primary) !default;

$calendar-cell-today-color:                  var(--cui-danger) !default;

$calendar-cell-week-number-color:            var(--cui-tertiary-color) !default;
```

## API

### Import

```ts
// standalone components
import { CalendarComponent } from '@coreui/angular';

@Component({
    standalone: true,
    imports: [CalendarComponent]
    // ...   
})
export class ...
```

```typescript
// ng modules
import { CalendarModule } from '@coreui/angular';

@NgModule({
    imports: [CalendarModule]
    // ...
})
export class ...
```

### c-calendar
_component_

#### Inputs

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
| `ariaNextMonthLabel` | A string that provides an accessible label for the button that navigates to the next month in the calendar. This label is read by screen readers to describe the action associated with the button. | `string` | _Next month_ |
| `ariaNextYearLabel` | A string that provides an accessible label for the button that navigates to the next year in the calendar. This label is intended for screen readers to help users understand the button's functionality. | `string` | _Next year_ |
| `ariaPrevMonthLabel` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. | `string` | _Previous month_ |
| `ariaPrevYearLabel` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. | `string` | _Previous year_ |
| `calendarDate` | Default date month of the component. | `Date` | _undefined_ |
| `calendars` | The number of calendars that render on desktop devices. | `number` | _1_ |
| `dateFilter` | Custom function to determine selectable dates. | `(date: Date) => boolean`) | _undefined_ |
| `dayFormat` | Set the format of day number. | `numeric` \| `2-digit` \| `(date: Date) => string \| number` | _numeric_ |
| `disabledDates` | List of dates that cannot be selected. | `(Date` \| `Date[])[]` | _undefined_ |
| `endDate` | Initial selected start date. | `Date` | _undefined_ |
| `firstDayOfWeek` | Sets the first day of a week. | `number` | _1_ (Monday) |
| `locale` | Sets the default locale for components. If not set, it is inherited from the browser. | `string` | _default_ |
| `maxDate` | Max selectable date. | `Date` | _undefined_ |
| `minDate` | Min selectable date. | `Date` | _undefined_ |
| `navYearFirst` | Reorder year-month navigation, and render year first. | `boolean` | _false_ |
| `navigation` | Show arrows navigation. | `boolean` | _true_ |
| `range` | Allow range selection. | `boolean` | _undefined_ |
| `selectAdjacentDays` | Days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacentDays` option is set to `true`. | `boolean` | _false_ |
| `selectionType` | Specify the type of date selection as day, week, month, or year. | `day` \| `week` \| `month` \| `year` | _day_ |
| `showAdjacentDays` | Display dates in adjacent months (non-selectable) at the start/end of the current month. | `boolean` | _true_ |
| `showWeekNumber` | Display ISO week numbers in month view. | `boolean` | _undefined_ |
| `startDate` | Initial selected start date. | `Date` | _undefined_ |
| `weekNumbersLabel` | Label displayed over week numbers in the calendar. | `string` | _undefined_ |
| `weekdayFormat` | Set length or format of day name. | `number` \| `long` \| `narrow` \| `short` | _2_ |

##### Outputs

| name | description | type |
| ---- | ----------- | ---- |
| `startDateChange` | Event emitted on `startDate` change | `Date` |
| `endDateChange` | Event emitted on `startDate` change | `Date` |
| `dateHover` | Event emitted on calendar cell hover | `Date` |
| `calendarDateChange` | Event emitted on calendar month change | `Date` |
| `viewChange` | Event emitted on `view` change | `days \| months \| years` |
