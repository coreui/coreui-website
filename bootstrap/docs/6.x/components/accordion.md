# Bootstrap 6 Accordion

> Build vertically collapsing accordions on top of the native HTML disclosure element.

## How it works

The accordion is built on the native `<details>` and `<summary>` elements, so it works without JavaScript. The browser handles opening, closing, keyboard interaction and the disclosure semantics announced by screen readers.

- `.accordion-item` goes on a `<details>` element.
- `.accordion-header` goes on its `<summary>` element.
- `.accordion-body` holds the panel content.

To render an item that's expanded by default, add the `open` attribute to its `<details>` element.

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/getting-started/accessibility/#reduced-motion).

Click the accordions below to expand/collapse the accordion content.

```html
<div class="accordion">
  <details class="accordion-item" name="accordionExample" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">
      <strong>This is the first item's accordion body.</strong> It is shown by default, because its <code>&lt;details&gt;</code> element carries the <code>open</code> attribute. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>.
    </div>
  </details>
  <details class="accordion-item" name="accordionExample">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">
      <strong>This is the second item's accordion body.</strong> It is hidden by default. The shared <code>name</code> attribute is what makes the browser close the other items when this one opens.
    </div>
  </details>
  <details class="accordion-item" name="accordionExample">
    <summary class="accordion-header">Accordion Item #3</summary>
    <div class="accordion-body">
      <strong>This is the third item's accordion body.</strong> It is hidden by default. You can modify any of this with custom CSS or overriding our default variables.
    </div>
  </details>
</div>
```

## Variants

An open item is a neutral surface on its own. Add a contextual `.theme-{color}` class to the `.accordion` to tint it — closed items are untouched either way, so the theme marks what is currently expanded rather than recolouring the whole control.

```html
<div class="accordion theme-success">
  <details class="accordion-item" name="accordionTheme" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">The open item takes its text, background and border from the theme color.</div>
  </details>
  <details class="accordion-item" name="accordionTheme">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Closed items are untouched, so the tint reads as a state and not as decoration.</div>
  </details>
  <details class="accordion-item" name="accordionTheme">
    <summary class="accordion-header">Accordion Item #3</summary>
    <div class="accordion-body">Any of the theme colors works: <code>.theme-primary</code>, <code>.theme-danger</code>, and so on.</div>
  </details>
</div>
```

## Nested

Put a whole `.accordion` inside an `.accordion-body` to nest one. Give each level its own `name`, so the outer and inner groups open and close independently — `name` groups the `<details>` elements across the whole document, not per container.

```html
<div class="accordion">
  <details class="accordion-item" name="accordionNestedOuter" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">
      <strong>This item contains a nested accordion.</strong>
      <div class="accordion mt-4">
        <details class="accordion-item" name="accordionNestedInner" open>
          <summary class="accordion-header">Nested Item #1</summary>
          <div class="accordion-body">Body of the first nested item.</div>
        </details>
        <details class="accordion-item" name="accordionNestedInner">
          <summary class="accordion-header">Nested Item #2</summary>
          <div class="accordion-body">Body of the second nested item.</div>
        </details>
      </div>
    </div>
  </details>
  <details class="accordion-item" name="accordionNestedOuter">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Opening this closes the item above, and the nested accordion goes with it.</div>
  </details>
</div>
```

## Small

Add `.accordion-sm` for a compact accordion — tighter padding, a smaller radius and the small font size, all through the component's own tokens:

```scss
--cui-accordion-padding-x: .875rem;
--cui-accordion-padding-y: .625rem;
--cui-accordion-border-radius: var(--cui-radius-5);
--cui-accordion-font-size: var(--cui-font-size-sm);
```

```html
<div class="accordion accordion-sm">
  <details class="accordion-item" name="accordion-sm-example" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">A compact accordion body for denser layouts.</div>
  </details>
  <details class="accordion-item" name="accordion-sm-example">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">The same markup, just the small variant's tokens.</div>
  </details>
</div>
```

## Flush

Add `.accordion-flush` to remove the default `background-color`, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.

