import{Ni as yT,U as Ib,Zn as hm,gn as as,yr as lu}from"./chunk-DYvmxcZi.js";import{Xn as ro,br as yF,cr as v0,jn as mI,jt as YM,vr as xc,zn as oo}from"./main-UUZS5IB2.js";import{t as $}from"./chunk-BPGAsjLK.js";import"./chunk-CbIBN8iA.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BybHhxXs.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=Ib({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Range`),lu(),yT(12,` `),hm(13,`small`),yT(14,`
      `),lu(),yT(15,`
      `),as(16,`c-card-body`),yT(17,`
        `),as(18,`p`,3),yT(19,`
          Create custom `),as(20,`code`),yT(21,`<input type="range">`),lu(),yT(22,` controls
          with `),as(23,`code`),yT(24,`<input cFormControl type="range">`),lu(),yT(25,`.
        `),lu(),yT(26,`
        `),as(27,`app-docs-example`,4),yT(28,`
          `),as(29,`label`,5),yT(30,`Example range`),lu(),yT(31,`
          `),hm(32,`input`,6),yT(33,`
        `),lu(),yT(34,`
      `),lu(),yT(35,`
    `),lu(),yT(36,`
  `),lu(),yT(37,`
  `),as(38,`c-col`,0),yT(39,`
    `),as(40,`c-card`,2),yT(41,`
      `),as(42,`c-card-header`),yT(43,`
        `),as(44,`strong`),yT(45,`Angular Range`),lu(),yT(46,` `),as(47,`small`),yT(48,`Disabled`),lu(),yT(49,`
      `),lu(),yT(50,`
      `),as(51,`c-card-body`),yT(52,`
        `),as(53,`p`,3),yT(54,`
          Add the `),as(55,`code`),yT(56,`disabled`),lu(),yT(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),lu(),yT(58,`
        `),as(59,`app-docs-example`,7),yT(60,`
          `),as(61,`label`,8),yT(62,`Disabled range`),lu(),yT(63,`
          `),hm(64,`input`,9),yT(65,`
        `),lu(),yT(66,`
      `),lu(),yT(67,`
    `),lu(),yT(68,`
  `),lu(),yT(69,`
  `),as(70,`c-col`,0),yT(71,`
    `),as(72,`c-card`,2),yT(73,`
      `),as(74,`c-card-header`),yT(75,`
        `),as(76,`strong`),yT(77,`Angular Range`),lu(),yT(78,` `),as(79,`small`),yT(80,`Min and max`),lu(),yT(81,`
      `),lu(),yT(82,`
      `),as(83,`c-card-body`),yT(84,`
        `),as(85,`p`,3),yT(86,`
          Range inputs have implicit values for `),as(87,`code`),yT(88,`min-0`),lu(),yT(89,` and
          `),as(90,`code`),yT(91,`max-100`),lu(),yT(92,`, respectively.
          You may specify new values for those using the `),as(93,`code`),yT(94,`min`),lu(),yT(95,` and
          `),as(96,`code`),yT(97,`max`),lu(),yT(98,` attributes.
        `),lu(),yT(99,`
        `),as(100,`app-docs-example`,10),yT(101,`
          `),as(102,`label`,11),yT(103,`Example range`),lu(),yT(104,`
          `),hm(105,`input`,12),yT(106,`
        `),lu(),yT(107,`
      `),lu(),yT(108,`
    `),lu(),yT(109,`
  `),lu(),yT(110,`
  `),as(111,`c-col`,0),yT(112,`
    `),as(113,`c-card`,2),yT(114,`
      `),as(115,`c-card-header`),yT(116,`
        `),as(117,`strong`),yT(118,`Angular Range`),lu(),yT(119,` `),as(120,`small`),yT(121,`Steps`),lu(),yT(122,`
      `),lu(),yT(123,`
      `),as(124,`c-card-body`),yT(125,`
        `),as(126,`p`,3),yT(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),as(128,`code`),yT(129,`step`),lu(),yT(130,` value. In the example below,
          we double the number of steps by using
          `),as(131,`code`),yT(132,`step="0.5"`),lu(),yT(133,`.
        `),lu(),yT(134,`
        `),as(135,`app-docs-example`,13),yT(136,`
          `),as(137,`label`,14),yT(138,`Example range`),lu(),yT(139,`
          `),hm(140,`input`,15),yT(141,`
        `),lu(),yT(142,`
      `),lu(),yT(143,`
    `),lu(),yT(144,`
  `),lu(),yT(145,`
`),lu())},dependencies:[yF,mI,oo,YM,ro,$,v0,xc,c],encapsulation:2})}};export{S as RangesComponent};