# React Card Component

> React card component provides a flexible and extensible container for displaying content. Card is delivered with a bunch of variants and options.

## About

A React card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.

## Example

Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use [spacing utilities](https://coreui.io/bootstrap/docs/utilities/spacing) as needed. They have no fixed width to start, so they'll fill the full width of its parent.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.

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

## Content types

CoreUI card supports a wide variety of content, including images, text, list groups, links, and more. Below are examples of those elements.

### Body

The main block of a card is the `<CCardBody>`. Use it whenever you need a padded section within a card.

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

Card titles are managed by `<CCardTitle>` component. Identically, links are attached and collected next to each other by `<CCardLink>` component.

Subtitles are managed by `<CCardSubtitle>` component. If the `<CCardTitle>` also, the `<CCardSubtitle>` items are stored in a `<CCardBody>` item, the card title, and subtitle are arranged rightly.

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

`orientation="top"` places a picture to the top of the card. With `<CCardText>`, text can be added to the card. Text within `<CCardText>` can additionally be styled with the regular HTML tags.

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

Create lists of content in a card with a flush list group.

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

Combine and match many content types to build the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

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

Add an optional header and/or footer within a card.

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

Card headers can be styled by adding ex. `as="h5"`.

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

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated. You can adjust this as required with custom CSS, grid classes, grid Sass mixins, or services.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

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

### Using utilities

Use some of [available sizing utilities](https://coreui.io/bootstrap/docs/utilities/sizing/) to rapidly set a card's width.

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

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

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

You can instantly change the text arrangement of any card—in its whole or specific parts—with [text align classes](https://coreui.io/bootstrap/docs/utilities/text/#text-alignment).

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

Add some navigation to a `<CCardHeader>` with our `<CNav>` component.

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

## Images

Cards introduce several options for acting with images. Pick from appending "image caps" at either end of a card, overlaying images with content, or just inserting the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

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

Adapt an image into a background and overlay your text. Depending on the image, you may need additional styles or utilities.

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

## Horizontal

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with `.g-0` and use `.col-md-*` classes to make the card horizontal at the `md` breakpoint. Further adjustments may be needed depending on your card content.

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

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

### Background and color

Use `color` property to change the appearance of a card.

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

### Border

Use [border utilities](https://coreui.io/bootstrap/docs/utilities/borders/) to change just the `border-color` of a card. Note that you can set `textColor` property on the `<CCard>` or a subset of the card's contents as shown below.

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

### Top border

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

## Card layout

In addition to styling the content within cards, CoreUI includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use `display: flex;` to become attached with uniform dimensions starting at the `sm` breakpoint.

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

When using card groups with footers, their content will automatically line up.

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

### Grid cards

Use the `CRow` component and set `xs|sm|md|lg|xl|xxl}={{ cols: * }}` property to control how many grid columns (wrapped around your cards) you show per row. For example, here's `xs={{cols: 1}}` laying out the cards on one column, and `md={{cols: 2}}` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

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

Change it to `md={{ cols: 3}}` and you'll see the fourth card wrap.

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

When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.

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

Just like with card groups, card footers will automatically line up.

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

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CCard /&gt;](./api/#ccard)
- [&lt;CCardBody /&gt;](./api/#ccardbody)
- [&lt;CCardFooter /&gt;](./api/#ccardfooter)
- [&lt;CCardGroup /&gt;](./api/#ccardgroup)
- [&lt;CCardHeader /&gt;](./api/#ccardheader)
- [&lt;CCardImage /&gt;](./api/#ccardimage)
- [&lt;CCardImageOverlay /&gt;](./api/#ccardimageoverlay)
- [&lt;CCardLink /&gt;](./api/#ccardlink)
- [&lt;CCardSubtitle /&gt;](./api/#ccardsubtitle)
- [&lt;CCardText /&gt;](./api/#ccardtext)
- [&lt;CCardTitle /&gt;](./api/#ccardtitle)
