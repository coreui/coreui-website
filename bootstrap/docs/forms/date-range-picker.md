# Bootstrap 5 Date Range Picker

> Bootstrap Date Range Picker is a customizable, user-friendly calendar tool for Bootstrap forms, supporting date ranges, localization, and validation for accurate date selection.

## Example

Below is an example of a basic Bootstrap DateRangePicker.

### Days

The following examples demonstrating how to pick dates using the Bootstrap Date Range Picker Component.

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div data-coreui-locale="en-US" data-coreui-toggle="date-range-picker"></div>
  </div>
  <div class="col-sm-6">
    <div
      data-coreui-start-date="2022/08/03"
      data-coreui-end-date="2022/08/17"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
</div>
```

#### With timepicker

In addition to supporting date selection, our Bootstrap Date Range Picker component also includes a Time Picker feature, allowing users to select a specific time of day. Bootstrap Time Picker can be enabled by adding `data-coreui-timepicker="true"`.

```html
  <div class="row">
  <div class="col-lg-7 mb-3">
    <div
      data-coreui-locale="en-US"
      data-coreui-timepicker="true"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
</div>
<div class="row">
  <div class="col-lg-7">
    <div
      data-coreui-start-date="2022/08/03 02:34:17 AM"
      data-coreui-end-date="2022/09/17 11:29:41 PM"
      data-coreui-locale="en-US"
      data-coreui-timepicker="true"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
</div>
```

#### With footer

To add a footer, use `data-coreui-footer="true"`. The footer can display extra information or actions related to the selected date, such as buttons for "Today" or "Clear".

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div
      data-coreui-footer="true"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
  <div class="col-sm-6">
    <div
      data-coreui-start-date="2022/08/03"
      data-coreui-end-date="2022/09/17"
      data-coreui-footer="true"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
</div>
```

### Weeks

If you want to select the weeks, add the `data-coreui-selection-type="week"` attribute. You can also use `data-coreui-show-week-number="true"` to show week numbers.

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div 
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-show-week-number="true"
      data-coreui-selection-type="week">
    </div>
  </div>
  <div class="col-sm-6">
    <div
      data-coreui-start-date="2025W07"
      data-coreui-end-date="2025W12"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-show-week-number="true"
      data-coreui-selection-type="week">
    </div>
  </div>
</div>
```

### Months

Select range of months by adding the `data-coreui-selection-type="month"` attribute.

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div 
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-selection-type="month">
    </div>
  </div>
  <div class="col-sm-6">
    <div
      data-coreui-start-date="2022-08"
      data-coreui-end-date="2023-05"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-selection-type="month">
    </div>
  </div>
</div>
```

### Quarters

Select range of quartes by adding the `data-coreui-selection-type="quarter"` attribute.

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div 
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-selection-type="quarter">
    </div>
  </div>
  <div class="col-sm-6">
    <div
      data-coreui-start-date="2025Q3"
      data-coreui-end-date="2026Q2"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-selection-type="quarter">
    </div>
  </div>
</div>
```

### Years

Add the `data-coreui-selection-type="year"` attribute to allow a pick range of years.

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-selection-type="year">
    </div>
  </div>
  <div class="col-sm-6">
    <div
      data-coreui-start-date="2022"
      data-coreui-end-date="2028"
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker"
      data-coreui-selection-type="year">
    </div>
  </div>
</div>
```

## Sizing

Set heights using `data-coreui-size` attribute like `data-coreui-size="lg"` and `data-coreui-size="sm"`.

```html
<div class="row">
  <div class="col-lg-6 mb-3">
    <div data-coreui-locale="en-US" data-coreui-size="lg" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-locale="en-US" data-coreui-size="sm" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

## Disabled

Add the `data-coreui-disabled="true"` attribute on an input to give it a grayed out appearance and remove pointer events.

```html
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-disabled="true" data-coreui-locale="en-US" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

## Readonly

Add the `data-coreui-input-read-only="true"` boolean attribute to prevent modification of the input's value.

```html
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-input-read-only="true" data-coreui-locale="en-US" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

## Preview date on hover

By default, the date range picker shows a live preview in the input fields when hovering over calendar dates. To disable this feature, set `data-coreui-preview-date-on-hover="false"`.

```html
  <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <label class="form-label">With preview (default)</label>
    <div
      data-coreui-locale="en-US"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
  <div class="col-sm-6">
    <label class="form-label">Without preview</label>
    <div
      data-coreui-locale="en-US"
      data-coreui-preview-date-on-hover="false"
      data-coreui-toggle="date-range-picker">
    </div>
  </div>
