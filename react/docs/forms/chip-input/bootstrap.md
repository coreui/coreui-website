# React Bootstrap Chip Input Component

> Learn how to build Bootstrap-styled token inputs with the React Chip Input component in CoreUI, including variants, sizes, selection, and form integration.

## Overview

The CoreUI **React Bootstrap Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more.

- Type values and press `Enter` or a separator to create chips.
- Chips can be removable and selectable.
- The input stays inline and grows as you type.
- Form integration is supported with a hidden input when `name` is provided.

## When to use Chip Input

Use the React Bootstrap Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **filterable multi-select** that integrates with standard HTML forms

## Basic example

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

## Variants

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

```html
import React from 'react'
import { CChipInput } from '@coreui/react'

export const ChipInputEmptyStateExample = () => {
  return <CChipInput name="tags" placeholder="Start typing tags..." />
}
```

## With label

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

## API reference

- [&lt;CChipInput /&gt;](../api/#cchipinput)
