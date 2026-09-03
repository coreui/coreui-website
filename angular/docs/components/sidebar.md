# Angular Sidebar Component

> Angular Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Sidebar comes with built-in support for branding, navigation, and more.

## Supported content

Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

- `c-sidebar-header` for optional header.
- `c-sidebar-brand` for your company, product, or project name.
- `c-sidebar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `c-sidebar-footer` for optional footer.
- `c-sidebar-toggler` for use with our minimizer.

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
it, which is what makes `routerLinkActive` reveal the current route on load.

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

### Custom group indicator

_Added in 5.7.24._

`c-nav-group` renders the default indicator through the `.nav-group-toggle` styles. To replace it, pass a template to
`togglerTemplate` — it receives the visible state, so the icon can follow the group.

### Controlled navigation group

_Added in 5.7.24._

A group toggles itself by default. Bind `visible` two-way to drive it from the parent, or listen to `visibleChange`
alone to keep the decision — the group follows whatever the parent sets, so a section can stay open even when the
user clicks to collapse it.

## Customizing

### CSS variables
Angular sidebars use local CSS variables on `.sidebar` and `.sidebar-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass.

```scss
--cui-sidebar-width: #{$sidebar-width};
--cui-sidebar-bg: #{$sidebar-bg};
--cui-sidebar-padding-x: #{$sidebar-padding-x};
--cui-sidebar-padding-y: #{$sidebar-padding-y};
--cui-sidebar-color: #{$sidebar-color};
--cui-sidebar-border-width: #{$sidebar-border-width};
--cui-sidebar-border-color: #{$sidebar-border-color};
--cui-sidebar-brand-color: #{$sidebar-brand-color};
--cui-sidebar-brand-height: #{$sidebar-brand-height};
--cui-sidebar-brand-bg: #{$sidebar-brand-bg};
--cui-sidebar-header-height: #{$sidebar-header-height};
--cui-sidebar-header-bg: #{$sidebar-header-bg};
--cui-sidebar-header-padding-x: #{$sidebar-header-padding-x};
--cui-sidebar-header-padding-y: #{$sidebar-header-padding-y};
--cui-sidebar-footer-bg: #{$sidebar-footer-bg};
--cui-sidebar-footer-height: #{$sidebar-footer-height};
--cui-sidebar-footer-padding-x: #{$sidebar-footer-padding-x};
--cui-sidebar-footer-padding-y: #{$sidebar-footer-padding-y};
--cui-sidebar-toggler-bg: #{$sidebar-toggler-bg};
--cui-sidebar-toggler-height: #{$sidebar-toggler-height};
--cui-sidebar-toggler-indicator: #{escape-svg($sidebar-toggler-indicator-icon)};
--cui-sidebar-toggler-indicator-width: #{$sidebar-toggler-indicator-width};
--cui-sidebar-toggler-indicator-height: #{$sidebar-toggler-indicator-height};
--cui-sidebar-toggler-hover-bg: #{$sidebar-toggler-hover-bg};
--cui-sidebar-toggler-indicator-hover: #{escape-svg($sidebar-toggler-indicator-hover-icon)}
--cui-sidebar-narrow-width: #{$sidebar-narrow-width};
--cui-sidebar-nav-title-padding-x: #{$sidebar-nav-title-padding-x};
--cui-sidebar-nav-title-padding-y: #{$sidebar-nav-title-padding-y};
--cui-sidebar-nav-title-margin-top: #{$sidebar-nav-title-margin-top};
--cui-sidebar-nav-title-color: #{$sidebar-nav-title-color};
--cui-sidebar-nav-link-padding-x: #{$sidebar-nav-link-padding-x};
--cui-sidebar-nav-link-padding-y: #{$sidebar-nav-link-padding-y};
--cui-sidebar-nav-link-color: #{$sidebar-nav-link-color};
--cui-sidebar-nav-link-bg: #{$sidebar-nav-link-bg};
--cui-sidebar-nav-link-border-color: #{$sidebar-nav-link-border-color};
--cui-sidebar-nav-link-border: #{$sidebar-nav-link-border-width} solid var(--cui-sidebar-nav-link-border-color);
--cui-sidebar-nav-link-border-radius: #{$sidebar-nav-link-border-radius};
--cui-sidebar-nav-link-active-color: #{$sidebar-nav-link-active-color};
--cui-sidebar-nav-link-active-bg: #{$sidebar-nav-link-active-bg};
--cui-sidebar-nav-link-active-icon-color: #{$sidebar-nav-link-active-icon-color};
--cui-sidebar-nav-link-disabled-color: #{$sidebar-nav-link-disabled-color};
--cui-sidebar-nav-link-disabled-icon-color: #{$sidebar-nav-link-disabled-icon-color};
--cui-sidebar-nav-link-hover-color: #{$sidebar-nav-link-hover-color};
--cui-sidebar-nav-link-hover-bg: #{$sidebar-nav-link-hover-bg};
--cui-sidebar-nav-link-hover-icon-color: #{$sidebar-nav-link-hover-icon-color};
--cui-sidebar-nav-icon-width: #{$sidebar-nav-icon-width};
--cui-sidebar-nav-icon-height: #{$sidebar-nav-icon-height};
--cui-sidebar-nav-icon-font-size: #{$sidebar-nav-icon-font-size};
--cui-sidebar-nav-link-icon-color: #{$sidebar-nav-link-icon-color};
--cui-sidebar-nav-group-bg: #{$sidebar-nav-group-bg};
--cui-sidebar-nav-group-items-padding-y: #{$sidebar-nav-group-items-padding-y};
--cui-sidebar-nav-group-items-padding-x: #{$sidebar-nav-group-items-padding-x};
--cui-sidebar-nav-group-indicator: #{escape-svg($sidebar-nav-group-indicator-icon)};
--cui-sidebar-nav-group-indicator-hover: #{escape-svg($sidebar-nav-group-indicator-hover-icon)};
--cui-sidebar-nav-group-toggle-show-color: #{$sidebar-nav-group-toggle-show-color};
```

