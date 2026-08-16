import{$t as Uv,Br as kw,Fi as v,G as Ht,K as Hy,Nt as Rs,T as D_,Ut as Td,d as BM,gn as Yv,kt as RM,nt as KM,qn as cv,qr as lv,rt as Kv,ui as pN,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Xi as y$1,x as Cs}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";import{t as m}from"./chunk-BSCFwVWW.js";var x=class a{static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination06`]],decls:1,vars:2,consts:[[`align`,`end`,3,`activePage`,`pages`]],template:function(e,p){e&1&&lv(0,`c-smart-pagination`,0),e&2&&cv(`activePage`,2)(`pages`,9)},dependencies:[Cs],encapsulation:2})}};var P=class a{static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination05`]],decls:1,vars:2,consts:[[`align`,`center`,3,`activePage`,`pages`]],template:function(e,p){e&1&&lv(0,`c-smart-pagination`,0),e&2&&cv(`activePage`,2)(`pages`,9)},dependencies:[Cs],encapsulation:2})}};var y=class a{static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination04`]],decls:1,vars:2,consts:[[`size`,`sm`,3,`activePage`,`pages`]],template:function(e,p){e&1&&lv(0,`c-smart-pagination`,0),e&2&&cv(`activePage`,2)(`pages`,9)},dependencies:[Cs],encapsulation:2})}};var C=class a{static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination03`]],decls:1,vars:2,consts:[[`size`,`lg`,3,`activePage`,`pages`]],template:function(e,p){e&1&&lv(0,`c-smart-pagination`,0),e&2&&cv(`activePage`,2)(`pages`,9)},dependencies:[Cs],encapsulation:2})}};var _=class a{static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination02`]],decls:1,vars:3,consts:[[`firstButton`,`First`,`lastButton`,`Last`,`nextButton`,`Next`,`previousButton`,`Prev`,3,`activePage`,`pages`,`dots`]],template:function(e,p){e&1&&lv(0,`c-smart-pagination`,0),e&2&&cv(`activePage`,2)(`pages`,9)(`dots`,!1)},dependencies:[Cs],encapsulation:2})}};var b=class a{constructor(){this.activePage=Ht(2)}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination01`]],decls:3,vars:3,consts:[[3,`activePageChange`,`activePage`,`pages`],[1,`form-text`]],template:function(e,p){e&1&&(Rs(0,`c-smart-pagination`,0),Kv(`activePageChange`,function(h){return BM(p.activePage,h)||(p.activePage=h),h}),gd(),Rs(1,`p`,1),RM(2),gd()),e&2&&(Yv(`activePage`,p.activePage),cv(`pages`,9),kw(2),Td(`Selected: `,p.activePage()))},dependencies:[Cs],encapsulation:2})}};var z=`\`\`\`typescript
import { SmartPaginationModule } from '@coreui/angular';

