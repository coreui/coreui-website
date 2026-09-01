import{C as Cw,Di as sN,Dt as P,Ji as vte,Nn as _e,Si as rP,Vr as ke,Wn as be,X as I,Yn as bte,Yt as Ste,Zn as cN,_n as Xee,an as V,ar as dP,ba as l,ei as mte,it as JL,or as da,t as $,ut as L,v as C,vr as f,zi as ua}from"./main-JT3YLBAZ.js";import{t as E}from"./chunk-S_NItMQM.js";import{t as c}from"./chunk-BnIj8_pR.js";import{_ as on,a as Ln,d as Zn,h as gn,o as Mt,p as dn,r as Gn,s as Tn,u as Xe,v as qn,y as vt}from"./chunk-EeLlsnFF.js";var H=class p{constructor(){this.formBuilder=f(qn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=I({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(L(0,`c-row`),be(1,`
  `),ke(2,`app-docs-components`,0),be(3,`
  `),L(4,`form`,1),be(5,`
    `),L(6,`c-col`,2),be(7,`
      `),L(8,`c-card`,3),be(9,`
        `),L(10,`c-card-header`),be(11,`
          `),L(12,`strong`),be(13,`Angular Checkbox`),P(),be(14,`
        `),P(),be(15,`
        `),L(16,`c-card-body`),be(17,`
          `),L(18,`app-docs-example`,4),be(19,`
            `),L(20,`div`,5),be(21,`
              `),L(22,`c-form-check`),be(23,`
                `),ke(24,`input`,6),sN(),be(25,`
                `),L(26,`label`,7),be(27,`Default checkbox`),P(),be(28,`
              `),P(),be(29,`
              `),L(30,`c-form-check`),be(31,`
                `),ke(32,`input`,8),sN(),be(33,`
                `),L(34,`label`,9),be(35,`Checked checkbox`),P(),be(36,`
              `),P(),be(37,`
            `),P(),be(38,`
          `),P(),be(39,`
        `),P(),be(40,`
      `),P(),be(41,`
    `),P(),be(42,`
    `),L(43,`c-col`,2),be(44,`
      `),L(45,`c-card`,3),be(46,`
        `),L(47,`c-card-header`),be(48,`
          `),L(49,`strong`),be(50,`Angular Checkbox`),P(),be(51,` `),L(52,`small`),be(53,`Disabled`),P(),be(54,`
        `),P(),be(55,`
        `),L(56,`c-card-body`),be(57,`
          `),L(58,`p`,10),be(59,`
            Add the `),L(60,`code`),be(61,`disabled`),P(),be(62,` attribute and the associated `),L(63,`code`),be(64,`<label>`),P(),be(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),P(),be(66,`
          `),L(67,`app-docs-example`,11),be(68,`
            `),L(69,`div`,12),be(70,`
              `),L(71,`c-form-check`),be(72,`
                `),ke(73,`input`,13),sN(),be(74,`
                `),L(75,`label`,14),be(76,`Disabled checkbox`),P(),be(77,`
              `),P(),be(78,`
              `),L(79,`c-form-check`),be(80,`
                `),ke(81,`input`,15),sN(),be(82,`
                `),L(83,`label`,16),be(84,`Disabled checked checkbox`),P(),be(85,`
              `),P(),be(86,`
            `),P(),be(87,`
          `),P(),be(88,`
        `),P(),be(89,`
      `),P(),be(90,`
    `),P(),be(91,`
    `),L(92,`c-col`,2),be(93,`
      `),L(94,`c-card`,3),be(95,`
        `),L(96,`c-card-header`),be(97,`
          `),L(98,`strong`),be(99,`Angular Radio`),P(),be(100,`
        `),P(),be(101,`
        `),L(102,`c-card-body`),be(103,`
          `),L(104,`app-docs-example`,17),be(105,`
            `),L(106,`div`,18),be(107,`
              `),L(108,`c-form-check`),be(109,`
                `),ke(110,`input`,19),sN(),be(111,`
                `),L(112,`label`,20),be(113,`Default radio`),P(),be(114,`
              `),P(),be(115,`
              `),L(116,`c-form-check`),be(117,`
                `),ke(118,`input`,21),sN(),be(119,`
                `),L(120,`label`,20),be(121,`Checked radio`),P(),be(122,`
              `),P(),be(123,`
            `),P(),be(124,`
          `),P(),be(125,`
        `),P(),be(126,`
      `),P(),be(127,`
    `),P(),be(128,`
    `),L(129,`c-col`,2),be(130,`
      `),L(131,`c-card`,3),be(132,`
        `),L(133,`c-card-header`),be(134,`
          `),L(135,`strong`),be(136,`Angular Radio`),P(),be(137,` `),L(138,`small`),be(139,`Disabled`),P(),be(140,`
        `),P(),be(141,`
        `),L(142,`c-card-body`),be(143,`
          `),L(144,`p`,10),be(145,`
            Add the `),L(146,`code`),be(147,`disabled`),P(),be(148,` attribute and the associated `),L(149,`code`),be(150,`<label>`),P(),be(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),P(),be(152,`
          `),L(153,`app-docs-example`,22),be(154,`
            `),L(155,`div`,23),be(156,`
              `),L(157,`c-form-check`),be(158,`
                `),ke(159,`input`,19),sN(),be(160,`
                `),L(161,`label`,20),be(162,`Default radio`),P(),be(163,`
              `),P(),be(164,`
              `),L(165,`c-form-check`),be(166,`
                `),ke(167,`input`,21),sN(),be(168,`
                `),L(169,`label`,20),be(170,`Checked radio`),P(),be(171,`
              `),P(),be(172,`
            `),P(),be(173,`
          `),P(),be(174,`
        `),P(),be(175,`
      `),P(),be(176,`
    `),P(),be(177,`
    `),L(178,`c-col`,2),be(179,`
      `),L(180,`c-card`,3),be(181,`
        `),L(182,`c-card-header`),be(183,`
          `),L(184,`strong`),be(185,`Angular Switches`),P(),be(186,`
        `),P(),be(187,`
        `),L(188,`c-card-body`),be(189,`
          `),L(190,`p`,10),be(191,`
            A switch has the markup of a custom checkbox but uses the `),L(192,`code`),be(193,`switch`),P(),be(194,` boolean
            properly to render a toggle switch. Switches also support the `),L(195,`code`),be(196,`disabled`),P(),be(197,`
            attribute.
          `),P(),be(198,`
          `),L(199,`app-docs-example`,24),be(200,`
            `),L(201,`c-form-check`,25),be(202,`
              `),ke(203,`input`,26),be(204,`
              `),L(205,`label`,20),be(206,`Default switch checkbox input`),P(),be(207,`
            `),P(),be(208,`
            `),L(209,`c-form-check`,25),be(210,`
              `),ke(211,`input`,27),be(212,`
              `),L(213,`label`,20),be(214,`Checked switch checkbox input`),P(),be(215,`
            `),P(),be(216,`
            `),L(217,`c-form-check`,25),be(218,`
              `),ke(219,`input`,28),be(220,`
              `),L(221,`label`,20),be(222,`Default switch checkbox input`),P(),be(223,`
            `),P(),be(224,`
            `),L(225,`c-form-check`,25),be(226,`
              `),ke(227,`input`,29),be(228,`
              `),L(229,`label`,20),be(230,`Checked switch checkbox input`),P(),be(231,`
            `),P(),be(232,`
          `),P(),be(233,`
        `),P(),be(234,`
      `),P(),be(235,`
    `),P(),be(236,`
    `),L(237,`c-col`,2),be(238,`
      `),L(239,`c-card`,3),be(240,`
        `),L(241,`c-card-header`),be(242,`
          `),L(243,`strong`),be(244,`Angular Switches`),P(),be(245,` `),L(246,`small`),be(247,`Sizes`),P(),be(248,`
        `),P(),be(249,`
        `),L(250,`c-card-body`),be(251,`
          `),L(252,`app-docs-example`,30),be(253,`
            `),L(254,`c-form-check`,25),be(255,`
              `),ke(256,`input`,26),be(257,`
              `),L(258,`label`,20),be(259,`Default switch checkbox input`),P(),be(260,`
            `),P(),be(261,`
            `),L(262,`c-form-check`,31),be(263,`
              `),ke(264,`input`,26),be(265,`
              `),L(266,`label`,20),be(267,`Large switch checkbox input`),P(),be(268,`
            `),P(),be(269,`
            `),L(270,`c-form-check`,32),be(271,`
              `),ke(272,`input`,27),be(273,`
              `),L(274,`label`,20),be(275,`Extra large switch checkbox input`),P(),be(276,`
            `),P(),be(277,`
          `),P(),be(278,`
        `),P(),be(279,`
      `),P(),be(280,`
    `),P(),be(281,`
    `),L(282,`c-col`,2),be(283,`
      `),L(284,`c-card`,3),be(285,`
        `),L(286,`c-card-header`),be(287,`
          `),L(288,`strong`),be(289,`Angular Checks and Radios`),P(),be(290,` `),L(291,`small`),be(292,`Default layout (stacked)`),P(),be(293,`
        `),P(),be(294,`
        `),L(295,`c-card-body`),be(296,`
          `),L(297,`p`,10),be(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),P(),be(299,`
          `),L(300,`app-docs-example`,33),be(301,`
            `),L(302,`c-form-check`),be(303,`
              `),ke(304,`input`,34),be(305,`
              `),L(306,`label`,35),be(307,`Default checkbox`),P(),be(308,`
            `),P(),be(309,`
            `),L(310,`c-form-check`),be(311,`
              `),ke(312,`input`,36),be(313,`
              `),L(314,`label`,37),be(315,`Disabled checkbox`),P(),be(316,`
            `),P(),be(317,`
          `),P(),be(318,`
          `),L(319,`app-docs-example`,33),be(320,`
            `),L(321,`c-form-check`),be(322,`
              `),ke(323,`input`,38),be(324,`
              `),L(325,`label`,39),be(326,`Default radio`),P(),be(327,`
            `),P(),be(328,`
            `),L(329,`c-form-check`),be(330,`
              `),ke(331,`input`,40),be(332,`
              `),L(333,`label`,41),be(334,`Second radio`),P(),be(335,`
            `),P(),be(336,`
            `),L(337,`c-form-check`),be(338,`
              `),ke(339,`input`,42),be(340,`
              `),L(341,`label`,43),be(342,`Disabled radio`),P(),be(343,`
            `),P(),be(344,`
          `),P(),be(345,`
        `),P(),be(346,`
      `),P(),be(347,`
    `),P(),be(348,`
    `),L(349,`c-col`,2),be(350,`
      `),L(351,`c-card`,3),be(352,`
        `),L(353,`c-card-header`),be(354,`
          `),L(355,`strong`),be(356,`Angular Checks and Radios`),P(),be(357,` `),L(358,`small`),be(359,`Inline`),P(),be(360,`
        `),P(),be(361,`
        `),L(362,`c-card-body`),be(363,`
          `),L(364,`p`,10),be(365,`
            Group checkboxes or radios on the same horizontal row by adding `),L(366,`code`),be(367,`inline`),P(),be(368,`
            boolean property to any `),L(369,`code`),be(370,`<c-form-check>`),P(),be(371,`.
          `),P(),be(372,`
          `),L(373,`app-docs-example`,44),be(374,`
            `),L(375,`c-form-check`,45),be(376,`
              `),ke(377,`input`,46),be(378,`
              `),L(379,`label`,47),be(380,`1`),P(),be(381,`
            `),P(),be(382,`
            `),L(383,`c-form-check`,48),be(384,`
              `),ke(385,`input`,49),be(386,`
              `),L(387,`label`,50),be(388,`2`),P(),be(389,`
            `),P(),be(390,`
            `),L(391,`c-form-check`,48),be(392,`
              `),ke(393,`input`,51),be(394,`
              `),L(395,`label`,52),be(396,`3 (disabled)`),P(),be(397,`
            `),P(),be(398,`

          `),P(),be(399,`
          `),L(400,`app-docs-example`,44),be(401,`
            `),L(402,`c-form-check`,48),be(403,`
              `),ke(404,`input`,53),be(405,`
              `),L(406,`label`,54),be(407,`1`),P(),be(408,`
            `),P(),be(409,`
            `),L(410,`c-form-check`,48),be(411,`
              `),ke(412,`input`,55),be(413,`
              `),L(414,`label`,56),be(415,`2`),P(),be(416,`
            `),P(),be(417,`
            `),L(418,`c-form-check`,48),be(419,`
              `),ke(420,`input`,57),be(421,`
              `),L(422,`label`,58),be(423,`3 (disabled)`),P(),be(424,`
            `),P(),be(425,`
          `),P(),be(426,`
        `),P(),be(427,`
      `),P(),be(428,`
    `),P(),be(429,`
    `),L(430,`c-col`,2),be(431,`
      `),L(432,`c-card`,3),be(433,`
        `),L(434,`c-card-header`),be(435,`
          `),L(436,`strong`),be(437,`Angular Checks and Radios`),P(),be(438,` `),L(439,`small`),be(440,`Without labels`),P(),be(441,`
        `),P(),be(442,`
        `),L(443,`c-card-body`),be(444,`
          `),L(445,`p`,10),be(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),L(447,`code`),be(448,`aria-label`),P(),be(449,`).
          `),P(),be(450,`
          `),L(451,`app-docs-example`,59),be(452,`
            `),L(453,`div`),be(454,`
              `),ke(455,`input`,60),be(456,`
            `),P(),be(457,`
            `),L(458,`div`),be(459,`
              `),ke(460,`input`,61),be(461,`
            `),P(),be(462,`
          `),P(),be(463,`
        `),P(),be(464,`
      `),P(),be(465,`
    `),P(),be(466,`
    `),L(467,`c-col`,2),be(468,`
      `),L(469,`c-card`,3),be(470,`
        `),L(471,`c-card-header`),be(472,`
          `),L(473,`strong`),be(474,`Toggle buttons`),P(),be(475,`
        `),P(),be(476,`
        `),L(477,`c-card-body`),be(478,`
          `),L(479,`p`,10),be(480,`
            Create button-like checkboxes and radio buttons by using `),L(481,`code`),be(482,`button`),P(),be(483,` boolean
            property on the `),L(484,`code`),be(485,`<CFormCheck>`),P(),be(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),P(),be(487,`
          `),L(488,`app-docs-example`,62),be(489,`
            `),L(490,`div`,63),be(491,`
              `),L(492,`c-button-group`,64),be(493,`
                `),ke(494,`input`,65),sN(),be(495,`
                `),L(496,`label`,66),_e(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),be(497,`Checkbox 1`),P(),be(498,`

                `),ke(499,`input`,67),sN(),be(500,`
                `),L(501,`label`,66),_e(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),be(502,`Checkbox 2`),P(),be(503,`

                `),ke(504,`input`,68),sN(),be(505,`
                `),L(506,`label`,66),_e(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),be(507,`Disabled 3`),P(),be(508,`
              `),P(),be(509,`
            `),P(),be(510,`
          `),P(),be(511,`
          `),L(512,`app-docs-example`),be(513,`
            `),L(514,`div`,69),be(515,`
              `),L(516,`c-button-group`,70),be(517,`
                `),ke(518,`input`,71),sN(),be(519,`
                `),L(520,`label`,72),_e(`click`,function(){return r.setRadioValue(`Radio1`)}),be(521,`Radio 1`),P(),be(522,`

                `),ke(523,`input`,73),sN(),be(524,`
                `),L(525,`label`,74),_e(`click`,function(){return r.setRadioValue(`Radio2`)}),be(526,`Radio 2`),P(),be(527,`
                `),ke(528,`input`,75),sN(),be(529,`
                `),L(530,`label`,76),_e(`click`,function(){return r.setRadioValue(`Radio3`)}),be(531,`Radio3`),P(),be(532,`
              `),P(),be(533,`
            `),P(),be(534,`
          `),P(),be(535,`
          `),L(536,`h5`),be(537,`Outlined styles`),P(),be(538,`
          `),L(539,`p`,10),be(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),P(),be(541,`
          `),L(542,`app-docs-example`,62),be(543,`
            `),L(544,`div`,63),be(545,`
              `),L(546,`c-button-group`,64),be(547,`
                `),ke(548,`input`,65),sN(),be(549,`
                `),L(550,`label`,77),_e(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),be(551,`Checkbox 1`),P(),be(552,`

                `),ke(553,`input`,67),sN(),be(554,`
                `),L(555,`label`,77),_e(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),be(556,`Checkbox 2`),P(),be(557,`

                `),ke(558,`input`,68),sN(),be(559,`
                `),L(560,`label`,77),_e(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),be(561,`Disabled
                  3`),P(),be(562,`
              `),P(),be(563,`
            `),P(),be(564,`
          `),P(),be(565,`
          `),L(566,`app-docs-example`),be(567,`
            `),L(568,`div`,69),be(569,`
              `),L(570,`c-button-group`,70),be(571,`
                `),ke(572,`input`,78),sN(),be(573,`
                `),L(574,`label`,79),_e(`click`,function(){return r.setRadioValue(`Radio1`)}),be(575,`Radio 1`),P(),be(576,`

                `),ke(577,`input`,80),sN(),be(578,`
                `),L(579,`label`,81),_e(`click`,function(){return r.setRadioValue(`Radio2`)}),be(580,`Radio 2`),P(),be(581,`

                `),ke(582,`input`,82),sN(),be(583,`
                `),L(584,`label`,83),_e(`click`,function(){return r.setRadioValue(`Radio3`)}),be(585,`Radio3`),P(),be(586,`
              `),P(),be(587,`
            `),P(),be(588,`
          `),P(),be(589,`
        `),P(),be(590,`
      `),P(),be(591,`
    `),P(),be(592,`
  `),P(),be(593,`
`),P()),d&2&&(C(4),V(`formGroup`,r.formGroup),C(20),cN(),C(8),V(`checked`,!0),cN(),C(41),cN(),C(8),cN(),C(29),cN(),C(8),cN(),C(41),cN(),C(8),cN(),C(34),V(`switch`,!0),C(8),V(`switch`,!0),C(8),V(`switch`,!0),C(8),V(`switch`,!0),C(29),V(`switch`,!0),C(121),V(`inline`,!0),C(119),cN(),C(5),cN(),C(5),cN(),C(14),cN(),C(5),cN(),C(5),$(`disabled`,!0),cN(),C(20),cN(),C(5),cN(),C(5),cN(),C(14),cN(),C(5),cN(),C(5),$(`disabled`,!0),cN())},dependencies:[Ste,Zn,Ln,Xe,Mt,dn,Tn,Gn,on,gn,vt,mte,dP,ua,rP,da,E,vte,bte,Cw,Xee,JL,c],encapsulation:2})}};export{H as ChecksRadiosComponent};