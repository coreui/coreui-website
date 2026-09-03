# Angular Alert Component

> Angular alert component gives contextual feedback information for common user operations. The alert component is delivered with a bunch of usable and adjustable alert messages.

## Examples

### Colors
Angular Alert is prepared for any length of text, as well as an optional close button. For a styling, use one of the **required** contextual `color` props (e.g., `primary`). For inline dismissal, use the [dismissing prop](#dismissing).

### Link color
Use the `cAlertLink` directive class to quickly provide matching colored links within any alert.

### Additional content
Alert can also incorporate supplementary HTML elements like heading with `cAlertHeading`, paragraph, and divider.

### Dismissing
Alerts can also be easily dismissed. Just add the `dismissible` prop and `fade` for animation.
To remove an alert from the DOM, you can use `*ngIf` directive.

### Custom template

Use `alertButtonCloseTemplate` to customize close button.

### Icons

You can use Icons and flexbox utilities to create alerts with icons.

## API reference

### Alert Module

```typescript
import { AlertModule } from '@coreui/angular';

@NgModule({ 
  imports: [AlertModule,]
})
export class AppModule(){}
```

### c-alert
_component_

```jsx
import { AlertComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | `'primary'` | Sets the color context of the component to one of CoreUI’s themed colors. |
| `dismissible` | `boolean` | `false` | Optionally adds a close button to the alert and allow it to self-dismiss. |
| `fade` | `boolean` | `false` | Adds animation for dismissible alert. |
| `role` | `string` | `'alert'` | Default role for alert |
| `variant` | `'solid'` | `undefined` | Set the alert variant to a solid. |
| `visible` | `boolean` | `true` | Toggle the visibility of the alert component. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | Event triggered on the alert visibility change. |

### cAlertHeading
_directive_
```jsx
import { AlertHeadingDirective } from '@coreui/angular'
```

### cAlertLink
_directive_
```jsx
import { AlertLinkDirective } from '@coreui/angular'
```
