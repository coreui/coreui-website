import{$t as V,A as F,At as QN,Bi as uJ,D as E,Hr as ke,J as IT,L as Goe,Lr as ja,Pn as _,T as Dse,U as Hk,Vr as k,Xn as cA,Yi as vH,Yt as Uk,Zn as cJ,Zr as nV,_ as Cse,d as Ba,fa as ye,fn as Xi,gr as fn,hr as fe,ht as Mse,it as KN,ji as sJ,li as p,mi as pse,pn as Xj,q as IH,qr as lse,qt as UH,sr as dp,st as Kj,ti as oJ,ui as pJ,wr as gj,xr as gJ,ya as zoe,yn as YN,zn as aJ}from"./main-LLRB5LYM.js";import{t as E$1}from"./chunk-eqjpOFdh.js";import{t as c}from"./chunk-Dzn1Wg-Q.js";var l=()=>[];var X=class S{constructor(){this.formBuilder=p(pJ);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new aJ({radio1:new cJ(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,a=this.formCheck1.value;a[p]=!s,this.formCheck1.setValue(a)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||S)}}static{this.ɵcmp=E({type:S,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,a){s&1&&(k(0,`c-row`),ye(1,`
  `),k(2,`c-col`,0),ye(3,`
    `),ke(4,`app-docs-components`,1),ye(5,`
    `),k(6,`c-card`,2),ye(7,`
      `),k(8,`c-card-header`),ye(9,`
        `),k(10,`strong`),ye(11,`Angular Button Group`),F(),ye(12,` `),k(13,`span`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),k(17,`c-card-body`),ye(18,`
        `),k(19,`p`),ye(20,`
          Wrap a series of `),k(21,`code`),ye(22,`<CButton>`),F(),ye(23,` components in
          `),k(24,`code`),ye(25,`<c-button-group>`),F(),ye(26,`.
        `),F(),ye(27,`
        `),k(28,`app-docs-example`,3),ye(29,`
          `),k(30,`c-button-group`,4),ye(31,`
            `),k(32,`button`,5),ye(33,`Left`),F(),ye(34,`
            `),k(35,`button`,5),ye(36,`Middle`),F(),ye(37,`
            `),k(38,`button`,5),ye(39,`Right`),F(),ye(40,`
          `),F(),ye(41,`
        `),F(),ye(42,`
        `),k(43,`p`),ye(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),k(45,`code`),ye(46,`<CNav>`),F(),ye(47,` components.
        `),F(),ye(48,`
        `),k(49,`app-docs-example`,3),ye(50,`
          `),k(51,`c-button-group`),ye(52,`
            `),k(53,`a`,6),ye(54,`
              Active link
            `),F(),ye(55,`
            `),k(56,`a`,7),ye(57,`
              Link
            `),F(),ye(58,`
            `),k(59,`a`,7),ye(60,`
              Link
            `),F(),ye(61,`
          `),F(),ye(62,`
        `),F(),ye(63,`
      `),F(),ye(64,`
    `),F(),ye(65,`
  `),F(),ye(66,`
  `),k(67,`c-col`,0),ye(68,`
    `),k(69,`c-card`,2),ye(70,`
      `),k(71,`c-card-header`),ye(72,`
        `),k(73,`strong`),ye(74,`Angular Button Group`),F(),ye(75,` `),k(76,`span`),ye(77,`Mixed styles`),F(),ye(78,`
      `),F(),ye(79,`
      `),k(80,`c-card-body`),ye(81,`
        `),k(82,`app-docs-example`,8),ye(83,`
          `),k(84,`c-button-group`,9),ye(85,`
            `),k(86,`button`,10),ye(87,`Left`),F(),ye(88,`
            `),k(89,`button`,11),ye(90,`Middle`),F(),ye(91,`
            `),k(92,`button`,12),ye(93,`Right`),F(),ye(94,`
          `),F(),ye(95,`
        `),F(),ye(96,`
      `),F(),ye(97,`
    `),F(),ye(98,`
  `),F(),ye(99,`
  `),k(100,`c-col`,0),ye(101,`
    `),k(102,`c-card`,2),ye(103,`
      `),k(104,`c-card-header`),ye(105,`
        `),k(106,`strong`),ye(107,`Angular Button Group`),F(),ye(108,` `),k(109,`span`),ye(110,`Outlined styles`),F(),ye(111,`
      `),F(),ye(112,`
      `),k(113,`c-card-body`),ye(114,`
        `),k(115,`app-docs-example`,13),ye(116,`
          `),k(117,`c-button-group`,14),ye(118,`
            `),k(119,`button`,15),ye(120,`
              Left
            `),F(),ye(121,`
            `),k(122,`button`,15),ye(123,`
              Middle
            `),F(),ye(124,`
            `),k(125,`button`,15),ye(126,`
              Right
            `),F(),ye(127,`
          `),F(),ye(128,`
        `),F(),ye(129,`
      `),F(),ye(130,`
    `),F(),ye(131,`
  `),F(),ye(132,`
  `),k(133,`c-col`,0),ye(134,`
    `),k(135,`c-card`,2),ye(136,`
      `),k(137,`c-card-header`),ye(138,`
        `),k(139,`strong`),ye(140,`Angular Button Group`),F(),ye(141,` `),k(142,`span`),ye(143,`Checkbox and radio button groups`),F(),ye(144,`
      `),F(),ye(145,`
      `),k(146,`c-card-body`),ye(147,`
        `),k(148,`p`),ye(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),F(),ye(150,`
        `),k(151,`app-docs-example`,16),ye(152,`
          `),k(153,`form`,17),ye(154,`
            `),k(155,`c-button-group`,18),ye(156,`
              `),k(157,`input`,19),Hk(),F(),ye(158,`
              `),k(159,`label`,20),fe(`click`,function(){return a.setCheckBoxValue(`checkbox1`)}),ye(160,`Checkbox 1`),F(),ye(161,`

              `),k(162,`input`,21),Hk(),F(),ye(163,`
              `),k(164,`label`,20),fe(`click`,function(){return a.setCheckBoxValue(`checkbox2`)}),ye(165,`Checkbox 2`),F(),ye(166,`

              `),k(167,`input`,22),Hk(),F(),ye(168,`
              `),k(169,`label`,20),fe(`click`,function(){return a.setCheckBoxValue(`checkbox3`)}),ye(170,`Checkbox
                3`),F(),ye(171,`
            `),F(),ye(172,`
          `),F(),ye(173,`
          `),ke(174,`br`,23),ye(175,`
        `),F(),ye(176,`
        `),k(177,`app-docs-example`,16),ye(178,`
          `),k(179,`form`,17),ye(180,`
            `),k(181,`c-button-group`,24),ye(182,`
              `),k(183,`input`,25),Hk(),F(),ye(184,`
              `),k(185,`label`,20),fe(`click`,function(){return a.setRadioValue(`Radio1`)}),ye(186,`Radio 1`),F(),ye(187,`

              `),k(188,`input`,26),Hk(),F(),ye(189,`
              `),k(190,`label`,20),fe(`click`,function(){return a.setRadioValue(`Radio2`)}),ye(191,`Radio 2`),F(),ye(192,`

              `),k(193,`input`,27),Hk(),F(),ye(194,`
              `),k(195,`label`,20),fe(`click`,function(){return a.setRadioValue(`Radio3`)}),ye(196,`Radio 3`),F(),ye(197,`
            `),F(),ye(198,`
          `),F(),ye(199,`
        `),F(),ye(200,`
      `),F(),ye(201,`
    `),F(),ye(202,`
  `),F(),ye(203,`
  `),k(204,`c-col`,0),ye(205,`
    `),k(206,`c-card`,2),ye(207,`
      `),k(208,`c-card-header`),ye(209,`
        `),k(210,`strong`),ye(211,`Angular Button Group`),F(),ye(212,` `),k(213,`span`),ye(214,`Button toolbar`),F(),ye(215,`
      `),F(),ye(216,`
      `),k(217,`c-card-body`),ye(218,`
        `),k(219,`p`),ye(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),F(),ye(221,`
        `),k(222,`app-docs-example`,28),ye(223,`
          `),k(224,`c-button-toolbar`,29),ye(225,`
            `),k(226,`c-button-group`,30),ye(227,`
              `),k(228,`button`,5),ye(229,`1`),F(),ye(230,`
              `),k(231,`button`,5),ye(232,`2`),F(),ye(233,`
              `),k(234,`button`,5),ye(235,`3`),F(),ye(236,`
              `),k(237,`button`,5),ye(238,`4`),F(),ye(239,`
            `),F(),ye(240,`
            `),k(241,`c-button-group`,31),ye(242,`
              `),k(243,`button`,32),ye(244,`5`),F(),ye(245,`
              `),k(246,`button`,32),ye(247,`6`),F(),ye(248,`
              `),k(249,`button`,32),ye(250,`7`),F(),ye(251,`
            `),F(),ye(252,`
            `),k(253,`c-button-group`,33),ye(254,`
              `),k(255,`button`,34),ye(256,`8`),F(),ye(257,`
            `),F(),ye(258,`
          `),F(),ye(259,`
        `),F(),ye(260,`
        `),k(261,`p`),ye(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),F(),ye(263,`
        `),k(264,`app-docs-example`,28),ye(265,`
          `),k(266,`c-button-toolbar`,35),ye(267,`
            `),k(268,`c-button-group`,30),ye(269,`
              `),k(270,`button`,36),ye(271,`
                1
              `),F(),ye(272,`
              `),k(273,`button`,36),ye(274,`
                2
              `),F(),ye(275,`
              `),k(276,`button`,36),ye(277,`
                3
              `),F(),ye(278,`
              `),k(279,`button`,36),ye(280,`
                4
              `),F(),ye(281,`
            `),F(),ye(282,`
            `),k(283,`c-input-group`),ye(284,`
              `),k(285,`span`,37),ye(286,`@`),F(),ye(287,`
              `),ke(288,`input`,38),ye(289,`
            `),F(),ye(290,`
          `),F(),ye(291,`
          `),k(292,`c-button-toolbar`,39),ye(293,`
            `),k(294,`c-button-group`,30),ye(295,`
              `),k(296,`button`,36),ye(297,`
                1
              `),F(),ye(298,`
              `),k(299,`button`,36),ye(300,`
                2
              `),F(),ye(301,`
              `),k(302,`button`,36),ye(303,`
                3
              `),F(),ye(304,`
              `),k(305,`button`,36),ye(306,`
                4
              `),F(),ye(307,`
            `),F(),ye(308,`
            `),k(309,`c-input-group`),ye(310,`
              `),k(311,`span`,37),ye(312,`@`),F(),ye(313,`
              `),ke(314,`input`,38),ye(315,`
            `),F(),ye(316,`
          `),F(),ye(317,`
        `),F(),ye(318,`
      `),F(),ye(319,`
    `),F(),ye(320,`
  `),F(),ye(321,`
  `),k(322,`c-col`,0),ye(323,`
    `),k(324,`c-card`,2),ye(325,`
      `),k(326,`c-card-header`),ye(327,`
        `),k(328,`strong`),ye(329,`Angular Button Group`),F(),ye(330,` `),k(331,`span`),ye(332,`Sizing`),F(),ye(333,`
      `),F(),ye(334,`
      `),k(335,`c-card-body`),ye(336,`
        `),k(337,`p`),ye(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),k(339,`code`),ye(340,`size`),F(),ye(341,` property to all `),k(342,`code`),ye(343,`<c-button-group>`),F(),ye(344,`'s, including
          each one when nesting multiple groups.
        `),F(),ye(345,`
        `),k(346,`app-docs-example`,40),ye(347,`
          `),k(348,`c-button-group`,41),ye(349,`
            `),k(350,`button`,42),ye(351,`
              Left
            `),F(),ye(352,`
            `),k(353,`button`,42),ye(354,`
              Middle
            `),F(),ye(355,`
            `),k(356,`button`,42),ye(357,`
              Right
            `),F(),ye(358,`
          `),F(),ye(359,`
          `),ke(360,`br`),ye(361,`
          `),k(362,`c-button-group`,43),ye(363,`
            `),k(364,`button`,42),ye(365,`
              Left
            `),F(),ye(366,`
            `),k(367,`button`,42),ye(368,`
              Middle
            `),F(),ye(369,`
            `),k(370,`button`,42),ye(371,`
              Right
            `),F(),ye(372,`
          `),F(),ye(373,`
          `),ke(374,`br`),ye(375,`
          `),k(376,`c-button-group`,44),ye(377,`
            `),k(378,`button`,42),ye(379,`
              Left
            `),F(),ye(380,`
            `),k(381,`button`,42),ye(382,`
              Middle
            `),F(),ye(383,`
            `),k(384,`button`,42),ye(385,`
              Right
            `),F(),ye(386,`
          `),F(),ye(387,`
        `),F(),ye(388,`
      `),F(),ye(389,`
    `),F(),ye(390,`
  `),F(),ye(391,`
  `),k(392,`c-col`,0),ye(393,`
    `),k(394,`c-card`,2),ye(395,`
      `),k(396,`c-card-header`),ye(397,`
        `),k(398,`strong`),ye(399,`Angular Button Group`),F(),ye(400,` `),k(401,`span`),ye(402,`Nesting`),F(),ye(403,`
      `),F(),ye(404,`
      `),k(405,`c-card-body`),ye(406,`
        `),k(407,`p`,45),ye(408,`
          Put a `),k(409,`code`),ye(410,`<c-button-group>`),F(),ye(411,` inside another
          `),k(412,`code`),ye(413,`<c-button-group>`),F(),ye(414,` when you need dropdown menus combined with a series
          of buttons.
        `),F(),ye(415,`
        `),k(416,`app-docs-example`,46),ye(417,`
          `),k(418,`c-button-group`,47),ye(419,`
            `),k(420,`button`,5),ye(421,`1`),F(),ye(422,`
            `),k(423,`button`,5),ye(424,`2`),F(),ye(425,`
            `),k(426,`c-dropdown`,48),ye(427,`
              `),k(428,`button`,49),ye(429,`
                Dropdown
              `),F(),ye(430,`
              `),k(431,`ul`,50),ye(432,`
                `),k(433,`li`)(434,`a`,51),ye(435,`Action`),F()(),ye(436,`
                `),k(437,`li`)(438,`a`,51),ye(439,`Another action`),F()(),ye(440,`
                `),k(441,`li`)(442,`a`,51),ye(443,`Something else here`),F()(),ye(444,`
                `),ke(445,`li`,52),ye(446,`
                `),k(447,`li`)(448,`a`,51),ye(449,`Separated link`),F()(),ye(450,`
              `),F(),ye(451,`
            `),F(),ye(452,`
          `),F(),ye(453,`
        `),F(),ye(454,`
      `),F(),ye(455,`
    `),F(),ye(456,`
  `),F(),ye(457,`
  `),k(458,`c-col`,0),ye(459,`
    `),k(460,`c-card`,2),ye(461,`
      `),k(462,`c-card-header`),ye(463,`
        `),k(464,`strong`),ye(465,`Angular Button Group`),F(),ye(466,` `),k(467,`span`),ye(468,`Vertical variation`),F(),ye(469,`
      `),F(),ye(470,`
      `),k(471,`c-card-body`),ye(472,`
        `),k(473,`p`,45),ye(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),k(475,`strong`),ye(476,`Split button dropdowns are not supported here.`),F(),ye(477,`
        `),F(),ye(478,`
        `),k(479,`app-docs-example`,53),ye(480,`
          `),k(481,`c-button-group`,54),ye(482,`
            `),k(483,`button`,55),ye(484,`Button`),F(),ye(485,`
            `),k(486,`button`,55),ye(487,`Button`),F(),ye(488,`
            `),k(489,`button`,55),ye(490,`Button`),F(),ye(491,`
            `),k(492,`button`,55),ye(493,`Button`),F(),ye(494,`
            `),k(495,`button`,55),ye(496,`Button`),F(),ye(497,`
            `),k(498,`button`,55),ye(499,`Button`),F(),ye(500,`
            `),k(501,`button`,55),ye(502,`Button`),F(),ye(503,`
          `),F(),ye(504,`
          `),ke(505,`br`),ye(506,`
        `),F(),ye(507,`
        `),k(508,`app-docs-example`,53),ye(509,`
          `),k(510,`c-button-group`,54),ye(511,`
            `),k(512,`button`,5),ye(513,`Button`),F(),ye(514,`
            `),k(515,`button`,5),ye(516,`Button`),F(),ye(517,`
            `),k(518,`c-dropdown`,48),ye(519,`
              `),k(520,`button`,49),ye(521,`
                Dropdown
              `),F(),ye(522,`
              `),k(523,`ul`,50),ye(524,`
                `),k(525,`li`)(526,`a`,51),ye(527,`Action`),F()(),ye(528,`
                `),k(529,`li`)(530,`a`,51),ye(531,`Another action`),F()(),ye(532,`
                `),k(533,`li`)(534,`a`,51),ye(535,`Something else here`),F()(),ye(536,`
                `),ke(537,`li`,52),ye(538,`
                `),k(539,`li`)(540,`a`,51),ye(541,`Separated link`),F()(),ye(542,`
              `),F(),ye(543,`
            `),F(),ye(544,`
            `),k(545,`button`,5),ye(546,`Button`),F(),ye(547,`
            `),k(548,`button`,5),ye(549,`Button`),F(),ye(550,`
            `),k(551,`c-dropdown`,48),ye(552,`
              `),k(553,`button`,49),ye(554,`
                Dropdown
              `),F(),ye(555,`
              `),k(556,`ul`,50),ye(557,`
                `),k(558,`li`)(559,`a`,51),ye(560,`Action`),F()(),ye(561,`
                `),k(562,`li`)(563,`a`,51),ye(564,`Another action`),F()(),ye(565,`
                `),k(566,`li`)(567,`a`,51),ye(568,`Something else here`),F()(),ye(569,`
                `),ke(570,`li`,52),ye(571,`
                `),k(572,`li`)(573,`a`,51),ye(574,`Separated link`),F()(),ye(575,`
              `),F(),ye(576,`
            `),F(),ye(577,`
            `),k(578,`c-dropdown`,56),ye(579,`
              `),k(580,`button`,49),ye(581,`
                Dropdown
              `),F(),ye(582,`
              `),k(583,`ul`,57),ye(584,`
                `),k(585,`li`)(586,`a`,51),ye(587,`Action`),F()(),ye(588,`
                `),k(589,`li`)(590,`a`,51),ye(591,`Another action`),F()(),ye(592,`
                `),k(593,`li`)(594,`a`,51),ye(595,`Something else here`),F()(),ye(596,`
                `),ke(597,`li`,52),ye(598,`
                `),k(599,`li`)(600,`a`,51),ye(601,`Separated link`),F()(),ye(602,`
              `),F(),ye(603,`
            `),F(),ye(604,`
            `),k(605,`c-dropdown`,48),ye(606,`
              `),k(607,`button`,49),ye(608,`
                Dropdown
              `),F(),ye(609,`
              `),k(610,`ul`,50),ye(611,`
                `),k(612,`li`)(613,`a`,51),ye(614,`Action`),F()(),ye(615,`
                `),k(616,`li`)(617,`a`,51),ye(618,`Another action`),F()(),ye(619,`
                `),k(620,`li`)(621,`a`,51),ye(622,`Something else here`),F()(),ye(623,`
                `),ke(624,`li`,52),ye(625,`
                `),k(626,`li`)(627,`a`,51),ye(628,`Separated link`),F()(),ye(629,`
              `),F(),ye(630,`
            `),F(),ye(631,`
          `),F(),ye(632,`
        `),F(),ye(633,`
        `),k(634,`app-docs-example`,53),ye(635,`
          `),k(636,`form`,17),ye(637,`
            `),k(638,`c-button-group`,54),ye(639,`
              `),k(640,`input`,25),Hk(),F(),ye(641,`
              `),k(642,`label`,58),fe(`click`,function(){return a.setRadioValue(`Radio1`)}),ye(643,`Radio 1`),F(),ye(644,`

              `),k(645,`input`,26),Hk(),F(),ye(646,`
              `),k(647,`label`,58),fe(`click`,function(){return a.setRadioValue(`Radio2`)}),ye(648,`Radio 2`),F(),ye(649,`

              `),k(650,`input`,27),Hk(),F(),ye(651,`
              `),k(652,`label`,58),fe(`click`,function(){return a.setRadioValue(`Radio3`)}),ye(653,`Radio
                3`),F(),ye(654,`
            `),F(),ye(655,`
          `),F(),ye(656,`
        `),F(),ye(657,`
      `),F(),ye(658,`
    `),F(),ye(659,`
  `),F(),ye(660,`
`),F()),s&2&&(_(53),V(`active`,!0)(`routerLink`,fn(30,l)),_(3),V(`routerLink`,fn(31,l)),_(3),V(`routerLink`,fn(32,l)),_(94),V(`formGroup`,a.formCheck1),_(4),Uk(),_(5),Uk(),_(5),Uk(),_(12),V(`formGroup`,a.formRadio1),_(4),Uk(),_(5),Uk(),_(5),Uk(),_(241),V(`routerLink`,fn(33,l)),_(4),V(`routerLink`,fn(34,l)),_(4),V(`routerLink`,fn(35,l)),_(6),V(`routerLink`,fn(36,l)),_(33),V(`vertical`,!0),_(29),V(`vertical`,!0),_(16),V(`routerLink`,fn(37,l)),_(4),V(`routerLink`,fn(38,l)),_(4),V(`routerLink`,fn(39,l)),_(6),V(`routerLink`,fn(40,l)),_(19),V(`routerLink`,fn(41,l)),_(4),V(`routerLink`,fn(42,l)),_(4),V(`routerLink`,fn(43,l)),_(6),V(`routerLink`,fn(44,l)),_(13),V(`routerLink`,fn(45,l)),_(4),V(`routerLink`,fn(46,l)),_(4),V(`routerLink`,fn(47,l)),_(6),V(`routerLink`,fn(48,l)),_(13),V(`routerLink`,fn(49,l)),_(4),V(`routerLink`,fn(50,l)),_(4),V(`routerLink`,fn(51,l)),_(6),V(`routerLink`,fn(52,l)),_(9),V(`formGroup`,a.formRadio1),_(2),V(`vertical`,!0),_(2),Uk(),_(5),Uk(),_(5),Uk())},dependencies:[Mse,UH,Ba,IH,ja,E$1,zoe,vH,Xi,gJ,uJ,IT,gj,Xj,oJ,sJ,Kj,nV,YN,Goe,Cse,Dse,pse,cA,KN,dp,QN,lse,c],encapsulation:2})}};export{X as ButtonGroupsComponent};