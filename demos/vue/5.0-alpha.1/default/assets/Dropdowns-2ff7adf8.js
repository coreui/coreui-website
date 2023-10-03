import{_ as C,a as u,d as k,w as t,b as g,f as e,h as o,e as w,i as y,F as v,g as l,t as b}from"./index-a769b091.js";const A={name:"Dropdowns"},x=l("strong",null,"Vue Dropdown",-1),z=l("small",null,"Single button",-1),B=l("p",{class:"text-body-secondary small"},[o(" Here's how you can put them to work with either "),l("code",null,"<button>"),o(" elements: ")],-1),V=l("p",{class:"text-body-secondary small"}," The best part is you can do this with any button variant, too: ",-1),T=l("strong",null,"Vue Dropdown",-1),N=l("small",null,"Split button",-1),$=l("p",{class:"text-body-secondary small"},[o(" Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of boolean prop "),l("code",null,"split"),o(" for proper spacing around the dropdown caret. ")],-1),E=l("p",{class:"text-body-secondary small"},[o(" We use this extra class to reduce the horizontal "),l("code",null,"padding"),o(" on either side of the caret by 25% and remove the "),l("code",null,"margin-left"),o(" that's attached for normal button dropdowns. Those additional changes hold the caret centered in the split button and implement a more properly sized hit area next to the main button. ")],-1),H=l("strong",null,"Vue Dropdown",-1),L=l("small",null,"Sizing",-1),F=l("p",{class:"text-body-secondary small"}," Button dropdowns work with buttons of all sizes, including default and split dropdown buttons. ",-1),G=l("strong",null,"Vue Dropdown",-1),I=l("small",null,"Single button",-1),M=l("p",{class:"text-body-secondary small"},[o(" Opt into darker dropdowns to match a dark navbar or custom style by set "),l("code",null,"dark"),o(" property. No changes are required to the dropdown items. ")],-1),R=l("p",{class:"text-body-secondary small"}," And putting it to use in a navbar: ",-1),q={class:"navbar navbar-expand-lg navbar-dark bg-dark"},O={class:"container-fluid"},W=l("a",{class:"navbar-brand",href:"https://coreui.io/vue/"}," Navbar ",-1),j=l("button",{class:"navbar-toggler",type:"button","data-coreui-toggle":"collapse","data-coreui-target":"#navbarNavDarkDropdown","aria-controls":"navbarNavDarkDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[l("span",{class:"navbar-toggler-icon"})],-1),J={id:"navbarNavDarkDropdown",class:"collapse navbar-collapse"},K={class:"navbar-nav"},P=l("strong",null,"Vue Dropdown",-1),Q=l("small",null,"Dropup",-1),U=l("p",{class:"text-body-secondary small"},[o(" Trigger dropdown menus above elements by adding "),l("code",null,'direction="dropup"'),o(" to the "),l("code",null,"<CDropdown>"),o(" component. ")],-1),X=l("strong",null,"Vue Dropdown",-1),Y=l("small",null,"Dropright",-1),Z=l("p",{class:"text-body-secondary small"},[o(" Trigger dropdown menus at the right of the elements by adding "),l("code",null,'direction="dropend"'),o(" to the "),l("code",null,"<CDropdown>"),o(" component. ")],-1),ee=l("strong",null,"Vue Dropdown",-1),te=l("small",null,"Dropleft",-1),oe=l("p",{class:"text-body-secondary small"},[o(" Trigger dropdown menus at the left of the elements by adding "),l("code",null,'direction="dropstart"'),o(" to the "),l("code",null,"<CDropdown>"),o(" component. ")],-1);function ne(le,ae,de,re,se,ue){const i=u("CCardHeader"),a=u("CDropdownToggle"),n=u("CDropdownItem"),d=u("CDropdownMenu"),r=u("CDropdown"),c=u("DocsExample"),s=u("CDropdownDivider"),f=u("CCardBody"),h=u("CCard"),p=u("CCol"),m=u("CButton"),D=u("CButtonGroup"),S=u("CRow");return g(),k(S,null,{default:t(()=>[e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[x,o(),z]),_:1}),e(f,null,{default:t(()=>[B,e(c,{href:"components/dropdown.html#single-button"},{default:t(()=>[e(r,null,{default:t(()=>[e(a,{color:"secondary"},{default:t(()=>[o("Dropdown button")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1})]),_:1})]),_:1})]),_:1}),V,e(c,{href:"components/dropdown.html#single-button"},{default:t(()=>[(g(),w(v,null,y(["primary","secondary","success","danger","warning","info","light","dark"],_=>e(r,{key:_,variant:"btn-group"},{default:t(()=>[e(a,{color:_},{default:t(()=>[o(b(_),1)]),_:2},1032,["color"]),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[T,o(),N]),_:1}),e(f,null,{default:t(()=>[$,E,e(c,{href:"components/dropdown.html#split-button"},{default:t(()=>[(g(),w(v,null,y(["primary","secondary","success","danger","warning","info","light","dark"],_=>e(r,{key:_,variant:"btn-group"},{default:t(()=>[e(m,{color:_},{default:t(()=>[o(b(_),1)]),_:2},1032,["color"]),e(a,{color:_,split:""},{default:t(()=>[o(b(_),1)]),_:2},1032,["color"]),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[H,o(),L]),_:1}),e(f,null,{default:t(()=>[F,e(c,{href:"components/dropdown.html#sizing"},{default:t(()=>[e(r,{variant:"btn-group"},{default:t(()=>[e(a,{color:"secondary",size:"lg"},{default:t(()=>[o(" Large button ")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1}),e(r,{variant:"btn-group"},{default:t(()=>[e(m,{color:"secondary",size:"lg"},{default:t(()=>[o(" Large split button ")]),_:1}),e(a,{color:"secondary",size:"lg",split:""}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1})]),_:1}),e(c,{href:"components/dropdown.html#sizing"},{default:t(()=>[e(r,{variant:"btn-group"},{default:t(()=>[e(a,{color:"secondary",size:"sm"},{default:t(()=>[o(" Small button ")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1}),e(r,{variant:"btn-group"},{default:t(()=>[e(m,{color:"secondary",size:"sm"},{default:t(()=>[o(" Small split button ")]),_:1}),e(a,{color:"secondary",size:"sm",split:""}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[G,o(),I]),_:1}),e(f,null,{default:t(()=>[M,e(c,{href:"components/dropdown.html#dark-dropdowns"},{default:t(()=>[e(r,{dark:""},{default:t(()=>[e(a,{color:"secondary"},{default:t(()=>[o("Dropdown button")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1})]),_:1}),R,e(c,{href:"components/dropdown.html#dark-dropdowns"},{default:t(()=>[l("nav",q,[l("div",O,[W,j,l("div",J,[l("ul",K,[e(r,{dark:"",component:"li",variant:"nav-item"},{default:t(()=>[e(a,null,{default:t(()=>[o("Dropdown")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1})])])])])]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[P,o(),Q]),_:1}),e(f,null,{default:t(()=>[U,e(c,{href:"components/dropdown.html#dropup"},{default:t(()=>[e(r,{variant:"btn-group",direction:"dropup"},{default:t(()=>[e(a,{color:"secondary"},{default:t(()=>[o("Dropdown")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1}),e(r,{variant:"btn-group",direction:"dropup"},{default:t(()=>[e(m,{color:"secondary"},{default:t(()=>[o("Small split button")]),_:1}),e(a,{color:"secondary",split:""}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[X,o(),Y]),_:1}),e(f,null,{default:t(()=>[Z,e(c,{href:"components/dropdown.html#dropright"},{default:t(()=>[e(r,{variant:"btn-group",direction:"dropend"},{default:t(()=>[e(a,{color:"secondary"},{default:t(()=>[o("Dropdown")]),_:1}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1}),e(r,{variant:"btn-group",direction:"dropend"},{default:t(()=>[e(m,{color:"secondary"},{default:t(()=>[o("Small split button")]),_:1}),e(a,{color:"secondary",split:""}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{xs:12},{default:t(()=>[e(h,{class:"mb-4"},{default:t(()=>[e(i,null,{default:t(()=>[ee,o(),te]),_:1}),e(f,null,{default:t(()=>[oe,e(c,{href:"components/dropdown.html#dropleft"},{default:t(()=>[e(D,null,{default:t(()=>[e(r,{variant:"btn-group",direction:"dropstart"},{default:t(()=>[e(a,{color:"secondary",split:""}),e(d,null,{default:t(()=>[e(n,{href:"#"},{default:t(()=>[o("Action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Another action")]),_:1}),e(n,{href:"#"},{default:t(()=>[o("Something else here")]),_:1}),e(s),e(n,{href:"#"},{default:t(()=>[o("Separated link")]),_:1})]),_:1})]),_:1}),e(m,{color:"secondary"},{default:t(()=>[o("Small split button")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const _e=C(A,[["render",ne]]);export{_e as default};
