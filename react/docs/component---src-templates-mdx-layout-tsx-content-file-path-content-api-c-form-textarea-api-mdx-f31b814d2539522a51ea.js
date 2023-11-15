"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[1447],{13720:function(e,t,l){l.r(t),l.d(t,{default:function(){return s}});var n=l(45392),a=l(2784);function r(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CFormTextarea } from '@coreui/react'\n// or\nimport CFormTextarea from '@coreui/react/src/components/form/CFormTextarea'\n")),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"disabled")),a.createElement(t.td,null,"Toggle the disabled state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"feedback")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable feedback."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"feedbackInvalid")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable feedback."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"feedbackValid")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",a.createElement(t.code,null,":invalid")," and ",a.createElement(t.code,null,":valid"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"floatingClassName")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.5.0+"))),a.createElement(t.td,null,"A string of all className you want applied to the floating label wrapper."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"floatingLabel")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",a.createElement(t.code,null,":invalid")," and ",a.createElement(t.code,null,":valid"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"invalid")),a.createElement(t.td,null,"Set component validation state to invalid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"label")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Add a caption for a component."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onChange")),a.createElement(t.td,null,"Method called immediately after the ",a.createElement(t.code,null,"value")," prop changes."),a.createElement(t.td,null,a.createElement(t.code,null,"ChangeEventHandler<HTMLTextAreaElement>")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"plainText")),a.createElement(t.td,null,"Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side ",a.createElement(t.code,null,"readonly"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"readOnly")),a.createElement(t.td,null,"Toggle the readonly state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"text")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Add helper text to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"tooltipFeedback")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Display validation feedback in a styled tooltip."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"valid")),a.createElement(t.td,null,"Set component validation state to valid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"value")),a.createElement(t.td,null,"The ",a.createElement(t.code,null,"value")," attribute of component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"number")," | ",a.createElement(t.code,null,"string[]")),a.createElement(t.td,null,"-")))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=l(88038),m=l(53922),d=l(85338);const u=e=>{let{children:t}=e;return a.createElement(n.Zo,{components:{ScssDocs:e=>a.createElement(d.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(o.C,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(d.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(m.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:l,...n}=e;return a.createElement(d.UW,n,l&&a.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return a.createElement(d.en,l,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function s(e){return a.createElement(u,e,a.createElement(c,e))}u.displayName="MdxLayout"},53922:function(e,t,l){l.d(t,{S:function(){return f}});var n=l(2784),a=l(72779),r=l.n(a),c=l(27121),o=l(4246),m=l(5938),d=l(33365),u=l(60420),s=l(69296);const i=(0,n.forwardRef)(((e,t)=>{let{children:l,...a}=e;return n.createElement("caption",Object.assign({},a,{ref:t}),l)}));i.displayName="CTableCaption";const E=e=>{let{children:t,responsive:l,...a}=e;return l?n.createElement("div",Object.assign({className:"boolean"==typeof l?"table-responsive":`table-responsive-${l}`},a),t):n.createElement(n.Fragment,null,t)};E.displayName="CTableResponsiveWrapper";const p=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),b=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),f=(0,n.forwardRef)(((e,t)=>{let{children:l,align:a,borderColor:f,bordered:g,borderless:h,caption:v,captionTop:y,className:N,color:C,columns:j,footer:T,hover:w,items:_,responsive:k,small:O,striped:R,stripedColumns:P,tableFootProps:$,tableHeadProps:x,...F}=e;const S=(0,n.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&b(t))(j,_)),[j,_]);return n.createElement(E,{responsive:k},n.createElement("table",Object.assign({className:r()("table",{[`align-${a}`]:a,[`border-${f}`]:f,"caption-top":y||"top"===v,"table-bordered":g,"table-borderless":h,[`table-${C}`]:C,"table-hover":w,"table-sm":O,"table-striped":R,"table-striped-columns":P},N)},F,{ref:t}),(v&&"top"!==v||y)&&n.createElement(i,null,v||y),j&&n.createElement(c.V,x,n.createElement(u.T,null,j.map(((e,t)=>n.createElement(o.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:p(e.key):p(e)})(e)))))),_&&n.createElement(m.N,null,_.map(((e,t)=>n.createElement(u.T,Object.assign({},e._props&&{...e._props},{key:t}),S&&S.map(((t,l)=>void 0!==e[t]?n.createElement(d.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:l}),e[t]):null)))))),l,T&&n.createElement(s.j,$,n.createElement(u.T,null,T.map(((e,t)=>n.createElement(d.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));f.displayName="CTable"},5938:function(e,t,l){l.d(t,{N:function(){return c}});var n=l(2784),a=l(72779),r=l.n(a);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:a,color:c,...o}=e;return n.createElement("tbody",Object.assign({className:r()({[`table-${c}`]:c},a)||void 0},o,{ref:t}),l)}));c.displayName="CTableBody"},33365:function(e,t,l){l.d(t,{N:function(){return c}});var n=l(2784),a=l(72779),r=l.n(a);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,active:a,align:c,className:o,color:m,...d}=e;const u=d.scope?"th":"td";return n.createElement(u,Object.assign({className:r()({[`align-${c}`]:c,"table-active":a,[`table-${m}`]:m},o)||void 0},d,{ref:t}),l)}));c.displayName="CTableDataCell"},69296:function(e,t,l){l.d(t,{j:function(){return c}});var n=l(2784),a=l(72779),r=l.n(a);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:a,color:c,...o}=e;return n.createElement("tfoot",Object.assign({className:r()({[`table-${c}`]:c},a)||void 0},o,{ref:t}),l)}));c.displayName="CTableFoot"},27121:function(e,t,l){l.d(t,{V:function(){return c}});var n=l(2784),a=l(72779),r=l.n(a);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:a,color:c,...o}=e;return n.createElement("thead",Object.assign({className:r()({[`table-${c}`]:c},a)||void 0},o,{ref:t}),l)}));c.displayName="CTableHead"},4246:function(e,t,l){l.d(t,{i:function(){return c}});var n=l(2784),a=l(72779),r=l.n(a);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,className:a,color:c,...o}=e;return n.createElement("th",Object.assign({className:r()({[`table-${c}`]:c},a)||void 0},o,{ref:t}),l)}));c.displayName="CTableHeaderCell"},60420:function(e,t,l){l.d(t,{T:function(){return c}});var n=l(2784),a=l(72779),r=l.n(a);const c=(0,n.forwardRef)(((e,t)=>{let{children:l,active:a,align:c,className:o,color:m,...d}=e;return n.createElement("tr",Object.assign({className:r()({[`align-${c}`]:c,"table-active":a,[`table-${m}`]:m},o)||void 0},d,{ref:t}),l)}));c.displayName="CTableRow"},45392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return r}});var n=l(2784);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||c:r(e),n.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-form-textarea-api-mdx-f31b814d2539522a51ea.js.map