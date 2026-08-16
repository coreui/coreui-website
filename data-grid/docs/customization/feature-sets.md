# Data Grid Feature Sets & Bundle Size

> Pick the TanStack feature set your grid actually uses — the lite build covers sorting, filtering and pagination at 52 KB gzipped, the full build everything at 63 KB.

The grid registers a set of TanStack Table features at construction. Options
gate *behavior*; the feature set gates *registration* — an API only exists on
the table when its feature is registered, and unregistered features cost
nothing at runtime. Two presets ship with the package:

| Preset | Covers | Bundle |
| --- | --- | --- |
| `dataGridFeatures` (default) | everything: sorting, filtering, faceted set filters, global search, pagination, selection, visibility, ordering, pinning, sizing/resizing | `data-grid.min.js` — 55,534 B gzip |
| `dataGridLiteFeatures` | sorting, filtering (incl. the toolbar search) and pagination | `data-grid.lite.min.js` — 48,440 B gzip |

A grid that only sorts, filters and pages does not need the default build.
The lite bundle pairs the same `DataGrid` with `dataGridLiteFeatures` as its
default set and never references the rest:

```js
import { DataGrid } from '@coreui/data-grid/lite'

const grid = new DataGrid('#grid', {
  columns,
  items,
  pagination: { pageSize: 20 },
  toolbar: { search: true }
})
```

Or as a script tag: `dist/js/data-grid.lite.min.js` exposes the same
`coreui.DataGrid` global.

The main build also accepts the preset per instance — useful when one page
mixes full and lite grids (the bundle then carries the full set either way):

```js
import { DataGrid, dataGridLiteFeatures } from '@coreui/data-grid'

const grid = new DataGrid('#grid', { columns, items, features: dataGridLiteFeatures })
```

## What a lite grid can and cannot do

Everything driven by sorting, column filters, the global search and
pagination works exactly like the full build — the lite set keeps the same
sort and filter functions. Options whose feature is missing from the set
throw at construction with the pair spelled out, instead of failing somewhere
mid-render:

```
DATA-GRID: Option "columnPinning" requires feature "columnPinningFeature" in "features".
```

That covers `columnPinning`, `columnSizing`, `columnVisibility`,
`columnOrder`, `rowSelection` and `filterType: 'select'` columns (the faceted
value list needs faceting). CSV export and [state persistence](https://coreui.io/data-grid/docs/features/state/)
degrade gracefully: the export follows whatever layout the registered
features track, and a state snapshot taken on one feature set restores into a
grid running another — absent slices are skipped.

The framework bindings expose the same choice as a `features` prop/input and
get the size win from the app's own bundler instead of a second file — see
the React, Vue and Angular editions of this page.
