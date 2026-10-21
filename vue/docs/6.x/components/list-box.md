# Vue List Box Component

> A keyboard-driven list of values built on the ARIA listbox pattern: single, multiple or no selection, sections, descriptions, links, an empty state and an aria-activedescendant mode that keeps the focus in your own input.

## Overview

_Added in 6.0.0._

A list box presents a set of values and lets the user pick from them. `<CListBox>` renders a `.list-box` container with the `.list-box-options` list inside it, and owns the roles, the selection state and the keyboard: it writes `role="listbox"` on the options and `role="option"` on each of them, keeps `aria-selected` in step with the selection, moves a roving `tabindex` as the highlight moves, and scrolls the highlighted option into view. Before the highlight has moved that `tabindex` sits on the first navigable entry, which is a selectable section label when one comes first, so <kbd>Tab</kbd> enters the list where the arrows would. The `header` slot sits above the options, inside the container — that is where `<CListBoxHeader>` goes.

```html
<template>
  <CListBox aria-label="Sandwich" style="max-width: 20rem">
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
    <CListBoxOption value="cheese">Cheese</CListBoxOption>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

Every option carries its value in `value`; an option without one is worth its text. Values are what the events report, so an option can be hidden or re-rendered without disturbing the selection.

### When to use

<div class="table-responsive">

| Component | Use it for |
| --- | --- |
| List box | Choosing a value — the choice stays on screen and is reported back to you. |
| [Menu](https://coreui.io/vue/docs/components/menu/) | Running an action — the surface opens, something happens, it closes. |
| [List group](https://coreui.io/vue/docs/components/list-group/) | Displaying content — a list of things to read, not to pick from. |

</div>

A list box is also the primitive the picker components are built from, so its markup and classes carry over to them.

### Options from data

Pass `items` and the default slot becomes the option template, called once per entry with `item` and `index`. Without a slot each entry renders as a `<CListBoxOption>` showing its `label`.

```html
<template>
  <CListBox :items="items" aria-label="Sandwich" style="max-width: 20rem">
    <template #default="{ item }">
      <CListBoxOption :key="item.value" :description="item.description" :value="item.value">
        {{ item.label }}
      </CListBoxOption>
    </template>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption } from '@coreui/vue-pro'

