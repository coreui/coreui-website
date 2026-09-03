# Angular Popover Component

> Documentation and examples for adding Angular Popovers to any element on your site.

Use CoreUI Angular popover directive
to create Angular popovers like those found in iOS, to any element on your site. Tutorials and examples for adding custom CoreUI Angular popovers.

## Examples

### Html content
- Click the button below to see a popover:

### Directions

- Hover over the buttons below to see the four popover directions: top, right, bottom, and left. Directions are
mirrored when using CoreUI in RTL.

## Usage
A popover shown on hover or focus, can be dismissed by pressing the <kbd>Escape</kbd> key, helping satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion.

## API reference

### Popover Module

```typescript
import { PopoverModule } from '@coreui/angular';

@NgModule({
    imports: [PopoverModule,]
})
export class AppModule() { }
```

### cPopover
_directive_

```jsx
import { PopoverDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cPopover` | `string \| TemplateRef<any>` | `undefined` | Content of popover |
| `cPopoverOptions` | `Partial<Options>` | `{}` | Optional popper Options object, takes precedence over cPopoverPlacement prop |
| `cPopoverPlacement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. |
| `cPopoverRef` | `ElementRefDirective` | `undefined` | ElementRefDirective for positioning the tooltip on reference element |
| `cPopoverTrigger` | `Triggers \| Triggers[]` | `'hover'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `cPopoverVisible` | `boolean` | `false` | Toggle the visibility of popover component. |

### Events

| Name | Description |
| --- | --- |
| `cPopoverVisibleChange` | Emitted when `cPopoverVisible` changes. |
