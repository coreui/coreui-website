"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4522],{68653:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var a=r(45392),n=r(2784),l=r(1017);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",div:"div",pre:"pre",code:"code",strong:"strong",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components),{Example:r,ScssDocs:c}=t;return r||m("Example",!0),c||m("ScssDocs",!0),n.createElement(n.Fragment,null,n.createElement(t.h2,{id:"how-to-use-react-breadcrumb-component",style:{position:"relative"}},"How to use React Breadcrumb Component.",n.createElement(t.a,{href:"#how-to-use-react-breadcrumb-component","aria-label":"how to use react breadcrumb component permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"The react breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don’t have to add separators, because they automatically added in CSS through ::before and content."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(r,{className:""},n.createElement(l.fj,null,"  ",n.createElement(l.Sd,{active:!0},"Home")),n.createElement(l.fj,null,"  ",n.createElement(l.Sd,{href:"#"},"Home"),"  ",n.createElement(l.Sd,{active:!0},"Library")),n.createElement(l.fj,null,"  ",n.createElement(l.Sd,{href:"#"},"Home"),"  ",n.createElement(l.Sd,{href:"#"},"Library"),"  ",n.createElement(l.Sd,{active:!0},"Data"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CBreadcrumb>\n  <CBreadcrumbItem active>Home</CBreadcrumbItem>\n</CBreadcrumb>\n\n<CBreadcrumb>\n  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>\n  <CBreadcrumbItem active>Library</CBreadcrumbItem>\n</CBreadcrumb>\n\n<CBreadcrumb>\n  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>\n  <CBreadcrumbItem href="#">Library</CBreadcrumbItem>\n  <CBreadcrumbItem active>Data</CBreadcrumbItem>\n</CBreadcrumb>\n'))),"\n",n.createElement(t.h2,{id:"dividers",style:{position:"relative"}},"Dividers",n.createElement(t.a,{href:"#dividers","aria-label":"dividers permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Dividers are automatically added in CSS through ",n.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::before",target:"_blank",rel:"nofollow"},n.createElement(t.code,null,"::before"))," and ",n.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/content",target:"_blank",rel:"nofollow"},n.createElement(t.code,null,"content")),". They can be changed by modifying a local CSS custom property ",n.createElement(t.code,null,"--coreui-breadcrumb-divider"),", or through the ",n.createElement(t.code,null,"$breadcrumb-divider")," Sass variable — and ",n.createElement(t.code,null,"$breadcrumb-divider-flipped")," for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(r,{className:""},n.createElement(l.fj,{style:{"--cui-breadcrumb-divider":"'>'"}},"  ",n.createElement(l.Sd,{href:"#"},"Home"),"  ",n.createElement(l.Sd,{active:!0},"Library"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CBreadcrumb style={{"--cui-breadcrumb-divider": "\'>\'"}}>\n  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>\n  <CBreadcrumbItem active>Library</CBreadcrumbItem>\n</CBreadcrumb>\n'))),"\n",n.createElement(t.p,null,"When modifying via Sass, the ",n.createElement(t.a,{href:"https://sass-lang.com/documentation/modules/string#quote",target:"_blank",rel:"nofollow"},"quote")," function is required to generate the quotes around a string. For example, using ",n.createElement(t.code,null,">")," as the divider, you can use this:"),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-scss"},'$breadcrumb-divider: quote(">");\n')),"\n",n.createElement(t.p,null,"It's also possible to use an ",n.createElement(t.strong,null,"embedded SVG icon"),". Apply it via our CSS custom property, or use the Sass variable."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(r,{className:""},n.createElement(l.fj,{style:{"--cui-breadcrumb-divider":"url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"}},"  ",n.createElement(l.Sd,{href:"#"},"Home"),"  ",n.createElement(l.Sd,{active:!0},"Library"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"<CBreadcrumb style={{\"--cui-breadcrumb-divider\": \"url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);\"}}>\n  <CBreadcrumbItem href=\"#\">Home</CBreadcrumbItem>\n  <CBreadcrumbItem active>Library</CBreadcrumbItem>\n</CBreadcrumb>\n"))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-scss"},"$breadcrumb-divider: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' \nwidth='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\");\n")),"\n",n.createElement(t.p,null,"You can also remove the divider setting ",n.createElement(t.code,null,"--cui-breadcrumb-divider: '';")," (empty strings in CSS custom properties counts as a value), or setting the Sass variable to ",n.createElement(t.code,null,"$breadcrumb-divider: none;"),"."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(r,{className:""},n.createElement(l.fj,{style:{"--cui-breadcrumb-divider":"'';"}},"  ",n.createElement(l.Sd,{href:"#"},"Home"),"  ",n.createElement(l.Sd,{active:!0},"Library"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CBreadcrumb style={{"--cui-breadcrumb-divider": "\'\';"}}>\n  <CBreadcrumbItem href="#">Home</CBreadcrumbItem>\n  <CBreadcrumbItem active>Library</CBreadcrumbItem>\n</CBreadcrumb>\n'))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-scss"},"$breadcrumb-divider: none;\n")),"\n",n.createElement(t.h2,{id:"accessibility",style:{position:"relative"}},"Accessibility",n.createElement(t.a,{href:"#accessibility","aria-label":"accessibility permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Since react breadcrumbs provide navigation, it's useful to add a significant label such as ",n.createElement(t.code,null,'aria-label="breadcrumb"')," to explain the type of navigation implemented in the ",n.createElement(t.code,null,"<nav>")," element. You should also add an ",n.createElement(t.code,null,'aria-current="page"')," to the last item of the set to show that it represents the current page. ",n.createElement(t.strong,null,"CoreUI for React.js automatically add all of this labels to breadcrumb's components.")),"\n",n.createElement(t.p,null,"For more information, see the ",n.createElement(t.a,{href:"https://www.w3.org/TR/wai-aria-practices/#breadcrumb",target:"_blank",rel:"nofollow"},"WAI-ARIA Authoring Practices for the breadcrumb pattern"),"."),"\n",n.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",n.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",n.createElement(t.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"React breadcrumbs use local CSS variables on ",n.createElement(t.code,null,".breadcrumb")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",n.createElement(c,{file:"_breadcrumb.scss",capture:"breadcrumb-css-vars"}),"\n",n.createElement(t.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",n.createElement(t.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CBreadcrumb style={vars}>...</CBreadcrumb>\n")),"\n",n.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",n.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(c,{file:"_variables.scss",capture:"breadcrumb-variables"}),"\n",n.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",n.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"cbreadcrumb",style:{position:"relative"}},"CBreadcrumb",n.createElement(t.a,{href:"#cbreadcrumb","aria-label":"cbreadcrumb permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CBreadcrumb } from '@coreui/react'\n// or\nimport CBreadcrumb from '@coreui/react/src/components/breadcrumb/CBreadcrumb'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-"))))),"\n",n.createElement(t.h3,{id:"cbreadcrumbitem",style:{position:"relative"}},"CBreadcrumbItem",n.createElement(t.a,{href:"#cbreadcrumbitem","aria-label":"cbreadcrumbitem permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CBreadcrumbItem } from '@coreui/react'\n// or\nimport CBreadcrumbItem from '@coreui/react/src/components/breadcrumb/CBreadcrumbItem'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"active")),n.createElement(t.td,null,"Toggle the active state for the component."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the base component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"href")),n.createElement(t.td,null,"The ",n.createElement(t.code,null,"href")," attribute for the inner ",n.createElement(t.code,null,"<CLink>")," component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-"))))))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(c,e)):c(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=r(18722);const i=e=>{let{children:t}=e;return n.createElement(a.Zo,{components:{ScssDocs:e=>n.createElement(o.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(l.C_,Object.assign({},e.children.props,{color:t})))}return n.createElement("strong",null,e.children)},pre:e=>n.createElement(o.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return n.createElement(l.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:r,...a}=e;return n.createElement(o.UW,a,r&&n.createElement("h5",null,r),t)},Example:e=>{const{children:t,...r}=e;return n.createElement(o.en,r,n.Children.map(t,(e=>{if(n.isValidElement(e))return n.cloneElement(e)})))}}},t)};function d(e){return n.createElement(i,e,n.createElement(s,e))}i.displayName="MdxLayout"},45392:function(e,t,r){r.d(t,{Zo:function(){return s},ah:function(){return l}});var a=r(2784);const n=a.createContext({});function l(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:l(e),a.createElement(n.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-breadcrumb-mdx-e3ad9072fce5494cbca4.js.map