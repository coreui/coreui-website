import{$t as Uv,Br as kw,Fi as v$1,K as Hy,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ui as pN,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{B as Io,Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var d=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=D_({type:t,selectors:[[`docs-close-button04`]],decls:3,vars:0,consts:[[`cButtonClose`,``,`size`,`lg`],[`cButtonClose`,``],[`cButtonClose`,``,`size`,`sm`]],template:function(e,l){e&1&&lv(0,`button`,0)(1,`button`,1)(2,`button`,2)},dependencies:[Io],encapsulation:2})}};var b=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=D_({type:t,selectors:[[`docs-close-button03`]],hostAttrs:[`data-coreui-theme`,`dark`,1,`bg-dark`,`p-4`,`rounded-top-2`,`d-block`],decls:1,vars:0,consts:[[`cButtonClose`,``,`white`,``]],template:function(e,l){e&1&&lv(0,`button`,0)},dependencies:[Io],encapsulation:2})}};var g=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=D_({type:t,selectors:[[`docs-close-button02`]],decls:1,vars:0,consts:[[`cButtonClose`,``,`disabled`,``]],template:function(e,l){e&1&&lv(0,`button`,0)},dependencies:[Io],encapsulation:2})}};var v=class t{static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=D_({type:t,selectors:[[`docs-close-button01`]],decls:1,vars:0,consts:[[`cButtonClose`,``]],template:function(e,l){e&1&&lv(0,`button`,0)},dependencies:[Io],encapsulation:2})}};var M=`\`\`\`typescript
import { ButtonModule } from '@coreui/angular';

@NgModule({
    imports: [ButtonModule,]
})
export class AppModule() { }
\`\`\`
`;var I=()=>[`components/close-button/examples/close-button01.component.html`,`components/close-button/examples/close-button01.component.ts`];var z=()=>[`components/close-button/examples/close-button02.component.html`,`components/close-button/examples/close-button02.component.ts`];var F=()=>[`components/close-button/examples/close-button03.component.html`,`components/close-button/examples/close-button03.component.ts`];var P=()=>[`components/close-button/examples/close-button04.component.html`,`components/close-button/examples/close-button04.component.ts`];function A(t,m){t&1&&lv(0,`docs-close-button03`)}var _=class t{constructor(){this.usage=M;this.headService=v$1(y);this.name=`Close Button`;this.title=`Angular Close Button Component`;this.description=`A generic Angular close button directive for dismissing content like modals and alerts.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(e){return new(e||t)}}static{this.ɵcmp=D_({type:t,selectors:[[`docs-close-button`]],decls:31,vars:15,consts:[[`docsExample`,``],[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`CloseButton01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`CloseButton02Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`CloseButton03Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`CloseButton04Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`]],template:function(e,l){e&1&&(Rs(0,`h1`,1),RM(1),gd(),Rs(2,`p`,2),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  ## Examples

  ### Basic
  Provide an option to dismiss or close a component with \`cCloseButton\`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default background-image.
`),gd(),Rs(7,`docs-example`,3),lv(8,`docs-close-button01`),gd(),Rs(9,`markdown`),RM(10,"\n  ### Disabled\n  Disabled close buttons change their `opacity`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.\n"),gd(),Rs(11,`docs-example`,4),lv(12,`docs-close-button02`),gd(),Rs(13,`markdown`),RM(14,"\n  ### White variant\n  Change the default `cCloseButton` to be white with the `white` boolean property.\n"),gd(),Rs(15,`docs-example`,5),Hy(16,A,1,0,`ng-template`,null,0,pN),gd(),Rs(18,`markdown`),RM(19,"\n  ### Sizing\n  Provide default, `lg` and `sm` size.\n"),gd(),Rs(20,`docs-example`,6),lv(21,`docs-close-button04`),gd(),Rs(22,`markdown`),RM(23,`
  ---

  ## API reference

  ### ButtonModule

`),gd(),Rs(24,`div`,7),RM(25),gd(),Rs(26,`markdown`),RM(27,`
  ---

  ### cButtonClose
  _directive_

  ##### Inputs
  `),Rs(28,`div`,8),RM(29,"\n\n  |prop|description|type|default|\n  |---|:---|:---|:---|\n  |`disabled`| disabled attribute | `boolean` |_null_|\n  |`size`| close button size |`sm, lg`|_undefined_|\n  |`white`| white variant | `boolean` |_undefined_|\n\n  "),gd(),RM(30,`

`),gd()),e&2&&(kw(),Uv(l.title),kw(2),Uv(l.description),kw(4),cv(`files`,KM(11,I))(`name`,l.title),kw(4),cv(`files`,KM(12,z))(`name`,l.title),kw(4),cv(`files`,KM(13,F))(`name`,l.title),kw(5),cv(`files`,KM(14,P))(`name`,l.title),kw(5),Td(` `,l.usage,`
`))},dependencies:[f,nr,ie,v,g,b,d],encapsulation:2})}};export{_ as CloseButtonComponent};