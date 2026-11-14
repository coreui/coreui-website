import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,Fr as ile,Li as tE,M as F,Mt as Oe,Si as rL,Wi as uU,Zt as S,c as AU,cr as eE,k as E$1,mt as L,ot as Ka,rn as U,sa as x,un as Wa,x as Ce}from"./main-VQBM3OGL.js";var _=class x$1{constructor(){this.fruits=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`}];this.teams=[{value:`design`,label:`Design`},{value:`development`,label:`Development`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`}];this.sizes=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`},{value:`large`,label:`Large`}];this.selectedTeams=E$1([`development`,`sales`]);this.selectedSize=E$1([`small`]);this.selectedDepartments=E$1([`development`,`sales`]);this.filters=E$1([`Filter one`,`Filter two`,{value:`filter-three`,label:`Filter three`,disabled:!0}])}static{this.ɵfac=function(p){return new(p||x$1)}}static{this.ɵcmp=x({type:x$1,selectors:[[`app-chip-set`]],decls:146,vars:8,consts:[[`xs`,`12`],[`href`,`components/chip-set`,`title`,`Chip Set`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/chip-set#basic-chip-set`],[`aria-label`,`Fruits`,3,`chips`],[`href`,`components/chip-set#selectable-chips`],[`aria-label`,`Teams`,`selectable`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#single-selection`],[`aria-label`,`Size`,`selectable`,``,`selectionMode`,`single`,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#filter-chips`],[`aria-label`,`Departments`,`filter`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#removable-chips`],[`aria-label`,`Removable filters`,`removable`,``,3,`chipsChange`,`chips`]],template:function(p,i){p&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Chip Set`),L(),Ce(12,` `),F(13,`small`),Ce(14,`Basic chip set`),L(),Ce(15,`
      `),L(),Ce(16,`
      `),F(17,`c-card-body`),Ce(18,`
        `),F(19,`p`,3),Ce(20,`
          Group multiple chips inside `),F(21,`code`),Ce(22,`c-chip-set`),L(),Ce(23,` and pass them through the
          `),F(24,`code`),Ce(25,`chips`),L(),Ce(26,` input. Once the chips are selectable or removable, the set gives them a
          single tab stop with arrow-key navigation.
        `),L(),Ce(27,`
        `),F(28,`app-docs-example`,4),Ce(29,`
          `),Oe(30,`c-chip-set`,5),Ce(31,`
        `),L(),Ce(32,`
      `),L(),Ce(33,`
    `),L(),Ce(34,`

    `),F(35,`c-card`,2),Ce(36,`
      `),F(37,`c-card-header`),Ce(38,`
        `),F(39,`strong`),Ce(40,`Angular Chip Set`),L(),Ce(41,` `),F(42,`small`),Ce(43,`Selectable chips`),L(),Ce(44,`
      `),L(),Ce(45,`
      `),F(46,`c-card-body`),Ce(47,`
        `),F(48,`p`,3),Ce(49,`
          Set `),F(50,`code`),Ce(51,`selectable`),L(),Ce(52,` on `),F(53,`code`),Ce(54,`c-chip-set`),L(),Ce(55,` to make every chip in the set
          selectable. With the default `),F(56,`code`),Ce(57,`selectionMode`),L(),Ce(58,` of `),F(59,`code`),Ce(60,`"multiple"`),L(),Ce(61,`, any
          number of chips can be active at once \u2014 useful for filters.
        `),L(),Ce(62,`
        `),F(63,`app-docs-example`,6),Ce(64,`
          `),F(65,`c-chip-set`,7),tE(`selectedChange`,function(l){return rL(i.selectedTeams,l)||(i.selectedTeams=l),l}),L(),Ce(66,`
        `),L(),Ce(67,`
        `),F(68,`p`,3),Ce(69,`
          Use `),F(70,`code`),Ce(71,`selectionMode="single"`),L(),Ce(72,` to allow only one selected chip at a time \u2014
          selecting a chip deselects its siblings. This is useful for choice chips.
        `),L(),Ce(73,`
        `),F(74,`app-docs-example`,8),Ce(75,`
          `),F(76,`c-chip-set`,9),tE(`selectedChange`,function(l){return rL(i.selectedSize,l)||(i.selectedSize=l),l}),L(),Ce(77,`
        `),L(),Ce(78,`
      `),L(),Ce(79,`
    `),L(),Ce(80,`
  `),L(),Ce(81,`

  `),F(82,`c-col`,0),Ce(83,`
    `),F(84,`c-card`,2),Ce(85,`
      `),F(86,`c-card-header`),Ce(87,`
        `),F(88,`strong`),Ce(89,`Angular Chip Set`),L(),Ce(90,` `),F(91,`small`),Ce(92,`Filter chips`),L(),Ce(93,`
      `),L(),Ce(94,`
      `),F(95,`c-card-body`),Ce(96,`
        `),F(97,`p`,3),Ce(98,`
          Add `),F(99,`code`),Ce(100,`filter`),L(),Ce(101,` to turn the chips into filter chips. A check icon is shown on each
          selected chip and removed when it is deselected. `),F(102,`code`),Ce(103,`filter`),L(),Ce(104,` implies
          `),F(105,`code`),Ce(106,`selectable`),L(),Ce(107,`, so you don't need to set both.
        `),L(),Ce(108,`
        `),F(109,`app-docs-example`,10),Ce(110,`
          `),F(111,`c-chip-set`,11),tE(`selectedChange`,function(l){return rL(i.selectedDepartments,l)||(i.selectedDepartments=l),l}),L(),Ce(112,`
        `),L(),Ce(113,`
      `),L(),Ce(114,`
    `),L(),Ce(115,`

    `),F(116,`c-card`,2),Ce(117,`
      `),F(118,`c-card-header`),Ce(119,`
        `),F(120,`strong`),Ce(121,`Angular Chip Set`),L(),Ce(122,` `),F(123,`small`),Ce(124,`Removable chips`),L(),Ce(125,`
      `),L(),Ce(126,`
      `),F(127,`c-card-body`),Ce(128,`
        `),F(129,`p`,3),Ce(130,`
          Set `),F(131,`code`),Ce(132,`removable`),L(),Ce(133,` to add a remove button to every chip. When a chip is removed,
          focus moves to a neighboring chip. Bind `),F(134,`code`),Ce(135,`[(chips)]`),L(),Ce(136,` to let the chip set remove
          chips from your list.
        `),L(),Ce(137,`
        `),F(138,`app-docs-example`,12),Ce(139,`
          `),F(140,`c-chip-set`,13),tE(`chipsChange`,function(l){return rL(i.filters,l)||(i.filters=l),l}),L(),Ce(141,`
        `),L(),Ce(142,`
      `),L(),Ce(143,`
    `),L(),Ce(144,`
  `),L(),Ce(145,`
`),L()),p&2&&(S(30),U(`chips`,i.fruits),S(35),U(`chips`,i.teams),eE(`selected`,i.selectedTeams),S(11),U(`chips`,i.sizes),eE(`selected`,i.selectedSize),S(35),U(`chips`,i.teams),eE(`selected`,i.selectedDepartments),S(29),eE(`chips`,i.filters))},dependencies:[Cle,AU,Wa,uU,Ka,E,c,ile],encapsulation:2})}};export{_ as AppChipSetComponent};