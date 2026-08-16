import{$r as dl,Fi as sl,Ft as fT,H as Nv,Hn as Dh,On as xi,P as LT,Q as Ri,ai as ei,di as hD,fr as Oi,ki as ow,pi as jI,q as Pv,w as Hv,xr as Th,xt as Za}from"./main-76IFZWOG.js";import{i as w}from"./chunk-CAOhpI5R.js";import{t as c}from"./chunk-P9e4DqVK.js";var f=class s{constructor(){this.value=ei(10);this.variant=ei(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=hD({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Progress`),sl(),ow(12,` `),Oi(13,`small`),ow(14,`Basic example`),sl(),ow(15,`
      `),sl(),ow(16,`
      `),Oi(17,`c-card-body`),ow(18,`
        `),Oi(19,`p`,3),ow(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),Oi(21,`a`,4),ow(22,`
            the HTML5 `),Oi(23,`code`),ow(24,`<progress>`),sl(),ow(25,` element
          `),sl(),ow(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),sl(),ow(27,`
        `),Oi(28,`app-docs-example`,5),ow(29,`
          `),Th(30,`c-progress`,6),ow(31,`
          `),Th(32,`c-progress`,6),ow(33,`
          `),Th(34,`c-progress`,6),ow(35,`
          `),Th(36,`c-progress`,6),ow(37,`
          `),Oi(38,`c-progress`,7),ow(39),sl(),ow(40,`
          `),Th(41,`hr`),ow(42,`
          `),Oi(43,`c-progress`,8),ow(44,`
            `),Oi(45,`c-progress-bar`,9),ow(46,`33%`),sl(),ow(47,`
          `),sl(),ow(48,`

        `),sl(),ow(49,`
      `),sl(),ow(50,`
    `),sl(),ow(51,`
  `),sl(),ow(52,`
  `),Oi(53,`c-col`,0),ow(54,`
    `),Oi(55,`c-card`,2),ow(56,`
      `),Oi(57,`c-card-header`),ow(58,`
        `),Oi(59,`strong`),ow(60,`Angular Progress`),sl(),ow(61,` `),Oi(62,`small`),ow(63,`Labels`),sl(),ow(64,`
      `),sl(),ow(65,`
      `),Oi(66,`c-card-body`),ow(67,`
        `),Oi(68,`p`,3),ow(69,`
          Add labels to your progress bars by placing text as
          `),Oi(70,`code`),ow(71,`<c-progress>`),sl(),ow(72,` content.
        `),sl(),ow(73,`
        `),Oi(74,`app-docs-example`,10),ow(75,`
          `),Oi(76,`c-progress`,6),ow(77,`25%`),sl(),ow(78,`
        `),sl(),ow(79,`
      `),sl(),ow(80,`
    `),sl(),ow(81,`
  `),sl(),ow(82,`
  `),Oi(83,`c-col`,0),ow(84,`
    `),Oi(85,`c-card`,2),ow(86,`
      `),Oi(87,`c-card-header`),ow(88,`
        `),Oi(89,`strong`),ow(90,`Angular Progress`),sl(),ow(91,` `),Oi(92,`small`),ow(93,`Height`),sl(),ow(94,`
      `),sl(),ow(95,`
      `),Oi(96,`c-card-body`),ow(97,`
        `),Oi(98,`p`,3),ow(99,`
          We only set a `),Oi(100,`code`),ow(101,`height`),sl(),ow(102,` value on the `),Oi(103,`code`),ow(104,`<c-progress>`),sl(),ow(105,`, so if
          you change that value, the inner `),Oi(106,`code`),ow(107,`<c-progress-bar>`),sl(),ow(108,` will automatically
          resize accordingly.
        `),sl(),ow(109,`
        `),Oi(110,`app-docs-example`,11),ow(111,`
          `),Th(112,`c-progress`,12),ow(113,`
          `),Th(114,`c-progress`,13),ow(115,`
          `),Th(116,`c-progress`,14),ow(117,`
          `),Th(118,`c-progress`,15),ow(119,`
          `),Th(120,`c-progress`,16),ow(121,`
          `),Th(122,`c-progress`,17),ow(123,`
          `),Th(124,`c-progress`,18),ow(125,`
          `),Th(126,`c-progress`,19),ow(127,`
          `),Th(128,`c-progress`,20),ow(129,`
          `),Th(130,`c-progress`,21),ow(131,`
        `),sl(),ow(132,`
      `),sl(),ow(133,`
    `),sl(),ow(134,`
  `),sl(),ow(135,`
  `),Oi(136,`c-col`,0),ow(137,`
    `),Oi(138,`c-card`,2),ow(139,`
      `),Oi(140,`c-card-header`),ow(141,`
        `),Oi(142,`strong`),ow(143,`Angular Progress`),sl(),ow(144,` `),Oi(145,`small`),ow(146,`Backgrounds`),sl(),ow(147,`
      `),sl(),ow(148,`
      `),Oi(149,`c-card-body`),ow(150,`
        `),Oi(151,`p`,3),ow(152,`
          Use `),Oi(153,`code`),ow(154,`color`),sl(),ow(155,` prop to change the appearance of individual progress bars.
        `),sl(),ow(156,`
        `),Oi(157,`app-docs-example`,22),ow(158,`
          `),Th(159,`c-progress`,23),ow(160,`
          `),Th(161,`c-progress`,24),ow(162,`
          `),Th(163,`c-progress`,25),ow(164,`
          `),Th(165,`c-progress`,26),ow(166,`
        `),sl(),ow(167,`
      `),sl(),ow(168,`
    `),sl(),ow(169,`
  `),sl(),ow(170,`
  `),Oi(171,`c-col`,0),ow(172,`
    `),Oi(173,`c-card`,2),ow(174,`
      `),Oi(175,`c-card-header`),ow(176,`
        `),Oi(177,`strong`),ow(178,`Angular Progress`),sl(),ow(179,` `),Oi(180,`small`),ow(181,`Multiple bars`),sl(),ow(182,`
      `),sl(),ow(183,`
      `),Oi(184,`c-card-body`),ow(185,`
        `),Oi(186,`p`,3),ow(187,`
          Include multiple progress bars in a progress component if you need.
        `),sl(),ow(188,`
        `),Oi(189,`app-docs-example`,27),ow(190,`
          `),Oi(191,`c-progress-stacked`),ow(192,`
            `),Oi(193,`c-progress`,28),ow(194,`15%`),sl(),ow(195,`
            `),Oi(196,`c-progress`,24),ow(197,`30%`),sl(),ow(198,`
            `),Oi(199,`c-progress`,6),ow(200,`
              `),Oi(201,`c-progress-bar`,29),ow(202,`20%`),sl(),ow(203,`
            `),sl(),ow(204,`
          `),sl(),ow(205,`
          `),Th(206,`hr`),ow(207,`
          `),Oi(208,`c-progress`,8),ow(209,`
            `),Oi(210,`c-progress-bar`,9),ow(211,`15`),sl(),ow(212,`
            `),Oi(213,`c-progress-bar`,30),ow(214,`30`),sl(),ow(215,`
            `),Oi(216,`c-progress-bar`,31),ow(217,`20`),sl(),ow(218,`
          `),sl(),ow(219,`
        `),sl(),ow(220,`
      `),sl(),ow(221,`
    `),sl(),ow(222,`
  `),sl(),ow(223,`
  `),Oi(224,`c-col`,0),ow(225,`
    `),Oi(226,`c-card`,2),ow(227,`
      `),Oi(228,`c-card-header`),ow(229,`
        `),Oi(230,`strong`),ow(231,`Angular Progress`),sl(),ow(232,` `),Oi(233,`small`),ow(234,`Striped`),sl(),ow(235,`
      `),sl(),ow(236,`
      `),Oi(237,`c-card-body`),ow(238,`
        `),Oi(239,`p`,3),ow(240,`
          Add `),Oi(241,`code`),ow(242,`variant="striped"`),sl(),ow(243,` to any `),Oi(244,`code`),ow(245,`<c-progress>`),sl(),ow(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),sl(),ow(247,`
        `),Oi(248,`app-docs-example`,32),ow(249,`
          `),Th(250,`c-progress`,33),ow(251,`
          `),Th(252,`c-progress`,34),ow(253,`
          `),Th(254,`c-progress`,35),ow(255,`
          `),Th(256,`c-progress`,36),ow(257,`
        `),sl(),ow(258,`
      `),sl(),ow(259,`
    `),sl(),ow(260,`
  `),sl(),ow(261,`
  `),Oi(262,`c-col`,0),ow(263,`
    `),Oi(264,`c-card`,2),ow(265,`
      `),Oi(266,`c-card-header`),ow(267,`
        `),Oi(268,`strong`),ow(269,`Angular Progress`),sl(),ow(270,` `),Oi(271,`small`),ow(272,`Animated stripes`),sl(),ow(273,`
      `),sl(),ow(274,`
      `),Oi(275,`c-card-body`),ow(276,`
        `),Oi(277,`p`,3),ow(278,`
          The striped gradient can also be animated. Add `),Oi(279,`code`),ow(280,`[animated]="true"`),sl(),ow(281,` property to
          `),Oi(282,`code`),ow(283,`<c-progress>`),sl(),ow(284,` to animate the stripes right to left via CSS3
          animations.
        `),sl(),ow(285,`
        `),Oi(286,`app-docs-example`,37),ow(287,`
          `),Th(288,`c-progress`,38),ow(289,`
          `),Th(290,`c-progress`,39),ow(291,`
          `),Th(292,`c-progress`,40),ow(293,`
          `),Th(294,`c-progress`,41),ow(295,`
        `),sl(),ow(296,`
      `),sl(),ow(297,`
    `),sl(),ow(298,`
  `),sl(),ow(299,`
`),sl()),l&2&&(jI(30),Dh(`value`,0),jI(2),Dh(`value`,25),jI(2),Dh(`value`,50),jI(2),Dh(`value`,75),jI(2),Dh(`value`,o.value())(`variant`,o.variant()),jI(),dl(``,o.value(),`%`),jI(6),Dh(`value`,33),jI(31),Dh(`value`,25),jI(36),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(2),Dh(`value`,25),jI(29),Dh(`value`,25),jI(2),Dh(`value`,50),jI(2),Dh(`value`,75),jI(2),Dh(`value`,100),jI(28),Dh(`value`,15),jI(3),Dh(`value`,30),jI(3),Dh(`value`,20),jI(11),Dh(`value`,15),jI(3),Dh(`value`,30),jI(3),Dh(`value`,20),jI(34),Dh(`value`,25),jI(2),Dh(`value`,50),jI(2),Dh(`value`,75),jI(2),Dh(`value`,100),jI(32),Dh(`value`,25),jI(2),Dh(`value`,50),jI(2),Dh(`value`,75),jI(2),Dh(`value`,100))},dependencies:[fT,Pv,xi,Nv,Ri,w,Hv,LT,Za,c],encapsulation:2})}};export{f as AppProgressComponent};