import{Bt as dc,Gn as Ch,I as Li,Oi as ki,Sn as rb,Vi as pl,X as Pi,ai as cw,ga as wh,i as A1,ii as cl,la as vD,mi as ei,wn as t1,xt as Xv,zn as $E,zt as db}from"./main-3ZNEFDGN.js";import{t as E}from"./chunk-DyzPa03D.js";import{t as c}from"./chunk-Cq12Oo7T.js";var f=class s{constructor(){this.value=ei(10);this.variant=ei(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=vD({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Progress`),cl(),cw(12,` `),ki(13,`small`),cw(14,`Basic example`),cl(),cw(15,`
      `),cl(),cw(16,`
      `),ki(17,`c-card-body`),cw(18,`
        `),ki(19,`p`,3),cw(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),ki(21,`a`,4),cw(22,`
            the HTML5 `),ki(23,`code`),cw(24,`<progress>`),cl(),cw(25,` element
          `),cl(),cw(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),cl(),cw(27,`
        `),ki(28,`app-docs-example`,5),cw(29,`
          `),Ch(30,`c-progress`,6),cw(31,`
          `),Ch(32,`c-progress`,6),cw(33,`
          `),Ch(34,`c-progress`,6),cw(35,`
          `),Ch(36,`c-progress`,6),cw(37,`
          `),ki(38,`c-progress`,7),cw(39),cl(),cw(40,`
          `),Ch(41,`hr`),cw(42,`
          `),ki(43,`c-progress`,8),cw(44,`
            `),ki(45,`c-progress-bar`,9),cw(46,`33%`),cl(),cw(47,`
          `),cl(),cw(48,`

        `),cl(),cw(49,`
      `),cl(),cw(50,`
    `),cl(),cw(51,`
  `),cl(),cw(52,`
  `),ki(53,`c-col`,0),cw(54,`
    `),ki(55,`c-card`,2),cw(56,`
      `),ki(57,`c-card-header`),cw(58,`
        `),ki(59,`strong`),cw(60,`Angular Progress`),cl(),cw(61,` `),ki(62,`small`),cw(63,`Labels`),cl(),cw(64,`
      `),cl(),cw(65,`
      `),ki(66,`c-card-body`),cw(67,`
        `),ki(68,`p`,3),cw(69,`
          Add labels to your progress bars by placing text as
          `),ki(70,`code`),cw(71,`<c-progress>`),cl(),cw(72,` content.
        `),cl(),cw(73,`
        `),ki(74,`app-docs-example`,10),cw(75,`
          `),ki(76,`c-progress`,6),cw(77,`25%`),cl(),cw(78,`
        `),cl(),cw(79,`
      `),cl(),cw(80,`
    `),cl(),cw(81,`
  `),cl(),cw(82,`
  `),ki(83,`c-col`,0),cw(84,`
    `),ki(85,`c-card`,2),cw(86,`
      `),ki(87,`c-card-header`),cw(88,`
        `),ki(89,`strong`),cw(90,`Angular Progress`),cl(),cw(91,` `),ki(92,`small`),cw(93,`Height`),cl(),cw(94,`
      `),cl(),cw(95,`
      `),ki(96,`c-card-body`),cw(97,`
        `),ki(98,`p`,3),cw(99,`
          We only set a `),ki(100,`code`),cw(101,`height`),cl(),cw(102,` value on the `),ki(103,`code`),cw(104,`<c-progress>`),cl(),cw(105,`, so if
          you change that value, the inner `),ki(106,`code`),cw(107,`<c-progress-bar>`),cl(),cw(108,` will automatically
          resize accordingly.
        `),cl(),cw(109,`
        `),ki(110,`app-docs-example`,11),cw(111,`
          `),Ch(112,`c-progress`,12),cw(113,`
          `),Ch(114,`c-progress`,13),cw(115,`
          `),Ch(116,`c-progress`,14),cw(117,`
          `),Ch(118,`c-progress`,15),cw(119,`
          `),Ch(120,`c-progress`,16),cw(121,`
          `),Ch(122,`c-progress`,17),cw(123,`
          `),Ch(124,`c-progress`,18),cw(125,`
          `),Ch(126,`c-progress`,19),cw(127,`
          `),Ch(128,`c-progress`,20),cw(129,`
          `),Ch(130,`c-progress`,21),cw(131,`
        `),cl(),cw(132,`
      `),cl(),cw(133,`
    `),cl(),cw(134,`
  `),cl(),cw(135,`
  `),ki(136,`c-col`,0),cw(137,`
    `),ki(138,`c-card`,2),cw(139,`
      `),ki(140,`c-card-header`),cw(141,`
        `),ki(142,`strong`),cw(143,`Angular Progress`),cl(),cw(144,` `),ki(145,`small`),cw(146,`Backgrounds`),cl(),cw(147,`
      `),cl(),cw(148,`
      `),ki(149,`c-card-body`),cw(150,`
        `),ki(151,`p`,3),cw(152,`
          Use `),ki(153,`code`),cw(154,`color`),cl(),cw(155,` prop to change the appearance of individual progress bars.
        `),cl(),cw(156,`
        `),ki(157,`app-docs-example`,22),cw(158,`
          `),Ch(159,`c-progress`,23),cw(160,`
          `),Ch(161,`c-progress`,24),cw(162,`
          `),Ch(163,`c-progress`,25),cw(164,`
          `),Ch(165,`c-progress`,26),cw(166,`
        `),cl(),cw(167,`
      `),cl(),cw(168,`
    `),cl(),cw(169,`
  `),cl(),cw(170,`
  `),ki(171,`c-col`,0),cw(172,`
    `),ki(173,`c-card`,2),cw(174,`
      `),ki(175,`c-card-header`),cw(176,`
        `),ki(177,`strong`),cw(178,`Angular Progress`),cl(),cw(179,` `),ki(180,`small`),cw(181,`Multiple bars`),cl(),cw(182,`
      `),cl(),cw(183,`
      `),ki(184,`c-card-body`),cw(185,`
        `),ki(186,`p`,3),cw(187,`
          Include multiple progress bars in a progress component if you need.
        `),cl(),cw(188,`
        `),ki(189,`app-docs-example`,27),cw(190,`
          `),ki(191,`c-progress-stacked`),cw(192,`
            `),ki(193,`c-progress`,28),cw(194,`15%`),cl(),cw(195,`
            `),ki(196,`c-progress`,24),cw(197,`30%`),cl(),cw(198,`
            `),ki(199,`c-progress`,6),cw(200,`
              `),ki(201,`c-progress-bar`,29),cw(202,`20%`),cl(),cw(203,`
            `),cl(),cw(204,`
          `),cl(),cw(205,`
          `),Ch(206,`hr`),cw(207,`
          `),ki(208,`c-progress`,8),cw(209,`
            `),ki(210,`c-progress-bar`,9),cw(211,`15`),cl(),cw(212,`
            `),ki(213,`c-progress-bar`,30),cw(214,`30`),cl(),cw(215,`
            `),ki(216,`c-progress-bar`,31),cw(217,`20`),cl(),cw(218,`
          `),cl(),cw(219,`
        `),cl(),cw(220,`
      `),cl(),cw(221,`
    `),cl(),cw(222,`
  `),cl(),cw(223,`
  `),ki(224,`c-col`,0),cw(225,`
    `),ki(226,`c-card`,2),cw(227,`
      `),ki(228,`c-card-header`),cw(229,`
        `),ki(230,`strong`),cw(231,`Angular Progress`),cl(),cw(232,` `),ki(233,`small`),cw(234,`Striped`),cl(),cw(235,`
      `),cl(),cw(236,`
      `),ki(237,`c-card-body`),cw(238,`
        `),ki(239,`p`,3),cw(240,`
          Add `),ki(241,`code`),cw(242,`variant="striped"`),cl(),cw(243,` to any `),ki(244,`code`),cw(245,`<c-progress>`),cl(),cw(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),cl(),cw(247,`
        `),ki(248,`app-docs-example`,32),cw(249,`
          `),Ch(250,`c-progress`,33),cw(251,`
          `),Ch(252,`c-progress`,34),cw(253,`
          `),Ch(254,`c-progress`,35),cw(255,`
          `),Ch(256,`c-progress`,36),cw(257,`
        `),cl(),cw(258,`
      `),cl(),cw(259,`
    `),cl(),cw(260,`
  `),cl(),cw(261,`
  `),ki(262,`c-col`,0),cw(263,`
    `),ki(264,`c-card`,2),cw(265,`
      `),ki(266,`c-card-header`),cw(267,`
        `),ki(268,`strong`),cw(269,`Angular Progress`),cl(),cw(270,` `),ki(271,`small`),cw(272,`Animated stripes`),cl(),cw(273,`
      `),cl(),cw(274,`
      `),ki(275,`c-card-body`),cw(276,`
        `),ki(277,`p`,3),cw(278,`
          The striped gradient can also be animated. Add `),ki(279,`code`),cw(280,`[animated]="true"`),cl(),cw(281,` property to
          `),ki(282,`code`),cw(283,`<c-progress>`),cl(),cw(284,` to animate the stripes right to left via CSS3
          animations.
        `),cl(),cw(285,`
        `),ki(286,`app-docs-example`,37),cw(287,`
          `),Ch(288,`c-progress`,38),cw(289,`
          `),Ch(290,`c-progress`,39),cw(291,`
          `),Ch(292,`c-progress`,40),cw(293,`
          `),Ch(294,`c-progress`,41),cw(295,`
        `),cl(),cw(296,`
      `),cl(),cw(297,`
    `),cl(),cw(298,`
  `),cl(),cw(299,`
`),cl()),l&2&&($E(30),wh(`value`,0),$E(2),wh(`value`,25),$E(2),wh(`value`,50),$E(2),wh(`value`,75),$E(2),wh(`value`,o.value())(`variant`,o.variant()),$E(),pl(``,o.value(),`%`),$E(6),wh(`value`,33),$E(31),wh(`value`,25),$E(36),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(2),wh(`value`,25),$E(29),wh(`value`,25),$E(2),wh(`value`,50),$E(2),wh(`value`,75),$E(2),wh(`value`,100),$E(28),wh(`value`,15),$E(3),wh(`value`,30),$E(3),wh(`value`,20),$E(11),wh(`value`,15),$E(3),wh(`value`,30),$E(3),wh(`value`,20),$E(34),wh(`value`,25),$E(2),wh(`value`,50),$E(2),wh(`value`,75),$E(2),wh(`value`,100),$E(32),wh(`value`,25),$E(2),wh(`value`,50),$E(2),wh(`value`,75),$E(2),wh(`value`,100))},dependencies:[t1,rb,Pi,Xv,Li,E,db,A1,dc,c],encapsulation:2})}};export{f as AppProgressComponent};