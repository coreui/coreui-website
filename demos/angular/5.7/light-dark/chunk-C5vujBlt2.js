import{Gr as pm,Ii as zw,Rr as nu,Yr as rC,_i as vD,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$n as ux,An as oF,Mt as Ws,Q as Ms,Qn as uf,R as JS,Un as sF,an as fF,cn as gF,ft as QN,hn as jc,ht as Ro,lt as Po,p as Bc,tn as df,ur as xr,x as Ds,y as Db}from"./main-AD2Y5VJE.js";import{t as I}from"./chunk-Y32HznYM.js";import"./chunk-CHo8zYa-.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-DOxS8IGk.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=zw({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Floating labels`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,3),Wb(17,`
          Wrap a pair of `),rs(18,`code`),Wb(19,`<cFormControl>`),nu(),Wb(20,` and `),rs(21,`code`),Wb(22,`<label>`),nu(),Wb(23,`
          elements in `),rs(24,`code`),Wb(25,`cFormControl`),nu(),Wb(26,` to enable floating labels with textual form
          fields. A `),rs(27,`code`),Wb(28,`placeholder`),nu(),Wb(29,` is required on each `),rs(30,`code`),Wb(31,`<input>`),nu(),Wb(32,`
          as our method of CSS-only floating labels uses the `),rs(33,`code`),Wb(34,`:placeholder-shown`),nu(),Wb(35,`
          pseudo-element. Also note that the `),rs(36,`code`),Wb(37,`<cFormControl>`),nu(),Wb(38,` must come first so
          we can utilize a sibling selector (e.g., `),rs(39,`code`),Wb(40,`~`),nu(),Wb(41,`).
        `),nu(),Wb(42,`
        `),rs(43,`app-docs-example`,4),Wb(44,`
          `),rs(45,`div`,5),Wb(46,`
            `),qg(47,`input`,6),Wb(48,`
            `),rs(49,`label`,7),Wb(50,`Email address`),nu(),Wb(51,`
          `),nu(),Wb(52,`
          `),rs(53,`div`,8),Wb(54,`
            `),qg(55,`input`,9),Wb(56,`
            `),rs(57,`label`,10),Wb(58,`Password`),nu(),Wb(59,`
          `),nu(),Wb(60,`
        `),nu(),Wb(61,`
        `),rs(62,`p`,3),Wb(63,`
          When there's a `),rs(64,`code`),Wb(65,`value`),nu(),Wb(66,` already defined, `),rs(67,`code`),Wb(68,`<label>`),nu(),Wb(69,`
          s will automatically adjust to their floated position.
        `),nu(),Wb(70,`
        `),rs(71,`app-docs-example`,4),Wb(72,`
          `),rs(73,`form`,11),Wb(74,`
            `),qg(75,`input`,12),Wb(76,`
            `),rs(77,`label`,13),Wb(78,`Input with value`),nu(),Wb(79,`
          `),nu(),Wb(80,`
        `),nu(),Wb(81,`
      `),nu(),Wb(82,`
    `),nu(),Wb(83,`
  `),nu(),Wb(84,`
  `),rs(85,`c-col`,0),Wb(86,`
    `),rs(87,`c-card`,2),Wb(88,`
      `),rs(89,`c-card-header`),Wb(90,`
        `),rs(91,`strong`),Wb(92,`Angular Floating labels`),nu(),Wb(93,` `),rs(94,`small`),Wb(95,`Textareas`),nu(),Wb(96,`
      `),nu(),Wb(97,`
      `),rs(98,`c-card-body`),Wb(99,`
        `),rs(100,`p`,3),Wb(101,`
          By default, `),rs(102,`code`),Wb(103,`<textarea>`),nu(),Wb(104,`s will be the same height as
          `),rs(105,`code`),Wb(106,`<input>`),nu(),Wb(107,`s.
        `),nu(),Wb(108,`
        `),rs(109,`app-docs-example`,14),Wb(110,`
          `),rs(111,`div`,8),Wb(112,`
            `),qg(113,`textarea`,15),Wb(114,`
            `),rs(115,`label`,16),Wb(116,`Comments`),nu(),Wb(117,`
          `),nu(),Wb(118,`
        `),nu(),Wb(119,`
        `),rs(120,`p`,3),Wb(121,`
          To set a custom height on your `),rs(122,`code`),Wb(123,`<textarea>`),nu(),Wb(124,`, do not use the
          `),rs(125,`code`),Wb(126,`rows`),nu(),Wb(127,` attribute. Instead, set an explicit `),rs(128,`code`),Wb(129,`height`),nu(),Wb(130,` (either
          inline or via custom CSS).
        `),nu(),Wb(131,`
        `),rs(132,`app-docs-example`,14),Wb(133,`
          `),rs(134,`div`,8),Wb(135,`
            `),qg(136,`textarea`,17),Wb(137,`
            `),rs(138,`label`,18),Wb(139,`Comments`),nu(),Wb(140,`
          `),nu(),Wb(141,`
        `),nu(),Wb(142,`
      `),nu(),Wb(143,`
    `),nu(),Wb(144,`
  `),nu(),Wb(145,`
  `),rs(146,`c-col`,0),Wb(147,`
    `),rs(148,`c-card`,2),Wb(149,`
      `),rs(150,`c-card-header`),Wb(151,`
        `),rs(152,`strong`),Wb(153,`Angular Floating labels`),nu(),Wb(154,` `),rs(155,`small`),Wb(156,`Selects`),nu(),Wb(157,`
      `),nu(),Wb(158,`
      `),rs(159,`c-card-body`),Wb(160,`
        `),rs(161,`p`,3),Wb(162,`
          Other than `),rs(163,`code`),Wb(164,`<input>`),nu(),Wb(165,`, floating labels are only available on
          `),rs(166,`code`),Wb(167,`<cSelect>`),nu(),Wb(168,`s. They work in the same way, but unlike
          `),rs(169,`code`),Wb(170,`<input>`),nu(),Wb(171,`s, they'll always show the
          `),rs(172,`code`),Wb(173,`<label>`),nu(),Wb(174,` in its floated state.
          `),rs(175,`strong`),Wb(176,`
            Selects with `),rs(177,`code`),Wb(178,`size`),nu(),Wb(179,` and `),rs(180,`code`),Wb(181,`multiple`),nu(),Wb(182,` are not supported.
          `),nu(),Wb(183,`
        `),nu(),Wb(184,`
        `),rs(185,`app-docs-example`,19),Wb(186,`
          `),rs(187,`div`,8),Wb(188,`
            `),rs(189,`select`,20),Wb(190,`
              `),rs(191,`option`),Wb(192,`Open this select menu`),nu(),Wb(193,`
              `),rs(194,`option`,21),Wb(195,`One`),nu(),Wb(196,`
              `),rs(197,`option`,22),Wb(198,`Two`),nu(),Wb(199,`
              `),rs(200,`option`,23),Wb(201,`Three`),nu(),Wb(202,`
            `),nu(),Wb(203,`
            `),rs(204,`label`,24),Wb(205,`Works with selects`),nu(),Wb(206,`
          `),nu(),Wb(207,`
        `),nu(),Wb(208,`
      `),nu(),Wb(209,`
    `),nu(),Wb(210,`
  `),nu(),Wb(211,`
  `),rs(212,`c-col`,0),Wb(213,`
    `),rs(214,`c-card`,2),Wb(215,`
      `),rs(216,`c-card-header`),Wb(217,`
        `),rs(218,`strong`),Wb(219,`Angular Floating labels`),nu(),Wb(220,` `),rs(221,`small`),Wb(222,`Layout`),nu(),Wb(223,`
      `),nu(),Wb(224,`
      `),rs(225,`c-card-body`),Wb(226,`
        `),rs(227,`p`,3),Wb(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),nu(),Wb(229,`
        `),rs(230,`app-docs-example`,25),Wb(231,`
          `),rs(232,`c-row`,26),Wb(233,`
            `),rs(234,`c-col`,27),Wb(235,`
              `),rs(236,`div`,8),Wb(237,`
                `),qg(238,`input`,28),Wb(239,`
                `),rs(240,`label`,29),Wb(241,`Email address`),nu(),Wb(242,`
              `),nu(),Wb(243,`
            `),nu(),Wb(244,`
            `),rs(245,`c-col`,27),Wb(246,`
              `),rs(247,`div`,8),Wb(248,`
                `),rs(249,`select`,30),Wb(250,`
                  `),rs(251,`option`),Wb(252,`Open this select menu`),nu(),Wb(253,`
                  `),rs(254,`option`,21),Wb(255,`One`),nu(),Wb(256,`
                  `),rs(257,`option`,22),Wb(258,`Two`),nu(),Wb(259,`
                  `),rs(260,`option`,23),Wb(261,`Three`),nu(),Wb(262,`
                `),nu(),Wb(263,`
                `),rs(264,`label`,31),Wb(265,`Works with selects`),nu(),Wb(266,`
              `),nu(),Wb(267,`
            `),nu(),Wb(268,`
          `),nu(),Wb(269,`
        `),nu(),Wb(270,`
      `),nu(),Wb(271,`
    `),nu(),Wb(272,`
  `),nu(),Wb(273,`
`),nu()),l&2&&(vD(45),Wg(`cFormFloating`,!0),vD(91),pm(`height`,100,`px`),vD(96),Wg(`gutter`,rC(4,G)))},dependencies:[fF,ux,Ro,JS,Po,I,sF,Ws,df,xr,QN,Bc,jc,Ds,Ms,Db,oF,uf,gF,c],encapsulation:2})}};export{O as FloatingLabelsComponent};