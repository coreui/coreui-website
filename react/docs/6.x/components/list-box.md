# React List Box Component

> A keyboard-driven list of values built on the ARIA listbox pattern: single, multiple or no selection, sections, descriptions, links, an empty state and an aria-activedescendant mode that keeps the focus in your own input.

## Overview

_Added in 6.0.0._

A list box presents a set of values and lets the user pick from them. `CListBox` owns the roles, the selection state and the keyboard: it writes `role="listbox"` and `role="option"`, keeps `aria-selected` in step with the selection, moves a roving `tabindex` as the highlight moves, and scrolls the highlighted option into view. Before the highlight has moved that `tabindex` sits on the first navigable entry, which is a selectable section label when one comes first, so <kbd>Tab</kbd> enters the list where the arrows would.

```html
import React from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxExample = () => {
  return (
    <CListBox ariaLabel="Sandwich" style={{ maxWidth: '20rem' }}>
      <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
      <CListBoxOption value="tomato">Tomato</CListBoxOption>
      <CListBoxOption value="onion">Onion</CListBoxOption>
      <CListBoxOption value="cheese">Cheese</CListBoxOption>
    </CListBox>
  )
}
```

Every option carries its value in the `value` prop; an option without one is worth its text. Values are what the props take and what the callbacks report, so an option can be hidden, moved or re-rendered without disturbing the selection.

`CListBox` is a renderer over `useListBox()`, which owns the selection, the highlight, the keyboard and the ARIA bookkeeping. Call the hook directly to build a surface of your own, and reach the same state from a custom option with `useListBoxContext()`.

### When to use

<div class="table-responsive">

