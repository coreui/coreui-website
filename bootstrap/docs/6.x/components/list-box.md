# Bootstrap 6 List Box

> A keyboard-driven list of values built on the ARIA listbox pattern: single, multiple or no selection, a select-all header, sections, descriptions, links, an empty state and an aria-activedescendant mode that keeps the focus in your own input.

## Overview

_Added in 6.0.0._

A list box presents a set of values and lets the user pick from them. `.list-box` is the container and the plugin's root; the list of choices lives in a `.list-box-options` child, which is what carries `role="listbox"` and the accessible name. The plugin owns the roles, the selection state and the keyboard: it writes `role="option"` on every `.list-box-option`, keeps `aria-selected` in step with the selection, moves a roving `tabindex` as the highlight moves, and scrolls the highlighted option into view. Before the highlight has moved that `tabindex` sits on the first navigable entry, which is a selectable section label when one comes first, so <kbd>Tab</kbd> enters the list where the arrows would.

```html
<div class="list-box" data-coreui-list-box style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Sandwich">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
    <div class="list-box-option" data-coreui-value="cheese">Cheese</div>
  </div>
</div>
```

Every option carries its value in `data-coreui-value`; an option without one is worth its text. Values are what the methods take and what the events report, so an option can be hidden, moved or re-rendered without disturbing the selection.

The options element is not a scroll container — a list with no height grows with its content. Cap it where you want one: `<div class="list-box-options" style="max-height: 12rem; overflow-y: auto">`. The plugin keeps the highlighted option in view either way, with `scrollIntoView({ block: 'nearest' })`.

### When to use

<div class="table-responsive">

