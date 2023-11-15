"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[2313],{98587:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var a=l(45392),n=l(2784),r=l(13924);function o(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,a.ah)(),e.components),{Example:l,ScssDocs:o}=t;return l||i("Example",!0),o||i("ScssDocs",!0),n.createElement(n.Fragment,null,n.createElement(t.h2,{id:"approach",style:{position:"relative"}},"Approach",n.createElement(t.a,{href:"#approach","aria-label":"approach permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Browser default radios are replaced with the help of ",n.createElement(t.code,null,"<CFormCheck radio>"),". Radios are for selecting one option from many."),"\n",n.createElement(t.h2,{id:"radios",style:{position:"relative"}},"Radios",n.createElement(t.a,{href:"#radios","aria-label":"radios permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Add the ",n.createElement(t.code,null,"disabled")," attribute and the associated ",n.createElement(t.code,null,"<label>"),"s are automatically styled to match with a lighter color to help indicate the input's state."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",label:"Default radio"}),n.createElement(r.E,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",label:"Checked radio",defaultChecked:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio"/>\n<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Checked radio" defaultChecked/>\n'))),"\n",n.createElement(t.h3,{id:"disabled",style:{position:"relative"}},"Disabled",n.createElement(t.a,{href:"#disabled","aria-label":"disabled permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{type:"radio",name:"flexRadioDisabled",id:"flexRadioDisabled",label:"Disabled radio",disabled:!0}),n.createElement(r.E,{type:"radio",name:"flexRadioDisabled",id:"flexRadioCheckedDisabled",label:"Disabled checked radio",defaultChecked:!0,disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>\n<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" defaultChecked disabled/>\n'))),"\n",n.createElement(t.h2,{id:"default-stacked",style:{position:"relative"}},"Default (stacked)",n.createElement(t.a,{href:"#default-stacked","aria-label":"default stacked permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"By default, any number of radios that are immediate sibling will be vertically stacked and appropriately spaced."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",label:"Default radio",defaultChecked:!0}),n.createElement(r.E,{type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2",label:"Second default radio"}),n.createElement(r.E,{type:"radio",name:"exampleRadios",id:"exampleRadios3",value:"option3",label:"Disabled radio",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Default radio" defaultChecked/>\n<CFormCheck type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Second default radio"/>\n<CFormCheck type="radio" name="exampleRadios" id="exampleRadios3" value="option3" label="Disabled radio" disabled/>\n'))),"\n",n.createElement(t.h2,{id:"inline",style:{position:"relative"}},"Inline",n.createElement(t.a,{href:"#inline","aria-label":"inline permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Group radios on the same horizontal row by adding ",n.createElement(t.code,null,"inline")," boolean property to any ",n.createElement(t.code,null,"<CFormCheck radio>"),"."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox1",value:"option1",label:"1"}),n.createElement(r.E,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox2",value:"option2",label:"2"}),n.createElement(r.E,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>\n<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>\n<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>\n'))),"\n",n.createElement(t.h2,{id:"reverse",style:{position:"relative"}},"Reverse",n.createElement(t.a,{href:"#reverse","aria-label":"reverse permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Put your radios on the opposite side by adding ",n.createElement(t.code,null,"reverse")," boolean property."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{reverse:!0,type:"radio",id:"reverseOption1",value:"option1",label:"Reverse radio"}),n.createElement(r.E,{reverse:!0,type:"radio",id:"reverseOption2",value:"option2",label:"Disabled reverse radio",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck reverse type="radio" id="reverseOption1" value="option1" label="Reverse radio"/>\n<CFormCheck reverse type="radio" id="reverseOption2" value="option2" label="Disabled reverse radio" disabled/>\n'))),"\n",n.createElement(t.h2,{id:"without-labels",style:{position:"relative"}},"Without labels",n.createElement(t.a,{href:"#without-labels","aria-label":"without labels permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Remember to still provide some form of accessible name for assistive technologies (for instance, using ",n.createElement(t.code,null,"aria-label"),")."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{type:"radio",name:"radioNoLabel",id:"radioNoLabel",value:"","aria-label":"..."})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..."/>\n'))),"\n",n.createElement(t.h2,{id:"radio-toggle-buttons",style:{position:"relative"}},"Radio toggle buttons",n.createElement(t.a,{href:"#radio-toggle-buttons","aria-label":"radio toggle buttons permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Create button-like radio buttons by using ",n.createElement(t.code,null,"button")," boolean property on the ",n.createElement(t.code,null,"<CFormCheck radio>")," component. These toggle buttons can further be grouped in a button group if needed."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{button:{color:"secondary"},type:"radio",name:"options",id:"option1",autoComplete:"off",label:"Checked",defaultChecked:!0}),n.createElement(r.E,{button:{color:"secondary"},type:"radio",name:"options",id:"option2",autoComplete:"off",label:"Radio"}),n.createElement(r.E,{button:{color:"secondary"},type:"radio",name:"options",id:"option3",autoComplete:"off",label:"Radio",disabled:!0}),n.createElement(r.E,{button:{color:"secondary"},type:"radio",name:"options",id:"option4",autoComplete:"off",label:"Radio"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option1" autoComplete="off" label="Checked" defaultChecked/>\n<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option2" autoComplete="off" label="Radio"/>\n<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option3" autoComplete="off" label="Radio" disabled/>\n<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option4" autoComplete="off" label="Radio"/>\n'))),"\n",n.createElement(t.h3,{id:"outlined-styles",style:{position:"relative"}},"Outlined styles",n.createElement(t.a,{href:"#outlined-styles","aria-label":"outlined styles permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Different variants of button, such at the various outlined styles, are supported."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(r.E,{button:{color:"success",variant:"outline"},type:"radio",name:"options-outlined",id:"success-outlined",autoComplete:"off",label:"Radio",defaultChecked:!0}),n.createElement(r.E,{button:{color:"danger",variant:"outline"},type:"radio",name:"options-outlined",id:"danger-outlined",autoComplete:"off",label:"Radio"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck button={{ color: \'success\', variant: \'outline\' }} type="radio" name="options-outlined" id="success-outlined" autoComplete="off" label="Radio" defaultChecked/>\n<CFormCheck button={{ color: \'danger\', variant: \'outline\' }} type="radio" name="options-outlined" id="danger-outlined" autoComplete="off" label="Radio"/>\n'))),"\n",n.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",n.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",n.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(o,{file:"_variables.scss",capture:"form-check-variables"}),"\n",n.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",n.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"cformcheck",style:{position:"relative"}},"CFormCheck",n.createElement(t.a,{href:"#cformcheck","aria-label":"cformcheck permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CFormCheck } from '@coreui/react'\n// or\nimport CFormCheck from '@coreui/react/src/components/form/CFormCheck'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"button")),n.createElement(t.td,null,"Create button-like checkboxes and radio buttons."),n.createElement(t.td,null,n.createElement(t.code,null,"ButtonObject")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"feedback")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable feedback."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"feedbackInvalid")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable feedback."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"feedbackValid")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",n.createElement(t.code,null,":invalid")," and ",n.createElement(t.code,null,":valid"),"."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"floatingLabel")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",n.createElement(t.code,null,":invalid")," and ",n.createElement(t.code,null,":valid"),"."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"hitArea")),n.createElement(t.td,null,"Sets hit area to the full area of the component."),n.createElement(t.td,null,n.createElement(t.code,null,"'full'")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"id")),n.createElement(t.td,null,"The id global attribute defines an identifier (ID) that must be unique in the whole document."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"indeterminate")),n.createElement(t.td,null,"Input Checkbox indeterminate Property."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"inline")),n.createElement(t.td,null,"Group checkboxes or radios on the same horizontal row."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"invalid")),n.createElement(t.td,null,"Set component validation state to invalid."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"label")),n.createElement(t.td,null,"The element represents a caption for a component."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"reverse")),n.createElement(t.td,null,"Put checkboxes or radios on the opposite side."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"tooltipFeedback")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Display validation feedback in a styled tooltip."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"type")),n.createElement(t.td,null,"Specifies the type of component."),n.createElement(t.td,null,n.createElement(t.code,null,"'checkbox'")," | ",n.createElement(t.code,null,"'radio'")),n.createElement(t.td,null,"checkbox")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"valid")),n.createElement(t.td,null,"Set component validation state to valid."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-"))))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(o,e)):o(e)};function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=l(88038),s=l(53922),m=l(85338);const u=e=>{let{children:t}=e;return n.createElement(a.Zo,{components:{ScssDocs:e=>n.createElement(m.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(d.C,Object.assign({},e.children.props,{color:t})))}return n.createElement("strong",null,e.children)},pre:e=>n.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return n.createElement(s.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:l,...a}=e;return n.createElement(m.UW,a,l&&n.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return n.createElement(m.en,l,n.Children.map(t,(e=>{if(n.isValidElement(e))return n.cloneElement(e)})))}}},t)};function p(e){return n.createElement(u,e,n.createElement(c,e))}u.displayName="MdxLayout"},13924:function(e,t,l){l.d(t,{E:function(){return d}});var a=l(2784),n=l(72779),r=l.n(n),o=l(59062),c=l(17200),i=l(90805);const d=(0,a.forwardRef)(((e,t)=>{let{className:l,button:n,feedback:d,feedbackInvalid:s,feedbackValid:m,floatingLabel:u,tooltipFeedback:p,hitArea:E,id:b,indeterminate:f,inline:h,invalid:v,label:y,reverse:k,type:g="checkbox",valid:C,...N}=e;const R=(0,a.useRef)(null),x=(0,i.A7)(t,R);(0,a.useEffect)((()=>{R.current&&f&&(R.current.indeterminate=f)}),[f,R.current]);const _=()=>a.createElement("input",Object.assign({type:g,className:r()(n?"btn-check":"form-check-input",{"is-invalid":v,"is-valid":C,"me-2":E}),id:b},N,{ref:x})),F=()=>a.createElement(o.X,{describedby:N["aria-describedby"],feedback:d,feedbackInvalid:s,feedbackValid:m,floatingLabel:u,invalid:v,tooltipFeedback:p,valid:C}),j=()=>a.createElement(c.L,Object.assign({customClassName:r()(n?r()("btn",n.variant?`btn-${n.variant}-${n.color}`:`btn-${n.color}`,{[`btn-${n.size}`]:n.size},`${n.shape}`):"form-check-label")},b&&{htmlFor:b}),y),D=()=>n?a.createElement(a.Fragment,null,a.createElement(_,null),y&&a.createElement(j,null),a.createElement(F,null)):y?E?a.createElement(a.Fragment,null,a.createElement(_,null),a.createElement(c.L,Object.assign({customClassName:r()("form-check-label stretched-link",l)},b&&{htmlFor:b}),y),a.createElement(F,null)):a.createElement("div",{className:r()("form-check",{"form-check-inline":h,"form-check-reverse":k,"is-invalid":v,"is-valid":C},l)},a.createElement(_,null),a.createElement(j,null),a.createElement(F,null)):a.createElement(_,null);return a.createElement(D,null)}));d.displayName="CFormCheck"},59062:function(e,t,l){l.d(t,{X:function(){return r}});var a=l(2784),n=l(3591);const r=e=>{let{describedby:t,feedback:l,feedbackInvalid:r,feedbackValid:o,invalid:c,tooltipFeedback:i,valid:d}=e;return a.createElement(a.Fragment,null,l&&(d||c)&&a.createElement(n.C,Object.assign({},c&&{id:t},{invalid:c,tooltip:i,valid:d}),l),r&&a.createElement(n.C,{id:t,invalid:!0,tooltip:i},r),o&&a.createElement(n.C,{valid:!0,tooltip:i},o))};r.displayName="CFormControlValidation"},3591:function(e,t,l){l.d(t,{C:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,className:n,component:o="div",invalid:c,tooltip:i,valid:d,...s}=e;return a.createElement(o,Object.assign({className:r()({["invalid-"+(i?"tooltip":"feedback")]:c,["valid-"+(i?"tooltip":"feedback")]:d},n)},s,{ref:t}),l)}));o.displayName="CFormFeedback"},17200:function(e,t,l){l.d(t,{L:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,className:n,customClassName:o,...c}=e;return a.createElement("label",Object.assign({className:null!=o?o:r()("form-label",n)},c,{ref:t}),l)}));o.displayName="CFormLabel"},53922:function(e,t,l){l.d(t,{S:function(){return f}});var a=l(2784),n=l(72779),r=l.n(n),o=l(27121),c=l(4246),i=l(5938),d=l(33365),s=l(60420),m=l(69296);const u=(0,a.forwardRef)(((e,t)=>{let{children:l,...n}=e;return a.createElement("caption",Object.assign({},n,{ref:t}),l)}));u.displayName="CTableCaption";const p=e=>{let{children:t,responsive:l,...n}=e;return l?a.createElement("div",Object.assign({className:"boolean"==typeof l?"table-responsive":`table-responsive-${l}`},n),t):a.createElement(a.Fragment,null,t)};p.displayName="CTableResponsiveWrapper";const E=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),b=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),f=(0,a.forwardRef)(((e,t)=>{let{children:l,align:n,borderColor:f,bordered:h,borderless:v,caption:y,captionTop:k,className:g,color:C,columns:N,footer:R,hover:x,items:_,responsive:F,small:j,striped:D,stripedColumns:w,tableFootProps:O,tableHeadProps:T,...S}=e;const L=(0,a.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&b(t))(N,_)),[N,_]);return a.createElement(p,{responsive:F},a.createElement("table",Object.assign({className:r()("table",{[`align-${n}`]:n,[`border-${f}`]:f,"caption-top":k||"top"===y,"table-bordered":h,"table-borderless":v,[`table-${C}`]:C,"table-hover":x,"table-sm":j,"table-striped":D,"table-striped-columns":w},g)},S,{ref:t}),(y&&"top"!==y||k)&&a.createElement(u,null,y||k),N&&a.createElement(o.V,T,a.createElement(s.T,null,N.map(((e,t)=>a.createElement(c.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:E(e.key):E(e)})(e)))))),_&&a.createElement(i.N,null,_.map(((e,t)=>a.createElement(s.T,Object.assign({},e._props&&{...e._props},{key:t}),L&&L.map(((t,l)=>void 0!==e[t]?a.createElement(d.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:l}),e[t]):null)))))),l,R&&a.createElement(m.j,O,a.createElement(s.T,null,R.map(((e,t)=>a.createElement(d.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));f.displayName="CTable"},5938:function(e,t,l){l.d(t,{N:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,className:n,color:o,...c}=e;return a.createElement("tbody",Object.assign({className:r()({[`table-${o}`]:o},n)||void 0},c,{ref:t}),l)}));o.displayName="CTableBody"},33365:function(e,t,l){l.d(t,{N:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,active:n,align:o,className:c,color:i,...d}=e;const s=d.scope?"th":"td";return a.createElement(s,Object.assign({className:r()({[`align-${o}`]:o,"table-active":n,[`table-${i}`]:i},c)||void 0},d,{ref:t}),l)}));o.displayName="CTableDataCell"},69296:function(e,t,l){l.d(t,{j:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,className:n,color:o,...c}=e;return a.createElement("tfoot",Object.assign({className:r()({[`table-${o}`]:o},n)||void 0},c,{ref:t}),l)}));o.displayName="CTableFoot"},27121:function(e,t,l){l.d(t,{V:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,className:n,color:o,...c}=e;return a.createElement("thead",Object.assign({className:r()({[`table-${o}`]:o},n)||void 0},c,{ref:t}),l)}));o.displayName="CTableHead"},4246:function(e,t,l){l.d(t,{i:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,className:n,color:o,...c}=e;return a.createElement("th",Object.assign({className:r()({[`table-${o}`]:o},n)||void 0},c,{ref:t}),l)}));o.displayName="CTableHeaderCell"},60420:function(e,t,l){l.d(t,{T:function(){return o}});var a=l(2784),n=l(72779),r=l.n(n);const o=(0,a.forwardRef)(((e,t)=>{let{children:l,active:n,align:o,className:c,color:i,...d}=e;return a.createElement("tr",Object.assign({className:r()({[`align-${o}`]:o,"table-active":n,[`table-${i}`]:i},c)||void 0},d,{ref:t}),l)}));o.displayName="CTableRow"},45392:function(e,t,l){l.d(t,{Zo:function(){return c},ah:function(){return r}});var a=l(2784);const n=a.createContext({});function r(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function c({components:e,children:t,disableParentContext:l}){let c;return c=l?"function"==typeof e?e({}):e||o:r(e),a.createElement(n.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-radio-mdx-2841edae33f60e8b3b7f.js.map