| Component | Use it for |
| --- | --- |
| List box | Choosing a value — the choice stays on screen and is reported back to you. |
| [Menu](https://coreui.io/react/docs/components/menu/) | Running an action — the surface opens, something happens, it closes. |
| [List group](https://coreui.io/react/docs/components/list-group/) | Displaying content — a list of things to read, not to pick from. |

</div>

A list box is also the primitive the picker components are built from, so its markup and classes carry over to them.

### Options from data

Pass `items` to render the options from data. Children then become a function receiving one item at a time, so the option's shape stays yours while the list box keeps the order, the navigation and the ids. Omitting the function renders each item's `label`.

```html
import React from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

const items = [
  { label: 'Lettuce', value: 'lettuce' },
  { label: 'Tomato', value: 'tomato' },
  { label: 'Onion', value: 'onion' },
  { label: 'Cheese', value: 'cheese' },
]

export const ListBoxItemsExample = () => {
  return (
    <CListBox ariaLabel="Sandwich" items={items} style={{ maxWidth: '20rem' }}>
      {(item) => (
        <CListBoxOption key={item.value} value={item.value}>
          {item.label}
        </CListBoxOption>
      )}
    </CListBox>
  )
}
```

## Selection

`selectionMode` decides what a click and <kbd>Space</kbd> do. In `single` (the default) one option is selected at a time and picking another replaces it. Drive the selection with `selected` and `onSelectedChange`, or leave it to the component with `defaultSelected`.

```html
import React, { useState } from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxSingleExample = () => {
  const [selected, setSelected] = useState<string[]>(['tomato'])

  return (
    <>
      <CListBox
        ariaLabel="Single"
        selected={selected}
        style={{ maxWidth: '20rem' }}
        onSelectedChange={setSelected}
      >
        <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
        <CListBoxOption value="tomato">Tomato</CListBoxOption>
        <CListBoxOption value="onion">Onion</CListBoxOption>
      </CListBox>
      <p className="mt-3 mb-0">Selected: {selected.join(', ') || 'nothing'}</p>
    </>
  )
}
```

In `multiple` a click toggles one option, <kbd>Shift</kbd> extends the selection from the last one, <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> on macOS) adds one without clearing the rest, and <kbd>Ctrl</kbd> + <kbd>A</kbd> takes everything. `aria-multiselectable` is written for you.

```html
import React, { useState } from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxMultipleExample = () => {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <>
      <CListBox
        ariaLabel="Multiple"
        selectionMode="multiple"
        selected={selected}
        style={{ maxWidth: '20rem' }}
        onSelectedChange={setSelected}
      >
        <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
        <CListBoxOption value="tomato">Tomato</CListBoxOption>
        <CListBoxOption value="onion">Onion</CListBoxOption>
        <CListBoxOption value="cheese">Cheese</CListBoxOption>
      </CListBox>
      <p className="mt-3 mb-0">Selected: {selected.join(', ') || 'nothing'}</p>
    </>
  )
}
```

`CListBoxHeader` is a plain band above the options, outside the list, and takes arbitrary children — `CListBoxSelectAll` on its own, or alongside a `CListBoxTitle`, a `CListBoxSubtitle` counter built from your own state, or anything else the surface needs. `CListBoxSelectAll` is the button that switches the whole list: reached with <kbd>Tab</kbd> rather than the arrows, styled like an option, `aria-pressed` reading `true` once every visible enabled option is selected, or `selectionLimit` is reached within that set, and `mixed` below that, clicking it selects every visible enabled option or drops that same set once they are all selected, so a value a filter hid stays selected; `useListBoxContext().clear()`, or a controlled `selected={[]}`, empties everything, and its `aria-controls` points at the options. A switch for the whole list is a control, not a value — so it is no longer an option that has to lie about its own `aria-selected`.

```html
import React from 'react'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/react-pro'

export const ListBoxSelectAllExample = () => {
  return (
    <CListBox ariaLabel="Toppings" selectionMode="multiple" style={{ maxWidth: '20rem' }}>
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
      <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
      <CListBoxOption value="tomato">Tomato</CListBoxOption>
      <CListBoxOption value="onion">Onion</CListBoxOption>
    </CListBox>
  )
}
```

With `none` nothing is ever selected and no `aria-selected` is written; activating an option calls `onAction` instead, which turns the list into a keyboard-navigable list of commands.

```html
import React, { useState } from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxActionsExample = () => {
  const [action, setAction] = useState('nothing yet')

  return (
    <>
      <CListBox
        ariaLabel="Actions"
        selectionMode="none"
        style={{ maxWidth: '20rem' }}
        onAction={setAction}
      >
        <CListBoxOption value="copy">Copy</CListBoxOption>
        <CListBoxOption value="rename">Rename</CListBoxOption>
        <CListBoxOption value="delete">Delete</CListBoxOption>
      </CListBox>
      <p className="mt-3 mb-0">Last action: {action}</p>
    </>
  )
}
```

### Selection limit

`selectionLimit` caps how many values `multiple` mode accepts. Once the selection is full every further one is refused — by click, by <kbd>Space</kbd>, by a <kbd>Shift</kbd> range, by <kbd>Ctrl</kbd> + <kbd>A</kbd> and by the select-all button alike — and `onSelectionLimit` reports the limit together with the first value it turned down. Deselecting always works, a range and a select-all fill up in document order until the cap is hit, and no option is ever disabled: the list stays navigable, it just stops taking more.

```html
import React, { useState } from 'react'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/react-pro'

const LIMIT = 2

export const ListBoxSelectionLimitExample = () => {
  const [selected, setSelected] = useState<string[]>([])
  const [refused, setRefused] = useState('')

  return (
    <>
      <CListBox
        ariaLabel="Toppings"
        selected={selected}
        selectionLimit={LIMIT}
        selectionMode="multiple"
        style={{ maxWidth: '20rem' }}
        onSelectedChange={(values) => {
          setRefused('')
          setSelected(values)
        }}
        onSelectionLimit={(limit, value) => setRefused(`${value} — only ${limit} at a time`)}
      >
        <CListBoxHeader>
          <CListBoxSelectAll />
        </CListBoxHeader>
        <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
        <CListBoxOption value="tomato">Tomato</CListBoxOption>
        <CListBoxOption value="onion">Onion</CListBoxOption>
        <CListBoxOption value="cheese">Cheese</CListBoxOption>
      </CListBox>
      <p className="mt-3 mb-0">Selected: {selected.join(', ') || 'nothing'}</p>
      {refused && <p className="mb-0 fg-danger">Refused: {refused}</p>}
    </>
  )
}
```

## Checkboxes

`indicator="checkbox"` puts the check the multi-value pickers use in front of every option, so a `multiple` list reads as a set of checkboxes without a single `<input>` in the markup — the option keeps its `role="option"` and its `aria-selected`, and the mark is hidden from assistive technology. The switch sits on the container as `data-coreui-indicator`, so every row lays its indicator out the same way. The select-all button shows the partial state: it takes the same indicator as the options and reads `aria-pressed="mixed"` while some, but not all, of them are selected.

```html
import React, { useState } from 'react'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/react-pro'

const toppings = ['Lettuce', 'Tomato', 'Onion', 'Cheese']

export const ListBoxCheckboxesExample = () => {
  const [selected, setSelected] = useState<string[]>(['tomato'])

  return (
    <CListBox
      ariaLabel="Toppings"
      indicator="checkbox"
      selected={selected}
      selectionMode="multiple"
      style={{ maxWidth: '20rem' }}
      onSelectedChange={setSelected}
    >
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
      {toppings.map((topping) => (
        <CListBoxOption key={topping} value={topping.toLowerCase()}>
          {topping}
        </CListBoxOption>
      ))}
    </CListBox>
  )
}
```

## Counter

`counter` puts a counter at the end of the header — as the last child of the `CListBoxHeader` the markup carries, or in a header of its own when there is none. Both of its numbers read the visible, enabled options, the same set the select-all button works on, so `2/2 selected` means everything on screen is selected and a value hidden by the search counts on neither side. `selectedLabel` builds its text — a function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced.

```html
import React from 'react'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/react-pro'

export const ListBoxCounterExample = () => {
  return (
    <CListBox
      ariaLabel="Toppings"
      counter
      indicator="checkbox"
      selectionMode="multiple"
      style={{ maxWidth: '20rem' }}
    >
      <CListBoxHeader>
        <CListBoxSelectAll>Toppings</CListBoxSelectAll>
      </CListBoxHeader>
      <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
      <CListBoxOption value="tomato">Tomato</CListBoxOption>
      <CListBoxOption value="onion">Onion</CListBoxOption>
      <CListBoxOption value="cheese">Cheese</CListBoxOption>
    </CListBox>
  )
}
```

## Sections

Group options in a `CListBoxSection` and name it with `label`. The section takes `role="group"` and is announced with its name. A section whose options are all filtered out is hidden with its label.

```html
import React from 'react'
import { CListBox, CListBoxOption, CListBoxSection } from '@coreui/react-pro'

export const ListBoxSectionsExample = () => {
  return (
    <CListBox ariaLabel="Sandwich" style={{ maxWidth: '20rem' }}>
      <CListBoxSection label="Veggies">
        <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
        <CListBoxOption value="tomato">Tomato</CListBoxOption>
      </CListBoxSection>
      <CListBoxSection label="Protein">
        <CListBoxOption value="ham">Ham</CListBoxOption>
        <CListBoxOption value="tuna">Tuna</CListBoxOption>
      </CListBoxSection>
    </CListBox>
  )
}
```

### Selectable sections

`sectionsSelectable` turns every section label into a toggle over the options it holds — a `<button>` reporting `aria-pressed`, which reads `true` when the whole section is selected and `mixed` when part of it is. It takes the list's `indicator`, sits in the arrow order right before its options, and only ever takes what the list currently shows, so a search narrows its reach. `multiple` mode only, and `selectionLimit` still caps what it can take: values selected outside the section count against it, so a label reads `true` once the section holds what the limit leaves, and pressing it then clears the section. A label whose section has no enabled option on screen carries `aria-disabled`, leaves the arrow order and shows the state of the section's disabled options. `disabled` on `CListBoxSection` disables every option in it.

```html
import React from 'react'
import { CListBox, CListBoxOption, CListBoxSection } from '@coreui/react-pro'

export const ListBoxSelectableSectionsExample = () => (
  <CListBox
    ariaLabel="Skills"
    indicator="checkbox"
    sectionsSelectable
    selectionMode="multiple"
    style={{ maxWidth: '20rem' }}
  >
    <CListBoxSection label="Frontend">
      <CListBoxOption value="html">HTML</CListBoxOption>
      <CListBoxOption value="css">CSS</CListBoxOption>
      <CListBoxOption value="js">JavaScript</CListBoxOption>
    </CListBoxSection>
    <CListBoxSection label="Backend">
      <CListBoxOption value="python">Python</CListBoxOption>
      <CListBoxOption value="ruby">Ruby</CListBoxOption>
      <CListBoxOption value="go">Go</CListBoxOption>
    </CListBoxSection>
  </CListBox>
)
```

## Descriptions

An option can carry a second line. Pass it as `description` — typeahead then matches the option's name alone, so typing skips the description text.

```html
import React from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxDescriptionsExample = () => {
  return (
    <CListBox ariaLabel="Plan" style={{ maxWidth: '20rem' }}>
      <CListBoxOption description="One project, community support" value="free">
        Free
      </CListBoxOption>
      <CListBoxOption description="Unlimited projects, shared billing" value="team">
        Team
      </CListBoxOption>
    </CListBox>
  )
}
```

Descriptions and the checkbox indicator work together: the indicator stays centred against the whole option and both lines of the text start past it, so a two-line option keeps the same left column as the select-all button above.

```html
import React from 'react'
import { CListBox, CListBoxHeader, CListBoxOption, CListBoxSelectAll } from '@coreui/react-pro'

export const ListBoxDescriptionsCheckboxesExample = () => {
  return (
    <CListBox
      ariaLabel="Plan"
      indicator="checkbox"
      selectionMode="multiple"
      style={{ maxWidth: '22rem' }}
    >
      <CListBoxHeader>
        <CListBoxSelectAll />
      </CListBoxHeader>
      <CListBoxOption description="One project, community support" value="free">
        Free
      </CListBoxOption>
      <CListBoxOption description="Unlimited projects, shared billing" value="team">
        Team
      </CListBoxOption>
      <CListBoxOption description="SSO, audit log and a named contact" value="enterprise">
        Enterprise
      </CListBoxOption>
    </CListBox>
  )
}
```

## Links

An option with an `href` renders as an `<a>`, navigates on click and on <kbd>Enter</kbd>, and calls `onAction` on the way out — so a list of destinations keeps working with the keyboard without losing the browser's own link behavior.

```html
import React from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxLinksExample = () => {
  return (
    <CListBox ariaLabel="Documentation" selectionMode="none" style={{ maxWidth: '20rem' }}>
      <CListBoxOption href="/components/menu/" value="menu">
        Menu
      </CListBoxOption>
      <CListBoxOption href="/components/list-group/" value="list-group">
        List group
      </CListBoxOption>
      <CListBoxOption href="/components/dropdown/" value="dropdown">
        Dropdown
      </CListBoxOption>
    </CListBox>
  )
}
```

## Disabled items

`disabled` keeps the user out: it takes an option out of the keyboard order and out of every selection the user makes, the arrows, a click, a section label, a range and select all, and writes `aria-disabled` on it. Your code is not kept out of the values it sets, as with a native `<select>`: a disabled value in `defaultSelected` or in a controlled `selected` is selected and read as selected. `select`, `toggle` and `selectAll` from `useListBox` act as the user would and leave a disabled option alone. The same prop on `CListBox` does it for all of it and writes `aria-disabled` on the list.

```html
import React from 'react'
import { CListBox, CListBoxOption } from '@coreui/react-pro'

export const ListBoxDisabledExample = () => {
  return (
    <CListBox ariaLabel="Sandwich" style={{ maxWidth: '20rem' }}>
      <CListBoxOption value="lettuce">Lettuce</CListBoxOption>
      <CListBoxOption disabled value="tomato">
        Tomato — out of stock
      </CListBoxOption>
      <CListBoxOption value="onion">Onion</CListBoxOption>
    </CListBox>
  )
}
```

## Search

`search` puts a search field between the header and the options and hides what does not match. A hidden option leaves the navigation, so everything downstream follows: the arrows skip it, the select-all button takes only what is left on screen, and the counter of a header drops it — the selection itself survives. `searchPlaceholder` sets the placeholder, `ariaSearchLabel` the accessible name, and `onSearch` reports every query.

```html
import React from 'react'
import { CListBox, CListBoxEmpty, CListBoxOption } from '@coreui/react-pro'

const options = ['Lettuce', 'Tomato', 'Onion', 'Cheese', 'Bacon']

export const ListBoxSearchExample = () => (
  <CListBox ariaLabel="Sandwich" search style={{ maxWidth: '20rem' }}>
    {options.map((option) => (
      <CListBoxOption key={option} value={option.toLowerCase()}>
        {option}
      </CListBoxOption>
    ))}
    <CListBoxEmpty>No results</CListBoxEmpty>
  </CListBox>
)
```

### Filtering from your own field

`query` filters the options from a field of your own — the same matching the built-in search does, with none of its markup. It takes over while it is set, so a panel that already has a search field elsewhere drives the list through this one prop.

### Matching past the accents

`searchNormalize` compares both sides without their diacritics, so `zoe` finds `Zoë` and `oe` finds both. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched — only the comparison changes. It applies to the built-in field and to `query` alike.

```html
import React from 'react'
import { CListBox, CListBoxEmpty, CListBoxOption } from '@coreui/react-pro'

export const ListBoxSearchNormalizeExample = () => (
  <CListBox ariaLabel="Name" search searchNormalize style={{ maxWidth: '20rem' }}>
    <CListBoxOption value="zoe">Zoë</CListBoxOption>
    <CListBoxOption value="renee">Renée</CListBoxOption>
    <CListBoxOption value="joao">João</CListBoxOption>
    <CListBoxOption value="ana">Ana</CListBoxOption>
    <CListBoxEmpty>No results</CListBoxEmpty>
  </CListBox>
)
```

### External search

`search="external"` hides nothing: the options stay as they come and the query is only reported through `onSearch`, so the fetching and the filtering are yours. Answer with a new `items`, and pair it with `loading` while the answer is on its way.

```html
import React, { useEffect, useState } from 'react'
import { CListBox, useDebouncedCallback } from '@coreui/react-pro'
import type { ListBoxOption } from '@coreui/react-pro'

type UserRecord = {
  first_name: string
  id: number
  last_name: string
}

export const ListBoxExternalSearchExample = () => {
  const [items, setItems] = useState<ListBoxOption[]>([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = useDebouncedCallback((next: string) => {
    setQuery(next)
  }, 300)

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://apitest.coreui.io/demos/users?first_name=${query}&limit=20`
        )
        const result = await response.json()

        setItems(
          result.records.map((record: UserRecord) => ({
            label: `${record.first_name} ${record.last_name}`,
            value: String(record.id),
          }))
        )
      } catch (error) {
        console.error('Error fetching users:', error)
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    getUsers()
  }, [query])

  return (
    <CListBox
      ariaLabel="Users"
      items={items}
      loading={loading}
      onSearch={handleSearch}
      search="external"
      searchPlaceholder="Search users..."
      style={{ maxWidth: '20rem' }}
    />
  )
}
```

## Empty state

A `CListBoxEmpty` is shown whenever nothing is left to navigate and hidden as soon as something is, so filtering a list has somewhere to land. An option hidden with `hidden` leaves the navigation and keeps its selection.

```html
import React, { useState } from 'react'
import { CFormInput, CListBox, CListBoxEmpty, CListBoxOption } from '@coreui/react-pro'

