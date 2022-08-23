"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[306],{8306:(m,d,a)=>{a.r(d),a.d(d,{LoadingButtonDocsModule:()=>j});var s=a(6895),u=a(5432),h=a(674),b=a(2349),g=a(1950),n=a(8256),r=a(1481),f=a(4217),L=a(6971),_=a(3463),p=a(1281),C=a(289);const B=["cLoadingButton",""],T=["*"];let c=(()=>{class t extends _.H{constructor(){super(),this._disabledOnLoading=!1,this._loading=!1,this.spinnerType="border",this.loadingChange=new n.vpe}set disabledOnLoading(o){this._disabledOnLoading=(0,p.Ig)(o)}get disabledOnLoading(){return this._disabledOnLoading}set loading(o){const i=(0,p.Ig)(o);this._loading!==i&&(this._loading=i,this.loadingChange.emit(i))}get loading(){return this._loading}get hostClasses(){return{"btn-loading":!0,"is-loading":this.loading,disabled:this.disabledOnLoading&&this.loading,btn:!0,[`btn-${this.color}`]:!!this.color&&!this.variant,[`btn-${this.variant}`]:!!this.variant&&!this.color,[`btn-${this.variant}-${this.color}`]:!!this.variant&&!!this.color,[`btn-${this.size}`]:!!this.size,active:this.active}}ngOnChanges(o){o.loading&&!o.loading?.isFirstChange()&&(this.disabled=this.disabledOnLoading&&o.loading.currentValue)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["button","cLoadingButton",""],["a","cLoadingButton",""]],hostVars:2,hostBindings:function(o,i){2&o&&n.Tol(i.hostClasses)},inputs:{disabledOnLoading:"disabledOnLoading",loading:"loading",spinnerType:"spinnerType"},outputs:{loadingChange:"loadingChange"},exportAs:["cLoadingButton"],features:[n.qOj,n.TTD],attrs:B,ngContentSelectors:T,decls:2,vars:1,consts:[["size","sm",1,"btn-loading-spinner",3,"variant"]],template:function(o,i){1&o&&(n.F$t(),n._UZ(0,"c-spinner",0),n.Hsn(1)),2&o&&n.Q6J("variant",i.spinnerType)},dependencies:[C.O]}),t})(),Z=(()=>{class t{constructor(){this.loading=new Array(4)}onClick(o){this.loading[o]?(clearTimeout(this.loading[o]),this.loading[o]=void 0):this.loading[o]=setTimeout(()=>{this.loading[o]=void 0},3e3)}onChange(o,i){console.log(o,i)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["docs-loading-button01"]],decls:6,vars:3,consts:[["cLoadingButton","",3,"loading","click","loadingChange"],["cLoadingButton","","variant","ghost",3,"loading","click"],["cLoadingButton","","variant","outline",3,"loading","click"]],template:function(o,i){1&o&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return i.onClick(0)})("loadingChange",function(q){return i.onChange(q,0)}),n._uU(1,"Submit"),n.qZA(),n.TgZ(2,"button",1),n.NdJ("click",function(){return i.onClick(1)}),n._uU(3,"Submit"),n.qZA(),n.TgZ(4,"button",2),n.NdJ("click",function(){return i.onClick(2)}),n._uU(5,"Submit"),n.qZA()),2&o&&(n.Q6J("loading",i.loading[0]),n.xp6(2),n.Q6J("loading",i.loading[1]),n.xp6(2),n.Q6J("loading",i.loading[2]))},dependencies:[c],encapsulation:2}),t})(),v=(()=>{class t{constructor(){this.loading=new Array(4)}onClick(o){this.loading[o]?(clearTimeout(this.loading[o]),this.loading[o]=void 0):this.loading[o]=setTimeout(()=>{this.loading[o]=void 0},3e3)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["docs-loading-button02"]],decls:6,vars:6,consts:[["cLoadingButton","","color","info","spinnerType","grow",3,"loading","click"],["cLoadingButton","","color","success","spinnerType","grow","variant","ghost",3,"loading","click"],["cLoadingButton","","color","warning","spinnerType","grow","variant","outline",3,"loading","click"]],template:function(o,i){1&o&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return i.onClick(0)}),n._uU(1),n.qZA(),n.TgZ(2,"button",1),n.NdJ("click",function(){return i.onClick(1)}),n._uU(3),n.qZA(),n.TgZ(4,"button",2),n.NdJ("click",function(){return i.onClick(2)}),n._uU(5),n.qZA()),2&o&&(n.Q6J("loading",i.loading[0]),n.xp6(1),n.hij(" ",i.loading[0]?"Cancel":"Upload","\n"),n.xp6(1),n.Q6J("loading",i.loading[1]),n.xp6(1),n.hij(" ",i.loading[1]?"Cancel":"Upload","\n"),n.xp6(1),n.Q6J("loading",i.loading[2]),n.xp6(1),n.hij(" ",i.loading[2]?"Cancel":"Upload","\n"))},dependencies:[c],encapsulation:2}),t})(),k=(()=>{class t{constructor(){this.loading=new Array(4)}onClick(o){this.loading[o]?(clearTimeout(this.loading[o]),this.loading[o]=void 0):this.loading[o]=setTimeout(()=>{this.loading[o]=void 0},3e3)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["docs-loading-button03"]],decls:6,vars:3,consts:[["cLoadingButton","","spinnerType","grow","disabledOnLoading","",3,"loading","click"],["cLoadingButton","","spinnerType","grow","disabledOnLoading","","variant","ghost",3,"loading","click"],["cLoadingButton","","spinnerType","grow","disabledOnLoading","","variant","outline",3,"loading","click"]],template:function(o,i){1&o&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return i.onClick(0)}),n._uU(1,"Submit"),n.qZA(),n.TgZ(2,"button",1),n.NdJ("click",function(){return i.onClick(1)}),n._uU(3,"Submit"),n.qZA(),n.TgZ(4,"button",2),n.NdJ("click",function(){return i.onClick(2)}),n._uU(5,"Submit"),n.qZA()),2&o&&(n.Q6J("loading",i.loading[0]),n.xp6(2),n.Q6J("loading",i.loading[1]),n.xp6(2),n.Q6J("loading",i.loading[2]))},dependencies:[c],encapsulation:2}),t})();const U=function(){return["components/loading-button/examples/loading-button01.component.html","components/loading-button/examples/loading-button01.component.ts"]},w=function(){return["components/loading-button/examples/loading-button02.component.html","components/loading-button/examples/loading-button02.component.ts"]},Q=function(){return["components/loading-button/examples/loading-button03.component.html","components/loading-button/examples/loading-button03.component.ts"]},D=[{path:"",component:(()=>{class t{constructor(o,i){this.metaService=o,this.titleService=i,this.usage=a(1590).Z,this.title="Angular Loading Button Component",this.description="Angular Buttons with built-in loading indicators. Indicate the loading state of the button bridging the gap between action and feedback."}ngOnInit(){this.titleService.setTitle(this.title),this.metaService.updateTag({name:"description",content:this.description})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.h_),n.Y36(r.Dx))},t.\u0275cmp=n.Xpm({type:t,selectors:[["docs-loading-button"]],decls:25,vars:8,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"api-table"]],template:function(o,i){1&o&&(n.TgZ(0,"h1",0),n._uU(1,"Angular Loading Button Directive"),n.qZA(),n.TgZ(2,"p",1),n._uU(3),n.qZA(),n._UZ(4,"docs-ads-carbon"),n.TgZ(5,"markdown"),n._uU(6,"\n  ## Examples\n\n  Cancellable on click by default.\n\n  ### Spinner\n"),n.qZA(),n.TgZ(7,"docs-example",2),n._UZ(8,"docs-loading-button01"),n.qZA(),n.TgZ(9,"markdown"),n._uU(10,"\n  ### Grow\n"),n.qZA(),n.TgZ(11,"docs-example",2),n._UZ(12,"docs-loading-button02"),n.qZA(),n.TgZ(13,"markdown"),n._uU(14,"\n  ### Disabled on loading\n\n  Non cancellable on click.\n"),n.qZA(),n.TgZ(15,"docs-example",2),n._UZ(16,"docs-loading-button03"),n.qZA(),n.TgZ(17,"markdown"),n._uU(18),n.TgZ(19,"div",3),n._uU(20,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `disabledOnLoading` | Makes button disabled when loading. | `boolean` | _false_ |\n    | `loading` | Loading state (set to true to start animation). | `boolean` | _false_ |\n    | `spinnerType` | Type of spinner. | `border` \\| `grow` |_border_|\n\n  "),n.qZA(),n._uU(21,"\n\n  ##### Outputs\n  "),n.TgZ(22,"div",3),n._uU(23,"\n\n    | name | description | type |\n    | ---- | ----------- | ---- |\n    | `loadingChange` | Event emitted on `loading` change. | `boolean` |\n\n  "),n.qZA(),n._uU(24,"\n"),n.qZA()),2&o&&(n.xp6(3),n.Oqu(i.description),n.xp6(4),n.Q6J("files",n.DdM(5,U)),n.xp6(4),n.Q6J("files",n.DdM(6,w)),n.xp6(4),n.Q6J("files",n.DdM(7,Q)),n.xp6(3),n.hij("\n  ---\n\n  ## API reference\n\n  ### LoadingButton Module\n\n  ",i.usage,"\n\n  ### cLoadingButton\n  _directive_\n\n  ##### Inputs\n  "))},dependencies:[f.U,u.lF,L.E,Z,v,k],encapsulation:2}),t})()}];let F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(D),g.Bz]}),t})();var N=a(417);let j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,h.O23,F,b.B,u.JP.forChild(),N.K]}),t})()},1590:(m,d,a)=>{a.d(d,{Z:()=>s});const s="```typescript\nimport { LoadingButtonModule } from '@coreui/angular';\n\n@NgModule({\n  imports: [LoadingButtonModule,]\n})\nexport class AppModule() { }\n```\n"}}]);