| Component | Use it for |
| --- | --- |
| List box | Choosing a value — the choice stays on screen and is reported back to you. |
| [Menu](https://coreui.io/bootstrap/docs/components/menu/) | Running an action — the surface opens, something happens, it closes. |
| [List group](https://coreui.io/bootstrap/docs/components/list-group/) | Displaying content — a list of things to read, not to pick from. |

</div>

A list box is also the primitive the picker components are built from, so its markup and classes carry over to them.

## Selection

`selectionMode` decides what a click and <kbd>Space</kbd> do. In `single` (the default) one option is selected at a time and picking another replaces it.

```html
<div class="list-box" data-coreui-list-box data-coreui-selected="tomato" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Single">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
  </div>
</div>
```

In `multiple` a click toggles one option, <kbd>Shift</kbd> extends the selection from the last one, <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> on macOS) adds one without clearing the rest, and <kbd>Ctrl</kbd> + <kbd>A</kbd> takes everything. `aria-multiselectable` is written for you.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Multiple">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
    <div class="list-box-option" data-coreui-value="cheese">Cheese</div>
  </div>
</div>
```

With `none` nothing is ever selected and no `aria-selected` is written; activating an option fires `action.coreui.list-box` instead, which turns the list into a keyboard-navigable list of commands.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="none" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Actions">
    <div class="list-box-option" data-coreui-value="copy">Copy</div>
    <div class="list-box-option" data-coreui-value="rename">Rename</div>
    <div class="list-box-option" data-coreui-value="delete">Delete</div>
  </div>
</div>
```

### Select all

A `.list-box-select-all` button marked `data-coreui-select-all`, anywhere in the container, switches the whole list. It is not an option — it never takes an `option` role, never appears in `getSelectedValues()` and is reached with <kbd>Tab</kbd> rather than with the arrows. The plugin keeps its `aria-pressed` in step with the list (`true`, `false` or `mixed`) and points its `aria-controls` at the options element; clicking it selects everything or, when everything visible is already selected, drops that same set. Its own text is its name, so it needs no label.

`.list-box-header` is the strip above the options it usually sits in: a plain `<div>`, a flex row that takes whatever content belongs there — a title (`.list-box-title`), a counter (`.list-box-subtitle`), a button of your own — next to or instead of the switch.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple" data-coreui-indicator="checkbox" style="max-width: 20rem">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Select all</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Toppings">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
    <div class="list-box-option" data-coreui-value="cheese">Cheese</div>
  </div>
</div>
```

"Everything" means the options the user can actually reach — `selectAll()`, <kbd>Ctrl</kbd> + <kbd>A</kbd> and the button take the visible, enabled options and leave anything `hidden` or `disabled` alone, and the same set decides which values a second click drops, so a value the filter hid stays selected. The button reads as pressed once that set is selected, or once the values of it you selected fill what `selectionLimit` leaves after the values selected outside it, hidden by the filter or missing from the items; a click then drops the visible values. Pass an explicit list to `selectAll(values)` to select beyond the filter, and call `clear()` to empty the selection whatever the filter shows.

### Selection limit

`selectionLimit` caps how many options can be selected at once in `multiple` mode. Once the cap is reached the plugin refuses any further selection — from a click, <kbd>Space</kbd>, a range, <kbd>Ctrl</kbd> + <kbd>A</kbd>, the select-all button or the API — and fires `selectionLimit.coreui.list-box` once per interaction, with `event.limit` and `event.value` (the first refused value). Options are never disabled and deselecting always works, so the user picks what to give up rather than being locked out. A selected value the list does not show, because the filter hid it or an external answer does not carry it, still counts: the user gives it up once the list shows it again, and `clear()` drops it at any time. A range, <kbd>Ctrl</kbd> + <kbd>A</kbd> and the select-all button take options in document order until the cap is reached.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple" data-coreui-selection-limit="2" data-coreui-indicator="checkbox" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Toppings, pick two">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
    <div class="list-box-option" data-coreui-value="cheese">Cheese</div>
  </div>
</div>
```

With a limit, the select-all button counts as pressed once the visible, enabled options it selected fill the room the limit leaves after the values selected outside them, `mixed` while some are selected below that and not pressed while none is; clicking it while pressed drops the visible, enabled options it had selected.

## Items from configuration

Instead of writing every option by hand, hand the plugin an `items` array and it renders the list — the same markup the sections above document, so every class, role and attribute is where you would have put it. An item is `{ value, label, description, disabled, selected }`; an entry with its own `items` array is a section, and its `label` becomes the `.list-box-section-label` the group is named by.

Labels are text: they land as `textContent`, so a label carrying markup shows up as characters. Set `html: true` to have them parsed instead — the result runs through the sanitizer first, and `sanitize`, `sanitizeFn` and `allowList` steer it the same way they do everywhere else.

Leave an empty `.list-box-options` in the markup so you can name it; the plugin appends one when it is missing, but then the list has no accessible name. Options already written inside it are replaced — `items` owns the list from the moment it is set.

```html
<div class="list-box" id="listBoxItems" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Sandwich"></div>
</div>
```

```js
const element = document.getElementById('listBoxItems')

coreui.ListBox.getOrCreateInstance(element, {
  items: [
    {
      label: 'Veggies',
      items: [
        { value: 'lettuce', label: 'Lettuce' },
        { value: 'tomato', label: 'Tomato', description: 'Ripe' },
        { value: 'onion', label: 'Onion', disabled: true }
      ]
    },
    {
      label: 'Protein',
      items: [
        { value: 'ham', label: 'Ham', selected: true },
        { value: 'tuna', label: 'Tuna', description: 'Line caught' }
      ]
    }
  ]
})
```

## Remote data

`setItems(items)` rebuilds the list at any time and leaves the selection alone. A value the new items no longer carry stays selected, counts against `selectionLimit`, and comes off with `deselect()`, `clear()` or the next pick in single mode. An item marked `selected` joins a multiple selection up to `selectionLimit` and fires `change.coreui.list-box` once, and the first one the limit leaves out fires `selectionLimit.coreui.list-box`; in single mode it is taken only while nothing is selected. Otherwise nothing fires, so re-fetching the same page or answering a search costs the user nothing. `getItems()` hands back the normalized array.

A list that depends on another field, such as the cities of the chosen country, sets `resetSelectionOnItemsChange: true`. Whenever the values of the new items differ from the ones before, `setItems` then starts from an empty selection and takes the items marked `selected`, so the city of the previous country never travels on with the next one. The same values again, in any order, keep the selection. Leave it off with `search: 'external'`, where every answer brings different values and would drop the pick.

`loading` covers the wait: it writes `aria-busy="true"` on the options element, shows a row with a spinner and the `loadingLabel` text below the options, announces that text to screen readers when the wait starts or the list shows up waiting, and holds the empty state back, so "No results" never flashes before the answer arrives. The options stay as they are and can still be picked, so a choice from the shown results counts. `setLoading(value)` turns it on and off around the request.

```html
<div class="list-box" id="listBoxRemote" style="max-width: 22rem">
  <div class="list-box-header">
    <button type="button" class="btn btn-sm btn-ghost" id="listBoxReload">Reload</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Users" style="max-height: 14rem; overflow-y: auto">
    <div class="list-box-empty">No users</div>
  </div>
</div>
```

```js
const element = document.getElementById('listBoxRemote')
const listBox = coreui.ListBox.getOrCreateInstance(element, { loading: true })

const loadUsers = async () => {
  listBox.setLoading(true)

  try {
    const response = await fetch('https://apitest.coreui.io/demos/users?limit=10')
    const { records } = await response.json()

    listBox.setItems(records.map(user => ({
      value: user.id,
      label: `${user.first_name} ${user.last_name}`,
      description: user.email
    })))
  } catch (error) {
    console.error('Error fetching users:', error)
    listBox.setItems([])
  } finally {
    listBox.setLoading(false)
  }
}

loadUsers()

document.getElementById('listBoxReload').addEventListener('click', loadUsers)
```

## Search

`search` puts a search field between the header and the options. It hides what does not match, and because a hidden option leaves the navigation, everything downstream follows: the arrows skip it, the select-all button takes only what is left on screen, and the empty state appears when nothing matches. The selection itself survives filtering — filter something out and it stays selected.

The field is a `.form-control.list-box-search` carrying `data-coreui-list-box-search`, built for you unless the markup already has an input with that attribute — put one there and it is used as it is, wherever you placed it. `searchPlaceholder` fills the placeholder and `ariaSearchLabel` the accessible name; `--cui-list-box-search-margin` sets how it sits between the two.

```html
<div class="list-box" data-coreui-list-box data-coreui-search="true" data-coreui-selection-mode="multiple" data-coreui-indicator="checkbox" style="max-width: 20rem">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Fruit</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Fruit">
    <div class="list-box-option" data-coreui-value="apple">Apple</div>
    <div class="list-box-option" data-coreui-value="apricot">Apricot</div>
    <div class="list-box-option" data-coreui-value="banana">Banana</div>
    <div class="list-box-option" data-coreui-value="blueberry">Blueberry</div>
    <div class="list-box-option" data-coreui-value="cherry">Cherry</div>
    <div class="list-box-option" data-coreui-value="cranberry">Cranberry</div>
    <div class="list-box-empty">No fruit matches</div>
  </div>
</div>
```

### External search

`search: 'external'` builds the same field and filters nothing. Every keystroke fires `search.coreui.list-box` with the `query`, and you answer with `setItems()` — the list shows what you hand it, so the query is yours to interpret. What the user picked stays picked while the results change, also when the next answer does not carry it. Debounce the request and put `setLoading()` around it, so the loading row shows while the answer is on its way and the options already shown can still be picked.

```html
<div class="list-box" id="listBoxExternalSearch" style="max-width: 22rem">
  <div class="list-box-options" role="listbox" aria-label="Users" style="max-height: 14rem; overflow-y: auto">
    <div class="list-box-empty">No users</div>
  </div>
</div>
```

```js
const element = document.getElementById('listBoxExternalSearch')
const listBox = coreui.ListBox.getOrCreateInstance(element, {
  loading: true,
  search: 'external',
  searchPlaceholder: 'Search users'
})

const loadUsers = async (query = '') => {
  listBox.setLoading(true)

  try {
    const response = await fetch(`https://apitest.coreui.io/demos/users?first_name=${query}&limit=10`)
    const { records } = await response.json()

    listBox.setItems(records.map(user => ({
      value: String(user.id),
      label: `${user.first_name} ${user.last_name}`,
      description: user.email
    })))
  } catch (error) {
    console.error('Error fetching users:', error)
    listBox.setItems([])
  } finally {
    listBox.setLoading(false)
  }
}

