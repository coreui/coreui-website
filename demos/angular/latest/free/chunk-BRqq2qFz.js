import{$t as lT,Bt as hT,Fi as sl,Ft as fT,H as Nv,Hn as Dh,On as xi,Ot as cT,Pn as $h,Q as Ri,aa as yw,di as hD,dn as rT,fr as Oi,in as nT,ki as ow,pi as jI,q as Pv,wt as aT,xr as Th}from"./main-76IFZWOG.js";import{d as en,i as Ln,l as Wn,m as jn,r as Hn,t as $n,x as zn}from"./chunk-xIOCHUvk.js";import{i as w}from"./chunk-CAOhpI5R.js";import{t as c}from"./chunk-P9e4DqVK.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=hD({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Floating labels`),sl(),ow(12,`
      `),sl(),ow(13,`
      `),Oi(14,`c-card-body`),ow(15,`
        `),Oi(16,`p`,3),ow(17,`
          Wrap a pair of `),Oi(18,`code`),ow(19,`<cFormControl>`),sl(),ow(20,` and `),Oi(21,`code`),ow(22,`<label>`),sl(),ow(23,`
          elements in `),Oi(24,`code`),ow(25,`cFormControl`),sl(),ow(26,` to enable floating labels with textual form
          fields. A `),Oi(27,`code`),ow(28,`placeholder`),sl(),ow(29,` is required on each `),Oi(30,`code`),ow(31,`<input>`),sl(),ow(32,`
          as our method of CSS-only floating labels uses the `),Oi(33,`code`),ow(34,`:placeholder-shown`),sl(),ow(35,`
          pseudo-element. Also note that the `),Oi(36,`code`),ow(37,`<cFormControl>`),sl(),ow(38,` must come first so
          we can utilize a sibling selector (e.g., `),Oi(39,`code`),ow(40,`~`),sl(),ow(41,`).
        `),sl(),ow(42,`
        `),Oi(43,`app-docs-example`,4),ow(44,`
          `),Oi(45,`div`,5),ow(46,`
            `),Th(47,`input`,6),ow(48,`
            `),Oi(49,`label`,7),ow(50,`Email address`),sl(),ow(51,`
          `),sl(),ow(52,`
          `),Oi(53,`div`,8),ow(54,`
            `),Th(55,`input`,9),ow(56,`
            `),Oi(57,`label`,10),ow(58,`Password`),sl(),ow(59,`
          `),sl(),ow(60,`
        `),sl(),ow(61,`
        `),Oi(62,`p`,3),ow(63,`
          When there's a `),Oi(64,`code`),ow(65,`value`),sl(),ow(66,` already defined, `),Oi(67,`code`),ow(68,`<label>`),sl(),ow(69,`
          s will automatically adjust to their floated position.
        `),sl(),ow(70,`
        `),Oi(71,`app-docs-example`,4),ow(72,`
          `),Oi(73,`form`,11),ow(74,`
            `),Th(75,`input`,12),ow(76,`
            `),Oi(77,`label`,13),ow(78,`Input with value`),sl(),ow(79,`
          `),sl(),ow(80,`
        `),sl(),ow(81,`
      `),sl(),ow(82,`
    `),sl(),ow(83,`
  `),sl(),ow(84,`
  `),Oi(85,`c-col`,0),ow(86,`
    `),Oi(87,`c-card`,2),ow(88,`
      `),Oi(89,`c-card-header`),ow(90,`
        `),Oi(91,`strong`),ow(92,`Angular Floating labels`),sl(),ow(93,` `),Oi(94,`small`),ow(95,`Textareas`),sl(),ow(96,`
      `),sl(),ow(97,`
      `),Oi(98,`c-card-body`),ow(99,`
        `),Oi(100,`p`,3),ow(101,`
          By default, `),Oi(102,`code`),ow(103,`<textarea>`),sl(),ow(104,`s will be the same height as
          `),Oi(105,`code`),ow(106,`<input>`),sl(),ow(107,`s.
        `),sl(),ow(108,`
        `),Oi(109,`app-docs-example`,14),ow(110,`
          `),Oi(111,`div`,8),ow(112,`
            `),Th(113,`textarea`,15),ow(114,`
            `),Oi(115,`label`,16),ow(116,`Comments`),sl(),ow(117,`
          `),sl(),ow(118,`
        `),sl(),ow(119,`
        `),Oi(120,`p`,3),ow(121,`
          To set a custom height on your `),Oi(122,`code`),ow(123,`<textarea>`),sl(),ow(124,`, do not use the
          `),Oi(125,`code`),ow(126,`rows`),sl(),ow(127,` attribute. Instead, set an explicit `),Oi(128,`code`),ow(129,`height`),sl(),ow(130,` (either
          inline or via custom CSS).
        `),sl(),ow(131,`
        `),Oi(132,`app-docs-example`,14),ow(133,`
          `),Oi(134,`div`,8),ow(135,`
            `),Th(136,`textarea`,17),ow(137,`
            `),Oi(138,`label`,18),ow(139,`Comments`),sl(),ow(140,`
          `),sl(),ow(141,`
        `),sl(),ow(142,`
      `),sl(),ow(143,`
    `),sl(),ow(144,`
  `),sl(),ow(145,`
  `),Oi(146,`c-col`,0),ow(147,`
    `),Oi(148,`c-card`,2),ow(149,`
      `),Oi(150,`c-card-header`),ow(151,`
        `),Oi(152,`strong`),ow(153,`Angular Floating labels`),sl(),ow(154,` `),Oi(155,`small`),ow(156,`Selects`),sl(),ow(157,`
      `),sl(),ow(158,`
      `),Oi(159,`c-card-body`),ow(160,`
        `),Oi(161,`p`,3),ow(162,`
          Other than `),Oi(163,`code`),ow(164,`<input>`),sl(),ow(165,`, floating labels are only available on
          `),Oi(166,`code`),ow(167,`<cSelect>`),sl(),ow(168,`s. They work in the same way, but unlike
          `),Oi(169,`code`),ow(170,`<input>`),sl(),ow(171,`s, they'll always show the
          `),Oi(172,`code`),ow(173,`<label>`),sl(),ow(174,` in its floated state.
          `),Oi(175,`strong`),ow(176,`
            Selects with `),Oi(177,`code`),ow(178,`size`),sl(),ow(179,` and `),Oi(180,`code`),ow(181,`multiple`),sl(),ow(182,` are not supported.
          `),sl(),ow(183,`
        `),sl(),ow(184,`
        `),Oi(185,`app-docs-example`,19),ow(186,`
          `),Oi(187,`div`,8),ow(188,`
            `),Oi(189,`select`,20),ow(190,`
              `),Oi(191,`option`),ow(192,`Open this select menu`),sl(),ow(193,`
              `),Oi(194,`option`,21),ow(195,`One`),sl(),ow(196,`
              `),Oi(197,`option`,22),ow(198,`Two`),sl(),ow(199,`
              `),Oi(200,`option`,23),ow(201,`Three`),sl(),ow(202,`
            `),sl(),ow(203,`
            `),Oi(204,`label`,24),ow(205,`Works with selects`),sl(),ow(206,`
          `),sl(),ow(207,`
        `),sl(),ow(208,`
      `),sl(),ow(209,`
    `),sl(),ow(210,`
  `),sl(),ow(211,`
  `),Oi(212,`c-col`,0),ow(213,`
    `),Oi(214,`c-card`,2),ow(215,`
      `),Oi(216,`c-card-header`),ow(217,`
        `),Oi(218,`strong`),ow(219,`Angular Floating labels`),sl(),ow(220,` `),Oi(221,`small`),ow(222,`Layout`),sl(),ow(223,`
      `),sl(),ow(224,`
      `),Oi(225,`c-card-body`),ow(226,`
        `),Oi(227,`p`,3),ow(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),sl(),ow(229,`
        `),Oi(230,`app-docs-example`,25),ow(231,`
          `),Oi(232,`c-row`,26),ow(233,`
            `),Oi(234,`c-col`,27),ow(235,`
              `),Oi(236,`div`,8),ow(237,`
                `),Th(238,`input`,28),ow(239,`
                `),Oi(240,`label`,29),ow(241,`Email address`),sl(),ow(242,`
              `),sl(),ow(243,`
            `),sl(),ow(244,`
            `),Oi(245,`c-col`,27),ow(246,`
              `),Oi(247,`div`,8),ow(248,`
                `),Oi(249,`select`,30),ow(250,`
                  `),Oi(251,`option`),ow(252,`Open this select menu`),sl(),ow(253,`
                  `),Oi(254,`option`,21),ow(255,`One`),sl(),ow(256,`
                  `),Oi(257,`option`,22),ow(258,`Two`),sl(),ow(259,`
                  `),Oi(260,`option`,23),ow(261,`Three`),sl(),ow(262,`
                `),sl(),ow(263,`
                `),Oi(264,`label`,31),ow(265,`Works with selects`),sl(),ow(266,`
              `),sl(),ow(267,`
            `),sl(),ow(268,`
          `),sl(),ow(269,`
        `),sl(),ow(270,`
      `),sl(),ow(271,`
    `),sl(),ow(272,`
  `),sl(),ow(273,`
`),sl()),l&2&&(jI(45),Dh(`cFormFloating`,!0),jI(91),$h(`height`,100,`px`),jI(96),Dh(`gutter`,yw(4,G)))},dependencies:[fT,Pv,xi,Nv,Ri,w,aT,rT,cT,zn,Hn,Ln,Wn,jn,$n,en,nT,lT,hT,c],encapsulation:2})}};export{O as FloatingLabelsComponent};