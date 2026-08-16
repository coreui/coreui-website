# Vue Bootstrap Chip Input Component

> Learn how to use CoreUI’s Vue Chip Input component with Bootstrap styles for flexible, framework-consistent UI.

## Overview

The CoreUI **Vue Chip Input component** lets users enter multiple values as chips inside a single field. Use it as a tag input, multi-value selector, or token field for skills, categories, email recipients, and more. The chip input component supports keyboard-friendly entry, chip removal, and optional selection for bulk actions.

- Type values and press **Enter** or a separator to create chips
- Chips can be removable and selectable
- The input stays inline and grows as you type
- Form integration is supported with a hidden input when `name` is provided
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
    <div class="mb-3">
      <CChipInput
        id="skillsInputSm"
        v-model="smallTags"
        label="Small"
        size="sm"
        placeholder="Add a small chip"
      />
    </div>

    <div class="mb-3">
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

## Color variants

Use `chipClassName` to apply contextual chip colors based on chip text.

```html
<template>
  <div>
    <CChipInput
      v-model="colorTags"
      :chip-class-name="(value) => `chip-${value}`"
      placeholder="Add color name (primary, secondary, etc.)"
    />
    <p class="mt-2 text-muted">
      <small>Try adding: primary, secondary, success, danger, warning, info</small>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const colorTags = ref(['primary', 'secondary', 'success', 'danger'])
</script>
```

### Static chip class

Apply a single class to all chips.

```html
<template>
  <CChipInput v-model="tags" chip-class-name="chip-info" placeholder="Add tagged items..." />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Tagged', 'Items'])
</script>
```

## Separator

By default, chips are created when the user types a comma `,`. Change the separator using the `separator` prop.

```html
<template>
  <div>
    <CChipInput v-model="tags" separator=";" placeholder="Type and use ; to separate..." />
    <p class="mt-2 text-muted">
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
    <p class="mt-2 text-muted">
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
    <p class="mt-2 text-muted">
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
    <p class="mt-2 text-muted">
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

    <p v-if="selectedItems.length" class="mt-3 text-muted small">
      Selected: {{ selectedItems.join(', ') }}
    </p>
    <p v-else class="mt-3 text-muted small">No chips selected</p>
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

When `name` is provided, a hidden input is rendered for standard form submission.

```html
<template>
  <CForm @submit.prevent="handleSubmit">
    <CChipInput v-model="tags" name="tags" label="Tags" placeholder="Add tags..." />
    <CButton type="submit" color="primary" class="mt-2">Submit</CButton>
    <div v-if="submitted" class="mt-2 text-success">
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

```html
<template>
  <div>
    <CChipInput
      v-model="tags"
      placeholder="Type to trigger events..."
      @add="onAdd"
      @remove="onRemove"
    />

    <div v-if="events.length" class="mt-3 p-3 bg-light rounded">
      <h6>Event Log:</h6>
      <ul class="list-unstyled small mb-0">
        <li v-for="(event, index) in events.slice(-5)" :key="index">
          <span class="badge bg-secondary me-2">{{ event.type }}</span>
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

## Usage with v-model

For reactive data binding, use `v-model`:

```html
<template>
  <div>
    <CChipInput v-model="tags" placeholder="Type and press Enter..." />
    <div class="mt-3 text-body-secondary">Current values: {{ tags.join(', ') || '(empty)' }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['Vue', 'React', 'Angular'])
</script>
```

### Default values

For initial values without reactive binding, use `defaultValue`:

```html
<template>
  <div>
    <CChipInput
      :default-value="['HTML', 'CSS', 'JavaScript']"
      placeholder="Add more..."
      @change="handleChange"
    />
    <div class="mt-3 text-body-secondary">Last change: {{ lastChange || 'No changes yet' }}</div>
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
    <p class="mt-2 text-muted">
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
    :chip-class-name="'chip-primary'"
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
    :chip-class-name="'chip-info'"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CChipInput } from '@coreui/vue'

const tags = ref(['electronics', 'gadgets', 'tech'])
</script>
```
