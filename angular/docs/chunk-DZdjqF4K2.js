import{$t as Uv,Br as kw,Fi as v$1,G as Ht,N as Ev,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd,x as Ce}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Xi as y$1}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f$1}from"./chunk-CircK-BE.js";import{t as kl}from"./chunk-DMFZ2sIX2.js";var f=class r{constructor(){this.data={datasets:[{label:`Scatter Dataset 1`,data:[{x:-10,y:0},{x:0,y:10},{x:10,y:5},{x:.5,y:5.5}],borderColor:`rgb(222,99,156)`,backgroundColor:`rgb(231,25,69)`},{label:`Scatter Dataset 2`,data:[{x:-1,y:6},{x:-4,y:7},{x:9,y:4},{x:.7,y:1.7}],borderColor:`rgb(133,178,56)`,backgroundColor:`rgb(124,213,17)`}]}}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts07`]],decls:1,vars:1,consts:[[`type`,`scatter`,3,`data`]],template:function(t,n){t&1&&lv(0,`c-chart`,0),t&2&&cv(`data`,n.data)},dependencies:[kl],encapsulation:2})}};var g=class r{constructor(){this.data={datasets:[{label:`First Dataset`,data:[{x:20,y:30,r:15},{x:40,y:10,r:10}],backgroundColor:`rgb(255, 99, 132)`},{label:`Second Dataset`,data:[{x:18,y:26,r:27},{x:23,y:16,r:42}],backgroundColor:`rgb(99,138,255)`},{label:`Third Dataset`,data:[{x:27,y:22,r:9},{x:26,y:18,r:24}],backgroundColor:`rgb(71,208,66)`}]}}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts06`]],decls:1,vars:1,consts:[[`type`,`bubble`,3,`data`]],template:function(t,n){t&1&&lv(0,`c-chart`,0),t&2&&cv(`data`,n.data)},dependencies:[kl],encapsulation:2})}};var y=class r{constructor(){this.data={labels:[`Red`,`Green`,`Yellow`,`Grey`,`Blue`],datasets:[{data:[11,16,7,3,14],backgroundColor:[`#FF6384`,`#4BC0C0`,`#FFCE56`,`#E7E9ED`,`#36A2EB`]}]}}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts05`]],decls:1,vars:1,consts:[[`type`,`polarArea`,3,`data`]],template:function(t,n){t&1&&lv(0,`c-chart`,0),t&2&&cv(`data`,n.data)},dependencies:[kl],encapsulation:2})}};var b=class r{constructor(){this.data={labels:[`VueJs`,`EmberJs`,`ReactJs`,`Angular`],datasets:[{backgroundColor:[`#41B883`,`#E46651`,`#00D8FF`,`#DD1B16`],data:[40,20,80,10]}]}}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts04`]],decls:1,vars:1,consts:[[`type`,`doughnut`,3,`data`]],template:function(t,n){t&1&&lv(0,`c-chart`,0),t&2&&cv(`data`,n.data)},dependencies:[kl],encapsulation:2})}};var w=class r{constructor(){this.data={labels:[`Eating`,`Drinking`,`Sleeping`,`Designing`,`Coding`,`Cycling`,`Running`],datasets:[{label:`My First dataset`,backgroundColor:`rgba(220, 220, 220, 0.2)`,borderColor:`rgba(220, 220, 220, 1)`,pointBackgroundColor:`rgba(220, 220, 220, 1)`,pointBorderColor:`#fff`,pointHoverRadius:15,data:[65,59,90,81,56,55,40]},{label:`My Second dataset`,backgroundColor:`rgba(151, 187, 205, 0.2)`,borderColor:`rgba(151, 187, 205, 1)`,pointBackgroundColor:`rgba(151, 187, 205, 1)`,pointBorderColor:`#fff`,pointHoverRadius:15,data:[28,48,40,19,96,27,100]}]}}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts03`]],decls:1,vars:1,consts:[[`type`,`radar`,3,`data`]],template:function(t,n){t&1&&lv(0,`c-chart`,0),t&2&&cv(`data`,n.data)},dependencies:[kl],encapsulation:2})}};var x=class r{constructor(){this.data={labels:[`January`,`February`,`March`,`April`,`May`,`June`,`July`],datasets:[{label:`GitHub Commits`,backgroundColor:`#f87979`,data:[40,20,12,39,10,80,40]}]}}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts02`]],decls:1,vars:1,consts:[[`type`,`bar`,3,`data`]],template:function(t,n){t&1&&lv(0,`c-chart`,0),t&2&&cv(`data`,n.data)},dependencies:[kl],encapsulation:2})}};var v=class r{constructor(){this.#e=v$1(Ce);this.#t=void 0;this.data=Ht({labels:[`January`,`February`,`March`,`April`,`May`,`June`,`July`],datasets:[{label:`My First dataset`,backgroundColor:`rgba(220, 220, 220, 0.2)`,borderColor:`rgba(220, 220, 220, 1)`,pointBackgroundColor:`rgba(220, 220, 220, 1)`,pointBorderColor:`#fff`,data:[40,20,12,39,10,80,40]},{label:`My Second dataset`,backgroundColor:`rgba(151, 187, 205, 0.2)`,borderColor:`rgba(151, 187, 205, 1)`,pointBackgroundColor:`rgba(151, 187, 205, 1)`,pointBorderColor:`#fff`,data:[50,12,28,29,7,25,60]}]});this.#e.onDestroy(()=>{clearTimeout(this.#t)})}#e;#t;handleChartRef(p){p&&(console.log(`handleChartRef`,p),this.#t=setTimeout(()=>{this.data.update(t=>(t.labels?.push(`August`),t.datasets[0].data.push(60),t.datasets[1].data.push(20),t)),p?.update(),this.#t=void 0},5e3))}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts01`]],decls:1,vars:1,consts:[[`type`,`line`,3,`chartRef`,`data`]],template:function(t,n){t&1&&(Rs(0,`c-chart`,0),Ev(`chartRef`,function(B){return n.handleChartRef(B)}),gd()),t&2&&cv(`data`,n.data())},dependencies:[kl],encapsulation:2})}};var T=`<pre class="highlight" markdown>
\`\`\`bash
ng add @coreui/angular-chartjs@5.5
\`\`\`
</pre>
---
### npm

Your other option is to use npm install directly.
<pre class="highlight" markdown>
\`\`\`bash
npm install chart.js@4
npm install @coreui/chartjs@4
npm install @coreui/angular-chartjs@5.5
\`\`\`
</pre>
`;var F="```bash\nyarn add chart.js\nyarn add @coreui/chartjs\nyarn add @coreui/angular-chartjs\n```\n";var N=`\`\`\`typescript
import { ChartjsModule } from '@coreui/angular-chartjs';

@NgModule({
  imports: [
    ChartjsModule,
})
export class AppModule(){}
\`\`\`
`;var O=()=>[`charts/examples/charts01.component.html`,`charts/examples/charts01.component.ts`];var H=()=>[`charts/examples/charts02.component.html`,`charts/examples/charts02.component.ts`];var U=()=>[`charts/examples/charts03.component.html`,`charts/examples/charts03.component.ts`];var L=()=>[`charts/examples/charts04.component.html`,`charts/examples/charts04.component.ts`];var Y=()=>[`charts/examples/charts05.component.html`,`charts/examples/charts05.component.ts`];var G=()=>[`charts/examples/charts06.component.html`,`charts/examples/charts06.component.ts`];var q=()=>[`charts/examples/charts07.component.html`,`charts/examples/charts07.component.ts`];var P=class r{constructor(){this.npm=T;this.yarn=F;this.usage=N;this.headService=v$1(y$1);this.name=`Charts`;this.title=`Angular Charts Component`;this.description=`CoreUI Angular wrapper for Chart.js 4.x, the most popular charting library.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(t){return new(t||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-charts-docs`]],decls:57,vars:24,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[`stackblitz`,``,`componentName`,`Charts01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Charts02Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Charts03Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Charts04Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Charts05Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Charts06Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Charts07Component`,3,`files`,`name`],[1,`api-table`]],template:function(t,n){t&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  ---
  ## Installation
  If you want to use our Chart.js Angular wrapper you have to install an additional package.

  - Chart.js v4.x library \`chart.js\`
  - CoreUI Chart.js tooltip plugin and styles \`@coreui/chartjs\`
  - CoreUI Angular Chart.js component \`@coreui/angular-chartjs\`

  ### Angular CLI

  CoreUI v5.x Chartjs for Angular supports \`ng add\` to install all required dependencies for your Angular project.

`),gd(),Rs(7,`pre`,2),RM(8,"```bash\nng add @coreui/angular-chartjs@5.7\n```\n"),gd(),Rs(9,`markdown`),RM(10,`
  ### NPM

  Your other option is to use \`npm install\` directly.
`),gd(),Rs(11,`pre`,2),RM(12,"```bash\nnpm install chart.js@4\nnpm install @coreui/chartjs@4\nnpm install @coreui/angular-chartjs@5.7\n```\n"),gd(),Rs(13,`markdown`),RM(14,`

  ### Scss

  Import custom CoreUI tooltip styles for Chart.js:
`),gd(),Rs(15,`pre`,2),RM(16,'```scss\n@use "@coreui/chartjs/scss/coreui-chartjs";\n```\n'),gd(),Rs(17,`markdown`),RM(18,`
  ---

  ## Chart types

  ### Line Chart

  A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets. [Line Chart properties](https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties)
`),gd(),Rs(19,`docs-example`,3),lv(20,`docs-charts01`),gd(),Rs(21,`markdown`),RM(22,`

  ---

  ### Bar Chart

  A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. [Bar Chart properties](https://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties)
`),gd(),Rs(23,`docs-example`,4),lv(24,`docs-charts02`),gd(),Rs(25,`markdown`),RM(26,`

  ---

  ### Radar Chart

  A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets. [Radar Chart properties](https://www.chartjs.org/docs/latest/charts/radar.html#dataset-properties)
`),gd(),Rs(27,`docs-example`,5),lv(28,`docs-charts03`),gd(),Rs(29,`markdown`),RM(30,`

  ---

  ### Doughnut and Pie Charts

  Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data. [Doughnut and Pie Charts properties](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)
`),gd(),Rs(31,`docs-example`,6),lv(32,`docs-charts04`),gd(),Rs(33,`markdown`),RM(34,`

  ---

  ### Polar Area Chart

  Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. [Polar Area Chart properties](https://www.chartjs.org/docs/latest/charts/polar.html#dataset-properties)
`),gd(),Rs(35,`docs-example`,7),lv(36,`docs-charts05`),gd(),Rs(37,`markdown`),RM(38,`

  ---

  ### Bubble Chart

  A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. [Bubble Chart properties](https://www.chartjs.org/docs/latest/charts/bubble.html#dataset-properties)
`),gd(),Rs(39,`docs-example`,8),lv(40,`docs-charts06`),gd(),Rs(41,`markdown`),RM(42,`

  ---

  ### Scatter Chart

  Scatter charts are based on basic line charts with the x axis changed to a linear axis. To use a scatter chart, data must be passed as objects containing X and Y properties. The example below creates a scatter chart with 4 points. [Scatter Chart properties](https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties)
`),gd(),Rs(43,`docs-example`,9),lv(44,`docs-charts07`),gd(),Rs(45,`markdown`),RM(46,`

  ---

  ## API

`),gd(),Rs(47,`div`,2),RM(48),gd(),Rs(49,`markdown`),RM(50,`
  ---

  ### c-chart
  _component_

  \`exportAs: cChart\`

  ##### Inputs:

  `),Rs(51,`div`,10),RM(52,"\n\n    |name|description|type|default|\n    |---|---|---|---|\n    |`customTooltips`|Enables custom html based tooltips|`boolean`|_true_\n    |`data`|The data passed to Chart.js chart|[`ChartData`](https://www.chartjs.org/docs/latest/api/interfaces/ChartData.html)|**required**\n    |`options`|The options object that is passed into the Chart.js chart|[`ChartOptions`](https://www.chartjs.org/docs/latest/general/options.html)|_undefined_\n    |`plugins`|The plugins array that is passed into the Chart.js chart|[`PluginOptionsByType`](https://www.chartjs.org/docs/latest/api/interfaces/PluginOptionsByType.html)|_undefined_\n    |`redraw`|If true, will tear down and redraw chart on all updates|`boolean`|_false_\n    |`type`|Chart.js chart type.|[`keyof ChartTypeRegistry`](https://www.chartjs.org/docs/latest/api/interfaces/ChartTypeRegistry.html)|_bar_\n    |`wrapper`|Put the chart into the wrapper with `display: block`.|`boolean`|_true_\n    |`height`|Height attribute applied to the rendered canvas (px)|`number`|_undefined_\n    |`width`|Width attribute applied to the rendered canvas (px)|`number`|_undefined_\n    |`id`|Html id attribute applied to the rendered canvas|`string`|_undefined_\n\n  "),gd(),RM(53,`

  ---

  ##### Outputs:

  `),Rs(54,`div`,10),RM(55,`

    |name|description|
    |---|---|
    |\`chartRef\`|Returns Chart reference when instantiated. Allows direct access to Chart API.
    |\`getDatasetAtEvent\`|Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.
    |\`getElementAtEvent\`|Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.
    |\`getElementsAtEvent\`|Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.

  `),gd(),RM(56,`

  ---

  ## See also

  - Chart.js docs [https://www.chartjs.org/docs/](https://www.chartjs.org/docs/)
`),gd()),t&2&&(kw(),Uv(n.title),kw(2),Uv(n.description),kw(16),cv(`files`,KM(17,O))(`name`,n.title),kw(4),cv(`files`,KM(18,H))(`name`,n.title),kw(4),cv(`files`,KM(19,U))(`name`,n.title),kw(4),cv(`files`,KM(20,L))(`name`,n.title),kw(4),cv(`files`,KM(21,Y))(`name`,n.title),kw(4),cv(`files`,KM(22,G))(`name`,n.title),kw(4),cv(`files`,KM(23,q))(`name`,n.title),kw(5),Td(` `,n.usage,`
`))},dependencies:[nr,f$1,ie,v,x,w,b,y,g,f],encapsulation:2})}};export{P as ChartsDocsComponent};