import{Fi as sl,Ft as fT,H as Nv,On as xi,Ot as cT,Q as Ri,di as hD,dn as rT,fr as Oi,ki as ow,q as Pv,xr as Th}from"./main-76IFZWOG.js";import{i as w}from"./chunk-CAOhpI5R.js";import{t as c}from"./chunk-P9e4DqVK.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=hD({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Range`),sl(),ow(12,` `),Th(13,`small`),ow(14,`
      `),sl(),ow(15,`
      `),Oi(16,`c-card-body`),ow(17,`
        `),Oi(18,`p`,3),ow(19,`
          Create custom `),Oi(20,`code`),ow(21,`<input type="range">`),sl(),ow(22,` controls
          with `),Oi(23,`code`),ow(24,`<input cFormControl type="range">`),sl(),ow(25,`.
        `),sl(),ow(26,`
        `),Oi(27,`app-docs-example`,4),ow(28,`
          `),Oi(29,`label`,5),ow(30,`Example range`),sl(),ow(31,`
          `),Th(32,`input`,6),ow(33,`
        `),sl(),ow(34,`
      `),sl(),ow(35,`
    `),sl(),ow(36,`
  `),sl(),ow(37,`
  `),Oi(38,`c-col`,0),ow(39,`
    `),Oi(40,`c-card`,2),ow(41,`
      `),Oi(42,`c-card-header`),ow(43,`
        `),Oi(44,`strong`),ow(45,`Angular Range`),sl(),ow(46,` `),Oi(47,`small`),ow(48,`Disabled`),sl(),ow(49,`
      `),sl(),ow(50,`
      `),Oi(51,`c-card-body`),ow(52,`
        `),Oi(53,`p`,3),ow(54,`
          Add the `),Oi(55,`code`),ow(56,`disabled`),sl(),ow(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),sl(),ow(58,`
        `),Oi(59,`app-docs-example`,7),ow(60,`
          `),Oi(61,`label`,8),ow(62,`Disabled range`),sl(),ow(63,`
          `),Th(64,`input`,9),ow(65,`
        `),sl(),ow(66,`
      `),sl(),ow(67,`
    `),sl(),ow(68,`
  `),sl(),ow(69,`
  `),Oi(70,`c-col`,0),ow(71,`
    `),Oi(72,`c-card`,2),ow(73,`
      `),Oi(74,`c-card-header`),ow(75,`
        `),Oi(76,`strong`),ow(77,`Angular Range`),sl(),ow(78,` `),Oi(79,`small`),ow(80,`Min and max`),sl(),ow(81,`
      `),sl(),ow(82,`
      `),Oi(83,`c-card-body`),ow(84,`
        `),Oi(85,`p`,3),ow(86,`
          Range inputs have implicit values for `),Oi(87,`code`),ow(88,`min-0`),sl(),ow(89,` and
          `),Oi(90,`code`),ow(91,`max-100`),sl(),ow(92,`, respectively.
          You may specify new values for those using the `),Oi(93,`code`),ow(94,`min`),sl(),ow(95,` and
          `),Oi(96,`code`),ow(97,`max`),sl(),ow(98,` attributes.
        `),sl(),ow(99,`
        `),Oi(100,`app-docs-example`,10),ow(101,`
          `),Oi(102,`label`,11),ow(103,`Example range`),sl(),ow(104,`
          `),Th(105,`input`,12),ow(106,`
        `),sl(),ow(107,`
      `),sl(),ow(108,`
    `),sl(),ow(109,`
  `),sl(),ow(110,`
  `),Oi(111,`c-col`,0),ow(112,`
    `),Oi(113,`c-card`,2),ow(114,`
      `),Oi(115,`c-card-header`),ow(116,`
        `),Oi(117,`strong`),ow(118,`Angular Range`),sl(),ow(119,` `),Oi(120,`small`),ow(121,`Steps`),sl(),ow(122,`
      `),sl(),ow(123,`
      `),Oi(124,`c-card-body`),ow(125,`
        `),Oi(126,`p`,3),ow(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),Oi(128,`code`),ow(129,`step`),sl(),ow(130,` value. In the example below,
          we double the number of steps by using
          `),Oi(131,`code`),ow(132,`step="0.5"`),sl(),ow(133,`.
        `),sl(),ow(134,`
        `),Oi(135,`app-docs-example`,13),ow(136,`
          `),Oi(137,`label`,14),ow(138,`Example range`),sl(),ow(139,`
          `),Th(140,`input`,15),ow(141,`
        `),sl(),ow(142,`
      `),sl(),ow(143,`
    `),sl(),ow(144,`
  `),sl(),ow(145,`
`),sl())},dependencies:[fT,Pv,xi,Nv,Ri,w,cT,rT,c],encapsulation:2})}};export{S as RangesComponent};