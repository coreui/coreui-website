import{$t as Uv,Br as kw,Fi as v,G as Ht,N as Ev,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Xi as y$1,ri as xm}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";import{t as m}from"./chunk-BSCFwVWW.js";var C=class m{constructor(){this.loading=Ht(new Array(4))}onClick(t){this.loading()[t]?(clearTimeout(this.loading()[t]),this.loading.update(n=>(n[t]=void 0,[...n]))):this.loading.update(n=>(n[t]=setTimeout(()=>{this.loading.update(e=>(e[t]=void 0,[...e]))},3e3),[...n]))}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=D_({type:m,selectors:[[`docs-loading-button03`]],decls:6,vars:3,consts:[[`cLoadingButton`,``,`spinnerType`,`grow`,`disabledOnLoading`,``,3,`click`,`loading`],[`cLoadingButton`,``,`spinnerType`,`grow`,`disabledOnLoading`,``,`variant`,`ghost`,3,`click`,`loading`],[`cLoadingButton`,``,`spinnerType`,`grow`,`disabledOnLoading`,``,`variant`,`outline`,3,`click`,`loading`]],template:function(n,e){n&1&&(Rs(0,`button`,0),Ev(`click`,function(){return e.onClick(0)}),RM(1,`Submit`),gd(),Rs(2,`button`,1),Ev(`click`,function(){return e.onClick(1)}),RM(3,`Submit`),gd(),Rs(4,`button`,2),Ev(`click`,function(){return e.onClick(2)}),RM(5,`Submit`),gd()),n&2&&(cv(`loading`,e.loading()[0]),kw(2),cv(`loading`,e.loading()[1]),kw(2),cv(`loading`,e.loading()[2]))},dependencies:[xm],encapsulation:2})}};var _=class m{constructor(){this.loading=Ht(new Array(4))}onClick(t){this.loading()[t]?(clearTimeout(this.loading()[t]),this.loading.update(n=>(n[t]=void 0,[...n]))):this.loading.update(n=>(n[t]=setTimeout(()=>{this.loading.update(e=>(e[t]=void 0,[...e]))},3e3),[...n]))}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=D_({type:m,selectors:[[`docs-loading-button02`]],decls:6,vars:6,consts:[[`cLoadingButton`,``,`color`,`info`,`spinnerType`,`grow`,3,`click`,`loading`],[`cLoadingButton`,``,`color`,`success`,`spinnerType`,`grow`,`variant`,`ghost`,3,`click`,`loading`],[`cLoadingButton`,``,`color`,`warning`,`spinnerType`,`grow`,`variant`,`outline`,3,`click`,`loading`]],template:function(n,e){n&1&&(Rs(0,`button`,0),Ev(`click`,function(){return e.onClick(0)}),RM(1),gd(),Rs(2,`button`,1),Ev(`click`,function(){return e.onClick(1)}),RM(3),gd(),Rs(4,`button`,2),Ev(`click`,function(){return e.onClick(2)}),RM(5),gd()),n&2&&(cv(`loading`,e.loading()[0]),kw(),Td(` `,e.loading()[0]?`Cancel`:`Upload`,`
`),kw(),cv(`loading`,e.loading()[1]),kw(),Td(` `,e.loading()[1]?`Cancel`:`Upload`,`
`),kw(),cv(`loading`,e.loading()[2]),kw(),Td(` `,e.loading()[2]?`Cancel`:`Upload`,`
`))},dependencies:[xm],encapsulation:2,changeDetection:1})}};var y=class m{constructor(){this.loading=Ht(new Array(4))}onClick(t){this.loading()[t]?(clearTimeout(this.loading()[t]),this.loading.update(n=>(n[t]=void 0,[...n]))):this.loading.update(n=>(n[t]=setTimeout(()=>{this.loading.update(e=>(e[t]=void 0,[...e]))},3e3),[...n]))}onChange(t,n){console.log(t,n)}static{this.ɵfac=function(n){return new(n||m)}}static{this.ɵcmp=D_({type:m,selectors:[[`docs-loading-button01`]],decls:6,vars:3,consts:[[`cLoadingButton`,``,3,`click`,`loadingChange`,`loading`],[`cLoadingButton`,``,`variant`,`ghost`,3,`click`,`loading`],[`cLoadingButton`,``,`variant`,`outline`,3,`click`,`loading`]],template:function(n,e){n&1&&(Rs(0,`button`,0),Ev(`click`,function(){return e.onClick(0)})(`loadingChange`,function(I){return e.onChange(I,0)}),RM(1,`Submit`),gd(),Rs(2,`button`,1),Ev(`click`,function(){return e.onClick(1)}),RM(3,`Submit`),gd(),Rs(4,`button`,2),Ev(`click`,function(){return e.onClick(2)}),RM(5,`Submit`),gd()),n&2&&(cv(`loading`,e.loading()[0]),kw(2),cv(`loading`,e.loading()[1]),kw(2),cv(`loading`,e.loading()[2]))},dependencies:[xm],encapsulation:2})}};var D=`\`\`\`typescript
import { LoadingButtonModule } from '@coreui/angular';

@NgModule({
  imports: [LoadingButtonModule,]
})
export class AppModule() { }
\`\`\`
`;var N=()=>[`components/loading-button/examples/loading-button01.component.html`,`components/loading-button/examples/loading-button01.component.ts`];var O=()=>[`components/loading-button/examples/loading-button02.component.html`,`components/loading-button/examples/loading-button02.component.ts`];var A=()=>[`components/loading-button/examples/loading-button03.component.html`,`components/loading-button/examples/loading-button03.component.ts`];var M=class m$1{constructor(){this.usage=D;this.headService=v(y$1);this.name=`Loading Button`;this.title=`Angular Loading Button Component`;this.description=`Angular Buttons with built-in loading indicators. Indicate the loading state of the button bridging the gap between action and feedback.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description,pro:!0})}static{this.ɵfac=function(n){return new(n||m$1)}}static{this.ɵcmp=D_({type:m$1,selectors:[[`docs-loading-button`]],decls:30,vars:9,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[3,`files`],[`markdown`,``,1,`highlight`],[1,`api-table`]],template:function(n,e){n&1&&(lv(0,`docs-banner-pro`),Rs(1,`h1`,0),RM(2),gd(),Rs(3,`p`,1),RM(4),gd(),lv(5,`docs-ads-carbon-loader`),Rs(6,`markdown`),RM(7,`
  ## Examples

  Cancellable on click by default.

  ### Border (default spinner)
`),gd(),Rs(8,`docs-example`,2),lv(9,`docs-loading-button01`),gd(),Rs(10,`markdown`),RM(11,`
  ### Grow
`),gd(),Rs(12,`docs-example`,2),lv(13,`docs-loading-button02`),gd(),Rs(14,`markdown`),RM(15,`
  ### Disabled on loading

  Non cancellable on click.
`),gd(),Rs(16,`docs-example`,2),lv(17,`docs-loading-button03`),gd(),Rs(18,`markdown`),RM(19,`
  ---

  ## API reference

  ### LoadingButton Module

`),gd(),Rs(20,`div`,3),RM(21),gd(),Rs(22,`markdown`),RM(23,`
  ### cLoadingButton
  _directive_

  ##### Inputs
  `),Rs(24,`div`,4),RM(25,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `disabledOnLoading` | Makes button disabled when loading. | `boolean` | _false_ |\n    | `loading` | Loading state (set to true to start animation). | `boolean` | _false_ |\n    | `spinnerType` | Type of spinner. | `border` \\| `grow` |_border_|\n\n  "),gd(),RM(26,`

  ##### Outputs
  `),Rs(27,`div`,4),RM(28,`

    | name | description | type |
    | ---- | ----------- | ---- |
    | \`loadingChange\` | Event emitted on \`loading\` change. | \`boolean\` |

  `),gd(),RM(29,`
`),gd()),n&2&&(kw(2),Uv(e.title),kw(2),Uv(e.description),kw(4),cv(`files`,KM(6,N)),kw(4),cv(`files`,KM(7,O)),kw(4),cv(`files`,KM(8,A)),kw(5),Td(` `,e.usage,`
`))},dependencies:[f,nr,ie,y,_,C,m],styles:[`[_nghost-%COMP%]     .docs-example .btn{margin:.25rem .125rem}`]})}};export{M as LoadingButtonComponent};