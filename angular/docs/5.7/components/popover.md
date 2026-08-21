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

### Popover

```typescript
import { PopoverModule } from '@coreui/angular';

@NgModule({
    imports: [PopoverModule,]
})
export class AppModule() { }
```

### Props

##### Inputs

|prop|description|type|default|notes|
|:---|:---|:---|:---:|---|
|`cPopover` | Content of a popover. | `string`, `TemplateRef` | - | _required_
|`cPopoverOptions` | Optional popper Options object, takes precedence over cPopoverPlacement. | `Options` | - |
|`cPopoverPlacement` | Placement of a popover. | `top`, `bottom`, `left`, `right` | `top` | _string_
|`cPopoverTrigger` | Event handlers to toggle popover. Specify one trigger or an array of them. | `Triggers`, `Triggers[]` | `hover` | _string_, _string[]_
|`cPopoverVisible` | Toggle the visibility of a popover. | `boolean` | `false` |
