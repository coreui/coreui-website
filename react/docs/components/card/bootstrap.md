# React Bootstrap Card Component

> Learn how to use CoreUI’s React Bootstrap Card component to build flexible content containers with headers, footers, images, list groups, and responsive layouts.

## About React Bootstrap Card Component

The React Bootstrap Card component is a versatile container used to display content in a structured and responsive way. It supports images, headers, footers, background styles, and more—styled to match Bootstrap's visual language.

## Example usage

React Bootstrap Cards require minimal markup and offer maximum flexibility. They use flexbox for layout, have no default margins, and fill their parent container by default.

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CardExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

## Content types supported by React Bootstrap Card

### Card body

The main block of the card is wrapped in `<CCardBody>` for consistent padding.

```html
import React from 'react'
import { CCard, CCardBody } from '@coreui/react'

export const CardBodyExample = () => {
  return (
    <CCard>
      <CCardBody>This is some text within a card body.</CCardBody>
    </CCard>
  )
}
```

### Titles, text, and links

Use `<CCardTitle>`, `<CCardSubtitle>`, and `<CCardLink>` to structure text and links inside cards.

```html
import React from 'react'
import { CCard, CCardBody, CCardLink, CCardSubtitle, CCardText, CCardTitle } from '@coreui/react'

export const CardTitleExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardSubtitle className="mb-2 text-body-secondary">Card subtitle</CCardSubtitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <CCardLink href="#">Card link</CCardLink>
        <CCardLink href="#">Another link</CCardLink>
      </CCardBody>
    </CCard>
  )
}
```

### Images

Use `orientation="top"` to position an image at the top of the card. Use `<CCardText>` to add and style text content.

```html
import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText } from '@coreui/react'

export const CardImagesExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
      <CCardBody>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
      </CCardBody>
    </CCard>
  )
}
```

### List groups

Display structured lists inside cards using flush list groups.

```html
import React from 'react'
import { CCard, CListGroup, CListGroupItem } from '@coreui/react'

export const CardListGroupsExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
    </CCard>
  )
}
```

```html
import React from 'react'
import { CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/react'

export const CardListGroups2Example = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardHeader>Header</CCardHeader>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
    </CCard>
  )
}
```

```html
import React from 'react'
import { CCard, CCardFooter, CListGroup, CListGroupItem } from '@coreui/react'

export const CardListGroups3Example = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
      <CCardFooter>Footer</CCardFooter>
    </CCard>
  )
}
```

### Kitchen sink

Combine multiple content elements (e.g. image, text, list group) to create a comprehensive card layout.

```html
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardLink,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

export const CardKitchenSinkExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
      </CCardBody>
      <CListGroup flush>
        <CListGroupItem>Cras justo odio</CListGroupItem>
        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
        <CListGroupItem>Vestibulum at eros</CListGroupItem>
      </CListGroup>
      <CCardBody>
        <CCardLink href="#">Card link</CCardLink>
        <CCardLink href="#">Another link</CCardLink>
      </CCardBody>
    </CCard>
  )
}
```

### Header and footer

Use `<CCardHeader>` and `<CCardFooter>` to add headers and footers. You can style headers with `as="h5"` or similar props.

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react'

