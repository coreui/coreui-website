import{b as H}from"./chunk-YAMMHAYR.js";import"./chunk-XXJZGYXX.js";import{$ as g,Ac as w,Da as h,Gd as N,Hd as z,I as f,Kc as F,Md as j,Nd as U,Oa as e,Pa as S,Qa as E,Rc as B,Sc as T,Vc as A,Xa as b,_ as r,_b as v,ac as y,bc as C,ic as k,kc as _,ma as d,mc as L,od as D,qc as G,sc as I,ta as c,td as $,ua as x,ud as V,va as p,vd as M,wa as t,xa as i,ya as u}from"./chunk-5R6ANFCE.js";import"./chunk-RLASGPT3.js";function P(l,n){if(l&1&&(e(0,`
              `),t(1,"li",30),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit;r(2),S(a)}}function W(l,n){if(l&1&&(e(0,`
              `),t(1,"li",35),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit,m=n.$index;r(),d("active",m===0),r(),S(a)}}function q(l,n){if(l&1&&(e(0,`
              `),t(1,"button",36),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit,m=n.$index;r(),d("disabled",m===0),r(),S(a)}}function O(l,n){if(l&1&&(e(0,`
              `),t(1,"a",37),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit,m=n.$index,s=n.$count;r(),d("active",m===0)("disabled",m===s-1),r(),S(a)}}function J(l,n){if(l&1&&(e(0,`
              `),t(1,"li",30),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit;r(2),S(a)}}function K(l,n){if(l&1&&(e(0,`
            `),t(1,"ul",38),e(2,`
              `),t(3,"li",30),e(4,"Cras justo odio"),i(),e(5,`
              `),t(6,"li",30),e(7,"Dapibus ac facilisis in"),i(),e(8,`
              `),t(9,"li",30),e(10,"Morbi leo risus"),i(),e(11,`
            `),i(),e(12,`
          `)),l&2){let a=n.$implicit;r(),d("horizontal",a)}}function Q(l,n){if(l&1&&(e(0,`
              `),t(1,"li",39),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit;r(),d("color",a),r(),E(`
                A simple `,a,` list group item
              `)}}function X(l,n){if(l&1&&(e(0,`
              `),t(1,"a",40),e(2),i(),e(3,`
            `)),l&2){let a=n.$implicit;r(),d("color",a),r(),E(`
                A simple `,a,` list group item
              `)}}function Y(l,n){if(l&1&&(e(0,`
              `),t(1,"button",41),e(2),t(3,"c-badge",42),e(4),i(),e(5,`
              `),i(),e(6,`
            `)),l&2){let a=n.$implicit,m=n.$index,s=n.$index,o=n.$count;r(),d("disabled",s===o-1),r(),E(`
                `,a,`
                `),r(),d("color",s===o-1?"secondary":"primary"),r(),S(m+1)}}var re=(()=>{let n=class n{constructor(m){this.formBuilder=m,this.breakpoints=[!0,"sm","md","lg","xl","xxl"],this.colors=["primary","secondary","success","danger","warning","info","light","dark"],this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}}),this.sampleList=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac","Vestibulum at eros"]}setValue(m){let s=this.checkBoxes.get(m)?.value,o=this.checkBoxes.getRawValue();o[m]=!s,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(m){return this.checkBoxes.get(m)}};n.\u0275fac=function(s){return new(s||n)(g(G))},n.\u0275cmp=f({type:n,selectors:[["app-list-groups"]],standalone:!0,features:[b],decls:475,vars:3,consts:[["xs","12"],[1,"mb-4"],[1,"text-body-secondary","small"],["href","components/list-group"],["cListGroup",""],["href","components/list-group/#active-items"],["href","components/list-group/#disabled-items"],["href","components/list-group/#links-and-buttons"],["href","components/list-group/#flush"],["cListGroup","","flush",""],["href","components/list-group/#contextual-classes"],["cListGroup","",1,"mb-3"],[1,"text-body-secondary","small","mt-1"],["href","components/list-group/#with-badges"],["href","https://coreui.io/docs/utilities/flex/"],["href","components/list-group/#custom-content"],["cListGroupItem","","href","",3,"active"],[1,"d-flex","w-100","justify-content-between"],[1,"mb-1"],["cListGroupItem","","href",""],[1,"text-body-secondary"],["href","components/list-group/#checkboxes-and-radios"],["cForm","",3,"ngSubmit","formGroup"],["cListGroup","",3,"flush"],["cListGroupItem","","type","button",3,"click"],["cFormCheckInput","","formControlName","one","type","checkbox"],["cFormCheckLabel",""],["cListGroupItem","",2,"cursor","pointer"],["cFormCheckInput","","formControlName","two","type","checkbox"],[1,"ms-1"],["cListGroupItem",""],["cFormCheckInput","","formControlName","three","type","checkbox"],["cFormCheckInput","","formControlName","four","type","checkbox"],["cFormCheckInput","","formControlName","five","type","checkbox"],["cButton","","type","submit",1,"mt-3"],["cListGroupItem","",3,"active"],["cListGroupItem","",3,"disabled"],["href","","cListGroupItem","",3,"active","disabled"],["cListGroup","",1,"mb-2",3,"horizontal"],["cListGroupItem","",3,"color"],["cListGroupItem","","href","",3,"color"],["cListGroupItem","",1,"d-flex","justify-content-between","align-items-center",3,"disabled"],["shape","rounded-pill",3,"color"]],template:function(s,o){s&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",0),e(3,`
    `),t(4,"c-card",1),e(5,`
      `),t(6,"c-card-header"),e(7,`
        `),t(8,"strong"),e(9,"Angular List Group"),i(),e(10," "),t(11,"small"),e(12,"Basic example"),i(),e(13,`
      `),i(),e(14,`
      `),t(15,"c-card-body"),e(16,`
        `),t(17,"p",2),e(18,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),i(),e(19,`
        `),t(20,"app-docs-example",3),e(21,`
          `),t(22,"ul",4),e(23,`
            `),x(24,P,4,1,null,null,c),i(),e(26,`
        `),i(),e(27,`
      `),i(),e(28,`
    `),i(),e(29,`
  `),i(),e(30,`
  `),t(31,"c-col",0),e(32,`
    `),t(33,"c-card",1),e(34,`
      `),t(35,"c-card-header"),e(36,`
        `),t(37,"strong"),e(38,"Angular List Group"),i(),e(39," "),t(40,"small"),e(41,"Active items"),i(),e(42,`
      `),i(),e(43,`
      `),t(44,"c-card-body"),e(45,`
        `),t(46,"p",2),e(47,`
          Add `),t(48,"code"),e(49,"active"),i(),e(50,` boolean property to a
          `),t(51,"code"),e(52,"cListGroupItem"),i(),e(53,` to show the current active selection.
        `),i(),e(54,`
        `),t(55,"app-docs-example",5),e(56,`
          `),t(57,"ul",4),e(58,`
            `),x(59,W,4,2,null,null,c),i(),e(61,`
        `),i(),e(62,`
      `),i(),e(63,`
    `),i(),e(64,`
  `),i(),e(65,`
  `),t(66,"c-col",0),e(67,`
    `),t(68,"c-card",1),e(69,`
      `),t(70,"c-card-header"),e(71,`
        `),t(72,"strong"),e(73,"Angular List Group"),i(),e(74," "),t(75,"small"),e(76,"Disabled items"),i(),e(77,`
      `),i(),e(78,`
      `),t(79,"c-card-body"),e(80,`
        `),t(81,"p",2),e(82,`
          Add `),t(83,"code"),e(84,"disabled"),i(),e(85,` boolean property to a
          `),t(86,"code"),e(87,"cListGroupItem"),i(),e(88,` to make it appear disabled.
        `),i(),e(89,`
        `),t(90,"app-docs-example",6),e(91,`
          `),t(92,"div",4),e(93,`
            `),x(94,q,4,2,null,null,c),i(),e(96,`
        `),i(),e(97,`
      `),i(),e(98,`
    `),i(),e(99,`
  `),i(),e(100,`
  `),t(101,"c-col",0),e(102,`
    `),t(103,"c-card",1),e(104,`
      `),t(105,"c-card-header"),e(106,`
        `),t(107,"strong"),e(108,"Angular List Group"),i(),e(109," "),t(110,"small"),e(111,"Links and buttons"),i(),e(112,`
      `),i(),e(113,`
      `),t(114,"c-card-body"),e(115,`
        `),t(116,"p",2),e(117,`
          Use `),t(118,"code"),e(119,"<a>"),i(),e(120,"s or "),t(121,"code"),e(122,"<button>"),i(),e(123,`s to create
          `),t(124,"em"),e(125,"actionable"),i(),e(126,` list group items with hover, disabled, and active
          states with `),t(127,"code"),e(128,"a"),i(),e(129," or "),t(130,"code"),e(131,"button"),i(),e(132,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),t(133,"code"),e(134,"<li>"),i(),e(135,` or
          `),t(136,"code"),e(137,"<div>"),i(),e(138,`) don't provide a click or tap affordance.
        `),i(),e(139,`
        `),t(140,"app-docs-example",7),e(141,`
          `),t(142,"div",4),e(143,`
            `),x(144,O,4,3,null,null,c),i(),e(146,`
        `),i(),e(147,`
      `),i(),e(148,`
    `),i(),e(149,`
  `),i(),e(150,`
  `),t(151,"c-col",0),e(152,`
    `),t(153,"c-card",1),e(154,`
      `),t(155,"c-card-header"),e(156,`
        `),t(157,"strong"),e(158,"Angular List Group"),i(),e(159," "),t(160,"small"),e(161,"Flush"),i(),e(162,`
      `),i(),e(163,`
      `),t(164,"c-card-body"),e(165,`
        `),t(166,"p",2),e(167,`
          Add `),t(168,"code"),e(169,"flush"),i(),e(170,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),i(),e(171,`
        `),t(172,"app-docs-example",8),e(173,`
          `),t(174,"ul",9),e(175,`
            `),x(176,J,4,1,null,null,c),i(),e(178,`
        `),i(),e(179,`
      `),i(),e(180,`
    `),i(),e(181,`
  `),i(),e(182,`
  `),t(183,"c-col",0),e(184,`
    `),t(185,"c-card",1),e(186,`
      `),t(187,"c-card-header"),e(188,`
        `),t(189,"strong"),e(190,"Angular List Group"),i(),e(191," "),t(192,"small"),e(193,"Horizontal"),i(),e(194,`
      `),i(),e(195,`
      `),t(196,"c-card-body"),e(197,`
        `),t(198,"p",2),e(199,`
          Add `),t(200,"code"),e(201,'layout="horizontal"'),i(),e(202,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),u(203,"br"),e(204,`
          Alternatively, choose a responsive variant
          `),t(205,"code"),e(206,'[horizontal]="sm | md | lg | xl | xxl"'),i(),e(207,`
          to make a list group horizontal starting at that breakpoint's
          `),t(208,"code"),e(209,"min-width"),i(),e(210,". "),u(211,"br"),e(212,`
          Currently `),t(213,"strong"),e(214,"horizontal list groups cannot be combined with flush list groups."),i(),e(215,`
        `),i(),e(216,`
        `),t(217,"app-docs-example",8),e(218,`
          `),x(219,K,13,1,null,null,c),i(),e(221,`
      `),i(),e(222,`
    `),i(),e(223,`
  `),i(),e(224,`
  `),t(225,"c-col",0),e(226,`
    `),t(227,"c-card",1),e(228,`
      `),t(229,"c-card-header"),e(230,`
        `),t(231,"strong"),e(232,"Angular List Group"),i(),e(233," "),t(234,"small"),e(235,"Contextual classes"),i(),e(236,`
      `),i(),e(237,`
      `),t(238,"c-card-body"),e(239,`
        `),t(240,"p",2),e(241,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),i(),e(242,`
        `),t(243,"app-docs-example",10),e(244,`
          `),t(245,"ul",11),e(246,`
            `),x(247,Q,4,2,null,null,c),i(),e(249,`
        `),i(),e(250,`
        `),t(251,"p",12),e(252,`
          Contextual classes also work with `),t(253,"code"),e(254,"<a>"),i(),e(255,` or
          `),t(256,"code"),e(257,"<button>"),i(),e(258,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),t(259,"code"),e(260,"active"),i(),e(261,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),i(),e(262,`
        `),t(263,"app-docs-example",10),e(264,`
          `),t(265,"div",4),e(266,`
            `),x(267,X,4,2,null,null,c),i(),e(269,`
        `),i(),e(270,`
      `),i(),e(271,`
    `),i(),e(272,`
  `),i(),e(273,`
  `),t(274,"c-col",0),e(275,`
    `),t(276,"c-card",1),e(277,`
      `),t(278,"c-card-header"),e(279,`
        `),t(280,"strong"),e(281,"Angular List Group"),i(),e(282," "),t(283,"small"),e(284,"With badges"),i(),e(285,`
      `),i(),e(286,`
      `),t(287,"c-card-body"),e(288,`
        `),t(289,"p",2),e(290,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),i(),e(291,`
        `),t(292,"app-docs-example",13),e(293,`
          `),t(294,"div",4),e(295,`
            `),x(296,Y,7,4,null,null,c),i(),e(298,`
        `),i(),e(299,`
      `),i(),e(300,`
    `),i(),e(301,`
  `),i(),e(302,`
  `),t(303,"c-col",0),e(304,`
    `),t(305,"c-card",1),e(306,`
      `),t(307,"c-card-header"),e(308,`
        `),t(309,"strong"),e(310,"Angular List Group"),i(),e(311," "),t(312,"small"),e(313,"Custom content"),i(),e(314,`
      `),i(),e(315,`
      `),t(316,"c-card-body"),e(317,`
        `),t(318,"p",2),e(319,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),t(320,"a",14),e(321,"flexbox utilities"),i(),e(322,`.
        `),i(),e(323,`
        `),t(324,"app-docs-example",15),e(325,`
          `),t(326,"div",4),e(327,`
            `),t(328,"a",16),e(329,`
              `),t(330,"div",17),e(331,`
                `),t(332,"h5",18),e(333,"List group item heading"),i(),e(334,`
                `),t(335,"small"),e(336,"3 days ago"),i(),e(337,`
              `),i(),e(338,`
              `),t(339,"p",18),e(340,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),i(),e(341,`
              `),t(342,"small"),e(343,"Donec id elit non mi porta."),i(),e(344,`
            `),i(),e(345,`
            `),t(346,"a",19),e(347,`
              `),t(348,"div",17),e(349,`
                `),t(350,"h5",18),e(351,"List group item heading"),i(),e(352,`
                `),t(353,"small",20),e(354,"3 days ago"),i(),e(355,`
              `),i(),e(356,`
              `),t(357,"p",18),e(358,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),i(),e(359,`
              `),t(360,"small",20),e(361,"Donec id elit non mi porta."),i(),e(362,`
            `),i(),e(363,`
            `),t(364,"a",19),e(365,`
              `),t(366,"div",17),e(367,`
                `),t(368,"h5",18),e(369,"List group item heading"),i(),e(370,`
                `),t(371,"small",20),e(372,"3 days ago"),i(),e(373,`
              `),i(),e(374,`
              `),t(375,"p",18),e(376,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),i(),e(377,`
              `),t(378,"small",20),e(379,"Donec id elit non mi porta."),i(),e(380,`
            `),i(),e(381,`
          `),i(),e(382,`
        `),i(),e(383,`
      `),i(),e(384,`
    `),i(),e(385,`
  `),i(),e(386,`
  `),t(387,"c-col",0),e(388,`
    `),t(389,"c-card",1),e(390,`
      `),t(391,"c-card-header"),e(392,`
        `),t(393,"strong"),e(394,"Angular List Group"),i(),e(395," "),t(396,"small"),e(397,"Checkboxes and radios"),i(),e(398,`
      `),i(),e(399,`
      `),t(400,"c-card-body"),e(401,`
        `),t(402,"p",2),e(403,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),i(),e(404,`
        `),t(405,"app-docs-example",21),e(406,`
          `),t(407,"form",22),h("ngSubmit",function(){return o.logValue()}),e(408,`
            `),t(409,"ul",23),e(410,`
              `),t(411,"button",24),h("click",function(){return o.setValue("one")}),e(412,`
                `),t(413,"c-form-check"),e(414,`
                  `),u(415,"input",25),e(416,`
                  `),t(417,"label",26),e(418,"Cras justo odio"),i(),e(419,`
                `),i(),e(420,`
              `),i(),e(421,`
              `),t(422,"label",27),e(423,`
                `),t(424,"c-form-check"),e(425,`
                  `),u(426,"input",28),e(427,`
                  `),t(428,"span",29),e(429,"Dapibus ac facilisis in"),i(),e(430,`
                `),i(),e(431,`
              `),i(),e(432,`
              `),t(433,"li",30),e(434,`
                `),t(435,"c-form-check"),e(436,`
                  `),u(437,"input",31),e(438,`
                  `),t(439,"label",26),e(440,"Morbi leo risus"),i(),e(441,`
                `),i(),e(442,`
              `),i(),e(443,`
              `),t(444,"li",30),e(445,`
                `),t(446,"c-form-check"),e(447,`
                  `),u(448,"input",32),e(449,`
                  `),t(450,"label",26),e(451,"Orta ac consectetur ac"),i(),e(452,`
                `),i(),e(453,`
              `),i(),e(454,`
              `),t(455,"li",30),e(456,`
                `),t(457,"c-form-check"),e(458,`
                  `),u(459,"input",33),e(460,`
                  `),t(461,"label",26),e(462,"Vestibulum at eros"),i(),e(463,`
                `),i(),e(464,`
              `),i(),e(465,`
            `),i(),e(466,`
            `),t(467,"button",34),e(468,"Submit"),i(),e(469,`
          `),i(),e(470,`
        `),i(),e(471,`
      `),i(),e(472,`
    `),i(),e(473,`
  `),i(),e(474,`
`),i()),s&2&&(r(24),p(o.sampleList),r(35),p(o.sampleList),r(35),p(o.sampleList),r(50),p(o.sampleList),r(32),p(o.sampleList),r(43),p(o.breakpoints),r(28),p(o.colors),r(20),p(o.colors),r(29),p(o.sampleList),r(32),d("active",!0),r(79),d("formGroup",o.checkBoxes),r(2),d("flush",!0))},dependencies:[z,N,B,A,T,H,j,U,F,I,k,v,y,C,_,L,D,V,M,$,w]});let l=n;return l})();export{re as ListGroupsComponent};
