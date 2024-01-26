import{b as M}from"./chunk-CJ65WBAK.js";import"./chunk-OEGKANT2.js";import{$ as o,Ca as r,Ed as O,Fd as z,I as p,Mc as B,Na as e,Pc as G,Qc as I,Ta as b,Tc as N,Xb as S,Yb as f,Zb as E,_b as C,aa as k,fc as y,hc as g,ic as F,jc as v,ka as u,kc as R,la as m,md as T,oc as _,qc as w,rd as L,sd as V,td as A,va as t,wa as i,xa as n,yc as D}from"./chunk-TX2DSAJI.js";import{a as h}from"./chunk-KUU7MVPS.js";var K=(()=>{let x=class x{constructor(d){this.formBuilder=d,this.inputDisabled=null,this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control("two")}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:"two",disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:"Radio2"})})})}setCheckBoxValue(d){let c=this.formGroup.controls.btnCheckGroup,l=c.get(d)?.value,a=h({},c.value);a[d]=!l,c.patchValue(a)}setRadioValue(d){this.formGroup.controls.btnRadioGroup.setValue({radio1:d})}};x.\u0275fac=function(c){return new(c||x)(k(_))},x.\u0275cmp=p({type:x,selectors:[["app-checks-radios"]],standalone:!0,features:[b],decls:592,vars:10,consts:[["cForm","",3,"formGroup"],["xs","12"],[1,"mb-4"],["href","forms/checks-radios"],["formGroupName","flexCheckGroup"],["cFormCheckInput","","formControlName","checkOne","id","checkOne","type","checkbox"],["cFormCheckLabel","","for","checkOne"],["cFormCheckInput","","formControlName","checkTwo","id","checkTwo","type","checkbox",3,"checked"],["cFormCheckLabel","","for","checkTwo"],[1,"text-body-secondary","small"],["href","forms/checks-radios#disabled"],["formGroupName","flexCheckGroupDisabled"],["cFormCheckInput","","formControlName","checkThree","id","checkThree","type","checkbox"],["cFormCheckLabel","","for","checkThree"],["cFormCheckInput","","formControlName","checkFour","id","checkFour","type","checkbox"],["cFormCheckLabel","","for","checkFour"],["href","forms/checks-radios#radios"],["formGroupName","flexRadioGroup"],["cFormCheckInput","","formControlName","flexRadioDefault","type","radio","value","one"],["cFormCheckLabel",""],["cFormCheckInput","","formControlName","flexRadioDefault","type","radio","value","two"],["href","forms/checks-radios#disabled-1"],["formGroupName","flexRadioGroupDisabled"],["href","forms/checks-radios#switches"],[3,"switch"],["cFormCheckInput","","type","checkbox"],["cFormCheckInput","","checked","","type","checkbox"],["cFormCheckInput","","disabled","","type","checkbox"],["cFormCheckInput","","checked","","disabled","","type","checkbox"],["href","forms/checks-radios#sizes"],["sizing","lg","switch",""],["sizing","xl","switch",""],["href","forms/checks-radios#default-stacked"],["cFormCheckInput","","id","stackOne","type","checkbox"],["cFormCheckLabel","","for","stackOne"],["cFormCheckInput","","disabled","","id","stackTwo","type","checkbox"],["cFormCheckLabel","","for","stackTwo"],["cFormCheckInput","","checked","","id","radioStack1","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack1"],["cFormCheckInput","","id","radioStack2","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack2"],["cFormCheckInput","","disabled","","id","radioStack3","name","radioStack","type","radio"],["cFormCheckLabel","","for","radioStack3"],["href","forms/checks-radios#inline"],[3,"inline"],["cFormCheckInput","","id","inline1","type","checkbox"],["cFormCheckLabel","","for","inline1"],["inline",""],["cFormCheckInput","","id","inline2","type","checkbox"],["cFormCheckLabel","","for","inline2"],["cFormCheckInput","","disabled","","id","inline3","type","checkbox"],["cFormCheckLabel","","for","inline3"],["cFormCheckInput","","checked","","id","radioinline1","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline1"],["cFormCheckInput","","id","radioinline2","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline2"],["cFormCheckInput","","disabled","","id","radioinline3","name","radioinline","type","radio"],["cFormCheckLabel","","for","radioinline3"],["href","forms/checks-radios#without-labels"],["cFormCheckInput","","id","nolabelCheck","name","nolabelCheck","type","checkbox"],["cFormCheckInput","","id","nolabelRadio","name","nolabelRadio","type","radio"],["href","forms/checks-radios#toggle-buttons"],["formGroupName","btnCheckGroup"],["aria-label","Basic checkbox toggle button group","role","group"],["formControlName","checkbox1","type","checkbox",1,"btn-check"],["cButton","","cFormCheckLabel","",3,"click"],["formControlName","checkbox2","type","checkbox",1,"btn-check"],["formControlName","checkbox3","type","checkbox",1,"btn-check"],["formGroupName","btnRadioGroup"],["aria-label","Basic radio toggle button group","role","group"],["formControlName","radio1","id","radio1","type","radio","value","Radio1",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio1","variant","ghost",3,"click"],["formControlName","radio1","id","radio2","type","radio","value","Radio2",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio2","variant","ghost",3,"click"],["formControlName","radio1","id","radio3","type","radio","value","Radio3",1,"btn-check"],["cButton","","cFormCheckLabel","","for","radio3","variant","ghost",3,"click"],["cButton","","cFormCheckLabel","","variant","outline",3,"click"],["formControlName","radio1","id","radio1o","type","radio","value","Radio1",1,"btn-check"],["cButton","","cFormCheckLabel","","color","danger","for","radio1o","variant","outline",3,"click"],["formControlName","radio1","id","radio2o","type","radio","value","Radio2",1,"btn-check"],["cButton","","cFormCheckLabel","","color","success","for","radio2o","variant","outline",3,"click"],["formControlName","radio1","id","radio3o","type","radio","value","Radio3",1,"btn-check"],["cButton","","color","secondary","for","radio3o","variant","outline",3,"click"]],template:function(c,l){c&1&&(t(0,"c-row"),e(1,`
  `),t(2,"form",0),e(3,`
    `),t(4,"c-col",1),e(5,`
      `),t(6,"c-card",2),e(7,`
        `),t(8,"c-card-header"),e(9,`
          `),t(10,"strong"),e(11,"Angular Checkbox"),i(),e(12,`
        `),i(),e(13,`
        `),t(14,"c-card-body"),e(15,`
          `),t(16,"app-docs-example",3),e(17,`
            `),t(18,"div",4),e(19,`
              `),t(20,"c-form-check"),e(21,`
                `),n(22,"input",5),e(23,`
                `),t(24,"label",6),e(25,"Default checkbox"),i(),e(26,`
              `),i(),e(27,`
              `),t(28,"c-form-check"),e(29,`
                `),n(30,"input",7),e(31,`
                `),t(32,"label",8),e(33,"Checked checkbox"),i(),e(34,`
              `),i(),e(35,`
            `),i(),e(36,`
          `),i(),e(37,`
        `),i(),e(38,`
      `),i(),e(39,`
    `),i(),e(40,`
    `),t(41,"c-col",1),e(42,`
      `),t(43,"c-card",2),e(44,`
        `),t(45,"c-card-header"),e(46,`
          `),t(47,"strong"),e(48,"Angular Checkbox"),i(),e(49," "),t(50,"small"),e(51,"Disabled"),i(),e(52,`
        `),i(),e(53,`
        `),t(54,"c-card-body"),e(55,`
          `),t(56,"p",9),e(57,`
            Add the `),t(58,"code"),e(59,"disabled"),i(),e(60," attribute and the associated "),t(61,"code"),e(62,"<label>"),i(),e(63,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),i(),e(64,`
          `),t(65,"app-docs-example",10),e(66,`
            `),t(67,"div",11),e(68,`
              `),t(69,"c-form-check"),e(70,`
                `),n(71,"input",12),e(72,`
                `),t(73,"label",13),e(74,"Disabled checkbox"),i(),e(75,`
              `),i(),e(76,`
              `),t(77,"c-form-check"),e(78,`
                `),n(79,"input",14),e(80,`
                `),t(81,"label",15),e(82,"Disabled checked checkbox"),i(),e(83,`
              `),i(),e(84,`
            `),i(),e(85,`
          `),i(),e(86,`
        `),i(),e(87,`
      `),i(),e(88,`
    `),i(),e(89,`
    `),t(90,"c-col",1),e(91,`
      `),t(92,"c-card",2),e(93,`
        `),t(94,"c-card-header"),e(95,`
          `),t(96,"strong"),e(97,"Angular Radio"),i(),e(98,`
        `),i(),e(99,`
        `),t(100,"c-card-body"),e(101,`
          `),t(102,"app-docs-example",16),e(103,`
            `),t(104,"div",17),e(105,`
              `),t(106,"c-form-check"),e(107,`
                `),n(108,"input",18),e(109,`
                `),t(110,"label",19),e(111,"Default radio"),i(),e(112,`
              `),i(),e(113,`
              `),t(114,"c-form-check"),e(115,`
                `),n(116,"input",20),e(117,`
                `),t(118,"label",19),e(119,"Checked radio"),i(),e(120,`
              `),i(),e(121,`
            `),i(),e(122,`
          `),i(),e(123,`
        `),i(),e(124,`
      `),i(),e(125,`
    `),i(),e(126,`
    `),t(127,"c-col",1),e(128,`
      `),t(129,"c-card",2),e(130,`
        `),t(131,"c-card-header"),e(132,`
          `),t(133,"strong"),e(134,"Angular Radio"),i(),e(135," "),t(136,"small"),e(137,"Disabled"),i(),e(138,`
        `),i(),e(139,`
        `),t(140,"c-card-body"),e(141,`
          `),t(142,"p",9),e(143,`
            Add the `),t(144,"code"),e(145,"disabled"),i(),e(146," attribute and the associated "),t(147,"code"),e(148,"<label>"),i(),e(149,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),i(),e(150,`
          `),t(151,"app-docs-example",21),e(152,`
            `),t(153,"div",22),e(154,`
              `),t(155,"c-form-check"),e(156,`
                `),n(157,"input",18),e(158,`
                `),t(159,"label",19),e(160,"Default radio"),i(),e(161,`
              `),i(),e(162,`
              `),t(163,"c-form-check"),e(164,`
                `),n(165,"input",20),e(166,`
                `),t(167,"label",19),e(168,"Checked radio"),i(),e(169,`
              `),i(),e(170,`
            `),i(),e(171,`
          `),i(),e(172,`
        `),i(),e(173,`
      `),i(),e(174,`
    `),i(),e(175,`
    `),t(176,"c-col",1),e(177,`
      `),t(178,"c-card",2),e(179,`
        `),t(180,"c-card-header"),e(181,`
          `),t(182,"strong"),e(183,"Angular Switches"),i(),e(184,`
        `),i(),e(185,`
        `),t(186,"c-card-body"),e(187,`
          `),t(188,"p",9),e(189,`
            A switch has the markup of a custom checkbox but uses the `),t(190,"code"),e(191,"switch"),i(),e(192,` boolean
            properly to render a toggle switch. Switches also support the `),t(193,"code"),e(194,"disabled"),i(),e(195,`
            attribute.
          `),i(),e(196,`
          `),t(197,"app-docs-example",23),e(198,`
            `),t(199,"c-form-check",24),e(200,`
              `),n(201,"input",25),e(202,`
              `),t(203,"label",19),e(204,"Default switch checkbox input"),i(),e(205,`
            `),i(),e(206,`
            `),t(207,"c-form-check",24),e(208,`
              `),n(209,"input",26),e(210,`
              `),t(211,"label",19),e(212,"Checked switch checkbox input"),i(),e(213,`
            `),i(),e(214,`
            `),t(215,"c-form-check",24),e(216,`
              `),n(217,"input",27),e(218,`
              `),t(219,"label",19),e(220,"Default switch checkbox input"),i(),e(221,`
            `),i(),e(222,`
            `),t(223,"c-form-check",24),e(224,`
              `),n(225,"input",28),e(226,`
              `),t(227,"label",19),e(228,"Checked switch checkbox input"),i(),e(229,`
            `),i(),e(230,`
          `),i(),e(231,`
        `),i(),e(232,`
      `),i(),e(233,`
    `),i(),e(234,`
    `),t(235,"c-col",1),e(236,`
      `),t(237,"c-card",2),e(238,`
        `),t(239,"c-card-header"),e(240,`
          `),t(241,"strong"),e(242,"Angular Switches"),i(),e(243," "),t(244,"small"),e(245,"Sizes"),i(),e(246,`
        `),i(),e(247,`
        `),t(248,"c-card-body"),e(249,`
          `),t(250,"app-docs-example",29),e(251,`
            `),t(252,"c-form-check",24),e(253,`
              `),n(254,"input",25),e(255,`
              `),t(256,"label",19),e(257,"Default switch checkbox input"),i(),e(258,`
            `),i(),e(259,`
            `),t(260,"c-form-check",30),e(261,`
              `),n(262,"input",25),e(263,`
              `),t(264,"label",19),e(265,"Large switch checkbox input"),i(),e(266,`
            `),i(),e(267,`
            `),t(268,"c-form-check",31),e(269,`
              `),n(270,"input",26),e(271,`
              `),t(272,"label",19),e(273,"Extra large switch checkbox input"),i(),e(274,`
            `),i(),e(275,`
          `),i(),e(276,`
        `),i(),e(277,`
      `),i(),e(278,`
    `),i(),e(279,`
    `),t(280,"c-col",1),e(281,`
      `),t(282,"c-card",2),e(283,`
        `),t(284,"c-card-header"),e(285,`
          `),t(286,"strong"),e(287,"Angular Checks and Radios"),i(),e(288," "),t(289,"small"),e(290,"Default layout (stacked)"),i(),e(291,`
        `),i(),e(292,`
        `),t(293,"c-card-body"),e(294,`
          `),t(295,"p",9),e(296,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),i(),e(297,`
          `),t(298,"app-docs-example",32),e(299,`
            `),t(300,"c-form-check"),e(301,`
              `),n(302,"input",33),e(303,`
              `),t(304,"label",34),e(305,"Default checkbox"),i(),e(306,`
            `),i(),e(307,`
            `),t(308,"c-form-check"),e(309,`
              `),n(310,"input",35),e(311,`
              `),t(312,"label",36),e(313,"Disabled checkbox"),i(),e(314,`
            `),i(),e(315,`
          `),i(),e(316,`
          `),t(317,"app-docs-example",32),e(318,`
            `),t(319,"c-form-check"),e(320,`
              `),n(321,"input",37),e(322,`
              `),t(323,"label",38),e(324,"Default radio"),i(),e(325,`
            `),i(),e(326,`
            `),t(327,"c-form-check"),e(328,`
              `),n(329,"input",39),e(330,`
              `),t(331,"label",40),e(332,"Second radio"),i(),e(333,`
            `),i(),e(334,`
            `),t(335,"c-form-check"),e(336,`
              `),n(337,"input",41),e(338,`
              `),t(339,"label",42),e(340,"Disabled radio"),i(),e(341,`
            `),i(),e(342,`
          `),i(),e(343,`
        `),i(),e(344,`
      `),i(),e(345,`
    `),i(),e(346,`
    `),t(347,"c-col",1),e(348,`
      `),t(349,"c-card",2),e(350,`
        `),t(351,"c-card-header"),e(352,`
          `),t(353,"strong"),e(354,"Angular Checks and Radios"),i(),e(355," "),t(356,"small"),e(357,"Inline"),i(),e(358,`
        `),i(),e(359,`
        `),t(360,"c-card-body"),e(361,`
          `),t(362,"p",9),e(363,`
            Group checkboxes or radios on the same horizontal row by adding `),t(364,"code"),e(365,"inline"),i(),e(366,`
            boolean property to any `),t(367,"code"),e(368,"<c-form-check>"),i(),e(369,`.
          `),i(),e(370,`
          `),t(371,"app-docs-example",43),e(372,`
            `),t(373,"c-form-check",44),e(374,`
              `),n(375,"input",45),e(376,`
              `),t(377,"label",46),e(378,"1"),i(),e(379,`
            `),i(),e(380,`
            `),t(381,"c-form-check",47),e(382,`
              `),n(383,"input",48),e(384,`
              `),t(385,"label",49),e(386,"2"),i(),e(387,`
            `),i(),e(388,`
            `),t(389,"c-form-check",47),e(390,`
              `),n(391,"input",50),e(392,`
              `),t(393,"label",51),e(394,"3 (disabled)"),i(),e(395,`
            `),i(),e(396,`

          `),i(),e(397,`
          `),t(398,"app-docs-example",43),e(399,`
            `),t(400,"c-form-check",47),e(401,`
              `),n(402,"input",52),e(403,`
              `),t(404,"label",53),e(405,"1"),i(),e(406,`
            `),i(),e(407,`
            `),t(408,"c-form-check",47),e(409,`
              `),n(410,"input",54),e(411,`
              `),t(412,"label",55),e(413,"2"),i(),e(414,`
            `),i(),e(415,`
            `),t(416,"c-form-check",47),e(417,`
              `),n(418,"input",56),e(419,`
              `),t(420,"label",57),e(421,"3 (disabled)"),i(),e(422,`
            `),i(),e(423,`
          `),i(),e(424,`
        `),i(),e(425,`
      `),i(),e(426,`
    `),i(),e(427,`
    `),t(428,"c-col",1),e(429,`
      `),t(430,"c-card",2),e(431,`
        `),t(432,"c-card-header"),e(433,`
          `),t(434,"strong"),e(435,"Angular Checks and Radios"),i(),e(436," "),t(437,"small"),e(438,"Without labels"),i(),e(439,`
        `),i(),e(440,`
        `),t(441,"c-card-body"),e(442,`
          `),t(443,"p",9),e(444,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),t(445,"code"),e(446,"aria-label"),i(),e(447,`).
          `),i(),e(448,`
          `),t(449,"app-docs-example",58),e(450,`
            `),t(451,"div"),e(452,`
              `),n(453,"input",59),e(454,`
            `),i(),e(455,`
            `),t(456,"div"),e(457,`
              `),n(458,"input",60),e(459,`
            `),i(),e(460,`
          `),i(),e(461,`
        `),i(),e(462,`
      `),i(),e(463,`
    `),i(),e(464,`
    `),t(465,"c-col",1),e(466,`
      `),t(467,"c-card",2),e(468,`
        `),t(469,"c-card-header"),e(470,`
          `),t(471,"strong"),e(472,"Toggle buttons"),i(),e(473,`
        `),i(),e(474,`
        `),t(475,"c-card-body"),e(476,`
          `),t(477,"p",9),e(478,`
            Create button-like checkboxes and radio buttons by using `),t(479,"code"),e(480,"button"),i(),e(481,` boolean
            property on the `),t(482,"code"),e(483,"<CFormCheck>"),i(),e(484,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),i(),e(485,`
          `),t(486,"app-docs-example",61),e(487,`
            `),t(488,"div",62),e(489,`
              `),t(490,"c-button-group",63),e(491,`
                `),n(492,"input",64),e(493,`
                `),t(494,"label",65),r("click",function(){return l.setCheckBoxValue("checkbox1")}),e(495,"Checkbox 1"),i(),e(496,`

                `),n(497,"input",66),e(498,`
                `),t(499,"label",65),r("click",function(){return l.setCheckBoxValue("checkbox2")}),e(500,"Checkbox 2"),i(),e(501,`

                `),n(502,"input",67),e(503,`
                `),t(504,"label",65),r("click",function(){return l.setCheckBoxValue("checkbox3")}),e(505,"Disabled 3"),i(),e(506,`
              `),i(),e(507,`
            `),i(),e(508,`
          `),i(),e(509,`
          `),t(510,"app-docs-example"),e(511,`
            `),t(512,"div",68),e(513,`
              `),t(514,"c-button-group",69),e(515,`
                `),n(516,"input",70),e(517,`
                `),t(518,"label",71),r("click",function(){return l.setRadioValue("Radio1")}),e(519,"Radio 1"),i(),e(520,`

                `),n(521,"input",72),e(522,`
                `),t(523,"label",73),r("click",function(){return l.setRadioValue("Radio2")}),e(524,"Radio 2"),i(),e(525,`
                `),n(526,"input",74),e(527,`
                `),t(528,"label",75),r("click",function(){return l.setRadioValue("Radio3")}),e(529,"Radio3"),i(),e(530,`
              `),i(),e(531,`
            `),i(),e(532,`
          `),i(),e(533,`
          `),t(534,"h5"),e(535,"Outlined styles"),i(),e(536,`
          `),t(537,"p",9),e(538,`
            Different variants of button, such at the various outlined styles, are supported.
          `),i(),e(539,`
          `),t(540,"app-docs-example",61),e(541,`
            `),t(542,"div",62),e(543,`
              `),t(544,"c-button-group",63),e(545,`
                `),n(546,"input",64),e(547,`
                `),t(548,"label",76),r("click",function(){return l.setCheckBoxValue("checkbox1")}),e(549,"Checkbox 1"),i(),e(550,`

                `),n(551,"input",66),e(552,`
                `),t(553,"label",76),r("click",function(){return l.setCheckBoxValue("checkbox2")}),e(554,"Checkbox 2"),i(),e(555,`

                `),n(556,"input",67),e(557,`
                `),t(558,"label",76),r("click",function(){return l.setCheckBoxValue("checkbox3")}),e(559,`Disabled
                  3`),i(),e(560,`
              `),i(),e(561,`
            `),i(),e(562,`
          `),i(),e(563,`
          `),t(564,"app-docs-example"),e(565,`
            `),t(566,"div",68),e(567,`
              `),t(568,"c-button-group",69),e(569,`
                `),n(570,"input",77),e(571,`
                `),t(572,"label",78),r("click",function(){return l.setRadioValue("Radio1")}),e(573,"Radio 1"),i(),e(574,`

                `),n(575,"input",79),e(576,`
                `),t(577,"label",80),r("click",function(){return l.setRadioValue("Radio2")}),e(578,"Radio 2"),i(),e(579,`

                `),n(580,"input",81),e(581,`
                `),t(582,"label",82),r("click",function(){return l.setRadioValue("Radio3")}),e(583,"Radio3"),i(),e(584,`
              `),i(),e(585,`
            `),i(),e(586,`
          `),i(),e(587,`
        `),i(),e(588,`
      `),i(),e(589,`
    `),i(),e(590,`
  `),i(),e(591,`
`),i()),c&2&&(o(2),m("formGroup",l.formGroup),o(28),m("checked",!0),o(169),m("switch",!0),o(8),m("switch",!0),o(8),m("switch",!0),o(8),m("switch",!0),o(29),m("switch",!0),o(121),m("inline",!0),o(153),u("disabled",!0),o(54),u("disabled",!0))},dependencies:[z,w,y,f,S,g,E,C,F,R,v,T,O,G,N,I,M,V,A,L,B,D]});let s=x;return s})();export{K as ChecksRadiosComponent};
