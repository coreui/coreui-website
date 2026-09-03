# Angular Dropdown Component

> Angular Dropdown component allows you to toggle contextual overlays for displaying lists, links, and more html elements.

## Overview
Dropdowns are toggleable, contextual overlays for displaying lists of links and more.

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning
and viewport detection. Popper.js isn't used to position dropdowns in navbars though as dynamic positioning isn't
required.

## Examples
Bind the dropdown toggle and the dropdown menu inside `c-dropdown`, or different element that declares `position: relative;`. Dropdowns can be triggered from `a` or `button` elements to better fit your possible requirements.

### Single button
Here's how you can put them to work with either `button` elements:

And with `a` elements:

The best part is you can do this with any button variant, too:

### Split button

Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the
addition of boolean prop `split` for proper spacing around the dropdown caret.

We use this extra class to reduce the horizontal `padding` on either side of the caret by 25% and remove the
`margin-left` that's attached for normal button dropdowns. Those additional changes hold the caret centered in the
split button and implement a more properly sized hit area next to the main button.

### Sizing

Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.

### Dark dropdowns
Opt into darker dropdowns to match a dark navbar or custom style by set `dark` property. No changes are required to the dropdown items.

And putting it to use in a navbar:

## Directions

> RTL  Directions are mirrored when using CoreUI in RTL, meaning `dropstart` will appear on the right side.

### Centered

Trigger dropdown menus centered below the toggle by adding `direction="center"` to the `c-dropdown` component.

### Dropup

Trigger dropdown menus above elements by adding `direction="dropup"` to the `c-dropdown` component.

### Dropup Centered

Trigger dropup menu centered above the toggle by adding `direction="dropup-center"` to the `c-dropdown`component.

### Dropright

Trigger dropdown menus at the right of the elements by adding `direction="dropend"` to the `c-dropdown`component.

### Dropleft

Trigger dropdown menus at the left of the elements by adding `direction="dropstart"` to the `c-dropdown`component.

## Menu items

Historically dropdown menu contents had to be links, but that's no longer the case with v4. Now you can optionally use `button` elements in your dropdowns instead of just `a`.

You can also create non-interactive dropdown items with `cDropdownItemText`.

### Active
Set boolean property `active` to style item as active.

### Disabled
Add `disabled` boolean property to items in the dropdown to style them as disabled.

## Menu alignment

By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent, which is what `alignment="start"` sets explicitly. Add `alignment="end"` to right align the dropdown menu.

> Heads up! Dropdowns are positioned thanks to Popper.js.

### Responsive alignment

If you use responsive alignment, dynamic positioning is disabled — the classes place the menu themselves. Set `variant="btn-group"` so that the dropdown wraps just the toggle; with the default variant it is a full-width block, and the menu aligns to the edge of the container instead of the button.

To align **right** the dropdown menu with the given breakpoint or larger, bind `[alignment]="{ lg: 'end' }"`, replacing `lg` with any of `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

To align **left** the dropdown menu with the given breakpoint or larger, bind `[alignment]="{ xs: 'end', lg: 'start' }"`. Every entry of the map adds its own class, so this one is right aligned by default and left aligned from `lg` up.

## Menu content

### Headers

Add a header to label sections of actions in any dropdown menu.

In the following example we use div without `cDropdownMenu` to show dropdown menu content.

### Dividers

Separate groups of related menu items with a divider.

In the following example we use div without `cDropdownMenu` to show dropdown menu content.

### Text

Place any freeform text within a dropdown menu with text. Note that you'll likely need additional sizing styles to constrain the menu width.

### Forms

Put a form within a dropdown menu, or make it into a dropdown menu.

## API reference

### Dropdown Module

```typescript
import { DropdownModule } from '@coreui/angular';

@NgModule({
    imports: [DropdownModule,]
})
export class AppModule() { }
```

### c-dropdown
_component_

```jsx
import { DropdownComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `DropdownAlignment` | - | Set alignment of dropdown menu. |
| `autoClose` | `boolean \| 'inside' \| 'outside'` | `true` | Configure the auto close behavior: - `true` closes the dropdown on a click inside or outside the menu, - `false` only on the toggle button or an explicit hide/toggle call and not on the `Esc` key, - `inside` only on a click inside the menu, - `outside` only on a click outside it. |
| `dark` | `boolean` | `false` | Sets a darker color scheme. If the colorScheme is set to 'dark', the dark theme will be applied. |
| `direction` | `'center' \| 'dropup' \| 'dropup-center' \| 'dropend' \| 'dropstart'` | - | Sets a specified  direction and location of the dropdown menu. |
| `placement` | `Placement` | `'bottom-start'` | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. |
| `popper` | `boolean` | `true` | If you want to disable dynamic positioning set this property to `false`. |
| `popperOptions` | `Partial<Options>` | `{}` | Optional Popper.js options object; the `placement` prop takes precedence over the placement set here. See https://popper.js.org/docs/v2/constructors/#options |
| `variant` | `'btn-group' \| 'dropdown' \| 'input-group' \| 'nav-item'` | `'dropdown'` | Set the dropdown variant to a btn-group, dropdown, input-group, and nav-item. |
| `visible` | `boolean` | `false` | Toggle the visibility of dropdown menu component. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | Event emitted on `visible` change. |

### cDropdownClose
_directive_

```jsx
import { DropdownCloseDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Disables a dropdown-close directive. |
| `dropdownComponent` | `DropdownComponent` | - | The dropdown component instance this cDropdownClose belongs to. |
| `tabIndex` | `string \| number \| null` | `null` | Tab index of the dropdown-close element. |

### cDropdownDivider
_directive_

```jsx
import { DropdownDividerDirective } from '@coreui/angular'
```

### cDropdownHeader
_directive_

```jsx
import { DropdownHeaderDirective } from '@coreui/angular'
```

### cDropdownItem
_directive_

```jsx
import { DropdownItemDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `undefined` | Set active state to a dropdown-item. |
| `autoClose` | `boolean` | `true` | Configure dropdown-item close dropdown behavior. |
| `disabled` | `boolean` | `false` | Disables a dropdown-item. |
| `role` | `string` | `'list-item'` | Default role for dropdown-item. |
| `tabIndex` | `string \| number \| null` | `'0'` | Tab index of the dropdown-item. |

### cDropdownItemPlain
_directive_

```jsx
import { DropdownItemPlainDirective } from '@coreui/angular'
```

### cDropdownMenu
_directive_

```jsx
import { DropdownMenuDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `DropdownAlignment` | - | Set alignment of dropdown menu. |
| `dark` | `boolean` | `false` | Sets a darker color scheme. If the colorScheme is set to 'dark', the dark theme will be applied. |
| `visible` | `boolean` | `false` | Toggle the visibility of dropdown menu component. |

### cDropdownToggle
_directive_

```jsx
import { DropdownToggleDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `caret` | `boolean` | `true` | Enables pseudo-element caret on toggler. |
| `disabled` | `boolean` | `false` | Disables the toggler. |
| `dropdownComponent` | `DropdownComponent` | `undefined` | Reference to dropdown component. |
| `split` | `boolean` | `false` | Create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` class for proper spacing around the dropdown caret. |
