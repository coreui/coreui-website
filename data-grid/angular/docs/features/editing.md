# Angular Data Grid Inline Editing

> Inline cell editing for the Angular Data Grid — built-in text, number and select editors, validation, and a popup contract for rich editors like date pickers and multi-selects.

`editing` turns cells editable in place. Press <kbd>Enter</kbd> or <kbd>F2</kbd>
on the active cell — or double-click any cell — to start; <kbd>Enter</kbd>
commits, <kbd>Escape</kbd> cancels, <kbd>Tab</kbd> commits and moves to the next
editable cell. Editing builds on
[keyboard navigation](https://coreui.io/data-grid/angular/docs/features/keyboard-navigation/), so `editing` enables
`cellNavigation` automatically.

```ts
import { Component, signal } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridEditCommitEvent, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-editing-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [editing]="true"
      [items]="items()"
      [itemKey]="itemKey"
      (editCommit)="onEditCommit($event)"
    />
  `
})
export class DataGridEditingExample {
  readonly columns: DataGridColumn[] = [
    { key: 'id', label: '#', width: 90 },
    {
      key: 'name',
      label: 'Name',
      editable: true,
      editValidate: value => (value === '' ? 'Name is required' : true)
    },
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

  // The grid never mutates items - apply the committed change yourself.
  onEditCommit({ item, columnId, value }: DataGridEditCommitEvent) {
    this.items.update(current =>
      current.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row))
    )
  }
}
```

## Usage

Editing is opt-in per column — `editable` picks a built-in editor, a custom
`cDataGridCellEditor` template is itself the opt-in:

```ts
columns: DataGridColumn[] = [
  { key: 'name', editable: true },                                   // text input
  { key: 'age', editable: { type: 'number', min: 0 } },              // number input
  { key: 'role', editable: { type: 'select', options: ['admin', 'user'] } },
]
```

```html
<c-data-grid [columns]="columns" [items]="items" [editing]="true" />
```

## The app owns the data

The grid never mutates `items`. A commit emits `editCommit` with
`{ item, columnId, value, previousValue }` — apply the change to your state and
the grid re-renders (server-side, PATCH and refetch):

```html
<c-data-grid [columns]="columns" [editing]="true" [items]="items()" (editCommit)="onEditCommit($event)" />
```

```ts
onEditCommit({ item, columnId, value }: DataGridEditCommitEvent) {
  this.items.update((current) =>
    current.map((row) => (row['id'] === item['id'] ? { ...row, [columnId]: value } : row))
  )
}
```

`editStart` and `editCancel` fire around it with `{ item, columnId }`.

## Validation

`editValidate` gates the commit. Return `true` to accept, or a message to block
it — the editor gets `aria-invalid`, the `is-invalid` class and an
`aria-errormessage` pointing at the message:

```ts
{ key: 'name', editable: true, editValidate: (value, item) => value !== '' || 'Name is required' }
```

An invalid value keeps the editor open; <kbd>Escape</kbd> still cancels.

## Custom editors

A `cDataGridCellEditor` template replaces the built-in input with your own UI.
It renders with the editing context; push draft values into the session — the
Enter/Tab/blur/outside commits pick up the latest one:

```html
<c-data-grid [columns]="[{ key: 'note' }, ...]" [editing]="true" [items]="items()">
  <ng-template cDataGridCellEditor="note" let-value="value" let-session="session">
    <input
      class="form-control form-control-sm"
      [value]="value ?? ''"
      (input)="session.setValue($any($event.target).value)"
    />
  </ng-template>
</c-data-grid>
```

The template context is `{ $implicit: item, column, value, invalid, labels, session }`;
`session.setValue(value)` updates the draft, `session.commit(value)` /
`session.cancel()` end the edit directly.

## Rich editors — date pickers, autocompletes, multi-selects

Editors whose UI extends beyond the cell — a date range picker's calendar, a
multi-select's listbox — set `editorPopup: true` on the column. The grid renders
the template in a `.data-grid-editor-popup` layer anchored to the cell
(min-width = cell width), so a tall editor never reflows the row, and the cell
keeps its content underneath.

Three rules make components like `@coreui/angular-pro`'s date range picker,
time picker and multi-select work as editors:

- **Commit on outside, not on blur alone.** Picking a date in a calendar blurs
  the input mid-edit — so the grid commits on pointerdown *outside the edit
  scope* (the cell and the popup layer). Keep the component's overlay inside
  the popup rather than portaling it to `body`.
- **One Escape, one layer.** An Escape the editor consumed (calling
  `preventDefault()` to close its own overlay) never cancels the edit — only
  the next, unconsumed Escape does.
- **Values are not scalars.** The draft can be anything — a range picker
  pushes `{ startDate, endDate }` through `session.setValue`, a multi-select
  pushes an array; `editCommit` passes it through untouched.

```html
<ng-template cDataGridCellEditor="period" let-value="value" let-session="session">
  <c-date-range-picker
    [startDate]="value?.startDate"
    [endDate]="value?.endDate"
    (startDateChange)="session.setValue({ startDate: $event, endDate: value?.endDate })"
    (endDateChange)="session.setValue({ startDate: value?.startDate, endDate: $event })"
  />
</ng-template>
```

## Interaction details

- Scrolling the editing row out of the
  [virtualized](https://coreui.io/data-grid/angular/docs/features/virtualization/) window commits the draft; so do
  sort, filter and page transitions.
- Replacing `items` and [server-side](https://coreui.io/data-grid/angular/docs/features/server-side-data/) data loads
  cancel an in-flight edit — the incoming data owns the cell.
- <kbd>Shift</kbd>+<kbd>Tab</kbd> commits and moves to the previous editable
  cell.
