# Angular Modal Component

> Angular Modal component offers a lightweight, multi-purpose popup to add dialogs to yours. Learn how to customize Angular CoreUI Modals easily. Multiple examples and tutorial.

## Examples

### Modal components

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

### Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

### Static backdrop

If you set a `backdrop` to `static`, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it.

### Portal

By default, `c-modal` renders in place in the DOM, moved on top of everything else purely through `position: fixed` and stacking. When an ancestor establishes its own containing block (e.g. via `transform`, `filter`, or `perspective`), it traps that fixed positioning and clips the modal. Set the `portal` input to move the modal's host element into `container` (an `Element`, a function returning one, or `document.body` by default) while it's visible, and restore it to its original position on close.

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

### Scrollable

You can also create a scrollable modal that allows scroll the modal body by adding `scrollable` prop.

### Vertically centered

Add `alignment="center` to `c-modal` for vertically centered modal.

Centered scrollable

### Tooltips and popovers

`cTooltip` and `cPopover` can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.
A tooltip or popover shown inside a dialog is dismissed on its own: the first <kbd>Escape</kbd> closes the popover and a subsequent one closes the dialog.

### Toggle between modals

Toggle between multiple modals with `cModalToggle` values juggling. __Please note multiple modals cannot be opened at the same time__ — this method simply toggles between two separate modals.

### Optional sizes

Modals have three optional sizes, available via modifier props be placed on a `c-modal`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

| Size | Property value | Modal max-width |
| ---- | ----------- | ---- |
| Small | `sm` | `300px` |
| Default | _none_ | `500px` |
| Large | `lg` | `800px` |
| Extra Large | `xl` | `1140px` |

### Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via property `fullscreen`.

| `fullscreen` value | Availability |
| ---- | ----------- |
| `true` | _Always_ |
| `sm` | _Below_ `576px` |
| `md` | _Below_ `768px` |
| `lg` | _Below_ `992px` |
| `xl` | _Below_ `1200px` |
| `xxl` | _Below_ `1400px` |

## API reference

### Modal Module

```typescript
import { ModalModule } from '@coreui/angular';

@NgModule({
    imports: [ModalModule,]
})
export class AppModule() { }
```

### c-modal
_component_

```jsx
import { ModalComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alignment` | `'top' \| 'center'` | `'top'` | Align the modal in the center or top of the screen. |
| `ariaModal` | `boolean` | `null` | Set aria-modal html attr for modal |
| `backdrop` | `boolean \| 'static'` | `true` | Apply a backdrop on the body while the modal is open. |
| `container` | `Element \| object \| null` | `document.body` | Appends the angular modal to a specific element. You can pass an HTML element or function that returns a single element. By default, `document.body`. |
| `fullscreen` | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `undefined` | Set modal to cover the entire user viewport. |
| `id` | `string` | `undefined` | HTML id attribute, required for programmatic visibility change. |
| `keyboard` | `boolean` | `true` | Closes the modal when the escape key is pressed. |
| `portal` | `boolean` | `false` | Generates modal using a portal |
| `role` | `string` | `'dialog'` | Default role for modal |
| `scrollable` | `boolean` | `false` | Create a scrollable modal that allows scrolling the modal body. |
| `size` | `'sm' \| 'lg' \| 'xl'` | `undefined` | Size the component small, large, or extra large. |
| `transition` | `boolean` | `true` | Remove animation to create a modal that simply appears rather than fades in to view. |
| `visible` | `boolean` | `false` | Toggle the visibility of modal component. |

### Events

| Name | Description |
| --- | --- |
| `visibleChange` | Event triggered on modal dismiss. |

### c-modal-body
_component_

### c-modal-footer
_component_

### c-modal-header
_component_

### cModalTittle
_directive_

### cModalToggle
_directive_

```jsx
import { ModalToggleDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cModalToggle` | `string` | `undefined` | Html id attr of modal to dismiss. |
