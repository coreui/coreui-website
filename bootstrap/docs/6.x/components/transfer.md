# Bootstrap 6 Transfer

> Two lists side by side and four buttons that move options between them — the selection or everything at once: a select-all header with a counter, an optional per-list search, a one-way mode and an announcement of every move.

## Overview

_Added in 6.0.0._

A transfer moves values between two lists — what is available on the left, what has been chosen on the right. It is two [list boxes](https://coreui.io/bootstrap/docs/components/list-box/) and a column of buttons: the plugin puts each list in `multiple` selection mode with the checkbox indicator, enables each button while it has something to move, and moves the option elements from one `.list-box-options` to the other.

```html
<div class="transfer" data-coreui-transfer>
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="1">List item 1</div>
      <div class="list-box-option" data-coreui-value="2">List item 2</div>
      <div class="list-box-option" data-coreui-value="3">List item 3</div>
      <div class="list-box-option" data-coreui-value="4">List item 4</div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="5">List item 5</div>
    </div>
  </div>
</div>
```

Everything inside a list is the list box's: the options and their values, the selection, the arrow keys, the typeahead and the select-all button. The transfer owns what happens between the lists, so nothing here is a second implementation of the same behavior — read the [List box](https://coreui.io/bootstrap/docs/components/list-box/) page for the parts a list is made of.

Each side is a `.list-box.transfer-list` marked `data-coreui-transfer-list="source"` or `="target"`, and each button a `[data-coreui-transfer-move]` naming what it does: `target` and `source` move the selection, `target-all` and `source-all` move everything the list currently shows. The rest is filled in for you: an empty select-all button takes the list's title, an empty move button takes its chevron, each header gets the list box's `{selected}/{available} selected` counter, the options element gets the title as its accessible name, and the buttons get their labels and an `aria-controls`.

"All" is the same scope the select-all button works on — the visible, enabled options — so with a search running, the all button moves what the search left behind and nothing more.

The two lists order themselves differently, and on purpose: the target keeps the order values arrived in, so a chosen list reads as a history of what was picked, while the source puts a returned value back exactly where it started rather than at the end. Each option's place in the source is fixed when the transfer initializes — `update()` gives one added later a place after the options already there.

The transfer caps how tall a list gets — `--cui-transfer-list-max-height` puts a `max-height` and `overflow-y: auto` on `.list-box-options`, so a long list scrolls inside its own box instead of stretching the row.

## Items from configuration

Instead of writing every option by hand, hand the plugin an `items` array and it renders both lists — the same markup the sections above document, so every class, role and attribute is where you would have put it. An item is `{ value, label, description, disabled, selected }`; an entry with its own `items` array is a section. `value` names what starts in the target list, in the order you list it, and everything else lands in the source in the order the items came in — including a value moved back later, which returns to its place among the items rather than to the end.

Labels are text: they land as `textContent`, so a label carrying markup shows up as characters. Set `html: true` to have them parsed instead — the result runs through the sanitizer first, and `sanitize`, `sanitizeFn` and `allowList` steer it the same way they do everywhere else.

Leave an empty `.list-box-options` in each list so you can name it; the plugin appends one when it is missing, but then the list has no accessible name. Options already written inside it are replaced — `items` owns both lists from the moment it is set.

```html
<div class="transfer" id="transferItems">
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox" aria-label="Team"></div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox" aria-label="On call"></div>
  </div>
</div>
```

```js
const element = document.getElementById('transferItems')

coreui.Transfer.getOrCreateInstance(element, {
  items: [
    {
      label: 'Engineering',
      items: [
        { value: 'ada', label: 'Ada Lovelace', description: 'Analyst' },
        { value: 'grace', label: 'Grace Hopper', description: 'Compilers' },
        {
          value: 'alan', label: 'Alan Turing', description: 'Cryptanalysis', disabled: true
        }
      ]
    },
    {
      label: 'Design',
      items: [
        { value: 'ray', label: 'Ray Eames' },
        { value: 'dieter', label: 'Dieter Rams' }
      ]
    }
  ],
  sourceTitle: 'Team',
  targetTitle: 'On call',
  value: ['grace']
})
```

`setItems(items)` rebuilds both lists at any time: the values the target holds survive the rebuild as long as the new items still carry them, in the order they were chosen, and the rest go back to the source. A value that is gone drops out. `getItems()` hands back the array as it was given.

## Search

The search belongs to the list box — `search` and `searchPlaceholder` are passed to both of them, so each list gets its own field and filters itself; how it works, and how to bring your own input, is on the [List box](https://coreui.io/bootstrap/docs/components/list-box/#search) page. What the transfer adds is that a filtered list still counts: the [counter](https://coreui.io/bootstrap/docs/components/list-box/#counter) in the header reads only what the search left — on both sides of the slash, so a selected value it hid stops counting without being deselected — the select-all button takes only what is left on screen, and "all" moves exactly that.

```html
<div class="transfer" data-coreui-transfer data-coreui-search="true">
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="apple">Apple</div>
      <div class="list-box-option" data-coreui-value="apricot">Apricot</div>
      <div class="list-box-option" data-coreui-value="banana">Banana</div>
      <div class="list-box-option" data-coreui-value="blueberry">Blueberry</div>
      <div class="list-box-option" data-coreui-value="cherry">Cherry</div>
      <div class="list-box-option" data-coreui-value="cranberry">Cranberry</div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
    </div>
  </div>
</div>
```

## External search

`search: 'external'` hands the searching over to you — the [list box's external mode](https://coreui.io/bootstrap/docs/components/list-box/#external-search) on both lists at once. The transfer re-emits what they report as `search.coreui.transfer`, adding the `side` that was typed in, and you answer with `setItems()` — one method for both lists, so pass the whole set you want shown and leave out what the query rules out. Values already in the target stay there as long as your set still carries them, which is why the example below keeps the chosen users in what it sends back.

`loading` covers the wait: `setLoading(true, 'source')` writes `aria-busy="true"` on that list's options element and shows a loading row with `loadingLabel` below its options until the answer arrives. The second argument is what scopes it — `setLoading(true)` and the `loading` option both cover *both* lists, so a list you never fetch for keeps its loading row until something releases it. Fetch one list, mark one list.

Rebuilding is a fresh start for the selection: after `setItems()` neither list has anything checked, and `selected` on an item applies to the first render only, so a re-fetch never brings the checkboxes back. Moving options across clears the destination's selection too — what arrives is ready to be picked, not already picked.

```html
<div class="transfer" id="transferExternalSearch">
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox" aria-label="Users"></div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox" aria-label="Invited"></div>
  </div>
</div>
```

```js
const element = document.getElementById('transferExternalSearch')
const transfer = coreui.Transfer.getOrCreateInstance(element, {
  search: 'external',
  sourceTitle: 'Users',
  targetTitle: 'Invited'
})

const invited = new Map()

const loadUsers = async (query = '') => {
  transfer.setLoading(true, 'source')

  try {
    const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${query}&limit=10`)
    const { records } = await response.json()
    const users = records.map(user => ({
      value: String(user.id),
      label: `${user.first_name} ${user.last_name}`,
      description: user.email
    }))
    const found = new Set(users.map(user => user.value))

    transfer.setItems([...users, ...[...invited.values()].filter(user => !found.has(user.value))])
  } catch (error) {
    console.error('Error fetching users:', error)
    transfer.setItems([...invited.values()])
  } finally {
    transfer.setLoading(false, 'source')
  }
}

