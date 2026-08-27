import{Hr as ow,Ii as zw,In as b,Ir as nm,Jt as Ug,Ri as l,Rr as nu,_i as vD,mr as iw,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$t as cf,B as JS,D as G2,H as Jn,I as Ii,Jn as sF,K as Kv,Kt as aF,S as Ds,Ut as ZN,_t as Ro,ar as vF,ir as ux,mr as xr,nt as Nb,pt as QN,ur as wr,ut as Po,vr as yh,wn as ko,wt as Tm,x as Dr}from"./main-4TN2AKI5.js";import{t as I}from"./chunk-BbLcjyYA.js";import"./chunk-Cev-sbmv.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-Bk33eg8C.js";var H=class p{constructor(){this.formBuilder=b(ZN);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=zw({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(rs(0,`c-row`),Wb(1,`
  `),qg(2,`app-docs-components`,0),Wb(3,`
  `),rs(4,`form`,1),Wb(5,`
    `),rs(6,`c-col`,2),Wb(7,`
      `),rs(8,`c-card`,3),Wb(9,`
        `),rs(10,`c-card-header`),Wb(11,`
          `),rs(12,`strong`),Wb(13,`Angular Checkbox`),nu(),Wb(14,`
        `),nu(),Wb(15,`
        `),rs(16,`c-card-body`),Wb(17,`
          `),rs(18,`app-docs-example`,4),Wb(19,`
            `),rs(20,`div`,5),Wb(21,`
              `),rs(22,`c-form-check`),Wb(23,`
                `),qg(24,`input`,6),ow(),Wb(25,`
                `),rs(26,`label`,7),Wb(27,`Default checkbox`),nu(),Wb(28,`
              `),nu(),Wb(29,`
              `),rs(30,`c-form-check`),Wb(31,`
                `),qg(32,`input`,8),ow(),Wb(33,`
                `),rs(34,`label`,9),Wb(35,`Checked checkbox`),nu(),Wb(36,`
              `),nu(),Wb(37,`
            `),nu(),Wb(38,`
          `),nu(),Wb(39,`
        `),nu(),Wb(40,`
      `),nu(),Wb(41,`
    `),nu(),Wb(42,`
    `),rs(43,`c-col`,2),Wb(44,`
      `),rs(45,`c-card`,3),Wb(46,`
        `),rs(47,`c-card-header`),Wb(48,`
          `),rs(49,`strong`),Wb(50,`Angular Checkbox`),nu(),Wb(51,` `),rs(52,`small`),Wb(53,`Disabled`),nu(),Wb(54,`
        `),nu(),Wb(55,`
        `),rs(56,`c-card-body`),Wb(57,`
          `),rs(58,`p`,10),Wb(59,`
            Add the `),rs(60,`code`),Wb(61,`disabled`),nu(),Wb(62,` attribute and the associated `),rs(63,`code`),Wb(64,`<label>`),nu(),Wb(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),nu(),Wb(66,`
          `),rs(67,`app-docs-example`,11),Wb(68,`
            `),rs(69,`div`,12),Wb(70,`
              `),rs(71,`c-form-check`),Wb(72,`
                `),qg(73,`input`,13),ow(),Wb(74,`
                `),rs(75,`label`,14),Wb(76,`Disabled checkbox`),nu(),Wb(77,`
              `),nu(),Wb(78,`
              `),rs(79,`c-form-check`),Wb(80,`
                `),qg(81,`input`,15),ow(),Wb(82,`
                `),rs(83,`label`,16),Wb(84,`Disabled checked checkbox`),nu(),Wb(85,`
              `),nu(),Wb(86,`
            `),nu(),Wb(87,`
          `),nu(),Wb(88,`
        `),nu(),Wb(89,`
      `),nu(),Wb(90,`
    `),nu(),Wb(91,`
    `),rs(92,`c-col`,2),Wb(93,`
      `),rs(94,`c-card`,3),Wb(95,`
        `),rs(96,`c-card-header`),Wb(97,`
          `),rs(98,`strong`),Wb(99,`Angular Radio`),nu(),Wb(100,`
        `),nu(),Wb(101,`
        `),rs(102,`c-card-body`),Wb(103,`
          `),rs(104,`app-docs-example`,17),Wb(105,`
            `),rs(106,`div`,18),Wb(107,`
              `),rs(108,`c-form-check`),Wb(109,`
                `),qg(110,`input`,19),ow(),Wb(111,`
                `),rs(112,`label`,20),Wb(113,`Default radio`),nu(),Wb(114,`
              `),nu(),Wb(115,`
              `),rs(116,`c-form-check`),Wb(117,`
                `),qg(118,`input`,21),ow(),Wb(119,`
                `),rs(120,`label`,20),Wb(121,`Checked radio`),nu(),Wb(122,`
              `),nu(),Wb(123,`
            `),nu(),Wb(124,`
          `),nu(),Wb(125,`
        `),nu(),Wb(126,`
      `),nu(),Wb(127,`
    `),nu(),Wb(128,`
    `),rs(129,`c-col`,2),Wb(130,`
      `),rs(131,`c-card`,3),Wb(132,`
        `),rs(133,`c-card-header`),Wb(134,`
          `),rs(135,`strong`),Wb(136,`Angular Radio`),nu(),Wb(137,` `),rs(138,`small`),Wb(139,`Disabled`),nu(),Wb(140,`
        `),nu(),Wb(141,`
        `),rs(142,`c-card-body`),Wb(143,`
          `),rs(144,`p`,10),Wb(145,`
            Add the `),rs(146,`code`),Wb(147,`disabled`),nu(),Wb(148,` attribute and the associated `),rs(149,`code`),Wb(150,`<label>`),nu(),Wb(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),nu(),Wb(152,`
          `),rs(153,`app-docs-example`,22),Wb(154,`
            `),rs(155,`div`,23),Wb(156,`
              `),rs(157,`c-form-check`),Wb(158,`
                `),qg(159,`input`,19),ow(),Wb(160,`
                `),rs(161,`label`,20),Wb(162,`Default radio`),nu(),Wb(163,`
              `),nu(),Wb(164,`
              `),rs(165,`c-form-check`),Wb(166,`
                `),qg(167,`input`,21),ow(),Wb(168,`
                `),rs(169,`label`,20),Wb(170,`Checked radio`),nu(),Wb(171,`
              `),nu(),Wb(172,`
            `),nu(),Wb(173,`
          `),nu(),Wb(174,`
        `),nu(),Wb(175,`
      `),nu(),Wb(176,`
    `),nu(),Wb(177,`
    `),rs(178,`c-col`,2),Wb(179,`
      `),rs(180,`c-card`,3),Wb(181,`
        `),rs(182,`c-card-header`),Wb(183,`
          `),rs(184,`strong`),Wb(185,`Angular Switches`),nu(),Wb(186,`
        `),nu(),Wb(187,`
        `),rs(188,`c-card-body`),Wb(189,`
          `),rs(190,`p`,10),Wb(191,`
            A switch has the markup of a custom checkbox but uses the `),rs(192,`code`),Wb(193,`switch`),nu(),Wb(194,` boolean
            properly to render a toggle switch. Switches also support the `),rs(195,`code`),Wb(196,`disabled`),nu(),Wb(197,`
            attribute.
          `),nu(),Wb(198,`
          `),rs(199,`app-docs-example`,24),Wb(200,`
            `),rs(201,`c-form-check`,25),Wb(202,`
              `),qg(203,`input`,26),Wb(204,`
              `),rs(205,`label`,20),Wb(206,`Default switch checkbox input`),nu(),Wb(207,`
            `),nu(),Wb(208,`
            `),rs(209,`c-form-check`,25),Wb(210,`
              `),qg(211,`input`,27),Wb(212,`
              `),rs(213,`label`,20),Wb(214,`Checked switch checkbox input`),nu(),Wb(215,`
            `),nu(),Wb(216,`
            `),rs(217,`c-form-check`,25),Wb(218,`
              `),qg(219,`input`,28),Wb(220,`
              `),rs(221,`label`,20),Wb(222,`Default switch checkbox input`),nu(),Wb(223,`
            `),nu(),Wb(224,`
            `),rs(225,`c-form-check`,25),Wb(226,`
              `),qg(227,`input`,29),Wb(228,`
              `),rs(229,`label`,20),Wb(230,`Checked switch checkbox input`),nu(),Wb(231,`
            `),nu(),Wb(232,`
          `),nu(),Wb(233,`
        `),nu(),Wb(234,`
      `),nu(),Wb(235,`
    `),nu(),Wb(236,`
    `),rs(237,`c-col`,2),Wb(238,`
      `),rs(239,`c-card`,3),Wb(240,`
        `),rs(241,`c-card-header`),Wb(242,`
          `),rs(243,`strong`),Wb(244,`Angular Switches`),nu(),Wb(245,` `),rs(246,`small`),Wb(247,`Sizes`),nu(),Wb(248,`
        `),nu(),Wb(249,`
        `),rs(250,`c-card-body`),Wb(251,`
          `),rs(252,`app-docs-example`,30),Wb(253,`
            `),rs(254,`c-form-check`,25),Wb(255,`
              `),qg(256,`input`,26),Wb(257,`
              `),rs(258,`label`,20),Wb(259,`Default switch checkbox input`),nu(),Wb(260,`
            `),nu(),Wb(261,`
            `),rs(262,`c-form-check`,31),Wb(263,`
              `),qg(264,`input`,26),Wb(265,`
              `),rs(266,`label`,20),Wb(267,`Large switch checkbox input`),nu(),Wb(268,`
            `),nu(),Wb(269,`
            `),rs(270,`c-form-check`,32),Wb(271,`
              `),qg(272,`input`,27),Wb(273,`
              `),rs(274,`label`,20),Wb(275,`Extra large switch checkbox input`),nu(),Wb(276,`
            `),nu(),Wb(277,`
          `),nu(),Wb(278,`
        `),nu(),Wb(279,`
      `),nu(),Wb(280,`
    `),nu(),Wb(281,`
    `),rs(282,`c-col`,2),Wb(283,`
      `),rs(284,`c-card`,3),Wb(285,`
        `),rs(286,`c-card-header`),Wb(287,`
          `),rs(288,`strong`),Wb(289,`Angular Checks and Radios`),nu(),Wb(290,` `),rs(291,`small`),Wb(292,`Default layout (stacked)`),nu(),Wb(293,`
        `),nu(),Wb(294,`
        `),rs(295,`c-card-body`),Wb(296,`
          `),rs(297,`p`,10),Wb(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),nu(),Wb(299,`
          `),rs(300,`app-docs-example`,33),Wb(301,`
            `),rs(302,`c-form-check`),Wb(303,`
              `),qg(304,`input`,34),Wb(305,`
              `),rs(306,`label`,35),Wb(307,`Default checkbox`),nu(),Wb(308,`
            `),nu(),Wb(309,`
            `),rs(310,`c-form-check`),Wb(311,`
              `),qg(312,`input`,36),Wb(313,`
              `),rs(314,`label`,37),Wb(315,`Disabled checkbox`),nu(),Wb(316,`
            `),nu(),Wb(317,`
          `),nu(),Wb(318,`
          `),rs(319,`app-docs-example`,33),Wb(320,`
            `),rs(321,`c-form-check`),Wb(322,`
              `),qg(323,`input`,38),Wb(324,`
              `),rs(325,`label`,39),Wb(326,`Default radio`),nu(),Wb(327,`
            `),nu(),Wb(328,`
            `),rs(329,`c-form-check`),Wb(330,`
              `),qg(331,`input`,40),Wb(332,`
              `),rs(333,`label`,41),Wb(334,`Second radio`),nu(),Wb(335,`
            `),nu(),Wb(336,`
            `),rs(337,`c-form-check`),Wb(338,`
              `),qg(339,`input`,42),Wb(340,`
              `),rs(341,`label`,43),Wb(342,`Disabled radio`),nu(),Wb(343,`
            `),nu(),Wb(344,`
          `),nu(),Wb(345,`
        `),nu(),Wb(346,`
      `),nu(),Wb(347,`
    `),nu(),Wb(348,`
    `),rs(349,`c-col`,2),Wb(350,`
      `),rs(351,`c-card`,3),Wb(352,`
        `),rs(353,`c-card-header`),Wb(354,`
          `),rs(355,`strong`),Wb(356,`Angular Checks and Radios`),nu(),Wb(357,` `),rs(358,`small`),Wb(359,`Inline`),nu(),Wb(360,`
        `),nu(),Wb(361,`
        `),rs(362,`c-card-body`),Wb(363,`
          `),rs(364,`p`,10),Wb(365,`
            Group checkboxes or radios on the same horizontal row by adding `),rs(366,`code`),Wb(367,`inline`),nu(),Wb(368,`
            boolean property to any `),rs(369,`code`),Wb(370,`<c-form-check>`),nu(),Wb(371,`.
          `),nu(),Wb(372,`
          `),rs(373,`app-docs-example`,44),Wb(374,`
            `),rs(375,`c-form-check`,45),Wb(376,`
              `),qg(377,`input`,46),Wb(378,`
              `),rs(379,`label`,47),Wb(380,`1`),nu(),Wb(381,`
            `),nu(),Wb(382,`
            `),rs(383,`c-form-check`,48),Wb(384,`
              `),qg(385,`input`,49),Wb(386,`
              `),rs(387,`label`,50),Wb(388,`2`),nu(),Wb(389,`
            `),nu(),Wb(390,`
            `),rs(391,`c-form-check`,48),Wb(392,`
              `),qg(393,`input`,51),Wb(394,`
              `),rs(395,`label`,52),Wb(396,`3 (disabled)`),nu(),Wb(397,`
            `),nu(),Wb(398,`

          `),nu(),Wb(399,`
          `),rs(400,`app-docs-example`,44),Wb(401,`
            `),rs(402,`c-form-check`,48),Wb(403,`
              `),qg(404,`input`,53),Wb(405,`
              `),rs(406,`label`,54),Wb(407,`1`),nu(),Wb(408,`
            `),nu(),Wb(409,`
            `),rs(410,`c-form-check`,48),Wb(411,`
              `),qg(412,`input`,55),Wb(413,`
              `),rs(414,`label`,56),Wb(415,`2`),nu(),Wb(416,`
            `),nu(),Wb(417,`
            `),rs(418,`c-form-check`,48),Wb(419,`
              `),qg(420,`input`,57),Wb(421,`
              `),rs(422,`label`,58),Wb(423,`3 (disabled)`),nu(),Wb(424,`
            `),nu(),Wb(425,`
          `),nu(),Wb(426,`
        `),nu(),Wb(427,`
      `),nu(),Wb(428,`
    `),nu(),Wb(429,`
    `),rs(430,`c-col`,2),Wb(431,`
      `),rs(432,`c-card`,3),Wb(433,`
        `),rs(434,`c-card-header`),Wb(435,`
          `),rs(436,`strong`),Wb(437,`Angular Checks and Radios`),nu(),Wb(438,` `),rs(439,`small`),Wb(440,`Without labels`),nu(),Wb(441,`
        `),nu(),Wb(442,`
        `),rs(443,`c-card-body`),Wb(444,`
          `),rs(445,`p`,10),Wb(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),rs(447,`code`),Wb(448,`aria-label`),nu(),Wb(449,`).
          `),nu(),Wb(450,`
          `),rs(451,`app-docs-example`,59),Wb(452,`
            `),rs(453,`div`),Wb(454,`
              `),qg(455,`input`,60),Wb(456,`
            `),nu(),Wb(457,`
            `),rs(458,`div`),Wb(459,`
              `),qg(460,`input`,61),Wb(461,`
            `),nu(),Wb(462,`
          `),nu(),Wb(463,`
        `),nu(),Wb(464,`
      `),nu(),Wb(465,`
    `),nu(),Wb(466,`
    `),rs(467,`c-col`,2),Wb(468,`
      `),rs(469,`c-card`,3),Wb(470,`
        `),rs(471,`c-card-header`),Wb(472,`
          `),rs(473,`strong`),Wb(474,`Toggle buttons`),nu(),Wb(475,`
        `),nu(),Wb(476,`
        `),rs(477,`c-card-body`),Wb(478,`
          `),rs(479,`p`,10),Wb(480,`
            Create button-like checkboxes and radio buttons by using `),rs(481,`code`),Wb(482,`button`),nu(),Wb(483,` boolean
            property on the `),rs(484,`code`),Wb(485,`<CFormCheck>`),nu(),Wb(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),nu(),Wb(487,`
          `),rs(488,`app-docs-example`,62),Wb(489,`
            `),rs(490,`div`,63),Wb(491,`
              `),rs(492,`c-button-group`,64),Wb(493,`
                `),qg(494,`input`,65),ow(),Wb(495,`
                `),rs(496,`label`,66),nm(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),Wb(497,`Checkbox 1`),nu(),Wb(498,`

                `),qg(499,`input`,67),ow(),Wb(500,`
                `),rs(501,`label`,66),nm(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),Wb(502,`Checkbox 2`),nu(),Wb(503,`

                `),qg(504,`input`,68),ow(),Wb(505,`
                `),rs(506,`label`,66),nm(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),Wb(507,`Disabled 3`),nu(),Wb(508,`
              `),nu(),Wb(509,`
            `),nu(),Wb(510,`
          `),nu(),Wb(511,`
          `),rs(512,`app-docs-example`),Wb(513,`
            `),rs(514,`div`,69),Wb(515,`
              `),rs(516,`c-button-group`,70),Wb(517,`
                `),qg(518,`input`,71),ow(),Wb(519,`
                `),rs(520,`label`,72),nm(`click`,function(){return r.setRadioValue(`Radio1`)}),Wb(521,`Radio 1`),nu(),Wb(522,`

                `),qg(523,`input`,73),ow(),Wb(524,`
                `),rs(525,`label`,74),nm(`click`,function(){return r.setRadioValue(`Radio2`)}),Wb(526,`Radio 2`),nu(),Wb(527,`
                `),qg(528,`input`,75),ow(),Wb(529,`
                `),rs(530,`label`,76),nm(`click`,function(){return r.setRadioValue(`Radio3`)}),Wb(531,`Radio3`),nu(),Wb(532,`
              `),nu(),Wb(533,`
            `),nu(),Wb(534,`
          `),nu(),Wb(535,`
          `),rs(536,`h5`),Wb(537,`Outlined styles`),nu(),Wb(538,`
          `),rs(539,`p`,10),Wb(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),nu(),Wb(541,`
          `),rs(542,`app-docs-example`,62),Wb(543,`
            `),rs(544,`div`,63),Wb(545,`
              `),rs(546,`c-button-group`,64),Wb(547,`
                `),qg(548,`input`,65),ow(),Wb(549,`
                `),rs(550,`label`,77),nm(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),Wb(551,`Checkbox 1`),nu(),Wb(552,`

                `),qg(553,`input`,67),ow(),Wb(554,`
                `),rs(555,`label`,77),nm(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),Wb(556,`Checkbox 2`),nu(),Wb(557,`

                `),qg(558,`input`,68),ow(),Wb(559,`
                `),rs(560,`label`,77),nm(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),Wb(561,`Disabled
                  3`),nu(),Wb(562,`
              `),nu(),Wb(563,`
            `),nu(),Wb(564,`
          `),nu(),Wb(565,`
          `),rs(566,`app-docs-example`),Wb(567,`
            `),rs(568,`div`,69),Wb(569,`
              `),rs(570,`c-button-group`,70),Wb(571,`
                `),qg(572,`input`,78),ow(),Wb(573,`
                `),rs(574,`label`,79),nm(`click`,function(){return r.setRadioValue(`Radio1`)}),Wb(575,`Radio 1`),nu(),Wb(576,`

                `),qg(577,`input`,80),ow(),Wb(578,`
                `),rs(579,`label`,81),nm(`click`,function(){return r.setRadioValue(`Radio2`)}),Wb(580,`Radio 2`),nu(),Wb(581,`

                `),qg(582,`input`,82),ow(),Wb(583,`
                `),rs(584,`label`,83),nm(`click`,function(){return r.setRadioValue(`Radio3`)}),Wb(585,`Radio3`),nu(),Wb(586,`
              `),nu(),Wb(587,`
            `),nu(),Wb(588,`
          `),nu(),Wb(589,`
        `),nu(),Wb(590,`
      `),nu(),Wb(591,`
    `),nu(),Wb(592,`
  `),nu(),Wb(593,`
`),nu()),d&2&&(vD(4),Wg(`formGroup`,r.formGroup),vD(20),iw(),vD(8),Wg(`checked`,!0),iw(),vD(41),iw(),vD(8),iw(),vD(29),iw(),vD(8),iw(),vD(41),iw(),vD(8),iw(),vD(34),Wg(`switch`,!0),vD(8),Wg(`switch`,!0),vD(8),Wg(`switch`,!0),vD(8),Wg(`switch`,!0),vD(29),Wg(`switch`,!0),vD(121),Wg(`inline`,!0),vD(119),iw(),vD(5),iw(),vD(5),iw(),vD(14),iw(),vD(5),iw(),vD(5),Ug(`disabled`,!0),iw(),vD(20),iw(),vD(5),iw(),vD(5),iw(),vD(14),iw(),vD(5),iw(),vD(5),Ug(`disabled`,!0),iw())},dependencies:[vF,xr,QN,Jn,Kv,Nb,Ii,Ds,Dr,wr,yh,aF,ux,Ro,JS,Po,I,sF,cf,Tm,G2,ko,c],encapsulation:2})}};export{H as ChecksRadiosComponent};