# Angular Icons Component

> Official Angular component for CoreUI Icons and CoreUI Icons PRO.

Angular `cIcon` directive for [CoreUI Icons SVG set](https://coreui.io/icons/).

## Features
- Loading icons:
- store icons by name in Angular root service,
- directly pass SVG content,
- Reduces icons bundle size when imported as single icons,
- Full functionality of `svg` tag,
- Lean API

## Installation
If you want to use our icon directive with CoreUI Icons library you have to install two additional packages.

- CoreUI Icons library `@coreui/icons`
- CoreUI Angular Icon component `@coreui/icons-angular`

CoreUI v5.x Icons for Angular supports `ng add` to install all required dependencies for your Angular project.

```bash
ng add @coreui/icons-angular
```

#### Npm

```bash
npm install @coreui/icons@3 @coreui/icons-angular@~5.7
```

## Examples

### Single icon

Import necessary icons only, directly to your component

### All icons

Not recommended, can drastically increase your bundle size.

## Usage

### IconSet Service

1. Import IconSet Service on module level. For root module and/or other modules.

```typescript
// app NgModule (excerpt)

import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    IconModule,
...
  providers: [
    IconSetService
...
```

#### Import required icons

2. Upload required icons into IconSet Service on app component.

```typescript
// app component (excerpt)

import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';

@Component({...})
export class AppComponent {
  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cilListNumbered, cilPaperPlane, ...brandSet };
  }
...
```

#### Use icons

3. Use icons by `name` prop anywhere in your Angular application.

## API
> Use one of `name` or `content` prop as it defines the way of icon import

### cIcon
_directive_

```jsx
import { IconDirective } from '@coreui/icons-angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `cIcon` | `string \| any[] \| string[]` | `undefined` | The icon itself: either its SVG content or a `[viewBox, content]` pair. Use this or `name`, as it decides how the icon is imported. |
| `customClasses` | `NgCssClass` | - | Overwrites the default `.icon` classes. |
| `height` | `string` | - | Sets the SVG `height` attribute. |
| `name` | `string` | `''` | Name of an SVG icon stored in `IconSetService`. |
| `pointer-events` | `IPointerEvents` | `'none'` | Sets the CSS `pointer-events` property of the icon. |
| `role` | `string` | `'img'` | Sets the ARIA role of the icon. |
| `size` | `string` | `''` | Size of the icon. |
| `title` | `string` | - | Sets the SVG `title` tag. |
| `viewBox` | `string` | `undefined` | Sets the SVG `viewBox` attribute. |
| `width` | `string` | - | Sets the SVG `width` attribute. |
| `xmlns` | `string` | `'http://www.w3.org/2000/svg'` | Sets the SVG `xmlns` attribute. |

### IconSet
_service_

##### Props

| property | type | default | description|
| --- | --- | --- | --- |
| `getIcon()` | `(string): any[] ` | | returns an icon |
| `icons` | `IIconSet` | undefined | IconSet object |
| `iconNames` | `[key: string]: string` | _undefined_ | returns icon name from key |

## Available icons

CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons
are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or
mobile app.
