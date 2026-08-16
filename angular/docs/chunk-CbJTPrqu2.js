import{$t as Uv,Br as kw,Fi as v,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ar as sm,In as fm,Ot as Tm,P as Gt,Pn as eu,Qr as wr,Rr as um,Ui as nr,Wn as hm,Xi as y,Xr as wm,ar as li,lr as mm,oi as xt,qn as ht,vr as pm}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f$1}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var f=()=>[];var c=class l{static{this.ɵfac=function(i){return new(i||l)}}static{this.ɵcmp=D_({type:l,selectors:[[`docs-header01`]],decls:33,vars:7,consts:[[`fluid`,``],[3,`routerLink`],[1,`ms-auto`],[`cNavLink`,``,3,`active`,`routerLink`],[`cNavLink`,``,`routerLink`,`/components/alert`],[`cNavLink`,``,`disabled`,``,`routerLink`,`/components/alert`],[`alignment`,`end`],[`cDropdownToggle`,``,`cNavLink`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``]],template:function(i,p){i&1&&(Rs(0,`c-header`)(1,`c-container`,0)(2,`c-header-brand`,1),RM(3,`Brand`),gd(),Rs(4,`c-header-nav`,2)(5,`c-nav-item`)(6,`a`,3),RM(7,`Home`),gd()(),Rs(8,`c-nav-item`)(9,`a`,4),RM(10,`Link`),gd()(),Rs(11,`c-nav-item`)(12,`a`,5),RM(13,`Disabled`),gd()(),Rs(14,`c-dropdown`,6)(15,`a`,7),RM(16,`Dropdown`),gd(),Rs(17,`ul`,8)(18,`li`)(19,`a`,9),RM(20,`Action`),gd()(),Rs(21,`li`)(22,`a`,9),RM(23,`Another action`),gd()(),Rs(24,`li`),lv(25,`hr`,10),gd(),Rs(26,`li`)(27,`a`,9),RM(28,`Something else`),gd()()()()()(),lv(29,`c-header-divider`),Rs(30,`c-container`,0)(31,`c-header-text`),RM(32,`Additional text`),gd()()()),i&2&&(kw(6),cv(`active`,!0),kw(13),cv(`routerLink`,KM(4,f)),kw(3),cv(`routerLink`,KM(5,f)),kw(5),cv(`routerLink`,KM(6,f)))},dependencies:[li,sm,ht,eu,wr,xt,Gt,pm,um,mm,fm,hm,wm,Tm],styles:[`.header-toggler-icon[_ngcontent-%COMP%]{min-width:25px}`]})}};var F=`\`\`\`typescript
import { HeaderModule } from '@coreui/angular';

@NgModule({
imports: [HeaderModule,]
})
export class AppModule() { }
\`\`\`
`;var z=()=>[`components/header/examples/header01.component.html`,`components/header/examples/header01.component.ts`,`components/header/examples/header01.component.scss`];var P=class l{constructor(){this.usage=F;this.headService=v(y);this.name=`Header`;this.title=`Angular Header Component`;this.description=`Documentation and examples for Angular Header - a powerful, responsive navigation header. Includes support for branding, links, dropdowns, and more.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(i){return new(i||l)}}static{this.ɵcmp=D_({type:l,selectors:[[`docs-header`]],decls:27,vars:6,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`Header01Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`]],template:function(i,p){i&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  ## Supported content

  Headers come with built-in support for a handful of sub-components. Choose from the following as needed:

  - \`cHeaderBrand\` for your company, product, or project name
  - \`cHeaderNav\` for a full-height and lightweight navigation (including support for dropdowns)
  - \`cHeaderToggler\` for use with navigation toggling
  - \`cHeaderText\` for adding vertically centered strings of text
  - \`cHeaderDivider\` to separate subheaders
  - Flex and spacing utilities for any form controls and actions

  ## Examples
  Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the \`lg\` (large) breakpoint.

`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-header01`),gd(),Rs(9,`markdown`),RM(10,`
  ---

  ## API reference

  ### Header Module

`),gd(),Rs(11,`div`,3),RM(12),gd(),Rs(13,`markdown`),RM(14,`
  ---

  ### c-header
  _component_

  ##### Inputs
  `),Rs(15,`div`,4),RM(16,"\n\n  |prop|description|type|default|notes|\n  |---|:---|:---|:---|---|\n  |`container`| Defines optional container wrapping children elements | `Container` |_undefined_|`boolean , string`\n  |`position`| Place a footer in non-static positions | `Positions` |_undefined_|`fixed, sticky`\n  |`role`| Default role for a header |`string`|_header_||\n\n  "),gd(),RM(17,`

  ### c-header-brand
  _component_

  ##### Inputs
  `),Rs(18,`div`,4),RM(19,`

  |prop|description|type|default|notes|
  |---|:---|:---|:---|---|
  |\`role\`| Default role for a header-brand |\`string\`|_button_||

  `),gd(),RM(20,`

  ### c-header-nav
  _component_

  ##### Inputs
  `),Rs(21,`div`,4),RM(22,`

  |prop|description|type|default|notes|
  |---|:---|:---|:---|---|
  |\`role\`| Default role for a header-nav |\`string\`|_navigation_||

  `),gd(),RM(23,`

  ### cHeaderText
  _directive_

  ### cHeaderToggler
  _directive_

  ##### Inputs
  `),Rs(24,`div`,4),RM(25,"\n\n  |prop|description|type|default|notes|\n  |---|:---|:---|:---|---|\n  |`type`| Default type for a header-brand |`string`|_button_||\n  |`aria-label`| Default aria-label attr for header-toggler |`string`|_Toggle navigation_||\n\n  "),gd(),RM(26,`

`),gd()),i&2&&(kw(),Uv(p.title),kw(2),Uv(p.description),kw(4),cv(`files`,KM(5,z))(`name`,p.title),kw(5),Td(` `,p.usage,`
`))},dependencies:[f$1,nr,ie,c],encapsulation:2})}};export{P as HeaderComponent};