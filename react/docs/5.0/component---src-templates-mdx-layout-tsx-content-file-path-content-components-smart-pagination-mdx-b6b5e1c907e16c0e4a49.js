"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[3473],{83902:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l=n(45392),a=n(2784),r=n(1017);const c=()=>{const{0:e,1:t}=(0,a.useState)(1);return a.createElement(r.aQ,{activePage:e,pages:10,onActivePageChange:t})},o=()=>{const{0:e,1:t}=(0,a.useState)(1);return a.createElement(r.aQ,{size:"lg",activePage:e,pages:10,onActivePageChange:t})},i=()=>{const{0:e,1:t}=(0,a.useState)(1);return a.createElement(r.aQ,{size:"sm",activePage:e,pages:10,onActivePageChange:t})},s=()=>{const{0:e,1:t}=(0,a.useState)(1);return a.createElement(r.aQ,{align:"center",activePage:e,pages:10,onActivePageChange:t})},m=()=>{const{0:e,1:t}=(0,a.useState)(1);return a.createElement(r.aQ,{align:"end",activePage:e,pages:10,onActivePageChange:t})};function u(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"overview",style:{position:"relative"}},"Overview",a.createElement(t.a,{href:"#overview","aria-label":"overview permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"React smart pagination component consists of button-like styled links, that are arranged side by side in a horizontal list."),"\n",a.createElement(t.p,null,"We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. SmartPagination is built with list HTML elements so screen readers can announce the number of available links. SmartPagination also use a wrapping ",a.createElement(t.code,null,"<nav>")," element to identify it as a navigation section to screen readers and other assistive technologies."),"\n",a.createElement(t.p,null,"In addition, as pages likely have more than one such navigation section, SmartPagination provide a descriptive ",a.createElement(t.code,null,"aria-label")," for the ",a.createElement(t.code,null,"<nav>")," to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",a.createElement(t.code,null,'aria-label="Search results pages"'),".???"),"\n","\n",a.createElement(n,null,a.createElement(c)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"const [currentPage, setCurrentPage] = useState(1)\nreturn <CSmartPagination activePage={currentPage} pages={10} onActivePageChange={setCurrentPage} />\n")),"\n",a.createElement(t.h2,{id:"features",style:{position:"relative"}},"Features",a.createElement(t.a,{href:"#features","aria-label":"features permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Determine behavior, style and functionality of pagination"),"\n",a.createElement(t.li,null,"Smart automatic items generation"),"\n"),"\n",a.createElement(t.h2,{id:"working-with-icons",style:{position:"relative"}},"Working with icons",a.createElement(t.a,{href:"#working-with-icons","aria-label":"working with icons permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Looking to use an icon or symbol in place of text for some pagination links? SmartPagination will provide screen reader support for 'firstButton', 'previousButton', 'nextButton' and 'lastButton'."),"\n",a.createElement(t.h2,{id:"sizing",style:{position:"relative"}},"Sizing",a.createElement(t.a,{href:"#sizing","aria-label":"sizing permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Fancy larger or smaller pagination? Add ",a.createElement(t.code,null,'size="lg"')," or ",a.createElement(t.code,null,'size="sm"')," for additional sizes."),"\n","\n",a.createElement(n,null,a.createElement(o)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [currentPage, setCurrentPage] = useState(1)\nreturn (\n  <CSmartPagination\n    size="lg"\n    activePage={currentPage}\n    pages={10}\n    onActivePageChange={setCurrentPage}\n  />\n)\n')),"\n","\n",a.createElement(n,null,a.createElement(i)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [currentPage, setCurrentPage] = useState(1)\nreturn (\n  <CSmartPagination\n    size="sm"\n    activePage={currentPage}\n    pages={10}\n    onActivePageChange={setCurrentPage}\n  />\n)\n')),"\n",a.createElement(t.h2,{id:"alignment",style:{position:"relative"}},"Alignment",a.createElement(t.a,{href:"#alignment","aria-label":"alignment permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Change the alignment of pagination components with ",a.createElement(t.code,null,'align="start"'),", ",a.createElement(t.code,null,'align="center"')," or ",a.createElement(t.code,null,'align="end"')," ",a.createElement(t.a,{href:"https://coreui.io/docs/utilities/flex/",target:"_blank",rel:"nofollow"},"flexbox utilities"),"."),"\n","\n",a.createElement(n,null,a.createElement(s)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [currentPage, setCurrentPage] = useState(1)\nreturn (\n  <CSmartPagination\n    align="center"\n    activePage={currentPage}\n    pages={10}\n    onActivePageChange={setCurrentPage}\n  />\n)\n')),"\n","\n",a.createElement(n,null,a.createElement(m)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [currentPage, setCurrentPage] = useState(1)\nreturn (\n  <CSmartPagination\n    align="end"\n    activePage={currentPage}\n    pages={10}\n    onActivePageChange={setCurrentPage}\n  />\n)\n')),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"csmartpagination",style:{position:"relative"}},"CSmartPagination",a.createElement(t.a,{href:"#csmartpagination","aria-label":"csmartpagination permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CSmartPagination } from '@coreui/react-pro-pro'\n// or\nimport CSmartPagination from '@coreui/react-pro/src/components/smart-pagination/CSmartPagination'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"activePage")),a.createElement(t.td,null,"Current page number."),a.createElement(t.td,null,a.createElement(t.code,null,"number")),a.createElement(t.td,null,"1")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"align")),a.createElement(t.td,null,"Horizontall align."),a.createElement(t.td,null,a.createElement(t.code,null,"'start'")," | ",a.createElement(t.code,null,"'center'")," | ",a.createElement(t.code,null,"'end'")),a.createElement(t.td,null,"start")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"arrows")),a.createElement(t.td,null,"Show/hide arrows."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"true")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"dots")),a.createElement(t.td,null,"Show/hide dots."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"true")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"doubleArrows")),a.createElement(t.td,null,"Show double arrows buttons."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"true")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"firstButton")),a.createElement(t.td,null,"The content of 'firstButton' button."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"<React.Fragment>«</React.Fragment>")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"lastButton")),a.createElement(t.td,null,"The content of 'lastButton' button."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"<React.Fragment>»</React.Fragment>")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"limit")),a.createElement(t.td,null,"Maximum items number."),a.createElement(t.td,null,a.createElement(t.code,null,"number")),a.createElement(t.td,null,"5")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"nextButton")),a.createElement(t.td,null,"The content of 'nextButton' button."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"<React.Fragment>›</React.Fragment>")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onActivePageChange")),a.createElement(t.td,null,"On active page change callback."),a.createElement(t.td,null,a.createElement(t.code,null,"(activePage: number) => void")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"pages")),a.createElement(t.td,null,"Number of pages."),a.createElement(t.td,null,a.createElement(t.code,null,"number")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"previousButton")),a.createElement(t.td,null,"The content of 'previousButton' button."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"<React.Fragment>‹</React.Fragment>")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"size")),a.createElement(t.td,null,"Size of pagination, valid values: 'sm', 'lg'."),a.createElement(t.td,null,a.createElement(t.code,null,"'sm'")," | ",a.createElement(t.code,null,"'lg'")),a.createElement(t.td,null,"-"))))))}var E=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(u,e)):u(e)};var d=n(18722);const g=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(d.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(d.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(d.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(d.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function p(e){return a.createElement(g,e,a.createElement(E,e))}g.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-smart-pagination-mdx-b6b5e1c907e16c0e4a49.js.map