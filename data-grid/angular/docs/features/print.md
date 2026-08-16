# Angular Data Grid Print

> Print the whole Angular Data Grid — every sorted and filtered row, not the twenty the virtualizer has on screen or the page the user happens to be on.

Printing a virtualized grid straight from the browser prints the twenty rows
that happen to be in the DOM, and a paginated one prints the current page.
Neither is what anyone means by "print this table", so the grid renders a
plain, complete table, prints that, and throws it away.

## Print

Enable the toolbar action with `[toolbar]="{ print: true }"`, or call ``print()` on the component instance` from your own
button. Search the grid below, then print: the printout carries every matching
row, not just the visible ones.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem, DataGridToolbarOptions } from '@coreui/angular-data-grid'

@Component({
  selector: 'docs-data-grid-print-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [globalFilter]="true"
      [printTitle]="'Team roster'"
      [toolbar]="toolbar"
    />
  `
})
export class DataGridPrintExample {
  readonly columns: DataGridColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'country', label: 'Country' }
  ]
readonly toolbar: DataGridToolbarOptions = { print: true, search: true }
readonly items: DataGridItem[] = Array.from({ length: 60 }, (_, index) => ({
    name: `Person ${index + 1}`,
    role: index % 3 === 0 ? 'admin' : 'user',
    country: ['Poland', 'Germany', 'Spain', 'Italy'][index % 4]
  }))
}
```

## What gets printed

- **Every sorted and filtered row.** Pagination and virtualization are display
  concerns; the printout is the whole result set the user's sorting, filters and
  search produced.
- **The visible columns**, in their current order — hidden and reordered
  columns follow what is on screen.
- **Values as displayed.** A column's `formatter` runs first, so a formatted
  date prints as the date on screen.
- **The `printTitle`** as a heading above the table, when set.

Custom cell renderers are *not* carried into the printout: it is built from
values as text, never from markup, so the printed page can never become an
injection surface for the data.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `toolbar.print` | `boolean` | `false` | Adds the print button to the built-in toolbar. |
| `printTitle` | `string` | — | Heading printed above the table. |
| `toolbarPrintIcon` | `TemplateRef` | printer | Custom print icon replacing the default one. |

## Styling the printout

The clone is a `.data-grid-print-root` element appended to the document, and the
print stylesheet hides everything else on the page while it is there. Restyle it
like any other markup:

```css
@media print {
  .data-grid-print-root h1 { font-size: 1rem; }
  .data-grid-print-root :is(th, td) { border-color: #999; }
}
```
