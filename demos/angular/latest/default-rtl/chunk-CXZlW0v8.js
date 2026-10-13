import{Bt as Tm,Dt as Rw,Ni as yT,U as Ib,Zn as hm,gn as as,gt as Ow,in as ZD,qi as l,vn as b,yr as lu,zn as fm,zr as pm}from"./chunk-DYvmxcZi.js";import{$t as eC,An as nr,Fn as or,Gn as rF,I as Ji,Kn as ro,Nn as oF,Pn as oo,_n as ir,an as g0,b as EN,dn as hD,gn as il,in as fF,l as AN,mr as xi,nt as QD,o as $P,tr as uI,xt as WM,yr as zC,zt as ao}from"./main-QFYSJL4W.js";import{t as $}from"./chunk-DB96fw1L.js";import"./chunk-CwuAVkbe.js";import"./chunk-DJF0QgnL.js";import{t as c}from"./chunk-DcEAd6Kg.js";var H=class p{constructor(){this.formBuilder=b(EN);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=Ib({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(as(0,`c-row`),yT(1,`
  `),hm(2,`app-docs-components`,0),yT(3,`
  `),as(4,`form`,1),yT(5,`
    `),as(6,`c-col`,2),yT(7,`
      `),as(8,`c-card`,3),yT(9,`
        `),as(10,`c-card-header`),yT(11,`
          `),as(12,`strong`),yT(13,`Angular Checkbox`),lu(),yT(14,`
        `),lu(),yT(15,`
        `),as(16,`c-card-body`),yT(17,`
          `),as(18,`app-docs-example`,4),yT(19,`
            `),as(20,`div`,5),yT(21,`
              `),as(22,`c-form-check`),yT(23,`
                `),as(24,`input`,6),Rw(),lu(),yT(25,`
                `),as(26,`label`,7),yT(27,`Default checkbox`),lu(),yT(28,`
              `),lu(),yT(29,`
              `),as(30,`c-form-check`),yT(31,`
                `),as(32,`input`,8),Rw(),lu(),yT(33,`
                `),as(34,`label`,9),yT(35,`Checked checkbox`),lu(),yT(36,`
              `),lu(),yT(37,`
            `),lu(),yT(38,`
          `),lu(),yT(39,`
        `),lu(),yT(40,`
      `),lu(),yT(41,`
    `),lu(),yT(42,`
    `),as(43,`c-col`,2),yT(44,`
      `),as(45,`c-card`,3),yT(46,`
        `),as(47,`c-card-header`),yT(48,`
          `),as(49,`strong`),yT(50,`Angular Checkbox`),lu(),yT(51,` `),as(52,`small`),yT(53,`Disabled`),lu(),yT(54,`
        `),lu(),yT(55,`
        `),as(56,`c-card-body`),yT(57,`
          `),as(58,`p`,10),yT(59,`
            Add the `),as(60,`code`),yT(61,`disabled`),lu(),yT(62,` attribute and the associated `),as(63,`code`),yT(64,`<label>`),lu(),yT(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),lu(),yT(66,`
          `),as(67,`app-docs-example`,11),yT(68,`
            `),as(69,`div`,12),yT(70,`
              `),as(71,`c-form-check`),yT(72,`
                `),as(73,`input`,13),Rw(),lu(),yT(74,`
                `),as(75,`label`,14),yT(76,`Disabled checkbox`),lu(),yT(77,`
              `),lu(),yT(78,`
              `),as(79,`c-form-check`),yT(80,`
                `),as(81,`input`,15),Rw(),lu(),yT(82,`
                `),as(83,`label`,16),yT(84,`Disabled checked checkbox`),lu(),yT(85,`
              `),lu(),yT(86,`
            `),lu(),yT(87,`
          `),lu(),yT(88,`
        `),lu(),yT(89,`
      `),lu(),yT(90,`
    `),lu(),yT(91,`
    `),as(92,`c-col`,2),yT(93,`
      `),as(94,`c-card`,3),yT(95,`
        `),as(96,`c-card-header`),yT(97,`
          `),as(98,`strong`),yT(99,`Angular Radio`),lu(),yT(100,`
        `),lu(),yT(101,`
        `),as(102,`c-card-body`),yT(103,`
          `),as(104,`app-docs-example`,17),yT(105,`
            `),as(106,`div`,18),yT(107,`
              `),as(108,`c-form-check`),yT(109,`
                `),as(110,`input`,19),Rw(),lu(),yT(111,`
                `),as(112,`label`,20),yT(113,`Default radio`),lu(),yT(114,`
              `),lu(),yT(115,`
              `),as(116,`c-form-check`),yT(117,`
                `),as(118,`input`,21),Rw(),lu(),yT(119,`
                `),as(120,`label`,20),yT(121,`Checked radio`),lu(),yT(122,`
              `),lu(),yT(123,`
            `),lu(),yT(124,`
          `),lu(),yT(125,`
        `),lu(),yT(126,`
      `),lu(),yT(127,`
    `),lu(),yT(128,`
    `),as(129,`c-col`,2),yT(130,`
      `),as(131,`c-card`,3),yT(132,`
        `),as(133,`c-card-header`),yT(134,`
          `),as(135,`strong`),yT(136,`Angular Radio`),lu(),yT(137,` `),as(138,`small`),yT(139,`Disabled`),lu(),yT(140,`
        `),lu(),yT(141,`
        `),as(142,`c-card-body`),yT(143,`
          `),as(144,`p`,10),yT(145,`
            Add the `),as(146,`code`),yT(147,`disabled`),lu(),yT(148,` attribute and the associated `),as(149,`code`),yT(150,`<label>`),lu(),yT(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),lu(),yT(152,`
          `),as(153,`app-docs-example`,22),yT(154,`
            `),as(155,`div`,23),yT(156,`
              `),as(157,`c-form-check`),yT(158,`
                `),as(159,`input`,19),Rw(),lu(),yT(160,`
                `),as(161,`label`,20),yT(162,`Default radio`),lu(),yT(163,`
              `),lu(),yT(164,`
              `),as(165,`c-form-check`),yT(166,`
                `),as(167,`input`,21),Rw(),lu(),yT(168,`
                `),as(169,`label`,20),yT(170,`Checked radio`),lu(),yT(171,`
              `),lu(),yT(172,`
            `),lu(),yT(173,`
          `),lu(),yT(174,`
        `),lu(),yT(175,`
      `),lu(),yT(176,`
    `),lu(),yT(177,`
    `),as(178,`c-col`,2),yT(179,`
      `),as(180,`c-card`,3),yT(181,`
        `),as(182,`c-card-header`),yT(183,`
          `),as(184,`strong`),yT(185,`Angular Switches`),lu(),yT(186,`
        `),lu(),yT(187,`
        `),as(188,`c-card-body`),yT(189,`
          `),as(190,`p`,10),yT(191,`
            A switch has the markup of a custom checkbox but uses the `),as(192,`code`),yT(193,`switch`),lu(),yT(194,` boolean
            properly to render a toggle switch. Switches also support the `),as(195,`code`),yT(196,`disabled`),lu(),yT(197,`
            attribute.
          `),lu(),yT(198,`
          `),as(199,`app-docs-example`,24),yT(200,`
            `),as(201,`c-form-check`,25),yT(202,`
              `),hm(203,`input`,26),yT(204,`
              `),as(205,`label`,20),yT(206,`Default switch checkbox input`),lu(),yT(207,`
            `),lu(),yT(208,`
            `),as(209,`c-form-check`,25),yT(210,`
              `),hm(211,`input`,27),yT(212,`
              `),as(213,`label`,20),yT(214,`Checked switch checkbox input`),lu(),yT(215,`
            `),lu(),yT(216,`
            `),as(217,`c-form-check`,25),yT(218,`
              `),hm(219,`input`,28),yT(220,`
              `),as(221,`label`,20),yT(222,`Default switch checkbox input`),lu(),yT(223,`
            `),lu(),yT(224,`
            `),as(225,`c-form-check`,25),yT(226,`
              `),hm(227,`input`,29),yT(228,`
              `),as(229,`label`,20),yT(230,`Checked switch checkbox input`),lu(),yT(231,`
            `),lu(),yT(232,`
          `),lu(),yT(233,`
        `),lu(),yT(234,`
      `),lu(),yT(235,`
    `),lu(),yT(236,`
    `),as(237,`c-col`,2),yT(238,`
      `),as(239,`c-card`,3),yT(240,`
        `),as(241,`c-card-header`),yT(242,`
          `),as(243,`strong`),yT(244,`Angular Switches`),lu(),yT(245,` `),as(246,`small`),yT(247,`Sizes`),lu(),yT(248,`
        `),lu(),yT(249,`
        `),as(250,`c-card-body`),yT(251,`
          `),as(252,`app-docs-example`,30),yT(253,`
            `),as(254,`c-form-check`,25),yT(255,`
              `),hm(256,`input`,26),yT(257,`
              `),as(258,`label`,20),yT(259,`Default switch checkbox input`),lu(),yT(260,`
            `),lu(),yT(261,`
            `),as(262,`c-form-check`,31),yT(263,`
              `),hm(264,`input`,26),yT(265,`
              `),as(266,`label`,20),yT(267,`Large switch checkbox input`),lu(),yT(268,`
            `),lu(),yT(269,`
            `),as(270,`c-form-check`,32),yT(271,`
              `),hm(272,`input`,27),yT(273,`
              `),as(274,`label`,20),yT(275,`Extra large switch checkbox input`),lu(),yT(276,`
            `),lu(),yT(277,`
          `),lu(),yT(278,`
        `),lu(),yT(279,`
      `),lu(),yT(280,`
    `),lu(),yT(281,`
    `),as(282,`c-col`,2),yT(283,`
      `),as(284,`c-card`,3),yT(285,`
        `),as(286,`c-card-header`),yT(287,`
          `),as(288,`strong`),yT(289,`Angular Checks and Radios`),lu(),yT(290,` `),as(291,`small`),yT(292,`Default layout (stacked)`),lu(),yT(293,`
        `),lu(),yT(294,`
        `),as(295,`c-card-body`),yT(296,`
          `),as(297,`p`,10),yT(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),lu(),yT(299,`
          `),as(300,`app-docs-example`,33),yT(301,`
            `),as(302,`c-form-check`),yT(303,`
              `),hm(304,`input`,34),yT(305,`
              `),as(306,`label`,35),yT(307,`Default checkbox`),lu(),yT(308,`
            `),lu(),yT(309,`
            `),as(310,`c-form-check`),yT(311,`
              `),hm(312,`input`,36),yT(313,`
              `),as(314,`label`,37),yT(315,`Disabled checkbox`),lu(),yT(316,`
            `),lu(),yT(317,`
          `),lu(),yT(318,`
          `),as(319,`app-docs-example`,33),yT(320,`
            `),as(321,`c-form-check`),yT(322,`
              `),hm(323,`input`,38),yT(324,`
              `),as(325,`label`,39),yT(326,`Default radio`),lu(),yT(327,`
            `),lu(),yT(328,`
            `),as(329,`c-form-check`),yT(330,`
              `),hm(331,`input`,40),yT(332,`
              `),as(333,`label`,41),yT(334,`Second radio`),lu(),yT(335,`
            `),lu(),yT(336,`
            `),as(337,`c-form-check`),yT(338,`
              `),hm(339,`input`,42),yT(340,`
              `),as(341,`label`,43),yT(342,`Disabled radio`),lu(),yT(343,`
            `),lu(),yT(344,`
          `),lu(),yT(345,`
        `),lu(),yT(346,`
      `),lu(),yT(347,`
    `),lu(),yT(348,`
    `),as(349,`c-col`,2),yT(350,`
      `),as(351,`c-card`,3),yT(352,`
        `),as(353,`c-card-header`),yT(354,`
          `),as(355,`strong`),yT(356,`Angular Checks and Radios`),lu(),yT(357,` `),as(358,`small`),yT(359,`Inline`),lu(),yT(360,`
        `),lu(),yT(361,`
        `),as(362,`c-card-body`),yT(363,`
          `),as(364,`p`,10),yT(365,`
            Group checkboxes or radios on the same horizontal row by adding `),as(366,`code`),yT(367,`inline`),lu(),yT(368,`
            boolean property to any `),as(369,`code`),yT(370,`<c-form-check>`),lu(),yT(371,`.
          `),lu(),yT(372,`
          `),as(373,`app-docs-example`,44),yT(374,`
            `),as(375,`c-form-check`,45),yT(376,`
              `),hm(377,`input`,46),yT(378,`
              `),as(379,`label`,47),yT(380,`1`),lu(),yT(381,`
            `),lu(),yT(382,`
            `),as(383,`c-form-check`,48),yT(384,`
              `),hm(385,`input`,49),yT(386,`
              `),as(387,`label`,50),yT(388,`2`),lu(),yT(389,`
            `),lu(),yT(390,`
            `),as(391,`c-form-check`,48),yT(392,`
              `),hm(393,`input`,51),yT(394,`
              `),as(395,`label`,52),yT(396,`3 (disabled)`),lu(),yT(397,`
            `),lu(),yT(398,`

          `),lu(),yT(399,`
          `),as(400,`app-docs-example`,44),yT(401,`
            `),as(402,`c-form-check`,48),yT(403,`
              `),hm(404,`input`,53),yT(405,`
              `),as(406,`label`,54),yT(407,`1`),lu(),yT(408,`
            `),lu(),yT(409,`
            `),as(410,`c-form-check`,48),yT(411,`
              `),hm(412,`input`,55),yT(413,`
              `),as(414,`label`,56),yT(415,`2`),lu(),yT(416,`
            `),lu(),yT(417,`
            `),as(418,`c-form-check`,48),yT(419,`
              `),hm(420,`input`,57),yT(421,`
              `),as(422,`label`,58),yT(423,`3 (disabled)`),lu(),yT(424,`
            `),lu(),yT(425,`
          `),lu(),yT(426,`
        `),lu(),yT(427,`
      `),lu(),yT(428,`
    `),lu(),yT(429,`
    `),as(430,`c-col`,2),yT(431,`
      `),as(432,`c-card`,3),yT(433,`
        `),as(434,`c-card-header`),yT(435,`
          `),as(436,`strong`),yT(437,`Angular Checks and Radios`),lu(),yT(438,` `),as(439,`small`),yT(440,`Without labels`),lu(),yT(441,`
        `),lu(),yT(442,`
        `),as(443,`c-card-body`),yT(444,`
          `),as(445,`p`,10),yT(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),as(447,`code`),yT(448,`aria-label`),lu(),yT(449,`).
          `),lu(),yT(450,`
          `),as(451,`app-docs-example`,59),yT(452,`
            `),as(453,`div`),yT(454,`
              `),hm(455,`input`,60),yT(456,`
            `),lu(),yT(457,`
            `),as(458,`div`),yT(459,`
              `),hm(460,`input`,61),yT(461,`
            `),lu(),yT(462,`
          `),lu(),yT(463,`
        `),lu(),yT(464,`
      `),lu(),yT(465,`
    `),lu(),yT(466,`
    `),as(467,`c-col`,2),yT(468,`
      `),as(469,`c-card`,3),yT(470,`
        `),as(471,`c-card-header`),yT(472,`
          `),as(473,`strong`),yT(474,`Toggle buttons`),lu(),yT(475,`
        `),lu(),yT(476,`
        `),as(477,`c-card-body`),yT(478,`
          `),as(479,`p`,10),yT(480,`
            Create button-like checkboxes and radio buttons by using `),as(481,`code`),yT(482,`button`),lu(),yT(483,` boolean
            property on the `),as(484,`code`),yT(485,`<CFormCheck>`),lu(),yT(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),lu(),yT(487,`
          `),as(488,`app-docs-example`,62),yT(489,`
            `),as(490,`div`,63),yT(491,`
              `),as(492,`c-button-group`,64),yT(493,`
                `),as(494,`input`,65),Rw(),lu(),yT(495,`
                `),as(496,`label`,66),Tm(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),yT(497,`Checkbox 1`),lu(),yT(498,`

                `),as(499,`input`,67),Rw(),lu(),yT(500,`
                `),as(501,`label`,66),Tm(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),yT(502,`Checkbox 2`),lu(),yT(503,`

                `),as(504,`input`,68),Rw(),lu(),yT(505,`
                `),as(506,`label`,66),Tm(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),yT(507,`Disabled 3`),lu(),yT(508,`
              `),lu(),yT(509,`
            `),lu(),yT(510,`
          `),lu(),yT(511,`
          `),as(512,`app-docs-example`),yT(513,`
            `),as(514,`div`,69),yT(515,`
              `),as(516,`c-button-group`,70),yT(517,`
                `),as(518,`input`,71),Rw(),lu(),yT(519,`
                `),as(520,`label`,72),Tm(`click`,function(){return r.setRadioValue(`Radio1`)}),yT(521,`Radio 1`),lu(),yT(522,`

                `),as(523,`input`,73),Rw(),lu(),yT(524,`
                `),as(525,`label`,74),Tm(`click`,function(){return r.setRadioValue(`Radio2`)}),yT(526,`Radio 2`),lu(),yT(527,`
                `),as(528,`input`,75),Rw(),lu(),yT(529,`
                `),as(530,`label`,76),Tm(`click`,function(){return r.setRadioValue(`Radio3`)}),yT(531,`Radio3`),lu(),yT(532,`
              `),lu(),yT(533,`
            `),lu(),yT(534,`
          `),lu(),yT(535,`
          `),as(536,`h5`),yT(537,`Outlined styles`),lu(),yT(538,`
          `),as(539,`p`,10),yT(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),lu(),yT(541,`
          `),as(542,`app-docs-example`,62),yT(543,`
            `),as(544,`div`,63),yT(545,`
              `),as(546,`c-button-group`,64),yT(547,`
                `),as(548,`input`,65),Rw(),lu(),yT(549,`
                `),as(550,`label`,77),Tm(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),yT(551,`Checkbox 1`),lu(),yT(552,`

                `),as(553,`input`,67),Rw(),lu(),yT(554,`
                `),as(555,`label`,77),Tm(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),yT(556,`Checkbox 2`),lu(),yT(557,`

                `),as(558,`input`,68),Rw(),lu(),yT(559,`
                `),as(560,`label`,77),Tm(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),yT(561,`Disabled
                  3`),lu(),yT(562,`
              `),lu(),yT(563,`
            `),lu(),yT(564,`
          `),lu(),yT(565,`
          `),as(566,`app-docs-example`),yT(567,`
            `),as(568,`div`,69),yT(569,`
              `),as(570,`c-button-group`,70),yT(571,`
                `),as(572,`input`,78),Rw(),lu(),yT(573,`
                `),as(574,`label`,79),Tm(`click`,function(){return r.setRadioValue(`Radio1`)}),yT(575,`Radio 1`),lu(),yT(576,`

                `),as(577,`input`,80),Rw(),lu(),yT(578,`
                `),as(579,`label`,81),Tm(`click`,function(){return r.setRadioValue(`Radio2`)}),yT(580,`Radio 2`),lu(),yT(581,`

                `),as(582,`input`,82),Rw(),lu(),yT(583,`
                `),as(584,`label`,83),Tm(`click`,function(){return r.setRadioValue(`Radio3`)}),yT(585,`Radio3`),lu(),yT(586,`
              `),lu(),yT(587,`
            `),lu(),yT(588,`
          `),lu(),yT(589,`
        `),lu(),yT(590,`
      `),lu(),yT(591,`
    `),lu(),yT(592,`
  `),lu(),yT(593,`
`),lu()),d&2&&(ZD(4),pm(`formGroup`,r.formGroup),ZD(20),Ow(),ZD(8),pm(`checked`,!0),Ow(),ZD(41),Ow(),ZD(8),Ow(),ZD(29),Ow(),ZD(8),Ow(),ZD(41),Ow(),ZD(8),Ow(),ZD(34),pm(`switch`,!0),ZD(8),pm(`switch`,!0),ZD(8),pm(`switch`,!0),ZD(8),pm(`switch`,!0),ZD(29),pm(`switch`,!0),ZD(121),pm(`inline`,!0),ZD(119),Ow(),ZD(5),Ow(),ZD(5),Ow(),ZD(14),Ow(),ZD(5),Ow(),ZD(5),fm(`disabled`,!0),Ow(),ZD(20),Ow(),ZD(5),Ow(),ZD(5),Ow(),ZD(14),Ow(),ZD(5),Ow(),ZD(5),fm(`disabled`,!0),Ow())},dependencies:[fF,or,AN,xi,hD,QD,Ji,il,nr,ir,eC,oF,uI,oo,WM,ro,$,rF,g0,zC,$P,ao,c],encapsulation:2})}};export{H as ChecksRadiosComponent};