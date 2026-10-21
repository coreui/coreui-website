# Bootstrap 6 Date Range Picker

> Create a start and end date field with a multi-month calendar popup. Users type both dates into section-based masks or pick the range from the calendar, with optional predefined ranges.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

### Days

Two masked fields share one input-group frame; the calendar spans two months and
owns the range mechanics — pick a start day and the selection advances to the
end date automatically. Focusing the end field switches the calendar to
end-date selection, the way clicking the end input does in v1.

```html
<div class="row">
  <div class="col-lg-7 mb-4">
    <div data-coreui-locale="en-US" data-coreui-date-range-picker></div>
  </div>
</div>
<div class="row">
  <div class="col-lg-7">
    <div
      data-coreui-end-date="2026/03/20"
      data-coreui-locale="en-US"
      data-coreui-start-date="2026/03/15"
      data-coreui-date-range-picker></div>
  </div>
</div>
```

#### With footer

There is no `footer` option — project a `<template data-coreui-template="footer">`
child. With a footer present, completing a range does **not** auto-close;
closing is the footer's job.

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-locale="en-US" data-coreui-date-range-picker>
      <template data-coreui-template="footer">
        <button type="button" class="btn-ghost theme-primary btn-sm" data-coreui-picker-action="clear">Clear</button>
        <button type="button" class="btn-solid theme-primary btn-sm" data-coreui-picker-action="close">OK</button>
      </template>
    </div>
  </div>
</div>
```

### Weeks

Add `data-coreui-selection-type="week"` to select week ranges, and
`data-coreui-show-week-number="true"` to show week numbers. The fields render
the native `<input type="week">` presentation (`Week 29, 2026`, with a
localized fixed label) — see the [date picker](https://coreui.io/bootstrap/docs/forms/date-picker/#weeks)
note on the ISO week-numbering year.

```html
<div class="row">
  <div class="col-lg-7">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="week"
      data-coreui-show-week-number="true"
      data-coreui-date-range-picker></div>
  </div>
</div>
```

### Months

```html
<div class="row">
  <div class="col-lg-7">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="month"
      data-coreui-date-range-picker></div>
  </div>
</div>
```

### Quarters

The field masks narrow to quarter and year sections (`Q1 2026`).

```html
<div class="row">
  <div class="col-lg-7">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="quarter"
      data-coreui-date-range-picker></div>
  </div>
</div>
```

### Years

```html
<div class="row">
  <div class="col-lg-7">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="year"
      data-coreui-date-range-picker></div>
  </div>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="dateRangePickerReportingPeriodLabel">Reporting period</span>
  <div data-coreui-locale="en-US" data-coreui-date-range-picker aria-labelledby="dateRangePickerReportingPeriodLabel"></div>
  <div class="form-text">Both dates are included in the report.</div>
</div>
```

## Floating labels

Each field carries its own [floating label](https://coreui.io/bootstrap/docs/forms/floating-labels/): set `startFloatingLabel` and `endFloatingLabel` and the picker renders a label over each date, floating independently — fill in the check-in date and only its label rises. The label text also becomes the field's accessible name, so the visible and spoken labels stay one thing. No wrapper markup is needed.

```html
<div data-coreui-locale="en-US" data-coreui-start-floating-label="Check-in" data-coreui-end-floating-label="Check-out" data-coreui-date-range-picker></div>
```

Add `.form-floating-always` to the component element to keep both labels [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the masks showing.

## Sizing

```html
<div class="row mb-4">
  <div class="col-lg-7">
    <div data-coreui-locale="en-US" data-coreui-size="lg" data-coreui-date-range-picker></div>
  </div>
</div>
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-locale="en-US" data-coreui-size="sm" data-coreui-date-range-picker></div>
  </div>
</div>
```

## Disabled

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-disabled="true" data-coreui-locale="en-US" data-coreui-date-range-picker></div>
  </div>
</div>
```

## Disabled dates

```html
<div class="row">
  <div class="col-lg-7">
    <div id="myDateRangePickerDisabledDates"></div>
  </div>
</div>
```

