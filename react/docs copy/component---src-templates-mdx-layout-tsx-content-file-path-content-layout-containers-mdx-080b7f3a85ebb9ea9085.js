"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[6762],{599:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var l=n(5392),a=n(2784),r=n(2097);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",strong:"strong",em:"em",ul:"ul",li:"li",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",h3:"h3",div:"div"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"how-they-work",style:{position:"relative"}},"How they work",a.createElement(t.a,{href:"#how-they-work","aria-label":"how they work permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Containers are the most basic layout element in CoreUI for React.js and are ",a.createElement(t.strong,null,"required when using our default grid system"),". Containers are used to contain, pad, and (sometimes) center the content within them. While containers ",a.createElement(t.em,null,"can")," be nested, most layouts do not require a nested container."),"\n",a.createElement(t.p,null,"CoreUI for React.js comes with three different containers:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CContainer>"),", which sets a ",a.createElement(t.code,null,"max-width")," at each responsive breakpoint"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CContainer fluid>"),", which is ",a.createElement(t.code,null,"width: 100%")," at all breakpoints"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CContainer {sm|md|lg|xl|xxl}>"),", which is ",a.createElement(t.code,null,"width: 100%")," until the specified breakpoint"),"\n"),"\n",a.createElement(t.p,null,"The table below illustrates how each container's ",a.createElement(t.code,null,"max-width")," compares to the original ",a.createElement(t.code,null,"<CContainer>")," and ",a.createElement(t.code,null,"<CContainer fluid>")," across each breakpoint."),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th),a.createElement(t.th,null,"Extra small",a.createElement("div",{className:"fw-normal"},"<576px")),a.createElement(t.th,null,"Small",a.createElement("div",{className:"fw-normal"},"≥576px")),a.createElement(t.th,null,"Medium",a.createElement("div",{className:"fw-normal"},"≥768px")),a.createElement(t.th,null,"Large",a.createElement("div",{className:"fw-normal"},"≥992px")),a.createElement(t.th,null,"X-Large",a.createElement("div",{className:"fw-normal"},"≥1200px")),a.createElement(t.th,null,"XX-Large",a.createElement("div",{className:"fw-normal"},"≥1400px")))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,"540px"),a.createElement(t.td,null,"720px"),a.createElement(t.td,null,"960px"),a.createElement(t.td,null,"1140px"),a.createElement(t.td,null,"1320px")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container-sm")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,"540px"),a.createElement(t.td,null,"720px"),a.createElement(t.td,null,"960px"),a.createElement(t.td,null,"1140px"),a.createElement(t.td,null,"1320px")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container-md")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,"720px"),a.createElement(t.td,null,"960px"),a.createElement(t.td,null,"1140px"),a.createElement(t.td,null,"1320px")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container-lg")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,"960px"),a.createElement(t.td,null,"1140px"),a.createElement(t.td,null,"1320px")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container-xl")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,"1140px"),a.createElement(t.td,null,"1320px")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container-xxl")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,"1320px")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.code,null,".container-fluid")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%")),a.createElement(t.td,null,a.createElement("span",{className:"text-body-secondary"},"100%"))))),"\n",a.createElement(t.h2,{id:"default-container",style:{position:"relative"}},"Default container",a.createElement(t.a,{href:"#default-container","aria-label":"default container permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Our default ",a.createElement(t.code,null,"<CContainer>")," class is a responsive, fixed-width container, meaning its ",a.createElement(t.code,null,"max-width")," changes at each breakpoint."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"<CContainer>\n  Content here\n</CContainer>\n")),"\n",a.createElement(t.h2,{id:"responsive-containers",style:{position:"relative"}},"Responsive containers",a.createElement(t.a,{href:"#responsive-containers","aria-label":"responsive containers permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply ",a.createElement(t.code,null,"max-width"),"s for each of the higher breakpoints. For example, ",a.createElement(t.code,null,"<CContainer sm>")," is 100% wide to start until the ",a.createElement(t.code,null,"sm")," breakpoint is reached, where it will scale up with ",a.createElement(t.code,null,"md"),", ",a.createElement(t.code,null,"lg"),", ",a.createElement(t.code,null,"xl"),", and ",a.createElement(t.code,null,"xxl"),"."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"<CContainer sm>100% wide until small breakpoint</CContainer>\n<CContainer md>100% wide until medium breakpoint</CContainer>\n<CContainer lg>100% wide until large breakpoint</CContainer>\n<CContainer xl>100% wide until extra large breakpoint</CContainer>\n<CContainer xxl>100% wide until extra extra large breakpoint</CContainer>\n")),"\n",a.createElement(t.h2,{id:"fluid-containers",style:{position:"relative"}},"Fluid containers",a.createElement(t.a,{href:"#fluid-containers","aria-label":"fluid containers permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Use ",a.createElement(t.code,null,"<CContainer fluid>")," for a full width container, spanning the entire width of the viewport."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"<CContainer fluid>\n  Content here\n</CContainer>\n")),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"ccontainer",style:{position:"relative"}},"CContainer",a.createElement(t.a,{href:"#ccontainer","aria-label":"ccontainer permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CContainer } from '@coreui/react'\n// or\nimport CContainer from '@coreui/react/src/components/grid/CContainer'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"fluid")),a.createElement(t.td,null,"Set container 100% wide, spanning the entire width of the viewport."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"lg")),a.createElement(t.td,null,"Set container 100% wide until large breakpoint."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"md")),a.createElement(t.td,null,"Set container 100% wide until medium breakpoint."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"sm")),a.createElement(t.td,null,"Set container 100% wide until small breakpoint."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"xl")),a.createElement(t.td,null,"Set container 100% wide until X-large breakpoint."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"xxl")),a.createElement(t.td,null,"Set container 100% wide until XX-large breakpoint."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-"))))))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},o=n(1380);const s=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(o.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(r.e_,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(o.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function i(e){return a.createElement(s,e,a.createElement(m,e))}s.displayName="MdxLayout"},5392:function(e,t,n){n.d(t,{Zo:function(){return m},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function m({components:e,children:t,disableParentContext:n}){let m;return m=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:m},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-layout-containers-mdx-080b7f3a85ebb9ea9085.js.map