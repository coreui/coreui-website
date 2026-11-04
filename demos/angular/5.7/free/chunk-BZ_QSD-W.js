import{$t as V,A as F,Cn as Yse,D as E,Gt as T,Hr as ke,Lr as ja,On as Zn,Pn as _,Tn as ZH,Vr as k,d as Ba,da as yb,fa as ye,ht as Mse,q as IH,qt as UH}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";var f=class s{constructor(){this.value=T(10);this.variant=T(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=E({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Progress`),F(),ye(12,` `),k(13,`small`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),k(17,`c-card-body`),ye(18,`
        `),k(19,`p`,3),ye(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),k(21,`a`,4),ye(22,`
            the HTML5 `),k(23,`code`),ye(24,`<progress>`),F(),ye(25,` element
          `),F(),ye(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),F(),ye(27,`
        `),k(28,`app-docs-example`,5),ye(29,`
          `),ke(30,`c-progress`,6),ye(31,`
          `),ke(32,`c-progress`,6),ye(33,`
          `),ke(34,`c-progress`,6),ye(35,`
          `),ke(36,`c-progress`,6),ye(37,`
          `),k(38,`c-progress`,7),ye(39),F(),ye(40,`
          `),ke(41,`hr`),ye(42,`
          `),k(43,`c-progress`,8),ye(44,`
            `),k(45,`c-progress-bar`,9),ye(46,`33%`),F(),ye(47,`
          `),F(),ye(48,`

        `),F(),ye(49,`
      `),F(),ye(50,`
    `),F(),ye(51,`
  `),F(),ye(52,`
  `),k(53,`c-col`,0),ye(54,`
    `),k(55,`c-card`,2),ye(56,`
      `),k(57,`c-card-header`),ye(58,`
        `),k(59,`strong`),ye(60,`Angular Progress`),F(),ye(61,` `),k(62,`small`),ye(63,`Labels`),F(),ye(64,`
      `),F(),ye(65,`
      `),k(66,`c-card-body`),ye(67,`
        `),k(68,`p`,3),ye(69,`
          Add labels to your progress bars by placing text as
          `),k(70,`code`),ye(71,`<c-progress>`),F(),ye(72,` content.
        `),F(),ye(73,`
        `),k(74,`app-docs-example`,10),ye(75,`
          `),k(76,`c-progress`,6),ye(77,`25%`),F(),ye(78,`
        `),F(),ye(79,`
      `),F(),ye(80,`
    `),F(),ye(81,`
  `),F(),ye(82,`
  `),k(83,`c-col`,0),ye(84,`
    `),k(85,`c-card`,2),ye(86,`
      `),k(87,`c-card-header`),ye(88,`
        `),k(89,`strong`),ye(90,`Angular Progress`),F(),ye(91,` `),k(92,`small`),ye(93,`Height`),F(),ye(94,`
      `),F(),ye(95,`
      `),k(96,`c-card-body`),ye(97,`
        `),k(98,`p`,3),ye(99,`
          We only set a `),k(100,`code`),ye(101,`height`),F(),ye(102,` value on the `),k(103,`code`),ye(104,`<c-progress>`),F(),ye(105,`, so if
          you change that value, the inner `),k(106,`code`),ye(107,`<c-progress-bar>`),F(),ye(108,` will automatically
          resize accordingly.
        `),F(),ye(109,`
        `),k(110,`app-docs-example`,11),ye(111,`
          `),ke(112,`c-progress`,12),ye(113,`
          `),ke(114,`c-progress`,13),ye(115,`
          `),ke(116,`c-progress`,14),ye(117,`
          `),ke(118,`c-progress`,15),ye(119,`
          `),ke(120,`c-progress`,16),ye(121,`
          `),ke(122,`c-progress`,17),ye(123,`
          `),ke(124,`c-progress`,18),ye(125,`
          `),ke(126,`c-progress`,19),ye(127,`
          `),ke(128,`c-progress`,20),ye(129,`
          `),ke(130,`c-progress`,21),ye(131,`
        `),F(),ye(132,`
      `),F(),ye(133,`
    `),F(),ye(134,`
  `),F(),ye(135,`
  `),k(136,`c-col`,0),ye(137,`
    `),k(138,`c-card`,2),ye(139,`
      `),k(140,`c-card-header`),ye(141,`
        `),k(142,`strong`),ye(143,`Angular Progress`),F(),ye(144,` `),k(145,`small`),ye(146,`Backgrounds`),F(),ye(147,`
      `),F(),ye(148,`
      `),k(149,`c-card-body`),ye(150,`
        `),k(151,`p`,3),ye(152,`
          Use `),k(153,`code`),ye(154,`color`),F(),ye(155,` prop to change the appearance of individual progress bars.
        `),F(),ye(156,`
        `),k(157,`app-docs-example`,22),ye(158,`
          `),ke(159,`c-progress`,23),ye(160,`
          `),ke(161,`c-progress`,24),ye(162,`
          `),ke(163,`c-progress`,25),ye(164,`
          `),ke(165,`c-progress`,26),ye(166,`
        `),F(),ye(167,`
      `),F(),ye(168,`
    `),F(),ye(169,`
  `),F(),ye(170,`
  `),k(171,`c-col`,0),ye(172,`
    `),k(173,`c-card`,2),ye(174,`
      `),k(175,`c-card-header`),ye(176,`
        `),k(177,`strong`),ye(178,`Angular Progress`),F(),ye(179,` `),k(180,`small`),ye(181,`Multiple bars`),F(),ye(182,`
      `),F(),ye(183,`
      `),k(184,`c-card-body`),ye(185,`
        `),k(186,`p`,3),ye(187,`
          Include multiple progress bars in a progress component if you need.
        `),F(),ye(188,`
        `),k(189,`app-docs-example`,27),ye(190,`
          `),k(191,`c-progress-stacked`),ye(192,`
            `),k(193,`c-progress`,28),ye(194,`15%`),F(),ye(195,`
            `),k(196,`c-progress`,24),ye(197,`30%`),F(),ye(198,`
            `),k(199,`c-progress`,6),ye(200,`
              `),k(201,`c-progress-bar`,29),ye(202,`20%`),F(),ye(203,`
            `),F(),ye(204,`
          `),F(),ye(205,`
          `),ke(206,`hr`),ye(207,`
          `),k(208,`c-progress`,8),ye(209,`
            `),k(210,`c-progress-bar`,9),ye(211,`15`),F(),ye(212,`
            `),k(213,`c-progress-bar`,30),ye(214,`30`),F(),ye(215,`
            `),k(216,`c-progress-bar`,31),ye(217,`20`),F(),ye(218,`
          `),F(),ye(219,`
        `),F(),ye(220,`
      `),F(),ye(221,`
    `),F(),ye(222,`
  `),F(),ye(223,`
  `),k(224,`c-col`,0),ye(225,`
    `),k(226,`c-card`,2),ye(227,`
      `),k(228,`c-card-header`),ye(229,`
        `),k(230,`strong`),ye(231,`Angular Progress`),F(),ye(232,` `),k(233,`small`),ye(234,`Striped`),F(),ye(235,`
      `),F(),ye(236,`
      `),k(237,`c-card-body`),ye(238,`
        `),k(239,`p`,3),ye(240,`
          Add `),k(241,`code`),ye(242,`variant="striped"`),F(),ye(243,` to any `),k(244,`code`),ye(245,`<c-progress>`),F(),ye(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),F(),ye(247,`
        `),k(248,`app-docs-example`,32),ye(249,`
          `),ke(250,`c-progress`,33),ye(251,`
          `),ke(252,`c-progress`,34),ye(253,`
          `),ke(254,`c-progress`,35),ye(255,`
          `),ke(256,`c-progress`,36),ye(257,`
        `),F(),ye(258,`
      `),F(),ye(259,`
    `),F(),ye(260,`
  `),F(),ye(261,`
  `),k(262,`c-col`,0),ye(263,`
    `),k(264,`c-card`,2),ye(265,`
      `),k(266,`c-card-header`),ye(267,`
        `),k(268,`strong`),ye(269,`Angular Progress`),F(),ye(270,` `),k(271,`small`),ye(272,`Animated stripes`),F(),ye(273,`
      `),F(),ye(274,`
      `),k(275,`c-card-body`),ye(276,`
        `),k(277,`p`,3),ye(278,`
          The striped gradient can also be animated. Add `),k(279,`code`),ye(280,`[animated]="true"`),F(),ye(281,` property to
          `),k(282,`code`),ye(283,`<c-progress>`),F(),ye(284,` to animate the stripes right to left via CSS3
          animations.
        `),F(),ye(285,`
        `),k(286,`app-docs-example`,37),ye(287,`
          `),ke(288,`c-progress`,38),ye(289,`
          `),ke(290,`c-progress`,39),ye(291,`
          `),ke(292,`c-progress`,40),ye(293,`
          `),ke(294,`c-progress`,41),ye(295,`
        `),F(),ye(296,`
      `),F(),ye(297,`
    `),F(),ye(298,`
  `),F(),ye(299,`
`),F()),l&2&&(_(30),V(`value`,0),_(2),V(`value`,25),_(2),V(`value`,50),_(2),V(`value`,75),_(2),V(`value`,o.value())(`variant`,o.variant()),_(),Zn(``,o.value(),`%`),_(6),V(`value`,33),_(31),V(`value`,25),_(36),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(2),V(`value`,25),_(29),V(`value`,25),_(2),V(`value`,50),_(2),V(`value`,75),_(2),V(`value`,100),_(28),V(`value`,15),_(3),V(`value`,30),_(3),V(`value`,20),_(11),V(`value`,15),_(3),V(`value`,30),_(3),V(`value`,20),_(34),V(`value`,25),_(2),V(`value`,50),_(2),V(`value`,75),_(2),V(`value`,100),_(32),V(`value`,25),_(2),V(`value`,50),_(2),V(`value`,75),_(2),V(`value`,100))},dependencies:[Mse,UH,Ba,IH,ja,E$1,ZH,Yse,yb,c],encapsulation:2})}};export{f as AppProgressComponent};