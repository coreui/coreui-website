"use strict";(self.webpackChunk_coreui_react_docs=self.webpackChunk_coreui_react_docs||[]).push([[761],{6280:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(5392),r=n(2784);function a(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",code:"code",ol:"ol",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,{id:"tooling-setup",style:{position:"relative"}},"Tooling setup",r.createElement(t.a,{href:"#tooling-setup","aria-label":"tooling setup permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"CoreUI React Admin Templates uses ",r.createElement(t.a,{href:"https://docs.npmjs.com/misc/scripts/",target:"_blank",rel:"nofollow"},"npm scripts")," for its build system. Our ",r.createElement(t.code,null,"package.json")," includes convenient methods for working with the framework, including compiling code, running tests, and more."),"\n",r.createElement(t.p,null,"To use our build system and run our admin template locally, you'll need a copy of source files and Node. Follow these steps and you should be ready to rock:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://nodejs.org/en/download/",target:"_blank",rel:"nofollow"},"Download and install Node.js"),", which we use to manage our dependencies."),"\n",r.createElement(t.li,null,"If you prefer to use Yarn instead of NPM, you have to ",r.createElement(t.a,{href:"https://classic.yarnpkg.com/lang/en/docs/install/",target:"_blank",rel:"nofollow"},"download and install it")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://coreui.io/product/free-react-admin-template/",target:"_blank",rel:"nofollow"},"Download CoreUI React Admin Template")," or ",r.createElement(t.a,{href:"https://coreui.io/download/",target:"_blank",rel:"nofollow"},"Download CoreUI PRO React Admin Template"),"."),"\n",r.createElement(t.li,null,"Navigate to the root template directory and run ",r.createElement(t.code,null,"npm install")," or ",r.createElement(t.code,null,"yarn install")," to install our local dependencies listed in ",r.createElement(t.code,null,"package.json"),"."),"\n"),"\n",r.createElement(t.p,null,"When completed, you'll be able to run the various commands provided from the command line."),"\n",r.createElement(t.h2,{id:"using-npm-scripts",style:{position:"relative"}},"Using npm scripts",r.createElement(t.a,{href:"#using-npm-scripts","aria-label":"using npm scripts permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"Our ",r.createElement(t.code,null,"package.json")," includes numerous tasks for developing the project. Run ",r.createElement(t.code,null,"npm run")," or ",r.createElement(t.code,null,"yarn run")," to see all the npm scripts in your terminal. ",r.createElement(t.strong,null,"Primary tasks include:")),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Task"),r.createElement(t.th,null,"Description"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.code,null,"npm start")," or ",r.createElement(t.code,null,"yarn start")),r.createElement(t.td,null,"Compiles CSS and JavaScript, builds the documentation, and starts a local server.")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.code,null,"npm run build")," or ",r.createElement(t.code,null,"yarn build")),r.createElement(t.td,null,"Creates the ",r.createElement(t.code,null,"dist/")," directory with compiled files. Uses ",r.createElement(t.a,{href:"https://sass-lang.com/",target:"_blank",rel:"nofollow"},"Sass"),", ",r.createElement(t.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"nofollow"},"Autoprefixer"),".")),r.createElement(t.tr,null,r.createElement(t.td,null,r.createElement(t.code,null,"npm test")," or ",r.createElement(t.code,null,"yarn test")),r.createElement(t.td,null,"Runs tests locally")))),"\n",r.createElement(t.h2,{id:"sass",style:{position:"relative"}},"Sass",r.createElement(t.a,{href:"#sass","aria-label":"sass permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"CoreUI uses ",r.createElement(t.a,{href:"https://sass-lang.com/dart-sass",target:"_blank",rel:"nofollow"},"Dart Sass")," for compiling our Sass source files into CSS files (included in our build process), and we recommend you do the same if you're compiling Sass using your own asset pipeline."),"\n",r.createElement(t.p,null,"Dart Sass uses a rounding precision of 10 and for efficiency reasons does not allow adjustment of this value. We don't lower this precision during further processing of our generated CSS, such as during minification, but if you chose to do so we recommend maintaining a precision of at least 6 to prevent issues with browser rounding."),"\n",r.createElement(t.h2,{id:"autoprefixer",style:{position:"relative"}},"Autoprefixer",r.createElement(t.a,{href:"#autoprefixer","aria-label":"autoprefixer permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"We uses [Autoprefixer][autoprefixer] (included in our build process) to automatically add vendor prefixes to some CSS properties at build time. Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins like those found in v3."),"\n",r.createElement(t.p,null,"We maintain the list of browsers supported through Autoprefixer in a separate file within our GitHub repository. See ",r.createElement(t.code,null,".browserslistrc"),"."),"\n",r.createElement(t.h2,{id:"local-template",style:{position:"relative"}},"Local template",r.createElement(t.a,{href:"#local-template","aria-label":"local template permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"Here's how to get it started:"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Run through the ",r.createElement(t.a,{href:"#tooling-setup"},"tooling setup")," above to install all dependencies."),"\n",r.createElement(t.li,null,"From the root template directory, run ",r.createElement(t.code,null,"npm run start")," or ",r.createElement(t.code,null,"yarn start")," in the command line."),"\n",r.createElement(t.li,null,"Open ",r.createElement(t.code,null,"http://localhost:3000")," in your browser, and voilà."),"\n"),"\n",r.createElement(t.h2,{id:"troubleshooting",style:{position:"relative"}},"Troubleshooting",r.createElement(t.a,{href:"#troubleshooting","aria-label":"troubleshooting permalink",className:"anchor-link after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}}))),"\n",r.createElement(t.p,null,"Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun ",r.createElement(t.code,null,"npm install")," or ",r.createElement(t.code,null,"yarn install"),"."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},s=n(8910),i=n(7285);const c=e=>{let{children:t}=e;return r.createElement(l.Zo,{components:{strong:e=>{if("em"==e.children.type){const t=e.children.props.children.includes("Deprecated")?"warning":"primary";return r.createElement(r.Fragment,null,r.createElement("br",null),r.createElement(s.C_,Object.assign({},e.children.props,{color:t})))}return r.createElement("strong",null,e.children)},pre:e=>r.createElement(i.dn,e),table:e=>{const t=e.children[0].props.children.props.children[0].props.children&&e.children[0].props.children.props.children[0].props.children.includes("Property");return r.createElement(s.Sx,Object.assign({responsive:!0},e,{className:"table "+(t&&" table-striped table-api")}))},Callout:e=>{const{children:t,title:n,...l}=e;return r.createElement(i.UW,l,n&&r.createElement("h5",null,n),t)},Example:e=>{const{children:t,...n}=e;return r.createElement(i.en,n,r.Children.map(t,(e=>{if(r.isValidElement(e))return r.cloneElement(e)})))}}},t)};function u(e){return r.createElement(c,e,r.createElement(o,e))}c.displayName="MdxLayout"},5392:function(e,t,n){n.d(t,{Zo:function(){return s},ah:function(){return a}});var l=n(2784);const r=l.createContext({});function a(e){const t=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||o:a(e),l.createElement(r.Provider,{value:s},t)}}}]);
//# sourceMappingURL=component---src-templates-mdx-layout-tsx-content-file-path-content-templates-installation-mdx-3bfd72225b7ab65bcb6d.js.map