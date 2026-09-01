import{An as Zee,C as Cw,D as Do,Di as sN,Dt as P,Et as Ote,Ji as vte,Jn as bo,Nn as _e,Si as rP,Ut as Rte,Vr as ke,Wn as be,X as I,Yn as bte,Yt as Ste,Zn as cN,an as V,ar as dP,ei as mte,it as JL,or as da,ua as yo,un as Vn,ut as L,v as C,vr as f,z as Fe,zi as ua}from"./main-AXUR3WFK.js";import{t as E}from"./chunk-DrG-2cCJ.js";import{t as c}from"./chunk-Dishkh7c.js";import{_ as on,a as Ln,d as Zn,h as gn,o as Mt,r as Gn,s as Tn,v as qn}from"./chunk-rVXNikik.js";function W(r,l){if(r&1&&(be(0,`
              `),L(1,`li`,31),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit;C(2),Fe(a)}}function q(r,l){if(r&1&&(be(0,`
              `),L(1,`li`,36),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;C(),V(`active`,o===0),C(),Fe(a)}}function O(r,l){if(r&1&&(be(0,`
              `),L(1,`button`,37),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;C(),V(`disabled`,o===0),C(),Fe(a)}}function J(r,l){if(r&1&&(be(0,`
              `),L(1,`a`,38),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;C(),V(`active`,o===0)(`disabled`,o===u-1),C(),Fe(a)}}function K(r,l){if(r&1&&(be(0,`
              `),L(1,`li`,31),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit;C(2),Fe(a)}}function Q(r,l){if(r&1&&(be(0,`
            `),L(1,`ul`,39),be(2,`
              `),L(3,`li`,31),be(4,`Cras justo odio`),P(),be(5,`
              `),L(6,`li`,31),be(7,`Dapibus ac facilisis in`),P(),be(8,`
              `),L(9,`li`,31),be(10,`Morbi leo risus`),P(),be(11,`
            `),P(),be(12,`
          `)),r&2){let a=l.$implicit;C(),V(`horizontal`,a)}}function X(r,l){if(r&1&&(be(0,`
              `),L(1,`li`,40),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit;C(),V(`color`,a),C(),Vn(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(be(0,`
              `),L(1,`a`,41),be(2),P(),be(3,`
            `)),r&2){let a=l.$implicit;C(),V(`color`,a),C(),Vn(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(be(0,`
              `),L(1,`button`,42),be(2),L(3,`c-badge`,43),be(4),P(),be(5,`
              `),P(),be(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;C(),V(`disabled`,o===u-1),C(),Vn(`
                `,a,`
                `),C(),V(`color`,o===u-1?`secondary`:`primary`),C(),Fe(o+1)}}var R=class r{constructor(){this.formBuilder=f(qn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=I({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(L(0,`c-row`),be(1,`
  `),L(2,`c-col`,0),be(3,`
    `),ke(4,`app-docs-components`,1),be(5,`
    `),L(6,`c-card`,2),be(7,`
      `),L(8,`c-card-header`),be(9,`
        `),L(10,`strong`),be(11,`Angular List Group`),P(),be(12,` `),L(13,`small`),be(14,`Basic example`),P(),be(15,`
      `),P(),be(16,`
      `),L(17,`c-card-body`),be(18,`
        `),L(19,`p`,3),be(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),P(),be(21,`
        `),L(22,`app-docs-example`,4),be(23,`
          `),L(24,`ul`,5),be(25,`
            `),bo(26,W,4,1,null,null,yo),P(),be(28,`
        `),P(),be(29,`
      `),P(),be(30,`
    `),P(),be(31,`
  `),P(),be(32,`
  `),L(33,`c-col`,0),be(34,`
    `),L(35,`c-card`,2),be(36,`
      `),L(37,`c-card-header`),be(38,`
        `),L(39,`strong`),be(40,`Angular List Group`),P(),be(41,` `),L(42,`small`),be(43,`Active items`),P(),be(44,`
      `),P(),be(45,`
      `),L(46,`c-card-body`),be(47,`
        `),L(48,`p`,3),be(49,`
          Add `),L(50,`code`),be(51,`active`),P(),be(52,` boolean property to a
          `),L(53,`code`),be(54,`cListGroupItem`),P(),be(55,` to show the current active selection.
        `),P(),be(56,`
        `),L(57,`app-docs-example`,6),be(58,`
          `),L(59,`ul`,5),be(60,`
            `),bo(61,q,4,2,null,null,yo),P(),be(63,`
        `),P(),be(64,`
      `),P(),be(65,`
    `),P(),be(66,`
  `),P(),be(67,`
  `),L(68,`c-col`,0),be(69,`
    `),L(70,`c-card`,2),be(71,`
      `),L(72,`c-card-header`),be(73,`
        `),L(74,`strong`),be(75,`Angular List Group`),P(),be(76,` `),L(77,`small`),be(78,`Disabled items`),P(),be(79,`
      `),P(),be(80,`
      `),L(81,`c-card-body`),be(82,`
        `),L(83,`p`,3),be(84,`
          Add `),L(85,`code`),be(86,`disabled`),P(),be(87,` boolean property to a
          `),L(88,`code`),be(89,`cListGroupItem`),P(),be(90,` to make it appear disabled.
        `),P(),be(91,`
        `),L(92,`app-docs-example`,7),be(93,`
          `),L(94,`div`,5),be(95,`
            `),bo(96,O,4,2,null,null,yo),P(),be(98,`
        `),P(),be(99,`
      `),P(),be(100,`
    `),P(),be(101,`
  `),P(),be(102,`
  `),L(103,`c-col`,0),be(104,`
    `),L(105,`c-card`,2),be(106,`
      `),L(107,`c-card-header`),be(108,`
        `),L(109,`strong`),be(110,`Angular List Group`),P(),be(111,` `),L(112,`small`),be(113,`Links and buttons`),P(),be(114,`
      `),P(),be(115,`
      `),L(116,`c-card-body`),be(117,`
        `),L(118,`p`,3),be(119,`
          Use `),L(120,`code`),be(121,`<a>`),P(),be(122,`s or `),L(123,`code`),be(124,`<button>`),P(),be(125,`s to create
          `),L(126,`em`),be(127,`actionable`),P(),be(128,` list group items with hover, disabled, and active
          states with `),L(129,`code`),be(130,`a`),P(),be(131,` or `),L(132,`code`),be(133,`button`),P(),be(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),L(135,`code`),be(136,`<li>`),P(),be(137,` or
          `),L(138,`code`),be(139,`<div>`),P(),be(140,`) don't provide a click or tap affordance.
        `),P(),be(141,`
        `),L(142,`app-docs-example`,8),be(143,`
          `),L(144,`div`,5),be(145,`
            `),bo(146,J,4,3,null,null,yo),P(),be(148,`
        `),P(),be(149,`
      `),P(),be(150,`
    `),P(),be(151,`
  `),P(),be(152,`
  `),L(153,`c-col`,0),be(154,`
    `),L(155,`c-card`,2),be(156,`
      `),L(157,`c-card-header`),be(158,`
        `),L(159,`strong`),be(160,`Angular List Group`),P(),be(161,` `),L(162,`small`),be(163,`Flush`),P(),be(164,`
      `),P(),be(165,`
      `),L(166,`c-card-body`),be(167,`
        `),L(168,`p`,3),be(169,`
          Add `),L(170,`code`),be(171,`flush`),P(),be(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),P(),be(173,`
        `),L(174,`app-docs-example`,9),be(175,`
          `),L(176,`ul`,10),be(177,`
            `),bo(178,K,4,1,null,null,yo),P(),be(180,`
        `),P(),be(181,`
      `),P(),be(182,`
    `),P(),be(183,`
  `),P(),be(184,`
  `),L(185,`c-col`,0),be(186,`
    `),L(187,`c-card`,2),be(188,`
      `),L(189,`c-card-header`),be(190,`
        `),L(191,`strong`),be(192,`Angular List Group`),P(),be(193,` `),L(194,`small`),be(195,`Horizontal`),P(),be(196,`
      `),P(),be(197,`
      `),L(198,`c-card-body`),be(199,`
        `),L(200,`p`,3),be(201,`
          Add `),L(202,`code`),be(203,`layout="horizontal"`),P(),be(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),ke(205,`br`),be(206,`
          Alternatively, choose a responsive variant
          `),L(207,`code`),be(208,`[horizontal]="sm | md | lg | xl | xxl"`),P(),be(209,`
          to make a list group horizontal starting at that breakpoint's
          `),L(210,`code`),be(211,`min-width`),P(),be(212,`. `),ke(213,`br`),be(214,`
          Currently `),L(215,`strong`),be(216,`horizontal list groups cannot be combined with flush list groups.`),P(),be(217,`
        `),P(),be(218,`
        `),L(219,`app-docs-example`,9),be(220,`
          `),bo(221,Q,13,1,null,null,yo),P(),be(223,`
      `),P(),be(224,`
    `),P(),be(225,`
  `),P(),be(226,`
  `),L(227,`c-col`,0),be(228,`
    `),L(229,`c-card`,2),be(230,`
      `),L(231,`c-card-header`),be(232,`
        `),L(233,`strong`),be(234,`Angular List Group`),P(),be(235,` `),L(236,`small`),be(237,`Contextual classes`),P(),be(238,`
      `),P(),be(239,`
      `),L(240,`c-card-body`),be(241,`
        `),L(242,`p`,3),be(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),P(),be(244,`
        `),L(245,`app-docs-example`,11),be(246,`
          `),L(247,`ul`,12),be(248,`
            `),bo(249,X,4,2,null,null,yo),P(),be(251,`
        `),P(),be(252,`
        `),L(253,`p`,13),be(254,`
          Contextual classes also work with `),L(255,`code`),be(256,`<a>`),P(),be(257,` or
          `),L(258,`code`),be(259,`<button>`),P(),be(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),L(261,`code`),be(262,`active`),P(),be(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),P(),be(264,`
        `),L(265,`app-docs-example`,11),be(266,`
          `),L(267,`div`,5),be(268,`
            `),bo(269,Y,4,2,null,null,yo),P(),be(271,`
        `),P(),be(272,`
      `),P(),be(273,`
    `),P(),be(274,`
  `),P(),be(275,`
  `),L(276,`c-col`,0),be(277,`
    `),L(278,`c-card`,2),be(279,`
      `),L(280,`c-card-header`),be(281,`
        `),L(282,`strong`),be(283,`Angular List Group`),P(),be(284,` `),L(285,`small`),be(286,`With badges`),P(),be(287,`
      `),P(),be(288,`
      `),L(289,`c-card-body`),be(290,`
        `),L(291,`p`,3),be(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),P(),be(293,`
        `),L(294,`app-docs-example`,14),be(295,`
          `),L(296,`div`,5),be(297,`
            `),bo(298,Z,7,4,null,null,yo),P(),be(300,`
        `),P(),be(301,`
      `),P(),be(302,`
    `),P(),be(303,`
  `),P(),be(304,`
  `),L(305,`c-col`,0),be(306,`
    `),L(307,`c-card`,2),be(308,`
      `),L(309,`c-card-header`),be(310,`
        `),L(311,`strong`),be(312,`Angular List Group`),P(),be(313,` `),L(314,`small`),be(315,`Custom content`),P(),be(316,`
      `),P(),be(317,`
      `),L(318,`c-card-body`),be(319,`
        `),L(320,`p`,3),be(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),L(322,`a`,15),be(323,`flexbox utilities`),P(),be(324,`.
        `),P(),be(325,`
        `),L(326,`app-docs-example`,16),be(327,`
          `),L(328,`div`,5),be(329,`
            `),L(330,`a`,17),be(331,`
              `),L(332,`div`,18),be(333,`
                `),L(334,`h5`,19),be(335,`List group item heading`),P(),be(336,`
                `),L(337,`small`),be(338,`3 days ago`),P(),be(339,`
              `),P(),be(340,`
              `),L(341,`p`,19),be(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),P(),be(343,`
              `),L(344,`small`),be(345,`Donec id elit non mi porta.`),P(),be(346,`
            `),P(),be(347,`
            `),L(348,`a`,20),be(349,`
              `),L(350,`div`,18),be(351,`
                `),L(352,`h5`,19),be(353,`List group item heading`),P(),be(354,`
                `),L(355,`small`,21),be(356,`3 days ago`),P(),be(357,`
              `),P(),be(358,`
              `),L(359,`p`,19),be(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),P(),be(361,`
              `),L(362,`small`,21),be(363,`Donec id elit non mi porta.`),P(),be(364,`
            `),P(),be(365,`
            `),L(366,`a`,20),be(367,`
              `),L(368,`div`,18),be(369,`
                `),L(370,`h5`,19),be(371,`List group item heading`),P(),be(372,`
                `),L(373,`small`,21),be(374,`3 days ago`),P(),be(375,`
              `),P(),be(376,`
              `),L(377,`p`,19),be(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),P(),be(379,`
              `),L(380,`small`,21),be(381,`Donec id elit non mi porta.`),P(),be(382,`
            `),P(),be(383,`
          `),P(),be(384,`
        `),P(),be(385,`
      `),P(),be(386,`
    `),P(),be(387,`
  `),P(),be(388,`
  `),L(389,`c-col`,0),be(390,`
    `),L(391,`c-card`,2),be(392,`
      `),L(393,`c-card-header`),be(394,`
        `),L(395,`strong`),be(396,`Angular List Group`),P(),be(397,` `),L(398,`small`),be(399,`Checkboxes and radios`),P(),be(400,`
      `),P(),be(401,`
      `),L(402,`c-card-body`),be(403,`
        `),L(404,`p`,3),be(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),P(),be(406,`
        `),L(407,`app-docs-example`,22),be(408,`
          `),L(409,`form`,23),_e(`ngSubmit`,function(){return o.logValue()}),be(410,`
            `),L(411,`ul`,24),be(412,`
              `),L(413,`button`,25),_e(`click`,function(){return o.setValue(`one`)}),be(414,`
                `),L(415,`c-form-check`),be(416,`
                  `),ke(417,`input`,26),sN(),be(418,`
                  `),L(419,`label`,27),be(420,`Cras justo odio`),P(),be(421,`
                `),P(),be(422,`
              `),P(),be(423,`
              `),L(424,`label`,28),be(425,`
                `),L(426,`c-form-check`),be(427,`
                  `),ke(428,`input`,29),sN(),be(429,`
                  `),L(430,`span`,30),be(431,`Dapibus ac facilisis in`),P(),be(432,`
                `),P(),be(433,`
              `),P(),be(434,`
              `),L(435,`li`,31),be(436,`
                `),L(437,`c-form-check`),be(438,`
                  `),ke(439,`input`,32),sN(),be(440,`
                  `),L(441,`label`,27),be(442,`Morbi leo risus`),P(),be(443,`
                `),P(),be(444,`
              `),P(),be(445,`
              `),L(446,`li`,31),be(447,`
                `),L(448,`c-form-check`),be(449,`
                  `),ke(450,`input`,33),sN(),be(451,`
                  `),L(452,`label`,27),be(453,`Orta ac consectetur ac`),P(),be(454,`
                `),P(),be(455,`
              `),P(),be(456,`
              `),L(457,`li`,31),be(458,`
                `),L(459,`c-form-check`),be(460,`
                  `),ke(461,`input`,34),sN(),be(462,`
                  `),L(463,`label`,27),be(464,`Vestibulum at eros`),P(),be(465,`
                `),P(),be(466,`
              `),P(),be(467,`
            `),P(),be(468,`
            `),L(469,`button`,35),be(470,`Submit`),P(),be(471,`
          `),P(),be(472,`
        `),P(),be(473,`
      `),P(),be(474,`
    `),P(),be(475,`
  `),P(),be(476,`
`),P()),a&2&&(C(26),Do(o.sampleList),C(35),Do(o.sampleList),C(35),Do(o.sampleList),C(50),Do(o.sampleList),C(32),Do(o.sampleList),C(43),Do(o.breakpoints),C(28),Do(o.colors),C(20),Do(o.colors),C(29),Do(o.sampleList),C(32),V(`active`,!0),C(79),V(`formGroup`,o.checkBoxes),C(2),V(`flush`,!0),C(6),cN(),C(11),cN(),C(11),cN(),C(11),cN(),C(11),cN())},dependencies:[Ste,dP,ua,rP,da,E,Rte,Ote,Zee,Zn,Ln,Mt,Tn,Gn,on,gn,mte,vte,bte,Cw,JL,c],encapsulation:2})}};export{R as ListGroupsComponent};