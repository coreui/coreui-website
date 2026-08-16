import{$t as Uv,Br as kw,Fi as v,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Dr as rm,Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var m=class i{static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=D_({type:i,selectors:[[`docs-footer01`]],decls:12,vars:0,consts:[[`href`,`https://coreui.io/pro/angular/`,`target`,`_blank`],[1,`ms-auto`],[`href`,`https://coreui.io/pro/angular`,`target`,`_blank`]],template:function(n,r){n&1&&(Rs(0,`c-footer`)(1,`div`)(2,`a`,0),RM(3,`CoreUI`),gd(),Rs(4,`span`),RM(5,` © 2021 creativeLabs`),gd()(),Rs(6,`div`,1)(7,`span`),RM(8,`Powered by `),gd(),Rs(9,`a`,2)(10,`span`),RM(11,`CoreUI for Angular`),gd()()()())},dependencies:[rm],encapsulation:2})}};var F=`\`\`\`typescript
import { FooterModule } from '@coreui/angular';

@NgModule({
    imports: [FooterModule,]
})
export class AppModule() { }
\`\`\`
`;var w=()=>[`components/footer/examples/footer01.component.html`,`components/footer/examples/footer01.component.ts`];var b=class i{constructor(){this.usage=F;this.headService=v(y);this.name=`Footer`;this.title=`Angular Footer Component`;this.description=`Angular Footer component is an additional navigation used for displaying general information that a user might want to access from any page within your site. It is a place to display boilerplate text about the site, company info, copyrights, links to a contact form, sitemap, FAQ and other such resources.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(n){return new(n||i)}}static{this.ɵcmp=D_({type:i,selectors:[[`docs-footer`]],decls:18,vars:6,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`Footer01Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`]],template:function(n,r){n&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  ## Examples
`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-footer01`),gd(),Rs(9,`markdown`),RM(10,`
  ---

  ## API reference

  ### Footer Module

`),gd(),Rs(11,`div`,3),RM(12),gd(),Rs(13,`markdown`),RM(14,`
  ---

  ### c-footer
  _component_

  ##### Inputs
  `),Rs(15,`div`,4),RM(16,"\n\n  |prop|description|type|default|notes|\n  |---|:---|:---|:---|---|\n  |`position`| Place a footer in non-static positions | `Positions` |_undefined_|`fixed, sticky`\n  |`role`| Default role for a footer |`string`|_footer_||\n\n  "),gd(),RM(17,`

`),gd()),n&2&&(kw(),Uv(r.title),kw(2),Uv(r.description),kw(4),cv(`files`,KM(5,w))(`name`,r.title),kw(5),Td(` `,r.usage,`
`))},dependencies:[f,nr,ie,m],encapsulation:2})}};export{b as FooterComponent};