import{Dt as bu,Ft as fT,H as Nv,Hn as Ch,Jn as Ew,Q as Ri,W as OT,Xr as aw,_ as FT,fa as yD,kn as xi,la as wh,ni as cl,q as Pv,r as $t,vr as Oi,zn as BI}from"./main-WBU6EW3E.js";import{t as E}from"./chunk-D1ovLIZZ.js";import{t as c}from"./chunk-BNlMJs6j.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=yD({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Pagination`),cl(),aw(12,`
      `),cl(),aw(13,`
      `),Oi(14,`c-card-body`),aw(15,`
        `),Oi(16,`p`,3),aw(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),Oi(18,`code`),aw(19,`<nav>`),cl(),aw(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),cl(),aw(21,`
        `),Oi(22,`p`,3),aw(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),Oi(24,`code`),aw(25,`aria-label`),cl(),aw(26,` for the
          `),Oi(27,`code`),aw(28,`<nav>`),cl(),aw(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),Oi(30,`code`),aw(31,`aria-label="Search results pages"`),cl(),aw(32,`.
        `),cl(),aw(33,`
        `),Oi(34,`app-docs-example`,4),aw(35,`
          `),Oi(36,`c-pagination`,5),aw(37,`
            `),Oi(38,`c-page-item`),aw(39,`
              `),Oi(40,`a`,6),aw(41,`Previous`),cl(),aw(42,`
            `),cl(),aw(43,`
            `),Oi(44,`c-page-item`),aw(45,`
              `),Oi(46,`a`,6),aw(47,`1`),cl(),aw(48,`
            `),cl(),aw(49,`
            `),Oi(50,`c-page-item`),aw(51,`
              `),Oi(52,`a`,6),aw(53,`2`),cl(),aw(54,`
            `),cl(),aw(55,`
            `),Oi(56,`c-page-item`),aw(57,`
              `),Oi(58,`a`,6),aw(59,`3`),cl(),aw(60,`
            `),cl(),aw(61,`
            `),Oi(62,`c-page-item`),aw(63,`
              `),Oi(64,`a`,6),aw(65,`Next`),cl(),aw(66,`
            `),cl(),aw(67,`
          `),cl(),aw(68,`
        `),cl(),aw(69,`
      `),cl(),aw(70,`
    `),cl(),aw(71,`
  `),cl(),aw(72,`
  `),Oi(73,`c-col`,0),aw(74,`
    `),Oi(75,`c-card`,2),aw(76,`
      `),Oi(77,`c-card-header`),aw(78,`
        `),Oi(79,`strong`),aw(80,`Angular Pagination`),cl(),aw(81,` `),Oi(82,`small`),aw(83,`Working with icons`),cl(),aw(84,`
      `),cl(),aw(85,`
      `),Oi(86,`c-card-body`),aw(87,`
        `),Oi(88,`p`,3),aw(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),Oi(90,`code`),aw(91,`aria`),cl(),aw(92,` attributes.
        `),cl(),aw(93,`
        `),Oi(94,`app-docs-example`,7),aw(95,`
          `),Oi(96,`c-pagination`,5),aw(97,`
            `),Oi(98,`c-page-item`,8),aw(99,`
              `),Oi(100,`a`,6)(101,`span`,9),aw(102,`«`),cl()(),aw(103,`
            `),cl(),aw(104,`
            `),Oi(105,`c-page-item`),aw(106,`
              `),Oi(107,`a`,6),aw(108,`1`),cl(),aw(109,`
            `),cl(),aw(110,`
            `),Oi(111,`c-page-item`),aw(112,`
              `),Oi(113,`a`,6),aw(114,`2`),cl(),aw(115,`
            `),cl(),aw(116,`
            `),Oi(117,`c-page-item`),aw(118,`
              `),Oi(119,`a`,6),aw(120,`3`),cl(),aw(121,`
            `),cl(),aw(122,`
            `),Oi(123,`c-page-item`,10),aw(124,`
              `),Oi(125,`a`,6)(126,`span`,9),aw(127,`»`),cl()(),aw(128,`
            `),cl(),aw(129,`
          `),cl(),aw(130,`
        `),cl(),aw(131,`
      `),cl(),aw(132,`
    `),cl(),aw(133,`
  `),cl(),aw(134,`
  `),Oi(135,`c-col`,0),aw(136,`
    `),Oi(137,`c-card`,2),aw(138,`
      `),Oi(139,`c-card-header`),aw(140,`
        `),Oi(141,`strong`),aw(142,`Angular Pagination`),cl(),aw(143,` `),Oi(144,`small`),aw(145,`Disabled and active states`),cl(),aw(146,`
      `),cl(),aw(147,`
      `),Oi(148,`c-card-body`),aw(149,`
        `),Oi(150,`p`,3),aw(151,`
          Pagination links are customizable for different circumstances. Use
          `),Oi(152,`code`),aw(153,`disabled`),cl(),aw(154,` for links that appear un-clickable and `),Oi(155,`code`),aw(156,`.active`),cl(),aw(157,` to
          indicate the current page.
        `),cl(),aw(158,`
        `),Oi(159,`p`,3),aw(160,`
          While the `),Oi(161,`code`),aw(162,`disabled`),cl(),aw(163,` prop uses `),Oi(164,`code`),aw(165,`pointer-events: none`),cl(),aw(166,` to
          `),Oi(167,`em`),aw(168,`try`),cl(),aw(169,` to disable the link functionality of `),Oi(170,`code`),aw(171,`<a>`),cl(),aw(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),Oi(173,`code`),aw(174,`tabindex="-1"`),cl(),aw(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),cl(),aw(176,`
        `),Oi(177,`app-docs-example`,11),aw(178,`
          `),Oi(179,`c-pagination`,5),aw(180,`
            `),Oi(181,`c-page-item`,12),aw(182,`
              `),Oi(183,`a`,6)(184,`span`,9),aw(185,`«`),cl()(),aw(186,`
            `),cl(),aw(187,`
            `),Oi(188,`c-page-item`,13),aw(189,`
              `),Oi(190,`a`,6),aw(191,`1`),cl(),aw(192,`
            `),cl(),aw(193,`
            `),Oi(194,`c-page-item`),aw(195,`
              `),Oi(196,`a`,6),aw(197,`2`),cl(),aw(198,`
            `),cl(),aw(199,`
            `),Oi(200,`c-page-item`),aw(201,`
              `),Oi(202,`a`,6),aw(203,`3`),cl(),aw(204,`
            `),cl(),aw(205,`
            `),Oi(206,`c-page-item`,10),aw(207,`
              `),Oi(208,`a`,6)(209,`span`,9),aw(210,`»`),cl()(),aw(211,`
            `),cl(),aw(212,`
          `),cl(),aw(213,`
        `),cl(),aw(214,`
      `),cl(),aw(215,`
    `),cl(),aw(216,`
  `),cl(),aw(217,`
  `),Oi(218,`c-col`,0),aw(219,`
    `),Oi(220,`c-card`,2),aw(221,`
      `),Oi(222,`c-card-header`),aw(223,`
        `),Oi(224,`strong`),aw(225,`Angular Pagination`),cl(),aw(226,` `),Oi(227,`small`),aw(228,`Sizing`),cl(),aw(229,`
      `),cl(),aw(230,`
      `),Oi(231,`c-card-body`),aw(232,`
        `),Oi(233,`p`,3),aw(234,`
          Fancy larger or smaller pagination? Add `),Oi(235,`code`),aw(236,`sizing="lg"`),cl(),aw(237,` or
          `),Oi(238,`code`),aw(239,`sizing="sm"`),cl(),aw(240,` for additional sizes.
        `),cl(),aw(241,`
        `),Oi(242,`app-docs-example`,14),aw(243,`
          `),Oi(244,`c-pagination`,15),aw(245,`
            `),Oi(246,`c-page-item`),aw(247,`
              `),Oi(248,`a`,6),aw(249,`Previous`),cl(),aw(250,`
            `),cl(),aw(251,`
            `),Oi(252,`c-page-item`),aw(253,`
              `),Oi(254,`a`,6),aw(255,`1`),cl(),aw(256,`
            `),cl(),aw(257,`
            `),Oi(258,`c-page-item`),aw(259,`
              `),Oi(260,`a`,6),aw(261,`2`),cl(),aw(262,`
            `),cl(),aw(263,`
            `),Oi(264,`c-page-item`),aw(265,`
              `),Oi(266,`a`,6),aw(267,`3`),cl(),aw(268,`
            `),cl(),aw(269,`
            `),Oi(270,`c-page-item`),aw(271,`
              `),Oi(272,`a`,6),aw(273,`Next`),cl(),aw(274,`
            `),cl(),aw(275,`
          `),cl(),aw(276,`
        `),cl(),aw(277,`
        `),Oi(278,`app-docs-example`,14),aw(279,`
          `),Oi(280,`c-pagination`,16),aw(281,`
            `),Oi(282,`c-page-item`),aw(283,`
              `),Oi(284,`a`,6),aw(285,`Previous`),cl(),aw(286,`
            `),cl(),aw(287,`
            `),Oi(288,`c-page-item`),aw(289,`
              `),Oi(290,`a`,6),aw(291,`1`),cl(),aw(292,`
            `),cl(),aw(293,`
            `),Oi(294,`c-page-item`),aw(295,`
              `),Oi(296,`a`,6),aw(297,`2`),cl(),aw(298,`
            `),cl(),aw(299,`
            `),Oi(300,`c-page-item`),aw(301,`
              `),Oi(302,`a`,6),aw(303,`3`),cl(),aw(304,`
            `),cl(),aw(305,`
            `),Oi(306,`c-page-item`),aw(307,`
              `),Oi(308,`a`,6),aw(309,`Next`),cl(),aw(310,`
            `),cl(),aw(311,`
          `),cl(),aw(312,`
        `),cl(),aw(313,`
      `),cl(),aw(314,`
    `),cl(),aw(315,`
  `),cl(),aw(316,`
  `),Oi(317,`c-col`,0),aw(318,`
    `),Oi(319,`c-card`,2),aw(320,`
      `),Oi(321,`c-card-header`),aw(322,`
        `),Oi(323,`strong`),aw(324,`Angular Pagination`),cl(),aw(325,` `),Oi(326,`small`),aw(327,`Alignment`),cl(),aw(328,`
      `),cl(),aw(329,`
      `),Oi(330,`c-card-body`),aw(331,`
        `),Oi(332,`p`,3),aw(333,`
          Change the alignment of pagination components with
          `),Oi(334,`a`,17),aw(335,`flexbox utilities`),cl(),aw(336,`.
        `),cl(),aw(337,`
        `),Oi(338,`app-docs-example`,18),aw(339,`
          `),Oi(340,`c-pagination`,19),aw(341,`
            `),Oi(342,`c-page-item`,20),aw(343,`
              `),Oi(344,`a`,6),aw(345,`Previous`),cl(),aw(346,`
            `),cl(),aw(347,`
            `),Oi(348,`c-page-item`),aw(349,`
              `),Oi(350,`a`,6),aw(351,`1`),cl(),aw(352,`
            `),cl(),aw(353,`
            `),Oi(354,`c-page-item`),aw(355,`
              `),Oi(356,`a`,6),aw(357,`2`),cl(),aw(358,`
            `),cl(),aw(359,`
            `),Oi(360,`c-page-item`),aw(361,`
              `),Oi(362,`a`,6),aw(363,`3`),cl(),aw(364,`
            `),cl(),aw(365,`
            `),Oi(366,`c-page-item`),aw(367,`
              `),Oi(368,`a`,6),aw(369,`Next`),cl(),aw(370,`
            `),cl(),aw(371,`
          `),cl(),aw(372,`
        `),cl(),aw(373,`
        `),Oi(374,`app-docs-example`,18),aw(375,`
          `),Oi(376,`c-pagination`,21),aw(377,`
            `),Oi(378,`c-page-item`,20),aw(379,`
              `),Oi(380,`a`,6),aw(381,`Previous`),cl(),aw(382,`
            `),cl(),aw(383,`
            `),Oi(384,`c-page-item`),aw(385,`
              `),Oi(386,`a`,6),aw(387,`1`),cl(),aw(388,`
            `),cl(),aw(389,`
            `),Oi(390,`c-page-item`),aw(391,`
              `),Oi(392,`a`,6),aw(393,`2`),cl(),aw(394,`
            `),cl(),aw(395,`
            `),Oi(396,`c-page-item`),aw(397,`
              `),Oi(398,`a`,6),aw(399,`3`),cl(),aw(400,`
            `),cl(),aw(401,`
            `),Oi(402,`c-page-item`),aw(403,`
              `),Oi(404,`a`,6),aw(405,`Next`),cl(),aw(406,`
            `),cl(),aw(407,`
          `),cl(),aw(408,`
        `),cl(),aw(409,`
      `),cl(),aw(410,`
    `),cl(),aw(411,`
  `),cl(),aw(412,`
