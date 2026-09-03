# Angular Collapse Component

> Angular Collapse directive toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.

## How it works

The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from its current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.

## Examples
You can use it with a link or a button element.

## Horizontal

Add the `horizontal` property to transition the width instead of height and set a width on the immediate child element.

## Multiple targets

A `c-button` can show and hide multiple elements.

## API reference

### Collapse Module

```typescript
import { CollapseModule } from '@coreui/angular';

@NgModule({
    imports: [CollapseModule,]
})
export class AppModule() { }
```

### cCollapse
_directive_

```jsx
import { CollapseDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `horizontal` | `boolean` | `false` | Set horizontal collapsing to transition the width instead of height. |
| `navbar` | `boolean` | `false` | Add a `navbar` prop for grouping and hiding navbar contents by a parent breakpoint. |
| `visible` | `boolean` | `false` | Toggle the visibility of a collapsible element. |

### Events

| Name | Description |
| --- | --- |
| `collapseChange` | Event emitted on visibility change |
| `visibleChange` | Event emitted on visibility change |
