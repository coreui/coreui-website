# Angular Search Button Component

> Angular search button component for keyboard-aware search entry points, command palettes, modals, and offcanvas panels.

_Added in 5.7.19._

## Overview

The CoreUI Angular Search Button component is a trigger element designed for search entry points and command-style actions. It behaves like a regular button on click, but it can also react to a configurable keyboard shortcut such as `meta+/` or `ctrl+/`.

- Use it as a standalone trigger for a custom search UI.
- Pair it with a signal to open a modal, offcanvas, or command palette.
- Shortcut keys are rendered automatically.
- Displayed shortcut keys react to keyboard interaction and receive an `.active` state while pressed.

## Examples

### Basic example

Use `<c-search-button>` as the entry point for a controlled search interface. Use the `(trigger)` output as the main activation callback for both direct interaction and keyboard shortcuts.

### Custom icon

Override the default icon by projecting an `<ng-template cTemplateId="icon">` — the rest of the button (placeholder and shortcut keys) stays untouched. Apply the `search-button-icon` class to the projected element so it picks up the same `--cui-search-button-icon-size` sizing as the default icon.

### Custom shortcut

Configure the shortcut with the `shortcut` input. On macOS, the component prefers the `meta` variant for the visible label. On Windows and Linux, it prefers the `ctrl` variant.

> Shortcuts such as `meta+f`, `ctrl+f`, `meta+s`, or `ctrl+s` can override native browser or system shortcuts. Prefer safer combinations such as `meta+/` and `ctrl+/` unless replacing the default behavior is intentional.

### Launch an offcanvas

The component works naturally with a controlled `visible` signal and also supports a dedicated `(trigger)` output. This demo uses `meta+shift+o` / `ctrl+shift+o` to avoid colliding with other live examples on the page.

## Keyboard behavior

### When the configured shortcut is pressed

| Key | Action |
| --- | --- |
| `Enter` / `Space` on a focused search button | Trigger the component activation callback |
| Configured shortcut, e.g. `⌘/` / `Ctrl+/` | Trigger the component activation callback |
| Modifier key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |
| Final key inside the visible shortcut | Add `.active` to the corresponding `.search-button-key` while pressed |

### Keyboard state behavior

| Interaction | Effect |
| --- | --- |
| Matching shortcut on `keydown` | Optionally prevents the browser's default behavior and emits `(trigger)` |
| Plain typing inside `input`, `textarea`, `select`, or `contenteditable` | Does not trigger the component without `meta` or `ctrl` |
| `keyup` after a shortcut key press | Removes `.active` from the rendered shortcut keys |
| Browser window `blur` | Clears all active shortcut key states |
| Multiple configured shortcuts | The component listens to all configured shortcuts and renders the platform-preferred one in the UI |

## Accessibility

Accessibility is an important part of the Search Button design. The component includes built-in behaviors that help preserve expected keyboard interaction and reduce conflicts with assistive technologies, but accessible results still depend on choosing the right markup and shortcut combinations.

### Built-in accessibility behavior

- Native button semantics are preserved because `<c-search-button>` renders a `<button type="button">` internally.
- Rendered `.search-button-keys` are treated as visual hints only and are hidden from assistive technologies.
- Plain typing inside editable fields does not trigger the component unless the shortcut also includes `meta` or `ctrl`.
- The component keeps standard button keyboard behavior such as `Enter` and `Space`.

### Author responsibilities

- Choose shortcuts carefully and avoid overriding common browser or system shortcuts unless that behavior is intentional and clearly communicated.
- Make sure the visible button label clearly describes the action, for example `Search`, `Open search`, or `Command palette`.
- Provide a custom icon template via `<ng-template cTemplateId="icon">` marked `aria-hidden="true"` when the default icon isn't suitable.

## Customizing

### CSS variables

