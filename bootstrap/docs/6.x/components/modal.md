# Bootstrap 6 Modal

> Bootstrap Modals offer a lightweight, multi-purpose JavaScript popup to add dialogs to yours. Learn how to customize Bootstrap Modals easily. Multiple examples and tutorial.

> **Built on the same engine as Dialog — and heading for retirement.** Since v6 the Modal plugin is a compatibility layer over the dialog behavior [Dialog](https://coreui.io/bootstrap/docs/components/dialog/) is built on — same engine and dismissal, with the v5 markup, classes and `*.coreui.modal` events preserved, and the classic look. Existing modal markup keeps working unchanged throughout v6, but **Modal may be removed in v7** — we recommend using Dialog for new work and migrating when convenient.

## How it works

Bootstrap modals are lightweight and multi-purpose popups built on the native `<dialog>` element. Modals are split into three primary sections: header, body, and footer. Each has its role and so should be used accordingly. Before getting started with CoreUI for Bootstrap's modal component, be sure to read the following as our menu options have recently changed.

- Modals are rendered with the browser's native `<dialog>` element and `showModal()` API. The browser promotes an open modal to the **top layer**, so it displays over everything else in the document with no `z-index` management.
- Focus trapping, background inertness, and the dialog ARIA semantics come from the browser — no `role`, `aria-modal`, `aria-hidden`, or `tabindex` attributes are needed in the markup.
- The backdrop is the native `::backdrop` pseudo-element. Clicking it closes the modal, and page scroll is blocked while a modal is open.
- Modals are vertically and horizontally centered by the browser.
- Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in CoreUI modals. To achieve the same effect, use some custom JavaScript:

```js
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.coreui.modal', () => {
  myInput.focus()
})
```

> This component's animation effect relies on the `prefers-reduced-motion` media query. For more information, refer to the [reduced motion section of our accessibility documentation](https://coreui.io/bootstrap/docs/accessibility/reduced-motion/).

> ### Migrating from v5
> 
> The v5 `` markup (with its `.modal-dialog` and `.modal-content` wrappers) is upgraded to the native `` structure automatically at runtime, with a console warning. This transitional layer will be removed in v7 — update your markup to the structure documented below.

Keep reading for demos and usage guidelines.

## Examples

### Modal components

Below is a _static_ modal example (meaning it is open and rendered in place). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

```html
<dialog class="modal">
  <div class="modal-header">
    <h5 class="modal-title">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>Modal body text goes here.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>
```

### Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

<dialog class="modal" id="exampleModalLive" aria-labelledby="exampleModalLiveLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLiveLabel">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>Woo-hoo, you're reading this text in a modal!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>

```html
<!-- Button trigger modal -->
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="modal" data-coreui-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<dialog class="modal" id="exampleModal" aria-labelledby="exampleModalLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>
```

### Static backdrop

When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.

<dialog class="modal" id="staticBackdropLive" data-coreui-backdrop="static" data-coreui-keyboard="false" aria-labelledby="staticBackdropLiveLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>I will not close if you click outside of me. Don't even try to press escape key.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Understood</button>
  </div>
</dialog>

```html
<!-- Button trigger modal -->
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="modal" data-coreui-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<!-- Modal -->
<dialog class="modal" id="staticBackdrop" data-coreui-backdrop="static" data-coreui-keyboard="false" aria-labelledby="staticBackdropLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Understood</button>
  </div>
</dialog>
```

### Scrolling long content

When modals become too long for the user's viewport or device, add `.modal-scrollable` to the modal — the header and footer stay fixed while the modal body scrolls. Try the demo below to see what we mean.

<dialog class="modal modal-scrollable" id="exampleModalScrollable" aria-labelledby="exampleModalScrollableTitle">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <p>This content should appear at the bottom after you scroll.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>

```html
<!-- Scrollable modal -->
<dialog class="modal modal-scrollable">
  ...
</dialog>
```

### Vertically centered

Modals are vertically and horizontally centered by the browser — the v5 `.modal-dialog-centered` class is no longer needed.

### Tooltips and popovers

[Tooltips](https://coreui.io/bootstrap/docs/components/tooltips/) and [popovers](https://coreui.io/bootstrap/docs/components/popovers/) can be placed within modals as needed. Point their `container` option at the modal so they render inside the top layer; when modals are closed, any tooltips and popovers within are also automatically dismissed.

<dialog class="modal" id="exampleModalPopovers" aria-labelledby="exampleModalPopoversLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <h5>Popover in a modal</h5>
    <p>This <button class="btn-solid theme-secondary" data-coreui-toggle="popover" title="Popover title" data-coreui-content="Popover body content is set in this attribute." data-coreui-container="#exampleModalPopovers">button</button> triggers a popover on click.</p>
    <hr />
    <h5>Tooltips in a modal</h5>
    <p><a href="#" data-coreui-toggle="tooltip" title="Tooltip" data-coreui-container="#exampleModalPopovers">This link</a> and <a href="#" data-coreui-toggle="tooltip" title="Tooltip" data-coreui-container="#exampleModalPopovers">that link</a> have tooltips on hover.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>

```html
<div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <button class="btn-solid theme-secondary" data-coreui-toggle="popover" title="Popover title" data-coreui-content="Popover body content is set in this attribute." data-coreui-container="#myModal">button</button> triggers a popover on click.</p>
  <hr>
  <h5>Tooltips in a modal</h5>
  <p><a href="#" data-coreui-toggle="tooltip" title="Tooltip" data-coreui-container="#myModal">This link</a> and <a href="#" data-coreui-toggle="tooltip" title="Tooltip" data-coreui-container="#myModal">that link</a> have tooltips on hover.</p>
</div>
```

### Using the grid

Utilize the Bootstrap grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.

<dialog class="modal" id="gridSystemModal" aria-labelledby="gridModalLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="gridModalLabel">Grids in modals</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <div class="container-fluid docs-example-row">
      <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
      </div>
      <div class="row">
        <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
        <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
      </div>
      <div class="row">
        <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
      </div>
      <div class="row">
        <div class="col-sm-9">
          Level 1: .col-sm-9
          <div class="row">
            <div class="col-8 col-sm-6">
              Level 2: .col-8 .col-sm-6
            </div>
            <div class="col-4 col-sm-6">
              Level 2: .col-4 .col-sm-6
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Save changes</button>
  </div>
</dialog>

```html
<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
      <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Varying modal content

Have a bunch of buttons that all trigger the same modal with slightly different contents? Use `event.relatedTarget` and [HTML `data-coreui-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to vary the contents of the modal depending on which button was clicked.

Below is a live demo followed by example HTML and JavaScript. For more information, [read the modal events docs](#events) for details on `relatedTarget`.

```html
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="modal" data-coreui-target="#exampleModal" data-coreui-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="modal" data-coreui-target="#exampleModal" data-coreui-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn-solid theme-primary" data-coreui-toggle="modal" data-coreui-target="#exampleModal" data-coreui-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<dialog class="modal" id="exampleModal" aria-labelledby="exampleModalLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-4">
        <label for="recipient-name" class="col-form-label">Recipient:</label>
        <input type="text" class="form-control" id="recipient-name">
      </div>
      <div class="mb-4">
        <label for="message-text" class="col-form-label">Message:</label>
        <textarea class="form-control" id="message-text"></textarea>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
    <button type="button" class="btn-solid theme-primary">Send message</button>
  </div>
</dialog>
```

```js
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.coreui.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-coreui-* attributes
    const recipient = button.getAttribute('data-coreui-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}
```

### Toggle between modals

Toggle between multiple modals with some clever placement of the `data-coreui-target` and `data-coreui-toggle` attributes. When a trigger sits inside an open modal, the component swaps to the target modal seamlessly — the backdrop stays up without flashing. The swap fires `show.coreui.modal` on the target and `hide.coreui.modal` on the open modal before it changes either one; when a handler cancels either event, or one of the two modals is still opening or closing, the open modal stays as it is. For example, you could toggle a password reset modal from within an already open sign in modal.

```html
<dialog class="modal" id="exampleModalToggle" aria-labelledby="exampleModalToggleLabel">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    Show a second modal and hide this one with the button below.
  </div>
  <div class="modal-footer">
    <button class="btn-solid theme-primary" data-coreui-target="#exampleModalToggle2" data-coreui-toggle="modal">Open second modal</button>
  </div>
</dialog>
<dialog class="modal" id="exampleModalToggle2" aria-labelledby="exampleModalToggleLabel2">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    Hide this modal and show the first with the button below.
  </div>
  <div class="modal-footer">
    <button class="btn-solid theme-primary" data-coreui-target="#exampleModalToggle" data-coreui-toggle="modal">Back to first</button>
  </div>
</dialog>
<button class="btn-solid theme-primary" data-coreui-target="#exampleModalToggle" data-coreui-toggle="modal">Open first modal</button>
```

### Non-modal mode

Set the `modal` option to `false` to show the dialog without the top layer — no backdrop, no focus trap, and the rest of the page stays interactive.

```html
<dialog class="modal" id="myNonModal" data-coreui-modal="false">
  ...
</dialog>
```

### Change animation

The `--cui-modal-fade-transform` token holds the transform the modal starts from when it fades in, and ends at when it fades out.

For a zoom-in animation, set `--cui-modal-fade-transform: scale(.8)` on the modal.

### Remove animation

Modals animate by default. For modals that simply appear rather than fade in to view, add the `.modal-instant` class to your modal markup.

```html
<dialog class="modal modal-instant" aria-labelledby="...">
  ...
</dialog>
```

### Embedding YouTube videos

Embedding YouTube videos in modals requires additional JavaScript not in CoreUI to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on the `<dialog class="modal">`. A size is a request: the modal is as wide as the class asks for, capped to the viewport less its margins, so it never produces a horizontal scrollbar.

| Size | Class | Modal width
| --- | --- | --- |
| Small | `.modal-sm` | `300px` |
| Default | <span class="fg-2">None</span> | `500px` |
| Large | `.modal-lg` | `800px` |
| Extra large | `.modal-xl` | `1140px` |

Our default modal without modifier class constitutes the "medium" size modal.

```html
<dialog class="modal modal-xl">...</dialog>
<dialog class="modal modal-lg">...</dialog>
<dialog class="modal modal-sm">...</dialog>
```

<dialog class="modal modal-xl" id="exampleModalXl" aria-labelledby="exampleModalXlLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalXlLabel">Extra large modal</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
</dialog>

<dialog class="modal modal-lg" id="exampleModalLg" aria-labelledby="exampleModalLgLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalLgLabel">Large modal</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
</dialog>

<dialog class="modal modal-sm" id="exampleModalSm" aria-labelledby="exampleModalSmLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalSmLabel">Small modal</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
</dialog>

## Fullscreen modal

Another override is the option to pop up a modal that covers the user viewport, available via modifier classes that are placed on the `<dialog class="modal">`.

| Class | Availability |
| --- | --- |
| `.modal-fullscreen` | Always |
| `.modal-fullscreen-sm-down` | `576px` |
| `.modal-fullscreen-md-down` | `768px` |
| `.modal-fullscreen-lg-down` | `1024px` |
| `.modal-fullscreen-xl-down` | `1280px` |
| `.modal-fullscreen-2xl-down` | `1536px` |

```html
<!-- Full screen modal -->
<dialog class="modal modal-fullscreen-sm-down">
  ...
</dialog>
```

<dialog class="modal modal-fullscreen" id="exampleModalFullscreen" aria-labelledby="exampleModalFullscreenLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
  </div>
</dialog>

<dialog class="modal modal-fullscreen-sm-down" id="exampleModalFullscreenSm" aria-labelledby="exampleModalFullscreenSmLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalFullscreenSmLabel">Full screen below sm</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
  </div>
</dialog>

<dialog class="modal modal-fullscreen-md-down" id="exampleModalFullscreenMd" aria-labelledby="exampleModalFullscreenMdLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalFullscreenMdLabel">Full screen below md</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
  </div>
</dialog>

<dialog class="modal modal-fullscreen-lg-down" id="exampleModalFullscreenLg" aria-labelledby="exampleModalFullscreenLgLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalFullscreenLgLabel">Full screen below lg</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
  </div>
</dialog>

<dialog class="modal modal-fullscreen-xl-down" id="exampleModalFullscreenXl" aria-labelledby="exampleModalFullscreenXlLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalFullscreenXlLabel">Full screen below xl</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
  </div>
</dialog>

<dialog class="modal modal-fullscreen-2xl-down" id="exampleModalFullscreenXxl" aria-labelledby="exampleModalFullscreenXxlLabel">
  <div class="modal-header">
    <h5 class="modal-title h4" id="exampleModalFullscreenXxlLabel">Full screen below 2xl</h5>
    <button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn-solid theme-secondary" data-coreui-dismiss="modal">Close</button>
  </div>
</dialog>

## Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title, to the `<dialog>`. Additionally, you may give a description of your modal dialog with `aria-describedby`. Note that the native `<dialog>` element already provides the dialog role, `aria-modal` semantics, focus trapping, and background inertness — don't add `role`, `aria-modal`, `aria-hidden`, or `tabindex` yourself.

## Usage

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. Opening a modal blocks the page scroll, renders the native `::backdrop` behind the modal, and lets the browser trap focus inside it.

### Via data attributes

#### Toggle

Activate a modal without writing JavaScript. Set `data-coreui-toggle="modal"` on a controller element, like a button, along with a `data-coreui-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

```html
<button type="button" data-coreui-toggle="modal" data-coreui-target="#myModal">Launch modal</button>
```

#### Dismiss

Dismissal can be achieved with the `data` attribute on a button **within the modal** as demonstrated below:

```html
<button type="button" class="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
```

> While both ways to dismiss a modal are supported, keep in mind that dismissing from outside a modal does not match the [ARIA Authoring Practices Guide dialog (modal) pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). Do this at your own risk.

### Via JavaScript

Create a modal with a single line of JavaScript:

```js
const myModal = new coreui.Modal(document.getElementById('myModal'), options)
// or
const myModalAlternative = new coreui.Modal('#myModal', options)
```

### Options

Options can be passed using data attributes or JavaScript. To do this, append an option name to `data-coreui-`, such as `data-coreui-animation="{value}"`. Remember to convert the case of the option name from "_camelCase_" to "_kebab-case_" when using data attributes. For instance, you should write `data-coreui-custom-class="beautifier"` rather than `data-coreui-customClass="beautifier"`.

Starting with CoreUI 4.2.6, all components support an **experimental** reserved data attribute named `data-coreui-config`, which can contain simple component configurations as a JSON string. If an element has attributes `data-coreui-config='{"delay":50, "title":689}'` and `data-coreui-title="Custom Title"`, then the final value for `title` will be `Custom Title`, as the standard data attributes will take precedence over values specified in `data-coreui-config`. Moreover, existing data attributes can also hold JSON values like `data-coreui-delay='{"show":50, "hide":250}'`.

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `backdrop` | boolean, `'static'` | `true` | Shows the native `::backdrop` behind the modal. Alternatively, specify `static` for a backdrop which doesn't close the modal when clicked, or `false` to visually suppress it. |
| `keyboard` | boolean | `true` | Closes the modal when escape key is pressed. |
| `modal` | boolean | `true` | Opens the dialog in the browser's top layer with a backdrop and focus trapping. Set to `false` for a non-modal dialog that leaves the rest of the page interactive. |

### Methods

> #### Promises and transitions
> 
> **Methods that show or hide a component return a promise.** The promise resolves when the transition ends, so `await` continues at the same moment a `shown.coreui.*` or `hidden.coreui.*` listener runs. The methods still return immediately and never block the caller. A call on a component that is already transitioning does nothing and resolves right away.
> 
> [Refer to our JavaScript documentation for further details](https://coreui.io/bootstrap/docs/getting-started/javascript/#promises-and-transitions).

#### Passing options

Activates your content as a modal. Accepts an optional options `object`.

```js
const myModal = new coreui.Modal('#myModal', {
  keyboard: false
})
```

| Method | Description |
| --- | --- |
| `dispose` | Destroys an element's modal. (Removes stored data on the DOM element) |
| `getInstance` | *Static* method which allows you to get the modal instance associated with a DOM element. |
| `getOrCreateInstance` | *Static* method which allows you to get the modal instance associated with a DOM element, or create a new one in case it wasn't initialized. |
| `handleUpdate` | Kept for API compatibility with v5 — the native `<dialog>` needs no manual position adjustments. |
| `hide` | Manually hides a modal. **Returns a promise that resolves after the modal is hidden** (i.e. after the `hidden.coreui.modal` event occurs). |
| `show` | Manually opens a modal. **Returns a promise that resolves after the modal is shown** (i.e. after the `shown.coreui.modal` event occurs). Also, you can pass a DOM element as an argument that can be received in the modal events (as the `relatedTarget` property). (i.e. `const modalToggle = document.getElementById('toggleMyModal'); myModal.show(modalToggle)` |
| `toggle` | Manually toggles a modal. **Returns a promise that resolves after the modal is shown or hidden** (i.e. after the `shown.coreui.modal` or `hidden.coreui.modal` event occurs). |

### Events

CoreUI for Bootstrap's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<dialog class="modal">`).

| Event | Description |
| --- | --- |
| `cancel.coreui.modal` | This event is fired when the modal is dismissed with the escape key, right before hiding starts. |
| `hidden.coreui.modal` | This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete). |
| `hide.coreui.modal` | This event is fired immediately when the `hide` instance method has been called. |
| `hidePrevented.coreui.modal` | This event is fired when the modal is shown, its backdrop is `static` and a click outside of the modal is performed. The event is also fired when the escape key is pressed and the `keyboard` option is set to `false`. |
| `show.coreui.modal` | This event fires immediately when the `show` instance method is called. If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |
| `shown.coreui.modal` | This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the `relatedTarget` property of the event. |

```js
const myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.coreui.modal', event => {
  // do something...
})
```

## Customizing

### CSS variables

Modals use local CSS variables on `.modal` for enhanced real-time customization.

```scss
$modal-tokens: defaults(
  (
    --cui-modal-zindex: var(--cui-z-modal),
    --cui-modal-width: 500px,
    --cui-modal-padding-y: var(--cui-spacer),
    --cui-modal-padding-x: var(--cui-spacer),
    --cui-modal-margin: .5rem,
    --cui-modal-color: var(--cui-fg-body),
    --cui-modal-bg: var(--cui-bg-body),
    --cui-modal-border-color: var(--cui-border-color-translucent),
    --cui-modal-border-width: var(--cui-border-width),
    --cui-modal-border-radius: var(--cui-radius-5),
    --cui-modal-box-shadow: var(--cui-box-shadow-sm),
    --cui-modal-inner-border-radius: calc(var(--cui-modal-border-radius) - var(--cui-modal-border-width)),
    --cui-modal-transition-duration: .3s,
    --cui-modal-transition-timing: ease-out,
    --cui-modal-backdrop-bg: var(--cui-black),
    --cui-modal-backdrop-opacity: .5,
    --cui-modal-header-padding-y: var(--cui-modal-padding-y),
    --cui-modal-header-padding-x: var(--cui-modal-padding-x),
    --cui-modal-header-border-color: var(--cui-border-color),
    --cui-modal-header-border-width: var(--cui-border-width),
    --cui-modal-title-line-height: var(--cui-body-line-height),
    --cui-modal-footer-padding-y: var(--cui-modal-padding-y),
    --cui-modal-footer-padding-x: var(--cui-modal-padding-x),
    --cui-modal-footer-gap: .5rem,
    --cui-modal-footer-bg: transparent,
    --cui-modal-footer-border-color: var(--cui-border-color),
    --cui-modal-footer-border-width: var(--cui-border-width),
    --cui-modal-fade-transform: translate(0, -50px),
    --cui-modal-scale-transform: scale(1.02),
  ),
  $modal-tokens
);
```

### Sass maps

Each entry is one `.modal-{size}` class and the width it sets, and the map merges with your overrides — add a key to define a size, or set one to `null` to drop it:

```scss
// stylelint-disable-next-line scss/dollar-variable-default
$modal-sizes: defaults(
  (
    sm: 300px,
    lg: 800px,
    xl: 1140px,
  ),
  $modal-sizes
);
```

### Sass loops

[Responsive fullscreen modals](#fullscreen-modal) are generated via the `$breakpoints` map and a loop in `scss/_modal.scss`.

```scss
@each $breakpoint in map.keys($breakpoints) {
  $infix: breakpoint-infix($breakpoint, $breakpoints);
  // stylelint-disable-next-line scss/at-function-named-arguments
  $postfix: if(sass($infix != ""): $infix + "-down"; else: "");

  @include media-breakpoint-down($breakpoint) {
    .modal-fullscreen#{$postfix} {
      --cui-modal-width: 100vw;
      --cui-modal-margin: 0;
      --cui-modal-border-radius: 0;
      --cui-modal-border-width: 0;

      width: 100%;
      max-width: none;
      height: 100%;
      max-height: none;

      .modal-header,
      .modal-footer {
        @include border-radius(0);
      }

      .modal-body {
        overflow-y: auto;
      }
    }
  }
}
```
