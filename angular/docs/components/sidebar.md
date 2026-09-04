# Angular Sidebar Component

> Angular Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Sidebar comes with built-in support for branding, navigation, and more.

## How it works

Here's what you need to know before getting started with the Angular Sidebar component:

- `c-sidebar` renders the `.sidebar` container.
- On mobile devices, the sidebar is hidden by default. Control it with the `visible` input.
- On desktop devices, the sidebar is shown by default. Hide it with `[visible]="false"`.
- Use `narrow` to switch the sidebar to the narrow variant.
- Use `unfoldable` to switch the sidebar to the narrow-unfoldable variant.
- `c-sidebar-nav` renders `.sidebar-nav` and supports nested groups through `c-nav-group`.
- `c-sidebar-nav` sets `role="navigation"` for you; override it with the `role` input when the nav is not the page's
  main navigation.

## Supported content

Sidebar comes with built-in support for a handful of sub-components. Choose from the following as needed:

- `c-sidebar-header` for an optional header.
- `c-sidebar-brand` for your company, product, or project name.
- `c-sidebar-nav` for a full-height and lightweight navigation, including nested groups.
- `c-sidebar-footer` for an optional footer.
- `cSidebarToggler` for toggling the sidebar state.

## Examples

Below is a more complete sidebar example shown by default on desktop devices. It combines several optional features in
a single demo, including narrow visibility helpers, tree navigation, nested groups, a custom group indicator, badges,
and a footer toggler.

### Narrow sidebar

Add the `narrow` input to make the sidebar narrow.

Use `.d-sidebar-narrow` to show content only in the narrow state and `.d-sidebar-narrow-none` to hide content in the
narrow state.

### Unfoldable sidebar

Add the `unfoldable` input to make the sidebar narrow and expand it on hover.

Use `.d-sidebar-narrow-unfoldable` and `.d-sidebar-narrow-unfoldable-none` to control content visibility for unfoldable
sidebars.

### Narrow visibility helpers

Use the sidebar visibility helpers to swap content between regular, narrow, and narrow-unfoldable variants:

- `.d-sidebar-narrow` shows content only in the narrow state.
- `.d-sidebar-narrow-none` hides content in the narrow state.
- `.d-sidebar-narrow-unfoldable` shows content only when the sidebar uses the unfoldable variant.
- `.d-sidebar-narrow-unfoldable-none` hides content when the sidebar uses the unfoldable variant.

## Navigation

`c-sidebar-nav` renders the `.sidebar-nav` container. It builds the navigation from the `navItems` array, and it also
projects its content, so the navigation can be declared in the template instead — or both at once.

### Basic navigation

Building blocks to declare inside `c-sidebar-nav`:

- `c-nav-title` for a section heading.
- `c-nav-item` for a navigation entry — set `href` and it renders the link itself.
- `cNavLink` for a link written by hand, for example a `routerLink`.

### Navigation groups

_Added in 5.7.24._

`c-nav-group` is an expandable section: `toggler` is the clickable label, the projected content becomes the group
items. Set `visible` for a group that starts expanded, and `compact` to halve the padding of that one group.

Groups behave as an accordion within their level: opening one collapses its siblings. `c-sidebar-nav` is the top
level, every `c-nav-group` opens a level for its own children, and a collapsed group keeps the state of its
subgroups — reopening it brings them back as they were. A link that becomes `active` expands the whole branch above
it, which is what makes `routerLinkActive` reveal the current route on load; `dropdownMode="none"` turns that off.

Outside `c-sidebar-nav` a group falls back to its own state, so siblings no longer collapse each other. Provide
`NavGroupService` on the container to get the accordion back:

```typescript
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [NavComponent, NavGroupComponent, NavItemComponent],
  providers: [NavGroupService]
})
export class MenuComponent {}
```

### Compact navigation

_Added in 5.7.28._

Set `compact` on `c-sidebar-nav` to halve the vertical padding of every link in the navigation, or on a single
`c-nav-group` to compact just that section.

### Tree navigation

_Added in 5.7.28._

Set `variant="tree"` on `c-sidebar-nav` to draw nested groups as a tree: each level gets a guide line and its items
line up under the group they belong to.

### Group indicator

`c-nav-group` renders the default indicator through the `.nav-group-toggle` styles, so a plain toggler needs no extra
markup.

### Custom group indicator

_Added in 5.7.24._

To replace the default indicator, pass a template to `togglerTemplate` — it receives the visible state, so the icon can
follow the group. Put the icon in a `.nav-group-toggle-indicator` element.

