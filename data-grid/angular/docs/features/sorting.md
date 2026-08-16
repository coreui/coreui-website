# Angular Data Grid Sorting

> Sort the Angular Data Grid by clicking a header, add multi-column sorting with shift+click, and opt individual columns out.

Sorting is **on by default**. Click a header to toggle ascending ↔ descending;
the sort runs across the whole dataset, not just the visible window. Shift+click
a second header to sort by more than one column at once.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-sorting-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [sorting]="{ multiple: true }"
      [pagination]="{ pageSize: 10 }"
    />
  `
})
export class DataGridSortingExample {
  readonly columns: DataGridColumn[] = [
    {
      key: 'id', label: '#', width: 90, sortable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role', width: 140 },
    { key: 'score', label: 'Score', width: 120 }
  ]
  readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => {
    const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
    return {
      id: i + 1,
      name,
      role: roles[i % roles.length],
      score: (i * 37) % 1000
    }
  })
  readonly itemKey = (item: DataGridItem) => String(item.id)
}
```

## Usage

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  [sorting]="true"
/>
<!-- the default — bind an object to configure it -->
```

Bind an object to tune the behavior:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | `boolean` | `true` | Allow sorting by more than one column with shift+click. |
| `resetable` | `boolean` | `false` | Allow a third click to clear the column's sort. |

Disable sorting for a single column with `sortable: false` in its
[definition](https://coreui.io/data-grid/angular/docs/api/columns/), or turn it off entirely with `[sorting]="false"`.

## Sort icon visibility

Only the **active** sort direction (the ascending/descending arrow) shows by
default — the neutral, unsorted indicator stays hidden to keep headers clean.
Set `sorterVisibility` to surface it on every sortable column:

| Value | Behavior |
| --- | --- |
| `'always'` | The neutral icon is always visible (dimmed) on sortable columns. |
| `'hover'` | The neutral icon appears when the header is hovered or focused. |

```html
<c-data-grid
  [columns]="columns"
  [items]="items"
  sorterVisibility="hover"
/>
```

## Multi-column sorting

With `multiple` enabled (the default), **shift+click** a second header to add it
to the sort instead of replacing the first. The sort priority follows click
order. Below, click **Department**, then shift+click **Salary** — the readout
shows the active sort and its priority.

```ts
import { Component, computed, signal } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type {
 DataGridColumn, DataGridItem, DataGridSortingChangeEvent, SortingState
} from '@coreui/angular-data-grid'

const departments = ['Engineering', 'Design', 'Sales']
const labels: Record<string, string> = { name: 'Name', department: 'Department', salary: 'Salary' }

@Component({
  selector: 'docs-data-grid-sorting-multi-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [sorting]="{ multiple: true }"
      [pagination]="{ pageSize: 10 }"
      (sortingChange)="onSortingChange($event)"
    />
    <p class="text-body-secondary small mt-2">{{ status() }}</p>
  `
})
export class DataGridSortingMultiExample {
  readonly columns: DataGridColumn[] = [
    {
      key: 'id', label: '#', width: 90, sortable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department', width: 160 },
    { key: 'salary', label: 'Salary', width: 140 }
  ]
  readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    department: departments[i % departments.length],
    salary: 40000 + ((i * 137) % 60000)
  }))
  readonly itemKey = (item: DataGridItem) => String(item.id)
private readonly sorting = signal<SortingState>([])
  readonly status = computed(() => {
    const sorting = this.sorting()
    return sorting.length ?
      `Sorted by: ${sorting
          .map((sort, index) => `${index + 1}. ${labels[sort.id]} ${sort.desc ? '↓' : '↑'}`)
          .join('   ')}` :
      'Click a header, then shift+click another to sort by multiple columns.'
  })

  onSortingChange({ sorting }: DataGridSortingChangeEvent) {
    this.sorting.set(sorting)
  }
}
```

## Reacting to sort changes

Each change emits the `sortingChange` output with the grid's `{ sorting }` state:

```html
<c-data-grid [columns]="columns" [items]="items" (sortingChange)="onSortingChange($event)" />
```

```ts
import type { DataGridSortingChangeEvent } from '@coreui/angular-data-grid'

onSortingChange({ sorting }: DataGridSortingChangeEvent) {
  console.log(sorting) // [{ id: 'name', desc: false }]
}
```

In [server-side mode](https://coreui.io/data-grid/angular/docs/features/server-side-data/) the same `sorting` state is
handed to your `dataProvider` so your API does the ordering.
