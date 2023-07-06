"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[5203],{73797:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),r=l(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CCol } from '@coreui/react'\n// or\nimport CCol from '@coreui/react/src/components/grid/CCol'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"lg")),r.createElement(t.td,null,"The number of columns/offset/order on large devices (<1200px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"md")),r.createElement(t.td,null,"The number of columns/offset/order on medium devices (<992px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"sm")),r.createElement(t.td,null,"The number of columns/offset/order on small devices (<768px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xl")),r.createElement(t.td,null,"The number of columns/offset/order on X-Large devices (<1400px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xs")),r.createElement(t.td,null,"The number of columns/offset/order on extra small devices (<576px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xxl")),r.createElement(t.td,null,"The number of columns/offset/order on XX-Large devices (≥1400px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},a=l(1017),u=l(18722);const m=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(u.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(a.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(u.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(a.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(u.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(u.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(m,e,r.createElement(o,e))}m.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return a},ah:function(){return c}});var n=l(2784);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:l}){let a;return a=l?"function"==typeof e?e({}):e||o:c(e),n.createElement(r.Provider,{value:a},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-col-api-mdx-8a6a0824d9e985cf1c63.js.map