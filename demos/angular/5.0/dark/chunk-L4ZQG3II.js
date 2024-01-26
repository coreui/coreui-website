import{b as K}from"./chunk-CJ65WBAK.js";import"./chunk-OEGKANT2.js";import{$ as i,Ab as g,Ca as x,Ed as W,Fd as q,I as S,Mc as G,Na as t,Nc as A,Pc as T,Qc as V,Ta as E,Tc as M,Ua as r,Xb as h,Yb as k,Zb as f,_b as v,aa as b,ac as y,dc as B,ed as N,fc as C,gd as I,hc as _,hd as z,ic as L,id as U,jd as j,kc as w,la as o,oc as F,od as H,qc as R,rd as J,ud as O,va as e,wa as n,wd as P,xa as a,yc as D}from"./chunk-TX2DSAJI.js";import"./chunk-KUU7MVPS.js";var l=()=>[],it=(()=>{let c=class c{constructor(u){this.formBuilder=u,this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1}),this.formRadio1=new y({radio1:new B("Radio1")})}setCheckBoxValue(u){let p=this.formCheck1.get(u)?.value,m=this.formCheck1.value;m[u]=!p,this.formCheck1.setValue(m)}setRadioValue(u){this.formRadio1.setValue({radio1:u})}};c.\u0275fac=function(p){return new(p||c)(b(F))},c.\u0275cmp=S({type:c,selectors:[["app-button-groups"]],standalone:!0,features:[E],decls:659,vars:53,consts:[["xs","12"],[1,"mb-4"],["href","components/button-group"],["aria-label","Basic example","role","group"],["cButton","","color","primary"],["cButton","","color","primary",3,"active","routerLink"],["cButton","","color","primary",3,"routerLink"],["href","components/button-group#mixed-styles"],["aria-label","Basic mixed styles example","role","group"],["cButton","","color","danger"],["cButton","","color","warning"],["cButton","","color","success"],["href","components/button-group#outlined-styles"],["aria-label","Basic outlined example","role","group"],["cButton","","color","primary","variant","outline"],["href","components/button-group#checkbox-and-radio-button-groups"],[3,"formGroup"],["aria-label","Basic checkbox toggle button group","role","group"],["formControlName","checkbox1","type","checkbox",1,"btn-check"],["cButton","","cFormCheckLabel","","variant","outline",3,"click"],["formControlName","checkbox2","type","checkbox",1,"btn-check"],["formControlName","checkbox3","type","checkbox",1,"btn-check"],[1,"mb-3"],["aria-label","Basic radio toggle button group","role","group"],["formControlName","radio1","type","radio","value","Radio1",1,"btn-check"],["formControlName","radio1","type","radio","value","Radio2",1,"btn-check"],["formControlName","radio1","type","radio","value","Radio3",1,"btn-check"],["href","components/button-group#button-toolbar"],["aria-label","Toolbar with button groups","role","group"],["aria-label","First group","role","group",1,"me-2"],["aria-label","Second group","role","group",1,"me-2"],["cButton","","color","secondary"],["aria-label","Third group","role","group",1,"me-2"],["cButton","","color","info"],["aria-label","Toolbar with button groups","role","group",1,"mb-3"],["cButton","","color","secondary","variant","outline"],["cInputGroupText",""],["aria-describedby","btnGroupAddon","aria-label","Input group example","cFormControl","","placeholder","Input group example"],["aria-label","Toolbar with button groups","role","group",1,"justify-content-between"],["href","components/button-group#sizing"],["aria-label","Large button group","role","group","size","lg",1,"m-1"],["cButton","","color","dark","variant","outline"],["aria-label","Default button group","role","group",1,"m-1"],["aria-label","Small button group","role","group","size","sm",1,"m-1"],[1,"text-body-secondary","small"],["href","components/button-group#nesting"],["aria-label","Button group with nested dropdown","role","group"],["variant","btn-group"],["cButton","","cDropdownToggle",""],["cDropdownMenu",""],["cDropdownItem","",3,"routerLink"],["cDropdownDivider",""],["href","components/button-group/#vertical-variation"],["aria-label","Vertical button group","role","group",3,"vertical"],["cButton","","color","dark"],["placement","right-start","variant","btn-group"],["cDropdownMenu","","dark",""],["cButton","","cFormCheckLabel","","color","danger","variant","outline",3,"click"]],template:function(p,m){p&1&&(e(0,"c-row"),t(1,`
  `),e(2,"c-col",0),t(3,`
    `),e(4,"c-card",1),t(5,`
      `),e(6,"c-card-header"),t(7,`
        `),e(8,"strong"),t(9,"Angular Button Group"),n(),t(10," "),e(11,"span"),t(12,"Basic example"),n(),t(13,`
      `),n(),t(14,`
      `),e(15,"c-card-body"),t(16,`
        `),e(17,"p"),t(18,`
          Wrap a series of `),e(19,"code"),t(20,"<CButton>"),n(),t(21,` components in
          `),e(22,"code"),t(23,"<c-button-group>"),n(),t(24,`.
        `),n(),t(25,`
        `),e(26,"app-docs-example",2),t(27,`
          `),e(28,"c-button-group",3),t(29,`
            `),e(30,"button",4),t(31,"Left"),n(),t(32,`
            `),e(33,"button",4),t(34,"Middle"),n(),t(35,`
            `),e(36,"button",4),t(37,"Right"),n(),t(38,`
          `),n(),t(39,`
        `),n(),t(40,`
        `),e(41,"p"),t(42,`
          These classes can also be added to groups of links, as an alternative to the
          `),e(43,"code"),t(44,"<CNav>"),n(),t(45,` components.
        `),n(),t(46,`
        `),e(47,"app-docs-example",2),t(48,`
          `),e(49,"c-button-group"),t(50,`
            `),e(51,"a",5),t(52,`
              Active link
            `),n(),t(53,`
            `),e(54,"a",6),t(55,`
              Link
            `),n(),t(56,`
            `),e(57,"a",6),t(58,`
              Link
            `),n(),t(59,`
          `),n(),t(60,`
        `),n(),t(61,`
      `),n(),t(62,`
    `),n(),t(63,`
  `),n(),t(64,`
  `),e(65,"c-col",0),t(66,`
    `),e(67,"c-card",1),t(68,`
      `),e(69,"c-card-header"),t(70,`
        `),e(71,"strong"),t(72,"Angular Button Group"),n(),t(73," "),e(74,"span"),t(75,"Mixed styles"),n(),t(76,`
      `),n(),t(77,`
      `),e(78,"c-card-body"),t(79,`
        `),e(80,"app-docs-example",7),t(81,`
          `),e(82,"c-button-group",8),t(83,`
            `),e(84,"button",9),t(85,"Left"),n(),t(86,`
            `),e(87,"button",10),t(88,"Middle"),n(),t(89,`
            `),e(90,"button",11),t(91,"Right"),n(),t(92,`
          `),n(),t(93,`
        `),n(),t(94,`
      `),n(),t(95,`
    `),n(),t(96,`
  `),n(),t(97,`
  `),e(98,"c-col",0),t(99,`
    `),e(100,"c-card",1),t(101,`
      `),e(102,"c-card-header"),t(103,`
        `),e(104,"strong"),t(105,"Angular Button Group"),n(),t(106," "),e(107,"span"),t(108,"Outlined styles"),n(),t(109,`
      `),n(),t(110,`
      `),e(111,"c-card-body"),t(112,`
        `),e(113,"app-docs-example",12),t(114,`
          `),e(115,"c-button-group",13),t(116,`
            `),e(117,"button",14),t(118,`
              Left
            `),n(),t(119,`
            `),e(120,"button",14),t(121,`
              Middle
            `),n(),t(122,`
            `),e(123,"button",14),t(124,`
              Right
            `),n(),t(125,`
          `),n(),t(126,`
        `),n(),t(127,`
      `),n(),t(128,`
    `),n(),t(129,`
  `),n(),t(130,`
  `),e(131,"c-col",0),t(132,`
    `),e(133,"c-card",1),t(134,`
      `),e(135,"c-card-header"),t(136,`
        `),e(137,"strong"),t(138,"Angular Button Group"),n(),t(139," "),e(140,"span"),t(141,"Checkbox and radio button groups"),n(),t(142,`
      `),n(),t(143,`
      `),e(144,"c-card-body"),t(145,`
        `),e(146,"p"),t(147,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),n(),t(148,`
        `),e(149,"app-docs-example",15),t(150,`
          `),e(151,"form",16),t(152,`
            `),e(153,"c-button-group",17),t(154,`
              `),a(155,"input",18),t(156,`
              `),e(157,"label",19),x("click",function(){return m.setCheckBoxValue("checkbox1")}),t(158,"Checkbox 1"),n(),t(159,`

              `),a(160,"input",20),t(161,`
              `),e(162,"label",19),x("click",function(){return m.setCheckBoxValue("checkbox2")}),t(163,"Checkbox 2"),n(),t(164,`

              `),a(165,"input",21),t(166,`
              `),e(167,"label",19),x("click",function(){return m.setCheckBoxValue("checkbox3")}),t(168,`Checkbox
                3`),n(),t(169,`
            `),n(),t(170,`
          `),n(),t(171,`
          `),a(172,"br",22),t(173,`
        `),n(),t(174,`
        `),e(175,"app-docs-example",15),t(176,`
          `),e(177,"form",16),t(178,`
            `),e(179,"c-button-group",23),t(180,`
              `),a(181,"input",24),t(182,`
              `),e(183,"label",19),x("click",function(){return m.setRadioValue("Radio1")}),t(184,"Radio 1"),n(),t(185,`

              `),a(186,"input",25),t(187,`
              `),e(188,"label",19),x("click",function(){return m.setRadioValue("Radio2")}),t(189,"Radio 2"),n(),t(190,`

              `),a(191,"input",26),t(192,`
              `),e(193,"label",19),x("click",function(){return m.setRadioValue("Radio3")}),t(194,"Radio 3"),n(),t(195,`
            `),n(),t(196,`
          `),n(),t(197,`
        `),n(),t(198,`
      `),n(),t(199,`
    `),n(),t(200,`
  `),n(),t(201,`
  `),e(202,"c-col",0),t(203,`
    `),e(204,"c-card",1),t(205,`
      `),e(206,"c-card-header"),t(207,`
        `),e(208,"strong"),t(209,"Angular Button Group"),n(),t(210," "),e(211,"span"),t(212,"Button toolbar"),n(),t(213,`
      `),n(),t(214,`
      `),e(215,"c-card-body"),t(216,`
        `),e(217,"p"),t(218,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),n(),t(219,`
        `),e(220,"app-docs-example",27),t(221,`
          `),e(222,"c-button-toolbar",28),t(223,`
            `),e(224,"c-button-group",29),t(225,`
              `),e(226,"button",4),t(227,"1"),n(),t(228,`
              `),e(229,"button",4),t(230,"2"),n(),t(231,`
              `),e(232,"button",4),t(233,"3"),n(),t(234,`
              `),e(235,"button",4),t(236,"4"),n(),t(237,`
            `),n(),t(238,`
            `),e(239,"c-button-group",30),t(240,`
              `),e(241,"button",31),t(242,"5"),n(),t(243,`
              `),e(244,"button",31),t(245,"6"),n(),t(246,`
              `),e(247,"button",31),t(248,"7"),n(),t(249,`
            `),n(),t(250,`
            `),e(251,"c-button-group",32),t(252,`
              `),e(253,"button",33),t(254,"8"),n(),t(255,`
            `),n(),t(256,`
          `),n(),t(257,`
        `),n(),t(258,`
        `),e(259,"p"),t(260,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),n(),t(261,`
        `),e(262,"app-docs-example",27),t(263,`
          `),e(264,"c-button-toolbar",34),t(265,`
            `),e(266,"c-button-group",29),t(267,`
              `),e(268,"button",35),t(269,`
                1
              `),n(),t(270,`
              `),e(271,"button",35),t(272,`
                2
              `),n(),t(273,`
              `),e(274,"button",35),t(275,`
                3
              `),n(),t(276,`
              `),e(277,"button",35),t(278,`
                4
              `),n(),t(279,`
            `),n(),t(280,`
            `),e(281,"c-input-group"),t(282,`
              `),e(283,"span",36),t(284,"@"),n(),t(285,`
              `),a(286,"input",37),t(287,`
            `),n(),t(288,`
          `),n(),t(289,`
          `),e(290,"c-button-toolbar",38),t(291,`
            `),e(292,"c-button-group",29),t(293,`
              `),e(294,"button",35),t(295,`
                1
              `),n(),t(296,`
              `),e(297,"button",35),t(298,`
                2
              `),n(),t(299,`
              `),e(300,"button",35),t(301,`
                3
              `),n(),t(302,`
              `),e(303,"button",35),t(304,`
                4
              `),n(),t(305,`
            `),n(),t(306,`
            `),e(307,"c-input-group"),t(308,`
              `),e(309,"span",36),t(310,"@"),n(),t(311,`
              `),a(312,"input",37),t(313,`
            `),n(),t(314,`
          `),n(),t(315,`
        `),n(),t(316,`
      `),n(),t(317,`
    `),n(),t(318,`
  `),n(),t(319,`
  `),e(320,"c-col",0),t(321,`
    `),e(322,"c-card",1),t(323,`
      `),e(324,"c-card-header"),t(325,`
        `),e(326,"strong"),t(327,"Angular Button Group"),n(),t(328," "),e(329,"span"),t(330,"Sizing"),n(),t(331,`
      `),n(),t(332,`
      `),e(333,"c-card-body"),t(334,`
        `),e(335,"p"),t(336,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),e(337,"code"),t(338,"size"),n(),t(339," property to all "),e(340,"code"),t(341,"<c-button-group>"),n(),t(342,`'s, including
          each one when nesting multiple groups.
        `),n(),t(343,`
        `),e(344,"app-docs-example",39),t(345,`
          `),e(346,"c-button-group",40),t(347,`
            `),e(348,"button",41),t(349,`
              Left
            `),n(),t(350,`
            `),e(351,"button",41),t(352,`
              Middle
            `),n(),t(353,`
            `),e(354,"button",41),t(355,`
              Right
            `),n(),t(356,`
          `),n(),t(357,`
          `),a(358,"br"),t(359,`
          `),e(360,"c-button-group",42),t(361,`
            `),e(362,"button",41),t(363,`
              Left
            `),n(),t(364,`
            `),e(365,"button",41),t(366,`
              Middle
            `),n(),t(367,`
            `),e(368,"button",41),t(369,`
              Right
            `),n(),t(370,`
          `),n(),t(371,`
          `),a(372,"br"),t(373,`
          `),e(374,"c-button-group",43),t(375,`
            `),e(376,"button",41),t(377,`
              Left
            `),n(),t(378,`
            `),e(379,"button",41),t(380,`
              Middle
            `),n(),t(381,`
            `),e(382,"button",41),t(383,`
              Right
            `),n(),t(384,`
          `),n(),t(385,`
        `),n(),t(386,`
      `),n(),t(387,`
    `),n(),t(388,`
  `),n(),t(389,`
  `),e(390,"c-col",0),t(391,`
    `),e(392,"c-card",1),t(393,`
      `),e(394,"c-card-header"),t(395,`
        `),e(396,"strong"),t(397,"Angular Button Group"),n(),t(398," "),e(399,"span"),t(400,"Nesting"),n(),t(401,`
      `),n(),t(402,`
      `),e(403,"c-card-body"),t(404,`
        `),e(405,"p",44),t(406,`
          Put a `),e(407,"code"),t(408,"<c-button-group>"),n(),t(409,` inside another
          `),e(410,"code"),t(411,"<c-button-group>"),n(),t(412,` when you need dropdown menus combined with a series
          of buttons.
        `),n(),t(413,`
        `),e(414,"app-docs-example",45),t(415,`
          `),e(416,"c-button-group",46),t(417,`
            `),e(418,"button",4),t(419,"1"),n(),t(420,`
            `),e(421,"button",4),t(422,"2"),n(),t(423,`
            `),e(424,"c-dropdown",47),t(425,`
              `),e(426,"button",48),t(427,`
                Dropdown
              `),n(),t(428,`
              `),e(429,"ul",49),t(430,`
                `),e(431,"li")(432,"a",50),t(433,"Action"),n()(),t(434,`
                `),e(435,"li")(436,"a",50),t(437,"Another action"),n()(),t(438,`
                `),e(439,"li")(440,"a",50),t(441,"Something else here"),n()(),t(442,`
                `),a(443,"li",51),t(444,`
                `),e(445,"li")(446,"a",50),t(447,"Separated link"),n()(),t(448,`
              `),n(),t(449,`
            `),n(),t(450,`
          `),n(),t(451,`
        `),n(),t(452,`
      `),n(),t(453,`
    `),n(),t(454,`
  `),n(),t(455,`
  `),e(456,"c-col",0),t(457,`
    `),e(458,"c-card",1),t(459,`
      `),e(460,"c-card-header"),t(461,`
        `),e(462,"strong"),t(463,"Angular Button Group"),n(),t(464," "),e(465,"span"),t(466,"Vertical variation"),n(),t(467,`
      `),n(),t(468,`
      `),e(469,"c-card-body"),t(470,`
        `),e(471,"p",44),t(472,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),e(473,"strong"),t(474,"Split button dropdowns are not supported here."),n(),t(475,`
        `),n(),t(476,`
        `),e(477,"app-docs-example",52),t(478,`
          `),e(479,"c-button-group",53),t(480,`
            `),e(481,"button",54),t(482,"Button"),n(),t(483,`
            `),e(484,"button",54),t(485,"Button"),n(),t(486,`
            `),e(487,"button",54),t(488,"Button"),n(),t(489,`
            `),e(490,"button",54),t(491,"Button"),n(),t(492,`
            `),e(493,"button",54),t(494,"Button"),n(),t(495,`
            `),e(496,"button",54),t(497,"Button"),n(),t(498,`
            `),e(499,"button",54),t(500,"Button"),n(),t(501,`
          `),n(),t(502,`
          `),a(503,"br"),t(504,`
        `),n(),t(505,`
        `),e(506,"app-docs-example",52),t(507,`
          `),e(508,"c-button-group",53),t(509,`
            `),e(510,"button",4),t(511,"Button"),n(),t(512,`
            `),e(513,"button",4),t(514,"Button"),n(),t(515,`
            `),e(516,"c-dropdown",47),t(517,`
              `),e(518,"button",48),t(519,`
                Dropdown
              `),n(),t(520,`
              `),e(521,"ul",49),t(522,`
                `),e(523,"li")(524,"a",50),t(525,"Action"),n()(),t(526,`
                `),e(527,"li")(528,"a",50),t(529,"Another action"),n()(),t(530,`
                `),e(531,"li")(532,"a",50),t(533,"Something else here"),n()(),t(534,`
                `),a(535,"li",51),t(536,`
                `),e(537,"li")(538,"a",50),t(539,"Separated link"),n()(),t(540,`
              `),n(),t(541,`
            `),n(),t(542,`
            `),e(543,"button",4),t(544,"Button"),n(),t(545,`
            `),e(546,"button",4),t(547,"Button"),n(),t(548,`
            `),e(549,"c-dropdown",47),t(550,`
              `),e(551,"button",48),t(552,`
                Dropdown
              `),n(),t(553,`
              `),e(554,"ul",49),t(555,`
                `),e(556,"li")(557,"a",50),t(558,"Action"),n()(),t(559,`
                `),e(560,"li")(561,"a",50),t(562,"Another action"),n()(),t(563,`
                `),e(564,"li")(565,"a",50),t(566,"Something else here"),n()(),t(567,`
                `),a(568,"li",51),t(569,`
                `),e(570,"li")(571,"a",50),t(572,"Separated link"),n()(),t(573,`
              `),n(),t(574,`
            `),n(),t(575,`
            `),e(576,"c-dropdown",55),t(577,`
              `),e(578,"button",48),t(579,`
                Dropdown
              `),n(),t(580,`
              `),e(581,"ul",56),t(582,`
                `),e(583,"li")(584,"a",50),t(585,"Action"),n()(),t(586,`
                `),e(587,"li")(588,"a",50),t(589,"Another action"),n()(),t(590,`
                `),e(591,"li")(592,"a",50),t(593,"Something else here"),n()(),t(594,`
                `),a(595,"li",51),t(596,`
                `),e(597,"li")(598,"a",50),t(599,"Separated link"),n()(),t(600,`
              `),n(),t(601,`
            `),n(),t(602,`
            `),e(603,"c-dropdown",47),t(604,`
              `),e(605,"button",48),t(606,`
                Dropdown
              `),n(),t(607,`
              `),e(608,"ul",49),t(609,`
                `),e(610,"li")(611,"a",50),t(612,"Action"),n()(),t(613,`
                `),e(614,"li")(615,"a",50),t(616,"Another action"),n()(),t(617,`
                `),e(618,"li")(619,"a",50),t(620,"Something else here"),n()(),t(621,`
                `),a(622,"li",51),t(623,`
                `),e(624,"li")(625,"a",50),t(626,"Separated link"),n()(),t(627,`
              `),n(),t(628,`
            `),n(),t(629,`
          `),n(),t(630,`
        `),n(),t(631,`
        `),e(632,"app-docs-example",52),t(633,`
          `),e(634,"form",16),t(635,`
            `),e(636,"c-button-group",53),t(637,`
              `),a(638,"input",24),t(639,`
              `),e(640,"label",57),x("click",function(){return m.setRadioValue("Radio1")}),t(641,"Radio 1"),n(),t(642,`

              `),a(643,"input",25),t(644,`
              `),e(645,"label",57),x("click",function(){return m.setRadioValue("Radio2")}),t(646,"Radio 2"),n(),t(647,`

              `),a(648,"input",26),t(649,`
              `),e(650,"label",57),x("click",function(){return m.setRadioValue("Radio3")}),t(651,`Radio
                3`),n(),t(652,`
            `),n(),t(653,`
          `),n(),t(654,`
        `),n(),t(655,`
      `),n(),t(656,`
    `),n(),t(657,`
  `),n(),t(658,`
`),n()),p&2&&(i(51),o("active",!0)("routerLink",r(30,l)),i(3),o("routerLink",r(31,l)),i(3),o("routerLink",r(32,l)),i(94),o("formGroup",m.formCheck1),i(26),o("formGroup",m.formRadio1),i(255),o("routerLink",r(33,l)),i(4),o("routerLink",r(34,l)),i(4),o("routerLink",r(35,l)),i(6),o("routerLink",r(36,l)),i(33),o("vertical",!0),i(29),o("vertical",!0),i(16),o("routerLink",r(37,l)),i(4),o("routerLink",r(38,l)),i(4),o("routerLink",r(39,l)),i(6),o("routerLink",r(40,l)),i(19),o("routerLink",r(41,l)),i(4),o("routerLink",r(42,l)),i(4),o("routerLink",r(43,l)),i(6),o("routerLink",r(44,l)),i(13),o("routerLink",r(45,l)),i(4),o("routerLink",r(46,l)),i(4),o("routerLink",r(47,l)),i(6),o("routerLink",r(48,l)),i(13),o("routerLink",r(49,l)),i(4),o("routerLink",r(50,l)),i(4),o("routerLink",r(51,l)),i(6),o("routerLink",r(52,l)),i(9),o("formGroup",m.formRadio1),i(2),o("vertical",!0))},dependencies:[q,W,T,M,V,K,G,D,g,R,C,k,h,_,f,v,L,w,J,A,H,P,O,U,z,I,j,N]});let s=c;return s})();export{it as ButtonGroupsComponent};
