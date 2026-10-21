# React Transfer Component

> Two lists side by side and four buttons that move values between them — the selection or everything at once: a select-all header with a counter, an optional per-list search, a one-way mode and an announcement of every move.

## Overview

_Added in 6.0.0._

A transfer moves values between two lists — what is available on the left, what has been chosen on the right. It is two [list boxes](https://coreui.io/react/docs/components/list-box/) and a column of buttons: each list runs in `multiple` selection mode with the checkbox indicator, each button is enabled while it has something to move, and a move takes the values from one list to the other.

```html
import React from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { label: 'List item 1', value: '1' },
  { label: 'List item 2', value: '2' },
  { label: 'List item 3', value: '3' },
  { label: 'List item 4', value: '4' },
  { label: 'List item 5', value: '5' },
]

export const TransferExample = () => {
  return <CTransfer defaultValue={['5']} items={items} />
}
```

Everything inside a list is the list box's: the options and their values, the selection, the arrow keys, the typeahead and the select-all button. `CTransfer` owns what happens between the lists, so nothing here is a second implementation of the same behavior — read the [List box](https://coreui.io/react/docs/components/list-box/) page for the parts a list is made of.

`items` is what both lists are made of, each entry a `value` plus a `label` and, if you want them, a `description` and `disabled`. The target list holds the values of `value` / `defaultValue`, in the order they were chosen; the source list holds the rest, in the order `items` gives them.

"All" is the same scope the select-all button works on — the visible, enabled options — so with a search running, the all button moves what the search left behind and nothing more.

`CTransfer` is a renderer over `useTransfer()`, which owns the two lists, the two selections, the two queries and the moves. Call the hook directly to build a surface of your own.

The transfer caps how tall a list gets — `--cui-transfer-list-max-height` puts a `max-height` and `overflow-y: auto` on the options, so a long list scrolls inside its own box instead of stretching the row.

## Controlled value

`value` is the target list, so the transfer is controlled by the values it has chosen. `onChange` reports the next value and what the move was — `direction` is the list the options landed in, `moved` the values that crossed. Leave `value` out and pass `defaultValue` for the uncontrolled mode.

```html
import React, { useState } from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { label: 'Ada', value: 'ada' },
  { label: 'Grace', value: 'grace' },
  { label: 'Linus', value: 'linus' },
]

export const TransferControlledExample = () => {
  const [value, setValue] = useState<string[]>(['grace'])

  return (
    <>
      <CTransfer items={items} onChange={(next) => setValue(next)} value={value} />
      <div className="mt-4">On call: {value.join(', ') || 'nobody'}</div>
    </>
  )
}
```

## Search

`search` is the [list box's own search](https://coreui.io/react/docs/components/list-box/#search), put above each of the two lists: it hides the options that do not match, which takes them out of the navigation, out of the counter and out of the select-all scope, while the selection survives.

```html
import React from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { label: 'Apple', value: 'apple' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Cranberry', value: 'cranberry' },
]

export const TransferSearchExample = () => {
  return <CTransfer items={items} search />
}
```

The search matches an option's label, or its `textValue` when it carries one — the description is left out of the match. `searchPlaceholder` is the placeholder of both fields and the first half of each field's accessible name, and `onSearch` reports every query with the list it belongs to, so the two fields can be watched from one callback.

### External search

`search="external"` filters nothing: the lists show whatever `items` holds, and the query is only reported through `onSearch` — the fetching and the filtering are yours, as on the [list box](https://coreui.io/react/docs/components/list-box/#external-search). `value` outlives a change of `items`: a value still in the new set stays in the target in its own order, and a value that's gone leaves both lists. Keep the chosen items in the set you hand back and the target holds still while the source is refetched.

`loading` covers the wait. Pass `true` to mark both lists, or `{ source: true }` / `{ target: true }` to mark the one that is waiting: its options are marked `aria-busy` and a row with `loadingLabel` shows below them, while they stay usable.

```html
import React, { useEffect, useRef, useState } from 'react'
import { CTransfer, useDebouncedCallback } from '@coreui/react-pro'
import type { TransferDirection, TransferItem } from '@coreui/react-pro'

type UserRecord = {
  first_name: string
  id: number
  last_name: string
}

export const TransferExternalSearchExample = () => {
  const [items, setItems] = useState<TransferItem[]>([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [value, setValue] = useState<string[]>([])
  const chosen = useRef<string[]>([])

  const handleSearch = useDebouncedCallback((side: TransferDirection, next: string) => {
    if (side === 'source') {
      setQuery(next)
    }
  }, 300)

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true)
      try {
        const response = await fetch(
          `https://apitest.coreui.io/demos/users?first_name=${query}&limit=20`
        )
        const result = await response.json()
        const records: TransferItem[] = result.records.map((record: UserRecord) => ({
          label: `${record.first_name} ${record.last_name}`,
          value: String(record.id),
        }))

        setItems((previous) => [
          ...previous.filter((item) => chosen.current.includes(item.value)),
          ...records.filter((item) => !chosen.current.includes(item.value)),
        ])
      } catch (error) {
        console.error('Error fetching users:', error)
        setItems((previous) => previous.filter((item) => chosen.current.includes(item.value)))
      } finally {
        setLoading(false)
      }
    }

    getUsers()
  }, [query])

  return (
    <CTransfer
      items={items}
      loading={{ source: loading }}
      onChange={(next) => {
        chosen.current = next
        setValue(next)
      }}
      onSearch={handleSearch}
      search="external"
      searchPlaceholder="Search users..."
      sourceTitle="Users"
      targetTitle="Invited"
      value={value}
    />
  )
}
```

## One way

`oneWay` takes the return trip away: both buttons that move back are gone, `moveToSource()` and `moveAllToSource()` refuse, and a value that has been chosen stays chosen.

```html
import React from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { label: 'List item 1', value: '1' },
  { label: 'List item 2', value: '2' },
  { label: 'List item 3', value: '3' },
]