</div>
```

## Disabled dates

The CoreUI Bootstrap DateRangePicker component allows you to disable certain dates, such as weekends or holidays. You can accomplish this by passing the `disabledDates` option to the component, which determines which dates should be disabled based on custom logic.

```html
<div class="row">
  <div class="col-sm-6">
    <div id="myDateRangePickerDisabledDates"></div>
  </div>
</div>
```

```js
const myDateRangePickerDisabledDates = document.getElementById('myDateRangePickerDisabledDates')

const optionsDateRangePickerDisabledDates = {
  locale: 'en-US',
  calendarDate: new Date(2022, 2, 1),
  disabledDates: [
    [new Date(2022, 2, 4), new Date(2022, 2, 7)],
    new Date(2022, 2, 16),
    new Date(2022, 3, 16),
    [new Date(2022, 4, 2), new Date(2022, 4, 8)]
  ],
  maxDate: new Date(2022, 5, 0),
  minDate: new Date(2022, 1, 1)
}

new coreui.DateRangePicker(myDateRangePickerDisabledDates, optionsDateRangePickerDisabledDates)
```

### Disabling weekends

You can disable weekends by passing a function to the `disabledDates` option. Here's how to do it:

```html
<div class="row">
  <div class="col-lg-5">
    <div id="myDateRangePickerDisabledDates2"></div>
  </div>
</div>
```

```js
const myDateRangePickerDisabledDates2 = document.getElementById('myDateRangePickerDisabledDates2')

const optionsDateRangePickerDisabledDates2 = {
  disabledDates(date) {
    const day = date.getDay()
    return day === 0 || day === 6
  },
  locale: 'en-US'
}

new coreui.DateRangePicker(myDateRangePickerDisabledDates2, optionsDateRangePickerDisabledDates2)
```

## Custom ranges

In order to configure custom date ranges in the Date Range component, you must use the `ranges` option to define a set of predefined ranges. These ranges can include predefined options such as "Today", "Yesterday", "Last 7 Days", etc.

```html
<div class="row">
  <div class="col-sm-6">
    <div id="myDateRangePickerCustomRanges"></div>
  </div>
</div>
```

```js
const myDateRangePickerCustomRanges = document.getElementById('myDateRangePickerCustomRanges')

const optionsCustomRanges = {
  locale: 'en-US',
  ranges: {
    Today: [new Date(), new Date()],
    Yesterday: [
      new Date(new Date().setDate(new Date().getDate() - 1)),
      new Date(new Date().setDate(new Date().getDate() - 1))
    ],
    'Last 7 Days': [
      new Date(new Date().setDate(new Date().getDate() - 6)),
      new Date(new Date())
    ],
    'Last 30 Days': [
      new Date(new Date().setDate(new Date().getDate() - 29)),
      new Date(new Date())
    ],
    'This Month': [
      new Date(new Date().setDate(1)),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
    ],
    'Last Month': [
      new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1),
      new Date(new Date().getFullYear(), new Date().getMonth(), 0)
    ]
  }
}

new coreui.DateRangePicker(myDateRangePickerCustomRanges, optionsCustomRanges)

myDateRangePickerCustomRanges.addEventListener('startDateChange.coreui.date-range-picker', event => {
  console.log(event.date)
})
```

## Non-english locale

CoreUI Date Range Picker allows users to display dates and times in a non-English locale. This is useful for applications with international users or that need to support multiple languages. 

### Auto

By default, the DateRangePicker component uses the default browser locale, but it can be easily configured to use a different locale supported by the JavaScript Internationalization API. To set the locale, you can pass the desired language code as a prop to the DatePicker component. This feature enables the creation of more inclusive and accessible applications that cater to a diverse audience.

```html
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

### Chinese

Here is an example of a simple Bootstrap Date Range Picker with Chinese locales.

```html
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-locale="zh-CN" data-coreui-placeholder="入住日期,退房日期" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

### Japanese

Here is a basic Date Range Picker with Japanese locales.

```html
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-locale="ja" data-coreui-placeholder="日付を選択,終了日" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

### Korean

Take a look at the following example, which demonstrates a simple date picker designed to work with Korean locales.

```html
<div class="row">
  <div class="col-sm-6">
    <div data-coreui-locale="ko" data-coreui-placeholder="날짜 선택,종료일" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the `$enable-rtl` variables in scss.

### Hebrew

```html
<div class="row" dir="rtl">
  <div class="col-sm-6">
    <div data-coreui-locale="he-IL" data-coreui-placeholder="בחר תאריך,תאריך סיום" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

