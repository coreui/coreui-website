import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,Ki as ule,M as F,Mt as Oe,Wi as uU,c as AU,jr as hle,mt as L,ot as Ka,sa as x,un as Wa,x as Ce}from"./main-VQBM3OGL.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=x({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Range`),L(),Ce(12,` `),Oe(13,`small`),Ce(14,`
      `),L(),Ce(15,`
      `),F(16,`c-card-body`),Ce(17,`
        `),F(18,`p`,3),Ce(19,`
          Create custom `),F(20,`code`),Ce(21,`<input type="range">`),L(),Ce(22,` controls
          with `),F(23,`code`),Ce(24,`<input cFormControl type="range">`),L(),Ce(25,`.
        `),L(),Ce(26,`
        `),F(27,`app-docs-example`,4),Ce(28,`
          `),F(29,`label`,5),Ce(30,`Example range`),L(),Ce(31,`
          `),Oe(32,`input`,6),Ce(33,`
        `),L(),Ce(34,`
      `),L(),Ce(35,`
    `),L(),Ce(36,`
  `),L(),Ce(37,`
  `),F(38,`c-col`,0),Ce(39,`
    `),F(40,`c-card`,2),Ce(41,`
      `),F(42,`c-card-header`),Ce(43,`
        `),F(44,`strong`),Ce(45,`Angular Range`),L(),Ce(46,` `),F(47,`small`),Ce(48,`Disabled`),L(),Ce(49,`
      `),L(),Ce(50,`
      `),F(51,`c-card-body`),Ce(52,`
        `),F(53,`p`,3),Ce(54,`
          Add the `),F(55,`code`),Ce(56,`disabled`),L(),Ce(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),L(),Ce(58,`
        `),F(59,`app-docs-example`,7),Ce(60,`
          `),F(61,`label`,8),Ce(62,`Disabled range`),L(),Ce(63,`
          `),Oe(64,`input`,9),Ce(65,`
        `),L(),Ce(66,`
      `),L(),Ce(67,`
    `),L(),Ce(68,`
  `),L(),Ce(69,`
  `),F(70,`c-col`,0),Ce(71,`
    `),F(72,`c-card`,2),Ce(73,`
      `),F(74,`c-card-header`),Ce(75,`
        `),F(76,`strong`),Ce(77,`Angular Range`),L(),Ce(78,` `),F(79,`small`),Ce(80,`Min and max`),L(),Ce(81,`
      `),L(),Ce(82,`
      `),F(83,`c-card-body`),Ce(84,`
        `),F(85,`p`,3),Ce(86,`
          Range inputs have implicit values for `),F(87,`code`),Ce(88,`min-0`),L(),Ce(89,` and
          `),F(90,`code`),Ce(91,`max-100`),L(),Ce(92,`, respectively.
          You may specify new values for those using the `),F(93,`code`),Ce(94,`min`),L(),Ce(95,` and
          `),F(96,`code`),Ce(97,`max`),L(),Ce(98,` attributes.
        `),L(),Ce(99,`
        `),F(100,`app-docs-example`,10),Ce(101,`
          `),F(102,`label`,11),Ce(103,`Example range`),L(),Ce(104,`
          `),Oe(105,`input`,12),Ce(106,`
        `),L(),Ce(107,`
      `),L(),Ce(108,`
    `),L(),Ce(109,`
  `),L(),Ce(110,`
  `),F(111,`c-col`,0),Ce(112,`
    `),F(113,`c-card`,2),Ce(114,`
      `),F(115,`c-card-header`),Ce(116,`
        `),F(117,`strong`),Ce(118,`Angular Range`),L(),Ce(119,` `),F(120,`small`),Ce(121,`Steps`),L(),Ce(122,`
      `),L(),Ce(123,`
      `),F(124,`c-card-body`),Ce(125,`
        `),F(126,`p`,3),Ce(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),F(128,`code`),Ce(129,`step`),L(),Ce(130,` value. In the example below,
          we double the number of steps by using
          `),F(131,`code`),Ce(132,`step="0.5"`),L(),Ce(133,`.
        `),L(),Ce(134,`
        `),F(135,`app-docs-example`,13),Ce(136,`
          `),F(137,`label`,14),Ce(138,`Example range`),L(),Ce(139,`
          `),Oe(140,`input`,15),Ce(141,`
        `),L(),Ce(142,`
      `),L(),Ce(143,`
    `),L(),Ce(144,`
  `),L(),Ce(145,`
`),L())},dependencies:[Cle,AU,Wa,uU,Ka,E,hle,ule,c],encapsulation:2})}};export{S as RangesComponent};