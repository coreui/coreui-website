import{$t as V,A as F,At as QN,D as E,Hr as ke,Lr as ja,Pn as _,Vr as k,Xn as cA,d as Ba,fa as ye,fn as Xi,gr as fn,ha as zH,ht as Mse,it as KN,l as Ase,q as IH,qt as UH,sa as xse,sr as dp}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";var l=()=>[];var w=class d{static{this.ɵfac=function(m){return new(m||d)}}static{this.ɵcmp=E({type:d,selectors:[[`app-navs`]],decls:682,vars:124,consts:[[`xs`,`12`],[`href`,`components/nav`,`title`,`Nav`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/nav#base-nav`],[`cNavLink`,``,3,`active`,`routerLink`],[`cNavLink`,``,3,`routerLink`],[`cNavLink`,``,3,`disabled`,`routerLink`],[1,`text-body-secondary`,`small`,`mt-3`],[`role`,`navigation`],[`href`,`https://coreui.io/docs/layout/grid/#horizontal-alignment`],[`href`,`components/nav#horizontal-alignment`],[1,`justify-content-center`],[1,`justify-content-end`],[`href`,`components/nav#vertical`],[1,`flex-column`],[`href`,`components/nav#tabs`],[`variant`,`tabs`],[`href`,`components/nav#pills`],[`variant`,`pills`],[`href`,`components/nav#Underline`],[`variant`,`underline`],[`href`,`components/nav#fill-and-justify`],[`layout`,`fill`,`variant`,`pills`],[`layout`,`justified`,`variant`,`pills`],[`href`,`https://coreui.io/docs/utilities/flex`],[`href`,`components/nav#working-with-flex-utilities`],[`role`,`navigation`,`variant`,`pills`,1,`flex-column`,`flex-sm-row`],[`href`,`components/nav#tabs-with-dropdowns`],[`variant`,`nav-item`],[`cDropdownToggle`,``,`href`,``,`cNavLink`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`href`,`components/nav#pills-with-dropdowns`],[`cNavLink`,``,3,`active`],[`cDropdownToggle`,``,`href`,``],[`cNavLink`,``],[`cNavLink`,``,3,`disabled`]],template:function(m,N){m&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Navs`),F(),ye(12,` `),k(13,`small`),ye(14,`Base navs`),F(),ye(15,`
      `),F(),ye(16,`
      `),k(17,`c-card-body`),ye(18,`
        `),k(19,`p`,3),ye(20,`
          The base `),k(21,`code`),ye(22,`c-nav`),F(),ye(23,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),F(),ye(24,`
        `),k(25,`app-docs-example`,4),ye(26,`
          `),k(27,`c-nav`),ye(28,`
            `),k(29,`c-nav-item`),ye(30,`
              `),k(31,`a`,5),ye(32,`
                Active
              `),F(),ye(33,`
            `),F(),ye(34,`
            `),k(35,`c-nav-item`),ye(36,`
              `),k(37,`a`,6),ye(38,`Link`),F(),ye(39,`
            `),F(),ye(40,`
            `),k(41,`c-nav-item`),ye(42,`
              `),k(43,`a`,6),ye(44,`Link`),F(),ye(45,`
            `),F(),ye(46,`
            `),k(47,`c-nav-item`),ye(48,`
              `),k(49,`a`,7),ye(50,`
                Disabled
              `),F(),ye(51,`
            `),F(),ye(52,`
          `),F(),ye(53,`
        `),F(),ye(54,`
        `),k(55,`p`,8),ye(56,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),k(57,`code`),ye(58,`c-nav-item`),F(),ye(59,` like above, or roll your own with a `),k(60,`code`),ye(61,`<c-nav>`),F(),ye(62,` element. Because
          the `),k(63,`code`),ye(64,`.nav`),F(),ye(65,` uses `),k(66,`code`),ye(67,`display: flex`),F(),ye(68,`, the `),k(69,`code`),ye(70,`cNavLink`),F(),ye(71,` behaves the same as `),k(72,`code`),ye(73,`c-nav-item`),F(),ye(74,`
          would, but
          without the extra markup.
        `),F(),ye(75,`
        `),k(76,`app-docs-example`,4),ye(77,`
          `),k(78,`c-nav`,9),ye(79,`
            `),k(80,`a`,5),ye(81,`
              Active
            `),F(),ye(82,`
            `),k(83,`a`,6),ye(84,`Link`),F(),ye(85,`
            `),k(86,`a`,6),ye(87,`Link`),F(),ye(88,`
            `),k(89,`a`,7),ye(90,`
              Disabled
            `),F(),ye(91,`
          `),F(),ye(92,`
        `),F(),ye(93,`
      `),F(),ye(94,`
    `),F(),ye(95,`
  `),F(),ye(96,`
  `),k(97,`c-col`,0),ye(98,`
    `),k(99,`c-card`,2),ye(100,`
      `),k(101,`c-card-header`),ye(102,`
        `),k(103,`strong`),ye(104,`Angular Navs`),F(),ye(105,` `),k(106,`small`),ye(107,`Horizontal alignment`),F(),ye(108,`
      `),F(),ye(109,`
      `),k(110,`c-card-body`),ye(111,`
        `),k(112,`p`,3),ye(113,`
          Change the horizontal alignment of your nav with
          `),k(114,`a`,10),ye(115,`
            flexbox utilities
          `),F(),ye(116,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),F(),ye(117,`
        `),k(118,`p`,3),ye(119,`
          Centered with `),k(120,`code`),ye(121,`.justify-content-center`),F(),ye(122,`:
        `),F(),ye(123,`
        `),k(124,`app-docs-example`,11),ye(125,`
          `),k(126,`c-nav`,12),ye(127,`
            `),k(128,`c-nav-item`),ye(129,`
              `),k(130,`a`,5),ye(131,`
                Active
              `),F(),ye(132,`
            `),F(),ye(133,`
            `),k(134,`c-nav-item`),ye(135,`
              `),k(136,`a`,6),ye(137,`Link`),F(),ye(138,`
            `),F(),ye(139,`
            `),k(140,`c-nav-item`),ye(141,`
              `),k(142,`a`,6),ye(143,`Link`),F(),ye(144,`
            `),F(),ye(145,`
            `),k(146,`c-nav-item`),ye(147,`
              `),k(148,`a`,7),ye(149,`
                Disabled
              `),F(),ye(150,`
            `),F(),ye(151,`
          `),F(),ye(152,`
        `),F(),ye(153,`
        `),k(154,`p`,3),ye(155,`
          Right-aligned with `),k(156,`code`),ye(157,`.justify-content-end`),F(),ye(158,`:
        `),F(),ye(159,`
        `),k(160,`app-docs-example`,4),ye(161,`
          `),k(162,`c-nav`,13),ye(163,`
            `),k(164,`c-nav-item`),ye(165,`
              `),k(166,`a`,5),ye(167,`
                Active
              `),F(),ye(168,`
            `),F(),ye(169,`
            `),k(170,`c-nav-item`),ye(171,`
              `),k(172,`a`,6),ye(173,`Link`),F(),ye(174,`
            `),F(),ye(175,`
            `),k(176,`c-nav-item`),ye(177,`
              `),k(178,`a`,6),ye(179,`Link`),F(),ye(180,`
            `),F(),ye(181,`
            `),k(182,`c-nav-item`),ye(183,`
              `),k(184,`a`,7),ye(185,`
                Disabled
              `),F(),ye(186,`
            `),F(),ye(187,`
          `),F(),ye(188,`
        `),F(),ye(189,`
      `),F(),ye(190,`
    `),F(),ye(191,`
  `),F(),ye(192,`
  `),k(193,`c-col`,0),ye(194,`
    `),k(195,`c-card`,2),ye(196,`
      `),k(197,`c-card-header`),ye(198,`
        `),k(199,`strong`),ye(200,`Angular Navs`),F(),ye(201,` `),k(202,`small`),ye(203,`Vertical`),F(),ye(204,`
      `),F(),ye(205,`
      `),k(206,`c-card-body`),ye(207,`
        `),k(208,`p`,3),ye(209,`
          Stack your navigation by changing the flex item direction with the
          `),k(210,`code`),ye(211,`.flex-column`),F(),ye(212,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),k(213,`code`),ye(214,`.flex-sm-column`),F(),ye(215,`).
        `),F(),ye(216,`
        `),k(217,`app-docs-example`,14),ye(218,`
          `),k(219,`c-nav`,15),ye(220,`
            `),k(221,`c-nav-item`),ye(222,`
              `),k(223,`a`,5),ye(224,`
                Active
              `),F(),ye(225,`
            `),F(),ye(226,`
            `),k(227,`c-nav-item`),ye(228,`
              `),k(229,`a`,6),ye(230,`Link`),F(),ye(231,`
            `),F(),ye(232,`
            `),k(233,`c-nav-item`),ye(234,`
              `),k(235,`a`,6),ye(236,`Link`),F(),ye(237,`
            `),F(),ye(238,`
            `),k(239,`c-nav-item`),ye(240,`
              `),k(241,`a`,7),ye(242,`
                Disabled
              `),F(),ye(243,`
            `),F(),ye(244,`
          `),F(),ye(245,`
        `),F(),ye(246,`
      `),F(),ye(247,`
    `),F(),ye(248,`
  `),F(),ye(249,`
  `),k(250,`c-col`,0),ye(251,`
    `),k(252,`c-card`,2),ye(253,`
      `),k(254,`c-card-header`),ye(255,`
        `),k(256,`strong`),ye(257,`Angular Navs`),F(),ye(258,` `),k(259,`small`),ye(260,`Tabs`),F(),ye(261,`
      `),F(),ye(262,`
      `),k(263,`c-card-body`),ye(264,`
        `),k(265,`p`,3),ye(266,`
          Take the basic nav from above and add the `),k(267,`code`),ye(268,`variant="tabs"`),F(),ye(269,` class
          to generate a tabbed interface
        `),F(),ye(270,`
        `),k(271,`app-docs-example`,16),ye(272,`
          `),k(273,`c-nav`,17),ye(274,`
            `),k(275,`c-nav-item`),ye(276,`
              `),k(277,`a`,5),ye(278,`
                Active
              `),F(),ye(279,`
            `),F(),ye(280,`
            `),k(281,`c-nav-item`),ye(282,`
              `),k(283,`a`,6),ye(284,`Link`),F(),ye(285,`
            `),F(),ye(286,`
            `),k(287,`c-nav-item`),ye(288,`
              `),k(289,`a`,6),ye(290,`Link`),F(),ye(291,`
            `),F(),ye(292,`
            `),k(293,`c-nav-item`),ye(294,`
              `),k(295,`a`,7),ye(296,`
                Disabled
              `),F(),ye(297,`
            `),F(),ye(298,`
          `),F(),ye(299,`
        `),F(),ye(300,`
      `),F(),ye(301,`
    `),F(),ye(302,`
  `),F(),ye(303,`
  `),k(304,`c-col`,0),ye(305,`
    `),k(306,`c-card`,2),ye(307,`
      `),k(308,`c-card-header`),ye(309,`
        `),k(310,`strong`),ye(311,`Angular Navs`),F(),ye(312,` `),k(313,`small`),ye(314,`Pills`),F(),ye(315,`
      `),F(),ye(316,`
      `),k(317,`c-card-body`),ye(318,`
        `),k(319,`p`,3),ye(320,`
          Take that same HTML, but use `),k(321,`code`),ye(322,`variant="pills"`),F(),ye(323,` instead:
        `),F(),ye(324,`
        `),k(325,`app-docs-example`,18),ye(326,`
          `),k(327,`c-nav`,19),ye(328,`
            `),k(329,`c-nav-item`),ye(330,`
              `),k(331,`a`,5),ye(332,`
                Active
              `),F(),ye(333,`
            `),F(),ye(334,`
            `),k(335,`c-nav-item`),ye(336,`
              `),k(337,`a`,6),ye(338,`Link`),F(),ye(339,`
            `),F(),ye(340,`
            `),k(341,`c-nav-item`),ye(342,`
              `),k(343,`a`,6),ye(344,`Link`),F(),ye(345,`
            `),F(),ye(346,`
            `),k(347,`c-nav-item`),ye(348,`
              `),k(349,`a`,7),ye(350,`
                Disabled
              `),F(),ye(351,`
            `),F(),ye(352,`
          `),F(),ye(353,`
        `),F(),ye(354,`
      `),F(),ye(355,`
    `),F(),ye(356,`
  `),F(),ye(357,`
  `),k(358,`c-col`,0),ye(359,`
    `),k(360,`c-card`,2),ye(361,`
      `),k(362,`c-card-header`),ye(363,`
        `),k(364,`strong`),ye(365,`Angular Navs`),F(),ye(366,` `),k(367,`small`),ye(368,`Underline`),F(),ye(369,`
      `),F(),ye(370,`
      `),k(371,`c-card-body`),ye(372,`
        `),k(373,`p`,3),ye(374,`
          Take that same HTML, but use `),k(375,`code`),ye(376,`variant="Underline"`),F(),ye(377,` instead:
        `),F(),ye(378,`
        `),k(379,`app-docs-example`,20),ye(380,`
          `),k(381,`c-nav`,21),ye(382,`
            `),k(383,`c-nav-item`),ye(384,`
              `),k(385,`a`,5),ye(386,`
                Active
              `),F(),ye(387,`
            `),F(),ye(388,`
            `),k(389,`c-nav-item`),ye(390,`
              `),k(391,`a`,6),ye(392,`Link`),F(),ye(393,`
            `),F(),ye(394,`
            `),k(395,`c-nav-item`),ye(396,`
              `),k(397,`a`,6),ye(398,`Link`),F(),ye(399,`
            `),F(),ye(400,`
            `),k(401,`c-nav-item`),ye(402,`
              `),k(403,`a`,7),ye(404,`
                Disabled
              `),F(),ye(405,`
            `),F(),ye(406,`
          `),F(),ye(407,`
        `),F(),ye(408,`
      `),F(),ye(409,`
    `),F(),ye(410,`
  `),F(),ye(411,`
  `),k(412,`c-col`,0),ye(413,`
    `),k(414,`c-card`,2),ye(415,`
      `),k(416,`c-card-header`),ye(417,`
        `),k(418,`strong`),ye(419,`Angular Navs`),F(),ye(420,` `),k(421,`small`),ye(422,`Fill and justify`),F(),ye(423,`
      `),F(),ye(424,`
      `),k(425,`c-card-body`),ye(426,`
        `),k(427,`p`,3),ye(428,`
          Force your `),k(429,`code`),ye(430,`.nav`),F(),ye(431,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),k(432,`code`),ye(433,`.nav-item`),F(),ye(434,`s, use `),k(435,`code`),ye(436,`layout="fill"`),F(),ye(437,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),F(),ye(438,`
        `),k(439,`app-docs-example`,22),ye(440,`
          `),k(441,`c-nav`,23),ye(442,`
            `),k(443,`c-nav-item`),ye(444,`
              `),k(445,`a`,5),ye(446,`
                Active
              `),F(),ye(447,`
            `),F(),ye(448,`
            `),k(449,`c-nav-item`),ye(450,`
              `),k(451,`a`,6),ye(452,`Link`),F(),ye(453,`
            `),F(),ye(454,`
            `),k(455,`c-nav-item`),ye(456,`
              `),k(457,`a`,6),ye(458,`Link`),F(),ye(459,`
            `),F(),ye(460,`
            `),k(461,`c-nav-item`),ye(462,`
              `),k(463,`a`,7),ye(464,`
                Disabled
              `),F(),ye(465,`
            `),F(),ye(466,`
          `),F(),ye(467,`
        `),F(),ye(468,`
        `),k(469,`p`,3),ye(470,`
          For equal-width elements, use `),k(471,`code`),ye(472,`layout="justified"`),F(),ye(473,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),F(),ye(474,`
        `),k(475,`app-docs-example`,22),ye(476,`
          `),k(477,`c-nav`,24),ye(478,`
            `),k(479,`c-nav-item`),ye(480,`
              `),k(481,`a`,5),ye(482,`
                Active
              `),F(),ye(483,`
            `),F(),ye(484,`
            `),k(485,`c-nav-item`),ye(486,`
              `),k(487,`a`,6),ye(488,`Link`),F(),ye(489,`
            `),F(),ye(490,`
            `),k(491,`c-nav-item`),ye(492,`
              `),k(493,`a`,6),ye(494,`Link`),F(),ye(495,`
            `),F(),ye(496,`
            `),k(497,`c-nav-item`),ye(498,`
              `),k(499,`a`,7),ye(500,`
                Disabled
              `),F(),ye(501,`
            `),F(),ye(502,`
          `),F(),ye(503,`
        `),F(),ye(504,`
      `),F(),ye(505,`
    `),F(),ye(506,`
  `),F(),ye(507,`
  `),k(508,`c-col`,0),ye(509,`
    `),k(510,`c-card`,2),ye(511,`
      `),k(512,`c-card-header`),ye(513,`
        `),k(514,`strong`),ye(515,`Angular Navs`),F(),ye(516,` `),k(517,`small`),ye(518,`Working with flex utilities`),F(),ye(519,`
      `),F(),ye(520,`
      `),k(521,`c-card-body`),ye(522,`
        `),k(523,`p`,3),ye(524,`
          If you need responsive nav variations, consider using a series of
          `),k(525,`a`,25),ye(526,`flexbox utilities`),F(),ye(527,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),F(),ye(528,`
        `),k(529,`app-docs-example`,26),ye(530,`
          `),k(531,`c-nav`,27),ye(532,`
            `),k(533,`a`,5),ye(534,`
              Active
            `),F(),ye(535,`
            `),k(536,`a`,6),ye(537,`Link`),F(),ye(538,`
            `),k(539,`a`,6),ye(540,`Link`),F(),ye(541,`
            `),k(542,`a`,7),ye(543,`
              Disabled
            `),F(),ye(544,`
          `),F(),ye(545,`
        `),F(),ye(546,`
      `),F(),ye(547,`
    `),F(),ye(548,`
  `),F(),ye(549,`
  `),k(550,`c-col`,0),ye(551,`
    `),k(552,`c-card`,2),ye(553,`
      `),k(554,`c-card-header`),ye(555,`
        `),k(556,`strong`),ye(557,`Angular Navs`),F(),ye(558,` `),k(559,`small`),ye(560,`Tabs with dropdowns`),F(),ye(561,`
      `),F(),ye(562,`
      `),k(563,`c-card-body`),ye(564,`
        `),k(565,`app-docs-example`,28),ye(566,`
          `),k(567,`c-nav`,17),ye(568,`
            `),k(569,`c-nav-item`),ye(570,`
              `),k(571,`button`,5),ye(572,`
                Active
              `),F(),ye(573,`
            `),F(),ye(574,`
            `),k(575,`c-dropdown`,29),ye(576,`
              `),k(577,`button`,30),ye(578,`
                Dropdown button
              `),F(),ye(579,`
              `),k(580,`ul`,31),ye(581,`
                `),k(582,`li`),ye(583,`
                  `),k(584,`button`,32),ye(585,`Action`),F(),ye(586,`
                `),F(),ye(587,`
                `),k(588,`li`),ye(589,`
                  `),k(590,`button`,32),ye(591,`Another action`),F(),ye(592,`
                `),F(),ye(593,`
                `),k(594,`li`),ye(595,`
                  `),k(596,`button`,32),ye(597,`Something else here`),F(),ye(598,`
                `),F(),ye(599,`
              `),F(),ye(600,`
            `),F(),ye(601,`
            `),k(602,`c-nav-item`),ye(603,`
              `),k(604,`button`,6),ye(605,`Link`),F(),ye(606,`
            `),F(),ye(607,`
            `),k(608,`c-nav-item`),ye(609,`
              `),k(610,`button`,7),ye(611,`
                Disabled
              `),F(),ye(612,`
            `),F(),ye(613,`
          `),F(),ye(614,`
        `),F(),ye(615,`
      `),F(),ye(616,`
    `),F(),ye(617,`
  `),F(),ye(618,`
  `),k(619,`c-col`,0),ye(620,`
    `),k(621,`c-card`,2),ye(622,`
      `),k(623,`c-card-header`),ye(624,`
        `),k(625,`strong`),ye(626,`Angular Navs`),F(),ye(627,` `),k(628,`small`),ye(629,`Pills with dropdowns`),F(),ye(630,`
      `),F(),ye(631,`
      `),k(632,`c-card-body`),ye(633,`
        `),k(634,`app-docs-example`,33),ye(635,`
          `),k(636,`c-nav`,19),ye(637,`
            `),k(638,`c-nav-item`),ye(639,`
              `),k(640,`a`,34),ye(641,`
                Active
              `),F(),ye(642,`
            `),F(),ye(643,`
            `),k(644,`c-dropdown`,29),ye(645,`
              `),k(646,`a`,35),ye(647,`
                Dropdown button
              `),F(),ye(648,`
              `),k(649,`ul`,31),ye(650,`
                `),k(651,`li`)(652,`a`,32),ye(653,`Action`),F()(),ye(654,`
                `),k(655,`li`)(656,`a`,32),ye(657,`Another action`),F()(),ye(658,`
                `),k(659,`li`)(660,`a`,32),ye(661,`Something else here`),F()(),ye(662,`
              `),F(),ye(663,`
            `),F(),ye(664,`
            `),k(665,`c-nav-item`),ye(666,`
              `),k(667,`a`,36),ye(668,`Link`),F(),ye(669,`
            `),F(),ye(670,`
            `),k(671,`c-nav-item`),ye(672,`
              `),k(673,`a`,37),ye(674,`
                Disabled
              `),F(),ye(675,`
            `),F(),ye(676,`
          `),F(),ye(677,`
        `),F(),ye(678,`
      `),F(),ye(679,`
    `),F(),ye(680,`
  `),F(),ye(681,`