### Persian

```html
<div class="row" dir="rtl">
  <div class="col-sm-6">
    <div data-coreui-locale="fa-IR" data-coreui-placeholder="تاریخ شروع,تاریخ پایان" data-coreui-toggle="date-range-picker"></div>
  </div>
</div>
```

## Custom formats

As of v5.0.0, the `format` property is removed in Date Range Picker. Instead, utilize the `inputDateFormat` to format dates into custom strings and `inputDateParse` to parse custom strings into Date objects.

The provided code demonstrates how to use the `inputDateFormat` and `inputDateParse` properties. In this example, we use the `dayjs` library to format and parse dates.

The `inputDateFormat` property formats the date into a custom string, while the `inputDateParse` property parses a custom string into a Date object. The code showcases the date range in different formats based on locale, such as 'MMMM DD, YYYY' and 'YYYY MMMM DD', and accommodates different locales, like 'en-US' and 'es-ES'.

```html
<div class="row">
  <div class="col-lg-7">
    <div id="myDateRangePickerCustomFormats1"></div>
  </div>
</div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js"></script>
```

```js
const myDateRangePickerCustomFormats1 = document.getElementById('myDateRangePickerCustomFormats1')

dayjs.extend(window.dayjs_plugin_customParseFormat)
const optionsDateRangePickerCustomFormats1 = {
  locale: 'en-US',
  startDate: new Date(2022, 8, 3),
  endDate: new Date(2022, 8, 17),
  inputDateFormat: date => dayjs(date).locale('en').format('MMMM DD, YYYY'),
  inputDateParse: date => dayjs(date, 'MMMM DD, YYYY', 'en').toDate()
}

new coreui.DateRangePicker(myDateRangePickerCustomFormats1, optionsDateRangePickerCustomFormats1)
```

To use localized dates, we need to additionally add locale files, in this case, Spanish:

```html
<div class="row">
  <div class="col-lg-7">
    <div id="myDateRangePickerCustomFormats2"></div>
  </div>
</div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/es.js"></script>
```

```js
const myDateRangePickerCustomFormats2 = document.getElementById('myDateRangePickerCustomFormats2')

dayjs.extend(window.dayjs_plugin_customParseFormat)
dayjs.locale('es')
const optionsDateRangePickerCustomFormats2 = {
  locale: 'es-ES',
  startDate: new Date(2022, 8, 3),
  endDate: new Date(2022, 8, 17),
  inputDateFormat: date => dayjs(date).locale('es').format('YYYY MMMM DD'),
  inputDateParse: date => dayjs(date, 'YYYY MMMM DD', 'es').toDate()
}

new coreui.DateRangePicker(myDateRangePickerCustomFormats2, optionsDateRangePickerCustomFormats2)
```

## Usage

### Via data attributes

Add `data-coreui-toggle="date-range-picker"` to a `div` element.

```html
<div data-coreui-toggle="date-range-picker"></div>
```

### Via JavaScript

Call the date range picker via JavaScript:

```html
<div class="date-range-picker"></div>
```

