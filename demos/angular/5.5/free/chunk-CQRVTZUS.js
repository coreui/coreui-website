import{b as j}from"./chunk-LD7KIRSH.js";import{a as U}from"./chunk-N4KRKZ3T.js";import{a as T,c as A,d as D,k as $,n as N,o as V,s as M,u as z}from"./chunk-BZO2FFGU.js";import{$ as v,Ba as G,K as f,Ka as I,Ma as w,Ra as B,Sa as F,U as b,aa as y,da as C,xa as k,ya as L,za as _}from"./chunk-JWVWN3RB.js";import{Cb as d,Db as s,Eb as c,Fb as m,Gb as t,Hb as n,Ib as x,Ua as l,Vb as E,Z as h,hb as g,lc as e,mc as p,nc as S}from"./chunk-32CID2Q6.js";import"./chunk-JKOY2XUY.js";function P(r,i){if(r&1&&(e(0,`
              `),t(1,"li",31),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit;l(2),p(a)}}function R(r,i){if(r&1&&(e(0,`
              `),t(1,"li",36),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit,o=i.$index;l(),m("active",o===0),l(),p(a)}}function W(r,i){if(r&1&&(e(0,`
              `),t(1,"button",37),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit,o=i.$index;l(),m("disabled",o===0),l(),p(a)}}function q(r,i){if(r&1&&(e(0,`
              `),t(1,"a",38),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit,o=i.$index,u=i.$count;l(),m("active",o===0)("disabled",o===u-1),l(),p(a)}}function O(r,i){if(r&1&&(e(0,`
              `),t(1,"li",31),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit;l(2),p(a)}}function J(r,i){if(r&1&&(e(0,`
            `),t(1,"ul",39),e(2,`
              `),t(3,"li",31),e(4,"Cras justo odio"),n(),e(5,`
              `),t(6,"li",31),e(7,"Dapibus ac facilisis in"),n(),e(8,`
              `),t(9,"li",31),e(10,"Morbi leo risus"),n(),e(11,`
            `),n(),e(12,`
          `)),r&2){let a=i.$implicit;l(),m("horizontal",a)}}function K(r,i){if(r&1&&(e(0,`
              `),t(1,"li",40),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit;l(),m("color",a),l(),S(`
                A simple `,a,` list group item
              `)}}function Q(r,i){if(r&1&&(e(0,`
              `),t(1,"a",41),e(2),n(),e(3,`
            `)),r&2){let a=i.$implicit;l(),m("color",a),l(),S(`
                A simple `,a,` list group item
              `)}}function X(r,i){if(r&1&&(e(0,`
              `),t(1,"button",42),e(2),t(3,"c-badge",43),e(4),n(),e(5,`
              `),n(),e(6,`
            `)),r&2){let a=i.$implicit,o=i.$index,u=i.$count;l(),m("disabled",o===u-1),l(),S(`
                `,a,`
                `),l(),m("color",o===u-1?"secondary":"primary"),l(),p(o+1)}}var H=class r{constructor(){this.formBuilder=h(M);this.breakpoints=[!0,"sm","md","lg","xl","xxl"];this.colors=["primary","secondary","success","danger","warning","info","light","dark"];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac","Vestibulum at eros"]}setValue(i){let a=this.checkBoxes.get(i)?.value,o=this.checkBoxes.getRawValue();o[i]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(i){return this.checkBoxes.get(i)}static{this.\u0275fac=function(a){return new(a||r)}}static{this.\u0275cmp=g({type:r,selectors:[["app-list-groups"]],decls:477,vars:3,consts:[["xs","12"],["href","components/list-group","title","List Group"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/list-group"],["cListGroup",""],["href","components/list-group/#active-items"],["href","components/list-group/#disabled-items"],["href","components/list-group/#links-and-buttons"],["href","components/list-group/#flush"],["cListGroup","","flush",""],["href","components/list-group/#contextual-classes"],["cListGroup","",1,"mb-3"],[1,"text-body-secondary","small","mt-1"],["href","components/list-group/#with-badges"],["href","https://coreui.io/docs/utilities/flex/"],["href","components/list-group/#custom-content"],["cListGroupItem","","href","",3,"active"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],["cListGroupItem","","href",""],[1,"text-body-secondary"],["href","components/list-group/#checkboxes-and-radios"],["cForm","",3,"ngSubmit","formGroup"],["cListGroup","",3,"flush"],["cListGroupItem","","type","button",3,"click"],["cFormCheckInput","","formControlName","one","type","checkbox"],["cFormCheckLabel",""],["cListGroupItem","",2,"cursor","pointer"],["cFormCheckInput","","formControlName","two","type","checkbox"],[1,"ms-1"],["cListGroupItem",""],["cFormCheckInput","","formControlName","three","type","checkbox"],["cFormCheckInput","","formControlName","four","type","checkbox"],["cFormCheckInput","","formControlName","five","type","checkbox"],["cButton","","type","submit",1,"mt-3"],["cListGroupItem","",3,"active"],["cListGroupItem","",3,"disabled"],["href","","cListGroupItem","",3,"active","disabled"],["cListGroup","",1,"mb-2",3,"horizontal"],["cListGroupItem","",3,"color"],["cListGroupItem","","href","",3,"color"],["cListGroupItem","",1,"d-flex","justify-content-between","align-items-center",3,"disabled"],["shape","rounded-pill",3,"color"]],template:function(a,o){a&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),x(4,"app-docs-components",1),e(5,`
    `),t(6,"c-card",2),e(7,`
      `),t(8,"c-card-header"),e(9,`
        `),t(10,"strong"),e(11,"Angular List Group"),n(),e(12," "),t(13,"small"),e(14,"Basic example"),n(),e(15,`
      `),n(),e(16,`
      `),t(17,"c-card-body"),e(18,`
        `),t(19,"p",3),e(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),n(),e(21,`
        `),t(22,"app-docs-example",4),e(23,`
          `),t(24,"ul",5),e(25,`
            `),s(26,P,4,1,null,null,d),n(),e(28,`
        `),n(),e(29,`
      `),n(),e(30,`
    `),n(),e(31,`
  `),n(),e(32,`
  `),t(33,"c-col",0),e(34,`
    `),t(35,"c-card",2),e(36,`
      `),t(37,"c-card-header"),e(38,`
        `),t(39,"strong"),e(40,"Angular List Group"),n(),e(41," "),t(42,"small"),e(43,"Active items"),n(),e(44,`
      `),n(),e(45,`
      `),t(46,"c-card-body"),e(47,`
        `),t(48,"p",3),e(49,`
          Add `),t(50,"code"),e(51,"active"),n(),e(52,` boolean property to a
          `),t(53,"code"),e(54,"cListGroupItem"),n(),e(55,` to show the current active selection.
        `),n(),e(56,`
        `),t(57,"app-docs-example",6),e(58,`
          `),t(59,"ul",5),e(60,`
            `),s(61,R,4,2,null,null,d),n(),e(63,`
        `),n(),e(64,`
      `),n(),e(65,`
    `),n(),e(66,`
  `),n(),e(67,`
  `),t(68,"c-col",0),e(69,`
    `),t(70,"c-card",2),e(71,`
      `),t(72,"c-card-header"),e(73,`
        `),t(74,"strong"),e(75,"Angular List Group"),n(),e(76," "),t(77,"small"),e(78,"Disabled items"),n(),e(79,`
      `),n(),e(80,`
      `),t(81,"c-card-body"),e(82,`
        `),t(83,"p",3),e(84,`
          Add `),t(85,"code"),e(86,"disabled"),n(),e(87,` boolean property to a
          `),t(88,"code"),e(89,"cListGroupItem"),n(),e(90,` to make it appear disabled.
        `),n(),e(91,`
        `),t(92,"app-docs-example",7),e(93,`
          `),t(94,"div",5),e(95,`
            `),s(96,W,4,2,null,null,d),n(),e(98,`
        `),n(),e(99,`
      `),n(),e(100,`
    `),n(),e(101,`
  `),n(),e(102,`
  `),t(103,"c-col",0),e(104,`
    `),t(105,"c-card",2),e(106,`
      `),t(107,"c-card-header"),e(108,`
        `),t(109,"strong"),e(110,"Angular List Group"),n(),e(111," "),t(112,"small"),e(113,"Links and buttons"),n(),e(114,`
      `),n(),e(115,`
      `),t(116,"c-card-body"),e(117,`
        `),t(118,"p",3),e(119,`
          Use `),t(120,"code"),e(121,"<a>"),n(),e(122,"s or "),t(123,"code"),e(124,"<button>"),n(),e(125,`s to create
          `),t(126,"em"),e(127,"actionable"),n(),e(128,` list group items with hover, disabled, and active
          states with `),t(129,"code"),e(130,"a"),n(),e(131," or "),t(132,"code"),e(133,"button"),n(),e(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),t(135,"code"),e(136,"<li>"),n(),e(137,` or
          `),t(138,"code"),e(139,"<div>"),n(),e(140,`) don't provide a click or tap affordance.
        `),n(),e(141,`
        `),t(142,"app-docs-example",8),e(143,`
          `),t(144,"div",5),e(145,`
            `),s(146,q,4,3,null,null,d),n(),e(148,`
        `),n(),e(149,`
      `),n(),e(150,`
    `),n(),e(151,`
  `),n(),e(152,`
  `),t(153,"c-col",0),e(154,`
    `),t(155,"c-card",2),e(156,`
      `),t(157,"c-card-header"),e(158,`
        `),t(159,"strong"),e(160,"Angular List Group"),n(),e(161," "),t(162,"small"),e(163,"Flush"),n(),e(164,`
      `),n(),e(165,`
      `),t(166,"c-card-body"),e(167,`
        `),t(168,"p",3),e(169,`
          Add `),t(170,"code"),e(171,"flush"),n(),e(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),n(),e(173,`
        `),t(174,"app-docs-example",9),e(175,`
          `),t(176,"ul",10),e(177,`
            `),s(178,O,4,1,null,null,d),n(),e(180,`
        `),n(),e(181,`
      `),n(),e(182,`
    `),n(),e(183,`
  `),n(),e(184,`
  `),t(185,"c-col",0),e(186,`
    `),t(187,"c-card",2),e(188,`
      `),t(189,"c-card-header"),e(190,`
        `),t(191,"strong"),e(192,"Angular List Group"),n(),e(193," "),t(194,"small"),e(195,"Horizontal"),n(),e(196,`
      `),n(),e(197,`
      `),t(198,"c-card-body"),e(199,`
        `),t(200,"p",3),e(201,`
          Add `),t(202,"code"),e(203,'layout="horizontal"'),n(),e(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),x(205,"br"),e(206,`
          Alternatively, choose a responsive variant
          `),t(207,"code"),e(208,'[horizontal]="sm | md | lg | xl | xxl"'),n(),e(209,`
          to make a list group horizontal starting at that breakpoint's
          `),t(210,"code"),e(211,"min-width"),n(),e(212,". "),x(213,"br"),e(214,`
          Currently `),t(215,"strong"),e(216,"horizontal list groups cannot be combined with flush list groups."),n(),e(217,`
        `),n(),e(218,`
        `),t(219,"app-docs-example",9),e(220,`
          `),s(221,J,13,1,null,null,d),n(),e(223,`
      `),n(),e(224,`
    `),n(),e(225,`
  `),n(),e(226,`
  `),t(227,"c-col",0),e(228,`
    `),t(229,"c-card",2),e(230,`
      `),t(231,"c-card-header"),e(232,`
        `),t(233,"strong"),e(234,"Angular List Group"),n(),e(235," "),t(236,"small"),e(237,"Contextual classes"),n(),e(238,`
      `),n(),e(239,`
      `),t(240,"c-card-body"),e(241,`
        `),t(242,"p",3),e(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),n(),e(244,`
        `),t(245,"app-docs-example",11),e(246,`
          `),t(247,"ul",12),e(248,`
            `),s(249,K,4,2,null,null,d),n(),e(251,`
        `),n(),e(252,`
        `),t(253,"p",13),e(254,`
          Contextual classes also work with `),t(255,"code"),e(256,"<a>"),n(),e(257,` or
          `),t(258,"code"),e(259,"<button>"),n(),e(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),t(261,"code"),e(262,"active"),n(),e(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),n(),e(264,`
        `),t(265,"app-docs-example",11),e(266,`
          `),t(267,"div",5),e(268,`
            `),s(269,Q,4,2,null,null,d),n(),e(271,`
        `),n(),e(272,`
      `),n(),e(273,`
    `),n(),e(274,`
  `),n(),e(275,`
  `),t(276,"c-col",0),e(277,`
    `),t(278,"c-card",2),e(279,`
      `),t(280,"c-card-header"),e(281,`
        `),t(282,"strong"),e(283,"Angular List Group"),n(),e(284," "),t(285,"small"),e(286,"With badges"),n(),e(287,`
      `),n(),e(288,`
      `),t(289,"c-card-body"),e(290,`
        `),t(291,"p",3),e(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),n(),e(293,`
        `),t(294,"app-docs-example",14),e(295,`
          `),t(296,"div",5),e(297,`
            `),s(298,X,7,4,null,null,d),n(),e(300,`
        `),n(),e(301,`
      `),n(),e(302,`
    `),n(),e(303,`
  `),n(),e(304,`
  `),t(305,"c-col",0),e(306,`
    `),t(307,"c-card",2),e(308,`
      `),t(309,"c-card-header"),e(310,`
        `),t(311,"strong"),e(312,"Angular List Group"),n(),e(313," "),t(314,"small"),e(315,"Custom content"),n(),e(316,`
      `),n(),e(317,`
      `),t(318,"c-card-body"),e(319,`
        `),t(320,"p",3),e(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),t(322,"a",15),e(323,"flexbox utilities"),n(),e(324,`.
        `),n(),e(325,`
        `),t(326,"app-docs-example",16),e(327,`
          `),t(328,"div",5),e(329,`
            `),t(330,"a",17),e(331,`
              `),t(332,"div",18),e(333,`
                `),t(334,"h5",19),e(335,"List group item heading"),n(),e(336,`
                `),t(337,"small"),e(338,"3 days ago"),n(),e(339,`
              `),n(),e(340,`
              `),t(341,"p",19),e(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),n(),e(343,`
              `),t(344,"small"),e(345,"Donec id elit non mi porta."),n(),e(346,`
            `),n(),e(347,`
            `),t(348,"a",20),e(349,`
              `),t(350,"div",18),e(351,`
                `),t(352,"h5",19),e(353,"List group item heading"),n(),e(354,`
                `),t(355,"small",21),e(356,"3 days ago"),n(),e(357,`
              `),n(),e(358,`
              `),t(359,"p",19),e(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),n(),e(361,`
              `),t(362,"small",21),e(363,"Donec id elit non mi porta."),n(),e(364,`
            `),n(),e(365,`
            `),t(366,"a",20),e(367,`
              `),t(368,"div",18),e(369,`
                `),t(370,"h5",19),e(371,"List group item heading"),n(),e(372,`
                `),t(373,"small",21),e(374,"3 days ago"),n(),e(375,`
              `),n(),e(376,`
              `),t(377,"p",19),e(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),n(),e(379,`
              `),t(380,"small",21),e(381,"Donec id elit non mi porta."),n(),e(382,`
            `),n(),e(383,`
          `),n(),e(384,`
        `),n(),e(385,`
      `),n(),e(386,`
    `),n(),e(387,`
  `),n(),e(388,`
  `),t(389,"c-col",0),e(390,`
    `),t(391,"c-card",2),e(392,`
      `),t(393,"c-card-header"),e(394,`
        `),t(395,"strong"),e(396,"Angular List Group"),n(),e(397," "),t(398,"small"),e(399,"Checkboxes and radios"),n(),e(400,`
      `),n(),e(401,`
      `),t(402,"c-card-body"),e(403,`
        `),t(404,"p",3),e(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),n(),e(406,`
        `),t(407,"app-docs-example",22),e(408,`
          `),t(409,"form",23),E("ngSubmit",function(){return o.logValue()}),e(410,`
            `),t(411,"ul",24),e(412,`
              `),t(413,"button",25),E("click",function(){return o.setValue("one")}),e(414,`
                `),t(415,"c-form-check"),e(416,`
                  `),x(417,"input",26),e(418,`
                  `),t(419,"label",27),e(420,"Cras justo odio"),n(),e(421,`
                `),n(),e(422,`
              `),n(),e(423,`
              `),t(424,"label",28),e(425,`
                `),t(426,"c-form-check"),e(427,`
                  `),x(428,"input",29),e(429,`
                  `),t(430,"span",30),e(431,"Dapibus ac facilisis in"),n(),e(432,`
                `),n(),e(433,`
              `),n(),e(434,`
              `),t(435,"li",31),e(436,`
                `),t(437,"c-form-check"),e(438,`
                  `),x(439,"input",32),e(440,`
                  `),t(441,"label",27),e(442,"Morbi leo risus"),n(),e(443,`
                `),n(),e(444,`
              `),n(),e(445,`
              `),t(446,"li",31),e(447,`
                `),t(448,"c-form-check"),e(449,`
                  `),x(450,"input",33),e(451,`
                  `),t(452,"label",27),e(453,"Orta ac consectetur ac"),n(),e(454,`
                `),n(),e(455,`
              `),n(),e(456,`
              `),t(457,"li",31),e(458,`
                `),t(459,"c-form-check"),e(460,`
                  `),x(461,"input",34),e(462,`
                  `),t(463,"label",27),e(464,"Vestibulum at eros"),n(),e(465,`
                `),n(),e(466,`
              `),n(),e(467,`
            `),n(),e(468,`
            `),t(469,"button",35),e(470,"Submit"),n(),e(471,`
          `),n(),e(472,`
        `),n(),e(473,`
      `),n(),e(474,`
    `),n(),e(475,`
  `),n(),e(476,`
`),n()),a&2&&(l(26),c(o.sampleList),l(35),c(o.sampleList),l(35),c(o.sampleList),l(50),c(o.sampleList),l(32),c(o.sampleList),l(43),c(o.breakpoints),l(28),c(o.colors),l(20),c(o.colors),l(29),c(o.sampleList),l(32),m("active",!0),l(79),m("formGroup",o.checkBoxes),l(2),m("flush",!0))},dependencies:[w,I,v,C,y,j,B,F,b,z,$,T,A,D,V,N,k,_,G,L,f,U],encapsulation:2})}};export{H as ListGroupsComponent};
