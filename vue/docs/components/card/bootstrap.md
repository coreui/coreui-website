# Vue Bootstrap Card Component

> Learn how to use CoreUI’s Vue Card component with Bootstrap styles for flexible, framework-consistent UI.

## About

A Vue card component is a content container. It incorporates options for images, headers, and footers, a wide variety of content, contextual background colors, and excellent display options.

## Example

Cards are built with as little markup and styles as possible but still manage to deliver a bunch of control and customization. Built with flexbox, they offer easy alignment and mix well with other CoreUI components. Cards have no top, left, and right margins by default, so use [spacing utilities](https://coreui.io/bootstrap/docs/utilities/spacing) as needed. They have no fixed width to start, so they'll fill the full width of its parent.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element.

```html
<template>
  <CCard style="width: 18rem">
    <CCardImage orientation="top" src="/assets/img/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >Some quick example text to build on the card title and make up the bulk of the card's
        content.</CCardText
      >
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

## Content types

CoreUI card supports a wide variety of content, including images, text, list groups, links, and more. Below are examples of those elements.

### Body

The main block of a card is the `<CCardBody>`. Use it whenever you need a padded section within a card.

```html
<template>
  <CCard>
    <CCardBody> This is some text within a card body. </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardBody } from '@coreui/vue'
</script>
```
### Titles, text, and links

Card titles are managed by `<CCardTitle>` component. Identically, links are attached and collected next to each other by `<CCardLink>` component.

Subtitles are managed by `<CCardSubtitle>` component. If the `<CCardTitle>` also, the `<CCardSubtitle>` items are stored in a `<CCardBody>` item, the card title, and subtitle are arranged rightly.

```html
<template>
  <CCard style="width: 18rem">
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardSubtitle class="mb-2 text-body-secondary">Card subtitle</CCardSubtitle>
      <CCardText
        >Some quick example text to build on the card title and make up the bulk of the card's
        content.</CCardText
      >
      <CCardLink href="#">Card link</CCardLink>
      <CCardLink href="#">Another link</CCardLink>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CCardText, CCardLink } from '@coreui/vue'
</script>
```

### Images

`.card-img-top` places a picture to the top of the card. With `.card-text`, text can be added to the card. Text within `.card-text` can additionally be styled with the regular HTML tags.

```html
<template>
  <CCard style="width: 18rem">
    <CCardImage orientation="top" src="/assets/img/vue.jpg" />
    <CCardBody>
      <CCardText
        >Some quick example text to build on the card title and make up the bulk of the card's
        content.</CCardText
      >
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardImage, CCardBody, CCardText } from '@coreui/vue'
</script>
```

### List groups

Create lists of content in a card with a flush list group.

```html
<template>
  <CCard style="width: 18rem">
    <CListGroup flush>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  </CCard>
</template>

<script setup>
import { CCard, CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```
```html
<template>
  <CCard style="width: 18rem">
    <CCardHeader>Header</CCardHeader>
    <CListGroup flush>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
  </CCard>
</template>

<script setup>
import { CCard, CCardHeader, CListGroup, CListGroupItem } from '@coreui/vue'
</script>
```

```html
<template>
  <CCard style="width: 18rem">
    <CListGroup flush>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
    <CCardFooter>Footer</CCardFooter>
  </CCard>
</template>

<script setup>
import { CCard, CListGroup, CListGroupItem, CCardFooter } from '@coreui/vue'
</script>
```

### Kitchen sink

Combine and match many content types to build the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.

```html
<template>
  <CCard style="width: 18rem">
    <CCardImage orientation="top" src="/assets/img/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >Some quick example text to build on the card title and make up the bulk of the card's
        content.</CCardText
      >
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
</template>

<script setup>
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
} from '@coreui/vue'
</script>
```

### Header and footer

Add an optional header and/or footer within a card.

```html
<template>
  <CCard>
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

Card headers can be styled by adding ex. `as="h5"`.

```html
<template>
  <CCard>
    <CCardHeader as="h5">Header</CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

```html
<template>
  <CCard>
    <CCardHeader>Quote</CCardHeader>
    <CCardBody>
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody } from '@coreui/vue'
</script>
```

```html
<template>
  <CCard class="text-center">
    <CCardHeader>Header</CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
    <CCardFooter class="text-body-secondary">2 days ago</CCardFooter>
  </CCard>
</template>