```js
const dateRangePickerElementList = Array.prototype.slice.call(document.querySelectorAll('.date-range-picker'))
const dateRangePickerList = dateRangePickerElementList.map(dateRangePickerEl => {
  return new coreui.DateRangePicker(dateRangePickerEl)
})
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

> Note that for security reasons the `sanitize`, `sanitizeFn`, and `allowList` options cannot be supplied using data attributes.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) | Object which contains allowed attributes and tags. |
| `ariaNavNextMonthLabel` | string | `'Next month'` | A string that provides an accessible label for the button that navigates to the next month in the calendar. This label is read by screen readers to describe the action associated with the button. |
| `ariaNavNextYearLabel` | string | `'Next year'` | A string that provides an accessible label for the button that navigates to the next year in the calendar. This label is intended for screen readers to help users understand the button's functionality. |
| `ariaNavPrevMonthLabel` | string | `'Previous month'` | A string that provides an accessible label for the button that navigates to the previous month in the calendar. Screen readers will use this label to explain the purpose of the button. |
| `ariaNavPrevYearLabel` | string | `'Previous year'` | A string that provides an accessible label for the button that navigates to the previous year in the calendar. This label helps screen reader users understand the button's function. |
| `calendarDate` | date, number, string, null | `null` | Default date of the component. |
| `calendars` | number | `2` | The number of calendars that render on desktop devices. |
| `cancelButton` | boolean, string | `'Cancel'` | Cancel button inner HTML |
| `cancelButtonClasses` | array, string | `['btn', 'btn-sm', 'btn-ghost-primary']` | CSS class names that will be added to the cancel button |
| `cleaner` | boolean | `true` | Enables selection cleaner element. |
| `confirmButton` | boolean, string | `'OK'` | Confirm button inner HTML |
| `confirmButtonClasses` | array, string | `['btn', 'btn-sm', 'btn-primary']` | CSS class names that will be added to the confirm button |
| `container` | string, element, false | `false` | Appends the dropdown to a specific element. Example: `container: 'body'`. |
| `dayFormat` | `'numeric'`, `'2-digit'` | `'numeric'` | Sets the format for days. Accepts a built-in format (`'numeric'` or `'2-digit'`) |
| `disabled` | boolean | `false` | Toggle the disabled state for the component. |
| `disabledDates` | array, function, null | `null` | Specify the list of dates that cannot be selected. |
| `endDate` | date, number, string, null | `null` | Initial selected to date (range). |
| `endName` | string, null | `null` | Set the name attribute for the end date input element. |
| `firstDayOfWeek` | number | `1` | <p>Sets the day of start week.</p>  <ul><li>`0` - Sunday</li><li>`1` - Monday</li><li>`2` - Tuesday</li><li>`3` - Wednesday</li><li>`4` - Thursday</li><li>`5` - Friday</li><li>`6` - Saturday</li></ul> |
| `footer` | boolean | `false` | Toggle visibility of footer element. |
| `indicator` | boolean | `true` | Toggle visibility or set the content of the input indicator. |
| `inputDateFormat` | function, null | `null` | Custom function to format the selected date into a string according to a custom format. |
| `inputDateParse` | function, null | `null` | Custom function to parse the input value into a valid Date object. |
| `inputOnChangeDelay` | number | `750` | Delay in milliseconds before processing manual date input changes. |
| `inputReadOnly` | boolean | `false` | Toggle the readonly state for the component. |
| `invalid` | boolean | `false` | Toggle the invalid state for the component. |
| `locale` | string | `'default'` | Sets the default locale for components. If not set, it is inherited from the navigator.language. |
| `maxDate` | date, number, string, null | `null` | Max selectable date. |
| `minDate` | date, number, string, null | `null` | Min selectable date. |
| `monthFormat` | `'long'`, `'narrow'`, `'short'`, `'numeric'`, `'2-digit'` | `'short'` | Sets the format for month names. Accepts built-in formats (`'long'`, `'narrow'`, `'short'`, `'numeric'`, `'2-digit'`). |
| `placeholder` | string | `['Start date', 'End date']` | Specifies a short hint that is visible in the input. |
| `previewDateOnHover` | boolean | `true` | Enable live preview of dates in input fields when hovering over calendar cells. |
| `ranges` | object | `{}` | Predefined date ranges the user can select from. |
| `rangesButtonsClasses` | array, string | `['btn', 'btn-ghost-secondary']` | CSS class names that will be added to ranges buttons |
| `renderDayCell` | function, null | `null` | Custom function to render day cells. Receives `date` and `meta` object (with `isDisabled`, `isInCurrentMonth`, `isInRange`, `isSelected`, `isToday`) as parameters and should return HTML string. |
| `renderMonthCell` | function, null | `null` | Custom function to render month cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`) as parameters and should return HTML string. |
| `renderQuarterCell` | function, null | `null` | Custom function to render quarter cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`) as parameters and should return HTML string. |
| `renderYearCell` | function, null | `null` | Custom function to render year cells. Receives `date` and `meta` object (with `isDisabled`, `isInRange`, `isSelected`) as parameters and should return HTML string. |
| `sanitize` | boolean | `true` | Enable or disable the sanitization. If activated `renderDayCell`, `renderMonthCell`, `renderQuarterCell`, and `renderYearCell` options will be sanitized. |
| `sanitizeFn` | null, function | `null` | Here you can supply your own sanitize function. This can be useful if you prefer to use a dedicated library to perform sanitization. |
| `selectAdjacementDays` | boolean | `false` | Set whether days in adjacent months shown before or after the current month are selectable. This only applies if the `showAdjacementDays` option is set to true. |
| `selectionType` | `'day'`, `'week'`, `'month'`, `'quarter'`, `'year'` | `day` | Specify the type of date selection as day, week, month, quarter, or year. |
| `separator` | boolean | `true` | Toggle visibility or set the content of the inputs separator. |
| `showAdjacementDays` | boolean | `true` | Set whether to display dates in adjacent months (non-selectable) at the start and end of the current month. |
| `showWeekNumber` | boolean | `false` | Set whether to display week numbers in the calendar. |
| `size` | `'sm'`, `'lg'` | `null` | Size the component small or large. |
| `startDate` | date, number, string, null | `null` | Initial selected date. |
| `startName` | string, null | `null` | Set the name attribute for the start date input element. |
| `timepicker` | boolean | `false` | Provide an additional time selection by adding select boxes to choose times. |
| `todayButton` | boolean, string | `'Today'` | Toggle visibility or set the content of the today button. Set to `false` to hide it. |
| `todayButtonClasses` | array, string | `['btn', 'btn-sm', 'btn-primary', 'me-auto']` | CSS class names that will be added to the today button |
| `valid` | boolean | `false` | Toggle the valid state for the component. |
| `weekdayFormat` | number, `'long'`, `'narrow'`, `'short'` | `2` | Set length or format of day name. |
| `weekNumbersLabel` | string | `null` | Label displayed over week numbers in the calendar. |
| `yearFormat` | `'numeric'`, `'2-digit'` | `'numeric'` | Sets the format for years. Accepts built-in formats (`'numeric'` or `'2-digit'`) |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clear selection of the date range picker. |
| `reset` | Reset selection of the date range picker to the initial value. |
| `update` | Updates the configuration of the date range picker. |
| `dispose` | Destroys a component. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the date range picker instance associated to a DOM element, you can use it like this: `coreui.DateRangePicker.getInstance(element)` |
| `getOrCreateInstance` | Static method which returns a date range picker instance associated to a DOM element or create a new one in case it wasn't initialized. You can use it like this: `coreui.DateRangePicker.getOrCreateInstance(element)` |

### Events

| Method | Description |
| --- | --- |
| `endDateChange.coreui.date-range-picker` | Callback fired when the end date changed. |
| `startDateChange.coreui.date-range-picker` | Callback fired when the start date changed. |
| `show.coreui.date-range-picker` | Fires immediately when the show instance method is called. |
| `shown.coreui.date-range-picker` | Fired when the calendar has been made visible to the user and CSS transitions have completed. |
| `hide.coreui.date-range-picker` | Fires immediately when the hide instance method has been called. |
| `hidden.coreui.date-range-picker` | Fired when the calendar has finished being hidden from the user and CSS transitions have completed. |

```js
const myDateRangePicker = document.getElementById('myDateRangePicker')
myDateRangePicker.addEventListener('endDateChange.coreui.date-range-picker', date => {
  // do something...
})
```

## Customizing

### CSS variables

DateRangePickers use local CSS variables on `.date-picker` and `.calendar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-date-picker-zindex: #{$date-picker-zindex};
--cui-date-picker-font-family: #{$date-picker-font-family};
--cui-date-picker-font-size: #{$date-picker-font-size};
--cui-date-picker-font-weight: #{$date-picker-font-weight};
--cui-date-picker-line-height: #{$date-picker-line-height};
--cui-date-picker-color: #{$date-picker-color};
--cui-date-picker-bg: #{$date-picker-bg};
--cui-date-picker-box-shadow: #{$date-picker-box-shadow};
--cui-date-picker-border-width: #{$date-picker-border-width};
--cui-date-picker-border-color: #{$date-picker-border-color};
--cui-date-picker-border-radius: #{$date-picker-border-radius};
--cui-date-picker-disabled-color: #{$date-picker-disabled-color};
--cui-date-picker-disabled-bg: #{$date-picker-disabled-bg};
--cui-date-picker-disabled-border-color: #{$date-picker-disabled-border-color};
--cui-date-picker-focus-color: #{$date-picker-focus-color};
--cui-date-picker-focus-bg: #{$date-picker-focus-bg};
--cui-date-picker-focus-border-color: #{$date-picker-focus-border-color};
--cui-date-picker-focus-box-shadow: #{$date-picker-focus-box-shadow};
--cui-date-picker-placeholder-color: #{$date-picker-placeholder-color};
--cui-date-picker-padding-y: #{$date-picker-padding-y};
--cui-date-picker-padding-x: #{$date-picker-padding-x};
--cui-date-picker-gap: #{$date-picker-gap};
--cui-date-picker-indicator-width: #{$date-picker-indicator-width};
--cui-date-picker-indicator-icon: #{escape-svg($date-picker-indicator-icon)};
--cui-date-picker-indicator-icon-color: #{$date-picker-indicator-icon-color};
--cui-date-picker-indicator-icon-size: #{$date-picker-indicator-icon-size};
--cui-date-picker-cleaner-width: #{$date-picker-cleaner-width};
--cui-date-picker-cleaner-icon: #{escape-svg($date-picker-cleaner-icon)};
--cui-date-picker-cleaner-icon-color: #{$date-picker-cleaner-icon-color};
--cui-date-picker-cleaner-icon-hover-color: #{$date-picker-cleaner-icon-hover-color};
--cui-date-picker-cleaner-icon-size: #{$date-picker-cleaner-icon-size};
--cui-date-picker-separator-width: #{$date-picker-separator-width};
--cui-date-picker-separator-icon: #{escape-svg($date-picker-separator-icon)};
--cui-date-picker-separator-icon-rtl: #{escape-svg($date-picker-separator-icon-rtl)};
--cui-date-picker-separator-icon-size: #{$date-picker-separator-icon-size};
--cui-date-picker-dropdown-bg: #{$date-picker-dropdown-bg};
--cui-date-picker-dropdown-border-width: #{$date-picker-dropdown-border-width};
--cui-date-picker-dropdown-border-color: #{$date-picker-dropdown-border-color};
--cui-date-picker-dropdown-border-radius: #{$date-picker-dropdown-border-radius};
--cui-date-picker-dropdown-box-shadow: #{$date-picker-dropdown-box-shadow};
--cui-date-picker-ranges-width: #{$date-picker-ranges-width};
--cui-date-picker-ranges-padding: #{$date-picker-ranges-padding};
--cui-date-picker-ranges-border-width: #{$date-picker-ranges-border-width};
--cui-date-picker-ranges-border-color: #{$date-picker-ranges-border-color};
--cui-date-picker-timepicker-width: #{$date-picker-timepicker-width};
--cui-date-picker-timepicker-border-color: #{$date-picker-timepicker-border-color};
--cui-date-picker-timepicker-border-top: #{$date-picker-timepicker-border-width} solid var(--cui-date-picker-timepicker-border-color);
--cui-date-picker-footer-padding: #{$date-picker-footer-padding};
--cui-date-picker-footer-border-width: #{$date-picker-footer-border-width};
--cui-date-picker-footer-border-color: #{$date-picker-footer-border-color};
```

```scss
--cui-calendar-table-margin: #{$calendar-table-margin};
--cui-calendar-table-cell-size: #{$calendar-table-cell-size};
--cui-calendar-nav-padding: #{$calendar-nav-padding};
--cui-calendar-nav-border-color: #{$calendar-nav-border-color};
--cui-calendar-nav-border: #{$calendar-nav-border-width} solid var(--cui-calendar-nav-border-color);
--cui-calendar-nav-btn-padding-x: #{$calendar-nav-btn-padding-x};
--cui-calendar-nav-btn-padding-y: #{$calendar-nav-btn-padding-y};
@include rfs($calendar-nav-btn-font-size, --cui-calendar-nav-btn-font-size);
--cui-calendar-nav-btn-bg: #{$calendar-nav-btn-bg};
--cui-calendar-nav-btn-border-width: #{$calendar-nav-btn-border-width};
--cui-calendar-nav-btn-border-color: #{$calendar-nav-btn-border-color};
--cui-calendar-nav-btn-border-radius: #{$calendar-nav-btn-border-radius};
--cui-calendar-nav-btn-hover-bg: #{$calendar-nav-btn-hover-bg};
--cui-calendar-nav-btn-hover-border-color: #{$calendar-nav-btn-hover-border-color};
--cui-calendar-nav-btn-focus-border-color: #{$calendar-nav-btn-focus-border-color};
--cui-calendar-nav-btn-focus-box-shadow: #{$calendar-nav-btn-focus-box-shadow};
--cui-calendar-nav-date-font-weight: #{$calendar-nav-date-font-weight};
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
--cui-calendar-cell-header-inner-font-weight: #{$calendar-cell-header-inner-font-weight};
--cui-calendar-cell-header-inner-color: #{$calendar-cell-header-inner-color};
--cui-calendar-cell-week-number-font-weight: #{$calendar-cell-week-number-font-weight};
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

