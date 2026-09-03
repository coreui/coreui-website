# Angular Nav Component

> Documentation and examples of how to use CoreUI Angular navigation components.

Navigation available in CoreUI for Angular share general markup and styles, from the base `.nav` class to the active
and
disabled states. Swap modifier classes to switch between each style.

## Examples

The base `c-nav` component is built with flexbox and provide a strong foundation for building all types of navigation
components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and
basic disabled styling.

### Base nav

Classes are used throughout, so your markup can be super flexible. Use `c-nav-item` like above, or roll your own with
a `c-nav` element. Because the `.nav` uses `display: flex`, the `cNavLink`
behaves the same as `c-nav-item` would, but without the extra markup.

Change the style of `c-nav` component with modifiers and utilities. Mix and match as needed, or build your own.

### Horizontal alignment

Change the horizontal alignment of your nav with flexbox utilities. By default, navs are left-aligned, but you can
easily change them to center or right aligned.
Centered with `.justify-content-center`:

Right-aligned with `.justify-content-end`:

### Vertical
Stack your navigation by changing the flex item direction with the `.flex-column` utility. Need to stack them on some
viewports but not others? Use the responsive versions (ex. `.flex-sm-column`).

### Tabs
Take the basic nav from above and add the `variant="tabs"` class to generate a tabbed interface

### Pills
Take that same HTML, but use `variant="pills"` instead:

### Underline

<c-badge color="danger" size="sm">PRO</c-badge>

Take that same HTML, but use `variant`="underline":

### Enclosed

_Added in 5.7.24._

Use `variant="enclosed"` to give your navigation items a subtle border and rounded styling.

### Enclosed pills

_Added in 5.7.24._

Use `variant="enclosed-pills"` for a pill-style appearance of each nav item. It adds the `.nav-enclosed` styling on
top of the pill-shaped item borders.

### Link items

_Added in 5.7.24._

Set `href` on `c-nav-item` and it renders the `cNavLink` anchor for you, forwarding `active`, `disabled` and
`tabindex`. Without `href` the item projects its content as is, so a router link keeps its own markup.

### Fill and justify
Force your `c-nav` contents to extend the full available width one of two modifier classes. To proportionately fill
all available space with your `c-nav-item`, use `layout="fill"`.
Notice that all horizontal space is occupied, but not every nav item has the same width.

For equal-width elements, `use layout="justified"`. All horizontal space will be occupied by nav links, but unlike the
`fill` above, every nav item will be the same width.

### Working with flex utilities
If you need responsive nav variations, consider using a series of [flexbox
utilities](https://coreui.io/docs/utilities/flex). While more verbose, these
utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on
the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small
breakpoint.

### Using dropdowns
Add dropdown menus with a little extra HTML.

### Tabs with dropdowns

### Pills with dropdowns

## Regarding accessibility
`c-nav` carries `role="navigation"` by default, so a nav used as a navigation bar is announced as such without extra
markup. Change it with the `role` input where the nav is not a navigation landmark — several navigation landmarks on
one page should be labelled (`aria-label`) so they can be told apart.

Note that navigation bars, even if visually styled as tabs with the `.nav-tabs` class, should not be given
`role="tablist"`, `role="tab"` or `role="tabpanel"` attributes. These are only appropriate for dynamic tabbed
interfaces, as described in the WAI ARIA Authoring Practices. See JavaScript behavior for dynamic tabbed interfaces
in this section for an example. The `aria-current` attribute is not necessary on dynamic tabbed interfaces since our
JavaScript handles the selected state by adding `aria-selected="true"` on the active tab.

## API reference

### Nav Module

```typescript
import { NavModule } from '@coreui/angular';

@NgModule({
    imports: [NavModule,]
})
export class AppModule() { }
```

### c-nav
_component_

```jsx
import { NavComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `layout` | `'fill' \| 'justified'` | `undefined` | Specify a layout type for component. |
| `role` | `string` | `'navigation'` | Default role for nav. |
| `variant` | `'enclosed' \| 'enclosed-pills' \| 'pills' \| 'tabs' \| 'underline' \| 'underline-border'` | `undefined` | Set the nav variant to tabs or pills. |

### c-nav-group
_component_

```jsx
import { NavGroupComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `compact` | `boolean` | `false` | Make nav group items more compact by cutting all `padding` in half. |
| `toggler` | `string` | - | Set group toggler label. |
| `togglerTemplate` | `TemplateRef<object>` | - | Template for the group toggler content, receives the visible state as `$implicit`. |
| `visible` | `boolean` | - | Show nav group items. Sets the initial state, and follows every later change. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | Event emitted on visibility change. |

### c-nav-group-items
_component_

```jsx
import { NavGroupItemsComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `compact` | `boolean` | `false` | Make nav group items more compact by cutting all `padding` in half. |

### c-nav-item
_component_

```jsx
import { NavItemComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `undefined` | Toggle the active state for the nav link rendered for `href`. |
| `disabled` | `boolean` | `false` | Set disabled attr for the nav link rendered for `href`. |
| `href` | `string` | - | The href attribute of the nav link. Set it to render the nav link, otherwise the item projects its content as is. |
| `tabindex` | `number` | `undefined` | The tabindex attribute of the nav link rendered for `href`. |

### c-nav-title
_component_

```jsx
import { NavTitleComponent } from '@coreui/angular'
```

### cNavLink
_directive_

```jsx
import { NavLinkDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `undefined` | Toggle the active state for the component |
| `cNavLink` | `boolean` | `true` | Sets .nav-link class to the host |
| `disabled` | `boolean` | `false` | Set disabled attr for the host element |
| `tabindex` | `number` | `undefined` | The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating). |
