import{$ as Ij,C as Doe,Dt as O,Ft as Pa,I as G,Jr as le,P as FV,Pi as sT,Pr as jB,St as Moe,Wt as Re,Yt as S,Z as IN,Zn as boe,_n as VV,ai as nH,bn as WX,d as BX,da as yj,en as T,ga as zX,gn as V,gt as La,ht as LX,in as TT,ir as dk,j as F,lr as eoe,qt as Roe,t as $X,ta as wj,ua as ye,vi as pk,wa as l,wr as h}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";var H=class p{constructor(){this.formBuilder=h(zX);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=T({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(O(0,`c-row`),ye(1,`
  `),Re(2,`app-docs-components`,0),ye(3,`
  `),O(4,`form`,1),ye(5,`
    `),O(6,`c-col`,2),ye(7,`
      `),O(8,`c-card`,3),ye(9,`
        `),O(10,`c-card-header`),ye(11,`
          `),O(12,`strong`),ye(13,`Angular Checkbox`),F(),ye(14,`
        `),F(),ye(15,`
        `),O(16,`c-card-body`),ye(17,`
          `),O(18,`app-docs-example`,4),ye(19,`
            `),O(20,`div`,5),ye(21,`
              `),O(22,`c-form-check`),ye(23,`
                `),O(24,`input`,6),dk(),F(),ye(25,`
                `),O(26,`label`,7),ye(27,`Default checkbox`),F(),ye(28,`
              `),F(),ye(29,`
              `),O(30,`c-form-check`),ye(31,`
                `),O(32,`input`,8),dk(),F(),ye(33,`
                `),O(34,`label`,9),ye(35,`Checked checkbox`),F(),ye(36,`
              `),F(),ye(37,`
            `),F(),ye(38,`
          `),F(),ye(39,`
        `),F(),ye(40,`
      `),F(),ye(41,`
    `),F(),ye(42,`
    `),O(43,`c-col`,2),ye(44,`
      `),O(45,`c-card`,3),ye(46,`
        `),O(47,`c-card-header`),ye(48,`
          `),O(49,`strong`),ye(50,`Angular Checkbox`),F(),ye(51,` `),O(52,`small`),ye(53,`Disabled`),F(),ye(54,`
        `),F(),ye(55,`
        `),O(56,`c-card-body`),ye(57,`
          `),O(58,`p`,10),ye(59,`
            Add the `),O(60,`code`),ye(61,`disabled`),F(),ye(62,` attribute and the associated `),O(63,`code`),ye(64,`<label>`),F(),ye(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),F(),ye(66,`
          `),O(67,`app-docs-example`,11),ye(68,`
            `),O(69,`div`,12),ye(70,`
              `),O(71,`c-form-check`),ye(72,`
                `),O(73,`input`,13),dk(),F(),ye(74,`
                `),O(75,`label`,14),ye(76,`Disabled checkbox`),F(),ye(77,`
              `),F(),ye(78,`
              `),O(79,`c-form-check`),ye(80,`
                `),O(81,`input`,15),dk(),F(),ye(82,`
                `),O(83,`label`,16),ye(84,`Disabled checked checkbox`),F(),ye(85,`
              `),F(),ye(86,`
            `),F(),ye(87,`
          `),F(),ye(88,`
        `),F(),ye(89,`
      `),F(),ye(90,`
    `),F(),ye(91,`
    `),O(92,`c-col`,2),ye(93,`
      `),O(94,`c-card`,3),ye(95,`
        `),O(96,`c-card-header`),ye(97,`
          `),O(98,`strong`),ye(99,`Angular Radio`),F(),ye(100,`
        `),F(),ye(101,`
        `),O(102,`c-card-body`),ye(103,`
          `),O(104,`app-docs-example`,17),ye(105,`
            `),O(106,`div`,18),ye(107,`
              `),O(108,`c-form-check`),ye(109,`
                `),O(110,`input`,19),dk(),F(),ye(111,`
                `),O(112,`label`,20),ye(113,`Default radio`),F(),ye(114,`
              `),F(),ye(115,`
              `),O(116,`c-form-check`),ye(117,`
                `),O(118,`input`,21),dk(),F(),ye(119,`
                `),O(120,`label`,20),ye(121,`Checked radio`),F(),ye(122,`
              `),F(),ye(123,`
            `),F(),ye(124,`
          `),F(),ye(125,`
        `),F(),ye(126,`
      `),F(),ye(127,`
    `),F(),ye(128,`
    `),O(129,`c-col`,2),ye(130,`
      `),O(131,`c-card`,3),ye(132,`
        `),O(133,`c-card-header`),ye(134,`
          `),O(135,`strong`),ye(136,`Angular Radio`),F(),ye(137,` `),O(138,`small`),ye(139,`Disabled`),F(),ye(140,`
        `),F(),ye(141,`
        `),O(142,`c-card-body`),ye(143,`
          `),O(144,`p`,10),ye(145,`
            Add the `),O(146,`code`),ye(147,`disabled`),F(),ye(148,` attribute and the associated `),O(149,`code`),ye(150,`<label>`),F(),ye(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),F(),ye(152,`
          `),O(153,`app-docs-example`,22),ye(154,`
            `),O(155,`div`,23),ye(156,`
              `),O(157,`c-form-check`),ye(158,`
                `),O(159,`input`,19),dk(),F(),ye(160,`
                `),O(161,`label`,20),ye(162,`Default radio`),F(),ye(163,`
              `),F(),ye(164,`
              `),O(165,`c-form-check`),ye(166,`
                `),O(167,`input`,21),dk(),F(),ye(168,`
                `),O(169,`label`,20),ye(170,`Checked radio`),F(),ye(171,`
              `),F(),ye(172,`
            `),F(),ye(173,`
          `),F(),ye(174,`
        `),F(),ye(175,`
      `),F(),ye(176,`
    `),F(),ye(177,`
    `),O(178,`c-col`,2),ye(179,`
      `),O(180,`c-card`,3),ye(181,`
        `),O(182,`c-card-header`),ye(183,`
          `),O(184,`strong`),ye(185,`Angular Switches`),F(),ye(186,`
        `),F(),ye(187,`
        `),O(188,`c-card-body`),ye(189,`
          `),O(190,`p`,10),ye(191,`
            A switch has the markup of a custom checkbox but uses the `),O(192,`code`),ye(193,`switch`),F(),ye(194,` boolean
            properly to render a toggle switch. Switches also support the `),O(195,`code`),ye(196,`disabled`),F(),ye(197,`
            attribute.
          `),F(),ye(198,`
          `),O(199,`app-docs-example`,24),ye(200,`
            `),O(201,`c-form-check`,25),ye(202,`
              `),Re(203,`input`,26),ye(204,`
              `),O(205,`label`,20),ye(206,`Default switch checkbox input`),F(),ye(207,`
            `),F(),ye(208,`
            `),O(209,`c-form-check`,25),ye(210,`
              `),Re(211,`input`,27),ye(212,`
              `),O(213,`label`,20),ye(214,`Checked switch checkbox input`),F(),ye(215,`
            `),F(),ye(216,`
            `),O(217,`c-form-check`,25),ye(218,`
              `),Re(219,`input`,28),ye(220,`
              `),O(221,`label`,20),ye(222,`Default switch checkbox input`),F(),ye(223,`
            `),F(),ye(224,`
            `),O(225,`c-form-check`,25),ye(226,`
              `),Re(227,`input`,29),ye(228,`
              `),O(229,`label`,20),ye(230,`Checked switch checkbox input`),F(),ye(231,`
            `),F(),ye(232,`
          `),F(),ye(233,`
        `),F(),ye(234,`
      `),F(),ye(235,`
    `),F(),ye(236,`
    `),O(237,`c-col`,2),ye(238,`
      `),O(239,`c-card`,3),ye(240,`
        `),O(241,`c-card-header`),ye(242,`
          `),O(243,`strong`),ye(244,`Angular Switches`),F(),ye(245,` `),O(246,`small`),ye(247,`Sizes`),F(),ye(248,`
        `),F(),ye(249,`
        `),O(250,`c-card-body`),ye(251,`
          `),O(252,`app-docs-example`,30),ye(253,`
            `),O(254,`c-form-check`,25),ye(255,`
              `),Re(256,`input`,26),ye(257,`
              `),O(258,`label`,20),ye(259,`Default switch checkbox input`),F(),ye(260,`
            `),F(),ye(261,`
            `),O(262,`c-form-check`,31),ye(263,`
              `),Re(264,`input`,26),ye(265,`
              `),O(266,`label`,20),ye(267,`Large switch checkbox input`),F(),ye(268,`
            `),F(),ye(269,`
            `),O(270,`c-form-check`,32),ye(271,`
              `),Re(272,`input`,27),ye(273,`
              `),O(274,`label`,20),ye(275,`Extra large switch checkbox input`),F(),ye(276,`
            `),F(),ye(277,`
          `),F(),ye(278,`
        `),F(),ye(279,`
      `),F(),ye(280,`
    `),F(),ye(281,`
    `),O(282,`c-col`,2),ye(283,`
      `),O(284,`c-card`,3),ye(285,`
        `),O(286,`c-card-header`),ye(287,`
          `),O(288,`strong`),ye(289,`Angular Checks and Radios`),F(),ye(290,` `),O(291,`small`),ye(292,`Default layout (stacked)`),F(),ye(293,`
        `),F(),ye(294,`
        `),O(295,`c-card-body`),ye(296,`
          `),O(297,`p`,10),ye(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),F(),ye(299,`
          `),O(300,`app-docs-example`,33),ye(301,`
            `),O(302,`c-form-check`),ye(303,`
              `),Re(304,`input`,34),ye(305,`
              `),O(306,`label`,35),ye(307,`Default checkbox`),F(),ye(308,`
            `),F(),ye(309,`
            `),O(310,`c-form-check`),ye(311,`
              `),Re(312,`input`,36),ye(313,`
              `),O(314,`label`,37),ye(315,`Disabled checkbox`),F(),ye(316,`
            `),F(),ye(317,`
          `),F(),ye(318,`
          `),O(319,`app-docs-example`,33),ye(320,`
            `),O(321,`c-form-check`),ye(322,`
              `),Re(323,`input`,38),ye(324,`
              `),O(325,`label`,39),ye(326,`Default radio`),F(),ye(327,`
            `),F(),ye(328,`
            `),O(329,`c-form-check`),ye(330,`
              `),Re(331,`input`,40),ye(332,`
              `),O(333,`label`,41),ye(334,`Second radio`),F(),ye(335,`
            `),F(),ye(336,`
            `),O(337,`c-form-check`),ye(338,`
              `),Re(339,`input`,42),ye(340,`
              `),O(341,`label`,43),ye(342,`Disabled radio`),F(),ye(343,`
            `),F(),ye(344,`
          `),F(),ye(345,`
        `),F(),ye(346,`
      `),F(),ye(347,`
    `),F(),ye(348,`
    `),O(349,`c-col`,2),ye(350,`
      `),O(351,`c-card`,3),ye(352,`
        `),O(353,`c-card-header`),ye(354,`
          `),O(355,`strong`),ye(356,`Angular Checks and Radios`),F(),ye(357,` `),O(358,`small`),ye(359,`Inline`),F(),ye(360,`
        `),F(),ye(361,`
        `),O(362,`c-card-body`),ye(363,`
          `),O(364,`p`,10),ye(365,`
            Group checkboxes or radios on the same horizontal row by adding `),O(366,`code`),ye(367,`inline`),F(),ye(368,`
            boolean property to any `),O(369,`code`),ye(370,`<c-form-check>`),F(),ye(371,`.
          `),F(),ye(372,`
          `),O(373,`app-docs-example`,44),ye(374,`
            `),O(375,`c-form-check`,45),ye(376,`
              `),Re(377,`input`,46),ye(378,`
              `),O(379,`label`,47),ye(380,`1`),F(),ye(381,`
            `),F(),ye(382,`
            `),O(383,`c-form-check`,48),ye(384,`
              `),Re(385,`input`,49),ye(386,`
              `),O(387,`label`,50),ye(388,`2`),F(),ye(389,`
            `),F(),ye(390,`
            `),O(391,`c-form-check`,48),ye(392,`
              `),Re(393,`input`,51),ye(394,`
              `),O(395,`label`,52),ye(396,`3 (disabled)`),F(),ye(397,`
            `),F(),ye(398,`

          `),F(),ye(399,`
          `),O(400,`app-docs-example`,44),ye(401,`
            `),O(402,`c-form-check`,48),ye(403,`
              `),Re(404,`input`,53),ye(405,`
              `),O(406,`label`,54),ye(407,`1`),F(),ye(408,`
            `),F(),ye(409,`
            `),O(410,`c-form-check`,48),ye(411,`
              `),Re(412,`input`,55),ye(413,`
              `),O(414,`label`,56),ye(415,`2`),F(),ye(416,`
            `),F(),ye(417,`
            `),O(418,`c-form-check`,48),ye(419,`
              `),Re(420,`input`,57),ye(421,`
              `),O(422,`label`,58),ye(423,`3 (disabled)`),F(),ye(424,`
            `),F(),ye(425,`
          `),F(),ye(426,`
        `),F(),ye(427,`
      `),F(),ye(428,`
    `),F(),ye(429,`
    `),O(430,`c-col`,2),ye(431,`
      `),O(432,`c-card`,3),ye(433,`
        `),O(434,`c-card-header`),ye(435,`
          `),O(436,`strong`),ye(437,`Angular Checks and Radios`),F(),ye(438,` `),O(439,`small`),ye(440,`Without labels`),F(),ye(441,`
        `),F(),ye(442,`
        `),O(443,`c-card-body`),ye(444,`
          `),O(445,`p`,10),ye(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),O(447,`code`),ye(448,`aria-label`),F(),ye(449,`).
          `),F(),ye(450,`
          `),O(451,`app-docs-example`,59),ye(452,`
            `),O(453,`div`),ye(454,`
              `),Re(455,`input`,60),ye(456,`
            `),F(),ye(457,`
            `),O(458,`div`),ye(459,`
              `),Re(460,`input`,61),ye(461,`
            `),F(),ye(462,`
          `),F(),ye(463,`
        `),F(),ye(464,`
      `),F(),ye(465,`
    `),F(),ye(466,`
    `),O(467,`c-col`,2),ye(468,`
      `),O(469,`c-card`,3),ye(470,`
        `),O(471,`c-card-header`),ye(472,`
          `),O(473,`strong`),ye(474,`Toggle buttons`),F(),ye(475,`
        `),F(),ye(476,`
        `),O(477,`c-card-body`),ye(478,`
          `),O(479,`p`,10),ye(480,`
            Create button-like checkboxes and radio buttons by using `),O(481,`code`),ye(482,`button`),F(),ye(483,` boolean
            property on the `),O(484,`code`),ye(485,`<CFormCheck>`),F(),ye(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),F(),ye(487,`
          `),O(488,`app-docs-example`,62),ye(489,`
            `),O(490,`div`,63),ye(491,`
              `),O(492,`c-button-group`,64),ye(493,`
                `),O(494,`input`,65),dk(),F(),ye(495,`
                `),O(496,`label`,66),le(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),ye(497,`Checkbox 1`),F(),ye(498,`

                `),O(499,`input`,67),dk(),F(),ye(500,`
                `),O(501,`label`,66),le(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),ye(502,`Checkbox 2`),F(),ye(503,`

                `),O(504,`input`,68),dk(),F(),ye(505,`
                `),O(506,`label`,66),le(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),ye(507,`Disabled 3`),F(),ye(508,`
              `),F(),ye(509,`
            `),F(),ye(510,`
          `),F(),ye(511,`
          `),O(512,`app-docs-example`),ye(513,`
            `),O(514,`div`,69),ye(515,`
              `),O(516,`c-button-group`,70),ye(517,`
                `),O(518,`input`,71),dk(),F(),ye(519,`
                `),O(520,`label`,72),le(`click`,function(){return r.setRadioValue(`Radio1`)}),ye(521,`Radio 1`),F(),ye(522,`

                `),O(523,`input`,73),dk(),F(),ye(524,`
                `),O(525,`label`,74),le(`click`,function(){return r.setRadioValue(`Radio2`)}),ye(526,`Radio 2`),F(),ye(527,`
                `),O(528,`input`,75),dk(),F(),ye(529,`
                `),O(530,`label`,76),le(`click`,function(){return r.setRadioValue(`Radio3`)}),ye(531,`Radio3`),F(),ye(532,`
              `),F(),ye(533,`
            `),F(),ye(534,`
          `),F(),ye(535,`
          `),O(536,`h5`),ye(537,`Outlined styles`),F(),ye(538,`
          `),O(539,`p`,10),ye(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),F(),ye(541,`
          `),O(542,`app-docs-example`,62),ye(543,`
            `),O(544,`div`,63),ye(545,`
              `),O(546,`c-button-group`,64),ye(547,`
                `),O(548,`input`,65),dk(),F(),ye(549,`
                `),O(550,`label`,77),le(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),ye(551,`Checkbox 1`),F(),ye(552,`

                `),O(553,`input`,67),dk(),F(),ye(554,`
                `),O(555,`label`,77),le(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),ye(556,`Checkbox 2`),F(),ye(557,`

                `),O(558,`input`,68),dk(),F(),ye(559,`
                `),O(560,`label`,77),le(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),ye(561,`Disabled
                  3`),F(),ye(562,`
              `),F(),ye(563,`
            `),F(),ye(564,`
          `),F(),ye(565,`
          `),O(566,`app-docs-example`),ye(567,`
            `),O(568,`div`,69),ye(569,`
              `),O(570,`c-button-group`,70),ye(571,`
                `),O(572,`input`,78),dk(),F(),ye(573,`
                `),O(574,`label`,79),le(`click`,function(){return r.setRadioValue(`Radio1`)}),ye(575,`Radio 1`),F(),ye(576,`

                `),O(577,`input`,80),dk(),F(),ye(578,`
                `),O(579,`label`,81),le(`click`,function(){return r.setRadioValue(`Radio2`)}),ye(580,`Radio 2`),F(),ye(581,`

                `),O(582,`input`,82),dk(),F(),ye(583,`
                `),O(584,`label`,83),le(`click`,function(){return r.setRadioValue(`Radio3`)}),ye(585,`Radio3`),F(),ye(586,`
              `),F(),ye(587,`
            `),F(),ye(588,`
          `),F(),ye(589,`
        `),F(),ye(590,`
      `),F(),ye(591,`
    `),F(),ye(592,`
  `),F(),ye(593,`
`),F()),d&2&&(S(4),V(`formGroup`,r.formGroup),S(20),pk(),S(8),V(`checked`,!0),pk(),S(41),pk(),S(8),pk(),S(29),pk(),S(8),pk(),S(41),pk(),S(8),pk(),S(34),V(`switch`,!0),S(8),V(`switch`,!0),S(8),V(`switch`,!0),S(8),V(`switch`,!0),S(29),V(`switch`,!0),S(121),V(`inline`,!0),S(119),pk(),S(5),pk(),S(5),pk(),S(14),pk(),S(5),pk(),S(5),G(`disabled`,!0),pk(),S(20),pk(),S(5),pk(),S(5),pk(),S(14),pk(),S(5),pk(),S(5),G(`disabled`,!0),pk())},dependencies:[Roe,WX,$X,sT,jB,Ij,LX,BX,yj,wj,TT,boe,nH,Pa,VV,La,E,Doe,Moe,IN,eoe,FV,c],encapsulation:2})}};export{H as ChecksRadiosComponent};