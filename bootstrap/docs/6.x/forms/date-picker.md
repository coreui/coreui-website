# Bootstrap 6 Date Picker

> Create a date field with a calendar popup. Users type the date into a section-based mask or pick it from the calendar, and the two stay in sync.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

Below is an example of a basic Date Picker.

### Days

The input is a section-based mask — type the date directly, adjust a section
with the arrow keys, or pick a day from the calendar. There is no free-text
parsing and no debounce: the field always holds a valid partial date.

```html
<div class="row">
  <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
    <div data-coreui-locale="en-US" data-coreui-date-picker></div>
  </div>
  <div class="col-sm-6 col-lg-5">
    <div data-coreui-date="2026/03/15" data-coreui-locale="en-US" data-coreui-date-picker></div>
  </div>
</div>
```

#### With footer

There is no `footer` option. Project a `<template data-coreui-template="footer">`
child instead — its content is cloned into the dropdown. Buttons act through
`data-coreui-picker-action` (`today`, `clear`, `reset`, `close`), so labels,
order, and translations are yours. A button opting into the `today` action
opts into its state too: it is disabled at initialization when today falls
outside `minDate`/`maxDate`/`disabledDates`. This is one-way — the picker only
ever sets `disabled`, so a button you disable in the template stays disabled.

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="en-US" data-coreui-date-picker>
      <template data-coreui-template="footer">
        <button type="button" class="btn-ghost theme-danger btn-sm me-auto" data-coreui-picker-action="today">Today</button>
        <button type="button" class="btn-ghost theme-primary btn-sm" data-coreui-picker-action="clear">Clear</button>
        <button type="button" class="btn-solid theme-primary btn-sm" data-coreui-picker-action="close">OK</button>
      </template>
    </div>
  </div>
</div>
```

Here `maxDate` is the end of last month, so the `today` button disables
itself. The state of any other button is yours — the slot context exposes
`isDateSelectable(date)`, which answers whether a date, expressed in the
field's mask, passes the `minDate`/`maxDate`/`disabledDates` validation (a day
mask checks the calendar day, so `new Date()` passes with a `maxDate` of
today, and a month, quarter or year mask checks the whole period) — and every
programmatic date still runs through the field's
validation: out of range, the field turns `is-invalid`, `errorChange` reports
the reason, and `getDate()` reports `null`, the same outcome as typing that
date. `setDate()` fires no `dateChange`; an action such as `today` fires it
with `null`.

```html
<div class="row">
  <div class="col-lg-5">
    <div id="myDatePickerFooterToday">
      <template data-coreui-template="footer">
        <button type="button" class="btn-ghost theme-danger btn-sm me-auto" data-coreui-picker-action="today">Today</button>
        <button type="button" class="btn-solid theme-primary btn-sm" data-coreui-picker-action="close">OK</button>
      </template>
    </div>
  </div>
</div>
```

```js
const myDatePickerFooterToday = document.getElementById('myDatePickerFooterToday')

const datePickerFooterToday = new coreui.DatePicker(myDatePickerFooterToday, {
  locale: 'en-US',
  maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), 0)
})
```

### Weeks

Add `data-coreui-selection-type="week"` to select week numbers, and
`data-coreui-show-week-number="true"` to show them in the grid. The field
renders the native `<input type="week">` presentation — a fixed, non-editable
localized label followed by the week and year sections (`Week 29, 2026`,
`Tydzień 29, 2026`, …). The year is the ISO week-numbering year, which can
differ from the calendar year around January 1st, and the reported `Date` is
the Monday of the selected week. Prefer the ISO wire format in the field?
Set `data-coreui-format="yyyy-Www"`.

```html
<div class="row">
  <div class="col-lg-5">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="week"
      data-coreui-show-week-number="true"
      data-coreui-date-picker></div>
  </div>
</div>
```

### Months

Add `data-coreui-selection-type="month"` to select months. The field mask
narrows to month and year automatically.

```html
<div class="row">
  <div class="col-lg-5">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="month"
      data-coreui-date-picker></div>
  </div>
