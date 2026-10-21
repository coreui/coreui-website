# React List Box Component API

> Explore the API reference for the React List Box component to control its selection, the highlighted option, sections, links and the aria-activedescendant mode.

## CListBox

```jsx
import { CListBox } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `string \| null` | - | The controlled highlighted value. Pair it with `onActiveChange`; for the uncontrolled mode use `defaultActive` instead. |
| `activeDescendant` | `string \| HTMLElement \| RefObject<HTMLElement \| null> \| null` | - | The field that keeps the focus, as an element, a ref or a CSS selector. The React List Box component drops the roving `tabindex`, gives the options ids, and writes `aria-activedescendant` and `aria-controls` on the field, which also handles the keyboard. |
| `ariaLabel` | `string` | - | Provides an accessible name for the options of the React List Box component. |
| `ariaSearchLabel` | `string` | `Search options` | Provides an accessible name for the search field. |
| `children` | `ReactNode \| ((option: ListBoxOption, index: number) => ReactNode)` | - | The options, either as `CListBoxOption` elements — with an optional `CListBoxHeader` among them — or as a function rendering one option of `items`. |
| `className` | `string` | - | Adds custom classes to the React List Box root element. |
| `counter` | `boolean` | - | Puts a counter at the end of the header, which the React List Box component renders itself when the markup carries none. It counts the selected options among the visible, enabled ones, so a full count means every option on screen is selected. |
| `defaultActive` | `string \| null` | - | The initial highlighted value for the uncontrolled mode. Ignored when `active` is set. |
| `defaultSelected` | `string \| string[] \| null` | - | The initial selected values for the uncontrolled mode. Ignored when `selected` is set. In `single` mode only the first one is taken. A disabled value is taken too: disabled keeps the user out, not your code. |
| `disabled` | `boolean` | - | Turns the whole list box off and writes `aria-disabled` on it. |
| `header` | `ReactNode` | - | The content rendered above the options, as an alternative to passing `CListBoxHeader` among the children. It takes any node, so a search field can sit between the header and the options. |
| `indicator` | `ListBoxIndicator` | `none` | Puts a mark in front of every option. `checkbox` renders the check the multi-value pickers use, and the select-all option reports a partial selection as indeterminate. |
| `items` | `ListBoxOption[]` | - | Renders the options from data instead of children. Pass a function as children to render one of them yourself. |
| `loading` | `boolean` | - | Covers the wait: it writes `aria-busy` on the options, shows a row with a spinner and `loadingLabel` below them, announces that text when the wait starts or the list shows up waiting, and holds the empty state back. The options stay usable. |
| `loadingLabel` | `string` | `Loading…` | Text of the loading row, announced to screen readers when the list starts loading on the page or shows up loading. |
| `onAction` | `((value: string, item: ListBoxOptionState) => void)` | - | Callback fired when an option is activated in `none` mode or when the option is a link. |
| `onActiveChange` | `((value: string \| null) => void)` | - | Callback fired when the highlight moves. |
| `onSearch` | `((query: string) => void)` | - | Callback fired with the query of the search field, every time it changes. |
| `onSelectedChange` | `((values: string[]) => void)` | - | Callback fired when the selected values change. |
| `onSelectionLimit` | `((limit: number, value: string) => void)` | - | Callback fired when `selectionLimit` refuses a value. It reports the limit and the first value it turned down. |
| `optionsId` | `string` | - | The id of the element carrying `role="listbox"`, so a field outside the list box can point its `aria-controls` at it. Generated when left out. |
| `optionsMaxHeight` | `string \| number` | - | Caps the height of the options and turns them into a scroll container. Takes a number of pixels or any CSS length. |
| `query` | `string` | - | The query of a field of your own, which filters the options the way the built-in search does. The built-in field steps aside while it is set. |
| `search` | `boolean \| "external"` | - | Puts a search field between the header and the options. It hides what does not match, which takes those options out of the navigation, out of the counter and out of the select-all scope — the selection itself survives. `'external'` hides nothing and only reports the query through `onSearch`. |
| `searchNormalize` | `boolean` | - | Compares the query and the option labels without their diacritics, so `zoe` finds `Zoë`. It normalizes to `NFD` and drops the combining diacritics, which leaves the labels themselves untouched. |
| `searchPlaceholder` | `string` | `Search` | The placeholder of the search field. |
| `sectionsSelectable` | `boolean` | - | Turns every section label into a tri-state toggle over the options it holds. It joins the arrow order and reports `aria-pressed`, which reads `mixed` while part of the section is selected. `multiple` mode only. |
| `selected` | `string \| string[] \| null` | - | The controlled selected values. Pair it with `onSelectedChange`; for the uncontrolled mode use `defaultSelected` instead. |
| `selectedLabel` | `CountLabel` | `(count: number, total: number) => `${count}/${total} selected`` | The header's count text. A function `(count, total) => string`, or a string in which `{count}` and `{total}` are replaced. |
| `selectionLimit` | `number` | - | The number of values `multiple` mode accepts. Once the selection holds that many, further ones are refused and reported through `onSelectionLimit`; deselecting always works and no option turns disabled. |
| `selectionMode` | `ListBoxSelectionMode` | `single` | Decides what a click and `Space` do: `none` never selects and calls `onAction`, `single` keeps one value, `multiple` keeps any number of them. |
| `translucent` | `boolean` | - | Blurs whatever sits behind the React List Box component and thins its background. |
| `typeahead` | `boolean` | `true` | Move the highlight to the option matching what the user types. The buffer resets after 500 ms. |
| `virtualScroller` | `boolean` | - | Renders the options of `items` through a virtual scroller, so a long list costs only the rows on screen. The selection, the navigation and the search are untouched — the scroller is the window, not the model. |
| `visibleItems` | `number` | `10` | The number of options the virtual scroller keeps on screen. |

## CListBoxEmpty

```jsx
import { CListBoxEmpty } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds custom classes to the React List Box Empty element. |

