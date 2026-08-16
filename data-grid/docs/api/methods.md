# Data Grid Methods

> CoreUI Data Grid instance methods — selection, CSV export, updating options, disposal and the headless table getter.

Call these on the `DataGrid` instance returned by the constructor.

| Method | Description |
| --- | --- |
| `getSelectedItems()` | Returns the selected item objects. |
| `getCsv(options?)` | Returns the rows as an RFC-4180 CSV string. Options: `scope`, `delimiter`, `bom`, `sanitize`. See [CSV export](https://coreui.io/data-grid/docs/features/csv-export/). |
| `downloadCsv(options?)` | Downloads the CSV as a file. Same options plus `filename`. |
| `print()` | Prints every sorted and filtered row through a plain generated table, past virtualization and pagination. See [Print](https://coreui.io/data-grid/docs/features/print/). |
| `getState()` | Serializable snapshot of every user-adjustable state slice. See [Save & restore state](https://coreui.io/data-grid/docs/features/state/). |
| `restoreState(state)` | Applies a (partial) snapshot back onto the grid. |
| `undo()` | Reverts the most recent [edit commit](https://coreui.io/data-grid/docs/features/history/) by re-emitting `editCommit` with the values swapped. Requires `history: true`. |
| `redo()` | Re-applies the most recently undone edit commit. |
| `setItems(items)` | Replaces the data in place, preserving sorting, filters, selection and scroll. Pair with `itemKey` so selection follows items rather than row indexes. Ignored in [server-side mode](https://coreui.io/data-grid/docs/features/server-side-data/), where the `dataProvider` owns the data. |
| `update(options)` | Merges options and performs a full rebuild — sorting, filters, selection and scroll are reset. Use `setItems()` to swap data while keeping user state. |
| `dispose()` | Destroys the instance and removes the rendered UI. |
| `table` (getter) | The underlying headless table instance — the [headless escape hatch](https://coreui.io/data-grid/docs/api/headless/) for building custom UI. |
