# Data Grid Slots & Custom Rendering

> Replace the Data Grid's toolbar, pagination and empty-state chrome with your own markup through the slots factory API.

Slots let you swap the grid's built-in chrome — `toolbar`, `pagination` and
`empty` — for your own UI while the grid keeps driving state through the
headless table. Reach for a slot when the default control isn't enough: a custom
toolbar with extra actions, a bespoke pager, or a richer empty state. For custom
*cell* content, use a column's [`formatter` or `render`](https://coreui.io/data-grid/docs/columns/overview/)
instead.

## Custom slots

Replace the grid's chrome — `toolbar`, `pagination` and `empty` — with your own
markup. A slot is a factory `({ table, labels }) => ({ element, update?, dispose? })`:
`element` is mounted in place of the built-in module, `update()` runs on every
grid render (read state from the headless `table`), and `dispose()` runs on
teardown. This demo swaps the built-in pagination for a minimal Previous/Next
control driven entirely through `table`.

```html
<div id="dataGridSlots"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

new coreui.DataGrid(document.getElementById('dataGridSlots'), {
  columns: [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ],
  items,
  itemKey: item => String(item.id),
  pagination: { pageSize: 10 },
  slots: {
    pagination({ table }) {
      const element = document.createElement('div')
      element.className = 'd-flex gap-2 align-items-center mt-2'

      const prev = document.createElement('button')
      prev.className = 'btn btn-sm btn-outline-secondary'
      prev.textContent = 'Previous'
      prev.addEventListener('click', () => table.previousPage())

      const next = document.createElement('button')
      next.className = 'btn btn-sm btn-outline-secondary'
      next.textContent = 'Next'
      next.addEventListener('click', () => table.nextPage())

      const info = document.createElement('span')
      info.className = 'text-body-secondary'

      element.append(prev, info, next)

      return {
        element,
        update() {
          const { pageIndex } = table.store.state.pagination
          info.textContent = `Page ${pageIndex + 1} of ${table.getPageCount()} · ${table.getRowCount()} items`
          prev.disabled = !table.getCanPreviousPage()
          next.disabled = !table.getCanNextPage()
        }
      }
    }
  }
})
```

Return a fresh `element` on every factory call — with `pagination.position: 'both'`
the factory runs once per position. A custom toolbar that hosts its own global
search still needs `globalFilter: true` for the query to reach the grid. The
`empty` slot also renders when a server load fails; use the `dataError` event to
tell the two apart.

## Slot contract

| Slot | Replaces | Signature |
| --- | --- | --- |
| `toolbar` | The toolbar above the grid | `({ table, labels }) => ({ element, update?, dispose? })` |
| `pagination` | The pagination bar | same |
| `empty` | The no-rows / load-error state | same |

- `element` — a DOM node mounted in place of the built-in module.
- `update()` — runs on every grid render; read current state from the headless
  [`table`](https://coreui.io/data-grid/docs/api/headless/).
- `dispose()` — runs on teardown; clean up listeners here.
