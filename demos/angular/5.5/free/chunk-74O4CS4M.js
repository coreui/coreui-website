import{b as W}from"./chunk-LD7KIRSH.js";import{a as q}from"./chunk-N4KRKZ3T.js";import{a as T,b as V,c as N,d as M,f as I,i as z,k as U,l as j,n as P,o as H,s as J,u as O}from"./chunk-BZO2FFGU.js";import{$ as k,Aa as F,Ga as R,Ha as D,K as E,Ka as G,Ma as A,Y as g,Z as h,aa as f,da as v,q as S,qa as y,sa as B,ta as C,ua as _,va as w,ya as L}from"./chunk-JWVWN3RB.js";import{Fb as o,Gb as e,Hb as n,Ib as a,Ua as i,Vb as u,Z as s,hb as b,lc as t,zc as r}from"./chunk-32CID2Q6.js";import"./chunk-JKOY2XUY.js";var l=()=>[],K=class p{constructor(){this.formBuilder=s(J);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new I({radio1:new z("Radio1")})}setCheckBoxValue(d){let c=this.formCheck1.get(d)?.value,m=this.formCheck1.value;m[d]=!c,this.formCheck1.setValue(m)}setRadioValue(d){this.formRadio1.setValue({radio1:d})}static{this.\u0275fac=function(c){return new(c||p)}}static{this.\u0275cmp=b({type:p,selectors:[["app-button-groups"]],decls:661,vars:53,consts:[["xs","12"],["href","components/button-group","title","Button Group"],[1,"mb-4"],["href","components/button-group"],["aria-label","Basic example","role","group"],["cButton","","color","primary"],["cButton","","color","primary",3,"active","routerLink"],["cButton","","color","primary",3,"routerLink"],["href","components/button-group#mixed-styles"],["aria-label","Basic mixed styles example","role","group"],["cButton","","color","danger"],["cButton","","color","warning"],["cButton","","color","success"],["href","components/button-group#outlined-styles"],["aria-label","Basic outlined example","role","group"],["cButton","","color","primary","variant","outline"],["href","components/button-group#checkbox-and-radio-button-groups"],[3,"formGroup"],["aria-label","Basic checkbox toggle button group","role","group"],["formControlName","checkbox1","type","checkbox",1,"btn-check"],["cButton","","cFormCheckLabel","","variant","outline",3,"click"],["formControlName","checkbox2","type","checkbox",1,"btn-check"],["formControlName","checkbox3","type","checkbox",1,"btn-check"],[1,"mb-3"],["aria-label","Basic radio toggle button group","role","group"],["formControlName","radio1","type","radio","value","Radio1",1,"btn-check"],["formControlName","radio1","type","radio","value","Radio2",1,"btn-check"],["formControlName","radio1","type","radio","value","Radio3",1,"btn-check"],["href","components/button-group#button-toolbar"],["aria-label","Toolbar with button groups","role","group"],["aria-label","First group","role","group",1,"me-2"],["aria-label","Second group","role","group",1,"me-2"],["cButton","","color","secondary"],["aria-label","Third group","role","group",1,"me-2"],["cButton","","color","info"],["aria-label","Toolbar with button groups","role","group",1,"mb-3"],["cButton","","color","secondary","variant","outline"],["cInputGroupText",""],["aria-describedby","btnGroupAddon","aria-label","Input group example","cFormControl","","placeholder","Input group example"],["aria-label","Toolbar with button groups","role","group",1,"justify-content-between"],["href","components/button-group#sizing"],["aria-label","Large button group","role","group","size","lg",1,"m-1"],["cButton","","color","dark","variant","outline"],["aria-label","Default button group","role","group",1,"m-1"],["aria-label","Small button group","role","group","size","sm",1,"m-1"],[1,"text-body-secondary","small"],["href","components/button-group#nesting"],["aria-label","Button group with nested dropdown","role","group"],["variant","btn-group"],["cButton","","cDropdownToggle",""],["cDropdownMenu",""],["cDropdownItem","",3,"routerLink"],["cDropdownDivider",""],["href","components/button-group/#vertical-variation"],["aria-label","Vertical button group","role","group",3,"vertical"],["cButton","","color","dark"],["placement","right-start","variant","btn-group"],["cDropdownMenu","","dark",""],["cButton","","cFormCheckLabel","","color","danger","variant","outline",3,"click"]],template:function(c,m){c&1&&(e(0,"c-row"),t(1,`
  `),e(2,"c-col",0),t(3,`
    `),a(4,"app-docs-components",1),t(5,`
    `),e(6,"c-card",2),t(7,`
      `),e(8,"c-card-header"),t(9,`
        `),e(10,"strong"),t(11,"Angular Button Group"),n(),t(12," "),e(13,"span"),t(14,"Basic example"),n(),t(15,`
      `),n(),t(16,`
      `),e(17,"c-card-body"),t(18,`
        `),e(19,"p"),t(20,`
          Wrap a series of `),e(21,"code"),t(22,"<CButton>"),n(),t(23,` components in
          `),e(24,"code"),t(25,"<c-button-group>"),n(),t(26,`.
        `),n(),t(27,`
        `),e(28,"app-docs-example",3),t(29,`
          `),e(30,"c-button-group",4),t(31,`
            `),e(32,"button",5),t(33,"Left"),n(),t(34,`
            `),e(35,"button",5),t(36,"Middle"),n(),t(37,`
            `),e(38,"button",5),t(39,"Right"),n(),t(40,`
          `),n(),t(41,`
        `),n(),t(42,`
        `),e(43,"p"),t(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),e(45,"code"),t(46,"<CNav>"),n(),t(47,` components.
        `),n(),t(48,`
        `),e(49,"app-docs-example",3),t(50,`
          `),e(51,"c-button-group"),t(52,`
            `),e(53,"a",6),t(54,`
              Active link
            `),n(),t(55,`
            `),e(56,"a",7),t(57,`
              Link
            `),n(),t(58,`
            `),e(59,"a",7),t(60,`
              Link
            `),n(),t(61,`
          `),n(),t(62,`
        `),n(),t(63,`
      `),n(),t(64,`
    `),n(),t(65,`
  `),n(),t(66,`
  `),e(67,"c-col",0),t(68,`
    `),e(69,"c-card",2),t(70,`
      `),e(71,"c-card-header"),t(72,`
        `),e(73,"strong"),t(74,"Angular Button Group"),n(),t(75," "),e(76,"span"),t(77,"Mixed styles"),n(),t(78,`
      `),n(),t(79,`
      `),e(80,"c-card-body"),t(81,`
        `),e(82,"app-docs-example",8),t(83,`
          `),e(84,"c-button-group",9),t(85,`
            `),e(86,"button",10),t(87,"Left"),n(),t(88,`
            `),e(89,"button",11),t(90,"Middle"),n(),t(91,`
            `),e(92,"button",12),t(93,"Right"),n(),t(94,`
          `),n(),t(95,`
        `),n(),t(96,`
      `),n(),t(97,`
    `),n(),t(98,`
  `),n(),t(99,`
  `),e(100,"c-col",0),t(101,`
    `),e(102,"c-card",2),t(103,`
      `),e(104,"c-card-header"),t(105,`
        `),e(106,"strong"),t(107,"Angular Button Group"),n(),t(108," "),e(109,"span"),t(110,"Outlined styles"),n(),t(111,`
      `),n(),t(112,`
      `),e(113,"c-card-body"),t(114,`
        `),e(115,"app-docs-example",13),t(116,`
          `),e(117,"c-button-group",14),t(118,`
            `),e(119,"button",15),t(120,`
              Left
            `),n(),t(121,`
            `),e(122,"button",15),t(123,`
              Middle
            `),n(),t(124,`
            `),e(125,"button",15),t(126,`
              Right
            `),n(),t(127,`
          `),n(),t(128,`
        `),n(),t(129,`
      `),n(),t(130,`
    `),n(),t(131,`
  `),n(),t(132,`
  `),e(133,"c-col",0),t(134,`
    `),e(135,"c-card",2),t(136,`
      `),e(137,"c-card-header"),t(138,`
        `),e(139,"strong"),t(140,"Angular Button Group"),n(),t(141," "),e(142,"span"),t(143,"Checkbox and radio button groups"),n(),t(144,`
      `),n(),t(145,`
      `),e(146,"c-card-body"),t(147,`
        `),e(148,"p"),t(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),n(),t(150,`
        `),e(151,"app-docs-example",16),t(152,`
          `),e(153,"form",17),t(154,`
            `),e(155,"c-button-group",18),t(156,`
              `),a(157,"input",19),t(158,`
              `),e(159,"label",20),u("click",function(){return m.setCheckBoxValue("checkbox1")}),t(160,"Checkbox 1"),n(),t(161,`

              `),a(162,"input",21),t(163,`
              `),e(164,"label",20),u("click",function(){return m.setCheckBoxValue("checkbox2")}),t(165,"Checkbox 2"),n(),t(166,`

              `),a(167,"input",22),t(168,`
              `),e(169,"label",20),u("click",function(){return m.setCheckBoxValue("checkbox3")}),t(170,`Checkbox
                3`),n(),t(171,`
            `),n(),t(172,`
          `),n(),t(173,`
          `),a(174,"br",23),t(175,`
        `),n(),t(176,`
        `),e(177,"app-docs-example",16),t(178,`
          `),e(179,"form",17),t(180,`
            `),e(181,"c-button-group",24),t(182,`
              `),a(183,"input",25),t(184,`
              `),e(185,"label",20),u("click",function(){return m.setRadioValue("Radio1")}),t(186,"Radio 1"),n(),t(187,`

              `),a(188,"input",26),t(189,`
              `),e(190,"label",20),u("click",function(){return m.setRadioValue("Radio2")}),t(191,"Radio 2"),n(),t(192,`

              `),a(193,"input",27),t(194,`
              `),e(195,"label",20),u("click",function(){return m.setRadioValue("Radio3")}),t(196,"Radio 3"),n(),t(197,`
            `),n(),t(198,`
          `),n(),t(199,`
        `),n(),t(200,`
      `),n(),t(201,`
    `),n(),t(202,`
  `),n(),t(203,`
  `),e(204,"c-col",0),t(205,`
    `),e(206,"c-card",2),t(207,`
      `),e(208,"c-card-header"),t(209,`
        `),e(210,"strong"),t(211,"Angular Button Group"),n(),t(212," "),e(213,"span"),t(214,"Button toolbar"),n(),t(215,`
      `),n(),t(216,`
      `),e(217,"c-card-body"),t(218,`
        `),e(219,"p"),t(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),n(),t(221,`
        `),e(222,"app-docs-example",28),t(223,`
          `),e(224,"c-button-toolbar",29),t(225,`
            `),e(226,"c-button-group",30),t(227,`
              `),e(228,"button",5),t(229,"1"),n(),t(230,`
              `),e(231,"button",5),t(232,"2"),n(),t(233,`
              `),e(234,"button",5),t(235,"3"),n(),t(236,`
              `),e(237,"button",5),t(238,"4"),n(),t(239,`
            `),n(),t(240,`
            `),e(241,"c-button-group",31),t(242,`
              `),e(243,"button",32),t(244,"5"),n(),t(245,`
              `),e(246,"button",32),t(247,"6"),n(),t(248,`
              `),e(249,"button",32),t(250,"7"),n(),t(251,`
            `),n(),t(252,`
            `),e(253,"c-button-group",33),t(254,`
              `),e(255,"button",34),t(256,"8"),n(),t(257,`
            `),n(),t(258,`
          `),n(),t(259,`
        `),n(),t(260,`
        `),e(261,"p"),t(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),n(),t(263,`
        `),e(264,"app-docs-example",28),t(265,`
          `),e(266,"c-button-toolbar",35),t(267,`
            `),e(268,"c-button-group",30),t(269,`
              `),e(270,"button",36),t(271,`
                1
              `),n(),t(272,`
              `),e(273,"button",36),t(274,`
                2
              `),n(),t(275,`
              `),e(276,"button",36),t(277,`
                3
              `),n(),t(278,`
              `),e(279,"button",36),t(280,`
                4
              `),n(),t(281,`
            `),n(),t(282,`
            `),e(283,"c-input-group"),t(284,`
              `),e(285,"span",37),t(286,"@"),n(),t(287,`
              `),a(288,"input",38),t(289,`
            `),n(),t(290,`
          `),n(),t(291,`
          `),e(292,"c-button-toolbar",39),t(293,`
            `),e(294,"c-button-group",30),t(295,`
              `),e(296,"button",36),t(297,`
                1
              `),n(),t(298,`
              `),e(299,"button",36),t(300,`
                2
              `),n(),t(301,`
              `),e(302,"button",36),t(303,`
                3
              `),n(),t(304,`
              `),e(305,"button",36),t(306,`
                4
              `),n(),t(307,`
            `),n(),t(308,`
            `),e(309,"c-input-group"),t(310,`
              `),e(311,"span",37),t(312,"@"),n(),t(313,`
              `),a(314,"input",38),t(315,`
            `),n(),t(316,`
          `),n(),t(317,`
        `),n(),t(318,`
      `),n(),t(319,`
    `),n(),t(320,`
  `),n(),t(321,`
  `),e(322,"c-col",0),t(323,`
    `),e(324,"c-card",2),t(325,`
      `),e(326,"c-card-header"),t(327,`
        `),e(328,"strong"),t(329,"Angular Button Group"),n(),t(330," "),e(331,"span"),t(332,"Sizing"),n(),t(333,`
      `),n(),t(334,`
      `),e(335,"c-card-body"),t(336,`
        `),e(337,"p"),t(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),e(339,"code"),t(340,"size"),n(),t(341," property to all "),e(342,"code"),t(343,"<c-button-group>"),n(),t(344,`'s, including
          each one when nesting multiple groups.
        `),n(),t(345,`
        `),e(346,"app-docs-example",40),t(347,`
          `),e(348,"c-button-group",41),t(349,`
            `),e(350,"button",42),t(351,`
              Left
            `),n(),t(352,`
            `),e(353,"button",42),t(354,`
              Middle
            `),n(),t(355,`
            `),e(356,"button",42),t(357,`
              Right
            `),n(),t(358,`
          `),n(),t(359,`
          `),a(360,"br"),t(361,`
          `),e(362,"c-button-group",43),t(363,`
            `),e(364,"button",42),t(365,`
              Left
            `),n(),t(366,`
            `),e(367,"button",42),t(368,`
              Middle
            `),n(),t(369,`
            `),e(370,"button",42),t(371,`
              Right
            `),n(),t(372,`
          `),n(),t(373,`
          `),a(374,"br"),t(375,`
          `),e(376,"c-button-group",44),t(377,`
            `),e(378,"button",42),t(379,`
              Left
            `),n(),t(380,`
            `),e(381,"button",42),t(382,`
              Middle
            `),n(),t(383,`
            `),e(384,"button",42),t(385,`
              Right
            `),n(),t(386,`
          `),n(),t(387,`
        `),n(),t(388,`
      `),n(),t(389,`
    `),n(),t(390,`
  `),n(),t(391,`
  `),e(392,"c-col",0),t(393,`
    `),e(394,"c-card",2),t(395,`
      `),e(396,"c-card-header"),t(397,`
        `),e(398,"strong"),t(399,"Angular Button Group"),n(),t(400," "),e(401,"span"),t(402,"Nesting"),n(),t(403,`
      `),n(),t(404,`
      `),e(405,"c-card-body"),t(406,`
        `),e(407,"p",45),t(408,`
          Put a `),e(409,"code"),t(410,"<c-button-group>"),n(),t(411,` inside another
          `),e(412,"code"),t(413,"<c-button-group>"),n(),t(414,` when you need dropdown menus combined with a series
          of buttons.
        `),n(),t(415,`
        `),e(416,"app-docs-example",46),t(417,`
          `),e(418,"c-button-group",47),t(419,`
            `),e(420,"button",5),t(421,"1"),n(),t(422,`
            `),e(423,"button",5),t(424,"2"),n(),t(425,`
            `),e(426,"c-dropdown",48),t(427,`
              `),e(428,"button",49),t(429,`
                Dropdown
              `),n(),t(430,`
              `),e(431,"ul",50),t(432,`
                `),e(433,"li")(434,"a",51),t(435,"Action"),n()(),t(436,`
                `),e(437,"li")(438,"a",51),t(439,"Another action"),n()(),t(440,`
                `),e(441,"li")(442,"a",51),t(443,"Something else here"),n()(),t(444,`
                `),a(445,"li",52),t(446,`
                `),e(447,"li")(448,"a",51),t(449,"Separated link"),n()(),t(450,`
              `),n(),t(451,`
            `),n(),t(452,`
          `),n(),t(453,`
        `),n(),t(454,`
      `),n(),t(455,`
    `),n(),t(456,`
  `),n(),t(457,`
  `),e(458,"c-col",0),t(459,`
    `),e(460,"c-card",2),t(461,`
      `),e(462,"c-card-header"),t(463,`
        `),e(464,"strong"),t(465,"Angular Button Group"),n(),t(466," "),e(467,"span"),t(468,"Vertical variation"),n(),t(469,`
      `),n(),t(470,`
      `),e(471,"c-card-body"),t(472,`
        `),e(473,"p",45),t(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),e(475,"strong"),t(476,"Split button dropdowns are not supported here."),n(),t(477,`
        `),n(),t(478,`
        `),e(479,"app-docs-example",53),t(480,`
          `),e(481,"c-button-group",54),t(482,`
            `),e(483,"button",55),t(484,"Button"),n(),t(485,`
            `),e(486,"button",55),t(487,"Button"),n(),t(488,`
            `),e(489,"button",55),t(490,"Button"),n(),t(491,`
            `),e(492,"button",55),t(493,"Button"),n(),t(494,`
            `),e(495,"button",55),t(496,"Button"),n(),t(497,`
            `),e(498,"button",55),t(499,"Button"),n(),t(500,`
            `),e(501,"button",55),t(502,"Button"),n(),t(503,`
          `),n(),t(504,`
          `),a(505,"br"),t(506,`
        `),n(),t(507,`
        `),e(508,"app-docs-example",53),t(509,`
          `),e(510,"c-button-group",54),t(511,`
            `),e(512,"button",5),t(513,"Button"),n(),t(514,`
            `),e(515,"button",5),t(516,"Button"),n(),t(517,`
            `),e(518,"c-dropdown",48),t(519,`
              `),e(520,"button",49),t(521,`
                Dropdown
              `),n(),t(522,`
              `),e(523,"ul",50),t(524,`
                `),e(525,"li")(526,"a",51),t(527,"Action"),n()(),t(528,`
                `),e(529,"li")(530,"a",51),t(531,"Another action"),n()(),t(532,`
                `),e(533,"li")(534,"a",51),t(535,"Something else here"),n()(),t(536,`
                `),a(537,"li",52),t(538,`
                `),e(539,"li")(540,"a",51),t(541,"Separated link"),n()(),t(542,`
              `),n(),t(543,`
            `),n(),t(544,`
            `),e(545,"button",5),t(546,"Button"),n(),t(547,`
            `),e(548,"button",5),t(549,"Button"),n(),t(550,`
            `),e(551,"c-dropdown",48),t(552,`
              `),e(553,"button",49),t(554,`
                Dropdown
              `),n(),t(555,`
              `),e(556,"ul",50),t(557,`
                `),e(558,"li")(559,"a",51),t(560,"Action"),n()(),t(561,`
                `),e(562,"li")(563,"a",51),t(564,"Another action"),n()(),t(565,`
                `),e(566,"li")(567,"a",51),t(568,"Something else here"),n()(),t(569,`
                `),a(570,"li",52),t(571,`
                `),e(572,"li")(573,"a",51),t(574,"Separated link"),n()(),t(575,`
              `),n(),t(576,`
            `),n(),t(577,`
            `),e(578,"c-dropdown",56),t(579,`
              `),e(580,"button",49),t(581,`
                Dropdown
              `),n(),t(582,`
              `),e(583,"ul",57),t(584,`
                `),e(585,"li")(586,"a",51),t(587,"Action"),n()(),t(588,`
                `),e(589,"li")(590,"a",51),t(591,"Another action"),n()(),t(592,`
                `),e(593,"li")(594,"a",51),t(595,"Something else here"),n()(),t(596,`
                `),a(597,"li",52),t(598,`
                `),e(599,"li")(600,"a",51),t(601,"Separated link"),n()(),t(602,`
              `),n(),t(603,`
            `),n(),t(604,`
            `),e(605,"c-dropdown",48),t(606,`
              `),e(607,"button",49),t(608,`
                Dropdown
              `),n(),t(609,`
              `),e(610,"ul",50),t(611,`
                `),e(612,"li")(613,"a",51),t(614,"Action"),n()(),t(615,`
                `),e(616,"li")(617,"a",51),t(618,"Another action"),n()(),t(619,`
                `),e(620,"li")(621,"a",51),t(622,"Something else here"),n()(),t(623,`
                `),a(624,"li",52),t(625,`
                `),e(626,"li")(627,"a",51),t(628,"Separated link"),n()(),t(629,`
              `),n(),t(630,`
            `),n(),t(631,`
          `),n(),t(632,`
        `),n(),t(633,`
        `),e(634,"app-docs-example",53),t(635,`
          `),e(636,"form",17),t(637,`
            `),e(638,"c-button-group",54),t(639,`
              `),a(640,"input",25),t(641,`
              `),e(642,"label",58),u("click",function(){return m.setRadioValue("Radio1")}),t(643,"Radio 1"),n(),t(644,`

              `),a(645,"input",26),t(646,`
              `),e(647,"label",58),u("click",function(){return m.setRadioValue("Radio2")}),t(648,"Radio 2"),n(),t(649,`

              `),a(650,"input",27),t(651,`
              `),e(652,"label",58),u("click",function(){return m.setRadioValue("Radio3")}),t(653,`Radio
                3`),n(),t(654,`
            `),n(),t(655,`
          `),n(),t(656,`
        `),n(),t(657,`
      `),n(),t(658,`
    `),n(),t(659,`
  `),n(),t(660,`
`),n()),c&2&&(i(53),o("active",!0)("routerLink",r(30,l)),i(3),o("routerLink",r(31,l)),i(3),o("routerLink",r(32,l)),i(94),o("formGroup",m.formCheck1),i(26),o("formGroup",m.formRadio1),i(255),o("routerLink",r(33,l)),i(4),o("routerLink",r(34,l)),i(4),o("routerLink",r(35,l)),i(6),o("routerLink",r(36,l)),i(33),o("vertical",!0),i(29),o("vertical",!0),i(16),o("routerLink",r(37,l)),i(4),o("routerLink",r(38,l)),i(4),o("routerLink",r(39,l)),i(6),o("routerLink",r(40,l)),i(19),o("routerLink",r(41,l)),i(4),o("routerLink",r(42,l)),i(4),o("routerLink",r(43,l)),i(6),o("routerLink",r(44,l)),i(13),o("routerLink",r(45,l)),i(4),o("routerLink",r(46,l)),i(4),o("routerLink",r(47,l)),i(6),o("routerLink",r(48,l)),i(13),o("routerLink",r(49,l)),i(4),o("routerLink",r(50,l)),i(4),o("routerLink",r(51,l)),i(6),o("routerLink",r(52,l)),i(9),o("formGroup",m.formRadio1),i(2),o("vertical",!0))},dependencies:[A,G,k,v,f,W,g,E,S,O,U,V,T,j,N,M,H,P,L,h,R,D,F,_,C,B,w,y,q],encapsulation:2})}};export{K as ButtonGroupsComponent};
