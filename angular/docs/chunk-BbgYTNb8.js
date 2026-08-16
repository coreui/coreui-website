import{$t as Uv,Br as kw,Fi as v,Nt as Rs,T as D_,Ut as Td,kt as RM,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import{Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var h=class r{constructor(){this.headService=v(y);this.name=`Customize Templates`;this.title=`Customize CoreUI Angular Templates`;this.description=`Learn how to theme, customize, and extend CoreUI React Templates with Sass, a boatload of global options.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(i){return new(i||r)}}static{this.ɵcmp=D_({type:r,selectors:[[`docs-customize`]],decls:26,vars:3,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[1,`d-none`]],template:function(i,u){i&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  ## Overview

  There are multiple ways to customize CoreUI for Angular. Your best path can depend on your project, the complexity of
  your build tools, the version of CoreUI for Angular you're using, browser support, and more.

  Our two preferred methods are:

  1. You can extend our source files.
  2. You can override CoreUI styles.

  `),lv(7,`br`),RM(8,`

  ## File structure

  Utilize our source Sass files to take advantage of variables, maps, mixins, and functions to help you build faster and
  customize your project.

  Whenever possible, avoid modifying CoreUI core files. For Sass, that means creating your own stylesheet that imports
  CoreUI for Bootstrap so you can modify and extend it. Assuming you're using a package manager like npm, you'll have a
  file structure that looks like this:

`),gd(),Rs(9,`pre`,2),RM(10,`  \`\`\`text
  your-project/
  \u251C\u2500\u2500 ...
  \u251C\u2500\u2500 node_modules/
  \u2502   \u251C\u2500\u2500 @coreui/coreui
  \u2502   \u2502   \u251C\u2500\u2500 scss
  \u2502   \u2502   \u2514\u2500\u2500 ...
  \u2502   \u2514\u2500\u2500 @coreui/angular
  \u2502       \u2514\u2500\u2500 ...
  \u251C\u2500\u2500 src
  \u2502   \u2514\u2500\u2500 scss
  \u2502       \u251C\u2500\u2500 _custom.scss
  \u2502       \u251C\u2500\u2500 ...
  \u2502       \u251C\u2500\u2500 _variables.scss
  \u2502       \u2514\u2500\u2500 styles.scss
  \u2514\u2500\u2500 ...
  \`\`\`
`),gd(),Rs(11,`markdown`),RM(12,`

  `),lv(13,`br`),RM(14,`

  ## Variable defaults

  Every Sass variable in CoreUI for Angular includes the \`!default\` flag allowing you to override the variable's default
  value in your own Sass without modifying CoreUI source code. Copy and paste variables as needed, modify their values,
  and remove the \`!default\` flag. If a variable has already been assigned, then it won't be re-assigned by the default
  values in CoreUI.

  You will find the complete list of CoreUI variables in \`node_modules/@coreui/coreui/scss/_variables.scss\`. Some
  variables are set to \`null\`, these variables don't output the property unless they are overridden in your
  configuration.
  `),Rs(15,`div`,3),RM(16,`You can also find a specific component variables list in **Customizing** section ex.
    [Alerts - Customizing](https://coreui.io/angular/docs/components/alerts#customizing)
  `),gd(),RM(17,"\n\n  Here's an example that changes the `background-color` and `color` for the `body` when importing and compiling CoreUI for Angular via npm:\n"),gd(),Rs(18,`pre`,2),RM(19,`  \`\`\`scss
  // _variables.scss

  // Default variable overrides
  $body-bg: #000;
  $body-color: #111;
  \`\`\`
`),gd(),Rs(20,`markdown`),RM(21,`
  `),lv(22,`br`),RM(23,`

  ## Custom styles and overrides

  In your \`custom.scss\`, you can put custom code for CoreUI components or your own styles.
`),gd(),Rs(24,`pre`,2),RM(25),gd()),i&2&&(kw(),Uv(u.title),kw(2),Uv(u.description),kw(22),Td(`  \`\`\`scss
  // _custom.scss

  // Additional custom code here
  .custom-component `,`{`,`
    border: 2px solid #222;
  }
  \`\`\`
`))},dependencies:[f,nr],encapsulation:2})}};export{h as CustomizeComponent};