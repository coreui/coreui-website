import{$t as Uv,Br as kw,Fi as v$1,G as Ht,In as av,N as Ev,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Mr as ss,Or as rn,Ui as nr,Xi as y$1,Yn as ii,mn as an,or as lm,pr as nn}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var v=class p{constructor(){this.visible=Ht([!1,!1])}toggleCollapse(a){this.visible.update(o=>(o[a]=!o[a],o))}static{this.ɵfac=function(o){return new(o||p)}}static{this.ɵcmp=D_({type:p,selectors:[[`docs-collapse02`]],decls:17,vars:4,consts:[[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[3,`xs`],[`cCollapse`,``,3,`visible`],[1,`mt-3`]],template:function(o,i){o&1&&(Rs(0,`button`,0),Ev(`click`,function(){return i.toggleCollapse(0)}),RM(1,`Toggle first element`),gd(),Rs(2,`button`,0),Ev(`click`,function(){return i.toggleCollapse(1)}),RM(3,`Toggle second element`),gd(),Rs(4,`button`,0),Ev(`click`,function(){return i.toggleCollapse(0),i.toggleCollapse(1)}),RM(5,`Toggle both`),gd(),Rs(6,`c-row`)(7,`c-col`,1)(8,`div`,2)(9,`c-card`,3)(10,`c-card-body`),RM(11,` Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. `),gd()()()(),Rs(12,`c-col`,1)(13,`div`,2)(14,`c-card`,3)(15,`c-card-body`),RM(16,` Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. `),gd()()()()()),o&2&&(kw(7),cv(`xs`,6),kw(),cv(`visible`,i.visible()[0]),kw(4),cv(`xs`,6),kw(),cv(`visible`,i.visible()[1]))},dependencies:[nn,lm,ss,ii,rn,an],encapsulation:2})}};var y=class p{constructor(){this.visible=Ht(!1)}toggleCollapse(){this.visible.update(a=>!a)}static{this.ɵfac=function(o){return new(o||p)}}static{this.ɵcmp=D_({type:p,selectors:[[`docs-collapse03`]],decls:6,vars:2,consts:[[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,1,`shadow`,2,`max-width`,`260px`,3,`visible`],[2,`width`,`260px`]],template:function(o,i){o&1&&(Rs(0,`button`,0),Ev(`click`,function(){return i.toggleCollapse()}),RM(1,`Button`),gd(),Rs(2,`div`,1)(3,`c-card`,2)(4,`c-card-body`,3),RM(5,` This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered. `),gd()()()),o&2&&(av(`aria-expanded`,i.visible()),kw(3),cv(`visible`,i.visible()))},dependencies:[nn,rn,ii,an],encapsulation:2})}};var _=class p{constructor(){this.visible=Ht(!1)}toggleCollapse(){this.visible.update(a=>!a)}static{this.ɵfac=function(o){return new(o||p)}}static{this.ɵcmp=D_({type:p,selectors:[[`docs-collapse01`]],decls:8,vars:1,consts:[[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`mt-3`,`shadow`]],template:function(o,i){o&1&&(Rs(0,`a`,0),Ev(`click`,function(){return i.toggleCollapse()}),RM(1,`Link`),gd(),Rs(2,`button`,0),Ev(`click`,function(){return i.toggleCollapse()}),RM(3,`Button`),gd(),Rs(4,`div`,1)(5,`c-card`,2)(6,`c-card-body`),RM(7,` Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. `),gd()()()),o&2&&(kw(4),cv(`visible`,i.visible()))},dependencies:[nn,ii,rn,an],encapsulation:2})}};var z=`\`\`\`typescript
import { CollapseModule } from '@coreui/angular';

@NgModule({
    imports: [CollapseModule,]
})
export class AppModule() { }
\`\`\`
`;var H=()=>[`components/collapse/examples/collapse01.component.html`,`components/collapse/examples/collapse01.component.ts`];var O=()=>[`components/collapse/examples/collapse03.component.html`,`components/collapse/examples/collapse03.component.ts`];var q=()=>[`components/collapse/examples/collapse02.component.html`,`components/collapse/examples/collapse02.component.ts`];var F=class p{constructor(){this.usage=z;this.headService=v$1(y$1);this.name=`Collapse`;this.title=`Angular Collapse Component`;this.description=`Angular Collapse directive toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(o){return new(o||p)}}static{this.ɵcmp=D_({type:p,selectors:[[`docs-collapse`]],decls:29,vars:12,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`Collapse01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Collapse03Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Collapse02Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`]],template:function(o,i){o&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  ## How it works

  The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the height from its current value to 0. Given how CSS handles animations, you cannot use padding on a .collapse element. Instead, use the class as an independent wrapping element.

  ## Examples
  You can use it with a link or a button element.

`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-collapse01`),gd(),Rs(9,`markdown`),RM(10,`
  ## Horizontal

  Add the \`horizontal\` property to transition the width instead of height and set a width on the immediate child element.

`),gd(),Rs(11,`docs-example`,3),lv(12,`docs-collapse03`),gd(),Rs(13,`markdown`),RM(14,`
  ## Multiple targets

  A \`c-button\` can show and hide multiple elements.
`),gd(),Rs(15,`docs-example`,4),lv(16,`docs-collapse02`),gd(),Rs(17,`markdown`),RM(18,`
  ---

  ## API reference

  ### Collapse Module

`),gd(),Rs(19,`div`,5),RM(20),gd(),Rs(21,`markdown`),RM(22,`
  ---

  ### cCollapse
  _directive_

  ##### Inputs
  `),Rs(23,`div`,6),RM(24,"\n\n  |prop|description|type|default|\n  |---|:---|:---|:---|\n  |`visible`|Toggle the visibility of collapsible element|`boolean`|_false_\n  |`horizontal`|Set horizontal collapsing to transition the width instead of height.|`boolean`|_false_\n  |`navbar`|Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint|`boolean`|_false_\n\n  "),gd(),RM(25,`

  ##### Outputs
  `),Rs(26,`div`,6),RM(27,`

  |prop|description|type|values|
  |---|:---|:---|:---|
  |\`collapseChange\`|Event emitted on visibility change|\`string\`|\`opening, open, collapsing, collapsed\`

  `),gd(),RM(28,`


`),gd()),o&2&&(kw(),Uv(i.title),kw(2),Uv(i.description),kw(4),cv(`files`,KM(9,H))(`name`,i.title),kw(4),cv(`files`,KM(10,O))(`name`,i.title),kw(4),cv(`files`,KM(11,q))(`name`,i.title),kw(5),Td(` `,i.usage,`
`))},dependencies:[f,nr,ie,_,y,v],encapsulation:2})}};export{F as CollapseComponent};