"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4696],{92836:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var a=l(45392),n=l(2784),c=l(18910);function r(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,a.ah)(),e.components),{Example:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),n.createElement(n.Fragment,null,n.createElement(t.h2,{id:"approach",style:{position:"relative"}},"Approach",n.createElement(t.a,{href:"#approach","aria-label":"approach permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Browser default checkboxes and radios are replaced with the help of ",n.createElement(t.code,null,"<CFormCheck>"),". Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many."),"\n",n.createElement(t.h2,{id:"checks",style:{position:"relative"}},"Checks",n.createElement(t.a,{href:"#checks","aria-label":"checks permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{id:"flexCheckDefault",label:"Default checkbox"}),n.createElement(c.EC,{id:"flexCheckChecked",label:"Checked checkbox",defaultChecked:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck id="flexCheckDefault" label="Default checkbox"/>\n<CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />\n'))),"\n",n.createElement(t.h2,{id:"indeterminate",style:{position:"relative"}},"Indeterminate",n.createElement(t.a,{href:"#indeterminate","aria-label":"indeterminate permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Checkboxes can utilize the ",n.createElement(t.code,null,":indeterminate")," pseudo-class when manually set via ",n.createElement(t.code,null,"indeterminate")," property."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{id:"flexCheckIndeterminate",label:"Indeterminate checkbox",indeterminate:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck id="flexCheckIndeterminate" label="Indeterminate checkbox" indeterminate />\n'))),"\n",n.createElement(t.h3,{id:"disabled",style:{position:"relative"}},"Disabled",n.createElement(t.a,{href:"#disabled","aria-label":"disabled permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Add the ",n.createElement(t.code,null,"disabled")," attribute and the associated ",n.createElement(t.code,null,"<label>"),"s are automatically styled to match with a lighter color to help indicate the input's state."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{label:"Disabled checkbox",disabled:!0}),n.createElement(c.EC,{label:"Disabled checked checkbox",defaultChecked:!0,disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck label="Disabled checkbox" disabled/>\n<CFormCheck label="Disabled checked checkbox" defaultChecked disabled/>\n'))),"\n",n.createElement(t.h2,{id:"radios",style:{position:"relative"}},"Radios",n.createElement(t.a,{href:"#radios","aria-label":"radios permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Add the ",n.createElement(t.code,null,"disabled")," attribute and the associated ",n.createElement(t.code,null,"<label>"),"s are automatically styled to match with a lighter color to help indicate the input's state."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",label:"Default radio"}),n.createElement(c.EC,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",label:"Checked radio",defaultChecked:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio"/>\n<CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Checked radio" defaultChecked/>\n'))),"\n",n.createElement(t.h3,{id:"disabled-1",style:{position:"relative"}},"Disabled",n.createElement(t.a,{href:"#disabled-1","aria-label":"disabled 1 permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{type:"radio",name:"flexRadioDisabled",id:"flexRadioDisabled",label:"Disabled radio",disabled:!0}),n.createElement(c.EC,{type:"radio",name:"flexRadioDisabled",id:"flexRadioCheckedDisabled",label:"Disabled checked radio",defaultChecked:!0,disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>\n<CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" defaultChecked disabled/>\n'))),"\n",n.createElement(t.h2,{id:"switches",style:{position:"relative"}},"Switches",n.createElement(t.a,{href:"#switches","aria-label":"switches permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"A switch has the markup of a custom checkbox but uses the ",n.createElement(t.code,null,"switch")," boolean properly to render a toggle switch. Switches also support the ",n.createElement(t.code,null,"disabled")," attribute."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.kV,{label:"Default switch checkbox input",id:"formSwitchCheckDefault"}),n.createElement(c.kV,{label:"Checked switch checkbox input",id:"formSwitchCheckChecked",defaultChecked:!0}),n.createElement(c.kV,{label:"Disabled switch checkbox input",id:"formSwitchCheckDisabled",disabled:!0}),n.createElement(c.kV,{label:"Disabled checked switch checkbox input",id:"formSwitchCheckCheckedDisabled",defaultChecked:!0,disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>\n<CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" defaultChecked/>\n<CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled/>\n<CFormSwitch label="Disabled checked switch checkbox input" id="formSwitchCheckCheckedDisabled" defaultChecked disabled/>\n'))),"\n",n.createElement(t.h3,{id:"sizes",style:{position:"relative"}},"Sizes",n.createElement(t.a,{href:"#sizes","aria-label":"sizes permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.kV,{label:"Default switch checkbox input",id:"formSwitchCheckDefault"}),n.createElement(c.kV,{size:"lg",label:"Large switch checkbox input",id:"formSwitchCheckDefaultLg"}),n.createElement(c.kV,{size:"xl",label:"Extra large switch checkbox input",id:"formSwitchCheckDefaultXL"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>\n<CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg"/>\n<CFormSwitch size="xl" label="Extra large switch checkbox input" id="formSwitchCheckDefaultXL"/>\n'))),"\n",n.createElement(t.h2,{id:"default-stacked",style:{position:"relative"}},"Default (stacked)",n.createElement(t.a,{href:"#default-stacked","aria-label":"default stacked permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{id:"defaultCheck1",label:"Default checkbox"}),n.createElement(c.EC,{id:"defaultCheck2",label:"Disabled checkbox",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck id="defaultCheck1" label="Default checkbox"/>\n<CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled/>\n'))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{type:"radio",name:"exampleRadios",id:"exampleRadios1",value:"option1",label:"Default radio",defaultChecked:!0}),n.createElement(c.EC,{type:"radio",name:"exampleRadios",id:"exampleRadios2",value:"option2",label:"Second default radio"}),n.createElement(c.EC,{type:"radio",name:"exampleRadios",id:"exampleRadios3",value:"option3",label:"Disabled radio",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck type="radio" name="exampleRadios" id="exampleRadios1" value="option1" label="Default radio" defaultChecked/>\n<CFormCheck type="radio" name="exampleRadios" id="exampleRadios2" value="option2" label="Second default radio"/>\n<CFormCheck type="radio" name="exampleRadios" id="exampleRadios3" value="option3" label="Disabled radio" disabled/>\n'))),"\n",n.createElement(t.h2,{id:"inline",style:{position:"relative"}},"Inline",n.createElement(t.a,{href:"#inline","aria-label":"inline permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Group checkboxes or radios on the same horizontal row by adding ",n.createElement(t.code,null,"inline")," boolean property to any ",n.createElement(t.code,null,"<CFormCheck>"),"."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{inline:!0,id:"inlineCheckbox1",value:"option1",label:"1"}),n.createElement(c.EC,{inline:!0,id:"inlineCheckbox2",value:"option2",label:"2"}),n.createElement(c.EC,{inline:!0,id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck inline id="inlineCheckbox1" value="option1" label="1"/>\n<CFormCheck inline id="inlineCheckbox2" value="option2" label="2"/>\n<CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>\n'))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox1",value:"option1",label:"1"}),n.createElement(c.EC,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox2",value:"option2",label:"2"}),n.createElement(c.EC,{inline:!0,type:"radio",name:"inlineRadioOptions",id:"inlineCheckbox3",value:"option3",label:"3 (disabled)",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>\n<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>\n<CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>\n'))),"\n",n.createElement(t.h2,{id:"without-labels",style:{position:"relative"}},"Without labels",n.createElement(t.a,{href:"#without-labels","aria-label":"without labels permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Remember to still provide some form of accessible name for assistive technologies (for instance, using ",n.createElement(t.code,null,"aria-label"),")."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(t.div,null,n.createElement(c.EC,{id:"checkboxNoLabel",value:"","aria-label":"..."})),n.createElement(t.div,null,n.createElement(c.EC,{type:"radio",name:"radioNoLabel",id:"radioNoLabel",value:"","aria-label":"..."}))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<div>\n  <CFormCheck id="checkboxNoLabel" value="" aria-label="..."/>\n</div>\n<div>\n  <CFormCheck type="radio" name="radioNoLabel" id="radioNoLabel" value="" aria-label="..."/>\n</div>\n'))),"\n",n.createElement(t.h2,{id:"toggle-buttons",style:{position:"relative"}},"Toggle buttons",n.createElement(t.a,{href:"#toggle-buttons","aria-label":"toggle buttons permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Create button-like checkboxes and radio buttons by using ",n.createElement(t.code,null,"button")," boolean property on the ",n.createElement(t.code,null,"<CFormCheck>")," component. These toggle buttons can further be grouped in a button group if needed."),"\n",n.createElement(t.h3,{id:"checkbox-toggle-buttons",style:{position:"relative"}},"Checkbox toggle buttons",n.createElement(t.a,{href:"#checkbox-toggle-buttons","aria-label":"checkbox toggle buttons permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{button:{color:"primary"},id:"btn-check",autoComplete:"off",label:"Single toggle"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck button={{ color: \'primary\' }} id="btn-check" autoComplete="off" label="Single toggle" />\n'))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{button:{color:"primary"},id:"btn-check-2",autoComplete:"off",label:"Checked",defaultChecked:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck\n  button={{ color: \'primary\' }}\n  id="btn-check-2"\n  autoComplete="off"\n  label="Checked"\n  defaultChecked\n/>\n'))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{button:{color:"primary"},id:"btn-check-3",autoComplete:"off",label:"Disabled",disabled:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck\n  button={{ color: \'primary\' }}\n  id="btn-check-3"\n  autoComplete="off"\n  label="Disabled"\n  disabled\n/>\n'))),"\n",n.createElement(t.h3,{id:"radio-toggle-buttons",style:{position:"relative"}},"Radio toggle buttons",n.createElement(t.a,{href:"#radio-toggle-buttons","aria-label":"radio toggle buttons permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(c.EC,{button:{color:"secondary"},type:"radio",name:"options",id:"option1",autoComplete:"off",label:"Checked",defaultChecked:!0}),n.createElement(c.EC,{button:{color:"secondary"},type:"radio",name:"options",id:"option2",autoComplete:"off",label:"Radio"}),n.createElement(c.EC,{button:{color:"secondary"},type:"radio",name:"options",id:"option3",autoComplete:"off",label:"Radio",disabled:!0}),n.createElement(c.EC,{button:{color:"secondary"},type:"radio",name:"options",id:"option4",autoComplete:"off",label:"Radio"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option1" autoComplete="off" label="Checked" defaultChecked/>\n<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option2" autoComplete="off" label="Radio"/>\n<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option3" autoComplete="off" label="Radio" disabled/>\n<CFormCheck button={{ color: \'secondary\' }} type="radio" name="options" id="option4" autoComplete="off" label="Radio"/>\n'))),"\n",n.createElement(t.h3,{id:"outlined-styles",style:{position:"relative"}},"Outlined styles",n.createElement(t.a,{href:"#outlined-styles","aria-label":"outlined styles permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Different variants of button, such at the various outlined styles, are supported."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(t.div,null,n.createElement(c.EC,{button:{color:"primary",variant:"outline"},id:"btn-check-outlined",autoComplete:"off",label:"Single toggle"})),n.createElement(t.div,null,n.createElement(c.EC,{button:{color:"secondary",variant:"outline"},id:"btn-check-2-outlined",autoComplete:"off",label:"Checked",defaultChecked:!0})),n.createElement(t.div,null,n.createElement(c.EC,{button:{color:"success",variant:"outline"},type:"radio",name:"options-outlined",id:"success-outlined",autoComplete:"off",label:"Radio",defaultChecked:!0}),n.createElement(c.EC,{button:{color:"danger",variant:"outline"},type:"radio",name:"options-outlined",id:"danger-outlined",autoComplete:"off",label:"Radio"}))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<div>\n  <CFormCheck button={{ color: \'primary\', variant: \'outline\' }} id="btn-check-outlined" autoComplete="off" label="Single toggle"/>\n</div>\n<div>\n  <CFormCheck button={{ color: \'secondary\', variant: \'outline\' }} id="btn-check-2-outlined" autoComplete="off" label="Checked" defaultChecked/>\n</div>\n<div>\n  <CFormCheck button={{ color: \'success\', variant: \'outline\' }} type="radio" name="options-outlined" id="success-outlined" autoComplete="off" label="Radio" defaultChecked/>\n  <CFormCheck button={{ color: \'danger\', variant: \'outline\' }} type="radio" name="options-outlined" id="danger-outlined" autoComplete="off" label="Radio"/>\n</div>\n'))),"\n",n.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",n.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"cformcheck",style:{position:"relative"}},"CFormCheck",n.createElement(t.a,{href:"#cformcheck","aria-label":"cformcheck permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CFormCheck } from '@coreui/react'\n// or\nimport CFormCheck from '@coreui/react/src/components/form/CFormCheck'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"button")),n.createElement(t.td,null,"Create button-like checkboxes and radio buttons."),n.createElement(t.td,null,n.createElement(t.code,null,"ButtonObject")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"feedback")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable feedback."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"feedbackInvalid")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable feedback."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"feedbackValid")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",n.createElement(t.code,null,":invalid")," and ",n.createElement(t.code,null,":valid"),"."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"floatingLabel")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, ",n.createElement(t.code,null,":invalid")," and ",n.createElement(t.code,null,":valid"),"."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"hitArea")),n.createElement(t.td,null,"Sets hit area to the full area of the component."),n.createElement(t.td,null,n.createElement(t.code,null,"'full'")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"id")),n.createElement(t.td,null,"The id global attribute defines an identifier (ID) that must be unique in the whole document."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"indeterminate")),n.createElement(t.td,null,"Input Checkbox indeterminate Property."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"inline")),n.createElement(t.td,null,"Group checkboxes or radios on the same horizontal row."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"invalid")),n.createElement(t.td,null,"Set component validation state to invalid."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"label")),n.createElement(t.td,null,"The element represents a caption for a component."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"reverse")),n.createElement(t.td,null,"Put checkboxes or radios on the opposite side."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"tooltipFeedback")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.2.0+"))),n.createElement(t.td,null,"Display validation feedback in a styled tooltip."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"type")),n.createElement(t.td,null,"Specifies the type of component."),n.createElement(t.td,null,n.createElement(t.code,null,"'checkbox'")," | ",n.createElement(t.code,null,"'radio'")),n.createElement(t.td,null,"checkbox")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"valid")),n.createElement(t.td,null,"Set component validation state to valid."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-"))))),"\n",n.createElement(t.h3,{id:"cformswitch",style:{position:"relative"}},"CFormSwitch",n.createElement(t.a,{href:"#cformswitch","aria-label":"cformswitch permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CFormSwitch } from '@coreui/react'\n// or\nimport CFormSwitch from '@coreui/react/src/components/form/CFormSwitch'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"id")),n.createElement(t.td,null,"The id global attribute defines an identifier (ID) that must be unique in the whole document."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"invalid")),n.createElement(t.td,null,"Set component validation state to invalid."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"label")),n.createElement(t.td,null,"The element represents a caption for a component."),n.createElement(t.td,null,n.createElement(t.code,null,"ReactNode")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"reverse")),n.createElement(t.td,null,"Put switch on the opposite side."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"size")),n.createElement(t.td,null,"Size the component large or extra large. Works only with ",n.createElement(t.code,null,"switch"),"."),n.createElement(t.td,null,n.createElement(t.code,null,"'lg'")," | ",n.createElement(t.code,null,"'xl'")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"type")),n.createElement(t.td,null,"Specifies the type of component."),n.createElement(t.td,null,n.createElement(t.code,null,"'checkbox'")," | ",n.createElement(t.code,null,"'radio'")),n.createElement(t.td,null,"checkbox")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"valid")),n.createElement(t.td,null,"Set component validation state to valid."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-"))))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(r,e)):r(e)};var i=l(18722);const d=e=>{let{children:t}=e;return n.createElement(a.Zo,{components:{ScssDocs:e=>n.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(c.C_,Object.assign({},e.children.props,{color:t})))}return n.createElement("strong",null,e.children)},pre:e=>n.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return n.createElement(c.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...a}=e;return n.createElement(i.UW,a,l&&n.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return n.createElement(i.en,l,n.Children.map(t,(e=>{if(n.isValidElement(e))return n.cloneElement(e)})))}}},t)};function m(e){return n.createElement(d,e,n.createElement(o,e))}d.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return c}});var a=l(2784);const n=a.createContext({});function c(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||r:c(e),a.createElement(n.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-checks-radios-mdx-e7537faf4c2daab51d76.js.map