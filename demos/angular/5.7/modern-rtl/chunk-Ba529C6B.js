import{Di as xT,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,yt as Pm,zr as pm}from"./chunk-DYvmxcZi.js";import{Bn as or,Gt as al,Hn as pF,Jt as b0,M as Iu,Qt as cF,Rt as _F,Sr as zD,Xn as ro,br as yF,cr as v0,gr as wu,jn as mI,jt as YM,vn as il,vr as xc,wn as kN,zn as oo}from"./main-EEU45E7G.js";import{t as $}from"./chunk-BwuhPruW.js";import"./chunk-D575A_yU.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-8cXlguFK.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=Ib({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Floating labels`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,3),yT(17,`
          Wrap a pair of `),as(18,`code`),yT(19,`<cFormControl>`),lu(),yT(20,` and `),as(21,`code`),yT(22,`<label>`),lu(),yT(23,`
          elements in `),as(24,`code`),yT(25,`cFormControl`),lu(),yT(26,` to enable floating labels with textual form
          fields. A `),as(27,`code`),yT(28,`placeholder`),lu(),yT(29,` is required on each `),as(30,`code`),yT(31,`<input>`),lu(),yT(32,`
          as our method of CSS-only floating labels uses the `),as(33,`code`),yT(34,`:placeholder-shown`),lu(),yT(35,`
          pseudo-element. Also note that the `),as(36,`code`),yT(37,`<cFormControl>`),lu(),yT(38,` must come first so
          we can utilize a sibling selector (e.g., `),as(39,`code`),yT(40,`~`),lu(),yT(41,`).
        `),lu(),yT(42,`
        `),as(43,`app-docs-example`,4),yT(44,`
          `),as(45,`div`,5),yT(46,`
            `),hm(47,`input`,6),yT(48,`
            `),as(49,`label`,7),yT(50,`Email address`),lu(),yT(51,`
          `),lu(),yT(52,`
          `),as(53,`div`,8),yT(54,`
            `),hm(55,`input`,9),yT(56,`
            `),as(57,`label`,10),yT(58,`Password`),lu(),yT(59,`
          `),lu(),yT(60,`
        `),lu(),yT(61,`
        `),as(62,`p`,3),yT(63,`
          When there's a `),as(64,`code`),yT(65,`value`),lu(),yT(66,` already defined, `),as(67,`code`),yT(68,`<label>`),lu(),yT(69,`
          s will automatically adjust to their floated position.
        `),lu(),yT(70,`
        `),as(71,`app-docs-example`,4),yT(72,`
          `),as(73,`form`,11),yT(74,`
            `),hm(75,`input`,12),yT(76,`
            `),as(77,`label`,13),yT(78,`Input with value`),lu(),yT(79,`
          `),lu(),yT(80,`
        `),lu(),yT(81,`
      `),lu(),yT(82,`
    `),lu(),yT(83,`
  `),lu(),yT(84,`
  `),as(85,`c-col`,0),yT(86,`
    `),as(87,`c-card`,2),yT(88,`
      `),as(89,`c-card-header`),yT(90,`
        `),as(91,`strong`),yT(92,`Angular Floating labels`),lu(),yT(93,` `),as(94,`small`),yT(95,`Textareas`),lu(),yT(96,`
      `),lu(),yT(97,`
      `),as(98,`c-card-body`),yT(99,`
        `),as(100,`p`,3),yT(101,`
          By default, `),as(102,`code`),yT(103,`<textarea>`),lu(),yT(104,`s will be the same height as
          `),as(105,`code`),yT(106,`<input>`),lu(),yT(107,`s.
        `),lu(),yT(108,`
        `),as(109,`app-docs-example`,14),yT(110,`
          `),as(111,`div`,8),yT(112,`
            `),hm(113,`textarea`,15),yT(114,`
            `),as(115,`label`,16),yT(116,`Comments`),lu(),yT(117,`
          `),lu(),yT(118,`
        `),lu(),yT(119,`
        `),as(120,`p`,3),yT(121,`
          To set a custom height on your `),as(122,`code`),yT(123,`<textarea>`),lu(),yT(124,`, do not use the
          `),as(125,`code`),yT(126,`rows`),lu(),yT(127,` attribute. Instead, set an explicit `),as(128,`code`),yT(129,`height`),lu(),yT(130,` (either
          inline or via custom CSS).
        `),lu(),yT(131,`
        `),as(132,`app-docs-example`,14),yT(133,`
          `),as(134,`div`,8),yT(135,`
            `),hm(136,`textarea`,17),yT(137,`
            `),as(138,`label`,18),yT(139,`Comments`),lu(),yT(140,`
          `),lu(),yT(141,`
        `),lu(),yT(142,`
      `),lu(),yT(143,`
    `),lu(),yT(144,`
  `),lu(),yT(145,`
  `),as(146,`c-col`,0),yT(147,`
    `),as(148,`c-card`,2),yT(149,`
      `),as(150,`c-card-header`),yT(151,`
        `),as(152,`strong`),yT(153,`Angular Floating labels`),lu(),yT(154,` `),as(155,`small`),yT(156,`Selects`),lu(),yT(157,`
      `),lu(),yT(158,`
      `),as(159,`c-card-body`),yT(160,`
        `),as(161,`p`,3),yT(162,`
          Other than `),as(163,`code`),yT(164,`<input>`),lu(),yT(165,`, floating labels are only available on
          `),as(166,`code`),yT(167,`<cSelect>`),lu(),yT(168,`s. They work in the same way, but unlike
          `),as(169,`code`),yT(170,`<input>`),lu(),yT(171,`s, they'll always show the
          `),as(172,`code`),yT(173,`<label>`),lu(),yT(174,` in its floated state.
          `),as(175,`strong`),yT(176,`
            Selects with `),as(177,`code`),yT(178,`size`),lu(),yT(179,` and `),as(180,`code`),yT(181,`multiple`),lu(),yT(182,` are not supported.
          `),lu(),yT(183,`
        `),lu(),yT(184,`
        `),as(185,`app-docs-example`,19),yT(186,`
          `),as(187,`div`,8),yT(188,`
            `),as(189,`select`,20),yT(190,`
              `),as(191,`option`),yT(192,`Open this select menu`),lu(),yT(193,`
              `),as(194,`option`,21),yT(195,`One`),lu(),yT(196,`
              `),as(197,`option`,22),yT(198,`Two`),lu(),yT(199,`
              `),as(200,`option`,23),yT(201,`Three`),lu(),yT(202,`
            `),lu(),yT(203,`
            `),as(204,`label`,24),yT(205,`Works with selects`),lu(),yT(206,`
          `),lu(),yT(207,`
        `),lu(),yT(208,`
      `),lu(),yT(209,`
    `),lu(),yT(210,`
  `),lu(),yT(211,`
  `),as(212,`c-col`,0),yT(213,`
    `),as(214,`c-card`,2),yT(215,`
      `),as(216,`c-card-header`),yT(217,`
        `),as(218,`strong`),yT(219,`Angular Floating labels`),lu(),yT(220,` `),as(221,`small`),yT(222,`Layout`),lu(),yT(223,`
      `),lu(),yT(224,`
      `),as(225,`c-card-body`),yT(226,`
        `),as(227,`p`,3),yT(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),lu(),yT(229,`
        `),as(230,`app-docs-example`,25),yT(231,`
          `),as(232,`c-row`,26),yT(233,`
            `),as(234,`c-col`,27),yT(235,`
              `),as(236,`div`,8),yT(237,`
                `),hm(238,`input`,28),yT(239,`
                `),as(240,`label`,29),yT(241,`Email address`),lu(),yT(242,`
              `),lu(),yT(243,`
            `),lu(),yT(244,`
            `),as(245,`c-col`,27),yT(246,`
              `),as(247,`div`,8),yT(248,`
                `),as(249,`select`,30),yT(250,`
                  `),as(251,`option`),yT(252,`Open this select menu`),lu(),yT(253,`
                  `),as(254,`option`,21),yT(255,`One`),lu(),yT(256,`
                  `),as(257,`option`,22),yT(258,`Two`),lu(),yT(259,`
                  `),as(260,`option`,23),yT(261,`Three`),lu(),yT(262,`
                `),lu(),yT(263,`
                `),as(264,`label`,31),yT(265,`Works with selects`),lu(),yT(266,`
              `),lu(),yT(267,`
            `),lu(),yT(268,`
          `),lu(),yT(269,`
        `),lu(),yT(270,`
      `),lu(),yT(271,`
    `),lu(),yT(272,`
  `),lu(),yT(273,`
`),lu()),l&2&&(ZD(45),pm(`cFormFloating`,!0),ZD(91),Pm(`height`,100,`px`),ZD(96),pm(`gutter`,xT(4,G)))},dependencies:[yF,mI,oo,YM,ro,$,pF,xc,v0,or,kN,Iu,wu,il,al,zD,cF,b0,_F,c],encapsulation:2})}};export{O as FloatingLabelsComponent};