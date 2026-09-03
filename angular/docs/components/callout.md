# Angular Callout Component

> Angular Callout component provides presentation of content in a visually distinct manner. Includes a heading, icon and typically text-based content.

## Examples

Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the **required**
contextual props (e.g., `color="success"`).

## API

### Callout Module

```typescript
import { CalloutModule } from '@coreui/angular';

@NgModule({
  imports: [CalloutModule,...]
})
export class AppModule(){}
```

### c-callout
_component_

```jsx
import { CalloutComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
