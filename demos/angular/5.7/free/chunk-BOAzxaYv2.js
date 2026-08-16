import{Dt as bu,Fi as sl,Ft as fT,H as Nv,Hn as Dh,On as xi,Q as Ri,W as OT,_ as FT,aa as yw,di as hD,fr as Oi,ki as ow,pi as jI,q as Pv,r as $t,xr as Th}from"./main-5IL4V6AK.js";import{i as w}from"./chunk-DoEIP2nP.js";import{t as c}from"./chunk-bmXPd0og.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=hD({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Pagination`),sl(),ow(12,`
      `),sl(),ow(13,`
      `),Oi(14,`c-card-body`),ow(15,`
        `),Oi(16,`p`,3),ow(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),Oi(18,`code`),ow(19,`<nav>`),sl(),ow(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),sl(),ow(21,`
        `),Oi(22,`p`,3),ow(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),Oi(24,`code`),ow(25,`aria-label`),sl(),ow(26,` for the
          `),Oi(27,`code`),ow(28,`<nav>`),sl(),ow(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),Oi(30,`code`),ow(31,`aria-label="Search results pages"`),sl(),ow(32,`.
        `),sl(),ow(33,`
        `),Oi(34,`app-docs-example`,4),ow(35,`
          `),Oi(36,`c-pagination`,5),ow(37,`
            `),Oi(38,`c-page-item`),ow(39,`
              `),Oi(40,`a`,6),ow(41,`Previous`),sl(),ow(42,`
            `),sl(),ow(43,`
            `),Oi(44,`c-page-item`),ow(45,`
              `),Oi(46,`a`,6),ow(47,`1`),sl(),ow(48,`
            `),sl(),ow(49,`
            `),Oi(50,`c-page-item`),ow(51,`
              `),Oi(52,`a`,6),ow(53,`2`),sl(),ow(54,`
            `),sl(),ow(55,`
            `),Oi(56,`c-page-item`),ow(57,`
              `),Oi(58,`a`,6),ow(59,`3`),sl(),ow(60,`
            `),sl(),ow(61,`
            `),Oi(62,`c-page-item`),ow(63,`
              `),Oi(64,`a`,6),ow(65,`Next`),sl(),ow(66,`
            `),sl(),ow(67,`
          `),sl(),ow(68,`
        `),sl(),ow(69,`
      `),sl(),ow(70,`
    `),sl(),ow(71,`
  `),sl(),ow(72,`
  `),Oi(73,`c-col`,0),ow(74,`
    `),Oi(75,`c-card`,2),ow(76,`
      `),Oi(77,`c-card-header`),ow(78,`
        `),Oi(79,`strong`),ow(80,`Angular Pagination`),sl(),ow(81,` `),Oi(82,`small`),ow(83,`Working with icons`),sl(),ow(84,`
      `),sl(),ow(85,`
      `),Oi(86,`c-card-body`),ow(87,`
        `),Oi(88,`p`,3),ow(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),Oi(90,`code`),ow(91,`aria`),sl(),ow(92,` attributes.
        `),sl(),ow(93,`
        `),Oi(94,`app-docs-example`,7),ow(95,`
          `),Oi(96,`c-pagination`,5),ow(97,`
            `),Oi(98,`c-page-item`,8),ow(99,`
              `),Oi(100,`a`,6)(101,`span`,9),ow(102,`«`),sl()(),ow(103,`
            `),sl(),ow(104,`
            `),Oi(105,`c-page-item`),ow(106,`
              `),Oi(107,`a`,6),ow(108,`1`),sl(),ow(109,`
            `),sl(),ow(110,`
            `),Oi(111,`c-page-item`),ow(112,`
              `),Oi(113,`a`,6),ow(114,`2`),sl(),ow(115,`
            `),sl(),ow(116,`
            `),Oi(117,`c-page-item`),ow(118,`
              `),Oi(119,`a`,6),ow(120,`3`),sl(),ow(121,`
            `),sl(),ow(122,`
            `),Oi(123,`c-page-item`,10),ow(124,`
              `),Oi(125,`a`,6)(126,`span`,9),ow(127,`»`),sl()(),ow(128,`
            `),sl(),ow(129,`
          `),sl(),ow(130,`
        `),sl(),ow(131,`
      `),sl(),ow(132,`
    `),sl(),ow(133,`
  `),sl(),ow(134,`
  `),Oi(135,`c-col`,0),ow(136,`
    `),Oi(137,`c-card`,2),ow(138,`
      `),Oi(139,`c-card-header`),ow(140,`
        `),Oi(141,`strong`),ow(142,`Angular Pagination`),sl(),ow(143,` `),Oi(144,`small`),ow(145,`Disabled and active states`),sl(),ow(146,`
      `),sl(),ow(147,`
      `),Oi(148,`c-card-body`),ow(149,`
        `),Oi(150,`p`,3),ow(151,`
          Pagination links are customizable for different circumstances. Use
          `),Oi(152,`code`),ow(153,`disabled`),sl(),ow(154,` for links that appear un-clickable and `),Oi(155,`code`),ow(156,`.active`),sl(),ow(157,` to
          indicate the current page.
        `),sl(),ow(158,`
        `),Oi(159,`p`,3),ow(160,`
          While the `),Oi(161,`code`),ow(162,`disabled`),sl(),ow(163,` prop uses `),Oi(164,`code`),ow(165,`pointer-events: none`),sl(),ow(166,` to
          `),Oi(167,`em`),ow(168,`try`),sl(),ow(169,` to disable the link functionality of `),Oi(170,`code`),ow(171,`<a>`),sl(),ow(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),Oi(173,`code`),ow(174,`tabindex="-1"`),sl(),ow(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),sl(),ow(176,`
        `),Oi(177,`app-docs-example`,11),ow(178,`
          `),Oi(179,`c-pagination`,5),ow(180,`
            `),Oi(181,`c-page-item`,12),ow(182,`
              `),Oi(183,`a`,6)(184,`span`,9),ow(185,`«`),sl()(),ow(186,`
            `),sl(),ow(187,`
            `),Oi(188,`c-page-item`,13),ow(189,`
              `),Oi(190,`a`,6),ow(191,`1`),sl(),ow(192,`
            `),sl(),ow(193,`
            `),Oi(194,`c-page-item`),ow(195,`
              `),Oi(196,`a`,6),ow(197,`2`),sl(),ow(198,`
            `),sl(),ow(199,`
            `),Oi(200,`c-page-item`),ow(201,`
              `),Oi(202,`a`,6),ow(203,`3`),sl(),ow(204,`
            `),sl(),ow(205,`
            `),Oi(206,`c-page-item`,10),ow(207,`
              `),Oi(208,`a`,6)(209,`span`,9),ow(210,`»`),sl()(),ow(211,`
            `),sl(),ow(212,`
          `),sl(),ow(213,`
        `),sl(),ow(214,`
      `),sl(),ow(215,`
    `),sl(),ow(216,`
  `),sl(),ow(217,`
  `),Oi(218,`c-col`,0),ow(219,`
    `),Oi(220,`c-card`,2),ow(221,`
      `),Oi(222,`c-card-header`),ow(223,`
        `),Oi(224,`strong`),ow(225,`Angular Pagination`),sl(),ow(226,` `),Oi(227,`small`),ow(228,`Sizing`),sl(),ow(229,`
      `),sl(),ow(230,`
      `),Oi(231,`c-card-body`),ow(232,`
        `),Oi(233,`p`,3),ow(234,`
          Fancy larger or smaller pagination? Add `),Oi(235,`code`),ow(236,`sizing="lg"`),sl(),ow(237,` or
          `),Oi(238,`code`),ow(239,`sizing="sm"`),sl(),ow(240,` for additional sizes.
        `),sl(),ow(241,`
        `),Oi(242,`app-docs-example`,14),ow(243,`
          `),Oi(244,`c-pagination`,15),ow(245,`
            `),Oi(246,`c-page-item`),ow(247,`
              `),Oi(248,`a`,6),ow(249,`Previous`),sl(),ow(250,`
            `),sl(),ow(251,`
            `),Oi(252,`c-page-item`),ow(253,`
              `),Oi(254,`a`,6),ow(255,`1`),sl(),ow(256,`
            `),sl(),ow(257,`
            `),Oi(258,`c-page-item`),ow(259,`
              `),Oi(260,`a`,6),ow(261,`2`),sl(),ow(262,`
            `),sl(),ow(263,`
            `),Oi(264,`c-page-item`),ow(265,`
              `),Oi(266,`a`,6),ow(267,`3`),sl(),ow(268,`
            `),sl(),ow(269,`
            `),Oi(270,`c-page-item`),ow(271,`
              `),Oi(272,`a`,6),ow(273,`Next`),sl(),ow(274,`
            `),sl(),ow(275,`
          `),sl(),ow(276,`
        `),sl(),ow(277,`
        `),Oi(278,`app-docs-example`,14),ow(279,`
          `),Oi(280,`c-pagination`,16),ow(281,`
            `),Oi(282,`c-page-item`),ow(283,`
              `),Oi(284,`a`,6),ow(285,`Previous`),sl(),ow(286,`
            `),sl(),ow(287,`
            `),Oi(288,`c-page-item`),ow(289,`
              `),Oi(290,`a`,6),ow(291,`1`),sl(),ow(292,`
            `),sl(),ow(293,`
            `),Oi(294,`c-page-item`),ow(295,`
              `),Oi(296,`a`,6),ow(297,`2`),sl(),ow(298,`
            `),sl(),ow(299,`
            `),Oi(300,`c-page-item`),ow(301,`
              `),Oi(302,`a`,6),ow(303,`3`),sl(),ow(304,`
            `),sl(),ow(305,`
            `),Oi(306,`c-page-item`),ow(307,`
              `),Oi(308,`a`,6),ow(309,`Next`),sl(),ow(310,`
            `),sl(),ow(311,`
          `),sl(),ow(312,`
        `),sl(),ow(313,`
      `),sl(),ow(314,`
    `),sl(),ow(315,`
  `),sl(),ow(316,`
  `),Oi(317,`c-col`,0),ow(318,`
    `),Oi(319,`c-card`,2),ow(320,`
      `),Oi(321,`c-card-header`),ow(322,`
        `),Oi(323,`strong`),ow(324,`Angular Pagination`),sl(),ow(325,` `),Oi(326,`small`),ow(327,`Alignment`),sl(),ow(328,`
      `),sl(),ow(329,`
      `),Oi(330,`c-card-body`),ow(331,`
        `),Oi(332,`p`,3),ow(333,`
          Change the alignment of pagination components with
          `),Oi(334,`a`,17),ow(335,`flexbox utilities`),sl(),ow(336,`.
        `),sl(),ow(337,`
        `),Oi(338,`app-docs-example`,18),ow(339,`
          `),Oi(340,`c-pagination`,19),ow(341,`
            `),Oi(342,`c-page-item`,20),ow(343,`
              `),Oi(344,`a`,6),ow(345,`Previous`),sl(),ow(346,`
            `),sl(),ow(347,`
            `),Oi(348,`c-page-item`),ow(349,`
              `),Oi(350,`a`,6),ow(351,`1`),sl(),ow(352,`
            `),sl(),ow(353,`
            `),Oi(354,`c-page-item`),ow(355,`
              `),Oi(356,`a`,6),ow(357,`2`),sl(),ow(358,`
            `),sl(),ow(359,`
            `),Oi(360,`c-page-item`),ow(361,`
              `),Oi(362,`a`,6),ow(363,`3`),sl(),ow(364,`
            `),sl(),ow(365,`
            `),Oi(366,`c-page-item`),ow(367,`
              `),Oi(368,`a`,6),ow(369,`Next`),sl(),ow(370,`
            `),sl(),ow(371,`
          `),sl(),ow(372,`
        `),sl(),ow(373,`
        `),Oi(374,`app-docs-example`,18),ow(375,`
          `),Oi(376,`c-pagination`,21),ow(377,`
            `),Oi(378,`c-page-item`,20),ow(379,`
              `),Oi(380,`a`,6),ow(381,`Previous`),sl(),ow(382,`
            `),sl(),ow(383,`
            `),Oi(384,`c-page-item`),ow(385,`
              `),Oi(386,`a`,6),ow(387,`1`),sl(),ow(388,`
            `),sl(),ow(389,`
            `),Oi(390,`c-page-item`),ow(391,`
              `),Oi(392,`a`,6),ow(393,`2`),sl(),ow(394,`
            `),sl(),ow(395,`
            `),Oi(396,`c-page-item`),ow(397,`
              `),Oi(398,`a`,6),ow(399,`3`),sl(),ow(400,`
            `),sl(),ow(401,`
            `),Oi(402,`c-page-item`),ow(403,`
              `),Oi(404,`a`,6),ow(405,`Next`),sl(),ow(406,`
            `),sl(),ow(407,`
          `),sl(),ow(408,`
        `),sl(),ow(409,`
      `),sl(),ow(410,`
    `),sl(),ow(411,`
  `),sl(),ow(412,`
