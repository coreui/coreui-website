# Vue Transfer Component

> Two lists side by side and four buttons that move options between them — the selection or everything at once: a select-all header with a counter, an optional per-list search, a one-way mode and an announcement of every move.

## Overview

_Added in 6.0.0._

A transfer moves values between two lists — what is available on the left, what has been chosen on the right. It is two [list boxes](https://coreui.io/vue/docs/components/list-box/) and a column of buttons: `<CTransfer>` puts each list in `multiple` selection mode with the checkbox indicator, enables each button while it has something to move, and reports the values of the target list.

```html
<template>
  <CTransfer v-model:value="value" :items="items" />
</template>

<script setup>
import { ref } from 'vue'
import { CTransfer } from '@coreui/vue-pro'

const items = [
  { label: 'List item 1', value: '1' },
  { label: 'List item 2', value: '2' },
  { label: 'List item 3', value: '3' },
  { label: 'List item 4', value: '4' },
  { label: 'List item 5', value: '5' },
]

const value = ref(['5'])
</script>
```

`items` is the whole set of options — `{ value, label, description?, disabled? }` — and `value` is the part of it that sits in the target list, so the two lists are one array split by what has been chosen. `v-model:value` keeps it in sync; leave it out and pass `defaultValue` to let the component own the split, and read the moves from `change`, which carries the new value together with `{ direction, moved }`.

Everything inside a list is the list box's: the options and their values, the selection, the arrow keys, the typeahead and the select-all button. The transfer owns what happens between the lists, so nothing here is a second implementation of the same behavior — read the [List box](https://coreui.io/vue/docs/components/list-box/) page for the parts a list is made of.

"All" is the same scope the select-all button works on — the visible, enabled options — so with a search running, the all button moves what the search left behind and nothing more.

The transfer caps how tall a list gets — `--cui-transfer-list-max-height` puts a `max-height` and `overflow-y: auto` on `.list-box-options`, so a long list scrolls inside its own box instead of stretching the row.

## Search

`search` is passed to both list boxes, so each list gets [its own search field](https://coreui.io/vue/docs/components/list-box/#search). A hidden option leaves the list box's navigation, and everything downstream follows: the arrows skip it, the counter drops it, and the select-all button takes only what is left on screen.

```html
<template>
  <CTransfer :items="items" search />
</template>

<script setup>
import { CTransfer } from '@coreui/vue-pro'

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Cranberry', value: 'cranberry' },
]
</script>
```

The search matches the option's `label`, not its `description`, and `searchPlaceholder` is both the placeholder and the first half of each field's accessible name.

## External search

`search="external"` takes the filtering away: the fields stay, nothing is hidden, and every keystroke arrives as the `search` event with the side it was typed in and the query — the transfer's own version of [the list box's external search](https://coreui.io/vue/docs/components/list-box/#search). The answer comes back as `items`, so fetching, debouncing and filtering are yours: the example below asks the server for the source list and filters the target where it already is, in memory.

`loading` covers the wait. Pass a boolean for both lists or `{ source, target }` for one of them, and that list gets `aria-busy="true"` on its options element, a row with `loadingLabel` below its options and its empty state held back, while the options stay usable.

`value` outlives a change of `items`: a value that is still in the new set stays in the target in its own order, and a value that is gone leaves both lists. Keep the chosen items in the set you hand back and the target holds still while the source is refetched.

```html
<template>
  <CTransfer
    v-model:value="value"
    :items="items"
    :loading="loading"
    search="external"
    search-placeholder="Search users"
    source-title="Users"
    target-title="Assigned"
    @search="onSearch"
  />
</template>

<script setup>
import { computed, ref } from 'vue'
import { CTransfer } from '@coreui/vue-pro'

const catalog = new Map()
const loading = ref({ source: false })
const results = ref([])
const targetQuery = ref('')
const value = ref([])

let timer

const items = computed(() => [
  ...value.value
    .map((entry) => catalog.get(entry))
    .filter((item) => item && item.label.toLowerCase().includes(targetQuery.value)),
  ...results.value.filter((item) => !value.value.includes(item.value)),
])

const loadUsers = async (query) => {
  loading.value = { source: true }

  try {
    const response = await fetch(
      `https://apitest.coreui.io/demos/users?first_name=${query}&limit=10`
    )
    const users = await response.json()

    results.value = users.records.map((user) => {
      const item = { label: `${user.first_name} ${user.last_name}`, value: String(user.id) }
      catalog.set(item.value, item)

      return item
    })
  } finally {
    loading.value = { source: false }
  }
}

const onSearch = (side, query) => {
  if (side === 'target') {
    targetQuery.value = query.trim().toLowerCase()

    return
  }

  clearTimeout(timer)
  timer = setTimeout(() => loadUsers(query), 300)
}

loadUsers('')
</script>
```

## One way

`oneWay` takes the return trip away: both buttons that move back are hidden, and a value that has been chosen stays chosen.

```html
<template>
  <CTransfer :items="items" one-way />
</template>

<script setup>
import { CTransfer } from '@coreui/vue-pro'

