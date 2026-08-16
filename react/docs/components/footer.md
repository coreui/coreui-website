# React Footer Component

> React footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.

## Example

```html
import { CFooter, CLink } from '@coreui/react'

export const FooterExample = () => (
  <CFooter>
    <div>
      <CLink href="https://coreui.io">CoreUI</CLink>
      <span>&copy; 2026 creativeLabs.</span>
    </div>
    <div>
      <span>Powered by</span>
      <CLink href="https://coreui.io">CoreUI</CLink>
    </div>
  </CFooter>
)
```

## Customizing

### CSS variables

React footers use local CSS variables on `.footer` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-footer-min-height: #{$footer-min-height};
--cui-footer-padding-x: #{$footer-padding-x};
--cui-footer-padding-y: #{$footer-padding-y};
--cui-footer-color: #{$footer-color};
--cui-footer-bg: #{$footer-bg};
--cui-footer-border-color: #{$footer-border-color};
--cui-footer-border: #{$footer-border-width} solid var(--cui-footer-border-color);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-footer-color': '#333',
  '--cui-footer-bg': '#f8f9fa',
}

return <CFooter style={customVars} />
```

### SASS variables

```scss
$footer-min-height:    3rem !default;
$footer-padding-y:     $spacer * .5 !default;
$footer-padding-x:     $spacer !default;
$footer-bg:            var(--cui-tertiary-bg) !default;
$footer-color:         var(--cui-body-color) !default;
$footer-border-width:  var(--cui-border-width) !default;
$footer-border-color:  var(--cui-border-color) !default;
```

## API

### CFooter

```jsx
import { CFooter } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `position` | `"fixed" \| "sticky"` | - | Place footer in non-static positions. |
