import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,M as F,Mt as Oe,Wi as uU,Zt as S,c as AU,fn as Wle,hn as Xb,k as E$1,kn as Zn,mt as L,ot as Ka,rn as U,sa as x,un as Wa,x as Ce,zr as jU}from"./main-VQBM3OGL.js";var f=class s{constructor(){this.value=E$1(10);this.variant=E$1(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=x({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Progress`),L(),Ce(12,` `),F(13,`small`),Ce(14,`Basic example`),L(),Ce(15,`
      `),L(),Ce(16,`
      `),F(17,`c-card-body`),Ce(18,`
        `),F(19,`p`,3),Ce(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),F(21,`a`,4),Ce(22,`
            the HTML5 `),F(23,`code`),Ce(24,`<progress>`),L(),Ce(25,` element
          `),L(),Ce(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),L(),Ce(27,`
        `),F(28,`app-docs-example`,5),Ce(29,`
          `),Oe(30,`c-progress`,6),Ce(31,`
          `),Oe(32,`c-progress`,6),Ce(33,`
          `),Oe(34,`c-progress`,6),Ce(35,`
          `),Oe(36,`c-progress`,6),Ce(37,`
          `),F(38,`c-progress`,7),Ce(39),L(),Ce(40,`
          `),Oe(41,`hr`),Ce(42,`
          `),F(43,`c-progress`,8),Ce(44,`
            `),F(45,`c-progress-bar`,9),Ce(46,`33%`),L(),Ce(47,`
          `),L(),Ce(48,`

        `),L(),Ce(49,`
      `),L(),Ce(50,`
    `),L(),Ce(51,`
  `),L(),Ce(52,`
  `),F(53,`c-col`,0),Ce(54,`
    `),F(55,`c-card`,2),Ce(56,`
      `),F(57,`c-card-header`),Ce(58,`
        `),F(59,`strong`),Ce(60,`Angular Progress`),L(),Ce(61,` `),F(62,`small`),Ce(63,`Labels`),L(),Ce(64,`
      `),L(),Ce(65,`
      `),F(66,`c-card-body`),Ce(67,`
        `),F(68,`p`,3),Ce(69,`
          Add labels to your progress bars by placing text as
          `),F(70,`code`),Ce(71,`<c-progress>`),L(),Ce(72,` content.
        `),L(),Ce(73,`
        `),F(74,`app-docs-example`,10),Ce(75,`
          `),F(76,`c-progress`,6),Ce(77,`25%`),L(),Ce(78,`
        `),L(),Ce(79,`
      `),L(),Ce(80,`
    `),L(),Ce(81,`
  `),L(),Ce(82,`
  `),F(83,`c-col`,0),Ce(84,`
    `),F(85,`c-card`,2),Ce(86,`
      `),F(87,`c-card-header`),Ce(88,`
        `),F(89,`strong`),Ce(90,`Angular Progress`),L(),Ce(91,` `),F(92,`small`),Ce(93,`Height`),L(),Ce(94,`
      `),L(),Ce(95,`
      `),F(96,`c-card-body`),Ce(97,`
        `),F(98,`p`,3),Ce(99,`
          We only set a `),F(100,`code`),Ce(101,`height`),L(),Ce(102,` value on the `),F(103,`code`),Ce(104,`<c-progress>`),L(),Ce(105,`, so if
          you change that value, the inner `),F(106,`code`),Ce(107,`<c-progress-bar>`),L(),Ce(108,` will automatically
          resize accordingly.
        `),L(),Ce(109,`
        `),F(110,`app-docs-example`,11),Ce(111,`
          `),Oe(112,`c-progress`,12),Ce(113,`
          `),Oe(114,`c-progress`,13),Ce(115,`
          `),Oe(116,`c-progress`,14),Ce(117,`
          `),Oe(118,`c-progress`,15),Ce(119,`
          `),Oe(120,`c-progress`,16),Ce(121,`
          `),Oe(122,`c-progress`,17),Ce(123,`
          `),Oe(124,`c-progress`,18),Ce(125,`
          `),Oe(126,`c-progress`,19),Ce(127,`
          `),Oe(128,`c-progress`,20),Ce(129,`
          `),Oe(130,`c-progress`,21),Ce(131,`
        `),L(),Ce(132,`
      `),L(),Ce(133,`
    `),L(),Ce(134,`
  `),L(),Ce(135,`
  `),F(136,`c-col`,0),Ce(137,`
    `),F(138,`c-card`,2),Ce(139,`
      `),F(140,`c-card-header`),Ce(141,`
        `),F(142,`strong`),Ce(143,`Angular Progress`),L(),Ce(144,` `),F(145,`small`),Ce(146,`Backgrounds`),L(),Ce(147,`
      `),L(),Ce(148,`
      `),F(149,`c-card-body`),Ce(150,`
        `),F(151,`p`,3),Ce(152,`
          Use `),F(153,`code`),Ce(154,`color`),L(),Ce(155,` prop to change the appearance of individual progress bars.
        `),L(),Ce(156,`
        `),F(157,`app-docs-example`,22),Ce(158,`
          `),Oe(159,`c-progress`,23),Ce(160,`
          `),Oe(161,`c-progress`,24),Ce(162,`
          `),Oe(163,`c-progress`,25),Ce(164,`
          `),Oe(165,`c-progress`,26),Ce(166,`
        `),L(),Ce(167,`
      `),L(),Ce(168,`
    `),L(),Ce(169,`
  `),L(),Ce(170,`
  `),F(171,`c-col`,0),Ce(172,`
    `),F(173,`c-card`,2),Ce(174,`
      `),F(175,`c-card-header`),Ce(176,`
        `),F(177,`strong`),Ce(178,`Angular Progress`),L(),Ce(179,` `),F(180,`small`),Ce(181,`Multiple bars`),L(),Ce(182,`
      `),L(),Ce(183,`
      `),F(184,`c-card-body`),Ce(185,`
        `),F(186,`p`,3),Ce(187,`
          Include multiple progress bars in a progress component if you need.
        `),L(),Ce(188,`
        `),F(189,`app-docs-example`,27),Ce(190,`
          `),F(191,`c-progress-stacked`),Ce(192,`
            `),F(193,`c-progress`,28),Ce(194,`15%`),L(),Ce(195,`
            `),F(196,`c-progress`,24),Ce(197,`30%`),L(),Ce(198,`
            `),F(199,`c-progress`,6),Ce(200,`
              `),F(201,`c-progress-bar`,29),Ce(202,`20%`),L(),Ce(203,`
            `),L(),Ce(204,`
          `),L(),Ce(205,`
          `),Oe(206,`hr`),Ce(207,`
          `),F(208,`c-progress`,8),Ce(209,`
            `),F(210,`c-progress-bar`,9),Ce(211,`15`),L(),Ce(212,`
            `),F(213,`c-progress-bar`,30),Ce(214,`30`),L(),Ce(215,`
            `),F(216,`c-progress-bar`,31),Ce(217,`20`),L(),Ce(218,`
          `),L(),Ce(219,`
        `),L(),Ce(220,`
      `),L(),Ce(221,`
    `),L(),Ce(222,`
  `),L(),Ce(223,`
  `),F(224,`c-col`,0),Ce(225,`
    `),F(226,`c-card`,2),Ce(227,`
      `),F(228,`c-card-header`),Ce(229,`
        `),F(230,`strong`),Ce(231,`Angular Progress`),L(),Ce(232,` `),F(233,`small`),Ce(234,`Striped`),L(),Ce(235,`
      `),L(),Ce(236,`
      `),F(237,`c-card-body`),Ce(238,`
        `),F(239,`p`,3),Ce(240,`
          Add `),F(241,`code`),Ce(242,`variant="striped"`),L(),Ce(243,` to any `),F(244,`code`),Ce(245,`<c-progress>`),L(),Ce(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),L(),Ce(247,`
        `),F(248,`app-docs-example`,32),Ce(249,`
          `),Oe(250,`c-progress`,33),Ce(251,`
          `),Oe(252,`c-progress`,34),Ce(253,`
          `),Oe(254,`c-progress`,35),Ce(255,`
          `),Oe(256,`c-progress`,36),Ce(257,`
        `),L(),Ce(258,`
      `),L(),Ce(259,`
    `),L(),Ce(260,`
  `),L(),Ce(261,`
  `),F(262,`c-col`,0),Ce(263,`
    `),F(264,`c-card`,2),Ce(265,`
      `),F(266,`c-card-header`),Ce(267,`
        `),F(268,`strong`),Ce(269,`Angular Progress`),L(),Ce(270,` `),F(271,`small`),Ce(272,`Animated stripes`),L(),Ce(273,`
      `),L(),Ce(274,`
      `),F(275,`c-card-body`),Ce(276,`
        `),F(277,`p`,3),Ce(278,`
          The striped gradient can also be animated. Add `),F(279,`code`),Ce(280,`[animated]="true"`),L(),Ce(281,` property to
          `),F(282,`code`),Ce(283,`<c-progress>`),L(),Ce(284,` to animate the stripes right to left via CSS3
          animations.
        `),L(),Ce(285,`
        `),F(286,`app-docs-example`,37),Ce(287,`
          `),Oe(288,`c-progress`,38),Ce(289,`
          `),Oe(290,`c-progress`,39),Ce(291,`
          `),Oe(292,`c-progress`,40),Ce(293,`
          `),Oe(294,`c-progress`,41),Ce(295,`
        `),L(),Ce(296,`
      `),L(),Ce(297,`
    `),L(),Ce(298,`
  `),L(),Ce(299,`
`),L()),l&2&&(S(30),U(`value`,0),S(2),U(`value`,25),S(2),U(`value`,50),S(2),U(`value`,75),S(2),U(`value`,o.value())(`variant`,o.variant()),S(),Zn(``,o.value(),`%`),S(6),U(`value`,33),S(31),U(`value`,25),S(36),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(2),U(`value`,25),S(29),U(`value`,25),S(2),U(`value`,50),S(2),U(`value`,75),S(2),U(`value`,100),S(28),U(`value`,15),S(3),U(`value`,30),S(3),U(`value`,20),S(11),U(`value`,15),S(3),U(`value`,30),S(3),U(`value`,20),S(34),U(`value`,25),S(2),U(`value`,50),S(2),U(`value`,75),S(2),U(`value`,100),S(32),U(`value`,25),S(2),U(`value`,50),S(2),U(`value`,75),S(2),U(`value`,100))},dependencies:[Cle,AU,Wa,uU,Ka,E,jU,Wle,Xb,c],encapsulation:2})}};export{f as AppProgressComponent};