import{$n as e,En as t,Et as n,Ut as r,cn as i,in as a,ln as o}from"./common.B_57c5kQ.js";import{c as s,i as c}from"./_router_module-chunk.CjMjjFG-.js";import{dn as l,fn as u,gn as d,hn as f,mn as p,pn as m,un as h}from"./coreui-angular-pro.BRnqnQqQ.js";var g=[{title:!0,name:`Nav Title`},{name:`Nav item`,iconComponent:{name:`cilSpeedometer`}},{name:`With badge`,iconComponent:{name:`cilSpeedometer`},badge:{text:`NEW`,color:`primary`}},{name:`Nav dropdown`,iconComponent:{name:`cilPuzzle`},children:[{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}},{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}}]}],_=class s{constructor(){this.navItems=g}static{this.ɵfac=function(e){return new(e||s)}}static{this.ɵcmp=r({type:s,selectors:[[`docs-sidebar-supported-content`]],decls:8,vars:1,consts:[[`sidebar1`,`cSidebar`],[`visible`,``,1,`border-end`],[1,`border-bottom`],[3,`navItems`],[`cSidebarToggle`,`sidebar1`,`toggle`,`unfoldable`,1,`border-top`,2,`cursor`,`pointer`],[`cSidebarToggler`,``]],template:function(r,s){r&1&&(o(0,`c-sidebar`,1,0)(2,`c-sidebar-header`,2)(3,`c-sidebar-brand`),e(4,`Sidebar Brand`),i()(),a(5,`c-sidebar-nav`,3),o(6,`c-sidebar-footer`,4),a(7,`button`,5),i()()),r&2&&(n(5),t(`navItems`,s.navItems))},dependencies:[l,m,h,p,u,f,d],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {
  position: relative;
  bottom: 0;
}
[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%] {
  position: sticky;
}

.docs-example[_ngcontent-%COMP%] {
  --%NS%cd-example-padding: 0;
}`]})}};_.clientProviders=[s(),c([])];export{_ as SidebarSupportedContentComponent,g as navItems};