let debounceTimer = null

element.addEventListener('search.coreui.list-box', event => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => loadUsers(event.query), 200)
})

loadUsers()
```

## Filtering from your own field

The built-in search field is not the only way in. `filter(query)` runs the same text filter from wherever you like — a field elsewhere on the page, a chip bar, a URL parameter — and everything downstream follows it: the arrows skip what is hidden, a section left without a match is hidden with its label, the select-all button takes only what is on screen, and the empty state appears when nothing is left. `filter(null)` clears it and shows every option again. The selection is untouched throughout: filter a selected value out and it stays selected, it just leaves the list.

```html
<label for="listBoxOwnField" class="form-label">Fruit</label>
<input type="search" class="form-control mb-3" id="listBoxOwnField" autocomplete="off" style="max-width: 20rem">
<div class="list-box" id="listBoxOwnFieldList" style="max-width: 20rem">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Select all</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Fruit">
    <div class="list-box-option" data-coreui-value="apple">Apple</div>
    <div class="list-box-option" data-coreui-value="apricot">Apricot</div>
    <div class="list-box-option" data-coreui-value="banana">Banana</div>
    <div class="list-box-option" data-coreui-value="cherry">Cherry</div>
    <div class="list-box-empty">No fruit matches</div>
  </div>
</div>
<button type="button" class="btn btn-secondary mt-3" id="listBoxOwnFieldReset">Clear the filter</button>
```

```js
const field = document.getElementById('listBoxOwnField')
const element = document.getElementById('listBoxOwnFieldList')
const listBox = coreui.ListBox.getOrCreateInstance(element, {
  indicator: 'checkbox',
  selectionMode: 'multiple'
})

