import{$t as Uv,Br as kw,Fi as v$1,Nt as Rs,T as D_,Ut as Td,kt as RM,nt as KM,qn as cv,qr as lv,ur as gd}from"./chunk-D4QfcjgQ.js";import"./chunk-BwrHBgAX.js";import"./chunk-CUBvct6a.js";import{Ar as sm,Ui as nr,Xi as y}from"./main-CRW2IFLY.js";import{t as ie}from"./chunk-DPjinjjK.js";import{t as f$1}from"./chunk-CircK-BE.js";import"./chunk-PIxlJhxX.js";var x=class o{static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-containers03`]],decls:2,vars:0,consts:[[`fluid`,``]],template:function(i,r){i&1&&(Rs(0,`c-container`,0),RM(1,` Content here...
`),gd())},dependencies:[sm],styles:[`[_nghost-%COMP%]   c-container[_ngcontent-%COMP%]{background-color:var(--%NS%cui-light)}`]})}};var u=class o{static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-containers02`]],decls:10,vars:0,consts:[[`breakpoint`,`sm`],[`breakpoint`,`md`],[`breakpoint`,`lg`],[`breakpoint`,`xl`],[`breakpoint`,`xxl`]],template:function(i,r){i&1&&(Rs(0,`c-container`,0),RM(1,` 100% wide until small breakpoint
`),gd(),Rs(2,`c-container`,1),RM(3,` 100% wide until medium breakpoint
`),gd(),Rs(4,`c-container`,2),RM(5,` 100% wide until large breakpoint
`),gd(),Rs(6,`c-container`,3),RM(7,` 100% wide until extra large breakpoint
`),gd(),Rs(8,`c-container`,4),RM(9,` 100% wide until extra extra large breakpoint
`),gd())},dependencies:[sm],styles:[`[_nghost-%COMP%]   c-container[_ngcontent-%COMP%]{margin-bottom:1rem;background-color:var(--%NS%cui-light)}`]})}};var f=class o{static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-containers01`]],decls:2,vars:0,template:function(i,r){i&1&&(Rs(0,`c-container`),RM(1,` Content here...
`),gd())},dependencies:[sm],styles:[`[_nghost-%COMP%]   c-container[_ngcontent-%COMP%]{margin-bottom:1rem;background-color:var(--%NS%cui-light)}`]})}};var v=`\`\`\`typescript
import { GridModule } from '@coreui/angular';

@NgModule({
    imports: [GridModule,]
})
export class AppModule() { }
\`\`\`
`;var I=()=>[`layout/containers/examples/containers01.component.html`,`layout/containers/examples/containers01.component.ts`,`layout/containers/examples/containers02.component.scss`];var N=()=>[`layout/containers/examples/containers02.component.html`,`layout/containers/examples/containers02.component.ts`,`layout/containers/examples/containers02.component.scss`];var _=()=>[`layout/containers/examples/containers03.component.html`,`layout/containers/examples/containers03.component.ts`,`layout/containers/examples/containers01.component.scss`];var M=class o{constructor(){this.usage=v;this.headService=v$1(y);this.name=`Containers`;this.title=`Angular Containers`;this.description=`Containers are a fundamental building block of CoreUI for Angular. They contain, pad, and align your content within a given device or viewport.`}ngOnInit(){this.headService.updateHeader({title:this.title,name:this.name,description:this.description})}static{this.ɵfac=function(i){return new(i||o)}}static{this.ɵcmp=D_({type:o,selectors:[[`docs-containers`]],decls:176,vars:12,consts:[[`id`,`getting-started`],[1,`docs-lead`,`fs-4`,`fw-light`],[1,`table-responsive`],[1,`table`,`table`,`table-striped`,`table-api`],[1,`border-dark`],[`scope`,`col`],[1,`fw-normal`],[`scope`,`row`,1,`fw-normal`],[1,`text-medium-emphasis`],[`stackblitz`,``,`componentName`,`Containers01Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Containers02Component`,3,`files`,`name`],[`stackblitz`,``,`componentName`,`Containers03Component`,3,`files`,`name`],[`markdown`,``,1,`highlight`],[1,`table-responsive`,`api-table`]],template:function(i,r){i&1&&(Rs(0,`h1`,0),RM(1),gd(),Rs(2,`p`,1),RM(3),gd(),lv(4,`docs-ads-carbon-loader`),Rs(5,`markdown`),RM(6,"\n\n  ## How they work\n\n  Containers are the most basic layout element in CoreUI for Angular and are **required when using our default grid\n  system**. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be\n  nested, most layouts do not require a nested container.\n\n  CoreUI for Angular comes with three different containers:\n\n  - `c-container`, which sets a `max-width` at each responsive breakpoint\n  - `c-container fluid`, which has `width: 100%` at all breakpoints\n  - `c-container { sm|md|lg|xl|xxl }`, with `width: 100%` until the specified breakpoint\n\n  The table below illustrates how each container's `max-width` compares to the original `c-container` and `c-container\n  fluid` across each breakpoint.\n\n"),gd(),Rs(7,`div`,2)(8,`table`,3)(9,`thead`)(10,`tr`),lv(11,`td`,4),Rs(12,`th`,5),RM(13,`Extra small`),lv(14,`br`),Rs(15,`span`,6),RM(16,`<576px`),gd()(),Rs(17,`th`,5),RM(18,`Small`),lv(19,`br`),Rs(20,`span`,6),RM(21,`≥576px`),gd()(),Rs(22,`th`,5),RM(23,`Medium`),lv(24,`br`),Rs(25,`span`,6),RM(26,`≥768px`),gd()(),Rs(27,`th`,5),RM(28,`Large`),lv(29,`br`),Rs(30,`span`,6),RM(31,`≥992px`),gd()(),Rs(32,`th`,5),RM(33,`X-Large`),lv(34,`br`),Rs(35,`span`,6),RM(36,`≥1200px`),gd()(),Rs(37,`th`,5),RM(38,`XX-Large`),lv(39,`br`),Rs(40,`span`,6),RM(41,`≥1400px`),gd()()()(),Rs(42,`tbody`)(43,`tr`)(44,`th`,7)(45,`code`),RM(46,`<c-container>`),gd()(),Rs(47,`td`,8),RM(48,`100%`),gd(),Rs(49,`td`),RM(50,`540px`),gd(),Rs(51,`td`),RM(52,`720px`),gd(),Rs(53,`td`),RM(54,`960px`),gd(),Rs(55,`td`),RM(56,`1140px`),gd(),Rs(57,`td`),RM(58,`1320px`),gd()(),Rs(59,`tr`)(60,`th`,7)(61,`code`),RM(62,`<c-container breakpoint="sm">`),gd()(),Rs(63,`td`,8),RM(64,`100%`),gd(),Rs(65,`td`),RM(66,`540px`),gd(),Rs(67,`td`),RM(68,`720px`),gd(),Rs(69,`td`),RM(70,`960px`),gd(),Rs(71,`td`),RM(72,`1140px`),gd(),Rs(73,`td`),RM(74,`1320px`),gd()(),Rs(75,`tr`)(76,`th`,7)(77,`code`),RM(78,`<c-container breakpoint="md">`),gd()(),Rs(79,`td`,8),RM(80,`100%`),gd(),Rs(81,`td`,8),RM(82,`100%`),gd(),Rs(83,`td`),RM(84,`720px`),gd(),Rs(85,`td`),RM(86,`960px`),gd(),Rs(87,`td`),RM(88,`1140px`),gd(),Rs(89,`td`),RM(90,`1320px`),gd()(),Rs(91,`tr`)(92,`th`,7)(93,`code`),RM(94,`<c-container breakpoint="lg">`),gd()(),Rs(95,`td`,8),RM(96,`100%`),gd(),Rs(97,`td`,8),RM(98,`100%`),gd(),Rs(99,`td`,8),RM(100,`100%`),gd(),Rs(101,`td`),RM(102,`960px`),gd(),Rs(103,`td`),RM(104,`1140px`),gd(),Rs(105,`td`),RM(106,`1320px`),gd()(),Rs(107,`tr`)(108,`th`,7)(109,`code`),RM(110,`<c-container breakpoint="xl">`),gd()(),Rs(111,`td`,8),RM(112,`100%`),gd(),Rs(113,`td`,8),RM(114,`100%`),gd(),Rs(115,`td`,8),RM(116,`100%`),gd(),Rs(117,`td`,8),RM(118,`100%`),gd(),Rs(119,`td`),RM(120,`1140px`),gd(),Rs(121,`td`),RM(122,`1320px`),gd()(),Rs(123,`tr`)(124,`th`,7)(125,`code`),RM(126,`<c-container breakpoint="xxl">`),gd()(),Rs(127,`td`,8),RM(128,`100%`),gd(),Rs(129,`td`,8),RM(130,`100%`),gd(),Rs(131,`td`,8),RM(132,`100%`),gd(),Rs(133,`td`,8),RM(134,`100%`),gd(),Rs(135,`td`,8),RM(136,`100%`),gd(),Rs(137,`td`),RM(138,`1320px`),gd()(),Rs(139,`tr`)(140,`th`,7)(141,`code`),RM(142,`<c-container fluid>`),gd()(),Rs(143,`td`,8),RM(144,`100%`),gd(),Rs(145,`td`,8),RM(146,`100%`),gd(),Rs(147,`td`,8),RM(148,`100%`),gd(),Rs(149,`td`,8),RM(150,`100%`),gd(),Rs(151,`td`,8),RM(152,`100%`),gd(),Rs(153,`td`,8),RM(154,`100%`),gd()()()()(),Rs(155,`markdown`),RM(156,`

  ---

  ### Default container
  Our default \`c-container\` class is a responsive, fixed-width container, meaning its \`max-width\` changes at each
  breakpoint.

`),gd(),Rs(157,`docs-example`,9),lv(158,`docs-containers01`),gd(),Rs(159,`markdown`),RM(160,"\n\n  ---\n\n  ### Responsive containers\n\n  Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after\n  which we apply `max-width` for each of the higher breakpoints. For example, `c-container sm` is 100% wide to start\n  until the `sm` breakpoint is reached, where it will scale up with `md`, `lg`,\n  `xl`, and `xxl`.\n\n"),gd(),Rs(161,`docs-example`,10),lv(162,`docs-containers02`),gd(),Rs(163,`markdown`),RM(164,`

  ---

  ### Fluid containers

  Use \`c-container fluid\` for a full width container, spanning the entire width of the viewport.

`),gd(),Rs(165,`docs-example`,11),lv(166,`docs-containers03`),gd(),Rs(167,`markdown`),RM(168,`
  ---

  ## API reference

  ### Grid Module

`),gd(),Rs(169,`div`,12),RM(170),gd(),Rs(171,`markdown`),RM(172,`
  ---

  ### c-container
  _component_

  ##### Inputs

`),Rs(173,`div`,13),RM(174,"\n\n  |prop|description|type|default|notes|\n  |:---|:---|:---|:---:|---|\n  |`fluid`|Set container 100% wide, spanning the entire width of the viewport.|`boolean`|_undefined_|\n  |`breakpoint`|Set container 100% wide until `{sm\\|md\\|lg\\|xl\\|xxl}` breakpoint.|`string`|_undefined_|\n\n\n"),gd(),RM(175,`
`),gd()),i&2&&(kw(),Uv(r.title),kw(2),Uv(r.description),kw(154),cv(`files`,KM(9,I))(`name`,r.title),kw(4),cv(`files`,KM(10,N))(`name`,r.title),kw(4),cv(`files`,KM(11,_))(`name`,r.title),kw(5),Td(` `,r.usage,`
`))},dependencies:[nr,f$1,ie,f,u,x],encapsulation:2})}};export{M as ContainersComponent};