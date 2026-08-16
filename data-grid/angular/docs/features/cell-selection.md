# Angular Data Grid Cell Selection

> Spreadsheet-style cell ranges in the Angular Data Grid — shift-click, drag and shift+arrows, with Ctrl/Cmd+C copying the range as tab-separated text ready to paste into Excel.

People who work with tabular data reach for a spreadsheet's muscle memory:
drag across a block of numbers, hit Ctrl+C, paste it somewhere else.
`cellSelection` gives the grid that, on top of the same active-cell substrate
[keyboard navigation](https://coreui.io/data-grid/angular/docs/features/keyboard-navigation/) already provides.

## Cell selection

Select the way you would in a spreadsheet — click a cell, drag across a block,
shift-click a far corner, or hold Shift and press an arrow. Ctrl/Cmd+A selects
everything, and **Ctrl/Cmd+C copies the range**: try it and paste into a
spreadsheet.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

@Component({
  selector: 'docs-data-grid-cell-selection-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [cellSelection]="true"
      [sorting]="false"
      [virtualization]="false"
    />
  `
})
export class DataGridCellSelectionExample {
  readonly columns: DataGridColumn[] = [
    { key: 'quarter', label: 'Quarter' },
    { key: 'emea', label: 'EMEA' },
    { key: 'amer', label: 'AMER' },
    { key: 'apac', label: 'APAC' }
  ]
readonly items: DataGridItem[] = [
    {
 quarter: 'Q1', emea: 128400, amer: 214900, apac: 96300
},
    {
 quarter: 'Q2', emea: 141200, amer: 208700, apac: 104800
},
    {
 quarter: 'Q3', emea: 152900, amer: 226400, apac: 118200
},
    {
 quarter: 'Q4', emea: 167300, amer: 241800, apac: 129600
}
  ]
}
```

## Interactions

| Input | Result |
| --- | --- |
| Click / drag | Starts a range and extends it while dragging. |
| Shift + click | Extends the range to the clicked cell, keeping the anchor. |
| Shift + arrow | Extends the range one cell, keeping the anchor. |
| Arrow | Moves the active cell and collapses the range to it. |
| Ctrl/Cmd + click | Adds or subtracts a second rectangle. |
| Ctrl/Cmd + A | Selects every cell. |
| Ctrl/Cmd + C | Copies the selection to the clipboard. |

`cellSelection` implies `cellNavigation`: the active cell is the grid's single focus owner, and
the selection anchors on it rather than tracking a second one.

## The clipboard format

The copy is **tab-separated** — the format spreadsheets read back as columns.
Rows are separated by newlines, and disjoint rectangles by a blank line. A value
containing a tab, a newline or a quote is quoted the way TSV consumers expect.

Cells copy as they are **displayed**: a column's `formatter` runs first, so a
formatted date pastes as the date on screen rather than its underlying value.

Each copy fires ``(cellCopy)`` with the exact text written, so you can mirror it
somewhere else or count it.

The grid uses the async clipboard API and falls back to a hidden textarea where
that is unavailable or denied — both work because the copy runs inside the key
press that asked for it.

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `cellSelection` | `boolean` | `false` | Enables cell ranges, clipboard copy and select-all. Implies `cellNavigation`. |

## Bundle cost

Cell selection is the largest single feature in the grid: `cellSelectionFeature`
adds about **4 KB gzipped** to the TanStack core. A grid that does not need it
can drop that by naming a smaller
[feature set](https://coreui.io/data-grid/angular/docs/customization/feature-sets/) — which is exactly what the lite
build does.
