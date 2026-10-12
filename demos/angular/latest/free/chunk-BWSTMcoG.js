import{Dt as O,Ft as Pa,Rt as Qn,T as E,Wi as uH,Wt as Re,Yt as S,_n as VV,ai as nH,en as T,gn as V,gt as La,ii as nC,j as F,pi as ose,qt as Roe,ua as ye}from"./main-V43LM6ZM.js";import{t as E$1}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var f=class s{constructor(){this.value=E(10);this.variant=E(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=T({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Progress`),F(),ye(12,` `),O(13,`small`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`,3),ye(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),O(21,`a`,4),ye(22,`
            the HTML5 `),O(23,`code`),ye(24,`<progress>`),F(),ye(25,` element
          `),F(),ye(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),F(),ye(27,`
        `),O(28,`app-docs-example`,5),ye(29,`
          `),Re(30,`c-progress`,6),ye(31,`
          `),Re(32,`c-progress`,6),ye(33,`
          `),Re(34,`c-progress`,6),ye(35,`
          `),Re(36,`c-progress`,6),ye(37,`
          `),O(38,`c-progress`,7),ye(39),F(),ye(40,`
          `),Re(41,`hr`),ye(42,`
          `),O(43,`c-progress`,8),ye(44,`
            `),O(45,`c-progress-bar`,9),ye(46,`33%`),F(),ye(47,`
          `),F(),ye(48,`

        `),F(),ye(49,`
      `),F(),ye(50,`
    `),F(),ye(51,`
  `),F(),ye(52,`
  `),O(53,`c-col`,0),ye(54,`
    `),O(55,`c-card`,2),ye(56,`
      `),O(57,`c-card-header`),ye(58,`
        `),O(59,`strong`),ye(60,`Angular Progress`),F(),ye(61,` `),O(62,`small`),ye(63,`Labels`),F(),ye(64,`
      `),F(),ye(65,`
      `),O(66,`c-card-body`),ye(67,`
        `),O(68,`p`,3),ye(69,`
          Add labels to your progress bars by placing text as
          `),O(70,`code`),ye(71,`<c-progress>`),F(),ye(72,` content.
        `),F(),ye(73,`
        `),O(74,`app-docs-example`,10),ye(75,`
          `),O(76,`c-progress`,6),ye(77,`25%`),F(),ye(78,`
        `),F(),ye(79,`
      `),F(),ye(80,`
    `),F(),ye(81,`
  `),F(),ye(82,`
  `),O(83,`c-col`,0),ye(84,`
    `),O(85,`c-card`,2),ye(86,`
      `),O(87,`c-card-header`),ye(88,`
        `),O(89,`strong`),ye(90,`Angular Progress`),F(),ye(91,` `),O(92,`small`),ye(93,`Height`),F(),ye(94,`
      `),F(),ye(95,`
      `),O(96,`c-card-body`),ye(97,`
        `),O(98,`p`,3),ye(99,`
          We only set a `),O(100,`code`),ye(101,`height`),F(),ye(102,` value on the `),O(103,`code`),ye(104,`<c-progress>`),F(),ye(105,`, so if
          you change that value, the inner `),O(106,`code`),ye(107,`<c-progress-bar>`),F(),ye(108,` will automatically
          resize accordingly.
        `),F(),ye(109,`
        `),O(110,`app-docs-example`,11),ye(111,`
          `),Re(112,`c-progress`,12),ye(113,`
          `),Re(114,`c-progress`,13),ye(115,`
          `),Re(116,`c-progress`,14),ye(117,`
          `),Re(118,`c-progress`,15),ye(119,`
          `),Re(120,`c-progress`,16),ye(121,`
          `),Re(122,`c-progress`,17),ye(123,`
          `),Re(124,`c-progress`,18),ye(125,`
          `),Re(126,`c-progress`,19),ye(127,`
          `),Re(128,`c-progress`,20),ye(129,`
          `),Re(130,`c-progress`,21),ye(131,`
        `),F(),ye(132,`
      `),F(),ye(133,`
    `),F(),ye(134,`
  `),F(),ye(135,`
  `),O(136,`c-col`,0),ye(137,`
    `),O(138,`c-card`,2),ye(139,`
      `),O(140,`c-card-header`),ye(141,`
        `),O(142,`strong`),ye(143,`Angular Progress`),F(),ye(144,` `),O(145,`small`),ye(146,`Backgrounds`),F(),ye(147,`
      `),F(),ye(148,`
      `),O(149,`c-card-body`),ye(150,`
        `),O(151,`p`,3),ye(152,`
          Use `),O(153,`code`),ye(154,`color`),F(),ye(155,` prop to change the appearance of individual progress bars.
        `),F(),ye(156,`
        `),O(157,`app-docs-example`,22),ye(158,`
          `),Re(159,`c-progress`,23),ye(160,`
          `),Re(161,`c-progress`,24),ye(162,`
          `),Re(163,`c-progress`,25),ye(164,`
          `),Re(165,`c-progress`,26),ye(166,`
        `),F(),ye(167,`
      `),F(),ye(168,`
    `),F(),ye(169,`
  `),F(),ye(170,`
  `),O(171,`c-col`,0),ye(172,`
    `),O(173,`c-card`,2),ye(174,`
      `),O(175,`c-card-header`),ye(176,`
        `),O(177,`strong`),ye(178,`Angular Progress`),F(),ye(179,` `),O(180,`small`),ye(181,`Multiple bars`),F(),ye(182,`
      `),F(),ye(183,`
      `),O(184,`c-card-body`),ye(185,`
        `),O(186,`p`,3),ye(187,`
          Include multiple progress bars in a progress component if you need.
        `),F(),ye(188,`
        `),O(189,`app-docs-example`,27),ye(190,`
          `),O(191,`c-progress-stacked`),ye(192,`
            `),O(193,`c-progress`,28),ye(194,`15%`),F(),ye(195,`
            `),O(196,`c-progress`,24),ye(197,`30%`),F(),ye(198,`
            `),O(199,`c-progress`,6),ye(200,`
              `),O(201,`c-progress-bar`,29),ye(202,`20%`),F(),ye(203,`
            `),F(),ye(204,`
          `),F(),ye(205,`
          `),Re(206,`hr`),ye(207,`
          `),O(208,`c-progress`,8),ye(209,`
            `),O(210,`c-progress-bar`,9),ye(211,`15`),F(),ye(212,`
            `),O(213,`c-progress-bar`,30),ye(214,`30`),F(),ye(215,`
            `),O(216,`c-progress-bar`,31),ye(217,`20`),F(),ye(218,`
          `),F(),ye(219,`
        `),F(),ye(220,`
      `),F(),ye(221,`
    `),F(),ye(222,`
  `),F(),ye(223,`
  `),O(224,`c-col`,0),ye(225,`
    `),O(226,`c-card`,2),ye(227,`
      `),O(228,`c-card-header`),ye(229,`
        `),O(230,`strong`),ye(231,`Angular Progress`),F(),ye(232,` `),O(233,`small`),ye(234,`Striped`),F(),ye(235,`
      `),F(),ye(236,`
      `),O(237,`c-card-body`),ye(238,`
        `),O(239,`p`,3),ye(240,`
          Add `),O(241,`code`),ye(242,`variant="striped"`),F(),ye(243,` to any `),O(244,`code`),ye(245,`<c-progress>`),F(),ye(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),F(),ye(247,`
        `),O(248,`app-docs-example`,32),ye(249,`
          `),Re(250,`c-progress`,33),ye(251,`
          `),Re(252,`c-progress`,34),ye(253,`
          `),Re(254,`c-progress`,35),ye(255,`
          `),Re(256,`c-progress`,36),ye(257,`
        `),F(),ye(258,`
      `),F(),ye(259,`
    `),F(),ye(260,`
  `),F(),ye(261,`
  `),O(262,`c-col`,0),ye(263,`
    `),O(264,`c-card`,2),ye(265,`
      `),O(266,`c-card-header`),ye(267,`
        `),O(268,`strong`),ye(269,`Angular Progress`),F(),ye(270,` `),O(271,`small`),ye(272,`Animated stripes`),F(),ye(273,`
      `),F(),ye(274,`
      `),O(275,`c-card-body`),ye(276,`
        `),O(277,`p`,3),ye(278,`
          The striped gradient can also be animated. Add `),O(279,`code`),ye(280,`[animated]="true"`),F(),ye(281,` property to
          `),O(282,`code`),ye(283,`<c-progress>`),F(),ye(284,` to animate the stripes right to left via CSS3
          animations.
        `),F(),ye(285,`
        `),O(286,`app-docs-example`,37),ye(287,`
          `),Re(288,`c-progress`,38),ye(289,`
          `),Re(290,`c-progress`,39),ye(291,`
          `),Re(292,`c-progress`,40),ye(293,`
          `),Re(294,`c-progress`,41),ye(295,`
        `),F(),ye(296,`
      `),F(),ye(297,`
    `),F(),ye(298,`
  `),F(),ye(299,`
`),F()),l&2&&(S(30),V(`value`,0),S(2),V(`value`,25),S(2),V(`value`,50),S(2),V(`value`,75),S(2),V(`value`,o.value())(`variant`,o.variant()),S(),Qn(``,o.value(),`%`),S(6),V(`value`,33),S(31),V(`value`,25),S(36),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(2),V(`value`,25),S(29),V(`value`,25),S(2),V(`value`,50),S(2),V(`value`,75),S(2),V(`value`,100),S(28),V(`value`,15),S(3),V(`value`,30),S(3),V(`value`,20),S(11),V(`value`,15),S(3),V(`value`,30),S(3),V(`value`,20),S(34),V(`value`,25),S(2),V(`value`,50),S(2),V(`value`,75),S(2),V(`value`,100),S(32),V(`value`,25),S(2),V(`value`,50),S(2),V(`value`,75),S(2),V(`value`,100))},dependencies:[Roe,nH,Pa,VV,La,E$1,uH,ose,nC,c],encapsulation:2})}};export{f as AppProgressComponent};