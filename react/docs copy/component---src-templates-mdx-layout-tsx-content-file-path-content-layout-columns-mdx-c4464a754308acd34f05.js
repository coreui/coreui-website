"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[9808],{7286:function(e,n,l){l.r(n),l.d(n,{default:function(){return u}});var t=l(5392),o=l(2784),a=l(2097);function r(e){const n=Object.assign({h2:"h2",a:"a",span:"span",ul:"ul",li:"li",p:"p",strong:"strong",h3:"h3",div:"div",pre:"pre",code:"code",br:"br",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components),{Example:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),o.createElement(o.Fragment,null,o.createElement(n.h2,{id:"how-they-work",style:{position:"relative"}},"How they work",o.createElement(n.a,{href:"#how-they-work","aria-label":"how they work permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"Columns build on the grid's flexbox architecture.")," Flexbox means we have options for changing individual columns and ",o.createElement(n.a,{href:"./../grid#row-columns"},"modifying groups of columns at the row level"),". You choose how columns grow, shrink, or otherwise change."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"When building grid layouts, all content goes in columns.")," The hierarchy of CoreUI's grid goes from ",o.createElement(n.a,{href:"./../containers"},"container")," to row to column to your content. On rare occasions, you may combine content and column, but be aware there can be unintended consequences."),"\n"),"\n",o.createElement(n.li,null,"\n",o.createElement(n.p,null,o.createElement(n.strong,null,"CoreUI for React.js includes predefined components for creating fast, responsive layouts.")," With ",o.createElement(n.a,{href:"./../breakpoints"},"six breakpoints")," and a dozen columns at each grid tier, we have dozens of components already built for you to create your desired layouts. This can be disabled via Sass if you wish."),"\n"),"\n"),"\n",o.createElement(n.h2,{id:"alignment",style:{position:"relative"}},"Alignment",o.createElement(n.a,{href:"#alignment","aria-label":"alignment permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"Use flexbox alignment utilities to vertically and horizontally align columns."),"\n",o.createElement(n.h3,{id:"vertical-alignment",style:{position:"relative"}},"Vertical alignment",o.createElement(n.a,{href:"#vertical-alignment","aria-label":"vertical alignment permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row docs-example-row-flex-cols"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,{className:"align-items-start"},"    ",o.createElement(a.b7,null,"One of three columns"),"    ",o.createElement(a.b7,null,"One of three columns"),"    ",o.createElement(a.b7,null,"One of three columns"),"  "),"  ",o.createElement(a.rb,{className:"align-items-center"},"    ",o.createElement(a.b7,null,"One of three columns"),"    ",o.createElement(a.b7,null,"One of three columns"),"    ",o.createElement(a.b7,null,"One of three columns"),"  "),"  ",o.createElement(a.rb,{className:"align-items-end"},"    ",o.createElement(a.b7,null,"One of three columns"),"    ",o.createElement(a.b7,null,"One of three columns"),"    ",o.createElement(a.b7,null,"One of three columns"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CContainer>\n  <CRow className="align-items-start">\n    <CCol>One of three columns</CCol>\n    <CCol>One of three columns</CCol>\n    <CCol>One of three columns</CCol>\n  </CRow>\n  <CRow className="align-items-center">\n    <CCol>One of three columns</CCol>\n    <CCol>One of three columns</CCol>\n    <CCol>One of three columns</CCol>\n  </CRow>\n  <CRow className="align-items-end">\n    <CCol>One of three columns</CCol>\n    <CCol>One of three columns</CCol>\n    <CCol>One of three columns</CCol>\n  </CRow>\n</CContainer>\n'))),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row docs-example-row-flex-cols"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{className:"align-self-start"},"One of three columns"),"    ",o.createElement(a.b7,{className:"align-self-center"},"One of three columns"),"    ",o.createElement(a.b7,{className:"align-self-end"},"One of three columns"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CContainer>\n  <CRow>\n    <CCol className="align-self-start">One of three columns</CCol>\n    <CCol className="align-self-center">One of three columns</CCol>\n    <CCol className="align-self-end">One of three columns</CCol>\n  </CRow>\n</CContainer>\n'))),"\n",o.createElement(n.h3,{id:"horizontal-alignment",style:{position:"relative"}},"Horizontal alignment",o.createElement(n.a,{href:"#horizontal-alignment","aria-label":"horizontal alignment permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,{className:"justify-content-start"},"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"  "),"  ",o.createElement(a.rb,{className:"justify-content-center"},"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"  "),"  ",o.createElement(a.rb,{className:"justify-content-end"},"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"  "),"  ",o.createElement(a.rb,{className:"justify-content-around"},"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"  "),"  ",o.createElement(a.rb,{className:"justify-content-between"},"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"  "),"  ",o.createElement(a.rb,{className:"justify-content-evenly"},"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"    ",o.createElement(a.b7,{xs:4},"One of two columns"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CContainer>\n  <CRow className="justify-content-start">\n    <CCol xs={4}>One of two columns</CCol>\n    <CCol xs={4}>One of two columns</CCol>\n  </CRow>\n  <CRow className="justify-content-center">\n    <CCol xs={4}>One of two columns</CCol>\n    <CCol xs={4}>One of two columns</CCol>\n  </CRow>\n  <CRow className="justify-content-end">\n    <CCol xs={4}>One of two columns</CCol>\n    <CCol xs={4}>One of two columns</CCol>\n  </CRow>\n  <CRow className="justify-content-around">\n    <CCol xs={4}>One of two columns</CCol>\n    <CCol xs={4}>One of two columns</CCol>\n  </CRow>\n  <CRow className="justify-content-between">\n    <CCol xs={4}>One of two columns</CCol>\n    <CCol xs={4}>One of two columns</CCol>\n  </CRow>\n  <CRow className="justify-content-evenly">\n    <CCol xs={4}>One of two columns</CCol>\n    <CCol xs={4}>One of two columns</CCol>\n  </CRow>\n</CContainer>\n'))),"\n",o.createElement(n.h3,{id:"column-wrapping",style:{position:"relative"}},"Column wrapping",o.createElement(n.a,{href:"#column-wrapping","aria-label":"column wrapping permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{xs:9},".col-9"),"    ",o.createElement(a.b7,{xs:4},"      .col-4      ",o.createElement(n.br),"      Since 9 + 4 = 13 > 12, this 4-column-wide div gets wrapped onto a new line as one      contiguous unit.    "),"    ",o.createElement(a.b7,{xs:6},"      .col-6      ",o.createElement(n.br),"      Subsequent columns continue along the new line.    "),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<CContainer>\n  <CRow>\n    <CCol xs={9}>.col-9</CCol>\n    <CCol xs={4}>\n      .col-4\n      <br />\n      Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one\n      contiguous unit.\n    </CCol>\n    <CCol xs={6}>\n      .col-6\n      <br />\n      Subsequent columns continue along the new line.\n    </CCol>\n  </CRow>\n</CContainer>\n"))),"\n",o.createElement(n.h3,{id:"column-breaks",style:{position:"relative"}},"Column breaks",o.createElement(n.a,{href:"#column-breaks","aria-label":"column breaks permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"Breaking columns to a new line in flexbox requires a small hack: add an element with ",o.createElement(n.code,null,"width: 100%")," wherever you want to wrap your columns to a new line. Normally this is accomplished with multiple ",o.createElement(n.code,null,"<CRow>"),"s, but not every implementation method can account for this."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{xs:6,sm:3},"      .col-6 .col-sm-3    "),"    ",o.createElement(a.b7,{xs:6,sm:3},"      .col-6 .col-sm-3    "),"    ",o.createElement(n.div,{className:"w-100"}),"    ",o.createElement(a.b7,{xs:6,sm:3},"      .col-6 .col-sm-3    "),"    ",o.createElement(a.b7,{xs:6,sm:3},"      .col-6 .col-sm-3    "),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CContainer>\n  <CRow>\n    <CCol xs={6} sm={3}>\n      .col-6 .col-sm-3\n    </CCol>\n    <CCol xs={6} sm={3}>\n      .col-6 .col-sm-3\n    </CCol>\n    <div className="w-100"></div>\n    <CCol xs={6} sm={3}>\n      .col-6 .col-sm-3\n    </CCol>\n    <CCol xs={6} sm={3}>\n      .col-6 .col-sm-3\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",o.createElement(n.p,null,"You may also apply this break at specific breakpoints with our ",o.createElement(n.a,{href:"https://coreui.io/docs/utilities/display",target:"_blank",rel:"nofollow"},"responsive display utilities"),"."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{xs:6,sm:4},"      .col-6 .col-sm-4    "),"    ",o.createElement(a.b7,{xs:6,sm:4},"      .col-6 .col-sm-4    "),"    ",o.createElement(n.div,{className:"w-100 d-none d-md-block"}),"    ",o.createElement(a.b7,{xs:6,sm:4},"      .col-6 .col-sm-4    "),"    ",o.createElement(a.b7,{xs:6,sm:4},"      .col-6 .col-sm-4    "),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CContainer>\n  <CRow>\n    <CCol xs={6} sm={4}>\n      .col-6 .col-sm-4\n    </CCol>\n    <CCol xs={6} sm={4}>\n      .col-6 .col-sm-4\n    </CCol>\n    <div className="w-100 d-none d-md-block"></div>\n    <CCol xs={6} sm={4}>\n      .col-6 .col-sm-4\n    </CCol>\n    <CCol xs={6} sm={4}>\n      .col-6 .col-sm-4\n    </CCol>\n  </CRow>\n</CContainer>\n'))),"\n",o.createElement(n.h2,{id:"reordering",style:{position:"relative"}},"Reordering",o.createElement(n.a,{href:"#reordering","aria-label":"reordering permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.h3,{id:"order-props",style:{position:"relative"}},"Order props",o.createElement(n.a,{href:"#order-props","aria-label":"order props permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"Use ",o.createElement(n.code,null,"xs|sm|md|lg|xl|xxl={{ order: 1-5 }}")," props for controlling the ",o.createElement(n.strong,null,"visual order")," of your content. These props are responsive, so you can set the ",o.createElement(n.code,null,"order")," by breakpoint (e.g., ",o.createElement(n.code,null,"xs={{ order: 1}} md={{ order: 2}}"),"). Includes support for ",o.createElement(n.code,null,"1")," through ",o.createElement(n.code,null,"5")," across all six grid tiers."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,null,"First in DOM, no order applied"),"    ",o.createElement(a.b7,{xs:{span:!0,order:5}},"Second in DOM, with a larger order"),"    ",o.createElement(a.b7,{xs:{span:!0,order:1}},"Third in DOM, with an order of 1"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<CContainer>\n  <CRow>\n    <CCol>First in DOM, no order applied</CCol>\n    <CCol xs={{ span: true, order: 5 }}>Second in DOM, with a larger order</CCol>\n    <CCol xs={{ span: true, order: 1 }}>Third in DOM, with an order of 1</CCol>\n  </CRow>\n</CContainer>\n"))),"\n",o.createElement(n.p,null,"There are also responsive ",o.createElement(n.code,null,"xs|sm|md|lg|xl|xxl={{ order: 'first' }}")," and ",o.createElement(n.code,null,"xs|sm|md|lg|xl|xxl={{ order: 'last' }}")," props that change the ",o.createElement(n.code,null,"order")," of an element by applying ",o.createElement(n.code,null,"order: -1")," and ",o.createElement(n.code,null,"order: 6"),", respectively. These values can also be intermixed with the numbered ",o.createElement(n.code,null,"xs|sm|md|lg|xl|xxl={{ order: 1-5 }}")," values as needed."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{xs:{span:!0,order:"last"}},"First in DOM, ordered last"),"    ",o.createElement(a.b7,null,"Second in DOM, unordered"),"    ",o.createElement(a.b7,{xs:{span:!0,order:"first"}},"Third in DOM, ordered first"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<CContainer>\n  <CRow>\n    <CCol xs={{ span: true, order: 'last' }}>First in DOM, ordered last</CCol>\n    <CCol>Second in DOM, unordered</CCol>\n    <CCol xs={{ span: true, order: 'first' }}>Third in DOM, ordered first</CCol>\n  </CRow>\n</CContainer>\n"))),"\n",o.createElement(n.h3,{id:"offsetting-columns",style:{position:"relative"}},"Offsetting columns",o.createElement(n.a,{href:"#offsetting-columns","aria-label":"offsetting columns permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"You can offset grid columns in two ways: our responsive ",o.createElement(n.code,null,"xs|sm|md|lg|xl|xxl={{ offset: 0-12 }}")," grid props and our ",o.createElement(n.a,{href:"https://coreui.io/docs/utilities/spacing",target:"_blank",rel:"nofollow"},"margin utilities"),". Grid props are sized to match columns while margins are more useful for quick layouts where the width of the offset is variable."),"\n",o.createElement(n.h4,{id:"offset-prop",style:{position:"relative"}},"Offset prop",o.createElement(n.a,{href:"#offset-prop","aria-label":"offset prop permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"Move columns to the right using ",o.createElement(n.code,null,"md={{ offset: * }}")," props. These props increase the left margin of a column by ",o.createElement(n.code,null,"*")," columns. For example, ",o.createElement(n.code,null,"md={{ offset: 4 }}")," moves ",o.createElement(n.code,null,".col-md-4")," over four columns."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{md:4},".col-md-4"),"    ",o.createElement(a.b7,{md:{span:4,offset:4}},".col-md-4 .offset-md-4"),"  "),"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{md:{span:3,offset:3}},".col-md-3 .offset-md-3"),"    ",o.createElement(a.b7,{md:{span:3,offset:3}},".col-md-3 .offset-md-3"),"  "),"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{md:{span:6,offset:3}},".col-md-6 .offset-md-3"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<CContainer>\n  <CRow>\n    <CCol md={4}>.col-md-4</CCol>\n    <CCol md={{ span: 4, offset: 4 }}>.col-md-4 .offset-md-4</CCol>\n  </CRow>\n  <CRow>\n    <CCol md={{ span: 3, offset: 3 }}>.col-md-3 .offset-md-3</CCol>\n    <CCol md={{ span: 3, offset: 3 }}>.col-md-3 .offset-md-3</CCol>\n  </CRow>\n  <CRow>\n    <CCol md={{ span: 6, offset: 3 }}>.col-md-6 .offset-md-3</CCol>\n  </CRow>\n</CContainer>\n"))),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{sm:5,md:6},"      .col-sm-5 .col-md-6    "),"    ",o.createElement(a.b7,{sm:{span:5,offset:2},md:{span:6,offset:0}},"      .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0    "),"  "),"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{sm:6,md:5,lg:6},"      .col-sm-6 .col-md-5 .col-lg-6    "),"    ",o.createElement(a.b7,{sm:6,md:{span:5,offset:2},lg:{span:6,offset:0}},"      .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0    "),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"<CContainer>\n  <CRow>\n    <CCol sm={5} md={6}>\n      .col-sm-5 .col-md-6\n    </CCol>\n    <CCol sm={{ span: 5, offset: 2 }} md={{ span: 6, offset: 0 }}>\n      .col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0\n    </CCol>\n  </CRow>\n  <CRow>\n    <CCol sm={6} md={5} lg={6}>\n      .col-sm-6 .col-md-5 .col-lg-6\n    </CCol>\n    <CCol sm={6} md={{ span: 5, offset: 2 }} lg={{ span: 6, offset: 0 }}>\n      .col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0\n    </CCol>\n  </CRow>\n</CContainer>\n"))),"\n",o.createElement(n.h4,{id:"margin-utilities",style:{position:"relative"}},"Margin utilities",o.createElement(n.a,{href:"#margin-utilities","aria-label":"margin utilities permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"You can use margin utilities like ",o.createElement(n.code,null,".me-auto")," to force sibling columns away from one another."),"\n",o.createElement(n.div,null,o.createElement(l,{className:"docs-example-row"},o.createElement(a.KB,null,"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{md:4},".col-md-4"),"    ",o.createElement(a.b7,{md:4,className:"ms-auto"},"      .col-md-4 .ms-auto    "),"  "),"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{md:3,className:"ms-md-auto"},"      .col-md-3 .ms-md-auto    "),"    ",o.createElement(a.b7,{md:3,className:"ms-md-auto"},"      .col-md-3 .ms-md-auto    "),"  "),"  ",o.createElement(a.rb,null,"    ",o.createElement(a.b7,{xs:"auto",className:"me-auto"},"      .col-auto .me-auto    "),"    ",o.createElement(a.b7,{xs:"auto"},".col-auto"),"  "))),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CContainer>\n  <CRow>\n    <CCol md={4}>.col-md-4</CCol>\n    <CCol md={4} className="ms-auto">\n      .col-md-4 .ms-auto\n    </CCol>\n  </CRow>\n  <CRow>\n    <CCol md={3} className="ms-md-auto">\n      .col-md-3 .ms-md-auto\n    </CCol>\n    <CCol md={3} className="ms-md-auto">\n      .col-md-3 .ms-md-auto\n    </CCol>\n  </CRow>\n  <CRow>\n    <CCol xs="auto" className="me-auto">\n      .col-auto .me-auto\n    </CCol>\n    <CCol xs="auto">.col-auto</CCol>\n  </CRow>\n</CContainer>\n'))),"\n",o.createElement(n.h2,{id:"standalone-column-component",style:{position:"relative"}},"Standalone column component",o.createElement(n.a,{href:"#standalone-column-component","aria-label":"standalone column component permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.p,null,"The ",o.createElement(n.code,null,"<CCol>")," component can also be used outside a ",o.createElement(n.code,null,"<CRow>")," to give an element a specific width. Whenever column component are used as non direct children of a row, the paddings are omitted."),"\n",o.createElement(n.div,null,o.createElement(l,{className:""},o.createElement(a.b7,{xs:3,className:"bg-light p-3 border"},"  .col-3: width of 25%"),o.createElement(a.b7,{sm:9,className:"bg-light p-3 border"},"  .col-sm-9: width of 75% above sm breakpoint")),o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},'<CCol xs={3} className="bg-light p-3 border">\n  .col-3: width of 25%\n</CCol>\n<CCol sm={9} className="bg-light p-3 border">\n  .col-sm-9: width of 75% above sm breakpoint\n</CCol>\n'))),"\n",o.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",o.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.h3,{id:"ccol",style:{position:"relative"}},"CCol",o.createElement(n.a,{href:"#ccol","aria-label":"ccol permalink",className:"anchor-link after"},o.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",o.createElement(n.div,null,o.createElement(n.pre,null,o.createElement(n.code,{className:"language-jsx"},"import { CCol } from '@coreui/react'\n// or\nimport CCol from '@coreui/react/src/components/grid/CCol'\n")),o.createElement(n.table,null,o.createElement(n.thead,null,o.createElement(n.tr,null,o.createElement(n.th,null,"Property"),o.createElement(n.th,null,"Description"),o.createElement(n.th,null,"Type"),o.createElement(n.th,null,"Default"))),o.createElement(n.tbody,null,o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"className")),o.createElement(n.td,null,"A string of all className you want applied to the base component."),o.createElement(n.td,null,o.createElement(n.code,null,"string")),o.createElement(n.td,null,"-")),o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"lg")),o.createElement(n.td,null,"The number of columns/offset/order on large devices (<1200px)."),o.createElement(n.td,null,o.createElement(n.code,null,"{ 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean")," | ",o.createElement(n.code,null,"{ span: 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean }")," | ",o.createElement(n.code,null,"{ offset: number")," | ",o.createElement(n.code,null,"string }")," | ",o.createElement(n.code,null,"{ order: 'first'")," | ",o.createElement(n.code,null,"'last'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string }}")),o.createElement(n.td,null,"-")),o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"md")),o.createElement(n.td,null,"The number of columns/offset/order on medium devices (<992px)."),o.createElement(n.td,null,o.createElement(n.code,null,"{ 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean")," | ",o.createElement(n.code,null,"{ span: 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean }")," | ",o.createElement(n.code,null,"{ offset: number")," | ",o.createElement(n.code,null,"string }")," | ",o.createElement(n.code,null,"{ order: 'first'")," | ",o.createElement(n.code,null,"'last'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string }}")),o.createElement(n.td,null,"-")),o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"sm")),o.createElement(n.td,null,"The number of columns/offset/order on small devices (<768px)."),o.createElement(n.td,null,o.createElement(n.code,null,"{ 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean")," | ",o.createElement(n.code,null,"{ span: 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean }")," | ",o.createElement(n.code,null,"{ offset: number")," | ",o.createElement(n.code,null,"string }")," | ",o.createElement(n.code,null,"{ order: 'first'")," | ",o.createElement(n.code,null,"'last'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string }}")),o.createElement(n.td,null,"-")),o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"xl")),o.createElement(n.td,null,"The number of columns/offset/order on X-Large devices (<1400px)."),o.createElement(n.td,null,o.createElement(n.code,null,"{ 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean")," | ",o.createElement(n.code,null,"{ span: 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean }")," | ",o.createElement(n.code,null,"{ offset: number")," | ",o.createElement(n.code,null,"string }")," | ",o.createElement(n.code,null,"{ order: 'first'")," | ",o.createElement(n.code,null,"'last'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string }}")),o.createElement(n.td,null,"-")),o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"xs")),o.createElement(n.td,null,"The number of columns/offset/order on extra small devices (<576px)."),o.createElement(n.td,null,o.createElement(n.code,null,"{ 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean")," | ",o.createElement(n.code,null,"{ span: 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean }")," | ",o.createElement(n.code,null,"{ offset: number")," | ",o.createElement(n.code,null,"string }")," | ",o.createElement(n.code,null,"{ order: 'first'")," | ",o.createElement(n.code,null,"'last'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string }}")),o.createElement(n.td,null,"-")),o.createElement(n.tr,null,o.createElement(n.td,null,o.createElement(n.strong,null,"xxl")),o.createElement(n.td,null,"The number of columns/offset/order on XX-Large devices (≥1400px)."),o.createElement(n.td,null,o.createElement(n.code,null,"{ 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean")," | ",o.createElement(n.code,null,"{ span: 'auto'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string")," | ",o.createElement(n.code,null,"boolean }")," | ",o.createElement(n.code,null,"{ offset: number")," | ",o.createElement(n.code,null,"string }")," | ",o.createElement(n.code,null,"{ order: 'first'")," | ",o.createElement(n.code,null,"'last'")," | ",o.createElement(n.code,null,"number")," | ",o.createElement(n.code,null,"string }}")),o.createElement(n.td,null,"-"))))))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?o.createElement(n,e,o.createElement(r,e)):r(e)};var m=l(1380);const s=e=>{let{children:n}=e;return o.createElement(t.Zo,{components:{strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return o.createElement(o.Fragment,null,o.createElement("br",null),o.createElement(a.C_,Object.assign({},e.children.props,{color:n})))}return o.createElement("strong",null,e.children)},pre:e=>o.createElement(m.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return o.createElement(a.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:l,...t}=e;return o.createElement(a.e_,t,l&&o.createElement("h5",null,l),n)},Example:e=>{const{children:n,...l}=e;return o.createElement(m.en,l,o.Children.map(n,(e=>{if(o.isValidElement(e))return o.cloneElement(e)})))}}},n)};function u(e){return o.createElement(s,e,o.createElement(c,e))}s.displayName="MdxLayout"},5392:function(e,n,l){l.d(n,{Zo:function(){return c},ah:function(){return a}});var t=l(2784);const o=t.createContext({});function a(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:l}){let c;return c=l?"function"==typeof e?e({}):e||r:a(e),t.createElement(o.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-layout-columns-mdx-c4464a754308acd34f05.js.map