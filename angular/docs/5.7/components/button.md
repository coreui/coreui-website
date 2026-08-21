# Angular Button Component

> Angular button directive for actions in tables, forms, cards, and more. CoreUI for Angular provides various styles, states, and size. Ready to use and easy to customize.

## Examples

CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.

> Conveying meaning to assistive technologies  Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.

## Disable text wrapping

If you don't want the button text to wrap, you can add the `.text-nowrap` class to the `<button>`. In Sass, you can set `$btn-white-space: nowrap` to disable text wrapping for each button.

## Button directive

The `cButton` directive are designed for `<button>` ,  `<a>`  or  `<input>` elements (though some browsers may apply a slightly different rendering).

If you're using `cButton` directive as `<a>` elements that are used to trigger functionality ex. collapsing content, these links should be given a `role="button"` to adequately communicate their meaning to assistive technologies such as screen readers.

## Outline buttons

If you need a button, but without the strong background colors. Set `variant="outline"` prop to remove all background colors.

## Ghost buttons

If you need a ghost variant of button, set `variant="ghost"` prop to remove all background colors.

## Sizes

Larger or smaller buttons? Add `size="lg"` or `size="sm"` for additional sizes.

## Shapes

### Pill buttons

### Square buttons

## Disabled state

Add the `disabled` boolean prop to any `<button>` component to make buttons look inactive. Disabled button has `pointer-events: none` applied to, disabling hover and active states from triggering.

Disabled buttons using the `<a>` component act a little different:

`<a>`s don't support the `disabled` attribute, so CoreUI has to add `.disabled` class to make buttons look inactive. CoreUI also has to add to the disabled button component `aria-disabled="true"` attribute to show the state of the component to assistive technologies.

> Link functionality caveat The .disabled class uses pointer-events: none to try to disable the link functionality of &#x3C;a>s, but that CSS property is not yet standardized. In addition, even in browsers that do support pointer-events: none, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to aria-disabled="true", also include a tabindex="-1" attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether.

## Block buttons

Create buttons that span the full width of a parent—by using utilities.

Here we create a responsive variation, starting with vertically stacked buttons until the `md` breakpoint, where `.d-md-block` replaces the `.d-grid` class, thus nullifying the `gap-2` utility. Resize your browser to see them change.

You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use `.col-6`. Center it horizontally with `.mx-auto`, too.

Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.

## API

### Button Module

```typescript
import { ButtonModule } from '@coreui/angular';

@NgModule({
  imports: [ButtonModule,]
})
export class AppModule(){}
```

### cButton
_directive_

```jsx
import { ButtonDirective } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | `false` | Toggle the active state for the component |
| `color` | `string` | `'primary'` | Sets the color context of the component to one of CoreUI’s themed colors |
| `disabled` | `boolean` | `false` | Toggle the disabled state for the component. |
| `shape` | `string` | - | Select the shape of the component. |
| `size` | `string` | `''` | Size the component small or large. |
| `tabindex` | `number` | `undefined` | The tabindex attribute specifies the tab order of an element (when the "tab" button is used for navigating). |
| `type` | `ButtonType` | `'button'` | Specifies the type of button. Always specify the type attribute for the `<button>` element. Different browsers may use different default types for the `<button>` element. |
| `variant` | `'ghost' \| 'outline'` | - | Set the button variant to an outlined button or a ghost button. |