export const CardHeaderExample = () => {
  return (
    <CCard>
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardText, CCardTitle } from '@coreui/react'

export const CardHeader2Example = () => {
  return (
    <CCard>
      <CCardHeader as="h5">Header</CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

```html
import React from 'react'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

export const CardHeader3Example = () => {
  return (
    <CCard>
      <CCardHeader>Quote</CCardHeader>
      <CCardBody>
        <blockquote className="blockquote mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </CCardBody>
    </CCard>
  )
}
```

```html
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardText,
  CCardTitle,
} from '@coreui/react'

export const CardHeaderAndFooterExample = () => {
  return (
    <CCard className="text-center">
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
      <CCardFooter className="text-body-secondary">2 days ago</CCardFooter>
    </CCard>
  )
}
```

## Sizing React Bootstrap Cards

Cards are full-width by default. Control width using layout grids, utilities, or custom CSS.

### Grid layout

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardSizingExample = () => {
  return (
    <CRow>
      <CCol sm={6}>
        <CCard>
          <CCardBody>
            <CCardTitle>Special title treatment</CCardTitle>
            <CCardText>
              With supporting text below as a natural lead-in to additional content.
            </CCardText>
            <CButton color="primary" href="#">
              Go somewhere
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm={6}>
        <CCard>
          <CCardBody>
            <CCardTitle>Special title treatment</CCardTitle>
            <CCardText>
              With supporting text below as a natural lead-in to additional content.
            </CCardText>
            <CButton color="primary" href="#">
              Go somewhere
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

### Utility classes

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardSizing2Example = () => {
  return (
    <>
      <CCard className="w-75 mb-3">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="w-50">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
    </>
  )
}
```

### Custom CSS

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardSizing3Example = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

## Text alignment

Use Bootstrap's text alignment utilities to position card content.

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardTextAlignmentExample = () => {
  return (
    <>
      <CCard className="mb-3" style={{ width: '18rem' }}>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="mb-3 text-center" style={{ width: '18rem' }}>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="text-end" style={{ width: '18rem' }}>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton color="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
    </>
  )
}
```

## Navigation

Add navigational elements using `<CNav>` inside a card header.

```html
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const CardNavigationExample = () => {
  return (
    <CCard className="text-center">
      <CCardHeader>
        <CNav variant="tabs" className="card-header-tabs">
          <CNavItem>
            <CNavLink href="#" active>
              Active
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled>
              Disabled
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

```html
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const CardNavigation2Example = () => {
  return (
    <CCard className="text-center">
      <CCardHeader>
        <CNav variant="pills" className="card-header-pills">
          <CNavItem>
            <CNavLink href="#" active>
              Active
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Link</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" disabled>
              Disabled
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CCardTitle>Special title treatment</CCardTitle>
        <CCardText>
          With supporting text below as a natural lead-in to additional content.
        </CCardText>
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

## Image placement in React Bootstrap Cards

### Image caps (top or bottom)

```html
import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CardImageCapsExample = () => {
  return (
    <>
      <CCard className="mb-3">
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard className="mb-3">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
        <CCardImage orientation="bottom" src={'/assets/img/react.jpg'} />
      </CCard>
    </>
  )
}
```

### Image overlays

Overlay content on top of background images using Bootstrap utility classes.

```html
import React from 'react'
import { CCard, CCardImage, CCardImageOverlay, CCardText, CCardTitle } from '@coreui/react'

export const CardImageOverlaysExample = () => {
  return (
    <CCard className="mb-3 bg-dark text-white">
      <CCardImage src={'/assets/img/react.jpg'} />
      <CCardImageOverlay className="d-flex flex-column align-items-center justify-content-center">
        <CCardTitle>Card title</CCardTitle>
        <CCardText>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </CCardText>
        <CCardText>Last updated 3 mins ago</CCardText>
      </CCardImageOverlay>
    </CCard>
  )
}
```

## Horizontal layout

Use `.g-0` and grid column classes to create responsive horizontal cards.

```html
import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardImageHorizontalExample = () => {
  return (
    <CCard className="mb-3" style={{ maxWidth: '540px' }}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={'/assets/img/react400.jpg'} />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
            <CCardText>
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  )
}
```

## Styling options

### Background and text color

Use the `color` prop to control card background and text color.

```html
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardStylesBackgroundAndColorExample = () => {
  const colors = [
    { color: 'primary' },
    { color: 'secondary' },
    { color: 'success' },
    { color: 'danger' },
    { color: 'warning' },
    { color: 'info' },
    { color: 'light' },
    { color: 'dark' },
  ]

  return (
    <CRow>
      {colors.map((item, index) => (
        <CCol sm={6} key={index}>
          <CCard textBgColor={item.color} className="mb-3">
            <CCardHeader>Header</CCardHeader>
            <CCardBody>
              <CCardTitle>{item.color} card title</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}
```

### Border customization

Apply Bootstrap border utilities or the `textColor` prop to customize card borders.

```html
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardStylesBorderExample = () => {
  const colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'dark', textColor: 'dark' },
  ]

  return (
    <CRow>
      {colors.map((item, index) => (
        <CCol sm={6} key={index}>
          <CCard textColor={item.textColor} className={`mb-3 border-${item.color}`}>
            <CCardHeader>Header</CCardHeader>
            <CCardBody>
              <CCardTitle>{item.color} card title</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}
```

### Top border only

```html
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardStylesTopBorderExample = () => {
  const colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'dark', textColor: 'dark' },
  ]

  return (
    <CRow>
      {colors.map((item, index) => (
        <CCol sm={6} key={index}>
          <CCard
            textColor={item.textColor}
            className={`mb-3 border-top-${item.color} border-top-3`}
          >
            <CCardHeader>Header</CCardHeader>
            <CCardBody>
              <CCardTitle>{item.color} card title</CCardTitle>
              <CCardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}
```

## Layout variations

### Card groups

Group cards to render them with equal width and height.

```html
import React from 'react'
import { CCard, CCardBody, CCardGroup, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CardGroupsExample = () => {
  return (
    <CCardGroup>
      <CCard>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.
          </CCardText>
          <CCardText>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
    </CCardGroup>
  )
}
```

```html
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardText,
  CCardTitle,
} from '@coreui/react'

export const CardGroups2Example = () => {
  return (
    <CCardGroup>
      <CCard>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
      <CCard>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
      <CCard>
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.
          </CCardText>
        </CCardBody>
        <CCardFooter>
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
    </CCardGroup>
  )
}
```

### Grid-based cards

Use `<CRow>` and grid props to control the layout of multiple cards in a responsive grid.

```html
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

export const CardGridExample = () => {
  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

```html
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

export const CardGrid2Example = () => {
  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard>
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

```html
import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardGrid3Example = () => {
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

```html
import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'

export const CardGrid4Example = () => {
  return (
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard className="h-100">
          <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
          <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>
              This is a wider card with supporting text below as a natural lead-in to additional
              content. This card has even longer content than the first to show that equal height
              action.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

## API reference

- [&lt;CCard /&gt;](../api/#ccard)
- [&lt;CCardBody /&gt;](../api/#ccardbody)
- [&lt;CCardFooter /&gt;](../api/#ccardfooter)
- [&lt;CCardGroup /&gt;](../api/#ccardgroup)
- [&lt;CCardHeader /&gt;](../api/#ccardheader)
- [&lt;CCardImage /&gt;](../api/#ccardimage)
- [&lt;CCardImageOverlay /&gt;](../api/#ccardimageoverlay)
- [&lt;CCardLink /&gt;](../api/#ccardlink)
- [&lt;CCardSubtitle /&gt;](../api/#ccardsubtitle)
- [&lt;CCardText /&gt;](../api/#ccardtext)
- [&lt;CCardTitle /&gt;](../api/#ccardtitle)