@NgModule({
        imports: [SmartPaginationModule,]
})
export class AppModule() { }
\`\`\`
`;var O=()=>[`components/smart-pagination/examples/smart-pagination01.component.html`,`components/smart-pagination/examples/smart-pagination01.component.ts`];var W=()=>[`components/smart-pagination/examples/smart-pagination02.component.html`];var H=()=>[`components/smart-pagination/examples/smart-pagination03.component.html`];var j=()=>[`components/smart-pagination/examples/smart-pagination04.component.html`];var q=()=>[`components/smart-pagination/examples/smart-pagination05.component.html`];var G=()=>[`components/smart-pagination/examples/smart-pagination06.component.html`];function J(a,o){a&1&&(Rs(0,`div`,6),lv(1,`docs-smart-pagination01`),gd())}function K(a,o){a&1&&(Rs(0,`div`,6),lv(1,`docs-smart-pagination02`),gd())}function Q(a,o){a&1&&(Rs(0,`div`,6),lv(1,`docs-smart-pagination03`),gd())}function U(a,o){a&1&&(Rs(0,`div`,6),lv(1,`docs-smart-pagination04`),gd())}function V(a,o){a&1&&(Rs(0,`div`,6),lv(1,`docs-smart-pagination05`),gd())}function X(a,o){a&1&&(Rs(0,`div`,6),lv(1,`docs-smart-pagination06`),gd())}var R=class a{constructor(){this.usage=z;this.headService=v(y$1);this.name=`Smart Pagination`;this.title=`Angular Smart Pagination Component`;this.description=`Documentation and examples for showing Angular smart pagination to indicate a series of related content exists across multiple pages.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description,pro:!0})}static{this.ɵfac=function(e){return new(e||a)}}static{this.ɵcmp=D_({type:a,selectors:[[`docs-smart-pagination`]],decls:61,vars:15,consts:[[`docsExample`,``],[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[3,`files`],[`markdown`,``,1,`highlight`],[1,`api-table`],[1,`docs-example`,`p-3`]],template:function(e,p){e&1&&(lv(0,`docs-banner-pro`),Rs(1,`h1`,1),RM(2),gd(),Rs(3,`p`,2),RM(4),gd(),lv(5,`docs-ads-carbon-loader`),Rs(6,`markdown`),RM(7,`
    ## Overview

    Angular smart pagination component consists of button-like styled links, that are arranged side by side in a
    horizontal list.

    We use a large block of connected links for our pagination, making links hard to miss and easily scalable \u2014 all while
    providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the
    number of available links. SmartPagination also role="navigation" to identify it as a navigation section
    to screen readers and other assistive technologies.

    In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive
    aria-label.
`),gd(),Rs(8,`markdown`),RM(9,`

    ## Features

    - Determine behavior, style and functionality of pagination
    - Smart automatic items generation

    ## Examples

---

`),gd(),Rs(10,`docs-example`,3),Hy(11,J,2,0,`ng-template`,null,0,pN),gd(),Rs(13,`markdown`),RM(14,`

    ---

    ### Working with icons

    Looking to use an icon or symbol in place of text for some pagination links? SmartPagination will provide screen
    reader support for 'firstButton', 'previousButton', 'nextButton' and 'lastButton'.

`),gd(),Rs(15,`docs-example`,3),Hy(16,K,2,0,`ng-template`,null,0,pN),gd(),Rs(18,`markdown`),RM(19,`

    ---

    ### Sizing

    Fancy larger or smaller pagination? Add `),Rs(20,`code`),RM(21,`size="lg"`),gd(),RM(22,` or `),Rs(23,`code`),RM(24,`size="sm"`),gd(),RM(25,` for additional sizes.

`),gd(),Rs(26,`docs-example`,3),Hy(27,Q,2,0,`ng-template`,null,0,pN),gd(),Rs(29,`docs-example`,3),Hy(30,U,2,0,`ng-template`,null,0,pN),gd(),Rs(32,`markdown`),RM(33,`

    ---

    ### Alignment

    Change the alignment of pagination components with `),Rs(34,`code`),RM(35,`align="start"`),gd(),RM(36,`, `),Rs(37,`code`),RM(38,`align="center"`),gd(),RM(39,` or `),Rs(40,`code`),RM(41,`align="end"`),gd(),RM(42,` [flexbox utilities](https://coreui.io/docs/utilities/flex/).

`),gd(),Rs(43,`docs-example`,3),Hy(44,V,2,0,`ng-template`,null,0,pN),gd(),Rs(46,`docs-example`,3),Hy(47,X,2,0,`ng-template`,null,0,pN),gd(),Rs(49,`markdown`),RM(50,`

    ---

    ## API

    ### SmartPagination Module

`),gd(),Rs(51,`div`,4),RM(52),gd(),Rs(53,`markdown`),RM(54,`
    ---

    ### c-smart-pagination
    _component_

    #### Inputs
    `),Rs(55,`div`,5),RM(56,"\n\n      | name | description | type | default |\n      | ---- | ----------- | ---- | ------- |\n      | `activePage` | Current page number  | `number` | _1_ |\n      | `arrows` | Show/hide arrows  | `boolean` | _true_ |\n      | `doubleArrows` | Show double arrows buttons  | `boolean` | _true_ |\n      | `dots` | Show dots  | `boolean` | _true_ |\n      | `firstButton` | The content of first button | `string` | _«_ |\n      | `lastButton` | The content of last button | `string` | _»_ |\n      | `limit` | Maximum items number | `number` | _5_ |\n      | `pages` | Number of pages | `number` | _1_ |\n      | `nextButton` | The content of next button | `string` | _›_ |\n      | `previousButton` | The content of prev button | `string` | _‹_ |\n      | `size` | Size of pagination | `sm`, `lg` | ''  |\n      | `role` | role attr | `string` | _navigation_  |\n\n    "),gd(),RM(57,`

    ---

    #### Outputs
    `),Rs(58,`div`,5),RM(59,`

      | name | description | type |
      | ---- | ----------- | ---- |
      | \`activePageChange\` | Event emitted on \`activePage\` change | \`number\` |

    `),gd(),RM(60,`


`),gd()),e&2&&(kw(2),Uv(p.title),kw(2),Uv(p.description),kw(6),cv(`files`,KM(9,O)),kw(5),cv(`files`,KM(10,W)),kw(11),cv(`files`,KM(11,H)),kw(3),cv(`files`,KM(12,j)),kw(14),cv(`files`,KM(13,q)),kw(3),cv(`files`,KM(14,G)),kw(6),Td(` `,p.usage,`
`))},dependencies:[nr,f,ie,b,_,C,y,P,x,m],encapsulation:2})}};export{R as SmartPaginationComponent};