import{$t as Uv,Br as kw,Cn as Zv,Fi as v,Nt as Rs,Ot as Qv,T as D_,Ut as Td,_i as qv,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Et as Ti,Hr as vf,Ui as nr,Un as hf,Xi as y,gn as bf,qr as vs,vn as bs,zn as gf}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var P=[{title:!0,name:`Nav Title`},{name:`Nav item`,iconComponent:{name:`cilSpeedometer`}},{name:`With badge`,iconComponent:{name:`cilSpeedometer`},badge:{text:`NEW`,color:`primary`}},{name:`Nav dropdown`,iconComponent:{name:`cilPuzzle`},children:[{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}},{name:`Nav dropdown item`,url:`./`,iconComponent:{name:`cilPuzzle`}}]}];var c=class o{constructor(){this.navItems=P}static{this.ɵfac=function(t){return new(t||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-sidebar01`]],decls:8,vars:1,consts:[[`sidebar1`,`cSidebar`],[`visible`,``,1,`border-end`],[1,`border-bottom`],[3,`navItems`],[`cSidebarToggle`,`sidebar1`,`toggle`,`unfoldable`,1,`border-top`,2,`cursor`,`pointer`],[`cSidebarToggler`,``]],template:function(t,d){t&1&&(Rs(0,`c-sidebar`,1,0)(2,`c-sidebar-header`,2)(3,`c-sidebar-brand`),RM(4,`Sidebar Brand`),gd()(),lv(5,`c-sidebar-nav`,3),Rs(6,`c-sidebar-footer`,4),lv(7,`button`,5),gd()()),t&2&&(kw(5),cv(`navItems`,d.navItems))},dependencies:[bs,bf,hf,Ti,vf,vs,gf],styles:[`[_nghost-%COMP%]   .sidebar[_ngcontent-%COMP%]{position:relative;bottom:0}[_nghost-%COMP%]   .sidebar-narrow-unfoldable[_ngcontent-%COMP%]{position:sticky}.docs-example[_ngcontent-%COMP%]{--%NS%cd-example-padding: 0}`]})}};var z=`\`\`\`typescript
import { SidebarModule } from '@coreui/angular';

@NgModule({
    imports: [SidebarModule,]
})
export class AppModule() { }
\`\`\`
`;var T=()=>[`components/sidebar/examples/sidebar01.component.html`];var M=class o{constructor(){this.usage=z;this.headService=v(y);this.name=`Sidebar`;this.title=`Angular Sidebar Component`;this.description=`Angular Sidebar is a powerful and customizable responsive navigation component for any type of vertical navigation. Sidebar comes with built-in support for branding, navigation, and more.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(t){return new(t||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-sidebar`]],decls:70,vars:73,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[1,`p-0`,3,`files`],[1,`bg-body-secondary`,`p-0`,`rounded-bottom-0`,`overflow-hidden`,2,`min-height`,`20rem`,`display`,`block`,`padding`,`0`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`],[`toggle`,`unfoldable`,`cSidebarToggle`,`sidebar1`]],template:function(t,d){t&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`
  ## Supported content

  Sidebar come with built-in support for a handful of sub-components. Choose from the following as needed:

  - \`c-sidebar-header\` for optional header.
  - \`c-sidebar-brand\` for your company, product, or project name.
  - \`c-sidebar-nav\` for a full-height and lightweight navigation (including support for dropdowns).
  - \`c-sidebar-footer\` for optional footer.
  - \`c-sidebar-toggler\` for use with our minimizer.

`),gd(),Rs(7,`docs-example`,2),lv(8,`docs-sidebar01`,3),gd(),Rs(9,`markdown`),RM(10,`

  ## Customizing

  ### CSS variables
  Angular sidebars use local CSS variables on \`.sidebar\` and \`.sidebar-backdrop\` for enhanced real-time customization. Values for the CSS variables are set via Sass.
`),gd(),Rs(11,`pre`,4),RM(12),gd(),lv(13,`br`),Rs(14,`markdown`),RM(15,`
  Some additional CSS variables are also present on \`.sidebar-backdrop\`:
`),gd(),Rs(16,`pre`,4),RM(17),lv(18,`br`),RM(19),gd(),Rs(20,`markdown`),RM(21,`
  #### How to use CSS variables
`),gd(),Rs(22,`pre`,4),RM(23),gd(),Rs(24,`markdown`),RM(25,`
  ### SASS variables
`),gd(),Rs(26,`pre`,4),RM(27),lv(28,`br`),RM(29,"\n\n  ```scss\n  $mobile-breakpoint: md;\n  ```\n"),gd(),Rs(30,`markdown`),RM(31,`
  ---

  ## API reference

  ### Sidebar Module

`),gd(),Rs(32,`div`,4),RM(33),gd(),Rs(34,`markdown`),RM(35,`
  ---

  ### c-sidebar
  _component_

  ##### Inputs
  `),Rs(36,`div`,5),RM(37,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`colorScheme`|Color scheme dor text and background.|`dark \\| light`|_undefined_|\n  |`narrow`|Make sidebar narrow.|`boolean`|_false_|\n  |`overlaid`|Set sidebar to overlaid variant.|`boolean`|_false_|\n  |`placement`|Sidebar placement.|`start' \\| 'end'`|_undefined_|\n  |`position`|Place sidebar in non-static positions.|`string`|_undefined_|\n  |`size`|Size the component small, large, or extra large.|`sm \\| lg \\| xl`|_undefined_|\n  |`unfoldable`|Expand narrowed sidebar on hover.|`boolean`|_false_|\n  |`visible`|Toggle the visibility of sidebar component.|`boolean`|_false_|\n\n  "),gd(),RM(38,`

  ##### Outputs
  `),Rs(39,`div`,5),RM(40,`

  | name | description | type |
  | ---- | ----------- | ---- |
  | \`visibleChange\` | Event triggered on visible change. | \`boolean\` |

  `),gd(),RM(41,`


  ---

  ### c-sidebar-brand
  _component_

  ##### Inputs
  `),Rs(42,`div`,5),RM(43,`

  |prop|description|type|default|notes|
  |:---|:---|:---|:---:|---|
  |\`brandFull\`|Image for wide sidebar.|shape|_undefined_|
  |\`brandNarrow\`|Image for wide sidebar|shape|_undefined_|
  |\`routerLink\`|Router link for defined brand images.|\`string\`|_undefined_|

  `),gd(),RM(44,"\n\n  You can pass content or `brandFull` and `brandNarrow`. Prop shape:\n"),gd(),Rs(45,`pre`,4),RM(46,`  \`\`\`js
  {
    src: './assets/images/brand/coreui-pro-angular-white.svg',
    width: 190,
    height: 35,
    alt: 'CoreUI Logo'
  }
  \`\`\`
  `),gd(),Rs(47,`markdown`),RM(48,`
  ---

  ### c-sidebar-header
  _component_ wrapper

  ---

  ### c-sidebar-footer
  _component_ wrapper

  ---

  ### cSidebarToggle
  _directive_

  ##### Inputs
  `),Rs(49,`div`,5),RM(50,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`cSidebarToggle`|Html `id` attr of toggled sidebar.|`string`|_undefined_|\n  |`toggle`|Sidebar property name for toggle action.|`visible \\| unfoldable`|_visible_|\n\n  "),gd(),RM(51,`

  ### c-sidebar-toggler
  _component_

  _For use with \`cSidebarToggle\` directive_
`),gd(),Rs(52,`pre`,4),RM(53,"  ```html\n  "),Rs(54,`c-sidebar-toggler`,6),RM(55,`
  `),gd(),RM(56,"\n  ```\n"),gd(),Rs(57,`markdown`),RM(58,`
  ### c-sidebar-nav
  _component_ **subject to change**

  ##### Inputs
  `),Rs(59,`div`,5),RM(60,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`navItems`|Configuration object for sidebar-nav.|`INavData[]`|_[]_|\n  |`dropdownMode`| - `path`: close inactive sidebar-nav-group on active route change only (default) "),lv(61,`br`),RM(62," - `close`: close opened inactive sidebar-nav-group on other group click "),lv(63,`br`),RM(64," - `none`: keep sidebar-nav-group open "),lv(65,`br`),RM(66," | `path` \\| `close` \\| `none` |_path_|\n\n  "),gd(),RM(67,`

  ---

  ### INavData
  _interface_
`),gd(),Rs(68,`pre`,4),RM(69,`  \`\`\`typescript
  interface INavAttributes {
    [propName: string]: any;
  }

  interface INavWrapper {
    attributes: INavAttributes;
    element: string;
  }

  interface INavBadge {
    text: string;
    color: string;
    size?: string;
    class?: string;
  }

  interface INavLabel {
    class?: string;
    variant: string;
  }

  interface INavLinkProps {
    queryParams?: {[k: string]: any};
    fragment?: string;
    queryParamsHandling?: 'merge' | 'preserve' | '';
    preserveFragment?: boolean;
    skipLocationChange?: boolean;
    replaceUrl?: boolean;
    state?: {[k: string]: any};
    routerLinkActiveOptions?: {exact: boolean};
    routerLinkActive?: string | string[];
  }

  interface INavData {
    name?: string;
    url?: string | any[];
    href?: string;
    icon?: string;
    iconComponent?: any;
    badge?: INavBadge;
    title?: boolean;
    children?: INavData[];
    variant?: string;
    attributes?: INavAttributes;
    divider?: boolean;
    class?: string;
    label?: INavLabel;
    wrapper?: INavWrapper;
    linkProps?: INavLinkProps;
  }
  \`\`\`
`),gd()),t&2&&(kw(),Uv(d.title),kw(2),Uv(d.description),kw(4),cv(`files`,KM(72,T)),kw(5),Zv(["  ```scss\n  --cui-sidebar-width: #",`{`,`$sidebar-width};
  --cui-sidebar-bg: #`,`{`,`$sidebar-bg};
  --cui-sidebar-padding-x: #`,`{`,`$sidebar-padding-x};
  --cui-sidebar-padding-y: #`,`{`,`$sidebar-padding-y};
  --cui-sidebar-color: #`,`{`,`$sidebar-color};
  --cui-sidebar-border-width: #`,`{`,`$sidebar-border-width};
  --cui-sidebar-border-color: #`,`{`,`$sidebar-border-color};
  --cui-sidebar-brand-color: #`,`{`,`$sidebar-brand-color};
  --cui-sidebar-brand-height: #`,`{`,`$sidebar-brand-height};
  --cui-sidebar-brand-bg: #`,`{`,`$sidebar-brand-bg};
  --cui-sidebar-header-height: #`,`{`,`$sidebar-header-height};
  --cui-sidebar-header-bg: #`,`{`,`$sidebar-header-bg};
  --cui-sidebar-header-padding-x: #`,`{`,`$sidebar-header-padding-x};
  --cui-sidebar-header-padding-y: #`,`{`,`$sidebar-header-padding-y};
  --cui-sidebar-footer-bg: #`,`{`,`$sidebar-footer-bg};
  --cui-sidebar-footer-height: #`,`{`,`$sidebar-footer-height};
  --cui-sidebar-footer-padding-x: #`,`{`,`$sidebar-footer-padding-x};
  --cui-sidebar-footer-padding-y: #`,`{`,`$sidebar-footer-padding-y};
  --cui-sidebar-toggler-bg: #`,`{`,`$sidebar-toggler-bg};
  --cui-sidebar-toggler-height: #`,`{`,`$sidebar-toggler-height};
  --cui-sidebar-toggler-indicator: #`,`{`,`escape-svg($sidebar-toggler-indicator-icon)};
  --cui-sidebar-toggler-indicator-width: #`,`{`,`$sidebar-toggler-indicator-width};
  --cui-sidebar-toggler-indicator-height: #`,`{`,`$sidebar-toggler-indicator-height};
  --cui-sidebar-toggler-hover-bg: #`,`{`,`$sidebar-toggler-hover-bg};
  --cui-sidebar-toggler-indicator-hover: #`,`{`,`escape-svg($sidebar-toggler-indicator-hover-icon)}
  --cui-sidebar-narrow-width: #`,`{`,`$sidebar-narrow-width};
  --cui-sidebar-nav-title-padding-x: #`,`{`,`$sidebar-nav-title-padding-x};
  --cui-sidebar-nav-title-padding-y: #`,`{`,`$sidebar-nav-title-padding-y};
  --cui-sidebar-nav-title-margin-top: #`,`{`,`$sidebar-nav-title-margin-top};
  --cui-sidebar-nav-title-color: #`,`{`,`$sidebar-nav-title-color};
  --cui-sidebar-nav-link-padding-x: #`,`{`,`$sidebar-nav-link-padding-x};
  --cui-sidebar-nav-link-padding-y: #`,`{`,`$sidebar-nav-link-padding-y};
  --cui-sidebar-nav-link-color: #`,`{`,`$sidebar-nav-link-color};
  --cui-sidebar-nav-link-bg: #`,`{`,`$sidebar-nav-link-bg};
  --cui-sidebar-nav-link-border-color: #`,`{`,`$sidebar-nav-link-border-color};
  --cui-sidebar-nav-link-border: #`,`{`,`$sidebar-nav-link-border-width} solid var(--cui-sidebar-nav-link-border-color);
  --cui-sidebar-nav-link-border-radius: #`,`{`,`$sidebar-nav-link-border-radius};
  --cui-sidebar-nav-link-active-color: #`,`{`,`$sidebar-nav-link-active-color};
  --cui-sidebar-nav-link-active-bg: #`,`{`,`$sidebar-nav-link-active-bg};
  --cui-sidebar-nav-link-active-icon-color: #`,`{`,`$sidebar-nav-link-active-icon-color};
  --cui-sidebar-nav-link-disabled-color: #`,`{`,`$sidebar-nav-link-disabled-color};
  --cui-sidebar-nav-link-disabled-icon-color: #`,`{`,`$sidebar-nav-link-disabled-icon-color};
  --cui-sidebar-nav-link-hover-color: #`,`{`,`$sidebar-nav-link-hover-color};
  --cui-sidebar-nav-link-hover-bg: #`,`{`,`$sidebar-nav-link-hover-bg};
  --cui-sidebar-nav-link-hover-icon-color: #`,`{`,`$sidebar-nav-link-hover-icon-color};
  --cui-sidebar-nav-icon-width: #`,`{`,`$sidebar-nav-icon-width};
  --cui-sidebar-nav-icon-height: #`,`{`,`$sidebar-nav-icon-height};
  --cui-sidebar-nav-icon-font-size: #`,`{`,`$sidebar-nav-icon-font-size};
  --cui-sidebar-nav-link-icon-color: #`,`{`,`$sidebar-nav-link-icon-color};
  --cui-sidebar-nav-group-bg: #`,`{`,`$sidebar-nav-group-bg};
  --cui-sidebar-nav-group-items-padding-y: #`,`{`,`$sidebar-nav-group-items-padding-y};
  --cui-sidebar-nav-group-items-padding-x: #`,`{`,`$sidebar-nav-group-items-padding-x};
  --cui-sidebar-nav-group-indicator: #`,`{`,`escape-svg($sidebar-nav-group-indicator-icon)};
  --cui-sidebar-nav-group-indicator-hover: #`,`{`,`escape-svg($sidebar-nav-group-indicator-hover-icon)};
  --cui-sidebar-nav-group-toggle-show-color: #`,`{`,"$sidebar-nav-group-toggle-show-color};\n  ```\n"]),kw(5),qv("  ```css\n  --cui-backdrop-zindex: #",`{`,`$zindex-sidebar-backdrop};
  --cui-backdrop-bg: #`,`{`,`$sidebar-backdrop-bg};
  --cui-backdrop-opacity: #`,`{`,`$sidebar-backdrop-opacity};
  \`\`\`

  `),kw(2),Td(`

  \`\`\`css
  --cui-mobile-breakpoint: #`,`{`,"$mobile-breakpoint};\n  ```\n"),kw(4),Td("  ```ts\n  const vars = ",`{`,`
    '--my-css-var': 10,
    '--my-another-css-var': "red"
  }
  \`\`\`

  \`\`\`html
  <div [ngStyle]="vars"></div>
  \`\`\`
`),kw(4),Qv(`  \`\`\`scss
  $sidebar-width:                            16rem;
  $sidebar-widths: (
    sm: 12rem,
    lg: 20rem,
    xl: 24rem
  );
  $sidebar-padding-y:                        0;
  $sidebar-padding-x:                        0;
  $sidebar-color:                            $high-emphasis-inverse;
  $sidebar-bg:                               $gray-base;
  $sidebar-border-width:                     0;
  $sidebar-border-color:                     transparent;
  $sidebar-transition:                       margin-left .15s, margin-right .15s, box-shadow .075s, transform .15s, width .15s, z-index 0s ease .15s;

  $sidebar-brand-height:                     4rem;
  $sidebar-brand-color:                      $high-emphasis-inverse;
  $sidebar-brand-bg:                         rgba($black, .2);

  $sidebar-header-height:                    4rem;
  $sidebar-header-padding-y:                 .75rem;
  $sidebar-header-padding-x:                 1rem;
  $sidebar-header-bg:                        rgba($black, .2);
  $sidebar-header-height-transition:         height .15s, padding .15s;

  $sidebar-narrow-width:                     4rem;

  $sidebar-backdrop-bg:                      $black;
  $sidebar-backdrop-opacity:                 .5;

  $sidebar-nav-title-padding-y:              .75rem;
  $sidebar-nav-title-padding-x:              1rem;
  $sidebar-nav-title-margin-top:             1rem;
  $sidebar-nav-title-color:                  $medium-emphasis-inverse;
  $sidebar-nav-title-transition:             height .15s, margin .15s;

  $sidebar-nav-link-padding-y:               .8445rem;
  $sidebar-nav-link-padding-x:               1rem;
  $sidebar-nav-link-color:                   $medium-emphasis-inverse;
  $sidebar-nav-link-bg:                      transparent;
  $sidebar-nav-link-border-width:            0;
  $sidebar-nav-link-border-color:            transparent;
  $sidebar-nav-link-border-radius:           0;
  $sidebar-nav-link-transition:              background .15s ease, color .15s ease;
  $sidebar-nav-link-icon-color:              $medium-emphasis-inverse;

  $sidebar-nav-link-hover-color:             $high-emphasis-inverse;
  $sidebar-nav-link-hover-bg:                rgba($white, .05);
  $sidebar-nav-link-hover-icon-color:        $high-emphasis-inverse;

  $sidebar-nav-link-active-color:            $high-emphasis-inverse;
  $sidebar-nav-link-active-bg:               rgba($white, .05);
  $sidebar-nav-link-active-icon-color:       $high-emphasis-inverse;

  $sidebar-nav-link-disabled-color:          $disabled-inverse;
  $sidebar-nav-link-disabled-icon-color:     $sidebar-nav-link-icon-color;

  $sidebar-nav-icon-width:                   4rem;
  $sidebar-nav-icon-height:                  1.25rem;
  $sidebar-nav-icon-font-size:               $sidebar-nav-icon-height;

  $sidebar-nav-group-bg:                     rgba(0, 0, 0, .2);
  $sidebar-nav-group-transition:             background .15s ease-in-out;
  $sidebar-nav-group-toggle-show-color:      $sidebar-nav-link-color;

  $sidebar-nav-group-items-padding-y:        0;
  $sidebar-nav-group-items-padding-x:        0;
  $sidebar-nav-group-items-transition:       height .15s ease;

  $sidebar-nav-group-indicator-color:        $medium-emphasis-inverse;
  $sidebar-nav-group-indicator-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#`,`{`,`$sidebar-nav-group-indicator-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
  $sidebar-nav-group-indicator-hover-color:  $sidebar-nav-link-hover-color;
  $sidebar-nav-group-indicator-hover-icon:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#`,`{`,`$sidebar-nav-group-indicator-hover-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
  $sidebar-nav-group-indicator-transition:   transform .15s;

  $sidebar-footer-height:                    auto;
  $sidebar-footer-padding-y:                 .75rem;
  $sidebar-footer-padding-x:                 1rem;
  $sidebar-footer-bg:                        rgba($black, .2);
  $sidebar-footer-height-transition:         height .15s, padding .15s;

  $sidebar-toggler-height:                   3rem;
  $sidebar-toggler-bg:                       rgba($black, .2);
  $sidebar-toggler-transition:               transform .15s;

  $sidebar-toggler-indicator-width:          4rem;
  $sidebar-toggler-indicator-height:         3rem;
  $sidebar-toggler-indicator-color:          $gray-600;
  $sidebar-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'>%3Cpath fill='#`,`{`,`$sidebar-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/></svg>");
  $sidebar-toggler-hover-bg:                 rgba(0, 0, 0, .3);

  $sidebar-toggler-indicator-hover-color:    $sidebar-nav-link-hover-color;
  $sidebar-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'>%3Cpath fill='#`,`{`,`$sidebar-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/></svg>");

  $sidebar-light-color:    $body-color;
  $sidebar-light-bg:       $white;
  $sidebar-light-border-width:                     0;
  $sidebar-light-border-color:                     transparent;

  $sidebar-light-brand-color:  $white;
  $sidebar-light-brand-bg:     $primary;

  $sidebar-light-header-bg: rgba($black, .2);

  $sidebar-light-nav-title-color:                  $medium-emphasis;

  $sidebar-light-nav-link-color:                   $medium-emphasis;
  $sidebar-light-nav-link-bg:                      transparent;
  $sidebar-light-nav-link-icon-color:              $medium-emphasis;

  $sidebar-light-nav-link-hover-color:             $high-emphasis;
  $sidebar-light-nav-link-hover-bg:                theme-color("primary");
  $sidebar-light-nav-link-hover-icon-color:        $high-emphasis;

  $sidebar-light-nav-link-active-color:            $high-emphasis;
  $sidebar-light-nav-link-active-bg:               rgba($white, .05);
  $sidebar-light-nav-link-active-icon-color:       $high-emphasis;

  $sidebar-light-nav-link-disabled-color:          $disabled;
  $sidebar-light-nav-link-disabled-icon-color:     $sidebar-light-nav-link-icon-color;

  $sidebar-light-nav-group-bg:                     rgba(0, 0, 0, .05);
  $sidebar-light-nav-group-toggle-show-color:      $sidebar-light-nav-link-color;

  $sidebar-light-nav-group-indicator-color:        $medium-emphasis;
  $sidebar-light-nav-group-indicator-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#`,`{`,`$sidebar-light-nav-group-indicator-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
  $sidebar-light-nav-group-indicator-hover-color:  $sidebar-light-nav-link-hover-color;
  $sidebar-light-nav-group-indicator-hover-icon:   url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#`,`{`,`$sidebar-light-nav-group-indicator-hover-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");

  $sidebar-light-footer-bg:                        rgba($black, .1);

  $sidebar-light-toggler-bg:                       rgba($black, .1);
  $sidebar-light-toggler-hover-bg:                 rgba(0, 0, 0, .2);
  $sidebar-light-toggler-indicator-color:          $medium-emphasis;
  $sidebar-light-toggler-indicator-icon:           url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'>%3Cpath fill='#`,`{`,`$sidebar-light-toggler-indicator-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/></svg>");
  $sidebar-light-toggler-indicator-hover-color:    $sidebar-light-nav-link-hover-color;
  $sidebar-light-toggler-indicator-hover-icon:     url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 14'>%3Cpath fill='#`,`{`,`$sidebar-light-toggler-indicator-hover-color}' d='M9.148 2.352l-4.148 4.148 4.148 4.148q0.148 0.148 0.148 0.352t-0.148 0.352l-1.297 1.297q-0.148 0.148-0.352 0.148t-0.352-0.148l-5.797-5.797q-0.148-0.148-0.148-0.352t0.148-0.352l5.797-5.797q0.148-0.148 0.352-0.148t0.352 0.148l1.297 1.297q0.148 0.148 0.148 0.352t-0.148 0.352z'/></svg>");
  \`\`\`

  `),kw(6),Td(` `,d.usage,`
`))},dependencies:[f,nr,ie,c,vs],encapsulation:2})}};export{M as SidebarDocsComponent};