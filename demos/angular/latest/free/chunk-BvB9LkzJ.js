import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,Fi as ste,Ki as ule,M as F,Mt as Oe,T as Dle,Tr as gn,Un as ate,Wi as uU,Yr as lle,Zr as lte,Zt as S,ar as dte,c as AU,gi as ple,jr as hle,mt as L,ot as Ka,qi as ute,rn as U,s as AH,sa as x,si as nte,un as Wa,wr as gle,x as Ce,xi as qo}from"./main-VQBM3OGL.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=x({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Floating labels`),L(),Ce(12,`
      `),L(),Ce(13,`
      `),F(14,`c-card-body`),Ce(15,`
        `),F(16,`p`,3),Ce(17,`
          Wrap a pair of `),F(18,`code`),Ce(19,`<cFormControl>`),L(),Ce(20,` and `),F(21,`code`),Ce(22,`<label>`),L(),Ce(23,`
          elements in `),F(24,`code`),Ce(25,`cFormControl`),L(),Ce(26,` to enable floating labels with textual form
          fields. A `),F(27,`code`),Ce(28,`placeholder`),L(),Ce(29,` is required on each `),F(30,`code`),Ce(31,`<input>`),L(),Ce(32,`
          as our method of CSS-only floating labels uses the `),F(33,`code`),Ce(34,`:placeholder-shown`),L(),Ce(35,`
          pseudo-element. Also note that the `),F(36,`code`),Ce(37,`<cFormControl>`),L(),Ce(38,` must come first so
          we can utilize a sibling selector (e.g., `),F(39,`code`),Ce(40,`~`),L(),Ce(41,`).
        `),L(),Ce(42,`
        `),F(43,`app-docs-example`,4),Ce(44,`
          `),F(45,`div`,5),Ce(46,`
            `),Oe(47,`input`,6),Ce(48,`
            `),F(49,`label`,7),Ce(50,`Email address`),L(),Ce(51,`
          `),L(),Ce(52,`
          `),F(53,`div`,8),Ce(54,`
            `),Oe(55,`input`,9),Ce(56,`
            `),F(57,`label`,10),Ce(58,`Password`),L(),Ce(59,`
          `),L(),Ce(60,`
        `),L(),Ce(61,`
        `),F(62,`p`,3),Ce(63,`
          When there's a `),F(64,`code`),Ce(65,`value`),L(),Ce(66,` already defined, `),F(67,`code`),Ce(68,`<label>`),L(),Ce(69,`
          s will automatically adjust to their floated position.
        `),L(),Ce(70,`
        `),F(71,`app-docs-example`,4),Ce(72,`
          `),F(73,`form`,11),Ce(74,`
            `),Oe(75,`input`,12),Ce(76,`
            `),F(77,`label`,13),Ce(78,`Input with value`),L(),Ce(79,`
          `),L(),Ce(80,`
        `),L(),Ce(81,`
      `),L(),Ce(82,`
    `),L(),Ce(83,`
  `),L(),Ce(84,`
  `),F(85,`c-col`,0),Ce(86,`
    `),F(87,`c-card`,2),Ce(88,`
      `),F(89,`c-card-header`),Ce(90,`
        `),F(91,`strong`),Ce(92,`Angular Floating labels`),L(),Ce(93,` `),F(94,`small`),Ce(95,`Textareas`),L(),Ce(96,`
      `),L(),Ce(97,`
      `),F(98,`c-card-body`),Ce(99,`
        `),F(100,`p`,3),Ce(101,`
          By default, `),F(102,`code`),Ce(103,`<textarea>`),L(),Ce(104,`s will be the same height as
          `),F(105,`code`),Ce(106,`<input>`),L(),Ce(107,`s.
        `),L(),Ce(108,`
        `),F(109,`app-docs-example`,14),Ce(110,`
          `),F(111,`div`,8),Ce(112,`
            `),Oe(113,`textarea`,15),Ce(114,`
            `),F(115,`label`,16),Ce(116,`Comments`),L(),Ce(117,`
          `),L(),Ce(118,`
        `),L(),Ce(119,`
        `),F(120,`p`,3),Ce(121,`
          To set a custom height on your `),F(122,`code`),Ce(123,`<textarea>`),L(),Ce(124,`, do not use the
          `),F(125,`code`),Ce(126,`rows`),L(),Ce(127,` attribute. Instead, set an explicit `),F(128,`code`),Ce(129,`height`),L(),Ce(130,` (either
          inline or via custom CSS).
        `),L(),Ce(131,`
        `),F(132,`app-docs-example`,14),Ce(133,`
          `),F(134,`div`,8),Ce(135,`
            `),Oe(136,`textarea`,17),Ce(137,`
            `),F(138,`label`,18),Ce(139,`Comments`),L(),Ce(140,`
          `),L(),Ce(141,`
        `),L(),Ce(142,`
      `),L(),Ce(143,`
    `),L(),Ce(144,`
  `),L(),Ce(145,`
  `),F(146,`c-col`,0),Ce(147,`
    `),F(148,`c-card`,2),Ce(149,`
      `),F(150,`c-card-header`),Ce(151,`
        `),F(152,`strong`),Ce(153,`Angular Floating labels`),L(),Ce(154,` `),F(155,`small`),Ce(156,`Selects`),L(),Ce(157,`
      `),L(),Ce(158,`
      `),F(159,`c-card-body`),Ce(160,`
        `),F(161,`p`,3),Ce(162,`
          Other than `),F(163,`code`),Ce(164,`<input>`),L(),Ce(165,`, floating labels are only available on
          `),F(166,`code`),Ce(167,`<cSelect>`),L(),Ce(168,`s. They work in the same way, but unlike
          `),F(169,`code`),Ce(170,`<input>`),L(),Ce(171,`s, they'll always show the
          `),F(172,`code`),Ce(173,`<label>`),L(),Ce(174,` in its floated state.
          `),F(175,`strong`),Ce(176,`
            Selects with `),F(177,`code`),Ce(178,`size`),L(),Ce(179,` and `),F(180,`code`),Ce(181,`multiple`),L(),Ce(182,` are not supported.
          `),L(),Ce(183,`
        `),L(),Ce(184,`
        `),F(185,`app-docs-example`,19),Ce(186,`
          `),F(187,`div`,8),Ce(188,`
            `),F(189,`select`,20),Ce(190,`
              `),F(191,`option`),Ce(192,`Open this select menu`),L(),Ce(193,`
              `),F(194,`option`,21),Ce(195,`One`),L(),Ce(196,`
              `),F(197,`option`,22),Ce(198,`Two`),L(),Ce(199,`
              `),F(200,`option`,23),Ce(201,`Three`),L(),Ce(202,`
            `),L(),Ce(203,`
            `),F(204,`label`,24),Ce(205,`Works with selects`),L(),Ce(206,`
          `),L(),Ce(207,`
        `),L(),Ce(208,`
      `),L(),Ce(209,`
    `),L(),Ce(210,`
  `),L(),Ce(211,`
  `),F(212,`c-col`,0),Ce(213,`
    `),F(214,`c-card`,2),Ce(215,`
      `),F(216,`c-card-header`),Ce(217,`
        `),F(218,`strong`),Ce(219,`Angular Floating labels`),L(),Ce(220,` `),F(221,`small`),Ce(222,`Layout`),L(),Ce(223,`
      `),L(),Ce(224,`
      `),F(225,`c-card-body`),Ce(226,`
        `),F(227,`p`,3),Ce(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),L(),Ce(229,`
        `),F(230,`app-docs-example`,25),Ce(231,`
          `),F(232,`c-row`,26),Ce(233,`
            `),F(234,`c-col`,27),Ce(235,`
              `),F(236,`div`,8),Ce(237,`
                `),Oe(238,`input`,28),Ce(239,`
                `),F(240,`label`,29),Ce(241,`Email address`),L(),Ce(242,`
              `),L(),Ce(243,`
            `),L(),Ce(244,`
            `),F(245,`c-col`,27),Ce(246,`
              `),F(247,`div`,8),Ce(248,`
                `),F(249,`select`,30),Ce(250,`
                  `),F(251,`option`),Ce(252,`Open this select menu`),L(),Ce(253,`
                  `),F(254,`option`,21),Ce(255,`One`),L(),Ce(256,`
                  `),F(257,`option`,22),Ce(258,`Two`),L(),Ce(259,`
                  `),F(260,`option`,23),Ce(261,`Three`),L(),Ce(262,`
                `),L(),Ce(263,`
                `),F(264,`label`,31),Ce(265,`Works with selects`),L(),Ce(266,`
              `),L(),Ce(267,`
            `),L(),Ce(268,`
          `),L(),Ce(269,`
        `),L(),Ce(270,`
      `),L(),Ce(271,`
    `),L(),Ce(272,`
  `),L(),Ce(273,`
`),L()),l&2&&(S(45),U(`cFormFloating`,!0),S(91),qo(`height`,100,`px`),S(96),U(`gutter`,gn(4,G)))},dependencies:[Cle,AU,Wa,uU,Ka,E,ple,ule,hle,dte,ste,ate,lte,nte,ute,AH,lle,gle,Dle,c],encapsulation:2})}};export{O as FloatingLabelsComponent};