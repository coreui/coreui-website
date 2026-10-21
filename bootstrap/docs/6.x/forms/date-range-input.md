# Bootstrap 6 Date Range Input

> Create a start and end date field in one frame. Both ends use the section-based mask of the date input, and the range is validated as a whole.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

_Added in 6.0.0._

Use an empty container with `data-coreui-date-range-input` to create a range field. It is two [date inputs](https://coreui.io/bootstrap/docs/forms/date-input/) — start and end — and a separator in one frame, held together by the range the component owns: both ends share the mask and the limits, and an end before the start marks the whole field invalid.

```html
<label class="form-label" id="dateRangeInputStayLabel">Stay</label>
<div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-start-name="check-in" data-coreui-end-name="check-out" aria-labelledby="dateRangeInputStayLabel"></div>
```

## Date and time

`data-coreui-type="datetime"` puts the time on both ends, and `data-coreui-seconds="true"` adds a seconds section. The range compares the two ends by instant, so an end earlier in the day than the start on the same date marks the field invalid.

```html
<label class="form-label" id="dateRangeInputShiftLabel">Shift</label>
<div data-coreui-date-range-input data-coreui-type="datetime" data-coreui-locale="en-US" data-coreui-start-name="shift-start" data-coreui-end-name="shift-end" aria-labelledby="dateRangeInputShiftLabel"></div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="dateRangeInputStayLabel2">Stay</span>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-start-name="check-in" data-coreui-end-name="check-out" aria-labelledby="dateRangeInputStayLabel2"></div>
  <div class="form-text">Check-out has to be on or after check-in.</div>
</div>
```

## Formats

Set an explicit mask for both ends with the `data-coreui-format` attribute. The parser is the [date input's](https://coreui.io/bootstrap/docs/forms/date-input/#formats), so dayjs/moment tokens (`DD`, `MM`, `YYYY`) and date-fns/Unicode tokens (`dd`, `MM`, `yyyy`) both work, and any other character becomes a literal separator.

```html
<div class="mb-4">
  <label class="form-label" id="dateRangeInputDdMMYyyyLabel">dd.MM.yyyy</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="dd.MM.yyyy" aria-labelledby="dateRangeInputDdMMYyyyLabel"></div>
</div>
<div>
  <label class="form-label" id="dateRangeInputYYYYMMDDLabel">YYYY-MM-DD</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="YYYY-MM-DD" aria-labelledby="dateRangeInputYYYYMMDDLabel"></div>
</div>
```

A mask that leaves out sections works here too — a month-and-year range reports the first day of each month:

```html
<label class="form-label" id="dateRangeInputReportingPeriodLabel">Reporting period</label>
<div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="MM.yyyy" aria-labelledby="dateRangeInputReportingPeriodLabel"></div>
```

## Month names

Use the `MMM` or `MMMM` tokens for text month sections in both ends; typing letters matches a month by prefix. Pass all twelve names through `monthNames` to override the locale-derived, date-context grammatical form.

```html
<div class="mb-4">
  <label class="form-label" id="dateRangeInputDDMMMMYYYYLabel">DD MMMM YYYY</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="DD MMMM YYYY" aria-labelledby="dateRangeInputDDMMMMYYYYLabel"></div>
</div>
<div>
  <label class="form-label" id="dateRangeInputStandalonePolishMonthNamesLabel">Standalone Polish month names</label>
  <div data-coreui-date-range-input data-coreui-locale="pl-PL" data-coreui-format="DD MMMM YYYY"
       data-coreui-month-names='["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]' aria-labelledby="dateRangeInputStandalonePolishMonthNamesLabel"></div>
</div>
```

## Locale

Without an explicit format, both masks follow the locale set via `data-coreui-locale`.

```html
<div class="mb-4">
  <label class="form-label" id="dateRangeInputEnUSLabel">en-US</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" aria-labelledby="dateRangeInputEnUSLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="dateRangeInputPlPLLabel">pl-PL</label>
  <div data-coreui-date-range-input data-coreui-locale="pl-PL" data-coreui-day-placeholder="DD" data-coreui-month-placeholder="MM" data-coreui-year-placeholder="RRRR" aria-labelledby="dateRangeInputPlPLLabel"></div>
</div>
<div>
  <label class="form-label" id="dateRangeInputJaJPLabel">ja-JP</label>
  <div data-coreui-date-range-input data-coreui-locale="ja-JP" aria-labelledby="dateRangeInputJaJPLabel"></div>
</div>
```

## Initial value

Seed either end with `data-coreui-start-date` and `data-coreui-end-date`; a string is parsed like a typed value.

```html
<label class="form-label" id="dateRangeInputStayLabel3">Stay</label>
<div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-start-date="2026-07-14" data-coreui-end-date="2026-07-20" aria-labelledby="dateRangeInputStayLabel3"></div>
```

## Min and max dates

`minDate` and `maxDate` constrain both ends. A completed date outside the range gets the `.is-invalid` class on its own field and that end reports `null` until the value is corrected.

```html
<label class="form-label" id="dateRangeInputDatesInJuly2026Label">Dates in July 2026</label>
<div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="dd.MM.yyyy" data-coreui-min-date="2026-07-01" data-coreui-max-date="2026-07-31" aria-labelledby="dateRangeInputDatesInJuly2026Label"></div>
```

## Disabled dates

Beyond a simple range, `disabledDates` excludes specific dates from both ends — single `Date`s, `[start, end]` ranges, or a matcher function. As in the [date input](https://coreui.io/bootstrap/docs/forms/date-input/#disabled-dates), a completed date that hits a disabled entry gets `.is-invalid` and that end reports `null`.

In this example July 4–7 and July 16 can't be entered — try typing one of them:

```html
<label class="form-label" id="dateRangeInputStayLabel4">Stay</label>
<div id="myDateRangeInputDisabledDates" aria-labelledby="dateRangeInputStayLabel4"></div>
```

```js
const myDateRangeInputDisabledDates = document.getElementById('myDateRangeInputDisabledDates')

const optionsDateRangeInputDisabledDates = {
  locale: 'en-US',
  format: 'dd.MM.yyyy',
  startDate: new Date(2026, 6, 10),
  disabledDates: [
    [new Date(2026, 6, 4), new Date(2026, 6, 7)],
    new Date(2026, 6, 16)
  ],
  minDate: new Date(2026, 6, 1),
  maxDate: new Date(2026, 6, 31)
}

new coreui.DateRangeInput(myDateRangeInputDisabledDates, optionsDateRangeInputDisabledDates)
```

### Disabling weekends

Pass a function to disable dates by rule — here Saturdays and Sundays, on both ends:

```html
<label class="form-label" id="dateRangeInputBusinessDaysLabel">Business days</label>
<div id="myDateRangeInputDisabledDates2" aria-labelledby="dateRangeInputBusinessDaysLabel"></div>
```

```js
const myDateRangeInputDisabledDates2 = document.getElementById('myDateRangeInputDisabledDates2')

const optionsDateRangeInputDisabledDates2 = {
  disabledDates(date) {
    const day = date.getDay()
    return day === 0 || day === 6
  },
  format: 'dd.MM.yyyy',
  locale: 'en-US'
}

new coreui.DateRangeInput(myDateRangeInputDisabledDates2, optionsDateRangeInputDisabledDates2)
```

## Custom formats

The token parser covers dayjs, moment, date-fns, and luxon format strings, so you can reuse the format string from the date library you already work with — the library itself isn't required to render or edit the masks. Pair it with `inputDateParse` when you want that library to also parse text pasted into either end.

```html
<label class="form-label" id="dateRangeInputStayLabel5">Stay</label>
<div id="myDateRangeInputCustomFormats" aria-labelledby="dateRangeInputStayLabel5"></div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js"></script>
```

```js
const myDateRangeInputCustomFormats = document.getElementById('myDateRangeInputCustomFormats')

dayjs.extend(window.dayjs_plugin_customParseFormat)
const optionsDateRangeInputCustomFormats = {
  locale: 'en-US',
  startDate: new Date(2026, 6, 14),
  endDate: new Date(2026, 6, 20),
  format: 'MMMM DD, YYYY',
  inputDateParse: value => dayjs(value, 'MMMM DD, YYYY', 'en').toDate()
}

new coreui.DateRangeInput(myDateRangeInputCustomFormats, optionsDateRangeInputCustomFormats)
```

## Validation

The frame shows the state of the range and each field shows its own, the way the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/) does for a native field. Each end keeps its value in a `<textarea>` laid invisibly over its field, which takes part in native constraint validation: a `required` end that is empty, incomplete or holds a rejected date blocks the submit, and the browser, or the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/#usage), puts focus on its first empty section.

The state comes from these places, in this order:

- The order: an end before the start is a state of the range, not of either date, so `.is-invalid` lands on the frame and both fields stay editable. Every section of both fields carries `aria-invalid="true"` until the order is fixed, and neither field is drawn valid meanwhile, whatever else is set. `isRangeValid()` reports it.
- The limits: a completed date outside `minDate`/`maxDate`/`disabledDates` makes its own field invalid, which the frame picks up, and that field's value field submits no date until it is corrected. A date before year 1 counts as before `minDate` even without that option; when the field loses the focus, its year becomes 1.
- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`, a verdict on the whole range that lands on the frame and on both ends.
- An `.is-invalid` or `.is-valid` class written on the frame in the markup, for example by a server that has already checked the range. It is read once, when the component starts.
- A validation that reports a field (a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well), and in a form with `data-coreui-validate` the `:user-invalid` state of each value field, with `data-coreui-validate="valid"` also its `:user-valid` state, as for the [date input](https://coreui.io/bootstrap/docs/forms/date-input/#validation).

A state you give, with the option or with the class, is a verdict on the range it was given for, so the next change the user makes to either end drops it from both ends and the frame. A change your own code makes, with `setRange()`, `clear()` or `reset()`, keeps it. To set it again, call `setValidationState()`: it updates the state without rebuilding the fields and replaces a class written on the frame. A class or an `aria-invalid` written on the frame after the component starts is not read. While the given state is `'invalid'`, both ends block the submit with the text of the message after the frame, or `Invalid value.` when there is none, unless the range is disabled or read-only. A native form reset returns both ends to the dates they were created with and drops the state; a `reset` listener that calls `preventDefault()` cancels the whole reset.

Sibling `.valid-feedback`/`.invalid-feedback` elements work as with any other form control. The error shows when the frame is invalid and when a field inside it is, which is where the state of a single date lands; the success message waits until nothing is invalid. While a field is invalid, the error message describes each of its sections.

```html
<div class="mb-4 form-field">
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="dd.MM.yyyy" data-coreui-start-date="2026-07-20" data-coreui-end-date="2026-07-14"></div>
  <div class="invalid-feedback">Check-out has to be on or after check-in.</div>
</div>
<div class="form-field">
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-format="dd.MM.yyyy" data-coreui-start-date="2026-07-14" data-coreui-end-date="2026-07-20" data-coreui-validation-state="valid"></div>
  <div class="valid-feedback">Looks good!</div>
</div>
```

```html
<form data-coreui-validate novalidate>
  <div data-coreui-date-range-input data-coreui-start-name="from" data-coreui-end-name="to" data-coreui-required="true"></div>
  <div class="invalid-feedback">Please provide both dates.</div>
  <button type="submit">Submit</button>
</form>
```

### Blocking the submit

A `required` end that is empty, incomplete or rejected by the limits blocks the submit by itself. An end before the start does not, since both ends hold dates the browser accepts, and neither does an optional end that is empty, incomplete or rejected, which submits no date. Check the range in your `submit` listener; `getStartDate()` and `getEndDate()` return `null` for an end that is empty, incomplete or rejected, so one condition covers both:

```js
const element = document.querySelector('#stayRange')
const range = coreui.DateRangeInput.getOrCreateInstance(element)

element.closest('form').addEventListener('submit', event => {
  const start = range.getStartDate()
  const end = range.getEndDate()

  if (!start || !end || end < start) {
    event.preventDefault()
  }
})
```

## Floating labels

Each end can carry its own [floating label](https://coreui.io/bootstrap/docs/forms/floating-labels/); the text is also that end's accessible name, so the visible and the spoken label stay one thing.

```html
<div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-start-floating-label="Check-in" data-coreui-end-floating-label="Check-out"></div>
```

Add `.form-floating-always` to the component element to keep both labels [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the masks showing.

## Sizing

The frame is a `.form-control-group`, so the standard sizing classes work — set `data-coreui-size="lg"` or `data-coreui-size="sm"` and both ends follow.

```html
<div class="mb-4">
  <label class="form-label" id="dateRangeInputLargeLabel">Large</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-size="lg" aria-labelledby="dateRangeInputLargeLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="dateRangeInputDefaultLabel">Default</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" aria-labelledby="dateRangeInputDefaultLabel"></div>
</div>
<div>
  <label class="form-label" id="dateRangeInputSmallLabel">Small</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-size="sm" aria-labelledby="dateRangeInputSmallLabel"></div>
</div>
```

## Disabled and readonly

Add `data-coreui-disabled="true"` to disable both ends, or `data-coreui-readonly="true"` to make them focusable but non-editable.

```html
<div class="mb-4">
  <label class="form-label" id="dateRangeInputDisabledLabel">Disabled</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-start-date="2026-07-14" data-coreui-end-date="2026-07-20" data-coreui-disabled="true" aria-labelledby="dateRangeInputDisabledLabel"></div>
</div>
<div>
  <label class="form-label" id="dateRangeInputReadonlyLabel">Readonly</label>
  <div data-coreui-date-range-input data-coreui-locale="en-US" data-coreui-start-date="2026-07-14" data-coreui-end-date="2026-07-20" data-coreui-readonly="true" aria-labelledby="dateRangeInputReadonlyLabel"></div>
</div>
```

## Composing the markup

The component adopts the parts you write inside its element and generates the rest, so the separator can be a word, your own icon, or nothing you have to configure. A generated part takes its place around the ones you wrote, so writing only the end still gives start, separator, end, in that order on screen and for <kbd>Tab</kbd>:

| Role | Element | What the component does with it |
| --- | --- | --- |
| `data-coreui-range-start` | a `div` | Hosts the start field's sections. |
| `data-coreui-range-separator` | any element | Sits between the ends; marked `aria-hidden`. Without it an arrow is generated from `separatorIcon` / `separatorIconRtl`. |
| `data-coreui-range-end` | a `div` | Hosts the end field's sections. |

```html
<div data-coreui-date-range-input data-coreui-locale="en-US">
  <div data-coreui-range-start></div>
  <span class="mx-3 fg-2" data-coreui-range-separator>to</span>
  <div data-coreui-range-end></div>
</div>
```

## Accessibility

Each end is a [date input](https://coreui.io/bootstrap/docs/forms/date-input/#accessibility) with the spinbutton pattern per section, so the range is two labelled groups rather than one opaque control:

- **Role attributes**: the element itself is a `role="group"`, each end has `role="group"`, every section is a `role="spinbutton"` with its value attributes.
- **Label click**: clicking a label that names the field, through `aria-labelledby` or a `<label for>` pointing at the element, moves focus to the first empty section of the start date, as clicking the label of an input focuses it.
- **Names**: the start and end are named separately — `ariaStartLabel` and `ariaEndLabel` by default, or the floating label text when one is set. An end you wrote with an `aria-label` of its own keeps it. An `aria-labelledby` on the element, pointing at the visible label as the examples on this page do, names the pair, and an `aria-describedby` on it moves to both fields, after any description a field you wrote carries of its own.
- **Separator**: hidden from assistive technology, as is any `<svg>` inside it.
- **Roving tabindex**: each end is a single tab stop; <kbd>Tab</kbd> moves from the start to the end.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>0</kbd>–<kbd>9</kbd> | Type into the focused section; the caret advances when the section is complete |
| <kbd>A</kbd>–<kbd>Z</kbd> | In text month sections, match a month name by prefix |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Increment / decrement the focused section |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous section, crossing the separator from the last section of the start date into the end date and back; in a right-to-left layout the two keys swap |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last section of the focused end |
| <kbd>Backspace</kbd> | Clear the focused section; move to the previous section when already empty |
| <kbd>Delete</kbd> | Clear the focused section |
| <kbd>Tab</kbd> | Move from the start date to the end date |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> / <kbd>Cmd</kbd> + <kbd>A</kbd> | Select the whole value of the focused end |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste a date into the focused end |

Apart from the shortcuts in the table, a key pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> changes nothing in the field and is not cancelled: arrows, <kbd>Home</kbd> and <kbd>End</kbd> move no focus and change no section, and a digit or letter is not entered. The key stays free for the browser, assistive technology and the picker around the field, where <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> opens the calendar. A character that <kbd>AltGr</kbd> or <kbd>Option</kbd> composes is still entered.

## Usage

### Via data attributes

Add `data-coreui-date-range-input` to an empty `div`. The component renders both fields, the separator, and a value input per end, each submitted with the form once you give it a `startName` or an `endName`.

```html
<div data-coreui-date-range-input data-coreui-format="dd.MM.yyyy" data-coreui-start-name="from" data-coreui-end-name="to"></div>
```

### Via JavaScript

```javascript
const dateRangeInput = new coreui.DateRangeInput(document.querySelector('#myDateRangeInput'), {
  format: 'dd.MM.yyyy',
  startDate: new Date(2026, 6, 14),
  endDate: new Date(2026, 6, 20)
})
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-coreui-`, as in `data-coreui-start-name="from"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | SVG allow list | Allowed tags and attributes for the generated separator icon |
| `ariaDayLabel` | string | `'Day'` | The `aria-label` of the day section. |
| `ariaEndLabel` | string | `'End date'` | Accessible name of the end field when it has no floating label and no `aria-label` of its own |
| `ariaHourLabel` | string | `'Hour'` | The `aria-label` of the hour section. |
| `ariaMeridiemLabel` | string | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | string | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | string | `'Month'` | The `aria-label` of the month section. |
| `ariaQuarterLabel` | string | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | string | `'Second'` | The `aria-label` of the second section. |
| `ariaStartLabel` | string | `'Start date'` | Accessible name of the start field when it has no floating label and no `aria-label` of its own |
| `ariaWeekLabel` | string | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | string | `'Year'` | The `aria-label` of the year section. |
| `autofocus` | boolean | `false` | Focus the first section of the start date right after initialization |
| `dayPlaceholder` | string, null | `null` | Replaces the `DD` the day section shows while it is empty. |
| `disabled` | boolean | `false` | Disable both ends |
| `disabledDates` | array, date, function, null | `null` | Dates (or a matcher function) neither end can hold |
| `endDate` | date, string, null | `null` | Initial end date |
| `endFloatingLabel` | string, null | `null` | Floating label of the end field |
| `endName` | string, null | `null` | Name of the value input carrying the end date. Without it the end date is not submitted with the form. |
| `format` | function, string, null | `null` | Mask layout for both ends: `null` derives it from the locale, a string is parsed as format tokens, a function receives the locale and returns the section layout |
| `hourPlaceholder` | string, null | `null` | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `inputDateParse` | function, null | `null` | Custom parser used for pasted text, e.g. a date library |
| `inputOptions` | object | `{}` | Extra options passed to both date inputs, except `validationState`: the range gives the state to both. |
| `locale` | string | browser locale | Locale used to derive the masks and month names |
| `maxDate` | date, string, null | `null` | Latest date either end can hold |
| `meridiemPlaceholder` | string, null | `null` | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | date, string, null | `null` | Earliest date either end can hold |
| `minutePlaceholder` | string, null | `null` | Replaces the `mm` the minute section shows while it is empty. |
| `monthNames` | array, null | `null` | Twelve custom month names for text month sections (`MMM`/`MMMM`) |
| `monthPlaceholder` | string, null | `null` | Replaces the `MM` the month section shows while it is empty. |
| `quarterPlaceholder` | string, null | `null` | Replaces the `Q` the quarter section shows while it is empty. |
| `readonly` | boolean | `false` | Make both ends focusable but non-editable |
| `required` | boolean | `false` | Required attribute of the value inputs |
| `sanitize` | boolean | `true` | Sanitize the generated separator icon |
| `sanitizeFn` | function, null | `null` | Custom sanitizer |
| `secondPlaceholder` | string, null | `null` | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | boolean | `false` | Include a seconds section in the locale-derived layout of `type="datetime"`; both ends follow |
| `separatorIcon` | string | arrow SVG | Icon of the generated separator; ignored for a `data-coreui-range-separator` you wrote |
| `separatorIconRtl` | string | mirrored arrow SVG | Its right-to-left counterpart |
| `size` | string, null | `null` | `'sm'` or `'lg'` |
| `startDate` | date, string, null | `null` | Initial start date |
| `startFloatingLabel` | string, null | `null` | Floating label of the start field |
| `startName` | string, null | `null` | Name of the value input carrying the start date. Without it the start date is not submitted with the form. |
| `type` | string | `'date'` | Which sections the locale-derived layout carries on both ends: `'date'` or `'datetime'`. A `format` names the sections itself and overrides this. |
| `validationState` | string, null | `null` | The validation state of the range, shown on the frame and on both ends: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change the user makes to either end clears it, see [Validation](#validation). |
| `weekPlaceholder` | string, null | `null` | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | string, null | `null` | Replaces the `YYYY` the year section shows while it is empty. |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Empty both ends |
| `getEndDate` | Return the end date, or `null` when that end is incomplete or invalid |
| `getStartDate` | Return the start date, or `null` when that end is incomplete or invalid |
| `isDateSelectable` | Whether a date passes the shared limits |
| `isRangeValid` | `false` while the end is before the start |
| `reset` | Restore the dates the component was created with, emitting the change events when a value moves. A native form reset does the same and also drops a given validation state. |
| `setEndDate(date, triggerChange)` | Sets the end date and keeps the start, without an event by default; pass `true` as `triggerChange` to fire the events a date the user gives through another control would. |
| `setValidationState(state)` | Gives the component a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setStartDate(date, triggerChange)` | Sets the start date and keeps the end, without an event by default; pass `true` as `triggerChange` to fire the events a date the user gives through another control would. |
| `setRange` | Set both ends: `setRange(start, end)`. Each end validates its own date, so what the range keeps is what the fields kept. It fires no `startDateChange` or `endDateChange`, since the code that calls it already knows the range; `setRange(start, end, true)` fires the events a range the user picked would; a given validation state stays, as with any change from code. |

```javascript
const dateRangeInput = coreui.DateRangeInput.getInstance(document.querySelector('#myDateRangeInput'))
dateRangeInput.setRange(new Date(2026, 6, 14), new Date(2026, 6, 20))
dateRangeInput.getStartDate()
dateRangeInput.clear()
```

### Events

| Event | Description |
| --- | --- |
| `endDateChange.coreui.date-range-input` | Fired when the user changes the end, or `clear()`, `reset()` or a setter called with `triggerChange` does; `event.date` is a `Date`, or `null` when that end is incomplete or invalid |
| `startDateChange.coreui.date-range-input` | Fired when the start changes the same way, with the same payload shape as the end |

`setRange(start, end, true)` writes both ends before either event fires. The range events come before the `errorChange.coreui.date-input` of the fields, whether the dates are typed or set that way, so a range an `errorChange` listener sets replaces the one just reported.

Each event carries the date of its own end; a listener reads the whole range from the instance:

```javascript
for (const name of ['startDateChange', 'endDateChange']) {
  document.addEventListener(`${name}.coreui.date-range-input`, event => {
    const dateRangeInput = coreui.DateRangeInput.getInstance(event.target)
    // eslint-disable-next-line no-console
    console.log('Range changed:', dateRangeInput.getStartDate(), dateRangeInput.getEndDate())
  })
}
```

## Customizing

### CSS variables

The two ends are date inputs, so they carry the `form-date-time` tokens, and the frame around them carries the [form control group](https://coreui.io/bootstrap/docs/forms/form-control-group/#css-variables) ones. The range adds no tokens of its own.

```scss
// Redeclaring a --cui-control-* token here would shadow `.form-control`
// on the same element, and with it the validation states.
$form-date-time-tokens: () !default;
$form-date-time-tokens: defaults(
  (
    --cui-form-date-time-placeholder-color: var(--cui-fg-3),
    --cui-form-date-time-section-border-radius: .25rem,
    --cui-form-date-time-section-focus-bg: var(--cui-primary-bg-subtle),
  ),
  $form-date-time-tokens
);
```
