"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7534],{52052:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),r=l(2784);function a(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CWidgetStatsD } from '@coreui/react'\n// or\nimport CWidgetStatsD from '@coreui/react/src/components/widgets/CWidgetStatsD'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"chart")),r.createElement(t.td,null,"Chart node for your component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"color")),r.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"icon")),r.createElement(t.td,null,"Icon node for your component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"values")),r.createElement(t.td,null,"Values and titles for your component."),r.createElement(t.td,null,r.createElement(t.code,null,"Value[]")),r.createElement(t.td,null,"-")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=l(88038),s=l(53922),i=l(85338);const m=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(o.C,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(s.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(i.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(i.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(m,e,r.createElement(c,e))}m.displayName="MdxLayout"},53922:function(e,t,l){l.d(t,{S:function(){return f}});var n=l(2784),r=l(72779),a=l.n(r),c=l(27121),o=l(4246),s=l(5938),i=l(33365),m=l(60420),d=l(69296);const u=(0,n.forwardRef)(((e,t)=>{let{children:l,...r}=e;return n.createElement("caption",Object.assign({},r,{ref:t}),l)}));u.displayName="CTableCaption";const p=e=>{let{children:t,responsive:l,...r}=e;return l?n.createElement("div",Object.assign({className:"boolean"==typeof l?"table-responsive":`table-responsive-${l}`},r),t):n.createElement(n.Fragment,null,t)};p.displayName="CTableResponsiveWrapper";const E=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),b=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),f=(0,n.forwardRef)(((e,t)=>{let{children:l,align:r,borderColor:f,bordered:h,borderless:g,caption:y,captionTop:v,className:N,color:C,columns:j,footer:_,hover:O,items:w,responsive:T,small:$,striped:k,stripedColumns:R,tableFootProps:P,tableHeadProps:D,...x}=e;const S=(0,n.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&b(t))(j,w)),[j,w]);return n.createElement(p,{responsive:T},n.createElement("table",Object.assign({className:a()("table",{[`align-${r}`]:r,[`border-${f}`]:f,"caption-top":v||"top"===y,"table-bordered":h,"table-borderless":g,[`table-${C}`]:C,"table-hover":O,"table-sm":$,"table-striped":k,"table-striped-columns":R},N)},x,{ref:t}),(y&&"top"!==y||v)&&n.createElement(u,null,y||v),j&&n.createElement(c.V,D,n.createElement(m.T,null,j.map(((e,t)=>n.createElement(o.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:E(e.key):E(e)})(e)))))),w&&n.createElement(s.N,null,w.map(((e,t)=>n.createElement(m.T,Object.assign({},e._props&&{...e._props},{key:t}),S&&S.map(((t,l)=>void 0!==e[t]?n.createElement(i.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:l}),e[t]):null)))))),l,_&&n.createElement(d.j,P,n.createElement(m.T,null,_.map(((e,t)=>n.createElement(i.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));f.displayName="CTable"},5938:function(e,t,l){l.d(t,{N:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...o}=e;return n.createElement("tbody",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),l)}));c.displayName="CTableBody"},33365:function(e,t,l){l.d(t,{N:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,active:r,align:c,className:o,color:s,...i}=e;const m=i.scope?"th":"td";return n.createElement(m,Object.assign({className:a()({[`align-${c}`]:c,"table-active":r,[`table-${s}`]:s},o)||void 0},i,{ref:t}),l)}));c.displayName="CTableDataCell"},69296:function(e,t,l){l.d(t,{j:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...o}=e;return n.createElement("tfoot",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),l)}));c.displayName="CTableFoot"},27121:function(e,t,l){l.d(t,{V:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...o}=e;return n.createElement("thead",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),l)}));c.displayName="CTableHead"},4246:function(e,t,l){l.d(t,{i:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:r,color:c,...o}=e;return n.createElement("th",Object.assign({className:a()({[`table-${c}`]:c},r)||void 0},o,{ref:t}),l)}));c.displayName="CTableHeaderCell"},60420:function(e,t,l){l.d(t,{T:function(){return c}});var n=l(2784),r=l(72779),a=l.n(r);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,active:r,align:c,className:o,color:s,...i}=e;return n.createElement("tr",Object.assign({className:a()({[`align-${c}`]:c,"table-active":r,[`table-${s}`]:s},o)||void 0},i,{ref:t}),l)}));c.displayName="CTableRow"},45392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return a}});var n=l(2784);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-widget-stats-d-api-mdx-2b6784ac3af2fd8cf522.js.map