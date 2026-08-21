# Angular Card Component

> Angular Card component provides a flexible and extensible container for displaying content. Card is delivered with a bunch of variants and options.

Use CoreUI Angular card component provides a flexible and extensible container
for displaying content. Card is delivered with a bunch of variants and
options.

## About

Angular card component is a content container. It
incorporates options for images, headers, and footers, a wide variety of
content, contextual background colors, and excellent display options. Cards
are built with as little markup and styles as possible but still manage to
deliver a bunch of control and customization. Built with flexbox, they offer
easy alignment and mix well with other CoreUI components. Cards have no top,
left, and right margins by default, so use
[spacing utilities](https://coreui.io/docs/utilities/spacing)
as needed. They have no fixed width to start, so they'll fill the full width of its parent.

## Examples

### Base card

## Content types

CoreUI card supports a wide variety of content, including
images, text, list groups, links, and more. Below are examples of those
elements.

### Body

The main block of a card is the `c-card-body`. Use it
whenever you need a padded section within a card.

### Titles and links

Card titles are managed by `cCardTitle` directive.
Identically, links are attached and collected next to each other by
`cCardLink` directive. Subtitles are managed by `cCardSubtitle` directive.
Also, if the `cCardTitle` and `cCardSubtitle` items are stored in a
`c-card-body` item, the card title, and subtitle are arranged rightly.

### Images and text

`cCardImg="top"` places a picture at the top of the card.
With `cCardText`, text can be added to the card. Text within `cCardText` can
additionally be styled with the regular HTML tags.

### List groups
Create lists of content in a card with a flush list group.

### Kitchen sink
Combine and match many content types to build the card you
need, or throw everything in there. Shown below are image styles, blocks, text
styles, and a list group—all wrapped in a fixed-width card.

### Header and footer
Add an optional header and/or footer within a card.

Card headers can be styled with html.

## Sizing
Cards assume no specific width to start, so they'll be 100% wide
unless otherwise stated. You can adjust this as required with custom CSS, grid
classes, grid Sass mixins, or services.

### Using grid markup

Using the grid, wrap cards in columns and rows as needed.

### Using utilities

Use some of available [sizing utilities](https://coreui.io/docs/utilities/sizing)
to rapidly set a card width.

### Using custom CSS

Use custom CSS in your stylesheets or as inline styles to
set a width.

### Text alignment

You can instantly change the text arrangement of any
card—in its whole or specific parts—with
[text align](https://coreui.io/docs/utilities/text/#text-alignment) classes.

## Navigation

Add some navigation to a `c-card` with our `c-tabs` component.

## Images

Cards introduce several options for acting with images. Pick from appending "image caps" at either end of a card, overlaying images with content, or just inserting the image in a card.

### Image caps

Similar to headers and footers, cards can include top and bottom "image caps"—images at the top or bottom of a card.

### Image overlays

Adapt an image into a background and overlay your text. Depending on the image, you may need additional styles or utilities.

## Horizontal

Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way.
In the example below, we remove the grid gutters with `.g-0` and use `.col-md-*` classes to make the card horizontal
at the `md` breakpoint. Further adjustments may be needed depending on your card content.

## Card styles

Cards include various options for customizing their backgrounds, borders, and color.

### Background and color

Use `color` property to change the appearance of a card.

### Border

Use [border utilities](https://coreui.io/docs/utilities/borders/) to change just the border-color of a card.
Note that you can set `textColor` property on the `cCard` or a subset of the card's contents as shown below.

### Top border

Use [border utilities](https://coreui.io/docs/utilities/borders/) to change just the accent of a card.

## Card layout

In addition to styling the content within cards, CoreUI includes a few options for laying out series of cards.
For the time being, <strong>these layout options are not yet responsive</strong>.

### Card groups

Use card groups to render cards as a single, attached element with equal width and height columns. Card groups
start off stacked and use `display: flex;` to become attached with uniform dimensions starting at the `sm` breakpoint.

### Card groups with footers

When using card groups with footers, their content will automatically line up.

### Grid cards

Use the `c-row` component and set `xs|sm|md|lg|xl|xxl` property
to control how many grid columns (wrapped around your cards) you show per row. For
example `[xs]="1"` laying out the cards on one column, and `[md]="1"` splitting
four cards to equal width across multiple rows, from the medium breakpoint up.

Change it to `[md]="3"` and you'll see the fourth card wraps.

When you need equal height, add `.h-100` to the cards. If you want equal heights by default, you can set `$card-height: 100%` in Sass.

Just like with card groups, card footers will automatically line up.

## API reference

### CardModule

```typescript
import { CardModule } from '@coreui/angular';

@NgModule({
    imports: [CardModule,]
})
export class AppModule() { }
```

### c-card
_component_

```jsx
import { CardComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |

### c-card-body
_component_

```jsx
import { CardBodyComponent } from '@coreui/angular'
```

### c-card-footer
_component_

```jsx
import { CardFooterComponent } from '@coreui/angular'
```

### c-card-header
_component_

```jsx
import { CardHeaderComponent } from '@coreui/angular'
```

### c-card-group
_component_

```jsx
import { CardGroupComponent } from '@coreui/angular'
```

### c-card-img-overlay
_component_

```jsx
import { CardImgOverlayComponent } from '@coreui/angular'
```

### cCardImg
_directive_

```jsx
import { CardImgDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cCardImg` | `'top' \| 'bottom' \| 'start' \| 'end'` | `undefined` | Optionally orientate the image to the top, bottom, or make it overlaid across the card. |

### cCardLink
_directive_

```jsx
import { CardLinkDirective } from '@coreui/angular'
```

### cCardSubtitle
_directive_

```jsx
import { CardSubtitleDirective } from '@coreui/angular'
```

### cCardText
_directive_

```jsx
import { CardTextDirective } from '@coreui/angular'
```

### cCardTitle
_directive_

```jsx
import { CardTitleDirective } from '@coreui/angular'
```
