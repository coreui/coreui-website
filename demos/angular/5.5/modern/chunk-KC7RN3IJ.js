import{b as O}from"./chunk-XV3ZXLSP.js";import"./chunk-PMOGNWGV.js";import{a as z}from"./chunk-ZX4I2AKI.js";import{C as E,D as C,E as g,F as y,G as F,K as R,M as v,Ma as N,Na as I,Oa as L,Qa as T,X as _,db as V,fb as A,ja as w,na as D,oa as B,ra as G,s as k,t as b,u as S,v as f}from"./chunk-YI43TGSZ.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Jb as s,Qb as m,Rb as t,Sb as i,Tb as n,bb as r,bc as o,fa as p,mb as u,sc as e}from"./chunk-H7BDVHMQ.js";import{a as h}from"./chunk-ZOGHMS73.js";var x=class x{constructor(){this.formBuilder=p(R);this.inputDisabled=null;this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control("two")}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:"two",disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:"Radio2"})})})}setCheckBoxValue(d){let c=this.formGroup.controls.btnCheckGroup,l=c.get(d)?.value,a=h({},c.value);a[d]=!l,c.patchValue(a)}setRadioValue(d){this.formGroup.controls.btnRadioGroup.setValue({radio1:d})}};x.\u0275fac=function(c){return new(c||x)},x.\u0275cmp=u({type:x,selectors:[["app-checks-radios"]],decls:594,vars:10,consts:[["href","forms/checks-radios","title","Check & Radios"],["cForm","",3,"formGroup"],["xs","12"],[1,"mb-4"],["href","forms/checks-radios"],["formGroupName","flexCheckGroup"],["cFormCheckInput","","formControlName","checkOne","id","checkOne","type","checkbox"],["cFormCheckLabel","","for","checkOne"],["cFormCheckInput","","formControlName","checkTwo","id","checkTwo","type","checkbox",3,"checked"],["cFormCheckLabel","","for","checkTwo"],[1,"text-body-secondary","small"],["href","forms/checks-radios#disabled"],["formGroupName","flexCheckGroupDisabled"],["cFormCheckInput","","formControlName","checkThree","id","checkThree","type","checkbox"],["cFormCheckLabel","","for","checkThree"],["cFormCheckInput","","formControlName","checkFour","id","checkFour","type","checkbox"],["cFormCheckLabel","","for","checkFour"],["href","forms/checks-radios#radios"],["formGroupName","flexRadioGroup"],["cFormCheckInput","","formControlName","flexRadioDefault","type","radio","value","one"],["cFormCheckLabel",""],["cFormCheckInput","","formControlName","flexRadioDefault","type","radio","value","two"],["href","forms/checks-radios#disabled-1"],["formGroupName","flexRadioGroupDisabled"],["href","forms/checks-radios#switches"],[3,"switch"],["cFormCheckInput","","type","checkbox"],["cFormCheckInput","","checked","","type","checkbox"],["cFormCheckInput","","disabled","","type","checkbox"],["cFormCheckInput","","checked","","disabled","","type","checkbox"],["href","forms/checks-radios#sizes"],["sizing","lg","switch",""],["sizing","xl","switch",""],["href","forms/checks-radios#default-stacked"],["cFormCheckInput","","id","stackOne","type","checkbox"],["cFormCheckLabel","","for","stackOne"],["cFormCheckInput","","disabled","","id","stackTwo","type","checkbox"],["cFormCheckLabel","","for","stackTwo"],["cFormCheckInput","","checked","","id","radioStack1","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack1"],["cFormCheckInput","","id","radioStack2","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack2"],["cFormCheckInput","","disabled","","id","radioStack3","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack3"],["href","forms/checks-radios#inline"],[3,"inline"],["cFormCheckInput","","id","inline1","type","checkbox"],["cFormCheckLabel","","for","inline1"],["inline",""],["cFormCheckInput","","id","inline2","type","checkbox"],["cFormCheckLabel","","for","inline2"],["cFormCheckInput","","disabled","","id","inline3","type","checkbox"],["cFormCheckLabel","","for","inline3"],["cFormCheckInput","","checked","","id","radioinline1","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline1"],["cFormCheckInput","","id","radioinline2","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline2"],["cFormCheckInput","","disabled","","id","radioinline3","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline3"],["href","forms/checks-radios#without-labels"],["cFormCheckInput","","id","nolabelCheck","name","nolabelCheck","type","checkbox"],["cFormCheckInput","","id","nolabelRadio","name","nolabelRadio","type","radio"],["href","forms/checks-radios#toggle-buttons"],["formGroupName","btnCheckGroup"],["aria-label","Basic checkbox toggle button group","role","group"],["formControlName","checkbox1","type","checkbox",1,"btn-check"],["cButton","","cFormCheckLabel","",3,"click"],["formControlName","checkbox2","type","checkbox",1,"btn-check"],["formControlName","checkbox3","type","checkbox",1,"btn-check"],["formGroupName","btnRadioGroup"],["aria-label","Basic radio toggle button group","role","group"],["formControlName","radio1","id","radio1","type","radio","value","Radio1",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio1","variant","ghost",3,"click"],["formControlName","radio1","id","radio2","type","radio","value","Radio2",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio2","variant","ghost",3,"click"],["formControlName","radio1","id","radio3","type","radio","value","Radio3",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio3","variant","ghost",3,"click"],["cButton","","cFormCheckLabel","","variant","outline",3,"click"],["formControlName","radio1","id","radio1o","type","radio","value","Radio1",1,"btn-check"],["cButton","","cFormCheckLabel","","color","danger","for","radio1o","variant","outline",3,"click"],["formControlName","radio1","id","radio2o","type","radio","value","Radio2",1,"btn-check"],["cButton","","cFormCheckLabel","","color","success","for","radio2o","variant","outline",3,"click"],["formControlName","radio1","id","radio3o","type","radio","value","Radio3",1,"btn-check"],["cButton","","color","secondary","for","radio3o","variant","outline",3,"click"]],template:function(c,l){c&1&&(t(0,"c-row"),e(1,`
  `),n(2,"app-docs-components",0),e(3,`
  `),t(4,"form",1),e(5,`
    `),t(6,"c-col",2),e(7,`
      `),t(8,"c-card",3),e(9,`
        `),t(10,"c-card-header"),e(11,`
          `),t(12,"strong"),e(13,"Angular Checkbox"),i(),e(14,`
        `),i(),e(15,`
        `),t(16,"c-card-body"),e(17,`
          `),t(18,"app-docs-example",4),e(19,`
            `),t(20,"div",5),e(21,`
              `),t(22,"c-form-check"),e(23,`
                `),n(24,"input",6),e(25,`
                `),t(26,"label",7),e(27,"Default checkbox"),i(),e(28,`
              `),i(),e(29,`
              `),t(30,"c-form-check"),e(31,`
                `),n(32,"input",8),e(33,`
                `),t(34,"label",9),e(35,"Checked checkbox"),i(),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
    `),i(),e(42,`
    `),t(43,"c-col",2),e(44,`
      `),t(45,"c-card",3),e(46,`
        `),t(47,"c-card-header"),e(48,`
          `),t(49,"strong"),e(50,"Angular Checkbox"),i(),e(51," "),t(52,"small"),e(53,"Disabled"),i(),e(54,`
        `),i(),e(55,`
        `),t(56,"c-card-body"),e(57,`
          `),t(58,"p",10),e(59,`
            Add the `),t(60,"code"),e(61,"disabled"),i(),e(62," attribute and the associated "),t(63,"code"),e(64,"<label>"),i(),e(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),i(),e(66,`
          `),t(67,"app-docs-example",11),e(68,`
            `),t(69,"div",12),e(70,`
              `),t(71,"c-form-check"),e(72,`
                `),n(73,"input",13),e(74,`
                `),t(75,"label",14),e(76,"Disabled checkbox"),i(),e(77,`
              `),i(),e(78,`
              `),t(79,"c-form-check"),e(80,`
                `),n(81,"input",15),e(82,`
                `),t(83,"label",16),e(84,"Disabled checked checkbox"),i(),e(85,`
              `),i(),e(86,`
            `),i(),e(87,`
          `),i(),e(88,`
        `),i(),e(89,`
      `),i(),e(90,`
    `),i(),e(91,`
    `),t(92,"c-col",2),e(93,`
      `),t(94,"c-card",3),e(95,`
        `),t(96,"c-card-header"),e(97,`
          `),t(98,"strong"),e(99,"Angular Radio"),i(),e(100,`
        `),i(),e(101,`
        `),t(102,"c-card-body"),e(103,`
          `),t(104,"app-docs-example",17),e(105,`
            `),t(106,"div",18),e(107,`
              `),t(108,"c-form-check"),e(109,`
                `),n(110,"input",19),e(111,`
                `),t(112,"label",20),e(113,"Default radio"),i(),e(114,`
              `),i(),e(115,`
              `),t(116,"c-form-check"),e(117,`
                `),n(118,"input",21),e(119,`
                `),t(120,"label",20),e(121,"Checked radio"),i(),e(122,`
              `),i(),e(123,`
            `),i(),e(124,`
          `),i(),e(125,`
        `),i(),e(126,`
      `),i(),e(127,`
    `),i(),e(128,`
    `),t(129,"c-col",2),e(130,`
      `),t(131,"c-card",3),e(132,`
        `),t(133,"c-card-header"),e(134,`
          `),t(135,"strong"),e(136,"Angular Radio"),i(),e(137," "),t(138,"small"),e(139,"Disabled"),i(),e(140,`
        `),i(),e(141,`
        `),t(142,"c-card-body"),e(143,`
          `),t(144,"p",10),e(145,`
            Add the `),t(146,"code"),e(147,"disabled"),i(),e(148," attribute and the associated "),t(149,"code"),e(150,"<label>"),i(),e(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),i(),e(152,`
          `),t(153,"app-docs-example",22),e(154,`
            `),t(155,"div",23),e(156,`
              `),t(157,"c-form-check"),e(158,`
                `),n(159,"input",19),e(160,`
                `),t(161,"label",20),e(162,"Default radio"),i(),e(163,`
              `),i(),e(164,`
              `),t(165,"c-form-check"),e(166,`
                `),n(167,"input",21),e(168,`
                `),t(169,"label",20),e(170,"Checked radio"),i(),e(171,`
              `),i(),e(172,`
            `),i(),e(173,`
          `),i(),e(174,`
        `),i(),e(175,`
      `),i(),e(176,`
    `),i(),e(177,`
    `),t(178,"c-col",2),e(179,`
      `),t(180,"c-card",3),e(181,`
        `),t(182,"c-card-header"),e(183,`
          `),t(184,"strong"),e(185,"Angular Switches"),i(),e(186,`
        `),i(),e(187,`
        `),t(188,"c-card-body"),e(189,`
          `),t(190,"p",10),e(191,`
            A switch has the markup of a custom checkbox but uses the `),t(192,"code"),e(193,"switch"),i(),e(194,` boolean
            properly to render a toggle switch. Switches also support the `),t(195,"code"),e(196,"disabled"),i(),e(197,`
            attribute.
          `),i(),e(198,`
          `),t(199,"app-docs-example",24),e(200,`
            `),t(201,"c-form-check",25),e(202,`
              `),n(203,"input",26),e(204,`
              `),t(205,"label",20),e(206,"Default switch checkbox input"),i(),e(207,`
            `),i(),e(208,`
            `),t(209,"c-form-check",25),e(210,`
              `),n(211,"input",27),e(212,`
              `),t(213,"label",20),e(214,"Checked switch checkbox input"),i(),e(215,`
            `),i(),e(216,`
            `),t(217,"c-form-check",25),e(218,`
              `),n(219,"input",28),e(220,`
              `),t(221,"label",20),e(222,"Default switch checkbox input"),i(),e(223,`
            `),i(),e(224,`
            `),t(225,"c-form-check",25),e(226,`
              `),n(227,"input",29),e(228,`
              `),t(229,"label",20),e(230,"Checked switch checkbox input"),i(),e(231,`
            `),i(),e(232,`
          `),i(),e(233,`
        `),i(),e(234,`
      `),i(),e(235,`
    `),i(),e(236,`
    `),t(237,"c-col",2),e(238,`
      `),t(239,"c-card",3),e(240,`
        `),t(241,"c-card-header"),e(242,`
          `),t(243,"strong"),e(244,"Angular Switches"),i(),e(245," "),t(246,"small"),e(247,"Sizes"),i(),e(248,`
        `),i(),e(249,`
        `),t(250,"c-card-body"),e(251,`
          `),t(252,"app-docs-example",30),e(253,`
            `),t(254,"c-form-check",25),e(255,`
              `),n(256,"input",26),e(257,`
              `),t(258,"label",20),e(259,"Default switch checkbox input"),i(),e(260,`
            `),i(),e(261,`
            `),t(262,"c-form-check",31),e(263,`
              `),n(264,"input",26),e(265,`
              `),t(266,"label",20),e(267,"Large switch checkbox input"),i(),e(268,`
            `),i(),e(269,`
            `),t(270,"c-form-check",32),e(271,`
              `),n(272,"input",27),e(273,`
              `),t(274,"label",20),e(275,"Extra large switch checkbox input"),i(),e(276,`
            `),i(),e(277,`
          `),i(),e(278,`
        `),i(),e(279,`
      `),i(),e(280,`
    `),i(),e(281,`
    `),t(282,"c-col",2),e(283,`
      `),t(284,"c-card",3),e(285,`
        `),t(286,"c-card-header"),e(287,`
          `),t(288,"strong"),e(289,"Angular Checks and Radios"),i(),e(290," "),t(291,"small"),e(292,"Default layout (stacked)"),i(),e(293,`
        `),i(),e(294,`
        `),t(295,"c-card-body"),e(296,`
          `),t(297,"p",10),e(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),i(),e(299,`
          `),t(300,"app-docs-example",33),e(301,`
            `),t(302,"c-form-check"),e(303,`
              `),n(304,"input",34),e(305,`
              `),t(306,"label",35),e(307,"Default checkbox"),i(),e(308,`
            `),i(),e(309,`
            `),t(310,"c-form-check"),e(311,`
              `),n(312,"input",36),e(313,`
              `),t(314,"label",37),e(315,"Disabled checkbox"),i(),e(316,`
            `),i(),e(317,`
          `),i(),e(318,`
          `),t(319,"app-docs-example",33),e(320,`
            `),t(321,"c-form-check"),e(322,`
              `),n(323,"input",38),e(324,`
              `),t(325,"label",39),e(326,"Default radio"),i(),e(327,`
            `),i(),e(328,`
            `),t(329,"c-form-check"),e(330,`
              `),n(331,"input",40),e(332,`
              `),t(333,"label",41),e(334,"Second radio"),i(),e(335,`
            `),i(),e(336,`
            `),t(337,"c-form-check"),e(338,`
              `),n(339,"input",42),e(340,`
              `),t(341,"label",43),e(342,"Disabled radio"),i(),e(343,`
            `),i(),e(344,`
          `),i(),e(345,`
        `),i(),e(346,`
      `),i(),e(347,`
    `),i(),e(348,`
    `),t(349,"c-col",2),e(350,`
      `),t(351,"c-card",3),e(352,`
        `),t(353,"c-card-header"),e(354,`
          `),t(355,"strong"),e(356,"Angular Checks and Radios"),i(),e(357," "),t(358,"small"),e(359,"Inline"),i(),e(360,`
        `),i(),e(361,`
        `),t(362,"c-card-body"),e(363,`
          `),t(364,"p",10),e(365,`
            Group checkboxes or radios on the same horizontal row by adding `),t(366,"code"),e(367,"inline"),i(),e(368,`
            boolean property to any `),t(369,"code"),e(370,"<c-form-check>"),i(),e(371,`.
          `),i(),e(372,`
          `),t(373,"app-docs-example",44),e(374,`
            `),t(375,"c-form-check",45),e(376,`
              `),n(377,"input",46),e(378,`
              `),t(379,"label",47),e(380,"1"),i(),e(381,`
            `),i(),e(382,`
            `),t(383,"c-form-check",48),e(384,`
              `),n(385,"input",49),e(386,`
              `),t(387,"label",50),e(388,"2"),i(),e(389,`
            `),i(),e(390,`
            `),t(391,"c-form-check",48),e(392,`
              `),n(393,"input",51),e(394,`
              `),t(395,"label",52),e(396,"3 (disabled)"),i(),e(397,`
            `),i(),e(398,`

          `),i(),e(399,`
          `),t(400,"app-docs-example",44),e(401,`
            `),t(402,"c-form-check",48),e(403,`
              `),n(404,"input",53),e(405,`
              `),t(406,"label",54),e(407,"1"),i(),e(408,`
            `),i(),e(409,`
            `),t(410,"c-form-check",48),e(411,`
              `),n(412,"input",55),e(413,`
              `),t(414,"label",56),e(415,"2"),i(),e(416,`
            `),i(),e(417,`
            `),t(418,"c-form-check",48),e(419,`
              `),n(420,"input",57),e(421,`
              `),t(422,"label",58),e(423,"3 (disabled)"),i(),e(424,`
            `),i(),e(425,`
          `),i(),e(426,`
        `),i(),e(427,`
      `),i(),e(428,`
    `),i(),e(429,`
    `),t(430,"c-col",2),e(431,`
      `),t(432,"c-card",3),e(433,`
        `),t(434,"c-card-header"),e(435,`
          `),t(436,"strong"),e(437,"Angular Checks and Radios"),i(),e(438," "),t(439,"small"),e(440,"Without labels"),i(),e(441,`
        `),i(),e(442,`
        `),t(443,"c-card-body"),e(444,`
          `),t(445,"p",10),e(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),t(447,"code"),e(448,"aria-label"),i(),e(449,`).
          `),i(),e(450,`
          `),t(451,"app-docs-example",59),e(452,`
            `),t(453,"div"),e(454,`
              `),n(455,"input",60),e(456,`
            `),i(),e(457,`
            `),t(458,"div"),e(459,`
              `),n(460,"input",61),e(461,`
            `),i(),e(462,`
          `),i(),e(463,`
        `),i(),e(464,`
      `),i(),e(465,`
    `),i(),e(466,`
    `),t(467,"c-col",2),e(468,`
      `),t(469,"c-card",3),e(470,`
        `),t(471,"c-card-header"),e(472,`
          `),t(473,"strong"),e(474,"Toggle buttons"),i(),e(475,`
        `),i(),e(476,`
        `),t(477,"c-card-body"),e(478,`
          `),t(479,"p",10),e(480,`
            Create button-like checkboxes and radio buttons by using `),t(481,"code"),e(482,"button"),i(),e(483,` boolean
            property on the `),t(484,"code"),e(485,"<CFormCheck>"),i(),e(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),i(),e(487,`
          `),t(488,"app-docs-example",62),e(489,`
            `),t(490,"div",63),e(491,`
              `),t(492,"c-button-group",64),e(493,`
                `),n(494,"input",65),e(495,`
                `),t(496,"label",66),o("click",function(){return l.setCheckBoxValue("checkbox1")}),e(497,"Checkbox 1"),i(),e(498,`

                `),n(499,"input",67),e(500,`
                `),t(501,"label",66),o("click",function(){return l.setCheckBoxValue("checkbox2")}),e(502,"Checkbox 2"),i(),e(503,`

                `),n(504,"input",68),e(505,`
                `),t(506,"label",66),o("click",function(){return l.setCheckBoxValue("checkbox3")}),e(507,"Disabled 3"),i(),e(508,`
              `),i(),e(509,`
            `),i(),e(510,`
          `),i(),e(511,`
          `),t(512,"app-docs-example"),e(513,`
            `),t(514,"div",69),e(515,`
              `),t(516,"c-button-group",70),e(517,`
                `),n(518,"input",71),e(519,`
                `),t(520,"label",72),o("click",function(){return l.setRadioValue("Radio1")}),e(521,"Radio 1"),i(),e(522,`

                `),n(523,"input",73),e(524,`
                `),t(525,"label",74),o("click",function(){return l.setRadioValue("Radio2")}),e(526,"Radio 2"),i(),e(527,`
                `),n(528,"input",75),e(529,`
                `),t(530,"label",76),o("click",function(){return l.setRadioValue("Radio3")}),e(531,"Radio3"),i(),e(532,`
              `),i(),e(533,`
            `),i(),e(534,`
          `),i(),e(535,`
          `),t(536,"h5"),e(537,"Outlined styles"),i(),e(538,`
          `),t(539,"p",10),e(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),i(),e(541,`
          `),t(542,"app-docs-example",62),e(543,`
            `),t(544,"div",63),e(545,`
              `),t(546,"c-button-group",64),e(547,`
                `),n(548,"input",65),e(549,`
                `),t(550,"label",77),o("click",function(){return l.setCheckBoxValue("checkbox1")}),e(551,"Checkbox 1"),i(),e(552,`

                `),n(553,"input",67),e(554,`
                `),t(555,"label",77),o("click",function(){return l.setCheckBoxValue("checkbox2")}),e(556,"Checkbox 2"),i(),e(557,`

                `),n(558,"input",68),e(559,`
                `),t(560,"label",77),o("click",function(){return l.setCheckBoxValue("checkbox3")}),e(561,`Disabled
                  3`),i(),e(562,`
              `),i(),e(563,`
            `),i(),e(564,`
          `),i(),e(565,`
          `),t(566,"app-docs-example"),e(567,`
            `),t(568,"div",69),e(569,`
              `),t(570,"c-button-group",70),e(571,`
                `),n(572,"input",78),e(573,`
                `),t(574,"label",79),o("click",function(){return l.setRadioValue("Radio1")}),e(575,"Radio 1"),i(),e(576,`

                `),n(577,"input",80),e(578,`
                `),t(579,"label",81),o("click",function(){return l.setRadioValue("Radio2")}),e(580,"Radio 2"),i(),e(581,`

                `),n(582,"input",82),e(583,`
                `),t(584,"label",83),o("click",function(){return l.setRadioValue("Radio3")}),e(585,"Radio3"),i(),e(586,`
              `),i(),e(587,`
            `),i(),e(588,`
          `),i(),e(589,`
        `),i(),e(590,`
      `),i(),e(591,`
    `),i(),e(592,`
  `),i(),e(593,`
`),i()),c&2&&(r(4),m("formGroup",l.formGroup),r(28),m("checked",!0),r(169),m("switch",!0),r(8),m("switch",!0),r(8),m("switch",!0),r(8),m("switch",!0),r(29),m("switch",!0),r(121),m("inline",!0),r(153),s("disabled",!0),r(54),s("disabled",!0))},dependencies:[A,v,E,b,k,C,S,f,g,F,y,N,V,D,G,B,O,L,T,I,w,_,z],encapsulation:2});var M=x;export{M as ChecksRadiosComponent};
