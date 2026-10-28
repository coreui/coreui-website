# Vue Data Grid Inline Editing

> Inline cell editing for the Vue Data Grid — built-in text, number and select editors, validation, and a popup contract for rich editors like date pickers and multi-selects.

`editing` turns cells editable in place. Press <kbd>Enter</kbd> or <kbd>F2</kbd>
on the active cell — or double-click any cell — to start; <kbd>Enter</kbd>
commits, <kbd>Escape</kbd> cancels, <kbd>Tab</kbd> commits and moves to the next
editable cell. Editing builds on
[keyboard navigation](https://coreui.io/data-grid/vue/docs/features/keyboard-navigation/), so `editing` enables
`cell-navigation` automatically.

```html
<script setup lang="ts">
import { CDataGrid, type DataGridEditCommitEvent } from '@coreui/vue-data-grid'
import { ref } from 'vue'

const roles = ['admin', 'editor', 'viewer']

const items = ref(
  Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    age: 20 + (i % 40),
    role: roles[i % roles.length]
  }))
)

const columns = [
  { key: 'id', label: '#', width: 90 },
  {
    key: 'name',
    label: 'Name',
    editable: true,
    editValidate: (value: unknown) => (value === '' ? 'Name is required' : true)
  },
  { key: 'age', label: 'Age', width: 110, editable: { type: 'number' as const, min: 0, max: 120 } },
  { key: 'role', label: 'Role', width: 130, editable: { type: 'select' as const, options: roles } }
]

// The grid never mutates items - apply the committed change yourself.
const onEditCommit = ({ item, columnId, value }: DataGridEditCommitEvent) => {
  items.value = items.value.map(row =>
    row.id === (item as { id: number }).id ? { ...row, [columnId]: value } : row
  )
}
</script>

<template>
  <CDataGrid
    :columns="columns"
    editing
    :items="items"
    :item-key="(item) => String(item.id)"
    @edit-commit="onEditCommit"
  />
</template>
```

## Usage

Editing is opt-in per column — `editable` picks a built-in editor, a custom
`editor-{key}` slot is itself the opt-in:

```vue
<CDataGrid
  editing
  :columns="[
    { key: 'name', editable: true },                                   // text input
    { key: 'age', editable: { type: 'number', min: 0 } },              // number input
    { key: 'role', editable: { type: 'select', options: ['admin', 'user'] } },
  ]"
  :items="items"
/>
```

## The app owns the data

The grid never mutates `items`. A commit emits `editCommit` with
`{ item, columnId, value, previousValue }` — apply the change to your state and
the grid re-renders (server-side, PATCH and refetch):

```vue
<CDataGrid
  editing
  :columns="columns"
  :items="items"
  @edit-commit="({ item, columnId, value }) => {
    items = items.map((row) => (row.id === item.id ? { ...row, [columnId]: value } : row))
  }"
/>
```

`editStart` and `editCancel` fire around it with `(item, columnId)`.

## Tracking edits

`edit-tracking` keeps the value each cell had before its first commit, keyed by
`itemKey`. A cell whose value in `items` differs from it gets
`data-grid-cell-edited`: a marker in its corner, and the description "Edited"
for screen readers (`labels.editedCell`). The grid compares with the data you
pass, so a commit you refuse or apply later, an undo, and an edit back to the
old value all show the right state. Edit a name or a role below, then save.

```html
<script setup lang="ts">
import {
  CDataGrid,
  type CDataGridApi,
  type DataGridEditCommitEvent,
  type DataGridEditedCell
} from '@coreui/vue-data-grid'
import { ref } from 'vue'

const roles = ['admin', 'editor', 'viewer']

const items = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    role: roles[i % roles.length]
  }))
)

const grid = ref<CDataGridApi | null>(null)
const editedCells = ref<DataGridEditedCell[]>([])
const status = ref('')

const columns = [
  { key: 'id', label: '#', width: 90 },
  { key: 'name', label: 'Name', editable: true },
  { key: 'role', label: 'Role', width: 130, editable: { type: 'select' as const, options: roles } }
]

const onEditCommit = ({ item, columnId, value }: DataGridEditCommitEvent) => {
  items.value = items.value.map(row =>
    row.id === (item as { id: number }).id ? { ...row, [columnId]: value } : row
  )
}

const save = () => {
  if (editedCells.value.length > 0) {
    grid.value?.clearEdited()
    status.value = 'Changes saved'
  }
}

const onEditedChange = (cells: DataGridEditedCell[]) => {
  editedCells.value = cells
  if (cells.length > 0) {
    status.value = ''
  }
}
</script>

<template>
  <div class="mb-3">
    <button type="button" class="btn btn-primary" @click="save">
      Save changes ({{ editedCells.length }})
    </button>
    <span class="ms-2" role="status">{{ status }}</span>
  </div>
  <CDataGrid
    ref="grid"
    :columns="columns"
    editing
    edit-tracking
    :item-key="(item) => String(item.id)"
    :items="items"
    @edit-commit="onEditCommit"
    @edited-change="onEditedChange"
  />
</template>
```

The template ref exposes the grid API: `isDirty()` says whether anything
changed, `getEditedCells()` returns
`{ rowId, columnId, item, value, originalValue }` for each edited cell, and
`clearEdited()` forgets the original values once you have saved. The
`edited-change` event carries the edited cells whenever their set changes.

Without `itemKey` a row's id is its position in `items`, so an insert or a
removal would move a mark to another row; tracking stays off and logs an
error. `editEquals(value, originalValue)` on a column decides what counts as
a change, for values a new object replaces on every commit such as dates or
arrays; the default is `Object.is`. The same comparison runs when an editor
closes: a commit that keeps the value fires the cancel event instead of the
commit, before `editValidate`, and adds nothing to the undo history, with or
without tracking. To tint whole rows as well, return a class from `row-class`
for the rows listed in the edited cells.

## Validation

`editValidate` gates the commit. Return `true` to accept, or a message to block
it — the editor gets `aria-invalid`, the `is-invalid` class and an
`aria-errormessage` pointing at the message:

```js
{ key: 'name', editable: true, editValidate: (value, item) => value !== '' || 'Name is required' }
```

An invalid value keeps the editor open; <kbd>Escape</kbd> still cancels.

### Validating the data

`validate` checks the data itself, not only the cell being edited. It receives a row
and returns messages keyed by column: a string is an error, and
`{ message, level: 'warning' }` is a warning. Every rendered cell with an issue is
marked, data loaded from the server included: an error gets
`data-grid-cell-invalid` (a solid outline), and `aria-invalid` when cell
navigation is on, a warning gets
`data-grid-cell-warning` (a dashed outline), and both carry the message as a
tooltip and as their description for screen readers. Because the function sees
the whole row, one rule can compare fields, and fixing either field clears the
mark.

```html
<script setup lang="ts">
import {
  CDataGrid,
  type CDataGridApi,
  type DataGridEditCommitEvent,
  type DataGridItem
} from '@coreui/vue-data-grid'
import { onMounted, ref, watch } from 'vue'

const items = ref<DataGridItem[]>([
  {
    id: 1, task: 'Plan the release', start: '2026-01-10', end: '2026-01-20'
  },
  {
    id: 2, task: '', start: '2026-02-10', end: '2026-02-01'
  },
  {
    id: 3, task: 'Ship', start: '2026-03-01', end: '2026-03-05'
  }
])

const columns = [
  { key: 'task', label: 'Task', editable: true },
  { key: 'start', label: 'Start', width: 150, editable: true },
  { key: 'end', label: 'End', width: 150, editable: true }
]

const validate = (item: DataGridItem) => ({
  task: item.task === '' ? 'Task is required' : undefined,
  start: String(item.start) > String(item.end) ? 'Start is after the end' : undefined,
  end: String(item.end).startsWith('2026-03') ? { message: 'Release month, check the freeze', level: 'warning' as const } : undefined
})

const grid = ref<CDataGridApi | null>(null)
const errors = ref(0)

const countErrors = () => {
  errors.value = grid.value?.getInvalidCells('error').length ?? 0
}

onMounted(countErrors)
watch(items, countErrors, { flush: 'post' })

const onEditCommit = ({ item, columnId, value }: DataGridEditCommitEvent) => {
  items.value = items.value.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row))
}
</script>

<template>
  <p class="mb-3" role="status">{{ errors === 0 ? 'Ready to save' : `${errors} ${errors === 1 ? 'error' : 'errors'} to fix` }}</p>
  <CDataGrid
    ref="grid"
    :columns="columns"
    editing
    :item-key="(item) => String(item.id)"
    :items="items"
    :validate="validate"
    :virtualization="false"
    @edit-commit="onEditCommit"
  />
</template>
```

When an edit commits, the grid validates the row as it will be after the change,
after `editValidate` and only when the value changed, so a cell loaded with an
error can still be left with Enter. An error on the edited column blocks the
commit and shows the message in the editor, like `editValidate`. An error the
commit causes on another column lets it through, marks that cell and is announced
to screen readers; warnings never block.

`isValid()` and `getInvalidCells(level?)` on the template ref check every row the
grid holds, not only the rendered ones, for example to disable a save button. Read
them in a watcher with `flush: 'post'`, as the example does, so the grid has
rendered the new `items`. With `dataProvider` they see the rows the grid holds: the current page, or every
page loaded so far with `infiniteScroll`, never the rest of the server's data.
The grid keeps no state for this: errors your server returns can live in your own
state and be read by `validate`. Key them to the value the server rejected
(`serverErrors[item.id]?.email === item.email ? 'Email is taken' : undefined`),
otherwise the old message blocks every new value the user types into that cell.
Keep that state reactive (a `ref`) so the grid renders again when it changes.

## Custom editors

The `editor-{key}` scoped slot replaces the built-in input with your own UI. It
renders with the editing context and registers the imperative bits of the
contract through `register`:

```vue
<CDataGrid editing :columns="[{ key: 'note', editable: true }, ...columns]" :items="items">
  <template #editor-note="{ value, register }">
    <input
      class="form-control form-control-sm"
      :value="String(value ?? '')"
      :ref="(el) => register(el ? {
        focus: () => (el as HTMLInputElement).select(),
        getValue: () => (el as HTMLInputElement).value,
      } : null)"
    />
  </template>
</CDataGrid>
```

The slot receives `{ item, column, value, invalid, labels, commit, cancel, register }`;
the registered handle can provide `getValue` (feeds Enter/Tab/blur/outside
commits), `focus`, and `contains` (extends the edit scope to overlays portaled
outside the cell).

## Rich editors — date pickers, autocompletes, multi-selects

Editors whose UI extends beyond the cell — a date range picker's calendar, a
multi-select's listbox — set `editorPopup: true` on the column. The grid renders
the slot in a `.data-grid-editor-popup` layer anchored to the cell (min-width =
cell width), so a tall editor never reflows the row, and the cell keeps its
content underneath.

Three rules make components like `@coreui/vue-pro`'s
`CDateRangePicker`, `CTimePicker`, `CAutocomplete` and `CMultiSelect` work as
editors:

- **Commit on outside, not on blur alone.** Picking a date in a calendar blurs
  the input mid-edit — so the grid commits on pointerdown *outside the edit
  scope* (cell + popup + anything `contains()` claims). Keep the component's
  overlay inside the popup (its `container` prop), or claim a portaled overlay
  via the handle's `contains()`.
- **One Escape, one layer.** An Escape the editor consumed (calling
  `preventDefault()` to close its own overlay) never cancels the edit — only
  the next, unconsumed Escape does.
- **Values are not scalars.** `getValue()` can return anything — a range
  picker commits `{ startDate, endDate }`, a multi-select commits an array;
  `editCommit` passes it through untouched.

```vue
<CDataGrid editing :columns="[{ key: 'period', editorPopup: true }, ...columns]" :items="items">
  <template #editor-period="{ value, register }">
    <CDateRangePicker
      :start-date="value?.startDate"
      :end-date="value?.endDate"
      @start-date-change="(startDate) => (draft = { ...draft, startDate })"
      @end-date-change="(endDate) => (draft = { ...draft, endDate })"
      :ref="() => register({ getValue: () => draft })"
    />
  </template>
</CDataGrid>
```

## Interaction details

- Scrolling the editing row out of the
  [virtualized](https://coreui.io/data-grid/vue/docs/features/virtualization/) window commits the draft; so do
  sort, filter and page transitions.
- Replacing `items` and [server-side](https://coreui.io/data-grid/vue/docs/features/server-side-data/) data loads
  cancel an in-flight edit — the incoming data owns the cell.
- <kbd>Shift</kbd>+<kbd>Tab</kbd> commits and moves to the previous editable
  cell.
