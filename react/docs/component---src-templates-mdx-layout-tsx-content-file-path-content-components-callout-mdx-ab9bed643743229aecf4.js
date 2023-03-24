"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[221],{104:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var l=t(5392),a=t(2784),r=t(3693);function o(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",strong:"strong",code:"code",div:"div",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components),{Example:t,Callout:o}=n;return o||c("Callout",!0),t||c("Example",!0),a.createElement(a.Fragment,null,a.createElement(n.h2,{id:"examples",style:{position:"relative"}},"Examples",a.createElement(n.a,{href:"#examples","aria-label":"examples permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"Callout component is prepared for any length of text, as well as an optional elements like icons, headings, etc. For a styling, use one of the ",a.createElement(n.strong,null,"required")," contextual props (e.g., ",a.createElement(n.code,null,'color="success"'),")."),"\n",a.createElement(n.div,null,a.createElement(t,{className:""},a.createElement(r.e_,{color:"primary"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"secondary"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"success"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"danger"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"warning"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"info"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"light"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets."),a.createElement(r.e_,{color:"dark"},"  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,  terminology, guidelines, and code snippets.")),a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},'<CCallout color="primary">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="secondary">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="success">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="danger">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="warning">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="info">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="light">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n<CCallout color="dark">\n  New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background,\n  terminology, guidelines, and code snippets.\n</CCallout>\n'))),"\n",a.createElement(o,{color:"info",title:"Conveying meaning to assistive technologies"},a.createElement(n.p,null,"Using color to add meaning only provides a visual indication, which will not be conveyed to\nusers of assistive technologies – such as screen readers. Ensure that information denoted by the\ncolor is either obvious from the content itself (e.g. the visible text), or is included through\nalternative means, such as additional text hidden with the ",a.createElement(n.code,null,".visually-hidden")," class.")),"\n",a.createElement(n.h2,{id:"customizing",style:{position:"relative"}},"Customizing",a.createElement(n.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",a.createElement(n.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.p,null,"React callouts use local CSS variables on ",a.createElement(n.code,null,".callout")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-sass"},"--cui-callout-padding-x: #{$callout-padding-x};\n--cui-callout-padding-y: #{$callout-padding-y};\n--cui-callout-margin-x: #{$callout-margin-x};\n--cui-callout-margin-y: #{$callout-margin-y};\n--cui-callout-border-width: #{$callout-border-width};\n--cui-callout-border-color: #{$callout-border-color};\n--cui-callout-border-left-width: #{$callout-border-left-width};\n--cui-callout-border-radius: #{$callout-border-radius};\n")),"\n",a.createElement(n.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",a.createElement(n.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CCallout style={vars}>...</CCallout>\n")),"\n",a.createElement(n.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",a.createElement(n.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-sass"},'$callout-padding-y:                 $spacer;\n$callout-padding-x:                 $spacer;\n$callout-margin-y:                  $spacer;\n$callout-margin-x:                  0;\n$callout-border-radius:             $border-radius;\n$callout-border-width:              $border-width;\n$callout-border-color:              $border-color;\n$callout-border-left-width:         (4 * $callout-border-width);\n\n$callout-variants: (\n  "primary":    $primary,\n  "secondary":  $secondary,\n  "success":    $success,\n  "danger":     $danger,\n  "warning":    $warning,\n  "info":       $info,\n  "light":      $light,\n  "dark":       $dark\n);\n')),"\n",a.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.h3,{id:"ccallout",style:{position:"relative"}},"CCallout",a.createElement(n.a,{href:"#ccallout","aria-label":"ccallout permalink",className:"anchor-link after"},a.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(n.div,null,a.createElement(n.pre,null,a.createElement(n.code,{className:"language-jsx"},"import { CCallout } from '@coreui/react'\n// or\nimport CCallout from '@coreui/react/src/components/callout/CCallout'\n")),a.createElement(n.table,null,a.createElement(n.thead,null,a.createElement(n.tr,null,a.createElement(n.th,null,"Property"),a.createElement(n.th,null,"Description"),a.createElement(n.th,null,"Type"),a.createElement(n.th,null,"Default"))),a.createElement(n.tbody,null,a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.strong,null,"className")),a.createElement(n.td,null,"A string of all className you want applied to the base component."),a.createElement(n.td,null,a.createElement(n.code,null,"string")),a.createElement(n.td,null,"-")),a.createElement(n.tr,null,a.createElement(n.td,null,a.createElement(n.strong,null,"color")),a.createElement(n.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),a.createElement(n.td,null,a.createElement(n.code,null,"'primary'")," | ",a.createElement(n.code,null,"'secondary'")," | ",a.createElement(n.code,null,"'success'")," | ",a.createElement(n.code,null,"'danger'")," | ",a.createElement(n.code,null,"'warning'")," | ",a.createElement(n.code,null,"'info'")," | ",a.createElement(n.code,null,"'dark'")," | ",a.createElement(n.code,null,"'light'")," | ",a.createElement(n.code,null,"string")),a.createElement(n.td,null,"-"))))))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(o,e)):o(e)};function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=t(1380);const u=e=>{let{children:n}=e;return a.createElement(l.Zo,{components:{strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(r.C_,Object.assign({},e.children.props,{color:n})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(s.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(r.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:t,...l}=e;return a.createElement(r.e_,l,t&&a.createElement("h5",null,t),n)},Example:e=>{const{children:n,...t}=e;return a.createElement(s.en,t,a.Children.map(n,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},n)};function d(e){return a.createElement(u,e,a.createElement(i,e))}u.displayName="MdxLayout"},5392:function(e,n,t){t.d(n,{Zo:function(){return i},ah:function(){return r}});var l=t(2784);const a=l.createContext({});function r(e){const n=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),l.createElement(a.Provider,{value:i},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-callout-mdx-ab9bed643743229aecf4.js.map