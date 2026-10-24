# React Chip Input Component

> React Chip Input component for CoreUI helps you create tag-like multi-value inputs for skills, categories, or recipients with keyboard support, selection, and form integration.

## Overview

The CoreUI **React Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press `Enter` or a separator to create chips.
- Chips can be removable and selectable.
- The input stays inline and grows as you type.
- Form integration through a hidden field the browser validates, submitted when `name` is provided.

## When to use Chip Input

Use the React Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **filterable multi-select** that integrates with standard HTML forms

## Basic example

Use `CChipInput` to render a multi-value field with predefined chips and inline input.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputExample = () => {
  return (
    <CChipInput
      id="skillsInputBasic"
      label="Skills:"
      defaultValue={['JavaScript', 'TypeScript', 'Accessibility']}
      name="chipInputBasicExample"
      placeholder="Add a skill..."
    />
  )
}
```

> Note: `CChipInput` renders the inline text input automatically, and a hidden `<textarea>` that carries the chip values separated by commas. When `name` is provided, that field takes part in standard form submission.

## Theme variants

Color the chips with [theme classes](https://coreui.io/react/docs/customize/components/#theme-variants) to represent categories, status, or priority.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

const variants: Record<string, string> = {
  feature: 'theme-primary',
  approved: 'theme-success',
  'needs review': 'theme-warning',
  blocking: 'theme-danger',
}

export const ChipInputVariantsExample = () => {
  return (
    <CChipInput
      defaultValue={['Feature', 'Approved', 'Needs review', 'Blocking']}
      chipClassName={(value) => variants[value.trim().toLowerCase()] || ''}
      name="issues"
      placeholder="Add label..."
    />
  )
}
```

In the example below, chip color is assigned dynamically based on the chip text using the `chipClassName` callback.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputClassNameExample = () => {
  return (
    <CChipInput
      defaultValue={['Feature', 'Blocking', 'Approved']}
      chipClassName={(value) => {
        const variants: Record<string, string> = {
          approved: 'theme-success',
          blocking: 'theme-danger',
          feature: 'theme-primary',
        }
        return variants[value.trim().toLowerCase()] || 'theme-secondary'
      }}
      placeholder="Type and press Enter"
    />
  )
}
```

## Sizes

Use `size="sm"` and `size="lg"` to match surrounding form controls. Default size is provided without a size modifier.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputSizesExample = () => {
  return (
    <>
      <div className="mb-4">
        <CChipInput
          id="skillsInputSm"
          label="Small"
          size="sm"
          defaultValue={['HTML']}
          placeholder="Add small tag..."
        />
      </div>

      <div className="mb-4">
        <CChipInput
          id="skillsInputMd"
          label="Default"
          defaultValue={['JavaScript']}
          placeholder="Add default tag..."
        />
      </div>

      <div>
        <CChipInput
          id="skillsInputLg"
          label="Large"
          size="lg"
          defaultValue={['TypeScript']}
          placeholder="Add large tag..."
        />
      </div>
    </>
  )
}
```

## Separator

By default, chips are created when the user types a comma `,`. Change the separator with the `separator` property.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react-pro'

export const ChipInputSeparatorExample = () => {
  const [tags, setTags] = useState(['Item 1'])

  return (
    <>
      <CChipInput
        value={tags}
        onChange={setTags}
        separator=";"
        placeholder="Type and use ; to separate..."
      />
      <p className="fg-2 mt-3">
        <small>Use semicolon (;) as separator</small>
      </p>
    </>
  )
}
```

### No separator

Set `separator` to an empty string or `null` to stop chips being created as the user types. They must press **Enter** instead.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react-pro'

export const ChipInputNoSeparatorExample = () => {
  const [tags, setTags] = useState(['Item 1'])

  return (
    <>
      <CChipInput
        value={tags}
        onChange={setTags}
        separator={null}
        placeholder="Type and press Enter..."
      />
      <p className="fg-2 mt-3">
        <small>Separator disabled — use the Enter key to create chips</small>
      </p>
    </>
  )
}
```

## Maximum chips

Limit how many chips can be added with `maxChips`.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react-pro'

