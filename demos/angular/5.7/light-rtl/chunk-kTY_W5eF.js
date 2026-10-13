import{Ci as wi,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,nn as Ym,on as Zm,y as DT,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Ft as aF,Kn as ro,Pn as oo,in as fF,tr as uI,xt as WM}from"./main-PMR57QFK.js";import{t as $}from"./chunk-C7H7fec3.js";import"./chunk-DeRLTHfv.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BjxcDeUZ.js";var _=class x{constructor(){this.fruits=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`}];this.teams=[{value:`design`,label:`Design`},{value:`development`,label:`Development`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`}];this.sizes=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`},{value:`large`,label:`Large`}];this.selectedTeams=wi([`development`,`sales`]);this.selectedSize=wi([`small`]);this.selectedDepartments=wi([`development`,`sales`]);this.filters=wi([`Filter one`,`Filter two`,{value:`filter-three`,label:`Filter three`,disabled:!0}])}static{this.ɵfac=function(p){return new(p||x)}}static{this.ɵcmp=Ib({type:x,selectors:[[`app-chip-set`]],decls:146,vars:8,consts:[[`xs`,`12`],[`href`,`components/chip-set`,`title`,`Chip Set`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/chip-set#basic-chip-set`],[`aria-label`,`Fruits`,3,`chips`],[`href`,`components/chip-set#selectable-chips`],[`aria-label`,`Teams`,`selectable`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#single-selection`],[`aria-label`,`Size`,`selectable`,``,`selectionMode`,`single`,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#filter-chips`],[`aria-label`,`Departments`,`filter`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#removable-chips`],[`aria-label`,`Removable filters`,`removable`,``,3,`chipsChange`,`chips`]],template:function(p,i){p&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Chip Set`),lu(),yT(12,` `),as(13,`small`),yT(14,`Basic chip set`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`,3),yT(20,`
          Group multiple chips inside `),as(21,`code`),yT(22,`c-chip-set`),lu(),yT(23,` and pass them through the
          `),as(24,`code`),yT(25,`chips`),lu(),yT(26,` input. Once the chips are selectable or removable, the set gives them a
          single tab stop with arrow-key navigation.
        `),lu(),yT(27,`
        `),as(28,`app-docs-example`,4),yT(29,`
          `),hm(30,`c-chip-set`,5),yT(31,`
        `),lu(),yT(32,`
      `),lu(),yT(33,`
    `),lu(),yT(34,`

    `),as(35,`c-card`,2),yT(36,`
      `),as(37,`c-card-header`),yT(38,`
        `),as(39,`strong`),yT(40,`Angular Chip Set`),lu(),yT(41,` `),as(42,`small`),yT(43,`Selectable chips`),lu(),yT(44,`
      `),lu(),yT(45,`
      `),as(46,`c-card-body`),yT(47,`
        `),as(48,`p`,3),yT(49,`
          Set `),as(50,`code`),yT(51,`selectable`),lu(),yT(52,` on `),as(53,`code`),yT(54,`c-chip-set`),lu(),yT(55,` to make every chip in the set
          selectable. With the default `),as(56,`code`),yT(57,`selectionMode`),lu(),yT(58,` of `),as(59,`code`),yT(60,`"multiple"`),lu(),yT(61,`, any
          number of chips can be active at once \u2014 useful for filters.
        `),lu(),yT(62,`
        `),as(63,`app-docs-example`,6),yT(64,`
          `),as(65,`c-chip-set`,7),Ym(`selectedChange`,function(l){return DT(i.selectedTeams,l)||(i.selectedTeams=l),l}),lu(),yT(66,`
        `),lu(),yT(67,`
        `),as(68,`p`,3),yT(69,`
          Use `),as(70,`code`),yT(71,`selectionMode="single"`),lu(),yT(72,` to allow only one selected chip at a time \u2014
          selecting a chip deselects its siblings. This is useful for choice chips.
        `),lu(),yT(73,`
        `),as(74,`app-docs-example`,8),yT(75,`
          `),as(76,`c-chip-set`,9),Ym(`selectedChange`,function(l){return DT(i.selectedSize,l)||(i.selectedSize=l),l}),lu(),yT(77,`
        `),lu(),yT(78,`
      `),lu(),yT(79,`
    `),lu(),yT(80,`
  `),lu(),yT(81,`

  `),as(82,`c-col`,0),yT(83,`
    `),as(84,`c-card`,2),yT(85,`
      `),as(86,`c-card-header`),yT(87,`
        `),as(88,`strong`),yT(89,`Angular Chip Set`),lu(),yT(90,` `),as(91,`small`),yT(92,`Filter chips`),lu(),yT(93,`
      `),lu(),yT(94,`
      `),as(95,`c-card-body`),yT(96,`
        `),as(97,`p`,3),yT(98,`
          Add `),as(99,`code`),yT(100,`filter`),lu(),yT(101,` to turn the chips into filter chips. A check icon is shown on each
          selected chip and removed when it is deselected. `),as(102,`code`),yT(103,`filter`),lu(),yT(104,` implies
          `),as(105,`code`),yT(106,`selectable`),lu(),yT(107,`, so you don't need to set both.
        `),lu(),yT(108,`
        `),as(109,`app-docs-example`,10),yT(110,`
          `),as(111,`c-chip-set`,11),Ym(`selectedChange`,function(l){return DT(i.selectedDepartments,l)||(i.selectedDepartments=l),l}),lu(),yT(112,`
        `),lu(),yT(113,`
      `),lu(),yT(114,`
    `),lu(),yT(115,`

    `),as(116,`c-card`,2),yT(117,`
      `),as(118,`c-card-header`),yT(119,`
        `),as(120,`strong`),yT(121,`Angular Chip Set`),lu(),yT(122,` `),as(123,`small`),yT(124,`Removable chips`),lu(),yT(125,`
      `),lu(),yT(126,`
      `),as(127,`c-card-body`),yT(128,`
        `),as(129,`p`,3),yT(130,`
          Set `),as(131,`code`),yT(132,`removable`),lu(),yT(133,` to add a remove button to every chip. When a chip is removed,
          focus moves to a neighboring chip. Bind `),as(134,`code`),yT(135,`[(chips)]`),lu(),yT(136,` to let the chip set remove
          chips from your list.
        `),lu(),yT(137,`
        `),as(138,`app-docs-example`,12),yT(139,`
          `),as(140,`c-chip-set`,13),Ym(`chipsChange`,function(l){return DT(i.filters,l)||(i.filters=l),l}),lu(),yT(141,`
        `),lu(),yT(142,`
      `),lu(),yT(143,`
    `),lu(),yT(144,`
  `),lu(),yT(145,`
`),lu()),p&2&&(ZD(30),pm(`chips`,i.fruits),ZD(35),pm(`chips`,i.teams),Zm(`selected`,i.selectedTeams),ZD(11),pm(`chips`,i.sizes),Zm(`selected`,i.selectedSize),ZD(35),pm(`chips`,i.teams),Zm(`selected`,i.selectedDepartments),ZD(29),Zm(`chips`,i.filters))},dependencies:[fF,uI,oo,WM,ro,$,c,aF],encapsulation:2})}};export{_ as AppChipSetComponent};