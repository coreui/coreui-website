import{Dt as P,F as Eo,I as Ete,S as Cte,Si as rP,Vr as ke,Wn as be,X as I,Yt as Ste,an as V,ar as dP,da as yte,ei as mte,en as Tte,jn as Zt,or as da,tt as Ite,ut as L,v as C,zi as ua}from"./main-AXUR3WFK.js";import{t as E}from"./chunk-DrG-2cCJ.js";import{t as c}from"./chunk-Dishkh7c.js";import{a as Ln,d as Zn,l as Wn,m as en,r as Gn,t as $n,x as zn}from"./chunk-rVXNikik.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=I({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P$1){l&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Floating labels`),P(),be(12,`
      `),P(),be(13,`
      `),L(14,`c-card-body`),be(15,`
        `),L(16,`p`,3),be(17,`
          Wrap a pair of `),L(18,`code`),be(19,`<cFormControl>`),P(),be(20,` and `),L(21,`code`),be(22,`<label>`),P(),be(23,`
          elements in `),L(24,`code`),be(25,`cFormControl`),P(),be(26,` to enable floating labels with textual form
          fields. A `),L(27,`code`),be(28,`placeholder`),P(),be(29,` is required on each `),L(30,`code`),be(31,`<input>`),P(),be(32,`
          as our method of CSS-only floating labels uses the `),L(33,`code`),be(34,`:placeholder-shown`),P(),be(35,`
          pseudo-element. Also note that the `),L(36,`code`),be(37,`<cFormControl>`),P(),be(38,` must come first so
          we can utilize a sibling selector (e.g., `),L(39,`code`),be(40,`~`),P(),be(41,`).
        `),P(),be(42,`
        `),L(43,`app-docs-example`,4),be(44,`
          `),L(45,`div`,5),be(46,`
            `),ke(47,`input`,6),be(48,`
            `),L(49,`label`,7),be(50,`Email address`),P(),be(51,`
          `),P(),be(52,`
          `),L(53,`div`,8),be(54,`
            `),ke(55,`input`,9),be(56,`
            `),L(57,`label`,10),be(58,`Password`),P(),be(59,`
          `),P(),be(60,`
        `),P(),be(61,`
        `),L(62,`p`,3),be(63,`
          When there's a `),L(64,`code`),be(65,`value`),P(),be(66,` already defined, `),L(67,`code`),be(68,`<label>`),P(),be(69,`
          s will automatically adjust to their floated position.
        `),P(),be(70,`
        `),L(71,`app-docs-example`,4),be(72,`
          `),L(73,`form`,11),be(74,`
            `),ke(75,`input`,12),be(76,`
            `),L(77,`label`,13),be(78,`Input with value`),P(),be(79,`
          `),P(),be(80,`
        `),P(),be(81,`
      `),P(),be(82,`
    `),P(),be(83,`
  `),P(),be(84,`
  `),L(85,`c-col`,0),be(86,`
    `),L(87,`c-card`,2),be(88,`
      `),L(89,`c-card-header`),be(90,`
        `),L(91,`strong`),be(92,`Angular Floating labels`),P(),be(93,` `),L(94,`small`),be(95,`Textareas`),P(),be(96,`
      `),P(),be(97,`
      `),L(98,`c-card-body`),be(99,`
        `),L(100,`p`,3),be(101,`
          By default, `),L(102,`code`),be(103,`<textarea>`),P(),be(104,`s will be the same height as
          `),L(105,`code`),be(106,`<input>`),P(),be(107,`s.
        `),P(),be(108,`
        `),L(109,`app-docs-example`,14),be(110,`
          `),L(111,`div`,8),be(112,`
            `),ke(113,`textarea`,15),be(114,`
            `),L(115,`label`,16),be(116,`Comments`),P(),be(117,`
          `),P(),be(118,`
        `),P(),be(119,`
        `),L(120,`p`,3),be(121,`
          To set a custom height on your `),L(122,`code`),be(123,`<textarea>`),P(),be(124,`, do not use the
          `),L(125,`code`),be(126,`rows`),P(),be(127,` attribute. Instead, set an explicit `),L(128,`code`),be(129,`height`),P(),be(130,` (either
          inline or via custom CSS).
        `),P(),be(131,`
        `),L(132,`app-docs-example`,14),be(133,`
          `),L(134,`div`,8),be(135,`
            `),ke(136,`textarea`,17),be(137,`
            `),L(138,`label`,18),be(139,`Comments`),P(),be(140,`
          `),P(),be(141,`
        `),P(),be(142,`
      `),P(),be(143,`
    `),P(),be(144,`
  `),P(),be(145,`
  `),L(146,`c-col`,0),be(147,`
    `),L(148,`c-card`,2),be(149,`
      `),L(150,`c-card-header`),be(151,`
        `),L(152,`strong`),be(153,`Angular Floating labels`),P(),be(154,` `),L(155,`small`),be(156,`Selects`),P(),be(157,`
      `),P(),be(158,`
      `),L(159,`c-card-body`),be(160,`
        `),L(161,`p`,3),be(162,`
          Other than `),L(163,`code`),be(164,`<input>`),P(),be(165,`, floating labels are only available on
          `),L(166,`code`),be(167,`<cSelect>`),P(),be(168,`s. They work in the same way, but unlike
          `),L(169,`code`),be(170,`<input>`),P(),be(171,`s, they'll always show the
          `),L(172,`code`),be(173,`<label>`),P(),be(174,` in its floated state.
          `),L(175,`strong`),be(176,`
            Selects with `),L(177,`code`),be(178,`size`),P(),be(179,` and `),L(180,`code`),be(181,`multiple`),P(),be(182,` are not supported.
          `),P(),be(183,`
        `),P(),be(184,`
        `),L(185,`app-docs-example`,19),be(186,`
          `),L(187,`div`,8),be(188,`
            `),L(189,`select`,20),be(190,`
              `),L(191,`option`),be(192,`Open this select menu`),P(),be(193,`
              `),L(194,`option`,21),be(195,`One`),P(),be(196,`
              `),L(197,`option`,22),be(198,`Two`),P(),be(199,`
              `),L(200,`option`,23),be(201,`Three`),P(),be(202,`
            `),P(),be(203,`
            `),L(204,`label`,24),be(205,`Works with selects`),P(),be(206,`
          `),P(),be(207,`
        `),P(),be(208,`
      `),P(),be(209,`
    `),P(),be(210,`
  `),P(),be(211,`
  `),L(212,`c-col`,0),be(213,`
    `),L(214,`c-card`,2),be(215,`
      `),L(216,`c-card-header`),be(217,`
        `),L(218,`strong`),be(219,`Angular Floating labels`),P(),be(220,` `),L(221,`small`),be(222,`Layout`),P(),be(223,`
      `),P(),be(224,`
      `),L(225,`c-card-body`),be(226,`
        `),L(227,`p`,3),be(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),P(),be(229,`
        `),L(230,`app-docs-example`,25),be(231,`
          `),L(232,`c-row`,26),be(233,`
            `),L(234,`c-col`,27),be(235,`
              `),L(236,`div`,8),be(237,`
                `),ke(238,`input`,28),be(239,`
                `),L(240,`label`,29),be(241,`Email address`),P(),be(242,`
              `),P(),be(243,`
            `),P(),be(244,`
            `),L(245,`c-col`,27),be(246,`
              `),L(247,`div`,8),be(248,`
                `),L(249,`select`,30),be(250,`
                  `),L(251,`option`),be(252,`Open this select menu`),P(),be(253,`
                  `),L(254,`option`,21),be(255,`One`),P(),be(256,`
                  `),L(257,`option`,22),be(258,`Two`),P(),be(259,`
                  `),L(260,`option`,23),be(261,`Three`),P(),be(262,`
                `),P(),be(263,`
                `),L(264,`label`,31),be(265,`Works with selects`),P(),be(266,`
              `),P(),be(267,`
            `),P(),be(268,`
          `),P(),be(269,`
        `),P(),be(270,`
      `),P(),be(271,`
    `),P(),be(272,`
  `),P(),be(273,`
`),P()),l&2&&(C(45),V(`cFormFloating`,!0),C(91),Eo(`height`,100,`px`),C(96),V(`gutter`,Zt(4,G)))},dependencies:[Ste,dP,ua,rP,da,E,Cte,yte,Ete,Zn,Ln,Wn,$n,Gn,zn,en,mte,Ite,Tte,c],encapsulation:2})}};export{O as FloatingLabelsComponent};