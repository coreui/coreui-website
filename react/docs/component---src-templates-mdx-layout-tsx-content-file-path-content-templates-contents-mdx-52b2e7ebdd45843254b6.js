"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[5677],{20941:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(45392),a=n(2784);function l(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",strong:"strong",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"project-structure",style:{position:"relative"}},"Project structure",a.createElement(t.a,{href:"#project-structure","aria-label":"project structure permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Once downloaded, unzip the compressed folder and you'll see something like this:"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"JavaScript based project")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-text"},"coreui-react-admin-template/\n├── public/\n├── src/\n│   ├── assets/\n│   │   ├── brand/\n│   │   └── images/\n│   ├── components/\n│   ├── layout/\n│   ├── scss/\n│   └── views/\n│       ├── base/\n│       ├── buttons/\n│       ├── css/\n│       ├── icons/\n│       ├── notifications/\n│       ├── App.js\n│       ├── App.test.js\n│       ├── _nav.js\n│       ├── index.js\n│       ├── reportWebVitals.js\n│       ├── routes.js\n│       ├── setupTests.js\n│       └── store.js\n└── package.json\n")),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"TypeScript based project")),"\n",a.createElement(t.p,null,"TypeScript project is available only in PRO version."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-text"},"coreui-react-admin-template-typescript/\n├── public/\n├── src/\n│   ├── assets/\n│   │   ├── brand/\n│   │   └── images/\n│   ├── components/\n│   ├── layout/\n│   ├── scss/\n│   └── views/\n│       ├── base/\n│       ├── buttons/\n│       ├── css/\n│       ├── icons/\n│       ├── notifications/\n│       ├── App.test.tsx\n│       ├── App.tsx\n│       ├── _nav.tsx\n│       ├── index.tsx\n│       ├── react-app-env.d.ts\n│       ├── reportWebVitals.ts\n│       ├── routes.ts\n│       ├── setupTests.ts\n│       └── store.ts\n└── package.json\n")),"\n",a.createElement(t.p,null,"This is the most basic form of CoreUI React Admin Templates."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(88038),o=n(53922),i=n(85338);const p=e=>{let{children:t}=e;return a.createElement(r.Zo,{components:{ScssDocs:e=>a.createElement(i.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(c.C,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(o.S,Object.assign({responsive:!0},e,{className:`table ${t&&" table-striped table-api"}`}))},Callout:e=>{const{children:t,title:n,...r}=e;return a.createElement(i.UW,r,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(i.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function m(e){return a.createElement(p,e,a.createElement(s,e))}p.displayName="MdxLayout"},53922:function(e,t,n){n.d(t,{S:function(){return E}});var r=n(2784),a=n(72779),l=n.n(a),s=n(27121),c=n(4246),o=n(5938),i=n(33365),p=n(60420),m=n(69296);const u=(0,r.forwardRef)(((e,t)=>{let{children:n,...a}=e;return r.createElement("caption",Object.assign({},a,{ref:t}),n)}));u.displayName="CTableCaption";const d=e=>{let{children:t,responsive:n,...a}=e;return n?r.createElement("div",Object.assign({className:"boolean"==typeof n?"table-responsive":`table-responsive-${n}`},a),t):r.createElement(r.Fragment,null,t)};d.displayName="CTableResponsiveWrapper";const b=e=>e.replace(/[-_.]/g," ").replace(/ +/g," ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),f=e=>Object.keys(e[0]||{}).filter((e=>"_"!==e.charAt(0))),E=(0,r.forwardRef)(((e,t)=>{let{children:n,align:a,borderColor:E,bordered:h,borderless:g,caption:v,captionTop:j,className:y,color:N,columns:_,footer:C,hover:T,items:O,responsive:w,small:k,striped:$,stripedColumns:x,tableFootProps:P,tableHeadProps:R,...A}=e;const S=(0,r.useMemo)((()=>((e,t)=>e?e.map((e=>"object"==typeof e?e.key:e)):t&&f(t))(_,O)),[_,O]);return r.createElement(d,{responsive:w},r.createElement("table",Object.assign({className:l()("table",{[`align-${a}`]:a,[`border-${E}`]:E,"caption-top":j||"top"===v,"table-bordered":h,"table-borderless":g,[`table-${N}`]:N,"table-hover":T,"table-sm":k,"table-striped":$,"table-striped-columns":x},y)},A,{ref:t}),(v&&"top"!==v||j)&&r.createElement(u,null,v||j),_&&r.createElement(s.V,R,r.createElement(p.T,null,_.map(((e,t)=>r.createElement(c.i,Object.assign({},e._props&&{...e._props},e._style&&{style:{...e._style}},{key:t}),(e=>{var t;return"object"==typeof e?null!==(t=e.label)&&void 0!==t?t:b(e.key):b(e)})(e)))))),O&&r.createElement(o.N,null,O.map(((e,t)=>r.createElement(p.T,Object.assign({},e._props&&{...e._props},{key:t}),S&&S.map(((t,n)=>void 0!==e[t]?r.createElement(i.N,Object.assign({},e._cellProps&&{...e._cellProps.all&&{...e._cellProps.all},...e._cellProps[t]&&{...e._cellProps[t]}},{key:n}),e[t]):null)))))),n,C&&r.createElement(m.j,P,r.createElement(p.T,null,C.map(((e,t)=>r.createElement(i.N,Object.assign({},"object"==typeof e&&e._props&&{...e._props},{key:t}),"object"==typeof e?e.label:e)))))))}));E.displayName="CTable"},5938:function(e,t,n){n.d(t,{N:function(){return s}});var r=n(2784),a=n(72779),l=n.n(a);const s=(0,r.forwardRef)(((e,t)=>{let{children:n,className:a,color:s,...c}=e;return r.createElement("tbody",Object.assign({className:l()({[`table-${s}`]:s},a)||void 0},c,{ref:t}),n)}));s.displayName="CTableBody"},33365:function(e,t,n){n.d(t,{N:function(){return s}});var r=n(2784),a=n(72779),l=n.n(a);const s=(0,r.forwardRef)(((e,t)=>{let{children:n,active:a,align:s,className:c,color:o,...i}=e;const p=i.scope?"th":"td";return r.createElement(p,Object.assign({className:l()({[`align-${s}`]:s,"table-active":a,[`table-${o}`]:o},c)||void 0},i,{ref:t}),n)}));s.displayName="CTableDataCell"},69296:function(e,t,n){n.d(t,{j:function(){return s}});var r=n(2784),a=n(72779),l=n.n(a);const s=(0,r.forwardRef)(((e,t)=>{let{children:n,className:a,color:s,...c}=e;return r.createElement("tfoot",Object.assign({className:l()({[`table-${s}`]:s},a)||void 0},c,{ref:t}),n)}));s.displayName="CTableFoot"},27121:function(e,t,n){n.d(t,{V:function(){return s}});var r=n(2784),a=n(72779),l=n.n(a);const s=(0,r.forwardRef)(((e,t)=>{let{children:n,className:a,color:s,...c}=e;return r.createElement("thead",Object.assign({className:l()({[`table-${s}`]:s},a)||void 0},c,{ref:t}),n)}));s.displayName="CTableHead"},4246:function(e,t,n){n.d(t,{i:function(){return s}});var r=n(2784),a=n(72779),l=n.n(a);const s=(0,r.forwardRef)(((e,t)=>{let{children:n,className:a,color:s,...c}=e;return r.createElement("th",Object.assign({className:l()({[`table-${s}`]:s},a)||void 0},c,{ref:t}),n)}));s.displayName="CTableHeaderCell"},60420:function(e,t,n){n.d(t,{T:function(){return s}});var r=n(2784),a=n(72779),l=n.n(a);const s=(0,r.forwardRef)(((e,t)=>{let{children:n,active:a,align:s,className:c,color:o,...i}=e;return r.createElement("tr",Object.assign({className:l()({[`align-${s}`]:s,"table-active":a,[`table-${o}`]:o},c)||void 0},i,{ref:t}),n)}));s.displayName="CTableRow"},45392:function(e,t,n){n.d(t,{Zo:function(){return c},ah:function(){return l}});var r=n(2784);const a=r.createContext({});function l(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:l(e),r.createElement(a.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-templates-contents-mdx-52b2e7ebdd45843254b6.js.map