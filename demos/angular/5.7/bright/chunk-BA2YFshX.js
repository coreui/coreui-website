import{Ii as zw,Rr as nu,Yr as rC,_i as vD,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{B as JS,Nt as WF,O as GF,_t as Ro,ar as vF,ir as ux,st as On,ut as Po,yt as Sd}from"./main-MVDKXBFI.js";import{t as c}from"./chunk-D-NA798B.js";import{t as I}from"./chunk-DPxRpEgm.js";import"./chunk-yn2whyKM.js";import"./chunk-B0N1zF-G.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=zw({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Pagination`),nu(),Wb(12,`
      `),nu(),Wb(13,`
      `),rs(14,`c-card-body`),Wb(15,`
        `),rs(16,`p`,3),Wb(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),rs(18,`code`),Wb(19,`<nav>`),nu(),Wb(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),nu(),Wb(21,`
        `),rs(22,`p`,3),Wb(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),rs(24,`code`),Wb(25,`aria-label`),nu(),Wb(26,` for the
          `),rs(27,`code`),Wb(28,`<nav>`),nu(),Wb(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),rs(30,`code`),Wb(31,`aria-label="Search results pages"`),nu(),Wb(32,`.
        `),nu(),Wb(33,`
        `),rs(34,`app-docs-example`,4),Wb(35,`
          `),rs(36,`c-pagination`,5),Wb(37,`
            `),rs(38,`c-page-item`),Wb(39,`
              `),rs(40,`a`,6),Wb(41,`Previous`),nu(),Wb(42,`
            `),nu(),Wb(43,`
            `),rs(44,`c-page-item`),Wb(45,`
              `),rs(46,`a`,6),Wb(47,`1`),nu(),Wb(48,`
            `),nu(),Wb(49,`
            `),rs(50,`c-page-item`),Wb(51,`
              `),rs(52,`a`,6),Wb(53,`2`),nu(),Wb(54,`
            `),nu(),Wb(55,`
            `),rs(56,`c-page-item`),Wb(57,`
              `),rs(58,`a`,6),Wb(59,`3`),nu(),Wb(60,`
            `),nu(),Wb(61,`
            `),rs(62,`c-page-item`),Wb(63,`
              `),rs(64,`a`,6),Wb(65,`Next`),nu(),Wb(66,`
            `),nu(),Wb(67,`
          `),nu(),Wb(68,`
        `),nu(),Wb(69,`
      `),nu(),Wb(70,`
    `),nu(),Wb(71,`
  `),nu(),Wb(72,`
  `),rs(73,`c-col`,0),Wb(74,`
    `),rs(75,`c-card`,2),Wb(76,`
      `),rs(77,`c-card-header`),Wb(78,`
        `),rs(79,`strong`),Wb(80,`Angular Pagination`),nu(),Wb(81,` `),rs(82,`small`),Wb(83,`Working with icons`),nu(),Wb(84,`
      `),nu(),Wb(85,`
      `),rs(86,`c-card-body`),Wb(87,`
        `),rs(88,`p`,3),Wb(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),rs(90,`code`),Wb(91,`aria`),nu(),Wb(92,` attributes.
        `),nu(),Wb(93,`
        `),rs(94,`app-docs-example`,7),Wb(95,`
          `),rs(96,`c-pagination`,5),Wb(97,`
            `),rs(98,`c-page-item`,8),Wb(99,`
              `),rs(100,`a`,6)(101,`span`,9),Wb(102,`«`),nu()(),Wb(103,`
            `),nu(),Wb(104,`
            `),rs(105,`c-page-item`),Wb(106,`
              `),rs(107,`a`,6),Wb(108,`1`),nu(),Wb(109,`
            `),nu(),Wb(110,`
            `),rs(111,`c-page-item`),Wb(112,`
              `),rs(113,`a`,6),Wb(114,`2`),nu(),Wb(115,`
            `),nu(),Wb(116,`
            `),rs(117,`c-page-item`),Wb(118,`
              `),rs(119,`a`,6),Wb(120,`3`),nu(),Wb(121,`
            `),nu(),Wb(122,`
            `),rs(123,`c-page-item`,10),Wb(124,`
              `),rs(125,`a`,6)(126,`span`,9),Wb(127,`»`),nu()(),Wb(128,`
            `),nu(),Wb(129,`
          `),nu(),Wb(130,`
        `),nu(),Wb(131,`
      `),nu(),Wb(132,`
    `),nu(),Wb(133,`
  `),nu(),Wb(134,`
  `),rs(135,`c-col`,0),Wb(136,`
    `),rs(137,`c-card`,2),Wb(138,`
      `),rs(139,`c-card-header`),Wb(140,`
        `),rs(141,`strong`),Wb(142,`Angular Pagination`),nu(),Wb(143,` `),rs(144,`small`),Wb(145,`Disabled and active states`),nu(),Wb(146,`
      `),nu(),Wb(147,`
      `),rs(148,`c-card-body`),Wb(149,`
        `),rs(150,`p`,3),Wb(151,`
          Pagination links are customizable for different circumstances. Use
          `),rs(152,`code`),Wb(153,`disabled`),nu(),Wb(154,` for links that appear un-clickable and `),rs(155,`code`),Wb(156,`.active`),nu(),Wb(157,` to
          indicate the current page.
        `),nu(),Wb(158,`
        `),rs(159,`p`,3),Wb(160,`
          While the `),rs(161,`code`),Wb(162,`disabled`),nu(),Wb(163,` prop uses `),rs(164,`code`),Wb(165,`pointer-events: none`),nu(),Wb(166,` to
          `),rs(167,`em`),Wb(168,`try`),nu(),Wb(169,` to disable the link functionality of `),rs(170,`code`),Wb(171,`<a>`),nu(),Wb(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),rs(173,`code`),Wb(174,`tabindex="-1"`),nu(),Wb(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),nu(),Wb(176,`
        `),rs(177,`app-docs-example`,11),Wb(178,`
          `),rs(179,`c-pagination`,5),Wb(180,`
            `),rs(181,`c-page-item`,12),Wb(182,`
              `),rs(183,`a`,6)(184,`span`,9),Wb(185,`«`),nu()(),Wb(186,`
            `),nu(),Wb(187,`
            `),rs(188,`c-page-item`,13),Wb(189,`
              `),rs(190,`a`,6),Wb(191,`1`),nu(),Wb(192,`
            `),nu(),Wb(193,`
            `),rs(194,`c-page-item`),Wb(195,`
              `),rs(196,`a`,6),Wb(197,`2`),nu(),Wb(198,`
            `),nu(),Wb(199,`
            `),rs(200,`c-page-item`),Wb(201,`
              `),rs(202,`a`,6),Wb(203,`3`),nu(),Wb(204,`
            `),nu(),Wb(205,`
            `),rs(206,`c-page-item`,10),Wb(207,`
              `),rs(208,`a`,6)(209,`span`,9),Wb(210,`»`),nu()(),Wb(211,`
            `),nu(),Wb(212,`
          `),nu(),Wb(213,`
        `),nu(),Wb(214,`
      `),nu(),Wb(215,`
    `),nu(),Wb(216,`
  `),nu(),Wb(217,`
  `),rs(218,`c-col`,0),Wb(219,`
    `),rs(220,`c-card`,2),Wb(221,`
      `),rs(222,`c-card-header`),Wb(223,`
        `),rs(224,`strong`),Wb(225,`Angular Pagination`),nu(),Wb(226,` `),rs(227,`small`),Wb(228,`Sizing`),nu(),Wb(229,`
      `),nu(),Wb(230,`
      `),rs(231,`c-card-body`),Wb(232,`
        `),rs(233,`p`,3),Wb(234,`
          Fancy larger or smaller pagination? Add `),rs(235,`code`),Wb(236,`sizing="lg"`),nu(),Wb(237,` or
          `),rs(238,`code`),Wb(239,`sizing="sm"`),nu(),Wb(240,` for additional sizes.
        `),nu(),Wb(241,`
        `),rs(242,`app-docs-example`,14),Wb(243,`
          `),rs(244,`c-pagination`,15),Wb(245,`
            `),rs(246,`c-page-item`),Wb(247,`
              `),rs(248,`a`,6),Wb(249,`Previous`),nu(),Wb(250,`
            `),nu(),Wb(251,`
            `),rs(252,`c-page-item`),Wb(253,`
              `),rs(254,`a`,6),Wb(255,`1`),nu(),Wb(256,`
            `),nu(),Wb(257,`
            `),rs(258,`c-page-item`),Wb(259,`
              `),rs(260,`a`,6),Wb(261,`2`),nu(),Wb(262,`
            `),nu(),Wb(263,`
            `),rs(264,`c-page-item`),Wb(265,`
              `),rs(266,`a`,6),Wb(267,`3`),nu(),Wb(268,`
            `),nu(),Wb(269,`
            `),rs(270,`c-page-item`),Wb(271,`
              `),rs(272,`a`,6),Wb(273,`Next`),nu(),Wb(274,`
            `),nu(),Wb(275,`
          `),nu(),Wb(276,`
        `),nu(),Wb(277,`
        `),rs(278,`app-docs-example`,14),Wb(279,`
          `),rs(280,`c-pagination`,16),Wb(281,`
            `),rs(282,`c-page-item`),Wb(283,`
              `),rs(284,`a`,6),Wb(285,`Previous`),nu(),Wb(286,`
            `),nu(),Wb(287,`
            `),rs(288,`c-page-item`),Wb(289,`
              `),rs(290,`a`,6),Wb(291,`1`),nu(),Wb(292,`
            `),nu(),Wb(293,`
            `),rs(294,`c-page-item`),Wb(295,`
              `),rs(296,`a`,6),Wb(297,`2`),nu(),Wb(298,`
            `),nu(),Wb(299,`
            `),rs(300,`c-page-item`),Wb(301,`
              `),rs(302,`a`,6),Wb(303,`3`),nu(),Wb(304,`
            `),nu(),Wb(305,`
            `),rs(306,`c-page-item`),Wb(307,`
              `),rs(308,`a`,6),Wb(309,`Next`),nu(),Wb(310,`
            `),nu(),Wb(311,`
          `),nu(),Wb(312,`
        `),nu(),Wb(313,`
      `),nu(),Wb(314,`
    `),nu(),Wb(315,`
  `),nu(),Wb(316,`
  `),rs(317,`c-col`,0),Wb(318,`
    `),rs(319,`c-card`,2),Wb(320,`
      `),rs(321,`c-card-header`),Wb(322,`
        `),rs(323,`strong`),Wb(324,`Angular Pagination`),nu(),Wb(325,` `),rs(326,`small`),Wb(327,`Alignment`),nu(),Wb(328,`
      `),nu(),Wb(329,`
      `),rs(330,`c-card-body`),Wb(331,`
        `),rs(332,`p`,3),Wb(333,`
          Change the alignment of pagination components with
          `),rs(334,`a`,17),Wb(335,`flexbox utilities`),nu(),Wb(336,`.
        `),nu(),Wb(337,`
        `),rs(338,`app-docs-example`,18),Wb(339,`
          `),rs(340,`c-pagination`,19),Wb(341,`
            `),rs(342,`c-page-item`,20),Wb(343,`
              `),rs(344,`a`,6),Wb(345,`Previous`),nu(),Wb(346,`
            `),nu(),Wb(347,`
            `),rs(348,`c-page-item`),Wb(349,`
              `),rs(350,`a`,6),Wb(351,`1`),nu(),Wb(352,`
            `),nu(),Wb(353,`
            `),rs(354,`c-page-item`),Wb(355,`
              `),rs(356,`a`,6),Wb(357,`2`),nu(),Wb(358,`
            `),nu(),Wb(359,`
            `),rs(360,`c-page-item`),Wb(361,`
              `),rs(362,`a`,6),Wb(363,`3`),nu(),Wb(364,`
            `),nu(),Wb(365,`
            `),rs(366,`c-page-item`),Wb(367,`
              `),rs(368,`a`,6),Wb(369,`Next`),nu(),Wb(370,`
            `),nu(),Wb(371,`
          `),nu(),Wb(372,`
        `),nu(),Wb(373,`
        `),rs(374,`app-docs-example`,18),Wb(375,`
          `),rs(376,`c-pagination`,21),Wb(377,`
            `),rs(378,`c-page-item`,20),Wb(379,`
              `),rs(380,`a`,6),Wb(381,`Previous`),nu(),Wb(382,`
            `),nu(),Wb(383,`
            `),rs(384,`c-page-item`),Wb(385,`
              `),rs(386,`a`,6),Wb(387,`1`),nu(),Wb(388,`
            `),nu(),Wb(389,`
            `),rs(390,`c-page-item`),Wb(391,`
              `),rs(392,`a`,6),Wb(393,`2`),nu(),Wb(394,`
            `),nu(),Wb(395,`
            `),rs(396,`c-page-item`),Wb(397,`
              `),rs(398,`a`,6),Wb(399,`3`),nu(),Wb(400,`
            `),nu(),Wb(401,`
            `),rs(402,`c-page-item`),Wb(403,`
              `),rs(404,`a`,6),Wb(405,`Next`),nu(),Wb(406,`
            `),nu(),Wb(407,`
          `),nu(),Wb(408,`
        `),nu(),Wb(409,`
      `),nu(),Wb(410,`
    `),nu(),Wb(411,`
  `),nu(),Wb(412,`
`),nu()),m&2&&(vD(40),Wg(`routerLink`,rC(39,l)),vD(6),Wg(`routerLink`,rC(40,l)),vD(6),Wg(`routerLink`,rC(41,l)),vD(6),Wg(`routerLink`,rC(42,l)),vD(6),Wg(`routerLink`,rC(43,l)),vD(36),Wg(`routerLink`,rC(44,l)),vD(7),Wg(`routerLink`,rC(45,l)),vD(6),Wg(`routerLink`,rC(46,l)),vD(6),Wg(`routerLink`,rC(47,l)),vD(6),Wg(`routerLink`,rC(48,l)),vD(56),Wg(`disabled`,!0),vD(2),Wg(`routerLink`,rC(49,l)),vD(5),Wg(`active`,!0),vD(2),Wg(`routerLink`,rC(50,l)),vD(6),Wg(`routerLink`,rC(51,l)),vD(6),Wg(`routerLink`,rC(52,l)),vD(6),Wg(`routerLink`,rC(53,l)),vD(40),Wg(`routerLink`,rC(54,l)),vD(6),Wg(`routerLink`,rC(55,l)),vD(6),Wg(`routerLink`,rC(56,l)),vD(6),Wg(`routerLink`,rC(57,l)),vD(6),Wg(`routerLink`,rC(58,l)),vD(12),Wg(`routerLink`,rC(59,l)),vD(6),Wg(`routerLink`,rC(60,l)),vD(6),Wg(`routerLink`,rC(61,l)),vD(6),Wg(`routerLink`,rC(62,l)),vD(6),Wg(`routerLink`,rC(63,l)),vD(34),Wg(`disabled`,!0),vD(2),Wg(`routerLink`,rC(64,l)),vD(6),Wg(`routerLink`,rC(65,l)),vD(6),Wg(`routerLink`,rC(66,l)),vD(6),Wg(`routerLink`,rC(67,l)),vD(6),Wg(`routerLink`,rC(68,l)),vD(10),Wg(`disabled`,!0),vD(2),Wg(`routerLink`,rC(69,l)),vD(6),Wg(`routerLink`,rC(70,l)),vD(6),Wg(`routerLink`,rC(71,l)),vD(6),Wg(`routerLink`,rC(72,l)),vD(6),Wg(`routerLink`,rC(73,l)))},dependencies:[vF,ux,Ro,JS,Po,I,GF,WF,Sd,On,c],encapsulation:2})}};export{f as PaginationsComponent};