"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4327],{30521:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var l=n(45392),a=n(2784),r=n(18910);const o=()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:n,1:l}=(0,a.useState)(!1),{0:o,1:c}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(r.Nd,{loading:e,onClick:()=>t(!e)},"Submit"),a.createElement(r.Nd,{variant:"outline",loading:n,onClick:()=>l(!n)},"Submit"),a.createElement(r.Nd,{variant:"ghost",loading:o,onClick:()=>c(!o)},"Submit"))};function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",pre:"pre",code:"code",div:"div",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",a.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n","\n",a.createElement(n,null,a.createElement(o)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [state, setState] = useState(false)\nconst [stateO, setStateO] = useState(false)\nconst [stateG, setStateG] = useState(false)\nreturn (\n  <>\n    <CLoadingButton loading={state} onClick={() => setState(!state)}>\n      Submit\n    </CLoadingButton>\n    <CLoadingButton variant="outline" loading={stateO} onClick={() => setStateO(!stateO)}>\n      Submit\n    </CLoadingButton>\n    <CLoadingButton variant="ghost" loading={stateG} onClick={() => setStateG(!stateG)}>\n      Submit\n    </CLoadingButton>\n  </>\n)\n')),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(n,{className:""},a.createElement(r.Nd,{timeout:2e3},"Submit"),a.createElement(r.Nd,{variant:"outline",timeout:2e3},"Submit"),a.createElement(r.Nd,{variant:"ghost",timeout:2e3},"Submit")),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CLoadingButton timeout={2000}>Submit</CLoadingButton>\n<CLoadingButton variant="outline" timeout={2000}>Submit</CLoadingButton>\n<CLoadingButton variant="ghost" timeout={2000}>Submit</CLoadingButton>\n'))),"\n",a.createElement(t.h2,{id:"spinners",style:{position:"relative"}},"Spinners",a.createElement(t.a,{href:"#spinners","aria-label":"spinners permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"border-default",style:{position:"relative"}},"Border (Default)",a.createElement(t.a,{href:"#border-default","aria-label":"border default permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(n,{className:""},a.createElement(r.Nd,{color:"info",timeout:2e3},"Submit"),a.createElement(r.Nd,{color:"success",variant:"outline",timeout:2e3},"Submit"),a.createElement(r.Nd,{color:"warning",variant:"ghost",timeout:2e3},"Submit")),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CLoadingButton color="info" timeout={2000}>Submit</CLoadingButton>\n<CLoadingButton color="success" variant="outline" timeout={2000}>Submit</CLoadingButton>\n<CLoadingButton color="warning" variant="ghost" timeout={2000}>Submit</CLoadingButton>\n'))),"\n",a.createElement(t.h3,{id:"grow",style:{position:"relative"}},"Grow",a.createElement(t.a,{href:"#grow","aria-label":"grow permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(n,{className:""},a.createElement(r.Nd,{color:"info",spinnerType:"grow",timeout:2e3},"Submit"),a.createElement(r.Nd,{color:"success",spinnerType:"grow",variant:"outline",timeout:2e3},"Submit"),a.createElement(r.Nd,{color:"warning",spinnerType:"grow",variant:"ghost",timeout:2e3},"Submit")),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CLoadingButton color="info" spinnerType="grow" timeout={2000}>Submit</CLoadingButton>\n<CLoadingButton color="success" spinnerType="grow" variant="outline" timeout={2000}>Submit</CLoadingButton>\n<CLoadingButton color="warning" spinnerType="grow" variant="ghost" timeout={2000}>Submit</CLoadingButton>\n'))),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"cloadingbutton",style:{position:"relative"}},"CLoadingButton",a.createElement(t.a,{href:"#cloadingbutton","aria-label":"cloadingbutton permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CLoadingButton } from '@coreui/react-pro-pro'\n// or\nimport CLoadingButton from '@coreui/react-pro/src/components/loading-button/CLoadingButton'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"active")),a.createElement(t.td,null,"Toggle the active state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"color")),a.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),a.createElement(t.td,null,a.createElement(t.code,null,"'primary'")," | ",a.createElement(t.code,null,"'secondary'")," | ",a.createElement(t.code,null,"'success'")," | ",a.createElement(t.code,null,"'danger'")," | ",a.createElement(t.code,null,"'warning'")," | ",a.createElement(t.code,null,"'info'")," | ",a.createElement(t.code,null,"'dark'")," | ",a.createElement(t.code,null,"'light'")," | ",a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"disabled")),a.createElement(t.td,null,"Toggle the disabled state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"disabledOnLoading")),a.createElement(t.td,null,"Makes button disabled when loading."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"href")),a.createElement(t.td,null,"The href attribute specifies the URL of the page the link goes to."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"loading")),a.createElement(t.td,null,"Loading state (set to true to start animation)."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"role")),a.createElement(t.td,null,"The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"shape")),a.createElement(t.td,null,"Select the shape of the component."),a.createElement(t.td,null,a.createElement(t.code,null,"'rounded'")," | ",a.createElement(t.code,null,"'rounded-top'")," | ",a.createElement(t.code,null,"'rounded-end'")," | ",a.createElement(t.code,null,"'rounded-bottom'")," | ",a.createElement(t.code,null,"'rounded-start'")," | ",a.createElement(t.code,null,"'rounded-circle'")," | ",a.createElement(t.code,null,"'rounded-pill'")," | ",a.createElement(t.code,null,"'rounded-0'")," | ",a.createElement(t.code,null,"'rounded-1'")," | ",a.createElement(t.code,null,"'rounded-2'")," | ",a.createElement(t.code,null,"'rounded-3'")," | ",a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"size")),a.createElement(t.td,null,"Size the component small or large."),a.createElement(t.td,null,a.createElement(t.code,null,"'sm'")," | ",a.createElement(t.code,null,"'lg'")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"spinnerType")),a.createElement(t.td,null,"Sets type of spinner."),a.createElement(t.td,null,a.createElement(t.code,null,"'border'")," | ",a.createElement(t.code,null,"'grow'")),a.createElement(t.td,null,"border")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"timeout")),a.createElement(t.td,null,"Automatically starts loading animation and stops after a determined amount of milliseconds."),a.createElement(t.td,null,a.createElement(t.code,null,"number")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"type")),a.createElement(t.td,null,"Specifies the type of button. Always specify the type attribute for the ",a.createElement(t.code,null,"<button>")," element.",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<br/>"}}),"Different browsers may use different default types for the ",a.createElement(t.code,null,"<button>")," element."),a.createElement(t.td,null,a.createElement(t.code,null,"'button'")," | ",a.createElement(t.code,null,"'submit'")," | ",a.createElement(t.code,null,"'reset'")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"variant")),a.createElement(t.td,null,"Set the button variant to an outlined button or a ghost button."),a.createElement(t.td,null,a.createElement(t.code,null,"'outline'")," | ",a.createElement(t.code,null,"'ghost'")),a.createElement(t.td,null,"-"))))))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)};var m=n(18722);const i=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(m.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(m.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(m.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function s(e){return a.createElement(i,e,a.createElement(u,e))}i.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-loading-button-mdx-d7905838045ec5054eba.js.map