const items = [
  { label: 'List item 1', value: '1' },
  { label: 'List item 2', value: '2' },
  { label: 'List item 3', value: '3' },
]
</script>
```

## Titles

`sourceTitle` and `targetTitle` name the two lists. The title is the label of the select-all button, the accessible name of the list, and the destination named in the move announcement. `selectedLabel` is passed to both list boxes as [their counter](https://coreui.io/vue/docs/components/list-box/#counter) text — a function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced.

```html
<template>
  <CTransfer
    :items="items"
    selected-counter-text="picked"
    source-title="Team"
    target-title="On call"
  />
</template>

<script setup>
import { CTransfer } from '@coreui/vue-pro'

const items = [
  { label: 'Ada', value: 'ada' },
  { label: 'Grace', value: 'grace' },
  { label: 'Linus', value: 'linus' },
]
</script>
```

## Descriptions

An option is the list box's, so `description` renders a second line here too — and the search matches on the label, not on the description.

```html
<template>
  <CTransfer :items="items" />
</template>

<script setup>
import { CTransfer } from '@coreui/vue-pro'

const items = [
  { description: 'See the contents of a file', label: 'Read', value: 'read' },
  { description: 'Change the contents of a file', label: 'Write', value: 'write' },
  { description: 'Give someone else access', label: 'Share', value: 'share' },
]
</script>
```

## Disabled items

`disabled` on an item takes it out of the keyboard order and out of every selection method, so it never moves — the move-all buttons leave it behind, and so do `moveToTarget()` and `moveToSource()` with the value in hand. `disabled` on the transfer does the same for all of it: both lists go quiet and every button is disabled.

```html
<template>
  <CTransfer :items="items" />
</template>

<script setup>
import { CTransfer } from '@coreui/vue-pro'

const items = [
  { label: 'List item 1', value: '1' },
  { disabled: true, label: 'List item 2 — locked', value: '2' },
  { label: 'List item 3', value: '3' },
]
</script>
```

## Custom option content

The `item` slot renders the contents of an option and gets `{ direction, index, item }` — the item as it was passed in, and which list it is being rendered into. The option itself, with its value, its selection and its checkbox, stays the transfer's.

```html
<template>
  <CTransfer :items="items">
    <template #item="{ item }">
      <CBadge class="me-3" color="secondary">{{ item.value }}</CBadge>
      {{ item.label }}
    </template>
  </CTransfer>
</template>

<script setup>
import { CBadge, CTransfer } from '@coreui/vue-pro'

const items = [
  { label: 'Ada', value: 'ada' },
  { label: 'Grace', value: 'grace' },
  { label: 'Linus', value: 'linus' },
]
</script>
```

## Accessibility

Each list is a listbox of its own with the title as its accessible name, and the select-all button carries the state of its list in `aria-pressed` — all of that comes from [List box](https://coreui.io/vue/docs/components/list-box/#accessibility), keyboard included: the arrows, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Space</kbd>, <kbd>Shift</kbd> ranges, <kbd>Ctrl</kbd> + <kbd>A</kbd> and the typeahead all work inside the list that has the focus.

What the transfer adds is the crossing. Each move button is named — `ariaMoveToTargetLabel`, `ariaMoveToSourceLabel`, `ariaMoveAllToTargetLabel`, `ariaMoveAllToSourceLabel` — and is disabled while it has nothing to move, so the keyboard never lands on a button that would do nothing. The chevrons are decorative `aria-hidden` SVGs, so the name is all a screen reader gets.

The move happens away from the focus, and the button that did it usually turns off in the process — a list with nothing selected left. Rather than dropping the focus on the document, the component puts it on the first option that just arrived.

Every move, either way, adds a message of its own to the live region of the page through [`announce()`](https://coreui.io/vue/docs/getting-started/accessibility/#announcing-messages) once it is applied, so a move that a controlled `value` refuses is not announced and the same move made twice is announced twice: `ariaMovedAnnouncement` is `'{count} moved to {title}'` by default, with `{title}` the destination's title. `{count}` and `{title}` are replaced wherever they appear, so the sentence can be reordered for a translation.

| Key | Action |
| --- | --- |
| `Tab` | Move between the select-all button, the search field, the options and the move buttons |
| `↓` / `↑` | Move the highlight inside the focused list |
| `Space` | Toggle the highlighted option |
| `Shift` + `↓` / `↑` | Extend the selection inside the focused list |
| `Ctrl` / `Cmd` + `A` | Select every visible, enabled option of the focused list |
| `Enter` / `Space` | Move the selection when the focus is on a move button |

## Customizing

### CSS variables

The transfer reads its own set of CSS variables, declared on `.transfer`. Set them on a single transfer to restyle it without recompiling:

```css
--cui-transfer-gap
--cui-transfer-actions-gap
--cui-transfer-list-min-height
--cui-transfer-list-max-height
```

Everything inside a list is styled through the [list box's own variables](https://coreui.io/vue/docs/components/list-box/#css-variables).

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTransfer /&gt;](./api/#ctransfer)
