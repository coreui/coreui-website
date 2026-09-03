# Angular Tabs Component

> CoreUI Angular Tabs can be used to create a tabbed interface with tabbable regions.

## Tab Panes

Dynamic tabbed interfaces, as described in the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`,
`role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state
to users of assistive technologies (such as screen readers).

Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility
issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately
visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is
currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be
easily made understandable to users of assistive technologies.

## Examples
### Tabs

### Pills

### Underline

<c-badge color="danger" size="sm">PRO</c-badge>

Notice: conditional rendering of third `c-tab-pane` with `*ngIf` disables/enables third `cNavLink`

## API reference

### Tabs Module

```typescript
import { NavModule, TabsModule } from '@coreui/angular';

@NgModule({
    imports: [
      NavModule, 
      TabsModule
    ]
})
export class AppModule() { }
```

### c-tab-content
_component_
`exportAs: cTabContent`

```jsx
import { TabContentComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `activeTabPaneIdx` | `number` | - | Set active tabPane index |

### Events

| Name | Description |
| --- | --- |
| `activeTabPaneIdxChange` | Event emitted on the active tab pane index change. |

### c-tab-pane
_component_
`exportAs: cTabPane`

```jsx
import { TabPaneComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `string` | `'tabpanel'` | Element role. |

### cTabContent
_directive_

```jsx
import { TabContentRefDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` | Set active state of tab content |
| `cTabContent` | `any` | - | Template Ref |
| `disabled` | `boolean` | - | Set disabled state of tab content |
| `role` | `string` | `'tab'` |  |
| `tabPaneIdx` | `number` | `-1` | c-tab-pane index respectively |
