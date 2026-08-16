# React Chart.js Component API

> Explore the API reference for the React Chart.js component and discover how to effectively utilize its props for customization.

## CChart

```jsx
import { CChart } from '@coreui/react-chartjs'
```

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | - | A string of all className you want applied to the base component. |
| `customTooltips` | `boolean` | `true` | Enables custom html based tooltips instead of standard tooltips. |
| `data` | `ChartData<keyof ChartTypeRegistry, (number \| [number, number] \| Point \| BubbleDataPoint \| null)[], unknown> \| ((canvas: HTMLCanvasElement) => ChartData<...>)` | - | The data object that is passed into the Chart.js chart (more info). |
| `fallbackContent` | `ReactNode` | - | A fallback for when the canvas cannot be rendered. Can be used for accessible chart descriptions. |
| `getDatasetAtEvent` | `((dataset: InteractionItem[], event: MouseEvent<HTMLCanvasElement, MouseEvent>) => void)` | - | Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event. |
| `getElementAtEvent` | `((element: InteractionItem[], event: MouseEvent<HTMLCanvasElement, MouseEvent>) => void)` | - | Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event. |
| `getElementsAtEvent` | `((elements: InteractionItem[], event: MouseEvent<HTMLCanvasElement, MouseEvent>) => void)` | - | Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event. |
| `height` | `number` | `150` | Height attribute applied to the rendered canvas. |
| `id` | `string` | - | ID attribute applied to the rendered canvas. |
| `options` | `_DeepPartialObject<CoreChartOptions<keyof ChartTypeRegistry> & ElementChartOptions<keyof ChartTypeRegistry> & PluginChartOptions<...> & DatasetChartOptions<...> & ScaleChartOptions<...>>` | - | The options object that is passed into the Chart.js chart. |
| `plugins` | `Plugin<keyof ChartTypeRegistry, AnyObject>[]` | `[]` | The plugins array that is passed into the Chart.js chart (more info) |
| `redraw` | `boolean` | `false` | If true, will tear down and redraw chart on all updates. |
| `type` | `{'line' \| 'bar' \| 'radar' \| 'doughnut' \| 'polarArea' \| 'bubble' \| 'pie' \| 'scatter'}` | `bar` | Chart.js chart type. |
| `width` | `number` | `300` | Width attribute applied to the rendered canvas. |
| `wrapper` | `boolean` | `true` | Put the chart into the wrapper div element. |
