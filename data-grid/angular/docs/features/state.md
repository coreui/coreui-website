# Angular Data Grid Save & Restore State

> Persist the Angular Data Grid view — sorting, filters, column order, sizing, visibility, pinning, selection and page — to localStorage with a single input.

`stateKey` makes the grid's view persistent: every user-adjustable state slice
— sorting, column filters and the global search, column order, sizing,
visibility and pinning, row selection and the page — **autosaves to
`localStorage`** under the key (debounced) and **restores automatically on
init**. No buttons, nothing to wire up. Sort or resize below, reload the page
— the grid comes back as you left it.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-state-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [columnSizing]="true"
      [columnVisibility]="true"
      [globalFilter]="true"
      [items]="items"
      [itemKey]="itemKey"
      stateKey="docs-state-demo-angular"
      [toolbar]="true"
    />
  `
})
export class DataGridStateExample {
  readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ]
readonly items: DataGridItem[] = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length]
  }))
readonly itemKey = (item: DataGridItem) => String(item.id)
}
```

## Usage

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [itemKey]="itemKey"
  stateKey="users-grid"
/>
```

Every state change writes the snapshot (debounced at 250 ms) to
`localStorage` under `coreui-data-grid:<stateKey>`; the next grid initialized
with the same key restores it before first render.

## Reading the snapshot

The saved snapshot is
`{ sorting, columnFilters, globalFilter, columnOrder, columnPinning, columnSizing, columnVisibility, pagination, rowSelection }`
(the `DataGridState` type). For your own storage, collect the slices from the
`(xxxChange)` outputs — or read them off the public `table` — and hand a saved
snapshot back by initializing the grid with `stateKey` pointing at it.

## What is (and isn't) state

- Row selection restores by row id — set [`itemKey`](https://coreui.io/data-grid/angular/docs/api/options/) or the
  restored ids point at positions, not rows.
- In [server-side mode](https://coreui.io/data-grid/angular/docs/features/server-side-data/) the restored
  sorting/filters/page are applied **before the first request**, so the grid
  loads straight into the saved view.
- Scroll position and an in-flight [edit](https://coreui.io/data-grid/angular/docs/features/editing/) draft are not
  state. Data edits aren't either — undoing those is what
  [undo & redo](https://coreui.io/data-grid/angular/docs/features/history/) is for.
- Restoring emits the matching `(xxxChange)` outputs for every slice that
  changed — your app sees a restore exactly like user interaction.
