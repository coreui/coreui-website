"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[6609],{31449:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(45392),a=n(2784),r=n(18910);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",a.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Provide an option to dismiss or close a component with ",a.createElement(t.code,null,"<CCloseButton>"),". Default styling is limited, but highly customizable. Modify the Sass variables to replace the default ",a.createElement(t.code,null,"background-image"),"."),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(n,{className:""},a.createElement(r.pd)),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"<CCloseButton />\n"))),"\n",a.createElement(t.h2,{id:"disabled-state",style:{position:"relative"}},"Disabled state",a.createElement(t.a,{href:"#disabled-state","aria-label":"disabled state permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Disabled close buttons change their ",a.createElement(t.code,null,"opacity"),". We've also applied ",a.createElement(t.code,null,"pointer-events: none")," and ",a.createElement(t.code,null,"user-select: none")," to preventing hover and active states from triggering."),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(n,{className:""},a.createElement(r.pd,{disabled:!0})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"<CCloseButton disabled />\n"))),"\n",a.createElement(t.h2,{id:"white-variant",style:{position:"relative"}},"White variant",a.createElement(t.a,{href:"#white-variant","aria-label":"white variant permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Change the default ",a.createElement(t.code,null,"<CCloseButton>")," to be white with the ",a.createElement(t.code,null,"white")," boolean property."),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(n,{className:"bg-dark border-0"},a.createElement(r.pd,{white:!0}),a.createElement(r.pd,{white:!0,disabled:!0})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"<CCloseButton white />\n<CCloseButton white disabled />\n"))),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"cclosebutton",style:{position:"relative"}},"CCloseButton",a.createElement(t.a,{href:"#cclosebutton","aria-label":"cclosebutton permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CCloseButton } from '@coreui/react'\n// or\nimport CCloseButton from '@coreui/react/src/components/close-button/CCloseButton'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"disabled")),a.createElement(t.td,null,"Toggle the disabled state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"white")),a.createElement(t.td,null,"Change the default color to white."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-"))))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)};var s=n(18722);const i=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(s.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(s.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(s.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(s.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function m(e){return a.createElement(i,e,a.createElement(o,e))}i.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-close-button-mdx-bd0001f8bff010c0c3bf.js.map