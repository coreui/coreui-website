import{t as E}from"./chunk-HlRlxK9-.js";import{t as c}from"./chunk-DBdESImF.js";import{$n as cte,C as Cle,Ca as l,Fi as ste,Ir as jH,L as G1,Lr as jN,M as F,Mt as Oe,N as FH,Qn as cle,Ri as tH,Ui as tte,Wi as uU,Yi as vN,Yr as lle,Zt as S,_a as z,ar as dte,at as K1,c as AU,ci as oU,hi as pe,in as Uae,mt as L,n as $H,or as eA,ot as Ka,pi as p,rn as U,rr as dle,sa as x,si as nte,un as Wa,x as Ce}from"./main-VQBM3OGL.js";var H=class p$1{constructor(){this.formBuilder=p(cte);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p$1)}}static{this.ɵcmp=x({type:p$1,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(F(0,`c-row`),Ce(1,`
  `),Oe(2,`app-docs-components`,0),Ce(3,`
  `),F(4,`form`,1),Ce(5,`
    `),F(6,`c-col`,2),Ce(7,`
      `),F(8,`c-card`,3),Ce(9,`
        `),F(10,`c-card-header`),Ce(11,`
          `),F(12,`strong`),Ce(13,`Angular Checkbox`),L(),Ce(14,`
        `),L(),Ce(15,`
        `),F(16,`c-card-body`),Ce(17,`
          `),F(18,`app-docs-example`,4),Ce(19,`
            `),F(20,`div`,5),Ce(21,`
              `),F(22,`c-form-check`),Ce(23,`
                `),F(24,`input`,6),G1(),L(),Ce(25,`
                `),F(26,`label`,7),Ce(27,`Default checkbox`),L(),Ce(28,`
              `),L(),Ce(29,`
              `),F(30,`c-form-check`),Ce(31,`
                `),F(32,`input`,8),G1(),L(),Ce(33,`
                `),F(34,`label`,9),Ce(35,`Checked checkbox`),L(),Ce(36,`
              `),L(),Ce(37,`
            `),L(),Ce(38,`
          `),L(),Ce(39,`
        `),L(),Ce(40,`
      `),L(),Ce(41,`
    `),L(),Ce(42,`
    `),F(43,`c-col`,2),Ce(44,`
      `),F(45,`c-card`,3),Ce(46,`
        `),F(47,`c-card-header`),Ce(48,`
          `),F(49,`strong`),Ce(50,`Angular Checkbox`),L(),Ce(51,` `),F(52,`small`),Ce(53,`Disabled`),L(),Ce(54,`
        `),L(),Ce(55,`
        `),F(56,`c-card-body`),Ce(57,`
          `),F(58,`p`,10),Ce(59,`
            Add the `),F(60,`code`),Ce(61,`disabled`),L(),Ce(62,` attribute and the associated `),F(63,`code`),Ce(64,`<label>`),L(),Ce(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),L(),Ce(66,`
          `),F(67,`app-docs-example`,11),Ce(68,`
            `),F(69,`div`,12),Ce(70,`
              `),F(71,`c-form-check`),Ce(72,`
                `),F(73,`input`,13),G1(),L(),Ce(74,`
                `),F(75,`label`,14),Ce(76,`Disabled checkbox`),L(),Ce(77,`
              `),L(),Ce(78,`
              `),F(79,`c-form-check`),Ce(80,`
                `),F(81,`input`,15),G1(),L(),Ce(82,`
                `),F(83,`label`,16),Ce(84,`Disabled checked checkbox`),L(),Ce(85,`
              `),L(),Ce(86,`
            `),L(),Ce(87,`
          `),L(),Ce(88,`
        `),L(),Ce(89,`
      `),L(),Ce(90,`
    `),L(),Ce(91,`
    `),F(92,`c-col`,2),Ce(93,`
      `),F(94,`c-card`,3),Ce(95,`
        `),F(96,`c-card-header`),Ce(97,`
          `),F(98,`strong`),Ce(99,`Angular Radio`),L(),Ce(100,`
        `),L(),Ce(101,`
        `),F(102,`c-card-body`),Ce(103,`
          `),F(104,`app-docs-example`,17),Ce(105,`
            `),F(106,`div`,18),Ce(107,`
              `),F(108,`c-form-check`),Ce(109,`
                `),F(110,`input`,19),G1(),L(),Ce(111,`
                `),F(112,`label`,20),Ce(113,`Default radio`),L(),Ce(114,`
              `),L(),Ce(115,`
              `),F(116,`c-form-check`),Ce(117,`
                `),F(118,`input`,21),G1(),L(),Ce(119,`
                `),F(120,`label`,20),Ce(121,`Checked radio`),L(),Ce(122,`
              `),L(),Ce(123,`
            `),L(),Ce(124,`
          `),L(),Ce(125,`
        `),L(),Ce(126,`
      `),L(),Ce(127,`
    `),L(),Ce(128,`
    `),F(129,`c-col`,2),Ce(130,`
      `),F(131,`c-card`,3),Ce(132,`
        `),F(133,`c-card-header`),Ce(134,`
          `),F(135,`strong`),Ce(136,`Angular Radio`),L(),Ce(137,` `),F(138,`small`),Ce(139,`Disabled`),L(),Ce(140,`
        `),L(),Ce(141,`
        `),F(142,`c-card-body`),Ce(143,`
          `),F(144,`p`,10),Ce(145,`
            Add the `),F(146,`code`),Ce(147,`disabled`),L(),Ce(148,` attribute and the associated `),F(149,`code`),Ce(150,`<label>`),L(),Ce(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),L(),Ce(152,`
          `),F(153,`app-docs-example`,22),Ce(154,`
            `),F(155,`div`,23),Ce(156,`
              `),F(157,`c-form-check`),Ce(158,`
                `),F(159,`input`,19),G1(),L(),Ce(160,`
                `),F(161,`label`,20),Ce(162,`Default radio`),L(),Ce(163,`
              `),L(),Ce(164,`
              `),F(165,`c-form-check`),Ce(166,`
                `),F(167,`input`,21),G1(),L(),Ce(168,`
                `),F(169,`label`,20),Ce(170,`Checked radio`),L(),Ce(171,`
              `),L(),Ce(172,`
            `),L(),Ce(173,`
          `),L(),Ce(174,`
        `),L(),Ce(175,`
      `),L(),Ce(176,`
    `),L(),Ce(177,`
    `),F(178,`c-col`,2),Ce(179,`
      `),F(180,`c-card`,3),Ce(181,`
        `),F(182,`c-card-header`),Ce(183,`
          `),F(184,`strong`),Ce(185,`Angular Switches`),L(),Ce(186,`
        `),L(),Ce(187,`
        `),F(188,`c-card-body`),Ce(189,`
          `),F(190,`p`,10),Ce(191,`
            A switch has the markup of a custom checkbox but uses the `),F(192,`code`),Ce(193,`switch`),L(),Ce(194,` boolean
            properly to render a toggle switch. Switches also support the `),F(195,`code`),Ce(196,`disabled`),L(),Ce(197,`
            attribute.
          `),L(),Ce(198,`
          `),F(199,`app-docs-example`,24),Ce(200,`
            `),F(201,`c-form-check`,25),Ce(202,`
              `),Oe(203,`input`,26),Ce(204,`
              `),F(205,`label`,20),Ce(206,`Default switch checkbox input`),L(),Ce(207,`
            `),L(),Ce(208,`
            `),F(209,`c-form-check`,25),Ce(210,`
              `),Oe(211,`input`,27),Ce(212,`
              `),F(213,`label`,20),Ce(214,`Checked switch checkbox input`),L(),Ce(215,`
            `),L(),Ce(216,`
            `),F(217,`c-form-check`,25),Ce(218,`
              `),Oe(219,`input`,28),Ce(220,`
              `),F(221,`label`,20),Ce(222,`Default switch checkbox input`),L(),Ce(223,`
            `),L(),Ce(224,`
            `),F(225,`c-form-check`,25),Ce(226,`
              `),Oe(227,`input`,29),Ce(228,`
              `),F(229,`label`,20),Ce(230,`Checked switch checkbox input`),L(),Ce(231,`
            `),L(),Ce(232,`
          `),L(),Ce(233,`
        `),L(),Ce(234,`
      `),L(),Ce(235,`
    `),L(),Ce(236,`
    `),F(237,`c-col`,2),Ce(238,`
      `),F(239,`c-card`,3),Ce(240,`
        `),F(241,`c-card-header`),Ce(242,`
          `),F(243,`strong`),Ce(244,`Angular Switches`),L(),Ce(245,` `),F(246,`small`),Ce(247,`Sizes`),L(),Ce(248,`
        `),L(),Ce(249,`
        `),F(250,`c-card-body`),Ce(251,`
          `),F(252,`app-docs-example`,30),Ce(253,`
            `),F(254,`c-form-check`,25),Ce(255,`
              `),Oe(256,`input`,26),Ce(257,`
              `),F(258,`label`,20),Ce(259,`Default switch checkbox input`),L(),Ce(260,`
            `),L(),Ce(261,`
            `),F(262,`c-form-check`,31),Ce(263,`
              `),Oe(264,`input`,26),Ce(265,`
              `),F(266,`label`,20),Ce(267,`Large switch checkbox input`),L(),Ce(268,`
            `),L(),Ce(269,`
            `),F(270,`c-form-check`,32),Ce(271,`
              `),Oe(272,`input`,27),Ce(273,`
              `),F(274,`label`,20),Ce(275,`Extra large switch checkbox input`),L(),Ce(276,`
            `),L(),Ce(277,`
          `),L(),Ce(278,`
        `),L(),Ce(279,`
      `),L(),Ce(280,`
    `),L(),Ce(281,`
    `),F(282,`c-col`,2),Ce(283,`
      `),F(284,`c-card`,3),Ce(285,`
        `),F(286,`c-card-header`),Ce(287,`
          `),F(288,`strong`),Ce(289,`Angular Checks and Radios`),L(),Ce(290,` `),F(291,`small`),Ce(292,`Default layout (stacked)`),L(),Ce(293,`
        `),L(),Ce(294,`
        `),F(295,`c-card-body`),Ce(296,`
          `),F(297,`p`,10),Ce(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),L(),Ce(299,`
          `),F(300,`app-docs-example`,33),Ce(301,`
            `),F(302,`c-form-check`),Ce(303,`
              `),Oe(304,`input`,34),Ce(305,`
              `),F(306,`label`,35),Ce(307,`Default checkbox`),L(),Ce(308,`
            `),L(),Ce(309,`
            `),F(310,`c-form-check`),Ce(311,`
              `),Oe(312,`input`,36),Ce(313,`
              `),F(314,`label`,37),Ce(315,`Disabled checkbox`),L(),Ce(316,`
            `),L(),Ce(317,`
          `),L(),Ce(318,`
          `),F(319,`app-docs-example`,33),Ce(320,`
            `),F(321,`c-form-check`),Ce(322,`
              `),Oe(323,`input`,38),Ce(324,`
              `),F(325,`label`,39),Ce(326,`Default radio`),L(),Ce(327,`
            `),L(),Ce(328,`
            `),F(329,`c-form-check`),Ce(330,`
              `),Oe(331,`input`,40),Ce(332,`
              `),F(333,`label`,41),Ce(334,`Second radio`),L(),Ce(335,`
            `),L(),Ce(336,`
            `),F(337,`c-form-check`),Ce(338,`
              `),Oe(339,`input`,42),Ce(340,`
              `),F(341,`label`,43),Ce(342,`Disabled radio`),L(),Ce(343,`
            `),L(),Ce(344,`
          `),L(),Ce(345,`
        `),L(),Ce(346,`
      `),L(),Ce(347,`
    `),L(),Ce(348,`
    `),F(349,`c-col`,2),Ce(350,`
      `),F(351,`c-card`,3),Ce(352,`
        `),F(353,`c-card-header`),Ce(354,`
          `),F(355,`strong`),Ce(356,`Angular Checks and Radios`),L(),Ce(357,` `),F(358,`small`),Ce(359,`Inline`),L(),Ce(360,`
        `),L(),Ce(361,`
        `),F(362,`c-card-body`),Ce(363,`
          `),F(364,`p`,10),Ce(365,`
            Group checkboxes or radios on the same horizontal row by adding `),F(366,`code`),Ce(367,`inline`),L(),Ce(368,`
            boolean property to any `),F(369,`code`),Ce(370,`<c-form-check>`),L(),Ce(371,`.
          `),L(),Ce(372,`
          `),F(373,`app-docs-example`,44),Ce(374,`
            `),F(375,`c-form-check`,45),Ce(376,`
              `),Oe(377,`input`,46),Ce(378,`
              `),F(379,`label`,47),Ce(380,`1`),L(),Ce(381,`
            `),L(),Ce(382,`
            `),F(383,`c-form-check`,48),Ce(384,`
              `),Oe(385,`input`,49),Ce(386,`
              `),F(387,`label`,50),Ce(388,`2`),L(),Ce(389,`
            `),L(),Ce(390,`
            `),F(391,`c-form-check`,48),Ce(392,`
              `),Oe(393,`input`,51),Ce(394,`
              `),F(395,`label`,52),Ce(396,`3 (disabled)`),L(),Ce(397,`
            `),L(),Ce(398,`

          `),L(),Ce(399,`
          `),F(400,`app-docs-example`,44),Ce(401,`
            `),F(402,`c-form-check`,48),Ce(403,`
              `),Oe(404,`input`,53),Ce(405,`
              `),F(406,`label`,54),Ce(407,`1`),L(),Ce(408,`
            `),L(),Ce(409,`
            `),F(410,`c-form-check`,48),Ce(411,`
              `),Oe(412,`input`,55),Ce(413,`
              `),F(414,`label`,56),Ce(415,`2`),L(),Ce(416,`
            `),L(),Ce(417,`
            `),F(418,`c-form-check`,48),Ce(419,`
              `),Oe(420,`input`,57),Ce(421,`
              `),F(422,`label`,58),Ce(423,`3 (disabled)`),L(),Ce(424,`
            `),L(),Ce(425,`
          `),L(),Ce(426,`
        `),L(),Ce(427,`
      `),L(),Ce(428,`
    `),L(),Ce(429,`
    `),F(430,`c-col`,2),Ce(431,`
      `),F(432,`c-card`,3),Ce(433,`
        `),F(434,`c-card-header`),Ce(435,`
          `),F(436,`strong`),Ce(437,`Angular Checks and Radios`),L(),Ce(438,` `),F(439,`small`),Ce(440,`Without labels`),L(),Ce(441,`
        `),L(),Ce(442,`
        `),F(443,`c-card-body`),Ce(444,`
          `),F(445,`p`,10),Ce(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),F(447,`code`),Ce(448,`aria-label`),L(),Ce(449,`).
          `),L(),Ce(450,`
          `),F(451,`app-docs-example`,59),Ce(452,`
            `),F(453,`div`),Ce(454,`
              `),Oe(455,`input`,60),Ce(456,`
            `),L(),Ce(457,`
            `),F(458,`div`),Ce(459,`
              `),Oe(460,`input`,61),Ce(461,`
            `),L(),Ce(462,`
          `),L(),Ce(463,`
        `),L(),Ce(464,`
      `),L(),Ce(465,`
    `),L(),Ce(466,`
    `),F(467,`c-col`,2),Ce(468,`
      `),F(469,`c-card`,3),Ce(470,`
        `),F(471,`c-card-header`),Ce(472,`
          `),F(473,`strong`),Ce(474,`Toggle buttons`),L(),Ce(475,`
        `),L(),Ce(476,`
        `),F(477,`c-card-body`),Ce(478,`
          `),F(479,`p`,10),Ce(480,`
            Create button-like checkboxes and radio buttons by using `),F(481,`code`),Ce(482,`button`),L(),Ce(483,` boolean
            property on the `),F(484,`code`),Ce(485,`<CFormCheck>`),L(),Ce(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),L(),Ce(487,`
          `),F(488,`app-docs-example`,62),Ce(489,`
            `),F(490,`div`,63),Ce(491,`
              `),F(492,`c-button-group`,64),Ce(493,`
                `),F(494,`input`,65),G1(),L(),Ce(495,`
                `),F(496,`label`,66),pe(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),Ce(497,`Checkbox 1`),L(),Ce(498,`

                `),F(499,`input`,67),G1(),L(),Ce(500,`
                `),F(501,`label`,66),pe(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),Ce(502,`Checkbox 2`),L(),Ce(503,`

                `),F(504,`input`,68),G1(),L(),Ce(505,`
                `),F(506,`label`,66),pe(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),Ce(507,`Disabled 3`),L(),Ce(508,`
              `),L(),Ce(509,`
            `),L(),Ce(510,`
          `),L(),Ce(511,`
          `),F(512,`app-docs-example`),Ce(513,`
            `),F(514,`div`,69),Ce(515,`
              `),F(516,`c-button-group`,70),Ce(517,`
                `),F(518,`input`,71),G1(),L(),Ce(519,`
                `),F(520,`label`,72),pe(`click`,function(){return r.setRadioValue(`Radio1`)}),Ce(521,`Radio 1`),L(),Ce(522,`

                `),F(523,`input`,73),G1(),L(),Ce(524,`
                `),F(525,`label`,74),pe(`click`,function(){return r.setRadioValue(`Radio2`)}),Ce(526,`Radio 2`),L(),Ce(527,`
                `),F(528,`input`,75),G1(),L(),Ce(529,`
                `),F(530,`label`,76),pe(`click`,function(){return r.setRadioValue(`Radio3`)}),Ce(531,`Radio3`),L(),Ce(532,`
              `),L(),Ce(533,`
            `),L(),Ce(534,`
          `),L(),Ce(535,`
          `),F(536,`h5`),Ce(537,`Outlined styles`),L(),Ce(538,`
          `),F(539,`p`,10),Ce(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),L(),Ce(541,`
          `),F(542,`app-docs-example`,62),Ce(543,`
            `),F(544,`div`,63),Ce(545,`
              `),F(546,`c-button-group`,64),Ce(547,`
                `),F(548,`input`,65),G1(),L(),Ce(549,`
                `),F(550,`label`,77),pe(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),Ce(551,`Checkbox 1`),L(),Ce(552,`

                `),F(553,`input`,67),G1(),L(),Ce(554,`
                `),F(555,`label`,77),pe(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),Ce(556,`Checkbox 2`),L(),Ce(557,`

                `),F(558,`input`,68),G1(),L(),Ce(559,`
                `),F(560,`label`,77),pe(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),Ce(561,`Disabled
                  3`),L(),Ce(562,`
              `),L(),Ce(563,`
            `),L(),Ce(564,`
          `),L(),Ce(565,`
          `),F(566,`app-docs-example`),Ce(567,`
            `),F(568,`div`,69),Ce(569,`
              `),F(570,`c-button-group`,70),Ce(571,`
                `),F(572,`input`,78),G1(),L(),Ce(573,`
                `),F(574,`label`,79),pe(`click`,function(){return r.setRadioValue(`Radio1`)}),Ce(575,`Radio 1`),L(),Ce(576,`

                `),F(577,`input`,80),G1(),L(),Ce(578,`
                `),F(579,`label`,81),pe(`click`,function(){return r.setRadioValue(`Radio2`)}),Ce(580,`Radio 2`),L(),Ce(581,`

                `),F(582,`input`,82),G1(),L(),Ce(583,`
                `),F(584,`label`,83),pe(`click`,function(){return r.setRadioValue(`Radio3`)}),Ce(585,`Radio3`),L(),Ce(586,`
              `),L(),Ce(587,`
            `),L(),Ce(588,`
          `),L(),Ce(589,`
        `),L(),Ce(590,`
      `),L(),Ce(591,`
    `),L(),Ce(592,`
  `),L(),Ce(593,`
`),L()),d&2&&(S(4),U(`formGroup`,r.formGroup),S(20),K1(),S(8),U(`checked`,!0),K1(),S(41),K1(),S(8),K1(),S(29),K1(),S(8),K1(),S(41),K1(),S(8),K1(),S(34),U(`switch`,!0),S(8),U(`switch`,!0),S(8),U(`switch`,!0),S(8),U(`switch`,!0),S(29),U(`switch`,!0),S(121),U(`inline`,!0),S(119),K1(),S(5),K1(),S(5),K1(),S(14),K1(),S(5),K1(),S(5),z(`disabled`,!0),K1(),S(20),K1(),S(5),K1(),S(5),K1(),S(14),K1(),S(5),K1(),S(5),z(`disabled`,!0),K1())},dependencies:[Cle,dte,ste,vN,tH,jH,tte,nte,FH,$H,jN,lle,AU,Wa,uU,Ka,E,cle,dle,eA,Uae,oU,c],encapsulation:2})}};export{H as ChecksRadiosComponent};