```html
<div class="accordion accordion-flush">
  <details class="accordion-item" name="accordionFlushExample">
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
  </details>
  <details class="accordion-item" name="accordionFlushExample">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
  </details>
  <details class="accordion-item" name="accordionFlushExample">
    <summary class="accordion-header">Accordion Item #3</summary>
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body.</div>
  </details>
</div>
```

## Gap

Add `.accordion-gap` to space the items apart. Each one keeps its full border radius, so the accordion reads as a stack of cards rather than one block.

The gap sits on the accordion, not on the panel, so opening and closing still animates only the panel's height.

```html
<div class="accordion accordion-gap">
  <details class="accordion-item" name="accordionGapExample" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-gap</code> class. Each item keeps a full border radius while the panel opens and closes.</div>
  </details>
  <details class="accordion-item" name="accordionGapExample">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-gap</code> class. This is the second item's accordion body.</div>
  </details>
  <details class="accordion-item" name="accordionGapExample">
    <summary class="accordion-header">Accordion Item #3</summary>
    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-gap</code> class. This is the third item's accordion body.</div>
  </details>
</div>
```

Set the distance with `--cui-accordion-gap`, which defaults to `--cui-spacer-3`.

## Always open

Omit the `name` attribute on each `.accordion-item` to make accordion items stay open when another item is opened.

```html
<div class="accordion">
  <details class="accordion-item" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">
      <strong>This is the first item's accordion body.</strong> Without a shared <code>name</code>, every item opens and closes on its own.
    </div>
  </details>
  <details class="accordion-item">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">
      <strong>This is the second item's accordion body.</strong> Opening it leaves the other items untouched.
    </div>
  </details>
  <details class="accordion-item">
    <summary class="accordion-header">Accordion Item #3</summary>
    <div class="accordion-body">
      <strong>This is the third item's accordion body.</strong> Opening it leaves the other items untouched.
    </div>
  </details>
</div>
```

## Expand & collapse all

