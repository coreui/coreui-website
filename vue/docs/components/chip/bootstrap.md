# Vue Bootstrap Chip Component

> Learn how to use CoreUI’s Vue Chip component with Bootstrap styles for flexible, framework-consistent UI.

## Overview

The CoreUI **Vue Chip component** lets you build compact, interactive UI elements for labels, tags, filters, and selections. Chips support icons, avatars, removal, keyboard navigation, and theme-aware styling.

Chips are similar to badges, but they have a single size and more defined visual styles useful for indicating state and selection.

- Chips are statically sized and do not scale with the parent element by default.
- Chips can have icons, avatars, and remove buttons.
- Chips can be active or disabled.
- Chips automatically gain focus when they are `selectable` or `removable`.
- Chips support keyboard navigation and selection in their container.

See examples of all of this in action below.

## When to use chips

Use the Vue Chip component when you need:

- Multi-select filters in search or form interfaces
- Removable tags for selected items or applied filters
- Keyboard-navigable selection groups
- Compact status indicators with icon or avatar support

## Basic chips

Use `CChip` for standalone chips.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip>Default</CChip>
    <CChip color="primary">Primary</CChip>
    <CChip color="secondary">Secondary</CChip>
    <CChip color="success">Success</CChip>
    <CChip color="danger">Danger</CChip>
    <CChip color="warning">Warning</CChip>
    <CChip color="info">Info</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
```

## Outline chips

Use `variant="outline"` to remove all background images and colors on any chip.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip variant="outline">Default</CChip>
    <CChip variant="outline" color="primary">Primary</CChip>
    <CChip variant="outline" color="secondary">Secondary</CChip>
    <CChip variant="outline" color="success">Success</CChip>
    <CChip variant="outline" color="danger">Danger</CChip>
    <CChip variant="outline" color="warning">Warning</CChip>
    <CChip variant="outline" color="info">Info</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
```

## Chips with icons

Wrap `CIcon` from `@coreui/icons-vue` in a `<span class="chip-icon">` to render a leading icon.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip color="primary">
      <span class="chip-icon">
        <CIcon :icon="cilUser" />
      </span>
      User
    </CChip>
    <CChip color="success">
      <span class="chip-icon">
        <CIcon :icon="cilCheckCircle" />
      </span>
      Verified
    </CChip>
    <CChip color="danger">
      <span class="chip-icon">
        <CIcon :icon="cilXCircle" />
      </span>
      Error
    </CChip>
    <CChip color="warning">
      <span class="chip-icon">
        <CIcon :icon="cilWarning" />
      </span>
      Warning
    </CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilUser, cilCheckCircle, cilXCircle, cilWarning } from '@coreui/icons'
</script>
```

## Chips with avatars

Use `.chip-img` for an image-like avatar or combine `CChip` with `CAvatar`.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip color="primary">
      <CAvatar color="primary" text-color="white">J</CAvatar>
      John Doe
    </CChip>
    <CChip color="secondary">
      <CAvatar src="/assets/img/avatars/1.jpg" />
      Jane Smith
    </CChip>
    <CChip color="success">
      <CAvatar color="success" text-color="white">A</CAvatar>
      Alice Brown
    </CChip>
  </div>
</template>

<script setup>
import { CChip, CAvatar } from '@coreui/vue'
</script>
```

## Variants

Use `color` to apply theme color variants to your chips. Chips are subtle by default as this allows for a clear, themed active state.

```html
<template>
  <div class="d-flex flex-wrap gap-1">
    <template v-for="color in colors" :key="color">
      <CChip :color="color" clickable>{{ label(color) }} chip</CChip>
      <CChip :color="color" active>{{ label(color) }} chip</CChip>
    </template>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
const label = (color) => color.charAt(0).toUpperCase() + color.slice(1)
</script>
```

Combine `variant="outline"` with a `color` for outline color variants.

```html
<template>
  <div class="d-flex flex-wrap gap-1">
    <template v-for="color in colors" :key="color">
      <CChip variant="outline" :color="color" clickable>{{ label(color) }} chip</CChip>
      <CChip variant="outline" :color="color" active>{{ label(color) }} chip</CChip>
    </template>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'

const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
const label = (color) => color.charAt(0).toUpperCase() + color.slice(1)
</script>
```

## Sizes

Use `size="sm"` or `size="lg"` for different sizes.

