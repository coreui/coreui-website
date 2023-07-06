"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[7056],{26859:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var a=r(45392),t=r(2784);function i(e){const n=Object.assign({p:"p",a:"a",strong:"strong",code:"code",h2:"h2",span:"span",pre:"pre"},(0,a.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,"CoreUI includes around two dozen ",t.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"nofollow"},"CSS custom properties (variables)")," in its compiled CSS, with dozens more on the way for improved customization on a per-component basis. These provide easy access to commonly used values like our theme colors, breakpoints, and primary font stacks when working in your browser's inspector, a code sandbox, or general prototyping."),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"All our custom properties are prefixed with ",t.createElement(n.code,null,"cui-"))," to avoid conflicts with third party CSS."),"\n",t.createElement(n.h2,{id:"root-variables",style:{position:"relative"}},"Root variables",t.createElement(n.a,{href:"#root-variables","aria-label":"root variables permalink",className:"anchor-link after"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",t.createElement(n.p,null,"Here are the variables we include (note that the ",t.createElement(n.code,null,":root")," is required) that can be accessed anywhere CoreUI's CSS is loaded. They're located in our ",t.createElement(n.code,null,"_root.scss")," file and included in our compiled dist files."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-css"},':root {\n  --cui-blue: #0d6efd;\n  --cui-indigo: #6610f2;\n  --cui-purple: #6f42c1;\n  --cui-pink: #d63384;\n  --cui-red: #dc3545;\n  --cui-orange: #fd7e14;\n  --cui-yellow: #ffc107;\n  --cui-green: #198754;\n  --cui-teal: #20c997;\n  --cui-cyan: #0dcaf0;\n  --cui-black: #000015;\n  --cui-white: #fff;\n  --cui-gray: #8a93a2;\n  --cui-gray-dark: #636f83;\n  --cui-gray-100: #ebedef;\n  --cui-gray-200: #d8dbe0;\n  --cui-gray-300: #c4c9d0;\n  --cui-gray-400: #b1b7c1;\n  --cui-gray-500: #9da5b1;\n  --cui-gray-600: #8a93a2;\n  --cui-gray-700: #768192;\n  --cui-gray-800: #636f83;\n  --cui-gray-900: #4f5d73;\n  --cui-primary: #321fdb;\n  --cui-secondary: #9da5b1;\n  --cui-success: #2eb85c;\n  --cui-info: #39f;\n  --cui-warning: #f9b115;\n  --cui-danger: #e55353;\n  --cui-light: #ebedef;\n  --cui-dark: #4f5d73;\n  --cui-primary-rgb: 50, 31, 219;\n  --cui-secondary-rgb: 157, 165, 177;\n  --cui-success-rgb: 46, 184, 92;\n  --cui-info-rgb: 51, 153, 255;\n  --cui-warning-rgb: 249, 177, 21;\n  --cui-danger-rgb: 229, 83, 83;\n  --cui-light-rgb: 235, 237, 239;\n  --cui-dark-rgb: 79, 93, 115;\n  --cui-white-rgb: 255, 255, 255;\n  --cui-black-rgb: 0, 0, 21;\n  --cui-body-color-rgb: 44, 56, 74;\n  --cui-body-bg-rgb: 255, 255, 255;\n  --cui-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --cui-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  --cui-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --cui-body-font-family: var(--cui-font-sans-serif);\n  --cui-body-font-size: 1rem;\n  --cui-body-font-weight: 400;\n  --cui-body-line-height: 1.5;\n  --cui-body-color: rgba(44, 56, 74, 0.95);\n  --cui-body-bg: #fff;\n  --cui-border-width: 1px;\n  --cui-border-style: solid;\n  --cui-border-color: #d8dbe0;\n  --cui-border-color-translucent: rgba(0, 0, 21, 0.175);\n  --cui-border-radius: 0.375rem;\n  --cui-border-radius-sm: 0.25rem;\n  --cui-border-radius-lg: 0.5rem;\n  --cui-border-radius-xl: 1rem;\n  --cui-border-radius-2xl: 2rem;\n  --cui-border-radius-pill: 50rem;\n  --cui-heading-color: unset;\n  --cui-link-color: #321fdb;\n  --cui-link-hover-color: #2819af;\n  --cui-code-color: #d63384;\n  --cui-highlight-bg: #fff3cd;\n}\n')),"\n",t.createElement(n.h2,{id:"component-variables",style:{position:"relative"}},"Component variables",t.createElement(n.a,{href:"#component-variables","aria-label":"component variables permalink",className:"anchor-link after"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",t.createElement(n.p,null,"CoreUI is increasingly making use of custom properties as local variables for various components. This way we reduce our compiled CSS, ensure styles aren't inherited in places like nested tables, and allow some basic restyling and extending of CoreUI components after Sass compilation."),"\n",t.createElement(n.p,null,"Whenever possible, we'll assign CSS variables at the base component level (e.g., ",t.createElement(n.code,null,".navbar")," for navbar and its sub-components). This reduces guessing on where and how to customize, and allows for easy modifications by our team in future updates."),"\n",t.createElement(n.h2,{id:"prefix",style:{position:"relative"}},"Prefix",t.createElement(n.a,{href:"#prefix","aria-label":"prefix permalink",className:"anchor-link after"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",t.createElement(n.p,null,"Most CSS variables use a prefix to avoid collisions with your own codebase. This prefix is in addition to the ",t.createElement(n.code,null,"--")," that's required on every CSS variable."),"\n",t.createElement(n.p,null,"Customize the prefix via the ",t.createElement(n.code,null,"$prefix")," Sass variable. By default, it's set to ",t.createElement(n.code,null,"cui-")," (note the trailing dash)."),"\n",t.createElement(n.h2,{id:"examples",style:{position:"relative"}},"Examples",t.createElement(n.a,{href:"#examples","aria-label":"examples permalink",className:"anchor-link after"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",t.createElement(n.p,null,"CSS variables offer similar flexibility to Sass's variables, but without the need for compilation before being served to the browser. For example, here we're resetting our page's font and link styles with CSS variables."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-css"},"body {\n  font: 1rem/1.5 var(--cui-font-sans-serif);\n}\na {\n  color: var(--cui-blue);\n}\n")),"\n",t.createElement(n.h2,{id:"grid-breakpoints",style:{position:"relative"}},"Grid breakpoints",t.createElement(n.a,{href:"#grid-breakpoints","aria-label":"grid breakpoints permalink",className:"anchor-link after"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",t.createElement(n.p,null,"While we include our grid breakpoints as CSS variables (except for ",t.createElement(n.code,null,"xs"),"), be aware that ",t.createElement(n.strong,null,"CSS variables do not work in media queries"),". This is by design in the CSS spec for variables, but may change in coming years with support for ",t.createElement(n.code,null,"env()")," variables. Check out ",t.createElement(n.a,{href:"https://stackoverflow.com/a/47212942",target:"_blank",rel:"nofollow"},"this Stack Overflow answer")," for some helpful links. In the mean time, you can use these variables in other CSS situations, as well as in your JavaScript."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?t.createElement(n,e,t.createElement(i,e)):i(e)},l=r(70788),c=r(18722);const s=e=>{let{children:n}=e;return t.createElement(a.Zo,{components:{ScssDocs:e=>t.createElement(c.Jw,e),strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return t.createElement(t.Fragment,null,t.createElement("br",null),t.createElement(l.C_,Object.assign({},e.children.props,{color:n})))}return t.createElement("strong",null,e.children)},pre:e=>t.createElement(c.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return t.createElement(l.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:r,...a}=e;return t.createElement(c.UW,a,r&&t.createElement("h5",null,r),n)},Example:e=>{const{children:n,...r}=e;return t.createElement(c.en,r,t.Children.map(n,(e=>{if(t.isValidElement(e))return t.cloneElement(e)})))}}},n)};function u(e){return t.createElement(s,e,t.createElement(o,e))}s.displayName="MdxLayout"},45392:function(e,n,r){r.d(n,{Zo:function(){return l},ah:function(){return i}});var a=r(2784);const t=a.createContext({});function i(e){const n=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||o:i(e),a.createElement(t.Provider,{value:l},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-customize-css-variables-mdx-3238e7d641d3652a2f93.js.map