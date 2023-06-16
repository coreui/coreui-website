"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[6384],{9846:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var n=l(5392),a=l(2784),r=l(2097);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",div:"div",pre:"pre",code:"code",p:"p",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components),{Example:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",a.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(l,{className:""},a.createElement(r.lx,null,a.createElement(r.PB,{id:"exampleFormControlTextarea1",label:"Example textarea",rows:3,text:"Must be 8-20 words long."}))),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CForm>\n  <CFormTextarea\n    id="exampleFormControlTextarea1"\n    label="Example textarea"\n    rows={3}\n    text="Must be 8-20 words long."\n  ></CFormTextarea>\n</CForm>\n'))),"\n",a.createElement(t.p,null,"If you need to add custom classNames to form's components, or need to add some custom elements you can add each form component separately. Please check the example below."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>\n<CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>\n<CFormText component="span" id="passwordHelpInline">Must be 8-20 words long.</CFormText>\n')),"\n",a.createElement(t.h2,{id:"disabled",style:{position:"relative"}},"Disabled",a.createElement(t.a,{href:"#disabled","aria-label":"disabled permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Add the ",a.createElement(t.code,null,"disabled")," boolean attribute on an textarea to give it a grayed out appearance and remove pointer events."),"\n",a.createElement(t.div,null,a.createElement(l,{className:""},a.createElement(r.PB,{className:"mb-3",placeholder:"Disabled textarea","aria-label":"Disabled textarea example",disabled:!0})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormTextarea\n  className="mb-3"\n  placeholder="Disabled textarea"\n  aria-label="Disabled textarea example"\n  disabled\n></CFormTextarea>\n'))),"\n",a.createElement(t.h2,{id:"readonly",style:{position:"relative"}},"Readonly",a.createElement(t.a,{href:"#readonly","aria-label":"readonly permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Add the ",a.createElement(t.code,null,"readOnly")," boolean attribute on an textarea to prevent modification of the textarea's value. Read-only textareas appear lighter (just like disabled textareas), but retain the standard cursor."),"\n",a.createElement(t.div,null,a.createElement(l,{className:""},a.createElement(r.PB,{placeholder:"Readonly textarea","aria-label":"Readonly textarea example",disabled:!0,readOnly:!0})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormTextarea\n  placeholder="Readonly textarea"\n  aria-label="Readonly textarea example"\n  disabled\n  readOnly\n></CFormTextarea>\n'))),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"cformtextarea",style:{position:"relative"}},"CFormTextarea",a.createElement(t.a,{href:"#cformtextarea","aria-label":"cformtextarea permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CFormTextarea } from '@coreui/react'\n// or\nimport CFormTextarea from '@coreui/react/src/components/form/CFormTextarea'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"disabled")),a.createElement(t.td,null,"Toggle the disabled state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"feedback")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable feedback."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"feedbackInvalid")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable feedback."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"feedbackValid")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",a.createElement(t.code,null,":invalid")," and ",a.createElement(t.code,null,":valid"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"floatingClassName")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.5.0+"))),a.createElement(t.td,null,"A string of all className you want applied to the floating label wrapper."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"floatingLabel")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",a.createElement(t.code,null,":invalid")," and ",a.createElement(t.code,null,":valid"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"invalid")),a.createElement(t.td,null,"Set component validation state to invalid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"label")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Add a caption for a component."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onChange")),a.createElement(t.td,null,"Method called immediately after the ",a.createElement(t.code,null,"value")," prop changes."),a.createElement(t.td,null,a.createElement(t.code,null,"ChangeEventHandler<HTMLTextAreaElement>")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"plainText")),a.createElement(t.td,null,"Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side ",a.createElement(t.code,null,"readonly"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"readOnly")),a.createElement(t.td,null,"Toggle the readonly state for the component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"text")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Add helper text to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"tooltipFeedback")," ",a.createElement(t.strong,null,a.createElement(t.em,null,"4.2.0+"))),a.createElement(t.td,null,"Display validation feedback in a styled tooltip."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"valid")),a.createElement(t.td,null,"Set component validation state to valid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"value")),a.createElement(t.td,null,"The ",a.createElement(t.code,null,"value")," attribute of component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"number")," | ",a.createElement(t.code,null,"string[]")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cformfeedback",style:{position:"relative"}},"CFormFeedback",a.createElement(t.a,{href:"#cformfeedback","aria-label":"cformfeedback permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CFormFeedback } from '@coreui/react'\n// or\nimport CFormFeedback from '@coreui/react/src/components/form/CFormFeedback'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"invalid")),a.createElement(t.td,null,"Method called immediately after the ",a.createElement(t.code,null,"value")," prop changes."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"tooltip")),a.createElement(t.td,null,"If your form layout allows it, you can display validation feedback in a styled tooltip."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"valid")),a.createElement(t.td,null,"Set component validation state to valid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cformlabel",style:{position:"relative"}},"CFormLabel",a.createElement(t.a,{href:"#cformlabel","aria-label":"cformlabel permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CFormLabel } from '@coreui/react'\n// or\nimport CFormLabel from '@coreui/react/src/components/form/CFormLabel'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"customClassName")),a.createElement(t.td,null,"A string of all className you want to be applied to the component, and override standard className value."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-"))))),"\n",a.createElement(t.h3,{id:"cformtext",style:{position:"relative"}},"CFormText",a.createElement(t.a,{href:"#cformtext","aria-label":"cformtext permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CFormText } from '@coreui/react'\n// or\nimport CFormText from '@coreui/react/src/components/form/CFormText'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"component")),a.createElement(t.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")," | ",a.createElement(t.code,null,"ComponentClass<any, any>")," | ",a.createElement(t.code,null,"FunctionComponent<any>")),a.createElement(t.td,null,"-"))))))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)};var o=l(1380);const d=e=>{let{children:t}=e;return a.createElement(n.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(o.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return a.createElement(r.e_,n,l&&a.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return a.createElement(o.en,l,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function u(e){return a.createElement(d,e,a.createElement(m,e))}d.displayName="MdxLayout"},5392:function(e,t,l){l.d(t,{Zo:function(){return m},ah:function(){return r}});var n=l(2784);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function m({components:e,children:t,disableParentContext:l}){let m;return m=l?"function"==typeof e?e({}):e||c:r(e),n.createElement(a.Provider,{value:m},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-textarea-mdx-6a80c60f48d5f8851186.js.map