`),F()),m&2&&(_(31),V(`active`,!0)(`routerLink`,fn(75,l)),_(6),V(`routerLink`,fn(76,l)),_(6),V(`routerLink`,fn(77,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(78,l)),_(31),V(`active`,!0)(`routerLink`,fn(79,l)),_(3),V(`routerLink`,fn(80,l)),_(3),V(`routerLink`,fn(81,l)),_(3),V(`disabled`,!0)(`routerLink`,fn(82,l)),_(41),V(`active`,!0)(`routerLink`,fn(83,l)),_(6),V(`routerLink`,fn(84,l)),_(6),V(`routerLink`,fn(85,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(86,l)),_(18),V(`active`,!0)(`routerLink`,fn(87,l)),_(6),V(`routerLink`,fn(88,l)),_(6),V(`routerLink`,fn(89,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(90,l)),_(39),V(`active`,!0)(`routerLink`,fn(91,l)),_(6),V(`routerLink`,fn(92,l)),_(6),V(`routerLink`,fn(93,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(94,l)),_(36),V(`active`,!0)(`routerLink`,fn(95,l)),_(6),V(`routerLink`,fn(96,l)),_(6),V(`routerLink`,fn(97,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(98,l)),_(36),V(`active`,!0)(`routerLink`,fn(99,l)),_(6),V(`routerLink`,fn(100,l)),_(6),V(`routerLink`,fn(101,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(102,l)),_(36),V(`active`,!0),_(18),V(`disabled`,!0),_(42),V(`active`,!0)(`routerLink`,fn(103,l)),_(6),V(`routerLink`,fn(104,l)),_(6),V(`routerLink`,fn(105,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(106,l)),_(18),V(`active`,!0)(`routerLink`,fn(107,l)),_(6),V(`routerLink`,fn(108,l)),_(6),V(`routerLink`,fn(109,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(110,l)),_(34),V(`active`,!0)(`routerLink`,fn(111,l)),_(3),V(`routerLink`,fn(112,l)),_(3),V(`routerLink`,fn(113,l)),_(3),V(`disabled`,!0)(`routerLink`,fn(114,l)),_(29),V(`active`,!0)(`routerLink`,fn(115,l)),_(13),V(`routerLink`,fn(116,l)),_(6),V(`routerLink`,fn(117,l)),_(6),V(`routerLink`,fn(118,l)),_(8),V(`routerLink`,fn(119,l)),_(6),V(`disabled`,!0)(`routerLink`,fn(120,l)),_(30),V(`active`,!0),_(12),V(`routerLink`,fn(121,l)),_(4),V(`routerLink`,fn(122,l)),_(4),V(`routerLink`,fn(123,l)),_(13),V(`disabled`,!0))},dependencies:[Mse,UH,Ba,IH,ja,E$1,xse,Ase,zH,Xi,cA,KN,dp,QN,c],encapsulation:2})}};export{w as NavsComponent};