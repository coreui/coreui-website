import{C as GT,D as IT,Gn as Ch,I as Li,L as Lu,Lt as cs,O as Iu,Oi as ki,Or as Rh,Qr as _,Sn as rb,X as Pi,Yn as Dw,_ as Eu,_t as Wt,ai as cw,bn as qv,br as OI,bt as XT,g as ET,ga as wh,ii as cl,k as JT,la as vD,n as $T,ut as Tu,va as xI,wn as t1,xt as Xv,zn as $E}from"./main-3ZNEFDGN.js";import{_ as on,a as Ln,d as Zn,h as gn,i as Hn,n as Bn,o as Mt,p as dn,r as Gn,s as Tn,u as Xe,v as qn}from"./chunk-CzoTQkhg.js";import{t as E}from"./chunk-DyzPa03D.js";import{t as c}from"./chunk-Cq12Oo7T.js";var l=()=>[];var X=class b{constructor(){this.formBuilder=_(qn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new Bn({radio1:new Hn(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=vD({type:b,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(ki(0,`c-row`),cw(1,`
  `),ki(2,`c-col`,0),cw(3,`
    `),Ch(4,`app-docs-components`,1),cw(5,`
    `),ki(6,`c-card`,2),cw(7,`
      `),ki(8,`c-card-header`),cw(9,`
        `),ki(10,`strong`),cw(11,`Angular Button Group`),cl(),cw(12,` `),ki(13,`span`),cw(14,`Basic example`),cl(),cw(15,`
      `),cl(),cw(16,`
      `),ki(17,`c-card-body`),cw(18,`
        `),ki(19,`p`),cw(20,`
          Wrap a series of `),ki(21,`code`),cw(22,`<CButton>`),cl(),cw(23,` components in
          `),ki(24,`code`),cw(25,`<c-button-group>`),cl(),cw(26,`.
        `),cl(),cw(27,`
        `),ki(28,`app-docs-example`,3),cw(29,`
          `),ki(30,`c-button-group`,4),cw(31,`
            `),ki(32,`button`,5),cw(33,`Left`),cl(),cw(34,`
            `),ki(35,`button`,5),cw(36,`Middle`),cl(),cw(37,`
            `),ki(38,`button`,5),cw(39,`Right`),cl(),cw(40,`
          `),cl(),cw(41,`
        `),cl(),cw(42,`
        `),ki(43,`p`),cw(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),ki(45,`code`),cw(46,`<CNav>`),cl(),cw(47,` components.
        `),cl(),cw(48,`
        `),ki(49,`app-docs-example`,3),cw(50,`
          `),ki(51,`c-button-group`),cw(52,`
            `),ki(53,`a`,6),cw(54,`
              Active link
            `),cl(),cw(55,`
            `),ki(56,`a`,7),cw(57,`
              Link
            `),cl(),cw(58,`
            `),ki(59,`a`,7),cw(60,`
              Link
            `),cl(),cw(61,`
          `),cl(),cw(62,`
        `),cl(),cw(63,`
      `),cl(),cw(64,`
    `),cl(),cw(65,`
  `),cl(),cw(66,`
  `),ki(67,`c-col`,0),cw(68,`
    `),ki(69,`c-card`,2),cw(70,`
      `),ki(71,`c-card-header`),cw(72,`
        `),ki(73,`strong`),cw(74,`Angular Button Group`),cl(),cw(75,` `),ki(76,`span`),cw(77,`Mixed styles`),cl(),cw(78,`
      `),cl(),cw(79,`
      `),ki(80,`c-card-body`),cw(81,`
        `),ki(82,`app-docs-example`,8),cw(83,`
          `),ki(84,`c-button-group`,9),cw(85,`
            `),ki(86,`button`,10),cw(87,`Left`),cl(),cw(88,`
            `),ki(89,`button`,11),cw(90,`Middle`),cl(),cw(91,`
            `),ki(92,`button`,12),cw(93,`Right`),cl(),cw(94,`
          `),cl(),cw(95,`
        `),cl(),cw(96,`
      `),cl(),cw(97,`
    `),cl(),cw(98,`
  `),cl(),cw(99,`
  `),ki(100,`c-col`,0),cw(101,`
    `),ki(102,`c-card`,2),cw(103,`
      `),ki(104,`c-card-header`),cw(105,`
        `),ki(106,`strong`),cw(107,`Angular Button Group`),cl(),cw(108,` `),ki(109,`span`),cw(110,`Outlined styles`),cl(),cw(111,`
      `),cl(),cw(112,`
      `),ki(113,`c-card-body`),cw(114,`
        `),ki(115,`app-docs-example`,13),cw(116,`
          `),ki(117,`c-button-group`,14),cw(118,`
            `),ki(119,`button`,15),cw(120,`
              Left
            `),cl(),cw(121,`
            `),ki(122,`button`,15),cw(123,`
              Middle
            `),cl(),cw(124,`
            `),ki(125,`button`,15),cw(126,`
              Right
            `),cl(),cw(127,`
          `),cl(),cw(128,`
        `),cl(),cw(129,`
      `),cl(),cw(130,`
    `),cl(),cw(131,`
  `),cl(),cw(132,`
  `),ki(133,`c-col`,0),cw(134,`
    `),ki(135,`c-card`,2),cw(136,`
      `),ki(137,`c-card-header`),cw(138,`
        `),ki(139,`strong`),cw(140,`Angular Button Group`),cl(),cw(141,` `),ki(142,`span`),cw(143,`Checkbox and radio button groups`),cl(),cw(144,`
      `),cl(),cw(145,`
      `),ki(146,`c-card-body`),cw(147,`
        `),ki(148,`p`),cw(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),cl(),cw(150,`
        `),ki(151,`app-docs-example`,16),cw(152,`
          `),ki(153,`form`,17),cw(154,`
            `),ki(155,`c-button-group`,18),cw(156,`
              `),Ch(157,`input`,19),xI(),cw(158,`
              `),ki(159,`label`,20),Rh(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),cw(160,`Checkbox 1`),cl(),cw(161,`

              `),Ch(162,`input`,21),xI(),cw(163,`
              `),ki(164,`label`,20),Rh(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),cw(165,`Checkbox 2`),cl(),cw(166,`

              `),Ch(167,`input`,22),xI(),cw(168,`
              `),ki(169,`label`,20),Rh(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),cw(170,`Checkbox
                3`),cl(),cw(171,`
            `),cl(),cw(172,`
          `),cl(),cw(173,`
          `),Ch(174,`br`,23),cw(175,`
        `),cl(),cw(176,`
        `),ki(177,`app-docs-example`,16),cw(178,`
          `),ki(179,`form`,17),cw(180,`
            `),ki(181,`c-button-group`,24),cw(182,`
              `),Ch(183,`input`,25),xI(),cw(184,`
              `),ki(185,`label`,20),Rh(`click`,function(){return m.setRadioValue(`Radio1`)}),cw(186,`Radio 1`),cl(),cw(187,`

              `),Ch(188,`input`,26),xI(),cw(189,`
              `),ki(190,`label`,20),Rh(`click`,function(){return m.setRadioValue(`Radio2`)}),cw(191,`Radio 2`),cl(),cw(192,`

              `),Ch(193,`input`,27),xI(),cw(194,`
              `),ki(195,`label`,20),Rh(`click`,function(){return m.setRadioValue(`Radio3`)}),cw(196,`Radio 3`),cl(),cw(197,`
            `),cl(),cw(198,`
          `),cl(),cw(199,`
        `),cl(),cw(200,`
      `),cl(),cw(201,`
    `),cl(),cw(202,`
  `),cl(),cw(203,`
  `),ki(204,`c-col`,0),cw(205,`
    `),ki(206,`c-card`,2),cw(207,`
      `),ki(208,`c-card-header`),cw(209,`
        `),ki(210,`strong`),cw(211,`Angular Button Group`),cl(),cw(212,` `),ki(213,`span`),cw(214,`Button toolbar`),cl(),cw(215,`
      `),cl(),cw(216,`
      `),ki(217,`c-card-body`),cw(218,`
        `),ki(219,`p`),cw(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),cl(),cw(221,`
        `),ki(222,`app-docs-example`,28),cw(223,`
          `),ki(224,`c-button-toolbar`,29),cw(225,`
            `),ki(226,`c-button-group`,30),cw(227,`
              `),ki(228,`button`,5),cw(229,`1`),cl(),cw(230,`
              `),ki(231,`button`,5),cw(232,`2`),cl(),cw(233,`
              `),ki(234,`button`,5),cw(235,`3`),cl(),cw(236,`
              `),ki(237,`button`,5),cw(238,`4`),cl(),cw(239,`
            `),cl(),cw(240,`
            `),ki(241,`c-button-group`,31),cw(242,`
              `),ki(243,`button`,32),cw(244,`5`),cl(),cw(245,`
              `),ki(246,`button`,32),cw(247,`6`),cl(),cw(248,`
              `),ki(249,`button`,32),cw(250,`7`),cl(),cw(251,`
            `),cl(),cw(252,`
            `),ki(253,`c-button-group`,33),cw(254,`
              `),ki(255,`button`,34),cw(256,`8`),cl(),cw(257,`
            `),cl(),cw(258,`
          `),cl(),cw(259,`
        `),cl(),cw(260,`
        `),ki(261,`p`),cw(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),cl(),cw(263,`
        `),ki(264,`app-docs-example`,28),cw(265,`
          `),ki(266,`c-button-toolbar`,35),cw(267,`
            `),ki(268,`c-button-group`,30),cw(269,`
              `),ki(270,`button`,36),cw(271,`
                1
              `),cl(),cw(272,`
              `),ki(273,`button`,36),cw(274,`
                2
              `),cl(),cw(275,`
              `),ki(276,`button`,36),cw(277,`
                3
              `),cl(),cw(278,`
              `),ki(279,`button`,36),cw(280,`
                4
              `),cl(),cw(281,`
            `),cl(),cw(282,`
            `),ki(283,`c-input-group`),cw(284,`
              `),ki(285,`span`,37),cw(286,`@`),cl(),cw(287,`
              `),Ch(288,`input`,38),cw(289,`
            `),cl(),cw(290,`
          `),cl(),cw(291,`
          `),ki(292,`c-button-toolbar`,39),cw(293,`
            `),ki(294,`c-button-group`,30),cw(295,`
              `),ki(296,`button`,36),cw(297,`
                1
              `),cl(),cw(298,`
              `),ki(299,`button`,36),cw(300,`
                2
              `),cl(),cw(301,`
              `),ki(302,`button`,36),cw(303,`
                3
              `),cl(),cw(304,`
              `),ki(305,`button`,36),cw(306,`
                4
              `),cl(),cw(307,`
            `),cl(),cw(308,`
            `),ki(309,`c-input-group`),cw(310,`
              `),ki(311,`span`,37),cw(312,`@`),cl(),cw(313,`
              `),Ch(314,`input`,38),cw(315,`
            `),cl(),cw(316,`
          `),cl(),cw(317,`
        `),cl(),cw(318,`
      `),cl(),cw(319,`
    `),cl(),cw(320,`
  `),cl(),cw(321,`
  `),ki(322,`c-col`,0),cw(323,`
    `),ki(324,`c-card`,2),cw(325,`
      `),ki(326,`c-card-header`),cw(327,`
        `),ki(328,`strong`),cw(329,`Angular Button Group`),cl(),cw(330,` `),ki(331,`span`),cw(332,`Sizing`),cl(),cw(333,`
      `),cl(),cw(334,`
      `),ki(335,`c-card-body`),cw(336,`
        `),ki(337,`p`),cw(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),ki(339,`code`),cw(340,`size`),cl(),cw(341,` property to all `),ki(342,`code`),cw(343,`<c-button-group>`),cl(),cw(344,`'s, including
          each one when nesting multiple groups.
        `),cl(),cw(345,`
        `),ki(346,`app-docs-example`,40),cw(347,`
          `),ki(348,`c-button-group`,41),cw(349,`
            `),ki(350,`button`,42),cw(351,`
              Left
            `),cl(),cw(352,`
            `),ki(353,`button`,42),cw(354,`
              Middle
            `),cl(),cw(355,`
            `),ki(356,`button`,42),cw(357,`
              Right
            `),cl(),cw(358,`
          `),cl(),cw(359,`
          `),Ch(360,`br`),cw(361,`
          `),ki(362,`c-button-group`,43),cw(363,`
            `),ki(364,`button`,42),cw(365,`
              Left
            `),cl(),cw(366,`
            `),ki(367,`button`,42),cw(368,`
              Middle
            `),cl(),cw(369,`
            `),ki(370,`button`,42),cw(371,`
              Right
            `),cl(),cw(372,`
          `),cl(),cw(373,`
          `),Ch(374,`br`),cw(375,`
          `),ki(376,`c-button-group`,44),cw(377,`
            `),ki(378,`button`,42),cw(379,`
              Left
            `),cl(),cw(380,`
            `),ki(381,`button`,42),cw(382,`
              Middle
            `),cl(),cw(383,`
            `),ki(384,`button`,42),cw(385,`
              Right
            `),cl(),cw(386,`
          `),cl(),cw(387,`
        `),cl(),cw(388,`
      `),cl(),cw(389,`
    `),cl(),cw(390,`
  `),cl(),cw(391,`
  `),ki(392,`c-col`,0),cw(393,`
    `),ki(394,`c-card`,2),cw(395,`
      `),ki(396,`c-card-header`),cw(397,`
        `),ki(398,`strong`),cw(399,`Angular Button Group`),cl(),cw(400,` `),ki(401,`span`),cw(402,`Nesting`),cl(),cw(403,`
      `),cl(),cw(404,`
      `),ki(405,`c-card-body`),cw(406,`
        `),ki(407,`p`,45),cw(408,`
          Put a `),ki(409,`code`),cw(410,`<c-button-group>`),cl(),cw(411,` inside another
          `),ki(412,`code`),cw(413,`<c-button-group>`),cl(),cw(414,` when you need dropdown menus combined with a series
          of buttons.
        `),cl(),cw(415,`
        `),ki(416,`app-docs-example`,46),cw(417,`
          `),ki(418,`c-button-group`,47),cw(419,`
            `),ki(420,`button`,5),cw(421,`1`),cl(),cw(422,`
            `),ki(423,`button`,5),cw(424,`2`),cl(),cw(425,`
            `),ki(426,`c-dropdown`,48),cw(427,`
              `),ki(428,`button`,49),cw(429,`
                Dropdown
              `),cl(),cw(430,`
              `),ki(431,`ul`,50),cw(432,`
                `),ki(433,`li`)(434,`a`,51),cw(435,`Action`),cl()(),cw(436,`
                `),ki(437,`li`)(438,`a`,51),cw(439,`Another action`),cl()(),cw(440,`
                `),ki(441,`li`)(442,`a`,51),cw(443,`Something else here`),cl()(),cw(444,`
                `),Ch(445,`li`,52),cw(446,`
                `),ki(447,`li`)(448,`a`,51),cw(449,`Separated link`),cl()(),cw(450,`
              `),cl(),cw(451,`
            `),cl(),cw(452,`
          `),cl(),cw(453,`
        `),cl(),cw(454,`
      `),cl(),cw(455,`
    `),cl(),cw(456,`
  `),cl(),cw(457,`
  `),ki(458,`c-col`,0),cw(459,`
    `),ki(460,`c-card`,2),cw(461,`
      `),ki(462,`c-card-header`),cw(463,`
        `),ki(464,`strong`),cw(465,`Angular Button Group`),cl(),cw(466,` `),ki(467,`span`),cw(468,`Vertical variation`),cl(),cw(469,`
      `),cl(),cw(470,`
      `),ki(471,`c-card-body`),cw(472,`
        `),ki(473,`p`,45),cw(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),ki(475,`strong`),cw(476,`Split button dropdowns are not supported here.`),cl(),cw(477,`
        `),cl(),cw(478,`
        `),ki(479,`app-docs-example`,53),cw(480,`
          `),ki(481,`c-button-group`,54),cw(482,`
            `),ki(483,`button`,55),cw(484,`Button`),cl(),cw(485,`
            `),ki(486,`button`,55),cw(487,`Button`),cl(),cw(488,`
            `),ki(489,`button`,55),cw(490,`Button`),cl(),cw(491,`
            `),ki(492,`button`,55),cw(493,`Button`),cl(),cw(494,`
            `),ki(495,`button`,55),cw(496,`Button`),cl(),cw(497,`
            `),ki(498,`button`,55),cw(499,`Button`),cl(),cw(500,`
            `),ki(501,`button`,55),cw(502,`Button`),cl(),cw(503,`
          `),cl(),cw(504,`
          `),Ch(505,`br`),cw(506,`
        `),cl(),cw(507,`
        `),ki(508,`app-docs-example`,53),cw(509,`
          `),ki(510,`c-button-group`,54),cw(511,`
            `),ki(512,`button`,5),cw(513,`Button`),cl(),cw(514,`
            `),ki(515,`button`,5),cw(516,`Button`),cl(),cw(517,`
            `),ki(518,`c-dropdown`,48),cw(519,`
              `),ki(520,`button`,49),cw(521,`
                Dropdown
              `),cl(),cw(522,`
              `),ki(523,`ul`,50),cw(524,`
                `),ki(525,`li`)(526,`a`,51),cw(527,`Action`),cl()(),cw(528,`
                `),ki(529,`li`)(530,`a`,51),cw(531,`Another action`),cl()(),cw(532,`
                `),ki(533,`li`)(534,`a`,51),cw(535,`Something else here`),cl()(),cw(536,`
                `),Ch(537,`li`,52),cw(538,`
                `),ki(539,`li`)(540,`a`,51),cw(541,`Separated link`),cl()(),cw(542,`
              `),cl(),cw(543,`
            `),cl(),cw(544,`
            `),ki(545,`button`,5),cw(546,`Button`),cl(),cw(547,`
            `),ki(548,`button`,5),cw(549,`Button`),cl(),cw(550,`
            `),ki(551,`c-dropdown`,48),cw(552,`
              `),ki(553,`button`,49),cw(554,`
                Dropdown
              `),cl(),cw(555,`
              `),ki(556,`ul`,50),cw(557,`
                `),ki(558,`li`)(559,`a`,51),cw(560,`Action`),cl()(),cw(561,`
                `),ki(562,`li`)(563,`a`,51),cw(564,`Another action`),cl()(),cw(565,`
                `),ki(566,`li`)(567,`a`,51),cw(568,`Something else here`),cl()(),cw(569,`
                `),Ch(570,`li`,52),cw(571,`
                `),ki(572,`li`)(573,`a`,51),cw(574,`Separated link`),cl()(),cw(575,`
              `),cl(),cw(576,`
            `),cl(),cw(577,`
            `),ki(578,`c-dropdown`,56),cw(579,`
              `),ki(580,`button`,49),cw(581,`
                Dropdown
              `),cl(),cw(582,`
              `),ki(583,`ul`,57),cw(584,`
                `),ki(585,`li`)(586,`a`,51),cw(587,`Action`),cl()(),cw(588,`
                `),ki(589,`li`)(590,`a`,51),cw(591,`Another action`),cl()(),cw(592,`
                `),ki(593,`li`)(594,`a`,51),cw(595,`Something else here`),cl()(),cw(596,`
                `),Ch(597,`li`,52),cw(598,`
                `),ki(599,`li`)(600,`a`,51),cw(601,`Separated link`),cl()(),cw(602,`
              `),cl(),cw(603,`
            `),cl(),cw(604,`
            `),ki(605,`c-dropdown`,48),cw(606,`
              `),ki(607,`button`,49),cw(608,`
                Dropdown
              `),cl(),cw(609,`
              `),ki(610,`ul`,50),cw(611,`
                `),ki(612,`li`)(613,`a`,51),cw(614,`Action`),cl()(),cw(615,`
                `),ki(616,`li`)(617,`a`,51),cw(618,`Another action`),cl()(),cw(619,`
                `),ki(620,`li`)(621,`a`,51),cw(622,`Something else here`),cl()(),cw(623,`
                `),Ch(624,`li`,52),cw(625,`
                `),ki(626,`li`)(627,`a`,51),cw(628,`Separated link`),cl()(),cw(629,`
              `),cl(),cw(630,`
            `),cl(),cw(631,`
          `),cl(),cw(632,`
        `),cl(),cw(633,`
        `),ki(634,`app-docs-example`,53),cw(635,`
          `),ki(636,`form`,17),cw(637,`
            `),ki(638,`c-button-group`,54),cw(639,`
              `),Ch(640,`input`,25),xI(),cw(641,`
              `),ki(642,`label`,58),Rh(`click`,function(){return m.setRadioValue(`Radio1`)}),cw(643,`Radio 1`),cl(),cw(644,`

              `),Ch(645,`input`,26),xI(),cw(646,`
              `),ki(647,`label`,58),Rh(`click`,function(){return m.setRadioValue(`Radio2`)}),cw(648,`Radio 2`),cl(),cw(649,`

              `),Ch(650,`input`,27),xI(),cw(651,`
              `),ki(652,`label`,58),Rh(`click`,function(){return m.setRadioValue(`Radio3`)}),cw(653,`Radio
                3`),cl(),cw(654,`
            `),cl(),cw(655,`
          `),cl(),cw(656,`
        `),cl(),cw(657,`
      `),cl(),cw(658,`
    `),cl(),cw(659,`
  `),cl(),cw(660,`
`),cl()),s&2&&($E(53),wh(`active`,!0)(`routerLink`,Dw(30,l)),$E(3),wh(`routerLink`,Dw(31,l)),$E(3),wh(`routerLink`,Dw(32,l)),$E(94),wh(`formGroup`,m.formCheck1),$E(4),OI(),$E(5),OI(),$E(5),OI(),$E(12),wh(`formGroup`,m.formRadio1),$E(4),OI(),$E(5),OI(),$E(5),OI(),$E(241),wh(`routerLink`,Dw(33,l)),$E(4),wh(`routerLink`,Dw(34,l)),$E(4),wh(`routerLink`,Dw(35,l)),$E(6),wh(`routerLink`,Dw(36,l)),$E(33),wh(`vertical`,!0),$E(29),wh(`vertical`,!0),$E(16),wh(`routerLink`,Dw(37,l)),$E(4),wh(`routerLink`,Dw(38,l)),$E(4),wh(`routerLink`,Dw(39,l)),$E(6),wh(`routerLink`,Dw(40,l)),$E(19),wh(`routerLink`,Dw(41,l)),$E(4),wh(`routerLink`,Dw(42,l)),$E(4),wh(`routerLink`,Dw(43,l)),$E(6),wh(`routerLink`,Dw(44,l)),$E(13),wh(`routerLink`,Dw(45,l)),$E(4),wh(`routerLink`,Dw(46,l)),$E(4),wh(`routerLink`,Dw(47,l)),$E(6),wh(`routerLink`,Dw(48,l)),$E(13),wh(`routerLink`,Dw(49,l)),$E(4),wh(`routerLink`,Dw(50,l)),$E(4),wh(`routerLink`,Dw(51,l)),$E(6),wh(`routerLink`,Dw(52,l)),$E(9),wh(`formGroup`,m.formRadio1),$E(2),wh(`vertical`,!0),$E(2),OI(),$E(5),OI(),$E(5),OI())},dependencies:[t1,rb,Pi,Xv,Li,E,ET,qv,Wt,Zn,Ln,Xe,Mt,dn,Tn,Gn,on,gn,Tu,IT,XT,JT,GT,Lu,Eu,cs,Iu,$T,c],encapsulation:2})}};export{X as ButtonGroupsComponent};