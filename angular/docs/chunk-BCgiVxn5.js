import{n as m,t as l}from"./chunk-BwCtja5l.js";import{$t as Uv,An as aM,Br as kw,F as FS,Fi as v,Ht as TS,Li as wS,Nt as Rs,Pr as kS,T as D_,Tr as jS,Ut as Td,_ as By,gi as qp,kt as RM,nt as KM,pn as YM,qn as cv,qr as lv,tn as VS,un as XS,ur as gd,wt as PS,y as CS,yn as ZM}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ci as F,Ei as g,Ti as c,Ui as nr,Xi as y,en as Yo,sn as Zr,wi as a}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import{E as w,S as s,g as m$1,o as V,t as Ak}from"./chunk-DCYj8_ol.js";var Q="```bash\nnpm install @coreui/icons@3 @coreui/icons-angular@5.5\n```\n";var X="```bash\nyarn add @coreui/icons\nyarn add @coreui/icons-angular\n```\n";var Z=`\`\`\`typescript
// app NgModule (excerpt)

import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    IconModule,
...
  providers: [
    IconSetService
...
\`\`\`
`;var ee=`\`\`\`typescript
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
\`\`\`
`;var x=class e{constructor(){this.icons={cilList:w,cilShieldAlt:V}}static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=D_({type:e,selectors:[[`docs-icons01`]],decls:2,vars:2,consts:[[`size`,`xl`,`title`,`List Icon`,3,`cIcon`],[`width`,`25`,`title`,`Shield Icon`,3,`cIcon`]],template:function(o,r){o&1&&(qp(),lv(0,`svg`,0)(1,`svg`,1)),o&2&&(cv(`cIcon`,r.icons.cilList),kw(),cv(`cIcon`,r.icons.cilShieldAlt))},dependencies:[Yo],encapsulation:2})}};var h=class e{constructor(){this.icons=Ak}static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=D_({type:e,selectors:[[`docs-icons02`]],decls:2,vars:2,consts:[[`size`,`xl`,`title`,`List Icon`,3,`cIcon`],[`size`,`xl`,`title`,`Shield Icon`,3,`cIcon`]],template:function(o,r){o&1&&(qp(),lv(0,`svg`,0)(1,`svg`,1)),o&2&&(cv(`cIcon`,r.icons.cilList),kw(),cv(`cIcon`,r.icons.cilShieldAlt))},dependencies:[Yo],encapsulation:2})}};var _=class e{constructor(){this.iconSet=v(Zr);this.iconSet.icons={cilListNumbered:m$1,cilPaperPlane:s}}static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=D_({type:e,selectors:[[`docs-icons03`]],features:[ZM([Zr])],decls:2,vars:0,consts:[[`cIcon`,``,`name`,`cilListNumbered`,`size`,`xl`,`title`,`Numbered List Icon`],[`cIcon`,``,`name`,`cilPaperPlane`,`size`,`xl`,`title`,`Paper Plane Icon`]],template:function(o,r){o&1&&(qp(),lv(0,`svg`,0)(1,`svg`,1))},dependencies:[Yo],encapsulation:2})}};var re=()=>[import(`./chunk-BN6xSnYJ2.js`).then(e=>e.IconsFreeComponent),import(`./chunk-ByzXt41J.js`).then(e=>e.IconsBrandComponent),import(`./chunk-DnY-0z0-.js`).then(e=>e.IconsFlagsComponent),import(`./chunk-CcVx_LrH2.js`).then(e=>e.TabsComponent),import(`./chunk-CcVx_LrH2.js`).then(e=>e.TabsListComponent),import(`./chunk-CcVx_LrH2.js`).then(e=>e.TabDirective),import(`./chunk-CcVx_LrH2.js`).then(e=>e.TabsContentComponent),import(`./chunk-CcVx_LrH2.js`).then(e=>e.TabPanelComponent)];var ae=()=>[`icons/examples/icons01.component.html`,`icons/examples/icons01.component.ts`];var se=()=>[`icons/examples/icons02.component.ts`,`icons/examples/icons02.component.html`];var me=()=>[`icons/examples/icons03.component.html`,`icons/examples/icons03.component.ts`];function le(e,m){if(e&1&&(Rs(0,`button`,10),RM(1),gd()),e&2){let o=m.$implicit;cv(`itemKey`,o),kw(),Td(` `,o,` `)}}function pe(e,m){e&1&&lv(0,`docs-icons-free`,12),e&2&&cv(`@insertRemoveTrigger`,void 0)}function de(e,m){e&1&&lv(0,`docs-icons-brand`,12),e&2&&cv(`@insertRemoveTrigger`,void 0)}function ue(e,m){e&1&&lv(0,`docs-icons-flags`,12),e&2&&cv(`@insertRemoveTrigger`,void 0)}function fe(e,m){if(e&1&&(Rs(0,`c-tabs`,8,0)(2,`c-tabs-list`,9),jS(3,le,2,2,`button`,10,FS),gd(),Rs(5,`c-tabs-content`)(6,`c-tab-panel`,11),kS(7,pe,1,1,`docs-icons-free`,12),gd(),Rs(8,`c-tab-panel`,13),kS(9,de,1,1,`docs-icons-brand`,12),gd(),Rs(10,`c-tab-panel`,14),kS(11,ue,1,1,`docs-icons-flags`,12),gd()()(),lv(12,`hr`)),e&2){let o=aM(1),r=XS();kw(3),VS(r.sets),kw(4),PS(o.tabsService.activeItemKey()===`Linear`?7:-1),kw(2),PS(o.tabsService.activeItemKey()===`Brand`?9:-1),kw(2),PS(o.tabsService.activeItemKey()===`Flags`?11:-1)}}var ne=class e{constructor(){this.sets=[`Linear`,`Brand`,`Flags`];this.npm=Q;this.yarn=X;this.usageModule=Z;this.usageComponent=ee;this.headService=v(y);this.iconSetService=v(Zr);this.name=`Icons`;this.title=`Angular Icons Component`;this.description=`Official Angular component for CoreUI Icons and CoreUI Icons PRO.`;this.iconSetService.icons=m(l({},this.iconSetService.icons),{cilListNumbered:m$1,cilPaperPlane:s})}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(o){return new(o||e)}}static{this.ɵcmp=D_({type:e,selectors:[[`docs-icons-docs`]],decls:45,vars:14,consts:[[`tabs`,`cTabs`],[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[`stackblitz`,``,`componentName`,`Icons01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Icons02Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Icons03Component`,3,`files`,`name`],[1,`api-table`],[`activeItemKey`,`Linear`],[`variant`,`tabs`],[`cTab`,``,3,`itemKey`],[`itemKey`,`Linear`,1,`pt-4`],[1,`d-block`],[`itemKey`,`Brand`,1,`pt-4`],[`itemKey`,`Flags`,1,`pt-4`]],template:function(o,r){o&1&&(Rs(0,`h1`,1),RM(1),gd(),Rs(2,`p`,2),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  Angular \`cIcon\` directive for [CoreUI Icons SVG set](https://coreui.io/icons/).

  ## Features
  - Loading icons:
  - store icons by name in Angular root service,
  - directly pass SVG content,
  - Reduces icons bundle size when imported as single icons,
  - Full functionality of \`svg\` tag,
  - Lean API

  ---
  ## Installation
  If you want to use our icon directive with CoreUI Icons library you have to install two additional packages.

  - CoreUI Icons library \`@coreui/icons\`
  - CoreUI Angular Icon component \`@coreui/icons-angular\`

  CoreUI v5.x Icons for Angular supports \`ng add\` to install all required dependencies for your Angular project.

`),gd(),Rs(7,`pre`,3),RM(8,"```bash\nng add @coreui/icons-angular\n```\n"),gd(),Rs(9,`markdown`),RM(10,`
  #### Npm
`),gd(),Rs(11,`pre`,3),RM(12),gd(),Rs(13,`markdown`),RM(14,`

  ---

  ## Examples

  ### Single icon

  Import necessary icons only, directly to your component
`),gd(),Rs(15,`docs-example`,4),lv(16,`docs-icons01`),gd(),Rs(17,`markdown`),RM(18,`

  ---

  ### All icons

  Not recommended, can drastically increase your bundle size.

`),gd(),Rs(19,`docs-example`,5),lv(20,`docs-icons02`),gd(),Rs(21,`markdown`),RM(22,`

  ---

  ## Usage

  ### IconSet Service

  1. Import IconSet Service on module level. For root module and/or other modules.

`),gd(),Rs(23,`div`,3),RM(24),gd(),Rs(25,`markdown`),RM(26,`

  ---

  #### Import required icons

  2. Upload required icons into IconSet Service on app component.

`),gd(),Rs(27,`div`,3),RM(28),gd(),Rs(29,`markdown`),RM(30,`

  ---
  #### Use icons

  3. Use icons by \`name\` prop anywhere in your Angular application.

`),gd(),Rs(31,`docs-example`,6),lv(32,`docs-icons03`),gd(),Rs(33,`markdown`),RM(34,`

  ---

  ## API
  > Use one of \`name\` or \`content\` prop as it defines the way of icon import

  ### cIcon
  _directive_

  ##### Inputs
  `),Rs(35,`div`,7),RM(36,"\n\n    | property | type | default | description|\n    | --- | --- | --- | --- |\n    | `[cIcon]` `content` | `string`, `string[viewBox, content]` | undefined | SVG content |\n    | `name` | `string` | undefined | name of SVG icon stored in IconSetService |\n    | `size` | `custom \\| custom-size` \\| `sm` \\| `lg` \\| `xl` \\| `2xl` \\| `3xl` \\| `4xl` \\| `5xl` \\| `6xl` \\|`7xl` \\| `8xl` \\| `9xl` | '' | Size of icon |\n    | `title` | `string` | undefined | svg title tag |\n    | `customClasses` | `string` | undefined | Overwrites default `.icon` classes |\n    | `viewBox` | `string` | undefined | SVG `viewBox` |\n\n  "),gd(),RM(37,`

  ---

  ### IconSet
  _service_

  ##### Props
  `),Rs(38,`div`,7),RM(39,"\n\n    | property | type | default | description|\n    | --- | --- | --- | --- |\n    | `getIcon()` | `(string): any[] ` | | returns an icon |\n    | `icons` | `IIconSet` | undefined | IconSet object |\n    | `iconNames` | `[key: string]: string` | _undefined_ | returns icon name from key |\n\n  "),gd(),RM(40,`

  ---

  ## Available icons

  CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons
  are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or
  mobile app.

`),gd(),Rs(41,`div`),By(42,fe,13,3),YM(),TS(43,42,re,null,null,null,null,null,null,1),wS(),CS(),gd()),o&2&&(kw(),Uv(r.title),kw(2),Uv(r.description),kw(9),Td(``,r.npm,`
`),kw(3),cv(`files`,KM(11,ae))(`name`,r.title),kw(4),cv(`files`,KM(12,se))(`name`,r.title),kw(5),Td(` `,r.usageModule,`
`),kw(4),Td(` `,r.usageComponent,`
`),kw(3),cv(`files`,KM(13,me))(`name`,r.title))},dependencies:[nr,f,ie,x,h,_],encapsulation:2,data:{animation:[a(`insertRemoveTrigger`,[g(`:enter`,[F({opacity:0}),c(`300ms ease-in`,F({opacity:1}))]),g(`:leave`,[c(`600ms ease-out`,F({opacity:0}))])])]}})}};export{ne as IconsDocsComponent};