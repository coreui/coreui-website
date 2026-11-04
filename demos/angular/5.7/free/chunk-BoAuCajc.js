import{$t as V,A as F,D as E,En as ZN,Hr as ke,Lr as ja,Pn as _,R as Gse,Vr as k,d as Ba,fa as ye,fn as Xi,gr as fn,ht as Mse,on as Wse,q as IH,qt as UH}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=E({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Pagination`),F(),ye(12,`
      `),F(),ye(13,`
      `),k(14,`c-card-body`),ye(15,`
        `),k(16,`p`,3),ye(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),k(18,`code`),ye(19,`<nav>`),F(),ye(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),F(),ye(21,`
        `),k(22,`p`,3),ye(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),k(24,`code`),ye(25,`aria-label`),F(),ye(26,` for the
          `),k(27,`code`),ye(28,`<nav>`),F(),ye(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),k(30,`code`),ye(31,`aria-label="Search results pages"`),F(),ye(32,`.
        `),F(),ye(33,`
        `),k(34,`app-docs-example`,4),ye(35,`
          `),k(36,`c-pagination`,5),ye(37,`
            `),k(38,`c-page-item`),ye(39,`
              `),k(40,`a`,6),ye(41,`Previous`),F(),ye(42,`
            `),F(),ye(43,`
            `),k(44,`c-page-item`),ye(45,`
              `),k(46,`a`,6),ye(47,`1`),F(),ye(48,`
            `),F(),ye(49,`
            `),k(50,`c-page-item`),ye(51,`
              `),k(52,`a`,6),ye(53,`2`),F(),ye(54,`
            `),F(),ye(55,`
            `),k(56,`c-page-item`),ye(57,`
              `),k(58,`a`,6),ye(59,`3`),F(),ye(60,`
            `),F(),ye(61,`
            `),k(62,`c-page-item`),ye(63,`
              `),k(64,`a`,6),ye(65,`Next`),F(),ye(66,`
            `),F(),ye(67,`
          `),F(),ye(68,`
        `),F(),ye(69,`
      `),F(),ye(70,`
    `),F(),ye(71,`
  `),F(),ye(72,`
  `),k(73,`c-col`,0),ye(74,`
    `),k(75,`c-card`,2),ye(76,`
      `),k(77,`c-card-header`),ye(78,`
        `),k(79,`strong`),ye(80,`Angular Pagination`),F(),ye(81,` `),k(82,`small`),ye(83,`Working with icons`),F(),ye(84,`
      `),F(),ye(85,`
      `),k(86,`c-card-body`),ye(87,`
        `),k(88,`p`,3),ye(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),k(90,`code`),ye(91,`aria`),F(),ye(92,` attributes.
        `),F(),ye(93,`
        `),k(94,`app-docs-example`,7),ye(95,`
          `),k(96,`c-pagination`,5),ye(97,`
            `),k(98,`c-page-item`,8),ye(99,`
              `),k(100,`a`,6)(101,`span`,9),ye(102,`«`),F()(),ye(103,`
            `),F(),ye(104,`
            `),k(105,`c-page-item`),ye(106,`
              `),k(107,`a`,6),ye(108,`1`),F(),ye(109,`
            `),F(),ye(110,`
            `),k(111,`c-page-item`),ye(112,`
              `),k(113,`a`,6),ye(114,`2`),F(),ye(115,`
            `),F(),ye(116,`
            `),k(117,`c-page-item`),ye(118,`
              `),k(119,`a`,6),ye(120,`3`),F(),ye(121,`
            `),F(),ye(122,`
            `),k(123,`c-page-item`,10),ye(124,`
              `),k(125,`a`,6)(126,`span`,9),ye(127,`»`),F()(),ye(128,`
            `),F(),ye(129,`
          `),F(),ye(130,`
        `),F(),ye(131,`
      `),F(),ye(132,`
    `),F(),ye(133,`
  `),F(),ye(134,`
  `),k(135,`c-col`,0),ye(136,`
    `),k(137,`c-card`,2),ye(138,`
      `),k(139,`c-card-header`),ye(140,`
        `),k(141,`strong`),ye(142,`Angular Pagination`),F(),ye(143,` `),k(144,`small`),ye(145,`Disabled and active states`),F(),ye(146,`
      `),F(),ye(147,`
      `),k(148,`c-card-body`),ye(149,`
        `),k(150,`p`,3),ye(151,`
          Pagination links are customizable for different circumstances. Use
          `),k(152,`code`),ye(153,`disabled`),F(),ye(154,` for links that appear un-clickable and `),k(155,`code`),ye(156,`.active`),F(),ye(157,` to
          indicate the current page.
        `),F(),ye(158,`
        `),k(159,`p`,3),ye(160,`
          While the `),k(161,`code`),ye(162,`disabled`),F(),ye(163,` prop uses `),k(164,`code`),ye(165,`pointer-events: none`),F(),ye(166,` to
          `),k(167,`em`),ye(168,`try`),F(),ye(169,` to disable the link functionality of `),k(170,`code`),ye(171,`<a>`),F(),ye(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),k(173,`code`),ye(174,`tabindex="-1"`),F(),ye(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),F(),ye(176,`
        `),k(177,`app-docs-example`,11),ye(178,`
          `),k(179,`c-pagination`,5),ye(180,`
            `),k(181,`c-page-item`,12),ye(182,`
              `),k(183,`a`,6)(184,`span`,9),ye(185,`«`),F()(),ye(186,`
            `),F(),ye(187,`
            `),k(188,`c-page-item`,13),ye(189,`
              `),k(190,`a`,6),ye(191,`1`),F(),ye(192,`
            `),F(),ye(193,`
            `),k(194,`c-page-item`),ye(195,`
              `),k(196,`a`,6),ye(197,`2`),F(),ye(198,`
            `),F(),ye(199,`
            `),k(200,`c-page-item`),ye(201,`
              `),k(202,`a`,6),ye(203,`3`),F(),ye(204,`
            `),F(),ye(205,`
            `),k(206,`c-page-item`,10),ye(207,`
              `),k(208,`a`,6)(209,`span`,9),ye(210,`»`),F()(),ye(211,`
            `),F(),ye(212,`
          `),F(),ye(213,`
        `),F(),ye(214,`
      `),F(),ye(215,`
    `),F(),ye(216,`
  `),F(),ye(217,`
  `),k(218,`c-col`,0),ye(219,`
    `),k(220,`c-card`,2),ye(221,`
      `),k(222,`c-card-header`),ye(223,`
        `),k(224,`strong`),ye(225,`Angular Pagination`),F(),ye(226,` `),k(227,`small`),ye(228,`Sizing`),F(),ye(229,`
      `),F(),ye(230,`
      `),k(231,`c-card-body`),ye(232,`
        `),k(233,`p`,3),ye(234,`
          Fancy larger or smaller pagination? Add `),k(235,`code`),ye(236,`sizing="lg"`),F(),ye(237,` or
          `),k(238,`code`),ye(239,`sizing="sm"`),F(),ye(240,` for additional sizes.
        `),F(),ye(241,`
        `),k(242,`app-docs-example`,14),ye(243,`
          `),k(244,`c-pagination`,15),ye(245,`
            `),k(246,`c-page-item`),ye(247,`
              `),k(248,`a`,6),ye(249,`Previous`),F(),ye(250,`
            `),F(),ye(251,`
            `),k(252,`c-page-item`),ye(253,`
              `),k(254,`a`,6),ye(255,`1`),F(),ye(256,`
            `),F(),ye(257,`
            `),k(258,`c-page-item`),ye(259,`
              `),k(260,`a`,6),ye(261,`2`),F(),ye(262,`
            `),F(),ye(263,`
            `),k(264,`c-page-item`),ye(265,`
              `),k(266,`a`,6),ye(267,`3`),F(),ye(268,`
            `),F(),ye(269,`
            `),k(270,`c-page-item`),ye(271,`
              `),k(272,`a`,6),ye(273,`Next`),F(),ye(274,`
            `),F(),ye(275,`
          `),F(),ye(276,`
        `),F(),ye(277,`
        `),k(278,`app-docs-example`,14),ye(279,`
          `),k(280,`c-pagination`,16),ye(281,`
            `),k(282,`c-page-item`),ye(283,`
              `),k(284,`a`,6),ye(285,`Previous`),F(),ye(286,`
            `),F(),ye(287,`
            `),k(288,`c-page-item`),ye(289,`
              `),k(290,`a`,6),ye(291,`1`),F(),ye(292,`
            `),F(),ye(293,`
            `),k(294,`c-page-item`),ye(295,`
              `),k(296,`a`,6),ye(297,`2`),F(),ye(298,`
            `),F(),ye(299,`
            `),k(300,`c-page-item`),ye(301,`
              `),k(302,`a`,6),ye(303,`3`),F(),ye(304,`
            `),F(),ye(305,`
            `),k(306,`c-page-item`),ye(307,`
              `),k(308,`a`,6),ye(309,`Next`),F(),ye(310,`
            `),F(),ye(311,`
          `),F(),ye(312,`
        `),F(),ye(313,`
      `),F(),ye(314,`
    `),F(),ye(315,`
  `),F(),ye(316,`
  `),k(317,`c-col`,0),ye(318,`
    `),k(319,`c-card`,2),ye(320,`
      `),k(321,`c-card-header`),ye(322,`
        `),k(323,`strong`),ye(324,`Angular Pagination`),F(),ye(325,` `),k(326,`small`),ye(327,`Alignment`),F(),ye(328,`
      `),F(),ye(329,`
      `),k(330,`c-card-body`),ye(331,`
        `),k(332,`p`,3),ye(333,`
          Change the alignment of pagination components with
          `),k(334,`a`,17),ye(335,`flexbox utilities`),F(),ye(336,`.
        `),F(),ye(337,`
        `),k(338,`app-docs-example`,18),ye(339,`
          `),k(340,`c-pagination`,19),ye(341,`
            `),k(342,`c-page-item`,20),ye(343,`
              `),k(344,`a`,6),ye(345,`Previous`),F(),ye(346,`
            `),F(),ye(347,`
            `),k(348,`c-page-item`),ye(349,`
              `),k(350,`a`,6),ye(351,`1`),F(),ye(352,`
            `),F(),ye(353,`
            `),k(354,`c-page-item`),ye(355,`
              `),k(356,`a`,6),ye(357,`2`),F(),ye(358,`
            `),F(),ye(359,`
            `),k(360,`c-page-item`),ye(361,`
              `),k(362,`a`,6),ye(363,`3`),F(),ye(364,`
            `),F(),ye(365,`
            `),k(366,`c-page-item`),ye(367,`
              `),k(368,`a`,6),ye(369,`Next`),F(),ye(370,`
            `),F(),ye(371,`
          `),F(),ye(372,`
        `),F(),ye(373,`
        `),k(374,`app-docs-example`,18),ye(375,`
          `),k(376,`c-pagination`,21),ye(377,`
            `),k(378,`c-page-item`,20),ye(379,`
              `),k(380,`a`,6),ye(381,`Previous`),F(),ye(382,`
            `),F(),ye(383,`
            `),k(384,`c-page-item`),ye(385,`
              `),k(386,`a`,6),ye(387,`1`),F(),ye(388,`
            `),F(),ye(389,`
            `),k(390,`c-page-item`),ye(391,`
              `),k(392,`a`,6),ye(393,`2`),F(),ye(394,`
            `),F(),ye(395,`
            `),k(396,`c-page-item`),ye(397,`
              `),k(398,`a`,6),ye(399,`3`),F(),ye(400,`
            `),F(),ye(401,`
            `),k(402,`c-page-item`),ye(403,`
              `),k(404,`a`,6),ye(405,`Next`),F(),ye(406,`
            `),F(),ye(407,`
          `),F(),ye(408,`
        `),F(),ye(409,`
      `),F(),ye(410,`
    `),F(),ye(411,`
  `),F(),ye(412,`
`),F()),m&2&&(_(40),V(`routerLink`,fn(39,l)),_(6),V(`routerLink`,fn(40,l)),_(6),V(`routerLink`,fn(41,l)),_(6),V(`routerLink`,fn(42,l)),_(6),V(`routerLink`,fn(43,l)),_(36),V(`routerLink`,fn(44,l)),_(7),V(`routerLink`,fn(45,l)),_(6),V(`routerLink`,fn(46,l)),_(6),V(`routerLink`,fn(47,l)),_(6),V(`routerLink`,fn(48,l)),_(56),V(`disabled`,!0),_(2),V(`routerLink`,fn(49,l)),_(5),V(`active`,!0),_(2),V(`routerLink`,fn(50,l)),_(6),V(`routerLink`,fn(51,l)),_(6),V(`routerLink`,fn(52,l)),_(6),V(`routerLink`,fn(53,l)),_(40),V(`routerLink`,fn(54,l)),_(6),V(`routerLink`,fn(55,l)),_(6),V(`routerLink`,fn(56,l)),_(6),V(`routerLink`,fn(57,l)),_(6),V(`routerLink`,fn(58,l)),_(12),V(`routerLink`,fn(59,l)),_(6),V(`routerLink`,fn(60,l)),_(6),V(`routerLink`,fn(61,l)),_(6),V(`routerLink`,fn(62,l)),_(6),V(`routerLink`,fn(63,l)),_(34),V(`disabled`,!0),_(2),V(`routerLink`,fn(64,l)),_(6),V(`routerLink`,fn(65,l)),_(6),V(`routerLink`,fn(66,l)),_(6),V(`routerLink`,fn(67,l)),_(6),V(`routerLink`,fn(68,l)),_(10),V(`disabled`,!0),_(2),V(`routerLink`,fn(69,l)),_(6),V(`routerLink`,fn(70,l)),_(6),V(`routerLink`,fn(71,l)),_(6),V(`routerLink`,fn(72,l)),_(6),V(`routerLink`,fn(73,l)))},dependencies:[Mse,UH,Ba,IH,ja,E$1,Wse,Gse,ZN,Xi,c],encapsulation:2})}};export{f as PaginationsComponent};