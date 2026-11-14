import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{C as Cle,Ei as ri,Ii as tA,M as F,Mt as Oe,Tr as gn,Wi as uU,Zt as S,a as $le,bi as qle,c as AU,mt as L,ot as Ka,rn as U,sa as x,un as Wa,x as Ce}from"./main-VQBM3OGL.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=x({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L$1){m&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Pagination`),L(),Ce(12,`
      `),L(),Ce(13,`
      `),F(14,`c-card-body`),Ce(15,`
        `),F(16,`p`,3),Ce(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),F(18,`code`),Ce(19,`<nav>`),L(),Ce(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),L(),Ce(21,`
        `),F(22,`p`,3),Ce(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),F(24,`code`),Ce(25,`aria-label`),L(),Ce(26,` for the
          `),F(27,`code`),Ce(28,`<nav>`),L(),Ce(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),F(30,`code`),Ce(31,`aria-label="Search results pages"`),L(),Ce(32,`.
        `),L(),Ce(33,`
        `),F(34,`app-docs-example`,4),Ce(35,`
          `),F(36,`c-pagination`,5),Ce(37,`
            `),F(38,`c-page-item`),Ce(39,`
              `),F(40,`a`,6),Ce(41,`Previous`),L(),Ce(42,`
            `),L(),Ce(43,`
            `),F(44,`c-page-item`),Ce(45,`
              `),F(46,`a`,6),Ce(47,`1`),L(),Ce(48,`
            `),L(),Ce(49,`
            `),F(50,`c-page-item`),Ce(51,`
              `),F(52,`a`,6),Ce(53,`2`),L(),Ce(54,`
            `),L(),Ce(55,`
            `),F(56,`c-page-item`),Ce(57,`
              `),F(58,`a`,6),Ce(59,`3`),L(),Ce(60,`
            `),L(),Ce(61,`
            `),F(62,`c-page-item`),Ce(63,`
              `),F(64,`a`,6),Ce(65,`Next`),L(),Ce(66,`
            `),L(),Ce(67,`
          `),L(),Ce(68,`
        `),L(),Ce(69,`
      `),L(),Ce(70,`
    `),L(),Ce(71,`
  `),L(),Ce(72,`
  `),F(73,`c-col`,0),Ce(74,`
    `),F(75,`c-card`,2),Ce(76,`
      `),F(77,`c-card-header`),Ce(78,`
        `),F(79,`strong`),Ce(80,`Angular Pagination`),L(),Ce(81,` `),F(82,`small`),Ce(83,`Working with icons`),L(),Ce(84,`
      `),L(),Ce(85,`
      `),F(86,`c-card-body`),Ce(87,`
        `),F(88,`p`,3),Ce(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),F(90,`code`),Ce(91,`aria`),L(),Ce(92,` attributes.
        `),L(),Ce(93,`
        `),F(94,`app-docs-example`,7),Ce(95,`
          `),F(96,`c-pagination`,5),Ce(97,`
            `),F(98,`c-page-item`,8),Ce(99,`
              `),F(100,`a`,6)(101,`span`,9),Ce(102,`«`),L()(),Ce(103,`
            `),L(),Ce(104,`
            `),F(105,`c-page-item`),Ce(106,`
              `),F(107,`a`,6),Ce(108,`1`),L(),Ce(109,`
            `),L(),Ce(110,`
            `),F(111,`c-page-item`),Ce(112,`
              `),F(113,`a`,6),Ce(114,`2`),L(),Ce(115,`
            `),L(),Ce(116,`
            `),F(117,`c-page-item`),Ce(118,`
              `),F(119,`a`,6),Ce(120,`3`),L(),Ce(121,`
            `),L(),Ce(122,`
            `),F(123,`c-page-item`,10),Ce(124,`
              `),F(125,`a`,6)(126,`span`,9),Ce(127,`»`),L()(),Ce(128,`
            `),L(),Ce(129,`
          `),L(),Ce(130,`
        `),L(),Ce(131,`
      `),L(),Ce(132,`
    `),L(),Ce(133,`
  `),L(),Ce(134,`
  `),F(135,`c-col`,0),Ce(136,`
    `),F(137,`c-card`,2),Ce(138,`
      `),F(139,`c-card-header`),Ce(140,`
        `),F(141,`strong`),Ce(142,`Angular Pagination`),L(),Ce(143,` `),F(144,`small`),Ce(145,`Disabled and active states`),L(),Ce(146,`
      `),L(),Ce(147,`
      `),F(148,`c-card-body`),Ce(149,`
        `),F(150,`p`,3),Ce(151,`
          Pagination links are customizable for different circumstances. Use
          `),F(152,`code`),Ce(153,`disabled`),L(),Ce(154,` for links that appear un-clickable and `),F(155,`code`),Ce(156,`.active`),L(),Ce(157,` to
          indicate the current page.
        `),L(),Ce(158,`
        `),F(159,`p`,3),Ce(160,`
          While the `),F(161,`code`),Ce(162,`disabled`),L(),Ce(163,` prop uses `),F(164,`code`),Ce(165,`pointer-events: none`),L(),Ce(166,` to
          `),F(167,`em`),Ce(168,`try`),L(),Ce(169,` to disable the link functionality of `),F(170,`code`),Ce(171,`<a>`),L(),Ce(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),F(173,`code`),Ce(174,`tabindex="-1"`),L(),Ce(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),L(),Ce(176,`
        `),F(177,`app-docs-example`,11),Ce(178,`
          `),F(179,`c-pagination`,5),Ce(180,`
            `),F(181,`c-page-item`,12),Ce(182,`
              `),F(183,`a`,6)(184,`span`,9),Ce(185,`«`),L()(),Ce(186,`
            `),L(),Ce(187,`
            `),F(188,`c-page-item`,13),Ce(189,`
              `),F(190,`a`,6),Ce(191,`1`),L(),Ce(192,`
            `),L(),Ce(193,`
            `),F(194,`c-page-item`),Ce(195,`
              `),F(196,`a`,6),Ce(197,`2`),L(),Ce(198,`
            `),L(),Ce(199,`
            `),F(200,`c-page-item`),Ce(201,`
              `),F(202,`a`,6),Ce(203,`3`),L(),Ce(204,`
            `),L(),Ce(205,`
            `),F(206,`c-page-item`,10),Ce(207,`
              `),F(208,`a`,6)(209,`span`,9),Ce(210,`»`),L()(),Ce(211,`
            `),L(),Ce(212,`
          `),L(),Ce(213,`
        `),L(),Ce(214,`
      `),L(),Ce(215,`
    `),L(),Ce(216,`
  `),L(),Ce(217,`
  `),F(218,`c-col`,0),Ce(219,`
    `),F(220,`c-card`,2),Ce(221,`
      `),F(222,`c-card-header`),Ce(223,`
        `),F(224,`strong`),Ce(225,`Angular Pagination`),L(),Ce(226,` `),F(227,`small`),Ce(228,`Sizing`),L(),Ce(229,`
      `),L(),Ce(230,`
      `),F(231,`c-card-body`),Ce(232,`
        `),F(233,`p`,3),Ce(234,`
          Fancy larger or smaller pagination? Add `),F(235,`code`),Ce(236,`sizing="lg"`),L(),Ce(237,` or
          `),F(238,`code`),Ce(239,`sizing="sm"`),L(),Ce(240,` for additional sizes.
        `),L(),Ce(241,`
        `),F(242,`app-docs-example`,14),Ce(243,`
          `),F(244,`c-pagination`,15),Ce(245,`
            `),F(246,`c-page-item`),Ce(247,`
              `),F(248,`a`,6),Ce(249,`Previous`),L(),Ce(250,`
            `),L(),Ce(251,`
            `),F(252,`c-page-item`),Ce(253,`
              `),F(254,`a`,6),Ce(255,`1`),L(),Ce(256,`
            `),L(),Ce(257,`
            `),F(258,`c-page-item`),Ce(259,`
              `),F(260,`a`,6),Ce(261,`2`),L(),Ce(262,`
            `),L(),Ce(263,`
            `),F(264,`c-page-item`),Ce(265,`
              `),F(266,`a`,6),Ce(267,`3`),L(),Ce(268,`
            `),L(),Ce(269,`
            `),F(270,`c-page-item`),Ce(271,`
              `),F(272,`a`,6),Ce(273,`Next`),L(),Ce(274,`
            `),L(),Ce(275,`
          `),L(),Ce(276,`
        `),L(),Ce(277,`
        `),F(278,`app-docs-example`,14),Ce(279,`
          `),F(280,`c-pagination`,16),Ce(281,`
            `),F(282,`c-page-item`),Ce(283,`
              `),F(284,`a`,6),Ce(285,`Previous`),L(),Ce(286,`
            `),L(),Ce(287,`
            `),F(288,`c-page-item`),Ce(289,`
              `),F(290,`a`,6),Ce(291,`1`),L(),Ce(292,`
            `),L(),Ce(293,`
            `),F(294,`c-page-item`),Ce(295,`
              `),F(296,`a`,6),Ce(297,`2`),L(),Ce(298,`
            `),L(),Ce(299,`
            `),F(300,`c-page-item`),Ce(301,`
              `),F(302,`a`,6),Ce(303,`3`),L(),Ce(304,`
            `),L(),Ce(305,`
            `),F(306,`c-page-item`),Ce(307,`
              `),F(308,`a`,6),Ce(309,`Next`),L(),Ce(310,`
            `),L(),Ce(311,`
          `),L(),Ce(312,`
        `),L(),Ce(313,`
      `),L(),Ce(314,`
    `),L(),Ce(315,`
  `),L(),Ce(316,`
  `),F(317,`c-col`,0),Ce(318,`
    `),F(319,`c-card`,2),Ce(320,`
      `),F(321,`c-card-header`),Ce(322,`
        `),F(323,`strong`),Ce(324,`Angular Pagination`),L(),Ce(325,` `),F(326,`small`),Ce(327,`Alignment`),L(),Ce(328,`
      `),L(),Ce(329,`
      `),F(330,`c-card-body`),Ce(331,`
        `),F(332,`p`,3),Ce(333,`
          Change the alignment of pagination components with
          `),F(334,`a`,17),Ce(335,`flexbox utilities`),L(),Ce(336,`.
        `),L(),Ce(337,`
        `),F(338,`app-docs-example`,18),Ce(339,`
          `),F(340,`c-pagination`,19),Ce(341,`
            `),F(342,`c-page-item`,20),Ce(343,`
              `),F(344,`a`,6),Ce(345,`Previous`),L(),Ce(346,`
            `),L(),Ce(347,`
            `),F(348,`c-page-item`),Ce(349,`
              `),F(350,`a`,6),Ce(351,`1`),L(),Ce(352,`
            `),L(),Ce(353,`
            `),F(354,`c-page-item`),Ce(355,`
              `),F(356,`a`,6),Ce(357,`2`),L(),Ce(358,`
            `),L(),Ce(359,`
            `),F(360,`c-page-item`),Ce(361,`
              `),F(362,`a`,6),Ce(363,`3`),L(),Ce(364,`
            `),L(),Ce(365,`
            `),F(366,`c-page-item`),Ce(367,`
              `),F(368,`a`,6),Ce(369,`Next`),L(),Ce(370,`
            `),L(),Ce(371,`
          `),L(),Ce(372,`
        `),L(),Ce(373,`
        `),F(374,`app-docs-example`,18),Ce(375,`
          `),F(376,`c-pagination`,21),Ce(377,`
            `),F(378,`c-page-item`,20),Ce(379,`
              `),F(380,`a`,6),Ce(381,`Previous`),L(),Ce(382,`
            `),L(),Ce(383,`
            `),F(384,`c-page-item`),Ce(385,`
              `),F(386,`a`,6),Ce(387,`1`),L(),Ce(388,`
            `),L(),Ce(389,`
            `),F(390,`c-page-item`),Ce(391,`
              `),F(392,`a`,6),Ce(393,`2`),L(),Ce(394,`
            `),L(),Ce(395,`
            `),F(396,`c-page-item`),Ce(397,`
              `),F(398,`a`,6),Ce(399,`3`),L(),Ce(400,`
            `),L(),Ce(401,`
            `),F(402,`c-page-item`),Ce(403,`
              `),F(404,`a`,6),Ce(405,`Next`),L(),Ce(406,`
            `),L(),Ce(407,`
          `),L(),Ce(408,`
        `),L(),Ce(409,`
      `),L(),Ce(410,`
    `),L(),Ce(411,`
  `),L(),Ce(412,`
