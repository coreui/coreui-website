# Bootstrap 6 Floating Labels

> Create beautifully simple form labels that float over your input fields.

## Example

Wrap a `<label>` and an `<input class="form-control" />` in `.form-floating` to enable floating labels with CoreUI for Bootstrap's textual form fields. A `placeholder` is required on each `<input />` as our method of CSS-only floating labels uses the `:placeholder-shown` pseudo-element. The placeholder stays hidden while the label rests in the field, and shows under the floated label once the field has focus.

Write the `<label>` first, so a screen reader announces it before the field's value. The v5 order — control first, label after — keeps working: every state is matched in both directions, forward with `:has()` and backward with the sibling combinator.

```html
<div class="form-floating mb-4">
  <label for="floatingInput">Email address</label>
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
</div>
<div class="form-floating">
  <label for="floatingPassword">Password</label>
  <input type="password" class="form-control" id="floatingPassword" placeholder="••••••••">
</div>
```

When there's a `value` already defined, `<label>`s will automatically adjust to their floated position.

```html
<form class="form-floating">
  <label for="floatingInputValue">Input with value</label>
  <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="test@example.com">
</form>
```

Form validation styles also work as expected.

```html
<form class="form-floating">
  <label for="floatingInputInvalid">Invalid input</label>
  <input type="email" class="form-control is-invalid" id="floatingInputInvalid" placeholder="name@example.com" value="test@example.com">
</form>
```

## Textareas

By default, `<textarea>`s with `.form-control` will be the same height as `<input />`s.

```html
<div class="form-floating">
  <label for="floatingTextarea">Comments</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
```

To set a custom height on your `<textarea>`, do not use the `rows` attribute. Instead, set an explicit `height` (either inline or via custom CSS).

```html
<div class="form-floating">
  <label for="floatingTextarea2">Comments</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
</div>
```

## Selects

Other than `.form-control`, floating labels are only available on `.form-control`s. They work in the same way, but unlike `<input />`s, they'll always show the `<label>` in its floated state. **Selects with `size` and `multiple` are not supported.**

```html
<div class="form-floating">
  <label for="floatingSelect">Works with selects</label>
  <select class="form-control" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
```

## Date and time

