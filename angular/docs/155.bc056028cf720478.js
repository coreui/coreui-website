"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[155],{5155:(Z,r,o)=>{o.r(r),o.d(r,{TabsDocsModule:()=>N});var c=o(6895),g=o(5432),d=o(674),C=o(2349),l=o(1950),t=o(8256),v=o(1481),x=o(4217),y=o(6971),b=o(137),p=o(8359),u=o(7856),m=o(1735),h=o(7398);let A=(()=>{class n{constructor(){}onChange(e){console.log("onChange",e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["docs-tabs01"]],decls:24,vars:7,consts:[["variant","tabs"],["cNavLink","",3,"active","cTabContent","routerLink","tabPaneIdx"],["cNavLink","",3,"cTabContent","routerLink","tabPaneIdx"],["tabContent","cTabContent"],[1,"p-3"]],template:function(e,s){if(1&e&&(t.TgZ(0,"c-nav",0)(1,"a",1),t._uU(2,"Home"),t.qZA(),t.TgZ(3,"a",2),t._uU(4,"Profile"),t.qZA(),t.TgZ(5,"a",2),t._uU(6,"Contact"),t.qZA()(),t.TgZ(7,"c-tab-content",null,3)(9,"c-tab-pane",4),t._uU(10," This is some placeholder content the "),t.TgZ(11,"strong"),t._uU(12,"Home"),t.qZA(),t._uU(13," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA(),t.TgZ(14,"c-tab-pane",4),t._uU(15," This is some placeholder content the "),t.TgZ(16,"strong"),t._uU(17,"Profile"),t.qZA(),t._uU(18," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA(),t.TgZ(19,"c-tab-pane",4),t._uU(20," This is some placeholder content the "),t.TgZ(21,"strong"),t._uU(22,"Contact"),t.qZA(),t._uU(23," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA()()),2&e){const i=t.MAs(8);t.xp6(1),t.Q6J("active",!0)("cTabContent",i)("tabPaneIdx",0),t.xp6(2),t.Q6J("cTabContent",i)("tabPaneIdx",1),t.xp6(2),t.Q6J("cTabContent",i)("tabPaneIdx",2)}},dependencies:[b.r,p.V,u.C,m.E,h.h,l.yS],encapsulation:2}),n})();var f=o(5039);function U(n,a){if(1&n&&(t.TgZ(0,"c-nav-item")(1,"a",5),t._uU(2),t.qZA()()),2&n){const e=a.$implicit,s=a.index,i=a.last;t.oxw();const T=t.MAs(3);t.xp6(1),t.Q6J("cTabContent",T)("disabled",i)("tabPaneIdx",s),t.xp6(1),t.hij(" ",e.name," ")}}function P(n,a){if(1&n&&(t.TgZ(0,"c-tab-pane",6),t._uU(1," This is some placeholder content the "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA()),2&n){const e=a.$implicit;t.xp6(3),t.Oqu(e.name)}}let _=(()=>{class n{constructor(){this.panes=[{name:"Home 01",content:"One"},{name:"Profile 02",content:"Two"},{name:"Contact 03",content:"Three"},{name:"Disabled 04",content:"Four"}],this.activePane=0}onTabChange(e){this.activePane=e,console.log("onTabChange",e)}ngOnInit(){setTimeout(()=>{this.activePane=1,setTimeout(()=>{this.activePane=2,setTimeout(()=>{this.activePane=0},3e3)},3e3)},3e3)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["docs-tabs02"]],decls:5,vars:3,consts:[["variant","pills"],[4,"ngFor","ngForOf"],[3,"activeTabPaneIdx","activeTabPaneIdxChange"],["tabContent","cTabContent"],["class","p-3",4,"ngFor","ngForOf"],["cNavLink","",3,"cTabContent","disabled","routerLink","tabPaneIdx"],[1,"p-3"]],template:function(e,s){1&e&&(t.TgZ(0,"c-nav",0),t.YNc(1,U,3,4,"c-nav-item",1),t.qZA(),t.TgZ(2,"c-tab-content",2,3),t.NdJ("activeTabPaneIdxChange",function(T){return s.onTabChange(T)}),t.YNc(4,P,5,1,"c-tab-pane",4),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",s.panes),t.xp6(1),t.Q6J("activeTabPaneIdx",s.activePane),t.xp6(2),t.Q6J("ngForOf",s.panes))},dependencies:[c.sg,b.r,f.H,p.V,u.C,m.E,h.h,l.yS],encapsulation:2}),n})();function w(n,a){1&n&&(t.TgZ(0,"c-tab-pane",5),t._uU(1," This is some placeholder content the "),t.TgZ(2,"strong"),t._uU(3,"Contact"),t.qZA(),t._uU(4," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA())}let I=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["docs-tabs03"]],decls:23,vars:9,consts:[["variant","underline"],["cNavLink","",3,"active","cTabContent","routerLink","tabPaneIdx"],["cNavLink","",3,"cTabContent","routerLink","tabPaneIdx"],[3,"activeTabPaneIdx"],["tabContent","cTabContent"],[1,"p-3"],["class","p-3",4,"ngIf"]],template:function(e,s){if(1&e&&(t.TgZ(0,"c-nav",0)(1,"c-nav-item")(2,"a",1),t._uU(3," Home "),t.qZA()(),t.TgZ(4,"c-nav-item")(5,"a",2),t._uU(6," Profile "),t.qZA()(),t.TgZ(7,"c-nav-item")(8,"a",2),t._uU(9," Contact "),t.qZA()()(),t.TgZ(10,"c-tab-content",3,4)(12,"c-tab-pane",5),t._uU(13," This is some placeholder content the "),t.TgZ(14,"strong"),t._uU(15,"Home"),t.qZA(),t._uU(16," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA(),t.TgZ(17,"c-tab-pane",5),t._uU(18," This is some placeholder content the "),t.TgZ(19,"strong"),t._uU(20,"Profile"),t.qZA(),t._uU(21," tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. "),t.qZA(),t.YNc(22,w,5,0,"c-tab-pane",6),t.qZA()),2&e){const i=t.MAs(11);t.xp6(2),t.Q6J("active",!0)("cTabContent",i)("tabPaneIdx",0),t.xp6(3),t.Q6J("cTabContent",i)("tabPaneIdx",1),t.xp6(3),t.Q6J("cTabContent",i)("tabPaneIdx",2),t.xp6(2),t.Q6J("activeTabPaneIdx",1),t.xp6(12),t.Q6J("ngIf",i.activeTabPaneIdx>0)}},dependencies:[c.O5,b.r,f.H,p.V,u.C,m.E,h.h,l.yS],encapsulation:2}),n})();const J=function(){return["components/tabs/examples/tabs01.component.html"]},q=function(){return["components/tabs/examples/tabs02.component.html","components/tabs/examples/tabs02.component.ts"]},M=function(){return["components/tabs/examples/tabs03.component.html"]},S=[{path:"",component:(()=>{class n{constructor(e,s){this.metaService=e,this.titleService=s,this.usage=o(9565).Z,this.title="Angular Tabs Component",this.description="CoreUI Angular Tabs can be used to create a tabbed interface with tabbable regions."}ngOnInit(){this.titleService.setTitle(this.title),this.metaService.updateTag({name:"description",content:this.description})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.h_),t.Y36(v.Dx))},n.\u0275cmp=t.Xpm({type:n,selectors:[["docs-tabs"]],decls:28,vars:8,consts:[["id","getting-started"],[1,"docs-lead","fs-4","fw-light"],[3,"files"],[1,"api-table"]],template:function(e,s){1&e&&(t.TgZ(0,"h1",0),t._uU(1,"Angular Tabs Components"),t.qZA(),t.TgZ(2,"p",1),t._uU(3),t.qZA(),t._UZ(4,"docs-ads-carbon"),t.TgZ(5,"markdown"),t._uU(6,'\n  ## Tab Panes\n\n  Dynamic tabbed interfaces, as described in the [WAI ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`,\n  `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state\n  to users of assistive technologies (such as screen readers).\n\n  Note that dynamic tabbed interfaces should not contain dropdown menus, as this causes both usability and accessibility\n  issues. From a usability perspective, the fact that the currently displayed tab\'s trigger element is not immediately\n  visible (as it\'s inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is\n  currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be\n  easily made understandable to users of assistive technologies.\n\n  ## Examples\n  ### Tabs\n'),t.qZA(),t.TgZ(7,"docs-example",2),t._UZ(8,"docs-tabs01"),t.qZA(),t.TgZ(9,"markdown"),t._uU(10,"\n  ### Pills\n"),t.qZA(),t.TgZ(11,"docs-example",2),t._UZ(12,"docs-tabs02"),t.qZA(),t.TgZ(13,"markdown"),t._uU(14,"\n  ### Underline\n\n  Notice: conditional rendering of third `c-tab-pane` with `*ngIf` disables/enables third `cNavLink`\n"),t.qZA(),t.TgZ(15,"docs-example",2),t._UZ(16,"docs-tabs03"),t.qZA(),t.TgZ(17,"markdown"),t._uU(18),t.TgZ(19,"div",3),t._uU(20,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `activeTabPaneIdx` | Preset active c`-tab-pane`. | `number` | _undefined_ |\n\n  "),t.qZA(),t._uU(21,"\n\n  ##### Outputs\n  "),t.TgZ(22,"div",3),t._uU(23,"\n\n    | name | description | type |\n    | ---- | ----------- | ---- |\n    | `activeTabPaneIdxChange` | Event emitted on `activeTabPaneIdx` change. | `number` |\n  "),t.qZA(),t._uU(24,"\n\n\n  ### c-tab-pane\n  _component_\n  `exportAs: cTabPane`\n\n\n  ### cTabContent\n  _directive_\n\n  ##### Inputs\n  "),t.TgZ(25,"div",3),t._uU(26,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `cTabContent` | `c-tab-pane` component reference. | `TabContentComponent` | _undefined_ |\n    | `active` | Set active state of tab content. | `boolean` | _false_ |\n    | `disabled` | Set disabled state of tab content. | `boolean` | _false_ |\n    | `tabPaneIdx` | `c-tab-pane` index respectively. | `number` | _undefined_ |\n\n  "),t.qZA(),t._uU(27,"\n\n\n"),t.qZA()),2&e&&(t.xp6(3),t.Oqu(s.description),t.xp6(4),t.Q6J("files",t.DdM(5,J)),t.xp6(4),t.Q6J("files",t.DdM(6,q)),t.xp6(4),t.Q6J("files",t.DdM(7,M)),t.xp6(3),t.hij("\n  ---\n\n  ## API reference\n\n  ### Tabs Module\n\n  ",s.usage,"\n\n  ### c-tab-content\n  _component_\n  `exportAs: cTabContent`\n\n  ##### Inputs\n  "))},dependencies:[x.U,g.lF,y.E,A,_,I],encapsulation:2}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(S),l.Bz]}),n})();var Q=o(417);let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,d.dGk,d.P4_,F,d.gzQ,C.B,g.JP.forChild(),Q.K]}),n})()},9565:(Z,r,o)=>{o.d(r,{Z:()=>c});const c="```typescript\nimport { NavModule, TabsModule } from '@coreui/angular';\n\n@NgModule({\n    imports: [\n      NavModule, \n      TabsModule\n    ]\n})\nexport class AppModule() { }\n```\n"}}]);