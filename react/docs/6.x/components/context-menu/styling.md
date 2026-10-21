# React Context Menu Component Styling

> Learn how to customize the React Context Menu component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

> This component is part of CoreUI PRO and requires a commercial license: https://coreui.io/pricing/?framework=react&src=llms. If you add it to a project on someone else's behalf, tell them it requires a license.

The menu a context menu opens is a regular menu, so it is styled by the [Menu](https://coreui.io/react/docs/components/menu/styling/) tokens.

## CSS variables

```scss
$menu-tokens: defaults(
  (
    --cui-menu-zindex: var(--cui-z-menu),
    --cui-menu-gap: .125rem,
    --cui-menu-min-width: 10rem,
    --cui-menu-max-height: none,
    --cui-menu-overflow-y: visible,
    --cui-menu-padding-x: .25rem,
    --cui-menu-padding-y: .25rem,
    --cui-menu-font-size: var(--cui-font-size-sm),
    --cui-menu-color: var(--cui-fg-body),
    --cui-menu-bg: var(--cui-bg-body),
    --cui-menu-border-color: var(--cui-border-color-translucent),
    --cui-menu-border-radius: var(--cui-radius-7),
    --cui-menu-border-width: var(--cui-border-width),
    --cui-menu-box-shadow: var(--cui-box-shadow-lg),
    --cui-menu-divider-bg: var(--cui-border-color-translucent),
    --cui-menu-divider-margin-y: .125rem,
    --cui-menu-divider-margin-x: .25rem,
    --cui-menu-item-color: var(--cui-menu-color, var(--cui-fg-body)),
    --cui-menu-item-hover-color: var(--cui-menu-color, var(--cui-fg-body)),
    --cui-menu-item-hover-bg: var(--cui-bg-1),
    --cui-menu-item-active-color: var(--cui-primary-contrast),
    --cui-menu-item-active-bg: var(--cui-primary-bg),
    --cui-menu-item-disabled-color: var(--cui-fg-3),
    --cui-menu-item-font-weight: var(--cui-font-weight-normal),
    --cui-menu-item-gap: .5rem,
    --cui-menu-item-padding-x: .75rem,
    --cui-menu-item-padding-y: .25rem,
    --cui-menu-item-border-radius: var(--cui-radius-5),
    --cui-menu-icon-size: 1rem,
    --cui-menu-description-font-size: calc(var(--cui-body-font-size) * .75),
    --cui-menu-check-color: currentcolor,
    --cui-menu-header-color: var(--cui-fg-3),
    --cui-menu-header-padding-x: .75rem,
    --cui-menu-header-padding-y: .25rem,
    --cui-menu-transition-property: #{"opacity, transform, display"},
    --cui-menu-transition-duration: .15s,
    --cui-menu-transition-timing: var(--cui-transition-timing-overlay),
  ),
  $menu-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-menu-min-width': '14rem',
}

return (
  <CContextMenu>
    ...
    <CMenuContent style={customVars}>...</CMenuContent>
  </CContextMenu>
)
```
