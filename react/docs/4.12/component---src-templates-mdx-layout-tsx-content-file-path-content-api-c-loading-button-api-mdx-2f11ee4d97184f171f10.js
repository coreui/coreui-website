"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[2101],{6360:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),r=l(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CLoadingButton } from '@coreui/react-pro-pro'\n// or\nimport CLoadingButton from '@coreui/react-pro/src/components/loading-button/CLoadingButton'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"active")),r.createElement(t.td,null,"Toggle the active state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"color")),r.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"component")),r.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"ComponentClass<any, any>")," | ",r.createElement(t.code,null,"FunctionComponent<any>")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabled")),r.createElement(t.td,null,"Toggle the disabled state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabledOnLoading")),r.createElement(t.td,null,"Makes button disabled when loading."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"href")),r.createElement(t.td,null,"The href attribute specifies the URL of the page the link goes to."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"loading")),r.createElement(t.td,null,"Loading state (set to true to start animation)."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"role")),r.createElement(t.td,null,"The role attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"shape")),r.createElement(t.td,null,"Select the shape of the component."),r.createElement(t.td,null,r.createElement(t.code,null,"'rounded'")," | ",r.createElement(t.code,null,"'rounded-top'")," | ",r.createElement(t.code,null,"'rounded-end'")," | ",r.createElement(t.code,null,"'rounded-bottom'")," | ",r.createElement(t.code,null,"'rounded-start'")," | ",r.createElement(t.code,null,"'rounded-circle'")," | ",r.createElement(t.code,null,"'rounded-pill'")," | ",r.createElement(t.code,null,"'rounded-0'")," | ",r.createElement(t.code,null,"'rounded-1'")," | ",r.createElement(t.code,null,"'rounded-2'")," | ",r.createElement(t.code,null,"'rounded-3'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"size")),r.createElement(t.td,null,"Size the component small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"spinnerType")),r.createElement(t.td,null,"Sets type of spinner."),r.createElement(t.td,null,r.createElement(t.code,null,"'border'")," | ",r.createElement(t.code,null,"'grow'")),r.createElement(t.td,null,"border")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"timeout")),r.createElement(t.td,null,"Automatically starts loading animation and stops after a determined amount of milliseconds."),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"type")),r.createElement(t.td,null,"Specifies the type of button. Always specify the type attribute for the ",r.createElement(t.code,null,"<button>")," element.",r.createElement("br"),"Different browsers may use different default types for the ",r.createElement(t.code,null,"<button>")," element."),r.createElement(t.td,null,r.createElement(t.code,null,"'button'")," | ",r.createElement(t.code,null,"'submit'")," | ",r.createElement(t.code,null,"'reset'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"variant")),r.createElement(t.td,null,"Set the button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"-")))))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},o=l(18910),u=l(18722);const m=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(u.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(o.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(u.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(u.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(u.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(m,e,r.createElement(a,e))}m.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return c}});var n=l(2784);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||a:c(e),n.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-loading-button-api-mdx-2f11ee4d97184f171f10.js.map