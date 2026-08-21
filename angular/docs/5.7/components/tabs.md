# Angular Tabs Component

> The CoreUI Angular Tabs component offers a flexible and accessible way to create tabbed navigation in your application. It supports various styles and configurations to meet different design requirements.

_Added in 5.2.0._

## Examples
The basic Angular tabs example uses the `variant="tabs"` prop to generate a tabbed interface.

## Available styles
Change the style of tabs component with modifiers and utilities. Mix and match as needed, or build your own.

### Unstyled
If you don’t provide the `variant` prop, the component will default to a basic style.

### Pills
Take that same code, but use `variant="pills"` instead:

### Underline

With the same code, use `variant="underline"`:

### Underline border

Use the same code again, with `variant="underline-border"`:

## Tabs layout
### Fill
Force your tabs content to extend the full available width one of modifier classes. To proportionately fill all available space use `layout="fill"`. With all horizontal space occupied, not every tab item has the same width.

### Justify
For equal-width elements, use `layout="justified"`. All horizontal space is occupied by tabs, but unlike the `layout="fill"` above, every tab item has the same width.

## Accessibility

Dynamic tabbed interfaces, as described in the <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel" target="_blank">WAI ARIA Authoring Practices</a>, require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

### WAI-ARIA Roles
- The element that serves as the container for the set of tabs has the role `tablist`.
- Each element that serves as a tab has the role `tab` and is contained within the element with the role `tablist`.
- Each element that contains the content panel for a tab has the role `tabpanel`.
- If the tab list has a visible label, the element with the role `tablist` has `aria-labelledby` set to a value that refers to the labeling element. Otherwise, the `tablist` element has a label provided by `aria-label`.
- Each element with the role `tab` has the property `aria-controls` referring to its associated `tabpanel` element.
- The active tab element has the state `aria-selected` set to `true`, and all other tab elements have it set to `false`.
- Each element with the role `tabpanel` has the property `aria-labelledby` referring to its associated `tab` element.

CoreUI Angular  Tabs component automatically manages all `role="..."` and `aria-` attributes for accessibility. It also handles the selected state by adding `aria-selected="true"` to the active tab. Additionally, you have the flexibility to manually set these attributes, as shown in the example below.
This example demonstrates how to manually set `aria-controls`, and `aria-labelledby` attributes on your tabs and tab panels.

### Keyboard Interaction

**When focus enters the tabs list:**

- <kbd>Tab</kbd>: It places focus on the active tab element.

**When focus is on a tab element:**

- <kbd>Tab</kbd>: Moves focus to the next element in the tab sequence, typically the tabpanel unless the first focusable element inside the tabpanel is found earlier.
- <kbd>Left Arrow</kbd>: Moves focus to the previous tab. If on the first tab, it wraps around to the last tab.
- <kbd>Right Arrow</kbd>: Moves focus to the next tab. If on the last tab, it wraps around to the first tab.
- <kbd>Home</kbd>: Moves focus to the first tab.
- <kbd>End</kbd>: Moves focus to the last tab.

## Customizing
### CSS variables

CoreUI Angular tabs use local CSS variables on `.nav`, `.nav-tabs`, `.nav-pills`, `.nav-underline` and `.nav-underline-border` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

On the `.nav` base class:

```scss
--cui-nav-link-padding-x: #{$nav-link-padding-x};
--cui-nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --cui-nav-link-font-size);
--cui-nav-link-font-weight: #{$nav-link-font-weight};
--cui-nav-link-color: #{$nav-link-color};
--cui-nav-link-hover-color: #{$nav-link-hover-color};
--cui-nav-link-disabled-color: #{$nav-link-disabled-color};
```

On the `.nav-tabs` modifier class:

```scss
--cui-nav-tabs-border-width: #{$nav-tabs-border-width};
--cui-nav-tabs-border-color: #{$nav-tabs-border-color};
--cui-nav-tabs-border-radius: #{$nav-tabs-border-radius};
--cui-nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--cui-nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--cui-nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--cui-nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};
```

On the `.nav-pills` modifier class:

```scss
--cui-nav-pills-border-radius: #{$nav-pills-border-radius};
--cui-nav-pills-link-active-color: #{$nav-pills-link-active-color};
--cui-nav-pills-link-active-bg: #{$nav-pills-link-active-bg};
```

On the `.nav-underline-border` modifier class:

```scss
--cui-nav-underline-border-gap: #{$nav-underline-border-gap};
--cui-nav-underline-border-border-color: #{$nav-underline-border-border-color};
--cui-nav-underline-border-border-width: #{$nav-underline-border-border-width};
--cui-nav-underline-border-link-padding-x: #{$nav-underline-border-link-padding-x};
--cui-nav-underline-border-link-padding-y: #{$nav-underline-border-link-padding-y};
--cui-nav-underline-border-link-color: #{$nav-underline-border-link-color};
--cui-nav-underline-border-link-active-color: #{$nav-underline-border-link-active-color};
--cui-nav-underline-border-link-disabled-color: #{$nav-underline-border-link-disabled-color};
```

