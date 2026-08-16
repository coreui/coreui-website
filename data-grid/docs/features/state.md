# Data Grid Save & Restore State

> Persist the CoreUI Data Grid view — sorting, filters, column order, sizing, visibility, pinning, selection and page — to localStorage with a single option, or snapshot it programmatically.

`stateKey` makes the grid's view persistent: every user-adjustable state slice
— sorting, column filters and the global search, column order, sizing,
visibility and pinning, row selection and the page — **autosaves to
`localStorage`** under the key (debounced) and **restores automatically on the
next visit**. No buttons, nothing to wire up. Sort or resize below, reload the
page — the grid comes back as you left it.

```html
<div id="dataGridState"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

new coreui.DataGrid(document.getElementById('dataGridState'), {
  columns: [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ],
  items,
  itemKey: item => String(item.id),
  columnVisibility: true,
  columnSizing: true,
  globalFilter: true,
  stateKey: 'docs-state-demo',
  toolbar: true
})
```

## Usage

```js
new coreui.DataGrid(element, {
  columns,
  items,
  itemKey: (item) => String(item.id), // keeps restored selection meaningful
  stateKey: 'users-grid',             // localStorage identity — that's it
})
```

Every state change writes the snapshot (debounced at 250 ms) to
`localStorage` under `coreui-data-grid:<stateKey>`; the next grid constructed
with the same key restores it before first render.

## Programmatic snapshots

The persistence layer is optional — the snapshot API works without `stateKey`:

```js
const state = grid.getState()      // serializable: JSON.stringify(state) is safe
grid.restoreState(state)           // applies any subset of the slices
```

`getState()` returns
`{ sorting, columnFilters, globalFilter, columnOrder, columnPinning, columnSizing, columnVisibility, pagination, rowSelection }`.
Hand it to your own storage (a user-profile API, the URL) and feed it back
through `restoreState()` — partial snapshots are fine, absent slices keep
their current values.

## What is (and isn't) state

- Row selection restores by row id — set [`itemKey`](https://coreui.io/data-grid/docs/api/options/) or the
  restored ids point at positions, not rows.
- In [server-side mode](https://coreui.io/data-grid/docs/features/server-side-data/) the restored
  sorting/filters/page are applied **before the first request**, so the grid
  loads straight into the saved view.
- Scroll position and an in-flight [edit](https://coreui.io/data-grid/docs/features/editing/) draft are not
  state. Data edits aren't either — undoing those is what
  [undo & redo](https://coreui.io/data-grid/docs/features/history/) is for.
- Restoring fires the matching `*Change` events for every slice that changed —
  your app sees a restore exactly like user interaction.
