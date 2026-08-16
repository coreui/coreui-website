# React Data Grid Columns Overview

> Define React Data Grid columns — keys, labels, cheap value formatting with formatter, and rich cell content with render.

Columns are defined by the [`columns`](https://coreui.io/data-grid/react/docs/api/options/) prop. Each entry maps a
`key` in your data to a header and a cell. This page covers the essentials;
per-column features live on their own pages:
[sizing](https://coreui.io/data-grid/react/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/react/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/react/docs/columns/ordering-visibility/) and the
[column menu](https://coreui.io/data-grid/react/docs/columns/menu/).

## Defining columns

```tsx
<CDataGrid
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ]}
  items={items}
/>
```

`key` is the property read from each item and doubles as the column id. `label`
is the header text — it falls back to `key` when omitted.

## Formatting values

Use `formatter` to transform the displayed value. It's cheap and stays on the
scroll hot path, so it's the right tool for dates, numbers and currency:

```tsx
{
  key: 'createdAt',
  label: 'Created',
  formatter: (value) => new Date(value).toLocaleDateString(),
}
```

`formatter` output is also what [CSV export](https://coreui.io/data-grid/react/docs/features/csv-export/) writes.

## Rich cell content

Use `render` for full custom cell content — action buttons, badges, links.
`render` returns JSX and is **never** used for CSV export:

```tsx
{
  key: 'actions',
  label: '',
  render: (item) => (
    <button type="button" className="btn btn-sm btn-primary" onClick={() => edit(item)}>
      Edit
    </button>
  ),
}
```

Use `formatter` **or** `render` per column — `formatter` for values on the hot
path, `render` for interactive content. See the [column API](https://coreui.io/data-grid/react/docs/api/columns/) for
every key.