Some additional CSS variables are also present on `.sidebar-backdrop`:

```css
--cui-backdrop-zindex: #{$zindex-sidebar-backdrop};
--cui-backdrop-bg: #{$sidebar-backdrop-bg};
--cui-backdrop-opacity: #{$sidebar-backdrop-opacity};
```

<br />

```css
--cui-mobile-breakpoint: #{$mobile-breakpoint};
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

### SASS variables

```scss
$sidebar-width:                            16rem;
$sidebar-widths: (
  sm: 12rem,
  lg: 20rem,
  xl: 24rem
);
$sidebar-padding-y:                        0;
$sidebar-padding-x:                        0;
$sidebar-color:                            $high-emphasis-inverse;
$sidebar-bg:                               $gray-base;
$sidebar-border-width:                     0;
$sidebar-border-color:                     transparent;
$sidebar-transition:                       margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s;

$sidebar-brand-height:                     4rem;
$sidebar-brand-color:                      $high-emphasis-inverse;
$sidebar-brand-bg:                         rgba($black, .2);

$sidebar-header-height:                    4rem;
$sidebar-header-padding-y:                 .75rem;
$sidebar-header-padding-x:                 1rem;
$sidebar-header-bg:                        rgba($black, .2);
$sidebar-header-height-transition:         height .15s, padding .15s;

$sidebar-narrow-width:                     4rem;

$sidebar-backdrop-bg:                      $black;
$sidebar-backdrop-opacity:                 .5;

$sidebar-nav-title-padding-y:              .75rem;
$sidebar-nav-title-padding-x:              1rem;
$sidebar-nav-title-margin-top:             1rem;
$sidebar-nav-title-color:                  $medium-emphasis-inverse;
$sidebar-nav-title-transition:             height .15s, margin .15s;

$sidebar-nav-link-padding-y:               .8445rem;
$sidebar-nav-link-padding-x:               1rem;
$sidebar-nav-link-color:                   $medium-emphasis-inverse;
$sidebar-nav-link-bg:                      transparent;
$sidebar-nav-link-border-width:            0;
$sidebar-nav-link-border-color:            transparent;
$sidebar-nav-link-border-radius:           0;
$sidebar-nav-link-transition:              background .15s ease, color .15s ease;
$sidebar-nav-link-icon-color:              $medium-emphasis-inverse;

$sidebar-nav-link-hover-color:             $high-emphasis-inverse;
$sidebar-nav-link-hover-bg:                rgba($white, .05);
$sidebar-nav-link-hover-icon-color:        $high-emphasis-inverse;

$sidebar-nav-link-active-color:            $high-emphasis-inverse;
$sidebar-nav-link-active-bg:               rgba($white, .05);
$sidebar-nav-link-active-icon-color:       $high-emphasis-inverse;

$sidebar-nav-link-disabled-color:          $disabled-inverse;
$sidebar-nav-link-disabled-icon-color:     $sidebar-nav-link-icon-color;

$sidebar-nav-icon-width:                   4rem;
$sidebar-nav-icon-height:                  1.25rem;
$sidebar-nav-icon-font-size:               $sidebar-nav-icon-height;

$sidebar-nav-group-bg:                     rgba(0, 0, 0, .2);
$sidebar-nav-group-transition:             background .15s ease-in-out;
$sidebar-nav-group-toggle-show-color:      $sidebar-nav-link-color;

$sidebar-nav-group-items-padding-y:        0;
$sidebar-nav-group-items-padding-x:        0;
$sidebar-nav-group-items-transition:       height .15s ease;