const items = [
  { description: 'Crisp and green', label: 'Lettuce', value: 'lettuce' },
  { description: 'Ripe', label: 'Tomato', value: 'tomato' },
  { description: 'Sliced thin', label: 'Onion', value: 'onion' },
]
</script>
```

## Selection

`selectionMode` decides what a click and <kbd>Space</kbd> do. In `single` (the default) one option is selected at a time and picking another replaces it. Pass `selected` to seed the selection and let the list box manage it from there, or bind `v-model:selected` to drive it from your own state; `@selected-change` fires either way with the new values.

```html
<template>
  <CListBox v-model:selected="selected" aria-label="Single" style="max-width: 20rem">
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
  </CListBox>
  <p class="fg-2">Selected: {{ selected.length > 0 ? selected.join(', ') : 'nothing' }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { CListBox, CListBoxOption } from '@coreui/vue-pro'

const selected = ref(['tomato'])
</script>
```

In `multiple` a click toggles one option, <kbd>Shift</kbd> extends the selection from the last one, <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> on macOS) adds one without clearing the rest, and <kbd>Ctrl</kbd> + <kbd>A</kbd> takes everything. `aria-multiselectable` is written for you.

```html
<template>
  <CListBox
    v-model:selected="selected"
    aria-label="Multiple"
    selection-mode="multiple"
    style="max-width: 20rem"
  >
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
    <CListBoxOption value="cheese">Cheese</CListBoxOption>
  </CListBox>
  <p class="fg-2">Selected: {{ selected.length > 0 ? selected.join(', ') : 'nothing' }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { CListBox, CListBoxOption } from '@coreui/vue-pro'

const selected = ref([])
</script>
```

`<CListBoxHeader>` is the strip above the list, inside the container. `<CListBoxSelectAll>` is a toggle button that switches the whole selection: it selects every visible enabled option, or drops that same set once they are all selected, so a value a filter hid stays selected; `useListBoxContext().clear()`, or an empty `v-model:selected`, empties everything. It looks like an option and reports its state through `aria-pressed` — `true`, `false`, or `mixed` while part of the list is selected — with `aria-controls` pointing at the options; its default slot is the label (`Select all` when you leave it out). It is reached with <kbd>Tab</kbd> rather than the arrows, which is the point: an option pretending to be a value had to lie through `aria-selected`. The header takes arbitrary content, so a title, a counter or controls of your own go in it too: `<CListBoxTitle>` and `<CListBoxSubtitle>` are the text pair, both `as`-polymorphic, and `useListBoxContext()` — or `v-model:selected` — is where a "2 of 4 selected" line gets its numbers.

```html
<template>
  <CListBox aria-label="Toppings" selection-mode="multiple" style="max-width: 20rem">
    <template #header>
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
    </template>
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/vue-pro'
</script>
```

With `none` nothing is ever selected and no `aria-selected` is written; activating an option emits `action` instead, which turns the list into a keyboard-navigable list of commands.

```html
<template>
  <CListBox
    aria-label="Actions"
    selection-mode="none"
    style="max-width: 20rem"
    @action="last = $event"
  >
    <CListBoxOption value="copy">Copy</CListBoxOption>
    <CListBoxOption value="rename">Rename</CListBoxOption>
    <CListBoxOption value="delete">Delete</CListBoxOption>
  </CListBox>
  <p class="fg-2">Last action: {{ last ?? 'none' }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { CListBox, CListBoxOption } from '@coreui/vue-pro'

const last = ref()
</script>
```

### Selection limit

`selectionLimit` stops the selection at a number of options. Once it is reached the next pick — a click, <kbd>Space</kbd>, a <kbd>Shift</kbd> range, <kbd>Ctrl</kbd>+<kbd>A</kbd> or the select-all button — is refused and `@selection-limit` fires once per interaction with the first value that did not fit. Deselecting always works and no option is disabled, so the list keeps saying what it holds instead of going grey. A range or a select all fills in document order until the limit; the select-all button reads as pressed once the limit is reached, and clicking it then clears.

```html
<template>
  <CListBox
    v-model:selected="selected"
    :selection-limit="2"
    aria-label="Toppings"
    selection-mode="multiple"
    style="max-width: 20rem"
    @selection-limit="refused = $event"
  >
    <template #header>
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
    </template>
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
    <CListBoxOption value="cheese">Cheese</CListBoxOption>
  </CListBox>
  <p class="fg-2">
    Selected: {{ selected.length > 0 ? selected.join(', ') : 'nothing' }} — two at a time<span
      v-if="refused"
      >, {{ refused }} did not fit</span
    >
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/vue-pro'

const refused = ref('')
const selected = ref([])
</script>
```

## Checkboxes

`indicator="checkbox"` writes `data-coreui-indicator` on the container and puts a checkbox in front of every option, so a multiple selection reads the way a list of checkboxes does — without leaving the listbox pattern: the boxes are decorative (`aria-hidden`), and what assistive technology announces is still `aria-selected` on the option. `<CListBoxSelectAll>` takes the same indicator and the same `selected` / `indeterminate` look, so the header lines up with the list.

```html
<template>
  <CListBox
    v-model:selected="selected"
    aria-label="Toppings"
    indicator="checkbox"
    selection-mode="multiple"
    style="max-width: 20rem"
  >
    <template #header>
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
    </template>
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
    <CListBoxOption value="cheese">Cheese</CListBoxOption>
  </CListBox>
  <p class="fg-2">Selected: {{ selected.length > 0 ? selected.join(', ') : 'nothing' }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/vue-pro'

const selected = ref(['tomato'])
</script>
```

## Counter

`counter` puts a counter built by `selectedLabel` at the end of the header and keeps it there: both numbers read the options on screen — the same set the select-all button works on — so a value hidden by a search or disabled counts in neither. Fill the header with anything you like — the counter is appended to it — or leave the slot empty and the list box renders the header for it.

```html
<template>
  <CListBox
    :items="items"
    aria-label="Sandwich"
    counter
    indicator="checkbox"
    selection-mode="multiple"
    style="max-width: 20rem"
  >
    <template #header>
      <CListBoxHeader>
        <CListBoxSelectAll>Toppings</CListBoxSelectAll>
      </CListBoxHeader>
    </template>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxHeader, CListBoxSelectAll } from '@coreui/vue-pro'

const items = [
  { label: 'Lettuce', value: 'lettuce' },
  { label: 'Tomato', value: 'tomato' },
  { label: 'Onion', value: 'onion' },
  { label: 'Cheese', value: 'cheese' },
]
</script>
```

## Sections

Group options in a `<CListBoxSection>` and name it with `label` or the `label` slot. The section renders `role="group"` and points `aria-labelledby` at its label, so the group is announced with its name.

```html
<template>
  <CListBox aria-label="Sandwich" style="max-width: 20rem">
    <CListBoxSection label="Veggies">
      <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
      <CListBoxOption value="tomato">Tomato</CListBoxOption>
    </CListBoxSection>
    <CListBoxSection label="Protein">
      <CListBoxOption value="ham">Ham</CListBoxOption>
      <CListBoxOption value="tuna">Tuna</CListBoxOption>
    </CListBoxSection>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption, CListBoxSection } from '@coreui/vue-pro'
</script>
```

### Selectable sections

`sectionsSelectable` turns every section label into a tri-state button that takes or drops the section's visible options at once — `aria-pressed` carries `true`, `false` or `mixed`, and the label joins the arrow order in front of the options it stands for. It works in the `multiple` mode and respects `selectionLimit`: values selected outside the section count against it, so a label reads `true` once the section holds what the limit leaves, and pressing it then clears the section. A label whose section has no enabled option on screen carries `aria-disabled`, leaves the arrow order and shows the state of the section's disabled options. With `indicator="checkbox"` the label shows the same checkbox the options do, and `disabled` on `<CListBoxSection>` disables every option in it.

```html
<template>
  <CListBox
    aria-label="Sandwich"
    indicator="checkbox"
    sections-selectable
    selection-mode="multiple"
    style="max-width: 20rem"
  >
    <CListBoxSection label="Veggies">
      <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
      <CListBoxOption value="tomato">Tomato</CListBoxOption>
      <CListBoxOption value="onion">Onion</CListBoxOption>
    </CListBoxSection>
    <CListBoxSection label="Protein">
      <CListBoxOption value="ham">Ham</CListBoxOption>
      <CListBoxOption value="tuna">Tuna</CListBoxOption>
    </CListBoxSection>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption, CListBoxSection } from '@coreui/vue-pro'
</script>
```

## Descriptions

An option can carry a second line through `description` or the `description` slot — typeahead then matches the label alone, so typing skips the description text.

```html
<template>
  <CListBox aria-label="Plan" style="max-width: 20rem">
    <CListBoxOption description="One project, community support" value="free">Free</CListBoxOption>
    <CListBoxOption description="Unlimited projects, shared billing" value="team"
      >Team</CListBoxOption
    >
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

Descriptions and the checkbox indicator work together: the indicator stays centred against the whole option and both lines of the text start past it, so a two-line option keeps the same left column as the select-all button above.

```html
<template>
  <CListBox
    aria-label="Plan"
    indicator="checkbox"
    selection-mode="multiple"
    style="max-width: 22rem"
  >
    <template #header>
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
    </template>
    <CListBoxOption description="One project, community support" value="free">Free</CListBoxOption>
    <CListBoxOption description="Unlimited projects, shared billing" value="team">
      Team
    </CListBoxOption>
    <CListBoxOption description="SSO, audit log and a named contact" value="enterprise">
      Enterprise
    </CListBoxOption>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/vue-pro'
</script>
```

## Links

An option with an `href` renders as a link, navigates on click and on <kbd>Enter</kbd>, and emits `action` on the way out — so a list of destinations keeps working with the keyboard without losing the browser's own link behavior.

```html
<template>
  <CListBox aria-label="Documentation" selection-mode="none" style="max-width: 20rem">
    <CListBoxOption href="/components/menu/" value="menu">Menu</CListBoxOption>
    <CListBoxOption href="/components/list-group/" value="list-group">List group</CListBoxOption>
    <CListBoxOption href="/components/dropdown/" value="dropdown">Dropdown</CListBoxOption>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

## Disabled items

`disabled` keeps the user out: it takes an option out of the keyboard order and out of every selection the user makes, the arrows, a click, a section label, a range and select all, and writes `aria-disabled` on it. Your code is not kept out of the values it sets, as with a native `<select>`: a disabled value in `defaultSelected` or in a selection you drive through `selected` is selected and read as selected. `select`, `toggle` and `selectAll` from `useListBox` act as the user would and leave a disabled option alone. The same prop on `<CListBox>` does that for all of it and writes `aria-disabled` on the list.

```html
<template>
  <CListBox aria-label="Sandwich" style="max-width: 20rem">
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption disabled value="tomato">Tomato — out of stock</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxOption } from '@coreui/vue-pro'
</script>
```

## Search

`search` puts a field above the options and filters on what is typed. A non-matching option is hidden rather than removed, so everything downstream follows — the arrows skip it, the empty state takes over once nothing is left, and the select-all button takes only what is on screen — while the selection itself survives the filtering.

```html
<template>
  <CListBox aria-label="Sandwich" search selection-mode="multiple" style="max-width: 20rem">
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
    <CListBoxOption value="cheese">Cheese</CListBoxOption>
    <CListBoxOption value="bacon">Bacon</CListBoxOption>
    <CListBoxEmpty>No results</CListBoxEmpty>
  </CListBox>