export const TransferOneWayExample = () => {
  return <CTransfer items={items} oneWay />
}
```

## Titles

`sourceTitle` and `targetTitle` name the two lists. The title is the label of the list's select-all button, its accessible name, and the destination named in the move announcement. `selectedLabel` builds each list's counter text — a function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced.

```html
import React from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { label: 'Ada', value: 'ada' },
  { label: 'Grace', value: 'grace' },
  { label: 'Linus', value: 'linus' },
]

export const TransferTitlesExample = () => {
  return (
    <CTransfer
      items={items}
      selectedLabel={(count, total) => `${count}/${total} picked`}
      sourceTitle="Team"
      targetTitle="On call"
    />
  )
}
```

## Descriptions

An option is the list box's, so `description` adds a second line here too — and the search matches on the label, not on the description.

```html
import React from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { description: 'See the contents of a file', label: 'Read', value: 'read' },
  { description: 'Change the contents of a file', label: 'Write', value: 'write' },
  { description: 'Give someone else access', label: 'Share', value: 'share' },
]

export const TransferDescriptionsExample = () => {
  return <CTransfer items={items} />
}
```

Pass `renderItem` to render an option yourself. It takes the option and its index, and the option it hands you carries the `hidden` the search left behind — pass it on, or the filter stops showing.

## Disabled items

`disabled` on an entry of `items` takes the option out of the keyboard order and out of every selection method, so it never moves: not through a move button, and not through `moveToTarget()` or `moveToSource()` with the value in hand. `disabled` on the transfer does the same for all of it: both lists go quiet and every button is disabled.

```html
import React from 'react'
import { CTransfer } from '@coreui/react-pro'

const items = [
  { label: 'List item 1', value: '1' },
  { disabled: true, label: 'List item 2 — locked', value: '2' },
  { label: 'List item 3', value: '3' },
]

export const TransferDisabledExample = () => {
  return <CTransfer items={items} />
}
```

## Accessibility

Each list is a listbox of its own with the title as its accessible name, and the select-all button carries the state of its list in `aria-pressed` — all of that comes from [List box](https://coreui.io/react/docs/components/list-box/#accessibility), keyboard included: the arrows, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Space</kbd>, <kbd>Shift</kbd> ranges, <kbd>Ctrl</kbd> + <kbd>A</kbd> and the typeahead all work inside the list that has the focus.

What the transfer adds is the crossing. Each move button is named — `ariaMoveToTargetLabel`, `ariaMoveToSourceLabel`, `ariaMoveAllToTargetLabel`, `ariaMoveAllToSourceLabel` — and is disabled while it has nothing to move, so the keyboard never lands on a button that would do nothing. The chevrons are decorative, so the name is all a screen reader gets.

The move happens away from the focus, and the button that did it usually turns off in the process — a list with nothing selected left. Rather than dropping the focus on the document, the component puts it on the first option that just arrived.

Every move, either way, adds a message of its own to the live region of the page through [`announce()`](https://coreui.io/react/docs/getting-started/accessibility/#announcing-messages) once it is applied, so a move that a controlled `value` refuses is not announced and the same move made twice is announced twice: `ariaMovedAnnouncement` is `'{count} moved to {title}'` by default, with `{title}` the destination's title. `{count}` and `{title}` are replaced wherever they appear, so the sentence can be reordered for a translation.

| Key | Action |
| --- | --- |
| `Tab` | Move between the select-all button, the search field, the options and the move buttons |
| `↓` / `↑` | Move the highlight inside the focused list |
| `Space` | Toggle the highlighted option |
| `Shift` + `↓` / `↑` | Extend the selection inside the focused list |
| `Ctrl` / `Cmd` + `A` | Select every visible, enabled option of the focused list |
| `Enter` / `Space` | Move the selection when the focus is on a move button |

## Customizing

### CSS variables

The transfer reads its own set of CSS variables, declared on `.transfer`. Set them on a single transfer to restyle it without recompiling:

```css
--cui-transfer-gap
--cui-transfer-actions-gap
--cui-transfer-list-min-height
--cui-transfer-list-max-height
```

The lists carry the [list box](https://coreui.io/react/docs/components/list-box/#css-variables) variables on top of these, so the padding, the colors and the option states are set there.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CTransfer /&gt;](./api/#ctransfer)
