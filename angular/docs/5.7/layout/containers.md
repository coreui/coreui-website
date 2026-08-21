# Angular Containers

> Containers are a fundamental building block of CoreUI for Angular. They contain, pad, and align your content within a given device or viewport.

## How they work

Containers are the most basic layout element in CoreUI for Angular and are **required when using our default grid
system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be
nested, most layouts do not require a nested container.

CoreUI for Angular comes with three different containers:

- `c-container`, which sets a `max-width` at each responsive breakpoint
- `c-container fluid`, which has `width: 100%` at all breakpoints
- `c-container { sm|md|lg|xl|xxl }`, with `width: 100%` until the specified breakpoint

The table below illustrates how each container's `max-width` compares to the original `c-container` and `c-container
fluid` across each breakpoint.

| `<c-container>` | Extra small<div className="fw-normal">&lt;576px</div> | Small<div className="fw-normal">&ge;576px</div> | Medium<div className="fw-normal">&ge;768px</div> | Large<div className="fw-normal">&ge;992px</div> | X-Large<div className="fw-normal">&ge;1200px</div> | XX-Large<div className="fw-normal">&ge;1400px</div> |
| --- | --- | --- | --- | --- | --- | --- |
|  | <span className="text-body-secondary">100%</span> | 540px | 720px | 960px | 1140px | 1320px |
| `breakpoint="sm"` | <span className="text-body-secondary">100%</span> | 540px | 720px | 960px | 1140px | 1320px |
| `breakpoint="md"` | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | 720px | 960px | 1140px | 1320px |
| `breakpoint="lg"` | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | 960px | 1140px | 1320px |
| `breakpoint="xl"` | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | 1140px | 1320px |
| `breakpoint="xxl"` | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | 1320px |
| `fluid` | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> | <span className="text-body-secondary">100%</span> |

### Default container

Our default `c-container` class is a responsive, fixed-width container, meaning its `max-width` changes at each
breakpoint.

### Responsive containers

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after
which we apply `max-width` for each of the higher breakpoints. For example, `c-container sm` is 100% wide to start
until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`,
`xl`, and `xxl`.

### Fluid containers

Use `c-container fluid` for a full width container, spanning the entire width of the viewport.

## API reference

### Grid Module

```typescript
import { GridModule } from '@coreui/angular';

@NgModule({
    imports: [GridModule,]
})
export class AppModule() { }
```

### c-container

_component_

```jsx
import { ContainerComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `breakpoint` | `string` | `''` | Set container 100% wide until a breakpoint. |
| `fluid` | `boolean` | `false` | Set container 100% wide, spanning the entire width of the viewport. |
