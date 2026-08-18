import{Ft as fT,H as Nv,Hn as Ch,Li as pl,P as LT,Q as Ri,Xr as aw,fa as yD,fi as ei,kn as xi,la as wh,ni as cl,q as Pv,vr as Oi,w as Hv,xt as Za,zn as BI}from"./main-WBU6EW3E.js";import{t as E}from"./chunk-D1ovLIZZ.js";import{t as c}from"./chunk-BNlMJs6j.js";var f=class s{constructor(){this.value=ei(10);this.variant=ei(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=yD({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Progress`),cl(),aw(12,` `),Oi(13,`small`),aw(14,`Basic example`),cl(),aw(15,`
      `),cl(),aw(16,`
      `),Oi(17,`c-card-body`),aw(18,`
        `),Oi(19,`p`,3),aw(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),Oi(21,`a`,4),aw(22,`
            the HTML5 `),Oi(23,`code`),aw(24,`<progress>`),cl(),aw(25,` element
          `),cl(),aw(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),cl(),aw(27,`
        `),Oi(28,`app-docs-example`,5),aw(29,`
          `),Ch(30,`c-progress`,6),aw(31,`
          `),Ch(32,`c-progress`,6),aw(33,`
          `),Ch(34,`c-progress`,6),aw(35,`
          `),Ch(36,`c-progress`,6),aw(37,`
          `),Oi(38,`c-progress`,7),aw(39),cl(),aw(40,`
          `),Ch(41,`hr`),aw(42,`
          `),Oi(43,`c-progress`,8),aw(44,`
            `),Oi(45,`c-progress-bar`,9),aw(46,`33%`),cl(),aw(47,`
          `),cl(),aw(48,`

        `),cl(),aw(49,`
      `),cl(),aw(50,`
    `),cl(),aw(51,`
  `),cl(),aw(52,`
  `),Oi(53,`c-col`,0),aw(54,`
    `),Oi(55,`c-card`,2),aw(56,`
      `),Oi(57,`c-card-header`),aw(58,`
        `),Oi(59,`strong`),aw(60,`Angular Progress`),cl(),aw(61,` `),Oi(62,`small`),aw(63,`Labels`),cl(),aw(64,`
      `),cl(),aw(65,`
      `),Oi(66,`c-card-body`),aw(67,`
        `),Oi(68,`p`,3),aw(69,`
          Add labels to your progress bars by placing text as
          `),Oi(70,`code`),aw(71,`<c-progress>`),cl(),aw(72,` content.
        `),cl(),aw(73,`
        `),Oi(74,`app-docs-example`,10),aw(75,`
          `),Oi(76,`c-progress`,6),aw(77,`25%`),cl(),aw(78,`
        `),cl(),aw(79,`
      `),cl(),aw(80,`
    `),cl(),aw(81,`
  `),cl(),aw(82,`
  `),Oi(83,`c-col`,0),aw(84,`
    `),Oi(85,`c-card`,2),aw(86,`
      `),Oi(87,`c-card-header`),aw(88,`
        `),Oi(89,`strong`),aw(90,`Angular Progress`),cl(),aw(91,` `),Oi(92,`small`),aw(93,`Height`),cl(),aw(94,`
      `),cl(),aw(95,`
      `),Oi(96,`c-card-body`),aw(97,`
        `),Oi(98,`p`,3),aw(99,`
          We only set a `),Oi(100,`code`),aw(101,`height`),cl(),aw(102,` value on the `),Oi(103,`code`),aw(104,`<c-progress>`),cl(),aw(105,`, so if
          you change that value, the inner `),Oi(106,`code`),aw(107,`<c-progress-bar>`),cl(),aw(108,` will automatically
          resize accordingly.
        `),cl(),aw(109,`
        `),Oi(110,`app-docs-example`,11),aw(111,`
          `),Ch(112,`c-progress`,12),aw(113,`
          `),Ch(114,`c-progress`,13),aw(115,`
          `),Ch(116,`c-progress`,14),aw(117,`
          `),Ch(118,`c-progress`,15),aw(119,`
          `),Ch(120,`c-progress`,16),aw(121,`
          `),Ch(122,`c-progress`,17),aw(123,`
          `),Ch(124,`c-progress`,18),aw(125,`
          `),Ch(126,`c-progress`,19),aw(127,`
          `),Ch(128,`c-progress`,20),aw(129,`
          `),Ch(130,`c-progress`,21),aw(131,`
        `),cl(),aw(132,`
      `),cl(),aw(133,`
    `),cl(),aw(134,`
  `),cl(),aw(135,`
  `),Oi(136,`c-col`,0),aw(137,`
    `),Oi(138,`c-card`,2),aw(139,`
      `),Oi(140,`c-card-header`),aw(141,`
        `),Oi(142,`strong`),aw(143,`Angular Progress`),cl(),aw(144,` `),Oi(145,`small`),aw(146,`Backgrounds`),cl(),aw(147,`
      `),cl(),aw(148,`
      `),Oi(149,`c-card-body`),aw(150,`
        `),Oi(151,`p`,3),aw(152,`
          Use `),Oi(153,`code`),aw(154,`color`),cl(),aw(155,` prop to change the appearance of individual progress bars.
        `),cl(),aw(156,`
        `),Oi(157,`app-docs-example`,22),aw(158,`
          `),Ch(159,`c-progress`,23),aw(160,`
          `),Ch(161,`c-progress`,24),aw(162,`
          `),Ch(163,`c-progress`,25),aw(164,`
          `),Ch(165,`c-progress`,26),aw(166,`
        `),cl(),aw(167,`
      `),cl(),aw(168,`
    `),cl(),aw(169,`
  `),cl(),aw(170,`
  `),Oi(171,`c-col`,0),aw(172,`
    `),Oi(173,`c-card`,2),aw(174,`
      `),Oi(175,`c-card-header`),aw(176,`
        `),Oi(177,`strong`),aw(178,`Angular Progress`),cl(),aw(179,` `),Oi(180,`small`),aw(181,`Multiple bars`),cl(),aw(182,`
      `),cl(),aw(183,`
      `),Oi(184,`c-card-body`),aw(185,`
        `),Oi(186,`p`,3),aw(187,`
          Include multiple progress bars in a progress component if you need.
        `),cl(),aw(188,`
        `),Oi(189,`app-docs-example`,27),aw(190,`
          `),Oi(191,`c-progress-stacked`),aw(192,`
            `),Oi(193,`c-progress`,28),aw(194,`15%`),cl(),aw(195,`
            `),Oi(196,`c-progress`,24),aw(197,`30%`),cl(),aw(198,`
            `),Oi(199,`c-progress`,6),aw(200,`
              `),Oi(201,`c-progress-bar`,29),aw(202,`20%`),cl(),aw(203,`
            `),cl(),aw(204,`
          `),cl(),aw(205,`
          `),Ch(206,`hr`),aw(207,`
          `),Oi(208,`c-progress`,8),aw(209,`
            `),Oi(210,`c-progress-bar`,9),aw(211,`15`),cl(),aw(212,`
            `),Oi(213,`c-progress-bar`,30),aw(214,`30`),cl(),aw(215,`
            `),Oi(216,`c-progress-bar`,31),aw(217,`20`),cl(),aw(218,`
          `),cl(),aw(219,`
        `),cl(),aw(220,`
      `),cl(),aw(221,`
    `),cl(),aw(222,`
  `),cl(),aw(223,`
  `),Oi(224,`c-col`,0),aw(225,`
    `),Oi(226,`c-card`,2),aw(227,`
      `),Oi(228,`c-card-header`),aw(229,`
        `),Oi(230,`strong`),aw(231,`Angular Progress`),cl(),aw(232,` `),Oi(233,`small`),aw(234,`Striped`),cl(),aw(235,`
      `),cl(),aw(236,`
      `),Oi(237,`c-card-body`),aw(238,`
        `),Oi(239,`p`,3),aw(240,`
          Add `),Oi(241,`code`),aw(242,`variant="striped"`),cl(),aw(243,` to any `),Oi(244,`code`),aw(245,`<c-progress>`),cl(),aw(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),cl(),aw(247,`
        `),Oi(248,`app-docs-example`,32),aw(249,`
          `),Ch(250,`c-progress`,33),aw(251,`
          `),Ch(252,`c-progress`,34),aw(253,`
          `),Ch(254,`c-progress`,35),aw(255,`
          `),Ch(256,`c-progress`,36),aw(257,`
        `),cl(),aw(258,`
      `),cl(),aw(259,`
    `),cl(),aw(260,`
  `),cl(),aw(261,`
  `),Oi(262,`c-col`,0),aw(263,`
    `),Oi(264,`c-card`,2),aw(265,`
      `),Oi(266,`c-card-header`),aw(267,`
        `),Oi(268,`strong`),aw(269,`Angular Progress`),cl(),aw(270,` `),Oi(271,`small`),aw(272,`Animated stripes`),cl(),aw(273,`
      `),cl(),aw(274,`
      `),Oi(275,`c-card-body`),aw(276,`
        `),Oi(277,`p`,3),aw(278,`
          The striped gradient can also be animated. Add `),Oi(279,`code`),aw(280,`[animated]="true"`),cl(),aw(281,` property to
          `),Oi(282,`code`),aw(283,`<c-progress>`),cl(),aw(284,` to animate the stripes right to left via CSS3
          animations.
        `),cl(),aw(285,`
        `),Oi(286,`app-docs-example`,37),aw(287,`
          `),Ch(288,`c-progress`,38),aw(289,`
          `),Ch(290,`c-progress`,39),aw(291,`
          `),Ch(292,`c-progress`,40),aw(293,`
          `),Ch(294,`c-progress`,41),aw(295,`
        `),cl(),aw(296,`
      `),cl(),aw(297,`
    `),cl(),aw(298,`
  `),cl(),aw(299,`
`),cl()),l&2&&(BI(30),wh(`value`,0),BI(2),wh(`value`,25),BI(2),wh(`value`,50),BI(2),wh(`value`,75),BI(2),wh(`value`,o.value())(`variant`,o.variant()),BI(),pl(``,o.value(),`%`),BI(6),wh(`value`,33),BI(31),wh(`value`,25),BI(36),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(2),wh(`value`,25),BI(29),wh(`value`,25),BI(2),wh(`value`,50),BI(2),wh(`value`,75),BI(2),wh(`value`,100),BI(28),wh(`value`,15),BI(3),wh(`value`,30),BI(3),wh(`value`,20),BI(11),wh(`value`,15),BI(3),wh(`value`,30),BI(3),wh(`value`,20),BI(34),wh(`value`,25),BI(2),wh(`value`,50),BI(2),wh(`value`,75),BI(2),wh(`value`,100),BI(32),wh(`value`,25),BI(2),wh(`value`,50),BI(2),wh(`value`,75),BI(2),wh(`value`,100))},dependencies:[fT,Pv,xi,Nv,Ri,E,Hv,LT,Za,c],encapsulation:2})}};export{f as AppProgressComponent};