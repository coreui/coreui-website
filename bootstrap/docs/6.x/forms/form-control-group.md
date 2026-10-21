# Bootstrap 6 Form Control Group

> Assemble an input, icons and action buttons into one control that looks and behaves like a single form field — the frame every CoreUI field component is built on.

## Example

_Added in 6.0.0._

A control is often more than an input: it carries an icon, a clear button, a
toggle. `.form-control-group` draws **one** frame around all of it, so the
result reads as a single field rather than a row of parts.

```html
<div class="form-control-group">
  <span class="form-control-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M479.6 399.716l-81.084-81.084-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2L400.4 479.6a56 56 0 1 0 79.2-79.884ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.835 23.894 76.573 76.572a24.028 24.028 0 0 1 0 33.941Z"/></svg>
  </span>
  <input type="search" class="form-control" placeholder="Search…" aria-label="Search">
</div>
```

## How it works

- **The group is the frame.** `.form-control-group` looks exactly like
  `.form-control` — same padding, typography, colours, border and transition,
  from the same `--cui-control-*` custom properties — and lays its
  children out in a row. Theme `.form-control` and the group follows.
- **The control inside keeps its own class.** Put `.form-control` on the input:
  inside a group it gives up its border, padding and background, so only the
  group's frame is drawn. There is no separate "ghost" class to remember.
- **Focus is answered by the group.** A `<div>` never fires `:focus`, so the
  frame lights up on `:focus-within`.

## Parts

| Class | Use |
| --- | --- |
| `.form-control-group` | The frame. |
| `.form-control` | The editable inside it. |
| `.form-control-icon` | Decoration — an icon and nothing more. It ignores pointer events, and can sit in the group on its own or inside an action. |
| `.form-control-text` | Static text in the frame — a prefix or suffix like `https://`, `@` or `.00`. Inert and unselectable, so a click lands in the input and a drag over the field does not pick it up. |
| `.form-control-action` | An interactive adornment: a real `<button>`. Give it an `aria-label`; it may hold a `.form-control-icon`. |
| `.form-control-cleaner` | The action that clears the value. Styled like an action; showing and hiding it is the component's job, since only it knows whether the control holds a value. |

Icons take their size from the group, so they follow `.form-control-sm` and
`.form-control-lg` without being told. An icon inside an action follows the
button's colour, which is how a validation state reaches it.

```html
<div class="form-control-group">
  <input type="text" class="form-control" value="Ada Lovelace" aria-label="Name">
  <button type="button" class="form-control-action" aria-label="Clear">
    <span class="form-control-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/></svg>
    </span>
  </button>
</div>
```

## Static text

_Added in 6.0.0._

Use `.form-control-text` for a fixed prefix or suffix that labels the value
rather than changing it — a scheme, a unit, a currency. It is inert: pointer
events pass through to the input, and the text cannot be selected, so
double-clicking to select the value never catches the adornment instead.

Which side it lands on is decided by where you put it, because the group is a
flex row and follows DOM order. Write it before the input for a prefix, after
for a suffix — there is no separate class for the end.

```html
<div class="form-control-group mb-4">
  <span class="form-control-text">https://</span>
  <input type="text" class="form-control" placeholder="example.com" aria-label="Website address">
</div>
<div class="form-control-group mb-4">
  <span class="form-control-text">@</span>
  <input type="text" class="form-control" placeholder="username" aria-label="Username">
</div>
<div class="form-control-group">
  <span class="form-control-text">$</span>
  <input type="text" class="form-control" placeholder="0" aria-label="Amount">
  <span class="form-control-text">.00</span>
</div>
```

It combines with the other parts, and dims with the group when the field is
disabled:

```html
<div class="form-control-group">
  <span class="form-control-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/></svg>
  </span>
  <span class="form-control-text">USD</span>
  <input type="text" class="form-control" value="1250" disabled aria-label="Amount">
</div>
```

## Sizing

Add `.form-control-sm` or `.form-control-lg` to the group — the standard
control sizing classes, no per-component variants.

```html
<div class="form-control-group form-control-sm mb-4">
  <input type="text" class="form-control" placeholder="Small" aria-label="Small">
</div>
<div class="form-control-group mb-4">
  <input type="text" class="form-control" placeholder="Default" aria-label="Default">
</div>
<div class="form-control-group form-control-lg">
  <input type="text" class="form-control" placeholder="Large" aria-label="Large">
</div>
```

## Validation

Put `.is-invalid` or `.is-valid` on the group. The state also reaches the frame
from the control inside it, so a component that validates its own field lights
the frame up without any extra wiring. A sibling `.invalid-feedback` follows the
`.is-invalid` class wherever it sits, on the group or on the control inside it,
and a `.valid-feedback` waits until nothing is invalid, the frame included.
The actions inside the group carry the state colour too.

```html
<div class="form-field">
  <div class="form-control-group is-invalid">
    <input type="text" class="form-control" value="Not quite" aria-label="Invalid example" aria-invalid="true" aria-describedby="formControlGroupInvalidFeedback">
    <button type="button" class="form-control-action" aria-label="Clear">
      <span class="form-control-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/></svg>
      </span>
    </button>
  </div>
  <div id="formControlGroupInvalidFeedback" class="invalid-feedback">Please pick a different value.</div>
</div>
```

## Disabled

Disable the control inside the group and the frame follows; use `.disabled` on
the group when there is no single control to disable.

```html
<div class="form-control-group">
  <input type="text" class="form-control" value="Read only" aria-label="Disabled example" disabled>
  <button type="button" class="form-control-action" aria-label="Clear" disabled>
    <span class="form-control-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/></svg>
    </span>
  </button>
</div>
```

> **Not to be confused with [input group](https://coreui.io/bootstrap/docs/forms/input-group/).** An input group
> joins *separate* controls and add-ons side by side — each keeps its own frame,
> and the seams between them are visible. A form control group is *one* control
> assembled from parts inside a single frame.

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="formControlGroupField" class="form-label">Search</label>
  <div class="form-control-group">
    <span class="form-control-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M479.6 399.716l-81.084-81.084-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2L400.4 479.6a56 56 0 1 0 79.2-79.884ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.835 23.894 76.573 76.572a24.028 24.028 0 0 1 0 33.941Z"/></svg>
    </span>
    <input type="search" class="form-control" id="formControlGroupField" placeholder="Search…">
  </div>
  <div class="form-text">Searches titles and body text.</div>
</div>
```

## Where it is used

Every CoreUI field component builds on it, which is why they all size, focus
and validate the same way: [autocomplete](https://coreui.io/bootstrap/docs/forms/autocomplete/),
[chip input](https://coreui.io/bootstrap/docs/forms/chip-input/), [date picker](https://coreui.io/bootstrap/docs/forms/date-picker/),
[date range picker](https://coreui.io/bootstrap/docs/forms/date-range-picker/),
[multi select](https://coreui.io/bootstrap/docs/forms/multi-select/), [password input](https://coreui.io/bootstrap/docs/forms/password-input/)
and [time picker](https://coreui.io/bootstrap/docs/forms/time-picker/). Reach for the group directly when you
are assembling a field of your own.

## Customizing

### CSS variables

The frame runs on the shared `--cui-control-*` custom properties, so it
is themed together with `.form-control`. The parts the group owns have their
own:

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
