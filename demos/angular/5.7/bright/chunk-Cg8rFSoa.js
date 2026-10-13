import{Bt as Tm,Di as xT,Dt as Rw,Ni as yT,U as Ib,Zn as hm,gn as as,gt as Ow,in as ZD,vn as b,yr as lu,zr as pm}from"./chunk-DYvmxcZi.js";import{$ as ON,Bn as or,Et as XD,F as Ji,In as nr,Kt as ao,R as KP,St as WC,Wt as ai,Xn as ro,br as yF,c as AP,j as In,jn as mI,jt as YM,nt as PC,on as fF,pn as hF,q as NN,rr as ti,tt as Oi,ur as vD,vn as il,vr as xc,wn as kN,wt as WP,x as EN,yn as ir,yr as xi,zn as oo}from"./main-DWKFADAG.js";import{t as $}from"./chunk-Bap1PJQ8.js";import"./chunk-BRchMoB_.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-BR-kv_3O.js";var l=()=>[];var X=class S{constructor(){this.formBuilder=b(ON);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new NN({radio1:new EN(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,a=this.formCheck1.value;a[p]=!s,this.formCheck1.setValue(a)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||S)}}static{this.ɵcmp=Ib({type:S,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,a){s&1&&(as(0,`c-row`),yT(1,`
  `),as(2,`c-col`,0),yT(3,`
    `),hm(4,`app-docs-components`,1),yT(5,`
    `),as(6,`c-card`,2),yT(7,`
      `),as(8,`c-card-header`),yT(9,`
        `),as(10,`strong`),yT(11,`Angular Button Group`),lu(),yT(12,` `),as(13,`span`),yT(14,`Basic example`),lu(),yT(15,`
      `),lu(),yT(16,`
      `),as(17,`c-card-body`),yT(18,`
        `),as(19,`p`),yT(20,`
          Wrap a series of `),as(21,`code`),yT(22,`<CButton>`),lu(),yT(23,` components in
          `),as(24,`code`),yT(25,`<c-button-group>`),lu(),yT(26,`.
        `),lu(),yT(27,`
        `),as(28,`app-docs-example`,3),yT(29,`
          `),as(30,`c-button-group`,4),yT(31,`
            `),as(32,`button`,5),yT(33,`Left`),lu(),yT(34,`
            `),as(35,`button`,5),yT(36,`Middle`),lu(),yT(37,`
            `),as(38,`button`,5),yT(39,`Right`),lu(),yT(40,`
          `),lu(),yT(41,`
        `),lu(),yT(42,`
        `),as(43,`p`),yT(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),as(45,`code`),yT(46,`<CNav>`),lu(),yT(47,` components.
        `),lu(),yT(48,`
        `),as(49,`app-docs-example`,3),yT(50,`
          `),as(51,`c-button-group`),yT(52,`
            `),as(53,`a`,6),yT(54,`
              Active link
            `),lu(),yT(55,`
            `),as(56,`a`,7),yT(57,`
              Link
            `),lu(),yT(58,`
            `),as(59,`a`,7),yT(60,`
              Link
            `),lu(),yT(61,`
          `),lu(),yT(62,`
        `),lu(),yT(63,`
      `),lu(),yT(64,`
    `),lu(),yT(65,`
  `),lu(),yT(66,`
  `),as(67,`c-col`,0),yT(68,`
    `),as(69,`c-card`,2),yT(70,`
      `),as(71,`c-card-header`),yT(72,`
        `),as(73,`strong`),yT(74,`Angular Button Group`),lu(),yT(75,` `),as(76,`span`),yT(77,`Mixed styles`),lu(),yT(78,`
      `),lu(),yT(79,`
      `),as(80,`c-card-body`),yT(81,`
        `),as(82,`app-docs-example`,8),yT(83,`
          `),as(84,`c-button-group`,9),yT(85,`
            `),as(86,`button`,10),yT(87,`Left`),lu(),yT(88,`
            `),as(89,`button`,11),yT(90,`Middle`),lu(),yT(91,`
            `),as(92,`button`,12),yT(93,`Right`),lu(),yT(94,`
          `),lu(),yT(95,`
        `),lu(),yT(96,`
      `),lu(),yT(97,`
    `),lu(),yT(98,`
  `),lu(),yT(99,`
  `),as(100,`c-col`,0),yT(101,`
    `),as(102,`c-card`,2),yT(103,`
      `),as(104,`c-card-header`),yT(105,`
        `),as(106,`strong`),yT(107,`Angular Button Group`),lu(),yT(108,` `),as(109,`span`),yT(110,`Outlined styles`),lu(),yT(111,`
      `),lu(),yT(112,`
      `),as(113,`c-card-body`),yT(114,`
        `),as(115,`app-docs-example`,13),yT(116,`
          `),as(117,`c-button-group`,14),yT(118,`
            `),as(119,`button`,15),yT(120,`
              Left
            `),lu(),yT(121,`
            `),as(122,`button`,15),yT(123,`
              Middle
            `),lu(),yT(124,`
            `),as(125,`button`,15),yT(126,`
              Right
            `),lu(),yT(127,`
          `),lu(),yT(128,`
        `),lu(),yT(129,`
      `),lu(),yT(130,`
    `),lu(),yT(131,`
  `),lu(),yT(132,`
  `),as(133,`c-col`,0),yT(134,`
    `),as(135,`c-card`,2),yT(136,`
      `),as(137,`c-card-header`),yT(138,`
        `),as(139,`strong`),yT(140,`Angular Button Group`),lu(),yT(141,` `),as(142,`span`),yT(143,`Checkbox and radio button groups`),lu(),yT(144,`
      `),lu(),yT(145,`
      `),as(146,`c-card-body`),yT(147,`
        `),as(148,`p`),yT(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),lu(),yT(150,`
        `),as(151,`app-docs-example`,16),yT(152,`
          `),as(153,`form`,17),yT(154,`
            `),as(155,`c-button-group`,18),yT(156,`
              `),as(157,`input`,19),Rw(),lu(),yT(158,`
              `),as(159,`label`,20),Tm(`click`,function(){return a.setCheckBoxValue(`checkbox1`)}),yT(160,`Checkbox 1`),lu(),yT(161,`

              `),as(162,`input`,21),Rw(),lu(),yT(163,`
              `),as(164,`label`,20),Tm(`click`,function(){return a.setCheckBoxValue(`checkbox2`)}),yT(165,`Checkbox 2`),lu(),yT(166,`

              `),as(167,`input`,22),Rw(),lu(),yT(168,`
              `),as(169,`label`,20),Tm(`click`,function(){return a.setCheckBoxValue(`checkbox3`)}),yT(170,`Checkbox
                3`),lu(),yT(171,`
            `),lu(),yT(172,`
          `),lu(),yT(173,`
          `),hm(174,`br`,23),yT(175,`
        `),lu(),yT(176,`
        `),as(177,`app-docs-example`,16),yT(178,`
          `),as(179,`form`,17),yT(180,`
            `),as(181,`c-button-group`,24),yT(182,`
              `),as(183,`input`,25),Rw(),lu(),yT(184,`
              `),as(185,`label`,20),Tm(`click`,function(){return a.setRadioValue(`Radio1`)}),yT(186,`Radio 1`),lu(),yT(187,`

              `),as(188,`input`,26),Rw(),lu(),yT(189,`
              `),as(190,`label`,20),Tm(`click`,function(){return a.setRadioValue(`Radio2`)}),yT(191,`Radio 2`),lu(),yT(192,`

              `),as(193,`input`,27),Rw(),lu(),yT(194,`
              `),as(195,`label`,20),Tm(`click`,function(){return a.setRadioValue(`Radio3`)}),yT(196,`Radio 3`),lu(),yT(197,`
            `),lu(),yT(198,`
          `),lu(),yT(199,`
        `),lu(),yT(200,`
      `),lu(),yT(201,`
    `),lu(),yT(202,`
  `),lu(),yT(203,`
  `),as(204,`c-col`,0),yT(205,`
    `),as(206,`c-card`,2),yT(207,`
      `),as(208,`c-card-header`),yT(209,`
        `),as(210,`strong`),yT(211,`Angular Button Group`),lu(),yT(212,` `),as(213,`span`),yT(214,`Button toolbar`),lu(),yT(215,`
      `),lu(),yT(216,`
      `),as(217,`c-card-body`),yT(218,`
        `),as(219,`p`),yT(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),lu(),yT(221,`
        `),as(222,`app-docs-example`,28),yT(223,`
          `),as(224,`c-button-toolbar`,29),yT(225,`
            `),as(226,`c-button-group`,30),yT(227,`
              `),as(228,`button`,5),yT(229,`1`),lu(),yT(230,`
              `),as(231,`button`,5),yT(232,`2`),lu(),yT(233,`
              `),as(234,`button`,5),yT(235,`3`),lu(),yT(236,`
              `),as(237,`button`,5),yT(238,`4`),lu(),yT(239,`
            `),lu(),yT(240,`
            `),as(241,`c-button-group`,31),yT(242,`
              `),as(243,`button`,32),yT(244,`5`),lu(),yT(245,`
              `),as(246,`button`,32),yT(247,`6`),lu(),yT(248,`
              `),as(249,`button`,32),yT(250,`7`),lu(),yT(251,`
            `),lu(),yT(252,`
            `),as(253,`c-button-group`,33),yT(254,`
              `),as(255,`button`,34),yT(256,`8`),lu(),yT(257,`
            `),lu(),yT(258,`
          `),lu(),yT(259,`
        `),lu(),yT(260,`
        `),as(261,`p`),yT(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),lu(),yT(263,`
        `),as(264,`app-docs-example`,28),yT(265,`
          `),as(266,`c-button-toolbar`,35),yT(267,`
            `),as(268,`c-button-group`,30),yT(269,`
              `),as(270,`button`,36),yT(271,`
                1
              `),lu(),yT(272,`
              `),as(273,`button`,36),yT(274,`
                2
              `),lu(),yT(275,`
              `),as(276,`button`,36),yT(277,`
                3
              `),lu(),yT(278,`
              `),as(279,`button`,36),yT(280,`
                4
              `),lu(),yT(281,`
            `),lu(),yT(282,`
            `),as(283,`c-input-group`),yT(284,`
              `),as(285,`span`,37),yT(286,`@`),lu(),yT(287,`
              `),hm(288,`input`,38),yT(289,`
            `),lu(),yT(290,`
          `),lu(),yT(291,`
          `),as(292,`c-button-toolbar`,39),yT(293,`
            `),as(294,`c-button-group`,30),yT(295,`
              `),as(296,`button`,36),yT(297,`
                1
              `),lu(),yT(298,`
              `),as(299,`button`,36),yT(300,`
                2
              `),lu(),yT(301,`
              `),as(302,`button`,36),yT(303,`
                3
              `),lu(),yT(304,`
              `),as(305,`button`,36),yT(306,`
                4
              `),lu(),yT(307,`
            `),lu(),yT(308,`
            `),as(309,`c-input-group`),yT(310,`
              `),as(311,`span`,37),yT(312,`@`),lu(),yT(313,`
              `),hm(314,`input`,38),yT(315,`
            `),lu(),yT(316,`
          `),lu(),yT(317,`
        `),lu(),yT(318,`
      `),lu(),yT(319,`
    `),lu(),yT(320,`
  `),lu(),yT(321,`
  `),as(322,`c-col`,0),yT(323,`
    `),as(324,`c-card`,2),yT(325,`
      `),as(326,`c-card-header`),yT(327,`
        `),as(328,`strong`),yT(329,`Angular Button Group`),lu(),yT(330,` `),as(331,`span`),yT(332,`Sizing`),lu(),yT(333,`
      `),lu(),yT(334,`
      `),as(335,`c-card-body`),yT(336,`
        `),as(337,`p`),yT(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),as(339,`code`),yT(340,`size`),lu(),yT(341,` property to all `),as(342,`code`),yT(343,`<c-button-group>`),lu(),yT(344,`'s, including
          each one when nesting multiple groups.
        `),lu(),yT(345,`
        `),as(346,`app-docs-example`,40),yT(347,`
          `),as(348,`c-button-group`,41),yT(349,`
            `),as(350,`button`,42),yT(351,`
              Left
            `),lu(),yT(352,`
            `),as(353,`button`,42),yT(354,`
              Middle
            `),lu(),yT(355,`
            `),as(356,`button`,42),yT(357,`
              Right
            `),lu(),yT(358,`
          `),lu(),yT(359,`
          `),hm(360,`br`),yT(361,`
          `),as(362,`c-button-group`,43),yT(363,`
            `),as(364,`button`,42),yT(365,`
              Left
            `),lu(),yT(366,`
            `),as(367,`button`,42),yT(368,`
              Middle
            `),lu(),yT(369,`
            `),as(370,`button`,42),yT(371,`
              Right
            `),lu(),yT(372,`
          `),lu(),yT(373,`
          `),hm(374,`br`),yT(375,`
          `),as(376,`c-button-group`,44),yT(377,`
            `),as(378,`button`,42),yT(379,`
              Left
            `),lu(),yT(380,`
            `),as(381,`button`,42),yT(382,`
              Middle
            `),lu(),yT(383,`
            `),as(384,`button`,42),yT(385,`
              Right
            `),lu(),yT(386,`
          `),lu(),yT(387,`
        `),lu(),yT(388,`
      `),lu(),yT(389,`
    `),lu(),yT(390,`
  `),lu(),yT(391,`
  `),as(392,`c-col`,0),yT(393,`
    `),as(394,`c-card`,2),yT(395,`
      `),as(396,`c-card-header`),yT(397,`
        `),as(398,`strong`),yT(399,`Angular Button Group`),lu(),yT(400,` `),as(401,`span`),yT(402,`Nesting`),lu(),yT(403,`
      `),lu(),yT(404,`
      `),as(405,`c-card-body`),yT(406,`
        `),as(407,`p`,45),yT(408,`
          Put a `),as(409,`code`),yT(410,`<c-button-group>`),lu(),yT(411,` inside another
          `),as(412,`code`),yT(413,`<c-button-group>`),lu(),yT(414,` when you need dropdown menus combined with a series
          of buttons.
        `),lu(),yT(415,`
        `),as(416,`app-docs-example`,46),yT(417,`
          `),as(418,`c-button-group`,47),yT(419,`
            `),as(420,`button`,5),yT(421,`1`),lu(),yT(422,`
            `),as(423,`button`,5),yT(424,`2`),lu(),yT(425,`
            `),as(426,`c-dropdown`,48),yT(427,`
              `),as(428,`button`,49),yT(429,`
                Dropdown
              `),lu(),yT(430,`
              `),as(431,`ul`,50),yT(432,`
                `),as(433,`li`)(434,`a`,51),yT(435,`Action`),lu()(),yT(436,`
                `),as(437,`li`)(438,`a`,51),yT(439,`Another action`),lu()(),yT(440,`
                `),as(441,`li`)(442,`a`,51),yT(443,`Something else here`),lu()(),yT(444,`
                `),hm(445,`li`,52),yT(446,`
                `),as(447,`li`)(448,`a`,51),yT(449,`Separated link`),lu()(),yT(450,`
              `),lu(),yT(451,`
            `),lu(),yT(452,`
          `),lu(),yT(453,`
        `),lu(),yT(454,`
      `),lu(),yT(455,`
    `),lu(),yT(456,`
  `),lu(),yT(457,`
  `),as(458,`c-col`,0),yT(459,`
    `),as(460,`c-card`,2),yT(461,`
      `),as(462,`c-card-header`),yT(463,`
        `),as(464,`strong`),yT(465,`Angular Button Group`),lu(),yT(466,` `),as(467,`span`),yT(468,`Vertical variation`),lu(),yT(469,`
      `),lu(),yT(470,`
      `),as(471,`c-card-body`),yT(472,`
        `),as(473,`p`,45),yT(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),as(475,`strong`),yT(476,`Split button dropdowns are not supported here.`),lu(),yT(477,`
        `),lu(),yT(478,`
        `),as(479,`app-docs-example`,53),yT(480,`
          `),as(481,`c-button-group`,54),yT(482,`
            `),as(483,`button`,55),yT(484,`Button`),lu(),yT(485,`
            `),as(486,`button`,55),yT(487,`Button`),lu(),yT(488,`
            `),as(489,`button`,55),yT(490,`Button`),lu(),yT(491,`
            `),as(492,`button`,55),yT(493,`Button`),lu(),yT(494,`
            `),as(495,`button`,55),yT(496,`Button`),lu(),yT(497,`
            `),as(498,`button`,55),yT(499,`Button`),lu(),yT(500,`
            `),as(501,`button`,55),yT(502,`Button`),lu(),yT(503,`
          `),lu(),yT(504,`
          `),hm(505,`br`),yT(506,`
        `),lu(),yT(507,`
        `),as(508,`app-docs-example`,53),yT(509,`
          `),as(510,`c-button-group`,54),yT(511,`
            `),as(512,`button`,5),yT(513,`Button`),lu(),yT(514,`
            `),as(515,`button`,5),yT(516,`Button`),lu(),yT(517,`
            `),as(518,`c-dropdown`,48),yT(519,`
              `),as(520,`button`,49),yT(521,`
                Dropdown
              `),lu(),yT(522,`
              `),as(523,`ul`,50),yT(524,`
                `),as(525,`li`)(526,`a`,51),yT(527,`Action`),lu()(),yT(528,`
                `),as(529,`li`)(530,`a`,51),yT(531,`Another action`),lu()(),yT(532,`
                `),as(533,`li`)(534,`a`,51),yT(535,`Something else here`),lu()(),yT(536,`
                `),hm(537,`li`,52),yT(538,`
                `),as(539,`li`)(540,`a`,51),yT(541,`Separated link`),lu()(),yT(542,`
              `),lu(),yT(543,`
            `),lu(),yT(544,`
            `),as(545,`button`,5),yT(546,`Button`),lu(),yT(547,`
            `),as(548,`button`,5),yT(549,`Button`),lu(),yT(550,`
            `),as(551,`c-dropdown`,48),yT(552,`
              `),as(553,`button`,49),yT(554,`
                Dropdown
              `),lu(),yT(555,`
              `),as(556,`ul`,50),yT(557,`
                `),as(558,`li`)(559,`a`,51),yT(560,`Action`),lu()(),yT(561,`
                `),as(562,`li`)(563,`a`,51),yT(564,`Another action`),lu()(),yT(565,`
                `),as(566,`li`)(567,`a`,51),yT(568,`Something else here`),lu()(),yT(569,`
                `),hm(570,`li`,52),yT(571,`
                `),as(572,`li`)(573,`a`,51),yT(574,`Separated link`),lu()(),yT(575,`
              `),lu(),yT(576,`
            `),lu(),yT(577,`
            `),as(578,`c-dropdown`,56),yT(579,`
              `),as(580,`button`,49),yT(581,`
                Dropdown
              `),lu(),yT(582,`
              `),as(583,`ul`,57),yT(584,`
                `),as(585,`li`)(586,`a`,51),yT(587,`Action`),lu()(),yT(588,`
                `),as(589,`li`)(590,`a`,51),yT(591,`Another action`),lu()(),yT(592,`
                `),as(593,`li`)(594,`a`,51),yT(595,`Something else here`),lu()(),yT(596,`
                `),hm(597,`li`,52),yT(598,`
                `),as(599,`li`)(600,`a`,51),yT(601,`Separated link`),lu()(),yT(602,`
              `),lu(),yT(603,`
            `),lu(),yT(604,`
            `),as(605,`c-dropdown`,48),yT(606,`
              `),as(607,`button`,49),yT(608,`
                Dropdown
              `),lu(),yT(609,`
              `),as(610,`ul`,50),yT(611,`
                `),as(612,`li`)(613,`a`,51),yT(614,`Action`),lu()(),yT(615,`
                `),as(616,`li`)(617,`a`,51),yT(618,`Another action`),lu()(),yT(619,`
                `),as(620,`li`)(621,`a`,51),yT(622,`Something else here`),lu()(),yT(623,`
                `),hm(624,`li`,52),yT(625,`
                `),as(626,`li`)(627,`a`,51),yT(628,`Separated link`),lu()(),yT(629,`
              `),lu(),yT(630,`
            `),lu(),yT(631,`
          `),lu(),yT(632,`
        `),lu(),yT(633,`
        `),as(634,`app-docs-example`,53),yT(635,`
          `),as(636,`form`,17),yT(637,`
            `),as(638,`c-button-group`,54),yT(639,`
              `),as(640,`input`,25),Rw(),lu(),yT(641,`
              `),as(642,`label`,58),Tm(`click`,function(){return a.setRadioValue(`Radio1`)}),yT(643,`Radio 1`),lu(),yT(644,`

              `),as(645,`input`,26),Rw(),lu(),yT(646,`
              `),as(647,`label`,58),Tm(`click`,function(){return a.setRadioValue(`Radio2`)}),yT(648,`Radio 2`),lu(),yT(649,`

              `),as(650,`input`,27),Rw(),lu(),yT(651,`
              `),as(652,`label`,58),Tm(`click`,function(){return a.setRadioValue(`Radio3`)}),yT(653,`Radio
                3`),lu(),yT(654,`
            `),lu(),yT(655,`
          `),lu(),yT(656,`
        `),lu(),yT(657,`
      `),lu(),yT(658,`
    `),lu(),yT(659,`
  `),lu(),yT(660,`
`),lu()),s&2&&(ZD(53),pm(`active`,!0)(`routerLink`,xT(30,l)),ZD(3),pm(`routerLink`,xT(31,l)),ZD(3),pm(`routerLink`,xT(32,l)),ZD(94),pm(`formGroup`,a.formCheck1),ZD(4),Ow(),ZD(5),Ow(),ZD(5),Ow(),ZD(12),pm(`formGroup`,a.formRadio1),ZD(4),Ow(),ZD(5),Ow(),ZD(5),Ow(),ZD(241),pm(`routerLink`,xT(33,l)),ZD(4),pm(`routerLink`,xT(34,l)),ZD(4),pm(`routerLink`,xT(35,l)),ZD(6),pm(`routerLink`,xT(36,l)),ZD(33),pm(`vertical`,!0),ZD(29),pm(`vertical`,!0),ZD(16),pm(`routerLink`,xT(37,l)),ZD(4),pm(`routerLink`,xT(38,l)),ZD(4),pm(`routerLink`,xT(39,l)),ZD(6),pm(`routerLink`,xT(40,l)),ZD(19),pm(`routerLink`,xT(41,l)),ZD(4),pm(`routerLink`,xT(42,l)),ZD(4),pm(`routerLink`,xT(43,l)),ZD(6),pm(`routerLink`,xT(44,l)),ZD(13),pm(`routerLink`,xT(45,l)),ZD(4),pm(`routerLink`,xT(46,l)),ZD(4),pm(`routerLink`,xT(47,l)),ZD(6),pm(`routerLink`,xT(48,l)),ZD(13),pm(`routerLink`,xT(49,l)),ZD(4),pm(`routerLink`,xT(50,l)),ZD(4),pm(`routerLink`,xT(51,l)),ZD(6),pm(`routerLink`,xT(52,l)),ZD(9),pm(`formGroup`,a.formRadio1),ZD(2),pm(`vertical`,!0),ZD(2),Ow(),ZD(5),Ow(),ZD(5),Ow())},dependencies:[yF,mI,oo,YM,ro,$,WP,ao,ai,or,kN,xi,vD,XD,Ji,il,nr,ir,WC,KP,hF,fF,xc,In,Oi,ti,PC,AP,c],encapsulation:2})}};export{X as ButtonGroupsComponent};