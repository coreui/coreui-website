"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[4847],{9151:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(5392),a=n(2784),o=n(2097);function r(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",pre:"pre",code:"code",h3:"h3",h4:"h4",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,l.ah)(),e.components),{Example:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Example",!0),a.createElement(a.Fragment,null,a.createElement(t.h2,{id:"examples",style:{position:"relative"}},"Examples",a.createElement(t.a,{href:"#examples","aria-label":"examples permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"Hover over the links below to see tooltips:"),"\n",a.createElement(n,{className:"text-medium-emphasis"},a.createElement(t.p,null,"Tight pants next level keffiyeh ",a.createElement(o.If,{content:"Tooltip text"},a.createElement(o.h7,null,"you probably")),"\nhaven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.\nFarm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel ",a.createElement(o.If,{content:"Tooltip text"},a.createElement(o.h7,null,"have a")),"\nterry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu\nbiodiesel williamsburg marfa, four loko mcsweeney''s cleanse vegan chambray. A really ironic\nartisan ",a.createElement(o.If,{content:"Tooltip text"},a.createElement(o.h7,null,"whatever keytar")),"\nscenester farm-to-table banksy Austin ",a.createElement(o.If,{content:"Tooltip text"},a.createElement(o.h7,null,"twitter handle")),"\nfreegan cred raw denim single-origin coffee viral.")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'<p className="text-medium-emphasis">\n  Tight pants next level keffiyeh\n  <CTooltip content="Tooltip text">\n    <CLink> you probably </CLink>\n  </CTooltip>\n  haven\'t heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown.\n  Farm-to-table seitan, mcsweeney\'s fixie sustainable quinoa 8-bit american apparel\n  <CTooltip content="Tooltip text">\n    <CLink> have a </CLink>\n  </CTooltip>\n  terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu\n  biodiesel williamsburg marfa, four loko mcsweeney\'\'s cleanse vegan chambray. A really ironic\n  artisan\n  <CTooltip content="Tooltip text">\n    <CLink> whatever keytar </CLink>\n  </CTooltip>\n  scenester farm-to-table banksy Austin\n  <CTooltip content="Tooltip text">\n    <CLink> twitter handle </CLink>\n  </CTooltip>\n  freegan cred raw denim single-origin coffee viral.\n</p>\n')),"\n",a.createElement(t.p,null,"Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. Directions are mirrored when using CoreUI in RTL."),"\n",a.createElement(n,null,a.createElement(o.If,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"top"},a.createElement(o.u5,{color:"secondary"},"Tooltip on top")),a.createElement(o.If,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"right"},a.createElement(o.u5,{color:"secondary"},"Tooltip on right")),a.createElement(o.If,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"bottom"},a.createElement(o.u5,{color:"secondary"},"Tooltip on bottom")),a.createElement(o.If,{content:"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",placement:"left"},a.createElement(o.u5,{color:"secondary"},"Tooltip on left"))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'  <CTooltip\n    content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n    placement="top"\n  >\n    <CButton color="secondary">Tooltip on top</CButton>\n  </CTooltip>\n  <CTooltip\n    content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n    placement="right"\n  >\n    <CButton color="secondary">Tooltip on right</CButton>\n  </CTooltip>\n  <CTooltip\n    content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n    placement="bottom"\n  >\n    <CButton color="secondary">Tooltip on bottom</CButton>\n  </CTooltip>\n  <CTooltip\n    content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n    placement="left"\n  >\n    <CButton color="secondary">Tooltip on left</CButton>\n  </CTooltip>\n')),"\n",a.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",a.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",a.createElement(t.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.p,null,"React toltips use local CSS variables on ",a.createElement(t.code,null,".tooltip")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-sass"},"--cui-tooltip-zindex: #{$zindex-tooltip};\n--cui-tooltip-max-width: #{$tooltip-max-width};\n--cui-tooltip-padding-x: #{$tooltip-padding-x};\n--cui-tooltip-padding-y: #{$tooltip-padding-y};\n--cui-tooltip-margin: #{$tooltip-margin};\n--cui-tooltip-font-size: #{$tooltip-font-size};\n--cui-tooltip-color: #{$tooltip-color};\n--cui-tooltip-bg: #{$tooltip-bg};\n--cui-tooltip-border-radius: #{$tooltip-border-radius};\n--cui-tooltip-opacity: #{$tooltip-opacity};\n--cui-tooltip-arrow-width: #{$tooltip-arrow-width};\n--cui-tooltip-arrow-height: #{$tooltip-arrow-height};\n")),"\n",a.createElement(t.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",a.createElement(t.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CTooltip style={vars}>...</CTooltip>\n")),"\n",a.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",a.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-sass"},"$tooltip-font-size:                 $font-size-sm;\n$tooltip-max-width:                 200px;\n$tooltip-color:                     $high-emphasis-inverse;\n$tooltip-bg:                        $black;\n$tooltip-border-radius:             $border-radius;\n$tooltip-opacity:                   .9;\n$tooltip-padding-y:                 $spacer * .25;\n$tooltip-padding-x:                 $spacer * .5;\n$tooltip-margin:                    null;\n\n$tooltip-arrow-width:               .8rem;\n$tooltip-arrow-height:              .4rem;\n$tooltip-arrow-color:               null; \n")),"\n",a.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",a.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.h3,{id:"ctooltip",style:{position:"relative"}},"CTooltip",a.createElement(t.a,{href:"#ctooltip","aria-label":"ctooltip permalink",className:"anchor-link after"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",a.createElement(t.div,null,a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},"import { CTooltip } from '@coreui/react'\n// or\nimport CTooltip from '@coreui/react/src/components/tooltip/CTooltip'\n")),a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,null,"Property"),a.createElement(t.th,null,"Description"),a.createElement(t.th,null,"Type"),a.createElement(t.th,null,"Default"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"className")),a.createElement(t.td,null,"A string of all className you want applied to the component."),a.createElement(t.td,null,a.createElement(t.code,null,"string")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"content")),a.createElement(t.td,null,"Content node for your component."),a.createElement(t.td,null,a.createElement(t.code,null,"ReactNode")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"offset")),a.createElement(t.td,null,"Offset of the popover relative to its target."),a.createElement(t.td,null,a.createElement(t.code,null,"[number, number]")),a.createElement(t.td,null,"[0, 0]")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onHide")),a.createElement(t.td,null,"Callback fired when the component requests to be hidden."),a.createElement(t.td,null,a.createElement(t.code,null,"() => void")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"onShow")),a.createElement(t.td,null,"Callback fired when the component requests to be shown."),a.createElement(t.td,null,a.createElement(t.code,null,"() => void")),a.createElement(t.td,null,"-")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"placement")),a.createElement(t.td,null,"Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property."),a.createElement(t.td,null,a.createElement(t.code,null,"'auto'")," | ",a.createElement(t.code,null,"'top'")," | ",a.createElement(t.code,null,"'right'")," | ",a.createElement(t.code,null,"'bottom'")," | ",a.createElement(t.code,null,"'left'")),a.createElement(t.td,null,"top")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"trigger")),a.createElement(t.td,null,"Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them."),a.createElement(t.td,null,a.createElement(t.code,null,"'hover'")," | ",a.createElement(t.code,null,"'focus'")," | ",a.createElement(t.code,null,"'click'")),a.createElement(t.td,null,"hover")),a.createElement(t.tr,null,a.createElement(t.td,null,a.createElement(t.strong,null,"visible")),a.createElement(t.td,null,"Toggle the visibility of popover component."),a.createElement(t.td,null,a.createElement(t.code,null,"boolean")),a.createElement(t.td,null,"-"))))))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var c=n(1380);const s=e=>{let{children:t}=e;return a.createElement(l.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement(o.C_,Object.assign({},e.children.props,{color:t})))}return a.createElement("strong",null,e.children)},pre:e=>a.createElement(c.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return a.createElement(o.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return a.createElement(o.e_,l,n&&a.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return a.createElement(c.en,n,a.Children.map(t,(e=>{if(a.isValidElement(e))return a.cloneElement(e)})))}}},t)};function m(e){return a.createElement(s,e,a.createElement(i,e))}s.displayName="MdxLayout"},5392:function(e,t,n){n.d(t,{Zo:function(){return i},ah:function(){return o}});var l=n(2784);const a=l.createContext({});function o(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:o(e),l.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-tooltip-mdx-9a4bd91dc3be514aac6e.js.map