### SASS variables

```scss
$date-picker-zindex:                   1000 !default;
$date-picker-font-family:              $input-font-family !default;
$date-picker-font-size:                $input-font-size !default;
$date-picker-font-size-sm:             $input-font-size-sm !default;
$date-picker-font-size-lg:             $input-font-size-lg !default;
$date-picker-font-weight:              $input-font-weight !default;
$date-picker-line-height:              $input-line-height !default;
$date-picker-color:                    $input-color !default;
$date-picker-bg:                       $input-bg !default;
$date-picker-box-shadow:               $box-shadow-inset !default;

$date-picker-border-width:             $input-border-width !default;
$date-picker-border-color:             $input-border-color !default;
$date-picker-border-radius:            $border-radius !default;
$date-picker-border-radius-sm:         $border-radius-sm !default;
$date-picker-border-radius-lg:         $border-radius-lg !default;

$date-picker-invalid-border-color:     $form-invalid-border-color !default;
$date-picker-valid-border-color:       $form-valid-border-color !default;

$date-picker-disabled-color:           $input-disabled-color !default;
$date-picker-disabled-bg:              $input-disabled-bg !default;
$date-picker-disabled-border-color:    $input-disabled-border-color !default;

$date-picker-focus-color:              $input-focus-color !default;
$date-picker-focus-bg:                 $input-focus-bg !default;
$date-picker-focus-border-color:       $input-focus-border-color !default;
$date-picker-focus-box-shadow:         $input-btn-focus-box-shadow !default;

$date-picker-placeholder-color:        var(--cui-secondary-color) !default;

$date-picker-padding-y:                $input-padding-y !default;
$date-picker-padding-x:                $input-padding-x !default;
$date-picker-gap:                      $input-padding-x !default;

$date-picker-padding-y-sm:             $input-padding-y-sm !default;
$date-picker-padding-x-sm:             $input-padding-x-sm !default;
$date-picker-gap-sm:                   $input-padding-x-sm !default;

$date-picker-padding-y-lg:             $input-padding-y-lg !default;
$date-picker-padding-x-lg:             $input-padding-x-lg !default;
$date-picker-gap-lg:                   $input-padding-x-lg !default;

$date-picker-cleaner-width:             1.25rem !default;
$date-picker-cleaner-icon-size:         1rem !default;
$date-picker-cleaner-icon-color:        var(--cui-tertiary-color) !default;
$date-picker-cleaner-icon:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='306.912 214.461 256 265.373 205.088 214.461 182.461 237.088 233.373 288 182.461 338.912 205.088 361.539 256 310.627 306.912 361.539 329.539 338.912 278.627 288 329.539 237.088 306.912 214.461'></polygon><path fill='#000' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path></svg>") !default;
$date-picker-cleaner-icon-hover-color:  var(--cui-body-color) !default;

$date-picker-cleaner-width-sm:          1rem !default;
$date-picker-cleaner-width-lg:          1.5rem !default;
$date-picker-cleaner-icon-size-sm:      .875rem !default;
$date-picker-cleaner-icon-size-lg:      1.25rem !default;

$date-picker-indicator-width:               1.25rem !default;
$date-picker-indicator-icon-size:           1rem !default;
$date-picker-indicator-icon-color:          var(--cui-tertiary-color) !default;
$date-picker-indicator-icon:                url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><path fill='#000' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z'></path><rect width='32' height='32' x='112' y='224' fill='#000'></rect><rect width='32' height='32' x='200' y='224' fill='#000'></rect><rect width='32' height='32' x='280' y='224' fill='#000'></rect><rect width='32' height='32' x='368' y='224' fill='#000'></rect><rect width='32' height='32' x='112' y='296' fill='#000'></rect><rect width='32' height='32' x='200' y='296' fill='#000'></rect><rect width='32' height='32' x='280' y='296' fill='#000'></rect><rect width='32' height='32' x='368' y='296' fill='#000'></rect><rect width='32' height='32' x='112' y='368' fill='#000'></rect><rect width='32' height='32' x='200' y='368' fill='#000'></rect><rect width='32' height='32' x='280' y='368' fill='#000'></rect><rect width='32' height='32' x='368' y='368' fill='#000'></rect></svg>") !default;
$date-picker-indicator-invalid-icon:        $date-picker-indicator-icon !default;
$date-picker-indicator-invalid-icon-color:  var(--cui-form-invalid-color) !default;
$date-picker-indicator-valid-icon:          $date-picker-indicator-icon !default;
$date-picker-indicator-valid-icon-color:    var(--cui-form-valid-color) !default;

$date-picker-indicator-width-sm:            1rem !default;
$date-picker-indicator-width-lg:            1.5rem !default;
$date-picker-indicator-icon-size-sm:        .875rem !default;
$date-picker-indicator-icon-size-lg:        1.25rem !default;

$date-picker-separator-width:            1.25rem !default;
$date-picker-separator-icon-size:        1rem !default;
$date-picker-separator-icon-color:       var(--cui-tertiary-color) !default;
$date-picker-separator-icon:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377'></polygon></svg>") !default;
$date-picker-separator-icon-rtl:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='497.333 239.999 80.092 239.999 176.087 144.004 153.46 121.377 18.837 256 153.46 390.623 176.087 367.996 80.09 271.999 497.333 271.999 497.333 239.999'></polygon></svg>") !default;

$date-picker-separator-width-sm:         1rem !default;
$date-picker-separator-width-lg:         1.55rem !default;
$date-picker-separator-icon-size-sm:     .875rem !default;
$date-picker-separator-icon-size-lg:     1.25rem !default;

$date-picker-dropdown-bg:                var(--cui-body-bg) !default;
$date-picker-dropdown-border-color:      var(--cui-border-color) !default;
$date-picker-dropdown-border-width:      var(--cui-border-width) !default;
$date-picker-dropdown-border-radius:     var(--cui-border-radius) !default;
$date-picker-dropdown-box-shadow:        var(--cui-box-shadow) !default;

$date-picker-ranges-width:             10rem !default;
$date-picker-ranges-padding:           $spacer * .5 !default;
$date-picker-ranges-border-width:      1px !default;
$date-picker-ranges-border-color:      var(--cui-border-color) !default;

$date-picker-timepicker-width:         (7 * $calendar-table-cell-size) + (2 * $calendar-table-margin) !default;
$date-picker-timepicker-border-width:  1px !default;
$date-picker-timepicker-border-color:  var(--cui-border-color) !default;

$date-picker-footer-padding:           .5rem !default;
$date-picker-footer-border-width:      1px !default;
$date-picker-footer-border-color:      var(--cui-border-color) !default;
```

