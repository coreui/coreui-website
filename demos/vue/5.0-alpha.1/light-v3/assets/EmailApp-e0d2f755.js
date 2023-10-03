import{_ as g,bs as B,bt as w,bu as $,c as v,a,f as S,n as E,w as o,d as e,g as t,bv as N,bw as V,bx as y,b as I,e as h}from"./index-972d7b18.js";const T={name:"EmailSidebar",setup(){const l=B();return{logo:w,sygnet:$,sidebarUnfoldable:v(()=>l.state.sidebarUnfoldable),sidebarVisible:v(()=>l.state.sidebarVisible)}}};function U(l,r,x,d,k,A){const n=a("CIcon"),u=a("CSidebarBrand"),s=a("CNavItem"),m=a("router-link"),i=a("CBadge"),f=a("CSidebarNav"),b=a("CSidebarToggler"),C=a("CSidebar");return S(),E(C,{position:"fixed","color-scheme":"light",unfoldable:d.sidebarUnfoldable,visible:d.sidebarVisible,onVisibleChange:r[1]||(r[1]=c=>l.$store.commit({type:"updateSidebarVisible",value:c}))},{default:o(()=>[e(u,null,{default:o(()=>[e(n,{"custom-class-name":"sidebar-brand-full",icon:d.logo,height:35},null,8,["icon"]),e(n,{"custom-class-name":"sidebar-brand-narrow",icon:d.sygnet,height:35},null,8,["icon"])]),_:1}),e(f,null,{default:o(()=>[e(m,{to:"./compose",custom:""},{default:o(({href:c,navigate:_,isActive:p})=>[e(s,{active:p,href:c,onClick:_},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-pencil"}),t(" Compose ")]),_:2},1032,["active","href","onClick"])]),_:1}),e(m,{to:"./inbox",custom:""},{default:o(({href:c,navigate:_,isActive:p})=>[e(s,{active:p,href:c,onClick:_},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-inbox"}),t(" Inbox "),e(i,{class:"ms-auto",color:"danger"},{default:o(()=>[t("4")]),_:1})]),_:2},1032,["active","href","onClick"])]),_:1}),e(s,{href:"#"},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-star"}),t(" Stared ")]),_:1}),e(s,{href:"#"},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-paper-plane"}),t(" Sent ")]),_:1}),e(s,{href:"#"},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-trash"}),t(" Trash ")]),_:1}),e(s,{href:"#"},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-bookmark"}),t(" Important "),e(i,{class:"ms-auto",color:"info"},{default:o(()=>[t("5")]),_:1})]),_:1}),e(s,{href:"#"},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-inbox"}),t(" Spam "),e(i,{class:"ms-auto",color:"warning"},{default:o(()=>[t("25")]),_:1})]),_:1}),e(m,{to:"/dashboard",custom:""},{default:o(({href:c,navigate:_,isActive:p})=>[e(s,{active:p,class:"mt-auto",href:c,onClick:_},{default:o(()=>[e(n,{"custom-class-name":"nav-icon",icon:"cil-speedometer"}),t(" Dashboard "),e(i,{class:"ms-auto",color:"info"},{default:o(()=>[t("NEW")]),_:1})]),_:2},1032,["active","href","onClick"])]),_:1})]),_:1}),e(b,{class:"d-none d-lg-flex",onClick:r[0]||(r[0]=c=>l.$store.commit("toggleUnfoldable"))})]),_:1},8,["unfoldable","visible"])}const F=g(T,[["render",U]]),H={name:"EmailApp",components:{EmailSidebar:F,AppHeader:N,AppFooter:V,AppAside:y}},D={class:"wrapper d-flex flex-column min-vh-100"},W={class:"body flex-grow-1 px-3"};function j(l,r,x,d,k,A){const n=a("EmailSidebar"),u=a("AppHeader"),s=a("router-view"),m=a("CCardBody"),i=a("CCard"),f=a("CContainer"),b=a("AppFooter"),C=a("AppAside");return S(),I("div",null,[e(n),h("div",D,[e(u),h("div",W,[e(f,{lg:""},{default:o(()=>[e(i,{class:"mb-4"},{default:o(()=>[e(m,null,{default:o(()=>[e(s)]),_:1})]),_:1})]),_:1})]),e(b)]),e(C)])}const z=g(H,[["render",j]]);export{z as default};
