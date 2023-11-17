"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7982],{80247:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(45392),l=t(2784),r=t(1017);function s(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",h3:"h3",h4:"h4",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components),{Example:t,ScssDocs:s}=n;return t||i("Example",!0),s||i("ScssDocs",!0),l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"about",style:{position:"relative"}},"About",l.createElement(n.a,{href:"#about","aria-label":"about permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"CoreUI \"spinners\" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes."),"\n",l.createElement(n.p,null,"For accessibility purposes, each loader here includes ",l.createElement(n.code,null,'role="status"')," and a nested ",l.createElement(n.code,null,'<span className="visually-hidden">Loading...</span>'),"."),"\n",l.createElement(n.h2,{id:"border-spinner",style:{position:"relative"}},"Border spinner",l.createElement(n.a,{href:"#border-spinner","aria-label":"border spinner permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Use the border spinners for a lightweight loading indicator."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ)),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"<CSpinner/>\n"))),"\n",l.createElement(n.h3,{id:"colors",style:{position:"relative"}},"Colors",l.createElement(n.a,{href:"#colors","aria-label":"colors permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"The border spinner uses ",l.createElement(n.code,null,"currentColor")," for its ",l.createElement(n.code,null,"border-color"),". You can use any of our text color utilities on the standard spinner."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ,{color:"primary"}),l.createElement(r.LQ,{color:"secondary"}),l.createElement(r.LQ,{color:"success"}),l.createElement(r.LQ,{color:"danger"}),l.createElement(r.LQ,{color:"warning"}),l.createElement(r.LQ,{color:"info"}),l.createElement(r.LQ,{color:"light"}),l.createElement(r.LQ,{color:"dark"})),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CSpinner color="primary" />\n<CSpinner color="secondary" />\n<CSpinner color="success" />\n<CSpinner color="danger" />\n<CSpinner color="warning" />\n<CSpinner color="info" />\n<CSpinner color="light" />\n<CSpinner color="dark" />\n'))),"\n",l.createElement(n.h2,{id:"growing-spinner",style:{position:"relative"}},"Growing spinner",l.createElement(n.a,{href:"#growing-spinner","aria-label":"growing spinner permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!"),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ,{variant:"grow"})),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CSpinner variant="grow" />\n'))),"\n",l.createElement(n.p,null,"Once again, this spinner is built with ",l.createElement(n.code,null,"currentColor"),", so you can easily change its appearance. Here it is in blue, along with the supported variants."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ,{color:"primary",variant:"grow"}),l.createElement(r.LQ,{color:"secondary",variant:"grow"}),l.createElement(r.LQ,{color:"success",variant:"grow"}),l.createElement(r.LQ,{color:"danger",variant:"grow"}),l.createElement(r.LQ,{color:"warning",variant:"grow"}),l.createElement(r.LQ,{color:"info",variant:"grow"}),l.createElement(r.LQ,{color:"light",variant:"grow"}),l.createElement(r.LQ,{color:"dark",variant:"grow"})),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CSpinner color="primary" variant="grow" />\n<CSpinner color="secondary" variant="grow" />\n<CSpinner color="success" variant="grow" />\n<CSpinner color="danger" variant="grow" />\n<CSpinner color="warning" variant="grow" />\n<CSpinner color="info" variant="grow" />\n<CSpinner color="light" variant="grow" />\n<CSpinner color="dark" variant="grow" />\n'))),"\n",l.createElement(n.h2,{id:"alignment",style:{position:"relative"}},"Alignment",l.createElement(n.a,{href:"#alignment","aria-label":"alignment permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"CoreUI React spinners are built with ",l.createElement(n.code,null,"rems"),", ",l.createElement(n.code,null,"currentColor"),", and ",l.createElement(n.code,null,"display: inline-flex"),". This means they can easily be resized, recolored, and quickly aligned."),"\n",l.createElement(n.h3,{id:"margin",style:{position:"relative"}},"Margin",l.createElement(n.a,{href:"#margin","aria-label":"margin permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Use ",l.createElement(n.a,{href:"https://coreui.io/docs/utilities/spacing/#margin-and-padding",target:"_blank",rel:"nofollow"},"margin utilities")," like ",l.createElement(n.code,null,".m-5")," for easy spacing."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ,{className:"m-5"})),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CSpinner className="m-5" />\n'))),"\n",l.createElement(n.h3,{id:"placement",style:{position:"relative"}},"Placement",l.createElement(n.a,{href:"#placement","aria-label":"placement permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Use [flexbox utilities][",l.createElement(n.a,{href:"https://coreui.io/docs/utilities/flex/",target:"_blank",rel:"nofollow"},"https://coreui.io/docs/utilities/flex/"),"],"," [float utilities][https://coreui.io/docs/utilities/float/], or [text alignment][https://coreui.io/docs/utilities/text/] utilities to place spinners exactly where you need them in any situation."),"\n",l.createElement(n.h4,{id:"flex",style:{position:"relative"}},"Flex",l.createElement(n.a,{href:"#flex","aria-label":"flex permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(n.div,{className:"d-flex justify-content-center"},l.createElement(r.LQ))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<div className="d-flex justify-content-center">\n  <CSpinner />\n</div>\n'))),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(n.div,{className:"d-flex align-items-center"},"  ",l.createElement(n.strong,{role:"status"},"Loading..."),"  ",l.createElement(r.LQ,{className:"ms-auto"}))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<div className="d-flex align-items-center">\n  <strong role="status">Loading...</strong>\n  <CSpinner className="ms-auto" />\n</div>\n'))),"\n",l.createElement(n.h4,{id:"floats",style:{position:"relative"}},"Floats",l.createElement(n.a,{href:"#floats","aria-label":"floats permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(n.div,{className:"clearfix"},l.createElement(r.LQ,{className:"float-end"}))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<div className="clearfix">\n  <CSpinner className="float-end" />\n</div>\n'))),"\n",l.createElement(n.h4,{id:"text-align",style:{position:"relative"}},"Text align",l.createElement(n.a,{href:"#text-align","aria-label":"text align permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(n.div,{className:"text-center"},l.createElement(r.LQ))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<div className="text-center">\n  <CSpinner />\n</div>\n'))),"\n",l.createElement(n.h2,{id:"size",style:{position:"relative"}},"Size",l.createElement(n.a,{href:"#size","aria-label":"size permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Add ",l.createElement(n.code,null,'size="sm"')," property to make a smaller spinner that can quickly be used within other components."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ,{size:"sm"}),l.createElement(r.LQ,{size:"sm",variant:"grow"})),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CSpinner size="sm" />\n<CSpinner size="sm" variant="grow" />\n'))),"\n",l.createElement(n.p,null,"Or, use custom CSS or inline styles to change the dimensions as needed."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.LQ,{size:"sm",style:{width:"3rem",height:"3rem"}}),l.createElement(r.LQ,{size:"sm",variant:"grow",style:{width:"3rem",height:"3rem"}})),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"<CSpinner size=\"sm\" style={{ width: '3rem', height: '3rem'}}/>\n<CSpinner size=\"sm\" variant=\"grow\" style={{ width: '3rem', height: '3rem'}}/>\n"))),"\n",l.createElement(n.h2,{id:"buttons",style:{position:"relative"}},"Buttons",l.createElement(n.a,{href:"#buttons","aria-label":"buttons permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.u5,{disabled:!0},"  ",l.createElement(r.LQ,{component:"span",size:"sm","aria-hidden":"true"})),l.createElement(r.u5,{disabled:!0},"  ",l.createElement(r.LQ,{component:"span",size:"sm","aria-hidden":"true"}),"  Loading...")),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CButton disabled>\n  <CSpinner component="span" size="sm" aria-hidden="true" />\n</CButton>\n<CButton disabled>\n  <CSpinner component="span" size="sm" aria-hidden="true" />\n  Loading...\n</CButton>\n'))),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:""},l.createElement(r.u5,{disabled:!0},"  ",l.createElement(r.LQ,{component:"span",size:"sm",variant:"grow","aria-hidden":"true"})),l.createElement(r.u5,{disabled:!0},"  ",l.createElement(r.LQ,{component:"span",size:"sm",variant:"grow","aria-hidden":"true"}),"  Loading...")),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CButton disabled>\n  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true" />\n</CButton>\n<CButton disabled>\n  <CSpinner component="span" size="sm" variant="grow" aria-hidden="true" />\n  Loading...\n</CButton>\n'))),"\n",l.createElement(n.h2,{id:"customizing",style:{position:"relative"}},"Customizing",l.createElement(n.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",l.createElement(n.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"React spinners use local CSS variables on ",l.createElement(n.code,null,".spinner-border")," and ",l.createElement(n.code,null,".spinner-grow")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",l.createElement(n.p,null,"Border spinner variables:"),"\n",l.createElement(s,{file:"_spinners.scss",capture:"spinner-border-css-vars"}),"\n",l.createElement(n.p,null,"Growing spinner variables:"),"\n",l.createElement(s,{file:"_spinners.scss",capture:"spinner-grow-css-vars"}),"\n",l.createElement(n.p,null,"For both spinners, small spinner modifier classes are used to update the values of these CSS variables as needed. For example, the ",l.createElement(n.code,null,".spinner-border-sm")," class does the following:"),"\n",l.createElement(s,{file:"_spinners.scss",capture:"spinner-border-sm-css-vars"}),"\n",l.createElement(n.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",l.createElement(n.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CSpinner style={vars}>...</CSpinner>\n")),"\n",l.createElement(n.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",l.createElement(n.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(s,{file:"_variables.scss",capture:"spinner-variables"}),"\n",l.createElement(n.h3,{id:"keyframes",style:{position:"relative"}},"Keyframes",l.createElement(n.a,{href:"#keyframes","aria-label":"keyframes permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Used for creating the CSS animations for our spinners. Included in ",l.createElement(n.code,null,"_spinners.scss"),"."),"\n",l.createElement(s,{file:"_spinners.scss",capture:"spinner-border-keyframes"}),"\n",l.createElement(s,{file:"_spinners.scss",capture:"spinner-grow-keyframes"}),"\n",l.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",l.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"cspinner",style:{position:"relative"}},"CSpinner",l.createElement(n.a,{href:"#cspinner","aria-label":"cspinner permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CSpinner } from '@coreui/react'\n// or\nimport CSpinner from '@coreui/react/src/components/spinner/CSpinner'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"color")),l.createElement(n.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),l.createElement(n.td,null,l.createElement(n.code,null,"'primary'")," | ",l.createElement(n.code,null,"'secondary'")," | ",l.createElement(n.code,null,"'success'")," | ",l.createElement(n.code,null,"'danger'")," | ",l.createElement(n.code,null,"'warning'")," | ",l.createElement(n.code,null,"'info'")," | ",l.createElement(n.code,null,"'dark'")," | ",l.createElement(n.code,null,"'light'")," | ",l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"component")),l.createElement(n.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")," | ",l.createElement(n.code,null,"ComponentClass<any, any>")," | ",l.createElement(n.code,null,"FunctionComponent<any>")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"size")),l.createElement(n.td,null,"Size the component small."),l.createElement(n.td,null,l.createElement(n.code,null,"'sm'")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"variant")),l.createElement(n.td,null,"Set the button variant to an outlined button or a ghost button."),l.createElement(n.td,null,l.createElement(n.code,null,"'border'")," | ",l.createElement(n.code,null,"'grow'")),l.createElement(n.td,null,"border")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"visuallyHiddenLabel")),l.createElement(n.td,null,"Set visually hidden label for accessibility purposes."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"Loading..."))))))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)};function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=t(18722);const m=e=>{let{children:n}=e;return l.createElement(a.Zo,{components:{ScssDocs:e=>l.createElement(o.Jw,e),strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(r.C_,Object.assign({},e.children.props,{color:n})))}return l.createElement("strong",null,e.children)},pre:e=>l.createElement(o.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return l.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...a}=e;return l.createElement(o.UW,a,t&&l.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return l.createElement(o.en,t,l.Children.map(n,(e=>{if(l.isValidElement(e))return l.cloneElement(e)})))}}},n)};function p(e){return l.createElement(m,e,l.createElement(c,e))}m.displayName="MdxLayout"},45392:function(e,n,t){t.d(n,{Zo:function(){return c},ah:function(){return r}});var a=t(2784);const l=a.createContext({});function r(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||s:r(e),a.createElement(l.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-spinner-mdx-8560f7b9b4d43b57cb68.js.map