element.addEventListener('change.coreui.transfer', event => {
  const users = new Map(transfer.getItems().map(user => [user.value, user]))

  invited.clear()

  for (const value of event.value) {
    invited.set(value, users.get(value))
  }
})

let debounceTimer = null

element.addEventListener('search.coreui.transfer', event => {
  if (event.side !== 'source') {
    return
  }

  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => loadUsers(event.query), 200)
})

loadUsers()
```

## One way

`oneWay` takes the return trip away: both buttons that move back are hidden, `moveToSource()` and `moveAllToSource()` refuse, and a value that has been chosen stays chosen.

```html
<div class="transfer" data-coreui-transfer data-coreui-one-way="true">
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="1">List item 1</div>
      <div class="list-box-option" data-coreui-value="2">List item 2</div>
      <div class="list-box-option" data-coreui-value="3">List item 3</div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
    </div>
  </div>
</div>
```

## Titles

`sourceTitle` and `targetTitle` name the two lists. The title is written into the select-all button when the button is empty, so a button with its own text keeps it, and it becomes the list's accessible name and the destination named in the move announcement.

```html
<div class="transfer" data-coreui-transfer data-coreui-source-title="Team" data-coreui-target-title="On call" data-coreui-selected-label="{count}/{total} picked">
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="ada">Ada</div>
      <div class="list-box-option" data-coreui-value="grace">Grace</div>
      <div class="list-box-option" data-coreui-value="linus">Linus</div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
    </div>
  </div>
