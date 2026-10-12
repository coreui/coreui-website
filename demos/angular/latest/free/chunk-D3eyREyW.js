import{Dt as O,Ft as Pa,Ri as sw,T as E,Wn as aw,Wt as Re,Y as IF,Yt as S,_n as VV,ai as nH,en as T,gn as V,gt as La,j as F,qt as Roe,ti as moe,ua as ye}from"./main-V43LM6ZM.js";import{t as E$1}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var _=class x{constructor(){this.fruits=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`date`,label:`Date`}];this.teams=[{value:`design`,label:`Design`},{value:`development`,label:`Development`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`}];this.sizes=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`},{value:`large`,label:`Large`}];this.selectedTeams=E([`development`,`sales`]);this.selectedSize=E([`small`]);this.selectedDepartments=E([`development`,`sales`]);this.filters=E([`Filter one`,`Filter two`,{value:`filter-three`,label:`Filter three`,disabled:!0}])}static{this.ɵfac=function(p){return new(p||x)}}static{this.ɵcmp=T({type:x,selectors:[[`app-chip-set`]],decls:146,vars:8,consts:[[`xs`,`12`],[`href`,`components/chip-set`,`title`,`Chip Set`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/chip-set#basic-chip-set`],[`aria-label`,`Fruits`,3,`chips`],[`href`,`components/chip-set#selectable-chips`],[`aria-label`,`Teams`,`selectable`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#single-selection`],[`aria-label`,`Size`,`selectable`,``,`selectionMode`,`single`,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#filter-chips`],[`aria-label`,`Departments`,`filter`,``,3,`selectedChange`,`chips`,`selected`],[`href`,`components/chip-set#removable-chips`],[`aria-label`,`Removable filters`,`removable`,``,3,`chipsChange`,`chips`]],template:function(p,i){p&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Chip Set`),F(),ye(12,` `),O(13,`small`),ye(14,`Basic chip set`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`,3),ye(20,`
          Group multiple chips inside `),O(21,`code`),ye(22,`c-chip-set`),F(),ye(23,` and pass them through the
          `),O(24,`code`),ye(25,`chips`),F(),ye(26,` input. Once the chips are selectable or removable, the set gives them a
          single tab stop with arrow-key navigation.
        `),F(),ye(27,`
        `),O(28,`app-docs-example`,4),ye(29,`
          `),Re(30,`c-chip-set`,5),ye(31,`
        `),F(),ye(32,`
      `),F(),ye(33,`
    `),F(),ye(34,`

    `),O(35,`c-card`,2),ye(36,`
      `),O(37,`c-card-header`),ye(38,`
        `),O(39,`strong`),ye(40,`Angular Chip Set`),F(),ye(41,` `),O(42,`small`),ye(43,`Selectable chips`),F(),ye(44,`
      `),F(),ye(45,`
      `),O(46,`c-card-body`),ye(47,`
        `),O(48,`p`,3),ye(49,`
          Set `),O(50,`code`),ye(51,`selectable`),F(),ye(52,` on `),O(53,`code`),ye(54,`c-chip-set`),F(),ye(55,` to make every chip in the set
          selectable. With the default `),O(56,`code`),ye(57,`selectionMode`),F(),ye(58,` of `),O(59,`code`),ye(60,`"multiple"`),F(),ye(61,`, any
          number of chips can be active at once \u2014 useful for filters.
        `),F(),ye(62,`
        `),O(63,`app-docs-example`,6),ye(64,`
          `),O(65,`c-chip-set`,7),aw(`selectedChange`,function(l){return IF(i.selectedTeams,l)||(i.selectedTeams=l),l}),F(),ye(66,`
        `),F(),ye(67,`
        `),O(68,`p`,3),ye(69,`
          Use `),O(70,`code`),ye(71,`selectionMode="single"`),F(),ye(72,` to allow only one selected chip at a time \u2014
          selecting a chip deselects its siblings. This is useful for choice chips.
        `),F(),ye(73,`
        `),O(74,`app-docs-example`,8),ye(75,`
          `),O(76,`c-chip-set`,9),aw(`selectedChange`,function(l){return IF(i.selectedSize,l)||(i.selectedSize=l),l}),F(),ye(77,`
        `),F(),ye(78,`
      `),F(),ye(79,`
    `),F(),ye(80,`
  `),F(),ye(81,`

  `),O(82,`c-col`,0),ye(83,`
    `),O(84,`c-card`,2),ye(85,`
      `),O(86,`c-card-header`),ye(87,`
        `),O(88,`strong`),ye(89,`Angular Chip Set`),F(),ye(90,` `),O(91,`small`),ye(92,`Filter chips`),F(),ye(93,`
      `),F(),ye(94,`
      `),O(95,`c-card-body`),ye(96,`
        `),O(97,`p`,3),ye(98,`
          Add `),O(99,`code`),ye(100,`filter`),F(),ye(101,` to turn the chips into filter chips. A check icon is shown on each
          selected chip and removed when it is deselected. `),O(102,`code`),ye(103,`filter`),F(),ye(104,` implies
          `),O(105,`code`),ye(106,`selectable`),F(),ye(107,`, so you don't need to set both.
        `),F(),ye(108,`
        `),O(109,`app-docs-example`,10),ye(110,`
          `),O(111,`c-chip-set`,11),aw(`selectedChange`,function(l){return IF(i.selectedDepartments,l)||(i.selectedDepartments=l),l}),F(),ye(112,`
        `),F(),ye(113,`
      `),F(),ye(114,`
    `),F(),ye(115,`

    `),O(116,`c-card`,2),ye(117,`
      `),O(118,`c-card-header`),ye(119,`
        `),O(120,`strong`),ye(121,`Angular Chip Set`),F(),ye(122,` `),O(123,`small`),ye(124,`Removable chips`),F(),ye(125,`
      `),F(),ye(126,`
      `),O(127,`c-card-body`),ye(128,`
        `),O(129,`p`,3),ye(130,`
          Set `),O(131,`code`),ye(132,`removable`),F(),ye(133,` to add a remove button to every chip. When a chip is removed,
          focus moves to a neighboring chip. Bind `),O(134,`code`),ye(135,`[(chips)]`),F(),ye(136,` to let the chip set remove
          chips from your list.
        `),F(),ye(137,`
        `),O(138,`app-docs-example`,12),ye(139,`
          `),O(140,`c-chip-set`,13),aw(`chipsChange`,function(l){return IF(i.filters,l)||(i.filters=l),l}),F(),ye(141,`
        `),F(),ye(142,`
      `),F(),ye(143,`
    `),F(),ye(144,`
  `),F(),ye(145,`
`),F()),p&2&&(S(30),V(`chips`,i.fruits),S(35),V(`chips`,i.teams),sw(`selected`,i.selectedTeams),S(11),V(`chips`,i.sizes),sw(`selected`,i.selectedSize),S(35),V(`chips`,i.teams),sw(`selected`,i.selectedDepartments),S(29),sw(`chips`,i.filters))},dependencies:[Roe,nH,Pa,VV,La,E$1,c,moe],encapsulation:2})}};export{_ as AppChipSetComponent};