import{$t as Uv,Br as kw,Fi as v,Gi as xp,Nt as Rs,T as D_,jt as Rp,kt as RM,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import{Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as f}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var b=class d{constructor(){this.headService=v(y);this.name=`Breakpoints`;this.title=`Angular Breakpoints`;this.description=`Breakpoints are the triggers in CoreUI for Angular for how your layout responsive changes across device or viewport sizes.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(i){return new(i||d)}}static{this.ɵcmp=D_({type:d,selectors:[[`docs-breakpoints`]],decls:117,vars:2,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[1,`api-table`,`table-responsive`],[1,`table`],[`markdown`,``,1,`highlight`],[1,`callout`,`callout-warning`],[`href`,`https://www.w3.org/TR/mediaqueries-4/#range-context`],[`href`,`https://www.w3.org/TR/mediaqueries-4/#mq-min-max`]],template:function(i,l){i&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),Rp(),RM(6,`

## Core concepts

- **Breakpoints are the building blocks of responsive design.** Use them to control when your layout can be adapted at a particular viewport or device size.

- **Use media queries to architect your CSS by breakpoint.** Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use \`min-width\` in our media queries.

- **Mobile first, responsive design is the goal.** CoreUI CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

## Available breakpoints

CoreUI for Angular includes six default breakpoints, sometimes referred to as _grid tiers_, for building responsively. These breakpoints can be customized if you're using our source Sass files.
`),xp(),gd(),Rs(7,`div`,2)(8,`table`,3)(9,`thead`)(10,`tr`)(11,`th`),RM(12,`Breakpoint`),gd(),Rs(13,`th`),RM(14,`Class infix`),gd(),Rs(15,`th`),RM(16,`Dimensions`),gd()()(),Rs(17,`tbody`)(18,`tr`)(19,`td`),RM(20,`X-Small`),gd(),Rs(21,`td`)(22,`em`),RM(23,`None`),gd()(),Rs(24,`td`),RM(25,`<576px`),gd()(),Rs(26,`tr`)(27,`td`),RM(28,`Small`),gd(),Rs(29,`td`)(30,`code`),RM(31,`sm`),gd()(),Rs(32,`td`),RM(33,`≥576px`),gd()(),Rs(34,`tr`)(35,`td`),RM(36,`Medium`),gd(),Rs(37,`td`)(38,`code`),RM(39,`md`),gd()(),Rs(40,`td`),RM(41,`≥768px`),gd()(),Rs(42,`tr`)(43,`td`),RM(44,`Large`),gd(),Rs(45,`td`)(46,`code`),RM(47,`lg`),gd()(),Rs(48,`td`),RM(49,`≥992px`),gd()(),Rs(50,`tr`)(51,`td`),RM(52,`Extra large`),gd(),Rs(53,`td`)(54,`code`),RM(55,`xl`),gd()(),Rs(56,`td`),RM(57,`≥1200px`),gd()(),Rs(58,`tr`)(59,`td`),RM(60,`Extra extra large`),gd(),Rs(61,`td`)(62,`code`),RM(63,`xxl`),gd()(),Rs(64,`td`),RM(65,`≥1400px`),gd()()()()(),Rs(66,`markdown`),Rp(),RM(67,`
Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions\u2014they don't specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.

These breakpoints are customizable via Sass\u2014you'll find them in a Sass map in our \`_variables.scss\` stylesheet.
`),xp(),gd(),Rs(68,`pre`,4),RM(69,`\`\`\`scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
\`\`\`
`),gd(),Rs(70,`markdown`),RM(71,`

For more information and examples on how to modify our Sass maps and variables, please refer to [the Sass section of the Grid documentation](https://coreui.io/docs/layout/grid#sass).

## Media queries

Since CoreUI for Angular is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

### Min-width

CoreUI for Angular primarily uses the following media query ranges\u2014or breakpoints\u2014in our source Sass files for our layout, grid system, and components.
`),gd(),Rs(72,`pre`,4),RM(73,`\`\`\`scss
// Source mixins

// No media query necessary for xs breakpoint as it's effectively \`@media (min-width: 0) { ... }\`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }
@include media-breakpoint-up(xxl) { ... }

// Usage

// Example: Hide starting at \`min-width: 0\`, and then show at the \`sm\` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
\`\`\`
`),gd(),Rs(74,`markdown`),RM(75,`
These Sass mixins translate in our compiled CSS using the values declared in our Sass variables. For example:
`),gd(),Rs(76,`pre`,4),RM(77,`\`\`\`scss
// X-Small devices (portrait phones, less than 576px)
// No media query for \`xs\` since this is the default in CoreUI

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
\`\`\`
`),gd(),Rs(78,`markdown`),RM(79,`
### Max-width

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):
`),gd(),Rs(80,`pre`,4),RM(81,`\`\`\`scss
// No media query necessary for xs breakpoint as it's effectively \`@media (max-width: 0) { ... }\`
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
@include media-breakpoint-down(xl) { ... }
@include media-breakpoint-down(xxl) { ... }

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
.custom-class {
    display: block;
  }
}
\`\`\`
`),gd(),Rs(82,`markdown`),RM(83,"\nThese mixins take those declared breakpoints, subtract `.02px` from them, and use them as our `max-width` values. For example:\n"),gd(),Rs(84,`pre`,4),RM(85,`\`\`\`scss
// X-Small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { ... }

// X-Large devices (large desktops, less than 1400px)
@media (max-width: 1399.98px) { ... }

// XX-Large devices (larger desktops)
// No media query since the xxl breakpoint has no upper bound on its width
\`\`\`
`),gd(),Rs(86,`div`,5)(87,`strong`),RM(88,`Why subtract .02px?`),gd(),RM(89,` Browsers don’t currently support `),Rs(90,`a`,6),RM(91,`range context queries`),gd(),RM(92,`, so we work around the limitations of `),Rs(93,`a`,7)(94,`code`),RM(95,`min-`),gd(),RM(96,` and `),Rs(97,`code`),RM(98,`max-`),gd(),RM(99,` prefixes`),gd(),RM(100,` and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision.
`),gd(),Rs(101,`markdown`),Rp(),RM(102,`
### Single breakpoint

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.
`),xp(),gd(),Rs(103,`pre`,4),RM(104,`\`\`\`scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
@include media-breakpoint-only(xxl) { ... }
\`\`\`
`),gd(),Rs(105,`markdown`),RM(106,`
For example the \`@include media-breakpoint-only(md) { ... }\` will result in :
`),gd(),Rs(107,`pre`,4),RM(108,"```scss\n@media (min-width: 768px) and (max-width: 991.98px) { ... }\n```\n"),gd(),Rs(109,`markdown`),RM(110,`
### Between breakpoints

Similarly, media queries may span multiple breakpoint widths:
`),gd(),Rs(111,`pre`,4),RM(112,"```scss\n@include media-breakpoint-between(md, xl) { ... }\n```\n"),gd(),Rs(113,`markdown`),RM(114,`
Which results in:
`),gd(),Rs(115,`pre`,4),RM(116,"```scss\n// Example\n// Apply styles starting from medium devices and up to extra large devices\n@media (min-width: 768px) and (max-width: 1199.98px) { ... }\n```\n"),gd()),i&2&&(kw(),Uv(l.title),kw(2),Uv(l.description))},dependencies:[f,nr],styles:[`[_nghost-%COMP%]{display:block}`]})}};export{b as BreakpointsComponent};