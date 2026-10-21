# React ListGroup Component Styling

> Learn how to customize the React ListGroup component with CSS classes, variables, and Sass for flexible styling and seamless integration into your design.

## CSS variables

React List Group supports CSS variables for easy customization. These variables are set via Sass but allow direct overrides in your stylesheets or inline styles.

```scss
$list-group-tokens: defaults(
  (
    --cui-list-group-color: var(--cui-fg-body),
    --cui-list-group-bg: var(--cui-bg-body),
    --cui-list-group-border-color: var(--cui-border-color),
    --cui-list-group-border-width: var(--cui-border-width),
    --cui-list-group-border-radius: var(--cui-radius-5),
    --cui-list-group-item-padding-x: var(--cui-spacer),
    --cui-list-group-item-padding-y: var(--cui-spacer-3),
    --cui-list-group-action-color: var(--cui-fg-2),
    --cui-list-group-action-hover-color: var(--cui-fg-1),
    --cui-list-group-action-hover-bg: var(--cui-bg-1),
    --cui-list-group-action-active-color: var(--cui-fg-body),
    --cui-list-group-action-active-bg: var(--cui-bg-2),
    --cui-list-group-disabled-color: var(--cui-fg-3),
    --cui-list-group-disabled-bg: var(--cui-bg-body),
    --cui-list-group-active-color: var(--cui-primary-contrast),
    --cui-list-group-active-bg: var(--cui-primary-bg),
    --cui-list-group-active-border-color: var(--cui-primary-bg),
  ),
  $list-group-tokens
);
```

### How to use CSS variables

```jsx
const customVars = {
  '--cui-list-group-color': '#ffe484',
  '--cui-list-group-bg': '#efefef',
}

return <CListGroup style={customVars}>{/* List Group content */}</CListGroup>
```

## Sass loops

_Deprecated in 6.0.0._

Loop that generates the deprecated colour classes for `.list-group-item`s. Each class sets the same generic `--cui-theme-*` tokens that `.theme-{color}` sets, which is why the two spellings render identically — the item, its `.active` state and `.list-group-item-action` all read those tokens directly. The loop lives in the opt-in [`coreui-legacy.css`](https://coreui.io/react/docs/customize/optimize/#v5-compatibility-css), not in `coreui.css`.

```scss
// List group contextual variants
//
// Add modifier classes to change text and background color on individual items.
@each $state in map.keys($theme-colors) {
  .list-group-item-#{$state} {
    @include theme-tokens($state);
  }
}
```
