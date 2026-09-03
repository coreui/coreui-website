import{Dn as e,Et as t,Wt as n,an as r,er as i,ln as a,un as o}from"./common.RNrjipFp.js";import{i as s}from"./_router_module-chunk.D9vpBBB4.js";import{_n as c,fn as l,gn as u,hn as d,mn as f,pn as p,vn as m}from"./coreui-angular-pro.BM9W57l3.js";var h=[{title:!0,name:`Nav Title`},{name:`Nav item`,iconComponent:{name:`cilSpeedometer`}},{name:`With badge`,iconComponent:{name:`cilSpeedometer`},badge:{text:`NEW`,color:`primary`}},{name:`Nav dropdown`,iconComponent:{name:`cilPuzzle`},children:[{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}},{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}}]}],g=class s{constructor(){this.navItems=h}static{this.ɵfac=function(e){return new(e||s)}}static{this.ɵcmp=n({type:s,selectors:[[`docs-sidebar-supported-content`]],decls:8,vars:1,consts:[[`sidebar1`,`cSidebar`],[`visible`,``,1,`border-end`],[1,`border-bottom`],[3,`navItems`],[`cSidebarToggle`,`sidebar1`,`toggle`,`unfoldable`,1,`border-top`,2,`cursor`,`pointer`],[`cSidebarToggler`,``]],template:function(n,s){n&1&&(o(0,`c-sidebar`,1,0)(2,`c-sidebar-header`,2)(3,`c-sidebar-brand`),i(4,`Sidebar Brand`),a()(),r(5,`c-sidebar-nav`,3),o(6,`c-sidebar-footer`,4),r(7,`button`,5),a()()),n&2&&(t(5),e(`navItems`,s.navItems))},dependencies:[p,d,l,u,f,c,m],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {
  position: relative;
  bottom: 0;
}
[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%] {
  position: sticky;
}

.docs-example[_ngcontent-%COMP%] {
  --%NS%cd-example-padding: 0;
}`]})}};g.clientProviders=[s([])];export{g as SidebarSupportedContentComponent,h as navItems};