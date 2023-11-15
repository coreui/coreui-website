"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4365],{60803:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(45392),l=n(2784);function a(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},"import { CFormFloating } from '@coreui/react'\n// or\nimport CFormFloating from '@coreui/react/src/components/form/CFormFloating'\n")),"\n",l.createElement(t.table,null,l.createElement(t.thead,null,l.createElement(t.tr,null,l.createElement(t.th,null,"Property"),l.createElement(t.th,null,"Description"),l.createElement(t.th,null,"Type"),l.createElement(t.th,null,"Default"))),l.createElement(t.tbody,null,l.createElement(t.tr,null,l.createElement(t.td,null,l.createElement(t.strong,null,"className")),l.createElement(t.td,null,"A string of all className you want applied to the component."),l.createElement(t.td,null,l.createElement(t.code,null,"string")),l.createElement(t.td,null,"-")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(88038),s=n(53922),i=n(85338);const m=e=>{let{children:t}=e;return l.createElement(r.Zo,{components:{ScssDocs:e=>l.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(o.C,Object.assign({},e.children.props,{color:t})))}return l.createElement("strong",null,e.children)},pre:e=>l.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return l.createElement(s.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:n,...r}=e;return l.createElement(i.UW,r,n&&l.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return l.createElement(i.en,n,l.Children.map(t,(e=>{if(l.isValidElement(e))return l.cloneElement(e)})))}}},t)};function p(e){return l.createElement(m,e,l.createElement(c,e))}m.displayName="MdxLayout"},53922:function(e,t,n){n.d(t,{S:function(){return E}});var r=n(2784),l=n(72779),a=n.n(l),c=n(27121),o=n(4246),s=n(5938),i=n(33365),m=n(60420),p=n(69296);const d=(0,r.forwardRef)(((e,t)=>{let{children:n,...l}=e;return r.createElement("caption",Object.assign({},l,{ref:t}),n)}));d.displayName="CTableCaption";const u=e=>{let{children:t,responsive:n,...l}=e;return n?r.createElement("div",Object.assign({className:"boolean"==typeof n?"table-responsive":`table-responsive-${n}`},l),t):r.createElement(r.Fragment,null,t)};u.displayName="CTableResponsiveWrapper";const b=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),f=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),E=(0,r.forwardRef)(((e,t)=>{let{children:n,align:l,borderColor:E,bordered:h,borderless:g,caption:y,captionTop:v,className:N,color:j,columns:C,footer:_,hover:O,items:w,responsive:T,small:$,striped:k,stripedColumns:F,tableFootProps:P,tableHeadProps:R,...x}=e;const D=(0,r.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&f(t))(C,w)),[C,w]);return r.createElement(u,{responsive:T},r.createElement("table",Object.assign({className:a()("table",{[`align-${l}`]:l,[`border-${E}`]:E,"caption-top":v||"top"===y,"table-bordered":h,"table-borderless":g,[`table-${j}`]:j,"table-hover":O,"table-sm":$,"table-striped":k,"table-striped-columns":F},N)},x,{ref:t}),(y&&"top"!==y||v)&&r.createElement(d,null,y||v),C&&r.createElement(c.V,R,r.createElement(m.T,null,C.map(((e,t)=>r.createElement(o.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:b(e.key):b(e)})(e)))))),w&&r.createElement(s.N,null,w.map(((e,t)=>r.createElement(m.T,Object.assign({},e._props&&{...e._props},{key:t}),D&&D.map(((t,n)=>void 0!==e[t]?r.createElement(i.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:n}),e[t]):null)))))),n,_&&r.createElement(p.j,P,r.createElement(m.T,null,_.map(((e,t)=>r.createElement(i.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));E.displayName="CTable"},5938:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(2784),l=n(72779),a=n.n(l);const c=(0,r.forwardRef)(((e,t)=>{let{children:n,className:l,color:c,...o}=e;return r.createElement("tbody",Object.assign({className:a()({[`table-${c}`]:c},l)||void 0},o,{ref:t}),n)}));c.displayName="CTableBody"},33365:function(e,t,n){n.d(t,{N:function(){return c}});var r=n(2784),l=n(72779),a=n.n(l);const c=(0,r.forwardRef)(((e,t)=>{let{children:n,active:l,align:c,className:o,color:s,...i}=e;const m=i.scope?"th":"td";return r.createElement(m,Object.assign({className:a()({[`align-${c}`]:c,"table-active":l,[`table-${s}`]:s},o)||void 0},i,{ref:t}),n)}));c.displayName="CTableDataCell"},69296:function(e,t,n){n.d(t,{j:function(){return c}});var r=n(2784),l=n(72779),a=n.n(l);const c=(0,r.forwardRef)(((e,t)=>{let{children:n,className:l,color:c,...o}=e;return r.createElement("tfoot",Object.assign({className:a()({[`table-${c}`]:c},l)||void 0},o,{ref:t}),n)}));c.displayName="CTableFoot"},27121:function(e,t,n){n.d(t,{V:function(){return c}});var r=n(2784),l=n(72779),a=n.n(l);const c=(0,r.forwardRef)(((e,t)=>{let{children:n,className:l,color:c,...o}=e;return r.createElement("thead",Object.assign({className:a()({[`table-${c}`]:c},l)||void 0},o,{ref:t}),n)}));c.displayName="CTableHead"},4246:function(e,t,n){n.d(t,{i:function(){return c}});var r=n(2784),l=n(72779),a=n.n(l);const c=(0,r.forwardRef)(((e,t)=>{let{children:n,className:l,color:c,...o}=e;return r.createElement("th",Object.assign({className:a()({[`table-${c}`]:c},l)||void 0},o,{ref:t}),n)}));c.displayName="CTableHeaderCell"},60420:function(e,t,n){n.d(t,{T:function(){return c}});var r=n(2784),l=n(72779),a=n.n(l);const c=(0,r.forwardRef)(((e,t)=>{let{children:n,active:l,align:c,className:o,color:s,...i}=e;return r.createElement("tr",Object.assign({className:a()({[`align-${c}`]:c,"table-active":l,[`table-${s}`]:s},o)||void 0},i,{ref:t}),n)}));c.displayName="CTableRow"},45392:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return a}});var r=n(2784);const l=r.createContext({});function a(e){const t=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:a(e),r.createElement(l.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-form-floating-api-mdx-eedc1fbd579a40fd46b0.js.map