</div>
```

## Descriptions

An option is the list box's, so it takes a `.list-box-option-label` and a `.list-box-option-description` here too — and the search matches on the label, not on the description.

```html
<div class="transfer" data-coreui-transfer>
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="read">
        <span class="list-box-option-label">Read</span>
        <span class="list-box-option-description">See the contents of a file</span>
      </div>
      <div class="list-box-option" data-coreui-value="write">
        <span class="list-box-option-label">Write</span>
        <span class="list-box-option-description">Change the contents of a file</span>
      </div>
      <div class="list-box-option" data-coreui-value="share">
        <span class="list-box-option-label">Share</span>
        <span class="list-box-option-description">Give someone else access</span>
      </div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
    </div>
  </div>
</div>
```

## Disabled items

`.disabled` with `aria-disabled="true"` takes an option out of the keyboard order and out of every selection method, so it never moves. Starting checked is a selection method too: `selected: true` next to `disabled: true` is ignored, so no move button ever picks the option up. `data-coreui-disabled="true"` on the transfer does the same for all of it: both lists go quiet and both buttons are disabled.

```html
<div class="transfer" data-coreui-transfer>
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="1">List item 1</div>
      <div class="list-box-option disabled" aria-disabled="true" data-coreui-value="2">List item 2 — locked</div>
      <div class="list-box-option" data-coreui-value="3">List item 3</div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
    </div>
  </div>
</div>
```

## Accessibility

Each list is a listbox of its own with the title as its accessible name, and the select-all button carries the state of its list in `aria-pressed` — all of that comes from [List box](https://coreui.io/bootstrap/docs/components/list-box/#accessibility), keyboard included: the arrows, <kbd>Home</kbd>, <kbd>End</kbd>, <kbd>Space</kbd>, <kbd>Shift</kbd> ranges, <kbd>Ctrl</kbd> + <kbd>A</kbd> and the typeahead all work inside the list that has the focus.

What the transfer adds is the crossing. Each move button is named — `ariaMoveToTargetLabel`, `ariaMoveToSourceLabel`, `ariaMoveAllToTargetLabel`, `ariaMoveAllToSourceLabel` (a button that already carries an `aria-label` keeps it) — points at the list it fills through `aria-controls`, and is disabled while it has nothing to move, so the keyboard never lands on a button that would do nothing. The chevrons are decorative `aria-hidden` SVGs, so the name is all a screen reader gets.

The move happens away from the focus, and the button that did it usually turns off in the process — a list with nothing selected left. Rather than dropping the focus on the document, the plugin puts it on the first option that just arrived.

Every move, either way, adds a message of its own to the live region of the page through [`announce()`](https://coreui.io/bootstrap/docs/accessibility/screen-readers/#announcing-messages), the same move made twice included: `ariaMovedAnnouncement` is `'{count} moved to {title}'` by default, with `{title}` the destination's title. `{count}` and `{title}` are replaced wherever they appear, so the sentence can be reordered for a translation.

| Key | Action |
| --- | --- |
| `Tab` | Move between the select-all button, the search field, the options and the move buttons |
| `↓` / `↑` | Move the highlight inside the focused list |
| `Space` | Toggle the highlighted option |
| `Shift` + `↓` / `↑` | Extend the selection inside the focused list |
| `Ctrl` / `Cmd` + `A` | Select every visible, enabled option of the focused list |
| `Enter` / `Space` | Move the selection when the focus is on a move button |

## Usage

### Via data attributes

Add `data-coreui-transfer` to a `.transfer` and the plugin initializes it on page load. Mark each `.list-box` with `data-coreui-transfer-list` and each button with `data-coreui-transfer-move`.

| Attribute | Description |
| --- | --- |
| `data-coreui-transfer` | Initializes the transfer on page load. |
| `data-coreui-transfer-list` | Marks a `.list-box` as the `source` or the `target` list. |
| `data-coreui-transfer-move` | Marks a move button: `target` / `source` move the selection, `target-all` / `source-all` move every visible, enabled option. |

A move button left empty gets the chevron its direction calls for; put anything of your own in it — a label, your own icon — and that is what stays.

```html
<div class="transfer" data-coreui-transfer>
  <div class="list-box transfer-list" data-coreui-transfer-list="source">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox">
      <div class="list-box-option" data-coreui-value="1">List item 1</div>
    </div>
  </div>
  <div class="transfer-actions">
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target-all"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="target"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source"></button>
    <button type="button" class="btn btn-subtle btn-sm" data-coreui-transfer-move="source-all"></button>
  </div>
  <div class="list-box transfer-list" data-coreui-transfer-list="target">
    <div class="list-box-header">
      <button type="button" class="list-box-select-all" data-coreui-select-all></button>
    </div>
    <div class="list-box-options" role="listbox"></div>
  </div>
