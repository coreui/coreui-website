# Angular Data Grid Keyboard Navigation

> APG grid keyboard navigation for the Angular Data Grid — role="grid", a roving-tabindex active cell and arrow-key movement across header and data cells.

`cellNavigation` switches the grid to the ARIA
[grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/): the table gains
`role="grid"`, exactly one cell is tabbable at a time (a roving tabindex), and
the arrow keys move a visible active cell across header and data cells. Click a
cell below, then navigate with the keyboard.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-keyboard-navigation-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [cellNavigation]="true"
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [rowSelection]="true"
    />
  `
})
export class DataGridKeyboardNavigationExample {
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
<c-data-grid [columns]="columns" [items]="items" [cellNavigation]="true" />
```

`cellNavigation` is off by default — without it the grid keeps native table
semantics and the [accessible chrome](https://coreui.io/data-grid/angular/docs/guides/accessibility/) it always had.
[Inline editing](https://coreui.io/data-grid/angular/docs/features/editing/) requires the active-cell model, so
`editing` enables `cellNavigation` automatically.

## Keys

| Key | Action |
| --- | --- |
| Arrow keys | Move one cell; stop at the edges (no wrap). The header label row is row one — Arrow Up from the first data row reaches it. |
| Home / End | First / last cell in the row. |
| Ctrl+Home / Ctrl+End | First / last data cell of the grid. |
| PageUp / PageDown | Move one viewport when virtualized; move one page (and flip it) under pagination. |
| Tab / Shift+Tab | Leave the grid — the whole grid is a single tab stop. |
| Enter | Toggle sort on a sortable header cell; descend into a data cell's interactive content (links, buttons); start [editing](https://coreui.io/data-grid/angular/docs/features/editing/) an editable cell. |
| Escape | Ascend from cell content back to the cell. |
| Space | Toggle [row selection](https://coreui.io/data-grid/angular/docs/features/row-selection/) on the active row. |

## Focus and virtualization

The active cell is state, not DOM: with
[virtualization](https://coreui.io/data-grid/angular/docs/features/virtualization/) on, navigating to an off-window row
scrolls it into view first and focuses it once it renders. If the focused row is
recycled out of the window while you scroll, focus parks on the viewport and the
next navigation key brings the active cell back into view.

## Styling

The active cell shows an inset focus ring driven by two component tokens:

```css
c-data-grid {
  --cui-data-grid-focus-ring-width: 2px;
  --cui-data-grid-focus-ring-color: var(--cui-primary);
}
```
