import{$t as Uv,Br as kw,Fi as v,Nt as Rs,T as D_,kt as RM,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import{Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var p=class c{constructor(){this.headService=v(y);this.name=`Migration v3 to v4`;this.title=`CoreUI 4 Angular Migration`;this.description=`Track and review changes to the CoreUI Angular components to help you migrate from v3 to v4.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(i){return new(i||c)}}static{this.ɵcmp=D_({type:c,selectors:[[`docs-migration-v3-v4`]],decls:218,vars:2,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[`markdown`,``,1,`highlight`],[1,`api-table`]],template:function(i,d){i&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,`

  CoreUI for Angular is the Angular version of CoreUI components library, so before read the following guide, please check also [CoreUI 3 to 4 migration guide](https://coreui.io/docs/migration/).
`),gd(),Rs(7,`markdown`),RM(8,`

  ## Project structure

  Template project structure remains mostly unchanged.
`),gd(),Rs(9,`pre`,2),RM(10,`  \`\`\`text
  coreui-angular-admin-template
  \u251C\u2500\u2500 src/
  \u2502   \u251C\u2500\u2500 app/
  |   \u2502   \u251C\u2500\u2500 containers/
  |   \u2502   \u251C\u2500\u2500 icons/
  |   \u2502   \u251C\u2500\u2500 views/
  |   \u2502   \u2514\u2500\u2500 app.module.ts
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

  \`src/app/containers/default-layout/\`

  **CoreUI v3**
`),gd(),Rs(15,`pre`,2),RM(16,`  \`\`\`text
  \u2500 c-sidebar
    \u251C\u2500 c-sidebar-brand
    \u2514\u2500 c-sidebar-nav
  \u2500 c-sidebar aside
  \u2500 c-wrapper
    \u251C\u2500 c-header fixed
    \u251C\u2500 c-toggler
    \u251C\u2500 ...
    \u251C\u2500 c-subheader
    \u2502  \u2514\u2500 c-breadcrumb
    \u251C\u2500 c-body
    \u2502  \u2514\u2500 main class="c-main"
    \u2502     \u2514\u2500 c-container fluid
    \u2502        \u2514\u2500 router-outlet
    \u2514\u2500 c-footer
  \`\`\`
`),gd(),Rs(17,`markdown`),RM(18,`
  **CoreUI v4**
`),gd(),Rs(19,`pre`,2),RM(20,`  \`\`\`
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
`),gd(),Rs(21,`markdown`),RM(22,`

  ## Styles

  See: \`src/scss/style.scss\`

  ## Components

  ### Accordion

  `),Rs(23,`div`,3),RM(24,`


  | v3  | v4
  | --- | ---
  | c-accordion       | c-accordion
  | c-accordion-group | -
  | -                 | c-accordion-item
  | -                 | cAccordionButton

  `),gd(),RM(25,`


  ### Alert

  `),Rs(26,`div`,3),RM(27,`

  | v3  | v4
  | --- | ---
  | c-alert | c-alert
  | -       | cAlertHeading
  | -       | cAlertLink

  `),gd(),RM(28,`

  `),Rs(29,`div`,3),RM(30,`

    ---

    **c-alert**

    | v3  | v4
    | --- | ---
    | Input
    | \`closeButton\` | \`dismissible\`
    | \`show\`        | \`visible\`
    | \`iconHtml\`    | -
    | \`timeout\`     | -
    | Output
    | \`dismissed\`   | \`visibleChange\`
    | \`timer\`       | -


  `),gd(),RM(31,`


  ### Avatar

  `),Rs(32,`div`,3),RM(33,`

    | v3  | v4
    | --- | ---
    | -   | c-avatar

  `),gd(),RM(34,`

  ### Badge

  `),Rs(35,`div`,3),RM(36,`

    | v3  | v4
    | --- | ---
    | c-badge | c-badge

  `),gd(),RM(37,`

  ---

  **c-badge**

  `),Rs(38,`div`,3),RM(39,"\n\n  | v3  | v4\n  | --- | ---\n  | Input\n  | `shape` | `shape`\n  | `color  | `color`\n  | -       | `position`\n  | -       | `size`\n  | -       | `textColor`\n\n  "),gd(),RM(40,`

  ### Breadcrumb

  `),Rs(41,`div`,3),RM(42,`

    | v3  | v4
    | --- | ---
    | c-breadcrumb      | c-breadcrumb
    | -                 | c-breadcrumb-item
    | cBreadcrumbRouter | c-breadcrumb-router

  `),gd(),RM(43,`

  You can compose breadcrumbs with items, or use default active route based \`c-breadcrumb-router\` component.

  ### Button

  `),Rs(44,`div`,3),RM(45,`

    | v3  | v4  | module
    | --- | --- | ---
    | cButton           | cButton          |
    | c-button-group    | c-button-group   | ButtonGroup
    | cButtonRadio      | -                |
    | cButtonRadioGroup | -                |
    | c-button-toolbar  | c-button-toolbar | ButtonGroup
    | -                 | cButtonClose     |

  `),gd(),RM(46,`

  **cButton**

  `),Rs(47,`div`,3),RM(48,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `block`   | -\n    | `shape`   | `shape`\n    | `variant` | `variant`\n    | `size`    | `size`\n    | `color`   | `color`\n    | -         | `type`\n    | `tabindex`| -\n    | `disabled`| `disabled`\n    | `pressed` | `active`\n\n  "),gd(),RM(49,`

  **c-button-group**

  `),Rs(50,`div`,3),RM(51,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | -          | `role`\n    | `size`     | `size`\n    | `vertical` | `vertical`\n\n  "),gd(),RM(52,`

  **c-button-toolbar**

  `),Rs(53,`div`,3),RM(54,`

    | v3  | v4
    | --- | ---
    | Input
    | -          | \`role\`
    | \`justify\`  | -


  `),gd(),RM(55,`



  ### Callout

  `),Rs(56,`div`,3),RM(57,`

    | v3  | v4
    | --- | ---
    | c-callout | c-callout

  `),gd(),RM(58,`

  ### Card

  `),Rs(59,`div`,3),RM(60,`

    | v3  | v4
    | --- | ---
    | c-card                | c-card
    | c-card-body           | c-card-body
    | c-card-footer         | c-card-footer
    | c-card-group          | c-card-group
    | c-card-header         | c-card-header
    | c-card-header-actions | -
    | -                     | cCardImg
    | -                     | cCardLink
    | -                     | cCardText
    | -                     | cCardTitle
    | -                     | cCardSubtitle

  `),gd(),RM(61,`

  **c-card**

  `),Rs(62,`div`,3),RM(63,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `color`    | `color`\n    | `textColor`| `textColor`\n    | `accentColor`| -\n    | `align` | -\n    | `borderColor`| -\n\n  "),gd(),RM(64,`

  **c-card-body, c-card-header, c-card-footer**

  `),Rs(65,`div`,3),RM(66,`

    | v3  | v4
    | --- | ---
    | Input
    | \`align\` | -
    | \`borderColor\`| -
    | \`color\` | -
    | \`textColor\` | -

  `),gd(),RM(67,`

  **c-card-group**

  `),Rs(68,`div`,3),RM(69,`

    | v3  | v4
    | --- | ---
    | Input
    | \`deck\` | -
    | \`column\`| -

  `),gd(),RM(70,`

  ### Carousel

  `),Rs(71,`div`,3),RM(72,`

    | v3  | v4
    | --- | ---
    | c-carousel            | c-carousel
    | c-carousel-caption    | c-carousel-caption
    | c-carousel-control    | c-carousel-control
    | c-carousel-indicators | c-carousel-indicators
    | c-carousel-inner      | c-carousel-inner
    | c-carousel-item       | c-carousel-item

  `),gd(),RM(73,`

  ### Collapse

  `),Rs(74,`div`,3),RM(75,`

    | v3  | v4
    | --- | ---
    | cCollapse | cCollapse

  `),gd(),RM(76,`

  **cCollapse**

  `),Rs(77,`div`,3),RM(78,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `duration`  | -\n    | `transition`| -\n    | `animate`   | -\n    | `show`      | `visible`\n    | `navbar`    | `navbar`\n    |             | `horizontal`\n\n  "),gd(),RM(79,`

  ### Dropdown

  `),Rs(80,`div`,3),RM(81,`

    | v3  | v4
    | --- | ---
    | cDropdown        | c-dropdown
    | cDropdownToggle  | cDropdownToggle
    | -                | cDropdownClose
    | cDropdownHeader  | cDropdownHeader
    | cDropdownItem    | cDropdownItem
    | -                | cDropdownItemPlain
    | cDropdownMenu    | cDropdownMenu
    | cDropdownDivider | cDropdownDivider

  `),gd(),RM(82,`


  **c-dropdown**

  `),Rs(83,`div`,3),RM(84,`

    | v3  | v4
    | --- | ---
    | Input
    | \`cDropdown\`  | \`direction\`
    | \`cDropdownAlign\`| \`alignment\`

  `),gd(),RM(85,`

  **cDropdownToggle**

  `),Rs(86,`div`,3),RM(87,`

    | v3  | v4
    | --- | ---
    | Input
    | \`cDropdownCaret\`  | \`caret\`, \`split\`

  `),gd(),RM(88,`

    ### Form

  See: [Forms](https://coreui.io/angular/docs/forms/)

  `),Rs(89,`div`,3),RM(90,`

    | v3  | v4
    | --- | ---
    | cForm                 | cForm
    | c-form-check          | c-form-check
    | -                     | cFormCheckInput
    | -                     | cFormCheckLabel
    | c-form-feedback       | c-form-feedback
    | -                     | cFormFloating
    | c-form-group          | -
    | c-form-text           | cFormText
    | cInput                | cFormControl
    | c-input-group         | c-input-group
    | c-input-group-append  | -
    | c-input-group-prepend | -
    | c-input-group-text    | cInputGroupText
    | cLabel                | cLabel
    | cSelect               | cSelect
    | cTextarea             | cFormControl

  `),gd(),RM(91,`

  **cForm**

  `),Rs(92,`div`,3),RM(93,`

    | v3  | v4
    | --- | ---
    | Input
    | \`inline\` | -
    | \`wasValidated\` | \`validated\`

  `),gd(),RM(94,`

  **c-form-check**

  `),Rs(95,`div`,3),RM(96,`

    | v3  | v4
    | --- | ---
    | Input
    | \`custom\` | -
    | \`disabled\` | -
    | \`variant\` | -

  `),gd(),RM(97,`

  **cInput**

  `),Rs(98,`div`,3),RM(99,`

    | v3  | v4
    | --- | ---
    | Input
    | \`custom\` | -

  `),gd(),RM(100,`


  **cSelect**

  `),Rs(101,`div`,3),RM(102,`

    | v3  | v4
    | --- | ---
    | Input
    | \`custom\` | -

  `),gd(),RM(103,`

  **cLabel**

  `),Rs(104,`div`,3),RM(105,`

    | v3  | v4
    | --- | ---
    | Input
    | \`hidden\` | -
    | \`variant\`    | -
    | \`custom\`    | -

  `),gd(),RM(106,`

  **c-input-group**

  `),Rs(107,`div`,3),RM(108,`

    | v3  | v4
    | --- | ---
    | Input
    | \`size\` | \`sizing\`

  `),gd(),RM(109,`


  ### Grid

  `),Rs(110,`div`,3),RM(111,`

    | v3  | v4
    | --- | ---
    | c-container  | c-container
    | cRow         | cRow
    | c-row        | c-row
    | cCol         | cCol
    | c-col        | c-col
    | -            | \`[gutter]\`

  `),gd(),RM(112,`

  **c-row**

  `),Rs(113,`div`,3),RM(114,`

    | v3  | v4
    | --- | ---
    | Input
    | \`noGutters\` | -
    | \`alignV\`    | -
    | \`alignH\`    | -

  `),gd(),RM(115,`



  ### Image

  `),Rs(116,`div`,3),RM(117,`

    | v3  | v4
    | --- | ---
    | cImg  | cImg

  `),gd(),RM(118,`

  ### List Group

  `),Rs(119,`div`,3),RM(120,`

    | v3  | v4
    | --- | ---
    | cListGroup  | cListGroup
    | cListGroupItem  | cListGroupItem

  `),gd(),RM(121,`

  **cListGroup**

  `),Rs(122,`div`,3),RM(123,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `horizontal` | `horizontal`\n    | `accent`  | -\n    | `flush`  | `flush`\n\n  "),gd(),RM(124,`

  **cListGroupItem**

  `),Rs(125,`div`,3),RM(126,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `accent`  | -\n    | `action`  | -\n    | `active`  | `active`\n    | `color`   | `color`\n    | `divider` | -\n\n  "),gd(),RM(127,`



  ### Modal

  `),Rs(128,`div`,3),RM(129,`

    | v3  | v4
    | --- | ---
    | c-modal      | c-modal
    | #modalBody   | c-modal-body
    | #modalFooter | c-modal-footer
    | #modalHeader | c-modal-header
    | -            | cModalTitle
    | -            | cModalToggle

  `),gd(),RM(130,`

  **c-modal**

  `),Rs(131,`div`,3),RM(132,`

    | v3  | v4
    | --- | ---
    | Input
    | \`color\` | -
    | \`closeOnBackdrop\`  | \`backdrop\`

  `),gd(),RM(133,`

  ### Nav

  `),Rs(134,`div`,3),RM(135,`

    | v3  | v4
    | --- | ---
    | c-nav      | c-nav
    | c-nav-item | c-nav-item
    | cNavLink   | cNavLink

  `),gd(),RM(136,`

  **c-nav**

  `),Rs(137,`div`,3),RM(138,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `fill` | `layout`\n    | `justified` | `layout`\n    | `vertical` | -\n    | `inCard` | -\n    | `variant`  | `variant`\n\n  "),gd(),RM(139,`

  **cNavLink**

  `),Rs(140,`div`,3),RM(141,`

    | v3  | v4
    | --- | ---
    | Input
    | \`tabindex\` | -

  `),gd(),RM(142,`

  ### Navbar

  `),Rs(143,`div`,3),RM(144,`

    | v3  | v4
    | --- | ---
    | c-navbar       | c-navbar
    | c-navbar-brand | cNavbarBrand
    | c-navbar-nav   | c-navbar-nav
    | c-navbar-text  | c-navbar-text
    | -              | cNavbarToggler

  `),gd(),RM(145,`

  **c-navbar**

  `),Rs(146,`div`,3),RM(147,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `light` | `colorScheme`\n    | `color` | `color`\n    | `fixed` | `placement`\n    | `sticky` | `placement`\n    | `expandable` | `expand`\n\n  "),gd(),RM(148,`


  ### Offcanvas

  `),Rs(149,`div`,3),RM(150,`

    | v3  | v4
    | --- | ---
    | -   | c-offcanvas
    | -   | c-offcanvas-body
    | -   | c-offcanvas-header
    | -   | cOffcanvasTitle
    | -   | cOffcanvasToggle

  `),gd(),RM(151,`

  ### Pagination

  `),Rs(152,`div`,3),RM(153,`

    | v3  | v4
    | --- | ---
    | -   | c-pagination
    | -   | cPageLink
    | -   | cPageItem
    | -   | c-page-item

  `),gd(),RM(154,`

  ### Placeholder

  `),Rs(155,`div`,3),RM(156,`

    | v3  | v4
    | --- | ---
    | -   | cPlaceholder
    | -   | cPlaceholderAnimation

  `),gd(),RM(157,`

  ### Popover

  `),Rs(158,`div`,3),RM(159,`

    | v3  | v4
    | --- | ---
    | -   | cPopover

  `),gd(),RM(160,`


  ### Progress

  `),Rs(161,`div`,3),RM(162,`

    | v3  | v4
    | --- | ---
    | c-progress     | c-progress
    | c-progress-bar | c-progress-bar

  `),gd(),RM(163,`

  **c-progress**

  `),Rs(164,`div`,3),RM(165,`

    | v3  | v4
    | --- | ---
    | Input
    | \`size\` | -

  `),gd(),RM(166,`

  **c-progress-bar**

  `),Rs(167,`div`,3),RM(168,`

    | v3  | v4
    | --- | ---
    | Input
    | \`striped\` | \`variant\`
    | \`precision\` | -
    | \`min\` | -
    | \`max\` | -

  `),gd(),RM(169,`


  ### Sidebar

  `),Rs(170,`div`,3),RM(171,`

    | v3  | v4
    | --- | ---
    | c-sidebar     | c-sidebar
    | c-sidebar-nav | c-sidebar-nav

  `),gd(),RM(172,`

  **c-sidebar**

  `),Rs(173,`div`,3),RM(174,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `fixed` | -\n    | `unfoldable` | `unfoldable`\n    | `overlaid` | `overlaid`\n    | `minimize` | -\n    | `breakpoint` | -\n    | `mobile` | -\n    | `show` | `visible`\n    | `aside` | -\n    | `hideOnMobileClick` | -\n\n  "),gd(),RM(175,`


  ### Shared Module

  `),Rs(176,`div`,3),RM(177,`

    | v3  | v4
    | --- | ---
    | cHtmlAttr | cHtmlAttr
    | -         | cTemplateId

  `),gd(),RM(178,`


  ### Spinkit \u2192 Spinner

  `),Rs(179,`div`,3),RM(180,`

    | v3  | v4
    | --- | ---
    | c-spinkit | c-spinner

  `),gd(),RM(181,`

  `),Rs(182,`div`,3),RM(183,`

    | v3  | v4
    | --- | ---
    | Input
    | \`center\` | -
    | \`name\` | -
    | \`grow\` | \`variant\`

  `),gd(),RM(184,`


  ### Switch \u2192 Form Check

  `),Rs(185,`div`,3),RM(186,`

    | v3  | v4  | Module
    | --- | --- | ---
    | c-switch | c-form-check \`switch\` | Form

  `),gd(),RM(187,`

  ### Table

  `),Rs(188,`div`,3),RM(189,`

    | v3  | v4
    | --- | ---
    | -   | cTable
    | -   | cTableActive
    | -   | cTableColor

  `),gd(),RM(190,`

  ### Tabset \u2192 Tabs

  `),Rs(191,`div`,3),RM(192,`

    | v3  | v4
    | --- | ---
    | c-tabset      | -
    | c-tab-pane    | -
    | c-tablist     | -
    | c-tab-content | -
    | c-tab         | -
    | -   | c-tab-content
    | -   | cTabContent
    | -   | c-tab-pane

  `),gd(),RM(193,`

  ### Toast

  `),Rs(194,`div`,3),RM(195,`

    | v3  | v4
    | --- | ---
    | c-toast        | c-toast
    | c-toast-body   | c-toast-body
    | c-toast-header | c-toast-header
    | c-toaster      | c-toaster
    | cToasterHost   | cToasterHost
    | cToastClose    | cToastClose

  `),gd(),RM(196,`

  **c-toast**

  `),Rs(197,`div`,3),RM(198,"\n\n    | v3  | v4\n    | --- | ---\n    | Input\n    | `show` | `visible`\n    | `index` | -\n    | Output\n    | `shown` | `visibleChange`\n    | `hidden` | `visibleChange`\n\n  "),gd(),RM(199,`


  ### Tooltip

  `),Rs(200,`div`,3),RM(201,`

    | v3  | v4
    | --- | ---
    | -   | cTooltip

  `),gd(),RM(202,`

  ### Utilities

  `),Rs(203,`div`,3),RM(204,`

    | v3  | v4
    | --- | ---
    | -   | cAlign
    | -   | cBgColor
    | -   | cBorder
    | -   | cRounded
    | -   | cTextColor

  `),gd(),RM(205,`

  ### Layout

  `),Rs(206,`div`,3),RM(207,`

    | v3  | v4  | module
    | --- | --- | ---
    | c-body         | \`div class="body"\` |
    | c-footer       | c-footer         | Footer
    | c-header       | c-header         | Header
    | c-subheader    | -                |
    | c-header-brand | c-header-brand   | Header
    | -              | c-header-divider | Header
    | -              | c-header-nav     | Header
    | -              | c-header-text    | Header
    | -              | cHeaderToggler   | Header
    | c-wrapper      | \`div class="wrapper"\` |

  `),gd(),RM(208,`

  **c-header**

  `),Rs(209,`div`,3),RM(210,`

    | v3  | v4
    | --- | ---
    | Input
    | \`colorScheme\` | -
    | \`fixed\` | \`position\`

  `),gd(),RM(211,`

  **c-header-brand**

  `),Rs(212,`div`,3),RM(213,`

    | v3  | v4
    | --- | ---
    | Input
    | \`minimized\` | -

  `),gd(),RM(214,`

  **c-footer**

  `),Rs(215,`div`,3),RM(216,`

    | v3  | v4
    | --- | ---
    | Input
    | \`fixed\` | \`position\`

  `),gd(),RM(217,`


  ### Embed

  See: [https://coreui.io/docs/helpers/ratio/](https://coreui.io/docs/helpers/ratio/)

  ### Media

  See: [https://coreui.io/docs/utilities/flex/#media-object](https://coreui.io/docs/utilities/flex/#media-object)

`),gd()),i&2&&(kw(),Uv(d.title),kw(2),Uv(d.description))},dependencies:[f,nr],encapsulation:2})}};export{p as MigrationV3V4Component};