const options = ['Lettuce', 'Tomato', 'Onion', 'Cheese']

export const ListBoxEmptyExample = () => {
  const [query, setQuery] = useState('')

  return (
    <>
      <CFormInput
        className="mb-3"
        label="Filter"
        style={{ maxWidth: '20rem' }}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <CListBox ariaLabel="Results" style={{ maxWidth: '20rem' }}>
        {options.map((option) => (
          <CListBoxOption
            hidden={!option.toLowerCase().includes(query.trim().toLowerCase())}
            key={option}
            value={option.toLowerCase()}
          >
            {option}
          </CListBoxOption>
        ))}
        <CListBoxEmpty>No results</CListBoxEmpty>
      </CListBox>
    </>
  )
}
```

## Long lists

`optionsMaxHeight` caps the height of the options and turns them into a scroll container. `virtualScroller` goes further and mounts only the rows on screen, `visibleItems` of them at a time — the selection, the navigation and the search are untouched, because the scroller is the window, not the model. It renders the options of `items`.

```html
import React from 'react'
import { CListBox } from '@coreui/react-pro'

const items = Array.from({ length: 1000 }, (_, index) => ({
  label: `Option ${index + 1}`,
  value: String(index + 1),
}))

export const ListBoxVirtualScrollerExample = () => (
  <CListBox
    ariaLabel="Option"
    items={items}
    style={{ maxWidth: '20rem' }}
    virtualScroller
    visibleItems={8}
  />
)
```

## Loading

`loading` covers the wait: it writes `aria-busy` on the options, shows a row with a spinner and the `loadingLabel` text below them, announces that text to screen readers when the wait starts or the list shows up waiting, and holds `CListBoxEmpty` back, so "No results" never flashes before the answer arrives. The options stay as they are and can still be picked, so a choice from the shown results counts.

## With an input

Pass `activeDescendant` a ref to an input, the element, or a CSS selector, and the focus never leaves it: the list box drops the roving `tabindex`, gives every option an `id`, and keeps `aria-activedescendant` and `aria-controls` on the field pointing at the highlighted option. The arrows and <kbd>Enter</kbd> are handled on the field, so typing and choosing happen in one place — a combobox in two elements. A field the user types in keeps the keys that belong to its text: <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Space</kbd> and the letters typeahead would otherwise take go to the caret.

```html
import React, { useRef, useState } from 'react'
import { CFormInput, CFormLabel, CListBox, CListBoxOption } from '@coreui/react-pro'

