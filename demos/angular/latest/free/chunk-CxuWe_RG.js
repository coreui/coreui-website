import{Dt as O,Ft as Pa,Wt as Re,_n as VV,ai as nH,en as T,et as Ioe,gt as La,j as F,na as woe,qt as Roe,ua as ye}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=T({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Range`),F(),ye(12,` `),Re(13,`small`),ye(14,`
      `),F(),ye(15,`
      `),O(16,`c-card-body`),ye(17,`
        `),O(18,`p`,3),ye(19,`
          Create custom `),O(20,`code`),ye(21,`<input type="range">`),F(),ye(22,` controls
          with `),O(23,`code`),ye(24,`<input cFormControl type="range">`),F(),ye(25,`.
        `),F(),ye(26,`
        `),O(27,`app-docs-example`,4),ye(28,`
          `),O(29,`label`,5),ye(30,`Example range`),F(),ye(31,`
          `),Re(32,`input`,6),ye(33,`
        `),F(),ye(34,`
      `),F(),ye(35,`
    `),F(),ye(36,`
  `),F(),ye(37,`
  `),O(38,`c-col`,0),ye(39,`
    `),O(40,`c-card`,2),ye(41,`
      `),O(42,`c-card-header`),ye(43,`
        `),O(44,`strong`),ye(45,`Angular Range`),F(),ye(46,` `),O(47,`small`),ye(48,`Disabled`),F(),ye(49,`
      `),F(),ye(50,`
      `),O(51,`c-card-body`),ye(52,`
        `),O(53,`p`,3),ye(54,`
          Add the `),O(55,`code`),ye(56,`disabled`),F(),ye(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),F(),ye(58,`
        `),O(59,`app-docs-example`,7),ye(60,`
          `),O(61,`label`,8),ye(62,`Disabled range`),F(),ye(63,`
          `),Re(64,`input`,9),ye(65,`
        `),F(),ye(66,`
      `),F(),ye(67,`
    `),F(),ye(68,`
  `),F(),ye(69,`
  `),O(70,`c-col`,0),ye(71,`
    `),O(72,`c-card`,2),ye(73,`
      `),O(74,`c-card-header`),ye(75,`
        `),O(76,`strong`),ye(77,`Angular Range`),F(),ye(78,` `),O(79,`small`),ye(80,`Min and max`),F(),ye(81,`
      `),F(),ye(82,`
      `),O(83,`c-card-body`),ye(84,`
        `),O(85,`p`,3),ye(86,`
          Range inputs have implicit values for `),O(87,`code`),ye(88,`min-0`),F(),ye(89,` and
          `),O(90,`code`),ye(91,`max-100`),F(),ye(92,`, respectively.
          You may specify new values for those using the `),O(93,`code`),ye(94,`min`),F(),ye(95,` and
          `),O(96,`code`),ye(97,`max`),F(),ye(98,` attributes.
        `),F(),ye(99,`
        `),O(100,`app-docs-example`,10),ye(101,`
          `),O(102,`label`,11),ye(103,`Example range`),F(),ye(104,`
          `),Re(105,`input`,12),ye(106,`
        `),F(),ye(107,`
      `),F(),ye(108,`
    `),F(),ye(109,`
  `),F(),ye(110,`
  `),O(111,`c-col`,0),ye(112,`
    `),O(113,`c-card`,2),ye(114,`
      `),O(115,`c-card-header`),ye(116,`
        `),O(117,`strong`),ye(118,`Angular Range`),F(),ye(119,` `),O(120,`small`),ye(121,`Steps`),F(),ye(122,`
      `),F(),ye(123,`
      `),O(124,`c-card-body`),ye(125,`
        `),O(126,`p`,3),ye(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),O(128,`code`),ye(129,`step`),F(),ye(130,` value. In the example below,
          we double the number of steps by using
          `),O(131,`code`),ye(132,`step="0.5"`),F(),ye(133,`.
        `),F(),ye(134,`
        `),O(135,`app-docs-example`,13),ye(136,`
          `),O(137,`label`,14),ye(138,`Example range`),F(),ye(139,`
          `),Re(140,`input`,15),ye(141,`
        `),F(),ye(142,`
      `),F(),ye(143,`
    `),F(),ye(144,`
  `),F(),ye(145,`
`),F())},dependencies:[Roe,nH,Pa,VV,La,E,woe,Ioe,c],encapsulation:2})}};export{S as RangesComponent};