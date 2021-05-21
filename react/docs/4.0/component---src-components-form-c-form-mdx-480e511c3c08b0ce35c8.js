(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{CJzZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return y})),a.d(t,"default",(function(){return j}));var o=a("Fcif"),n=a("+I+c"),l=(a("mXGw"),a("/FXl")),r=a("BIGe"),s=a("ZFoC"),i=a("758a"),m=a("J7hk"),b=a("4SRt"),d=a("nOSA"),c=a("iV8I"),p=a("5ZcB"),C=a("OEF7"),u=a("CEMk"),F=a("13Mt"),y=(a("aD51"),{});void 0!==y&&y&&y===Object(y)&&Object.isExtensible(y)&&!y.hasOwnProperty("__filemeta")&&Object.defineProperty(y,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/form/CForm.mdx"}});var h={_frontmatter:y},O=r.a;function j(e){var t,a,j,x,f=e.components,w=Object(n.a)(e,["components"]);return Object(l.b)(O,Object(o.a)({},h,w,{components:f,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"CoreUI’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices."),Object(l.b)("p",null,"Be sure to use an appropriate ",Object(l.b)("inlineCode",{parentName:"p"},"type")," attribute on all inputs (e.g., ",Object(l.b)("inlineCode",{parentName:"p"},"email")," for email address or ",Object(l.b)("inlineCode",{parentName:"p"},"number")," for numerical information) to take advantage of newer input controls like email verification, number selection, and more."),Object(l.b)("p",null,"Here’s a quick example to demonstrate CoreUI’s form styles. Keep reading for documentation on required classes, form layout, and more."),Object(l.b)(s.c,{__position:0,__code:'<CForm>\n  <div className="mb-3">\n    <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>\n    <CFormControl\n      type="email"\n      id="exampleInputEmail1"\n      aria-describedby="emailHelp"\n    />\n    <CFormText id="emailHelp">\n      We\'ll never share your email with anyone else.\n    </CFormText>\n  </div>\n  <div className="mb-3">\n    <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>\n    <CFormControl type="password" id="exampleInputPassword1" />\n  </div>\n  <CFormCheck\n    className="mb-3"\n    label="Check me out"\n    onChange={e => {\n      console.log(e.target)\n    }}\n  />\n  <CButton type="submit" color="primary">\n    Submit\n  </CButton>\n</CForm>',__scope:(t={props:w,DefaultLayout:r.a,Playground:s.c,Props:s.d,CButton:i.a,CForm:m.a,CFormCheck:b.a,CFormControl:d.a,CFormLabel:c.a,CFormSelect:p.a,CFormText:C.a,CCol:u.a,CRow:F.a},t.DefaultLayout=r.a,t._frontmatter=y,t),mdxType:"Playground"},Object(l.b)(m.a,{mdxType:"CForm"},Object(l.b)("div",{className:"mb-3"},Object(l.b)(c.a,{htmlFor:"exampleInputEmail1",mdxType:"CFormLabel"},"Email address"),Object(l.b)(d.a,{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",mdxType:"CFormControl"}),Object(l.b)(C.a,{id:"emailHelp",mdxType:"CFormText"},"We'll never share your email with anyone else.")),Object(l.b)("div",{className:"mb-3"},Object(l.b)(c.a,{htmlFor:"exampleInputPassword1",mdxType:"CFormLabel"},"Email Password"),Object(l.b)(d.a,{type:"password",id:"exampleInputPassword1",mdxType:"CFormControl"})),Object(l.b)(b.a,{className:"mb-3",label:"Check me out",onChange:function(e){console.log(e.target)},mdxType:"CFormCheck"}),Object(l.b)(i.a,{type:"submit",color:"primary",mdxType:"CButton"},"Submit"))),Object(l.b)("h2",{id:"form-text"},"Form text"),Object(l.b)("p",null,"Block-level or inline-level form text can be created using ",Object(l.b)("inlineCode",{parentName:"p"},"<CFormText>"),"."),Object(l.b)("p",null,"Associating form text with form controls\nForm text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control."),Object(l.b)("p",null,"Form text below inputs can be styled with ",Object(l.b)("inlineCode",{parentName:"p"},"<CFormText>"),". If a block-level element will be used, a top margin is added for easy spacing from the inputs above."),Object(l.b)(s.c,{__position:1,__code:'<CForm>\n  <div className="mb-3">\n    <CFormLabel htmlFor="inputPassword5">Password</CFormLabel>\n    <CFormControl\n      type="password"\n      id="inputPassword5"\n      aria-describedby="passwordHelpBlock"\n    />\n    <CFormText id="passwordHelpBlock">\n      Your password must be 8-20 characters long, contain letters and numbers,\n      and must not contain spaces, special characters, or emoji.\n    </CFormText>\n  </div>\n</CForm>',__scope:(a={props:w,DefaultLayout:r.a,Playground:s.c,Props:s.d,CButton:i.a,CForm:m.a,CFormCheck:b.a,CFormControl:d.a,CFormLabel:c.a,CFormSelect:p.a,CFormText:C.a,CCol:u.a,CRow:F.a},a.DefaultLayout=r.a,a._frontmatter=y,a),mdxType:"Playground"},Object(l.b)(m.a,{mdxType:"CForm"},Object(l.b)("div",{className:"mb-3"},Object(l.b)(c.a,{htmlFor:"inputPassword5",mdxType:"CFormLabel"},"Password"),Object(l.b)(d.a,{type:"password",id:"inputPassword5","aria-describedby":"passwordHelpBlock",mdxType:"CFormControl"}),Object(l.b)(C.a,{id:"passwordHelpBlock",mdxType:"CFormText"},"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.")))),Object(l.b)("p",null,"Inline text can use any typical inline HTML element (be it a ",Object(l.b)("inlineCode",{parentName:"p"},"<span>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<small>"),", or something else) with nothing more than the ",Object(l.b)("inlineCode",{parentName:"p"},".form-text")," class."),Object(l.b)(s.c,{__position:2,__code:'<CRow className="g-3 align-items-center">\n  <CCol xs="auto">\n    <CFormLabel htmlFor="inputPassword6" className="col-form-label">\n      Password\n    </CFormLabel>\n  </CCol>\n  <CCol xs="auto">\n    <CFormControl\n      type="password"\n      id="inputPassword6"\n      aria-describedby="passwordHelpInline"\n    />\n  </CCol>\n  <CCol xs="auto">\n    <CFormText component="span" id="passwordHelpInline">\n      Must be 8-20 characters long.\n    </CFormText>\n  </CCol>\n</CRow>',__scope:(j={props:w,DefaultLayout:r.a,Playground:s.c,Props:s.d,CButton:i.a,CForm:m.a,CFormCheck:b.a,CFormControl:d.a,CFormLabel:c.a,CFormSelect:p.a,CFormText:C.a,CCol:u.a,CRow:F.a},j.DefaultLayout=r.a,j._frontmatter=y,j),mdxType:"Playground"},Object(l.b)(F.a,{className:"g-3 align-items-center",mdxType:"CRow"},Object(l.b)(u.a,{xs:"auto",mdxType:"CCol"},Object(l.b)(c.a,{htmlFor:"inputPassword6",className:"col-form-label",mdxType:"CFormLabel"},"Password")),Object(l.b)(u.a,{xs:"auto",mdxType:"CCol"},Object(l.b)(d.a,{type:"password",id:"inputPassword6","aria-describedby":"passwordHelpInline",mdxType:"CFormControl"})),Object(l.b)(u.a,{xs:"auto",mdxType:"CCol"},Object(l.b)(C.a,{component:"span",id:"passwordHelpInline",mdxType:"CFormText"},"Must be 8-20 characters long.")))),Object(l.b)("h2",{id:"disabled-forms"},"Disabled forms"),Object(l.b)("p",null,"Add the ",Object(l.b)("inlineCode",{parentName:"p"},"disabled")," boolean attribute on an input to prevent user interactions and make it appear lighter."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<CFormLabel id="disabledInput" type="text" placeholder="Disabled input here..." disabled/>\n')),Object(l.b)("p",null,"Add the ",Object(l.b)("inlineCode",{parentName:"p"},"disabled")," attribute to a ",Object(l.b)("inlineCode",{parentName:"p"},"<fieldset>")," to disable all the controls within. Browsers treat all native form controls (",Object(l.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<select>"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"<button>")," elements) inside a ",Object(l.b)("inlineCode",{parentName:"p"},"<fieldset disabled>")," as disabled, preventing both keyboard and mouse interactions on them."),Object(l.b)("p",null,"However, if your form also includes custom button-like elements such as ",Object(l.b)("inlineCode",{parentName:"p"},"<CButton>...</CButton>"),", these will only be given a style of ",Object(l.b)("inlineCode",{parentName:"p"},"pointer-events: none"),", meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding ",Object(l.b)("inlineCode",{parentName:"p"},'tabindex="-1"')," to prevent them from receiving focus and ",Object(l.b)("inlineCode",{parentName:"p"},'aria-disabled="disabled"')," to signal their state to assistive technologies."),Object(l.b)(s.c,{__position:3,__code:'<CForm>\n  <fieldset disabled>\n    <legend>Disabled fieldset example</legend>\n    <div className="mb-3">\n      <CFormLabel htmlFor="disabledTextInput">Disabled input</CFormLabel>\n      <CFormControl id="disabledTextInput" placeholder="Disabled input" />\n    </div>\n    <div className="mb-3">\n      <CFormLabel htmlFor="disabledSelect">Disabled select menu</CFormLabel>\n      <CFormSelect id="disabledSelect">\n        <option>Disabled select</option>\n      </CFormSelect>\n    </div>\n    <div className="mb-3">\n      <CFormCheck\n        id="disabledFieldsetCheck"\n        label="Can\'t check this"\n        disabled\n      />\n    </div>\n    <CButton type="submit">Submit</CButton>\n  </fieldset>\n</CForm>',__scope:(x={props:w,DefaultLayout:r.a,Playground:s.c,Props:s.d,CButton:i.a,CForm:m.a,CFormCheck:b.a,CFormControl:d.a,CFormLabel:c.a,CFormSelect:p.a,CFormText:C.a,CCol:u.a,CRow:F.a},x.DefaultLayout=r.a,x._frontmatter=y,x),mdxType:"Playground"},Object(l.b)(m.a,{mdxType:"CForm"},Object(l.b)("fieldset",{disabled:!0},Object(l.b)("legend",null,"Disabled fieldset example"),Object(l.b)("div",{className:"mb-3"},Object(l.b)(c.a,{htmlFor:"disabledTextInput",mdxType:"CFormLabel"},"Disabled input"),Object(l.b)(d.a,{id:"disabledTextInput",placeholder:"Disabled input",mdxType:"CFormControl"})),Object(l.b)("div",{className:"mb-3"},Object(l.b)(c.a,{htmlFor:"disabledSelect",mdxType:"CFormLabel"},"Disabled select menu"),Object(l.b)(p.a,{id:"disabledSelect",mdxType:"CFormSelect"},Object(l.b)("option",null,"Disabled select"))),Object(l.b)("div",{className:"mb-3"},Object(l.b)(b.a,{id:"disabledFieldsetCheck",label:"Can't check this",disabled:!0,mdxType:"CFormCheck"})),Object(l.b)(i.a,{type:"submit",mdxType:"CButton"},"Submit")))))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/form/CForm.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-form-c-form-mdx-480e511c3c08b0ce35c8.js.map