# Bootstrap 6 Time Input

> Create time fields with a section-based input mask. Users type the hour, minutes, and seconds in separate sections with automatic navigation and validation — like the native time input, but with full control over the format.

## Example

_Added in 6.0.0._

Use an empty container with `data-coreui-time-input` to create a masked time field. The mask is split into hour, minute, and — depending on the locale — AM/PM sections. Click or focus a section and type, use arrow keys to adjust values, and the caret moves to the next section automatically.

```html
<label class="form-label" id="timeInputMeetingTimeLabel">Meeting time</label>
<div class="form-control form-date-time" data-coreui-time-input data-coreui-name="meeting-time" aria-labelledby="timeInputMeetingTimeLabel"></div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="timeInputMeetingTimeLabel2">Meeting time</span>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-name="meeting-time" aria-labelledby="timeInputMeetingTimeLabel2"></div>
  <div class="form-text">Local time, in your own time zone.</div>
</div>
```

## Formats

Set an explicit format with the `data-coreui-format` attribute: `HH`/`H` for the 23-hour cycle, `hh`/`h` for the 12-hour cycle, `mm` for minutes, `ss` for seconds, and `A`/`a` for the day period. Type `a` or `p` in the AM/PM section to switch it, or use the arrow keys.

```html
<div class="mb-4">
  <label class="form-label" id="timeInputHHMmLabel">HH:mm</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" aria-labelledby="timeInputHHMmLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="timeInputHHMmSsLabel">HH:mm:ss</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm:ss" aria-labelledby="timeInputHHMmSsLabel"></div>
</div>
<div>
  <label class="form-label" id="timeInputHhMmALabel">hh:mm A</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="hh:mm A" data-coreui-locale="en-US" aria-labelledby="timeInputHhMmALabel"></div>
</div>
```

## Locale

Without an explicit format, the hour cycle and layout follow the locale set via `data-coreui-locale` — `en-US` gets a 12-hour clock with an AM/PM section, `pl-PL` or `de-DE` a 24-hour one.

```html
<div class="mb-4">
  <label class="form-label" id="timeInputEnUSLabel">en-US</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-locale="en-US" aria-labelledby="timeInputEnUSLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="timeInputPlPLLabel">pl-PL</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-locale="pl-PL" aria-labelledby="timeInputPlPLLabel"></div>
</div>
<div>
  <label class="form-label" id="timeInputDeDELabel">de-DE</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-locale="de-DE" aria-labelledby="timeInputDeDELabel"></div>
</div>
```

## Seconds

Without an explicit format, enable the seconds section with `data-coreui-seconds="true"`.

```html
<label class="form-label" id="timeInputTimeWithSecondsLabel">Time with seconds</label>
<div class="form-control form-date-time" data-coreui-time-input data-coreui-seconds="true" aria-labelledby="timeInputTimeWithSecondsLabel"></div>
```

## Initial value

Set the initial time with the `data-coreui-date` attribute — a time string like `09:30` or a `Date` object via JavaScript.

```html
<label class="form-label" id="timeInputOpeningTimeLabel">Opening time</label>
<div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-date="09:30" aria-labelledby="timeInputOpeningTimeLabel"></div>
```

## Min and max times

Constrain the selectable range with `minDate` and `maxDate` — time strings work here too. A completed time outside the range gets the `.is-invalid` class and the component reports `null`, and submits no time, until the value is corrected.

```html
<label class="form-label" id="timeInputBusinessHours09001700Label">Business hours (09:00–17:00)</label>
<div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-date="09:30"
     data-coreui-min-date="09:00" data-coreui-max-date="17:00" aria-labelledby="timeInputBusinessHours09001700Label"></div>
```

## Custom formats

The built-in token parser covers dayjs, moment, date-fns, and luxon format strings for time masks, so you can reuse the format string from the date library you already work with — the library itself isn't required to render or edit the mask. Pair it with `inputDateParse` when you want that library to also parse text pasted into the field.

```html
<label class="form-label" id="timeInputDayjsFormatLabel">dayjs format</label>
<div class="form-control form-date-time" id="myTimeInputCustomFormats1" aria-labelledby="timeInputDayjsFormatLabel"></div>
```

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/plugin/customParseFormat.js"></script>
```

```js
const myTimeInputCustomFormats1 = document.getElementById('myTimeInputCustomFormats1')

dayjs.extend(window.dayjs_plugin_customParseFormat)
const optionsTimeInputCustomFormats1 = {
  locale: 'en-US',
  date: '14:30',
  format: 'hh:mm A',
  inputDateParse: value => dayjs(value, 'hh:mm A', 'en').toDate()
}

