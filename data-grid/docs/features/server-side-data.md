# Data Grid Server-Side Data

> Delegate sorting, filtering and pagination to your API with a single dataProvider function — the Data Grid fetches one debounced request per state change and drops stale responses.

Client-side mode ends where the browser's memory does. When your dataset lives
in a database with tens of thousands of rows or more, hand the work to your
backend: set `dataProvider` and the grid stops computing row models locally and
asks your API for each page instead. This is the single biggest adoption
unlocker for large data.

## Server-side data

Set `dataProvider` and the grid switches to server-side mode — every sorting,
filtering or pagination change triggers one debounced request (stale responses
are dropped automatically), a loading overlay covers the viewport and totals
come from your `totalRows`. Server-side mode implies pagination. This live demo
hits CoreUI's public demo API (`apitest.coreui.io/demos/users`) — 10,000+
records sorted, filtered and paged server-side.

```html
<div id="dataGridServer"></div>
```

```js
new coreui.DataGrid(document.getElementById('dataGridServer'), {
  columns: [
    { key: 'first_name', label: 'First name' },
    { key: 'last_name', label: 'Last name' },
    { key: 'email', label: 'Email' },
    { key: 'country', label: 'Country' },
    { key: 'ip_address', label: 'IP' }
  ],
  itemKey: item => String(item.id),
  columnFilters: true,
  async dataProvider({ sorting, columnFilters, pagination }) {
    const params = new URLSearchParams({
      offset: String(pagination.pageIndex * pagination.pageSize),
      limit: String(pagination.pageSize)
    })
    for (const { id, value } of columnFilters) {
      params.append(id, String(value))
    }

    const [sort] = sorting
    if (sort) {
      params.append('sort', `${sort.id}%${sort.desc ? 'desc' : 'asc'}`)
    }

    const response = await fetch(`https://apitest.coreui.io/demos/users?${params}`)
    const result = await response.json()
    const totalRows = Number(result.number_of_matching_records)
    return { items: totalRows ? result.records : [], totalRows }
  }
})
```

## The dataProvider contract

```js
new coreui.DataGrid(element, {
  columns,
  dataProvider: async ({ sorting, columnFilters, globalFilter, pagination }) => {
    // fetch from your API and return the matching page
    return { items, totalRows }
  },
  pagination: true, // server-side mode implies pagination
})
```

- **One request per state change.** `sorting`, `columnFilters`, `globalFilter`
  and `pagination` arrive as structured state; return the page of `items` plus the
  full `totalRows` count so the pager can render.
- **Debounced & race-safe.** Rapid changes coalesce into one request and only
  the latest response is applied — stale ones are dropped by request id.
- **Loading UX.** A `.data-grid-loading` overlay with a spinner covers the
  viewport and `aria-busy` is set while a request is in flight
  (`labels.loading`).
- **Errors.** A rejected fetch emits `dataError.coreui.data-grid` `{ error }`,
  shows the empty state (`labels.loadError`) and leaves the grid interactive.
- **Success.** Each load emits `dataLoad.coreui.data-grid` `{ items, totalRows }`.

## Selection semantics

`rowSelection` is keyed by [`itemKey`](https://coreui.io/data-grid/docs/api/options/), so a selection survives
page changes by design. `getSelectedItems()` returns only the items present in
the current page's data — the grid does not cache full objects for pages it has
scrolled past.

The same page-bound rule applies to [CSV export](https://coreui.io/data-grid/docs/features/csv-export/): in
server-side mode every scope (`filtered`, `all`, `selected`) exports the
currently loaded page only.

When the [filter menu](https://coreui.io/data-grid/docs/features/filtering/) is used, a column's entry in
`columnFilters` carries the structured value — `{ conditions: [{ operator,
value, value2? }], join: 'and' | 'or' }` for typed operators or `{ operator:
'in', value: [...] }` for the set filter — instead of a plain string. Servers
should handle both shapes.
