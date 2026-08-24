import{$ as QT,C as GT,Gn as Ch,I as Li,Oi as ki,Sn as rb,X as Pi,ai as cw,ii as cl,la as vD,wn as t1,xt as Xv}from"./main-3ZNEFDGN.js";import{t as E}from"./chunk-DyzPa03D.js";import{t as c}from"./chunk-Cq12Oo7T.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=vD({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Range`),cl(),cw(12,` `),Ch(13,`small`),cw(14,`
      `),cl(),cw(15,`
      `),ki(16,`c-card-body`),cw(17,`
        `),ki(18,`p`,3),cw(19,`
          Create custom `),ki(20,`code`),cw(21,`<input type="range">`),cl(),cw(22,` controls
          with `),ki(23,`code`),cw(24,`<input cFormControl type="range">`),cl(),cw(25,`.
        `),cl(),cw(26,`
        `),ki(27,`app-docs-example`,4),cw(28,`
          `),ki(29,`label`,5),cw(30,`Example range`),cl(),cw(31,`
          `),Ch(32,`input`,6),cw(33,`
        `),cl(),cw(34,`
      `),cl(),cw(35,`
    `),cl(),cw(36,`
  `),cl(),cw(37,`
  `),ki(38,`c-col`,0),cw(39,`
    `),ki(40,`c-card`,2),cw(41,`
      `),ki(42,`c-card-header`),cw(43,`
        `),ki(44,`strong`),cw(45,`Angular Range`),cl(),cw(46,` `),ki(47,`small`),cw(48,`Disabled`),cl(),cw(49,`
      `),cl(),cw(50,`
      `),ki(51,`c-card-body`),cw(52,`
        `),ki(53,`p`,3),cw(54,`
          Add the `),ki(55,`code`),cw(56,`disabled`),cl(),cw(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),cl(),cw(58,`
        `),ki(59,`app-docs-example`,7),cw(60,`
          `),ki(61,`label`,8),cw(62,`Disabled range`),cl(),cw(63,`
          `),Ch(64,`input`,9),cw(65,`
        `),cl(),cw(66,`
      `),cl(),cw(67,`
    `),cl(),cw(68,`
  `),cl(),cw(69,`
  `),ki(70,`c-col`,0),cw(71,`
    `),ki(72,`c-card`,2),cw(73,`
      `),ki(74,`c-card-header`),cw(75,`
        `),ki(76,`strong`),cw(77,`Angular Range`),cl(),cw(78,` `),ki(79,`small`),cw(80,`Min and max`),cl(),cw(81,`
      `),cl(),cw(82,`
      `),ki(83,`c-card-body`),cw(84,`
        `),ki(85,`p`,3),cw(86,`
          Range inputs have implicit values for `),ki(87,`code`),cw(88,`min-0`),cl(),cw(89,` and
          `),ki(90,`code`),cw(91,`max-100`),cl(),cw(92,`, respectively.
          You may specify new values for those using the `),ki(93,`code`),cw(94,`min`),cl(),cw(95,` and
          `),ki(96,`code`),cw(97,`max`),cl(),cw(98,` attributes.
        `),cl(),cw(99,`
        `),ki(100,`app-docs-example`,10),cw(101,`
          `),ki(102,`label`,11),cw(103,`Example range`),cl(),cw(104,`
          `),Ch(105,`input`,12),cw(106,`
        `),cl(),cw(107,`
      `),cl(),cw(108,`
    `),cl(),cw(109,`
  `),cl(),cw(110,`
  `),ki(111,`c-col`,0),cw(112,`
    `),ki(113,`c-card`,2),cw(114,`
      `),ki(115,`c-card-header`),cw(116,`
        `),ki(117,`strong`),cw(118,`Angular Range`),cl(),cw(119,` `),ki(120,`small`),cw(121,`Steps`),cl(),cw(122,`
      `),cl(),cw(123,`
      `),ki(124,`c-card-body`),cw(125,`
        `),ki(126,`p`,3),cw(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),ki(128,`code`),cw(129,`step`),cl(),cw(130,` value. In the example below,
          we double the number of steps by using
          `),ki(131,`code`),cw(132,`step="0.5"`),cl(),cw(133,`.
        `),cl(),cw(134,`
        `),ki(135,`app-docs-example`,13),cw(136,`
          `),ki(137,`label`,14),cw(138,`Example range`),cl(),cw(139,`
          `),Ch(140,`input`,15),cw(141,`
        `),cl(),cw(142,`
      `),cl(),cw(143,`
    `),cl(),cw(144,`
  `),cl(),cw(145,`
`),cl())},dependencies:[t1,rb,Pi,Xv,Li,E,QT,GT,c],encapsulation:2})}};export{S as RangesComponent};