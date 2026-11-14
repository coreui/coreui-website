import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{At as OU,C as Cle,Ei as ri,M as F,Mt as Oe,Or as hA,Tr as gn,Wi as uU,Zt as S,c as AU,it as Jx,j as Ele,mt as L,nn as Tle,ot as Ka,pa as xp,rn as U,sa as x,un as Wa,x as Ce,yn as Xx}from"./main-VQBM3OGL.js";var l=()=>[];var w=class d{static{this.ɵfac=function(m){return new(m||d)}}static{this.ɵcmp=x({type:d,selectors:[[`app-navs`]],decls:682,vars:124,consts:[[`xs`,`12`],[`href`,`components/nav`,`title`,`Nav`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/nav#base-nav`],[`cNavLink`,``,3,`active`,`routerLink`],[`cNavLink`,``,3,`routerLink`],[`cNavLink`,``,3,`disabled`,`routerLink`],[1,`text-body-secondary`,`small`,`mt-3`],[`role`,`navigation`],[`href`,`https://coreui.io/docs/layout/grid/#horizontal-alignment`],[`href`,`components/nav#horizontal-alignment`],[1,`justify-content-center`],[1,`justify-content-end`],[`href`,`components/nav#vertical`],[1,`flex-column`],[`href`,`components/nav#tabs`],[`variant`,`tabs`],[`href`,`components/nav#pills`],[`variant`,`pills`],[`href`,`components/nav#Underline`],[`variant`,`underline`],[`href`,`components/nav#fill-and-justify`],[`layout`,`fill`,`variant`,`pills`],[`layout`,`justified`,`variant`,`pills`],[`href`,`https://coreui.io/docs/utilities/flex`],[`href`,`components/nav#working-with-flex-utilities`],[`role`,`navigation`,`variant`,`pills`,1,`flex-column`,`flex-sm-row`],[`href`,`components/nav#tabs-with-dropdowns`],[`variant`,`nav-item`],[`cDropdownToggle`,``,`href`,``,`cNavLink`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`href`,`components/nav#pills-with-dropdowns`],[`cNavLink`,``,3,`active`],[`cDropdownToggle`,``,`href`,``],[`cNavLink`,``],[`cNavLink`,``,3,`disabled`]],template:function(m,N){m&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Navs`),L(),Ce(12,` `),F(13,`small`),Ce(14,`Base navs`),L(),Ce(15,`
      `),L(),Ce(16,`
      `),F(17,`c-card-body`),Ce(18,`
        `),F(19,`p`,3),Ce(20,`
          The base `),F(21,`code`),Ce(22,`c-nav`),L(),Ce(23,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),L(),Ce(24,`
        `),F(25,`app-docs-example`,4),Ce(26,`
          `),F(27,`c-nav`),Ce(28,`
            `),F(29,`c-nav-item`),Ce(30,`
              `),F(31,`a`,5),Ce(32,`
                Active
              `),L(),Ce(33,`
            `),L(),Ce(34,`
            `),F(35,`c-nav-item`),Ce(36,`
              `),F(37,`a`,6),Ce(38,`Link`),L(),Ce(39,`
            `),L(),Ce(40,`
            `),F(41,`c-nav-item`),Ce(42,`
              `),F(43,`a`,6),Ce(44,`Link`),L(),Ce(45,`
            `),L(),Ce(46,`
            `),F(47,`c-nav-item`),Ce(48,`
              `),F(49,`a`,7),Ce(50,`
                Disabled
              `),L(),Ce(51,`
            `),L(),Ce(52,`
          `),L(),Ce(53,`
        `),L(),Ce(54,`
        `),F(55,`p`,8),Ce(56,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),F(57,`code`),Ce(58,`c-nav-item`),L(),Ce(59,` like above, or roll your own with a `),F(60,`code`),Ce(61,`<c-nav>`),L(),Ce(62,` element. Because
          the `),F(63,`code`),Ce(64,`.nav`),L(),Ce(65,` uses `),F(66,`code`),Ce(67,`display: flex`),L(),Ce(68,`, the `),F(69,`code`),Ce(70,`cNavLink`),L(),Ce(71,` behaves the same as `),F(72,`code`),Ce(73,`c-nav-item`),L(),Ce(74,`
          would, but
          without the extra markup.
        `),L(),Ce(75,`
        `),F(76,`app-docs-example`,4),Ce(77,`
          `),F(78,`c-nav`,9),Ce(79,`
            `),F(80,`a`,5),Ce(81,`
              Active
            `),L(),Ce(82,`
            `),F(83,`a`,6),Ce(84,`Link`),L(),Ce(85,`
            `),F(86,`a`,6),Ce(87,`Link`),L(),Ce(88,`
            `),F(89,`a`,7),Ce(90,`
              Disabled
            `),L(),Ce(91,`
          `),L(),Ce(92,`
        `),L(),Ce(93,`
      `),L(),Ce(94,`
    `),L(),Ce(95,`
  `),L(),Ce(96,`
  `),F(97,`c-col`,0),Ce(98,`
    `),F(99,`c-card`,2),Ce(100,`
      `),F(101,`c-card-header`),Ce(102,`
        `),F(103,`strong`),Ce(104,`Angular Navs`),L(),Ce(105,` `),F(106,`small`),Ce(107,`Horizontal alignment`),L(),Ce(108,`
      `),L(),Ce(109,`
      `),F(110,`c-card-body`),Ce(111,`
        `),F(112,`p`,3),Ce(113,`
          Change the horizontal alignment of your nav with
          `),F(114,`a`,10),Ce(115,`
            flexbox utilities
          `),L(),Ce(116,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),L(),Ce(117,`
        `),F(118,`p`,3),Ce(119,`
          Centered with `),F(120,`code`),Ce(121,`.justify-content-center`),L(),Ce(122,`:
        `),L(),Ce(123,`
        `),F(124,`app-docs-example`,11),Ce(125,`
          `),F(126,`c-nav`,12),Ce(127,`
            `),F(128,`c-nav-item`),Ce(129,`
              `),F(130,`a`,5),Ce(131,`
                Active
              `),L(),Ce(132,`
            `),L(),Ce(133,`
            `),F(134,`c-nav-item`),Ce(135,`
              `),F(136,`a`,6),Ce(137,`Link`),L(),Ce(138,`
            `),L(),Ce(139,`
            `),F(140,`c-nav-item`),Ce(141,`
              `),F(142,`a`,6),Ce(143,`Link`),L(),Ce(144,`
            `),L(),Ce(145,`
            `),F(146,`c-nav-item`),Ce(147,`
              `),F(148,`a`,7),Ce(149,`
                Disabled
              `),L(),Ce(150,`
            `),L(),Ce(151,`
          `),L(),Ce(152,`
        `),L(),Ce(153,`
        `),F(154,`p`,3),Ce(155,`
          Right-aligned with `),F(156,`code`),Ce(157,`.justify-content-end`),L(),Ce(158,`:
        `),L(),Ce(159,`
        `),F(160,`app-docs-example`,4),Ce(161,`
          `),F(162,`c-nav`,13),Ce(163,`
            `),F(164,`c-nav-item`),Ce(165,`
              `),F(166,`a`,5),Ce(167,`
                Active
              `),L(),Ce(168,`
            `),L(),Ce(169,`
            `),F(170,`c-nav-item`),Ce(171,`
              `),F(172,`a`,6),Ce(173,`Link`),L(),Ce(174,`
            `),L(),Ce(175,`
            `),F(176,`c-nav-item`),Ce(177,`
              `),F(178,`a`,6),Ce(179,`Link`),L(),Ce(180,`
            `),L(),Ce(181,`
            `),F(182,`c-nav-item`),Ce(183,`
              `),F(184,`a`,7),Ce(185,`
                Disabled
              `),L(),Ce(186,`
            `),L(),Ce(187,`
          `),L(),Ce(188,`
        `),L(),Ce(189,`
      `),L(),Ce(190,`
    `),L(),Ce(191,`
  `),L(),Ce(192,`
  `),F(193,`c-col`,0),Ce(194,`
    `),F(195,`c-card`,2),Ce(196,`
      `),F(197,`c-card-header`),Ce(198,`
        `),F(199,`strong`),Ce(200,`Angular Navs`),L(),Ce(201,` `),F(202,`small`),Ce(203,`Vertical`),L(),Ce(204,`
      `),L(),Ce(205,`
      `),F(206,`c-card-body`),Ce(207,`
        `),F(208,`p`,3),Ce(209,`
          Stack your navigation by changing the flex item direction with the
          `),F(210,`code`),Ce(211,`.flex-column`),L(),Ce(212,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),F(213,`code`),Ce(214,`.flex-sm-column`),L(),Ce(215,`).
        `),L(),Ce(216,`
        `),F(217,`app-docs-example`,14),Ce(218,`
          `),F(219,`c-nav`,15),Ce(220,`
            `),F(221,`c-nav-item`),Ce(222,`
              `),F(223,`a`,5),Ce(224,`
                Active
              `),L(),Ce(225,`
            `),L(),Ce(226,`
            `),F(227,`c-nav-item`),Ce(228,`
              `),F(229,`a`,6),Ce(230,`Link`),L(),Ce(231,`
            `),L(),Ce(232,`
            `),F(233,`c-nav-item`),Ce(234,`
              `),F(235,`a`,6),Ce(236,`Link`),L(),Ce(237,`
            `),L(),Ce(238,`
            `),F(239,`c-nav-item`),Ce(240,`
              `),F(241,`a`,7),Ce(242,`
                Disabled
              `),L(),Ce(243,`
            `),L(),Ce(244,`
          `),L(),Ce(245,`
        `),L(),Ce(246,`
      `),L(),Ce(247,`
    `),L(),Ce(248,`
  `),L(),Ce(249,`
  `),F(250,`c-col`,0),Ce(251,`
    `),F(252,`c-card`,2),Ce(253,`
      `),F(254,`c-card-header`),Ce(255,`
        `),F(256,`strong`),Ce(257,`Angular Navs`),L(),Ce(258,` `),F(259,`small`),Ce(260,`Tabs`),L(),Ce(261,`
      `),L(),Ce(262,`
      `),F(263,`c-card-body`),Ce(264,`
        `),F(265,`p`,3),Ce(266,`
          Take the basic nav from above and add the `),F(267,`code`),Ce(268,`variant="tabs"`),L(),Ce(269,` class
          to generate a tabbed interface
        `),L(),Ce(270,`
        `),F(271,`app-docs-example`,16),Ce(272,`
          `),F(273,`c-nav`,17),Ce(274,`
            `),F(275,`c-nav-item`),Ce(276,`
              `),F(277,`a`,5),Ce(278,`
                Active
              `),L(),Ce(279,`
            `),L(),Ce(280,`
            `),F(281,`c-nav-item`),Ce(282,`
              `),F(283,`a`,6),Ce(284,`Link`),L(),Ce(285,`
            `),L(),Ce(286,`
            `),F(287,`c-nav-item`),Ce(288,`
              `),F(289,`a`,6),Ce(290,`Link`),L(),Ce(291,`
            `),L(),Ce(292,`
            `),F(293,`c-nav-item`),Ce(294,`
              `),F(295,`a`,7),Ce(296,`
                Disabled
              `),L(),Ce(297,`
            `),L(),Ce(298,`
          `),L(),Ce(299,`
        `),L(),Ce(300,`
      `),L(),Ce(301,`
    `),L(),Ce(302,`
  `),L(),Ce(303,`
  `),F(304,`c-col`,0),Ce(305,`
    `),F(306,`c-card`,2),Ce(307,`
      `),F(308,`c-card-header`),Ce(309,`
        `),F(310,`strong`),Ce(311,`Angular Navs`),L(),Ce(312,` `),F(313,`small`),Ce(314,`Pills`),L(),Ce(315,`
      `),L(),Ce(316,`
      `),F(317,`c-card-body`),Ce(318,`
        `),F(319,`p`,3),Ce(320,`
          Take that same HTML, but use `),F(321,`code`),Ce(322,`variant="pills"`),L(),Ce(323,` instead:
        `),L(),Ce(324,`
        `),F(325,`app-docs-example`,18),Ce(326,`
          `),F(327,`c-nav`,19),Ce(328,`
            `),F(329,`c-nav-item`),Ce(330,`
              `),F(331,`a`,5),Ce(332,`
                Active
              `),L(),Ce(333,`
            `),L(),Ce(334,`
            `),F(335,`c-nav-item`),Ce(336,`
              `),F(337,`a`,6),Ce(338,`Link`),L(),Ce(339,`
            `),L(),Ce(340,`
            `),F(341,`c-nav-item`),Ce(342,`
              `),F(343,`a`,6),Ce(344,`Link`),L(),Ce(345,`
            `),L(),Ce(346,`
            `),F(347,`c-nav-item`),Ce(348,`
              `),F(349,`a`,7),Ce(350,`
                Disabled
              `),L(),Ce(351,`
            `),L(),Ce(352,`
          `),L(),Ce(353,`
        `),L(),Ce(354,`
      `),L(),Ce(355,`
    `),L(),Ce(356,`
  `),L(),Ce(357,`
  `),F(358,`c-col`,0),Ce(359,`
    `),F(360,`c-card`,2),Ce(361,`
      `),F(362,`c-card-header`),Ce(363,`
        `),F(364,`strong`),Ce(365,`Angular Navs`),L(),Ce(366,` `),F(367,`small`),Ce(368,`Underline`),L(),Ce(369,`
      `),L(),Ce(370,`
      `),F(371,`c-card-body`),Ce(372,`
        `),F(373,`p`,3),Ce(374,`
          Take that same HTML, but use `),F(375,`code`),Ce(376,`variant="Underline"`),L(),Ce(377,` instead:
        `),L(),Ce(378,`
        `),F(379,`app-docs-example`,20),Ce(380,`
          `),F(381,`c-nav`,21),Ce(382,`
            `),F(383,`c-nav-item`),Ce(384,`
              `),F(385,`a`,5),Ce(386,`
                Active
              `),L(),Ce(387,`
            `),L(),Ce(388,`
            `),F(389,`c-nav-item`),Ce(390,`
              `),F(391,`a`,6),Ce(392,`Link`),L(),Ce(393,`
            `),L(),Ce(394,`
            `),F(395,`c-nav-item`),Ce(396,`
              `),F(397,`a`,6),Ce(398,`Link`),L(),Ce(399,`
            `),L(),Ce(400,`
            `),F(401,`c-nav-item`),Ce(402,`
              `),F(403,`a`,7),Ce(404,`
                Disabled
              `),L(),Ce(405,`
            `),L(),Ce(406,`
          `),L(),Ce(407,`
        `),L(),Ce(408,`
      `),L(),Ce(409,`
    `),L(),Ce(410,`
  `),L(),Ce(411,`
  `),F(412,`c-col`,0),Ce(413,`
    `),F(414,`c-card`,2),Ce(415,`
      `),F(416,`c-card-header`),Ce(417,`
        `),F(418,`strong`),Ce(419,`Angular Navs`),L(),Ce(420,` `),F(421,`small`),Ce(422,`Fill and justify`),L(),Ce(423,`
      `),L(),Ce(424,`
      `),F(425,`c-card-body`),Ce(426,`
        `),F(427,`p`,3),Ce(428,`
          Force your `),F(429,`code`),Ce(430,`.nav`),L(),Ce(431,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),F(432,`code`),Ce(433,`.nav-item`),L(),Ce(434,`s, use `),F(435,`code`),Ce(436,`layout="fill"`),L(),Ce(437,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),L(),Ce(438,`
        `),F(439,`app-docs-example`,22),Ce(440,`
          `),F(441,`c-nav`,23),Ce(442,`
            `),F(443,`c-nav-item`),Ce(444,`
              `),F(445,`a`,5),Ce(446,`
                Active
              `),L(),Ce(447,`
            `),L(),Ce(448,`
            `),F(449,`c-nav-item`),Ce(450,`
              `),F(451,`a`,6),Ce(452,`Link`),L(),Ce(453,`
            `),L(),Ce(454,`
            `),F(455,`c-nav-item`),Ce(456,`
              `),F(457,`a`,6),Ce(458,`Link`),L(),Ce(459,`
            `),L(),Ce(460,`
            `),F(461,`c-nav-item`),Ce(462,`
              `),F(463,`a`,7),Ce(464,`
                Disabled
              `),L(),Ce(465,`
            `),L(),Ce(466,`
          `),L(),Ce(467,`
        `),L(),Ce(468,`
        `),F(469,`p`,3),Ce(470,`
          For equal-width elements, use `),F(471,`code`),Ce(472,`layout="justified"`),L(),Ce(473,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),L(),Ce(474,`
        `),F(475,`app-docs-example`,22),Ce(476,`
          `),F(477,`c-nav`,24),Ce(478,`
            `),F(479,`c-nav-item`),Ce(480,`
              `),F(481,`a`,5),Ce(482,`
                Active
              `),L(),Ce(483,`
            `),L(),Ce(484,`
            `),F(485,`c-nav-item`),Ce(486,`
              `),F(487,`a`,6),Ce(488,`Link`),L(),Ce(489,`
            `),L(),Ce(490,`
            `),F(491,`c-nav-item`),Ce(492,`
              `),F(493,`a`,6),Ce(494,`Link`),L(),Ce(495,`
            `),L(),Ce(496,`
            `),F(497,`c-nav-item`),Ce(498,`
              `),F(499,`a`,7),Ce(500,`
                Disabled
              `),L(),Ce(501,`
            `),L(),Ce(502,`
          `),L(),Ce(503,`
        `),L(),Ce(504,`
      `),L(),Ce(505,`
    `),L(),Ce(506,`
  `),L(),Ce(507,`
  `),F(508,`c-col`,0),Ce(509,`
    `),F(510,`c-card`,2),Ce(511,`
      `),F(512,`c-card-header`),Ce(513,`
        `),F(514,`strong`),Ce(515,`Angular Navs`),L(),Ce(516,` `),F(517,`small`),Ce(518,`Working with flex utilities`),L(),Ce(519,`
      `),L(),Ce(520,`
      `),F(521,`c-card-body`),Ce(522,`
        `),F(523,`p`,3),Ce(524,`
          If you need responsive nav variations, consider using a series of
          `),F(525,`a`,25),Ce(526,`flexbox utilities`),L(),Ce(527,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),L(),Ce(528,`
        `),F(529,`app-docs-example`,26),Ce(530,`
          `),F(531,`c-nav`,27),Ce(532,`
            `),F(533,`a`,5),Ce(534,`
              Active
            `),L(),Ce(535,`
            `),F(536,`a`,6),Ce(537,`Link`),L(),Ce(538,`
            `),F(539,`a`,6),Ce(540,`Link`),L(),Ce(541,`
            `),F(542,`a`,7),Ce(543,`
              Disabled
            `),L(),Ce(544,`
          `),L(),Ce(545,`
        `),L(),Ce(546,`
      `),L(),Ce(547,`
    `),L(),Ce(548,`
  `),L(),Ce(549,`
  `),F(550,`c-col`,0),Ce(551,`
    `),F(552,`c-card`,2),Ce(553,`
      `),F(554,`c-card-header`),Ce(555,`
        `),F(556,`strong`),Ce(557,`Angular Navs`),L(),Ce(558,` `),F(559,`small`),Ce(560,`Tabs with dropdowns`),L(),Ce(561,`
      `),L(),Ce(562,`
      `),F(563,`c-card-body`),Ce(564,`
        `),F(565,`app-docs-example`,28),Ce(566,`
          `),F(567,`c-nav`,17),Ce(568,`
            `),F(569,`c-nav-item`),Ce(570,`
              `),F(571,`button`,5),Ce(572,`
                Active
              `),L(),Ce(573,`
            `),L(),Ce(574,`
            `),F(575,`c-dropdown`,29),Ce(576,`
              `),F(577,`button`,30),Ce(578,`
                Dropdown button
              `),L(),Ce(579,`
              `),F(580,`ul`,31),Ce(581,`
                `),F(582,`li`),Ce(583,`
                  `),F(584,`button`,32),Ce(585,`Action`),L(),Ce(586,`
                `),L(),Ce(587,`
                `),F(588,`li`),Ce(589,`
                  `),F(590,`button`,32),Ce(591,`Another action`),L(),Ce(592,`
                `),L(),Ce(593,`
                `),F(594,`li`),Ce(595,`
                  `),F(596,`button`,32),Ce(597,`Something else here`),L(),Ce(598,`
                `),L(),Ce(599,`
              `),L(),Ce(600,`
            `),L(),Ce(601,`
            `),F(602,`c-nav-item`),Ce(603,`
              `),F(604,`button`,6),Ce(605,`Link`),L(),Ce(606,`
            `),L(),Ce(607,`
            `),F(608,`c-nav-item`),Ce(609,`
              `),F(610,`button`,7),Ce(611,`
                Disabled
              `),L(),Ce(612,`
            `),L(),Ce(613,`
          `),L(),Ce(614,`
        `),L(),Ce(615,`
      `),L(),Ce(616,`
    `),L(),Ce(617,`
  `),L(),Ce(618,`
  `),F(619,`c-col`,0),Ce(620,`
    `),F(621,`c-card`,2),Ce(622,`
      `),F(623,`c-card-header`),Ce(624,`
        `),F(625,`strong`),Ce(626,`Angular Navs`),L(),Ce(627,` `),F(628,`small`),Ce(629,`Pills with dropdowns`),L(),Ce(630,`
      `),L(),Ce(631,`
      `),F(632,`c-card-body`),Ce(633,`
        `),F(634,`app-docs-example`,33),Ce(635,`
          `),F(636,`c-nav`,19),Ce(637,`
            `),F(638,`c-nav-item`),Ce(639,`
              `),F(640,`a`,34),Ce(641,`
                Active
              `),L(),Ce(642,`
            `),L(),Ce(643,`
            `),F(644,`c-dropdown`,29),Ce(645,`
              `),F(646,`a`,35),Ce(647,`
                Dropdown button
              `),L(),Ce(648,`
              `),F(649,`ul`,31),Ce(650,`
                `),F(651,`li`)(652,`a`,32),Ce(653,`Action`),L()(),Ce(654,`
                `),F(655,`li`)(656,`a`,32),Ce(657,`Another action`),L()(),Ce(658,`
                `),F(659,`li`)(660,`a`,32),Ce(661,`Something else here`),L()(),Ce(662,`
              `),L(),Ce(663,`
            `),L(),Ce(664,`
            `),F(665,`c-nav-item`),Ce(666,`
              `),F(667,`a`,36),Ce(668,`Link`),L(),Ce(669,`
            `),L(),Ce(670,`
            `),F(671,`c-nav-item`),Ce(672,`
              `),F(673,`a`,37),Ce(674,`
                Disabled
              `),L(),Ce(675,`
            `),L(),Ce(676,`
          `),L(),Ce(677,`
        `),L(),Ce(678,`
      `),L(),Ce(679,`
    `),L(),Ce(680,`
  `),L(),Ce(681,`
`),L()),m&2&&(S(31),U(`active`,!0)(`routerLink`,gn(75,l)),S(6),U(`routerLink`,gn(76,l)),S(6),U(`routerLink`,gn(77,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(78,l)),S(31),U(`active`,!0)(`routerLink`,gn(79,l)),S(3),U(`routerLink`,gn(80,l)),S(3),U(`routerLink`,gn(81,l)),S(3),U(`disabled`,!0)(`routerLink`,gn(82,l)),S(41),U(`active`,!0)(`routerLink`,gn(83,l)),S(6),U(`routerLink`,gn(84,l)),S(6),U(`routerLink`,gn(85,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(86,l)),S(18),U(`active`,!0)(`routerLink`,gn(87,l)),S(6),U(`routerLink`,gn(88,l)),S(6),U(`routerLink`,gn(89,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(90,l)),S(39),U(`active`,!0)(`routerLink`,gn(91,l)),S(6),U(`routerLink`,gn(92,l)),S(6),U(`routerLink`,gn(93,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(94,l)),S(36),U(`active`,!0)(`routerLink`,gn(95,l)),S(6),U(`routerLink`,gn(96,l)),S(6),U(`routerLink`,gn(97,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(98,l)),S(36),U(`active`,!0)(`routerLink`,gn(99,l)),S(6),U(`routerLink`,gn(100,l)),S(6),U(`routerLink`,gn(101,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(102,l)),S(36),U(`active`,!0),S(18),U(`disabled`,!0),S(42),U(`active`,!0)(`routerLink`,gn(103,l)),S(6),U(`routerLink`,gn(104,l)),S(6),U(`routerLink`,gn(105,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(106,l)),S(18),U(`active`,!0)(`routerLink`,gn(107,l)),S(6),U(`routerLink`,gn(108,l)),S(6),U(`routerLink`,gn(109,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(110,l)),S(34),U(`active`,!0)(`routerLink`,gn(111,l)),S(3),U(`routerLink`,gn(112,l)),S(3),U(`routerLink`,gn(113,l)),S(3),U(`disabled`,!0)(`routerLink`,gn(114,l)),S(29),U(`active`,!0)(`routerLink`,gn(115,l)),S(13),U(`routerLink`,gn(116,l)),S(6),U(`routerLink`,gn(117,l)),S(6),U(`routerLink`,gn(118,l)),S(8),U(`routerLink`,gn(119,l)),S(6),U(`disabled`,!0)(`routerLink`,gn(120,l)),S(30),U(`active`,!0),S(12),U(`routerLink`,gn(121,l)),S(4),U(`routerLink`,gn(122,l)),S(4),U(`routerLink`,gn(123,l)),S(13),U(`disabled`,!0))},dependencies:[Cle,AU,Wa,uU,Ka,E,Tle,Ele,OU,ri,hA,Xx,xp,Jx,c],encapsulation:2})}};export{w as NavsComponent};