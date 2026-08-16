# Angular Data Grid Columns Overview

> Define CoreUI Data Grid for Angular columns — keys, labels, cheap value formatting with formatter, and rich cell content with cDataGridCell templates.

Columns are defined by the [`columns`](https://coreui.io/data-grid/angular/docs/api/options/) array. Each entry maps a
`key` in your data to a header and a cell. This page covers the essentials;
per-column features live on their own pages:
[sizing](https://coreui.io/data-grid/angular/docs/columns/sizing/), [pinning](https://coreui.io/data-grid/angular/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/) and the
[column menu](https://coreui.io/data-grid/angular/docs/columns/menu/).

## Defining columns

```ts
readonly columns: DataGridColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
]
```

```html
<c-data-grid [columns]="columns" [items]="items" />
```

`key` is the property read from each item and doubles as the column id. `label`
is the header text — it falls back to `key` when omitted.

## Formatting values

Use `formatter` to transform the displayed value. It's cheap and stays on the
scroll hot path, so it's the right tool for dates, numbers and currency:

```ts
{
  key: 'createdAt',
  label: 'Created',
  formatter: (value) => new Date(String(value)).toLocaleDateString()
}
```

`formatter` output is also what [CSV export](https://coreui.io/data-grid/angular/docs/features/csv-export/) writes.

## Rich cell content

Use an `<ng-template cDataGridCell="key">` for full custom cell content —
action buttons, badges, links. The template receives the item (implicit),
`index` and `value` in its context and is **never** used for CSV export:

```html
<c-data-grid [columns]="columns" [items]="items">
  <ng-template cDataGridCell="actions" let-item>
    <button type="button" class="btn btn-sm btn-primary" (click)="edit(item)">Edit</button>
  </ng-template>
</c-data-grid>
```

Import `DataGridCellDirective` alongside `DataGridComponent` to use the
template. Use `formatter` **or** a cell template per column — `formatter` for
values on the hot path, the template for interactive content. See the
[column API](https://coreui.io/data-grid/angular/docs/api/columns/) for every key.
