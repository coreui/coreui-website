import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{$n as cte,C as Cle,Ei as ri,Fi as ste,Ir as jH,Ki as ule,L as G1,M as F,Mt as Oe,N as FH,Oi as rte,Or as hA,Ri as tH,Tr as gn,Ui as tte,Wi as uU,Yi as vN,Zt as S,ar as dte,at as K1,c as AU,ci as oU,di as ole,ea as vle,fi as ote,ha as yle,hi as pe,i as $ae,in as Uae,it as Jx,mt as L,n as $H,or as eA,ot as Ka,pa as xp,pi as p,rn as U,sa as x,si as nte,un as Wa,x as Ce,yn as Xx}from"./main-VQBM3OGL.js";var l=()=>[];var X=class S$1{constructor(){this.formBuilder=p(cte);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new rte({radio1:new ote(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,a=this.formCheck1.value;a[p]=!s,this.formCheck1.setValue(a)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||S$1)}}static{this.ɵcmp=x({type:S$1,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,a){s&1&&(F(0,`c-row`),Ce(1,`
  `),F(2,`c-col`,0),Ce(3,`
    `),Oe(4,`app-docs-components`,1),Ce(5,`
    `),F(6,`c-card`,2),Ce(7,`
      `),F(8,`c-card-header`),Ce(9,`
        `),F(10,`strong`),Ce(11,`Angular Button Group`),L(),Ce(12,` `),F(13,`span`),Ce(14,`Basic example`),L(),Ce(15,`
      `),L(),Ce(16,`
      `),F(17,`c-card-body`),Ce(18,`
        `),F(19,`p`),Ce(20,`
          Wrap a series of `),F(21,`code`),Ce(22,`<CButton>`),L(),Ce(23,` components in
          `),F(24,`code`),Ce(25,`<c-button-group>`),L(),Ce(26,`.
        `),L(),Ce(27,`
        `),F(28,`app-docs-example`,3),Ce(29,`
          `),F(30,`c-button-group`,4),Ce(31,`
            `),F(32,`button`,5),Ce(33,`Left`),L(),Ce(34,`
            `),F(35,`button`,5),Ce(36,`Middle`),L(),Ce(37,`
            `),F(38,`button`,5),Ce(39,`Right`),L(),Ce(40,`
          `),L(),Ce(41,`
        `),L(),Ce(42,`
        `),F(43,`p`),Ce(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),F(45,`code`),Ce(46,`<CNav>`),L(),Ce(47,` components.
        `),L(),Ce(48,`
        `),F(49,`app-docs-example`,3),Ce(50,`
          `),F(51,`c-button-group`),Ce(52,`
            `),F(53,`a`,6),Ce(54,`
              Active link
            `),L(),Ce(55,`
            `),F(56,`a`,7),Ce(57,`
              Link
            `),L(),Ce(58,`
            `),F(59,`a`,7),Ce(60,`
              Link
            `),L(),Ce(61,`
          `),L(),Ce(62,`
        `),L(),Ce(63,`
      `),L(),Ce(64,`
    `),L(),Ce(65,`
  `),L(),Ce(66,`
  `),F(67,`c-col`,0),Ce(68,`
    `),F(69,`c-card`,2),Ce(70,`
      `),F(71,`c-card-header`),Ce(72,`
        `),F(73,`strong`),Ce(74,`Angular Button Group`),L(),Ce(75,` `),F(76,`span`),Ce(77,`Mixed styles`),L(),Ce(78,`
      `),L(),Ce(79,`
      `),F(80,`c-card-body`),Ce(81,`
        `),F(82,`app-docs-example`,8),Ce(83,`
          `),F(84,`c-button-group`,9),Ce(85,`
            `),F(86,`button`,10),Ce(87,`Left`),L(),Ce(88,`
            `),F(89,`button`,11),Ce(90,`Middle`),L(),Ce(91,`
            `),F(92,`button`,12),Ce(93,`Right`),L(),Ce(94,`
          `),L(),Ce(95,`
        `),L(),Ce(96,`
      `),L(),Ce(97,`
    `),L(),Ce(98,`
  `),L(),Ce(99,`
  `),F(100,`c-col`,0),Ce(101,`
    `),F(102,`c-card`,2),Ce(103,`
      `),F(104,`c-card-header`),Ce(105,`
        `),F(106,`strong`),Ce(107,`Angular Button Group`),L(),Ce(108,` `),F(109,`span`),Ce(110,`Outlined styles`),L(),Ce(111,`
      `),L(),Ce(112,`
      `),F(113,`c-card-body`),Ce(114,`
        `),F(115,`app-docs-example`,13),Ce(116,`
          `),F(117,`c-button-group`,14),Ce(118,`
            `),F(119,`button`,15),Ce(120,`
              Left
            `),L(),Ce(121,`
            `),F(122,`button`,15),Ce(123,`
              Middle
            `),L(),Ce(124,`
            `),F(125,`button`,15),Ce(126,`
              Right
            `),L(),Ce(127,`
          `),L(),Ce(128,`
        `),L(),Ce(129,`
      `),L(),Ce(130,`
    `),L(),Ce(131,`
  `),L(),Ce(132,`
  `),F(133,`c-col`,0),Ce(134,`
    `),F(135,`c-card`,2),Ce(136,`
      `),F(137,`c-card-header`),Ce(138,`
        `),F(139,`strong`),Ce(140,`Angular Button Group`),L(),Ce(141,` `),F(142,`span`),Ce(143,`Checkbox and radio button groups`),L(),Ce(144,`
      `),L(),Ce(145,`
      `),F(146,`c-card-body`),Ce(147,`
        `),F(148,`p`),Ce(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),L(),Ce(150,`
        `),F(151,`app-docs-example`,16),Ce(152,`
          `),F(153,`form`,17),Ce(154,`
            `),F(155,`c-button-group`,18),Ce(156,`
              `),F(157,`input`,19),G1(),L(),Ce(158,`
              `),F(159,`label`,20),pe(`click`,function(){return a.setCheckBoxValue(`checkbox1`)}),Ce(160,`Checkbox 1`),L(),Ce(161,`

              `),F(162,`input`,21),G1(),L(),Ce(163,`
              `),F(164,`label`,20),pe(`click`,function(){return a.setCheckBoxValue(`checkbox2`)}),Ce(165,`Checkbox 2`),L(),Ce(166,`

              `),F(167,`input`,22),G1(),L(),Ce(168,`
              `),F(169,`label`,20),pe(`click`,function(){return a.setCheckBoxValue(`checkbox3`)}),Ce(170,`Checkbox
                3`),L(),Ce(171,`
            `),L(),Ce(172,`
          `),L(),Ce(173,`
          `),Oe(174,`br`,23),Ce(175,`
        `),L(),Ce(176,`
        `),F(177,`app-docs-example`,16),Ce(178,`
          `),F(179,`form`,17),Ce(180,`
            `),F(181,`c-button-group`,24),Ce(182,`
              `),F(183,`input`,25),G1(),L(),Ce(184,`
              `),F(185,`label`,20),pe(`click`,function(){return a.setRadioValue(`Radio1`)}),Ce(186,`Radio 1`),L(),Ce(187,`

              `),F(188,`input`,26),G1(),L(),Ce(189,`
              `),F(190,`label`,20),pe(`click`,function(){return a.setRadioValue(`Radio2`)}),Ce(191,`Radio 2`),L(),Ce(192,`

              `),F(193,`input`,27),G1(),L(),Ce(194,`
              `),F(195,`label`,20),pe(`click`,function(){return a.setRadioValue(`Radio3`)}),Ce(196,`Radio 3`),L(),Ce(197,`
            `),L(),Ce(198,`
          `),L(),Ce(199,`
        `),L(),Ce(200,`
      `),L(),Ce(201,`
    `),L(),Ce(202,`
  `),L(),Ce(203,`
  `),F(204,`c-col`,0),Ce(205,`
    `),F(206,`c-card`,2),Ce(207,`
      `),F(208,`c-card-header`),Ce(209,`
        `),F(210,`strong`),Ce(211,`Angular Button Group`),L(),Ce(212,` `),F(213,`span`),Ce(214,`Button toolbar`),L(),Ce(215,`
      `),L(),Ce(216,`
      `),F(217,`c-card-body`),Ce(218,`
        `),F(219,`p`),Ce(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),L(),Ce(221,`
        `),F(222,`app-docs-example`,28),Ce(223,`
          `),F(224,`c-button-toolbar`,29),Ce(225,`
            `),F(226,`c-button-group`,30),Ce(227,`
              `),F(228,`button`,5),Ce(229,`1`),L(),Ce(230,`
              `),F(231,`button`,5),Ce(232,`2`),L(),Ce(233,`
              `),F(234,`button`,5),Ce(235,`3`),L(),Ce(236,`
              `),F(237,`button`,5),Ce(238,`4`),L(),Ce(239,`
            `),L(),Ce(240,`
            `),F(241,`c-button-group`,31),Ce(242,`
              `),F(243,`button`,32),Ce(244,`5`),L(),Ce(245,`
              `),F(246,`button`,32),Ce(247,`6`),L(),Ce(248,`
              `),F(249,`button`,32),Ce(250,`7`),L(),Ce(251,`
            `),L(),Ce(252,`
            `),F(253,`c-button-group`,33),Ce(254,`
              `),F(255,`button`,34),Ce(256,`8`),L(),Ce(257,`
            `),L(),Ce(258,`
          `),L(),Ce(259,`
        `),L(),Ce(260,`
        `),F(261,`p`),Ce(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),L(),Ce(263,`
        `),F(264,`app-docs-example`,28),Ce(265,`
          `),F(266,`c-button-toolbar`,35),Ce(267,`
            `),F(268,`c-button-group`,30),Ce(269,`
              `),F(270,`button`,36),Ce(271,`
                1
              `),L(),Ce(272,`
              `),F(273,`button`,36),Ce(274,`
                2
              `),L(),Ce(275,`
              `),F(276,`button`,36),Ce(277,`
                3
              `),L(),Ce(278,`
              `),F(279,`button`,36),Ce(280,`
                4
              `),L(),Ce(281,`
            `),L(),Ce(282,`
            `),F(283,`c-input-group`),Ce(284,`
              `),F(285,`span`,37),Ce(286,`@`),L(),Ce(287,`
              `),Oe(288,`input`,38),Ce(289,`
            `),L(),Ce(290,`
          `),L(),Ce(291,`
          `),F(292,`c-button-toolbar`,39),Ce(293,`
            `),F(294,`c-button-group`,30),Ce(295,`
              `),F(296,`button`,36),Ce(297,`
                1
              `),L(),Ce(298,`
              `),F(299,`button`,36),Ce(300,`
                2
              `),L(),Ce(301,`
              `),F(302,`button`,36),Ce(303,`
                3
              `),L(),Ce(304,`
              `),F(305,`button`,36),Ce(306,`
                4
              `),L(),Ce(307,`
            `),L(),Ce(308,`
            `),F(309,`c-input-group`),Ce(310,`
              `),F(311,`span`,37),Ce(312,`@`),L(),Ce(313,`
              `),Oe(314,`input`,38),Ce(315,`
            `),L(),Ce(316,`
          `),L(),Ce(317,`
        `),L(),Ce(318,`
      `),L(),Ce(319,`
    `),L(),Ce(320,`
  `),L(),Ce(321,`
  `),F(322,`c-col`,0),Ce(323,`
    `),F(324,`c-card`,2),Ce(325,`
      `),F(326,`c-card-header`),Ce(327,`
        `),F(328,`strong`),Ce(329,`Angular Button Group`),L(),Ce(330,` `),F(331,`span`),Ce(332,`Sizing`),L(),Ce(333,`
      `),L(),Ce(334,`
      `),F(335,`c-card-body`),Ce(336,`
        `),F(337,`p`),Ce(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),F(339,`code`),Ce(340,`size`),L(),Ce(341,` property to all `),F(342,`code`),Ce(343,`<c-button-group>`),L(),Ce(344,`'s, including
          each one when nesting multiple groups.
        `),L(),Ce(345,`
        `),F(346,`app-docs-example`,40),Ce(347,`
          `),F(348,`c-button-group`,41),Ce(349,`
            `),F(350,`button`,42),Ce(351,`
              Left
            `),L(),Ce(352,`
            `),F(353,`button`,42),Ce(354,`
              Middle
            `),L(),Ce(355,`
            `),F(356,`button`,42),Ce(357,`
              Right
            `),L(),Ce(358,`
          `),L(),Ce(359,`
          `),Oe(360,`br`),Ce(361,`
          `),F(362,`c-button-group`,43),Ce(363,`
            `),F(364,`button`,42),Ce(365,`
              Left
            `),L(),Ce(366,`
            `),F(367,`button`,42),Ce(368,`
              Middle
            `),L(),Ce(369,`
            `),F(370,`button`,42),Ce(371,`
              Right
            `),L(),Ce(372,`
          `),L(),Ce(373,`
          `),Oe(374,`br`),Ce(375,`
          `),F(376,`c-button-group`,44),Ce(377,`
            `),F(378,`button`,42),Ce(379,`
              Left
            `),L(),Ce(380,`
            `),F(381,`button`,42),Ce(382,`
              Middle
            `),L(),Ce(383,`
            `),F(384,`button`,42),Ce(385,`
              Right
            `),L(),Ce(386,`
          `),L(),Ce(387,`
        `),L(),Ce(388,`
      `),L(),Ce(389,`
    `),L(),Ce(390,`
  `),L(),Ce(391,`
  `),F(392,`c-col`,0),Ce(393,`
    `),F(394,`c-card`,2),Ce(395,`
      `),F(396,`c-card-header`),Ce(397,`
        `),F(398,`strong`),Ce(399,`Angular Button Group`),L(),Ce(400,` `),F(401,`span`),Ce(402,`Nesting`),L(),Ce(403,`
      `),L(),Ce(404,`
      `),F(405,`c-card-body`),Ce(406,`
        `),F(407,`p`,45),Ce(408,`
          Put a `),F(409,`code`),Ce(410,`<c-button-group>`),L(),Ce(411,` inside another
          `),F(412,`code`),Ce(413,`<c-button-group>`),L(),Ce(414,` when you need dropdown menus combined with a series
          of buttons.
        `),L(),Ce(415,`
        `),F(416,`app-docs-example`,46),Ce(417,`
          `),F(418,`c-button-group`,47),Ce(419,`
            `),F(420,`button`,5),Ce(421,`1`),L(),Ce(422,`
            `),F(423,`button`,5),Ce(424,`2`),L(),Ce(425,`
            `),F(426,`c-dropdown`,48),Ce(427,`
              `),F(428,`button`,49),Ce(429,`
                Dropdown
              `),L(),Ce(430,`
              `),F(431,`ul`,50),Ce(432,`
                `),F(433,`li`)(434,`a`,51),Ce(435,`Action`),L()(),Ce(436,`
                `),F(437,`li`)(438,`a`,51),Ce(439,`Another action`),L()(),Ce(440,`
                `),F(441,`li`)(442,`a`,51),Ce(443,`Something else here`),L()(),Ce(444,`
                `),Oe(445,`li`,52),Ce(446,`
                `),F(447,`li`)(448,`a`,51),Ce(449,`Separated link`),L()(),Ce(450,`
              `),L(),Ce(451,`
            `),L(),Ce(452,`
          `),L(),Ce(453,`
        `),L(),Ce(454,`
      `),L(),Ce(455,`
    `),L(),Ce(456,`
  `),L(),Ce(457,`
  `),F(458,`c-col`,0),Ce(459,`
    `),F(460,`c-card`,2),Ce(461,`
      `),F(462,`c-card-header`),Ce(463,`
        `),F(464,`strong`),Ce(465,`Angular Button Group`),L(),Ce(466,` `),F(467,`span`),Ce(468,`Vertical variation`),L(),Ce(469,`
      `),L(),Ce(470,`
      `),F(471,`c-card-body`),Ce(472,`
        `),F(473,`p`,45),Ce(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),F(475,`strong`),Ce(476,`Split button dropdowns are not supported here.`),L(),Ce(477,`
        `),L(),Ce(478,`
        `),F(479,`app-docs-example`,53),Ce(480,`
          `),F(481,`c-button-group`,54),Ce(482,`
            `),F(483,`button`,55),Ce(484,`Button`),L(),Ce(485,`
            `),F(486,`button`,55),Ce(487,`Button`),L(),Ce(488,`
            `),F(489,`button`,55),Ce(490,`Button`),L(),Ce(491,`
            `),F(492,`button`,55),Ce(493,`Button`),L(),Ce(494,`
            `),F(495,`button`,55),Ce(496,`Button`),L(),Ce(497,`
            `),F(498,`button`,55),Ce(499,`Button`),L(),Ce(500,`
            `),F(501,`button`,55),Ce(502,`Button`),L(),Ce(503,`
          `),L(),Ce(504,`
          `),Oe(505,`br`),Ce(506,`
        `),L(),Ce(507,`
        `),F(508,`app-docs-example`,53),Ce(509,`
          `),F(510,`c-button-group`,54),Ce(511,`
            `),F(512,`button`,5),Ce(513,`Button`),L(),Ce(514,`
            `),F(515,`button`,5),Ce(516,`Button`),L(),Ce(517,`
            `),F(518,`c-dropdown`,48),Ce(519,`
              `),F(520,`button`,49),Ce(521,`
                Dropdown
              `),L(),Ce(522,`
              `),F(523,`ul`,50),Ce(524,`
                `),F(525,`li`)(526,`a`,51),Ce(527,`Action`),L()(),Ce(528,`
                `),F(529,`li`)(530,`a`,51),Ce(531,`Another action`),L()(),Ce(532,`
                `),F(533,`li`)(534,`a`,51),Ce(535,`Something else here`),L()(),Ce(536,`
                `),Oe(537,`li`,52),Ce(538,`
                `),F(539,`li`)(540,`a`,51),Ce(541,`Separated link`),L()(),Ce(542,`
              `),L(),Ce(543,`
            `),L(),Ce(544,`
            `),F(545,`button`,5),Ce(546,`Button`),L(),Ce(547,`
            `),F(548,`button`,5),Ce(549,`Button`),L(),Ce(550,`
            `),F(551,`c-dropdown`,48),Ce(552,`
              `),F(553,`button`,49),Ce(554,`
                Dropdown
              `),L(),Ce(555,`
              `),F(556,`ul`,50),Ce(557,`
                `),F(558,`li`)(559,`a`,51),Ce(560,`Action`),L()(),Ce(561,`
                `),F(562,`li`)(563,`a`,51),Ce(564,`Another action`),L()(),Ce(565,`
                `),F(566,`li`)(567,`a`,51),Ce(568,`Something else here`),L()(),Ce(569,`
                `),Oe(570,`li`,52),Ce(571,`
                `),F(572,`li`)(573,`a`,51),Ce(574,`Separated link`),L()(),Ce(575,`
              `),L(),Ce(576,`
            `),L(),Ce(577,`
            `),F(578,`c-dropdown`,56),Ce(579,`
              `),F(580,`button`,49),Ce(581,`
                Dropdown
              `),L(),Ce(582,`
              `),F(583,`ul`,57),Ce(584,`
                `),F(585,`li`)(586,`a`,51),Ce(587,`Action`),L()(),Ce(588,`
                `),F(589,`li`)(590,`a`,51),Ce(591,`Another action`),L()(),Ce(592,`
                `),F(593,`li`)(594,`a`,51),Ce(595,`Something else here`),L()(),Ce(596,`
                `),Oe(597,`li`,52),Ce(598,`
                `),F(599,`li`)(600,`a`,51),Ce(601,`Separated link`),L()(),Ce(602,`
              `),L(),Ce(603,`
            `),L(),Ce(604,`
            `),F(605,`c-dropdown`,48),Ce(606,`
              `),F(607,`button`,49),Ce(608,`
                Dropdown
              `),L(),Ce(609,`
              `),F(610,`ul`,50),Ce(611,`
                `),F(612,`li`)(613,`a`,51),Ce(614,`Action`),L()(),Ce(615,`
                `),F(616,`li`)(617,`a`,51),Ce(618,`Another action`),L()(),Ce(619,`
                `),F(620,`li`)(621,`a`,51),Ce(622,`Something else here`),L()(),Ce(623,`
                `),Oe(624,`li`,52),Ce(625,`
                `),F(626,`li`)(627,`a`,51),Ce(628,`Separated link`),L()(),Ce(629,`
              `),L(),Ce(630,`
            `),L(),Ce(631,`
          `),L(),Ce(632,`
        `),L(),Ce(633,`
        `),F(634,`app-docs-example`,53),Ce(635,`
          `),F(636,`form`,17),Ce(637,`
            `),F(638,`c-button-group`,54),Ce(639,`
              `),F(640,`input`,25),G1(),L(),Ce(641,`
              `),F(642,`label`,58),pe(`click`,function(){return a.setRadioValue(`Radio1`)}),Ce(643,`Radio 1`),L(),Ce(644,`

              `),F(645,`input`,26),G1(),L(),Ce(646,`
              `),F(647,`label`,58),pe(`click`,function(){return a.setRadioValue(`Radio2`)}),Ce(648,`Radio 2`),L(),Ce(649,`

              `),F(650,`input`,27),G1(),L(),Ce(651,`
              `),F(652,`label`,58),pe(`click`,function(){return a.setRadioValue(`Radio3`)}),Ce(653,`Radio
                3`),L(),Ce(654,`
            `),L(),Ce(655,`
          `),L(),Ce(656,`
        `),L(),Ce(657,`
      `),L(),Ce(658,`
    `),L(),Ce(659,`
  `),L(),Ce(660,`
`),L()),s&2&&(S(53),U(`active`,!0)(`routerLink`,gn(30,l)),S(3),U(`routerLink`,gn(31,l)),S(3),U(`routerLink`,gn(32,l)),S(94),U(`formGroup`,a.formCheck1),S(4),K1(),S(5),K1(),S(5),K1(),S(12),U(`formGroup`,a.formRadio1),S(4),K1(),S(5),K1(),S(5),K1(),S(241),U(`routerLink`,gn(33,l)),S(4),U(`routerLink`,gn(34,l)),S(4),U(`routerLink`,gn(35,l)),S(6),U(`routerLink`,gn(36,l)),S(33),U(`vertical`,!0),S(29),U(`vertical`,!0),S(16),U(`routerLink`,gn(37,l)),S(4),U(`routerLink`,gn(38,l)),S(4),U(`routerLink`,gn(39,l)),S(6),U(`routerLink`,gn(40,l)),S(19),U(`routerLink`,gn(41,l)),S(4),U(`routerLink`,gn(42,l)),S(4),U(`routerLink`,gn(43,l)),S(6),U(`routerLink`,gn(44,l)),S(13),U(`routerLink`,gn(45,l)),S(4),U(`routerLink`,gn(46,l)),S(4),U(`routerLink`,gn(47,l)),S(6),U(`routerLink`,gn(48,l)),S(13),U(`routerLink`,gn(49,l)),S(4),U(`routerLink`,gn(50,l)),S(4),U(`routerLink`,gn(51,l)),S(6),U(`routerLink`,gn(52,l)),S(9),U(`formGroup`,a.formRadio1),S(2),U(`vertical`,!0),S(2),K1(),S(5),K1(),S(5),K1())},dependencies:[Cle,AU,Wa,uU,Ka,E,Uae,oU,ri,dte,ste,vN,tH,jH,tte,nte,FH,$H,eA,$ae,vle,yle,ule,hA,Xx,xp,Jx,ole,c],encapsulation:2})}};export{X as ButtonGroupsComponent};