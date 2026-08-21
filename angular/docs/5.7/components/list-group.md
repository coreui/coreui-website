# Angular List Group Component

> List Group component allows displaying a series of content. Learn how to use CoreUI list group to build complex list structure on your website.

## Examples
### Basic

The default list group is an unordered list with items and the proper CSS classes. Build upon it with the options that follow, or with your CSS as required.

### Active item

Add `active` boolean property for `cListGroupItem` to show the current active selection.

### Disabled item

Add `disabled` attribute property for `cListGroupItem` to make it appear disabled.

### Links and buttons

Use `a` or `button` to create actionable list group items with hover, disabled, and active states. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like `li` or `div`) don't provide a click or tap affordance.

### Flush

Add `flush` boolean property to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

### Horizontal

Add `horizontal` prop to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant with `horizontal="sm|md|lg|xl|xxl"` to make a list group horizontal starting at that breakpoint's min-width. Currently horizontal list groups cannot be combined with flush list groups.

### Contextual classes

Use contextual classes to style list items with a stateful background and color.

### Colors for links and buttons

Contextual classes also work with `a` or `button`. Note the addition of the hover styles here not present in the previous example. Also supported is the active state; apply it to indicate an active selection on a contextual list group item.

> Conveying meaning to assistive technologies  Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.visually-hidden` class.

### With badges

Add badges to any list group item to show unread counts, activity, and more.

### Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities](https://coreui.io/docs/utilities/flex/)

### Checkboxes and radios

Place CoreUI's checkboxes and radios within list group items and customize as needed.

## API reference

### ListGroup Module

```typescript
import { ListGroupModule } from '@coreui/angular';

@NgModule({
    imports: [ListGroupModule,]
})
export class AppModule() { }
```

### cListGroup
_directive_

```jsx
import { ListGroupDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `flush` | `boolean` | `false` | Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`). |
| `horizontal` | `string \| boolean` | - | Specify horizontal layout type. |

### cListGroupItem
_directive_

```jsx
import { ListGroupItemDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` | Toggle the active state for the component. |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `disabled` | `boolean` | `false` | Set disabled attr for the host element |
| `tabindex` | `number` | `undefined` | The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating). |
