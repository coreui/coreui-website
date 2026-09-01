import{B as Fte,Dt as P,M as Ef,Si as rP,Vr as ke,Wn as be,Wr as kte,X as I,Xn as bw,Yt as Ste,aa as xw,an as V,ar as dP,cn as Vi,jn as Zt,k as Dw,or as da,ui as pP,ut as L,v as C,zi as ua}from"./main-AXUR3WFK.js";import{t as E}from"./chunk-DrG-2cCJ.js";import{t as c}from"./chunk-Dishkh7c.js";var l=()=>[];var w=class d{static{this.ɵfac=function(m){return new(m||d)}}static{this.ɵcmp=I({type:d,selectors:[[`app-navs`]],decls:682,vars:124,consts:[[`xs`,`12`],[`href`,`components/nav`,`title`,`Nav`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/nav#base-nav`],[`cNavLink`,``,3,`active`,`routerLink`],[`cNavLink`,``,3,`routerLink`],[`cNavLink`,``,3,`disabled`,`routerLink`],[1,`text-body-secondary`,`small`,`mt-3`],[`role`,`navigation`],[`href`,`https://coreui.io/docs/layout/grid/#horizontal-alignment`],[`href`,`components/nav#horizontal-alignment`],[1,`justify-content-center`],[1,`justify-content-end`],[`href`,`components/nav#vertical`],[1,`flex-column`],[`href`,`components/nav#tabs`],[`variant`,`tabs`],[`href`,`components/nav#pills`],[`variant`,`pills`],[`href`,`components/nav#Underline`],[`variant`,`underline`],[`href`,`components/nav#fill-and-justify`],[`layout`,`fill`,`variant`,`pills`],[`layout`,`justified`,`variant`,`pills`],[`href`,`https://coreui.io/docs/utilities/flex`],[`href`,`components/nav#working-with-flex-utilities`],[`role`,`navigation`,`variant`,`pills`,1,`flex-column`,`flex-sm-row`],[`href`,`components/nav#tabs-with-dropdowns`],[`variant`,`nav-item`],[`cDropdownToggle`,``,`href`,``,`cNavLink`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`href`,`components/nav#pills-with-dropdowns`],[`cNavLink`,``,3,`active`],[`cDropdownToggle`,``,`href`,``],[`cNavLink`,``],[`cNavLink`,``,3,`disabled`]],template:function(m,N){m&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Navs`),P(),be(12,` `),L(13,`small`),be(14,`Base navs`),P(),be(15,`
      `),P(),be(16,`
      `),L(17,`c-card-body`),be(18,`
        `),L(19,`p`,3),be(20,`
          The base `),L(21,`code`),be(22,`c-nav`),P(),be(23,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),P(),be(24,`
        `),L(25,`app-docs-example`,4),be(26,`
          `),L(27,`c-nav`),be(28,`
            `),L(29,`c-nav-item`),be(30,`
              `),L(31,`a`,5),be(32,`
                Active
              `),P(),be(33,`
            `),P(),be(34,`
            `),L(35,`c-nav-item`),be(36,`
              `),L(37,`a`,6),be(38,`Link`),P(),be(39,`
            `),P(),be(40,`
            `),L(41,`c-nav-item`),be(42,`
              `),L(43,`a`,6),be(44,`Link`),P(),be(45,`
            `),P(),be(46,`
            `),L(47,`c-nav-item`),be(48,`
              `),L(49,`a`,7),be(50,`
                Disabled
              `),P(),be(51,`
            `),P(),be(52,`
          `),P(),be(53,`
        `),P(),be(54,`
        `),L(55,`p`,8),be(56,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),L(57,`code`),be(58,`c-nav-item`),P(),be(59,` like above, or roll your own with a `),L(60,`code`),be(61,`<c-nav>`),P(),be(62,` element. Because
          the `),L(63,`code`),be(64,`.nav`),P(),be(65,` uses `),L(66,`code`),be(67,`display: flex`),P(),be(68,`, the `),L(69,`code`),be(70,`cNavLink`),P(),be(71,` behaves the same as `),L(72,`code`),be(73,`c-nav-item`),P(),be(74,`
          would, but
          without the extra markup.
        `),P(),be(75,`
        `),L(76,`app-docs-example`,4),be(77,`
          `),L(78,`c-nav`,9),be(79,`
            `),L(80,`a`,5),be(81,`
              Active
            `),P(),be(82,`
            `),L(83,`a`,6),be(84,`Link`),P(),be(85,`
            `),L(86,`a`,6),be(87,`Link`),P(),be(88,`
            `),L(89,`a`,7),be(90,`
              Disabled
            `),P(),be(91,`
          `),P(),be(92,`
        `),P(),be(93,`
      `),P(),be(94,`
    `),P(),be(95,`
  `),P(),be(96,`
  `),L(97,`c-col`,0),be(98,`
    `),L(99,`c-card`,2),be(100,`
      `),L(101,`c-card-header`),be(102,`
        `),L(103,`strong`),be(104,`Angular Navs`),P(),be(105,` `),L(106,`small`),be(107,`Horizontal alignment`),P(),be(108,`
      `),P(),be(109,`
      `),L(110,`c-card-body`),be(111,`
        `),L(112,`p`,3),be(113,`
          Change the horizontal alignment of your nav with
          `),L(114,`a`,10),be(115,`
            flexbox utilities
          `),P(),be(116,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),P(),be(117,`
        `),L(118,`p`,3),be(119,`
          Centered with `),L(120,`code`),be(121,`.justify-content-center`),P(),be(122,`:
        `),P(),be(123,`
        `),L(124,`app-docs-example`,11),be(125,`
          `),L(126,`c-nav`,12),be(127,`
            `),L(128,`c-nav-item`),be(129,`
              `),L(130,`a`,5),be(131,`
                Active
              `),P(),be(132,`
            `),P(),be(133,`
            `),L(134,`c-nav-item`),be(135,`
              `),L(136,`a`,6),be(137,`Link`),P(),be(138,`
            `),P(),be(139,`
            `),L(140,`c-nav-item`),be(141,`
              `),L(142,`a`,6),be(143,`Link`),P(),be(144,`
            `),P(),be(145,`
            `),L(146,`c-nav-item`),be(147,`
              `),L(148,`a`,7),be(149,`
                Disabled
              `),P(),be(150,`
            `),P(),be(151,`
          `),P(),be(152,`
        `),P(),be(153,`
        `),L(154,`p`,3),be(155,`
          Right-aligned with `),L(156,`code`),be(157,`.justify-content-end`),P(),be(158,`:
        `),P(),be(159,`
        `),L(160,`app-docs-example`,4),be(161,`
          `),L(162,`c-nav`,13),be(163,`
            `),L(164,`c-nav-item`),be(165,`
              `),L(166,`a`,5),be(167,`
                Active
              `),P(),be(168,`
            `),P(),be(169,`
            `),L(170,`c-nav-item`),be(171,`
              `),L(172,`a`,6),be(173,`Link`),P(),be(174,`
            `),P(),be(175,`
            `),L(176,`c-nav-item`),be(177,`
              `),L(178,`a`,6),be(179,`Link`),P(),be(180,`
            `),P(),be(181,`
            `),L(182,`c-nav-item`),be(183,`
              `),L(184,`a`,7),be(185,`
                Disabled
              `),P(),be(186,`
            `),P(),be(187,`
          `),P(),be(188,`
        `),P(),be(189,`
      `),P(),be(190,`
    `),P(),be(191,`
  `),P(),be(192,`
  `),L(193,`c-col`,0),be(194,`
    `),L(195,`c-card`,2),be(196,`
      `),L(197,`c-card-header`),be(198,`
        `),L(199,`strong`),be(200,`Angular Navs`),P(),be(201,` `),L(202,`small`),be(203,`Vertical`),P(),be(204,`
      `),P(),be(205,`
      `),L(206,`c-card-body`),be(207,`
        `),L(208,`p`,3),be(209,`
          Stack your navigation by changing the flex item direction with the
          `),L(210,`code`),be(211,`.flex-column`),P(),be(212,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),L(213,`code`),be(214,`.flex-sm-column`),P(),be(215,`).
        `),P(),be(216,`
        `),L(217,`app-docs-example`,14),be(218,`
          `),L(219,`c-nav`,15),be(220,`
            `),L(221,`c-nav-item`),be(222,`
              `),L(223,`a`,5),be(224,`
                Active
              `),P(),be(225,`
            `),P(),be(226,`
            `),L(227,`c-nav-item`),be(228,`
              `),L(229,`a`,6),be(230,`Link`),P(),be(231,`
            `),P(),be(232,`
            `),L(233,`c-nav-item`),be(234,`
              `),L(235,`a`,6),be(236,`Link`),P(),be(237,`
            `),P(),be(238,`
            `),L(239,`c-nav-item`),be(240,`
              `),L(241,`a`,7),be(242,`
                Disabled
              `),P(),be(243,`
            `),P(),be(244,`
          `),P(),be(245,`
        `),P(),be(246,`
      `),P(),be(247,`
    `),P(),be(248,`
  `),P(),be(249,`
  `),L(250,`c-col`,0),be(251,`
    `),L(252,`c-card`,2),be(253,`
      `),L(254,`c-card-header`),be(255,`
        `),L(256,`strong`),be(257,`Angular Navs`),P(),be(258,` `),L(259,`small`),be(260,`Tabs`),P(),be(261,`
      `),P(),be(262,`
      `),L(263,`c-card-body`),be(264,`
        `),L(265,`p`,3),be(266,`
          Take the basic nav from above and add the `),L(267,`code`),be(268,`variant="tabs"`),P(),be(269,` class
          to generate a tabbed interface
        `),P(),be(270,`
        `),L(271,`app-docs-example`,16),be(272,`
          `),L(273,`c-nav`,17),be(274,`
            `),L(275,`c-nav-item`),be(276,`
              `),L(277,`a`,5),be(278,`
                Active
              `),P(),be(279,`
            `),P(),be(280,`
            `),L(281,`c-nav-item`),be(282,`
              `),L(283,`a`,6),be(284,`Link`),P(),be(285,`
            `),P(),be(286,`
            `),L(287,`c-nav-item`),be(288,`
              `),L(289,`a`,6),be(290,`Link`),P(),be(291,`
            `),P(),be(292,`
            `),L(293,`c-nav-item`),be(294,`
              `),L(295,`a`,7),be(296,`
                Disabled
              `),P(),be(297,`
            `),P(),be(298,`
          `),P(),be(299,`
        `),P(),be(300,`
      `),P(),be(301,`
    `),P(),be(302,`
  `),P(),be(303,`
  `),L(304,`c-col`,0),be(305,`
    `),L(306,`c-card`,2),be(307,`
      `),L(308,`c-card-header`),be(309,`
        `),L(310,`strong`),be(311,`Angular Navs`),P(),be(312,` `),L(313,`small`),be(314,`Pills`),P(),be(315,`
      `),P(),be(316,`
      `),L(317,`c-card-body`),be(318,`
        `),L(319,`p`,3),be(320,`
          Take that same HTML, but use `),L(321,`code`),be(322,`variant="pills"`),P(),be(323,` instead:
        `),P(),be(324,`
        `),L(325,`app-docs-example`,18),be(326,`
          `),L(327,`c-nav`,19),be(328,`
            `),L(329,`c-nav-item`),be(330,`
              `),L(331,`a`,5),be(332,`
                Active
              `),P(),be(333,`
            `),P(),be(334,`
            `),L(335,`c-nav-item`),be(336,`
              `),L(337,`a`,6),be(338,`Link`),P(),be(339,`
            `),P(),be(340,`
            `),L(341,`c-nav-item`),be(342,`
              `),L(343,`a`,6),be(344,`Link`),P(),be(345,`
            `),P(),be(346,`
            `),L(347,`c-nav-item`),be(348,`
              `),L(349,`a`,7),be(350,`
                Disabled
              `),P(),be(351,`
            `),P(),be(352,`
          `),P(),be(353,`
        `),P(),be(354,`
      `),P(),be(355,`
    `),P(),be(356,`
  `),P(),be(357,`
  `),L(358,`c-col`,0),be(359,`
    `),L(360,`c-card`,2),be(361,`
      `),L(362,`c-card-header`),be(363,`
        `),L(364,`strong`),be(365,`Angular Navs`),P(),be(366,` `),L(367,`small`),be(368,`Underline`),P(),be(369,`
      `),P(),be(370,`
      `),L(371,`c-card-body`),be(372,`
        `),L(373,`p`,3),be(374,`
          Take that same HTML, but use `),L(375,`code`),be(376,`variant="Underline"`),P(),be(377,` instead:
        `),P(),be(378,`
        `),L(379,`app-docs-example`,20),be(380,`
          `),L(381,`c-nav`,21),be(382,`
            `),L(383,`c-nav-item`),be(384,`
              `),L(385,`a`,5),be(386,`
                Active
              `),P(),be(387,`
            `),P(),be(388,`
            `),L(389,`c-nav-item`),be(390,`
              `),L(391,`a`,6),be(392,`Link`),P(),be(393,`
            `),P(),be(394,`
            `),L(395,`c-nav-item`),be(396,`
              `),L(397,`a`,6),be(398,`Link`),P(),be(399,`
            `),P(),be(400,`
            `),L(401,`c-nav-item`),be(402,`
              `),L(403,`a`,7),be(404,`
                Disabled
              `),P(),be(405,`
            `),P(),be(406,`
          `),P(),be(407,`
        `),P(),be(408,`
      `),P(),be(409,`
    `),P(),be(410,`
  `),P(),be(411,`
  `),L(412,`c-col`,0),be(413,`
    `),L(414,`c-card`,2),be(415,`
      `),L(416,`c-card-header`),be(417,`
        `),L(418,`strong`),be(419,`Angular Navs`),P(),be(420,` `),L(421,`small`),be(422,`Fill and justify`),P(),be(423,`
      `),P(),be(424,`
      `),L(425,`c-card-body`),be(426,`
        `),L(427,`p`,3),be(428,`
          Force your `),L(429,`code`),be(430,`.nav`),P(),be(431,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),L(432,`code`),be(433,`.nav-item`),P(),be(434,`s, use `),L(435,`code`),be(436,`layout="fill"`),P(),be(437,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),P(),be(438,`
        `),L(439,`app-docs-example`,22),be(440,`
          `),L(441,`c-nav`,23),be(442,`
            `),L(443,`c-nav-item`),be(444,`
              `),L(445,`a`,5),be(446,`
                Active
              `),P(),be(447,`
            `),P(),be(448,`
            `),L(449,`c-nav-item`),be(450,`
              `),L(451,`a`,6),be(452,`Link`),P(),be(453,`
            `),P(),be(454,`
            `),L(455,`c-nav-item`),be(456,`
              `),L(457,`a`,6),be(458,`Link`),P(),be(459,`
            `),P(),be(460,`
            `),L(461,`c-nav-item`),be(462,`
              `),L(463,`a`,7),be(464,`
                Disabled
              `),P(),be(465,`
            `),P(),be(466,`
          `),P(),be(467,`
        `),P(),be(468,`
        `),L(469,`p`,3),be(470,`
          For equal-width elements, use `),L(471,`code`),be(472,`layout="justified"`),P(),be(473,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),P(),be(474,`
        `),L(475,`app-docs-example`,22),be(476,`
          `),L(477,`c-nav`,24),be(478,`
            `),L(479,`c-nav-item`),be(480,`
              `),L(481,`a`,5),be(482,`
                Active
              `),P(),be(483,`
            `),P(),be(484,`
            `),L(485,`c-nav-item`),be(486,`
              `),L(487,`a`,6),be(488,`Link`),P(),be(489,`
            `),P(),be(490,`
            `),L(491,`c-nav-item`),be(492,`
              `),L(493,`a`,6),be(494,`Link`),P(),be(495,`
            `),P(),be(496,`
            `),L(497,`c-nav-item`),be(498,`
              `),L(499,`a`,7),be(500,`
                Disabled
              `),P(),be(501,`
            `),P(),be(502,`
          `),P(),be(503,`
        `),P(),be(504,`
      `),P(),be(505,`
    `),P(),be(506,`
  `),P(),be(507,`
  `),L(508,`c-col`,0),be(509,`
    `),L(510,`c-card`,2),be(511,`
      `),L(512,`c-card-header`),be(513,`
        `),L(514,`strong`),be(515,`Angular Navs`),P(),be(516,` `),L(517,`small`),be(518,`Working with flex utilities`),P(),be(519,`
      `),P(),be(520,`
      `),L(521,`c-card-body`),be(522,`
        `),L(523,`p`,3),be(524,`
          If you need responsive nav variations, consider using a series of
          `),L(525,`a`,25),be(526,`flexbox utilities`),P(),be(527,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),P(),be(528,`
        `),L(529,`app-docs-example`,26),be(530,`
          `),L(531,`c-nav`,27),be(532,`
            `),L(533,`a`,5),be(534,`
              Active
            `),P(),be(535,`
            `),L(536,`a`,6),be(537,`Link`),P(),be(538,`
            `),L(539,`a`,6),be(540,`Link`),P(),be(541,`
            `),L(542,`a`,7),be(543,`
              Disabled
            `),P(),be(544,`
          `),P(),be(545,`
        `),P(),be(546,`
      `),P(),be(547,`
    `),P(),be(548,`
  `),P(),be(549,`
  `),L(550,`c-col`,0),be(551,`
    `),L(552,`c-card`,2),be(553,`
      `),L(554,`c-card-header`),be(555,`
        `),L(556,`strong`),be(557,`Angular Navs`),P(),be(558,` `),L(559,`small`),be(560,`Tabs with dropdowns`),P(),be(561,`
      `),P(),be(562,`
      `),L(563,`c-card-body`),be(564,`
        `),L(565,`app-docs-example`,28),be(566,`
          `),L(567,`c-nav`,17),be(568,`
            `),L(569,`c-nav-item`),be(570,`
              `),L(571,`button`,5),be(572,`
                Active
              `),P(),be(573,`
            `),P(),be(574,`
            `),L(575,`c-dropdown`,29),be(576,`
              `),L(577,`button`,30),be(578,`
                Dropdown button
              `),P(),be(579,`
              `),L(580,`ul`,31),be(581,`
                `),L(582,`li`),be(583,`
                  `),L(584,`button`,32),be(585,`Action`),P(),be(586,`
                `),P(),be(587,`
                `),L(588,`li`),be(589,`
                  `),L(590,`button`,32),be(591,`Another action`),P(),be(592,`
                `),P(),be(593,`
                `),L(594,`li`),be(595,`
                  `),L(596,`button`,32),be(597,`Something else here`),P(),be(598,`
                `),P(),be(599,`
              `),P(),be(600,`
            `),P(),be(601,`
            `),L(602,`c-nav-item`),be(603,`
              `),L(604,`button`,6),be(605,`Link`),P(),be(606,`
            `),P(),be(607,`
            `),L(608,`c-nav-item`),be(609,`
              `),L(610,`button`,7),be(611,`
                Disabled
              `),P(),be(612,`
            `),P(),be(613,`
          `),P(),be(614,`
        `),P(),be(615,`
      `),P(),be(616,`
    `),P(),be(617,`
  `),P(),be(618,`
  `),L(619,`c-col`,0),be(620,`
    `),L(621,`c-card`,2),be(622,`
      `),L(623,`c-card-header`),be(624,`
        `),L(625,`strong`),be(626,`Angular Navs`),P(),be(627,` `),L(628,`small`),be(629,`Pills with dropdowns`),P(),be(630,`
      `),P(),be(631,`
      `),L(632,`c-card-body`),be(633,`
        `),L(634,`app-docs-example`,33),be(635,`
          `),L(636,`c-nav`,19),be(637,`
            `),L(638,`c-nav-item`),be(639,`
              `),L(640,`a`,34),be(641,`
                Active
              `),P(),be(642,`
            `),P(),be(643,`
            `),L(644,`c-dropdown`,29),be(645,`
              `),L(646,`a`,35),be(647,`
                Dropdown button
              `),P(),be(648,`
              `),L(649,`ul`,31),be(650,`
                `),L(651,`li`)(652,`a`,32),be(653,`Action`),P()(),be(654,`
                `),L(655,`li`)(656,`a`,32),be(657,`Another action`),P()(),be(658,`
                `),L(659,`li`)(660,`a`,32),be(661,`Something else here`),P()(),be(662,`
              `),P(),be(663,`
            `),P(),be(664,`
            `),L(665,`c-nav-item`),be(666,`
              `),L(667,`a`,36),be(668,`Link`),P(),be(669,`
            `),P(),be(670,`
            `),L(671,`c-nav-item`),be(672,`
              `),L(673,`a`,37),be(674,`
                Disabled
              `),P(),be(675,`
            `),P(),be(676,`
          `),P(),be(677,`
        `),P(),be(678,`
      `),P(),be(679,`
    `),P(),be(680,`
  `),P(),be(681,`
`),P()),m&2&&(C(31),V(`active`,!0)(`routerLink`,Zt(75,l)),C(6),V(`routerLink`,Zt(76,l)),C(6),V(`routerLink`,Zt(77,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(78,l)),C(31),V(`active`,!0)(`routerLink`,Zt(79,l)),C(3),V(`routerLink`,Zt(80,l)),C(3),V(`routerLink`,Zt(81,l)),C(3),V(`disabled`,!0)(`routerLink`,Zt(82,l)),C(41),V(`active`,!0)(`routerLink`,Zt(83,l)),C(6),V(`routerLink`,Zt(84,l)),C(6),V(`routerLink`,Zt(85,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(86,l)),C(18),V(`active`,!0)(`routerLink`,Zt(87,l)),C(6),V(`routerLink`,Zt(88,l)),C(6),V(`routerLink`,Zt(89,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(90,l)),C(39),V(`active`,!0)(`routerLink`,Zt(91,l)),C(6),V(`routerLink`,Zt(92,l)),C(6),V(`routerLink`,Zt(93,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(94,l)),C(36),V(`active`,!0)(`routerLink`,Zt(95,l)),C(6),V(`routerLink`,Zt(96,l)),C(6),V(`routerLink`,Zt(97,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(98,l)),C(36),V(`active`,!0)(`routerLink`,Zt(99,l)),C(6),V(`routerLink`,Zt(100,l)),C(6),V(`routerLink`,Zt(101,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(102,l)),C(36),V(`active`,!0),C(18),V(`disabled`,!0),C(42),V(`active`,!0)(`routerLink`,Zt(103,l)),C(6),V(`routerLink`,Zt(104,l)),C(6),V(`routerLink`,Zt(105,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(106,l)),C(18),V(`active`,!0)(`routerLink`,Zt(107,l)),C(6),V(`routerLink`,Zt(108,l)),C(6),V(`routerLink`,Zt(109,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(110,l)),C(34),V(`active`,!0)(`routerLink`,Zt(111,l)),C(3),V(`routerLink`,Zt(112,l)),C(3),V(`routerLink`,Zt(113,l)),C(3),V(`disabled`,!0)(`routerLink`,Zt(114,l)),C(29),V(`active`,!0)(`routerLink`,Zt(115,l)),C(13),V(`routerLink`,Zt(116,l)),C(6),V(`routerLink`,Zt(117,l)),C(6),V(`routerLink`,Zt(118,l)),C(8),V(`routerLink`,Zt(119,l)),C(6),V(`disabled`,!0)(`routerLink`,Zt(120,l)),C(30),V(`active`,!0),C(12),V(`routerLink`,Zt(121,l)),C(4),V(`routerLink`,Zt(122,l)),C(4),V(`routerLink`,Zt(123,l)),C(13),V(`disabled`,!0))},dependencies:[Ste,dP,ua,rP,da,E,Fte,kte,pP,Vi,xw,bw,Ef,Dw,c],encapsulation:2})}};export{w as NavsComponent};