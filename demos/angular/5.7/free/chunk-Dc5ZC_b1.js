import{C as Doe,Ci as qi,Dt as O$1,En as Xre,Ft as Pa,Jr as le,P as FV,Pr as jB,Qt as Sr,Rt as Qn,St as Moe,Wt as Re,Yt as S,Z as IN,Zn as boe,_a as zi,_n as VV,_t as Loe,ai as nH,bn as WX,d as BX,da as yj,en as T,ga as zX,gn as V,gt as La,ht as LX,ir as dk,j as F,oa as xe,p as Boe,qt as Roe,t as $X,ta as wj,ua as ye,vi as pk,wr as h}from"./main-V43LM6ZM.js";import{t as E}from"./chunk-CEDFgtFR.js";import{t as c}from"./chunk-5zb9-ukN.js";function W(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`li`,31),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;S(2),xe(r)}}function q(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`li`,36),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;S(),V(`active`,o===0),S(),xe(r)}}function O(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`button`,37),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit,o=l.$index;S(),V(`disabled`,o===0),S(),xe(r)}}function J(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`a`,38),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;S(),V(`active`,o===0)(`disabled`,o===p-1),S(),xe(r)}}function K(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`li`,31),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;S(2),xe(r)}}function Q(a,l){if(a&1&&(ye(0,`
            `),O$1(1,`ul`,39),ye(2,`
              `),O$1(3,`li`,31),ye(4,`Cras justo odio`),F(),ye(5,`
              `),O$1(6,`li`,31),ye(7,`Dapibus ac facilisis in`),F(),ye(8,`
              `),O$1(9,`li`,31),ye(10,`Morbi leo risus`),F(),ye(11,`
            `),F(),ye(12,`
          `)),a&2){let r=l.$implicit;S(),V(`horizontal`,r)}}function X(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`li`,40),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;S(),V(`color`,r),S(),Qn(`
                A simple `,r,` list group item
              `)}}function Y(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`a`,41),ye(2),F(),ye(3,`
            `)),a&2){let r=l.$implicit;S(),V(`color`,r),S(),Qn(`
                A simple `,r,` list group item
              `)}}function Z(a,l){if(a&1&&(ye(0,`
              `),O$1(1,`button`,42),ye(2),O$1(3,`c-badge`,43),ye(4),F(),ye(5,`
              `),F(),ye(6,`
            `)),a&2){let r=l.$implicit,o=l.$index,p=l.$count;S(),V(`disabled`,o===p-1),S(),Qn(`
                `,r,`
                `),S(),V(`color`,o===p-1?`secondary`:`primary`),S(),xe(o+1)}}var R=class a{constructor(){this.formBuilder=h(zX);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let r=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!r,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(r){return new(r||a)}}static{this.ɵcmp=T({type:a,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(r,o){r&1&&(O$1(0,`c-row`),ye(1,`
  `),O$1(2,`c-col`,0),ye(3,`
    `),Re(4,`app-docs-components`,1),ye(5,`
    `),O$1(6,`c-card`,2),ye(7,`
      `),O$1(8,`c-card-header`),ye(9,`
        `),O$1(10,`strong`),ye(11,`Angular List Group`),F(),ye(12,` `),O$1(13,`small`),ye(14,`Basic example`),F(),ye(15,`
      `),F(),ye(16,`
      `),O$1(17,`c-card-body`),ye(18,`
        `),O$1(19,`p`,3),ye(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),F(),ye(21,`
        `),O$1(22,`app-docs-example`,4),ye(23,`
          `),O$1(24,`ul`,5),ye(25,`
            `),qi(26,W,4,1,null,null,Sr),F(),ye(28,`
        `),F(),ye(29,`
      `),F(),ye(30,`
    `),F(),ye(31,`
  `),F(),ye(32,`
  `),O$1(33,`c-col`,0),ye(34,`
    `),O$1(35,`c-card`,2),ye(36,`
      `),O$1(37,`c-card-header`),ye(38,`
        `),O$1(39,`strong`),ye(40,`Angular List Group`),F(),ye(41,` `),O$1(42,`small`),ye(43,`Active items`),F(),ye(44,`
      `),F(),ye(45,`
      `),O$1(46,`c-card-body`),ye(47,`
        `),O$1(48,`p`,3),ye(49,`
          Add `),O$1(50,`code`),ye(51,`active`),F(),ye(52,` boolean property to a
          `),O$1(53,`code`),ye(54,`cListGroupItem`),F(),ye(55,` to show the current active selection.
        `),F(),ye(56,`
        `),O$1(57,`app-docs-example`,6),ye(58,`
          `),O$1(59,`ul`,5),ye(60,`
            `),qi(61,q,4,2,null,null,Sr),F(),ye(63,`
        `),F(),ye(64,`
      `),F(),ye(65,`
    `),F(),ye(66,`
  `),F(),ye(67,`
  `),O$1(68,`c-col`,0),ye(69,`
    `),O$1(70,`c-card`,2),ye(71,`
      `),O$1(72,`c-card-header`),ye(73,`
        `),O$1(74,`strong`),ye(75,`Angular List Group`),F(),ye(76,` `),O$1(77,`small`),ye(78,`Disabled items`),F(),ye(79,`
      `),F(),ye(80,`
      `),O$1(81,`c-card-body`),ye(82,`
        `),O$1(83,`p`,3),ye(84,`
          Add `),O$1(85,`code`),ye(86,`disabled`),F(),ye(87,` boolean property to a
          `),O$1(88,`code`),ye(89,`cListGroupItem`),F(),ye(90,` to make it appear disabled.
        `),F(),ye(91,`
        `),O$1(92,`app-docs-example`,7),ye(93,`
          `),O$1(94,`div`,5),ye(95,`
            `),qi(96,O,4,2,null,null,Sr),F(),ye(98,`
        `),F(),ye(99,`
      `),F(),ye(100,`
    `),F(),ye(101,`
  `),F(),ye(102,`
  `),O$1(103,`c-col`,0),ye(104,`
    `),O$1(105,`c-card`,2),ye(106,`
      `),O$1(107,`c-card-header`),ye(108,`
        `),O$1(109,`strong`),ye(110,`Angular List Group`),F(),ye(111,` `),O$1(112,`small`),ye(113,`Links and buttons`),F(),ye(114,`
      `),F(),ye(115,`
      `),O$1(116,`c-card-body`),ye(117,`
        `),O$1(118,`p`,3),ye(119,`
          Use `),O$1(120,`code`),ye(121,`<a>`),F(),ye(122,`s or `),O$1(123,`code`),ye(124,`<button>`),F(),ye(125,`s to create
          `),O$1(126,`em`),ye(127,`actionable`),F(),ye(128,` list group items with hover, disabled, and active
          states with `),O$1(129,`code`),ye(130,`a`),F(),ye(131,` or `),O$1(132,`code`),ye(133,`button`),F(),ye(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),O$1(135,`code`),ye(136,`<li>`),F(),ye(137,` or
          `),O$1(138,`code`),ye(139,`<div>`),F(),ye(140,`) don't provide a click or tap affordance.
        `),F(),ye(141,`
        `),O$1(142,`app-docs-example`,8),ye(143,`
          `),O$1(144,`div`,5),ye(145,`
            `),qi(146,J,4,3,null,null,Sr),F(),ye(148,`
        `),F(),ye(149,`
      `),F(),ye(150,`
    `),F(),ye(151,`
  `),F(),ye(152,`
  `),O$1(153,`c-col`,0),ye(154,`
    `),O$1(155,`c-card`,2),ye(156,`
      `),O$1(157,`c-card-header`),ye(158,`
        `),O$1(159,`strong`),ye(160,`Angular List Group`),F(),ye(161,` `),O$1(162,`small`),ye(163,`Flush`),F(),ye(164,`
      `),F(),ye(165,`
      `),O$1(166,`c-card-body`),ye(167,`
        `),O$1(168,`p`,3),ye(169,`
          Add `),O$1(170,`code`),ye(171,`flush`),F(),ye(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),F(),ye(173,`
        `),O$1(174,`app-docs-example`,9),ye(175,`
          `),O$1(176,`ul`,10),ye(177,`
            `),qi(178,K,4,1,null,null,Sr),F(),ye(180,`
        `),F(),ye(181,`
      `),F(),ye(182,`
    `),F(),ye(183,`
  `),F(),ye(184,`
  `),O$1(185,`c-col`,0),ye(186,`
    `),O$1(187,`c-card`,2),ye(188,`
      `),O$1(189,`c-card-header`),ye(190,`
        `),O$1(191,`strong`),ye(192,`Angular List Group`),F(),ye(193,` `),O$1(194,`small`),ye(195,`Horizontal`),F(),ye(196,`
      `),F(),ye(197,`
      `),O$1(198,`c-card-body`),ye(199,`
        `),O$1(200,`p`,3),ye(201,`
          Add `),O$1(202,`code`),ye(203,`layout="horizontal"`),F(),ye(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Re(205,`br`),ye(206,`
          Alternatively, choose a responsive variant
          `),O$1(207,`code`),ye(208,`[horizontal]="sm | md | lg | xl | xxl"`),F(),ye(209,`
          to make a list group horizontal starting at that breakpoint's
          `),O$1(210,`code`),ye(211,`min-width`),F(),ye(212,`. `),Re(213,`br`),ye(214,`
          Currently `),O$1(215,`strong`),ye(216,`horizontal list groups cannot be combined with flush list groups.`),F(),ye(217,`
        `),F(),ye(218,`
        `),O$1(219,`app-docs-example`,9),ye(220,`
          `),qi(221,Q,13,1,null,null,Sr),F(),ye(223,`
      `),F(),ye(224,`
    `),F(),ye(225,`
  `),F(),ye(226,`
  `),O$1(227,`c-col`,0),ye(228,`
    `),O$1(229,`c-card`,2),ye(230,`
      `),O$1(231,`c-card-header`),ye(232,`
        `),O$1(233,`strong`),ye(234,`Angular List Group`),F(),ye(235,` `),O$1(236,`small`),ye(237,`Contextual classes`),F(),ye(238,`
      `),F(),ye(239,`
      `),O$1(240,`c-card-body`),ye(241,`
        `),O$1(242,`p`,3),ye(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),F(),ye(244,`
        `),O$1(245,`app-docs-example`,11),ye(246,`
          `),O$1(247,`ul`,12),ye(248,`
            `),qi(249,X,4,2,null,null,Sr),F(),ye(251,`
        `),F(),ye(252,`
        `),O$1(253,`p`,13),ye(254,`
          Contextual classes also work with `),O$1(255,`code`),ye(256,`<a>`),F(),ye(257,` or
          `),O$1(258,`code`),ye(259,`<button>`),F(),ye(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),O$1(261,`code`),ye(262,`active`),F(),ye(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),F(),ye(264,`
        `),O$1(265,`app-docs-example`,11),ye(266,`
          `),O$1(267,`div`,5),ye(268,`
            `),qi(269,Y,4,2,null,null,Sr),F(),ye(271,`
        `),F(),ye(272,`
      `),F(),ye(273,`
    `),F(),ye(274,`
  `),F(),ye(275,`
  `),O$1(276,`c-col`,0),ye(277,`
    `),O$1(278,`c-card`,2),ye(279,`
      `),O$1(280,`c-card-header`),ye(281,`
        `),O$1(282,`strong`),ye(283,`Angular List Group`),F(),ye(284,` `),O$1(285,`small`),ye(286,`With badges`),F(),ye(287,`
      `),F(),ye(288,`
      `),O$1(289,`c-card-body`),ye(290,`
        `),O$1(291,`p`,3),ye(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),F(),ye(293,`
        `),O$1(294,`app-docs-example`,14),ye(295,`
          `),O$1(296,`div`,5),ye(297,`
            `),qi(298,Z,7,4,null,null,Sr),F(),ye(300,`
        `),F(),ye(301,`
      `),F(),ye(302,`
    `),F(),ye(303,`
  `),F(),ye(304,`
  `),O$1(305,`c-col`,0),ye(306,`
    `),O$1(307,`c-card`,2),ye(308,`
      `),O$1(309,`c-card-header`),ye(310,`
        `),O$1(311,`strong`),ye(312,`Angular List Group`),F(),ye(313,` `),O$1(314,`small`),ye(315,`Custom content`),F(),ye(316,`
      `),F(),ye(317,`
      `),O$1(318,`c-card-body`),ye(319,`
        `),O$1(320,`p`,3),ye(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),O$1(322,`a`,15),ye(323,`flexbox utilities`),F(),ye(324,`.
        `),F(),ye(325,`
        `),O$1(326,`app-docs-example`,16),ye(327,`
          `),O$1(328,`div`,5),ye(329,`
            `),O$1(330,`a`,17),ye(331,`
              `),O$1(332,`div`,18),ye(333,`
                `),O$1(334,`h5`,19),ye(335,`List group item heading`),F(),ye(336,`
                `),O$1(337,`small`),ye(338,`3 days ago`),F(),ye(339,`
              `),F(),ye(340,`
              `),O$1(341,`p`,19),ye(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),F(),ye(343,`
              `),O$1(344,`small`),ye(345,`Donec id elit non mi porta.`),F(),ye(346,`
            `),F(),ye(347,`
            `),O$1(348,`a`,20),ye(349,`
              `),O$1(350,`div`,18),ye(351,`
                `),O$1(352,`h5`,19),ye(353,`List group item heading`),F(),ye(354,`
                `),O$1(355,`small`,21),ye(356,`3 days ago`),F(),ye(357,`
              `),F(),ye(358,`
              `),O$1(359,`p`,19),ye(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),F(),ye(361,`
              `),O$1(362,`small`,21),ye(363,`Donec id elit non mi porta.`),F(),ye(364,`
            `),F(),ye(365,`
            `),O$1(366,`a`,20),ye(367,`
              `),O$1(368,`div`,18),ye(369,`
                `),O$1(370,`h5`,19),ye(371,`List group item heading`),F(),ye(372,`
                `),O$1(373,`small`,21),ye(374,`3 days ago`),F(),ye(375,`
              `),F(),ye(376,`
              `),O$1(377,`p`,19),ye(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),F(),ye(379,`
              `),O$1(380,`small`,21),ye(381,`Donec id elit non mi porta.`),F(),ye(382,`
            `),F(),ye(383,`
          `),F(),ye(384,`
        `),F(),ye(385,`
      `),F(),ye(386,`
    `),F(),ye(387,`
  `),F(),ye(388,`
  `),O$1(389,`c-col`,0),ye(390,`
    `),O$1(391,`c-card`,2),ye(392,`
      `),O$1(393,`c-card-header`),ye(394,`
        `),O$1(395,`strong`),ye(396,`Angular List Group`),F(),ye(397,` `),O$1(398,`small`),ye(399,`Checkboxes and radios`),F(),ye(400,`
      `),F(),ye(401,`
      `),O$1(402,`c-card-body`),ye(403,`
        `),O$1(404,`p`,3),ye(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),F(),ye(406,`
        `),O$1(407,`app-docs-example`,22),ye(408,`
          `),O$1(409,`form`,23),le(`ngSubmit`,function(){return o.logValue()}),ye(410,`
            `),O$1(411,`ul`,24),ye(412,`
              `),O$1(413,`button`,25),le(`click`,function(){return o.setValue(`one`)}),ye(414,`
                `),O$1(415,`c-form-check`),ye(416,`
                  `),O$1(417,`input`,26),dk(),F(),ye(418,`
                  `),O$1(419,`label`,27),ye(420,`Cras justo odio`),F(),ye(421,`
                `),F(),ye(422,`
              `),F(),ye(423,`
              `),O$1(424,`label`,28),ye(425,`
                `),O$1(426,`c-form-check`),ye(427,`
                  `),O$1(428,`input`,29),dk(),F(),ye(429,`
                  `),O$1(430,`span`,30),ye(431,`Dapibus ac facilisis in`),F(),ye(432,`
                `),F(),ye(433,`
              `),F(),ye(434,`
              `),O$1(435,`li`,31),ye(436,`
                `),O$1(437,`c-form-check`),ye(438,`
                  `),O$1(439,`input`,32),dk(),F(),ye(440,`
                  `),O$1(441,`label`,27),ye(442,`Morbi leo risus`),F(),ye(443,`
                `),F(),ye(444,`
              `),F(),ye(445,`
              `),O$1(446,`li`,31),ye(447,`
                `),O$1(448,`c-form-check`),ye(449,`
                  `),O$1(450,`input`,33),dk(),F(),ye(451,`
                  `),O$1(452,`label`,27),ye(453,`Orta ac consectetur ac`),F(),ye(454,`
                `),F(),ye(455,`
              `),F(),ye(456,`
              `),O$1(457,`li`,31),ye(458,`
                `),O$1(459,`c-form-check`),ye(460,`
                  `),O$1(461,`input`,34),dk(),F(),ye(462,`
                  `),O$1(463,`label`,27),ye(464,`Vestibulum at eros`),F(),ye(465,`
                `),F(),ye(466,`
              `),F(),ye(467,`
            `),F(),ye(468,`
            `),O$1(469,`button`,35),ye(470,`Submit`),F(),ye(471,`
          `),F(),ye(472,`
        `),F(),ye(473,`
      `),F(),ye(474,`
    `),F(),ye(475,`
  `),F(),ye(476,`
`),F()),r&2&&(S(26),zi(o.sampleList),S(35),zi(o.sampleList),S(35),zi(o.sampleList),S(50),zi(o.sampleList),S(32),zi(o.sampleList),S(43),zi(o.breakpoints),S(28),zi(o.colors),S(20),zi(o.colors),S(29),zi(o.sampleList),S(32),V(`active`,!0),S(79),V(`formGroup`,o.checkBoxes),S(2),V(`flush`,!0),S(6),pk(),S(11),pk(),S(11),pk(),S(11),pk(),S(11),pk())},dependencies:[Roe,nH,Pa,VV,La,E,Loe,Boe,Xre,WX,$X,jB,LX,BX,yj,wj,boe,Doe,Moe,IN,FV,c],encapsulation:2})}};export{R as ListGroupsComponent};