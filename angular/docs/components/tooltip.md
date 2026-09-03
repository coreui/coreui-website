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

### Tooltip Module

```typescript
import { TooltipModule } from '@coreui/angular';

@NgModule({
    imports: [TooltipModule,]
})
export class AppModule() { }
```

### cTooltip
_directive_

```jsx
import { TooltipDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cTooltip` | `string \| TemplateRef<any>` | `undefined` | Content of tooltip |
| `cTooltipOptions` | `Partial<Options>` | `{}` | Optional popper Options object, takes precedence over cPopoverPlacement prop |
| `cTooltipPlacement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. |
| `cTooltipRef` | `ElementRefDirective` | `undefined` | ElementRefDirective for positioning the tooltip on reference element |
| `cTooltipTrigger` | `Triggers \| Triggers[]` | `'hover'` | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them. |
| `cTooltipVisible` | `boolean` | `false` | Toggle the visibility of tooltip component. |

### Events

| Name | Description |
| --- | --- |
| `cTooltipVisibleChange` | Emitted when `cTooltipVisible` changes. |
