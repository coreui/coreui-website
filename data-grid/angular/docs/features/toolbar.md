# Angular Data Grid Toolbar

> Add a built-in Angular Data Grid toolbar with a column chooser, CSV export button and global search — enabled with a single input or configured granularly.

The `toolbar` input adds a built-in chrome row above the grid with a
**column chooser**, a **CSV export** button, **Undo/Redo** buttons (with
[`history`](https://coreui.io/data-grid/angular/docs/features/history/)) and a **global search** input. Each action drives an existing feature. The built-in toolbar is the
default composition of public parts; a [custom toolbar](#custom-toolbar)
composes the same parts next to your own actions.

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [columnVisibility]="true"
  [toolbar]="true"
/>
```

`[toolbar]="true"` enables each action whose underlying feature is on:
**columns** needs [`columnVisibility`](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/), **export**
is always available, **undo/redo** needs [`history`](https://coreui.io/data-grid/angular/docs/features/history/), and
**search** turns on the global filter. Pass a granular
object to pick actions individually — `search: true` is the same input as
[`[globalFilter]="true"`](https://coreui.io/data-grid/angular/docs/features/filtering/), so keep using whichever reads
better.

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [columnVisibility]="true"
  [toolbar]="{
    columns: true,
    export: { filename: 'users.csv' },
    history: true,
    search: true
  }"
/>
```

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-toolbar-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [columnVisibility]="true"
      [pagination]="{ pageSize: 10 }"
      [toolbar]="{ columns: true, export: { filename: 'users.csv' }, search: true }"
    />
  `
})
export class DataGridToolbarExample {
  readonly columns: DataGridColumn[] = [
    {
 key: 'id', label: '#', width: 90, hideable: false
},
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ]
  readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length]
  }))
  readonly itemKey = (item: DataGridItem) => String(item.id)
}
```

## Column chooser

With `toolbar.columns` enabled the columns button opens a menu listing every
leaf column in visual order as a checkable item. A click or Space on an item
calls `column.toggleVisibility()` live and keeps the menu open, Enter does the
same and closes it — there is no Apply step. Columns marked `hideable: false`
stay checked and disabled. **Show all**
and **Reset** (Reset restores the initial `columnVisibility` object) apply and
close the menu. Visibility
changes emit the `visibilityChange` output just like the
[column menu](https://coreui.io/data-grid/angular/docs/columns/menu/).

## Export

The export button downloads the current view as CSV by calling
[`downloadCsv({ scope: 'filtered' })`](https://coreui.io/data-grid/angular/docs/features/csv-export/). Pass a
[`CsvDownloadOptions`](https://coreui.io/data-grid/angular/docs/features/csv-export/) object as `toolbar.export` to set
`filename`, `delimiter`, `bom`, `sanitize` or `scope`.

## Icons

The toolbar buttons use the CoreUI icon set, overridable per-instance with the
`toolbarColumnsIcon`, `toolbarExportIcon`, `toolbarUndoIcon` and
`toolbarRedoIcon` inputs (an `<ng-template>` like
every other icon override).

## Custom toolbar

The `toolbar` slot template replaces the default composition. The parts the
built-in toolbar is made of are exported, so a custom toolbar keeps the
built-in actions and adds its own next to them. This demo puts a **Save
changes** action that is enabled only while there are unsaved edits in front
of Undo, Redo, Columns and Export:

```ts
import { Component, computed, signal } from '@angular/core'
import {
  DataGridComponent,
  DataGridSlotDirective,
  DataGridToolbarActionsDirective,
  DataGridToolbarButtonComponent,
  DataGridToolbarColumnsComponent,
  DataGridToolbarDirective,
  DataGridToolbarExportComponent,
  DataGridToolbarRedoComponent,
  DataGridToolbarSearchComponent,
  DataGridToolbarUndoComponent
} from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridEditCommitEvent, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

const initialItems: DataGridItem[] = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: roles[i % roles.length]
}))

@Component({
  selector: 'docs-data-grid-toolbar-parts-example',
  imports: [
    DataGridComponent,
    DataGridSlotDirective,
    DataGridToolbarActionsDirective,
    DataGridToolbarButtonComponent,
    DataGridToolbarColumnsComponent,
    DataGridToolbarDirective,
    DataGridToolbarExportComponent,
    DataGridToolbarRedoComponent,
    DataGridToolbarSearchComponent,
    DataGridToolbarUndoComponent
  ],
  template: `
    <c-data-grid
      [columns]="columns"
      [columnVisibility]="true"
      [editing]="true"
      [globalFilter]="true"
      [history]="true"
      [items]="items()"
      [itemKey]="itemKey"
      [pagination]="{ pageSize: 10 }"
      (editCommit)="onEditCommit($event)"
    >
      <ng-template cDataGridSlot="toolbar">
        <div cDataGridToolbar>
          <div cDataGridToolbarActions>
            <c-data-grid-toolbar-button label="Save changes" [disabled]="!dirty()" (action)="save()" />
            <c-data-grid-toolbar-undo />
            <c-data-grid-toolbar-redo />
            <c-data-grid-toolbar-columns />
            <c-data-grid-toolbar-export [options]="{ filename: 'users.csv' }" />
          </div>
          <c-data-grid-toolbar-search />
        </div>
      </ng-template>
    </c-data-grid>
  `
})
export class DataGridToolbarPartsExample {
  readonly columns: DataGridColumn[] = [
    {
 key: 'id', label: '#', width: 90, hideable: false
},
    { key: 'name', label: 'Name', editable: true },
    {
 key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
}
  ]
  readonly items = signal(initialItems)
  readonly saved = signal(initialItems)
  readonly dirty = computed(() => {
    const saved = this.saved()
    return this.items().some((row, index) => row.name !== saved[index].name || row.role !== saved[index].role)
  })
  readonly itemKey = (item: DataGridItem) => String(item.id)

  onEditCommit({ item, columnId, value }: DataGridEditCommitEvent) {
    this.items.update(current => current.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row)))
  }

  save() {
    this.saved.set(this.items())
  }
}
```

The slot template is part of your component's template, so it reads your
component's state directly, like `dirty()` in the demo. Import each part you
use, plus `DataGridSlotDirective`.

| Part | Renders | Needs |
| --- | --- | --- |
| `div[cDataGridToolbar]` | the `.data-grid-toolbar` row | — |
| `div[cDataGridToolbarActions]` | a `.data-grid-toolbar-actions` group | — |
| `c-data-grid-toolbar-columns` | the column chooser button and its menu | `columnVisibility` |
| `c-data-grid-toolbar-export` | the export button | — |
| `c-data-grid-toolbar-print` | the [print](https://coreui.io/data-grid/angular/docs/features/print/) button | — |
| `c-data-grid-toolbar-undo`, `c-data-grid-toolbar-redo` | the history buttons | `history` |
| `c-data-grid-toolbar-search` | the global search field | `globalFilter` |
| `c-data-grid-toolbar-button` | an own action with the built-in look | — |

The part components render no box of their own (`display: contents`), so
their buttons sit in the toolbar's layout. Every button part takes `icon` (an
`<ng-template>`) and `label` (the accessible name and tooltip).
`c-data-grid-toolbar-export` also takes `options`, merged over
`toolbar.export`; `c-data-grid-toolbar-search` takes `label` and
`placeholder`. `c-data-grid-toolbar-button` requires `label`, takes
`disabled` and `pressed` (rendered as `aria-pressed` once set) and emits
`(action)`. Without an icon its label is visible text; with one the label
becomes the tooltip.

A part whose feature is off still renders, disabled, and logs
`DATA-GRID: Toolbar part "undo" requires option "history".` once per kind and
grid. Keep Undo and Redo in the toolbar instead of rendering them only while
`canUndo()` is true: a button that disappears while focused takes the focus
with it.

## Own elements with a part's behaviour

The attribute directives `button[cDataGridToolbarColumns]`,
`button[cDataGridToolbarExport]`, `button[cDataGridToolbarPrint]`,
`button[cDataGridToolbarUndo]`, `button[cDataGridToolbarRedo]`,
`button[cDataGridToolbarButton]` and `input[cDataGridToolbarSearch]` give
your own element the behaviour of a part: availability, activation, the focus
rule below, and for columns the menu. They write the state attributes and
`type`, never the accessible name, so the text and the `aria-label` stay
yours. Each button directive takes an optional `tooltip`; Export also takes
`options`, and `cDataGridToolbarButton` takes `disabled`, `pressed` and emits
`(action)`.

```html
<ng-template cDataGridSlot="toolbar">
  <div cDataGridToolbar>
    <button cDataGridToolbarUndo class="btn btn-outline-secondary btn-sm">Undo last change</button>
    <button cDataGridToolbarColumns class="btn btn-outline-secondary btn-sm">Fields</button>
  </div>
</ng-template>
```

Give an own action to `(action)` rather than to `(click)`, so a held button
(below) does not run it.

## Toolbar without parts

`c-data-grid` keeps `undo()`, `redo()`, `print()`, `exportCsv()`, `canUndo`
and `canRedo` for a template reference to the grid. Inside the grid, a
component of your own can inject `DATA_GRID_TOOLBAR` for the same state and
actions.

## Accessibility

- **Focus stays on a button that becomes unavailable.** After the last undo
  the focused Undo button gets `aria-disabled="true"` and ignores activation
  until focus moves to another element; only then does it become natively
  `disabled`. The same applies to `c-data-grid-toolbar-button` switched to
  `disabled`. Disabled toolbar buttons keep their tooltip.
- **The column chooser is a menu** inside the grid, named by its trigger, with
  a checkable item per column. Arrow keys, Home and End move between the
  items, Space toggles a column and keeps the menu open, Enter toggles it and
  closes the menu. Escape on the menu or on the trigger closes it and returns
  focus to the trigger, Tab closes it and moves on from the trigger, and focus
  moving to an element outside closes it. A scroll or a window resize keeps it
  under its trigger, no taller than the room left below it.
- **Focus leaves the column chooser for another part** when the chooser goes
  away with its part or its feature while focus is inside it.
- **Announcements** — results counts and undo/redo — go to one page-level
  live region (`[data-coreui-live-announcer]`) shared with CoreUI components
  on the same page. Undo or redo that empties its stack says so in the same
  message, and undo of an edit whose row is gone announces that the change is
  no longer available.