</div>
```

### Quarters

Add `data-coreui-selection-type="quarter"` to select quarters — the equivalent
of the `<input type="quarter">` that HTML never shipped. The field mask narrows
to a quarter and year section (`Q4 2026`), and the reported `Date` is the
first day of the selected quarter.

```html
<div class="row">
  <div class="col-lg-5">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="quarter"
      data-coreui-date-picker></div>
  </div>
</div>
```

### Years

Add `data-coreui-selection-type="year"` to select years. The field mask narrows
to the year automatically.

```html
<div class="row">
  <div class="col-lg-5">
    <div
      data-coreui-locale="en-US"
      data-coreui-selection-type="year"
      data-coreui-date-picker></div>
  </div>
</div>
```

## With time

Set `timepicker` to add the time half. The field switches to a date and time
mask, the panel grows a row of time selects under the calendar, and picking a
day no longer closes the panel — the two halves own different parts of one
value, so the interaction is not over until the user says so. While no time is
picked, or the field holds a time a list does not offer, each select stands on a
`--` placeholder, so every enabled option, the first allowed one included, sets
the time.

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="en-US" data-coreui-timepicker="true" data-coreui-date-picker></div>
  </div>
</div>
```

`hours`, `minutes` and `seconds` narrow what the time half offers, and are
ignored without `timepicker`. Hours are 0 to 23 in every locale; on a 12-hour
clock an hour that only one period allows sets that period. The four `ariaSelect*Label` options name its
selects, and with the flag on the field actions call themselves "Clear date and
time" and "Toggle calendar and time selection" unless the page passed its own
label.

`minDate` and `maxDate` can carry a time of day. Their day stays selectable in
the calendar and the time selects disable the hours, minutes and seconds before
`minDate` or after `maxDate` on that day. A time the panel sets beyond a limit,
such as the current time when the day of `minDate` is picked, moves to the
limit; a typed time beyond it marks the field invalid. Until a date is picked,
the time selects work on today moved into the limits. A limit without a time of
day covers its whole day.

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="en-US" data-coreui-timepicker="true" data-coreui-min-date="2026-10-15T09:30" data-coreui-max-date="2026-10-30T17:00" data-coreui-date-picker></div>
  </div>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="datePickerDeliveryDateLabel">Delivery date</span>
  <div data-coreui-locale="en-US" data-coreui-date-picker aria-labelledby="datePickerDeliveryDateLabel"></div>
  <div class="form-text">We deliver on working days only.</div>
</div>
```

## Composing the markup

The picker is built from other components — the [date input](https://coreui.io/bootstrap/docs/forms/date-input/) field, the [calendar](https://coreui.io/bootstrap/docs/components/calendar/) and a popup — held together by the date it owns. The markup is where you choose the parts: mark an element with a role attribute and the picker adopts it instead of building its own; leave a part out and it is generated as in the examples above.

| Role | Element | What the picker does with it |
| --- | --- | --- |
| `data-coreui-picker-field` | a `div` | Hosts the date input's sections. Without it the field is generated (and wrapped in `.form-floating` when `floatingLabel` is set). |
| `data-coreui-picker-toggle` | a `button` or any element | Opens and closes the calendar. Gets `aria-expanded` and `aria-haspopup`, and `aria-controls` while the calendar is open, and `ariaPickerLabel` as its name unless it has one or shows text of its own. |
| `data-coreui-picker-cleaner` | a `button` | Clears the value. Gets `ariaCleanerLabel` as its name unless it has one or shows text of its own. |

A decorative `<svg>` inside an adopted button is marked `aria-hidden` for you. So a trigger can be a regular button with its own text and icon, the way a combobox has one:

```html
<div data-coreui-locale="en-US" data-coreui-date-picker>
  <div data-coreui-picker-field></div>
  <button type="button" class="btn btn-subtle btn-sm" data-coreui-picker-cleaner>
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3l10 10M13 3L3 13"/></svg>
  </button>
  <button type="button" class="btn btn-subtle btn-sm" data-coreui-picker-toggle>
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="2.5" width="13" height="12" rx="1.5"/><path d="M1.5 6.5h13M5 1v3M11 1v3"/></svg>
    Pick a date
  </button>