</div>
```

### Via JavaScript

```js
const transfer = new coreui.Transfer('#myTransfer', {
  search: true,
  sourceTitle: 'Team',
  targetTitle: 'On call'
})
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `allowList` | object | `SVGAllowlist` | What the icon sanitizer keeps. |
| `ariaMoveAllToSourceLabel` | string | `'Move all to available'` | Accessible name of the button that moves everything back to the source list. |
| `ariaMoveAllToTargetLabel` | string | `'Move all to chosen'` | Accessible name of the button that moves everything to the target list. |
| `ariaMovedAnnouncement` | string | `'{count} moved to {title}'` | What is announced after a move. `{count}` is how many options moved, `{title}` the destination's title. |
| `ariaMoveToSourceLabel` | string | `'Move to available'` | Accessible name of the button that moves the selection back to the source list. A button with its own `aria-label` keeps it. |
| `ariaMoveToTargetLabel` | string | `'Move to chosen'` | Accessible name of the button that moves the selection to the target list. |
| `disabled` | boolean | `false` | Turns the whole transfer off: both list boxes, both move buttons and both search fields. |
| `html` | boolean | `false` | Parse the labels and descriptions of `items` as markup instead of text. Passed to both list boxes. |
| `indicator` | string | `'checkbox'` | Passed to both list boxes. `'none'` drops the checkbox in front of every option. |
| `items` | array | `[]` | The options of both lists, rendered instead of the markup: `{ value, label, description, disabled, selected }`, or `{ label, items, disabled }` for a section, where `disabled: true` keeps every item in it on its side. `value` decides which of them start in the target list, `selected` which start checked — on the first render only, and never a disabled item. |
| `loading` | boolean | `false` | Marks both lists as busy: `aria-busy="true"` on the options element and a loading row below the options, while the lists stay usable. Release it with `setLoading(false)`, or scope it per list with `setLoading(value, list)`. |
| `loadingLabel` | string | `'Loading…'` | Text of the loading row of a busy list, announced to screen readers when it starts loading. |
| `moveAllToSourceIcon` | string | double chevron SVG | Icon of the button that moves everything back. Inline SVG, put in the button only when the markup left it empty. |
| `moveAllToTargetIcon` | string | double chevron SVG | Icon of the button that moves everything across. |
| `moveToSourceIcon` | string | chevron SVG | Icon of the button that moves the selection back. |
| `moveToTargetIcon` | string | chevron SVG | Icon of the button that moves the selection across. |
| `oneWay` | boolean | `false` | Hides and disables both buttons that move back, and makes `moveToSource()` and `moveAllToSource()` no-ops. |
| `sanitize` | boolean | `true` | Run the icon strings through the sanitizer. |
| `sanitizeFn` | null, function | `null` | Your own sanitizer, used instead of the built-in one. |
| `search` | boolean, string | `false` | Passed to both list boxes: builds a search field above each list. `'external'` filters nothing — every keystroke fires `search.coreui.transfer` and you answer with `setItems()`. |
| `searchPlaceholder` | string | `'Search'` | Passed to both list boxes as the placeholder of their search field, and used as the first half of each field's accessible name so the two are told apart. |
| `selectedLabel` | string, function | `` (count, total) => `${count}/${total} selected` `` | Passed to both list boxes as their header count text. The transfer turns their [counter](https://coreui.io/bootstrap/docs/components/list-box/#counter) on. |
| `sourceTitle` | string | `'Available'` | Title of the source list: its select-all label when the button is empty, and its accessible name. |
| `targetTitle` | string | `'Chosen'` | Title of the target list. |
| `typeahead` | boolean | `true` | Passed to both list boxes: move the highlight to the option matching what the user types. |
| `value` | array | `[]` | The values of `items` that start in the target list, in the order given. The rest go to the source list. |

### Methods

| Method | Description |
| --- | --- |
| `dispose` | Destroys the transfer and both list boxes, and removes the option containers it created. |
| `getInstance` | Static method which allows you to get the transfer instance associated to a DOM element, you can use it like this: `coreui.Transfer.getInstance(element)`. |
| `getItems()` | The items array both lists were built from. |
| `getOrCreateInstance` | Static method which returns a transfer instance associated to a DOM element or creates a new one in case it wasn't initialized. You can use it like this: `coreui.Transfer.getOrCreateInstance(element)`. |
| `getSelectedValues(list)` | The selected values of `'source'` or `'target'`. Throws when `list` is anything else. |
| `getSource()` | The values in the source list, in document order. |
| `getTarget()` | The values in the target list, in document order. |
| `moveAllToSource()` | The same in the other direction. Does nothing with `oneWay`. |
| `moveAllToTarget()` | Moves every visible, enabled option of the source list — the same scope the select-all button works on. |
| `moveToSource(values?)` | The same in the other direction. Does nothing with `oneWay`. |
| `moveToTarget(values?)` | Moves the source list's selection to the target list. Pass an array of values to move exactly those, selected or not. |
| `setItems(items)` | Rebuilds both lists from a new `items` array. The values the target holds keep their place as long as the new items still carry them; everything else goes to the source in the items order. Both selections come back empty. |
| `setLoading(loading, list?)` | Marks a list busy while you fetch: pass `'source'` or `'target'` for one of them, nothing for both. A list left busy keeps its loading row, so release every list you marked. |
| `update` | Re-reads the DOM: options added or removed reach both list boxes, which re-apply their search and counter, and the move buttons are re-evaluated. |

### Events

Events fire on the `.transfer` element.

| Event type | Description |
| --- | --- |
| `change.coreui.transfer` | Fired after a move settled; `event.value` is the target list and `event.source` the source list. `event.target` stays the `.transfer` element. |
| `move.coreui.transfer` | Fires before options are moved; `event.direction` is `'source'` or `'target'` and `event.values` the values about to move. Cancelable — calling `preventDefault()` leaves both lists as they were. |
| `moved.coreui.transfer` | Fired after the options were moved, with the same `direction` and `values`. |
| `search.coreui.transfer` | Fired on every keystroke in a search field with `search: 'external'`; `event.side` is `'source'` or `'target'` and `event.query` what was typed. Nothing is filtered — answer with `setItems()`. |

```js
const myTransfer = document.getElementById('myTransfer')
myTransfer.addEventListener('change.coreui.transfer', event => {
  console.log(event.value)
})
```

## Customizing

### CSS variables

```scss
$transfer-tokens: defaults(
  (
    --cui-transfer-gap: 1rem,
    --cui-transfer-actions-gap: .5rem,
    --cui-transfer-icon-size: 1rem,
    --cui-transfer-list-min-height: 8rem,
    --cui-transfer-list-max-height: 16rem,
  ),
  $transfer-tokens
);
```
