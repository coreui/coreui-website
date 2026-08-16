# React Data Grid Headless Table

> Drop down to the underlying headless table instance via tableRef to build custom React Data Grid UI and drive state imperatively.

The Data Grid is a thin, styled layer over a headless table engine. When the
built-in chrome isn't enough, turn it off and drive the grid from your own UI
through the `tableRef` prop — the same instance the grid renders from.

```tsx
import { CDataGrid } from '@coreui/react-data-grid'
import { useRef } from 'react'

const tableRef = useRef(null)

<CDataGrid
  columns={columns}
  items={items}
  pagination={false} // turn off built-in chrome you want to replace
  tableRef={tableRef}
/>

// Drive state imperatively through the underlying table instance:
tableRef.current?.setPageIndex(3)
tableRef.current?.getFilteredRowModel()
tableRef.current?.setColumnPinning({ left: ['name'] })
tableRef.current?.state.sorting
```

## When to reach for it

- **Custom chrome.** Build your own toolbar, pager or column chooser and wire it
  to `tableRef.current`. The [slots](https://coreui.io/data-grid/react/docs/features/slots/) API hands you the same
  `table` scoped to a mount point — prefer slots when you only need to replace
  one module.
- **Reading state.** `tableRef.current?.state` exposes sorting, filters,
  selection, pagination, pinning, order and visibility as structured state.
- **Imperative actions.** Set the page, toggle a column, change pinning or apply
  a filter without waiting for user interaction.

## Notes

Everything the built-in UI does routes through this same table, so your
imperative calls and the built-in controls stay in sync. The grid's
[callbacks](https://coreui.io/data-grid/react/docs/api/events/) fire for headless-driven changes too.
