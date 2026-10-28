# Data Grid Toolbar

> Add a built-in Data Grid toolbar with a column chooser, CSV export button and global search — enabled with a single option or configured granularly.

The `toolbar` option adds a built-in chrome row above the grid with a
**column chooser**, a **CSV export** button, **Undo/Redo** buttons (with
[`history`](https://coreui.io/data-grid/docs/features/history/)) and a **global search** input. Each action drives an existing feature. The built-in toolbar is the
default composition of public parts; a [custom toolbar](#custom-toolbar)
composes the same parts next to your own actions.

```js
new coreui.DataGrid(element, {
  columns,
  items,
  columnVisibility: true, // required for the column chooser
  toolbar: true,          // every action whose feature is enabled
})
```

`toolbar: true` enables each action whose underlying feature is on: **columns**
needs [`columnVisibility`](https://coreui.io/data-grid/docs/columns/ordering-visibility/), **export** is always
available, **undo/redo** needs [`history`](https://coreui.io/data-grid/docs/features/history/), and **search**
turns on the global filter. Pass a granular object to
pick actions individually — `search: true` is the same input as
[`globalFilter: true`](https://coreui.io/data-grid/docs/features/filtering/), so keep using whichever reads
better.

```js
new coreui.DataGrid(element, {
  columns,
  items,
  columnVisibility: true,
  toolbar: {
    columns: true,                  // column chooser popup
    export: { filename: 'users.csv' }, // CsvDownloadOptions pass-through
    history: true,                  // undo/redo buttons (needs history: true)
    search: true,                   // global search input
  },
})
```

```html
<div id="dataGridToolbar"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']

const items = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: roles[i % roles.length]
}))

new coreui.DataGrid(document.getElementById('dataGridToolbar'), {
  columns: [
    {
      key: 'id', label: '#', width: 90, hideable: false
    },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email', style: { width: '30%' } },
    { key: 'role', label: 'Role', width: 110 }
  ],
  items,
  itemKey: item => String(item.id),
  columnVisibility: true,
  pagination: { pageSize: 10 },
  toolbar: {
    columns: true,
    export: { filename: 'users.csv' },
    search: true
  }
})
```

## Column chooser

With `toolbar.columns` enabled the columns button opens a menu listing every
leaf column in visual order as a checkable item. A click or Space on an item
calls `column.toggleVisibility()` live and keeps the menu open, Enter does the
same and closes it — there is no Apply step. Columns marked `hideable: false`
stay checked and disabled. **Show all**
and **Reset** (Reset restores the initial `columnVisibility` object) apply and
close the menu. Visibility
changes emit `visibilityChange.coreui.data-grid` just like the
[column menu](https://coreui.io/data-grid/docs/columns/menu/).

## Export

The export button downloads the current view as CSV by calling
[`downloadCsv({ scope: 'filtered' })`](https://coreui.io/data-grid/docs/features/csv-export/). Pass a
[`CsvDownloadOptions`](https://coreui.io/data-grid/docs/features/csv-export/) object as `toolbar.export` to set
`filename`, `delimiter`, `bom`, `sanitize` or `scope`.

## Icons

The toolbar buttons use the CoreUI icon set, overridable per-instance with the
`toolbarColumnsIcon`, `toolbarExportIcon`, `toolbarUndoIcon` and
`toolbarRedoIcon` string options (SVG markup, sanitized like every other
icon).

## Custom toolbar

The `toolbar` slot replaces the default composition. Its context carries
`toolbar.parts`, the same parts the built-in toolbar is made of, so a custom
toolbar keeps the built-in actions and adds its own next to them. This demo
puts a **Save changes** action that is enabled only while there are unsaved
edits in front of Undo, Redo, Columns and Export:

```html
<div id="dataGridToolbarParts"></div>
```

```js
const roles = ['admin', 'editor', 'viewer']
const keys = ['name', 'role']

let items = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  role: roles[i % roles.length]
}))
let saved = items

const isDirty = () => items.some((row, index) => keys.some(key => row[key] !== saved[index][key]))

const element = document.getElementById('dataGridToolbarParts')
let save

const grid = new coreui.DataGrid(element, {
  columns: [
    {
      key: 'id', label: '#', width: 90, hideable: false
    },
    { key: 'name', label: 'Name', editable: true },
    {
      key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
    }
  ],
  items,
  itemKey: item => String(item.id),
  columnVisibility: true,
  editing: true,
  globalFilter: true,
  history: true,
  pagination: { pageSize: 10 },
  slots: {
    toolbar({ toolbar }) {
      save = toolbar.parts.button({
        label: 'Save changes',
        disabled: !isDirty(),
        onAction() {
          saved = items
          save.update({ disabled: true })
        }
      })

      return {
        element: toolbar.parts.toolbar(
          toolbar.parts.actions(
            save.element,
            toolbar.parts.undo().element,
            toolbar.parts.redo().element,
            toolbar.parts.columns().element,
            toolbar.parts.export({ options: { filename: 'users.csv' } }).element
          ),
          toolbar.parts.search().element
        )
      }
    }
  }
})

element.addEventListener('editCommit.coreui.data-grid', event => {
  items = items.map(row => (row === event.item ? { ...row, [event.columnId]: event.value } : row))
  grid.setItems(items)
  save.update({ disabled: !isDirty() })
})
```

Each button part and the search part return a binding
`{ element, update(options), dispose() }`; `toolbar()` and `actions()` return
the element. Place `element` anywhere in the slot's markup and call
`update()` when your own state changes, as the demo does with `disabled`.

| Part | Renders | Needs |
| --- | --- | --- |
| `toolbar.parts.toolbar(...children)` | the `.data-grid-toolbar` row | — |
| `toolbar.parts.actions(...children)` | a `.data-grid-toolbar-actions` group | — |
| `toolbar.parts.columns(options)` | the column chooser button and its menu | `columnVisibility` |
| `toolbar.parts.export(options)` | the export button | — |
| `toolbar.parts.print(options)` | the [print](https://coreui.io/data-grid/docs/features/print/) button | — |
| `toolbar.parts.undo(options)`, `redo(options)` | the history buttons | `history` |
| `toolbar.parts.search(options)` | the global search field | `globalFilter` |
| `toolbar.parts.button(options)` | an own action with the built-in look | — |

Every button part takes `icon` (SVG markup, sanitized like every other icon),
`label` (the accessible name and tooltip) and `className`. `export` also takes
`options`, merged over `toolbar.export`; `search` takes `label` and
`placeholder`. `button` requires `label` and takes `onAction`, `disabled` and
`pressed` (rendered as `aria-pressed` once set). Without an icon its label is
visible text; with one the label becomes the tooltip.

A part whose feature is off still renders, disabled, and logs
`DATA-GRID: Toolbar part "undo" requires option "history".` once per kind and
grid. Keep Undo and Redo in the toolbar instead of adding them only while
`canUndo()` is true: a button that disappears while focused takes the focus
with it.

## Own elements with a part's behaviour

`toolbar.bind(element, kind, options)` gives your own `<button>` (or
`<input>` for `search`) the behaviour of a part: availability, activation,
the focus rule below, and for `columns` the menu. It writes the state
attributes and `type`, never the accessible name, so the text and the
`aria-label` stay yours.

```js
slots: {
  toolbar: ({ toolbar }) => {
    const undo = document.createElement('button')
    undo.className = 'btn btn-outline-secondary btn-sm'
    undo.textContent = 'Undo last change'
    toolbar.bind(undo, 'undo')
    return { element: toolbar.parts.toolbar(undo) }
  }
}
```

Give an own action to `bind(element, 'button', { onAction })` rather than to
your own click listener, so a held button (below) does not run it. Binding
the same element and kind again updates the existing binding.

## Toolbar without parts

The slot context also carries `toolbar.canUndo()`, `toolbar.canRedo()`,
`toolbar.undo()`, `toolbar.redo()` and `toolbar.print()` for markup that
uses no part at all. Read them in the slot's `update()`, which runs on every
grid render.

## Accessibility

- **Focus stays on a button that becomes unavailable.** After the last undo
  the focused Undo button gets `aria-disabled="true"` and ignores activation
  until focus moves to another element; only then does it become natively
  `disabled`. The same applies to `button` parts switched to `disabled`.
  Disabled toolbar buttons keep their tooltip.
- **The column chooser is a menu** inside the grid, named by its trigger, with
  a checkable item per column. Arrow keys, Home and End move between the
  items, Space toggles a column and keeps the menu open, Enter toggles it and
  closes the menu. Escape on the menu or on the trigger closes it and returns
  focus to the trigger, Tab closes it and moves on from the trigger, and focus
  moving to an element outside closes it. A scroll or a window resize keeps it
  under its trigger, no taller than the room left below it.
- **Focus leaves the column chooser for another part** when the chooser goes
  away with its part or its feature while focus is inside it. `update()`
  returns focus to the same part when the new toolbar has one.
- **Announcements** — results counts and undo/redo — go to one page-level
  live region (`[data-coreui-live-announcer]`) shared with CoreUI components
  on the same page. Undo or redo that empties its stack says so in the same
  message, and undo of an edit whose row is gone announces that the change is
  no longer available.
