# Angular Data Grid Performance

> How CoreUI Data Grid for Angular stays fast at 100,000 rows, the inputs that tune rendering, and when to move paging to your backend.

The Data Grid is built to stay responsive on large datasets. This page explains
how it does that and the levers you have when you need to tune it.

## Why it's fast

- **Row virtualization.** Only the rows in the scroll viewport (plus a buffer)
  exist in the DOM — see [Virtualization](https://coreui.io/data-grid/angular/docs/features/virtualization/). A 100,000-row
  grid renders a few dozen `<tr>` elements, not 100,000.
- **Cheap cell values.** Column [`formatter`](https://coreui.io/data-grid/angular/docs/columns/overview/) runs on the
  scroll hot path and returns a string, so it stays cheap. Reserve the
  `cDataGridCell` template (which stamps embedded views) for the columns that
  truly need interactive content.
- **Debounced, race-safe fetches.** In
  [server-side mode](https://coreui.io/data-grid/angular/docs/features/server-side-data/), rapid state changes coalesce
  into one request and stale responses are dropped.

## Tuning levers

| Lever | Effect |
| --- | --- |
| `rowHeight` | The estimated row height (default `44`). Set it close to your real height so the virtualizer sizes the scroll area accurately. |
| `overscan` | Extra rows rendered above/below the viewport (default `10`). Raise it if you see blank rows during fast scrolling; lower it to shave DOM nodes. |
| `formatter` vs cell template | Prefer `formatter` for values on the hot path; a `cDataGridCell` template stamps a view per visible cell. |

## When to go server-side

Client-side mode keeps the whole dataset in memory. That's fine for tens of
thousands of rows, but past what the browser can hold — or when the data lives in
a database you don't want to ship whole — move sorting, filtering and paging to
your API with [server-side data](https://coreui.io/data-grid/angular/docs/features/server-side-data/). The grid then
holds only the current page.

## Rules of thumb

- A few thousand to ~100k rows in the browser → client-side with virtualization.
- Beyond that, or data behind an API → server-side mode.
- Keep `formatter` pure and cheap; it runs for every visible cell on every
  render.
