# Vue Data Grid Feature Sets & Bundle Size

> Pick the TanStack feature set your grid actually uses — pass dataGridLiteFeatures and your bundler drops the features you never registered.

The grid registers a set of TanStack Table features at construction. Options
gate *behavior*; the feature set gates *registration* — an API only exists on
the table when its feature is registered. Because `@tanstack/vue-table` is
a regular dependency of your app bundle, the feature set you pass is what
your bundler ships: with `dataGridLiteFeatures` the unregistered features are
tree-shaken away.

| Preset | Covers |
| --- | --- |
| `dataGridFeatures` (default) | everything: sorting, filtering, faceted set filters, global search, pagination, selection, visibility, ordering, pinning, sizing/resizing |
| `dataGridLiteFeatures` | sorting, filtering (incl. the toolbar search) and pagination — the TanStack core shrinks from ~25 KB to ~14 KB gzip |

```vue
<script setup>
import { CDataGrid, dataGridLiteFeatures } from '@coreui/vue-data-grid'
</script>

<template>
  <CDataGrid
    :columns="columns"
    :features="dataGridLiteFeatures"
    :items="items"
    :pagination="{ pageSize: 20 }"
    :toolbar="{ search: true }"
  />
</template>
```

The set is static per table instance — change it together with a remount, not
on the fly. You can also compose your own set with `tableFeatures({...})`
from `@tanstack/vue-table`; the option-coverage check below tells you when
a config needs more than the set provides.

## What a lite grid can and cannot do

Everything driven by sorting, column filters, the global search and
pagination works exactly like the full set — `dataGridLiteFeatures` keeps the
same sort and filter functions. Props whose feature is missing from the set
throw at construction with the pair spelled out, instead of failing somewhere
mid-render:

```
DATA-GRID: Option "columnPinning" requires feature "columnPinningFeature" in "features".
```

That covers `columnPinning`, `columnSizing`, `columnVisibility`,
`columnOrder`, `rowSelection` and `filterType: 'select'` columns (the faceted
value list needs faceting). CSV export and [state persistence](https://coreui.io/data-grid/vue/docs/features/state/)
degrade gracefully: the export follows whatever layout the registered
features track, and a state snapshot taken on one feature set restores into a
grid running another — absent slices are skipped.

TypeScript keeps the surface honest: the exposed `table`, scoped-slot props
and custom filter slot props carry the grid's feature set as a type
parameter, so a lite table never claims APIs its runtime did not register.
