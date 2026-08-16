import{b as U}from"./chunk-D6RVJT2W.js";import"./chunk-PMOGNWGV.js";import{a as H}from"./chunk-ZX4I2AKI.js";import{C,E as k,G as L,K as _,La as A,M as G,Ma as D,Na as $,Pa as N,W as I,cb as V,ea as w,eb as M,jb as z,kb as j,ma as B,na as F,qa as T,s as b,u as v,v as y}from"./chunk-KA3R4CT6.js";import"./chunk-MQBD4EFB.js";import"./chunk-AQFI5MHK.js";import"./chunk-FPPZ4BUR.js";import"./chunk-2U4ABH6C.js";import{Nb as d,Ob as s,Pb as c,Qb as m,Rb as t,Sb as i,Tb as x,bb as l,bc as h,fa as g,mb as f,sc as e,tc as p,uc as E}from"./chunk-H7BDVHMQ.js";import"./chunk-ZOGHMS73.js";function R(r,n){if(r&1&&(e(0,`
              `),t(1,"li",31),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit;l(2),p(a)}}function W(r,n){if(r&1&&(e(0,`
              `),t(1,"li",36),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit,o=n.$index;l(),m("active",o===0),l(),p(a)}}function q(r,n){if(r&1&&(e(0,`
              `),t(1,"button",37),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit,o=n.$index;l(),m("disabled",o===0),l(),p(a)}}function O(r,n){if(r&1&&(e(0,`
              `),t(1,"a",38),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit,o=n.$index,u=n.$count;l(),m("active",o===0)("disabled",o===u-1),l(),p(a)}}function J(r,n){if(r&1&&(e(0,`
              `),t(1,"li",31),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit;l(2),p(a)}}function K(r,n){if(r&1&&(e(0,`
            `),t(1,"ul",39),e(2,`
              `),t(3,"li",31),e(4,"Cras justo odio"),i(),e(5,`
              `),t(6,"li",31),e(7,"Dapibus ac facilisis in"),i(),e(8,`
              `),t(9,"li",31),e(10,"Morbi leo risus"),i(),e(11,`
            `),i(),e(12,`
          `)),r&2){let a=n.$implicit;l(),m("horizontal",a)}}function Q(r,n){if(r&1&&(e(0,`
              `),t(1,"li",40),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit;l(),m("color",a),l(),E(`
                A simple `,a,` list group item
              `)}}function X(r,n){if(r&1&&(e(0,`
              `),t(1,"a",41),e(2),i(),e(3,`
            `)),r&2){let a=n.$implicit;l(),m("color",a),l(),E(`
                A simple `,a,` list group item
              `)}}function Y(r,n){if(r&1&&(e(0,`
              `),t(1,"button",42),e(2),t(3,"c-badge",43),e(4),i(),e(5,`
              `),i(),e(6,`
            `)),r&2){let a=n.$implicit,o=n.$index,u=n.$count;l(),m("disabled",o===u-1),l(),E(`
                `,a,`
                `),l(),m("color",o===u-1?"secondary":"primary"),l(),p(o+1)}}var S=class S{constructor(){this.formBuilder=g(_);this.breakpoints=[!0,"sm","md","lg","xl","xxl"];this.colors=["primary","secondary","success","danger","warning","info","light","dark"];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac","Vestibulum at eros"]}setValue(n){let a=this.checkBoxes.get(n)?.value,o=this.checkBoxes.getRawValue();o[n]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(n){return this.checkBoxes.get(n)}};S.\u0275fac=function(a){return new(a||S)},S.\u0275cmp=f({type:S,selectors:[["app-list-groups"]],decls:477,vars:3,consts:[["xs","12"],["href","components/list-group","title","List Group"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/list-group"],["cListGroup",""],["href","components/list-group/#active-items"],["href","components/list-group/#disabled-items"],["href","components/list-group/#links-and-buttons"],["href","components/list-group/#flush"],["cListGroup","","flush",""],["href","components/list-group/#contextual-classes"],["cListGroup","",1,"mb-3"],[1,"text-body-secondary","small","mt-1"],["href","components/list-group/#with-badges"],["href","https://coreui.io/docs/utilities/flex/"],["href","components/list-group/#custom-content"],["cListGroupItem","","href","",3,"active"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],["cListGroupItem","","href",""],[1,"text-body-secondary"],["href","components/list-group/#checkboxes-and-radios"],["cForm","",3,"ngSubmit","formGroup"],["cListGroup","",3,"flush"],["cListGroupItem","","type","button",3,"click"],["cFormCheckInput","","formControlName","one","type","checkbox"],["cFormCheckLabel",""],["cListGroupItem","",2,"cursor","pointer"],["cFormCheckInput","","formControlName","two","type","checkbox"],[1,"ms-1"],["cListGroupItem",""],["cFormCheckInput","","formControlName","three","type","checkbox"],["cFormCheckInput","","formControlName","four","type","checkbox"],["cFormCheckInput","","formControlName","five","type","checkbox"],["cButton","","type","submit",1,"mt-3"],["cListGroupItem","",3,"active"],["cListGroupItem","",3,"disabled"],["href","","cListGroupItem","",3,"active","disabled"],["cListGroup","",1,"mb-2",3,"horizontal"],["cListGroupItem","",3,"color"],["cListGroupItem","","href","",3,"color"],["cListGroupItem","",1,"d-flex","justify-content-between","align-items-center",3,"disabled"],["shape","rounded-pill",3,"color"]],template:function(a,o){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),x(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular List Group"),i(),e(12," "),t(13,"small"),e(14,"Basic example"),i(),e(15,`
      `),i(),e(16,`
      `),t(17,"c-card-body"),e(18,`
        `),t(19,"p",3),e(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),i(),e(21,`
        `),t(22,"app-docs-example",4),e(23,`
          `),t(24,"ul",5),e(25,`
            `),s(26,R,4,1,null,null,d),i(),e(28,`
        `),i(),e(29,`
      `),i(),e(30,`
    `),i(),e(31,`
  `),i(),e(32,`
  `),t(33,"c-col",0),e(34,`
    `),t(35,"c-card",2),e(36,`
      `),t(37,"c-card-header"),e(38,`
        `),t(39,"strong"),e(40,"Angular List Group"),i(),e(41," "),t(42,"small"),e(43,"Active items"),i(),e(44,`
      `),i(),e(45,`
      `),t(46,"c-card-body"),e(47,`
        `),t(48,"p",3),e(49,`
          Add `),t(50,"code"),e(51,"active"),i(),e(52,` boolean property to a
          `),t(53,"code"),e(54,"cListGroupItem"),i(),e(55,` to show the current active selection.
        `),i(),e(56,`
        `),t(57,"app-docs-example",6),e(58,`
          `),t(59,"ul",5),e(60,`
            `),s(61,W,4,2,null,null,d),i(),e(63,`
        `),i(),e(64,`
      `),i(),e(65,`
    `),i(),e(66,`
  `),i(),e(67,`
  `),t(68,"c-col",0),e(69,`
    `),t(70,"c-card",2),e(71,`
      `),t(72,"c-card-header"),e(73,`
        `),t(74,"strong"),e(75,"Angular List Group"),i(),e(76," "),t(77,"small"),e(78,"Disabled items"),i(),e(79,`
      `),i(),e(80,`
      `),t(81,"c-card-body"),e(82,`
        `),t(83,"p",3),e(84,`
          Add `),t(85,"code"),e(86,"disabled"),i(),e(87,` boolean property to a
          `),t(88,"code"),e(89,"cListGroupItem"),i(),e(90,` to make it appear disabled.
        `),i(),e(91,`
        `),t(92,"app-docs-example",7),e(93,`
          `),t(94,"div",5),e(95,`
            `),s(96,q,4,2,null,null,d),i(),e(98,`
        `),i(),e(99,`
      `),i(),e(100,`
    `),i(),e(101,`
  `),i(),e(102,`
  `),t(103,"c-col",0),e(104,`
    `),t(105,"c-card",2),e(106,`
      `),t(107,"c-card-header"),e(108,`
        `),t(109,"strong"),e(110,"Angular List Group"),i(),e(111," "),t(112,"small"),e(113,"Links and buttons"),i(),e(114,`
      `),i(),e(115,`
      `),t(116,"c-card-body"),e(117,`
        `),t(118,"p",3),e(119,`
          Use `),t(120,"code"),e(121,"<a>"),i(),e(122,"s or "),t(123,"code"),e(124,"<button>"),i(),e(125,`s to create
          `),t(126,"em"),e(127,"actionable"),i(),e(128,` list group items with hover, disabled, and active
          states with `),t(129,"code"),e(130,"a"),i(),e(131," or "),t(132,"code"),e(133,"button"),i(),e(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),t(135,"code"),e(136,"<li>"),i(),e(137,` or
          `),t(138,"code"),e(139,"<div>"),i(),e(140,`) don't provide a click or tap affordance.
        `),i(),e(141,`
        `),t(142,"app-docs-example",8),e(143,`
          `),t(144,"div",5),e(145,`
            `),s(146,O,4,3,null,null,d),i(),e(148,`
        `),i(),e(149,`
      `),i(),e(150,`
    `),i(),e(151,`
  `),i(),e(152,`
  `),t(153,"c-col",0),e(154,`
    `),t(155,"c-card",2),e(156,`
      `),t(157,"c-card-header"),e(158,`
        `),t(159,"strong"),e(160,"Angular List Group"),i(),e(161," "),t(162,"small"),e(163,"Flush"),i(),e(164,`
      `),i(),e(165,`
      `),t(166,"c-card-body"),e(167,`
        `),t(168,"p",3),e(169,`
          Add `),t(170,"code"),e(171,"flush"),i(),e(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),i(),e(173,`
        `),t(174,"app-docs-example",9),e(175,`
          `),t(176,"ul",10),e(177,`
            `),s(178,J,4,1,null,null,d),i(),e(180,`
        `),i(),e(181,`
      `),i(),e(182,`
    `),i(),e(183,`
  `),i(),e(184,`
  `),t(185,"c-col",0),e(186,`
    `),t(187,"c-card",2),e(188,`
      `),t(189,"c-card-header"),e(190,`
        `),t(191,"strong"),e(192,"Angular List Group"),i(),e(193," "),t(194,"small"),e(195,"Horizontal"),i(),e(196,`
      `),i(),e(197,`
      `),t(198,"c-card-body"),e(199,`
        `),t(200,"p",3),e(201,`
          Add `),t(202,"code"),e(203,'layout="horizontal"'),i(),e(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),x(205,"br"),e(206,`
          Alternatively, choose a responsive variant
          `),t(207,"code"),e(208,'[horizontal]="sm | md | lg | xl | xxl"'),i(),e(209,`
          to make a list group horizontal starting at that breakpoint's
          `),t(210,"code"),e(211,"min-width"),i(),e(212,". "),x(213,"br"),e(214,`
          Currently `),t(215,"strong"),e(216,"horizontal list groups cannot be combined with flush list groups."),i(),e(217,`
        `),i(),e(218,`
        `),t(219,"app-docs-example",9),e(220,`
          `),s(221,K,13,1,null,null,d),i(),e(223,`
      `),i(),e(224,`
    `),i(),e(225,`
  `),i(),e(226,`
  `),t(227,"c-col",0),e(228,`
    `),t(229,"c-card",2),e(230,`
      `),t(231,"c-card-header"),e(232,`
        `),t(233,"strong"),e(234,"Angular List Group"),i(),e(235," "),t(236,"small"),e(237,"Contextual classes"),i(),e(238,`
      `),i(),e(239,`
      `),t(240,"c-card-body"),e(241,`
        `),t(242,"p",3),e(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),i(),e(244,`
        `),t(245,"app-docs-example",11),e(246,`
          `),t(247,"ul",12),e(248,`
            `),s(249,Q,4,2,null,null,d),i(),e(251,`
        `),i(),e(252,`
        `),t(253,"p",13),e(254,`
          Contextual classes also work with `),t(255,"code"),e(256,"<a>"),i(),e(257,` or
          `),t(258,"code"),e(259,"<button>"),i(),e(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),t(261,"code"),e(262,"active"),i(),e(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),i(),e(264,`
        `),t(265,"app-docs-example",11),e(266,`
          `),t(267,"div",5),e(268,`
            `),s(269,X,4,2,null,null,d),i(),e(271,`
        `),i(),e(272,`
      `),i(),e(273,`
    `),i(),e(274,`
  `),i(),e(275,`
  `),t(276,"c-col",0),e(277,`
    `),t(278,"c-card",2),e(279,`
      `),t(280,"c-card-header"),e(281,`
        `),t(282,"strong"),e(283,"Angular List Group"),i(),e(284," "),t(285,"small"),e(286,"With badges"),i(),e(287,`
      `),i(),e(288,`
      `),t(289,"c-card-body"),e(290,`
        `),t(291,"p",3),e(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),i(),e(293,`
        `),t(294,"app-docs-example",14),e(295,`
          `),t(296,"div",5),e(297,`
            `),s(298,Y,7,4,null,null,d),i(),e(300,`
        `),i(),e(301,`
      `),i(),e(302,`
    `),i(),e(303,`
  `),i(),e(304,`
  `),t(305,"c-col",0),e(306,`
    `),t(307,"c-card",2),e(308,`
      `),t(309,"c-card-header"),e(310,`
        `),t(311,"strong"),e(312,"Angular List Group"),i(),e(313," "),t(314,"small"),e(315,"Custom content"),i(),e(316,`
      `),i(),e(317,`
      `),t(318,"c-card-body"),e(319,`
        `),t(320,"p",3),e(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),t(322,"a",15),e(323,"flexbox utilities"),i(),e(324,`.
        `),i(),e(325,`
        `),t(326,"app-docs-example",16),e(327,`
          `),t(328,"div",5),e(329,`
            `),t(330,"a",17),e(331,`
              `),t(332,"div",18),e(333,`
                `),t(334,"h5",19),e(335,"List group item heading"),i(),e(336,`
                `),t(337,"small"),e(338,"3 days ago"),i(),e(339,`
              `),i(),e(340,`
              `),t(341,"p",19),e(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),i(),e(343,`
              `),t(344,"small"),e(345,"Donec id elit non mi porta."),i(),e(346,`
            `),i(),e(347,`
            `),t(348,"a",20),e(349,`
              `),t(350,"div",18),e(351,`
                `),t(352,"h5",19),e(353,"List group item heading"),i(),e(354,`
                `),t(355,"small",21),e(356,"3 days ago"),i(),e(357,`
              `),i(),e(358,`
              `),t(359,"p",19),e(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),i(),e(361,`
              `),t(362,"small",21),e(363,"Donec id elit non mi porta."),i(),e(364,`
            `),i(),e(365,`
            `),t(366,"a",20),e(367,`
              `),t(368,"div",18),e(369,`
                `),t(370,"h5",19),e(371,"List group item heading"),i(),e(372,`
                `),t(373,"small",21),e(374,"3 days ago"),i(),e(375,`
              `),i(),e(376,`
              `),t(377,"p",19),e(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),i(),e(379,`
              `),t(380,"small",21),e(381,"Donec id elit non mi porta."),i(),e(382,`
            `),i(),e(383,`
          `),i(),e(384,`
        `),i(),e(385,`
      `),i(),e(386,`
    `),i(),e(387,`
  `),i(),e(388,`
  `),t(389,"c-col",0),e(390,`
    `),t(391,"c-card",2),e(392,`
      `),t(393,"c-card-header"),e(394,`
        `),t(395,"strong"),e(396,"Angular List Group"),i(),e(397," "),t(398,"small"),e(399,"Checkboxes and radios"),i(),e(400,`
      `),i(),e(401,`
      `),t(402,"c-card-body"),e(403,`
        `),t(404,"p",3),e(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),i(),e(406,`
        `),t(407,"app-docs-example",22),e(408,`
          `),t(409,"form",23),h("ngSubmit",function(){return o.logValue()}),e(410,`
            `),t(411,"ul",24),e(412,`
              `),t(413,"button",25),h("click",function(){return o.setValue("one")}),e(414,`
                `),t(415,"c-form-check"),e(416,`
                  `),x(417,"input",26),e(418,`
                  `),t(419,"label",27),e(420,"Cras justo odio"),i(),e(421,`
                `),i(),e(422,`
              `),i(),e(423,`
              `),t(424,"label",28),e(425,`
                `),t(426,"c-form-check"),e(427,`
                  `),x(428,"input",29),e(429,`
                  `),t(430,"span",30),e(431,"Dapibus ac facilisis in"),i(),e(432,`
                `),i(),e(433,`
              `),i(),e(434,`
              `),t(435,"li",31),e(436,`
                `),t(437,"c-form-check"),e(438,`
                  `),x(439,"input",32),e(440,`
                  `),t(441,"label",27),e(442,"Morbi leo risus"),i(),e(443,`
                `),i(),e(444,`
              `),i(),e(445,`
              `),t(446,"li",31),e(447,`
                `),t(448,"c-form-check"),e(449,`
                  `),x(450,"input",33),e(451,`
                  `),t(452,"label",27),e(453,"Orta ac consectetur ac"),i(),e(454,`
                `),i(),e(455,`
              `),i(),e(456,`
              `),t(457,"li",31),e(458,`
                `),t(459,"c-form-check"),e(460,`
                  `),x(461,"input",34),e(462,`
                  `),t(463,"label",27),e(464,"Vestibulum at eros"),i(),e(465,`
                `),i(),e(466,`
              `),i(),e(467,`
            `),i(),e(468,`
            `),t(469,"button",35),e(470,"Submit"),i(),e(471,`
          `),i(),e(472,`
        `),i(),e(473,`
      `),i(),e(474,`
    `),i(),e(475,`
  `),i(),e(476,`
`),i()),a&2&&(l(26),c(o.sampleList),l(35),c(o.sampleList),l(35),c(o.sampleList),l(50),c(o.sampleList),l(32),c(o.sampleList),l(43),c(o.breakpoints),l(28),c(o.colors),l(20),c(o.colors),l(29),c(o.sampleList),l(32),m("active",!0),l(79),m("formGroup",o.checkBoxes),l(2),m("flush",!0))},dependencies:[M,V,B,T,F,U,z,j,w,G,C,b,v,y,k,L,A,$,N,D,I,H],encapsulation:2});var P=S;export{P as ListGroupsComponent};