### Data-driven navigation

Instead of declaring the navigation, hand `c-sidebar-nav` an `INavData` array through `navItems` and it renders the
titles, links, badges and groups for you. Both ways can be combined: projected content is rendered after the items
built from the array.

`dropdownMode` decides how much the router drives these groups:

- `path` (default) opens the group whose item matches the active route and closes it when the route no longer matches.
- `close` does the same, and additionally closes a group when another one is clicked.
- `none` leaves the group alone — it neither opens under a matching route nor closes on navigation, so the user's
  clicks are the only thing that moves it.

> Until 5.7.28 a group matching the active route was expanded on load under every `dropdownMode`, `none` included.
> Set `dropdownMode="none"` if you relied on that and want no route-driven expansion at all.

## Dark sidebar

Change the appearance of sidebars with `colorScheme="dark"`.

## Placement

By default, placement for sidebar components is on the left side of the viewport, but you can change it with the
`placement` input:

- `placement="start"` places the sidebar on the left side of the viewport.
- `placement="end"` places the sidebar on the right side of the viewport.

## Customizing

### CSS variables

Angular sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization.
Values for the CSS variables are set via Sass.

```scss
--cui-sidebar-zindex: #{$zindex-sidebar};
--cui-sidebar-width: #{$sidebar-width};
--cui-sidebar-bg: #{$sidebar-bg};
--cui-sidebar-padding-x: #{$sidebar-padding-x};
--cui-sidebar-padding-y: #{$sidebar-padding-y};
--cui-sidebar-color: #{$sidebar-color};
--cui-sidebar-brand-color: #{$sidebar-brand-color};
--cui-sidebar-brand-bg: #{$sidebar-brand-bg};
```

The narrow variants add their own:

```scss
--cui-sidebar-narrow-width: #{$sidebar-narrow-width};
--cui-sidebar-padding-x: #{$sidebar-narrow-padding-x};
```

The navigation carries its own set:

```scss
--cui-sidebar-nav-padding-x: #{$sidebar-nav-padding-x};
--cui-sidebar-nav-padding-y: #{$sidebar-nav-padding-y};
--cui-sidebar-nav-gap: #{$sidebar-nav-gap};

--cui-sidebar-nav-title-padding-x: #{$sidebar-nav-title-padding-x};
--cui-sidebar-nav-title-padding-y: #{$sidebar-nav-title-padding-y};
--cui-sidebar-nav-title-margin-top: #{$sidebar-nav-title-margin-top};
--cui-sidebar-nav-title-color: #{$sidebar-nav-title-color};

--cui-sidebar-nav-link-padding-x: #{$sidebar-nav-link-padding-x};
--cui-sidebar-nav-link-padding-y: #{$sidebar-nav-link-padding-y};
--cui-sidebar-nav-link-color: #{$sidebar-nav-link-color};
--cui-sidebar-nav-link-bg: #{$sidebar-nav-link-bg};
--cui-sidebar-nav-link-border-color: #{$sidebar-nav-link-border-color};
--cui-sidebar-nav-link-border-radius: #{$sidebar-nav-link-border-radius};
--cui-sidebar-nav-link-border-width: #{$sidebar-nav-link-border-width};

--cui-sidebar-nav-link-active-color: #{$sidebar-nav-link-active-color};
--cui-sidebar-nav-link-active-bg: #{$sidebar-nav-link-active-bg};
--cui-sidebar-nav-link-disabled-color: #{$sidebar-nav-link-disabled-color};
--cui-sidebar-nav-link-hover-color: #{$sidebar-nav-link-hover-color};
--cui-sidebar-nav-link-hover-bg: #{$sidebar-nav-link-hover-bg};

--cui-sidebar-nav-link-icon-margin: #{$sidebar-nav-link-icon-margin};
--cui-sidebar-nav-link-icon-color: #{$sidebar-nav-link-icon-color};
--cui-sidebar-nav-link-icon-width: #{$sidebar-nav-link-icon-width};
--cui-sidebar-nav-link-icon-height: #{$sidebar-nav-link-icon-height};
--cui-sidebar-nav-link-icon-font-size: #{$sidebar-nav-link-icon-font-size};
--cui-sidebar-nav-link-active-icon-color: #{$sidebar-nav-link-active-icon-color};
--cui-sidebar-nav-link-disabled-icon-color: #{$sidebar-nav-link-disabled-icon-color};
--cui-sidebar-nav-link-hover-icon-color: #{$sidebar-nav-link-hover-icon-color};

--cui-sidebar-nav-link-icon-bullet-size: #{$sidebar-nav-link-icon-bullet-size};
--cui-sidebar-nav-link-icon-bullet-bg: #{$sidebar-nav-link-icon-bullet-bg};
--cui-sidebar-nav-link-icon-bullet-border-width: #{$sidebar-nav-link-icon-bullet-border-width};
--cui-sidebar-nav-link-icon-bullet-border-radius: #{$sidebar-nav-link-icon-bullet-border-radius};
--cui-sidebar-nav-link-icon-bullet-border-color: #{$sidebar-nav-link-icon-bullet-border-color};
--cui-sidebar-nav-link-active-icon-bullet-bg: #{$sidebar-nav-link-active-icon-bullet-bg};
--cui-sidebar-nav-link-active-icon-bullet-border-color: #{$sidebar-nav-link-active-icon-bullet-border-color};
--cui-sidebar-nav-link-disabled-icon-bullet-bg: #{$sidebar-nav-link-disabled-icon-bullet-bg};
--cui-sidebar-nav-link-disabled-icon-bullet-border-color: #{$sidebar-nav-link-disabled-icon-bullet-border-color};
--cui-sidebar-nav-link-hover-icon-bullet-bg: #{$sidebar-nav-link-hover-icon-bullet-bg};
--cui-sidebar-nav-link-hover-icon-bullet-border-color: #{$sidebar-nav-link-hover-icon-bullet-border-color};

--cui-sidebar-nav-group-bg: #{$sidebar-nav-group-bg};
--cui-sidebar-nav-group-border-width: #{$sidebar-nav-group-border-width};
--cui-sidebar-nav-group-border-radius: #{$sidebar-nav-group-border-radius};
--cui-sidebar-nav-group-border-color: #{$sidebar-nav-group-border-color};
--cui-sidebar-nav-group-items-padding-y: #{$sidebar-nav-group-items-padding-y};
--cui-sidebar-nav-group-items-padding-x: #{$sidebar-nav-group-items-padding-x};
--cui-sidebar-nav-group-indicator-color: #{$sidebar-nav-group-indicator-color};
--cui-sidebar-nav-group-indicator-icon: #{escape-svg($sidebar-nav-group-indicator-icon)};
--cui-sidebar-nav-group-indicator-hover-color: #{$sidebar-nav-group-indicator-hover-color};
--cui-sidebar-nav-group-indicator-hover-icon: #{escape-svg($sidebar-nav-group-indicator-hover-icon)};
--cui-sidebar-nav-group-toggle-show-color: #{$sidebar-nav-group-toggle-show-color};
```

And the tree variant adds:

```scss
--cui-sidebar-nav-tree-group-border-color: #{$sidebar-nav-tree-group-border-color};
--cui-sidebar-nav-link-icon-bullet-bg: #{$sidebar-nav-tree-link-icon-bullet-bg};
--cui-sidebar-nav-link-hover-icon-bullet-bg: #{$sidebar-nav-tree-link-hover-icon-bullet-bg};
--cui-sidebar-nav-link-active-icon-bullet-bg: #{$sidebar-nav-tree-link-active-icon-bullet-bg};
```

#### How to use CSS variables

```ts
const vars = {
  '--my-css-var': 10,
  '--my-another-css-var': "red"
}
```

```html
<div [ngStyle]="vars"></div>
```

### Sass variables

```scss
$sidebar-width:                            16rem !default;
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
) !default;
$sidebar-padding-y:                        $spacer !default;
$sidebar-padding-x:                        $spacer !default;
$sidebar-color:                            var(--cui-body-color) !default;
$sidebar-bg:                               var(--cui-body-bg) !default;
$sidebar-transition:                       margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s !default;
$sidebar-brand-color:                      var(--cui-body-color) !default;
$sidebar-brand-bg:                         rgba($black, .2) !default;
$sidebar-backdrop-bg:                      $black !default;
$sidebar-backdrop-opacity:                 .5 !default;
$sidebar-overlaid-box-shadow:              var(--cui-box-shadow) !default;

$sidebar-narrow-width:                     4rem !default;
$sidebar-narrow-padding-x:                 .5rem !default;
$sidebar-narrow-unfoldable-box-shadow:     var(--cui-box-shadow) !default;
```

## API reference

### Sidebar Module

```typescript
import { SidebarModule } from '@coreui/angular';

@NgModule({
    imports: [SidebarModule,]
})
export class AppModule() { }
```

### c-sidebar
_component_

