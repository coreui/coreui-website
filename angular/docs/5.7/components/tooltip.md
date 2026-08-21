# Angular Tooltip Component

> Documentation and examples for adding Angular Tooltips.

Use CoreUI Angular tooltip directive to create beautiful tooltips and present hint or information regarding the
element on
hover. Tutorials and examples for adding custom CoreUI Angular tooltips.

## Examples

### Base tooltips
- Hover over the links below to see tooltips:

### Directions

- Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are
mirrored when using CoreUI in RTL.

### Html content
- Use `ng-template` to render html content and / or non default triggers (click).

### Reference element
- Use `cTooltipRef` to position the tooltip on reference element. <span class="badge badge-sm bg-info">5.1.0+</span>

### Disabled elements
Elements with the disabled attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover).
As a workaround, you’ll want to trigger the tooltip from a wrapper `div` or `span`, ideally made keyboard-focusable using `tabindex="0"`.

## Usage
A shown tooltip can be dismissed by pressing the <kbd>Escape</kbd> key, helping satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion.

## API reference

### Tooltip

```typescript
import { TooltipModule } from '@coreui/angular';

@NgModule({
    imports: [TooltipModule,]
})
export class AppModule() { }
```

### Props

##### Inputs

|prop|description|type|default|notes|
|:---|:---|:---|:---:|---|
|`cTooltip` | Content of a tooltip. | `string`, `TemplateRef` | - | _required_
|`cTooltipOptions` | Optional popper Options object, takes precedence over cPopoverPlacement. | `Options` | - |
|`cTooltipPlacement` | Placement of a tooltip. | `top`, `bottom`, `left`, `right` | `top` | _string_
|`cTooltipTrigger` | Sets event handlers to toggle tooltip. Specify one trigger or an array of them. | `Triggers`,
`Triggers[]` | `hover` | _string_, _string[]_
|`cTooltipVisible` | Toggle the visibility of tooltip component. | `boolean` | `false` |
|`cTooltipRef` | ElementRefDirective reference | `ElementRefDirective` | `undefined` | <span class="badge badge-sm bg-info">5.1.0+</span>
