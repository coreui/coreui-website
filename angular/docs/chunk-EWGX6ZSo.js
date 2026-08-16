import{$t as Uv,An as aM,Br as kw,Fi as v,G as Ht,K as Hy,Lr as kp,Nt as Rs,T as D_,Ut as Td,_t as Op,an as WS,d as BM,gn as Yv,kt as RM,nt as KM,qn as cv,qr as lv,rt as Kv,ui as pN,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ui as nr,Ur as vi,Xi as y,fr as nf,pr as nn}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var d=class r{static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-popover02`]],decls:8,vars:4,consts:[[`cButton`,``,`cPopover`,`Vivamus sagittis lacus vel augue laoreet faucibus. Top!`,`cPopoverPlacement`,`top`,`color`,`secondary`,1,`me-1`,3,`cPopoverTrigger`],[`cButton`,``,`cPopover`,`Vivamus sagittis lacus vel augue laoreet faucibus. Right!`,`cPopoverPlacement`,`right`,`color`,`secondary`,1,`me-1`,3,`cPopoverTrigger`],[`cButton`,``,`cPopover`,`Vivamus sagittis lacus vel augue laoreet faucibus. Bottom!`,`cPopoverPlacement`,`bottom`,`color`,`secondary`,1,`me-1`,3,`cPopoverTrigger`],[`cButton`,``,`cPopover`,`Vivamus sagittis lacus vel augue laoreet faucibus. Left!`,`cPopoverPlacement`,`left`,`color`,`secondary`,1,`me-1`,3,`cPopoverTrigger`]],template:function(n,i){n&1&&(Rs(0,`button`,0),RM(1,`Popover on top
`),gd(),Rs(2,`button`,1),RM(3,`Popover on right
`),gd(),Rs(4,`button`,2),RM(5,`Popover on bottom
`),gd(),Rs(6,`button`,3),RM(7,`Popover on left
`),gd()),n&2&&(cv(`cPopoverTrigger`,`hover`),kw(2),cv(`cPopoverTrigger`,`hover`),kw(2),cv(`cPopoverTrigger`,`hover`),kw(2),cv(`cPopoverTrigger`,`hover`))},dependencies:[nn,nf],encapsulation:2})}};function W(r,s){r&1&&(Rs(0,`h3`,2),RM(1,` Popover Title `),gd(),Rs(2,`div`,3),RM(3,` And here’s some amazing content. It’s very engaging. `),Rs(4,`i`,4),RM(5,`Right?`),gd()())}var u=class r{constructor(){this.visible=Ht(!0)}static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-popover01`]],decls:4,vars:3,consts:[[`popoverHtml`,``],[`cPopoverPlacement`,`right`,`cButton`,``,`color`,`danger`,`size`,`lg`,1,`m-1`,3,`cPopoverVisibleChange`,`cPopover`,`cPopoverTrigger`,`cPopoverVisible`],[1,`popover-header`],[1,`popover-body`],[`cTextColor`,`info`]],template:function(n,i){if(n&1){let g=WS();Rs(0,`button`,1),Kv(`cPopoverVisibleChange`,function(f){return Op(g),BM(i.visible,f)||(i.visible=f),kp(f)}),RM(1,` Click to toggle popover `),Hy(2,W,6,0,`ng-template`,null,0,pN),gd()}if(n&2)cv(`cPopover`,aM(3))(`cPopoverTrigger`,`click`),Yv(`cPopoverVisible`,i.visible)},dependencies:[nn,nf,vi],encapsulation:2})}};var F=`\`\`\`typescript
import { PopoverModule } from '@coreui/angular';

@NgModule({
    imports: [PopoverModule,]
})
export class AppModule() { }
\`\`\`
`;var z=()=>[`components/popover/examples/popover01.component.html`,`components/popover/examples/popover01.component.ts`];var L=()=>[`components/popover/examples/popover02.component.html`,`components/popover/examples/popover02.component.ts`];var U=class r{constructor(){this.usage=F;this.headService=v(y);this.name=`Popover`;this.title=`Angular Popover Component`;this.description=`Documentation and examples for adding Angular Popovers to any element on your site.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(n){return new(n||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-popover`]],decls:25,vars:9,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`Popover01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Popover02Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`]],template:function(n,i){n&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  Use CoreUI Angular popover directive
  to create Angular popovers like those found in iOS, to any element on your site. Tutorials and examples for adding custom CoreUI Angular popovers.

  ## Examples

  ### Html content
  - Click the button below to see a popover:
`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-popover01`),gd(),Rs(9,`markdown`),RM(10,`
  ### Directions

  - Hover over the buttons below to see the four popover directions: top, right, bottom, and left. Directions are
  mirrored when using CoreUI in RTL.
`),gd(),Rs(11,`docs-example`,3),lv(12,`docs-popover02`),gd(),Rs(13,`markdown`),RM(14,`
  ---


  ## Usage
  A popover shown on hover or focus, can be dismissed by pressing the `),Rs(15,`kbd`),RM(16,`Escape`),gd(),RM(17,` key, helping satisfy the [WCAG 1.4.13 "Content on Hover or Focus"](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html) success criterion.

  ## API reference


  ### Popover

`),gd(),Rs(18,`div`,4),RM(19),gd(),Rs(20,`markdown`),RM(21,`
  ---

  ### Props

  ##### Inputs

  `),Rs(22,`div`,5),RM(23,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`cPopover` | Content of a popover. | `string`, `TemplateRef` | - | _required_\n  |`cPopoverOptions` | Optional popper Options object, takes precedence over cPopoverPlacement. | `Options` | - |\n  |`cPopoverPlacement` | Placement of a popover. | `top`, `bottom`, `left`, `right` | `top` | _string_\n  |`cPopoverTrigger` | Event handlers to toggle popover. Specify one trigger or an array of them. | `Triggers`, `Triggers[]` | `hover` | _string_, _string[]_\n  |`cPopoverVisible` | Toggle the visibility of a popover. | `boolean` | `false` |\n\n  "),gd(),RM(24,`
`),gd()),n&2&&(kw(),Uv(i.title),kw(2),Uv(i.description),kw(4),cv(`files`,KM(7,z))(`name`,i.title),kw(4),cv(`files`,KM(8,L))(`name`,i.title),kw(8),Td(` `,i.usage,`
`))},dependencies:[f,nr,ie,u,d],encapsulation:2})}};export{U as PopoverComponent};