</template>

<script setup>
import { CListBox, CListBoxEmpty, CListBoxOption } from '@coreui/vue-pro'
</script>
```

`searchPlaceholder` is the field's placeholder and `ariaSearchLabel` its accessible name; the field carries `aria-controls` pointing at the options it filters.

`searchNormalize` compares both sides without their diacritics, so `zoe` matches `Zoë` and `oe` matches both. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched — only the comparison changes.

`search="external"` hides nothing and reports instead: every keystroke arrives as the `search` event, and the answer comes back as `items`. Fetching, debouncing and filtering are the caller's, which is what lets a list of any size live on a server — pair it with `loading` so the wait is announced.

```html
<template>
  <CListBox
    :items="items"
    :loading="loading"
    aria-label="Users"
    search="external"
    search-placeholder="Search users"
    style="max-width: 20rem"
    @search="onSearch"
  />
</template>

<script setup>
import { ref } from 'vue'
import { CListBox } from '@coreui/vue-pro'

const items = ref([])
const loading = ref(false)

let timer

const loadUsers = async (query) => {
  loading.value = true

  try {
    const response = await fetch(
      `https://apitest.coreui.io/demos/users?first_name=${query}&limit=10`
    )
    const users = await response.json()

    items.value = users.records.map((user) => ({
      label: `${user.first_name} ${user.last_name}`,
      value: String(user.id),
    }))
  } finally {
    loading.value = false
  }
}

