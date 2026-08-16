import{$t as Uv,Br as kw,Fi as v$1,Nt as Rs,T as D_,kt as RM,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import{Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var v=class u{constructor(){this.headService=v$1(y);this.name=`Migration v4 to v5`;this.title=`CoreUI 5 Angular Migration`;this.description=`Track and review changes to the CoreUI Angular components to help you migrate from v4 to v5.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(i){return new(i||u)}}static{this.ɵcmp=D_({type:u,selectors:[[`docs-migration-v4-v5`]],decls:29,vars:2,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[1,`api-table`]],template:function(i,s){i&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  CoreUI for Angular is the Angular version of CoreUI components library, so before read the following guide, please check also [CoreUI 4 to 5 migration guide](https://coreui.io/bootstrap/docs/5.0/migration/v5/).
`),gd(),Rs(7,`markdown`),RM(8,`

  ## Project structure

  The CoreUI v5 for Angular template project has been updated to [standalone](https://angular.io/guide/standalone-migration):
  - all the components, directives, and pipes have been converted to standalone,
  - unnecessary NgModules have been removed,
  - the project bootstrapping has been switched to standalone API.

  In addition, there have been some changes to the project structure.
  - the routing modules have been replaced with routes,
  - the \`src/app/containers\` directory has been moved to \`src/app/layout\`.


`),gd(),Rs(9,`pre`,2),RM(10,`  \`\`\`text
  coreui-angular-admin-template
  \u251C\u2500\u2500 src/
  \u2502   \u251C\u2500\u2500 app/
  |   \u2502   \u251C\u2500\u2500 icons/
  |   \u2502   \u251C\u2500\u2500 layout/
  |   \u2502   \u251C\u2500\u2500 views/
  |   \u2502   \u251C\u2500\u2500 app.component.ts
  |   \u2502   \u251C\u2500\u2500 app.config.ts
  |   \u2502   \u2514\u2500\u2500 app.routes.ts
  \u2502   \u251C\u2500\u2500 assets/
  \u2502   \u251C\u2500\u2500 scss/
  \u2502   \u251C\u2500\u2500 ...
  \u2502   \u251C\u2500\u2500 main.ts
  \u2502   \u2514\u2500\u2500 index.html
  \u2502
  \u251C\u2500\u2500 ...
  \u251C\u2500\u2500 tsconfig.json
  \u251C\u2500\u2500 angular.json
  \u2514\u2500\u2500 package.json
  \`\`\`
`),gd(),Rs(11,`markdown`),RM(12,`
  `),lv(13,`br`),RM(14,`

  ## Template layout

  \`src/app/layuut/default-layout/\`

  **CoreUI v4**
`),gd(),Rs(15,`pre`,2),RM(16,`  \`\`\`
  \u2500 c-sidebar
  \u251C\u2500 c-sidebar-brand
  \u251C\u2500 c-sidebar-nav
  \u2514\u2500 c-sidebar-toggler
  \u2500 c-sidebar #aside
  \u2500 div class="wrapper"
  \u251C\u2500 c-header
  \u2502  \u251C\u2500 c-container fluid
  \u2502  \u251C\u2500 c-header-divider
  \u2502  \u2514\u2500 c-container fluid
  \u2502     \u2514\u2500 c-breadcrumb-router
  \u251C\u2500 div class="body"
  \u2502  \u2514\u2500 c-container
  \u2502     \u2514\u2500-router-outlet
  \u2514\u2500 c-footer
  \`\`\`
`),gd(),Rs(17,`markdown`),RM(18,`
  **CoreUI v5**
`),gd(),Rs(19,`pre`,2),RM(20,`  \`\`\`
  \u251C\u2500 c-sidebar
  \u2502  \u251C\u2500 c-sidebar-header
  \u2502  \u2502  \u2514\u2500 c-sidebar-brand
  \u2502  \u251C\u2500 c-sidebar-nav
  \u2502  \u2514\u2500 c-sidebar-footer
  \u2502     \u2514\u2500 cSidebarToggler
  \u251C\u2500 div class="wrapper"
  \u2502  \u2514\u2500 app-header
  \u2502     \u251C\u2500 c-container fluid
  \u2502     \u2502  \u2502\u2500 cSidebarToggle
  \u2502     \u2502  \u2514\u2500 c-header-nav
  \u2502     \u2514\u2500 c-container fluid
  \u2502        \u2514\u2500 c-breadcrumb-router
  \u251C\u2500 div class="body"
  \u2502  \u2514\u2500 c-container
  \u2502     \u2514\u2500-router-outlet
  \u251C\u2500 app-footer
  \u2514\u2500 app-aside
  \`\`\`
`),gd(),Rs(21,`markdown`),RM(22,`

  ## Styles

  See: \`src/scss/style.scss\`

  ## Components

  `),Rs(23,`div`,3),RM(24,"\n\n    |component|input|notes|\n    |:---|:---|:---|\n    |`c-avatar` | `textColor` | uses `TextColorDirective` via directive composition api\n    |`c-badge`| `textColor` | uses `TextColorDirective` via directive composition api\n    || `textBgColor` | uses `TextBgColorDirective` via directive composition api\n    |`c-card`| `textColor` | uses `TextColorDirective` via directive composition api\n    || `textBgColor` | uses `TextBgColorDirective` via directive composition api\n    |`c-carousel`| `dark` | uses `ThemeDirective` via directive composition api\n    |`c-close-button`| `white` | deprecated property, use `dark` instead\n    |`c-close-button`| `dark` | uses `ThemeDirective` via directive composition api\n    |`c-nav`| `variant` | The `underline` variant has been changed to `underline-border`\n    |`c-date-picker`| `inputDateFormat` | custom date format function\n    || `inputDateParse` | custom date parse function\n    || `showWeekNumber` | display ISO week number\n    |`c-date-range-picker`| `inputDateFormat` | custom date format function\n    || `inputDateParse` | custom date parse function\n    || `showWeekNumber` | display ISO week number\n    |`c-dropdown`| `dark` | uses `ThemeDirective` via directive composition api\n    |`cDropdownMenu`| `dark` | uses `ThemeDirective` via directive composition api\n    |`c-navbar`| `colorScheme` | uses `ThemeDirective` via directive composition api\n    |`c-offcanvas`| `dark` | uses `ThemeDirective` via directive composition api\n    |`c-progress`| | simplified HTML structure\n    |`c-sidebar-toggler`| | removed, use `cSidebarToggler` directive instead\n    |`c-smart-table`| | removed `_id` internal property for items\n\n  "),gd(),RM(25,`

  ## Directives

  `),Rs(26,`div`,3),RM(27,"\n\n    |directive|input|change|values|\n    |:---|:---|:---|:---|\n    |`TextColorDirective`| `cTextColor` |removed| `muted`, `high-emphasis`, `medium-emphasis`, `disabled`, `high-emphasis-inverse`, `medium-emphasis-inverse`, `disabled-inverse`\n    |||new| `primary-emphasis`, `secondary-emphasis`, `success-emphasis`, `danger-emphasis`, `warning-emphasis`, `info-emphasis`, `light-emphasis`, `body`, `body-emphasis`, `body-secondary`, `body-tertiary`, `black`, `black-50`, `white`, `white-50`\n  "),gd(),RM(28,`

`),gd()),i&2&&(kw(),Uv(s.title),kw(2),Uv(s.description))},dependencies:[f,nr],encapsulation:2})}};export{v as MigrationV4V5Component};