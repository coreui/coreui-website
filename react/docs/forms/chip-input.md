# React Chip Input Component

> React Chip Input component for CoreUI helps you create tag-like multi-value inputs for skills, categories, or recipients with keyboard support, selection, and form integration.

## Overview

The CoreUI **React Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press `Enter` or a separator to create chips.
- Chips can be removable and selectable.
- The input stays inline and grows as you type.
- Form integration is supported with a hidden input when `name` is provided.

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

> Note: `CChipInput` renders the inline text input automatically. When `name` is provided, it also renders a hidden input so chip values can participate in standard form submission.

## Variants

Use contextual chip classes inside React Chip Input to represent categories, status, or priority.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

const variants: Record<string, string> = {
  feature: 'chip-primary',
  approved: 'chip-success',
  'needs review': 'chip-warning',
  blocking: 'chip-danger',
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
          approved: 'chip-success',
          blocking: 'chip-danger',
          feature: 'chip-primary',
        }
        return variants[value.trim().toLowerCase()] || 'chip-secondary'
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
      <div className="mb-3">
        <CChipInput
          id="skillsInputSm"
          label="Small"
          size="sm"
          defaultValue={['HTML']}
          placeholder="Add small tag..."
        />
      </div>

      <div className="mb-3">
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

## Empty state

Start with just the input and let users add chips as they type.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputEmptyStateExample = () => {
  return <CChipInput name="tags" placeholder="Start typing tags..." />
}
```

## With label

Use a standard form label for accessibility.

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputWithLabelExample = () => {
  return (
    <div className="mb-3">
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
      <p className="mt-2 mb-0 small text-body-secondary">
        Selected: {selected.length > 0 ? selected.join(', ') : 'None'}
      </p>
    </>
  )
}
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChipInput /&gt;](./api/#cchipinput)
