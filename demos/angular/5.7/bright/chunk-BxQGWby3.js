import{Ii as zw,Pn as au,Rr as nu,Y as Ii,_i as vD,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{B as JS,Xt as bx,_t as Ro,ar as vF,ir as ux,jn as md,ut as Po,zt as YF}from"./main-MVDKXBFI.js";import{t as c}from"./chunk-D-NA798B.js";import{t as I}from"./chunk-DPxRpEgm.js";import"./chunk-yn2whyKM.js";import"./chunk-B0N1zF-G.js";var f=class s{constructor(){this.value=Ii(10);this.variant=Ii(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=zw({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success-gradient`,1,`mb-3`,3,`value`],[`color`,`info-gradient`,1,`mb-3`,3,`value`],[`color`,`warning-gradient`,1,`mb-3`,3,`value`],[`color`,`danger-gradient`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`danger-gradient`],[`color`,`success-gradient`,3,`value`],[`color`,`info-gradient`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Progress`),nu(),Wb(12,` `),rs(13,`small`),Wb(14,`Basic example`),nu(),Wb(15,`
      `),nu(),Wb(16,`
      `),rs(17,`c-card-body`),Wb(18,`
        `),rs(19,`p`,3),Wb(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),rs(21,`a`,4),Wb(22,`
            the HTML5 `),rs(23,`code`),Wb(24,`<progress>`),nu(),Wb(25,` element
          `),nu(),Wb(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),nu(),Wb(27,`
        `),rs(28,`app-docs-example`,5),Wb(29,`
          `),qg(30,`c-progress`,6),Wb(31,`
          `),qg(32,`c-progress`,6),Wb(33,`
          `),qg(34,`c-progress`,6),Wb(35,`
          `),qg(36,`c-progress`,6),Wb(37,`
          `),rs(38,`c-progress`,7),Wb(39),nu(),Wb(40,`
          `),qg(41,`hr`),Wb(42,`
          `),rs(43,`c-progress`,8),Wb(44,`
            `),rs(45,`c-progress-bar`,9),Wb(46,`33%`),nu(),Wb(47,`
          `),nu(),Wb(48,`

        `),nu(),Wb(49,`
      `),nu(),Wb(50,`
    `),nu(),Wb(51,`
  `),nu(),Wb(52,`
  `),rs(53,`c-col`,0),Wb(54,`
    `),rs(55,`c-card`,2),Wb(56,`
      `),rs(57,`c-card-header`),Wb(58,`
        `),rs(59,`strong`),Wb(60,`Angular Progress`),nu(),Wb(61,` `),rs(62,`small`),Wb(63,`Labels`),nu(),Wb(64,`
      `),nu(),Wb(65,`
      `),rs(66,`c-card-body`),Wb(67,`
        `),rs(68,`p`,3),Wb(69,`
          Add labels to your progress bars by placing text as
          `),rs(70,`code`),Wb(71,`<c-progress>`),nu(),Wb(72,` content.
        `),nu(),Wb(73,`
        `),rs(74,`app-docs-example`,10),Wb(75,`
          `),rs(76,`c-progress`,6),Wb(77,`25%`),nu(),Wb(78,`
        `),nu(),Wb(79,`
      `),nu(),Wb(80,`
    `),nu(),Wb(81,`
  `),nu(),Wb(82,`
  `),rs(83,`c-col`,0),Wb(84,`
    `),rs(85,`c-card`,2),Wb(86,`
      `),rs(87,`c-card-header`),Wb(88,`
        `),rs(89,`strong`),Wb(90,`Angular Progress`),nu(),Wb(91,` `),rs(92,`small`),Wb(93,`Height`),nu(),Wb(94,`
      `),nu(),Wb(95,`
      `),rs(96,`c-card-body`),Wb(97,`
        `),rs(98,`p`,3),Wb(99,`
          We only set a `),rs(100,`code`),Wb(101,`height`),nu(),Wb(102,` value on the `),rs(103,`code`),Wb(104,`<c-progress>`),nu(),Wb(105,`, so if
          you change that value, the inner `),rs(106,`code`),Wb(107,`<c-progress-bar>`),nu(),Wb(108,` will automatically
          resize accordingly.
        `),nu(),Wb(109,`
        `),rs(110,`app-docs-example`,11),Wb(111,`
          `),qg(112,`c-progress`,12),Wb(113,`
          `),qg(114,`c-progress`,13),Wb(115,`
          `),qg(116,`c-progress`,14),Wb(117,`
          `),qg(118,`c-progress`,15),Wb(119,`
          `),qg(120,`c-progress`,16),Wb(121,`
          `),qg(122,`c-progress`,17),Wb(123,`
          `),qg(124,`c-progress`,18),Wb(125,`
          `),qg(126,`c-progress`,19),Wb(127,`
          `),qg(128,`c-progress`,20),Wb(129,`
          `),qg(130,`c-progress`,21),Wb(131,`
        `),nu(),Wb(132,`
      `),nu(),Wb(133,`
    `),nu(),Wb(134,`
  `),nu(),Wb(135,`
  `),rs(136,`c-col`,0),Wb(137,`
    `),rs(138,`c-card`,2),Wb(139,`
      `),rs(140,`c-card-header`),Wb(141,`
        `),rs(142,`strong`),Wb(143,`Angular Progress`),nu(),Wb(144,` `),rs(145,`small`),Wb(146,`Backgrounds`),nu(),Wb(147,`
      `),nu(),Wb(148,`
      `),rs(149,`c-card-body`),Wb(150,`
        `),rs(151,`p`,3),Wb(152,`
          Use `),rs(153,`code`),Wb(154,`color`),nu(),Wb(155,` prop to change the appearance of individual progress bars.
        `),nu(),Wb(156,`
        `),rs(157,`app-docs-example`,22),Wb(158,`
          `),qg(159,`c-progress`,23),Wb(160,`
          `),qg(161,`c-progress`,24),Wb(162,`
          `),qg(163,`c-progress`,25),Wb(164,`
          `),qg(165,`c-progress`,26),Wb(166,`
        `),nu(),Wb(167,`
      `),nu(),Wb(168,`
    `),nu(),Wb(169,`
  `),nu(),Wb(170,`
  `),rs(171,`c-col`,0),Wb(172,`
    `),rs(173,`c-card`,2),Wb(174,`
      `),rs(175,`c-card-header`),Wb(176,`
        `),rs(177,`strong`),Wb(178,`Angular Progress`),nu(),Wb(179,` `),rs(180,`small`),Wb(181,`Multiple bars`),nu(),Wb(182,`
      `),nu(),Wb(183,`
      `),rs(184,`c-card-body`),Wb(185,`
        `),rs(186,`p`,3),Wb(187,`
          Include multiple progress bars in a progress component if you need.
        `),nu(),Wb(188,`
        `),rs(189,`app-docs-example`,27),Wb(190,`
          `),rs(191,`c-progress-stacked`),Wb(192,`
            `),rs(193,`c-progress`,28),Wb(194,`15%`),nu(),Wb(195,`
            `),rs(196,`c-progress`,29),Wb(197,`30%`),nu(),Wb(198,`
            `),rs(199,`c-progress`,6),Wb(200,`
              `),rs(201,`c-progress-bar`,30),Wb(202,`20%`),nu(),Wb(203,`
            `),nu(),Wb(204,`
          `),nu(),Wb(205,`
          `),qg(206,`hr`),Wb(207,`
          `),rs(208,`c-progress`,8),Wb(209,`
            `),rs(210,`c-progress-bar`,9),Wb(211,`15`),nu(),Wb(212,`
            `),rs(213,`c-progress-bar`,31),Wb(214,`30`),nu(),Wb(215,`
            `),rs(216,`c-progress-bar`,32),Wb(217,`20`),nu(),Wb(218,`
          `),nu(),Wb(219,`
        `),nu(),Wb(220,`
      `),nu(),Wb(221,`
    `),nu(),Wb(222,`
  `),nu(),Wb(223,`
  `),rs(224,`c-col`,0),Wb(225,`
    `),rs(226,`c-card`,2),Wb(227,`
      `),rs(228,`c-card-header`),Wb(229,`
        `),rs(230,`strong`),Wb(231,`Angular Progress`),nu(),Wb(232,` `),rs(233,`small`),Wb(234,`Striped`),nu(),Wb(235,`
      `),nu(),Wb(236,`
      `),rs(237,`c-card-body`),Wb(238,`
        `),rs(239,`p`,3),Wb(240,`
          Add `),rs(241,`code`),Wb(242,`variant="striped"`),nu(),Wb(243,` to any `),rs(244,`code`),Wb(245,`<c-progress>`),nu(),Wb(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),nu(),Wb(247,`
        `),rs(248,`app-docs-example`,33),Wb(249,`
          `),qg(250,`c-progress`,34),Wb(251,`
          `),qg(252,`c-progress`,35),Wb(253,`
          `),qg(254,`c-progress`,36),Wb(255,`
          `),qg(256,`c-progress`,37),Wb(257,`
        `),nu(),Wb(258,`
      `),nu(),Wb(259,`
    `),nu(),Wb(260,`
  `),nu(),Wb(261,`
  `),rs(262,`c-col`,0),Wb(263,`
    `),rs(264,`c-card`,2),Wb(265,`
      `),rs(266,`c-card-header`),Wb(267,`
        `),rs(268,`strong`),Wb(269,`Angular Progress`),nu(),Wb(270,` `),rs(271,`small`),Wb(272,`Animated stripes`),nu(),Wb(273,`
      `),nu(),Wb(274,`
      `),rs(275,`c-card-body`),Wb(276,`
        `),rs(277,`p`,3),Wb(278,`
          The striped gradient can also be animated. Add `),rs(279,`code`),Wb(280,`[animated]="true"`),nu(),Wb(281,` property to
          `),rs(282,`code`),Wb(283,`<c-progress>`),nu(),Wb(284,` to animate the stripes right to left via CSS3
          animations.
        `),nu(),Wb(285,`
        `),rs(286,`app-docs-example`,38),Wb(287,`
          `),qg(288,`c-progress`,39),Wb(289,`
          `),qg(290,`c-progress`,40),Wb(291,`
          `),qg(292,`c-progress`,41),Wb(293,`
          `),qg(294,`c-progress`,42),Wb(295,`
        `),nu(),Wb(296,`
      `),nu(),Wb(297,`
    `),nu(),Wb(298,`
  `),nu(),Wb(299,`
`),nu()),l&2&&(vD(30),Wg(`value`,0),vD(2),Wg(`value`,25),vD(2),Wg(`value`,50),vD(2),Wg(`value`,75),vD(2),Wg(`value`,o.value())(`variant`,o.variant()),vD(),au(``,o.value(),`%`),vD(6),Wg(`value`,33),vD(31),Wg(`value`,25),vD(36),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(2),Wg(`value`,25),vD(29),Wg(`value`,25),vD(2),Wg(`value`,50),vD(2),Wg(`value`,75),vD(2),Wg(`value`,100),vD(28),Wg(`value`,15),vD(3),Wg(`value`,30),vD(3),Wg(`value`,20),vD(11),Wg(`value`,15),vD(3),Wg(`value`,30),vD(3),Wg(`value`,20),vD(34),Wg(`value`,25),vD(2),Wg(`value`,50),vD(2),Wg(`value`,75),vD(2),Wg(`value`,100),vD(32),Wg(`value`,25),vD(2),Wg(`value`,50),vD(2),Wg(`value`,75),vD(2),Wg(`value`,100))},dependencies:[vF,ux,Ro,JS,Po,I,bx,YF,md,c],encapsulation:2})}};export{f as AppProgressComponent};