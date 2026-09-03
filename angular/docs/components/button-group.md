# Angular Button Group Component

> Angular Button Group component allows to group a series of buttons and power them with TypeScript.

## Usage

## Basic example

Wrap a series of `<button cButton>` elements in `<c-button-group>` component.

##### Ensure the correct `role` and provide a label

For assistive technologies (ex. screen readers) to communicate that a series of buttons are grouped, a proper `role` attribute has to be provided. For button groups, this should be `role="group"`, while toolbars should have a `role="toolbar"`.

Besides, groups and toolbars should be provided an understandable label, as most assistive technologies will otherwise not declare them, despite the appearance of the specific role attribute. In the following examples provided here, we apply `aria-label`, but options such as `aria-labelledby` can also be used.

## Mixed styles

## Outlined styles

## Checkbox and radio button groups

Combine button-like checkbox and radio toggle buttons into a seamless looking button group.

## Button toolbar

Join sets of button groups into button toolbars for more complicated components. Use utility classes as needed to space out groups, buttons, and more.

Feel free to combine input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities through to space items correctly.

## Sizing

Control the size of the entire button group by setting the size property on the `<c-button-group>` component instead of adding size to each button individually.

## Nesting

Put a `<c-dropdown>` with `variant="btn-group"` when you need dropdown menus combined with a series of buttons.

Create a set of buttons that appear vertically stacked rather than horizontally. **Split button dropdowns are not supported here.**

## API

### ButtonGroup Module

```typescript
import { ButtonGroupModule } from '@coreui/angular';

@NgModule({
  imports: [ButtonGroupModule,]
})
export class AppModule(){}
```

### c-button-group
_component_

```jsx
import { ButtonGroupComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `string` | `'group'` | Default role attr for ButtonGroup |
| `size` | `'' \| 'sm' \| 'lg'` | - | Size the component small or large. |
| `vertical` | `boolean` | `false` | Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here. |

### c-button-toolbar
_component_

```jsx
import { ButtonToolbarComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `string` | `'toolbar'` | Default role attr for ButtonToolbar |