`),cl()),m&2&&(BI(40),wh(`routerLink`,Ew(39,l)),BI(6),wh(`routerLink`,Ew(40,l)),BI(6),wh(`routerLink`,Ew(41,l)),BI(6),wh(`routerLink`,Ew(42,l)),BI(6),wh(`routerLink`,Ew(43,l)),BI(36),wh(`routerLink`,Ew(44,l)),BI(7),wh(`routerLink`,Ew(45,l)),BI(6),wh(`routerLink`,Ew(46,l)),BI(6),wh(`routerLink`,Ew(47,l)),BI(6),wh(`routerLink`,Ew(48,l)),BI(56),wh(`disabled`,!0),BI(2),wh(`routerLink`,Ew(49,l)),BI(5),wh(`active`,!0),BI(2),wh(`routerLink`,Ew(50,l)),BI(6),wh(`routerLink`,Ew(51,l)),BI(6),wh(`routerLink`,Ew(52,l)),BI(6),wh(`routerLink`,Ew(53,l)),BI(40),wh(`routerLink`,Ew(54,l)),BI(6),wh(`routerLink`,Ew(55,l)),BI(6),wh(`routerLink`,Ew(56,l)),BI(6),wh(`routerLink`,Ew(57,l)),BI(6),wh(`routerLink`,Ew(58,l)),BI(12),wh(`routerLink`,Ew(59,l)),BI(6),wh(`routerLink`,Ew(60,l)),BI(6),wh(`routerLink`,Ew(61,l)),BI(6),wh(`routerLink`,Ew(62,l)),BI(6),wh(`routerLink`,Ew(63,l)),BI(34),wh(`disabled`,!0),BI(2),wh(`routerLink`,Ew(64,l)),BI(6),wh(`routerLink`,Ew(65,l)),BI(6),wh(`routerLink`,Ew(66,l)),BI(6),wh(`routerLink`,Ew(67,l)),BI(6),wh(`routerLink`,Ew(68,l)),BI(10),wh(`disabled`,!0),BI(2),wh(`routerLink`,Ew(69,l)),BI(6),wh(`routerLink`,Ew(70,l)),BI(6),wh(`routerLink`,Ew(71,l)),BI(6),wh(`routerLink`,Ew(72,l)),BI(6),wh(`routerLink`,Ew(73,l)))},dependencies:[fT,Pv,xi,Nv,Ri,E,OT,FT,bu,$t,c],encapsulation:2})}};export{f as PaginationsComponent};