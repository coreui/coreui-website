import{$ as JT,$n as eb,Hr as ow,Ii as zw,In as b,Ir as nm,Kt as Tm,Pn as au,Rr as nu,_i as vD,mr as iw,on as XT,qr as qg,ri as rs,rn as Wg,tn as Wb}from"./chunk-C5fCWXIE.js";import"./chunk-B5RQ6SWk.js";import{$t as cf,B as JS,I as Ii,Jn as sF,K as Kv,Kt as aF,S as Ds,Ut as ZN,X as MF,_t as Ro,ar as vF,cr as wF,ir as ux,mr as xr,pt as QN,ur as wr,ut as Po,wn as ko,wt as Tm$1,x as Dr,yr as z2}from"./main-4THZKH4L.js";import{t as I}from"./chunk-BvSpgkG7.js";import"./chunk-BEWTkpuw.js";import"./chunk-B0N1zF-G.js";import{t as c}from"./chunk-CzmqzJbh.js";function W(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`li`,31),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit;vD(2),Tm(a)}}function q(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`li`,36),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;vD(),Wg(`active`,o===0),vD(),Tm(a)}}function O(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`button`,37),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;vD(),Wg(`disabled`,o===0),vD(),Tm(a)}}function J(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`a`,38),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;vD(),Wg(`active`,o===0)(`disabled`,o===u-1),vD(),Tm(a)}}function K(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`li`,31),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit;vD(2),Tm(a)}}function Q(r,l){if(r&1&&(Wb(0,`
            `),rs(1,`ul`,39),Wb(2,`
              `),rs(3,`li`,31),Wb(4,`Cras justo odio`),nu(),Wb(5,`
              `),rs(6,`li`,31),Wb(7,`Dapibus ac facilisis in`),nu(),Wb(8,`
              `),rs(9,`li`,31),Wb(10,`Morbi leo risus`),nu(),Wb(11,`
            `),nu(),Wb(12,`
          `)),r&2){let a=l.$implicit;vD(),Wg(`horizontal`,a)}}function X(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`li`,40),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit;vD(),Wg(`color`,a),vD(),au(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`a`,41),Wb(2),nu(),Wb(3,`
            `)),r&2){let a=l.$implicit;vD(),Wg(`color`,a),vD(),au(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(Wb(0,`
              `),rs(1,`button`,42),Wb(2),rs(3,`c-badge`,43),Wb(4),nu(),Wb(5,`
              `),nu(),Wb(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;vD(),Wg(`disabled`,o===u-1),vD(),au(`
                `,a,`
                `),vD(),Wg(`color`,o===u-1?`secondary`:`primary`),vD(),Tm(o+1)}}var R=class r{constructor(){this.formBuilder=b(ZN);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=zw({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(rs(0,`c-row`),Wb(1,`
  `),rs(2,`c-col`,0),Wb(3,`
    `),qg(4,`app-docs-components`,1),Wb(5,`
    `),rs(6,`c-card`,2),Wb(7,`
      `),rs(8,`c-card-header`),Wb(9,`
        `),rs(10,`strong`),Wb(11,`Angular List Group`),nu(),Wb(12,` `),rs(13,`small`),Wb(14,`Basic example`),nu(),Wb(15,`
      `),nu(),Wb(16,`
      `),rs(17,`c-card-body`),Wb(18,`
        `),rs(19,`p`,3),Wb(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),nu(),Wb(21,`
        `),rs(22,`app-docs-example`,4),Wb(23,`
          `),rs(24,`ul`,5),Wb(25,`
            `),XT(26,W,4,1,null,null,JT),nu(),Wb(28,`
        `),nu(),Wb(29,`
      `),nu(),Wb(30,`
    `),nu(),Wb(31,`
  `),nu(),Wb(32,`
  `),rs(33,`c-col`,0),Wb(34,`
    `),rs(35,`c-card`,2),Wb(36,`
      `),rs(37,`c-card-header`),Wb(38,`
        `),rs(39,`strong`),Wb(40,`Angular List Group`),nu(),Wb(41,` `),rs(42,`small`),Wb(43,`Active items`),nu(),Wb(44,`
      `),nu(),Wb(45,`
      `),rs(46,`c-card-body`),Wb(47,`
        `),rs(48,`p`,3),Wb(49,`
          Add `),rs(50,`code`),Wb(51,`active`),nu(),Wb(52,` boolean property to a
          `),rs(53,`code`),Wb(54,`cListGroupItem`),nu(),Wb(55,` to show the current active selection.
        `),nu(),Wb(56,`
        `),rs(57,`app-docs-example`,6),Wb(58,`
          `),rs(59,`ul`,5),Wb(60,`
            `),XT(61,q,4,2,null,null,JT),nu(),Wb(63,`
        `),nu(),Wb(64,`
      `),nu(),Wb(65,`
    `),nu(),Wb(66,`
  `),nu(),Wb(67,`
  `),rs(68,`c-col`,0),Wb(69,`
    `),rs(70,`c-card`,2),Wb(71,`
      `),rs(72,`c-card-header`),Wb(73,`
        `),rs(74,`strong`),Wb(75,`Angular List Group`),nu(),Wb(76,` `),rs(77,`small`),Wb(78,`Disabled items`),nu(),Wb(79,`
      `),nu(),Wb(80,`
      `),rs(81,`c-card-body`),Wb(82,`
        `),rs(83,`p`,3),Wb(84,`
          Add `),rs(85,`code`),Wb(86,`disabled`),nu(),Wb(87,` boolean property to a
          `),rs(88,`code`),Wb(89,`cListGroupItem`),nu(),Wb(90,` to make it appear disabled.
        `),nu(),Wb(91,`
        `),rs(92,`app-docs-example`,7),Wb(93,`
          `),rs(94,`div`,5),Wb(95,`
            `),XT(96,O,4,2,null,null,JT),nu(),Wb(98,`
        `),nu(),Wb(99,`
      `),nu(),Wb(100,`
    `),nu(),Wb(101,`
  `),nu(),Wb(102,`
  `),rs(103,`c-col`,0),Wb(104,`
    `),rs(105,`c-card`,2),Wb(106,`
      `),rs(107,`c-card-header`),Wb(108,`
        `),rs(109,`strong`),Wb(110,`Angular List Group`),nu(),Wb(111,` `),rs(112,`small`),Wb(113,`Links and buttons`),nu(),Wb(114,`
      `),nu(),Wb(115,`
      `),rs(116,`c-card-body`),Wb(117,`
        `),rs(118,`p`,3),Wb(119,`
          Use `),rs(120,`code`),Wb(121,`<a>`),nu(),Wb(122,`s or `),rs(123,`code`),Wb(124,`<button>`),nu(),Wb(125,`s to create
          `),rs(126,`em`),Wb(127,`actionable`),nu(),Wb(128,` list group items with hover, disabled, and active
          states with `),rs(129,`code`),Wb(130,`a`),nu(),Wb(131,` or `),rs(132,`code`),Wb(133,`button`),nu(),Wb(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),rs(135,`code`),Wb(136,`<li>`),nu(),Wb(137,` or
          `),rs(138,`code`),Wb(139,`<div>`),nu(),Wb(140,`) don't provide a click or tap affordance.
        `),nu(),Wb(141,`
        `),rs(142,`app-docs-example`,8),Wb(143,`
          `),rs(144,`div`,5),Wb(145,`
            `),XT(146,J,4,3,null,null,JT),nu(),Wb(148,`
        `),nu(),Wb(149,`
      `),nu(),Wb(150,`
    `),nu(),Wb(151,`
  `),nu(),Wb(152,`
  `),rs(153,`c-col`,0),Wb(154,`
    `),rs(155,`c-card`,2),Wb(156,`
      `),rs(157,`c-card-header`),Wb(158,`
        `),rs(159,`strong`),Wb(160,`Angular List Group`),nu(),Wb(161,` `),rs(162,`small`),Wb(163,`Flush`),nu(),Wb(164,`
      `),nu(),Wb(165,`
      `),rs(166,`c-card-body`),Wb(167,`
        `),rs(168,`p`,3),Wb(169,`
          Add `),rs(170,`code`),Wb(171,`flush`),nu(),Wb(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),nu(),Wb(173,`
        `),rs(174,`app-docs-example`,9),Wb(175,`
          `),rs(176,`ul`,10),Wb(177,`
            `),XT(178,K,4,1,null,null,JT),nu(),Wb(180,`
        `),nu(),Wb(181,`
      `),nu(),Wb(182,`
    `),nu(),Wb(183,`
  `),nu(),Wb(184,`
  `),rs(185,`c-col`,0),Wb(186,`
    `),rs(187,`c-card`,2),Wb(188,`
      `),rs(189,`c-card-header`),Wb(190,`
        `),rs(191,`strong`),Wb(192,`Angular List Group`),nu(),Wb(193,` `),rs(194,`small`),Wb(195,`Horizontal`),nu(),Wb(196,`
      `),nu(),Wb(197,`
      `),rs(198,`c-card-body`),Wb(199,`
        `),rs(200,`p`,3),Wb(201,`
          Add `),rs(202,`code`),Wb(203,`layout="horizontal"`),nu(),Wb(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),qg(205,`br`),Wb(206,`
          Alternatively, choose a responsive variant
          `),rs(207,`code`),Wb(208,`[horizontal]="sm | md | lg | xl | xxl"`),nu(),Wb(209,`
          to make a list group horizontal starting at that breakpoint's
          `),rs(210,`code`),Wb(211,`min-width`),nu(),Wb(212,`. `),qg(213,`br`),Wb(214,`
          Currently `),rs(215,`strong`),Wb(216,`horizontal list groups cannot be combined with flush list groups.`),nu(),Wb(217,`
        `),nu(),Wb(218,`
        `),rs(219,`app-docs-example`,9),Wb(220,`
          `),XT(221,Q,13,1,null,null,JT),nu(),Wb(223,`
      `),nu(),Wb(224,`
    `),nu(),Wb(225,`
  `),nu(),Wb(226,`
  `),rs(227,`c-col`,0),Wb(228,`
    `),rs(229,`c-card`,2),Wb(230,`
      `),rs(231,`c-card-header`),Wb(232,`
        `),rs(233,`strong`),Wb(234,`Angular List Group`),nu(),Wb(235,` `),rs(236,`small`),Wb(237,`Contextual classes`),nu(),Wb(238,`
      `),nu(),Wb(239,`
      `),rs(240,`c-card-body`),Wb(241,`
        `),rs(242,`p`,3),Wb(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),nu(),Wb(244,`
        `),rs(245,`app-docs-example`,11),Wb(246,`
          `),rs(247,`ul`,12),Wb(248,`
            `),XT(249,X,4,2,null,null,JT),nu(),Wb(251,`
        `),nu(),Wb(252,`
        `),rs(253,`p`,13),Wb(254,`
          Contextual classes also work with `),rs(255,`code`),Wb(256,`<a>`),nu(),Wb(257,` or
          `),rs(258,`code`),Wb(259,`<button>`),nu(),Wb(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),rs(261,`code`),Wb(262,`active`),nu(),Wb(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),nu(),Wb(264,`
        `),rs(265,`app-docs-example`,11),Wb(266,`
          `),rs(267,`div`,5),Wb(268,`
            `),XT(269,Y,4,2,null,null,JT),nu(),Wb(271,`
        `),nu(),Wb(272,`
      `),nu(),Wb(273,`
    `),nu(),Wb(274,`
  `),nu(),Wb(275,`
  `),rs(276,`c-col`,0),Wb(277,`
    `),rs(278,`c-card`,2),Wb(279,`
      `),rs(280,`c-card-header`),Wb(281,`
        `),rs(282,`strong`),Wb(283,`Angular List Group`),nu(),Wb(284,` `),rs(285,`small`),Wb(286,`With badges`),nu(),Wb(287,`
      `),nu(),Wb(288,`
      `),rs(289,`c-card-body`),Wb(290,`
        `),rs(291,`p`,3),Wb(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),nu(),Wb(293,`
        `),rs(294,`app-docs-example`,14),Wb(295,`
          `),rs(296,`div`,5),Wb(297,`
            `),XT(298,Z,7,4,null,null,JT),nu(),Wb(300,`
        `),nu(),Wb(301,`
      `),nu(),Wb(302,`
    `),nu(),Wb(303,`
  `),nu(),Wb(304,`
  `),rs(305,`c-col`,0),Wb(306,`
    `),rs(307,`c-card`,2),Wb(308,`
      `),rs(309,`c-card-header`),Wb(310,`
        `),rs(311,`strong`),Wb(312,`Angular List Group`),nu(),Wb(313,` `),rs(314,`small`),Wb(315,`Custom content`),nu(),Wb(316,`
      `),nu(),Wb(317,`
      `),rs(318,`c-card-body`),Wb(319,`
        `),rs(320,`p`,3),Wb(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),rs(322,`a`,15),Wb(323,`flexbox utilities`),nu(),Wb(324,`.
        `),nu(),Wb(325,`
        `),rs(326,`app-docs-example`,16),Wb(327,`
          `),rs(328,`div`,5),Wb(329,`
            `),rs(330,`a`,17),Wb(331,`
              `),rs(332,`div`,18),Wb(333,`
                `),rs(334,`h5`,19),Wb(335,`List group item heading`),nu(),Wb(336,`
                `),rs(337,`small`),Wb(338,`3 days ago`),nu(),Wb(339,`
              `),nu(),Wb(340,`
              `),rs(341,`p`,19),Wb(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),nu(),Wb(343,`
              `),rs(344,`small`),Wb(345,`Donec id elit non mi porta.`),nu(),Wb(346,`
            `),nu(),Wb(347,`
            `),rs(348,`a`,20),Wb(349,`
              `),rs(350,`div`,18),Wb(351,`
                `),rs(352,`h5`,19),Wb(353,`List group item heading`),nu(),Wb(354,`
                `),rs(355,`small`,21),Wb(356,`3 days ago`),nu(),Wb(357,`
              `),nu(),Wb(358,`
              `),rs(359,`p`,19),Wb(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),nu(),Wb(361,`
              `),rs(362,`small`,21),Wb(363,`Donec id elit non mi porta.`),nu(),Wb(364,`
            `),nu(),Wb(365,`
            `),rs(366,`a`,20),Wb(367,`
              `),rs(368,`div`,18),Wb(369,`
                `),rs(370,`h5`,19),Wb(371,`List group item heading`),nu(),Wb(372,`
                `),rs(373,`small`,21),Wb(374,`3 days ago`),nu(),Wb(375,`
              `),nu(),Wb(376,`
              `),rs(377,`p`,19),Wb(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),nu(),Wb(379,`
              `),rs(380,`small`,21),Wb(381,`Donec id elit non mi porta.`),nu(),Wb(382,`
            `),nu(),Wb(383,`
          `),nu(),Wb(384,`
        `),nu(),Wb(385,`
      `),nu(),Wb(386,`
    `),nu(),Wb(387,`
  `),nu(),Wb(388,`
  `),rs(389,`c-col`,0),Wb(390,`
    `),rs(391,`c-card`,2),Wb(392,`
      `),rs(393,`c-card-header`),Wb(394,`
        `),rs(395,`strong`),Wb(396,`Angular List Group`),nu(),Wb(397,` `),rs(398,`small`),Wb(399,`Checkboxes and radios`),nu(),Wb(400,`
      `),nu(),Wb(401,`
      `),rs(402,`c-card-body`),Wb(403,`
        `),rs(404,`p`,3),Wb(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),nu(),Wb(406,`
        `),rs(407,`app-docs-example`,22),Wb(408,`
          `),rs(409,`form`,23),nm(`ngSubmit`,function(){return o.logValue()}),Wb(410,`
            `),rs(411,`ul`,24),Wb(412,`
              `),rs(413,`button`,25),nm(`click`,function(){return o.setValue(`one`)}),Wb(414,`
                `),rs(415,`c-form-check`),Wb(416,`
                  `),qg(417,`input`,26),ow(),Wb(418,`
                  `),rs(419,`label`,27),Wb(420,`Cras justo odio`),nu(),Wb(421,`
                `),nu(),Wb(422,`
              `),nu(),Wb(423,`
              `),rs(424,`label`,28),Wb(425,`
                `),rs(426,`c-form-check`),Wb(427,`
                  `),qg(428,`input`,29),ow(),Wb(429,`
                  `),rs(430,`span`,30),Wb(431,`Dapibus ac facilisis in`),nu(),Wb(432,`
                `),nu(),Wb(433,`
              `),nu(),Wb(434,`
              `),rs(435,`li`,31),Wb(436,`
                `),rs(437,`c-form-check`),Wb(438,`
                  `),qg(439,`input`,32),ow(),Wb(440,`
                  `),rs(441,`label`,27),Wb(442,`Morbi leo risus`),nu(),Wb(443,`
                `),nu(),Wb(444,`
              `),nu(),Wb(445,`
              `),rs(446,`li`,31),Wb(447,`
                `),rs(448,`c-form-check`),Wb(449,`
                  `),qg(450,`input`,33),ow(),Wb(451,`
                  `),rs(452,`label`,27),Wb(453,`Orta ac consectetur ac`),nu(),Wb(454,`
                `),nu(),Wb(455,`
              `),nu(),Wb(456,`
              `),rs(457,`li`,31),Wb(458,`
                `),rs(459,`c-form-check`),Wb(460,`
                  `),qg(461,`input`,34),ow(),Wb(462,`
                  `),rs(463,`label`,27),Wb(464,`Vestibulum at eros`),nu(),Wb(465,`
                `),nu(),Wb(466,`
              `),nu(),Wb(467,`
            `),nu(),Wb(468,`
            `),rs(469,`button`,35),Wb(470,`Submit`),nu(),Wb(471,`
          `),nu(),Wb(472,`
        `),nu(),Wb(473,`
      `),nu(),Wb(474,`
    `),nu(),Wb(475,`
  `),nu(),Wb(476,`
`),nu()),a&2&&(vD(26),eb(o.sampleList),vD(35),eb(o.sampleList),vD(35),eb(o.sampleList),vD(50),eb(o.sampleList),vD(32),eb(o.sampleList),vD(43),eb(o.breakpoints),vD(28),eb(o.colors),vD(20),eb(o.colors),vD(29),eb(o.sampleList),vD(32),Wg(`active`,!0),vD(79),Wg(`formGroup`,o.checkBoxes),vD(2),Wg(`flush`,!0),vD(6),iw(),vD(11),iw(),vD(11),iw(),vD(11),iw(),vD(11),iw())},dependencies:[vF,ux,Ro,JS,Po,I,MF,wF,z2,xr,QN,Kv,Ii,Ds,Dr,wr,aF,sF,cf,Tm$1,ko,c],encapsulation:2})}};export{R as ListGroupsComponent};