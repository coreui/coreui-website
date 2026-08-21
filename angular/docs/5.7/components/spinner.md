# Angular Spinner Component

> Indicate the loading state of a component or page with CoreUI Angular spinners.

## About

CoreUI "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested

```html
<span class="visually-hidden">Loading...</span>
```

## Examples

### Border spinner

Use the border spinners for a lightweight loading indicator.

### Colors

The border spinner uses `currentColor` for its `border-color`. You can use any of our text color utilities on the standard spinner.

### Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!.

Once again, this spinner is built with `currentColor`, so you can easily change its appearance. Here it is with supported variants.

### Size

Add `size="sm"` property to make a smaller spinner that can quickly be used within other components.

### Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

## API reference

### Spinner Module

```typescript
import { SpinnerModule } from '@coreui/angular';

@NgModule({
    imports: [SpinnerModule,]
})
export class AppModule() { }
```

### c-spinner
_component_

```jsx
import { SpinnerComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `label` | `string` | `'Loading...'` | Label for accessibility. |
| `role` | `string` | `'status'` | Default role attr for spinner |
| `size` | `'sm'` | - | Size the component small. |
| `variant` | `'border' \| 'grow'` | `'border'` | Set the button variant to an outlined button or a ghost button. |
