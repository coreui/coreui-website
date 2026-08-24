import{Gn as Ch,I as Li,Oi as ki,Sn as rb,X as Pi,Yn as Dw,_t as Wt,ai as cw,ga as wh,h as E1,ii as cl,it as S1,la as vD,o as Au,wn as t1,xt as Xv,zn as $E}from"./main-JGD5BDHO.js";import{t as E}from"./chunk-BETohCFL.js";import{t as c}from"./chunk-INd7ktdd.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=vD({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Pagination`),cl(),cw(12,`
      `),cl(),cw(13,`
      `),ki(14,`c-card-body`),cw(15,`
        `),ki(16,`p`,3),cw(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),ki(18,`code`),cw(19,`<nav>`),cl(),cw(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),cl(),cw(21,`
        `),ki(22,`p`,3),cw(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),ki(24,`code`),cw(25,`aria-label`),cl(),cw(26,` for the
          `),ki(27,`code`),cw(28,`<nav>`),cl(),cw(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),ki(30,`code`),cw(31,`aria-label="Search results pages"`),cl(),cw(32,`.
        `),cl(),cw(33,`
        `),ki(34,`app-docs-example`,4),cw(35,`
          `),ki(36,`c-pagination`,5),cw(37,`
            `),ki(38,`c-page-item`),cw(39,`
              `),ki(40,`a`,6),cw(41,`Previous`),cl(),cw(42,`
            `),cl(),cw(43,`
            `),ki(44,`c-page-item`),cw(45,`
              `),ki(46,`a`,6),cw(47,`1`),cl(),cw(48,`
            `),cl(),cw(49,`
            `),ki(50,`c-page-item`),cw(51,`
              `),ki(52,`a`,6),cw(53,`2`),cl(),cw(54,`
            `),cl(),cw(55,`
            `),ki(56,`c-page-item`),cw(57,`
              `),ki(58,`a`,6),cw(59,`3`),cl(),cw(60,`
            `),cl(),cw(61,`
            `),ki(62,`c-page-item`),cw(63,`
              `),ki(64,`a`,6),cw(65,`Next`),cl(),cw(66,`
            `),cl(),cw(67,`
          `),cl(),cw(68,`
        `),cl(),cw(69,`
      `),cl(),cw(70,`
    `),cl(),cw(71,`
  `),cl(),cw(72,`
  `),ki(73,`c-col`,0),cw(74,`
    `),ki(75,`c-card`,2),cw(76,`
      `),ki(77,`c-card-header`),cw(78,`
        `),ki(79,`strong`),cw(80,`Angular Pagination`),cl(),cw(81,` `),ki(82,`small`),cw(83,`Working with icons`),cl(),cw(84,`
      `),cl(),cw(85,`
      `),ki(86,`c-card-body`),cw(87,`
        `),ki(88,`p`,3),cw(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),ki(90,`code`),cw(91,`aria`),cl(),cw(92,` attributes.
        `),cl(),cw(93,`
        `),ki(94,`app-docs-example`,7),cw(95,`
          `),ki(96,`c-pagination`,5),cw(97,`
            `),ki(98,`c-page-item`,8),cw(99,`
              `),ki(100,`a`,6)(101,`span`,9),cw(102,`«`),cl()(),cw(103,`
            `),cl(),cw(104,`
            `),ki(105,`c-page-item`),cw(106,`
              `),ki(107,`a`,6),cw(108,`1`),cl(),cw(109,`
            `),cl(),cw(110,`
            `),ki(111,`c-page-item`),cw(112,`
              `),ki(113,`a`,6),cw(114,`2`),cl(),cw(115,`
            `),cl(),cw(116,`
            `),ki(117,`c-page-item`),cw(118,`
              `),ki(119,`a`,6),cw(120,`3`),cl(),cw(121,`
            `),cl(),cw(122,`
            `),ki(123,`c-page-item`,10),cw(124,`
              `),ki(125,`a`,6)(126,`span`,9),cw(127,`»`),cl()(),cw(128,`
            `),cl(),cw(129,`
          `),cl(),cw(130,`
        `),cl(),cw(131,`
      `),cl(),cw(132,`
    `),cl(),cw(133,`
  `),cl(),cw(134,`
  `),ki(135,`c-col`,0),cw(136,`
    `),ki(137,`c-card`,2),cw(138,`
      `),ki(139,`c-card-header`),cw(140,`
        `),ki(141,`strong`),cw(142,`Angular Pagination`),cl(),cw(143,` `),ki(144,`small`),cw(145,`Disabled and active states`),cl(),cw(146,`
      `),cl(),cw(147,`
      `),ki(148,`c-card-body`),cw(149,`
        `),ki(150,`p`,3),cw(151,`
          Pagination links are customizable for different circumstances. Use
          `),ki(152,`code`),cw(153,`disabled`),cl(),cw(154,` for links that appear un-clickable and `),ki(155,`code`),cw(156,`.active`),cl(),cw(157,` to
          indicate the current page.
        `),cl(),cw(158,`
        `),ki(159,`p`,3),cw(160,`
          While the `),ki(161,`code`),cw(162,`disabled`),cl(),cw(163,` prop uses `),ki(164,`code`),cw(165,`pointer-events: none`),cl(),cw(166,` to
          `),ki(167,`em`),cw(168,`try`),cl(),cw(169,` to disable the link functionality of `),ki(170,`code`),cw(171,`<a>`),cl(),cw(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),ki(173,`code`),cw(174,`tabindex="-1"`),cl(),cw(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),cl(),cw(176,`
        `),ki(177,`app-docs-example`,11),cw(178,`
          `),ki(179,`c-pagination`,5),cw(180,`
            `),ki(181,`c-page-item`,12),cw(182,`
              `),ki(183,`a`,6)(184,`span`,9),cw(185,`«`),cl()(),cw(186,`
            `),cl(),cw(187,`
            `),ki(188,`c-page-item`,13),cw(189,`
              `),ki(190,`a`,6),cw(191,`1`),cl(),cw(192,`
            `),cl(),cw(193,`
            `),ki(194,`c-page-item`),cw(195,`
              `),ki(196,`a`,6),cw(197,`2`),cl(),cw(198,`
            `),cl(),cw(199,`
            `),ki(200,`c-page-item`),cw(201,`
              `),ki(202,`a`,6),cw(203,`3`),cl(),cw(204,`
            `),cl(),cw(205,`
            `),ki(206,`c-page-item`,10),cw(207,`
              `),ki(208,`a`,6)(209,`span`,9),cw(210,`»`),cl()(),cw(211,`
            `),cl(),cw(212,`
          `),cl(),cw(213,`
        `),cl(),cw(214,`
      `),cl(),cw(215,`
    `),cl(),cw(216,`
  `),cl(),cw(217,`
  `),ki(218,`c-col`,0),cw(219,`
    `),ki(220,`c-card`,2),cw(221,`
      `),ki(222,`c-card-header`),cw(223,`
        `),ki(224,`strong`),cw(225,`Angular Pagination`),cl(),cw(226,` `),ki(227,`small`),cw(228,`Sizing`),cl(),cw(229,`
      `),cl(),cw(230,`
      `),ki(231,`c-card-body`),cw(232,`
        `),ki(233,`p`,3),cw(234,`
          Fancy larger or smaller pagination? Add `),ki(235,`code`),cw(236,`sizing="lg"`),cl(),cw(237,` or
          `),ki(238,`code`),cw(239,`sizing="sm"`),cl(),cw(240,` for additional sizes.
        `),cl(),cw(241,`
        `),ki(242,`app-docs-example`,14),cw(243,`
          `),ki(244,`c-pagination`,15),cw(245,`
            `),ki(246,`c-page-item`),cw(247,`
              `),ki(248,`a`,6),cw(249,`Previous`),cl(),cw(250,`
            `),cl(),cw(251,`
            `),ki(252,`c-page-item`),cw(253,`
              `),ki(254,`a`,6),cw(255,`1`),cl(),cw(256,`
            `),cl(),cw(257,`
            `),ki(258,`c-page-item`),cw(259,`
              `),ki(260,`a`,6),cw(261,`2`),cl(),cw(262,`
            `),cl(),cw(263,`
            `),ki(264,`c-page-item`),cw(265,`
              `),ki(266,`a`,6),cw(267,`3`),cl(),cw(268,`
            `),cl(),cw(269,`
            `),ki(270,`c-page-item`),cw(271,`
              `),ki(272,`a`,6),cw(273,`Next`),cl(),cw(274,`
            `),cl(),cw(275,`
          `),cl(),cw(276,`
        `),cl(),cw(277,`
        `),ki(278,`app-docs-example`,14),cw(279,`
          `),ki(280,`c-pagination`,16),cw(281,`
            `),ki(282,`c-page-item`),cw(283,`
              `),ki(284,`a`,6),cw(285,`Previous`),cl(),cw(286,`
            `),cl(),cw(287,`
            `),ki(288,`c-page-item`),cw(289,`
              `),ki(290,`a`,6),cw(291,`1`),cl(),cw(292,`
            `),cl(),cw(293,`
            `),ki(294,`c-page-item`),cw(295,`
              `),ki(296,`a`,6),cw(297,`2`),cl(),cw(298,`
            `),cl(),cw(299,`
            `),ki(300,`c-page-item`),cw(301,`
              `),ki(302,`a`,6),cw(303,`3`),cl(),cw(304,`
            `),cl(),cw(305,`
            `),ki(306,`c-page-item`),cw(307,`
              `),ki(308,`a`,6),cw(309,`Next`),cl(),cw(310,`
            `),cl(),cw(311,`
          `),cl(),cw(312,`
        `),cl(),cw(313,`
      `),cl(),cw(314,`
    `),cl(),cw(315,`
  `),cl(),cw(316,`
  `),ki(317,`c-col`,0),cw(318,`
    `),ki(319,`c-card`,2),cw(320,`
      `),ki(321,`c-card-header`),cw(322,`
        `),ki(323,`strong`),cw(324,`Angular Pagination`),cl(),cw(325,` `),ki(326,`small`),cw(327,`Alignment`),cl(),cw(328,`
      `),cl(),cw(329,`
      `),ki(330,`c-card-body`),cw(331,`
        `),ki(332,`p`,3),cw(333,`
          Change the alignment of pagination components with
          `),ki(334,`a`,17),cw(335,`flexbox utilities`),cl(),cw(336,`.
        `),cl(),cw(337,`
        `),ki(338,`app-docs-example`,18),cw(339,`
          `),ki(340,`c-pagination`,19),cw(341,`
            `),ki(342,`c-page-item`,20),cw(343,`
              `),ki(344,`a`,6),cw(345,`Previous`),cl(),cw(346,`
            `),cl(),cw(347,`
            `),ki(348,`c-page-item`),cw(349,`
              `),ki(350,`a`,6),cw(351,`1`),cl(),cw(352,`
            `),cl(),cw(353,`
            `),ki(354,`c-page-item`),cw(355,`
              `),ki(356,`a`,6),cw(357,`2`),cl(),cw(358,`
            `),cl(),cw(359,`
            `),ki(360,`c-page-item`),cw(361,`
              `),ki(362,`a`,6),cw(363,`3`),cl(),cw(364,`
            `),cl(),cw(365,`
            `),ki(366,`c-page-item`),cw(367,`
              `),ki(368,`a`,6),cw(369,`Next`),cl(),cw(370,`
            `),cl(),cw(371,`
          `),cl(),cw(372,`
        `),cl(),cw(373,`
        `),ki(374,`app-docs-example`,18),cw(375,`
          `),ki(376,`c-pagination`,21),cw(377,`
            `),ki(378,`c-page-item`,20),cw(379,`
              `),ki(380,`a`,6),cw(381,`Previous`),cl(),cw(382,`
            `),cl(),cw(383,`
            `),ki(384,`c-page-item`),cw(385,`
              `),ki(386,`a`,6),cw(387,`1`),cl(),cw(388,`
            `),cl(),cw(389,`
            `),ki(390,`c-page-item`),cw(391,`
              `),ki(392,`a`,6),cw(393,`2`),cl(),cw(394,`
            `),cl(),cw(395,`
            `),ki(396,`c-page-item`),cw(397,`
              `),ki(398,`a`,6),cw(399,`3`),cl(),cw(400,`
            `),cl(),cw(401,`
            `),ki(402,`c-page-item`),cw(403,`
              `),ki(404,`a`,6),cw(405,`Next`),cl(),cw(406,`
            `),cl(),cw(407,`
          `),cl(),cw(408,`
        `),cl(),cw(409,`
      `),cl(),cw(410,`
    `),cl(),cw(411,`
  `),cl(),cw(412,`
