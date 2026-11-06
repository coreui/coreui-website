import{i as e}from"./_router_module-chunk.BNwvBnZk.js";import{At as t,Fr as n,Jt as r,jn as i,kt as a,ln as o,mn as s,pn as c,rr as l}from"./common.CGY7PYyH.js";import{_n as u,bn as d,gn as f,hn as p,vn as m,xn as h,yn as g}from"./coreui-angular-pro.CX-FyB8A.js";import{t as _}from"./cil-puzzle.Bof4v2Uy.js";import{t as v}from"./cil-speedometer.BR3zIgfo.js";import{r as y}from"./coreui-icons-angular.BIGKgFa4.js";var b=[{title:!0,name:`Nav Title`},{name:`Nav item`,iconComponent:{name:`cilSpeedometer`}},{name:`With badge`,iconComponent:{name:`cilSpeedometer`},badge:{text:`NEW`,color:`primary`}},{name:`Nav dropdown`,iconComponent:{name:`cilPuzzle`},children:[{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}},{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}}]}],x=class e{constructor(){this.navItems=b,n(y).icons={cilPuzzle:_,cilSpeedometer:v}}static{this.ɵfac=function(t){return new(t||e)}}static{this.ɵcmp=r({type:e,selectors:[[`docs-sidebar-nav-items`]],features:[a([y])],decls:7,vars:1,consts:[[`visible`,``,`id`,`sidebarNavItems`,1,`border-end`],[1,`border-bottom`],[3,`navItems`],[`cSidebarToggle`,`sidebarNavItems`,`toggle`,`unfoldable`,1,`border-top`,2,`cursor`,`pointer`],[`cSidebarToggler`,``,`aria-label`,`Toggle sidebar fold`]],template:function(e,n){e&1&&(s(0,`c-sidebar`,0)(1,`c-sidebar-header`,1)(2,`c-sidebar-brand`),l(3,`Sidebar Brand`),c()(),o(4,`c-sidebar-nav`,2),s(5,`c-sidebar-footer`,3),o(6,`button`,4),c()()),e&2&&(t(4),i(`navItems`,n.navItems))},dependencies:[f,m,p,g,u,d,h],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {
  position: relative;
  bottom: 0;
}
[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%] {
  position: sticky;
}

.docs-example[_ngcontent-%COMP%] {
  --%NS%cd-example-padding: 0;
}`]})}};x.clientProviders=[e([])];export{x as SidebarNavItemsComponent,b as navItems};