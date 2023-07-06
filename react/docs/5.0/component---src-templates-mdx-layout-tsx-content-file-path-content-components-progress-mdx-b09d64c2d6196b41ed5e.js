"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[2382],{14665:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var r=l(45392),n=l(2784),a=l(1017);function s(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",div:"div",pre:"pre",strong:"strong",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,r.ah)(),e.components),{Example:l,Callout:s,ScssDocs:c}=t;return s||o("Callout",!0),l||o("Example",!0),c||o("ScssDocs",!0),n.createElement(n.Fragment,null,n.createElement(t.h2,{id:"example",style:{position:"relative"}},"Example",n.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use ",n.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress",target:"_blank",rel:"nofollow"},"the HTML5 ",n.createElement(t.code,null,"<progress>")," element"),", ensuring you can stack progress bars, animate them, and place text labels over them."),"\n",n.createElement(t.h2,{id:"basic-usage",style:{position:"relative"}},"Basic usage",n.createElement(t.a,{href:"#basic-usage","aria-label":"basic usage permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{value:0}),n.createElement(a.yI,{value:25}),n.createElement(a.yI,{value:50}),n.createElement(a.yI,{value:75}),n.createElement(a.yI,{value:100})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"<CProgress value={0} />\n<CProgress value={25} />\n<CProgress value={50} />\n<CProgress value={75} />\n<CProgress value={100} />\n"))),"\n",n.createElement(t.h2,{id:"labels",style:{position:"relative"}},"Labels",n.createElement(t.a,{href:"#labels","aria-label":"labels permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Add labels to your progress bars by placing text within the ",n.createElement(t.code,null,"<CProgressBar>"),"."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{value:25},"25%")),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"<CProgress value={25}>25%</CProgress>\n"))),"\n",n.createElement(t.p,null,"Please note that the default setting for the content within the ",n.createElement(t.code,null,"<CProgressBar />")," is to be limited by the ",n.createElement(t.code,null,"overflow: hidden property"),", preventing it from extending beyond the bar's boundaries. If the progress bar is shorter than its label, the content will be truncated and could be difficult to read. To modify this behavior, you can utilize the ",n.createElement(t.code,null,".overflow-visible")," class from the overflow utilities. However, it is important to specify a specific text color to ensure readability. It's worth noting that this approach currently does not consider color modes."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{value:10},"  ",n.createElement(a.SD,{className:"overflow-visible text-dark px-2",color:"success"},"Long label text for the progress bar, set to a dark color"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress value={10}>\n  <CProgressBar className="overflow-visible text-dark px-2" color="success">Long label text for the progress bar, set to a dark color</CProgressBar>\n</CProgress>\n'))),"\n",n.createElement(t.p,null,"Since ",n.createElement(t.strong,null,"v4.9.0")," you can also use the ",n.createElement(t.code,null,"progressBarClassName")," property directly on the ",n.createElement(t.code,null,"<CProgress />")," component to achieve the same."),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress progressBarClassName="overflow-visible text-dark px-2" color="success" value={10}>Long label text for the progress bar, set to a dark color</CProgress>\n')),"\n",n.createElement(t.h2,{id:"height",style:{position:"relative"}},"Height",n.createElement(t.a,{href:"#height","aria-label":"height permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"We only set a ",n.createElement(t.code,null,"height")," value on the ",n.createElement(t.code,null,"<CProgress>"),", so if you change that value the inner ",n.createElement(t.code,null,"<CProgressBar>")," will automatically resize accordingly."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{height:1,value:25}),n.createElement(a.yI,{height:20,value:25})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"<CProgress height={1} value={25} />\n<CProgress height={20} value={25} />\n"))),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{height:1},n.createElement(a.SD,{value:25})),n.createElement(a.yI,{height:20},n.createElement(a.SD,{value:25}))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"<CProgress height={1}>\n  <CProgressBar value={25}></CProgressBar>\n</CProgress>\n<CProgress height={20}>\n  <CProgressBar value={25}></CProgressBar>\n</CProgress>\n"))),"\n",n.createElement(t.h2,{id:"backgrounds",style:{position:"relative"}},"Backgrounds",n.createElement(t.a,{href:"#backgrounds","aria-label":"backgrounds permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Use ",n.createElement(t.code,null,"color")," prop to change the appearance of individual progress bars."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{color:"success",value:25}),n.createElement(a.yI,{color:"info",value:50}),n.createElement(a.yI,{color:"warning",value:75}),n.createElement(a.yI,{color:"danger",value:100})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress color="success" value={25} />\n<CProgress color="info" value={50} />\n<CProgress color="warning" value={75} />\n<CProgress color="danger" value={100} />\n'))),"\n",n.createElement(t.p,null,"Ensure that when you incorporate labels into progress bars featuring a custom background color, you also select an appropriate text color to ensure readability and maintain adequate contrast for the labels."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{color:"success",value:25},"  ",n.createElement(a.SD,null,"25%")),n.createElement(a.yI,{color:"info",value:50},"  ",n.createElement(a.SD,{className:"text-dark"},"50%")),n.createElement(a.yI,{color:"warning",value:75},"  ",n.createElement(a.SD,{className:"text-dark"},"75%")),n.createElement(a.yI,{color:"danger",value:100},"  ",n.createElement(a.SD,null,"100%"))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress color="success" value={25}>\n  <CProgressBar>25%</CProgressBar>\n</CProgress>\n<CProgress color="info" value={50}>\n  <CProgressBar className="text-dark">50%</CProgressBar>\n</CProgress>\n<CProgress color="warning" value={75}>\n  <CProgressBar className="text-dark">75%</CProgressBar>\n</CProgress>\n<CProgress color="danger" value={100}>\n  <CProgressBar>100%</CProgressBar>\n</CProgress>\n'))),"\n",n.createElement(t.p,null,"Since ",n.createElement(t.strong,null,"v4.9.0")," you can also use the ",n.createElement(t.code,null,"progressBarClassName")," property directly on the ",n.createElement(t.code,null,"<CProgress />")," component to achieve the same."),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress color="success" value={25}>25%</CProgress>\n<CProgress color="info" progressBarClassName="text-dark" value={50}>50%</CProgress>\n<CProgress color="warning" progressBarClassName="text-dark" value={75}>75%</CProgress>\n<CProgress color="danger" value={100}>100%</CProgress>\n')),"\n",n.createElement(t.h2,{id:"multiple-bars",style:{position:"relative"}},"Multiple bars",n.createElement(t.a,{href:"#multiple-bars","aria-label":"multiple bars permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Include multiple progress bars in a progress component if you need. In ",n.createElement(t.strong,null,"v4.9.0")),"\n",n.createElement(s,{color:"info",title:"New markup in v4.9.0"},n.createElement(t.p,null,"In version 4.9.0, we introduced a new ",n.createElement(t.code,null,"<CProgressStacked>")," component to more logically wrap multiple progress bars into a single stacked progress bar. The previous structure will continue to work until the next major version.")),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"New markup")),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.J6,null,n.createElement(a.yI,{value:15}),n.createElement(a.yI,{color:"success",value:30}),n.createElement(a.yI,{color:"info",value:20}))),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgressStacked>\n  <CProgress value={15} />\n  <CProgress color="success" value={30} />\n  <CProgress color="info" value={20} />\n</CProgressStacked>  \n'))),"\n",n.createElement(t.p,null,n.createElement(t.strong,null,"Previous markup")),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress>\n  <CProgressBar value={15} />\n  <CProgressBar color="success" value={30} />\n  <CProgressBar color="info" value={20} />\n</CProgress>\n')),"\n",n.createElement(t.h2,{id:"striped",style:{position:"relative"}},"Striped",n.createElement(t.a,{href:"#striped","aria-label":"striped permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"Add ",n.createElement(t.code,null,'variant="striped"')," to any ",n.createElement(t.code,null,"<CProgressBar>")," to apply a stripe via CSS gradient over the progress bar's background color."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{color:"success",variant:"striped",value:25}),n.createElement(a.yI,{color:"info",variant:"striped",value:50}),n.createElement(a.yI,{color:"warning",variant:"striped",value:75}),n.createElement(a.yI,{color:"danger",variant:"striped",value:100})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress color="success" variant="striped" value={25} />\n<CProgress color="info" variant="striped" value={50} />\n<CProgress color="warning" variant="striped" value={75} />\n<CProgress color="danger" variant="striped" value={100} />\n'))),"\n",n.createElement(t.h2,{id:"animated-stripes",style:{position:"relative"}},"Animated stripes",n.createElement(t.a,{href:"#animated-stripes","aria-label":"animated stripes permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"The striped gradient can also be animated. Add ",n.createElement(t.code,null,"animated")," property to ",n.createElement(t.code,null,"<CProgressBar>")," to animate the stripes right to left via CSS3 animations."),"\n",n.createElement(t.div,{className:"docs-example-snippet docs-code-snippet"},n.createElement(l,{className:""},n.createElement(a.yI,{color:"success",variant:"striped",animated:!0,value:25}),n.createElement(a.yI,{color:"info",variant:"striped",animated:!0,value:50}),n.createElement(a.yI,{color:"warning",variant:"striped",animated:!0,value:75}),n.createElement(a.yI,{color:"danger",variant:"striped",animated:!0,value:100})),n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},'<CProgress color="success" variant="striped" animated value={25} />\n<CProgress color="info" variant="striped" animated value={50} />\n<CProgress color="warning" variant="striped" animated value={75} />\n<CProgress color="danger" variant="striped" animated value={100} />\n'))),"\n",n.createElement(t.h2,{id:"customizing",style:{position:"relative"}},"Customizing",n.createElement(t.a,{href:"#customizing","aria-label":"customizing permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"css-variables",style:{position:"relative"}},"CSS variables",n.createElement(t.a,{href:"#css-variables","aria-label":"css variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.p,null,"React cards use local CSS variables on ",n.createElement(t.code,null,".card")," for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."),"\n",n.createElement(c,{file:"_progress.scss",capture:"progress-css-vars"}),"\n",n.createElement(t.h4,{id:"how-to-use-css-variables",style:{position:"relative"}},"How to use CSS variables",n.createElement(t.a,{href:"#how-to-use-css-variables","aria-label":"how to use css variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"const vars = { \n  '--my-css-var': 10,\n  '--my-another-css-var': \"red\" \n}\nreturn <CProgress style={vars}>...</CProgress>\n")),"\n",n.createElement(t.h3,{id:"sass-variables",style:{position:"relative"}},"SASS variables",n.createElement(t.a,{href:"#sass-variables","aria-label":"sass variables permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(c,{file:"_variables.scss",capture:"progress-variables"}),"\n",n.createElement(t.h2,{id:"api",style:{position:"relative"}},"API",n.createElement(t.a,{href:"#api","aria-label":"api permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.h3,{id:"cprogress",style:{position:"relative"}},"CProgress",n.createElement(t.a,{href:"#cprogress","aria-label":"cprogress permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CProgress } from '@coreui/react'\n// or\nimport CProgress from '@coreui/react/src/components/progress/CProgress'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"animated")),n.createElement(t.td,null,"Use to animate the stripes right to left via CSS3 animations."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"color")),n.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),n.createElement(t.td,null,n.createElement(t.code,null,"{'primary'")," | ",n.createElement(t.code,null,"'secondary'")," | ",n.createElement(t.code,null,"'success'")," | ",n.createElement(t.code,null,"'danger'")," | ",n.createElement(t.code,null,"'warning'")," | ",n.createElement(t.code,null,"'info'")," | ",n.createElement(t.code,null,"'dark'")," | ",n.createElement(t.code,null,"'light'")," | ",n.createElement(t.code,null,"'primary-gradient'")," | ",n.createElement(t.code,null,"'secondary-gradient'")," | ",n.createElement(t.code,null,"'success-gradient'")," | ",n.createElement(t.code,null,"'danger-gradient'")," | ",n.createElement(t.code,null,"'warning-gradient'")," | ",n.createElement(t.code,null,"'info-gradient'")," | ",n.createElement(t.code,null,"'dark-gradient'")," | ",n.createElement(t.code,null,"'light-gradient'")," | ",n.createElement(t.code,null,"string }")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"height")),n.createElement(t.td,null,"Sets the height of the component. If you set that value the inner ",n.createElement(t.code,null,"<CProgressBar>")," will automatically resize accordingly."),n.createElement(t.td,null,n.createElement(t.code,null,"number")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"progressBarClassName")," ",n.createElement(t.strong,null,n.createElement(t.em,null,"4.9.0+"))),n.createElement(t.td,null,"A string of all className you want applied to the ",n.createElement(t.code,null,"<CProgressBar/>")," component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"thin")),n.createElement(t.td,null,"Makes progress bar thinner."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"value")),n.createElement(t.td,null,"The percent to progress the ProgressBar (out of 100)."),n.createElement(t.td,null,n.createElement(t.code,null,"number")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"variant")),n.createElement(t.td,null,"Set the progress bar variant to optional striped."),n.createElement(t.td,null,n.createElement(t.code,null,"'striped'")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"white")),n.createElement(t.td,null,"Change the default color to white."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-"))))),"\n",n.createElement(t.h3,{id:"cprogressbar",style:{position:"relative"}},"CProgressBar",n.createElement(t.a,{href:"#cprogressbar","aria-label":"cprogressbar permalink",className:"anchor-link after"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",n.createElement(t.div,null,n.createElement(t.pre,null,n.createElement(t.code,{className:"language-jsx"},"import { CProgressBar } from '@coreui/react'\n// or\nimport CProgressBar from '@coreui/react/src/components/progress/CProgressBar'\n")),n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"Property"),n.createElement(t.th,null,"Description"),n.createElement(t.th,null,"Type"),n.createElement(t.th,null,"Default"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"animated")),n.createElement(t.td,null,"Use to animate the stripes right to left via CSS3 animations."),n.createElement(t.td,null,n.createElement(t.code,null,"boolean")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"className")),n.createElement(t.td,null,"A string of all className you want applied to the component."),n.createElement(t.td,null,n.createElement(t.code,null,"string")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"color")),n.createElement(t.td,null,"Sets the color context of the component to one of CoreUI’s themed colors."),n.createElement(t.td,null,n.createElement(t.code,null,"{'primary'")," | ",n.createElement(t.code,null,"'secondary'")," | ",n.createElement(t.code,null,"'success'")," | ",n.createElement(t.code,null,"'danger'")," | ",n.createElement(t.code,null,"'warning'")," | ",n.createElement(t.code,null,"'info'")," | ",n.createElement(t.code,null,"'dark'")," | ",n.createElement(t.code,null,"'light'")," | ",n.createElement(t.code,null,"'primary-gradient'")," | ",n.createElement(t.code,null,"'secondary-gradient'")," | ",n.createElement(t.code,null,"'success-gradient'")," | ",n.createElement(t.code,null,"'danger-gradient'")," | ",n.createElement(t.code,null,"'warning-gradient'")," | ",n.createElement(t.code,null,"'info-gradient'")," | ",n.createElement(t.code,null,"'dark-gradient'")," | ",n.createElement(t.code,null,"'light-gradient'")," | ",n.createElement(t.code,null,"string }")),n.createElement(t.td,null,"-")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"value")),n.createElement(t.td,null,"The percent to progress the ProgressBar."),n.createElement(t.td,null,n.createElement(t.code,null,"number")),n.createElement(t.td,null,"0")),n.createElement(t.tr,null,n.createElement(t.td,null,n.createElement(t.strong,null,"variant")),n.createElement(t.td,null,"Set the progress bar variant to optional striped."),n.createElement(t.td,null,n.createElement(t.code,null,"'striped'")),n.createElement(t.td,null,"-"))))))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?n.createElement(t,e,n.createElement(s,e)):s(e)};function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=l(18722);const i=e=>{let{children:t}=e;return n.createElement(r.Zo,{components:{ScssDocs:e=>n.createElement(m.Jw,e),strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement(a.C_,Object.assign({},e.children.props,{color:t})))}return n.createElement("strong",null,e.children)},pre:e=>n.createElement(m.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return n.createElement(a.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:l,...r}=e;return n.createElement(m.UW,r,l&&n.createElement("h5",null,l),t)},Example:e=>{const{children:t,...l}=e;return n.createElement(m.en,l,n.Children.map(t,(e=>{if(n.isValidElement(e))return n.cloneElement(e)})))}}},t)};function u(e){return n.createElement(i,e,n.createElement(c,e))}i.displayName="MdxLayout"},45392:function(e,t,l){l.d(t,{Zo:function(){return c},ah:function(){return a}});var r=l(2784);const n=r.createContext({});function a(e){const t=r.useContext(n);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function c({components:e,children:t,disableParentContext:l}){let c;return c=l?"function"==typeof e?e({}):e||s:a(e),r.createElement(n.Provider,{value:c},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-components-progress-mdx-b09d64c2d6196b41ed5e.js.map