<script setup>
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
  CCardFooter,
} from '@coreui/vue'
</script>
```

## Sizing

Cards assume no specific `width` to start, so they'll be 100% wide unless otherwise stated. You can adjust this as required with custom CSS, grid classes, grid Sass mixins, or services.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

```html
<template>
  <CRow>
    <CCol :sm="6">
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText
            >With supporting text below as a natural lead-in to additional content.</CCardText
          >
          <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :sm="6">
      <CCard>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText
            >With supporting text below as a natural lead-in to additional content.</CCardText
          >
          <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

### Using utilities

Use some of [available sizing utilities](https://coreui.io/bootstrap/docs/utilities/sizing/) to rapidly set a card's width.

```html
<template>
  <CCard class="w-75">
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
  <CCard class="w-50">
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to set a width.

```html
<template>
  <CCard style="width: 18rem">
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

## Text alignment

You can instantly change the text arrangement of any card—in its whole or specific parts—with [text align classes](https://coreui.io/bootstrap/docs/utilities/text/#text-alignment).

```html
<template>
  <CCard style="width: 18rem">
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
  <CCard class="text-center" style="width: 18rem">
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
  <CCard class="text-end" style="width: 18rem">
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
</script>
```

## Navigation

Add some navigation to a `<CCardHeader>` with our `<CNav>` component.

```html
<template>
  <CCard class="text-center">
    <CCardHeader>
      <CNav variant="tabs" class="card-header-tabs">
        <CNavItem>
          <CNavLink href="#" active> Active </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#"> Link </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled> Disabled </CNavLink>
        </CNavItem>
      </CNav>
    </CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import {
  CCard,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/vue'
</script>
```

```html
<template>
  <CCard class="text-center">
    <CCardHeader>
      <CNav variant="pills" class="card-header-pills">
        <CNavItem>
          <CNavLink href="#" active> Active </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#"> Link </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" disabled> Disabled </CNavLink>
        </CNavItem>
      </CNav>
    </CCardHeader>
    <CCardBody>
      <CCardTitle>Special title treatment</CCardTitle>
      <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
      <CButton color="primary" href="#">Go somewhere</CButton>
    </CCardBody>
  </CCard>
</template>

<script setup>
import {
  CCard,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/vue'
</script>
```

## Images

Cards introduce several options for acting with images. Pick from appending "image caps" at either end of a card, overlaying images with content, or just inserting the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

```html
<template>
  <CCard class="mb-3">
    <CCardImage orientation="top" src="/assets/img/vue.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</CCardText
      >
      <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
  </CCard>
  <CCard class="mb-3">
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</CCardText
      >
      <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
    </CCardBody>
    <CCardImage orientation="bottom" src="/assets/img/vue.jpg" />
  </CCard>
</template>

<script setup>
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

### Image overlays

Adapt an image into a background and overlay your text. Depending on the image, you may need additional styles or utilities.

```html
<template>
  <CCard class="mb-3 bg-dark text-white">
    <CCardImage src="/assets/img/vue.jpg" />
    <CCardImageOverlay>
      <CCardTitle>Card title</CCardTitle>
      <CCardText
        >This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.</CCardText
      >
      <CCardText>Last updated 3 mins ago</CCardText>
    </CCardImageOverlay>
  </CCard>
</template>

<script setup>
import { CCard, CCardImage, CCardImageOverlay, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

## Horizontal

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with `.g-0` and use `.col-md-*` classes to make the card horizontal at the `md` breakpoint. Further adjustments may be needed depending on your card content.

```html
<template>
  <CCard class="mb-3" style="max-width: 540px">
    <CRow class="g-0">
      <CCol :md="4">
        <CImage class="rounded-start" fluid src="/assets/img/vue.jpg" />
      </CCol>
      <CCol :md="8">
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
          <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
        </CCardBody>
      </CCol>
    </CRow>
  </CCard>
</template>

<script setup>
import { CCard, CRow, CCol, CImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

### Background and color

Use `color` property to change the appearance of a card.

```html
<template>
  <template
    v-for="item in [
      { color: 'primary', textColor: 'white' },
      { color: 'secondary', textColor: 'white' },
      { color: 'success', textColor: 'white' },
      { color: 'danger', textColor: 'white' },
      { color: 'warning' },
      { color: 'info', textColor: 'white' },
      { color: 'light' },
      { color: 'dark', textColor: 'white' },
    ]"
    :key="item.color"
  >
    <CCard :color="item.color" :text-color="item.textColor" class="mb-3" style="max-width: 18rem">
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>{{ item.color }} card title</CCardTitle>
        <CCardText
          >Some quick example text to build on the card title and make up the bulk of the card's
          content.</CCardText
        >
      </CCardBody>
    </CCard>
  </template>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

You can also apply contextual variations with the `textBgColor` property, which automatically sets the text color to ensure compliance with the WCAG 4.5:1 contrast ratio standard for enhanced accessibility.

```html
<template>
  <template
    v-for="item in [
      { color: 'primary' },
      { color: 'secondary' },
      { color: 'success' },
      { color: 'danger' },
      { color: 'warning' },
      { color: 'info' },
      { color: 'light' },
      { color: 'dark' },
    ]"
    :key="item.color"
  >
    <CCard :text-bg-color="item.color" class="mb-3" style="max-width: 18rem">
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>{{ item.color }} card title</CCardTitle>
        <CCardText
          >Some quick example text to build on the card title and make up the bulk of the card's
          content.</CCardText
        >
      </CCardBody>
    </CCard>
  </template>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.

### Border

Use [border utilities](https://coreui.io/bootstrap/docs/utilities/borders/) to change just the `border-color` of a card. Note that you can set `text-color` property on the `<CCard>` or a subset of the card's contents as shown below.

```html
<template>
  <template
    v-for="item in [
      { color: 'primary', textColor: 'primary' },
      { color: 'secondary', textColor: 'secondary' },
      { color: 'success', textColor: 'success' },
      { color: 'danger', textColor: 'danger' },
      { color: 'warning', textColor: 'warning' },
      { color: 'info', textColor: 'info' },
      { color: 'light' },
      { color: 'dark' },
    ]"
    :key="item.color"
  >
    <CCard
      :text-color="item.textColor"
      class="mb-3"
      :class="'border-' + item.color"
      style="max-width: 18rem"
    >
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>{{ item.color }} card title</CCardTitle>
        <CCardText
          >Some quick example text to build on the card title and make up the bulk of the card's
          content.</CCardText
        >
      </CCardBody>
    </CCard>
  </template>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

### Top border

```html
<template>
  <template
    v-for="item in [
      { color: 'primary', textColor: 'primary' },
      { color: 'secondary', textColor: 'secondary' },
      { color: 'success', textColor: 'success' },
      { color: 'danger', textColor: 'danger' },
      { color: 'warning', textColor: 'warning' },
      { color: 'info', textColor: 'info' },
      { color: 'light' },
      { color: 'dark' },
    ]"
    :key="item.color"
  >
    <CCard
      :text-color="item.textColor"
      class="mb-3 border-top-3"
      :class="'border-top-' + item.color"
      style="max-width: 18rem"
    >
      <CCardHeader>Header</CCardHeader>
      <CCardBody>
        <CCardTitle>{{ item.color }} card title</CCardTitle>
        <CCardText
          >Some quick example text to build on the card title and make up the bulk of the card's
          content.</CCardText
        >
      </CCardBody>
    </CCard>
  </template>
</template>

<script setup>
import { CCard, CCardHeader, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

## Card layout

In addition to styling the content within cards, CoreUI includes a few options for laying out series of cards. For the time being, **these layout options are not yet responsive**.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use `display: flex;` to become attached with uniform dimensions starting at the `sm` breakpoint.

```html
<template>
  <CCardGroup>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</CCardText
        >
        <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This card has supporting text below as a natural lead-in to additional
          content.</CCardText
        >
        <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This is a wider card with supporting text below as a natural lead-in to additional
          content. This card has even longer content than the first to show that equal height
          action.</CCardText
        >
        <CCardText><small class="text-body-secondary">Last updated 3 mins ago</small></CCardText>
      </CCardBody>
    </CCard>
  </CCardGroup>
</template>

<script setup>
import { CCardGroup, CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

When using card groups with footers, their content will automatically line up.

```html
<template>
  <CCardGroup>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</CCardText
        >
      </CCardBody>
      <CCardFooter><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This card has supporting text below as a natural lead-in to additional
          content.</CCardText
        >
      </CCardBody>
      <CCardFooter><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
    <CCard>
      <CCardImage orientation="top" src="/assets/img/vue.jpg" />
      <CCardBody>
        <CCardTitle>Card title</CCardTitle>
        <CCardText
          >This is a wider card with supporting text below as a natural lead-in to additional
          content. This card has even longer content than the first to show that equal height
          action.</CCardText
        >
      </CCardBody>
      <CCardFooter><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter>
    </CCard>
  </CCardGroup>
</template>

<script setup>
import {
  CCardGroup,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from '@coreui/vue'
</script>
```

### Grid cards

Use the `CRow` component and set `:xs|sm|md|lg|xl|xxl="{ cols: * }"` property to control how many grid columns (wrapped around your cards) you show per row. For example, here's `:xs="{cols: 1}"` laying out the cards on one column, and `:md="{cols: 2}"` splitting four cards to equal width across multiple rows, from the medium breakpoint up.

```html
<template>
  <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 2 }">
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from '@coreui/vue'
</script>
```

Change it to `:md="{ cols: 3}"` and you'll see the fourth card wrap.

```html
<template>
  <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3 }">
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard>
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from '@coreui/vue'
</script>
```

When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.

```html
<template>
  <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3 }">
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This card has supporting text below as a natural lead-in to additional
            content.</CCardText
          >
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.</CCardText
          >
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import { CRow, CCol, CCard, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/vue'
</script>
```

Just like with card groups, card footers will automatically line up.

```html
<template>
  <CRow :xs="{ cols: 1, gutter: 4 }" :md="{ cols: 3 }">
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This card has supporting text below as a natural lead-in to additional
            content.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
    <CCol xs>
      <CCard class="h-100">
        <CCardImage orientation="top" src="/assets/img/vue.jpg" />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText
            >This is a wider card with supporting text below as a natural lead-in to additional
            content. This card has even longer content than the first to show that equal height
            action.</CCardText
          >
        </CCardBody>
        <CCardFooter
          ><small class="text-body-secondary">Last updated 3 mins ago</small></CCardFooter
        >
      </CCard>
    </CCol>
  </CRow>
</template>

<script setup>
import {
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from '@coreui/vue'
</script>
```

## Customizing

### CSS variables

Vue cards use local CSS variables on `.card` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-card-spacer-y: #{$card-spacer-y};
--cui-card-spacer-x: #{$card-spacer-x};
--cui-card-title-spacer-y: #{$card-title-spacer-y};
--cui-card-title-color: #{$card-title-color};
--cui-card-subtitle-color: #{$card-subtitle-color};
--cui-card-border-width: #{$card-border-width};
--cui-card-border-color: #{$card-border-color};
--cui-card-border-radius: #{$card-border-radius};
--cui-card-box-shadow: #{$card-box-shadow};
--cui-card-inner-border-radius: #{$card-inner-border-radius};
--cui-card-cap-padding-y: #{$card-cap-padding-y};
--cui-card-cap-padding-x: #{$card-cap-padding-x};
--cui-card-cap-bg: #{$card-cap-bg};
--cui-card-cap-color: #{$card-cap-color};
--cui-card-height: #{$card-height};
--cui-card-color: #{$card-color};
--cui-card-bg: #{$card-bg};
--cui-card-img-overlay-padding: #{$card-img-overlay-padding};
--cui-card-group-margin: #{$card-group-margin};
```

#### How to use CSS variables

```vue
<template>
  <CCard :style="vars">...</CCard>
</template>

<script setup>
const vars = {
  '--cui-card-title-color': '#333',
  '--cui-card-cap-bg': '#f8f9fa',
}
</script>
```

### SASS variables

```scss
$card-spacer-y:                     $spacer !default;
$card-spacer-x:                     $spacer !default;
$card-title-spacer-y:               $spacer * .5 !default;
$card-title-color:                  null !default;
$card-subtitle-color:               null !default;
$card-border-width:                 var(--cui-border-width) !default;
$card-border-color:                 var(--cui-border-color-translucent) !default;
$card-border-radius:                var(--cui-border-radius) !default;
$card-box-shadow:                   null !default;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;
$card-cap-padding-y:                $card-spacer-y * .5 !default;
$card-cap-padding-x:                $card-spacer-x !default;
$card-cap-bg:                       rgba(var(--cui-body-color-rgb), .03) !default;
$card-cap-color:                    null !default;
$card-height:                       null !default;
$card-color:                        null !default;
$card-bg:                           var(--cui-body-bg) !default;
$card-img-overlay-padding:          $spacer !default;
$card-group-margin:                 $grid-gutter-width * .5 !default;
```