`),L()),m&2&&(S(40),U(`routerLink`,gn(39,l)),S(6),U(`routerLink`,gn(40,l)),S(6),U(`routerLink`,gn(41,l)),S(6),U(`routerLink`,gn(42,l)),S(6),U(`routerLink`,gn(43,l)),S(36),U(`routerLink`,gn(44,l)),S(7),U(`routerLink`,gn(45,l)),S(6),U(`routerLink`,gn(46,l)),S(6),U(`routerLink`,gn(47,l)),S(6),U(`routerLink`,gn(48,l)),S(56),U(`disabled`,!0),S(2),U(`routerLink`,gn(49,l)),S(5),U(`active`,!0),S(2),U(`routerLink`,gn(50,l)),S(6),U(`routerLink`,gn(51,l)),S(6),U(`routerLink`,gn(52,l)),S(6),U(`routerLink`,gn(53,l)),S(40),U(`routerLink`,gn(54,l)),S(6),U(`routerLink`,gn(55,l)),S(6),U(`routerLink`,gn(56,l)),S(6),U(`routerLink`,gn(57,l)),S(6),U(`routerLink`,gn(58,l)),S(12),U(`routerLink`,gn(59,l)),S(6),U(`routerLink`,gn(60,l)),S(6),U(`routerLink`,gn(61,l)),S(6),U(`routerLink`,gn(62,l)),S(6),U(`routerLink`,gn(63,l)),S(34),U(`disabled`,!0),S(2),U(`routerLink`,gn(64,l)),S(6),U(`routerLink`,gn(65,l)),S(6),U(`routerLink`,gn(66,l)),S(6),U(`routerLink`,gn(67,l)),S(6),U(`routerLink`,gn(68,l)),S(10),U(`disabled`,!0),S(2),U(`routerLink`,gn(69,l)),S(6),U(`routerLink`,gn(70,l)),S(6),U(`routerLink`,gn(71,l)),S(6),U(`routerLink`,gn(72,l)),S(6),U(`routerLink`,gn(73,l)))},dependencies:[Cle,AU,Wa,uU,Ka,E,qle,$le,tA,ri,c],encapsulation:2})}};export{f as PaginationsComponent};