```scss
$calendar-table-margin:                      .5rem !default;
$calendar-table-cell-size:                   2.75rem !default;

$calendar-nav-padding:                       .5rem !default;
$calendar-nav-border-width:                  1px !default;
$calendar-nav-border-color:                  var(--cui-border-color) !default;

$calendar-nav-btn-padding-y:                 .25rem !default;
$calendar-nav-btn-padding-x:                 .5rem !default;
$calendar-nav-btn-font-size:                 $font-size-sm !default;
$calendar-nav-btn-bg:                        transparent !default;
$calendar-nav-btn-border-width:              1px !default;
$calendar-nav-btn-border-color:              transparent !default;
$calendar-nav-btn-border-radius:             $border-radius !default;

$calendar-nav-btn-hover-bg:                  transparent !default;
$calendar-nav-btn-hover-border-color:        transparent !default;

$calendar-nav-btn-focus-border-color:        transparent !default;
$calendar-nav-btn-focus-box-shadow:          $focus-ring-box-shadow !default;

$calendar-nav-date-font-weight:              600 !default;
$calendar-nav-date-color:                    var(--cui-body-color) !default;
$calendar-nav-date-hover-color:              var(--cui-primary) !default;

$calendar-nav-icon-width:                    1rem !default;
$calendar-nav-icon-height:                   1rem !default;
$calendar-nav-icon-color:                    var(--cui-tertiary-color) !default;
$calendar-nav-icon-hover-color:              var(--cui-body-color) !default;

$calendar-nav-icon-double-next:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='95.314 447.313 72.686 424.687 245.373 252 72.686 79.313 95.314 56.687 290.627 252 95.314 447.313'></polygon><polygon fill='#000' points='255.314 447.313 232.686 424.687 405.373 252 232.686 79.313 255.314 56.687 450.627 252 255.314 447.313'></polygon></svg>") !default;
$calendar-nav-icon-double-prev:              url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='416.686 447.313 221.373 252 416.686 56.687 439.314 79.313 266.627 252 439.314 424.687 416.686 447.313'></polygon><polygon fill='#000' points='256.686 447.313 61.373 252 256.686 56.687 279.314 79.313 106.627 252 279.314 424.687 256.686 447.313'></polygon></svg>") !default;
$calendar-nav-icon-next:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='179.313 451.313 156.687 428.687 329.372 256 156.687 83.313 179.313 60.687 374.627 256 179.313 451.313'></polygon></svg>") !default;
$calendar-nav-icon-prev:                     url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' role='img'><polygon fill='#000' points='324.687 451.313 129.373 256 324.687 60.687 347.313 83.313 174.628 256 347.313 428.687 324.687 451.313'></polygon></svg>") !default;

$calendar-cell-header-inner-font-weight:     600 !default;
$calendar-cell-header-inner-color:           var(--cui-secondary-color) !default;

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

$calendar-cell-week-number-font-weight:      600 !default;
$calendar-cell-week-number-color:            var(--cui-secondary-color) !default;
```
