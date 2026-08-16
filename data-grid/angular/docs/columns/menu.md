# Angular Data Grid Column Menu

> Add a per-column header menu to the Angular Data Grid that gathers sort, pin, move and hide actions behind one accessible ⋮ button, and customize its items with a builder.

The column menu collects a column's actions — sort, pin, move, hide — behind a
single ⋮ button in the header, so users don't have to discover drag-and-drop. It
is the keyboard-accessible path to sorting, reordering and pinning, and it only
shows the actions you've actually enabled.

## Column header menu

`columnMenu` adds a ⋮ button to each header cell with the column's actions in
one place — Sort ascending/descending/Unsort, Pin to start/end/Unpin, Move to
start/end and Hide column. Items appear only for enabled features
(`sorting`, `columnPinning`, `columnOrder`, `columnVisibility`) and respect
per-column `sortable`/`movable`/`hideable` opt-outs; a column with no available
action gets no button. Related actions are separated into groups by a divider.
The menu follows the ARIA menu pattern (arrow keys, Home/End, Escape restores
focus) — Move to start/end is the keyboard-accessible way to reorder columns,
complementing drag & drop. All labels are translatable via `labels`.

```ts
import { Component } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridItem } from '@coreui/angular-data-grid'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-column-menu-example',
  imports: [DataGridComponent],
  template: `
    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [columnMenu]="true"
      [columnOrder]="true"
      [columnPinning]="true"
      [columnVisibility]="true"
      [pagination]="{ pageSize: 10 }"
    />
  `
})
export class DataGridColumnMenuExample {
  readonly columns: DataGridColumn[] = [
    {
 key: 'id', label: '#', width: 90, movable: false, hideable: false
},
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 140 }
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
}
```

## Customize the menu

Bind a **builder function** to `columnMenu` to take full control of the items.
It receives the column and the built-in actions for that column, and returns the
final list — so you can reorder, drop or add items, per column:

```ts
columnMenu: ({ column, defaultActions }) => DataGridMenuAction[]
```

- **Reorder** — return `defaultActions` in a different order.
- **Hide an item** — filter it out by `key` (`'sort-asc'`, `'sort-desc'`,
  `'clear-sort'`, `'pin-start'`, `'pin-end'`, `'unpin'`, `'move-start'`,
  `'move-end'`, `'hide'`).
- **Add your own** — push a new action object.
- **Per column** — branch on `column` (the [column definition](https://coreui.io/data-grid/angular/docs/api/columns/)).

A column whose builder returns at least one action shows the ⋮ button, even with
no built-in feature enabled. Each action has this shape:

```ts
{
  key: string,                 // unique id, also used to filter built-ins
  label: string,               // menu item text
  icon?: TemplateRef<unknown>, // optional icon template
  disabled?: boolean,          // render but don't run
  group?: string,              // items with different groups get a divider between them
  run: () => void              // invoked on click; the menu closes first
}
```

Unlike the vanilla and React grids there are no SVG strings or sanitizer here:
icon overrides are Angular templates. Pass a `<ng-template>` (a `TemplateRef`)
to any of the icon inputs — `columnMenuIcon`, `sortAscendingIcon`,
`sortDescendingIcon`, `sortNeutralIcon`, `pinStartIcon`, `pinEndIcon`,
`unpinIcon`, `moveStartIcon`, `moveEndIcon`, `hideColumnIcon` — to replace a
built-in icon, and use the same `TemplateRef` for a custom action's `icon`. The
example below declares an `<ng-template #copyIcon>` and reads it with
`viewChild.required`, then appends a "Copy header" action that copies the
column's label to the clipboard.

```ts
import { Component, TemplateRef, viewChild } from '@angular/core'
import { DataGridComponent } from '@coreui/angular-data-grid'
import type { DataGridColumn, DataGridColumnMenuBuilder, DataGridItem } from '@coreui/angular-data-grid'

const roles = ['admin', 'editor', 'viewer']

@Component({
  selector: 'docs-data-grid-column-menu-custom-example',
  imports: [DataGridComponent],
  template: `
    <ng-template #copyIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M472 16H160a24.027 24.027 0 0 0-24 24v312a24.027 24.027 0 0 0 24 24h312a24.027 24.027 0 0 0 24-24V40a24.027 24.027 0 0 0-24-24m-8 328H168V48h296Z"
        />
        <path
          fill="currentColor"
          d="M344 464H48V168h56v-32H40a24.027 24.027 0 0 0-24 24v312a24.027 24.027 0 0 0 24 24h312a24.027 24.027 0 0 0 24-24v-64h-32Z"
        />
      </svg>
    </ng-template>

    <c-data-grid
      [columns]="columns"
      [items]="items"
      [itemKey]="itemKey"
      [columnMenu]="columnMenu"
      [columnOrder]="true"
      [columnPinning]="true"
      [columnVisibility]="true"
      [pagination]="{ pageSize: 10 }"
    />
  `
})
export class DataGridColumnMenuCustomExample {
  private readonly copyIcon = viewChild.required<TemplateRef<unknown>>('copyIcon')
readonly columns: DataGridColumn[] = [
    {
      key: 'id', label: '#', width: 90, movable: false, hideable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 140 }
  ]
readonly items: DataGridItem[] = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length]
  }))
readonly itemKey = (item: DataGridItem) => String(item.id)
// A builder receives the built-in actions plus the column, and returns the
  // final list — filter items, reorder them, or add your own. Custom icons are
  // passed as a TemplateRef, like the grid's own menu icons.
  readonly columnMenu: DataGridColumnMenuBuilder = ({ column, defaultActions }) => [
    ...defaultActions,
    {
      key: 'copy-header',
      label: 'Copy header',
      group: 'custom',
      icon: this.copyIcon(),
      run: () => navigator.clipboard?.writeText(column.label ?? column.key)
    }
  ]
}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnMenu` | `boolean \| ((ctx) => DataGridMenuAction[])` | `false` | Adds a per-column header menu. `true` builds it from the enabled features (sort/pin/move/hide); a builder `({ column, defaultActions }) => actions` returns the final item list (see [Customize the menu](#customize-the-menu)). |

Every menu and header icon is overridable with its own `TemplateRef` input
(`<ng-template>`): `columnMenuIcon`, `sortAscendingIcon`, `sortDescendingIcon`,
`sortNeutralIcon`, `pinStartIcon`, `pinEndIcon`, `unpinIcon`, `moveStartIcon`,
`moveEndIcon` and `hideColumnIcon`. They default to the CoreUI icon set.

The default menu's items depend on which features are on
([sorting](https://coreui.io/data-grid/angular/docs/features/sorting/), [pinning](https://coreui.io/data-grid/angular/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/angular/docs/columns/ordering-visibility/)). Its labels come from
[`labels`](https://coreui.io/data-grid/angular/docs/customization/localization/); see
[Accessibility](https://coreui.io/data-grid/angular/docs/guides/accessibility/) for the keyboard model.
