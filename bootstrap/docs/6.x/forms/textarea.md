# Bootstrap 6 Textarea

> Style a multi-line text field with the same class as any other form control, and size it by rows rather than by CSS.

## Example

A textarea takes the same `.form-control` class as an input — it needs no class of its own. Set its height with the `rows` attribute rather than CSS, so the field grows in whole lines and stays legible at any font size.

```html
<div class="form-field">
  <label for="exampleTextarea" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleTextarea"></textarea>
</div>
<div class="form-field">
  <label for="exampleTextareaRows" class="form-label">Taller textarea</label>
  <textarea class="form-control" id="exampleTextareaRows" rows="4"></textarea>
</div>
```

## Sizing

`.form-control-sm` and `.form-control-lg` change the padding and font size, the same as on an input. `rows` still decides the height.

```html
<textarea class="form-control form-control-sm" aria-label="Small textarea" rows="2"></textarea>
<textarea class="form-control" aria-label="Default textarea" rows="2"></textarea>
<textarea class="form-control form-control-lg" aria-label="Large textarea" rows="2"></textarea>
```

## Disabled

```html
<div class="form-field">
  <label for="disabledTextarea" class="form-label">Disabled textarea</label>
  <textarea class="form-control" id="disabledTextarea" rows="3" disabled></textarea>
</div>
```

## Readonly

```html
<div class="form-field">
  <label for="readonlyTextarea" class="form-label">Readonly textarea</label>
  <textarea class="form-control" id="readonlyTextarea" rows="3" readonly>Text the reader can select and copy, but not change.</textarea>
</div>
```

## With form field

Wrap the control in [`.form-field`](https://coreui.io/bootstrap/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<div class="form-field">
  <label for="textareaField" class="form-label">Message</label>
  <textarea class="form-control" id="textareaField" rows="3"></textarea>
  <small class="form-text">Tell us what happened, in as much detail as you can.</small>
</div>
```

## Customizing

A textarea reads the [form control](https://coreui.io/bootstrap/docs/forms/form-control/#customizing) tokens — it declares none of its own.
