# Angular Avatar Component

> Angular Avatar component can be used to display circular user profile pictures. Avatar can be used to portray people or objects. It supports images, icons, or letters.

## Image avatars

## Letter avatars

## Rounded avatars

Use the `shape="rounded"` prop to make avatars squared with rounded corners.

## Square avatars

Use the `shape="rounded-0"` prop to make avatars squared

## Sizes

Fancy larger or smaller avatar? Add `size="xl"`, `size="lg"`, `size="md"` or `size="sm"` for additional sizes.

## Avatars with status

## Customizing

### CSS variables
Angular multi selects use local CSS variables on `.avatar` for enhanced real-time customization. Values for
the CSS variables are set via Sass, so Sass customization is still supported, too.

```scss
--cui-avatar-width: #{$avatar-width};
--cui-avatar-height: #{$avatar-height};
--cui-avatar-font-size: #{$avatar-font-size};
--cui-avatar-border-radius: #{$avatar-border-radius};
--cui-avatar-status-width: #{$avatar-status-width};
--cui-avatar-status-height: #{$avatar-status-height};
--cui-avatar-status-border-radius: #{$avatar-status-border-radius};
```

#### How to use CSS variables

```ts
const vars = {
'--my-css-var': 10,
'--my-another-css-var': "red"
}
```

```html
<div [ngStyle]="vars"></div>
```

### SASS variables

```scss
$avatar-width:                 2rem;
$avatar-height:                2rem;
$avatar-font-size:             .8rem;
$avatar-border-radius:         50em;
$avatar-status-width:          .5rem;
$avatar-status-height:         .5rem;
$avatar-status-border-radius:  50em;
$avatar-transition:            margin .15s;

$avatar-sizes: (
  sm: (
    width: 1.5rem,
    height: 1.5rem,
    font-size: .6rem,
    status-width: .4rem,
    status-height: .4rem
  ),
  md: (
    width: 2.5rem,
    height: 2.5rem,
    font-size: 1rem,
    status-width: .7rem,
    status-height: .7rem
  ),
  lg: (
    width: 3rem,
    height: 3rem,
    font-size: 1.2rem,
    status-width: .8rem,
    status-height: .8rem
  ),
  xl: (
    width: 4rem,
    height: 4rem,
    font-size: 1.6rem,
    status-width: 1rem,
    status-height: 1rem
  ),
);
```

## API

### Avatar Module

```typescript
import { AvatarModule } from '@coreui/angular';

@NgModule({
  imports: [AvatarModule,]
})
export class AppModule(){}
```

### c-avatar
_component_

```jsx
import { AvatarComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `alt` | `string` | `''` | The alt attribute for the img element alternate text. |
| `color` | `string` | - | Sets the background color context of the component to one of CoreUI’s themed colors. |
| `shape` | `string` | - | Select the shape of the component. |
| `size` | `Omit<string, 'xxl'>` | `''` | Size the component small, large, or extra large. |
| `src` | `string` | - | The src attribute for the img element. |
| `status` | `string` | - | Sets the color context of the status indicator to one of CoreUI’s themed colors. |
| `textColor` | `string` | - | Sets the text color of the component to one of CoreUI’s themed colors via TextColorDirective |
