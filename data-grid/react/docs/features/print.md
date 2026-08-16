# React Data Grid Print

> Print the whole React Data Grid — every sorted and filtered row, not the twenty the virtualizer has on screen or the page the user happens to be on.

Printing a virtualized grid straight from the browser prints the twenty rows
that happen to be in the DOM, and a paginated one prints the current page.
Neither is what anyone means by "print this table", so the grid renders a
plain, complete table, prints that, and throws it away.

## Print

Enable the toolbar action with `toolbar={{ print: true }}`, or call ``printGrid()` from `@coreui/data-grid/print`` from your own
button. Search the grid below, then print: the printout carries every matching
row, not just the visible ones.

```html
import { CDataGrid } from '@coreui/react-data-grid'

const items = Array.from({ length: 60 }, (_, index) => ({
  name: `Person ${index + 1}`,
  role: index % 3 === 0 ? 'admin' : 'user',
  country: ['Poland', 'Germany', 'Spain', 'Italy'][index % 4]
}))

export const DataGridPrintExample = () => (
  <CDataGrid
    columns={[
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
      { key: 'country', label: 'Country' }
    ]}
    items={items}
    globalFilter
    printTitle="Team roster"
    toolbar={{ print: true, search: true }}
  />
)
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
| `toolbarPrintIcon` | `ReactNode` | printer | Custom print icon replacing the default one. |

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