new coreui.TimeInput(myTimeInputCustomFormats1, optionsTimeInputCustomFormats1)
```

## Validation

The field takes its validation state [the same way as the date input](https://coreui.io/bootstrap/docs/forms/date-input/#validation): a completed time outside `minDate`/`maxDate` makes it invalid whatever else is set, then the `validationState` option or an `.is-invalid`/`.is-valid` class written on the element in the markup, then a validation that reported the field, and in a form with `data-coreui-validate` the `:user-invalid` state of its value field, with `data-coreui-validate="valid"` also its `:user-valid` state. A given state drops on the next change the user makes to the time and stays through changes your code makes; `setValidationState()` sets it again without re-rendering the field. A given `'invalid'` blocks the submit with the text of the linked message, or `Invalid value.` when there is none. Sibling `.valid-feedback`/`.invalid-feedback` elements work as with any other form control, and while the field is invalid the error message describes every section.

```html
<div class="mb-4 form-field">
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-date="09:30" data-coreui-validation-state="valid"></div>
  <div class="valid-feedback">Looks good!</div>
</div>
<div class="form-field">
  <div class="form-control form-date-time is-invalid" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-date="12:30"></div>
  <div class="invalid-feedback">The room is taken at this time.</div>
</div>
```

## Floating labels

The time input supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/). When the field is empty and not focused, the mask placeholders are hidden so the label can rest inside the field; focusing the field floats the label and reveals the mask.

```html
<div class="form-floating">
  <label for="floatingTimeInput">Meeting time</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" id="floatingTimeInput"></div>
</div>
```

Add `.form-floating-always` to the wrapper, or to any ancestor, to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

The field renders as a `.form-control`, so the standard sizing classes work — add `.form-control-sm` or `.form-control-lg` to the container.

```html
<div class="mb-4">
  <label class="form-label" id="timeInputLargeLabel">Large</label>
  <div class="form-control form-date-time form-control-lg" data-coreui-time-input data-coreui-format="HH:mm" aria-labelledby="timeInputLargeLabel"></div>
</div>
<div class="mb-4">
  <label class="form-label" id="timeInputDefaultLabel">Default</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" aria-labelledby="timeInputDefaultLabel"></div>
</div>
<div>
  <label class="form-label" id="timeInputSmallLabel">Small</label>
  <div class="form-control form-date-time form-control-sm" data-coreui-time-input data-coreui-format="HH:mm" aria-labelledby="timeInputSmallLabel"></div>
</div>
```

## Disabled and readonly

Add `data-coreui-disabled="true"` to disable the field, or `data-coreui-readonly="true"` to make it focusable but non-editable.

```html
<div class="mb-4">
  <label class="form-label" id="timeInputDisabledLabel">Disabled</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-date="14:30" data-coreui-disabled="true" aria-labelledby="timeInputDisabledLabel"></div>
</div>
<div>
  <label class="form-label" id="timeInputReadonlyLabel">Readonly</label>
  <div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-date="14:30" data-coreui-readonly="true" aria-labelledby="timeInputReadonlyLabel"></div>
