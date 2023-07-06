"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9359],{3822:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(5392),r=l(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CTimePicker } from '@coreui/react-pro-pro'\n// or\nimport CTimePicker from '@coreui/react-pro/src/components/time-picker/CTimePicker'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"ampm")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.8.0+"))),r.createElement(t.td,null,"Set if the component should use the 12/24 hour format. If ",r.createElement(t.code,null,"true")," forces the interface to a 12-hour format. If ",r.createElement(t.code,null,"false")," forces the interface into a 24-hour format. If ",r.createElement(t.code,null,"auto")," the current locale will determine the 12 or 24-hour interface by default locales."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"'auto'")),r.createElement(t.td,null,"auto")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButton")),r.createElement(t.td,null,"Toggle visibility or set the content of cancel button."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"Cancel")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButtonColor")),r.createElement(t.td,null,"Sets the color context of the cancel button to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"primary")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButtonSize")),r.createElement(t.td,null,"Size the cancel button small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"sm")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cancelButtonVariant")),r.createElement(t.td,null,"Set the cancel button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"ghost")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cleaner")),r.createElement(t.td,null,"Toggle visibility or set the content of the cleaner button."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButton")),r.createElement(t.td,null,"Toggle visibility or set the content of confirm button."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"OK")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButtonColor")),r.createElement(t.td,null,"Sets the color context of the confirm button to one of CoreUI’s themed colors."),r.createElement(t.td,null,r.createElement(t.code,null,"'primary'")," | ",r.createElement(t.code,null,"'secondary'")," | ",r.createElement(t.code,null,"'success'")," | ",r.createElement(t.code,null,"'danger'")," | ",r.createElement(t.code,null,"'warning'")," | ",r.createElement(t.code,null,"'info'")," | ",r.createElement(t.code,null,"'dark'")," | ",r.createElement(t.code,null,"'light'")," | ",r.createElement(t.code,null,"string")),r.createElement(t.td,null,"primary")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButtonSize")),r.createElement(t.td,null,"Size the confirm button small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"sm")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"confirmButtonVariant")),r.createElement(t.td,null,"Set the confirm button variant to an outlined button or a ghost button."),r.createElement(t.td,null,r.createElement(t.code,null,"'outline'")," | ",r.createElement(t.code,null,"'ghost'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"container")),r.createElement(t.td,null,"Set container type for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"'dropdown'")," | ",r.createElement(t.code,null,"'inline'")),r.createElement(t.td,null,"dropdown")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabled")),r.createElement(t.td,null,"Toggle the disabled state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"dropdownClassNames")),r.createElement(t.td,null,"A string of all className you want applied to the dropdown menu."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedback")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable feedback."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedbackInvalid")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable feedback."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedbackValid")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",r.createElement(t.code,null,":invalid")," and ",r.createElement(t.code,null,":valid"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"floatingClassName")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.5.0+"))),r.createElement(t.td,null,"A string of all className you want applied to the floating label wrapper."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"footer")),r.createElement(t.td,null,"Toggle visibility of footer element or set the content of footer."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"footerContent")),r.createElement(t.td,null,"Add custom elements to the footer."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"indicator")),r.createElement(t.td,null,"Toggle visibility or set the content of the input indicator."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"inputReadOnly")),r.createElement(t.td,null,"Toggle the readonly state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"invalid")),r.createElement(t.td,null,"Set component validation state to invalid."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"label")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Add a caption for a component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"locale")),r.createElement(t.td,null,"Sets the default locale for components. If not set, it is inherited from the browser."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"default")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onHide")),r.createElement(t.td,null,"Callback fired when the component requests to be hidden."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onShow")),r.createElement(t.td,null,"Callback fired when the component requests to be shown."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onTimeChange")),r.createElement(t.td,null,"Callback fired when the time changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(timeString: string, localeTimeString?: string, date?: Date) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"placeholder")),r.createElement(t.td,null,"Specifies a short hint that is visible in the input."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"Select time")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"required")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.10.0+"))),r.createElement(t.td,null,"When present, it specifies that time must be filled out before submitting the form."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"seconds")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.8.0+"))),r.createElement(t.td,null,"Show seconds."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"size")),r.createElement(t.td,null,"Size the component small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"text")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Add helper text to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"time")),r.createElement(t.td,null,"Initial selected time."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"Date")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"toggler")),r.createElement(t.td,null,"The content of toggler."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"tooltipFeedback")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Display validation feedback in a styled tooltip."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"valid")),r.createElement(t.td,null,"Set component validation state to valid."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"variant")),r.createElement(t.td,null,"Set the time picker variant to a roll or select."),r.createElement(t.td,null,r.createElement(t.code,null,"'roll'")," | ",r.createElement(t.code,null,"'select'")),r.createElement(t.td,null,"roll")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"visible")),r.createElement(t.td,null,"Toggle the visibility of dropdown menu component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")))))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},o=l(8910),m=l(7285);const u=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(o.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(m.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(m.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(u,e,r.createElement(a,e))}u.displayName="MdxLayout"},5392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return c}});var n=l(2784);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||a:c(e),n.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-time-picker-api-mdx-aa39a52705f773271381.js.map