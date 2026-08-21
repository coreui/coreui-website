# Angular Navbar Component

> Documentation and examples for the Angular navbar - a powerful, responsive navigation header component. Includes support for branding, links, dropdowns, and more.

## Supported content

`c-navbar` comes with built-in support for a handful of sub-components. Choose from the following as needed:

- `cNavbarBrand` for your company, product, or project name.
- `c-navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `c-navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.
- Flex and spacing utilities for any form controls and actions.
- `c-navbar-text` for adding vertically centered strings of text.
- `cCollapse` for grouping and hiding navbar contents by a parent breakpoint.

## Examples

### Basic usage

Here's an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the `lg` (large) breakpoint.

### Brand

The `cNavbarBrand` can be applied to most elements, but an anchor works best, as some elements might require utility classes or custom styles.

Adding `cNavbarBrand` to the images will likely always require custom styles or utilities to properly size. Here are some examples to demonstrate.

### Nav

`c-navbar` navigation is based on `c-navbar-nav. Navigation in navbars will also grow to occupy as much horizontal space as possible to keep your navbar contents securely aligned.

You can avoid the list-based approach entirely if you prefere.

You can also use dropdowns in your navbar. Please note that `c-dropdown` component requires `variant="nav-item"`.

### Forms

Place various form controls and components within a navbar:

Immediate child elements of `c-navbar` use flex layout and will default to `justify-content: space-between`. Use additional flex utilities as needed to adjust this behavior.

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `cForm` element as the `cContainer` and save some HTML.

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

### Text

Navbars may contain bits of text with the help of `c-navbar-text`. It adjusts vertical alignment and horizontal spacing for strings of text.

Mix and match with other components and utilities as needed.

## Color schemes

Theming the navbar has never been easier thanks to the combination of theming classes and `background-color` utilities. Set `colorScheme="light"` for use with light background colors, or `colorScheme="dark"` for dark background colors. Then, customize with `.bg-*` utilities.

## Containers

Although it's not required, you can wrap a `c-navbar` in a `c-container` to center it on a page–though. Note that an inner container is still needed. Or you can add a container inside the `c-navbar` to only center the contents of a fixed or static top navbar.

Use any of the responsive containers to change how wide the content in your navbar is presented.

## Placement

Use our `placement` properly to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, or stickied to the top (scrolls with the page until it reaches the top, then stays there). Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `body`) to prevent overlap with other elements.

Also note that `.sticky-top` uses `position: sticky`, which [isn't fully supported in every browser](https://caniuse.com/css-sticky).

## Scrolling

Add `scroll` prop to a `c-navbar-nav` to enable vertical scrolling within the toggleable contents of a collapsed navbar.
By default, scrolling kicks in at `75vh` (75% of the viewport height), but you can override that with the local CSS custom property `--cui-navbar-height` or custom styles.
At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of `overflow` — when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of `auto`, which will crop some horizontal content.

The example navbar uses `scroll` with style="--cui-scroll-height: 80px;", with some extra margin utilities for optimum spacing.

## Responsive behavior

Navbars can use `cNavbarToggler`, `cCollapse`, and `expand="sm|md|lg|xl|xxl"` property to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `expand` boolean property on the `c-navbar`. For navbars that always collapse, don't add any property.

### Toggler

Navbar togglers are left-aligned by default, but should they follow a sibling element like a `cNavbarBrand`, they'll automatically be aligned to the far right. Reversing your markup will reverse the placement of the toggler. Below are examples of different toggle styles.

With no `cNavbarBrand` shown at the smallest breakpoint:

With a brand name shown on the left and toggler on the right:

With a toggler on the left and brand name on the right:

### External content

Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `c-navbar`.

Do not forget about users of assistive technologies. In this case you should move the focus programmatically to the opened container. Make sure that the toggler has also the `aria-controls` attribute, pointing to the `id` of the content container.

### Offcanvas

Transform your expanding and collapsing navbar into an [offcanvas](https://coreui.io/angular/docs/5.7/components/offcanvas/) drawer. You can extend both the offcanvas default styles and use our `expand="*"` prop to create a custom navigation sidebar.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the `expand="*"` prop entirely.

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `xl`, use `expand="xl"` property.

## Customizing

### CSS variables
Angular navbar uses local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
--cui-navbar-padding-y: #{$navbar-padding-y};
--cui-navbar-color: #{$navbar-light-color};
--cui-navbar-hover-color: #{$navbar-light-hover-color};
--cui-navbar-disabled-color: #{$navbar-light-disabled-color};
--cui-navbar-active-color: #{$navbar-light-active-color};
--cui-navbar-brand-padding-y: #{$navbar-brand-padding-y};
--cui-navbar-brand-margin-end: #{$navbar-brand-margin-end};
--cui-navbar-brand-font-size: #{$navbar-brand-font-size};
--cui-navbar-brand-color: #{$navbar-light-brand-color};
--cui-navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
--cui-navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
--cui-navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
--cui-navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
--cui-navbar-toggler-font-size: #{$navbar-toggler-font-size};
--cui-navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
--cui-navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
--cui-navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
--cui-navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
--cui-navbar-toggler-transition: #{$navbar-toggler-transition};
```

