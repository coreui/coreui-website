# React Data Grid Column Pinning

> Freeze React Data Grid columns to the start or end edge so they stay visible while the rest of the grid scrolls horizontally.

Keep an identifier or an actions column in view while users scroll a wide grid
sideways. Pinning freezes columns against the start or end edge with sticky
positioning; everything else scrolls between them.

## Column pinning

Freeze columns against the start or end edge with
`columnPinning={{ start, end }}` — they stay put while the rest of the grid
scrolls horizontally. Pass `columnPinning` on its own to enable the feature and
pin later through the headless table (`tableRef.current?.setColumnPinning(...)`).
When a column is pinned to the start and selection is on, the checkbox column
travels with it. The last start-pinned and first end-pinned column cast a shadow
over the scrolling content.

The regions are logical, not physical: `start` is the left edge in LTR and the
right edge in RTL (the sticky offsets use `inset-inline-start`/`inset-inline-end`).
Pinning moves the column to its edge — the rendered order is always
start-pinned, center, end-pinned.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const countries = ['Poland', 'Germany', 'France', 'Spain', 'Italy']

export const DataGridPinningExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        firstName: firstNames[i % firstNames.length],
        lastName: lastNames[i % lastNames.length],
        email: `${firstNames[i % firstNames.length].toLowerCase()}${i}@example.com`,
        country: countries[i % countries.length]
      })),
    []
  )

  return (
    <CDataGrid
      columns={[
        { key: 'id', label: '#', width: 80 },
        { key: 'firstName', label: 'First name', width: 160 },
        { key: 'lastName', label: 'Last name', width: 160 },
        { key: 'email', label: 'Email', width: 260 },
        { key: 'country', label: 'Country', width: 200 },
        {
          key: 'actions',
          label: '',
          sortable: false,
          width: 120,
          render: item => (
            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={() => alert(`Edit ${item.firstName} (#${item.id})`)}
            >
              Edit
            </button>
          )
        }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      columnPinning={{ start: ['id'], end: ['actions'] }}
      rowSelection
      pagination={{ pageSize: 10 }}
    />
  )
}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnPinning` | `boolean \| { start?: string[], end?: string[] }` | `false` | Freezes columns (by `key`) to the start/end edge. `true` enables the feature with no initial pins. |

Pinning calls `onPinningChange` with the grid's `columnPinning` state.
Reordering via [column ordering](https://coreui.io/data-grid/react/docs/columns/ordering-visibility/) never crosses a
pinning boundary.
