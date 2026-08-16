# React Data Grid Sorting

> Sort the React Data Grid by clicking a header, add multi-column sorting with shift+click, and opt individual columns out.

Sorting is **on by default**. Click a header to toggle ascending ↔ descending
(set `resetable: true` for a third click that clears the sort); the sort runs
across the whole dataset, not just the visible window. Shift+click a second
header to sort by more than one column at once.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

export const DataGridSortingExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length],
          score: (i * 37) % 1000
        }
      }),
    []
  )

  return (
    <CDataGrid
      columns={[
        { key: 'id', label: '#', width: 90 },
        { key: 'name', label: 'Name' },
        {
 key: 'email', label: 'Email', style: { width: '30%' }, sortable: false
},
        { key: 'role', label: 'Role', width: 110 },
        { key: 'score', label: 'Score', width: 110 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      sorting={{ multiple: true }}
      pagination={{ pageSize: 10 }}
    />
  )
}
```

## Usage

```tsx
<CDataGrid
  columns={columns}
  items={items}
  sorting // the default — pass an object to configure it
/>
```

Pass an object to tune the behavior:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `true` | Allow sorting by more than one column with shift+click. |
| `resetable` | `boolean` | `false` | Allow a third click to clear the column's sort. |

Disable sorting for a single column with `sortable: false` in its
[definition](https://coreui.io/data-grid/react/docs/api/columns/), or turn it off entirely with `sorting={false}`.

## Sort icon visibility

Only the **active** sort direction (the ascending/descending arrow) shows by
default — the neutral, unsorted indicator stays hidden to keep headers clean.
Set `sorterVisibility` to surface it on every sortable column:

| Value | Behavior |
| --- | --- |
| `'always'` | The neutral icon is always visible (dimmed) on sortable columns. |
| `'hover'` | The neutral icon appears when the header is hovered or focused. |

```tsx
<CDataGrid
  columns={columns}
  items={items}
  sorterVisibility="hover"
/>
```

## Multi-column sorting

With `multiple` enabled (the default), **shift+click** a second header to add it
to the sort instead of replacing the first. The sort priority follows click
order. Below, click **Department**, then shift+click **Salary** — the readout
shows the active sort and its priority.

```html
import { CDataGrid, type SortingState } from '@coreui/react-data-grid'
import { useMemo, useState } from 'react'

const departments = ['Engineering', 'Design', 'Sales']
const labels: Record<string, string> = { name: 'Name', department: 'Department', salary: 'Salary' }

export const DataGridSortingMultiExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        department: departments[i % departments.length],
        salary: 40000 + ((i * 137) % 60000)
      })),
    []
  )

  const [sorting, setSorting] = useState<SortingState>([])

  return (
    <>
      <CDataGrid
        columns={[
          {
 key: 'id', label: '#', width: 90, sortable: false
},
          { key: 'name', label: 'Name' },
          { key: 'department', label: 'Department', width: 160 },
          { key: 'salary', label: 'Salary', width: 140 }
        ]}
        items={items}
        itemKey={item => String(item.id)}
        sorting={{ multiple: true }}
        pagination={{ pageSize: 10 }}
        onSortingChange={setSorting}
      />
      <p className="text-body-secondary small mt-2">
        {sorting.length ?
          `Sorted by: ${sorting
              .map((sort, index) => `${index + 1}. ${labels[sort.id]} ${sort.desc ? '↓' : '↑'}`)
              .join('   ')}` :
          'Click a header, then shift+click another to sort by multiple columns.'}
      </p>
    </>
  )
}
```

## Reacting to sort changes

Each change calls `onSortingChange` with the grid's `sorting` state:

```tsx
<CDataGrid
  columns={columns}
  items={items}
  onSortingChange={(sorting) => {
    console.log(sorting) // [{ id: 'name', desc: false }]
  }}
/>
```

In [server-side mode](https://coreui.io/data-grid/react/docs/features/server-side-data/) the same `sorting` state is
handed to your `dataProvider` so your API does the ordering.
