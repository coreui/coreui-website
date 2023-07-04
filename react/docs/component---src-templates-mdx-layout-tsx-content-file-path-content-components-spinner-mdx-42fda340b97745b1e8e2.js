"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7982],{80247:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(45392),r=t(2784),l=t(1017);function s(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,a.ah)(),e.components),{Example:t,ScssDocs:s}=n;return t||o("Example",!0),s||o("ScssDocs",!0),r.createElement(r.Fragment,null,r.createElement(n.h2,{id:"about",style:{position:"relative"}},"About",r.createElement(n.a,{href:"#about","aria-label":"about permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"CoreUI \"spinners\" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes."),"\n",r.createElement(n.p,null,"For accessibility purposes, each loader here includes ",r.createElement(n.code,null,'role="status"')," and a nested ",r.createElement(n.code,null,'<span className="visually-hidden">Loading...</span>'),"."),"\n",r.createElement(n.h2,{id:"border-spinner",style:{position:"relative"}},"Border spinner",r.createElement(n.a,{href:"#border-spinner","aria-label":"border spinner permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"Use the border spinners for a lightweight loading indicator."),"\n",r.createElement(n.h2,{id:"basic-usage",style:{position:"relative"}},"Basic usage",r.createElement(n.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.LQ)),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},"  <CSpinner/>\n"))),"\n",r.createElement(n.h3,{id:"colors",style:{position:"relative"}},"Colors",r.createElement(n.a,{href:"#colors","aria-label":"colors permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"The border spinner uses ",r.createElement(n.code,null,"currentColor")," for its ",r.createElement(n.code,null,"border-color"),". You can use any of our text color utilities on the standard spinner."),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.LQ,{color:"primary"}),r.createElement(l.LQ,{color:"secondary"}),r.createElement(l.LQ,{color:"success"}),r.createElement(l.LQ,{color:"danger"}),r.createElement(l.LQ,{color:"warning"}),r.createElement(l.LQ,{color:"info"}),r.createElement(l.LQ,{color:"light"}),r.createElement(l.LQ,{color:"dark"})),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},'  <CSpinner color="primary"/>\n  <CSpinner color="secondary"/>\n  <CSpinner color="success"/>\n  <CSpinner color="danger"/>\n  <CSpinner color="warning"/>\n  <CSpinner color="info"/>\n  <CSpinner color="light"/>\n  <CSpinner color="dark"/>\n'))),"\n",r.createElement(n.h2,{id:"growing-spinner",style:{position:"relative"}},"Growing spinner",r.createElement(n.a,{href:"#growing-spinner","aria-label":"growing spinner permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!"),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.LQ,{variant:"grow"})),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},'  <CSpinner variant="grow"/>\n'))),"\n",r.createElement(n.p,null,"Once again, this spinner is built with ",r.createElement(n.code,null,"currentColor"),", so you can easily change its appearance. Here it is in blue, along with the supported variants."),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.LQ,{color:"primary",variant:"grow"}),r.createElement(l.LQ,{color:"secondary",variant:"grow"}),r.createElement(l.LQ,{color:"success",variant:"grow"}),r.createElement(l.LQ,{color:"danger",variant:"grow"}),r.createElement(l.LQ,{color:"warning",variant:"grow"}),r.createElement(l.LQ,{color:"info",variant:"grow"}),r.createElement(l.LQ,{color:"light",variant:"grow"}),r.createElement(l.LQ,{color:"dark",variant:"grow"})),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},'  <CSpinner color="primary" variant="grow"/>\n  <CSpinner color="secondary" variant="grow"/>\n  <CSpinner color="success" variant="grow"/>\n  <CSpinner color="danger" variant="grow"/>\n  <CSpinner color="warning" variant="grow"/>\n  <CSpinner color="info" variant="grow"/>\n  <CSpinner color="light" variant="grow"/>\n  <CSpinner color="dark" variant="grow"/>\n'))),"\n",r.createElement(n.h2,{id:"size",style:{position:"relative"}},"Size",r.createElement(n.a,{href:"#size","aria-label":"size permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"Add ",r.createElement(n.code,null,'size="sm"'),"property` to make a smaller spinner that can quickly be used within other components."),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.LQ,{size:"sm"}),r.createElement(l.LQ,{size:"sm",variant:"grow"})),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},'  <CSpinner size="sm"/>\n  <CSpinner size="sm" variant="grow"/>\n'))),"\n",r.createElement(n.h2,{id:"buttons",style:{position:"relative"}},"Buttons",r.createElement(n.a,{href:"#buttons","aria-label":"buttons permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.u5,{disabled:!0},"    ",r.createElement(l.LQ,{component:"span",size:"sm","aria-hidden":"true"}),"  "),"  ",r.createElement(l.u5,{disabled:!0},"    ",r.createElement(l.LQ,{component:"span",size:"sm","aria-hidden":"true"}),"    Loading...  ")),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},'  <CButton disabled>\n    <CSpinner component="span" size="sm" aria-hidden="true"/>\n  </CButton>\n  <CButton disabled>\n    <CSpinner component="span" size="sm" aria-hidden="true"/>\n    Loading...\n  </CButton>\n'))),"\n",r.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},r.createElement(t,{className:""},r.createElement(l.u5,{disabled:!0},"    ",r.createElement(l.LQ,{component:"span",size:"sm",variant:"grow","aria-hidden":"true"}),"  "),"  ",r.createElement(l.u5,{disabled:!0},"    ",r.createElement(l.LQ,{component:"span",size:"sm",variant:"grow","aria-hidden":"true"}),"    Loading...  ")),r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},'  <CButton disabled>\n    <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>\n  </CButton>\n  <CButton disabled>\n    <CSpinner component="span" size="sm" variant="grow" aria-hidden="true"/>\n    Loading...\n  </CButton>\n'))),"\n",r.createElement(n.h2,{id:"customizing",style:{position:"relative"}},"Customizing",r.createElement(n.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",r.createElement(n.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.p,null,"React spinners use local CSS variables on ",r.createElement(n.code,null,".spinner-border")," and ",r.createElement(n.code,null,".spinner-grow")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",r.createElement(n.p,null,"Border spinner variables:"),"\n",r.createElement(s,{file:"_spinners.scss",capture:"spinner-border-css-vars"}),"\n",r.createElement(n.p,null,"Growing spinner variables:"),"\n",r.createElement(s,{file:"_spinners.scss",capture:"spinner-grow-css-vars"}),"\n",r.createElement(n.p,null,"For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the ",r.createElement(n.code,null,".spinner-border-sm")," class does the following:"),"\n",r.createElement(s,{file:"_spinners.scss",capture:"spinner-border-sm-css-vars"}),"\n",r.createElement(n.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",r.createElement(n.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CSpinner style={vars}>...</CSpinner>\n")),"\n",r.createElement(n.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",r.createElement(n.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(s,{file:"_variables.scss",capture:"spinner-variables"}),"\n",r.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",r.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.h3,{id:"cspinner",style:{position:"relative"}},"CSpinner",r.createElement(n.a,{href:"#cspinner","aria-label":"cspinner permalink",className:"anchor-link after"},r.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(n.div,null,r.createElement(n.pre,null,r.createElement(n.code,{className:"language-jsx"},"import { CSpinner } from '@coreui/react'\n// or\nimport CSpinner from '@coreui/react/src/components/spinner/CSpinner'\n")),r.createElement(n.table,null,r.createElement(n.thead,null,r.createElement(n.tr,null,r.createElement(n.th,null,"Property"),r.createElement(n.th,null,"Description"),r.createElement(n.th,null,"Type"),r.createElement(n.th,null,"Default"))),r.createElement(n.tbody,null,r.createElement(n.tr,null,r.createElement(n.td,null,r.createElement(n.strong,null,"className")),r.createElement(n.td,null,"A string of all className you want applied to the component."),r.createElement(n.td,null,r.createElement(n.code,null,"string")),r.createElement(n.td,null,"-")),r.createElement(n.tr,null,r.createElement(n.td,null,r.createElement(n.strong,null,"color")),r.createElement(n.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),r.createElement(n.td,null,r.createElement(n.code,null,"'primary'")," | ",r.createElement(n.code,null,"'secondary'")," | ",r.createElement(n.code,null,"'success'")," | ",r.createElement(n.code,null,"'danger'")," | ",r.createElement(n.code,null,"'warning'")," | ",r.createElement(n.code,null,"'info'")," | ",r.createElement(n.code,null,"'dark'")," | ",r.createElement(n.code,null,"'light'")," | ",r.createElement(n.code,null,"string")),r.createElement(n.td,null,"-")),r.createElement(n.tr,null,r.createElement(n.td,null,r.createElement(n.strong,null,"component")),r.createElement(n.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),r.createElement(n.td,null,r.createElement(n.code,null,"string")," | ",r.createElement(n.code,null,"ComponentClass<any, any>")," | ",r.createElement(n.code,null,"FunctionComponent<any>")),r.createElement(n.td,null,"-")),r.createElement(n.tr,null,r.createElement(n.td,null,r.createElement(n.strong,null,"size")),r.createElement(n.td,null,"Size the component small."),r.createElement(n.td,null,r.createElement(n.code,null,"'sm'")),r.createElement(n.td,null,"-")),r.createElement(n.tr,null,r.createElement(n.td,null,r.createElement(n.strong,null,"variant")),r.createElement(n.td,null,"Set the button variant to an outlined button or a ghost button."),r.createElement(n.td,null,r.createElement(n.code,null,"'border'")," | ",r.createElement(n.code,null,"'grow'")),r.createElement(n.td,null,"border")),r.createElement(n.tr,null,r.createElement(n.td,null,r.createElement(n.strong,null,"visuallyHiddenLabel")),r.createElement(n.td,null,"Set visually hidden label for accessibility purposes."),r.createElement(n.td,null,r.createElement(n.code,null,"string")),r.createElement(n.td,null,"Loading..."))))))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?r.createElement(n,e,r.createElement(s,e)):s(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var i=t(18722);const m=e=>{let{children:n}=e;return r.createElement(a.Zo,{components:{ScssDocs:e=>r.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(l.C_,Object.assign({},e.children.props,{color:n})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(i.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(l.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...a}=e;return r.createElement(i.UW,a,t&&r.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return r.createElement(i.en,t,r.Children.map(n,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},n)};function p(e){return r.createElement(m,e,r.createElement(c,e))}m.displayName="MdxLayout"},45392:function(e,n,t){t.d(n,{Zo:function(){return c},ah:function(){return l}});var a=t(2784);const r=a.createContext({});function l(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:l(e),a.createElement(r.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-spinner-mdx-42fda340b97745b1e8e2.js.map