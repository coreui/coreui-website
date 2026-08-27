import{Ii as zw,Rr as nu,qr as qg,ri as rs,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,Mt as Ws,R as JS,an as fF,ht as Ro,lt as Po,tn as df}from"./main-3WAR6WII.js";import{t as I}from"./chunk-Cg8AJzmk.js";import"./chunk-Dd5UTWFN.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-QL_jP78J.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=zw({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Range`),nu(),Wb(12,` `),qg(13,`small`),Wb(14,`
      `),nu(),Wb(15,`
      `),rs(16,`c-card-body`),Wb(17,`
        `),rs(18,`p`,3),Wb(19,`
          Create custom `),rs(20,`code`),Wb(21,`<input type="range">`),nu(),Wb(22,` controls
          with `),rs(23,`code`),Wb(24,`<input cFormControl type="range">`),nu(),Wb(25,`.
        `),nu(),Wb(26,`
        `),rs(27,`app-docs-example`,4),Wb(28,`
          `),rs(29,`label`,5),Wb(30,`Example range`),nu(),Wb(31,`
          `),qg(32,`input`,6),Wb(33,`
        `),nu(),Wb(34,`
      `),nu(),Wb(35,`
    `),nu(),Wb(36,`
  `),nu(),Wb(37,`
  `),rs(38,`c-col`,0),Wb(39,`
    `),rs(40,`c-card`,2),Wb(41,`
      `),rs(42,`c-card-header`),Wb(43,`
        `),rs(44,`strong`),Wb(45,`Angular Range`),nu(),Wb(46,` `),rs(47,`small`),Wb(48,`Disabled`),nu(),Wb(49,`
      `),nu(),Wb(50,`
      `),rs(51,`c-card-body`),Wb(52,`
        `),rs(53,`p`,3),Wb(54,`
          Add the `),rs(55,`code`),Wb(56,`disabled`),nu(),Wb(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),nu(),Wb(58,`
        `),rs(59,`app-docs-example`,7),Wb(60,`
          `),rs(61,`label`,8),Wb(62,`Disabled range`),nu(),Wb(63,`
          `),qg(64,`input`,9),Wb(65,`
        `),nu(),Wb(66,`
      `),nu(),Wb(67,`
    `),nu(),Wb(68,`
  `),nu(),Wb(69,`
  `),rs(70,`c-col`,0),Wb(71,`
    `),rs(72,`c-card`,2),Wb(73,`
      `),rs(74,`c-card-header`),Wb(75,`
        `),rs(76,`strong`),Wb(77,`Angular Range`),nu(),Wb(78,` `),rs(79,`small`),Wb(80,`Min and max`),nu(),Wb(81,`
      `),nu(),Wb(82,`
      `),rs(83,`c-card-body`),Wb(84,`
        `),rs(85,`p`,3),Wb(86,`
          Range inputs have implicit values for `),rs(87,`code`),Wb(88,`min-0`),nu(),Wb(89,` and
          `),rs(90,`code`),Wb(91,`max-100`),nu(),Wb(92,`, respectively.
          You may specify new values for those using the `),rs(93,`code`),Wb(94,`min`),nu(),Wb(95,` and
          `),rs(96,`code`),Wb(97,`max`),nu(),Wb(98,` attributes.
        `),nu(),Wb(99,`
        `),rs(100,`app-docs-example`,10),Wb(101,`
          `),rs(102,`label`,11),Wb(103,`Example range`),nu(),Wb(104,`
          `),qg(105,`input`,12),Wb(106,`
        `),nu(),Wb(107,`
      `),nu(),Wb(108,`
    `),nu(),Wb(109,`
  `),nu(),Wb(110,`
  `),rs(111,`c-col`,0),Wb(112,`
    `),rs(113,`c-card`,2),Wb(114,`
      `),rs(115,`c-card-header`),Wb(116,`
        `),rs(117,`strong`),Wb(118,`Angular Range`),nu(),Wb(119,` `),rs(120,`small`),Wb(121,`Steps`),nu(),Wb(122,`
      `),nu(),Wb(123,`
      `),rs(124,`c-card-body`),Wb(125,`
        `),rs(126,`p`,3),Wb(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),rs(128,`code`),Wb(129,`step`),nu(),Wb(130,` value. In the example below,
          we double the number of steps by using
          `),rs(131,`code`),Wb(132,`step="0.5"`),nu(),Wb(133,`.
        `),nu(),Wb(134,`
        `),rs(135,`app-docs-example`,13),Wb(136,`
          `),rs(137,`label`,14),Wb(138,`Example range`),nu(),Wb(139,`
          `),qg(140,`input`,15),Wb(141,`
        `),nu(),Wb(142,`
      `),nu(),Wb(143,`
    `),nu(),Wb(144,`
  `),nu(),Wb(145,`
`),nu())},dependencies:[fF,ux,Ro,JS,Po,I,df,Ws,c],encapsulation:2})}};export{S as RangesComponent};