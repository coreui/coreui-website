import{Bt as gu,Cn as vu,Ct as _u,En as wv,Fn as AE,Ft as fT,H as Nv,Hn as Ch,Jn as Ew,Jt as jI,Nt as es,Q as Ri,Xr as aw,Zr as b,cr as ME,fa as yD,fn as rT,k as JI,kn as xi,kt as dT,la as wh,ni as cl,q as Pv,r as $t,rn as mu,s as BI$1,vr as Oi,wi as kh,xn as uT,zn as BI}from"./main-PRJKJRLJ.js";import{_ as qn,a as Mt,f as gn,g as ln,m as jn,n as Bn,o as Tn,p as hn,r as Hn,s as Un,u as Xe,x as zn}from"./chunk-BiXV7LNt.js";import{t as E}from"./chunk-pZZ3qGEM.js";import{t as c}from"./chunk-CvPf1mHO.js";var l=()=>[];var X=class b$1{constructor(){this.formBuilder=b(qn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new Bn({radio1:new Un(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b$1)}}static{this.ɵcmp=yD({type:b$1,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(Oi(0,`c-row`),aw(1,`
  `),Oi(2,`c-col`,0),aw(3,`
    `),Ch(4,`app-docs-components`,1),aw(5,`
    `),Oi(6,`c-card`,2),aw(7,`
      `),Oi(8,`c-card-header`),aw(9,`
        `),Oi(10,`strong`),aw(11,`Angular Button Group`),cl(),aw(12,` `),Oi(13,`span`),aw(14,`Basic example`),cl(),aw(15,`
      `),cl(),aw(16,`
      `),Oi(17,`c-card-body`),aw(18,`
        `),Oi(19,`p`),aw(20,`
          Wrap a series of `),Oi(21,`code`),aw(22,`<CButton>`),cl(),aw(23,` components in
          `),Oi(24,`code`),aw(25,`<c-button-group>`),cl(),aw(26,`.
        `),cl(),aw(27,`
        `),Oi(28,`app-docs-example`,3),aw(29,`
          `),Oi(30,`c-button-group`,4),aw(31,`
            `),Oi(32,`button`,5),aw(33,`Left`),cl(),aw(34,`
            `),Oi(35,`button`,5),aw(36,`Middle`),cl(),aw(37,`
            `),Oi(38,`button`,5),aw(39,`Right`),cl(),aw(40,`
          `),cl(),aw(41,`
        `),cl(),aw(42,`
        `),Oi(43,`p`),aw(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),Oi(45,`code`),aw(46,`<CNav>`),cl(),aw(47,` components.
        `),cl(),aw(48,`
        `),Oi(49,`app-docs-example`,3),aw(50,`
          `),Oi(51,`c-button-group`),aw(52,`
            `),Oi(53,`a`,6),aw(54,`
              Active link
            `),cl(),aw(55,`
            `),Oi(56,`a`,7),aw(57,`
              Link
            `),cl(),aw(58,`
            `),Oi(59,`a`,7),aw(60,`
              Link
            `),cl(),aw(61,`
          `),cl(),aw(62,`
        `),cl(),aw(63,`
      `),cl(),aw(64,`
    `),cl(),aw(65,`
  `),cl(),aw(66,`
  `),Oi(67,`c-col`,0),aw(68,`
    `),Oi(69,`c-card`,2),aw(70,`
      `),Oi(71,`c-card-header`),aw(72,`
        `),Oi(73,`strong`),aw(74,`Angular Button Group`),cl(),aw(75,` `),Oi(76,`span`),aw(77,`Mixed styles`),cl(),aw(78,`
      `),cl(),aw(79,`
      `),Oi(80,`c-card-body`),aw(81,`
        `),Oi(82,`app-docs-example`,8),aw(83,`
          `),Oi(84,`c-button-group`,9),aw(85,`
            `),Oi(86,`button`,10),aw(87,`Left`),cl(),aw(88,`
            `),Oi(89,`button`,11),aw(90,`Middle`),cl(),aw(91,`
            `),Oi(92,`button`,12),aw(93,`Right`),cl(),aw(94,`
          `),cl(),aw(95,`
        `),cl(),aw(96,`
      `),cl(),aw(97,`
    `),cl(),aw(98,`
  `),cl(),aw(99,`
  `),Oi(100,`c-col`,0),aw(101,`
    `),Oi(102,`c-card`,2),aw(103,`
      `),Oi(104,`c-card-header`),aw(105,`
        `),Oi(106,`strong`),aw(107,`Angular Button Group`),cl(),aw(108,` `),Oi(109,`span`),aw(110,`Outlined styles`),cl(),aw(111,`
      `),cl(),aw(112,`
      `),Oi(113,`c-card-body`),aw(114,`
        `),Oi(115,`app-docs-example`,13),aw(116,`
          `),Oi(117,`c-button-group`,14),aw(118,`
            `),Oi(119,`button`,15),aw(120,`
              Left
            `),cl(),aw(121,`
            `),Oi(122,`button`,15),aw(123,`
              Middle
            `),cl(),aw(124,`
            `),Oi(125,`button`,15),aw(126,`
              Right
            `),cl(),aw(127,`
          `),cl(),aw(128,`
        `),cl(),aw(129,`
      `),cl(),aw(130,`
    `),cl(),aw(131,`
  `),cl(),aw(132,`
  `),Oi(133,`c-col`,0),aw(134,`
    `),Oi(135,`c-card`,2),aw(136,`
      `),Oi(137,`c-card-header`),aw(138,`
        `),Oi(139,`strong`),aw(140,`Angular Button Group`),cl(),aw(141,` `),Oi(142,`span`),aw(143,`Checkbox and radio button groups`),cl(),aw(144,`
      `),cl(),aw(145,`
      `),Oi(146,`c-card-body`),aw(147,`
        `),Oi(148,`p`),aw(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),cl(),aw(150,`
        `),Oi(151,`app-docs-example`,16),aw(152,`
          `),Oi(153,`form`,17),aw(154,`
            `),Oi(155,`c-button-group`,18),aw(156,`
              `),Ch(157,`input`,19),ME(),aw(158,`
              `),Oi(159,`label`,20),kh(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),aw(160,`Checkbox 1`),cl(),aw(161,`

              `),Ch(162,`input`,21),ME(),aw(163,`
              `),Oi(164,`label`,20),kh(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),aw(165,`Checkbox 2`),cl(),aw(166,`

              `),Ch(167,`input`,22),ME(),aw(168,`
              `),Oi(169,`label`,20),kh(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),aw(170,`Checkbox
                3`),cl(),aw(171,`
            `),cl(),aw(172,`
          `),cl(),aw(173,`
          `),Ch(174,`br`,23),aw(175,`
        `),cl(),aw(176,`
        `),Oi(177,`app-docs-example`,16),aw(178,`
          `),Oi(179,`form`,17),aw(180,`
            `),Oi(181,`c-button-group`,24),aw(182,`
              `),Ch(183,`input`,25),ME(),aw(184,`
              `),Oi(185,`label`,20),kh(`click`,function(){return m.setRadioValue(`Radio1`)}),aw(186,`Radio 1`),cl(),aw(187,`

              `),Ch(188,`input`,26),ME(),aw(189,`
              `),Oi(190,`label`,20),kh(`click`,function(){return m.setRadioValue(`Radio2`)}),aw(191,`Radio 2`),cl(),aw(192,`

              `),Ch(193,`input`,27),ME(),aw(194,`
              `),Oi(195,`label`,20),kh(`click`,function(){return m.setRadioValue(`Radio3`)}),aw(196,`Radio 3`),cl(),aw(197,`
            `),cl(),aw(198,`
          `),cl(),aw(199,`
        `),cl(),aw(200,`
      `),cl(),aw(201,`
    `),cl(),aw(202,`
  `),cl(),aw(203,`
  `),Oi(204,`c-col`,0),aw(205,`
    `),Oi(206,`c-card`,2),aw(207,`
      `),Oi(208,`c-card-header`),aw(209,`
        `),Oi(210,`strong`),aw(211,`Angular Button Group`),cl(),aw(212,` `),Oi(213,`span`),aw(214,`Button toolbar`),cl(),aw(215,`
      `),cl(),aw(216,`
      `),Oi(217,`c-card-body`),aw(218,`
        `),Oi(219,`p`),aw(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),cl(),aw(221,`
        `),Oi(222,`app-docs-example`,28),aw(223,`
          `),Oi(224,`c-button-toolbar`,29),aw(225,`
            `),Oi(226,`c-button-group`,30),aw(227,`
              `),Oi(228,`button`,5),aw(229,`1`),cl(),aw(230,`
              `),Oi(231,`button`,5),aw(232,`2`),cl(),aw(233,`
              `),Oi(234,`button`,5),aw(235,`3`),cl(),aw(236,`
              `),Oi(237,`button`,5),aw(238,`4`),cl(),aw(239,`
            `),cl(),aw(240,`
            `),Oi(241,`c-button-group`,31),aw(242,`
              `),Oi(243,`button`,32),aw(244,`5`),cl(),aw(245,`
              `),Oi(246,`button`,32),aw(247,`6`),cl(),aw(248,`
              `),Oi(249,`button`,32),aw(250,`7`),cl(),aw(251,`
            `),cl(),aw(252,`
            `),Oi(253,`c-button-group`,33),aw(254,`
              `),Oi(255,`button`,34),aw(256,`8`),cl(),aw(257,`
            `),cl(),aw(258,`
          `),cl(),aw(259,`
        `),cl(),aw(260,`
        `),Oi(261,`p`),aw(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),cl(),aw(263,`
        `),Oi(264,`app-docs-example`,28),aw(265,`
          `),Oi(266,`c-button-toolbar`,35),aw(267,`
            `),Oi(268,`c-button-group`,30),aw(269,`
              `),Oi(270,`button`,36),aw(271,`
                1
              `),cl(),aw(272,`
              `),Oi(273,`button`,36),aw(274,`
                2
              `),cl(),aw(275,`
              `),Oi(276,`button`,36),aw(277,`
                3
              `),cl(),aw(278,`
              `),Oi(279,`button`,36),aw(280,`
                4
              `),cl(),aw(281,`
            `),cl(),aw(282,`
            `),Oi(283,`c-input-group`),aw(284,`
              `),Oi(285,`span`,37),aw(286,`@`),cl(),aw(287,`
              `),Ch(288,`input`,38),aw(289,`
            `),cl(),aw(290,`
          `),cl(),aw(291,`
          `),Oi(292,`c-button-toolbar`,39),aw(293,`
            `),Oi(294,`c-button-group`,30),aw(295,`
              `),Oi(296,`button`,36),aw(297,`
                1
              `),cl(),aw(298,`
              `),Oi(299,`button`,36),aw(300,`
                2
              `),cl(),aw(301,`
              `),Oi(302,`button`,36),aw(303,`
                3
              `),cl(),aw(304,`
              `),Oi(305,`button`,36),aw(306,`
                4
              `),cl(),aw(307,`
            `),cl(),aw(308,`
            `),Oi(309,`c-input-group`),aw(310,`
              `),Oi(311,`span`,37),aw(312,`@`),cl(),aw(313,`
              `),Ch(314,`input`,38),aw(315,`
            `),cl(),aw(316,`
          `),cl(),aw(317,`
        `),cl(),aw(318,`
      `),cl(),aw(319,`
    `),cl(),aw(320,`
  `),cl(),aw(321,`
  `),Oi(322,`c-col`,0),aw(323,`
    `),Oi(324,`c-card`,2),aw(325,`
      `),Oi(326,`c-card-header`),aw(327,`
        `),Oi(328,`strong`),aw(329,`Angular Button Group`),cl(),aw(330,` `),Oi(331,`span`),aw(332,`Sizing`),cl(),aw(333,`
      `),cl(),aw(334,`
      `),Oi(335,`c-card-body`),aw(336,`
        `),Oi(337,`p`),aw(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),Oi(339,`code`),aw(340,`size`),cl(),aw(341,` property to all `),Oi(342,`code`),aw(343,`<c-button-group>`),cl(),aw(344,`'s, including
          each one when nesting multiple groups.
        `),cl(),aw(345,`
        `),Oi(346,`app-docs-example`,40),aw(347,`
          `),Oi(348,`c-button-group`,41),aw(349,`
            `),Oi(350,`button`,42),aw(351,`
              Left
            `),cl(),aw(352,`
            `),Oi(353,`button`,42),aw(354,`
              Middle
            `),cl(),aw(355,`
            `),Oi(356,`button`,42),aw(357,`
              Right
            `),cl(),aw(358,`
          `),cl(),aw(359,`
          `),Ch(360,`br`),aw(361,`
          `),Oi(362,`c-button-group`,43),aw(363,`
            `),Oi(364,`button`,42),aw(365,`
              Left
            `),cl(),aw(366,`
            `),Oi(367,`button`,42),aw(368,`
              Middle
            `),cl(),aw(369,`
            `),Oi(370,`button`,42),aw(371,`
              Right
            `),cl(),aw(372,`
          `),cl(),aw(373,`
          `),Ch(374,`br`),aw(375,`
          `),Oi(376,`c-button-group`,44),aw(377,`
            `),Oi(378,`button`,42),aw(379,`
              Left
            `),cl(),aw(380,`
            `),Oi(381,`button`,42),aw(382,`
              Middle
            `),cl(),aw(383,`
            `),Oi(384,`button`,42),aw(385,`
              Right
            `),cl(),aw(386,`
          `),cl(),aw(387,`
        `),cl(),aw(388,`
      `),cl(),aw(389,`
    `),cl(),aw(390,`
  `),cl(),aw(391,`
  `),Oi(392,`c-col`,0),aw(393,`
    `),Oi(394,`c-card`,2),aw(395,`
      `),Oi(396,`c-card-header`),aw(397,`
        `),Oi(398,`strong`),aw(399,`Angular Button Group`),cl(),aw(400,` `),Oi(401,`span`),aw(402,`Nesting`),cl(),aw(403,`
      `),cl(),aw(404,`
      `),Oi(405,`c-card-body`),aw(406,`
        `),Oi(407,`p`,45),aw(408,`
          Put a `),Oi(409,`code`),aw(410,`<c-button-group>`),cl(),aw(411,` inside another
          `),Oi(412,`code`),aw(413,`<c-button-group>`),cl(),aw(414,` when you need dropdown menus combined with a series
          of buttons.
        `),cl(),aw(415,`
        `),Oi(416,`app-docs-example`,46),aw(417,`
          `),Oi(418,`c-button-group`,47),aw(419,`
            `),Oi(420,`button`,5),aw(421,`1`),cl(),aw(422,`
            `),Oi(423,`button`,5),aw(424,`2`),cl(),aw(425,`
            `),Oi(426,`c-dropdown`,48),aw(427,`
              `),Oi(428,`button`,49),aw(429,`
                Dropdown
              `),cl(),aw(430,`
              `),Oi(431,`ul`,50),aw(432,`
                `),Oi(433,`li`)(434,`a`,51),aw(435,`Action`),cl()(),aw(436,`
                `),Oi(437,`li`)(438,`a`,51),aw(439,`Another action`),cl()(),aw(440,`
                `),Oi(441,`li`)(442,`a`,51),aw(443,`Something else here`),cl()(),aw(444,`
                `),Ch(445,`li`,52),aw(446,`
                `),Oi(447,`li`)(448,`a`,51),aw(449,`Separated link`),cl()(),aw(450,`
              `),cl(),aw(451,`
            `),cl(),aw(452,`
          `),cl(),aw(453,`
        `),cl(),aw(454,`
      `),cl(),aw(455,`
    `),cl(),aw(456,`
  `),cl(),aw(457,`
  `),Oi(458,`c-col`,0),aw(459,`
    `),Oi(460,`c-card`,2),aw(461,`
      `),Oi(462,`c-card-header`),aw(463,`
        `),Oi(464,`strong`),aw(465,`Angular Button Group`),cl(),aw(466,` `),Oi(467,`span`),aw(468,`Vertical variation`),cl(),aw(469,`
      `),cl(),aw(470,`
      `),Oi(471,`c-card-body`),aw(472,`
        `),Oi(473,`p`,45),aw(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),Oi(475,`strong`),aw(476,`Split button dropdowns are not supported here.`),cl(),aw(477,`
        `),cl(),aw(478,`
        `),Oi(479,`app-docs-example`,53),aw(480,`
          `),Oi(481,`c-button-group`,54),aw(482,`
            `),Oi(483,`button`,55),aw(484,`Button`),cl(),aw(485,`
            `),Oi(486,`button`,55),aw(487,`Button`),cl(),aw(488,`
            `),Oi(489,`button`,55),aw(490,`Button`),cl(),aw(491,`
            `),Oi(492,`button`,55),aw(493,`Button`),cl(),aw(494,`
            `),Oi(495,`button`,55),aw(496,`Button`),cl(),aw(497,`
            `),Oi(498,`button`,55),aw(499,`Button`),cl(),aw(500,`
            `),Oi(501,`button`,55),aw(502,`Button`),cl(),aw(503,`
          `),cl(),aw(504,`
          `),Ch(505,`br`),aw(506,`
        `),cl(),aw(507,`
        `),Oi(508,`app-docs-example`,53),aw(509,`
          `),Oi(510,`c-button-group`,54),aw(511,`
            `),Oi(512,`button`,5),aw(513,`Button`),cl(),aw(514,`
            `),Oi(515,`button`,5),aw(516,`Button`),cl(),aw(517,`
            `),Oi(518,`c-dropdown`,48),aw(519,`
              `),Oi(520,`button`,49),aw(521,`
                Dropdown
              `),cl(),aw(522,`
              `),Oi(523,`ul`,50),aw(524,`
                `),Oi(525,`li`)(526,`a`,51),aw(527,`Action`),cl()(),aw(528,`
                `),Oi(529,`li`)(530,`a`,51),aw(531,`Another action`),cl()(),aw(532,`
                `),Oi(533,`li`)(534,`a`,51),aw(535,`Something else here`),cl()(),aw(536,`
                `),Ch(537,`li`,52),aw(538,`
                `),Oi(539,`li`)(540,`a`,51),aw(541,`Separated link`),cl()(),aw(542,`
              `),cl(),aw(543,`
            `),cl(),aw(544,`
            `),Oi(545,`button`,5),aw(546,`Button`),cl(),aw(547,`
            `),Oi(548,`button`,5),aw(549,`Button`),cl(),aw(550,`
            `),Oi(551,`c-dropdown`,48),aw(552,`
              `),Oi(553,`button`,49),aw(554,`
                Dropdown
              `),cl(),aw(555,`
              `),Oi(556,`ul`,50),aw(557,`
                `),Oi(558,`li`)(559,`a`,51),aw(560,`Action`),cl()(),aw(561,`
                `),Oi(562,`li`)(563,`a`,51),aw(564,`Another action`),cl()(),aw(565,`
                `),Oi(566,`li`)(567,`a`,51),aw(568,`Something else here`),cl()(),aw(569,`
                `),Ch(570,`li`,52),aw(571,`
                `),Oi(572,`li`)(573,`a`,51),aw(574,`Separated link`),cl()(),aw(575,`
              `),cl(),aw(576,`
            `),cl(),aw(577,`
            `),Oi(578,`c-dropdown`,56),aw(579,`
              `),Oi(580,`button`,49),aw(581,`
                Dropdown
              `),cl(),aw(582,`
              `),Oi(583,`ul`,57),aw(584,`
                `),Oi(585,`li`)(586,`a`,51),aw(587,`Action`),cl()(),aw(588,`
                `),Oi(589,`li`)(590,`a`,51),aw(591,`Another action`),cl()(),aw(592,`
                `),Oi(593,`li`)(594,`a`,51),aw(595,`Something else here`),cl()(),aw(596,`
                `),Ch(597,`li`,52),aw(598,`
                `),Oi(599,`li`)(600,`a`,51),aw(601,`Separated link`),cl()(),aw(602,`
              `),cl(),aw(603,`
            `),cl(),aw(604,`
            `),Oi(605,`c-dropdown`,48),aw(606,`
              `),Oi(607,`button`,49),aw(608,`
                Dropdown
              `),cl(),aw(609,`
              `),Oi(610,`ul`,50),aw(611,`
                `),Oi(612,`li`)(613,`a`,51),aw(614,`Action`),cl()(),aw(615,`
                `),Oi(616,`li`)(617,`a`,51),aw(618,`Another action`),cl()(),aw(619,`
                `),Oi(620,`li`)(621,`a`,51),aw(622,`Something else here`),cl()(),aw(623,`
                `),Ch(624,`li`,52),aw(625,`
                `),Oi(626,`li`)(627,`a`,51),aw(628,`Separated link`),cl()(),aw(629,`
              `),cl(),aw(630,`
            `),cl(),aw(631,`
          `),cl(),aw(632,`
        `),cl(),aw(633,`
        `),Oi(634,`app-docs-example`,53),aw(635,`
          `),Oi(636,`form`,17),aw(637,`
            `),Oi(638,`c-button-group`,54),aw(639,`
              `),Ch(640,`input`,25),ME(),aw(641,`
              `),Oi(642,`label`,58),kh(`click`,function(){return m.setRadioValue(`Radio1`)}),aw(643,`Radio 1`),cl(),aw(644,`

              `),Ch(645,`input`,26),ME(),aw(646,`
              `),Oi(647,`label`,58),kh(`click`,function(){return m.setRadioValue(`Radio2`)}),aw(648,`Radio 2`),cl(),aw(649,`

              `),Ch(650,`input`,27),ME(),aw(651,`
              `),Oi(652,`label`,58),kh(`click`,function(){return m.setRadioValue(`Radio3`)}),aw(653,`Radio
                3`),cl(),aw(654,`
            `),cl(),aw(655,`
          `),cl(),aw(656,`
        `),cl(),aw(657,`
      `),cl(),aw(658,`
    `),cl(),aw(659,`
  `),cl(),aw(660,`
`),cl()),s&2&&(BI(53),wh(`active`,!0)(`routerLink`,Ew(30,l)),BI(3),wh(`routerLink`,Ew(31,l)),BI(3),wh(`routerLink`,Ew(32,l)),BI(94),wh(`formGroup`,m.formCheck1),BI(4),AE(),BI(5),AE(),BI(5),AE(),BI(12),wh(`formGroup`,m.formRadio1),BI(4),AE(),BI(5),AE(),BI(5),AE(),BI(241),wh(`routerLink`,Ew(33,l)),BI(4),wh(`routerLink`,Ew(34,l)),BI(4),wh(`routerLink`,Ew(35,l)),BI(6),wh(`routerLink`,Ew(36,l)),BI(33),wh(`vertical`,!0),BI(29),wh(`vertical`,!0),BI(16),wh(`routerLink`,Ew(37,l)),BI(4),wh(`routerLink`,Ew(38,l)),BI(4),wh(`routerLink`,Ew(39,l)),BI(6),wh(`routerLink`,Ew(40,l)),BI(19),wh(`routerLink`,Ew(41,l)),BI(4),wh(`routerLink`,Ew(42,l)),BI(4),wh(`routerLink`,Ew(43,l)),BI(6),wh(`routerLink`,Ew(44,l)),BI(13),wh(`routerLink`,Ew(45,l)),BI(4),wh(`routerLink`,Ew(46,l)),BI(4),wh(`routerLink`,Ew(47,l)),BI(6),wh(`routerLink`,Ew(48,l)),BI(13),wh(`routerLink`,Ew(49,l)),BI(4),wh(`routerLink`,Ew(50,l)),BI(4),wh(`routerLink`,Ew(51,l)),BI(6),wh(`routerLink`,Ew(52,l)),BI(9),wh(`formGroup`,m.formRadio1),BI(2),wh(`vertical`,!0),BI(2),AE(),BI(5),AE(),BI(5),AE())},dependencies:[fT,Pv,xi,Nv,Ri,E,BI$1,wv,$t,zn,Hn,Xe,Mt,ln,Tn,jn,gn,hn,vu,jI,dT,uT,rT,_u,mu,es,gu,JI,c],encapsulation:2})}};export{X as ButtonGroupsComponent};