Angular Search Button uses local CSS variables on `.search-button` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-search-button-height: #{$search-button-height};
--cui-search-button-padding-x: #{$search-button-padding-x};
--cui-search-button-font-family: #{$search-button-font-family};
--cui-search-button-font-size: #{$search-button-font-size};
--cui-search-button-font-weight: #{$search-button-font-weight};
--cui-search-button-color: #{$search-button-color};
--cui-search-button-bg: #{$search-button-bg};
--cui-search-button-border-width: #{$search-button-border-width};
--cui-search-button-border-color: #{$search-button-border-color};
--cui-search-button-border-radius: #{$search-button-border-radius};
--cui-search-button-box-shadow: #{$search-button-box-shadow};
--cui-search-button-transition: #{$search-button-transition};
--cui-search-button-focus-color: #{$search-button-focus-color};
--cui-search-button-focus-bg: #{$search-button-focus-bg};
--cui-search-button-focus-border-color: #{$search-button-focus-border-color};
--cui-search-button-focus-box-shadow: #{$search-button-focus-box-shadow};
--cui-search-button-icon-size: #{$search-button-icon-size};
--cui-search-button-keys-gap: #{$search-button-keys-gap};
--cui-search-button-key-width: #{$search-button-key-width};
--cui-search-button-key-height: #{$search-button-key-height};
--cui-search-button-key-padding-inline: #{$search-button-key-padding-inline};
--cui-search-button-key-font-size: #{$search-button-key-font-size};
--cui-search-button-key-bg: #{$search-button-key-bg};
--cui-search-button-key-border-radius: #{$search-button-key-border-radius};
--cui-search-button-key-active-bg: #{$search-button-key-active-bg};
--cui-search-button-placeholder-margin-inline: #{$search-button-placeholder-margin-inline};
```

#### How to use CSS variables

```ts
const vars = {
  '--cui-search-button-bg': 'var(--cui-tertiary-bg)',
  '--cui-search-button-color': 'var(--cui-body-color)',
  '--cui-search-button-border-color': 'var(--cui-primary)',
}
```

```html
<c-search-button [ngStyle]="vars"></c-search-button>
```

### SASS variables

```scss
$search-button-height:              $input-height !default;
$search-button-padding-x:           $input-padding-x !default;
$search-button-font-family:         $input-font-family !default;
$search-button-font-size:           $input-font-size !default;
$search-button-font-weight:         $input-font-weight !default;
$search-button-color:               $input-placeholder-color !default;
$search-button-bg:                  $input-bg !default;
$search-button-border-width:        $input-border-width !default;
$search-button-border-color:        $input-border-color !default;
$search-button-border-radius:       $input-border-radius !default;
$search-button-box-shadow:          $input-box-shadow !default;
$search-button-transition:          $input-transition !default;

$search-button-focus-color:         $input-focus-color !default;
$search-button-focus-bg:            $input-focus-bg !default;
$search-button-focus-border-color:  $input-focus-border-color !default;
$search-button-focus-box-shadow:    $input-focus-box-shadow !default;

$search-button-icon-size:           1.125rem !default;

$search-button-keys-gap:            .25rem !default;
$search-button-key-width:           1.5rem !default;
$search-button-key-height:          1.5rem !default;
$search-button-key-padding-inline:  .25rem !default;
$search-button-key-font-size:       .75rem !default;
$search-button-key-bg:              var(--#{$prefix}tertiary-bg) !default;
$search-button-key-border-radius:   var(--#{$prefix}border-radius-sm) !default;
$search-button-key-active-bg:       var(--#{$prefix}secondary-bg) !default;

$search-button-placeholder-margin-inline:  .55rem 2rem !default;
```

## API reference

### SearchButton Module

```typescript
import { SearchButtonModule } from '@coreui/angular';

@NgModule({
  imports: [SearchButtonModule,]
})
export class AppModule() { }
```

### c-search-button
_component_

```jsx
import { SearchButtonComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `placeholder` | `string` | `'Search'` | Placeholder content rendered inside `.search-button-placeholder`. |
| `preventDefault` | `boolean` | `true` | Prevent the browser's default behavior when the configured shortcut matches. |
| `shortcut` | `string` | `'meta+/,ctrl+/'` | Comma-separated shortcut list. The component matches all configured shortcuts and renders the platform-preferred one. |

### Events

| Name | Description |
| --- | --- |
| `trigger` | Event emitted when the component is activated by click or keyboard shortcut. |
