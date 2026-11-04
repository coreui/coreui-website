import{$t as V,A as F,Ar as hse,Bi as uJ,D as E,Hr as ke,J as IT,Lr as ja,Pn as _,Ta as l,U as Hk,Vr as k,Yi as vH,Yt as Uk,Zr as nV,_i as qT,cr as dse,d as Ba,fa as ye,hr as fe,ht as Mse,ji as sJ,li as p,nt as K,pn as Xj,q as IH,qt as UH,st as Kj,ti as oJ,ui as pJ,vr as fse,wr as gj,xr as gJ,ya as zoe,yn as YN}from"./main-U5YNMN7V.js";import{t as E$1}from"./chunk-XCt8LgbN.js";import{t as c}from"./chunk-B_o4dmI3.js";var H=class p$1{constructor(){this.formBuilder=p(pJ);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p$1)}}static{this.ɵcmp=E({type:p$1,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(k(0,`c-row`),ye(1,`
  `),ke(2,`app-docs-components`,0),ye(3,`
  `),k(4,`form`,1),ye(5,`
    `),k(6,`c-col`,2),ye(7,`
      `),k(8,`c-card`,3),ye(9,`
        `),k(10,`c-card-header`),ye(11,`
          `),k(12,`strong`),ye(13,`Angular Checkbox`),F(),ye(14,`
        `),F(),ye(15,`
        `),k(16,`c-card-body`),ye(17,`
          `),k(18,`app-docs-example`,4),ye(19,`
            `),k(20,`div`,5),ye(21,`
              `),k(22,`c-form-check`),ye(23,`
                `),k(24,`input`,6),Hk(),F(),ye(25,`
                `),k(26,`label`,7),ye(27,`Default checkbox`),F(),ye(28,`
              `),F(),ye(29,`
              `),k(30,`c-form-check`),ye(31,`
                `),k(32,`input`,8),Hk(),F(),ye(33,`
                `),k(34,`label`,9),ye(35,`Checked checkbox`),F(),ye(36,`
              `),F(),ye(37,`
            `),F(),ye(38,`
          `),F(),ye(39,`
        `),F(),ye(40,`
      `),F(),ye(41,`
    `),F(),ye(42,`
    `),k(43,`c-col`,2),ye(44,`
      `),k(45,`c-card`,3),ye(46,`
        `),k(47,`c-card-header`),ye(48,`
          `),k(49,`strong`),ye(50,`Angular Checkbox`),F(),ye(51,` `),k(52,`small`),ye(53,`Disabled`),F(),ye(54,`
        `),F(),ye(55,`
        `),k(56,`c-card-body`),ye(57,`
          `),k(58,`p`,10),ye(59,`
            Add the `),k(60,`code`),ye(61,`disabled`),F(),ye(62,` attribute and the associated `),k(63,`code`),ye(64,`<label>`),F(),ye(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),F(),ye(66,`
          `),k(67,`app-docs-example`,11),ye(68,`
            `),k(69,`div`,12),ye(70,`
              `),k(71,`c-form-check`),ye(72,`
                `),k(73,`input`,13),Hk(),F(),ye(74,`
                `),k(75,`label`,14),ye(76,`Disabled checkbox`),F(),ye(77,`
              `),F(),ye(78,`
              `),k(79,`c-form-check`),ye(80,`
                `),k(81,`input`,15),Hk(),F(),ye(82,`
                `),k(83,`label`,16),ye(84,`Disabled checked checkbox`),F(),ye(85,`
              `),F(),ye(86,`
            `),F(),ye(87,`
          `),F(),ye(88,`
        `),F(),ye(89,`
      `),F(),ye(90,`
    `),F(),ye(91,`
    `),k(92,`c-col`,2),ye(93,`
      `),k(94,`c-card`,3),ye(95,`
        `),k(96,`c-card-header`),ye(97,`
          `),k(98,`strong`),ye(99,`Angular Radio`),F(),ye(100,`
        `),F(),ye(101,`
        `),k(102,`c-card-body`),ye(103,`
          `),k(104,`app-docs-example`,17),ye(105,`
            `),k(106,`div`,18),ye(107,`
              `),k(108,`c-form-check`),ye(109,`
                `),k(110,`input`,19),Hk(),F(),ye(111,`
                `),k(112,`label`,20),ye(113,`Default radio`),F(),ye(114,`
              `),F(),ye(115,`
              `),k(116,`c-form-check`),ye(117,`
                `),k(118,`input`,21),Hk(),F(),ye(119,`
                `),k(120,`label`,20),ye(121,`Checked radio`),F(),ye(122,`
              `),F(),ye(123,`
            `),F(),ye(124,`
          `),F(),ye(125,`
        `),F(),ye(126,`
      `),F(),ye(127,`
    `),F(),ye(128,`
    `),k(129,`c-col`,2),ye(130,`
      `),k(131,`c-card`,3),ye(132,`
        `),k(133,`c-card-header`),ye(134,`
          `),k(135,`strong`),ye(136,`Angular Radio`),F(),ye(137,` `),k(138,`small`),ye(139,`Disabled`),F(),ye(140,`
        `),F(),ye(141,`
        `),k(142,`c-card-body`),ye(143,`
          `),k(144,`p`,10),ye(145,`
            Add the `),k(146,`code`),ye(147,`disabled`),F(),ye(148,` attribute and the associated `),k(149,`code`),ye(150,`<label>`),F(),ye(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),F(),ye(152,`
          `),k(153,`app-docs-example`,22),ye(154,`
            `),k(155,`div`,23),ye(156,`
              `),k(157,`c-form-check`),ye(158,`
                `),k(159,`input`,19),Hk(),F(),ye(160,`
                `),k(161,`label`,20),ye(162,`Default radio`),F(),ye(163,`
              `),F(),ye(164,`
              `),k(165,`c-form-check`),ye(166,`
                `),k(167,`input`,21),Hk(),F(),ye(168,`
                `),k(169,`label`,20),ye(170,`Checked radio`),F(),ye(171,`
              `),F(),ye(172,`
            `),F(),ye(173,`
          `),F(),ye(174,`
        `),F(),ye(175,`
      `),F(),ye(176,`
    `),F(),ye(177,`
    `),k(178,`c-col`,2),ye(179,`
      `),k(180,`c-card`,3),ye(181,`
        `),k(182,`c-card-header`),ye(183,`
          `),k(184,`strong`),ye(185,`Angular Switches`),F(),ye(186,`
        `),F(),ye(187,`
        `),k(188,`c-card-body`),ye(189,`
          `),k(190,`p`,10),ye(191,`
            A switch has the markup of a custom checkbox but uses the `),k(192,`code`),ye(193,`switch`),F(),ye(194,` boolean
            properly to render a toggle switch. Switches also support the `),k(195,`code`),ye(196,`disabled`),F(),ye(197,`
            attribute.
          `),F(),ye(198,`
          `),k(199,`app-docs-example`,24),ye(200,`
            `),k(201,`c-form-check`,25),ye(202,`
              `),ke(203,`input`,26),ye(204,`
              `),k(205,`label`,20),ye(206,`Default switch checkbox input`),F(),ye(207,`
            `),F(),ye(208,`
            `),k(209,`c-form-check`,25),ye(210,`
              `),ke(211,`input`,27),ye(212,`
              `),k(213,`label`,20),ye(214,`Checked switch checkbox input`),F(),ye(215,`
            `),F(),ye(216,`
            `),k(217,`c-form-check`,25),ye(218,`
              `),ke(219,`input`,28),ye(220,`
              `),k(221,`label`,20),ye(222,`Default switch checkbox input`),F(),ye(223,`
            `),F(),ye(224,`
            `),k(225,`c-form-check`,25),ye(226,`
              `),ke(227,`input`,29),ye(228,`
              `),k(229,`label`,20),ye(230,`Checked switch checkbox input`),F(),ye(231,`
            `),F(),ye(232,`
          `),F(),ye(233,`
        `),F(),ye(234,`
      `),F(),ye(235,`
    `),F(),ye(236,`
    `),k(237,`c-col`,2),ye(238,`
      `),k(239,`c-card`,3),ye(240,`
        `),k(241,`c-card-header`),ye(242,`
          `),k(243,`strong`),ye(244,`Angular Switches`),F(),ye(245,` `),k(246,`small`),ye(247,`Sizes`),F(),ye(248,`
        `),F(),ye(249,`
        `),k(250,`c-card-body`),ye(251,`
          `),k(252,`app-docs-example`,30),ye(253,`
            `),k(254,`c-form-check`,25),ye(255,`
              `),ke(256,`input`,26),ye(257,`
              `),k(258,`label`,20),ye(259,`Default switch checkbox input`),F(),ye(260,`
            `),F(),ye(261,`
            `),k(262,`c-form-check`,31),ye(263,`
              `),ke(264,`input`,26),ye(265,`
              `),k(266,`label`,20),ye(267,`Large switch checkbox input`),F(),ye(268,`
            `),F(),ye(269,`
            `),k(270,`c-form-check`,32),ye(271,`
              `),ke(272,`input`,27),ye(273,`
              `),k(274,`label`,20),ye(275,`Extra large switch checkbox input`),F(),ye(276,`
            `),F(),ye(277,`
          `),F(),ye(278,`
        `),F(),ye(279,`
      `),F(),ye(280,`
    `),F(),ye(281,`
    `),k(282,`c-col`,2),ye(283,`
      `),k(284,`c-card`,3),ye(285,`
        `),k(286,`c-card-header`),ye(287,`
          `),k(288,`strong`),ye(289,`Angular Checks and Radios`),F(),ye(290,` `),k(291,`small`),ye(292,`Default layout (stacked)`),F(),ye(293,`
        `),F(),ye(294,`
        `),k(295,`c-card-body`),ye(296,`
          `),k(297,`p`,10),ye(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),F(),ye(299,`
          `),k(300,`app-docs-example`,33),ye(301,`
            `),k(302,`c-form-check`),ye(303,`
              `),ke(304,`input`,34),ye(305,`
              `),k(306,`label`,35),ye(307,`Default checkbox`),F(),ye(308,`
            `),F(),ye(309,`
            `),k(310,`c-form-check`),ye(311,`
              `),ke(312,`input`,36),ye(313,`
              `),k(314,`label`,37),ye(315,`Disabled checkbox`),F(),ye(316,`
            `),F(),ye(317,`
          `),F(),ye(318,`
          `),k(319,`app-docs-example`,33),ye(320,`
            `),k(321,`c-form-check`),ye(322,`
              `),ke(323,`input`,38),ye(324,`
              `),k(325,`label`,39),ye(326,`Default radio`),F(),ye(327,`
            `),F(),ye(328,`
            `),k(329,`c-form-check`),ye(330,`
              `),ke(331,`input`,40),ye(332,`
              `),k(333,`label`,41),ye(334,`Second radio`),F(),ye(335,`
            `),F(),ye(336,`
            `),k(337,`c-form-check`),ye(338,`
              `),ke(339,`input`,42),ye(340,`
              `),k(341,`label`,43),ye(342,`Disabled radio`),F(),ye(343,`
            `),F(),ye(344,`
          `),F(),ye(345,`
        `),F(),ye(346,`
      `),F(),ye(347,`
    `),F(),ye(348,`
    `),k(349,`c-col`,2),ye(350,`
      `),k(351,`c-card`,3),ye(352,`
        `),k(353,`c-card-header`),ye(354,`
          `),k(355,`strong`),ye(356,`Angular Checks and Radios`),F(),ye(357,` `),k(358,`small`),ye(359,`Inline`),F(),ye(360,`
        `),F(),ye(361,`
        `),k(362,`c-card-body`),ye(363,`
          `),k(364,`p`,10),ye(365,`
            Group checkboxes or radios on the same horizontal row by adding `),k(366,`code`),ye(367,`inline`),F(),ye(368,`
            boolean property to any `),k(369,`code`),ye(370,`<c-form-check>`),F(),ye(371,`.
          `),F(),ye(372,`
          `),k(373,`app-docs-example`,44),ye(374,`
            `),k(375,`c-form-check`,45),ye(376,`
              `),ke(377,`input`,46),ye(378,`
              `),k(379,`label`,47),ye(380,`1`),F(),ye(381,`
            `),F(),ye(382,`
            `),k(383,`c-form-check`,48),ye(384,`
              `),ke(385,`input`,49),ye(386,`
              `),k(387,`label`,50),ye(388,`2`),F(),ye(389,`
            `),F(),ye(390,`
            `),k(391,`c-form-check`,48),ye(392,`
              `),ke(393,`input`,51),ye(394,`
              `),k(395,`label`,52),ye(396,`3 (disabled)`),F(),ye(397,`
            `),F(),ye(398,`

          `),F(),ye(399,`
          `),k(400,`app-docs-example`,44),ye(401,`
            `),k(402,`c-form-check`,48),ye(403,`
              `),ke(404,`input`,53),ye(405,`
              `),k(406,`label`,54),ye(407,`1`),F(),ye(408,`
            `),F(),ye(409,`
            `),k(410,`c-form-check`,48),ye(411,`
              `),ke(412,`input`,55),ye(413,`
              `),k(414,`label`,56),ye(415,`2`),F(),ye(416,`
            `),F(),ye(417,`
            `),k(418,`c-form-check`,48),ye(419,`
              `),ke(420,`input`,57),ye(421,`
              `),k(422,`label`,58),ye(423,`3 (disabled)`),F(),ye(424,`
            `),F(),ye(425,`
          `),F(),ye(426,`
        `),F(),ye(427,`
      `),F(),ye(428,`
    `),F(),ye(429,`
    `),k(430,`c-col`,2),ye(431,`
      `),k(432,`c-card`,3),ye(433,`
        `),k(434,`c-card-header`),ye(435,`
          `),k(436,`strong`),ye(437,`Angular Checks and Radios`),F(),ye(438,` `),k(439,`small`),ye(440,`Without labels`),F(),ye(441,`
        `),F(),ye(442,`
        `),k(443,`c-card-body`),ye(444,`
          `),k(445,`p`,10),ye(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),k(447,`code`),ye(448,`aria-label`),F(),ye(449,`).
          `),F(),ye(450,`
          `),k(451,`app-docs-example`,59),ye(452,`
            `),k(453,`div`),ye(454,`
              `),ke(455,`input`,60),ye(456,`
            `),F(),ye(457,`
            `),k(458,`div`),ye(459,`
              `),ke(460,`input`,61),ye(461,`
            `),F(),ye(462,`
          `),F(),ye(463,`
        `),F(),ye(464,`
      `),F(),ye(465,`
    `),F(),ye(466,`
    `),k(467,`c-col`,2),ye(468,`
      `),k(469,`c-card`,3),ye(470,`
        `),k(471,`c-card-header`),ye(472,`
          `),k(473,`strong`),ye(474,`Toggle buttons`),F(),ye(475,`
        `),F(),ye(476,`
        `),k(477,`c-card-body`),ye(478,`
          `),k(479,`p`,10),ye(480,`
            Create button-like checkboxes and radio buttons by using `),k(481,`code`),ye(482,`button`),F(),ye(483,` boolean
            property on the `),k(484,`code`),ye(485,`<CFormCheck>`),F(),ye(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),F(),ye(487,`
          `),k(488,`app-docs-example`,62),ye(489,`
            `),k(490,`div`,63),ye(491,`
              `),k(492,`c-button-group`,64),ye(493,`
                `),k(494,`input`,65),Hk(),F(),ye(495,`
                `),k(496,`label`,66),fe(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),ye(497,`Checkbox 1`),F(),ye(498,`

                `),k(499,`input`,67),Hk(),F(),ye(500,`
                `),k(501,`label`,66),fe(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),ye(502,`Checkbox 2`),F(),ye(503,`

                `),k(504,`input`,68),Hk(),F(),ye(505,`
                `),k(506,`label`,66),fe(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),ye(507,`Disabled 3`),F(),ye(508,`
              `),F(),ye(509,`
            `),F(),ye(510,`
          `),F(),ye(511,`
          `),k(512,`app-docs-example`),ye(513,`
            `),k(514,`div`,69),ye(515,`
              `),k(516,`c-button-group`,70),ye(517,`
                `),k(518,`input`,71),Hk(),F(),ye(519,`
                `),k(520,`label`,72),fe(`click`,function(){return r.setRadioValue(`Radio1`)}),ye(521,`Radio 1`),F(),ye(522,`

                `),k(523,`input`,73),Hk(),F(),ye(524,`
                `),k(525,`label`,74),fe(`click`,function(){return r.setRadioValue(`Radio2`)}),ye(526,`Radio 2`),F(),ye(527,`
                `),k(528,`input`,75),Hk(),F(),ye(529,`
                `),k(530,`label`,76),fe(`click`,function(){return r.setRadioValue(`Radio3`)}),ye(531,`Radio3`),F(),ye(532,`
              `),F(),ye(533,`
            `),F(),ye(534,`
          `),F(),ye(535,`
          `),k(536,`h5`),ye(537,`Outlined styles`),F(),ye(538,`
          `),k(539,`p`,10),ye(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),F(),ye(541,`
          `),k(542,`app-docs-example`,62),ye(543,`
            `),k(544,`div`,63),ye(545,`
              `),k(546,`c-button-group`,64),ye(547,`
                `),k(548,`input`,65),Hk(),F(),ye(549,`
                `),k(550,`label`,77),fe(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),ye(551,`Checkbox 1`),F(),ye(552,`

                `),k(553,`input`,67),Hk(),F(),ye(554,`
                `),k(555,`label`,77),fe(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),ye(556,`Checkbox 2`),F(),ye(557,`

                `),k(558,`input`,68),Hk(),F(),ye(559,`
                `),k(560,`label`,77),fe(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),ye(561,`Disabled
                  3`),F(),ye(562,`
              `),F(),ye(563,`
            `),F(),ye(564,`
          `),F(),ye(565,`
          `),k(566,`app-docs-example`),ye(567,`
            `),k(568,`div`,69),ye(569,`
              `),k(570,`c-button-group`,70),ye(571,`
                `),k(572,`input`,78),Hk(),F(),ye(573,`
                `),k(574,`label`,79),fe(`click`,function(){return r.setRadioValue(`Radio1`)}),ye(575,`Radio 1`),F(),ye(576,`

                `),k(577,`input`,80),Hk(),F(),ye(578,`
                `),k(579,`label`,81),fe(`click`,function(){return r.setRadioValue(`Radio2`)}),ye(580,`Radio 2`),F(),ye(581,`

                `),k(582,`input`,82),Hk(),F(),ye(583,`
                `),k(584,`label`,83),fe(`click`,function(){return r.setRadioValue(`Radio3`)}),ye(585,`Radio3`),F(),ye(586,`
              `),F(),ye(587,`
            `),F(),ye(588,`
          `),F(),ye(589,`
        `),F(),ye(590,`
      `),F(),ye(591,`
    `),F(),ye(592,`
  `),F(),ye(593,`
`),F()),d&2&&(_(4),V(`formGroup`,r.formGroup),_(20),Uk(),_(8),V(`checked`,!0),Uk(),_(41),Uk(),_(8),Uk(),_(29),Uk(),_(8),Uk(),_(41),Uk(),_(8),Uk(),_(34),V(`switch`,!0),_(8),V(`switch`,!0),_(8),V(`switch`,!0),_(8),V(`switch`,!0),_(29),V(`switch`,!0),_(121),V(`inline`,!0),_(119),Uk(),_(5),Uk(),_(5),Uk(),_(14),Uk(),_(5),Uk(),_(5),K(`disabled`,!0),Uk(),_(20),Uk(),_(5),Uk(),_(5),Uk(),_(14),Uk(),_(5),Uk(),_(5),K(`disabled`,!0),Uk())},dependencies:[Mse,gJ,uJ,IT,gj,Xj,oJ,sJ,Kj,nV,qT,dse,UH,Ba,IH,ja,E$1,fse,hse,YN,zoe,vH,c],encapsulation:2})}};export{H as ChecksRadiosComponent};