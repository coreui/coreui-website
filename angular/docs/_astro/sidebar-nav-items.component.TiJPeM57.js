import{At as e,Jt as t,ir as n,jn as r,ln as i,mn as a,pn as o}from"./common.BTy9d9be.js";import{_n as s,bn as c,gn as l,hn as u,vn as d,xn as f,yn as p}from"./coreui-angular-pro.B1dgRO8W.js";import{i as m}from"./_router_module-chunk.PMbD0KUW.js";var h=[{title:!0,name:`Nav Title`},{name:`Nav item`,iconComponent:{name:`cilSpeedometer`}},{name:`With badge`,iconComponent:{name:`cilSpeedometer`},badge:{text:`NEW`,color:`primary`}},{name:`Nav dropdown`,iconComponent:{name:`cilPuzzle`},children:[{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}},{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}}]}],g=class m{constructor(){this.navItems=h}static{this.ɵfac=function(e){return new(e||m)}}static{this.ɵcmp=t({type:m,selectors:[[`docs-sidebar-nav-items`]],decls:7,vars:1,consts:[[`visible`,``,`id`,`sidebarNavItems`,1,`border-end`],[1,`border-bottom`],[3,`navItems`],[`cSidebarToggle`,`sidebarNavItems`,`toggle`,`unfoldable`,1,`border-top`,2,`cursor`,`pointer`],[`cSidebarToggler`,``,`aria-label`,`Toggle sidebar fold`]],template:function(t,s){t&1&&(a(0,`c-sidebar`,0)(1,`c-sidebar-header`,1)(2,`c-sidebar-brand`),n(3,`Sidebar Brand`),o()(),i(4,`c-sidebar-nav`,2),a(5,`c-sidebar-footer`,3),i(6,`button`,4),o()()),t&2&&(e(4),r(`navItems`,s.navItems))},dependencies:[l,d,u,p,s,c,f],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {
  position: relative;
  bottom: 0;
}
[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%] {
  position: sticky;
}

.docs-example[_ngcontent-%COMP%] {
  --%NS%cd-example-padding: 0;
}`]})}};g.clientProviders=[m([])];export{g as SidebarNavItemsComponent,h as navItems};