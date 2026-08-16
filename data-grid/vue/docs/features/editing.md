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

## Validation

`editValidate` gates the commit. Return `true` to accept, or a message to block
it — the editor gets `aria-invalid`, the `is-invalid` class and an
`aria-errormessage` pointing at the message:

```js
{ key: 'name', editable: true, editValidate: (value, item) => value !== '' || 'Name is required' }
```

An invalid value keeps the editor open; <kbd>Escape</kbd> still cancels.

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
