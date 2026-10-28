# Data Grid Columns Overview

> Define CoreUI Data Grid columns — keys, labels, cheap value formatting with formatter, rich cell content with render, plus row and cell classes with rowClass and cellClass.

Columns are defined by the [`columns`](https://coreui.io/data-grid/docs/api/options/) array. Each entry maps a
`key` in your data to a header and a cell. This page covers the essentials;
per-column features live on their own pages:
[sizing](https://coreui.io/data-grid/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/docs/columns/ordering-visibility/) and the
[column menu](https://coreui.io/data-grid/docs/columns/menu/).

## Defining columns

```js
new coreui.DataGrid(element, {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ],
  items,
})
```

`key` is the property read from each item and doubles as the column id. `label`
is the header text — it falls back to `key` when omitted.

## Formatting values

Use `formatter` to transform the displayed value. It's cheap and stays on the
scroll hot path, so it's the right tool for dates, numbers and currency:

```js
{
  key: 'createdAt',
  label: 'Created',
  formatter: (value) => new Date(value).toLocaleDateString(),
}
```

`formatter` output is also what [CSV export](https://coreui.io/data-grid/docs/features/csv-export/) writes.

## Rich cell content

Use `render` for full custom cell content — action buttons, badges, links.
`render` returns a DOM node or HTML string and is **never** used for CSV export:

```js
{
  key: 'actions',
  label: '',
  render: (item) => {
    const button = document.createElement('button')
    button.className = 'btn btn-sm btn-primary'
    button.textContent = 'Edit'
    button.addEventListener('click', () => edit(item))
    return button
  },
}
```

Use `formatter` **or** `render` per column — `formatter` for values on the hot
path, `render` for interactive content. See the [column API](https://coreui.io/data-grid/docs/api/columns/) for
every key.

## Row and cell classes

`rowClass` (an option) and `cellClass` (a column key) return classes the grid adds next to its
own on data rows and cells: colour a row by status, flag a value, mark edited
rows. Both run on every render of the row, so the classes follow sorting,
selection and new `items` on their own:

```js
new coreui.DataGrid(element, {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'status', label: 'Status' },
    { key: 'stock', label: 'Stock', cellClass: ({ value }) => (value === 0 ? 'text-danger-emphasis fw-semibold' : undefined) },
  ],
  items,
  rowClass: ({ item }) => (item.status === 'blocked' ? 'table-danger' : undefined),
})
```

`rowClass` receives `{ item, row, rowIndex }` and `cellClass`
`{ value, item, row, cell, column }`; `row` and `cell` are the TanStack
objects, so state such as `row.getIsSelected()` is there too. Return a string
with one or more classes, or `undefined`. The grid's own classes
(`data-grid-row-odd`, `table-active`, `data-grid-cell-selected`) reflect its
state, and returning one of them is not supported: it does not change that
state, and whether the row or cell shows it differs by edition. Only data rows and
cells get the classes, not the header, the filter row or the empty state. To
mark edited cells, see [Tracking edits](https://coreui.io/data-grid/docs/features/editing/#tracking-edits).

A class only paints the row or the cell. Keep the meaning in text as well, as
the `status` column does above, so it does not rest on colour alone, screen
readers announce it, and it survives forced colours, which drop backgrounds.