Some additional CSS variables are also present on `.navbar-nav`:

```css
--cui-nav-link-padding-x: 0;
--cui-nav-link-padding-y: #{$nav-link-padding-y};
--cui-nav-link-color: var(--cui-navbar-color);
--cui-nav-link-hover-color: var(--cui-navbar-hover-color);
--cui-nav-link-disabled-color: var(--cui-navbar-disabled-color);
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
$navbar-padding-y:                  $spacer * .5;
$navbar-padding-x:                  null;

$navbar-nav-link-padding-x:         .5rem;

$navbar-brand-font-size:            $font-size-lg;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5;
$navbar-brand-margin-end:           1rem;

$navbar-toggler-padding-y:          .25rem;
$navbar-toggler-padding-x:          .75rem;
$navbar-toggler-font-size:          $font-size-lg;
$navbar-toggler-border-radius:      $btn-border-radius;
$navbar-toggler-focus-width:        $btn-focus-width;
$navbar-toggler-transition:         box-shadow .15s ease-in-out;

$navbar-dark-color:                 $medium-emphasis-inverse;
$navbar-dark-hover-color:           $high-emphasis-inverse;
$navbar-dark-active-color:          $high-emphasis-inverse;
$navbar-dark-disabled-color:        $disabled-inverse;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>&lt;path stroke=' #{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/>&lt;/svg>");
$navbar-dark-toggler-border-color:  rgba($white, .1);

$navbar-light-color:                $medium-emphasis;
$navbar-light-hover-color:          $high-emphasis;
$navbar-light-active-color:         $high-emphasis;
$navbar-light-disabled-color:       $disabled;
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>&lt;path stroke=' #{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/>&lt;/svg>");
$navbar-light-toggler-border-color: rgba($black, .1);

$navbar-light-brand-color:                $navbar-light-active-color;
$navbar-light-brand-hover-color:          $navbar-light-active-color;
$navbar-dark-brand-color:                 $navbar-dark-active-color;
$navbar-dark-brand-hover-color:           $navbar-dark-active-color;
```

## API reference

### Navbar Module

```typescript
import { NavbarModule } from '@coreui/angular';

@NgModule({
    imports: [NavbarModule,]
})
export class AppModule() { }
```

### c-navbar
_component_

```jsx
import { NavbarComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `colorScheme` | `'dark' \| 'light'` | - | Add dark theme attribute. |
| `container` | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl' \| 'fluid'` | - | Defines optional container wrapping children elements. |
| `expand` | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | - | Defines the responsive breakpoint to determine when content collapses. |
| `placement` | `'fixed-top' \| 'fixed-bottom' \| 'sticky-top'` | - | Place component in non-static positions. |
| `role` | `string` | `'navigation'` | HTML element role. |

{/*    | `container` | Defines optional container wrapping children elements. | `boolean` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` \| `fluid` | |*/}

### c-navbar-nav
_component_

```jsx
import { NavbarNavComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `scroll` | `boolean` | `false` | Enable vertical scrolling of a collapsed navbar toggleable contents. |

### c-navbar-text
_component_

### cNavbarToggler
_directive_

```jsx
import { NavbarTogglerDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `ariaLabel` | `string` | `'Toggle navigation'` | Default aria-label attr for navbar-toggler |
| `cNavbarToggler` | `CollapseDirective` | `'button'` | Reference to navbar collapse element (via # template variable) |
| `type` | `string` | `'button'` | Default type for navbar-toggler |

### cNavbarBrand
_directive_