const onSearch = (query) => {
  clearTimeout(timer)
  timer = setTimeout(() => loadUsers(query), 300)
}

loadUsers('')
</script>
```

### Filtering from your own field

`query` runs the same filter from a field you own, so the list can sit under a search input that is not part of it. A non-matching option is hidden rather than removed — the arrows skip it, a section with nothing left hides with its label, and the selection survives; `null` clears the filter. `searchNormalize` applies here too.

```html
<template>
  <CFormInput
    v-model="query"
    aria-label="Filter the sandwich"
    class="mb-3"
    placeholder="Filter…"
    style="max-width: 20rem"
    type="search"
  />
  <CListBox :query="query" aria-label="Sandwich" style="max-width: 20rem">
    <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
    <CListBoxOption value="tomato">Tomato</CListBoxOption>
    <CListBoxOption value="onion">Onion</CListBoxOption>
    <CListBoxOption value="cheese">Cheese</CListBoxOption>
    <CListBoxEmpty>No results</CListBoxEmpty>
  </CListBox>
</template>

<script setup>
import { ref } from 'vue'
import { CFormInput, CListBox, CListBoxEmpty, CListBoxOption } from '@coreui/vue-pro'

const query = ref('')
</script>
```

## Empty state

`<CListBoxEmpty>` is shown whenever nothing is left to navigate and hidden as soon as something is, so filtering a list has somewhere to land. `hidden` on an option takes it out of the navigation and leaves the selection alone — which is what makes a filter cheap.

```html
<template>
  <CFormInput
    v-model="query"
    aria-label="Filter"
    class="mb-3"
    placeholder="Filter"
    style="max-width: 20rem"
  />
  <CListBox aria-label="Results" style="max-width: 20rem">
    <CListBoxOption
      v-for="item in items"
      :key="item"
      :hidden="!item.toLowerCase().startsWith(query.toLowerCase())"
      :value="item"
    >
      {{ item }}
    </CListBoxOption>
    <CListBoxEmpty>No results</CListBoxEmpty>
  </CListBox>
