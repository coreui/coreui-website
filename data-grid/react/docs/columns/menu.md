# React Data Grid Column Menu

> Add a per-column header menu to the React Data Grid that gathers sort, pin, move and hide actions behind one accessible ⋮ button, and customize its items with a builder.

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

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

export const DataGridColumnMenuExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length]
        }
      }),
    []
  )

  return (
    <CDataGrid
      columns={[
        {
          key: 'id', label: '#', width: 90, movable: false, hideable: false
        },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        { key: 'role', label: 'Role', width: 140 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      columnMenu
      columnOrder
      columnPinning
      columnVisibility
      pagination={{ pageSize: 10 }}
    />
  )
}
```

## Customize the menu

Pass a **builder function** to `columnMenu` to take full control of the items.
It receives the column and the built-in actions for that column, and returns the
final list — so you can reorder, drop or add items, per column:

```tsx
columnMenu={({ column, defaultActions }) => CDataGridMenuAction[]}
```

- **Reorder** — return `defaultActions` in a different order.
- **Hide an item** — filter it out by `key` (`'sort-asc'`, `'sort-desc'`,
  `'clear-sort'`, `'pin-start'`, `'pin-end'`, `'unpin'`, `'move-start'`,
  `'move-end'`, `'hide'`).
- **Add your own** — push a new action object.
- **Per column** — branch on `column` (the [column definition](https://coreui.io/data-grid/react/docs/api/options/)).

A column whose builder returns at least one action shows the ⋮ button, even with
no built-in feature enabled. Each action has this shape:

```tsx
interface CDataGridMenuAction {
  key: string        // unique id, also used to filter built-ins
  label: string      // menu item text
  icon?: ReactNode   // any React node — no sanitization needed
  disabled?: boolean // render but don't run
  group?: string     // items with different groups get a divider between them
  run: () => void    // invoked on click; the menu closes first
}
```

Icons are plain React nodes (`ReactNode`), so you can pass any JSX — an inline
`<svg>`, a `<CIcon>`, or any component. There is no `sanitize` option: React
renders the nodes directly.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import type { CDataGridColumnMenuContext, CDataGridMenuAction } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const firstNames = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy']
const lastNames = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson', 'Davies', 'Evans', 'Thomas']
const roles = ['admin', 'editor', 'viewer']

const copyIcon = (
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
)

export const DataGridColumnMenuCustomExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => {
        const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`
        return {
          id: i + 1,
          name,
          email: `${name.toLowerCase().replace(' ', '.')}${i}@example.com`,
          role: roles[i % roles.length]
        }
      }),
    []
  )

  return (
    <CDataGrid
      columns={[
        {
          key: 'id', label: '#', width: 90, movable: false, hideable: false
        },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        { key: 'role', label: 'Role', width: 140 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      // A builder receives the built-in actions plus the column, and returns the
      // final list — filter items, reorder them, or add your own.
      columnMenu={({ column, defaultActions }: CDataGridColumnMenuContext): CDataGridMenuAction[] => [
        ...defaultActions,
        {
          key: 'copy-header',
          label: 'Copy header',
          group: 'custom',
          icon: copyIcon,
          run: () => navigator.clipboard?.writeText(column.label ?? column.key)
        }
      ]}
      columnOrder
      columnPinning
      columnVisibility
      pagination={{ pageSize: 10 }}
    />
  )
}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `columnMenu` | `boolean \| ((ctx) => CDataGridMenuAction[])` | `false` | Adds a per-column header menu. `true` builds it from the enabled features (sort/pin/move/hide); a builder `({ column, defaultActions }) => actions` returns the final item list (see [Customize the menu](#customize-the-menu)). |

Every menu and header icon is overridable with its own `ReactNode` prop:
`columnMenuIcon`, `sortAscendingIcon`, `sortDescendingIcon`, `sortNeutralIcon`,
`pinStartIcon`, `pinEndIcon`, `unpinIcon`, `moveStartIcon`, `moveEndIcon` and
`hideColumnIcon`. They default to the CoreUI icon set.

The default menu's items depend on which features are on
([sorting](https://coreui.io/data-grid/react/docs/features/sorting/), [pinning](https://coreui.io/data-grid/react/docs/columns/pinning/),
[ordering & visibility](https://coreui.io/data-grid/react/docs/columns/ordering-visibility/)). Its labels come from
[`labels`](https://coreui.io/data-grid/react/docs/customization/localization/); see
[Accessibility](https://coreui.io/data-grid/react/docs/guides/accessibility/) for the keyboard model.
