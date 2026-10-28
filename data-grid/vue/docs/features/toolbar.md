# Vue Data Grid Toolbar

> Add a built-in Data Grid toolbar with a column chooser, CSV export button and global search — enabled with a single prop or configured granularly.

The `toolbar` prop adds a built-in chrome row above the grid with a
**column chooser**, a **CSV export** button, **Undo/Redo** buttons (with
[`history`](https://coreui.io/data-grid/vue/docs/features/history/)) and a **global search** input. Each action drives an existing feature. The built-in toolbar is the
default composition of public parts; a [custom toolbar](#custom-toolbar)
composes the same parts next to your own actions.

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :column-visibility="true"
    :toolbar="true"
  />
</template>
```

`toolbar` set to `true` enables each action whose underlying feature is on:
**columns** needs [`columnVisibility`](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/), **export**
is always available, **undo/redo** needs [`history`](https://coreui.io/data-grid/vue/docs/features/history/), and
**search** turns on the global filter. Pass a granular
object to pick actions individually — `search: true` is the same input as
[`globalFilter`](https://coreui.io/data-grid/vue/docs/features/filtering/), so keep using whichever reads better.

```vue
<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :column-visibility="true"
    :toolbar="{
      columns: true,
      export: { filename: 'users.csv' },
      history: true,
      search: true
    }"
  />
</template>
```

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'

const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

const columns = [
  { key: 'id', label: '#', width: 90, hideable: false },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email', style: { width: '30%' } },
  { key: 'role', label: 'Role', width: 110 }
]
</script>

<template>
  <CDataGrid
    :columns="columns"
    :items="items"
    :item-key="(item) => String(item.id)"
    :column-visibility="true"
    :pagination="{ pageSize: 10 }"
    :toolbar="{
      columns: true,
      export: { filename: 'users.csv' },
      search: true
    }"
  />
</template>
```

## Column chooser

With `toolbar.columns` enabled the columns button opens a menu listing every
leaf column in visual order as a checkable item. A click or Space on an item
calls `column.toggleVisibility()` live and keeps the menu open, Enter does the
same and closes it — there is no Apply step. Columns marked `hideable: false`
stay checked and disabled. **Show all**
and **Reset** (Reset restores the initial `columnVisibility` object) apply and
close the menu. Visibility
changes emit `visibility-change` just like the [column menu](https://coreui.io/data-grid/vue/docs/columns/menu/).

## Export

The export button downloads the current view as CSV by calling
[`downloadCsv({ scope: 'filtered' })`](https://coreui.io/data-grid/vue/docs/features/csv-export/). Pass a
[`CsvDownloadOptions`](https://coreui.io/data-grid/vue/docs/features/csv-export/) object as `toolbar.export` to set
`filename`, `delimiter`, `bom`, `sanitize` or `scope`.

## Icons

The toolbar buttons use the CoreUI icon set, overridable per-instance with the
`toolbarColumnsIcon`, `toolbarExportIcon`, `toolbarUndoIcon` and
`toolbarRedoIcon` props (a VNode or a render function,
like every other icon prop).

## Custom toolbar

The `#toolbar` slot replaces the default composition. The parts the built-in
toolbar is made of are exported, so a custom toolbar keeps the built-in
actions and adds its own next to them. This demo puts a **Save changes**
action that is enabled only while there are unsaved edits in front of Undo,
Redo, Columns and Export:

```html
<script setup lang="ts">
import {
  CDataGrid,
  CDataGridToolbar,
  CDataGridToolbarActions,
  CDataGridToolbarButton,
  CDataGridToolbarColumns,
  CDataGridToolbarExport,
  CDataGridToolbarRedo,
  CDataGridToolbarSearch,
  CDataGridToolbarUndo,
  type DataGridEditCommitEvent
} from '@coreui/vue-data-grid'
import { computed, ref } from 'vue'

const roles = ['admin', 'editor', 'viewer']

const initialItems = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: roles[i % roles.length]
}))

const items = ref(initialItems)
const saved = ref(initialItems)

const dirty = computed(() =>
  items.value.some((row, index) => row.name !== saved.value[index].name || row.role !== saved.value[index].role)
)

const columns = [
  { key: 'id', label: '#', width: 90, hideable: false },
  { key: 'name', label: 'Name', editable: true },
  { key: 'role', label: 'Role', width: 130, editable: { type: 'select' as const, options: roles } }
]

const onEditCommit = ({ item, columnId, value }: DataGridEditCommitEvent) => {
  items.value = items.value.map(row =>
    row.id === (item as { id: number }).id ? { ...row, [columnId]: value } : row
  )
}

const save = () => {
  saved.value = items.value
}
</script>

<template>
  <CDataGrid
    :columns="columns"
    column-visibility
    editing
    global-filter
    history
    :items="items"
    :item-key="(item) => String(item.id)"
    :pagination="{ pageSize: 10 }"
    @edit-commit="onEditCommit"
  >
    <template #toolbar>
      <CDataGridToolbar>
        <CDataGridToolbarActions>
          <CDataGridToolbarButton label="Save changes" :disabled="!dirty" @action="save" />
          <CDataGridToolbarUndo />
          <CDataGridToolbarRedo />
          <CDataGridToolbarColumns />
          <CDataGridToolbarExport :options="{ filename: 'users.csv' }" />
        </CDataGridToolbarActions>
        <CDataGridToolbarSearch />
      </CDataGridToolbar>
    </template>
  </CDataGrid>
</template>
```

The slot is part of your template, so it reads your component's state
directly, like `dirty` in the demo.

| Part | Renders | Needs |
| --- | --- | --- |
| `CDataGridToolbar` | the `.data-grid-toolbar` row | — |
| `CDataGridToolbarActions` | a `.data-grid-toolbar-actions` group | — |
| `CDataGridToolbarColumns` | the column chooser button and its menu | `columnVisibility` |
| `CDataGridToolbarExport` | the export button | — |
| `CDataGridToolbarPrint` | the [print](https://coreui.io/data-grid/vue/docs/features/print/) button | — |
| `CDataGridToolbarUndo`, `CDataGridToolbarRedo` | the history buttons | `history` |
| `CDataGridToolbarSearch` | the global search field | `globalFilter` |
| `CDataGridToolbarButton` | an own action with the built-in look | — |

Every button part takes `icon` (a VNode or a render function) and `label`
(the accessible name and tooltip); other attributes, such as `class`, go to
the button. `CDataGridToolbarExport` also takes `options`, merged over
`toolbar.export`; `CDataGridToolbarSearch` takes `label` and `placeholder`,
and its attributes go to the field's wrapper. `CDataGridToolbarButton`
requires `label`, takes `disabled` and `pressed` (rendered as `aria-pressed`
once set) and emits `action`. Without an icon its label is visible text; with
one the label becomes the tooltip.

A part whose feature is off still renders, disabled, and logs
`DATA-GRID: Toolbar part "undo" requires option "history".` once per kind and
grid. Keep Undo and Redo in the toolbar instead of rendering them only while
`canUndo` is true: a button that disappears while focused takes the focus
with it.

## Own elements with a part's behaviour

Every part has a default scoped slot `{ props }`: bind `props` to your own
`<button>` (or `<input>` for search) and it gets the part's behaviour —
availability, activation, the focus rule below, and for columns the menu,
which the part still renders. The props carry the state attributes and
`type`, never the accessible name, so the text and the `aria-label` stay
yours.

```vue
<template #toolbar>
  <CDataGridToolbar>
    <CDataGridToolbarUndo v-slot="{ props }">
      <button v-bind="props" class="btn btn-outline-secondary btn-sm">Undo last change</button>
    </CDataGridToolbarUndo>
    <CDataGridToolbarColumns v-slot="{ props }">
      <button v-bind="props" class="btn btn-outline-secondary btn-sm">Fields</button>
    </CDataGridToolbarColumns>
  </CDataGridToolbar>
</template>
```

The `useDataGridToolbarExport`, `useDataGridToolbarPrint`,
`useDataGridToolbarUndo`, `useDataGridToolbarRedo` and
`useDataGridToolbarButton` composables do the same inside your own component
rendered in the slot. They take a getter of the options and return a computed
ref of the props, whose value is `null` outside a grid;
`useDataGridToolbarSearch()` takes no options and returns the same ref for an
`<input>`. `useDataGridToolbarColumns` returns `{ props, chooser }`:
bind `props.value` to the button and render `chooser()` next to it. Give an
own action to `CDataGridToolbarButton`'s `action` event or to
`useDataGridToolbarButton(() => ({ label, onAction }))` rather than to your
own click listener, so a held button (below) does not run it.

## Toolbar without parts

The `#toolbar` slot props carry `toolbar` — `canUndo`, `canRedo`, `undo`,
`redo` and `print` — next to `table` and `labels`, for a toolbar that uses no
part at all. Inside a component rendered in the slot, `useDataGridToolbar()`
returns `canUndo` and `canRedo` as computed refs, the same actions and
`table`, or `null` outside a grid.

## Accessibility

- **Focus stays on a button that becomes unavailable.** After the last undo
  the focused Undo button gets `aria-disabled="true"` and ignores activation
  until focus moves to another element; only then does it become natively
  `disabled`. The same applies to `CDataGridToolbarButton` switched to
  `disabled`. Disabled toolbar buttons keep their tooltip.
- **The column chooser is a menu** inside the grid, named by its trigger, with
  a checkable item per column. Arrow keys, Home and End move between the
  items, Space toggles a column and keeps the menu open, Enter toggles it and
  closes the menu. Escape on the menu or on the trigger closes it and returns
  focus to the trigger, Tab closes it and moves on from the trigger, and focus
  moving to an element outside closes it. A scroll or a window resize keeps it
  under its trigger, no taller than the room left below it.
- **Focus leaves the column chooser for another part** when the chooser goes
  away with its part or its feature while focus is inside it.
- **Announcements** — results counts and undo/redo — go to one page-level
  live region (`[data-coreui-live-announcer]`) shared with CoreUI components
  on the same page. Undo or redo that empties its stack says so in the same
  message, and undo of an edit whose row is gone announces that the change is
  no longer available.
