# React Accordion Component

> Build vertically collapsing accordions in combination with our React Accordion component.

## How it works

The accordion is built on the native `<details>` and `<summary>` elements, so it works without JavaScript. The browser handles opening, closing, keyboard interaction and the disclosure semantics announced by screen readers.

- `<CAccordionItem>` renders the `<details>` element.
- `<CAccordionHeader>` renders its `<summary>`.
- `<CAccordionBody>` holds the panel content.

Set `defaultOpenItemKeys` on `<CAccordion>` to open items at mount and let the accordion manage them from there — it takes a single key as well as an array. To drive the open items from your own state instead, pass `openItemKeys` together with `onChange`. Without `alwaysOpen` every item shares a `name`, which is what makes the browser close the others when one opens.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/react/docs/accessibility/reduced-motion/).

Click the accordions below to expand/collapse the accordion content.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionExample = () => {
  return (
    <CAccordion defaultOpenItemKeys={2}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the third item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Theme variants

_Added in 6.0.0._

An open item is a neutral surface on its own. Set [`theme`](https://coreui.io/react/docs/customize/components/#theme-variants) to tint it — closed items are untouched either way, so the theme marks what is currently expanded rather than recoloring the whole control.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionVariantsExample = () => {
  return (
    <CAccordion defaultOpenItemKeys={1} theme="success">
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          The open item takes its text, background and border from the theme color.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          Closed items are untouched, so the tint reads as a state and not as decoration.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          Any of the theme colors works: <code>primary</code>, <code>danger</code>, and so on.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Nested

Put a whole `<CAccordion>` inside a `<CAccordionBody>` to nest one. Each accordion generates its own `name`, so the outer and inner groups open and close independently — `name` groups the `<details>` elements across the whole document, not per container.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionNestedExample = () => {
  return (
    <CAccordion defaultOpenItemKeys={1}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This item contains a nested accordion.</strong>
          <CAccordion defaultOpenItemKeys={1} className="mt-4">
            <CAccordionItem itemKey={1}>
              <CAccordionHeader>Nested Item #1</CAccordionHeader>
              <CAccordionBody>Body of the first nested item.</CAccordionBody>
            </CAccordionItem>
            <CAccordionItem itemKey={2}>
              <CAccordionHeader>Nested Item #2</CAccordionHeader>
              <CAccordionBody>Body of the second nested item.</CAccordionBody>
            </CAccordionItem>
          </CAccordion>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          Opening this closes the item above, and the nested accordion goes with it.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Small

Add `size="sm"` for a compact accordion — tighter padding, a smaller radius and the small font size, all through the component's own tokens.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionSmallExample = () => {
  return (
    <CAccordion size="sm">
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>A compact accordion body for denser layouts.</CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>The same markup, just the small variant&#39;s tokens.</CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Flush

Add `flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionFlushExample = () => {
  return (
    <CAccordion flush>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the third item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Gap

Add `gap` to space the items apart. Each one keeps its full border radius, so the accordion reads as a stack of cards rather than one block. The gap sits on the accordion, not on the panel, so opening and closing still animates only the panel's height.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react-pro'

export const AccordionGapExample = () => {
  return (
    <CAccordion gap defaultOpenItemKeys={1}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          Placeholder content for this accordion, which is intended to demonstrate the{' '}
          <code>gap</code> prop. Each item keeps a full border radius while the panel opens and
          closes.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          Placeholder content for this accordion, which is intended to demonstrate the{' '}
          <code>gap</code> prop. Each item keeps a full border radius while the panel opens and
          closes.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          Placeholder content for this accordion, which is intended to demonstrate the{' '}
          <code>gap</code> prop. Each item keeps a full border radius while the panel opens and
          closes.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

Set the distance with `--cui-accordion-gap`, which defaults to `--cui-spacer-3`.

## Always open

Add `alwaysOpen` property to make React accordion items stay open when another item is opened.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionAlwaysOpenExample = () => {
  return (
    <CAccordion alwaysOpen defaultOpenItemKeys={2}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the first item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>Accordion Item #3</CAccordionHeader>
        <CAccordionBody>
          <strong>This is the second item&#39;s accordion body.</strong> It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to style each element.
          These classes control the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can go within the{' '}
          <code>.accordion-body</code>, though the transition does limit overflow.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Expand & collapse all

_Added in 6.0.0._

`openItemKeys` takes an array, so opening or closing everything is one piece of state. A single item can also be driven on its own with `open` on `<CAccordionItem>`. It is the controlled form: the accordion renders exactly what you pass and reports every change through `onChange`, so remember to feed it back. Pair it with `alwaysOpen` — the HTML Standard forbids leaving more than one open item in a `name` group, so an exclusive accordion cannot show them all.

```html
import React, { useState } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
} from '@coreui/react'

const items = [1, 2, 3]

export const AccordionToggleAllExample = () => {
  const [open, setOpen] = useState<(number | string)[]>([1])

  return (
    <>
      <div className="hstack gap-3 mb-4">
        <CButton theme="primary" onClick={() => setOpen(items)}>
          Expand all
        </CButton>
        <CButton theme="secondary" onClick={() => setOpen([])}>
          Collapse all
        </CButton>
      </div>
      <CAccordion openItemKeys={open} onChange={setOpen} alwaysOpen>
        {items.map((key) => (
          <CAccordionItem key={key} itemKey={key}>
            <CAccordionHeader>Accordion Item #{key}</CAccordionHeader>
            <CAccordionBody>Placeholder content for accordion item #{key}.</CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </>
  )
}
```

## Findable when collapsed

Nothing to enable here: a closed `<details>` keeps its content searchable, and the browser expands the item on a find-in-page match — the capability [`<CCollapse>` opts into](../collapse/#findable-when-collapsed) with `hiddenUntilFound` is built into the disclosure element the accordion stands on.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionFindableExample = () => {
  return (
    <CAccordion defaultOpenItemKeys={1}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Accordion Item #1</CAccordionHeader>
        <CAccordionBody>This item starts open. The interesting one is below it.</CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Accordion Item #2</CAccordionHeader>
        <CAccordionBody>
          Search this page for <strong>axolotl</strong> with your browser&apos;s find-in-page and
          this closed item opens on its own.
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

Everything composes with it: in an exclusive accordion the browser closes the previously open item as it reveals the match, `onShown` fires the way it does for a click, and `<summary>` exposes the new state to assistive technology on its own. In browsers that do not search closed disclosure content the item simply is not found while collapsed.

## Headings

`CAccordionHeader` renders a `<summary>`, which accepts heading content — so put a heading inside it to keep the sections reachable by heading navigation. Pick the level that fits the page's outline; nothing in the component depends on it.

The heading takes the header's own typography rather than its default size, weight and margins, so adding one does not change how the accordion looks.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionHeadingsExample = () => {
  return (
    <CAccordion defaultOpenItemKeys={1}>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>
          <h3>Accordion Item #1</h3>
        </CAccordionHeader>
        <CAccordionBody>Placeholder content for the first accordion item.</CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>
          <h3>Accordion Item #2</h3>
        </CAccordionHeader>
        <CAccordionBody>Placeholder content for the second accordion item.</CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}
```

## Custom icon

_Added in 6.0.0._

Put an element carrying `accordion-icon` inside the header to give it your own icon. The header stops drawing its default chevron as soon as it finds one, so the two never double up. Sizing and placement stay with the class, so an icon component and a glyph from an icon font both fit the same box.

The rotation does not: `--cui-accordion-header-icon-transform` is a half turn, which suits the built-in chevron because it points down and ends up pointing up. Hand it a shape with a different resting direction and the half turn stops making sense — a right-pointing chevron needs a quarter turn to end up pointing down.

A second element marked `accordion-icon-active` is shown in place of the first while the item is open — which is what a plus/minus accordion needs, where the icon is swapped rather than turned. Rotation is dropped on its own there, because supplying a second shape already says the icon is not meant to rotate.

```html
import React from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilChevronRight, cilMinus, cilPlus } from '@coreui/icons'

const rightChevron = {
  '--cui-accordion-header-icon-transform': 'rotate(90deg)',
} as React.CSSProperties

export const AccordionCustomIconExample = () => {
  return (
    <>
      <CAccordion defaultOpenItemKeys={1} className="mb-4" style={rightChevron}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>
            Accordion Item #1
            <CIcon icon={cilChevronRight} className="accordion-icon" aria-hidden="true" />
          </CAccordionHeader>
          <CAccordionBody>
            The icon is an element in the summary, so any icon set works. The rotation has to suit
            the shape: this chevron points right when closed, so it turns a quarter turn to point
            down, not the half turn the built-in one takes.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>
            Accordion Item #2
            <CIcon icon={cilChevronRight} className="accordion-icon" aria-hidden="true" />
          </CAccordionHeader>
          <CAccordionBody>Placeholder content for the second accordion item.</CAccordionBody>
        </CAccordionItem>
      </CAccordion>

      <CAccordion defaultOpenItemKeys={1}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>
            Accordion Item #1
            <CIcon icon={cilPlus} className="accordion-icon" aria-hidden="true" />
            <CIcon
              icon={cilMinus}
              className="accordion-icon accordion-icon-active"
              aria-hidden="true"
            />
          </CAccordionHeader>
          <CAccordionBody>
            A second element marked <code>accordion-icon-active</code> is swapped in while the item
            is open, which is what a plus/minus accordion needs. No rotation is involved, so nothing
            has to be tuned.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>
            Accordion Item #2
            <CIcon icon={cilPlus} className="accordion-icon" aria-hidden="true" />
            <CIcon
              icon={cilMinus}
              className="accordion-icon accordion-icon-active"
              aria-hidden="true"
            />
          </CAccordionHeader>
          <CAccordionBody>Placeholder content for the second accordion item.</CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  )
}
```

> The icon carries no accessible name in either form. The header already announces its expanded state, so keep the icon out of the accessibility tree with `aria-hidden="true"` — a bare inline `` reaches it as an unnamed image otherwise.

### Changing the icon in CSS

When the icon should change everywhere rather than per instance, set the tokens in your own stylesheet instead of putting an element in each header. The shape is a URL-escaped SVG here, which is why the element form above is the better fit inside a component:

```css
.accordion {
  --cui-accordion-header-icon: url("data:image/svg+xml,%3Csvg …plus… %3E");
  --cui-accordion-header-active-icon: url("data:image/svg+xml,%3Csvg …minus… %3E");
  --cui-accordion-header-icon-transform: none;
}
```

Drop `--cui-accordion-header-active-icon` and keep `--cui-accordion-header-icon-transform` to rotate one shape instead of swapping two.

## Controlled and uncontrolled

_Added in 6.0.0._

The accordion works either way, and the prop you reach for is what picks the mode.

| | prop | who owns the open items |
| --- | --- | --- |
| Uncontrolled | `defaultOpenItemKeys` | the accordion, from that starting point |
| Controlled | `openItemKeys` | your component |

Both take a single key as well as an array, and `onChange` fires in **both** modes with the new list — so you can watch the state without taking it over.

### Uncontrolled

Give the accordion a starting point and let it manage itself. This is what every example above does.

```jsx
<CAccordion defaultOpenItemKeys={1}>
```

### Controlled

Pass `openItemKeys` and the accordion renders exactly what you pass — it will not open or close on its own. Feed the change back from `onChange`, or nothing moves.

```html
import React, { useState } from 'react'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem } from '@coreui/react'

export const AccordionControlledExample = () => {
  const [open, setOpen] = useState<(number | string)[]>([1])

  return (
    <>
      <CAccordion openItemKeys={open} onChange={setOpen}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Accordion Item #1</CAccordionHeader>
          <CAccordionBody>Placeholder content for the first accordion item.</CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Accordion Item #2</CAccordionHeader>
          <CAccordionBody>Placeholder content for the second accordion item.</CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      <p className="fg-2">Open: {open.length > 0 ? open.join(', ') : 'none'}</p>
    </>
  )
}
```

Use it when the open items belong to something else: a route, a form step, a preference you persist, or a control outside the accordion like the [expand all](#expand--collapse-all) buttons above.

A single item can be driven on its own with `open` on `<CAccordionItem>`, which overrides the accordion's list for that item. Prefer `openItemKeys` where the whole set moves together.

## Accessibility

`<summary>` is a native disclosure control. It is focusable, it is operated with <kbd>Enter</kbd> and <kbd>Space</kbd>, and its expanded state is exposed to assistive technology by the browser — no `aria-expanded` or `aria-controls` bookkeeping is required.

Because a bare `<summary>` is not a heading, wrap its label in an `<h2>`–`<h6>` when the accordion divides a page into sections. See [Headings](#headings) above.

The full treatment is on the [Accordion accessibility](./accessibility/) page: what the native disclosure provides, why the component adds no ARIA attributes, keyboard support, and the two decisions left to you.

## API

Check out the documentation below for a comprehensive guide to all the props you can use with the components mentioned here.

- [&lt;CAccordion /&gt;](./api/#caccordion)
- [&lt;CAccordionBody /&gt;](./api/#caccordionbody)
- [&lt;CAccordionHeader /&gt;](./api/#caccordionheader)
- [&lt;CAccordionItem /&gt;](./api/#caccordionitem)
