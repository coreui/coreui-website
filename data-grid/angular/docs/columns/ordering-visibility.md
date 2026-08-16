# Angular Data Grid Column Ordering & Visibility

> Let users reorder Angular Data Grid columns by drag-and-drop and hide or show columns through a column chooser.

Give users control over the layout: drag headers to reorder columns and toggle
columns on and off to focus on what matters. Both features are driven through
the headless table, so you can wire them into your own toolbar — as the column
chooser in this demo does.

## Column ordering & visibility

`columnOrder` makes headers draggable — drop one onto another to reorder
(dragging never crosses a pinning boundary); pass an array for an initial order.
`columnVisibility` enables hiding and showing columns through the headless table
(`column.toggleVisibility()`, `column.getIsVisible()`); pass an object like
`{ email: false }` to start with a column hidden. Opt a column out with
`movable: false` / `hideable: false`. This demo adds a column chooser built
entirely with the `toolbar` slot template.

```ts
import { Component } from '@angular/core'
import { DataGridComponent, DataGridSlotDirective } from '@coreui/angular-data-grid'
import type { Column, DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-order-visibility-example',
  imports: [DataGridComponent, DataGridSlotDirective],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [columnOrder]="true"
      [columnVisibility]="true"
      [pagination]="{ pageSize: 10 }"
    >
      <!-- Column chooser built with the toolbar slot and the headless table -->
      <ng-template cDataGridSlot="toolbar" let-table>
        <div class="d-flex gap-3 mb-2">
          @for (column of table.getAllLeafColumns(); track column.id) {
            @if (column.getCanHide()) {
              <label class="form-check form-check-inline m-0">
                <input
                  type="checkbox"
                  class="form-check-input me-1"
                  [checked]="column.getIsVisible()"
                  (change)="toggleColumn(column, $event)"
                />
                {{ column.id }}
              </label>
            }
          }
        </div>
      </ng-template>
    </c-data-grid>
  `
})
export class DataGridOrderVisibilityExample {
  readonly columns: DataGridColumn[] = [
    // movable/hideable: false keeps the key column in place
    {
 key: 'id', label: '#', width: 90, movable: false, hideable: false
},
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

  toggleColumn(column: Column<DataGridItem, unknown>, event: Event) {
    column.toggleVisibility((event.target as HTMLInputElement).checked)
  }
}
```

## The drag interaction

Dragging is pointer-based, not HTML5 drag-and-drop, which is what makes the
following possible at all — and makes it behave the same with a mouse, a pen and
a finger:

- **A ghost** follows the pointer with the column's label, and the source header
  dims while it travels.
- **A live preview** — the columns the dragged one passes slide aside, and it
  slides into the gap, so the grid shows the layout the drop will produce
  instead of pointing at it with a line. A swap fires the moment the pointer
  crosses into a neighbour — at its edge, not its midpoint — and the release
  commits whatever the preview shows. Nothing reflows: it is `transform` only,
  and the real order still changes once, on drop. Where a drop is not allowed
  (another pinned region), nothing slides — and a release past either end of
  the axis lands the column at that end.
- **Auto-scroll** at the viewport's edges, ramping with how far into the edge the
  pointer sits, so a column can cross a grid wider than the screen.
- **The ghost settles** — on release it flies from wherever you let go to the
  slot the column landed in and fades out there; on Escape it flies back home.
- **Escape cancels** mid-drag, and the click that follows a drag never toggles
  the sort of the header it started from.

A press only becomes a drag after it travels a few pixels, so clicking a sortable
header still sorts it.

The slide honours `prefers-reduced-motion`: someone who asked the OS to stop
moving things still sees the preview, snapped to the final layout instead of
gliding there. Retime it with the `--cui-data-grid-drag-transition` token.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnOrder` | `boolean \| string[]` | `false` | Drag-and-drop reordering; an array sets the initial order. Never crosses a pinning boundary. |
| `columnVisibility` | `boolean \| Record<string, boolean>` | `false` | Enables hiding/showing columns; an object sets the initial visibility. |
| `movable` (column) | `boolean` | `true` | Set `false` to exclude a column from reordering. |
| `hideable` (column) | `boolean` | `true` | Set `false` to prevent hiding a column. |

Reordering emits the `orderChange` output `{ columnOrder }`; toggling
visibility emits the `visibilityChange` output `{ columnVisibility }`. The
[column menu](https://coreui.io/data-grid/angular/docs/columns/menu/) offers a keyboard-accessible Move to start/end as an
alternative to drag-and-drop.
