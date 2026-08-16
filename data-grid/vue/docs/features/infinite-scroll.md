# Vue Data Grid Infinite Scroll

> Load a server-side dataset page by page as the user scrolls — the Vue Data Grid appends each page to the rows already in view and keeps virtualization on instead of switching to a pager.

[Server-side data](https://coreui.io/data-grid/vue/docs/features/server-side-data/) normally replaces the rows on
every page change: you get a pager, and page 2 makes page 1 disappear. Infinite
scroll keeps them. Each request appends to a growing buffer behind the
[virtualizer](https://coreui.io/data-grid/vue/docs/features/virtualization/), so the user scrolls one continuous
list while the grid quietly fetches what is below the fold.

## Infinite scroll

Set `infinite-scroll` alongside `data-provider`. There is no pager: the grid
requests the next page when the last rendered row comes within `threshold` rows
of the end of what is loaded, and stops once `totalRows` is reached. This live
demo hits CoreUI's public demo API (`apitest.coreui.io/demos/users`) — scroll to
pull in the next 50 records.

```html
<script setup lang="ts">
import { CDataGrid } from '@coreui/vue-data-grid'
import type { DataGridDataRequest } from '@coreui/vue-data-grid'

const dataProvider = async ({ sorting, pagination }: DataGridDataRequest) => {
  const params = new URLSearchParams({
    offset: String(pagination.pageIndex * pagination.pageSize),
    limit: String(pagination.pageSize)
  })

  const [sort] = sorting
  if (sort) {
    params.append('sort', `${sort.id}%${sort.desc ? 'desc' : 'asc'}`)
  }

  const response = await fetch(`https://apitest.coreui.io/demos/users?${params}`)
  const result = await response.json()
  const totalRows = Number(result.number_of_matching_records)

  return { items: totalRows ? result.records : [], totalRows }
}

const columns = [
  { key: 'first_name', label: 'First name' },
  { key: 'last_name', label: 'Last name' },
  { key: 'email', label: 'Email' },
  { key: 'country', label: 'Country' },
  { key: 'ip_address', label: 'IP' }
]
</script>

<template>
  <!-- The token is inherited, so it reaches the grid from any ancestor. -->
  <div style="--cui-data-grid-viewport-max-height: 400px">
    <CDataGrid
      :columns="columns"
      :data-provider="dataProvider"
      :infinite-scroll="{ pageSize: 50 }"
      :item-key="(item) => String(item.id)"
    />
  </div>
</template>
```

## Options

```vue
<CDataGrid
  :columns="columns"
  :data-provider="dataProvider"
  :infinite-scroll="{
    pageSize: 50, // rows per request (default 50)
    threshold: 10 // rows left below the last rendered one (defaults to overscan)
  }"
/>
```

`infinite-scroll` takes both defaults. `pageSize` is what the grid sends
as `pagination.pageSize`, so your `data-provider` contract does not change — the
same offset/limit handler serves both modes.

## Requirements

Infinite scroll is a mode, not a modifier, and the grid throws on a
contradictory setup rather than silently picking one:

- **`data-provider` is required.** A local `items` array is already fully
  rendered by virtualization; there is nothing to fetch.
- **`pagination` cannot be combined with it.** Both own the page index, so the
  grid rejects the pair.
- **`virtualization` is required** (it is on by default). The trigger is a row
  index in the rendered window, which is what makes it work with
  [auto row height](https://coreui.io/data-grid/vue/docs/features/virtualization/#auto-row-height).

## Behavior

- **The buffer only grows.** `pageIndex` 0 replaces it; every later page
  appends. Rows already on screen keep their index, their measured height, their
  selection and the keyboard focus.
- **Sorting, filters and search reset it.** Any of them returns to page 0,
  replaces the buffer and scrolls back to the top — the old rows no longer
  describe the new query.
- **Loading UX.** The first page shows the usual `.data-grid-loading` overlay.
  Every later page shows `.data-grid-loading-more`, a sticky strip at the bottom
  of the viewport, so the rows already loaded stay readable.
- **Events.** Each page emits `@data-load with { items, totalRows }` with that page's items.
  `@pagination-change` does **not** fire: pagination is internal here, with
  no widget and nothing for the user to set.
- **`aria-rowcount`** is the full `totalRows`, and each row's `aria-rowindex` is
  its absolute position — assistive technology announces "row 60 of 10,000"
  while only 60 rows exist in the DOM.

## Selection and export

Both stay page-bound, exactly as in [server-side
mode](https://coreui.io/data-grid/vue/docs/features/server-side-data/#selection-semantics): `getSelectedItems()` and
every [CSV](https://coreui.io/data-grid/vue/docs/features/csv-export/) or [Excel](https://coreui.io/data-grid/vue/docs/features/excel-export/) scope see
the rows currently in the buffer. With infinite scroll that buffer is everything
scrolled so far rather than a single page, so it grows as the user goes.
