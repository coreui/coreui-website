"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[3652],{7565:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(5392),r=n(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CBadge } from '@coreui/react'\n// or\nimport CBadge from '@coreui/react/src/components/badge/CBadge'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"color")),r.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"'primary-gradient'")," | ",r.createElement(t.code,null,"'secondary-gradient'")," | ",r.createElement(t.code,null,"'success-gradient'")," | ",r.createElement(t.code,null,"'danger-gradient'")," | ",r.createElement(t.code,null,"'warning-gradient'")," | ",r.createElement(t.code,null,"'info-gradient'")," | ",r.createElement(t.code,null,"'dark-gradient'")," | ",r.createElement(t.code,null,"'light-gradient'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"component")),r.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"ComponentClass<any, any>")," | ",r.createElement(t.code,null,"FunctionComponent<any>")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"position")),r.createElement(t.td,null,"Position badge in one of the corners of a link or button."),r.createElement(t.td,null,r.createElement(t.code,null,"'top-start'")," | ",r.createElement(t.code,null,"'top-end'")," | ",r.createElement(t.code,null,"'bottom-end'")," | ",r.createElement(t.code,null,"'bottom-start'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"shape")),r.createElement(t.td,null,"Select the shape of the component."),r.createElement(t.td,null,r.createElement(t.code,null,"'rounded'")," | ",r.createElement(t.code,null,"'rounded-top'")," | ",r.createElement(t.code,null,"'rounded-end'")," | ",r.createElement(t.code,null,"'rounded-bottom'")," | ",r.createElement(t.code,null,"'rounded-start'")," | ",r.createElement(t.code,null,"'rounded-circle'")," | ",r.createElement(t.code,null,"'rounded-pill'")," | ",r.createElement(t.code,null,"'rounded-0'")," | ",r.createElement(t.code,null,"'rounded-1'")," | ",r.createElement(t.code,null,"'rounded-2'")," | ",r.createElement(t.code,null,"'rounded-3'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"size")),r.createElement(t.td,null,"Size the component small."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"textColor")),r.createElement(t.td,null,"Sets the text color of the component to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"'white'")," | ",r.createElement(t.code,null,"'muted'")," | ",r.createElement(t.code,null,"'high-emphasis'")," | ",r.createElement(t.code,null,"'medium-emphasis'")," | ",r.createElement(t.code,null,"'disabled'")," | ",r.createElement(t.code,null,"'high-emphasis-inverse'")," | ",r.createElement(t.code,null,"'medium-emphasis-inverse'")," | ",r.createElement(t.code,null,"'disabled-inverse'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},a=n(8910),d=n(7285);const u=e=>{let{children:t}=e;return r.createElement(l.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(a.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(d.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(a.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return r.createElement(d.UW,l,n&&r.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return r.createElement(d.en,n,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function m(e){return r.createElement(u,e,r.createElement(o,e))}u.displayName="MdxLayout"},5392:function(e,t,n){n.d(t,{Zo:function(){return a},ah:function(){return c}});var l=n(2784);const r=l.createContext({});function c(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:c(e),l.createElement(r.Provider,{value:a},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-badge-api-mdx-831e44333123f11ea96c.js.map