</div>
```

The `cleanerIcon` and `pickerIcon` options only feed the generated buttons; with your own markup the icon is whatever you put in the HTML, and nothing is sanitized because nothing is rendered from a string.

## Floating labels

The date picker supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/): set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name. The mask placeholders stay hidden while the label rests inside the field; focusing any part of the field — the sections or the picker button — floats the label and reveals the mask.

```html
<div data-coreui-locale="en-US" data-coreui-floating-label="Delivery date" data-coreui-date-picker></div>
```

Add `.form-floating-always` to the component element to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

Set heights using the `data-coreui-size` attribute like `data-coreui-size="lg"`
and `data-coreui-size="sm"`.

```html
<div class="row mb-4">
  <div class="col-lg-5">
    <div data-coreui-locale="en-US" data-coreui-size="lg" data-coreui-date-picker></div>
  </div>
</div>
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="en-US" data-coreui-size="sm" data-coreui-date-picker></div>
  </div>
</div>
```

## Disabled

Add the `data-coreui-disabled="true"` attribute to give the picker a grayed out
appearance and remove pointer events.

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-disabled="true" data-coreui-locale="en-US" data-coreui-date-picker></div>
  </div>
</div>
```

## Disabled dates

The `disabledDates` option excludes specific dates — single `Date`s,
`[start, end]` ranges, or a matcher function. The calendar grays them out and
the field refuses them: a completed date that hits a disabled entry gets the
`.is-invalid` class and the picker reports `null`, and submits no date, until it is corrected.
In week, month, quarter and year selection the calendar and the field judge the
whole period: it is refused only when it lies wholly before `minDate` or after
`maxDate`, or `disabledDates` covers every day of it that the limits leave. In week selection the limits count as whole weeks, so for a week that is all seven days.

```html
<div class="row">
  <div class="col-lg-5">
    <div id="myDatePickerDisabledDates"></div>
  </div>
</div>
```

```js
const myDatePickerDisabledDates = document.getElementById('myDatePickerDisabledDates')

const datePickerDisabledDates = new coreui.DatePicker(myDatePickerDisabledDates, {
  locale: 'en-US',
  date: new Date(2026, 6, 10),
  disabledDates: [
    [new Date(2026, 6, 4), new Date(2026, 6, 7)],
    new Date(2026, 6, 16)
  ],
  minDate: new Date(2026, 6, 1),
  maxDate: new Date(2026, 6, 31)
})

myDatePickerDisabledDates.addEventListener('dateChange.coreui.date-picker', event => {
  console.log('dateChange', event.date)
})
```

### Disabling weekends

Pass a function to disable every date that matches a rule.

```html
<div class="row">
  <div class="col-lg-5">
    <div id="myDatePickerWeekends"></div>
  </div>
</div>
```

```js
const myDatePickerWeekends = document.getElementById('myDatePickerWeekends')

const datePickerWeekends = new coreui.DatePicker(myDatePickerWeekends, {
  locale: 'en-US',
  disabledDates: date => date.getDay() === 0 || date.getDay() === 6
})
```

## Validation

