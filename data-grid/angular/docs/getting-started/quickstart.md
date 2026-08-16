# Angular Data Grid Quickstart

> Render your first CoreUI Data Grid for Angular in a few lines — columns, data, a stable row key, then your first feature.

This guide builds a working grid from scratch. It assumes you've
[installed](https://coreui.io/data-grid/angular/docs/getting-started/installation/) `@coreui/angular-data-grid` and
loaded the grid stylesheet.

## 1. The component

`DataGridComponent` is standalone — import it and drop `<c-data-grid>` into
your template:

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'

@Component({
  selector: 'app-users',
  imports: [DataGridComponent],
  template: `<c-data-grid [columns]="columns" [items]="items" [itemKey]="itemKey" />`
})
export class UsersComponent {}
```

## 2. Columns and data

Define columns by `key` (the property to read from each item) and bind your
`items`:

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

@Component({
  selector: 'app-users',
  imports: [DataGridComponent],
  template: `<c-data-grid [columns]="columns" [items]="items" [itemKey]="itemKey" />`
})
export class UsersComponent {
  readonly columns: DataGridColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' }
  ]

  readonly items: DataGridItem[] = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'editor' },
    { id: 3, name: 'Carol', role: 'viewer' }
  ]

  readonly itemKey = (item: DataGridItem) => String(item.id)
}
```

`itemKey` returns a stable id per row. It's optional, but
[selection](https://coreui.io/data-grid/angular/docs/features/row-selection/) needs it to survive sorting and filtering —
set it up front.

## 3. Turn on a feature

Every feature is a single input. Add filtering and selection:

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [itemKey]="itemKey"
  [columnFilters]="true"
  [globalFilter]="true"
  [rowSelection]="true"
/>
```

Sorting is on by default. From here, explore the
[feature matrix](https://coreui.io/data-grid/angular/docs/getting-started/features/) or jump to any feature page.

## 4. React to changes

The grid emits [outputs](https://coreui.io/data-grid/angular/docs/api/events/) with structured state:

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [itemKey]="itemKey"
  [rowSelection]="true"
  (selectionChange)="onSelectionChange($event)"
/>
```

```ts
import type { DataGridSelectionChangeEvent } from '@coreui/angular-data-grid'

onSelectionChange({ selectedItems }: DataGridSelectionChangeEvent) {
  console.log(selectedItems)
}
```

## What's next

- Handle large or remote data with [server-side data](https://coreui.io/data-grid/angular/docs/features/server-side-data/).
- Customize cells with a column [`formatter` or a cell template](https://coreui.io/data-grid/angular/docs/columns/overview/).
- Replace built-in chrome with [slot templates](https://coreui.io/data-grid/angular/docs/features/slots/) or drive the
  [headless table](https://coreui.io/data-grid/angular/docs/api/headless/) directly.
