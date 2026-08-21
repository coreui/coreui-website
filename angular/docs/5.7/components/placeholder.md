# Angular Placeholder Component

> Use Angular placeholders for your components or pages to indicate something may still be loading.

## About

Placeholders can be used to enhance the experience of your application. You will, need set some custom widths to
toggle their visibility. Their appearance, color, and sizing can be easily customized with our utility classes.

## Example

In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading
card". Size and proportions are the same between the two.

## How it works

Create placeholders with the <code>cPlaceholder</code> directive and a grid
column cCol directive (e.g., <code>cCol="6"</code>) to set the <code>width</code>. They can
replace the text inside an element or be added as a modifier to an existing
component.

> The use `of aria-hidden="true"` only indicates that the element should be hidden to screen readers. The **loading** behavior of the placeholder depends on how authors will actually use the placeholder styles, how they plan to update things, etc. Some code may be needed to* the state of the placeholder and inform users of the update.

### Width

You can change the `width` through grid column classes, width utilities, or inline styles.

### Color

By default, the `cPlaceholder` uses `currentColor`. This can be overridden with a custom color or utility class.

### Sizing

The size of `cPlaceholder` are based on the typographic style of
the parent element. Customize them with `size` prop: `lg`, `sm`, or `xs`.

### Animation

Animate placeholders with `cPlaceholderAnimation="glow"` or
`cPlaceholderAnimation="wave"` to better convey the perception of something
being <em>actively</em> loaded.

## API

### Placeholder Module

```typescript
import { PlaceholderModule, GridModule, UtilitiesModule } from '@coreui/angular';

@NgModule({
    imports: [
      PlaceholderModule,
      GridModule,
      UtilitiesModule
    ]
})
export class AppModule() { }
```

### cPlaceholder
_directive_

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
| `cPlaceholder` | Toggle placeholder visibility. | `boolean` | `true` |
| `size` | Size the component small or large. | `xs \| sm \| lg` | _undefined_ |

### cPlaceholderAnimation
_directive_

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
| `cPlaceholderAnimation` | Animation type for placeholder. | `glow \| wave` | _undefined_ |