</div>
```

## Value semantics

The component reports a `Date` object anchored to `1970-01-01` — the same convention as the CoreUI time picker — so only the time part is meaningful. `minDate`/`maxDate` therefore constrain the time of day.

## Accessibility

The time input shares the [accessibility model of the date input](https://coreui.io/bootstrap/docs/forms/date-input/#accessibility): `role="group"` on the container, a `role="spinbutton"` with full ARIA value attributes per section, a single tab stop with roving focus, and `inputmode` hints for mobile keyboards. Clicking a label that names the field, through `aria-labelledby` or a `<label for>` pointing at the element, moves focus to the first empty section. The AM/PM section announces its localized name via `aria-valuetext` and can be toggled with the <kbd>A</kbd>/<kbd>P</kbd> letters or arrow keys.

The [keyboard support table](https://coreui.io/bootstrap/docs/forms/date-input/#keyboard-support) applies unchanged, including <kbd>Ctrl</kbd> + <kbd>A</kbd> (select all), <kbd>Ctrl</kbd> + <kbd>C</kbd> (copy), and paste.

## Usage

### Via data attributes

Add `data-coreui-time-input` to an empty `div`. The component renders the sections, separators, and a value input, which is submitted with the form once you give it a `name`. Include the `form-control form-date-time` classes in the markup — the component adds them on initialization anyway, but having them from the start keeps the field styled and full-height before the JavaScript runs (no flash of an unstyled element on load).

```html
<div class="form-control form-date-time" data-coreui-time-input data-coreui-format="HH:mm" data-coreui-name="time"></div>
```

### Via JavaScript

```javascript
const timeInput = new coreui.TimeInput(document.querySelector('#myTimeInput'), {
  format: 'HH:mm',
  date: '14:30'
})
```

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-coreui-`, as in `data-coreui-format="HH:mm"`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaHourLabel` | string | `'Hour'` | The `aria-label` of the hour section. |
| `ariaLabel` | string | `'Time input'` | The `aria-label` of the `role="group"` container when the element carries no `aria-label` of its own. |
| `ariaMeridiemLabel` | string | `'AM/PM'` | The `aria-label` of the meridiem section. |
| `ariaMinuteLabel` | string | `'Minute'` | The `aria-label` of the minute section. |
| `ariaSecondLabel` | string | `'Second'` | The `aria-label` of the second section. |
| `autofocus` | boolean | `false` | Focus the first section right after initialization |
| `date` | date, number, string, null | `null` | Initial time — a `Date` or a time string like `'14:30'` |
| `disabled` | boolean | `false` | Disable the component. |
| `disabledDates` | array, date, function, null | `null` | Times (or a matcher function) that can't be selected |
| `format` | function, string, null | `null` | Mask layout: `null` derives it from the locale, a string is parsed as format tokens, a function receives the locale and returns the section layout |
| `hourPlaceholder` | string, null | `null` | Replaces the `HH` (`hh` on a 12-hour clock) the hour section shows while it is empty. |
| `inputDateParse` | function, null | `null` | Custom parser used for pasted text, e.g. a date library |
| `locale` | string | `'default'` | Locale used to derive the hour cycle and layout |
| `maxDate` | date, number, string, null | `null` | Latest selectable time |
| `meridiemPlaceholder` | string, null | `null` | Replaces the `AM` the meridiem section shows while it is empty. |
| `minDate` | date, number, string, null | `null` | Earliest selectable time |
| `minutePlaceholder` | string, null | `null` | Replaces the `mm` the minute section shows while it is empty. |
| `name` | string, null | `null` | Name of the value input the value is submitted under. Without it the field is not submitted with the form. |
| `readonly` | boolean | `false` | Make the field focusable but non-editable |
| `required` | boolean | `false` | Required attribute of the value input |
| `secondPlaceholder` | string, null | `null` | Replaces the `ss` the second section shows while it is empty. |
| `seconds` | boolean | `false` | Include a seconds section in the locale-derived layout |
| `validationState` | string, null | `null` | The validation state the field shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change of the time by the user clears it, see [Validation](#validation). |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clear all sections |
| `getDate` | Return the current time as a `Date` on 1970-01-01, or `null` when incomplete or invalid |
| `reset` | Reset the field to the time it was created with, emitting `timeChange` and the native `input` and `change` of the value field when the value moves. A native form reset does the same. |
| `disable()` | Disables the field. |
| `enable()` | Enables the field. |
| `setDate(date, triggerChange)` | Sets the time. By default it fires no `timeChange` and no native `input` or `change` of the value field, since the code that calls it already knows the value; `errorChange` still reports a time the field refuses. Pass `true` as `triggerChange` when the time comes from the user through another control: the field then fires the events typing that time would; a given validation state stays, as with any change from code. Without a call the field keeps what the user typed. |
| `setValidationState(state)` | Gives the field a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |

```javascript
const timeInput = coreui.TimeInput.getInstance(document.querySelector('#myTimeInput'))
timeInput.clear()
timeInput.getDate()
timeInput.setDate('14:30')
```

### Events

| Event | Description |
| --- | --- |
| `errorChange.coreui.time-input` | Fired when the validation state changes; `event.error` is `'incomplete'`, `'minDate'`, `'maxDate'`, `'disabledDate'`, or `null` when the value is valid or the field is empty |
| `timeChange.coreui.time-input` | Fired when the time changes; `event.date` is a `Date` on 1970-01-01, or `null` when incomplete or invalid |

When one change moves both the value and the validation state, `timeChange` fires first and `errorChange` after it, so a time an `errorChange` listener sets replaces the one just reported.

```javascript
document.addEventListener('timeChange.coreui.time-input', event => {
  // eslint-disable-next-line no-console
  console.log('Time changed:', event.date)
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
