import{b as F}from"./chunk-N2MNLC77.js";import"./chunk-NQK6YNC7.js";import{$ as i,Eb as p,Fd as h,Gd as b,H as o,Pa as e,Qc as u,Rc as s,Sd as L,Td as f,Uc as v,Ud as g,Va as c,Wa as r,hd as S,id as E,jd as k,kd as y,ma as a,xa as t,ya as n}from"./chunk-M3OGN64F.js";import"./chunk-RLASGPT3.js";var l=()=>[],I=(()=>{let m=class m{constructor(){}};m.\u0275fac=function(d){return new(d||m)},m.\u0275cmp=o({type:m,selectors:[["app-navs"]],standalone:!0,features:[c],decls:680,vars:124,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/nav#base-nav"],["cNavLink","",3,"active","routerLink"],["cNavLink","",3,"routerLink"],["cNavLink","",3,"disabled","routerLink"],[1,"text-body-secondary","small","mt-3"],["role","navigation"],["href","https://coreui.io/docs/layout/grid/#horizontal-alignment"],["href","components/nav#horizontal-alignment"],[1,"justify-content-center"],[1,"justify-content-end"],["href","components/nav#vertical"],[1,"flex-column"],["href","components/nav#tabs"],["variant","tabs"],["href","components/nav#pills"],["variant","pills"],["href","components/nav#Underline"],["variant","underline"],["href","components/nav#fill-and-justify"],["layout","fill","variant","pills"],["layout","justified","variant","pills"],["href","https://coreui.io/docs/utilities/flex"],["href","components/nav#working-with-flex-utilities"],["role","navigation","variant","pills",1,"flex-column","flex-sm-row"],["href","components/nav#tabs-with-dropdowns"],["variant","nav-item"],["cDropdownToggle","","href","","cNavLink",""],["cDropdownMenu",""],["cDropdownItem","",3,"routerLink"],["href","components/nav#pills-with-dropdowns"],["cNavLink","",3,"active"],["cDropdownToggle","","href",""],["cNavLink",""],["cNavLink","",3,"disabled"]],template:function(d,D){d&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular Navs"),n(),e(10," "),t(11,"small"),e(12,"Base navs"),n(),e(13,`
      `),n(),e(14,`
      `),t(15,"c-card-body"),e(16,`
        `),t(17,"p",2),e(18,`
          The base `),t(19,"code"),e(20,"c-nav"),n(),e(21,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),n(),e(22,`
        `),t(23,"app-docs-example",3),e(24,`
          `),t(25,"c-nav"),e(26,`
            `),t(27,"c-nav-item"),e(28,`
              `),t(29,"a",4),e(30,`
                Active
              `),n(),e(31,`
            `),n(),e(32,`
            `),t(33,"c-nav-item"),e(34,`
              `),t(35,"a",5),e(36,"Link"),n(),e(37,`
            `),n(),e(38,`
            `),t(39,"c-nav-item"),e(40,`
              `),t(41,"a",5),e(42,"Link"),n(),e(43,`
            `),n(),e(44,`
            `),t(45,"c-nav-item"),e(46,`
              `),t(47,"a",6),e(48,`
                Disabled
              `),n(),e(49,`
            `),n(),e(50,`
          `),n(),e(51,`
        `),n(),e(52,`
        `),t(53,"p",7),e(54,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),t(55,"code"),e(56,"c-nav-item"),n(),e(57," like above, or roll your own with a "),t(58,"code"),e(59,"<c-nav>"),n(),e(60,` element. Because
          the `),t(61,"code"),e(62,".nav"),n(),e(63," uses "),t(64,"code"),e(65,"display: flex"),n(),e(66,", the "),t(67,"code"),e(68,"cNavLink"),n(),e(69," behaves the same as "),t(70,"code"),e(71,"c-nav-item"),n(),e(72,`
          would, but
          without the extra markup.
        `),n(),e(73,`
        `),t(74,"app-docs-example",3),e(75,`
          `),t(76,"c-nav",8),e(77,`
            `),t(78,"a",4),e(79,`
              Active
            `),n(),e(80,`
            `),t(81,"a",5),e(82,"Link"),n(),e(83,`
            `),t(84,"a",5),e(85,"Link"),n(),e(86,`
            `),t(87,"a",6),e(88,`
              Disabled
            `),n(),e(89,`
          `),n(),e(90,`
        `),n(),e(91,`
      `),n(),e(92,`
    `),n(),e(93,`
  `),n(),e(94,`
  `),t(95,"c-col",0),e(96,`
    `),t(97,"c-card",1),e(98,`
      `),t(99,"c-card-header"),e(100,`
        `),t(101,"strong"),e(102,"Angular Navs"),n(),e(103," "),t(104,"small"),e(105,"Horizontal alignment"),n(),e(106,`
      `),n(),e(107,`
      `),t(108,"c-card-body"),e(109,`
        `),t(110,"p",2),e(111,`
          Change the horizontal alignment of your nav with
          `),t(112,"a",9),e(113,`
            flexbox utilities
          `),n(),e(114,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),n(),e(115,`
        `),t(116,"p",2),e(117,`
          Centered with `),t(118,"code"),e(119,".justify-content-center"),n(),e(120,`:
        `),n(),e(121,`
        `),t(122,"app-docs-example",10),e(123,`
          `),t(124,"c-nav",11),e(125,`
            `),t(126,"c-nav-item"),e(127,`
              `),t(128,"a",4),e(129,`
                Active
              `),n(),e(130,`
            `),n(),e(131,`
            `),t(132,"c-nav-item"),e(133,`
              `),t(134,"a",5),e(135,"Link"),n(),e(136,`
            `),n(),e(137,`
            `),t(138,"c-nav-item"),e(139,`
              `),t(140,"a",5),e(141,"Link"),n(),e(142,`
            `),n(),e(143,`
            `),t(144,"c-nav-item"),e(145,`
              `),t(146,"a",6),e(147,`
                Disabled
              `),n(),e(148,`
            `),n(),e(149,`
          `),n(),e(150,`
        `),n(),e(151,`
        `),t(152,"p",2),e(153,`
          Right-aligned with `),t(154,"code"),e(155,".justify-content-end"),n(),e(156,`:
        `),n(),e(157,`
        `),t(158,"app-docs-example",3),e(159,`
          `),t(160,"c-nav",12),e(161,`
            `),t(162,"c-nav-item"),e(163,`
              `),t(164,"a",4),e(165,`
                Active
              `),n(),e(166,`
            `),n(),e(167,`
            `),t(168,"c-nav-item"),e(169,`
              `),t(170,"a",5),e(171,"Link"),n(),e(172,`
            `),n(),e(173,`
            `),t(174,"c-nav-item"),e(175,`
              `),t(176,"a",5),e(177,"Link"),n(),e(178,`
            `),n(),e(179,`
            `),t(180,"c-nav-item"),e(181,`
              `),t(182,"a",6),e(183,`
                Disabled
              `),n(),e(184,`
            `),n(),e(185,`
          `),n(),e(186,`
        `),n(),e(187,`
      `),n(),e(188,`
    `),n(),e(189,`
  `),n(),e(190,`
  `),t(191,"c-col",0),e(192,`
    `),t(193,"c-card",1),e(194,`
      `),t(195,"c-card-header"),e(196,`
        `),t(197,"strong"),e(198,"Angular Navs"),n(),e(199," "),t(200,"small"),e(201,"Vertical"),n(),e(202,`
      `),n(),e(203,`
      `),t(204,"c-card-body"),e(205,`
        `),t(206,"p",2),e(207,`
          Stack your navigation by changing the flex item direction with the
          `),t(208,"code"),e(209,".flex-column"),n(),e(210,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),t(211,"code"),e(212,".flex-sm-column"),n(),e(213,`).
        `),n(),e(214,`
        `),t(215,"app-docs-example",13),e(216,`
          `),t(217,"c-nav",14),e(218,`
            `),t(219,"c-nav-item"),e(220,`
              `),t(221,"a",4),e(222,`
                Active
              `),n(),e(223,`
            `),n(),e(224,`
            `),t(225,"c-nav-item"),e(226,`
              `),t(227,"a",5),e(228,"Link"),n(),e(229,`
            `),n(),e(230,`
            `),t(231,"c-nav-item"),e(232,`
              `),t(233,"a",5),e(234,"Link"),n(),e(235,`
            `),n(),e(236,`
            `),t(237,"c-nav-item"),e(238,`
              `),t(239,"a",6),e(240,`
                Disabled
              `),n(),e(241,`
            `),n(),e(242,`
          `),n(),e(243,`
        `),n(),e(244,`
      `),n(),e(245,`
    `),n(),e(246,`
  `),n(),e(247,`
  `),t(248,"c-col",0),e(249,`
    `),t(250,"c-card",1),e(251,`
      `),t(252,"c-card-header"),e(253,`
        `),t(254,"strong"),e(255,"Angular Navs"),n(),e(256," "),t(257,"small"),e(258,"Tabs"),n(),e(259,`
      `),n(),e(260,`
      `),t(261,"c-card-body"),e(262,`
        `),t(263,"p",2),e(264,`
          Take the basic nav from above and add the `),t(265,"code"),e(266,'variant="tabs"'),n(),e(267,` class
          to generate a tabbed interface
        `),n(),e(268,`
        `),t(269,"app-docs-example",15),e(270,`
          `),t(271,"c-nav",16),e(272,`
            `),t(273,"c-nav-item"),e(274,`
              `),t(275,"a",4),e(276,`
                Active
              `),n(),e(277,`
            `),n(),e(278,`
            `),t(279,"c-nav-item"),e(280,`
              `),t(281,"a",5),e(282,"Link"),n(),e(283,`
            `),n(),e(284,`
            `),t(285,"c-nav-item"),e(286,`
              `),t(287,"a",5),e(288,"Link"),n(),e(289,`
            `),n(),e(290,`
            `),t(291,"c-nav-item"),e(292,`
              `),t(293,"a",6),e(294,`
                Disabled
              `),n(),e(295,`
            `),n(),e(296,`
          `),n(),e(297,`
        `),n(),e(298,`
      `),n(),e(299,`
    `),n(),e(300,`
  `),n(),e(301,`
  `),t(302,"c-col",0),e(303,`
    `),t(304,"c-card",1),e(305,`
      `),t(306,"c-card-header"),e(307,`
        `),t(308,"strong"),e(309,"Angular Navs"),n(),e(310," "),t(311,"small"),e(312,"Pills"),n(),e(313,`
      `),n(),e(314,`
      `),t(315,"c-card-body"),e(316,`
        `),t(317,"p",2),e(318,`
          Take that same HTML, but use `),t(319,"code"),e(320,'variant="pills"'),n(),e(321,` instead:
        `),n(),e(322,`
        `),t(323,"app-docs-example",17),e(324,`
          `),t(325,"c-nav",18),e(326,`
            `),t(327,"c-nav-item"),e(328,`
              `),t(329,"a",4),e(330,`
                Active
              `),n(),e(331,`
            `),n(),e(332,`
            `),t(333,"c-nav-item"),e(334,`
              `),t(335,"a",5),e(336,"Link"),n(),e(337,`
            `),n(),e(338,`
            `),t(339,"c-nav-item"),e(340,`
              `),t(341,"a",5),e(342,"Link"),n(),e(343,`
            `),n(),e(344,`
            `),t(345,"c-nav-item"),e(346,`
              `),t(347,"a",6),e(348,`
                Disabled
              `),n(),e(349,`
            `),n(),e(350,`
          `),n(),e(351,`
        `),n(),e(352,`
      `),n(),e(353,`
    `),n(),e(354,`
  `),n(),e(355,`
  `),t(356,"c-col",0),e(357,`
    `),t(358,"c-card",1),e(359,`
      `),t(360,"c-card-header"),e(361,`
        `),t(362,"strong"),e(363,"Angular Navs"),n(),e(364," "),t(365,"small"),e(366,"Underline"),n(),e(367,`
      `),n(),e(368,`
      `),t(369,"c-card-body"),e(370,`
        `),t(371,"p",2),e(372,`
          Take that same HTML, but use `),t(373,"code"),e(374,'variant="Underline"'),n(),e(375,` instead:
        `),n(),e(376,`
        `),t(377,"app-docs-example",19),e(378,`
          `),t(379,"c-nav",20),e(380,`
            `),t(381,"c-nav-item"),e(382,`
              `),t(383,"a",4),e(384,`
                Active
              `),n(),e(385,`
            `),n(),e(386,`
            `),t(387,"c-nav-item"),e(388,`
              `),t(389,"a",5),e(390,"Link"),n(),e(391,`
            `),n(),e(392,`
            `),t(393,"c-nav-item"),e(394,`
              `),t(395,"a",5),e(396,"Link"),n(),e(397,`
            `),n(),e(398,`
            `),t(399,"c-nav-item"),e(400,`
              `),t(401,"a",6),e(402,`
                Disabled
              `),n(),e(403,`
            `),n(),e(404,`
          `),n(),e(405,`
        `),n(),e(406,`
      `),n(),e(407,`
    `),n(),e(408,`
  `),n(),e(409,`
  `),t(410,"c-col",0),e(411,`
    `),t(412,"c-card",1),e(413,`
      `),t(414,"c-card-header"),e(415,`
        `),t(416,"strong"),e(417,"Angular Navs"),n(),e(418," "),t(419,"small"),e(420,"Fill and justify"),n(),e(421,`
      `),n(),e(422,`
      `),t(423,"c-card-body"),e(424,`
        `),t(425,"p",2),e(426,`
          Force your `),t(427,"code"),e(428,".nav"),n(),e(429,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),t(430,"code"),e(431,".nav-item"),n(),e(432,"s, use "),t(433,"code"),e(434,'layout="fill"'),n(),e(435,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),n(),e(436,`
        `),t(437,"app-docs-example",21),e(438,`
          `),t(439,"c-nav",22),e(440,`
            `),t(441,"c-nav-item"),e(442,`
              `),t(443,"a",4),e(444,`
                Active
              `),n(),e(445,`
            `),n(),e(446,`
            `),t(447,"c-nav-item"),e(448,`
              `),t(449,"a",5),e(450,"Link"),n(),e(451,`
            `),n(),e(452,`
            `),t(453,"c-nav-item"),e(454,`
              `),t(455,"a",5),e(456,"Link"),n(),e(457,`
            `),n(),e(458,`
            `),t(459,"c-nav-item"),e(460,`
              `),t(461,"a",6),e(462,`
                Disabled
              `),n(),e(463,`
            `),n(),e(464,`
          `),n(),e(465,`
        `),n(),e(466,`
        `),t(467,"p",2),e(468,`
          For equal-width elements, use `),t(469,"code"),e(470,'layout="justified"'),n(),e(471,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),n(),e(472,`
        `),t(473,"app-docs-example",21),e(474,`
          `),t(475,"c-nav",23),e(476,`
            `),t(477,"c-nav-item"),e(478,`
              `),t(479,"a",4),e(480,`
                Active
              `),n(),e(481,`
            `),n(),e(482,`
            `),t(483,"c-nav-item"),e(484,`
              `),t(485,"a",5),e(486,"Link"),n(),e(487,`
            `),n(),e(488,`
            `),t(489,"c-nav-item"),e(490,`
              `),t(491,"a",5),e(492,"Link"),n(),e(493,`
            `),n(),e(494,`
            `),t(495,"c-nav-item"),e(496,`
              `),t(497,"a",6),e(498,`
                Disabled
              `),n(),e(499,`
            `),n(),e(500,`
          `),n(),e(501,`
        `),n(),e(502,`
      `),n(),e(503,`
    `),n(),e(504,`
  `),n(),e(505,`
  `),t(506,"c-col",0),e(507,`
    `),t(508,"c-card",1),e(509,`
      `),t(510,"c-card-header"),e(511,`
        `),t(512,"strong"),e(513,"Angular Navs"),n(),e(514," "),t(515,"small"),e(516,"Working with flex utilities"),n(),e(517,`
      `),n(),e(518,`
      `),t(519,"c-card-body"),e(520,`
        `),t(521,"p",2),e(522,`
          If you need responsive nav variations, consider using a series of
          `),t(523,"a",24),e(524,"flexbox utilities"),n(),e(525,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),n(),e(526,`
        `),t(527,"app-docs-example",25),e(528,`
          `),t(529,"c-nav",26),e(530,`
            `),t(531,"a",4),e(532,`
              Active
            `),n(),e(533,`
            `),t(534,"a",5),e(535,"Link"),n(),e(536,`
            `),t(537,"a",5),e(538,"Link"),n(),e(539,`
            `),t(540,"a",6),e(541,`
              Disabled
            `),n(),e(542,`
          `),n(),e(543,`
        `),n(),e(544,`
      `),n(),e(545,`
    `),n(),e(546,`
  `),n(),e(547,`
  `),t(548,"c-col",0),e(549,`
    `),t(550,"c-card",1),e(551,`
      `),t(552,"c-card-header"),e(553,`
        `),t(554,"strong"),e(555,"Angular Navs"),n(),e(556," "),t(557,"small"),e(558,"Tabs with dropdowns"),n(),e(559,`
      `),n(),e(560,`
      `),t(561,"c-card-body"),e(562,`
        `),t(563,"app-docs-example",27),e(564,`
          `),t(565,"c-nav",16),e(566,`
            `),t(567,"c-nav-item"),e(568,`
              `),t(569,"button",4),e(570,`
                Active
              `),n(),e(571,`
            `),n(),e(572,`
            `),t(573,"c-dropdown",28),e(574,`
              `),t(575,"button",29),e(576,`
                Dropdown button
              `),n(),e(577,`
              `),t(578,"ul",30),e(579,`
                `),t(580,"li"),e(581,`
                  `),t(582,"button",31),e(583,"Action"),n(),e(584,`
                `),n(),e(585,`
                `),t(586,"li"),e(587,`
                  `),t(588,"button",31),e(589,"Another action"),n(),e(590,`
                `),n(),e(591,`
                `),t(592,"li"),e(593,`
                  `),t(594,"button",31),e(595,"Something else here"),n(),e(596,`
                `),n(),e(597,`
              `),n(),e(598,`
            `),n(),e(599,`
            `),t(600,"c-nav-item"),e(601,`
              `),t(602,"button",5),e(603,"Link"),n(),e(604,`
            `),n(),e(605,`
            `),t(606,"c-nav-item"),e(607,`
              `),t(608,"button",6),e(609,`
                Disabled
              `),n(),e(610,`
            `),n(),e(611,`
          `),n(),e(612,`
        `),n(),e(613,`
      `),n(),e(614,`
    `),n(),e(615,`
  `),n(),e(616,`
  `),t(617,"c-col",0),e(618,`
    `),t(619,"c-card",1),e(620,`
      `),t(621,"c-card-header"),e(622,`
        `),t(623,"strong"),e(624,"Angular Navs"),n(),e(625," "),t(626,"small"),e(627,"Pills with dropdowns"),n(),e(628,`
      `),n(),e(629,`
      `),t(630,"c-card-body"),e(631,`
        `),t(632,"app-docs-example",32),e(633,`
          `),t(634,"c-nav",18),e(635,`
            `),t(636,"c-nav-item"),e(637,`
              `),t(638,"a",33),e(639,`
                Active
              `),n(),e(640,`
            `),n(),e(641,`
            `),t(642,"c-dropdown",28),e(643,`
              `),t(644,"a",34),e(645,`
                Dropdown button
              `),n(),e(646,`
              `),t(647,"ul",30),e(648,`
                `),t(649,"li")(650,"a",31),e(651,"Action"),n()(),e(652,`
                `),t(653,"li")(654,"a",31),e(655,"Another action"),n()(),e(656,`
                `),t(657,"li")(658,"a",31),e(659,"Something else here"),n()(),e(660,`
              `),n(),e(661,`
            `),n(),e(662,`
            `),t(663,"c-nav-item"),e(664,`
              `),t(665,"a",35),e(666,"Link"),n(),e(667,`
            `),n(),e(668,`
            `),t(669,"c-nav-item"),e(670,`
              `),t(671,"a",36),e(672,`
                Disabled
              `),n(),e(673,`
            `),n(),e(674,`
          `),n(),e(675,`
        `),n(),e(676,`
      `),n(),e(677,`
    `),n(),e(678,`
  `),n(),e(679,`
`),n()),d&2&&(i(29),a("active",!0)("routerLink",r(75,l)),i(6),a("routerLink",r(76,l)),i(6),a("routerLink",r(77,l)),i(6),a("disabled",!0)("routerLink",r(78,l)),i(31),a("active",!0)("routerLink",r(79,l)),i(3),a("routerLink",r(80,l)),i(3),a("routerLink",r(81,l)),i(3),a("disabled",!0)("routerLink",r(82,l)),i(41),a("active",!0)("routerLink",r(83,l)),i(6),a("routerLink",r(84,l)),i(6),a("routerLink",r(85,l)),i(6),a("disabled",!0)("routerLink",r(86,l)),i(18),a("active",!0)("routerLink",r(87,l)),i(6),a("routerLink",r(88,l)),i(6),a("routerLink",r(89,l)),i(6),a("disabled",!0)("routerLink",r(90,l)),i(39),a("active",!0)("routerLink",r(91,l)),i(6),a("routerLink",r(92,l)),i(6),a("routerLink",r(93,l)),i(6),a("disabled",!0)("routerLink",r(94,l)),i(36),a("active",!0)("routerLink",r(95,l)),i(6),a("routerLink",r(96,l)),i(6),a("routerLink",r(97,l)),i(6),a("disabled",!0)("routerLink",r(98,l)),i(36),a("active",!0)("routerLink",r(99,l)),i(6),a("routerLink",r(100,l)),i(6),a("routerLink",r(101,l)),i(6),a("disabled",!0)("routerLink",r(102,l)),i(36),a("active",!0),i(18),a("disabled",!0),i(42),a("active",!0)("routerLink",r(103,l)),i(6),a("routerLink",r(104,l)),i(6),a("routerLink",r(105,l)),i(6),a("disabled",!0)("routerLink",r(106,l)),i(18),a("active",!0)("routerLink",r(107,l)),i(6),a("routerLink",r(108,l)),i(6),a("routerLink",r(109,l)),i(6),a("disabled",!0)("routerLink",r(110,l)),i(34),a("active",!0)("routerLink",r(111,l)),i(3),a("routerLink",r(112,l)),i(3),a("routerLink",r(113,l)),i(3),a("disabled",!0)("routerLink",r(114,l)),i(29),a("active",!0)("routerLink",r(115,l)),i(13),a("routerLink",r(116,l)),i(6),a("routerLink",r(117,l)),i(6),a("routerLink",r(118,l)),i(8),a("routerLink",r(119,l)),i(6),a("disabled",!0)("routerLink",r(120,l)),i(30),a("active",!0),i(12),a("routerLink",r(121,l)),i(4),a("routerLink",r(122,l)),i(4),a("routerLink",r(123,l)),i(13),a("disabled",!0))},dependencies:[b,h,u,v,s,F,g,f,L,p,k,E,S,y]});let x=m;return x})();export{I as NavsComponent};
