(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{n1TE:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n("Fcif"),b=n("+I+c"),l=(n("mXGw"),n("/FXl")),c=n("BIGe"),o=n("ZFoC"),i=n("bzer"),r=(n("aD51"),["components"]),s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/4.0/layout/containers.mdx"}});var d={_frontmatter:s},p=c.a;function m(e){var t,n,m,u=e.components,O=Object(b.a)(e,r);return Object(l.b)(p,Object(a.a)({},d,O,{components:u,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"how-they-work"},"How they work"),Object(l.b)("p",null,"Containers are the most basic layout element in CoreUI for React.js and are ",Object(l.b)("strong",{parentName:"p"},"required when using our default grid system"),". Containers are used to contain, pad, and (sometimes) center the content within them. While containers ",Object(l.b)("em",{parentName:"p"},"can")," be nested, most layouts do not require a nested container."),Object(l.b)("p",null,"CoreUI for React.js comes with three different containers:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<CContainer>"),", which sets a ",Object(l.b)("inlineCode",{parentName:"li"},"max-width")," at each responsive breakpoint"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<CContainer fluid>"),", which is ",Object(l.b)("inlineCode",{parentName:"li"},"width: 100%")," at all breakpoints"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<CContainer {sm|md|lg|xl|xxl}>"),", which is ",Object(l.b)("inlineCode",{parentName:"li"},"width: 100%")," until the specified breakpoint")),Object(l.b)("p",null,"The table below illustrates how each container's ",Object(l.b)("inlineCode",{parentName:"p"},"max-width")," compares to the original ",Object(l.b)("inlineCode",{parentName:"p"},"<CContainer>")," and ",Object(l.b)("inlineCode",{parentName:"p"},"<CContainer fluid>")," across each breakpoint."),Object(l.b)("table",{className:"table"},Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("td",{className:"border-dark"}),Object(l.b)("th",{scope:"col"},"Extra small",Object(l.b)("br",null),Object(l.b)("span",{className:"fw-normal"},"<576px")),Object(l.b)("th",{scope:"col"},"Small",Object(l.b)("br",null),Object(l.b)("span",{className:"fw-normal"},"≥576px")),Object(l.b)("th",{scope:"col"},"Medium",Object(l.b)("br",null),Object(l.b)("span",{className:"fw-normal"},"≥768px")),Object(l.b)("th",{scope:"col"},"Large",Object(l.b)("br",null),Object(l.b)("span",{className:"fw-normal"},"≥992px")),Object(l.b)("th",{scope:"col"},"X-Large",Object(l.b)("br",null),Object(l.b)("span",{className:"fw-normal"},"≥1200px")),Object(l.b)("th",{scope:"col"},"XX-Large",Object(l.b)("br",null),Object(l.b)("span",{className:"fw-normal"},"≥1400px")))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",null,"540px"),Object(l.b)("td",null,"720px"),Object(l.b)("td",null,"960px"),Object(l.b)("td",null,"1140px"),Object(l.b)("td",null,"1320px")),Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer sm>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",null,"540px"),Object(l.b)("td",null,"720px"),Object(l.b)("td",null,"960px"),Object(l.b)("td",null,"1140px"),Object(l.b)("td",null,"1320px")),Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer md>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",null,"720px"),Object(l.b)("td",null,"960px"),Object(l.b)("td",null,"1140px"),Object(l.b)("td",null,"1320px")),Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer lg>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",null,"960px"),Object(l.b)("td",null,"1140px"),Object(l.b)("td",null,"1320px")),Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer xl>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",null,"1140px"),Object(l.b)("td",null,"1320px")),Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer xxl>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",null,"1320px")),Object(l.b)("tr",null,Object(l.b)("th",{scope:"row",className:"fw-normal"},Object(l.b)("code",null,"<CContainer fluid>")),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%"),Object(l.b)("td",{className:"text-muted"},"100%")))),Object(l.b)("h2",{id:"default-container"},"Default container"),Object(l.b)("p",null,"Our default ",Object(l.b)("inlineCode",{parentName:"p"},"<CContainer>")," class is a responsive, fixed-width container, meaning its ",Object(l.b)("inlineCode",{parentName:"p"},"max-width")," changes at each breakpoint."),Object(l.b)(o.c,{__position:1,__code:"<CContainer>Content here</CContainer>",__scope:(t={props:O,DefaultLayout:c.a,Playground:o.c,Props:o.d,CCol:i.J,CContainer:i.L,CRow:i.Ub},t.DefaultLayout=c.a,t._frontmatter=s,t),mdxType:"Playground"},Object(l.b)(i.L,{mdxType:"CContainer"},"Content here")),Object(l.b)("h2",{id:"responsive-containers"},"Responsive containers"),Object(l.b)("p",null,"Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply ",Object(l.b)("inlineCode",{parentName:"p"},"max-width"),"s for each of the higher breakpoints. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"<CContainer sm>")," is 100% wide to start until the ",Object(l.b)("inlineCode",{parentName:"p"},"sm")," breakpoint is reached, where it will scale up with ",Object(l.b)("inlineCode",{parentName:"p"},"md"),", ",Object(l.b)("inlineCode",{parentName:"p"},"lg"),", ",Object(l.b)("inlineCode",{parentName:"p"},"xl"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"xxl"),"."),Object(l.b)(o.c,{__position:2,__code:"<CContainer sm>100% wide until small breakpoint</CContainer>\n<CContainer md>100% wide until medium breakpoint</CContainer>\n<CContainer lg>100% wide until large breakpoint</CContainer>\n<CContainer xl>100% wide until extra large breakpoint</CContainer>\n<CContainer xxl>100% wide until extra extra large breakpoint</CContainer>",__scope:(n={props:O,DefaultLayout:c.a,Playground:o.c,Props:o.d,CCol:i.J,CContainer:i.L,CRow:i.Ub},n.DefaultLayout=c.a,n._frontmatter=s,n),mdxType:"Playground"},Object(l.b)(i.L,{sm:!0,mdxType:"CContainer"},"100% wide until small breakpoint"),Object(l.b)(i.L,{md:!0,mdxType:"CContainer"},"100% wide until medium breakpoint"),Object(l.b)(i.L,{lg:!0,mdxType:"CContainer"},"100% wide until large breakpoint"),Object(l.b)(i.L,{xl:!0,mdxType:"CContainer"},"100% wide until extra large breakpoint"),Object(l.b)(i.L,{xxl:!0,mdxType:"CContainer"},"100% wide until extra extra large breakpoint")),Object(l.b)("h2",{id:"fluid-containers"},"Fluid containers"),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},"<CContainer fluid>")," for a full width container, spanning the entire width of the viewport."),Object(l.b)(o.c,{__position:3,__code:"<CContainer fluid>Content here</CContainer>",__scope:(m={props:O,DefaultLayout:c.a,Playground:o.c,Props:o.d,CCol:i.J,CContainer:i.L,CRow:i.Ub},m.DefaultLayout=c.a,m._frontmatter=s,m),mdxType:"Playground"},Object(l.b)(i.L,{fluid:!0,mdxType:"CContainer"},"Content here")),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("h3",{id:"ccontainer"},"CContainer"),Object(l.b)(o.d,{of:i.L,mdxType:"Props"}))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/4.0/layout/containers.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-4-0-layout-containers-mdx-5efc5afc4acbac59a36b.js.map