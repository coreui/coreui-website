# Angular Header Component

> Documentation and examples for Angular Header - a powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `cHeaderBrand` for your company, product, or project name
- `cHeaderNav` for a full-height and lightweight navigation (including support for dropdowns)
- `cHeaderToggler` for use with navigation toggling
- `cHeaderText` for adding vertically centered strings of text
- `cHeaderDivider` to separate subheaders
- Flex and spacing utilities for any form controls and actions

## Examples
Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the `lg` (large) breakpoint.

## API reference

### Header Module

```typescript
import { HeaderModule } from '@coreui/angular';

@NgModule({
imports: [HeaderModule,]
})
export class AppModule() { }
```

### c-header
_component_

```jsx
import { HeaderComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `container` | `Container` | - | Defines optional container wrapping children elements |
| `position` | `Positions` | - | Place header in non-static positions |
| `role` | `string` | `'banner'` | Default role for header |

### c-header-brand
_component_

```jsx
import { HeaderBrandComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `string` | `'button'` | Default role for header-brand |

### c-header-nav
_component_

```jsx
import { HeaderNavComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `role` | `string` | `'navigation'` | Default role for header-nav |

### cHeaderText
_directive_

### cHeaderToggler
_directive_

```jsx
import { HeaderTogglerDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | `'Toggle navigation'` | Default aria-label attr for header-toggler |
| `type` | `string` | `'button'` | Default type for header-toggler button |
