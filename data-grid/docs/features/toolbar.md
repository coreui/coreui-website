# Data Grid Toolbar

> Add a built-in Data Grid toolbar with a column chooser, CSV export button and global search — enabled with a single option or configured granularly.

The `toolbar` option adds a built-in chrome row above the grid with a
**column chooser**, a **CSV export** button, **Undo/Redo** buttons (with
[`history`](https://coreui.io/data-grid/docs/features/history/)) and a **global search** input. Each action drives an existing feature, so the toolbar is the ready-made
UI you would otherwise build with the [`toolbar` slot](https://coreui.io/data-grid/docs/features/slots/).

```js
new coreui.DataGrid(element, {
  columns,
  items,
  columnVisibility: true, // required for the column chooser
  toolbar: true,          // every action whose feature is enabled
})
```

`toolbar: true` enables each action whose underlying feature is on: **columns**
needs [`columnVisibility`](https://coreui.io/data-grid/docs/columns/ordering-visibility/), **export** is always
available, **undo/redo** needs [`history`](https://coreui.io/data-grid/docs/features/history/), and **search**
turns on the global filter. Pass a granular object to
pick actions individually — `search: true` is the same input as
[`globalFilter: true`](https://coreui.io/data-grid/docs/features/filtering/), so keep using whichever reads
better.

```js
new coreui.DataGrid(element, {
  columns,
  items,
  columnVisibility: true,
  toolbar: {
    columns: true,                  // column chooser popup
    export: { filename: 'users.csv' }, // CsvDownloadOptions pass-through
    history: true,                  // undo/redo buttons (needs history: true)
    search: true,                   // global search input
  },
})
```

```html
<div id="dataGridToolbar"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

new coreui.DataGrid(document.getElementById('dataGridToolbar'), {
  columns: [
    {
      key: 'id', label: '#', width: 90, hideable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ],
  items,
  itemKey: item => String(item.id),
  columnVisibility: true,
  pagination: { pageSize: 10 },
  toolbar: {
    columns: true,
    export: { filename: 'users.csv' },
    search: true
  }
})
```

## Column chooser

With `toolbar.columns` enabled the columns button opens a popup listing every
leaf column in visual order with a checkbox. Toggling a checkbox calls
`column.toggleVisibility()` live — there is no Apply step. Columns marked
`hideable: false` stay checked and disabled. The footer offers **Show all** and
**Reset** (Reset restores the initial `columnVisibility` object). Visibility
changes emit `visibilityChange.coreui.data-grid` just like the
[column menu](https://coreui.io/data-grid/docs/columns/menu/).

## Export

The export button downloads the current view as CSV by calling
[`downloadCsv({ scope: 'filtered' })`](https://coreui.io/data-grid/docs/features/csv-export/). Pass a
[`CsvDownloadOptions`](https://coreui.io/data-grid/docs/features/csv-export/) object as `toolbar.export` to set
`filename`, `delimiter`, `bom`, `sanitize` or `scope`.

## Icons

The toolbar buttons use the CoreUI icon set, overridable per-instance with the
`toolbarColumnsIcon`, `toolbarExportIcon`, `toolbarUndoIcon` and
`toolbarRedoIcon` string options (SVG markup, sanitized like every other
icon).

## Custom toolbar

The `toolbar` slot still **replaces** the whole toolbar; the built-in buttons are
not composable into a custom slot. For a fully custom toolbar — including a
hand-built column chooser — use the [`toolbar` slot](https://coreui.io/data-grid/docs/features/slots/) with the
headless `table` and public helpers (`downloadCsv`, `column.toggleVisibility`).
See the [column ordering & visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/) page for a
slot-based chooser.
