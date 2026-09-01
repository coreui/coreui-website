import{Dt as P,Si as rP,Vn as bP,Vr as ke,Wn as be,X as I,Yt as Ste,Zt as T,an as V,ar as dP,hr as ene,or as da,un as Vn,ut as L,v as C,vt as Mv,zi as ua}from"./main-JT3YLBAZ.js";import{t as E}from"./chunk-S_NItMQM.js";import{t as c}from"./chunk-BnIj8_pR.js";var f=class s{constructor(){this.value=T(10);this.variant=T(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=I({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Progress`),P(),be(12,` `),L(13,`small`),be(14,`Basic example`),P(),be(15,`
      `),P(),be(16,`
      `),L(17,`c-card-body`),be(18,`
        `),L(19,`p`,3),be(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),L(21,`a`,4),be(22,`
            the HTML5 `),L(23,`code`),be(24,`<progress>`),P(),be(25,` element
          `),P(),be(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),P(),be(27,`
        `),L(28,`app-docs-example`,5),be(29,`
          `),ke(30,`c-progress`,6),be(31,`
          `),ke(32,`c-progress`,6),be(33,`
          `),ke(34,`c-progress`,6),be(35,`
          `),ke(36,`c-progress`,6),be(37,`
          `),L(38,`c-progress`,7),be(39),P(),be(40,`
          `),ke(41,`hr`),be(42,`
          `),L(43,`c-progress`,8),be(44,`
            `),L(45,`c-progress-bar`,9),be(46,`33%`),P(),be(47,`
          `),P(),be(48,`

        `),P(),be(49,`
      `),P(),be(50,`
    `),P(),be(51,`
  `),P(),be(52,`
  `),L(53,`c-col`,0),be(54,`
    `),L(55,`c-card`,2),be(56,`
      `),L(57,`c-card-header`),be(58,`
        `),L(59,`strong`),be(60,`Angular Progress`),P(),be(61,` `),L(62,`small`),be(63,`Labels`),P(),be(64,`
      `),P(),be(65,`
      `),L(66,`c-card-body`),be(67,`
        `),L(68,`p`,3),be(69,`
          Add labels to your progress bars by placing text as
          `),L(70,`code`),be(71,`<c-progress>`),P(),be(72,` content.
        `),P(),be(73,`
        `),L(74,`app-docs-example`,10),be(75,`
          `),L(76,`c-progress`,6),be(77,`25%`),P(),be(78,`
        `),P(),be(79,`
      `),P(),be(80,`
    `),P(),be(81,`
  `),P(),be(82,`
  `),L(83,`c-col`,0),be(84,`
    `),L(85,`c-card`,2),be(86,`
      `),L(87,`c-card-header`),be(88,`
        `),L(89,`strong`),be(90,`Angular Progress`),P(),be(91,` `),L(92,`small`),be(93,`Height`),P(),be(94,`
      `),P(),be(95,`
      `),L(96,`c-card-body`),be(97,`
        `),L(98,`p`,3),be(99,`
          We only set a `),L(100,`code`),be(101,`height`),P(),be(102,` value on the `),L(103,`code`),be(104,`<c-progress>`),P(),be(105,`, so if
          you change that value, the inner `),L(106,`code`),be(107,`<c-progress-bar>`),P(),be(108,` will automatically
          resize accordingly.
        `),P(),be(109,`
        `),L(110,`app-docs-example`,11),be(111,`
          `),ke(112,`c-progress`,12),be(113,`
          `),ke(114,`c-progress`,13),be(115,`
          `),ke(116,`c-progress`,14),be(117,`
          `),ke(118,`c-progress`,15),be(119,`
          `),ke(120,`c-progress`,16),be(121,`
          `),ke(122,`c-progress`,17),be(123,`
          `),ke(124,`c-progress`,18),be(125,`
          `),ke(126,`c-progress`,19),be(127,`
          `),ke(128,`c-progress`,20),be(129,`
          `),ke(130,`c-progress`,21),be(131,`
        `),P(),be(132,`
      `),P(),be(133,`
    `),P(),be(134,`
  `),P(),be(135,`
  `),L(136,`c-col`,0),be(137,`
    `),L(138,`c-card`,2),be(139,`
      `),L(140,`c-card-header`),be(141,`
        `),L(142,`strong`),be(143,`Angular Progress`),P(),be(144,` `),L(145,`small`),be(146,`Backgrounds`),P(),be(147,`
      `),P(),be(148,`
      `),L(149,`c-card-body`),be(150,`
        `),L(151,`p`,3),be(152,`
          Use `),L(153,`code`),be(154,`color`),P(),be(155,` prop to change the appearance of individual progress bars.
        `),P(),be(156,`
        `),L(157,`app-docs-example`,22),be(158,`
          `),ke(159,`c-progress`,23),be(160,`
          `),ke(161,`c-progress`,24),be(162,`
          `),ke(163,`c-progress`,25),be(164,`
          `),ke(165,`c-progress`,26),be(166,`
        `),P(),be(167,`
      `),P(),be(168,`
    `),P(),be(169,`
  `),P(),be(170,`
  `),L(171,`c-col`,0),be(172,`
    `),L(173,`c-card`,2),be(174,`
      `),L(175,`c-card-header`),be(176,`
        `),L(177,`strong`),be(178,`Angular Progress`),P(),be(179,` `),L(180,`small`),be(181,`Multiple bars`),P(),be(182,`
      `),P(),be(183,`
      `),L(184,`c-card-body`),be(185,`
        `),L(186,`p`,3),be(187,`
          Include multiple progress bars in a progress component if you need.
        `),P(),be(188,`
        `),L(189,`app-docs-example`,27),be(190,`
          `),L(191,`c-progress-stacked`),be(192,`
            `),L(193,`c-progress`,28),be(194,`15%`),P(),be(195,`
            `),L(196,`c-progress`,24),be(197,`30%`),P(),be(198,`
            `),L(199,`c-progress`,6),be(200,`
              `),L(201,`c-progress-bar`,29),be(202,`20%`),P(),be(203,`
            `),P(),be(204,`
          `),P(),be(205,`
          `),ke(206,`hr`),be(207,`
          `),L(208,`c-progress`,8),be(209,`
            `),L(210,`c-progress-bar`,9),be(211,`15`),P(),be(212,`
            `),L(213,`c-progress-bar`,30),be(214,`30`),P(),be(215,`
            `),L(216,`c-progress-bar`,31),be(217,`20`),P(),be(218,`
          `),P(),be(219,`
        `),P(),be(220,`
      `),P(),be(221,`
    `),P(),be(222,`
  `),P(),be(223,`
  `),L(224,`c-col`,0),be(225,`
    `),L(226,`c-card`,2),be(227,`
      `),L(228,`c-card-header`),be(229,`
        `),L(230,`strong`),be(231,`Angular Progress`),P(),be(232,` `),L(233,`small`),be(234,`Striped`),P(),be(235,`
      `),P(),be(236,`
      `),L(237,`c-card-body`),be(238,`
        `),L(239,`p`,3),be(240,`
          Add `),L(241,`code`),be(242,`variant="striped"`),P(),be(243,` to any `),L(244,`code`),be(245,`<c-progress>`),P(),be(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),P(),be(247,`
        `),L(248,`app-docs-example`,32),be(249,`
          `),ke(250,`c-progress`,33),be(251,`
          `),ke(252,`c-progress`,34),be(253,`
          `),ke(254,`c-progress`,35),be(255,`
          `),ke(256,`c-progress`,36),be(257,`
        `),P(),be(258,`
      `),P(),be(259,`
    `),P(),be(260,`
  `),P(),be(261,`
  `),L(262,`c-col`,0),be(263,`
    `),L(264,`c-card`,2),be(265,`
      `),L(266,`c-card-header`),be(267,`
        `),L(268,`strong`),be(269,`Angular Progress`),P(),be(270,` `),L(271,`small`),be(272,`Animated stripes`),P(),be(273,`
      `),P(),be(274,`
      `),L(275,`c-card-body`),be(276,`
        `),L(277,`p`,3),be(278,`
          The striped gradient can also be animated. Add `),L(279,`code`),be(280,`[animated]="true"`),P(),be(281,` property to
          `),L(282,`code`),be(283,`<c-progress>`),P(),be(284,` to animate the stripes right to left via CSS3
          animations.
        `),P(),be(285,`
        `),L(286,`app-docs-example`,37),be(287,`
          `),ke(288,`c-progress`,38),be(289,`
          `),ke(290,`c-progress`,39),be(291,`
          `),ke(292,`c-progress`,40),be(293,`
          `),ke(294,`c-progress`,41),be(295,`
        `),P(),be(296,`
      `),P(),be(297,`
    `),P(),be(298,`
  `),P(),be(299,`
`),P()),l&2&&(C(30),V(`value`,0),C(2),V(`value`,25),C(2),V(`value`,50),C(2),V(`value`,75),C(2),V(`value`,o.value())(`variant`,o.variant()),C(),Vn(``,o.value(),`%`),C(6),V(`value`,33),C(31),V(`value`,25),C(36),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(2),V(`value`,25),C(29),V(`value`,25),C(2),V(`value`,50),C(2),V(`value`,75),C(2),V(`value`,100),C(28),V(`value`,15),C(3),V(`value`,30),C(3),V(`value`,20),C(11),V(`value`,15),C(3),V(`value`,30),C(3),V(`value`,20),C(34),V(`value`,25),C(2),V(`value`,50),C(2),V(`value`,75),C(2),V(`value`,100),C(32),V(`value`,25),C(2),V(`value`,50),C(2),V(`value`,75),C(2),V(`value`,100))},dependencies:[Ste,dP,ua,rP,da,E,bP,ene,Mv,c],encapsulation:2})}};export{f as AppProgressComponent};