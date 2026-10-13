import{Ci as wi,Ni as yT,U as Ib,Zn as hm,er as hu,gn as as,in as ZD,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Lt as Zu,Pt as ZF,Xn as ro,br as yF,jn as mI,jt as YM,v as DI,zn as oo}from"./main-UPACRQ3I.js";import{t as $}from"./chunk-CXHWwZ0I.js";import"./chunk-liXgPojY.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-CvB_7oPO.js";var f=class s{constructor(){this.value=wi(10);this.variant=wi(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=Ib({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success-gradient`,1,`mb-3`,3,`value`],[`color`,`info-gradient`,1,`mb-3`,3,`value`],[`color`,`warning-gradient`,1,`mb-3`,3,`value`],[`color`,`danger-gradient`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`danger-gradient`],[`color`,`success-gradient`,3,`value`],[`color`,`info-gradient`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Progress`),lu(),yT(12,` `),as(13,`small`),yT(14,`Basic example`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`,3),yT(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),as(21,`a`,4),yT(22,`
            the HTML5 `),as(23,`code`),yT(24,`<progress>`),lu(),yT(25,` element
          `),lu(),yT(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),lu(),yT(27,`
        `),as(28,`app-docs-example`,5),yT(29,`
          `),hm(30,`c-progress`,6),yT(31,`
          `),hm(32,`c-progress`,6),yT(33,`
          `),hm(34,`c-progress`,6),yT(35,`
          `),hm(36,`c-progress`,6),yT(37,`
          `),as(38,`c-progress`,7),yT(39),lu(),yT(40,`
          `),hm(41,`hr`),yT(42,`
          `),as(43,`c-progress`,8),yT(44,`
            `),as(45,`c-progress-bar`,9),yT(46,`33%`),lu(),yT(47,`
          `),lu(),yT(48,`

        `),lu(),yT(49,`
      `),lu(),yT(50,`
    `),lu(),yT(51,`
  `),lu(),yT(52,`
  `),as(53,`c-col`,0),yT(54,`
    `),as(55,`c-card`,2),yT(56,`
      `),as(57,`c-card-header`),yT(58,`
        `),as(59,`strong`),yT(60,`Angular Progress`),lu(),yT(61,` `),as(62,`small`),yT(63,`Labels`),lu(),yT(64,`
      `),lu(),yT(65,`
      `),as(66,`c-card-body`),yT(67,`
        `),as(68,`p`,3),yT(69,`
          Add labels to your progress bars by placing text as
          `),as(70,`code`),yT(71,`<c-progress>`),lu(),yT(72,` content.
        `),lu(),yT(73,`
        `),as(74,`app-docs-example`,10),yT(75,`
          `),as(76,`c-progress`,6),yT(77,`25%`),lu(),yT(78,`
        `),lu(),yT(79,`
      `),lu(),yT(80,`
    `),lu(),yT(81,`
  `),lu(),yT(82,`
  `),as(83,`c-col`,0),yT(84,`
    `),as(85,`c-card`,2),yT(86,`
      `),as(87,`c-card-header`),yT(88,`
        `),as(89,`strong`),yT(90,`Angular Progress`),lu(),yT(91,` `),as(92,`small`),yT(93,`Height`),lu(),yT(94,`
      `),lu(),yT(95,`
      `),as(96,`c-card-body`),yT(97,`
        `),as(98,`p`,3),yT(99,`
          We only set a `),as(100,`code`),yT(101,`height`),lu(),yT(102,` value on the `),as(103,`code`),yT(104,`<c-progress>`),lu(),yT(105,`, so if
          you change that value, the inner `),as(106,`code`),yT(107,`<c-progress-bar>`),lu(),yT(108,` will automatically
          resize accordingly.
        `),lu(),yT(109,`
        `),as(110,`app-docs-example`,11),yT(111,`
          `),hm(112,`c-progress`,12),yT(113,`
          `),hm(114,`c-progress`,13),yT(115,`
          `),hm(116,`c-progress`,14),yT(117,`
          `),hm(118,`c-progress`,15),yT(119,`
          `),hm(120,`c-progress`,16),yT(121,`
          `),hm(122,`c-progress`,17),yT(123,`
          `),hm(124,`c-progress`,18),yT(125,`
          `),hm(126,`c-progress`,19),yT(127,`
          `),hm(128,`c-progress`,20),yT(129,`
          `),hm(130,`c-progress`,21),yT(131,`
        `),lu(),yT(132,`
      `),lu(),yT(133,`
    `),lu(),yT(134,`
  `),lu(),yT(135,`
  `),as(136,`c-col`,0),yT(137,`
    `),as(138,`c-card`,2),yT(139,`
      `),as(140,`c-card-header`),yT(141,`
        `),as(142,`strong`),yT(143,`Angular Progress`),lu(),yT(144,` `),as(145,`small`),yT(146,`Backgrounds`),lu(),yT(147,`
      `),lu(),yT(148,`
      `),as(149,`c-card-body`),yT(150,`
        `),as(151,`p`,3),yT(152,`
          Use `),as(153,`code`),yT(154,`color`),lu(),yT(155,` prop to change the appearance of individual progress bars.
        `),lu(),yT(156,`
        `),as(157,`app-docs-example`,22),yT(158,`
          `),hm(159,`c-progress`,23),yT(160,`
          `),hm(161,`c-progress`,24),yT(162,`
          `),hm(163,`c-progress`,25),yT(164,`
          `),hm(165,`c-progress`,26),yT(166,`
        `),lu(),yT(167,`
      `),lu(),yT(168,`
    `),lu(),yT(169,`
  `),lu(),yT(170,`
  `),as(171,`c-col`,0),yT(172,`
    `),as(173,`c-card`,2),yT(174,`
      `),as(175,`c-card-header`),yT(176,`
        `),as(177,`strong`),yT(178,`Angular Progress`),lu(),yT(179,` `),as(180,`small`),yT(181,`Multiple bars`),lu(),yT(182,`
      `),lu(),yT(183,`
      `),as(184,`c-card-body`),yT(185,`
        `),as(186,`p`,3),yT(187,`
          Include multiple progress bars in a progress component if you need.
        `),lu(),yT(188,`
        `),as(189,`app-docs-example`,27),yT(190,`
          `),as(191,`c-progress-stacked`),yT(192,`
            `),as(193,`c-progress`,28),yT(194,`15%`),lu(),yT(195,`
            `),as(196,`c-progress`,29),yT(197,`30%`),lu(),yT(198,`
            `),as(199,`c-progress`,6),yT(200,`
              `),as(201,`c-progress-bar`,30),yT(202,`20%`),lu(),yT(203,`
            `),lu(),yT(204,`
          `),lu(),yT(205,`
          `),hm(206,`hr`),yT(207,`
          `),as(208,`c-progress`,8),yT(209,`
            `),as(210,`c-progress-bar`,9),yT(211,`15`),lu(),yT(212,`
            `),as(213,`c-progress-bar`,31),yT(214,`30`),lu(),yT(215,`
            `),as(216,`c-progress-bar`,32),yT(217,`20`),lu(),yT(218,`
          `),lu(),yT(219,`
        `),lu(),yT(220,`
      `),lu(),yT(221,`
    `),lu(),yT(222,`
  `),lu(),yT(223,`
  `),as(224,`c-col`,0),yT(225,`
    `),as(226,`c-card`,2),yT(227,`
      `),as(228,`c-card-header`),yT(229,`
        `),as(230,`strong`),yT(231,`Angular Progress`),lu(),yT(232,` `),as(233,`small`),yT(234,`Striped`),lu(),yT(235,`
      `),lu(),yT(236,`
      `),as(237,`c-card-body`),yT(238,`
        `),as(239,`p`,3),yT(240,`
          Add `),as(241,`code`),yT(242,`variant="striped"`),lu(),yT(243,` to any `),as(244,`code`),yT(245,`<c-progress>`),lu(),yT(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),lu(),yT(247,`
        `),as(248,`app-docs-example`,33),yT(249,`
          `),hm(250,`c-progress`,34),yT(251,`
          `),hm(252,`c-progress`,35),yT(253,`
          `),hm(254,`c-progress`,36),yT(255,`
          `),hm(256,`c-progress`,37),yT(257,`
        `),lu(),yT(258,`
      `),lu(),yT(259,`
    `),lu(),yT(260,`
  `),lu(),yT(261,`
  `),as(262,`c-col`,0),yT(263,`
    `),as(264,`c-card`,2),yT(265,`
      `),as(266,`c-card-header`),yT(267,`
        `),as(268,`strong`),yT(269,`Angular Progress`),lu(),yT(270,` `),as(271,`small`),yT(272,`Animated stripes`),lu(),yT(273,`
      `),lu(),yT(274,`
      `),as(275,`c-card-body`),yT(276,`
        `),as(277,`p`,3),yT(278,`
          The striped gradient can also be animated. Add `),as(279,`code`),yT(280,`[animated]="true"`),lu(),yT(281,` property to
          `),as(282,`code`),yT(283,`<c-progress>`),lu(),yT(284,` to animate the stripes right to left via CSS3
          animations.
        `),lu(),yT(285,`
        `),as(286,`app-docs-example`,38),yT(287,`
          `),hm(288,`c-progress`,39),yT(289,`
          `),hm(290,`c-progress`,40),yT(291,`
          `),hm(292,`c-progress`,41),yT(293,`
          `),hm(294,`c-progress`,42),yT(295,`
        `),lu(),yT(296,`
      `),lu(),yT(297,`
    `),lu(),yT(298,`
  `),lu(),yT(299,`
`),lu()),l&2&&(ZD(30),pm(`value`,0),ZD(2),pm(`value`,25),ZD(2),pm(`value`,50),ZD(2),pm(`value`,75),ZD(2),pm(`value`,o.value())(`variant`,o.variant()),ZD(),hu(``,o.value(),`%`),ZD(6),pm(`value`,33),ZD(31),pm(`value`,25),ZD(36),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(2),pm(`value`,25),ZD(29),pm(`value`,25),ZD(2),pm(`value`,50),ZD(2),pm(`value`,75),ZD(2),pm(`value`,100),ZD(28),pm(`value`,15),ZD(3),pm(`value`,30),ZD(3),pm(`value`,20),ZD(11),pm(`value`,15),ZD(3),pm(`value`,30),ZD(3),pm(`value`,20),ZD(34),pm(`value`,25),ZD(2),pm(`value`,50),ZD(2),pm(`value`,75),ZD(2),pm(`value`,100),ZD(32),pm(`value`,25),ZD(2),pm(`value`,50),ZD(2),pm(`value`,75),ZD(2),pm(`value`,100))},dependencies:[yF,mI,oo,YM,ro,$,DI,ZF,Zu,c],encapsulation:2})}};export{f as AppProgressComponent};