## CListBoxHeader

```jsx
import { CListBoxHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds custom classes to the React List Box Header element. |

## CListBoxOption

```jsx
import { CListBoxOption } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds custom classes to the React List Box Option element. |
| `description` | `ReactNode` | - | Adds a second line under the option's name. Typeahead then matches the label alone, so typing skips the description. |
| `disabled` | `boolean` | - | Takes the option out of the keyboard order and out of every selection method. |
| `hidden` | `boolean` | - | Takes the option out of the navigation without touching the selection — this is how a filtered list keeps what the user already picked. |
| `href` | `string` | - | The URL the option goes to. The option is rendered as a link, navigates on click and on `Enter`, and calls `onAction` on the way out. |
| `textValue` | `string` | - | The text typeahead matches. Defaults to the option's label. |
| `value` | `string` | - | The value the option carries. It is what the selection reports and what the methods take, so an option can be hidden or re-rendered without disturbing the selection. Defaults to the option's text. |

## CListBoxSection

```jsx
import { CListBoxSection } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | Adds custom classes to the React List Box Section element. |
| `disabled` | `boolean` | - | Disables every option in the section. |
| `label` | `ReactNode` | - | Names the group of options. It is rendered above them and announced with the group. |

## CListBoxSelectAll

```jsx
import { CListBoxSelectAll } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | `Select all` | The label of the switch. Defaults to `Select all`. |
| `className` | `string` | - | Adds custom classes to the React List Box Select All element. |
| `indeterminate` | `boolean` | - | Shows the button in the partial state. Read only together with `selected`, and ignored while `selected` is `true`. |
| `onToggle` | `((selected: boolean) => void)` | - | Callback fired when the button is pressed. The value is the state the button asks for. |
| `selected` | `boolean` | - | Whether everything the button stands for is selected. When set, the button renders that state and leaves the acting to `onToggle` — the scope it works on is then yours to define. |

## CListBoxSubtitle

```jsx
import { CListBoxSubtitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | Adds custom classes to the React List Box Subtitle element. |

## CListBoxTitle

```jsx
import { CListBoxTitle } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "div") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `div` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | Adds custom classes to the React List Box Title element. |