Date, time, datetime-local, month, and week inputs also always show the `<label>` in its floated state. These controls do not support placeholders the way textual inputs do, so a `placeholder` attribute is not required (and is ignored by most browsers on these types). For a field that formats its value by locale, use the [Date Picker](https://coreui.io/bootstrap/docs/forms/date-picker/#floating-labels) or the [Time Picker](https://coreui.io/bootstrap/docs/forms/time-picker/#floating-labels) with the `floatingLabel` option.

```html
<div class="form-floating">
  <label for="floatingDate">Date</label>
  <input type="date" class="form-control" id="floatingDate">
</div>
<div class="form-floating">
  <label for="floatingTime">Time</label>
  <input type="time" class="form-control" id="floatingTime">
</div>
```

## Disabled

Add the `disabled` boolean attribute on an input, a textarea or a select to give it a grayed out appearance, remove pointer events, and prevent focusing.

```html
<div class="form-floating mb-4">
  <label for="floatingInputDisabled">Email address</label>
  <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com" disabled>
</div>
<div class="form-floating mb-4">
  <label for="floatingTextareaDisabled">Comments</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" disabled></textarea>
</div>
<div class="form-floating mb-4">
  <label for="floatingTextarea2Disabled">Comments</label>
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 100px" disabled>Disabled textarea with some text inside</textarea>
</div>
<div class="form-floating">
  <label for="floatingSelectDisabled">Works with selects</label>
  <select class="form-control" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
```

## Readonly plaintext

Floating labels also support `.form-control-plaintext`, which can be helpful for toggling from an editable `<input />` to a plaintext value without affecting the page layout.

```html
<div class="form-floating mb-4">
  <label for="floatingEmptyPlaintextInput">Empty input</label>
  <input type="email" readonly class="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com">
</div>
<div class="form-floating mb-4">
  <label for="floatingPlaintextInput">Input with value</label>
  <input type="email" readonly class="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com">
</div>
```

## Input groups

Floating labels also support `.input-group` — put the `.form-floating` next to the other addons:

```html
<div class="input-group mb-4">
  <span class="input-group-text">@</span>
  <div class="form-floating">
    <label for="floatingInputGroup1">Username</label>
    <input type="text" class="form-control" id="floatingInputGroup1" placeholder="mdo">
  </div>
</div>
```

When using `.input-group` and `.form-floating` along with form validation, wrap the group in a [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) and place the feedback outside the `.input-group`, so it renders under the whole group rather than inside the frame:

```html
<div class="form-field">
  <div class="input-group">
    <span class="input-group-text">@</span>
    <div class="form-floating is-invalid">
      <label for="floatingInputGroup2">Username</label>
      <input type="text" class="form-control is-invalid" id="floatingInputGroup2" placeholder="mdo" required>
    </div>
  </div>
  <div class="invalid-feedback">
    Please choose a username.
  </div>
</div>
```

## Always floating

Add `.form-floating-always` to keep the label floated and show the placeholder. Use it on the `.form-floating` itself, or on any ancestor to cover every floating field inside.

```html
<div class="form-floating form-floating-always">
  <label for="alwaysFloatingInput">Email address</label>
  <input type="email" class="form-control" id="alwaysFloatingInput" placeholder="name@example.com">
</div>
<div class="form-floating form-floating-always">
  <label for="alwaysFloatingPassword">Password</label>
  <input type="password" class="form-control" id="alwaysFloatingPassword" placeholder="••••••••">
</div>
```

The date and time pickers build their `.form-floating` from the `floatingLabel` option, so put the class on the component element.

```html
<div class="form-floating-always" data-coreui-locale="en-US" data-coreui-floating-label="Delivery date" data-coreui-date-picker></div>
```

By default, placeholders stay transparent until the control is focused. With `.form-floating-always`, the placeholder stays visible in both states, so keep it short on a textarea, where the floated label covers its first line.

## Layout

When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes.

```html
<div class="row g-3">
  <div class="col-md">
    <div class="form-floating">
      <label for="floatingInputGrid">Email address</label>
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com">
    </div>
  </div>
  <div class="col-md">
    <div class="form-floating">
      <label for="floatingSelectGrid">Works with selects</label>
      <select class="form-control" id="floatingSelectGrid">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
</div>
```

## Customizing

### CSS variables

`.form-floating` carries the tokens, so a single field can be retuned without recompiling. Anything nested inside it follows them, including the date and time inputs, which drive their own float on `:focus-within` instead of `:placeholder-shown`.

```scss
$form-floating-tokens: () !default;
$form-floating-tokens: defaults(
  (
    --cui-form-floating-height: calc(3.5rem + var(--cui-btn-input-border-width) * 2),
    --cui-form-floating-line-height: 1.25,
    --cui-form-floating-padding-x: var(--cui-btn-input-padding-x),
    --cui-form-floating-padding-y: 1rem,
    --cui-form-floating-input-padding-t: 1.625rem,
    --cui-form-floating-input-padding-b: .625rem,
    --cui-form-floating-label-height: 1.5em,
    --cui-form-floating-label-opacity: .65,
    --cui-form-floating-label-transform: scale(.85) translateY(-.5rem) translateX(.15rem),
    --cui-form-floating-label-disabled-color: var(--cui-fg-3),
    // The label is a sibling of the control, so it cannot inherit its background.
    --cui-form-floating-label-bg: var(--cui-btn-input-bg),
    --cui-form-floating-label-disabled-bg: var(--cui-bg-2),
    --cui-form-floating-label-border-radius: var(--cui-btn-input-border-radius),
    --cui-form-floating-transition-property: #{"opacity, transform"},
    --cui-form-floating-transition-duration: .1s,
    --cui-form-floating-transition-timing: ease-in-out,
  ),
  $form-floating-tokens
);
```
