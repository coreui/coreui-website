"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[1942],{67975:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(45392),a=l(2784),r=l(70788);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",div:"div",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,n.ah)(),e.components),{Example:l,ScssDocs:c}=t;return l||s("Example",!0),c||s("ScssDocs",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"about",style:{position:"relative"}},"About",a.createElement(t.a,{href:"#about","aria-label":"about permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,'React Switch Components are a type of UI component that allows users to toggle between two states, usually represented as "on" or "off", "enabled" or "disabled", or "checked" or "unchecked".'),"\n",a.createElement(t.p,null,"When a user interacts with the component by clicking or tapping on it, the switch toggles its state, triggering an action or changing the appearance of the component. This type of component is often used in forms, settings panels, and other places where users need to turn something on or off or choose between two options."),"\n",a.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",a.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(l,{className:""},a.createElement(r.kV,{label:"Default switch checkbox input",id:"formSwitchCheckDefault"}),a.createElement(r.kV,{label:"Checked switch checkbox input",id:"formSwitchCheckChecked",defaultChecked:!0}),a.createElement(r.kV,{label:"Disabled switch checkbox input",id:"formSwitchCheckDisabled",disabled:!0}),a.createElement(r.kV,{label:"Disabled checked switch checkbox input",id:"formSwitchCheckCheckedDisabled",defaultChecked:!0,disabled:!0})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>\n<CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" defaultChecked/>\n<CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled/>\n<CFormSwitch label="Disabled checked switch checkbox input" id="formSwitchCheckCheckedDisabled" defaultChecked disabled/>\n'))),"\n",a.createElement(t.h2,{id:"sizing",style:{position:"relative"}},"Sizing",a.createElement(t.a,{href:"#sizing","aria-label":"sizing permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Larger or smaller react switches? Add ",a.createElement(t.code,null,'size="lg"')," or ",a.createElement(t.code,null,'size="xl"')," for additional sizes."),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(l,{className:""},a.createElement(r.kV,{label:"Default switch checkbox input",id:"formSwitchCheckDefaultNormal"}),a.createElement(r.kV,{size:"lg",label:"Large switch checkbox input",id:"formSwitchCheckDefaultLg"}),a.createElement(r.kV,{size:"xl",label:"Extra large switch checkbox input",id:"formSwitchCheckDefaultXL"})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefaultNormal"/>\n<CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg"/>\n<CFormSwitch size="xl" label="Extra large switch checkbox input" id="formSwitchCheckDefaultXL"/>\n'))),"\n",a.createElement(t.h2,{id:"reverse",style:{position:"relative"}},"Reverse",a.createElement(t.a,{href:"#reverse","aria-label":"reverse permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Put your switches on the opposite side by adding ",a.createElement(t.code,null,"reverse")," boolean property."),"\n",a.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(l,{className:""},a.createElement(r.kV,{reverse:!0,type:"radio",id:"reverseFormSwitch1",label:"Reverse switch"}),a.createElement(r.kV,{reverse:!0,type:"radio",id:"reverseFormSwitch2",label:"Disabled reverse switch",disabled:!0})),a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormSwitch reverse type="radio" id="reverseFormSwitch1" label="Reverse switch"/>\n<CFormSwitch reverse type="radio" id="reverseFormSwitch2" label="Disabled reverse switch" disabled/>\n'))),"\n",a.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",a.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",a.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(c,{file:"_variables.scss",capture:"form-switch-variables"}),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"cformswitch",style:{position:"relative"}},"CFormSwitch",a.createElement(t.a,{href:"#cformswitch","aria-label":"cformswitch permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CFormSwitch } from '@coreui/react'\n// or\nimport CFormSwitch from '@coreui/react/src/components/form/CFormSwitch'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"id")),a.createElement(t.td,null,"The id global attribute defines an identifier (ID) that must be unique in the whole document."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"invalid")),a.createElement(t.td,null,"Set component validation state to invalid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"label")),a.createElement(t.td,null,"The element represents a caption for a component."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"reverse")),a.createElement(t.td,null,"Put switch on the opposite side."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"size")),a.createElement(t.td,null,"Size the component large or extra large. Works only with ",a.createElement(t.code,null,"switch"),"."),a.createElement(t.td,null,a.createElement(t.code,null,"'lg'")," | ",a.createElement(t.code,null,"'xl'")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"type")),a.createElement(t.td,null,"Specifies the type of component."),a.createElement(t.td,null,a.createElement(t.code,null,"'checkbox'")," | ",a.createElement(t.code,null,"'radio'")),a.createElement(t.td,null,"checkbox")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"valid")),a.createElement(t.td,null,"Set component validation state to valid."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-"))))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=l(18722);const m=e=>{let{children:t}=e;return a.createElement(n.Zo,{components:{ScssDocs:e=>a.createElement(o.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(o.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return a.createElement(o.UW,n,l&&a.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return a.createElement(o.en,l,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function d(e){return a.createElement(m,e,a.createElement(i,e))}m.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return i},ah:function(){return r}});var n=l(2784);const a=n.createContext({});function r(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:l}){let i;return i=l?"function"==typeof e?e({}):e||c:r(e),n.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-switch-mdx-f4e6713dc4ba6f1df384.js.map