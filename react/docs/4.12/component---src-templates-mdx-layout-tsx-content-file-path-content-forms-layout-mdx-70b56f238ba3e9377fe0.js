"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9633],{44779:function(e,l,t){t.r(l),t.d(l,{default:function(){return i}});var n=t(45392),a=t(2784),o=t(18910);function r(e){const l=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",ul:"ul",li:"li",div:"div",pre:"pre",option:"option",fieldset:"fieldset",legend:"legend",h3:"h3"},(0,n.ah)(),e.components),{Example:t}=l;return t||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(l.h2,{id:"forms",style:{position:"relative"}},"Forms",a.createElement(l.a,{href:"#forms","aria-label":"forms permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"Every group of form fields should reside in a ",a.createElement(l.code,null,"<CForm>")," element. CoreUI provides no default styling for the ",a.createElement(l.code,null,"<CForm>")," element, but there are some powerful browser features that are provided by default."),"\n",a.createElement(l.ul,null,"\n",a.createElement(l.li,null,"New to browser forms? Consider reviewing ",a.createElement(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",target:"_blank",rel:"nofollow"},"the MDN form docs")," for an overview and complete list of available attributes."),"\n",a.createElement(l.li,null,a.createElement(l.code,null,"<CButton>"),"s within a ",a.createElement(l.code,null,"<CForm>")," default to ",a.createElement(l.code,null,'type="submit"'),", so strive to be specific and always include a ",a.createElement(l.code,null,"type"),"."),"\n",a.createElement(l.li,null,"You can disable every form element within a form with the ",a.createElement(l.code,null,"disabled")," attribute on the ",a.createElement(l.code,null,"<CForm>"),"."),"\n"),"\n",a.createElement(l.p,null,"Since CoreUI applies ",a.createElement(l.code,null,"display: block")," and ",a.createElement(l.code,null,"width: 100%")," to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis."),"\n",a.createElement(l.h2,{id:"utilities",style:{position:"relative"}},"Utilities",a.createElement(l.a,{href:"#utilities","aria-label":"utilities permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,a.createElement(l.a,{href:"https://coreui.io/docs/utilities/spacing/",target:"_blank",rel:"nofollow"},"Margin utilities")," are the easiest way to add some structure to forms. They provide basic grouping of labels, controls, optional form text, and form validation messaging. We recommend sticking to ",a.createElement(l.code,null,"margin-bottom")," utilities, and using a single direction throughout the form for consistency."),"\n",a.createElement(l.h2,{id:"form-grid",style:{position:"relative"}},"Form grid",a.createElement(l.a,{href:"#form-grid","aria-label":"form grid permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.rb,null,a.createElement(o.b7,{xs:!0},a.createElement(o.jO,{placeholder:"First name","aria-label":"First name"})),a.createElement(o.b7,{xs:!0},a.createElement(o.jO,{placeholder:"Last name","aria-label":"Last name"})))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CRow>\n  <CCol xs>\n    <CFormInput placeholder="First name" aria-label="First name"/>\n  </CCol>\n  <CCol xs>\n    <CFormInput placeholder="Last name" aria-label="Last name"/>\n  </CCol>\n</CRow>\n'))),"\n",a.createElement(l.h2,{id:"gutters",style:{position:"relative"}},"Gutters",a.createElement(l.a,{href:"#gutters","aria-label":"gutters permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"By adding ",a.createElement(l.a,{href:"https://coreui.io/docs/layout/gutters/",target:"_blank",rel:"nofollow"},"gutter modifier classes"),", you can have control over the gutter width in as well the inline as block direction."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.rb,{className:"g-3"},a.createElement(o.b7,{xs:!0},a.createElement(o.jO,{placeholder:"First name","aria-label":"First name"})),a.createElement(o.b7,{xs:!0},a.createElement(o.jO,{placeholder:"Last name","aria-label":"Last name"})))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CRow className="g-3">\n  <CCol xs>\n    <CFormInput placeholder="First name" aria-label="First name"/>\n  </CCol>\n  <CCol xs>\n    <CFormInput placeholder="Last name" aria-label="Last name"/>\n  </CCol>\n</CRow>\n'))),"\n",a.createElement(l.p,null,"More complex layouts can also be created with the grid system."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.lx,{className:"row g-3"},"  ",a.createElement(o.b7,{md:6},"    ",a.createElement(o.jO,{type:"email",id:"inputEmail4",label:"Email"}),"  "),"  ",a.createElement(o.b7,{md:6},"    ",a.createElement(o.jO,{type:"password",id:"inputPassword4",label:"Password"}),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.jO,{id:"inputAddress",label:"Address",placeholder:"1234 Main St"}),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.jO,{id:"inputAddress2",label:"Address 2",placeholder:"Apartment, studio, or floor"}),"  "),"  ",a.createElement(o.b7,{md:6},"    ",a.createElement(o.jO,{id:"inputCity",label:"City"}),"  "),"  ",a.createElement(o.b7,{md:4},"    ",a.createElement(o.LX,{id:"inputState",label:"State"},"      ",a.createElement(l.option,null,"Choose..."),"      ",a.createElement(l.option,null,"..."),"    "),"  "),"  ",a.createElement(o.b7,{md:2},"    ",a.createElement(o.jO,{id:"inputZip",label:"Zip"}),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.EC,{type:"checkbox",id:"gridCheck",label:"Check me out"}),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.u5,{type:"submit"},"Sign in"),"  "))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CForm className="row g-3">\n  <CCol md={6}>\n    <CFormInput type="email" id="inputEmail4" label="Email" />\n  </CCol>\n  <CCol md={6}>\n    <CFormInput type="password" id="inputPassword4" label="Password" />\n  </CCol>\n  <CCol xs={12}>\n    <CFormInput id="inputAddress" label="Address" placeholder="1234 Main St"/>\n  </CCol>\n  <CCol xs={12}>\n    <CFormInput id="inputAddress2" label="Address 2" placeholder="Apartment, studio, or floor"/>\n  </CCol>\n  <CCol md={6}>\n    <CFormInput id="inputCity" label="City"/>\n  </CCol>\n  <CCol md={4}>\n    <CFormSelect id="inputState" label="State">\n      <option>Choose...</option>\n      <option>...</option>\n    </CFormSelect>\n  </CCol>\n  <CCol md={2}>\n    <CFormInput id="inputZip" label="Zip" />\n  </CCol>\n  <CCol xs={12}>\n    <CFormCheck type="checkbox" id="gridCheck" label="Check me out"/>\n  </CCol>\n  <CCol xs={12}>\n    <CButton type="submit">Sign in</CButton>\n  </CCol>\n</CForm>\n'))),"\n",a.createElement(l.h2,{id:"horizontal-form",style:{position:"relative"}},"Horizontal form",a.createElement(l.a,{href:"#horizontal-form","aria-label":"horizontal form permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"Create horizontal forms with the grid by adding the ",a.createElement(l.code,null,".row")," class to form groups and using the ",a.createElement(l.code,null,".col-*-*")," classes to specify the width of your labels and controls. Be sure to add ",a.createElement(l.code,null,".col-form-label")," to your ",a.createElement(l.code,null,"<CFormLabel>"),"s as well so they're vertically centered with their associated form controls."),"\n",a.createElement(l.p,null,"At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the ",a.createElement(l.code,null,"padding-top")," on our stacked radio inputs label to better align the text baseline."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.lx,null,"  ",a.createElement(o.rb,{className:"mb-3"},"    ",a.createElement(o.L8,{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label"},"Email"),"    ",a.createElement(o.b7,{sm:10},"      ",a.createElement(o.jO,{type:"email",id:"inputEmail3"}),"    "),"  "),"  ",a.createElement(o.rb,{className:"mb-3"},"    ",a.createElement(o.L8,{htmlFor:"inputPassword3",className:"col-sm-2 col-form-label"},"Password"),"    ",a.createElement(o.b7,{sm:10},"      ",a.createElement(o.jO,{type:"password",id:"inputPassword3"}),"    "),"  "),"  ",a.createElement(l.fieldset,{className:"row mb-3"},"    ",a.createElement(l.legend,{className:"col-form-label col-sm-2 pt-0"},"Radios"),"    ",a.createElement(o.b7,{sm:10},"      ",a.createElement(o.EC,{type:"radio",name:"gridRadios",id:"gridRadios1",value:"option1",label:"First radio",defaultChecked:!0}),"      ",a.createElement(o.EC,{type:"radio",name:"gridRadios",id:"gridRadios2",value:"option2",label:"Second radio"}),"      ",a.createElement(o.EC,{type:"radio",name:"gridRadios",id:"gridRadios3",value:"option3",label:"Third disabled radio",disabled:!0}),"    "),"  "),"  ",a.createElement(o.rb,{className:"mb-3"},"    ",a.createElement(l.div,{className:"col-sm-10 offset-sm-2"},"      ",a.createElement(o.EC,{type:"checkbox",id:"gridCheck1",label:"Example checkbox"}),"    "),"  "),"  ",a.createElement(o.u5,{type:"submit"},"Sign in"))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CForm>\n  <CRow className="mb-3">\n    <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</CFormLabel>\n    <CCol sm={10} >\n      <CFormInput type="email" id="inputEmail3"/>\n    </CCol>\n  </CRow>\n  <CRow className="mb-3">\n    <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</CFormLabel>\n    <CCol sm={10} >\n      <CFormInput type="password" id="inputPassword3"/>\n    </CCol>\n  </CRow>\n  <fieldset className="row mb-3">\n    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>\n    <CCol sm={10} >\n      <CFormCheck type="radio" name="gridRadios" id="gridRadios1" value="option1" label="First radio" defaultChecked/>\n      <CFormCheck type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Second radio"/>\n      <CFormCheck type="radio" name="gridRadios" id="gridRadios3" value="option3" label="Third disabled radio" disabled/>\n    </CCol>\n  </fieldset>\n  <CRow className="mb-3">\n    <div className="col-sm-10 offset-sm-2">\n      <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox"/>\n    </div>\n  </CRow>\n  <CButton type="submit">Sign in</CButton>\n</CForm>\n'))),"\n",a.createElement(l.h3,{id:"horizontal-form-label-sizing",style:{position:"relative"}},"Horizontal form label sizing",a.createElement(l.a,{href:"#horizontal-form-label-sizing","aria-label":"horizontal form label sizing permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"Be sure to use ",a.createElement(l.code,null,".col-form-label-sm")," or ",a.createElement(l.code,null,".col-form-label-lg")," to your ",a.createElement(l.code,null,"<CFormLabel>"),"s or ",a.createElement(l.code,null,"<legend>"),"s to correctly follow the size of ",a.createElement(l.code,null,".form-control-lg")," and ",a.createElement(l.code,null,".form-control-sm"),"."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.rb,{className:"mb-3"},"  ",a.createElement(o.L8,{htmlFor:"colFormLabelSm",className:"col-sm-2 col-form-label col-form-label-sm"},"Email"),"  ",a.createElement(o.b7,{sm:10},"    ",a.createElement(o.jO,{type:"email",className:"form-control form-control-sm",id:"colFormLabelSm",placeholder:"col-form-label-sm"}),"  ")),a.createElement(o.rb,{className:"mb-3"},"  ",a.createElement(o.L8,{htmlFor:"colFormLabel",className:"col-sm-2 col-form-label"},"Email"),"  ",a.createElement(o.b7,{sm:10},"    ",a.createElement(o.jO,{type:"email",id:"colFormLabel",placeholder:"col-form-label"}),"  ")),a.createElement(o.rb,null,"  ",a.createElement(o.L8,{htmlFor:"colFormLabelLg",className:"col-sm-2 col-form-label col-form-label-lg"},"Email"),"  ",a.createElement(o.b7,{sm:10},"    ",a.createElement(o.jO,{type:"email",className:"form-control form-control-lg",id:"colFormLabelLg",placeholder:"col-form-label-lg"}),"  "))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CRow className="mb-3">\n  <CFormLabel htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</CFormLabel>\n  <CCol sm={10} >\n    <CFormInput type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>\n  </CCol>\n</CRow>\n<CRow className="mb-3">\n  <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</CFormLabel>\n  <CCol sm={10} >\n    <CFormInput type="email" id="colFormLabel" placeholder="col-form-label"/>\n  </CCol>\n</CRow>\n<CRow>\n  <CFormLabel htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</CFormLabel>\n  <CCol sm={10} >\n    <CFormInput type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg"/>\n  </CCol>\n</CRow>\n'))),"\n",a.createElement(l.h2,{id:"column-sizing",style:{position:"relative"}},"Column sizing",a.createElement(l.a,{href:"#column-sizing","aria-label":"column sizing permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"As shown in the previous examples, our grid system allows you to place any number of ",a.createElement(l.code,null,"<CCol>"),"s within a ",a.createElement(l.code,null,"<CRow>"),". They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining ",a.createElement(l.code,null,"<CCol>"),"s equally split the rest, with specific column classes like ",a.createElement(l.code,null,"<CCol sm={7} >"),"."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.rb,{className:"g-3"},a.createElement(o.b7,{sm:7},a.createElement(o.jO,{placeholder:"City","aria-label":"City"})),a.createElement(o.b7,{sm:!0},a.createElement(o.jO,{placeholder:"State","aria-label":"State"})),a.createElement(o.b7,{sm:!0},a.createElement(o.jO,{placeholder:"Zip","aria-label":"Zip"})))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CRow className="g-3">\n  <CCol sm={7} >\n    <CFormInput placeholder="City" aria-label="City"/>\n  </CCol>\n  <CCol sm>\n    <CFormInput placeholder="State" aria-label="State"/>\n  </CCol>\n  <CCol sm>\n    <CFormInput placeholder="Zip" aria-label="Zip"/>\n  </CCol>\n</CRow>\n'))),"\n",a.createElement(l.h2,{id:"auto-sizing",style:{position:"relative"}},"Auto-sizing",a.createElement(l.a,{href:"#auto-sizing","aria-label":"auto sizing permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"The example below uses a flexbox utility to vertically center the contents and changes ",a.createElement(l.code,null,"<CCol>")," to ",a.createElement(l.code,null,'<CCol xs="auto">')," so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.lx,{className:"row gy-2 gx-3 align-items-center"},"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"autoSizingInput"},"Name"),"    ",a.createElement(o.jO,{id:"autoSizingInput",placeholder:"Jane Doe"}),"  "),"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"autoSizingInputGroup"},"Username"),"    ",a.createElement(o.YR,null,"      ",a.createElement(o.wV,null,"@"),"      ",a.createElement(o.jO,{id:"autoSizingInputGroup",placeholder:"Username"}),"    "),"  "),"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"autoSizingSelect"},"Preference"),"    ",a.createElement(o.LX,{id:"autoSizingSelect"},"      ",a.createElement(l.option,null,"Choose..."),"      ",a.createElement(l.option,{value:"1"},"One"),"      ",a.createElement(l.option,{value:"2"},"Two"),"      ",a.createElement(l.option,{value:"3"},"Three"),"    "),"  "),"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.EC,{type:"checkbox",id:"autoSizingCheck",label:"Remember me"}),"  "),"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.u5,{type:"submit"},"Submit"),"  "))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CForm className="row gy-2 gx-3 align-items-center">\n  <CCol xs="auto">\n    <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">Name</CFormLabel>\n    <CFormInput id="autoSizingInput" placeholder="Jane Doe"/>\n  </CCol>\n  <CCol xs="auto">\n    <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">Username</CFormLabel>\n    <CInputGroup>\n      <CInputGroupText>@</CInputGroupText>\n      <CFormInput id="autoSizingInputGroup" placeholder="Username"/>\n    </CInputGroup>\n  </CCol>\n  <CCol xs="auto">\n    <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">Preference</CFormLabel>\n    <CFormSelect id="autoSizingSelect">\n      <option>Choose...</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </CFormSelect>\n  </CCol>\n  <CCol xs="auto">\n    <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me"/>\n  </CCol>\n  <CCol xs="auto">\n    <CButton type="submit">Submit</CButton>\n  </CCol>\n</CForm>\n'))),"\n",a.createElement(l.p,null,"You can then remix that once again with size-specific column classes."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.lx,{className:"row gx-3 gy-2 align-items-center"},"  ",a.createElement(o.b7,{sm:3},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"specificSizeInputName"},"Name"),"    ",a.createElement(o.jO,{id:"specificSizeInputName",placeholder:"Jane Doe"}),"  "),"  ",a.createElement(o.b7,{sm:3},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"specificSizeInputGroupUsername"},"Username"),"    ",a.createElement(o.YR,null,"      ",a.createElement(o.wV,null,"@"),"      ",a.createElement(o.jO,{id:"specificSizeInputGroupUsername",placeholder:"Username"}),"    "),"  "),"  ",a.createElement(o.b7,{sm:3},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"specificSizeSelect"},"Preference"),"    ",a.createElement(o.LX,{id:"specificSizeSelect"},"      ",a.createElement(l.option,null,"Choose..."),"      ",a.createElement(l.option,{value:"1"},"One"),"      ",a.createElement(l.option,{value:"2"},"Two"),"      ",a.createElement(l.option,{value:"3"},"Three"),"    "),"  "),"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.EC,{type:"checkbox",id:"autoSizingCheck2",label:"Remember me"}),"  "),"  ",a.createElement(o.b7,{xs:"auto"},"    ",a.createElement(o.u5,{type:"submit"},"Submit"),"  "))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CForm className="row gx-3 gy-2 align-items-center">\n  <CCol sm={3} >\n    <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">Name</CFormLabel>\n    <CFormInput id="specificSizeInputName" placeholder="Jane Doe"/>\n  </CCol>\n  <CCol sm={3} >\n    <CFormLabel className="visually-hidden" htmlFor="specificSizeInputGroupUsername">Username</CFormLabel>\n    <CInputGroup>\n      <CInputGroupText>@</CInputGroupText>\n      <CFormInput id="specificSizeInputGroupUsername" placeholder="Username"/>\n    </CInputGroup>\n  </CCol>\n  <CCol sm={3} >\n    <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">Preference</CFormLabel>\n    <CFormSelect id="specificSizeSelect">\n      <option>Choose...</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </CFormSelect>\n  </CCol>\n  <CCol xs="auto">\n    <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me"/>\n  </CCol>\n  <CCol xs="auto">\n    <CButton type="submit">Submit</CButton>\n  </CCol>\n</CForm>\n'))),"\n",a.createElement(l.h2,{id:"inline-forms",style:{position:"relative"}},"Inline forms",a.createElement(l.a,{href:"#inline-forms","aria-label":"inline forms permalink",className:"anchor-link after"},a.createElement(l.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(l.p,null,"Use the ",a.createElement(l.code,null,'<CCol xs="auto">')," class to create horizontal layouts. By adding ",a.createElement(l.a,{href:"https://coreui.io/docs/layout/gutters/",target:"_blank",rel:"nofollow"},"gutter modifier classes"),", we will have gutters in horizontal and vertical directions. The ",a.createElement(l.code,null,".align-items-center")," aligns the form elements to the middle, making the ",a.createElement(l.code,null,"<CFormCheck>")," align properly."),"\n",a.createElement(l.div,{className:"docs-example-snippet docs-code-snippet"},a.createElement(t,{className:""},a.createElement(o.lx,{className:"row row-cols-lg-auto g-3 align-items-center"},"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"inlineFormInputGroupUsername"},"Username"),"    ",a.createElement(o.YR,null,"      ",a.createElement(o.wV,null,"@"),"      ",a.createElement(o.jO,{id:"inlineFormInputGroupUsername",placeholder:"Username"}),"    "),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.L8,{className:"visually-hidden",htmlFor:"inlineFormSelectPref"},"Preference"),"    ",a.createElement(o.LX,{id:"inlineFormSelectPref"},"      ",a.createElement(l.option,null,"Choose..."),"      ",a.createElement(l.option,{value:"1"},"One"),"      ",a.createElement(l.option,{value:"2"},"Two"),"      ",a.createElement(l.option,{value:"3"},"Three"),"    "),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.EC,{type:"checkbox",id:"inlineFormCheck",label:"Remember me"}),"  "),"  ",a.createElement(o.b7,{xs:12},"    ",a.createElement(o.u5,{type:"submit"},"Submit"),"  "))),a.createElement(l.pre,null,a.createElement(l.code,{className:"language-jsx"},'<CForm className="row row-cols-lg-auto g-3 align-items-center">\n  <CCol xs={12}>\n    <CFormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</CFormLabel>\n    <CInputGroup>\n      <CInputGroupText>@</CInputGroupText>\n      <CFormInput id="inlineFormInputGroupUsername" placeholder="Username"/>\n    </CInputGroup>\n  </CCol>\n\n  <CCol xs={12}>\n    <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</CFormLabel>\n    <CFormSelect id="inlineFormSelectPref">\n      <option>Choose...</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </CFormSelect>\n  </CCol>\n\n  <CCol xs={12}>\n    <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me"/>\n  </CCol>\n\n  <CCol xs={12}>\n    <CButton type="submit">Submit</CButton>\n  </CCol>\n</CForm>\n'))))}var m=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,n.ah)(),e.components);return l?a.createElement(l,e,a.createElement(r,e)):r(e)};var s=t(18722);const c=e=>{let{children:l}=e;return a.createElement(n.Zo,{components:{ScssDocs:e=>a.createElement(s.Jw,e),strong:e=>{if("em"==e.children.type){const l=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(o.C_,Object.assign({},e.children.props,{color:l})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(s.dn,e),table:e=>{const l=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(l&&" table-striped table-api")}))},Callout:e=>{const{children:l,title:t,...n}=e;return a.createElement(s.UW,n,t&&a.createElement("h5",null,t),l)},Example:e=>{const{children:l,...t}=e;return a.createElement(s.en,t,a.Children.map(l,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},l)};function i(e){return a.createElement(c,e,a.createElement(m,e))}c.displayName="MdxLayout"},45392:function(e,l,t){t.d(l,{Zo:function(){return m},ah:function(){return o}});var n=t(2784);const a=n.createContext({});function o(e){const l=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(l):{...l,...e}),[l,e])}const r={};function m({components:e,children:l,disableParentContext:t}){let m;return m=t?"function"==typeof e?e({}):e||r:o(e),n.createElement(a.Provider,{value:m},l)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-layout-mdx-70b56f238ba3e9377fe0.js.map