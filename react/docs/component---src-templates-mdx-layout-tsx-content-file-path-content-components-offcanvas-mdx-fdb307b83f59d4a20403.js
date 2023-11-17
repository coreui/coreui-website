"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4788],{4822:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(45392),l=t(2784),c=t(70033);const s=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Toggle offcanvas"),l.createElement(c.N3,{placement:"start",visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Offcanvas"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"Content for the offcanvas goes here. You can place just about any React component or custom elements here.")))},r=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Enable body scrolling"),l.createElement(c.N3,{backdrop:!1,placement:"start",scroll:!0,visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Offcanvas with body scrolling"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"Try scrolling the rest of the page to see this option in action.")))},o=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Enable both scrolling & backdrop"),l.createElement(c.N3,{placement:"start",scroll:!0,visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Backdrop with scrolling"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"Try scrolling the rest of the page to see this option in action.")))},i=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Toggle static offcanvas"),l.createElement(c.N3,{backdrop:"static",placement:"start",visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Backdrop with scrolling"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"I will not close if you click outside of me.")))},m=()=>{const e=Object.assign({p:"p",code:"code"},(0,a.ah)()),{0:n,1:t}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{className:"d-lg-none",onClick:()=>t(!0)},"Toggle offcanvas"),l.createElement(c.Gc,{className:"d-none d-lg-block",color:"info"},"Resize your browser to show the responsive offcanvas toggle."),l.createElement(c.N3,{placement:"start",responsive:"lg",visible:n,onHide:()=>t(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Responsive offcanvas"),l.createElement(c.pd,{className:"text-reset",onClick:()=>t(!1)})),l.createElement(c.xF,null,l.createElement(e.p,null,"This is content within an ",l.createElement(e.code,null,".offcanvas-lg")),".")))},f=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Toggle top offcanvas"),l.createElement(c.N3,{placement:"top",visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Offcanvas"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"Content for the offcanvas goes here. You can place just about any React component or custom elements here.")))},u=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Toggle right offcanvas"),l.createElement(c.N3,{placement:"end",visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Offcanvas"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"Content for the offcanvas goes here. You can place just about any React component or custom elements here.")))},d=()=>{const{0:e,1:n}=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(c.u5,{onClick:()=>n(!0)},"Toggle bottom offcanvas"),l.createElement(c.N3,{placement:"bottom",visible:e,onHide:()=>n(!1)},l.createElement(c.Cu,null,l.createElement(c.XU,null,"Offcanvas"),l.createElement(c.pd,{className:"text-reset",onClick:()=>n(!1)})),l.createElement(c.xF,null,"Content for the offcanvas goes here. You can place just about any React component or custom elements here.")))};function p(e){const n=Object.assign({h2:"h2",a:"a",span:"span",h3:"h3",p:"p",code:"code",div:"div",pre:"pre",ul:"ul",li:"li",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em"},(0,a.ah)(),e.components),{Example:t,ScssDocs:p}=n;return t||v("Example",!0),p||v("ScssDocs",!0),l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"examples",style:{position:"relative"}},"Examples",l.createElement(n.a,{href:"#examples","aria-label":"examples permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"offcanvas-components",style:{position:"relative"}},"Offcanvas components",l.createElement(n.a,{href:"#offcanvas-components","aria-label":"offcanvas components permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Below is an offcanvas example that is shown by default (via ",l.createElement(n.code,null,"visible={true}"),"). Offcanvas includes support for a header with a close button and an optional body class for some initial ",l.createElement(n.code,null,"padding"),". We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:"docs-example-offcanvas bg-body-tertiary p-0 overflow-hidden"},l.createElement(c.N3,{backdrop:!1,placement:"start",visible:!0},"  ",l.createElement(c.Cu,null,"    ",l.createElement(c.XU,null,"Offcanvas"),"    ",l.createElement(c.pd,{className:"text-reset"}),"  "),"  ",l.createElement(c.xF,null,"    Content for the offcanvas goes here. You can place just about any React component or custom    elements here.  "))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<COffcanvas backdrop={false} placement="start" visible={true}>\n  <COffcanvasHeader>\n    <COffcanvasTitle>Offcanvas</COffcanvasTitle>\n    <CCloseButton className="text-reset" />\n  </COffcanvasHeader>\n  <COffcanvasBody>\n    Content for the offcanvas goes here. You can place just about any React component or custom\n    elements here.\n  </COffcanvasBody>\n</COffcanvas>\n'))),"\n",l.createElement(n.h3,{id:"live-demo",style:{position:"relative"}},"Live demo",l.createElement(n.a,{href:"#live-demo","aria-label":"live demo permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Use the buttons below to show and hide an offcanvas component."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"visible={false}")," hides content (default)"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"visible")," or ",l.createElement(n.code,null,"visible={true}")," shows content"),"\n"),"\n","\n",l.createElement(t,null,l.createElement(s)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Toggle offcanvas</CButton>\n    <COffcanvas placement="start" visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Offcanvas</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        Content for the offcanvas goes here. You can place just about any React component or\n        custom elements here.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n",l.createElement(n.h3,{id:"body-scrolling",style:{position:"relative"}},"Body scrolling",l.createElement(n.a,{href:"#body-scrolling","aria-label":"body scrolling permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Scrolling the ",l.createElement(n.code,null,"<body>")," element is disabled when an offcanvas and its backdrop are visible. Use the scroll property to toggle ",l.createElement(n.code,null,"<body>")," scrolling and backdrop to toggle the backdrop."),"\n","\n",l.createElement(t,null,l.createElement(r)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Enable body scrolling</CButton>\n    <COffcanvas backdrop={false} placement="start" scroll={true} visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Offcanvas with body scrolling</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        Try scrolling the rest of the page to see this option in action.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n",l.createElement(n.h3,{id:"body-scrolling-and-backdrop",style:{position:"relative"}},"Body scrolling and backdrop",l.createElement(n.a,{href:"#body-scrolling-and-backdrop","aria-label":"body scrolling and backdrop permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"You can also enable ",l.createElement(n.code,null,"<body>")," scrolling with a visible backdrop."),"\n","\n",l.createElement(t,null,l.createElement(o)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Enable both scrolling &amp; backdrop</CButton>\n    <COffcanvas placement="start" scroll={true} visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        Try scrolling the rest of the page to see this option in action.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n",l.createElement(n.h3,{id:"static-backdrop",style:{position:"relative"}},"Static backdrop",l.createElement(n.a,{href:"#static-backdrop","aria-label":"static backdrop permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"If you set a ",l.createElement(n.code,null,"backdrop")," to ",l.createElement(n.code,null,"static"),", your React offcanvas component will not close when clicking outside of it."),"\n","\n",l.createElement(t,null,l.createElement(i)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Toggle static offcanvas</CButton>\n    <COffcanvas backdrop="static" placement="start" visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Backdrop with scrolling</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        I will not close if you click outside of me.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n",l.createElement(n.h2,{id:"dark-offcanvas",style:{position:"relative"}},"Dark offcanvas",l.createElement(n.a,{href:"#dark-offcanvas","aria-label":"dark offcanvas permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Change the appearance of offcanvases with utilities to better match them to different contexts like dark navbars. Here we add ",l.createElement(n.code,null,".text-bg-dark")," to the ",l.createElement(n.code,null,"<COffcanvas>")," and ",l.createElement(n.code,null,"white")," property to ",l.createElement(n.code,null,"<CCloseButton>")," for proper styling with a dark offcanvas."),"\n",l.createElement(n.div,{className:"docs-example-snippet docs-code-snippet"},l.createElement(t,{className:"docs-example-offcanvas bg-body-secondary p-0 overflow-hidden"},l.createElement(c.N3,{backdrop:!1,className:"text-bg-dark",placement:"start",visible:!0},"  ",l.createElement(c.Cu,null,"    ",l.createElement(c.XU,null,"Offcanvas"),"    ",l.createElement(c.pd,{white:!0}),"  "),"  ",l.createElement(c.xF,null,"    Content for the offcanvas goes here. You can place just about any React component or custom    elements here.  "))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<COffcanvas backdrop={false} className="text-bg-dark" placement="start" visible={true}>\n  <COffcanvasHeader>\n    <COffcanvasTitle>Offcanvas</COffcanvasTitle>\n    <CCloseButton white />\n  </COffcanvasHeader>\n  <COffcanvasBody>\n    Content for the offcanvas goes here. You can place just about any React component or custom\n    elements here.\n  </COffcanvasBody>\n</COffcanvas>\n'))),"\n",l.createElement(n.h2,{id:"responsive",style:{position:"relative"}},"Responsive",l.createElement(n.a,{href:"#responsive","aria-label":"responsive permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Responsive offcanvas properties hide content outside the viewport from a specified breakpoint and down.\nAbove that breakpoint, the contents within will behave as usual.\nFor example, ",l.createElement(n.code,null,'responsive="lg"')," hides content in an offcanvas below the lg breakpoint, but shows the content above the lg breakpoint."),"\n","\n",l.createElement(t,null,l.createElement(m)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton className="d-lg-none" onClick={() => setVisible(true)}>Toggle offcanvas</CButton>\n    <CAlert className="d-none d-lg-block" color="info">Resize your browser to show the responsive offcanvas toggle.</CAlert>\n    <COffcanvas backdrop="static" placement="start" visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Responsive offcanvas</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        This is content within an <code>.offcanvas-lg</code>.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n",l.createElement(n.h2,{id:"placement",style:{position:"relative"}},"Placement",l.createElement(n.a,{href:"#placement","aria-label":"placement permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"There's no default placement for offcanvas components, so you must add one of the modifier classes below;"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,'placement="start"')," places offcanvas on the left of the viewport (shown above)"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'placement="end"')," places offcanvas on the right of the viewport"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'placement="top"')," places offcanvas on the top of the viewport"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,'placement="bottom"')," places offcanvas on the bottom of the viewport"),"\n"),"\n",l.createElement(n.p,null,"Try the top, right, and bottom examples out below."),"\n","\n",l.createElement(t,null,l.createElement(f)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Toggle top offcanvas</CButton>\n    <COffcanvas placement="top" visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Offcanvas</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        Content for the offcanvas goes here. You can place just about any React component or\n        custom elements here.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n","\n",l.createElement(t,null,l.createElement(u)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Toggle right offcanvas</CButton>\n    <COffcanvas placement="right" visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Offcanvas</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        Content for the offcanvas goes here. You can place just about any React component or\n        custom elements here.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n","\n",l.createElement(t,null,l.createElement(d)),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'const [visible, setVisible] = useState(false)\nreturn (\n  <>\n    <CButton onClick={() => setVisible(true)}>Toggle bottom offcanvas</CButton>\n    <COffcanvas placement="bottom" visible={visible} onHide={() => setVisible(false)}>\n      <COffcanvasHeader>\n        <COffcanvasTitle>Offcanvas</COffcanvasTitle>\n        <CCloseButton className="text-reset" onClick={() => setVisible(false)} />\n      </COffcanvasHeader>\n      <COffcanvasBody>\n        Content for the offcanvas goes here. You can place just about any React component or\n        custom elements here.\n      </COffcanvasBody>\n    </COffcanvas>\n  </>\n)\n')),"\n",l.createElement(n.h2,{id:"accessibility",style:{position:"relative"}},"Accessibility",l.createElement(n.a,{href:"#accessibility","aria-label":"accessibility permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Since the offcanvas panel is conceptually a modal dialog, be sure to add ",l.createElement(n.code,null,'aria-labelledby="..."'),"—referencing the offcanvas title—to ",l.createElement(n.code,null,"<COffcanvas>"),". Note that you don’t need to add ",l.createElement(n.code,null,'role="dialog"')," since we already add it automatically."),"\n",l.createElement(n.h2,{id:"customizing",style:{position:"relative"}},"Customizing",l.createElement(n.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",l.createElement(n.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"React offcanvas uses local CSS variables on ",l.createElement(n.code,null,".offcanvas")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",l.createElement(p,{file:"_offcanvas.scss",capture:"offcanvas-css-vars"}),"\n",l.createElement(n.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",l.createElement(n.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <COffcanvas style={vars}>...</COffcanvas>\n")),"\n",l.createElement(n.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",l.createElement(n.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(p,{file:"_variables.scss",capture:"offcanvas-variables"}),"\n",l.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",l.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"coffcanvas",style:{position:"relative"}},"COffcanvas",l.createElement(n.a,{href:"#coffcanvas","aria-label":"coffcanvas permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { COffcanvas } from '@coreui/react'\n// or\nimport COffcanvas from '@coreui/react/src/components/offcanvas/COffcanvas'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"backdrop")),l.createElement(n.td,null,"Apply a backdrop on body while offcanvas is open."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")," | ",l.createElement(n.code,null,"'static'")),l.createElement(n.td,null,"true")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the base component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"keyboard")),l.createElement(n.td,null,"Closes the offcanvas when escape key is pressed."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")),l.createElement(n.td,null,"true")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"onHide")),l.createElement(n.td,null,"Callback fired when the component requests to be hidden."),l.createElement(n.td,null,l.createElement(n.code,null,"() => void")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"onShow")),l.createElement(n.td,null,"Callback fired when the component requests to be shown."),l.createElement(n.td,null,l.createElement(n.code,null,"() => void")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"placement")),l.createElement(n.td,null,"Components placement, there’s no default placement."),l.createElement(n.td,null,l.createElement(n.code,null,"'start'")," | ",l.createElement(n.code,null,"'end'")," | ",l.createElement(n.code,null,"'top'")," | ",l.createElement(n.code,null,"'bottom'")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"portal")),l.createElement(n.td,null,"Generates modal using createPortal."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")),l.createElement(n.td,null,"false")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"responsive")," ",l.createElement(n.strong,null,l.createElement(n.em,null,"4.6.0+"))),l.createElement(n.td,null,"Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")," | ",l.createElement(n.code,null,"'sm'")," | ",l.createElement(n.code,null,"'md'")," | ",l.createElement(n.code,null,"'lg'")," | ",l.createElement(n.code,null,"'xl'")," | ",l.createElement(n.code,null,"'xxl'")),l.createElement(n.td,null,"true")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"scroll")),l.createElement(n.td,null,"Allow body scrolling while offcanvas is open"),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")),l.createElement(n.td,null,"false")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"visible")),l.createElement(n.td,null,"Toggle the visibility of offcanvas component."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")),l.createElement(n.td,null,"false"))))),"\n",l.createElement(n.h3,{id:"coffcanvasbody",style:{position:"relative"}},"COffcanvasBody",l.createElement(n.a,{href:"#coffcanvasbody","aria-label":"coffcanvasbody permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { COffcanvasBody } from '@coreui/react'\n// or\nimport COffcanvasBody from '@coreui/react/src/components/offcanvas/COffcanvasBody'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the base component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"coffcanvasheader",style:{position:"relative"}},"COffcanvasHeader",l.createElement(n.a,{href:"#coffcanvasheader","aria-label":"coffcanvasheader permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { COffcanvasHeader } from '@coreui/react'\n// or\nimport COffcanvasHeader from '@coreui/react/src/components/offcanvas/COffcanvasHeader'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the base component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"coffcanvastitle",style:{position:"relative"}},"COffcanvasTitle",l.createElement(n.a,{href:"#coffcanvastitle","aria-label":"coffcanvastitle permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { COffcanvasTitle } from '@coreui/react'\n// or\nimport COffcanvasTitle from '@coreui/react/src/components/offcanvas/COffcanvasTitle'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"component")),l.createElement(n.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")," | ",l.createElement(n.code,null,"ComponentClass<any, any>")," | ",l.createElement(n.code,null,"FunctionComponent<any>")),l.createElement(n.td,null,"-"))))))}var E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(p,e)):p(e)};function v(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var h=t(18722);const b=e=>{let{children:n}=e;return l.createElement(a.Zo,{components:{ScssDocs:e=>l.createElement(h.Jw,e),strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(c.C_,Object.assign({},e.children.props,{color:n})))}return l.createElement("strong",null,e.children)},pre:e=>l.createElement(h.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return l.createElement(c.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...a}=e;return l.createElement(h.UW,a,t&&l.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return l.createElement(h.en,t,l.Children.map(n,(e=>{if(l.isValidElement(e))return l.cloneElement(e)})))}}},n)};function C(e){return l.createElement(b,e,l.createElement(E,e))}b.displayName="MdxLayout"},45392:function(e,n,t){t.d(n,{Zo:function(){return r},ah:function(){return c}});var a=t(2784);const l=a.createContext({});function c(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||s:c(e),a.createElement(l.Provider,{value:r},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-offcanvas-mdx-fdb307b83f59d4a20403.js.map