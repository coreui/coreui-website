# React Data Grid Toolbar

> Add a built-in React Data Grid toolbar with a column chooser, CSV export button and global search — enabled with a single prop or configured granularly.

The `toolbar` prop adds a built-in chrome row above the grid with a
**column chooser**, a **CSV export** button, **Undo/Redo** buttons (with
[`history`](https://coreui.io/data-grid/react/docs/features/history/)) and a **global search** input. Each action drives an existing feature. The built-in toolbar is the
default composition of public parts; a [custom toolbar](#custom-toolbar)
composes the same parts next to your own actions.

```tsx
<CDataGrid
  columns={columns}
  items={items}
  columnVisibility // required for the column chooser
  toolbar // every action whose feature is enabled
/>
```

`toolbar` (boolean `true`) enables each action whose underlying feature is on:
**columns** needs [`columnVisibility`](https://coreui.io/data-grid/react/docs/columns/ordering-visibility/), **export**
is always available, **undo/redo** needs [`history`](https://coreui.io/data-grid/react/docs/features/history/), and
**search** turns on the global filter. Pass a granular
object to pick actions individually — `search: true` is the same input as
[`globalFilter`](https://coreui.io/data-grid/react/docs/features/filtering/), so keep using whichever reads better.

```tsx
<CDataGrid
  columns={columns}
  items={items}
  columnVisibility
  toolbar={{
    columns: true, // column chooser popup
    export: { filename: 'users.csv' }, // CsvDownloadOptions pass-through
    history: true, // undo/redo buttons (needs the history prop)
    search: true, // global search input
  }}
/>
```

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useMemo } from 'react'

const roles = ['admin', 'editor', 'viewer']

export const DataGridToolbarExample = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: roles[i % roles.length]
      })),
    []
  )

  return (
    <CDataGrid
      columns={[
        {
 key: 'id', label: '#', width: 90, hideable: false
},
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email', style: { width: '30%' } },
        { key: 'role', label: 'Role', width: 110 }
      ]}
      items={items}
      itemKey={item => String(item.id)}
      columnVisibility
      pagination={{ pageSize: 10 }}
      toolbar={{
        columns: true,
        export: { filename: 'users.csv' },
        search: true
      }}
    />
  )
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
changes call `onVisibilityChange` just like the [column menu](https://coreui.io/data-grid/react/docs/columns/menu/).

## Export

The export button downloads the current view as CSV by calling
[`downloadCsv(table, { scope: 'filtered' })`](https://coreui.io/data-grid/react/docs/features/csv-export/). Pass a
[`CsvDownloadOptions`](https://coreui.io/data-grid/react/docs/features/csv-export/) object as `toolbar.export` to set
`filename`, `delimiter`, `bom`, `sanitize` or `scope`.

## Icons

The toolbar buttons use the CoreUI icon set, overridable per-instance with the
`toolbarColumnsIcon`, `toolbarExportIcon`, `toolbarUndoIcon` and
`toolbarRedoIcon` props (any `ReactNode`, like every
other icon prop).

## Custom toolbar

The `toolbar` slot replaces the default composition with your component. The
parts the built-in toolbar is made of are exported, so a custom toolbar keeps
the built-in actions and adds its own next to them. This demo puts a **Save
changes** action that is enabled only while there are unsaved edits in front
of Undo, Redo, Columns and Export:

```html
import {
  CDataGrid,
  CDataGridToolbar,
  CDataGridToolbarActions,
  CDataGridToolbarButton,
  CDataGridToolbarColumns,
  CDataGridToolbarExport,
  CDataGridToolbarRedo,
  CDataGridToolbarSearch,
  CDataGridToolbarUndo,
  type CDataGridSlotProps
} from '@coreui/react-data-grid'
import { useState } from 'react'

declare module '@coreui/react-data-grid' {
  interface CDataGridToolbarSlotProps {
    dirty?: boolean
    onSave?: () => void
  }
}

const roles = ['admin', 'editor', 'viewer']

const initialItems = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: roles[i % roles.length]
}))

type User = (typeof initialItems)[number]

const isDirty = (items: User[], saved: User[]) =>
  items.some((row, index) => row.name !== saved[index].name || row.role !== saved[index].role)

const Toolbar = ({ dirty, onSave }: CDataGridSlotProps & { dirty?: boolean; onSave?: () => void }) => (
  <CDataGridToolbar>
    <CDataGridToolbarActions>
      <CDataGridToolbarButton label="Save changes" disabled={!dirty} onAction={onSave} />
      <CDataGridToolbarUndo />
      <CDataGridToolbarRedo />
      <CDataGridToolbarColumns />
      <CDataGridToolbarExport options={{ filename: 'users.csv' }} />
    </CDataGridToolbarActions>
    <CDataGridToolbarSearch />
  </CDataGridToolbar>
)

export const DataGridToolbarPartsExample = () => {
  const [items, setItems] = useState(initialItems)
  const [saved, setSaved] = useState(initialItems)

  return (
    <CDataGrid
      columns={[
        {
 key: 'id', label: '#', width: 90, hideable: false
},
        { key: 'name', label: 'Name', editable: true },
        {
 key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
}
      ]}
      columnVisibility
      editing
      globalFilter
      history
      items={items}
      itemKey={item => String(item.id)}
      pagination={{ pageSize: 10 }}
      slots={{ toolbar: Toolbar }}
      slotProps={{ toolbar: { dirty: isDirty(items, saved), onSave: () => setSaved(items) } }}
      onEditCommit={({ item, columnId, value }) =>
        setItems(current => current.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row)))
      }
    />
  )
}
```

Define the slot component outside the component that renders the grid, so it
is not a new component on every render (a new component remounts the toolbar
and drops the search text being typed). Pass your own state through
`slotProps.toolbar`; the props reach the slot next to `table` and `labels`.
Type them by augmenting `CDataGridToolbarSlotProps`, as the demo does.

| Part | Renders | Needs |
| --- | --- | --- |
| `CDataGridToolbar` | the `.data-grid-toolbar` row | — |
| `CDataGridToolbarActions` | a `.data-grid-toolbar-actions` group | — |
| `CDataGridToolbarColumns` | the column chooser button and its menu | `columnVisibility` |
| `CDataGridToolbarExport` | the export button | — |
| `CDataGridToolbarPrint` | the [print](https://coreui.io/data-grid/react/docs/features/print/) button | — |
| `CDataGridToolbarUndo`, `CDataGridToolbarRedo` | the history buttons | `history` |
| `CDataGridToolbarSearch` | the global search field | `globalFilter` |
| `CDataGridToolbarButton` | an own action with the built-in look | — |

Every button part takes `icon` (any `ReactNode`), `label` (the accessible
name and tooltip) and `className`. `CDataGridToolbarExport` also takes
`options`, merged over `toolbar.export`; `CDataGridToolbarSearch` takes
`label`, `placeholder` and `className`. `CDataGridToolbarButton` requires
`label` and takes `onAction`, `disabled` and `pressed` (rendered as
`aria-pressed` once set). Without an icon its label is visible text; with one
the label becomes the tooltip.

A part whose feature is off still renders, disabled, and logs
`DATA-GRID: Toolbar part "undo" requires option "history".` once per kind and
grid. Keep Undo and Redo in the toolbar instead of rendering them only while
`canUndo` is true: a button that disappears while focused takes the focus
with it.

## Own elements with a part's behaviour

The `useDataGridToolbarColumns`, `useDataGridToolbarExport`,
`useDataGridToolbarPrint`, `useDataGridToolbarUndo`,
`useDataGridToolbarRedo`, `useDataGridToolbarButton` and
`useDataGridToolbarSearch` hooks give your own `<button>` (or `<input>` for
search) the behaviour of a part: availability, activation, the focus rule
below, and for columns the menu. The props they return carry the state
attributes and `type`, never the accessible name, so the text and the
`aria-label` stay yours. Call them in a component rendered inside the
toolbar slot; outside a grid they return `null`.

```tsx
const UndoButton = () => {
  const props = useDataGridToolbarUndo()
  return props && <button {...props} className="btn btn-outline-secondary btn-sm">Undo last change</button>
}

const ColumnsButton = () => {
  const columns = useDataGridToolbarColumns()
  return columns && (
    <>
      <button {...columns.props} className="btn btn-outline-secondary btn-sm">Fields</button>
      {columns.chooser}
    </>
  )
}
```

Give an own action to `useDataGridToolbarButton({ label, onAction })` rather
than to your own `onClick`, so a held button (below) does not run it.

## Toolbar without parts

`useDataGridToolbar()` returns `canUndo`, `canRedo`, `undo`, `redo`, `print`
and `table` for a slot component that uses no part at all.

## Accessibility

- **Focus stays on a button that becomes unavailable.** After the last undo
  the focused Undo button gets `aria-disabled="true"` and ignores activation
  until focus moves to another element; only then does it become natively
  `disabled`. The same applies to `CDataGridToolbarButton` switched to
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