$sidebar-nav-group-indicator-color:        $medium-emphasis-inverse;
$sidebar-nav-group-indicator-icon:         url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-color}'>&lt;path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>&lt;/svg>");
$sidebar-nav-group-indicator-hover-color:  $sidebar-nav-link-hover-color;
$sidebar-nav-group-indicator-hover-icon:   url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-nav-group-indicator-hover-color}'>&lt;path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>&lt;/svg>");
$sidebar-nav-group-indicator-transition:   transform .15s;

$sidebar-footer-height:                    auto;
$sidebar-footer-padding-y:                 .75rem;
$sidebar-footer-padding-x:                 1rem;
$sidebar-footer-bg:                        rgba($black, .2);
$sidebar-footer-height-transition:         height .15s, padding .15s;

$sidebar-toggler-height:                   3rem;
$sidebar-toggler-bg:                       rgba($black, .2);
$sidebar-toggler-transition:               transform .15s;

$sidebar-toggler-indicator-width:          4rem;
$sidebar-toggler-indicator-height:         3rem;
$sidebar-toggler-indicator-color:          $gray-600;
$sidebar-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'&gt;%3Cpath fill='#{$sidebar-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/&gt;&lt;/svg&gt;");
$sidebar-toggler-hover-bg:                 rgba(0, 0, 0, .3);

$sidebar-toggler-indicator-hover-color:    $sidebar-nav-link-hover-color;
$sidebar-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'&gt;%3Cpath fill='#{$sidebar-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/&gt;&lt;/svg&gt;");

$sidebar-light-color:    $body-color;
$sidebar-light-bg:       $white;
$sidebar-light-border-width:                     0;
$sidebar-light-border-color:                     transparent;

$sidebar-light-brand-color:  $white;
$sidebar-light-brand-bg:     $primary;

$sidebar-light-header-bg: rgba($black, .2);

$sidebar-light-nav-title-color:                  $medium-emphasis;

$sidebar-light-nav-link-color:                   $medium-emphasis;
$sidebar-light-nav-link-bg:                      transparent;
$sidebar-light-nav-link-icon-color:              $medium-emphasis;

$sidebar-light-nav-link-hover-color:             $high-emphasis;
$sidebar-light-nav-link-hover-bg:                theme-color("primary");
$sidebar-light-nav-link-hover-icon-color:        $high-emphasis;

$sidebar-light-nav-link-active-color:            $high-emphasis;
$sidebar-light-nav-link-active-bg:               rgba($white, .05);
$sidebar-light-nav-link-active-icon-color:       $high-emphasis;

$sidebar-light-nav-link-disabled-color:          $disabled;
$sidebar-light-nav-link-disabled-icon-color:     $sidebar-light-nav-link-icon-color;

$sidebar-light-nav-group-bg:                     rgba(0, 0, 0, .05);
$sidebar-light-nav-group-toggle-show-color:      $sidebar-light-nav-link-color;

$sidebar-light-nav-group-indicator-color:        $medium-emphasis;
$sidebar-light-nav-group-indicator-icon:         url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-light-nav-group-indicator-color}'>&lt;path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>&lt;/svg>");
$sidebar-light-nav-group-indicator-hover-color:  $sidebar-light-nav-link-hover-color;
$sidebar-light-nav-group-indicator-hover-icon:   url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$sidebar-light-nav-group-indicator-hover-color}'>&lt;path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/>&lt;/svg>");

$sidebar-light-footer-bg:                        rgba($black, .1);

$sidebar-light-toggler-bg:                       rgba($black, .1);
$sidebar-light-toggler-hover-bg:                 rgba(0, 0, 0, .2);
$sidebar-light-toggler-indicator-color:          $medium-emphasis;
$sidebar-light-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'&gt;%3Cpath fill='#{$sidebar-light-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/&gt;&lt;/svg&gt;");
$sidebar-light-toggler-indicator-hover-color:    $sidebar-light-nav-link-hover-color;
$sidebar-light-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'&gt;%3Cpath fill='#{$sidebar-light-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/&gt;&lt;/svg&gt;");
```

<br />

```scss
$mobile-breakpoint: md;
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
| `dropdownMode` | `'path' \| 'none' \| 'close'` | `'path'` | Determines when an inactive `c-sidebar-nav-group` closes. - `path`: on an active route change only - `close`: when another group is clicked - `none`: never, the group stays open |
| `groupItems` | `boolean` | `undefined` | Renders `c-sidebar-nav` as a nested group's item list rather than the top-level sidebar nav. |
| `navItems` | `INavData[]` | `[]` | Configuration object for sidebar-nav. |
| `role` | `string` | `'navigation'` | Default role for sidebar nav. |

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
