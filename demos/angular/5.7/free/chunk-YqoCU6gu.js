import{Dt as O,Ft as Pa,Gi as un,Hi as tse,Mn as Zi,Wt as Re,Yt as S,_n as VV,ai as nH,bt as MN,en as T,gn as V,gt as La,j as F,qt as Roe,si as nse,ua as ye}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=T({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Pagination`),F(),ye(12,`
      `),F(),ye(13,`
      `),O(14,`c-card-body`),ye(15,`
        `),O(16,`p`,3),ye(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),O(18,`code`),ye(19,`<nav>`),F(),ye(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),F(),ye(21,`
        `),O(22,`p`,3),ye(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),O(24,`code`),ye(25,`aria-label`),F(),ye(26,` for the
          `),O(27,`code`),ye(28,`<nav>`),F(),ye(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),O(30,`code`),ye(31,`aria-label="Search results pages"`),F(),ye(32,`.
        `),F(),ye(33,`
        `),O(34,`app-docs-example`,4),ye(35,`
          `),O(36,`c-pagination`,5),ye(37,`
            `),O(38,`c-page-item`),ye(39,`
              `),O(40,`a`,6),ye(41,`Previous`),F(),ye(42,`
            `),F(),ye(43,`
            `),O(44,`c-page-item`),ye(45,`
              `),O(46,`a`,6),ye(47,`1`),F(),ye(48,`
            `),F(),ye(49,`
            `),O(50,`c-page-item`),ye(51,`
              `),O(52,`a`,6),ye(53,`2`),F(),ye(54,`
            `),F(),ye(55,`
            `),O(56,`c-page-item`),ye(57,`
              `),O(58,`a`,6),ye(59,`3`),F(),ye(60,`
            `),F(),ye(61,`
            `),O(62,`c-page-item`),ye(63,`
              `),O(64,`a`,6),ye(65,`Next`),F(),ye(66,`
            `),F(),ye(67,`
          `),F(),ye(68,`
        `),F(),ye(69,`
      `),F(),ye(70,`
    `),F(),ye(71,`
  `),F(),ye(72,`
  `),O(73,`c-col`,0),ye(74,`
    `),O(75,`c-card`,2),ye(76,`
      `),O(77,`c-card-header`),ye(78,`
        `),O(79,`strong`),ye(80,`Angular Pagination`),F(),ye(81,` `),O(82,`small`),ye(83,`Working with icons`),F(),ye(84,`
      `),F(),ye(85,`
      `),O(86,`c-card-body`),ye(87,`
        `),O(88,`p`,3),ye(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),O(90,`code`),ye(91,`aria`),F(),ye(92,` attributes.
        `),F(),ye(93,`
        `),O(94,`app-docs-example`,7),ye(95,`
          `),O(96,`c-pagination`,5),ye(97,`
            `),O(98,`c-page-item`,8),ye(99,`
              `),O(100,`a`,6)(101,`span`,9),ye(102,`«`),F()(),ye(103,`
            `),F(),ye(104,`
            `),O(105,`c-page-item`),ye(106,`
              `),O(107,`a`,6),ye(108,`1`),F(),ye(109,`
            `),F(),ye(110,`
            `),O(111,`c-page-item`),ye(112,`
              `),O(113,`a`,6),ye(114,`2`),F(),ye(115,`
            `),F(),ye(116,`
            `),O(117,`c-page-item`),ye(118,`
              `),O(119,`a`,6),ye(120,`3`),F(),ye(121,`
            `),F(),ye(122,`
            `),O(123,`c-page-item`,10),ye(124,`
              `),O(125,`a`,6)(126,`span`,9),ye(127,`»`),F()(),ye(128,`
            `),F(),ye(129,`
          `),F(),ye(130,`
        `),F(),ye(131,`
      `),F(),ye(132,`
    `),F(),ye(133,`
  `),F(),ye(134,`
  `),O(135,`c-col`,0),ye(136,`
    `),O(137,`c-card`,2),ye(138,`
      `),O(139,`c-card-header`),ye(140,`
        `),O(141,`strong`),ye(142,`Angular Pagination`),F(),ye(143,` `),O(144,`small`),ye(145,`Disabled and active states`),F(),ye(146,`
      `),F(),ye(147,`
      `),O(148,`c-card-body`),ye(149,`
        `),O(150,`p`,3),ye(151,`
          Pagination links are customizable for different circumstances. Use
          `),O(152,`code`),ye(153,`disabled`),F(),ye(154,` for links that appear un-clickable and `),O(155,`code`),ye(156,`.active`),F(),ye(157,` to
          indicate the current page.
        `),F(),ye(158,`
        `),O(159,`p`,3),ye(160,`
          While the `),O(161,`code`),ye(162,`disabled`),F(),ye(163,` prop uses `),O(164,`code`),ye(165,`pointer-events: none`),F(),ye(166,` to
          `),O(167,`em`),ye(168,`try`),F(),ye(169,` to disable the link functionality of `),O(170,`code`),ye(171,`<a>`),F(),ye(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),O(173,`code`),ye(174,`tabindex="-1"`),F(),ye(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),F(),ye(176,`
        `),O(177,`app-docs-example`,11),ye(178,`
          `),O(179,`c-pagination`,5),ye(180,`
            `),O(181,`c-page-item`,12),ye(182,`
              `),O(183,`a`,6)(184,`span`,9),ye(185,`«`),F()(),ye(186,`
            `),F(),ye(187,`
            `),O(188,`c-page-item`,13),ye(189,`
              `),O(190,`a`,6),ye(191,`1`),F(),ye(192,`
            `),F(),ye(193,`
            `),O(194,`c-page-item`),ye(195,`
              `),O(196,`a`,6),ye(197,`2`),F(),ye(198,`
            `),F(),ye(199,`
            `),O(200,`c-page-item`),ye(201,`
              `),O(202,`a`,6),ye(203,`3`),F(),ye(204,`
            `),F(),ye(205,`
            `),O(206,`c-page-item`,10),ye(207,`
              `),O(208,`a`,6)(209,`span`,9),ye(210,`»`),F()(),ye(211,`
            `),F(),ye(212,`
          `),F(),ye(213,`
        `),F(),ye(214,`
      `),F(),ye(215,`
    `),F(),ye(216,`
  `),F(),ye(217,`
  `),O(218,`c-col`,0),ye(219,`
    `),O(220,`c-card`,2),ye(221,`
      `),O(222,`c-card-header`),ye(223,`
        `),O(224,`strong`),ye(225,`Angular Pagination`),F(),ye(226,` `),O(227,`small`),ye(228,`Sizing`),F(),ye(229,`
      `),F(),ye(230,`
      `),O(231,`c-card-body`),ye(232,`
        `),O(233,`p`,3),ye(234,`
          Fancy larger or smaller pagination? Add `),O(235,`code`),ye(236,`sizing="lg"`),F(),ye(237,` or
          `),O(238,`code`),ye(239,`sizing="sm"`),F(),ye(240,` for additional sizes.
        `),F(),ye(241,`
        `),O(242,`app-docs-example`,14),ye(243,`
          `),O(244,`c-pagination`,15),ye(245,`
            `),O(246,`c-page-item`),ye(247,`
              `),O(248,`a`,6),ye(249,`Previous`),F(),ye(250,`
            `),F(),ye(251,`
            `),O(252,`c-page-item`),ye(253,`
              `),O(254,`a`,6),ye(255,`1`),F(),ye(256,`
            `),F(),ye(257,`
            `),O(258,`c-page-item`),ye(259,`
              `),O(260,`a`,6),ye(261,`2`),F(),ye(262,`
            `),F(),ye(263,`
            `),O(264,`c-page-item`),ye(265,`
              `),O(266,`a`,6),ye(267,`3`),F(),ye(268,`
            `),F(),ye(269,`
            `),O(270,`c-page-item`),ye(271,`
              `),O(272,`a`,6),ye(273,`Next`),F(),ye(274,`
            `),F(),ye(275,`
          `),F(),ye(276,`
        `),F(),ye(277,`
        `),O(278,`app-docs-example`,14),ye(279,`
          `),O(280,`c-pagination`,16),ye(281,`
            `),O(282,`c-page-item`),ye(283,`
              `),O(284,`a`,6),ye(285,`Previous`),F(),ye(286,`
            `),F(),ye(287,`
            `),O(288,`c-page-item`),ye(289,`
              `),O(290,`a`,6),ye(291,`1`),F(),ye(292,`
            `),F(),ye(293,`
            `),O(294,`c-page-item`),ye(295,`
              `),O(296,`a`,6),ye(297,`2`),F(),ye(298,`
            `),F(),ye(299,`
            `),O(300,`c-page-item`),ye(301,`
              `),O(302,`a`,6),ye(303,`3`),F(),ye(304,`
            `),F(),ye(305,`
            `),O(306,`c-page-item`),ye(307,`
              `),O(308,`a`,6),ye(309,`Next`),F(),ye(310,`
            `),F(),ye(311,`
          `),F(),ye(312,`
        `),F(),ye(313,`
      `),F(),ye(314,`
    `),F(),ye(315,`
  `),F(),ye(316,`
  `),O(317,`c-col`,0),ye(318,`
    `),O(319,`c-card`,2),ye(320,`
      `),O(321,`c-card-header`),ye(322,`
        `),O(323,`strong`),ye(324,`Angular Pagination`),F(),ye(325,` `),O(326,`small`),ye(327,`Alignment`),F(),ye(328,`
      `),F(),ye(329,`
      `),O(330,`c-card-body`),ye(331,`
        `),O(332,`p`,3),ye(333,`
          Change the alignment of pagination components with
          `),O(334,`a`,17),ye(335,`flexbox utilities`),F(),ye(336,`.
        `),F(),ye(337,`
        `),O(338,`app-docs-example`,18),ye(339,`
          `),O(340,`c-pagination`,19),ye(341,`
            `),O(342,`c-page-item`,20),ye(343,`
              `),O(344,`a`,6),ye(345,`Previous`),F(),ye(346,`
            `),F(),ye(347,`
            `),O(348,`c-page-item`),ye(349,`
              `),O(350,`a`,6),ye(351,`1`),F(),ye(352,`
            `),F(),ye(353,`
            `),O(354,`c-page-item`),ye(355,`
              `),O(356,`a`,6),ye(357,`2`),F(),ye(358,`
            `),F(),ye(359,`
            `),O(360,`c-page-item`),ye(361,`
              `),O(362,`a`,6),ye(363,`3`),F(),ye(364,`
            `),F(),ye(365,`
            `),O(366,`c-page-item`),ye(367,`
              `),O(368,`a`,6),ye(369,`Next`),F(),ye(370,`
            `),F(),ye(371,`
          `),F(),ye(372,`
        `),F(),ye(373,`
        `),O(374,`app-docs-example`,18),ye(375,`
          `),O(376,`c-pagination`,21),ye(377,`
            `),O(378,`c-page-item`,20),ye(379,`
              `),O(380,`a`,6),ye(381,`Previous`),F(),ye(382,`
            `),F(),ye(383,`
            `),O(384,`c-page-item`),ye(385,`
              `),O(386,`a`,6),ye(387,`1`),F(),ye(388,`
            `),F(),ye(389,`
            `),O(390,`c-page-item`),ye(391,`
              `),O(392,`a`,6),ye(393,`2`),F(),ye(394,`
            `),F(),ye(395,`
            `),O(396,`c-page-item`),ye(397,`
              `),O(398,`a`,6),ye(399,`3`),F(),ye(400,`
            `),F(),ye(401,`
            `),O(402,`c-page-item`),ye(403,`
              `),O(404,`a`,6),ye(405,`Next`),F(),ye(406,`
            `),F(),ye(407,`
          `),F(),ye(408,`
        `),F(),ye(409,`
      `),F(),ye(410,`
    `),F(),ye(411,`
  `),F(),ye(412,`
`),F()),m&2&&(S(40),V(`routerLink`,un(39,l)),S(6),V(`routerLink`,un(40,l)),S(6),V(`routerLink`,un(41,l)),S(6),V(`routerLink`,un(42,l)),S(6),V(`routerLink`,un(43,l)),S(36),V(`routerLink`,un(44,l)),S(7),V(`routerLink`,un(45,l)),S(6),V(`routerLink`,un(46,l)),S(6),V(`routerLink`,un(47,l)),S(6),V(`routerLink`,un(48,l)),S(56),V(`disabled`,!0),S(2),V(`routerLink`,un(49,l)),S(5),V(`active`,!0),S(2),V(`routerLink`,un(50,l)),S(6),V(`routerLink`,un(51,l)),S(6),V(`routerLink`,un(52,l)),S(6),V(`routerLink`,un(53,l)),S(40),V(`routerLink`,un(54,l)),S(6),V(`routerLink`,un(55,l)),S(6),V(`routerLink`,un(56,l)),S(6),V(`routerLink`,un(57,l)),S(6),V(`routerLink`,un(58,l)),S(12),V(`routerLink`,un(59,l)),S(6),V(`routerLink`,un(60,l)),S(6),V(`routerLink`,un(61,l)),S(6),V(`routerLink`,un(62,l)),S(6),V(`routerLink`,un(63,l)),S(34),V(`disabled`,!0),S(2),V(`routerLink`,un(64,l)),S(6),V(`routerLink`,un(65,l)),S(6),V(`routerLink`,un(66,l)),S(6),V(`routerLink`,un(67,l)),S(6),V(`routerLink`,un(68,l)),S(10),V(`disabled`,!0),S(2),V(`routerLink`,un(69,l)),S(6),V(`routerLink`,un(70,l)),S(6),V(`routerLink`,un(71,l)),S(6),V(`routerLink`,un(72,l)),S(6),V(`routerLink`,un(73,l)))},dependencies:[Roe,nH,Pa,VV,La,E,nse,tse,MN,Zi,c],encapsulation:2})}};export{f as PaginationsComponent};