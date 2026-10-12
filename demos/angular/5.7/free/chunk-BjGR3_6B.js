import{$ as Ij,Dt as O,Et as Noe,Ft as Pa,Gi as un,Ir as jX,Jr as le,Kn as bN,Mn as Zi,N as FN,P as FV,Pi as sT,Pr as jB,Vi as toe,W as HX,Wt as Re,Xi as voe,Yt as S,Z as IN,_n as VV,ai as nH,bn as WX,c as Aoe,d as BX,da as yj,en as T,et as Ioe,ga as zX,gn as V,gt as La,ht as LX,ir as dk,j as F,lr as eoe,qt as Roe,t as $X,ta as wj,ua as ye,ur as ep,vi as pk,wr as h,x as DN}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var l=()=>[];var X=class S$1{constructor(){this.formBuilder=h(zX);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new jX({radio1:new HX(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,a=this.formCheck1.value;a[p]=!s,this.formCheck1.setValue(a)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||S$1)}}static{this.ɵcmp=T({type:S$1,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,a){s&1&&(O(0,`c-row`),ye(1,`
  `),O(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O(6,`c-card`,2),ye(7,`
      `),O(8,`c-card-header`),ye(9,`
        `),O(10,`strong`),ye(11,`Angular Button Group`),F(),ye(12,` `),O(13,`span`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),O(17,`c-card-body`),ye(18,`
        `),O(19,`p`),ye(20,`
          Wrap a series of `),O(21,`code`),ye(22,`<CButton>`),F(),ye(23,` components in
          `),O(24,`code`),ye(25,`<c-button-group>`),F(),ye(26,`.
        `),F(),ye(27,`
        `),O(28,`app-docs-example`,3),ye(29,`
          `),O(30,`c-button-group`,4),ye(31,`
            `),O(32,`button`,5),ye(33,`Left`),F(),ye(34,`
            `),O(35,`button`,5),ye(36,`Middle`),F(),ye(37,`
            `),O(38,`button`,5),ye(39,`Right`),F(),ye(40,`
          `),F(),ye(41,`
        `),F(),ye(42,`
        `),O(43,`p`),ye(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),O(45,`code`),ye(46,`<CNav>`),F(),ye(47,` components.
        `),F(),ye(48,`
        `),O(49,`app-docs-example`,3),ye(50,`
          `),O(51,`c-button-group`),ye(52,`
            `),O(53,`a`,6),ye(54,`
              Active link
            `),F(),ye(55,`
            `),O(56,`a`,7),ye(57,`
              Link
            `),F(),ye(58,`
            `),O(59,`a`,7),ye(60,`
              Link
            `),F(),ye(61,`
          `),F(),ye(62,`
        `),F(),ye(63,`
      `),F(),ye(64,`
    `),F(),ye(65,`
  `),F(),ye(66,`
  `),O(67,`c-col`,0),ye(68,`
    `),O(69,`c-card`,2),ye(70,`
      `),O(71,`c-card-header`),ye(72,`
        `),O(73,`strong`),ye(74,`Angular Button Group`),F(),ye(75,` `),O(76,`span`),ye(77,`Mixed styles`),F(),ye(78,`
      `),F(),ye(79,`
      `),O(80,`c-card-body`),ye(81,`
        `),O(82,`app-docs-example`,8),ye(83,`
          `),O(84,`c-button-group`,9),ye(85,`
            `),O(86,`button`,10),ye(87,`Left`),F(),ye(88,`
            `),O(89,`button`,11),ye(90,`Middle`),F(),ye(91,`
            `),O(92,`button`,12),ye(93,`Right`),F(),ye(94,`
          `),F(),ye(95,`
        `),F(),ye(96,`
      `),F(),ye(97,`
    `),F(),ye(98,`
  `),F(),ye(99,`
  `),O(100,`c-col`,0),ye(101,`
    `),O(102,`c-card`,2),ye(103,`
      `),O(104,`c-card-header`),ye(105,`
        `),O(106,`strong`),ye(107,`Angular Button Group`),F(),ye(108,` `),O(109,`span`),ye(110,`Outlined styles`),F(),ye(111,`
      `),F(),ye(112,`
      `),O(113,`c-card-body`),ye(114,`
        `),O(115,`app-docs-example`,13),ye(116,`
          `),O(117,`c-button-group`,14),ye(118,`
            `),O(119,`button`,15),ye(120,`
              Left
            `),F(),ye(121,`
            `),O(122,`button`,15),ye(123,`
              Middle
            `),F(),ye(124,`
            `),O(125,`button`,15),ye(126,`
              Right
            `),F(),ye(127,`
          `),F(),ye(128,`
        `),F(),ye(129,`
      `),F(),ye(130,`
    `),F(),ye(131,`
  `),F(),ye(132,`
  `),O(133,`c-col`,0),ye(134,`
    `),O(135,`c-card`,2),ye(136,`
      `),O(137,`c-card-header`),ye(138,`
        `),O(139,`strong`),ye(140,`Angular Button Group`),F(),ye(141,` `),O(142,`span`),ye(143,`Checkbox and radio button groups`),F(),ye(144,`
      `),F(),ye(145,`
      `),O(146,`c-card-body`),ye(147,`
        `),O(148,`p`),ye(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),F(),ye(150,`
        `),O(151,`app-docs-example`,16),ye(152,`
          `),O(153,`form`,17),ye(154,`
            `),O(155,`c-button-group`,18),ye(156,`
              `),O(157,`input`,19),dk(),F(),ye(158,`
              `),O(159,`label`,20),le(`click`,function(){return a.setCheckBoxValue(`checkbox1`)}),ye(160,`Checkbox 1`),F(),ye(161,`

              `),O(162,`input`,21),dk(),F(),ye(163,`
              `),O(164,`label`,20),le(`click`,function(){return a.setCheckBoxValue(`checkbox2`)}),ye(165,`Checkbox 2`),F(),ye(166,`

              `),O(167,`input`,22),dk(),F(),ye(168,`
              `),O(169,`label`,20),le(`click`,function(){return a.setCheckBoxValue(`checkbox3`)}),ye(170,`Checkbox
                3`),F(),ye(171,`
            `),F(),ye(172,`
          `),F(),ye(173,`
          `),Re(174,`br`,23),ye(175,`
        `),F(),ye(176,`
        `),O(177,`app-docs-example`,16),ye(178,`
          `),O(179,`form`,17),ye(180,`
            `),O(181,`c-button-group`,24),ye(182,`
              `),O(183,`input`,25),dk(),F(),ye(184,`
              `),O(185,`label`,20),le(`click`,function(){return a.setRadioValue(`Radio1`)}),ye(186,`Radio 1`),F(),ye(187,`

              `),O(188,`input`,26),dk(),F(),ye(189,`
              `),O(190,`label`,20),le(`click`,function(){return a.setRadioValue(`Radio2`)}),ye(191,`Radio 2`),F(),ye(192,`

              `),O(193,`input`,27),dk(),F(),ye(194,`
              `),O(195,`label`,20),le(`click`,function(){return a.setRadioValue(`Radio3`)}),ye(196,`Radio 3`),F(),ye(197,`
            `),F(),ye(198,`
          `),F(),ye(199,`
        `),F(),ye(200,`
      `),F(),ye(201,`
    `),F(),ye(202,`
  `),F(),ye(203,`
  `),O(204,`c-col`,0),ye(205,`
    `),O(206,`c-card`,2),ye(207,`
      `),O(208,`c-card-header`),ye(209,`
        `),O(210,`strong`),ye(211,`Angular Button Group`),F(),ye(212,` `),O(213,`span`),ye(214,`Button toolbar`),F(),ye(215,`
      `),F(),ye(216,`
      `),O(217,`c-card-body`),ye(218,`
        `),O(219,`p`),ye(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),F(),ye(221,`
        `),O(222,`app-docs-example`,28),ye(223,`
          `),O(224,`c-button-toolbar`,29),ye(225,`
            `),O(226,`c-button-group`,30),ye(227,`
              `),O(228,`button`,5),ye(229,`1`),F(),ye(230,`
              `),O(231,`button`,5),ye(232,`2`),F(),ye(233,`
              `),O(234,`button`,5),ye(235,`3`),F(),ye(236,`
              `),O(237,`button`,5),ye(238,`4`),F(),ye(239,`
            `),F(),ye(240,`
            `),O(241,`c-button-group`,31),ye(242,`
              `),O(243,`button`,32),ye(244,`5`),F(),ye(245,`
              `),O(246,`button`,32),ye(247,`6`),F(),ye(248,`
              `),O(249,`button`,32),ye(250,`7`),F(),ye(251,`
            `),F(),ye(252,`
            `),O(253,`c-button-group`,33),ye(254,`
              `),O(255,`button`,34),ye(256,`8`),F(),ye(257,`
            `),F(),ye(258,`
          `),F(),ye(259,`
        `),F(),ye(260,`
        `),O(261,`p`),ye(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),F(),ye(263,`
        `),O(264,`app-docs-example`,28),ye(265,`
          `),O(266,`c-button-toolbar`,35),ye(267,`
            `),O(268,`c-button-group`,30),ye(269,`
              `),O(270,`button`,36),ye(271,`
                1
              `),F(),ye(272,`
              `),O(273,`button`,36),ye(274,`
                2
              `),F(),ye(275,`
              `),O(276,`button`,36),ye(277,`
                3
              `),F(),ye(278,`
              `),O(279,`button`,36),ye(280,`
                4
              `),F(),ye(281,`
            `),F(),ye(282,`
            `),O(283,`c-input-group`),ye(284,`
              `),O(285,`span`,37),ye(286,`@`),F(),ye(287,`
              `),Re(288,`input`,38),ye(289,`
            `),F(),ye(290,`
          `),F(),ye(291,`
          `),O(292,`c-button-toolbar`,39),ye(293,`
            `),O(294,`c-button-group`,30),ye(295,`
              `),O(296,`button`,36),ye(297,`
                1
              `),F(),ye(298,`
              `),O(299,`button`,36),ye(300,`
                2
              `),F(),ye(301,`
              `),O(302,`button`,36),ye(303,`
                3
              `),F(),ye(304,`
              `),O(305,`button`,36),ye(306,`
                4
              `),F(),ye(307,`
            `),F(),ye(308,`
            `),O(309,`c-input-group`),ye(310,`
              `),O(311,`span`,37),ye(312,`@`),F(),ye(313,`
              `),Re(314,`input`,38),ye(315,`
            `),F(),ye(316,`
          `),F(),ye(317,`
        `),F(),ye(318,`
      `),F(),ye(319,`
    `),F(),ye(320,`
  `),F(),ye(321,`
  `),O(322,`c-col`,0),ye(323,`
    `),O(324,`c-card`,2),ye(325,`
      `),O(326,`c-card-header`),ye(327,`
        `),O(328,`strong`),ye(329,`Angular Button Group`),F(),ye(330,` `),O(331,`span`),ye(332,`Sizing`),F(),ye(333,`
      `),F(),ye(334,`
      `),O(335,`c-card-body`),ye(336,`
        `),O(337,`p`),ye(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),O(339,`code`),ye(340,`size`),F(),ye(341,` property to all `),O(342,`code`),ye(343,`<c-button-group>`),F(),ye(344,`'s, including
          each one when nesting multiple groups.
        `),F(),ye(345,`
        `),O(346,`app-docs-example`,40),ye(347,`
          `),O(348,`c-button-group`,41),ye(349,`
            `),O(350,`button`,42),ye(351,`
              Left
            `),F(),ye(352,`
            `),O(353,`button`,42),ye(354,`
              Middle
            `),F(),ye(355,`
            `),O(356,`button`,42),ye(357,`
              Right
            `),F(),ye(358,`
          `),F(),ye(359,`
          `),Re(360,`br`),ye(361,`
          `),O(362,`c-button-group`,43),ye(363,`
            `),O(364,`button`,42),ye(365,`
              Left
            `),F(),ye(366,`
            `),O(367,`button`,42),ye(368,`
              Middle
            `),F(),ye(369,`
            `),O(370,`button`,42),ye(371,`
              Right
            `),F(),ye(372,`
          `),F(),ye(373,`
          `),Re(374,`br`),ye(375,`
          `),O(376,`c-button-group`,44),ye(377,`
            `),O(378,`button`,42),ye(379,`
              Left
            `),F(),ye(380,`
            `),O(381,`button`,42),ye(382,`
              Middle
            `),F(),ye(383,`
            `),O(384,`button`,42),ye(385,`
              Right
            `),F(),ye(386,`
          `),F(),ye(387,`
        `),F(),ye(388,`
      `),F(),ye(389,`
    `),F(),ye(390,`
  `),F(),ye(391,`
  `),O(392,`c-col`,0),ye(393,`
    `),O(394,`c-card`,2),ye(395,`
      `),O(396,`c-card-header`),ye(397,`
        `),O(398,`strong`),ye(399,`Angular Button Group`),F(),ye(400,` `),O(401,`span`),ye(402,`Nesting`),F(),ye(403,`
      `),F(),ye(404,`
      `),O(405,`c-card-body`),ye(406,`
        `),O(407,`p`,45),ye(408,`
          Put a `),O(409,`code`),ye(410,`<c-button-group>`),F(),ye(411,` inside another
          `),O(412,`code`),ye(413,`<c-button-group>`),F(),ye(414,` when you need dropdown menus combined with a series
          of buttons.
        `),F(),ye(415,`
        `),O(416,`app-docs-example`,46),ye(417,`
          `),O(418,`c-button-group`,47),ye(419,`
            `),O(420,`button`,5),ye(421,`1`),F(),ye(422,`
            `),O(423,`button`,5),ye(424,`2`),F(),ye(425,`
            `),O(426,`c-dropdown`,48),ye(427,`
              `),O(428,`button`,49),ye(429,`
                Dropdown
              `),F(),ye(430,`
              `),O(431,`ul`,50),ye(432,`
                `),O(433,`li`)(434,`a`,51),ye(435,`Action`),F()(),ye(436,`
                `),O(437,`li`)(438,`a`,51),ye(439,`Another action`),F()(),ye(440,`
                `),O(441,`li`)(442,`a`,51),ye(443,`Something else here`),F()(),ye(444,`
                `),Re(445,`li`,52),ye(446,`
                `),O(447,`li`)(448,`a`,51),ye(449,`Separated link`),F()(),ye(450,`
              `),F(),ye(451,`
            `),F(),ye(452,`
          `),F(),ye(453,`
        `),F(),ye(454,`
      `),F(),ye(455,`
    `),F(),ye(456,`
  `),F(),ye(457,`
  `),O(458,`c-col`,0),ye(459,`
    `),O(460,`c-card`,2),ye(461,`
      `),O(462,`c-card-header`),ye(463,`
        `),O(464,`strong`),ye(465,`Angular Button Group`),F(),ye(466,` `),O(467,`span`),ye(468,`Vertical variation`),F(),ye(469,`
      `),F(),ye(470,`
      `),O(471,`c-card-body`),ye(472,`
        `),O(473,`p`,45),ye(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),O(475,`strong`),ye(476,`Split button dropdowns are not supported here.`),F(),ye(477,`
        `),F(),ye(478,`
        `),O(479,`app-docs-example`,53),ye(480,`
          `),O(481,`c-button-group`,54),ye(482,`
            `),O(483,`button`,55),ye(484,`Button`),F(),ye(485,`
            `),O(486,`button`,55),ye(487,`Button`),F(),ye(488,`
            `),O(489,`button`,55),ye(490,`Button`),F(),ye(491,`
            `),O(492,`button`,55),ye(493,`Button`),F(),ye(494,`
            `),O(495,`button`,55),ye(496,`Button`),F(),ye(497,`
            `),O(498,`button`,55),ye(499,`Button`),F(),ye(500,`
            `),O(501,`button`,55),ye(502,`Button`),F(),ye(503,`
          `),F(),ye(504,`
          `),Re(505,`br`),ye(506,`
        `),F(),ye(507,`
        `),O(508,`app-docs-example`,53),ye(509,`
          `),O(510,`c-button-group`,54),ye(511,`
            `),O(512,`button`,5),ye(513,`Button`),F(),ye(514,`
            `),O(515,`button`,5),ye(516,`Button`),F(),ye(517,`
            `),O(518,`c-dropdown`,48),ye(519,`
              `),O(520,`button`,49),ye(521,`
                Dropdown
              `),F(),ye(522,`
              `),O(523,`ul`,50),ye(524,`
                `),O(525,`li`)(526,`a`,51),ye(527,`Action`),F()(),ye(528,`
                `),O(529,`li`)(530,`a`,51),ye(531,`Another action`),F()(),ye(532,`
                `),O(533,`li`)(534,`a`,51),ye(535,`Something else here`),F()(),ye(536,`
                `),Re(537,`li`,52),ye(538,`
                `),O(539,`li`)(540,`a`,51),ye(541,`Separated link`),F()(),ye(542,`
              `),F(),ye(543,`
            `),F(),ye(544,`
            `),O(545,`button`,5),ye(546,`Button`),F(),ye(547,`
            `),O(548,`button`,5),ye(549,`Button`),F(),ye(550,`
            `),O(551,`c-dropdown`,48),ye(552,`
              `),O(553,`button`,49),ye(554,`
                Dropdown
              `),F(),ye(555,`
              `),O(556,`ul`,50),ye(557,`
                `),O(558,`li`)(559,`a`,51),ye(560,`Action`),F()(),ye(561,`
                `),O(562,`li`)(563,`a`,51),ye(564,`Another action`),F()(),ye(565,`
                `),O(566,`li`)(567,`a`,51),ye(568,`Something else here`),F()(),ye(569,`
                `),Re(570,`li`,52),ye(571,`
                `),O(572,`li`)(573,`a`,51),ye(574,`Separated link`),F()(),ye(575,`
              `),F(),ye(576,`
            `),F(),ye(577,`
            `),O(578,`c-dropdown`,56),ye(579,`
              `),O(580,`button`,49),ye(581,`
                Dropdown
              `),F(),ye(582,`
              `),O(583,`ul`,57),ye(584,`
                `),O(585,`li`)(586,`a`,51),ye(587,`Action`),F()(),ye(588,`
                `),O(589,`li`)(590,`a`,51),ye(591,`Another action`),F()(),ye(592,`
                `),O(593,`li`)(594,`a`,51),ye(595,`Something else here`),F()(),ye(596,`
                `),Re(597,`li`,52),ye(598,`
                `),O(599,`li`)(600,`a`,51),ye(601,`Separated link`),F()(),ye(602,`
              `),F(),ye(603,`
            `),F(),ye(604,`
            `),O(605,`c-dropdown`,48),ye(606,`
              `),O(607,`button`,49),ye(608,`
                Dropdown
              `),F(),ye(609,`
              `),O(610,`ul`,50),ye(611,`
                `),O(612,`li`)(613,`a`,51),ye(614,`Action`),F()(),ye(615,`
                `),O(616,`li`)(617,`a`,51),ye(618,`Another action`),F()(),ye(619,`
                `),O(620,`li`)(621,`a`,51),ye(622,`Something else here`),F()(),ye(623,`
                `),Re(624,`li`,52),ye(625,`
                `),O(626,`li`)(627,`a`,51),ye(628,`Separated link`),F()(),ye(629,`
              `),F(),ye(630,`
            `),F(),ye(631,`
          `),F(),ye(632,`
        `),F(),ye(633,`
        `),O(634,`app-docs-example`,53),ye(635,`
          `),O(636,`form`,17),ye(637,`
            `),O(638,`c-button-group`,54),ye(639,`
              `),O(640,`input`,25),dk(),F(),ye(641,`
              `),O(642,`label`,58),le(`click`,function(){return a.setRadioValue(`Radio1`)}),ye(643,`Radio 1`),F(),ye(644,`

              `),O(645,`input`,26),dk(),F(),ye(646,`
              `),O(647,`label`,58),le(`click`,function(){return a.setRadioValue(`Radio2`)}),ye(648,`Radio 2`),F(),ye(649,`

              `),O(650,`input`,27),dk(),F(),ye(651,`
              `),O(652,`label`,58),le(`click`,function(){return a.setRadioValue(`Radio3`)}),ye(653,`Radio
                3`),F(),ye(654,`
            `),F(),ye(655,`
          `),F(),ye(656,`
        `),F(),ye(657,`
      `),F(),ye(658,`
    `),F(),ye(659,`
  `),F(),ye(660,`
`),F()),s&2&&(S(53),V(`active`,!0)(`routerLink`,un(30,l)),S(3),V(`routerLink`,un(31,l)),S(3),V(`routerLink`,un(32,l)),S(94),V(`formGroup`,a.formCheck1),S(4),pk(),S(5),pk(),S(5),pk(),S(12),V(`formGroup`,a.formRadio1),S(4),pk(),S(5),pk(),S(5),pk(),S(241),V(`routerLink`,un(33,l)),S(4),V(`routerLink`,un(34,l)),S(4),V(`routerLink`,un(35,l)),S(6),V(`routerLink`,un(36,l)),S(33),V(`vertical`,!0),S(29),V(`vertical`,!0),S(16),V(`routerLink`,un(37,l)),S(4),V(`routerLink`,un(38,l)),S(4),V(`routerLink`,un(39,l)),S(6),V(`routerLink`,un(40,l)),S(19),V(`routerLink`,un(41,l)),S(4),V(`routerLink`,un(42,l)),S(4),V(`routerLink`,un(43,l)),S(6),V(`routerLink`,un(44,l)),S(13),V(`routerLink`,un(45,l)),S(4),V(`routerLink`,un(46,l)),S(4),V(`routerLink`,un(47,l)),S(6),V(`routerLink`,un(48,l)),S(13),V(`routerLink`,un(49,l)),S(4),V(`routerLink`,un(50,l)),S(4),V(`routerLink`,un(51,l)),S(6),V(`routerLink`,un(52,l)),S(9),V(`formGroup`,a.formRadio1),S(2),V(`vertical`,!0),S(2),pk(),S(5),pk(),S(5),pk())},dependencies:[Roe,nH,Pa,VV,La,E,eoe,FV,Zi,WX,$X,sT,jB,Ij,LX,BX,yj,wj,IN,toe,Noe,Aoe,Ioe,FN,bN,ep,DN,voe,c],encapsulation:2})}};export{X as ButtonGroupsComponent};