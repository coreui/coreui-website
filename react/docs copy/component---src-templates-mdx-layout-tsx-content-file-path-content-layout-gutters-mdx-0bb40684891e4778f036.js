"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[3558],{7744:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(5392),r=l(2784),a=l(2097);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",ul:"ul",li:"li",p:"p",strong:"strong",code:"code",div:"div",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,n.ah)(),e.components),{Example:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),r.createElement(r.Fragment,null,r.createElement(t.h2,{id:"how-they-work",style:{position:"relative"}},"How they work",r.createElement(t.a,{href:"#how-they-work","aria-label":"how they work permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Gutters are the gaps between column content, created by horizontal ",r.createElement(t.code,null,"padding"),".")," We set ",r.createElement(t.code,null,"padding-right")," and ",r.createElement(t.code,null,"padding-left")," on each column, and use negative ",r.createElement(t.code,null,"margin")," to offset that at the start and end of each row to align content."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Gutters start at ",r.createElement(t.code,null,"1.5rem")," (",r.createElement(t.code,null,"24px"),") wide.")," This allows us to match our grid to the ",r.createElement(t.a,{href:"https://coreui.io/docs/utilities/spacing",target:"_blank",rel:"nofollow"},"padding and margin spacers")," scale."),"\n"),"\n",r.createElement(t.li,null,"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Gutters can be responsively adjusted.")," Use breakpoint-specific gutter props to modify horizontal gutters, vertical gutters, and all gutters."),"\n"),"\n"),"\n",r.createElement(t.h2,{id:"horizontal-gutters",style:{position:"relative"}},"Horizontal gutters",r.createElement(t.a,{href:"#horizontal-gutters","aria-label":"horizontal gutters permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"{breakpoint}={{ gutterX: * }}")," props can be used to control the horizontal gutter widths. The ",r.createElement(t.code,null,"<CContainer>")," or ",r.createElement(t.code,null,"<CContainer fluid>")," parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we've increased the padding with ",r.createElement(t.code,null,".px-4"),":"),"\n",r.createElement(t.div,null,r.createElement(l,{className:""},r.createElement(a.KB,{className:"px-4"},"  ",r.createElement(a.rb,{xs:{gutterX:5}},"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"  "))),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'<CContainer className="px-4">\n  <CRow xs={{ gutterX: 5 }}>\n    <CCol>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",r.createElement(t.p,null,"An alternative solution is to add a wrapper around the ",r.createElement(t.code,null,"<CRow>")," with the ",r.createElement(t.code,null,".overflow-hidden")," class:"),"\n",r.createElement(t.div,null,r.createElement(l,{className:""},r.createElement(a.KB,{className:"overflow-hidden"},"  ",r.createElement(a.rb,{xs:{gutterX:5}},"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"  "))),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'<CContainer className="overflow-hidden">\n  <CRow xs={{ gutterX: 5 }}>\n    <CCol>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",r.createElement(t.h2,{id:"vertical-gutters",style:{position:"relative"}},"Vertical gutters",r.createElement(t.a,{href:"#vertical-gutters","aria-label":"vertical gutters permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"{breakpoint}={{ gutterY: * }}")," props can be used to control the vertical gutter widths. Like the horizontal gutters, the vertical gutters can cause some overflow below the ",r.createElement(t.code,null,"<CRow>")," at the end of a page. If this occurs, you add a wrapper around ",r.createElement(t.code,null,"<CRow>")," with the ",r.createElement(t.code,null,".overflow-hidden")," class:"),"\n",r.createElement(t.div,null,r.createElement(l,{className:""},r.createElement(a.KB,{className:"overflow-hidden"},"  ",r.createElement(a.rb,{xs:{gutterY:5}},"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"  "))),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'<CContainer className="overflow-hidden">\n  <CRow xs={{ gutterY: 5 }}>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",r.createElement(t.h2,{id:"horizontal--vertical-gutters",style:{position:"relative"}},"Horizontal & vertical gutters",r.createElement(t.a,{href:"#horizontal--vertical-gutters","aria-label":"horizontal  vertical gutters permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"{breakpoint}={{ gutter: * }}")," props can be used to control the horizontal gutter widths, for the following example we use a smaller gutter width, so there won't be a need to add the ",r.createElement(t.code,null,".overflow-hidden")," wrapper class."),"\n",r.createElement(t.div,null,r.createElement(l,{className:""},r.createElement(a.KB,null,"  ",r.createElement(a.rb,{xs:{gutter:2}},"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"    ",r.createElement(a.b7,{xs:{span:6}},"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Custom column padding"),"    "),"  "))),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'<CContainer>\n  <CRow xs={{ gutter: 2 }}>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n    <CCol xs={{ span: 6 }}>\n      <div className="p-3 border bg-light">Custom column padding</div>\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",r.createElement(t.h2,{id:"row-columns-gutters",style:{position:"relative"}},"Row columns gutters",r.createElement(t.a,{href:"#row-columns-gutters","aria-label":"row columns gutters permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"Gutter props can also be added to ",r.createElement(t.a,{href:"../layout/grid#row-columns"},"row columns"),". In the following example, we use responsive row columns and responsive gutter props."),"\n",r.createElement(t.div,null,r.createElement(l,{className:""},r.createElement(a.KB,null,"  ",r.createElement(a.rb,{xs:{cols:2,gutter:2},lg:{cols:5,gutter:3}},"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"    ",r.createElement(a.b7,null,"      ",r.createElement(t.div,{className:"p-3 border bg-light"},"Row column"),"    "),"  "))),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'<CContainer>\n  <CRow xs={{ cols:2, gutter: 2 }} lg={{ cols: 5, gutter: 3}}>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n    <CCol>\n      <div className="p-3 border bg-light">Row column</div>\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",r.createElement(t.h2,{id:"no-gutters",style:{position:"relative"}},"No gutters",r.createElement(t.a,{href:"#no-gutters","aria-label":"no gutters permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"The gutters between columns in our predefined grid props can be removed with ",r.createElement(t.code,null,"{breakpoint}={{ gutter: 0 }}"),". This removes the negative ",r.createElement(t.code,null,"margin"),"s from ",r.createElement(t.code,null,"<CRow>")," and the horizontal ",r.createElement(t.code,null,"padding")," from all immediate children columns."),"\n",r.createElement(t.p,null,r.createElement(t.strong,null,"Need an edge-to-edge design?")," Drop the parent ",r.createElement(t.code,null,"<CContainer>")," or ",r.createElement(t.code,null,"<CContainer fluid>"),"."),"\n",r.createElement(t.p,null,"In practice, here's how it looks. Note you can continue to use this with all other predefined grid props (including column widths, responsive tiers, reorders, and more)."),"\n",r.createElement(t.div,null,r.createElement(l,{className:""},r.createElement(t.div,{className:"docs-example-row"},"  ",r.createElement(a.rb,{xs:{gutter:0}},"    ",r.createElement(a.b7,{sm:6,md:8},".col-sm-6 .col-md-8"),"    ",r.createElement(a.b7,{xs:6,md:4},".col-6 .col-md-4"),"  "))),r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'<div className="docs-example-row">\n  <CRow xs={{ gutter: 0 }}>\n    <CCol sm={6} md={8}>.col-sm-6 .col-md-8</CCol>\n    <CCol xs={6} md={4}>.col-6 .col-md-4</CCol>\n  </CRow>\n</div>\n'))),"\n",r.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",r.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.h3,{id:"ccontainer",style:{position:"relative"}},"CContainer",r.createElement(t.a,{href:"#ccontainer","aria-label":"ccontainer permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.div,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CContainer } from '@coreui/react'\n// or\nimport CContainer from '@coreui/react/src/components/grid/CContainer'\n")),r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"fluid")),r.createElement(t.td,null,"Set container 100% wide, spanning the entire width of the viewport."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"lg")),r.createElement(t.td,null,"Set container 100% wide until large breakpoint."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"md")),r.createElement(t.td,null,"Set container 100% wide until medium breakpoint."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"sm")),r.createElement(t.td,null,"Set container 100% wide until small breakpoint."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xl")),r.createElement(t.td,null,"Set container 100% wide until X-large breakpoint."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xxl")),r.createElement(t.td,null,"Set container 100% wide until XX-large breakpoint."),r.createElement(t.td,null,r.createElement(t.code,null,"boolean")),r.createElement(t.td,null,"-"))))),"\n",r.createElement(t.h3,{id:"crow",style:{position:"relative"}},"CRow",r.createElement(t.a,{href:"#crow","aria-label":"crow permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.div,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CRow } from '@coreui/react'\n// or\nimport CRow from '@coreui/react/src/components/grid/CRow'\n")),r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"lg")),r.createElement(t.td,null,"The number of columns/offset/order on large devices (<1200px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{{ cols: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutter: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterX: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterY: number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"md")),r.createElement(t.td,null,"The number of columns/offset/order on medium devices (<992px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{{ cols: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutter: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterX: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterY: number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"sm")),r.createElement(t.td,null,"The number of columns/offset/order on small devices (<768px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{{ cols: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutter: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterX: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterY: number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xl")),r.createElement(t.td,null,"The number of columns/offset/order on X-Large devices (<1400px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{{ cols: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutter: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterX: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterY: number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xs")),r.createElement(t.td,null,"The number of columns/offset/order on extra small devices (<576px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{{ cols: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutter: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterX: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterY: number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xxl")),r.createElement(t.td,null,"The number of columns/offset/order on XX-Large devices (≥1400px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{{ cols: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutter: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterX: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ gutterY: number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-"))))),"\n",r.createElement(t.h3,{id:"ccol",style:{position:"relative"}},"CCol",r.createElement(t.a,{href:"#ccol","aria-label":"ccol permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.div,null,r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},"import { CCol } from '@coreui/react'\n// or\nimport CCol from '@coreui/react/src/components/grid/CCol'\n")),r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Property"),r.createElement(t.th,null,"Description"),r.createElement(t.th,null,"Type"),r.createElement(t.th,null,"Default"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"className")),r.createElement(t.td,null,"A string of all className you want applied to the base component."),r.createElement(t.td,null,r.createElement(t.code,null,"string")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"lg")),r.createElement(t.td,null,"The number of columns/offset/order on large devices (<1200px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"md")),r.createElement(t.td,null,"The number of columns/offset/order on medium devices (<992px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"sm")),r.createElement(t.td,null,"The number of columns/offset/order on small devices (<768px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xl")),r.createElement(t.td,null,"The number of columns/offset/order on X-Large devices (<1400px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xs")),r.createElement(t.td,null,"The number of columns/offset/order on extra small devices (<576px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.strong,null,"xxl")),r.createElement(t.td,null,"The number of columns/offset/order on XX-Large devices (≥1400px)."),r.createElement(t.td,null,r.createElement(t.code,null,"{ 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean")," | ",r.createElement(t.code,null,"{ span: 'auto'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string")," | ",r.createElement(t.code,null,"boolean }")," | ",r.createElement(t.code,null,"{ offset: number")," | ",r.createElement(t.code,null,"string }")," | ",r.createElement(t.code,null,"{ order: 'first'")," | ",r.createElement(t.code,null,"'last'")," | ",r.createElement(t.code,null,"number")," | ",r.createElement(t.code,null,"string }}")),r.createElement(t.td,null,"-"))))))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)};var m=l(1380);const u=e=>{let{children:t}=e;return r.createElement(n.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(a.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(a.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...n}=e;return r.createElement(a.e_,n,l&&r.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return r.createElement(m.en,l,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function d(e){return r.createElement(u,e,r.createElement(o,e))}u.displayName="MdxLayout"},5392:function(e,t,l){l.d(t,{Zo:function(){return o},ah:function(){return a}});var n=l(2784);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:l}){let o;return o=l?"function"==typeof e?e({}):e||c:a(e),n.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-layout-gutters-mdx-0bb40684891e4778f036.js.map