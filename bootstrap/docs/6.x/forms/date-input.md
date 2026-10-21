# Bootstrap 6 Date Input

> Create date fields with a section-based input mask. Users type the day, month, and year in separate sections with automatic navigation and validation — like the native date input, but with full control over the format.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=bootstrap&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## Example

_Added in 6.0.0._

Use an empty container with `data-coreui-date-input` to create a masked date field. The mask is split into day, month, and year sections — click or focus a section and type, use arrow keys to adjust values, and the caret moves to the next section automatically.

By default, the section order and separators are derived from the user's locale, so `12/31/2026` in `en-US` becomes `31.12.2026` in `de-DE` without any configuration.

```html
<label class="form-label" id="basicDateInputLabel">Delivery date</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-name="delivery-date" aria-labelledby="basicDateInputLabel"></div>
```

## Date and time

Set `data-coreui-type="datetime"` and the field carries the time as well. The hour cycle follows the locale, so a 12-hour locale gets an AM/PM section and a 24-hour one does not. Everything else on this page applies unchanged: the same typing, the same arrow keys, the same events.

```html
<label class="form-label" id="dateInputAppointmentLabel">Appointment</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-type="datetime" data-coreui-name="appointment" aria-labelledby="dateInputAppointmentLabel"></div>
```

Add `data-coreui-seconds="true"` for a seconds section:

```html
<label class="form-label" id="dateInputTimestampLabel">Timestamp</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-type="datetime" data-coreui-seconds="true" aria-labelledby="dateInputTimestampLabel"></div>
```

