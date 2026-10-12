import{Dr as hj,Dt as O$1,Ft as Pa,Gi as un,L as GX,Mt as Ooe,Rn as _oe,Wt as Re,Yt as S,Zn as boe,_n as VV,ai as nH,bn as WX,ca as xo,d as BX,en as T,et as Ioe,gn as V,gt as La,j as F,k as Eoe,na as woe,qt as Roe,t as $X,ua as ye,un as UX,xi as qX}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=T({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(O$1(0,`c-row`),ye(1,`
  `),O$1(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O$1(6,`c-card`,2),ye(7,`
      `),O$1(8,`c-card-header`),ye(9,`
        `),O$1(10,`strong`),ye(11,`Angular Floating labels`),F(),ye(12,`
      `),F(),ye(13,`
      `),O$1(14,`c-card-body`),ye(15,`
        `),O$1(16,`p`,3),ye(17,`
          Wrap a pair of `),O$1(18,`code`),ye(19,`<cFormControl>`),F(),ye(20,` and `),O$1(21,`code`),ye(22,`<label>`),F(),ye(23,`
          elements in `),O$1(24,`code`),ye(25,`cFormControl`),F(),ye(26,` to enable floating labels with textual form
          fields. A `),O$1(27,`code`),ye(28,`placeholder`),F(),ye(29,` is required on each `),O$1(30,`code`),ye(31,`<input>`),F(),ye(32,`
          as our method of CSS-only floating labels uses the `),O$1(33,`code`),ye(34,`:placeholder-shown`),F(),ye(35,`
          pseudo-element. Also note that the `),O$1(36,`code`),ye(37,`<cFormControl>`),F(),ye(38,` must come first so
          we can utilize a sibling selector (e.g., `),O$1(39,`code`),ye(40,`~`),F(),ye(41,`).
        `),F(),ye(42,`
        `),O$1(43,`app-docs-example`,4),ye(44,`
          `),O$1(45,`div`,5),ye(46,`
            `),Re(47,`input`,6),ye(48,`
            `),O$1(49,`label`,7),ye(50,`Email address`),F(),ye(51,`
          `),F(),ye(52,`
          `),O$1(53,`div`,8),ye(54,`
            `),Re(55,`input`,9),ye(56,`
            `),O$1(57,`label`,10),ye(58,`Password`),F(),ye(59,`
          `),F(),ye(60,`
        `),F(),ye(61,`
        `),O$1(62,`p`,3),ye(63,`
          When there's a `),O$1(64,`code`),ye(65,`value`),F(),ye(66,` already defined, `),O$1(67,`code`),ye(68,`<label>`),F(),ye(69,`
          s will automatically adjust to their floated position.
        `),F(),ye(70,`
        `),O$1(71,`app-docs-example`,4),ye(72,`
          `),O$1(73,`form`,11),ye(74,`
            `),Re(75,`input`,12),ye(76,`
            `),O$1(77,`label`,13),ye(78,`Input with value`),F(),ye(79,`
          `),F(),ye(80,`
        `),F(),ye(81,`
      `),F(),ye(82,`
    `),F(),ye(83,`
  `),F(),ye(84,`
  `),O$1(85,`c-col`,0),ye(86,`
    `),O$1(87,`c-card`,2),ye(88,`
      `),O$1(89,`c-card-header`),ye(90,`
        `),O$1(91,`strong`),ye(92,`Angular Floating labels`),F(),ye(93,` `),O$1(94,`small`),ye(95,`Textareas`),F(),ye(96,`
      `),F(),ye(97,`
      `),O$1(98,`c-card-body`),ye(99,`
        `),O$1(100,`p`,3),ye(101,`
          By default, `),O$1(102,`code`),ye(103,`<textarea>`),F(),ye(104,`s will be the same height as
          `),O$1(105,`code`),ye(106,`<input>`),F(),ye(107,`s.
        `),F(),ye(108,`
        `),O$1(109,`app-docs-example`,14),ye(110,`
          `),O$1(111,`div`,8),ye(112,`
            `),Re(113,`textarea`,15),ye(114,`
            `),O$1(115,`label`,16),ye(116,`Comments`),F(),ye(117,`
          `),F(),ye(118,`
        `),F(),ye(119,`
        `),O$1(120,`p`,3),ye(121,`
          To set a custom height on your `),O$1(122,`code`),ye(123,`<textarea>`),F(),ye(124,`, do not use the
          `),O$1(125,`code`),ye(126,`rows`),F(),ye(127,` attribute. Instead, set an explicit `),O$1(128,`code`),ye(129,`height`),F(),ye(130,` (either
          inline or via custom CSS).
        `),F(),ye(131,`
        `),O$1(132,`app-docs-example`,14),ye(133,`
          `),O$1(134,`div`,8),ye(135,`
            `),Re(136,`textarea`,17),ye(137,`
            `),O$1(138,`label`,18),ye(139,`Comments`),F(),ye(140,`
          `),F(),ye(141,`
        `),F(),ye(142,`
      `),F(),ye(143,`
    `),F(),ye(144,`
  `),F(),ye(145,`
  `),O$1(146,`c-col`,0),ye(147,`
    `),O$1(148,`c-card`,2),ye(149,`
      `),O$1(150,`c-card-header`),ye(151,`
        `),O$1(152,`strong`),ye(153,`Angular Floating labels`),F(),ye(154,` `),O$1(155,`small`),ye(156,`Selects`),F(),ye(157,`
      `),F(),ye(158,`
      `),O$1(159,`c-card-body`),ye(160,`
        `),O$1(161,`p`,3),ye(162,`
          Other than `),O$1(163,`code`),ye(164,`<input>`),F(),ye(165,`, floating labels are only available on
          `),O$1(166,`code`),ye(167,`<cSelect>`),F(),ye(168,`s. They work in the same way, but unlike
          `),O$1(169,`code`),ye(170,`<input>`),F(),ye(171,`s, they'll always show the
          `),O$1(172,`code`),ye(173,`<label>`),F(),ye(174,` in its floated state.
          `),O$1(175,`strong`),ye(176,`
            Selects with `),O$1(177,`code`),ye(178,`size`),F(),ye(179,` and `),O$1(180,`code`),ye(181,`multiple`),F(),ye(182,` are not supported.
          `),F(),ye(183,`
        `),F(),ye(184,`
        `),O$1(185,`app-docs-example`,19),ye(186,`
          `),O$1(187,`div`,8),ye(188,`
            `),O$1(189,`select`,20),ye(190,`
              `),O$1(191,`option`),ye(192,`Open this select menu`),F(),ye(193,`
              `),O$1(194,`option`,21),ye(195,`One`),F(),ye(196,`
              `),O$1(197,`option`,22),ye(198,`Two`),F(),ye(199,`
              `),O$1(200,`option`,23),ye(201,`Three`),F(),ye(202,`
            `),F(),ye(203,`
            `),O$1(204,`label`,24),ye(205,`Works with selects`),F(),ye(206,`
          `),F(),ye(207,`
        `),F(),ye(208,`
      `),F(),ye(209,`
    `),F(),ye(210,`
  `),F(),ye(211,`
  `),O$1(212,`c-col`,0),ye(213,`
    `),O$1(214,`c-card`,2),ye(215,`
      `),O$1(216,`c-card-header`),ye(217,`
        `),O$1(218,`strong`),ye(219,`Angular Floating labels`),F(),ye(220,` `),O$1(221,`small`),ye(222,`Layout`),F(),ye(223,`
      `),F(),ye(224,`
      `),O$1(225,`c-card-body`),ye(226,`
        `),O$1(227,`p`,3),ye(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),F(),ye(229,`
        `),O$1(230,`app-docs-example`,25),ye(231,`
          `),O$1(232,`c-row`,26),ye(233,`
            `),O$1(234,`c-col`,27),ye(235,`
              `),O$1(236,`div`,8),ye(237,`
                `),Re(238,`input`,28),ye(239,`
                `),O$1(240,`label`,29),ye(241,`Email address`),F(),ye(242,`
              `),F(),ye(243,`
            `),F(),ye(244,`
            `),O$1(245,`c-col`,27),ye(246,`
              `),O$1(247,`div`,8),ye(248,`
                `),O$1(249,`select`,30),ye(250,`
                  `),O$1(251,`option`),ye(252,`Open this select menu`),F(),ye(253,`
                  `),O$1(254,`option`,21),ye(255,`One`),F(),ye(256,`
                  `),O$1(257,`option`,22),ye(258,`Two`),F(),ye(259,`
                  `),O$1(260,`option`,23),ye(261,`Three`),F(),ye(262,`
                `),F(),ye(263,`
                `),O$1(264,`label`,31),ye(265,`Works with selects`),F(),ye(266,`
              `),F(),ye(267,`
            `),F(),ye(268,`
          `),F(),ye(269,`
        `),F(),ye(270,`
      `),F(),ye(271,`
    `),F(),ye(272,`
  `),F(),ye(273,`
`),F()),l&2&&(S(45),V(`cFormFloating`,!0),S(91),xo(`height`,100,`px`),S(96),V(`gutter`,un(4,G)))},dependencies:[Roe,nH,Pa,VV,La,E,_oe,Ioe,woe,WX,$X,UX,qX,BX,GX,hj,boe,Eoe,Ooe,c],encapsulation:2})}};export{O as FloatingLabelsComponent};