field.addEventListener('input', () => {
  listBox.filter(field.value)
})

document.getElementById('listBoxOwnFieldReset').addEventListener('click', () => {
  field.value = ''
  listBox.filter(null)
})
```

## Checkboxes

Nothing marks the selection on its own — `aria-selected` and the `.selected` background carry it. Set `indicator: 'checkbox'` and the plugin puts a checkbox in front of every option and keeps it in step with the selection.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple" data-coreui-indicator="checkbox" style="max-width: 20rem">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Select all</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Toppings">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
    <div class="list-box-option" data-coreui-value="cheese">Cheese</div>
  </div>
</div>
```

The checkbox is a decorative `<span class="list-box-option-indicator check">`, not an input, so it never takes the focus and never has a state of its own — the `.selected` and `.indeterminate` classes drive it. The select-all button gets the same indicator, its own `mixed` state included, and stays a button: focusable, operable, and named by its text.

## Counter

`counter` puts a `{selected}/{available} selected` readout in the header — the last child of `.list-box-header`, a `.list-box-subtitle` carrying `data-coreui-list-box-counter`. There is no header in the markup? One is created. Bring your own element with that attribute and the plugin writes into it wherever you put it.

Both numbers read the same set — the options that are visible and enabled, which is also what the select-all button works on — so the counter always describes what is on screen. Filter the list and the denominator drops with it, and a selected value the filter hid drops out of the numerator too: it stays selected, it just stops being counted, so `2/4` can become `1/1` without anything being deselected. A disabled option never appears in either number. `selectedLabel` builds the whole text, so a translated list reads in its own language and its own word order: pass a function of `(count, total)`, or a string in which `{count}` and `{total}` are replaced.

```html
<div class="list-box" data-coreui-list-box data-coreui-counter="true" data-coreui-search="true" data-coreui-selection-mode="multiple" data-coreui-indicator="checkbox" style="max-width: 20rem">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Fruit</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Fruit">
    <div class="list-box-option" data-coreui-value="apple">Apple</div>
    <div class="list-box-option" data-coreui-value="apricot">Apricot</div>
    <div class="list-box-option" data-coreui-value="banana">Banana</div>
    <div class="list-box-option disabled" data-coreui-value="blueberry">Blueberry</div>
    <div class="list-box-option" data-coreui-value="cherry">Cherry</div>
    <div class="list-box-empty">No fruit matches</div>
  </div>
</div>
```

## Sections

Group options in a `.list-box-section` and name it with a `.list-box-section-label`. The plugin adds `role="group"`; point `aria-labelledby` at the label so the group is announced with its name.

```html
<div class="list-box" data-coreui-list-box style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Sandwich">
    <div class="list-box-section" aria-labelledby="listBoxVeggies">
      <div class="list-box-section-label" id="listBoxVeggies">Veggies</div>
      <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
      <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    </div>
    <div class="list-box-section" aria-labelledby="listBoxProtein">
      <div class="list-box-section-label" id="listBoxProtein">Protein</div>
      <div class="list-box-option" data-coreui-value="ham">Ham</div>
      <div class="list-box-option" data-coreui-value="tuna">Tuna</div>
    </div>
  </div>
</div>
```

### Selectable sections

`sectionsSelectable` turns every section label into a tri-state button that toggles its own section: `aria-pressed` reads `false`, `mixed` or `true`, and with `indicator: 'checkbox'` the label carries the same checkbox as the options. It works in `multiple` mode and covers the section's visible, enabled options only, so a filtered list toggles what is on screen; `selectionLimit` still applies, with the same reading as the select-all button. A label whose section has no such option carries `aria-disabled="true"`, leaves the arrow-key order and shows the state of the section's disabled options. The labels join the arrow-key order in document position, so <kbd>↓</kbd> walks label, options, next label.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple" data-coreui-sections-selectable="true" data-coreui-indicator="checkbox" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Sandwich">
    <div class="list-box-section" aria-labelledby="listBoxSelectableVeggies">
      <div class="list-box-section-label" id="listBoxSelectableVeggies">Veggies</div>
      <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
      <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    </div>
    <div class="list-box-section" aria-labelledby="listBoxSelectableProtein">
      <div class="list-box-section-label" id="listBoxSelectableProtein">Protein</div>
      <div class="list-box-option" data-coreui-value="ham">Ham</div>
      <div class="list-box-option" data-coreui-value="tuna">Tuna</div>
    </div>
  </div>