```html
<template>
  <div class="d-flex gap-2 align-items-center flex-wrap">
    <CChip size="sm" color="primary">Small</CChip>
    <CChip color="primary">Default</CChip>
    <CChip size="lg" color="primary">Large</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
```

## Active state

Add `active` to make chips use the solid appearance. This is useful for toggle-style chip selections.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip color="primary">Inactive</CChip>
    <CChip color="primary" active>Active</CChip>
    <CChip variant="outline" color="primary">Inactive Outline</CChip>
    <CChip variant="outline" color="primary" active>Active Outline</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
```

## Interactive chips

### Clickable

Enable interactive hover styling and pointer cursor with the `clickable` prop.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip clickable color="primary">Click me</CChip>
    <CChip clickable color="secondary">Hover effect</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
```

### Selectable

Use `selectable` to enable selection behavior. Chips become keyboard-navigable and toggle on click or Enter/Space.

```html
<template>
  <div>
    <div class="d-flex gap-2 flex-wrap mb-3">
      <CChip
        v-for="(chip, index) in chips"
        :key="index"
        selectable
        :selected="chip.selected"
        color="primary"
        @selected-change="(selected) => (chip.selected = selected)"
      >
        {{ chip.label }}
      </CChip>
    </div>

    <p class="text-muted small">Selected: {{ selectedChips.join(', ') || 'None' }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CChip } from '@coreui/vue'

const chips = ref([
  { label: 'Option 1', selected: false },
  { label: 'Option 2', selected: false },
  { label: 'Option 3', selected: false },
  { label: 'Option 4', selected: false },
])

const selectedChips = computed(() =>
  chips.value.filter((chip) => chip.selected).map((chip) => chip.label)
)
</script>
```

## Remove button

If `removable` is enabled, the remove button is rendered automatically.

```html
<template>
  <div>
    <div class="d-flex gap-2 flex-wrap">
      <CChip
        v-for="(tag, index) in tags"
        :key="index"
        removable
        color="primary"
        @remove="removeTag(index)"
      >
        {{ tag }}
      </CChip>
    </div>

    <CButton v-if="tags.length === 0" size="sm" color="secondary" class="mt-3" @click="resetTags">
      Reset Tags
    </CButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CChip, CButton } from '@coreui/vue'

const tags = ref(['Vue.js', 'TypeScript', 'CoreUI', 'Components'])

const removeTag = (index) => {
  tags.value.splice(index, 1)
}

const resetTags = () => {
  tags.value = ['Vue.js', 'TypeScript', 'CoreUI', 'Components']
}
</script>
```

### Custom remove icon

Replace the default remove icon with a custom icon.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip removable color="primary">
      <template #removeIcon>
        <CIcon :icon="cilTrash" />
      </template>
      Custom icon
    </CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import { cilTrash } from '@coreui/icons'
</script>
```

## Disabled state

Disable chips to prevent interaction.

```html
<template>
  <div class="d-flex gap-2 flex-wrap">
    <CChip disabled>Disabled</CChip>
    <CChip disabled color="primary">Disabled Primary</CChip>
    <CChip disabled selectable color="success">Disabled Selectable</CChip>
    <CChip disabled removable color="danger">Disabled Removable</CChip>
  </div>
</template>

<script setup>
import { CChip } from '@coreui/vue'
</script>
```

## Keyboard behavior

A standalone chip handles its own selection and removal from the keyboard when it is `selectable` and/or `removable`. Roving focus between chips (arrow keys, <kbd>Home</kbd>/<kbd>End</kbd>) is provided by the parent [Chip Set](https://coreui.io/vue/docs/components/chip-set/) container.

### When a chip is focused

| Key | Action |
| --- | --- |
| `Enter` / `Space` | Toggle selection (only when `selectable` is enabled) |
| `Backspace` / `Delete` | Close chip when `removable` is enabled |

When chips are grouped in a [Chip Set](https://coreui.io/vue/docs/components/chip-set/), the arrow keys, <kbd>Home</kbd>, and <kbd>End</kbd> move focus between chips, and focus moves to a neighboring chip after one is removed.

### Mouse interaction

| Action | Effect |
| --- | --- |
| Click chip | Toggle selection (only when `selectable` is enabled) |
| Click remove button | Close chip (only when `removable` is enabled) |
