"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9055],{80210:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(45392),a=n(2784),r=n(18910);const c=()=>{const{0:e,1:t}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(r.PO,null,a.createElement(r.KB,{fluid:!0},a.createElement(r.qy,{href:"#"},"Header"),a.createElement(r.X4,{onClick:()=>t(!e)}),a.createElement(r.V9,{className:"header-collapse",visible:e},a.createElement(r.g3,null,a.createElement(r.U6,null,a.createElement(r.AQ,{href:"#",active:!0},"Home")),a.createElement(r.U6,null,a.createElement(r.AQ,{href:"#"},"Link")),a.createElement(r.w5,{variant:"nav-item"},a.createElement(r.SQ,{color:"secondary"},"Dropdown button"),a.createElement(r.$H,null,a.createElement(r.$f,{href:"#"},"Action"),a.createElement(r.$f,{href:"#"},"Another action"),a.createElement(r.lK),a.createElement(r.$f,{href:"#"},"Something else here"))),a.createElement(r.U6,null,a.createElement(r.AQ,{href:"#",disabled:!0},"Disabled"))),a.createElement(r.lx,{className:"d-flex"},a.createElement(r.jO,{className:"me-2",type:"search",placeholder:"Search"}),a.createElement(r.u5,{type:"submit",color:"success",variant:"outline"},"Search"))))))};function o(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",h4:"h4",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n,ScssDocs:r}=t;return n||m("Example",!0),r||m("ScssDocs",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"supported-content",style:{position:"relative"}},"Supported content",a.createElement(t.a,{href:"#supported-content","aria-label":"supported content permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Headers come with built-in support for a handful of sub-components. Choose from the following as needed:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderBrand>")," for your company, product, or project name."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderNav>")," for a full-height and lightweight navigation (including support for dropdowns)."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderToggler>")," for use with our collapse plugin and other ",a.createElement(t.a,{href:"#responsive-behaviors"},"navigation toggling")," behaviors."),"\n",a.createElement(t.li,null,"Flex and spacing utilities for any form controls and actions."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderText>")," for adding vertically centered strings of text."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,'<CCollapse className="header-collapse">')," for grouping and hiding header contents by a parent breakpoint."),"\n"),"\n",a.createElement(t.p,null,"Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the ",a.createElement(t.code,null,"lg")," (large) breakpoint."),"\n",a.createElement(t.h2,{id:"basic-usage",style:{position:"relative"}},"Basic usage",a.createElement(t.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n","\n",a.createElement(n,null,a.createElement(c)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CHeader>\n      <CContainer fluid>\n        <CHeaderBrand href="#">Header</CHeaderBrand>\n        <CHeaderToggler onClick={() => setVisible(!visible)} />\n        <CCollapse className="header-collapse" visible={visible}>\n          <CHeaderNav>\n            <CNavItem>\n              <CNavLink href="#" active>\n                Home\n              </CNavLink>\n            </CNavItem>\n            <CNavItem>\n              <CNavLink href="#">Link</CNavLink>\n            </CNavItem>\n            <CDropdown variant="nav-item">\n              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>\n              <CDropdownMenu>\n                <CDropdownItem href="#">Action</CDropdownItem>\n                <CDropdownItem href="#">Another action</CDropdownItem>\n                <CDropdownDivider />\n                <CDropdownItem href="#">Something else here</CDropdownItem>\n              </CDropdownMenu>\n            </CDropdown>\n            <CNavItem>\n              <CNavLink href="#" disabled>\n                Disabled\n              </CNavLink>\n            </CNavItem>\n          </CHeaderNav>\n          <CForm className="d-flex">\n            <CFormInput className="me-2" type="search" placeholder="Search" />\n            <CButton type="submit" color="success" variant="outline">\n              Search\n            </CButton>\n          </CForm>\n        </CCollapse>\n      </CContainer>\n    </CHeader>\n  </>\n)\n')),"\n",a.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",a.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",a.createElement(t.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"React headers use local CSS variables on ",a.createElement(t.code,null,".header")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",a.createElement(r,{file:"_header.scss",capture:"header-css-vars"}),"\n",a.createElement(t.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",a.createElement(t.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CHeader style={vars}>...</CHeader>\n")),"\n",a.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",a.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(r,{file:"_variables.scss",capture:"header-variables"}),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"cheader",style:{position:"relative"}},"CHeader",a.createElement(t.a,{href:"#cheader","aria-label":"cheader permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeader } from '@coreui/react'\n// or\nimport CHeader from '@coreui/react/src/components/header/CHeader'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"container")),a.createElement(t.td,null,"Defines optional container wrapping children elements."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")," | ",a.createElement(t.code,null,"'sm'")," | ",a.createElement(t.code,null,"'md'")," | ",a.createElement(t.code,null,"'lg'")," | ",a.createElement(t.code,null,"'xl'")," | ",a.createElement(t.code,null,"'xxl'")," | ",a.createElement(t.code,null,"'fluid'")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"position")),a.createElement(t.td,null,"Place header in non-static positions."),a.createElement(t.td,null,a.createElement(t.code,null,"'fixed'")," | ",a.createElement(t.code,null,"'sticky'")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheaderbrand",style:{position:"relative"}},"CHeaderBrand",a.createElement(t.a,{href:"#cheaderbrand","aria-label":"cheaderbrand permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderBrand } from '@coreui/react'\n// or\nimport CHeaderBrand from '@coreui/react/src/components/header/CHeaderBrand'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"href")),a.createElement(t.td,null,"The href attribute specifies the URL of the page the link goes to."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheaderdivider",style:{position:"relative"}},"CHeaderDivider",a.createElement(t.a,{href:"#cheaderdivider","aria-label":"cheaderdivider permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderDivider } from '@coreui/react'\n// or\nimport CHeaderDivider from '@coreui/react/src/components/header/CHeaderDivider'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheadernav",style:{position:"relative"}},"CHeaderNav",a.createElement(t.a,{href:"#cheadernav","aria-label":"cheadernav permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderNav } from '@coreui/react'\n// or\nimport CHeaderNav from '@coreui/react/src/components/header/CHeaderNav'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheadertext",style:{position:"relative"}},"CHeaderText",a.createElement(t.a,{href:"#cheadertext","aria-label":"cheadertext permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderText } from '@coreui/react'\n// or\nimport CHeaderText from '@coreui/react/src/components/header/CHeaderText'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheadertoggler",style:{position:"relative"}},"CHeaderToggler",a.createElement(t.a,{href:"#cheadertoggler","aria-label":"cheadertoggler permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderToggler } from '@coreui/react'\n// or\nimport CHeaderToggler from '@coreui/react/src/components/header/CHeaderToggler'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=n(18722);const u=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(i.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(i.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function d(e){return a.createElement(u,e,a.createElement(s,e))}u.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-header-mdx-ff58efeedd92c5b95fb2.js.map