import{Mn as e,Yt as t,ar as n,hn as r,jt as i,mn as a,un as o}from"./common.B4dfOdHu.js";import{_n as s,fn as c,gn as l,hn as u,mn as d,pn as f,vn as p}from"./coreui-angular-pro.Da7qYJZa.js";import{i as m}from"./_router_module-chunk.Jh0oV1rm.js";var h=[{title:!0,name:`Nav Title`},{name:`Nav item`,iconComponent:{name:`cilSpeedometer`}},{name:`With badge`,iconComponent:{name:`cilSpeedometer`},badge:{text:`NEW`,color:`primary`}},{name:`Nav dropdown`,iconComponent:{name:`cilPuzzle`},children:[{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}},{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}}]}],g=class m{constructor(){this.navItems=h}static{this.ɵfac=function(e){return new(e||m)}}static{this.ɵcmp=t({type:m,selectors:[[`docs-sidebar-nav-items`]],decls:8,vars:1,consts:[[`sidebar1`,`cSidebar`],[`visible`,``,1,`border-end`],[1,`border-bottom`],[3,`navItems`],[`cSidebarToggle`,`sidebar1`,`toggle`,`unfoldable`,1,`border-top`,2,`cursor`,`pointer`],[`cSidebarToggler`,``]],template:function(t,s){t&1&&(r(0,`c-sidebar`,1,0)(2,`c-sidebar-header`,2)(3,`c-sidebar-brand`),n(4,`Sidebar Brand`),a()(),o(5,`c-sidebar-nav`,3),r(6,`c-sidebar-footer`,4),o(7,`button`,5),a()()),t&2&&(i(5),e(`navItems`,s.navItems))},dependencies:[f,u,c,l,d,s,p],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {
  position: relative;
  bottom: 0;
}
[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%] {
  position: sticky;
}

.docs-example[_ngcontent-%COMP%] {
  --%NS%cd-example-padding: 0;
}`]})}};g.clientProviders=[m([])];export{g as SidebarNavItemsComponent,h as navItems};