```jsx
import { SidebarComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `colorScheme` | `'dark' \| 'light'` | - | Sets if the color of text should be colored for a light or dark background. |
| `id` | `string` | - | Sets html attribute id. |
| `narrow` | `boolean` | `false` | Make sidebar narrow. |
| `overlaid` | `boolean` | `false` | Set sidebar to overlaid variant. |
| `placement` | `'start' \| 'end'` | - | Components placement, there’s no default placement. |
| `position` | `'fixed' \| 'sticky'` | `'fixed'` | Place sidebar in non-static positions. |
| `size` | `'sm' \| 'lg' \| 'xl'` | - | Size the component small, large, or extra large. |
| `unfoldable` | `boolean` | `false` | Expand narrowed sidebar on hover. |
| `visible` | `boolean` | `false` | Toggle the visibility of sidebar component. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | Event emitted on visibility change. |

### c-sidebar-brand
_component_

```jsx
import { SidebarBrandComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `brandFull` | `any` | - | Image for the wide sidebar. |
| `brandNarrow` | `any` | - | Image for the narrow sidebar. |
| `routerLink` | `string \| any[] \| UrlTree \| null` | - | Router link for the sidebar brand. |

You can pass content or `brandFull` and `brandNarrow`. Prop shape:

```js
{
  src: '/assets/images/brand/coreui-pro-angular-white.svg',
  width: 190,
  height: 35,
  alt: 'CoreUI Logo'
}
```

### c-sidebar-header
_component_ wrapper

```jsx
import { SidebarHeaderComponent } from '@coreui/angular'
```

### c-sidebar-footer
_component_ wrapper

```jsx
import { SidebarFooterComponent } from '@coreui/angular'
```

### cSidebarToggle
_directive_

```jsx
import { SidebarToggleDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cSidebarToggle` | `string` | `undefined` | Id of sidebar for toggle action. |
| `toggle` | `'visible' \| 'unfoldable'` | `'visible'` | Sidebar property name for toggle action. |

### cSidebarToggler
_directive_

```jsx
import { SidebarTogglerDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cSidebarToggler` | `string` | `undefined` | Id of sidebar for toggle action. |
| `role` | `string` | `'button'` | Default role for sidebar toggler. |
| `toggle` | `'visible' \| 'unfoldable'` | `'visible'` | Sidebar property name for toggle action. |

Composes `cSidebarToggle`, so the button carries the target sidebar id itself:

```html
<button cSidebarToggler="sidebar1" toggle="unfoldable"></button>
```

### c-sidebar-nav
_component_ **subject to change**

```jsx
import { SidebarNavComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `compact` | `boolean` | `undefined` | Renders the nav in compact mode. |
| `dropdownMode` | `'path' \| 'none' \| 'close'` | `'path'` | Determines when an inactive `c-sidebar-nav-group` closes. - `path`: on an active route change only - `close`: when another group is clicked - `none`: never, the group stays open — it stops reacting to the route altogether, so a matching route neither opens it on init nor on a later navigation |
| `groupItems` | `boolean` | `undefined` | Renders `c-sidebar-nav` as a nested group's item list rather than the top-level sidebar nav. |
| `navItems` | `INavData[]` | `[]` | Configuration object for sidebar-nav. |
| `role` | `string` | `'navigation'` | Default role for sidebar nav. |
| `variant` | `'tree'` | `undefined` | Set the sidebar nav variant to tree. |

The building blocks of a declared navigation — `c-nav-group`, `c-nav-group-items`, `c-nav-item`, `c-nav-title` and
`cNavLink` — are documented on the [Nav](../nav/) page.

### INavData
_interface_

```typescript
interface INavAttributes {
  [propName: string]: any;
}

interface INavWrapper {
  attributes: INavAttributes;
  element: string;
}

interface INavBadge {
  text: string;
  color: string;
  size?: string;
  class?: string;
}

interface INavLabel {
  class?: string;
  variant: string;
}

interface INavLinkProps {
  queryParams?: {[k: string]: any};
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '';
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: {[k: string]: any};
  routerLinkActiveOptions?: {exact: boolean};
  routerLinkActive?: string | string[];
}

interface INavData {
  name?: string;
  url?: string | any[];
  href?: string;
  icon?: string;
  iconComponent?: any;
  badge?: INavBadge;
  title?: boolean;
  children?: INavData[];
  variant?: string;
  attributes?: INavAttributes;
  divider?: boolean;
  class?: string;
  label?: INavLabel;
  wrapper?: INavWrapper;
  linkProps?: INavLinkProps;
}
```
