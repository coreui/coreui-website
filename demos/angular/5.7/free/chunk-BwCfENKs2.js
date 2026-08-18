import{Ft as fT,H as Nv,Hn as Ch,Ot as cT,Q as Ri,Xr as aw,fa as yD,fn as rT,kn as xi,ni as cl,q as Pv,vr as Oi}from"./main-WBU6EW3E.js";import{t as E}from"./chunk-D1ovLIZZ.js";import{t as c}from"./chunk-BNlMJs6j.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=yD({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Range`),cl(),aw(12,` `),Ch(13,`small`),aw(14,`
      `),cl(),aw(15,`
      `),Oi(16,`c-card-body`),aw(17,`
        `),Oi(18,`p`,3),aw(19,`
          Create custom `),Oi(20,`code`),aw(21,`<input type="range">`),cl(),aw(22,` controls
          with `),Oi(23,`code`),aw(24,`<input cFormControl type="range">`),cl(),aw(25,`.
        `),cl(),aw(26,`
        `),Oi(27,`app-docs-example`,4),aw(28,`
          `),Oi(29,`label`,5),aw(30,`Example range`),cl(),aw(31,`
          `),Ch(32,`input`,6),aw(33,`
        `),cl(),aw(34,`
      `),cl(),aw(35,`
    `),cl(),aw(36,`
  `),cl(),aw(37,`
  `),Oi(38,`c-col`,0),aw(39,`
    `),Oi(40,`c-card`,2),aw(41,`
      `),Oi(42,`c-card-header`),aw(43,`
        `),Oi(44,`strong`),aw(45,`Angular Range`),cl(),aw(46,` `),Oi(47,`small`),aw(48,`Disabled`),cl(),aw(49,`
      `),cl(),aw(50,`
      `),Oi(51,`c-card-body`),aw(52,`
        `),Oi(53,`p`,3),aw(54,`
          Add the `),Oi(55,`code`),aw(56,`disabled`),cl(),aw(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),cl(),aw(58,`
        `),Oi(59,`app-docs-example`,7),aw(60,`
          `),Oi(61,`label`,8),aw(62,`Disabled range`),cl(),aw(63,`
          `),Ch(64,`input`,9),aw(65,`
        `),cl(),aw(66,`
      `),cl(),aw(67,`
    `),cl(),aw(68,`
  `),cl(),aw(69,`
  `),Oi(70,`c-col`,0),aw(71,`
    `),Oi(72,`c-card`,2),aw(73,`
      `),Oi(74,`c-card-header`),aw(75,`
        `),Oi(76,`strong`),aw(77,`Angular Range`),cl(),aw(78,` `),Oi(79,`small`),aw(80,`Min and max`),cl(),aw(81,`
      `),cl(),aw(82,`
      `),Oi(83,`c-card-body`),aw(84,`
        `),Oi(85,`p`,3),aw(86,`
          Range inputs have implicit values for `),Oi(87,`code`),aw(88,`min-0`),cl(),aw(89,` and
          `),Oi(90,`code`),aw(91,`max-100`),cl(),aw(92,`, respectively.
          You may specify new values for those using the `),Oi(93,`code`),aw(94,`min`),cl(),aw(95,` and
          `),Oi(96,`code`),aw(97,`max`),cl(),aw(98,` attributes.
        `),cl(),aw(99,`
        `),Oi(100,`app-docs-example`,10),aw(101,`
          `),Oi(102,`label`,11),aw(103,`Example range`),cl(),aw(104,`
          `),Ch(105,`input`,12),aw(106,`
        `),cl(),aw(107,`
      `),cl(),aw(108,`
    `),cl(),aw(109,`
  `),cl(),aw(110,`
  `),Oi(111,`c-col`,0),aw(112,`
    `),Oi(113,`c-card`,2),aw(114,`
      `),Oi(115,`c-card-header`),aw(116,`
        `),Oi(117,`strong`),aw(118,`Angular Range`),cl(),aw(119,` `),Oi(120,`small`),aw(121,`Steps`),cl(),aw(122,`
      `),cl(),aw(123,`
      `),Oi(124,`c-card-body`),aw(125,`
        `),Oi(126,`p`,3),aw(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),Oi(128,`code`),aw(129,`step`),cl(),aw(130,` value. In the example below,
          we double the number of steps by using
          `),Oi(131,`code`),aw(132,`step="0.5"`),cl(),aw(133,`.
        `),cl(),aw(134,`
        `),Oi(135,`app-docs-example`,13),aw(136,`
          `),Oi(137,`label`,14),aw(138,`Example range`),cl(),aw(139,`
          `),Ch(140,`input`,15),aw(141,`
        `),cl(),aw(142,`
      `),cl(),aw(143,`
    `),cl(),aw(144,`
  `),cl(),aw(145,`
`),cl())},dependencies:[fT,Pv,xi,Nv,Ri,E,cT,rT,c],encapsulation:2})}};export{S as RangesComponent};