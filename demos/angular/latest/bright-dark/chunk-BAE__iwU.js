import{Di as xT,Ni as yT,U as Ib,Zn as hm,gn as as,in as ZD,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{Ct as WF,I as KF,Wt as ai,Xn as ro,br as yF,jn as mI,jt as YM,zn as oo,zt as _g}from"./main-OP4H33BC.js";import{t as $}from"./chunk-Bz9T7_sS.js";import"./chunk-MRyNAJuF.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-vib_er0B.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=Ib({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Pagination`),lu(),yT(12,`
      `),lu(),yT(13,`
      `),as(14,`c-card-body`),yT(15,`
        `),as(16,`p`,3),yT(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),as(18,`code`),yT(19,`<nav>`),lu(),yT(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),lu(),yT(21,`
        `),as(22,`p`,3),yT(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),as(24,`code`),yT(25,`aria-label`),lu(),yT(26,` for the
          `),as(27,`code`),yT(28,`<nav>`),lu(),yT(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),as(30,`code`),yT(31,`aria-label="Search results pages"`),lu(),yT(32,`.
        `),lu(),yT(33,`
        `),as(34,`app-docs-example`,4),yT(35,`
          `),as(36,`c-pagination`,5),yT(37,`
            `),as(38,`c-page-item`),yT(39,`
              `),as(40,`a`,6),yT(41,`Previous`),lu(),yT(42,`
            `),lu(),yT(43,`
            `),as(44,`c-page-item`),yT(45,`
              `),as(46,`a`,6),yT(47,`1`),lu(),yT(48,`
            `),lu(),yT(49,`
            `),as(50,`c-page-item`),yT(51,`
              `),as(52,`a`,6),yT(53,`2`),lu(),yT(54,`
            `),lu(),yT(55,`
            `),as(56,`c-page-item`),yT(57,`
              `),as(58,`a`,6),yT(59,`3`),lu(),yT(60,`
            `),lu(),yT(61,`
            `),as(62,`c-page-item`),yT(63,`
              `),as(64,`a`,6),yT(65,`Next`),lu(),yT(66,`
            `),lu(),yT(67,`
          `),lu(),yT(68,`
        `),lu(),yT(69,`
      `),lu(),yT(70,`
    `),lu(),yT(71,`
  `),lu(),yT(72,`
  `),as(73,`c-col`,0),yT(74,`
    `),as(75,`c-card`,2),yT(76,`
      `),as(77,`c-card-header`),yT(78,`
        `),as(79,`strong`),yT(80,`Angular Pagination`),lu(),yT(81,` `),as(82,`small`),yT(83,`Working with icons`),lu(),yT(84,`
      `),lu(),yT(85,`
      `),as(86,`c-card-body`),yT(87,`
        `),as(88,`p`,3),yT(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),as(90,`code`),yT(91,`aria`),lu(),yT(92,` attributes.
        `),lu(),yT(93,`
        `),as(94,`app-docs-example`,7),yT(95,`
          `),as(96,`c-pagination`,5),yT(97,`
            `),as(98,`c-page-item`,8),yT(99,`
              `),as(100,`a`,6)(101,`span`,9),yT(102,`«`),lu()(),yT(103,`
            `),lu(),yT(104,`
            `),as(105,`c-page-item`),yT(106,`
              `),as(107,`a`,6),yT(108,`1`),lu(),yT(109,`
            `),lu(),yT(110,`
            `),as(111,`c-page-item`),yT(112,`
              `),as(113,`a`,6),yT(114,`2`),lu(),yT(115,`
            `),lu(),yT(116,`
            `),as(117,`c-page-item`),yT(118,`
              `),as(119,`a`,6),yT(120,`3`),lu(),yT(121,`
            `),lu(),yT(122,`
            `),as(123,`c-page-item`,10),yT(124,`
              `),as(125,`a`,6)(126,`span`,9),yT(127,`»`),lu()(),yT(128,`
            `),lu(),yT(129,`
          `),lu(),yT(130,`
        `),lu(),yT(131,`
      `),lu(),yT(132,`
    `),lu(),yT(133,`
  `),lu(),yT(134,`
  `),as(135,`c-col`,0),yT(136,`
    `),as(137,`c-card`,2),yT(138,`
      `),as(139,`c-card-header`),yT(140,`
        `),as(141,`strong`),yT(142,`Angular Pagination`),lu(),yT(143,` `),as(144,`small`),yT(145,`Disabled and active states`),lu(),yT(146,`
      `),lu(),yT(147,`
      `),as(148,`c-card-body`),yT(149,`
        `),as(150,`p`,3),yT(151,`
          Pagination links are customizable for different circumstances. Use
          `),as(152,`code`),yT(153,`disabled`),lu(),yT(154,` for links that appear un-clickable and `),as(155,`code`),yT(156,`.active`),lu(),yT(157,` to
          indicate the current page.
        `),lu(),yT(158,`
        `),as(159,`p`,3),yT(160,`
          While the `),as(161,`code`),yT(162,`disabled`),lu(),yT(163,` prop uses `),as(164,`code`),yT(165,`pointer-events: none`),lu(),yT(166,` to
          `),as(167,`em`),yT(168,`try`),lu(),yT(169,` to disable the link functionality of `),as(170,`code`),yT(171,`<a>`),lu(),yT(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),as(173,`code`),yT(174,`tabindex="-1"`),lu(),yT(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),lu(),yT(176,`
        `),as(177,`app-docs-example`,11),yT(178,`
          `),as(179,`c-pagination`,5),yT(180,`
            `),as(181,`c-page-item`,12),yT(182,`
              `),as(183,`a`,6)(184,`span`,9),yT(185,`«`),lu()(),yT(186,`
            `),lu(),yT(187,`
            `),as(188,`c-page-item`,13),yT(189,`
              `),as(190,`a`,6),yT(191,`1`),lu(),yT(192,`
            `),lu(),yT(193,`
            `),as(194,`c-page-item`),yT(195,`
              `),as(196,`a`,6),yT(197,`2`),lu(),yT(198,`
            `),lu(),yT(199,`
            `),as(200,`c-page-item`),yT(201,`
              `),as(202,`a`,6),yT(203,`3`),lu(),yT(204,`
            `),lu(),yT(205,`
            `),as(206,`c-page-item`,10),yT(207,`
              `),as(208,`a`,6)(209,`span`,9),yT(210,`»`),lu()(),yT(211,`
            `),lu(),yT(212,`
          `),lu(),yT(213,`
        `),lu(),yT(214,`
      `),lu(),yT(215,`
    `),lu(),yT(216,`
  `),lu(),yT(217,`
  `),as(218,`c-col`,0),yT(219,`
    `),as(220,`c-card`,2),yT(221,`
      `),as(222,`c-card-header`),yT(223,`
        `),as(224,`strong`),yT(225,`Angular Pagination`),lu(),yT(226,` `),as(227,`small`),yT(228,`Sizing`),lu(),yT(229,`
      `),lu(),yT(230,`
      `),as(231,`c-card-body`),yT(232,`
        `),as(233,`p`,3),yT(234,`
          Fancy larger or smaller pagination? Add `),as(235,`code`),yT(236,`sizing="lg"`),lu(),yT(237,` or
          `),as(238,`code`),yT(239,`sizing="sm"`),lu(),yT(240,` for additional sizes.
        `),lu(),yT(241,`
        `),as(242,`app-docs-example`,14),yT(243,`
          `),as(244,`c-pagination`,15),yT(245,`
            `),as(246,`c-page-item`),yT(247,`
              `),as(248,`a`,6),yT(249,`Previous`),lu(),yT(250,`
            `),lu(),yT(251,`
            `),as(252,`c-page-item`),yT(253,`
              `),as(254,`a`,6),yT(255,`1`),lu(),yT(256,`
            `),lu(),yT(257,`
            `),as(258,`c-page-item`),yT(259,`
              `),as(260,`a`,6),yT(261,`2`),lu(),yT(262,`
            `),lu(),yT(263,`
            `),as(264,`c-page-item`),yT(265,`
              `),as(266,`a`,6),yT(267,`3`),lu(),yT(268,`
            `),lu(),yT(269,`
            `),as(270,`c-page-item`),yT(271,`
              `),as(272,`a`,6),yT(273,`Next`),lu(),yT(274,`
            `),lu(),yT(275,`
          `),lu(),yT(276,`
        `),lu(),yT(277,`
        `),as(278,`app-docs-example`,14),yT(279,`
          `),as(280,`c-pagination`,16),yT(281,`
            `),as(282,`c-page-item`),yT(283,`
              `),as(284,`a`,6),yT(285,`Previous`),lu(),yT(286,`
            `),lu(),yT(287,`
            `),as(288,`c-page-item`),yT(289,`
              `),as(290,`a`,6),yT(291,`1`),lu(),yT(292,`
            `),lu(),yT(293,`
            `),as(294,`c-page-item`),yT(295,`
              `),as(296,`a`,6),yT(297,`2`),lu(),yT(298,`
            `),lu(),yT(299,`
            `),as(300,`c-page-item`),yT(301,`
              `),as(302,`a`,6),yT(303,`3`),lu(),yT(304,`
            `),lu(),yT(305,`
            `),as(306,`c-page-item`),yT(307,`
              `),as(308,`a`,6),yT(309,`Next`),lu(),yT(310,`
            `),lu(),yT(311,`
          `),lu(),yT(312,`
        `),lu(),yT(313,`
      `),lu(),yT(314,`
    `),lu(),yT(315,`
  `),lu(),yT(316,`
  `),as(317,`c-col`,0),yT(318,`
    `),as(319,`c-card`,2),yT(320,`
      `),as(321,`c-card-header`),yT(322,`
        `),as(323,`strong`),yT(324,`Angular Pagination`),lu(),yT(325,` `),as(326,`small`),yT(327,`Alignment`),lu(),yT(328,`
      `),lu(),yT(329,`
      `),as(330,`c-card-body`),yT(331,`
        `),as(332,`p`,3),yT(333,`
          Change the alignment of pagination components with
          `),as(334,`a`,17),yT(335,`flexbox utilities`),lu(),yT(336,`.
        `),lu(),yT(337,`
        `),as(338,`app-docs-example`,18),yT(339,`
          `),as(340,`c-pagination`,19),yT(341,`
            `),as(342,`c-page-item`,20),yT(343,`
              `),as(344,`a`,6),yT(345,`Previous`),lu(),yT(346,`
            `),lu(),yT(347,`
            `),as(348,`c-page-item`),yT(349,`
              `),as(350,`a`,6),yT(351,`1`),lu(),yT(352,`
            `),lu(),yT(353,`
            `),as(354,`c-page-item`),yT(355,`
              `),as(356,`a`,6),yT(357,`2`),lu(),yT(358,`
            `),lu(),yT(359,`
            `),as(360,`c-page-item`),yT(361,`
              `),as(362,`a`,6),yT(363,`3`),lu(),yT(364,`
            `),lu(),yT(365,`
            `),as(366,`c-page-item`),yT(367,`
              `),as(368,`a`,6),yT(369,`Next`),lu(),yT(370,`
            `),lu(),yT(371,`
          `),lu(),yT(372,`
        `),lu(),yT(373,`
        `),as(374,`app-docs-example`,18),yT(375,`
          `),as(376,`c-pagination`,21),yT(377,`
            `),as(378,`c-page-item`,20),yT(379,`
              `),as(380,`a`,6),yT(381,`Previous`),lu(),yT(382,`
            `),lu(),yT(383,`
            `),as(384,`c-page-item`),yT(385,`
              `),as(386,`a`,6),yT(387,`1`),lu(),yT(388,`
            `),lu(),yT(389,`
            `),as(390,`c-page-item`),yT(391,`
              `),as(392,`a`,6),yT(393,`2`),lu(),yT(394,`
            `),lu(),yT(395,`
            `),as(396,`c-page-item`),yT(397,`
              `),as(398,`a`,6),yT(399,`3`),lu(),yT(400,`
            `),lu(),yT(401,`
            `),as(402,`c-page-item`),yT(403,`
              `),as(404,`a`,6),yT(405,`Next`),lu(),yT(406,`
            `),lu(),yT(407,`
          `),lu(),yT(408,`
        `),lu(),yT(409,`
      `),lu(),yT(410,`
    `),lu(),yT(411,`
  `),lu(),yT(412,`
`),lu()),m&2&&(ZD(40),pm(`routerLink`,xT(39,l)),ZD(6),pm(`routerLink`,xT(40,l)),ZD(6),pm(`routerLink`,xT(41,l)),ZD(6),pm(`routerLink`,xT(42,l)),ZD(6),pm(`routerLink`,xT(43,l)),ZD(36),pm(`routerLink`,xT(44,l)),ZD(7),pm(`routerLink`,xT(45,l)),ZD(6),pm(`routerLink`,xT(46,l)),ZD(6),pm(`routerLink`,xT(47,l)),ZD(6),pm(`routerLink`,xT(48,l)),ZD(56),pm(`disabled`,!0),ZD(2),pm(`routerLink`,xT(49,l)),ZD(5),pm(`active`,!0),ZD(2),pm(`routerLink`,xT(50,l)),ZD(6),pm(`routerLink`,xT(51,l)),ZD(6),pm(`routerLink`,xT(52,l)),ZD(6),pm(`routerLink`,xT(53,l)),ZD(40),pm(`routerLink`,xT(54,l)),ZD(6),pm(`routerLink`,xT(55,l)),ZD(6),pm(`routerLink`,xT(56,l)),ZD(6),pm(`routerLink`,xT(57,l)),ZD(6),pm(`routerLink`,xT(58,l)),ZD(12),pm(`routerLink`,xT(59,l)),ZD(6),pm(`routerLink`,xT(60,l)),ZD(6),pm(`routerLink`,xT(61,l)),ZD(6),pm(`routerLink`,xT(62,l)),ZD(6),pm(`routerLink`,xT(63,l)),ZD(34),pm(`disabled`,!0),ZD(2),pm(`routerLink`,xT(64,l)),ZD(6),pm(`routerLink`,xT(65,l)),ZD(6),pm(`routerLink`,xT(66,l)),ZD(6),pm(`routerLink`,xT(67,l)),ZD(6),pm(`routerLink`,xT(68,l)),ZD(10),pm(`disabled`,!0),ZD(2),pm(`routerLink`,xT(69,l)),ZD(6),pm(`routerLink`,xT(70,l)),ZD(6),pm(`routerLink`,xT(71,l)),ZD(6),pm(`routerLink`,xT(72,l)),ZD(6),pm(`routerLink`,xT(73,l)))},dependencies:[yF,mI,oo,YM,ro,$,KF,WF,_g,ai,c],encapsulation:2})}};export{f as PaginationsComponent};