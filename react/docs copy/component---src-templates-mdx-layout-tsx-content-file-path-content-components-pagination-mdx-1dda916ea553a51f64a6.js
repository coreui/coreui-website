"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[2386],{5874:function(e,n,a){a.r(n),a.d(n,{default:function(){return m}});var t=a(5392),l=a(2784),i=a(2097);function r(e){const n=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",em:"em",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,t.ah)(),e.components),{Example:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),l.createElement(l.Fragment,null,l.createElement(n.h2,{id:"overview",style:{position:"relative"}},"Overview",l.createElement(n.a,{href:"#overview","aria-label":"overview permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping ",l.createElement(n.code,null,"<nav>")," element to identify it as a navigation section to screen readers and other assistive technologies."),"\n",l.createElement(n.p,null,"In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive ",l.createElement(n.code,null,"aria-label")," for the ",l.createElement(n.code,null,"<nav>")," to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be ",l.createElement(n.code,null,'aria-label="Search results pages"'),"."),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{"aria-label":"Page navigation example"},"  ",l.createElement(i.tn,null,"Previous"),"  ",l.createElement(i.tn,null,"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,null,"Next"))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination aria-label="Page navigation example">\n  <CPaginationItem>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.h2,{id:"working-with-icons",style:{position:"relative"}},"Working with icons",l.createElement(n.a,{href:"#working-with-icons","aria-label":"working with icons permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with ",l.createElement(n.code,null,"aria")," attributes."),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{"aria-label":"Page navigation example"},"  ",l.createElement(i.tn,{"aria-label":"Previous"},"    ",l.createElement(n.span,{"aria-hidden":"true"},"«"),"  "),"  ",l.createElement(i.tn,null,"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,{"aria-label":"Next"},"    ",l.createElement(n.span,{"aria-hidden":"true"},"»"),"  "))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination aria-label="Page navigation example">\n  <CPaginationItem aria-label="Previous">\n    <span aria-hidden="true">&laquo;</span>\n  </CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem aria-label="Next">\n    <span aria-hidden="true">&raquo;</span>\n  </CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.h2,{id:"disabled-and-active-states",style:{position:"relative"}},"Disabled and active states",l.createElement(n.a,{href:"#disabled-and-active-states","aria-label":"disabled and active states permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Pagination links are customizable for different circumstances. Use ",l.createElement(n.code,null,"disabled")," for links that appear un-clickable and ",l.createElement(n.code,null,".active")," to indicate the current page."),"\n",l.createElement(n.p,null,"While the ",l.createElement(n.code,null,"disabled")," prop uses ",l.createElement(n.code,null,"pointer-events: none")," to ",l.createElement(n.em,null,"try")," to disable the link functionality of ",l.createElement(n.code,null,"<a>"),"s, that CSS property is not yet standardized and doesn't account for keyboard navigation. As such, we always add ",l.createElement(n.code,null,'tabindex="-1"')," on disabled links and use custom JavaScript to fully disable their functionality."),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{"aria-label":"Page navigation example"},"  ",l.createElement(i.tn,{"aria-label":"Previous",disabled:!0},"    ",l.createElement(n.span,{"aria-hidden":"true"},"«"),"  "),"  ",l.createElement(i.tn,{active:!0},"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,{"aria-label":"Next"},"    ",l.createElement(n.span,{"aria-hidden":"true"},"»"),"  "))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination aria-label="Page navigation example">\n  <CPaginationItem aria-label="Previous" disabled>\n    <span aria-hidden="true">&laquo;</span>\n  </CPaginationItem>\n  <CPaginationItem active>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem aria-label="Next">\n    <span aria-hidden="true">&raquo;</span>\n  </CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.h2,{id:"sizing",style:{position:"relative"}},"Sizing",l.createElement(n.a,{href:"#sizing","aria-label":"sizing permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Fancy larger or smaller pagination? Add ",l.createElement(n.code,null,'size="lg"')," or ",l.createElement(n.code,null,'size="sm"')," for additional sizes."),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{size:"lg","aria-label":"Page navigation example"},"  ",l.createElement(i.tn,null,"Previous"),"  ",l.createElement(i.tn,null,"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,null,"Next"))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination size="lg" aria-label="Page navigation example">\n  <CPaginationItem>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{size:"sm","aria-label":"Page navigation example"},"  ",l.createElement(i.tn,null,"Previous"),"  ",l.createElement(i.tn,null,"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,null,"Next"))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination size="sm" aria-label="Page navigation example">\n  <CPaginationItem>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.h2,{id:"alignment",style:{position:"relative"}},"Alignment",l.createElement(n.a,{href:"#alignment","aria-label":"alignment permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"Change the alignment of pagination components with ",l.createElement(n.code,null,"align")," property."),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{align:"center","aria-label":"Page navigation example"},"  ",l.createElement(i.tn,{disabled:!0},"Previous"),"  ",l.createElement(i.tn,null,"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,null,"Next"))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination align="center" aria-label="Page navigation example">\n  <CPaginationItem disabled>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.div,null,l.createElement(a,{className:""},l.createElement(i.E7,{align:"end","aria-label":"Page navigation example"},"  ",l.createElement(i.tn,{disabled:!0},"Previous"),"  ",l.createElement(i.tn,null,"1"),"  ",l.createElement(i.tn,null,"2"),"  ",l.createElement(i.tn,null,"3"),"  ",l.createElement(i.tn,null,"Next"))),l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<CPagination align="end" aria-label="Page navigation example">\n  <CPaginationItem disabled>Previous</CPaginationItem>\n  <CPaginationItem>1</CPaginationItem>\n  <CPaginationItem>2</CPaginationItem>\n  <CPaginationItem>3</CPaginationItem>\n  <CPaginationItem>Next</CPaginationItem>\n</CPagination>\n'))),"\n",l.createElement(n.h2,{id:"customizing",style:{position:"relative"}},"Customizing",l.createElement(n.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",l.createElement(n.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.p,null,"React pagination use local CSS variables on ",l.createElement(n.code,null,".pagination")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sass"},"--cui-pagination-padding-x: #{$pagination-padding-x};\n--cui-pagination-padding-y: #{$pagination-padding-y};\n--cui-pagination-font-size: #{$pagination-font-size});\n--cui-pagination-color: #{$pagination-color};\n--cui-pagination-bg: #{$pagination-bg};\n--cui-pagination-border-width: #{$pagination-border-width};\n--cui-pagination-border-color: #{$pagination-border-color};\n--cui-pagination-border-radius: #{$pagination-border-radius};\n--cui-pagination-hover-color: #{$pagination-hover-color};\n--cui-pagination-hover-bg: #{$pagination-hover-bg};\n--cui-pagination-hover-border-color: #{$pagination-hover-border-color};\n--cui-pagination-focus-color: #{$pagination-focus-color};\n--cui-pagination-focus-bg: #{$pagination-focus-bg};\n--cui-pagination-focus-box-shadow: #{$pagination-focus-box-shadow};\n--cui-pagination-active-color: #{$pagination-active-color};\n--cui-pagination-active-bg: #{$pagination-active-bg};\n--cui-pagination-active-border-color: #{$pagination-active-border-color};\n--cui-pagination-disabled-color: #{$pagination-disabled-color};\n--cui-pagination-disabled-bg: #{$pagination-disabled-bg};\n--cui-pagination-disabled-border-color: #{$pagination-disabled-border-color};\n")),"\n",l.createElement(n.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",l.createElement(n.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CPagination style={vars}>...</CCard>\n")),"\n",l.createElement(n.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",l.createElement(n.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sass"},"$pagination-padding-y:              .375rem;\n$pagination-padding-x:              .75rem;\n$pagination-padding-y-sm:           .25rem;\n$pagination-padding-x-sm:           .5rem;\n$pagination-padding-y-lg:           .75rem;\n$pagination-padding-x-lg:           1.5rem;\n\n$pagination-font-size:              $font-size-base;\n\n$pagination-color:                  var(--cui-link-color);\n$pagination-bg:                     $white;\n$pagination-border-radius:          $border-radius;\n$pagination-border-width:           $border-width;\n$pagination-margin-start:           calc($pagination-border-width * -1); // stylelint-disable-line function-disallowed-list\n$pagination-border-color:           $gray-300;\n\n$pagination-focus-color:            var(--cui-link-hover-color);\n$pagination-focus-bg:               $gray-200;\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow;\n$pagination-focus-outline:          0;\n\n$pagination-hover-color:            var(--cui-link-hover-color);\n$pagination-hover-bg:               $gray-200;\n$pagination-hover-border-color:     $gray-300;\n\n$pagination-active-color:           $component-active-color;\n$pagination-active-bg:              $component-active-bg;\n$pagination-active-border-color:    $pagination-active-bg;\n\n$pagination-disabled-color:         $gray-600;\n$pagination-disabled-bg:            $white;\n$pagination-disabled-border-color:  $gray-300;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n\n$pagination-border-radius-sm:       $border-radius-sm;\n$pagination-border-radius-lg:       $border-radius-lg;\n")),"\n",l.createElement(n.h2,{id:"api",style:{position:"relative"}},"API",l.createElement(n.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.h3,{id:"cpagination",style:{position:"relative"}},"CPagination",l.createElement(n.a,{href:"#cpagination","aria-label":"cpagination permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CPagination } from '@coreui/react'\n// or\nimport CPagination from '@coreui/react/src/components/pagination/CPagination'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"align")),l.createElement(n.td,null,"Set the alignment of pagination components."),l.createElement(n.td,null,l.createElement(n.code,null,"'start'")," | ",l.createElement(n.code,null,"'center'")," | ",l.createElement(n.code,null,"'end'")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"className")),l.createElement(n.td,null,"A string of all className you want applied to the base component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"size")),l.createElement(n.td,null,"Size the component small or large."),l.createElement(n.td,null,l.createElement(n.code,null,"'sm'")," | ",l.createElement(n.code,null,"'lg'")),l.createElement(n.td,null,"-"))))),"\n",l.createElement(n.h3,{id:"cpaginationitem",style:{position:"relative"}},"CPaginationItem",l.createElement(n.a,{href:"#cpaginationitem","aria-label":"cpaginationitem permalink",className:"anchor-link after"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",l.createElement(n.div,null,l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},"import { CPaginationItem } from '@coreui/react'\n// or\nimport CPaginationItem from '@coreui/react/src/components/pagination/CPaginationItem'\n")),l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Property"),l.createElement(n.th,null,"Description"),l.createElement(n.th,null,"Type"),l.createElement(n.th,null,"Default"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"active")),l.createElement(n.td,null,"Toggle the active state for the component."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"component")),l.createElement(n.td,null,"Component used for the root node. Either a string to use a HTML element or a component."),l.createElement(n.td,null,l.createElement(n.code,null,"string")," | ",l.createElement(n.code,null,"ComponentClass<any, any>")," | ",l.createElement(n.code,null,"FunctionComponent<any>")),l.createElement(n.td,null,"-")),l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.strong,null,"disabled")),l.createElement(n.td,null,"Toggle the disabled state for the component."),l.createElement(n.td,null,l.createElement(n.code,null,"boolean")),l.createElement(n.td,null,"-"))))))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var c=a(1380);const s=e=>{let{children:n}=e;return l.createElement(t.Zo,{components:{strong:e=>{if("em"==e.children.type){const n=e.children.props.children.includes("Deprecated")?"warning":"primary";return l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement(i.C_,Object.assign({},e.children.props,{color:n})))}return l.createElement("strong",null,e.children)},pre:e=>l.createElement(c.dn,e),table:e=>{const n=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return l.createElement(i.Sx,Object.assign({responsive:!0},e,{className:"table "+(n&&" table-striped table-api")}))},Callout:e=>{const{children:n,title:a,...t}=e;return l.createElement(i.e_,t,a&&l.createElement("h5",null,a),n)},Example:e=>{const{children:n,...a}=e;return l.createElement(c.en,a,l.Children.map(n,(e=>{if(l.isValidElement(e))return l.cloneElement(e)})))}}},n)};function m(e){return l.createElement(s,e,l.createElement(o,e))}s.displayName="MdxLayout"},5392:function(e,n,a){a.d(n,{Zo:function(){return o},ah:function(){return i}});var t=a(2784);const l=t.createContext({});function i(e){const n=t.useContext(l);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||r:i(e),t.createElement(l.Provider,{value:o},n)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-pagination-mdx-1dda916ea553a51f64a6.js.map