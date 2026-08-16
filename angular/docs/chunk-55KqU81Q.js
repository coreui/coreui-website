import{$t as Uv,Br as kw,Fi as v,J as IM,Nt as Rs,T as D_,Ut as Td,_i as qv,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{E as Fo,Ui as nr,Xi as y$1,ar as li,br as qa}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var b=class o{static{this.ɵfac=function(r){return new(r||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-breadcrumb04-example`]],decls:5,vars:1,consts:[[2,`--cui-breadcrumb-divider`,`''`],[`url`,`#`],[3,`active`]],template:function(r,m){r&1&&(Rs(0,`c-breadcrumb`,0)(1,`c-breadcrumb-item`,1),RM(2,`Home`),gd(),Rs(3,`c-breadcrumb-item`,2),RM(4,`Library`),gd()()),r&2&&(kw(3),cv(`active`,!0))},dependencies:[qa,Fo],encapsulation:2})}};var h=class o{static{this.ɵfac=function(r){return new(r||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-breadcrumb03-example`]],decls:5,vars:1,consts:[[2,`--cui-breadcrumb-divider`,`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E")`],[3,`routerLink`],[3,`active`]],template:function(r,m){r&1&&(Rs(0,`c-breadcrumb`,0)(1,`c-breadcrumb-item`,1),RM(2,`Home`),gd(),Rs(3,`c-breadcrumb-item`,2),RM(4,`Library`),gd()()),r&2&&(kw(3),cv(`active`,!0))},dependencies:[qa,Fo,li],encapsulation:2})}};var g=class o{static{this.ɵfac=function(r){return new(r||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-breadcrumb02-example`]],decls:5,vars:3,consts:[[`url`,`#`],[3,`active`]],template:function(r,m){r&1&&(Rs(0,`c-breadcrumb`)(1,`c-breadcrumb-item`,0),RM(2,`Home`),gd(),Rs(3,`c-breadcrumb-item`,1),RM(4,`Library`),gd()()),r&2&&(IM(`--cui-breadcrumb-divider:'>'`),kw(3),cv(`active`,!0))},dependencies:[qa,Fo],encapsulation:2})}};var y=class o{static{this.ɵfac=function(r){return new(r||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-breadcrumb01-example`]],decls:15,vars:3,consts:[[3,`active`],[`url`,`#`]],template:function(r,m){r&1&&(Rs(0,`c-breadcrumb`)(1,`c-breadcrumb-item`,0),RM(2,`Home`),gd()(),Rs(3,`c-breadcrumb`)(4,`c-breadcrumb-item`,1),RM(5,`Home`),gd(),Rs(6,`c-breadcrumb-item`,0),RM(7,`Library`),gd()(),Rs(8,`c-breadcrumb`)(9,`c-breadcrumb-item`,1),RM(10,`Home`),gd(),Rs(11,`c-breadcrumb-item`,1),RM(12,`Library`),gd(),Rs(13,`c-breadcrumb-item`,0),RM(14,`Data`),gd()()),r&2&&(kw(),cv(`active`,!0),kw(5),cv(`active`,!0),kw(7),cv(`active`,!0))},dependencies:[qa,Fo],encapsulation:2})}};var M=`\`\`\`typescript
import { BreadcrumbModule } from '@coreui/angular';

@NgModule({
  imports: [BreadcrumbModule,]
})
export class AppModule(){}
\`\`\`
`;var _=()=>[`components/breadcrumb/examples/breadcrumb01.component.html`,`components/breadcrumb/examples/breadcrumb01.component.ts`];var T=()=>[`components/breadcrumb/examples/breadcrumb02.component.html`,`components/breadcrumb/examples/breadcrumb02.component.ts`];var F=()=>[`components/breadcrumb/examples/breadcrumb03.component.html`,`components/breadcrumb/examples/breadcrumb03.component.ts`];var P=()=>[`components/breadcrumb/examples/breadcrumb04.component.html`,`components/breadcrumb/examples/breadcrumb04.component.ts`];var L=class o{constructor(){this.usage=M;this.headService=v(y$1);this.name=`Breadcrumb`;this.title=`Angular Breadcrumb Component`;this.description=`Angular Breadcrumb navigation component indicates the current location within a navigational hierarchy that automatically adds separators.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(r){return new(r||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`ng-component`]],decls:48,vars:18,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`stackblitz`,``,`componentName`,`Breadcrumb01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Breadcrumb02Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[`stackblitz`,``,`componentName`,`Breadcrumb03Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Breadcrumb04Component`,3,`files`,`name`],[1,`api-table`]],template:function(r,m){r&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
## Example

The breadcrumb navigation provides links back to each previous page the user navigated through and shows the current location in a website or an application. You don\u2019t have to add separators, because they automatically added in CSS through \`::before\` and content.
`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-breadcrumb01-example`),gd(),Rs(9,`markdown`),RM(10,"\n  ## Dividers\n\n  Dividers are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content). They can be changed by modifying a local CSS custom property `--coreui-breadcrumb-divider`, or through the `$breadcrumb-divider` Sass variable — and `$breadcrumb-divider-flipped` for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.\n"),gd(),Rs(11,`docs-example`,3),lv(12,`docs-breadcrumb02-example`),gd(),Rs(13,`markdown`),RM(14,`
  When modifying via Sass, the [quote](https://sass-lang.com/documentation/modules/string#quote) function is required to generate the quotes around a string. For example, using \`>\` as the divider, you can use this:
`),gd(),Rs(15,`pre`,4),RM(16,'  ```scss\n  $breadcrumb-divider: quote(">");\n  ```\n'),gd(),Rs(17,`markdown`),RM(18,`
  It's also possible to use an **embedded SVG icon**. Apply it via our CSS custom property, or use the Sass variable.
`),gd(),Rs(19,`docs-example`,5),lv(20,`docs-breadcrumb03-example`),gd(),Rs(21,`pre`,4),RM(22,"  ```scss\n  $breadcrumb-divider: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\");\n  ```\n"),gd(),Rs(23,`markdown`),RM(24,"\n  You can also remove the divider setting `--cui-breadcrumb-divider: '';` (empty strings in CSS custom properties counts as a value), or setting the Sass variable to `$breadcrumb-divider: none;`.\n"),gd(),Rs(25,`docs-example`,6),lv(26,`docs-breadcrumb04-example`),gd(),Rs(27,`pre`,4),RM(28,"  ```scss\n  $breadcrumb-divider: none;\n  ```\n"),gd(),Rs(29,`markdown`),RM(30,`
  ## Accessibility

  Since breadcrumbs provide navigation, it's useful to add a significant label such as \`aria-label="breadcrumb"\` to explain the type of navigation implemented in the \`<nav>\` element. You should also add an \`aria-current="page"\` to the last item of the set to show that it represents the current page. **CoreUI for Angular automatically add all of this labels to breadcrumb's components.**

  For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
`),gd(),Rs(31,`markdown`),RM(32,`

  ---

  ## API

  ### Breadcrumb Module

`),gd(),Rs(33,`div`,4),RM(34),gd(),Rs(35,`markdown`),RM(36,`
  ---

  ### c-breadcrumb
  _component_

  #### Inputs
  `),Rs(37,`div`,7),RM(38,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `ariaLabel` | Default aria-label for breadcrumb. **`default`** 'breadcrumb' | `string` | `'breadcrumb'` |\n    | `role` | Default role for breadcrumb. **`default`** 'navigation' | `string` | `'navigation'` |\n\n  "),gd(),RM(39,`

  ---

  ### c-breadcrumb-item
  _component_

  #### Inputs
  `),Rs(40,`div`,7),RM(41,"\n\n    | name | description | type | default |\n    | ---- | ----------- | ---- | ------- |\n    | `active` | Toggle the active state for the component.  | `boolean` |  |\n    | `attribs` | Additional html attributes for link.  | [`INavAttributes`](../interfaces/coreui_types.INavAttributes.md) |  |\n    | `linkProps` | Some `NavigationExtras` props for the inner `[routerLink]` directive and `routerLinkActiveOptions`.  | [`INavLinkProps`](../interfaces/coreui_types.INavLinkProps.md) |  |\n    | `url` | The `url` prop for the inner `[routerLink]` directive.  | `string` \\| `any`[] |  |\n\n  "),gd(),RM(42,`

  ---

  ### c-breadcrumb-router
  _component_

  #### Inputs
  `),Rs(43,`div`,7),RM(44,`

    | name | description | type | default |
    | ---- | ----------- | ---- | ------- |
    | \`items\` | Optional array of IBreadcrumbItem to override default BreadcrumbRouter behavior. | [\`IBreadcrumbItem\`](../interfaces/breadcrumb_breadcrumb_item_breadcrumb_item.IBreadcrumbItem.md)[] |  |

  `),gd(),RM(45,`

  ---

  ### BreadcrumbRouter Service

  You can override \`BreadcrumbRouterService\` in a module providers section.
`),gd(),Rs(46,`pre`,4),RM(47),gd()),r&2&&(kw(),Uv(m.title),kw(2),Uv(m.description),kw(4),cv(`files`,KM(14,_))(`name`,m.title),kw(4),cv(`files`,KM(15,T))(`name`,m.title),kw(8),cv(`files`,KM(16,F))(`name`,m.title),kw(6),cv(`files`,KM(17,P))(`name`,m.title),kw(9),Td(` `,m.usage,`
`),kw(13),qv("  ```typescript\n  @NgModule(",`{`,`
  ...
  providers: [
    `,`{`,` provide: BreadcrumbRouterService, useClass: yourBreadcrumbRouterService `,`}`,`
  ]
  \`\`\`
`))},dependencies:[f,nr,ie,y,g,h,b],encapsulation:2})}};export{L as BreadcrumbComponent};