"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[3855],{5231:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var a=l(5392),n=l(2784),o=l(8910);function r(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",strong:"strong",option:"option",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components),{Example:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),n.createElement(n.Fragment,null,n.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",n.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Use ",n.createElement(t.code,null,"floatingLabel")," property on ",n.createElement(t.code,null,"<CFormInput>"),", ",n.createElement(t.code,null,"<CFormSelect>")," or ",n.createElement(t.code,null,"<CFormTextarea>")," to enable floating labels with textual form fields. A ",n.createElement(t.code,null,"placeholder")," is required on each ",n.createElement(t.code,null,"<CFormInput>"),", ",n.createElement(t.code,null,"<CFormSelect>")," and ",n.createElement(t.code,null,"<CFormTextarea>")," as our method of CSS-only floating labels uses the ",n.createElement(t.code,null,":placeholder-shown")," pseudo-element."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.jO,{type:"email",id:"floatingInput",floatingClassName:"mb-3",floatingLabel:"Email address",placeholder:"name@example.com"}),n.createElement(o.jO,{type:"password",id:"floatingPassword",floatingLabel:"Password",placeholder:"Password"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormInput type="email" id="floatingInput" floatingClassName="mb-3" floatingLabel="Email address" placeholder="name@example.com" />\n<CFormInput type="password" id="floatingPassword" floatingLabel="Password" placeholder="Password" />\n'))),"\n",n.createElement(t.p,null,"You can create the same form control by wrapping a pair of ",n.createElement(t.code,null,"<CFormInput>")," and ",n.createElement(t.code,null,"<CFormLabel>")," elements in ",n.createElement(t.code,null,"<CFormFloating>")," to enable floating labels with textual form fields. A ",n.createElement(t.code,null,"placeholder")," is required on each ",n.createElement(t.code,null,"<CFormInput>")," as our method of CSS-only floating labels uses the ",n.createElement(t.code,null,":placeholder-shown")," pseudo-element. Also, note that the ",n.createElement(t.code,null,"<CFormInput>")," must come first so we can utilize a sibling selector (e.g., ",n.createElement(t.code,null,"~"),")."),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormFloating className="mb-3">\n  <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />\n  <CFormLabel htmlFor="floatingInput">Email address</CFormLabel>\n</CFormFloating>\n<CFormFloating>\n  <CFormInput type="password" id="floatingPassword" placeholder="Password" />\n  <CFormLabel htmlFor="exampleFormControlTextarea1">Password</CFormLabel>\n</CFormFloating>\n')),"\n",n.createElement(t.p,null,"When there's a ",n.createElement(t.code,null,"value")," already defined, ",n.createElement(t.code,null,"<CFormLabel>"),"s will automatically adjust to their floated position."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.jO,{type:"email",id:"floatingInputValue",floatingLabel:"Input with value",placeholder:"name@example.com",defaultValue:"test@example.com"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormInput\n  type="email"\n  id="floatingInputValue"\n  floatingLabel="Input with value"\n  placeholder="name@example.com"\n  defaultValue="test@example.com"\n/>\n'))),"\n",n.createElement(t.p,null,"Form validation styles also work as expected."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.jO,{type:"email",id:"floatingInputValid",floatingClassName:"mb-3",floatingLabel:"Email addresss",placeholder:"name@example.com",defaultValue:"test@example.com",valid:!0}),n.createElement(o.jO,{type:"email",id:"floatingInputInvalid",floatingLabel:"Email addresss",placeholder:"name@example.com",defaultValue:"test@example.com",invalid:!0})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormInput\n  type="email"\n  id="floatingInputValid"\n  floatingClassName="mb-3"\n  floatingLabel="Email addresss"\n  placeholder="name@example.com"\n  defaultValue="test@example.com"\n  valid\n/>\n<CFormInput\n  type="email"\n  id="floatingInputInvalid"\n  floatingLabel="Email addresss"\n  placeholder="name@example.com"\n  defaultValue="test@example.com"\n  invalid\n/>\n'))),"\n",n.createElement(t.h2,{id:"textareas",style:{position:"relative"}},"Textareas",n.createElement(t.a,{href:"#textareas","aria-label":"textareas permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"By default, ",n.createElement(t.code,null,"<CFormTextarea>"),"s will be the same height as ",n.createElement(t.code,null,"<CFormInput>"),"s."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.PB,{id:"floatingTextarea",floatingLabel:"Comments",placeholder:"Leave a comment here"})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormTextarea\n  id="floatingTextarea"\n  floatingLabel="Comments"\n  placeholder="Leave a comment here"\n></CFormTextarea>\n'))),"\n",n.createElement(t.p,null,"To set a custom height on your ",n.createElement(t.code,null,"<CFormTextarea>"),", do not use the ",n.createElement(t.code,null,"rows")," attribute. Instead, set an explicit ",n.createElement(t.code,null,"height")," (either inline or via custom CSS)."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.PB,{placeholder:"Leave a comment here",id:"floatingTextarea2",floatingLabel:"Comments",style:{height:"100px"}})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormTextarea\n  placeholder="Leave a comment here"\n  id="floatingTextarea2"\n  floatingLabel="Comments"\n  style={{ height: \'100px\' }}\n></CFormTextarea>\n'))),"\n",n.createElement(t.h2,{id:"selects",style:{position:"relative"}},"Selects",n.createElement(t.a,{href:"#selects","aria-label":"selects permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Other than ",n.createElement(t.code,null,"<CFormInput>"),", floating labels are only available on ",n.createElement(t.code,null,"<CFormSelect>"),"s. They work in the same way, but unlike ",n.createElement(t.code,null,"<CFormInput>"),"s, they'll always show the ",n.createElement(t.code,null,"<CFormLabel>")," in its floated state. ",n.createElement(t.strong,null,"Selects with ",n.createElement(t.code,null,"size")," and ",n.createElement(t.code,null,"multiple")," are not supported.")),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.LX,{id:"floatingSelect",floatingLabel:"Works with selects","aria-label":"Floating label select example"},"  ",n.createElement(t.option,null,"Open this select menu"),"  ",n.createElement(t.option,{value:"1"},"One"),"  ",n.createElement(t.option,{value:"2"},"Two"),"  ",n.createElement(t.option,{value:"3"},"Three"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CFormSelect\n  id="floatingSelect"\n  floatingLabel="Works with selects"\n  aria-label="Floating label select example"\n>\n  <option>Open this select menu</option>\n  <option value="1">One</option>\n  <option value="2">Two</option>\n  <option value="3">Three</option>\n</CFormSelect>\n'))),"\n",n.createElement(t.h2,{id:"layout",style:{position:"relative"}},"Layout",n.createElement(t.a,{href:"#layout","aria-label":"layout permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"When working with the CoreUI for Bootstrap grid system, be sure to place form elements within column classes."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(o.rb,{xs:{gutter:2}},"  ",n.createElement(o.b7,{md:!0},"    ",n.createElement(o.jO,{type:"email",id:"floatingInputGrid",floatingLabel:"Email address",placeholder:"name@example.com",defaultValue:"email@example.com"}),"  "),"  ",n.createElement(o.b7,{md:!0},"    ",n.createElement(o.LX,{id:"floatingSelectGrid",floatingLabel:"Email address","aria-label":"Works with selects"},"      ",n.createElement(t.option,null,"Open this select menu"),"      ",n.createElement(t.option,{value:"1"},"One"),"      ",n.createElement(t.option,{value:"2"},"Two"),"      ",n.createElement(t.option,{value:"3"},"Three"),"    "),"  "))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CRow xs={{ gutter: 2 }}>\n  <CCol md>\n    <CFormInput\n      type="email"\n      id="floatingInputGrid"\n      floatingLabel="Email address"\n      placeholder="name@example.com"\n      defaultValue="email@example.com"\n    />\n  </CCol>\n  <CCol md>\n    <CFormSelect\n      id="floatingSelectGrid"\n      floatingLabel="Email address"\n      aria-label="Works with selects"\n    >\n      <option>Open this select menu</option>\n      <option value="1">One</option>\n      <option value="2">Two</option>\n      <option value="3">Three</option>\n    </CFormSelect>\n  </CCol>\n</CRow>\n'))),"\n",n.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",n.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"cformfloating",style:{position:"relative"}},"CFormFloating",n.createElement(t.a,{href:"#cformfloating","aria-label":"cformfloating permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CFormFloating } from '@coreui/react'\n// or\nimport CFormFloating from '@coreui/react/src/components/form/CFormFloating'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-"))))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(r,e)):r(e)};var m=l(7285);const s=e=>{let{children:t}=e;return n.createElement(a.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(o.C_,Object.assign({},e.children.props,{color:t})))}return n.createElement("strong",null,e.children)},pre:e=>n.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return n.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...a}=e;return n.createElement(m.UW,a,l&&n.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return n.createElement(m.en,l,n.Children.map(t,(e=>{if(n.isValidElement(e))return n.cloneElement(e)})))}}},t)};function i(e){return n.createElement(s,e,n.createElement(c,e))}s.displayName="MdxLayout"},5392:function(e,t,l){l.d(t,{Zo:function(){return c},ah:function(){return o}});var a=l(2784);const n=a.createContext({});function o(e){const t=a.useContext(n);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function c({components:e,children:t,disableParentContext:l}){let c;return c=l?"function"==typeof e?e({}):e||r:o(e),a.createElement(n.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-forms-floating-labels-mdx-06cedfd93e039efa838b.js.map