import{Ct as _u,Fi as sl,Ft as fT,H as Nv,Hn as Dh,Hr as b,Nt as es,On as xi,Q as Ri,Sn as vu,Tn as wv,Ur as bE,aa as yw,bn as uT,di as hD,dn as rT,fr as Oi,k as JI,ki as ow,kt as dT,nn as mu,or as NE,pi as jI,q as Pv,qt as jI$1,r as $t,s as BI,xr as Th,zn as Ah,zt as gu}from"./main-5IL4V6AK.js";import{_ as qn,a as Mt,f as gn,g as ln,m as jn,n as Bn,o as Tn,p as hn,r as Hn,s as Un,u as Xe,x as zn}from"./chunk-DSE1fuZc.js";import{i as w}from"./chunk-DoEIP2nP.js";import{t as c}from"./chunk-bmXPd0og.js";var l=()=>[];var X=class b$1{constructor(){this.formBuilder=b(qn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new Bn({radio1:new Un(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b$1)}}static{this.ɵcmp=hD({type:b$1,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(Oi(0,`c-row`),ow(1,`
  `),Oi(2,`c-col`,0),ow(3,`
    `),Th(4,`app-docs-components`,1),ow(5,`
    `),Oi(6,`c-card`,2),ow(7,`
      `),Oi(8,`c-card-header`),ow(9,`
        `),Oi(10,`strong`),ow(11,`Angular Button Group`),sl(),ow(12,` `),Oi(13,`span`),ow(14,`Basic example`),sl(),ow(15,`
      `),sl(),ow(16,`
      `),Oi(17,`c-card-body`),ow(18,`
        `),Oi(19,`p`),ow(20,`
          Wrap a series of `),Oi(21,`code`),ow(22,`<CButton>`),sl(),ow(23,` components in
          `),Oi(24,`code`),ow(25,`<c-button-group>`),sl(),ow(26,`.
        `),sl(),ow(27,`
        `),Oi(28,`app-docs-example`,3),ow(29,`
          `),Oi(30,`c-button-group`,4),ow(31,`
            `),Oi(32,`button`,5),ow(33,`Left`),sl(),ow(34,`
            `),Oi(35,`button`,5),ow(36,`Middle`),sl(),ow(37,`
            `),Oi(38,`button`,5),ow(39,`Right`),sl(),ow(40,`
          `),sl(),ow(41,`
        `),sl(),ow(42,`
        `),Oi(43,`p`),ow(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),Oi(45,`code`),ow(46,`<CNav>`),sl(),ow(47,` components.
        `),sl(),ow(48,`
        `),Oi(49,`app-docs-example`,3),ow(50,`
          `),Oi(51,`c-button-group`),ow(52,`
            `),Oi(53,`a`,6),ow(54,`
              Active link
            `),sl(),ow(55,`
            `),Oi(56,`a`,7),ow(57,`
              Link
            `),sl(),ow(58,`
            `),Oi(59,`a`,7),ow(60,`
              Link
            `),sl(),ow(61,`
          `),sl(),ow(62,`
        `),sl(),ow(63,`
      `),sl(),ow(64,`
    `),sl(),ow(65,`
  `),sl(),ow(66,`
  `),Oi(67,`c-col`,0),ow(68,`
    `),Oi(69,`c-card`,2),ow(70,`
      `),Oi(71,`c-card-header`),ow(72,`
        `),Oi(73,`strong`),ow(74,`Angular Button Group`),sl(),ow(75,` `),Oi(76,`span`),ow(77,`Mixed styles`),sl(),ow(78,`
      `),sl(),ow(79,`
      `),Oi(80,`c-card-body`),ow(81,`
        `),Oi(82,`app-docs-example`,8),ow(83,`
          `),Oi(84,`c-button-group`,9),ow(85,`
            `),Oi(86,`button`,10),ow(87,`Left`),sl(),ow(88,`
            `),Oi(89,`button`,11),ow(90,`Middle`),sl(),ow(91,`
            `),Oi(92,`button`,12),ow(93,`Right`),sl(),ow(94,`
          `),sl(),ow(95,`
        `),sl(),ow(96,`
      `),sl(),ow(97,`
    `),sl(),ow(98,`
  `),sl(),ow(99,`
  `),Oi(100,`c-col`,0),ow(101,`
    `),Oi(102,`c-card`,2),ow(103,`
      `),Oi(104,`c-card-header`),ow(105,`
        `),Oi(106,`strong`),ow(107,`Angular Button Group`),sl(),ow(108,` `),Oi(109,`span`),ow(110,`Outlined styles`),sl(),ow(111,`
      `),sl(),ow(112,`
      `),Oi(113,`c-card-body`),ow(114,`
        `),Oi(115,`app-docs-example`,13),ow(116,`
          `),Oi(117,`c-button-group`,14),ow(118,`
            `),Oi(119,`button`,15),ow(120,`
              Left
            `),sl(),ow(121,`
            `),Oi(122,`button`,15),ow(123,`
              Middle
            `),sl(),ow(124,`
            `),Oi(125,`button`,15),ow(126,`
              Right
            `),sl(),ow(127,`
          `),sl(),ow(128,`
        `),sl(),ow(129,`
      `),sl(),ow(130,`
    `),sl(),ow(131,`
  `),sl(),ow(132,`
  `),Oi(133,`c-col`,0),ow(134,`
    `),Oi(135,`c-card`,2),ow(136,`
      `),Oi(137,`c-card-header`),ow(138,`
        `),Oi(139,`strong`),ow(140,`Angular Button Group`),sl(),ow(141,` `),Oi(142,`span`),ow(143,`Checkbox and radio button groups`),sl(),ow(144,`
      `),sl(),ow(145,`
      `),Oi(146,`c-card-body`),ow(147,`
        `),Oi(148,`p`),ow(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),sl(),ow(150,`
        `),Oi(151,`app-docs-example`,16),ow(152,`
          `),Oi(153,`form`,17),ow(154,`
            `),Oi(155,`c-button-group`,18),ow(156,`
              `),Th(157,`input`,19),bE(),ow(158,`
              `),Oi(159,`label`,20),Ah(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),ow(160,`Checkbox 1`),sl(),ow(161,`

              `),Th(162,`input`,21),bE(),ow(163,`
              `),Oi(164,`label`,20),Ah(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),ow(165,`Checkbox 2`),sl(),ow(166,`

              `),Th(167,`input`,22),bE(),ow(168,`
              `),Oi(169,`label`,20),Ah(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),ow(170,`Checkbox
                3`),sl(),ow(171,`
            `),sl(),ow(172,`
          `),sl(),ow(173,`
          `),Th(174,`br`,23),ow(175,`
        `),sl(),ow(176,`
        `),Oi(177,`app-docs-example`,16),ow(178,`
          `),Oi(179,`form`,17),ow(180,`
            `),Oi(181,`c-button-group`,24),ow(182,`
              `),Th(183,`input`,25),bE(),ow(184,`
              `),Oi(185,`label`,20),Ah(`click`,function(){return m.setRadioValue(`Radio1`)}),ow(186,`Radio 1`),sl(),ow(187,`

              `),Th(188,`input`,26),bE(),ow(189,`
              `),Oi(190,`label`,20),Ah(`click`,function(){return m.setRadioValue(`Radio2`)}),ow(191,`Radio 2`),sl(),ow(192,`

              `),Th(193,`input`,27),bE(),ow(194,`
              `),Oi(195,`label`,20),Ah(`click`,function(){return m.setRadioValue(`Radio3`)}),ow(196,`Radio 3`),sl(),ow(197,`
            `),sl(),ow(198,`
          `),sl(),ow(199,`
        `),sl(),ow(200,`
      `),sl(),ow(201,`
    `),sl(),ow(202,`
  `),sl(),ow(203,`
  `),Oi(204,`c-col`,0),ow(205,`
    `),Oi(206,`c-card`,2),ow(207,`
      `),Oi(208,`c-card-header`),ow(209,`
        `),Oi(210,`strong`),ow(211,`Angular Button Group`),sl(),ow(212,` `),Oi(213,`span`),ow(214,`Button toolbar`),sl(),ow(215,`
      `),sl(),ow(216,`
      `),Oi(217,`c-card-body`),ow(218,`
        `),Oi(219,`p`),ow(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),sl(),ow(221,`
        `),Oi(222,`app-docs-example`,28),ow(223,`
          `),Oi(224,`c-button-toolbar`,29),ow(225,`
            `),Oi(226,`c-button-group`,30),ow(227,`
              `),Oi(228,`button`,5),ow(229,`1`),sl(),ow(230,`
              `),Oi(231,`button`,5),ow(232,`2`),sl(),ow(233,`
              `),Oi(234,`button`,5),ow(235,`3`),sl(),ow(236,`
              `),Oi(237,`button`,5),ow(238,`4`),sl(),ow(239,`
            `),sl(),ow(240,`
            `),Oi(241,`c-button-group`,31),ow(242,`
              `),Oi(243,`button`,32),ow(244,`5`),sl(),ow(245,`
              `),Oi(246,`button`,32),ow(247,`6`),sl(),ow(248,`
              `),Oi(249,`button`,32),ow(250,`7`),sl(),ow(251,`
            `),sl(),ow(252,`
            `),Oi(253,`c-button-group`,33),ow(254,`
              `),Oi(255,`button`,34),ow(256,`8`),sl(),ow(257,`
            `),sl(),ow(258,`
          `),sl(),ow(259,`
        `),sl(),ow(260,`
        `),Oi(261,`p`),ow(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),sl(),ow(263,`
        `),Oi(264,`app-docs-example`,28),ow(265,`
          `),Oi(266,`c-button-toolbar`,35),ow(267,`
            `),Oi(268,`c-button-group`,30),ow(269,`
              `),Oi(270,`button`,36),ow(271,`
                1
              `),sl(),ow(272,`
              `),Oi(273,`button`,36),ow(274,`
                2
              `),sl(),ow(275,`
              `),Oi(276,`button`,36),ow(277,`
                3
              `),sl(),ow(278,`
              `),Oi(279,`button`,36),ow(280,`
                4
              `),sl(),ow(281,`
            `),sl(),ow(282,`
            `),Oi(283,`c-input-group`),ow(284,`
              `),Oi(285,`span`,37),ow(286,`@`),sl(),ow(287,`
              `),Th(288,`input`,38),ow(289,`
            `),sl(),ow(290,`
          `),sl(),ow(291,`
          `),Oi(292,`c-button-toolbar`,39),ow(293,`
            `),Oi(294,`c-button-group`,30),ow(295,`
              `),Oi(296,`button`,36),ow(297,`
                1
              `),sl(),ow(298,`
              `),Oi(299,`button`,36),ow(300,`
                2
              `),sl(),ow(301,`
              `),Oi(302,`button`,36),ow(303,`
                3
              `),sl(),ow(304,`
              `),Oi(305,`button`,36),ow(306,`
                4
              `),sl(),ow(307,`
            `),sl(),ow(308,`
            `),Oi(309,`c-input-group`),ow(310,`
              `),Oi(311,`span`,37),ow(312,`@`),sl(),ow(313,`
              `),Th(314,`input`,38),ow(315,`
            `),sl(),ow(316,`
          `),sl(),ow(317,`
        `),sl(),ow(318,`
      `),sl(),ow(319,`
    `),sl(),ow(320,`
  `),sl(),ow(321,`
  `),Oi(322,`c-col`,0),ow(323,`
    `),Oi(324,`c-card`,2),ow(325,`
      `),Oi(326,`c-card-header`),ow(327,`
        `),Oi(328,`strong`),ow(329,`Angular Button Group`),sl(),ow(330,` `),Oi(331,`span`),ow(332,`Sizing`),sl(),ow(333,`
      `),sl(),ow(334,`
      `),Oi(335,`c-card-body`),ow(336,`
        `),Oi(337,`p`),ow(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),Oi(339,`code`),ow(340,`size`),sl(),ow(341,` property to all `),Oi(342,`code`),ow(343,`<c-button-group>`),sl(),ow(344,`'s, including
          each one when nesting multiple groups.
        `),sl(),ow(345,`
        `),Oi(346,`app-docs-example`,40),ow(347,`
          `),Oi(348,`c-button-group`,41),ow(349,`
            `),Oi(350,`button`,42),ow(351,`
              Left
            `),sl(),ow(352,`
            `),Oi(353,`button`,42),ow(354,`
              Middle
            `),sl(),ow(355,`
            `),Oi(356,`button`,42),ow(357,`
              Right
            `),sl(),ow(358,`
          `),sl(),ow(359,`
          `),Th(360,`br`),ow(361,`
          `),Oi(362,`c-button-group`,43),ow(363,`
            `),Oi(364,`button`,42),ow(365,`
              Left
            `),sl(),ow(366,`
            `),Oi(367,`button`,42),ow(368,`
              Middle
            `),sl(),ow(369,`
            `),Oi(370,`button`,42),ow(371,`
              Right
            `),sl(),ow(372,`
          `),sl(),ow(373,`
          `),Th(374,`br`),ow(375,`
          `),Oi(376,`c-button-group`,44),ow(377,`
            `),Oi(378,`button`,42),ow(379,`
              Left
            `),sl(),ow(380,`
            `),Oi(381,`button`,42),ow(382,`
              Middle
            `),sl(),ow(383,`
            `),Oi(384,`button`,42),ow(385,`
              Right
            `),sl(),ow(386,`
          `),sl(),ow(387,`
        `),sl(),ow(388,`
      `),sl(),ow(389,`
    `),sl(),ow(390,`
  `),sl(),ow(391,`
  `),Oi(392,`c-col`,0),ow(393,`
    `),Oi(394,`c-card`,2),ow(395,`
      `),Oi(396,`c-card-header`),ow(397,`
        `),Oi(398,`strong`),ow(399,`Angular Button Group`),sl(),ow(400,` `),Oi(401,`span`),ow(402,`Nesting`),sl(),ow(403,`
      `),sl(),ow(404,`
      `),Oi(405,`c-card-body`),ow(406,`
        `),Oi(407,`p`,45),ow(408,`
          Put a `),Oi(409,`code`),ow(410,`<c-button-group>`),sl(),ow(411,` inside another
          `),Oi(412,`code`),ow(413,`<c-button-group>`),sl(),ow(414,` when you need dropdown menus combined with a series
          of buttons.
        `),sl(),ow(415,`
        `),Oi(416,`app-docs-example`,46),ow(417,`
          `),Oi(418,`c-button-group`,47),ow(419,`
            `),Oi(420,`button`,5),ow(421,`1`),sl(),ow(422,`
            `),Oi(423,`button`,5),ow(424,`2`),sl(),ow(425,`
            `),Oi(426,`c-dropdown`,48),ow(427,`
              `),Oi(428,`button`,49),ow(429,`
                Dropdown
              `),sl(),ow(430,`
              `),Oi(431,`ul`,50),ow(432,`
                `),Oi(433,`li`)(434,`a`,51),ow(435,`Action`),sl()(),ow(436,`
                `),Oi(437,`li`)(438,`a`,51),ow(439,`Another action`),sl()(),ow(440,`
                `),Oi(441,`li`)(442,`a`,51),ow(443,`Something else here`),sl()(),ow(444,`
                `),Th(445,`li`,52),ow(446,`
                `),Oi(447,`li`)(448,`a`,51),ow(449,`Separated link`),sl()(),ow(450,`
              `),sl(),ow(451,`
            `),sl(),ow(452,`
          `),sl(),ow(453,`
        `),sl(),ow(454,`
      `),sl(),ow(455,`
    `),sl(),ow(456,`
  `),sl(),ow(457,`
  `),Oi(458,`c-col`,0),ow(459,`
    `),Oi(460,`c-card`,2),ow(461,`
      `),Oi(462,`c-card-header`),ow(463,`
        `),Oi(464,`strong`),ow(465,`Angular Button Group`),sl(),ow(466,` `),Oi(467,`span`),ow(468,`Vertical variation`),sl(),ow(469,`
      `),sl(),ow(470,`
      `),Oi(471,`c-card-body`),ow(472,`
        `),Oi(473,`p`,45),ow(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),Oi(475,`strong`),ow(476,`Split button dropdowns are not supported here.`),sl(),ow(477,`
        `),sl(),ow(478,`
        `),Oi(479,`app-docs-example`,53),ow(480,`
          `),Oi(481,`c-button-group`,54),ow(482,`
            `),Oi(483,`button`,55),ow(484,`Button`),sl(),ow(485,`
            `),Oi(486,`button`,55),ow(487,`Button`),sl(),ow(488,`
            `),Oi(489,`button`,55),ow(490,`Button`),sl(),ow(491,`
            `),Oi(492,`button`,55),ow(493,`Button`),sl(),ow(494,`
            `),Oi(495,`button`,55),ow(496,`Button`),sl(),ow(497,`
            `),Oi(498,`button`,55),ow(499,`Button`),sl(),ow(500,`
            `),Oi(501,`button`,55),ow(502,`Button`),sl(),ow(503,`
          `),sl(),ow(504,`
          `),Th(505,`br`),ow(506,`
        `),sl(),ow(507,`
        `),Oi(508,`app-docs-example`,53),ow(509,`
          `),Oi(510,`c-button-group`,54),ow(511,`
            `),Oi(512,`button`,5),ow(513,`Button`),sl(),ow(514,`
            `),Oi(515,`button`,5),ow(516,`Button`),sl(),ow(517,`
            `),Oi(518,`c-dropdown`,48),ow(519,`
              `),Oi(520,`button`,49),ow(521,`
                Dropdown
              `),sl(),ow(522,`
              `),Oi(523,`ul`,50),ow(524,`
                `),Oi(525,`li`)(526,`a`,51),ow(527,`Action`),sl()(),ow(528,`
                `),Oi(529,`li`)(530,`a`,51),ow(531,`Another action`),sl()(),ow(532,`
                `),Oi(533,`li`)(534,`a`,51),ow(535,`Something else here`),sl()(),ow(536,`
                `),Th(537,`li`,52),ow(538,`
                `),Oi(539,`li`)(540,`a`,51),ow(541,`Separated link`),sl()(),ow(542,`
              `),sl(),ow(543,`
            `),sl(),ow(544,`
            `),Oi(545,`button`,5),ow(546,`Button`),sl(),ow(547,`
            `),Oi(548,`button`,5),ow(549,`Button`),sl(),ow(550,`
            `),Oi(551,`c-dropdown`,48),ow(552,`
              `),Oi(553,`button`,49),ow(554,`
                Dropdown
              `),sl(),ow(555,`
              `),Oi(556,`ul`,50),ow(557,`
                `),Oi(558,`li`)(559,`a`,51),ow(560,`Action`),sl()(),ow(561,`
                `),Oi(562,`li`)(563,`a`,51),ow(564,`Another action`),sl()(),ow(565,`
                `),Oi(566,`li`)(567,`a`,51),ow(568,`Something else here`),sl()(),ow(569,`
                `),Th(570,`li`,52),ow(571,`
                `),Oi(572,`li`)(573,`a`,51),ow(574,`Separated link`),sl()(),ow(575,`
              `),sl(),ow(576,`
            `),sl(),ow(577,`
            `),Oi(578,`c-dropdown`,56),ow(579,`
              `),Oi(580,`button`,49),ow(581,`
                Dropdown
              `),sl(),ow(582,`
              `),Oi(583,`ul`,57),ow(584,`
                `),Oi(585,`li`)(586,`a`,51),ow(587,`Action`),sl()(),ow(588,`
                `),Oi(589,`li`)(590,`a`,51),ow(591,`Another action`),sl()(),ow(592,`
                `),Oi(593,`li`)(594,`a`,51),ow(595,`Something else here`),sl()(),ow(596,`
                `),Th(597,`li`,52),ow(598,`
                `),Oi(599,`li`)(600,`a`,51),ow(601,`Separated link`),sl()(),ow(602,`
              `),sl(),ow(603,`
            `),sl(),ow(604,`
            `),Oi(605,`c-dropdown`,48),ow(606,`
              `),Oi(607,`button`,49),ow(608,`
                Dropdown
              `),sl(),ow(609,`
              `),Oi(610,`ul`,50),ow(611,`
                `),Oi(612,`li`)(613,`a`,51),ow(614,`Action`),sl()(),ow(615,`
                `),Oi(616,`li`)(617,`a`,51),ow(618,`Another action`),sl()(),ow(619,`
                `),Oi(620,`li`)(621,`a`,51),ow(622,`Something else here`),sl()(),ow(623,`
                `),Th(624,`li`,52),ow(625,`
                `),Oi(626,`li`)(627,`a`,51),ow(628,`Separated link`),sl()(),ow(629,`
              `),sl(),ow(630,`
            `),sl(),ow(631,`
          `),sl(),ow(632,`
        `),sl(),ow(633,`
        `),Oi(634,`app-docs-example`,53),ow(635,`
          `),Oi(636,`form`,17),ow(637,`
            `),Oi(638,`c-button-group`,54),ow(639,`
              `),Th(640,`input`,25),bE(),ow(641,`
              `),Oi(642,`label`,58),Ah(`click`,function(){return m.setRadioValue(`Radio1`)}),ow(643,`Radio 1`),sl(),ow(644,`

              `),Th(645,`input`,26),bE(),ow(646,`
              `),Oi(647,`label`,58),Ah(`click`,function(){return m.setRadioValue(`Radio2`)}),ow(648,`Radio 2`),sl(),ow(649,`

              `),Th(650,`input`,27),bE(),ow(651,`
              `),Oi(652,`label`,58),Ah(`click`,function(){return m.setRadioValue(`Radio3`)}),ow(653,`Radio
                3`),sl(),ow(654,`
            `),sl(),ow(655,`
          `),sl(),ow(656,`
        `),sl(),ow(657,`
      `),sl(),ow(658,`
    `),sl(),ow(659,`
  `),sl(),ow(660,`
`),sl()),s&2&&(jI(53),Dh(`active`,!0)(`routerLink`,yw(30,l)),jI(3),Dh(`routerLink`,yw(31,l)),jI(3),Dh(`routerLink`,yw(32,l)),jI(94),Dh(`formGroup`,m.formCheck1),jI(4),NE(),jI(5),NE(),jI(5),NE(),jI(12),Dh(`formGroup`,m.formRadio1),jI(4),NE(),jI(5),NE(),jI(5),NE(),jI(241),Dh(`routerLink`,yw(33,l)),jI(4),Dh(`routerLink`,yw(34,l)),jI(4),Dh(`routerLink`,yw(35,l)),jI(6),Dh(`routerLink`,yw(36,l)),jI(33),Dh(`vertical`,!0),jI(29),Dh(`vertical`,!0),jI(16),Dh(`routerLink`,yw(37,l)),jI(4),Dh(`routerLink`,yw(38,l)),jI(4),Dh(`routerLink`,yw(39,l)),jI(6),Dh(`routerLink`,yw(40,l)),jI(19),Dh(`routerLink`,yw(41,l)),jI(4),Dh(`routerLink`,yw(42,l)),jI(4),Dh(`routerLink`,yw(43,l)),jI(6),Dh(`routerLink`,yw(44,l)),jI(13),Dh(`routerLink`,yw(45,l)),jI(4),Dh(`routerLink`,yw(46,l)),jI(4),Dh(`routerLink`,yw(47,l)),jI(6),Dh(`routerLink`,yw(48,l)),jI(13),Dh(`routerLink`,yw(49,l)),jI(4),Dh(`routerLink`,yw(50,l)),jI(4),Dh(`routerLink`,yw(51,l)),jI(6),Dh(`routerLink`,yw(52,l)),jI(9),Dh(`formGroup`,m.formRadio1),jI(2),Dh(`vertical`,!0),jI(2),NE(),jI(5),NE(),jI(5),NE())},dependencies:[fT,Pv,xi,Nv,Ri,w,BI,wv,$t,zn,Hn,Xe,Mt,ln,Tn,jn,gn,hn,vu,jI$1,dT,uT,rT,_u,mu,es,gu,JI,c],encapsulation:2})}};export{X as ButtonGroupsComponent};