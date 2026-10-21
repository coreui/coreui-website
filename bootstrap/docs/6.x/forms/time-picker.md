# Bootstrap 6 Time Picker

> Create a time field with a popup. Users type the time into a section-based mask or pick it from the rolls, and the two stay in sync.

## Example

Type into the masked field or pick from the roll. The two halves share one
value, so typing and picking stay in sync.

```html
<div class="row">
  <div class="col-sm-6 col-lg-4 mb-4 mb-sm-0">
    <div data-coreui-locale="en-US" data-coreui-time-picker></div>
  </div>
  <div class="col-sm-6 col-lg-4">
    <div data-coreui-locale="en-US" data-coreui-time="14:30:00" data-coreui-time-picker></div>
  </div>
</div>
```

### Theme variants

A [`.theme-*` class](https://coreui.io/bootstrap/docs/customize/components/#theme-variants) on the picker colours the selected cell of every roll.

```html
<div class="row">
  <div class="col-lg-4">
    <div class="theme-success" data-coreui-locale="en-US" data-coreui-time="14:30:00" data-coreui-time-picker></div>
  </div>
</div>
```

### With footer

There is no `footer` option — project a `<template data-coreui-template="footer">`
child. Buttons act through `data-coreui-picker-action` (`now`, `clear`, `reset`,
`close`).

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-locale="en-US" data-coreui-time-picker>
      <template data-coreui-template="footer">
        <button type="button" class="btn-ghost theme-danger btn-sm me-auto" data-coreui-picker-action="now">Now</button>
        <button type="button" class="btn-ghost theme-primary btn-sm" data-coreui-picker-action="clear">Clear</button>
        <button type="button" class="btn-solid theme-primary btn-sm" data-coreui-picker-action="close">OK</button>
      </template>
    </div>
  </div>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <span class="form-label" id="timePickerMeetingTimeLabel">Meeting time</span>
  <div data-coreui-locale="en-US" data-coreui-time-picker aria-labelledby="timePickerMeetingTimeLabel"></div>
  <div class="form-text">Local time, in your own time zone.</div>
</div>
```

## Floating labels

The time picker supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/): set `floatingLabel` and the component renders the label itself — no wrapper markup needed — and the text also becomes the field's accessible name. The mask placeholders stay hidden while the label rests inside the field; focusing any part of the field — the sections or the picker button — floats the label and reveals the mask.

```html
<div data-coreui-locale="en-US" data-coreui-floating-label="Meeting time" data-coreui-time-picker></div>
```

Add `.form-floating-always` to the component element to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating) with the mask showing.

## Sizing

```html
<div class="row mb-4">
  <div class="col-lg-4">
    <div data-coreui-locale="en-US" data-coreui-size="lg" data-coreui-time-picker></div>
  </div>
</div>
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-locale="en-US" data-coreui-size="sm" data-coreui-time-picker></div>
  </div>
</div>
```

## Disabled

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-disabled="true" data-coreui-locale="en-US" data-coreui-time-picker></div>
  </div>
</div>
```

## Min and max times

Constrain the times the user can pick with `minDate` and `maxDate`, given as time strings like `09:30` or as dates, of which only the time of day counts. The panel disables the hours that hold no allowed time and, once an hour is chosen, the minutes and seconds outside the range, and a time picked in the panel that crosses a limit moves to it. A time typed in the field outside the range gets the `.is-invalid` class, the picker reports `null` and submits no time until the value is corrected. A `maxDate` at midnight covers the whole day; any other `maxDate` before the `minDate` leaves no time to pick. The limits also apply when you give them through `inputOptions`.

```html
<div class="row">
  <div class="col-lg-4">
    <label class="form-label" id="timePickerOpeningHoursLabel">Opening hours (09:30–17:00)</label>
    <div data-coreui-time-picker data-coreui-locale="en-GB" data-coreui-min-date="09:30" data-coreui-max-date="17:00" data-coreui-seconds="false" aria-labelledby="timePickerOpeningHoursLabel"></div>
  </div>
</div>
```

## Validation

The picker takes its validation state [the way the date picker does](https://coreui.io/bootstrap/docs/forms/date-picker/#validation): the `validationState` option (with `invalid` and `valid` as deprecated aliases) or an `.is-invalid` or `.is-valid` class written on the picker element, read once when the picker starts. A given state drops on the next change of the time the user makes, a time picked in the panel, the cleaner, a footer button that changes the time through the context, or typing in the field, and stays through `setTime()`, `clear()`, `reset()` and `now()` called by your code. `setValidationState()` sets it again. While the given state is `'invalid'`, the sections of the field carry `aria-invalid="true"`, are described by the message after the picker, and the picker blocks the submit with its text, or `Invalid value.` when there is none.

```html
<div class="row">
  <div class="col-lg-4 form-field">
    <div class="is-invalid" data-coreui-time-picker data-coreui-locale="en-US" data-coreui-time="12:30:00"></div>
    <div class="invalid-feedback">The room is taken at this time.</div>
  </div>
</div>
```

## Custom formats

### Disable minutes and seconds

```html
<div class="row">
  <div class="col-sm-6 col-lg-4 mb-4 mb-sm-0">
    <label class="form-label" id="timePickerWithoutSecondsLabel">Without seconds</label>
    <div data-coreui-locale="en-US" data-coreui-seconds="false" data-coreui-time-picker aria-labelledby="timePickerWithoutSecondsLabel"></div>
  </div>
  <div class="col-sm-6 col-lg-4">
    <label class="form-label" id="timePickerHoursOnlyLabel">Hours only</label>
    <div data-coreui-locale="en-US" data-coreui-minutes="false" data-coreui-seconds="false" data-coreui-time-picker aria-labelledby="timePickerHoursOnlyLabel"></div>
  </div>
</div>
```

### Custom hours, minutes and seconds

Pass a list or a filter function through `hours`, `minutes`, and `seconds`. Hours are 0 to 23 in every locale. On a 12-hour clock the column still lists 1 to 12 next to AM/PM: picking an hour that only one period allows sets that period, and the period the picked hour does not allow is disabled, so the example below offers 8 AM to 4 PM.

```js
const picker = new coreui.TimePicker(element, {
  locale: 'en-US',
  hours: [8, 9, 10, 11, 12, 13, 14, 15, 16],
  minutes: minute => minute % 15 === 0,
  seconds: false
})
```

## Locale

The locale decides whether the field and the time columns use a 12-hour or a 24-hour clock, and names the day periods in its own words, 오전 and 오후 in Korean. A `format` pins the clock in every locale, `'HH:mm'` for 24 hours and `'hh:mm a'` for 12.

### Auto

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-time-picker></div>
  </div>
</div>
```

### Chinese

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-locale="zh-CN" data-coreui-time-picker></div>
  </div>
</div>
```

### Japanese

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-locale="ja" data-coreui-time-picker></div>
  </div>
</div>
```

### Korean

```html
<div class="row">
  <div class="col-lg-4">
    <div data-coreui-locale="ko" data-coreui-time-picker></div>
  </div>
</div>
```

## Right to left support

### Hebrew

```html
<div class="row" dir="rtl">
  <div class="col-lg-4">
    <div data-coreui-locale="he-IL" data-coreui-time-picker></div>
  </div>
</div>
```

### Persian

```html
<div class="row" dir="rtl">
  <div class="col-lg-4">
    <div data-coreui-locale="fa-IR" data-coreui-time-picker></div>
  </div>
</div>
```

## Accessibility

The toggle button carries the panel's state — `aria-haspopup="dialog"`, `aria-controls` pointing at the popup while it is open, and `aria-expanded` tracking whether it is open — so a screen reader announces what the button does and whether the panel is showing. The panel itself is a `dialog` with `aria-modal`, so focus moves into it on open, stays there while it is open, and returns to the field when it closes. The field itself is a [time input](https://coreui.io/bootstrap/docs/forms/time-input/#accessibility), a group of spinbutton sections, so its arrow keys belong to the value and the popup opens on the native dropdown keys.

Clicking a label that names the field, through `aria-labelledby` or a `<label for>` pointing at the element, moves focus to the first empty section of the field.

An `aria-label`, `aria-labelledby` or `aria-describedby` on the picker element moves to the field, so a screen reader announces the name and the description when focus enters it, and the picker element gets them back on dispose. Point `aria-labelledby` at the visible label, as the examples on this page do; it names the field over `floatingLabel` and an `ariaLabel` in `inputOptions`, the way the browser ranks names.

While the picker shows an invalid state, the sections of its field carry `aria-invalid="true"` and are described by the error message after the picker, see [Validation](#validation). An `aria-invalid` written on the picker element is not read; give the state with `validationState` or with the class.

### Keyboard support

| Key | Action |
| --- | --- |
| <kbd>Alt</kbd> (<kbd>Option</kbd> on macOS) + <kbd>Arrow Down</kbd> / <kbd>F4</kbd> | Open the time popup and move focus into it |
| <kbd>Escape</kbd> | Close the popup and return focus to the field |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Move within the open panel; the time selection is one stop, so Tab steps over it rather than through it |
| <kbd>Arrow Up</kbd> / <kbd>Arrow Down</kbd> | Move through the focused hour, minute or second list |
| <kbd>Arrow Left</kbd> / <kbd>Arrow Right</kbd> | Move between the hour, minute, second and AM/PM parts |
| <kbd>Home</kbd> / <kbd>End</kbd> | First or last option of the focused list |

## Usage

### Via data attributes

```html
<div data-coreui-time-picker></div>
```

### Via JavaScript

```js
const pickerElementList = Array.prototype.slice.call(document.querySelectorAll('.my-time-picker'))
const pickerList = pickerElementList.map(pickerEl => {
  return new coreui.TimePicker(pickerEl)
})
```

### Options

Options belonging to the inner [time input](https://coreui.io/bootstrap/docs/forms/time-input/#options) are
forwarded by name, so their data attributes work on the picker element too. The
time input's `date` and the roll's `hourCycle`, `onChange` and `time` are set
by the picker itself.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | Allowlist used when sanitizing the icon markup. |
| `ariaCleanerLabel` | string | `'Clear time'` | Accessible label of the cleaner button. |
| `ariaLabel` | string | `'Time input'` | Accessible name of the field. It lands on the `role="group"` container the sections sit in, so it names the whole control rather than one part of it. |
| `ariaPickerLabel` | string | `'Toggle time selection'` | Accessible label of the picker button. |
| `ariaPopupLabel` | string | `'Time selection'` | Accessible name of the time selection panel, which opens as a `role="dialog"`. |
| `ariaSelectHoursLabel` | string | `'Select hours'` | Accessible name of the hours column of the roll. |
| `ariaSelectMeridiemLabel` | string | `'Select AM/PM'` | Accessible name of the AM/PM column of the roll. |
| `ariaSelectMinutesLabel` | string | `'Select minutes'` | Accessible name of the minutes column of the roll. |
| `ariaSelectSecondsLabel` | string | `'Select seconds'` | Accessible name of the seconds column of the roll. |
| `cleaner` | boolean | `true` | Renders a button that clears the value. It appears only once the field holds one. |
| `cleanerIcon` | string | cross SVG | Inline SVG rendered by the component (sanitized). |
| `container` | string, element, false | `false` | Teleport target for the dropdown. Inside a modal dialog it goes into the dialog instead, because the rest of the page is inert. |
| `disabled` | boolean | `false` | Disables the field and the popup. |
| `floatingLabel` | string, null | `null` | Renders a floating label over the field, which also becomes its accessible name. An `aria-label` or `aria-labelledby` on the picker element names the field instead. |
| `hours` | array, function, null | `null` | Allowed hours, 0 to 23 in every locale — a list or a filter. |
| `inputOptions` | object | `{}` | Programmatic escape hatch for time input options, except `validationState`, which the picker owns. |
| `invalid` | boolean | `false` | Deprecated alias of `validationState: 'invalid'`, ignored once `validationState` is set. |
| `locale` | string | browser locale | Drives the mask and the 12/24-hour split. |
| `maxDate` | date, string, null | `null` | The latest time the user can pick, a time string or a date of which only the time of day counts. |
| `minDate` | date, string, null | `null` | The earliest time the user can pick, a time string or a date of which only the time of day counts. |
| `minutes` | array, boolean, function | `true` | Allowed minutes, or `false` to drop the column. |
| `name` | string, null | `null` | Name of the generated value input. Without it the field is not submitted with the form. |
| `pickerIcon` | string, boolean | `true` | The button that opens the time selection: `true` for the built-in icon, an inline SVG string for your own (sanitized), `false` for no button. Without it the popup has no pointer opener and nothing reports the expanded state, though the field keeps the keyboard openers below. |
| `sanitize` | boolean | `true` | Sanitize the icon markup. |
| `sanitizeFn` | function, null | `null` | Custom sanitizer. |
| `seconds` | array, boolean, function | `true` | `false` drops the column and the field's seconds section together. A list or a filter narrows the panel; the field still accepts any second. |
| `selectionOptions` | object | `{}` | Programmatic escape hatch for the selection body, except `onChange`, `time` and, when the field shows hours, `hourCycle`, which the picker owns. |
| `size` | string, null | `null` | `'sm'` or `'lg'`. |
| `time` | date, string, null | `null` | Initial value. |
| `valid` | boolean | `false` | Deprecated alias of `validationState: 'valid'`, ignored once `validationState` is set. |
| `validationState` | string, null | `null` | The validation state the picker shows: `'valid'`, `'invalid'` or a state of `$form-validation-states`. `'invalid'` also blocks the submit. The next change the user makes clears it, see [Validation](#validation). |

### Methods

| Method | Description |
| --- | --- |
| `clear` | Clears the value. |
| `dispose` | Destroys the picker and its inner components. |
| `getContext` | Returns the slot context. |
| `getTime` | Returns the current value (`Date` or `null`). |
| `now` | Sets the current time. |
| `reset` | Restores the initial value. |
| `setValidationState(state)` | Gives the picker a validation state (`'valid'`, `'invalid'` or a state added to `$form-validation-states`), or drops it with `null`. The value stays. See [Validation](#validation). |
| `setTime` | Sets the value without firing `timeChange`. The open panel follows it. |
| `show` / `hide` / `toggle` | Popup control. |

#### Slot context

```js
const context = picker.getContext()

context.now()            // set the current time
context.setTime(date)    // set any time
context.clear()          // clear the value
context.reset()          // restore the initial value
context.close()          // close the popup
context.time             // current value (Date | null)
context.disabled         // disabled state
```

### Events

| Event | Description |
| --- | --- |
| `show/shown/hide/hidden.coreui.time-picker` | Popup lifecycle. `shown` and `hidden` fire once the popup's transition has ended; `shown` is skipped when the popup closes first, `hidden` when it reopens first. |
| `timeChange.coreui.time-picker` | Fired once when the value changes, whether from the field, the panel or an action such as `now()`; `setTime()` does not fire it. `event.time` is the value the field accepted, the same as `getTime()`, or `null` when it refused the time. |

`timeChange.coreui.time-picker` fires before the field's `errorChange.coreui.time-input` for the same change, so a time an `errorChange` listener sets replaces the one just reported.

## Customizing

### CSS variables

The field is a [`.form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/#css-variables) on the picker element itself, so its frame, the cleaner and the toggle read the `--cui-control-*` and `--cui-control-group-*` tokens. Set them on the picker element to restyle one field.

The panel's tokens are declared on `.time-picker-popup`, which is the element that survives being teleported away from the field — set them there rather than on an ancestor.

```scss
$time-picker-tokens: defaults(
  (
    --cui-time-picker-footer-border-width: var(--cui-border-width),
    --cui-time-picker-footer-border-color: var(--cui-border-color),
    --cui-time-picker-footer-padding-y: .5rem,
    --cui-time-picker-footer-padding-x: .5rem,
    --cui-time-picker-footer-gap: .5rem,
    --cui-time-picker-col-border-width: var(--cui-border-width),
    --cui-time-picker-col-border-color: var(--cui-border-color),
    --cui-time-picker-cell-width: 3rem,
    --cui-time-picker-cell-padding-x: .5rem,
    --cui-time-picker-cell-height: 2rem,
    --cui-time-picker-cell-hover-color: var(--cui-fg-body),
    --cui-time-picker-cell-hover-bg: var(--cui-bg-2),
    --cui-time-picker-cell-disabled-color: var(--cui-fg-4),
    --cui-time-picker-cell-selected-color: var(--cui-primary-contrast),
    --cui-time-picker-cell-selected-bg: var(--cui-primary-base),
    --cui-time-picker-cell-selected-hover-color: var(--cui-primary-contrast),
    --cui-time-picker-cell-selected-hover-bg: oklch(from var(--cui-primary-base) calc(l * var(--cui-theme-hover-lightness)) calc(c * var(--cui-theme-hover-chroma)) h),
  ),
  $time-picker-tokens
);
```

The panel is a `.popup`: its surface, border, shadow, stacking and fade come from the tokens every popup panel shares with the other pickers, Combobox, Autocomplete and Multi Select. `.popup` declares them itself, so set them on `.time-picker-popup` to restyle this panel or on `.popup` for all of them; a value set on an ancestor or on `:root` does not reach it.

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
