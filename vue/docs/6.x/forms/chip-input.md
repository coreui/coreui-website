# Vue Chip Input Component

> Vue Chip Input component for CoreUI helps you create tag-like multi-value inputs for skills, categories, or recipients with keyboard support, selection, and form integration.

## Overview

The CoreUI **Vue Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press **Enter** or a separator to create chips
- Chips can be removable and selectable
- The input stays inline and grows as you type
- Form integration through a hidden field the browser validates, submitted when `name` is provided
- Full v-model support for reactive data binding

## When to use Chip Input

Use the Vue Chip Input component when you need:

- A **tag input** or **token field** for free-form multi-value entry
- An **email or recipient input** where users add multiple addresses
- A **skills or category selector** in forms
- A **filterable multi-select** that integrates with standard HTML forms

## Basic example

Use `CChipInput` to render a multi-value field with predefined chips and inline input.

```html
<template>
  <CChipInput v-model="tags" placeholder="Type and press Enter..." />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Vue.js', 'TypeScript', 'CoreUI'])
</script>
```

## Theme variants

Color the chips with [theme classes](https://coreui.io/vue/docs/customize/components/#theme-variants) to represent categories, status, or priority.

```html
<template>
  <CChipInput
    v-model="labels"
    :chip-class-name="(value) => variants[value.trim().toLowerCase()] || ''"
    name="issues"
    placeholder="Add label..."
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const variants = {
  feature: 'theme-primary',
  approved: 'theme-success',
  'needs review': 'theme-warning',
  blocking: 'theme-danger',
}

const labels = ref(['Feature', 'Approved', 'Needs review', 'Blocking'])
</script>
```

The example above assigns the class from the chip text with a `chipClassName` callback. Pass a string instead to give every chip the same class:

```html
<template>
  <CChipInput v-model="tags" chip-class-name="theme-info" placeholder="Add tagged items..." />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Tagged', 'Items'])
</script>
```

## With form field

Wrap the control in [`<CFormField>`](https://coreui.io/vue/docs/forms/field/) to lay it out with its label and description, and to get validation feedback in the right place.

```html
<template>
  <CFormField>
    <CChipInput
      id="techStackField"
      label="Tech stack"
      :model-value="['Vue', 'Vite']"
      name="techStack"
      placeholder="Add package..."
    />
    <CFormText>Press Enter or comma to add a value.</CFormText>
  </CFormField>
</template>

<script setup>
import { CChipInput, CFormField, CFormText } from '@coreui/vue'
</script>
```

## With label

Use the `label` prop for accessibility and better UX.

```html
<template>
  <CChipInput id="skills-input" v-model="skills" label="Skills" placeholder="Add skill..." />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const skills = ref(['Problem Solving', 'Teamwork', 'Communication'])
</script>
```

## Sizes

Use `size="sm"` and `size="lg"` to match surrounding form controls.

```html
<template>
  <div>
    <div class="mb-4">
      <CChipInput
        id="skillsInputSm"
        v-model="smallTags"
        label="Small"
        size="sm"
        placeholder="Add a small chip"
      />
    </div>

    <div class="mb-4">
      <CChipInput
        id="skillsInputDefault"
        v-model="defaultTags"
        label="Default"
        placeholder="Add a default chip"
      />
    </div>

    <div>
      <CChipInput
        id="skillsInputLg"
        v-model="largeTags"
        label="Large"
        size="lg"
        placeholder="Add a large chip"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const smallTags = ref(['Small chip'])
const defaultTags = ref(['Default chip'])
const largeTags = ref(['Large chip'])
</script>
```

## Separator

By default, chips are created when the user types a comma `,`. Change the separator using the `separator` prop.

```html
<template>
  <div>
    <CChipInput v-model="tags" separator=";" placeholder="Type and use ; to separate..." />
    <p class="mt-3 fg-2">
      <small>Use semicolon (;) as separator</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Item 1'])
</script>
```

### No separator

Set `separator` to empty string or `null` to disable automatic chip creation on typing. Users must press **Enter**.

```html
<template>
  <div>
    <CChipInput v-model="tags" :separator="null" placeholder="Type and press Enter..." />
    <p class="mt-3 fg-2">
      <small>Separator disabled - use Enter key to create chips</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Press Enter'])
</script>
```

## Maximum chips

Limit the number of chips with `maxChips`.

```html
<template>
  <div>
    <CChipInput v-model="tags" :max-chips="5" placeholder="Max 5 chips" />
    <p class="mt-3 fg-2">
      <small>{{ tags.length }}/5 chips - {{ 5 - tags.length }} remaining</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['One', 'Two', 'Three'])
</script>
```

## Create on blur

By default, typing a value and blurring the input creates a chip. Disable this with `createOnBlur`.

```html
<template>
  <div>
    <CChipInput v-model="tags" :create-on-blur="false" placeholder="Must press Enter" />
    <p class="mt-3 fg-2">
      <small>Blurring won't create a chip - you must press Enter</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(["Blur won't create"])
</script>
```

## Empty state

Start with just the input and let users add chips as they type.

```html
<template>
  <CChipInput name="tags" placeholder="Start typing tags..." />
</template>

<script setup>
import { CChipInput } from '@coreui/vue'
</script>
```

## Validation

`CChipInput` carries its chips in a hidden `<textarea>` the browser validates, so `required` stops the submit of an empty field and the browser shows its message over the component. The state shows on the frame and on the text input, and the message after the frame is linked to the text input. The messages come from the `feedback`, `feedback-invalid` and `feedback-valid` props, and the last two also from the slots of the same names.

```html
<template>
  <CForm class="row g-4" novalidate validate>
    <div class="col-md-6">
      <CChipInput
        id="validationTopics"
        feedback-invalid="Add at least one topic."
        label="Topics"
        name="topics"
        placeholder="Add a topic..."
        required
      />
    </div>
    <div class="col-md-6">
      <CChipInput
        id="validationRecipients"
        v-model:validation-state="recipientsState"
        feedback="bob@example is not a full address."
        label="Recipients"
        name="recipients"
      >
        <CChip>ana@example.com</CChip>
        <CChip>bob@example</CChip>
      </CChipInput>
    </div>
    <div class="col-12">
      <CButton color="primary" type="submit">Submit</CButton>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CButton, CChip, CChipInput, CForm } from '@coreui/vue'

const recipientsState = ref('invalid')
</script>
```

The state comes from three places, in this order:

- `validationState`: `'valid'`, `'invalid'` or a state you added to `$form-validation-states`. While it is set, the component draws it instead of what the browser reports. While it is `'invalid'`, the hidden field blocks the submit with the text of the linked message, or `Invalid value.` when there is none, unless the component is `disabled` or `readOnly`.
- A validation that reports the hidden field invalid: a submit, `checkValidity()` or `reportValidity()`, which [`CForm`](https://coreui.io/vue/docs/forms/validation/) and the stepper call as well. From then on the frame and the text input show it invalid whenever the value is invalid, until the form is reset, and the message after the frame shows.
- In a form with `validate`, the `:user-invalid` state of the hidden field, and with `validate="valid"` also its `:user-valid` state.

A state you give is a verdict on the chips it was given for. When the user adds or removes a chip, or the form is reset, the component emits `update:validationState` with `undefined`; bind it with `v-model:validation-state` to drop the state, as the second field above does. A change your code makes through `v-model` keeps it, and so does an action that changes nothing, such as entering a value the field already holds. A reset emits once it has run, so a state you set from a `reset` listener on the form gets the same event, and your handler decides whether to drop it. A native reset of the form puts back the chips given by the `CChip` children, and leaves a bound `v-model` to you.

## Disabled

Disable the component to prevent interaction.

```html
<template>
  <CChipInput disabled :model-value="['Read', 'Only', 'Disabled']" />
</template>

<script setup>
import { CChipInput } from '@coreui/vue'
</script>
```

## Readonly

Use `readOnly` to display chips without allowing changes.

```html
<template>
  <CChipInput read-only :model-value="['Read', 'Only', 'Mode']" />
</template>

<script setup>
import { CChipInput } from '@coreui/vue'
</script>
```

## Selectable chips

Enable chip selection with the `selectable` prop. Use the `@select` event to track selected chips.

```html
<template>
  <div>
    <CChipInput
      v-model="items"
      selectable
      placeholder="Click chips to select them..."
      @select="handleSelect"
    />

    <p v-if="selectedItems.length" class="mt-4 fg-2 small">
      Selected: {{ selectedItems.join(', ') }}
    </p>
    <p v-else class="mt-4 fg-2 small">No chips selected</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const items = ref(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'])
const selectedItems = ref([])

const handleSelect = (selected) => {
  selectedItems.value = selected
}
</script>
```

## Form integration

The chips travel in a hidden `<textarea>`, separated by commas, which takes part in standard form submission once `name` is provided.

```html
<template>
  <CForm @submit.prevent="handleSubmit">
    <CChipInput v-model="tags" name="tags" label="Tags" placeholder="Add tags..." />
    <CButton type="submit" theme="primary" class="mt-3">Submit</CButton>
    <div v-if="submitted" class="mt-3 fg-success">
      <small>Form submitted with tags: {{ submittedTags }}</small>
    </div>
  </CForm>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput, CForm, CButton } from '@coreui/vue'

const tags = ref(['Tag1', 'Tag2'])
const submitted = ref(false)
const submittedTags = ref('')

const handleSubmit = () => {
  submitted.value = true
  submittedTags.value = tags.value.join(', ')
  setTimeout(() => {
    submitted.value = false
  }, 3000)
}
</script>
```

## Events

The component emits several events for tracking changes:

- `@update:modelValue` - Main v-model event with updated values array
- `@change` - Fires when values change
- `@add` - Fires when a chip is added (receives the new value)
- `@remove` - Fires when a chip is removed (receives the removed value)
- `@input` - Fires when the text input value changes
- `@select` - Fires when selected chips change (when `selectable` is true)
- `@update:validationState` - Fires when the validation state drops, for `v-model:validation-state`

```html
<template>
  <div>
    <CChipInput
      v-model="tags"
      placeholder="Type to trigger events..."
      @add="onAdd"
      @remove="onRemove"
    />

    <div v-if="events.length" class="mt-4 p-4 bg-light rounded">
      <h6>Event Log:</h6>
      <ul class="list-unstyled small mb-0">
        <li v-for="(event, index) in events.slice(-5)" :key="index">
          <span class="badge bg-secondary me-3">{{ event.type }}</span>
          {{ event.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Demo', 'Events'])
const events = ref([])

const onAdd = (value) => {
  events.value.push({ type: 'add', value })
}

const onRemove = (value) => {
  events.value.push({ type: 'remove', value })
}
</script>
```

## Keyboard behavior

The Chip Input component supports comprehensive keyboard interaction:

### In the text input

- **Enter**: Create a chip from the current input value
- **Backspace** (when input is empty): Focus the last chip
- **Delete** (when input is empty): Focus the last chip
- **ArrowLeft** (at start of input): Focus the last chip
- **Escape**: Clear the input and blur

### On a focused chip

- **Backspace** / **Delete**: Remove the chip
- **ArrowLeft** / **ArrowRight**: Navigate between chips
- **Home** / **End**: Jump to first/last chip
- **Enter** / **Space** (if selectable): Toggle chip selection
- **Shift** + **ArrowLeft** / **ArrowRight** (if selectable, multiple): Move focus and add the chip it lands on to the selection
- **Shift** + **Home** / **End** (if selectable, multiple): Extend the selection to the first or last chip
- **Ctrl** / **Cmd** + **A** (if selectable, multiple): Select every chip

## Usage with v-model

For reactive data binding, use `v-model`. A native reset of the form puts back the chips given by an initial `model-value` or, without one, by the `CChip` children: with no `model-value` at all, it sets those chips and emits `change`; with one, it asks for the value it started with through `update:modelValue` and `change` and shows your chips until you take it:

```html
<template>
  <div>
    <CChipInput v-model="tags" placeholder="Type and press Enter..." />
    <div class="mt-4 fg-2">Current values: {{ tags.join(', ') || '(empty)' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Vue', 'React', 'Angular'])
</script>
```

### Default values

For initial values without a reactive binding, pass `model-value` one-way:

```html
<template>
  <div>
    <CChipInput
      :model-value="['HTML', 'CSS', 'JavaScript']"
      placeholder="Add more..."
      @change="handleChange"
    />
    <div class="mt-4 fg-2">Last change: {{ lastChange || 'No changes yet' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const lastChange = ref('')

const handleChange = (values) => {
  lastChange.value = values.join(', ')
}
</script>
```

## Paste support

Users can paste multiple values at once. If the pasted text contains the separator character, it's automatically split into multiple chips.

```html
<template>
  <div>
    <CChipInput v-model="tags" placeholder="Try pasting: apple,banana,cherry" />
    <p class="mt-3 fg-2">
      <small>Paste comma-separated values to create multiple chips at once</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref([])
</script>
```

## Examples with real-world scenarios

### Email recipients

```html
<template>
  <CChipInput v-model="recipients" label="To:" placeholder="Add recipients..." separator=";" />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const recipients = ref(['user@example.com'])
</script>
```

### Skills selector

```html
<template>
  <CChipInput
    v-model="skills"
    label="Your skills"
    :max-chips="10"
    placeholder="Add your skills..."
    :chip-class-name="'theme-primary'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const skills = ref(['JavaScript', 'Vue.js', 'TypeScript'])
</script>
```

### Product tags

```html
<template>
  <CChipInput
    v-model="tags"
    label="Product tags"
    placeholder="Add tags..."
    size="sm"
    :chip-class-name="'theme-info'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['electronics', 'gadgets', 'tech'])
</script>
```

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CChipInput /&gt;](./api/#cchipinput)
