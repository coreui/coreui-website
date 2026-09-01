import{C as Cw,Di as sN,Dt as P,M as Ef,Nn as _e,Pn as _te,Qi as wte,Si as rP,Vr as ke,Wn as be,X as I,Xn as bw,Yt as Ste,Zn as cN,_n as Xee,aa as xw,an as V,ar as dP,at as Jee,cn as Vi,da as yte,gi as pte,it as JL,jn as Zt,k as Dw,or as da,ut as L,v as C,vr as f,zi as ua}from"./main-JT3YLBAZ.js";import{t as E}from"./chunk-S_NItMQM.js";import{t as c}from"./chunk-BnIj8_pR.js";import{_ as on,a as Ln,d as Zn,h as gn,i as Hn,n as Bn,o as Mt,p as dn,r as Gn,s as Tn,u as Xe,v as qn}from"./chunk-EeLlsnFF.js";var l=()=>[];var X=class b{constructor(){this.formBuilder=f(qn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new Bn({radio1:new Hn(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=I({type:b,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular Button Group`),P(),be(12,` `),L(13,`span`),be(14,`Basic example`),P(),be(15,`
      `),P(),be(16,`
      `),L(17,`c-card-body`),be(18,`
        `),L(19,`p`),be(20,`
          Wrap a series of `),L(21,`code`),be(22,`<CButton>`),P(),be(23,` components in
          `),L(24,`code`),be(25,`<c-button-group>`),P(),be(26,`.
        `),P(),be(27,`
        `),L(28,`app-docs-example`,3),be(29,`
          `),L(30,`c-button-group`,4),be(31,`
            `),L(32,`button`,5),be(33,`Left`),P(),be(34,`
            `),L(35,`button`,5),be(36,`Middle`),P(),be(37,`
            `),L(38,`button`,5),be(39,`Right`),P(),be(40,`
          `),P(),be(41,`
        `),P(),be(42,`
        `),L(43,`p`),be(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),L(45,`code`),be(46,`<CNav>`),P(),be(47,` components.
        `),P(),be(48,`
        `),L(49,`app-docs-example`,3),be(50,`
          `),L(51,`c-button-group`),be(52,`
            `),L(53,`a`,6),be(54,`
              Active link
            `),P(),be(55,`
            `),L(56,`a`,7),be(57,`
              Link
            `),P(),be(58,`
            `),L(59,`a`,7),be(60,`
              Link
            `),P(),be(61,`
          `),P(),be(62,`
        `),P(),be(63,`
      `),P(),be(64,`
    `),P(),be(65,`
  `),P(),be(66,`
  `),L(67,`c-col`,0),be(68,`
    `),L(69,`c-card`,2),be(70,`
      `),L(71,`c-card-header`),be(72,`
        `),L(73,`strong`),be(74,`Angular Button Group`),P(),be(75,` `),L(76,`span`),be(77,`Mixed styles`),P(),be(78,`
      `),P(),be(79,`
      `),L(80,`c-card-body`),be(81,`
        `),L(82,`app-docs-example`,8),be(83,`
          `),L(84,`c-button-group`,9),be(85,`
            `),L(86,`button`,10),be(87,`Left`),P(),be(88,`
            `),L(89,`button`,11),be(90,`Middle`),P(),be(91,`
            `),L(92,`button`,12),be(93,`Right`),P(),be(94,`
          `),P(),be(95,`
        `),P(),be(96,`
      `),P(),be(97,`
    `),P(),be(98,`
  `),P(),be(99,`
  `),L(100,`c-col`,0),be(101,`
    `),L(102,`c-card`,2),be(103,`
      `),L(104,`c-card-header`),be(105,`
        `),L(106,`strong`),be(107,`Angular Button Group`),P(),be(108,` `),L(109,`span`),be(110,`Outlined styles`),P(),be(111,`
      `),P(),be(112,`
      `),L(113,`c-card-body`),be(114,`
        `),L(115,`app-docs-example`,13),be(116,`
          `),L(117,`c-button-group`,14),be(118,`
            `),L(119,`button`,15),be(120,`
              Left
            `),P(),be(121,`
            `),L(122,`button`,15),be(123,`
              Middle
            `),P(),be(124,`
            `),L(125,`button`,15),be(126,`
              Right
            `),P(),be(127,`
          `),P(),be(128,`
        `),P(),be(129,`
      `),P(),be(130,`
    `),P(),be(131,`
  `),P(),be(132,`
  `),L(133,`c-col`,0),be(134,`
    `),L(135,`c-card`,2),be(136,`
      `),L(137,`c-card-header`),be(138,`
        `),L(139,`strong`),be(140,`Angular Button Group`),P(),be(141,` `),L(142,`span`),be(143,`Checkbox and radio button groups`),P(),be(144,`
      `),P(),be(145,`
      `),L(146,`c-card-body`),be(147,`
        `),L(148,`p`),be(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),P(),be(150,`
        `),L(151,`app-docs-example`,16),be(152,`
          `),L(153,`form`,17),be(154,`
            `),L(155,`c-button-group`,18),be(156,`
              `),ke(157,`input`,19),sN(),be(158,`
              `),L(159,`label`,20),_e(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),be(160,`Checkbox 1`),P(),be(161,`

              `),ke(162,`input`,21),sN(),be(163,`
              `),L(164,`label`,20),_e(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),be(165,`Checkbox 2`),P(),be(166,`

              `),ke(167,`input`,22),sN(),be(168,`
              `),L(169,`label`,20),_e(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),be(170,`Checkbox
                3`),P(),be(171,`
            `),P(),be(172,`
          `),P(),be(173,`
          `),ke(174,`br`,23),be(175,`
        `),P(),be(176,`
        `),L(177,`app-docs-example`,16),be(178,`
          `),L(179,`form`,17),be(180,`
            `),L(181,`c-button-group`,24),be(182,`
              `),ke(183,`input`,25),sN(),be(184,`
              `),L(185,`label`,20),_e(`click`,function(){return m.setRadioValue(`Radio1`)}),be(186,`Radio 1`),P(),be(187,`

              `),ke(188,`input`,26),sN(),be(189,`
              `),L(190,`label`,20),_e(`click`,function(){return m.setRadioValue(`Radio2`)}),be(191,`Radio 2`),P(),be(192,`

              `),ke(193,`input`,27),sN(),be(194,`
              `),L(195,`label`,20),_e(`click`,function(){return m.setRadioValue(`Radio3`)}),be(196,`Radio 3`),P(),be(197,`
            `),P(),be(198,`
          `),P(),be(199,`
        `),P(),be(200,`
      `),P(),be(201,`
    `),P(),be(202,`
  `),P(),be(203,`
  `),L(204,`c-col`,0),be(205,`
    `),L(206,`c-card`,2),be(207,`
      `),L(208,`c-card-header`),be(209,`
        `),L(210,`strong`),be(211,`Angular Button Group`),P(),be(212,` `),L(213,`span`),be(214,`Button toolbar`),P(),be(215,`
      `),P(),be(216,`
      `),L(217,`c-card-body`),be(218,`
        `),L(219,`p`),be(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),P(),be(221,`
        `),L(222,`app-docs-example`,28),be(223,`
          `),L(224,`c-button-toolbar`,29),be(225,`
            `),L(226,`c-button-group`,30),be(227,`
              `),L(228,`button`,5),be(229,`1`),P(),be(230,`
              `),L(231,`button`,5),be(232,`2`),P(),be(233,`
              `),L(234,`button`,5),be(235,`3`),P(),be(236,`
              `),L(237,`button`,5),be(238,`4`),P(),be(239,`
            `),P(),be(240,`
            `),L(241,`c-button-group`,31),be(242,`
              `),L(243,`button`,32),be(244,`5`),P(),be(245,`
              `),L(246,`button`,32),be(247,`6`),P(),be(248,`
              `),L(249,`button`,32),be(250,`7`),P(),be(251,`
            `),P(),be(252,`
            `),L(253,`c-button-group`,33),be(254,`
              `),L(255,`button`,34),be(256,`8`),P(),be(257,`
            `),P(),be(258,`
          `),P(),be(259,`
        `),P(),be(260,`
        `),L(261,`p`),be(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),P(),be(263,`
        `),L(264,`app-docs-example`,28),be(265,`
          `),L(266,`c-button-toolbar`,35),be(267,`
            `),L(268,`c-button-group`,30),be(269,`
              `),L(270,`button`,36),be(271,`
                1
              `),P(),be(272,`
              `),L(273,`button`,36),be(274,`
                2
              `),P(),be(275,`
              `),L(276,`button`,36),be(277,`
                3
              `),P(),be(278,`
              `),L(279,`button`,36),be(280,`
                4
              `),P(),be(281,`
            `),P(),be(282,`
            `),L(283,`c-input-group`),be(284,`
              `),L(285,`span`,37),be(286,`@`),P(),be(287,`
              `),ke(288,`input`,38),be(289,`
            `),P(),be(290,`
          `),P(),be(291,`
          `),L(292,`c-button-toolbar`,39),be(293,`
            `),L(294,`c-button-group`,30),be(295,`
              `),L(296,`button`,36),be(297,`
                1
              `),P(),be(298,`
              `),L(299,`button`,36),be(300,`
                2
              `),P(),be(301,`
              `),L(302,`button`,36),be(303,`
                3
              `),P(),be(304,`
              `),L(305,`button`,36),be(306,`
                4
              `),P(),be(307,`
            `),P(),be(308,`
            `),L(309,`c-input-group`),be(310,`
              `),L(311,`span`,37),be(312,`@`),P(),be(313,`
              `),ke(314,`input`,38),be(315,`
            `),P(),be(316,`
          `),P(),be(317,`
        `),P(),be(318,`
      `),P(),be(319,`
    `),P(),be(320,`
  `),P(),be(321,`
  `),L(322,`c-col`,0),be(323,`
    `),L(324,`c-card`,2),be(325,`
      `),L(326,`c-card-header`),be(327,`
        `),L(328,`strong`),be(329,`Angular Button Group`),P(),be(330,` `),L(331,`span`),be(332,`Sizing`),P(),be(333,`
      `),P(),be(334,`
      `),L(335,`c-card-body`),be(336,`
        `),L(337,`p`),be(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),L(339,`code`),be(340,`size`),P(),be(341,` property to all `),L(342,`code`),be(343,`<c-button-group>`),P(),be(344,`'s, including
          each one when nesting multiple groups.
        `),P(),be(345,`
        `),L(346,`app-docs-example`,40),be(347,`
          `),L(348,`c-button-group`,41),be(349,`
            `),L(350,`button`,42),be(351,`
              Left
            `),P(),be(352,`
            `),L(353,`button`,42),be(354,`
              Middle
            `),P(),be(355,`
            `),L(356,`button`,42),be(357,`
              Right
            `),P(),be(358,`
          `),P(),be(359,`
          `),ke(360,`br`),be(361,`
          `),L(362,`c-button-group`,43),be(363,`
            `),L(364,`button`,42),be(365,`
              Left
            `),P(),be(366,`
            `),L(367,`button`,42),be(368,`
              Middle
            `),P(),be(369,`
            `),L(370,`button`,42),be(371,`
              Right
            `),P(),be(372,`
          `),P(),be(373,`
          `),ke(374,`br`),be(375,`
          `),L(376,`c-button-group`,44),be(377,`
            `),L(378,`button`,42),be(379,`
              Left
            `),P(),be(380,`
            `),L(381,`button`,42),be(382,`
              Middle
            `),P(),be(383,`
            `),L(384,`button`,42),be(385,`
              Right
            `),P(),be(386,`
          `),P(),be(387,`
        `),P(),be(388,`
      `),P(),be(389,`
    `),P(),be(390,`
  `),P(),be(391,`
  `),L(392,`c-col`,0),be(393,`
    `),L(394,`c-card`,2),be(395,`
      `),L(396,`c-card-header`),be(397,`
        `),L(398,`strong`),be(399,`Angular Button Group`),P(),be(400,` `),L(401,`span`),be(402,`Nesting`),P(),be(403,`
      `),P(),be(404,`
      `),L(405,`c-card-body`),be(406,`
        `),L(407,`p`,45),be(408,`
          Put a `),L(409,`code`),be(410,`<c-button-group>`),P(),be(411,` inside another
          `),L(412,`code`),be(413,`<c-button-group>`),P(),be(414,` when you need dropdown menus combined with a series
          of buttons.
        `),P(),be(415,`
        `),L(416,`app-docs-example`,46),be(417,`
          `),L(418,`c-button-group`,47),be(419,`
            `),L(420,`button`,5),be(421,`1`),P(),be(422,`
            `),L(423,`button`,5),be(424,`2`),P(),be(425,`
            `),L(426,`c-dropdown`,48),be(427,`
              `),L(428,`button`,49),be(429,`
                Dropdown
              `),P(),be(430,`
              `),L(431,`ul`,50),be(432,`
                `),L(433,`li`)(434,`a`,51),be(435,`Action`),P()(),be(436,`
                `),L(437,`li`)(438,`a`,51),be(439,`Another action`),P()(),be(440,`
                `),L(441,`li`)(442,`a`,51),be(443,`Something else here`),P()(),be(444,`
                `),ke(445,`li`,52),be(446,`
                `),L(447,`li`)(448,`a`,51),be(449,`Separated link`),P()(),be(450,`
              `),P(),be(451,`
            `),P(),be(452,`
          `),P(),be(453,`
        `),P(),be(454,`
      `),P(),be(455,`
    `),P(),be(456,`
  `),P(),be(457,`
  `),L(458,`c-col`,0),be(459,`
    `),L(460,`c-card`,2),be(461,`
      `),L(462,`c-card-header`),be(463,`
        `),L(464,`strong`),be(465,`Angular Button Group`),P(),be(466,` `),L(467,`span`),be(468,`Vertical variation`),P(),be(469,`
      `),P(),be(470,`
      `),L(471,`c-card-body`),be(472,`
        `),L(473,`p`,45),be(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),L(475,`strong`),be(476,`Split button dropdowns are not supported here.`),P(),be(477,`
        `),P(),be(478,`
        `),L(479,`app-docs-example`,53),be(480,`
          `),L(481,`c-button-group`,54),be(482,`
            `),L(483,`button`,55),be(484,`Button`),P(),be(485,`
            `),L(486,`button`,55),be(487,`Button`),P(),be(488,`
            `),L(489,`button`,55),be(490,`Button`),P(),be(491,`
            `),L(492,`button`,55),be(493,`Button`),P(),be(494,`
            `),L(495,`button`,55),be(496,`Button`),P(),be(497,`
            `),L(498,`button`,55),be(499,`Button`),P(),be(500,`
            `),L(501,`button`,55),be(502,`Button`),P(),be(503,`
          `),P(),be(504,`
          `),ke(505,`br`),be(506,`
        `),P(),be(507,`
        `),L(508,`app-docs-example`,53),be(509,`
          `),L(510,`c-button-group`,54),be(511,`
            `),L(512,`button`,5),be(513,`Button`),P(),be(514,`
            `),L(515,`button`,5),be(516,`Button`),P(),be(517,`
            `),L(518,`c-dropdown`,48),be(519,`
              `),L(520,`button`,49),be(521,`
                Dropdown
              `),P(),be(522,`
              `),L(523,`ul`,50),be(524,`
                `),L(525,`li`)(526,`a`,51),be(527,`Action`),P()(),be(528,`
                `),L(529,`li`)(530,`a`,51),be(531,`Another action`),P()(),be(532,`
                `),L(533,`li`)(534,`a`,51),be(535,`Something else here`),P()(),be(536,`
                `),ke(537,`li`,52),be(538,`
                `),L(539,`li`)(540,`a`,51),be(541,`Separated link`),P()(),be(542,`
              `),P(),be(543,`
            `),P(),be(544,`
            `),L(545,`button`,5),be(546,`Button`),P(),be(547,`
            `),L(548,`button`,5),be(549,`Button`),P(),be(550,`
            `),L(551,`c-dropdown`,48),be(552,`
              `),L(553,`button`,49),be(554,`
                Dropdown
              `),P(),be(555,`
              `),L(556,`ul`,50),be(557,`
                `),L(558,`li`)(559,`a`,51),be(560,`Action`),P()(),be(561,`
                `),L(562,`li`)(563,`a`,51),be(564,`Another action`),P()(),be(565,`
                `),L(566,`li`)(567,`a`,51),be(568,`Something else here`),P()(),be(569,`
                `),ke(570,`li`,52),be(571,`
                `),L(572,`li`)(573,`a`,51),be(574,`Separated link`),P()(),be(575,`
              `),P(),be(576,`
            `),P(),be(577,`
            `),L(578,`c-dropdown`,56),be(579,`
              `),L(580,`button`,49),be(581,`
                Dropdown
              `),P(),be(582,`
              `),L(583,`ul`,57),be(584,`
                `),L(585,`li`)(586,`a`,51),be(587,`Action`),P()(),be(588,`
                `),L(589,`li`)(590,`a`,51),be(591,`Another action`),P()(),be(592,`
                `),L(593,`li`)(594,`a`,51),be(595,`Something else here`),P()(),be(596,`
                `),ke(597,`li`,52),be(598,`
                `),L(599,`li`)(600,`a`,51),be(601,`Separated link`),P()(),be(602,`
              `),P(),be(603,`
            `),P(),be(604,`
            `),L(605,`c-dropdown`,48),be(606,`
              `),L(607,`button`,49),be(608,`
                Dropdown
              `),P(),be(609,`
              `),L(610,`ul`,50),be(611,`
                `),L(612,`li`)(613,`a`,51),be(614,`Action`),P()(),be(615,`
                `),L(616,`li`)(617,`a`,51),be(618,`Another action`),P()(),be(619,`
                `),L(620,`li`)(621,`a`,51),be(622,`Something else here`),P()(),be(623,`
                `),ke(624,`li`,52),be(625,`
                `),L(626,`li`)(627,`a`,51),be(628,`Separated link`),P()(),be(629,`
              `),P(),be(630,`
            `),P(),be(631,`
          `),P(),be(632,`
        `),P(),be(633,`
        `),L(634,`app-docs-example`,53),be(635,`
          `),L(636,`form`,17),be(637,`
            `),L(638,`c-button-group`,54),be(639,`
              `),ke(640,`input`,25),sN(),be(641,`
              `),L(642,`label`,58),_e(`click`,function(){return m.setRadioValue(`Radio1`)}),be(643,`Radio 1`),P(),be(644,`

              `),ke(645,`input`,26),sN(),be(646,`
              `),L(647,`label`,58),_e(`click`,function(){return m.setRadioValue(`Radio2`)}),be(648,`Radio 2`),P(),be(649,`

              `),ke(650,`input`,27),sN(),be(651,`
              `),L(652,`label`,58),_e(`click`,function(){return m.setRadioValue(`Radio3`)}),be(653,`Radio
                3`),P(),be(654,`
            `),P(),be(655,`
          `),P(),be(656,`
        `),P(),be(657,`
      `),P(),be(658,`
    `),P(),be(659,`
  `),P(),be(660,`
`),P()),s&2&&(C(53),V(`active`,!0)(`routerLink`,Zt(30,l)),C(3),V(`routerLink`,Zt(31,l)),C(3),V(`routerLink`,Zt(32,l)),C(94),V(`formGroup`,m.formCheck1),C(4),cN(),C(5),cN(),C(5),cN(),C(12),V(`formGroup`,m.formRadio1),C(4),cN(),C(5),cN(),C(5),cN(),C(241),V(`routerLink`,Zt(33,l)),C(4),V(`routerLink`,Zt(34,l)),C(4),V(`routerLink`,Zt(35,l)),C(6),V(`routerLink`,Zt(36,l)),C(33),V(`vertical`,!0),C(29),V(`vertical`,!0),C(16),V(`routerLink`,Zt(37,l)),C(4),V(`routerLink`,Zt(38,l)),C(4),V(`routerLink`,Zt(39,l)),C(6),V(`routerLink`,Zt(40,l)),C(19),V(`routerLink`,Zt(41,l)),C(4),V(`routerLink`,Zt(42,l)),C(4),V(`routerLink`,Zt(43,l)),C(6),V(`routerLink`,Zt(44,l)),C(13),V(`routerLink`,Zt(45,l)),C(4),V(`routerLink`,Zt(46,l)),C(4),V(`routerLink`,Zt(47,l)),C(6),V(`routerLink`,Zt(48,l)),C(13),V(`routerLink`,Zt(49,l)),C(4),V(`routerLink`,Zt(50,l)),C(4),V(`routerLink`,Zt(51,l)),C(6),V(`routerLink`,Zt(52,l)),C(9),V(`formGroup`,m.formRadio1),C(2),V(`vertical`,!0),C(2),cN(),C(5),cN(),C(5),cN())},dependencies:[Ste,dP,ua,rP,da,E,Xee,JL,Vi,Zn,Ln,Xe,Mt,dn,Tn,Gn,on,gn,Cw,Jee,wte,_te,yte,xw,bw,Ef,Dw,pte,c],encapsulation:2})}};export{X as ButtonGroupsComponent};