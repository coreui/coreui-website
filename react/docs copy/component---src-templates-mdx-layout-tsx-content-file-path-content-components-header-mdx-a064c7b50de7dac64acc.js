"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9055],{1366:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(5392),l=t(2784),a=t(2097);const o=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(a.PO,null,l.createElement(a.KB,{fluid:!0},l.createElement(a.qy,{href:"#"},"Header"),l.createElement(a.X4,{onClick:()=>n(!e)}),l.createElement(a.V9,{className:"header-collapse",visible:e},l.createElement(a.g3,null,l.createElement(a.U6,null,l.createElement(a.AQ,{href:"#",active:!0},"Home")),l.createElement(a.U6,null,l.createElement(a.AQ,{href:"#"},"Link")),l.createElement(a.w5,{variant:"nav-item"},l.createElement(a.SQ,{color:"secondary"},"Dropdown button"),l.createElement(a.$H,null,l.createElement(a.$f,{href:"#"},"Action"),l.createElement(a.$f,{href:"#"},"Another action"),l.createElement(a.lK),l.createElement(a.$f,{href:"#"},"Something else here"))),l.createElement(a.U6,null,l.createElement(a.AQ,{href:"#",disabled:!0},"Disabled"))),l.createElement(a.lx,{className:"d-flex"},l.createElement(a.jO,{className:"me-2",type:"search",placeholder:"Search"}),l.createElement(a.u5,{type:"submit",color:"success",variant:"outline"},"Search"))))))};function c(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",h4:"h4",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,r.ah)(),e.components),{Example:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"supported-content",style:{position:"relative"}},"Supported content",l.createElement(n.a,{href:"#supported-content","aria-label":"supported content permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Headers come with built-in support for a handful of sub-components. Choose from the following as needed:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"<CHeaderBrand>")," for your company, product, or project name."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"<CHeaderNav>")," for a full-height and lightweight navigation (including support for dropdowns)."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"<CHeaderToggler>")," for use with our collapse plugin and other ",l.createElement(n.a,{href:"#responsive-behaviors"},"navigation toggling")," behaviors."),"\n",l.createElement(n.li,null,"Flex and spacing utilities for any form controls and actions."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"<CHeaderText>")," for adding vertically centered strings of text."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'<CCollapse className="header-collapse">')," for grouping and hiding header contents by a parent breakpoint."),"\n"),"\n",l.createElement(n.p,null,"Here's an example of all the sub-components included in a responsive light-themed header that automatically collapses at the ",l.createElement(n.code,null,"lg")," (large) breakpoint."),"\n",l.createElement(n.h2,{id:"basic-usage",style:{position:"relative"}},"Basic usage",l.createElement(n.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n","\n",l.createElement(t,null,l.createElement(o)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CHeader>\n      <CContainer fluid>\n        <CHeaderBrand href="#">Header</CHeaderBrand>\n        <CHeaderToggler onClick={() => setVisible(!visible)} />\n        <CCollapse className="header-collapse" visible={visible}>\n          <CHeaderNav>\n            <CNavItem>\n              <CNavLink href="#" active>\n                Home\n              </CNavLink>\n            </CNavItem>\n            <CNavItem>\n              <CNavLink href="#">Link</CNavLink>\n            </CNavItem>\n            <CDropdown variant="nav-item">\n              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>\n              <CDropdownMenu>\n                <CDropdownItem href="#">Action</CDropdownItem>\n                <CDropdownItem href="#">Another action</CDropdownItem>\n                <CDropdownDivider />\n                <CDropdownItem href="#">Something else here</CDropdownItem>\n              </CDropdownMenu>\n            </CDropdown>\n            <CNavItem>\n              <CNavLink href="#" disabled>\n                Disabled\n              </CNavLink>\n            </CNavItem>\n          </CHeaderNav>\n          <CForm className="d-flex">\n            <CFormInput className="me-2" type="search" placeholder="Search" />\n            <CButton type="submit" color="success" variant="outline">\n              Search\n            </CButton>\n          </CForm>\n        </CCollapse>\n      </CContainer>\n    </CHeader>\n  </>\n)\n')),"\n",l.createElement(n.h2,{id:"customizing",style:{position:"relative"}},"Customizing",l.createElement(n.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",l.createElement(n.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"React headers use local CSS variables on ",l.createElement(n.code,null,".header")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sass"},"--cui-header-min-height: #{$header-min-height};\n--cui-header-padding-x: #{$header-padding-x};\n--cui-header-padding-y: #{$header-padding-y};\n--cui-header-bg: #{$header-bg};\n--cui-header-color: #{$header-color};\n--cui-header-border-color: #{$header-border-color};\n--cui-header-border: #{$header-border-width} solid var(--cui-header-border-color);\n--cui-header-hover-color: #{$header-hover-color};\n--cui-header-disabled-color: #{$header-disabled-color};\n--cui-header-active-color: #{$header-active-color};\n--cui-header-brand-padding-y: #{$header-brand-padding-y};\n--cui-header-brand-color: #{$header-brand-color};\n--cui-header-brand-hover-color: #{$header-brand-hover-color};\n--cui-header-toggler-padding-x: #{$header-toggler-padding-x};\n--cui-header-toggler-padding-y: #{$header-toggler-padding-y};\n--cui-header-toggler-bg: #{$header-toggler-bg};\n--cui-header-toggler-color: #{$header-toggler-color};\n--cui-header-toggler-border-radius: #{$header-toggler-border-radius};\n--cui-header-toggler-hover-color: #{$header-toggler-hover-color};\n--cui-header-toggler-icon-bg: #{escape-svg($header-toggler-icon-bg)};\n--cui-header-toggler-hover-icon-bg: #{escape-svg($header-toggler-hover-icon-bg)};\n--cui-header-nav-link-padding-x: #{$header-nav-link-padding-x};\n--cui-header-nav-link-padding-y: #{$header-nav-link-padding-y};\n--cui-header-divider-border-color: #{$header-divider-border-color};\n--cui-header-divider-border: #{$header-divider-border-width} solid var(--cui-header-divider-border-color);\n--cui-subheader-min-height: #{$subheader-min-height};\n")),"\n",l.createElement(n.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",l.createElement(n.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CHeader style={vars}>...</CHeader>\n")),"\n",l.createElement(n.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",l.createElement(n.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sass"},"$header-min-height:             4rem;\n$header-padding-y:              $spacer * .5;\n$header-padding-x:              $spacer * .5;\n$header-brand-font-size:        $font-size-lg;\n$header-color:                  $medium-emphasis;\n$header-bg:                     $white;\n$header-border-color:           $border-color;\n$header-border-width:           1px;\n$header-hover-color:            $high-emphasis;\n$header-active-color:           $high-emphasis;\n$header-disabled-color:         $disabled;\n\n// Compute the header-brand padding-y so the header-brand will have the same height as header-text and nav-link\n$nav-link-height:               $font-size-base * $line-height-base + $nav-link-padding-y * 2;\n$header-brand-height:           $header-brand-font-size * $line-height-base;\n$header-brand-padding-y:        ($nav-link-height - $header-brand-height) * .5;\n$header-brand-margin-end:       1rem;\n$header-brand-font-size:        $font-size-lg;\n$header-brand-color:            $gray-900;\n$header-brand-hover-color:      shade-color($gray-900, 10%);\n\n$header-toggler-padding-y:      .25rem;\n$header-toggler-padding-x:      .75rem;\n$header-toggler-font-size:      $font-size-lg;\n$header-toggler-color:          $header-color;\n$header-toggler-bg:             transparent;\n$header-toggler-border-radius:  $btn-border-radius;\n$header-toggler-hover-color:    $header-active-color;\n\n$header-toggler-icon-bg:        url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n$header-toggler-hover-icon-bg:  url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$header-hover-color}' stroke-width='2.25' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n\n$header-nav-link-padding-x:     .5rem;\n$header-nav-link-padding-y:     .5rem;\n\n$header-divider-border-width:   1px;\n$header-divider-border-color:   $header-border-color;\n")),"\n",l.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",l.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"cheader",style:{position:"relative"}},"CHeader",l.createElement(n.a,{href:"#cheader","aria-label":"cheader permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CHeader } from '@coreui/react'\n// or\nimport CHeader from '@coreui/react/src/components/header/CHeader'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"container")),l.createElement(n.td,null,"Defines optional container wrapping children elements."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")," | ",l.createElement(n.code,null,"'sm'")," | ",l.createElement(n.code,null,"'md'")," | ",l.createElement(n.code,null,"'lg'")," | ",l.createElement(n.code,null,"'xl'")," | ",l.createElement(n.code,null,"'xxl'")," | ",l.createElement(n.code,null,"'fluid'")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"position")),l.createElement(n.td,null,"Place header in non-static positions."),l.createElement(n.td,null,l.createElement(n.code,null,"'fixed'")," | ",l.createElement(n.code,null,"'sticky'")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"cheaderbrand",style:{position:"relative"}},"CHeaderBrand",l.createElement(n.a,{href:"#cheaderbrand","aria-label":"cheaderbrand permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CHeaderBrand } from '@coreui/react'\n// or\nimport CHeaderBrand from '@coreui/react/src/components/header/CHeaderBrand'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"component")),l.createElement(n.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")," | ",l.createElement(n.code,null,"ComponentClass<any, any>")," | ",l.createElement(n.code,null,"FunctionComponent<any>")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"href")),l.createElement(n.td,null,"The href attribute specifies the URL of the page the link goes to."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"cheaderdivider",style:{position:"relative"}},"CHeaderDivider",l.createElement(n.a,{href:"#cheaderdivider","aria-label":"cheaderdivider permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CHeaderDivider } from '@coreui/react'\n// or\nimport CHeaderDivider from '@coreui/react/src/components/header/CHeaderDivider'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"cheadernav",style:{position:"relative"}},"CHeaderNav",l.createElement(n.a,{href:"#cheadernav","aria-label":"cheadernav permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CHeaderNav } from '@coreui/react'\n// or\nimport CHeaderNav from '@coreui/react/src/components/header/CHeaderNav'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"component")),l.createElement(n.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")," | ",l.createElement(n.code,null,"ComponentClass<any, any>")," | ",l.createElement(n.code,null,"FunctionComponent<any>")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"cheadertext",style:{position:"relative"}},"CHeaderText",l.createElement(n.a,{href:"#cheadertext","aria-label":"cheadertext permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CHeaderText } from '@coreui/react'\n// or\nimport CHeaderText from '@coreui/react/src/components/header/CHeaderText'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the base component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"cheadertoggler",style:{position:"relative"}},"CHeaderToggler",l.createElement(n.a,{href:"#cheadertoggler","aria-label":"cheadertoggler permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CHeaderToggler } from '@coreui/react'\n// or\nimport CHeaderToggler from '@coreui/react/src/components/header/CHeaderToggler'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the base component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-"))))))}var d=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)};var i=t(1380);const s=e=>{let{children:n}=e;return l.createElement(r.Zo,{components:{strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(a.C_,Object.assign({},e.children.props,{color:n})))}return l.createElement("strong",null,e.children)},pre:e=>l.createElement(i.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return l.createElement(a.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...r}=e;return l.createElement(a.e_,r,t&&l.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return l.createElement(i.en,t,l.Children.map(n,(e=>{if(l.isValidElement(e))return l.cloneElement(e)})))}}},n)};function m(e){return l.createElement(s,e,l.createElement(d,e))}s.displayName="MdxLayout"},5392:function(e,n,t){t.d(n,{Zo:function(){return c},ah:function(){return a}});var r=t(2784);const l=r.createContext({});function a(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:a(e),r.createElement(l.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-header-mdx-a064c7b50de7dac64acc.js.map