# React Data Grid Save & Restore State

> Persist the React Data Grid view — sorting, filters, column order, sizing, visibility, pinning, selection and page — to localStorage with a single prop.

`stateKey` makes the grid's view persistent: every user-adjustable state slice
— sorting, column filters and the global search, column order, sizing,
visibility and pinning, row selection and the page — **autosaves to
`localStorage`** under the key (debounced) and **restores automatically on the
next mount**. No buttons, nothing to wire up. Sort or resize below, reload the
page — the grid comes back as you left it.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const roles = ['admin', 'editor', 'viewer']

export const DataGridStateExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: roles[i % roles.length]
      })),
    []
  )

  return (
    <CDataGrid
      columns={[
        { key: 'id', label: '#', width: 90 },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        { key: 'role', label: 'Role', width: 110 }
      ]}
      columnSizing
      columnVisibility
      globalFilter
      items={items}
      itemKey={item => String(item.id)}
      stateKey="docs-state-demo-react"
      toolbar
    />
  )
}
```

## Usage

```tsx
<CDataGrid
  columns={columns}
  items={items}
  itemKey={(item) => String(item.id)} // keeps restored selection meaningful
  stateKey="users-grid"               // localStorage identity — that's it
/>
```

Every state change writes the snapshot (debounced at 250 ms) to
`localStorage` under `coreui-data-grid:<stateKey>`; the next grid mounted with
the same key restores it before first render.

## Reading the snapshot

The saved snapshot is
`{ sorting, columnFilters, globalFilter, columnOrder, columnPinning, columnSizing, columnVisibility, pagination, rowSelection }`
(the `DataGridState` type). For your own storage, collect the slices from the
`onXxxChange` callbacks — or read them off the exposed
[`tableRef`](https://coreui.io/data-grid/react/docs/api/options/) — and hand a saved snapshot back by mounting the
grid with `stateKey` pointing at it.

## What is (and isn't) state

- Row selection restores by row id — set [`itemKey`](https://coreui.io/data-grid/react/docs/api/options/) or the
  restored ids point at positions, not rows.
- In [server-side mode](https://coreui.io/data-grid/react/docs/features/server-side-data/) the restored
  sorting/filters/page are applied **before the first request**, so the grid
  loads straight into the saved view.
- Scroll position and an in-flight [edit](https://coreui.io/data-grid/react/docs/features/editing/) draft are not
  state. Data edits aren't either — undoing those is what
  [undo & redo](https://coreui.io/data-grid/react/docs/features/history/) is for.
- Restoring calls the matching `onXxxChange` callbacks for every slice that
  changed — your app sees a restore exactly like user interaction.
