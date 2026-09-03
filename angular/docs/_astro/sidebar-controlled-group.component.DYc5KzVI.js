import{Dn as e,Et as t,Rr as n,Wt as r,_n as i,er as a,ln as o,un as s}from"./common.RNrjipFp.js";import{i as c}from"./_router_module-chunk.D9vpBBB4.js";import{Ft as l,It as u,gn as d,nt as f,pn as p,rt as m,tt as h}from"./coreui-angular-pro.BM9W57l3.js";var g=class c{constructor(){this.locked=n(!0),this.visible=n(!0)}onVisibleChange(e){(e||!this.locked())&&this.visible.set(e)}static{this.ɵfac=function(e){return new(e||c)}}static{this.ɵcmp=r({type:c,selectors:[[`docs-sidebar-controlled-group`]],decls:14,vars:2,consts:[[`switch`,``,1,`mb-3`],[`cFormCheckInput`,``,`type`,`checkbox`,`id`,`lockedGroup`,3,`change`,`checked`],[`cFormCheckLabel`,``,`for`,`lockedGroup`],[`visible`,``,1,`border-end`],[`toggler`,`Base`,3,`visibleChange`,`visible`],[`href`,`#`],[`toggler`,`Buttons`]],template:function(n,r){n&1&&(s(0,`c-form-check`,0)(1,`input`,1),i(`change`,function(){return r.locked.set(!r.locked())}),o(),s(2,`label`,2),a(3,`Keep the group open`),o()(),s(4,`c-sidebar`,3)(5,`c-sidebar-nav`)(6,`c-nav-group`,4),i(`visibleChange`,function(e){return r.onVisibleChange(e)}),s(7,`c-nav-item`,5),a(8,`Accordion`),o(),s(9,`c-nav-item`,5),a(10,`Breadcrumb`),o()(),s(11,`c-nav-group`,6)(12,`c-nav-item`,5),a(13,`Button groups`),o()()()()),n&2&&(t(),e(`checked`,r.locked()),t(5),e(`visible`,r.visible()))},dependencies:[h,f,m,l,u,p,d],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%] {
  position: relative;
  bottom: 0;
}
[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%] {
  position: sticky;
}

.docs-example[_ngcontent-%COMP%] {
  --%NS%cd-example-padding: 0;
}`]})}};g.clientProviders=[c([])];export{g as SidebarControlledGroupComponent};