"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9055],{40498:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var l=n(45392),a=n(2784),r=n(45285),c=n(82895),o=n(72779),s=n.n(o);const i=(0,a.forwardRef)(((e,t)=>{let{children:n,component:l="a",className:r,...c}=e;return a.createElement(l,Object.assign({className:s()("header-brand",r)},c,{ref:t}),n)}));i.displayName="CHeaderBrand";var m=n(24883),d=n(28794),u=n(29916),p=n(4574),E=n(51680),h=n(79407),f=n(98708),g=n(66423),b=n(40011),v=n(93762),C=n(25967),y=n(18512),N=n(57871);const k=()=>{const{0:e,1:t}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(r.P,null,a.createElement(c.K,{fluid:!0},a.createElement(i,{href:"#"},"Header"),a.createElement(m.X,{onClick:()=>t(!e)}),a.createElement(d.V,{className:"header-collapse",visible:e},a.createElement(u.g,null,a.createElement(p.U,null,a.createElement(E.A,{href:"#",active:!0},"Home")),a.createElement(p.U,null,a.createElement(E.A,{href:"#"},"Link")),a.createElement(h.w,{variant:"nav-item"},a.createElement(f.S,{color:"secondary"},"Dropdown button"),a.createElement(g.$,null,a.createElement(b.$,{href:"#"},"Action"),a.createElement(b.$,{href:"#"},"Another action"),a.createElement(v.l),a.createElement(b.$,{href:"#"},"Something else here"))),a.createElement(p.U,null,a.createElement(E.A,{href:"#",disabled:!0},"Disabled"))),a.createElement(C.l,{className:"d-flex"},a.createElement(y.j,{className:"me-2",type:"search",placeholder:"Search"}),a.createElement(N.u,{type:"submit",color:"success",variant:"outline"},"Search"))))))};function H(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",h4:"h4",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n,ScssDocs:r}=t;return n||D("Example",!0),r||D("ScssDocs",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"supported-content",style:{position:"relative"}},"Supported content",a.createElement(t.a,{href:"#supported-content","aria-label":"supported content permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Headers come with built-in support for a handful of sub-components. Choose from the following as needed:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderBrand>")," for your company, product, or project name."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderNav>")," for a full-height and lightweight navigation (including support for dropdowns)."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderToggler>")," for use with our collapse plugin and other ",a.createElement(t.a,{href:"#responsive-behaviors"},"navigation toggling")," behaviors."),"\n",a.createElement(t.li,null,"Flex and spacing utilities for any form controls and actions."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"<CHeaderText>")," for adding vertically centered strings of text."),"\n",a.createElement(t.li,null,a.createElement(t.code,null,'<CCollapse className="header-collapse">')," for grouping and hiding header contents by a parent breakpoint."),"\n"),"\n",a.createElement(t.p,null,"Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the ",a.createElement(t.code,null,"lg")," (large) breakpoint."),"\n",a.createElement(t.h2,{id:"basic-usage",style:{position:"relative"}},"Basic usage",a.createElement(t.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n","\n",a.createElement(n,null,a.createElement(k)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CHeader>\n      <CContainer fluid>\n        <CHeaderBrand href="#">Header</CHeaderBrand>\n        <CHeaderToggler onClick={() => setVisible(!visible)} />\n        <CCollapse className="header-collapse" visible={visible}>\n          <CHeaderNav>\n            <CNavItem>\n              <CNavLink href="#" active>\n                Home\n              </CNavLink>\n            </CNavItem>\n            <CNavItem>\n              <CNavLink href="#">Link</CNavLink>\n            </CNavItem>\n            <CDropdown variant="nav-item">\n              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>\n              <CDropdownMenu>\n                <CDropdownItem href="#">Action</CDropdownItem>\n                <CDropdownItem href="#">Another action</CDropdownItem>\n                <CDropdownDivider />\n                <CDropdownItem href="#">Something else here</CDropdownItem>\n              </CDropdownMenu>\n            </CDropdown>\n            <CNavItem>\n              <CNavLink href="#" disabled>\n                Disabled\n              </CNavLink>\n            </CNavItem>\n          </CHeaderNav>\n          <CForm className="d-flex">\n            <CFormInput className="me-2" type="search" placeholder="Search" />\n            <CButton type="submit" color="success" variant="outline">\n              Search\n            </CButton>\n          </CForm>\n        </CCollapse>\n      </CContainer>\n    </CHeader>\n  </>\n)\n')),"\n",a.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",a.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",a.createElement(t.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"React headers use local CSS variables on ",a.createElement(t.code,null,".header")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",a.createElement(r,{file:"_header.scss",capture:"header-css-vars"}),"\n",a.createElement(t.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",a.createElement(t.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CHeader style={vars}>...</CHeader>\n")),"\n",a.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",a.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(r,{file:"_variables.scss",capture:"header-variables"}),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"cheader",style:{position:"relative"}},"CHeader",a.createElement(t.a,{href:"#cheader","aria-label":"cheader permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeader } from '@coreui/react'\n// or\nimport CHeader from '@coreui/react/src/components/header/CHeader'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"container")),a.createElement(t.td,null,"Defines optional container wrapping children elements."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")," | ",a.createElement(t.code,null,"'sm'")," | ",a.createElement(t.code,null,"'md'")," | ",a.createElement(t.code,null,"'lg'")," | ",a.createElement(t.code,null,"'xl'")," | ",a.createElement(t.code,null,"'xxl'")," | ",a.createElement(t.code,null,"'fluid'")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"position")),a.createElement(t.td,null,"Place header in non-static positions."),a.createElement(t.td,null,a.createElement(t.code,null,"'fixed'")," | ",a.createElement(t.code,null,"'sticky'")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheaderbrand",style:{position:"relative"}},"CHeaderBrand",a.createElement(t.a,{href:"#cheaderbrand","aria-label":"cheaderbrand permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderBrand } from '@coreui/react'\n// or\nimport CHeaderBrand from '@coreui/react/src/components/header/CHeaderBrand'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"href")),a.createElement(t.td,null,"The href attribute specifies the URL of the page the link goes to."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheaderdivider",style:{position:"relative"}},"CHeaderDivider",a.createElement(t.a,{href:"#cheaderdivider","aria-label":"cheaderdivider permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderDivider } from '@coreui/react'\n// or\nimport CHeaderDivider from '@coreui/react/src/components/header/CHeaderDivider'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheadernav",style:{position:"relative"}},"CHeaderNav",a.createElement(t.a,{href:"#cheadernav","aria-label":"cheadernav permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderNav } from '@coreui/react'\n// or\nimport CHeaderNav from '@coreui/react/src/components/header/CHeaderNav'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheadertext",style:{position:"relative"}},"CHeaderText",a.createElement(t.a,{href:"#cheadertext","aria-label":"cheadertext permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderText } from '@coreui/react'\n// or\nimport CHeaderText from '@coreui/react/src/components/header/CHeaderText'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cheadertoggler",style:{position:"relative"}},"CHeaderToggler",a.createElement(t.a,{href:"#cheadertoggler","aria-label":"cheadertoggler permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CHeaderToggler } from '@coreui/react'\n// or\nimport CHeaderToggler from '@coreui/react/src/components/header/CHeaderToggler'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))))}var w=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(H,e)):H(e)};function D(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var S=n(88038),T=n(53922),x=n(85338);const _=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(x.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(S.C,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(x.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(T.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(x.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(x.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function I(e){return a.createElement(_,e,a.createElement(w,e))}_.displayName="MdxLayout"},93762:function(e,t,n){n.d(t,{l:function(){return c}});var l=n(2784),a=n(72779),r=n.n(a);const c=(0,l.forwardRef)(((e,t)=>{let{className:n,...a}=e;return l.createElement("hr",Object.assign({className:r()("dropdown-divider",n)},a,{ref:t}))}));c.displayName="CDropdownDivider"},25967:function(e,t,n){n.d(t,{l:function(){return c}});var l=n(2784),a=n(72779),r=n.n(a);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:a,validated:c,...o}=e;return l.createElement("form",Object.assign({className:r()({"was-validated":c},a)||void 0},o,{ref:t}),n)}));c.displayName="CForm"},59062:function(e,t,n){n.d(t,{X:function(){return r}});var l=n(2784),a=n(3591);const r=e=>{let{describedby:t,feedback:n,feedbackInvalid:r,feedbackValid:c,invalid:o,tooltipFeedback:s,valid:i}=e;return l.createElement(l.Fragment,null,n&&(i||o)&&l.createElement(a.C,Object.assign({},o&&{id:t},{invalid:o,tooltip:s,valid:i}),n),r&&l.createElement(a.C,{id:t,invalid:!0,tooltip:s},r),c&&l.createElement(a.C,{valid:!0,tooltip:s},c))};r.displayName="CFormControlValidation"},10012:function(e,t,n){n.d(t,{e:function(){return m}});var l=n(2784),a=n(59062),r=n(72779),c=n.n(r);const o=(0,l.forwardRef)(((e,t)=>{let{children:n,className:a,...r}=e;return l.createElement("div",Object.assign({className:c()("form-floating",a)},r,{ref:t}),n)}));o.displayName="CFormFloating";var s=n(17200),i=n(40556);const m=e=>{let{children:t,describedby:n,feedback:r,feedbackInvalid:c,feedbackValid:m,floatingClassName:d,floatingLabel:u,id:p,invalid:E,label:h,text:f,tooltipFeedback:g,valid:b}=e;const v=()=>l.createElement(a.X,{describedby:n,feedback:r,feedbackInvalid:c,feedbackValid:m,floatingLabel:u,invalid:E,tooltipFeedback:g,valid:b});return u?l.createElement(o,{className:d},t,l.createElement(s.L,{htmlFor:p},h||u),f&&l.createElement(i.J,{id:n},f),l.createElement(v,null)):l.createElement(l.Fragment,null,h&&l.createElement(s.L,{htmlFor:p},h),t,f&&l.createElement(i.J,{id:n},f),l.createElement(v,null))};m.displayName="CFormControlWrapper"},3591:function(e,t,n){n.d(t,{C:function(){return c}});var l=n(2784),a=n(72779),r=n.n(a);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:a,component:c="div",invalid:o,tooltip:s,valid:i,...m}=e;return l.createElement(c,Object.assign({className:r()({["invalid-"+(s?"tooltip":"feedback")]:o,["valid-"+(s?"tooltip":"feedback")]:i},a)},m,{ref:t}),n)}));c.displayName="CFormFeedback"},18512:function(e,t,n){n.d(t,{j:function(){return o}});var l=n(2784),a=n(72779),r=n.n(a),c=n(10012);const o=(0,l.forwardRef)(((e,t)=>{let{children:n,className:a,delay:o=!1,feedback:s,feedbackInvalid:i,feedbackValid:m,floatingClassName:d,floatingLabel:u,id:p,invalid:E,label:h,onChange:f,plainText:g,size:b,text:v,tooltipFeedback:C,type:y="text",valid:N,...k}=e;const{0:H,1:w}=(0,l.useState)();return(0,l.useEffect)((()=>{const e=setTimeout((()=>H&&f&&f(H)),"number"==typeof o?o:500);return()=>clearTimeout(e)}),[H]),l.createElement(c.e,{describedby:k["aria-describedby"],feedback:s,feedbackInvalid:i,feedbackValid:m,floatingClassName:d,floatingLabel:u,id:p,invalid:E,label:h,text:v,tooltipFeedback:C,valid:N},l.createElement("input",Object.assign({className:r()(g?"form-control-plaintext":"form-control",{[`form-control-${b}`]:b,"form-control-color":"color"===y,"is-invalid":E,"is-valid":N},a),id:p,type:y,onChange:e=>o?w(e):f&&f(e)},k,{ref:t}),n))}));o.displayName="CFormInput"},17200:function(e,t,n){n.d(t,{L:function(){return c}});var l=n(2784),a=n(72779),r=n.n(a);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:a,customClassName:c,...o}=e;return l.createElement("label",Object.assign({className:null!=c?c:r()("form-label",a)},o,{ref:t}),n)}));c.displayName="CFormLabel"},40556:function(e,t,n){n.d(t,{J:function(){return c}});var l=n(2784),a=n(72779),r=n.n(a);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:a,component:c="div",...o}=e;return l.createElement(c,Object.assign({className:r()("form-text",a)},o,{ref:t}),n)}));c.displayName="CFormText"}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-header-mdx-d7d656dc9f8ce69f710b.js.map