</template>

<script setup>
import { ref } from 'vue'
import { CFormInput, CListBox, CListBoxEmpty, CListBoxOption } from '@coreui/vue-pro'

const items = ['Lettuce', 'Tomato', 'Onion', 'Cheese']
const query = ref('')
</script>
```

## Loading

`loading` covers the wait: it writes `aria-busy="true"` on the options element, shows a row with a spinner and the `loadingLabel` text below the options, announces that text to screen readers when the wait starts or the list shows up waiting, and holds the empty state back, so "No results" never flashes before the answer arrives. The options stay as they are and can still be picked, so a choice from the shown results counts.

## Long lists

`optionsMaxHeight` caps the options list and scrolls it past that, in pixels or as a CSS length. `virtualScroller` goes further and mounts only the options in view, so a thousand of them cost a window of `visibleItems`; the selection and the keyboard are untouched — the scroller is only the viewport.

```html
<template>
  <CListBox
    :items="items"
    :visible-items="8"
    aria-label="Numbers"
    selection-mode="multiple"
    style="max-width: 20rem"
    virtual-scroller
  />
</template>

<script setup>
import { CListBox } from '@coreui/vue-pro'

const items = Array.from({ length: 1000 }, (_, index) => ({
  label: `Option ${index + 1}`,
  value: String(index + 1),
}))
</script>
```

## With an input

Pass `activeDescendant` an input — an element or a CSS selector — and the focus never leaves it: the list box drops the roving `tabindex`, gives every option an `id`, and keeps `aria-activedescendant` and `aria-controls` on the field pointing at the highlighted option. The arrows, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Space</kbd> and <kbd>Enter</kbd> are handled on the field, so typing and choosing happen in one place — a combobox in two elements.

```html
<template>
  <CFormLabel for="listBoxField">Filter</CFormLabel>
  <CFormInput
    id="listBoxField"
    v-model="query"
    aria-expanded="true"
    autocomplete="off"
    class="mb-3"
    role="combobox"
    style="max-width: 20rem"
    type="text"
  />
  <CListBox
    v-model:selected="selected"
    active-descendant="#listBoxField"
    aria-label="Sandwich"
    style="max-width: 20rem"
  >
    <CListBoxOption
      v-for="item in items"
      :key="item"
      :hidden="!item.toLowerCase().startsWith(query.toLowerCase())"
      :value="item"
    >
      {{ item }}
    </CListBoxOption>
  </CListBox>
  <p class="fg-2">Selected: {{ selected.length > 0 ? selected.join(', ') : 'nothing' }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { CFormInput, CFormLabel, CListBox, CListBoxOption } from '@coreui/vue-pro'

const items = ['Lettuce', 'Tomato', 'Onion', 'Cheese']
const query = ref('')
const selected = ref([])
</script>
```

## Accessibility

`<CListBox>` writes `role="listbox"` on the options element, `role="option"` on every option, `role="group"` on every section, `aria-multiselectable` in `multiple` mode and `aria-selected` on every option outside `none` mode. Name the list yourself with `ariaLabel`, which lands on the options element together with the roles. `<CListBoxSelectAll>` is a `<button>` in its own tab stop: `aria-pressed` carries `true` / `false` / `mixed`, and `aria-controls` points at the options.

| Key | Action |
| --- | --- |
| `↓` / `↑` | Move the highlight to the next/previous option; it stops at the ends |
| `Home` / `End` | Move the highlight to the first/last option |
| `Space` | Toggle the option in `multiple` mode, select it in `single` |
| `Enter` | Select the option; on a link, follow it; in `none` mode, emit `action` |
| `Shift` + `↓` / `↑` | Extend the selection to the next/previous option |
| `Shift` + `Home` / `End` | Extend the selection to the first/last option |
| `Ctrl` / `Cmd` + `A` | Select every option (`multiple` mode) |
| `A` – `Z` | Move the highlight to the next option whose label starts with what you typed |

## Customizing

### CSS variables

The list box reads its own set of CSS variables, declared on `.list-box`. Set them on a single list box to restyle it without recompiling:

```css
--cui-list-box-bg
--cui-list-box-border-color
--cui-list-box-border-radius
--cui-list-box-border-width
--cui-list-box-color
--cui-list-box-font-size
--cui-list-box-gap
--cui-list-box-header-border-color
--cui-list-box-header-border-width
--cui-list-box-header-gap
--cui-list-box-header-padding-x
--cui-list-box-header-padding-y
--cui-list-box-option-active-bg
--cui-list-box-option-active-color
--cui-list-box-option-border-radius
--cui-list-box-option-description-color
--cui-list-box-option-description-font-size
--cui-list-box-option-disabled-color
--cui-list-box-option-gap
--cui-list-box-option-hover-bg
--cui-list-box-option-hover-color
--cui-list-box-option-indicator-width
--cui-list-box-option-padding-x
--cui-list-box-option-padding-y
--cui-list-box-option-selected-bg
--cui-list-box-option-selected-color
--cui-list-box-padding-x
--cui-list-box-padding-y
--cui-list-box-search-margin
--cui-list-box-section-label-color
--cui-list-box-section-label-font-size
--cui-list-box-section-label-padding
```

`translucent` renders the list on a translucent, blurred background — the same treatment the menu surfaces use.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CListBox /&gt;](./api/#clistbox)
- [&lt;CListBoxEmpty /&gt;](./api/#clistboxempty)
- [&lt;CListBoxHeader /&gt;](./api/#clistboxheader)
- [&lt;CListBoxOption /&gt;](./api/#clistboxoption)
- [&lt;CListBoxSection /&gt;](./api/#clistboxsection)
- [&lt;CListBoxSelectAll /&gt;](./api/#clistboxselectall)
- [&lt;CListBoxSubtitle /&gt;](./api/#clistboxsubtitle)
- [&lt;CListBoxTitle /&gt;](./api/#clistboxtitle)
