# Angular Data Grid Undo & Redo

> Undo and redo inline-edit commits in the Angular Data Grid — toolbar buttons and Ctrl+Z / Ctrl+Shift+Z / Ctrl+Y, with the app staying the single source of truth.

`history` keeps an undo/redo stack of [inline editing](https://coreui.io/data-grid/angular/docs/features/editing/)
commits. Undo with the toolbar button or <kbd>Ctrl</kbd>+<kbd>Z</kbd>
(<kbd>⌘Z</kbd> on macOS), redo with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>
or <kbd>Ctrl</kbd>+<kbd>Y</kbd>. Edit a few cells below, then undo your way
back.

```ts
import { Component, signal } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridEditCommitEvent, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-history-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [editing]="true"
      [history]="true"
      [items]="items()"
      [itemKey]="itemKey"
      [toolbar]="{ history: true }"
      (editCommit)="onEditCommit($event)"
    />
  `
})
export class DataGridHistoryExample {
  readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    { key: 'name', label: 'Name', editable: true },
    {
 key: 'age', label: 'Age', width: 110, editable: { type: 'number', min: 0, max: 120 }
},
    {
 key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
}
  ]
readonly items = signal<DataGridItem[]>(
    Array.from({ length: 200 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      age: 20 + (i % 40),
      role: roles[i % roles.length]
    }))
  )
readonly itemKey = (item: DataGridItem) => String(item.id)

  // Undo/redo re-emit editCommit with the values swapped, so the handler
  // that applies an edit also reverts it.
  onEditCommit({ item, columnId, value }: DataGridEditCommitEvent) {
    this.items.update(current =>
      current.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row))
    )
  }
}
```

## Usage

```html
<c-data-grid
  [columns]="columns"
  [items]="items()"
  [editing]="true"
  [history]="true"
  [toolbar]="{ history: true }"
  (editCommit)="onEditCommit($event)"
/>
```

The buttons stay disabled while their stack is empty; each undo/redo announces
through the ARIA live region (`undoneAnnouncement`/`redoneAnnouncement`
labels). `grid.undo()` / `grid.redo()` are also callable on the component.

## How undo works — the app stays in charge

The grid never mutates `items`. An undo **re-emits `editCommit`** with `value`
and `previousValue` swapped (redo re-emits the original), so the same handler
that applied the edit reverts it — no second code path:

```ts
onEditCommit({ item, columnId, value }: DataGridEditCommitEvent) {
  this.items.update((current) =>
    current.map((row) => (row.id === item.id ? { ...row, [columnId]: value } : row))
  )
}
```

History entries reference rows by id, so they survive the immutable updates
this pattern produces. If a row disappears from the data entirely, its entries
are dropped. New commits clear the redo stack; the stack holds the last 100
edits. Following MUI and AG Grid, undo/redo covers **data edits** — view
changes (sorting, filters, column layout) are not tracked; persist those with
[`stateKey`](https://coreui.io/data-grid/angular/docs/features/state/) instead.
