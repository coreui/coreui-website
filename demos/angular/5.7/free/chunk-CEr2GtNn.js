import{Dn as Yte,Dt as P,L as Ew,Mn as Zte,Si as rP,Vr as ke,Wn as be,X as I,Yt as Ste,an as V,ar as dP,cn as Vi,jn as Zt,or as da,ut as L,v as C,zi as ua}from"./main-JT3YLBAZ.js";import{t as E}from"./chunk-S_NItMQM.js";import{t as c}from"./chunk-BnIj8_pR.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=I({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L$1){m&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Pagination`),P(),be(12,`
      `),P(),be(13,`
      `),L(14,`c-card-body`),be(15,`
        `),L(16,`p`,3),be(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),L(18,`code`),be(19,`<nav>`),P(),be(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),P(),be(21,`
        `),L(22,`p`,3),be(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),L(24,`code`),be(25,`aria-label`),P(),be(26,` for the
          `),L(27,`code`),be(28,`<nav>`),P(),be(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),L(30,`code`),be(31,`aria-label="Search results pages"`),P(),be(32,`.
        `),P(),be(33,`
        `),L(34,`app-docs-example`,4),be(35,`
          `),L(36,`c-pagination`,5),be(37,`
            `),L(38,`c-page-item`),be(39,`
              `),L(40,`a`,6),be(41,`Previous`),P(),be(42,`
            `),P(),be(43,`
            `),L(44,`c-page-item`),be(45,`
              `),L(46,`a`,6),be(47,`1`),P(),be(48,`
            `),P(),be(49,`
            `),L(50,`c-page-item`),be(51,`
              `),L(52,`a`,6),be(53,`2`),P(),be(54,`
            `),P(),be(55,`
            `),L(56,`c-page-item`),be(57,`
              `),L(58,`a`,6),be(59,`3`),P(),be(60,`
            `),P(),be(61,`
            `),L(62,`c-page-item`),be(63,`
              `),L(64,`a`,6),be(65,`Next`),P(),be(66,`
            `),P(),be(67,`
          `),P(),be(68,`
        `),P(),be(69,`
      `),P(),be(70,`
    `),P(),be(71,`
  `),P(),be(72,`
  `),L(73,`c-col`,0),be(74,`
    `),L(75,`c-card`,2),be(76,`
      `),L(77,`c-card-header`),be(78,`
        `),L(79,`strong`),be(80,`Angular Pagination`),P(),be(81,` `),L(82,`small`),be(83,`Working with icons`),P(),be(84,`
      `),P(),be(85,`
      `),L(86,`c-card-body`),be(87,`
        `),L(88,`p`,3),be(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),L(90,`code`),be(91,`aria`),P(),be(92,` attributes.
        `),P(),be(93,`
        `),L(94,`app-docs-example`,7),be(95,`
          `),L(96,`c-pagination`,5),be(97,`
            `),L(98,`c-page-item`,8),be(99,`
              `),L(100,`a`,6)(101,`span`,9),be(102,`«`),P()(),be(103,`
            `),P(),be(104,`
            `),L(105,`c-page-item`),be(106,`
              `),L(107,`a`,6),be(108,`1`),P(),be(109,`
            `),P(),be(110,`
            `),L(111,`c-page-item`),be(112,`
              `),L(113,`a`,6),be(114,`2`),P(),be(115,`
            `),P(),be(116,`
            `),L(117,`c-page-item`),be(118,`
              `),L(119,`a`,6),be(120,`3`),P(),be(121,`
            `),P(),be(122,`
            `),L(123,`c-page-item`,10),be(124,`
              `),L(125,`a`,6)(126,`span`,9),be(127,`»`),P()(),be(128,`
            `),P(),be(129,`
          `),P(),be(130,`
        `),P(),be(131,`
      `),P(),be(132,`
    `),P(),be(133,`
  `),P(),be(134,`
  `),L(135,`c-col`,0),be(136,`
    `),L(137,`c-card`,2),be(138,`
      `),L(139,`c-card-header`),be(140,`
        `),L(141,`strong`),be(142,`Angular Pagination`),P(),be(143,` `),L(144,`small`),be(145,`Disabled and active states`),P(),be(146,`
      `),P(),be(147,`
      `),L(148,`c-card-body`),be(149,`
        `),L(150,`p`,3),be(151,`
          Pagination links are customizable for different circumstances. Use
          `),L(152,`code`),be(153,`disabled`),P(),be(154,` for links that appear un-clickable and `),L(155,`code`),be(156,`.active`),P(),be(157,` to
          indicate the current page.
        `),P(),be(158,`
        `),L(159,`p`,3),be(160,`
          While the `),L(161,`code`),be(162,`disabled`),P(),be(163,` prop uses `),L(164,`code`),be(165,`pointer-events: none`),P(),be(166,` to
          `),L(167,`em`),be(168,`try`),P(),be(169,` to disable the link functionality of `),L(170,`code`),be(171,`<a>`),P(),be(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),L(173,`code`),be(174,`tabindex="-1"`),P(),be(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),P(),be(176,`
        `),L(177,`app-docs-example`,11),be(178,`
          `),L(179,`c-pagination`,5),be(180,`
            `),L(181,`c-page-item`,12),be(182,`
              `),L(183,`a`,6)(184,`span`,9),be(185,`«`),P()(),be(186,`
            `),P(),be(187,`
            `),L(188,`c-page-item`,13),be(189,`
              `),L(190,`a`,6),be(191,`1`),P(),be(192,`
            `),P(),be(193,`
            `),L(194,`c-page-item`),be(195,`
              `),L(196,`a`,6),be(197,`2`),P(),be(198,`
            `),P(),be(199,`
            `),L(200,`c-page-item`),be(201,`
              `),L(202,`a`,6),be(203,`3`),P(),be(204,`
            `),P(),be(205,`
            `),L(206,`c-page-item`,10),be(207,`
              `),L(208,`a`,6)(209,`span`,9),be(210,`»`),P()(),be(211,`
            `),P(),be(212,`
          `),P(),be(213,`
        `),P(),be(214,`
      `),P(),be(215,`
    `),P(),be(216,`
  `),P(),be(217,`
  `),L(218,`c-col`,0),be(219,`
    `),L(220,`c-card`,2),be(221,`
      `),L(222,`c-card-header`),be(223,`
        `),L(224,`strong`),be(225,`Angular Pagination`),P(),be(226,` `),L(227,`small`),be(228,`Sizing`),P(),be(229,`
      `),P(),be(230,`
      `),L(231,`c-card-body`),be(232,`
        `),L(233,`p`,3),be(234,`
          Fancy larger or smaller pagination? Add `),L(235,`code`),be(236,`sizing="lg"`),P(),be(237,` or
          `),L(238,`code`),be(239,`sizing="sm"`),P(),be(240,` for additional sizes.
        `),P(),be(241,`
        `),L(242,`app-docs-example`,14),be(243,`
          `),L(244,`c-pagination`,15),be(245,`
            `),L(246,`c-page-item`),be(247,`
              `),L(248,`a`,6),be(249,`Previous`),P(),be(250,`
            `),P(),be(251,`
            `),L(252,`c-page-item`),be(253,`
              `),L(254,`a`,6),be(255,`1`),P(),be(256,`
            `),P(),be(257,`
            `),L(258,`c-page-item`),be(259,`
              `),L(260,`a`,6),be(261,`2`),P(),be(262,`
            `),P(),be(263,`
            `),L(264,`c-page-item`),be(265,`
              `),L(266,`a`,6),be(267,`3`),P(),be(268,`
            `),P(),be(269,`
            `),L(270,`c-page-item`),be(271,`
              `),L(272,`a`,6),be(273,`Next`),P(),be(274,`
            `),P(),be(275,`
          `),P(),be(276,`
        `),P(),be(277,`
        `),L(278,`app-docs-example`,14),be(279,`
          `),L(280,`c-pagination`,16),be(281,`
            `),L(282,`c-page-item`),be(283,`
              `),L(284,`a`,6),be(285,`Previous`),P(),be(286,`
            `),P(),be(287,`
            `),L(288,`c-page-item`),be(289,`
              `),L(290,`a`,6),be(291,`1`),P(),be(292,`
            `),P(),be(293,`
            `),L(294,`c-page-item`),be(295,`
              `),L(296,`a`,6),be(297,`2`),P(),be(298,`
            `),P(),be(299,`
            `),L(300,`c-page-item`),be(301,`
              `),L(302,`a`,6),be(303,`3`),P(),be(304,`
            `),P(),be(305,`
            `),L(306,`c-page-item`),be(307,`
              `),L(308,`a`,6),be(309,`Next`),P(),be(310,`
            `),P(),be(311,`
          `),P(),be(312,`
        `),P(),be(313,`
      `),P(),be(314,`
    `),P(),be(315,`
  `),P(),be(316,`
  `),L(317,`c-col`,0),be(318,`
    `),L(319,`c-card`,2),be(320,`
      `),L(321,`c-card-header`),be(322,`
        `),L(323,`strong`),be(324,`Angular Pagination`),P(),be(325,` `),L(326,`small`),be(327,`Alignment`),P(),be(328,`
      `),P(),be(329,`
      `),L(330,`c-card-body`),be(331,`
        `),L(332,`p`,3),be(333,`
          Change the alignment of pagination components with
          `),L(334,`a`,17),be(335,`flexbox utilities`),P(),be(336,`.
        `),P(),be(337,`
        `),L(338,`app-docs-example`,18),be(339,`
          `),L(340,`c-pagination`,19),be(341,`
            `),L(342,`c-page-item`,20),be(343,`
              `),L(344,`a`,6),be(345,`Previous`),P(),be(346,`
            `),P(),be(347,`
            `),L(348,`c-page-item`),be(349,`
              `),L(350,`a`,6),be(351,`1`),P(),be(352,`
            `),P(),be(353,`
            `),L(354,`c-page-item`),be(355,`
              `),L(356,`a`,6),be(357,`2`),P(),be(358,`
            `),P(),be(359,`
            `),L(360,`c-page-item`),be(361,`
              `),L(362,`a`,6),be(363,`3`),P(),be(364,`
            `),P(),be(365,`
            `),L(366,`c-page-item`),be(367,`
              `),L(368,`a`,6),be(369,`Next`),P(),be(370,`
            `),P(),be(371,`
          `),P(),be(372,`
        `),P(),be(373,`
        `),L(374,`app-docs-example`,18),be(375,`
          `),L(376,`c-pagination`,21),be(377,`
            `),L(378,`c-page-item`,20),be(379,`
              `),L(380,`a`,6),be(381,`Previous`),P(),be(382,`
            `),P(),be(383,`
            `),L(384,`c-page-item`),be(385,`
              `),L(386,`a`,6),be(387,`1`),P(),be(388,`
            `),P(),be(389,`
            `),L(390,`c-page-item`),be(391,`
              `),L(392,`a`,6),be(393,`2`),P(),be(394,`
            `),P(),be(395,`
            `),L(396,`c-page-item`),be(397,`
              `),L(398,`a`,6),be(399,`3`),P(),be(400,`
            `),P(),be(401,`
            `),L(402,`c-page-item`),be(403,`
              `),L(404,`a`,6),be(405,`Next`),P(),be(406,`
            `),P(),be(407,`
          `),P(),be(408,`
        `),P(),be(409,`
      `),P(),be(410,`
    `),P(),be(411,`
  `),P(),be(412,`
