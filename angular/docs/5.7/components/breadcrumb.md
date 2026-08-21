# Angular Breadcrumb Component

> Angular Breadcrumb navigation component indicates the current location within a navigational hierarchy that automatically adds separators.

## Example

The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don’t have to add separators, because they automatically added in CSS through `::before` and content.

## Dividers

Dividers are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--coreui-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable — and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.

When modifying via Sass, the [quote](https://sass-lang.com/documentation/modules/string#quote) function is required to generate the quotes around a string. For example, using `>` as the divider, you can use this:

```scss
$breadcrumb-divider: quote(">");
```

It's also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.

```scss
$breadcrumb-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E");
```

You can also remove the divider setting `--cui-breadcrumb-divider: '';` (empty strings in CSS custom properties counts as a value), or setting the Sass variable to `$breadcrumb-divider: none;`.

```scss
$breadcrumb-divider: none;
```

## Accessibility

Since breadcrumbs provide navigation, it's useful to add a significant label such as `aria-label="breadcrumb"` to explain the type of navigation implemented in the `<nav>` element. You should also add an `aria-current="page"` to the last item of the set to show that it represents the current page. **CoreUI for Angular automatically add all of this labels to breadcrumb's components.**

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).

## API

### Breadcrumb Module

```typescript
import { BreadcrumbModule } from '@coreui/angular';

@NgModule({
  imports: [BreadcrumbModule,]
})
export class AppModule(){}
```

### c-breadcrumb
_component_

```jsx
import { BreadcrumbComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | `'breadcrumb'` | Default aria-label for breadcrumb |
| `role` | `string` | `'navigation'` | Default role for breadcrumb |

### c-breadcrumb-item
_component_

```jsx
import { BreadcrumbItemComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `undefined` | Toggle the active state for the component |
| `attribs` | `INavAttributes` | - | Additional html attributes for link |
| `attributes` | `INavAttributes` | `undefined` |  |
| `linkProps` | `INavLinkProps` | - | Some `NavigationExtras` props for the inner `[routerLink]` directive and `routerLinkActiveOptions` |
| `url` | `string \| any[]` | - | The `url` prop for the inner `[routerLink]` directive |

### c-breadcrumb-router
_component_

```jsx
import { BreadcrumbRouterComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `IBreadcrumbItem[]` | - | Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior |

### BreadcrumbRouter Service

You can override `BreadcrumbRouterService` in a `providers` section.

```typescript
...
providers: [
  { provide: BreadcrumbRouterService, useClass: yourBreadcrumbRouterService }
]
```