</div>
```

## Descriptions

An option can carry a second line. Wrap the name in `.list-box-option-label` and the explanation in `.list-box-option-description` — typeahead then matches the label alone, so typing skips the description text.

```html
<div class="list-box" data-coreui-list-box style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Plan">
    <div class="list-box-option" data-coreui-value="free">
      <span class="list-box-option-label">Free</span>
      <span class="list-box-option-description">One project, community support</span>
    </div>
    <div class="list-box-option" data-coreui-value="team">
      <span class="list-box-option-label">Team</span>
      <span class="list-box-option-description">Unlimited projects, shared billing</span>
    </div>
  </div>
</div>
```

Descriptions and the checkbox indicator work together: the indicator stays centred against the whole option and both lines of the text start past it, so a two-line option keeps the same left column as the select-all button above.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple" data-coreui-indicator="checkbox" style="max-width: 22rem">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Select all</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Plan">
    <div class="list-box-option" data-coreui-value="free">
      <span class="list-box-option-label">Free</span>
      <span class="list-box-option-description">One project, community support</span>
    </div>
    <div class="list-box-option" data-coreui-value="team">
      <span class="list-box-option-label">Team</span>
      <span class="list-box-option-description">Unlimited projects, shared billing</span>
    </div>
    <div class="list-box-option" data-coreui-value="enterprise">
      <span class="list-box-option-label">Enterprise</span>
      <span class="list-box-option-description">SSO, audit log and a named contact</span>
    </div>
  </div>
</div>
```

## Links

An option that is an `<a>` with an `href` navigates on click and on <kbd>Enter</kbd>, and fires `action.coreui.list-box` on the way out — so a list of destinations keeps working with the keyboard without losing the browser's own link behavior.

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="none" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Documentation">
    <a class="list-box-option" href="/components/menu/" data-coreui-value="menu">Menu</a>
    <a class="list-box-option" href="/components/list-group/" data-coreui-value="list-group">List group</a>
    <a class="list-box-option" href="/components/dropdowns/" data-coreui-value="dropdown">Dropdown</a>
  </div>
</div>
```

## Disabled items

`.disabled` (with `aria-disabled="true"` for assistive technology) keeps the user out: it takes an option out of the keyboard order and out of every selection the user makes, the arrows, a click, a section label, a range and select all. Your code is not kept out of the values it sets, as with a native `<select>`: a disabled value passed in `selected`, an item carrying both `disabled` and `selected`, and a value that is already selected when `setItems()` brings it back disabled are selected and read as selected, and come off with `deselect()` or `clear()`. `select()`, `toggle()` and `selectAll()` act as the user would and leave a disabled option alone. `data-coreui-disabled="true"` on the list box does the same for all of it: `aria-disabled` lands on the options element and the select-all button is disabled.

```html
<div class="list-box" data-coreui-list-box style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Sandwich">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option disabled" aria-disabled="true" data-coreui-value="tomato">Tomato — out of stock</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
  </div>
</div>
```

## Empty state

A `.list-box-empty` element inside the options is shown whenever nothing is left to navigate and hidden as soon as something is, so filtering a list has somewhere to land. `update()` re-evaluates it.

```html
<div class="list-box" data-coreui-list-box style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Results">
    <div class="list-box-option" data-coreui-value="lettuce" hidden>Lettuce</div>
    <div class="list-box-empty">No results</div>
  </div>
</div>
```

## With an input

Pass `activeDescendant` an input and the focus never leaves it: the plugin drops the roving `tabindex`, gives every option an `id`, and keeps `aria-activedescendant` and `aria-controls` on the field pointing at the highlighted option and at `.list-box-options` while the list is in the document: a list out of the document, such as a closed combobox panel, leaves the field without them from its next update, and the field gets them back when it takes the focus or the list updates in place. The arrows and <kbd>Enter</kbd> are handled on the field, so typing and choosing happen in one place — a combobox in two elements. A text field keeps <kbd>Home</kbd>, <kbd>End</kbd> and the space bar for its own text; give `activeDescendant` a non-text element (a button, a `tabindex` div) and those select instead. Hiding an option with `hidden`, or calling `filter()`, takes it out of the navigation and leaves the selection alone.

```html
<label for="listBoxField" class="form-label">Filter</label>
<input type="text" class="form-control mb-3" id="listBoxField" role="combobox" aria-expanded="true" autocomplete="off" style="max-width: 20rem">
<div class="list-box" id="listBoxWithInput" style="max-width: 20rem">
  <div class="list-box-options" role="listbox" aria-label="Sandwich">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
    <div class="list-box-option" data-coreui-value="onion">Onion</div>
    <div class="list-box-option" data-coreui-value="cheese">Cheese</div>
  </div>
