# Bootstrap 6 Number Input

> Add accessible increment and decrement buttons to a Bootstrap number field, with min, max and step handled by the browser.

# Number Input

A number field with a stepper you can actually hit. The browser's own spinner is
tiny, appears only on hover in some engines and does not exist at all on iOS, so
the component replaces it with two buttons sized like every other adornment in a
[`form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/).

## Example

_Added in 6.0.0._

Add `data-coreui-number-input` to an `<input type="number">`. The
component wraps it in a [`form-control-group`](https://coreui.io/bootstrap/docs/forms/form-control-group/) and
adds the buttons — you write neither the frame, the buttons nor their icons.

```html
<input type="number" class="form-control" value="3" aria-label="Quantity" data-coreui-number-input>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="numberInputField" class="form-label">Quantity</label>
  <input type="number" class="form-control" id="numberInputField" value="3" data-coreui-number-input>
  <div class="form-text">Up to ten items per order.</div>
</div>
```

## Min, max and step

`min`, `max` and `step` are the native attributes — the component does not
reimplement them, it calls the browser's own stepping. **A button that cannot
move the value any further is disabled**, so the bound is visible rather than
just unresponsive. When a script changes these attributes later, the buttons
follow as described under [Disabled and read-only](#disabled-and-read-only).

```html
<input type="number" class="form-control" value="10" min="0" max="10" aria-label="Quantity" data-coreui-number-input>
```

A fractional `step` works the same way:

```html
<input type="number" class="form-control" value="2" step="0.5" aria-label="Amount" data-coreui-number-input>
```

When the field is empty, a button steps from zero, and the result stays within
`min` and `max` and on the `step` grid.

## Sizing

Write `.form-control-sm` or `.form-control-lg` on the input as you would on any
other control, and the buttons follow.

Sizing belongs to the frame rather than to the control inside it, so the
component moves the class onto the group it builds — and with it **every other
class you wrote except `.form-control` itself**. Spacing, width and the rest
describe the field as a whole, and the field is now the frame; leaving `mb-4`
on the input would put the margin inside the border.

State classes stay where you wrote them: `.is-valid`, `.is-invalid` and
anything else starting with `is-` or `was-`, plus `js-` hooks your own code
selects by. The frame picks the validation state up from the input, so
`document.querySelector('.form-control.is-invalid')` still finds the control
and a validator that toggles the class keeps working.

```html
<input type="number" class="form-control form-control-sm mb-4" value="3" aria-label="Quantity" data-coreui-number-input>
<input type="number" class="form-control form-control-lg" value="3" aria-label="Quantity" data-coreui-number-input>
```

## Disabled and read-only

```html
<input type="number" class="form-control" value="3" aria-label="Quantity" disabled data-coreui-number-input>
```

```html
<input type="number" class="form-control" value="3" aria-label="Quantity" readonly data-coreui-number-input>
```

Both buttons are disabled while the field is `disabled` or `readonly`. When a
script changes either attribute, or `min`, `max` or `step`, later, the buttons
catch up as soon as the pointer moves over or presses the field, the field takes
focus or the user edits it. A press never steps a field it should not step, and
a touch on a button that still looks disabled brings it up to date first.

## Inside your own group

An input that is already in a `.form-control-group` is left where you put it, so
a number field can share a frame with anything else the group holds:

```html
<div class="form-control-group">
  <span class="form-control-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M464 240H272V48h-32v192H48v32h192v192h32V272h192z"/></svg>
  </span>
  <input type="number" class="form-control" value="3" aria-label="Quantity" data-coreui-number-input>
</div>
```

## Floating labels

The number input supports [floating labels](https://coreui.io/bootstrap/docs/forms/floating-labels/). Wrap the control in `.form-floating` and put a `<label>` beside it — the stepper buttons ride along with the field.

```html
<div class="form-floating">
  <label for="floatingNumberInput">Quantity</label>
  <input class="form-control" type="number" placeholder=" " id="floatingNumberInput" value="42" data-coreui-number-input>
</div>
```

Add `.form-floating-always` to the wrapper, or to any ancestor, to keep the label [always floating](https://coreui.io/bootstrap/docs/forms/floating-labels/#always-floating).

## Accessibility

The buttons carry labels (`Increase` / `Decrease` by default, both
configurable) but are **kept out of the tab order**: a number field already
steps with <kbd>↑</kbd> and <kbd>↓</kbd>, so putting them in would add two tab
stops per field for something the keyboard already reaches. A mouse press on a
button, enabled or not, puts the focus in the field rather than on the button,
so typing and the arrow keys act on the field you just stepped. Give the input an `aria-label` or a `<label>` as you would any other
field.

## Usage

Holding a button repeats after a short delay, and releasing it does not add a
step. Set `repeat: false` to require a click per step.

```js
const numberInput = new coreui.NumberInput('#myNumberInput', {
  repeat: false
})

numberInput.increment()
numberInput.decrement()
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | Allowlist the icons are sanitized against. |
| `ariaDecrementLabel` | string | `'Decrease'` | Accessible label for the decrement button. |
| `ariaIncrementLabel` | string | `'Increase'` | Accessible label for the increment button. |
| `decrementIcon` | string | minus | Icon markup for the decrement button. |
| `incrementIcon` | string | plus | Icon markup for the increment button. |
| `repeat` | boolean | `true` | Repeat the step while a button is held. |
| `sanitize` | boolean | `true` | Sanitize the icon markup. |
| `sanitizeFn` | function \| null | `null` | Your own sanitizer. |

### Methods

| Method | Description |
| --- | --- |
| `decrement()` | Steps the value down by `step` (or by one, on a field without a numeric `step`), exactly as the decrement button does. |
| `dispose()` | Destroys the component instance, removes the increment/decrement buttons it created, and releases the field. |
| `getInstance(element)` | Static method that returns the instance associated with a DOM element, or `null`. |
| `getOrCreateInstance(element, config)` | Static method that returns the instance associated with a DOM element, creating it when there is none. |
| `increment()` | Steps the value up by `step` (or by one, on a field without a numeric `step`), exactly as the increment button does. |

### Events

| Event | Description |
| --- | --- |
| `change.coreui.number-input` | Fires after the value changes through a button, carrying the new `value`. |

The element also fires the native `input` and `change` events, so anything
already listening to the field keeps working.

> **Decimal separators.** `` accepts the dot as the decimal
> separator regardless of locale, and a value the browser rejects is reported as
> an empty string — the field cannot tell you what was typed. If you need
> locale-aware separators, currency or grouping, that is a formatted-input
> problem rather than a stepper one, and `type="number"` is the wrong base for
> it.

## Customizing

### CSS variables

The frame, the buttons and their sizing are the group's, and read the shared
`--cui-control-*` properties. Set them on the `.form-control-group` around the
input, the one you wrote or the one the plugin adds when there is none; a
`style` attribute on the `<input>` does not reach the frame:

```scss
$form-control-group-tokens: () !default;
$form-control-group-tokens: defaults(
  (
    --cui-control-group-gap: .5rem,
    --cui-control-group-icon-size: 1rem,
    --cui-control-group-icon-color: var(--cui-fg-3),
    --cui-control-group-text-color: var(--cui-fg-3),
    --cui-control-group-action-size: 1.5rem,
    --cui-control-group-action-color: var(--cui-fg-3),
    --cui-control-group-action-hover-color: var(--cui-fg-body),
    --cui-control-group-action-bg: transparent,
    --cui-control-group-action-hover-bg: var(--cui-bg-1),
    --cui-control-group-action-border-radius: var(--cui-btn-input-sm-border-radius),
    --cui-control-group-action-transition-property: #{var(--cui-btn-input-action-transition-property), transform},
    --cui-control-group-action-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-control-group-action-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-control-group-disabled-opacity: var(--cui-btn-input-disabled-opacity),
  ),
  $form-control-group-tokens
);
```

### Sass maps

The group takes its own icon and action sizes per size class, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$form-control-group-sizes: defaults(
  (
    "sm": (icon-size: .875rem, action-size: 1.25rem),
    "lg": (icon-size: 1.25rem, action-size: 1.75rem),
  ),
  $form-control-group-sizes
);
```