`),sl()),m&2&&(jI(40),Dh(`routerLink`,yw(39,l)),jI(6),Dh(`routerLink`,yw(40,l)),jI(6),Dh(`routerLink`,yw(41,l)),jI(6),Dh(`routerLink`,yw(42,l)),jI(6),Dh(`routerLink`,yw(43,l)),jI(36),Dh(`routerLink`,yw(44,l)),jI(7),Dh(`routerLink`,yw(45,l)),jI(6),Dh(`routerLink`,yw(46,l)),jI(6),Dh(`routerLink`,yw(47,l)),jI(6),Dh(`routerLink`,yw(48,l)),jI(56),Dh(`disabled`,!0),jI(2),Dh(`routerLink`,yw(49,l)),jI(5),Dh(`active`,!0),jI(2),Dh(`routerLink`,yw(50,l)),jI(6),Dh(`routerLink`,yw(51,l)),jI(6),Dh(`routerLink`,yw(52,l)),jI(6),Dh(`routerLink`,yw(53,l)),jI(40),Dh(`routerLink`,yw(54,l)),jI(6),Dh(`routerLink`,yw(55,l)),jI(6),Dh(`routerLink`,yw(56,l)),jI(6),Dh(`routerLink`,yw(57,l)),jI(6),Dh(`routerLink`,yw(58,l)),jI(12),Dh(`routerLink`,yw(59,l)),jI(6),Dh(`routerLink`,yw(60,l)),jI(6),Dh(`routerLink`,yw(61,l)),jI(6),Dh(`routerLink`,yw(62,l)),jI(6),Dh(`routerLink`,yw(63,l)),jI(34),Dh(`disabled`,!0),jI(2),Dh(`routerLink`,yw(64,l)),jI(6),Dh(`routerLink`,yw(65,l)),jI(6),Dh(`routerLink`,yw(66,l)),jI(6),Dh(`routerLink`,yw(67,l)),jI(6),Dh(`routerLink`,yw(68,l)),jI(10),Dh(`disabled`,!0),jI(2),Dh(`routerLink`,yw(69,l)),jI(6),Dh(`routerLink`,yw(70,l)),jI(6),Dh(`routerLink`,yw(71,l)),jI(6),Dh(`routerLink`,yw(72,l)),jI(6),Dh(`routerLink`,yw(73,l)))},dependencies:[fT,Pv,xi,Nv,Ri,w,OT,FT,bu,$t,c],encapsulation:2})}};export{f as PaginationsComponent};