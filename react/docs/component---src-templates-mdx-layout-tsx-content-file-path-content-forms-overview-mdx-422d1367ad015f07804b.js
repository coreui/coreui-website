"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[2939],{4845:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(45392),a=n(2784),r=n(70033);function s(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",pre:"pre"},(0,l.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"overview",style:{position:"relative"}},"Overview",a.createElement(t.a,{href:"#overview","aria-label":"overview permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"CoreUI’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices."),"\n",a.createElement(t.p,null,"Be sure to use an appropriate ",a.createElement(t.code,null,"type")," attribute on all inputs (e.g., ",a.createElement(t.code,null,"email")," for email address or ",a.createElement(t.code,null,"number")," for numerical information) to take advantage of newer input controls like email verification, number selection, and more."),"\n",a.createElement(t.p,null,"Here’s a quick example to demonstrate CoreUI’s form styles. Keep reading for documentation on required classes, form layout, and more."),"\n",a.createElement(n,null,a.createElement(r.lx,null,a.createElement("div",{className:"mb-3"},a.createElement(r.L8,{htmlFor:"exampleInputEmail1"},"Email address"),a.createElement(r.jO,{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),a.createElement(r.Jh,{id:"emailHelp"},"We'll never share your email with anyone else.")),a.createElement("div",{className:"mb-3"},a.createElement(r.L8,{htmlFor:"exampleInputPassword1"},"Email Password"),a.createElement(r.jO,{type:"password",id:"exampleInputPassword1"})),a.createElement(r.EC,{className:"mb-3",label:"Check me out",onChange:e=>{console.log(e.target)}}),a.createElement(r.u5,{type:"submit",color:"primary"},a.createElement(t.p,null,"Submit")))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CForm>\n  <div className="mb-3">\n    <CFormLabel htmlFor="exampleInputEmail1">Email address</CFormLabel>\n    <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />\n    <CFormText id="emailHelp">We\'ll never share your email with anyone else.</CFormText>\n  </div>\n  <div className="mb-3">\n    <CFormLabel htmlFor="exampleInputPassword1">Email Password</CFormLabel>\n    <CFormInput type="password" id="exampleInputPassword1" />\n  </div>\n  <CFormCheck\n    className="mb-3"\n    label="Check me out"\n    onChange={(e) => {\n      console.log(e.target)\n    }}\n  />\n  <CButton type="submit" color="primary">\n    Submit\n  </CButton>\n</CForm>\n')),"\n",a.createElement(t.h2,{id:"form-text",style:{position:"relative"}},"Form text",a.createElement(t.a,{href:"#form-text","aria-label":"form text permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Block-level or inline-level form text can be created using ",a.createElement(t.code,null,"<CFormText>"),"."),"\n",a.createElement(t.p,null,"Associating form text with form controls\nForm text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control."),"\n",a.createElement(t.p,null,"Form text below inputs can be styled with ",a.createElement(t.code,null,"<CFormText>"),". If a block-level element will be used, a top margin is added for easy spacing from the inputs above."),"\n",a.createElement(n,null,a.createElement(r.lx,null,a.createElement("div",{className:"mb-3"},a.createElement(r.L8,{htmlFor:"inputPassword5"},"Password"),a.createElement(r.jO,{type:"password",id:"inputPassword5","aria-describedby":"passwordHelpBlock"}),a.createElement(r.Jh,{id:"passwordHelpBlock"},a.createElement(t.p,null,"Your password must be 8-20 characters long, contain letters and numbers, and must not\ncontain spaces, special characters, or emoji."))))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CForm>\n  <div className="mb-3">\n    <CFormLabel htmlFor="inputPassword5">Password</CFormLabel>\n    <CFormInput type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" />\n    <CFormText id="passwordHelpBlock">\n      Your password must be 8-20 characters long, contain letters and numbers, and must not\n      contain spaces, special characters, or emoji.\n    </CFormText>\n  </div>\n</CForm>\n')),"\n",a.createElement(t.p,null,"Inline text can use any typical inline HTML element (be it a ",a.createElement(t.code,null,"<span>"),", ",a.createElement(t.code,null,"<small>"),", or something else) with nothing more than the ",a.createElement(t.code,null,".form-text")," class."),"\n",a.createElement(n,null,a.createElement(r.rb,{className:"g-3 align-items-center"},a.createElement(r.b7,{xs:"auto"},a.createElement(r.L8,{htmlFor:"inputPassword6",className:"col-form-label"},a.createElement(t.p,null,"Password"))),a.createElement(r.b7,{xs:"auto"},a.createElement(r.jO,{type:"password",id:"inputPassword6","aria-describedby":"passwordHelpInline"})),a.createElement(r.b7,{xs:"auto"},a.createElement(r.Jh,{component:"span",id:"passwordHelpInline"},a.createElement(t.p,null,"Must be 8-20 characters long."))))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CRow className="g-3 align-items-center">\n  <CCol xs="auto">\n    <CFormLabel htmlFor="inputPassword6" className="col-form-label">\n      Password\n    </CFormLabel>\n  </CCol>\n  <CCol xs="auto">\n    <CFormInput type="password" id="inputPassword6" aria-describedby="passwordHelpInline" />\n  </CCol>\n  <CCol xs="auto">\n    <CFormText component="span" id="passwordHelpInline">\n      Must be 8-20 characters long.\n    </CFormText>\n  </CCol>\n</CRow>\n')),"\n",a.createElement(t.h2,{id:"disabled-forms",style:{position:"relative"}},"Disabled forms",a.createElement(t.a,{href:"#disabled-forms","aria-label":"disabled forms permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Add the ",a.createElement(t.code,null,"disabled")," boolean attribute on an input to prevent user interactions and make it appear lighter."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CFormLabel id="disabledInput" type="text" placeholder="Disabled input here..." disabled />\n')),"\n",a.createElement(t.p,null,"Add the ",a.createElement(t.code,null,"disabled")," attribute to a ",a.createElement(t.code,null,"<fieldset>")," to disable all the controls within. Browsers treat all native form controls (",a.createElement(t.code,null,"<input>"),", ",a.createElement(t.code,null,"<select>"),", and ",a.createElement(t.code,null,"<button>")," elements) inside a ",a.createElement(t.code,null,"<fieldset disabled>")," as disabled, preventing both keyboard and mouse interactions on them."),"\n",a.createElement(t.p,null,"However, if your form also includes custom button-like elements such as ",a.createElement(t.code,null,"<CButton>...</CButton>"),", these will only be given a style of ",a.createElement(t.code,null,"pointer-events: none"),", meaning they are still focusable and operable using the keyboard. In this case, you must manually modify these controls by adding ",a.createElement(t.code,null,'tabindex="-1"')," to prevent them from receiving focus and ",a.createElement(t.code,null,'aria-disabled="disabled"')," to signal their state to assistive technologies."),"\n",a.createElement(n,null,a.createElement(r.lx,null,a.createElement("fieldset",{disabled:!0},a.createElement("legend",null,"Disabled fieldset example"),a.createElement("div",{className:"mb-3"},a.createElement(r.L8,{htmlFor:"disabledTextInput"},"Disabled input"),a.createElement(r.jO,{id:"disabledTextInput",placeholder:"Disabled input"})),a.createElement("div",{className:"mb-3"},a.createElement(r.L8,{htmlFor:"disabledSelect"},"Disabled select menu"),a.createElement(r.LX,{id:"disabledSelect"},a.createElement("option",null,"Disabled select"))),a.createElement("div",{className:"mb-3"},a.createElement(r.EC,{id:"disabledFieldsetCheck",label:"Can't check this",disabled:!0})),a.createElement(r.u5,{type:"submit"},"Submit")))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<CForm>\n  <fieldset disabled>\n    <legend>Disabled fieldset example</legend>\n    <div className="mb-3">\n      <CFormLabel htmlFor="disabledTextInput">Disabled input</CFormLabel>\n      <CFormInput id="disabledTextInput" placeholder="Disabled input" />\n    </div>\n    <div className="mb-3">\n      <CFormLabel htmlFor="disabledSelect">Disabled select menu</CFormLabel>\n      <CFormSelect id="disabledSelect">\n        <option>Disabled select</option>\n      </CFormSelect>\n    </div>\n    <div className="mb-3">\n      <CFormCheck id="disabledFieldsetCheck" label="Can\'t check this" disabled />\n    </div>\n    <CButton type="submit">Submit</CButton>\n  </fieldset>\n</CForm>\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)};var i=n(18722);const c=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(i.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(i.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function m(e){return a.createElement(c,e,a.createElement(o,e))}c.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return o},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||s:r(e),l.createElement(a.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-overview-mdx-422d1367ad015f07804b.js.map