#### How to use CSS variables

```ts
const vars = {
'--my-css-var': 10,
'--my-another-css-var': "red"
}
```

```html
<div [ngStyle]="vars"></div>
```

### SASS variables

```scss
$nav-link-padding-y:                .5rem !default;
$nav-link-padding-x:                1rem !default;
$nav-link-font-size:                null !default;
$nav-link-font-weight:              null !default;
$nav-link-color:                    var(--cui-link-color) !default;
$nav-link-hover-color:              var(--cui-link-hover-color) !default;
$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;
$nav-link-disabled-color:           var(--cui-secondary-color) !default;
$nav-link-focus-box-shadow:         $focus-ring-box-shadow !default;

$nav-tabs-border-color:             var(--cui-border-color) !default;
$nav-tabs-border-width:             var(--cui-border-width) !default;
$nav-tabs-border-radius:            var(--cui-border-radius) !default;
$nav-tabs-link-hover-border-color:  var(--cui-secondary-bg) var(--cui-secondary-bg) $nav-tabs-border-color !default;
$nav-tabs-link-active-color:        var(--cui-emphasis-color) !default;
$nav-tabs-link-active-bg:           var(--cui-body-bg) !default;
$nav-tabs-link-active-border-color: var(--cui-border-color) var(--cui-border-color) $nav-tabs-link-active-bg !default;

$nav-pills-border-radius:           var(--cui-border-radius) !default;
$nav-pills-link-active-color:       $component-active-color !default;
$nav-pills-link-active-bg:          $component-active-bg !default;

$nav-underline-gap:                 1rem !default;
$nav-underline-border-width:        .125rem !default;
$nav-underline-link-active-color:   var(--cui-emphasis-color) !default;

$nav-underline-border-gap:                  .5rem !default;
$nav-underline-border-border-color:         var(--cui-border-color) !default;
$nav-underline-border-border-width:         .125rem !default;
$nav-underline-border-link-padding-y:       .5rem !default;
$nav-underline-border-link-padding-x:       .5rem !default;
$nav-underline-border-link-color:           var(--cui-secondary-color) !default;
$nav-underline-border-link-active-color:    var(--cui-primary) !default;
$nav-underline-border-link-disabled-color:  var(--cui-tertiary-color) !default;
```

## API reference

### Tabs2Module

- with standalone components:

```typescript
import { Tabs2Module } from '@coreui/angular';

@Component({
    selector: 'your-component',
    standalone: true,
    imports: [Tabs2Module]
})
export class YourComponent() { }
```

- with NgModules:

```typescript
import { Tabs2Module } from '@coreui/angular';

@NgModule({
    imports: [Tabs2Module]
})
export class YourModule() { }
```

### c-tabs
_component_
`exportAs: cTabs`

```jsx
import { TabsComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeItemKey` | `string \| number` | - | The active item key. |
| `id` | `string` | `tabs-{n}` | HTML id attribute. |

### Events

| Name | Description |
| --- | --- |
| `activeItemKeyChange` | Emitted when `activeItemKey` changes. |

### c-tabs-list
_component_
`exportAs: cTabsList`

```jsx
import { TabsListComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `layout` | `'fill' \| 'justified'` | `undefined` | Specify a layout type for component. |
| `role` | `string` | `'tablist'` | Set the role to tab list. |
| `variant` | `'pills' \| 'tabs' \| 'underline' \| 'underline-border'` | `undefined` | Set the variant to tabs, pills or underline. |

### cTab
_directive_
`exportAs: cTab`

```jsx
import { TabDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-controls` | `string` | `undefined` | aria-controls attribute |
| `disabled` | `boolean` | `false` | Disabled attribute |
| `id` | `string` | `undefined` | Element id attribute |
| `itemKey` | `string \| number` | - | Item key. |

### c-tabs-content
_component_
`exportAs: cTabsContent`

- wrapper for tab panels

### c-tab-panel
_component_
`exportAs: cTabPanel`

```jsx
import { TabPanelComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `aria-labelledby` | `string` | `undefined` | aria-labelledby attribute |
| `id` | `string` | `undefined` | Element id attribute |
| `itemKey` | `string \| number` | - | Item key. |
| `role` | `string` | `'tabpanel'` | Element role. |
| `tabindex` | `number` | `0` | tabindex attribute. |
| `transition` | `boolean` | `true` | Enable fade in transition. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | visible change output |
