"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9390],{87929:function(e,t,l){l.r(t),l.d(t,{default:function(){return E}});var n=l(45392),r=l(2784);function c(e){const t=Object.assign({pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CMultiSelect } from '@coreui/react-pro-pro'\n// or\nimport CMultiSelect from '@coreui/react-pro/src/components/multi-select/CMultiSelect'\n")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"allowCreateOptions")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"Allow users to create options if they are not in the list of options."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"cleaner")),r.createElement(t.td,null,"Enables selection cleaner element."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"clearSearchOnSelect")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"Clear current search on selecting an item."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"disabled")),r.createElement(t.td,null,"Toggle the disabled state for the component."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedback")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable feedback."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedbackInvalid")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable feedback."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"feedbackValid")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",r.createElement(t.code,null,":invalid")," and ",r.createElement(t.code,null,":valid"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"id")),r.createElement(t.td,null,"The id global attribute defines an identifier (ID) that must be unique in the whole document.",r.createElement("br"),r.createElement("br"),"The name and id attributes for the native select element are generated based on the ",r.createElement(t.code,null,"id")," property:",r.createElement("br"),"- ",r.createElement("select",{id:"\\{id\\}-multi-select",name:"\\{id\\}-multi-select"})),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"invalid")),r.createElement(t.td,null,"Set component validation state to invalid."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"label")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Add a caption for a component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"loading")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.11.0+"))),r.createElement(t.td,null,"When set, the options list will have a loading style: loading spinner and reduced opacity."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"multiple")),r.createElement(t.td,null,"It specifies that multiple options can be selected at once."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onChange")),r.createElement(t.td,null,"Execute a function when a user changes the selected option."),r.createElement(t.td,null,r.createElement(t.code,null,"(selected: Option[]) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onFilterChange")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.8.0+"))),r.createElement(t.td,null,"Execute a function when the filter value changed."),r.createElement(t.td,null,r.createElement(t.code,null,"(value: string) => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onHide")),r.createElement(t.td,null,"The callback is fired when the Multi Select component requests to be hidden."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"onShow")),r.createElement(t.td,null,"The callback is fired when the Multi Select component requests to be shown."),r.createElement(t.td,null,r.createElement(t.code,null,"() => void")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"options")),r.createElement(t.td,null,"List of option elements."),r.createElement(t.td,null,r.createElement(t.code,null,"(Option")," | ",r.createElement(t.code,null,"OptionsGroup)[]")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"optionsGroupsTemplate")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.12.0+"))),r.createElement(t.td,null,"Custom template for options groups."),r.createElement(t.td,null,r.createElement(t.code,null,"(option: OptionsGroup) => ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"optionsMaxHeight")),r.createElement(t.td,null,"Sets maxHeight of options list."),r.createElement(t.td,null,r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"number")),r.createElement(t.td,null,"auto")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"optionsStyle")),r.createElement(t.td,null,"Sets option style."),r.createElement(t.td,null,r.createElement(t.code,null,"'text'")," | ",r.createElement(t.code,null,"'checkbox'")),r.createElement(t.td,null,"checkbox")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"optionsTemplate")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.12.0+"))),r.createElement(t.td,null,"Custom template for options."),r.createElement(t.td,null,r.createElement(t.code,null,"(option: Option) => ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"placeholder")),r.createElement(t.td,null,"Specifies a short hint that is visible in the search input."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"Select...")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"required")),r.createElement(t.td,null,"When it is present, it indicates that the user must choose a value before submitting the form."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"search")),r.createElement(t.td,null,"Enables search input element."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"'external'")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"searchNoResultsLabel")),r.createElement(t.td,null,"Sets the label for no results when filtering."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"No results found")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectAll")),r.createElement(t.td,null,"Enables select all button."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"true")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectAllLabel")),r.createElement(t.td,null,"Sets the select all button label."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"Select all options")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectionType")),r.createElement(t.td,null,"Sets the selection style."),r.createElement(t.td,null,r.createElement(t.code,null,"'text'")," | ",r.createElement(t.code,null,"'counter'")," | ",r.createElement(t.code,null,"'tags'")),r.createElement(t.td,null,"tags")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"selectionTypeCounterText")),r.createElement(t.td,null,"Sets the counter selection label."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"item(s) selected")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"size")),r.createElement(t.td,null,"Size the component small or large."),r.createElement(t.td,null,r.createElement(t.code,null,"'sm'")," | ",r.createElement(t.code,null,"'lg'")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"text")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Add helper text to the component."),r.createElement(t.td,null,r.createElement(t.code,null,"ReactNode")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"tooltipFeedback")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.2.0+"))),r.createElement(t.td,null,"Display validation feedback in a styled tooltip."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"valid")),r.createElement(t.td,null,"Set component validation state to valid."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"virtualScroller")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.8.0+"))),r.createElement(t.td,null,"Enable virtual scroller for the options list."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"visible")),r.createElement(t.td,null,"Toggle the visibility of multi select dropdown."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"false")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"visibleItems")," ",r.createElement(t.strong,null,r.createElement(t.em,null,"4.8.0+"))),r.createElement(t.td,null,"Amount of visible items when virtualScroller is set to ",r.createElement(t.code,null,"true"),"."),r.createElement(t.td,null,r.createElement(t.code,null,"number")),r.createElement(t.td,null,"10")))))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},u=l(1017),m=l(18722);const o=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{ScssDocs:e=>r.createElement(m.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(u.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(u.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(m.UW,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(m.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function E(e){return r.createElement(o,e,r.createElement(a,e))}o.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return u},ah:function(){return c}});var n=l(2784);const r=n.createContext({});function c(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:l}){let u;return u=l?"function"==typeof e?e({}):e||a:c(e),n.createElement(r.Provider,{value:u},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-api-c-multi-select-api-mdx-db044c8a58c62e89f0cb.js.map