`),cl()),m&2&&($E(40),wh(`routerLink`,Dw(39,l)),$E(6),wh(`routerLink`,Dw(40,l)),$E(6),wh(`routerLink`,Dw(41,l)),$E(6),wh(`routerLink`,Dw(42,l)),$E(6),wh(`routerLink`,Dw(43,l)),$E(36),wh(`routerLink`,Dw(44,l)),$E(7),wh(`routerLink`,Dw(45,l)),$E(6),wh(`routerLink`,Dw(46,l)),$E(6),wh(`routerLink`,Dw(47,l)),$E(6),wh(`routerLink`,Dw(48,l)),$E(56),wh(`disabled`,!0),$E(2),wh(`routerLink`,Dw(49,l)),$E(5),wh(`active`,!0),$E(2),wh(`routerLink`,Dw(50,l)),$E(6),wh(`routerLink`,Dw(51,l)),$E(6),wh(`routerLink`,Dw(52,l)),$E(6),wh(`routerLink`,Dw(53,l)),$E(40),wh(`routerLink`,Dw(54,l)),$E(6),wh(`routerLink`,Dw(55,l)),$E(6),wh(`routerLink`,Dw(56,l)),$E(6),wh(`routerLink`,Dw(57,l)),$E(6),wh(`routerLink`,Dw(58,l)),$E(12),wh(`routerLink`,Dw(59,l)),$E(6),wh(`routerLink`,Dw(60,l)),$E(6),wh(`routerLink`,Dw(61,l)),$E(6),wh(`routerLink`,Dw(62,l)),$E(6),wh(`routerLink`,Dw(63,l)),$E(34),wh(`disabled`,!0),$E(2),wh(`routerLink`,Dw(64,l)),$E(6),wh(`routerLink`,Dw(65,l)),$E(6),wh(`routerLink`,Dw(66,l)),$E(6),wh(`routerLink`,Dw(67,l)),$E(6),wh(`routerLink`,Dw(68,l)),$E(10),wh(`disabled`,!0),$E(2),wh(`routerLink`,Dw(69,l)),$E(6),wh(`routerLink`,Dw(70,l)),$E(6),wh(`routerLink`,Dw(71,l)),$E(6),wh(`routerLink`,Dw(72,l)),$E(6),wh(`routerLink`,Dw(73,l)))},dependencies:[t1,rb,Pi,Xv,Li,E,E1,S1,Au,Wt,c],encapsulation:2})}};export{f as PaginationsComponent};