import{Hr as ow,Ii as zw,In as b,Ir as nm,Rr as nu,Yr as rC,_i as vD,mr as iw,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{B as JS,Bt as YN,D as G2,H as Jn,I as Ii,K as Kv,Ln as pF,Pt as Ws,S as Ds,Ut as ZN,Vn as qN,Wt as Zt,Xn as si,Yt as bm,_t as Ro,ar as vF,et as N2,ir as ux,mn as hF,mr as xr,nt as Nb,pr as xn,pt as QN,st as On,ur as wr,ut as Po,wn as ko,wt as Tm,x as Dr,zn as q2}from"./main-4THZKH4L.js";import{t as I}from"./chunk-BvSpgkG7.js";import"./chunk-BEWTkpuw.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-CzmqzJbh.js";var l=()=>[];var X=class b$1{constructor(){this.formBuilder=b(ZN);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new qN({radio1:new YN(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b$1)}}static{this.ɵcmp=zw({type:b$1,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular Button Group`),nu(),Wb(12,` `),rs(13,`span`),Wb(14,`Basic example`),nu(),Wb(15,`
      `),nu(),Wb(16,`
      `),rs(17,`c-card-body`),Wb(18,`
        `),rs(19,`p`),Wb(20,`
          Wrap a series of `),rs(21,`code`),Wb(22,`<CButton>`),nu(),Wb(23,` components in
          `),rs(24,`code`),Wb(25,`<c-button-group>`),nu(),Wb(26,`.
        `),nu(),Wb(27,`
        `),rs(28,`app-docs-example`,3),Wb(29,`
          `),rs(30,`c-button-group`,4),Wb(31,`
            `),rs(32,`button`,5),Wb(33,`Left`),nu(),Wb(34,`
            `),rs(35,`button`,5),Wb(36,`Middle`),nu(),Wb(37,`
            `),rs(38,`button`,5),Wb(39,`Right`),nu(),Wb(40,`
          `),nu(),Wb(41,`
        `),nu(),Wb(42,`
        `),rs(43,`p`),Wb(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),rs(45,`code`),Wb(46,`<CNav>`),nu(),Wb(47,` components.
        `),nu(),Wb(48,`
        `),rs(49,`app-docs-example`,3),Wb(50,`
          `),rs(51,`c-button-group`),Wb(52,`
            `),rs(53,`a`,6),Wb(54,`
              Active link
            `),nu(),Wb(55,`
            `),rs(56,`a`,7),Wb(57,`
              Link
            `),nu(),Wb(58,`
            `),rs(59,`a`,7),Wb(60,`
              Link
            `),nu(),Wb(61,`
          `),nu(),Wb(62,`
        `),nu(),Wb(63,`
      `),nu(),Wb(64,`
    `),nu(),Wb(65,`
  `),nu(),Wb(66,`
  `),rs(67,`c-col`,0),Wb(68,`
    `),rs(69,`c-card`,2),Wb(70,`
      `),rs(71,`c-card-header`),Wb(72,`
        `),rs(73,`strong`),Wb(74,`Angular Button Group`),nu(),Wb(75,` `),rs(76,`span`),Wb(77,`Mixed styles`),nu(),Wb(78,`
      `),nu(),Wb(79,`
      `),rs(80,`c-card-body`),Wb(81,`
        `),rs(82,`app-docs-example`,8),Wb(83,`
          `),rs(84,`c-button-group`,9),Wb(85,`
            `),rs(86,`button`,10),Wb(87,`Left`),nu(),Wb(88,`
            `),rs(89,`button`,11),Wb(90,`Middle`),nu(),Wb(91,`
            `),rs(92,`button`,12),Wb(93,`Right`),nu(),Wb(94,`
          `),nu(),Wb(95,`
        `),nu(),Wb(96,`
      `),nu(),Wb(97,`
    `),nu(),Wb(98,`
  `),nu(),Wb(99,`
  `),rs(100,`c-col`,0),Wb(101,`
    `),rs(102,`c-card`,2),Wb(103,`
      `),rs(104,`c-card-header`),Wb(105,`
        `),rs(106,`strong`),Wb(107,`Angular Button Group`),nu(),Wb(108,` `),rs(109,`span`),Wb(110,`Outlined styles`),nu(),Wb(111,`
      `),nu(),Wb(112,`
      `),rs(113,`c-card-body`),Wb(114,`
        `),rs(115,`app-docs-example`,13),Wb(116,`
          `),rs(117,`c-button-group`,14),Wb(118,`
            `),rs(119,`button`,15),Wb(120,`
              Left
            `),nu(),Wb(121,`
            `),rs(122,`button`,15),Wb(123,`
              Middle
            `),nu(),Wb(124,`
            `),rs(125,`button`,15),Wb(126,`
              Right
            `),nu(),Wb(127,`
          `),nu(),Wb(128,`
        `),nu(),Wb(129,`
      `),nu(),Wb(130,`
    `),nu(),Wb(131,`
  `),nu(),Wb(132,`
  `),rs(133,`c-col`,0),Wb(134,`
    `),rs(135,`c-card`,2),Wb(136,`
      `),rs(137,`c-card-header`),Wb(138,`
        `),rs(139,`strong`),Wb(140,`Angular Button Group`),nu(),Wb(141,` `),rs(142,`span`),Wb(143,`Checkbox and radio button groups`),nu(),Wb(144,`
      `),nu(),Wb(145,`
      `),rs(146,`c-card-body`),Wb(147,`
        `),rs(148,`p`),Wb(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),nu(),Wb(150,`
        `),rs(151,`app-docs-example`,16),Wb(152,`
          `),rs(153,`form`,17),Wb(154,`
            `),rs(155,`c-button-group`,18),Wb(156,`
              `),qg(157,`input`,19),ow(),Wb(158,`
              `),rs(159,`label`,20),nm(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),Wb(160,`Checkbox 1`),nu(),Wb(161,`

              `),qg(162,`input`,21),ow(),Wb(163,`
              `),rs(164,`label`,20),nm(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),Wb(165,`Checkbox 2`),nu(),Wb(166,`

              `),qg(167,`input`,22),ow(),Wb(168,`
              `),rs(169,`label`,20),nm(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),Wb(170,`Checkbox
                3`),nu(),Wb(171,`
            `),nu(),Wb(172,`
          `),nu(),Wb(173,`
          `),qg(174,`br`,23),Wb(175,`
        `),nu(),Wb(176,`
        `),rs(177,`app-docs-example`,16),Wb(178,`
          `),rs(179,`form`,17),Wb(180,`
            `),rs(181,`c-button-group`,24),Wb(182,`
              `),qg(183,`input`,25),ow(),Wb(184,`
              `),rs(185,`label`,20),nm(`click`,function(){return m.setRadioValue(`Radio1`)}),Wb(186,`Radio 1`),nu(),Wb(187,`

              `),qg(188,`input`,26),ow(),Wb(189,`
              `),rs(190,`label`,20),nm(`click`,function(){return m.setRadioValue(`Radio2`)}),Wb(191,`Radio 2`),nu(),Wb(192,`

              `),qg(193,`input`,27),ow(),Wb(194,`
              `),rs(195,`label`,20),nm(`click`,function(){return m.setRadioValue(`Radio3`)}),Wb(196,`Radio 3`),nu(),Wb(197,`
            `),nu(),Wb(198,`
          `),nu(),Wb(199,`
        `),nu(),Wb(200,`
      `),nu(),Wb(201,`
    `),nu(),Wb(202,`
  `),nu(),Wb(203,`
  `),rs(204,`c-col`,0),Wb(205,`
    `),rs(206,`c-card`,2),Wb(207,`
      `),rs(208,`c-card-header`),Wb(209,`
        `),rs(210,`strong`),Wb(211,`Angular Button Group`),nu(),Wb(212,` `),rs(213,`span`),Wb(214,`Button toolbar`),nu(),Wb(215,`
      `),nu(),Wb(216,`
      `),rs(217,`c-card-body`),Wb(218,`
        `),rs(219,`p`),Wb(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),nu(),Wb(221,`
        `),rs(222,`app-docs-example`,28),Wb(223,`
          `),rs(224,`c-button-toolbar`,29),Wb(225,`
            `),rs(226,`c-button-group`,30),Wb(227,`
              `),rs(228,`button`,5),Wb(229,`1`),nu(),Wb(230,`
              `),rs(231,`button`,5),Wb(232,`2`),nu(),Wb(233,`
              `),rs(234,`button`,5),Wb(235,`3`),nu(),Wb(236,`
              `),rs(237,`button`,5),Wb(238,`4`),nu(),Wb(239,`
            `),nu(),Wb(240,`
            `),rs(241,`c-button-group`,31),Wb(242,`
              `),rs(243,`button`,32),Wb(244,`5`),nu(),Wb(245,`
              `),rs(246,`button`,32),Wb(247,`6`),nu(),Wb(248,`
              `),rs(249,`button`,32),Wb(250,`7`),nu(),Wb(251,`
            `),nu(),Wb(252,`
            `),rs(253,`c-button-group`,33),Wb(254,`
              `),rs(255,`button`,34),Wb(256,`8`),nu(),Wb(257,`
            `),nu(),Wb(258,`
          `),nu(),Wb(259,`
        `),nu(),Wb(260,`
        `),rs(261,`p`),Wb(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),nu(),Wb(263,`
        `),rs(264,`app-docs-example`,28),Wb(265,`
          `),rs(266,`c-button-toolbar`,35),Wb(267,`
            `),rs(268,`c-button-group`,30),Wb(269,`
              `),rs(270,`button`,36),Wb(271,`
                1
              `),nu(),Wb(272,`
              `),rs(273,`button`,36),Wb(274,`
                2
              `),nu(),Wb(275,`
              `),rs(276,`button`,36),Wb(277,`
                3
              `),nu(),Wb(278,`
              `),rs(279,`button`,36),Wb(280,`
                4
              `),nu(),Wb(281,`
            `),nu(),Wb(282,`
            `),rs(283,`c-input-group`),Wb(284,`
              `),rs(285,`span`,37),Wb(286,`@`),nu(),Wb(287,`
              `),qg(288,`input`,38),Wb(289,`
            `),nu(),Wb(290,`
          `),nu(),Wb(291,`
          `),rs(292,`c-button-toolbar`,39),Wb(293,`
            `),rs(294,`c-button-group`,30),Wb(295,`
              `),rs(296,`button`,36),Wb(297,`
                1
              `),nu(),Wb(298,`
              `),rs(299,`button`,36),Wb(300,`
                2
              `),nu(),Wb(301,`
              `),rs(302,`button`,36),Wb(303,`
                3
              `),nu(),Wb(304,`
              `),rs(305,`button`,36),Wb(306,`
                4
              `),nu(),Wb(307,`
            `),nu(),Wb(308,`
            `),rs(309,`c-input-group`),Wb(310,`
              `),rs(311,`span`,37),Wb(312,`@`),nu(),Wb(313,`
              `),qg(314,`input`,38),Wb(315,`
            `),nu(),Wb(316,`
          `),nu(),Wb(317,`
        `),nu(),Wb(318,`
      `),nu(),Wb(319,`
    `),nu(),Wb(320,`
  `),nu(),Wb(321,`
  `),rs(322,`c-col`,0),Wb(323,`
    `),rs(324,`c-card`,2),Wb(325,`
      `),rs(326,`c-card-header`),Wb(327,`
        `),rs(328,`strong`),Wb(329,`Angular Button Group`),nu(),Wb(330,` `),rs(331,`span`),Wb(332,`Sizing`),nu(),Wb(333,`
      `),nu(),Wb(334,`
      `),rs(335,`c-card-body`),Wb(336,`
        `),rs(337,`p`),Wb(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),rs(339,`code`),Wb(340,`size`),nu(),Wb(341,` property to all `),rs(342,`code`),Wb(343,`<c-button-group>`),nu(),Wb(344,`'s, including
          each one when nesting multiple groups.
        `),nu(),Wb(345,`
        `),rs(346,`app-docs-example`,40),Wb(347,`
          `),rs(348,`c-button-group`,41),Wb(349,`
            `),rs(350,`button`,42),Wb(351,`
              Left
            `),nu(),Wb(352,`
            `),rs(353,`button`,42),Wb(354,`
              Middle
            `),nu(),Wb(355,`
            `),rs(356,`button`,42),Wb(357,`
              Right
            `),nu(),Wb(358,`
          `),nu(),Wb(359,`
          `),qg(360,`br`),Wb(361,`
          `),rs(362,`c-button-group`,43),Wb(363,`
            `),rs(364,`button`,42),Wb(365,`
              Left
            `),nu(),Wb(366,`
            `),rs(367,`button`,42),Wb(368,`
              Middle
            `),nu(),Wb(369,`
            `),rs(370,`button`,42),Wb(371,`
              Right
            `),nu(),Wb(372,`
          `),nu(),Wb(373,`
          `),qg(374,`br`),Wb(375,`
          `),rs(376,`c-button-group`,44),Wb(377,`
            `),rs(378,`button`,42),Wb(379,`
              Left
            `),nu(),Wb(380,`
            `),rs(381,`button`,42),Wb(382,`
              Middle
            `),nu(),Wb(383,`
            `),rs(384,`button`,42),Wb(385,`
              Right
            `),nu(),Wb(386,`
          `),nu(),Wb(387,`
        `),nu(),Wb(388,`
      `),nu(),Wb(389,`
    `),nu(),Wb(390,`
  `),nu(),Wb(391,`
  `),rs(392,`c-col`,0),Wb(393,`
    `),rs(394,`c-card`,2),Wb(395,`
      `),rs(396,`c-card-header`),Wb(397,`
        `),rs(398,`strong`),Wb(399,`Angular Button Group`),nu(),Wb(400,` `),rs(401,`span`),Wb(402,`Nesting`),nu(),Wb(403,`
      `),nu(),Wb(404,`
      `),rs(405,`c-card-body`),Wb(406,`
        `),rs(407,`p`,45),Wb(408,`
          Put a `),rs(409,`code`),Wb(410,`<c-button-group>`),nu(),Wb(411,` inside another
          `),rs(412,`code`),Wb(413,`<c-button-group>`),nu(),Wb(414,` when you need dropdown menus combined with a series
          of buttons.
        `),nu(),Wb(415,`
        `),rs(416,`app-docs-example`,46),Wb(417,`
          `),rs(418,`c-button-group`,47),Wb(419,`
            `),rs(420,`button`,5),Wb(421,`1`),nu(),Wb(422,`
            `),rs(423,`button`,5),Wb(424,`2`),nu(),Wb(425,`
            `),rs(426,`c-dropdown`,48),Wb(427,`
              `),rs(428,`button`,49),Wb(429,`
                Dropdown
              `),nu(),Wb(430,`
              `),rs(431,`ul`,50),Wb(432,`
                `),rs(433,`li`)(434,`a`,51),Wb(435,`Action`),nu()(),Wb(436,`
                `),rs(437,`li`)(438,`a`,51),Wb(439,`Another action`),nu()(),Wb(440,`
                `),rs(441,`li`)(442,`a`,51),Wb(443,`Something else here`),nu()(),Wb(444,`
                `),qg(445,`li`,52),Wb(446,`
                `),rs(447,`li`)(448,`a`,51),Wb(449,`Separated link`),nu()(),Wb(450,`
              `),nu(),Wb(451,`
            `),nu(),Wb(452,`
          `),nu(),Wb(453,`
        `),nu(),Wb(454,`
      `),nu(),Wb(455,`
    `),nu(),Wb(456,`
  `),nu(),Wb(457,`
  `),rs(458,`c-col`,0),Wb(459,`
    `),rs(460,`c-card`,2),Wb(461,`
      `),rs(462,`c-card-header`),Wb(463,`
        `),rs(464,`strong`),Wb(465,`Angular Button Group`),nu(),Wb(466,` `),rs(467,`span`),Wb(468,`Vertical variation`),nu(),Wb(469,`
      `),nu(),Wb(470,`
      `),rs(471,`c-card-body`),Wb(472,`
        `),rs(473,`p`,45),Wb(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),rs(475,`strong`),Wb(476,`Split button dropdowns are not supported here.`),nu(),Wb(477,`
        `),nu(),Wb(478,`
        `),rs(479,`app-docs-example`,53),Wb(480,`
          `),rs(481,`c-button-group`,54),Wb(482,`
            `),rs(483,`button`,55),Wb(484,`Button`),nu(),Wb(485,`
            `),rs(486,`button`,55),Wb(487,`Button`),nu(),Wb(488,`
            `),rs(489,`button`,55),Wb(490,`Button`),nu(),Wb(491,`
            `),rs(492,`button`,55),Wb(493,`Button`),nu(),Wb(494,`
            `),rs(495,`button`,55),Wb(496,`Button`),nu(),Wb(497,`
            `),rs(498,`button`,55),Wb(499,`Button`),nu(),Wb(500,`
            `),rs(501,`button`,55),Wb(502,`Button`),nu(),Wb(503,`
          `),nu(),Wb(504,`
          `),qg(505,`br`),Wb(506,`
        `),nu(),Wb(507,`
        `),rs(508,`app-docs-example`,53),Wb(509,`
          `),rs(510,`c-button-group`,54),Wb(511,`
            `),rs(512,`button`,5),Wb(513,`Button`),nu(),Wb(514,`
            `),rs(515,`button`,5),Wb(516,`Button`),nu(),Wb(517,`
            `),rs(518,`c-dropdown`,48),Wb(519,`
              `),rs(520,`button`,49),Wb(521,`
                Dropdown
              `),nu(),Wb(522,`
              `),rs(523,`ul`,50),Wb(524,`
                `),rs(525,`li`)(526,`a`,51),Wb(527,`Action`),nu()(),Wb(528,`
                `),rs(529,`li`)(530,`a`,51),Wb(531,`Another action`),nu()(),Wb(532,`
                `),rs(533,`li`)(534,`a`,51),Wb(535,`Something else here`),nu()(),Wb(536,`
                `),qg(537,`li`,52),Wb(538,`
                `),rs(539,`li`)(540,`a`,51),Wb(541,`Separated link`),nu()(),Wb(542,`
              `),nu(),Wb(543,`
            `),nu(),Wb(544,`
            `),rs(545,`button`,5),Wb(546,`Button`),nu(),Wb(547,`
            `),rs(548,`button`,5),Wb(549,`Button`),nu(),Wb(550,`
            `),rs(551,`c-dropdown`,48),Wb(552,`
              `),rs(553,`button`,49),Wb(554,`
                Dropdown
              `),nu(),Wb(555,`
              `),rs(556,`ul`,50),Wb(557,`
                `),rs(558,`li`)(559,`a`,51),Wb(560,`Action`),nu()(),Wb(561,`
                `),rs(562,`li`)(563,`a`,51),Wb(564,`Another action`),nu()(),Wb(565,`
                `),rs(566,`li`)(567,`a`,51),Wb(568,`Something else here`),nu()(),Wb(569,`
                `),qg(570,`li`,52),Wb(571,`
                `),rs(572,`li`)(573,`a`,51),Wb(574,`Separated link`),nu()(),Wb(575,`
              `),nu(),Wb(576,`
            `),nu(),Wb(577,`
            `),rs(578,`c-dropdown`,56),Wb(579,`
              `),rs(580,`button`,49),Wb(581,`
                Dropdown
              `),nu(),Wb(582,`
              `),rs(583,`ul`,57),Wb(584,`
                `),rs(585,`li`)(586,`a`,51),Wb(587,`Action`),nu()(),Wb(588,`
                `),rs(589,`li`)(590,`a`,51),Wb(591,`Another action`),nu()(),Wb(592,`
                `),rs(593,`li`)(594,`a`,51),Wb(595,`Something else here`),nu()(),Wb(596,`
                `),qg(597,`li`,52),Wb(598,`
                `),rs(599,`li`)(600,`a`,51),Wb(601,`Separated link`),nu()(),Wb(602,`
              `),nu(),Wb(603,`
            `),nu(),Wb(604,`
            `),rs(605,`c-dropdown`,48),Wb(606,`
              `),rs(607,`button`,49),Wb(608,`
                Dropdown
              `),nu(),Wb(609,`
              `),rs(610,`ul`,50),Wb(611,`
                `),rs(612,`li`)(613,`a`,51),Wb(614,`Action`),nu()(),Wb(615,`
                `),rs(616,`li`)(617,`a`,51),Wb(618,`Another action`),nu()(),Wb(619,`
                `),rs(620,`li`)(621,`a`,51),Wb(622,`Something else here`),nu()(),Wb(623,`
                `),qg(624,`li`,52),Wb(625,`
                `),rs(626,`li`)(627,`a`,51),Wb(628,`Separated link`),nu()(),Wb(629,`
              `),nu(),Wb(630,`
            `),nu(),Wb(631,`
          `),nu(),Wb(632,`
        `),nu(),Wb(633,`
        `),rs(634,`app-docs-example`,53),Wb(635,`
          `),rs(636,`form`,17),Wb(637,`
            `),rs(638,`c-button-group`,54),Wb(639,`
              `),qg(640,`input`,25),ow(),Wb(641,`
              `),rs(642,`label`,58),nm(`click`,function(){return m.setRadioValue(`Radio1`)}),Wb(643,`Radio 1`),nu(),Wb(644,`

              `),qg(645,`input`,26),ow(),Wb(646,`
              `),rs(647,`label`,58),nm(`click`,function(){return m.setRadioValue(`Radio2`)}),Wb(648,`Radio 2`),nu(),Wb(649,`

              `),qg(650,`input`,27),ow(),Wb(651,`
              `),rs(652,`label`,58),nm(`click`,function(){return m.setRadioValue(`Radio3`)}),Wb(653,`Radio
                3`),nu(),Wb(654,`
            `),nu(),Wb(655,`
          `),nu(),Wb(656,`
        `),nu(),Wb(657,`
      `),nu(),Wb(658,`
    `),nu(),Wb(659,`
  `),nu(),Wb(660,`
`),nu()),s&2&&(vD(53),Wg(`active`,!0)(`routerLink`,rC(30,l)),vD(3),Wg(`routerLink`,rC(31,l)),vD(3),Wg(`routerLink`,rC(32,l)),vD(94),Wg(`formGroup`,m.formCheck1),vD(4),iw(),vD(5),iw(),vD(5),iw(),vD(12),Wg(`formGroup`,m.formRadio1),vD(4),iw(),vD(5),iw(),vD(5),iw(),vD(241),Wg(`routerLink`,rC(33,l)),vD(4),Wg(`routerLink`,rC(34,l)),vD(4),Wg(`routerLink`,rC(35,l)),vD(6),Wg(`routerLink`,rC(36,l)),vD(33),Wg(`vertical`,!0),vD(29),Wg(`vertical`,!0),vD(16),Wg(`routerLink`,rC(37,l)),vD(4),Wg(`routerLink`,rC(38,l)),vD(4),Wg(`routerLink`,rC(39,l)),vD(6),Wg(`routerLink`,rC(40,l)),vD(19),Wg(`routerLink`,rC(41,l)),vD(4),Wg(`routerLink`,rC(42,l)),vD(4),Wg(`routerLink`,rC(43,l)),vD(6),Wg(`routerLink`,rC(44,l)),vD(13),Wg(`routerLink`,rC(45,l)),vD(4),Wg(`routerLink`,rC(46,l)),vD(4),Wg(`routerLink`,rC(47,l)),vD(6),Wg(`routerLink`,rC(48,l)),vD(13),Wg(`routerLink`,rC(49,l)),vD(4),Wg(`routerLink`,rC(50,l)),vD(4),Wg(`routerLink`,rC(51,l)),vD(6),Wg(`routerLink`,rC(52,l)),vD(9),Wg(`formGroup`,m.formRadio1),vD(2),Wg(`vertical`,!0),vD(2),iw(),vD(5),iw(),vD(5),iw())},dependencies:[vF,ux,Ro,JS,Po,I,G2,ko,On,xr,QN,Jn,Kv,Nb,Ii,Ds,Dr,wr,Tm,q2,pF,hF,Ws,Zt,si,xn,bm,N2,c],encapsulation:2})}};export{X as ButtonGroupsComponent};