</div>
<p class="mt-3 mb-0">Selected: <span id="listBoxFieldOutput">nothing</span></p>
```

```js
const field = document.getElementById('listBoxField')
const element = document.getElementById('listBoxWithInput')
const listBox = coreui.ListBox.getOrCreateInstance(element, { activeDescendant: field })
const output = document.getElementById('listBoxFieldOutput')

field.addEventListener('input', () => {
  listBox.filter(field.value)
})

element.addEventListener('change.coreui.list-box', event => {
  output.textContent = event.value.join(', ') || 'nothing'
})
```

## Accessibility

The plugin writes `role="listbox"` on `.list-box-options`, `role="option"` on every `.list-box-option`, `role="group"` on every section, `aria-multiselectable` in `multiple` mode and `aria-selected` on every option outside `none` mode. Name the list yourself with `aria-label` or `aria-labelledby` on `.list-box-options`, and name each section with `aria-labelledby` pointing at its label.

The option's checkbox indicator is decorative — it is a `<span>` marked `aria-hidden="true"`, so assistive technology reads the selection from `aria-selected` alone and never announces a second control per option. The select-all button is a genuine control instead: a real `<button>` outside the listbox, carrying its state in `aria-pressed` (`true`, `false` or `mixed`) and naming the list it acts on with `aria-controls`. Its text is its accessible name.

| Key | Action |
| --- | --- |
| `↓` / `↑` | Move the highlight to the next/previous option; it stops at the ends |
| `Home` / `End` | Move the highlight to the first/last option; a text `activeDescendant` field keeps them for the caret |
| `Space` | Toggle the option in `multiple` mode, select it in `single`; a text `activeDescendant` field keeps it for typing |
| `Enter` | Select the option; on a link, follow it; in `none` mode, fire `action` |
| `Shift` + `↓` / `↑` | Extend the selection to the next/previous option |
| `Shift` + `Home` / `End` | Extend the selection to the first/last option |
| `Ctrl` / `Cmd` + `A` | Select every option (`multiple` mode) |
| `A` – `Z` | Move the highlight to the next option whose label starts with what you typed |
| `Tab` | Reach the select-all button; it is not part of the arrow navigation |

## Usage

### Via data attributes

Add `data-coreui-list-box` to a `.list-box` and the plugin initializes it on page load. Put the choices in a `.list-box-options` child — that is the element the listbox role and the accessible name belong on — and make every option a `.list-box-option` with its value in `data-coreui-value`.

| Attribute | Description |
| --- | --- |
| `data-coreui-list-box` | Initializes the list box on page load. |
| `data-coreui-value` | The value of an option. Defaults to the option's text. |
| `data-coreui-select-all` | Marks a button anywhere in the container as the switch for the whole list. |
| `data-coreui-indicator="checkbox"` | Renders the checkbox indicator in front of every option. |
| `data-coreui-list-box-counter` | Marks the element that holds the `{selected}/{available}` counter. Created in the header when `counter` is on and the markup has none. |
| `data-coreui-list-box-search` | Marks an input as the search field of the list. Built for you when `search` is on and the markup has none. |
| `data-coreui-loading="true"` | Marks the list as loading: `aria-busy` on the options element, `.loading` on the container, the loading row below the options, empty state held back. The options stay usable. |
| `data-coreui-loading-label` | Text of the loading row and of its announcement. |

```html
<div class="list-box" data-coreui-list-box data-coreui-selection-mode="multiple">
  <div class="list-box-header">
    <button type="button" class="list-box-select-all" data-coreui-select-all>Select all</button>
  </div>
  <div class="list-box-options" role="listbox" aria-label="Sandwich">
    <div class="list-box-option" data-coreui-value="lettuce">Lettuce</div>
    <div class="list-box-option" data-coreui-value="tomato">Tomato</div>
  </div>
