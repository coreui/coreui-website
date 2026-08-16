# React Data Grid Methods

> React Data Grid helpers — CSV export functions, the default labels export and the tableRef escape hatch.

`<CDataGrid>` has no imperative instance methods — React re-renders the grid
when a prop changes, and unmounting cleans it up. What the vanilla grid exposes
as methods maps to exports and props instead:

| Export / prop | Description |
| --- | --- |
| `exportCsv(table, options?)` | Returns the rows as an RFC-4180 CSV string. Options: `scope`, `delimiter`, `bom`, `sanitize`. See [CSV export](https://coreui.io/data-grid/react/docs/features/csv-export/). |
| `downloadCsv(table, options?)` | Downloads the CSV as a file. Same options plus `filename`. |
| `DEFAULT_LABELS` | The default UI strings — extend rather than replace them. See [Localization](https://coreui.io/data-grid/react/docs/customization/localization/). |
| `tableRef` (prop) | A ref to the underlying headless table instance — the [headless escape hatch](https://coreui.io/data-grid/react/docs/api/headless/) for building custom UI. |

```tsx
import { CDataGrid, downloadCsv } from '@coreui/react-data-grid'

const tableRef = useRef<Parameters<typeof downloadCsv>[0]>(null)

<CDataGrid columns={columns} items={items} tableRef={tableRef} />

// later, e.g. in a button handler:
tableRef.current && downloadCsv(tableRef.current, { filename: 'users.csv' })
```

Selected rows arrive through the `onSelectionChange` callback (its
`selectedItems` argument) — see [Row selection](https://coreui.io/data-grid/react/docs/features/row-selection/). To
refresh data, pass a new `items` array; the grid re-renders on prop change.
