# Vue Form Control Group

> Assemble an input, icons and action buttons into one control that looks and behaves like a single form field — the frame every CoreUI field component is built on.

## Example

_Added in 6.0.0._

A control is often more than an input: it carries an icon, a clear button, a
toggle. `.form-control-group` draws **one** frame around all of it, so the
result reads as a single field rather than a row of parts. The PRO field
components — [autocomplete](https://coreui.io/vue/docs/forms/autocomplete/), [chip input](https://coreui.io/vue/docs/forms/chip-input/),
[date picker](https://coreui.io/vue/docs/forms/date-picker/), [date range picker](https://coreui.io/vue/docs/forms/date-range-picker/),
[multi select](https://coreui.io/vue/docs/forms/multi-select/), [password input](https://coreui.io/vue/docs/forms/password-input/) and
[time picker](https://coreui.io/vue/docs/forms/time-picker/) —
emit this markup internally, which is why they all size, focus and validate the
same way. Reach for the classes directly when you are assembling a field of
your own.

```html
<template>
  <CFormControlGroup>
    <CFormControlIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
        <path
          d="M479.6 399.716l-81.084-81.084-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2L400.4 479.6a56 56 0 1 0 79.2-79.884ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.835 23.894 76.573 76.572a24.028 24.028 0 0 1 0 33.941Z"
        />
      </svg>
    </CFormControlIcon>
    <CFormInput type="search" placeholder="Search…" aria-label="Search" />
  </CFormControlGroup>
</template>

<script setup>
import { CFormControlGroup, CFormControlIcon, CFormInput } from '@coreui/vue-pro'
</script>
```

## How it works

- **The group is the frame.** `.form-control-group` looks exactly like
  `.form-control` — same padding, typography, colours, border and transition,
  from the same `--cui-control-*` custom properties — and lays its
  children out in a row. Theme `.form-control` and the group follows.
- **The control inside keeps its own class.** Put `<CFormInput>` in the group:
  inside it the `.form-control` gives up its border, padding and background, so
  only the group's frame is drawn. There is no separate "ghost" class to remember.
- **Focus is answered by the group.** A `<div>` never fires `:focus`, so the
  frame lights up on `:focus-within`.

## Parts

| Component | Use |
| --- | --- |
| `<CFormControlGroup>` | The frame. Size every part at once with `size="sm"` or `size="lg"`. |
| `<CFormInput>` | The editable inside it. |
| `<CFormControlIcon>` | Decoration — an icon and nothing more. It ignores pointer events, and can sit in the group on its own or inside an action. |
| `<CFormControlText>` | Static text in the frame — a prefix or suffix like `https://`, `@` or `.00`. Inert and unselectable, so a click lands in the input and a drag over the field does not pick it up. |
| `<CFormControlAction>` | An interactive adornment: a real `<button>`. Give it an `aria-label`; it may hold a `<CFormControlIcon>`. |
| `<CFormControlCleaner>` | The action that clears the value — a real `<button>` with the clearing glyph built in (`ariaLabel` defaults to "Clear"). The field components render theirs automatically; in a custom group showing and hiding it is your job, since only you know whether the control holds a value. |

Icons take their size from the group, so they follow `size="sm"` and
`size="lg"` without being told. An icon inside an action follows the
button's colour, which is how a validation state reaches it.

```html
<template>
  <CFormControlGroup>
    <CFormInput type="text" value="Ada Lovelace" aria-label="Name" />
    <CFormControlAction aria-label="Clear">
      <CFormControlIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
          />
        </svg>
      </CFormControlIcon>
    </CFormControlAction>
  </CFormControlGroup>
</template>

<script setup>
import {
  CFormControlAction,
  CFormControlGroup,
  CFormControlIcon,
  CFormInput,
} from '@coreui/vue-pro'
</script>
```

## Clearing the value

`<CFormControlCleaner>` is the clearing action with the glyph built in. Render it only while the control holds a value:

```html
<template>
  <CFormControlGroup>
    <CFormInput v-model="value" type="text" aria-label="Name" />
    <CFormControlCleaner v-if="value.length > 0" @click="value = ''" />
  </CFormControlGroup>
</template>

<script setup>
import { ref } from 'vue'
import { CFormControlCleaner, CFormControlGroup, CFormInput } from '@coreui/vue-pro'
const value = ref('Ada Lovelace')
</script>
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
<template>
  <CFormControlGroup class="mb-4">
    <CFormControlText>https://</CFormControlText>
    <CFormInput type="text" placeholder="example.com" aria-label="Website address" />
  </CFormControlGroup>
  <CFormControlGroup class="mb-4">
    <CFormControlText>@</CFormControlText>
    <CFormInput type="text" placeholder="username" aria-label="Username" />
  </CFormControlGroup>
  <CFormControlGroup>
    <CFormControlText>$</CFormControlText>
    <CFormInput type="text" placeholder="0" aria-label="Amount" />
    <CFormControlText>.00</CFormControlText>
  </CFormControlGroup>
</template>

<script setup>
import { CFormControlGroup, CFormControlText, CFormInput } from '@coreui/vue-pro'
</script>
```

It combines with the other parts, and dims with the group when the field is
disabled:

```html
<template>
  <CFormControlGroup>
    <CFormControlIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
      </svg>
    </CFormControlIcon>
    <CFormControlText>USD</CFormControlText>
    <CFormInput type="text" value="1250" disabled aria-label="Amount" />
  </CFormControlGroup>
</template>

<script setup>
import { CFormControlGroup, CFormControlIcon, CFormControlText, CFormInput } from '@coreui/vue-pro'
</script>
```

## Sizing

Add `.form-control-sm` or `.form-control-lg` to the group — the standard
control sizing classes, no per-component variants.

```html
<template>
  <CFormControlGroup size="sm" class="mb-4">
    <CFormInput type="text" placeholder="Small" aria-label="Small" />
  </CFormControlGroup>
  <CFormControlGroup class="mb-4">
    <CFormInput type="text" placeholder="Default" aria-label="Default" />
  </CFormControlGroup>
  <CFormControlGroup size="lg">
    <CFormInput type="text" placeholder="Large" aria-label="Large" />
  </CFormControlGroup>
</template>

<script setup>
import { CFormControlGroup, CFormInput } from '@coreui/vue-pro'
</script>
```

## Validation

Put `.is-invalid` or `.is-valid` on the group. The state also reaches the frame
from the control inside it, so a component that validates its own field lights
the frame up without any extra wiring. The validation icon is suppressed inside
a group — an action usually occupies that corner — and the actions carry the
state colour instead.

```html
<template>
  <CFormControlGroup class="is-invalid">
    <CFormInput type="text" value="Not quite" aria-label="Invalid example" />
    <CFormControlAction aria-label="Clear">
      <CFormControlIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
          />
        </svg>
      </CFormControlIcon>
    </CFormControlAction>
  </CFormControlGroup>
  <div class="invalid-feedback d-block">Please pick a different value.</div>
</template>

<script setup>
import {
  CFormControlAction,
  CFormControlGroup,
  CFormControlIcon,
  CFormInput,
} from '@coreui/vue-pro'
</script>
```

## Disabled

Disable the control inside the group and the frame follows; use `.disabled` on
the group when there is no single control to disable.

```html
<template>
  <CFormControlGroup>
    <CFormInput type="text" value="Read only" aria-label="Disabled example" disabled />
    <CFormControlAction aria-label="Clear" disabled>
      <CFormControlIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
          />
        </svg>
      </CFormControlIcon>
    </CFormControlAction>
  </CFormControlGroup>
</template>

<script setup>
import {
  CFormControlAction,
  CFormControlGroup,
  CFormControlIcon,
  CFormInput,
} from '@coreui/vue-pro'
</script>
```

> **Not to be confused with [input group](https://coreui.io/vue/docs/forms/input-group/).** An input group
> joins *separate* controls and add-ons side by side — each keeps its own frame,
> and the seams between them are visible. A form control group is *one* control
> assembled from parts inside a single frame.

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CFormLabel for="formControlGroupField">Search</CFormLabel>
    <CFormControlGroup>
      <CFormControlIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path
            d="M479.6 399.716l-81.084-81.084-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2L400.4 479.6a56 56 0 1 0 79.2-79.884ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572-23.894-57.835 57.835 23.894 76.573 76.572a24.028 24.028 0 0 1 0 33.941Z"
          />
        </svg>
      </CFormControlIcon>
      <CFormInput id="formControlGroupField" type="search" placeholder="Search…" />
    </CFormControlGroup>
    <CFormText>Searches titles and body text.</CFormText>
  </CFormField>
</template>

<script setup>
import { CFormField, CFormInput, CFormLabel, CFormText } from '@coreui/vue'
import { CFormControlGroup, CFormControlIcon } from '@coreui/vue-pro'
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CFormControlGroup /&gt;](./api/#cformcontrolgroup)
- [&lt;CFormControlIcon /&gt;](./api/#cformcontrolicon)
- [&lt;CFormControlText /&gt;](./api/#cformcontroltext)
- [&lt;CFormControlAction /&gt;](./api/#cformcontrolaction)
- [&lt;CFormControlCleaner /&gt;](./api/#cformcontrolcleaner)