This is the one feature of the accordion that needs `accordion.js`. The [`showAll()` and `hideAll()`](#methods) methods open and close every item of the accordion they are called on.

They work on an exclusive accordion too: the HTML Standard forbids leaving more than one open item in a `name` group, so opening them all means dropping the shared `name` first. The component parks it on each element and puts it back once the items are closed again, so nothing has to remember the group.

Both return a promise that settles once the items have finished moving.

```html
<button class="btn-solid theme-primary mb-4" type="button" id="accordionExpandAll">Expand all</button>
<button class="btn-solid theme-secondary mb-4" type="button" id="accordionCollapseAll">Collapse all</button>
<div class="accordion" id="accordionToggleAll">
  <details class="accordion-item" name="accordionToggleAll" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">Use <strong>Expand all</strong> to open every item, even though they share a <code>name</code>.</div>
  </details>
  <details class="accordion-item" name="accordionToggleAll">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body"><strong>Collapse all</strong> closes every item and restores the exclusive grouping.</div>
  </details>
  <details class="accordion-item" name="accordionToggleAll">
    <summary class="accordion-header">Accordion Item #3</summary>
    <div class="accordion-body">Placeholder content for the third accordion item.</div>
  </details>
</div>
```

```js
const expandBtn = document.getElementById('accordionExpandAll')
const collapseBtn = document.getElementById('accordionCollapseAll')

if (expandBtn && collapseBtn) {
  const accordion = coreui.Accordion.getOrCreateInstance('#accordionToggleAll')

  expandBtn.addEventListener('click', () => {
    accordion.showAll()
  })

  collapseBtn.addEventListener('click', () => {
    accordion.hideAll()
  })
}
```

## Findable when collapsed

Nothing to enable here: a closed `<details>` keeps its content searchable, and the browser expands the item on a find-in-page match — the capability the [collapse opts into](https://coreui.io/bootstrap/docs/components/collapse/#findable-when-collapsed) with `data-coreui-hidden-until-found` is built into the disclosure element the accordion stands on.

```html
<div class="accordion">
  <details class="accordion-item" name="accordionFindable" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">This item starts open. The interesting one is below it.</div>
  </details>
  <details class="accordion-item" name="accordionFindable">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Search this page for <strong>axolotl</strong> with your browser's find-in-page and this closed item opens on its own.</div>
  </details>
</div>
```

Everything composes with it: in an exclusive accordion the browser closes the previously open item as it reveals the match, `shown.coreui.accordion` fires the way it does for a click, and `<summary>` exposes the new state to assistive technology on its own. In browsers that do not search closed disclosure content the item simply is not found while collapsed — the same degradation the collapse option has.

## Headings

`<summary>` accepts heading content, so wrap the label in a heading to keep the sections reachable by heading navigation. The heading inherits the summary's typography, so it does not change how the accordion looks.

```html
<div class="accordion">
  <details class="accordion-item" name="accordionHeadingExample" open>
    <summary class="accordion-header"><h3>Accordion Item #1</h3></summary>
    <div class="accordion-body">Placeholder content for the first accordion item.</div>
  </details>
  <details class="accordion-item" name="accordionHeadingExample">
    <summary class="accordion-header"><h3>Accordion Item #2</h3></summary>
    <div class="accordion-body">Placeholder content for the second accordion item.</div>
  </details>
</div>
```

## Custom icon

_Added in 6.0.0._

The chevron is drawn by the header itself, from the `--cui-accordion-header-icon` custom property, and rotated by `--cui-accordion-header-icon-transform` while the item is open. Point the property at your own URL-escaped SVG to change it everywhere. The example takes `cil-chevron-right` from [CoreUI Icons](https://coreui.io/icons/) and turns it a quarter clockwise when the item opens.

```html
<div class="accordion" style="--cui-accordion-header-icon: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='m183.505 496-97.268-97.27 143.175-143.174L86.237 112.38l97.268-97.27 143.227 143.228 11.316 11.209 85.9 85.9.051.05-11.311 11.419-85.9 85.9-.055-.054Zm-52.013-97.27 52.013 52.014L326.629 307.62l.055.054 52.116-52.118-52.127-52.128-11.308-11.2-131.86-131.862-52.013 52.014 143.175 143.176Z'/%3E%3C/svg%3E&quot;); --cui-accordion-header-icon-transform: rotate(90deg);">
  <details class="accordion-item" name="accordionIconToken" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">The icon comes from the custom property, so no item carries markup for it.</div>
  </details>
  <details class="accordion-item" name="accordionIconToken">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Placeholder content for the second accordion item.</div>
  </details>
</div>
```

### Icon as an element

Put an element carrying `.accordion-icon` inside the `<summary>` to hand the header a real icon instead. The header stops drawing its own as soon as it finds one, so the two never double up. Sizing, placement and the open-state rotation stay with the class, and it fits both kinds of icon: an `<svg>` on `currentColor`, or a glyph from an icon font, which the class scales to the same box.

The example uses [CoreUI Icons](https://coreui.io/icons/), so a step is one class:

```html
<div class="accordion">
  <details class="accordion-item" name="accordionIconElement" open>
    <summary class="accordion-header">Accordion Item #1
      <span class="accordion-icon cil-chevron-bottom" aria-hidden="true"></span>
    </summary>
    <div class="accordion-body">Placeholder content for the first accordion item.</div>
  </details>
  <details class="accordion-item" name="accordionIconElement">
    <summary class="accordion-header">Accordion Item #2
      <span class="accordion-icon cil-chevron-bottom" aria-hidden="true"></span>
    </summary>
    <div class="accordion-body">Placeholder content for the second accordion item.</div>
  </details>
</div>
```

An inline `<svg>` goes in the same slot, and nothing about it has to be URL escaped:

```html
<div class="accordion">
  <details class="accordion-item" name="accordionIconSvg" open>
    <summary class="accordion-header">Accordion Item #1
      <svg class="accordion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="m256.072 424-11.421-11.313-85.808-85.809.053-.054L16 183.928l97.122-97.122 142.9 142.9 142.9-142.9 97.122 97.122-142.801 142.794-11.361 11.469Zm-.107-45.254.054.053 51.835-51.835 11.346-11.453 131.583-131.583-51.868-51.868-142.9 142.9-142.9-142.9-51.861 51.868 142.9 142.9-.053.054Z"/></svg>
    </summary>
    <div class="accordion-body">Placeholder content for the first accordion item.</div>
  </details>
  <details class="accordion-item" name="accordionIconSvg">
    <summary class="accordion-header">Accordion Item #2
      <svg class="accordion-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="m256.072 424-11.421-11.313-85.808-85.809.053-.054L16 183.928l97.122-97.122 142.9 142.9 142.9-142.9 97.122 97.122-142.801 142.794-11.361 11.469Zm-.107-45.254.054.053 51.835-51.835 11.346-11.453 131.583-131.583-51.868-51.868-142.9 142.9-142.9-142.9-51.861 51.868 142.9 142.9-.053.054Z"/></svg>
    </summary>
    <div class="accordion-body">Placeholder content for the second accordion item.</div>
  </details>
</div>
```

### A different icon when open

A plus that becomes a minus is a swap, not a rotation. Set `--cui-accordion-header-active-icon` to the open-state shape and turn the rotation off:

```html
<div class="accordion" style="--cui-accordion-header-icon: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M440 240H272V72h-32v168H72v32h168v168h32V272h168z'/%3E%3C/svg%3E&quot;); --cui-accordion-header-active-icon: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23000' d='M72 240h368v32H72z'/%3E%3C/svg%3E&quot;); --cui-accordion-header-icon-transform: none;">
  <details class="accordion-item" name="accordionIconPair" open>
    <summary class="accordion-header">Accordion Item #1</summary>
    <div class="accordion-body">Placeholder content for the first accordion item.</div>
  </details>
  <details class="accordion-item" name="accordionIconPair">
    <summary class="accordion-header">Accordion Item #2</summary>
    <div class="accordion-body">Placeholder content for the second accordion item.</div>
  </details>
</div>
```

The element form takes a pair too: add a second icon marked `.accordion-icon-active` and the header shows it in place of the first while the item is open. Rotation is dropped on its own here, because supplying a second shape already says the icon is not meant to turn.

```html
<div class="accordion">
  <details class="accordion-item" name="accordionIconElementPair" open>
    <summary class="accordion-header">Accordion Item #1
      <span class="accordion-icon cil-plus" aria-hidden="true"></span>
      <span class="accordion-icon accordion-icon-active cil-minus" aria-hidden="true"></span>
    </summary>
    <div class="accordion-body">Placeholder content for the first accordion item.</div>
  </details>
  <details class="accordion-item" name="accordionIconElementPair">
    <summary class="accordion-header">Accordion Item #2
      <span class="accordion-icon cil-plus" aria-hidden="true"></span>
      <span class="accordion-icon accordion-icon-active cil-minus" aria-hidden="true"></span>
    </summary>
    <div class="accordion-body">Placeholder content for the second accordion item.</div>
  </details>
</div>
```

> The icon carries no accessible name in either form. `` already announces its expanded state, so keep the icon out of the accessibility tree with `aria-hidden="true"` — a bare inline `` reaches it as an unnamed image otherwise.

## Accessibility

`<summary>` is a native disclosure control. It is focusable, it is operated with <kbd>Enter</kbd> and <kbd>Space</kbd>, and its expanded state is exposed to assistive technology by the browser — no `aria-expanded` or `aria-controls` bookkeeping is required.

Because a bare `<summary>` is not a heading, wrap its label in an `<h2>`–`<h6>` when the accordion divides a page into sections. See [Headings](#headings) above.

## JavaScript behavior

None is required to open and close an accordion. The `<details>` element does that on its own, including on markup added to the page after load, and the styles do not depend on the component either.

Loading `accordion.js` adds three things on top:

- **The events below**, on every accordion in the document, in every browser. Nothing has to be instantiated for them.
- **The methods below**, on an instance created for a `.accordion` element.
- **The open/close animation where CSS cannot do it.** Chromium animates `block-size: 0` to `auto` through [`interpolate-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size); Firefox and Safari do not implement it yet, so there the panel snaps unless the component is loaded. Only this part is conditional, and only this part goes away once they ship `calc-size()` — the events and methods stay.

### Methods

The component is instantiated on the `.accordion` element, and its methods address the items inside it. An item is passed either as an element or as its index.

```js
const accordion = coreui.Accordion.getOrCreateInstance('#myAccordion')

accordion.show(0)
accordion.hide(document.querySelector('#myAccordion > .accordion-item'))
```

| Method | Description |
| --- | --- |
| `hide(item)` | Closes an accordion item. Returns a promise that settles once it has finished collapsing. |
| `hideAll()` | Closes every item of the accordion and restores the grouping. |
| `show(item)` | Opens an accordion item. Returns a promise that settles once it has finished expanding. |
| `showAll()` | Opens every item of the accordion, dropping the exclusive grouping for as long as they stay open. |
| `toggle(item)` | Opens or closes an accordion item, depending on its current state. |

Items of a nested accordion belong to that accordion, not to the outer one, and an item that is not in this accordion is ignored.

### Events

The accordion's own events mirror the native [`toggle`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/toggle_event) event, and are fired on the `.accordion-item` element whenever its open state changes — in every browser, whether the panel was animated by CSS or by the component, and whether it was opened by the user or by setting the `open` property.

| Event | Description |
| --- | --- |
| `hidden.coreui.accordion` | Fired when an accordion item has been closed. |
| `shown.coreui.accordion` | Fired when an accordion item has been opened. |

Both bubble, so they can be delegated. The native `toggle` event does not bubble, which is the one thing these add over listening for it directly:

```js
coreui.EventHandler.on(document, 'shown.coreui.accordion', event => {
  console.log(event.target.querySelector('.accordion-header').textContent)
})
```

There is no `show`/`hide` counterpart, because `<details>` has no cancelable event that precedes the state change. **To keep an item from opening, cancel the click on its `<summary>`** — the browser then leaves it closed, and the component honors that too:

```js
summary.addEventListener('click', event => {
  if (!allowed) {
    event.preventDefault()
  }
})
```

## Customizing

### CSS variables

Accordions use local CSS variables on .accordion for enhanced real-time customization.

```scss
$accordion-tokens: defaults(
  (
    --cui-accordion-padding-x: 1.25rem,
    --cui-accordion-padding-y: 1rem,
    --cui-accordion-header-padding-x: var(--cui-accordion-padding-x),
    --cui-accordion-header-padding-y: var(--cui-accordion-padding-y),
    --cui-accordion-body-padding-x: var(--cui-accordion-padding-x),
    --cui-accordion-body-padding-y: var(--cui-accordion-padding-y),
    --cui-accordion-font-size: var(--cui-body-font-size),
    --cui-accordion-color: var(--cui-fg-body),
    --cui-accordion-bg: var(--cui-bg-body),
    --cui-accordion-transition-property: #{var(--cui-btn-input-action-transition-property), border-radius},
    --cui-accordion-transition-duration: var(--cui-btn-input-transition-duration),
    --cui-accordion-transition-timing: var(--cui-btn-input-transition-timing),
    --cui-accordion-border-color: var(--cui-border-color),
    --cui-accordion-border-width: var(--cui-border-width),
    --cui-accordion-border-radius: var(--cui-radius-7),
    --cui-accordion-gap: var(--cui-spacer-3),
    --cui-accordion-header-color: var(--cui-fg-2),
    --cui-accordion-header-bg: var(--cui-accordion-bg),
    --cui-accordion-header-icon: #{escape-svg(url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round'><path d='m2 5 6 6 6-6'/></svg>"))},
    --cui-accordion-header-active-icon: #{escape-svg(var(--cui-accordion-header-icon))},
    --cui-accordion-header-icon-width: 1.25rem,
    --cui-accordion-header-icon-color: currentcolor,
    --cui-accordion-header-active-icon-color: currentcolor,
    --cui-accordion-header-icon-transform: rotate(-180deg),
    --cui-accordion-header-icon-transition: transform .2s ease-in-out,
    --cui-accordion-active-color: var(--cui-fg-body),
    --cui-accordion-active-bg: var(--cui-bg-2),
    --cui-accordion-active-border-color: var(--cui-border-color),
    --cui-accordion-content-duration: .35s,
    --cui-accordion-content-easing: ease,
  ),
  $accordion-tokens
);
```
