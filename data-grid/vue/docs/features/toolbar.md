# Vue Data Grid Toolbar

> Add a built-in Data Grid toolbar with a column chooser, CSV export button and global search — enabled with a single prop or configured granularly.

The `toolbar` prop adds a built-in chrome row above the grid with a
**column chooser**, a **CSV export** button, **Undo/Redo** buttons (with
[`history`](https://coreui.io/data-grid/vue/docs/features/history/)) and a **global search** input. Each action drives an existing feature, so the toolbar is the ready-made
UI you would otherwise build with the [`toolbar` slot](https://coreui.io/data-grid/vue/docs/features/slots/).

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

With `toolbar.columns` enabled the columns button opens a popup listing every
leaf column in visual order with a checkbox. Toggling a checkbox calls
`column.toggleVisibility()` live — there is no Apply step. Columns marked
`hideable: false` stay checked and disabled. The footer offers **Show all** and
**Reset** (Reset restores the initial `columnVisibility` object). Visibility
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

The `toolbar` slot still **replaces** the whole toolbar; the built-in buttons are
not composable into a custom slot. For a fully custom toolbar — including a
hand-built column chooser — use the [`toolbar` slot](https://coreui.io/data-grid/vue/docs/features/slots/) with the
headless `table` and public helpers (`downloadCsv`, `column.toggleVisibility`).
See the [column ordering & visibility](https://coreui.io/data-grid/vue/docs/columns/ordering-visibility/) page for a
slot-based chooser.