`),P()),m&2&&(C(40),V(`routerLink`,Zt(39,l)),C(6),V(`routerLink`,Zt(40,l)),C(6),V(`routerLink`,Zt(41,l)),C(6),V(`routerLink`,Zt(42,l)),C(6),V(`routerLink`,Zt(43,l)),C(36),V(`routerLink`,Zt(44,l)),C(7),V(`routerLink`,Zt(45,l)),C(6),V(`routerLink`,Zt(46,l)),C(6),V(`routerLink`,Zt(47,l)),C(6),V(`routerLink`,Zt(48,l)),C(56),V(`disabled`,!0),C(2),V(`routerLink`,Zt(49,l)),C(5),V(`active`,!0),C(2),V(`routerLink`,Zt(50,l)),C(6),V(`routerLink`,Zt(51,l)),C(6),V(`routerLink`,Zt(52,l)),C(6),V(`routerLink`,Zt(53,l)),C(40),V(`routerLink`,Zt(54,l)),C(6),V(`routerLink`,Zt(55,l)),C(6),V(`routerLink`,Zt(56,l)),C(6),V(`routerLink`,Zt(57,l)),C(6),V(`routerLink`,Zt(58,l)),C(12),V(`routerLink`,Zt(59,l)),C(6),V(`routerLink`,Zt(60,l)),C(6),V(`routerLink`,Zt(61,l)),C(6),V(`routerLink`,Zt(62,l)),C(6),V(`routerLink`,Zt(63,l)),C(34),V(`disabled`,!0),C(2),V(`routerLink`,Zt(64,l)),C(6),V(`routerLink`,Zt(65,l)),C(6),V(`routerLink`,Zt(66,l)),C(6),V(`routerLink`,Zt(67,l)),C(6),V(`routerLink`,Zt(68,l)),C(10),V(`disabled`,!0),C(2),V(`routerLink`,Zt(69,l)),C(6),V(`routerLink`,Zt(70,l)),C(6),V(`routerLink`,Zt(71,l)),C(6),V(`routerLink`,Zt(72,l)),C(6),V(`routerLink`,Zt(73,l)))},dependencies:[Ste,dP,ua,rP,da,E,Yte,Zte,Ew,Vi,c],encapsulation:2})}};export{f as PaginationsComponent};