import{Ar as Th,Cn as vu,En as wv,Fn as AE,Ft as fT,Gt as iT,H as Nv,Hn as Ch,Q as Ri,Xr as aw,Zr as b,an as nT,ba as l,cr as ME,fa as yD,kn as xi,la as wh,ni as cl,q as Pv,s as BI$1,sn as oT,vr as Oi,wi as kh,zn as BI}from"./main-PRJKJRLJ.js";import{_ as qn,a as Mt,f as gn,g as ln,m as jn,o as Tn,p as hn,r as Hn,u as Xe,x as zn,y as vt}from"./chunk-BiXV7LNt.js";import{t as E}from"./chunk-pZZ3qGEM.js";import{t as c}from"./chunk-CvPf1mHO.js";var H=class p{constructor(){this.formBuilder=b(qn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=yD({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(Oi(0,`c-row`),aw(1,`
  `),Ch(2,`app-docs-components`,0),aw(3,`
  `),Oi(4,`form`,1),aw(5,`
    `),Oi(6,`c-col`,2),aw(7,`
      `),Oi(8,`c-card`,3),aw(9,`
        `),Oi(10,`c-card-header`),aw(11,`
          `),Oi(12,`strong`),aw(13,`Angular Checkbox`),cl(),aw(14,`
        `),cl(),aw(15,`
        `),Oi(16,`c-card-body`),aw(17,`
          `),Oi(18,`app-docs-example`,4),aw(19,`
            `),Oi(20,`div`,5),aw(21,`
              `),Oi(22,`c-form-check`),aw(23,`
                `),Ch(24,`input`,6),ME(),aw(25,`
                `),Oi(26,`label`,7),aw(27,`Default checkbox`),cl(),aw(28,`
              `),cl(),aw(29,`
              `),Oi(30,`c-form-check`),aw(31,`
                `),Ch(32,`input`,8),ME(),aw(33,`
                `),Oi(34,`label`,9),aw(35,`Checked checkbox`),cl(),aw(36,`
              `),cl(),aw(37,`
            `),cl(),aw(38,`
          `),cl(),aw(39,`
        `),cl(),aw(40,`
      `),cl(),aw(41,`
    `),cl(),aw(42,`
    `),Oi(43,`c-col`,2),aw(44,`
      `),Oi(45,`c-card`,3),aw(46,`
        `),Oi(47,`c-card-header`),aw(48,`
          `),Oi(49,`strong`),aw(50,`Angular Checkbox`),cl(),aw(51,` `),Oi(52,`small`),aw(53,`Disabled`),cl(),aw(54,`
        `),cl(),aw(55,`
        `),Oi(56,`c-card-body`),aw(57,`
          `),Oi(58,`p`,10),aw(59,`
            Add the `),Oi(60,`code`),aw(61,`disabled`),cl(),aw(62,` attribute and the associated `),Oi(63,`code`),aw(64,`<label>`),cl(),aw(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),cl(),aw(66,`
          `),Oi(67,`app-docs-example`,11),aw(68,`
            `),Oi(69,`div`,12),aw(70,`
              `),Oi(71,`c-form-check`),aw(72,`
                `),Ch(73,`input`,13),ME(),aw(74,`
                `),Oi(75,`label`,14),aw(76,`Disabled checkbox`),cl(),aw(77,`
              `),cl(),aw(78,`
              `),Oi(79,`c-form-check`),aw(80,`
                `),Ch(81,`input`,15),ME(),aw(82,`
                `),Oi(83,`label`,16),aw(84,`Disabled checked checkbox`),cl(),aw(85,`
              `),cl(),aw(86,`
            `),cl(),aw(87,`
          `),cl(),aw(88,`
        `),cl(),aw(89,`
      `),cl(),aw(90,`
    `),cl(),aw(91,`
    `),Oi(92,`c-col`,2),aw(93,`
      `),Oi(94,`c-card`,3),aw(95,`
        `),Oi(96,`c-card-header`),aw(97,`
          `),Oi(98,`strong`),aw(99,`Angular Radio`),cl(),aw(100,`
        `),cl(),aw(101,`
        `),Oi(102,`c-card-body`),aw(103,`
          `),Oi(104,`app-docs-example`,17),aw(105,`
            `),Oi(106,`div`,18),aw(107,`
              `),Oi(108,`c-form-check`),aw(109,`
                `),Ch(110,`input`,19),ME(),aw(111,`
                `),Oi(112,`label`,20),aw(113,`Default radio`),cl(),aw(114,`
              `),cl(),aw(115,`
              `),Oi(116,`c-form-check`),aw(117,`
                `),Ch(118,`input`,21),ME(),aw(119,`
                `),Oi(120,`label`,20),aw(121,`Checked radio`),cl(),aw(122,`
              `),cl(),aw(123,`
            `),cl(),aw(124,`
          `),cl(),aw(125,`
        `),cl(),aw(126,`
      `),cl(),aw(127,`
    `),cl(),aw(128,`
    `),Oi(129,`c-col`,2),aw(130,`
      `),Oi(131,`c-card`,3),aw(132,`
        `),Oi(133,`c-card-header`),aw(134,`
          `),Oi(135,`strong`),aw(136,`Angular Radio`),cl(),aw(137,` `),Oi(138,`small`),aw(139,`Disabled`),cl(),aw(140,`
        `),cl(),aw(141,`
        `),Oi(142,`c-card-body`),aw(143,`
          `),Oi(144,`p`,10),aw(145,`
            Add the `),Oi(146,`code`),aw(147,`disabled`),cl(),aw(148,` attribute and the associated `),Oi(149,`code`),aw(150,`<label>`),cl(),aw(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),cl(),aw(152,`
          `),Oi(153,`app-docs-example`,22),aw(154,`
            `),Oi(155,`div`,23),aw(156,`
              `),Oi(157,`c-form-check`),aw(158,`
                `),Ch(159,`input`,19),ME(),aw(160,`
                `),Oi(161,`label`,20),aw(162,`Default radio`),cl(),aw(163,`
              `),cl(),aw(164,`
              `),Oi(165,`c-form-check`),aw(166,`
                `),Ch(167,`input`,21),ME(),aw(168,`
                `),Oi(169,`label`,20),aw(170,`Checked radio`),cl(),aw(171,`
              `),cl(),aw(172,`
            `),cl(),aw(173,`
          `),cl(),aw(174,`
        `),cl(),aw(175,`
      `),cl(),aw(176,`
    `),cl(),aw(177,`
    `),Oi(178,`c-col`,2),aw(179,`
      `),Oi(180,`c-card`,3),aw(181,`
        `),Oi(182,`c-card-header`),aw(183,`
          `),Oi(184,`strong`),aw(185,`Angular Switches`),cl(),aw(186,`
        `),cl(),aw(187,`
        `),Oi(188,`c-card-body`),aw(189,`
          `),Oi(190,`p`,10),aw(191,`
            A switch has the markup of a custom checkbox but uses the `),Oi(192,`code`),aw(193,`switch`),cl(),aw(194,` boolean
            properly to render a toggle switch. Switches also support the `),Oi(195,`code`),aw(196,`disabled`),cl(),aw(197,`
            attribute.
          `),cl(),aw(198,`
          `),Oi(199,`app-docs-example`,24),aw(200,`
            `),Oi(201,`c-form-check`,25),aw(202,`
              `),Ch(203,`input`,26),aw(204,`
              `),Oi(205,`label`,20),aw(206,`Default switch checkbox input`),cl(),aw(207,`
            `),cl(),aw(208,`
            `),Oi(209,`c-form-check`,25),aw(210,`
              `),Ch(211,`input`,27),aw(212,`
              `),Oi(213,`label`,20),aw(214,`Checked switch checkbox input`),cl(),aw(215,`
            `),cl(),aw(216,`
            `),Oi(217,`c-form-check`,25),aw(218,`
              `),Ch(219,`input`,28),aw(220,`
              `),Oi(221,`label`,20),aw(222,`Default switch checkbox input`),cl(),aw(223,`
            `),cl(),aw(224,`
            `),Oi(225,`c-form-check`,25),aw(226,`
              `),Ch(227,`input`,29),aw(228,`
              `),Oi(229,`label`,20),aw(230,`Checked switch checkbox input`),cl(),aw(231,`
            `),cl(),aw(232,`
          `),cl(),aw(233,`
        `),cl(),aw(234,`
      `),cl(),aw(235,`
    `),cl(),aw(236,`
    `),Oi(237,`c-col`,2),aw(238,`
      `),Oi(239,`c-card`,3),aw(240,`
        `),Oi(241,`c-card-header`),aw(242,`
          `),Oi(243,`strong`),aw(244,`Angular Switches`),cl(),aw(245,` `),Oi(246,`small`),aw(247,`Sizes`),cl(),aw(248,`
        `),cl(),aw(249,`
        `),Oi(250,`c-card-body`),aw(251,`
          `),Oi(252,`app-docs-example`,30),aw(253,`
            `),Oi(254,`c-form-check`,25),aw(255,`
              `),Ch(256,`input`,26),aw(257,`
              `),Oi(258,`label`,20),aw(259,`Default switch checkbox input`),cl(),aw(260,`
            `),cl(),aw(261,`
            `),Oi(262,`c-form-check`,31),aw(263,`
              `),Ch(264,`input`,26),aw(265,`
              `),Oi(266,`label`,20),aw(267,`Large switch checkbox input`),cl(),aw(268,`
            `),cl(),aw(269,`
            `),Oi(270,`c-form-check`,32),aw(271,`
              `),Ch(272,`input`,27),aw(273,`
              `),Oi(274,`label`,20),aw(275,`Extra large switch checkbox input`),cl(),aw(276,`
            `),cl(),aw(277,`
          `),cl(),aw(278,`
        `),cl(),aw(279,`
      `),cl(),aw(280,`
    `),cl(),aw(281,`
    `),Oi(282,`c-col`,2),aw(283,`
      `),Oi(284,`c-card`,3),aw(285,`
        `),Oi(286,`c-card-header`),aw(287,`
          `),Oi(288,`strong`),aw(289,`Angular Checks and Radios`),cl(),aw(290,` `),Oi(291,`small`),aw(292,`Default layout (stacked)`),cl(),aw(293,`
        `),cl(),aw(294,`
        `),Oi(295,`c-card-body`),aw(296,`
          `),Oi(297,`p`,10),aw(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),cl(),aw(299,`
          `),Oi(300,`app-docs-example`,33),aw(301,`
            `),Oi(302,`c-form-check`),aw(303,`
              `),Ch(304,`input`,34),aw(305,`
              `),Oi(306,`label`,35),aw(307,`Default checkbox`),cl(),aw(308,`
            `),cl(),aw(309,`
            `),Oi(310,`c-form-check`),aw(311,`
              `),Ch(312,`input`,36),aw(313,`
              `),Oi(314,`label`,37),aw(315,`Disabled checkbox`),cl(),aw(316,`
            `),cl(),aw(317,`
          `),cl(),aw(318,`
          `),Oi(319,`app-docs-example`,33),aw(320,`
            `),Oi(321,`c-form-check`),aw(322,`
              `),Ch(323,`input`,38),aw(324,`
              `),Oi(325,`label`,39),aw(326,`Default radio`),cl(),aw(327,`
            `),cl(),aw(328,`
            `),Oi(329,`c-form-check`),aw(330,`
              `),Ch(331,`input`,40),aw(332,`
              `),Oi(333,`label`,41),aw(334,`Second radio`),cl(),aw(335,`
            `),cl(),aw(336,`
            `),Oi(337,`c-form-check`),aw(338,`
              `),Ch(339,`input`,42),aw(340,`
              `),Oi(341,`label`,43),aw(342,`Disabled radio`),cl(),aw(343,`
            `),cl(),aw(344,`
          `),cl(),aw(345,`
        `),cl(),aw(346,`
      `),cl(),aw(347,`
    `),cl(),aw(348,`
    `),Oi(349,`c-col`,2),aw(350,`
      `),Oi(351,`c-card`,3),aw(352,`
        `),Oi(353,`c-card-header`),aw(354,`
          `),Oi(355,`strong`),aw(356,`Angular Checks and Radios`),cl(),aw(357,` `),Oi(358,`small`),aw(359,`Inline`),cl(),aw(360,`
        `),cl(),aw(361,`
        `),Oi(362,`c-card-body`),aw(363,`
          `),Oi(364,`p`,10),aw(365,`
            Group checkboxes or radios on the same horizontal row by adding `),Oi(366,`code`),aw(367,`inline`),cl(),aw(368,`
            boolean property to any `),Oi(369,`code`),aw(370,`<c-form-check>`),cl(),aw(371,`.
          `),cl(),aw(372,`
          `),Oi(373,`app-docs-example`,44),aw(374,`
            `),Oi(375,`c-form-check`,45),aw(376,`
              `),Ch(377,`input`,46),aw(378,`
              `),Oi(379,`label`,47),aw(380,`1`),cl(),aw(381,`
            `),cl(),aw(382,`
            `),Oi(383,`c-form-check`,48),aw(384,`
              `),Ch(385,`input`,49),aw(386,`
              `),Oi(387,`label`,50),aw(388,`2`),cl(),aw(389,`
            `),cl(),aw(390,`
            `),Oi(391,`c-form-check`,48),aw(392,`
              `),Ch(393,`input`,51),aw(394,`
              `),Oi(395,`label`,52),aw(396,`3 (disabled)`),cl(),aw(397,`
            `),cl(),aw(398,`

          `),cl(),aw(399,`
          `),Oi(400,`app-docs-example`,44),aw(401,`
            `),Oi(402,`c-form-check`,48),aw(403,`
              `),Ch(404,`input`,53),aw(405,`
              `),Oi(406,`label`,54),aw(407,`1`),cl(),aw(408,`
            `),cl(),aw(409,`
            `),Oi(410,`c-form-check`,48),aw(411,`
              `),Ch(412,`input`,55),aw(413,`
              `),Oi(414,`label`,56),aw(415,`2`),cl(),aw(416,`
            `),cl(),aw(417,`
            `),Oi(418,`c-form-check`,48),aw(419,`
              `),Ch(420,`input`,57),aw(421,`
              `),Oi(422,`label`,58),aw(423,`3 (disabled)`),cl(),aw(424,`
            `),cl(),aw(425,`
          `),cl(),aw(426,`
        `),cl(),aw(427,`
      `),cl(),aw(428,`
    `),cl(),aw(429,`
    `),Oi(430,`c-col`,2),aw(431,`
      `),Oi(432,`c-card`,3),aw(433,`
        `),Oi(434,`c-card-header`),aw(435,`
          `),Oi(436,`strong`),aw(437,`Angular Checks and Radios`),cl(),aw(438,` `),Oi(439,`small`),aw(440,`Without labels`),cl(),aw(441,`
        `),cl(),aw(442,`
        `),Oi(443,`c-card-body`),aw(444,`
          `),Oi(445,`p`,10),aw(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),Oi(447,`code`),aw(448,`aria-label`),cl(),aw(449,`).
          `),cl(),aw(450,`
          `),Oi(451,`app-docs-example`,59),aw(452,`
            `),Oi(453,`div`),aw(454,`
              `),Ch(455,`input`,60),aw(456,`
            `),cl(),aw(457,`
            `),Oi(458,`div`),aw(459,`
              `),Ch(460,`input`,61),aw(461,`
            `),cl(),aw(462,`
          `),cl(),aw(463,`
        `),cl(),aw(464,`
      `),cl(),aw(465,`
    `),cl(),aw(466,`
    `),Oi(467,`c-col`,2),aw(468,`
      `),Oi(469,`c-card`,3),aw(470,`
        `),Oi(471,`c-card-header`),aw(472,`
          `),Oi(473,`strong`),aw(474,`Toggle buttons`),cl(),aw(475,`
        `),cl(),aw(476,`
        `),Oi(477,`c-card-body`),aw(478,`
          `),Oi(479,`p`,10),aw(480,`
            Create button-like checkboxes and radio buttons by using `),Oi(481,`code`),aw(482,`button`),cl(),aw(483,` boolean
            property on the `),Oi(484,`code`),aw(485,`<CFormCheck>`),cl(),aw(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),cl(),aw(487,`
          `),Oi(488,`app-docs-example`,62),aw(489,`
            `),Oi(490,`div`,63),aw(491,`
              `),Oi(492,`c-button-group`,64),aw(493,`
                `),Ch(494,`input`,65),ME(),aw(495,`
                `),Oi(496,`label`,66),kh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),aw(497,`Checkbox 1`),cl(),aw(498,`

                `),Ch(499,`input`,67),ME(),aw(500,`
                `),Oi(501,`label`,66),kh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),aw(502,`Checkbox 2`),cl(),aw(503,`

                `),Ch(504,`input`,68),ME(),aw(505,`
                `),Oi(506,`label`,66),kh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),aw(507,`Disabled 3`),cl(),aw(508,`
              `),cl(),aw(509,`
            `),cl(),aw(510,`
          `),cl(),aw(511,`
          `),Oi(512,`app-docs-example`),aw(513,`
            `),Oi(514,`div`,69),aw(515,`
              `),Oi(516,`c-button-group`,70),aw(517,`
                `),Ch(518,`input`,71),ME(),aw(519,`
                `),Oi(520,`label`,72),kh(`click`,function(){return r.setRadioValue(`Radio1`)}),aw(521,`Radio 1`),cl(),aw(522,`

                `),Ch(523,`input`,73),ME(),aw(524,`
                `),Oi(525,`label`,74),kh(`click`,function(){return r.setRadioValue(`Radio2`)}),aw(526,`Radio 2`),cl(),aw(527,`
                `),Ch(528,`input`,75),ME(),aw(529,`
                `),Oi(530,`label`,76),kh(`click`,function(){return r.setRadioValue(`Radio3`)}),aw(531,`Radio3`),cl(),aw(532,`
              `),cl(),aw(533,`
            `),cl(),aw(534,`
          `),cl(),aw(535,`
          `),Oi(536,`h5`),aw(537,`Outlined styles`),cl(),aw(538,`
          `),Oi(539,`p`,10),aw(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),cl(),aw(541,`
          `),Oi(542,`app-docs-example`,62),aw(543,`
            `),Oi(544,`div`,63),aw(545,`
              `),Oi(546,`c-button-group`,64),aw(547,`
                `),Ch(548,`input`,65),ME(),aw(549,`
                `),Oi(550,`label`,77),kh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),aw(551,`Checkbox 1`),cl(),aw(552,`

                `),Ch(553,`input`,67),ME(),aw(554,`
                `),Oi(555,`label`,77),kh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),aw(556,`Checkbox 2`),cl(),aw(557,`

                `),Ch(558,`input`,68),ME(),aw(559,`
                `),Oi(560,`label`,77),kh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),aw(561,`Disabled
                  3`),cl(),aw(562,`
              `),cl(),aw(563,`
            `),cl(),aw(564,`
          `),cl(),aw(565,`
          `),Oi(566,`app-docs-example`),aw(567,`
            `),Oi(568,`div`,69),aw(569,`
              `),Oi(570,`c-button-group`,70),aw(571,`
                `),Ch(572,`input`,78),ME(),aw(573,`
                `),Oi(574,`label`,79),kh(`click`,function(){return r.setRadioValue(`Radio1`)}),aw(575,`Radio 1`),cl(),aw(576,`

                `),Ch(577,`input`,80),ME(),aw(578,`
                `),Oi(579,`label`,81),kh(`click`,function(){return r.setRadioValue(`Radio2`)}),aw(580,`Radio 2`),cl(),aw(581,`

                `),Ch(582,`input`,82),ME(),aw(583,`
                `),Oi(584,`label`,83),kh(`click`,function(){return r.setRadioValue(`Radio3`)}),aw(585,`Radio3`),cl(),aw(586,`
              `),cl(),aw(587,`
            `),cl(),aw(588,`
          `),cl(),aw(589,`
        `),cl(),aw(590,`
      `),cl(),aw(591,`
    `),cl(),aw(592,`
  `),cl(),aw(593,`
`),cl()),d&2&&(BI(4),wh(`formGroup`,r.formGroup),BI(20),AE(),BI(8),wh(`checked`,!0),AE(),BI(41),AE(),BI(8),AE(),BI(29),AE(),BI(8),AE(),BI(41),AE(),BI(8),AE(),BI(34),wh(`switch`,!0),BI(8),wh(`switch`,!0),BI(8),wh(`switch`,!0),BI(8),wh(`switch`,!0),BI(29),wh(`switch`,!0),BI(121),wh(`inline`,!0),BI(119),AE(),BI(5),AE(),BI(5),AE(),BI(14),AE(),BI(5),AE(),BI(5),Th(`disabled`,!0),AE(),BI(20),AE(),BI(5),AE(),BI(5),AE(),BI(14),AE(),BI(5),AE(),BI(5),Th(`disabled`,!0),AE())},dependencies:[fT,zn,Hn,Xe,Mt,ln,Tn,jn,gn,hn,vt,nT,Pv,xi,Nv,Ri,E,iT,oT,vu,BI$1,wv,c],encapsulation:2})}};export{H as ChecksRadiosComponent};