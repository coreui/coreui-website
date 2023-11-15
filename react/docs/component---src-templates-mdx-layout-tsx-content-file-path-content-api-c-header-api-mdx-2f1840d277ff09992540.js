"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[8150],{63320:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(45392),r=n(2784);function a(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CHeader } from '@coreui/react'\n// or\nimport CHeader from '@coreui/react/src/components/header/CHeader'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"container")),r.createElement(t.td,null,"Defines optional container wrapping children elements."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'md'")," | ",r.createElement(t.code,null,"'lg'")," | ",r.createElement(t.code,null,"'xl'")," | ",r.createElement(t.code,null,"'xxl'")," | ",r.createElement(t.code,null,"'fluid'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"position")),r.createElement(t.td,null,"Place header in non-static positions."),r.createElement(t.td,null,r.createElement(t.code,null,"'fixed'")," | ",r.createElement(t.code,null,"'sticky'")),r.createElement(t.td,null,"-")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(88038),s=n(53922),i=n(85338);const m=e=>{let{children:t}=e;return r.createElement(l.Zo,{components:{ScssDocs:e=>r.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(o.C,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(s.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:n,...l}=e;return r.createElement(i.UW,l,n&&r.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return r.createElement(i.en,n,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(m,e,r.createElement(c,e))}m.displayName="MdxLayout"},53922:function(e,t,n){n.d(t,{S:function(){return f}});var l=n(2784),r=n(72779),a=n.n(r),c=n(27121),o=n(4246),s=n(5938),i=n(33365),m=n(60420),d=n(69296);const u=(0,l.forwardRef)(((e,t)=>{let{children:n,...r}=e;return l.createElement("caption",Object.assign({},r,{ref:t}),n)}));u.displayName="CTableCaption";const p=e=>{let{children:t,responsive:n,...r}=e;return n?l.createElement("div",Object.assign({className:"boolean"==typeof n?"table-responsive":`table-responsive-${n}`},r),t):l.createElement(l.Fragment,null,t)};p.displayName="CTableResponsiveWrapper";const E=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),b=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),f=(0,l.forwardRef)(((e,t)=>{let{children:n,align:r,borderColor:f,bordered:h,borderless:g,caption:y,captionTop:v,className:N,color:j,columns:C,footer:_,hover:O,items:w,responsive:T,small:$,striped:k,stripedColumns:P,tableFootProps:x,tableHeadProps:R,...D}=e;const H=(0,l.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&b(t))(C,w)),[C,w]);return l.createElement(p,{responsive:T},l.createElement("table",Object.assign({className:a()("table",{[`align-${r}`]:r,[`border-${f}`]:f,"caption-top":v||"top"===y,"table-bordered":h,"table-borderless":g,[`table-${j}`]:j,"table-hover":O,"table-sm":$,"table-striped":k,"table-striped-columns":P},N)},D,{ref:t}),(y&&"top"!==y||v)&&l.createElement(u,null,y||v),C&&l.createElement(c.V,R,l.createElement(m.T,null,C.map(((e,t)=>l.createElement(o.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:E(e.key):E(e)})(e)))))),w&&l.createElement(s.N,null,w.map(((e,t)=>l.createElement(m.T,Object.assign({},e._props&&{...e._props},{key:t}),H&&H.map(((t,n)=>void 0!==e[t]?l.createElement(i.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:n}),e[t]):null)))))),n,_&&l.createElement(d.j,x,l.createElement(m.T,null,_.map(((e,t)=>l.createElement(i.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));f.displayName="CTable"},5938:function(e,t,n){n.d(t,{N:function(){return c}});var l=n(2784),r=n(72779),a=n.n(r);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:r,color:c,...o}=e;return l.createElement("tbody",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),n)}));c.displayName="CTableBody"},33365:function(e,t,n){n.d(t,{N:function(){return c}});var l=n(2784),r=n(72779),a=n.n(r);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,active:r,align:c,className:o,color:s,...i}=e;const m=i.scope?"th":"td";return l.createElement(m,Object.assign({className:a()({[`align-${c}`]:c,"table-active":r,[`table-${s}`]:s},o)||void 0},i,{ref:t}),n)}));c.displayName="CTableDataCell"},69296:function(e,t,n){n.d(t,{j:function(){return c}});var l=n(2784),r=n(72779),a=n.n(r);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:r,color:c,...o}=e;return l.createElement("tfoot",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),n)}));c.displayName="CTableFoot"},27121:function(e,t,n){n.d(t,{V:function(){return c}});var l=n(2784),r=n(72779),a=n.n(r);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:r,color:c,...o}=e;return l.createElement("thead",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),n)}));c.displayName="CTableHead"},4246:function(e,t,n){n.d(t,{i:function(){return c}});var l=n(2784),r=n(72779),a=n.n(r);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,className:r,color:c,...o}=e;return l.createElement("th",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),n)}));c.displayName="CTableHeaderCell"},60420:function(e,t,n){n.d(t,{T:function(){return c}});var l=n(2784),r=n(72779),a=n.n(r);const c=(0,l.forwardRef)(((e,t)=>{let{children:n,active:r,align:c,className:o,color:s,...i}=e;return l.createElement("tr",Object.assign({className:a()({[`align-${c}`]:c,"table-active":r,[`table-${s}`]:s},o)||void 0},i,{ref:t}),n)}));c.displayName="CTableRow"},45392:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return a}});var l=n(2784);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:a(e),l.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-header-api-mdx-2f1840d277ff09992540.js.map