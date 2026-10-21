# React Header Component

> Documentation and examples for the Header powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.

## How it works

Here's what you need to know before getting started with the header component:

- Headers and their contents are fluid by default. Use the `container` prop to limit their horizontal width.
- Use our [spacing](https://coreui.io/react/docs/utilities/margin/) and [flex](https://coreui.io/react/docs/utilities/flex/) utility classes for controlling spacing and alignment within headers.
- Headers are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our `<CCollapse>` component.
- Headers are hidden by default when printing. Force them to be printed by adding `className="d-print"` to the `<CHeader>`. See the [display](https://coreui.io/react/docs/utilities/display/) utility class.
- `<CHeader>` renders a generic `<div>` element, so ensure accessibility by adding `role="navigation"` to every header to explicitly identify it as a landmark region for users of assistive technologies.

Read on for an example and list of supported sub-components.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CHeaderBrand>` for your company, product, or project name.
- `<CHeaderNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CHeaderToggler>` for use with our collapse plugin and other [navigation toggling](https://coreui.io/react/docs/components/collapse/) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `<CHeaderText>` for adding vertically centered strings of text.
- `<CCollapse className="header-collapse">` for grouping and hiding header contents by a parent breakpoint.

Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the `lg` (large) breakpoint.

## Basic usage

```jsx
const [visible, setVisible] = useState(false)
return (
  <>
    <CHeader>
      <CContainer fluid>
        <CHeaderBrand href="#">Header</CHeaderBrand>
        <CHeaderToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="header-collapse" show={visible}>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle theme="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          <CForm className="d-flex">
            <CFormInput className="me-3" type="search" placeholder="Search" />
            <CButton type="submit" theme="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CHeader>
  </>
)
```

### Text

Headers may contain bits of text with the help of `<CHeaderText>`. This component adjusts vertical alignment and horizontal spacing for strings of text.

```html
import { CHeader, CHeaderText } from '@coreui/react'

export const HeaderTextExample = () => (
  <CHeader>
    <CHeaderText>Header text with an inline element</CHeaderText>
  </CHeader>
)
```

## Placement

Use the `position` property to place the header in a non-static position: `"sticky"` renders `.sticky-top` and `"fixed"` renders `.fixed-top`. For the bottom variants, or for a responsive one like `.sticky-md-top`, pass a [position utility](https://coreui.io/react/docs/utilities/position/) through `className` instead.

Fixed headers use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

```html
import { CHeader, CHeaderBrand } from '@coreui/react'

export const HeaderPlacementExample = () => {
  return (
    <CHeader position="sticky">
      <CHeaderBrand href="#">Sticky top</CHeaderBrand>
    </CHeader>
  )
}
```

## Customizing

### CSS variables

React headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
$header-tokens: defaults(
  (
    --cui-header-padding-x: var(--cui-spacer-3),
    --cui-header-padding-y: var(--cui-spacer-3),
    --cui-header-bg: var(--cui-bg-body),
    --cui-header-color: color-mix(in oklch, var(--cui-emphasis-color) 65%, transparent),
    --cui-header-border-color: var(--cui-border-color),
    --cui-header-border: var(--cui-border-width) solid var(--cui-header-border-color),
    --cui-header-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 80%, transparent),
    --cui-header-disabled-color: color-mix(in oklch, var(--cui-emphasis-color) 30%, transparent),
    --cui-header-active-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-header-transition: box-shadow .15s ease-in-out,
    --cui-header-brand-padding-y: calc((#{$nav-link-height} - calc(#{$header-brand-font-size} * var(--cui-body-line-height))) * .5),
    --cui-header-brand-color: var(--cui-fg-body),
    --cui-header-brand-hover-color: var(--cui-fg-1),
    --cui-header-brand-margin-end: 1rem,
    --cui-header-toggler-font-size: var(--cui-font-size-lg),
    --cui-header-toggler-padding-x: .75rem,
    --cui-header-toggler-padding-y: .25rem,
    --cui-header-toggler-bg: transparent,
    --cui-header-toggler-color: color-mix(in oklch, var(--cui-emphasis-color) 65%, transparent),
    --cui-header-toggler-border-radius: var(--cui-radius-4),
    --cui-header-toggler-hover-color: color-mix(in oklch, var(--cui-emphasis-color) 100%, transparent),
    --cui-header-toggler-icon-bg: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='black' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>"))},
    --cui-header-nav-link-padding-x: .5rem,
    --cui-header-nav-link-padding-y: .5rem,
    --cui-header-divider-border-color: var(--cui-border-color),
    --cui-header-divider-border: var(--cui-border-width) solid var(--cui-header-divider-border-color),
  ),
  $header-tokens
);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-header-color': '#333',
  '--cui-header-bg': '#f8f9fa',
}

return <CHeader style={customVars} />
```

### Sass variables

```scss
$header-brand-font-size:        var(--cui-font-size-lg) !default;

// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link
```

## API

### CHeader

```jsx
import { CHeader } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |
| `container` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "fluid"` | - | Defines optional container wrapping children elements. |
| `position` | `"fixed" \| "sticky"` | - | Place header in non-static positions. |

### CHeaderBrand

```jsx
import { CHeaderBrand } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `a` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |

### CHeaderDivider

```jsx
import { CHeaderDivider } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the component. |

### CHeaderNav

```jsx
import { CHeaderNav } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ...` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string` | - | A string of all className you want applied to the component. |

### CHeaderText

```jsx
import { CHeaderText } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |

### CHeaderToggler

```jsx
import { CHeaderToggler } from '@coreui/react-pro'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