</div>
```

### Via JavaScript

```js
const listBox = new coreui.ListBox('#myListBox', {
  selectionMode: 'multiple',
  selected: ['lettuce']
})
```

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeDescendant` | null, string, element | `null` | Field that keeps the focus. The plugin drops the roving `tabindex`, gives the options ids, and writes `aria-activedescendant` and `aria-controls` on the field while the list is in the document. The keyboard is handled on the field. |
| `allowList` | object | [Default value](https://coreui.io/bootstrap/docs/getting-started/javascript/#sanitizer) | Object which contains allowed attributes and tags for the labels rendered from `items`. |
| `ariaSearchLabel` | string | `'Search options'` | Accessible name of the search field. An input with its own `aria-label` keeps it. |
| `counter` | boolean | `false` | Puts a `{selected}/{available} selected` readout in the header, counting the visible, enabled options. Builds the header when the markup has none. |
| `disabled` | boolean | `false` | Turns the whole list box off: `aria-disabled` on `.list-box-options` and the select-all button disabled. |
| `html` | boolean | `false` | Parses the labels rendered from `items` as HTML instead of inserting them as text. |
| `indicator` | string | `'none'` | `'checkbox'` puts a decorative checkbox in front of every option and marks the container with `data-coreui-indicator="checkbox"`, which is what lays the options out in two columns. |
| `items` | array | `[]` | The options to render: `{ value, label, description, disabled, selected }`, or `{ label, items, disabled }` for a section, where `disabled: true` disables every item in it. Replaces whatever `.list-box-options` already holds. |
| `loading` | boolean | `false` | Marks the list as loading: `aria-busy` on the options element, `.loading` on the container, the loading row below the options, empty state held back. The options stay usable. |
| `loadingLabel` | string | `'Loading…'` | Text of the loading row, announced to screen readers when the list starts loading on the page or shows up loading. |
| `resetSelectionOnItemsChange` | boolean | `false` | Empties the selection when `setItems()` brings items with different values, then takes the items marked `selected`. For a list that depends on another field. |
| `sanitize` | boolean | `true` | Enables the sanitization of the labels rendered from `items` with `html`. |
| `sanitizeFn` | null, function | `null` | Sanitization function of your own, used instead of the built-in one. |
| `search` | boolean, string | `false` | Builds a search field above the options. `true` filters the list itself; `'external'` filters nothing and fires `search.coreui.list-box` instead. An input the markup already carries is used either way. |
| `searchNormalize` | boolean | `false` | Compares both sides of the filter without their diacritics, so `zoe` matches `Zoë`. |
| `searchPlaceholder` | string | `'Search'` | Placeholder of the built search field. |
| `sectionsSelectable` | boolean | `false` | Turns every section label into a tri-state button (`aria-pressed`) that toggles the section's visible, enabled options, and puts it in the arrow-key order. `multiple` mode only. |
| `selected` | null, string, array | `null` | Initially selected values. In `single` mode only the first one is taken, and a disabled value is never taken. |
| `selectedLabel` | string, function | `` (count, total) => `${count}/${total} selected` `` | The header's count text. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `selectionLimit` | null, number | `null` | How many options can be selected at once in `multiple` mode. Further selections are refused and reported through `selectionLimit.coreui.list-box`; nothing is disabled and deselecting always works. |
| `selectionMode` | string | `'single'` | `'none'`, `'single'` or `'multiple'`. |
| `typeahead` | boolean | `true` | Move the highlight to the option matching what the user types. The buffer resets after 500 ms. |

### Methods

| Method | Description |
| --- | --- |
| `clear()` | Empties the selection. |
| `deselect(value)` | Removes the value from the selection. |
| `dispose` | Destroys the list box, releases the field, and removes the header, counter, search field, list and loading row it created. A list from your markup gets its own children back when `items` replaced them. |
| `filter(query)` | Hides the options that do not contain `query`, and a section left without a match with them. `null` clears the filter. The selection is untouched. |
| `first` / `last` | Moves the highlight to the first/last option. |
| `focusActive()` | Moves the focus onto the highlighted option, or onto the first navigable one when nothing is highlighted, and makes that one the highlight. Does nothing while the list drives a field, where the focus belongs to that field. |
| `getActive()` | The highlighted value, or `null`. |
| `getInstance` | Static method which allows you to get the list box instance associated to a DOM element, you can use it like this: `coreui.ListBox.getInstance(element)`. |
| `getItems()` | The normalized `items` array. |
| `getOrCreateInstance` | Static method which returns a list box instance associated to a DOM element or creates a new one in case it wasn't initialized. You can use it like this: `coreui.ListBox.getOrCreateInstance(element)`. |
| `getSelectedValues()` | The selected values, in selection order. |
| `next` / `prev` | Moves the highlight one option down/up. |
| `select(value)` | Selects the option. In `single` mode it replaces the current selection. |
| `selectAll(values?)` | Selects every visible, enabled option (`multiple` mode). Pass an array of values to select exactly those instead, filter or no filter. |
| `setActive(value)` | Moves the highlight without taking the focus. |
| `setItems(items)` | Rebuilds the list from an `items` array. The selection stays as it is, values the new items no longer carry included; items marked `selected` join a multiple selection, or a single one that holds nothing, and `change` fires only when they do. With `resetSelectionOnItemsChange` new values empty the selection first. |
| `setLoading(loading)` | Turns the loading state on or off; turning it on announces `loadingLabel` while the list is on the page. |
| `toggle(value)` | Selects the value, or deselects it when it is already selected. |
| `update` | Re-reads the DOM: new options get their roles and ids, an option that is now `hidden` or gone leaves the navigation, the empty state and the select-all button are re-evaluated. The selection survives all of it. |

### Events

Events fire on the `.list-box` element.

| Event type | Description |
| --- | --- |
| `action.coreui.list-box` | Fired when an option is activated in `none` mode or when the option is a link; `event.value` is the value and `event.relatedTarget` the option. |
| `activate.coreui.list-box` | Fired when the highlight moves; `event.value` is the newly highlighted value. |
| `change.coreui.list-box` | Fired once per operation after the selection settled; `event.value` is the array of selected values. |
| `deselect.coreui.list-box` | Fires before a value is removed from the selection. Cancelable. |
| `deselected.coreui.list-box` | Fired after the value was removed from the selection. |
| `search.coreui.list-box` | Fired on every keystroke in the search field with `search: 'external'`; `event.query` is what was typed. Nothing is filtered — answer with `setItems()`. |
| `select.coreui.list-box` | Fires before a value is selected; `event.value` is the value. Cancelable — calling `preventDefault()` keeps the selection as it was. |
| `selected.coreui.list-box` | Fired after the value was selected. |
| `selectionLimit.coreui.list-box` | Fired once per interaction when `selectionLimit` refused a selection; `event.limit` is the cap and `event.value` the first refused value. |

```js
const myListBox = document.getElementById('myListBox')
myListBox.addEventListener('change.coreui.list-box', event => {
  console.log(event.value)
})
```

## Customizing

### CSS variables

```scss
$list-box-tokens: defaults(
  (
    --cui-list-box-padding-y: .375rem,
    --cui-list-box-padding-x: .375rem,
    --cui-list-box-gap: .125rem,
    --cui-list-box-color: var(--cui-fg-body),
    --cui-list-box-bg: var(--cui-bg-body),
    --cui-list-box-font-size: var(--cui-body-font-size),
    --cui-list-box-border-width: var(--cui-border-width),
    --cui-list-box-border-color: var(--cui-border-color),
    --cui-list-box-border-radius: var(--cui-radius-7),
    --cui-list-box-header-border-width: var(--cui-border-width),
    --cui-list-box-header-border-color: var(--cui-border-color),
    --cui-list-box-title-font-size: var(--cui-body-font-size),
    --cui-list-box-title-font-weight: var(--cui-font-weight-semibold),
    --cui-list-box-title-color: var(--cui-fg-body),
    --cui-list-box-subtitle-font-size: calc(var(--cui-body-font-size) * .875),
    --cui-list-box-subtitle-color: var(--cui-fg-3),
    --cui-list-box-search-margin: 1rem 1rem 0,
    --cui-list-box-option-padding-y: .5rem,
    --cui-list-box-option-padding-x: .75rem,
    --cui-list-box-option-gap: .5rem,
    --cui-list-box-option-border-radius: var(--cui-radius-5),
    --cui-list-box-option-hover-color: var(--cui-fg-body),
    --cui-list-box-option-hover-bg: var(--cui-bg-1),
    --cui-list-box-option-active-color: var(--cui-fg-body),
    --cui-list-box-option-active-bg: var(--cui-bg-1),
    --cui-list-box-option-selected-color: var(--cui-fg-body),
    --cui-list-box-option-selected-bg: var(--cui-bg-2),
    --cui-list-box-option-disabled-color: var(--cui-fg-3),
    --cui-list-box-option-description-color: var(--cui-fg-3),
    --cui-list-box-option-description-font-size: calc(var(--cui-body-font-size) * .875),
    --cui-list-box-option-indicator-width: var(--cui-check-size, var(--cui-control-size)),
    --cui-list-box-section-label-color: var(--cui-fg-3),
    --cui-list-box-section-label-font-size: 80%,
    --cui-list-box-section-label-padding-y: .5rem,
    --cui-list-box-section-label-padding-x: .625rem,
  ),
  $list-box-tokens
);
```
