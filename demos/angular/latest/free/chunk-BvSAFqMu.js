import{$ as QT,C as GT,Ct as YT,Dt as ZT,Gn as Ch,I as Li,Oi as ki,Rn as zT,Sn as rb,X as Pi,Yn as Dw,ai as cw,dn as n1,ga as wh,ii as cl,la as vD,qi as qh,wn as t1,xt as Xv,zn as $E}from"./main-3ZNEFDGN.js";import{a as Ln,d as Zn,l as Wn,m as en,r as Gn,t as $n,x as zn}from"./chunk-CzoTQkhg.js";import{t as E}from"./chunk-DyzPa03D.js";import{t as c}from"./chunk-Cq12Oo7T.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=vD({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Floating labels`),cl(),cw(12,`
      `),cl(),cw(13,`
      `),ki(14,`c-card-body`),cw(15,`
        `),ki(16,`p`,3),cw(17,`
          Wrap a pair of `),ki(18,`code`),cw(19,`<cFormControl>`),cl(),cw(20,` and `),ki(21,`code`),cw(22,`<label>`),cl(),cw(23,`
          elements in `),ki(24,`code`),cw(25,`cFormControl`),cl(),cw(26,` to enable floating labels with textual form
          fields. A `),ki(27,`code`),cw(28,`placeholder`),cl(),cw(29,` is required on each `),ki(30,`code`),cw(31,`<input>`),cl(),cw(32,`
          as our method of CSS-only floating labels uses the `),ki(33,`code`),cw(34,`:placeholder-shown`),cl(),cw(35,`
          pseudo-element. Also note that the `),ki(36,`code`),cw(37,`<cFormControl>`),cl(),cw(38,` must come first so
          we can utilize a sibling selector (e.g., `),ki(39,`code`),cw(40,`~`),cl(),cw(41,`).
        `),cl(),cw(42,`
        `),ki(43,`app-docs-example`,4),cw(44,`
          `),ki(45,`div`,5),cw(46,`
            `),Ch(47,`input`,6),cw(48,`
            `),ki(49,`label`,7),cw(50,`Email address`),cl(),cw(51,`
          `),cl(),cw(52,`
          `),ki(53,`div`,8),cw(54,`
            `),Ch(55,`input`,9),cw(56,`
            `),ki(57,`label`,10),cw(58,`Password`),cl(),cw(59,`
          `),cl(),cw(60,`
        `),cl(),cw(61,`
        `),ki(62,`p`,3),cw(63,`
          When there's a `),ki(64,`code`),cw(65,`value`),cl(),cw(66,` already defined, `),ki(67,`code`),cw(68,`<label>`),cl(),cw(69,`
          s will automatically adjust to their floated position.
        `),cl(),cw(70,`
        `),ki(71,`app-docs-example`,4),cw(72,`
          `),ki(73,`form`,11),cw(74,`
            `),Ch(75,`input`,12),cw(76,`
            `),ki(77,`label`,13),cw(78,`Input with value`),cl(),cw(79,`
          `),cl(),cw(80,`
        `),cl(),cw(81,`
      `),cl(),cw(82,`
    `),cl(),cw(83,`
  `),cl(),cw(84,`
  `),ki(85,`c-col`,0),cw(86,`
    `),ki(87,`c-card`,2),cw(88,`
      `),ki(89,`c-card-header`),cw(90,`
        `),ki(91,`strong`),cw(92,`Angular Floating labels`),cl(),cw(93,` `),ki(94,`small`),cw(95,`Textareas`),cl(),cw(96,`
      `),cl(),cw(97,`
      `),ki(98,`c-card-body`),cw(99,`
        `),ki(100,`p`,3),cw(101,`
          By default, `),ki(102,`code`),cw(103,`<textarea>`),cl(),cw(104,`s will be the same height as
          `),ki(105,`code`),cw(106,`<input>`),cl(),cw(107,`s.
        `),cl(),cw(108,`
        `),ki(109,`app-docs-example`,14),cw(110,`
          `),ki(111,`div`,8),cw(112,`
            `),Ch(113,`textarea`,15),cw(114,`
            `),ki(115,`label`,16),cw(116,`Comments`),cl(),cw(117,`
          `),cl(),cw(118,`
        `),cl(),cw(119,`
        `),ki(120,`p`,3),cw(121,`
          To set a custom height on your `),ki(122,`code`),cw(123,`<textarea>`),cl(),cw(124,`, do not use the
          `),ki(125,`code`),cw(126,`rows`),cl(),cw(127,` attribute. Instead, set an explicit `),ki(128,`code`),cw(129,`height`),cl(),cw(130,` (either
          inline or via custom CSS).
        `),cl(),cw(131,`
        `),ki(132,`app-docs-example`,14),cw(133,`
          `),ki(134,`div`,8),cw(135,`
            `),Ch(136,`textarea`,17),cw(137,`
            `),ki(138,`label`,18),cw(139,`Comments`),cl(),cw(140,`
          `),cl(),cw(141,`
        `),cl(),cw(142,`
      `),cl(),cw(143,`
    `),cl(),cw(144,`
  `),cl(),cw(145,`
  `),ki(146,`c-col`,0),cw(147,`
    `),ki(148,`c-card`,2),cw(149,`
      `),ki(150,`c-card-header`),cw(151,`
        `),ki(152,`strong`),cw(153,`Angular Floating labels`),cl(),cw(154,` `),ki(155,`small`),cw(156,`Selects`),cl(),cw(157,`
      `),cl(),cw(158,`
      `),ki(159,`c-card-body`),cw(160,`
        `),ki(161,`p`,3),cw(162,`
          Other than `),ki(163,`code`),cw(164,`<input>`),cl(),cw(165,`, floating labels are only available on
          `),ki(166,`code`),cw(167,`<cSelect>`),cl(),cw(168,`s. They work in the same way, but unlike
          `),ki(169,`code`),cw(170,`<input>`),cl(),cw(171,`s, they'll always show the
          `),ki(172,`code`),cw(173,`<label>`),cl(),cw(174,` in its floated state.
          `),ki(175,`strong`),cw(176,`
            Selects with `),ki(177,`code`),cw(178,`size`),cl(),cw(179,` and `),ki(180,`code`),cw(181,`multiple`),cl(),cw(182,` are not supported.
          `),cl(),cw(183,`
        `),cl(),cw(184,`
        `),ki(185,`app-docs-example`,19),cw(186,`
          `),ki(187,`div`,8),cw(188,`
            `),ki(189,`select`,20),cw(190,`
              `),ki(191,`option`),cw(192,`Open this select menu`),cl(),cw(193,`
              `),ki(194,`option`,21),cw(195,`One`),cl(),cw(196,`
              `),ki(197,`option`,22),cw(198,`Two`),cl(),cw(199,`
              `),ki(200,`option`,23),cw(201,`Three`),cl(),cw(202,`
            `),cl(),cw(203,`
            `),ki(204,`label`,24),cw(205,`Works with selects`),cl(),cw(206,`
          `),cl(),cw(207,`
        `),cl(),cw(208,`
      `),cl(),cw(209,`
    `),cl(),cw(210,`
  `),cl(),cw(211,`
  `),ki(212,`c-col`,0),cw(213,`
    `),ki(214,`c-card`,2),cw(215,`
      `),ki(216,`c-card-header`),cw(217,`
        `),ki(218,`strong`),cw(219,`Angular Floating labels`),cl(),cw(220,` `),ki(221,`small`),cw(222,`Layout`),cl(),cw(223,`
      `),cl(),cw(224,`
      `),ki(225,`c-card-body`),cw(226,`
        `),ki(227,`p`,3),cw(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),cl(),cw(229,`
        `),ki(230,`app-docs-example`,25),cw(231,`
          `),ki(232,`c-row`,26),cw(233,`
            `),ki(234,`c-col`,27),cw(235,`
              `),ki(236,`div`,8),cw(237,`
                `),Ch(238,`input`,28),cw(239,`
                `),ki(240,`label`,29),cw(241,`Email address`),cl(),cw(242,`
              `),cl(),cw(243,`
            `),cl(),cw(244,`
            `),ki(245,`c-col`,27),cw(246,`
              `),ki(247,`div`,8),cw(248,`
                `),ki(249,`select`,30),cw(250,`
                  `),ki(251,`option`),cw(252,`Open this select menu`),cl(),cw(253,`
                  `),ki(254,`option`,21),cw(255,`One`),cl(),cw(256,`
                  `),ki(257,`option`,22),cw(258,`Two`),cl(),cw(259,`
                  `),ki(260,`option`,23),cw(261,`Three`),cl(),cw(262,`
                `),cl(),cw(263,`
                `),ki(264,`label`,31),cw(265,`Works with selects`),cl(),cw(266,`
              `),cl(),cw(267,`
            `),cl(),cw(268,`
          `),cl(),cw(269,`
        `),cl(),cw(270,`
      `),cl(),cw(271,`
    `),cl(),cw(272,`
  `),cl(),cw(273,`
`),cl()),l&2&&($E(45),wh(`cFormFloating`,!0),$E(91),qh(`height`,100,`px`),$E(96),wh(`gutter`,Dw(4,G)))},dependencies:[t1,rb,Pi,Xv,Li,E,YT,GT,QT,Zn,Ln,Wn,$n,Gn,zn,en,zT,ZT,n1,c],encapsulation:2})}};export{O as FloatingLabelsComponent};