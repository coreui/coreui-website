import{$t as V,A as F,D as E,E as Dw,Gt as T,Hr as ke,Lr as ja,Pn as _$1,Vn as ase,Vr as k,Z as Iw,cn as XF,d as Ba,fa as ye,ht as Mse,q as IH,qt as UH}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";var _=class x{constructor(){this.fruits=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`}];this.teams=[{value:`design`,label:`Design`},{value:`development`,label:`Development`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`}];this.sizes=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`},{value:`large`,label:`Large`}];this.selectedTeams=T([`development`,`sales`]);this.selectedSize=T([`small`]);this.selectedDepartments=T([`development`,`sales`]);this.filters=T([`Filter one`,`Filter two`,{value:`filter-three`,label:`Filter three`,disabled:!0}])}static{this.ɵfac=function(p){return new(p||x)}}static{this.ɵcmp=E({type:x,selectors:[[`app-chip-set`]],decls:146,vars:8,consts:[[`xs`,`12`],[`href`,`components/chip-set`,`title`,`Chip Set`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/chip-set#basic-chip-set`],[`aria-label`,`Fruits`,3,`chips`],[`href`,`components/chip-set#selectable-chips`],[`aria-label`,`Teams`,`selectable`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#single-selection`],[`aria-label`,`Size`,`selectable`,``,`selectionMode`,`single`,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#filter-chips`],[`aria-label`,`Departments`,`filter`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#removable-chips`],[`aria-label`,`Removable filters`,`removable`,``,3,`chipsChange`,`chips`]],template:function(p,i){p&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Chip Set`),F(),ye(12,` `),k(13,`small`),ye(14,`Basic chip set`),F(),ye(15,`
      `),F(),ye(16,`
      `),k(17,`c-card-body`),ye(18,`
        `),k(19,`p`,3),ye(20,`
          Group multiple chips inside `),k(21,`code`),ye(22,`c-chip-set`),F(),ye(23,` and pass them through the
          `),k(24,`code`),ye(25,`chips`),F(),ye(26,` input. Once the chips are selectable or removable, the set gives them a
          single tab stop with arrow-key navigation.
        `),F(),ye(27,`
        `),k(28,`app-docs-example`,4),ye(29,`
          `),ke(30,`c-chip-set`,5),ye(31,`
        `),F(),ye(32,`
      `),F(),ye(33,`
    `),F(),ye(34,`

    `),k(35,`c-card`,2),ye(36,`
      `),k(37,`c-card-header`),ye(38,`
        `),k(39,`strong`),ye(40,`Angular Chip Set`),F(),ye(41,` `),k(42,`small`),ye(43,`Selectable chips`),F(),ye(44,`
      `),F(),ye(45,`
      `),k(46,`c-card-body`),ye(47,`
        `),k(48,`p`,3),ye(49,`
          Set `),k(50,`code`),ye(51,`selectable`),F(),ye(52,` on `),k(53,`code`),ye(54,`c-chip-set`),F(),ye(55,` to make every chip in the set
          selectable. With the default `),k(56,`code`),ye(57,`selectionMode`),F(),ye(58,` of `),k(59,`code`),ye(60,`"multiple"`),F(),ye(61,`, any
          number of chips can be active at once \u2014 useful for filters.
        `),F(),ye(62,`
        `),k(63,`app-docs-example`,6),ye(64,`
          `),k(65,`c-chip-set`,7),Iw(`selectedChange`,function(l){return XF(i.selectedTeams,l)||(i.selectedTeams=l),l}),F(),ye(66,`
        `),F(),ye(67,`
        `),k(68,`p`,3),ye(69,`
          Use `),k(70,`code`),ye(71,`selectionMode="single"`),F(),ye(72,` to allow only one selected chip at a time \u2014
          selecting a chip deselects its siblings. This is useful for choice chips.
        `),F(),ye(73,`
        `),k(74,`app-docs-example`,8),ye(75,`
          `),k(76,`c-chip-set`,9),Iw(`selectedChange`,function(l){return XF(i.selectedSize,l)||(i.selectedSize=l),l}),F(),ye(77,`
        `),F(),ye(78,`
      `),F(),ye(79,`
    `),F(),ye(80,`
  `),F(),ye(81,`

  `),k(82,`c-col`,0),ye(83,`
    `),k(84,`c-card`,2),ye(85,`
      `),k(86,`c-card-header`),ye(87,`
        `),k(88,`strong`),ye(89,`Angular Chip Set`),F(),ye(90,` `),k(91,`small`),ye(92,`Filter chips`),F(),ye(93,`
      `),F(),ye(94,`
      `),k(95,`c-card-body`),ye(96,`
        `),k(97,`p`,3),ye(98,`
          Add `),k(99,`code`),ye(100,`filter`),F(),ye(101,` to turn the chips into filter chips. A check icon is shown on each
          selected chip and removed when it is deselected. `),k(102,`code`),ye(103,`filter`),F(),ye(104,` implies
          `),k(105,`code`),ye(106,`selectable`),F(),ye(107,`, so you don't need to set both.
        `),F(),ye(108,`
        `),k(109,`app-docs-example`,10),ye(110,`
          `),k(111,`c-chip-set`,11),Iw(`selectedChange`,function(l){return XF(i.selectedDepartments,l)||(i.selectedDepartments=l),l}),F(),ye(112,`
        `),F(),ye(113,`
      `),F(),ye(114,`
    `),F(),ye(115,`

    `),k(116,`c-card`,2),ye(117,`
      `),k(118,`c-card-header`),ye(119,`
        `),k(120,`strong`),ye(121,`Angular Chip Set`),F(),ye(122,` `),k(123,`small`),ye(124,`Removable chips`),F(),ye(125,`
      `),F(),ye(126,`
      `),k(127,`c-card-body`),ye(128,`
        `),k(129,`p`,3),ye(130,`
          Set `),k(131,`code`),ye(132,`removable`),F(),ye(133,` to add a remove button to every chip. When a chip is removed,
          focus moves to a neighboring chip. Bind `),k(134,`code`),ye(135,`[(chips)]`),F(),ye(136,` to let the chip set remove
          chips from your list.
        `),F(),ye(137,`
        `),k(138,`app-docs-example`,12),ye(139,`
          `),k(140,`c-chip-set`,13),Iw(`chipsChange`,function(l){return XF(i.filters,l)||(i.filters=l),l}),F(),ye(141,`
        `),F(),ye(142,`
      `),F(),ye(143,`
    `),F(),ye(144,`
  `),F(),ye(145,`
`),F()),p&2&&(_$1(30),V(`chips`,i.fruits),_$1(35),V(`chips`,i.teams),Dw(`selected`,i.selectedTeams),_$1(11),V(`chips`,i.sizes),Dw(`selected`,i.selectedSize),_$1(35),V(`chips`,i.teams),Dw(`selected`,i.selectedDepartments),_$1(29),Dw(`chips`,i.filters))},dependencies:[Mse,UH,Ba,IH,ja,E$1,c,ase],encapsulation:2})}};export{_ as AppChipSetComponent};