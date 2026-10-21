# Bootstrap 6 Form Field

> A layout wrapper for a form control, its label, description and validation feedback, built on CSS grid.

`.form-field` gives a control the layout and spacing it needs alongside its label, description and validation feedback — so a form is spaced by the field itself rather than by margin utilities sprinkled over its parts.

```html
<div class="form-field">
  <label for="fieldText" class="form-label">Email address</label>
  <input type="email" class="form-control" id="fieldText" placeholder="name@example.com">
  <div class="form-text">
    We'll never share your email with anyone else.
  </div>
</div>
```

## How it works

- **Default layout** is a single-column grid: everything stacks vertically with one gap. Use it for text inputs, selects, textareas, ranges, input groups and any of the [PRO field components](https://coreui.io/bootstrap/docs/forms/form-control-group/).
- **Two-column layout** switches on through `:has()` when a `.check`, `.radio` or `.switch` is a direct child — the control pins to the first column, the label and description stack in the second. The deprecated `.form-check-input` triggers it too, so markup that has not moved yet lays out the same way.
- **A field label** (`.form-label`) spans both columns and sits above the control row.
- **Grouped controls** — nest a `.form-field` per control inside an outer one to put several radios or checkboxes under a shared label with a shared description.

## Examples

### Select

```html
<div class="form-field">
  <label for="fieldSelect" class="form-label">Country</label>
  <select class="form-control" id="fieldSelect">
    <option selected>Choose one…</option>
    <option value="1">United States</option>
    <option value="2">Canada</option>
    <option value="3">United Kingdom</option>
  </select>
</div>
```

### Textarea

```html
<div class="form-field">
  <label for="fieldTextarea" class="form-label">Message</label>
  <textarea class="form-control" id="fieldTextarea" rows="3"></textarea>
  <div class="form-text">
    Be sure to include the relevant details.
  </div>
</div>
```

### Checkbox

```html
<div class="form-field">
  <input class="check" type="checkbox" id="fieldCheck">
  <label for="fieldCheck">Subscribe to the newsletter</label>
  <div class="form-text">We send one email a month, and never share your address.</div>
</div>
```

### Grouped

Nest one `.form-field` per control inside an outer one, and give the group its own `.form-label`.

```html
<div class="form-field">
  <span class="form-label">Delivery</span>
  <div class="form-field">
    <input class="radio" type="radio" name="fieldRadio" id="fieldRadio1" checked>
    <label for="fieldRadio1">Standard</label>
    <div class="form-text">Three to five working days.</div>
  </div>
  <div class="form-field">
    <input class="radio" type="radio" name="fieldRadio" id="fieldRadio2">
    <label for="fieldRadio2">Express</label>
    <div class="form-text">Next working day, where available.</div>
  </div>
</div>
```

### Switch

```html
<div class="form-field">
  <input class="switch" type="checkbox" role="switch" id="fieldSwitch">
  <label for="fieldSwitch">Email notifications</label>
  <div class="form-text">Turn this off and we will only contact you about your account.</div>
</div>
```

## Overhead label

When a check, radio, or switch needs a field title above it, add a `.form-label`. It spans both grid columns automatically, so it sits on its own row above the control while the control's own label and description keep their places:

```html
<div class="form-field">
  <label class="form-label">Terms and conditions</label>
  <input class="check" type="checkbox" id="fieldOverheadCheck">
  <label for="fieldOverheadCheck">I agree to the terms</label>
  <div class="form-text">Please read them before agreeing.</div>
</div>
```

## Validation

Feedback elements are children of the field like any other, so they inherit its gap and land under the control. A message right after the control shows as it does anywhere. For a check, a radio, a switch, a `.form-control` or `.form-select` in an input group, or a control placed directly in a component frame or in its floating label, the field shows its messages wherever they sit in it, for example in a `.form-field-content` next to the label; a check, a radio and a switch also colour the label. Give each control its own field: a field that groups others shows every message inside it while one of them is invalid.

### Client-side

Add `data-coreui-validate` to the `<form>` to style fields from `:user-invalid`, which only matches after the user has interacted with a control — so a field is not marked wrong before it has been filled in. `novalidate` suppresses the browser's own tooltips while keeping the constraint validation API available.

```html
<form class="vstack gap-4" data-coreui-validate novalidate>
  <div class="form-field">
    <label for="fieldValidateEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="fieldValidateEmail" required>
    <div class="invalid-feedback">Please enter a valid email address.</div>
  </div>
  <div class="form-field">
    <input type="checkbox" id="fieldValidateTerms" class="check" required>
    <label for="fieldValidateTerms">Accept the terms</label>
    <div class="invalid-feedback">You must accept before submitting.</div>
  </div>
  <button class="btn-solid theme-primary" type="submit">Submit</button>
</form>
```

### Server-side

```html
<div class="form-field">
  <label for="fieldValidation" class="form-label">Username</label>
  <input type="text" class="form-control is-invalid" id="fieldValidation" value="jan kowalski" aria-describedby="fieldValidationFeedback">
  <div id="fieldValidationFeedback" class="invalid-feedback">
    A username cannot contain spaces.
  </div>
</div>
```

See [validation](https://coreui.io/bootstrap/docs/forms/validation/) for the full picture, including the server-side and browser-native flavours.

## Descriptions

Add a `<small class="form-text">` after the label and wrap both in a `.form-field-content` so the description sits under the label rather than beside the control.

```html
<div class="form-field">
  <input type="checkbox" id="fieldCheckDesc" class="check" />
  <div class="form-field-content">
    <label for="fieldCheckDesc">Subscribe to updates</label>
    <small class="form-text">We'll send you a weekly digest of what's new.</small>
  </div>
</div>
<div class="form-field">
  <input type="radio" id="fieldRadioDesc" class="radio" name="fieldRadioDesc" checked />
  <div class="form-field-content">
    <label for="fieldRadioDesc">Standard shipping</label>
    <small class="form-text">Arrives in three to five working days.</small>
  </div>
</div>
```

### Cards

Add `.form-field-card` to each field for a card treatment that highlights the selected option. The label's hit area covers the whole card, so the option is selected by clicking anywhere on it. Wrap the set in a `.form-group` to carry its own label and keep the spacing tight.

```html
<div class="form-group">
  <label class="form-label">Select a plan</label>
  <div class="vstack gap-1">
    <div class="form-field form-field-card">
      <input type="radio" id="fieldRadioCard1" class="radio" name="fieldRadioCard" checked />
      <div class="form-field-content">
        <label for="fieldRadioCard1">Basic</label>
        <small class="form-text">$9/month — for individuals.</small>
      </div>
    </div>
    <div class="form-field form-field-card">
      <input type="radio" id="fieldRadioCard2" class="radio" name="fieldRadioCard" />
      <div class="form-field-content">
        <label for="fieldRadioCard2">Pro</label>
        <small class="form-text">$29/month — for teams.</small>
      </div>
    </div>
  </div>
</div>
```

### Groups

`.form-group` lays out a set of related fields the way `.form-field` lays out one: a grid with the same gap, and a label or `<legend>` pinned to the start. Reach for it when several fields share a heading — the card example above uses it.

```html
<fieldset class="form-group">
  <legend class="form-label">Notifications</legend>
  <div class="form-field">
    <input type="checkbox" id="groupCheck1" class="check" checked />
    <label for="groupCheck1">Email</label>
  </div>
  <div class="form-field">
    <input type="checkbox" id="groupCheck2" class="check" />
    <label for="groupCheck2">Push</label>
  </div>
</fieldset>
```

## Customizing

### CSS variables

```scss
$form-field-tokens: defaults(
  (
    --cui-form-field-gap: .5rem,
    --cui-form-field-column-gap: .5rem,
  ),
  $form-field-tokens
);
```

`.form-field-card` and `.form-group` carry their own sets:

```scss
$form-field-card-tokens: defaults(
  (
    --cui-form-field-card-padding-y: calc(var(--cui-spacer) * .75),
    --cui-form-field-card-padding-x: calc(var(--cui-spacer) * .75),
    --cui-form-field-card-radius: var(--cui-radius-7),
    --cui-form-field-card-hover-bg: var(--cui-bg-1),
    --cui-form-field-card-checked-bg: var(--cui-bg-1),
    --cui-form-field-card-checked-border-color: var(--cui-border-color),
  ),
  $form-field-card-tokens
);
```

```scss
$form-group-tokens: defaults(
  (
    --cui-form-group-gap: .5rem,
  ),
  $form-group-tokens
);
```
