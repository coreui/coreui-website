"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[275],{737:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(5392),o=n(2784),l=n(2097);function a(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",pre:"pre",h5:"h5",strong:"strong",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),o.createElement(o.Fragment,null,o.createElement(t.h2,{id:"how-to-use-react-button-group-component",style:{position:"relative"}},"How to use React Button Group Component.",o.createElement(t.a,{href:"#how-to-use-react-button-group-component","aria-label":"how to use react button group component permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"Wrap a series of ",o.createElement(t.code,null,"<CButton>")," components in ",o.createElement(t.code,null,"<CButtonGroup>"),"."),"\n",o.createElement(n,null,o.createElement(l.Z0,{role:"group","aria-label":"Basic example"},o.createElement(l.u5,{color:"primary"},"Left"),o.createElement(l.u5,{color:"primary"},"Middle"),o.createElement(l.u5,{color:"primary"},"Right"))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup role="group" aria-label="Basic example">\n  <CButton color="primary">Left</CButton>\n  <CButton color="primary">Middle</CButton>\n  <CButton color="primary">Right</CButton>\n</CButtonGroup>\n')),"\n",o.createElement(t.h5,{id:"ensure-the-correct-role-and-provide-a-label",style:{position:"relative"}},"Ensure the correct ",o.createElement(t.code,null,"role")," and provide a label",o.createElement(t.a,{href:"#ensure-the-correct-role-and-provide-a-label","aria-label":"ensure the correct role and provide a label permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"For assistive technologies (ex. screen readers) to communicate that a series of buttons are grouped, a proper ",o.createElement(t.code,null,"role")," attribute has to be provided. For button groups, this should be ",o.createElement(t.code,null,'role="group"'),", while toolbars should have a ",o.createElement(t.code,null,'role="toolbar"'),"."),"\n",o.createElement(t.p,null,"Besides, groups and toolbars should be provided an understandable label, as most assistive technologies will otherwise not declare them, despite the appearance of the specific role attribute. In the following examples provided here, we apply ",o.createElement(t.code,null,"aria-label"),", but options such as ",o.createElement(t.code,null,"aria-labelledby")," can also be used."),"\n",o.createElement(t.p,null,"These classes can also be added to groups of links, as an alternative to the ",o.createElement(t.code,null,"<CNav>")," components."),"\n",o.createElement(n,null,o.createElement(l.Z0,null,o.createElement(l.u5,{href:"#",color:"primary",active:!0},o.createElement(t.p,null,"Active link")),o.createElement(l.u5,{href:"#",color:"primary"},o.createElement(t.p,null,"Link")),o.createElement(l.u5,{href:"#",color:"primary"},o.createElement(t.p,null,"Link")))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup>\n  <CButton href="#" color="primary" active>\n    Active link\n  </CButton>\n  <CButton href="#" color="primary">\n    Link\n  </CButton>\n  <CButton href="#" color="primary">\n    Link\n  </CButton>\n</CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"mixed-styles",style:{position:"relative"}},"Mixed styles",o.createElement(t.a,{href:"#mixed-styles","aria-label":"mixed styles permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n,null,o.createElement(l.Z0,{role:"group","aria-label":"Basic mixed styles example"},o.createElement(l.u5,{color:"danger"},"Left"),o.createElement(l.u5,{color:"warning"},"Middle"),o.createElement(l.u5,{color:"success"},"Right"))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup role="group" aria-label="Basic mixed styles example">\n  <CButton color="danger">Left</CButton>\n  <CButton color="warning">Middle</CButton>\n  <CButton color="success">Right</CButton>\n</CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"outlined-styles",style:{position:"relative"}},"Outlined styles",o.createElement(t.a,{href:"#outlined-styles","aria-label":"outlined styles permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n,null,o.createElement(l.Z0,{role:"group","aria-label":"Basic outlined example"},o.createElement(l.u5,{color:"primary",variant:"outline"},o.createElement(t.p,null,"Left")),o.createElement(l.u5,{color:"primary",variant:"outline"},o.createElement(t.p,null,"Middle")),o.createElement(l.u5,{color:"primary",variant:"outline"},o.createElement(t.p,null,"Right")))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup role="group" aria-label="Basic outlined example">\n  <CButton color="primary" variant="outline">\n    Left\n  </CButton>\n  <CButton color="primary" variant="outline">\n    Middle\n  </CButton>\n  <CButton color="primary" variant="outline">\n    Right\n  </CButton>\n</CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"checkbox-and-radio-button-groups",style:{position:"relative"}},"Checkbox and radio button groups",o.createElement(t.a,{href:"#checkbox-and-radio-button-groups","aria-label":"checkbox and radio button groups permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"Combine button-like checkbox and radio toggle buttons into a seamless looking button group."),"\n",o.createElement(n,null,o.createElement(l.Z0,{role:"group","aria-label":"Basic checkbox toggle button group"},o.createElement(l.EC,{button:{color:"primary",variant:"outline"},id:"btncheck1",autoComplete:"off",label:"Checkbox 1"}),o.createElement(l.EC,{button:{color:"primary",variant:"outline"},id:"btncheck2",autoComplete:"off",label:"Checkbox 2"}),o.createElement(l.EC,{button:{color:"primary",variant:"outline"},id:"btncheck3",autoComplete:"off",label:"Checkbox 3"}))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">\n  <CFormCheck\n    button={{ color: \'primary\', variant: \'outline\' }}\n    id="btncheck1"\n    autoComplete="off"\n    label="Checkbox 1"\n  />\n  <CFormCheck\n    button={{ color: \'primary\', variant: \'outline\' }}\n    id="btncheck2"\n    autoComplete="off"\n    label="Checkbox 2"\n  />\n  <CFormCheck\n    button={{ color: \'primary\', variant: \'outline\' }}\n    id="btncheck3"\n    autoComplete="off"\n    label="Checkbox 3"\n  />\n</CButtonGroup>\n')),"\n",o.createElement(n,null,o.createElement(l.Z0,{role:"group","aria-label":"Basic checkbox toggle button group"},o.createElement(l.EC,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",id:"btnradio1",autoComplete:"off",label:"Radio 1"}),o.createElement(l.EC,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",id:"btnradio2",autoComplete:"off",label:"Radio 2"}),o.createElement(l.EC,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",id:"btnradio3",autoComplete:"off",label:"Radio 3"}))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">\n  <CFormCheck\n    type="radio"\n    button={{ color: \'primary\', variant: \'outline\' }}\n    name="btnradio"\n    id="btnradio1"\n    autoComplete="off"\n    label="Radio 1"\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'primary\', variant: \'outline\' }}\n    name="btnradio"\n    id="btnradio2"\n    autoComplete="off"\n    label="Radio 2"\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'primary\', variant: \'outline\' }}\n    name="btnradio"\n    id="btnradio3"\n    autoComplete="off"\n    label="Radio 3"\n  />\n</CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"button-toolbar",style:{position:"relative"}},"Button toolbar",o.createElement(t.a,{href:"#button-toolbar","aria-label":"button toolbar permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"Join sets of button groups into button toolbars for more complicated components. Use utility classes as needed to space out groups, buttons, and more."),"\n",o.createElement(n,null,o.createElement(l.$A,{role:"group","aria-label":"Toolbar with button groups"},o.createElement(l.Z0,{className:"me-2",role:"group","aria-label":"First group"},o.createElement(l.u5,{color:"primary"},"1"),o.createElement(l.u5,{color:"primary"},"2"),o.createElement(l.u5,{color:"primary"},"3"),o.createElement(l.u5,{color:"primary"},"4")),o.createElement(l.Z0,{className:"me-2",role:"group","aria-label":"Second group"},o.createElement(l.u5,{color:"secondary"},"5"),o.createElement(l.u5,{color:"secondary"},"6"),o.createElement(l.u5,{color:"secondary"},"7")),o.createElement(l.Z0,{className:"me-2",role:"group","aria-label":"Third group"},o.createElement(l.u5,{color:"info"},"8")))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonToolbar role="group" aria-label="Toolbar with button groups">\n  <CButtonGroup className="me-2" role="group" aria-label="First group">\n    <CButton color="primary">1</CButton>\n    <CButton color="primary">2</CButton>\n    <CButton color="primary">3</CButton>\n    <CButton color="primary">4</CButton>\n  </CButtonGroup>\n  <CButtonGroup className="me-2" role="group" aria-label="Second group">\n    <CButton color="secondary">5</CButton>\n    <CButton color="secondary">6</CButton>\n    <CButton color="secondary">7</CButton>\n  </CButtonGroup>\n  <CButtonGroup className="me-2" role="group" aria-label="Third group">\n    <CButton color="info">8</CButton>\n  </CButtonGroup>\n</CButtonToolbar>\n')),"\n",o.createElement(t.p,null,"Feel free to combine input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities through to space items correctly."),"\n",o.createElement(n,null,o.createElement(l.$A,{className:"mb-3",role:"group","aria-label":"Toolbar with button groups"},o.createElement(l.Z0,{className:"me-2",role:"group","aria-label":"First group"},o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"1")),o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"2")),o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"3")),o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"4"))),o.createElement(l.YR,null,o.createElement(l.wV,null,"@"),o.createElement(l.jO,{placeholder:"Input group example","aria-label":"Input group example","aria-describedby":"btnGroupAddon"}))),o.createElement(l.$A,{className:"justify-content-between",role:"group","aria-label":"Toolbar with button groups"},o.createElement(l.Z0,{className:"me-2",role:"group","aria-label":"First group"},o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"1")),o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"2")),o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"3")),o.createElement(l.u5,{color:"secondary",variant:"outline"},o.createElement(t.p,null,"4"))),o.createElement(l.YR,null,o.createElement(l.wV,null,"@"),o.createElement(l.jO,{placeholder:"Input group example","aria-label":"Input group example","aria-describedby":"btnGroupAddon"})))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'  <CButtonToolbar className="mb-3" role="group" aria-label="Toolbar with button groups">\n    <CButtonGroup className="me-2" role="group" aria-label="First group">\n      <CButton color="secondary" variant="outline">1</CButton>\n      <CButton color="secondary" variant="outline">2</CButton>\n      <CButton color="secondary" variant="outline">3</CButton>\n      <CButton color="secondary" variant="outline">4</CButton>\n    </CButtonGroup>\n    <CInputGroup>\n      <CInputGroupText>@</CInputGroupText>\n      <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>\n    </CInputGroup>\n  </CButtonToolbar>\n  <CButtonToolbar className="justify-content-between" role="group" aria-label="Toolbar with button groups">\n    <CButtonGroup className="me-2" role="group" aria-label="First group">\n      <CButton color="secondary" variant="outline">1</CButton>\n      <CButton color="secondary" variant="outline">2</CButton>\n      <CButton color="secondary" variant="outline">3</CButton>\n      <CButton color="secondary" variant="outline">4</CButton>\n    </CButtonGroup>\n    <CInputGroup>\n      <CInputGroupText>@</CInputGroupText>\n      <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>\n    </CInputGroup>\n  </CButtonToolbar>\n')),"\n",o.createElement(t.h2,{id:"sizing",style:{position:"relative"}},"Sizing",o.createElement(t.a,{href:"#sizing","aria-label":"sizing permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"Alternatively, of implementing button sizing classes to each button in a group, set ",o.createElement(t.code,null,"size")," property to all ",o.createElement(t.code,null,"<CButtonGroup>"),"'s, including each one when nesting multiple groups."),"\n",o.createElement(n,null,o.createElement(l.Z0,{size:"lg",role:"group","aria-label":"Large button group"},o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Left")),o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Middle")),o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Right"))),o.createElement("br"),o.createElement(l.Z0,{role:"group","aria-label":"Default button group"},o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Left")),o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Middle")),o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Right"))),o.createElement("br"),o.createElement(l.Z0,{size:"sm",role:"group","aria-label":"Small button group"},o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Left")),o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Middle")),o.createElement(l.u5,{color:"dark",variant:"outline"},o.createElement(t.p,null,"Right")))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'  <CButtonGroup size="lg" role="group" aria-label="Large button group">\n    <CButton color="dark" variant="outline">Left</CButton>\n    <CButton color="dark" variant="outline">Middle</CButton>\n    <CButton color="dark" variant="outline">Right</CButton>\n  </CButtonGroup>\n  <br/>\n  <CButtonGroup role="group" aria-label="Default button group">\n    <CButton color="dark" variant="outline">Left</CButton>\n    <CButton color="dark" variant="outline">Middle</CButton>\n    <CButton color="dark" variant="outline">Right</CButton>\n  </CButtonGroup>\n  <br/>\n  <CButtonGroup size="sm" role="group" aria-label="Small button group">\n    <CButton color="dark" variant="outline">Left</CButton>\n    <CButton color="dark" variant="outline">Middle</CButton>\n    <CButton color="dark" variant="outline">Right</CButton>\n  </CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"nesting",style:{position:"relative"}},"Nesting",o.createElement(t.a,{href:"#nesting","aria-label":"nesting permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"Put a ",o.createElement(t.code,null,"<CButtonGroup>")," inside another ",o.createElement(t.code,null,"<CButtonGroup>")," when you need dropdown menus combined with a series of buttons."),"\n",o.createElement(n,null,o.createElement(l.Z0,{role:"group","aria-label":"Button group with nested dropdown"},o.createElement(l.u5,{color:"primary"},"1"),o.createElement(l.u5,{color:"primary"},"2"),o.createElement(l.w5,{variant:"btn-group"},o.createElement(l.SQ,{color:"primary"},"Dropdown"),o.createElement(l.$H,null,o.createElement(l.$f,{href:"#"},"Action"),o.createElement(l.$f,{href:"#"},"Another action"),o.createElement(l.$f,{href:"#"},"Something else here"),o.createElement(l.lK),o.createElement(l.$f,{href:"#"},"Separated link"))))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup role="group" aria-label="Button group with nested dropdown">\n  <CButton color="primary">1</CButton>\n  <CButton color="primary">2</CButton>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n</CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"vertical-variation",style:{position:"relative"}},"Vertical variation",o.createElement(t.a,{href:"#vertical-variation","aria-label":"vertical variation permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.p,null,"Create a set of buttons that appear vertically stacked rather than horizontally. ",o.createElement(t.strong,null,"Split button dropdowns are not supported here.")),"\n",o.createElement(n,null,o.createElement(l.Z0,{vertical:!0,role:"group","aria-label":"Vertical button group"},o.createElement(l.u5,{color:"dark"},"Button"),o.createElement(l.u5,{color:"dark"},"Button"),o.createElement(l.u5,{color:"dark"},"Button"),o.createElement(l.u5,{color:"dark"},"Button"),o.createElement(l.u5,{color:"dark"},"Button"),o.createElement(l.u5,{color:"dark"},"Button"),o.createElement(l.u5,{color:"dark"},"Button"))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup vertical role="group" aria-label="Vertical button group">\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n</CButtonGroup>\n')),"\n",o.createElement(n,null,o.createElement(l.Z0,{vertical:!0,role:"group","aria-label":"Vertical button group"},o.createElement(l.u5,{color:"primary"},"Button"),o.createElement(l.u5,{color:"primary"},"Button"),o.createElement(l.w5,{variant:"btn-group"},o.createElement(l.SQ,{color:"primary"},"Dropdown"),o.createElement(l.$H,null,o.createElement(l.$f,{href:"#"},"Action"),o.createElement(l.$f,{href:"#"},"Another action"),o.createElement(l.$f,{href:"#"},"Something else here"),o.createElement(l.lK),o.createElement(l.$f,{href:"#"},"Separated link"))),o.createElement(l.u5,{color:"primary"},"Button"),o.createElement(l.u5,{color:"primary"},"Button"),o.createElement(l.w5,{variant:"btn-group"},o.createElement(l.SQ,{color:"primary"},"Dropdown"),o.createElement(l.$H,null,o.createElement(l.$f,{href:"#"},"Action"),o.createElement(l.$f,{href:"#"},"Another action"),o.createElement(l.$f,{href:"#"},"Something else here"),o.createElement(l.lK),o.createElement(l.$f,{href:"#"},"Separated link"))),o.createElement(l.w5,{variant:"btn-group"},o.createElement(l.SQ,{color:"primary"},"Dropdown"),o.createElement(l.$H,null,o.createElement(l.$f,{href:"#"},"Action"),o.createElement(l.$f,{href:"#"},"Another action"),o.createElement(l.$f,{href:"#"},"Something else here"),o.createElement(l.lK),o.createElement(l.$f,{href:"#"},"Separated link"))),o.createElement(l.w5,{variant:"btn-group"},o.createElement(l.SQ,{color:"primary"},"Dropdown"),o.createElement(l.$H,null,o.createElement(l.$f,{href:"#"},"Action"),o.createElement(l.$f,{href:"#"},"Another action"),o.createElement(l.$f,{href:"#"},"Something else here"),o.createElement(l.lK),o.createElement(l.$f,{href:"#"},"Separated link"))))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup vertical role="group" aria-label="Vertical button group">\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n</CButtonGroup>\n')),"\n",o.createElement(n,null,o.createElement(l.Z0,{vertical:!0,role:"group","aria-label":"Vertical button group"},o.createElement(l.EC,{type:"radio",button:{color:"danger",variant:"outline"},name:"vbtnradio",id:"vbtnradio1",autoComplete:"off",label:"Radio 1",defaultChecked:!0}),o.createElement(l.EC,{type:"radio",button:{color:"danger",variant:"outline"},name:"vbtnradio",id:"vbtnradio2",autoComplete:"off",label:"Radio 2"}),o.createElement(l.EC,{type:"radio",button:{color:"danger",variant:"outline"},name:"vbtnradio",id:"vbtnradio3",autoComplete:"off",label:"Radio 3"}))),"\n",o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},'<CButtonGroup vertical role="group" aria-label="Vertical button group">\n  <CFormCheck\n    type="radio"\n    button={{ color: \'danger\', variant: \'outline\' }}\n    name="vbtnradio"\n    id="vbtnradio1"\n    autoComplete="off"\n    label="Radio 1"\n    defaultChecked\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'danger\', variant: \'outline\' }}\n    name="vbtnradio"\n    id="vbtnradio2"\n    autoComplete="off"\n    label="Radio 2"\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'danger\', variant: \'outline\' }}\n    name="vbtnradio"\n    id="vbtnradio3"\n    autoComplete="off"\n    label="Radio 3"\n  />\n</CButtonGroup>\n')),"\n",o.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",o.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.h3,{id:"cbuttongroup",style:{position:"relative"}},"CButtonGroup",o.createElement(t.a,{href:"#cbuttongroup","aria-label":"cbuttongroup permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.div,null,o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},"import { CButtonGroup } from '@coreui/react'\n// or\nimport CButtonGroup from '@coreui/react/src/components/button-group/CButtonGroup'\n")),o.createElement(t.table,null,o.createElement(t.thead,null,o.createElement(t.tr,null,o.createElement(t.th,null,"Property"),o.createElement(t.th,null,"Description"),o.createElement(t.th,null,"Type"),o.createElement(t.th,null,"Default"))),o.createElement(t.tbody,null,o.createElement(t.tr,null,o.createElement(t.td,null,o.createElement(t.strong,null,"className")),o.createElement(t.td,null,"A string of all className you want applied to the base component."),o.createElement(t.td,null,o.createElement(t.code,null,"string")),o.createElement(t.td,null,"-")),o.createElement(t.tr,null,o.createElement(t.td,null,o.createElement(t.strong,null,"size")),o.createElement(t.td,null,"Size the component small or large."),o.createElement(t.td,null,o.createElement(t.code,null,"'sm'")," | ",o.createElement(t.code,null,"'lg'")),o.createElement(t.td,null,"-")),o.createElement(t.tr,null,o.createElement(t.td,null,o.createElement(t.strong,null,"vertical")),o.createElement(t.td,null,"Create a set of buttons that appear vertically stacked rather than horizontally. Split button dropdowns are not supported here."),o.createElement(t.td,null,o.createElement(t.code,null,"boolean")),o.createElement(t.td,null,"-"))))),"\n",o.createElement(t.h3,{id:"cbuttontoolbar",style:{position:"relative"}},"CButtonToolbar",o.createElement(t.a,{href:"#cbuttontoolbar","aria-label":"cbuttontoolbar permalink",className:"anchor-link after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(t.div,null,o.createElement(t.pre,null,o.createElement(t.code,{className:"language-jsx"},"import { CButtonToolbar } from '@coreui/react'\n// or\nimport CButtonToolbar from '@coreui/react/src/components/button-group/CButtonToolbar'\n")),o.createElement(t.table,null,o.createElement(t.thead,null,o.createElement(t.tr,null,o.createElement(t.th,null,"Property"),o.createElement(t.th,null,"Description"),o.createElement(t.th,null,"Type"),o.createElement(t.th,null,"Default"))),o.createElement(t.tbody,null,o.createElement(t.tr,null,o.createElement(t.td,null,o.createElement(t.strong,null,"className")),o.createElement(t.td,null,"A string of all className you want applied to the base component."),o.createElement(t.td,null,o.createElement(t.code,null,"string")),o.createElement(t.td,null,"-"))))))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?o.createElement(t,e,o.createElement(a,e)):a(e)};var c=n(1380);const i=e=>{let{children:t}=e;return o.createElement(r.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return o.createElement(o.Fragment,null,o.createElement("br",null),o.createElement(l.C_,Object.assign({},e.children.props,{color:t})))}return o.createElement("strong",null,e.children)},pre:e=>o.createElement(c.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return o.createElement(l.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...r}=e;return o.createElement(l.e_,r,n&&o.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return o.createElement(c.en,n,o.Children.map(t,(e=>{if(o.isValidElement(e))return o.cloneElement(e)})))}}},t)};function m(e){return o.createElement(i,e,o.createElement(u,e))}i.displayName="MdxLayout"},5392:function(e,t,n){n.d(t,{Zo:function(){return u},ah:function(){return l}});var r=n(2784);const o=r.createContext({});function l(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function u({components:e,children:t,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||a:l(e),r.createElement(o.Provider,{value:u},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-button-group-mdx-6619d7f42c32042dd167.js.map