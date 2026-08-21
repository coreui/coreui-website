# Angular Accordion Component

> Build vertically collapsing accordions in combination with our Angular Collapse component.

## Examples

Click the accordions below to expand/collapse the accordion content.

### Flush

Add `flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions
edge-to-edge with their parent container.

### Always open

Make accordion items stay open when another item is opened.

## API

### Accordion Module

```typescript
import { AccordionModule, SharedModule } from '@coreui/angular';

@NgModule({
    imports: [
      AccordionModule,
      SharedModule
    ]
})
export class AppModule(){}
```

### c-accordion
_component_

```jsx
import { AccordionComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alwaysOpen` | `boolean` | `false` | Make accordion items stay open when another item is opened |
| `flush` | `boolean` | `false` | Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container. |

### c-accordion-item
_component_

```jsx
import { AccordionItemComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `visible` | `boolean` | `false` | Toggle an accordion item programmatically |

### cAccordionButton
_directive_

```jsx
import { AccordionButtonDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `collapsed` | `boolean` | `undefined` | Toggles an accordion button collapsed state. Use in accordionHeaderTemplate. |
| `type` | `string` | `'button'` | Default type for cAccordionButton |

### Shared Module

### cTemplateId
_directive_
```jsx
import { TemplateIdDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cTemplateId` | `string` | - | Predefined template name (id) for optional slots |

_templates:_

|template id| description|
|---|---|
|`accordionHeader` | header content only|
|`accordionBody` | body content only|
|`accordionHeaderTemplate` | header full template|
|`accordionBodyTemplate` | body full template|

_internals:_

##### AccordionService
_service_

|prop|type|default|description|
|---|---|---|---|
|`items`|`AccordionItemComponent[]`|_[ ]_| array of accordion items|
|`alwaysOpen`|`boolean`|_false_| in sync with `AccordionComponent.alwaysOpen` prop|
