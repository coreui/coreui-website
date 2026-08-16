# React Data Grid Row Selection

> Add a checkbox column to the React Data Grid with select-all and shift+click range selection, keyed to a stable row id so selection survives sorting, filtering and paging.

`rowSelection` adds a checkbox column with a select-all header and shift+click
range selection. Selection is keyed by [`itemKey`](https://coreui.io/data-grid/react/docs/api/options/), so a selected
row stays selected as the user sorts, filters or pages — set `itemKey` whenever
you enable selection. Select a few rows below, then page or sort — the selection
holds.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo, useState } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

export const DataGridRowSelectionExample = () => {
  const [selectedCount, setSelectedCount] = useState(0)

  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length]
        }
      }),
    []
  )

  return (
    <>
      <CDataGrid
        columns={[
          { key: 'id', label: '#', width: 90 },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email', style: { width: '30%' } },
          { key: 'role', label: 'Role', width: 110 }
        ]}
        items={items}
        itemKey={item => String(item.id)}
        rowSelection
        pagination={{ pageSize: 10 }}
        onSelectionChange={rowSelection => setSelectedCount(Object.keys(rowSelection).length)}
      />
      <p className="text-body-secondary mt-2 mb-0">
        {selectedCount ? `${selectedCount} rows selected` : 'No rows selected'}
      </p>
    </>
  )
}
```

## Usage

```tsx
<CDataGrid
  columns={columns}
  items={items}
  itemKey={(item) => String(item.id)} // required for stable selection
  rowSelection
/>
```

Pass an object to configure it:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `selectAll` | `boolean` | `true` | Show the select-all checkbox in the header. |

The [pagination demo](https://coreui.io/data-grid/react/docs/features/pagination/) shows selection in action alongside
a custom actions column.

## Reading the selection

Listen for changes with `onSelectionChange` — it receives the row-selection
state and the selected item objects:

```tsx
<CDataGrid
  columns={columns}
  items={items}
  itemKey={(item) => String(item.id)}
  rowSelection
  onSelectionChange={(rowSelection, selectedItems) => {
    console.log(selectedItems)
    console.log(rowSelection) // row-selection state
  }}
/>
```

## With pinning and server-side data

When a column is pinned to the start and selection is on, the checkbox column travels
with it — see [Column pinning](https://coreui.io/data-grid/react/docs/columns/pinning/). In
[server-side mode](https://coreui.io/data-grid/react/docs/features/server-side-data/), selection is id-keyed so it
survives page changes, but `selectedItems` contains only the items present in
the current page's data.
