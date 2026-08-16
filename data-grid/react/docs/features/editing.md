# React Data Grid Inline Editing

> Inline cell editing for the React Data Grid — built-in text, number and select editors, validation, and a popup contract for rich editors like date pickers and multi-selects.

`editing` turns cells editable in place. Press <kbd>Enter</kbd> or <kbd>F2</kbd>
on the active cell — or double-click any cell — to start; <kbd>Enter</kbd>
commits, <kbd>Escape</kbd> cancels, <kbd>Tab</kbd> commits and moves to the next
editable cell. Editing builds on
[keyboard navigation](https://coreui.io/data-grid/react/docs/features/keyboard-navigation/), so `editing` enables
`cellNavigation` automatically.

```html
import { CDataGrid } from '@coreui/react-data-grid'
import { useState } from 'react'

const roles = ['admin', 'editor', 'viewer']

const initialItems = Array.from({ length: 200 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  age: 20 + (i % 40),
  role: roles[i % roles.length]
}))

export const DataGridEditingExample = () => {
  const [items, setItems] = useState(initialItems)

  return (
    <CDataGrid
      columns={[
        { key: 'id', label: '#', width: 90 },
        {
          key: 'name',
          label: 'Name',
          editable: true,
          editValidate: value => (value === '' ? 'Name is required' : true)
        },
        {
 key: 'age', label: 'Age', width: 110, editable: { type: 'number', min: 0, max: 120 }
},
        {
 key: 'role', label: 'Role', width: 130, editable: { type: 'select', options: roles }
}
      ]}
      editing
      items={items}
      itemKey={item => String(item.id)}
      onEditCommit={({ item, columnId, value }) =>
        // The grid never mutates items - apply the committed change yourself.
        setItems(current =>
          current.map(row => (row.id === item.id ? { ...row, [columnId]: value } : row))
        )
      }
    />
  )
}
```

## Usage

Editing is opt-in per column — `editable` picks a built-in editor, a custom
`editor` component is itself the opt-in:

```tsx
<CDataGrid
  editing
  columns={[
    { key: 'name', editable: true },                                   // text input
    { key: 'age', editable: { type: 'number', min: 0 } },              // number input
    { key: 'role', editable: { type: 'select', options: ['admin', 'user'] } },
  ]}
  items={items}
/>
```

## The app owns the data

The grid never mutates `items`. A commit calls `onEditCommit` with
`{ item, columnId, value, previousValue }` — apply the change to your state and
the grid re-renders (server-side, PATCH and refetch):

```tsx
<CDataGrid
  editing
  columns={columns}
  items={items}
  onEditCommit={({ item, columnId, value }) =>
    setItems((current) =>
      current.map((row) => (row.id === item.id ? { ...row, [columnId]: value } : row))
    )
  }
/>
```

`onEditStart` and `onEditCancel` fire around it with `(item, columnId)`.

## Validation

`editValidate` gates the commit. Return `true` to accept, or a message to block
it — the editor gets `aria-invalid`, the `is-invalid` class and an
`aria-errormessage` pointing at the message:

```tsx
{ key: 'name', editable: true, editValidate: (value, item) => value !== '' || 'Name is required' }
```

An invalid value keeps the editor open; <kbd>Escape</kbd> still cancels.

## Custom editors

`editor` replaces the built-in input with your own component. It renders with
the editing context and registers the imperative bits of the contract through
`handleRef`:

```tsx
import type { CDataGridEditorProps } from '@coreui/react-data-grid'
import { useEffect, useRef } from 'react'

const NoteEditor = ({ value, handleRef }: CDataGridEditorProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const input = inputRef.current
    handleRef({
      focus: () => input?.select(),
      getValue: () => input?.value,
    })
    return () => handleRef(null)
  }, [])

  return <input className="form-control form-control-sm" defaultValue={String(value ?? '')} ref={inputRef} />
}

// columns: [{ key: 'note', editor: NoteEditor }]
```

The component receives `{ item, column, value, invalid, labels, commit, cancel, handleRef }`;
the handle can provide `getValue` (feeds Enter/Tab/blur/outside commits),
`focus`, and `contains` (extends the edit scope to overlays portaled outside the
cell).

## Rich editors — date pickers, autocompletes, multi-selects

Editors whose UI extends beyond the cell — a date range picker's calendar, a
multi-select's listbox — set `editorPopup: true` on the column. The grid renders
them in a `.data-grid-editor-popup` layer anchored to the cell (min-width = cell
width), so a tall editor never reflows the row, and the cell keeps its content
underneath.

Three rules make components like `@coreui/react-pro`'s
`CDateRangePicker`, `CTimePicker`, `CAutocomplete` and `CMultiSelect` work as
editors:

- **Commit on outside, not on blur alone.** Picking a date in a calendar blurs
  the input mid-edit — so the grid commits on pointerdown *outside the edit
  scope* (cell + popup + anything `contains()` claims). Keep the component's
  overlay inside the popup (its `container` prop), or claim a portaled overlay
  via the handle's `contains()`.
- **One Escape, one layer.** An Escape the editor consumed (calling
  `preventDefault()` to close its own overlay) never cancels the edit — only
  the next, unconsumed Escape does.
- **Values are not scalars.** `getValue()` can return anything — a range
  picker commits `{ startDate, endDate }`, a multi-select commits an array;
  `onEditCommit` passes it through untouched.

```tsx
const PeriodEditor = ({ value, handleRef }: CDataGridEditorProps) => {
  const range = useRef(value as { startDate?: string; endDate?: string } | undefined)

  useEffect(() => {
    handleRef({ getValue: () => range.current })
    return () => handleRef(null)
  }, [])

  return (
    <CDateRangePicker
      startDate={range.current?.startDate}
      endDate={range.current?.endDate}
      onStartDateChange={(startDate) => (range.current = { ...range.current, startDate })}
      onEndDateChange={(endDate) => (range.current = { ...range.current, endDate })}
    />
  )
}

// columns: [{ key: 'period', editor: PeriodEditor, editorPopup: true }]
```

## Interaction details

- Scrolling the editing row out of the
  [virtualized](https://coreui.io/data-grid/react/docs/features/virtualization/) window commits the draft; so do
  sort, filter and page transitions.
- Replacing `items` and [server-side](https://coreui.io/data-grid/react/docs/features/server-side-data/) data loads
  cancel an in-flight edit — the incoming data owns the cell.
- <kbd>Shift</kbd>+<kbd>Tab</kbd> commits and moves to the previous editable
  cell.
