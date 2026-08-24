import{Gn as Ch,I as Li,Lr as Th,Oi as ki,Or as Rh,Qr as _,Rn as zT,Sn as rb,Ta as l,X as Pi,ai as cw,bn as qv,br as OI,g as ET,ga as wh,gt as WT,ii as cl,la as vD,ut as Tu,va as xI,vn as qT,wn as t1,xt as Xv,zn as $E}from"./main-JGD5BDHO.js";import{t as E}from"./chunk-BETohCFL.js";import{t as c}from"./chunk-INd7ktdd.js";import{_ as on,a as Ln,d as Zn,h as gn,o as Mt,p as dn,r as Gn,s as Tn,u as Xe,v as qn,y as vt}from"./chunk-B2AeXSL3.js";var H=class p{constructor(){this.formBuilder=_(qn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=vD({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(ki(0,`c-row`),cw(1,`
  `),Ch(2,`app-docs-components`,0),cw(3,`
  `),ki(4,`form`,1),cw(5,`
    `),ki(6,`c-col`,2),cw(7,`
      `),ki(8,`c-card`,3),cw(9,`
        `),ki(10,`c-card-header`),cw(11,`
          `),ki(12,`strong`),cw(13,`Angular Checkbox`),cl(),cw(14,`
        `),cl(),cw(15,`
        `),ki(16,`c-card-body`),cw(17,`
          `),ki(18,`app-docs-example`,4),cw(19,`
            `),ki(20,`div`,5),cw(21,`
              `),ki(22,`c-form-check`),cw(23,`
                `),Ch(24,`input`,6),xI(),cw(25,`
                `),ki(26,`label`,7),cw(27,`Default checkbox`),cl(),cw(28,`
              `),cl(),cw(29,`
              `),ki(30,`c-form-check`),cw(31,`
                `),Ch(32,`input`,8),xI(),cw(33,`
                `),ki(34,`label`,9),cw(35,`Checked checkbox`),cl(),cw(36,`
              `),cl(),cw(37,`
            `),cl(),cw(38,`
          `),cl(),cw(39,`
        `),cl(),cw(40,`
      `),cl(),cw(41,`
    `),cl(),cw(42,`
    `),ki(43,`c-col`,2),cw(44,`
      `),ki(45,`c-card`,3),cw(46,`
        `),ki(47,`c-card-header`),cw(48,`
          `),ki(49,`strong`),cw(50,`Angular Checkbox`),cl(),cw(51,` `),ki(52,`small`),cw(53,`Disabled`),cl(),cw(54,`
        `),cl(),cw(55,`
        `),ki(56,`c-card-body`),cw(57,`
          `),ki(58,`p`,10),cw(59,`
            Add the `),ki(60,`code`),cw(61,`disabled`),cl(),cw(62,` attribute and the associated `),ki(63,`code`),cw(64,`<label>`),cl(),cw(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),cl(),cw(66,`
          `),ki(67,`app-docs-example`,11),cw(68,`
            `),ki(69,`div`,12),cw(70,`
              `),ki(71,`c-form-check`),cw(72,`
                `),Ch(73,`input`,13),xI(),cw(74,`
                `),ki(75,`label`,14),cw(76,`Disabled checkbox`),cl(),cw(77,`
              `),cl(),cw(78,`
              `),ki(79,`c-form-check`),cw(80,`
                `),Ch(81,`input`,15),xI(),cw(82,`
                `),ki(83,`label`,16),cw(84,`Disabled checked checkbox`),cl(),cw(85,`
              `),cl(),cw(86,`
            `),cl(),cw(87,`
          `),cl(),cw(88,`
        `),cl(),cw(89,`
      `),cl(),cw(90,`
    `),cl(),cw(91,`
    `),ki(92,`c-col`,2),cw(93,`
      `),ki(94,`c-card`,3),cw(95,`
        `),ki(96,`c-card-header`),cw(97,`
          `),ki(98,`strong`),cw(99,`Angular Radio`),cl(),cw(100,`
        `),cl(),cw(101,`
        `),ki(102,`c-card-body`),cw(103,`
          `),ki(104,`app-docs-example`,17),cw(105,`
            `),ki(106,`div`,18),cw(107,`
              `),ki(108,`c-form-check`),cw(109,`
                `),Ch(110,`input`,19),xI(),cw(111,`
                `),ki(112,`label`,20),cw(113,`Default radio`),cl(),cw(114,`
              `),cl(),cw(115,`
              `),ki(116,`c-form-check`),cw(117,`
                `),Ch(118,`input`,21),xI(),cw(119,`
                `),ki(120,`label`,20),cw(121,`Checked radio`),cl(),cw(122,`
              `),cl(),cw(123,`
            `),cl(),cw(124,`
          `),cl(),cw(125,`
        `),cl(),cw(126,`
      `),cl(),cw(127,`
    `),cl(),cw(128,`
    `),ki(129,`c-col`,2),cw(130,`
      `),ki(131,`c-card`,3),cw(132,`
        `),ki(133,`c-card-header`),cw(134,`
          `),ki(135,`strong`),cw(136,`Angular Radio`),cl(),cw(137,` `),ki(138,`small`),cw(139,`Disabled`),cl(),cw(140,`
        `),cl(),cw(141,`
        `),ki(142,`c-card-body`),cw(143,`
          `),ki(144,`p`,10),cw(145,`
            Add the `),ki(146,`code`),cw(147,`disabled`),cl(),cw(148,` attribute and the associated `),ki(149,`code`),cw(150,`<label>`),cl(),cw(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),cl(),cw(152,`
          `),ki(153,`app-docs-example`,22),cw(154,`
            `),ki(155,`div`,23),cw(156,`
              `),ki(157,`c-form-check`),cw(158,`
                `),Ch(159,`input`,19),xI(),cw(160,`
                `),ki(161,`label`,20),cw(162,`Default radio`),cl(),cw(163,`
              `),cl(),cw(164,`
              `),ki(165,`c-form-check`),cw(166,`
                `),Ch(167,`input`,21),xI(),cw(168,`
                `),ki(169,`label`,20),cw(170,`Checked radio`),cl(),cw(171,`
              `),cl(),cw(172,`
            `),cl(),cw(173,`
          `),cl(),cw(174,`
        `),cl(),cw(175,`
      `),cl(),cw(176,`
    `),cl(),cw(177,`
    `),ki(178,`c-col`,2),cw(179,`
      `),ki(180,`c-card`,3),cw(181,`
        `),ki(182,`c-card-header`),cw(183,`
          `),ki(184,`strong`),cw(185,`Angular Switches`),cl(),cw(186,`
        `),cl(),cw(187,`
        `),ki(188,`c-card-body`),cw(189,`
          `),ki(190,`p`,10),cw(191,`
            A switch has the markup of a custom checkbox but uses the `),ki(192,`code`),cw(193,`switch`),cl(),cw(194,` boolean
            properly to render a toggle switch. Switches also support the `),ki(195,`code`),cw(196,`disabled`),cl(),cw(197,`
            attribute.
          `),cl(),cw(198,`
          `),ki(199,`app-docs-example`,24),cw(200,`
            `),ki(201,`c-form-check`,25),cw(202,`
              `),Ch(203,`input`,26),cw(204,`
              `),ki(205,`label`,20),cw(206,`Default switch checkbox input`),cl(),cw(207,`
            `),cl(),cw(208,`
            `),ki(209,`c-form-check`,25),cw(210,`
              `),Ch(211,`input`,27),cw(212,`
              `),ki(213,`label`,20),cw(214,`Checked switch checkbox input`),cl(),cw(215,`
            `),cl(),cw(216,`
            `),ki(217,`c-form-check`,25),cw(218,`
              `),Ch(219,`input`,28),cw(220,`
              `),ki(221,`label`,20),cw(222,`Default switch checkbox input`),cl(),cw(223,`
            `),cl(),cw(224,`
            `),ki(225,`c-form-check`,25),cw(226,`
              `),Ch(227,`input`,29),cw(228,`
              `),ki(229,`label`,20),cw(230,`Checked switch checkbox input`),cl(),cw(231,`
            `),cl(),cw(232,`
          `),cl(),cw(233,`
        `),cl(),cw(234,`
      `),cl(),cw(235,`
    `),cl(),cw(236,`
    `),ki(237,`c-col`,2),cw(238,`
      `),ki(239,`c-card`,3),cw(240,`
        `),ki(241,`c-card-header`),cw(242,`
          `),ki(243,`strong`),cw(244,`Angular Switches`),cl(),cw(245,` `),ki(246,`small`),cw(247,`Sizes`),cl(),cw(248,`
        `),cl(),cw(249,`
        `),ki(250,`c-card-body`),cw(251,`
          `),ki(252,`app-docs-example`,30),cw(253,`
            `),ki(254,`c-form-check`,25),cw(255,`
              `),Ch(256,`input`,26),cw(257,`
              `),ki(258,`label`,20),cw(259,`Default switch checkbox input`),cl(),cw(260,`
            `),cl(),cw(261,`
            `),ki(262,`c-form-check`,31),cw(263,`
              `),Ch(264,`input`,26),cw(265,`
              `),ki(266,`label`,20),cw(267,`Large switch checkbox input`),cl(),cw(268,`
            `),cl(),cw(269,`
            `),ki(270,`c-form-check`,32),cw(271,`
              `),Ch(272,`input`,27),cw(273,`
              `),ki(274,`label`,20),cw(275,`Extra large switch checkbox input`),cl(),cw(276,`
            `),cl(),cw(277,`
          `),cl(),cw(278,`
        `),cl(),cw(279,`
      `),cl(),cw(280,`
    `),cl(),cw(281,`
    `),ki(282,`c-col`,2),cw(283,`
      `),ki(284,`c-card`,3),cw(285,`
        `),ki(286,`c-card-header`),cw(287,`
          `),ki(288,`strong`),cw(289,`Angular Checks and Radios`),cl(),cw(290,` `),ki(291,`small`),cw(292,`Default layout (stacked)`),cl(),cw(293,`
        `),cl(),cw(294,`
        `),ki(295,`c-card-body`),cw(296,`
          `),ki(297,`p`,10),cw(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),cl(),cw(299,`
          `),ki(300,`app-docs-example`,33),cw(301,`
            `),ki(302,`c-form-check`),cw(303,`
              `),Ch(304,`input`,34),cw(305,`
              `),ki(306,`label`,35),cw(307,`Default checkbox`),cl(),cw(308,`
            `),cl(),cw(309,`
            `),ki(310,`c-form-check`),cw(311,`
              `),Ch(312,`input`,36),cw(313,`
              `),ki(314,`label`,37),cw(315,`Disabled checkbox`),cl(),cw(316,`
            `),cl(),cw(317,`
          `),cl(),cw(318,`
          `),ki(319,`app-docs-example`,33),cw(320,`
            `),ki(321,`c-form-check`),cw(322,`
              `),Ch(323,`input`,38),cw(324,`
              `),ki(325,`label`,39),cw(326,`Default radio`),cl(),cw(327,`
            `),cl(),cw(328,`
            `),ki(329,`c-form-check`),cw(330,`
              `),Ch(331,`input`,40),cw(332,`
              `),ki(333,`label`,41),cw(334,`Second radio`),cl(),cw(335,`
            `),cl(),cw(336,`
            `),ki(337,`c-form-check`),cw(338,`
              `),Ch(339,`input`,42),cw(340,`
              `),ki(341,`label`,43),cw(342,`Disabled radio`),cl(),cw(343,`
            `),cl(),cw(344,`
          `),cl(),cw(345,`
        `),cl(),cw(346,`
      `),cl(),cw(347,`
    `),cl(),cw(348,`
    `),ki(349,`c-col`,2),cw(350,`
      `),ki(351,`c-card`,3),cw(352,`
        `),ki(353,`c-card-header`),cw(354,`
          `),ki(355,`strong`),cw(356,`Angular Checks and Radios`),cl(),cw(357,` `),ki(358,`small`),cw(359,`Inline`),cl(),cw(360,`
        `),cl(),cw(361,`
        `),ki(362,`c-card-body`),cw(363,`
          `),ki(364,`p`,10),cw(365,`
            Group checkboxes or radios on the same horizontal row by adding `),ki(366,`code`),cw(367,`inline`),cl(),cw(368,`
            boolean property to any `),ki(369,`code`),cw(370,`<c-form-check>`),cl(),cw(371,`.
          `),cl(),cw(372,`
          `),ki(373,`app-docs-example`,44),cw(374,`
            `),ki(375,`c-form-check`,45),cw(376,`
              `),Ch(377,`input`,46),cw(378,`
              `),ki(379,`label`,47),cw(380,`1`),cl(),cw(381,`
            `),cl(),cw(382,`
            `),ki(383,`c-form-check`,48),cw(384,`
              `),Ch(385,`input`,49),cw(386,`
              `),ki(387,`label`,50),cw(388,`2`),cl(),cw(389,`
            `),cl(),cw(390,`
            `),ki(391,`c-form-check`,48),cw(392,`
              `),Ch(393,`input`,51),cw(394,`
              `),ki(395,`label`,52),cw(396,`3 (disabled)`),cl(),cw(397,`
            `),cl(),cw(398,`

          `),cl(),cw(399,`
          `),ki(400,`app-docs-example`,44),cw(401,`
            `),ki(402,`c-form-check`,48),cw(403,`
              `),Ch(404,`input`,53),cw(405,`
              `),ki(406,`label`,54),cw(407,`1`),cl(),cw(408,`
            `),cl(),cw(409,`
            `),ki(410,`c-form-check`,48),cw(411,`
              `),Ch(412,`input`,55),cw(413,`
              `),ki(414,`label`,56),cw(415,`2`),cl(),cw(416,`
            `),cl(),cw(417,`
            `),ki(418,`c-form-check`,48),cw(419,`
              `),Ch(420,`input`,57),cw(421,`
              `),ki(422,`label`,58),cw(423,`3 (disabled)`),cl(),cw(424,`
            `),cl(),cw(425,`
          `),cl(),cw(426,`
        `),cl(),cw(427,`
      `),cl(),cw(428,`
    `),cl(),cw(429,`
    `),ki(430,`c-col`,2),cw(431,`
      `),ki(432,`c-card`,3),cw(433,`
        `),ki(434,`c-card-header`),cw(435,`
          `),ki(436,`strong`),cw(437,`Angular Checks and Radios`),cl(),cw(438,` `),ki(439,`small`),cw(440,`Without labels`),cl(),cw(441,`
        `),cl(),cw(442,`
        `),ki(443,`c-card-body`),cw(444,`
          `),ki(445,`p`,10),cw(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),ki(447,`code`),cw(448,`aria-label`),cl(),cw(449,`).
          `),cl(),cw(450,`
          `),ki(451,`app-docs-example`,59),cw(452,`
            `),ki(453,`div`),cw(454,`
              `),Ch(455,`input`,60),cw(456,`
            `),cl(),cw(457,`
            `),ki(458,`div`),cw(459,`
              `),Ch(460,`input`,61),cw(461,`
            `),cl(),cw(462,`
          `),cl(),cw(463,`
        `),cl(),cw(464,`
      `),cl(),cw(465,`
    `),cl(),cw(466,`
    `),ki(467,`c-col`,2),cw(468,`
      `),ki(469,`c-card`,3),cw(470,`
        `),ki(471,`c-card-header`),cw(472,`
          `),ki(473,`strong`),cw(474,`Toggle buttons`),cl(),cw(475,`
        `),cl(),cw(476,`
        `),ki(477,`c-card-body`),cw(478,`
          `),ki(479,`p`,10),cw(480,`
            Create button-like checkboxes and radio buttons by using `),ki(481,`code`),cw(482,`button`),cl(),cw(483,` boolean
            property on the `),ki(484,`code`),cw(485,`<CFormCheck>`),cl(),cw(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),cl(),cw(487,`
          `),ki(488,`app-docs-example`,62),cw(489,`
            `),ki(490,`div`,63),cw(491,`
              `),ki(492,`c-button-group`,64),cw(493,`
                `),Ch(494,`input`,65),xI(),cw(495,`
                `),ki(496,`label`,66),Rh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),cw(497,`Checkbox 1`),cl(),cw(498,`

                `),Ch(499,`input`,67),xI(),cw(500,`
                `),ki(501,`label`,66),Rh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),cw(502,`Checkbox 2`),cl(),cw(503,`

                `),Ch(504,`input`,68),xI(),cw(505,`
                `),ki(506,`label`,66),Rh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),cw(507,`Disabled 3`),cl(),cw(508,`
              `),cl(),cw(509,`
            `),cl(),cw(510,`
          `),cl(),cw(511,`
          `),ki(512,`app-docs-example`),cw(513,`
            `),ki(514,`div`,69),cw(515,`
              `),ki(516,`c-button-group`,70),cw(517,`
                `),Ch(518,`input`,71),xI(),cw(519,`
                `),ki(520,`label`,72),Rh(`click`,function(){return r.setRadioValue(`Radio1`)}),cw(521,`Radio 1`),cl(),cw(522,`

                `),Ch(523,`input`,73),xI(),cw(524,`
                `),ki(525,`label`,74),Rh(`click`,function(){return r.setRadioValue(`Radio2`)}),cw(526,`Radio 2`),cl(),cw(527,`
                `),Ch(528,`input`,75),xI(),cw(529,`
                `),ki(530,`label`,76),Rh(`click`,function(){return r.setRadioValue(`Radio3`)}),cw(531,`Radio3`),cl(),cw(532,`
              `),cl(),cw(533,`
            `),cl(),cw(534,`
          `),cl(),cw(535,`
          `),ki(536,`h5`),cw(537,`Outlined styles`),cl(),cw(538,`
          `),ki(539,`p`,10),cw(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),cl(),cw(541,`
          `),ki(542,`app-docs-example`,62),cw(543,`
            `),ki(544,`div`,63),cw(545,`
              `),ki(546,`c-button-group`,64),cw(547,`
                `),Ch(548,`input`,65),xI(),cw(549,`
                `),ki(550,`label`,77),Rh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),cw(551,`Checkbox 1`),cl(),cw(552,`

                `),Ch(553,`input`,67),xI(),cw(554,`
                `),ki(555,`label`,77),Rh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),cw(556,`Checkbox 2`),cl(),cw(557,`

                `),Ch(558,`input`,68),xI(),cw(559,`
                `),ki(560,`label`,77),Rh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),cw(561,`Disabled
                  3`),cl(),cw(562,`
              `),cl(),cw(563,`
            `),cl(),cw(564,`
          `),cl(),cw(565,`
          `),ki(566,`app-docs-example`),cw(567,`
            `),ki(568,`div`,69),cw(569,`
              `),ki(570,`c-button-group`,70),cw(571,`
                `),Ch(572,`input`,78),xI(),cw(573,`
                `),ki(574,`label`,79),Rh(`click`,function(){return r.setRadioValue(`Radio1`)}),cw(575,`Radio 1`),cl(),cw(576,`

                `),Ch(577,`input`,80),xI(),cw(578,`
                `),ki(579,`label`,81),Rh(`click`,function(){return r.setRadioValue(`Radio2`)}),cw(580,`Radio 2`),cl(),cw(581,`

                `),Ch(582,`input`,82),xI(),cw(583,`
                `),ki(584,`label`,83),Rh(`click`,function(){return r.setRadioValue(`Radio3`)}),cw(585,`Radio3`),cl(),cw(586,`
              `),cl(),cw(587,`
            `),cl(),cw(588,`
          `),cl(),cw(589,`
        `),cl(),cw(590,`
      `),cl(),cw(591,`
    `),cl(),cw(592,`
  `),cl(),cw(593,`
`),cl()),d&2&&($E(4),wh(`formGroup`,r.formGroup),$E(20),OI(),$E(8),wh(`checked`,!0),OI(),$E(41),OI(),$E(8),OI(),$E(29),OI(),$E(8),OI(),$E(41),OI(),$E(8),OI(),$E(34),wh(`switch`,!0),$E(8),wh(`switch`,!0),$E(8),wh(`switch`,!0),$E(8),wh(`switch`,!0),$E(29),wh(`switch`,!0),$E(121),wh(`inline`,!0),$E(119),OI(),$E(5),OI(),$E(5),OI(),$E(14),OI(),$E(5),OI(),$E(5),Th(`disabled`,!0),OI(),$E(20),OI(),$E(5),OI(),$E(5),OI(),$E(14),OI(),$E(5),OI(),$E(5),Th(`disabled`,!0),OI())},dependencies:[t1,Zn,Ln,Xe,Mt,dn,Tn,Gn,on,gn,vt,zT,rb,Pi,Xv,Li,E,WT,qT,Tu,ET,qv,c],encapsulation:2})}};export{H as ChecksRadiosComponent};