import{Dt as O,Ft as Pa,Wt as Re,_n as VV,ai as nH,bn as WX,en as T,gt as La,j as F,k as Eoe,qt as Roe,ua as ye,un as UX,xi as qX}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var h=class l{static{this.ɵfac=function(i){return new(i||l)}}static{this.ɵcmp=T({type:l,selectors:[[`app-select`]],decls:187,vars:0,consts:[[`xs`,`12`],[`href`,`forms/select`,`title`,`Select`],[1,`mb-4`],[`href`,`forms/select`],[`aria-label`,`Default select example`,`cSelect`,``],[`value`,`1`],[`value`,`2`],[`value`,`3`],[1,`text-body-secondary`,`small`],[`href`,`forms/select#sizing`],[`aria-label`,`Large select example`,`cSelect`,``,`sizing`,`lg`,1,`mb-3`],[`aria-label`,`Small select example`,`cSelect`,``,`sizing`,`sm`,1,`mb-3`],[`aria-label`,`Multiple select example`,`cSelect`,``,`multiple`,``,`sizing`,`lg`],[`aria-label`,`Multiple select example`,`cSelect`,``,`multiple`,``,`size`,`3`,`sizing`,`lg`],[`value`,`4`],[`href`,`forms/select#disabled`],[`aria-label`,`Disabled select example`,`cSelect`,``,`disabled`,``],[`selected`,``,`value`,`2`]],template:function(i,g){i&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Select`),F(),ye(12,` `),O(13,`small`),ye(14,`Default`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`app-docs-example`,3),ye(20,`
          `),O(21,`select`,4),ye(22,`
            `),O(23,`option`),ye(24,`Open this select menu`),F(),ye(25,`
            `),O(26,`option`,5),ye(27,`One`),F(),ye(28,`
            `),O(29,`option`,6),ye(30,`Two`),F(),ye(31,`
            `),O(32,`option`,7),ye(33,`Three`),F(),ye(34,`
          `),F(),ye(35,`
        `),F(),ye(36,`
      `),F(),ye(37,`
    `),F(),ye(38,`
  `),F(),ye(39,`
  `),O(40,`c-col`,0),ye(41,`
    `),O(42,`c-card`,2),ye(43,`
      `),O(44,`c-card-header`),ye(45,`
        `),O(46,`strong`),ye(47,`Angular Select`),F(),ye(48,` `),O(49,`small`),ye(50,`Sizing`),F(),ye(51,`
      `),F(),ye(52,`
      `),O(53,`c-card-body`),ye(54,`
        `),O(55,`p`,8),ye(56,`
          You may also choose from small and large custom selects to match our similarly sized
          text inputs.
        `),F(),ye(57,`
        `),O(58,`app-docs-example`,9),ye(59,`
          `),O(60,`select`,10),ye(61,`
            `),O(62,`option`),ye(63,`Open this select menu`),F(),ye(64,`
            `),O(65,`option`,5),ye(66,`One`),F(),ye(67,`
            `),O(68,`option`,6),ye(69,`Two`),F(),ye(70,`
            `),O(71,`option`,7),ye(72,`Three`),F(),ye(73,`
          `),F(),ye(74,`
          `),O(75,`select`,11),ye(76,`
            `),O(77,`option`),ye(78,`Open this select menu`),F(),ye(79,`
            `),O(80,`option`,5),ye(81,`One`),F(),ye(82,`
            `),O(83,`option`,6),ye(84,`Two`),F(),ye(85,`
            `),O(86,`option`,7),ye(87,`Three`),F(),ye(88,`
          `),F(),ye(89,`
        `),F(),ye(90,`
        `),O(91,`p`,8),ye(92,`
          The `),O(93,`code`),ye(94,`multiple`),F(),ye(95,` attribute is also supported:
        `),F(),ye(96,`
        `),O(97,`app-docs-example`,9),ye(98,`
          `),O(99,`select`,12),ye(100,`
            `),O(101,`option`),ye(102,`Open this select menu`),F(),ye(103,`
            `),O(104,`option`,5),ye(105,`One`),F(),ye(106,`
            `),O(107,`option`,6),ye(108,`Two`),F(),ye(109,`
            `),O(110,`option`,7),ye(111,`Three`),F(),ye(112,`
          `),F(),ye(113,`
        `),F(),ye(114,`
        `),O(115,`p`,8),ye(116,`
          As is the `),O(117,`code`),ye(118,`html size`),F(),ye(119,` property:
        `),F(),ye(120,`
        `),O(121,`app-docs-example`,9),ye(122,`
          `),O(123,`select`,13),ye(124,`
            `),O(125,`option`),ye(126,`Open this select menu`),F(),ye(127,`
            `),O(128,`option`,5),ye(129,`One`),F(),ye(130,`
            `),O(131,`option`,6),ye(132,`Two`),F(),ye(133,`
            `),O(134,`option`,7),ye(135,`Three`),F(),ye(136,`
            `),O(137,`option`,14),ye(138,`Four`),F(),ye(139,`
          `),F(),ye(140,`
        `),F(),ye(141,`
      `),F(),ye(142,`
    `),F(),ye(143,`
  `),F(),ye(144,`
  `),O(145,`c-col`,0),ye(146,`
    `),O(147,`c-card`,2),ye(148,`
      `),O(149,`c-card-header`),ye(150,`
        `),O(151,`strong`),ye(152,`Angular Select`),F(),ye(153,` `),O(154,`small`),ye(155,`Disabled`),F(),ye(156,`
      `),F(),ye(157,`
      `),O(158,`c-card-body`),ye(159,`
        `),O(160,`p`,8),ye(161,`
          Add the `),O(162,`code`),ye(163,`disabled`),F(),ye(164,` boolean attribute on a select to give it a grayed out
          appearance and remove pointer events.
        `),F(),ye(165,`
        `),O(166,`app-docs-example`,15),ye(167,`
          `),O(168,`select`,16),ye(169,`
            `),O(170,`option`),ye(171,`Open this select menu`),F(),ye(172,`
            `),O(173,`option`,5),ye(174,`One`),F(),ye(175,`
            `),O(176,`option`,17),ye(177,`Selected: Two`),F(),ye(178,`
            `),O(179,`option`,7),ye(180,`Three`),F(),ye(181,`
          `),F(),ye(182,`
        `),F(),ye(183,`
      `),F(),ye(184,`
    `),F(),ye(185,`
  `),F(),ye(186,`
`),F())},dependencies:[Roe,nH,Pa,VV,La,E,Eoe,WX,UX,qX,c],encapsulation:2})}};export{h as SelectComponent};