const options = ['Lettuce', 'Tomato', 'Onion', 'Cheese']

export const ListBoxInputExample = () => {
  const field = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string[]>([])

  return (
    <>
      <CFormLabel htmlFor="listBoxField">Filter</CFormLabel>
      <CFormInput
        aria-expanded={true}
        autoComplete="off"
        className="mb-3"
        id="listBoxField"
        ref={field}
        role="combobox"
        style={{ maxWidth: '20rem' }}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <CListBox
        activeDescendant={field}
        ariaLabel="Sandwich"
        selected={selected}
        style={{ maxWidth: '20rem' }}
        onSelectedChange={setSelected}
      >
        {options.map((option) => (
          <CListBoxOption
            hidden={!option.toLowerCase().includes(query.trim().toLowerCase())}
            key={option}
            value={option.toLowerCase()}
          >
            {option}
          </CListBoxOption>
        ))}
      </CListBox>
      <p className="mt-3 mb-0">Selected: {selected.join(', ') || 'nothing'}</p>
    </>
  )
}
```

## Accessibility

`CListBox` renders a `.list-box` container holding an optional `CListBoxHeader` and the `.list-box-options` element that carries `role="listbox"`; it writes `role="option"` on every option, `role="group"` on every section, `aria-multiselectable` in `multiple` mode and `aria-selected` on every option outside `none` mode. `ariaLabel` names the options, and each section is named by its `label`.

| Key | Action |
| --- | --- |
| `↓` / `↑` | Move the highlight to the next/previous option; it stops at the ends |
| `Home` / `End` | Move the highlight to the first/last option |
| `Space` | Toggle the option in `multiple` mode, select it in `single` |
| `Enter` | Select the option; on a link, follow it; in `none` mode, call `onAction` |
| `Shift` + `↓` / `↑` | Extend the selection to the next/previous option |
| `Shift` + `Home` / `End` | Extend the selection to the first/last option |
| `Ctrl` / `Cmd` + `A` | Select every option (`multiple` mode) |
| `A` – `Z` | Move the highlight to the next option whose label starts with what you typed |

## Customizing

### CSS variables

The list box reads its own set of CSS variables, declared on `.list-box`. Set them on a single list box to restyle it without recompiling:

```css
--cui-list-box-padding-y
--cui-list-box-padding-x
--cui-list-box-gap
--cui-list-box-color
--cui-list-box-bg
--cui-list-box-font-size
--cui-list-box-border-width
--cui-list-box-border-color
--cui-list-box-border-radius
--cui-list-box-search-margin
--cui-list-box-option-padding-y
--cui-list-box-option-padding-x
--cui-list-box-option-gap
--cui-list-box-option-border-radius
--cui-list-box-option-hover-color
--cui-list-box-option-hover-bg
--cui-list-box-option-active-color
--cui-list-box-option-active-bg
--cui-list-box-option-selected-color
--cui-list-box-option-selected-bg
--cui-list-box-option-disabled-color
--cui-list-box-option-description-color
--cui-list-box-option-description-font-size
--cui-list-box-section-label-color
--cui-list-box-section-label-font-size
--cui-list-box-section-label-padding
```

`translucent` renders the list on a translucent, blurred background — the same treatment the menu surfaces use.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CListBox /&gt;](./api/#clistbox)
- [&lt;CListBoxEmpty /&gt;](./api/#clistboxempty)
- [&lt;CListBoxHeader /&gt;](./api/#clistboxheader)
- [&lt;CListBoxOption /&gt;](./api/#clistboxoption)
- [&lt;CListBoxSection /&gt;](./api/#clistboxsection)
- [&lt;CListBoxSelectAll /&gt;](./api/#clistboxselectall)
- [&lt;CListBoxSubtitle /&gt;](./api/#clistboxsubtitle)
- [&lt;CListBoxTitle /&gt;](./api/#clistboxtitle)