export const ChipInputMaxChipsExample = () => {
  const [tags, setTags] = useState(['Item 1'])

  return (
    <>
      <CChipInput value={tags} onChange={setTags} maxChips={5} placeholder="Max 5 chips" />
      <p className="fg-2 mt-3">
        <small>
          {tags.length}/5 chips — {5 - tags.length} remaining
        </small>
      </p>
    </>
  )
}
```

## Create on blur

Typing a value and leaving the input creates a chip. Set `createOnBlur` to `false` to require **Enter**.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react-pro'

export const ChipInputCreateOnBlurExample = () => {
  const [tags, setTags] = useState(['Item 1'])

  return (
    <>
      <CChipInput
        value={tags}
        onChange={setTags}
        createOnBlur={false}
        placeholder="Must press Enter"
      />
      <p className="fg-2 mt-3">
        <small>Blurring will not create a chip — you must press Enter</small>
      </p>
    </>
  )
}
```

## Empty state

Start with just the input and let users add chips as they type.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputEmptyStateExample = () => {
  return <CChipInput name="tags" placeholder="Start typing tags..." />
}
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/react/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place. The label goes inside the container as `.chip-input-label` — pass it through the `label` property, and the component points it at the text input it builds.

```html
import React from 'react'
import { CChipInput, CFormField, CFormText } from '@coreui/react'

export const ChipInputFormFieldExample = () => {
  return (
    <CFormField>
      <CChipInput
        id="techStackField"
        label="Tech stack"
        defaultValue={['Vue', 'Vite']}
        name="techStack"
        placeholder="Add package..."
      />
      <CFormText>Press Enter or comma to add a value.</CFormText>
    </CFormField>
  )
}
```

## With label

Use a standard form label for accessibility.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputWithLabelExample = () => {
  return (
    <div className="mb-4">
      <label className="form-label" htmlFor="techStackInput">
        Tech stack
      </label>
      <CChipInput
        id="techStackInput"
        name="techStack"
        defaultValue={['Vue', 'Vite']}
        placeholder="Add package..."
      />
      <div className="form-text">Press Enter or comma to add a value.</div>
    </div>
  )
}
```

## Validation

`CChipInput` carries its chips in a hidden `<textarea>` the browser validates, so `required` stops the submit of an empty field and the browser shows its message over the component. The state shows on the frame and on the text input, and the message after the frame is linked to the text input.

```html
import React, { useState } from 'react'
import { CButton, CChipInput, CForm } from '@coreui/react'

export const ChipInputValidationExample = () => {
  const [recipientsState, setRecipientsState] = useState<string | undefined>('invalid')

  return (
    <CForm className="row g-4" noValidate validate>
      <div className="col-md-6">
        <CChipInput
          feedbackInvalid="Add at least one topic."
          id="validationTopics"
          label="Topics"
          name="topics"
          placeholder="Add a topic..."
          required
        />
      </div>
      <div className="col-md-6">
        <CChipInput
          defaultValue={['ana@example.com', 'bob@example']}
          feedback="bob@example is not a full address."
          id="validationRecipients"
          label="Recipients"
          name="recipients"
          onValidationStateChange={setRecipientsState}
          validationState={recipientsState}
        />
      </div>
      <div className="col-12">
        <CButton color="primary" type="submit">
          Submit
        </CButton>
      </div>
    </CForm>
  )
}
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the hidden field blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled` or `readOnly`.
- A validation that reports the hidden field invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/react/docs/forms/validation/) and the stepper call as well. From then on the frame and the text input show it invalid whenever the value is invalid, until the form is reset, and the message after the frame shows.
- In a form with `validate`, the `:user-invalid` state of the hidden field, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the chips it was given for. When the user adds or removes a chip, or the form is reset, the component calls `onValidationStateChange(undefined)`; pass your state setter there to drop the state, as the second field above does. A change your code makes through `value` keeps it, and so does an action that changes nothing, such as entering a value the field already holds. A reset asks once it has run, so a state you set from a `reset` listener on the form gets the same call, and your handler decides whether to drop it. A native reset of the form puts back the chips given by `defaultValue` or the `CChip` children, and leaves a controlled `value` to you.

## Disabled

Set disabled state on the component to make the input and chips non-interactive. Combine it with `removable={false}` for disabled, non-removable chips.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputDisabledExample = () => {
  return (
    <CChipInput
      defaultValue={['Read only', 'Locked']}
      disabled
      removable={false}
      placeholder="Input disabled"
    />
  )
}
```