`data-coreui-type="time"` keeps only the time sections. That is the field [time input](https://coreui.io/bootstrap/docs/forms/time-input/) renders; it reports a change through `timeChange` instead of `dateChange`.

```html
<label class="form-label" id="dateInputTimeLabel">Opening hour</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-type="time" data-coreui-name="opening-hour" aria-labelledby="dateInputTimeLabel"></div>
```

A `format` overrides the type, because it names the sections itself. [Date range input](https://coreui.io/bootstrap/docs/forms/date-range-input/) takes both options too, so a range with time is the same two attributes on the range container.

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="dateInputDeliveryDateLabel">Delivery date</span>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-name="delivery-date" aria-labelledby="dateInputDeliveryDateLabel"></div>
  <div class="form-text">We deliver on working days only.</div>
</div>
```

## Formats

Set an explicit format with the `data-coreui-format` attribute. The parser accepts both dayjs/moment-style tokens (`DD`, `MM`, `YYYY`, `YY`) and date-fns/Unicode-style tokens (`dd`, `MM`, `yyyy`, `yy`), plus `ww` for ISO week numbers and `q` (numeric) or `QQQ` (`Q1`–`Q4`) for quarters, so you can reuse the format strings from the date library you already use. Any other character becomes a literal separator — a fixed, non-editable part of the mask — and text wrapped in single quotes is always a literal, even when it contains token letters (`'Week' ww` renders `Week 29`; escape a quote by doubling it, `''`).

```html
<div class="mb-4">
  <label class="form-label" id="dateInputDdMMYyyyLabel">dd.MM.yyyy</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" aria-labelledby="dateInputDdMMYyyyLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="dateInputYYYYMMDDLabel">YYYY-MM-DD</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="YYYY-MM-DD" aria-labelledby="dateInputYYYYMMDDLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputMMDDYYLabel">MM/DD/YY</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="MM/DD/YY" aria-labelledby="dateInputMMDDYYLabel"></div>
</div>
```

Two-digit year sections expand with smart century assignment — values up to 50 years in the future resolve to the current century, older ones to the previous century.

The format doesn't have to include every section — a month-and-year mask works like the native `month` input and reports the first day of the month:

```html
<div class="mb-4">
  <label class="form-label" id="dateInputMMYyyyLabel">MM.yyyy</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="MM.yyyy" aria-labelledby="dateInputMMYyyyLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputMMMMYyyyLabel">MMMM yyyy</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="MMMM yyyy" data-coreui-locale="en-US" aria-labelledby="dateInputMMMMYyyyLabel"></div>
</div>
```

Week and quarter masks work the same way. A week mask edits the ISO week directly and reports the Monday of that week; its year section holds the ISO week-numbering year, which can differ from the calendar year around January 1st. Combine a quoted label with the `ww` token for the native week input's presentation, or use `yyyy-Www` (the uppercase `W` is a literal) for the ISO wire format. A quarter mask reports the first day of the quarter:

```html
<div class="mb-4">
  <label class="form-label" id="dateInputWeekWwYyyyLabel">'Week' ww, yyyy</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="'Week' ww, yyyy" aria-labelledby="dateInputWeekWwYyyyLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="dateInputYyyyWwwLabel">yyyy-Www</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="yyyy-Www" aria-labelledby="dateInputYyyyWwwLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputQQQYyyyLabel">QQQ yyyy</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="QQQ yyyy" aria-labelledby="dateInputQQQYyyyLabel"></div>
</div>
```

## Month names

Use the `MMM` or `MMMM` tokens for text month sections with localized short or full month names. Type letters to match a month by prefix — `m` selects <strong>M</strong>arch, continuing with `may` switches to <strong>May</strong> — and the caret moves on as soon as the prefix is unambiguous. Digits and arrow keys keep working too.

```html
<div class="mb-4">
  <label class="form-label" id="dateInputDDMMMMYYYYLabel">DD MMMM YYYY</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="DD MMMM YYYY" data-coreui-locale="en-US" aria-labelledby="dateInputDDMMMMYYYYLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputMMMDYYYYLabel">MMM D, YYYY</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="MMM D, YYYY" data-coreui-locale="en-US" aria-labelledby="dateInputMMMDYYYYLabel"></div>
</div>
```

Month names default to the grammatical form used inside a full date — e.g. Polish shows the genitive `14 lipca 2026`, not the standalone `lipiec`. To use a different form (or your own localization), pass all twelve names through the `monthNames` option; they are used for display, letter matching, and paste alike.

```html
<label class="form-label" id="dateInputStandalonePolishMonthNamesLabel">Standalone Polish month names</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-format="DD MMMM YYYY" data-coreui-locale="pl-PL"
     data-coreui-month-names='["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"]' aria-labelledby="dateInputStandalonePolishMonthNamesLabel"></div>
```

## Locale

Without an explicit format, the mask follows the locale set via `data-coreui-locale`.

```html
<div class="mb-4">
  <label class="form-label" id="dateInputEnUSLabel">en-US</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-locale="en-US" aria-labelledby="dateInputEnUSLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="dateInputPlPLLabel">pl-PL</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-locale="pl-PL" data-coreui-day-placeholder="DD" data-coreui-month-placeholder="MM" data-coreui-year-placeholder="RRRR" aria-labelledby="dateInputPlPLLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputJaJPLabel">ja-JP</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-locale="ja-JP" aria-labelledby="dateInputJaJPLabel"></div>
</div>
```

## Initial value

Set the initial date with the `data-coreui-date` attribute.

A field holds what its format shows. A date given with a time of day to a field without a time keeps only its day: `getDate()` and `dateChange` report midnight. Use a format with a time when the time matters.

```html
<label class="form-label" id="dateInputDateOfBirthLabel">Date of birth</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-date="2000-01-15" aria-labelledby="dateInputDateOfBirthLabel"></div>
```

## Min and max dates

Constrain the selectable range with `minDate` and `maxDate`. A completed date outside the range gets the `.is-invalid` class and the component reports `null` until the value is corrected. A date field compares the limits by the day. A field with a time compares them to the smallest unit it shows, and there a `maxDate` without a time of day covers its whole day.

```html
<label class="form-label" id="dateInputDateInJuly2026Label">Date in July 2026</label>
<div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-min-date="2026-07-01" data-coreui-max-date="2026-07-31" aria-labelledby="dateInputDateInJuly2026Label"></div>
```

## Disabled dates

Beyond a simple range, the `disabledDates` option excludes specific dates — single `Date`s, `[start, end]` ranges, or a matcher function. Unlike in the [date picker](https://coreui.io/bootstrap/docs/forms/date-picker/#disabled-dates), there is no calendar to gray out: a completed date that hits a disabled entry gets the `.is-invalid` class and the component reports `null` until the value is corrected.

In this example July 4–7 and July 16 can't be entered — try typing one of them:

```html
<label class="form-label" id="dateInputDeliveryDateLabel2">Delivery date</label>
<div class="form-control form-date-time" id="myDateInputDisabledDates" aria-labelledby="dateInputDeliveryDateLabel2"></div>
```

```js
const myDateInputDisabledDates = document.getElementById('myDateInputDisabledDates')

const optionsDateInputDisabledDates = {
  locale: 'en-US',
  format: 'dd.MM.yyyy',
  date: new Date(2026, 6, 10),
  disabledDates: [
    [new Date(2026, 6, 4), new Date(2026, 6, 7)],
    new Date(2026, 6, 16)
  ],
  minDate: new Date(2026, 6, 1),
  maxDate: new Date(2026, 6, 31)
}

new coreui.DateInput(myDateInputDisabledDates, optionsDateInputDisabledDates)
```

### Disabling weekends

Pass a function to disable dates by rule — here Saturdays and Sundays:

```html
<label class="form-label" id="dateInputBusinessDayLabel">Business day</label>
<div class="form-control form-date-time" id="myDateInputDisabledDates2" aria-labelledby="dateInputBusinessDayLabel"></div>
```

```js
const myDateInputDisabledDates2 = document.getElementById('myDateInputDisabledDates2')

const optionsDateInputDisabledDates2 = {
  disabledDates(date) {
    const day = date.getDay()
    return day === 0 || day === 6
  },
  format: 'dd.MM.yyyy',
  locale: 'en-US'
}

new coreui.DateInput(myDateInputDisabledDates2, optionsDateInputDisabledDates2)
```

## Custom formats

The built-in token parser covers dayjs, moment, date-fns, and luxon format strings for date masks, so you can reuse the format string from the date library you already work with — the library itself isn't required to render or edit the mask. Pair it with `inputDateParse` when you want that library to also parse text pasted into the field.

In this example the mask uses the dayjs format `MMMM DD, YYYY`, and dayjs (with the `customParseFormat` plugin) parses pasted strings:

```html
<label class="form-label" id="dateInputDayjsFormatLabel">dayjs format</label>
<div class="form-control form-date-time" id="myDateInputCustomFormats1" aria-labelledby="dateInputDayjsFormatLabel"></div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js"></script>
```

```js
const myDateInputCustomFormats1 = document.getElementById('myDateInputCustomFormats1')

dayjs.extend(window.dayjs_plugin_customParseFormat)
const optionsDateInputCustomFormats1 = {
  locale: 'en-US',
  date: new Date(2022, 8, 3),
  format: 'MMMM DD, YYYY',
  inputDateParse: value => dayjs(value, 'MMMM DD, YYYY', 'en').toDate()
}

new coreui.DateInput(myDateInputCustomFormats1, optionsDateInputCustomFormats1)
```

Localized formats work the same way — the section names come from the component's `locale` (or the `monthNames` option), while the dayjs locale file handles parsing pasted text, here in Spanish:

```html
<label class="form-label" id="dateInputLocalizedDayjsFormatLabel">Localized dayjs format</label>
<div class="form-control form-date-time" id="myDateInputCustomFormats2" aria-labelledby="dateInputLocalizedDayjsFormatLabel"></div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/es.js"></script>
```

```js
const myDateInputCustomFormats2 = document.getElementById('myDateInputCustomFormats2')

dayjs.extend(window.dayjs_plugin_customParseFormat)
dayjs.locale('es')
const optionsDateInputCustomFormats2 = {
  locale: 'es-ES',
  date: new Date(2022, 8, 3),
  format: 'YYYY MMMM DD',
  inputDateParse: value => dayjs(value, 'YYYY MMMM DD', 'es').toDate()
}

new coreui.DateInput(myDateInputCustomFormats2, optionsDateInputCustomFormats2)
```

## Validation

The field shows its validation state on the element and on its sections, and links the message that follows it, the way the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/) does for a native field. It keeps its value in a `<textarea>` laid invisibly over the field, which takes part in native constraint validation: a `required` field that is empty, incomplete or holds a rejected date blocks the submit, and the browser, or the [form plugin](https://coreui.io/bootstrap/docs/forms/validation/#usage), puts focus on its first empty section, the browser with its own message over the field. A field that is not required does not block, and submits no date while it rejects one.

The state comes from five places, in this order:

- The limits: a completed date outside `minDate`/`maxDate`/`disabledDates` makes the field invalid until it is corrected, whatever else is set, and until then the value field submits no date, as `getDate()` returns none; a read-only field holding such a date submits none either. A date before year 1 counts as before `minDate` even without that option; when the field loses the focus, its year becomes 1.
- The `validationState` option: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`.
- An `.is-invalid` or `.is-valid` class written on the element in the markup, for example by a server that has already checked the date. It is read once, when the component starts.
- A validation that reports the field invalid: a submit, `checkValidity()` or `reportValidity()`, which the form plugin and the [stepper](https://coreui.io/bootstrap/docs/forms/stepper/) call as well. From then on the field shows it invalid whenever its date is invalid, until a native reset of the form.
- In a form with `data-coreui-validate`, the `:user-invalid` and `:user-valid` states of the value field, the same states the stylesheet reads on a native field. A field becomes `.is-valid` after a submit only when the form opts into success styling with `data-coreui-validate="valid"`.

A state you give, with the option or with the class, is a verdict on the date it was given for, so the next change of the date the user makes drops it: a typed digit or letter, an arrow, <kbd>Backspace</kbd> or <kbd>Delete</kbd>, a paste or a cut that changes what the field holds. A key that leaves the field as it is keeps the state. A change your own code makes, with `setDate()`, `clear()` or `reset()`, keeps it. To set it again, from a `dateChange.coreui.date-input` or `change` listener or after a server response, call `setValidationState()`. It updates the state without rebuilding the field and replaces a class written on the element, so `setValidationState(null)` withdraws that class. A class or an `aria-invalid` written on the element after the component starts is not read. While the given state is `'invalid'`, the field blocks the submit like any invalid field, with the text of the linked message, or `Invalid value.` when there is none; a custom validity you set on the value field yourself stays as it is, and a disabled or read-only field does not block. A native form reset returns the field to the date it was created with and drops the state; a `reset` listener that calls `preventDefault()` cancels the whole reset.

Sibling `.valid-feedback`/`.invalid-feedback` elements work as with any other form control. While the field is invalid, its error message, an `.invalid-feedback` or `.invalid-tooltip` after the field, after the frame around it or in its `.form-field`, describes every section, so a screen reader reads the error with the field. A message placed anywhere else can be named in `data-coreui-invalid-feedback` on the field, and one with the `hidden` attribute is left out, so an `errorChange` listener can show the message that matches `event.error` and hide the rest. A message the page adds later, while the field stays invalid, is picked up the next time the field changes, or right away when it is added in an `errorChange` listener.

```html
<div class="mb-4 form-field">
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-date="2026-07-14" data-coreui-validation-state="valid"></div>
  <div class="valid-feedback">Looks good!</div>
</div>
<div class="form-field">
  <div class="form-control form-date-time is-invalid" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-date="2026-07-20"></div>
  <div class="invalid-feedback">We have no delivery slots left on this date.</div>
</div>
```

```html
<form data-coreui-validate novalidate>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-name="delivery" data-coreui-required="true"></div>
  <div class="invalid-feedback">Please provide a delivery date.</div>
  <button type="submit">Submit</button>
</form>
```

## Floating labels

The date input supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/). When the field is empty and not focused, the mask placeholders are hidden so the label can rest inside the field; focusing the field floats the label and reveals the mask.

```html
<div class="form-floating">
  <label for="floatingDateInput">Delivery date</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" id="floatingDateInput"></div>
</div>
```

Add `.form-floating-always` to the wrapper, or to any ancestor, to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

The field renders as a `.form-control`, so the standard sizing classes work — add `.form-control-sm` or `.form-control-lg` to the container. Validation states (`.is-invalid` set automatically for out-of-range dates, or your own `.is-valid`) and input groups work the same way.

```html
<div class="mb-4">
  <label class="form-label" id="dateInputLargeLabel">Large</label>
  <div class="form-control form-date-time form-control-lg" data-coreui-date-input data-coreui-format="dd.MM.yyyy" aria-labelledby="dateInputLargeLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="dateInputDefaultLabel">Default</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" aria-labelledby="dateInputDefaultLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputSmallLabel">Small</label>
  <div class="form-control form-date-time form-control-sm" data-coreui-date-input data-coreui-format="dd.MM.yyyy" aria-labelledby="dateInputSmallLabel"></div>
</div>
```

## Disabled and readonly

Add `data-coreui-disabled="true"` to disable the field, or `data-coreui-readonly="true"` to make it focusable but non-editable.

```html
<div class="mb-4">
  <label class="form-label" id="dateInputDisabledLabel">Disabled</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-date="2026-07-14" data-coreui-disabled="true" aria-labelledby="dateInputDisabledLabel"></div>
</div>
<div>
  <label class="form-label" id="dateInputReadonlyLabel">Readonly</label>
  <div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-date="2026-07-14" data-coreui-readonly="true" aria-labelledby="dateInputReadonlyLabel"></div>
</div>
```

## Accessibility

The date input implements the [spinbutton pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) per section, mirroring the internal structure of the native date input:

- **Role attributes**: the container has `role="group"`, every section is a `role="spinbutton"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-valuetext` (month sections announce the localized month name).
- **Roving tabindex**: the whole field is a single tab stop; arrow keys move between sections.
- **Labels**: point `aria-labelledby` at the visible label, as the examples on this page do, because a `<label for>` does not name a group. An `aria-label` written on the element stays as it is, and the `ariaLabel` option fills it in only when the element has none. Sections receive `aria-label`s (`Day`, `Month`, `Year`), each replaceable on its own — `ariaDayLabel`, `ariaMonthLabel`, `ariaYearLabel` — for localization.
- **Label click**: clicking a label that names the field, through `aria-labelledby` or a `<label for>` pointing at the element, moves focus to the first empty section, as clicking the label of an input focuses it.
- **Validity**: while the field is invalid (a date outside `minDate` / `maxDate` or in `disabledDates`, a date before year 1, a given `'invalid'` state, or a validation that reported the field), every section carries `aria-invalid="true"`. The group does not, since ARIA defines no invalid state for a group, and an `aria-invalid` you write on the element is left as it is and does not change the state; set it with `validationState`. A disabled or read-only field is never reported as missing. With `required`, every section carries `aria-required="true"`.
- **Description**: the `aria-describedby` the field has when it starts, pointing at its help text or feedback message, reaches the first section, and every section while the field is invalid, together with the error message shown for the field, so the reason for an error is read wherever the focus sits without the help text repeating on each section. A description the page sets on the field later stays on the field.
- **Mobile input**: sections use `inputmode="numeric"`, so touch devices show the numeric keyboard.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>0</kbd>–<kbd>9</kbd> | Type into the focused section; the caret advances when the section is complete |
| <kbd>A</kbd>–<kbd>Z</kbd> | In text month sections, match a month name by prefix; the caret advances when the prefix is unambiguous |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Increment / decrement the focused section, wrapping day and month around their bounds; an empty year starts at the current year |
| <kbd>Arrow Right</kbd> / <kbd>Arrow Left</kbd> | Move focus to the next / previous section; in a right-to-left layout the two keys swap |
| <kbd>Home</kbd> / <kbd>End</kbd> | Move focus to the first / last section |
| <kbd>Backspace</kbd> | Clear the focused section; move to the previous section when already empty |
| <kbd>Delete</kbd> | Clear the focused section |
| <kbd>Ctrl</kbd> + <kbd>A</kbd> / <kbd>Cmd</kbd> + <kbd>A</kbd> | Select the whole value; <kbd>Backspace</kbd> then clears all sections, typing restarts from the first section |
| <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>C</kbd> | Copy the selection — the whole formatted value after <kbd>Ctrl</kbd> + <kbd>A</kbd> |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd> | Paste a date and fill all sections |

Apart from the shortcuts in the table, a key pressed with <kbd>Alt</kbd>, <kbd>Ctrl</kbd> or <kbd>Cmd</kbd> changes nothing in the field and is not cancelled: arrows, <kbd>Home</kbd> and <kbd>End</kbd> move no focus and change no section, and a digit or letter is not entered. The key stays free for the browser, assistive technology and the picker around the field, where <kbd>Alt</kbd> + <kbd>Arrow Down</kbd> opens the calendar. A character that <kbd>AltGr</kbd> or <kbd>Option</kbd> composes is still entered.

## Usage

### Via data attributes

Add `data-coreui-date-input` to an empty `div`. The component renders the sections, separators, and a value input, which is submitted with the form once you give it a `name`. Include the `form-control form-date-time` classes in the markup — the component adds them on initialization anyway, but having them from the start keeps the field styled and full-height before the JavaScript runs (no flash of an unstyled element on load).

```html
<div class="form-control form-date-time" data-coreui-date-input data-coreui-format="dd.MM.yyyy" data-coreui-name="date"></div>
```

### Via JavaScript

```javascript
const dateInput = new coreui.DateInput(document.querySelector('#myDateInput'), {
  format: 'dd.MM.yyyy',
  date: new Date(2026, 6, 14)
})
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-coreui-`, as in `data-coreui-format="dd.MM.yyyy"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaDayLabel` | string | `'Day'` | The `aria-label` of the day section. |
| `ariaHourLabel` | string | `'Hour'` | The `aria-label` of the hour section. |
| `ariaLabel` | string | `'Date input'` | The `aria-label` of the `role="group"` container when the element carries no `aria-label` of its own. On `type="datetime"` the default becomes `'Date and time input'`, on `type="time"` `'Time input'`. |
| `ariaMeridiemLabel` | string | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | string | `'Minute'` | The `aria-label` of the minute section. |
| `ariaMonthLabel` | string | `'Month'` | The `aria-label` of the month section. |
| `ariaQuarterLabel` | string | `'Quarter'` | The `aria-label` of the quarter section. |
| `ariaSecondLabel` | string | `'Second'` | The `aria-label` of the second section. |
| `ariaWeekLabel` | string | `'Week'` | The `aria-label` of the week section. |
| `ariaYearLabel` | string | `'Year'` | The `aria-label` of the year section. |
| `autofocus` | boolean | `false` | Focus the first section right after initialization |
| `date` | date, number, string, null | `null` | Initial date |
| `dayPlaceholder` | string, null | `null` | Replaces the `DD` the day section shows while it is empty. |
| `disabled` | boolean | `false` | Disable the component. |
| `disabledDates` | array, date, function, null | `null` | Dates (or a matcher function) that can't be selected |
| `format` | function, string, null | `null` | Mask layout: `null` derives it from the locale, a string is parsed as format tokens, a function receives the locale and returns the section layout |
| `hourPlaceholder` | string, null | `null` | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `inputDateParse` | function, null | `null` | Custom parser used for pasted text, e.g. a date library |
| `locale` | string | `'default'` | Locale used to derive the mask layout and month names |
| `maxDate` | date, number, string, null | `null` | Latest selectable date |
| `meridiemPlaceholder` | string, null | `null` | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | date, number, string, null | `null` | Earliest selectable date |
| `minutePlaceholder` | string, null | `null` | Replaces the `mm` the minute section shows while it is empty. |
| `monthNames` | array, null | `null` | Twelve custom month names for text month sections (`MMM`/`MMMM`), overriding the locale-derived, date-context grammatical form |
| `monthPlaceholder` | string, null | `null` | Replaces the `MM` the month section shows while it is empty. |
| `name` | string, null | `null` | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `quarterPlaceholder` | string, null | `null` | Replaces the `Q` the quarter section shows while it is empty. |
| `readonly` | boolean | `false` | Make the field focusable but non-editable |
| `required` | boolean | `false` | Required attribute of the value input |
| `secondPlaceholder` | string, null | `null` | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | boolean | `false` | Include a seconds section in the locale-derived layout of `type="datetime"` and `type="time"` |
| `type` | string | `'date'` | Which sections the locale-derived layout carries: `'date'`, `'datetime'` or `'time'`. A `format` names the sections itself and overrides this. |
| `validationState` | string, null | `null` | The validation state the field shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change of the date by the user clears it, see [Validation](#validation). |
| `weekPlaceholder` | string, null | `null` | Replaces the `WW` the week section shows while it is empty. |
| `yearPlaceholder` | string, null | `null` | Replaces the `YYYY` the year section shows while it is empty. |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clear all sections |
| `getDate` | Return the current date, or `null` when incomplete or invalid |
| `reset` | Reset the field to the date it was created with, emitting `dateChange` and the native `input` and `change` of the value field when the value moves. A native form reset does the same. |
| `disable()` | Disables the field. |
| `enable()` | Enables the field. |
| `setDate(date, triggerChange)` | Sets the date. By default it fires no `dateChange` and no native `input` or `change` of the value field, since the code that calls it already knows the value; `errorChange` still reports a date the field refuses. Pass `true` as `triggerChange` when the date comes from the user through another control, such as a calendar of your own: the field then fires the events typing that date would; a given validation state stays, as with any change from code. The focused section stays. Without a call the field keeps what the user typed. |
| `setValidationState(state)` | Gives the field a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |

```javascript
const dateInput = coreui.DateInput.getInstance(document.querySelector('#myDateInput'))
dateInput.clear()
dateInput.getDate()
dateInput.setDate('2026-10-19')
```

### Events

| Event | Description |
| --- | --- |
| `dateChange.coreui.date-input` | Fired when the date changes; `event.date` is a `Date`, or `null` when the field is incomplete or invalid |
| `errorChange.coreui.date-input` | Fired when the validation state changes; `event.error` is `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty |

When one change moves both the value and the validation state, `dateChange` fires first and `errorChange` after it, so a date an `errorChange` listener sets replaces the one just reported.

```javascript
document.addEventListener('dateChange.coreui.date-input', event => {
  // eslint-disable-next-line no-console
  console.log('Date changed:', event.date)
})
```

## Customizing

### CSS variables

The date, time, and date-time inputs share one set of styles under the `form-date-time` name. The field is a [`.form-control`](https://coreui.io/bootstrap/docs/forms/form-control/#css-variables), so its frame comes from the `--cui-control-*` tokens; the ones below style the sections inside it. Both sets sit on the field and can be set on a single element.

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
