import{Fi as sl,Ft as fT,H as Nv,Hn as Dh,Hr as b,On as xi,Q as Ri,Sn as vu,Tn as wv,Un as Eh,Ur as bE,Wt as iT,di as hD,fr as Oi,in as nT,ki as ow,la as l,on as oT,or as NE,pi as jI,q as Pv,s as BI,xr as Th,zn as Ah}from"./main-76IFZWOG.js";import{_ as qn,a as Mt,f as gn,g as ln,m as jn,o as Tn,p as hn,r as Hn,u as Xe,x as zn,y as vt}from"./chunk-xIOCHUvk.js";import{i as w}from"./chunk-CAOhpI5R.js";import{t as c}from"./chunk-P9e4DqVK.js";var H=class p{constructor(){this.formBuilder=b(qn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=hD({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(Oi(0,`c-row`),ow(1,`
  `),Th(2,`app-docs-components`,0),ow(3,`
  `),Oi(4,`form`,1),ow(5,`
    `),Oi(6,`c-col`,2),ow(7,`
      `),Oi(8,`c-card`,3),ow(9,`
        `),Oi(10,`c-card-header`),ow(11,`
          `),Oi(12,`strong`),ow(13,`Angular Checkbox`),sl(),ow(14,`
        `),sl(),ow(15,`
        `),Oi(16,`c-card-body`),ow(17,`
          `),Oi(18,`app-docs-example`,4),ow(19,`
            `),Oi(20,`div`,5),ow(21,`
              `),Oi(22,`c-form-check`),ow(23,`
                `),Th(24,`input`,6),bE(),ow(25,`
                `),Oi(26,`label`,7),ow(27,`Default checkbox`),sl(),ow(28,`
              `),sl(),ow(29,`
              `),Oi(30,`c-form-check`),ow(31,`
                `),Th(32,`input`,8),bE(),ow(33,`
                `),Oi(34,`label`,9),ow(35,`Checked checkbox`),sl(),ow(36,`
              `),sl(),ow(37,`
            `),sl(),ow(38,`
          `),sl(),ow(39,`
        `),sl(),ow(40,`
      `),sl(),ow(41,`
    `),sl(),ow(42,`
    `),Oi(43,`c-col`,2),ow(44,`
      `),Oi(45,`c-card`,3),ow(46,`
        `),Oi(47,`c-card-header`),ow(48,`
          `),Oi(49,`strong`),ow(50,`Angular Checkbox`),sl(),ow(51,` `),Oi(52,`small`),ow(53,`Disabled`),sl(),ow(54,`
        `),sl(),ow(55,`
        `),Oi(56,`c-card-body`),ow(57,`
          `),Oi(58,`p`,10),ow(59,`
            Add the `),Oi(60,`code`),ow(61,`disabled`),sl(),ow(62,` attribute and the associated `),Oi(63,`code`),ow(64,`<label>`),sl(),ow(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),sl(),ow(66,`
          `),Oi(67,`app-docs-example`,11),ow(68,`
            `),Oi(69,`div`,12),ow(70,`
              `),Oi(71,`c-form-check`),ow(72,`
                `),Th(73,`input`,13),bE(),ow(74,`
                `),Oi(75,`label`,14),ow(76,`Disabled checkbox`),sl(),ow(77,`
              `),sl(),ow(78,`
              `),Oi(79,`c-form-check`),ow(80,`
                `),Th(81,`input`,15),bE(),ow(82,`
                `),Oi(83,`label`,16),ow(84,`Disabled checked checkbox`),sl(),ow(85,`
              `),sl(),ow(86,`
            `),sl(),ow(87,`
          `),sl(),ow(88,`
        `),sl(),ow(89,`
      `),sl(),ow(90,`
    `),sl(),ow(91,`
    `),Oi(92,`c-col`,2),ow(93,`
      `),Oi(94,`c-card`,3),ow(95,`
        `),Oi(96,`c-card-header`),ow(97,`
          `),Oi(98,`strong`),ow(99,`Angular Radio`),sl(),ow(100,`
        `),sl(),ow(101,`
        `),Oi(102,`c-card-body`),ow(103,`
          `),Oi(104,`app-docs-example`,17),ow(105,`
            `),Oi(106,`div`,18),ow(107,`
              `),Oi(108,`c-form-check`),ow(109,`
                `),Th(110,`input`,19),bE(),ow(111,`
                `),Oi(112,`label`,20),ow(113,`Default radio`),sl(),ow(114,`
              `),sl(),ow(115,`
              `),Oi(116,`c-form-check`),ow(117,`
                `),Th(118,`input`,21),bE(),ow(119,`
                `),Oi(120,`label`,20),ow(121,`Checked radio`),sl(),ow(122,`
              `),sl(),ow(123,`
            `),sl(),ow(124,`
          `),sl(),ow(125,`
        `),sl(),ow(126,`
      `),sl(),ow(127,`
    `),sl(),ow(128,`
    `),Oi(129,`c-col`,2),ow(130,`
      `),Oi(131,`c-card`,3),ow(132,`
        `),Oi(133,`c-card-header`),ow(134,`
          `),Oi(135,`strong`),ow(136,`Angular Radio`),sl(),ow(137,` `),Oi(138,`small`),ow(139,`Disabled`),sl(),ow(140,`
        `),sl(),ow(141,`
        `),Oi(142,`c-card-body`),ow(143,`
          `),Oi(144,`p`,10),ow(145,`
            Add the `),Oi(146,`code`),ow(147,`disabled`),sl(),ow(148,` attribute and the associated `),Oi(149,`code`),ow(150,`<label>`),sl(),ow(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),sl(),ow(152,`
          `),Oi(153,`app-docs-example`,22),ow(154,`
            `),Oi(155,`div`,23),ow(156,`
              `),Oi(157,`c-form-check`),ow(158,`
                `),Th(159,`input`,19),bE(),ow(160,`
                `),Oi(161,`label`,20),ow(162,`Default radio`),sl(),ow(163,`
              `),sl(),ow(164,`
              `),Oi(165,`c-form-check`),ow(166,`
                `),Th(167,`input`,21),bE(),ow(168,`
                `),Oi(169,`label`,20),ow(170,`Checked radio`),sl(),ow(171,`
              `),sl(),ow(172,`
            `),sl(),ow(173,`
          `),sl(),ow(174,`
        `),sl(),ow(175,`
      `),sl(),ow(176,`
    `),sl(),ow(177,`
    `),Oi(178,`c-col`,2),ow(179,`
      `),Oi(180,`c-card`,3),ow(181,`
        `),Oi(182,`c-card-header`),ow(183,`
          `),Oi(184,`strong`),ow(185,`Angular Switches`),sl(),ow(186,`
        `),sl(),ow(187,`
        `),Oi(188,`c-card-body`),ow(189,`
          `),Oi(190,`p`,10),ow(191,`
            A switch has the markup of a custom checkbox but uses the `),Oi(192,`code`),ow(193,`switch`),sl(),ow(194,` boolean
            properly to render a toggle switch. Switches also support the `),Oi(195,`code`),ow(196,`disabled`),sl(),ow(197,`
            attribute.
          `),sl(),ow(198,`
          `),Oi(199,`app-docs-example`,24),ow(200,`
            `),Oi(201,`c-form-check`,25),ow(202,`
              `),Th(203,`input`,26),ow(204,`
              `),Oi(205,`label`,20),ow(206,`Default switch checkbox input`),sl(),ow(207,`
            `),sl(),ow(208,`
            `),Oi(209,`c-form-check`,25),ow(210,`
              `),Th(211,`input`,27),ow(212,`
              `),Oi(213,`label`,20),ow(214,`Checked switch checkbox input`),sl(),ow(215,`
            `),sl(),ow(216,`
            `),Oi(217,`c-form-check`,25),ow(218,`
              `),Th(219,`input`,28),ow(220,`
              `),Oi(221,`label`,20),ow(222,`Default switch checkbox input`),sl(),ow(223,`
            `),sl(),ow(224,`
            `),Oi(225,`c-form-check`,25),ow(226,`
              `),Th(227,`input`,29),ow(228,`
              `),Oi(229,`label`,20),ow(230,`Checked switch checkbox input`),sl(),ow(231,`
            `),sl(),ow(232,`
          `),sl(),ow(233,`
        `),sl(),ow(234,`
      `),sl(),ow(235,`
    `),sl(),ow(236,`
    `),Oi(237,`c-col`,2),ow(238,`
      `),Oi(239,`c-card`,3),ow(240,`
        `),Oi(241,`c-card-header`),ow(242,`
          `),Oi(243,`strong`),ow(244,`Angular Switches`),sl(),ow(245,` `),Oi(246,`small`),ow(247,`Sizes`),sl(),ow(248,`
        `),sl(),ow(249,`
        `),Oi(250,`c-card-body`),ow(251,`
          `),Oi(252,`app-docs-example`,30),ow(253,`
            `),Oi(254,`c-form-check`,25),ow(255,`
              `),Th(256,`input`,26),ow(257,`
              `),Oi(258,`label`,20),ow(259,`Default switch checkbox input`),sl(),ow(260,`
            `),sl(),ow(261,`
            `),Oi(262,`c-form-check`,31),ow(263,`
              `),Th(264,`input`,26),ow(265,`
              `),Oi(266,`label`,20),ow(267,`Large switch checkbox input`),sl(),ow(268,`
            `),sl(),ow(269,`
            `),Oi(270,`c-form-check`,32),ow(271,`
              `),Th(272,`input`,27),ow(273,`
              `),Oi(274,`label`,20),ow(275,`Extra large switch checkbox input`),sl(),ow(276,`
            `),sl(),ow(277,`
          `),sl(),ow(278,`
        `),sl(),ow(279,`
      `),sl(),ow(280,`
    `),sl(),ow(281,`
    `),Oi(282,`c-col`,2),ow(283,`
      `),Oi(284,`c-card`,3),ow(285,`
        `),Oi(286,`c-card-header`),ow(287,`
          `),Oi(288,`strong`),ow(289,`Angular Checks and Radios`),sl(),ow(290,` `),Oi(291,`small`),ow(292,`Default layout (stacked)`),sl(),ow(293,`
        `),sl(),ow(294,`
        `),Oi(295,`c-card-body`),ow(296,`
          `),Oi(297,`p`,10),ow(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),sl(),ow(299,`
          `),Oi(300,`app-docs-example`,33),ow(301,`
            `),Oi(302,`c-form-check`),ow(303,`
              `),Th(304,`input`,34),ow(305,`
              `),Oi(306,`label`,35),ow(307,`Default checkbox`),sl(),ow(308,`
            `),sl(),ow(309,`
            `),Oi(310,`c-form-check`),ow(311,`
              `),Th(312,`input`,36),ow(313,`
              `),Oi(314,`label`,37),ow(315,`Disabled checkbox`),sl(),ow(316,`
            `),sl(),ow(317,`
          `),sl(),ow(318,`
          `),Oi(319,`app-docs-example`,33),ow(320,`
            `),Oi(321,`c-form-check`),ow(322,`
              `),Th(323,`input`,38),ow(324,`
              `),Oi(325,`label`,39),ow(326,`Default radio`),sl(),ow(327,`
            `),sl(),ow(328,`
            `),Oi(329,`c-form-check`),ow(330,`
              `),Th(331,`input`,40),ow(332,`
              `),Oi(333,`label`,41),ow(334,`Second radio`),sl(),ow(335,`
            `),sl(),ow(336,`
            `),Oi(337,`c-form-check`),ow(338,`
              `),Th(339,`input`,42),ow(340,`
              `),Oi(341,`label`,43),ow(342,`Disabled radio`),sl(),ow(343,`
            `),sl(),ow(344,`
          `),sl(),ow(345,`
        `),sl(),ow(346,`
      `),sl(),ow(347,`
    `),sl(),ow(348,`
    `),Oi(349,`c-col`,2),ow(350,`
      `),Oi(351,`c-card`,3),ow(352,`
        `),Oi(353,`c-card-header`),ow(354,`
          `),Oi(355,`strong`),ow(356,`Angular Checks and Radios`),sl(),ow(357,` `),Oi(358,`small`),ow(359,`Inline`),sl(),ow(360,`
        `),sl(),ow(361,`
        `),Oi(362,`c-card-body`),ow(363,`
          `),Oi(364,`p`,10),ow(365,`
            Group checkboxes or radios on the same horizontal row by adding `),Oi(366,`code`),ow(367,`inline`),sl(),ow(368,`
            boolean property to any `),Oi(369,`code`),ow(370,`<c-form-check>`),sl(),ow(371,`.
          `),sl(),ow(372,`
          `),Oi(373,`app-docs-example`,44),ow(374,`
            `),Oi(375,`c-form-check`,45),ow(376,`
              `),Th(377,`input`,46),ow(378,`
              `),Oi(379,`label`,47),ow(380,`1`),sl(),ow(381,`
            `),sl(),ow(382,`
            `),Oi(383,`c-form-check`,48),ow(384,`
              `),Th(385,`input`,49),ow(386,`
              `),Oi(387,`label`,50),ow(388,`2`),sl(),ow(389,`
            `),sl(),ow(390,`
            `),Oi(391,`c-form-check`,48),ow(392,`
              `),Th(393,`input`,51),ow(394,`
              `),Oi(395,`label`,52),ow(396,`3 (disabled)`),sl(),ow(397,`
            `),sl(),ow(398,`

          `),sl(),ow(399,`
          `),Oi(400,`app-docs-example`,44),ow(401,`
            `),Oi(402,`c-form-check`,48),ow(403,`
              `),Th(404,`input`,53),ow(405,`
              `),Oi(406,`label`,54),ow(407,`1`),sl(),ow(408,`
            `),sl(),ow(409,`
            `),Oi(410,`c-form-check`,48),ow(411,`
              `),Th(412,`input`,55),ow(413,`
              `),Oi(414,`label`,56),ow(415,`2`),sl(),ow(416,`
            `),sl(),ow(417,`
            `),Oi(418,`c-form-check`,48),ow(419,`
              `),Th(420,`input`,57),ow(421,`
              `),Oi(422,`label`,58),ow(423,`3 (disabled)`),sl(),ow(424,`
            `),sl(),ow(425,`
          `),sl(),ow(426,`
        `),sl(),ow(427,`
      `),sl(),ow(428,`
    `),sl(),ow(429,`
    `),Oi(430,`c-col`,2),ow(431,`
      `),Oi(432,`c-card`,3),ow(433,`
        `),Oi(434,`c-card-header`),ow(435,`
          `),Oi(436,`strong`),ow(437,`Angular Checks and Radios`),sl(),ow(438,` `),Oi(439,`small`),ow(440,`Without labels`),sl(),ow(441,`
        `),sl(),ow(442,`
        `),Oi(443,`c-card-body`),ow(444,`
          `),Oi(445,`p`,10),ow(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),Oi(447,`code`),ow(448,`aria-label`),sl(),ow(449,`).
          `),sl(),ow(450,`
          `),Oi(451,`app-docs-example`,59),ow(452,`
            `),Oi(453,`div`),ow(454,`
              `),Th(455,`input`,60),ow(456,`
            `),sl(),ow(457,`
            `),Oi(458,`div`),ow(459,`
              `),Th(460,`input`,61),ow(461,`
            `),sl(),ow(462,`
          `),sl(),ow(463,`
        `),sl(),ow(464,`
      `),sl(),ow(465,`
    `),sl(),ow(466,`
    `),Oi(467,`c-col`,2),ow(468,`
      `),Oi(469,`c-card`,3),ow(470,`
        `),Oi(471,`c-card-header`),ow(472,`
          `),Oi(473,`strong`),ow(474,`Toggle buttons`),sl(),ow(475,`
        `),sl(),ow(476,`
        `),Oi(477,`c-card-body`),ow(478,`
          `),Oi(479,`p`,10),ow(480,`
            Create button-like checkboxes and radio buttons by using `),Oi(481,`code`),ow(482,`button`),sl(),ow(483,` boolean
            property on the `),Oi(484,`code`),ow(485,`<CFormCheck>`),sl(),ow(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),sl(),ow(487,`
          `),Oi(488,`app-docs-example`,62),ow(489,`
            `),Oi(490,`div`,63),ow(491,`
              `),Oi(492,`c-button-group`,64),ow(493,`
                `),Th(494,`input`,65),bE(),ow(495,`
                `),Oi(496,`label`,66),Ah(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),ow(497,`Checkbox 1`),sl(),ow(498,`

                `),Th(499,`input`,67),bE(),ow(500,`
                `),Oi(501,`label`,66),Ah(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),ow(502,`Checkbox 2`),sl(),ow(503,`

                `),Th(504,`input`,68),bE(),ow(505,`
                `),Oi(506,`label`,66),Ah(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),ow(507,`Disabled 3`),sl(),ow(508,`
              `),sl(),ow(509,`
            `),sl(),ow(510,`
          `),sl(),ow(511,`
          `),Oi(512,`app-docs-example`),ow(513,`
            `),Oi(514,`div`,69),ow(515,`
              `),Oi(516,`c-button-group`,70),ow(517,`
                `),Th(518,`input`,71),bE(),ow(519,`
                `),Oi(520,`label`,72),Ah(`click`,function(){return r.setRadioValue(`Radio1`)}),ow(521,`Radio 1`),sl(),ow(522,`

                `),Th(523,`input`,73),bE(),ow(524,`
                `),Oi(525,`label`,74),Ah(`click`,function(){return r.setRadioValue(`Radio2`)}),ow(526,`Radio 2`),sl(),ow(527,`
                `),Th(528,`input`,75),bE(),ow(529,`
                `),Oi(530,`label`,76),Ah(`click`,function(){return r.setRadioValue(`Radio3`)}),ow(531,`Radio3`),sl(),ow(532,`
              `),sl(),ow(533,`
            `),sl(),ow(534,`
          `),sl(),ow(535,`
          `),Oi(536,`h5`),ow(537,`Outlined styles`),sl(),ow(538,`
          `),Oi(539,`p`,10),ow(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),sl(),ow(541,`
          `),Oi(542,`app-docs-example`,62),ow(543,`
            `),Oi(544,`div`,63),ow(545,`
              `),Oi(546,`c-button-group`,64),ow(547,`
                `),Th(548,`input`,65),bE(),ow(549,`
                `),Oi(550,`label`,77),Ah(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),ow(551,`Checkbox 1`),sl(),ow(552,`

                `),Th(553,`input`,67),bE(),ow(554,`
                `),Oi(555,`label`,77),Ah(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),ow(556,`Checkbox 2`),sl(),ow(557,`

                `),Th(558,`input`,68),bE(),ow(559,`
                `),Oi(560,`label`,77),Ah(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),ow(561,`Disabled
                  3`),sl(),ow(562,`
              `),sl(),ow(563,`
            `),sl(),ow(564,`
          `),sl(),ow(565,`
          `),Oi(566,`app-docs-example`),ow(567,`
            `),Oi(568,`div`,69),ow(569,`
              `),Oi(570,`c-button-group`,70),ow(571,`
                `),Th(572,`input`,78),bE(),ow(573,`
                `),Oi(574,`label`,79),Ah(`click`,function(){return r.setRadioValue(`Radio1`)}),ow(575,`Radio 1`),sl(),ow(576,`

                `),Th(577,`input`,80),bE(),ow(578,`
                `),Oi(579,`label`,81),Ah(`click`,function(){return r.setRadioValue(`Radio2`)}),ow(580,`Radio 2`),sl(),ow(581,`

                `),Th(582,`input`,82),bE(),ow(583,`
                `),Oi(584,`label`,83),Ah(`click`,function(){return r.setRadioValue(`Radio3`)}),ow(585,`Radio3`),sl(),ow(586,`
              `),sl(),ow(587,`
            `),sl(),ow(588,`
          `),sl(),ow(589,`
        `),sl(),ow(590,`
      `),sl(),ow(591,`
    `),sl(),ow(592,`
  `),sl(),ow(593,`
`),sl()),d&2&&(jI(4),Dh(`formGroup`,r.formGroup),jI(20),NE(),jI(8),Dh(`checked`,!0),NE(),jI(41),NE(),jI(8),NE(),jI(29),NE(),jI(8),NE(),jI(41),NE(),jI(8),NE(),jI(34),Dh(`switch`,!0),jI(8),Dh(`switch`,!0),jI(8),Dh(`switch`,!0),jI(8),Dh(`switch`,!0),jI(29),Dh(`switch`,!0),jI(121),Dh(`inline`,!0),jI(119),NE(),jI(5),NE(),jI(5),NE(),jI(14),NE(),jI(5),NE(),jI(5),Eh(`disabled`,!0),NE(),jI(20),NE(),jI(5),NE(),jI(5),NE(),jI(14),NE(),jI(5),NE(),jI(5),Eh(`disabled`,!0),NE())},dependencies:[fT,zn,Hn,Xe,Mt,ln,Tn,jn,gn,hn,vt,nT,Pv,xi,Nv,Ri,w,iT,oT,vu,BI,wv,c],encapsulation:2})}};export{H as ChecksRadiosComponent};