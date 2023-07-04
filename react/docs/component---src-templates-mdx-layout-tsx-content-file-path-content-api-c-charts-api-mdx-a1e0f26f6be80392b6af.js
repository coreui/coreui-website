"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7088],{23236:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(45392),r=n(2784);function a(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CChartBar } from '@coreui/react-chartjs'\n// or\nimport CChartBar from '@coreui/react-chartjs/src/CCharts'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"customTooltips")),r.createElement(t.td,null,"Enables custom html based tooltips instead of standard tooltips."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"data")),r.createElement(t.td,null,"The data object that is passed into the Chart.js chart (more info)."),r.createElement(t.td,null,r.createElement(t.code,null,"ChartData<keyof ChartTypeRegistry, (number")," | ",r.createElement(t.code,null,"ScatterDataPoint")," | ",r.createElement(t.code,null,"BubbleDataPoint)[], unknown>")," | ",r.createElement(t.code,null,"((canvas: HTMLCanvasElement) => ChartData<...>)")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"fallbackContent")),r.createElement(t.td,null,"A fallback for when the canvas cannot be rendered. Can be used for accessible chart descriptions."),r.createElement(t.td,null,r.createElement(t.code,null,"React.ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"getDatasetAtEvent")),r.createElement(t.td,null,"Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event."),r.createElement(t.td,null,r.createElement(t.code,null,"(dataset: InteractionItem[], event: React.MouseEvent<HTMLCanvasElement>) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"getElementAtEvent")),r.createElement(t.td,null,"Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event."),r.createElement(t.td,null,r.createElement(t.code,null,"(element: InteractionItem[], event: React.MouseEvent<HTMLCanvasElement>) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"getElementsAtEvent")),r.createElement(t.td,null,"Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event."),r.createElement(t.td,null,r.createElement(t.code,null,"(elements: InteractionItem[], event: React.MouseEvent<HTMLCanvasElement>) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"height")),r.createElement(t.td,null,"Height attribute applied to the rendered canvas."),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"150")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"id")),r.createElement(t.td,null,"ID attribute applied to the rendered canvas."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"options")),r.createElement(t.td,null,"The options object that is passed into the Chart.js chart."),r.createElement(t.td,null,r.createElement(t.code,null,"_DeepPartialObject<CoreChartOptions<keyof ChartTypeRegistry> & ElementChartOptions<keyof ChartTypeRegistry> & PluginChartOptions<...> & DatasetChartOptions<...> & ScaleChartOptions<...>>")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"plugins")),r.createElement(t.td,null,"The plugins array that is passed into the Chart.js chart (more info)"),r.createElement(t.td,null,r.createElement(t.code,null,"Plugin<keyof ChartTypeRegistry, AnyObject>[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"redraw")),r.createElement(t.td,null,"If true, will tear down and redraw chart on all updates."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"false")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"width")),r.createElement(t.td,null,"Width attribute applied to the rendered canvas."),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"300")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"wrapper")),r.createElement(t.td,null,"Put the chart into the wrapper div element."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},u=n(1017),o=n(18722);const m=e=>{let{children:t}=e;return r.createElement(l.Zo,{components:{ScssDocs:e=>r.createElement(o.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(u.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(o.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(u.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return r.createElement(o.UW,l,n&&r.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return r.createElement(o.en,n,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(m,e,r.createElement(c,e))}m.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return u},ah:function(){return a}});var l=n(2784);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||c:a(e),l.createElement(r.Provider,{value:u},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-charts-api-mdx-a1e0f26f6be80392b6af.js.map