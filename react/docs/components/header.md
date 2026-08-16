# React Header Component

> Documentation and examples for the Header powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.

## Supported content

Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

- `<CHeaderBrand>` for your company, product, or project name.
- `<CHeaderNav>` for a full-height and lightweight navigation (including support for dropdowns).
- `<CHeaderToggler>` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
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
        <CCollapse className="header-collapse" visible={visible}>
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
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
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
            <CFormInput className="me-2" type="search" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CHeader>
  </>
)
```

## Customizing

### CSS variables

React headers use local CSS variables on `.header` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-header-padding-x: #{$header-padding-x};
--cui-header-padding-y: #{$header-padding-y};
--cui-header-bg: #{$header-bg};
--cui-header-color: #{$header-color};
--cui-header-border-color: #{$header-border-color};
--cui-header-border: #{$header-border-width} solid var(--cui-header-border-color);
--cui-header-hover-color: #{$header-hover-color};
--cui-header-disabled-color: #{$header-disabled-color};
--cui-header-active-color: #{$header-active-color};
--cui-header-transition: #{$header-transition};
--cui-header-brand-padding-y: #{$header-brand-padding-y};
--cui-header-brand-color: #{$header-brand-color};
--cui-header-brand-hover-color: #{$header-brand-hover-color};
--cui-header-toggler-padding-x: #{$header-toggler-padding-x};
--cui-header-toggler-padding-y: #{$header-toggler-padding-y};
--cui-header-toggler-bg: #{$header-toggler-bg};
--cui-header-toggler-color: #{$header-toggler-color};
--cui-header-toggler-border-radius: #{$header-toggler-border-radius};
--cui-header-toggler-hover-color: #{$header-toggler-hover-color};
--cui-header-toggler-icon-bg: #{escape-svg($header-toggler-icon-bg)};
--cui-header-toggler-hover-icon-bg: #{escape-svg($header-toggler-hover-icon-bg)};
--cui-header-nav-link-padding-x: #{$header-nav-link-padding-x};
--cui-header-nav-link-padding-y: #{$header-nav-link-padding-y};
--cui-header-divider-border-color: #{$header-divider-border-color};
--cui-header-divider-border: #{$header-divider-border-width} solid var(--cui-header-divider-border-color);
```

#### How to use CSS variables

```jsx
const customVars = {
  '--cui-header-color': '#333',
  '--cui-header-bg': '#f8f9fa',
}

return <CHeader style={customVars} />
```

### SASS variables

```scss
$header-padding-y:              $spacer * .5 !default;
$header-padding-x:              $spacer * .5 !default;
$header-brand-font-size:        $font-size-lg !default;
$header-color:                  rgba(var(--cui-emphasis-color-rgb), .65) !default;
$header-bg:                     var(--cui-body-bg) !default;
$header-border-color:           var(--cui-border-color) !default;
$header-border-width:           var(--cui-border-width) !default;
$header-hover-color:            rgba(var(--cui-emphasis-color-rgb), .8) !default;
$header-active-color:           rgba(var(--cui-emphasis-color-rgb), 1) !default;
$header-disabled-color:         rgba(var(--cui-emphasis-color-rgb), .3) !default;
$header-transition:             box-shadow .15s ease-in-out !default;

// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link
$nav-link-height:               $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;
$header-brand-height:           $header-brand-font-size * $line-height-base !default;
$header-brand-padding-y:        ($nav-link-height - $header-brand-height) * .5 !default;
$header-brand-margin-end:       1rem !default;
$header-brand-font-size:        $font-size-lg !default;
$header-brand-color:            $gray-900 !default;
$header-brand-hover-color:      shade-color($gray-900, 10%) !default;

$header-toggler-padding-y:      .25rem !default;
$header-toggler-padding-x:      .75rem !default;
$header-toggler-font-size:      $font-size-lg !default;
$header-toggler-color:          rgba(var(--cui-emphasis-color-rgb), .65) !default;
$header-toggler-bg:             transparent !default;
$header-toggler-border-radius:  $btn-border-radius !default;
$header-toggler-hover-color:    rgba(var(--cui-emphasis-color-rgb), 1) !default;

$header-toggler-icon-bg:        url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;
$header-toggler-hover-icon-bg:  url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-hover-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;

$header-nav-link-padding-x:     .5rem !default;
$header-nav-link-padding-y:     .5rem !default;

$header-divider-border-width:   var(--cui-border-width) !default;
$header-divider-border-color:   var(--cui-border-color) !default;
```

## API

### CHeader

```jsx
import { CHeader } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |
| `container` | `boolean \| "sm" \| "md" \| "lg" \| "xl" \| "xxl" \| "fluid" \| undefined` | - | Defines optional container wrapping children elements. |
| `position` | `"fixed" \| "sticky" \| undefined` | - | Place header in non-static positions. |

### CHeaderBrand

```jsx
import { CHeaderBrand } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "a") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `a` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

### CHeaderDivider

```jsx
import { CHeaderDivider } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

### CHeaderNav

```jsx
import { CHeaderNav } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `as` | `(ElementType & "symbol") \| (ElementType & "object") \| (ElementType & "ul") \| (ElementType & "slot") \| (ElementType & "style") \| ... 175 more ... \| undefined` | `ul` | Component used for the root node. Either a string to use a HTML element or a component. |
| `className` | `string \| undefined` | - | A string of all className you want applied to the component. |

### CHeaderText

```jsx
import { CHeaderText } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |

### CHeaderToggler

```jsx
import { CHeaderToggler } from '@coreui/react'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string \| undefined` | - | A string of all className you want applied to the base component. |
