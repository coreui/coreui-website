# React Card Component

> React card component provides a flexible and extensible container for displaying content. Card is delivered with a bunch of variants and options.

## About

A React card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.

## Example

Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use [spacing utilities](https://coreui.io/react/docs/utilities/margin/) as needed. They have no fixed width to start, so they'll fill the full width of its parent.

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
        <CButton theme="primary" href="#">
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

The main block of a card is the `<CCardBody>`. Use it whenever you need a padded section within a card. Sections stacked in a card are divided by a single rule in the card's own border: a `<CCardBody>`, a list group or a bottom image draws it above itself when it follows a top image, a body or a list group, while `<CCardHeader>` and `<CCardFooter>` draw their own. A border utility or a theme on the card carries over to the rule, and a section hidden with `hidden` or `.d-none` does not count.

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

Card titles are managed by `<CCardTitle>` component. `<CCardBody>` is a flex column that spaces its children with `--cui-card-body-gap`, so a row of links is a `.hstack` of plain `<CLink>` elements.

Subtitles are managed by `<CCardSubtitle>` component. If the `<CCardTitle>` also, the `<CCardSubtitle>` items are stored in a `<CCardBody>` item, the card title, and subtitle are arranged rightly.

```html
import React from 'react'
import { CCard, CCardBody, CCardSubtitle, CCardText, CCardTitle, CLink } from '@coreui/react'

export const CardTitleExample = () => {
  return (
    <CCard style={{ width: '18rem' }}>
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardSubtitle className="fg-2">Card subtitle</CCardSubtitle>
        <CCardText>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </CCardText>
        <div className="hstack gap-4">
          <CLink href="#">Card link</CLink>
          <CLink href="#">Another link</CLink>
        </div>
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
  CCardText,
  CCardTitle,
  CLink,
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
        <div className="hstack gap-4">
          <CLink href="#">Card link</CLink>
          <CLink href="#">Another link</CLink>
        </div>
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
        <CButton theme="primary" href="#">
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
        <CButton theme="primary" href="#">
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
        <CButton theme="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
      <CCardFooter className="fg-2">2 days ago</CCardFooter>
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
            <CButton theme="primary" href="#">
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
            <CButton theme="primary" href="#">
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

Use some of [available sizing utilities](https://coreui.io/react/docs/utilities/width/) to rapidly set a card's width.

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardSizing2Example = () => {
  return (
    <>
      <CCard className="w-75 mb-4">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton theme="primary" href="#">
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
          <CButton theme="primary" href="#">
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
        <CButton theme="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
```

## Text alignment

You can instantly change the text arrangement of any card—in its whole or specific parts—with [text align classes](https://coreui.io/react/docs/utilities/text-alignment/).

`text-align` reaches the text but not the body's own flex items, so a button or a link stays at the start of the card. Move it with a margin utility: `.mx-auto` to centre it, `.ms-auto` to push it to the end.

```html
import React from 'react'
import { CButton, CCard, CCardBody, CCardText, CCardTitle } from '@coreui/react'

export const CardTextAlignmentExample = () => {
  return (
    <>
      <CCard className="mb-4" style={{ width: '18rem' }}>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton theme="primary" href="#">
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>
      <CCard className="mb-4 text-center" style={{ width: '18rem' }}>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional content.
          </CCardText>
          <CButton theme="primary" href="#" className="mx-auto">
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
          <CButton theme="primary" href="#" className="ms-auto">
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
        <CButton theme="primary" href="#">
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
        <CNav variant="pills">
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
        <CButton theme="primary" href="#">
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
      <CCard className="mb-4">
        <CCardImage orientation="top" src={'/assets/img/react.jpg'} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="fg-2">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="fg-2">Last updated 3 mins ago</small>
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
    <CCard className="mb-4 bg-black fg-white">
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

Use `layout="row"` to lay a card out along the inline axis. The sections sit side by side with a single divider between each pair, so no wrapper markup is needed. For an image cap, use `orientation="start"` or `orientation="end"` on `<CCardImage>` to round the leading or trailing edge.

```html
import React from 'react'
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CardImageHorizontalExample = () => {
  return (
    <>
      <CCard layout="row" className="mb-4" style={{ maxWidth: '540px' }}>
        <CCardImage orientation="start" src={'/assets/img/react400.jpg'} width="40%" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="fg-2">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard layout="row" style={{ maxWidth: '540px' }}>
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </CCardText>
          <CCardText>
            <small className="fg-2">Last updated 3 mins ago</small>
          </CCardText>
        </CCardBody>
        <CCardImage orientation="end" src={'/assets/img/react400.jpg'} width="40%" />
      </CCard>
    </>
  )
}
```

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

These are general-purpose utilities applied to the card as a whole: `text-bg-*` fills the card's own background and leaves the frame, the header and the footer neutral; add the matching `.border-{color}` to frame the card in the fill color. To color the caps instead — or to color one section on its own — reach for [theme variants](#theme-variants).

### Background and color

Use the `textBgColor` property to fill the card with a theme color; the text color follows it to keep the WCAG 4.5:1 contrast ratio. The `color` property sets the background alone.

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
          <CCard textBgColor={item.color} className={`border-${item.color} mb-4`}>
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

Use [border utilities](https://coreui.io/react/docs/utilities/border/) to change just the `border-color` of a card. Note that you can put `fg-{color}` classes on the `<CCard>` or a subset of the card's contents as shown below.

```html
import React from 'react'
import { CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow } from '@coreui/react'

export const CardStylesBorderExample = () => {
  const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse']

  return (
    <CRow>
      {colors.map((color) => (
        <CCol sm={6} key={color}>
          <CCard className={`mb-4 border-${color}`}>
            <CCardHeader>Header</CCardHeader>
            <CCardBody className={`fg-${color}`}>
              <CCardTitle>{color} card title</CCardTitle>
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
  const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse']

  return (
    <CRow>
      {colors.map((color) => (
        <CCol sm={6} key={color}>
          <CCard className={`mb-4 border-top-${color} border-top-3`}>
            <CCardHeader>Header</CCardHeader>
            <CCardBody className={`fg-${color}`}>
              <CCardTitle>{color} card title</CCardTitle>
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

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and become attached with uniform dimensions from the `sm` breakpoint up.

That breakpoint is measured on the nearest query container, not the viewport, so a group in a narrow column stays stacked while the same markup in a wide one attaches. Mark an ancestor with `.contains-inline` — without one the query has nothing to read and the cards never attach.

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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
          <small className="fg-2">Last updated 3 mins ago</small>
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
          <small className="fg-2">Last updated 3 mins ago</small>
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
          <small className="fg-2">Last updated 3 mins ago</small>
        </CCardFooter>
      </CCard>
    </CCardGroup>
  )
}
```

### Grid cards

Use the `CRow` component and set `xs|sm|md|lg|xl={{ cols: * }}` property (the top tier is spread in as `{...{ '2xl': { cols: * } }}`) to control how many grid columns (wrapped around your cards) you show per row. For example, here's `xs={{cols: 1}}` laying out the cards on one column, and `md={{cols: 2}}` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

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
    <CRow xs={{ cols: 1, gutter: 5 }} md={{ cols: 2 }}>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
    <CRow xs={{ cols: 1, gutter: 5 }} md={{ cols: 3 }}>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-5">
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
    <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-5">
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
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
            <small className="fg-2">Last updated 3 mins ago</small>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}
```

## Theme variants

_Added in 6.0.0._

The [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) property paints the card's frame and caps with the theme color, with contrast text in the header and footer. The body keeps the card background.

```html
import React from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCardText } from '@coreui/react'

const themes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const

export const CardThemingExample = () => {
  return (
    <div className="d-flex flex-wrap gap-4">
      {themes.map((theme) => (
        <CCard key={theme} theme={theme} style={{ width: '15rem' }}>
          <CCardHeader>Header</CCardHeader>
          <CCardBody>
            <CCardText>Some quick example text to build on the card title.</CCardText>
          </CCardBody>
          <CCardFooter>Footer</CCardFooter>
        </CCard>
      ))}
    </div>
  )
}
```

Put the theme class on a single section instead and only that section follows it:

```html
import React from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCardText } from '@coreui/react'

export const CardThemingSectionExample = () => {
  return (
    <CCard style={{ maxWidth: '18rem' }}>
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardText>Some quick example text to build on the card title.</CCardText>
      </CCardBody>
      <CCardFooter className="theme-danger">Something went wrong</CCardFooter>
    </CCard>
  )
}
```

Use `variant="subtle"` to swap the solid fill for the theme's subtle background and border, with emphasis text in the caps.

```html
import React from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCardText } from '@coreui/react'

const themes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const

export const CardSubtleExample = () => {
  return (
    <div className="d-flex flex-wrap gap-4">
      {themes.map((theme) => (
        <CCard key={theme} theme={theme} variant="subtle" style={{ width: '15rem' }}>
          <CCardHeader>Header</CCardHeader>
          <CCardBody>
            <CCardText>Some quick example text to build on the card title.</CCardText>
          </CCardBody>
          <CCardFooter>Footer</CCardFooter>
        </CCard>
      ))}
    </div>
  )
}
```

## Translucent

_Added in 6.0.0._

Use the `translucent` property to let the background through the card and blur it. The caps thin out with it, so the whole card reads as one surface.

```html
import React from 'react'
import { CCard, CCardBody, CCardFooter, CCardHeader, CCardText, CCardTitle } from '@coreui/react'

export const CardTranslucentExample = () => {
  return (
    <CCard translucent style={{ width: '18rem' }}>
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText>Some quick example text to build on the card title.</CCardText>
      </CCardBody>
      <CCardFooter>Footer</CCardFooter>
    </CCard>
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
- [&lt;CCardSubtitle /&gt;](./api/#ccardsubtitle)
- [&lt;CCardText /&gt;](./api/#ccardtext)
- [&lt;CCardTitle /&gt;](./api/#ccardtitle)