The picker shows its validation state on the frame and on the sections of its field, which the message after the picker describes, the way the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/) does for a native field. The field keeps its value in a `<textarea>` laid invisibly over it, so a `required` picker that is empty, incomplete or holds a rejected date blocks the submit, as the [date input](https://coreui.io/bootstrap/docs/forms/date-input/#validation) does.

You give a state with the `validationState` option (`'valid'`, `'invalid'` or a state of `$form-validation-states`, with `invalid` and `valid` as deprecated aliases) or with an `.is-invalid` or `.is-valid` class written on the picker element, the server-side route, which is read once, when the picker starts; the option wins over the class. A given state is a verdict on the date it was given for, so the next change of the date the user makes drops it: a day picked in the calendar, a time picked with `timepicker`, the cleaner, a footer button that changes the date through the context, or typing in the field. An action that leaves the date as it is keeps the state. A change your own code makes, with `setDate()`, `clear()`, `reset()` or `today()`, keeps it. `setValidationState()` sets it again without rebuilding the picker. A class or an `aria-invalid` written on the picker element after it starts is not read. While the given state is `'invalid'`, the picker blocks the submit with the text of the message after it, or `Invalid value.` when there is none. A native form reset puts back the date the picker started with and drops the state.

```html
<div class="row">
  <div class="col-lg-5 form-field">
    <div class="is-invalid" data-coreui-date-picker data-coreui-locale="en-US" data-coreui-date="2026-07-14"></div>
    <div class="invalid-feedback">We have no delivery slots left on this date.</div>
  </div>
</div>
```

## Locale

### Auto

The locale drives both layers: the section order and separators of the field,
and the month/weekday names of the calendar. By default it comes from the
browser.

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-date-picker></div>
  </div>
</div>
```

### Chinese

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="zh-CN" data-coreui-date-picker></div>
  </div>
</div>
```

### Japanese

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="ja" data-coreui-date-picker></div>
  </div>
</div>
```

### Korean

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-locale="ko" data-coreui-date-picker></div>
  </div>
</div>
```

## Right to left support

RTL support is built-in and can be explicitly controlled through the
`$enable-rtl` variable in Sass. The popup flips its anchoring side with the
document direction.

### Hebrew

```html
<div class="row" dir="rtl">
  <div class="col-lg-5">
    <div data-coreui-locale="he-IL" data-coreui-date-picker></div>
  </div>
</div>
```

### Persian

The date picker is Gregorian: with a locale whose own calendar has different months, like Persian, its calendar shows the Gregorian months in that locale's language and digits, and its field holds Gregorian numbers.

```html
<div class="row" dir="rtl">
  <div class="col-lg-5">
    <div data-coreui-locale="fa-IR" data-coreui-date-picker></div>
  </div>
</div>
```

## Custom formats

The mask of the field defines the format. Set it with `data-coreui-format` (or
the `format` option), which the field forwards from the shell. The parser accepts both dayjs/moment-style tokens
(`DD`, `MM`, `YYYY`, `YY`) and date-fns/Unicode-style tokens (`dd`, `MM`,
`yyyy`, `yy`), plus `ww` for ISO week numbers and `q` (numeric) or `QQQ`
(`Q1`–`Q4`) for quarters; any other character becomes a literal separator.

```html
<div class="row">
  <div class="col-sm-6 col-lg-5 mb-4 mb-sm-0">
    <label class="form-label" id="datePickerDdMMYyyyLabel">dd.MM.yyyy</label>
    <div data-coreui-format="dd.MM.yyyy" data-coreui-locale="en-US" data-coreui-date-picker aria-labelledby="datePickerDdMMYyyyLabel"></div>
  </div>
  <div class="col-sm-6 col-lg-5">
    <label class="form-label" id="datePickerYYYYMMDDLabel">YYYY-MM-DD</label>
    <div data-coreui-format="YYYY-MM-DD" data-coreui-locale="en-US" data-coreui-date-picker aria-labelledby="datePickerYYYYMMDDLabel"></div>
  </div>
</div>
```

A format does not have to include every section — a month-and-year mask reports
the first day of the month.

```html
<div class="row">
  <div class="col-lg-5">
    <div data-coreui-format="MMMM yyyy" data-coreui-locale="en-US" data-coreui-date-picker></div>
  </div>
</div>
```

## Accessibility

The field is a [date input](https://coreui.io/bootstrap/docs/forms/date-input/#accessibility) — a group of spinbutton sections — so its own arrow keys belong to the value, and the popup opens on the native control's dropdown keys. Focus enters the calendar on the selected date, else on today or on the `minDate` / `maxDate` today falls outside of, also when that date cannot be picked: it is announced as unavailable and the arrows move on from it. In week selection it enters on the row of that week.

Clicking a label that names the field, through `aria-labelledby` or a `<label for>` pointing at the element, moves focus to the first empty section of the field.

An `aria-label`, `aria-labelledby` or `aria-describedby` on the picker element moves to the field, so a screen reader announces the name and the description when focus enters it, and the picker element gets them back on dispose. Point `aria-labelledby` at the visible label, as the examples on this page do; it names the field over `floatingLabel` and an `ariaLabel` in `inputOptions`, the way the browser ranks names. A `data-coreui-picker-field` you wrote that already has an `aria-label` or `aria-labelledby` keeps its own name, and its own `aria-describedby` comes first, followed by the one that moves.

While the picker shows an invalid state, the sections of its field carry `aria-invalid="true"` and are described by the error message after the picker, see [Validation](#validation). An `aria-invalid` written on the picker element is not read; give the state with `validationState` or with the class.

The toggle's name ends with the date the picker holds, written in full (`Toggle calendar, Friday, August 14, 2026`, with the time after it with `timepicker`), so a screen reader reads the picked date when the popup closes and focus goes back to the toggle. A live message would be lost at that moment, so the calendar does not announce a pick that closes the popup onto that toggle. With `timepicker` the popup stays open, and the calendar announces the pick through `ariaSelectedDateAnnouncement`; it does the same without a toggle (`pickerIcon: false`) and with a `data-coreui-picker-toggle` that has a name or text of its own, which keeps it unchanged.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the calendar popup and move focus into the grid |
| <kbd>Escape</kbd> | Close the popup and return focus to the field or the toggle that opened it |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open calendar; the field is outside the dialog and stays out of the cycle |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous day; crossing the edge of the grid moves to the adjacent month |
| <kbd>Arrow Down</kbd> / <kbd>Arrow Up</kbd> | Move focus to the same day of the next / previous week |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last day of the week inside `minDate` / `maxDate`, into the previous / next month when the week starts or ends there |
| <kbd>Page Down</kbd> / <kbd>Page Up</kbd> | Move focus to the same day of the next / previous month, keeping the day number when the target month is long enough; a series of presses keeps the day it started from, so January 31 goes to February 28 and then March 31, also across a stop at `minDate` / `maxDate`; any other key or a click starts a new series |
| <kbd>Shift</kbd> + <kbd>Page Down</kbd> / <kbd>Shift</kbd> + <kbd>Page Up</kbd> | Move focus to the same day of the next / previous year, keeping the day of a series the same way |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Select the focused date, and close the popup unless `timepicker` is on, where the time half still has to be set; nothing happens on a date that cannot be picked |

In the calendar grid, a key from the table pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> is neither handled nor cancelled: focus stays where it is and the key stays free for the browser and assistive technology.

## Usage

### Via data attributes

Add `data-coreui-date-picker` to a `div` element.

```html
<div data-coreui-date-picker></div>
```

Inside it, `data-coreui-picker-field`, `data-coreui-picker-toggle` and `data-coreui-picker-cleaner` name the parts you supply yourself — see [Composing the markup](#composing-the-markup).

### Via JavaScript

```html
<div class="my-date-picker"></div>
```

```js
const datePickerElementList = Array.prototype.slice.call(document.querySelectorAll('.my-date-picker'))
const datePickerList = datePickerElementList.map(datePickerEl => {
  return new coreui.DatePicker(datePickerEl)
})
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes,
append the option name to `data-coreui-`, converting "_camelCase_" to
"_kebab-case_" — write `data-coreui-selection-type="week"`, not
`data-coreui-selectionType="week"`.

Options belonging to the inner [calendar](https://coreui.io/bootstrap/docs/components/calendar/#options),
[date input](https://coreui.io/bootstrap/docs/forms/date-input/#options) or, with `timepicker`, the time
columns of the [time picker](https://coreui.io/bootstrap/docs/forms/time-picker/#options) are forwarded by
name, so their data attributes work on the picker element too. The calendar's
`startDate` and the time columns' `hourCycle`, `onChange` and `time` are set
by the picker itself.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | Allowlist used when sanitizing the icon markup. |
| `ariaCleanerLabel` | string | `'Clear date'` | Accessible label of the cleaner button. `'Clear date and time'` with `timepicker` while the default is kept. |
| `ariaLabel` | string | `'Date input'` | Accessible name of the field. It lands on the `role="group"` container the sections sit in, so it names the whole control rather than one part of it. |
| `ariaPickerLabel` | string | `'Toggle calendar'` | Accessible label of the picker button, followed by the date the picker holds. `'Toggle calendar and time selection'` with `timepicker` while the default is kept. |
| `ariaPopupLabel` | string | `'Calendar'` | Accessible name of the calendar panel, which opens as a `role="dialog"`. `'Calendar and time selection'` with `timepicker` while the default is kept. |
| `calendarOptions` | object | `{}` | Programmatic escape hatch for calendar options. |
| `cleaner` | boolean | `true` | Renders a button that clears the value. It appears only once the field holds one. |
| `cleanerIcon` | string | cross SVG | Inline SVG of the generated cleaner (sanitized). Not used for a `data-coreui-picker-cleaner` you wrote. |
| `container` | string, element, false | `false` | Teleport target for the dropdown. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `date` | date, string, null | `null` | Initial value. |
| `disabled` | boolean | `false` | Disables the field and the popup. |
| `floatingLabel` | string, null | `null` | Renders a floating label over the field, which also becomes its accessible name. Not rendered for a `data-coreui-picker-field` you wrote, which only takes the name, and not even that when the field carries an `aria-label` of its own. An `aria-label` or `aria-labelledby` on the picker element names the field instead. |
| `format` | function, string, null | `null` | Mask layout of the field: `null` derives it from the locale (or, for week, month, quarter and year selection, uses the matching default mask), a string is parsed as format tokens, a function receives the locale and returns the section layout. |
| `inputOptions` | object | `{}` | Programmatic escape hatch for date input options, except `validationState`, which the picker owns. |
| `invalid` | boolean | `false` | Deprecated alias of `validationState: 'invalid'`, ignored once `validationState` is set. |
| `locale` | string | browser locale | Drives section order, separators, and calendar labels. |
| `maxDate` | date, string, null | `null` | Upper bound, enforced by both layers. With `timepicker`, a time of day bounds the time on that day, and a date without one covers its whole day. |
| `minDate` | date, string, null | `null` | Lower bound, enforced by both layers. With `timepicker`, a time of day bounds the time on that day. |
| `monthNames` | array, null | `null` | Twelve custom month names for text month sections (`MMM`/`MMMM`). |
| `name` | string, null | `null` | Name of the generated value input. Without it the field is not submitted with the form. |
| `pickerIcon` | string, boolean | `true` | The button that opens the calendar: `true` for the built-in icon, an inline SVG string for your own (sanitized), `false` for no button. Not used for a `data-coreui-picker-toggle` you wrote. Without either the popup has no pointer opener and nothing reports the expanded state, though the field keeps the keyboard openers below. |
| `sanitize` | boolean | `true` | Sanitize the icon markup. |
| `sanitizeFn` | function, null | `null` | Custom sanitizer. |
| `seconds` | array, boolean, function | `true` | Seconds offered by the time half. Ignored without `timepicker`. |
| `selectionOptions` | object | `{}` | Programmatic escape hatch for the time half, except `onChange`, `time` and, when the field shows hours, `hourCycle`, which the picker owns. |
| `selectionType` | string | `'day'` | What the picker selects: `'day'`, `'week'`, `'month'`, `'quarter'` or `'year'`. The calendar and the field mask follow it. |
| `size` | string, null | `null` | `'sm'` or `'lg'`. |
| `timepicker` | boolean | `false` | Add a time half to the panel and switch the field to a date and time mask. |
| `valid` | boolean | `false` | Deprecated alias of `validationState: 'valid'`, ignored once `validationState` is set. |
| `validationState` | string, null | `null` | The validation state the picker shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change the user makes clears it, see [Validation](#validation). |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clears the value. |
| `dispose` | Destroys the picker and its inner components. |
| `getContext` | Returns the slot context (see below). |
| `getDate` | Returns the current value (`Date` or `null`). |
| `getInstance` | Static — returns the instance for a DOM element. |
| `getOrCreateInstance` | Static — returns the instance, creating it if needed. |
| `hide` | Closes the popup. |
| `reset` | Restores the initial value. |
| `setValidationState(state)` | Gives the picker a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setDate` | Sets the value without firing `dateChange`. The open calendar, the time selection and the name of the toggle follow it. |
| `show` | Opens the popup. |
| `today` | Sets today's date. |
| `toggle` | Toggles the popup. |

#### Slot context

Projected regions (and any custom code) drive the picker through a small
imperative contract instead of configuration:

```js
const picker = coreui.DatePicker.getOrCreateInstance(element)
const context = picker.getContext()

context.today()          // set today's date
context.setDate(date)    // set any date
context.clear()          // clear the value
context.reset()          // restore the initial value
context.close()          // close the popup
context.date             // current value (Date | null)
context.disabled         // disabled state
```

### Events

| Event | Description |
| --- | --- |
| `dateChange.coreui.date-picker` | Fired when the value changes — from the calendar, the field, or a context action. `event.date` is the validated `Date`, or `null`; `event.formattedDate` is the same value in the shape of `selectionType` (`2026-01`, `2026W03`, `2026Q1`, `2026`, or the `Date` itself for `day`), with the year in at least four digits (`0026-01`). |
| `hidden.coreui.date-picker` | Fired once the popup has finished its exit transition and left the page. Skipped when the popup reopens first. |
| `hide.coreui.date-picker` | Fired immediately when `hide` is called — by the API, the indicator, Escape or an outside click. Call `event.preventDefault()` to keep the popup open. |
| `show.coreui.date-picker` | Fired immediately when `show` is called. Call `event.preventDefault()` to keep the popup closed. |
| `shown.coreui.date-picker` | Fired once the popup has finished its entry transition. Skipped when the popup closes first. |

The field's own events (`dateChange.coreui.date-input`,
`errorChange.coreui.date-input`) still bubble from the inner element — the shell
does not duplicate them. `dateChange.coreui.date-picker` fires before the
field's `errorChange` for the same change, whether it comes from the calendar,
the field or an action, so a date an `errorChange` listener sets replaces the one
just reported.

```js
const myDatePicker = document.getElementById('myDatePicker')
myDatePicker.addEventListener('dateChange.coreui.date-picker', event => {
  console.log(event.date)
})
```

## Customizing

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/#css-variables) on the picker element itself, so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. Set them on the picker element to restyle one field.

The picker declares its local CSS variables on its panel, `.date-picker-popup`,
for real-time customization. Values are set via Sass, so Sass customization is
supported too.

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

The time half declares its own on `.date-picker-time-body`, so it can be
restyled without touching the panel around it.

```scss
$date-picker-time-tokens: defaults(
  (
    --cui-date-picker-time-body-padding-y: var(--cui-spacer-3),
    --cui-date-picker-time-body-padding-x: var(--cui-spacer-3),
    --cui-date-picker-time-icon-width: 2.5rem,
    --cui-date-picker-time-icon-size: 1rem,
    --cui-date-picker-time-icon-color: var(--cui-fg-3),
    --cui-date-picker-time-select-border-radius: var(--cui-radius-4),
    --cui-date-picker-time-select-font-size: var(--cui-btn-input-sm-font-size),
    --cui-date-picker-time-select-color: var(--cui-btn-input-fg),
    --cui-date-picker-time-select-padding-y: var(--cui-btn-input-sm-padding-y),
    --cui-date-picker-time-select-padding-x: var(--cui-btn-input-sm-padding-x),
    --cui-date-picker-time-select-disabled-color: var(--cui-fg-body),
  ),
  $date-picker-time-tokens
);
```

The panel is a `.popup`: its surface, border, shadow, stacking and fade come from the tokens every popup panel shares with the other pickers, Combobox, Autocomplete and Multi Select. `.popup` declares them itself, so set them on `.date-picker-popup` to restyle this panel or on `.popup` for all of them; a value set on an ancestor or on `:root` does not reach it.

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
