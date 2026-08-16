# Angular Data Grid Row Selection

> Add a checkbox column to the Angular Data Grid with select-all and shift+click range selection, keyed to a stable row id so selection survives sorting, filtering and paging.

`rowSelection` adds a checkbox column with a select-all header and shift+click
range selection. Selection is keyed by [`itemKey`](https://coreui.io/data-grid/angular/docs/api/options/), so a selected
row stays selected as the user sorts, filters or pages — set `itemKey` whenever
you enable selection. Select a few rows below, then page or sort — the selection
holds.

```ts
import { Component, signal } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem, DataGridSelectionChangeEvent } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-row-selection-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [rowSelection]="true"
      [pagination]="{ pageSize: 10 }"
      (selectionChange)="onSelectionChange($event)"
    />
    <p class="text-body-secondary mt-2 mb-0">
      @if (selectedCount(); as count) {
        {{ count }} {{ count === 1 ? 'row' : 'rows' }} selected
      } @else {
        No rows selected
      }
    </p>
  `
})
export class DataGridRowSelectionExample {
  readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ]
  readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
      role: roles[i % roles.length]
    }
  })
  readonly itemKey = (item: DataGridItem) => String(item.id)
  readonly selectedCount = signal(0)

  onSelectionChange({ selectedItems }: DataGridSelectionChangeEvent) {
    this.selectedCount.set(selectedItems.length)
  }
}
```

## Usage

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [itemKey]="itemKey"
  [rowSelection]="true"
/>
<!-- itemKey is required for stable selection -->
```

Bind an object to configure it:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `selectAll` | `boolean` | `true` | Show the select-all checkbox in the header. |

The [pagination demo](https://coreui.io/data-grid/angular/docs/features/pagination/) shows selection in action alongside
a custom actions column.

## Reading the selection

Listen for the `selectionChange` output:

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

onSelectionChange({ selectedItems, rowSelection }: DataGridSelectionChangeEvent) {
  console.log(selectedItems)
  console.log(rowSelection) // row-selection state
}
```

You can also read it imperatively through the
[headless table](https://coreui.io/data-grid/angular/docs/api/headless/) —
`grid.table.getSelectedRowModel().rows.map((row) => row.original)`.

## With pinning and server-side data

When a column is pinned to the start and selection is on, the checkbox column travels
with it — see [Column pinning](https://coreui.io/data-grid/angular/docs/columns/pinning/). In
[server-side mode](https://coreui.io/data-grid/angular/docs/features/server-side-data/), selection is id-keyed so it
survives page changes, but `selectedItems` contains only the items present in
the current page's data.
