import{Ft as fT,H as Nv,Hn as Ch,Jn as Ew,Ot as cT,Q as Ri,Ui as qh,Vt as hT,Xr as aw,an as nT,en as lT,fa as yD,fn as rT,kn as xi,la as wh,ni as cl,q as Pv,vr as Oi,wt as aT,zn as BI}from"./main-WBU6EW3E.js";import{d as en,i as Ln,l as Wn,m as jn,r as Hn,t as $n,x as zn}from"./chunk-CeGKAmi8.js";import{t as E}from"./chunk-D1ovLIZZ.js";import{t as c}from"./chunk-BNlMJs6j.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=yD({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Floating labels`),cl(),aw(12,`
      `),cl(),aw(13,`
      `),Oi(14,`c-card-body`),aw(15,`
        `),Oi(16,`p`,3),aw(17,`
          Wrap a pair of `),Oi(18,`code`),aw(19,`<cFormControl>`),cl(),aw(20,` and `),Oi(21,`code`),aw(22,`<label>`),cl(),aw(23,`
          elements in `),Oi(24,`code`),aw(25,`cFormControl`),cl(),aw(26,` to enable floating labels with textual form
          fields. A `),Oi(27,`code`),aw(28,`placeholder`),cl(),aw(29,` is required on each `),Oi(30,`code`),aw(31,`<input>`),cl(),aw(32,`
          as our method of CSS-only floating labels uses the `),Oi(33,`code`),aw(34,`:placeholder-shown`),cl(),aw(35,`
          pseudo-element. Also note that the `),Oi(36,`code`),aw(37,`<cFormControl>`),cl(),aw(38,` must come first so
          we can utilize a sibling selector (e.g., `),Oi(39,`code`),aw(40,`~`),cl(),aw(41,`).
        `),cl(),aw(42,`
        `),Oi(43,`app-docs-example`,4),aw(44,`
          `),Oi(45,`div`,5),aw(46,`
            `),Ch(47,`input`,6),aw(48,`
            `),Oi(49,`label`,7),aw(50,`Email address`),cl(),aw(51,`
          `),cl(),aw(52,`
          `),Oi(53,`div`,8),aw(54,`
            `),Ch(55,`input`,9),aw(56,`
            `),Oi(57,`label`,10),aw(58,`Password`),cl(),aw(59,`
          `),cl(),aw(60,`
        `),cl(),aw(61,`
        `),Oi(62,`p`,3),aw(63,`
          When there's a `),Oi(64,`code`),aw(65,`value`),cl(),aw(66,` already defined, `),Oi(67,`code`),aw(68,`<label>`),cl(),aw(69,`
          s will automatically adjust to their floated position.
        `),cl(),aw(70,`
        `),Oi(71,`app-docs-example`,4),aw(72,`
          `),Oi(73,`form`,11),aw(74,`
            `),Ch(75,`input`,12),aw(76,`
            `),Oi(77,`label`,13),aw(78,`Input with value`),cl(),aw(79,`
          `),cl(),aw(80,`
        `),cl(),aw(81,`
      `),cl(),aw(82,`
    `),cl(),aw(83,`
  `),cl(),aw(84,`
  `),Oi(85,`c-col`,0),aw(86,`
    `),Oi(87,`c-card`,2),aw(88,`
      `),Oi(89,`c-card-header`),aw(90,`
        `),Oi(91,`strong`),aw(92,`Angular Floating labels`),cl(),aw(93,` `),Oi(94,`small`),aw(95,`Textareas`),cl(),aw(96,`
      `),cl(),aw(97,`
      `),Oi(98,`c-card-body`),aw(99,`
        `),Oi(100,`p`,3),aw(101,`
          By default, `),Oi(102,`code`),aw(103,`<textarea>`),cl(),aw(104,`s will be the same height as
          `),Oi(105,`code`),aw(106,`<input>`),cl(),aw(107,`s.
        `),cl(),aw(108,`
        `),Oi(109,`app-docs-example`,14),aw(110,`
          `),Oi(111,`div`,8),aw(112,`
            `),Ch(113,`textarea`,15),aw(114,`
            `),Oi(115,`label`,16),aw(116,`Comments`),cl(),aw(117,`
          `),cl(),aw(118,`
        `),cl(),aw(119,`
        `),Oi(120,`p`,3),aw(121,`
          To set a custom height on your `),Oi(122,`code`),aw(123,`<textarea>`),cl(),aw(124,`, do not use the
          `),Oi(125,`code`),aw(126,`rows`),cl(),aw(127,` attribute. Instead, set an explicit `),Oi(128,`code`),aw(129,`height`),cl(),aw(130,` (either
          inline or via custom CSS).
        `),cl(),aw(131,`
        `),Oi(132,`app-docs-example`,14),aw(133,`
          `),Oi(134,`div`,8),aw(135,`
            `),Ch(136,`textarea`,17),aw(137,`
            `),Oi(138,`label`,18),aw(139,`Comments`),cl(),aw(140,`
          `),cl(),aw(141,`
        `),cl(),aw(142,`
      `),cl(),aw(143,`
    `),cl(),aw(144,`
  `),cl(),aw(145,`
  `),Oi(146,`c-col`,0),aw(147,`
    `),Oi(148,`c-card`,2),aw(149,`
      `),Oi(150,`c-card-header`),aw(151,`
        `),Oi(152,`strong`),aw(153,`Angular Floating labels`),cl(),aw(154,` `),Oi(155,`small`),aw(156,`Selects`),cl(),aw(157,`
      `),cl(),aw(158,`
      `),Oi(159,`c-card-body`),aw(160,`
        `),Oi(161,`p`,3),aw(162,`
          Other than `),Oi(163,`code`),aw(164,`<input>`),cl(),aw(165,`, floating labels are only available on
          `),Oi(166,`code`),aw(167,`<cSelect>`),cl(),aw(168,`s. They work in the same way, but unlike
          `),Oi(169,`code`),aw(170,`<input>`),cl(),aw(171,`s, they'll always show the
          `),Oi(172,`code`),aw(173,`<label>`),cl(),aw(174,` in its floated state.
          `),Oi(175,`strong`),aw(176,`
            Selects with `),Oi(177,`code`),aw(178,`size`),cl(),aw(179,` and `),Oi(180,`code`),aw(181,`multiple`),cl(),aw(182,` are not supported.
          `),cl(),aw(183,`
        `),cl(),aw(184,`
        `),Oi(185,`app-docs-example`,19),aw(186,`
          `),Oi(187,`div`,8),aw(188,`
            `),Oi(189,`select`,20),aw(190,`
              `),Oi(191,`option`),aw(192,`Open this select menu`),cl(),aw(193,`
              `),Oi(194,`option`,21),aw(195,`One`),cl(),aw(196,`
              `),Oi(197,`option`,22),aw(198,`Two`),cl(),aw(199,`
              `),Oi(200,`option`,23),aw(201,`Three`),cl(),aw(202,`
            `),cl(),aw(203,`
            `),Oi(204,`label`,24),aw(205,`Works with selects`),cl(),aw(206,`
          `),cl(),aw(207,`
        `),cl(),aw(208,`
      `),cl(),aw(209,`
    `),cl(),aw(210,`
  `),cl(),aw(211,`
  `),Oi(212,`c-col`,0),aw(213,`
    `),Oi(214,`c-card`,2),aw(215,`
      `),Oi(216,`c-card-header`),aw(217,`
        `),Oi(218,`strong`),aw(219,`Angular Floating labels`),cl(),aw(220,` `),Oi(221,`small`),aw(222,`Layout`),cl(),aw(223,`
      `),cl(),aw(224,`
      `),Oi(225,`c-card-body`),aw(226,`
        `),Oi(227,`p`,3),aw(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),cl(),aw(229,`
        `),Oi(230,`app-docs-example`,25),aw(231,`
          `),Oi(232,`c-row`,26),aw(233,`
            `),Oi(234,`c-col`,27),aw(235,`
              `),Oi(236,`div`,8),aw(237,`
                `),Ch(238,`input`,28),aw(239,`
                `),Oi(240,`label`,29),aw(241,`Email address`),cl(),aw(242,`
              `),cl(),aw(243,`
            `),cl(),aw(244,`
            `),Oi(245,`c-col`,27),aw(246,`
              `),Oi(247,`div`,8),aw(248,`
                `),Oi(249,`select`,30),aw(250,`
                  `),Oi(251,`option`),aw(252,`Open this select menu`),cl(),aw(253,`
                  `),Oi(254,`option`,21),aw(255,`One`),cl(),aw(256,`
                  `),Oi(257,`option`,22),aw(258,`Two`),cl(),aw(259,`
                  `),Oi(260,`option`,23),aw(261,`Three`),cl(),aw(262,`
                `),cl(),aw(263,`
                `),Oi(264,`label`,31),aw(265,`Works with selects`),cl(),aw(266,`
              `),cl(),aw(267,`
            `),cl(),aw(268,`
          `),cl(),aw(269,`
        `),cl(),aw(270,`
      `),cl(),aw(271,`
    `),cl(),aw(272,`
  `),cl(),aw(273,`
`),cl()),l&2&&(BI(45),wh(`cFormFloating`,!0),BI(91),qh(`height`,100,`px`),BI(96),wh(`gutter`,Ew(4,G)))},dependencies:[fT,Pv,xi,Nv,Ri,E,aT,rT,cT,zn,Hn,Ln,Wn,jn,$n,en,nT,lT,hT,c],encapsulation:2})}};export{O as FloatingLabelsComponent};