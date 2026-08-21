# Angular Badge Component

> Angular badge component is small count and labeling component.

## Example

Badge component scales to suit the size of the parent element by using relative font sizing and `em` units.

## Contextual variations

Add any of the below-mentioned `color` props to modify the presentation of a badge.

## Pill badges

Apply the `shape="rounded-pill"` prop to make badges rounded.

## Positioned badges

Use `position` prop to place a `c-badge` component it in the corner of a link or button.

## API

### Badge Module

```ts
import { NgModule } from '@angular/core';
import { BadgeModule } from '@coreui/angular';

@NgModule({
  imports: [BadgeModule]
})
export class CustomAppModule {}
```

### Badge Standalone

```ts
import { Component } from '@angular/core';
import { BadgeComponent } from '@coreui/angular';

@Component({
  template: `<c-badge>42</c-badge>`,
  imports: [BadgeComponent],
  standalone: true
})
export class CustomAppComponent {}
```

### c-badge
_component_

```jsx
import { BadgeComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `position` | `BadgePositions` | - | Position badge in one of the corners of a link or button. |
| `shape` | `string` | - | Select the shape of the component. |
| `size` | `'sm'` | - | Size the component small. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI's themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color of the component to one of CoreUI’s themed colors. via TextColorDirective |
