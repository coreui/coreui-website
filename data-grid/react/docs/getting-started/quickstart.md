# React Data Grid Quickstart

> Render your first CoreUI Data Grid for React in a few lines — columns, data, a stable row key, then your first feature.

This guide builds a working grid from scratch. It assumes you've
[installed](https://coreui.io/data-grid/react/docs/getting-started/installation/) `@coreui/react-data-grid` and loaded
its stylesheet.

## 1. The component

The grid renders wherever you place `<CDataGrid>`:

```tsx
import { CDataGrid } from '@coreui/react-data-grid'
import '@coreui/data-grid/dist/css/data-grid.css'
```

## 2. Columns and data

Define columns by `key` (the property to read from each item) and pass your
`items`:

```tsx
const items = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'editor' },
  { id: 3, name: 'Carol', role: 'viewer' },
]

<CDataGrid
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
  ]}
  items={items}
  itemKey={(item) => String(item.id)}
/>
```

`itemKey` returns a stable id per row. It's optional, but
[selection](https://coreui.io/data-grid/react/docs/features/row-selection/) needs it to survive sorting and filtering —
set it up front.

## 3. Turn on a feature

Every feature is a single prop. Add filtering and selection:

```tsx
<CDataGrid
  columns={columns}
  items={items}
  itemKey={(item) => String(item.id)}
  columnFilters // per-column filter row
  rowSelection // checkbox column with select-all
/>
```

Sorting is on by default. From here, explore the
[feature matrix](https://coreui.io/data-grid/react/docs/getting-started/features/) or jump to any feature page.

## 4. React to changes

The grid calls `onXxx` [callback props](https://coreui.io/data-grid/react/docs/api/events/) with structured state:

```tsx
<CDataGrid
  columns={columns}
  items={items}
  itemKey={(item) => String(item.id)}
  rowSelection
  onSelectionChange={(rowSelection, selectedItems) => {
    console.log(selectedItems)
  }}
/>
```

## What's next

- Handle large or remote data with [server-side data](https://coreui.io/data-grid/react/docs/features/server-side-data/).
- Customize cells with a column [`formatter` or `render`](https://coreui.io/data-grid/react/docs/columns/overview/).
- Replace built-in chrome with [slots](https://coreui.io/data-grid/react/docs/features/slots/) or drive the
  [headless table](https://coreui.io/data-grid/react/docs/api/headless/) directly.
