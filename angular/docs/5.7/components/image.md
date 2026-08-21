# Angular Image Component

> Angular image directive with responsive behavior (so it never becomes larger than their parent element) and special styles.

## Examples
### Responsive images

Images in CoreUI for Angular are made responsive with `fluid` property. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

### Image thumbnails

In addition to our [border-radius utilities](https://coreui.io/docs/utilities/borders), you can use prop `thumbnail` to give an image a rounded 1px border appearance.

### Rounded Image

Give an image a `rounded` border appearance.

### Aligning images

Align images with the `align` property.

## API reference

### Image Module

```typescript
import { ImgModule } from '@coreui/angular';

@NgModule({
    imports: [ImgModule,]
})
export class AppModule(){}
```

### cImg
_directive_

| name | description | type | default |
| ---- | ----------- | ---- | ------- |
| `align` | Set the horizontal aligment. | ``""`` \| ``"start"`` \| ``"end"`` \| ``"center"`` | `""` |
| `fluid` | Make image responsive. | `boolean` | _false_ |
| `rounded` | Make image rounded. | `boolean` |_false_|
| `thumbnail` | Give an image a rounded 1px border appearance. | `boolean` | _false_ |
