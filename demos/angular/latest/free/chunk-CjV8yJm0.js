import{Dt as O,Ft as Pa,Gi as un,Kn as bN,Mn as Zi,N as FN,Oi as rH,Rr as joe,Wt as Re,Yt as S,_n as VV,ai as nH,en as T,gn as V,gt as La,j as F,qt as Roe,ua as ye,ur as ep,x as DN,yn as Voe}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var l=()=>[];var w=class d{static{this.ɵfac=function(m){return new(m||d)}}static{this.ɵcmp=T({type:d,selectors:[[`app-navs`]],decls:682,vars:124,consts:[[`xs`,`12`],[`href`,`components/nav`,`title`,`Nav`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/nav#base-nav`],[`cNavLink`,``,3,`active`,`routerLink`],[`cNavLink`,``,3,`routerLink`],[`cNavLink`,``,3,`disabled`,`routerLink`],[1,`text-body-secondary`,`small`,`mt-3`],[`role`,`navigation`],[`href`,`https://coreui.io/docs/layout/grid/#horizontal-alignment`],[`href`,`components/nav#horizontal-alignment`],[1,`justify-content-center`],[1,`justify-content-end`],[`href`,`components/nav#vertical`],[1,`flex-column`],[`href`,`components/nav#tabs`],[`variant`,`tabs`],[`href`,`components/nav#pills`],[`variant`,`pills`],[`href`,`components/nav#Underline`],[`variant`,`underline`],[`href`,`components/nav#fill-and-justify`],[`layout`,`fill`,`variant`,`pills`],[`layout`,`justified`,`variant`,`pills`],[`href`,`https://coreui.io/docs/utilities/flex`],[`href`,`components/nav#working-with-flex-utilities`],[`role`,`navigation`,`variant`,`pills`,1,`flex-column`,`flex-sm-row`],[`href`,`components/nav#tabs-with-dropdowns`],[`variant`,`nav-item`],[`cDropdownToggle`,``,`href`,``,`cNavLink`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`href`,`components/nav#pills-with-dropdowns`],[`cNavLink`,``,3,`active`],[`cDropdownToggle`,``,`href`,``],[`cNavLink`,``],[`cNavLink`,``,3,`disabled`]],template:function(m,N){m&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Navs`),F(),ye(12,` `),O(13,`small`),ye(14,`Base navs`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`,3),ye(20,`
          The base `),O(21,`code`),ye(22,`c-nav`),F(),ye(23,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),F(),ye(24,`
        `),O(25,`app-docs-example`,4),ye(26,`
          `),O(27,`c-nav`),ye(28,`
            `),O(29,`c-nav-item`),ye(30,`
              `),O(31,`a`,5),ye(32,`
                Active
              `),F(),ye(33,`
            `),F(),ye(34,`
            `),O(35,`c-nav-item`),ye(36,`
              `),O(37,`a`,6),ye(38,`Link`),F(),ye(39,`
            `),F(),ye(40,`
            `),O(41,`c-nav-item`),ye(42,`
              `),O(43,`a`,6),ye(44,`Link`),F(),ye(45,`
            `),F(),ye(46,`
            `),O(47,`c-nav-item`),ye(48,`
              `),O(49,`a`,7),ye(50,`
                Disabled
              `),F(),ye(51,`
            `),F(),ye(52,`
          `),F(),ye(53,`
        `),F(),ye(54,`
        `),O(55,`p`,8),ye(56,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),O(57,`code`),ye(58,`c-nav-item`),F(),ye(59,` like above, or roll your own with a `),O(60,`code`),ye(61,`<c-nav>`),F(),ye(62,` element. Because
          the `),O(63,`code`),ye(64,`.nav`),F(),ye(65,` uses `),O(66,`code`),ye(67,`display: flex`),F(),ye(68,`, the `),O(69,`code`),ye(70,`cNavLink`),F(),ye(71,` behaves the same as `),O(72,`code`),ye(73,`c-nav-item`),F(),ye(74,`
          would, but
          without the extra markup.
        `),F(),ye(75,`
        `),O(76,`app-docs-example`,4),ye(77,`
          `),O(78,`c-nav`,9),ye(79,`
            `),O(80,`a`,5),ye(81,`
              Active
            `),F(),ye(82,`
            `),O(83,`a`,6),ye(84,`Link`),F(),ye(85,`
            `),O(86,`a`,6),ye(87,`Link`),F(),ye(88,`
            `),O(89,`a`,7),ye(90,`
              Disabled
            `),F(),ye(91,`
          `),F(),ye(92,`
        `),F(),ye(93,`
      `),F(),ye(94,`
    `),F(),ye(95,`
  `),F(),ye(96,`
  `),O(97,`c-col`,0),ye(98,`
    `),O(99,`c-card`,2),ye(100,`
      `),O(101,`c-card-header`),ye(102,`
        `),O(103,`strong`),ye(104,`Angular Navs`),F(),ye(105,` `),O(106,`small`),ye(107,`Horizontal alignment`),F(),ye(108,`
      `),F(),ye(109,`
      `),O(110,`c-card-body`),ye(111,`
        `),O(112,`p`,3),ye(113,`
          Change the horizontal alignment of your nav with
          `),O(114,`a`,10),ye(115,`
            flexbox utilities
          `),F(),ye(116,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),F(),ye(117,`
        `),O(118,`p`,3),ye(119,`
          Centered with `),O(120,`code`),ye(121,`.justify-content-center`),F(),ye(122,`:
        `),F(),ye(123,`
        `),O(124,`app-docs-example`,11),ye(125,`
          `),O(126,`c-nav`,12),ye(127,`
            `),O(128,`c-nav-item`),ye(129,`
              `),O(130,`a`,5),ye(131,`
                Active
              `),F(),ye(132,`
            `),F(),ye(133,`
            `),O(134,`c-nav-item`),ye(135,`
              `),O(136,`a`,6),ye(137,`Link`),F(),ye(138,`
            `),F(),ye(139,`
            `),O(140,`c-nav-item`),ye(141,`
              `),O(142,`a`,6),ye(143,`Link`),F(),ye(144,`
            `),F(),ye(145,`
            `),O(146,`c-nav-item`),ye(147,`
              `),O(148,`a`,7),ye(149,`
                Disabled
              `),F(),ye(150,`
            `),F(),ye(151,`
          `),F(),ye(152,`
        `),F(),ye(153,`
        `),O(154,`p`,3),ye(155,`
          Right-aligned with `),O(156,`code`),ye(157,`.justify-content-end`),F(),ye(158,`:
        `),F(),ye(159,`
        `),O(160,`app-docs-example`,4),ye(161,`
          `),O(162,`c-nav`,13),ye(163,`
            `),O(164,`c-nav-item`),ye(165,`
              `),O(166,`a`,5),ye(167,`
                Active
              `),F(),ye(168,`
            `),F(),ye(169,`
            `),O(170,`c-nav-item`),ye(171,`
              `),O(172,`a`,6),ye(173,`Link`),F(),ye(174,`
            `),F(),ye(175,`
            `),O(176,`c-nav-item`),ye(177,`
              `),O(178,`a`,6),ye(179,`Link`),F(),ye(180,`
            `),F(),ye(181,`
            `),O(182,`c-nav-item`),ye(183,`
              `),O(184,`a`,7),ye(185,`
                Disabled
              `),F(),ye(186,`
            `),F(),ye(187,`
          `),F(),ye(188,`
        `),F(),ye(189,`
      `),F(),ye(190,`
    `),F(),ye(191,`
  `),F(),ye(192,`
  `),O(193,`c-col`,0),ye(194,`
    `),O(195,`c-card`,2),ye(196,`
      `),O(197,`c-card-header`),ye(198,`
        `),O(199,`strong`),ye(200,`Angular Navs`),F(),ye(201,` `),O(202,`small`),ye(203,`Vertical`),F(),ye(204,`
      `),F(),ye(205,`
      `),O(206,`c-card-body`),ye(207,`
        `),O(208,`p`,3),ye(209,`
          Stack your navigation by changing the flex item direction with the
          `),O(210,`code`),ye(211,`.flex-column`),F(),ye(212,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),O(213,`code`),ye(214,`.flex-sm-column`),F(),ye(215,`).
        `),F(),ye(216,`
        `),O(217,`app-docs-example`,14),ye(218,`
          `),O(219,`c-nav`,15),ye(220,`
            `),O(221,`c-nav-item`),ye(222,`
              `),O(223,`a`,5),ye(224,`
                Active
              `),F(),ye(225,`
            `),F(),ye(226,`
            `),O(227,`c-nav-item`),ye(228,`
              `),O(229,`a`,6),ye(230,`Link`),F(),ye(231,`
            `),F(),ye(232,`
            `),O(233,`c-nav-item`),ye(234,`
              `),O(235,`a`,6),ye(236,`Link`),F(),ye(237,`
            `),F(),ye(238,`
            `),O(239,`c-nav-item`),ye(240,`
              `),O(241,`a`,7),ye(242,`
                Disabled
              `),F(),ye(243,`
            `),F(),ye(244,`
          `),F(),ye(245,`
        `),F(),ye(246,`
      `),F(),ye(247,`
    `),F(),ye(248,`
  `),F(),ye(249,`
  `),O(250,`c-col`,0),ye(251,`
    `),O(252,`c-card`,2),ye(253,`
      `),O(254,`c-card-header`),ye(255,`
        `),O(256,`strong`),ye(257,`Angular Navs`),F(),ye(258,` `),O(259,`small`),ye(260,`Tabs`),F(),ye(261,`
      `),F(),ye(262,`
      `),O(263,`c-card-body`),ye(264,`
        `),O(265,`p`,3),ye(266,`
          Take the basic nav from above and add the `),O(267,`code`),ye(268,`variant="tabs"`),F(),ye(269,` class
          to generate a tabbed interface
        `),F(),ye(270,`
        `),O(271,`app-docs-example`,16),ye(272,`
          `),O(273,`c-nav`,17),ye(274,`
            `),O(275,`c-nav-item`),ye(276,`
              `),O(277,`a`,5),ye(278,`
                Active
              `),F(),ye(279,`
            `),F(),ye(280,`
            `),O(281,`c-nav-item`),ye(282,`
              `),O(283,`a`,6),ye(284,`Link`),F(),ye(285,`
            `),F(),ye(286,`
            `),O(287,`c-nav-item`),ye(288,`
              `),O(289,`a`,6),ye(290,`Link`),F(),ye(291,`
            `),F(),ye(292,`
            `),O(293,`c-nav-item`),ye(294,`
              `),O(295,`a`,7),ye(296,`
                Disabled
              `),F(),ye(297,`
            `),F(),ye(298,`
          `),F(),ye(299,`
        `),F(),ye(300,`
      `),F(),ye(301,`
    `),F(),ye(302,`
  `),F(),ye(303,`
  `),O(304,`c-col`,0),ye(305,`
    `),O(306,`c-card`,2),ye(307,`
      `),O(308,`c-card-header`),ye(309,`
        `),O(310,`strong`),ye(311,`Angular Navs`),F(),ye(312,` `),O(313,`small`),ye(314,`Pills`),F(),ye(315,`
      `),F(),ye(316,`
      `),O(317,`c-card-body`),ye(318,`
        `),O(319,`p`,3),ye(320,`
          Take that same HTML, but use `),O(321,`code`),ye(322,`variant="pills"`),F(),ye(323,` instead:
        `),F(),ye(324,`
        `),O(325,`app-docs-example`,18),ye(326,`
          `),O(327,`c-nav`,19),ye(328,`
            `),O(329,`c-nav-item`),ye(330,`
              `),O(331,`a`,5),ye(332,`
                Active
              `),F(),ye(333,`
            `),F(),ye(334,`
            `),O(335,`c-nav-item`),ye(336,`
              `),O(337,`a`,6),ye(338,`Link`),F(),ye(339,`
            `),F(),ye(340,`
            `),O(341,`c-nav-item`),ye(342,`
              `),O(343,`a`,6),ye(344,`Link`),F(),ye(345,`
            `),F(),ye(346,`
            `),O(347,`c-nav-item`),ye(348,`
              `),O(349,`a`,7),ye(350,`
                Disabled
              `),F(),ye(351,`
            `),F(),ye(352,`
          `),F(),ye(353,`
        `),F(),ye(354,`
      `),F(),ye(355,`
    `),F(),ye(356,`
  `),F(),ye(357,`
  `),O(358,`c-col`,0),ye(359,`
    `),O(360,`c-card`,2),ye(361,`
      `),O(362,`c-card-header`),ye(363,`
        `),O(364,`strong`),ye(365,`Angular Navs`),F(),ye(366,` `),O(367,`small`),ye(368,`Underline`),F(),ye(369,`
      `),F(),ye(370,`
      `),O(371,`c-card-body`),ye(372,`
        `),O(373,`p`,3),ye(374,`
          Take that same HTML, but use `),O(375,`code`),ye(376,`variant="Underline"`),F(),ye(377,` instead:
        `),F(),ye(378,`
        `),O(379,`app-docs-example`,20),ye(380,`
          `),O(381,`c-nav`,21),ye(382,`
            `),O(383,`c-nav-item`),ye(384,`
              `),O(385,`a`,5),ye(386,`
                Active
              `),F(),ye(387,`
            `),F(),ye(388,`
            `),O(389,`c-nav-item`),ye(390,`
              `),O(391,`a`,6),ye(392,`Link`),F(),ye(393,`
            `),F(),ye(394,`
            `),O(395,`c-nav-item`),ye(396,`
              `),O(397,`a`,6),ye(398,`Link`),F(),ye(399,`
            `),F(),ye(400,`
            `),O(401,`c-nav-item`),ye(402,`
              `),O(403,`a`,7),ye(404,`
                Disabled
              `),F(),ye(405,`
            `),F(),ye(406,`
          `),F(),ye(407,`
        `),F(),ye(408,`
      `),F(),ye(409,`
    `),F(),ye(410,`
  `),F(),ye(411,`
  `),O(412,`c-col`,0),ye(413,`
    `),O(414,`c-card`,2),ye(415,`
      `),O(416,`c-card-header`),ye(417,`
        `),O(418,`strong`),ye(419,`Angular Navs`),F(),ye(420,` `),O(421,`small`),ye(422,`Fill and justify`),F(),ye(423,`
      `),F(),ye(424,`
      `),O(425,`c-card-body`),ye(426,`
        `),O(427,`p`,3),ye(428,`
          Force your `),O(429,`code`),ye(430,`.nav`),F(),ye(431,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),O(432,`code`),ye(433,`.nav-item`),F(),ye(434,`s, use `),O(435,`code`),ye(436,`layout="fill"`),F(),ye(437,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),F(),ye(438,`
        `),O(439,`app-docs-example`,22),ye(440,`
          `),O(441,`c-nav`,23),ye(442,`
            `),O(443,`c-nav-item`),ye(444,`
              `),O(445,`a`,5),ye(446,`
                Active
              `),F(),ye(447,`
            `),F(),ye(448,`
            `),O(449,`c-nav-item`),ye(450,`
              `),O(451,`a`,6),ye(452,`Link`),F(),ye(453,`
            `),F(),ye(454,`
            `),O(455,`c-nav-item`),ye(456,`
              `),O(457,`a`,6),ye(458,`Link`),F(),ye(459,`
            `),F(),ye(460,`
            `),O(461,`c-nav-item`),ye(462,`
              `),O(463,`a`,7),ye(464,`
                Disabled
              `),F(),ye(465,`
            `),F(),ye(466,`
          `),F(),ye(467,`
        `),F(),ye(468,`
        `),O(469,`p`,3),ye(470,`
          For equal-width elements, use `),O(471,`code`),ye(472,`layout="justified"`),F(),ye(473,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),F(),ye(474,`
        `),O(475,`app-docs-example`,22),ye(476,`
          `),O(477,`c-nav`,24),ye(478,`
            `),O(479,`c-nav-item`),ye(480,`
              `),O(481,`a`,5),ye(482,`
                Active
              `),F(),ye(483,`
            `),F(),ye(484,`
            `),O(485,`c-nav-item`),ye(486,`
              `),O(487,`a`,6),ye(488,`Link`),F(),ye(489,`
            `),F(),ye(490,`
            `),O(491,`c-nav-item`),ye(492,`
              `),O(493,`a`,6),ye(494,`Link`),F(),ye(495,`
            `),F(),ye(496,`
            `),O(497,`c-nav-item`),ye(498,`
              `),O(499,`a`,7),ye(500,`
                Disabled
              `),F(),ye(501,`
            `),F(),ye(502,`
          `),F(),ye(503,`
        `),F(),ye(504,`
      `),F(),ye(505,`
    `),F(),ye(506,`
  `),F(),ye(507,`
  `),O(508,`c-col`,0),ye(509,`
    `),O(510,`c-card`,2),ye(511,`
      `),O(512,`c-card-header`),ye(513,`
        `),O(514,`strong`),ye(515,`Angular Navs`),F(),ye(516,` `),O(517,`small`),ye(518,`Working with flex utilities`),F(),ye(519,`
      `),F(),ye(520,`
      `),O(521,`c-card-body`),ye(522,`
        `),O(523,`p`,3),ye(524,`
          If you need responsive nav variations, consider using a series of
          `),O(525,`a`,25),ye(526,`flexbox utilities`),F(),ye(527,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),F(),ye(528,`
        `),O(529,`app-docs-example`,26),ye(530,`
          `),O(531,`c-nav`,27),ye(532,`
            `),O(533,`a`,5),ye(534,`
              Active
            `),F(),ye(535,`
            `),O(536,`a`,6),ye(537,`Link`),F(),ye(538,`
            `),O(539,`a`,6),ye(540,`Link`),F(),ye(541,`
            `),O(542,`a`,7),ye(543,`
              Disabled
            `),F(),ye(544,`
          `),F(),ye(545,`
        `),F(),ye(546,`
      `),F(),ye(547,`
    `),F(),ye(548,`
  `),F(),ye(549,`
  `),O(550,`c-col`,0),ye(551,`
    `),O(552,`c-card`,2),ye(553,`
      `),O(554,`c-card-header`),ye(555,`
        `),O(556,`strong`),ye(557,`Angular Navs`),F(),ye(558,` `),O(559,`small`),ye(560,`Tabs with dropdowns`),F(),ye(561,`
      `),F(),ye(562,`
      `),O(563,`c-card-body`),ye(564,`
        `),O(565,`app-docs-example`,28),ye(566,`
          `),O(567,`c-nav`,17),ye(568,`
            `),O(569,`c-nav-item`),ye(570,`
              `),O(571,`button`,5),ye(572,`
                Active
              `),F(),ye(573,`
            `),F(),ye(574,`
            `),O(575,`c-dropdown`,29),ye(576,`
              `),O(577,`button`,30),ye(578,`
                Dropdown button
              `),F(),ye(579,`
              `),O(580,`ul`,31),ye(581,`
                `),O(582,`li`),ye(583,`
                  `),O(584,`button`,32),ye(585,`Action`),F(),ye(586,`
                `),F(),ye(587,`
                `),O(588,`li`),ye(589,`
                  `),O(590,`button`,32),ye(591,`Another action`),F(),ye(592,`
                `),F(),ye(593,`
                `),O(594,`li`),ye(595,`
                  `),O(596,`button`,32),ye(597,`Something else here`),F(),ye(598,`
                `),F(),ye(599,`
              `),F(),ye(600,`
            `),F(),ye(601,`
            `),O(602,`c-nav-item`),ye(603,`
              `),O(604,`button`,6),ye(605,`Link`),F(),ye(606,`
            `),F(),ye(607,`
            `),O(608,`c-nav-item`),ye(609,`
              `),O(610,`button`,7),ye(611,`
                Disabled
              `),F(),ye(612,`
            `),F(),ye(613,`
          `),F(),ye(614,`
        `),F(),ye(615,`
      `),F(),ye(616,`
    `),F(),ye(617,`
  `),F(),ye(618,`
  `),O(619,`c-col`,0),ye(620,`
    `),O(621,`c-card`,2),ye(622,`
      `),O(623,`c-card-header`),ye(624,`
        `),O(625,`strong`),ye(626,`Angular Navs`),F(),ye(627,` `),O(628,`small`),ye(629,`Pills with dropdowns`),F(),ye(630,`
      `),F(),ye(631,`
      `),O(632,`c-card-body`),ye(633,`
        `),O(634,`app-docs-example`,33),ye(635,`
          `),O(636,`c-nav`,19),ye(637,`
            `),O(638,`c-nav-item`),ye(639,`
              `),O(640,`a`,34),ye(641,`
                Active
              `),F(),ye(642,`
            `),F(),ye(643,`
            `),O(644,`c-dropdown`,29),ye(645,`
              `),O(646,`a`,35),ye(647,`
                Dropdown button
              `),F(),ye(648,`
              `),O(649,`ul`,31),ye(650,`
                `),O(651,`li`)(652,`a`,32),ye(653,`Action`),F()(),ye(654,`
                `),O(655,`li`)(656,`a`,32),ye(657,`Another action`),F()(),ye(658,`
                `),O(659,`li`)(660,`a`,32),ye(661,`Something else here`),F()(),ye(662,`
              `),F(),ye(663,`
            `),F(),ye(664,`
            `),O(665,`c-nav-item`),ye(666,`
              `),O(667,`a`,36),ye(668,`Link`),F(),ye(669,`
            `),F(),ye(670,`
            `),O(671,`c-nav-item`),ye(672,`
              `),O(673,`a`,37),ye(674,`
                Disabled
              `),F(),ye(675,`
            `),F(),ye(676,`
          `),F(),ye(677,`
        `),F(),ye(678,`
      `),F(),ye(679,`
    `),F(),ye(680,`
  `),F(),ye(681,`
`),F()),m&2&&(S(31),V(`active`,!0)(`routerLink`,un(75,l)),S(6),V(`routerLink`,un(76,l)),S(6),V(`routerLink`,un(77,l)),S(6),V(`disabled`,!0)(`routerLink`,un(78,l)),S(31),V(`active`,!0)(`routerLink`,un(79,l)),S(3),V(`routerLink`,un(80,l)),S(3),V(`routerLink`,un(81,l)),S(3),V(`disabled`,!0)(`routerLink`,un(82,l)),S(41),V(`active`,!0)(`routerLink`,un(83,l)),S(6),V(`routerLink`,un(84,l)),S(6),V(`routerLink`,un(85,l)),S(6),V(`disabled`,!0)(`routerLink`,un(86,l)),S(18),V(`active`,!0)(`routerLink`,un(87,l)),S(6),V(`routerLink`,un(88,l)),S(6),V(`routerLink`,un(89,l)),S(6),V(`disabled`,!0)(`routerLink`,un(90,l)),S(39),V(`active`,!0)(`routerLink`,un(91,l)),S(6),V(`routerLink`,un(92,l)),S(6),V(`routerLink`,un(93,l)),S(6),V(`disabled`,!0)(`routerLink`,un(94,l)),S(36),V(`active`,!0)(`routerLink`,un(95,l)),S(6),V(`routerLink`,un(96,l)),S(6),V(`routerLink`,un(97,l)),S(6),V(`disabled`,!0)(`routerLink`,un(98,l)),S(36),V(`active`,!0)(`routerLink`,un(99,l)),S(6),V(`routerLink`,un(100,l)),S(6),V(`routerLink`,un(101,l)),S(6),V(`disabled`,!0)(`routerLink`,un(102,l)),S(36),V(`active`,!0),S(18),V(`disabled`,!0),S(42),V(`active`,!0)(`routerLink`,un(103,l)),S(6),V(`routerLink`,un(104,l)),S(6),V(`routerLink`,un(105,l)),S(6),V(`disabled`,!0)(`routerLink`,un(106,l)),S(18),V(`active`,!0)(`routerLink`,un(107,l)),S(6),V(`routerLink`,un(108,l)),S(6),V(`routerLink`,un(109,l)),S(6),V(`disabled`,!0)(`routerLink`,un(110,l)),S(34),V(`active`,!0)(`routerLink`,un(111,l)),S(3),V(`routerLink`,un(112,l)),S(3),V(`routerLink`,un(113,l)),S(3),V(`disabled`,!0)(`routerLink`,un(114,l)),S(29),V(`active`,!0)(`routerLink`,un(115,l)),S(13),V(`routerLink`,un(116,l)),S(6),V(`routerLink`,un(117,l)),S(6),V(`routerLink`,un(118,l)),S(8),V(`routerLink`,un(119,l)),S(6),V(`disabled`,!0)(`routerLink`,un(120,l)),S(30),V(`active`,!0),S(12),V(`routerLink`,un(121,l)),S(4),V(`routerLink`,un(122,l)),S(4),V(`routerLink`,un(123,l)),S(13),V(`disabled`,!0))},dependencies:[Roe,nH,Pa,VV,La,E,Voe,joe,rH,Zi,FN,bN,ep,DN,c],encapsulation:2})}};export{w as NavsComponent};