```js
const myDateRangePickerDisabledDates = document.getElementById('myDateRangePickerDisabledDates')

const dateRangePickerDisabledDates = new coreui.DateRangePicker(myDateRangePickerDisabledDates, {
  locale: 'en-US',
  startDate: new Date(2026, 6, 10),
  endDate: new Date(2026, 6, 14),
  disabledDates: [
    [new Date(2026, 6, 4), new Date(2026, 6, 7)],
    new Date(2026, 6, 16)
  ],
  minDate: new Date(2026, 6, 1),
  maxDate: new Date(2026, 7, 31)
})

myDateRangePickerDisabledDates.addEventListener('endDateChange.coreui.date-range-picker', event => {
  console.log('endDateChange', event.date, event.formattedDate)
})
```

## Validation

The picker takes its validation state the way the [date range input](https://coreui.io/bootstrap/docs/forms/date-range-input/#validation) does: an end before the start makes the frame invalid while it stands and keeps both fields from being drawn valid, and a state you give lands on the frame and on both ends. You give it with the `validationState` option (`'valid'`, `'invalid'` or a state of `$form-validation-states`, with `invalid` and `valid` as deprecated aliases) or with an `.is-invalid` or `.is-valid` class written on the picker element, the server-side route, which is read once, when the picker starts; the option wins over the class. While the given state is `'invalid'`, every section of both fields carries `aria-invalid="true"` and is described by the message after the picker, and both ends block the submit with its text, or `Invalid value.` when there is none.

```html
<div class="row">
  <div class="col-lg-7 form-field">
    <div class="is-invalid" data-coreui-date-range-picker data-coreui-locale="en-US" data-coreui-start-date="2026-07-14" data-coreui-end-date="2026-07-20"></div>
    <div class="invalid-feedback">Those dates are already booked.</div>
  </div>
</div>
```

A given state is a verdict on the range it was given for, so the next change of the range the user makes drops it from both ends and from the picker element: a date picked in the calendar, the cleaner, a button in the footer or among the [custom ranges](#custom-ranges) that changes the range through the context, or typing in either field. An action that leaves the range as it is keeps the state. A change your own code makes, with `setRange()`, `clear()` or `reset()`, keeps it. `setValidationState()` sets it again without rebuilding the picker. A class or an `aria-invalid` written on the picker element after it starts is not read. A native form reset puts back the range the picker started with and drops the state.

### Blocking the submit

A `required` end that is empty, incomplete or rejected by the limits blocks the submit by itself. An end before the start does not, since both ends hold dates the browser accepts, and neither does an optional end that is empty, incomplete or rejected, which submits no date. Check the range in your `submit` listener; `getStartDate()` and `getEndDate()` return `null` for an end that is empty, incomplete or rejected, so one condition covers both:

```js
const element = document.querySelector('#stayRange')
const range = coreui.DateRangePicker.getOrCreateInstance(element)

element.closest('form').addEventListener('submit', event => {
  const start = range.getStartDate()
  const end = range.getEndDate()

  if (!start || !end || end < start) {
    event.preventDefault()
  }
})
```

## Custom ranges

There is no `ranges` option. Project a `<template data-coreui-template="ranges">`
child — it renders as a column beside the calendars. Presets take arguments, so
they run through `getContext().setRange()`: the date math, labels, and order are
yours.

```html
<div class="row">
  <div class="col-lg-8">
    <div id="myDateRangePickerRanges">
      <template data-coreui-template="ranges">
        <button type="button" class="btn-ghost theme-primary btn-sm" id="rangeLast7">Last 7 days</button>
        <button type="button" class="btn-ghost theme-primary btn-sm" id="rangeLast30">Last 30 days</button>
        <button type="button" class="btn-ghost theme-primary btn-sm" id="rangeThisMonth">This month</button>
      </template>
      <template data-coreui-template="footer">
        <button type="button" class="btn-ghost theme-primary btn-sm" data-coreui-picker-action="clear">Clear</button>
        <button type="button" class="btn-solid theme-primary btn-sm" data-coreui-picker-action="close">OK</button>
      </template>
    </div>
  </div>
</div>
```

```js
const myDateRangePickerRanges = document.getElementById('myDateRangePickerRanges')

const dateRangePickerRanges = new coreui.DateRangePicker(myDateRangePickerRanges, {
  locale: 'en-US',
  startName: 'report-start',
  endName: 'report-end'
})

// Projected ranges act through the slot context — labels, order, and the
// date math are userland, the shell only exposes setRange.
const context = () => dateRangePickerRanges.getContext()
const today = new Date()

const presets = {
  rangeLast7: () => context().setRange(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6), today),
  rangeLast30: () => context().setRange(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29), today),
  rangeThisMonth: () => context().setRange(new Date(today.getFullYear(), today.getMonth(), 1), new Date(today.getFullYear(), today.getMonth() + 1, 0))
}

for (const [id, apply] of Object.entries(presets)) {
  myDateRangePickerRanges.querySelector(`#${id}`).addEventListener('click', apply)
}
```

## Locale

### Auto

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-date-range-picker></div>
  </div>
</div>
```

### Chinese

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-locale="zh-CN" data-coreui-date-range-picker></div>
  </div>
</div>
```

### Japanese

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-locale="ja" data-coreui-date-range-picker></div>
  </div>
</div>
```

### Korean

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-locale="ko" data-coreui-date-range-picker></div>
  </div>
</div>
```

## Right to left support

### Hebrew

```html
<div class="row" dir="rtl">
  <div class="col-lg-7">
    <div data-coreui-locale="he-IL" data-coreui-date-range-picker></div>
  </div>
</div>
```

### Persian

The date range picker is Gregorian: with a locale whose own calendar has different months, like Persian, its calendar shows the Gregorian months in that locale's language and digits, and its fields hold Gregorian numbers.

```html
<div class="row" dir="rtl">
  <div class="col-lg-7">
    <div data-coreui-locale="fa-IR" data-coreui-date-range-picker></div>
  </div>
</div>
```

The separator between the two fields is a directional arrow, so the component
renders its mirrored counterpart (`separatorIconRtl`) whenever the picker sits
in an RTL context — the document direction or any `dir="rtl"` ancestor.

## Custom formats

The mask of the fields defines the format. Set it with `data-coreui-format`,
forwarded to both fields.

```html
<div class="row">
  <div class="col-lg-7">
    <div data-coreui-format="dd.MM.yyyy" data-coreui-locale="en-US" data-coreui-date-range-picker></div>
  </div>
</div>
```

## Accessibility

The fields and the popup answer to the [same keys as the date picker](https://coreui.io/bootstrap/docs/forms/date-picker/#keyboard-support): <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> or <kbd>F4</kbd> opens the calendars, <kbd>Escape</kbd> closes them and returns focus, and arrows, <kbd>Home</kbd> / <kbd>End</kbd>, and <kbd>Page Down</kbd> / <kbd>Page Up</kbd> (with <kbd>Shift</kbd> for years) move the focused date.

The picker element is a `role="group"`, so an `aria-labelledby` on it, pointing at the visible label as the example on this page does, names the pair of fields, and an `aria-describedby` on it moves to both fields. Clicking that label, or a `<label for>` pointing at the element, moves focus to the first empty section of the start date.

The toggle's name ends with the range the picker holds, written by the locale (`Toggle calendar, Thursday, August 20 – Sunday, August 23, 2026`), so a screen reader reads the picked range when the popup closes and focus goes back to the toggle. A live message would be lost at that moment, so the calendar does not announce the pick of the end that closes the popup. A pick that leaves the popup open, such as a new start that keeps the end or any pick with a footer, is announced through `ariaSelectedRangeAnnouncement`, and so is every pick without a toggle (`pickerIcon: false`).

## Usage

### Via data attributes

Add `data-coreui-date-range-picker` to a `div` element.

```html
<div data-coreui-date-range-picker></div>
```

### Via JavaScript

```html
<div class="my-date-range-picker"></div>
```

```js
const pickerElementList = Array.prototype.slice.call(document.querySelectorAll('.my-date-range-picker'))
const pickerList = pickerElementList.map(pickerEl => {
  return new coreui.DateRangePicker(pickerEl)
})
```

### Options

Options belonging to the inner [calendar](https://coreui.io/bootstrap/docs/components/calendar/#options) or
[date range input](https://coreui.io/bootstrap/docs/forms/date-range-input/#options) are forwarded by name, so
their data attributes work on the picker element too. The calendar's `range`
and `selectEndDate` are set by the picker itself.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | Allowlist used when sanitizing icon markup. |
| `ariaCleanerLabel` | string | `'Clear date range'` | Accessible label of the cleaner button. |
| `ariaEndLabel` | string | `'End date'` | Accessible name of the end field when it has no floating label. Both halves are the same control, so naming them apart is what tells a screen reader which end of the range it is on. |
| `ariaPickerLabel` | string | `'Toggle calendar'` | Accessible label of the picker button, followed by the range the picker holds. |
| `ariaPopupLabel` | string | `'Calendar'` | Accessible name of the calendar panel, which opens as a `role="dialog"`. |
| `ariaStartLabel` | string | `'Start date'` | Accessible name of the start field when it has no floating label. |
| `calendarOptions` | object | `{}` | Programmatic escape hatch for calendar options. |
| `calendars` | number | `2` | Months shown side by side. |
| `cleaner` | boolean | `true` | Renders a button that clears the value. It appears only once the field holds one. |
| `cleanerIcon` | string | cross SVG | Inline SVG rendered by the component (sanitized). |
| `container` | string, element, false | `false` | Teleport target for the dropdown. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `disabled` | boolean | `false` | Disables the fields and the popup. |
| `endDate` | date, string, null | `null` | Initial end of the range. |
| `endFloatingLabel` | string, null | `null` | Renders a floating label over the end field, which also becomes that field's accessible name. |
| `endName` | string, null | `null` | Name of the end value input. Without it the end date is not submitted with the form. |
| `format` | function, string, null | `null` | Mask layout of both fields: `null` derives it from the locale (or, for week, month, quarter and year selection, uses the matching default mask), a string is parsed as format tokens, a function receives the locale and returns the section layout. |
| `inputOptions` | object | `{}` | Programmatic escape hatch for date input options, except `validationState`, which the picker owns. |
| `invalid` | boolean | `false` | Deprecated alias of `validationState: 'invalid'`, ignored once `validationState` is set. |
| `locale` | string | browser locale | Drives section order, separators, and calendar labels. |
| `maxDate` | date, string, null | `null` | Upper bound, enforced by both layers. |
| `minDate` | date, string, null | `null` | Lower bound, enforced by both layers. |
| `pickerIcon` | string, boolean | `true` | The button that opens the calendar: `true` for the built-in icon, an inline SVG string for your own (sanitized), `false` for no button. Without it the popup has no pointer opener and nothing reports the expanded state, though the field keeps the keyboard openers below. |
| `sanitize` | boolean | `true` | Sanitize the icon markup. |
| `sanitizeFn` | function, null | `null` | Custom sanitizer. |
| `selectionType` | string | `'day'` | What the picker selects: `'day'`, `'week'`, `'month'`, `'quarter'` or `'year'`. The calendar and the field masks follow it. |
| `separatorIcon` | string | arrow SVG | Inline SVG between the two fields (LTR). |
| `separatorIconRtl` | string | mirrored arrow SVG | Inline SVG used when the picker renders in an RTL context. |
| `size` | string, null | `null` | `'sm'` or `'lg'`. |
| `startDate` | date, string, null | `null` | Initial start of the range. |
| `startFloatingLabel` | string, null | `null` | Renders a floating label over the start field, which also becomes that field's accessible name. |
| `startName` | string, null | `null` | Name of the start value input. Without it the start date is not submitted with the form. |
| `valid` | boolean | `false` | Deprecated alias of `validationState: 'valid'`, ignored once `validationState` is set. |
| `validationState` | string, null | `null` | The validation state of the range, shown on the frame and on both ends: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change the user makes to the range clears it, see [Validation](#validation). |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clears the range. |
| `dispose` | Destroys the picker and its inner components. |
| `getContext` | Returns the slot context (see below). |
| `getEndDate` | Returns the end of the range (`Date` or `null`). |
| `getInstance` | Static — returns the instance for a DOM element. |
| `getOrCreateInstance` | Static — returns the instance, creating it if needed. |
| `getStartDate` | Returns the start of the range (`Date` or `null`). |
| `hide` | Closes the popup. |
| `reset` | Restores the initial range. |
| `setEndDate(date)` | Sets the end date and keeps the start, without an event. |
| `setValidationState(state)` | Gives the picker a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setStartDate(date)` | Sets the start date and keeps the end, without an event. |
| `setRange` | Sets both ends without an event. The open calendar and the name of the toggle follow it. |
| `show` | Opens the popup. |
| `toggle` | Toggles the popup. |

#### Slot context

```js
const picker = coreui.DateRangePicker.getOrCreateInstance(element)
const context = picker.getContext()

context.setRange(start, end)   // set both ends (null allowed)
context.clear()                // clear the range
context.reset()                // restore the initial range
context.close()                // close the popup
context.startDate              // current start (Date | null)
context.endDate                // current end (Date | null)
context.disabled               // disabled state
```

### Events

| Event | Description |
| --- | --- |
| `endDateChange.coreui.date-range-picker` | Fired when the end changes, with the same payload shape. |
| `hidden.coreui.date-range-picker` | Fired once the popup has finished its exit transition and left the page. Skipped when the popup reopens first. |
| `hide.coreui.date-range-picker` | Fired immediately when `hide` is called. |
| `show.coreui.date-range-picker` | Fired immediately when `show` is called. Call `event.preventDefault()` to keep the popup closed. |
| `shown.coreui.date-range-picker` | Fired once the popup has finished its entry transition. Skipped when the popup closes first. |
| `startDateChange.coreui.date-range-picker` | Fired when the start changes. `event.date` is the validated `Date`, or `null`; `event.formattedDate` is the same value in the shape of `selectionType` (`2026-01`, `2026W03`, `2026Q1`, `2026`, or the `Date` itself for `day`), with the year in at least four digits (`0026-01`). |

`startDateChange` and `endDateChange` fire before the fields' `errorChange.coreui.date-input` for the same change, whether it comes from the calendar, the fields or an action such as `clear()` or `getContext().setRange()`; the setters do not fire them.

```js
const myPicker = document.getElementById('myPicker')
myPicker.addEventListener('endDateChange.coreui.date-range-picker', event => {
  console.log(event.date, event.formattedDate)
})
```

## Customizing

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/#css-variables), `.form-date-range`, inside the picker element, so its frame, the separator, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. Set them on `.form-date-range`; the group declares them itself, so a value set on the picker element stops there. The two ends are [date inputs](https://coreui.io/bootstrap/docs/forms/date-input/#css-variables) and carry the `form-date-time` tokens.

The panel is the date picker's, and declares its own on `.date-picker-popup`:

```scss
$date-picker-tokens: defaults(
  (
    --cui-date-picker-ranges-padding-y: .5rem,
    --cui-date-picker-ranges-padding-x: .5rem,
    --cui-date-picker-ranges-gap: .25rem,
    --cui-date-picker-ranges-border-width: var(--cui-border-width),
    --cui-date-picker-ranges-border-color: var(--cui-border-color),
    --cui-date-picker-timepickers-border-width: var(--cui-border-width),
    --cui-date-picker-timepickers-border-color: var(--cui-border-color),
    --cui-date-picker-footer-padding-y: .5rem,
    --cui-date-picker-footer-padding-x: .5rem,
    --cui-date-picker-footer-gap: .5rem,
    --cui-date-picker-footer-border-width: var(--cui-border-width),
    --cui-date-picker-footer-border-color: var(--cui-border-color),
  ),
  $date-picker-tokens
);
```

The panel is a `.popup`: its surface, border, shadow, stacking and fade come from the tokens every popup panel shares with the other pickers, Combobox, Autocomplete and Multi Select. `.popup` declares them itself, so set them on `.date-picker-popup` to restyle the panels of the date and date range pickers, or on `.popup` for all of them; a value set on an ancestor or on `:root` does not reach it.

```scss
$popup-tokens: () !default;
$popup-tokens: defaults(
  (
    --cui-popup-zindex: var(--cui-z-dropdown),
    --cui-popup-bg: var(--cui-bg-body),
    --cui-popup-border-width: var(--cui-border-width),
    --cui-popup-border-color: var(--cui-border-color),
    --cui-popup-border-radius: var(--cui-radius-7),
    --cui-popup-box-shadow: var(--cui-box-shadow),
    --cui-popup-transition-duration: .15s,
    --cui-popup-transition-timing: var(--cui-transition-timing-overlay),
  ),
  $popup-tokens
);
```

```scss
$calendar-tokens: defaults(
  (
    --cui-calendar-table-margin: .5rem,
    --cui-calendar-table-cell-size: 2.75rem,
    --cui-calendar-nav-padding-y: .5rem,
    --cui-calendar-nav-padding-x: .5rem,
    --cui-calendar-nav-border-color: var(--cui-border-color),
    --cui-calendar-nav-border: var(--cui-border-width) solid var(--cui-calendar-nav-border-color),
    --cui-calendar-nav-btn-padding-x: .5rem,
    --cui-calendar-nav-btn-padding-y: .25rem,
    --cui-calendar-nav-btn-font-size: var(--cui-font-size-sm),
    --cui-calendar-nav-btn-bg: transparent,
    --cui-calendar-nav-btn-border-width: 1px,
    --cui-calendar-nav-btn-border-color: transparent,
    --cui-calendar-nav-btn-border-radius: var(--cui-radius-4),
    --cui-calendar-nav-btn-hover-bg: transparent,
    --cui-calendar-nav-btn-hover-border-color: transparent,
    --cui-calendar-nav-btn-focus-border-color: transparent,
    --cui-calendar-nav-date-font-weight: 600,
    --cui-calendar-nav-date-color: var(--cui-fg-body),
    --cui-calendar-nav-date-hover-color: var(--cui-primary-base),
    --cui-calendar-nav-icon-width: 1rem,
    --cui-calendar-nav-icon-height: 1rem,
    --cui-calendar-nav-icon-color: var(--cui-fg-3),
    --cui-calendar-nav-icon-hover-color: var(--cui-fg-body),
    --cui-calendar-cell-header-inner-font-weight: 600,
    --cui-calendar-cell-header-inner-color: var(--cui-fg-3),
    --cui-calendar-cell-week-number-font-weight: 600,
    --cui-calendar-cell-week-number-color: var(--cui-fg-2),
    --cui-calendar-cell-border-radius: var(--cui-radius-4),
    --cui-calendar-cell-hover-color: var(--cui-fg-body),
    --cui-calendar-cell-hover-bg: var(--cui-bg-2),
    --cui-calendar-cell-disabled-color: var(--cui-fg-4),
    --cui-calendar-cell-selected-color: var(--cui-primary-contrast),
    --cui-calendar-cell-selected-bg: var(--cui-primary-base),
    --cui-calendar-cell-selected-hover-color: var(--cui-calendar-cell-selected-color),
    --cui-calendar-cell-selected-hover-bg: oklch(from var(--cui-calendar-cell-selected-bg) calc(l * var(--cui-theme-hover-lightness)) calc(c * var(--cui-theme-hover-chroma)) h),
    --cui-calendar-cell-selected-adjacent-color: var(--cui-primary-fg-emphasis),
    --cui-calendar-cell-selected-adjacent-bg: var(--cui-primary-bg-subtle),
    --cui-calendar-cell-selected-adjacent-hover-color: var(--cui-calendar-cell-selected-adjacent-color),
    --cui-calendar-cell-selected-adjacent-hover-bg: var(--cui-primary-bg-muted),
    --cui-calendar-cell-range-bg: var(--cui-primary-bg-subtle),
    --cui-calendar-cell-range-hover-border-color: var(--cui-primary-base),
    --cui-calendar-cell-today-color: var(--cui-danger-base),
  ),
  $calendar-tokens
);
```
