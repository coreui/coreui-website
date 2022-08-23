"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[910],{6756:(m,c,n)=>{n.r(c),n.d(c,{PopoverDocsModule:()=>D});var s=n(6895),a=n(5432),i=n(674),l=n(1950),o=n(8256),v=n(1481),d=n(4217),P=n(6971),u=n(3463),g=n(1394),f=n(707);function h(e,r){1&e&&(o.TgZ(0,"h3",2),o._uU(1," Popover Title "),o.qZA(),o.TgZ(2,"div",3),o._uU(3," And here\u2019s some amazing content. It\u2019s very engaging. "),o.TgZ(4,"i",4),o._uU(5,"Right?"),o.qZA()())}let T=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["docs-popover01"]],decls:4,vars:2,consts:[["cPopoverPlacement","right","cButton","","color","danger","size","lg",1,"m-1",3,"cPopover","cPopoverTrigger"],["popoverHtml",""],[1,"popover-header"],[1,"popover-body"],["cTextColor","info"]],template:function(t,p){if(1&t&&(o.TgZ(0,"button",0),o._uU(1," Click to toggle popover "),o.YNc(2,h,6,0,"ng-template",null,1,o.W1O),o.qZA()),2&t){const J=o.MAs(3);o.Q6J("cPopover",J)("cPopoverTrigger","click")}},dependencies:[u.H,g.k,f.g],encapsulation:2}),e})(),Z=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["docs-popover02"]],decls:8,vars:4,consts:[["cButton","","cPopover","Vivamus sagittis lacus vel augue laoreet faucibus. Top!","cPopoverPlacement","top","color","secondary",1,"me-1",3,"cPopoverTrigger"],["cButton","","cPopover","Vivamus sagittis lacus vel augue laoreet faucibus. Right!","cPopoverPlacement","right","color","secondary",1,"me-1",3,"cPopoverTrigger"],["cButton","","cPopover","Vivamus sagittis lacus vel augue laoreet faucibus. Bottom!","cPopoverPlacement","bottom","color","secondary",1,"me-1",3,"cPopoverTrigger"],["cButton","","cPopover","Vivamus sagittis lacus vel augue laoreet faucibus. Left!","cPopoverPlacement","left","color","secondary",1,"me-1",3,"cPopoverTrigger"]],template:function(t,p){1&t&&(o.TgZ(0,"button",0),o._uU(1,"Popover on top\n"),o.qZA(),o.TgZ(2,"button",1),o._uU(3,"Popover on right\n"),o.qZA(),o.TgZ(4,"button",2),o._uU(5,"Popover on bottom\n"),o.qZA(),o.TgZ(6,"button",3),o._uU(7,"Popover on left\n"),o.qZA()),2&t&&(o.Q6J("cPopoverTrigger","hover"),o.xp6(2),o.Q6J("cPopoverTrigger","hover"),o.xp6(2),o.Q6J("cPopoverTrigger","hover"),o.xp6(2),o.Q6J("cPopoverTrigger","hover"))},dependencies:[u.H,g.k],encapsulation:2}),e})();const U=function(){return["components/popover/examples/popover01.component.html"]},y=function(){return["components/popover/examples/popover02.component.html"]},x=[{path:"",component:(()=>{class e{constructor(t,p){this.metaService=t,this.titleService=p,this.usage=n(9357).Z,this.title="Angular Popover Component",this.description="Documentation and examples for adding Angular Popovers to any element on your site."}ngOnInit(){this.titleService.setTitle(this.title),this.metaService.updateTag({name:"description",content:this.description})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(v.h_),o.Y36(v.Dx))},e.\u0275cmp=o.Xpm({type:e,selectors:[["docs-popover"]],decls:21,vars:6,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"table-responsive"],["markdown","",1,"table","table","table-striped","table-api"]],template:function(t,p){1&t&&(o.TgZ(0,"h1",0),o._uU(1,"Angular Popover Directive"),o.qZA(),o.TgZ(2,"p",1),o._uU(3),o.qZA(),o._UZ(4,"docs-ads-carbon"),o.TgZ(5,"markdown"),o._uU(6,"\n  Use CoreUI Angular popover directive\n  to create Angular popovers like those found in iOS, to any element on your site. Tutorials and examples for adding custom CoreUI Angular popovers.\n\n  ## Examples\n\n  ### Html content\n  - Click the button below to see a popover:\n"),o.qZA(),o.TgZ(7,"docs-example",2),o._UZ(8,"docs-popover01"),o.qZA(),o.TgZ(9,"markdown"),o._uU(10,"\n  ### Directions\n\n  - Hover over the buttons below to see the four popover directions: top, right, bottom, and left. Directions are\n  mirrored when using CoreUI in RTL.\n"),o.qZA(),o.TgZ(11,"docs-example",2),o._UZ(12,"docs-popover02"),o.qZA(),o.TgZ(13,"markdown"),o._uU(14),o.TgZ(15,"div",3),o._uU(16,"\n    "),o.TgZ(17,"table",4),o._uU(18,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`cPopover` | Content of a popover. | `string`, `TemplateRef` | - | _required_\n  |`cPopoverOptions` | Optional popper Options object, takes precedence over cPopoverPlacement. | `Options` | - |\n  |`cPopoverPlacement` | Placement of a popover. | `top`, `bottom`, `left`, `right` | `top` | _string_\n  |`cPopoverTrigger` | Event handlers to toggle popover. Specify one trigger or an array of them. | `Triggers`, `Triggers[]` | `hover` | _string_, _string[]_\n  |`cPopoverVisible` | Toggle the visibility of a popover. | `boolean` | `false` |\n\n    "),o.qZA(),o._uU(19,"\n  "),o.qZA(),o._uU(20,"\n"),o.qZA()),2&t&&(o.xp6(3),o.Oqu(p.description),o.xp6(4),o.Q6J("files",o.DdM(4,U)),o.xp6(4),o.Q6J("files",o.DdM(5,y)),o.xp6(3),o.hij("\n  ---\n\n  ## API reference\n\n\n  ### Popover\n\n  ",p.usage,"\n\n  ---\n\n  ### Props\n\n  ##### Inputs\n\n  "))},dependencies:[d.U,a.lF,P.E,T,Z],encapsulation:2}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[l.Bz.forChild(x),l.Bz]}),e})();var M=n(2349),B=n(417);let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[M.B,s.ez,i.hJ1,i.UUf,i.gzQ,b,a.JP.forChild(),B.K]}),e})()},9357:(m,c,n)=>{n.d(c,{Z:()=>s});const s="```typescript\nimport { PopoverModule } from '@coreui/angular';\n\n@NgModule({\n    imports: [PopoverModule,]\n})\nexport class AppModule() { }\n```\n"}}]);