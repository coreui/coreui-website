"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[2281],{83254:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l=n(45392),a=n(2784),r=n(1017);const i=()=>{const{0:e,1:t}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(r.u5,{href:"#",onClick:n=>{n.preventDefault(),t(!e)}},"Link"),a.createElement(r.u5,{onClick:()=>t(!e)},"Button"),a.createElement(r.V9,{visible:e},a.createElement(r.xH,{className:"mt-3"},a.createElement(r.sl,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."))))},s=()=>{const e=Object.assign({div:"div"},(0,l.ah)()),{0:t,1:n}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(r.u5,{className:"mb-3",onClick:()=>n(!t),"aria-expanded":t,"aria-controls":"collapseWidthExample"},"Button"),a.createElement(e.div,{style:{minHeight:"120px"}},a.createElement(r.V9,{id:"collapseWidthExample",horizontal:!0,visible:t},a.createElement(r.xH,{style:{width:"300px"}},a.createElement(r.sl,null,"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.")))))},c=()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:n,1:l}=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement(r.u5,{onClick:()=>t(!e)},"Toggle first element"),a.createElement(r.u5,{onClick:()=>l(!n)},"Toggle second element"),a.createElement(r.u5,{onClick:()=>{t(!e),l(!n)}},"Toggle both elements"),a.createElement(r.rb,null,a.createElement(r.b7,{xs:6},a.createElement(r.V9,{visible:e},a.createElement(r.xH,{className:"mt-3"},a.createElement(r.sl,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))),a.createElement(r.b7,{xs:6},a.createElement(r.V9,{visible:n},a.createElement(r.xH,{className:"mt-3"},a.createElement(r.sl,null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."))))))};function o(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",pre:"pre",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"how-it-works",style:{position:"relative"}},"How it works",a.createElement(t.a,{href:"#how-it-works","aria-label":"how it works permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the ",a.createElement(t.code,null,"height")," from its current value to ",a.createElement(t.code,null,"0"),". Given how CSS handles animations, you cannot use ",a.createElement(t.code,null,"padding")," on a ",a.createElement(t.code,null,".collapse")," element. Instead, use the class as an independent wrapping element."),"\n",a.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",a.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"You can use a link or a button component."),"\n","\n",a.createElement(n,null,a.createElement(i)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton href="#" onClick={(event) => {\n      event.preventDefault()\n      setVisible(!visible)\n    }}>\n      Link\n    </CButton>\n    <CButton onClick={() => setVisible(!visible)}>Button</CButton>\n    <CCollapse visible={visible}>\n      <CCard className="mt-3">\n        <CCardBody>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad\n          squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt\n          sapiente ea proident.\n        </CCardBody>\n      </CCard>\n    </CCollapse>\n  </>\n)\n')),"\n",a.createElement(t.h2,{id:"horizontal",style:{position:"relative"}},"Horizontal",a.createElement(t.a,{href:"#horizontal","aria-label":"horizontal permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"The collapse plugin also supports horizontal collapsing. Add the ",a.createElement(t.code,null,"horizontal")," property to transition the ",a.createElement(t.code,null,"width")," instead of ",a.createElement(t.code,null,"height")," and set a ",a.createElement(t.code,null,"width")," on the immediate child element."),"\n","\n",a.createElement(n,null,a.createElement(s)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton className="mb-3" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample">Button</CButton>\n    <div style={{ minHeight: \'120px\'}}>\n      <CCollapse id="collapseWidthExample" horizontal visible={visible}>\n        <CCard style={{width: \'300px\'}}>\n          <CCardBody>\n            This is some placeholder content for a horizontal collapse. It\'s hidden by default and shown when triggered.\n          </CCardBody>\n        </CCard>\n      </CCollapse>\n    </div>\n  </>\n)\n')),"\n",a.createElement(t.h2,{id:"multiple-targets",style:{position:"relative"}},"Multiple targets",a.createElement(t.a,{href:"#multiple-targets","aria-label":"multiple targets permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"A ",a.createElement(t.code,null,"<CButton>")," can show and hide multiple elements."),"\n","\n",a.createElement(n,null,a.createElement(c)),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const [visibleA, setVisibleA] = useState(false)\nconst [visibleB, setVisibleB] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisibleA(!visibleA)}>Toggle first element</CButton>\n    <CButton onClick={() => setVisibleB(!visibleB)}>Toggle second element</CButton>\n    <CButton\n      onClick={() => {\n        setVisibleA(!visibleA)\n        setVisibleB(!visibleB)\n      }}\n    >\n      Toggle both elements\n    </CButton>\n    <CRow>\n      <CCol xs={6}>\n        <CCollapse visible={visibleA}>\n          <CCard className="mt-3">\n            <CCardBody>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson\n              ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt\n              sapiente ea proident.\n            </CCardBody>\n          </CCard>\n        </CCollapse>\n      </CCol>\n      <CCol xs={6}>\n        <CCollapse visible={visibleB}>\n          <CCard className="mt-3">\n            <CCardBody>\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson\n              ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt\n              sapiente ea proident.\n            </CCardBody>\n          </CCard>\n        </CCollapse>\n      </CCol>\n    </CRow>\n  </>\n)\n')),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"ccollapse",style:{position:"relative"}},"CCollapse",a.createElement(t.a,{href:"#ccollapse","aria-label":"ccollapse permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CCollapse } from '@coreui/react'\n// or\nimport CCollapse from '@coreui/react/src/components/collapse/CCollapse'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the base component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"horizontal")),a.createElement(t.td,null,"Set horizontal collapsing to transition the width instead of height."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onHide")),a.createElement(t.td,null,"Callback fired when the component requests to be hidden."),a.createElement(t.td,null,a.createElement(t.code,null,"() => void")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onShow")),a.createElement(t.td,null,"Callback fired when the component requests to be shown."),a.createElement(t.td,null,a.createElement(t.code,null,"() => void")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"visible")),a.createElement(t.td,null,"Toggle the visibility of component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-"))))))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};var d=n(18722);const u=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{ScssDocs:e=>a.createElement(d.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(d.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(d.UW,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(d.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function p(e){return a.createElement(u,e,a.createElement(m,e))}u.displayName="MdxLayout"},45392:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return r}});var l=n(2784);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:r(e),l.createElement(a.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-collapse-mdx-62ca98b48ab499fed6a8.js.map