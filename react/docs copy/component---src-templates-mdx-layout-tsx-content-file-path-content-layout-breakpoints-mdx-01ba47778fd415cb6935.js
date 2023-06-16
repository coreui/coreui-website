"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[5337],{8817:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var a=t(5392),l=t(2784);function r(e){const n=Object.assign({h2:"h2",a:"a",span:"span",ul:"ul",li:"li",p:"p",strong:"strong",code:"code",em:"em",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",h3:"h3"},(0,a.ah)(),e.components),{Callout:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"core-concepts",style:{position:"relative"}},"Core concepts",l.createElement(n.a,{href:"#core-concepts","aria-label":"core concepts permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Breakpoints are the building blocks of responsive design.")," Use them to control when your layout can be adapted at a particular viewport or device size."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Use media queries to architect your CSS by breakpoint.")," Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use ",l.createElement(n.code,null,"min-width")," in our media queries."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Mobile first, responsive design is the goal.")," CoreUI's CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors."),"\n"),"\n"),"\n",l.createElement(n.h2,{id:"available-breakpoints",style:{position:"relative"}},"Available breakpoints",l.createElement(n.a,{href:"#available-breakpoints","aria-label":"available breakpoints permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"CoreUI for React.js includes six default breakpoints, sometimes referred to as ",l.createElement(n.em,null,"grid tiers"),", for building responsively. These breakpoints can be customized if you're using our source Sass files."),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Breakpoint"),l.createElement(n.th,null,"Class infix"),l.createElement(n.th,null,"Dimensions"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"Extra small"),l.createElement(n.td,null,l.createElement("em",null,"None")),l.createElement(n.td,null,"<576px")),l.createElement(n.tr,null,l.createElement(n.td,null,"Small"),l.createElement(n.td,null,l.createElement(n.code,null,"sm")),l.createElement(n.td,null,"≥576px")),l.createElement(n.tr,null,l.createElement(n.td,null,"Medium"),l.createElement(n.td,null,l.createElement(n.code,null,"md")),l.createElement(n.td,null,"≥768px")),l.createElement(n.tr,null,l.createElement(n.td,null,"Large"),l.createElement(n.td,null,l.createElement(n.code,null,"lg")),l.createElement(n.td,null,"≥992px")),l.createElement(n.tr,null,l.createElement(n.td,null,"Extra large"),l.createElement(n.td,null,l.createElement(n.code,null,"xl")),l.createElement(n.td,null,"≥1200px")),l.createElement(n.tr,null,l.createElement(n.td,null,"Extra extra large"),l.createElement(n.td,null,l.createElement(n.code,null,"xxl")),l.createElement(n.td,null,"≥1400px")))),"\n",l.createElement(n.p,null,"Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions—they don't specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device."),"\n",l.createElement(n.p,null,"These breakpoints are customizable via Sass—you'll find them in a Sass map in our ",l.createElement(n.code,null,"_variables.scss")," stylesheet."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n);\n")),"\n",l.createElement(n.p,null,"For more information and examples on how to modify our Sass maps and variables, please refer to ",l.createElement(n.a,{href:"https://coreui.io/docs/layout/grid#sass",target:"_blank",rel:"nofollow"},"the Sass section of the Grid documentation"),"."),"\n",l.createElement(n.h2,{id:"media-queries",style:{position:"relative"}},"Media queries",l.createElement(n.a,{href:"#media-queries","aria-label":"media queries permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Since CoreUI for React.js is developed to be mobile first, we use a handful of ",l.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",target:"_blank",rel:"nofollow"},"media queries")," to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes."),"\n",l.createElement(n.h3,{id:"min-width",style:{position:"relative"}},"Min-width",l.createElement(n.a,{href:"#min-width","aria-label":"min width permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"CoreUI for React.js primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"// Source mixins\n\n// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`\n@include media-breakpoint-up(sm) { ... }\n@include media-breakpoint-up(md) { ... }\n@include media-breakpoint-up(lg) { ... }\n@include media-breakpoint-up(xl) { ... }\n@include media-breakpoint-up(xxl) { ... }\n\n// Usage\n\n// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint\n.custom-class {\n  display: none;\n}\n@include media-breakpoint-up(sm) {\n  .custom-class {\n    display: block;\n  }\n}\n")),"\n",l.createElement(n.p,null,"These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"// X-Small devices (portrait phones, less than 576px)\n// No media query for `xs` since this is the default in CoreUI\n\n// Small devices (landscape phones, 576px and up)\n@media (min-width: 576px) { ... }\n\n// Medium devices (tablets, 768px and up)\n@media (min-width: 768px) { ... }\n\n// Large devices (desktops, 992px and up)\n@media (min-width: 992px) { ... }\n\n// X-Large devices (large desktops, 1200px and up)\n@media (min-width: 1200px) { ... }\n\n// XX-Large devices (larger desktops, 1400px and up)\n@media (min-width: 1400px) { ... }\n")),"\n",l.createElement(n.h3,{id:"max-width",style:{position:"relative"}},"Max-width",l.createElement(n.a,{href:"#max-width","aria-label":"max width permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"We occasionally use media queries that go in the other direction (the given screen size ",l.createElement(n.em,null,"or smaller"),"):"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"// No media query necessary for xs breakpoint as it's effectively `@media (max-width: 0) { ... }`\n@include media-breakpoint-down(sm) { ... }\n@include media-breakpoint-down(md) { ... }\n@include media-breakpoint-down(lg) { ... }\n@include media-breakpoint-down(xl) { ... }\n@include media-breakpoint-down(xxl) { ... }\n\n// Example: Style from medium breakpoint and down\n@include media-breakpoint-down(md) {\n  .custom-class {\n    display: block;\n  }\n}\n")),"\n",l.createElement(n.p,null,"These mixins take those declared breakpoints, subtract ",l.createElement(n.code,null,".02px")," from them, and use them as our ",l.createElement(n.code,null,"max-width")," values. For example:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"// X-Small devices (portrait phones, less than 576px)\n@media (max-width: 575.98px) { ... }\n\n// Small devices (landscape phones, less than 768px)\n@media (max-width: 767.98px) { ... }\n\n// Medium devices (tablets, less than 992px)\n@media (max-width: 991.98px) { ... }\n\n// Large devices (desktops, less than 1200px)\n@media (max-width: 1199.98px) { ... }\n\n// X-Large devices (large desktops, less than 1400px)\n@media (max-width: 1399.98px) { ... }\n\n// XX-Large devices (larger desktops)\n// No media query since the xxl breakpoint has no upper bound on its width\n")),"\n",l.createElement(t,{color:"warning"},l.createElement(n.p,null,l.createElement("strong",null,"Why subtract .02px?")," Browsers don’t currently support ",l.createElement("a",{href:"https://www.w3.org/TR/mediaqueries-4/#range-context"},"range context queries"),", so we work around the limitations of ",l.createElement("a",{href:"https://www.w3.org/TR/mediaqueries-4/#mq-min-max"},l.createElement("code",null,"min-")," and ",l.createElement("code",null,"max-")," prefixes")," and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision.")),"\n",l.createElement(n.h3,{id:"single-breakpoint",style:{position:"relative"}},"Single breakpoint",l.createElement(n.a,{href:"#single-breakpoint","aria-label":"single breakpoint permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"@include media-breakpoint-only(xs) { ... }\n@include media-breakpoint-only(sm) { ... }\n@include media-breakpoint-only(md) { ... }\n@include media-breakpoint-only(lg) { ... }\n@include media-breakpoint-only(xl) { ... }\n@include media-breakpoint-only(xxl) { ... }\n")),"\n",l.createElement(n.p,null,"For example the ",l.createElement(n.code,null,"@include media-breakpoint-only(md) { ... }")," will result in :"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"@media (min-width: 768px) and (max-width: 991.98px) { ... }\n")),"\n",l.createElement(n.h3,{id:"between-breakpoints",style:{position:"relative"}},"Between breakpoints",l.createElement(n.a,{href:"#between-breakpoints","aria-label":"between breakpoints permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Similarly, media queries may span multiple breakpoint widths:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"@include media-breakpoint-between(md, xl) { ... }\n")),"\n",l.createElement(n.p,null,"Which results in:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},"// Example\n// Apply styles starting from medium devices and up to extra large devices\n@media (min-width: 768px) and (max-width: 1199.98px) { ... }\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var s=t(2097),o=t(1380);const c=e=>{let{children:n}=e;return l.createElement(a.Zo,{components:{strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(s.C_,Object.assign({},e.children.props,{color:n})))}return l.createElement("strong",null,e.children)},pre:e=>l.createElement(o.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return l.createElement(s.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...a}=e;return l.createElement(s.e_,a,t&&l.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return l.createElement(o.en,t,l.Children.map(n,(e=>{if(l.isValidElement(e))return l.cloneElement(e)})))}}},n)};function m(e){return l.createElement(c,e,l.createElement(i,e))}c.displayName="MdxLayout"},5392:function(e,n,t){t.d(n,{Zo:function(){return s},ah:function(){return r}});var a=t(2784);const l=a.createContext({});function r(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||i:r(e),a.createElement(l.Provider,{value:s},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-layout-breakpoints-mdx-01ba47778fd415cb6935.js.map