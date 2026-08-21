# Angular Footer Component

> Angular Footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.

## Examples

## API reference

### Footer Module

```typescript
import { FooterModule } from '@coreui/angular';

@NgModule({
    imports: [FooterModule,]
})
export class AppModule() { }
```

### c-footer
_component_

```jsx
import { FooterComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `position` | `Positions` | - | Place footer in non-static positions |
| `role` | `string` | `'contentinfo'` | Default role for footer |