## Readonly

Use readonly state when chips should stay visible and focusable, but values must not change.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputReadonlyExample = () => {
  return (
    <CChipInput
      defaultValue={['JavaScript', 'TypeScript']}
      readOnly
      placeholder="Read-only values"
    />
  )
}
```

## Selectable chips

Enable selection for chips managed by Chip Input. In this example, `onSelect` updates a live list of selected values below the field.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputSelectableExample = () => {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <>
      <CChipInput
        defaultValue={['Design', 'Backend', 'QA', 'DevOps']}
        selectable
        onSelect={setSelected}
        placeholder="Select chips"
      />
      <p className="mt-3 mb-0 small fg-2">
        Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
      </p>
    </>
  )
}
```

## Paste support

Several values can be pasted at once. If the pasted text contains the separator, it is split into one chip per value.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react-pro'

export const ChipInputPasteExample = () => {
  const [tags, setTags] = useState<string[]>([])

  return (
    <>
      <CChipInput value={tags} onChange={setTags} placeholder="Try pasting: apple,banana,cherry" />
      <p className="fg-2 mt-3">
        <small>Paste comma-separated values to create multiple chips at once</small>
      </p>
    </>
  )
}
```

## Controlled and uncontrolled

The chip list works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the chips |
| --- | --- | --- |
| Uncontrolled | `defaultValue`, or the `CChip` children | the chip input, from that starting point |
| Controlled | `value` | your component |

`onChange` fires in **both** modes with the new list of values — so you can watch the chips without taking them over. A native reset of the form puts back the chips the input started with: uncontrolled, it sets them and calls `onChange` when that changes the chips; controlled, it asks for the first `value` through `onChange` and shows your `value` until you take it.

### Uncontrolled

Seed the list with `defaultValue`, as the basic example does, or with `CChip` children, and let the chip input manage it.

```jsx
<CChipInput defaultValue={['React', 'Vue']} />
```

### Controlled

Pass `value` and the chips render exactly what you pass — adding or removing a chip only fires `onChange`. Feed the change back, or nothing moves.

```html
import React, { useState } from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputControlledExample = () => {
  const [values, setValues] = useState<string[]>(['React'])

  return (
    <>
      <CChipInput value={values} onChange={setValues} placeholder="Controlled chip input" />
      <p className="mt-3 mb-0 small fg-2">Current value: {values.join(', ') || '-'}</p>
    </>
  )
}
```

Use it when the values belong to something else: form state, a query you persist, or a list shared with another control.

## Accessibility

The React Chip Input component follows WAI-ARIA patterns to ensure the chip input is fully usable with keyboards and assistive technologies.

- Associate a `<label>` with the ghost input for screen readers.
- Chips are focusable and keyboard navigable.
- Each remove button the component creates is named with `ariaRemoveLabel` and the chip's value, `Remove <value>` by default. Put `{label}` where the value goes, or pass a function of the value for another word order.
- Adding and removing chips is announced through [`announce()`](https://coreui.io/react/docs/accessibility/screen-readers/#announcing-messages) in the live region of the page, or of the modal dialog around the set, one message per update: the values the set did not hold before, or else the values it no longer holds, joined with commas as in `Vue, Svelte added`, and nothing while the set is hidden; customize the wording with the `ariaAddedAnnouncement` and `ariaRemovedAnnouncement` props. A function in place of the word receives the values and returns the whole message, so a page can put the word first, agree it with the number of chips or give a count for a long list, as in `(values) => values.length > 3 ? values.length + ' chips added' : values.join(', ') + ' added'`.
- The container is a generic element, so `disabled` and `readOnly` are carried by the inner input rather than stamped on it.
- Use a descriptive `aria-label` or `<label>` on the chip input container to communicate its purpose (e.g., "Add skills" or "Recipients").

The full treatment is on the [accessibility](./accessibility/) page: semantic structure, ARIA attributes, focus management, visual indicators and keyboard support.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChipInput /&gt;](./api/#cchipinput)
