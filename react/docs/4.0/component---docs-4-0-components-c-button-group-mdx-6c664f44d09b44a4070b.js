(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"E+1b":function(o,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));var e=n("Fcif"),r=n("+I+c"),a=(n("mXGw"),n("/FXl")),p=n("BIGe"),u=n("ZFoC"),d=n("bzer"),l=(n("aD51"),["components"]),i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/4.0/components/CButtonGroup.mdx"}});var b={_frontmatter:i},C=p.a;function c(o){var t,n,c,m,y,B,s,D,g,w,T,h,O,x=o.components,j=Object(r.a)(o,l);return Object(a.b)(C,Object(e.a)({},b,j,{components:x,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"basic-example"},"Basic example"),Object(a.b)("p",null,"Wrap a series of ",Object(a.b)("inlineCode",{parentName:"p"},"<CButton>")," components in ",Object(a.b)("inlineCode",{parentName:"p"},"<CButtonGroup>"),". "),Object(a.b)(u.c,{__position:0,__code:'<CButtonGroup role="group" aria-label="Basic example">\n  <CButton color="primary">Left</CButton>\n  <CButton color="primary">Middle</CButton>\n  <CButton color="primary">Right</CButton>\n</CButtonGroup>',__scope:(t={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},t.DefaultLayout=p.a,t._frontmatter=i,t),mdxType:"Playground"},Object(a.b)(d.o,{role:"group","aria-label":"Basic example",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Left"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Middle"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Right"))),Object(a.b)("h5",{id:"ensure-the-correct-role-and-provide-a-label"},"Ensure the correct ",Object(a.b)("inlineCode",{parentName:"h5"},"role")," and provide a label"),Object(a.b)("p",null,"For assistive technologies (ex. screen readers) to communicate that a series of buttons are grouped, a proper ",Object(a.b)("inlineCode",{parentName:"p"},"role")," attribute has to be provided. For button groups, this should be ",Object(a.b)("inlineCode",{parentName:"p"},'role="group"'),", while toolbars should have a ",Object(a.b)("inlineCode",{parentName:"p"},'role="toolbar"'),"."),Object(a.b)("p",null,"Besides, groups and toolbars should be provided an understandable label, as most assistive technologies will otherwise not declare them, despite the appearance of the specific role attribute. In the following examples provided here, we apply ",Object(a.b)("inlineCode",{parentName:"p"},"aria-label"),", but options such as ",Object(a.b)("inlineCode",{parentName:"p"},"aria-labelledby")," can also be used."),Object(a.b)("p",null,"These classes can also be added to groups of links, as an alternative to the ",Object(a.b)("inlineCode",{parentName:"p"},"<CNav>")," components."),Object(a.b)(u.c,{__position:1,__code:'<CButtonGroup>\n  <CButton href="#" color="primary" active>\n    Active link\n  </CButton>\n  <CButton href="#" color="primary">\n    Link\n  </CButton>\n  <CButton href="#" color="primary">\n    Link\n  </CButton>\n</CButtonGroup>',__scope:(n={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},n.DefaultLayout=p.a,n._frontmatter=i,n),mdxType:"Playground"},Object(a.b)(d.o,{mdxType:"CButtonGroup"},Object(a.b)(d.n,{href:"#",color:"primary",active:!0,mdxType:"CButton"},"Active link"),Object(a.b)(d.n,{href:"#",color:"primary",mdxType:"CButton"},"Link"),Object(a.b)(d.n,{href:"#",color:"primary",mdxType:"CButton"},"Link"))),Object(a.b)("h2",{id:"mixed-styles"},"Mixed styles"),Object(a.b)(u.c,{__position:2,__code:'<CButtonGroup role="group" aria-label="Basic mixed styles example">\n  <CButton color="danger">Left</CButton>\n  <CButton color="warning">Middle</CButton>\n  <CButton color="success">Right</CButton>\n</CButtonGroup>',__scope:(c={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},c.DefaultLayout=p.a,c._frontmatter=i,c),mdxType:"Playground"},Object(a.b)(d.o,{role:"group","aria-label":"Basic mixed styles example",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"danger",mdxType:"CButton"},"Left"),Object(a.b)(d.n,{color:"warning",mdxType:"CButton"},"Middle"),Object(a.b)(d.n,{color:"success",mdxType:"CButton"},"Right"))),Object(a.b)("h2",{id:"outlined-styles"},"Outlined styles"),Object(a.b)(u.c,{__position:3,__code:'<CButtonGroup role="group" aria-label="Basic outlined example">\n  <CButton color="primary" variant="outline">\n    Left\n  </CButton>\n  <CButton color="primary" variant="outline">\n    Middle\n  </CButton>\n  <CButton color="primary" variant="outline">\n    Right\n  </CButton>\n</CButtonGroup>',__scope:(m={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},m.DefaultLayout=p.a,m._frontmatter=i,m),mdxType:"Playground"},Object(a.b)(d.o,{role:"group","aria-label":"Basic outlined example",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"primary",variant:"outline",mdxType:"CButton"},"Left"),Object(a.b)(d.n,{color:"primary",variant:"outline",mdxType:"CButton"},"Middle"),Object(a.b)(d.n,{color:"primary",variant:"outline",mdxType:"CButton"},"Right"))),Object(a.b)("h2",{id:"checkbox-and-radio-button-groups"},"Checkbox and radio button groups"),Object(a.b)("p",null,"Combine button-like checkbox and radio toggle buttons into a seamless looking button group."),Object(a.b)(u.c,{__position:4,__code:'<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">\n  <CFormCheck\n    button={{ color: \'primary\', variant: \'outline\' }}\n    id="btncheck1"\n    autoComplete="off"\n    label="Checkbox 1"\n  />\n  <CFormCheck\n    button={{ color: \'primary\', variant: \'outline\' }}\n    id="btncheck2"\n    autoComplete="off"\n    label="Checkbox 2"\n  />\n  <CFormCheck\n    button={{ color: \'primary\', variant: \'outline\' }}\n    id="btncheck3"\n    autoComplete="off"\n    label="Checkbox 3"\n  />\n</CButtonGroup>',__scope:(y={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},y.DefaultLayout=p.a,y._frontmatter=i,y),mdxType:"Playground"},Object(a.b)(d.o,{role:"group","aria-label":"Basic checkbox toggle button group",mdxType:"CButtonGroup"},Object(a.b)(d.V,{button:{color:"primary",variant:"outline"},id:"btncheck1",autoComplete:"off",label:"Checkbox 1",mdxType:"CFormCheck"}),Object(a.b)(d.V,{button:{color:"primary",variant:"outline"},id:"btncheck2",autoComplete:"off",label:"Checkbox 2",mdxType:"CFormCheck"}),Object(a.b)(d.V,{button:{color:"primary",variant:"outline"},id:"btncheck3",autoComplete:"off",label:"Checkbox 3",mdxType:"CFormCheck"}))),Object(a.b)(u.c,{__position:5,__code:'<CButtonGroup role="group" aria-label="Basic checkbox toggle button group">\n  <CFormCheck\n    type="radio"\n    button={{ color: \'primary\', variant: \'outline\' }}\n    name="btnradio"\n    id="btnradio1"\n    autoComplete="off"\n    label="Radio 1"\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'primary\', variant: \'outline\' }}\n    name="btnradio"\n    id="btnradio2"\n    autoComplete="off"\n    label="Radio 2"\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'primary\', variant: \'outline\' }}\n    name="btnradio"\n    id="btnradio3"\n    autoComplete="off"\n    label="Radio 3"\n  />\n</CButtonGroup>',__scope:(B={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},B.DefaultLayout=p.a,B._frontmatter=i,B),mdxType:"Playground"},Object(a.b)(d.o,{role:"group","aria-label":"Basic checkbox toggle button group",mdxType:"CButtonGroup"},Object(a.b)(d.V,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",id:"btnradio1",autoComplete:"off",label:"Radio 1",mdxType:"CFormCheck"}),Object(a.b)(d.V,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",id:"btnradio2",autoComplete:"off",label:"Radio 2",mdxType:"CFormCheck"}),Object(a.b)(d.V,{type:"radio",button:{color:"primary",variant:"outline"},name:"btnradio",id:"btnradio3",autoComplete:"off",label:"Radio 3",mdxType:"CFormCheck"}))),Object(a.b)("h2",{id:"button-toolbar"},"Button toolbar"),Object(a.b)("p",null,"Join sets of button groups into button toolbars for more complicated components. Use utility classes as needed to space out groups, buttons, and more."),Object(a.b)(u.c,{__position:6,__code:'<CButtonToolbar role="group" aria-label="Toolbar with button groups">\n  <CButtonGroup className="me-2" role="group" aria-label="First group">\n    <CButton color="primary">1</CButton>\n    <CButton color="primary">2</CButton>\n    <CButton color="primary">3</CButton>\n    <CButton color="primary">4</CButton>\n  </CButtonGroup>\n  <CButtonGroup className="me-2" role="group" aria-label="Second group">\n    <CButton color="secondary">5</CButton>\n    <CButton color="secondary">6</CButton>\n    <CButton color="secondary">7</CButton>\n  </CButtonGroup>\n  <CButtonGroup className="me-2" role="group" aria-label="Third group">\n    <CButton color="info">8</CButton>\n  </CButtonGroup>\n</CButtonToolbar>',__scope:(s={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},s.DefaultLayout=p.a,s._frontmatter=i,s),mdxType:"Playground"},Object(a.b)(d.p,{role:"group","aria-label":"Toolbar with button groups",mdxType:"CButtonToolbar"},Object(a.b)(d.o,{className:"me-2",role:"group","aria-label":"First group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"1"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"2"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"3"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"4")),Object(a.b)(d.o,{className:"me-2",role:"group","aria-label":"Second group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"secondary",mdxType:"CButton"},"5"),Object(a.b)(d.n,{color:"secondary",mdxType:"CButton"},"6"),Object(a.b)(d.n,{color:"secondary",mdxType:"CButton"},"7")),Object(a.b)(d.o,{className:"me-2",role:"group","aria-label":"Third group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"info",mdxType:"CButton"},"8")))),Object(a.b)("p",null,"Feel free to combine input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities through to space items correctly."),Object(a.b)(u.c,{__position:7,__code:'<CButtonToolbar\n  className="mb-3"\n  role="group"\n  aria-label="Toolbar with button groups"\n>\n  <CButtonGroup className="me-2" role="group" aria-label="First group">\n    <CButton color="secondary" variant="outline">\n      1\n    </CButton>\n    <CButton color="secondary" variant="outline">\n      2\n    </CButton>\n    <CButton color="secondary" variant="outline">\n      3\n    </CButton>\n    <CButton color="secondary" variant="outline">\n      4\n    </CButton>\n  </CButtonGroup>\n  <CInputGroup>\n    <CInputGroupText>@</CInputGroupText>\n    <CFormInput\n      placeholder="Input group example"\n      aria-label="Input group example"\n      aria-describedby="btnGroupAddon"\n    />\n  </CInputGroup>\n</CButtonToolbar>\n<CButtonToolbar\n  className="justify-content-between"\n  role="group"\n  aria-label="Toolbar with button groups"\n>\n  <CButtonGroup className="me-2" role="group" aria-label="First group">\n    <CButton color="secondary" variant="outline">\n      1\n    </CButton>\n    <CButton color="secondary" variant="outline">\n      2\n    </CButton>\n    <CButton color="secondary" variant="outline">\n      3\n    </CButton>\n    <CButton color="secondary" variant="outline">\n      4\n    </CButton>\n  </CButtonGroup>\n  <CInputGroup>\n    <CInputGroupText>@</CInputGroupText>\n    <CFormInput\n      placeholder="Input group example"\n      aria-label="Input group example"\n      aria-describedby="btnGroupAddon"\n    />\n  </CInputGroup>\n</CButtonToolbar>',__scope:(D={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},D.DefaultLayout=p.a,D._frontmatter=i,D),mdxType:"Playground"},Object(a.b)(d.p,{className:"mb-3",role:"group","aria-label":"Toolbar with button groups",mdxType:"CButtonToolbar"},Object(a.b)(d.o,{className:"me-2",role:"group","aria-label":"First group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"1"),Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"2"),Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"3"),Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"4")),Object(a.b)(d.mb,{mdxType:"CInputGroup"},Object(a.b)(d.nb,{mdxType:"CInputGroupText"},"@"),Object(a.b)(d.Y,{placeholder:"Input group example","aria-label":"Input group example","aria-describedby":"btnGroupAddon",mdxType:"CFormInput"}))),Object(a.b)(d.p,{className:"justify-content-between",role:"group","aria-label":"Toolbar with button groups",mdxType:"CButtonToolbar"},Object(a.b)(d.o,{className:"me-2",role:"group","aria-label":"First group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"1"),Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"2"),Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"3"),Object(a.b)(d.n,{color:"secondary",variant:"outline",mdxType:"CButton"},"4")),Object(a.b)(d.mb,{mdxType:"CInputGroup"},Object(a.b)(d.nb,{mdxType:"CInputGroupText"},"@"),Object(a.b)(d.Y,{placeholder:"Input group example","aria-label":"Input group example","aria-describedby":"btnGroupAddon",mdxType:"CFormInput"})))),Object(a.b)("h2",{id:"sizing"},"Sizing"),Object(a.b)("p",null,"Alternatively, of implementing button sizing classes to each button in a group, set ",Object(a.b)("inlineCode",{parentName:"p"},"size")," property to all ",Object(a.b)("inlineCode",{parentName:"p"},"<CButtonGroup>"),"'s, including each one when nesting multiple groups."),Object(a.b)(u.c,{__position:8,__code:'<CButtonGroup size="lg" role="group" aria-label="Large button group">\n  <CButton color="dark" variant="outline">\n    Left\n  </CButton>\n  <CButton color="dark" variant="outline">\n    Middle\n  </CButton>\n  <CButton color="dark" variant="outline">\n    Right\n  </CButton>\n</CButtonGroup>\n<br />\n<CButtonGroup role="group" aria-label="Default button group">\n  <CButton color="dark" variant="outline">\n    Left\n  </CButton>\n  <CButton color="dark" variant="outline">\n    Middle\n  </CButton>\n  <CButton color="dark" variant="outline">\n    Right\n  </CButton>\n</CButtonGroup>\n<br />\n<CButtonGroup size="sm" role="group" aria-label="Small button group">\n  <CButton color="dark" variant="outline">\n    Left\n  </CButton>\n  <CButton color="dark" variant="outline">\n    Middle\n  </CButton>\n  <CButton color="dark" variant="outline">\n    Right\n  </CButton>\n</CButtonGroup>',__scope:(g={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},g.DefaultLayout=p.a,g._frontmatter=i,g),mdxType:"Playground"},Object(a.b)(d.o,{size:"lg",role:"group","aria-label":"Large button group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Left"),Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Middle"),Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Right")),Object(a.b)("br",null),Object(a.b)(d.o,{role:"group","aria-label":"Default button group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Left"),Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Middle"),Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Right")),Object(a.b)("br",null),Object(a.b)(d.o,{size:"sm",role:"group","aria-label":"Small button group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Left"),Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Middle"),Object(a.b)(d.n,{color:"dark",variant:"outline",mdxType:"CButton"},"Right"))),Object(a.b)("h2",{id:"nesting"},"Nesting"),Object(a.b)("p",null,"Put a ",Object(a.b)("inlineCode",{parentName:"p"},"<CButtonGroup>")," inside another ",Object(a.b)("inlineCode",{parentName:"p"},"<CButtonGroup>")," when you need dropdown menus combined with a series of buttons."),Object(a.b)(u.c,{__position:9,__code:'<CButtonGroup role="group" aria-label="Button group with nested dropdown">\n  <CButton color="primary">1</CButton>\n  <CButton color="primary">2</CButton>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n</CButtonGroup>',__scope:(w={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},w.DefaultLayout=p.a,w._frontmatter=i,w),mdxType:"Playground"},Object(a.b)(d.o,{role:"group","aria-label":"Button group with nested dropdown",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"1"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"2"),Object(a.b)(d.M,{variant:"btn-group",mdxType:"CDropdown"},Object(a.b)(d.S,{color:"primary",mdxType:"CDropdownToggle"},"Dropdown"),Object(a.b)(d.R,{mdxType:"CDropdownMenu"},Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Something else here"),Object(a.b)(d.N,{mdxType:"CDropdownDivider"}),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Separated link"))))),Object(a.b)("h2",{id:"vertical-variation"},"Vertical variation"),Object(a.b)("p",null,"Create a set of buttons that appear vertically stacked rather than horizontally. ",Object(a.b)("strong",{parentName:"p"},"Split button dropdowns are not supported here.")),Object(a.b)(u.c,{__position:10,__code:'<CButtonGroup vertical role="group" aria-label="Vertical button group">\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n  <CButton color="dark">Button</CButton>\n</CButtonGroup>',__scope:(T={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},T.DefaultLayout=p.a,T._frontmatter=i,T),mdxType:"Playground"},Object(a.b)(d.o,{vertical:!0,role:"group","aria-label":"Vertical button group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"dark",mdxType:"CButton"},"Button"))),Object(a.b)(u.c,{__position:11,__code:'<CButtonGroup vertical role="group" aria-label="Vertical button group">\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CButton color="primary">Button</CButton>\n  <CButton color="primary">Button</CButton>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n  <CDropdown variant="btn-group">\n    <CDropdownToggle color="primary">Dropdown</CDropdownToggle>\n    <CDropdownMenu>\n      <CDropdownItem href="#">Action</CDropdownItem>\n      <CDropdownItem href="#">Another action</CDropdownItem>\n      <CDropdownItem href="#">Something else here</CDropdownItem>\n      <CDropdownDivider />\n      <CDropdownItem href="#">Separated link</CDropdownItem>\n    </CDropdownMenu>\n  </CDropdown>\n</CButtonGroup>',__scope:(h={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},h.DefaultLayout=p.a,h._frontmatter=i,h),mdxType:"Playground"},Object(a.b)(d.o,{vertical:!0,role:"group","aria-label":"Vertical button group",mdxType:"CButtonGroup"},Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Button"),Object(a.b)(d.M,{variant:"btn-group",mdxType:"CDropdown"},Object(a.b)(d.S,{color:"primary",mdxType:"CDropdownToggle"},"Dropdown"),Object(a.b)(d.R,{mdxType:"CDropdownMenu"},Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Something else here"),Object(a.b)(d.N,{mdxType:"CDropdownDivider"}),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Separated link"))),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Button"),Object(a.b)(d.n,{color:"primary",mdxType:"CButton"},"Button"),Object(a.b)(d.M,{variant:"btn-group",mdxType:"CDropdown"},Object(a.b)(d.S,{color:"primary",mdxType:"CDropdownToggle"},"Dropdown"),Object(a.b)(d.R,{mdxType:"CDropdownMenu"},Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Something else here"),Object(a.b)(d.N,{mdxType:"CDropdownDivider"}),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Separated link"))),Object(a.b)(d.M,{variant:"btn-group",mdxType:"CDropdown"},Object(a.b)(d.S,{color:"primary",mdxType:"CDropdownToggle"},"Dropdown"),Object(a.b)(d.R,{mdxType:"CDropdownMenu"},Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Something else here"),Object(a.b)(d.N,{mdxType:"CDropdownDivider"}),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Separated link"))),Object(a.b)(d.M,{variant:"btn-group",mdxType:"CDropdown"},Object(a.b)(d.S,{color:"primary",mdxType:"CDropdownToggle"},"Dropdown"),Object(a.b)(d.R,{mdxType:"CDropdownMenu"},Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Another action"),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Something else here"),Object(a.b)(d.N,{mdxType:"CDropdownDivider"}),Object(a.b)(d.P,{href:"#",mdxType:"CDropdownItem"},"Separated link"))))),Object(a.b)(u.c,{__position:12,__code:'<CButtonGroup vertical role="group" aria-label="Vertical button group">\n  <CFormCheck\n    type="radio"\n    button={{ color: \'danger\', variant: \'outline\' }}\n    name="vbtnradio"\n    id="vbtnradio1"\n    autoComplete="off"\n    label="Radio 1"\n    defaultChecked\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'danger\', variant: \'outline\' }}\n    name="vbtnradio"\n    id="vbtnradio2"\n    autoComplete="off"\n    label="Radio 2"\n  />\n  <CFormCheck\n    type="radio"\n    button={{ color: \'danger\', variant: \'outline\' }}\n    name="vbtnradio"\n    id="vbtnradio3"\n    autoComplete="off"\n    label="Radio 3"\n  />\n</CButtonGroup>',__scope:(O={props:j,DefaultLayout:p.a,Playground:u.c,Props:u.d,CButtonGroup:d.o,CButtonToolbar:d.p,CButton:d.n,CDropdown:d.M,CDropdownDivider:d.N,CDropdownHeader:d.O,CDropdownItem:d.P,CDropdownItemPlain:d.Q,CDropdownMenu:d.R,CDropdownToggle:d.S,CFormCheck:d.V,CFormInput:d.Y,CInputGroup:d.mb,CInputGroupText:d.nb},O.DefaultLayout=p.a,O._frontmatter=i,O),mdxType:"Playground"},Object(a.b)(d.o,{vertical:!0,role:"group","aria-label":"Vertical button group",mdxType:"CButtonGroup"},Object(a.b)(d.V,{type:"radio",button:{color:"danger",variant:"outline"},name:"vbtnradio",id:"vbtnradio1",autoComplete:"off",label:"Radio 1",defaultChecked:!0,mdxType:"CFormCheck"}),Object(a.b)(d.V,{type:"radio",button:{color:"danger",variant:"outline"},name:"vbtnradio",id:"vbtnradio2",autoComplete:"off",label:"Radio 2",mdxType:"CFormCheck"}),Object(a.b)(d.V,{type:"radio",button:{color:"danger",variant:"outline"},name:"vbtnradio",id:"vbtnradio3",autoComplete:"off",label:"Radio 3",mdxType:"CFormCheck"}))),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("h3",{id:"cbuttongroup"},"CButtonGroup"),Object(a.b)(u.d,{of:d.o,mdxType:"Props"}))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/4.0/components/CButtonGroup.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-4-0-components-c-button-group-mdx-6c664f44d09b44a4070b.js.map