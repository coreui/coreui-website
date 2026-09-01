import{Dt as P,I as Ete,Si as rP,Vr as ke,Wn as be,X as I,Yt as Ste,ar as dP,da as yte,or as da,ut as L,zi as ua}from"./main-AXUR3WFK.js";import{t as E}from"./chunk-DrG-2cCJ.js";import{t as c}from"./chunk-Dishkh7c.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=I({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Range`),P(),be(12,` `),ke(13,`small`),be(14,`
      `),P(),be(15,`
      `),L(16,`c-card-body`),be(17,`
        `),L(18,`p`,3),be(19,`
          Create custom `),L(20,`code`),be(21,`<input type="range">`),P(),be(22,` controls
          with `),L(23,`code`),be(24,`<input cFormControl type="range">`),P(),be(25,`.
        `),P(),be(26,`
        `),L(27,`app-docs-example`,4),be(28,`
          `),L(29,`label`,5),be(30,`Example range`),P(),be(31,`
          `),ke(32,`input`,6),be(33,`
        `),P(),be(34,`
      `),P(),be(35,`
    `),P(),be(36,`
  `),P(),be(37,`
  `),L(38,`c-col`,0),be(39,`
    `),L(40,`c-card`,2),be(41,`
      `),L(42,`c-card-header`),be(43,`
        `),L(44,`strong`),be(45,`Angular Range`),P(),be(46,` `),L(47,`small`),be(48,`Disabled`),P(),be(49,`
      `),P(),be(50,`
      `),L(51,`c-card-body`),be(52,`
        `),L(53,`p`,3),be(54,`
          Add the `),L(55,`code`),be(56,`disabled`),P(),be(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),P(),be(58,`
        `),L(59,`app-docs-example`,7),be(60,`
          `),L(61,`label`,8),be(62,`Disabled range`),P(),be(63,`
          `),ke(64,`input`,9),be(65,`
        `),P(),be(66,`
      `),P(),be(67,`
    `),P(),be(68,`
  `),P(),be(69,`
  `),L(70,`c-col`,0),be(71,`
    `),L(72,`c-card`,2),be(73,`
      `),L(74,`c-card-header`),be(75,`
        `),L(76,`strong`),be(77,`Angular Range`),P(),be(78,` `),L(79,`small`),be(80,`Min and max`),P(),be(81,`
      `),P(),be(82,`
      `),L(83,`c-card-body`),be(84,`
        `),L(85,`p`,3),be(86,`
          Range inputs have implicit values for `),L(87,`code`),be(88,`min-0`),P(),be(89,` and
          `),L(90,`code`),be(91,`max-100`),P(),be(92,`, respectively.
          You may specify new values for those using the `),L(93,`code`),be(94,`min`),P(),be(95,` and
          `),L(96,`code`),be(97,`max`),P(),be(98,` attributes.
        `),P(),be(99,`
        `),L(100,`app-docs-example`,10),be(101,`
          `),L(102,`label`,11),be(103,`Example range`),P(),be(104,`
          `),ke(105,`input`,12),be(106,`
        `),P(),be(107,`
      `),P(),be(108,`
    `),P(),be(109,`
  `),P(),be(110,`
  `),L(111,`c-col`,0),be(112,`
    `),L(113,`c-card`,2),be(114,`
      `),L(115,`c-card-header`),be(116,`
        `),L(117,`strong`),be(118,`Angular Range`),P(),be(119,` `),L(120,`small`),be(121,`Steps`),P(),be(122,`
      `),P(),be(123,`
      `),L(124,`c-card-body`),be(125,`
        `),L(126,`p`,3),be(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),L(128,`code`),be(129,`step`),P(),be(130,` value. In the example below,
          we double the number of steps by using
          `),L(131,`code`),be(132,`step="0.5"`),P(),be(133,`.
        `),P(),be(134,`
        `),L(135,`app-docs-example`,13),be(136,`
          `),L(137,`label`,14),be(138,`Example range`),P(),be(139,`
          `),ke(140,`input`,15),be(141,`
        `),P(),be(142,`
      `),P(),be(143,`
    `),P(),be(144,`
  `),P(),be(145,`
`),P())},dependencies:[Ste,dP,ua,rP,da,E,Ete,yte,c],encapsulation:2})}};export{S as RangesComponent};