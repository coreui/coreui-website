# Angular Widgets

> Angular widget components give information about the app statistics.

> See: how to import required CoreUI Icons

## Examples

### Widget Stats A

Create custom Widget variants with `cTemplateId`:
- `widgetValueTemplate`
- `widgetActionTemplate`
- `widgetChartTemplate`

### Widget Stats B

### Widget Stats C

- `widgetIconTemplate`
- `widgetProgressTemplate`

### Widget Stats D

### Widget Stats E

### Widget Stats F

- `widgetIconTemplate`
- `widgetFooterTemplate`

## API reference

### Widgets Module

```typescript
import { DropdownModule, ProgressModule, SharedModule, WidgetsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

@NgModule({
    imports: [
      DropdownModule,
      ProgressModule,
      SharedModule,
      WidgetsModule,
      IconModule,
      ChartjsModule
    ]
})
export class AppModule() { }
```

### c-widget-stat-a
_component_

```jsx
import { WidgetStatAComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |
| `title` | `string` | - | Title of the widget to display |
| `value` | `string` | - | Value for your widget to display |

### c-widget-stat-b
_component_

```jsx
import { WidgetStatBComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `inverse` | `boolean` | `false` | Invert colors from their default dark shade. |
| `text` | `string` | - | Helper text for your widget. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |
| `title` | `string` | - | Title of the widget to display |
| `value` | `string` | - | Value for your widget to display |

### c-widget-stat-c
_component_

```jsx
import { WidgetStatCComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `icon` | `string` | - | Icon for your component. |
| `inverse` | `boolean` | `false` | Invert colors from their default dark shade. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |
| `title` | `string` | - | Title of the widget to display |
| `value` | `string \| number` | - | Value for your widget to display |

### c-widget-stat-d
_component_

```jsx
import { WidgetStatDComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |
| `values` | `WidgetStatDValue[]` | - | Values and subtitles for your component. |

### c-widget-stat-e
_component_

```jsx
import { WidgetStatEComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |
| `title` | `string` | - | Title of the widget to display |
| `value` | `string \| number` | - | Value for your widget to display |

### c-widget-stat-f
_component_

```jsx
import { WidgetStatFComponent } from '@coreui/angular'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | - | Sets the color context of the component to one of CoreUI’s themed colors. |
| `footer` | `string` | - | Footer for your widget |
| `icon` | `string` | - | Icon for your widget |
| `padding` | `boolean` | `false` | Set padding of your component. |
| `textBgColor` | `string` | - | Sets the component's color scheme to one of CoreUI themed colors, ensuring the text color contrast adheres to the WCAG 4.5:1 contrast ratio standard for accessibility. via TextBgColorDirective |
| `textColor` | `string` | - | Sets the text color context of the component to one of CoreUI’s themed colors. via TextColorDirective |
| `title` | `string` | - | Title of the widget to display |
| `value` | `string \| number` | - | Value for your widget to display |
