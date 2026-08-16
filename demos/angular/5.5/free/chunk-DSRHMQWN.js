import{b as g}from"./chunk-LD7KIRSH.js";import{a as F}from"./chunk-N4KRKZ3T.js";import{$ as p,Ka as y,Ma as h,Ta as b,Ua as L,Va as f,aa as u,da as s,q as c,sa as v,ta as S,ua as E,va as k}from"./chunk-JWVWN3RB.js";import{Fb as a,Gb as t,Hb as n,Ib as x,Ua as i,hb as o,lc as e,zc as r}from"./chunk-32CID2Q6.js";import"./chunk-JKOY2XUY.js";var l=()=>[],w=class d{static{this.\u0275fac=function(m){return new(m||d)}}static{this.\u0275cmp=o({type:d,selectors:[["app-navs"]],decls:682,vars:124,consts:[["xs","12"],["href","components/nav","title","Nav"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/nav#base-nav"],["cNavLink","",3,"active","routerLink"],["cNavLink","",3,"routerLink"],["cNavLink","",3,"disabled","routerLink"],[1,"text-body-secondary","small","mt-3"],["role","navigation"],["href","https://coreui.io/docs/layout/grid/#horizontal-alignment"],["href","components/nav#horizontal-alignment"],[1,"justify-content-center"],[1,"justify-content-end"],["href","components/nav#vertical"],[1,"flex-column"],["href","components/nav#tabs"],["variant","tabs"],["href","components/nav#pills"],["variant","pills"],["href","components/nav#Underline"],["variant","underline"],["href","components/nav#fill-and-justify"],["layout","fill","variant","pills"],["layout","justified","variant","pills"],["href","https://coreui.io/docs/utilities/flex"],["href","components/nav#working-with-flex-utilities"],["role","navigation","variant","pills",1,"flex-column","flex-sm-row"],["href","components/nav#tabs-with-dropdowns"],["variant","nav-item"],["cDropdownToggle","","href","","cNavLink",""],["cDropdownMenu",""],["cDropdownItem","",3,"routerLink"],["href","components/nav#pills-with-dropdowns"],["cNavLink","",3,"active"],["cDropdownToggle","","href",""],["cNavLink",""],["cNavLink","",3,"disabled"]],template:function(m,N){m&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),x(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular Navs"),n(),e(12," "),t(13,"small"),e(14,"Base navs"),n(),e(15,`
      `),n(),e(16,`
      `),t(17,"c-card-body"),e(18,`
        `),t(19,"p",3),e(20,`
          The base `),t(21,"code"),e(22,"c-nav"),n(),e(23,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),n(),e(24,`
        `),t(25,"app-docs-example",4),e(26,`
          `),t(27,"c-nav"),e(28,`
            `),t(29,"c-nav-item"),e(30,`
              `),t(31,"a",5),e(32,`
                Active
              `),n(),e(33,`
            `),n(),e(34,`
            `),t(35,"c-nav-item"),e(36,`
              `),t(37,"a",6),e(38,"Link"),n(),e(39,`
            `),n(),e(40,`
            `),t(41,"c-nav-item"),e(42,`
              `),t(43,"a",6),e(44,"Link"),n(),e(45,`
            `),n(),e(46,`
            `),t(47,"c-nav-item"),e(48,`
              `),t(49,"a",7),e(50,`
                Disabled
              `),n(),e(51,`
            `),n(),e(52,`
          `),n(),e(53,`
        `),n(),e(54,`
        `),t(55,"p",8),e(56,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),t(57,"code"),e(58,"c-nav-item"),n(),e(59," like above, or roll your own with a "),t(60,"code"),e(61,"<c-nav>"),n(),e(62,` element. Because
          the `),t(63,"code"),e(64,".nav"),n(),e(65," uses "),t(66,"code"),e(67,"display: flex"),n(),e(68,", the "),t(69,"code"),e(70,"cNavLink"),n(),e(71," behaves the same as "),t(72,"code"),e(73,"c-nav-item"),n(),e(74,`
          would, but
          without the extra markup.
        `),n(),e(75,`
        `),t(76,"app-docs-example",4),e(77,`
          `),t(78,"c-nav",9),e(79,`
            `),t(80,"a",5),e(81,`
              Active
            `),n(),e(82,`
            `),t(83,"a",6),e(84,"Link"),n(),e(85,`
            `),t(86,"a",6),e(87,"Link"),n(),e(88,`
            `),t(89,"a",7),e(90,`
              Disabled
            `),n(),e(91,`
          `),n(),e(92,`
        `),n(),e(93,`
      `),n(),e(94,`
    `),n(),e(95,`
  `),n(),e(96,`
  `),t(97,"c-col",0),e(98,`
    `),t(99,"c-card",2),e(100,`
      `),t(101,"c-card-header"),e(102,`
        `),t(103,"strong"),e(104,"Angular Navs"),n(),e(105," "),t(106,"small"),e(107,"Horizontal alignment"),n(),e(108,`
      `),n(),e(109,`
      `),t(110,"c-card-body"),e(111,`
        `),t(112,"p",3),e(113,`
          Change the horizontal alignment of your nav with
          `),t(114,"a",10),e(115,`
            flexbox utilities
          `),n(),e(116,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),n(),e(117,`
        `),t(118,"p",3),e(119,`
          Centered with `),t(120,"code"),e(121,".justify-content-center"),n(),e(122,`:
        `),n(),e(123,`
        `),t(124,"app-docs-example",11),e(125,`
          `),t(126,"c-nav",12),e(127,`
            `),t(128,"c-nav-item"),e(129,`
              `),t(130,"a",5),e(131,`
                Active
              `),n(),e(132,`
            `),n(),e(133,`
            `),t(134,"c-nav-item"),e(135,`
              `),t(136,"a",6),e(137,"Link"),n(),e(138,`
            `),n(),e(139,`
            `),t(140,"c-nav-item"),e(141,`
              `),t(142,"a",6),e(143,"Link"),n(),e(144,`
            `),n(),e(145,`
            `),t(146,"c-nav-item"),e(147,`
              `),t(148,"a",7),e(149,`
                Disabled
              `),n(),e(150,`
            `),n(),e(151,`
          `),n(),e(152,`
        `),n(),e(153,`
        `),t(154,"p",3),e(155,`
          Right-aligned with `),t(156,"code"),e(157,".justify-content-end"),n(),e(158,`:
        `),n(),e(159,`
        `),t(160,"app-docs-example",4),e(161,`
          `),t(162,"c-nav",13),e(163,`
            `),t(164,"c-nav-item"),e(165,`
              `),t(166,"a",5),e(167,`
                Active
              `),n(),e(168,`
            `),n(),e(169,`
            `),t(170,"c-nav-item"),e(171,`
              `),t(172,"a",6),e(173,"Link"),n(),e(174,`
            `),n(),e(175,`
            `),t(176,"c-nav-item"),e(177,`
              `),t(178,"a",6),e(179,"Link"),n(),e(180,`
            `),n(),e(181,`
            `),t(182,"c-nav-item"),e(183,`
              `),t(184,"a",7),e(185,`
                Disabled
              `),n(),e(186,`
            `),n(),e(187,`
          `),n(),e(188,`
        `),n(),e(189,`
      `),n(),e(190,`
    `),n(),e(191,`
  `),n(),e(192,`
  `),t(193,"c-col",0),e(194,`
    `),t(195,"c-card",2),e(196,`
      `),t(197,"c-card-header"),e(198,`
        `),t(199,"strong"),e(200,"Angular Navs"),n(),e(201," "),t(202,"small"),e(203,"Vertical"),n(),e(204,`
      `),n(),e(205,`
      `),t(206,"c-card-body"),e(207,`
        `),t(208,"p",3),e(209,`
          Stack your navigation by changing the flex item direction with the
          `),t(210,"code"),e(211,".flex-column"),n(),e(212,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),t(213,"code"),e(214,".flex-sm-column"),n(),e(215,`).
        `),n(),e(216,`
        `),t(217,"app-docs-example",14),e(218,`
          `),t(219,"c-nav",15),e(220,`
            `),t(221,"c-nav-item"),e(222,`
              `),t(223,"a",5),e(224,`
                Active
              `),n(),e(225,`
            `),n(),e(226,`
            `),t(227,"c-nav-item"),e(228,`
              `),t(229,"a",6),e(230,"Link"),n(),e(231,`
            `),n(),e(232,`
            `),t(233,"c-nav-item"),e(234,`
              `),t(235,"a",6),e(236,"Link"),n(),e(237,`
            `),n(),e(238,`
            `),t(239,"c-nav-item"),e(240,`
              `),t(241,"a",7),e(242,`
                Disabled
              `),n(),e(243,`
            `),n(),e(244,`
          `),n(),e(245,`
        `),n(),e(246,`
      `),n(),e(247,`
    `),n(),e(248,`
  `),n(),e(249,`
  `),t(250,"c-col",0),e(251,`
    `),t(252,"c-card",2),e(253,`
      `),t(254,"c-card-header"),e(255,`
        `),t(256,"strong"),e(257,"Angular Navs"),n(),e(258," "),t(259,"small"),e(260,"Tabs"),n(),e(261,`
      `),n(),e(262,`
      `),t(263,"c-card-body"),e(264,`
        `),t(265,"p",3),e(266,`
          Take the basic nav from above and add the `),t(267,"code"),e(268,'variant="tabs"'),n(),e(269,` class
          to generate a tabbed interface
        `),n(),e(270,`
        `),t(271,"app-docs-example",16),e(272,`
          `),t(273,"c-nav",17),e(274,`
            `),t(275,"c-nav-item"),e(276,`
              `),t(277,"a",5),e(278,`
                Active
              `),n(),e(279,`
            `),n(),e(280,`
            `),t(281,"c-nav-item"),e(282,`
              `),t(283,"a",6),e(284,"Link"),n(),e(285,`
            `),n(),e(286,`
            `),t(287,"c-nav-item"),e(288,`
              `),t(289,"a",6),e(290,"Link"),n(),e(291,`
            `),n(),e(292,`
            `),t(293,"c-nav-item"),e(294,`
              `),t(295,"a",7),e(296,`
                Disabled
              `),n(),e(297,`
            `),n(),e(298,`
          `),n(),e(299,`
        `),n(),e(300,`
      `),n(),e(301,`
    `),n(),e(302,`
  `),n(),e(303,`
  `),t(304,"c-col",0),e(305,`
    `),t(306,"c-card",2),e(307,`
      `),t(308,"c-card-header"),e(309,`
        `),t(310,"strong"),e(311,"Angular Navs"),n(),e(312," "),t(313,"small"),e(314,"Pills"),n(),e(315,`
      `),n(),e(316,`
      `),t(317,"c-card-body"),e(318,`
        `),t(319,"p",3),e(320,`
          Take that same HTML, but use `),t(321,"code"),e(322,'variant="pills"'),n(),e(323,` instead:
        `),n(),e(324,`
        `),t(325,"app-docs-example",18),e(326,`
          `),t(327,"c-nav",19),e(328,`
            `),t(329,"c-nav-item"),e(330,`
              `),t(331,"a",5),e(332,`
                Active
              `),n(),e(333,`
            `),n(),e(334,`
            `),t(335,"c-nav-item"),e(336,`
              `),t(337,"a",6),e(338,"Link"),n(),e(339,`
            `),n(),e(340,`
            `),t(341,"c-nav-item"),e(342,`
              `),t(343,"a",6),e(344,"Link"),n(),e(345,`
            `),n(),e(346,`
            `),t(347,"c-nav-item"),e(348,`
              `),t(349,"a",7),e(350,`
                Disabled
              `),n(),e(351,`
            `),n(),e(352,`
          `),n(),e(353,`
        `),n(),e(354,`
      `),n(),e(355,`
    `),n(),e(356,`
  `),n(),e(357,`
  `),t(358,"c-col",0),e(359,`
    `),t(360,"c-card",2),e(361,`
      `),t(362,"c-card-header"),e(363,`
        `),t(364,"strong"),e(365,"Angular Navs"),n(),e(366," "),t(367,"small"),e(368,"Underline"),n(),e(369,`
      `),n(),e(370,`
      `),t(371,"c-card-body"),e(372,`
        `),t(373,"p",3),e(374,`
          Take that same HTML, but use `),t(375,"code"),e(376,'variant="Underline"'),n(),e(377,` instead:
        `),n(),e(378,`
        `),t(379,"app-docs-example",20),e(380,`
          `),t(381,"c-nav",21),e(382,`
            `),t(383,"c-nav-item"),e(384,`
              `),t(385,"a",5),e(386,`
                Active
              `),n(),e(387,`
            `),n(),e(388,`
            `),t(389,"c-nav-item"),e(390,`
              `),t(391,"a",6),e(392,"Link"),n(),e(393,`
            `),n(),e(394,`
            `),t(395,"c-nav-item"),e(396,`
              `),t(397,"a",6),e(398,"Link"),n(),e(399,`
            `),n(),e(400,`
            `),t(401,"c-nav-item"),e(402,`
              `),t(403,"a",7),e(404,`
                Disabled
              `),n(),e(405,`
            `),n(),e(406,`
          `),n(),e(407,`
        `),n(),e(408,`
      `),n(),e(409,`
    `),n(),e(410,`
  `),n(),e(411,`
  `),t(412,"c-col",0),e(413,`
    `),t(414,"c-card",2),e(415,`
      `),t(416,"c-card-header"),e(417,`
        `),t(418,"strong"),e(419,"Angular Navs"),n(),e(420," "),t(421,"small"),e(422,"Fill and justify"),n(),e(423,`
      `),n(),e(424,`
      `),t(425,"c-card-body"),e(426,`
        `),t(427,"p",3),e(428,`
          Force your `),t(429,"code"),e(430,".nav"),n(),e(431,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),t(432,"code"),e(433,".nav-item"),n(),e(434,"s, use "),t(435,"code"),e(436,'layout="fill"'),n(),e(437,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),n(),e(438,`
        `),t(439,"app-docs-example",22),e(440,`
          `),t(441,"c-nav",23),e(442,`
            `),t(443,"c-nav-item"),e(444,`
              `),t(445,"a",5),e(446,`
                Active
              `),n(),e(447,`
            `),n(),e(448,`
            `),t(449,"c-nav-item"),e(450,`
              `),t(451,"a",6),e(452,"Link"),n(),e(453,`
            `),n(),e(454,`
            `),t(455,"c-nav-item"),e(456,`
              `),t(457,"a",6),e(458,"Link"),n(),e(459,`
            `),n(),e(460,`
            `),t(461,"c-nav-item"),e(462,`
              `),t(463,"a",7),e(464,`
                Disabled
              `),n(),e(465,`
            `),n(),e(466,`
          `),n(),e(467,`
        `),n(),e(468,`
        `),t(469,"p",3),e(470,`
          For equal-width elements, use `),t(471,"code"),e(472,'layout="justified"'),n(),e(473,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),n(),e(474,`
        `),t(475,"app-docs-example",22),e(476,`
          `),t(477,"c-nav",24),e(478,`
            `),t(479,"c-nav-item"),e(480,`
              `),t(481,"a",5),e(482,`
                Active
              `),n(),e(483,`
            `),n(),e(484,`
            `),t(485,"c-nav-item"),e(486,`
              `),t(487,"a",6),e(488,"Link"),n(),e(489,`
            `),n(),e(490,`
            `),t(491,"c-nav-item"),e(492,`
              `),t(493,"a",6),e(494,"Link"),n(),e(495,`
            `),n(),e(496,`
            `),t(497,"c-nav-item"),e(498,`
              `),t(499,"a",7),e(500,`
                Disabled
              `),n(),e(501,`
            `),n(),e(502,`
          `),n(),e(503,`
        `),n(),e(504,`
      `),n(),e(505,`
    `),n(),e(506,`
  `),n(),e(507,`
  `),t(508,"c-col",0),e(509,`
    `),t(510,"c-card",2),e(511,`
      `),t(512,"c-card-header"),e(513,`
        `),t(514,"strong"),e(515,"Angular Navs"),n(),e(516," "),t(517,"small"),e(518,"Working with flex utilities"),n(),e(519,`
      `),n(),e(520,`
      `),t(521,"c-card-body"),e(522,`
        `),t(523,"p",3),e(524,`
          If you need responsive nav variations, consider using a series of
          `),t(525,"a",25),e(526,"flexbox utilities"),n(),e(527,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),n(),e(528,`
        `),t(529,"app-docs-example",26),e(530,`
          `),t(531,"c-nav",27),e(532,`
            `),t(533,"a",5),e(534,`
              Active
            `),n(),e(535,`
            `),t(536,"a",6),e(537,"Link"),n(),e(538,`
            `),t(539,"a",6),e(540,"Link"),n(),e(541,`
            `),t(542,"a",7),e(543,`
              Disabled
            `),n(),e(544,`
          `),n(),e(545,`
        `),n(),e(546,`
      `),n(),e(547,`
    `),n(),e(548,`
  `),n(),e(549,`
  `),t(550,"c-col",0),e(551,`
    `),t(552,"c-card",2),e(553,`
      `),t(554,"c-card-header"),e(555,`
        `),t(556,"strong"),e(557,"Angular Navs"),n(),e(558," "),t(559,"small"),e(560,"Tabs with dropdowns"),n(),e(561,`
      `),n(),e(562,`
      `),t(563,"c-card-body"),e(564,`
        `),t(565,"app-docs-example",28),e(566,`
          `),t(567,"c-nav",17),e(568,`
            `),t(569,"c-nav-item"),e(570,`
              `),t(571,"button",5),e(572,`
                Active
              `),n(),e(573,`
            `),n(),e(574,`
            `),t(575,"c-dropdown",29),e(576,`
              `),t(577,"button",30),e(578,`
                Dropdown button
              `),n(),e(579,`
              `),t(580,"ul",31),e(581,`
                `),t(582,"li"),e(583,`
                  `),t(584,"button",32),e(585,"Action"),n(),e(586,`
                `),n(),e(587,`
                `),t(588,"li"),e(589,`
                  `),t(590,"button",32),e(591,"Another action"),n(),e(592,`
                `),n(),e(593,`
                `),t(594,"li"),e(595,`
                  `),t(596,"button",32),e(597,"Something else here"),n(),e(598,`
                `),n(),e(599,`
              `),n(),e(600,`
            `),n(),e(601,`
            `),t(602,"c-nav-item"),e(603,`
              `),t(604,"button",6),e(605,"Link"),n(),e(606,`
            `),n(),e(607,`
            `),t(608,"c-nav-item"),e(609,`
              `),t(610,"button",7),e(611,`
                Disabled
              `),n(),e(612,`
            `),n(),e(613,`
          `),n(),e(614,`
        `),n(),e(615,`
      `),n(),e(616,`
    `),n(),e(617,`
  `),n(),e(618,`
  `),t(619,"c-col",0),e(620,`
    `),t(621,"c-card",2),e(622,`
      `),t(623,"c-card-header"),e(624,`
        `),t(625,"strong"),e(626,"Angular Navs"),n(),e(627," "),t(628,"small"),e(629,"Pills with dropdowns"),n(),e(630,`
      `),n(),e(631,`
      `),t(632,"c-card-body"),e(633,`
        `),t(634,"app-docs-example",33),e(635,`
          `),t(636,"c-nav",19),e(637,`
            `),t(638,"c-nav-item"),e(639,`
              `),t(640,"a",34),e(641,`
                Active
              `),n(),e(642,`
            `),n(),e(643,`
            `),t(644,"c-dropdown",29),e(645,`
              `),t(646,"a",35),e(647,`
                Dropdown button
              `),n(),e(648,`
              `),t(649,"ul",31),e(650,`
                `),t(651,"li")(652,"a",32),e(653,"Action"),n()(),e(654,`
                `),t(655,"li")(656,"a",32),e(657,"Another action"),n()(),e(658,`
                `),t(659,"li")(660,"a",32),e(661,"Something else here"),n()(),e(662,`
              `),n(),e(663,`
            `),n(),e(664,`
            `),t(665,"c-nav-item"),e(666,`
              `),t(667,"a",36),e(668,"Link"),n(),e(669,`
            `),n(),e(670,`
            `),t(671,"c-nav-item"),e(672,`
              `),t(673,"a",37),e(674,`
                Disabled
              `),n(),e(675,`
            `),n(),e(676,`
          `),n(),e(677,`
        `),n(),e(678,`
      `),n(),e(679,`
    `),n(),e(680,`
  `),n(),e(681,`
`),n()),m&2&&(i(31),a("active",!0)("routerLink",r(75,l)),i(6),a("routerLink",r(76,l)),i(6),a("routerLink",r(77,l)),i(6),a("disabled",!0)("routerLink",r(78,l)),i(31),a("active",!0)("routerLink",r(79,l)),i(3),a("routerLink",r(80,l)),i(3),a("routerLink",r(81,l)),i(3),a("disabled",!0)("routerLink",r(82,l)),i(41),a("active",!0)("routerLink",r(83,l)),i(6),a("routerLink",r(84,l)),i(6),a("routerLink",r(85,l)),i(6),a("disabled",!0)("routerLink",r(86,l)),i(18),a("active",!0)("routerLink",r(87,l)),i(6),a("routerLink",r(88,l)),i(6),a("routerLink",r(89,l)),i(6),a("disabled",!0)("routerLink",r(90,l)),i(39),a("active",!0)("routerLink",r(91,l)),i(6),a("routerLink",r(92,l)),i(6),a("routerLink",r(93,l)),i(6),a("disabled",!0)("routerLink",r(94,l)),i(36),a("active",!0)("routerLink",r(95,l)),i(6),a("routerLink",r(96,l)),i(6),a("routerLink",r(97,l)),i(6),a("disabled",!0)("routerLink",r(98,l)),i(36),a("active",!0)("routerLink",r(99,l)),i(6),a("routerLink",r(100,l)),i(6),a("routerLink",r(101,l)),i(6),a("disabled",!0)("routerLink",r(102,l)),i(36),a("active",!0),i(18),a("disabled",!0),i(42),a("active",!0)("routerLink",r(103,l)),i(6),a("routerLink",r(104,l)),i(6),a("routerLink",r(105,l)),i(6),a("disabled",!0)("routerLink",r(106,l)),i(18),a("active",!0)("routerLink",r(107,l)),i(6),a("routerLink",r(108,l)),i(6),a("routerLink",r(109,l)),i(6),a("disabled",!0)("routerLink",r(110,l)),i(34),a("active",!0)("routerLink",r(111,l)),i(3),a("routerLink",r(112,l)),i(3),a("routerLink",r(113,l)),i(3),a("disabled",!0)("routerLink",r(114,l)),i(29),a("active",!0)("routerLink",r(115,l)),i(13),a("routerLink",r(116,l)),i(6),a("routerLink",r(117,l)),i(6),a("routerLink",r(118,l)),i(8),a("routerLink",r(119,l)),i(6),a("disabled",!0)("routerLink",r(120,l)),i(30),a("active",!0),i(12),a("routerLink",r(121,l)),i(4),a("routerLink",r(122,l)),i(4),a("routerLink",r(123,l)),i(13),a("disabled",!0))},dependencies:[h,y,p,s,u,g,f,L,b,c,E,S,v,k,F],encapsulation:2})}};export{w as NavsComponent};
