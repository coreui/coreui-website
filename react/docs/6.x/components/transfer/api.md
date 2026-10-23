# React Transfer Component API

> Explore the API reference for the React Transfer component to control its lists, the search, the one-way mode and the accessible names of its move buttons.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

## CTransfer

```jsx
import { CTransfer } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaMoveAllToSourceLabel` | `string` | `Move all to available` | Provides an accessible name for the button that moves every visible, enabled option back to the source list. |
| `ariaMoveAllToTargetLabel` | `string` | `Move all to chosen` | Provides an accessible name for the button that moves every visible, enabled option to the target list. |
| `ariaMovedAnnouncement` | `string` | `{count} moved to {title}` | What is announced after a move. `{count}` is how many options moved, `{title}` the destination's title, and both are replaced wherever they appear. |
| `ariaMoveToSourceLabel` | `string` | `Move to available` | Provides an accessible name for the button that moves the selection back to the source list. |
| `ariaMoveToTargetLabel` | `string` | `Move to chosen` | Provides an accessible name for the button that moves the selection to the target list. |
| `className` | `string` | - | Adds custom classes to the React Transfer root element. |
| `defaultValue` | `string[]` | - | The values the target list starts with, for the uncontrolled mode. Ignored when `value` is set. |
| `disabled` | `boolean` | - | Turns the whole transfer off: both lists, both search fields and every move button. |
| `indicator` | `ListBoxIndicator` | `checkbox` | Puts a mark in front of every option of both lists. |
| `items` | `ListBoxOption[]` | `[]` | The values both lists are made of, in the order the source list shows them. |
| `loading` | `TransferLoading` | - | Covers the wait of one list or of both: a loading list is marked `aria-busy` and shows a row with a spinner and `loadingLabel` below its options, which stay usable. |
| `loadingLabel` | `string` | `Loading…` | Text of the loading row below the options, announced to screen readers when the shown list starts loading or the list shows up loading. |
| `onChange` | `((value: string[], change: TransferChange) => void)` | - | Callback fired after a move, with the values of the target list and what the move was. |
| `oneWay` | `boolean` | - | Takes the return trip away: both buttons that move back are gone and a chosen value stays chosen. |
| `onSearch` | `((side: TransferDirection, query: string) => void)` | - | Callback fired with the list the query belongs to and the query itself, every time one of them changes. |
| `renderItem` | `((item: ListBoxOption, index: number) => ReactNode)` | - | Renders one option yourself. It takes the option and its index, and the option's `hidden` is what the search leaves behind. |
| `search` | `TransferSearch` | - | Puts a search field above each list. It hides what does not match, which takes those options out of the navigation, out of the counter and out of the select-all scope — the selection itself survives. `'external'` filters nothing and only reports the query through `onSearch`, so the lists show whatever `items` holds. |
| `searchPlaceholder` | `string` | `Search` | The placeholder of each search field, and the first half of its accessible name. |
| `selectedLabel` | `CountLabel` | `(count: number, total: number) => `${count}/${total} selected`` | Passed to both list boxes as their header count text. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `sourceTitle` | `string` | `Available` | The title of the source list: the label of its select-all button and its accessible name. |
| `targetTitle` | `string` | `Chosen` | The title of the target list. |
| `typeahead` | `boolean` | `true` | Move the highlight to the option matching what the user types, in both lists. |
| `value` | `string[]` | - | The values of the target list. Pair it with `onChange`; for the uncontrolled mode use `defaultValue` instead. |
